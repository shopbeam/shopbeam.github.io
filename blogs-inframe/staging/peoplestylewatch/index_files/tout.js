tcmAds.createHeaderTout = function(adVars) {
	if (typeof adVars.name == "undefined") { throw "You must supply a name for this tout"; } 	
	
	var ad = {
		toutName : adVars.name,
		frequency : 1, //days between expand on mouseover
		toutHeight : 60,
		toutWidth : 200,
		channels : {
			dflt: "https://subscription.people.com/storefront/subscribe-to-people/link/1019849.html",
			Tablet: "https://subscription.people.com/storefront/subscribe-to-people/link/1019853.html"
		},
		clickThroughUrl: '',
		dev: false, // set to true to disable frequency constraint on tout expansion
		inIframe: function() {
			return (window.frameElement) ? true : false;
		},
		setResourcesURL : function(_toutName){
        var href = window.location.href,
        _URL = "//subscription-assets.timeinc.com/prod/assets/themes/magazines/SUBS/templates/velocity/site/"+_toutName+"/resources/images/";
        if(/savvis\.net/.test(href)){_URL =_URL.replace("subscription-assets.timeinc.com/prod/assets/","ecom-dev01-app.usdlls2.savvis.net:10400/");}
        if(/qa\/assets\//.test(href)){_URL = _URL.replace("prod/assets/","qa/assets/");}
        this.resources = _URL;
        },
        resources: '',

	/////////////////////
	//TOUT CREATIVE, EDIT AS NEEDED
	////////////////////
		writeCreative : function(){	

			var tout = this.cat(
				'<div id="'+this.toutName+'" style="position: relative; top: 7px; height: 60px; width: 200px; overflow: hidden; cursor: pointer; background-image: url('+this.resources+'200x120.gif); background-position: 0px -60px;" onmouseover="this.style.backgroundPosition = \'0px -60px\'; tcmAds[\''+this.toutName+'\'].expandTout();" onmouseout="this.style.backgroundPosition =\'0px 0px\';">',
					'<div style="position: absolute; top: 5px; left: 4px;"> <img src="//subscription-assets.people.com/prod/assets/themes/magazines/default/template-resources/images/PE/covers/peoplecover_127x169.jpg" alt="" width="39" height="52" onClick="window.open(\''+this.clickThroughUrl+'\', \'_blank\');" /> </div>',
					'<div id="btn1" style="position: absolute; top: 0; left: 0; height: 60px; width: 200px; cursor: pointer;" onClick="window.open(\''+this.clickThroughUrl+'\', \'_blank\');">',
						'<!-- btn 1 --> ',
					'</div>',
				'</div>');
			document.write(tout);

			var expandedTout = '';
			if (this.getToutPosition() == 'right') {
				// Right side expanded
				expandedTout += this.cat (
						'<div id="' + this.toutName + '_expanded" style="display: none; position: absolute; height: 149px; width: 330px; top: -17px; right: 9px; overflow: hidden; background: url(\''+ this.resources +'bnr-right.png\') top left no-repeat;" >',
						'<div id="closebtn" style="position: absolute; top: 0px; left: 0px; z-index: 10010; height: 22px; width: 22px; cursor: pointer;" onClick="document.getElementById(\''+this.toutName + '_expanded\').style.display = \'none\'; return false;">',
							'<!-- close button --> ',
						'</div>',
						'<div style="position: absolute; top: 9px; left: 14px; z-index: 10009; height: 140px; width: 316px; cursor: pointer;" onClick="window.open(\''+this.clickThroughUrl+'\', \'_blank\');">',
							'<!-- main click --> ',
						'</div>',
						'<div style="position: absolute; top: 24px; left: 21px; z-index: 10008;"> <img src="//subscription-assets.people.com/prod/assets/themes/magazines/default/template-resources/images/PE/covers/peoplecover_127x169.jpg" alt="" width="84" height="110" /> </div>',
					'</div>'
				);
			}
			if (this.getToutPosition() == 'left') {
				// Left side expanded

				expandedTout += this.cat(
					'<div id="' + this.toutName + '_expanded" style="display: none; position: absolute; height: 297px; width: 314px; top: 41px; left: -15px; overflow: hidden; background: url(\''+ this.resources +'bnr.png\') top left no-repeat;" >',
						'<div id="closebtn" style="position: absolute; top: 62px; right: 7px; z-index: 10010; height: 22px; width: 21px; cursor: pointer;" onClick="document.getElementById(\''+this.toutName + '_expanded\').style.display = \'none\'; return false;">',
							'<!-- close button -->',
						'</div>',
						'<div style="position: absolute; top: 76px; left: 28px; z-index:10008;" >',
							'<img style="height: 119px; width:90px;" src="//subscription-assets.people.com/prod/assets/themes/magazines/default/template-resources/images/PE/covers/peoplecover_205x273.jpg" alt="" width="90" height="119" />',
						'</div>',
						'<div style="position: absolute; top: 25px; left: 15px; z-index: 10009; height: 48px; width: 200px; cursor: pointer;" onClick="window.open(\''+this.clickThroughUrl+'\', \'_blank\');">',
							'<!-- main click --> ',
						'</div>',
						'<div style="position: absolute; top: 72px; left: 15px; z-index: 10009; height: 132px; width: 286px; cursor: pointer;" onClick="window.open(\''+this.clickThroughUrl+'\', \'_blank\');">',
							'<!-- main click 2 --> ',
						'</div>',
						'<div id="btn1" style="position: absolute; top: 204px; left: 15px; z-index: 10010; height: 81px; width: 286px; cursor: pointer;" onClick="window.open(\''+this.clickThroughUrl+'\', \'_blank\');">',
							'<!-- btn 1 -->',
						'</div>',
					'</div>'
				);
			}

			document.write(expandedTout);

		},
		cat: function() { return Array.prototype.join.call(arguments, "") },
		channel: adVars.TCMchannel,
        formatForDoubleClick: function (url) {
                 
            var tcm_dfpGet = adVars.clickTracking.dartGet,
                extra_qs = "",
                qs_param, qs_val;

            if (tcm_dfpGet != "%c") {
                url = tcm_dfpGet + url.replace("://","%3a%2f%2f");
            }

            for (qs_param in adVars.subs3Tracking) {
                qs_val = adVars.subs3Tracking[qs_param];
                
                if (/^%%PATTERN/.test(qs_val) || /^%s$/.test(qs_val)) { qs_val = "0000"; }
                if (qs_val == "") { qs_val = "null"; }

                extra_qs += "&" + qs_param + "=" + escape(qs_val);
            }

            // the first "&" should be a "?"
            if(!/\?/.test(url)){
	            extra_qs = extra_qs.replace("&", "?");
	        }

            return url + extra_qs;

        },
		findLeft : function(obj) {
			var curleft = 0;
			if(typeof(obj) !== 'undefined' && obj != null){
				while(obj.tagName != "HTML" && obj.tagName != "BODY" ) {
					curleft += obj.offsetLeft;
					obj = obj.offsetParent;
				}
			}
			return curleft;
		},
		getIframe: function () {
			if (!this.inIframe()) { return false; }
			return window.parent.document.getElementById(window.frameElement.id);
		},

		getToutPosition: function(){
			var containerPos=this.findLeft(this.getElementById('container'));
			var tcmLeftPos=this.findLeft(this.inIframe() ? this.getIframe() : document.getElementById(this.toutName));
			var posDiff=tcmLeftPos-containerPos;
			return (posDiff>400) ? 'right' : 'left';
		},

		/**
		 * getElementById
		 * @description attempts to get element from window.parent.document first then document. no need to check if inside iframe.
		 */
		getElementById: function(element) {
      if (window.frameElement) {
        return (window.parent.document.getElementById(element)) ? window.parent.document.getElementById(element) : document.getElementById(element);
      } else {
        return document.getElementById(element);
      }
		},

		getCookie : function(c_name){
			var i,x,ARRcookies=document.cookie.split(";");
			var subscriberCookieSet=false;
			for (i=0;i<ARRcookies.length;i++){
				x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
				x=x.replace(/^\s+|\s+$/g,"");
				if (x==c_name){
				subscriberCookieSet=true;
				break;
				}else{subscriberCookieSet=false;}
			}
			return subscriberCookieSet;
		},

		setCapCookieGlobalTout : function(){
			var domainArray = window.location.hostname.split('.'),
			tcmTopLevelDomain = domainArray.slice(-2).join('.'),
			days = 1000*60*60*24*this.frequency, now = new Date().getTime(), daysFromNow = new Date(now+days);
			document.cookie=this.toutName+"="+now+";path=/;domain=."+tcmTopLevelDomain+";expires="+daysFromNow.toUTCString();	
		},

		tcmGlobalCount : 0,

		expandTout : function(){
			var obj1 = this.getElementById(this.toutName + '_expanded'); 
			if(window.location.protocol=="https:"){return;}
			if((navigator.cookieEnabled && !this.getCookie(this.toutName) && this.tcmGlobalCount==0 && !this.checkDevice()) || this.dev == true){
				this.tcmGlobalCount++;
				this.setCapCookieGlobalTout();
				if(obj1.style.display=='none'){
					obj1.style.display='block';

					var toutTimeout = 5000; // LEFT timeout
					if(this.getToutPosition == 'right'){
						toutTimeout = 8000; // RIGHT timeout
					}

					setTimeout(function(){obj1.style.display='none';},toutTimeout);
				}
				this.omniTrack( this.toutName + this.getToutPosition() );
			}
		},

		adjustPositioning : function(){
			if(this.getElementById('site-banner')) { this.getElementById('site-banner').style.zIndex="10000"; }
			if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){
				var ieversion=new Number(RegExp.$1)
				if (ieversion==7){
					this.getElementById('adCMTop').style.marginTop="6px";
				}
				else {
					this.getElementById('adCMTop').style.marginTop="0px";
				}
				if (ieversion < 10 && this.getToutPosition() == 'right') {
					if (this.getElementById(this.toutName))	{
						this.getElementById(this.toutName).style.marginTop = "-10px";
					}
				}
			}
			else {
				this.getElementById('adCMTop').style.marginTop="0px";
			}
		},
        checkDevice:function (){

			var stopOverlay = false;
			var uagent = navigator.userAgent.toLowerCase();

			if ( ( (navigator.userAgent.match('iPad')) || (navigator.userAgent.match('iPod')) || (navigator.userAgent.match('iPhone')) ||(uagent.search('android') > -1))) { 

				stopOverlay = true;

			}
			return stopOverlay;
		},
		build: function(){
			this.setResourcesURL(this.toutName);
			this.clickThroughUrl = this.formatForDoubleClick(this.channels[this.channel]);
			this.writeCreative();
			this.adjustPositioning();
			this.exposeTout();
		},
		exposeTout: function() {
			tcmAds[this.toutName] = this;
			if (this.inIframe()) {
				if (typeof window.parent.tcmAds !== 'undefined') {
					window.parent.tcmAds[this.toutName] = tcmAds[this.toutName];
				} else {
					window.parent.tcmAds = tcmAds;
				}
			}
		},

				/*Omniture Tracking*/
		omniTrack : function(oStr) {
			if((typeof(s_account)!='undefined') && (typeof(oStr)!='undefined')) {
				var s_time = s_gi(s_account);
				s_time.linkTrackVars='events,eVar26';
				s_time.linkTrackEvents=s_time.events='event46';
				s_time.eVar26=oStr;
				s_time.tl(true,'o','tcm tout');
				s_time.linkTrackVars='None';s_time.prop26=s_time.events='';
			}
		}

	};

	ad.build();
};
tcmAds.createHeaderTout(tcmAds['pe-chopro27lunchexptout.config']);