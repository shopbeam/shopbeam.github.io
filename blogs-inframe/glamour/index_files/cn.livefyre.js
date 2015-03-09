/* globals CN:true, jQuery, window, fyre */

/**
 * glamour livefyre.js
 * Written for Glamour's livefyre implementation.
 * @requires CN, jQuery, livefyre(fyre)
 * @author Robert Sethi
 * @edited by Sean Mize
 */

// Adds livefyre to the CN Namespace
CN.livefyre = CN.livefyre || {};

CN.livefyre.main = (function($, fyre, configOptions) {
    "use strict";

    var
    hasStream = false,
    hasComments = false,

    mostpopularEntries = configOptions.mostpopularEntries,
    mostpopularAge = configOptions.mostpopularAge,
    moderatorFlagText = "glamour",
    streams = configOptions.streams,

    globalConfig = {
        network : configOptions.network,
        strings : { moderator : moderatorFlagText }
    },
    localConfig = [],
    pageConfig = configOptions.pageConfig,
    sdkConfig = { app : "sdk" },

    lfCookieName = configOptions.lfCookieName,
    userCookieName = 'amg_user',
    logoutCookies = [lfCookieName, userCookieName, 'at', 'amg_user_identity', 'amg_user_partner', 'amg_user_record'],
    userToken = CN.cookie.get(lfCookieName),
    deleteCookieObj = { encode: false, path: '/', expires: -1 },
    setCookieObj = { encode: false, path: '/', expires: 365*300 },
    expires = 365*300,
    loggedIn = false,
    authDelegate = {},
    delegateObj,
    domain,
    gatewayHandler,

    init = function() {
        hasStream = (jQuery(".stream").length !== 0) ? true : false;
        hasComments = (jQuery("#livefyre").length !== 0) ? true : false;

        if (hasComments) {
            gatewayHandler = new RegisteredGateway("/user/login", "/user/registration");
            authDelegate = new fyre.conv.RemoteAuthDelegate();
            globalConfig.authDelegate = authDelegate;
            pageConfig.XX_UseSeamlessEditor = true; // Fix Provided for Editor in IE
            pageConfig.disableAvatars = true; // Prevent avatars from being loaded

            localConfig.push(pageConfig);

        }

        if (hasStream) {
            if (CN.page.type === "ArticleV2" && (streams.length < jQuery(".stream[data-livefyre-articleid").length)) {
                // TODO: Fallback for .stream divs in blog posts.
                // Collect those divs and append {articleId: "foo-123"[, count: n ]} object(s) to streams[] array
            }

            localConfig.push(sdkConfig);
        }
    },


    // Initialize comments and/or social stream(s)
    loadLivefyre = function() {

        fyre.conv.load(
            globalConfig,
            localConfig,
            function () {
                var widget = hasComments ? arguments[0] : null,
                    sdk = null;

                if (hasComments) {
                    sdk = hasStream ? arguments[1] : null;
                } else {
                    sdk = hasStream ? arguments[0] : null;
                }

                if (hasComments) {
                    deleteCookieObj.domain = setCookieObj.domain = '.'+CN.site.domain;

                    if (loggedIn) {
                        CN.livefyre.main.doLivefyreAuth();
                    } else {
                        CN.cookie.del(lfCookieName, deleteCookieObj);
                    }

                    widget.on('commentCountUpdated', CN.livefyre.commentCountSyncReplace);
                    widget.on('commentPosted', CN.livefyre.main.updateCommenterTags);
                    widget.on('initialRenderComplete', CN.livefyre.main.doLFLoadInit);
                }

                if (hasStream) {
                    var collections = new Array();

                    for (var x = 0 in streams) {
                        var collection = sdk.getCollection({
                                siteId: pageConfig.siteId,
                                articleId: streams[x].articleId
                            }),
                            count = streams[x].count,
                            hasData = false;

                        collection.getInitialData(makeCollectionHTML(collection, count), errorCollectionHTML(streams[x].articleId));

                        collections[x] = collection;
                    }
                }

                function makeCollectionHTML(collection, count) {
                    var articleId = collection.opts.articleId,
                        count = count || 3;

                    function reverseChronoSort(a, b) {
                        return a.createdAt < b.createdAt ? 1 : -1;
                    }

                    return function(data) {
                        if (!jQuery.isEmptyObject(data.public)) {
                            var sortedList = [];

                            for (var item in data.public) {
                                var createdAt = data.public[item].content.createdAt;

                                if (typeof createdAt !== "undefined") {
                                    sortedList.push({
                                        itemId: item,
                                        createdAt: createdAt
                                    });
                                }
                            }

                            sortedList.sort(reverseChronoSort);

                            var ejsTemplate = document.getElementById("stream-template").innerHTML;
                            var ejsHtml = ejs.render(ejsTemplate, {
                                collection: collection,
                                sortedList: sortedList,
                                items: data.public,
                                count: count,
                                open: "[%",
                                close: "%]"
                            });

                            jQuery("[data-livefyre-articleid=\"" + articleId + "\"]" ).append(ejsHtml).show();
                        }
                    }
                }

                function errorCollectionHTML(articleId) {
                    return function(data) {
                        console.log("StreamHub: Error getting collection for articleId: " + articleId);
                    }
                }
            }
        );



        authDelegate.login = function (delegate) {
            delegateObj = delegate;

            if (!loggedIn){
                CN.lightReg.showForm('Login');
            } else {
                userToken = CN.cookie.get(lfCookieName);
                CN.cookie.del(lfCookieName, deleteCookieObj);
                CN.cookie.set(lfCookieName,userToken, setCookieObj);
                CN.livefyre.main.doLivefyreAuth();
                return true;
            }
        };

        authDelegate.logout = function () {
            var livefyreDOMObj = jQuery("#"+CN.livefyre.configOptions.pageConfig.el);

            for(var ind=0; ind<logoutCookies.length; ind++){
                CN.cookie.del(logoutCookies[ind], deleteCookieObj);
            }

            if(livefyreDOMObj.length !== 0) {
                livefyreDOMObj.append("<iframe id=\"livefyre_logout_submit\" src=\"/user/logout\" onload=\"window.location.reload();\" name=\"livefyre_logout_submit\" width=\"200\" border=\"0\" height=\"300\"></iframe>");
            }
            return true;
        };
    },

    /**
     *  @private
     *  Checks the Users login state.
     */
    LoggedIn = function(cookie_name) {
        var nameEQ = cookie_name + "=";
        var ca = document.cookie.split(';');
        for (var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return true;
        }
        return false;
    },

    /**
     *  @private
     *  Sets the document.domain to the correct value
     *  and returns to caller for storage
     */
    setDomain = function() {
        return CN.url.domain()
    };

    return {
        loadLivefyre: function() {
            loadLivefyre();
            return this;
        },
        loader : function () {
            init();
            if (hasComments) {
                loggedIn = LoggedIn(userCookieName); //check the user state again when DOM ready... just in case.
                domain = setDomain();
                gatewayHandler.init();
            }
            if (hasComments || hasStream) {
                loadLivefyre();
            }
            return this;
        },

        doLivefyreAuth : function() {
            var cval = userToken = CN.cookie.get(lfCookieName);

            if (cval) {
                try {
                    fyre.conv.login(cval);

                    if(delegateObj) {
                        delegateObj.success();
                    }
                } catch (e) {
                }
            }
        },

        getDelegateObj : function() {
            return delegateObj;
        },

        updateCommenterTags : function() {
            // Add "Top Commenter" Tag for Top Commenters
            $(".fyre .fyre-comment-author-tag-power_commenter .fyre-comment-username").each(function(){
                var topCommenterObj = $(this).parent().find('.fyre-power-commenter');

                if(topCommenterObj.length === 0) {
                    $(this).after("<span class='fyre-power-commenter'><div class='arrow-pointer'></div>Top Commenter</span>");
                }
            });

            // Add "Glamour" Tag for Editors
            $(".fyre .fyre-comment-author-tag-editorial .fyre-comment-username").each(function(){
                var glamModeratorObj = $(this).parent().find('.fyre-moderator');

                if(glamModeratorObj.length === 0) {
                    $(this).after("<span class='fyre-user-level fyre-glm-mod-custom fyre-moderator'>"+ moderatorFlagText +"</span>");
                }
            });
            return this;
        },

        doLFLoadInit : function() {
            // Update comment count and make it in sync with the livefyre comments. Fix for GLM-724
            var commentCountUpdate = setInterval(function() {
                var lfWidgetCommentCountString = $(".fyre .fyre-comment-count span").html(),
                    lfWidgetCommentCount,
                    commentCountPatt = /comment/gi;

                if (lfWidgetCommentCountString && commentCountPatt.test(lfWidgetCommentCountString)) {
                    var commentBubbleCount = $(".commentCountValue").eq(0).html();
                    lfWidgetCommentCount = lfWidgetCommentCountString.split(" ");

                    if (lfWidgetCommentCount[0] === commentBubbleCount) {
                        clearInterval(commentCountUpdate);
                    } else {
                        $(".commentCountValue").html(lfWidgetCommentCount[0]);
                    }
                }
            }, 500);

            CN.livefyre.main.updateCommenterTags();
            return this;
        }
    };
}(jQuery, fyre, CN.livefyre.configOptions));


