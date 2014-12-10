/**
 * @module      slideshow
 * @namespace   CN
 *
 * @description Handles the creation and display of one or more slideshows.
 * Markup is controlled by a data source passed into CN.schemaParser. An
 * ISlide interface allows for any object to be used as a slide at any point
 * in the slideshow.
 *
 * The command implementation works as follows: Commands are instantiated
 * and available to the implementation code. Actions are part of the slideshow,
 * and are delegated to by the commands. Actions change the state of the
 * slideshow, and must _never_ be called directly.
 *
 * Intrinsic to this slideshow is the concept of interstitial ads, which
 * are handled by an InterstitialManager and can come from any source, as long
 * as they implement the ISlide interface. Other slides implementing this
 * interface can be placed anywhere inside the slideshow and will behave like
 * normal slides.
 *
 * CN.page.slideshow is the default slideshow reference used by the addSlide()
 * and addInterstitial() API methods, if a slideshow is not passed to them.
 * The addSlide() method can add a slide using an HTML string, or it can add a
 * DomSlide, which is a representation of an element already on the page. DOM
 * elements to be used as slides must have a unique id attribute.
 *
 * The slideshow model publishes the following CN.observers, which you can
 * subscribe to: onForwardComplete, onBackwardComplete, onJumpToSlideComplete,
 * onStateChange, onSlideChangeComplete, onInterstitialShow, onInterstitialHide,
 * onSlideAppended, onSlideshowReady.
 * > [slideshow].onInterstitialShow.subscribe(function() { (your function here) });
 *
 * The slideshow depends on a div #items-container if the intro is used. Other
 * class names can be defaults or passed as config options.
 *
 * @requires  CN, CN.schemaParser, jquery, jquery.ui
 * @optional  jquery.carousel, jquery.scrollpane, jquery.history,
 *            CN.slideshow.viewlarger, CN.pluckhelper, CN.slideshow.pluckhelper
 * @author    Eric Shepherd
 * @copyright 2008-2010 Conde Nast Digital
 *
 * History: 0.8.0    EBS 10.01.2008 Alpha
 *          0.9.0    EBS 11.11.2008 Beta, for prototype of slideshow implementation
 *          0.9.1    EBS 12.02.2008 Added support for inserting slides anywhere in show
 *          0.9.2    EBS 12.19.2008 Now uses CN.schemaParser for rendering JSON data
 *          0.9.3    EBS 01.07.2009 Added support for slides to come from the DOM using DomSlide object
 *          0.9.4    EBS 01.29.2009 Made changes per new CN.js
 *          1.0.0rc1 EBS 02.26.2009 All remaining functionality, fixed slider, jquery 1.3.2, history support broken currently
 *          1.0.0    EBS 03.01.2009 History support fixed, production version
 *          1.1.0rc1 EBS 05.12.2009 Added cookie for instructions, cancel default for keystrokes in VL
 *          1.1.0rc2 EBS 05.18.2009 Refactoring, changed slideshow.el to a jquery node
 *          1.1.0rc3 EBS 06.22.2009 Refactoring of view larger, provided view larger callback, pulled out api methods, other minor refactorings
 *          1.1.0rc4 EBS 07.07.2009 View larger is now a plugin, manager renamed controller, moved around lots of other stuff
 *          1.1.0    EBS 09.23.2009 Minor bug fixes, better intro page functionality, intro callbacks, production release
 *          1.2.0    EBS 12.03.2009 Added methods (getTitle, getKeywords, getDocType) to Slide object so it will implement the IDoc interface and interact correctly with the new cn.pluckhelper object.
 *          1.2.1    EBS 12.10.2009 Changed .list to #items-container when toggling intro causes slideshow to scroll up, so that it will work with the new list.jsp markup.
 *          1.2.2    EBS 02.23.2010 Calling history plugin onSlideshowReady instead of setting fragment, so #slide= links will work for jumping within slideshows, also added ability to chain api calls.
 *          1.2.3    YC  03.05.2010 Pulled out method for history changing so it can be used by view larger and regular slideshow, fixes double counting bug
 *          1.3.0rc1 EBS 03.20.2010 Added LightSlide and made adaptations for use with mediaItems media player
 *          1.3.0rc2 EBS 03.25.2010 Added overlayNavigation component
 *          1.3.0rc3 EBS 03.31.2010 Added thumbnail to Slide model for use with new schemas. Should be backward compatible.
 *          1.3.0rc4 EBS 04.02.2010 NOT BACKWARD COMPATIBLE - different markup and compatible with jquery.slideshow.js plugin.
 *          1.3.0rc5 EBS 04.13.2010 Removed history jump on load if history is in hash but turned off; this affects other slideshows on the page and should never have been built.
 *          1.3.1    DP  05.13.2010 Adding the config object originally used by TNY.
 *          1.3.2    EBS 05.21.2010 preloadImages() now takes two arguments to preload only a range of images.
 *          1.3.3    EBS 06.23.2010 Added param to CN.Observer constructor call for onSlideshowReady
 *          1.3.4    EBS 08.25.2010 Adjustment to removeSlide : changed call to remove style instead of clearing it
 *          1.3.5    VL 03.09.2011 Added useInterstitial to config
 *          1.3.6    VL 03.17.2011 Added config for countSeparator
 *
 * References:
 *  - jScrollPane   <http://www.kelvinluck.com/assets/jquery/jScrollPane/jScrollPane.html>
 *  - jCarousel     <http://sorgalla.com/projects/jcarousel>
 */


/*global CN, console, window, alert, location, document, jQuery, setTimeout, clearTimeout, clearInterval, setInterval */ /* for jsLint */


/**
 * @namespace CN.slideshow The main slideshow namespace
 */
CN.slideshow = {};


/**
 * Object to attach slideshow plugins to
 * @namespace CN.slideshow
 */
CN.slideshow.plugin = CN.slideshow.plugin || {};


/**
 * Config object for slideshow text
 * @namespace CN.slideshow
 */
CN.slideshow.config = CN.slideshow.config || {
    forwardBtn                      : 'Next',
    backwardBtn                     : 'Previous',
    playBtn                         : 'Play Slideshow',
    pauseBtn                        : 'Pause',
    continueNote                    : 'Slideshow will continue in ',
    continueLink                    : 'Click to skip',
    adNote                          : 'Advertisement',
    backToIntroBtn                  : 'Back to slideshow intro',
    viewSlideshowBtn                : 'View Slideshow',
    viewAllCloseBtn                 : 'Close',
    viewLargerCloseBtn              : 'Close',
    viewLargerWidth                 : 990,
    viewLargerInstructionsNote      : '<strong>Press ESC to close</strong><b>Right Arrow</b> moves forward.<br /><b>Left Arrow</b> moves backward.<br /><b>Space Bar</b> starts and stops play.',
    viewLargerInstructionsCloseBtn  : 'Close',
    viewLargerInstructionsTrigger   : '? <span>Help</span>'
};


/**
 * Slideshow API methods
 * @namespace CN.slideshow
 */
CN.slideshow.api = (function() {
    var addSlide,
        addInterstitial;

    /**
     * API method to add slides into the show. Show can be specified,
     * else defaults to standard CN.page.slideshow. Slide type can be
     * specified, else defaults to InlineAd.
     *
     * @method addSlide
     * @param  html         {String} The new slide's HTML for DOM insertion, or a string indicating the DOM element ID to move to the slideshow.
     * @param  options      {Object} A hash of options
     * @option slideshow    {Slides} A slideshow to add this slide into
     * @option thumbnailUrl {String} The path to the thumbnail image for this new slide
     * @option placement    {Number} The placement of the slide, defaults to -1 (last slide)
     * @option slideType    {String} The type of slide to create, defaults to InlineAd
     */
    addSlide = function(html, options) {
        options = options || {};
        var newSlide,
            i,
            placement;

        try {
            options.slideshow = options.slideshow || CN.page.slideshow;
        } catch(e) {
            CN.debug.error('CN.slideshow.api.addSlide: Error in setting the slideshow. Make sure that you pass in an existing slideshow or that CN.page.slideshow (the default) exists: ' + e.message);
        }

        options.slideType    = options.slideType    || 'InlineAd';
        options.thumbnailUrl = options.thumbnailUrl || '/images/default-thumbnail.gif';
        options.placement    = options.placement    || -1;
        placement = options.placement === -1 ? options.slideshow.slides.length : options.placement - 1;

        try {
            newSlide = new CN.slideshow[options.slideType]()
                .setHtml(html)
                .setPlacement(options.placement);
            CN.Interface.ensureImplements(newSlide, CN.slideshow.ISlide);
            options.slideshow.slides.splice(placement, 0, newSlide);
            for (i in options.slideshow.navigationItems) {
                if (options.slideshow.navigationItems.hasOwnProperty(i)) {
                    options.slideshow.navigationItems[i].appendThumbnail(options.thumbnailUrl, placement);
                }
            }
            options.slideshow.onSlideAppended.fire(placement);
        } catch(e) {
            CN.debug.error('CN.slideshow.api.addSlide: Error in adding slide: ' + e.message);
        }
    };

    /**
     * API method to add interstitial ads to the show. Show can be
     * specified, else defaults to standard CN.page.slideshow
     *
     * @method addInterstitial
     * @param  html         {String} The new ad's HTML for DOM insertion
     * @param  options      {Object} A hash of options
     * @option slideshow    {Slides} A slideshow to add this slide into
     * @option thumbnailUrl {String} The path to the thumbnail image for this new slide
     * @option slideType    {String} The type of interstitial to use (defaults to Interstitial)
     */
    addInterstitial = function(html, options) {
        options = options || {};
        var newSlide;

        try {
            options.slideshow = options.slideshow || CN.page.slideshow;
        } catch(e) {
            CN.debug.error('CN.slideshow.api.addInterstitial: Error in setting the slideshow. Make sure that you pass in an existing slideshow or that CN.page.slideshow (the default) exists: ' + e.message);
        }

        options.slideType = options.slideType || 'Interstitial';
        options.thumbnailUrl = options.thumbnailUrl || '/images/default-thumbnail.gif';

        try {
            newSlide = new CN.slideshow[options.slideType]()
                .setHtml(html);
            CN.Interface.ensureImplements(newSlide, CN.slideshow.ISlide);
            options.slideshow.interstitialManager.slides.push(newSlide);
        } catch(e) {
            CN.debug.error('CN.slideshow.api.addInterstitial: Error in adding slide: ' + e.message);
        }
    };

    return {
        addSlide        : addSlide,
        addInterstitial : addInterstitial
    };
}());


/**
 * Slideshow utility functions
 * This is kind of a god object, but most of these functions don't really fit
 * anywhere else. Moving some of this logic to View and Model in the future
 * is a possibility, though preloadImages and dataReady should stay here.
 *
 * @class  CN.slideshow.util
 * @author Eric Shepherd
 */
