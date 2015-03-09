/*globals CN:true, jQuery, window, fyre, LF */

/**
 * livefyre.js
 * Written for cn-fe-content livefyre implementation.
 * @requires CN, jQuery, livefyre(fyre), RegisteredGateway(from Pluck module)
 * @author Robert Sethi
 */

// Adds livefyre to the CN Namespace
CN.livefyre = CN.livefyre || {};

if (typeof fyre === 'undefined' || !fyre)  {
    var fyre = {};
}

CN.livefyre.main = (function($, fyre, config) {
   "use strict";

    if (typeof fyre.conv === 'undefined') {
        return false;
    }

    var
    configOptions = config || CN.livefyre.configOptions || {},
    mostpopularEntries = configOptions.mostpopularEntries,
    mostpopularAge = configOptions.mostpopularAge,
    lfCookieName = configOptions.lfCookieName,
    userCookieName = 'amg_user',
    logoutCookies = [lfCookieName, userCookieName, 'at', 'amg_user_identity', 'amg_user_partner', 'amg_user_record'],
    userToken = CN.cookie.get(lfCookieName),
    pageConfig = configOptions.pageConfig,
    network = configOptions.network,
    authDelegate = new fyre.conv.RemoteAuthDelegate(),
    deleteCookieObj = { encode: false, path: '/', expires: -1 },
    setCookieObj = { encode: false, path: '/', expires: 365*300 },
    expires = 365*300,
    loggedIn = false,
    entryElement = '',
    domain,
    delegateObj,
    moderatorFlagText = configOptions.moderatorFlagText || "moderator",
    setEntryElement = function(e) {
      entryElement = $(e.currentTarget);
    },

    // initialize the comment stream
    loadLivefyre = function(){
         var customStrings = {moderator : moderatorFlagText}, signInBtn, postBtn;
         if (typeof(pageConfig) == 'undefined') {
               pageConfig = CN.livefyre.configOptions.pageConfig;
         }
         pageConfig.XX_UseSeamlessEditor = true; // Fix Provided for Editor in IE
         pageConfig.disableAvatars = true;
         pageConfig.postToButtons = ['tw', 'fb']; // see doc: https://github.com/Livefyre/livefyre-docs/wiki/Comments-3-%22Post-to%22-Button-Customization
         fyre.conv.load({
            network: network,
            authDelegate: authDelegate,
            strings: customStrings
            },
            [pageConfig],
            function (widget) {
                deleteCookieObj.domain = setCookieObj.domain = '.'+CN.site.domain;
               if(loggedIn) {
                  CN.livefyre.main.doLivefyreAuth();
               } else {
                  CN.cookie.del(lfCookieName, deleteCookieObj);
               }
               widget.on('commentCountUpdated', CN.livefyre.commentCountSyncReplace);
               widget.on('commentPosted', function(){
                     CN.livefyre.main.updateCommenterTags();
                     CN.stats.omniture.trackAction('comment',this);
                  });
               widget.on('initialRenderComplete', function(){
                   var lfElem = $(window.document.body).find('.container .social-comments #livefyre');
                   CN.livefyre.main.doLFLoadInit();
                   CN.livefyre.main.onFocusTracking();
                   lfElem.find('.fyre-auth .fyre-user-loggedout').on('mouseenter', setEntryElement);
                   lfElem.find('.fyre-editor .goog-toolbar > div').on('mouseenter', setEntryElement);

                   jQuery(window).on('$event:lightRegShow', function(e, params) {
                       CN.site.views.lightreg.show({currentTrigger: params.currentTrigger ? params.currentTrigger : $('.fyre-auth .fyre-user-loggedout')});
                   });

                   $.subscribe(CN.site.views.lightreg.AUTH_SUCCESS, function(e, promise) {
                       CN.livefyre.main.doLivefyreAuth();
                   });

               });
            }
         );

       authDelegate.login = function (delegate) {
            delegateObj = delegate;

            if (!loggedIn){
                // for browers with full CORS support (that means it can use a PUT, sorry IE8/9)

                if (jQuery.support.cors && jQuery.support.leadingWhitespace) {
                    jQuery(window).trigger('$event:lightRegShow', {currentTrigger: entryElement}).bind('$event:lightRegHide', function() {
                        if (!loggedIn) {
                            delegateObj.failure();
                        }
                        jQuery(window).unbind('$event:lightRegHide');
                    });
                } else {
                    var  url = '/user/login';
                    if (platformEnvironment !== 'development') {
                       url = 'https://' + CN.config.get('secureHost') + url;
                    }
                    $('<form action="'+url+'" method="post"></form>').appendTo('body')[0].submit();
                }
            } else {
               userToken = CN.cookie.get(lfCookieName);
               CN.cookie.del(lfCookieName, deleteCookieObj);
               CN.cookie.set(lfCookieName,userToken, setCookieObj);
               CN.livefyre.main.doLivefyreAuth();
               return true;
            }
        };

        authDelegate.logout = function () {
            var livefyreDOMObj = jQuery("#"+CN.livefyre.configOptions.pageConfig.el), ind;
            for (ind=0; ind < logoutCookies.length; ind++) {
               CN.cookie.del(logoutCookies[ind], deleteCookieObj);
            }
            if(livefyreDOMObj.length !== 0) {
               livefyreDOMObj.append("<iframe id=\"livefyre_logout_submit\" src=\"/user/logout\" onload=\"window.location.reload();\" name=\"livefyre_logout_submit\" width=\"200\" border=\"0\" height=\"300\"></iframe>");
            }
            return true;
        };

        authDelegate.editProfile = function () {
            window.location = '/user/update';
            return true;
        };

    },

    /**
     *  @private
     *  Checks the Users login state.
     */
     LoggedIn= function(cookie_name) {
        var nameEQ = cookie_name + "=",
            ca = document.cookie.split(';'),
            i, c;
        for (i=0; i<ca.length; i++) {
            c = ca[i];
            while (c.charAt(0) === ' ') {
               c = c.substring(1,c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
               return true;
            }
        }
        return false;
    },

   /**
     *  @private
     *  Sets the document.domain to the correct value
     *  and returns to caller for storage
     */
    setDomain = function() {
        return CN.url.domain();
    };

    return {

      loadLivefyre:  function(){
          loadLivefyre();
          return this;
      },

      loader : function (){
         loggedIn = LoggedIn(userCookieName); //check the user state again when DOM ready... just in case.
          domain = setDomain();
          return this;
      },

      onFocusTracking : function(){
         var ua = navigator.userAgent.toLowerCase();

         setTimeout( function(){

            if( ua.indexOf('msie') !== -1 ? true : false ){
               $(".fyre-editor-editable").bind("mousedown", function(){
                   //Damm you IE Add Omniture On Focus Tracking Event
                   CN.stats.omniture.trackAction('commentFocus',this);
               });
            }
            else
            {
               $(".fyre-editor-editable iframe").contents().bind("click", function(e) {
                 //Add Omniture On Focus Tracking Event
                  CN.stats.omniture.trackAction('commentFocus',this);
               });
            }
         }, 500);
      },

      doLivefyreAuth : function() {
         var cval = CN.cookie.get(lfCookieName);
         userToken = cval;
         if (cval) {
            try {
               fyre.conv.login(cval);
               if(delegateObj){
                  delegateObj.success();
               }
            } catch (e) {
            }
         }
      },

      getDelegateObj : function(){
         return delegateObj;
      },

      updateCommenterTags : function(){
         // Add "Top Commenter" Tag for Top Commenters
         $(".fyre .fyre-comment-author-tag-power_commenter .fyre-comment-username").each(function(){
            var topCommenterObj = $(this).parent().find('.fyre-power-commenter');
            if(topCommenterObj.length === 0){
               $(this).after("<span class='fyre-power-commenter'><div class='arrow-pointer'></div>Top Commenter</span>");
            }
         });

         // Add moderator's Tag for Editors
         $(".fyre .fyre-comment-author-tag-editorial .fyre-comment-username").each(function(){
            var glamModeratorObj = $(this).parent().find('.fyre-moderator');
            if(glamModeratorObj.length === 0){
               $(this).after("<span class='fyre-user-level fyre-glm-mod-custom fyre-moderator'>"+ moderatorFlagText +"</span>");
            }
         });
         return this;
      },

      doLFLoadInit  :  function(){
         // Update comment count and make it in sync with the livefyre comments. Fix for GLM-724
         var commentCountUpdate = setInterval(function() {
                                                            var lfWidgetCommentCountString = $(".fyre .fyre-comment-count span").html(),
                                                               lfWidgetCommentCount,
                                                               commentCountPatt = /comment/gi,
                                                               commentBubbleCount;
                                                            if(lfWidgetCommentCountString && commentCountPatt.test(lfWidgetCommentCountString)){
                                                               commentBubbleCount = $(".commentCountValue").eq(0).html();
                                                               lfWidgetCommentCount = lfWidgetCommentCountString.split(" ");
                                                               if(lfWidgetCommentCount[0] === commentBubbleCount) {
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
    var ccAbbr = CN.livefyre.commentCountAbbreviate(data);

    jQuery(".commentCountValue").html(ccAbbr);

};

CN.livefyre.commentCountAbbreviate = function (count) {
    var number= count, abbrev, size, i, decPlaces;
    try {
        decPlaces = 0;
        if(number > 999){
            decPlaces = 2;
        }
        // 2 decimal places => 100, 3 => 1000, etc
        decPlaces = Math.pow(10,decPlaces);

        // Enumerate number abbreviations
        abbrev = [ "k", "m", "b", "t" ];

        // Go through the array backwards, so we do the largest first
        for (i=abbrev.length-1; i>=0; i--) {

            // Convert array index to "1000", "1000000", etc
            size = Math.pow(10,(i+1)*3);

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
    } catch(err){
        number = count;
    }
    return number;
};


CN.livefyre.commentCountStyle = function () {
    LF.CommentCount({
        replacer: function(element, count) {
            element.innerHTML = '<a href="#social-comments"><div class="comments-button">' + 'Comment'+ (count === 1 ? '' : 's') + '</div>' + '<div class="bubble"> <div class="commentCountValue">' + CN.livefyre.commentCountAbbreviate(count) +'</div><div class="bubble-arrow-border"></div> <div class="bubble-arrow"></div></div></a>';
        }
    });
};

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
            if (!document.domain) {
                document.domain = CN.url.domain();
            }
            return this;
        };

        function getContainer() {
            if (tarEl) {
                return tarEl;
            }
            tarEl = (typeof me.tarDiv === 'string' && me.tarDiv.length > 0 ? (document.getElementById(me.tarDiv) || false) : (me.tarDiv["selector"] ? tarDiv.get(0) : false));
            return tarEl;
        }

        function renderToContainer(html) {
            getContainer()["selector"] ? getContainer().html(html) : getContainer().innerHTML = html;
        }

        function showContainer() {
            getContainer().style.display = 'block';
            getContainer().className.replace(/\s+(hidden)(?!\S)\s*|^(hidden)(?!\S)/g, '');
        }

        function discoveryArticle(config) {
               var serviceUrl =  CN.livefyre.trendingUrl
                                + '&number='
                                + CN.livefyre.mostCommentedEntries;
               jQuery.getJSON(serviceUrl, function(data) {
                  config.cbHandler(data.data);
              });
        }

        CN.livefyre.widgets.prototype.discoveryArticle = function (config) {
            discoveryArticle(config);
        };

        CN.livefyre.widgets.prototype.renderCommentedRail = function (articles) {
            if (getContainer()) {
                var html = '',
                    li = 0,
                    len = articles.length || 0,
                    article;
                for (len; li < len && li < 5; li++) {
                    article = articles[li];
                    article.url = (article.url || "").replace(/https?:\/\/[^/]*/, '');
                    if (article.title && /\w+/.test(article.title)) {
                        html += mostCommentedHTML(article, li);
                    }
                }
                renderToContainer(html);
                showContainer();
            } else {
                return false;
            }
        };

        CN.livefyre.widgets.prototype.mostCommented = function () {
            var config = {
                activity: "Commented",
                resultCount: CN.livefyre.mostCommentedEntries,
                cbHandler: me.renderCommentedRail,
                resultAge: CN.livefyre.mostCommentedEntries
            };
            discoveryArticle(config);
        };

        function mostCommentedHTML(article, i) {
            var html = "", trimmedTitle, className, articleUrl, imageUrl, imageUrlParameter, n, j;

            if (article.title != null && article.articleId !== 'true') {
               trimmedTitle = article.title.replace(/^\s+|\s+$/g, '');
               className="odd";
                if(j % 2 !=0){
                    className="even";
                }
                if(j === 0 || j === 2 ){
                    html +='<div class="row-'+j+'">';
                }

                articleUrl = '';
                imageUrl = '';
                imageUrlParameter = "?imageUrl=";
                n=article.url.indexOf(imageUrlParameter);
                if(n > -1){
                    articleUrl = article.url.substring(0,n);
                    imageUrl = article.url.substring(n + imageUrlParameter.length ,article.url.length);
                } else {
                    articleUrl = article.url;
                }

                if(imageUrl == null || imageUrl.length === 0) {
                  imageUrl = "/css/img/PlaceHolder116.jpg";
                }

                if (trimmedTitle !== '' && article.url !== ''){
                    html += '<div  class="'+className+'"><a href="' + articleUrl + '">  <img src="' + imageUrl +'" /> </a><a href="' + articleUrl + '"> <span class="color'+j+'">'+(j+1)+'.</span>'+unescape(trimmedTitle)+'</a></div>';
                }

                if(i === 1 || j === 3 ){
                    html +='</div>';
                }

            }

            return html;
        }
    };
    /*
     * End: Code for most commented
     */

/*
 * Start: Code for Streamhub
 */


CN.livefyre.streamhub = function (siteId, collectionId) {
    require(['streamhub-backbone'],
        function(Hub){
            fyre.conv.load({
                network: CN.livefyre.configOptions.network
            }, [{app: 'sdk'}], loadApp);

            function loadApp (sdk) {
                var app = window.app = new Hub({
                    sdk: sdk,
                    collection: {
                        siteId: siteId,
                        articleId: collectionId
                    },
                    el: document.getElementById("stream-instagram")
                });
                $(window).scroll(function(){
                app._collection.loadMore();
             });
            }

        });
};
CN.livefyre.streamhubPopup = function (){
    $('.instagram-overlay, .instagram-outerlayer').appendTo('body');
    $('.instagram-overlay .overlay-close a, .instagram-outerlayer').click(function(){
        $('.instagram-overlay, .instagram-outerlayer').hide('slow')
    });

    jQuery('.hub-content article').live('click', function(){
        $('.instagram-overlay, .instagram-outerlayer').show('slow');
        $('.overlay_content').html('<div class="overlay-image">'+$(this).find('.hub-attachment-photo').html()+'</div><div class="overlay-author"><span>'+$(this).find('.hub-author').html()+'</span></div><div class="overlay-content">'+$(this).find('.hub-body-html').html()+'</div>');
        $('.instagram-overlay').html();
        var pinurl, tumurl, fb;
        var imageURL = $('.overlay-image img').attr('src');
            pinurl = $('.pi-button').attr('href')+'&media='+imageURL;
            tumurl = $('.tm-button').attr('href')+'&source=http%3A%2F%2F'+imageURL.split('http://')[1];
            fb = $('.fb-button').attr('href')+'&p[images][0]=' + imageURL;
        $('.pi-button').attr('href', pinurl);
        $('.tm-button').attr('href', tumurl);
        $('.fb-button').attr('href',fb);
        if (CN.isMobile){
            $(".instagram-overlay").css({
                top     : $(window).scrollTop() + 30 + "px",
                left    : (($(window).width() - $('this').width() ) / 2+$(window).scrollLeft()) - 180+ "px"
            });
        }else{
            $(".instagram-overlay").css({
                top     : (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop() - 250+ "px",
                left    : (($(window).width() - $('this').width() ) / 2+$(window).scrollLeft()) - 260+ "px"
            });
        }
    });
    $('.instagram-overlay .social a').click(function(){
        window.open($(this).attr('href'),'popUpWindow','height=400,width=600,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes');
        return false;
    });
}

/*
    * End: Code for most commented
    */