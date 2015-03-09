// dart-loader.js

// adjust gptAdKey as appropiate and clear akamai


var gptAdKey = 3782; // PMC!
//var gptAdKey = 3379; // Conde Nast!

var dartRegexParse = new RegExp('[a-z\-0-9]{2,63}\.[a-z\.]{2,5}$');
var dartUrlParts = dartRegexParse.exec(window.location.hostname);
var dartSubdomain =  window.location.hostname.replace(dartUrlParts[0],'').slice(0, -1);
if (dartSubdomain == 'www' || dartSubdomain == 'jobs') {
	gptAdKey = 3379; // Conde Nast!
}




/*global CN, jQuery */ /* for jsLint */

/**
 * CN.dart.js
 * @library cn-fe-ads-4.3.4
 * @requires CN, jQuery
 * @author Russell Munson
 * @author Joe Hartoularos
 * @author Robert Sethi
 * @author Prakash Narasimhamoorthy
 */

var googletag = window.googletag = window.googletag || {};
window.googletag.cmd = window.googletag.cmd || [];

(function() {
var gads = document.createElement("script");
gads.async = true;
gads.type = "text/javascript";
var useSSL = "https:" == document.location.protocol;
gads.src = (useSSL ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
var node =document.getElementsByTagName("script")[0];
node.parentNode.insertBefore(gads, node);
})();

CN.ad = window.CN.ad || {};

CN.dart = window.CN.dart = (function($, CN, $D) {

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

        gptAdsBuilt = false,

        pageSlots = [],

        pageSlotsPlusInterstitial = [],

        refreshCalled = false,

        interstitialAdCnt = 0,

        refreshState,

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
            frameurl        : 'http://www.wwd.com/ads/newad.html',                /*  Iframe base-url - Used for generating contained dynamic script tags for ad calls. */
            embed           : false,                            /*  If set to true, embed ads in page rather than in an iframe */
            initialized     : false,
            ready           : false,
            ord             : Math.floor(Math.random()*10e12),
            remote          : '/services/dart/',
            retry           : false,
            gptCallback     : undefined,
            contentType     : "",
            useOneAdCall    : false,
            contentId       : "",
            dfpRefresh      : "0",
            maxDfpRefresh   : 100,
            adSeqTargeting  : "1",
            socialKey       : "",
            site            : "",
            gptAdKey        : gptAdKey,
            tiles           : [],
            tile            : 0,
            transparency    : true,                             /*  allowtransparency to fix white background on ads in IE */
            url             : location.protocol + '//ad.doubleclick.net/adj/',
            zone            : "",
            configFile      : './index_files/cn.dartconfig.js',           /*  dart config file */
            configLoaded    : false,
            configData      : {},
            gptAdsParams    : {},
            domDelay        : {"defaultVal" : 1000},
            deviceDefault   : "desktop",
            gptAdSlotSizes  : {
                                "desktop" : {
                                    "728x90_topLargeDesktop"    : [[728, 90], [970, 66], [970, 418], [970, 250], [1140, 380], [970, 90]],
                                    "728x90_topDesktop"         : [[728, 90], [970, 66], [970, 418], [970, 250], [900, 300], [970, 90]],
                                    "728x90_topArticle"         : [[728, 90], [970, 66], [970, 418], [970, 90]],
                                    "728x90_topTablet"          : [[728, 90], [690, 230]],
                                    "728x90_bannerTablet"       : [[728, 90]],
                                    "728x90_bannerDesktop"      : [[728, 90]],
                                    "728x90_top"                : [[728, 90], [970, 418], [970, 250], [980, 300], [970, 90], [970, 66], [62, 88], [88, 31], [196, 31], [2048, 1534]],
                                    "728x90_bottom"             : [[728, 91]],
                                    "728x90_nmtop"              : [[728, 90], [865,165], [1300, 250], [970, 250], [970, 66]],
                                    "728x91_contentbody"        : [[728, 91], [2048, 1535]],
                                    "728x92_contentbody"        : [[728, 92], [2048, 1536]],
                                    "970x418_top"               : [[970, 418], [970, 250], [980, 300], [970, 90], [970, 66], [728, 92], [88, 31], [62, 88], [196, 31], [1140, 380], [900,300] ],
                                    "970x67_pushdown"           : [[728, 92], [970,67], [970, 419], [970, 251], [970, 91], [62, 89], [88, 32], [196, 32], [1140, 380], [900,300]],
                                    "300x250_side"              : [[300, 250], [300, 600], [300, 1050]],
                                    "300x250_sideArticle"       : [[300, 250], [300, 600]],
                                    "300x250_boxDesktop"        : [[300, 250]],
                                    "300x250_boxTablet"         : [[300, 250]],
                                    "300x600_fullGalleryInterstitialTablet"        : [[300, 600], [640, 900]],
                                    "300x600_inlineGalleryInterstitialTablet"      : [[300, 250], [630, 639]],
                                    "300x600_interstitial_fullGalleryInterstitialTablet"        : [[300, 600], [640, 900]],
                                    "300x600_interstitial_inlineGalleryInterstitialTablet"      : [[300, 250], [630, 639]],
                                    "300x250_top"               : [[300, 250], [300, 600], [300, 1050]],
                                    "300x250_bottom"            : [[300, 251], [300, 601], [300, 1051]],
                                    "300x250_sponsor"           : [[300, 250], [300, 600]],
                                    "300x250_instream"          : [[300, 255], [300, 605], [300, 1055]],
                                    // GQ Kittyhawk slideshows can serve 3 sizes for insterstitial slideshow ad
                                    "300x250_interstitial_top"  : [[300, 252], [300, 602], [440, 330], [620, 440], [900, 600], [832, 380]],
                                    "300x250_interstitial_full" : [[300, 252], [640, 480], [1280, 960]],
                                    "300x250_wmag"              : [[300, 250], [300, 600], [610, 730]],
                                    "300x250_spot_c"            : [[300, 253]],
                                    "300x250_left"              : [[300, 254], [300, 604]],
                                    "300x250_infeed1"           : [[300, 250], [610, 300]],
                                    "300x250_infeed2"           : [[300, 251], [610, 301]],
                                    "300x250_infeed3"           : [[300, 252], [610, 302]],
                                    "160x600_left"              : [[160, 600], [200, 700], [300, 900]],
                                    "160x600_right"             : [[160, 601], [200, 701], [300, 901]],
                                    "120x60_top"                : [[120, 60]],
                                    "120x60_bottom"             : [[120, 61]],
                                    "220x25_top"                : [[220, 25]],
                                    // Start Epi-specific placements.
                                    "450x266_top"               : [[450, 266]],
                                    "220x25_top_snap"           : [[230, 96]],
                                    "220x25"                    : [[230, 96]],
                                    "1x1_top"                   : [[1, 1]],
                                    "3x1_top"                   : [[447,100],[3, 1]],
                                    "4x1_top"                   : [[4, 1]],
                                    "948x461_top"               : [[948, 461]],
                                    "180x150_top"               : [[180, 150]],
                                    "300x200_top"               : [[300, 200]],
                                    "165x31_top"                : [[165, 31]],
                                    // Blog
                                    "460x608"                   : [[460, 608],[460, 150]],
                                    // Mobile placements - copying to mobile parameter, will remain here for backward compatibility
                                    "320x50_top"                : [[300, 50], [320, 50], [300, 150], [320, 150]],
                                    "320x51_bottom"             : [[300, 51], [320, 51], [300, 151], [320, 151], [300, 251], [300, 601]],
                                    "300x250_takeover_mobile"   : [[300, 250], [320, 250], [320, 480]],
                                    "300x50_bannerMobile"       : [[300, 50]],
                                    "300x250_boxMobile"         : [[300, 250]],
                                    "300x250_interstitial_boxMobile"         : [[300, 250]],
                                    "300x250_fullGalleryInterstitialMobile"          : [[300, 250], [320, 480]],
                                    "300x250_interstitial_fullGalleryInterstitialMobile"          : [[300, 250], [320, 480]],
                                    // WWD Mobile placements
                                    "300x50_wwd_top"            : [[300, 50], [300, 250]],
                                    //Style specific placements
                                    "1300x250_top"              : [[1300, 250]],
                                    "1300x98_top"               : [[1300, 98]],
                                    "980x1100_top"              : [[980, 1100]],
                                    //Self
                                    "88x32_top"                 : [[88, 32]]
                                },
                                "wideDesktop" : {},
                                "mobile" : {
                                    "320x50_top"                : [[300, 50], [320, 50], [300, 150], [320, 150]],
                                    "320x51_bottom"             : [[300, 51], [320, 51], [300, 151], [320, 151], [300, 251], [300, 601]],
                                    "300x250_takeover_mobile"   : [[300, 250], [320, 250], [320, 480]],
                                    "300x50_bannerMobile"       : [[300, 50]],
                                    "300x250_boxMobile"         : [[300, 250]],
                                    "300x250_interstitial_boxMobile"         : [[300, 250]],
                                    "300x250_fullGalleryInterstitialMobile"          : [[300, 250], [320, 480]],
                                    "300x250_interstitial_fullGalleryInterstitialMobile"          : [[300, 250], [320, 480]],
                                    // WWD Mobile placements
                                    "300x50_wwd_top"            : [[300, 50], [300, 250]]
                                },
                                "tablet" : {}
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
                    URIZone = (common.zone) ? common.zone.replace(/;/gi, "/") : "",
                    adUnit3 = (common.adUnit3) ? common.adUnit3.replace(/;/gi, "/") : undefined,
                    adUnit4 = (common.adUnit4) ? common.adUnit4.replace(/;/gi, "/") : undefined;

                if(URIZone){
                    if(URIZone.charAt(0) !== "/"){
                        URIZone = "/"+ URIZone;
                    }

                    if(URIZone.charAt(URIZone.length - 1) === "/"){
                        URIZone = URIZone.substring(0, URIZone.length - 1);
                    }

                    if(adUnit3){
                        if(adUnit3.charAt(0) !== "/"){
                            adUnit3 = "/"+ adUnit3;
                        }

                        if(adUnit3.charAt(adUnit3.length - 1) === "/"){
                            adUnit3 = adUnit3.substring(0, adUnit3.length - 1);
                        }

                        URIZone = URIZone + adUnit3;
                    }

                    if(adUnit4){
                        if(adUnit4.charAt(0) !== "/"){
                            adUnit4 = "/"+ adUnit4;
                        }

                        if(adUnit4.charAt(adUnit4.length - 1) === "/"){
                            adUnit4 = adUnit4.substring(0, adUnit4.length - 1);
                        }

                        URIZone = URIZone + adUnit4;
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
                        $("body").prepend('<div id="'+ interstitialPlacement1 +'" class="displayAd displayAd'+ interstitialSize1 +'Js" style="width:'+ interstitialDim1[0]+'px;height: 0px;" data-cb-ad-id="'+ interstitialPlacement1 +'"></div><div id="'+ interstitialPlacement2 +'" class="displayAd displayAd'+ interstitialSize2 +'Js" style="width:'+ interstitialDim2[0]+'px;height: 0px;" data-cb-ad-id="'+ interstitialPlacement2 +'"></div>');

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

            var sponsorParameter = (common.configLoaded && common.configData.sponsorParameter) ? common.configData.sponsorParameter : 'kw',
                adKeywords;

            test.charmap(pars.charmap);

            common.device = (pars.device) ? pars.device : common.deviceDefault;

            common.initialized = true;

            common.site = (pars.adUnits) ? pars.adUnits.unit1 : pars.site;
            common.zone = (pars.adUnits) ? test.adzone(pars.adUnits.unit2) : test.adzone(pars.zone);
            common.adUnit3 = (pars.adUnits) ? ( (typeof pars.adUnits.unit3 === "undefined") ? undefined : test.adzone(pars.adUnits.unit3) ) : undefined;
            common.adUnit4 = (pars.adUnits) ? ( (typeof pars.adUnits.unit4 === "undefined") ? undefined : test.adzone(pars.adUnits.unit4) ) : undefined;

            common.contentId = pars.contentId;
            common.contentType = pars.contentType;

            common.useOneAdCall = pars.useOneAdCall || false;

            common.gptCallback = (pars.gptCallback && (typeof pars.gptCallback === 'function') ) ? pars.gptCallback :  function(event) {$D.info('Cid: ' + event.creativeId + ' is rendered to slot of size: ' + event.size[0] + 'x' + event.size[1]); };

            if(CN.url.params(sponsorParameter,location.search)){
                adKeywords = test.kws(CN.url.params(sponsorParameter,location.search));
                common.isURLHasKeywords = true;
            } else {
                adKeywords = test.kws(pars.kws);
                common.isURLHasKeywords = false;
            }

            getTrackingSeq();

            common.ad   = {
                store   : true,
                kws     : adKeywords,
                tile    : common.tile
            };

            if( common.configLoaded && common.configData.docReferrer ){
                addReferrer()
            };

            socialReferrer();

            updateKws();
            plugin.run();


            if(common.configLoaded && common.configData.refresh ){
                if(typeof CN.ad.viewableRefresh === "undefined"){
                    $D.info(msg_pre + 'Refresh plugin not installed', []);
                    return;
                }

                if(common.configData.refresh.type && common.configData.refresh.type === "auto"){
                    if(common.configData.refresh.refreshTimeMsec > 0)
                        setDartRefresh( common.configData.refresh.refreshTimeMsec );
                    }


                } else if(common.configLoaded && common.configData.dartRefresh ){
                    if(typeof common.configData.dartRefresh.active !== "undefined" ){
                        if(common.configData.dartRefresh.dartRefreshTimeMsec > 0 ) {
                            setDartRefresh( common.configData.dartRefresh.dartRefreshTimeMsec );
                        }
                    }
            }

            if(common.configData.minRefreshDurationMsec && typeof common.configData.minRefreshDurationMsec !== "undefined") {
                common.startRefreshTimer = (new Date()).getTime();
            }

            common.embed = (pars.embed || common.embed);

            if (common.embed) {
                $D.info(messager('embed', true), []);
            }

            timer.mark('init');

            $D.info(msg_pre + 'Initialized', [ads]);

            domDelayRender(common.useOneAdCall);

            $window.trigger('CN.customEvents.dartInitialized');


        },

        domDelayRender = function(val){
            // if common.useOneAdCall == true. Don'ts use jQuery callback
            if (!val) {
                $D.info(" CN dart using call() ", [{}]);

                jQuery(function(){
                    var setIntervalRenderAds = setInterval(function(){
                        var renderAdsCalled = false,
                            gptAds = CN.dart.getGPTAds();

                        for(var ind=0; ind<gptAds.length; ind++){

                           var el = jQuery("#"+ jQuery.trim(gptAds[ind].adplacement));
                           if( !(gptAds[ind].adplacement === 'interstitial1x1_frame') ||  !(gptAds[ind].adplacement === 'interstitial1x2_frame')) {
                                if(el.length > 0 && el.html() === ""){
                                    renderAdsCalled = true;
                                    break;
                                };
                            };
                        }

                        if(renderAdsCalled === true){
                            CN.dart.renderGPTAds();
                        } else {
                            CN.dart.setGPTAdsRenderStatus(true);
                            clearInterval(setIntervalRenderAds);
                            jQuery(window).trigger('CN.customEvents.GPTAdsRendered');
                        }
                    }, CN.dart.getDomDelay());
                });
            } else {
                $D.info(" CN dart using oneAdCall() ", [{}]);
            };
        },

       /* Detects if referrer is a recognized social network
        * and passes it as a scl key to DFP.. scl = fb
        */
        socialReferrer = function(){
            var val,
                socialKey,
                pathName = document.referrer.match(/([^\/]+)/g) || [''],
                socialArr = {
                    "(^|\\.)facebook.com$"  : "fb",
                    "(^|\\.)twitter.com$"   : "tw",
                    "(^|\\.)reddit.com$"    : "rd",
                    "(^|\\.)pinterest.com$" : "pn",
                    "(^|\\.)instagram.com$" : "ig",
                    "(^|\\.)plus.url.google.com$" : "gpl",
                    "^t\.co$"          : "tw"
                };

            val = pathName[1];

            if(typeof val !== "undefined"){
                for(prop in socialArr){
                    if( val.match(prop) !== null ){
                        socialKey = socialArr[prop];
                    }
                }
            };
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
         * Sequentially targeting ads to a user
         * Set cn_sqt cookie to track user movement
         *
         * @private
         */
        cookie = {
            name:"cn_sqt",

            options : {
               domain:CN.url.domain(),
               path:'/'
            },

            check : function(){
                return CN.cookie.get(cookie.name);
            },

            read : function(){
                var cook=cookie.check();
                return cook !=="" ?
                    cook :
                    false;
            },

            remove : function(){
                CN.cookie.del(cookie.name,cookie.options)
            },

            write : function(pars){
                CN.cookie.set(cookie.name, pars
                ,cookie.options);
            }
        },

        getTrackingSeq = function(){
          //  cookie.remove();

            var data=cookie.read();

            if(!data) {
                cookie.write(common.adSeqTargeting);
            } else {
                common.adSeqTargeting = '' + (parseInt(data) + 1);
                cookie.remove();
                cookie.write(common.adSeqTargeting);
            };

        },


        /**
         * Adds ad refresh
         * Calls CN.dart.refresh() based on dartConfig.json file setting
         *
         * @private
         */
        setDartRefresh = function(rTime) {
            var refreshTime = rTime;

            //Overriding the zone refresh
            if (typeof common.configData.overrides !== "undefined" ){
                if (typeof common.configData.overrides.refresh !== "undefined" ){
                    if (typeof common.configData.overrides.refresh.zone !== "undefined" ){
                        var cleanZone = common.zone.replace(/[^\w\s]/gi, '');

                        for( prop in common.configData.overrides.refresh.zone){
                           //If zones match then override refresh time
                           if (cleanZone === prop ){
                                refreshTime = common.configData.overrides.refresh.zone[prop].dartRefreshTimeMsec;
                           };
                        };
                    };
                };
            };

            if (refreshTime){
                refreshState = setInterval( function(){
                        CN.dart.refresh();
                        $D.info(msg_pre + 'Refreshed ', []);
                    }, refreshTime);

                $D.info(msg_pre + 'Refresh Initialized to ' + refreshTime + 'ms', []);
            };
        },

        /**
         * Checks for dartConfig file on server and consumes json data into common
         * Should be in same location as iframe busters /ads/dartConfig.json
         * @private
         */
        loadConfigFile = function(pars) {

            var configFileURL = (pars.configFile) ? pars.configFile : common.configFile;

            $.ajax({
                url         : configFileURL,
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
            var siteData = data[CN.site.name];

            if ( siteData ) {
                //Loop thru config keys
                for( prop in siteData){
                    //Add the keys to common.configData
                    common.configData[prop] = siteData[prop];
                    //If key is object then we are overriding defaults
                    if (typeof siteData[prop] === "object" && siteData[prop] !== null){
                        //Now we are in sub object , loop here
                        for( prop2 in siteData[prop]){
                            if (typeof siteData[prop][prop2] === "object" && siteData[prop][prop2] !== null){
                                //here we overide defaults
                                for( prop3 in siteData[prop][prop2]){
                                    //if size mapping overrides is set
                                    if ( prop2 === "gptAdSlotSizes") {
                                        //If there is no device, then defaults to desktop
                                        if ( Object.prototype.toString.call(siteData[prop][prop2][prop3]) == "[object Array]" && siteData[prop][prop2][prop3] !== null ) {
                                            if (typeof common[prop2] === "undefined" ){
                                                common[prop2][common.deviceDefault] = {};
                                                common[prop2][common.deviceDefault][prop3] = siteData[prop][prop2][prop3];
                                            } else {
                                                common[prop2][common.deviceDefault][prop3] = siteData[prop][prop2][prop3]
                                            };
                                        } else {
                                            for( prop4 in siteData[prop][prop2][prop3]){
                                                if (typeof common[prop2] === "undefined" ){
                                                    common[prop2][prop3] = {};
                                                    common[prop2][prop3][prop4] = siteData[prop][prop2][prop3][prop4];
                                                } else {
                                                    common[prop2][prop3][prop4] = siteData[prop][prop2][prop3][prop4];
                                                };
                                            }
                                        }
                                    } else {
                                        if (typeof common[prop2] === "undefined" ){
                                            common[prop2] = {};
                                            common[prop2][prop3] = siteData[prop][prop2][prop3];
                                        } else {
                                            common[prop2][prop3] = siteData[prop][prop2][prop3];
                                        };
                                    }
                                }
                            }
                        };
                    };
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

            //Halts the refresh is there is a maxRefresh
            if (common.configData.maxRefreshes && typeof common.configData.maxRefreshes !== "undefined") {
                if ( Number(common.dfpRefresh) >= common.configData.maxRefreshes ) {
                    return;
                }
            }

            //Halts refresh if Minimum refresh is set set and not met, but will refresh when pass the minimum threshold
            if (common.configData.minRefreshDurationMsec && typeof common.configData.minRefreshDurationMsec !== "undefined") {

                if (!common.startRefreshTimer) {
                    common.startRefreshTimer = (new Date()).getTime();
                }

                if (!common.startAutoRefreshTimer) {
                    common.startAutoRefreshTimer = (new Date()).getTime();
                }

                var minRefreshDuration = common.configData.minRefreshDurationMsec,
                    refreshTime = (new Date()).getTime() - common.startRefreshTimer,
                    autoRefreshTime = (new Date()).getTime() - common.startAutoRefreshTimer;

                common.startRefreshTimer = (new Date()).getTime();

                if ( refreshTime < minRefreshDuration && autoRefreshTime < minRefreshDuration ) {
                    return;
                }

            }

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
                                gptAds[ind].lazyDisplay = true;
                                adSlots.push(gptAds[ind].slot);
                                break;
                            }
                        }
                    }
                }

                if(adSlots && adSlots.length !== 0){
                    googletag.pubads().refresh(adSlots);
                } else {

                    if( Math.round(common.dfpRefresh) < common.maxDfpRefresh ){
                        refreshCounter();
                    };

                    googletag.pubads().setTargeting("rfsh", common.dfpRefresh);
                    googletag.pubads().refresh(pageSlots);
                }
            }

            common.startAutoRefreshTimer = (new Date()).getTime();

            return this;
        },


        refreshCounter = function() {
            var rVal = Math.round(common.dfpRefresh),
                rVal = rVal + 1,
                rVal = '' + rVal;
                common.dfpRefresh = rVal;
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

            var device = common.device;

            // Render Ads for ads other than Slideshow Interstitial
            if(gptAdsRendered === false){
                for(var ind=0; ind<gptAds.length; ind++){

                    if(gptAds[ind].drawn === false){
                        var adSlot = undefined;

                        if(gptAds[ind].adplacement === 'interstitial1x1_frame'){
                            //Interstitial ad
                            adSlot = googletag.defineOutOfPageSlot(gptAds[ind].url, gptAds[ind].adplacement)
                            .addService(googletag.pubads());
                        } else if (gptAds[ind].adplacement === 'interstitial1x2_frame') {
                             //Interstitial ad
                            adSlot = googletag.defineOutOfPageSlot(gptAds[ind].url, gptAds[ind].adplacement)
                            .addService(googletag.pubads());

                        } else {
                            var
                                extra = ( gptAds[ind].xkws && gptAds[ind].xkws.length > 1 ) ? "_"+gptAds[ind].xkws[1] : "",
                                adSlotArray = (gptAds[ind].xkws && gptAds[ind].xkws.length >= 1) ? common.gptAdSlotSizes[device][gptAds[ind].adsize[0] +"x"+ gptAds[ind].adsize[1] +"_"+ gptAds[ind].xkws[0] +
                                                extra] : common.gptAdSlotSizes[device][gptAds[ind].adsize[0] +"x"+ gptAds[ind].adsize[1]];


                            if(adSlotArray && adSlotArray.length !== 0){
                                adSlot = googletag.defineSlot(gptAds[ind].url, adSlotArray, gptAds[ind].adplacement)
                                            .addService(googletag.pubads())
                                            .setCollapseEmptyDiv(true,true);
                            } else {
                                adSlot = googletag.defineSlot(gptAds[ind].url, gptAds[ind].adsize, gptAds[ind].adplacement)
                                            .addService(googletag.pubads())
                                            .setCollapseEmptyDiv(true,true);
                            }

                       }

                        gptAds[ind].slot = adSlot;
                        gptAds[ind].drawn = true;


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

                               for(var adKeys=0; adKeys<common.ad.kws.length; adKeys++){
                                    common.gptAdsParams["kw"].push(common.ad.kws[adKeys]);
                               };


                                common.gptAdsParams["kw"] = unique(common.gptAdsParams["kw"]);
                                googletag.pubads().setTargeting("kw", common.gptAdsParams["kw"]);
                            }

                            //Pass content id and content type
                            googletag.pubads().setTargeting("ctid", common.contentId);
                            googletag.pubads().setTargeting("cttp", common.contentType);
                            googletag.pubads().setTargeting("rfsh", common.dfpRefresh);
                            googletag.pubads().setTargeting("sqt", common.adSeqTargeting);
                            googletag.pubads().setTargeting("scl", common.socialKey);



                            googletag.pubads().collapseEmptyDivs(true);
                            googletag.pubads().disableInitialLoad();
                            googletag.pubads().enableSingleRequest();
                            googletag.pubads().enableAsyncRendering();

                            googletag.enableServices();

                            googletag.pubads().addEventListener('slotRenderEnded', common.gptCallback );



                        }

                   }// if drawn
                }// end of main for loop

            } else {    // Render Ads for Slideshow Ads
               // if(!slideshowInterstitialAds.drawn){
                    var lotameKeywords = buildParams(slideshowInterstitialAds),
                        keywords,
                        adSlot,
                        extra = ( slideshowInterstitialAds.xkws && slideshowInterstitialAds.xkws.length > 1 ) ? "_"+slideshowInterstitialAds.xkws[1] : "",
                        adSlotArray = (slideshowInterstitialAds.xkws && slideshowInterstitialAds.xkws.length >= 1) ? common.gptAdSlotSizes[device][slideshowInterstitialAds.adsize[0] +"x"+ slideshowInterstitialAds.adsize[1] +"_"+ slideshowInterstitialAds.xkws[0] +
                        extra] : common.gptAdSlotSizes[device][slideshowInterstitialAds.adsize[0] +"x"+ slideshowInterstitialAds.adsize[1]],
                        aamUUID = CN.cookie.get("aam_uuid");

                        slideshowInterstitialAds.served = false;

                        if(adSlotArray && adSlotArray.length !== 0){
                            adSlot = googletag.defineSlot(slideshowInterstitialAds.url, adSlotArray, slideshowInterstitialAds.adplacement)
                                        .addService(googletag.pubads())
                                        .setCollapseEmptyDiv(true,true);
                        } else {
                            adSlot = googletag.defineSlot(slideshowInterstitialAds.url, slideshowInterstitialAds.adsize, slideshowInterstitialAds.adplacement)
                                        .addService(googletag.pubads())
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

                    //Pass content id and content type
                    googletag.pubads().setTargeting("ctid", common.contentId);
                    googletag.pubads().setTargeting("cttp", common.contentType);

            }


        },

        /**
         * Creates and stores all ad objects by extending the base common.ad.
         *
         * @param {Object}    [pars]      Ad placement params
         *                                 CN.dart.oneAdCall({
         *                                   "topBanner":{
         *                                     "sz": "728x90",
         *                                     "kws": ["top"]
         *                                   },
         *                                   "yrailTop":{
         *                                     "sz": "300x250",
         *                                     "kws": ["top"]
         *                                   },
         *                                   "pushdown":{
         *                                     "sz": "970x418",
         *                                     "kws": ["top"]
         *                                   },
         *                                   "yrailBottom":{
         *                                     "sz": "300x250",
         *                                     "kws": ["top"]
         *                                   }
         *                               });
         *
         *
         * @ private
         */
        oneAdCall = function(pars){

            if (typeof pars === "undefined"){
                $D.warn(msg_pre+'no ad parameters were passed in.');
                return false;
            };

            if (!common.initialized) {
                $D.warn(msg_pre+'ads library needs to be initialized first.');
                return false;
            };


            for(key in pars){
                var name = key,
                    opts = pars[key];

                    call(name, opts);
            };

            if(typeof googletag.defineSlot === "undefined"){

                setTimeout(function(){

                    pushGPTAds();

                    displayGPTAds();

                    gptAdsRendered = true;

                    jQuery(window).trigger('CN.customEvents.GPTAdsRendered');

                }, 1000);

            } else {

                setTimeout(function(){
                    pushGPTAds();

                    displayGPTAds();

                   gptAdsRendered = true;

                    jQuery(window).trigger('CN.customEvents.GPTAdsRendered');
                }, 300);
            };

        },

        /**
         * Checks is string is blank
         * @param {String}    name
         *
         * @returns boolean
         * @private
         */
        isBlank = function (str) {
            return (!str || /^\s*$/.test(str));
        },

        /**
         * Infinite Scroll Pages - load ads in batch SRA
         * @param {Object}  {
         *                   "adSlot1":{
         *                     "sz": "728x90",
         *                     "kws": ["top"]
         *                   },
         *                   "adSlot2":{
         *                     "sz": "300x250",
         *                     "kws": ["top"]
         *                   }
         *
         * @private
         */
        moreAds = function(pars){

           var adSlots = [];

            if (!common.initialized) {
                $D.warn(msg_pre+'ads library needs to be initialized first.');
                return
            };

            if(typeof pars === "undefined" ){
                $D.warn(msg_pre+'missiing ad parameters object.');
                return;
            };

            for(key in pars){

                var extraKws,
                    adSlotArray,
                    dims;

                    dims = pars[key].sz.split('x');
                    dims[0] = parseInt(dims[0], 10);
                    dims[1] = parseInt(dims[1], 10);

                    extraKws = ( pars[key].kws && pars[key].kws.length > 1 ) ? "_"+pars[key].kws[1] : "";

                    adSlotArray = ( pars[key].kws && pars[key].kws.length >= 1) ? common.gptAdSlotSizes[common.device][pars[key].sz +"_"+ pars[key].kws[0] + extraKws] : common.gptAdSlotSizes[common.device][pars[key].sz];

                    if(typeof adSlotArray === "undefined"){
                        adSlotArray = [ dims[0] , dims[1] ];
                    };


                googletag.cmd.push(function() { adSlots.push(googletag.defineSlot(gptAds[1].url, adSlotArray, key).addService(googletag.pubads()) ) });
                googletag.cmd.push(function() { googletag.display(key); });

                $D.info(msg_pre + key + ' ad call requested ', []);

            };

           googletag.pubads().refresh(adSlots);

        },

        // Display GPT Ads
        displayGPTAds = function(){
            var buildSlots = [];
            if(gptAdsRendered === false && !gptAdsBuilt){
                // Display the Ads
                for(var ind=0; ind<gptAds.length; ind++){

                    //Check for inView plugin
                    if(typeof CN.ad.viewableRefresh !== "undefined" && typeof common.configData.refresh !== "undefined" && typeof common.configData.refresh.lazyLoad !== "undefined" && common.configData.refresh.lazyLoad ){

                        if (CN.ad.viewableRefresh.inViewportFirstLoad($('#'+gptAds[ind].adplacement).get(0))) {
                            googletag.cmd.push(function() {
                                googletag.display(gptAds[ind].adplacement);
                            });
                            gptAds[ind].lazyDisplay = true;
                            buildSlots.push(gptAds[ind].slot);
                            pageSlots.push(gptAds[ind].slot);
                        }

                    } else {

                        googletag.cmd.push(function() {
                            googletag.display(gptAds[ind].adplacement);
                        });
                        gptAds[ind].lazyDisplay = true;
                        buildSlots.push(gptAds[ind].slot);
                        pageSlots.push(gptAds[ind].slot);
                    };

                }

                if(!gptAdsBuilt){
                    gptAdsBuilt = true;
                };

            } else if(typeof slideshowInterstitialAds.xkws !== "undefined" ){
            //Add 300x250 interstitial ad to call for slideshows
            //For SRA this enforces roadblocking


                if ( ($.trim(slideshowInterstitialAds.xkws[0]) === "interstitial") && (slideshowInterstitialAds.adsize[0]+"x"+slideshowInterstitialAds.adsize[1] === "300x250") ){

                    if(interstitialAdCnt === 0){  //initial interstitial ad
                        // Display page ads + slideshow ad
                        for(var ind=0; ind<gptAds.length; ind++){
                            googletag.cmd.push(function() {
                                googletag.display(gptAds[ind].adplacement);
                            });
                            buildSlots.push(gptAds[ind].slot);

                        };

                       //Add slideshow ad
                        googletag.cmd.push(function() {
                            googletag.display(slideshowInterstitialAds.adplacement);
                        });

                       //Flag stating servedd
                        slideshowInterstitialAds.served = true;
                        buildSlots.push(slideshowInterstitialAds.slot);
                        pageSlotsPlusInterstitial = buildSlots;
                        refreshCalled = false;
                        interstitialAdCnt = interstitialAdCnt + 1;

                    } else {

                        googletag.pubads().refresh(pageSlotsPlusInterstitial);
                        refreshCalled = true;
                    };


                } else {
                    googletag.cmd.push(function() {
                        googletag.display(slideshowInterstitialAds.adplacement);
                    });

                     buildSlots.push(slideshowInterstitialAds.slot);
                     refreshCalled = false;
                };

            } else {
                //All other dynamic ad calls - infinite scrolling
                if(typeof slideshowInterstitialAds.xkws !== "undefined" ){
                    googletag.cmd.push(function() {
                        googletag.display(slideshowInterstitialAds.adplacement);
                    });

                     buildSlots.push(slideshowInterstitialAds.slot);
                     refreshCalled = false;
                };

            };

            if(gptAdsBuilt && !refreshCalled){
                googletag.pubads().refresh(buildSlots);
                refreshCalled = true;
            };
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

        oneAdCall : oneAdCall,

        moreAds : moreAds,

        getGPTAds : function(){
            return gptAds;
        },

        /**
         * Publicize call.
         * Returns the delay time for DOM to be built for ads to load
         * Mainly for GQ HGQRU
         * @public
         */
        getDomDelay : function(){
            var urlPath = CN.url.path(),
                delay = common.domDelay.defaultVal;

            for(prop in common.domDelay){
                if( prop !== "defaultVal" ){
                    if( prop ===  urlPath.join("") ){
                         delay = common.domDelay[prop];
                    };

                };
            };

            return delay;
        },

        /**
         * Publicize call.
         * Returns targeting keywords object
         *
         * @public
         */
        getGPTCustomParams : function(){

           return { "aamId" : CN.cookie.get("aam_uuid"),
                    "kw" : common.gptAdsParams["kw"],
                    "ctid" : common.contentId,
                    "cttp" :common.contentType,
                    "rfsh" : common.dfpRefresh,
                    "sqt" : common.adSeqTargeting,
                    "scl" : common.socialKey

                };

        },

        /**
         * Publicize call.
         * Returns slideshowInterstitialAds {} , helps debugging this ad
         * @public
         */
        getSlideShowAds : function(){
            return slideshowInterstitialAds;
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

        getGPTAdsRenderStatus : function(){
            return gptAdsRendered;
        },

        /**
         * Publicizes refresh dynamic ad
         * @param  {String}    adname  -- slideshow300x252
         *                     For single ads that are on overlay pages
         * @returns {CN.dart}
         * @public
         */
        refreshDynamicAd : function(ad){
            var slot = CN.dart.getSlideShowAds();

            if(typeof ad === "string" && slot !== "undefined" && ad === slot.adname){
                googletag.pubads().refresh([slot.slot]);
            }

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
         * Returns a common object property
         * @param  {Array}    props       Array of properties to fetch.
         * @returns {Object}
         * @public
         */
        getCommon : function(){
           return common;
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
CN.dart.ipad = (function(ua, $CNd, $D) {
    var
        suff = ".ipad",

        init = function(obj){
            var
                i = 0,
                len = plugin.callbacks.length,

                // Pull values from DART config.
                config = $CNd.get('configData').noiPadToDartSite,
                runPlugin  =  (typeof config === "undefined") ? false : (config === true) ? true : false;

            // Short circuit out of function if config.noiPadToDartSite == true.
            if (runPlugin) {
                $D.info(plugin.name + " override .ipad from site", [{}]);
                return this;
            } ;

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
}(navigator.userAgent.toLowerCase(), CN.dart, CN.debug));

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