CN.slideshow.util = (function() {
    var getSlideFromUrl,
        calculateInterstitialFrequency,
        bindHistory,
        destroyTimer,
        removeNavigations,
        dataReady,
        preloadImages;

    /**
     * Determines from the URL what the current slide should be.
     *
     * @method getSlideFromUrl
     * @return {Mixed} The number indicating the requested slide
     */
    getSlideFromUrl = function() {
        var index = CN.url.params().slide || 1,
            parts = location.toString().split('#');

        if (parts[1] && parts[1].match(/slide=\d+/)) {
            index = parts[1].split('=')[1];
        }

        return index;
    };

    /**
     * Called when history changes to jump to the appropriate slide or intro
     *
     * @method bindHistory
     * @requires jquery.history.js
     * @param {Event}  e            The jQuery event object
     * @param {String} currentHash  The fragment id provided by the history plugin
     * @param {String} previousHash The previous fragment id provided by the history plugin
     */
    bindHistory = function(e, currentHash, previousHash) {
        var useIntro = e.data.useIntro,
            commands = e.data.commands,
            slide = 0;

        if (currentHash !== '' && currentHash !== 'intro') {
            slide = currentHash.split('=')[1] || 0;
            if (isNaN(parseInt(slide, 10))) {
                slide = 0;
            }
            if (useIntro === true) {
                CN.slideshow.view.toggleIntro(false);
            }
            commands.jumpToSlideCommand.execute(slide);
        }

        if ((currentHash === '' || currentHash === 'intro') && CN.page.config.hasIntro === true && useIntro === true) {
            CN.slideshow.view.toggleIntro(true);
        }

        return false;
    };

    /**
     * Determines the appropriate frequency at which to show modal ads
     * Based on logic from ad ops which states:
     * - fewer than 10 slides or useInterstitial config is set to false - no ad at all
     * - slideshow length greater than frequency - show at indicated frequency (default is 10)
     * Keeping variable decs and structure in case this logic needs to get more complex in the future
     *
     * @method  calculateInterstitialFrequency
     * @static
     * @private
     * @param   slideshow {Slides} A slideshow to use in calculating the new interstitial frequency
     */
    calculateInterstitialFrequency = function(slideshow) {
        var len = slideshow.slides.length,
            freq = slideshow.interstitialManager.originalFrequency;

        if (len < 10 || freq === 0 || slideshow.slides.useInterstitial === false) {
            slideshow.interstitialManager.setFrequency(0);
        } else {
            slideshow.interstitialManager.setFrequency(freq);
        }
    };

    /**
     * Stops the slideshow and clears the timer
     *
     * @method  destroyTimer
     * @private
     * @param   slideshow {Slides} A slideshow object
     */
    destroyTimer = function(slideshow) {
        if (slideshow.isAlreadyPlaying()) {
            slideshow.timer.stop();
        }
        if (slideshow.timer) {
            slideshow.timer = null;
        }
    };

    /**
     * Removes navigations associated with a specific slideshow
     *
     * @method  removeNavigations
     * @private
     * @param   slideshow {Slides} A slideshow object
     */
    removeNavigations = function(slideshow) {
        for (var i in slideshow.navigationItems) {
            if (slideshow.navigationItems.hasOwnProperty(i)) {
                slideshow.navigationItems[i].list.remove();
                if (slideshow.navigationItems[i].wrapper) {
                    slideshow.navigationItems[i].wrapper.remove();
                }
            }
        }
    };

    /**
     * Called from JSON callback, preloads images and calls the model
     * method to set the current slide correctly. At this point,
     * everything is ready for use.
     *
     * @method dataReady
     * @param  slideshow {Slides} A slideshow to initialize
     * @param  options   {Object} An object of config options
     */
    dataReady = function(slideshow, options) {
        options = options || {};

        var start = options.start || null,
            end   = options.end   || null;

        slideshow.$el.addClass('slideshow-enabled');
        preloadImages(slideshow, start, end);
        slideshow.postDataSetup();
    };

    /**
     * Preloads the images referenced in each slide's HTML
     *
     * @method preloadImages
     * @param  slideshow {Slides} A slideshow to preload images for
     * @param  first     {Number} Optional 1-based inclusive index to start loading from
     * @param  last      {Number} Optional 1-based inclusive index to end loading
     */
    preloadImages = function(slideshow, first, last) {
        var slen = slideshow.slides.length,
            i    = first && (first > 0) ? first : 1,
            img  = new Image();

        last = last && (last <= slen) ? last : slen;

        CN.debug.info('Image preloading has begun for slideshow with selector "#' + slideshow.$el.attr('id') + '".');

        for (; i <= last; i++) {
            CN.debug.info('Preloading images for slide number ' + i);
            slideshow.preloadedSlides.push(i);
            jQuery(slideshow.slides[i - 1].getHtml())
                .find('img')
                .each(function() {
                    img.src = this.src;
            });
        }
    };

    return {
        getSlideFromUrl                 : getSlideFromUrl,
        calculateInterstitialFrequency  : calculateInterstitialFrequency,
        destroyTimer                    : destroyTimer,
        removeNavigations               : removeNavigations,
        dataReady                       : dataReady,
        bindHistory                     : bindHistory,
        preloadImages                   : preloadImages
    };
}());


/**
 * Contains methods to be used in implementing and interacting with slideshows.
 *
 * @namespace CN.slideshow
 * @class     controller
 * @public
 * @author    Eric Shepherd
 */
