/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:p()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(v()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",Z),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&q(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},v=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},p=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",I)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",k),o.controls.autoEl.on("click",".bx-stop",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},I=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},q=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},Z=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&q(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",v()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),q(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",Z))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);;
$ = jQuery;
$(document).ready(function() { 

	$('body.i18n-en #edit-search-keys, body.i18n-en #edit-search-keys--3').attr("value", 'Search');
	$('body.i18n-fr #edit-search-keys, body.i18n-fr #edit-search-keys--3').attr("value", 'Recherche');
	var currenturl = window.location.pathname;
	var str = currenturl.split("/");	
	var lang = (str[1] == 'fr')  ? 'fr':'en';
	if(lang == 'fr'){
		searchtxt = "Recherche"
	} else {
		searchtxt = "Search";
	}
	
$('#edit-search-keys, #edit-search-keys--3').val(searchtxt);
	$('#edit-search-keys, #edit-search-keys--3').blur(function(){
		if($('#edit-search-keys, #edit-search-keys--3').val()==''){
			$('#edit-search-keys, #edit-search-keys--3').val(searchtxt);
		}
	});
	$('#edit-search-keys, #edit-search-keys--3').click(function(){
		if($('#edit-search-keys, #edit-search-keys--3').val()==searchtxt){
			$('#edit-search-keys, #edit-search-keys--3').val('');
		}
	});
	 var viewEmpty = $('.view-empty').text();
	 if(viewEmpty != ""){
		$('.refineWrapper h1').hide();
	 
	 }
	if(viewEmpty != '' && lang == 'fr'){
		$('.view-empty').html('<p>Aucun résultat trouvé.</p>')
	
	}

	$('ul#nice-menu-1 li.menu-1862 a').html('PORE REFINING<sup>&reg;</sup>');
	$('ul#nice-menu-1 li.menu-1881 a').html('WET SKIN<sup>&reg;</sup>');
	
	$('#edit-tid').change(function(){
		//$('#edit-tid-1').find("option[value='All']").attr("selected", true);
		//$('#edit-tid-2').find("option[value='All']").attr("selected", true);
		if(getUrlVar('from_menu')){
			site_href = location.pathname;
			var sections = site_href.split("/"); 
			var new_url = '';
			if(sections['1'] == 'fr'){
				new_url = sections['1']+'/'+sections['2'];
			}
			else{
				new_url = sections['1'];
			}						
			window.location.href = '/'+new_url;
			return;
		}
		else{
			$('.view-filters #views-exposed-form-products-page').submit();
		}
	});

	$('#edit-tid-1').change(function(){
		$('#edit-tid-2').find("option[value='All']").attr("selected", true);
		$('.view-filters #views-exposed-form-products-page').submit();
	});

	$('#edit-tid-2').change(function(){
		$('.view-filters #views-exposed-form-products-page').submit();
	});
	
	$('#edit-tid-3').change(function(){
		$('.view-filters #views-exposed-form-products-page').submit();
	});
			
	/* Solution for filtering */
	var category = $('.breadCrumbsWrap .breadcrumb a:eq(2)').text();
	if(getUrlVar('from_menu')){
		$('#edit-tid').find("option:eq(1)").attr("selected", true);
	}
	/* Solution for filtering */
	
	if(!($('#edit-tid-wrapper').find('.form-item-tid')).length > 0){
		$('.views-exposed-widgets #edit-tid-wrapper').css('display' , 'none');	
	}
	if(!($('#edit-tid-1-wrapper').find('.form-item-tid-1')).length > 0){
		$('.views-exposed-widgets #edit-tid-1-wrapper').css('display' , 'none');
	}
	if(!($('#edit-tid-2-wrapper').find('.form-item-tid-2')).length > 0){
		$('.views-exposed-widgets #edit-tid-2-wrapper').css('display' , 'none');
	}
	if(!($('#edit-tid-3-wrapper').find('.form-item-tid-3')).length > 0){
		$('.views-exposed-widgets #edit-tid-3-wrapper').css('display' , 'none');
	}
	
	$('#slider').bxSlider({
		slideWidth: 230,
    minSlides: 4,
    maxSlides: 4,
		moveSlides: 1,
		pager: false
	}); 
	/* $('#slider').css({'left' : '-235px'}); */

	/* Styling for the drop down */
	if($('#edit-tid').length){
		
	$('#edit-tid').selectBox();}
	if($('#edit-tid-1').length)$('#edit-tid-1').selectBox();
	if($('#edit-tid-2').length)$('#edit-tid-2').selectBox();
	if($('#edit-tid-3').length)$('#edit-tid-3').selectBox();
	/* Styling for the drop down */
	var pathname = window.location.pathname;	
	
	$('#footer-container ul.menufooter li.leaf ul.menufooter li a').each(function () {
			if($(this).attr("href") == pathname)
			$(this).addClass("active");
		});

	/* Highlighting the footer menu */
	if($('.view-content').length){
		var pathname = window.location.pathname;	
		$('#footer-container ul.menufooter li.leaf ul.menufooter li a').each(function () {
			if($(this).attr("href") == pathname)
			$(this).addClass("active");
		});
	}else if($('.productWrapper').length){
		var pathname = $('.breadCrumbsWrap .breadcrumb a:eq(2)').attr("href");	
		$('#footer-container ul.menufooter li.leaf ul.menufooter li a').each(function () {
			if($(this).attr("href") == pathname)
			$(this).addClass("active");
		});
	} 
	
	$('#footer-container ul.menufooter li.leaf ul.menufooter li a , #nice-menu-1 ul li a').click(function () {
		var path = $(this).attr("href");
		$(this).attr("href", path+'?from_menu=true');
		return;	
	});
	/* Highlighting the footer menu */


	/*BV show/hide on products description page start*/
	
	$("#prod_review_control").click(function(){

		$('.bvwrapper').toggle('fast',function(){

			$('#prod_review_control span').toggleClass("review_open");

		});

	});

	/*BV show/hide on products description page end*/


	/*** Add open/close image and toggling start **********/

 	faq = $('.faq').html();
	
	if(faq != '') {
		$('.faq-question a').each(function(i,obj){
			faqarrow = '<p>'+$(this).html()+ '</p><span class="faqArrow faqclose"></span>';
			$(this).html(faqarrow);
		});	
		
		$('.faq-question').on('click', function(e){
			e.preventDefault();
			$this = $(this).parent().find('.faq-answer');
			$this.slideToggle('fast');
			$(this).find('.faqArrow').toggleClass('faqopen');
		});
	} 

	$('#ntgca_readreview').click(function(){
		$('#BVSubmissionContainer_wrapper').hide();
		$('#BVRRContainer_wrapper').show();
		$('#ntgca_writereview').removeClass("activentgbutton");
		$('#ntgca_readreview').addClass("activentgbutton");
	});
	$('#ntgca_writereview').click(function(){
		$('#BVRRContainer_wrapper').hide();
		$('#BVSubmissionContainer_wrapper').show();
		$('#ntgca_readreview').removeClass("activentgbutton");
		$('#ntgca_writereview').addClass("activentgbutton");
	});

	/*** Add open/close image and toggling end **********/	

});

function getUrlVar(key){
    var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search); 
    return result && unescape(result[1]) || ""; 
};
function generateBV(prodid) {

$BV.configure("global", {

				allowSamePageSubmission: true,

				doShowSubmission: function() {
					$("#BVRRContainer").show();
				},
				onSubmissionReturn: function() {
					$("#BVRRContainer").hide();    
				},
				doScrollSubmission: function() {
					return false;
				}
			});			

			$BV.ui("rr", "show_reviews", { 
				productId: prodid,
				submissionContainerDiv: "BVSubmissionContainer",
				onEvent: function(json) {
					if ( json.eventSource == "Action" && json.eType =="Read" ) { 
						$("#BVSubmissionContainer_wrapper").hide();
						$("#BVRRContainer_wrapper").show();
				
						
						if($(".bvwrapper").css("display") == "none") {

							$(".bvwrapper").toggle("fast",function(){
								$(".bvwrapper").show();
								$("#prod_review_control span").toggleClass("review_open");

							});

						}
						$("#ntgca_writereview").removeClass("activentgbutton");
						$("#ntgca_readreview").addClass("activentgbutton");
					}
					else if ( json.eventSource == "Action" && json.eType =="Write" ) { 
						$("#BVRRContainer_wrapper").hide();
						$("#BVSubmissionContainer_wrapper").show();

						if($(".bvwrapper").css("display") == "none") {

							$(".bvwrapper").toggle("fast",function(){

								$("#prod_review_control span").toggleClass("review_open");

							});

						}

						$("#ntgca_readreview").removeClass("activentgbutton");
						$("#ntgca_writereview").addClass("activentgbutton");

					}
					else if ( json.eventSource == "Display" && json.eType =="Read" ) {

						$("#BVSubmissionContainer_wrapper").hide();
						$("#BVRRContainer_wrapper").show(); 

						// $(".bvwrapper").hide();
						$("#ntgca_writereview").removeClass("activentgbutton");
						$("#ntgca_readreview").addClass("activentgbutton");
						
					
					}
					
				}
			});
}
;
/*
 *  jQuery selectBox - A cosmetic, styleable replacement for SELECT elements
 *
 *  Copyright 2012 Cory LaViska for A Beautiful Site, LLC.
 *
 *  https://github.com/claviska/jquery-selectBox
 *
 *  Licensed under both the MIT license and the GNU GPLv2 (same as jQuery: http://jquery.org/license)
 *
 */
