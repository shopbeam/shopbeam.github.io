var Refinery = Refinery || { };

(function( refinery, $, undefined ) {

    var R29_EVENT_NAMESPACE = '.r29';

    var $body = $('body');

    refinery.init = function(){
        refinery.global();
        refinery.category();
        refinery.productView();
        refinery.shoppingCart() ;
        refinery.ieFixes();

        // logged in stuff
        /*
        // removing ajax call for user name update.
        $.get('/shops/rf29html/user/', {from: document.location.href}, function(html){
            $('header menu').find('.ident-link').remove().end().prepend(html);
            //R29 && R29.handlers && R29.handlers.set_handlers();
            $('.r29-user').hover(function(){
                $('#menu-user').show().siblings('.arrow').show();
            }, function(){
                $('#menu-user').hide().siblings('.arrow').hide();
            });
        }, 'html');
        */
        // adding user links by checking cookies:
        $userCookie = R29.cookie.get('R29_DISPLAY_NAME');
        $userIdCookie = R29.cookie.get('R29_UID');
        if($userCookie && $userIdCookie)
        {
            $('.login-and-register-btn').css('display','none');
            $('.user-from-cms').html($userCookie.split('+').join(' '));// .replace('+',' '));
            $('.logged-user-block').css('display','block');
        }
        /*
        $(document).click(function(){
            Enterprise.TopCart.hideCart();
        });
        */
    };

    refinery.reset = function(){
        refinery.removeEvents();
        refinery.global();
        refinery.category();
        refinery.productView();
        refinery.shoppingCart() ;
        refinery.ieFixes();
    };

    refinery.removeEvents = function(){
        $("*").off(R29_EVENT_NAMESPACE);
    };


    refinery.global = function() {

        $body.on('click'+R29_EVENT_NAMESPACE, '.messages > li', function(){
            $(this).animate({'height':'0','opacity':'0'}, function(){
                $(this).remove();
            });

            var onlyChild =  $('.messages > li').length <= 1;

            if ( onlyChild ) {
                $(this).parent().animate({'margin-top':'0','margin-bottom':'0'}, function(){
                    $(this).remove();
                });
            }
        });

        $body.on('click'+R29_EVENT_NAMESPACE,'.messages li li', function(){

            $(this).animate({'height':'0','opacity':'0'}, 300, function(){
                $(this).remove();
            });

            var onlyChild =  $('.messages > li').length <= 1,
                onlySubChild = $(this).parent().find('li').length <= 1;

            if ( onlyChild && onlySubChild ) {
                $(this).parent().parent().parent().animate({'margin-top':'0','margin-bottom':'0'}, function(){
                    $(this).remove();
                });
            }
        });


            // Forms for category view and upsells on product pages
            if ($('form.transform').length > 0) {

                $('form.transform dd.opt0 select').jqTransSelect();

                // Remove (sold out) text from config options on category view
                $('.products-grid .jqTransformSelectWrapper > ul li .sold-out').each(function(){
                    var $_newVal = $(this).text().replace(' (sold out)','');
                    $(this).text($_newVal);
                });

                // Transform selects to buttons
                $('.products-grid dd.opt0 ~ dd').hide();
                $('.products-grid .jqTransformSelectWrapper > ul li a').click(function(){
                    var $_index		= $(this).attr('index'),
                        $_parent	= $(this).parent().parent().parent(),
                        $_parentDD	= $_parent.parent().parent(),
                        $_target	= $('select', $_parent),
                        $_nextTarget	= $('select', $_parentDD.next());
                    var evt = document.createEvent("HTMLEvents");
                    evt.initEvent("click", true, true);
                    tmpid = $_target.attr( 'id' );
                    document.getElementById( tmpid ).dispatchEvent(evt);
                    var showme = true;
                    sizeid = $_nextTarget.attr( 'id' );
                    if( sizeid && sizeid > "" )
                    {
                        //	alert( document.getElementById(sizeid).options.length );
                        if( document.getElementById(sizeid).selectedIndex == 1 )
                        {
                            // see removeoption0 in configurable.js
                            showme = false;
                        }
                    }

                    if( showme )
                    {
                        $_parentDD.next().show();

                        var i=$($_nextTarget).parent().find('div,ul').remove().css('zIndex');
                        $($_nextTarget).unwrap().removeClass('jqTransformHidden').jqTransSelect();
                        $($_nextTarget).parent().css('zIndex', i);
                        $_nextTarget.jqTransSelect();
                    }
                    else
                    {
                        $_parentDD.next().hide();
                    }

                });

                $('.validation-advice', $(this).parent().parent().parent()).animate({'opacity':'0'}, 300, function(){
                    $(this).remove();
                });
            }

            // Transform designated checkboxes
            if ($('input.transform').length > 0) {
                $('input[type="checkbox"]').jqTransCheckBox();
            }

            // IE7 & IE8 Fixes
            if ( $('html').hasClass('lt-ie9') ) {

                // Button hovers
                $('a.button, button.button').hover(
                    function(){
                        $(this).addClass('hover');
                    },
                    function(){
                        $(this).removeClass('hover');
                    }
                );
            }
        };

        refinery.category = function() {
            if ($('img.lazy').length > 0) {
                $('img.lazy').lazyload();
            }

            // iPad image hover issue on cat grid
            if ($('.products-grid').length > 0) {
                $body.on('touchend'+R29_EVENT_NAMESPACE, '.products-grid .item', function(){
                    $('.products-grid .item').not(this).removeClass('hover');
                    $(this).addClass('hover');
                });
            }
        };

        refinery.productView = function() {

            var $productItems = $('.products-grid .item');
            $productItems.on('mouseenter'+R29_EVENT_NAMESPACE, ':not(.just-missed)', function(){
                $(this).find('.buy-this-now').show();
            });
            $productItems.on('mouseleave'+R29_EVENT_NAMESPACE, ':not(.just-missed)', function(){
                $(this).find('.buy-this-now').hide();
            });

            $('form').each(function(){
                if ($('select', this).length > 0) {
                    $(this).addClass('has-select');
                    // $('dd.wef select', this).jqTransSelect();
                    // $('.product-options select option:contains("(sold out)")',this).attr('disabled','disabled');
                }
            });

            // Switch price on Grouped Voucher products
            if ($('.grouped-voucher-prices').length > 0) {

                $('.grouped-voucher-prices li').each(function(){
                    var savings = $(this).attr('data-savings');
                    $('.price-box', this).append('<span class="savings">' + savings + '</span>');
                });

                var $_target = '.' + $('.product-shop .grouped-items-table input[checked="checked"]').attr('data-id');
                $($_target, '.grouped-voucher-prices').show();

                $('.product-shop .grouped-items-table').on('change'+R29_EVENT_NAMESPACE, 'input[type="radio"]', function(){
                    var $_targetNew = '.' + $(this).attr('data-id');
                    $('.grouped-voucher-prices li').hide();
                    $($_targetNew, '.grouped-voucher-prices').show();
                });

            }

            // Show Hide QTY Selects
            $('#super-product-table').on('change'+R29_EVENT_NAMESPACE, function(){
                var qtySelect = $('input:checked', this).attr('data-select');

                $('.qty-select-box select.qty-select').each(function(){
                    if ( $(this).attr('data-select') == qtySelect ) {
                        $(this).show().val(1);
                    } else {
                        $(this).hide();
                    }
                });
            });

            // Sync QTY Select with QTY Input
            $('.catalog-product-view select.qty-select').on('change'+R29_EVENT_NAMESPACE, function(){
                var qty = $(this).val(),
                    dataSelect = $(this).attr('data-select');

                $('#super-product-table input.qty').each(function(){
                    if ($(this).attr('data-select') == dataSelect) {
                        $(this).val(qty);
                    }
                });
            });

            // Add To Cart vs. Add To Waitlist button switch
            if ( $('.product-view.voucher .product-shop table.grouped-items-table input[type="radio"]').length > 0 ) {
                var firstRadio = $('.shop-essential table.grouped-items-table tr.first td input[type="radio"]'),
                    dataOnclick = firstRadio.attr('data-onclick'),
                    dataAddText = firstRadio.attr('data-addtext'),
                    cartBttn = $('#addtocart.action-add-to-cart-ipd');

                // Switch to first radio's settings on page load
                cartBttn.attr('onclick', dataOnclick);
                $('span span', cartBttn).text(dataAddText);

                // Switch to new radio's settings when a new option is selected
                $('.product-view.voucher .product-shop table.grouped-items-table').on('change'+R29_EVENT_NAMESPACE, 'input[type="radio"]', function(){
                    var radio = $(this),
                        dataOnclick = radio.attr('data-onclick'),
                        dataAddText = radio.attr('data-addtext');

                    cartBttn.attr('onclick', dataOnclick);
                    $('span span', cartBttn).text(dataAddText);
                });
            }
            //	$('#addtocart').bind('click', closeZoom());
        };

        refinery.loading = function() {

            // When clicking an anchor...
            $('.logged-in').on('click'+R29_EVENT_NAMESPACE, 'a', function(){

                var href	= $(this).attr('href'),
                    jscript	= href.indexOf('javascript') > -1,
                    data	= $(this).parent().parent().parent().attr('data-script'),
                    aClick	= $(this).attr('onclick'),
                    target	= $(this).attr('target') == '_blank',
                    script	= false;

                if ( href == '#' || jscript || data || aClick || target) { script = true; }

                if (script) {
                    // Behave normally if link uses javascript

                } else {
                    $('#page-load').addClass('active');
                    $('.lt-ie9 #page-load').animate({'opacity':'0.25'}, 500);

                }
            });

        };

        refinery.shoppingCart = function() {
            // Sync QTY Select with QTY Input
            $('.cart-table select.qty-select').on('change'+R29_EVENT_NAMESPACE, function(){
                var qty = $(this).val();
                $('input.qty', $(this).parent()).val(qty);
            });
        };

        refinery.ieFixes = function() {
            // If older than IE 9
            if ($('html').hasClass('lt-ie9')) {
                // Set "last" class on cms product list items
                $('.grid3 li.link-block:nth-child(3n), .grid2 li.link-block:nth-child(2n)').addClass('last');
            }
        };

// Reload select dropdown on configurable products
        window.reloadQty = function(n) {
            var $_select = $('#qty-select'),
                $i = 1;

            $('option', $_select).remove();

            while ($i <= n) {
                $_select.append('<option value="' + $i + '">' + $i + '</option>');
                $i++;
            }
        };

// Hide validation error once the configurable option is selected
        window.hideValidation = function () {
            $('.products-grid .validation-advice').animate({'opacity':'0'}, 300, function(){
                $(this).remove();
            });
        };

// Close the Zoom
        window.closeZoom = function(e){
            $zoomOverlay = $('#rf-zoom-overlay');
            $.Window.unbind('.imageZoom');
            $('.purchase-container').removeClass('fixed');
            if( $zoomOverlay ) {
                $zoomOverlay.fadeOut((300), function(){
                    $(this).remove();
                    $.Body.css('overflow', 'auto');
                });
            }
        };

        /* WINDOW ONLOAD */

        $(window).load(function(){
            $('#rf-purchase-popup .jqTransformSelectWrapper li').each(function(){
                var $_position = $(this).index(),
                    $_clone = $('.product-shop .jqTransformSelectWrapper ul li').eq($_position);

                $(this).val($_clone);
            });
        });


}( Refinery, jQuery ));

jQuery(function($){
    Refinery.init();
});