CN.slideshow.controller = (function() {
    var init;

    /**
     * Sets up the Controller portion of the application by building the
     * commands for the slideshow and wiring up standard events. Also
     * generates navigation items by delegating to view methods.
     *
     * @method  init
     * @param   slideshow {Slides} A slideshow to initialize
     * @param   config    {Object} A hash indicating what features the slideshow should implement
     * @return            {Object} The commands available for this slideshow
     */
    init = function(slideshow, config) {
        config = config || {};
        var commands = {},
            newCommand,
            adCounter = slideshow.showInterstitialTimer,
            adTimer,
            i,
            featureSetup,
            requireCommand;

                // Command factory (client)
        requireCommand = function(command) {
            if (!commands[command + 'Command']) {
                newCommand = command.substr(0,1).toUpperCase() + command.substr(1, command.length);
                commands[command + 'Command'] = new CN.slideshow[newCommand](slideshow);
            }
        };

                // Interstitials are always necessary
        requireCommand('showInterstitial');
        requireCommand('hideInterstitial');

                // Sets up all optional features based on config passed to the init() method
        featureSetup = {

            /**
             * Sets up forward functionality
             *
             * @method goForward
             * @private
             *
             * @param  config     {Object} Hash of config options; either container or trigger are required
             * @option container  {String} A container in which to create the trigger element, if no trigger element is specified
             * @option trigger    {String} A jQuery selector indicating which element(s) will execute the command
             */
            goForward : function(config) {
                requireCommand('goForward');
                        // Creates trigger if only container is passed in
                if (!config.trigger) {
                    var forwardControl = jQuery('<div class="slideshow-control-forward">' + CN.slideshow.config.forwardBtn + '</div>');
                    jQuery(config.container).append(forwardControl);
                    config.trigger = forwardControl.get(0);
                }

                jQuery(config.trigger).click(function() {
                    commands.goForwardCommand.execute();
                    return false;
                });
            },

            /**
             * Sets up backward functionality
             *
             * @method goBackward
             * @private
             *
             * @param  config     {Object} Hash of config options; either container or trigger are required
             * @option container  {String} A jQuery selector indicating the container in which to create the trigger element, if no trigger element is specified
             * @option trigger    {String} A jQuery selector indicating which element(s) will execute the command
             */
            goBackward : function(config) {
                requireCommand('goBackward');
                        // Creates trigger if only container is passed in
                if (!config.trigger) {
                    var backwardControl = jQuery('<div class="slideshow-control-backward">' + CN.slideshow.config.backwardBtn + '</div>');
                    jQuery(config.container).append(backwardControl);
                    config.trigger = backwardControl.get(0);
                }

                jQuery(config.trigger).click(function() {
                    commands.goBackwardCommand.execute();
                    return false;
                });
            },

            /**
             * Sets up play functionality
             *
             * @method playSlideshow
             * @private
             *
             * @param  config     {Object} Hash of config options; either container or trigger are required, sliderEl is recommended
             * @option container  {String} A jQuery selector indicating the container in which to create the trigger element, if no trigger element is specified
             * @option trigger    {String} A jQuery selector indicating which element(s) will execute the command
             * @option sliderEl   {String} A jQuery selector indicating the element after which to place the speed slider
             */
            playSlideshow : function(config) {
                slideshow.sliderEl = config.sliderEl || '.stop';
                requireCommand('playSlideshow');
                        // Creates trigger if only container is passed in
                if (!config.trigger) {
                    var playControl = jQuery('<div class="slideshow-control-play start">' + CN.slideshow.config.playBtn + '</div>');
                    jQuery(config.container).append(playControl);
                    config.trigger = playControl.get(0);
                }

                jQuery(config.trigger).click(function() {
                    commands.playSlideshowCommand.execute();
                    return false;
                });
            },

            /**
             * Sets up stop functionality.
             *
             * @method stopSlideshow
             * @private
             *
             * @param  config     {Object} Hash of config options; either container or trigger are required
             * @option container  {String} A jQuery selector indicating the container in which to create the trigger element, if no trigger element is specified
             * @option trigger    {String} A jQuery selector indicating which element(s) will execute the command
             */
            stopSlideshow : function(config) {
                requireCommand('stopSlideshow');
                        // Creates trigger if only container is passed in
                if (!config.trigger) {
                    var stopControl = jQuery('<div class="slideshow-control-stop stop">' + CN.slideshow.config.pauseBtn + '</div>');
                    jQuery(config.container).append(stopControl);
                    config.trigger = stopControl.get(0);
                }

                jQuery(config.trigger).click(function() {
                    commands.stopSlideshowCommand.execute();
                    return false;
                });
            },

            /**
             * Sets up a View All takeover navigation control
             *
             * @method viewAllNavigation
             * @private
             *
             * @param  config    {Object} Hash of config options
             * @option container {String} A jQuery selector indicating the container in which to create the control
             * @option trigger   {String} A jQuery selector indicating which element(s) will execute the command
             */
            viewAllNavigation : function(config) {
                var viewAll = null;

                requireCommand('jumpToSlide');
                requireCommand('stopSlideshow');

                CN.slideshow.view.buildNavigationItems.viewAllNavigation(slideshow, config.container ? jQuery(config.container) : slideshow.$el);

                slideshow.$el.addClass('slideshow-has-navigation-viewall');

                jQuery(config.trigger).click(function() {
                    commands.stopSlideshowCommand.execute();
                    if (slideshow.navigationItems.hasOwnProperty('navigationViewAll')) {
                        viewAll = slideshow.navigationItems.navigationViewAll;
                        if (viewAll.hidden === true) {
                            viewAll.show();
                        } else {
                            viewAll.hide();
                        }
                    }
                    return false;
                });

                slideshow.navigationItems.navigationViewAll.onHide.subscribe(function() {
                    jQuery(config.trigger).removeClass('slideshow-navigation-viewall-visible');
                });

                slideshow.navigationItems.navigationViewAll.onShow.subscribe(function() {
                    jQuery(config.trigger).addClass('slideshow-navigation-viewall-visible');
                });

                        // If the user changes to a different slide, hide view all.
                slideshow.onStateChange.subscribe(function() {
                    if (slideshow.navigationItems.hasOwnProperty('navigationViewAll')) {
                        slideshow.navigationItems.navigationViewAll.hide();
                    }
                });
            },

            /**
             * Sets up a Number navigation control
             *
             * @method numberNavigation
             * @private
             *
             * @param  config    {Object} Hash of config options
             * @option container {String} A jQuery selector indicating the container in which to create the control
             */
            numberNavigation : function(config) {
                requireCommand('jumpToSlide');
                CN.slideshow.view.buildNavigationItems.numberNavigation(slideshow, config.container ? jQuery(config.container) : slideshow.$el);
                slideshow.$el.addClass('slideshow-has-navigation-number');
            },

            /**
             * Sets up an Image List navigation control
             *
             * @method listNavigation
             * @private
             *
             * @param  config    {Object} Hash of config options
             * @option container {String} A jQuery selector indicating the container in which to create the control
             */
            listNavigation : function(config) {
                requireCommand('jumpToSlide');
                CN.slideshow.view.buildNavigationItems.listNavigation(slideshow, config.container ? jQuery(config.container) : slideshow.$el);
                slideshow.$el.addClass('slideshow-has-navigation-list');
            },

            /**
             * Sets up a numbered navigation with image popup on hover
             *
             * @method numberedHoverNavigation
             * @private
             *
             * @param  config    {Object} Hash of config options
             * @option container {String} A jQuery selector indicating the container in which to create the control
             */
            numberedHoverNavigation : function(config) {
                requireCommand('jumpToSlide');
                CN.slideshow.view.buildNavigationItems.numberedHoverNavigation(slideshow, config.container ? jQuery(config.container) : slideshow.$el);
                slideshow.$el.addClass('slideshow-has-navigation-numberedhover');
            },

            /**
             * Sets up an image navigation with image popup on hover
             *
             * @method imageHoverNavigation
             * @private
             *
             * @param  config    {Object} Hash of config options
             * @option container {String} A jQuery selector indicating the container in which to create the control
             */
            imageHoverNavigation : function(config) {
                requireCommand('jumpToSlide');
                CN.slideshow.view.buildNavigationItems.imageHoverNavigation(slideshow, config.container ? jQuery(config.container) : slideshow.$el);
                slideshow.$el.addClass('slideshow-has-navigation-imagehover');
            },

            /**
             * Sets up a Carousel navigation control
             *
             * @method carouselNavigation
             * @private
             *
             * @param  config    {Object} Hash of config options
             * @option container {String} A jQuery selector indicating the container in which to create the control
             */
            carouselNavigation : function(config) {
                requireCommand('jumpToSlide');
                CN.slideshow.view.buildNavigationItems.carouselNavigation(slideshow, config.container ? jQuery(config.container) : slideshow.$el);
                slideshow.$el.addClass('slideshow-has-navigation-carousel');
            },

            /**
             * Sets up an overlay navigation control
             *
             * @method overlayNavigation
             * @private
             *
             * @param  config    {Object} Hash of config options
             * @option container {String} A jQuery selector indicating the container in which to create the control
             */
            overlayNavigation : function(config) {
                requireCommand('jumpToSlide');
                CN.slideshow.view.buildNavigationItems.overlayNavigation(slideshow, config.container ? jQuery(config.container) : slideshow.$el);
                slideshow.$el.addClass('slideshow-has-navigation-overlay');
            },

            /**
             * Sets up a View Larger component
             *
             * @method viewLarger
             * @private
             *
             * @param  config     {Object} Hash of config options passed along to viewLarger create method
             * @option trigger    {String} A jQuery selector indicating which element(s) will execute the command
             * @option transition {String} Specifies which transition to use, defaults to 'standard'
             */
            viewLarger : function(config) {
                var oldCommands = commands;

                jQuery(config.trigger).click(function() {
                    if (CN.slideshow.plugin.viewLarger) {
                        CN.slideshow.plugin.viewLarger.create(slideshow, config, oldCommands);
                    }
                    return false;
                });
            }
        };

                // Sets up features by reflecting through config options
        for (i in config) { // yes, this 'i' is defined up at the top
            if (config.hasOwnProperty(i)) {
                try {
                    featureSetup[i](config[i]);
                } catch(e) {
                    CN.debug.warn('Feature setup: You tried to set up a slideshow feature "' + i + '". This feature may not exist, or the feature setup may have failed: ' + e.message);
                }
            }
        }


        /* Internal Observer Subscriptions */


                // Handles the interstitial timer and skip link event
        slideshow.onInterstitialShow.subscribe(function() {
            var timerControl;

            CN.slideshow.view.toggleNavigationItems(slideshow);
            slideshow.$el.addClass('slideshow-controls-disabled');
            jQuery('.slideshow-loading').show();

                    // Only wires up the timer if the interstitial was triggered by a user action
            if (slideshow.queuedAction.length > 0) {
                adTimer = setInterval(function() {
                    slideshow.$el.find('.slideshow-continue-countdown').html((--adCounter).toString());
                }, 1000);

                timerControl = jQuery('<div class="slideshow-continue">' + CN.slideshow.config.continueNote + '<span class="slideshow-continue-countdown">' + slideshow.showInterstitialTimer + '</span> seconds. <a class="slideshow-continue-link" href="#">' + CN.slideshow.config.continueLink + '</a></div>');
                slideshow.$el.find(slideshow.itemsSelector).append(timerControl);

                slideshow.$el.find('.slideshow-continue-link').click(function() {
                    commands.hideInterstitialCommand.execute();
                    return false;
                });

                slideshow.$el.find(slideshow.itemsSelector).prepend('<div class="slideshow-advertisement-note">' + CN.slideshow.config.adNote + '</div>');
            }
        });

                // Resets the timer, interstitial counter and skip link
        slideshow.onInterstitialHide.subscribe(function() {
            clearInterval(adTimer);
            adCounter = slideshow.showInterstitialTimer;
            CN.slideshow.view.toggleNavigationItems(slideshow);
            slideshow.$el.find('.slideshow-continue, .slideshow-advertisement-note').remove();
            slideshow.$el.removeClass('slideshow-controls-disabled');
            jQuery('.slideshow-loading').fadeOut('fast'); // paradoxically, '.slideshow-loading' contains the overlays for the slideshow controls
        });

                // Updates the count for the newly added slide
        slideshow.onSlideAppended.subscribe(function() {
            CN.slideshow.view.updateCount(slideshow);
            CN.slideshow.util.calculateInterstitialFrequency(slideshow);
        });

                // Changes the view when the slideshow state changes (interstitials or slides)
        slideshow.onStateChange.subscribe(function() {
            CN.slideshow.view.renderSlide(slideshow);
        });

                // Updates when slide change finishes (slides, not interstitials)
        slideshow.onSlideChangeComplete.subscribe(function() {
            CN.slideshow.view.updateNavigationItems(slideshow);
            CN.slideshow.view.updateCount(slideshow);
            CN.slideshow.view.updateTitle(slideshow);

                    // Stops the slideshow play when we are at the last slide.
            if (slideshow.isAlreadyPlaying() && slideshow.currentSlideIndex === slideshow.slides.length - 1) {
                commands.stopSlideshowCommand.execute();
            }
        });

                // Fires after the initial slides are added to the show and it's ready to go (at the end of the dataReady() call)
        slideshow.onSlideshowReady.subscribe(function() {
            var i,
                li,
                pos;

                    // Wires up click event delegation for all navigation items
            for (i in slideshow.navigationItems) {
                if (slideshow.navigationItems.hasOwnProperty(i)) {
                    slideshow.navigationItems[i].list.click(function(e) {
                        li = jQuery(e.target).parents('li')[0];
                        pos = jQuery(li).prevAll().length;
                        commands.jumpToSlideCommand.execute(pos + 1);
                        return false;
                    });
                }
            }
                    // Adds stop of slideshow if non-slide items are interacted with by the user. A bit heavy-handed, but it works.
            slideshow.$el.find(slideshow.itemsSelector).click(function() {
                if (slideshow.isAlreadyPlaying() && slideshow.slide.getLabel() !== 'slide') {
                    commands.stopSlideshowCommand.execute();
                }
            });
            CN.slideshow.view.updateTitle(slideshow);
        });

        // TODO: refactor and rethink this code organization. what should be generic? how central to the slideshow should an intro concept be?
        // how should that intro be identified?

        if (slideshow.useHistory) {
            requireCommand('jumpToSlide');

                    // Updates the slideshow when the history changes
            jQuery(window).bind('history', {
                    useIntro : slideshow.useIntro,
                    commands : commands
                }, CN.slideshow.util.bindHistory);

                    // Makes sure the fragment is always set and is the correct number
            slideshow.onSlideshowReady.subscribe(function() {
                if ((CN.page.config.hasIntro === false && CN.url.getFragment() === false) || (CN.url.getFragment() === false && CN.url.params().slide)) {
                    jQuery.history.add('slide=' + (slideshow.currentSlideIndex + 1));
                }
                if (CN.page.config.hasIntro === true && CN.url.getFragment() === false) {
                    jQuery.history.add('intro');
                }
            });

                    // Changes the history entry when the slide finishes changing
                    // This has to happen before DART refreshing, which is in onSlideChangeComplete
            slideshow.onForwardComplete.subscribe(function() {
                jQuery.history.add('slide=' + (slideshow.currentSlideIndex + 1));
            });
            slideshow.onBackwardComplete.subscribe(function() {
                jQuery.history.add('slide=' + (slideshow.currentSlideIndex + 1));
            });
            slideshow.onJumpToSlideComplete.subscribe(function() {
                jQuery.history.add('slide=' + (slideshow.currentSlideIndex + 1));
            });
        }

                // Hides intro if we have one and have not landed on it // TODO: breaks if intro page, history off but fragment slide is in URL
        slideshow.onSlideshowReady.subscribe(function() {
            if (CN.page.config.hasIntro === true && slideshow.useIntro === true && ((CN.url.getFragment() !== false && CN.url.getFragment() !== 'intro') || CN.url.params().slide)) {
                CN.slideshow.view.toggleIntro(false);
            }
            CN.slideshow.view.updateNavigationItems(slideshow); // TODO: this is only here for the carousel
        });

                // If there is an intro and the page load landed on it (rather than a #slide url)
        if (CN.page.config.hasIntro === true && jQuery('.list-backto').length < 1) {
            jQuery('<div class="list-backto">' + CN.slideshow.config.backToIntroBtn + '<div>').click(function() {
                CN.slideshow.view.toggleIntro(true);
                if (slideshow.useHistory) {
                    jQuery.history.add('intro');
                }
            }).prependTo('#items-container').hide();

                    // Add view slideshow links to beginning and end of intro-text
                    // Added ids to identify each individually
            jQuery('<a href="#" class="list-view-slideshow" id="list-view-slideshow-start">' + CN.slideshow.config.viewSlideshowBtn + '</a>').prependTo('.intro-text');
            jQuery('<a href="#" class="list-view-slideshow" id="list-view-slideshow-end">' + CN.slideshow.config.viewSlideshowBtn + '</a>').appendTo('.intro-text');

            jQuery('.list-view-slideshow').click(function() {
                CN.slideshow.view.toggleIntro(false);
                if (slideshow.useHistory) {
                    jQuery.history.add('slide=' + (slideshow.currentSlideIndex + 1));
                }
                return false;
            });
        }

                // Jumps after wait indicator if we are starting from a slide other than #1 or intro
        if (slideshow.useHistory && jQuery('html').hasClass('slideshow-showinitial-false')) {
            slideshow.onSlideshowReady.subscribe(function() {
                if (CN.url.getFragment() !== 'intro') {
                            // Remove old item first, because transitions might set it to display: block and then it will flash on the screen
                    slideshow.$el.find(slideshow.itemSelector).remove();
                    commands.jumpToSlideCommand.execute(CN.url.getFragment().split('=')[1] || 0);
                }
            });
        }

        return commands;
    };

    return {
        init : init
    };

}());


/**
 * View helpers for transitions, special effects, rendering of
 * slides, and navigation management.
 *
 * @namespace   CN.slideshow
 * @class       view
 * @public
 * @author      Eric Shepherd
 */
