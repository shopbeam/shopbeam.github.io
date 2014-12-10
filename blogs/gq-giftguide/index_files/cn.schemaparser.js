/**
 * @module      schemaParser
 * @namespace   CN
 * @description Handles the parsing of JSON from the MPP XML schemas into HTML.
 *              Allows for custom HTML templates to deliver the full rendered
 *              markup for a DCT, and also provides methods for accessing the
 *              data for various DCT elements.
 * @requires    CN
 * @author      Eric Shepherd
 * @copyright   2008-2010 Conde Nast Digital
 *
 * @history:    0.8.0    EBS 12.2008 Alpha
 *              0.9.0    EBS 02.2009 Beta - added support for memoizing renderedHtml() function with parameters, so the same content can be used with different templates on a page.
 *              1.0.0    EBS 09.2009 Might as well make this production, it's been live for 6 months
 *              1.1.0    EBS 10.2009 Added methods for date, contributor, expanded headers to allow graphics and URL
 *              1.2.0    EBS 02.2010 Added methods for image annotations
 *              1.3.0rc1 EBS 03.2010 Added methods for mediaItems
 *              1.3.0rc2 EBS 03.2010 Removed need for templates (though no renderedHtml will be available)
 *              1.3.0rc3 EBS 03.2010 Changed internal API for annotations to be a template for compatibility with both photo and mediaItems.
 *              1.3.0rc4 EBS 04.2010 Added option to pass a content id to the parse() method if the json has already been parsed.
 *              1.3.0    EBS 04.2010 Removed if check so that renderedHtml can be stored per template and memoized.
 *              1.3.1    EBS 06.2010 Added passthru of templates from site js if it happens to load before this file.
 *              1.3.2    EBS 07.2010 Bug fixes, reformatting
 *
 * @notes       In general, the schema parser will not provide methods unless
 *              there is data for the method. That is, checking the presence
 *              of rubric method will tell you whether there is a rubric.
 *              The notable exception is photos, where the url, alt, etc
 *              methods are always written, and you can check url() to find
 *              out whether there is actual data, since it will return the
 *              falsy empty string if no data is entered.
 */

/*global CN, console, window, document, jQuery, setTimeout, clearTimeout, clearInterval, setInterval */ /* for jsLint */

/**
 * Assists with converting JSON from DCTs into HTML for DOM insertion.
 *
 * @example CN.schemaParser.getInstance().parse(dct).rubric();
 * @example CN.schemaParser.getInstance().parse(dct).photo.main();
 * @example CN.schemaParser.getInstance().parse(dct).photo.main.annotations();
 * @example CN.schemaParser.getInstance().parse(dct).renderedHtml('item'); // where 'item' is the template to use
 *
 * @class     schemaParser
 * @singleton
 * @param     {Object} templates An object of templates to use for rendering (optional) - will be passed through and returned
 * @return    {Object}           A getInstance() method and templates object (or null if param was not passed in)
 */
CN.schemaParser = function(templates) {
    var uniqueInstance,
        constructor,
        methods = {},
        data = {};

    constructor = function() {
        return {

            /**
             * Stores the json data by contentId lookup
             * @property data
             * @static
             */
            data : data,

            /**
             * Parses a DCT, stores methods for accessing data in a dictionary
             * keyed to content ID. Pass either a DCT (json at the article,
             * list, or other main content level) or a contentId number for
             * looking up an already processed DCT.
             *
             * @method parse
             * @static
             * @param  {Object|Number}  dct  A dct in json format, or a content id for a dct previously parsed.
             * @return {Object|False}        Methods for accessing DCT content or false if dct param is a number but that piece of content hasn't been parsed.
             */
            parse : function(dct) {
                var dctId = 'i' + ((CN.isNumber(dct)) ? dct : dct.metaData.id);

                        // Public catalog of content ids for implementation to query
                if (!data[dctId]) {
                    if (CN.isNumber(dct)) {
                        return false;
                    } else {
                        data[dctId] = dct;
                        methods[dctId] = CN.schemaParser.factory(dct);
                    }
                } else {
                    return methods[dctId];
                }

                        // Creates the renderedHtml() method and assigns to this piece of content
                methods[dctId].renderedHtml = function(template) {
                    template = template || 'item';
                    if (CN.schemaParser.templates && CN.schemaParser.templates[template]) {
                        return CN.schemaParser.templates[template](methods[dctId]);
                    } else {
                        return 'No renderedHtml template is available for the "' + template + '" template.';
                    }
                };
                        // Memoize for future use
                methods[dctId].renderedHtml = methods[dctId].renderedHtml.memoize();

                return methods[dctId];
            }
        };
    };

    return {

        getInstance : function() {
            if (!uniqueInstance) {
                uniqueInstance = constructor();
            }
            return uniqueInstance;
        },

        /**
         * Passes through templates if passed in by being created at the site
         * level before this file is loaded. Otherwise, the value will be
         * null and this will remain null until the implementation overrides
         * with its template object.
         * @property templates
         * @static
         */
        templates : templates
    };

}(
            // Passing in templates object if it exists (in the case that
            // this file lazy loads after the site sets up templates)
    (CN.schemaParser && CN.schemaParser.templates) ?
        CN.schemaParser.templates :
        null
);


