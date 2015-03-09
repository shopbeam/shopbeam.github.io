/*global CN, jQuery */ /* for jsLint */

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];


/**
 * CN.dart.js
 * @library cn-fe-ads-2.0.0
 * @requires CN, jQuery
 * @author Russell Munson
 * @author Joe Hartoularos
 * @author Robert Sethi
 * @author Prakash Narasimhamoorthy
 */
CN.dart = (function($, CN, $D) {

    var

        /**
         * {Object} $window
         * A jQuery wrapped set of the window object.  Saves rendering time.
         * @private
         */
        $window = $(window),

        /**
         * {Object} ads
         * A collection of ad calls requested on CN.dart
         * @private
         */
        ads = {},

        /**
         * {Array} gptAds
         * A collection of GPT ad calls requested on CN.dart
         * @private
         */
        gptAds = [],

        /**
         * {Object} slideshowInterstitialAds
         * Slideshow Interstitial Ads called for the site
         * @private
         */
        slideshowInterstitialAds = {},

        /**
         * {Boolean} gptAdsRendered
         * Flag to check whether the ads are loaded during Page loading time to differentiate ads from after page load call
         * @private
         */
        gptAdsRendered = false,

        /**
         * {Object} common
         * The common ad object.  Used as a base class for plugin methods for easy read/write access to
         * shared ad values.
         * @private
         */
        common = {
            ad              : {},
            params          : {},
            charmap         : {},
            container       : '_frame',                         /*  Individual ad container div suffix */
            dcopt           : true,                             /*  allow dcopt param to be appended to tile 1 */
            frameurl        : '/ads/newad.html',                /*  Iframe base-url - Used for generating contained dynamic script tags for ad calls. */
            embed           : false,                            /*  If set to true, embed ads in page rather than in an iframe */
            initialized     : false,
            ready           : false,
            ord             : Math.floor(Math.random()*10e12),
            remote          : '/services/dart/',
            retry           : false,
            site            : "",
            gptAdKey        : 3379,
            tiles           : [],
            tile            : 0,
            transparency    : true,                             /*  allowtransparency to fix white background on ads in IE */
            url             : location.protocol + '//ad.doubleclick.net/adj/',
            GPTSourceFile   : '//www.googletagservices.com/tag/js/gpt.js',
            zone            : "",
            configFile      : '/ads/cn.dartconfig.js',           /*  dart config file */
            configLoaded    : false,
            configData      : {},
            gptAdsParams    : {},
            gptAdSlotSizes  : {
                                "728x90_top"                : [[728, 90]],
                                "728x90_bottom"             : [[728, 91]],
                                "970x418_top"               : [[970, 418], [970, 250], [970, 66], [728, 92], [88, 31], [62, 88], [196, 31]],
                                "300x250_top"               : [[300, 250], [300, 600], [300, 1050]],
                                "300x250_bottom"            : [[300, 251], [300, 601], [300, 1051]],
                                "300x250_interstitial_top"  : [[300, 252]],
                                "300x250_spot_c"            : [[300, 253]],
                                "300x250_left"              : [[300, 254], [300, 604]],
                                "120x60_top"                : [[120, 60]],
                                "120x60_bottom"             : [[120, 61]],
                                // Start Epi-specific placements.
                                "450x266_top"               : [[450, 266]],
                                "220x25_top"                : [[220, 25]],
                                "1x1_top"                   : [[1, 1]],
                                "3x1_top"                   : [[3, 1]],
                                "4x1_top"                   : [[4, 1]],
                                "948x461_top"               : [[948, 461]],
                                "180x150_top"               : [[180, 150]],
                                "300x200_top"               : [[300, 200]],
                                "165x31_top"                : [[165, 31]]
                              },
            isURLHasKeywords: false
        },

        /**
         * {RegExp} kwregex
         * @private
         */
        kwregex = /kw=/g,

        /**
         * {String} msg_pre
         * Shared message prefix used in generating debug info.
         * @private
         */
        msg_pre = "CN Ad ",

        /**
         * {Object} msg
         * Message object for easily generating debug info.
         * @private
         */
        msg = {
            /* These are for good! */
            'true' : {
                gen      : 'Success',
                call     : 'Request Fired',
                embed    : 'Set to Embedded Mode.  Operating with degraded feature-set.',
                queue    : 'Request Added to Queue',
                plug     : 'Plugin Registered',
                valid    : 'Plugin Action Passed Validation',
                finished : 'All Plugins Finished Running.',
                drawing  : 'All Ads Have Completed Drawing',
                drawn    : 'Ad Drawn',
                config   : 'Config file found'

            },

            /* These are for bad =( */
            'false' : {
                gen      : 'Error',
                call     : 'Request Aborted',
                embed    : 'Set to Iframe Mode. Good job.',
                queue    : 'Request Faled To Be Added to Queue',
                plug     : 'Plugin Skipped',
                valid    : 'Plugin Action Failed Validation',
                finished : 'Plugins Still Running',
                drawing  : 'Ads Still Drawing',
                drawn    : 'Ad Failed To Draw',
                config   : 'Config file not found'
            }
        },

        /**
         * {Object} timer
         * A timer object used to record function performance.
         * @public
         */
        timer = {
            /**
             * Marks a point in execution by creating a timestamp.  The value of milestone dictates the key.
             * The milestone 'start' is used as the initial timestamp.  All other timestamps are stored as
             * a difference to show the time in miliseconds each function call has taken from start.
             * @param {String}    milestone     A string denoting the milestone key
             * @example:
             *                 timer.mark('start');  // Creates a timestamp stored in timer.start
             *                 timer.mark('init');   // Creates a timestamp, then stores the difference of start and init in timer.init
             * @private
             */
            mark : function(milestone) {
                this[milestone] = (milestone === 'start') ? (new Date()).getTime() : (new Date()).getTime() - this.start;
            }
        },

        /**
         * Generates debug messages.
         * @param {String}    type       Message type defined in @msg
         * @param {Boolean}   [state]    Optional Boolean value to indicate state [true = success, false = error]
         * @returns {String} A formatted debug message
         * @private
         */
        messager = function(type, state) {
            return msg_pre + msg[(state !== false).toString()][type || 'gen'];
        },

        /**
         * Formats key=value string of params to add to the ad url.  Iterates over common.params, using the default value
         * or calling refresh on the param object if the value of the param is dependent on something volatile (i.e. keywords).
         * If the param has an property named "noKey" then just inject the defaultValue into the string.
         * @param {Object}    ad         DART ad object
         * @returns {String} Formatted key=value string
         * @private
         */
        buildParams = function(ad) {

            var
                cParams  = common.params,
                paramStr = '',
                param;

            for (param in cParams) {
                if (cParams.hasOwnProperty(param)) {
                    // No key params don't need a key value. Also they should go before all other normal params.
                    if (!cParams[param].noKey) {
                        paramStr += param + '=';
                        paramStr += (cParams[param].refresh && (ad.kws.length !== common.ad.kws.length)) ? cParams[param].refresh(ad) : cParams[param].defaultValue;
                    } else {
                        paramStr = (cParams[param].refresh && (ad.kws.length !== common.ad.kws.length)) ? cParams[param].refresh(ad) : cParams[param].defaultValue + paramStr;
                    }

                }
            }

            return paramStr;
        },

        /**
         * Creates and stores individual ad objects by extending the base common.ad.
         * @param {String}    name        Unique name prefix for storage, container div, and iframe id generation
         * @param {Object}    [pars]      Additional ad params to extend or override common.ad values
         * @returns {CN.dart}
         * @public
         */
        call = function(name, pars) {
            var key = name + pars.sz,
                containerName = key+"_frame",
                isAdAlreadyCalled = false;

            // Check for the duplicate ad call
            if(gptAdsRendered === false){
                for(var ind=0; ind<gptAds.length; ind++){
                    if(gptAds[ind].adplacement === containerName){
                        isAdAlreadyCalled = true;
                        break;
                    }
                }
            }

            // Check if the Ad calls are called during the rendering time
            if(isAdAlreadyCalled === false || gptAdsRendered === true){
                var ad  = ads[key] = {
                        tile        : common.tiles.push(key),
                        el          : $('#' + key + common.container),
                        kws         : unique(common.ad.kws, test.kws(pars.kws) || []),
                        store       : pars.store === false ? false : common.ad.store,
                        sz          : pars.sz,
                        isDrawn     : false,
                        xkws        : test.kws(pars.kws) || [],
                        zone        : pars.zone ? test.adzone(pars.zone) : false,
                        collapse    : pars.collapse === true
                    },
                    dims = ad.sz.split('x'),
                    URI = (location.pathname && location.pathname !== "/") ? location.pathname : "",
                    URIZone = (common.zone) ? common.zone.replace(/;/gi, "/") : "";

                if(URIZone){
                    if(URIZone.charAt(0) !== "/"){
                        URIZone = "/"+ URIZone;
                    }

                    if(URIZone.charAt(URIZone.length - 1) === "/"){
                        URIZone = URIZone.substring(0, URIZone.length - 1);
                    }
                }

                // Push the Dimensions after converting them
                for(var ind=0; ind<dims.length; ind++){
                    dims[ind] = parseInt(dims[ind], 10);
                }

                // Set for slideshow interstitial ads
                if(gptAdsRendered === true){
                    var adsAlreadyDrawn = false;

                    if(slideshowInterstitialAds.drawn === true){
                        adsAlreadyDrawn = true
                    }

                    slideshowInterstitialAds =  {
                                                    "url" : "/"+ common.gptAdKey +"/"+ common.site + URIZone,
                                                    "adsize" : dims,
                                                    "adname" : key,
                                                    "adplacement" : containerName,
                                                    "tiles" : ad.tile,
                                                    "kws" : ad.kws,
                                                    "drawn" : adsAlreadyDrawn,
                                                    "xkws" : ad.xkws
                                                };

                    CN.dart.renderGPTAds();
                } else {
                    var interstitialDim1 = [1,1],
                        interstitialSize1 = interstitialDim1[0] +"x"+ interstitialDim1[1],
                        interstitialName1 = "interstitial"+ interstitialSize1,
                        interstitialPlacement1 = interstitialName1 +"_frame",
                        interstitialDim2 = [1,2],
                        interstitialSize2 = interstitialDim2[0] +"x"+ interstitialDim2[1],
                        interstitialName2 = "interstitial"+ interstitialSize2,
                        interstitialPlacement2 = interstitialName2 +"_frame";

                    // Push the GPT Ads data into array
                    gptAds.push({
                            "url" : "/"+ common.gptAdKey +"/"+ common.site + URIZone,
                            "adsize" : dims,
                            "adname" : key,
                            "adplacement" : containerName,
                            "tiles" : ad.tile,
                            "kws" : ad.kws,
                            "drawn" : false,
                            "xkws" : ad.xkws
                        });

                    // Push for intersitial Ads
                    if(gptAds.length === 1 && $("#"+ interstitialPlacement1).length === 0){
                        $("body").append('<div id="'+ interstitialPlacement1 +'" class="displayAd displayAd'+ interstitialSize1 +'Js" style="width:'+ interstitialDim1[0]+'px;height: 0px;" data-cb-ad-id="'+ interstitialPlacement1 +'"></div><div id="'+ interstitialPlacement2 +'" class="displayAd displayAd'+ interstitialSize2 +'Js" style="width:'+ interstitialDim2[0]+'px;height: 0px;" data-cb-ad-id="'+ interstitialPlacement2 +'"></div>');

                        gptAds.push({
                            "url" : "/"+ common.gptAdKey +"/"+ common.site + URIZone,
                            "adsize" : interstitialDim1,
                            "adname" : interstitialName1,
                            "adplacement" : interstitialPlacement1,
                            "tiles" : ad.tile,
                            "kws" : ad.kws,
                            "drawn" : false,
                            "xkws" : ad.xkws
                        });

                        gptAds.push({
                            "url" : "/"+ common.gptAdKey +"/"+ common.site + URIZone,
                            "adsize" : interstitialDim2,
                            "adname" : interstitialName2,
                            "adplacement" : interstitialPlacement2,
                            "tiles" : ad.tile,
                            "kws" : ad.kws,
                            "drawn" : false,
                            "xkws" : ad.xkws
                        });
                    }
                }

            }

            return this;
        },

        /**
         * Initialize CN.dart,
         * @param {Object}  pars    Shared params - ex: site, zone, shared kws.
         * @public
         */
        init = function(pars) {
            if (common.initialized) {
                $D.warn(msg_pre+'Initialization called more than once.  This should only happen once per page.');
                return false;
            }

            loadConfigFile(pars);


        },

        /**
         * Initialize CN.dart, setting common ad parameters and kicking off all registered plug-ins.
         * Added new logic per AdOps - if kw=[some keyword] is present in the url then override common.ad.kws with this one
         * this was causing sponsorship ads to content with normal page ads
         * @param {Object}  pars    Shared params - ex: site, zone, shared kws.
         * @public
         */
        afterConfigInit = function(pars){

            var gads = document.createElement("script"),
                useSSL = "https:" == document.location.protocol,
                node =document.getElementsByTagName("script")[0],
                sponsorParameter = (common.configLoaded && common.configData.sponsorParameter) ? common.configData.sponsorParameter : 'kw',
                adKeywords;

            gads.async = true;
            gads.type = "text/javascript";
            gads.src = (useSSL ? "https:" : "http:") + common.GPTSourceFile;

            node.parentNode.insertBefore(gads, node);

            test.charmap(pars.charmap);

            common.initialized = true;

            common.site = pars.site;
            common.zone = test.adzone(pars.zone);

            if(CN.url.params(sponsorParameter,location.search)){
                adKeywords = test.kws(CN.url.params(sponsorParameter,location.search));
                common.isURLHasKeywords = true;
            } else {
                adKeywords = test.kws(pars.kws);
                common.isURLHasKeywords = false;
            }

            common.ad   = {
                store   : true,
                kws     : adKeywords,
                tile    : common.tile
            };

            if( common.configLoaded && common.configData.docReferrer ){
                addReferrer()
            }

            updateKws();
            plugin.run();

            if(common.configLoaded && common.configData.dartRefresh ){
                setDartRefresh()
            }

            common.embed = (pars.embed || common.embed);

            if (common.embed) {
                $D.info(messager('embed', true), []);
            }

            timer.mark('init');

            $D.info(msg_pre + 'Initialized', [ads]);

            $window.trigger('CN.customEvents.dartInitialized');


        },

        /**
         * Adds document.referrer keyword to kws
         * This was added for JIRA:AA-21
         *
         * @private
         */
        addReferrer = function() {
            // remove leading and trailing slash.
            var  pathName = document.referrer.match(/([^\/]+)/g) || [''],
                 val = pathName[pathName.length-1];

            //Remove any parameters in url, otherwise they get passed in kws
            if (val) {
                val = val.replace(/\?.*$/g, '').replace(".html", "", "gi");
                common.ad.kws[common.ad.kws.length] = "" + test.kws("rfr_"+ val);
            }

        },

        /**
         * Adds ad refresh
         * Calls CN.dart.refresh() based on dartConfig.json file setting
         *
         * @private
         */
        setDartRefresh = function() {
            var refreshTime = (common.configData.dartRefreshTimeMsec || 300000);  //default to 5 min

            setInterval( function(){
                CN.dart.refresh();
                $D.info(msg_pre + 'Refreshed ', []);
            }, refreshTime);

            $D.info(msg_pre + 'Refresh Initialized to ' + refreshTime + 'ms', []);

        },

        /**
         * Checks for dartConfig file on server and consumes json data into common
         * Should be in same location as iframe busters /ads/dartConfig.json
         * @private
         */
        loadConfigFile = function(pars) {

            $.ajax({
                url         : common.configFile,
                dataType    : "json",
                async       : false,
                error       : function()
                {
                    //file not exists
                    $D.info(messager('config',false), []);
                    common.configLoaded = false;
                },
                cache       : true,
                success     : function(data)
                {
                    //file exists
                    loadConfigProps(data);
                },
                complete    : function(){
                    $D.info(msg_pre + 'dartConfig call complete', []);
                    afterConfigInit(pars);

                }
            });

        },

        /**
         * Parses config file and sets common properties
         * @param {Object}    data   Site entry
         * @private
         */
         loadConfigProps = function(data){

            if ( data[CN.site.name] ) {

                for( prop in data[CN.site.name]){
                    common.configData[prop] = data[CN.site.name][prop]
                }
                common.configLoaded = true;
                $D.info(msg_pre + 'config file loaded successfully', []);

            } else {

               common.configLoaded = false;
               $D.info(msg_pre + 'Sitename not found in config file or refresh is disabled. Ads will not refresh', []);

            }

         },

        /**
         * {Object} plugin
         * Encapsulates plug-in logic
         * @private
         */
        plugin = {

            /**
             * {Array} queue
             * Plug-in holder array.  Registered plug-ins are stored here.
             * @private
             */
            queue       : [],

            /**
             * Adds plugins to the queue if they meet the required criteria.
             * @param {Object}   plug   The plug-in to install
             * @returns {Boolean}
             * @private
             */
            register    : function(plug) {
                if (!plug || !plug.init || plug.isFinished === undefined || !plug.callbacks){
                    $D.info(messager('plug',false), [plug ? plug.name : '', plug || {}]);
                    return false;
                }

                this.queue.push(plug);
                $D.info(messager('plug'), [plug.name || '', plug]);

                $window.unbind('CN.customEvents.dartInitialized');
                return true;
            },

            /**
             * Iterates over installed plug-ins and calls their init methods, passing in an object containing
             * the queue, the plug-in's position in the queue, and its own plug-in object reference.
             * @private
             */
            run        : function() {
                var
                    i      = 0,
                    len    = this.queue.length,
                    passed = false,
                    plug,
                    val;

                for (; i < len; i++) {
                    plug = this.queue[i];
                    $D.info(msg_pre + 'Running Plugin', [plug.name]);
                    plug.init({
                        queue    : this.queue,
                        position : i,
                        plugin   : plug
                    });
                }
            },

            /**
             * Iterates over installed plug-ins and checks their isFinished property. If all plug-ins have finished,
             * call ready to signal the start of DART requests.
             * Note:  This function is a callback of the CN.customEvents.dartPlugin event.  It re-scopes to the parent
             * 'plugin' object.
             * @param {Object}   event    The event object
             * @param {Object}   plugin   The plug-in that triggered the event
             * @param {Object}   val      The plug-in's "return" value
             * @private
             */
            finished   : function(event, plugin, val) {

                var
                    i      = 0,
                    scope  = event.data,
                    len    = scope.queue.length,
                    passed = scope.validate(val);

                $D.info(messager('valid', passed), [plugin.name, val]);

                for (; i< len; i++) {
                    if (scope.queue[i].isFinished === false) {
                        $D.info(messager('finished', false), [plugin.name]);
                        return false;
                    }
                }

                $D.info(messager('finished', true));
                ready.call(CN.dart);
            },

            /**
             * Validates a plug-in's return value against a defined set of rules, which in turn modify the common object
             * properties.
             * @param {Object}  ret  The plug-in's return value
             * @returns {Boolean}
             * @private
             */
            validate    : function(ret) {

                var
                    pass = true,
                    key;

                for (key in ret) {
                    if(ret.hasOwnProperty(key)) {
                        pass = (test[key] && test[key](ret[key]) && pass);
                    }
                }

                return pass || false;
            }
        },

        /**
         * Puts CN.dart in a ready state by setting its common.ready property and triggering CN.customEvents.dartRequest
         * to allow queued CN.dart.call invocations to begin drawing their ads.
         * @returns {CN.dart}
         * @public
         */
        ready = function(e) {
            common.ready = true;
            timer.mark('ready');
            $D.info(msg_pre + 'Call State Set to Ready');
            $window.trigger('CN.customEvents.dartRequest');
            return this;
        },

        /**
         * Refreshes ad params or with the url pars (if provided).
         * @param  {String}    ads       Array, CSV or space-delimited list of ads id's
         * @param  {object}    [pars]    Params to override ad values, or url path to replace serialized params
         *
         * @example     CN.dart.refresh('header728x90',{tile:20});
         *              CN.dart.refresh('header728x90','');
         * @returns {CN.dart}
         * @public
         */
        refresh = function(placement, pars) {

            if(common.isURLHasKeywords === false){
                var adSlots = [],
                    placements = placement ? placement.toString().split(/,|\s+/) : [];

                if (common.embed) {
                    return this;
                }

                if(placement && placements.length !== 0){
                    for(var ind1=0; ind1<placements.length; ind1++){
                        for(var ind=0; ind<gptAds.length; ind++){
                            if(gptAds[ind].adname.toString() === placements[ind1].toString()){
                                adSlots.push(gptAds[ind].slot);
                                break;
                            }
                        }
                    }
                }

                if(adSlots && adSlots.length !== 0){
                    googletag.pubads().refresh(adSlots);
                } else {
                    googletag.pubads().refresh();
                }
            }

            return this;
        },

        /**
         * Updates the kws property of every ad in ads with common.ad.kws.
         * @private
         */
        updateKws = function() {
            var ad;
            for (ad in ads) {
                if (ads.hasOwnProperty(ad)) {
                    ads[ad].kws = unique(common.ad.kws, ads[ad].kws);
                }
            }
        },

        /**
         * {Object} test
         * Used during plugin evaluation to ensure proper value replacement. All tests must return
         * true or false to indicate failure or success.  All test conditions are necessary for properly
         * allowing modifications to values in the common object.
         * @public
         */
        test = (function() {
            var
                /**
                 * {RegExp} reserved
                 * Match any js-reserved characters
                 * @private
                 */
                reserved     = /([\?\+\\\^\$\*\.\(\)\[\]\|])/g,

                /**
                 * Combines sites with common.site and returns a period-delimited string.
                 * @param {String}   val   A site value.
                 * @returns {String}
                 * @private
                 */
                siteResolver = function(val) {
                    if (CN.site.testads) {
                        return common.site;
                    }

                    var
                        $val  = val.split('.'),
                        $site = common.site.split('.'),
                        i = 0,
                        len = $site.length > $val.length ? $site.length : $val.length,
                        result = [];

                    for (; i < len; i++){
                        result[i] = ($val[i] || $site[i]);
                    }

                    return result.join('.');
                },

                /**
                 * {RegExp} urlPat
                 * @private
                 */
                urlPat  = /^https?:/,

                /**
                 * {RegExp} zoneEnd
                 * @private
                 */
                zoneEnd = /;$|$/,

                /**
                 * {RegExp} zonePat
                 * @private
                 */
                zonePat = new RegExp(CN.site.testads ? "testads;" + "$" : "[\\w_;]+$"),

                /**
                 * Sanitizes a zone value.
                 * @param {String}  val  A zone value
                 * @returns {String}
                 * @private
                 */
                zoneResolver = function(val) {

                    var
                        prop,
                        map = common.charmap;

                    if (zonePat.test(val)) {
                        for (prop in map) {
                            if (map.hasOwnProperty(prop)) {
                                val = val.replace(new RegExp(prop, "gi"), map[prop]);
                            }
                        }
                        return val.replace(zoneEnd, ';');
                    }
                    $D.warn("CN Dart zoneResolver", ["Invalid Dart Zone", val]);
                    return val;
                },

                /**
                 * Sanitizes a kw value.
                 * @param {String}  val  A kw value
                 * @returns {String}
                 * @private
                 */
                kwResolver = function(val) {

                    var
                        prop,
                        map = common.charmap;


                    for (prop in map) {
                        if (map.hasOwnProperty(prop)) {
                            val = val.replace(new RegExp(prop, "gi"), map[prop]);
                        }
                    }
                    return val;
                };

            return {

                /**
                 * Allows modifications to the common.ad.kws
                 * @param {Object}  val  A hash containing a kws array.
                 * @returns {Boolean}
                 * @public
                 */
                ad  : function(val) {

                    if (!val.kws) {
                       return false;
                    }
                    else {
                        common.ad.kws = jQuery.isArray(val.kws) ? unique(val.kws) : common.ad.kws;
                        updateKws();
                        return true;
                    }
                },

                /**
                 * Adds a valid param object to common.params.
                 * @param {Object}  param  An object containing the param, its default value, and (optionally) a function to
                 *                         refresh itself should the value depend on the current state of certain properties.
                 * @returns {Boolean}
                 * @public
                 */
                addparam    : function(param) {
                    var
                        add,
                        p,
                        i;

                    if (!param) {
                        return false;
                    }

                    // If we have an array of params.
                    if (Object.prototype.toString.call(param) === '[object Array]') {
                        p = param;
                    } else {
                        p = [param];
                    }

                    for (i=0; i<p.length; i+=1) {
                        if (!p[i].pKey) {
                            return false;
                        }
                        add = {};
                        add.defaultValue   = p[i].pValue;
                        add.refresh        = p[i].refresh;
                        add.noKey          = p[i].noKey || false;

                        common.params[p[i].pKey] = add;
                    }

                    return true;
                },

                /**
                 * Maps reserved characters to a value, and places them in common.charmap.
                 * @param {Object}  val  A hash of reserved characters and their replacements
                 * @returns {Boolean}
                 * @public
                 */
                charmap : function(val){

                    var
                        prop,
                        map = common.charmap = {};
                    for (prop in val) {
                        if (val.hasOwnProperty(prop)) {
                            map[prop.replace(reserved, '\\$1')] = val[prop];
                        }
                    }
                    return true;
                },

                /**
                 * Sets the common.dcopt flag.
                 * @param {Boolean}  val  If this is a dcopt ad
                 * @returns {Boolean}
                 * @public
                 */
                dcopt   : function(val) {
                    if (CN.isBoolean(val)) {
                        common.dcopt = val;
                        return true;
                    }
                    else {
                        return false;
                    }
                },

                /**
                 * Sets the common.embed flag.
                 * @param {Boolean}  val  If this is an embedded ad
                 * @returns {Boolean}
                 * @public
                 */
                embed   : function(val) {
                    if (CN.isBoolean(val)) {
                        common.embed = val;
                        return true;
                    }
                    else {
                        return false;
                    }
                },

                /**
                 * Sets the common.site value.
                 * @param {String}  val  The site string to be resolved and set
                 * @returns {Boolean}
                 * @public
                 */
                site    : function(val){
                    common.site = siteResolver(val);
                    return true;
                },

                /**
                 * Sets the common.url value.
                 * @param {String}  val  The url string to format and set
                 * @returns {Boolean}
                 * @public
                 */
                url     : function(val){
                    if(CN.isString(val)){
                        common.url = val.replace(urlPat,location.protocol);
                        return true;
                    }
                    return false;
                },

                /**
                 * Sets the common.zone value.
                 * @param {String}  val  The zone string to resolve and set
                 * @returns {Boolean}
                 * @public
                 */
                zone    : function(val){
                    var ret = zoneResolver(val);
                    if (ret) {
                        common.zone = ret;
                        return true;
                    }
                    return false;
                },

                /**
                 * Publicizes test.zoneResolver.
                 * @param {String}  val  The zone string to resolve.
                 * @returns {String}
                 * @public
                 */
                adzone  : zoneResolver,

                /**
                 * Publicizes test.kwResolver.
                 * @param {String}  val  The kw string to resolve.
                 * @returns {String}
                 * @public
                 */
                kws  : function(kws) {

                    var
                        arr = (kws) ? [].concat(kws) : [],
                        i = 0,
                        len = arr.length;

                    for (; i <len; i++) {
                        arr[i] = kwResolver(arr[i]);
                    }
                    return arr;
                }


            };
        }()),

        /**
         * Creates an array with unique values from a set of arrays.
         * @param   {Array}  arguments   Array(s) to be concatenated and filtered.
         * @returns {String}
         * @private
         */
        unique = function() {

            var
                v,
                i = 0,
                ret = [].concat.apply([], arguments).sort(),
                l = ret.length;

            for (; i < l; i++) {
                v = ret.shift();
                if (ret[0] !== v) {
                    ret.push(v);
                }
            }
            return clean_ws(ret.join(',')).split(',');
        },

        /**
         * Strips out an white-space in a string.
         * @param {String}  str   The string to process
         * @returns {String}
         * @private
         */
        clean_ws = function(str){
            return str.replace(/^,|\s*|,^/g, '');
        },

        /**
         * {Object} remote
         * Object for containing methods used for calling dart from an external source.
         * @deprecated
         * @public
         */
        remote = {
            init : function(site,zone,kws){
                if (!zone || common.initialized) {
                    $D.info(msg_pre + "Remote Init error.  No calls will be made.",["site : " + site]);
                    return this;
                }

                common.frameurl   = site + common.frameurl;
                common.remoteSite = site;
                common.remoteInit = site + common.remote + 'init/' + zone + '/' + 'kw=' + CN.url.path().join(';kw=') + ';' + kws;
                embedScript(common.remoteInit);
            }

        },

        /**
         * Generate a script element for embedded ads and remote calls.  This function will block.
         * @param {String}   src   The location of the ad
         * @deprecated
         * @private
         */
        embedScript = function(src) {
            document.write('<scr'+'ipt type="text/javascript" src="'+src+'"></scr'+'ipt>');
        },

        pushGPTAds = function(){
            // Disable Single Request Architecture
            common.configData.disableGPTSingleRequest = true;

            // Render Ads for ads other than Slideshow Interstitial
            if(gptAdsRendered === false){
                for(var ind=0; ind<gptAds.length; ind++){
                    if(ind === 1){
                        //Interstitial ad
                        googletag.defineOutOfPageSlot(gptAds[ind].url, gptAds[ind].adplacement)
                        .addService(googletag.pubads())
                        .setTargeting("sz", gptAds[ind].adsize[0]+"x"+gptAds[ind].adsize[1])
                        .setTargeting("!c", gptAds[ind].xkws);
                    } else {
                        var adSlot,
                            adSlotArray = (gptAds[ind].xkws) ? common.gptAdSlotSizes[gptAds[ind].adsize[0] +"x"+ gptAds[ind].adsize[1] +"_"+ gptAds[ind].xkws[0]] : common.gptAdSlotSizes[gptAds[ind].adsize[0] +"x"+ gptAds[ind].adsize[1]];

                        if(adSlotArray && adSlotArray.length !== 0){
                            adSlot = googletag.defineSlot(gptAds[ind].url, adSlotArray, gptAds[ind].adplacement)
                                        .addService(googletag.pubads())
                                        .setTargeting("!c", gptAds[ind].xkws)
                                        .setTargeting("sz", gptAds[ind].adsize[0]+"x"+gptAds[ind].adsize[1])
                                        .setCollapseEmptyDiv(true,true);
                        } else {
                            adSlot = googletag.defineSlot(gptAds[ind].url, gptAds[ind].adsize, gptAds[ind].adplacement)
                                        .addService(googletag.pubads())
                                        .setTargeting("!c", gptAds[ind].xkws)
                                        .setTargeting("sz", gptAds[ind].adsize[0]+"x"+gptAds[ind].adsize[1])
                                        .setCollapseEmptyDiv(true,true);
                        }

                        gptAds[ind].slot = adSlot;
                        gptAds[ind].drawn = true;
                    }

                    // Push Keywords into array
                    if(!common.gptAdsParams["kw"]){
                        common.gptAdsParams["kw"] = [];
                    }

                    for(var ind1=0; ind1<gptAds[ind].kws.length; ind1++){
                        common.gptAdsParams["kw"].push(gptAds[ind].kws[ind1]);
                    }

                    if(ind === (gptAds.length - 1)){
                        var lotameKeywords = buildParams(gptAds[0]),
                            keywords,
                            aamUUID = CN.cookie.get("aam_uuid");

                        if(lotameKeywords && lotameKeywords.indexOf("=") !== -1){
                            if(lotameKeywords.indexOf(";")){
                                keywords = lotameKeywords.split(";");
                            }

                            for(var ind1=0; ind1<keywords.length; ind1++){
                                if($.trim(keywords[ind1]) !== ""){
                                    if(keywords[ind1].indexOf("=") !== -1){
                                        var keywordPairs = keywords[ind1].split("=");
                                        googletag.pubads().setTargeting(keywordPairs[0], keywordPairs[1]);
                                    }
                                }
                            }
                        }

                        if(CN.slideshow){
                            common.gptAdsParams["kw"].push("slideshow");
                        }

                        if(aamUUID){
                            googletag.pubads().setTargeting("aamId", aamUUID);
                        }

                        if(common.gptAdsParams["kw"]){
                            common.gptAdsParams["kw"] = unique(common.gptAdsParams["kw"]);
                            googletag.pubads().setTargeting("kw", common.gptAdsParams["kw"]);
                        }

                        if(!CN.slideshow && !common.configData.disableGPTSingleRequest){
                            googletag.pubads().enableSingleRequest();
                        }

                    }
                }
            } else {    // Render Ads for Slideshow Ads
                if(!slideshowInterstitialAds.drawn){
                    var lotameKeywords = buildParams(slideshowInterstitialAds),
                        keywords,
                        adSlot,
                        adSlotArray = (slideshowInterstitialAds.xkws) ? common.gptAdSlotSizes[slideshowInterstitialAds.adsize[0] +"x"+ slideshowInterstitialAds.adsize[1] +"_"+ slideshowInterstitialAds.xkws[0]+"_"+slideshowInterstitialAds.xkws[1]] : common.gptAdSlotSizes[slideshowInterstitialAds.adsize[0] +"x"+ slideshowInterstitialAds.adsize[1]],
                        aamUUID = CN.cookie.get("aam_uuid");

                        if(adSlotArray && adSlotArray.length !== 0){
                            adSlot = googletag.defineSlot(slideshowInterstitialAds.url, adSlotArray, slideshowInterstitialAds.adplacement)
                                        .addService(googletag.pubads())
                                        .setTargeting("sz", slideshowInterstitialAds.adsize[0]+"x"+slideshowInterstitialAds.adsize[1])
                                        .setTargeting("!c", slideshowInterstitialAds.xkws)
                                        .setCollapseEmptyDiv(true,true);
                        } else {
                            adSlot = googletag.defineSlot(slideshowInterstitialAds.url, slideshowInterstitialAds.adsize, slideshowInterstitialAds.adplacement)
                                        .addService(googletag.pubads())
                                        .setTargeting("sz", slideshowInterstitialAds.adsize[0]+"x"+slideshowInterstitialAds.adsize[1])
                                        .setTargeting("!c", slideshowInterstitialAds.xkws)
                                        .setCollapseEmptyDiv(true,true);
                        }

                    slideshowInterstitialAds.slot = adSlot;
                    slideshowInterstitialAds.drawn = true;

                    // Parameters for each ad calls
                    if(aamUUID){
                        googletag.pubads().setTargeting("aamId", aamUUID);
                    }

                    if(lotameKeywords && lotameKeywords.indexOf("=") !== -1){
                        if(lotameKeywords.indexOf(";")){
                            keywords = lotameKeywords.split(";");
                        }
                        for(var ind1=0; ind1<keywords.length; ind1++){
                            if($.trim(keywords[ind1]) !== ""){
                                if(keywords[ind1].indexOf("=") !== -1){
                                    var keywordPairs = keywords[ind1].split("=");
                                    googletag.pubads().setTargeting(keywordPairs[0], keywordPairs[1]);
                                }
                            }
                        }
                    }

                    //Set page level targeting for plugins
                    googletag.pubads().setTargeting("kw", slideshowInterstitialAds.kws);

                }
            }

            // Collapse Empty Divs if the ads are not served
            googletag.pubads().collapseEmptyDivs(true);

            googletag.enableServices();

        },

        // Display GPT Ads
        displayGPTAds = function(){
            if(gptAdsRendered === false){
                // Display the Ads
                for(var ind=0; ind<gptAds.length; ind++){
                    googletag.cmd.push(function() {
                        googletag.display(gptAds[ind].adplacement);
                    });
                }
            } else {
                googletag.cmd.push(function() {
                    googletag.display(slideshowInterstitialAds.adplacement);
                });
            }
        };

    /**
     * Have ready be the default callback to CN.customEvents.dartInitialized.
     * Registering a plugin unbinds this event.
     */
    $window.one('CN.customEvents.dartInitialized', ready);

    // Allow plugins to asynchronously send back data when they've completed
    $window.bind('CN.customEvents.dartPlugin', plugin, plugin.finished);

    timer.mark('start');

    return {

        /**
         * Publicize call.
         * @param {String}    name        Unique name prefix for storage, container div, and iframe id generation
         * @param {Object}    [pars]      Additional ad params to extend or override common.ad values
         * @returns {CN.dart}
         * @public
         */
        call : call,

        getGPTAds : function(){
            return gptAds;
        },

        /**
         * Flush GPT Ads on a single call.
         * @returns {CN.dart}
         * @public
         */
        renderGPTAds : function(){
            // Send the ad details(like placeholder name, size, keywords) of the ads to Google
            googletag.cmd.push(function() {
                pushGPTAds();
            });

            displayGPTAds();
        },

        setGPTAdsRenderStatus : function(status){
            gptAdsRendered = status;
        },

        /**
         * Publicize timer
         * @public
         */
        timer : timer,

        /**
         * Publicizes refresh
         * @param  {String}    ads       Array, CSV or space-delimited list of ads id's
         * @returns {CN.dart}
         * @public
         */
        refresh : refresh,

        /**
         * Returns a common object property
         * @param  {Array}    props       Array of properties to fetch.
         * @returns {Object}
         * @public
         */
        get : function(props){

            props = [].concat(props);
            var
                i = 0,
                len = props.length,
                ret = {},
                prop;

            for (; i < len; i++) {
                prop = props[i];
                ret[prop] = (common[prop] || common[prop] === false ? common[prop] : undefined);
            }
            return len > 1 ? ret : ret[prop];
        },

        /**
         * Publicizes init
         * @param {Object}  pars    Shared params - ex: site, zone, shared kws.
         * @public
         */
        init : init,

        /**
         * Publicizes ready
         * @public
         */
        ready : ready,

        /**
         * Allows plug-ins to be installed on CN.dart.plugin
         * @param {Object}    install    The plug-in to install
         * @returns {CN.dart}
         * @public
         */
        register : function(install) {
            var
                i = 0,
                len;

            if (!install) {
                return this;
            }

            install = [].concat(install);
            len = install.length;

            for (; i < len; i++) {
               plugin.register(install[i]);
            }

            return this;
        },

        /**
         * {Object} remote
         * Publicizes remote object.
         * @deprecated
         * @public
         */
        remote : remote,

        /**
         * {Object} test
         * Publicizes test object.
         * @public
         */
        test : test
    };

}(jQuery, CN, CN.debug));

