/*global CN, console, window, location, document, jQuery, setTimeout */ /* for jsLint */
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
 * Lotame Crowd Control and DFP plugin.
 * Extend current kw-set with kws from pulled from Lotame
 * Load up the Crowd Control data collector and soucre it
 * after page load is complete.
 *
 * @requires    CN.dart
 * @requires    CN
 * @requires    jQuery
 * @author      Russell Munson
 */
CN.ad.lotame = (function($, $CNd, $D) {
    var
        ready           = false,

        protocol        = location.protocol || 'http:',

        timeout         = 800,

        separator       = '|',

        siteName        = CN.site.name || location.hostname.split('.').splice(-2)[0],

        // Key-value pair of site codes - should match siteMagDomain spring property && CN.site.name
        // Nutritiondata mirrors Self's values
        siteCodes       = {
            allure              :   293,
            architecturaldigest :   294,
            bonappetit          :   295,
            brides              :   296,
            concierge           :   297,
            details             :   298,
            'epicurious.com'    :   299,
            glamour             :   300,
            golfdigest          :   301,
            gourmet             :   973,
            gq                  :   302,
            luckymag            :   303,
            newyorker           :   304,
            nutritiondata       :   306,
            self                :   306,
            style               :   307,
            teenvogue           :   308,
            vanityfair          :   309,
            vogue               :   310,
            wmagazine           :   311,
            wired               :   312,
            webmonkey           :   318,
            wwd                 :   1390
        },

        code            = siteCodes[siteName] ? siteCodes[siteName] : false,

        url             = [ protocol + '//ad.crwdcntrl.net/4/pe=y', 'c=244', 'var=CN.ad.lotame.tags', 'out=json'].join(separator),

        ccurl           = code ? [ protocol + '//tags.crwdcntrl.net/c/', '/cc.js'].join(code) : false,

        /**
         * Grab the list of lotame audience kws, and if the
         * request is successful, register the plugin with CN.dart.
         * @private
         */
        audience = function(){
            $.ajax({
                url         : url,
                dataType    : 'script',
                timeout     : timeout,
                error       : function(x,t){
                    finished(false);
                    $D.info(plugin.name + ' plugin disabled',['script ' + t, 'using site code ' + code]);
                },
                cache       : true,
                success     : function(data) {
                    ready = true;
                    parse();
                },
                complete    : function(){
                    $D.info(plugin.name + ' cc call complete');
                }
            });
            return true;
        },

        /**
         * Source in lotame's crowd control data collection script.
         * But, don't load it until dom ready,
         * may give more accurate data, but mostly mean to decrease imact on user.
         * @private
         */
        crowdControl = function(){
            var lot;
            if (!code) {
                return false;
            }

            if (typeof LOTCC === 'undefined') {
                LOTCC = {
                    asyncBehaviors : {},
                    async          : true
                };
            }

            lot     = document.createElement('script');
            lot.src = ccurl;

            $(function(){
                $('head',document)[0].appendChild(lot);
            });

            return true;
        },

        init = function(obj){
            audience();

            // Schedule parse to run in 5 seconds as a failsafe
            setTimeout(function() {
                if (!plugin.isFinished && !ready) {
                    parse();
                }
            }, 5000);
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

        /**
         * Parse the lotame audience object, extract usable kws, and
         * return an ad object with the kws appened for CN.dart validation.
         * @private
         */
        parse = function(){
            var
                i = 0,
                len,
                aud,
                ret = [],
                    // Note: this value is populated by the lotame audience script.
                    // The variable name is configured above in the url array.
                tags = CN.ad.lotame.tags;

            if (!tags) {
                $D.warn("Lotame Request Timed Out", ["Setting plugin to finished to procceed to render ads"]);
                return finished(false);
            }

            if (tags.Profile) {
                aud = tags.Profile.Audiences.Audience;
                len = aud.length;
                for (; i < len; i++) {
                    ret.push(aud[i].abbr);
                }
            }

            finished({
                ad : {kws : $CNd.get('ad').kws.concat(ret)}
            });
        },

        plugin = {
            init       : init,
            name       : 'CN Ad Lotame Audience kws',
            modifies   : ['keywords'],
            requires   : [],
            callbacks  : [],
            isFinished : false
        },

        register = function(){
            $CNd.register(plugin);
        };

    if (!code) {
        $D.error(plugin.name + ' missing code for this site.  Verify the site is in the list.', [siteCodes]);
        return false;
    }

    // Register immediately, and get the Crowd Control script.
    register();
    crowdControl();

    return {
        tags : false
    };
}(jQuery, CN.dart, CN.debug));
