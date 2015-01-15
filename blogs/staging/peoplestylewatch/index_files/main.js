//	RED CARPET 2014
//	initialize global variables
var sponsoredPost = false,
	peopleTV = false,
	adMarketplace = false;

//	initialize recirc feeds; used on Main and Category pages
var initializeNewswireFeed = function() {
	var recircArray = {
		'recircs' : [
			{
				'id'		: 'recirc1',
				'feed' 		: [
					{
						'name' 		: 'StyleList',
						'json' 		: 'http://img2-short.timeinc.net/people/static/json/stylelist/feed.js',
						'site' 		: 'http://www.stylelist.com',
						'image' 	: 'http://img2.timeinc.net/people/static/i/misc/partners/stylelist.png',
						'display'	: 5
					}
				]
			},{
				'id'		: 'recirc2',
				'feed' 		: [
					{
						'name'  	: 'Huffington Post',
						'json' 		: 'http://img2-short.timeinc.net/people/static/json/huffingtonpost/feed.js',
						'site' 		: 'http://www.huffingtonpost.com/entertainment/',
						'image' 	: 'http://img2.timeinc.net/people/static/i/photos/logoHuffingtonPost3.gif',
						'display'	: 5
					}
				]
			},{
				'id'		: 'recirc3',
				'feed' 		: [
					{
						'name'  	: 'Celebrity-Babies.com',
						'json' 		: 'http://img2-short.timeinc.net/people/static/json/celebrity_babies/feed.js',
						'site' 		: 'http://celebritybabies.people.com/',
						'image' 	: 'http://www.people.com/people/static/i/news/logoCBB.gif',
						'display'	: 5
					}
				]
			}
		]
	};
	pushToMasterArray(recircArray);
};
initializeNewswireFeed();

// global package function
PEOPLE.Package = {
	init : function() {
		if ($('#timestamp').length > 0) { PEOPLE.addtodaysdate('timestamp'); };
	}
};
tii_callFunctionOnWindowLoad(PEOPLE.Package.init);

// fixes package galleries from SW
$('head link').each(function(){
	if ($(this).attr('href').match(/stylewatch\/gallery.css/)){
		$(this).remove();
	};
});

$(function(){
	if ($('#photos.gallery').hasClass('sw')) {
		$('#photos.gallery').removeClass('sw');
	};
});

//	function to initialize slider functionality
var initializeSlider = function() {
	var slideArray = [],
		toutRow = document.getElementById("flyout-module"),
		toutRowDIVs = toutRow.getElementsByTagName("div"),
		i = -1,
		LIs;
	for (; ++i < toutRowDIVs.length;) {
		if (toutRowDIVs[i].className.indexOf("flyout-row")>-1) {
			toutRowDIVs[i].id = "flyout-row" + i;
			LIs = toutRowDIVs[i].getElementsByTagName("ul")[0].getElementsByTagName("li");
			if (LIs.length > 5) {
				slideArray.push({
					"parent"	:	toutRowDIVs[i].id,
					"display"	:	5,
					"toutWidth"	:	158
				});
			}
		}
	}
	i = -1;
	for (; ++i < slideArray.length;) {
		if (document.getElementById(slideArray[i].parent)) {
			var p = document.getElementById(slideArray[i].parent),
				slider = p.getElementsByTagName("ul")[0],
				c = -1,
				nav = '';
			slider.touts = 0;
			for (; ++c < slider.childNodes.length;) {
				slider.touts = (slider.childNodes[c].nodeType === 1) ? slider.touts + 1 : slider.touts;
			}
			if (slider.touts > slideArray[i].display) {
				slider.id = "slider" + i;
				slider.nav = "nav" + i;
				slider.slideAmount = (slideArray[i].display - 1) * slideArray[i].toutWidth; // remove the - 1 to slide by original amount
				slider.maxLeft = ((slider.touts * slideArray[i].toutWidth) - (slideArray[i].display * slideArray[i].toutWidth)) * -1;
				nav +=  "<ul id=\"" + slider.nav + "\" class=\"pagination\">";
				nav += "<li class=\"previous\"><a href=\"javascript:linkTrack('RC_FLYOUT_PREVIOUS','Row "+(i+1)+"');Slide('" + slider.id + "',{maxLeft:" + slider.maxLeft + "}).slidePrev(" + slider.slideAmount + "," + slideArray[i].toutWidth + "," + slideArray[i].display + ");\">Previous</a></li>";
				nav += "<li class=\"next\"><a href=\"javascript:linkTrack('RC_FLYOUT_NEXT','Row "+(i+1)+"');Slide('" + slider.id + "',{maxLeft:" + slider.maxLeft + "}).slideNext(" + slider.slideAmount + "," + slideArray[i].toutWidth + "," + slideArray[i].display + ");\">Next</a></li>";
				nav += "</ul>\n";
				p.className = p.className + " sliding";
				p.innerHTML = p.innerHTML + nav;
				var newSlider = Slide(slider.id);
				Slide(slider.id,{maxLeft:slider.maxLeft}).checkNav();
			}
		}
	}		
};


