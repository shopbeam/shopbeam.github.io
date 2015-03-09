/* Mobile Redirect
*     Taken from old site, please re do this. Thanks - Patty
*/
(function(){
  
  // get redirector to work in development
  var tmp = /^(www\.)?([\w\.]+)?(refinery29|rf29)\.(\w+)(:\d+)?$/.exec(window.location.host.toLowerCase()),
      
      // sub domain
      sub = tmp[2],
      
      // domain
      dom = tmp[3],

      // top level domain
      tld = tmp[4],
      
      // cookie domain for mobile_referrer cookie
      cookie_domain = dom+'.'+tld,
      
      // domain for mobile redirect
      mobile_domain = 'm.'+(sub ? sub : '')+cookie_domain,
      
      // ignore direct traffic referrers
      r29p = new RegExp('^(https?:\/\/)((www|m|touch)\.)'+sub+dom+'\.'+tld, 'i'),
      
      // validate referrer before overriding
      r29v = function(d){
        return !!(d && String(d).length && !String(d).match(r29p));
      };

  // quirksmode.org: JavaScript - Cookies
  // http://www.quirksmode.org/js/cookies.html
  
  var cookie_create = function(name, value, days){
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = '; expires='+date.toGMTString();
    }
    else {
      var expires = '';
    }
    var val = name+'='+value+expires+'; path=/; domain=.'+cookie_domain+';';
    document.cookie = val;
  },
  
  cookie_delete = function(name){
    cookie_create(name,'',-1);
  },
  
  cookie_read = function(name){
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') {
        c = c.substring(1,c.length);
      }
      if (c.indexOf(nameEQ) == 0) {
        var val = c.substring(nameEQ.length,c.length);
        return val;
      }
    }
  	return null;
  },
  
  show_mobile_link = function(){
    var show_link = function(){
      document.getElementById('mobile-link').style.display = 'block';
    }
    if (typeof window.onload != 'function') {
      window.onload = show_link;
    }
    else {
      var prev_onload = window.onload;
      window.onload = function(){
        prev_onload && prev_onload();
        show_mobile_link();
      };
    }
  };
  
  href = document.location.href.toString();
  
  // ignore mobile for thirty days
  if (href.match(/mobile=false/i)) {
    cookie_create('force_web', '1');
    show_mobile_link();
    return;
  }
  
  // URL param force mobile ver
  var force_mobile = href.match(/mobile=true/i),

      // Cookie to force web ver
      ignore_mobile = cookie_read('force_web') && cookie_read('force_web') === '1',

      // UA detection for mobile
      is_mobile = navigator.userAgent.match(/iphone|ipod|android/i);
      
      if(navigator.userAgent.match(/ipad/i)) { 
        // facebook user-agent stupidly calls iPad an iPhone
        is_mobile = '';
      }
  
  // forcing mobile on non-mobile browser or mobile browser and not forcing desktop
  if (force_mobile || (is_mobile && !ignore_mobile)) {
 
    force_mobile && cookie_delete('force_web');
   
    
    // if we have valid referrer, write referrer cookie
    if (r29v(document.referrer)) {
      cookie_create('mobile_referrer', document.referrer, 1);
    }
   
    // redirect
    var mobile_location = 'http://'+mobile_domain+location.pathname.replace(/^(.*)\/slideshow/, '$1') + '?' + location.search.slice(1);
    window.location = mobile_location;
    return;
  }
  
  // show mobile link if we didn't redirect
  is_mobile && show_mobile_link();
  
})();