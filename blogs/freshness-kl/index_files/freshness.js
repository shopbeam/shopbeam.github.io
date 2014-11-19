$(document).ready(function() {
//Menu slidedown
    $('a.toggle, .dropdown-notalink > a').toggle(openNav,closeNav);

    $('a.toggle, .dropdown-notalink > a').click(function(e) {
        //e.preventDefault();
    }); 
  
//Next/prev sidebar thumbnail hover, and for grid hover. 
    $('[rel="prev"], [rel="next"]').live({
        mouseenter: function() { 
            $(this).find('.thumbTitle').fadeIn(100); 
        },
        mouseleave: function() {
            $(this).find('.thumbTitle').fadeOut(100);
        }
    });
    
//Slide in the slider arrows when hover over target area
    $('#arrowtargetRight').hover(
        function() {
            $('a', this).animate({left: 0}, 120);
        },
        function() {
            $('a', this).animate({left: 80}, 250);
        }
    );
    $('#arrowtargetLeft').hover(
        function() {
            $('a', this).animate({right: 0}, 120);
        },
        function() {
            $('a', this).animate({right: 80}, 250);
        }
    );
//Call the click for the real slider arrows
    $('#arrowtargetRight a').click(function() {
        $('.showcase-arrow-previous').click();
        return false;
    });
    $('#arrowtargetLeft a').click(function() {
        $('.showcase-arrow-next').click();
        return false;
    });

//Simple way of setting active states for category menu items. Add where necessary. 
    $('body.home, body.page-template-pageofposts-php').find('#homeNav').addClass('active');

//Fixes posts in the slider popping up while page is loading
    $('#showcase').css('height', '350px');
    
    //scroll to top
    // fade in .back-top 
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 800) {
				$('.back-top ').fadeIn();
			} else {
				$('.back-top ').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('.back-top  a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});

//Things to execute when header menu show/hide is clicked
function openNav(){
    $('#menuWrapper, #access').animate({height:'185px'}, 300);
    $('.sub-menu').fadeIn(200);
    $('a#showHide').text('Hide');
    $('a#showHide').addClass('close');
}

function closeNav(){
    $('#menuWrapper, #access').animate({height:'38px'}, 300);
    $('.sub-menu').fadeOut(200);
    $('a#showHide').text('Show more');
    $('a#showHide').removeClass('close');
   } 
    