// Slider
var sliderInUse = [],
	Slide = function(objId, options) {
		this.obj = document.getElementById(objId);
		this.duration = 1;
		this.curleft = parseInt(this.obj.offsetLeft,10);
		if (typeof options !== 'undefined') {this.options = options;} else {this.options = {};}
		if (this.options.duration) {this.duration = this.options.duration;}
		this.slidePrev = function(n,t,d) {
			var prevLI = parseInt(Math.abs(this.curleft / t), 10);
			for (s = 0; s <= d; s++) {
				if (prevLI >= 0) {
					prevLI--;
				}
			}
			this.newleft = (this.curleft + n >= 0) ? 0 : this.curleft + n;
			if(sliderInUse[objId] !== true) {
				this.slide();
			}
		};
		this.slideNext = function(n,t,d) {
			var nextLI = parseInt(Math.abs(this.curleft / t), 10);
			for (s = 0; s <= d; s++) {
				nextLI++;
			}
			this.newleft = (this.curleft + (n * -1) <= this.options.maxLeft) ? (this.options.maxLeft) : (this.curleft + (n * -1));
			if (sliderInUse[objId] !== true) {
				this.slide();
			}
		};
		this.checkNav = function() {
			this.nav = document.getElementById(objId.replace(/slider/,"nav"));
			this.navPrev = this.nav.getElementsByTagName("li")[0];
			this.navNext = this.nav.getElementsByTagName("li")[1];
			if (this.Math.round(curleft) === 0) {
				this.navPrev.className = this.navPrev.className + " disabled";
				this.navPrev.childNodes[0].title = "No Previous Item";
			} else {
				this.navPrev.className = this.navPrev.className.replace(/ disabled/,"");
				this.navPrev.childNodes[0].title = "Previous Item";
			}
			if (this.Math.round(curleft) === this.options.maxLeft) {
				this.navNext.className = this.navNext.className + " disabled";
				this.navNext.childNodes[0].title = "No Next Item";
			} else {
				this.navNext.className = this.navNext.className.replace(/ disabled/,"");
				this.navNext.childNodes[0].title = "Next Item";
			}
		};
		this.slide = function() {
			sliderInUse[objId] = true;
			var frames = 30 * duration;	// 30 fps
			var tIncrement = (duration*1000) / frames;
				tIncrement = Math.round(tIncrement);
			var sIncrement = (this.curleft-this.newleft) / frames;
			var frameSizes = [];
			var i=-1;
			for (; ++i < frames;) {
				if(i < frames/2) {
					frameSizes[i] = (sIncrement * (i/frames))*4;
				} else {
					frameSizes[i] = (sIncrement * (1-(i/frames)))*4;
				}
			}
			i = -1;
			for (; ++i < frames;) {
				this.curleft = this.curleft - frameSizes[i];
				window.setTimeout("document.getElementById('"+objId+"').style.left='"+Math.round(this.curleft)+"px';",tIncrement * i);
				if (i === frames-1) {
					window.setTimeout("this.checkNav();",1000);
				}
			}
			window.setTimeout("delete(sliderInUse['"+objId+"']);",tIncrement * (i-2));
			if (this.options.onComplete) {window.setTimeout(this.options.onComplete, tIncrement * (i-2));}
			return tIncrement * i;
		};
		return this;
	};



