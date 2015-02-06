// loop through each video and setup the listeners
var _sdi = _sdi || {};
if(_sdi.jwp){
  _sdi.tmpJwp = _sdi.jwp;
}
_sdi.jwp = {
  videos: {},
  hasVideos: true,
  checkVideos: function(){
    _sdi.jwp.hasVideos = true;
    for(var i=0; _sdi.jwp.hasVideos==true; i++){
      if(typeof jwplayer != 'undefined'){
        if(jwplayer(i) && jwplayer(i).config){
          if(!jwplayer(i).tracked){
            jwplayer(i).tracked = true;
            // play
            jwplayer(i).onPlay(function(){
              var vid = _sdi.jwp.getVideoData(this);
              if(!vid.duration || vid.duration == -1){
                vid.duration = this.getDuration();
              }
              if(vid.state != 'playing' && vid.state!='buffering'){
                vid.state = 'playing';
                if(!vid.started && vid.duration>0){
                  s.Media.open(vid.title,vid.duration,'jwplayer');
                  _satellite.notify('jwplayer: open: '+vid.title, 1);
                  vid.started=true;
                }
                if(vid.started){
                  s.Media.play(vid.title,this.getPosition());
                  _satellite.notify('jwplayer: play: '+vid.title+' at '+this.getPosition(),1);
                }
              }
            });
            // time update
            jwplayer(i).onTime(function(){
              var vid = _sdi.jwp.getVideoData(this);
              if(!vid.duration || vid.duration == -1){
                vid.duration = this.getDuration();
              }
              if(!vid.started && vid.duration){
                vid.started = true;
                s.Media.open(vid.title,vid.duration,'jwplayer');
                _satellite.notify('jwplayer: open: '+vid.title, 1);
                s.Media.play(vid.title,this.getPosition());
                _satellite.notify('jwplayer: play: '+vid.title+' at '+this.getPosition(),1);
              }
              // resume playback after a buffer
              if(vid.state=='buffering'){
                s.Media.play(vid.title,this.getPosition());
                vid.seekPosition=null;
                vid.state = 'playing';
                _satellite.notify('jwplayer: end buffer: '+vid.title+' resuming playback at '+this.getPosition(),1);
              }
            });
            // pause
            jwplayer(i).onPause(function(){
              var vid = _sdi.jwp.getVideoData(this);
              if(vid.state != 'paused' && vid.started){
                vid.state = 'paused';
                s.Media.stop(vid.title,this.getPosition());
                _satellite.notify('jwplayer: pause: '+vid.title+' at '+this.getPosition(),1);
              }
            });
            // seek
            jwplayer(i).onSeek(function(evt){
              var vid = _sdi.jwp.getVideoData(this);
              s.Media.stop(vid.title,evt.position);
              _satellite.notify('jwplayer: seek: '+vid.title+' start seek at '+evt.position,1);
              s.Media.play(vid.title,evt.offset);
              vid.seekPosition=evt.offset;
              _satellite.notify('jwplayer: seek: '+vid.title+' stop seek at '+evt.offset,1);
            });
            // buffer
            jwplayer(i).onBuffer(function(evt){
              var vid = _sdi.jwp.getVideoData(this);
              if(vid.started){
                vid.state = 'buffering';
                s.Media.stop(vid.title,vid.seekPosition||this.getPosition())
                _satellite.notify('jwplayer: buffering: '+vid.title+' paused at '+vid.seekPosition||this.getPosition(),1);
              }
            });
            // meta
            jwplayer(i).onMeta(function(data){
              var vid = _sdi.jwp.getVideoData(this,data);
            });
            // complete
            jwplayer(i).onComplete(function(data){
              var vid = _sdi.jwp.getVideoData(this);
              if(vid.state != 'complete' && vid.started){
                vid.state = 'complete';
                s.Media.stop(vid.title, vid.duration);
                s.Media.close(vid.title);
                vid.started = false;
                _satellite.notify('jwplayer: complete: '+vid.title,1);
              }
            });
          }
        }
        else {
          _sdi.jwp.hasVideos = false;
        }
      }
      else {
        _sdi.jwp.hasVideos = false;
      }
    }
  }, // end ccheckVideos
  getVideoData: function(v,d){
    var vid = v, data = d||{}, swap = _sdi.jwp.videoNames||{};;
    if(!_sdi.jwp.videos[vid.id]){
      var item = vid.getPlaylistItem();
      var title = item.title;
      if(!title){
        if(item.file.indexOf('youtube.com')==-1){
          var file = item.file.split('/').pop();
          if(file){
            title = file.replace(/_/ig,' ').split('.')[0];
          }
        }
        else {
          title = v.id;
        }
      }
      title = title.toLowerCase();
      if(swap[title]){
        title = swap[title];
      }

      _sdi.jwp.videos[vid.id] = {
        duration: data.duration||vid.getDuration(),
        title: title,
        state: '',
        started: false
      }
    }
    if(_sdi.jwp.videos[vid.id].duration == -1 && vid.getDuration()!==-1){
      _sdi.jwp.videos[vid.id].duration = vid.getDuration();
    }
    return _sdi.jwp.videos[vid.id];
  }, // end getVideoData
  timer: function(t){
    var time = t||3000;
    _sdi.jwp.checkVideos();
    setTimeout(function(){
      _sdi.jwp.timer()
    }, time);
  }
};
_sdi.jwp.timer();

// copy any values over in case _sdi.jwp already was created
if(_sdi.tmpJwp){
  for(jwp in _sdi.tmpJwp){
    _sdi.jwp[jwp] = _sdi.tmpJwp[jwp];
  }
}
