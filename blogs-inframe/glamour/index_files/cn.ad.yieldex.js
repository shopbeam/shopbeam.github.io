/*global CN, console, window, jQuery, */ /* for jsLint */
if (typeof CN === 'undefined' || !CN) {
    throw('CN and/or jQuery library is missing!');
}

/**
 * @class    CN ad
 * @public
 * @memberOf CN
 * @author   Russell Munson
 */
CN.ad = CN.ad || {};

/**
 * DoubleClick Yieldex plugin.
 * Assembles a string using the common kws and returns a parameter to use with build_url
 *
 * @requires    CN.dart
 * @requires    CN
 * @requires    jQuery
 * @author      Joe Hartoularos
 */
CN.ad.yieldex = (function($, $CNd, $D) {

    var
        /**
         * {Number} LIMIT
         * The maximum number of characters of the 'u' value
         * @constant
         * @private
         */
        LIMIT = 294,

        /**
         * Finds a keyword dependency and installs on its callbacks array.  If no dependency is found
         * build the param object and finish.
         * @param {String}    obj    A reference to CN.dart's plugin object
         * @private
         */
        init  = function(obj) {
            var
                plug   = null,
                queue  = obj.queue,
                i      = queue.length - 1,
                run    = function() {

                    param.pValue = build();

                    finished({
                        addparam : param
                    });
                };


            for (; i >= 0; i--) {
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

        /**
         * Assembles the value of the u parameter.  This is dependent on the final state of ad keywords.
         * @param {Object}    ad    A CN.dart ad object
         * @returns {String}
         * @public
         */
        build = function(ad) {
            var
                kws   = $CNd.get('ad').kws,
                akws  = (typeof ad !== "undefined") ? ad.kws : kws,
                value;

            if (kws.length !== akws.length) {
                value = akws.join('|');
            }
            else {
                value = kws.join('|');
            }

            $D.info(plugin.name + " assembled", [{common: kws, ad: akws, value: value}]);

            return ((value.length <= LIMIT) ? value : truncateStr(value)) + ';';
        },

        /**
         * {Object} param
         * The param object installed on common.params.
         *     pKey    : The key of the param
         *     pValue  : The default value (static)
         *     refresh : A function to refresh the value if it depends on something volatile
         * @public
         */
        param = {
            pKey      : 'u',
            pValue    : null,
            refresh   : build
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
            return str.substr(0, pos);
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

                for (; i < req.length; i++) {
                    curr = req[i];
                    if (mod.indexOf(curr) !== -1) {
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

            for (; i < len; i++) {
                plugin.callbacks[i]["func"].apply((plugin.callbacks[i]["scope"] || null), (plugin.callbacks[i]["args"] || []));
            }
        },

        plugin = {
            init       : init,
            name       : 'CN Ad Yieldex',
            modifies   : ['common.params'],
            requires   : ['keywords'],
            callbacks  : [],
            isFinished : false
        },

        register = function(){
            $CNd.register(plugin);
        };

    register(plugin);

    return {
        param: param
    };

}(jQuery, CN.dart, CN.debug));