/**
 * Generates methods to pass back to the user which will return DCT content.
 * This will loop once for each piece of content with an ID.
 * It looks at the top level elements in the DCT, and farms out to those
 * methods.
 *
 * @method factory
 * @static
 * @param  {Object} dct A DCT in JSON format to parse (at top level of content,
 *                      such as article_v2, list, item, or video)
 * @return {Object}     A set of methods for accessing the DCT data
 */
CN.schemaParser.factory = function(dct) {
    var methods = {},
        i;

    for (i in dct) {
        if (CN.schemaParser.schemas.hasOwnProperty(i)) {
            methods = CN.schemaParser.schemas[i](dct, methods);
        }
    }

    return methods;
};


/**
 * DCT nodes which are called directly or used by other node methods.
 * Each function must return the methods object after adding its own
 * methods into that object.
 *
 * @property schemas
 * @static
 */
CN.schemaParser.schemas = {

    /**
     * Provides a text path to a Teamsite file for internal editing. No longer used.
     * @deprecated
     * @memberOf CN.schemaParser.schemas
     * @param    {Object} dct     A json object
     * @param    {Object} methods The methods for this schema parser
     * @return   {Object}         The modified methods for this schema parser
     */
    filePath : function(dct, methods) {
        methods.filePath = function() {
            return '<a class="editlink" target="_blank" href="http://' + CN.internal.getTeamsiteServer() + '/iw-cc/command/iw.group.ccpro.edit?vpath=' + dct.filePath.replace(/\/home/, '//' + CN.internal.getTeamsiteServer()).replace(/iwmnt-/, '') + '">Edit in TeamSite</a>';
        };
        return methods;
    },

    /**
     * Provides text for metaData information
     * @memberOf CN.schemaParser.schemas
     * @param    {Object} dct     A json object
     * @param    {Object} methods The methods for this schema parser
     * @return   {Object}         The modified methods for this schema parser
     */
    metaData : function(dct, methods) {
        methods.pageType = function() {
            return dct.metaData.pageType;
        };

        methods.metaDataItems = function() {
            var results    = [],
                mediaItems =  dct.metaData.properties && dct.metaData.properties.property ? dct.metaData.properties.property : [];
            if (Object.prototype.toString.call(mediaItems) === '[object Array]') {
                for (var ind = 0; ind < mediaItems.length; ind++) {
                    results[ind] = mediaItems[ind];
                }
            } else {
                results[0] = mediaItems;
            }
            return results;
        };
        return methods;
    },

    /**
     * Delegates to other methods for unitMetaData information
     * @memberOf CN.schemaParser.schemas
     * @param    {Object} dct     A json object
     * @param    {Object} methods The methods for this schema parser
     * @return   {Object}         The modified methods for this schema parser
     */
    unitMetaData : function(dct, methods) {

        if (dct.unitMetaData.rubric) {
            methods = this.rubric(dct.unitMetaData, methods);
        }

        if (dct.unitMetaData.byline) {
            methods = this.byline(dct.unitMetaData, methods);
        }

        if (dct.unitMetaData.displayDate) {
            methods = this.displayDate(dct.unitMetaData, methods);
        }

        return methods;
    },

    /**
     * Provides html text for header information
     * @memberOf CN.schemaParser.schemas
     * @param    {Object} dct     A json object
     * @param    {Object} methods The methods for this schema parser
     * @return   {Object}         The modified methods for this schema parser
     */
    header : function(dct, methods) {
        if (dct.header) {
            var ret = '',
                alt = '',
                img = '';

            if (dct.header.graphic) {
                alt = dct.header.graphic.altText || '';
                img = '<img src="' + dct.header.graphic.image + '" alt="' + alt + '" />';
                if (dct.header.graphic.URL) {
                    ret = '<a href="' + dct.header.graphic.URL + '">' + img + '</a>';
                } else {
                    ret = img;
                }
            } else {
                if (dct.header.html.URL) {
                    ret += '<a href="' + dct.header.html.URL + '">' + dct.header.html.text + '</a>';
                } else {
                    ret += dct.header.html.text;
                }
            }
            methods.header = function() { return ret; };
        }
        return methods;
    },

    /**
     * Provides html text for subheader information
     * @memberOf CN.schemaParser.schemas
     * @param    {Object} dct     A json object
     * @param    {Object} methods The methods for this schema parser
     * @return   {Object}         The modified methods for this schema parser
     */
    subHeaders : function(dct, methods) {
        methods.subHeaders = function() {
            var i,
                subheaders=[];
            if(dct.subHeaders && jQuery.isArray(dct.subHeaders.subHeader)) {
                for(i=0;i<dct.subHeaders.subHeader.length;i++) {
                    subheaders.push(dct.subHeaders.subHeader[i].html.text);
                }
            } else {
                subheaders.push((dct.subHeaders.subHeader.html) ? dct.subHeaders.subHeader.html.text : '');
            }
            return subheaders;
        };
        return methods;
    },

    /**
     * The body can contain many types of things. If it's a photo, we
     * delegate to photo method. If it's a list, we delegate to the
     * embedded list method. Otherwise, provides html text.
     * @memberOf CN.schemaParser.schemas
     * @param    {Object} dct     A json object
     * @param    {Object} methods The methods for this schema parser
     * @return   {Object}         The modified methods for this schema parser
     */
    body : function(dct, methods) {
        var body = '';

        if (dct.body.lead || dct.body.introduction) {
            body += '<div class="lead-introduction">';
        }

        body += dct.body.lead ? '<div class="lead">' + dct.body.lead + '</div> ' : '';
        body += dct.body.introduction ? dct.body.introduction + ' ' : '';

        if (dct.body.lead || dct.body.introduction) {
            body += '</div>';
        }

        body += dct.body.text ? '<div class="text">' + dct.body.text + '</div>' : '';
        methods.body = function() { return body; };
        methods.bodyText = function() { return dct.body.text; };
        methods.bodyLead = function() { return dct.body.lead; };
        methods.bodyIntroduction = function() { return dct.body.introduction; };

        if (dct.body.photo) {
            methods = this.photo(dct.body, methods);
        }

        if (dct.body.embeddedList) {
            methods = this.embeddedList(dct.body, methods);
        }

        if(dct.body.altMedia) {
            methods = this.altMedia(dct.body, methods);
        }

        return methods;
    },

    /**
     * Provides text for footer information
     * @memberOf CN.schemaParser.schemas
     * @param    {Object} dct     A json object
     * @param    {Object} methods The methods for this schema parser
     * @return   {Object}         The modified methods for this schema parser
     */
    footer : function(dct, methods) {
        methods.footerText = function() { return dct.footer.text || ''; };
        methods.footerLegalCopy = function() { return dct.footer.legalCopy || ''; };
        return methods;
    },

    /**
     * Photos need to be available directly. We create as many methods
     * as we have image replicants, and delegate for annotations
     * if they exist.
     * @memberOf CN.schemaParser.schemas
     * @param    {Object} dct     A json object
     * @param    {Object} methods The methods for this schema parser
     * @return   {Object}         The modified methods for this schema parser
     */
    photo : function(dct, methods) {
        methods.photo = {};
        var i,
            il,
            images        = dct.photo.images.image,
            thisImage,
            thisSource,
            that          = this,
            templateToUse = CN.schemaParser.templates && CN.schemaParser.templates.annotations ?
                CN.schemaParser.templates.annotations :
                CN.schemaParser.defaultTemplates.annotations;

        if (Object.prototype.toString.call(images) === '[object Array]') {
            for (i = 0, il = images.length; i < il; i++) {
                (function() { // scope for i
                    var image = images[i];
                    methods.photo[image.type] = function() {
                        return image.source;
                    };
                    methods.photo[image.type].annotations = function() {
                        return templateToUse(image);
                    };
                })();
            }
        } else {
            methods.photo[images.type] = function() {
                return images.source;
            };
            methods.photo[images.type].annotations = function() {
                return templateToUse(images);
            };
        }

        methods.photo.alt = function() { return dct.photo.altText; };
        methods.photo.caption = function() { return dct.photo.caption; };
        methods.photo.credit = function() { return dct.photo.credit; };
        methods.photo.url = function() { return dct.photo.URL; };

        return methods;
    },

    /**
     * This creates a complete object for all mediaItem replicants in a given
     * DCT. For now, going to do one big method and possibly refactor later.
     * Differs from photo in that the method is mediaItems() rather than adding
     * methods for caption(), credit() etc. Those become simply properties on
     * the return object from mediaItems().
     * @memberOf CN.schemaParser.schemas
     * @param    {Object} dct     A json object containing mediaItems
     * @param    {Object} methods The methods for this schema parser
     * @return   {Object}         The modified methods for this schema parser
     */
    mediaItems : function(dct, methods) {
        var that = this,
            templateToUse = CN.schemaParser.templates && CN.schemaParser.templates.annotations ?
                CN.schemaParser.templates.annotations :
                CN.schemaParser.defaultTemplates.annotations;

        // TODO: memoize some shizz
        /*
            Returns an array of mediaItem
            @param placement {String|null}   The placement property to match
            @param type      {String|null}   The mediaItem type to match
            @param sequence  {Number|String} Which mediaItem to use, or "all"
        */
        methods.mediaItems = function(placement, type, sequence) {
            placement = placement || null;
            type      = type      || null;
            sequence  = sequence  || 0;

            var results    = [],
                result     = null,
                mediaItems = dct.mediaItems.mediaItem,
                i, il,
                j, jl,
                props,
                formats;

            if (Object.prototype.toString.call(mediaItems) === '[object Array]') {
                for (i = 0, il = mediaItems.length; i < il; i++) {
                    results[i] = mediaItems[i];
                }
            } else {
                results[0] = mediaItems;
            }

                    // Filters results by placement
            if (placement !== null) {
                results = results.filter(function(res) {
                    props = res.properties && res.properties.property ?
                        CN.utils.mapPropertyArray(res.properties.property) :
                        false;
                    return props.placement && props.placement === placement ?
                        true :
                        false;
                });
            }

                    // Filters results by type
            if (type !== null) {
                results = results.filter(function(res) {
                    return res.type === type ? true : false;
                });
            }

                    // If we want "all", set result = results, else filter to
                    // one result matching the sequence provided
                    // Either way, result is an array of 1+ or null
            result = (sequence === 'all') ? results : ([results[sequence]] || null);

            if (result) {

                for (i = 0, il = result.length; i < il; i++) {
                            // Handle formats
                    if (result[i].formats && result[i].formats.format) {
                        formats = result[i].formats.format;
                        if (Object.prototype.toString.call(formats) === '[object Array]') {
                            for (j = 0, jl = formats.length; j < jl; j++) {
                                (function() { // scope for i
                                    var format = formats[j];
                                    result[i][format.name] = function() {
                                        return format.source;
                                    };
                                    result[i][format.name].annotations = function() {
                                        return templateToUse(format);
                                    };
                                })();
                            }
                        } else {
                            result[i][formats.name] = function() {
                                return formats.source;
                            };
                            result[i][formats.name].annotations = function() {
                                return templateToUse(formats);
                            };
                        }
                    }

                    result[i].getProperties = function() {
                        return result.properties && result.properties.property ?
                            CN.utils.mapPropertyArray(result.properties.property) :
                            false;
                        };
                }
            }

            return result;
        };

        return methods;
    },

    /**
     * Provides html text for rubric information
     * @memberOf CN.schemaParser.schemas
     * @param    {Object} dct     A json unitMetaData object
     * @param    {Object} methods The methods for this schema parser
     * @return   {Object}         The modified methods for this schema parser
     */
    rubric : function(dct, methods) {
        if (dct.rubric) {
            var ret = '',
                alt = '',
                img = '';

            if (dct.rubric.graphic) {
                alt = dct.rubric.graphic.altText || '';
                img = '<img src="' + dct.rubric.graphic.image + '" alt="' + alt + '" />';
                if (dct.rubric.graphic.URL) {
                    ret = '<a href="' + dct.rubric.graphic.URL + '">' + img + '</a>';
                } else {
                    ret = img;
                }
            } else {
                if (dct.rubric.html.URL) {
                    ret += '<a href="' + dct.rubric.html.URL + '">' + dct.rubric.html.text + '</a>';
                } else {
                    ret += dct.rubric.html.text;
                }
            }
            methods.rubric = function() { return ret; };
        }
        return methods;
    },

    /**
     * Provides an object for contributor information, rather than
     * html text directly. This allows the template for contributors
     * to be overridden in the implementation code.
     * @memberOf CN.schemaParser.schemas
     * @param    {Object} dct     A json object
     * @param    {Object} methods The methods for this schema parser
     * @return   {Object}         The modified methods for this schema parser
     */
    byline : function(dct, methods) {
        if (dct.byline && dct.byline.contributors) {
            var ret = CN.schemaParser.templates && CN.schemaParser.templates.contributors ?
                CN.schemaParser.templates.contributors(dct.byline.contributors.contributor) :
                CN.schemaParser.defaultTemplates.contributors(dct.byline.contributors.contributor);
            methods.contributors = function() { return ret; };
        }
        return methods;
    },

    /**
     * Provides a date string for html insertion.
     * @memberOf CN.schemaParser.schemas
     * @param    {Object} dct     A json object
     * @param    {Object} methods The methods for this schema parser
     * @return   {Object}         The modified methods for this schema parser
     */
    displayDate : function(dct, methods) {
        if (dct.displayDate.date) {
            methods.displayDate = function() {
                var date = new Date(CN.date.isoToDate(CN.date.convertIwDateToIso(dct.displayDate.date)));
                return CN.date.format(date, dct.displayDate.format || 'MMMM yyyy');
            };
        }
        return methods;
    },

    /**
     * Provides text for photo credit information.
     * @memberOf CN.schemaParser.schemas
     * @param    {Object} dct     A json object
     * @param    {Object} methods The methods for this schema parser
     * @return   {Object}         The modified methods for this schema parser
     */
    photoCredits : function(dct, methods) {
        if (dct.photoCredits) {
            methods.photoCredits = function() { return dct.photoCredits; };
        }
        return methods;
    },

    /**
     * Provides text for embedded list information.
     * @memberOf CN.schemaParser.schemas
     * @param    {Object} dct     A json object
     * @param    {Object} methods The methods for this schema parser
     * @return   {Object}         The modified methods for this schema parser
     */
    embeddedList : function(dct, methods) {
        if (dct.embeddedList) {
            var list = '<ul class="embedded-list">',
                listItem,
                i,
                il;

            if (Object.prototype.toString.call(dct.embeddedList.listItem) === '[object Array]') {
                for (i = 0, il = dct.embeddedList.listItem.length; i < il; i++) {
                    (function() { // scope for i
                        var newItem = '<li>' + dct.embeddedList.listItem[i] + '</li>';
                        list += newItem;
                    })();
                }
            } else {
                list += '<li>' + dct.embeddedList.listItem + '</li>';
            }

            list += '</ul>';
            methods.embeddedList = function() { return list; };
        }
        return methods;
    },

    /**
     * Provides video id for video slides in slideshow.
     * @memberOf CN.schemaParser.schemas
     * @param    {Object} dct     A json object
     * @param    {Object} methods The methods for this schema parser
     * @return   {Object}         The modified methods for this schema parser
     */
    altMedia : function(dct,methods){
            methods.altMedia = {};
            methods.altMedia['type'] =  dct.altMedia.type;
            var itemProps = {};
            if(dct.altMedia.properties && dct.altMedia.properties.property){
                itemProps = CN.utils.mapPropertyArray(dct.altMedia.properties.property);

                if(itemProps.id){
                    methods.altMedia['videoID']= function(){
                        return itemProps.id;
                    };
                }

                if(itemProps.playerID) {
                    methods.altMedia['playerID'] = function() {
                        return itemProps.playerID;
                    }
                }
            }
        return methods;
    }
};


