/*globals CN:true, jQuery, onError, onSuccess */

/*!
* @file cn.most.js
* @version 1.0.5
* @author Paul Bronshteyn
* @comment Built by a geek loaded on caffeine ...
* @copyright (c) Conde Nast Digital
*
* ETF info: http://wiki.conde-dev.com/display/CND/Event+Tracking+Framework+%28ETF%29+Savvis+Migration+Notes
* jquery.ajax issue in jquery-1.4.2-require.js: the call back is not able to access the properties other the context
*/

/**
* @class Most Viewed/Emailed display module
* @description Retrives entries from event tracking system and
               displays them in the form of an ordered list
* @public
* @require CN, jQuery
*/
CN.most = (function($) {
    var

        feature,

        /**
        * Default options constructor
        * @memberOf CN.most
        * @private
        * @constructor
        * @param {boolean} global Identifies global option set
        */
        Defaults = function(global) {
            /**
            * Global options identifier
            * @memberOf Defaults
            * @private
            * @type boolean
            * @default false
            */
            this.global = global === true;

            /**
            * Global/Feature enabled flag
            * @memberOf Defaults
            * @private
            * @type boolean
            * @default true
            */
            this.enabled = true;

            /**
            * Site environment
            * @memberOf Defaults
            * @private
            * @type string
            * @default CN.site.env
            */
            this.env = CN.site.env;

            /**
            * Site code
            * @memberOf Defaults
            * @private
            * @type string
            * @default CN.site.code
            */
            this.site = CN.site.code;

            /**
            * EVT service url
            * @memberOf Defaults
            * @private
            * @type string
            * @default ''
            */
            this.url = '';

            /**
            * EVT service call path
            * @memberOf Defaults
            * @private
            * @type string
            * @default /spring/event/most.go
            */
            this.urlPath = '/spring/event/most.go';

            /**
            * Number of items to query for from EVT service
            * @memberOf Defaults
            * @private
            * @type integer
            * @default 10
            */
            this.count = 10;

            /**
            * Number of days to query for from EVT service
            * @memberOf Defaults
            * @private
            * @type integer
            * @default 5
            */
            this.days = 5;

            /**
            * Number of hours to query for from EVT service
            * @memberOf Defaults
            * @private
            * @type integer
            * @default 0
            */
            this.hours = 0;

            /**
            * Type of entries to query for from EVT service
            * @memberOf Defaults
            * @private
            * @type string
            * @default all
            */
            this.type = 'all';

            /**
            * Container element
            * @memberOf Defaults
            * @private
            * @type string
            * @default ''
            */
            this.container = '';

            /**
            * Timeout (seconds) in which to expire the request to ETF
            * @memberOf Defaults
            * @private
            * @type integer
            * @default 30
            */
            this.timeout = 15000;
        },

        /**
        * Global options object
        * @memberOf CN.most
        * @private
        * @type object
        */
        options = new Defaults(true),

        /**
        * Feature set which contains options for each feature
        * @memberOf CN.most
        * @private
        * @type object
        */
        features = {
            /**
            * Most Viewed feature options
            * @memberOf CN.most
            * @private
            * @type object
            */
            viewed: new Defaults(),

            /**
            * Most Emailed feature options
            * @memberOf CN.modules.most
            * @private
            * @type object
            */
            emailed: new Defaults()
        },

        /**
        * Creates a jsonp request to EVT service to retrieve data
        * @memberOf CN.most
        * @private
        * @param {string} feature Feature name
        * @param {object} featureOptions Feature options
        */
        request = function(feature, featureOptions) {
            CN.debug.info('CN.most request', [feature, featureOptions]);

            var data = {
                env: featureOptions.env,
                site: featureOptions.site || 'TNV',
                type: featureOptions.type,
                event: 'most_' + feature,
                num: featureOptions.count,
                day: featureOptions.days
            };

            if (featureOptions.hour) {
                data.hour = featureOptions.hour;
                data.day = Math.ceil(data.hour / 24);
            }

            $.jsonp({
                type: 'GET',
                cache: true,
                callbackParameter: 'callback',
                callback: data.event,
                global: true,
                url: (featureOptions.url || 'http://' + ((featureOptions.env !== 'PROD') ? 'stag-' : '') + 'result.' + CN.site.tld) + featureOptions.urlPath,
                context: { container: featureOptions.container },
                data: data,
                timeout: featureOptions.timeout,
                success: onSuccess,
                error: onError
            });
        },

        /**
        * Processes retrieved data, generates html and inserts
        * @memberOf CN.most
        * @private
        * @param {array} data Array of data objects
        */
        onSuccess = function(data) {
                var title,
                    div = this.container || this.context['container'],
                    html = '',
                    allowedDomains = [],
                    i,
                    absoluteUrl;

            CN.debug.info('CN.most response', [div, data]);

            $.each(data, function(index) {
                title = this.contentTitle.replace(/&amp;/gi, '&').replace(/&lt;/gi, '<').replace(/&gt;/gi, '>');


                if (title && this.contentUrl && this.contentId !== true) {
                    if (CN.site && CN.site.eventAllowedDomains) {
                        allowedDomains = CN.site.eventAllowedDomains.split(",");
                    }

                    absoluteUrl = 0;
                    for(i=0; i < allowedDomains.length; i++) {
                        if(this.contentUrl.indexOf(allowedDomains[i]) >= 0) {
                            absoluteUrl = 1;
                        }
                    }

                    if( typeof(this.imgUrl) !== "undefined" &&  this.imgUrl !== null && this.imgUrl !== "" && index === 0){
                        title = '<img src="' + this.imgUrl +'" /></a><a href="' + this.contentUrl + '">' + title;
                    }
                    if (absoluteUrl === 1 ) {
                        html += '<li><a href="' + this.contentUrl + '">' + title + '</a></li>';
                    }
                    else {
                        html += '<li><a href="' + this.contentUrl.replace(/^.*\.\w+\/+/g, '/') + '">' + title + '</a></li>';
                    }
                }
            });

            if (html) {
                $(div).html('<ol>' + html + '</ol>');
            }

            // TODO:  Move this out after launch
            CN.masonry.refresh();
        },

        /**
        * Error retrieving data from the server
        * @memberOf CN.most
        * @private
        */
        onError = function(msg) {
            // TODO: hide tab when not enabled?
            var test = 0;
           // console.log(msg);
        },

        /**
        * Global API Prototype
        * @memberOf CN.most
        * @private
        * @param {object} localOptions Options
        * @return {object} API functions
        */
        globalApi = function(localOptions) {
            return {
                /**
                * Set enabled option
                * @memberOf CN.most
                * @public
                * @param {boolean} setting Enabled setting
                * @return {object} CN.most || CN.most.[feature_name]
                */
                setEnabled: function(setting) {
                    localOptions.set('enabled', setting === true);
                    return this;
                },

                /**
                * Set timeout
                * @memberOf CN.most
                * @public
                * @param {integer} setting Timeout in seconds
                * @return {object} CN.most || CN.most.[feature_name]
                */
                setEnabled: function(setting) {
                    localOptions.set('timeout', CN.utils.intval(setting) || 30);
                    return this;
                },

                /**
                * Set evironment option
                * @memberOf CN.most
                * @public
                * @param {string} setting Environment setting
                * @return {object} CN.most || CN.most.[feature_name]
                */
                setEnv: function(setting) {
                    localOptions.set('env', setting);
                    return this;
                },

                /**
                * Set url option
                * @memberOf CN.most
                * @public
                * @param {string} setting Url setting
                * @return {object} CN.most || CN.most.[feature_name]
                */
                setUrl: function(setting) {
                    localOptions.set('url', setting);
                    return this;
                },

                /**
                * Set url path option
                * @memberOf CN.most
                * @public
                * @param {string} setting Url path setting
                * @return {object} CN.most || CN.most.[feature_name]
                */
                setUrlPath: function(setting) {
                    localOptions.set('urlPath', setting);
                    return this;
                },

                /**
                * Set site code option
                * @memberOf CN.most
                * @public
                * @param {string} setting Site code setting
                * @return {object} CN.most || CN.most.[feature_name]
                */
                setSite: function(setting) {
                    localOptions.set('site', setting);
                    return this;
                },

                /**
                * Set type option
                * @memberOf CN.most
                * @public
                * @param {string} setting Type setting
                * @return {object} CN.most || CN.most.[feature_name]
                */
                setType: function(setting) {
                    localOptions.set('type', setting);
                    return this;
                },

                /**
                * Set entry count option
                * @memberOf CN.most
                * @public
                * @param {integer} setting Entry count setting
                * @return {object} CN.most || CN.most.[feature_name]
                */
                setCount: function(setting) {
                    localOptions.set('count', CN.utils.intval(setting) || 5);
                    return this;
                },

                /**
                * Set days option
                * @memberOf CN.most
                * @public
                * @param {integer} setting Days setting
                * @return {object} CN.most || CN.most.[feature_name]
                */
                setDays: function(setting) {
                    localOptions.set('days', CN.utils.intval(setting) || 0);
                    return this;
                },

                /**
                * Set hours option
                * @memberOf CN.most
                * @public
                * @param {integer} setting Hours setting
                * @return {object} CN.most || CN.most.[feature_name]
                */
                setHours: function(setting) {
                    localOptions.set('hours', CN.utils.intval(setting) || 0);
                    return this;
                }
            };
        },

        /**
        * Global API
        * @memberOf CN.most
        * @private
        * @return {object} Global + Local API functions
        */
        mostApi = (globalApi(options));

    /**
    * Set option prototype for default options constructor
    * @memberOf CN.most
    * @private
    * @param {string} name Option name to be set
    * @param {mixed} value Option value to be set
    */
    Defaults.prototype.set = function(name, value) {
        var feature;
        this[name] = value || this[name];
        if (this.global) {
            for (feature in features) {
                features[feature].set(name, value);
            }
        }
    }

    /**
    * Initialization for the main object
    * @scope CN.most
    * @public
    * @param {object} o Contains features and options to be initialized
    * @option o {object} feature Feature name object containing feauture options
    * @option feature {string} env Environment setting
    * @option feature {string} site Environment setting
    * @option feature {string} url Environment setting
    * @option feature {string} type Environment setting
    * @option feature {integer} count Environment setting
    * @option feature {integer} days Environment setting
    * @option feature {integer} hours Environment setting
    * @return {object} CN.modules.most
    */
    mostApi.init = function(o) {
        var feature;
        o = o || {};
        options = $.extend(options, o);

        if (options.enabled) {
            for (feature in features) {
                this[feature].init(o[feature] || features[feature]);
            }
        }

        return this;
    }

    /*
    * Loop through all the features and initialize if enabled
    */
    for (feature in features) {
        /**
        * Feature API
        * @scope CN.most
        * @public
        * @return {object} Global + Local API functions
        * @access CN.module.most.[feature_name]
        */
        mostApi[feature] = (function(f, fo) {
            var localApi = (globalApi(fo));

            /**
            * Feature initialization
            * @scope CN.most.[feature_name]
            * @public
            * @param {object} localOptions Feature options to be initialized with
            * @option localOptions {string} env Environment setting
            * @option localOptions {string} site Environment setting
            * @option localOptions {string} url Environment setting
            * @option localOptions {string} type Environment setting
            * @option localOptions {integer} count Environment setting
            * @option localOptions {integer} days Environment setting
            * @option localOptions {integer} hours Environment setting
            * @return {object} CN.module.most.[feature_name]
            * @access CN.module.most.[feature_name].init()
            */
            localApi.init = function(localOptions) {
                fo = $.extend(fo, localOptions || {});

                if (!fo.container) {
                    this.setContainer();
                }

                if (fo.enabled) {
                    if ($(fo.container).length) {
                        request(f, fo);
                    }
                } else {
                    // TODO: hide tab when not enabled?
                }

                return this;
            };

            localApi.setContainer = function(container) {
                fo.set('container', container || '#most-' + f);
                return this;
            };

            localApi.end = function() {
                return mostApi;
            };

            return localApi;
        })(feature, features[feature]);
    }

    /**
    * @scope CN.module.most
    */
    return mostApi;

})(jQuery);

