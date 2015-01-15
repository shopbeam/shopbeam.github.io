/* MiniNav */
var MiniNav = MiniNav || { };

(function( miniNav, $, undefined ) {

    var sticky_navigation_offset_top, activate_mininav_point;
    var $miniNav;
    //Public Property
    miniNav.stickyClass = "sticky";

    miniNav.init = function(){
        sticky_navigation_offset_top = $('#header').offset().top;
        activate_mininav_point = $('.boutiques-wrapper').offset().top + 226;
        $miniNav = $('.mini-nav');
        miniNav.update();
        // run it again every time you scroll
        $(window).scroll(function() {
            miniNav.update();
        });
    };

    miniNav.update = function(){
        var scroll_top = $(window).scrollTop(); // our current vertical position from the top

        if (scroll_top > (sticky_navigation_offset_top + activate_mininav_point)) {
            // $('.mini-nav').css({ 'display': 'bock' });
            if( ! $miniNav.hasClass(miniNav.stickyClass)){
                $miniNav.addClass(miniNav.stickyClass);
                miniNav.moveContentToMiniNav();
                // Enterprise.TopCart.initialize('topCartContentSticky');
            }
        } else {
            if( $miniNav.hasClass(miniNav.stickyClass)){
                $miniNav.removeClass(miniNav.stickyClass);
                miniNav.moveContentFromMiniNav();
                /*
                if($('#topCartContent').length && Enterprise && Enterprise.TopCart) {
                    Enterprise.TopCart.initialize('topCartContent');
                }
                */
            }
            //$('.mini-nav').css({ 'display': 'none' });
        }
        // ajaxcartpro update:
        /*if(typeof updateDeleteLinks == 'function') {
          updateDeleteLinks();
        }*/
    };

    miniNav.moveContentToMiniNav = function(){
        var $quickAccess = $('.quick-access');
        var heightQuickAccess = $quickAccess.outerHeight();
        $quickAccess = $quickAccess.detach();
        $miniNav.append($quickAccess);
        var $toolbar = $('.toolbar');
        var toolbarHeight = $toolbar.outerHeight();
        $toolbar = $toolbar.detach();
        $miniNav.append($toolbar);
        $('body').css('padding-top', (toolbarHeight+heightQuickAccess)+'px');
    };

    miniNav.moveContentFromMiniNav = function(){
        var quickAccess = $('.quick-access').detach();
        var $headerContainer = $('.header-container');
        $headerContainer.append(quickAccess);
        var toolbar = $('.toolbar').detach();
        var $productListContainer = $('#product-list-container');
        $productListContainer.prepend(toolbar);
        $('body').css('padding-top', '0');
    };

}( MiniNav, jQuery ));

jQuery(function($){
    MiniNav.init();
});

/* Category menu colapse version */
jQuery(function($){
    var menu_size = $('#nav').width();
    if(menu_size <= 764){
        $('.menu-home').addClass('menu-section');
    }
});

/* Dropdown Category menu */
jQuery(function($){
    var n = $('#nav > li').length;
    //alert('items: ' + n);
    for (var i=1;i<=n;i++){
        var catmenu_size = $('#nav li.nav-'+i+' a.level-top span').width();
        $('#nav li.nav-'+i+' ul.level0').css('left', catmenu_size/2-67 );
        //alert(catmenu_size);
    }
    var category_menu = $('#nav a.level-top span').width();
});


/* Filters */
jQuery(function($){
    var $filters = $('#layered-nav-filters');
    $filters.on('click', '.filter-by-block', function(e){
        if( ! $(this).hasClass('over')){
            $filters.find('.filter-by-content').hide();
            $filters.find('.filter-by-block').removeClass('over');
            if( ! $(this).hasClass('empty')){
                $(this).addClass('over');
                $(this).find('.filter-by-content').slideDown(300, function() { });
            }
        }
    });
    $filters.on('click', '.filter-close', function(e){
        $(this).parent().hide();
        $('.filter-by-block').removeClass('over');
        e.stopPropagation();
    });
});