CN.slideshow.view = (function() {
    var transitions,
        removeSlide,
        showSlider,
        hideSlider,
        sliderVisible          = false,
        hidePlayButton,
        hideStopButton,
        buildNavigationItems,
        updateNavigationItems,
        toggleNavigationItems,
        updateCount,
        renderSlide,
        toggleIntro,
        updateTitle;

    /**
     * A collection of transitions that slideshows can use.
     * Assumes standard DD+S item markup.
     * Calls a custom removeSlide() function to remove rather than using jQuery
     * directly, because we don't actually destroy elements that came from the DOM.
     * Each transition adds the appropriate class name for the type of ISlide.
     * This class name is mandatory, so be sure to include if you write your own
     * transition.
     *
     * Be sure than adding the new slide happens immediately, even if it has to be
     * hidden. If the new slide is not added right away, other dependent
     * calculations will fail. The element needs to have a layout size immediately.
     *
     * @property transitions
     * @option   standard    switches slides without animation
     * @option   fade        first slide fades out, then next slide fades in
     * @option   crossfade   first slide fades out, revealing next slide underneath
     * @option   drop        first slide drops off left and fades out, revealing next slide underneath
     * @option   slide       first slide slides left, revealing next slide underneath
     * @option   slidefade   first slide slides left, next slide fades in underneath
     * @option   photoflash  first slide hides, flash of white background and next slide fades in slowly
     */
    transitions = {

        standard : function(html, slideshow) {
            var el      = slideshow.$el,
                oldItem = el.find(slideshow.itemsSelector).children(),
                newItem = jQuery(html).addClass('slideshow-' + slideshow.slide.getLabel());

            removeSlide(oldItem);
            el.find(slideshow.itemsSelector).append(newItem);
            newItem.css('display', 'block'); // Fixes the last slide visibility after ad, because jquery doesn't set during transition
        },

        fade : function(html, slideshow) {
            var el      = slideshow.$el,
                oldItem = el.find(slideshow.itemsSelector).children(':not(script)'), // Have to set display:block below which shows script contents, so we need to exclude script here.
                newItem = jQuery(html).addClass('slideshow-' + slideshow.slide.getLabel());

            oldItem.css('display', 'block'); // this is necessary for animation to run correctly
            el.find(slideshow.itemsSelector).prepend(newItem);
            newItem.show().css('visibility', 'hidden');

            oldItem.fadeOut(300, function() {
                removeSlide(jQuery(this));
                newItem.css('visibility', 'visible').hide().fadeIn(400);
            });
        },

        crossfade : function(html, slideshow) {
            var el      = slideshow.$el,
                oldItem = el.find(slideshow.itemsSelector).children(),
                newItem = jQuery(html).addClass('slideshow-' + slideshow.slide.getLabel());

            el.find(slideshow.itemsSelector).prepend(newItem);
            oldItem.css('display', 'none');
            newItem.fadeIn('slow');
            removeSlide(oldItem);
        },

        drop : function(html, slideshow) {
            var el      = slideshow.$el,
                oldItem = el.find(slideshow.itemsSelector).children(),
                newItem = jQuery(html).addClass('slideshow-' + slideshow.slide.getLabel());

            el.find(slideshow.itemsSelector).prepend(newItem);
            newItem.css('display', 'block');
            oldItem.toggle('drop', {
                direction: 'left'
            }, 800, function() {
                removeSlide(jQuery(this));
            });
        },

        slide : function(html, slideshow) {
            var el      = slideshow.$el,
                oldItem = el.find(slideshow.itemsSelector).children(),
                newItem = jQuery(html).addClass('slideshow-' + slideshow.slide.getLabel());

            el.find(slideshow.itemsSelector).prepend(newItem);
            newItem.css('display', 'block');
            oldItem.toggle('slide', {
                direction : 'left'
            }, 1100, function() {
                removeSlide(jQuery(this));
            });
        },

        slidefade : function(html, slideshow) {
            var el      = slideshow.$el,
                oldItem = el.find(slideshow.itemsSelector).children(),
                newItem = jQuery(html).hide().addClass('slideshow-' + slideshow.slide.getLabel());

            el.find(slideshow.itemsSelector).prepend(newItem);
            newItem.hide().fadeIn('slow');
            oldItem.toggle('slide', {
                direction: 'left'
            }, 400, function() {
                removeSlide(jQuery(this));
            });
        },

        photoflash : function(html, slideshow) {
            var el      = slideshow.$el,
                oldItem = el.find('.slideshow-items').children(),
                newItem = jQuery(html).hide().addClass('slideshow-' + slideshow.slide.getLabel());

            removeSlide(oldItem);
            el.find(slideshow.itemsSelector).css('backgroundColor', '#fff').prepend(newItem);
            newItem.show().css('visibility', 'hidden');
            setTimeout(function() {
                newItem.css('visibility', 'visible').hide().fadeIn(1110);
            }, 150);
        }
    };

    /**
     * Removes a slide by deleting or relocating it.
     * This is necessary because if the slide came from the DOM originally, we
     * can't delete it. We have to return it to the DOM to be used again.
     *
     * @method  removeSlide
     * @static
     * @private
     */
    removeSlide = function(item) {
        if (item.hasClass('slideshow-domslide')) {
            jQuery('body').append(item);
            item.removeAttr('style'); // updated to fix issue with ie8
        } else {
            item.remove();
        }
    };

    /**
     * View helper which shows the Play slider
     *
     * @method showSlider
     * @param  slideshow  {Slides}   The slideshow that the slider is a part of
     * @param  config     {Object}   The configuration for that slideshow
     * @prarm  callback   {Function} Optional function to execute after the showing is complete
     *
     * Notes:
     * Calling moveTo on all sliders causes infinite recursion on the slider
     * change event, so there is a flag which is reset with each change
     * event that prevents this looping and allows the sliders to affect
     * each other. // TODO: see if this bug was fixed in jQuery UI 1.7
     */
    showSlider = function(slideshow, config, callback) {
        var sliderContainer,
            slider,
            el = slideshow.$el,
            sliderEl = config.sliderEl || config.trigger,
            adjustAllSliders,
            minTime,
            maxTime,
                    // Hack flags to work around slider recursion bug
            called = false,
            resetCalled;

        adjustAllSliders = function(value) {
            for (var i = 0; i < slider.length; i++) {
                jQuery(slider[i]).slider('value', value); // Due to jQuery UI bug, this causes recursion on the slider 'change' function.
            }
        };

        resetCalled = function() {
            called = false;
        };

        if (el.find('.slideshow-play-slider-container').length > 0) {
            el.find('.slideshow-play-slider-container').show('blind', { direction: 'horizontal' }, 500, function() {
                if (typeof callback === 'function') {
                    callback();
                }
            });
        } else {
            sliderContainer = jQuery('<div class="slideshow-play-slider-container"><div class="slideshow-play-time"><span>' + slideshow.playTimer + '</span> seconds</div><div class="slideshow-play-slider"></div></div>');
            jQuery(sliderEl).after(sliderContainer);
            el.find('.slideshow-play-slider-container').hide().show('blind', { direction: 'horizontal' }, 500, function() {
                if (typeof callback === 'function') {
                    callback();
                }
            });

                    // jQuery UI slider setup - jump interval changes at 12 seconds to jump by 2 instead of 1
            if (slideshow.playTimer > 12) {
                minTime = parseInt(slideshow.playTimer, 10) - 6;
                maxTime = parseInt(slideshow.playTimer, 10) + 6;
            } else {
                minTime = slideshow.playTimer > 3 ? parseInt(slideshow.playTimer, 10) - 3 : 1;
                maxTime = parseInt(slideshow.playTimer, 10) + 3;
            }

            slider = el.find('.slideshow-play-slider').slider({
                min      : minTime,
                max      : maxTime,
                value    : parseInt(slideshow.playTimer, 10),
                step     : (slideshow.playTimer > 12) ? 2 : 1,
                change  : function(e, ui) {
                    if (called === false) {
                        called = true;
                        var newTime = parseInt(ui.value, 10);
                        if (slideshow.isAlreadyPlaying()) {
                            slideshow.timer.getSetInterval(newTime * 1000);
                            slideshow.playTimer = newTime;
                            el.find('.slideshow-play-time span').html(newTime.toString());
                            adjustAllSliders(newTime);
                        }
                        resetCalled();
                    }
                },
                slide : function(e, ui) {
                    el.find('.slideshow-play-time span').html(parseInt(ui.value, 10).toString());
                }
            });

            slideshow.onInterstitialShow.subscribe(function() {
                slider.slider('disable');
            });

            slideshow.onInterstitialHide.subscribe(function() {
                slider.slider('enable');
            });
        }
        sliderVisible = true;
    };

    /**
     * View helper which hides the Play slider
     *
     * @method hideSlider
     * @param  slideshow  {Slides}   The slideshow that the slider is a part of
     * @param  callback   {Function} Optional function to execute after the hiding is complete
     */
    hideSlider = function(slideshow, callback) {
        var sliderContainer = slideshow.$el.find('.slideshow-play-slider-container');
        if (sliderVisible === true) {
            sliderContainer.hide('blind', { direction: 'horizontal' }, 500, function() {
                if (typeof callback === 'function') {
                    callback();
                }
            });
            sliderVisible = false;
        }
    };

    /**
     * Hides the play button and shows the stop button when slideshow begins playing
     *
     * @method hidePlayButton
     * @param  slideshow {Slides} A slideshow object
     */
    hidePlayButton = function(slideshow) {
        slideshow.$el.find('.start').css('display', 'none');
        slideshow.$el.find('.stop').css('display', 'block');
    };

    /**
     * Hides the stop button and shows the play button when slideshow stops playing
     *
     * @method hideStopButton
     * @param  slideshow {Slides} A slideshow object
     */
    hideStopButton = function(slideshow) {
        slideshow.$el.find('.stop').css('display', 'none');
        slideshow.$el.find('.start').css('display', 'block');
    };

    /**
     * Builds functionality to create all available navigation objects
     * These are NOT constructors; they are functions that build objects through prototypal inheritance.
     *
     * @property buildNavigationItems
     */
    buildNavigationItems = {

        /**
         * Builds a navigation object
         *
         * @method buildNavigationItems.create
         * @for    buildNavigationItems
         * @param  slideshow  {Slides} A slideshow for which to build the navigation object
         * @param  container  {Object} A jQuery element where to place the navigation object
         * @param  navName    {String} The name of the navigation object, will be used to build the object name and the storage name within the slideshow array
         * @param  elToCreate {String} The jQuery node creation text ('<ul class="nav">' for example)
         */
        create : function(slideshow, $container, navName, elToCreate) {
            var navigation,
                navType     = 'slideshowNavigation' + navName,
                navStorage  = 'navigation' + navName;

            try {
                navigation = Object.make(CN.slideshow[navType]);
                navigation.thumbnails = []; // Have to define, else it will use prototype's!
                navigation.currentSelection = slideshow.currentSlideIndex; // Have to define, else it will use prototype's!
                navigation.render(jQuery(elToCreate), $container);
                navigation.init();
                slideshow.navigationItems[navStorage] = navigation; // Stores in slideshow, after we are sure it exists and works.
            } catch(e) {
                CN.debug.warn('Tried to create navigation object "' + navName + '" but failed; probably the navigation object does not exist or you spelled the name incorrectly: ' + e.message);
            }
        },

                // A list of numbered links
        numberNavigation : function(slideshow, $container) {
            this.create(slideshow, $container, 'Numbers', '<ul class="slideshow-navigation-numbers">');
        },

                // A basic image list of available slides
        listNavigation : function(slideshow, $container) {
            this.create(slideshow, $container, 'List', '<ol class="slideshow-navigation-list">');
        },

                // A numbered list with image popup on hover
        numberedHoverNavigation : function(slideshow, $container) {
            this.create(slideshow, $container, 'NumberedHover', '<ul class="slideshow-navigation-numbered-hover">');
        },

                // An image list with image popup on hover
        imageHoverNavigation : function(slideshow, $container) {
            this.create(slideshow, $container, 'ImageHover', '<ul class="slideshow-navigation-image-hover">');
        },

                // A carousel, requires the jCarousel plugin
        carouselNavigation : function(slideshow, $container) {
            this.create(slideshow, $container, 'Carousel', '<ul class="slideshow-navigation-carousel">');
        },

        overlayNavigation : function(slideshow, $container) {
            this.create(slideshow, $container, 'Overlay', '<ul class="slideshow-navigation-overlay">');
        },

                // An image-based list to view all slides, with a scrollbar
        viewAllNavigation : function(slideshow, $container) {
            this.create(slideshow, $container, 'ViewAll', '<ol class="slideshow-navigation-viewall">');
        }
    };

    /**
     * Updates the navigation items to the currently selected slide
     *
     * @method updateNavigationItems
     * @for    view
     * @param  slideshow {Slides} A slideshow object
     */
    updateNavigationItems = function(slideshow) {
        var i;

        for (i in slideshow.navigationItems) {
            if (slideshow.navigationItems.hasOwnProperty(i)) {
                slideshow.navigationItems[i].updateDisplay(slideshow);
            }
        }
    };

    /**
     * Toggles the disabled class of the navigation items
     *
     * @method toggleNavigationItems
     * @param  slideshow {Slides} A slideshow object
     */
    toggleNavigationItems = function(slideshow) {
        var i;

        // TODO: refactor to include lock/unlock methods on ALL nav items, and then just call them. Rather than carousel exception here.

        for (i in slideshow.navigationItems) {
            if (slideshow.navigationItems.hasOwnProperty(i)) {
                if (slideshow.navigationItems[i].carousel) {
                    if (slideshow.navigationItems[i].carousel.locked) {
                        slideshow.navigationItems[i].carousel.unlock();
                        slideshow.navigationItems[i].updateDisplay(slideshow); // TODO: technically this gets called twice, but it works for now
                    } else {
                        slideshow.navigationItems[i].carousel.lock();
                    }
                }
                jQuery(slideshow.navigationItems[i].list).toggleClass('disabled');
            }
        }
    };

    /**
     * Updates the slide counter display. Assumes class="count" markup.
     *
     * @method updateCount
     * @param  slideshow {Slides} A slideshow object
     */
    updateCount = function(slideshow) {
        slideshow.$el.find('.count').html((slideshow.currentSlideIndex + 1) + slideshow.countSeparator + slideshow.slides.length);
    };

    /**
     * Updates slide's title. If slide has no title tries to get it from list.
     *
     * @method updateTitle
     * @param  slideshow {Slides} A slideshow object
     */
    updateTitle = function(slideshow){
        if (slideshow.slides[slideshow.currentSlideIndex] && !CN.isEmpty(CN.page.config.sectionsStr)){
            var newTitle = slideshow.slides[slideshow.currentSlideIndex].title || jQuery('meta[name=list-title]').attr('content') || '';
            jQuery('meta[name=og:title]').attr('content', newTitle);
            newTitle = !CN.isEmpty(newTitle) ? newTitle + ': ' : '';
            document.title = newTitle + CN.page.config.sectionsStr +': ' + (CN.site.titleRef || CN.site.name);
        }
    };

    /**
     * Renders a new slide, removing the old one from the dom
     *
     * @method renderSlide
     * @param  slideshow {Slides} A slideshow object
     */
    renderSlide = function(slideshow) {
        var transition = slideshow.showingInterstitial === true ? 'standard' : slideshow.transition.toLowerCase();
        try {
            if (transitions.hasOwnProperty(transition)) {
                transitions[transition](slideshow.slide.getHtml(), slideshow);
            } else {
                transitions.standard(slideshow.slide.getHtml(), slideshow);
                CN.debug.warn('Attempted to use transition "' + transition + '" that does not exist, defaulted to standard transition.');
            }
        } catch(e) {
            CN.debug.error('CN.slideshow.view.renderSlide(): Attempted to change slides, but slide requested is invalid or does not exist: ' + e.message);
        }
    };

    /**
     * Toggles the intro "page" into an on or off state
     * @method toggleIntro
     * @param {Boolean} state Toggles the intro visible or not
     */
    toggleIntro = function(state) {
        if (state === true) {
            jQuery('#items-container, .cr-item').css({ 'position' : 'absolute', 'left' : '-9999px' });
            jQuery('.intro-container').css({'position' : 'relative', 'left' : '0' }).show();
            jQuery('.list-view-slideshow').show();
            jQuery('.list-backto').hide();
            try {
                CN.page.config.slideshowIntroShowCallback();
            } catch(e) {
                CN.debug.info('Attempted callback, perhaps no function exists at CN.page.config.slideshowIntroShowCallback : ' + e.message);
            }
        } else {
            jQuery('#items-container, .cr-item').css({ 'position' : 'relative', 'left' : '0' });
            jQuery('.intro-container, .list-view-slideshow').hide();
            jQuery('.list-backto').show();
            var amountToScroll = jQuery('html,body').scrollTop() - jQuery('#items-container').offset().top;
            if (amountToScroll > 0) {
                jQuery('html,body').animate({ scrollTop: jQuery('html,body').scrollTop() - amountToScroll }, 500);
            }
            try {
                CN.page.config.slideshowIntroHideCallback();
            } catch(e) {
                CN.debug.info('Attempted callback, perhaps no function exists at CN.page.config.slideshowIntroHideCallback : ' + e.message);
            }
        }
    };

    return {
        transitions           : transitions,
        removeSlide           : removeSlide,
        showSlider            : showSlider,
        hideSlider            : hideSlider,
        hidePlayButton        : hidePlayButton,
        hideStopButton        : hideStopButton,
        buildNavigationItems  : buildNavigationItems,
        updateNavigationItems : updateNavigationItems,
        toggleNavigationItems : toggleNavigationItems,
        updateCount           : updateCount,
        renderSlide           : renderSlide,
        toggleIntro           : toggleIntro,
        updateTitle           : updateTitle
    };
}());


