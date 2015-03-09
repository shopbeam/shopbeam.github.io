// new youtube
var _sdi = _sdi || {};
_sdi.addEventHandler = window.addEventListener ? function(el, type, fn) {
  el.addEventListener(type, fn, !1)
} : function(el, type, fn) {
  el.attachEvent("on" + type, fn)
};
_sdi.notify = function(message){
  try {
    _satellite.notify(message,1);
  }
  catch(err){
    window.console && window.console.log && window.console.log('SATELLITE: '+message);
  }
}
_sdi.addEventHandler(window, 'message', function(r) {
  var d = {};
  if (r.origin.match(/youtube\.com/) && typeof JSON != 'undefined') {
    d = JSON.parse(r.data);
    var videos = _sdi.yt.videos,
      v;
    // video info
    if(d.event=='infoDelivery'){
      var v = {}, id;
      if(d.info.videoData){
        id = d.info.videoData.video_id;
        v = videos[id] || {};
        v.info = d.info;
        v.id = d.id;
        videos[id] = v;
      }
      else {
        for(var vs in videos){
          var vid = videos[vs];
          if(vid.id == d.id){
            v = vid;
          }
        }
        if(v.info){
          var sc = _sdi.yt.sc||{};
          if(Math.abs(d.info.currentTime - v.info.currentTime) > 1.5){
            if(sc.track==true){
              sc.s().Media.stop(v.info.videoData.title, v.info.currentTime);
              sc.s().Media.play(v.info.videoData.title, d.info.currentTime);
              _sdi.notify('YT: '+v.info.videoData.title+': seek from '+v.info.currentTime+' to '+d.info.currentTime);
            }
          }
          v.info.currentTime = d.info.currentTime;
        }
      }
    }
    if(d.event=='onStateChange'){
      for(var vs in _sdi.yt.videos){
        var vid = _sdi.yt.videos[vs];
        if(vid.id == d.id){
          v = vid;
        }
      }
      var sc = _sdi.yt.sc||{};

      // video play
      if(d.info == 1){
        // video start
        if(!v.started){

          v.started = true;
          if(sc.track==true){
            sc.s().Media.open(v.info.videoData.title, v.info.duration, 'youtube');
            sc.s().Media.play(v.info.videoData.title, v.info.currentTime);
            _sdi.notify('YT: '+v.info.videoData.title+': video start');
          }
        }
        // video resume
        else {
          if(sc.track==true){
            sc.s().Media.play(v.info.videoData.title, v.info.currentTime);
            _sdi.notify('YT: '+v.info.videoData.title+': video resume at '+v.info.currentTime);
          }
        }
        v.state = 'playing';
      }
      // video pause
      if(d.info == 2){
        
        if(sc.track==true){
          sc.s().Media.stop(v.info.videoData.title, v.info.currentTime);
        }
        _sdi.notify('YT: '+v.info.videoData.title+': video pause at '+v.info.currentTime);
        v.state = 'paused';
      }
      // video buffer
      if(d.info == 3 && v.started){
        if(sc.track==true){
          sc.s().Media.stop(v.info.videoData.title, v.info.currentTime);
        }
        _sdi.notify('YT: '+v.info.videoData.title+': video buffer/pause at '+v.info.currentTime);
        v.state = 'paused';
      }
      // video complete
      if(d.info == 0){
        if(sc.track==true){
          sc.s().Media.stop(v.info.videoData.title, v.info.currentTime);
          sc.s().Media.close(v.info.videoData.title);
        }
        _sdi.notify('YT: '+v.info.videoData.title+': video complete');
        v.state = 'completed';
      }
    }
  }
});
_sdi.loadScript = function(c, a){
  var b = document.createElement("script");
  b.type = "text/javascript";
  if(a && typeof a=='function'){
    if (b.readyState) {
      b.onreadystatechange = function() {
        if (b.readyState === "loaded" || b.readyState === "complete") {
          b.onreadystatechange = null;
          a()
        }
      }
    } else {
      b.onload = function() {
        a()
      }
    }
  }
  b.src = c;
  document.getElementsByTagName("head")[0].appendChild(b);
};

// youtube
_sdi.yt = {
  stages: {},
  players: {},
  sc: {
    track: true, // set to true if you want to use SiteCatalyst video measurement
    s: function(){
      return window.s // set to the global s object (can use s_gi with a report suite passed to it if not defined globally)
    }
  },
  init: function() {
    var scripts = document.getElementsByTagName('script'),
      api = false,
      ids = [],
      vids = _sdi.yt.videos;
    for (var i = 0; i < scripts.length; i++) {
      var script = scripts[i],
        src = script.src || '';
      if (src.match(/youtube\.com\/iframe_api/)) {
        api = true;
      }
    }
    if (api === false) {
      _sdi.notify('YT: Youtube API not loaded, loading now');
      _sdi.loadScript('//www.youtube.com/iframe_api',function(){
        _sdi.yt.ready('api');
      });
    }
    else {
      _sdi.yt.ready('api');
    }
  },
  ready: function(stage){
    _sdi.yt.stages[stage] = true;
    if(_sdi.yt.stages.dom && _sdi.yt.stages.api){
      _sdi.yt.checkIframes();
    }
  },
  checkIframes: function(){
    var vids = _sdi.yt.videos, timeout = 1000;
    jQuery('iframe[src*="youtube"][data-sdi!="true"]').each(function(idx, ifr) {
      var vid = ifr.src.match(/h?t?t?p?s?\:?\/\/www\.youtube(-nocookie)?\.com\/embed\/([\w-]{11})(?:\?.*)?/),
        id = (vid.length>2?vid[2]:'');
      if (!ifr.id) {
          ifr.id = id;
      }
      if(!ifr.src.match(/enablejsapi=1/)){
        var src = ifr.src;
        ifr.src = src + (src.indexOf('?')>-1 ? '&' : '?') + 'enablejsapi=1';
      }
      else {
        if (typeof YT != 'undefined') {
          if (typeof YT.get != 'undefined') {
            ready = true;
            vids[id] = {};
            if (!YT.get(ifr.id)) {
              _sdi.notify('YT: New Youtube iframe found!');
              _sdi.notify('YT: API for iframe ID "'+ifr.id+'" not configured, configuring now');
              vids[id].player = new YT.Player(ifr.id, {
                events: {
                  onReady: function() {},
                  onStateChange: function() {},
                  videoId: ifr.id
                }
              });
              ifr.setAttribute('data-sdi','true');
            }
            else {
              _sdi.notify('YT: New Youtube iframe found!');
              ifr.setAttribute('data-sdi','true');
              _sdi.notify('YT: API for iframe ID "'+ifr.id+'" already configured');
            }
          }
          else {
            _sdi.notify('YT: YT.get is not ready...');
            timeout = 100;
          }
        }
        else {
          _sdi.notify('YT: YT is not ready...');
          timeout = 100;
        }
      }
    });
    setTimeout(function() {
      _sdi.yt.checkIframes()
    }, timeout);
  },
  videos: {}
};
_sdi.yt.init();
jQuery(document).ready(function() {
  _sdi.yt.ready('dom');
})
