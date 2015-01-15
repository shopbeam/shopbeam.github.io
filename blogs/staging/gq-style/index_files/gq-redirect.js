 /**

  Pressly redirect script

  The Purpose of this script is to detect device support and redirect valid
  devices to the Pressly application. Redirects from homepage will go straigt
  to the application. Deep linking is also available, a user entering your site
  from a google link to an article will be redirected to the same article within
  Pressly if it exists.

  Usage:

    Place the following script tag within the head of your site. It should be
    included on every page if you wish deep linking to work on that content.

    <script type="text/javascript" src="http://api.pressly.com/redirect.js?key=<your-api-key>"></script>

  Finding the article uid for deep-linking content

    When not on the site root this script will attempt to find the current article
    ID and redirect directly to the same article within your Pressly application.

    A custom block of code can be specified within the dashboard to help find this uid.
    It might look something like:

    // Get UID from last segment of url in the format of /<uid>--the-article-slug
    var uid = window.location.href.split("/").pop().split("-")[0];
    return typeof uid !== "undefined" && uid.length ? uid : false;

    Alternatively you may add a meta tag to your site containing the uid in your
    feed for each article like:

    <meta property="pressly:uid" content="1075206" />

    * Please note that you must put this meta tag in the document <head> BEFORE
      the redirect script.

**/

