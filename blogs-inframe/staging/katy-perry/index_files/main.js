// Make sure the diamonds are square.
var $diamonds;
function updateDiamonds() {
	$diamonds.each(function() {
		$(this).css('width', '');
		var dWidth = $(this).width(),
			dHeight = $(this).height();
		// Set the width so that the borders don't get
		// messed up dealing with inexplicit values.
		$(this).css('width', dWidth-15);
		// Ensure the height is the same value as the width.
		if(dWidth != dHeight) {
			$(this).css('height', dWidth-15);
		}
	});
}

var $sectionMain;
function updateMainSection() {
	setTimeout(function() { $sectionMain.css('height', $(window).height()); }, 10);
}

var $sectionNews;
var $sliderNews;
function updateNewsItems() {
	var newMarginTop = -1 * $sliderNews.find('.blank-diamond').height() / 2;
	$sectionNews.css('margin-top', newMarginTop);
}

function isiPhone(){
    return (
        //Detect iPhone
        (navigator.platform.indexOf("iPhone") != -1) ||
            //Detect iPod
            (navigator.platform.indexOf("iPad") != -1) ||
            (navigator.platform.indexOf("iPod") != -1)
        );
}

function katyInit() {

    if($.browser.mobile || isiPhone()) {
        $("#video-bg-holder").remove();

        $("body").css("background-image", "url('')");
        $("body").css("background-color", "white");
        $("body").backstretch("http://katyperry2.umg-wp3-dev.com/wp-content/themes/katyperry-2/library/img/bg_home_mobile.jpg");
        //$(".spacer").remove();
        /*$("#section-album").backstretch("http://katyperry2.umg-wp3-dev.com/wp-content/themes/katyperry-2/library/img/KP_BG_FLAT_2.jpg");
        $("#section-news").backstretch("http://katyperry2.umg-wp3-dev.com/wp-content/themes/katyperry-2/library/img/KP_BG_FLAT_3.jpg");
        $("#section-videos").backstretch("http://katyperry2.umg-wp3-dev.com/wp-content/themes/katyperry-2/library/img/KP_BG_FLAT_3.jpg");
        $("#section-tour").backstretch("http://katyperry2.umg-wp3-dev.com/wp-content/themes/katyperry-2/library/img/KP_BG_FLAT_4.jpg");
        $("#section-photos").backstretch("http://katyperry2.umg-wp3-dev.com/wp-content/themes/katyperry-2/library/img/KP_BG_FLAT_5.jpg");*/
    }


	var isHomePage = $('body').hasClass('home');

	if($.browser.mobile) {
		continueUpdatingVideo = false; //(jeremy)removed == here...not sure if that was a typo
	} else if(isHomePage) {
		continueUpdatingVideo = true;
	} else {
		continueUpdatingVideo = false;
	}
	//TODO: only do homepage things if on home page

	$sections = $('section');

	$diamonds = $('.diamond');
	updateDiamonds();

	// Use FitVids.js to keep the videos sized correctly.
	$('.video-holder').fitVids();

	/*// Initialize the bxSliders.
	$('.bxslider').bxSlider({
		speed: 500,
		slideSelector: 'div.slide',
		infiniteLoop: false
	});*/

	//start isHomePage
	if(isHomePage) {

		// Update the background video.
		updateVideo();

		$sectionMain = $('#section-main');
		updateMainSection();

		$sectionNews = $('#section-news');
		$sliderNews = $sectionNews.find('#slider-news');
		updateNewsItems();

		// Initiate skrollr.js.
		setTimeout(
			function() {
				var skrollrInstance = skrollr.get();
				if(skrollrInstance) {
					skrollrInstance.refresh();
				} else {
					skrollr.init({
						forceHeight: false
					});
				}
			},
			500
		);

		/// TWITTER FEED ///

		$twitterFront = $('#twitter-front');
		$twitterMiddle = $('#twitter-middle');
		$twitterGlow = $('#twitter-glow');
		$twitterBack = $('#twitter-back');

		// Don't allow the twitter image to be dragged.
		$twitterMiddle.find('img').on('dragstart', function(event) { event.preventDefault(); });

		$twitterFrontItems = $twitterFront.find('.twitter-item');
		$twitterBackItems = $twitterBack.find('.twitter-item');

		twitterFrontWidth;
		twitterBackWidth;
		twitterSizeRatio = 1;

		resizeOrbits();
		updateOrbit();

		lastPosition_front = parseInt($twitterFront.css('left'));
	    lastPosition_back = parseInt($twitterBack.css('left'));

	    // If the user drags (touch) then move the orbit with their drag.
	    $twitterFront.hammer({drag_block_horizontal: true}).on('drag', function(e) {
	        orbitSlide(e.gesture.deltaX, false, true);
	    });
	    $twitterFront.hammer({drag_block_horizontal: true}).on('dragend', function(e) {
	        orbitSlide(e.gesture.deltaX, true, true);
	    });


	}
	// end isHomePage

    external_links();
}