/* ---------------------------- TWEET TICKER  ---------------------------- */

PEOPLE.addtwitter = function() {
    
	if(!($('body').hasClass('home'))){return;}

	// maybe it is, maybe it isn't...
	PEOPLE.Twitter = PEOPLE.Twitter || {};

	var display,
		height,
		show = false,
		sponsorspeed = 12000,
		tweetspeed = 8000,
		url = false,
		formatlinks = function(str) { // humbly borrowed from http://tutorialzine.com/2009/10/jquery-twitter-ticker/...  AWESOME!
			str = ' '+str;
			str = str.replace(/((ftp|https?):\/\/([-\w\.]+)+(:\d+)?(\/([\w/_\.]*(\?\S+)?)?)?)/gm,'<a href="$1" target="_blank">$1</a>');
			str = str.replace(/([^\w])\@([\w\-]+)/gm,'$1@<a href="http://twitter.com/$2" target="_blank">$2</a>');
			str = str.replace(/([^\w])\#([\w\-]+)/gm,'$1<a href="http://twitter.com/search?q=%23$2" target="_blank">#$2</a>');
			return str;
		},
		removezero = function(v) { // utility to remove 0 from 01-09
			if (Number(v) < 10) {v = String(v).replace(/0/,'');} return v;
		},
		randomize = function() { // randomize order
			return (Math.round(Math.random())-0.5);
		},
		buildtimestamp = function(obj) { // from 'Wed Aug 13 00:52:59 +0000 2008' to '9:38 PM MAY 27th'
			var d, t, hour, minutes, ampm, mon, day, s;
				d = obj.split(' ');
				t = d[3].split(':');
				hour = (String(t[0]) === '00') ? '12' : removezero(t[0]);
				if (Number(hour) > 12) {hour = Number(hour) - 12;}
				minutes = String(t[1]);
				ampm = (Number(hour) > 12) ? 'PM' : 'AM';
				mon = String(d[1]).toUpperCase();
				day = Number(d[2]);
				s = 'th';
				if (day === 1 || day === 21 || day === 31) {s = 'st';}
				if (day === 2 || day === 22) {s = 'nd';}
				if (day === 3 || day === 23) {s = 'rd';}
			return hour+':'+minutes+' '+ampm+' '+mon+' '+day+s;
		},
		buildtweets = function(obj) { // build OL of tweets
		if (!obj || obj.length === 0) {return false;}
		var c, h, text, screen_name, name, profile_image_url, id, created_at, source, timestamp, tweets = 0, i = -1, len = obj.length;
		var url = String(location.href);
		c = (obj.length <= display) ? obj.length : display;
		h = '<div class="tweets" style="height:'+(c * height)+'px;">';
			h += '<ol id="celebtweets" class="hfeed">';
			for (; ++i < len; ) {
			if (obj[i].text !== '') { // make sure tweet has content
				text = formatlinks(obj[i].text); // format all the links, grab all tweet content
				screen_name = obj[i].screen_name;
				name = obj[i].name;
				profile_image_url = obj[i].profile_image_url;
				current_tweetid = obj[i].id;
				source = obj[i].source;
				h += '<li id= "tweet-'+i+'" class="hentry">';
				h += '<a class="profile-pic" target="_blank" href="http://twitter.com/'+screen_name+'"><img alt="'+name+'" src="'+profile_image_url+'" height="48" width="48"></a>';
				h += '<span class="entry-content">';  
					h += '<span class="author"><span class="fn">'+name+'</span> <a class="url" target="_blank" href="http://twitter.com/'+screen_name+'">@'+screen_name+'</a></span> ';
					h += '<span class="entry-title">'+text+'</span>';
					h += '<span class="entrytools">';
					h += '	<p class="reply"><a href="https://twitter.com/intent/tweet?in_reply_to=' + current_tweetid + '&via=peoplemag&related=peoplemag,stylewatchmag,peoplepets,cbbvips">Reply</a></p>';
					h += '	<p class="retweet"><a href="https://twitter.com/intent/retweet?tweet_id=' + current_tweetid + '">Retweet</a></p>';
					h += '	<p class="favorite"><a href="https://twitter.com/intent/favorite?tweet_id=' + current_tweetid + '">Favorite</a></p>';
					h += '</span>';
				h += '</span>';
				h += '</li>';
				tweets++; // make sure we get at least one tweet or don't write into page
			}
			}
			h += '</ol>';
		h += '</div>';
		if (tweets > 0) {
			show = true;
			return h;
		}
		},
		buildsponsor = function(obj) { // build OL of sponsors
            if (!obj || obj.length === 0) {return false;}

            var c, h, text, screen_name, name, profile_image_url, id, ads = 0, i = -1, len = obj.length;
            var url = String(location.href);

			/*
            if (d.match(/homepage-custom/)) {
                $('#twitterfeed').addClass('sponsored');
            }
			*/

            c = (obj.length <= display) ? obj.length : display;
            h = '<div id="twitterfeed-sponsor" class="sponsor">';
            h += '<p class="title">From Our Sponsors</p>';
            h += '<div class="tweets">';
            h += '<ol id="sponsortweets" class="hfeed">';
            obj.sort(randomize); // randomize order of sponsor tweets
            for (; ++i < obj.length; ) {
                if (obj[i].text !== '') {
                    text = formatlinks(obj[i].text);
                    screen_name = obj[i].screen_name;
                    name = obj[i].name;
                    profile_image_url = obj[i].profile_image_url;
                    current_tweetid = obj[i].id;
                    h += '<li id= "tweet-'+i+'" class="hentry">';
					h += 	'<a class="profile-pic" target="_blank" href="http://twitter.com/'+screen_name+'" onclick="omniTrackEv(\'twitter-sponsor-RC-pic\');"><img alt="'+name+'" src="'+profile_image_url+'" height="48" width="48"></a>';
					h += 	'<span class="entry-content">';
					h += 		'<span class="author"><span class="fn">'+name+'</span> <a class="url" target="_blank" href="http://twitter.com/'+screen_name+'" onclick="omniTrackEv(\'twitter-sponsor-RC-follow\');"><b>FOLLOW</b></a></span> ';
					h += 		'<span class="entry-title">'+text+'</span>';
					h += 		'<span class="entrytools">';
					h += 			'	<p class="reply"><a onclick="omniTrackEv(\'twitter-sponsor-RC-reply\');" href="https://twitter.com/intent/tweet?in_reply_to=' + current_tweetid + '&related=peoplemag,stylewatchmag,peoplepets,cbbvips">Reply</a></p>';
					h += 			'	<p class="retweet"><a onclick="omniTrackEv(\'twitter-sponsor-RC-retweet\');" href="https://twitter.com/intent/retweet?tweet_id=' + current_tweetid + '">Retweet</a></p>';
					h += 			'	<p class="favorite"><a onclick="omniTrackEv(\'twitter-sponsor-RC-favorite\');" href="https://twitter.com/intent/favorite?tweet_id=' + current_tweetid + '">Favorite</a></p>';
					h += 		'</span>';
                    h += 	'</span>'; // closes span.entry-content
                    h += '</li>';
                    ads++;
                }
            }
            h += '</ol>';
            h += '</div>';
            h += '</div>';
            if (ads > 0) {
                return h;
            }

		},
		tracking = function() { 
		};
	// public functions
	PEOPLE.Twitter.cycletweets = function() { // moves last tweet to top
		$('#celebtweets').find('li:last').css('display','none').prependTo($('#celebtweets')).animate({'height':'toggle','opacity':'toggle'},800);
	};
	PEOPLE.Twitter.cyclesponsors = function() { // moves last tweet to top
		$('#sponsortweets').find('li:last').css('display','none').prependTo($('#sponsortweets')).animate({'height':'toggle','opacity':'toggle'},800);
	};
	PEOPLE.Twitter.create = function(obj) { // called by feed js
		if (!obj || obj.tweets.length === 0) {return false;} // make sure we got a file back
		var show = 'block', // used to hide/show LIs initially
			screen_name = obj.tweets[0].screen_name,
			name = obj.tweets[0].name,
			profile_image_url = obj.tweets[0].profile_image_url,
			id = obj.tweets[0].id,
			headline = (obj.headline === null) ? '' : obj.headline,
			h = '',
			url = String(location.href);

		var tweethash = '';
	
		if ($('body#rcgoldenglobes2014').length){
			tweethash = 'PeopleGlobes';
		}
		else if ($('body#rcsag2014').length){
			tweethash = 'PeopleSAG';
		}
		else if  ($('body#rcgrammys2014').length){
			tweethash = 'PeopleGrammys';
		}
		else if 
		 ($('body#rcacademy2014').length){
			tweethash = 'PeopleOscars';
		}
		else if ($('body#rcemmys2014').length){
			tweethash = 'PeopleEmmys';
		}
		else if ($('body#rcmore2014').length){
			//tweethash = 'PeopleGlobes';
		}

		h += '<div id="twitterfeed"><h3>Tweet Ticker</h3>';
		h += '<div class="celeb">';
		h += '<p class="title">'+headline+'</p>';
		
		// Default tweet button from Twitter
		h += '<a onclick="omniTrackEv(\'twitter-sponsor-RC-tweetlink\');" href="https://twitter.com/intent/tweet?button_hashtag='+tweethash+'&text=%40peoplemag" class="twitter-hashtag-button" data-size="large">#'+tweethash+'</a>';
		
		// Custom button (not using Twitter API):
		//h += '<a class="custom-twitter-button" onclick="omniTrackEv(\'twitter-sponsor-RC-tweetlink\');" href="https://twitter.com/intent/tweet?button_hashtag='+tweethash+'&text=%40peoplemag"><em></em> <span class="tweet-label">Tweet #'+tweethash+'</span></a>';
		
		
		h += '<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>';
		h += buildtweets(obj.tweets);
		h += '<p class="more"><a target="_blank" href="https://twitter.com/intent/user?screen_name=peoplemag"><span>+</span> Follow @PEOPLEMAG</a></p>';
		h += '</div>';
		h += '</div>';
		
        if (obj.ads !== null && obj.ads.length > 0) {
            h += buildsponsor(obj.ads);
        }		
		
		if (show) { // if we got at least one tweet...
			$('#rightColumnThird').before(h)
			$('#twitterfeed').slideDown('slow').addClass('active');

				if (obj.tweets.length > display) { // if there are more tweets than the display count initiate cycling
					setInterval(PEOPLE.Twitter.cycletweets,tweetspeed);
					if ($('#sponsortweets').find('li').length > 1) {setInterval(PEOPLE.Twitter.cyclesponsors,sponsorspeed);}
				}

			tracking();
			
		}
	};
    
	display = 1;
	height = 143;

	if ($('body#rcgoldenglobes2014').length){
		//url = 'http://img2-short.timeinc.net/people/static/json/twitter/globes2013.js';
		//url = 'http://img2-short.timeinc.net/people/static/j/package/redcarpet2014/twitter-fav-globes.js';	// flat copy
	}
	else if ($('body#rcsag2014').length){
		//url = 'http://img2-short.timeinc.net/people/static/json/twitter/sag2013.js';
		//url = 'http://img2-short.timeinc.net/people/static/j/package/redcarpet2014/twitter-fav-sag.js';	// flat copy
	}
	else if  ($('body#rcgrammys2014').length){
		//url = 'http://img2-short.timeinc.net/people/static/json/twitter/grammys2013.js';
		//url = 'http://img2-short.timeinc.net/people/static/j/package/redcarpet2014/twitter-fav-grammys.js';	// flat copy
	}
	else if 
	 ($('body#rcacademy2014').length){
		//url = 'http://img2-short.timeinc.net/people/static/json/twitter/oscars2013.js';
		//url = 'http://img2-short.timeinc.net/people/static/j/package/redcarpet2014/twitter-fav-oscars.js';	// flat copy
	}
	else if  ($('body#rcemmys2014').length){
		//url = 'http://img2-short.timeinc.net/people/static/json/twitter/emmys2013.js';
		//url = 'http://img2-short.timeinc.net/people/static/j/package/redcarpet2014/twitter-fav-emmys.js';	// flat copy
	}
	else if ($('body#rcmore2014').length){
		//url = 'http://img2-short.timeinc.net/people/static/json/twitter/globes2013.js';
	}


	// let's get it started!
	if (url) {$.getScript(url);}

}; // end: addtwitter
    

// Twitter Intent Popup
PEOPLE.twitterPopup = function(e){
	var url = $(this).attr("href"),
		width = 550,
		height = 470,
		left = 0,
		top = 0,
		winHeight = screen.height,
		winWidth = screen.width;

	// Append Related Twitter Accounts to URL
	if (url.match('&related')) {
		url = url.substring(0, url.lastIndexOf('&'));
	} 
	url = url + '&related=PeopleMag,StyleWatchMag,PeoplePets,CBBvips';

	// Get center position for popup
	left = Math.round((winWidth/2) - (width/2));
	if (winHeight > height) {
		top = Math.round((winHeight/2) - (height/2));
	}

	window.open(url, 'intentPopup', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width='+width+',height='+height+',top='+top+', left='+left);

	e.returnValue = false;
	e.preventDefault && e.preventDefault();
};
// end Twitter Intent Popup


// Launch popups for share/follow bars in new layout
function socialPopups(){
    // FB share
    $('ul.social li.facebook a').each(function() {
        $(this).click(function() {
            postToFacebook($(this).attr('href').split('=')[1]);
            PEOPLE.Omniture.recordFacebookShare();
            return false;
        });
    });

    // Twitter share
    $('ul.social li.twitter a').each(function() {
        $(this).bind('click',PEOPLE.twitterPopup);
        $(this).click(function() {
            PEOPLE.Omniture.recordTwitterShare();
            return false;
        });
    });

} // end: socialPopups


$(document).ready(function() {

	if ( $('body').hasClass('home') ) {
		initializeSlider();
	}
	
	if ($('body').hasClass('home')) {

		// displays a "hide" link only for iPad/iPhone users
		if ((navigator.userAgent.match('iPhone')) || (navigator.userAgent.match('iPad')) || (navigator.userAgent.match('iPod')) || (location.search.match('ipad=true'))) {
			$('#flyout-module').find('div.flyout-row').prepend('<div class="close-flyout">Hide</div>');
	
			$('.close-flyout').click(function(){
				$('#flyout-module').find('div.category-row').removeClass('show-flyout').find('div.flyout-row').css({width:'140px'});
			});
		}
		// otherwise hide/show on hover
		$('#flyout-module').find('div.category-row').hover(
			function(){
				var n = $(this).prev('div').length+1;
				linkTrack('RC_FLYOUT_ROLL','OVER Row '+n);
				$(this).addClass('show-flyout').find('div.flyout-row').animate({width:'790px'},{queue:false,duration:500});
			}, 
			function () {
				$(this).removeClass('show-flyout').find('div.flyout-row').css({width:'140px'});
			}
		);

		// add "From Our Partners" header to left col recirc
		$('#leftColumn #recirc2').before('<h6 class="recirc-header">From Our Partner</h6>');
		
		// Add special class for silhouette tout in left col
		$('body.home #leftTop .tout').eq(0).addClass('silo');

		socialPopups();
		$('#fromourpartners #partnertouts').append('<div class="clear"></div>');

	} // end: if body.home

	//PEOPLE.addtwitter();

});