(function() {
    var applicationUrl = "http://tablet.gq.com/";

    var rootUrl = "gq.com/style";

    // Adjust the rootUrl if the rootUrl includes www but the location does not and no other subdomain is given
    if (rootUrl.indexOf("www.") === 0 && window.location.host.indexOf("www.") !== 0 && rootUrl.split('www.')[1] === window.location.host) {
        rootUrl = rootUrl.split("www.")[1];
    } else if (rootUrl.indexOf("www.") !== 0 && window.location.host.indexOf("www.") === 0) {
        rootUrl = "www." + rootUrl;
    }

    // Could make this looser by
    //if (window.location.href.indexOf(rootUrl) === -1) { return; }

    // Note: path should not have / as a prefix. Path to root is therefore ""
    var makeRedirectUrl = function(path) {
        return applicationUrl + path + "?origref=" + encodeURIComponent(document.referrer);
    };

    // Deeplinking can be enabled or disabled from the dashboard
    var deeplinking = true;

    // Platform enables
    var redirectPlatforms = {"smartphone": false,"tablet": true};


    // Debugging options
    var forceRedirect = window.location.search.indexOf("pressly-force-redirect=true") >= 0;
    var spoofUrl = /spoof-url=([^&]+)/.test(window.location.search) && RegExp.$1;

    // vvv BEGIN PRESSLY-LIB
    window.Pressly = window.Pressly || {};
    window.Pressly.Device = {

        isTouch: function() {
            var nav = window.navigator;
            return ('ontouchstart' in window) ||
            ('msPointerEnabled' in nav && 'msMaxTouchPoints' in nav && nav.msMaxTouchPoints > 0);
        },

        isHandheld: function() {
            var userAgent = window.navigator.userAgent;
            return window.orientation !== undefined ||
            /Android/.test(userAgent) ||
            /Windows.+Touch.+Tablet/.test(userAgent) ||
            /Windows Phone/.test(userAgent);
        },

        isSmallScreen: function() {
            var width = window.innerWidth || document.documentElement.clientWidth;
            var height = window.innerHeight || document.documentElement.clientHeight;
            var minDimension = Math.min(width, height);
            return minDimension <= 360;
        },

        platform: function() {
            if (this.isTouch() && this.isHandheld()) {
                if (this.isSmallScreen()) {
                    return 'smartphone';
                } else {
                    return 'tablet';
                }
            }

            // Everything else is considered a desktop
            return 'desktop';
        },

        OSversion: function() {

            var userAgent = window.navigator.userAgent;
            var platform = window.navigator.platform;

            // OS detection
            var isIOS = /iPad|iPhone|iPod/.test(platform);
            var isOSX = /Intel\sMac\sOS\sX/.test(userAgent) && platform === "MacIntel";
            var isSilk = /Silk/.test(userAgent);
            var isAndroid = /Android/.test(userAgent) || isSilk;
            var isBlackBerry = /BlackBerry/.test(platform);
            var isWindowsPhone = /Windows\sPhone/.test(userAgent);
            var isWindowsNT = /Windows\sNT/.test(userAgent);
            var isLinux = /Linux/.test(userAgent);

            var os = isIOS ? "iOS"
            : isOSX ? "OS X"
            : isAndroid ? "Android"
            : isBlackBerry ? "BlackBerry"
            : isWindowsPhone ? "Windows Phone"
            : isWindowsNT ? "Windows NT"
            : isLinux ? "Linux"
            : undefined;

            var version;
            var versionRegexp = {
                "iOS": /OS\s([\d\._]+)\slike\sMac\sOS\sX/,
                "Android": /Android\s([\d\.]+);/,
                "BlackBerry": /OS\s([\d\.]+);/,
                "OS X": /Intel\sMac\sOS\sX\s([\d\._]+)/,
                "Windows Phone OS": /Windows\sPhone\sOS\s([\d\._]+)/,
                "Windows NT": /Windows\sNT\s([\d\._]+)/
            };

            if (versionRegexp.hasOwnProperty(os)) {
                var match = userAgent.match(versionRegexp[os]);

                if (match && match.length === 2) {
                    version = match[1];
                }
            }

            // Convert version underscores to points
            if (version) {
                version = version.replace(/_/g, ".");
            }

            if (isSilk) {
                // cast Silk as Android 3 for now -- note that if Silk gets updated to support
                // overflow-scroll : touch, this code should be updated.
                version = "3";
            }

            return {
                os: "" + os,
                version: "" + version
            };
        },

        supportsNativeOverflowScroll: function() {
            //
            // NOTE: the following piece of code from github does NOT WORK
            // https://gist.github.com/hay/4032527
            //
            // No vendor prefix solutions aside from WebkitOverflowScrolling seem to be working anymore.
            //

            // Implementation of current device with current values
            //
            // From https://github.com/filamentgroup/Overthrow
            //
            // The following attempts to determine whether the browser has native overflow support
            // so we can enable it but not polyfill
            var userAgent = window.navigator.userAgent;
            var platform = window.navigator.platform;

            var isOSX = /Intel\sMac\sOS\sX/.test(userAgent) && platform === "MacIntel";

            var isDesktop = (this.platform() === "desktop") || !this.isTouch();
            var OSversion = this.OSversion();
            var isSurfaceTablet = OSversion.os.toLowerCase() === "windows nt" && parseInt(OSversion.version.charAt(0)) >= 6 && userAgent.toLowerCase().indexOf("touch") > -1;
            var isWindowsPhone = (OSversion.os === "Windows Phone");
            var isFirefox = userAgent.indexOf("Firefox") > -1;

            var uaMatch = function() {
                // Hang on to your hats.
                // Whitelist some popular, overflow-supporting mobile browsers for now and the future
                // These browsers are known to get overlow support right, but give us no way of detecting it.
                // Webkit crosses platforms, and the browsers on our list run at least version 534
                var webkit = userAgent.match(/AppleWebKit\/([0-9]+)/),
                wkversion = webkit && webkit[1],
                wkLte534 = webkit && wkversion >= 534;

                return (
                // Development is hard without this since we enable touch on Chrome and it confuses the detections we have in place
                isOSX ||
                isSurfaceTablet ||
                isWindowsPhone ||
                isFirefox ||
                /* Android 3+ with webkit gte 534
        ~: Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13 */
                userAgent.match(/Android ([0-9]+)/) && RegExp.$1 >= 3 && wkLte534 ||
                /* Blackberry 7+ with webkit gte 534
        ~: Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0 Mobile Safari/534.11+ */
                userAgent.match(/ Version\/([0-9]+)/) && RegExp.$1 >= 0 && window.blackberry && wkLte534 ||
                /* Blackberry Playbook with webkit gte 534
        ~: Mozilla/5.0 (PlayBook; U; RIM Tablet OS 1.0.0; en-US) AppleWebKit/534.8+ (KHTML, like Gecko) Version/0.0.1 Safari/534.8+ */
                userAgent.indexOf(/PlayBook/) > -1 && RegExp.$1 >= 0 && wkLte534 ||
                /* Firefox Mobile (Fennec) 4 and up
        ~: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7; rv:2.1.1) Gecko/ Firefox/4.0.2pre Fennec/4.0. */
                userAgent.match(/Fennec\/([0-9]+)/) && RegExp.$1 >= 4 ||
                /* WebOS 3 and up (TouchPad too)
        ~: Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.0; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/233.48 Safari/534.6 TouchPad/1.0 */
                userAgent.match(/wOSBrowser\/([0-9]+)/) && RegExp.$1 >= 233 && wkLte534 ||
                /* Nokia Browser N8
        ~: Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/012.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.0 Mobile Safari/533.4 3gpp-gba
        ~: Note: the N9 doesn't have native overflow with one-finger touch. wtf */
                userAgent.match(/NokiaBrowser\/([0-9\.]+)/) && parseFloat(RegExp.$1) === 7.3 && webkit && wkversion >= 533
                );
            };

            // Features-first. iOS5 overflow scrolling property check - no UA needed here. thanks Apple :)
            // Note: === true is here because the original version returned null as a result if false
            var supportsNativeOverflowScroll = (("WebkitOverflowScrolling" in window.document.documentElement.style || uaMatch()) === true);
            return isDesktop || supportsNativeOverflowScroll;
        },

        supportsMinimumRequirements: function() {
            // Native scroll turns out to be a good "line in the sand" for Pressilla's device
            var OSversion = this.OSversion();

            var versionNumber = parseInt(String(OSversion.version).charAt(0));
            var isAncientMobileDevice = (OSversion.os === "Android" && versionNumber < 4);

            // At the moment, flexbox is required
            // XXX Minimum requirements should probably be in the app, not the lib
            return this.supportsNativeOverflowScroll() && !isAncientMobileDevice;
        }
    };

    window.Pressly.Detect = (function() {
        window.requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(fn) {
            setTimeout(fn, 200);
        };


        function detect(callback) {
            callback = callback || function(label) {
                console.log(label);
            };
            var ua, initial, head, _meta, before, meta;

            if (!document.querySelector) {
                return callback('unsupported');
            }

            ua = navigator.userAgent;

            if (/Windows Phone/.test(ua) || /iPhone/.test(ua) || /iPod/.test(ua)) {
                return callback('smartphone');
            }

            if (/iPad/.test(ua) || /Windows.+Touch.+Tablet/.test(ua)) {
                return callback('tablet');
            }

            initial = recordDeviceInformation();

            if (isZeroes(initial)) {
                return setTimeout(function() {
                    return detect(callback);
                }, 500);
            }

            head = document.querySelector('head');
            _meta = head.querySelector('meta[name=viewport]');

            if (_meta) {
                head.removeChild(_meta);
            }

            meta = createMetaViewportElement();
            head.appendChild(meta);

            requestAnimationFrame(function() {
                before = recordDeviceInformation();

                head.removeChild(meta);
                meta.setAttribute('content', 'width=device-width');
                head.appendChild(meta);

                requestAnimationFrame(function() {
                    var after, label, area;

                    after = recordDeviceInformation();

                    area = window.innerWidth * window.innerHeight;

                    if (area <= 214400) { // 640 x 335
                        label = 'smartphone';
                    } else if (equals(before, after)) {
                        label = 'desktop';
                    } else {
                        label = 'tablet';
                    }

                    meta.setAttribute('content', '');
                    head.removeChild(meta);

                    if (_meta) {
                        head.appendChild(_meta);
                    }

                    return callback(label);
                });
            });
        }

        function recordDeviceInformation() {
            var measurements = {};

            measurements['innerWidth'] = window.innerWidth;
            measurements['innerHeight'] = window.innerHeight;

            measurements['outerWidth'] = window.outerWidth;
            measurements['outerHeight'] = window.outerHeight;

            measurements['orientation'] = window.orientation;
            measurements['devicePixelRatio'] = window.devicePixelRatio;

            measurements['screenWidth'] = screen.width;
            measurements['screenHeight'] = screen.height;

            if (navigator.hasOwnProperty('msMaxTouchPoints')) {
                measurements['msMaxTouchPoints'] = navigator.msMaxTouchPoints;
            }

            return measurements;
        }

        function createMetaViewportElement() {
            var meta = document.createElement('meta');
            meta.setAttribute('name', 'viewport');
            meta.setAttribute('content', '');
            return meta;
        }

        function isZeroes(info) {
            if (info.innerWidth === 0 && info.innerHeight === 0 ||
            info.outerWidth === 0 && info.outerHeight === 0) {
                return true;
            }
        }

        function equals(a, b) {
            var i, k, l, keys;

            keys = Object.keys(a);
            l = keys.length;

            for (i = 0; i < l; i++) {
                k = keys[i];
                if (a[k] !== b[k])
                    return false;
            }

            return true;
        }

        if (typeof define === 'function' && define.amd) {
            define(function() {
                return detect;
            });
        } else if (typeof module !== 'undefined' && module.exports) {
            module.exports = detect;
        } else {
            this.Detect = detect;
            return detect;
        }
    }).call(this);

    // ^^^ END PRESSLY-LIB

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');

        for (var i = 0, ii = ca.length; i < ii; i++) {
            var c = ca[i];

            while (c.charAt(0) === " ") {
                c = c.substring(1, c.length);
            }

            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }

        return null;
    }

    function createCookie(name, value, days) {
        var expires;

        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }

        document.cookie = name + "=" + value + expires + "; path=/";
    }

    // Optional meta tags. We look for them in this order:
    // <meta property="pressly:on-site-homepage" content="true" />
    // <meta property="pressly:section-title" content="Latest News" />
    // <meta property="pressly:uid" content="7e8094db-dc11-4dc8-91ae-a0a49ae1fe97" />

    function onUserDefinedRoot() {
        // (Optional) Meta tag -- allows the user to specify that the current page is
        // the homepage for their site, so we can redirect them to the root URL in Pressly.

        // <meta property="pressly:on-site-homepage" content="true" />
        // content must be "true".

        var meta = document.querySelector("meta[property='pressly:on-site-homepage']");
        if (meta) {
            return (meta.getAttribute("content").toLowerCase() === "true");
        } else {
            return false;
        }
    }

    function findSectionTitle() {
        // (Optional) Meta tag -- allows the user to specify that the current page is a section.

        // <meta property="pressly:section-title" content="Latest News" />
        // content is the exact section title as it appears in Pressly.

        var meta = document.querySelector("meta[property='pressly:section-title']");
        if (meta) {
            return meta.getAttribute("content");
        } else {
            return false;
        }
    }

    function findUid() {
        // (Optional) Meta tag -- First detect if a the pressly:uid meta tag was supplied
        // before running any custom code block. This is the best way of deep linking to content.

        // <meta property="pressly:uid" content="7e8094db-dc11-4dc8-91ae-a0a49ae1fe97" />
        // content is the guid of the article from their feed.

        var meta = document.querySelector("meta[property='pressly:uid']");
        if (meta) {
            return meta.getAttribute("content");
        }

        // (Optional) Custom code-block -- This can be configured in the dashboard to help
        // parse url or DOM for uid.


        // If no meta tag or custom uid helper was supplied default to find article by the
        // current article URL. This may fail if the article URL supplied in the feed is
        // different than the current article URL visitors see when visiting your site.
        return false;
    }

    function canonicalUrl() {
        var link = document.querySelector("link[rel='canonical']");
        return link ? link.getAttribute("href") : false;
    }


    Pressly.assetLookupCallback = function(content) {
        if (content.data.exists) {
            window.location = makeRedirectUrl(content.data.section_slug + "/" + content.data.asset_slug);
        }
    };

    Pressly.sectionLookupCallback = function(section) {
        if (section.data.exists) {
            window.location = makeRedirectUrl(section.data.section_slug);
        }
    };

    // Turns off "style" menu dropdown function
    var disableGQDropdown = function() {
        var execute = function() {
            setTimeout(function() {
                jQuery('#cardinal-nav div.dropdown a[href="/style/"]').on('mouseenter', function(e) {
                    e.stopPropagation();
                });
            }, 10);
        };

        if ( document.readyState === 'complete' ) {
            execute();
        } else if (document.addEventListener) {
            var domContentLoad = function() {
                document.removeEventListener( 'DOMContentLoaded', domContentLoad, false );
                execute();
            };
            document.addEventListener('DOMContentLoaded', domContentLoad, false );
        }
    };

    Pressly.redirect = function(platform) {
        // Users reaching the site from the Pressly application by clicking on the
        // 'View Desktop Version' link will have fullsite=true param set. Set a cookie
        // we can check to prevent them from being redirected back to the Pressly
        // application. (Cookie expiry is 1 day)
        if (window.location.search.substr(1).indexOf('fullsite=true') !== -1) {
            createCookie("pressly-view-full-site", "true", 1);
            return;
        } else if (readCookie("pressly-view-full-site") === "true") {
            return;
        }

        if (forceRedirect || (redirectPlatforms[platform] && Pressly.Device.supportsMinimumRequirements())) {
            disableGQDropdown();

            // Bail if the script is running on a path outside of the rootUrl
            if (window.location.href.indexOf(window.location.protocol + "//" + rootUrl) !== 0) {
                return;
            }

            var currentUrl = decodeURIComponent(spoofUrl || canonicalUrl() || (window.location.host + window.location.pathname));
            var path = window.location.href.split(rootUrl)[1];
            var atRoot = typeof path !== "undefined" && (path === "" || path === "/" || /\/index\./.test(path)) || onUserDefinedRoot();
            var sectionTitle = findSectionTitle();
            var jsonp;

            // Handle deep linked content or simply redirect to the Pressly application root
            if (atRoot) {
                // Goto the site directly.
                window.location = makeRedirectUrl("");
            } else if (sectionTitle) {
                jsonp = document.createElement("script");

                jsonp.setAttribute("type", "text/javascript");
                jsonp.setAttribute("src", applicationUrl + "api/1/stream/?section_lookup=" + encodeURIComponent(sectionTitle) + "&callback=Pressly.sectionLookupCallback");

                document.head.appendChild(jsonp);
            } else if (deeplinking) {
                var uid = findUid();
                jsonp = document.createElement("script");

                jsonp.setAttribute("type", "text/javascript");
                jsonp.setAttribute("src", applicationUrl + "api/1/stream/?revlookup=" + encodeURIComponent(uid || currentUrl) + "&callback=Pressly.assetLookupCallback");

                // Execute the JSONP request
                document.head.appendChild(jsonp);
            }
        }
    };

    Pressly.Detect(function(result) {
        Pressly.redirect(result);
    });

}());
