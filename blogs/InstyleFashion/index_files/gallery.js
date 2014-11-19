function tiiGetQueryParamValue(param) {
    var startIndex;
    var endIndex;
    var valueStart;

    var qs = document.location.search;
    var detectIndex = qs.indexOf( "?" + param + "=" );
    var detectIndex2 = qs.indexOf( "&" + param + "=" );
    var key = "&" + param + "=";
    var keylen = key.length;

    if (qs.length > 1) {
        if (detectIndex != -1) {
            startIndex = detectIndex;
        } else if (detectIndex2 != -1) {
            startIndex = detectIndex2;
        } else {
            return null;
        }

        valueStart = startIndex + keylen;

        if (qs.indexOf("&", valueStart) != -1) {
            endIndex = qs.indexOf("&", startIndex + 1)
        } else {
            endIndex = qs.length
        }

        return (qs.substring(qs.indexOf("=", startIndex) + 1, endIndex));
    }

    return null;
} 

function submitPoll(slide, id, answer, question, poll, votes) {
	var BASE_URL = 'http://profiles.instyle.com/brands/InStyle/sections/Polls/articles/';	
	var v_url = BASE_URL + slide + '/polls/' + poll + '/vote';
	console.log(v_url);
	var q_param = "question_" +question;
	
	$.post( v_url, { "add_document_domain": "true", "poll[votes][]": answer, q_param: answer } );
}

var likePercent, leavePercent = 10;
var isFirstTracking = "true";

function showResults( el, votes ) {
	var id = el.data("item"),                                           
	// var id = el[0].dataset['item'],
	parent = el.parent('li'),
	parentSiblings = parent.siblings('li'),
	sibling =  parentSiblings.find('input[type=radio]'),
	answertext = $(parent).find('label').text(),
	totalVotes,
	percentage,
	siblingPercentage,
	thisSiblingVote,
	thisSiblingPercentage,
	thisSiblingText,
	count = sibling.length,
	siblingVotes = '',
	siblingVote = '';
	if($('#poll_' + id).hasClass('default')){
		$('#poll_' + id).removeClass('default');
	}
	for(i=0; i<count; i++) {
		siblingVote = sibling[i].getAttribute('data-votes');
		siblingVotes = Number(siblingVotes) + Number(siblingVote);
	}              
	votes++;
	totalVotes = parseInt(votes) + parseInt(siblingVotes);
	percentage = Math.round( ( parseInt(votes) / totalVotes ) * 100 );


	for(i=0; i<count; i++) {                               
		thisSiblingVote = sibling[i].getAttribute('data-votes');
		thisSiblingPercentage = Math.round( ( parseInt(thisSiblingVote) / totalVotes ) * 100 );
		thisSiblingText = $(parentSiblings[i]).find('label').text();
	}

	likePercent = percentage; 
	leavePercent = thisSiblingPercentage;

} 

