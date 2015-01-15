var timerInfo = { property: getPosition, target: this, units: "seconds" };
        var playerInfo = { id: "jwplayer" };
        var configInfo = {
           playerInfo: playerInfo,
            timerInfo: timerInfo,
            accountKey: "a06906fa7d1811de8e9d0019b9f157b5"
        };
        _vmc.configure(configInfo);
    var clipInfo = {};
    
  function log(msg){
				try {
					//console.debug(msg);
				}
				catch(e){
					
				}
			}
    
    
    
    var played = false;

function playbackStarted(){
         if (played == false){
            trackPlayVMC();
            played = true;
        }               
     }
    
    
      function getPosition() {
    var pos = 0;
    if (jwplayer()) {
      pos = jwplayer().getPosition();
    log("pos="+pos);
    }
    return pos;
    }
    
 
    