/**
 * Model of an individual slideshow. The constructor creates the slideshow;
 * you are responsible for populating it with data and creating a view.
 * The actions update the state of the slideshow; a view can listen to
 * observers and update the page accordingly.
 * NOTE: There is some view-related storage happening here. It will eventually
 * need to be extracted, but the view is currently passive and will have to
 * become instantiable for that to happen. C'est la view.
 *
 * @namespace   CN.slideshow
 * @class       Slides
 * @constructor
 * @author      Eric Shepherd
 * @param       el            {String|Node} A string or DOM node which contains the slideshow
 * @param       config        {Object}      A hash of config options (playTimer, showInterstitialTimer, transition, useHistory, useIntro, interstitialFrequency)
 */
CN.slideshow.Slides = function(el, config) {
    config = config || {};

    /**
     * The name of the image type for thumbnails
     * @static
     */
    this.thumbnailType = config.thumbnailType || 'thumbnail';

    /**
     * The name of the image type for the main slideshow photo
     * @static
     */
    this.imageType = config.imageType || 'main';

    /**
     * The slide index to start counting from
     * @static
     * @private
     */
    this.currentSlideIndex = (config.useHistory) ?
        CN.slideshow.util.getSlideFromUrl() - 1 :
        (CN.url.params().slide ? CN.url.params().slide - 1 : 0);

    /**
     * Stores the Slide objects in the slideshow
     * @static
     * @private
     */
    this.slides = [];

    /**
     * The currently active ISlide instance
     * @static
     * @private
     */
    this.slide = null;

    /**
     * Stores the next action if we are showing an interstitial
     * @static
     * @private
     */
    this.queuedAction = [];

    /**
     * Is the currently active ISlide an interstitial ad?
     * @static
     * @private
     */
    this.showingInterstitial = false;

    /**
     * DOM node that slideshow is housed within
     * @static
     * @private
     */
    this.$el = jQuery(el);

    /**
     * Class name suffix for DOM items container
     * @static
     * @private
     */
    this.itemsSelector = config.itemsClassSuffix ? '.slideshow-' + config.itemsClassSuffix : '.slideshow-items';

    /**
     * Class name suffix for DOM item container
     * @static
     * @private
     */
    this.itemSelector = config.itemClassSuffix ? '.slideshow-' + config.itemClassSuffix : '.slideshow-item';

    /**
     * The slideshow's data object
     * @static
     * @private
     */
    this.data = null;

    /**
     * The time in seconds to play each slide
     * @static
     */
    this.playTimer = config.playTimer || 5;

    /**
     * The time in seconds to show each interstitial
     * @static
     */
    this.showInterstitialTimer = config.showInterstitialTimer || 5;

    /**
     * The CN.slideshow.view.transitions name to use for this slideshow
     * @static
     */
    this.transition = config.transition || 'standard';

    /**
     * Stores the numbers of the slides which have images preloaded
     * @static
     */
    this.preloadedSlides = [];

    /**
     * Specifies whether to wire up history events
     * @static
     */
    this.useHistory = config.useHistory || false;

    /**
     * Indicates whether the slideshow should deal with an intro page or not
     * @static
     * @private
     */
    this.useIntro = config.useIntro || false;

    /**
     * Indicates whether the slideshow should have interstitial ads or not
     * @static
     * @private
     */
    this.useInterstitial = config.useInterstitial || true;

    /**
     * The default separator for the count number
     * @static
     * @private
     */
    this.countSeparator = config.countSeparator || ' / ';

            // Observers
    this.onStateChange         = new CN.Observer();
    this.onSlideChangeComplete = new CN.Observer();
    this.onBackwardComplete    = new CN.Observer();
    this.onForwardComplete     = new CN.Observer();
    this.onJumpToSlideComplete = new CN.Observer();
    this.onInterstitialShow    = new CN.Observer();
    this.onInterstitialHide    = new CN.Observer();
    this.onSlideAppended       = new CN.Observer();
    this.onSlideshowReady      = new CN.Observer('onSlideshowReady');

    /**
     * The interstitial manager being used for this slideshow
     * @static
     * @private
     */
     this.interstitialManager = new CN.slideshow.InterstitialManager({ frequency : config.interstitialFrequency, useInterstitial : config.useInterstitial });

    /**
     * The navigation items associated with this slideshow
     * @static
     */
    this.navigationItems = {};
};

CN.slideshow.Slides.prototype = {

    /**
     * Changes the state of the slideshow to the next slide
     *
     * @method  goForwardAction
     * @private
     */
    goForwardAction : function() {
        var slide = null;

                // Rolls over if we are at the end, otherwise gets next slide
        if (this.currentSlideIndex >= (this.slides.length - 1)) {
            this.currentSlideIndex = 0;
            slide = this.slides[0];
        } else {
            slide = this.slides[(++this.currentSlideIndex)];
        }

                // Resets timer if it was running
        if (this.isAlreadyPlaying()) {
            this.timer.restart();
        }

                // Sets the new slide
        this.slide = slide;

                // Fires observeable events
        this.onStateChange.fire();
        this.onForwardComplete.fire();
        this.onSlideChangeComplete.fire();
    },

    /**
     * Changes the state of the slideshow to the previous slide
     *
     * @method  goBackwardAction
     * @private
     */
    goBackwardAction : function() {
        var slide = null;

                // Rolls over if we are at the beginning, otherwise gets previous slide
        if (this.currentSlideIndex <= 0) {
            this.currentSlideIndex = (this.slides.length - 1);
            slide = this.slides[this.currentSlideIndex];
        } else {
            slide = this.slides[--this.currentSlideIndex];
        }

                // Resets timer if it was running
        if (this.isAlreadyPlaying()) {
            this.timer.restart();
        }

                // Sets the new slide
        this.slide = slide;

                // Fires observable events
        this.onStateChange.fire();
        this.onBackwardComplete.fire();
        this.onSlideChangeComplete.fire();
    },

    /**
     * Changes the state of the slideshow to the specified index
     *
     * @method  jumpToSlideAction
     * @private
     */
    jumpToSlideAction : function(number) {
        var slide = null;

                // Gets the slide to jump to
        number = (number <= 0 || number >= this.slides.length + 1) ? 1 : number;
        this.currentSlideIndex = number - 1;
        slide = this.slides[this.currentSlideIndex];

                // Resets timer if it was running
        if (this.isAlreadyPlaying()) {
            this.timer.restart();
        }

                // Sets the new slide
        this.slide = slide;

                // Fires observable events
        this.onStateChange.fire();
        this.onJumpToSlideComplete.fire();
        this.onSlideChangeComplete.fire();
    },

    /**
     * Changes the state of the slideshow to an interstitial slide
     *
     * @method  showInterstitialAction
     * @private
     */
    showInterstitialAction : function(slide) {

                // Pauses the play timer, if there is one
        if (this.isAlreadyPlaying()) {
            this.timer.stoppedForAd = true;
            this.timer.stop();
        }

                // Sets the new slide
        this.slide = slide;

                // Cleans up
        this.showingInterstitial = true;

                // Fires observable events - onSlideChangeComplete is not fired for interstitials
        this.onStateChange.fire();
        this.onInterstitialShow.fire();
    },

    /**
     * Changes the state of the slideshow to the slide following the interstitial slide
     *
     * @method  hideInterstitialAction
     * @private
     */
    hideInterstitialAction : function() {
        var that = this;

        this.showingInterstitial = false;

                // Starts the timer, if there is one
        if (this.timer && this.timer.stoppedForAd) {
            this.timer.stoppedForAd = false;
            this.timer.start();
        }

                // Fires the action that the user selected before the interstitial was shown
        if (that.queuedAction[0]) {
            that.queuedAction[0].apply(that, [that.queuedAction[1]]);
            that.queuedAction = [];
        } else {
            that.jumpToSlideAction(that.currentSlideIndex + 1);
        }

                // Cleans up
        if (that.interstitialManager.timer) {
            clearTimeout(that.interstitialManager.timer);
        }

                // Fires observable events - no state change
        this.onInterstitialHide.fire();
    },

    /**
     * Adds the specified slide into the slideshow, at the end of the array
     *
     * @method append
     * @param  slide {ISlide} A slide implementing CN.slideshow.ISlide to be inserted into the slideshow
     */
    append : function(slide) {
        var pos;

        CN.Interface.ensureImplements(slide, CN.slideshow.ISlide);
        this.slides.push(slide);
        pos = this.slides.length - 1;

        this.addSlideToNavigations(slide, pos);
        this.onSlideAppended.fire(pos);
    },

    /**
     * Adds navigation thumbnails for a slide to all navigation items
     * TODO: This should perhaps be moved out of the Slides and into
     * either view or util.
     * Calls the appendThumbnail method of each of the slideshow's
     * navigation objects.
     *
     * @method addSlideToNavigations
     * @param  slide {ISlide} A slide implementing CN.slideshow.ISlide
     * @param  pos   {Number} The position at which to insert the thumbnail
     */
    addSlideToNavigations : function(slide, pos) {
        var i,
            dct,
            thumbnail;

        for (i in this.navigationItems) { // 'navigationNumbers' for example
            if (this.navigationItems.hasOwnProperty(i)) {
                if (slide.getThumbnail()) { // Should return null for old schemas
                    thumbnail = slide.getThumbnail();
                } else {
                    try {
                        dct = CN.schemaParser.getInstance().parse(this.data[pos].item).photo; // for backward compatibility, requires photo in schema
                        thumbnail = (typeof dct[this.thumbnailType] === 'function') ? dct[this.thumbnailType]() : '/images/default-thumbnail.gif';
                    } catch(e) {
                        CN.debug.info('Tried to load thumbnail from the schema but failed; if using schema other than photo you must provide a thumbnail image when building your slides: ' + e.message);
                    }
                }
                this.navigationItems[i].appendThumbnail(thumbnail, pos);
            }
        }
    },

    /**
     * Sets the slideshow's data source to the object specified
     *
     * @method setData
     * @param  value {Object} JSON data to use for this slideshow
     */
    setData : function(value) {
        this.data = value;
    },

    /**
     * Is the slideshow currently in play mode (does it have a timer,
     * and is that timer running?)
     *
     * @method isAlreadyPlaying
     * @return {Boolean} Whether or not the slideshow is playing
     */
    isAlreadyPlaying : function() {
        return this.timer && this.timer.timer || false;
    },

    /**
     * Makes model changes necessary after data is determined by the controller to be ready
     * The controller calls this method at the request of the implementation code
     * but at least it has the model change its own state and fire its own observers
     *
     * @method postDataSetup
     */
    postDataSetup : function() {
        this.currentSlideIndex = this.currentSlideIndex >= this.slides.length + 1 ? 0 : this.currentSlideIndex;
        this.slide = this.slides[this.currentSlideIndex];
        this.onSlideshowReady.fire();
    }
};


