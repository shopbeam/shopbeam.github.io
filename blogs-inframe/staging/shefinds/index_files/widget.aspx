

// added this code to find all script tables that have a
// src value that has an api.content.ad widget.js call
var contentAdScriptUrl = "http://api.content.ad/Scripts/widget.aspx?id=c8d6f863-06f1-40b8-a436-963e764060ad&d=c2hlZmluZHMuY29t&wid=15807&cb=1395856971456";
var contentAdScript;

// regex that gets all widget.js calls from api.content.ad or test.api.content.ad
// with http, https, or neither
var contentAdUrlRegEx = new RegExp("^(?:http[s]?:)?//(?:test\\.)?api.content.ad/Scripts/widget.aspx\\?.*?", "i");
var scripts = document.getElementsByTagName("script");

// only add the scripts that are actual content.ad widget.js calls
for (var index = 0; index < scripts.length; ++index) {
    if (contentAdScriptUrl == scripts[index].src) {
        contentAdScript = scripts[index];
    }
}

var contentAdParams = (function () {
    var result = {}, queryString = contentAdScriptUrl.substring(contentAdScriptUrl.indexOf("id=")), re = /([^&=]+)=([^&]*)/g, m;
    while (m = re.exec(queryString)) {
        result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }

    result["lazyLoad"] = (result["lazyLoad"] == true ? true : false);
    result["server"] = (result["test"] == true ? "test.api.content.ad" : "api.content.ad");
    result["title"] = (result["title"] ? result["title"] : encodeURI(escape(document.title)));
    result["url"] = (result["url"] ? result["url"] : encodeURIComponent(window.location));
    return result;
} ());

var contentAdParamArray = [];
for (var key in contentAdParams) {
    contentAdParamArray.push(key + '=' + contentAdParams[key]);
}

var contentAdWidgetUrl = (location.protocol === 'https:' ? 'https:' : 'http:') + "//" + contentAdParams.server + "/GetWidget.aspx?" + contentAdParamArray.join('&');
var contentAdWidgetCodeLoaded = false;

function contentAdInit(widgetId, widgetUrl, script, lazyLoad, loadMultiple) {
    if (typeof (this["contentAd" + widgetId]) == 'undefined') {
        if (!contentAdWidgetCodeLoaded) {
            contentAdWidgetCodeLoaded = true;
            if (lazyLoad) {
                (function () {
                    function asyncLoad() {
                        var s = document.createElement('script');
                        s.type = 'text/javascript';
                        s.async = true;
                        s.src = widgetUrl;
                        var x = document.getElementsByTagName('script')[0];
                        x.parentNode.insertBefore(s, x);
                    }
                    if (window.attachEvent)
                        window.attachEvent('onload', asyncLoad);
                    else
                        window.addEventListener('load', asyncLoad, false);
                })();
            } else {
                (function () {
                    var s = document.createElement('script');
                    s.type = 'text/javascript';
                    s.async = true;
                    s.src = widgetUrl;
                    var x = document.getElementsByTagName('script')[0];
                    x.parentNode.insertBefore(s, x);
                })();
            }
        }
        setTimeout(function () { contentAdInit(widgetId, widgetUrl, script, lazyLoad, loadMultiple) }, 50);
    } else {
        var content = this["contentAd" + widgetId]();
        var newDiv = document.createElement("div");
        newDiv.innerHTML = content;
        var container = document.getElementById("contentad" + widgetId);
        container.parentNode.insertBefore(newDiv, container);
        if (typeof (this["initJQuery" + widgetId]) != 'undefined') {
            this["initJQuery" + widgetId]();
        }
        if (loadMultiple) {
            this["contentAd" + widgetId] = undefined;
        }
    }
}
contentAdInit(contentAdParams.wid, contentAdWidgetUrl, contentAdScript, contentAdParams.lazyLoad, contentAdParams.loadMultiple);