/**
 * CN.dart.ipad
 * CN.dart plug-in for iPad
 * @author Russell Munson
 * @requires CN, jQuery
 */
CN.dart.ipad = (function(ua) {
    var
        suff = ".ipad",

        init = function(obj){
            var
                i = 0,
                len = plugin.callbacks.length;

            plugin.isFinished = true;
            jQuery(window).trigger('CN.customEvents.dartPlugin', [plugin, {
                site : CN.dart.get('site') + suff
            }]);

            for (; i < len; i++) {
                plugin.callbacks[i]["func"].apply((plugin.callbacks[i]["scope"] || null), (plugin.callbacks[i]["args"] || []));
            }
        },

        plugin = {
            init       : ua.indexOf('ipad') !== -1 ? init : false,
            name       : 'CN Ad User Agent Plugin',
            callbacks  : [],
            isFinished : ua.indexOf('ipad') === -1
        };

    return plugin;
}(navigator.userAgent.toLowerCase()));

/**
 * CN.dart.suppression
 * @author Russell Munson
 * @requires CN, jQuery
 */
CN.dart.suppression = (function() {
    var
        pars = CN.url.params(),

        ret = false,

        //Plugin interface method
        init = function(obj) {
            var
                i = 0,
                len = plugin.callbacks.length;

            plugin.isFinished = true;
            jQuery(window).trigger('CN.customEvents.dartPlugin', [plugin, ret]);

            for (; i < len; i++) {
                plugin.callbacks[i]["func"].apply((plugin.callbacks[i]["scope"] || null), (plugin.callbacks[i]["args"] || []));
            }
        },

        plugin;

    // Check for npu param, and toggle dcopt off if present
    if (pars.npu === '1' || (pars.mbid && pars.mbid.match(/yhoo|google[1-5]?$/))){
        ret = {
            dcopt : false
        };
    }

    plugin = {
        // If conditions exist to modify ad common settings, define interface
        // or return false to skip processing
        init       : ret ? init : false,
        name       : 'CN Ad Param-based Modifiers',
        callbacks  : [],
        isFinished : !ret
    };

    return plugin;
}());

CN.dart.register([CN.dart.ipad,CN.dart.suppression]);

jQuery(function(){
    var setIntervalRenderAds = setInterval(function(){
        var renderAdsCalled = false,
            gptAds = CN.dart.getGPTAds();

        for(var ind=0; ind<gptAds.length; ind++){
            if(jQuery.trim(jQuery("#"+ gptAds[ind].adplacement).html()) === ""){
                renderAdsCalled = true;
                break;
            }
        }

        if(renderAdsCalled === true){
            CN.dart.renderGPTAds();
        } else {
            CN.dart.setGPTAdsRenderStatus(true);
            clearInterval(setIntervalRenderAds);
            jQuery(window).trigger('CN.customEvents.GPTAdsRendered');
        }
    }, 1000);
});