$(document).ready(function() {

	//--------------//
	//   Diamonds   //
	//--------------//

	// Run this diamond resize on page resize;
	$(window).resize(function() {
		updateDiamonds();
	});
	$(window).on("orientationchange", function() {
		updateDiamonds();
	});

	//------------------//
	//   Panel Sizing   //
	//------------------//

	// Keep the main and Twitter sections at fullscreen height.
	$(window).resize(function() {
		updateMainSection();
	});
	$(window).on("orientationchange", function() {
		updateMainSection();
	});
	
	// Keep news items all at the same height.
	$(window).resize(function() {
		updateNewsItems();
	});
	$(window).on("orientationchange", function() {
		updateNewsItems();
	});

	// Execute the init function on page load.
	katyInit();

	//-----------------//
	//   Modal Pages   //
	//-----------------//

	// Store the page information so we can
	// still access it when it is modified.
	var pageInfo = {
		pageTitle: document.title,
		pageUrl: document.URL
	}

	// Triggered when the detail modal is hidden.
	$('#detailModal').on('hide.bs.modal', function () {

        var next_link = $(".closemodal").attr("data-link");
        //console.log(next_link);


		// Remove the modal data so that it can be used again.
        $(this).removeData('bs.modal');
        //alert(next_link);
        if(next_link) {
			if (typeof history.pushState != 'undefined') { 
			    history.pushState({}, "", next_link);
			}             
        } else {
			if (typeof history.pushState != 'undefined') { 
			    history.pushState({}, "", "/");
			}        	 
        }
        // Reset the page title.
        //document.title = pageInfo.pageTitle;

        // If the URL is not that of the actual current page,
        // replace the browser bar URL with the original.
        /*if(document.URL != pageInfo.pageUrl) {
        	window.history.back();
        }*/


    });

	// Triggered when any history is popped.
    /*$(window).bind("popstate", function(e) {
    	// Hide any open modals.
		//$('#detailModal').modal('hide');
	});*/
	
	// Triggered when a modal link is clicked.
	//$('.modal-link').click(function() {
		//var theUrl = $(this).attr('data-remote');
        // Replace the current page's title.
        /*$.ajax({
			url: "http://textance.herokuapp.com/title/" + theUrl,
			complete: function(data) {
				document.title = data.responseText;
			}
		});*/

		// Create a browser history entry for the page.
		//window.history.pushState({}, "Some Title", theUrl);
	//});
	function centerPlayIcon(){
		setTimeout(function(){
		$('.play-icon').css("display","block");	
		$('.play-icon').css("left",((($('.video-frame img').width()/2)-($('.play-icon').width()/2))*100)/$('.video-frame img').width()+'%');
		$('.play-icon').css("top",((($('.video-frame img').height()/2)-($('.play-icon').height()/2))*100)/$('.video-frame img').height()+'%');
		}, 500);
	}
	function alignTopArticle(){
		setTimeout(function(){
			$('.article-background').css('top',($('.list-items .wrap-diamond-posts img').height()/2)+150); 
			$('.home .article-background').css('top',($('.list-items .wrap-diamond-posts img').height()/2));
		}, 500);
	}

	$(window).resize(function(e) {
		centerPlayIcon();
		alignTopArticle();
	});
	function buyBtb(){
		/* modal gallery image counter*/
	 	$('.navgallery a').on('click', function(q){
	    	q.preventDefault();
	    	$('.totalgallery .counter').html($('.carousel-inner .active').attr("data-position"));
	    });

		$('.carousel').carousel();
		  $('.carousel').on('slid', function() {
		    var to_slide = $('.carousel-inner .item.active').attr('id');
		    $('.carousel-indicators').children().removeClass('active');
		    $('.carousel-indicators [data-slide-to=' + to_slide + ']').addClass('active');
		    $('.totalgallery .counter').html($('.carousel-inner .active').attr("data-position"));
		 });	
		 centerPlayIcon();
	}
	function loadTree() {
		$('#navigation a, .display-song, .related-tags').on('click', function(e){
			e.preventDefault();
			var $src = $(this).attr("href");
			var $title = ""//$(this).attr("title");
			$("#loadajaxmodal").load($(this).attr("href")+'?m=ajax #loadajaxmodal', '', function(){
				loadTree();
				buyBtb();
				if (typeof history.pushState != 'undefined') { 
				    history.pushState({"type":"modal", "URL":$src}, $title, $src);
				}				
                
                return false;
			});
            return false;
		});	
	}
	function loadModalWindows(){
		var $modal = $('#detailModal');

		$('.modal-link').on('click', function(e){
            e.preventDefault();
			var $src = $(this).attr("href");
			var $title = $(this).attr("data-title");
			$("#detailModal").html("");

            $modal.load($src+'?m=ajax #loadajaxmodal', '', function(){
                $modal.modal();
var adjustModal = function($modal) {
  var top;
  if ($(window).width() <= 480) {
    if ($modal.hasClass('modal-fullscreen')) {
      if ($modal.height() >= $(window).height()) {
        top = $(window).scrollTop();
      } else {
        top = $(window).scrollTop() + ($(window).height() - $modal.height()) / 2;
      }
    } else if ($modal.height() >= $(window).height() - 10) {
      top = $(window).scrollTop() + 10;
    } else {
      top = $(window).scrollTop() + ($(window).height() - $modal.height()) / 2;
    }
  } else {
    top = '0%';
    if ($modal.hasClass('modal-fullscreen')) {
      $modal.stop().animate({
          marginTop  : -($modal.outerHeight() / 2)
        , marginLeft : -($modal.outerWidth() / 2)
        , top        : top
      }, "fast");
      return;
    }
  }
  $modal.stop().animate({ 'top': top }, "fast");
};

var show = function() {
  var $modal = $(this);
  adjustModal($modal);
};

var checkShow = function() {
  $('.modal').each(function() {
    var $modal = $(this);
    if ($modal.css('display') !== 'block') return;
    adjustModal($modal);
  });
};

var modalWindowResize = function() {
  $('.modal').not('.modal-gallery').on('show', show);
  $('.modal-gallery').on('displayed', show);
  checkShow();
};

$(modalWindowResize);
$(window).resize(modalWindowResize);
$(window).scroll(checkShow);                
                loadTree();
                buyBtb();
                external_links();
				if (typeof history.pushState != 'undefined') { 
	 				history.pushState({"type":"modal", "URL":$src}, $title, $src);	
				}
                return false;
            });
            return false;
		});		
	}
	function changeBgPages(){
		$('body').attr("class","");
		$('body').addClass($('#content').attr("data-postype"));
		$('body').attr("data-search",$('#content').attr("data-postype"));		
	}
	/** load script first load page*/
	$('.carousel').carousel();
	  $('.carousel').on('slid', function() {
	    var to_slide = $('.carousel-inner .item.active').attr('id');
	    $('.carousel-indicators').children().removeClass('active');
	    $('.carousel-indicators [data-slide-to=' + to_slide + ']').addClass('active');
	    $('.totalgallery .counter').html($('.carousel-inner .active').attr("data-position"));
	 });	
	/* display video
	$('.play-video').on('click', function(){
		$('.video-iframe').css("display","block");
		$('.video-iframe').css("height",$('.play-video img').height());
		$('.play-video').css("display","none");
	});*/
	centerPlayIcon();
	alignTopArticle();
	loadModalWindows();
	
if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){ //test for MSIE x.x;
 var ieversion=new Number(RegExp.$1) // capture x.x portion and store as a number
 if (ieversion<=8)
 	 $( "a" ).each(function() {
		$( this ).attr( "data-toggle","" );
		$( this ).attr( "data-target","" );
		$(this).removeClass("modal-link");
	});
}

	// Call the following upon completion of a state change (ajaxify).
	$(window).on('statechangecomplete',function(event, loaded_html) {
		centerPlayIcon();
		alignTopArticle();
		loadModalWindows();
		changeBgPages();
		katyInit();
        $(window).scrollTop(0);
        // Give the init function a moment so that the
        // ajaxify added body classes will be correct.
        setTimeout(function() {
        	katyInit();
        }, 20);
	});

    if(prismatic_overlay) {
        //alert("modal");
        $("#prismatic_trigger").click();
        $("body").on("click", ".video-frame", function(e) {
            setupJW($(this));
        });
    }// else {
       // alert("no modal");
    //}

});

function external_links() {
    $("a").each(
        function(){
            if(this.href.indexOf(location.hostname) == -1 && this.href.indexOf("umg") == -1 && this.href.indexOf("katyperry.com") == -1) {
                $(this).attr('target', '_blank');
            }
        });
}
