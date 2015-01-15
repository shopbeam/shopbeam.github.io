/*global CN, console, window, document, jQuery, */ /* for jsLint */
if (typeof CN === 'undefined' || !CN) {
    throw('CN and/or jQuery library is missing!');
}


/**
 * @class    CN ad
 * @public
 * @memberOf CN
 */
CN.ad = CN.ad || {};

/**
 * Adobe Audience Manager Plugin
 *
 * @requires    CN.dart
 * @requires    CN
 * @requires    jQuery, cn-fe-ads-1.3.14+
 * @author      Dennis Pierce
 */
CN.ad.aam = (function($, $CNd, $D) {
    'use strict';
    var
        /**
         * {Number} LIMIT
         * The maximum number of characters of the 'u' value
         * @constant
         * @private
         */
        LIMIT = 294,

        /**
         * {Number} U_COOKIE
         * Name of the Adobe did cookie.
         * @constant
         * @private
         */
        U_COOKIE = 'aam_uuid',

        /**
         * {Number} KW_COOKIE
         * Name of the Adobe cookie that returns back a list of keywords that go in an ad.
         * @constant
         * @private
         */
        KW_COOKIE = 'aamconde',

        /**
         * {Object} param
         * The param object installed on common.params.
         *     pKey    : The key of the param
         *     pValue  : The default value (static)
         *     refresh : A function to refresh the value if it depends on something volatile
         * @public
         */
        uParams = {
            pKey      : 'u',
            pValue    : null,
            refresh   : buildUval
        },

        kwParams = {
            pKey      : 'aamVals',
            pValue    : null,
            refresh   : buildVal,
            noKey     : true
        },


        /**
         * Truncates a pipe-delimited parameter value to prevent the request from failing.  If the string is over the required
         * limit, a 'trunc' value is prefixed.
         * @param {String}    str    The string to truncate
         * @returns {String}
         * @private
         */
        truncateStr = function(str) {
            var
                pos;

            $D.info(plugin.name + " limit reached.  Truncating", [{limit: LIMIT, length: str.length, str: str}]);

            str = ('trunc|' + str).substr(0, LIMIT - 6);
            pos = str.lastIndexOf('|');
            return str.substr(0, pos)+';';
        },

        /**
         * Assembles the value of the u parameter.  This is dependent on the final state of ad keywords.
         * @param {Object}    ad    A CN.dart ad object
         * @returns {Object}
         * @private
         */
        buildUval = function(ad) {
            var
                uval   = $CNd.get('params')['u'].defaultValue, // Value of the existing u parameter.
                cookieVal = '',
                returnObj = {}; // Value of the Adobe Audience manager cookie.

            // Grab the values from the Adobe cookie.
            cookieVal = CN.cookie.get(U_COOKIE);
            if (cookieVal !== '' && uval.indexOf(cookieVal) === -1) {
                uval = cookieVal + '|'  + uval;
            }

            // No semicolon because we already have Yieldex putting a semicolon on.
            return ((uval.length <= LIMIT) ? uval : truncateStr(uval));
        },

        /**
         * Assembles the value of the keywords.  This is dependent on the final state of ad keywords.
         * @param {Object}    ad    A CN.dart ad object
         * @returns {Object}
         * @private
         */
        buildVal = function(ad) {
            var cookieVal = '',
                val = '';
            // Grab the values from the Adobe cookie.
            cookieVal = CN.cookie.get(KW_COOKIE);
            if (cookieVal !== '') {
                val = cookieVal + ';';
            }
            return val;
        },

        /**
         * Calls the 2 helper functions to read Adobe cookies and stuff them into ad keywords or u value.
         * @param {Object}    ad    A CN.dart ad object
         * @returns {Object}
         * @private
         */
        build = function(ad) {
            uParams.pValue = buildUval(ad);
            kwParams.pValue = buildVal(ad);
            $D.info(plugin.name + " assembled", [{uvalue: uParams.pValue, aamskw: kwParams.pValue}]);
        },


        /**
         * Inspects a plugin object's modifies property against this plugin's own requires property
         * @param {Object}    plug    The plugin to check against
         * @returns {Boolean}
         * @private
         */
        requires = function(plug) {
            var
                i    = 0,
                mod  = plug.modifies,
                req  = plugin.requires,
                curr = null;

            if (mod && mod.length && req && req.length) {

                for (i=0; i < req.length; i+=1) {
                    curr = req[i];
                    if (mod.indexOf(curr) !== -1 || curr === plug.name) {
                        return true;
                    }
                }

            }

            return false;
        },

        finished = function(ret) {
            var
                i = 0,
                len = plugin.callbacks.length;

            plugin.isFinished = true;
            $(window).trigger('CN.customEvents.dartPlugin', [plugin, ret]);

            for (i=0; i < len; i+=1) {
                plugin.callbacks[i]["func"].apply((plugin.callbacks[i]["scope"] || null), (plugin.callbacks[i]["args"] || []));
            }
        },


        /**
         * Finds a keyword dependency and installs on its callbacks array.  If no dependency is found
         * build the param object and finish.
         * Also calls setAdobeCookie to set the Adobe did cookie.
         * @param {String}    obj    A reference to CN.dart's plugin object
         * @private
         */
        init  = function(obj) {
            var
                plug   = null,
                queue  = obj.queue,
                i      = queue.length - 1,
                run    = function() {
                    build();
                    finished({
                        addparam : [kwParams, uParams]
                    });
                };

            for (i=queue.length - 1; i >= 0; i-=1) {
                plug = queue[i];
                if ( plug !== plugin && requires(plug)) {
                    $D.info(plugin.name + " found dependency: " + plug.name, ["Pushing to callbacks array"]);
                    if (!plug.isFinished) {
                        return plug.callbacks.push({
                            func:  run,
                            args:  null,
                            scope: null
                        });
                    }
                }
            }

            run();
        },

        /*
         * Make sure this obj is below the init, otherwise it won't be a valid plugin to the DART library.
         */
        plugin = {
            init       : init,
            name       : 'CN Ad Adobe Audience Manager',
            modifies   : ['common.params'],
            requires   : ['CN Ad Yieldex'],
            callbacks  : [],
            isFinished : false
        },
        register = function(){
            $CNd.register(plugin);
        };
    register(plugin);

}(jQuery, CN.dart, CN.debug));