(function($){
window.INSTYLE = window.INSTYLE || {};
INSTYLE.Behaviors = INSTYLE.Behaviors || {};

var homepagePath = 'http://www.instyle.com/instyle/',
    lastPageViewed = docCookies.getItem('lastePageViewed');
 
if ( lastPageViewed != null ) {
		lastPage = lastPageViewed;
} else {
		lastPage = homepagePath;
}

$('.slide-close').attr('href', lastPage);

function escapeHTML(string) {
    var pre = document.createElement('pre');
    var text = document.createTextNode( string );
    pre.appendChild(text);
    return pre.innerHTML;
}

function unescapeHTML(unsafe) {
    return unsafe.replace(/&#39;/g, "'").replace(/&amp;/g, "&").replace(/&lt;/g, "\<").replace(/&gt;/g, "\>").replace(/&quot;/g, "\"").replace(/&#151;/g, "-").replace(/&#36;/g, "\$");
}

var pollIds = [];
var pollHash = {};
var pollData = new Object();

this.textPoll = function(resourceid) { //textPoll
	
	pollIds.push(resourceid);

	function getPoll() {
		var BASE_URL = 'http://profiles.instyle.com/brands/InStyle/sections/Polls/articles/';
		var url = BASE_URL + resourceid + '/polls?add_document_domain=true';
		$.ajax({
			url: url,
			dataType: 'text',
			context: $(this),
			async: false
		}).done(function(data) {
			var test = data.replace(/:/g, " : ").replace(/,/g, ", ")
			injectTextPoll(resourceid, eval(test));
		});
	}

	function bindEvents() {
		
		if ( $('li#poll_' + resourceid ).hasClass('default') ){
			$('.like-it-wrapper', '.leave-it-wrapper').on('click', function(e){
				var $this = $(this);
				if ( $this.find("[type='radio']").length > 0 ){
					var votes = $this.find("[type='radio']").attr('data-votes');
					var selected = $this.find("[type='radio']").first().prop("checked", true);
					show_share( resourceid );
					tracking( selected );
					//showResults( selected, votes );
					//submitPoll( selected );
					$this.addClass('clicked-once');
					
					
					var selectedid = $this.find("[type='radio']").attr('id');
					var votes = $this.find("[type='radio']").attr('data-votes');
					document.getElementById(selectedid).checked = true;
					//var truefalse = document.getElementById(selectedid).checked;
					var el = document.getElementById(selectedid);
					var el = $(el);
					IS.Poll.show_share(resourceid);
					showResults( el, votes );
					tracking( el );
					submitPoll( el );
					$this.addClass('clicked-once');
					
					
					//var answertext = $('#pollwrap #' + selectedid).next().text(),
					//slidetitle = $('#caption h2').first().text(),
					//title_answer = slidetitle + '-' + answertext,
					//slidedate = $('#caption .date').text() + 'POLL',
					//prop_date = s_time.prop11 + '-' + slidedate;
					//omniTrackEv( prop_date + title_answer );
				}
			});
		} else {
			setTimeout( function() {
				$( '#poll_' + resourceid + ' input[type=submit]' ).click( function(e){
							e.preventDefault();
							$( '#poll_' + resourceid + '_errors' ).html( '<div class="poll_errors">Please make a selection before voting.</div>' );
				});
			}, 5000 );

			$('#poll_' + resourceid + ' input[type=radio]').on('click', function(e){
				$('#poll_' + resourceid + ' input[type=submit]' ).off('click');
				$('#poll_' + resourceid + '_errors').html('');
				var $this = $(this),
				votes = $this.attr('data-votes');
				$('#poll_' + resourceid + ' input[type=submit]' ).click( function(e){
							e.preventDefault();
							show_share(resourceid);
							//tracking( $this );
							//showResults( $this, votes );
							submitPoll( $this );
				});
				$this.addClass('clicked-once');
			});
		}
		
	}

	function tracking( el ) {
		var id = el.data('item'),
		answer = el.next('span').find('label').text();
		// DDM the #date_id element was taken out 5.15.13 due to new design so no longer present I have to look up the date in the json created slide object
		if($( INSTYLE.SlideShow.slides['slide_'+id] ).length > 0 ){
			var arr = INSTYLE.SlideShow.slides['slide_'+id],
			date = arr.date,
			date = $(date).text();
	   	}else{
			var date = 'NODATE';
		}
		if($( '#caption_' + id + ' h2' ).length > 0 ){
			var slidetitle = $( '#caption_' + id + ' h2' ).text();
		} else {
			var slidetitle = 'NOTITLE';
		}
		if (typeof s_time.prop11 != undefined){
			var prop = s_time.prop11;
		} else {
			var prop = 'NOPROP';
		}
		//alert('omniture: ' + prop + '-poll|' + answer + '|' + date + '-' + slidetitle );
		omniTrackEv( prop + '-poll|' + answer + '|' + date + '-' + slidetitle );
		//console.log(id + slidedate + slidetitle + prop_date + votetitle);
	   	/*if ( el.hasClass('love-it') ) {
			omniTrackEv('love-it');
		} else if ( el.hasClass('leave-it') ) {
			omniTrackEv('leave-it');
		}*/
	}

	function disablePoll( el ) {
		//var  parentSiblings = parent.siblings('li'),
		//siblings =  parentSiblings.find('input[type=radio]');
		// el.removeClass('active');
		//siblings.removeClass('active');
	}

	document.domain = 'instyle.com';
	Poll.init({base_url: "http://profiles.instyle.com", brand: "InStyle", section: "Polls", article: resourceid, data_url: "http://www.instyle.com/instyle/poll/lotd/json/0,,"+resourceid+",00.js"});
	Poll.render_polls();
	getPoll();
	bindEvents();
}

this.polltoggle = function(id) {
	$('li#poll_' + id + ' .polltoggle').click(function() {
		$(".pollmore").slideToggle();
		$(this).toggleClass("active");
		return false;
	});
};

this.injectTextPoll = function(id, pollData) {
	var BASE_URL = 'http://profiles.instyle.com/brands/InStyle/sections/Polls/articles/';
	pollHash = pollData[0];
	console.dir("Loading poll: " + id);
	
	if ( typeof pollData != 'undefined' ) {
		var itemId = pollHash.id,
			questions = pollHash.questions[0],
			pollId = questions.poll_id,
			questionId = questions.id,
			questionText = questions.text,
			answers = questions.answers,
			vote_url = BASE_URL + itemId + '/polls/' + pollId + '/vote?add_document_domain=true',
			polltoggle = '<p class="polltoggle"></p>',
			polltop = '<form method="post" action="' + vote_url + '" target="_blank" onsubmit="show_share( this ); return false;" id="poll_form_' + itemId + '"><div id="poll_' + itemId + '_errors"></div>',
			paragraph = '<p class="poll_question" style="display:none">' + questionText + '</p>',
			pollfoot = '<p id="poll-foot"></p>',
			count = answers.length,		
			answerMarkup = '';
		
		for ( i = 0; i < count; i++ ) {
			answerMarkup += '<li><input type="radio" class="radio" name="question_' + questionId + '" id="answer_' + answers[i].id + '" value="' + answers[i].id + '" data-item="' + itemId +'" data-answer="' + answers[i].id + '" data-question="' + questionId + '" data-poll="' + pollId + '" data-votes="' + answers[i].vote_count + '"><span class="poll_txt"><label for="answer_' + answers[i].id + '">' + answers[i].text + '</label></span></li>';
		}

		var voteMarkup = polltoggle + paragraph + polltop + '<div class="pollmore"><ul>' + answerMarkup + '</ul><input type="submit" value="VOTE" class="vote-button btn-grey"></div></form>',
		
		container = $('#poll_' + id + ' .pollwrap');
		console.log("Injecting Markup: " + voteMarkup);
		container.append( voteMarkup );
		container.after( pollfoot );
		try {
		document.getElementById('poll_' + id).innerHTML=voteMarkup;
		} catch (err) {}
		//console.log("Found container: " + document.getElementById('poll_' + id).innerHTML);				
	}
	this.polltoggle(id);
};

INSTYLE.SlideShow = function ( config ) {
	var self = this;
	var slideWidth = 0;
	this.slideCount = 0;
	this.finished = false;
	this.galleryData = {};
	this.templates = {
		gallery: {},
		slide: {}
	};
	this.firstload = true;
	var currSlide = 1;
	var currLOTDCeleb = "";
	var omnislidetitle = new Array();
	var omnipagename = new Array();
	var currSlideID = '1';
	var aSlideIDs = new Array();
	var adTrends = new Array();
	var adCeleb = new Array();
	var adBrand = new Array();
	this.clicks = 0;
	this.init = function() {
	
	
	
		// Config
		var state = History.getState();

		// Convert query string in url to object
		var queryString = {};

		state.url.replace(
			new RegExp("([^?=&]+)(=([^&]*))?", "g"),
			function($0, $1, $2, $3) { queryString[$1] = $3; }
			
		);
		
					self.slideIndex = currSlideID || config.slideIndex || queryString.slide || 1;
					self.galleryID = galleryid;
					self.galleryID = parseInt(self.galleryID, 10);
					if (self.slideIndex == 'last') self.slideIndex = 1;
					self.duration = config.duration || 700;

		
					// Get Templates:
					self.templates.gallery.module = $('#template-gallery-module');
					self.templates.gallery.header = $('#template-gallery-header');
					self.templates.gallery.nextOverlay = $('#template-gallery-next-overlay');
					self.templates.gallery.nextCol1 = $('#template-gallery-next-col1');
					self.templates.gallery.nextPager = $('#template-gallery-next-pager');
					self.templates.gallery.tagSponsor = $('#template-gallery-tag-sponsor');
					self.templates.gallery.grid = $('#template-gallery-grid');
					self.templates.slide.col1 = $('#template-slide-col1');
					self.templates.slide.img = $('#template-slide-img');
					self.templates.slide.social = $('#template-slide-social');
					self.templates.slide.likeOrLeave = $('#template-slide-like-or-leave');
					self.templates.gallery.lotdTitle = $('#template-gallery-lotd-title');

					// Internal:
					self.$moduleWrapper = config.$wrapper;
					self.locked = false;
					self.lastSlideIndex = 1;
					self.slideWidth = 0;

					$('.slide-close').attr('href', lastPage);

		//JSON URL different for LOTD filtered
		var JSONurl= '';
			if ($('body').hasClass('filtered') ) {
				JSONurl = filterJSON;		
			} else {
				JSONurl = '/instyle/gallery/data/json/0,,' + galleryid + ',00.js';
			}
			
		var requestGalleryData = {
			url: JSONurl,
			dataType: 'json',
			cache: false,
			success: function(data) {
				self.galleryData = data.gallery;
				self.slideCount = self.galleryData.slides.length;
				self.galleryData['gallery-slide-count'] = self.slideCount;
				self.galleryData['gallery-is-lotd'] = (self.galleryData['gallery-type'] == 'lookoftheday');
				self.galleryData['thumb-img-width'] = self.galleryData['gallery-is-lotd'] ? 119 : 150;
				self.galleryData['thumb-img-height'] = self.galleryData['gallery-is-lotd'] ? 238 : 154;
				self.galleryData['sponsored'] =  self.galleryData['sponsored'];
				self.galleryData['gallery-sponsor'] =  self.galleryData['sponsor-name'];

				if (self.galleryData['gallery-is-lotd']) {
					self.galleryData.slides[0]['editors-choice'] = true;				
				}

				// ?debugads and ?testads= params
				var currUrl = window.location.href;
				var queryStringAppender = '' ;
				
					if(currUrl.indexOf('debugads') != -1) {
						queryStringAppender = '?debugads';
					} else if(currUrl.indexOf('testads') != -1) {
						queryStringAppender = '?testads=' + tiiGetQueryParamValue('testads');
					}
			  
				for (var i = self.galleryData.slides.length - 1; i >= 0; i--) {
					
					self.galleryData.slides[i]['share-url'] =  encodeURIComponent(self.galleryData.slides[i]['canonical-url'] + queryStringAppender);
					self.galleryData.slides[i]['slideID'] =  encodeURIComponent(self.galleryData.slides[i]['slide-id']);
					self.galleryData.slides[i]['file-name'] =  encodeURIComponent(self.galleryData.slides[i]['file-name']);
					self.galleryData.slides[i]['share-summary'] = encodeURIComponent(unescapeHTML(self.galleryData.slides[i]['short-desc']));
					self.galleryData.slides[i]['pin-summary'] = encodeURIComponent(unescapeHTML(self.galleryData.slides[i]['pin-desc']));
					self.galleryData.slides[i]['tw-title'] = encodeURIComponent(unescapeHTML(self.galleryData.slides[i]['tw-desc']));
					self.galleryData.slides[i]['share-title'] = encodeURIComponent(unescapeHTML(self.galleryData.slides[i]['og-title']));
					self.galleryData.slides[i]['share-img'] = encodeURIComponent(self.galleryData.slides[i]['main-img']);
					self.galleryData.slides[i].chosen = self.galleryData.slides[i]['editors-choice'] || self.galleryData.slides[i]['readers-choice'] || false;
					self.galleryData['gallery-count'] = parseInt($('#gallery-count').text(), 10);
					
					
					// Needs to be text if it's getting truncated, otherwise we may leave open tags-CHANGED TO HTML TO ALLOW FOR LINK HANDLING
					self.galleryData.slides[i].caption = $.trim($('<span>' + self.galleryData.slides[i].caption + '</span>').html());
					self.galleryData.slides[i]['short-caption'] = self.galleryData.slides[i].caption.substring(0, 1);
					self.galleryData.slides[i]['no-read-more'] = (self.galleryData.slides[i].caption == self.galleryData.slides[i]['short-caption']);
					if (!self.galleryData.slides[i]['no-read-more']) {
						self.galleryData.slides[i]['short-caption'] = self.galleryData.slides[i]['short-caption'].split(" ").slice(0, -1).join(" ") + "&hellip;";
					}

					// set the current index if the slide id matches 
					if (self.galleryData.slides[i]['slide-id']==slideid) {
						
						currSlideID = self.galleryData.slides[i]['slide-id'];
						
					}

					// add this slide to array of all slide ids
					aSlideIDs.push(self.galleryData.slides[i]['slide-id']);
					
					//updated omniture slide name pulled from JSON
					omnislidetitle.push(self.galleryData.slides[i]['omni-slide-name']);
					
					//updated omniture pagename pulled from JSON
					omnipagename.push(self.galleryData.slides[i]['omni-name']);
					
					//ad-trends pulled from JSON
					adTrends.push(self.galleryData.slides[i]['ad-trends']);
					
					//ad-celeb pulled from JSON
					adCeleb.push(self.galleryData.slides[i]['ad-celeb']);
		
					//ad-brand pulled from JSON
					adBrand.push(self.galleryData.slides[i]['ad-brand']);

						
				}
				//new arrays are in reverse order, so reverse!
				aSlideIDs.reverse();
				omnislidetitle.reverse();
				omnipagename.reverse();
				adTrends.reverse();
				adCeleb.reverse();
				adBrand.reverse();
				currSlide= aSlideIDs.indexOf(slideid) + 1;
				
				
			},
			error: function() {
				//if (window.location.href.match('dev')) {
				// alert('An error has occurred loading the next gallery.');
				//}
			}
		};


		var requestNextGalleryData = {
			url: indexJSON, //in-page var
			dataType: 'json',
			cache: false,
			success: function(data) {
				// listen for gallery id to be set so we can pull appropriate next slide
				var interval = setInterval(function() {
					if (typeof self.galleryData['gallery-id'] != 'undefined') {
						clearInterval(interval);
						var nextGalleryIndex = 0;
						for (var i = 0; i < data.index.galleries.length; i++) {
							if (data.index.galleries[i]['gallery-id'] == self.galleryData['gallery-id']) {
								nextGalleryIndex = typeof data.index.galleries[i + 1] == 'undefined' ? 0 : i + 1;
									//loop back to first slide in pacakge
								break;
							}
						}

						var nextGallery = {
							"next-gallery-title": data.index.galleries[nextGalleryIndex]['gallery-title'],
							"next-gallery-img": data.index.galleries[nextGalleryIndex]['gallery-img'],
							"next-gallery-img-alt": data.index.galleries[nextGalleryIndex]['img-alt-tag'],
							"next-package-name": self.galleryData['package-name'],
							"next-gallery-url": data.index.galleries[nextGalleryIndex]['canonical-url'] || "#", //link to next gallery
							"next-arrow-stitch": data.index.galleries[nextGalleryIndex]['canonical-url'] || "#" //link to next gallery
							
						};
						if (nextGalleryIndex > 1) {
							nextGallery["prev-gallery-url"] = data.index.galleries[nextGalleryIndex - 2]['canonical-url'] || "#";
						}

						self.galleryData = $.extend(self.galleryData, nextGallery);
					}
				}, 60);
			},
			error: function() {
				//if (window.location.href.match('dev')) {
				// alert('An error has occurred loading the next gallery.');
				//}
			}
		};

		
		$.when($.ajax(requestGalleryData), $.ajax(requestNextGalleryData)).done(function(){ self.deferredLoad(); });
		
		
		
		return this;
	};

	// Don't call load until next gallery data is loaded
	this.deferredLoad = function() {
		var interval = setInterval(function(){
			if (typeof self.galleryData['next-gallery-title'] != 'undefined') {
				clearInterval(interval);
				return self.load();
			}
		}, 50);
	};

	this.load = function() {
	
	
		// Empty the module, which is full of placeholder stuff from the server that we will re-render
		this.$moduleWrapper.empty();
		
		var state = History.getState();
		if (typeof state.data.slide != 'undefined' && state.data.slide > this.slideCount) {
			// prevent bug when scrolling to last slide (with overlay), then going to another page, then browsing backwards
			self.slideIndex = self.slideCount;
			History.replaceState({ slide: self.slideIndex, gallery: parseInt(self.galleryID, 10) }, unescapeHTML(self.galleryData.slides[self.slideIndex - 1]['title-bar']), decodeURIComponent(self.galleryData.slides[slideIndex]['share-url']) );
		}
		this.$moduleWrapper.addClass(this.galleryData['gallery-type']);
		// Helper function: render a template passing the entire galleryData object
		// and insert into template's wrapper.
		function _renderTemplate($templateNode, context) {
			var $wrapper = $('.' + $templateNode.attr('data-wrapper-class'), context);
			var tpl = Handlebars.compile( $templateNode.html() );

			$wrapper.prepend( tpl(self.galleryData) );
		}

		// Populate the templates all at once, there's no real difference between
		// gallery and slide templates here, they're just separated to make it
		// clearer what's what.
		$.each(this.templates.gallery, function(index, $templateNode) {
			_renderTemplate($templateNode, this.$moduleWrapper);
		});
		$.each(this.templates.slide, function(index, $templateNode) {
			_renderTemplate($templateNode, this.$moduleWrapper);
		});

		this.$slideShow = $('.slideshow', this.$moduleWrapper);
		this.$controls = $('.slideshow-controls', this.$slideShow);
		this.$prev = $('.btn-prev', this.$controls);
		this.$next = $('.btn-next', this.$controls);
		this.$slideNum = $('.slide-number', this.$controls);

		this.$gridBtn = $('.slide-action-grid', this.$slideShow);
		this.$grid = $('#gallery-grid');
		this.$gridBack = $('.gallery-grid-back', this.$grid);
		this.$gridThumbLinks = $('.gallery-grid-thumb-link', this.$grid);
		this.$filters = $('.gallery-grid-filter', this.$grid);

		this.slideWidth = this.$moduleWrapper.outerWidth(true);

		this.$slideShow.toggleClass('sponsored', this.galleryData.sponsored);
		
		//pinterest hotfix
		 //$('.share-pinterest').each(function( index ) { $(this).attr('href', $(this).attr('href').replace("link","button")) });
	
			 
		// Internal functions:
		// Mini crossfade utility for toggling the grid view
		function _crossFade($out, $in) {
			$out.hide();
			$in.show();
			//$out.fadeOut(self.duration);
			//$in.fadeIn(self.duration);
		}

		// Social links:
		function _share(e) {
			e.preventDefault();

			var w = 670;
			var h = 370;
			var wLeft = window.screenLeft ? window.screenLeft : window.screenX;
			var wTop = window.screenTop ? window.screenTop : window.screenY;
			var top = ( wTop + $(window).height() / 2 ) - ( h / 2 );
			var left = ( wLeft + $(window).width() / 2 ) - ( w / 2 );
			var windowParams = 'width=' + w + ', height=' + h + ', top=' + top + ', left=' + left;
			var $btn = $(e.target).closest('.slide-share-btn');
			var wName = $btn.attr('title');
			window.open( $btn.attr('href'), wName, windowParams );
		}


		// "Like It or Leave It" buttons on Look of the Day galleries:
		function _likeOrLeave(e) {
			e.preventDefault();
			var $target = $(e.target).closest('.like-leave-trigger');
			if ($target.hasClass('submitting')) return;
			var likeIt = $target.hasClass('like-it') ? 1 : 0;
			$target.parents('.like-or-leave').find('.like-it, .leave-it').addClass('submitting');
			$('#like-or-leave-' + self.slideIndex).html('<div><div style="display:block; font-family: freight-sans-pro; font-size: 12px; font-style: normal; font-weight: bold"><span class="like-percent" style="font-family: freight-sans-pro;font-size: 24px; font-weight: normal">'+likePercent+'%</span><br /> LIKE IT!</div><div style="display:block; padding:4px"><i> and </i></div><div style="display:block; font-family: freight-sans-pro; font-size: 12px; font-style: normal; font-weight: bold"><span class="like-percent" style="font-family: freight-sans-pro; font-size: 24px; font-weight: normal">'+leavePercent+'%</span><br /> LEAVE IT!</div></div>');
		}
		
		function _restart(e) {
			if (typeof e != 'undefined') e.preventDefault();
			self.unFinishSlides();
			self.goTo(1);
		}

		function _showGrid(e) {
			if (typeof e != 'undefined') e.preventDefault();
			_crossFade(self.$slideShow, self.$grid);
			self.unFinishSlides();
			self.$moduleWrapper.height(self.$grid.outerHeight(true));
			$('#main-gallery-grid-thumbs .gallery-grid-thumb', self.$grid).eq(self.slideIndex - 1).addClass('highlighted').siblings().removeClass('highlighted');
			$('#ifad300x250-right').hide(); //sidebar ad gets moved in grid view
			$('#ifadsponsor').hide(); //CM ad gets removed in grid view
			//Init chosen styled select menu
			if (!Modernizr.touch) {
				$('.chosen-select').chosen();
			}
		}

		function _hideGrid(e) {
			if (typeof e != 'undefined') e.preventDefault();
			_crossFade(self.$grid, self.$slideShow);
			self.crossFade(0); // Trigger cross fade to get the layout again in case user hit browser back button
			self.$moduleWrapper.height('auto');
			$('#gallery-grid-original-content').show();
			$('#gallery-grid-filtered-content').empty();
			$('.gallery-grid-filter').val(0).trigger("chosen:updated");
			$('#ifad300x250-right').show(); //sidebar ad reappears when hiding grid
			$('#ifadsponsor').show(); //CM ad gets reappears when hiding grid
		}

		function _clickGridThumb(e) {
			if (typeof e != 'undefined') e.preventDefault();
			var slideIndex = parseInt($(this).attr('href').replace('?slide=', ''), 10);

			_crossFade(self.$grid, self.$slideShow);
			self.$moduleWrapper.height('auto');

			self.goTo(slideIndex);
			self.stateChange();
			$(this).parents('.gallery-grid-thumb').addClass('highlighted').siblings().removeClass('highlighted');
			$('#ifad300x250-right').show(); //sidebar ad reappears when hiding grid
			$('#ifadsponsor').show(); //CM ad gets reappears when hiding grid
			
		}
		//Look of the Day Filtered View
		function _filterGrid(e) {
			var $el = $(this);
			var option = $el.attr('name');
			var value = $('option:selected', $el).val();
			if (!parseInt(value, 10)) return;
			$.ajax({
				data: { option: option, value: value },
				url: 'ajax/gallery/lotd-filtered-grid.php',
				cache: false,
				success: function(data) {
					$('#gallery-grid-original-content').hide();
					$('#gallery-grid-filtered-content').show().html(data);
					$sibling = $el.is('#filter-celebrity') ? $('#filter-designer') : $('#filter-celebrity');
					$sibling.val(0).trigger("chosen:updated");
					$chosenSibling = $el.is('#filter-celebrity') ? $('#filter_designer_chosen') : $('#filter_celebrity_chosen');

					// Show Reset 'X' icon onchange
					$('#reset-filters').show();
					$chosenSibling.add($sibling).hide();
					$('.gallery-grid-filter-or', self.$grid).hide();
				},
				error: function() {
				//if (window.location.href.match('dev')) {
				// alert('An error has occurred loading the next gallery.');
				//}
				}
			});
		}

		function _loadMoreGrid(e) {
			if (typeof e != 'undefined') e.preventDefault();
			var $el = $(this);
			var nextRow = $el.attr('id').replace('gallery-grid-load-more-', '');
			$.ajax({
				url: 'ajax/gallery/lotd-row-' + nextRow + '.php',
				cache: false,
				success: function(data) {
					var $parent = $el.parent();
					$el.before(data);
					$el.remove(); // Response should contain a new button with an updated id, or no button if no more are to be loaded.
					$('.gallery-grid-load-more', $parent).on( 'click', _loadMoreGrid );
					self.$moduleWrapper.height(self.$grid.outerHeight(true));
				},
				error: function() {
				//if (window.location.href.match('dev')) {
				// alert('An error has occurred loading the next gallery.');
				//}
				}
			});
		}

		function _readMore(e) {
			if (typeof e != 'undefined') e.preventDefault();
			$(this).parents('.slide-description-wrapper').toggleClass('long-text');
			
			//ad adjustment
			adHeightAdjust();	
			
		}
		
		function _resetFilters(e) {
			if (typeof e != 'undefined') e.preventDefault();
			$('.chosen-container, .gallery-grid-filter-or', self.$grid).show();
			if (Modernizr.touch) {
				$('.chosen-select', self.$grid).show();
			}
			$('.gallery-grid-filter').val(0).trigger("chosen:updated");
			$('#gallery-grid-original-content').show();
			$('#gallery-grid-filtered-content').empty();
			$('#reset-filters').hide();
		}

		// All events are bound here:
		this.$prev.on( 'click.SlideShow', this.prev );
		this.$next.on( 'click.SlideShow', this.next );

		this.$slideShow.on( 'slideBegin', this.slideBegin );
		this.$slideShow.on( 'slideComplete', this.slideComplete );

		$('.like-it, .leave-it', this.$slideShow).on( 'click.SlideShow', _likeOrLeave );
		$('.slide-share-btn', this.$slideShow).on( 'click.SlideShow', _share );
		$('.restart-link', this.$slideShow).on( 'click.SlideShow', _restart );

		this.$gridBtn.on( 'click.SlideShow', _showGrid );
		this.$gridBack.on( 'click.SlideShow', _hideGrid );
		this.$gridThumbLinks.on( 'click.SlideShow', _clickGridThumb );

		this.$filters.on( 'change.SlideShow', _filterGrid );
		$('.gallery-grid-load-more').on( 'click', _loadMoreGrid );
		$('.read-more-link').on( 'click', _readMore );

		$('#reset-filters').on( 'click.SlideShow', _resetFilters );
		$('.slide-close').attr('href', lastPage);
				

		if (Modernizr.touch) {		
			this.$moduleWrapper.swipe({
				swipeStatus       : self.swipeStatus,
				threshold         : 75,
				//excludedElements  : [],
				allowPageScroll   : 'vertical'
			});
			
		}

		// Init first slide:
		this.slideIndex = Math.min(this.slideIndex, this.slideCount);
		
		// Listen for statechange
		History.Adapter.bind(window, 'statechange', self.stateChange);
		
		
		self.goTo(currSlide); //deep linking
		self.stateChange();
		return this;
				
	};

	this.prev = function(e) {
		if (typeof e != 'undefined') e.preventDefault();
		if (self.galleryData['gallery-is-lotd'] && typeof self.galleryData['prev-gallery-url'] != 'undefined' && self.slideIndex <= 1) {
			window.location = self.galleryData['prev-gallery-url'];
			return;
		}
		if (self.locked || self.slideIndex <= 1) return;
		self.goTo(self.slideIndex - 1);
		
		//reset ad height to original position 
		if (self.galleryData['gallery-is-lotd']){
			$('#ifad300x250-right').css('top','450px'); 
		} else {
			$('#ifad300x250-right').css('top','400px');
		}
	};

	this.next = function(e) {
		if (typeof e != 'undefined') e.preventDefault();
		if (self.slideIndex == self.slideCount) {
			window.location = self.galleryData['next-gallery-url'];
			return;
		}
		if (self.locked || self.finished) return;
		// The +1 is for the final "next gallery" slide
		self.goTo(Math.min(self.slideIndex + 1, self.slideCount + 1));
		
		 //reset ad height to original position 
		if (self.galleryData['gallery-is-lotd']){
			$('#ifad300x250-right').css('top','450px');
		} else {
			$('#ifad300x250-right').css('top','400px');
		}
	};

	this.goTo = function(slideIndex) {
	

		
		slideIndex = typeof slideIndex == 'undefined' ? self.slideIndex : slideIndex;

		if (typeof slideIndex == 'undefined') return;

		if (slideIndex > self.slideCount) {
			History.pushState({ slide: slideIndex, gallery: parseInt(self.galleryID, 10) }, unescapeHTML(self.galleryData.slides[self.slideCount - 1]['title-bar']), '?gallery=' + parseInt(self.galleryID, 10) + '&slide=last');
		} else {
			if (self.finished) {
				slideIndex = self.slideCount;
			}

			var slide = self.galleryData.slides[slideIndex - 1];
			
			//set the URL to the canonical URL provided by JSON
			History.pushState({ slide: slideIndex, gallery: parseInt(self.galleryID, 10) }, unescapeHTML(slide['title-bar']), decodeURIComponent(self.galleryData.slides[slideIndex - 1]['share-url']) ); //set URL to the canonical url JSON node
							
				
				self.clicks++;			
	    	
	    	//display interstitial ad every 5th click and if not a native gallery
	    	
			 if ( ( self.clicks % 6 === 0 && self.galleryData['sponsored'] != true) ) {	 		 
				this.displayinterstitial(self.slideIndex);
				self.clicks = 1;
										
	    	} else {
				this.writeads(self.slideIndex);			//ads call
			}
			
			$.ajax({
  				 url: '/instyle/static/v4/js/pvc.js',
  				 cache: false 
 				
			});
					
		}
		
		if (isFirstTracking == "true") {
			isFirstTracking = "false";
		}
		 else {
			this.refreshomniture(self.slideIndex); //omniture call for subsequent AJAX slides
		}	
		
		this.refreshcomscore(self.slideIndex); // refresh comscore beacon
		
		
		//bottom recirc adjust for ad size once ad iframes have loaded
		 $('#ifad300x250-right iframe').load(function(){
		 	//alert('iframe ads have loaded!')
		 	if ($("#ifad300x250-right").height() > 620) {
				$('.relGal').css({"margin-top": "330px"});			
			} else {			
				$('.relGal').css({"margin-top": "0px"});		
			}
		 });
		 
		 
		// LOTD galleries display like it or leave it buttons with polling
		if (self.galleryData['gallery-is-lotd']) {
			$('.like-it-wrapper').show();
			$('.leave-it-wrapper').show()
			textPoll(self.galleryData.slides[slideIndex-1]['slide-id']);
		}
		
	};
	
	//slideshow adjustments when interstitial ad is served
	function interstitialAdjust(){
		 $( ".ad-slideshow-controls" ).click(function(event) {
				event.preventDefault();
				$('#interstitial').remove();
				$('#interstitial-controls').remove();
				$('#ifad300x250-right').show();
				$('#ifad728x90-top').show();
				$('#ifadsponsor').show();
				$('.slideshow-controls.main-controls').css('display','block');
				$('.gallery-col1').css('visibility','visible');
				$('.slide-share-wrapper').css('visibility','visible');
				$('.slide-actions').css('visibility','visible');
				$('.module-related-galleries').css('margin-top','0px');
				$('.slide-images').show();
				
				self.writeads(self.slideIndex);	//fire ads when interstitial is closed
		});
	};
	
	//interstitial ad call
	this.displayinterstitial = function() {
		var inter = '<div class="gallery-header-wrapper" id="interstitial-controls">' +
		'<div class="gallery-header gallery-header-main">' +
		'<div class="slideshow-controls ad-controls">' +
		'<a href="#" class="slideshow-nav ad-slideshow-controls btn-prev"><i class="nav-icon icon-carouselarrowleft"></i> <span class="btn-text">Prev</span></a>' +
		'<a href="#" class="slideshow-nav ad-slideshow-controls btn-next"><span class="btn-text">Next</span><i class="nav-icon icon-carouselarrowright"></i></a>' +
		'</div>' +
		'</div>' +
		'</div><div id="interstitial">' +
		'<div class="centercol">' +
		'<div class="ad"><p>ADVERTISEMENT</p>' +
		'<div id="interiframewrap"></div></div>'+
		'</div>',
			
	slideimgwrapper = $('.gallery-col2');
	
	if ( navigator.userAgent.indexOf('Firefox') > -1 ) {
			
				$('body').append('<div id="mozillaAdINTSlot" style="display:none;"></div>');
				IS.Global.appendAdScript({ id: "mozillaAdINTSlot", multi: ["2x9","2x1"] });
			}
	slideimgwrapper.append(inter);
	IS.Global.appendAdScript({ id: "interiframewrap", multi: ["850x428","300x250"] });
	
	var interheight = slideimgwrapper.height();
	$('#interstitial').css('height', interheight);
	var interheight = slideimgwrapper.height(),
	interheight = Number(interheight) + 52;
	if(interheight < 628){
	    interheight = 680;
	    $('#gallery-slideshow').css('height','680px');
	}
	
	$('#interstitial').css('height', interheight + 'px');
	$('.gallery-col1').css('visibility','hidden');
	$('.slide-share-wrapper').css('visibility','hidden');
	$('.slide-actions').css('visibility','hidden');
	$('#ifad300x250-right').hide();
	$('#ifad728x90-top').hide();
	$('#ifadsponsor').hide();
	$('.slide-images').hide();
	$('.slideshow-controls.main-controls').css('display','none');
	$('.module-related-galleries').css('margin-top','80px');
	
		//remove interstitial when controls are clicked and display hidden items/ads
		interstitialAdjust(); 
				
    };
  	
  	//adjust 300x250 or 300x600 ad when read more is triggered
	function adHeightAdjust() {
	//called in readmore function	
						
			if (self.galleryData['gallery-is-lotd']) {
				var adheight = 240 + $('#col-1-'+ self.slideIndex).height();
				if ($('#ifad300x250-right').css('top') == '450px' ) {
					$('#ifad300x250-right').css({'top' : adheight +'px'	});
				} else {
					$('#ifad300x250-right').css({'top' : '450px'});	
				}
			
			} else {
				var adheight = 240 + $('#col-1-'+ self.slideIndex).height();
				if ($('#ifad300x250-right').css('top') == '400px' ) {
					$('#ifad300x250-right').css({'top' : adheight +'px'	});
				} else {
					$('#ifad300x250-right').css({'top' : '400px'});	
				}
				
			}
		
			var a = $('#ifad300x250-right').height();
			var b =  $('#col-1-'+ self.slideIndex + ' .slide-description-long').height();
			var relGalHeight = Math.max(a,b) - 90;
			$('.relGal').css({'margin-top' : relGalHeight +'px'	});
			
	};
	
	//write tgx ads   
    this.writeads = function(id) {
		
		if (!adFactory || adFactory.iframes.length <= 0) {return false;}
		if (typeof adFactory.srnd != 'undefined' && adFactory.srnd !== null && adFactory.srnd != '') {adFactory.srnd = null;}
		if (typeof aSlideIDs != 'undefined' && aSlideIDs !== null && aSlideIDs != '') {
		    adFactory.ord = (new Date()).getTime() + Math.ceil(Math.random() * Math.pow(10,16));
		    adFactory.setParam('url', location.href);
		    adFactory.setParam('page', id);
		  	adFactory.setParam('trends', adTrends[self.slideIndex - 1]);
 		    adFactory.setParam('celeb', adCeleb[self.slideIndex - 1]);
 		    adFactory.setParam('brand', adBrand[self.slideIndex - 1]);
 		   // adFactory.setParam('instylerefresh', 1); //fake param for testing
		}
		function writeIFRAME(v) {
		    var p = adFactory.iframes[v].split('|'),
		    d = p[1].split(','),
		    w = Number(d[0]),
		    h = Number(d[1]),
		    t = v+1,
		    iframe = '',
		    adop = (location.search != '') ? String(location.search).replace('?','')+'&amp;' : '';

		if( d[0].match('x') ){
		    var multiArr = new Array();
		    multiArr = p[1].split(',');
		}
	    
		var e = document.getElementById(p[0]),
		targetDivChild;
    
		if ( p[0] != 'adSponsoredBy' && p[0] != 'ad1x1' ) {
			targetDivChild = ( p[0] == 'ifad300x250-right' ) ? "<div class='title'><span>Advertisement</span></div><div id='innerdiv' class='content'></div>" : "<span class='title'>Advertisement</span>";
			$(e).append(targetDivChild);
		}
		if( p[0] == 'ifad300x250-right' ){
			p[0] = 'innerdiv';
			var index = $.inArray('ifad300x250-right|300x600,300x250', adFactory.iframes);
			adFactory.iframes[index] = 'innerdiv|300x600,300x250';
		}
		//check for multiArr and if multi ad present then send it else use h and w
		( typeof multiArr !== 'undefined' && multiArr !== '') ? IS.Global.appendAdScript({ id: p[0], multi: multiArr }) : IS.Global.appendAdScript({ w: w, h: h, id: p[0] });

		}
		if ( this.firstload === true ) {
			if ( navigator.userAgent.indexOf('Firefox') > -1 ) {
				$('body').append('<div id="mozillaAdSlot" style="display:none;"></div>');
				adFactory.iframes.unshift('mozillaAdSlot|2,9');
		 
			}
    		
			for  ( var i = 0; i < adFactory.iframes.length; i++) {
				writeIFRAME(i);
				
			}
			
						
			this.firstload = false;
			
		} 
		else {
			var ads = new Array();
			for  ( var i = 0; i < adFactory.iframes.length; i++) {
				var p = adFactory.iframes[i].split('|');
				if ( p[0] != 'mozillaAdSlot' ) {
                        ads.push(p[0]);
                    }
				
			}
			
			
			
			adFactory.refreshAds(ads); //refresh ads
			
			
		}
		
	};
	
	//Omniture
	this.refreshomniture = function(id) {
		var arr = aSlideIDs,
        u = String(location.href),
	pagename;
	pagename = omnipagename[self.slideIndex - 1];
	s_time.pageName = pagename;
	s_time.eVar4 = pagename;
	s_time.eVar23 = pagename;
	s_time.eVar28 = s_time.prop11;
		s_time.events = 'event1,event32';
        s_time.pageName = pagename;
        s_time.prop9 =  omnislidetitle[self.slideIndex - 1];
        s_time.pageURL = u;
        s_time.prop17 = u;
        s_code = s_time.t()
    };

	$('body').on('click', '.share-facebook', handleClick);
	$('body').on('click', '.share-twitter', handleClick);
	$('body').on('click', '.share-pinterest', handleClick);
	$('body').on('click', '.share-googleplus', handleClick);
	$('body').on('click', '.slide-action-grid', handleClick);
	$('body').on('click', '.gallery-grid-back', handleClick);
	$(document).on('click', '.like-it', handleClick);
	$(document).on('click', '.leave-it', handleClick);
	
	/* EVENT HANDLERS */
    function handleClick(e) {
      if ($(this).hasClass('share-facebook')) {
             omniTrackEv('FB Like' + '|' + s_time.pageName);
        } else if ($(this).hasClass('share-twitter') ) {
             omniTrackEv('Twitter'+ '|' + s_time.pageName);
        } 
         else if ($(this).hasClass('share-pinterest') ) {
             omniTrackEv('Pinit'+ '|' + s_time.pageName);
        } 
         else if ($(this).hasClass('share-googleplus') ) {
             omniTrackEv('GooglePlus'+ '|' + s_time.pageName);
        } 
         else if ($(this).hasClass('slide-action-grid') ) {
             omniTrackEv('Grid View'+ '|' + s_time.prop39);
        } 
         else if ($(this).hasClass('gallery-grid-back') ) {
             omniTrackEv('Grid View Back'+ '|' + s_time.prop39);
        } 
       	 else if ($(this).hasClass('like-it') ) {
             omniTrackEv('look of the day-poll|Like It'+ '|' + s_time.pageName);
        } 
         else if ($(this).hasClass('leave-it') ) {
             omniTrackEv('look of the day-poll|Leave It'+ '|' + s_time.pageName);
        } 
    }
    
    //reset omniture values in AJAX
	function omniTrackEv(omniStr,omniStr2) {
	
		if ((typeof(omniStr)!='string')||(typeof s_account!='string'))return 0;
		var s_time = s_gi(s_account);
		s_time.linkTrackVars='events,eVar43,prop14,prop4';
		var aEvent='event43';
		var aList = [['fb-like','event43'],['fb-share','event43'],['google+1','event43'],['twitter','event43'],['like-it','event43'],['leave-it','event43']]
		for (i=0; i < aList.length; i++) {
                if(omniStr.toLowerCase()==aList[i][0]){aEvent = s_time.apl(aEvent,aList[i][1],',','1');}
		}
		s_time.linkTrackEvents = s_time.events = aEvent;
		s_time.user_action = omniStr;
		s_time.prop4 = omniStr;
		s_time.eVar43 = s_time.prop4;
		s_time.prop14 = s_time.pageName;
		s_time.prop17;
		if((omniStr == 'comment') && typeof(omniStr2)!='undefined'){
			s_time.screen_name = omniStr2;
			s_time.linkTrackVars+=',eVar41';
		}
		s_time.tl(true,'o','Event:'+omniStr);
		s_time.linkTrackVars = s_time.linkTrackEvents = 'None';
		s_time.user_action = s_time.eVar43 = s_time.prop14 = s_time.prop4 = s_time.events = '';
	}
	
	//comscore
	this.refreshcomscore = function(id) {
		 var u = location.href;
			u = 'http://b.scorecardresearch.com/b?c1=2&c2=6035728&rn='+Math.random()+'&c7='+escape(u)+'&c3=&c4=&c5=&c6=&c10=&c15=&c16=&c8=&c9=&cv=1.7';
			$('body:first').append('<img src="'+u+'" width="1" height="1" border="0" />');
			 if ( typeof cs != 'undefined' ) {
					if (cs.enabled) { cs.csFireBeacon(); }
			}
		};
		
	

	//jumptime
	this.paginateJumptime = function() {
        $('.slideshow-nav .btn-prev a, .slideshow-nav .btn-next a').click(function(){
	    IS.Jumptime.track();
        });
    };
			
	this.stateChange = function() {
	
		var state = History.getState();

		if (state.data.slide > self.slideCount) return self.finishSlides();
		if (typeof state.data.slide == 'undefined') state.data.slide = 1;
		var args = {};
		if (self.slideIndex == state.data.slide) {
			args.duration = 0;
		}
		self.lastSlideIndex = self.slideIndex;

		self.slideIndex = state.data.slide;
		self.scrollSlides(args);
		
		 
	};
	
	//this is the place to run functions after AJAX calls!
	this.scrollSlides = function(args) {
		args = args || {};
		var duration = typeof args.duration == 'undefined' ? this.duration : args.duration;
		if (this.finished) {
			this.unFinishSlides();
		}
 
		this.crossFade(duration);

		$('.slide-number', self.$controls).text(self.slideIndex);
		if (!self.galleryData['gallery-is-lotd'] || typeof self.galleryData['prev-gallery-url'] == 'undefined') {
			self.$prev.toggleClass('disabled', (self.slideIndex <= 1));
		}
		

		self.$slideShow.trigger('slideBegin');
		setTimeout(function() {
			self.$slideShow.trigger('slideComplete');
				
		}, duration + 60);
		
		//read more display	if over 5 lines/115px	
	 	 $('.slide-description-long').removeClass('read_more_height');
	 	
		 if ($('#col-1-'+ self.slideIndex + ' .slide-description-long').height() > 115) {
			 $('.read-more-link').css({'display' : 'block'});	
		 } else {
			$('.read-more-link').css({'display' : 'none'});	
			}	
		
		//set the height for slide description wrapper	
		 $('.slide-description-long').addClass('read_more_height');
		 
		 //hide original slide description wrapper
		 $('.slide-description').css({'display' : 'none'});	
		
		//reset the height of the wrapper 
		 $('.module-gallery-slideshow .gallery-col-wrapper').css({'height' : 'auto'});
		 
		 //add some padding if native gallery
		 if ($(".gallery-sponsor").height() > 19) {
				$('.gallery-col1').css({"top": "20px"});			
			}
			
		//add target="_blank" to share buttons to allow for popups	
		$('.slide-share-btns li a[href^=http]' ).attr('target','_blank');
			
		//scroll to current gallery in the bottom recirc module
		$('.jcarousel').jcarousel('scroll', $('.gallery-carousel-item.g-' + galleryid));
		
		//set href to cookie path
		$('.slide-close').attr('href', lastPage);
	};
	
	
	//wide galleries adjustments
	this.adjustLayout = function() {	
		
		if ($('.slide-img-wrapper img').width() > 600) {
			
			$('.slideshow-controls').css({
				"width": "885px"		
			});
				
			$('.gallery-col1').toggle();
			
			$('#ifad728x90-top').toggle();
			
			$('.gallery-col2').css({
			    "margin-top": "40px"
		    });
			
			$('.gallery-col3').css({
				//"position": "fixed",
			    "margin-left": "300px",
				"left": "100px"
		    });
			
			$('.slide-caption').css({
				"position": "relative",
			    "width": "100px",
				"left": "-10px"
		    });		
	
			$('.gallery-col1').css({
				"position": "absolute",
			    "width": "500px",
				//"left": "100px",
				"top": "820px"	
			});
			
			$('.gallery-col1').toggle();	
			
			$('.relGal').css({
				"margin-top": "300px"
		    });
			
			$('.ad-300x250').css({
				"position": "absolute",
				"top": "450px",	
				"left": "600px"
		    });	
		    
		  $('.module-related-galleries').css({
				"position": "relative",
				"top": "300px",	
				
		    });	 
											
			$(window).scroll(function(){
			  $(".gallery-col3").stop().animate({"top": ($(window).scrollTop()) + "px"}, "slow" );
			});	
				
			
		}	
	}
	
	this.crossFade = function(duration, nextGallery) {
		// if (this.slideIndex === this.lastSlideIndex) return;
		duration = typeof duration == 'undefined' ? this.duration : duration;

		// Set column heights:
		var col1Height = $('#col-1-' + this.slideIndex).outerHeight(true);

		$('.gallery-header-wrapper', this.$slideShow).height($('.gallery-header-main', this.$slideShow).outerHeight());
		var headerHeight = $('.gallery-header-wrapper', this.$slideShow).outerHeight(true);
		var imgHeight = $('#slide-img-' + this.slideIndex).outerHeight(true);
		var col2Height = headerHeight + imgHeight;

		var closeHeight = $('.slide-close', this.$slideShow).outerHeight(true);
		var socialHeight = $('#slide-social-' + this.slideIndex).outerHeight(true);
		var actionsHeight = $('.slide-actions', this.$slideShow).outerHeight(true);
		var col3Height = closeHeight + socialHeight + actionsHeight;

		$('.gallery-col1', this.$slideShow).height(col1Height);
		$('.gallery-col2', this.$slideShow).height(col2Height);
		$('.gallery-col3', this.$slideShow).height(col3Height);

		var i = this.lastSlideIndex;
		var j = this.slideIndex;
		var $fadeOut = $('#slide-leaderboard-' + i + ', #col-1-' + i + ', #slide-img-' + i + ', #slide-social-' + i + ', #like-or-leave-' + i);
		var $fadeIn  = $('#slide-leaderboard-' + j + ', #col-1-' + j + ', #slide-img-' + j + ', #slide-social-' + j + ', #like-or-leave-' + j);

		$fadeOut.stop().fadeOut(duration).siblings().stop().hide();
		$fadeIn.fadeIn(duration);	
	};

	this.finishSlides = function() {
		$('.gallery-header-main', this.$slideShow).fadeOut(self.duration);
		$('.gallery-header-up-next', this.$slideShow).fadeIn(self.duration);
		$('.gallery-header-wrapper', this.$slideShow).height($('.gallery-header-up-next', this.$slideShow).outerHeight());

		$('#col-1-next-gallery').fadeIn(self.duration);
		$('#col-1-' + self.slideIndex).fadeOut(self.duration);

		var s = $('.slide-img-container:visible .slide-img');
		$('.template-gallery-next-overlay', this.$slideShow).show().css({
			opacity: 0,
			width: s.outerWidth()+1,
			height: s.outerHeight(),
			left: '50%',
			marginLeft: -(s.width() / 2+1)
		}).animate({ opacity: 0.85 }, self.duration);

		$('.gallery-col3 .slideshow-controls', this.$slideShow).fadeIn(self.duration);
		$('.gallery-col3 .slide-share-wrapper, .gallery-col3 .like-or-leave-wrapper', this.$slideShow).fadeOut(self.duration);

		// Collapse space below Gallery
		//$('.gallery-col1').height('');
		
		
		
		

		this.$slideShow.addClass('finished-slides');
		this.finished = true;
	};

	this.unFinishSlides = function() {
		$('.gallery-header-up-next', this.$slideShow).fadeOut(self.duration);
		$('.gallery-header-main', this.$slideShow).fadeIn(self.duration);
		$('.gallery-header-wrapper', this.$slideShow).height($('.gallery-header-main', this.$slideShow).outerHeight());

		$('#col-1-next-gallery').fadeOut(self.duration);
		$('#col-1-' + self.slideIndex).fadeIn(self.duration);

		$('.template-gallery-next-overlay', this.$slideShow).fadeOut(self.duration);

		//$('.gallery-col3 .slideshow-controls', this.$slideShow).fadeOut(self.duration);
		$('.gallery-col3 .slideshow-controls', this.$slideShow).hide();
		$('.gallery-col3 .slide-share-wrapper, .gallery-col3 .like-or-leave-wrapper', this.$slideShow).fadeIn(self.duration);

		this.$slideShow.removeClass('finished-slides');
		this.finished = false;
	};

	this.slideBegin = function() {
		self.locked = true;

		function _fadeIn() {
			$(this).addClass('loaded').animate( { opacity: 1 }, 'fast' );
		}
			
		

// Preload the images before and after the image we really want to prevent lag later:
		var selector = '';
		selector += '.lazy-img-' + (self.slideIndex - 1) + ':not(.loaded), ';
		selector += '.lazy-img-' + (self.slideIndex + 0) + ':not(.loaded), ';
		selector += '.lazy-img-' + (self.slideIndex + 1) + ':not(.loaded)';

		$(selector, self.$slideShow).each(function() {
			var imgSrc = $(this).attr('data-src');
			$(this).css('opacity', 0).one( 'load', _fadeIn ).one( 'error', _fadeIn ).attr( 'src', imgSrc );
			if ( this.complete ) {
				$(this).trigger('load').unbind('error');
			}
		});
		
	};
	
	this.slideComplete = function() {
		self.locked = false;
				
	};

	this.swipeStatus = function(event, phase, direction, distance) {
				//remove interstitial components on swipe
				$('#interstitial').remove();
				$('#interstitial-controls').remove();
				$('#ifad300x250-right').show();
				$('#ifad728x90-top').show();
				$('#ifadsponsor').show();
				$('.slideshow-controls.main-controls').css('display','block');
				$('.gallery-col1').css('visibility','visible');
				$('.slide-share-wrapper').css('visibility','visible');
				$('.slide-actions').css('visibility','visible');
				$('.module-related-galleries').css('margin-top','0px');
				$('.slide-images').show();
				
				//self.writeads(self.slideIndex);
				
		if ( phase =='end' ) {
			if (direction == 'right') {
				self.prev();
			}
			else if (direction == 'left') {
				self.next();
			}
		}
		
		//self.refreshomniture(self.slideIndex);
		
	};

	
	return this.init();

};

INSTYLE.Behaviors.SlideShow = function(context) {
	var duration = 400;
	INSTYLE.SlideShow = new INSTYLE.SlideShow({
		$wrapper: $('.module-gallery-slideshow', context),
		duration: duration
	});
};


})(jQuery); 