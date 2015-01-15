if (!("ontouchstart" in document.documentElement)) {
    document.documentElement.className += " no-touch";
}else{
    document.documentElement.className += " touch";
}

function stacktrace() {
    function st2(f) {
        if(f){
            var part1 = f.toString().split('(')[0].substring(9);
            var part2 = typeof(f.arguments.join) != 'undefined' ? ('(' + f.arguments.join(',') + ')') : '';
            return st2(f.caller).concat([part1 + part2]);
        }else {
            return [];
        }
    }
    return st2(arguments.callee.caller);
}

var TheGrid = TheGrid || { };

(function( thegrid, $, undefined ) {
    //Private Property
    // var private = true;

    //Public Property
    //thegrid.public = "public";

    //Private Method
    // function privatMethod( ) { }

    //Public Method
    // thegrid.publicMethod = function(){}

    var isLoadingAjax = false;
    var xhrPool = [];
    var isProd = window.location.toString().indexOf("refinery29.com") !=-1;

    //Public Method
    thegrid.init = function(){

        initAjaxErrors();

        initAjaxPoolListener();

        initAjaxLinks();

        initHistory();

        initInfiniteScroll();

        initBlockUpdatesCustomEvents();

        loadAjaxContent(getInitUrl(), {});

        IPD.init();
        ANIM.init();
        PRELOADER.init();
        GA.init();

//        var url = window.location.href;
//        loadAjaxContent(url, {handle:'init'});
        moveContentFromLayeredNavToToolbar();
        initBoutiquesCarousel();
        $('#footer-shops').show();

        forgetPreviousScrollOnPageRefresh();


    };

    function forgetPreviousScrollOnPageRefresh(){
        window.onload = function(){
            setTimeout(function(){
                scrollTo(0,0);
            },1);
        }
    }

    function ajaxifyLinks(selector){
        $('body').on('click', selector, onLinkClick);
    }

    function onLinkClick(event) {
        var $this = $(this),
            url = $this.attr('href'),
            e = $.Event('load_ajax_content_click_before'); // entry point for changing data sent
        e.requestData = {};
        e.requestUrl = url;
        $this.trigger( e );
        abortCurrentAjaxCalls();
        loadAjaxContent(e.requestUrl, e.requestData, null, function(){
            hideCategoryMenu();
        }, $this);
        return false;
    }

    /**
     * Hides the category menu - should be called especially for the iPad right after clicking on a category or
     * sub-category
     */
    function hideCategoryMenu() {
        $('#nav').find('li.level0.over').removeClass('over')
            .find('ul.shown-sub').removeClass('shown-sub').css('display','none');
    }

    function ajaxifyForms(selector){
        $('body').on('submit', selector, function(){
            var $form = $(this);
            var url = $form.attr('action');
            var data = $form.serialize();
            abortCurrentAjaxCalls();
            loadAjaxContent(url, data, null, null, $form);
            return false;
        });

        if(selector == "#product_addtocart_form"){
            var $addToCart = $('body #product_addtocart_form button#addtocart');
            if($addToCart.length >= 1){
                $addToCart.each(function(index, item){
                    //item.myOnClick = $(item).attr('onclick');
                    $(item).on('touchstart click', function(){
                        eval("$(this).attr('onclick')");
                        IPD.close();
                        return false;
                    });
                });
            }
        }
    }


    function getInitUrl() {
        return "/shops/r29thegrid/init";
    }

    function initAjaxErrors() {
        $( document ).ajaxError(function(event, jqXHR, ajaxSettings, thrownError) {
            if(jqXHR.statusText == 'abort'){
                // silent abort
                return;
            }
            if (jqXHR.status === 0) {
                if(!isProd) console.log('Not connect.\n Verify Network.');
            } else if (jqXHR.status == 404) {
                if(!isProd) console.log('Requested page not found. [404]');
            } else if (jqXHR.status == 500) {
                if(!isProd) console.log('Internal Server Error [500].');
            } else if (thrownError === 'parsererror') {
                if(!isProd) console.log('Requested JSON parse failed.');
            } else if (thrownError === 'timeout') {
                if(!isProd) console.log('Time out error.');
            } else if (thrownError === 'abort') {
                if(!isProd) console.log('Ajax request aborted.');
            } else {
                if(!isProd) console.log('Uncaught Error.\n' + jqXHR.responseText);
            }
        });
    }


    function initInfiniteScroll(){

        var lastUrlRequested = null;
        var $window = $(window);
        var scrollTimer = 0;
        $window.scroll(function () {

            if(isLoadingAjax || ANIM.isAnimating()){
                return;
            }

            // prevents executing scroll too often
            var minScrollTime = 300;
            if (!scrollTimer) {
                scrollTimer = setTimeout(function() {
                    scrollTimer = null;
                    processScroll();
                }, minScrollTime);
            }

            function processScroll() {
                // var $elem = $('.category-products');
                var nextUrl = $("a.next.i-next").attr('href');
                if ( ! nextUrl ) {
                    return;
                }
                // if ($window.scrollTop() + $window.height() >= $elem.position().top + $elem.height() /* add padding if needed. */) {
                if ($window.scrollTop() >= $(document).height() - $window.height() - 25) {
                    if(lastUrlRequested != nextUrl){
                        lastUrlRequested = nextUrl;
                        loadAjaxContent(nextUrl,{'handle':'infinitescroll'}, null, scrollCallbackAfter);
                    }
                }
            }

            /**
             * Callback that gets executed after the next set of products are loaded via InfiniteScroll
             * @param result
             */
            function scrollCallbackAfter(result) {
                // Remove the "last" class for all rows that have it, except the... LAST one :)
                $('.category-products').find('.products-grid.last:not(:last)').each(function(index, row){
                    $(row).removeClass('last');
                });
            }

        });

//        $('.main').infinitescroll({
//            prefill : true,
//            dataType: 'json',
//            appendCallback: false,
//            nextSelector: "a.next.i-next"
//        }, function(element, data, opts, url){
//            if(!isProd) console.log('scroll');
//        });

    }



    // to avoid duplicating blocks
    function cleanMiniNav(){
        var $miniNav = $('.mini-nav');
        $miniNav.removeClass(MiniNav.stickyClass);
        MiniNav.moveContentFromMiniNav();
    }


    function initBlockUpdatesCustomEvents(){

        // global update before
        $('body').on('blocks_update_global_before', function(e){
            if(e.blockData['#product-container'] !== undefined){
                if( ! IPD.getContainer().length){
                    IPD.createContainer();
                }
            }
            cleanMiniNav();
        });

        $('body').on('blocks_update_global_after', function(e){
            if(window['Refinery'] !== undefined){
                Refinery.reset();
            }
            $(window).trigger('scroll');
            updateTopMenuAndBoutique();
        });

        // for inline pdp
        $('body').on('block_update_after', '#product-container', function(e){
            // var html = e.data;
            var $this = $(this);
            IPD.positionInGrid($this);
            // $(window).scrollTop($this.position().top);
        });

        // for infinitescroll
        $('body').on("block_update_before", '.category-products', function(e){
            if(e.target != e.currentTarget){
                return;
            }
            var data = e.blockData;
            var html = data.html;
            var $this = $(this);
            // it actually sends .category-products and the toolbar. Let's parse the response and update as needed
            var $html = $(html);
            var $products = $html.find(".products-grid");
            var $toolbar = $html.find(".toolbar");
            $this.append($products);
            var $currently = $('.toolbar').find('.currently');
            $('.toolbar').replaceWith($toolbar);
            updateToolbar($currently);
            // remove html because we have added it
            data.html = null;
        });

        $('body').on("block_update_after", '#layered-nav-filters', function(e){
            moveContentFromLayeredNavToToolbar();
        });

        $('body').on("block_update_after", '#boutiques', function(e){
            initBoutiquesCarousel();
        });

    }

    function moveContentFromLayeredNavToToolbar(){
        var $this = $('#layered-nav-filters');
        // enable disable checkboxes before loading image show up:
        $this.find('.filter-by-content ol li a').on('click',function(e){
            if($(this).hasClass('active')){ $(this).removeClass('active'); }
            else { $(this).addClass('active'); }
        });
        var $currently = $this.find(".currently");
        updateToolbar($currently);
    }


    function updateToolbar($currently) {
        // var $productsContainer = $('#product-list-container');
        var $toolbar = $('.toolbar'); // $productsContainer.find(".toolbar");
        $toolbar.prepend($currently);
        if($('#search-result-text').length)
        {
            var $resultText = $('#search-result-text').detach();
            $toolbar.prepend($resultText);
        }
        updateViewAllProducts();
    }


    function updateViewAllProducts() {
        var $links = $('a.view-all');
        var nextUrl = $("a.next.i-next").attr('href');
        if ( ! nextUrl ) {
            $links.hide();
            $links.attr('href', 'javascript:void();');
        }else{
            $links.show();
            $links.attr('href', nextUrl);
        }
    }

    function updateTopMenuAndBoutique(){
        var $nav = $('.nav-container');
        $nav.find('li').removeClass('active');
        var $boutiqueCarousel = $('#boutiques-carousel');
        $boutiqueCarousel.find('li').removeClass('active');
        var currentCategoryId = $('.category-view').data('id');
        if(currentCategoryId){
            var $categoryItem = $('.category-node-'+currentCategoryId);
            if($categoryItem.length){
                $categoryItem.addClass('active');
                var $levelTopCategory = $categoryItem.hasClass('level-top') ? $categoryItem : $categoryItem.closest('li.level-top');
                $levelTopCategory.addClass('active');
                if($levelTopCategory.hasClass('new')){
                    if( ! /[?&]new=1/.test(window.location.search)){
                        $levelTopCategory.removeClass('active');
                    }
                }
            }
            else {
                var $boutiqueItem = $('#boutique-'+currentCategoryId);
                $boutiqueItem.addClass('active');
            }
        }
    }

    function initBoutiquesCarousel() {
        var $carousel = $("#boutiques-carousel");
        $carousel.carouFredSel({
            width: 1000,
            height: 216,
            onCreate: function (data){
                $(".caroufredsel_wrapper").css("margin","0 auto");
            },
            items: {
                visible: "variable",
                width: "variable",
                height: 216
            },
            scroll: {
                items: 1,
                //fx: "fade",
                easing: "linear"
            },
            auto: false,
            prev: {
                button: "#prev",
                key: "left"
            },
            next: {
                button: "#next",
                key: "right"
            }
        });
        $carousel.hammer().on('swipeLeft', function() {
            $carousel.trigger('prev', 1);
        });
        $carousel.hammer().on('swipeRight', function() {
            $carousel.trigger('next', 1);
        });
        $carousel.hammer().on('tap', 'a', function(e) {
            $(e.target).trigger('click');
            return false;
        });
    }

    function initAjaxLinks(){
        var links = '.nav-container a, .pager a, .products-grid a, .block-layered-nav a, .toolbar a, li.boutique a, .product-arrow-link, a.view-all';
        ajaxifyLinks(links);

        $('body').on('load_ajax_content_click_before', 'a.view-all', function(e){
            var data = e.requestData;
            data.handle = 'infinitescroll';
            data.view = 'all';
        });

        ajaxifyForms('#search_mini_form');

    }


    function initAjaxPoolListener(){

        $(document).ajaxSend(function(e, jqXHR, options){
            xhrPool.push(jqXHR);
        });
        $(document).ajaxComplete(function(e, jqXHR, options) {
            xhrPool = $.grep(xhrPool, function(x){return x!=jqXHR});
        });
    }

    function abortCurrentAjaxCalls(){
        $.each(xhrPool, function(idx, jqXHR) {
            jqXHR.abort();
        });
    }

    function initHistory(){
        var History = window.History;
        // use this NOT popstate (history.JS)
        History.Adapter.bind(window,'statechange',function(e){
            if( ! History['stateChangedByAjax']){
                var State = History.getState();
                loadAjaxContent(State.url,{}); //update this
            }
        });
    }


    function getUrlForHistory(url, data){
        if(data['handle'] == 'infinitescroll' || data['handle'] == 'init' || data['handle'] == 'layerednav'){
            return false;
        }

        if(url == getInitUrl()){
            return false;
        }

        if(data['q']){
            var separator = (url.indexOf('?') != -1) ? '&' : '?';
            url += separator+'q='+data['q'];
        }

        return url;
    }

    function parseQueryString(qs){
        var keyValues = {};
        qs = qs[0] == '?' ? qs.substr(1) : qs;
        var params = qs.split('&');
        for(var i=0; i<params.length; i++){
            var param = params[i];
            var keyValue = param.split('=');
            var key = keyValue[0];
            var value = keyValue.length > 1 ? keyValue[1] : 0;
            keyValues[key] = value;
        }
        return keyValues;
    }


    function splitUrl(url){
        var base = url;
        var qs = '';
        var hash = '';
        var qsPos = url.indexOf('?');
        var hashPos = url.indexOf('#');
        if(qsPos != -1 || hashPos != -1) {
            base = qsPos != -1 ? url.substr(0, qsPos) : url.substr(0, hashPos);
            if(qsPos != -1){
                qs = hashPos != -1 ? url.substring(qsPos, hashPos) : url.substr(qsPos);
            }
            if(hashPos != -1){
                hash = url.substr(hashPos);
            }
        }
        return {
            'base' : base,
            'query': qs,
            'hash' : hash
        };
    }

    function sortQueryParameters(url){
        var urlParts = splitUrl(url);
        var qs = urlParts['query'];
        if(qs){
            var keyValues = parseQueryString(qs);
            var keys = [],
                k, v, i, len;
            var params = [];
            for (k in keyValues){
                if (keyValues.hasOwnProperty(k)){
                    keys.push(k);
                }
            }
            keys.sort();
            len = keys.length;
            for (i = 0; i < len; i++){
                k = keys[i];
                v = keyValues[k];
                v = v.split(',').sort().join(',');
                params.push(k+'='+v);
            }
            urlParts['query'] = '?'+params.join('&');
        }
        return urlParts['base']+urlParts['query']+urlParts['hash'];
    }


    function removeFromShopsQueryParameter(url){
        var urlParts = splitUrl(url);
        var qs = urlParts['query'];
        if(qs){
            qs = qs.replace(/\?from=shops&?/, '?').replace('&from=shops', '');
        }
        return urlParts['base']+qs+urlParts['hash'];
    }

    function utf8Decode(value) {
        if(typeof value === 'string'){
            value = decodeURIComponent(escape(value));
        }
        else {
            $.each(value, function(key, val){
                value[key] = utf8Decode(val);
            });
        }
        return value;
    }


    function loadAjaxContent(url, data, callbackBefore, callbackAfter, $triggerElement){
        if( ! url || url.indexOf('javascript') == 0){
            return;
        }

        if (typeof data == 'string' || data instanceof String){
            data = parseQueryString(data);
        }
        data = data || {};

        data['xhr'] = 1;

        var e = $.Event( "load_ajax_content_before"); // entry point for changing data send
        e.requestData = data;
        e.requestUrl = url;
        e.triggerElement = $triggerElement;
        $('body').trigger( e );

        url = e.requestUrl;
        url = removeFromShopsQueryParameter(url);
        url = sortQueryParameters(url);
        isLoadingAjax = true;
        $.ajax({
            type: "GET",
            url: url,
            data: data,
            dataType: 'json',
            // cache: false, // avoid cached XHR response
            success: function(result) {
                try{
                    if(result['blocks']){
                        result.blocks = utf8Decode(result.blocks);
                    }
                    if(callbackBefore){
                        callbackBefore();
                    }
                    var urlForHistory = getUrlForHistory(url, data);
                    if(urlForHistory){
                        History['stateChangedByAjax'] = true;
                        History.pushState(null, document.title, urlForHistory);
                        History['stateChangedByAjax'] = false;
                    }
                    var originalRequest = {
                        url: url,
                        data: data
                    };
                    loadScripts(result['scripts'], function(){
                        processRequests(result['request']);
                        updateBlocks(result['blocks'], originalRequest);
                        evalScripts(result['blocks']);
                        document.fire('dom:loaded');	// prototype loaded async bugfix

                        if(typeof addSubmitEvent == 'function') {
                            // ajaxcartpro methods:
                            addSubmitEvent();
                            updateAddLinks();
                        }

                        //update form for touch
                        ajaxifyForms('#product_addtocart_form');
                    });
                    document.title = result['title'];
                    if(callbackAfter){
                        callbackAfter(result);
                    }
                }
                catch(e){
                    if(!isProd) console.log('LoadAjaxContent error. '+e+"\n"+ stacktrace());
                }
            },
            error: function(jqXHR, textStatus, errorThrown){
                if(textStatus != 'abort'){
                    if(!isProd) console.log('Request error.');
                }
            }
        });
    }


    function processRequests(requests)
    {
        var ajaxSyncUrls = requests['sync'];
        var ajaxAsyncUrls = requests['async'];
        var i = 0;
        if(ajaxSyncUrls.length > 0){
            var syncUrl = ajaxSyncUrls[i];
            $(document).bind("ajaxComplete.sync", function( event, xhr, settings ) {
                if(syncUrl == settings.url){
                    i++;
                    if(ajaxSyncUrls.length == i){
                        $(document).unbind(".sync");
                    }
                    else {
                        syncUrl = ajaxSyncUrls[i];
                        loadAjaxContent(syncUrl);
                    }
                }
            });
            loadAjaxContent(syncUrl);
        }
        if(ajaxAsyncUrls.length > 0){
            for(i=0; i<ajaxAsyncUrls.length; i++){
                var asyncUrl = ajaxAsyncUrls[i];
                loadAjaxContent(asyncUrl);
            }
        }
    }


    function loadScripts(scripts, callback){
        // remove already loaded scripts
        for (var i = scripts.length-1; i >=0; i--) {
            var jsFile = scripts[i].replace(/\?v=.+/g, '');
            if ($('script[src^="'+jsFile+'"]').length) {
                scripts.splice(i, 1);
            }
        }
        if(scripts.length){
            // JS_FILES
            yepnope({
                load: scripts,
                complete: function () {
                    callback();
                }
            });
        }
        else {
            callback();
        }
    }

    function removeScriptTags(html){
        return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    }

    function evalScripts(blocks){

        $.each( blocks, function( selector, html ) {
            var $inlineScripts = $(html).filter('script');
            $.each($inlineScripts, function(){
                // var jsCode = $(this).html();
                var $this = $(this);
                if($this.attr('src')) {
                    var script = document.createElement('script'), i, attrName, attrValue, attrs = this.attributes;
                    for(i = 0; i < attrs.length; i++) {
                        attrName = attrs[i].name;
                        attrValue = attrs[i].value;
                        script[attrName] = attrValue;
                    }
                    document.body.appendChild(script);
                } else {
                    var jsCode = this.innerHTML || $this.html() || '' ;
                    jsCode = jsCode.replace(/\/\/<!\[CDATA\[/g, '');
                    try{
                        $.globalEval(jsCode);
                    }
                    catch(e){
                        if(!isProd) console.log(e.message);
                    }
                }
            });
        });
    }


    function updateBlocks(blocksData, originalRequest){

        var e = $.Event( "blocks_update_global_before");
        e.blockData = blocksData;
        e.originalRequest = originalRequest;
        $('body').trigger( e );

        $.each( blocksData, function( selector, html ) {
            //var scripts = html.extractScripts().join("").replace(/\/\/<!\[CDATA\[/g, '').replace(/\/\/]]>/g, '');
            //html = html.stripScripts();
            html = removeScriptTags(html);
            var $container = $(selector);
            var data = {
                originalHtml : html,
                html : html
            };

            var e = $.Event( "block_update_before");
            e.blockData = data;
            e.originalRequest = originalRequest;
            $container.trigger( e );
            //$container.triggerHandler( e ); // avoid bubble
            if(data.html !== null){
                try {
                    $container.html(html);
                    //eval(scripts);
                }
                catch(e){
                    // prevents errors from the PDP with inline JS not evaluated correctly
                    if(!isProd) console.log(e.message);
                }
            }
        });
        $.each( blocksData, function( selector, html ) {
            var $container = $(selector);
            var data = {
                originalHtml : html,
                html : html
            };
            var e = $.Event( "block_update_after" );
            e.blockData = data;
            e.originalRequest = originalRequest;
            $container.trigger( e );
        });

        e = $.Event( "blocks_update_global_after");
        e.blockData = blocksData;
        e.originalRequest = originalRequest;
        $('body').trigger( e );
    }



    function getUlForProduct(id){
        var $li = getLiForProduct(id);
        return !!$li ? $li.parent() : null;
    }

    function getLiForProduct(id){
        var $li =  $('.products-grid').find(">li[data-productid='" + id + "']");
        if($li.length == 0){
            return null;
        }
        var $returnLi = $li.eq(0);
        if($li.length > 1){
            var $lastItemClicked = IPD.getLastItemClicked();
            if($lastItemClicked){
                $li.each(function(){
                    if($lastItemClicked.is(this)){
                        $returnLi = $(this);
                        return false;
                    }
                });
            }
        }
        return $returnLi;
    }


    function isBoutique(){
        return $('.category-image').length > 0;
    }

    var IPD = (function(){
        var containerId = 'product-container';
        var isAnimating = false;
        var lastItemClicked = null;
        var initScrollClose = function(){
            $(window).scroll(function() {
                if( !! pub.getContainer().length ){
                    if( ! isAnimating && ! pub.isModal() && ! pub.isVisible()){
                        pub.close();
                    }
                }
            });
        };
        var initSocialButtons = function(){
            if (typeof addthis === 'undefined') {
                // var url = "https://s7.addthis.com/js/250/addthis_widget.js#pubid=ra-4d793a61064763d0";
                var url = "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-4d793a61064763d0"; // new version
                yepnope([{
                    load: url,
                    complete: function () {
                        addthis.toolbox('.addthis_toolbox');
                    }
                }]);
            } else {
                addthis.toolbox('.addthis_toolbox');
            }
        };
        var initTabs = function(){
            $(".tab_content").hide();
            $("ul.tabs").on('click', 'li', function() {
                if(!$(this).hasClass('active')) {
                    $("ul.tabs li").removeClass("active");
                    $(this).addClass("active");
                    $(".tab_content").fadeOut(750);
                    var activeTab = $(this).find("a").attr("href");
                    $(activeTab).fadeIn(750);
                }
                return false;
            });
            var $firstTabVisible = $('ul.tabs li:visible').eq(0);
            $firstTabVisible.click();
            /* height of tabs */
            var proddata_offset_height = $('.product-view .product-shop').height();
            var totalHeight = 690;
            var socialHeight = 30;
            var separation = 70;
            var tab_height = (totalHeight - 168 - socialHeight - separation - proddata_offset_height);
            // $('.tab_container').css('height', tab_height );
        };
        var selectItem = function(){
            var ipdid = pub.getProductId();
            $('.category-view li.item').each(function() {
                var item_ip = ($(this).attr('data-productid'));
                if(item_ip == ipdid ){
                    $(this).find('.select-item').css('display', 'block');
                }
            });
        };
        var initFilterHover = function(){
            var clazz = 'removed-by-parent';
            $('body').on('mouseenter', '.currently a', function(){
                var $this = $(this);
                var $li = $this.closest('li');
                if($li.hasClass('category-filter') || $this.hasClass('every')){
                    var $filters = $('.currently').find('a');
                    $filters.addClass(clazz);
                    $filters.each(function(){
                        $(this).removeClass(clazz);
                        if($this.is(this)){
                            return false;
                        }
                    })
                }
            });
            $('body').on('mouseleave', '.currently a', function(){
                $('.currently').find('a').removeClass(clazz);
            });
        };
        var loadCategory = function(){
            // var categoryId = productCategoryId;
            // var url = window.location.href;
            var categoryUrl = productCategoryUrl;
            loadAjaxContent(categoryUrl, {handle:'init'}, function(){
                var $productContainer = pub.getContainer();
                $productContainer.detach();
                var $colMain = $('.col-main');
                $productContainer.insertBefore($colMain);
                ANIM.canAnimateProductList(false);
            }, function(){
                isAnimating = true;
                pub.positionInGrid();
            });
        };
        var isPdpPage = function(){
            return $('.product-view').length > 0;
        };
        var initSwipe = function(){
            $('#'+containerId+' .product-view').hammer()
                .on('swipeleft', function(){
                    var $nextLink = $('#next-product-link');
                    if($nextLink.css('display') != 'none'){
                        $nextLink.trigger('click');
                    }
                    return false;
                })
                .on('swiperight', function() {
                    var $prevLink = $('#prev-product-link');
                    if($prevLink.css('display') != 'none'){
                        $prevLink.trigger('click');
                    }
                    return false;
                });
        };
        var onWindowResize = function() {
            if(pub.isIpad()){
                pub.convertToModal();
            }else{
                pub.removeModal();
            }
        };
        var initResizeListener = function(){
            var resizeTimer;
            $(window).resize(function() {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(onWindowResize, 100);
            });
        };
        var initSkimlinks = function(){
            $('.buy-affiliate').each(function() {
                var $this = $(this);
                var href  = $this.attr('href');
                if(typeof href !== 'undefined') {
                    $this.on('click', function(e) {
                        var href  = $this.attr('href');
                        var target = $this.attr('target');
                        var that = $this[0];
                        var original = $this.attr('original-href');
                        if (original == null) {
                            $this.attr('original-href', href);
                            var original = href;
                        }
                        var replaced = $this.attr('replaced-href');
                        if (!replaced) {
                            mugicPopWin(e);
                            replaced = 'http://'+location.host+'/outbound.html?' + escape(original) + '&' + location.host + '&' + escape($this.attr('href'));
                            $this.attr('replaced-href', replaced);
                        }
                        $this.attr('href', replaced);
                    });
                } // end href !== undefined
            }); // end each
        };
        var initLastIpdClickTracker = function(){
            $('body').on('load_ajax_content_click_before', '.products-grid a', function(e){
                var $a = $(this);
                var $li = $a.closest('li.item');
                lastItemClicked = $li;
            });
        };
        var pub = {
            init : function(){
                initScrollClose();
                initFilterHover();
                initSwipe();
                initResizeListener();
                initLastIpdClickTracker();
                if(isPdpPage()){
                    loadCategory();
                    pub.reset();
                    pub.removeModal();
                }
            },
            reset : function(){
                if( ! isPdpPage()){
                    return;
                }
                pub.updateNextPrev();
                initSocialButtons();
                // initTabs();
                initSkimlinks();
                selectItem();
                $('#ipd-close-btn').on('click touchstart',function(){
                    pub.close(true);
                    return false; // prevent default so "click" is not fired in touch-enabled devices
                });
                if( ! pub.isTheStoryLoaded()){
                    pub.loadStory();
                }
                $(window).trigger('resize');
                GA.trackIpdEvents();
            },
            close : function(scrollToProduct) {
                var $ul = getUlForProduct(pub.getProductId()); // do this before removing the container!
                pub.getContainer().remove();
                $('.category-products li.item .select-item').hide();
                PRELOADER.hidePreloader();
                // Animate to the product that opened this IPD:
                if(!!scrollToProduct && $ul != null) {
                    isAnimating = true;
                    $('html, body').animate({
                        scrollTop: $ul.offset().top - 300
                    }, 500, function(){
                        isAnimating = false;
                    });
                }
            },
            getContainer : function(){
                return $('#'+containerId);
            },
            createContainer: function(){
                var productContainerHtml = '<div id="'+containerId+'"></div>';
                $('body').append($(productContainerHtml));
                initSwipe();
                onWindowResize();
            },
            positionInGrid : function($detachedContent){
                var $this = $detachedContent === undefined ? pub.getContainer().detach() : $detachedContent;
                var productId = pub.getProductId();
                var $ul = getUlForProduct(productId);
                if($ul !== null){
                    $this.insertAfter($ul);
                }else {
                    // insert at the top (this could happen when requesting a pdp url directly)
                    var $productList = $('#product-list-container');
                    var $toolbar = $productList.find('.toolbar');
                    if($toolbar.length){
                        $this.insertAfter($toolbar);
                    }else {
                        $productList.prepend($this);
                    }
                }
                $this.show();
                pub.reset();
                pub.animateTo();
            },
            getProductId : function(){
                return pub.getContainer().find('.product-view').data('productid');
            },
            isIpad : function(){
                var htmlHeight = $(window).height();
                return htmlHeight < 620;
            },
            convertToModal : function() {
                var $productContainer = pub.getContainer(),
                    htmlHeight = $(window).height();
                $productContainer
                    .addClass('wmodal')
                    .prop('style', null);
                if( htmlHeight < 860 && htmlHeight > 691 ){
                    $productContainer.find('.product-view').css({
                        height: htmlHeight,
                        'border-top-width': (htmlHeight - 690)/2,
                        'border-bottom-width': (htmlHeight - 690) / 2

                    });
                }
                if(isPdpPage()) {
                    $productContainer.css({
                        left: '0px',
                        display: 'block',
                        width: '100%'
                    });
                }
            },
            removeModal : function() {
                var $ipd = pub.getContainer();
                if(!!$ipd.length) {
                    $ipd.removeClass('wmodal');
                    // Resize IPD to fit window
                    var $pv = $ipd.find('.product-view');
                    $ipd.css({
                        left: -($ipd.parent().offset().left),
                        width: document.documentElement.clientWidth
                    });
                    if(!!$pv.length) {
                        $pv.removeAttr( 'style' );
                    }
                }
            },
            isVisible : function(){
                var $productContainer = pub.getContainer();
                if($productContainer.length){
                   var docViewTop = $(window).scrollTop();
                    var docViewBottom = docViewTop + $(window).height();

                    var elemTop = $productContainer.offset().top;
                    var elemBottom = elemTop + $productContainer.height();
                    return ((docViewTop < elemBottom) && (docViewBottom > elemTop));
                }
                return false;
            },
            isModal : function(){
                return pub.getContainer().hasClass('wmodal');
            },
            animateTo : function(scrollTop){
                var $productContainer = pub.getContainer();
                if($productContainer.length){
                    isAnimating = true;
                    if(scrollTop === undefined){
                        scrollTop =  $productContainer.offset().top - 300;
                    }
                    $('html, body').animate(
                        {
                            scrollTop: scrollTop
                        }, 500, function(){
                            isAnimating = false;
                        });
                }
            },
            updateNextPrev : function(){
                $('.category-products li.item .select-item').hide();
                var $nextLink = $('#next-product-link');
                var $prevLink = $('#prev-product-link');
                var nextLink = null;
                var prevLink = null;
                var productId = pub.getProductId();
                var $li = getLiForProduct(productId);
                if($li){
                    var $nextLi = $li.next();
                    if( ! $nextLi.length){
                        $nextLi = $li.parent().next().next().children("li:first");
                    }
                    if( $nextLi.length){
                        nextLink = $nextLi.find('.product-name a').attr('href');
                    }

                    var $prevLi = $li.prev();
                    if( ! $prevLi.length){
                        $prevLi = $li.parent().prev().children("li:last");
                    }
                    if( $prevLi.length){
                        prevLink = $prevLi.find('.product-name a').attr('href');
                    }
                }
                if(nextLink){
                    $nextLink.attr('href', nextLink);
                    $nextLink.show();
                    $nextLink.parent().find('img').attr('src', $nextLi.find('.product-image img').attr('src'));
                } else {
                    $nextLink.hide();
                }
                if(prevLink){
                    $prevLink.attr('href', prevLink);
                    $prevLink.show();
                    $prevLink.parent().find('img').attr('src', $prevLi.find('.product-image img').attr('src'));
                } else {
                    $prevLink.hide();
                }
            },
            isTheStoryLoaded: function(){
                var $productContainer = pub.getContainer();
                var $productView = $productContainer.find('.product-view');
                var storyLoaded = $productView.data('loadingstory');
                var loadingStory = $productView.data('storyloaded');
                return storyLoaded || loadingStory || $('#the-story-tab').is(':visible');
            },
            loadStory : function(){

                if( ! $('#tab1').length){
                    return;
                }

                var $productContainer = pub.getContainer();
                var $productView = $productContainer.find('.product-view');
                $productView.data('loadingstory', 1);
                var productId = pub.getProductId();
                //Load the story from ajax:
                $.ajax({
                        type: "GET",
                        url:  "http://www.refinery29.com/api/shop/products/"+productId+"/entries/latest",
                        data: {method:"GET"},
                        dataType: 'jsonp',
                        success: function(result) {
                            try{
                                if (result.length != 0){
                                    var storyTitle = result[0].title;
                                    var storyContent = result[0].excerpt;
                                    var storyUrl = result[0].url;
                                    var storyHtml = '<span class="featured subtitle">Featured in</span><h2>'+storyTitle+'</h2>'+'<p>'+storyContent+'... <a href="'+storyUrl+'" class="read-more-link">read</a></p>';
                                    $('#tab1').html(storyHtml);
                                    $('#the-story-tab').show();
                                }
                            }
                            catch(e){
                                if(!isProd) console.log('loadStory error. '+e+"\n"+ stacktrace());
                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown){
                            if(textStatus != 'abort'){
                                if(!isProd) console.log('Request error.');
                            }
                        },
                        complete: function(){
                            initTabs();
                            $productView.data('loadingstory', 0);
                            $productView.data('storyloaded', 1);
                        }
                    }
                );
            },
            getLastItemClicked: function(){
                return lastItemClicked;
            }
        };
        return pub;
    })();




    // animations
    var ANIM = (function(){
        var $removedProducts = false;
        var $removedBoutiqueHero = false;
        var isAnimating = false;
        var canAnimateProductList = true;
        var initRemoveFilterAnimation = function(){
            $('body').on('click', '.currently a', function(){
                var $this = $(this);
                if( ! $this.hasClass('every')){
                    anim.removeFilter($this);
                }
                var $chained = $('.currently .removed-by-parent');
                anim.removeFilter($chained);
                anim.hideResultsAmount();
            });
        };
        var initAddFilterAnimation = function(){
            $('body').on('load_ajax_content_before', function(e){
                var $trigger = e.triggerElement;
                if($trigger && $trigger.is('.block-layered-nav a')){
                    if( $trigger.hasClass('active')){
                        var triggerValue = $trigger.text();
                        $('.filters .btn-remove').each(function(){
                            var value = $(this).find('.value').text();
                            if(value == triggerValue){
                                anim.removeFilter($(this));
                                return false;
                            }
                        });
                    }
                    else {
                        var label = $trigger.closest('.filter-by-block').find('.filter-name').text();
                        var value = $trigger.text();
                        anim.createFilter(label, value);
                    }
                    anim.hideResultsAmount();
                }
            });
        };
        var anim = {
            init : function(){

                initRemoveFilterAnimation();
                initAddFilterAnimation();

                // global update before
                $('body').on('blocks_update_global_before', function(e){
                    $removedProducts = false;
                    $removedBoutiqueHero = false;
                    var isInfiniteScroll = e.originalRequest.data['handle'] == 'infinitescroll';
                    if( ! isInfiniteScroll){
                        var isInsertingProducts = false;
                        $.each(e.blockData, function( selector, html ) {
                            if(html.indexOf('class="products-grid') > 0){
                                isInsertingProducts = true;
                                return false;
                            }
                        });
                        if(isInsertingProducts){
                            $removedProducts = $('ul.products-grid').detach();
                            if($('.category-image').length){
                                $removedBoutiqueHero = $('.category-image').detach();
                            }
                        }
                    }
                });

                $('body').on('blocks_update_global_after', function(e){
                    anim.hideProducts(anim.showProducts);
                    anim.canAnimateProductList(true);
                });
            },
            showProducts : function(callback){
                if(callback === undefined){
                    callback = function(){};
                }
                var $ulProducts = $('ul.products-grid').not('.animated');
                var total = $ulProducts.length;
                if(total > 0){
                    if( ! anim.canAnimateProductList()){
                        $ulProducts.addClass('animated');
                        callback();
                    }
                    else {
                        $ulProducts.hide();
                        var i = 0;
                        var animRow = function($row){
                            isAnimating = true;
                            var current = i;
                            var duration = 1000;
                            $row.stop().fadeIn({
                                duration: duration,
                                progress: function( animation, progress, remainingMs ){
                                    if(current == i && remainingMs < duration*0.5){
                                        i++;
                                        if(i < total){
                                            var $ul = $ulProducts.eq(i);
                                            animRow($ul);
                                        }
                                    }
                                },
                                complete: function(){
                                    $(this).addClass('animated');
                                    if(i >= total){
                                        isAnimating = false;
                                        callback();
                                        e = $.Event('rows_animate_global_after');
                                        $('body').trigger( e );
                                    }
                                }
                            });
                        };
                        animRow($ulProducts.eq(0));
                    }
                }
                var $boutiqueHero = $('.category-image');
                $boutiqueHero.hide();
                $boutiqueHero.stop().slideDown(500, function(){

                });
            },
            hideProducts : function(callback){
                if(callback === undefined){
                    callback = function(){};
                }
                if($removedProducts && $removedProducts.length){
                    isAnimating = true;
                    IPD.close();
                    var $productListContainer = $('#product-list-container');
                    $('ul.products-grid').hide();
                    $('<div id="old-products" class="category-products"></div>').appendTo($productListContainer).append($removedProducts);
                    $removedProducts.parent().fadeOut(500, function(){
                        isAnimating = false;
                        $('#old-products').remove();
                        $removedProducts = false;
                        callback();
                    });
                    // hide new boutique hero (it will be shown inside showProducts)
                    $('.category-image').hide();
                    // hide old boutique hero with animation
                    if($removedBoutiqueHero){
                        $('<div id="old-boutique-hero"></div>').prependTo($productListContainer).append($removedBoutiqueHero);
                        $removedBoutiqueHero.parent().stop().slideUp(500, function(){
                            $('#old-boutique-hero').remove();
                            $removedBoutiqueHero = false;
                        });
                    }
                }
                else {
                    callback();
                }
            },
            createFilter : function(label, value) {
                var template =
                    '<li>'+
                        '<a class="btn-remove" href="#" title="Remove This Item">'+
                        '<span class="label">'+label+':</span> <span class="value">'+value+'</span>'+
                        '</a>'+
                        '</li>';
                var $li = $(template).appendTo('.currently .filters');
                var $a = $li.find('a');
                $a.css('font-size', '1px');
                $a.stop().animate({
                    'font-size':'10px'
                }, 300);
                // .hide().fadeIn(300);
            },
            removeFilter : function($filterAnchor){
                var $li = $filterAnchor.parent();
                // if this doesn't work well try: https://github.com/zachstronaut/jquery-css-transform or jQuery UI minified
                $filterAnchor.stop().animate({
                    'font-size':'3px'
                }, 300, function(){
                    $li.stop().animate({
                        opacity:'0'
                    }, 150)
                });
            },
            hideResultsAmount : function(){
                $('.toolbar .pager .amount').fadeOut(250);
            },
            isAnimating: function(){
                return isAnimating;
            },
            canAnimateProductList: function(value){
                if(value !== undefined){
                    canAnimateProductList = !!value;
                }else{
                    return canAnimateProductList;
                }
            }
        };
        return anim;
    }());


    // preloader
    var PRELOADER = (function(){
        var preloaderId = 'preloader';
        var preloaderHtml = '<div class="modal" id="'+preloaderId+'" style="width:100%; height:100%; position:absolute;margin-left: -16px; padding-right:40px;"><div class="preloader-spinner"></div></div>';
        var $context = null;
        var getPreloader = function(){
            return $('#'+preloaderId);
        };
        var createPreloader = function(){
            var $parent = $('body');
            if($context){
                $parent = $('.col-main');
                if($context == 'infinitescroll'){
                    $('body').addClass("infinitescroll");
                    return;
                }
                else if($context.is('.product-arrow-link')){
                    $parent = $('.product-view');
                }
                else if($context.is('.products-grid a')){
                    $parent = $context.closest('li.item');
                }
                else if($context.is('.product-arrow-link') && $context.closest('.wmodal').length >= 1){
                    $parent = $('.wrapper');
                }
                else if($context.is('.block-layered-nav a')){
                    $parent = $('.wrapper');
                }
            }
            $parent.css('position', 'relative');
            $(preloaderHtml).appendTo($parent);
        };
        var initSpinnerAlwaysCentered = function(){
            var resizeTimer = 0;
            $(window).resize(function() {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(preloader.centerSpinner, 100);
            });

            $(window).scroll(function() {
                preloader.centerSpinner();
            });
        };
        var hidePreloaderTimer = 0;
        var preloader = {
            init : function(){
                $( document ).ajaxStart(function() {
                    preloader.showPreloader();
                });
                $( document ).ajaxStop(function() {
                    isLoadingAjax = false;
                    preloader.hidePreloader();
                });
                $('body').on('load_ajax_content_before', function(e){
                    var handle = e.requestData['handle'];
                    if(handle == 'infinitescroll'){
                        PRELOADER.setContext('infinitescroll');
                    }else{
                        PRELOADER.setContext(e.triggerElement);
                    }
                    preloader.showPreloader();
                });
                initSpinnerAlwaysCentered();
            },
            setContext : function($element){
                $context = $element;
            },
            showPreloader : function(show){
                if(show === undefined) show = true;
                var $body = $('body');
                // hide preloader after after 10 sec just in case:
                if(hidePreloaderTimer){
                    clearTimeout(hidePreloaderTimer);
                }

                if(show) {
                    $body.addClass("loading");
                    getPreloader().remove();
                    createPreloader();
                    hidePreloaderTimer = setTimeout(function() { preloader.hidePreloader(); }, 15000);
                    preloader.centerSpinner();
                }
                else {
                    $body.removeClass("loading");
                    $body.removeClass("infinitescroll");
                    getPreloader().remove();
                }

            },
            hidePreloader: function(){
                preloader.showPreloader(false);
            },
            centerSpinner : function(){
                var $preloader = getPreloader();
                if(!!$preloader.length){
                    var $spinner = $preloader.find('.preloader-spinner');
                    var docViewTop = $(window).scrollTop();
                    var docViewBottom = docViewTop + $(window).height();
                    var elemTop = $preloader.offset().top;
                    var elemBottom = elemTop + $preloader.height();
                    var fullVisible = ((docViewTop <= elemTop) && (docViewBottom >= elemBottom));
                    if(fullVisible){
                        $spinner.css('top', '50%');
                    }else{
                        var visibleTop = Math.max(elemTop, docViewTop);
                        var visibleBottom = Math.min(elemBottom, docViewBottom);
                        var localTopYVisible = visibleTop - elemTop;
                        var localBottomYVisible = visibleBottom - elemTop;
                        var localPositionY =  Math.floor(localTopYVisible + (localBottomYVisible - localTopYVisible)*0.5);
                        //$preloader.css('background-position', '50% '+(localPositionY+'px'));
                        $spinner.css('top', localPositionY+'px');
                    }
                }
            }
        };
        return preloader;
    }());


    // GA events
    var GA = (function(){
        var trackNavigationEvents = function(){
            $('.nav').on('click', 'a', function(){
                var category = 'Navigation';
                var action = 'Click';
                var label = $(this).data('categoryname');
                public.trackEvent(category, action, label);
            });
        };
        var trackFilterEvents = function(){
            $('body').on('click', '#block-layered-nav-content a', function(){
                var category = 'Filters & Sort By';
                var action = 'Click';
                var label = $(this).closest('.filter-by-block').find('.filter-name').text();
                public.trackEvent(category, action, label);
            });
        };
        var trackSortByEvents = function(){
            $('body').on('click', '#sort-by-select a', function(){
                var category = 'Filters & Sort By';
                var action = 'Click';
                var label = $(this).text();
                public.trackEvent(category, action, label);
            });
        };
        var trackFeaturedStoriesEvents = function(){
            var category = 'Featured Stories';
            $('#boutiques-carousel').on('click', '.boutique a', function(){
                var action = 'Click';
                var label = $(this).find('.boutique-name').text();
                public.trackEvent(category, action, label);
            });
            $('.boutiques-control').on('click', 'a', function(){
                var action = 'Scroll';
                var label = this.id == 'prev' ? 'Left Arrow' : 'Right Arrow';
                public.trackEvent(category, action, label);
            });
        };
        var trackProductsEvents = function(){
            $('body').on('click', '#product-list-container .item a', function(){
                var category = 'Products';
                var action = 'Click';
                var label = 'Shop It Button';
                public.trackEvent(category, action, label);
            });
        };
        var trackSearchEvents = function(){
            $('body').on('submit', '#search_mini_form', function(){
                var category = 'Filters & Sort By';
                var action = 'Search';
                var label = $(this).find('#search').val();
                public.trackEvent(category, action, label);
            });
        };
        var currentIpdTracked = null;
        var trackerTimer = 0;
        var public = {
            init : function(){
                trackNavigationEvents();
                trackFilterEvents();
                trackSortByEvents();
                trackFeaturedStoriesEvents();
                trackProductsEvents();
                trackSearchEvents();
            },
            trackEvent : function(category, action, label){
                // prevents executing multiple times for the same event
                var minTime = 100;
                if ( trackerTimer) {
                    return;
                }
                trackerTimer = setTimeout(function() {
                    trackerTimer = 0;
                }, minTime);


                if(typeof(_gaq) != 'undefined'){
                    _gaq.push(['_trackEvent', category, action, label]);
                }

            },
            trackIpdEvents: function(){
                var ipdToTrack = IPD.getProductId();
                if(currentIpdTracked == ipdToTrack){
                    return;
                }
                currentIpdTracked = ipdToTrack;
                var category = 'Products';
                var $ipdContainer = IPD.getContainer();
                $ipdContainer.find('#ipd-close-btn').click(function(){
                    var action = 'Click';
                    var label = 'Close Button';
                    public.trackEvent(category, action, label);
                    currentIpdTracked = null;
                });
                $ipdContainer.find('.buy-affiliate').click(function(){
                    var action = 'Click';
                    var label = 'Buy Button';
                    public.trackEvent(category, action, label);
                });
                $ipdContainer.on('click', '.read-more-link', function(){
                    var action = 'Click';
                    var label = 'Read Button';
                    public.trackEvent(category, action, label);
                });
                $ipdContainer.find('.addthis_button_pinterest_pinit').click(function(){
                    var action = 'Click';
                    var label = 'Pin Button';
                    public.trackEvent(category, action, label);
                });
                $ipdContainer.find('.addthis_button_tweet').click(function(){
                    var action = 'Click';
                    var label = 'Tweet Button';
                    public.trackEvent(category, action, label);
                });
                $ipdContainer.find('.addthis_button_facebook_like').click(function(){
                    var action = 'Click';
                    var label = 'Like Button';
                    public.trackEvent(category, action, label);
                });
                $ipdContainer.find('.product-arrow-link').click(function(){
                    var action = 'Scroll';
                    var label = this.id == 'prev-product-link' ? 'Left Arrow' : 'Right Arrow';
                    public.trackEvent(category, action, label);
                });
            }
        };
        return public;
    }());


}( TheGrid, jQuery ));