if(jQuery) (function($) {

	$.extend($.fn, {

		selectBox: function(method, data) {

			var typeTimer,
				typeSearch = '',
				isMac = navigator.platform.match(/mac/i);

			//
			// Private methods
			//

			var init = function(select, data) {
				
				var options;
				
				// Disable for iOS devices (their native controls are more suitable for a touch device)
				if( navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i) ) return false;

				// Element must be a select control
				if( select.tagName.toLowerCase() !== 'select' ) return false;

				select = $(select);
				if( select.data('selectBox-control') ) return false;

				var control = $('<a class="selectBox" />'),
					inline = select.attr('multiple') || parseInt(select.attr('size')) > 1;

				var settings = data || {};
				
				control
					.width(select.outerWidth())
					.addClass(select.attr('class'))
					.attr('title', select.attr('title') || '')
					.attr('tabindex', parseInt(select.attr('tabindex')))
					.css('display', 'inline-block')
					.bind('focus.selectBox', function() {
						if( this !== document.activeElement && document.body !== document.activeElement ) $(document.activeElement).blur();
						if( control.hasClass('selectBox-active') ) return;
						control.addClass('selectBox-active');
						select.trigger('focus');
					})
					.bind('blur.selectBox', function() {
						if( !control.hasClass('selectBox-active') ) return;
						control.removeClass('selectBox-active');
						select.trigger('blur');
					});
				
				if( !$(window).data('selectBox-bindings') ) {
					$(window)
						.data('selectBox-bindings', true)
						.bind('scroll.selectBox', hideMenus)
						.bind('resize.selectBox', hideMenus);
				}
				
				if( select.attr('disabled') ) control.addClass('selectBox-disabled');
				
				// Focus on control when label is clicked
				select.bind('click.selectBox', function(event) {
					control.focus();
					event.preventDefault();
				});

				// Generate control
				if( inline ) {

					//
					// Inline controls
					//
					options = getOptions(select, 'inline');

					control
						.append(options)
						.data('selectBox-options', options)
						.addClass('selectBox-inline selectBox-menuShowing')
						.bind('keydown.selectBox', function(event) {
							handleKeyDown(select, event);
						})
						.bind('keypress.selectBox', function(event) {
							handleKeyPress(select, event);
						})
						.bind('mousedown.selectBox', function(event) {
							if( $(event.target).is('A.selectBox-inline') ) event.preventDefault();
							if( !control.hasClass('selectBox-focus') ) control.focus();
						})
						.insertAfter(select);

					// Auto-height based on size attribute
					if( !select[0].style.height ) {

						var size = select.attr('size') ? parseInt(select.attr('size')) : 5;

						// Draw a dummy control off-screen, measure, and remove it
						var tmp = control
							.clone()
							.removeAttr('id')
							.css({
								position: 'absolute',
								top: '-9999em'
							})
							.show()
							.appendTo('body');
						tmp.find('.selectBox-options').html('<li><a>\u00A0</a></li>');
						var optionHeight = parseInt(tmp.find('.selectBox-options A:first').html('&nbsp;').outerHeight());
						tmp.remove();

						control.height(optionHeight * size);

					}

					disableSelection(control);

				} else {

					//
					// Dropdown controls
					//
					var label = $('<span class="selectBox-label" />'),
						arrow = $('<span class="selectBox-arrow" />');
					
					// Update label
					label
						.attr('class', getLabelClass(select))
						.text(getLabelText(select));
					
					options = getOptions(select, 'dropdown');
					options.appendTo('BODY');

					control
						.data('selectBox-options', options)
						.addClass('selectBox-dropdown')
						.append(label)
						.append(arrow)
						.bind('mousedown.selectBox', function(event) {
							if( control.hasClass('selectBox-menuShowing') ) {
								hideMenus();
							} else {
								event.stopPropagation();
								// Webkit fix to prevent premature selection of options
								options.data('selectBox-down-at-x', event.screenX).data('selectBox-down-at-y', event.screenY);
								showMenu(select);
							}
						})
						.bind('keydown.selectBox', function(event) {
							handleKeyDown(select, event);
						})
						.bind('keypress.selectBox', function(event) {
							handleKeyPress(select, event);
						})
						.bind('open.selectBox', function(event, triggerData) {
							if(triggerData && triggerData._selectBox === true) return;
							showMenu(select);
						})
						.bind('close.selectBox', function(event, triggerData) {
							if(triggerData && triggerData._selectBox === true) return;
							hideMenus();
						})						
						.insertAfter(select);
					
					// Set label width
					var labelWidth = control.width() - arrow.outerWidth() - parseInt(label.css('paddingLeft')) - parseInt(label.css('paddingLeft'));
					label.width(labelWidth);
					
					disableSelection(control);
					
				}

				// Store data for later use and show the control
				select
					.addClass('selectBox')
					.data('selectBox-control', control)
					.data('selectBox-settings', settings)
					.hide();
				
			};


			var getOptions = function(select, type) {
				var options;

				// Private function to handle recursion in the getOptions function.
				var _getOptions = function(select, options) {
					// Loop through the set in order of element children.
					select.children('OPTION, OPTGROUP').each( function() {
						// If the element is an option, add it to the list.
						if ($(this).is('OPTION')) {
							// Check for a value in the option found.
							if($(this).length > 0) {
								// Create an option form the found element.
								generateOptions($(this), options);
							}
							else {
								// No option information found, so add an empty.
								options.append('<li>\u00A0</li>');
							}
						}
						else {
							// If the element is an option group, add the group and call this function on it.
							var optgroup = $('<li class="selectBox-optgroup" />');
							optgroup.text($(this).attr('label'));
							options.append(optgroup);
							options = _getOptions($(this), options);
						}
					});
					// Return the built strin
					return options;
				};

				switch( type ) {

					case 'inline':

						options = $('<ul class="selectBox-options" />');
						options = _getOptions(select, options);
						
						options
							.find('A')
								.bind('mouseover.selectBox', function(event) {
									addHover(select, $(this).parent());
								})
								.bind('mouseout.selectBox', function(event) {
									removeHover(select, $(this).parent());
								})
								.bind('mousedown.selectBox', function(event) {
									event.preventDefault(); // Prevent options from being "dragged"
									if( !select.selectBox('control').hasClass('selectBox-active') ) select.selectBox('control').focus();
								})
								.bind('mouseup.selectBox', function(event) {
									hideMenus();
									selectOption(select, $(this).parent(), event);
								});

						disableSelection(options);

						return options;

					case 'dropdown':
						options = $('<ul class="selectBox-dropdown-menu selectBox-options" />');
						options = _getOptions(select, options);

						options
							.data('selectBox-select', select)
							.css('display', 'none')
							.appendTo('BODY')
							.find('A')
								.bind('mousedown.selectBox', function(event) {
									event.preventDefault(); // Prevent options from being "dragged"
									if( event.screenX === options.data('selectBox-down-at-x') && event.screenY === options.data('selectBox-down-at-y') ) {
										options.removeData('selectBox-down-at-x').removeData('selectBox-down-at-y');
										hideMenus();
									}
								})
								.bind('mouseup.selectBox', function(event) {
									if( event.screenX === options.data('selectBox-down-at-x') && event.screenY === options.data('selectBox-down-at-y') ) {
										return;
									} else {
										options.removeData('selectBox-down-at-x').removeData('selectBox-down-at-y');
									}
									selectOption(select, $(this).parent());
									hideMenus();
								}).bind('mouseover.selectBox', function(event) {
									addHover(select, $(this).parent());
								})
								.bind('mouseout.selectBox', function(event) {
									removeHover(select, $(this).parent());
								});
						
						// Inherit classes for dropdown menu
						var classes = select.attr('class') || '';
						if( classes !== '' ) {
							classes = classes.split(' ');
							for( var i in classes ) options.addClass(classes[i] + '-selectBox-dropdown-menu');
						}

						disableSelection(options);

						return options;

				}

			};
			
			
			var getLabelClass = function(select) {
				var selected = $(select).find('OPTION:selected');
				return ('selectBox-label ' + (selected.attr('class') || '')).replace(/\s+$/, '');
			};
			
			
			var getLabelText = function(select) {
				var selected = $(select).find('OPTION:selected');
				return selected.text() || '\u00A0';
			};
			
			
			var setLabel = function(select) {
				select = $(select);
				var control = select.data('selectBox-control');
				if( !control ) return;
				control.find('.selectBox-label').attr('class', getLabelClass(select)).text(getLabelText(select));
			};
			
			
			var destroy = function(select) {

				select = $(select);
				var control = select.data('selectBox-control');
				if( !control ) return;
				var options = control.data('selectBox-options');

				options.remove();
				control.remove();
				select
					.removeClass('selectBox')
					.removeData('selectBox-control').data('selectBox-control', null)
					.removeData('selectBox-settings').data('selectBox-settings', null)
					.show();

			};
			
			
			var refresh = function(select) {
				select = $(select);
				select.selectBox('options', select.html());
			};

			
			var showMenu = function(select) {

				select = $(select);
				var control = select.data('selectBox-control'),
					settings = select.data('selectBox-settings'),
					options = control.data('selectBox-options');
				if( control.hasClass('selectBox-disabled') ) return false;

				hideMenus();

				var borderBottomWidth = isNaN(control.css('borderBottomWidth')) ? 0 : parseInt(control.css('borderBottomWidth'));
				
				// Menu position
				options
					.width(control.innerWidth())
					.css({
						top: control.offset().top + control.outerHeight() - borderBottomWidth,
						left: control.offset().left
					});
				
				if( select.triggerHandler('beforeopen') ) return false;
				var dispatchOpenEvent = function() {
					select.triggerHandler('open', { _selectBox: true });
				};
				
				// Show menu
				switch( settings.menuTransition ) {

					case 'fade':
						options.fadeIn(settings.menuSpeed, dispatchOpenEvent);
						break;

					case 'slide':
						options.slideDown(settings.menuSpeed, dispatchOpenEvent);
						break;

					default:
						options.show(settings.menuSpeed, dispatchOpenEvent);
						break;

				}
				
				if( !settings.menuSpeed ) dispatchOpenEvent();
				
				// Center on selected option
				var li = options.find('.selectBox-selected:first');
				keepOptionInView(select, li, true);
				addHover(select, li);

				control.addClass('selectBox-menuShowing');

				$(document).bind('mousedown.selectBox', function(event) {
					if( $(event.target).parents().andSelf().hasClass('selectBox-options') ) return;
					hideMenus();
				});

			};


			var hideMenus = function() {

				if( $(".selectBox-dropdown-menu:visible").length === 0 ) return;
				$(document).unbind('mousedown.selectBox');

				$(".selectBox-dropdown-menu").each( function() {

					var options = $(this),
						select = options.data('selectBox-select'),
						control = select.data('selectBox-control'),
						settings = select.data('selectBox-settings');
					
					if( select.triggerHandler('beforeclose') ) return false;
					
					var dispatchCloseEvent = function() {
						select.triggerHandler('close', { _selectBox: true });
					};					
					
					switch( settings.menuTransition ) {

						case 'fade':
							options.fadeOut(settings.menuSpeed, dispatchCloseEvent);
							break;

						case 'slide':
							options.slideUp(settings.menuSpeed, dispatchCloseEvent);
							break;

						default:
							options.hide(settings.menuSpeed, dispatchCloseEvent);
							break;

					}
					
					if( !settings.menuSpeed ) dispatchCloseEvent();
					
					control.removeClass('selectBox-menuShowing');

				});

			};


			var selectOption = function(select, li, event) {

				select = $(select);
				li = $(li);
				var control = select.data('selectBox-control'),
					settings = select.data('selectBox-settings');

				if( control.hasClass('selectBox-disabled') ) return false;
				if( li.length === 0 || li.hasClass('selectBox-disabled') ) return false;

				if( select.attr('multiple') ) {

					// If event.shiftKey is true, this will select all options between li and the last li selected
					if( event.shiftKey && control.data('selectBox-last-selected') ) {

						li.toggleClass('selectBox-selected');

						var affectedOptions;
						if( li.index() > control.data('selectBox-last-selected').index() ) {
							affectedOptions = li.siblings().slice(control.data('selectBox-last-selected').index(), li.index());
						} else {
							affectedOptions = li.siblings().slice(li.index(), control.data('selectBox-last-selected').index());
						}

						affectedOptions = affectedOptions.not('.selectBox-optgroup, .selectBox-disabled');

						if( li.hasClass('selectBox-selected') ) {
							affectedOptions.addClass('selectBox-selected');
						} else {
							affectedOptions.removeClass('selectBox-selected');
						}

					} else if( (isMac && event.metaKey) || (!isMac && event.ctrlKey) ) {
						li.toggleClass('selectBox-selected');
					} else {
						li.siblings().removeClass('selectBox-selected');
						li.addClass('selectBox-selected');
					}

				} else {
					li.siblings().removeClass('selectBox-selected');
					li.addClass('selectBox-selected');
				}

				if( control.hasClass('selectBox-dropdown') ) {
					control.find('.selectBox-label').text(li.text());
				}
				
				// Update original control's value
				var i = 0, selection = [];
				if( select.attr('multiple') ) {
					control.find('.selectBox-selected A').each( function() {
						selection[i++] = $(this).attr('rel');
					});
				} else {
					selection = li.find('A').attr('rel');
				}
				
				// Remember most recently selected item
				control.data('selectBox-last-selected', li);

				// Change callback
				if( select.val() !== selection ) {
					select.val(selection);
					setLabel(select);
					select.trigger('change');
				}

				return true;

			};


			var addHover = function(select, li) {
				select = $(select);
				li = $(li);
				var control = select.data('selectBox-control'),
					options = control.data('selectBox-options');

				options.find('.selectBox-hover').removeClass('selectBox-hover');
				li.addClass('selectBox-hover');
			};


			var removeHover = function(select, li) {
				select = $(select);
				li = $(li);
				var control = select.data('selectBox-control'),
					options = control.data('selectBox-options');
				options.find('.selectBox-hover').removeClass('selectBox-hover');
			};


			var keepOptionInView = function(select, li, center) {

				if( !li || li.length === 0 ) return;

				select = $(select);
				var control = select.data('selectBox-control'),
					options = control.data('selectBox-options'),
					scrollBox = control.hasClass('selectBox-dropdown') ? options : options.parent(),
					top = parseInt(li.offset().top - scrollBox.position().top),
					bottom = parseInt(top + li.outerHeight());

				if( center ) {
					scrollBox.scrollTop( li.offset().top - scrollBox.offset().top + scrollBox.scrollTop() - (scrollBox.height() / 2) );
				} else {
					if( top < 0 ) {
						scrollBox.scrollTop( li.offset().top - scrollBox.offset().top + scrollBox.scrollTop() );
					}
					if( bottom > scrollBox.height() ) {
						scrollBox.scrollTop( (li.offset().top + li.outerHeight()) - scrollBox.offset().top + scrollBox.scrollTop() - scrollBox.height() );
					}
				}

			};


			var handleKeyDown = function(select, event) {

				//
				// Handles open/close and arrow key functionality
				//

				select = $(select);
				var control = select.data('selectBox-control'),
					options = control.data('selectBox-options'),
					settings = select.data('selectBox-settings'),
					totalOptions = 0,
					i = 0;

				if( control.hasClass('selectBox-disabled') ) return;

				switch( event.keyCode ) {

					case 8: // backspace
						event.preventDefault();
						typeSearch = '';
						break;

					case 9: // tab
					case 27: // esc
						hideMenus();
						removeHover(select);
						break;

					case 13: // enter
						if( control.hasClass('selectBox-menuShowing') ) {
							selectOption(select, options.find('LI.selectBox-hover:first'), event);
							if( control.hasClass('selectBox-dropdown') ) hideMenus();
						} else {
							showMenu(select);
						}
						break;

					case 38: // up
					case 37: // left

						event.preventDefault();

						if( control.hasClass('selectBox-menuShowing') ) {

							var prev = options.find('.selectBox-hover').prev('LI');
							totalOptions = options.find('LI:not(.selectBox-optgroup)').length;
							i = 0;

							while( prev.length === 0 || prev.hasClass('selectBox-disabled') || prev.hasClass('selectBox-optgroup') ) {
								prev = prev.prev('LI');
								if( prev.length === 0 ) {
									if (settings.loopOptions) {
										prev = options.find('LI:last');
									} else {
										prev = options.find('LI:first');
									}
								}
								if( ++i >= totalOptions ) break;
							}

							addHover(select, prev);
							selectOption(select, prev, event);
							keepOptionInView(select, prev);

						} else {
							showMenu(select);
						}

						break;

					case 40: // down
					case 39: // right

						event.preventDefault();

						if( control.hasClass('selectBox-menuShowing') ) {

							var next = options.find('.selectBox-hover').next('LI');
							totalOptions = options.find('LI:not(.selectBox-optgroup)').length;
							i = 0;

							while( next.length === 0 || next.hasClass('selectBox-disabled') || next.hasClass('selectBox-optgroup') ) {
								next = next.next('LI');
								if( next.length === 0 ) {
									if (settings.loopOptions) {
										next = options.find('LI:first');
									} else {
										next = options.find('LI:last');
									}
								}
								if( ++i >= totalOptions ) break;
							}

							addHover(select, next);
							selectOption(select, next, event);
							keepOptionInView(select, next);

						} else {
							showMenu(select);
						}

						break;

				}

			};


			var handleKeyPress = function(select, event) {

				//
				// Handles type-to-find functionality
				//

				select = $(select);
				var control = select.data('selectBox-control'),
					options = control.data('selectBox-options');

				if( control.hasClass('selectBox-disabled') ) return;

				switch( event.keyCode ) {

					case 9: // tab
					case 27: // esc
					case 13: // enter
					case 38: // up
					case 37: // left
					case 40: // down
					case 39: // right
						// Don't interfere with the keydown event!
						break;

					default: // Type to find

						if( !control.hasClass('selectBox-menuShowing') ) showMenu(select);

						event.preventDefault();

						clearTimeout(typeTimer);
						typeSearch += String.fromCharCode(event.charCode || event.keyCode);

						options.find('A').each( function() {
							if( $(this).text().substr(0, typeSearch.length).toLowerCase() === typeSearch.toLowerCase() ) {
								addHover(select, $(this).parent());
								keepOptionInView(select, $(this).parent());
								return false;
							}
						});

						// Clear after a brief pause
						typeTimer = setTimeout( function() { typeSearch = ''; }, 1000);

						break;

				}

			};


			var enable = function(select) {
				select = $(select);
				select.attr('disabled', false);
				var control = select.data('selectBox-control');
				if( !control ) return;
				control.removeClass('selectBox-disabled');
			};


			var disable = function(select) {
				select = $(select);
				select.attr('disabled', true);
				var control = select.data('selectBox-control');
				if( !control ) return;
				control.addClass('selectBox-disabled');
			};


			var setValue = function(select, value) {
				select = $(select);
				select.val(value);
				value = select.val();
				var control = select.data('selectBox-control');
				if( !control ) return;
				var settings = select.data('selectBox-settings'),
					options = control.data('selectBox-options');

				// Update label
				setLabel(select);
				
				// Update control values
				options.find('.selectBox-selected').removeClass('selectBox-selected');
				options.find('A').each( function() {
					if( typeof(value) === 'object' ) {
						for( var i = 0; i < value.length; i++ ) {
							if( $(this).attr('rel') == value[i] ) {
								$(this).parent().addClass('selectBox-selected');
							}
						}
					} else {
						if( $(this).attr('rel') == value ) {
							$(this).parent().addClass('selectBox-selected');
						}
					}
				});

				if( settings.change ) settings.change.call(select);

			};


			var setOptions = function(select, options) {

				select = $(select);
				var control = select.data('selectBox-control'),
					settings = select.data('selectBox-settings');

				switch( typeof(data) ) {

					case 'string':
						select.html(data);
						break;

					case 'object':
						select.html('');
						for( var i in data ) {
							if( data[i] === null ) continue;
							if( typeof(data[i]) === 'object' ) {
								var optgroup = $('<optgroup label="' + i + '" />');
								for( var j in data[i] ) {
									optgroup.append('<option value="' + j + '">' + data[i][j] + '</option>');
								}
								select.append(optgroup);
							} else {
								var option = $('<option value="' + i + '">' + data[i] + '</option>');
								select.append(option);
							}
						}
						break;

				}

				if( !control ) return;

				// Remove old options
				control.data('selectBox-options').remove();

				// Generate new options
				var type = control.hasClass('selectBox-dropdown') ? 'dropdown' : 'inline';
				options = getOptions(select, type);
				control.data('selectBox-options', options);

				switch( type ) {
					case 'inline':
						control.append(options);
						break;
					case 'dropdown':
						// Update label
						setLabel(select);
						$("BODY").append(options);
						break;
				}

			};


			var disableSelection = function(selector) {
				$(selector)
					.css('MozUserSelect', 'none')
					.bind('selectstart', function(event) {
						event.preventDefault();
					});
			};

			var generateOptions = function(self, options){
				var li = $('<li />'),
				a = $('<a />');
				li.addClass( self.attr('class') );
				li.data( self.data() );
				a.attr('rel', self.val()).text( self.text() );
				li.append(a);
				if( self.attr('disabled') ) li.addClass('selectBox-disabled');
				if( self.attr('selected') ) li.addClass('selectBox-selected');
				options.append(li);
			};

			//
			// Public methods
			//

			switch( method ) {

				case 'control':
					return $(this).data('selectBox-control');

				case 'settings':
					if( !data ) return $(this).data('selectBox-settings');
					$(this).each( function() {
						$(this).data('selectBox-settings', $.extend(true, $(this).data('selectBox-settings'), data));
					});
					break;

				case 'options':
					// Getter
					if( data === undefined ) return $(this).data('selectBox-control').data('selectBox-options');
					// Setter
					$(this).each( function() {
						setOptions(this, data);
					});
					break;

				case 'value':
					// Empty string is a valid value
					if( data === undefined ) return $(this).val();
					$(this).each( function() {
						setValue(this, data);
					});
					break;
				
				case 'refresh':
					$(this).each( function() {
						refresh(this);
					});
					break;

				case 'enable':
					$(this).each( function() {
						enable(this);
					});
					break;

				case 'disable':
					$(this).each( function() {
						disable(this);
					});
					break;

				case 'destroy':
					$(this).each( function() {
						destroy(this);
					});
					break;

				default:
					$(this).each( function() {
						init(this, method);
					});
					break;

			}

			return $(this);

		}

	});

})(jQuery);;
