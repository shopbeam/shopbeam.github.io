var tcmAds = tcmAds || {};
tcmAds.createHeaderTout = function(adVars) {
	if (typeof adVars.name == "undefined") { throw "You must supply a name for this tout"; }
	var ad = {
		channels:{ "dflt" : 
		["https://subscription.peopleenespanol.com/storefront/subscribe-to-people-en-espanol/link/1018032.html",
		"http://ebm.cheetahmail.com/r/regf2?=0&aid=1839066726&n=1&PEOPLEES_SOURCE=expandableheader"
		] },
		cookieName: "pptout0913expandable",
		btn1clickThroughUrl: '',
		btn2clickThroughUrl: '',
		expandCount: 0,
		getCookie: function(c_name) {		
		  var i,x,ARRcookies=document.cookie.split(";");
		  var subscriberCookieSet=false;
		  for (i=0;i<ARRcookies.length;i++){
			x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
			x=x.replace(/^\s+|\s+$/g,"");
			if (x==c_name){
			  subscriberCookieSet=true;
			   break;
			}{subscriberCookieSet=false;}
		  }
		  return subscriberCookieSet;

		},
		setCapCookie: function() {
			var days = 1000*60*60*24, now = new Date().getTime(), daysFromNow = new Date(now+days);
			document.cookie=this.cookieName+"="+now+";path=/;domain=.peopleenespanol.com;expires="+daysFromNow.toUTCString();

		},
		inIframe: function() {
			return window.frameElement ? true : false;
		},
		formatForDoubleClick: function(url) {
           var tcm_dfpGet = adVars.clickTracking.dartGet,
                extra_qs = "",
                qs_param, qs_val;

            if (tcm_dfpGet != "%c") {
                url = tcm_dfpGet + url.replace("://","%3a%2f%2f");
            }

            for (qs_param in adVars.subs3Tracking) {
                qs_val = adVars.subs3Tracking[qs_param];

                if (/^%%PATTERN/.test(qs_val) || /^%s$/.test(qs_val)) { qs_val = "0000"; }
                if (qs_val == "") qs_val = "null";

                extra_qs += "&" + qs_param + "=" + qs_val;
            }

            // the first "&" should be a "?"
            extra_qs = extra_qs.replace("&", "?");
            extra_qs+= "&dfpPost="+adVars.clickTracking.dartGet;
            return url + extra_qs;
		},
		showTout: function(obj1) {
			if(navigator.cookieEnabled && !this.getCookie(this.cookieName) &&this.expandCount==0){
				this.expandCount++;
				this.setCapCookie();
			
				if(obj1.style.display=='none'){
					obj1.style.display='block';
					setTimeout(function(){obj1.style.display='none';},8000);
				}
			
			}
		},
		exposeTout: function() {	
            tcmAds[adVars.name] = this;
            if (this.inIframe()) {
                if (typeof window.parent.tcmAds !== 'undefined') {
                    window.parent.tcmAds[this.toutName] = tcmAds[this.toutName];
                } else {
                    window.parent.tcmAds = tcmAds;
                }
            }
		},
tcm_findLeft:function(obj) {
    var curleft = 0;
	if(typeof(obj) !== 'undefined' && obj != null){
		while(obj.tagName != "HTML" && obj.tagName != "BODY" ) {
			curleft += obj.offsetLeft;
			obj = obj.offsetParent;
		}
	}
    return curleft;
},

 getPos:function(){
	var containerPos=this.tcm_findLeft(document.getElementById('container'));
	var tcmLeftPos=this.tcm_findLeft(document.getElementById('tcmGlobalTout200x60'));
	var posDiff=tcmLeftPos-containerPos;
    	if(posDiff>400){
		return true;
		}
		else return false;
},
		drawTout: function() {
				/////////////////////
				//TOUT CREATIVE, EDIT AS NEEDED
				////////////////////
					document.write("<div id='tcmGlobalTout200x60' onmouseover='tcmAds[\"" + adVars.name + "\"].showTout(document.getElementById(\"tcmExpandableToutIN\"));' style='height: 90px; width: 220px; background: url(http://subscription-assets.peopleenespanol.com/prod/assets/themes/magazines/SUBS/templates/velocity/site/pp-expandabletout0913/resources/images/tout_v4a.png) left top no-repeat; position:relative;'><img src='http://subscription-assets.timeinc.com/current/5387_top1_100_thumb.jpg' style='position:absolute; left:8px; top:6px; width:55px; height:69px;'/><div style='width: 140px; height: 90px; float: left; cursor: pointer; background: url(http://subscription-assets.peopleenespanol.com/prod/assets/themes/magazines/SUBS/templates/velocity/site/pp-expandabletout0913/resources/images/tout_v4a.png) left top no-repeat;' onclick='window.open(\""+this.btn1clickThroughUrl+"\");' onmouseover='this.style.backgroundPosition = \"left -90px\";' onmouseout='this.style.backgroundPosition = \"left top\";'><!-- BTN ONE --></div><div style='width: 80px; height: 90px; float: left; margin-left: 0; cursor: pointer; background: url(http://subscription-assets.peopleenespanol.com/prod/assets/themes/magazines/SUBS/templates/velocity/site/pp-expandabletout0913/resources/images/tout_v4a.png) -140px top no-repeat;' onclick='window.open(\""+this.btn2clickThroughUrl+"\");' onmouseover='this.style.backgroundPosition = \"-140px -90px\";' onmouseout='this.style.backgroundPosition = \"-140px top\";'><!-- BTN TWO --></div></div>");
					
				tcmRight=this.getPos();
				if(tcmRight==false){
				
					document.write("<div id='tcmExpandableToutIN' style='width: 224px; height: 161px; top:140px; background:url(http://subscription-assets.peopleenespanol.com/prod/assets/themes/magazines/SUBS/templates/velocity/site/pp-expandabletout0913/resources/images/tout_v4b.png) left top no-repeat; position:absolute; display:none; z-index:1000203093;'><img src='http://subscription-assets.timeinc.com/current/5387_top1_100_thumb.jpg' style='position:absolute; left:34px; top:0; width:76px; height:100px;'/><div id='closebtn' onclick='document.getElementById(\"tcmExpandableToutIN\").style.display=\"none\";' style='position:absolute; right:0; top:0; width: 16px; height: 16px; cursor: pointer; display:block;'><!-- close button --></div><div id='btn1' style='float:left; margin-left:140px; margin-top:6px; width: 78px; height: 80px; cursor: pointer; background: url(http://subscription-assets.peopleenespanol.com/prod/assets/themes/magazines/SUBS/templates/velocity/site/pp-expandabletout0913/resources/images/tout_v4b.png) -140px -6px no-repeat;' onmouseover='this.style.backgroundPosition = \"-140px -167px\";' onmouseout='this.style.backgroundPosition = \"-140px -6px\";' onclick='window.open(\""+this.btn1clickThroughUrl+"\");'><!-- btn 1 --></div><div id='btn2' style='float:left; margin-left:140px; width: 78px; height: 70px; cursor: pointer; background: url(http://subscription-assets.peopleenespanol.com/prod/assets/themes/magazines/SUBS/templates/velocity/site/pp-expandabletout0913/resources/images/tout_v4b.png) -140px -86px no-repeat;' onmouseover='this.style.backgroundPosition = \"-140px -247px\";' onmouseout='this.style.backgroundPosition = \"-140px -86px\";' onclick='window.open(\""+this.btn2clickThroughUrl+"\");'><!-- btn 2 --></div></div>");
					}
					else{
					document.write("<div id='tcmExpandableToutIN' style='width: 224px; height: 161px; top:0px; background: url(http://subscription-assets.peopleenespanol.com/prod/assets/themes/magazines/SUBS/templates/velocity/site/pp-expandabletout0913/resources/images/tout_v4b.png) left top no-repeat; position:absolute; display:none; z-index:1000203093;'><img src='http://subscription-assets.timeinc.com/current/5387_top1_100_thumb.jpg' style='position:absolute; left:34px; top:0; width:76px; height:100px;'/><div id='closebtn' onclick='document.getElementById(\"tcmExpandableToutIN\").style.display=\"none\";' style='position:absolute; right:0; top:0; width: 16px; height: 16px; cursor: pointer; display:block;'><!-- close button --></div><div id='btn1' style='float:left; margin-left:140px; margin-top:6px; width: 78px; height: 80px; cursor: pointer; background: url(http://subscription-assets.peopleenespanol.com/prod/assets/themes/magazines/SUBS/templates/velocity/site/pp-expandabletout0913/resources/images/tout_v4b.png) -140px -6px no-repeat;' onmouseover='this.style.backgroundPosition = \"-140px -167px\";' onmouseout='this.style.backgroundPosition = \"-140px -6px\";' onclick='window.open(\""+this.btn1clickThroughUrl+"\");'><!-- btn 1 --></div><div id='btn2' style='float:left; margin-left:140px; width: 78px; height: 70px; cursor: pointer; background: url(http://subscription-assets.peopleenespanol.com/prod/assets/themes/magazines/SUBS/templates/velocity/site/pp-expandabletout0913/resources/images/tout_v4b.png) -140px -86px no-repeat;' onmouseover='this.style.backgroundPosition = \"-140px -247px\";' onmouseout='this.style.backgroundPosition = \"-140px -86px\";' onclick='window.open(\""+this.btn2clickThroughUrl+"\");'><!-- btn 2 --></div></div>");
					}
				
		},
		build: function() {
			this.btn1clickThroughUrl = this.formatForDoubleClick(this.channels[adVars.channel][0]);
			this.btn2clickThroughUrl = this.channels[adVars.channel][1];
			this.drawTout();
			this.exposeTout();
		}
	}
	ad.build();
}
tcmAds.createHeaderTout(tcmAds['pp-expandabletout0913.config']);
	
				
				
	




	 
