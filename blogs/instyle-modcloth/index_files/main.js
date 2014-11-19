var hasTouch = false;

if (('ontouchstart' in document.documentElement)) {
    document.documentElement.className += ' touch';
    hasTouch = true;
}

var popupWindow = null;
function centeredPopup(url,winName,w,h,scroll) {
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	popupWindow = window.open(url,winName,settings);
}

function createPinItButtons() {
	$('.single .entry img, .posts .post .entry img, .posts .post .img-grid img').not('.no-pin').each(function() {
		var $el = $(this);
		if($el.is('.wp-caption img')) {
			$el.closest('.wp-caption').addClass('pinterest-button');
		} else if($el.is('a>img')) {
			var classes = $el.attr('class');
			$el.closest('a').wrap('<span class="pinterest-button ' + classes +'" />');
		} else {
			var classes = $el.attr('class');
			$el.wrap('<span class="pinterest-button ' + classes +'" />');
		}
		
		var $headline = $el.closest('.post').find('header h1 a:eq(0)');
		var href = $headline.attr('href');
		var src = $el.attr('src');
		src = src.split(/-\d+x\d+\./);
		if(src.length > 1) {
			src = src[0] + '.' + src[1];
		}

		
		$el.after('<a href="http://pinterest.com/pin/create/button/?url=' + href + '&amp;media=' + src + '&amp;description=' + $headline.text() + 
			'" class="pin-it-button" count-layout="horizontal" target="_blank"><img border="0" src="//assets.pinterest.com/images/PinExt.png" title="Pin It" class="pinit-img" /></a>');
		
		$el.attr('class', '');
		
	});
}

$(document).ready(function() {
	
	$.expr[':'].childof = function(obj, index, meta, stack){
	    return $(obj).parent().is(meta[3]);
	};
	
	$('.dropdown-toggle').dropdown();
	
	$('#sidebar .module').on('click', 'a', function(event) {
		var site = $(this).closest('.module').find('.site_logo a').text();
		var lnk = $(this).attr('href');
		_gaq.push(['_trackEvent', 'Partner Outclick', site, lnk]);
	});
	
	createPinItButtons();
	
	$('.ob_org_header').addClass('section-header');
	
	
	$('.carousel').carousel();
	
	if(jQuery().isotope) {
		$('.masonry').isotope({
		  // options
		  itemSelector : '.tile',
		  layoutMode : 'masonry'
		});
	}
	
	$('#latest').infinitescroll({
    navSelector  : 'div.pagination',                  
    nextSelector : 'div.pagination .older a:first',
    itemSelector : '#latest .posts',
		loading: {
			img: 'http://fashionista.com/uploads/2012/07/inf-loading-1401594213.gif'
			}
		}, function(arrayOfNewElems) {
			FB.XFBML.parse();
			
  });
	
	
	$('[data-toggle="collapse"]').each(function() {
		
		var tgt = $(this).attr('data-target');
		$(this).click(function() {
			$(tgt).toggle();
		});
		
	});
	

	
	$('.btn-share').on('hover click', function() {
		$(this).closest('.article-share').addClass('active');
	});
	$('div, section, article, body *').filter(':not(childof.article-share)').on('click', function() {
		$('.article-share').removeClass('active');
	});
	
	
	$('a[target="_share"]').on('click', function(e) {
		
		var url = $(this).attr('href');
		
		centeredPopup(url, 'share', 500, 550, true);
		
		e.preventDefault();
		
	});
	
	
	$('.auto-select').click(function() {
		$(this).select();
	});
	
	// Toggle main nav w/ icon in top navbar
	$('.nav-trigger').click(function() {
		$('.nav-main').toggle();
		$('#masthead, .content').toggleClass('shoved');
	});
	
	// Toggle search w/ icon in top navbar
	$('.search-trigger').click(function() {
		$(this).toggleClass('active');
		$('.search-bar').slideToggle();
		$('#s').focus();
	});
	
	
	$('a').filter(function() {
	   return this.hostname && this.hostname !== location.hostname;
	}).attr('target', '_blank');
	
	
});
