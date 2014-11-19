// Handles case when user is not registered and tries to access functionality.
// Can be as simple as redirecting to another url or more advanced such as opening
// layers or AJAX forms.
// Has a hash of possible ids with appropriate messages.
// Todo- Pass the messages in as aMessages.
// Requires JQuery.
function RegisteredGateway(sUrl, gUrl, aMessages) {
    var oThis = this,
        oLinks = '<a href="' + sUrl + '" class="lnkLogin reglayer-login" title="Login">Log In</a> or <a href="' + gUrl + '" class="lnkRegister reglayer-register" title="Register">register</a>';

    this.boxWidth = "";
    this.aLoginMessages = {
        "log" : oLinks + " to log this tip.",
        "rating" : oLinks + " to post your rating.",
        "comment" : oLinks + " to post your comment.",
        "favorites" : oLinks + " now to add this tip to your favorites.",
        "favorites_generic": oLinks + " to save this to your list of favorites.",
        "product_page": "We can\'t save products to your list if we don\'t know who you are! " + oLinks + " to save and share your favorite finds now.",
        "recommendation" : oLinks + " to recommend this tip.",
        "abuse" : oLinks + " to report this comment.",
        "default" : oLinks + " to use this program."
    };
    this.signinUrl = sUrl;
    this.gatewayUrl = gUrl;


    RegisteredGateway.prototype.init = function() {
        oThis.createRegisterDiv();
    };

    /*
    * Create the unregistered user div. This is a div that pops up when the user tries to access a protected
    * piece of functionality.
    */
    RegisteredGateway.prototype.createRegisterDiv = function() {
          if (!jQuery('#reglayer').length) {
              jQuery('<div id="reglayer"/>').addClass('regblurb').append(
                  jQuery('<a href="#"/>').addClass('closebtn').html('&times;').bind('click', function() {
                      jQuery(this).parent().hide();
                      return false;
                  }),
                  jQuery('<p id="regtxt"/>')
              ).appendTo('body');
              jQuery('.closebtn').trigger('click');
          }

        CN.debug.info('firing CN.customEvents.pluckRegLayer event');
          jQuery(window).trigger('CN.customEvents.pluckRegLayer');
      };

    RegisteredGateway.prototype.getGatewayUrl = function() {
        return this.gatewayUrl;
    };

    RegisteredGateway.prototype.setLoginText = function(txt) {
        return jQuery("#regtxt").html(txt).length > 0 ? true : false;
    };

    // Opens the register div near the element the user clicked on.
    RegisteredGateway.prototype.loginHandler = function(mid, target) {
        var target = jQuery(target),
            layer = jQuery('#reglayer');
        var win = jQuery(window);
        jQuery(window).bind('resize', { layer: layer, target: target }, this.onResize);

        var top  = target.offset().top,
             left = target.offset().left + (target.width() / 2) - (layer.width() / 2);

        if(CN.site.mobilecompatible) {
            if ((CN.mobile.detectIPad() || CN.mobile.detectIPhone())) {
             top  = win.scrollTop() + (win.height()/4);
             left = win.width()/2 - (jQuery("div.regblurb").width()*2);
            }
        }

        layer.css({
                top: top,
                left: left
            }).find('#regtxt').html(this.aLoginMessages[mid]).end().show();

        return false;
     };

    RegisteredGateway.prototype.onResize = function(e) {
        var win = jQuery(window);
        e.data.layer.css({
            top: win.scrollTop() + (win.height()/4),
            left: win.width()/2 - (jQuery("div.regblurb").width()*2)
        });
    };
}

jQuery(window).bind('CN.customEvents.pluckRegLayerHide', function() {
    jQuery('#reglayer').hide();
});