/*
 * Start: Code for comment count
 */
CN.livefyre.commentCountSyncReplace = function(data) {
    var elements = document.getElementsByClassName('comment-count-social');

    if (elements.length > 0) {
        for (var i = 0, max = elements.length; i < max; i++) {
            var ccElements = elements[i].getElementsByClassName('commentCountValue');
            if (ccElements.length > 0) {
                ccElements[0].innerHTML = CN.livefyre.commentCountAbbreviate(data);
            }
        }
    }
}

CN.livefyre.commentCountAbbreviate = function (count) {
    var number= count;
    try {
        var decPlaces = 0;

        if (number > 999) {
            decPlaces = 2;
        }
        // 2 decimal places => 100, 3 => 1000, etc
        decPlaces = Math.pow(10,decPlaces);

        // Enumerate number abbreviations
        var abbrev = [ "k", "m", "b", "t" ];

        // Go through the array backwards, so we do the largest first
        for (var i=abbrev.length-1; i>=0; i--) {

            // Convert array index to "1000", "1000000", etc
            var size = Math.pow(10,(i+1)*3);

            // If the number is bigger or equal do the abbreviation
            if(size <= number) {
                // Here, we multiply by decPlaces, round, and then divide by decPlaces.
                // This gives us nice rounding to a particular decimal place.
                number = Math.round(number*decPlaces/size)/decPlaces;

                // Add the letter for the abbreviation
                number += abbrev[i];

                // We are done... stop
                break;
            }
        }
    } catch(err) {
        number = count;
    }
    return number;
}

