/**
 *  Global javascripts
 */

/*
 * Global document ready
 * Any functions that need to be called once the DOM is ready can be called here
 */
$(document).ready(function() {
  railAds();
  titleCaption();
  toggleTeaser();
});

/*
 *
 */
function toggleTeaser() {
  $('.bravo-schedule-page .teaser .more-text').click(function() {
    $(this).parent().find(".text-break").hide("800");
    $(this).next(".teaser-rest").show("800", function() {
      $(this).css("display", "inline");
    });
  });

  $('.bravo-schedule-page .teaser .less-text').click(function() {
    $(this).parent(".teaser-rest").hide("800");
    $(this).parents(".teaser").find(".text-break").show("800", function() {
      $(this).css("display", "inline");
    });
  });
}

/*
 * Rail Ads
 */
function railAds() {
    // ad tag that will passthru the javascript custom name=value pairs from the ad server
    if ((typeof(railAdBg) != 'undefined') && (railAdBg)) {
        // site specific custom background code.
        $('body').css({'background-image': 'url(' + railAdBg + ')', 'background-position': 'center top'});
        $('header, footer').css({'background': 'none', 'margin': '0 auto', 'width': '1000px'})
    }
    if ((typeof(railAdBgColor) != 'undefined') && (railAdBgColor)) {
        // site specific custom background color code.
        $('body').css({'background-color': '#' + railAdBgColor});
    }
    if ((typeof(railAdBgRepeat) != 'undefined') && (railAdBgRepeat)) {
        // site specific custom background repeat code.
        $('body').css({'background-repeat': railAdBgRepeat});
    }
    if ((typeof(railAdBgClickthru) != 'undefined') && (railAdBgClickthru)) {
        // site specific custom background click event code.
        $('body').click(function(e) {
            evt = e || window.event;
            if (e.target) {
                targ = e.target;
            }
            else if (e.srcElement) {
                targ = e.srcElement;
            }
            if (targ.nodeType == 3) {
                // Safari bug
                targ = targ.parentNode;
            }
            if (targ.id == $('body').attr('id')) {
                window.open(railAdBgClickthru);
            }
        });
    }

    //Remove background when ad rails are present
    if ($('body').attr('style')) {
      $('header, footer, .hero-bg').css('background','none');
      $('.hero-container').css({'position':'relative', 'background-color':'#fff', 'padding':'0 10px', 'margin':'0 auto', 'width':'980px'});
    }
}

/*
 * WYSIWYG image captions
 * adds captions to the page if the 'title' field is used within the IMCE image admin
 */
function titleCaption() {
	$('.body > p img').each(function(){
    var imgTitle = $(this).attr('title');
		$(this).after('<span class="image-caption" style="text-align: center; display: block;">'+ imgTitle +'</span>');
	});
}

/*
 *	Omniture link tracking method
 *	fires a non-page view call to Omniture to help
 *	with a/b testing
 *
 *	This is a TEMPORARY implementation
 */
function trackLink(module, linkPos, link) {
  s.linkTrackVars = "prop33,eVar33";
  s.prop33 = document.title + ":" + module + ":" + linkPos + ":" + link;
  s.eVar33 = s.prop33;
  s.tl(this, 'o', 'Tracked Link');
}

/*
 *	Omniture link tracking method - revised
 *
 */
function omnitureTrackEvent(linkPos, siteName, sectName, linkName) {
  s.linkTrackVars = "prop33,eVar33,events";
  s.linkTrackEvents="event16";
  s.events = 'event16';
  s.prop33 = linkPos + ':' + siteName + ":" + sectName + ":" + linkName;
  s.eVar33 = linkPos + ':' + siteName + ":" + sectName + ":" + linkName;
  s.tl(this,'o','Link Tracking');
}


