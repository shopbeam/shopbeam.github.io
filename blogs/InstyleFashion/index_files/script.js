(function($) {

window.INSTYLE = window.INSTYLE || {};
INSTYLE.Behaviors = INSTYLE.Behaviors || {};

/*
	Load separate javascript file if module exists in DOM
	Based on module className
*/
INSTYLE.loadJS = function(scriptName) {
	var s = document.createElement('script');
	s.type = 'text/javascript';
	s.async = true;
	s.src = scriptName + '.js';
	document.getElementsByTagName('body')[0].appendChild(s);
};

INSTYLE.LoadModuleDependencies = function() {
	var modules = [
		'module-lotd',
		'module-feature-hero',
		'module-most-popular-stories',
		'module-flex-promo-video',
		'module-event-carousel',
		'module-live-event-updates',
		'module-single-item-post'
	];

	$(modules).each(function (index, cName) {
		fileName = 'http://www.instyle.com/instyle/static/v4/js/modules/' + cName;
		if ($('.' + cName).length > 0) {
			INSTYLE.loadJS(fileName);
		}
	});
};

INSTYLE.LoadModuleDependencies();


// Site Header/Navigation UI
INSTYLE.Behaviors.siteHeader = function() {

	var $module = $('#site-header');

	function _revealMagazineCover() {
		var $trigger = $('#header-magazine-cover-image');

		// Reveal full magazine cover image on non-touch devices only
		if (!Modernizr.touch) {
			$trigger.hover(function(){
				var $this = $(this);

				$this.stop().animate({
					'bottom': 24
				}, 100);
				$this.prev().stop().animate({
					'opacity': 0
				}, 200);

			}, function(){
				var $this = $(this);

				$this.stop().animate({
					'bottom': -4
				}, 200);
				$this.prev().stop().animate({
					'opacity': 1
				}, 200);

			});
		}
	}

	function _condensedHeader() {
		$(function(){
			var y_scroll_pos = $(window).scrollTop();
			var scroll_ticking = false;

			if(!$('body').hasClass('page-gallery')){
				$(window).on('scroll', function() {
					y_scroll_pos = Math.max($(window).scrollTop(), 0);
					requestScrollTick();
				});

				scrollUpdate();
			}


			function requestScrollTick(){
				if(!scroll_ticking) {
					requestAnimationFrame(scrollUpdate);
				}
				scroll_ticking = true;
			}


			function scrollUpdate(){
				scroll_ticking = false;
				var scroll_target_1 = 70;
				var scroll_target_2 = scroll_target_1 + 50;
				var bar_height = 110;

				// Calculations for changing logo height
				var logo_start_h = 36;
				var logo_end_h = 27;
				var logo_height_delta = (logo_start_h - logo_end_h) / scroll_target_1;

				// Calculations for changing logo width
				var logo_start_w = 160;
				var logo_end_w = 120;
				var logo_width_delta = (logo_start_w - logo_end_w) / scroll_target_1;

				// Calculations for changing logo top margin
				var logo_start_m = -18;
				var logo_end_m = -12;
				var logo_margin_delta = (logo_start_m - logo_end_m) / scroll_target_1;

				// Calculations for changing nav left position
				var nav_start_left = 188;
				var nav_end_left = 138;
				var nav_left_delta = (nav_start_left - nav_end_left) / scroll_target_1;

				// Calculations for changing font size
				var nav_start_font = 24;
				var nav_end_font = 20;
				var nav_font_delta = (nav_start_font - nav_end_font) / scroll_target_1;

				// Calculations for changing magazine cover area height
				var mag_start_h = 110;
				var mag_end_h = 40;
				var mag_height_delta = (mag_start_h - mag_end_h) / scroll_target_1;

				// As soon as the user begins to scroll, the collapsed search bar state will be displayed
				if(y_scroll_pos > 15) {
					$module.addClass('condensed-search');
				} else {
					$module.removeClass('condensed-search');
				}

				// If scrolling between top of page and 'scroll_target_1', gradually shrink the bar
				if(y_scroll_pos <= scroll_target_1) {

					$module.find('.top-bar').height(bar_height - y_scroll_pos);
					$module.find('.site-logo').css({
						'height': logo_start_h - (logo_height_delta * y_scroll_pos),
						'width': logo_start_w - (logo_width_delta * y_scroll_pos),
						'margin-top': logo_start_m - (logo_margin_delta * y_scroll_pos)
					});
					$module.find('.site-nav').css({
						'left': nav_start_left - (nav_left_delta * y_scroll_pos)
					}).children('ul').children('li').children('a').css({
						'font-size': nav_start_font - (nav_font_delta * y_scroll_pos)
					});
					$module.find('.magazine-cover').css({
						'height': mag_start_h - (mag_height_delta * y_scroll_pos)
					});


					$module.removeClass('condensed');

					$('body').removeClass('bottom-bar-locked');
				}
				// Else if past 'scroll_target_1', but not 'scroll_target_2'
				else if(y_scroll_pos <= scroll_target_2){
					$module.find('.top-bar').height(bar_height - scroll_target_1);
					$module.find('.site-logo').css({
						'height': logo_end_h,
						'width': logo_end_w,
						'margin-top': logo_end_m
					});
					$module.find('.site-nav').css({
						'left': nav_end_left
					}).children('ul').children('li').children('a').css({
						'font-size': nav_end_font
					});
					$module.find('.magazine-cover').css({
						'height': mag_end_h
					});

					$module.removeClass('condensed');

					$('body').addClass('bottom-bar-locked');
				}
				// Else if past 'scroll_target_1' and 'scroll_target_2', ie. subnav is no longer visible
				else {
					$module.find('.top-bar').height(bar_height - scroll_target_1);
					$module.find('.site-logo').css({
						'height': logo_end_h,
						'width': logo_end_w,
						'margin-top': logo_end_m
					});
					$module.find('.site-nav').css({
						'left': nav_end_left
					}).children('ul').children('li').children('a').css({
						'font-size': nav_end_font
					});
					$module.find('.magazine-cover').css({
						'height': mag_end_h
					});

					$module.addClass('condensed');

					$('body').addClass('bottom-bar-locked');
				}
			}
		});
	}

	function _navDropDowns() {
		var $trigger = $('.has-nav-dropdown > a');
		var $pane = $('.nav-dropdown');
		var $close = $('.icon-close');

		function _clearDropDowns(e) {
			if (typeof e != 'undefined') {
			e.preventDefault();
		}
			$trigger.parent().removeClass('active');
			$pane.hide();

		}

		if (Modernizr.touch) {

			// Trigger on click for touch devices
			$trigger.click(function(e){
				e.preventDefault();

				var $this = $(this);

				//_clearDropDowns();
				$trigger.parent().not($this.parent()).removeClass('active');
				$pane.not($this.next()).hide();

				$this.parent().toggleClass('active');

				if($this.parent().hasClass('nav-most-popular')){
					// 'Most Popular' dropdown menu should slide up/down
					$this.next().slideToggle(200);
				} else {
					// Else show/hide
					$this.next().toggle();
				}

			});

			// Close
			$close.on('click', _clearDropDowns);

			// Close when clicking anywhere outside dropdown menu
			$pane.bind('clickoutside touchendoutside', function(e){
				// If dropdown menu is exposed
				if (!$(e.target).closest('.has-nav-dropdown').length && $(this).is(':visible')) {
					_clearDropDowns();
				}
			});

		} else {

			// Else trigger on hover for non-touch devices
			$trigger.parent().hoverIntent(function(){

				var $this = $(this);

				$this.toggleClass('active');

				if($this.hasClass('nav-most-popular')){
					// 'Most Popular' dropdown menu should slide up/down
					$this.find('.nav-dropdown').slideToggle(200);
				} else {
					// Else show/hide
					$this.find('.nav-dropdown').toggle();
				}

			});

		}

	}

	function _headerSearch() {
		var $trigger = $('#header-search-trigger');
		var $pane = $('#header-search-pane');
		var $form = $('#header-search-form');
		var $input = $('.header-search-field');
		var $submit = $('.header-search-submit');
		var $wrapper = $('.top-bar > .wrap');

		function _hideSearch() {
			$pane.animate({
				'right': -$pane.width()
			}, 'fast', 'easeOutQuad', function(){
				$input.blur();
				$(this).hide();
				$wrapper.css({
					'overflow': 'visible'
				});
			});
		}

		$trigger.click(function(e){
			e.preventDefault();

			$wrapper.css({
				'overflow': 'hidden'
			});

			$pane.show().animate({
				'right': 0
			}, 'fast', 'easeInQuad', function(){
				$input.focus();
			});

		});

		// Close on ESC key
		$(document).bind('keydown', function(e) {
			if($pane.is(':visible')){
				if (e.which == 27) {
					_hideSearch();
				}
			}
		});

		// Close when clicked anywhere outside elem
		$trigger.bind('clickoutside touchendoutside', function(e){
			if (!$(e.target).closest('#header-search-form').length && $pane.is(':visible')) {
				_hideSearch();
			}
		});

	}

	_revealMagazineCover();
	_condensedHeader();
	_navDropDowns();
	_headerSearch();

};

INSTYLE.Behaviors.savePageLocation = function(context) {
	var galleryPagePath = '/templates/basic-gallery.php';
	// Don't store the gallery as a path as it acts like an overlay.
	// if (window.location.pathname == galleryPagePath) return;
// 	setCookie( 'lastPage', window.location.href, 10 );
// 	setCookie( 'lastPagePath', window.location.pathname, 10 );
};

INSTYLE.Behaviors.jCarousel = function(context) {
	context = typeof context == 'undefined' ? document : context;
	var $module = $('.module-related-galleries');
	var $jCarousel = $module.find('.jcarousel');

	$jCarousel.each(function() {
		var $carousel = $(this);
		var $wrapper = $carousel.parent().parent();
		var $prev = $('.jcarousel-control-prev', $wrapper);
		var $next = $('.jcarousel-control-next', $wrapper);
		var $pagination = $('.jcarousel-pagination', $wrapper);
		var $item = $carousel.find('.gallery-carousel-item');

		var jcarouselData = $carousel.jcarousel({
			// Options go here
			animation: 600
		}).data('jcarousel');

		// Force last pagination item to be activated when carousel is scrolled to the end:
		$carousel.on('jcarousel:animateend', function(event, carousel) {
			// "this" refers to the item element
			// "carousel" is the jCarousel instance
			var items = carousel.items();
			var w = 0;
			items.each(function(){
				w += carousel.dimension($(this));
			});
			var left = -pxToInt(carousel.list().css('left')) + carousel.clipping();
			if (left == w) {
				$('a', $pagination).last().trigger('click');
			}
		});

		// Next Control. Sync with active pagination item
		$next.on('click', function(event) {
			event.preventDefault();
			$pagination.find('.active').next().trigger('click');
		});
		
		// Prev Control. Sync with active pagination item
		$prev.on('click', function(event) {
			event.preventDefault();
			$pagination.find('.active').prev().trigger('click');
		});
	
		/*
		Pagination initialization
		*/
		var paginationData = $pagination
		.on('jcarouselpagination:active', 'a', function() {
			$(this).addClass('active');
		})
		.on('jcarouselpagination:inactive', 'a', function() {
			$(this).removeClass('active');
		})
		.on('click', function(e) {
			e.preventDefault();
		}).jcarouselPagination({
			// jCarousel assumes if we've seen part of a slide, we don't need to see the rest. Override that.
			perPage: _calculatePages,
			//remove href hash since it was conflicting with the gallery page urls
			'item': function(page, carouselItems) {
				return '<a>' + page + '</a>';
			}
		}).data('jcarouselPagination');

		function _calculatePages() {
			var carousel = this.carousel().data('jcarousel');
			var items	= carousel.items();
			var clip  = carousel.clipping();
			var wh    = 0;
			var idx   = 0;
			var page  = 1;
			var curr;
			var count = 0;

			while (true && count < 500) {
				count++;
				curr = items.eq(idx++);

			// Stop when the item no longer exists
			if (curr.length === 0) {
				break;
			}

			// Start a new page if temporary page width exceeds width of clip.
			// NOTE: jCarousel was doing this at the end of the iteration,
			// which caused items partiall obscured to fall into a new page.

			wh += carousel.dimension(curr); // + item width
			if (wh >= clip) {
				page++;
				if (wh > clip) {
					idx--;
				}
				wh = 0;
				}
			}

			return Math.ceil(items.length / page);
		}
		
		function _nearbySlides() {
			$item.each(function(index) {
				$(this).click(function(e){
					if(!$(this).hasClass('fullyvisible')){
						e.preventDefault();
						$carousel.jcarousel('scroll', index);
					}
				});
			});
		}
		
		function _swipingChildElements() {
			if (Modernizr.touch) {
				// See: https://github.com/mattbryson/TouchSwipe-Jquery-Plugin/issues/112
				$carousel.find('.fullyvisible .article-thumb a').add($carousel.find('.fullyvisible .article-title a')).swipe({
			        tap:function(event, target) {
			          window.location = $(this).attr('href');
			        },
			        excludedElements:[]
			    });
			}
		}

		// Initiate when carousel is loaded
		var fullyvisible = $carousel.jcarousel('fullyvisible');
		fullyvisible.addClass('fullyvisible');
		
		$prev.addClass('inactive');
		
		_nearbySlides();
		_swipingChildElements();

		// do something when carousel animates
		$carousel
		.on('jcarousel:animate', function(event, carousel) {
			var fullyvisible = $carousel.jcarousel('fullyvisible');
			$item.removeClass('fullyvisible');
			fullyvisible.addClass('fullyvisible');
			$prev.removeClass('inactive');
			$next.removeClass('inactive');
		});
		
		// do something when carousel animation ends
		$carousel
		.on('jcarousel:animateend', function(event, carousel) {
			var fullyvisible = $carousel.jcarousel('fullyvisible');
			fullyvisible.addClass('fullyvisible');
			
			if($pagination.find('a').first().hasClass('active')){
				$prev.addClass('inactive');
			}
			if($pagination.find('a').last().hasClass('active')){
				$next.addClass('inactive');
			}
			_swipingChildElements();
		});
	

		/*
		Swipe on touch
		*/
		if (Modernizr.touch) {
			$carousel.swipe( {
				swipe:function(event, direction, distance) {
					if (direction == 'right') {
						$prev.trigger('click');
					}
					else if (direction == 'left') {
						$next.trigger('click');
					}
				},
				threshold: 75,
				excludedElements: '.share-this, .fave-this',
				allowPageScroll: 'vertical'
			});
		}
	});

};

INSTYLE.Behaviors.newsletterFooter = function() {

	var $elem = $('#footer-newsletter-form');

	$elem.validate({
		rules: {
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			email: {
				required: "Please enter a valid email address",
				email: "Please enter a valid email address"
			}
		},
		errorPlacement: function(error, element) {
			error.appendTo(element.parent());
		},
		submitHandler: function(form, element) {

			var params = $(form).serialize();

			$.ajax({
				type: 'POST',
				url: 'ajax/form.php', //url where data gets processed
				data: params,
				success: function(data){
					$(form).html('<div class="success"><strong>Thank You.</strong> Your changes have been saved!</div>');
				}
			});
		}
	});

};

INSTYLE.Behaviors.loadMoreItems = function(context) {
	var $trigger = $('.btn-load-more');
	var load_limit = $trigger.attr('data-load-limit'); // Maximum number of requests. Configurable in HTML.
	
	$trigger.click(function(e){
		//e.preventDefault();
		var href = $(this).attr('href'); // URI to request. Configurable in HTML.
		var container = $($(this).attr('data-container')); // Container to load items in. Configurable in HTML.
		
		// Hide 'Load More' link after button is clicked on X amount of times
		load_limit--;
		if(!load_limit) {
			$(this).hide();
		}
		
		$.ajax({
			type: 'GET',
			url: href,
			async: false,
			beforeSend: function(data){
				INSTYLE.Behaviors.shareThisBtn();
				INSTYLE.Behaviors.faveThisBtn();
				container.addClass('loading');
			},
			success: function(data){
				container.append(data);
				INSTYLE.Behaviors.shareThisBtn();
				INSTYLE.Behaviors.SocialLinks();
				INSTYLE.Behaviors.faveThisBtn();
			},
			complete: function(data){
				container.removeClass('loading');
			}
		});

	});
};

INSTYLE.Behaviors.SocialLinks = function( context ) {
	var width = 670;
	var height = 370;

	function _share( e ) {
		e.preventDefault();

		var wLeft = window.screenLeft ? window.screenLeft : window.screenX;
		var wTop = window.screenTop ? window.screenTop : window.screenY;
		var top = ( wTop + $(window).height() / 2 ) - ( height / 2 );
		var left = ( wLeft + $(window).width() / 2 ) - ( width / 2 );
		var windowParams = 'width=' + width + ', height=' + height + ', top=' + top + ', left=' + left + ', scrollbars=yes';
		var wName = 'Share';
		window.open($(this).attr('href'), 'Share', windowParams);
	}

	// Attach events:
	$('.share-popup').on( 'click.SocialLinks', _share );
};

INSTYLE.Behaviors.shareThisBtn = function(context) {
	var $trigger = $('.share-this-btn');

	if ( Modernizr.touch ) {
	    // Trigger on click for touch devices e.g., tablets

		$trigger.unbind().click(function(e){
			e.preventDefault();
			if($(this).parent().hasClass('active')){
				$(this).parent().removeClass('active');
			} else {
				$('.share-this').removeClass('active');
				$(this).parent().addClass('active');
				
				$(this).next('.share-this-links').position({
				  my: 'left top',
				  at: 'left bottom',
				  of: $(this)
				});
				
			}
		});

		$trigger.on('clickoutside touchendoutside', function(e) {
			if (!$(e.target).closest('.share-this').length && $('.share-this').hasClass('active')) {
				$trigger.parent().removeClass('active');
		    }
		});
	
	} else {
		// hover on non touch devices
		$trigger.parent().on({
			mouseenter: function() {
				$(this).addClass('active');
				$(this).find('.share-this-links').position({
					my: 'left top',
					at: 'left bottom',
					of: $(this).find('.share-this-btn')
				});

			},
			mouseleave: function() {
				$(this).removeClass('active');
			}
		});
		// prevent click
		$trigger.click(function(e){
			e.preventDefault();
		});
	}
};

INSTYLE.Behaviors.faveThisBtn = function(context) {
	var $trigger = $('.fave-this-btn');
	var faved = INSTYLE.faveCookie.get();

	// Display Fave count throughout the site
	function _display() {
		var $count_holder = $('.site-header .my-fave-count');
		var count = faved.length;
		// If no faves then do not show any count
		if(!count){
			$count_holder.hide();
		} else {
			$count_holder.show();
			$count_holder.text(count);
		}

	}

	function _save(e) {
		if (typeof e != 'undefined') e.preventDefault();
		
		//check to see if we are in V6 or WP
			var env = '',
				orig_id = $(this).attr('href');
		
						
				if (( orig_id.indexOf("news.instyle") > 1 ) || ( orig_id.indexOf("dev-wpcom.timeinc.net") > 1 )) {
					
					// get post id from WP
					//var orig_id = $(this).attr('href');
					var id = $(this).attr('href');
						id = decodeURIComponent(id);
						id = id.split("news.instyle.com/");
						//id = id.split("dev-wpcom.timeinc.net/whatsrightnow/");
						id = id[1];
						env = 'wp'; 
				} else {
					
					// V6 retrieve unique id of post - OID value
					var id = $(this).attr('href');
						id = decodeURIComponent(id);
						id = id.split("/0,,");
						id = id[1];
						id = "0,," + id;
						id = id.replace (".html", "");		
						env = 'v6'; 
					}
		
		// Reload the cookie in case it was changed by another script
		faved = INSTYLE.faveCookie.get();

		// if element has the required href attr
		if (id) {

			// if button has not been clicked yet
			if (!$(this).hasClass('active')) {

				// Set to visible only onclick so animation doesnt run on page load
				$(this).find('.icon-fave-animation').css('visibility', 'visible');
				
				// add active class to clicked element
				$(this).addClass('active').find('.icon-fave').addClass('icon-faved');
	
					
				// store id, timestamp and enviornment in cookie
				var obj = { "id": id, "timestamp": new Date().getTime(), "env" : env };
				
				faved.push(obj);

				faved = INSTYLE.faveCookie.update(faved);

				_display();

			} else {
				faved = INSTYLE.faveCookie.removeItem(id);

				_display();
				
				$(this).removeClass('active').find('.icon-fave').removeClass('icon-faved');
				$(this).find('.icon-fave-animation').css('visibility', 'hidden');
			}

		}

	}

	_display();

	// On click we store data into cookie so we can display on queue page
	$trigger.unbind().on('click', _save);

	// Activate fave buttons:
	
	var selectors = [];
	for (var i = 0; i < faved.length; i++) {
	
		selectors.push('.fave-this-btn[href=' + faved[i].orig_id + ']');
	}
	$(selectors.join(', '), context).find('.fave-this-btn').addClass('active').find('.icon-fave').addClass('icon-faved');
};

INSTYLE.Behaviors.siteAnnouncement = function(context) {
	var $close = $('.close-announcement');
	$close.click(function(){
		$(this).closest('.module-announcement').fadeOut('fast');
		return false;
	});
};

INSTYLE.faveCookie = {
	get: function(id) {
		var cookieVal = $.cookie('instyle_faves') || JSON.stringify([]);
		cookieVal = $.parseJSON(cookieVal);
		
		if (id) {
			for (var i = 0; i < cookieVal.length; i++) {
				if (id == cookieVal[i].id) return cookieVal[i];
			}
			return {};
		}

		cookieVal.sort(function(a, b) {
			if (a.timestamp > b.timestamp) {
				return -1;
			}
			if (a.timestamp < b.timestamp) {
				return 1;
			}
			return 0;
		});

		return cookieVal;
	},
	update: function(cookieVal) {
		// Remove any duplicates:
		var ids = [];
		var unique = [];
		for (var i = 0; i < cookieVal.length; i++) {
			if ($.inArray(cookieVal[i].id, ids) < 0) {
				unique.push(cookieVal[i]);
				ids.push(cookieVal[i].id);
			}
		}

		// Save and return the cookie:
		var hostArray = window.location.host.split('.');
		var domain = hostArray[hostArray.length - 2] + '.' + hostArray[hostArray.length - 1];
		domain = domain.split(':')[0];

		$.cookie('instyle_faves', JSON.stringify(unique), { expires: 365 * 2, path: '/', domain: domain });
		$(document).trigger('faveSave');
		return this.get();
	},
	remove: function() {
		$.removeCookie('instyle_faves', {path: '/'});
	},
	removeItem: function(id) {
		var cookieVal = this.get();
		var i;
		for (i = 0; i < cookieVal.length; i++) {
			if (cookieVal[i].id == id) break;
		}
		cookieVal.splice(i, 1);
		return this.update(cookieVal);
	}
};

($)(function(){
	for (var behavior in INSTYLE.Behaviors) {
		INSTYLE.Behaviors[behavior].call(document);
	}
});

//Init ezMark on all radio and check boxes
$('input[type="checkbox"], input[type="radio"]').ezMark();

//Init chosen styled select menu
$(".chosen-select").chosen({
	disable_search_threshold: 0
});

//Back to top
$('#back-to-top').click(function() {
	$('body, html').animate({
		scrollTop: 0
	}, 400);
	return false;
});

$( document ).ready(function() {
  $('.share-this-links a[href^=http]' ).attr('target','_blank');
});

//check to see if the main hero module has 1 image or less in the main carousel
//if only 1, or none, is present then hide the pagination controls
if ( $('.module-feature-hero .jcarousel li').length <= 1 ) {
	$('.module-feature-hero .carousel-controls').css ('visibility', 'hidden');
	$('.module-feature-hero .jcarousel-pagination-timer').css ('display', 'none');
}

})(jQuery);