/*
 * Model interface implemented by all slides. getHtml() must return either a
 * string of HTML or an ID referencing a currently available DOM element.
 * getLabel() must return a unique label for the current ISlide implementation.
 * @interface ISlide
 */
CN.slideshow.ISlide = new CN.Interface('ISlide', ['getHtml', 'getLabel']);


/**
 * An individual normal slide, based on MPP standard JSON response from
 * Teamsite Item DCT. Only works with Item, use LightSlide and add HTML manually
 * for other DCT types.
 *
 * @namespace   CN.slideshow
 * @class       Slide
 * @constructor
 * @implements  CN.slideshow.ISlide
 * @implements  CN.IDoc
 * @author      Eric Shepherd
 * @param       data      {Object} JSON data to populate a slide with
 * @param       template  {String} The template to use to render this slide's HTML
 */
CN.slideshow.Slide = function(data, template) { // Implements ISlide and CN.IDoc
    template       = template || 'item';
    this.id        = data.item.metaData.id;
    this.html      = CN.schemaParser.getInstance().parse(data.item).renderedHtml(template);
    this.ratings   = data.item.reactions && data.item.reactions.ratings && data.item.reactions.ratings === 'Yes' ? true : false;
    this.comments  = data.item.reactions && data.item.reactions.comments && data.item.reactions.comments === 'Yes' ? true : false;
    this.title     = data.item.metaData.pageTitle || data.item.search.title || '';
    this.keywords  = data.item.search.keywords || '';
    this.label     = 'slide'; // Using label property because only Mozilla supports constructor.name
    this.thumbnail = null;
};

CN.slideshow.Slide.prototype = {

    /**
     * Gets the HTML for the slide
     *
     * @method getHtml
     * @static
     * @return {String} An HTML string for DOM insertion
     */
    getHtml : function() {
        return this.html;
    },

    /**
     * Gets the label for the slide type
     *
     * @method getLabel
     * @static
     * @return {String} The slide type's label, since constructor.name is not supported by IE.
     */
    getLabel : function() {
        return this.label;
    },

    /**
     * Gets the thumbnail for this slide
     *
     * @method getThumbnail
     * @static
     * @return {String} The path to this slide's thumbnail image
     */
    getThumbnail : function() {
        return this.thumbnail; // Returns null for old photo schema
    },

    /**
     * Sets the thumbnail for this slide
     *
     * @method setThumbnail
     * @static
     * @return {Object} This slide
     */
    setThumbnail : function(value) {
        this.thumbnail = value;
        return this;
    },

    /**
     * Gets the text string id for this slide
     *
     * @method getId
     * @static
     * @return {String} An integer id for this slide
     */
    getId : function() {
        return this.id;
    },

    /**
     * Determines whether this slide has Pluck ratings
     *
     * @method hasRatings
     * @static
     * @return {Boolean} True if slide has ratings
     */
    hasRatings : function() {
        return this.ratings;
    },

    /**
     * Determines whether this slide has Pluck comments
     *
     * @method hasComments
     * @static
     * @return {Boolean} True if slide has comments
     */
    hasComments : function() {
        return this.comments;
    },

    /**
     * Only here for IDoc interface implementation
     * @method getTitle
     * @static
     * @return {String} The title of the document
    */
    getTitle : function() {
        return this.title;
    },

    /**
     * Only here for IDoc interface implementation
     * @method getKeywords
     * @static
     * @return {String} The keywords for the document
    */
    getKeywords : function() {
        return this.keywords;
    },

    /**
     * Only here for IDoc interface implementation
     * @method getDocType
     * @static
     * @return {String} The DCT type for the document
    */
    getDocType : function() {
        return '';
    }
};


/**
 * An interstitial "slide"
 *
 * @namespace   CN.slideshow
 * @class       Interstitial
 * @constructor
 * @author      Eric Shepherd
 * @implements  CN.slideshow.ISlide
 */
CN.slideshow.Interstitial = function() { // Implements ISlide
    this.html  = '';
    this.label = 'interstitial';             // Using label property because only Mozilla supports constructor.name
};

CN.slideshow.Interstitial.prototype = {

    /**
     * Gets the HTML for the slide
     *
     * @method getHtml
     * @static
     * @return {String} An HTML string for DOM insertion
     */
    getHtml : function() {
        CN.debug.info('This is an interstitial getHtml() method');
        return this.html;
    },

    /**
     * Sets the HTML for the slide
     *
     * @method setHtml
     * @static
     * @param  value {String} A block of HTML to set for this slide
     * @return       {Object} The current slide
     */
    setHtml : function(value) {
        this.html = value;
        return this;
    },

    /**
     * Gets the label for the slide type
     *
     * @method getLabel
     * @static
     * @return {String} The slide type's label, since constructor.name is not supported by IE.
     */
    getLabel : function() {
        return this.label;
    }
};


/**
 * An DART interstitial "slide"
 *
 * @namespace   CN.slideshow
 * @class       DartInterstitial
 * @constructor
 * @author      Eric Shepherd
 * @implements  CN.slideshow.ISlide
 */
CN.slideshow.DartInterstitial = function() { // Implements ISlide
    this.html  = '';
    this.id    = 'slideshow-dart-' + parseInt((Math.random() * 10000000000), 10);
    this.label = 'dartinterstitial';             // Using label property because only Mozilla supports constructor.name
};

CN.slideshow.DartInterstitial.prototype = {

    /**
     * Gets the HTML for the slide
     *
     * @method getHtml
     * @static
     * @return {String} An HTML string for DOM insertion
     */
    getHtml : function() {
        CN.debug.info('DartInterstitial getHtml method called');
        return this.html || '<iframe id="' + this.id + '" name="' + this.id + '" src="#" scrolling="no" width="300" height="250" frameborder="0"></iframe>';
    },

    /**
     * Sets the HTML for the slide
     *
     * @method setHtml
     * @static
     * @param  value {String} An empty string; the HTML is generated by the getHtml() method
     * @return       {Object} The current slide
     */
    setHtml : function(value) {
        this.html = value;
        return this;
    },

    /**
     * Gets the label for the slide type
     * @method getLabel
     * @static
     *
     * @return {String} The slide type's label, since constructor.name is not supported by IE.
     */
    getLabel : function() {
        return this.label;
    },

    /**
     * Gets the id for this slide
     *
     * @method getId
     * @static
     * @return {String} The slide's unique identifier
     */
    getId : function() {
        return this.id;
    }
};


/**
 * An inline slide advertisement that gets inserted into slideshow
 *
 * @namespace   CN.slideshow
 * @class       InlineAd
 * @constructor
 * @author      Eric Shepherd
 * @implements  CN.slideshow.ISlide
 */
CN.slideshow.InlineAd = function() { // Implements ISlide
    this.html      = '';
    this.label     = 'inlinead';         // Using label property because only Mozilla supports constructor.name
    this.placement = -1;                 // Placement of ad in what slot? (1-based index, -1 denotes last slide)
};

CN.slideshow.InlineAd.prototype = {

    /**
     * Gets the HTML for the slide
     *
     * @method getHtml
     * @static
     * @return {String} An HTML string for DOM insertion
     */
    getHtml : function() {
        CN.debug.info('InlineAd getHtml method called');
        return this.html;
    },

    /**
     * Sets the HTML for the slide
     *
     * @method setHtml
     * @static
     * @param  value {String} A block of HTML to set for this slide
     * @return       {Object} The current slide
     */
    setHtml : function(value) {
        this.html = value;
        return this;
    },

    /**
     * Sets the placement in the slideshow for this slide
     *
     * @method setPlacement
     * @static
     * @param  value {Number} A slot in the slideshow (1-based index) to place this slide. -1 denotes the last slide.
     * @return       {Object} The current slide
     */
    setPlacement : function(value) {
        this.placement = value;
        return this;
    },

    /**
     * Gets the label for the slide type
     *
     * @method getLabel
     * @static
     * @return {String} The slide type's label, since constructor.name is not supported by IE.
     */
    getLabel : function() {
        return this.label;
    }
};


/**
 * An inline slide that comes from the existing DOM
 *
 * @namespace   CN.slideshow
 * @class       DomSlide
 * @constructor
 * @author      Eric Shepherd
 * @implements  CN.slideshow.ISlide
 */
CN.slideshow.DomSlide = function() { // Implements ISlide
    this.label     = 'domslide';         // Using label property because only Mozilla supports constructor.name
    this.placement = -1;                 // Placement of ad in what slot? (1-based index, -1 denotes last slide)
    this.domId     = null;               // The element id which will be used for this slide
};

CN.slideshow.DomSlide.prototype = {

    /**
     * Gets the element node to be moved into the slideshow
     *
     * @method getHtml
     * @static
     * @return {String} A jQuery selector indicating the element id from the DOM to use for this slide
     */
    getHtml : function() {
        CN.debug.info('DomSlide getHtml method called');
        return '#' + this.domId;
    },

    /**
     * Sets the element id to target
     *
     * @method setHtml
     * @static
     * @param  value {String} The DOM id to use for this slide
     * @return       {Object} The current slide
     */
    setHtml : function(value) {
        this.domId = value;
        return this;
    },

    /**
     * Sets the placement in the slideshow for this slide
     *
     * @method setPlacement
     * @static
     * @param  value {Number} A slot in the slideshow (1-based index) to place this slide. -1 denotes the last slide.
     * @return       {Object} The current slide
     */
    setPlacement : function(value) {
        this.placement = value;
        return this;
    },

    /**
     * Gets the label for the slide type
     *
     * @method getLabel
     * @static
     * @return {String} The slide type's label, since constructor.name is not supported by IE.
     */
    getLabel : function() {
        return this.label;
    }
};


/**
 * A light slide, typically for use with mediaItems in the media viewer.
 * Expects HTML to be provided.
 *
 * @namespace   CN.slideshow
 * @class       LightSlide
 * @constructor
 * @implements  CN.slideshow.ISlide
 * @author      Eric Shepherd
 * @param       data      {Object} JSON data to populate a slide with
 * @param       template  {String} The template to use to render this slide's HTML
 */