// Everything below the "Redesign" section can be removed after Phase 1
// TODO: this is very static. utilize the title attribute across all tracked links
$(document).ready(function() {
  //
  // Redesign header and footer tracking
  //
  // primary links
  $('#nav-primary .nav-item > a').click(function() {
    omnitureTrackEvent('Header', 'Bravo', 'Primary Navigation', $(this).attr('title'));
  });
  // secondary links
  $('#menu-menu-secondary-menu a').click(function() {
    omnitureTrackEvent('Header', 'Bravo', 'Secondary Navigation', $(this).attr('title'));
  });
  // primary links: shows main promotes
  $('#nav-primary .show-dropdown .main-promote a').click(function() {
    omnitureTrackEvent('Header', 'Bravo', 'Primary Navigation - Shows Main Promote', $(this).text());
  });
  // primary links: current shows
  $('#nav-primary .show-dropdown .current-shows a').click(function() {
    omnitureTrackEvent('Header', 'Bravo', 'Primary Navigation - Current Shows', $(this).text());
  });
  // primary links: what's on tonight
  $('#nav-primary .show-dropdown .triple-promote a').click(function() {
    omnitureTrackEvent('Header', 'Bravo', 'Primary Navigation - Whats on Tonight', $(this).text());
  });
  // primary links: people main promote
  $('#nav-primary .people-dropdown .main-promote a').click(function() {
    omnitureTrackEvent('Header', 'Bravo', 'Primary Navigation - People Main Promote', $(this).text());
  });
  // primary links: people
  $('#nav-primary .people-dropdown .most-searched a').click(function() {
    omnitureTrackEvent('Header', 'Bravo', 'Primary Navigation - People', $(this).text());
  });
  // primary links: recent blog posts
  $('#nav-primary .people-dropdown .triple-promote a').click(function() {
    omnitureTrackEvent('Header', 'Bravo', 'Primary Navigation - Recent Blog Posts', $(this).text());
  });
  // primary links: video main promote
  $('#nav-primary .video-dropdown .main-promote a').click(function() {
    omnitureTrackEvent('Header', 'Bravo', 'Primary Navigation - Video Main Promote', $(this).text());
  });
  // primary links: top clips
  $('#nav-primary .video-dropdown .top-clips a').click(function() {
    omnitureTrackEvent('Header', 'Bravo', 'Primary Navigation - Top Clips', $(this).text());
  });
  // primary links: full episodes
  $('#nav-primary .video-dropdown .full-ep a').click(function() {
    omnitureTrackEvent('Header', 'Bravo', 'Primary Navigation - Full Episodes', $(this).text());
  });
  // primary links: view all links
  $('#nav-primary .view-all').click(function() {
    omnitureTrackEvent('Header', 'Bravo', 'Primary Navigation - View All', $(this).text());
  });

  // footer links: whats hot
  $('#views-whats_hot-block_1 a, #views-whats_hot-block_2 a, #views-whats_hot-block_3 a').click(function() {
    omnitureTrackEvent('Footer', 'Bravo', 'Whats Hot', $(this).text());
  });
  // footer menu: more shows
  $('#menu-menu-more-shows a').click(function() {
    omnitureTrackEvent('Footer', 'Bravo', 'More Shows', $(this).text());
  });
  // footer menu: more features
  $('#menu-menu-more-features a').click(function() {
    omnitureTrackEvent('Footer', 'Bravo', 'More Features', $(this).text());
  });
  // footer menu: people to watch
  $('#menu-menu-people-to-watch a').click(function() {
    omnitureTrackEvent('Footer', 'Bravo', 'People to Watch', $(this).text());
  });
  // footer menu: more ways to get bravo
  $('#menu-menu-more-ways-to-get-bravo a').click(function() {
    omnitureTrackEvent('Footer', 'Bravo', 'More Ways to Get Bravo', $(this).text());
  });
  // footer menu: get involved
  $('#menu-menu-get-involved a').click(function() {
    omnitureTrackEvent('Footer', 'Bravo', 'Get Involved', $(this).text());
  });


  //
  // legacy section:
  //

	// global secondary nav
	$('#sec-nav li a').click( function() {
		trackLink($(this).parent().parent().attr('class'), $(this).parent().text(), $(this).attr('href'));
	});

	// global primary nav
	$('#main-nav li a').click( function() {
		trackLink($(this).parent().parent().attr('class'), $(this).parent().text(), $(this).attr('href'));
	});

	// global footer primary nav
	$('#menu-menu-footer-nav .block-content li a').click( function() {
		trackLink('Footer Primary Nav', $(this).parent().text(), $(this).attr('href'));
	});

	// global footer secondary nav
	$('#menu-menu-footer-quick-li .block-content li a').click( function() {
		trackLink('Footer Secondary Nav', $(this).parent().text(), $(this).attr('href'));
	});

	// global 'More From Bravo'
	$('#views-more_from_bravo-block_1 .view-id-more_from_bravo li a').click( function() {
		trackLink('More From Bravo', $(this).parent().text(), $(this).attr('href'));
	});

	// hero feature
	$('#hero-front a').click( function() {
		trackLink('Hero Feature', $(this).text(), $(this).attr('href'));
	});

	// video feature
	$('#video-feature a').click( function() {
		trackLink('Video Feature', $(this).text(), $(this).attr('href'));
	});

	// gallery feature
	$('#gallery-feature a').click( function() {
		trackLink('Gallery Feature', $(this).text(), $(this).attr('href'));
	});

	// the dish
	$('#the-dish a').click( function() {
		trackLink('The Dish', $(this).text(), $(this).attr('href'));
	});

	// the schedule
	$('#whats-on a').click( function() {
		trackLink('The Schedule', $(this).text(), $(this).attr('href'));
	});

	// cast blogs
	$('#cast-blog a').click( function() {
		trackLink('Cast Blogs', $(this).text(), $(this).attr('href'));
	});

	// show header
	$('#show-header a').click( function() {
		trackLink('Show Header', $(this).text(), $(this).attr('href'));
	});

	// left rail
	$('#left-rail a').click( function() {
		trackLink('Left Rail', $(this).text(), $(this).attr('href'));
	});

	// hot topics
	$('#hot-topics a').click( function() {
		trackLink('Hot Topics', $(this).text(), $(this).attr('href'));
	});

	//  Heroes
	$('#hero-front #hero-feature a').click( function() {    //  Homepage hero
		trackLink('Hero Main Image', $(this).text(), $(this).attr('href'));
	});
	$('#show-hero #hero-feature a').click( function() {     //  Other heroes
		trackLink('Hero Main Image', $(this).text(), $(this).attr('href'));
	});

	$('dl dd.pause a#hero-pause').click( function() {
	  trackLink('Hero Pause Click', 'Hero Pause', 'Hero Pause');
	});

	rotateHeroTracking();
});


