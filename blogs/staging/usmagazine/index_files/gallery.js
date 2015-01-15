(function() {
	
	// define Us namespace if it doesn't already exist
	window.Us = window.Us || {};
	
	// Videos of the Day Module (Using the Module pattern here)
	Us.PhotoGallery = (function() {
		
		// private properties
		
		// main selectors used by module
		var MODULE_ID = '#gallery-module';
		var VOTE_BUTTONS = MODULE_ID + ' .vote-counter';
		var GALLERY_ID;
		var GALLERY_TYPE;
		var PAGE_ID;
		
		// private methods
		function getGalleryData() {
          GALLERY_ID   = $(MODULE_ID).attr('data-galleryId');
          GALLERY_TYPE = $(MODULE_ID).attr('data-galleryType');
          PAGE_ID      = $(MODULE_ID).attr('data-pageId');
        }

        function submitWWIBEditionVote(vote) {
          var dataString = '?answer_id=' + vote + '&voting_gallery_id=' + GALLERY_ID + '&gallery_match_id=' + PAGE_ID;
          $.ajax({
            type: "POST",
            url: "/submit/who-wore-it-best-edition.ajax",
            data: {answer_id: vote, wwib_edition_id: GALLERY_ID, wwib_edition_match_id: PAGE_ID},
            success: function() {
              top.location = document.URL + '/results';
            },
            error: function(xhr, desc, exceptionobj) {
              //alert(xhr.responseText);
              top.location = document.URL + '/results';
            }
           });
           return false;
        }

        function submitVote(vote) {
          var dataString = '?answer_id=' + vote + '&voting_gallery_id=' + GALLERY_ID + '&gallery_match_id=' + PAGE_ID;
          $.ajax({
            type: "POST",
            url: "/capture/vote/gallery.htm", 
            data: {answer_id: vote, voting_gallery_id: GALLERY_ID, gallery_match_id: PAGE_ID},
            success: function() {
              top.location = document.URL + '/results';
            },
            error: function(xhr, desc, exceptionobj) {
              //alert(xhr.responseText); 
              top.location = document.URL + '/results';
            }
           });
           return false;
        }
		function submitWwibVote(vote) {
          var dataString = '?answer_id=' + vote + '&wwib_id=' + PAGE_ID;
          $.ajax({
            type: "POST",
            url: "/capture/vote/wwib.htm",
            data: {answer_id: vote, wwib_id: PAGE_ID},
            success: function() {
              top.location = document.URL + '/results';
            },
            error: function(xhr, desc, exceptionobj) {
              top.location = document.URL + '/results';
            }
           });
           return false;
        }
        function submitFashionVote(vote) {
          var dataString = '?answer_id=' + vote + '&fashion_police_photos_id=' + PAGE_ID;
          $.ajax({
            type: "POST",
            url: "/capture/vote/fashion.htm", 
            data: {answer_id: vote, fashion_police_photos_id: PAGE_ID},
            success: function() {
                top.location = document.URL + '/results';
            },
            error: function(xhr, desc, exceptionobj) {
            	//alert(xhr.responseText);
            	top.location = document.URL + '/results';
            }
           });
           return false;
        }
        
        function legacyClass() {
			var votingImgWidth = $('.gallery.voting .gallery-wrapper ul.vote-holder li a img').width();
			if (votingImgWidth == 206) {
				$('.gallery-content').addClass('legacy');
			}	
        }
        
        function centerGalleryPhoto(){
        	var $galleryMainImg = $('#gallery-pic').length ? $('#gallery-pic') : $('.gallery-wrapper #wrap img');
        	var width = $galleryMainImg.width();
			$('.gallery-content').css('width', width);
			$('.mousetrap').css('visibility', 'visible');
			$('#zoom-in').css('visibility', 'visible');
			$('#gallery-pic').css('visibility', 'visible');
		}
        function setTopMargin(){
			if(GALLERY_TYPE != 'FashionPolicePhoto' && GALLERY_TYPE != 'GTL'){				
				galleryHeight = $('#gallery-module').height();
				imageHeight = $('.gallery-content').height();
				heightDiff = galleryHeight - imageHeight;
				centeredTopMargin = heightDiff*.5;
				$('.gallery-content img').each(function () {
					if ($(this).hasClass('vote') == false) {
						$(this).attr('style', 'padding-top:'+ centeredTopMargin +'px;');
					}
				});
			}
        }
        function bindVoteClickHandlers(){
        	// add a click listener to each vote button
			$(VOTE_BUTTONS).bind('click', function(evt) {
				evt.preventDefault();
				if(GALLERY_TYPE == 'VotingGallery'){
					submitVote($(this).attr('data-vote'));
				}
				else if(GALLERY_TYPE == 'WWIBPhoto'){
					submitWwibVote($(this).attr('data-vote'));
				}
				else if(GALLERY_TYPE == 'FashionPolicePhoto'){
					submitFashionVote($(this).attr('data-vote'));
				}
                else if(GALLERY_TYPE == 'WWIBEdition') {
                    submitWWIBEditionVote($(this).attr('data-vote'));
                }
			})
        }

	    // Init custom scrollbar
	    function scrollPaneInit() {
			$('.scroll-pane').jScrollPane({
				showArrows: true
			});
	    }
		
		// make all edit/cancel/etc clicks dynamically adjust height
		function disqusInit() {
			var $commentContainer = $('#comment-container-alt');

		    $commentContainer.contents().click(function() {
		        if ($commentContainer.hasClass('is-trimmed')) {
		            DisqusControl.trimComments();
		        }
		    })

		    // Comment show/hide functionality
		    $('.show-more-btn').click(function() {

		    	$commentContainer.toggleClass('is-trimmed');

		    	if (!$commentContainer.hasClass('is-trimmed')) {
		        	$commentContainer.css('max-height', '');
		    	} else {
		    		DisqusControl.trimComments();
		    	}

		        $(this).toggleClass('less');
		    });
		}

		function verticalAlign() {
			$('#bottom-module-area ul li').each(function(){
				var divHeight = $(this).height();
				if ($(this).hasClass('editors-pick')) {
					divHeight = divHeight-18;
				}
					var infoHeight = $('.item-title', this).height();
					var heightDiff = divHeight - infoHeight;
					var dividedSpacing = heightDiff*.5;
					$('.item-title', this).attr('style', 'padding-top:'+ dividedSpacing +'px;');
			});
		}

		function initSocialMenu() {
			var $socialMenu = $('.expanded-list');
			var $moreLink = $('.more > span');
			$('.more').contents().hover(
				function(){
					$socialMenu.show();
					$moreLink.addClass("hover");
				},
				function() {
					$socialMenu.hide();
					$moreLink.removeClass("hover");
				}
			)
		}
				
		/*
		function zoomFirstTimeOverlay() {
			if ($('.zoom-enabled').length != 0) {
				var cookie = readCookie('usmag_hires_firsttime');
				if(!cookie) {
					if ($('#first-visit').length != 0) {
						$('#first-visit').show().delay(6000).fadeOut('fast');
					}
				}
				createCookie('usmag_hires_firsttime', true, (31*12*50));
			}
		};
		*/
		
//		eraseCookie('usmag_hires_firsttime');
		
		// public api
		return {
			
			init: function() {
				getGalleryData();
				switch(GALLERY_TYPE)
				{
					case 'PhotoGallery':
						centerGalleryPhoto();
//						zoomFirstTimeOverlay();
						break;
					case 'LikeUs':
						centerGalleryPhoto();
						break;
					case 'RedCarpetPhoto':
						centerGalleryPhoto();
//						zoomFirstTimeOverlay();
						break;
					case 'StreetStylePhoto':
						centerGalleryPhoto();
						break;
					case 'HotBodiesPhoto':
						centerGalleryPhoto();
						break;
					case 'HotPicsPhoto':
						centerGalleryPhoto();
//						zoomFirstTimeOverlay();
						break;
					case 'CitizenArrest':
						centerGalleryPhoto();
						break;
					case 'VotingGallery':
						legacyClass();
						bindVoteClickHandlers();
						break;
					case 'WWIBPhoto':
                        legacyClass();
						bindVoteClickHandlers();
						break;
                    case 'WWIBEdition':
						legacyClass();
						bindVoteClickHandlers();
						break;
					case 'FashionPolicePhoto':
						bindVoteClickHandlers();
						centerGalleryPhoto();
						break;
					case 'GTL':
						// not sure we need to do anything for get the look gallery as the margin is set in the template
						break;
				}
                setTopMargin();
                scrollPaneInit();
                disqusInit();
                verticalAlign();
                initSocialMenu();
			}	
		}
		
	})();
	
})();

// Document is ready!! Go!!!
$(window).load(function() {
	
	// init PhotoGallery
	Us.PhotoGallery.init(); 
	
});

