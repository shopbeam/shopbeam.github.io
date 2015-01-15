



var onswipe = {
  host: 'http://synapse.onswipe.com',
  canonicalHost: '',
  paramsWhitelist: [],
  usernameRegex: /\?usr=([A-Za-z0-9\-]+)/,
  synapseElement: 'script#onswipe_synapse',
  redirect: false,
  supported: false,
  standalone: false,
  devicesSupported: [
    'ipad',
    'ipad_ios5',
    'kindle_fire_4x_desktop',
    'kindle_fire_4x_mobile',
    'kindle_fire_2x_desktop',
    'kindle_fire_2x_mobile',
    'iphone',
    'iphone_ios5',
    'nexus_chrome',
    'android4_tablet',
    'android4_phone'
  ]
};

onswipe.createIframe = function (url) {
  var iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.name = 'onswipe_synapse_iframe';
  iframe.style.display = 'none';
  return iframe;
};

onswipe.getUsername = function() {
  // dynamically replace username by the server before
  // sending compiled script
  var username = 'shefinds';

  if (username !== 'shefinds' && username !== '') {
    return username;
  }

  if (window.ONSWIPE_USR) {
    return window.ONSWIPE_USR;
  }

  var el = document.querySelector(onswipe.synapseElement);

  if (!el || !el.src) {
    return false;
  }

  var match = el.src.match(onswipe.usernameRegex);

  if (!match || match.length < 2) {
    return false;
  }

  return match[1];
};

// returns all query params that are whitelsited in paramsWhitelist
onswipe.whitelistedParams = function() {
  if (!location.search || !onswipe.paramsWhitelist.length) {
    return false;
  }

  var qstring = location.search.substring(1).split('&');
  var params = [];
  for (var i = 0; i < qstring.length; i++) {
    if (qstring[i].indexOf('utm_') === 0 || onswipe.paramsWhitelist.indexOf(decodeURIComponent(params[i].split('=')[0])) >= 0) {
      params.push(qstring[i]);
    }
  }

  return params.join('&');
};


onswipe.handleMessage = function (m) {
  
  try {
    if (m.origin == onswipe.host) {
      // check that the data actually contains a redirect instruction
      if (m.data && ~m.data.indexOf('redirect: http://')) {
        // great - let's extract out the URL by removing the prefix
        var redirect = m.data.replace('redirect: ', '');

        // get the campaign parameters, and add them to the reader url before redirecting.
        var campaignParams = onswipe.whitelistedParams();
        if (campaignParams && campaignParams.length) {
          if (redirect.indexOf('?') < 0) {
            redirect += '?' + campaignParams;
          } else {
            redirect += '&' + campaignParams;
          }
        }

        if (redirect.indexOf('?') < 0) redirect += '?'
        else redirect += '&'
        redirect += 'origin=' + encodeURIComponent(window.location);
        redirect += '&oswts=' + Date.now();
        if (top === self) {
          // no frame - redirect current window
          window.location = redirect;
        } else {
          // has frame - redirect the parent
          self.parent.location = redirect;
        }
      }
    }
  } catch(e) {
    if (console) {
      console.warn('Synapse: not redirecting due to error: ' + e);
    }
  }
};


onswipe.determineSize = function () {
  var size = 'large';
  var ua = navigator.userAgent.toLowerCase();

  if (~ua.indexOf('ipad')) {
    size = 'large';
  } else if (~ua.indexOf('silk-accelerated') || ~ua.indexOf('kindle')) {
    size = 'medium';
  } else if (~ua.indexOf('android')) {
    if (~ua.indexOf('nexus 7') && ~ua.indexOf('chrome')) {
      size = 'medium';
    } else if (~ua.indexOf('android 4')) {
      if (~ua.indexOf('mobile')) {
        size = 'small';
      } else {
        size = 'large';
      }
    }
  } else if (~ua.indexOf('iphone')) {
    size = 'small';
  }

  return size;
};

onswipe.determineDevice = function () {
  var device = 'unknown';
  var ua = navigator.userAgent.toLowerCase();

  var is_android4 = ~ua.indexOf('android 4');

  if (~ua.indexOf('ipad')) {
    device = 'ipad';
  } else if (~ua.indexOf('silk-accelerated') || ~ua.indexOf('kindle')) {
    device = 'kindle_fire';
    device += is_android4 ? '_4x' : '_2x';
    var is_desktop = (~ua.indexOf('linux; u;') && !~ua.indexOf('android')) || ~ua.indexOf('macintosh; u;');
    device += is_desktop ? '_desktop' : '_mobile';
  } else if (~ua.indexOf('android')) {
    if (~ua.indexOf('nexus 7') && ~ua.indexOf('chrome')) {
      device = 'nexus_chrome';
    } else if (is_android4) {
      if (~ua.indexOf('mobile')) {
        device = 'android4_phone';
      } else {
        device = 'android4_tablet';
      }
    }
  } else if (~ua.indexOf('iphone')) {
    device = 'iphone';
  }

  var is_ios5 = ua.match(/OS 5(_\d+)+ like Mac OS X/i);
  if (device != 'unknown' && is_ios5) {
    device = device + '_ios5';
  }

  return device;
};

