var reloadAdCallback = function() {};


var _loadAd = function(el, zone, ord, tile, channel) {
	// Assemble query string parameters for specific iframe
	if (el.id == 'adtop') {
		url = '/sites/all/themes/peopleenespanol/includes/ads/iframe_ad_728_90.html?';
	} else if (el.id == 'ad170') {	
	    url = '/sites/all/themes/peopleenespanol/includes/ads/iframe_ad_170_30.html?';
	} else {
		url = '/sites/all/themes/peopleenespanol/includes/ads/iframe_ad_300_250.html?';
	}
	el.src = url.concat([
		['zone', zone].join('='),
		['ord',	ord].join('='),
		['width',	el.width].join('='),
		['height',	el.height].join('='),
		['tile', tile].join('='),
		['channel', channel].join('='),
		['category', 'expandables'].join('=')
	].join('&'));
};


/**
* Refreshes all of the configured iframe ads
*
* @method reloadAd
* @param {String} zone TII advertising zone
*/
var reloadAd = function(zone) {

	// Load config
	var iframes = reloadAd.config.iframes;
	
	// Create unique random seed
	var ord = (new Date()).getTime() + Math.ceil(Math.random() * Math.pow(10, 16));

	// We'll load the first ad separately to set the ord value
	var firstEl = document.getElementById(iframes[0]);

	if (firstEl !== null) {
	  
	  // When the first ad loads, we can load the rest
	  // IE6 requires us to overload an existing method to
	  // add a dynamic callback
	  reloadAdCallback = function(iframes, zone, ord, channel) {
	    return function() {
      	for (var i = 1; i < iframes.length; i++) {
      	  var el = document.getElementById(iframes[i]);
		  //var url = document.getElementById(url[i]);
      	  if (el !== null) {
          	_loadAd(el, zone, ord, i + 1, channel);
      	  }
      	}
	    };
	  }(iframes, zone, ord, channel);
  	
  	_loadAd(firstEl, zone, ord, 1, channel);
	}
};

/**
* Configuration object for the reloadAd method
*/
reloadAd.config = {
	// Array of ad iframe elements, first element is important as it sets the 
	// ord before triggering load of other elements
	iframes: ['adtop', 'ad170', 'ad300']
};

// aliasing a variation of the function..not necessary since aliasing is done on the container page code.
// var reloadAds = reloadAd;
