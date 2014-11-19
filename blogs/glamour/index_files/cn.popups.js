/*!
* @file magnet.popups.js
* @author Paul Bronshteyn
* @comment Built by a geek loaded on caffeine ...
* @copyright (c) Conde Nast Digital
*/

if (typeof window.CN === 'undefined' || !window.CN) {
    window.CN = {};
}

/**
* CN Popup Object
* @class CN Popup Object
* @description Controls arrival popups or layers and exit popups
* @public
* @author Paul Bronshteyn
* @requires CN.ecom
*
*/
CN.popups = (function($) {
    var
        /**
        * Allow entry popups or layers
        * @memberOf CN.popups
        * @private
        * @type boolean
        * @default true
        */
        arriving = false,

        /**
        * Allow exiting popups or layers
        * @memberOf CN.popups
        * @private
        * @type boolean
        * @default true
        */
        exiting = false,

        /**
        * Switch between layer and popup mode, by default layers are on
        * @memberOf CN.popups
        * @private
        * @type boolean
        * @default true
        */
        layer = false,

        /**
        * Force layer ad if popups were blocked
        * @memberOf CN.popups
        * @private
        * @type boolean
        * @default false
        */
        forceLayer = false,

        /**
        * Site override flag to ignore any settings provided by ATG
        * @memberOf CN.popups
        * @private
        * @type boolean
        * @default false
        */
        siteOverride = false,

        /**
        * Popup window arguments
        * @memberOf CN.popups
        * @private
        * @type object
        */
        popArguments = {
            scrollbars: 0,
            location: 0,
            directories: 0,
            status: 0,
            menubar: 0,
            toolbar: 0,
            resizable: 0
        },

        /**
        * Arriving options object
        * @memberOf CN.popups
        * @private
        * @type object
        */
        arrive = {
            name: 'arrivalpop',
            cookie: 'ArrivalCookie',
            path: '/nolayout/arrival',
            width: 460,
            height: 295,
            top: -50,
            left: -50
        },

        /**
        * Exiting options object
        * @memberOf CN.popups
        * @private
        * @type object
        */
        exit = {
            name: 'exitingpop',
            cookie: 'ExitingCookie',
            path: '/nolayout/exit',
            width: 460,
            height: 295,
            top: 50,
            left: 50
        },

        /**
        * Number of hours after to expire arrival and exit cookies.
          When on DEV the cookie will expire in 1 hour.
        * @memberOf CN.popups
        * @private
        * @type integer
        * @default 24 hours
        */
        cookieLife = 24,

        /**
        * Seconds of delay before poping the arrival
        * @memberOf CN.popups
        * @private
        * @type integer
        * @default 3 seconds
        */
        popDelay = 3,

        /**
        * Popup delay timer
        * @memberOf CN.popups
        * @private
        * @type boolean
        * @default null
        */
        popTimer,

        /**
        * Current site path shortcut
        * @memberOf CN.popups
        * @private
        * @type string
        */
        currentPath = location.pathname,

        /**
        * Current site host shortcut
        * @memberOf CN.popups
        * @private
        * @type string
        */
        currentDomain = CN.site.domain || CN.url.domain(),

        /**
        * Excluded arrival paths. There will be no arrival popups or layers on pages using these paths.
        * @memberOf CN.popups
        * @private
        * @type array
        */
        excludeArrivalPaths = [
            '/sweeps',
            '/registration',
            '/services/newsletters'
        ],

        /**
        * Excluded exit paths. There will be no exit popups on pages using these paths.
        * @memberOf CN.popups
        * @private
        * @type array
        */
        excludeExitPaths = [
        ],

        /**
        * Excluded exit domains. There will be no exit popups if the click url
          matches any of the domains in the list.
        * @memberOf CN.popups
        * @private
        * @type array
        */
        excludeExitDomains = [
            'buysub.com',
            'condenastdirect.com',
            'clk.atdmt.com',
            'magazinestoresubscriptions.com'
        ],

        /**
        * Exclude url parameters. There will be no arrival or exit popups if the
          parameter is present in the url.
        * @memberOf CN.popups
        * @private
        * @type array
        */
        excludeUrlParams = [
            'mbid'
        ],

        /**
        * Custom exit popups
        * @memberOf CN.popups
        * @private
        * @type object
        */
        customPopups = {
            arriving: {},
            exiting: {}
        },

        /**
        * Check if excluded is in the list.
        * @description Check if the domain or path we are on at the moment is excluded.
                       This uses an indexOf match method.
        * @memberOf CN.popups
        * @private
        * @param {string} what Domain or path to be checked
        * @param {array} where List we are matching against
        * @return {boolean} Check result
        *
        * @example
            isExcluded('/path/to/page', excludeArrivalPaths);
            isExcluded('/path/to/page', excludeExitPaths);
            isExcluded('sample.com', excludeExitDomains);
        */
        isListed = function(what, where) {
            for (var i = 0, il = where.length; i < il; i++) {
                if (what.indexOf(where[i]) !== -1) {
                    return true;
                }
            }

            return false;
        },

        /**
        * Check if path falls under custom set popups
        * @memberOf CN.popups
        * @private
        * @param {string} what Path to be checked
        * @param {object} where List we are matching against
        * @return {object} Custom popup options
        *
        * @example
            isExcluded('/path/to/page', customPopups.arriving);
            isExcluded('/path/to/page', customPopups.exiting);
        */
        isCustom = function(what, where) {
            for (var item in where) {
                if (where[item].strict) {
                    if (what === item) {
                        return where[item].options;
                    }
                } else if (what.indexOf(item) !== -1) {
                    return where[item].options;
                }
            }

            return false;
        },

        /**
        * Add one or more paths or url items to a list
        * @memberOf CN.popups
        * @private
        * @param {object} what Arguments object containing the list of items
                                to be added to an item list
        * @param {array} where List of items to which to add additional items
        */
        insert = function(what, where) {
            for (var i = 0, il = what.length; i < il; i++) {
                if ($.inArray(what[i], where) === -1) {
                    where.push(what[i]);
                }
            }
        },

        /**
        * Remove one or more paths or url items from a list
        * @memberOf CN.popups
        * @private
        * @param {object} what Arguments object containing the list of items
                                to be removed from an exclution list
        * @param {array} where List of excludes from which to remove items
        */
        remove = function(what, where) {
            var i = 0,
                il = what.length,
                index;

            for (; i < il; i++) {
                index = $.inArray(what[i], where);
                if (index > -1) {
                    where.remove(index, 1);
                }
            }
        },

        /**
        * Popup the window and focus it.
        * @memberOf CN.popups
        * @private
        * @param {object} options Arriving or Exiting options
        * @return {boolean} Did we pop or not
        */
        pop = function(options) {
            var argument,
                arguments = '',
                win;

            if (options.cookie) {
                CN.cookie.set(options.cookie, options.cookie, { expires: options.cookieLife || cookieLife, path: '/', domain: currentDomain });
            }

            options.args = $.extend({}, popArguments, options.args || {});

            for (argument in options.args) {
                arguments += ',' + argument + '=' + options.args[argument];
            }
            win = window.open(options.path, options.name, 'height=' + (options.height || screen.height) + ',width=' + (options.width || screen.width) + ',top=' + parseInt(screen.height / 2 - (options.height || screen.height) / 2 + options.top) + ',left=' + parseInt(screen.width / 2 - (options.width || screen.width) / 2 + options.left) + arguments);
            return (win) ? (true, win.focus()) : false;
        },

        /**
        * Welcome user with a popup or a layer ad
        * @memberOf CN.popups
        * @private
        * @uses CN.popups.pop
        */
        welcome = function() {
            if (layer || (!pop(arrive) && forceLayer)) {
                    // Set arriving cookie
                    CN.cookie.set(arrive.cookie, arrive.cookie, { expires: arrive.cookieLife || cookieLife, path: '/', domain: currentDomain });
                    CN.ecom.floatingAd.init();
            }
        },

        /**
        * Farewell user with a popup
        * @memberOf CN.popups
        * @private
        * @param {object} e Window event
        * @event
        * @uses CN.popups.pop
        * @uses CN.url.domain
        * @uses CN.cookie.set
        * @uses CN.cookie.get
        */
        goodbye = function(e) {
            var options = isCustom(currentPath, customPopups.exiting),
                exitPath = '',
                exitDomain = '';

            if (options) {
                $(window).unbind('unload', goodbye);

                if (e.type === 'click') {
                    exitPath = (e.target.parentNode.pathname || e.target.pathname || '').replace(/(^[^/])/, '/$1');
                }

                if ((options.cookie && !CN.cookie.get(options.cookie)) && (options.excludePath && !isListed(exitPath, options.excludePath))) {
                    pop(options);
                }

                return;
            }

            if (!exiting || isListed(currentPath, excludeExitPaths) || CN.cookie.get(exit.cookie)) {
                return;
            }

            if (e.type === 'click') {
                $(window).unbind('unload', goodbye);
                if (/^(#|javascript:)/.test(this.href)) {
                    return;
                }
                exitDomain = e.target.hostname || $(e.target).parents('a:eq(0)')[0].hostname || '';
            }

            exitDomain = (exitDomain) ? CN.url.domain(exitDomain) : '';

            // Validate if we need a popup
            if (exitDomain === currentDomain || isListed(exitDomain, excludeExitDomains)) {
                return;
            }

            // pop the window
            pop(exit);
        },

        onFlashClick = function(e) {
            var loc = this.movie || CN.url.domain(this.data);

            if (loc[0] === '/' || loc === currentDomain) {
                $(window).unbind('unload', goodbye);
            }
        };

    /**
    * @scope CN.popups
    */
    return {
        /**
        * Initiate popups.
        * @description Binds exit events if needed. Checks if we need an arriving popup,
                       sets arriving cookie, delays and pops.
        * @memberOf CN.popups
        * @private
        * @return {object} CN.popups
        * @uses CN.popups.welcome
        * @uses CN.popups.goodbye
        * @uses CN.cookie.get
        * @uses CN.cookie.set
        * @uses CN.url.params
        *
        * @example
            Initiate popups. This should always be the last line.
            CN.popup.init();
        */
        init: function() {
            // check for excluded url params
            var i = 0,
                il = excludeUrlParams.length,
                params = CN.url.params();

            for (; i < il; i++) {
                if (params[excludeUrlParams[i]]) {
                    return this;
                }
            }

            // Bind events, links, window unload, form submit
            $('a,area').live('click', goodbye);
            $(window).bind('unload', goodbye);
            $(function() {
                $('form').bind('submit', function() {
                    $(window).unbind('unload', goodbye);
                })
            })

            $('object').live('mousedown', onFlashClick);

            // On dev? expire cookie in one hour
            if (CN.site.env === 'DEV') {
                cookieLife = 1;
            }

            /*
            * Arriving off. Exit.
            * mbid in url. Exit.
            * Arriving cookie exists. Exit.
            * Arriving path excluded. Exit.
            */

            if (CN.cookie.get(arrive.cookie) || isListed(currentPath, excludeArrivalPaths) || (!arriving && !layer)) {
                return this;
            }

            // Delay and pop
            popTimer = setTimeout(welcome, popDelay * 1000);

            return this;
        },

        /**
        * Turn arriving popup or layer on/off and set arrving popup options.
        * @param {boolean} setting Arriving popup setting
        * @param {object} options Options
        * @option options {string} name Name to use for the popup window
        * @option options {string} cookie Name to use for the arrival cookie
        * @option options {integer} cookieLife Cookie life in hours (0 = session)
        * @option options {string} path Path to the popup window html/jsp
        * @option options {integer} width Width of the popup window
        * @option options {integer} height Height of the popup window
        * @option options {integer} top Top offset from the center of the page
        * @option options {integer} left Left offset from the center of the page
        * @option options {object} args Popup window arguments
        * @option args {integer} scrollbars Enable/disable scrollbars
        * @option args {integer} location Enable/disable location bar
        * @option args {integer} directories Enable/disable directories toolbar
        * @option args {integer} status Enable/disable status bar
        * @option args {integer} menubar Enable/disable menu bar
        * @option args {integer} toolbar Enable/disable browser toolbar
        * @option args {integer} resizable Enable/disable window resizing
        * @return {object} CN.popups
        *
        * @example
            Turn arriving popup or layer on
            CN.popups.setArriving(true);

            Turn arriving popup or layer off
            CN.popups.setArriving(false);

            Set arrival popup options
            CN.popups.setArriving(true, {
                name: 'arrivalpop',
                cookie: 'ArrivalCookie',
                path: '/nolayout/arrival',
                width: 460,
                height: 295,
                top: -50,
                left: -50,
                args: {
                    scrollbars: 1,
                    toolbar: 0
                }
            });
        */
        setArriving: function(setting, options) {
            arriving = setting === true;
            $.extend(arrive, (options || {}));
            return this;
        },

        /**
        * Turn exiting popup on/off and set exiting popup options.
        * @param {boolean} setting Exiting popup setting
        * @param {object} options Exiting popup options
        * @option options {string} name Name to use for the popup window
        * @option options {string} cookie Name to use for the arrival cookie
        * @option options {integer} cookieLife Cookie life in hours (0 = session)
        * @option options {string} path Path to the popup window html/jsp
        * @option options {integer} width Width of the popup window
        * @option options {integer} height Height of the popup window
        * @option options {integer} top Top offset from the center of the page
        * @option options {integer} left Left offset from the center of the page
        * @option options {object} args Popup window arguments
        * @option args {integer} scrollbars Enable/disable scrollbars
        * @option args {integer} location Enable/disable location bar
        * @option args {integer} directories Enable/disable directories toolbar
        * @option args {integer} status Enable/disable status bar
        * @option args {integer} menubar Enable/disable menu bar
        * @option args {integer} toolbar Enable/disable browser toolbar
        * @option args {integer} resizable Enable/disable window resizing
        * @return {object} CN.popups
        *
        * @example
            Turn exit popup on
            CN.popups.setExiting(true);

            Turn exit popup off
            CN.popups.setExiting(false);

            Set exiting popup options
            CN.popups.setExiting(true, {
                name: 'exitingpop',
                cookie: 'ExitingCookie',
                path: '/nolayout/exiting',
                width: 460,
                height: 295,
                top: -50,
                left: -50,
                args: {
                    scrollbars: 1,
                    toolbar: 0
                }
            });
        */
        setExiting: function(setting, options) {
            exiting = setting === true;
            $.extend(exit, (options || {}));
            return this;
        },

        /**
        * Turn layer on/off. Defaults is off (popup).
        * @param {boolean} setting Setting to be set
        * @return {object} CN.popups
        *
        * @example
            Turn layer on
            CN.popups.setLayer(true);

            Turn layer off
            CN.popups.setLayer(false);
        */
        setLayer: function(setting) {
            layer = setting === true;
            return this;
        },

        /**
        * Set if we want to force a layer if popup was blocked.
        * @param {boolean} setting Setting to be set
        * @return {object} CN.popups
        *
        * @example
            Turn force layer on
            CN.popups.setForceLayer(true);

            Turn force layer off
            CN.popups.setForceLayer(false);
        */
        setForceLayer: function(setting) {
            forceLayer = setting === true;
            return this;
        },

        /**
        * Check if the layer is on.
        * @description This will be used in ecomPlacement.jsp to check if the site uses layers
                       before making ATG call.
        * @return {boolean}
        */
        isLayer: function() {
            // We need to always show the layer because that targeter contains popup setio setting
            return true; //layer || forceLayer;
        },

        /**
        * Set the number of hours after which to expire both arrival and exit cookies. Default is 24 hours.
        * @param {integer} life=24 Cookie life in hours
        * @return {object} CN.popups
        * @uses CN.utils.intval
        *
        * @example
            Set arrival and exiting cookie life
            CN.popups.setCookieLife(24);
        */
        setCookieLife: function(life) {
            cookieLife = CN.utils.intval(life) || cookieLife;
            return this;
        },

        /**
        * Set delay in seconds after which to create the popup. Default is 3.
        * @param {integer} delay=3 Delay in seconds
        * @return {object} CN.popups
        * @uses CN.utils.intval
        *
        * @example
            Set popup delay
            CN.popups.setPopDelay(3);
        */
        setPopDelay: function(delay) {
            popDelay = CN.utils.intval(delay) || popDelay;
            return this;
        },

        /**
        * Set default popup window options
        * @param {object} args Popups window options
        * @option args {integer} scrollbars Enable/disable scrollbars
        * @option args {integer} location Enable/disable location bar
        * @option args {integer} directories Enable/disable directories toolbar
        * @option args {integer} status Enable/disable status bar
        * @option args {integer} menubar Enable/disable menu bar
        * @option args {integer} toolbar Enable/disable browser toolbar
        * @option args {integer} resizable Enable/disable window resizing
        * @return {object} CN.popups
        *
        * @example
            Set exiting popup options
            CN.popups.setPopArguments({
                scrollbars: 1,
                location: 0,
                directories: 0,
                status: 0,
                menubar: 0,
                toolbar: 0,
                resizable: 0
            });
        */
        setPopArguments: function(args) {
            $.extend(popArguments, (args || {}));
            return this;
        },

        /**
        * Set custom exit popup on specified path
        * @param {string} path Path to have custom exit pops
        * @param {object} [pop] Exiting popup options
        * @option pop {string} name Name to use for the popup window
        * @option pop {string} cookie Name to use for the arrival cookie
        * @option pop {integer} cookieLife Cookie life in hours (0 = session)
        * @option pop {string} path Path to the popup window html/jsp
        * @option pop {integer} width Width of the popup window
        * @option pop {integer} height Height of the popup window
        * @option pop {integer} top Top offset from the center of the page
        * @option pop {integer} left Left offset from the center of the page
        * @option pop {array} excludePath Paths to be excluded from this custom popup
        * @option pop {object} args Popup window arguments
        * @option args {integer} scrollbars Enable/disable scrollbars
        * @option args {integer} location Enable/disable location bar
        * @option args {integer} directories Enable/disable directories toolbar
        * @option args {integer} status Enable/disable status bar
        * @option args {integer} menubar Enable/disable menu bar
        * @option args {integer} toolbar Enable/disable browser toolbar
        * @option args {integer} resizable Enable/disable window resizing
        * @param {boolean} [strict] Set path check to be exact match
        * @return {object} CN.popups
        */
        setCustomExitPath: function(path, pop, strict) {
            if (!path) {
                return this;
            }

            if (CN.isBoolean(pop)) {
                strict = pop;
                pop = exit;
            }

            customPopups.exiting[path] = {
                'strict': strict || false,
                options: pop || exit
            }

            return this;
        },

        /**
        * Exclude path. Adds path(s) to both Arrival and Exitings exclude lists
        * @param {string[]} path Path(s) to be excluded
        * @return {object} CN.popups
        * @uses CN.popups.insert
        *
        * @example
            Exclude arrival and exiting path
            CN.popups.excludePath('/path/on/the/site');

            Exclude multiple arrival and exiting paths
            CN.popups.excludePath('/path/on/the/site', '/other/path/on/the/site');
        */
        excludePath: function() {
            insert(arguments, excludeArrivalPaths);
            insert(arguments, excludeExitPaths);
            return this;
        },

        /**
        * Exclude arrival path
        * @param {string[]} path Path(s) to be excluded
        * @return {object} CN.popups
        * @uses CN.popups.insert
        *
        * @example
            Exclude arrival path
            CN.popups.excludeArrivalPath('/path/on/the/site');

            Exclude multiple arrival paths
            CN.popups.excludeArrivalPath('/path/on/the/site', '/other/path/on/the/site');
        */
        excludeArrivalPath: function() {
            insert(arguments, excludeArrivalPaths);
            return this;
        },

        /**
        * Remove excluded arrival path
        * @param {string[]} path Path(s) to be removed
        * @return {object} CN.popups
        * @uses CN.popups.remove
        *
        * @example
            Remove excluded arrival path
            CN.popups.removeArrivalPath('/path/on/the/site');

            Remove multiple excluded arrival paths
            CN.popups.removeArrivalPath('/path/on/the/site', '/other/path/on/the/site');
        */
        removeArrivalPath: function() {
            remove(arguments, excludeArrivalPaths);
            return this;
        },

        /**
        * Exclude exiting path
        * @param {string[]} path Path(s) to be excluded
        * @return {object} CN.popups
        * @uses CN.popups.insert
        *
        * @example
            Exclude exiting path
            CN.popups.excludeExitPath('/path/on/the/site');

            Exclude multiple exiting paths
            CN.popups.excludeExitPath('/path/on/the/site', '/other/path/on/the/site');
        */
        excludeExitPath: function() {
            insert(arguments, excludeExitPaths);
            return this;
        },

        /**
        * Remove excluded exiting path
        * @param {string[]} path Path(s) to be removed
        * @return {object} CN.popups
        * @uses CN.popups.remove
        *
        * @example
            Remove excluded exiting path
            CN.popups.removeExitPath('/path/on/the/site');

            Remove multiple excluded exiting paths
            CN.popups.removeExitPath('/path/on/the/site', '/other/path/on/the/site');
        */
        removeExitPath: function() {
            remove(arguments, excludeExitPaths);
            return this;
        },

        /**
        * Exclude exit domain(s)
        * @param {string[]} domain Domain to be excluded
        * @return {object} CN.popups
        * @uses CN.popups.insert
        *
        * @example
            Exclude exiting domain
            CN.popups.excludeExitDomain('domain.com');

            Exclude multiple exiting domains
            CN.popups.excludeExitDomain('domain.com', 'second.com', 'third.com');
        */
        excludeExitDomain: function() {
            insert(arguments, excludeExitDomains);
            return this;
        },

        /**
        * Remove excluded exit domain(s)
        * @param {string[]} domain Domain(s) to be removed
        * @return {object} CN.popups
        * @uses CN.popups.remove
        *
        * @example
            Remove excluded exit domain
            CN.popups.removeExitDomain('domain.com');

            Remove multiple excluded exiting domains
            CN.popups.removeExitDomain('domain.com', 'second.com', 'third.com');
        */
        removeExitDomain: function() {
            remove(arguments, excludeExitDomains);
            return this;
        },

        /**
        * Exclude url parameter
        * @param {string[]} param Url parameter to be excluded
        * @return {object} CN.popups
        * @uses CN.popups.insert
        *
        * @example
            Exclude url parameter
            CN.popups.excludeUrlParam('mbid');

            Exclude multiple url parameters
            CN.popups.excludeUrlParam('mbid', 'npu');
        */
        excludeUrlParam: function() {
            insert(arguments, excludeUrlParams);
            return this;
        },

        /**
        * Remove excluded url parameter
        * @param {string[]} param Url parameter to be removed
        * @return {object} CN.popups
        * @uses CN.popups.remove
        *
        * @example
            Remove excluded url parameter
            CN.popups.removeUrlParam('mbid');

            Remove multiple excluded url parameters
            CN.popups.removeUrlParam('mbid', 'npu');
        */
        removeUrlParam: function() {
            remove(arguments, excludeUrlParams);
            return this;
        },

        /**
        * Set ATG Arriving
        */
        setATGArriving: function(setting, options) {
            if (!siteOverride) {
                arriving = setting === true;

                if (!arriving) {
                    popTimer = clearTimeout(popTimer);
                } else {
                    if (!popTimer) {
                        setTimeout(welcome, popDelay * 1000);
                    }
                }

                $.extend(arrive, (options || {}));
                CN.debug.info('ATG set arriving:', [arriving]);
            }
            return this;
        },

        /**
        * Set ATG Exiting
        */
        setATGExiting: function(setting, options) {
            if (!siteOverride) {
                exiting = setting === true;
                $.extend(exit, (options || {}));
                CN.debug.info('ATG set exiting:', [exiting]);
            }
            return this;
        },

        /**
        * Set ATG Layer
        */
        setATGLayer: function(setting) {
            if (!siteOverride) {
                layer = setting === true;
                CN.debug.info('ATG set layer:', [layer]);
            }
            return this;
        },

           /**
        * Set site override option
        */
        setSiteOverride: function(setting) {
            siteOverride = setting === true;
            return this;
        }
    }
})(jQuery)