CN.livefyre.commentCountStyle = function() {
    LF.CommentCount({
        replacer: function(element, count) {
            element.innerHTML = '<div class="comments-button">' + 'Comment'+ (count === 1 ? '' : 's') + '</div>' + '<div class="bubble"> <div class="commentCountValue">' + CN.livefyre.commentCountAbbreviate(count) +'</div><div class="bubble-arrow-border"></div> <div class="bubble-arrow"></div></div>';
        }
    });
}

/*
 * end: Code for comment count
 */

/*
 * Start: Code for most commented
 */

CN.livefyre.widgets = function (tarDiv) {
    var me = this,
        tarEl = false;
    me.tarDiv = tarDiv;

    CN.livefyre.widgets.prototype.init = function () {
        if (!document.domain) document.domain = CN.url.domain();
        return this;
    }

    function getContainer() {
        if (tarEl) return tarEl;
        tarEl = (typeof me.tarDiv === 'string' && me.tarDiv.length > 0 ? (document.getElementById(me.tarDiv) || false) : (me.tarDiv["selector"] ? tarDiv.get(0) : false));
        return tarEl;
    }

    function renderToContainer(html) {
        getContainer()["selector"] ? getContainer().html(html) : getContainer().innerHTML = html;
    }

    function showContainer() {
        getContainer().style.display = 'block'
        getContainer().className.replace(/\s+(hidden)(?!\S)\s*|^(hidden)(?!\S)/g, '');
    }

    function discoveryArticle(config) {
           serviceUrl =  CN.livefyre.trendingUrl
                            + '&number='
                            + CN.livefyre.mostCommentedEntries
                            + '&tag='
                            + CN.livefyre.commentsEnabledTag;
           jQuery.getJSON(serviceUrl, function(data) {
              config.cbHandler(data.data);
          });
    }

    CN.livefyre.widgets.prototype.discoveryArticle = function (config) {
        discoveryArticle(config);
    }

    CN.livefyre.widgets.prototype.renderCommentedRail = function (articles) {
        if (getContainer()) {
            var html = '',
                li = 0,
                len = articles.length || 0,
                article;
            for (; li < len && li < 5; li++) {
                article = articles[li];
                article.url = (article.url || "").replace(/https?:\/\/[^/]*/, '');
                if (article.title && /\w+/.test(article.title)) {
                    html += mostCommentedHTML(article, li);
                }
            }
            renderToContainer(html);
            showContainer();
            //CN.dart.call('mostpopular'+ me.tarDiv, {sz:'300x250', kws:['bottom']});
        } else {
            return false;
        }
    }

    CN.livefyre.widgets.prototype.mostCommented = function () {
        var config = {
            activity: "Commented",
            resultCount: CN.livefyre.mostCommentedEntries,
            cbHandler: me.renderCommentedRail,
            resultAge: CN.livefyre.mostCommentedEntries
        }
        discoveryArticle(config);
    }

    function mostCommentedHTML(article, i) {
        var html = "";

        if (article.title != null && article.articleId != 'true') {
           var trimmedTitle = article.title.replace(/^\s+|\s+$/g, '');
           var className="odd";
            if(i % 2 !=0){
                className="even";
            }
            if(i == 0 || i == 2 ){
                html +='<div class="row-'+i+'">';
            }

            var articleUrl = '';
            var imageUrl = '';
            var imageUrlParameter = "?imageUrl=";
            var n=article.url.indexOf(imageUrlParameter);
            if(n > -1){
                articleUrl = article.url.substring(0,n);
                imageUrl = article.url.substring(n + imageUrlParameter.length ,article.url.length);
            } else {
                articleUrl = article.url;
            }

            if(imageUrl == null || imageUrl.length == 0) {
              imageUrl = "/css/img/PlaceHolder116.jpg";
            }

            if (trimmedTitle != '' && article.url != ''){
                html += '<div  class="'+className+'"><a href="' + articleUrl + '">  <img src="' + imageUrl +'" /> </a><a href="' + articleUrl + '"> <span class="color'+i+'">'+(i+1)+'.</span>'+unescape(trimmedTitle)+'</a></div>';
            }

            if(i == 1 || i == 3 ){
                html +='</div>';
            }

        }



        return html;
    }
}
/*
 * End: Code for most commented
 */