onswipe.determineiOSMajorVersion = function () {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
    var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
    var majorVersion = parseInt(v[1], 10);
    if (!isNaN(majorVersion)) {
      return majorVersion;
    }
  }
  return 1000;
};

onswipe.registerMetric = function(metric){

  try {
    var url = 'https://metrics-api.librato.com/v1/metrics';
    var payload = {
      "gauges": metric
    };

    var data = JSON.stringify(payload);

    var xhr = false;

    if (window.ActiveXObject){
      xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }else{
      xhr = new XMLHttpRequest();
    }

    if(xhr) {

      xhr.onreadystatechange = function(){
        if (xhr.readyState === 4) {
//          console.log(xhr.responseText);
        }
      };

      xhr.open("POST", url, true);
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.setRequestHeader('Content-type', 'application/json');
      // don't set the below header, its unsafe and web browers set it
      // xhr.setRequestHeader('Connection', 'close');
      xhr.setRequestHeader('Authorization','Basic ' + btoa('operations@onswipe.com' + ':' + '6b456e9bda21a11b70087bebdb6143029116ed56678f3d9aef3a812ab7f8f137'));

      xhr.send(data);
    }

  } catch (e) {
    console.log(e.message);
  }
};

onswipe.getUrl = function(){

  var url = location.href;

  if (onswipe.canonicalHost) {
    url = url.replace(location.host, onswipe.canonicalHost);
  } else {

    try {
      // in some cases, the dom will not be ready at this point.
      // so document.querySelector wont work in those cases.
      var canonical = document.querySelector('link[rel=canonical]');
      if (canonical && ~canonical.href.indexOf('http') && ~canonical.href.indexOf(location.pathname)) {
        url = canonical.href;
      } else {
        onswipe.registerMetric([{
          name: 'synapse-bad-canonical-link-count',
          source: location.host,
          value: 1
        }]);
      }
    } catch (e) {
      onswipe.registerMetric([{
        name: 'synapse-canonical-link-exception-count',
        source: location.host,
        value: 1
      }]);
    }

  }

  return url;

};


// when navigator.standalone is true,
// this means it's in a Home Screen wrapper
if (navigator && navigator.standalone) {
  onswipe.standalone = true;
}

// catches exceptions in old browsers that don't support Array.prototype.indexOf
try {
  if (~document.URL.indexOf('onswipe_redirect=no')) {
    onswipe.redirect = 'no';
  } else if (~document.URL.indexOf('onswipe_redirect=never')) {
    onswipe.redirect = 'never';
  } else if (~document.URL.indexOf('onswipe_redirect=session')) {
    onswipe.redirect = 'session';
  }

  onswipe.device = onswipe.determineDevice();

  if (~onswipe.devicesSupported.indexOf(onswipe.device)) {
    onswipe.supported = true;
  }

  if (onswipe.determineiOSMajorVersion() < 5) {
    onswipe.supported = false;
  }

  onswipe.usr = onswipe.getUsername();
} catch(e) {
  /*if (console) {
    console.warn('Synapse: Browser not supported for redirection');
  }*/
}

if (onswipe.supported && !onswipe.redirect) {
  if (document.referrer) {
    onswipe.referrer = document.referrer;
  } else {
    onswipe.referrer = '';
  }

  var url = onswipe.getUrl();

  onswipe.frameUrl = onswipe.host + '/v2/frame' +
    '?usr=' + onswipe.usr +
    '&url=' + encodeURIComponent(url) +
    '&device=' + onswipe.device +
    '&ref=' + encodeURIComponent(onswipe.referrer);

  onswipe.iframe = onswipe.createIframe(onswipe.frameUrl);
  document.head.appendChild(onswipe.iframe);
  window.addEventListener('message', onswipe.handleMessage, false);
}

// process opt-out request
// the user will get the opt-out cookie for the pub's specified opt-out period
if (onswipe.redirect == 'never') {
  onswipe.frameUrl = onswipe.host + '/v2/out?usr=' + onswipe.usr;
  onswipe.iframe = onswipe.createIframe(onswipe.frameUrl);
  document.head.appendChild(onswipe.iframe);
}

// process opt-out request
// the user will get the opt-out cookie for this session only
if (onswipe.redirect == 'session') {
  onswipe.frameUrl = onswipe.host + '/v2/out?usr=' + onswipe.usr + '&session=true';
  onswipe.iframe = onswipe.createIframe(onswipe.frameUrl);
  document.head.appendChild(onswipe.iframe);
}