CN.slideshow.LightSlide = function(html) { // Implements ISlide
    this.html      = html || '';
    this.label     = 'lightslide'; // Using label property because only Mozilla supports constructor.name
    this.thumbnail = null;
};

CN.slideshow.LightSlide.prototype = {

    /**
     * Gets the HTML for the slide
     *
     * @method getHtml
     * @static
     * @return {String} An HTML string for DOM insertion
     */
    getHtml : function() {
        return this.html;
    },

    /**
     * Gets the label for the slide type
     *
     * @method getLabel
     * @static
     * @return {String} The slide type's label, since constructor.name is not supported by IE.
     */
    getLabel : function() {
        return this.label;
    },

    /**
     * Sets the html for this slide
     *
     * @method setHtml
     * @param  value   {String} A string of HTML for this slide
     * @static
     * @return         {Object} The current slide
     */
    setHtml : function(value) {
        this.html = value;
        return this;
    },

    /**
     * Returns the thumbnail path for this slide
     *
     * @method getThumbnail
     * @static
     * @return         {String|null} The thumbnail path for this slide
     */
    getThumbnail : function() {
        return this.thumbnail;
    },

    /**
     * Sets the thumbnail path for this slide
     *
     * @method setThumbnail
     * @static
     * @param  value   {String} The path for this slide's thumbnail image
     * @return         {Object} The current slide
     */
    setThumbnail : function(value) {
        this.thumbnail = value;
        return this;
    }
};


/**
 * Model for interstitial slides, which are on a timer
 * and do not factor into the total slide count.
 *
 * @namespace   CN.slideshow
 * @class       InterstitialManager
 * @constructor
 * @author      Eric Shepherd
 * @param       config     {Object} A hash of configuration options
 * @option      frequency  {Number} The number of clicks before showing an interstitial
 */
CN.slideshow.InterstitialManager = function(config) {
    config = config || {};

    this.clickCount        = 0;
    this.slides            = [];                    // Holds the slide html that will be shown interstitially
    this.slideCount        = 0;                     // The position of the interstitial we will be showing next

    if (config.frequency || config.frequency === 0 || config.useInterstitial === false) {
        this.frequency = config.frequency;
        this.originalFrequency = config.frequency;
    } else {
        this.frequency = 10;
        this.originalFrequency = 10;
    }
};

CN.slideshow.InterstitialManager.prototype = {

    /**
     * Gets the current interstitial slide if one exists
     *
     * @method getSlide
     * @return {Slide|Boolean} An interstitial slide to use or false if no interstitial should be shown
     */
    getSlide : function() {
        var ad = null;
        this.clickCount++;

        if ((this.clickCount % this.frequency) === 0 && this.slides[this.slideCount]) {
            ad = this.slides[this.slideCount];
                    // Resets the counter to 0 if we are at the end of the array
            this.slideCount = (this.slideCount === (this.slides.length - 1)) ? 0 : this.slideCount + 1;
        }
        return ad || false;
    },

    /**
     * Gets the current interstitial slide if one exists, without adjusting the interstitial counter
     *
     * @method getSlideWithoutIncrementing
     * @return {Slide|Boolean} An interstitial slide to use or false if no interstitial is available
     */
    getSlideWithoutIncrementing : function() {
        var ad = null;
        ad = this.slides[this.slideCount];
        return ad || false;
    },

    /**
     * Appends an interstitial slide to the array
     *
     * @method append
     * @param  slide  {ISlide} A slide to insert into the interstitial array, implements ISlide interface
     */
    append : function(slide) {
        this.slides.push(slide);
    },

    /**
     * Gets the interstitial ad frequency
     *
     * @method getFrequency
     * @static
     */
    getFrequency : function() {
        return this.frequency;
    },

    /**
     * Changes the frequency at which to show an interstitial
     *
     * @method setFrequency
     * @static
     * @param  value {Number} A number indicating the frequency for showing interstitial ads
     */
    setFrequency : function(value) {
        this.frequency = value;
    }
};


/*
 * Controller interface implemented by all slideshow commands
 * @interface ICommand
 */
CN.slideshow.ICommand = new CN.Interface('ICommand', ['execute']);


/**
 * Command to go forward one slide, or delegate to showInterstitialAction
 *
 * @namespace   CN.slideshow
 * @class       GoForward
 * @implements  CN.slideshow.ICommand
 * @constructor
 * @param       slides {Slides} A slideshow to advance forward
 */
CN.slideshow.GoForward = function(slides) {     // Implements ICommand
    this.slides = slides;
};

CN.slideshow.GoForward.prototype = {

    /**
     * Calls the goForwardAction of the slideshow or delegates to showInterstitialAction
     *
     * @method execute
     * @static
     */
    execute : function() {
        var ad,
            that = this;

        if (this.slides.showingInterstitial === false) {
            ad = this.slides.interstitialManager.getSlide();
            if (ad !== false) {
                this.slides.queuedAction = [this.slides.goForwardAction, null];
                this.slides.showInterstitialAction(ad);
                if (!that.slides.timer || !that.slides.timer.timer) {
                    that.slides.interstitialManager.timer = setTimeout(function() { that.slides.hideInterstitialAction(); }, (that.slides.showInterstitialTimer * 1000));
                }
            } else {
                this.slides.goForwardAction();
            }
        }
    }
};


/**
 * Command to go backward one slide, or delegate to showInterstitialAction
 *
 * @namespace   CN.slideshow
 * @class       GoBackward
 * @implements  CN.slideshow.ICommand
 * @constructor
 * @param       slides {Slides} A slideshow to move backward
 */
CN.slideshow.GoBackward = function(slides) {    // Implements ICommand
    this.slides = slides;
};

CN.slideshow.GoBackward.prototype = {

    /**
     * Calls the goBackwardAction of the slideshow or delegates to showInterstitialAction
     *
     * @method execute
     * @static
     */
    execute : function() {
        var ad,
            that = this;

        if (this.slides.showingInterstitial === false) {
            ad = this.slides.interstitialManager.getSlide();
            if (ad !== false) {
                this.slides.queuedAction = [this.slides.goBackwardAction, null];
                this.slides.showInterstitialAction(ad);
                if (!that.slides.timer || !that.slides.timer.timer) {
                    that.slides.interstitialManager.timer = setTimeout(function() { that.slides.hideInterstitialAction(); }, (that.slides.showInterstitialTimer * 1000));
                }
            } else {
                this.slides.goBackwardAction();
            }
        }
    }
};


/**
 * Command to start a slideshow's autoplay
 *
 * @namespace   CN.slideshow
 * @class       PlaySlideshow
 * @implements  CN.slideshow.ICommand
 * @constructor
 * @param       slides {Slides} A slideshow to play
 */
CN.slideshow.PlaySlideshow = function(slides) { // Implements ICommand
    this.slides = slides;
};

CN.slideshow.PlaySlideshow.prototype = {

    /**
     * Advances the slideshow on a timer
     *
     * @method execute
     * @static
     */
    execute : function() {
        if (!this.slides.isAlreadyPlaying() && this.slides.showingInterstitial === false) {
            this.advance(this, this.slides.sliderEl);
        }
    },

    /**
     * Advances the slideshow on a timer, after delegating to view for cleanup
     *
     * @method advance
     * @static
     * @private
     * @param that     {Object} A reference to the Play command
     * @param sliderEl {String} A jQuery selector indicating where to put the slider ('.stop' for example)
     */
    advance : function(that, sliderEl) {
        CN.slideshow.view.hidePlayButton(that.slides);
        CN.slideshow.view.showSlider(that.slides, { sliderEl : sliderEl });
        that.slides.timer = new CN.Timer((that.slides.playTimer * 1000), function() {
            var ad = that.slides.interstitialManager.getSlide();
            if (ad !== false) {
                that.slides.queuedAction = [that.slides.goForwardAction, null];
                that.slides.showInterstitialAction(ad);
                that.slides.interstitialManager.timer = setTimeout(function() { that.slides.hideInterstitialAction(); }, (that.slides.showInterstitialTimer * 1000));
            } else {
                if (that.slides.showingInterstitial === true) {
                    that.slides.hideInterstitialAction();
                } else {
                    that.slides.goForwardAction();
                }
            }
        }).start();
    }
};


/**
 * Command to stop a slideshow's autoplay
 *
 * @namespace   CN.slideshow
 * @class       StopSlideshow
 * @implements  CN.slideshow.ICommand
 * @constructor
 * @param       slides {Slides} A slideshow to stop
 */
CN.slideshow.StopSlideshow = function(slides) { // Implements ICommand
    this.slides = slides;
};

CN.slideshow.StopSlideshow.prototype = {

    /**
     * Stops the slideshow from playing
     *
     * @method execute
     * @static
     */
    execute : function() {
        var that = this;
        if (this.slides.isAlreadyPlaying() && this.slides.showingInterstitial === false) {
            CN.slideshow.view.hideSlider(this.slides, function() {
                CN.slideshow.view.hideStopButton(that.slides);
            });
            this.slides.timer.stop();
            this.slides.timer = null;
        }
    }
};


/**
 * Command to jump to any slide, or delegate to showInterstitialAction
 *
 * @namespace   CN.slideshow
 * @class       JumpToSlide
 * @implements  CN.slideshow.ICommand
 * @constructor
 * @param       slides {Slides} A slideshow to jump
 */
CN.slideshow.JumpToSlide = function(slides) {   // Implements ICommand
    this.slides = slides;
};

CN.slideshow.JumpToSlide.prototype = {

    /**
     * Calls the jumpToSlide action of the slideshow or delegates to showInterstitialAction
     *
     * @method execute
     * @static
     * @param  number {Number} The slide index to jump to
     */
    execute : function(number) {
        var ad,
            that = this;

        if ((number !== this.slides.currentSlideIndex + 1) && (this.slides.showingInterstitial === false)) {
            ad = this.slides.interstitialManager.getSlide();
            if (ad !== false) {
                this.slides.queuedAction = [this.slides.jumpToSlideAction, number];
                this.slides.showInterstitialAction(ad);
                if (!that.slides.timer || !that.slides.timer.timer) {
                    that.slides.interstitialManager.timer = setTimeout(function() { that.slides.hideInterstitialAction(); }, (that.slides.showInterstitialTimer * 1000));
                }
            } else {
                this.slides.jumpToSlideAction(number);
            }
        } else if (this.slides.slide.getLabel() === 'domslide') { // This is kind of a silly exception, but necessary for DOM slides that need to be tossed back and forth from view larger to regular view - we allow jumping to the current slide if it is a DOM slide
            this.slides.jumpToSlideAction(number); // TODO: any problems with this approach? Looking back on it, I'm still not quite sure why it is written this way
        }
    }
};


/**
 * Command to show an out-of-slideshow modal ad
 *
 * @namespace   CN.slideshow
 * @class       ShowInterstitial
 * @implements  CN.slideshow.ICommand
 * @constructor
 * @param       slides {Slides} A slideshow to show an interstitial ad in
 */
CN.slideshow.ShowInterstitial = function(slides) {     // Implements ICommand
    this.slides = slides;
};

CN.slideshow.ShowInterstitial.prototype = {

    /**
     * Calls the showInterstitialAction of the slideshow
     *
     * @method execute
     * @static
     * @param  {Slides} ad An interstitial to show on a timer
     */
    execute : function(ad) {
        if (ad) {
            this.slides.showInterstitialAction(ad);
        } else {
            CN.debug.warn('Tried to show interstitial, but there was no interstitial to show.');
        }
    }
};


/**
 * Command to hide an out-of-slideshow modal ad
 *
 * @namespace   CN.slideshow
 * @class       HideInterstitial
 * @implements  CN.slideshow.ICommand
 * @constructor
 * @param       slides {Slides} A slideshow to hide an interstitial ad in
 */
CN.slideshow.HideInterstitial = function(slides) {     // Implements ICommand
    this.slides = slides;
};

CN.slideshow.HideInterstitial.prototype = {

    /**
     * Hides the currently shown ad
     *
     * @method execute
     * @static
     */
    execute : function() {
        this.slides.hideInterstitialAction();
    }
};