function rotateHeroTracking() {
  // Homepage Hero
	$('#hero-front .hero-feature-show-title a').click( function() {
		trackLink('Hero Show Link', $(this).text(), $(this).attr('href'));
	});
	$('#hero-front dl dt a').click( function() {
		trackLink('Hero Promote Title', $(this).text(), $(this).attr('href'));
	});
	$('#hero-front .links a').click( function() {
		trackLink('Hero Promote CTA', $(this).text(), $(this).attr('href'));
	});

	//  Other Heroes (affinity + shows + seasons)
	$('#show-hero .hero-feature-show-title a').click( function() {
		trackLink('Hero Show Link', $(this).text(), $(this).attr('href'));
	});
	$('#show-hero dl dt a').click( function() {
		trackLink('Hero Promote Title', $(this).text(), $(this).attr('href'));
	});
	$('#show-hero .links a').click( function() {
		trackLink('Hero Promote CTA', $(this).text(), $(this).attr('href'));
	});
}

/*
 *  This function sets up the tracking for the tabs of the cycle object that the hero operates on.
 *  Trouble is that the object has to be built first.  So this is called with the JS that creates it.
 */
function activateHeroTabTracking() {
  return;   //  This logic has been moved into the hero function since IE7 and FF3 have  a hard time with 2 functions bound to the click event.
  $('ul#hero-thumbs li').click( function() {
	  trackLink('Hero Thumb Click', $(this).find("span.hero-title").text(), $(this).find("span.hero-title").text());
	});
}