/**
 * Default HTML templates for content that can have custom HTML per site,
 * but that we want to provide a baseline template for.
 *
 * @property defaultTemplates
 * @static
 */
CN.schemaParser.defaultTemplates = {

    /**
     * Pass in a photo, get annotations. This is coupled to the
     * jquery.annotations.js plugin. We assume that the top/left data is
     * provided correctly by the DCT. Because it can't be accessed directly,
     * it's set as a template object so both photo and mediaItems can call it
     * and get HTML.
     *
     * @memberOf CN.schemaParser.defaultTemplates
     * @requires jquery.annotations.js
     * @param    {Object} dct       A json photo (or format) object
     * @return   {String}           Annotations HTML for DOM insertion
     */
    annotations : function(dct) {
        var i,
            il,
            html = '',
            props;

        if (dct.annotations) {

            html += '<ul class="annotations">';

            if (Object.prototype.toString.call(dct.annotations.annotation) === '[object Array]') {
                        // if array
                for (i = 0, il = dct.annotations.annotation.length; i < il; i++) {
                    props = CN.utils.mapPropertyArray(dct.annotations.annotation[i].properties.property);
                    html += '<li class="annotation" data-left="';
                            html += props.left;
                            html += '" data-top="';
                            html += props.top;
                            html += '">';
                        html += '<a href="#" class="annotation-trigger">Note:</a>';
                        html += '<div class="annotation-content">';
                            html += dct.annotations.annotation[i].body.text;
                        html += '</div>';
                    html += '</li>';
                }
            } else {
                        // if object
                props = CN.utils.mapPropertyArray(dct.annotations.annotation.properties.property);
                html += '<li class="annotation" data-left="';
                        html += props.left;
                        html += '" data-top="';
                        html += props.top;
                        html += '">';
                    html += '<a href="#" class="annotation-trigger">Note:</a>';
                    html += '<div class="annotation-content">';
                        html += dct.annotations.annotation.body.text;
                    html += '</div>';
                html += '</li>';
            }

            html += '</ul>';
        }

        return html;
    },

    /**
     * Returns HTML for contributors as a default template,
     * can be overridden in the implementation code.
     *
     * @param  {Object} dct A json object of contributors
     * @return {String}     The contributors HTML for DOM insertion
     */
    contributors : function(dct) {
        var i,
            il,
            html = '';

        html += '<div class="contributors">';

        if (Object.prototype.toString.call(dct) === '[object Array]') {
            for (i = 0, il = dct.length; i < il; i++) {
                (function() { // scope for i
                    var contributor = dct[i];
                    html += '<p><span class="contributor">';
                        html += contributor.label ? '<span class="label">' + contributor.label + '</span> ' : '';
                        html += contributor.name ? '<span class="name">' + contributor.name + '</span>' : '';
                    html += '</span></p>';
                })();
            }
        } else {
            html += '<p><span class="contributor">';
                html += dct.label ? '<span class="label">' + dct.label + '</span> ' : '';
                html += dct.name ? '<span class="name">' + dct.name + '</span>' : '';
            html += '</span></p>';
        }

        html += '</div>';

        return html;
    }
};