/*
     Navigation
*/


/**
 * Base object for a slideshow navigation control.
 *
 * This object is extended to create navigation controls with specific behaviors
 * (eg. carousel), which are further extended to create the actual page
 * controls. Child classes must define thumbnails[] and currentSelection
 * properties and can override any other property or method.
 * Setting up a navigation object requires creating a unique jQuery node and
 * passing it into the render() method. A second container parameter is optional
 * and defaults to the document body.
 *
 * Use the Object.make() method found in CN.js to create the child objects.
 *
 * @namespace CN.slideshow
 * @class slideshowNavigation
 */
CN.slideshow.slideshowNavigation = {

    container : jQuery('body'),

    init : function() {
        CN.debug.info('CN.slideshow.slideshowNavigation.init() called directly; make sure you did not intend to override in the child class.');
    },

    getThumbnails : function() {
        return this.thumbnails;
    },

    getCurrentSelection : function() {
        return this.currentSelection;
    },

    appendThumbnail : function(value, pos) {
        var li = jQuery('<li><a href="#"><img src="' + value + '" alt="" /></a></li>');
        if (pos >= this.list.children('li').length) {
            this.list.append(li);
        } else {
            li.insertAfter(this.list.children('li').eq(pos - 1));
        }
    },

    render : function(list, container) {
        if (list) {
            this.list = list;
            this.container = container || this.container;
            this.container.append(list);
        } else {
            CN.debug.error('Error: the render() method requires a list element, and none was passed in');
        }
    },

    updateDisplay : function(slideshow) {
        var els = this.list.find('li');

        els.removeClass('active');
        els.each(function(index) {
            if (index === slideshow.currentSlideIndex) {
                jQuery(this).addClass('active');
            }
        });
    }
};


/**
 * A slideshow navigation number control, adds behavior for a generic list of numbers
 *
 * @namespace CN.slideshow
 * @class     slideshowNavigationNumbers
 * @extends   slideshowNavigation
 */
CN.slideshow.slideshowNavigationNumbers = Object.make(CN.slideshow.slideshowNavigation);

CN.slideshow.slideshowNavigationNumbers.appendThumbnail = function(value) {
    var li,
        pos;

    pos = this.list.children('li').length + 1;
    li = jQuery('<li><a href="#">' + pos + '</a></li>');
    this.list.append(li);
};


/**
 * A numbered list with image rollover control, adds
 * behavior for pagination of numbers and image rollover
 *
 * @namespace CN.slideshow
 * @class     slideshowNavigationNumberedHover
 * @extends   slideshowNavigation
 */
CN.slideshow.slideshowNavigationNumberedHover = Object.make(CN.slideshow.slideshowNavigation);

CN.slideshow.slideshowNavigationNumberedHover.init = function() {

    var $list = jQuery(this.list);

    $list.click(function() {
        $list.find('img.slideshow-thumb-expand').css({
            'position' : 'absolute',
            'width' : 100,
            'height' : 100,
            'display' : 'none'
        });
    });

    $list.hover(
        function(e, index) {
            var li = jQuery(e.target).is('li') ? jQuery(e.target) : jQuery(e.target).parents('li')[0];

            $list.find('img.slideshow-thumb-expand').css({
                'position' : 'absolute',
                'width' : 100,
                'height' : 100,
                'display' : 'none'
            });
            jQuery(li).find('img.slideshow-thumb-expand').effect('size', {
                from: { width: 80, height: 80 },
                to: { width: 100, height: 100 },
                origin: ['bottom', 'center'],
                scale: 'content'
            }, 300, function() { // insurance
                $list.find('img.slideshow-thumb-expand').not(this).css({
                    'position' : 'absolute',
                    'width' : 100,
                    'height' : 100,
                    'display' : 'none'
                });
            });
            e.stopPropagation();
        },
        function(e) {
            $list.find('img.slideshow-thumb-expand').css({
                'position' : 'absolute',
                'width' : 100,
                'height' : 100,
                'display' : 'none'
            });
            e.stopPropagation();
        }
    );
};

CN.slideshow.slideshowNavigationNumberedHover.appendThumbnail = function(value, pos) {
    var li = jQuery('<li><a href="#">' + (pos + 1) + '</a><img class="slideshow-thumb-expand" src="' + value + '" alt="" /></li>');

    if (pos >= this.list.children('li').length) {
        this.list.append(li);
    } else {
        li.insertAfter(this.list.children('li').eq(pos - 1));
                // Recalculate other items
        this.list.children('li').each(function(index) {
            jQuery(this).find('a').text(index + 1);
        });
    }
};


/**
 * A slideshow control which shows small images, then expands them on hover
 * Adds behavior for showing tiny images instead of numbers.
 *
 * @namespace CN.slideshow
 * @class     slideshowNavigationImageHover
 * @extends   slideshowNavigationNumberedHover
 */
CN.slideshow.slideshowNavigationImageHover = Object.make(CN.slideshow.slideshowNavigationNumberedHover);

CN.slideshow.slideshowNavigationImageHover.appendThumbnail = function(value, pos) {
    var li = jQuery('<li><a href="#"><img src="' + value + '" alt="" /></a><img class="slideshow-thumb-expand" src="' + value + '" alt="" /></li>');

    if (pos >= this.list.children('li').length) {
        this.list.append(li);
    } else {
        li.insertAfter(this.list.children('li').eq(pos - 1));
    }
};


/**
 * A slideshow navigation list control, adds behavior for a generic image list
 *
 * @namespace CN.slideshow
 * @class     slideshowNavigationList
 * @extends   slideshowNavigation
 */
CN.slideshow.slideshowNavigationList = Object.make(CN.slideshow.slideshowNavigation);


/**
 * A slideshow view all control. Restriction - CSS can't set a
 * left: position on the wrapper div, because the script needs to show/hide
 * and set left positions in order to add items into the scroll pane area.
 * Shows a list with slider overlaying the slide area.
 *
 * @namespace CN.slideshow
 * @class     slideshowNavigationViewAll
 * @extends   slideshowNavigation
 * @requires  jquery.scrollpane
 */
CN.slideshow.slideshowNavigationViewAll = Object.make(CN.slideshow.slideshowNavigation);

CN.slideshow.slideshowNavigationViewAll.render = function(list, container) {
    var wrapper = jQuery('<div class="slideshow-viewall-container">'),
        contentBox = jQuery('<div class="slideshow-viewall-content">'),
        closeBox = jQuery('<div class="slideshow-viewall-close">' + CN.slideshow.config.viewAllCloseBtn + '</div>'),
        that = this;

    this.wrapper = wrapper;
    this.contentBox = contentBox;
    this.hidden = true;

            // Observers
    this.onShow = new CN.Observer();
    this.onHide = new CN.Observer();

    if (list) {
        this.list = list;
        this.container = container || this.container;
        this.contentBox.append(this.list);
        wrapper.prepend(closeBox);
        wrapper.append(this.contentBox);
        this.container.append(wrapper);
        closeBox.click(function() {
            that.hide();
        });
    } else {
        CN.debug.error('Error: the render() method requires a list element, and none was passed in');
    }
};

CN.slideshow.slideshowNavigationViewAll.show = function() {
    this.wrapper.hide().css('left', 0); // Because jScrollPane requires visibility to render correctly
    this.wrapper.slideDown();
    try {
        this.contentBox[0].scrollTo('li.active');
    } catch(e) {
        // can't scrollTo if the box doesn't have scrollbars; an oversight in jquery.scrollPane.js so we catch the exception here
    }
    this.onShow.fire();
    this.hidden = false;
};

CN.slideshow.slideshowNavigationViewAll.hide = function() {
    var that = this;
    this.wrapper.slideUp('fast', function() {
        that.wrapper.css('left', '-9999px').show();
    });
    this.onHide.fire();
    this.hidden = true;
};

CN.slideshow.slideshowNavigationViewAll.appendThumbnail = function(value, pos) {
    var li,
        listItems,
        that;

            // Hack - the scroll pane has to be visible in order to add items to it
    this.wrapper.css('left', '-9999px').show();

    li = jQuery('<li><a href="#"><img src="' + value + '" alt="" /></a><span>' + (pos + 1) + '</span></li>');
    listItems = this.list.children('li');

    if (pos >= listItems.length) {
        this.list.append(li);
    } else {
        li.insertAfter(listItems.eq(pos - 1));
                // Recalculate other items
        this.list.children('li').each(function(index) {
            jQuery(this).find('span').text(index + 1);
        });
    }

            // This is an ugly fix for IE6, which refuses to calculate innerWidth on the absolutely positioned element.
            // jScrollPane needs the correct innerWidth, and somehow toggling this position registers the element with IE.
            // It doesn't seem to be a hasLayout issue. IE's rendering engine is a dark and frightening thing.
    if (jQuery.browser.msie && jQuery.browser.version < 7 && this.wrapper.css('position') === 'absolute') {
        this.wrapper.css('position', 'relative');
        this.wrapper.css('position', 'absolute');
    }

            // We delay this because jScrollPane is horribly slow and adds about 3 seconds to the slideshow preparation time
    that = this;
    setTimeout(function() {
        try {
            that.contentBox.jScrollPane({ showArrows: true, scrollbarWidth: 14 });
        } catch(e) {
            // Bug in jScrollPane, have to catch possible exception here
        }
    }, 5000);
};


/**
 * A slideshow carousel control with numbers below the carousel items.
 * Note that the jCarousel plugin handles numbers differently -
 * the index of 1 is 1, not 0.
 *
 * @namespace CN.slideshow
 * @class     slideshowNavigationCarousel
 * @extends   slideshowNavigation
 * @requires  jquery.carousel
 */
CN.slideshow.slideshowNavigationCarousel = Object.make(CN.slideshow.slideshowNavigation);

CN.slideshow.slideshowNavigationCarousel.skin = 'default';

CN.slideshow.slideshowNavigationCarousel.carousel = null;

CN.slideshow.slideshowNavigationCarousel.init = function() {
    CN.slideshow.slideshowNavigationCarousel.tempContainer = this.list.parent();
    this.tempContainer.hide(); // TODO: refactor this, but something's not connecting in my brain right now.
    this.list.addClass('jcarousel-skin-' + this.skin);
    this.list.jcarousel({
        scroll : 3,
        initCallback : this.initCallback
    });
};

CN.slideshow.slideshowNavigationCarousel.appendThumbnail = function(value, pos) {
    var newThumbnail = '<a href="#"><img src="' + value + '" alt="" /></a><span>' + (pos + 1) + '</span>';
    this.carousel.add((pos + 1), newThumbnail);
            // Recalculate other items
    this.list.children('li').each(function(index) {
        jQuery(this).find('span').text(index + 1);
    });
};

CN.slideshow.slideshowNavigationCarousel.updateDisplay = function(slideshow) {
    this.initialLoad = this.initialLoad === false ? false : true;
    var els = this.list.find('li');

    els.removeClass('active');
    els.each(function(index) {
        if (index === slideshow.currentSlideIndex) {
            jQuery(this).addClass('active');
        }
    });

    this.carousel.scroll(slideshow.currentSlideIndex + 1, function() {});
};

CN.slideshow.slideshowNavigationCarousel.initCallback = function(carousel) {
    if (jQuery.browser.msie) {
        CN.slideshow.slideshowNavigationCarousel.tempContainer.show();
    } else {
        CN.slideshow.slideshowNavigationCarousel.tempContainer.slideDown(1250);
    }
    CN.slideshow.slideshowNavigationCarousel.carousel = carousel;
};


/**
 * A slideshow control that overlays its parent, showing and hiding
 * when the parent is hovered.
 *
 * @namespace CN.slideshow
 * @class     slideshowNavigationOverlay
 * @extends   slideshowNavigation
 */
CN.slideshow.slideshowNavigationOverlay = Object.make(CN.slideshow.slideshowNavigation);

CN.slideshow.slideshowNavigationOverlay.init = function() {
    var $list = this.list,
        container = this.container,
        timer;

    timer = setTimeout(function() {
        $list.slideUp();
    }, 2000);

    container.hover(function() {
        clearTimeout(timer);
        $list.slideDown();
    }, function() {
        $list.slideUp();
    });
};
