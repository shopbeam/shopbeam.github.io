jQuery(document).ready(function() {

    var version = '0.1.6';

    // Loop through each post
    jQuery('.bpp_post_wrapper').each(function(){

        var $bpp_post = jQuery(this);

        // get configured setting
        var bpp_color = $bpp_post.data('bpp-color'),
            bpp_size = $bpp_post.data('bpp-size'),
            bpp_lang = $bpp_post.data('bpp-lang'),
            bpp_count = $bpp_post.data('bpp-count'),
            bpp_pinhover = $bpp_post.data('bpp-pinhover'),
            bpp_pincorner = $bpp_post.data('bpp-pincorner'),
            bpp_pinlink = $bpp_post.data('bpp-pinlink'),
            bpp_append = $bpp_post.data('bpp-append'),
            bpp_important = $bpp_post.data('bpp-important');


        bpp_append = (bpp_append && bpp_append.length > 0) ? ' ' + $bpp_post.data('bpp-append') : '';

        // Loop through each image in a post
        $bpp_post.find('img').each(function(){

            var bpp_img = this;

            // Respect the no-pin
            // Exclude small images
            if( jQuery(bpp_img).attr('nopin') === 'nopin'
             || jQuery(bpp_img).get(0).clientWidth < 200) {
                return;
            }

            // Special hack for lazy load plugins
            var bpp_mediasrc = jQuery(bpp_img).attr('src');
            if(bpp_mediasrc != '' || bpp_mediasrc.substr(0, 5) == 'data:') {
                if(jQuery(bpp_img).data('lazy-src')){
                    bpp_mediasrc = jQuery(bpp_img).data('lazy-src');
                }
            }

            // Create the pinterest URI for this image
            var bpp_href  = '//www.pinterest.com/pin/create/button/';
                bpp_href += '?url=' + encodeURI(bpp_pinlink);
                bpp_href += '&media=' + encodeURI(bpp_mediasrc);
                bpp_href += '&description=' + encodeURI(jQuery(bpp_img).attr('alt') + bpp_append);

            var bpp_button_wrap = jQuery('<span>')
                                  .addClass('bpp_button_wrapper');

            // Do not change these to data() cause then the number doesn't load
            var bpp_anchor = jQuery('<a>')
                             .attr('href', bpp_href)
                             .attr('data-pin-do', 'buttonPin')
                             .attr('data-pin-config', bpp_count)
                             .attr('data-pin-height', bpp_size)
                             .attr('data-pin-lang', bpp_lang)
                             .attr('data-pin-color', bpp_color);

            var bpp_button = jQuery('<img>').attr('src', '//assets.pinterest.com/images/pidgets/pinit_fg_'+bpp_lang+'_rect_'+bpp_color+'_'+bpp_size+'.png');

            // Append the button to the anchor inside the button wrapper for display
            var bpp_display = jQuery(bpp_button_wrap).append(jQuery(bpp_anchor).append(bpp_button));

            // Add miscelaneous classes to image wrapper
            var bpp_img_wrap_class = '';

            // Ability to override hover settings on a per-image basis
            var _i_bpp_pinhover = jQuery(bpp_img).data('bpp-pinhover');
            if( (bpp_pinhover == true && _i_bpp_pinhover != 'always')
                || _i_bpp_pinhover == 'onhover') {
                bpp_img_wrap_class += " onhover";
            }
            // set the corner the pin belongs
            if(bpp_pincorner) {
                bpp_img_wrap_class += " " + bpp_pincorner;
            }
            // If it's the large button
            if(bpp_size == 28) {
                bpp_img_wrap_class += " large";
            }
            // Add class for count_above, count_none and count_beside
            bpp_img_wrap_class += " count_"+bpp_count;

            // Add wrapper and drop button after image
            if(jQuery(bpp_img).parent('a').length > 0) {
                jQuery(bpp_img).parent('a').wrap('<span class="bpp_img_wrapper' + bpp_img_wrap_class + '"></span>');
                jQuery(bpp_img).parent('a').after(bpp_display);
                var bpp_parentparent = jQuery(bpp_img).parent('a').parent().parent().get(0);
            } else {
                jQuery(bpp_img).wrap('<span class="bpp_img_wrapper' + bpp_img_wrap_class + '"></span>');
                jQuery(bpp_img).after(bpp_display);
                var bpp_parentparent = jQuery(bpp_img).parent().parent().get(0);
            }

            var bpp_transferclass = ['alignnone', 'alignleft', 'aligncenter', 'alignright'];

            jQuery.each( bpp_transferclass, function( key, value ) {
                if(jQuery(bpp_img).hasClass(value)) {
                    if(bpp_important){
                        jQuery(bpp_parentparent).addClass('bpp_imp');
                    }
                    jQuery(bpp_parentparent).addClass(value);
                }
            });

        // End looping through each image in a post
        });
    // End looping through each post
    });
// End on ready
});

/* konsole is a safe wrapper for the Firebug console. */
var konsole = {
  log: function(args){},
  dir: function(args){}
};
// Remove below here when in production
if (typeof window.console != 'undefined' && typeof window.console.log == 'function') {
  konsole = window.console;
  function a(a,b){var c='font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;font-size: 15px;'+(a?"font-weight: bold;":"")+"color: "+b+";";return c}konsole.log("%c♥web%c( function(){ %creturn true %c}); --> %ccontactMe()",a(!0,"#d22"),a(!0,"#777"),a(!0,"#2b2"),a(!0,"#777"),a(!0,"#2b2"));
  function contactMe(){ document.location.href = 'http://terriswallow.com' };
}

