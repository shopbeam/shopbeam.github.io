if (!window.SA) {window.SA = {};}

SA.redirection_mobile = function(configuration) {

  // Retrieve the User Agent of the browser
  var agent = navigator.userAgent.toLowerCase();

  // configuration object
  var config = configuration || {};
  
  // new url for the mobile site domain 
  var mobile_host = config.mobile_url;
  var tablet_host = config.tablet_url;
  
  // protocol for the mobile site domain 
  var mobile_protocol = config.mobile_scheme ?
    config.mobile_scheme + ":" :
      document.location.protocol;

  var tablet_protocol = config.tablet_scheme ?
		    config.tablet_scheme + ":" :
		      document.location.protocol;
  
  //Check if the UA is a ME Supported one
  var regex_ios = /((iPhone\sOS|iPod\sOS))\s(4_|5_|6_|7_|8_|9_)/i;
  var regex_ipad = /(\(iPad;)/i;
  var regex_androidtablet = /Android((?!(Mobile)).)*$/i;
  var regex_an = /Android\s+(2.3|4.|5.)/i;
  var regex_bb_mobile = /(BlackBerry 9900|BB10.+Mobile)/i;
  var regex_bb = /(BlackBerry)/i;

  var tabletscreen = false;
  if (screen != null && screen.width >= 768 &&  screen.height >= 768) {
	  tabletscreen = true;
  }
  if (tabletscreen && (agent.match(regex_ipad) || agent.match(regex_androidtablet))) {
	  if (!config.tablet_disable) {
	     document.location.href = tablet_protocol + "//" + tablet_host;	  
	  }
  }
  else if (agent.match(regex_ios) || agent.match(regex_an) || agent.match(regex_bb_mobile)) {
	  if (!config.mobile_disable) {
         document.location.href = mobile_protocol + "//" + mobile_host;
	  }
  } else if (agent.match(regex_bb)) {
    var selector = '.bb.html';

    // A cookie called "bb_disabled" is applied to force full-site view on Blackberry
    // Also don't redirect if "bb" selector is already there – avoids infinite redirecting
    if (!config.mobile_disable && document.cookie && document.cookie.indexOf('bb_disabled') == -1 && (document.location.pathname).indexOf(selector) == -1) {
      var path = (document.location.pathname != '/' && document.location.pathname != localprefix + '/') ? document.location.pathname : localprefix + '/index.html';
      var url = document.location.protocol + '//' + document.location.host + (path).replace(/\.html$/gi, selector);
      document.location.href = url;
    }

  }
};  