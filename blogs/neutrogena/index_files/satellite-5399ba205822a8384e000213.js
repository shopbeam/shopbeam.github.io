var jj_vid = {};
var onBCLTemplateReady = function(evt){
  var player = brightcove.api.getExperience(evt.target.experience.id),
      videoPlayer = player.getModule('videoPlayer');
  videoPlayer.addEventListener(brightcove.api.events.MediaEvent.BEGIN, function(v){
    var name = v.media.displayName;
    if(typeof s != 'undefined'){
      s.Media.open(name,v.duration,'brightcove');
      s.Media.play(name,v.position);
    }
    if(!jj_vid[name]){
      jj_vid[name]={};
    }
    jj_vid[name].started = true;
    _satellite.notify('Brightcove Video : '+v.media.displayName+' : start',1);
  });
  videoPlayer.addEventListener(brightcove.api.events.MediaEvent.STOP, function(v){
    var name = v.media.displayName;
    if(typeof s != 'undefined'){
      s.Media.stop(v.media.displayName,v.position);
    }
    _satellite.notify('Brightcove Video : '+v.media.displayName+' : stop',1);
  });
  videoPlayer.addEventListener(brightcove.api.events.MediaEvent.PLAY, function(v){
    var name = v.media.displayName;
    if(!jj_vid[name]){
      jj_vid[name]={};
    }
    if(jj_vid[name].started===true){
      if(typeof s != 'undefined'){
        s.Media.play(v.media.displayName,v.position);
      }
      _satellite.notify('Brightcove Video : '+v.media.displayName+' : play',1);
    }
  });
};
var onBCLTemplateLoad = function (experienceID) {
  // get a reference to the player and API Modules and Events
  var player = brightcove.api.getExperience(experienceID);
}
