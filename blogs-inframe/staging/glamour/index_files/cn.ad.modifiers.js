/*global CN, console, window, alert, location, document, jQuery, setTimeout, clearTimeout, clearInterval, setInterval */ /* for jsLint */

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
 * Singleton to handle topic assertion and dart zone modification
 * setTopicAd:
 * @uses      CN.dart
 * @requires  CN
 * @author    Dennis Pierce
 * @author    Russell Munson
 */
CN.ad.topics = (function($CN,$CNA) {
    var cookie = {
            name:"cn_adtopic",

            options : {
               domain:CN.url.domain(),
               path:'/'
            },

            check : function(){
                return $CN.cookie.get(cookie.name);
            },

            read : function(){
                var cook=cookie.check();
                return cook !=="" ?
                    CN.utils.parseStr(cook,'usercookie') :
                    false;
            },

            remove : function(){
                $CN.cookie.del(cookie.name,cookie.options)
            },

            write : function(pars){
                $CN.cookie.set(cookie.name,"zone="+(pars.zone || "")
                    +"|site="+(pars.site || "" )
                    +(pars.ad && pars.ad.kws ? "|kws="+pars.ad.kws.join(','):"")
                ,cookie.options);
            }
        },

    setTopic= function(obj){
        var drop = function(){
            cookie.write(CN.dart.get(['site','zone','ad']));
        };
        if(CN.dart.get('initialized')){
            drop();
        } else {
            jQuery(window).bind('CN.customEvents.dartInitialized',drop);
        }
        finished(obj.plugin, {});
    },

    getTopic= function(obj){
        var data=cookie.read(),
            ret={};
        if(!data) {
            return false;
        }
        ret = {
            site : data.site,
            zone : data.zone
        };

        if(data.kws){
            ret.ad={kws : data.kws.split(',')};
        }
        cookie.remove();
        finished(obj.plugin, ret);
    },

    finished = function(plugin, ret) {
        var
            i = 0,
            len = plugin.callbacks.length;

        plugin.isFinished = true;
        jQuery(window).trigger('CN.customEvents.dartPlugin', [plugin, ret]);

        for (; i < len; i++) {
            plugin.callbacks[i]["func"].apply((plugin.callbacks[i]["scope"] || null), (plugin.callbacks[i]["args"] || []));
        }
    };

    /* PUBLIC METHODS */
    return {
        setTopic:setTopic,
        getTopic:getTopic,
        plugin : function(store){
            if(store){
                return {
                    init       : setTopic,
                    name       : "CN Ad Topics :: Store Cookie",
                    callbacks  : [],
                    isFinished : false
                };
            }

            if(cookie.check()){
                return {
                    init       : getTopic,
                    name       : "CN Ad Topics :: Read Cookie",
                    callbacks  : [],
                    isFinished : false
                };
            }
            return {
                init: false,
                name: "CN Ad Topics :: no action required"
            };
        }
    };

}(CN,CN.ad));


/**
 * Dart Key word string extender plug-in container
 * Extend current kw-set with kws from external content (ex: MT Posts)
 *
 * @uses      CN.dart
 * @author    Russell Munson
 *              should be a comma separated key word list.
 */
CN.ad.kwExtend = (function($CNd) {
    var
        kws = false,

        /**
         * Plugin init function.
         * Return the ad modifier object
         * @private
         */
        init = function(obj){
            finished(obj.plugin,{
                ad: {
                    'kws' : ($CNd.get('ad').kws || []).concat(kws)
                    }
                });
        },

        finished = function(plugin, ret) {
            var
                i = 0,
                len = plugin.callbacks.length;

            plugin.isFinished = true;
            jQuery(window).trigger('CN.customEvents.dartPlugin', [plugin, ret]);

            for (; i < len; i++) {
                plugin.callbacks[i]["func"].apply((plugin.callbacks[i]["scope"] || null), (plugin.callbacks[i]["args"] || []));
            }
        },

        /**
         * The is the actual plug-in inderface. It builds the
         * api available to CN.dart after registration has been completed.
         * @param kws   {string}    kw string to be appened to kw set of an dart ad call. String
         *                          should be a comma separated key word list.
         *                          to the ad calls.
         * @example:

            CN.dart.register(
                CN.ad.kwExtend.plugin("keyword1, keyword2);
            );

            This builds the interface api:
                {
                    init       : init,
                    name       : 'CN Ad Keyword extension plug-in',
                    callbacks  : [],
                    isFinished : false
                }

            Which is registered with CN.dart and evaluated at run time with the
            return object:
                { ad :
                    {
                        kws : ['keyword1','keyword2']

                    }
                }
         */
        setKws = function(str){
            var
                i = 0;

            if (CN.isString(str)) {
                kws = str.split(',');
                // Sanitize the keywords to make sure they don't have spaces or special chars.
                for (; i < kws.length; i++) {
                    kws[i] =  CN.utils.trim(CN.utils.transliterate(kws[i])).replace(/\W/g, '-').toLowerCase();
                }
            }

            /**
             * Plugin init function.
             * Return the ad modifier object
             */
            return {
                init       : kws && kws.length ? init : false,
                name       : 'CN Ad Keyword extension plug-in',
                callbacks  : [],
                isFinished : kws && kws.length ? false : true
            };
        };

    return {
        // Public method for setKws
        plugin  : setKws
    };



}(CN.dart));