// jquery.jsonp 2.1.4 (c)2010 Julian Aubourg | MIT License
// http://code.google.com/p/jquery-jsonp/
(function(e,b){function d(){}function t(C){c=[C]}function m(C){f.insertBefore(C,f.firstChild)}function l(E,C,D){return E&&E.apply(C.context||C,D)}function k(C){return/\?/.test(C)?"&":"?"}var n="async",s="charset",q="",A="error",r="_jqjsp",w="on",o=w+"click",p=w+A,a=w+"load",i=w+"readystatechange",z="removeChild",g="<script/>",v="success",y="timeout",x=e.browser,f=e("head")[0]||document.documentElement,u={},j=0,c,h={callback:r,url:location.href};function B(C){C=e.extend({},h,C);var Q=C.complete,E=C.dataFilter,M=C.callbackParameter,R=C.callback,G=C.cache,J=C.pageCache,I=C.charset,D=C.url,L=C.data,P=C.timeout,O,K=0,H=d;C.abort=function(){!K++&&H()};if(l(C.beforeSend,C,[C])===false||K){return C}D=D||q;L=L?((typeof L)=="string"?L:e.param(L,C.traditional)):q;D+=L?(k(D)+L):q;M&&(D+=k(D)+encodeURIComponent(M)+"=?");!G&&!J&&(D+=k(D)+"_"+(new Date()).getTime()+"=");D=D.replace(/=\?(&|$)/,"="+R+"$1");function N(S){!K++&&b(function(){H();J&&(u[D]={s:[S]});E&&(S=E.apply(C,[S]));l(C.success,C,[S,v]);l(Q,C,[C,v])},0)}function F(S){!K++&&b(function(){H();J&&S!=y&&(u[D]=S);l(C.error,C,[C,S]);l(Q,C,[C,S])},0)}J&&(O=u[D])?(O.s?N(O.s[0]):F(O)):b(function(T,S,U){if(!K){U=P>0&&b(function(){F(y)},P);H=function(){U&&clearTimeout(U);T[i]=T[o]=T[a]=T[p]=null;f[z](T);S&&f[z](S)};window[R]=t;T=e(g)[0];T.id=r+j++;if(I){T[s]=I}function V(W){(T[o]||d)();W=c;c=undefined;W?N(W[0]):F(A)}if(x.msie){T.event=o;T.htmlFor=T.id;T[i]=function(){/loaded|complete/.test(T.readyState)&&V()}}else{T[p]=T[a]=V;x.opera?((S=e(g)[0]).text="jQuery('#"+T.id+"')[0]."+p+"()"):T[n]=n}T.src=D;m(T);S&&m(S)}},0);return C}B.setup=function(C){e.extend(h,C)};e.jsonp=B})(jQuery,setTimeout);