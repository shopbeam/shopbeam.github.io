(function (window) {
    var
        document = window.document,
        CA = window.CA || {},
        config = CA.config || {},
        defaultKeyValue = config.defaultKVP || "rasegs=seg2",
        rasegs = (!window.rasegs || window.rasegs == '') ? defaultKeyValue : window.rasegs;

    var isArray = function(arg) {
        return typeof arg == "object" && arg && arg instanceof Array;
    };

    var disableFirstPartyCookies = CA.disableFirstPartyCookies || false;

    var cookieEnabled =
        ("cookie" in document && (document.cookie.length > 0 ||
            (document.cookie = "test_cookie=testPermission").indexOf.call(document.cookie, "test_cookie=testPermission") > -1));

    var logLevel = CA.logLevel || window._ca_log_level || "OFF";
    var enableWarnLogs = logLevel == "WARN";
    var enableErrorLogs = enableWarnLogs || logLevel == "ERROR";

    // private
    function error(message, e) {
        if (enableErrorLogs) {
            if (typeof(console) != 'undefined') {
                if (typeof(console.error) == 'function') {
                    console.error("CA: " + message, e);
                } else if (typeof(console.log) == 'function') {
                    console.log("CA: Error: " + message, e);
                }
            }
        }
    }

    function warn(message) {
        if (enableWarnLogs) {
            if (typeof(console) != 'undefined' && typeof(console.log) == 'function') {
                console.log("CA: " + message);
            }
        }
    }

    function getNdlNdrParams() {
        var ndl = "", ndr = "", result = "";
        try {
            if (typeof(_ca_ndl) != 'undefined') {
                ndl = _ca_ndl;
            } else if (typeof(CA.ndl) != 'undefined') {
                ndl = CA.ndl;
            } else {
                ndl = encodeURIComponent(document.location.toString().substr(0, 1000));
            }
            if (typeof(_ca_ndr) != 'undefined') {
                ndr = _ca_ndr;
            } else if (typeof(CA.ndr) != 'undefined') {
                ndl = CA.ndr;
            } else {
                ndr = encodeURIComponent(document.referrer.toString().substr(0, 1000));
            }
        } catch (e) {
            error("URL set error", e);
        }
        if (ndl) result += "&ndl=" + ndl;
        if (ndr) result += "&ndr=" + ndr;
        return result;
    }

    var bindDartTag = function() {
        $(document).bind('dart_tag_render', function(event, tag){
            if (typeof tag != 'undefined') {
                var kvString = CA.getTargetKeyValues(";");
                return tag.replace(";ord", ";" + kvString + ";ord");
            }
            return tag;
        });
    };

    // public
    CA.createCookie = function (name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        document.cookie = name + "=" + value.replace(/;/g, '|') + expires + "; path=/";
    };

    CA.readCookie = function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) {
                return c.substring(nameEQ.length, c.length).replace(/\|/g, ';');
            }
        }
        return null;
    };

    CA.eraseCookie = function (name) {
        CA.createCookie(name, "", -1);
    };

    CA.cookieEnabled = function () {
        return cookieEnabled;
    };

    CA.firstPartyCookieEnabled = function () {
        return !disableFirstPartyCookies;
    };

    CA.doTargeting = function (o) {
        if (typeof o == "undefined") o = config;
        if (o.defaultKVP) {
            defaultKeyValue = o.defaultKVP;
            CA.setTargetKeyValues(o.defaultKVP);
        }
        if (typeof(o.id) == 'undefined' || !o.id) {
            error("Tag installation problem: no id");
            return;
        }
        if (!cookieEnabled) {
            warn("Cookies were disabled for this browser. Skip DFP request.");
            return;
        }
        try {
            var onload = '(function() {parent.CA.setTargetKeyValues(rasegs); with (parent.window) {';
            if (typeof o.onload != "undefined") {
                onload += o.onload + ';';
            }
            var ontimeout = o.ontimeout || o.onload;
            if (typeof ontimeout != "undefined") {
                window.setTimeout(ontimeout, o.timeout ? o.timeout : 1000);
            }
            var protocol = document.location.protocol != "https:" ? "http" : "https";
            var ca_url = protocol + "://p.raasnet.com/partners/dfp?" +
                "partner=" + o.id +
                "&ts=" + new Date().getTime() +
                "&tc=" + new Date().getTimezoneOffset();
            if( o.defaultKVP ) ca_url += '&def=' + encodeURIComponent( o.defaultKVP );
            if (!o.disableNdlNdr) ca_url += getNdlNdrParams();
            disableFirstPartyCookies = disableFirstPartyCookies || o.disableFirstPartyCookies;
            if (!disableFirstPartyCookies) {
                var uFromCookie = CA.readCookie("ca_u");
                ca_url += "&u=" + (uFromCookie != null ? uFromCookie : "-1");
                var rasegsFromCookie = CA.readCookie("rasegs");
                if (rasegsFromCookie != null) CA.setTargetKeyValues(rasegsFromCookie);
                onload += 'CA.createCookie("rasegs", CA.getTargetKeyValues(), 1);';
            }
            onload += '}})()';
            ca_url += (onload ? "&ol=" + encodeURIComponent(onload) : "");

            if (o.bindDartTag) bindDartTag();
            var iframe = document.createElement("iframe");
            (iframe.frameElement || iframe).style.cssText = "width: 0; height: 0; border: 0; display: none;";
            iframe.frameborder = 0;
            iframe.src = "javascript:false";
            var baseHead = document.getElementsByTagName("head")[0];
            var fdoc = baseHead.appendChild(iframe).contentWindow.document;
            fdoc.open();
            fdoc.write('<body onload="'+
                'var js = document.createElement(\'script\');'+
                'js.src = \''+ ca_url +'\';'+
                'document.body.appendChild(js);">');
            fdoc.close();
        } catch (e) {
            error("Unexpected error: " + e.message, e);
        }
    };

    // create alias for backward compatibility
    CA.radfp = CA.doTargeting;

    CA.getTargetKeyValues = function (splitSymbol) {
        if (typeof splitSymbol == "undefined" || splitSymbol == ",") {
            return rasegs;
        }
        return rasegs.replace(/,/g, splitSymbol);
    };

    CA.getTargetKeyValuesObject = function () {
        var keyValueObject = {};
        var keyValues = rasegs.split(',');
        for (var i = 0; i < keyValues.length; i++) {
            var kv = keyValues[i].split('=');
            if (!keyValueObject[kv[0]]) {
                keyValueObject[kv[0]] = [];
            }
            keyValueObject[kv[0]].push(kv[1]);
        }
        return keyValueObject;
    };

    CA.setTargetKeyValues = function (keyValues) {
        rasegs = keyValues;
        window.rasegs = rasegs;
    };

    CA.setGPTTargeting = function(that) {
        if (that && typeof(that.setTargeting) == "function") {
            var targetKeyValues = CA.getTargetKeyValuesObject();
            for (var p in targetKeyValues) {
                if (targetKeyValues.hasOwnProperty(p)) {
                    that.setTargeting(p, targetKeyValues[p]);
                }
            }
        } else {
            error("Incorrect GPT object passed");
        }
    };

    // Expose global parameters
    window.radfp = CA.radfp; // for backward compatibility
    window.rasegs = rasegs;
    window.CA = CA;


    // for defer function queue execute support
    var cmd = CA.cmd;
    if (!cmd || isArray(cmd)) {
        var resObject = CA.cmd = {push : function (arg) {
            for (var i = 0; i < arguments.length; i++) {
                if (typeof arguments[i] == "function") {
                    try {
                        arguments[i]();
                    } catch (e) {
                        error("Error in custom function: " + e.message, e);
                    }
                }
            }
        }};
        cmd && 0 < cmd.length && resObject.push.apply(resObject, cmd);
    }
})(window);