/* Sort By */
jQuery(function($){
    var $sortBy = $('#sort-by-container');
    $('body').on('click', '#sort-by-container', function(e){
        $(this).toggleClass('active');
        e.stopPropagation();
    });

    $('body').on('click', '#sort-by-container li', function(e){
        var opt = $(this);
        $('#sort-by-container > span').html(opt.text());
        // e.stopPropagation();
    });
});


/* visibiliy methods (toogleVisibilityOnObjects, toogleVisibility, toogleRequired) from com.refinery29.js (commented file in layout) */

if(!window.toogleVisibilityOnObjects) {
    var toogleVisibilityOnObjects = function(source, objects) {
        if($(source) && $(source).checked) {
            objects.each(function(item){
                $(item).show();
                $$('#' + item + ' .input-text').each(function(item) {
                    item.removeClassName('validation-passed');
                });
            });
        } else {
            objects.each(function(item){
                if ($(item)) {
                    $(item).hide();
                    $$('#' + item + ' .input-text').each(function(sitem) {
                        sitem.addClassName('validation-passed');
                    });
                    $$('#' + item + ' .giftmessage-area').each(function(sitem) {
                        sitem.value = '';
                    });
                    $$('#' + item + ' .checkbox').each(function(sitem) {
                        sitem.checked = false;
                    });
                    $$('#' + item + ' .select').each(function(sitem) {
                        sitem.value = '';
                    });
                    $$('#' + item + ' .price-box').each(function(sitem) {
                        sitem.addClassName('no-display');
                    });
                }
            });
        }
    }
}

if(!window.toogleVisibility) {
    var toogleVisibility = function(objects, show) {
        objects.each(function(item){
            if (show) {
                $(item).show();
                $(item).removeClassName('no-display');
            }
            else {
                $(item).hide();
                $(item).addClassName('no-display');
            }
        });
    }
}

if(!window.toogleRequired) {
    var toogleRequired = function (source, objects)
    {
        if(!$(source).value.blank()) {
            objects.each(function(item) {
                $(item).addClassName('required-entry');
            });
        } else {
            objects.each(function(item) {
                if (typeof shippingMethod != 'undefined' && shippingMethod.validator) {
                    shippingMethod.validator.reset(item);
                }
                $(item).removeClassName('required-entry');
            });
        }
    }
}

// "Back To Top" Button
jQuery(function($) {
    var htmlwide = $(document).width(),
        scrolling = false,
        $navWidget = $('#rightNavWidget'),
        $backToTop = $navWidget.find('.nav-back-to-top'),
        $colMain = $('.col-main'),
        expandedNavWidgetWidth = $navWidget.width(),
        paddingRight = 45,
        collapsedClasses = 'collapsed compact',
        toTopAlignLeft = function() {
            var colMainOffsetLeft = $colMain.offset().left;
            if(colMainOffsetLeft - expandedNavWidgetWidth - paddingRight < 10) {
                $navWidget.addClass(collapsedClasses);
            } else {
                $navWidget.removeClass(collapsedClasses);
            }
            $navWidget.css('left', colMainOffsetLeft - $navWidget.width() - paddingRight);
        },
        toTopAlignTop = function() {
            if($('#rf-mini-nav-container').hasClass(MiniNav.stickyClass)) {
                $navWidget.css({
                    position: 'fixed',
                    top: 120
                });
                if(!scrolling)
                    $navWidget.fadeIn();
            } else {
                $navWidget.css({
                    position: 'absolute',
                    top: 497
                });
                if(!scrolling)
                    $navWidget.fadeOut();
            }
        },
        toTopClick = function() {
            scrolling = true;
            $('body,html').animate({scrollTop:0},800,function(){
                $navWidget.fadeOut();
                scrolling = false;
            });
        };
    $navWidget.css({
        position: 'fixed',
        top: 120
    });
    toTopAlignLeft();
    toTopAlignTop();

    $(window)
        .scroll(toTopAlignTop)
        .resize(toTopAlignLeft);
    $backToTop.click(toTopClick);
    $('body').on('rows_animate_global_after', toTopAlignTop);
});
