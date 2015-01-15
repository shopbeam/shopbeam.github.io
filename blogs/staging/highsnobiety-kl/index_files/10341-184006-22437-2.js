   /* 
    * Mojo JavaScript Multipurpose Advertising Template 007
    * Written By: Kevin Ready (kevin@planetkevin.com) and 
    * Christopher D. Robison (cdr@cdr2.com) and 
    * Heath Matthew Kornblum (heathkornblum@hotmail.com) and
    * Gary M. Rosenstein (mangomann@sbcglobal.net)
    * Created On: 9/16/2010 
    * Last Modified: 8/9/2013 10:21 pm
    *
    */

   var theReferer = "<theReferer/>";

   function mojoBase() {};
   mojoBase.prototype = {
      delayed: false, // This is the flag used to populate content after page load.
	  delay: 500,
	  maxTime: 6000,
      isPinned:false, // Used in conjunction with pinDiv for delayed content
      stopper: false,
      usrExps: 0,
      expand_ready: false,
      timerInterval: 500,
      timer: null,
      myParent: null,
      cookieName: '',
      cache_bust: 1,
      MSNImg: new Image(),
      banner_code: function () {
         return null;
      },
      expand_code: function () {
         return null;
      },
      autoshow: function () {
         return (!this.getCookie(this.cookieName) ? true : false);
      },
      hdif: function () {
         return (parseInt(this.w2 - this.w1))
      },
      vdif: function () {
         return (parseInt(this.h2 - this.h1))
      },
      isSingle: function () {
         return !(this._swf2.length > 0);
      },
      initialSize: function () {
         return (this.isSingle() ? {
            _w: this.w2,
            _h: this.h2
         } : {
            _w: this.w1,
            _h: this.h1
         });
      },
      rmURL: function () {
         return (decodeURIComponent(this.mpck).replace(/\/ck\//, '/sv/').replace(/[;&]mpt=[^;&]*/i, "").replace(/\?mpt=[^;&]*[;&]?/i, "?") + '&mpcr=' + this.mpcrid + '&');
      },
      f: function () { // returns major/minor version of SWF
         try {
            try {
               var a = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');
               try {
                  a.AllowScriptAccess = 'always';
               } catch (e) {
                  return '6,0,0';
               }
            } catch (e) {};
            return new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];
         } catch (e) {
            try {
               if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
                  return (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1];
               }
            } catch (e) {}
         };
         return '0,0,0';
      },
      flashVars: function () {
         var myString = '?clickTAG=' + this.mpvc + this.mpck + '&mojo_mpcrid=' + this.mpcrid;
         myString += this.fv('flv');
         if (this.flvars) {
            for (args in this.flvars) {
               myString += "&" + escape(args) + "=" + this.flvars[args];
            }
         }
         return (myString);
      },
      fv: function (which, override, nojo) {
         // The default is used for FlashVars that use the assetRoot.
         // when override is used, it means that the assetRoot is not part of the value
         // when nojo is used, it means that which does not have mojo_ prefix
         var _str = '';
         if (override) {
            if (nojo) {
               _str = String.fromCharCode(38) + which + '=' + this[which];
            } else {
               _str = String.fromCharCode(38) + 'mojo_' + which + '=' + this[which];
            }
         } else {
            if (this[which].length > this.assetRoot.length) {
               _str = String.fromCharCode(38) + 'mojo_' + which + '=' + this[which];
            }
         }
         return _str;
      },
      mojo_clickTag: function () {
            var clickWin = window.open(window.decodeURIComponent(this.mpck), "mojo_clickWin");
      },
      mojo_clickthru: function () {
         if (typeof (mpOOBClickTrack) !== undefined) {
            this.MSNImg.src = mpOOBClickTrack;
         }
      },
      getCookie: function (_name) {
         var _search = _name + "=";
         if (document.cookie.length > 0) {
            var offset = document.cookie.indexOf(_search);
            if (offset != -1) {
               offset += _search.length;
               var end = document.cookie.indexOf(";", offset);
               if (end == -1) {
                  end = document.cookie.length;
               };
               return unescape(document.cookie.substring(offset, end));
            }
         }
      },
      setCookie: function (_name, value, days) {
         var expires = "";
         if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
         }
         document.cookie = _name + "=" + value + expires + "; path=/";
      },
      createDiv: function () {
         this.swf1 = this.assetRoot + this._swf1;
         this.swf2 = (this._swf2) ? (this.assetRoot + this._swf2) : this.swf1;
		 this._asset = this.swf1;
         this.gif1 = this.assetRoot + this._gif1;
         this.gif2 = (this._gif2) ? (this.assetRoot + this._gif2) : this.gif1;
         this.flv = (this.flv != "") ? (this.assetRoot + this._flv) : "";
         this.xml = (this.xml != "") ? (this.assetRoot + this._xml) : "";
      },
      expand_code: function () {
         if (this.f().split(',')[0] >= (this.mfV * 1)) {
            // var _obj=document.create
            return ('<object ' + this.mouseout + ' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="swfexpand' + this.mpcrid + '" width="' + this.w2 + '" height="' + this.h2 + '"><param name="movie" value="' + this.swf2 + this.flashVars() + '"/><param name="wmode" value="' + this.winMdEx + '"/><param name="Autostart" value="true"/><param name="Quality" value="high"/><param name="allowScriptAccess" value="always"/><param name="allowFullScreen" value="true"/><embed id="swfexpand' + this.mpcrid + '" wmode="' + this.winMdEx + '" src="' + this.swf2 + this.flashVars() + '" swLiveConnect="TRUE" width="' + this.w2 + '" height="' + this.h2 + '" TYPE="application/x-shockwave-flash" quality="high" allowScriptAccess="always" allowFullScreen="true"><\/embed><\/object>');
         } else {
            return "";
         }
      },
      banner_code: function () {
            return ('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="swfbanner' + this.mpcrid + '" name="swfbanner' + this.mpcrid + '" width="' + this.initialSize()._w + '" height="' + this.initialSize()._h + '"><param name="movie" value="' + this.swf1 + this.flashVars() + '"/><param name="wmode" value="' + this.winMd + '"/><param name="Autostart" value="true"/><param name="Quality" value="high"/><param name="allowScriptAccess" value="always"/><param name="allowFullScreen" value="true"/><embed id="swfbanner' + this.mpcrid + '" name="swfbanner' + this.mpcrid + '" wmode="' + this.winMd + '" src="' + this.swf1 + this.flashVars() + '" swLiveConnect="TRUE" width="' + this.initialSize()._w + '" height="' + this.initialSize()._h + '" type="application/x-shockwave-flash" quality="high" allowScriptAccess="always" allowFullScreen="true"><\/embed><\/object>');

      },
      writeDiv: function () {
         if (!(this.f().split(',')[0] >= (this.mfV * 1)) && this.type != "html") {
               document.write('<a href="' + this.rmURL() + 'ff_click=1&mpro=http://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DB5we89Xg7UpCEH--F6wGXs4HwCsyUtZQEAAAAEAEgADgAWNySn6ZlYMnGqYvApNgPggEXY2EtcHViLTM2MTcxNDM1NTUzMDc4NDSyARR3d3cuaGlnaHNub2JpZXR5LmNvbboBCzAwZ2ZwX2ltYWdlyAEJ2gFaaHR0cDovL3d3dy5oaWdoc25vYmlldHkuY29tLzIwMTMvMDkvMTMvc3RvbmUtaXNsYW5kLWZhbGx3aW50ZXItMjAxMy1jYW1vdWZsYWdlLWNvbGxlY3Rpb24vmAKowwHAAgLgAgDqAhw1MjAyL2Ntbl9oaWdoc25vYmlldHkvc3lzdGVt-AKB0h6QA-ADmAPgA6gDAeAEAaAGFg%26num%3D0%26sig%3DAOD64_3Z3_dlYDbGJe4hXvI6P1RjXpW9uQ%26client%3Dca-pub-3617143555307844%26adurl%3Dhttp://adfarm.mediaplex.com/ad/ck/10341-184006-22437-2?mpt=2029543780" target="_blank"><img src="' + this.rmURL() + 'ff_imp=1&mpro=' + this.gif1 + '" border="0" width="' + this.w1 + '" height="' + this.h1 + '"/></a>');
               return true; 
         }
         if (this.mpBanner != undefined) return true;
         try {
            if (this.iFrameFriendly()) window.frameElement.style.height = this.h1 + "px";
         } catch (e) {
            if (this.sumArray(this.expandFlags) != 0) {
               document.write('<a href="' + this.rmURL() + 'ff_click=1&mpro=http://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DB5we89Xg7UpCEH--F6wGXs4HwCsyUtZQEAAAAEAEgADgAWNySn6ZlYMnGqYvApNgPggEXY2EtcHViLTM2MTcxNDM1NTUzMDc4NDSyARR3d3cuaGlnaHNub2JpZXR5LmNvbboBCzAwZ2ZwX2ltYWdlyAEJ2gFaaHR0cDovL3d3dy5oaWdoc25vYmlldHkuY29tLzIwMTMvMDkvMTMvc3RvbmUtaXNsYW5kLWZhbGx3aW50ZXItMjAxMy1jYW1vdWZsYWdlLWNvbGxlY3Rpb24vmAKowwHAAgLgAgDqAhw1MjAyL2Ntbl9oaWdoc25vYmlldHkvc3lzdGVt-AKB0h6QA-ADmAPgA6gDAeAEAaAGFg%26num%3D0%26sig%3DAOD64_3Z3_dlYDbGJe4hXvI6P1RjXpW9uQ%26client%3Dca-pub-3617143555307844%26adurl%3Dhttp://adfarm.mediaplex.com/ad/ck/10341-184006-22437-2?mpt=2029543780" target="_blank"><img src="' + this.rmURL() + 'ff_imp=1&mpro=' + this.gif1 + '" border="0" width="' + this.w1 + '" height="' + this.h1 + '"/></a>');
               return true;
            }
         }
         this.mouseout = (!this._mouseout || this.pgovrly) ? '' : (this._mouseout && !this.pgovrly) ? 'onmouseout="mojo_hide(' + this.mpcrid + ')"' : '';
         var eicon = '';
         if (this.enhanced) {
            eicon = "<div style='position:absolute;z-index:10500;top:0px;right:0px;width:77px;height15px;z-index:999999;'><a href='http://www.mediaplex.com/ad-choices' target='_blank'><img src='http://img-cdn.mediaplex.com/0/16179/109012/CollisionAdMarker.png' width='77' height='15' border='0'/></a></div>";
         }
         var _divName, _divContent;
		 if (this.type == "html") {
			try {
			  var myTag = this.find_ad_tag();
				  if (myTag.tagName.toLowerCase() == "iframe") {
					  myTag.style.height = myTag.style.width = "0px";
				      myTag.height = myTag.width = "0";
				  }
			  if (myTag != null) {
				  var htmlIframe = this.html_iframe("mpBanner" + this.mpcrid);
				  myTag.parentNode.appendChild(htmlIframe);
			  }
			} catch (e) {
			  document.write('<a href="' + this.rmURL() + 'ff_click=1&mpro=http://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DB5we89Xg7UpCEH--F6wGXs4HwCsyUtZQEAAAAEAEgADgAWNySn6ZlYMnGqYvApNgPggEXY2EtcHViLTM2MTcxNDM1NTUzMDc4NDSyARR3d3cuaGlnaHNub2JpZXR5LmNvbboBCzAwZ2ZwX2ltYWdlyAEJ2gFaaHR0cDovL3d3dy5oaWdoc25vYmlldHkuY29tLzIwMTMvMDkvMTMvc3RvbmUtaXNsYW5kLWZhbGx3aW50ZXItMjAxMy1jYW1vdWZsYWdlLWNvbGxlY3Rpb24vmAKowwHAAgLgAgDqAhw1MjAyL2Ntbl9oaWdoc25vYmlldHkvc3lzdGVt-AKB0h6QA-ADmAPgA6gDAeAEAaAGFg%26num%3D0%26sig%3DAOD64_3Z3_dlYDbGJe4hXvI6P1RjXpW9uQ%26client%3Dca-pub-3617143555307844%26adurl%3Dhttp://adfarm.mediaplex.com/ad/ck/10341-184006-22437-2?mpt=2029543780" target="_blank"><img src="' + this.rmURL() + 'ff_imp=1&mpro=' + this.gif1 + '" border="0" width="' + this.w1 + '" height="' + this.h1 + '"/></a>');
			}
		 }  else if (this.isSingle()) {
                var objWrapper = '<div id="innerWrapper' + this.mpcrid + '" style="margin:0px;padding:0px;width:' + this.initialSize()._w + 'px;height:' + this.initialSize()._h + 'px;position:relative;">'; 
                if(this.delayed){
                    _divName="innerWrapper" + this.mpcrid; 
                    _divContent=this.banner_code() + eicon;
                }else{
                    objWrapper+= this.banner_code() + eicon;
                }
                objWrapper+='</div>';
                divString='<div style="position:relative;width:' + this.w1 + 'px;height:' + this.h1 + 'px;z-index:' + this.zIndex + ';margin:auto;"><div id="mpBanner' + this.mpcrid + '" style="margin:0px;padding:0px;width:' + this.w1 + 'px;height:' + this.h1 + 'px;position: absolute;overflow:hidden;z-index:' + this.zIndex + ';">' + objWrapper + '</div></div>';
                document.write(divString);
                this.innerWrapper = document.getElementById('innerWrapper' + this.mpcrid);
             } else {
            var divString='<div style="position:relative;width:' + this.w1 + 'px;height:' + this.h1 + 'px;z-index:' + this.zIndex + ';"><div id="mpBanner' + this.mpcrid + '" style="margin:0px;padding:0px;height:' + this.h1 + 'px;position:absolute;z-index:' + this.zIndex + ';">';
            if(this.delayed){
                _divName="mpBanner" + this.mpcrid; 
                _divContent=this.banner_code() + eicon;
            }else{
                divString+= this.banner_code() + eicon;
            }
            divString+= '</div></div>';
            document.write(divString);
         }
         if (this.type != 'html') this.mpBanner = document.getElementById('mpBanner' + this.mpcrid);
         this.swfbanner = document.getElementById('swfbanner' + this.mpcrid);
         if (this.iFrameFriendly() && window.inDapIF) {
            window.frameElement.parentNode.appendChild(this.mpBanner.parentNode);
            window.frameElement.style.display = "none";
         }
         this.pinDiv(this.mpBanner);
		 var that = this;
         this.mpBanner.onmouseover = function() { that.countMouseOver();}
         this.mpBanner.onmouseout = function() { that.countMouseOut(); }
         this.mojo_metric_display_time("start");
         if(this.delayed){
            this.delayedWrite(this.delay, _divName, _divContent, this.maxTime, new Date().getTime());
        }
      }, 
     delayedWrite: function (delayInterval, divName, divContent, maxTime, startTime) {
        if (document.readyState === "complete") {
            if(this.type != 'html'){
                this.innerWrapper.innerHTML=divContent; // mpcrid
            }
            if(!this.isPinned){
                this.pinDiv(this.mpBanner);
                this.mpBanner.onmouseover = this.countMouseOver;
                this.mpBanner.onmouseout = this.countMouseOut;
                this.mojo_metric_display_time("start");
            }
        }else{
            var me=this;
            if((new Date().getTime()-startTime) > maxTime){
                if(console && console.log){
                    console.log("Document did not load within " + (maxTime/1000) + " seconds.");
                }
            }else{
                setTimeout(function(){
                    me.delayedWrite(
                        delayInterval, divName, divContent, maxTime, startTime);
                },delayInterval);
            }
        }
      },
      shouldCenter: function () {
         if ((this.sumArray(this.expandFlags) & this.expConst.left) != this.expConst.left && (this.sumArray(this.expandFlags) & this.expConst.right) != this.expConst.right) {
            return true;
         }
         return false;
      },
      sumArray: function (localArray) {
         var localSum = 0;
         for (var i = 0; i < localArray.length; i++) {
            localSum += localArray[i];
         }
         return localSum;
      },
      pinDiv: function (which) {
         var sumExpandFlags = this.sumArray(this.expandFlags);
         var sumSAOFlags = this.sumArray(this.SAOFlags);
         var autoDirection = false;
         if (((sumExpandFlags & this.expConst.right) == this.expConst.right) && ((sumExpandFlags & this.expConst.left) == this.expConst.left)) {
            autoDirection = true;
            var startingPos = (this.iFrameFriendly()) ? this.findPos(window.frameElement) : this.findPos(which.parentNode.parentNode);
            var winDims = this.getWinSize();
            if ((startingPos[0] + (this.w1)) > (winDims[0] / 2)) {
               // on right
               sumExpandFlags = (sumExpandFlags ^ this.expConst.right);
            } else {
               // on left
               sumExpandFlags = (sumExpandFlags ^ this.expConst.left);
            }
         }
         if ((this.pageImpact != 2) || this.isSingle()) {
            // break default behavior
            which.parentNode.style.position = "relative";
            which.parentNode.style.overlay = "visible";
         }
         if ((sumExpandFlags & this.expConst.top) == this.expConst.top) {
            this.vexdir = 1;

            which.style.bottom = "0px";
         }
         if ((sumExpandFlags & this.expConst.right) == this.expConst.right) {
            which.style.left = "0px";
            this.hexdir = 1;
         }
         if ((sumExpandFlags & this.expConst.bottom) == this.expConst.bottom) {
            this.vexdir = -1;
         }
         if ((sumExpandFlags & this.expConst.left) == this.expConst.left) {
            this.hexdir = -1;
            which.style.right = (which.offsetWidth <= which.parentNode.offsetWidth) ? "0px" : ((which.parentNode.offsetWidth - this.w1) / 2) + "px";
            if (this.iFrameFriendly() && !window.inDapIF) {
               which.parentNode.style.position = "absolute";
               which.parentNode.style.right = "0px";
               window.frameElement.style.position = "absolute";
               window.frameElement.style.right = "0px";
               window.frameElement.parentNode.style.position = "relative";
            }
         }
         if (this.isSingle() && this.type != 'html') {
            if ((sumSAOFlags & this.singleAssetOrientConst.top) == this.singleAssetOrientConst.top) {}
            if ((sumSAOFlags & this.singleAssetOrientConst.right) == this.singleAssetOrientConst.right) {
               this.innerWrapper.style.position = "absolute";
               this.innerWrapper.style.right = "0px";
            }
            if ((sumSAOFlags & this.singleAssetOrientConst.bottom) == this.singleAssetOrientConst.bottom) {
               this.innerWrapper.style.position = "absolute";
               this.innerWrapper.style.bottom = "0px";
            }
            if ((sumSAOFlags & this.singleAssetOrientConst.left) == this.singleAssetOrientConst.left) {}
         }
         if (this.shouldCenter()) {
            // issue to revisit
            which.parentNode.style.margin = "0px auto";
            which.style.left = "0px";
         }
         var what = (this.iFrameFriendly()) ? window.frameElement : which.parentNode;
         var j = 0;
         do {
            what.style.overflow = "visible";
            what = what.parentNode;
            j++
         } while (j <= this.overflowOverride);
         this.lastMinuteStyle(which);
         this.isPinned=true;
      },
      lastMinuteStyle: function (which) {
         return true;
      },
      findPos: function (which) {
         var curleft = curtop = 0;
         if (which.offsetParent) {
            do {
               curleft += which.offsetLeft;
               curtop += which.offsetTop;
            } while (which = which.offsetParent);
         }
         return [curleft, curtop];
      },
      getWinSize: function () {
         var myWidth = 0,
            myHeight = 0;
         if (typeof (window.innerWidth) == 'number') {
            //Non-IE
            myWidth = (this.iFrameFriendly()) ? window.parent.innerWidth : window.innerWidth;
            myHeight = (this.iFrameFriendly()) ? window.parent.innerHeight : window.innerHeight;
         } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
            //IE 6+ in 'standards compliant mode'
            myWidth = (this.iFrameFriendly()) ? window.parent.document.documentElement.clientWidth : document.documentElement.clientWidth;
            myHeight = (this.iFrameFriendly()) ? window.parent.document.documentElement.clientHeight : document.documentElement.clientHeight;
         } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
            //IE 4 compatible
            myWidth = (this.iFrameFriendly()) ? window.parent.document.body.clientWidth : document.body.clientWidth;
            myHeight = (this.iFrameFriendly()) ? window.parent.document.body.clientHeight : document.body.clientHeight;
         }
         return [myWidth, myHeight];
      },
      iFrameFriendly: function () {
         if (top != self) {
             try {
                window.frameElement.style.border = "none"; 
                return true;
             } catch (e) {
                 return false;
             }
         } else {
            return false; 
         }
      },
      countMouseOver: function () {
		 var eType = this.is_touch_device() ? "Touch-Start" : "Mouse-In";
         if (this.msOff) {
            this.usrMsOvr++;
            if (this.usrMsOvr <= this.mouseInMax) {
               this.eventsAgg(eType, 1);
               this.eventsAgg("Interactions", 1);
            }
            this.mouse_hover_start = new Date();
         }
         this.msOn = true;
         this.msOff = false;
      },
      countMouseOut: function () {
		 var eType = this.is_touch_device() ? "Touch-End" : "Mouse-Out";
		 var timeType = this.is_touch_device() ? "Touch-Time" : "Mouse-Hover-Time";
         var hover_time = this.hoverTime();
         var mouse_hover = hover_time > this.mouseHoverTimeMax ? this.mouseHoverTimeMax : hover_time;
         this.usrMsOut++;
         if (this.usrMsOut <= this.mouseOutMax) {
            this.eventsAgg(timeType, mouse_hover);
            this.eventsAgg(eType, 1);
            this.eventsAgg("Interactions", 1);
         }
         this.msOff = true;
         this.msOn = false;
      },
      doAuto: function () {
         var varLength = 2000, that = this;
         if (this.auto && (this.retDelay > 0)) {
            setTimeout(function() { that.autoOpen(that)}, this.exDelay);
            setTimeout(function() { that.autoClose(that)}, (this.exDelay + this.retDelay));
         };
         if(this.toTestVisibility || this.visibility){ // JSON  {toTestVisibility:true} or Template-based
             this.visibility = true;
             setTimeout(function () { that.testVisibility(that.mpBanner); }, varLength); 
        }
      },
      autoOpen: function (that) {
         if (!that.stopper) {
            that.mojo_action(1);
            that.eventsAgg("Auto-Expand", 1);
            that.expand_start_time = new Date();
         }
      },
      autoClose: function (that) {
         if (!that.stopper) {
            that.mojo_action(-1);
            var countMouse = "";
            if (that.msOn == true) {
               that.countMouseOut();
            }
            that.expand_end_time = new Date();
            var expandTime = that.expandTime();

            that.eventsAgg("Auto-Close", 1);
            that.eventsAgg("Expand-Time", expandTime);
         }
      },
      hoverTime: function () {
         if (this.mouse_hover_start > 0) {
            this.usrMsHvr = (new Date() - this.mouse_hover_start) / 1000;
            return (new Date() - this.mouse_hover_start) / 1000;
         } else {
            return false;
         }
      },
      expandTime: function () {
         if (this.expand_start_time > 0) {

            var expandTime = (this.expand_end_time - this.expand_start_time) / 1000;
            if (expandTime > this.expandTimeMax) expandTime = this.expandTimeMax;
            return expandTime;
         } else {
            return false;
         }
      },
      mojo_animate: function (y) {},
      animV: function (y) {},
      animH: function (y) {},
      eventsAgg: function (nm, vl) {
         if (nm in this.eventsObj) {
            this.eventsObj[nm] += parseFloat(vl);
         } else {
            this.eventsObj[nm] = parseFloat(vl);
         }
      },
      isEmpty: function (obj) {
         for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) return false;
         }
         return true;
      },
      buildEvents: function (that) {
         var myString = "";
         if (!that.isEmpty(that.eventsObj)) {
            for (var report in that.eventsObj) {
               myString += "&" + escape(report) + "=" + escape(that.eventsObj[report]);
            }
            myString = myString.substring(1, myString.length); // strip off leading ampersand
            var mpt = Math.random().toFixed(4).replace(/\./, '');
            that.rm.src = that.rmURL() + myString + '&mpt=' + mpt;
            that.eventsObj = {};
         }
      },
      reportEvents: function () {
         var that = this, reportInterval = setInterval(function() {
		   that.buildEvents(that);
	     }, 1000);
      },
      mojo_event: function (rmTag, rmVal, isAuto) {
         if (!rmTag || rmTag == null) {
            return true;
         }
         var usrInter = "";
         if (!isAuto) {
            this.usrInteractions++;
            if (this.usrInteractions < this.interactionsMax + 1) {
                this.eventsAgg("Interactions", 1);
            }
         }
         if (!rmVal || rmVal == null) rmVal = 1;
         var mpt = Math.random().toFixed(4).replace(/\./, '');
         this.eventsAgg(rmTag,rmVal);
      },
      mojo_hide: function () {
         this.mojo_action(-1);
         this.stopper = true;
         this.expand_end_time = new Date();
         var expandTime = this.expandTime();
         this.eventsAgg('Manual-Close', 1);
         this.eventsAgg('Expand-Time', expandTime);
         this.eventsAgg('Interactions', 1);
         if (this.msOn) this.countMouseOut();
      },
      mojo_show: function () {
         this.mojo_action(1);
         this.usrExps++;
         if (this.usrExps < this.expandNMax + 1) {
            this.eventsAgg('Expand' + this.usrExps, 1);
            this.eventsAgg('Interactions', 1);
         }
         this.stopper = true;
         this.expand_start_time = new Date();
      },
      mojo_action: function (y) { /* animate is not yet enabled. This function is called by mojo_hide and mojo_show. */
         if (this.animate == true) {
            this.mojo_animate(y)
         } else {
            if (this.single == true) {
               this.positionParentLayer(y > 0);
            } else {
               this.mojo_overlay((y > 0) ? 'set' : 'reset');
            }
         };
      },
      mojo_overlay_position: function (which, _expandready) {
         _expandready ? this.expand_ready = true : this.expand_ready = this.expand_ready;
         if (this.expand_ready) {
            try {
               switch (which) {
                  case "set":
                     this.mpExpand.innerHTML = this.expand_code();
                     this.mpBanner.innerHTML = "";
                     this.mpExpand.style.display = "block";
                     this.mpBanner.style.display = "none";
                     if (this.pageImpact != 2) { this.mpBanner.parentNode.style.height = this.h2 + 'px'; }
                     if (this.iFrameFriendly() && !window.inDapIF && this.type != "html") {
                        window.frameElement.style.height = this.h2 + 'px';
                        window.frameElement.style.width = this.w2 + 'px';
                     }
                     break;
                  case "reset":
                     this.mpBanner.innerHTML = this.banner_code();
                     this.mpExpand.innerHTML = "";
                     this.mpExpand.style.display = "none";
                     this.mpBanner.style.display = "block";
                     if (this.pageImpact != 2) { this.mpBanner.parentNode.style.height = this.h1 + 'px'; }
                     if (this.iFrameFriendly() && !window.inDapIF && this.type != "html") {
                        window.frameElement.style.height = this.h1 + 'px';
                        window.frameElement.style.width = this.w1 + 'px';
                     }
                     break;
               }
               return true;
            } catch (err) {
               return false;
            }
         } else {
            if (this.timer) {
               window.clearTimeout(this.timer);
            }
            window.setTimeout("window.mojoArray['mojo" + this.mpcrid + "'].mojo_overlay_position('" + which + "','true')", this.timerInterval);
         }
      },
      mojo_overlay: function (which) {
         /* Called by mojo_hide and mojo_show: sets the visibility of expand layer to true or false */
         if (this.mpExpand == undefined) {
            this.asynchLoadedOverlay(which);
         } else {
            this.mojo_overlay_position(which);
         }
      },
      asynchLoadedOverlay: function (which, obj) {
         this.pinDiv(this.mpExpand);
         this.expand_ready = true;
         this.mojo_overlay_position(which);
      },
      createBannerLayer: function () {
         this.includeJSON();
         this.createDiv();
         this.writeDiv();
         if (!this.isSingle()) this.createXPandLayer();
         this.reportEvents();
         this.doAuto();
         /*
   This line is responsible for measuring the viewed area in the browser.
      this.testVisibility(this.mpBanner);
*/
      },
      find_ad_tag: function() {
         try{
            this.mppid = this.get_mppid();
            var tagType = (this.iFrameFriendly()) ? "iframe" : "script";
            if (this.mppid != null) {
                var tags = (tagType == "script") ? window.document.getElementsByTagName(tagType) : window.parent.document.getElementsByTagName(tagType);
                for (var i=0; i < tags.length; i++) {
                    if (tags.item(i).src){
                      if (tags.item(i).src.match(this.mppid)) {
                        return tags.item(i);  
                      }
                    }
                }
            }
            
         } catch (e) {
             return null;
         }
         return null;
      },
	  html_iframe: function(who) {
		var mydiv = document.createElement("div");
		mydiv.style.position = "relative";
		mydiv.style.height = this.h1 + "px";
		mydiv.style.width = this.w1 + "px";
		mydiv.style.zIndex = this.zIndex;
		mydiv.style.margin = "auto";
		this.mpBanner = document.createElement("iframe");
		this.mpBanner.style.height = this.h1 + "px";
		this.mpBanner.style.width = this.w1 + "px";
		this.mpBanner.style.border = "none";
		this.mpBanner.style.backgroundColor = "transparent";
		this.mpBanner.style.margin = "0px";
		this.mpBanner.style.padding = "0px";
		this.mpBanner.style.position = "absolute";
		this.mpBanner.style.zIndex = this.zIndex;
		this.mpBanner.scrolling = "no";
		this.mpBanner.allowTransparency = true;
		this.mpBanner.frameBorder = 0;
		this.mpBanner.height = this.h1;
		this.mpBanner.width = this.w1;
		this.mpBanner.id = who;
		if (this.delayed) {
			if (document.readyState === "complete")	this.mpBanner.src = this._asset;
			else {
			  var that = this;
			  var localTimer = setTimeout(
			    function() {
				  that.mpBanner.src = that._asset;	
				}
			  , this.delay);
			}
		}
		mydiv.appendChild(this.mpBanner);
		return mydiv;
	  },
      get_mppid: function() {
              var regexx = /\d+-\d+-\d+-\d+/;
              return (regexx.test(this.mpck) ? this.mpck.match(/\d+-\d+-\d+-\d+/) : null);
      },
      is_touch_device: function() {
         return ('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0); // works on ie10
      },
      getMyParent: function () {
         return this.mpBanner.parentNode;
      },
      includeJSON: function () {
         if (this.JSON != 0) {
            for (override in this.JSON) {
               this[override] = this.JSON[override];
            }
         } else {
            return false;
         }
      },
      /* 
    The following mechanism appends the window.onload event
   so that we, too can register functions for window.onload.
   This stems from the need to track a Display-Time metric.
   */
      addLoadEvent: function (func) {
         var currentOnLoad = window.onload;
         if (typeof window.onload != 'function') {
            window.onload = func;
         } else {
            window.onload = function () {
               if (currentOnLoad) {
                  currentOnLoad();
               }
               func();
            }

         }
      },
      /*
      The following function handles appending the page unload
     with a firing of the completed Display-Time metric
   */
      getXMLObj: function () {
         var xmlhttp = false;
         try {
            xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
         } catch (e) {
            try {
               xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (E) {
               xmlhttp = false;
            }
         }
         if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
            try {
               xmlhttp = new XMLHttpRequest();
            } catch (e) {
               xmlhttp = false;
            }
         }
         if (!xmlhttp && window.createRequest) {
            try {
               xmlhttp = window.createRequest();
            } catch (e) {
               xmlhttp = false;

            }
         }
         return (xmlhttp);
      },
      mojo_metric_display_time: function (which) {
         if (which == "start") {
            this.addLoadEvent(function () {

               this.display_start_time = new Date();
            })
         }
      },
      positionXPandLayer: function (open) {
         this.mpExpand.style.position = "absolute";
         if (this.single) {
            if (open) {
               this.mpExpand.style.left = "0px";
               this.mpExpand.style.top = "0px";
            } else {
               this.mpExpand.style.left = (this.hdif() * -Math.max(0, this.hexdir)) + 'px';
               this.mpExpand.style.top = (this.vdif() * -Math.max(0, this.vexdir)) + 'px';
            }
         } else {
            this.mpExpand.style.left = "0px";
            this.mpExpand.style.top = "0px";
         }
      },
      positionParentLayer: function (open) {
         if (open) {
            this.mpBanner.style.height = this.h2 + 'px';
            this.mpBanner.style.width = this.w2 + 'px';
            if (this.pageImpact != 2) {
               this.mpBanner.parentNode.style.height = this.h2 + 'px';
               this.mpBanner.parentNode.style.width = this.w2 + 'px';
            }
            if (this.iFrameFriendly() && !window.inDapIF && this.type != "html") {
               window.frameElement.style.height = this.h2 + 'px';
               window.frameElement.style.width = this.w2 + 'px';
            }
         } else {
            this.mpBanner.style.height = this.h1 + 'px';
            this.mpBanner.style.width = this.w1 + 'px';
            if (this.pageImpact != 2) {
               this.mpBanner.parentNode.style.height = this.h1 + 'px';
               this.mpBanner.parentNode.style.width = this.w1 + 'px';
            }
            if (this.iFrameFriendly() && !window.inDapIF && this.type != "html") {
               window.frameElement.style.height = this.h1 + 'px';
               window.frameElement.style.width = this.w1 + 'px';
            }
         }
      },
      createXPandLayer: function (_xmlHTTPObj) {
         this.mpExpand = document.createElement("div");
         var myParent = this.getMyParent();
         myParent.appendChild(this.mpExpand);
         this.mpExpand.id = "mpExpand" + this.mpcrid;
         this.mpExpand.style.zIndex = this.zIndex;
         this.mpExpand.style.position = "absolute";
         this.mpExpand.style.display = "none";
		 var that = this;
         this.mpExpand.onmouseover = function() { that.countMouseOver();}
         this.mpExpand.onmouseout = function() { that.countMouseOut(); }
         this.pinDiv(this.mpExpand);
      },
      renderContent: function () { /* This determines if pages should render or be rerouted to a bridge file. */
         var src = "";
         var _src = "";
         var _bridge = "bridge=";
         for (var i = 0; i < document.getElementsByTagName("script").length; i++) {
            try {
               _src = document.getElementsByTagName("script").item(i).src;
            } catch (err) {} /* This tests each script element to find the one that contains the bridge file argument */
            if ((_src.indexOf(_bridge) != -1) && (this.mpcrid.indexOf('15383652') != -1)) {
               this.myParent = document.getElementsByTagName("script").item(i).parentNode;
               var start = _src.indexOf(_bridge) + _bridge.length;
               _src = unescape(_src.substr(start));
               var end = (_src.indexOf("&") > 5) ? _src.indexOf("&") : _src.length;
               var _test = _src.substring(0, end); /* suffix is used to append variables contained within the Script SRC to the redirected URL */
               var suffix = (document.getElementsByTagName("script").item(i).src.indexOf("?") != -1) ? "&" + document.getElementsByTagName("script").item(i).src.substring(
               document.getElementsByTagName("script").item(i).src.indexOf("?") + 1, document.getElementsByTagName("script").item(i).src.length) : "";
               try {
                  var tURL; /* theReferer is used to ensure the correct publisher domain is passed through multiple URLS for bridge file testing */
                  if (theReferer.indexOf("<") != 0) {
                     tURL = theReferer;
                  } else {
                     tURL = document.referrer;
                     suffix += "&theReferer=" + document.referrer;
                  }
                  var _a = tURL.substr(tURL.indexOf("//") + 2);
                  var _b = tURL.substring(0, tURL.length - (_a.substr(_a.indexOf("/")).length));
                  var __bridge = (_test.indexOf(_b) == -1) ? (_b + _test) : _test;
                  tURL = location.href;
                  _a = tURL.substr(tURL.indexOf("//") + 2);
                  _b = tURL.substring(0, tURL.length - (_a.substr(_a.indexOf("/")).length)); /* If the current URL contains the bridge file argument (or theReferer + the bridge file), the page is created. */
                  if ((location.href.indexOf(_test) == 0) || (location.href.indexOf(_b + _test) == 0)) {
                     src = _src;
                     this.createBannerLayer();
                  } else {
                     if (location.href.indexOf(__bridge) != 0) {
                        try { /* If the current URL is at the same domain as the bridge file, it is rendered without redirect. */

                           if (window.top == window.self) {
                              src = _src;
                              this.createBannerLayer();
                           } else {
                              try { /* If the current URL is at the same domain as the bridge file, it is rendered without redirect. */
                                 if (window.location.href.indexOf(theReferer) != -1) {
                                    src = _src;
                                    this.createBannerLayer();
                                 } else { /* If the current URL is not at the same domain as the bridge file, it is redirected, with the location arguments. */
                                    src = _src;
                                    var testLoc = __bridge + ((location.search.length > 0) ? unescape(location.search) : "?") + "&dontCount=1" + suffix;
                                    location.href = testLoc;
                                 }
                              } catch (err) { /* If location test fails, the current URL is not at the same domain as the bridge file. It is redirected, with the location arguments. */
                                 src = _src;
                                 location.href = __bridge + ((location.search.length > 0) ? unescape(location.search) : "?") + "&dontCount=1" + suffix;
                                 //         debugger;
                              }
                           }
                        } catch (err) {
                           /* 
                     If location test fails, the current URL is not at the same domain as the bridge file. 
                     It is redirected, with the location arguments. 
                     */
                           src = _src;
                           location.href = __bridge + ((location.search.length > 0) ? unescape(location.search) : "?") + "&dontCount=1" + suffix;
                        }

                     } else { /* If the current URL is not at the same domain as the bridge file, it is redirected, with the location arguments. */
                        src = _src;

                        location.href = __bridge + ((location.search.length > 0) ? unescape(location.search) : "?") + "&dontCount=1" + suffix;
                     }
                  }
               } catch (err) { /* If an exception occurs, the assumption is that it requires redirection. */
                  src = _src;
                  //     location.href=__bridge + ((location.search.length>0)? unescape(location.search) : "?") + "&dontCount=1" + suffix;
                  this.createBannerLayer();
                  //     debugger;
               }
            }
         }
         if (src.length == 0) {
            this.createBannerLayer();
         }
         this.setCookie("seen", "true", 1);
      },
      postMessage: function (message, target, target_url) {
         if (!target_url) target_url = '*';


         target = target || parent; // default to parent
         if (window['postMessage']) {
            // the browser supports window.postMessage, so call it with a targetOrigin
            // set appropriately, based on the target_url parameter. (or wildcard...)
            //target['postMessage'](message, target_url.replace( /([^:]+:\/\/[^\/]+).*/, '$1'));
            target_url = target_url.replace(/([^:]+:\/\/[^\/]+).*/, '$1');
            target['postMessage'](message, target_url);
         }
      },
      receiveMessage: function (callback, source_origin) {

         if (window['postMessage']) {
            // bind the callback to the actual event associated with window.postMessage
            var attached_callback;
            if (callback) {
               attached_callback = function (e) {
                  callback(e);
               };
            }
            if (window['addEventListener']) {


               window[callback ? 'addEventListener' : 'removeEventListener']('message', attached_callback, !1);
            } else {
               window[callback ? 'attachEvent' : 'detachEvent']('onmessage', attached_callback);
            }
         }
      },
      /* 
   The following mechanism appends the window.onload event
   so that we, too can register functions for window.onload.
   This stems from the need to track a Display-Time metric.
*/
      addLoadEvent: function (func) {
         var currentOnLoad = window.onload;
         if (typeof window.onload != 'function') {
            window.onload = func;
         } else {
            window.onload = function () {
               if (currentOnLoad) {
                  currentOnLoad();
               }
               func();
            }

         }
      },
      /*
   The following handles the visibility testing using class variables for 
   percentage of asset, 
   time in milliseconds,
   test interval,
   total time test
*/
      testVisibility: function (_whichElem, _totalTime, _pctSeen, _timeViewed) {
         if (this.visibility == true) {
            var whichElem, _me = this;
            var testInterval = 1000;
            var totalTime;
            var timeViewed;
            (!_totalTime) ? totalTime = 0 : totalTime = Math.round(_totalTime);
            (!_timeViewed) ? timeViewed = 0 : timeViewed = Math.round(_timeViewed);
            totalTime += testInterval;
            if (typeof (_whichElem) == "string") {
               whichElem = document.getElementById(_whichElem);
            } else {
               whichElem = _whichElem;
            }
            var aW, aH;
            try {
                  if (window.getComputedStyle) {
                     aW = parseInt(window.getComputedStyle(whichElem).width);
                     aH = parseInt(window.getComputedStyle(whichElem).height);
                     if (aH < 1) {
                        var myFunc = function () {
                           _me.testVisibility(whichElem.childNodes ? whichElem.childNodes[0] : whichElem);
                        }
                        if (totalTime < testInterval) {
                           _me.testElem((whichElem.childNodes ? whichElem.childNodes[0] : whichElem), totalTime, timeViewed, testInterval);
                        } else {
                           setTimeout(myFunc, testInterval);
                        }
                     } else {
                        _me.testElem(whichElem, totalTime, timeViewed, testInterval);
                     }
                  } else {
                     this.mojo_event('viewable-impressions-failure', "1", true); // ,"m", true); // measure
                  }
            } catch (oops) {
               this.mojo_event('viewable-impressions-failure', "1", true); // ,"e", true); // error
            }
         } else {
            this.mojo_event('viewable-impressions-failure', "1", true); // ,"v", true); // visibility
         }
      },
      testElem: function (whichElem, totalTime, timeViewed, _testInterval) {
         var aW, aH;
         //   var pctThreshold=.5;
         //   var timeThreshold=1000;
         (this.mmPct.length>0) ? this.pctThreshold = (this.mmPct/100) : this.pctThreshold = .5;
         (this.mmTime.length>0) ? this.timeThreshold = (this.mmTime * 1000) : this.timeThreshold = 1000;
         var totalTimeThreshold = 60 * 60 * 1000; // One hour
         if (window.getComputedStyle) {
            try {
               aW = parseInt(window.getComputedStyle(whichElem).width);
               aH = parseInt(window.getComputedStyle(whichElem).height);
            } catch (oops) {
               if (console && console.log) {
                  console.log("oops=" + oops);
               }
            }
         }
         if (!(totalTime > totalTimeThreshold)) {
            var _me = this;
            var myOBJ = window["currentScreen15383652"]();
            var props = "";
            if (whichElem.getBoundingClientRect) {
               try{
                 var rect, x, y, w, h;
                 if (window.top != window.self) {
                    var computeFrameOffset = function(win, dims) {
                        if (typeof dims === 'undefined') {
                            var dims = { top: 0, left: 0 };
                        }
                        var frames = win.parent.document.getElementsByTagName('iframe');
                        var frame;
                        var found = false;
                        for (var i=0, len=frames.length; i<len; i++) {
                            frame = frames[i];
                            if (frame.contentWindow == win) {
                                found = true;
                                break;
                            }
                        }
                        if (found) {
                            var _rect = frame.getBoundingClientRect();
                            dims.left += _rect.left;
                            dims.top += _rect.top;
                            if (win !== window.top) {
                                computeFrameOffset(win.parent, dims);
                            }
                        }
                        return dims;
                    };
                    rect = whichElem.getBoundingClientRect();
                    x = computeFrameOffset(window.self).left;
                    y = computeFrameOffset(window.self).top;
                    w = rect.right - rect.left;
                    h = rect.bottom - rect.top;
                 }else{
                     rect = whichElem.getBoundingClientRect();
                     x = rect.left;
                     y = rect.top;
                     w = rect.right - rect.left;
                     h = rect.bottom - rect.top;
                 }
               }catch(oops){
                  if(console && console.log){
                      console.log("problem accessing parent window for " + this.mpcrid);
                  }
               }
            }
            var wMult = Math.max(Math.min(1, (myOBJ.w - x) / aW),0);
            var hMult = Math.max(Math.min(1, (myOBJ.h - y) / aH),0);
            var __pctSeen = (wMult * hMult);
            if (!(isNaN(__pctSeen)) && (__pctSeen > this.pctThreshold)) {
               if (timeViewed < this.timeThreshold) {
                  var myFunc = function () {
                     _me.testVisibility(whichElem, totalTime, (isNaN(__pctSeen) ? 0 : __pctSeen), (timeViewed + _testInterval));
                  }
                  if (totalTime > -1) {
                     setTimeout(myFunc, _testInterval);
                  }
               } else {
                  this.mojo_event('viewable-impressions', "1", true);
               }
            } else {
               var myFunc = function () {
                  _me.testVisibility(whichElem, totalTime);
               }
               if (totalTime > 0) {
                  setTimeout(myFunc, _testInterval);
               }
            }
         } else {
            this.mojo_event('viewable-impressions-failure', "1", true); // "t", true); // time
         }
      }
   }

   if (!window.getComputedStyle) {
      window.getComputedStyle = function (el) {
         return (el.currentStyle)
      }
   }

   if (typeof (_mojoArray) == "undefined") {
      var _mojoArray = new Array();
   }
   try {
      if (window.mojoArray == undefined) {
         window.mojoArray = new Array();
      }
      _mojoArray = window.mojoArray;

      window['mojo_show15383652'] = function () {
         mojo_show('15383652');
      }
      window['mojo_hide15383652'] = function () {
         mojo_hide('15383652');
      };
      window['mojo_event15383652'] = function (rmTag, rmVal, isAuto) {
         mojo_event('15383652', rmTag, rmVal, isAuto)
      };
   } catch (err) {
      // alert('failed to declare tokens');
   }

   window['mojopreloader' + '15383652'] = {
      mpcrid: '15383652',
      mpvc: 'http://adclick.g.doubleclick.net/aclk%253Fsa%253DL%2526ai%253DB5we89Xg7UpCEH--F6wGXs4HwCsyUtZQEAAAAEAEgADgAWNySn6ZlYMnGqYvApNgPggEXY2EtcHViLTM2MTcxNDM1NTUzMDc4NDSyARR3d3cuaGlnaHNub2JpZXR5LmNvbboBCzAwZ2ZwX2ltYWdlyAEJ2gFaaHR0cDovL3d3dy5oaWdoc25vYmlldHkuY29tLzIwMTMvMDkvMTMvc3RvbmUtaXNsYW5kLWZhbGx3aW50ZXItMjAxMy1jYW1vdWZsYWdlLWNvbGxlY3Rpb24vmAKowwHAAgLgAgDqAhw1MjAyL2Ntbl9oaWdoc25vYmlldHkvc3lzdGVt-AKB0h6QA-ADmAPgA6gDAeAEAaAGFg%2526num%253D0%2526sig%253DAOD64_3Z3_dlYDbGJe4hXvI6P1RjXpW9uQ%2526client%253Dca-pub-3617143555307844%2526adurl%253D',
      mpck: (window.location.protocol == 'https:' ? 'https://' : 'http://') + 'adfarm.mediaplex.com%2Fad%2Fck%2F10341-184006-22437-2%3Fmpt%3D2029543780',
      assetRoot: (window.location.protocol == 'https:' ? 'https://secure.img-cdn.mediaplex.com/0/' : 'http://img-cdn.mediaplex.com/0/'),
      _swf1: '10341/Complex_aw13_rudekid_300x250_500x250_mer_apm.swf',
      _swf2: '10341/Complex_aw13_rudekid_300x250_500x250_mer_apm.expand.swf',
      _gif1: '10341/Complex_aw13_rudekid_300x250_500x250_mer_apm.jpg',
      _gif2: '',
      _flv: '10341/Complex_aw13_rudekid_300x250_500x250_mer_apm.flv',
      _asset: '',
      type: '',
      flvars: false,
      eventsObj: new Object(),
      mpExpand: document.createElement('div'),
      enhanced: '',
      enhancedURL: (window.location.protocol == 'https:' ? 'https:' : 'http:') + '//www.mediaplex.com/ad-choices', // change to 
      originalX: 0,
      originalY: 0,
      zIndex: 4999 ,
      hOffset: 0,
      vOffset: 0,
      rmType: 1,
      w1: parseInt('300'),
      w2: parseInt('500'),
      h1: parseInt('250'),
      h2: parseInt('250'),
      pgovrly: false,
      pushdwn: false,
      animate: false,
      auto: false ,
      cookieName: 'seen',
      exDelay: '0' * 1000,
      retDelay: '0' * 1000,
      expSp: '0',
      retSp: '0',
      mfV: '9',
      winMd: 'transparent',
      winMdEx: 'transparent',
      hexdir: 0,
      vexdir: 0,

      _mouseout: false,
      rm: new Image(),
      expConst: { // the following denote intended expand directions
         top: Math.pow(2, 0),
         bottom: Math.pow(2, 1),
         left: Math.pow(2, 2),
         right: Math.pow(2, 3)
      },
      expandFlags: [ 4 ],
      singleAssetOrientConst: { // For single-asset expands, the stage size is always larger than the viewing window
         top: Math.pow(2, 0),
         bottom: Math.pow(2, 1),
         left: Math.pow(2, 2),
         right: Math.pow(2, 3)
      },
      SAOFlags: [ 8 ],
      pageImpact: 2 , // 0 is none, 1 is Push, 2 is overlay 
      overflowOverride: 0 ,
      JSON: {
_swf1: "10341/aw13_rudekid_300x250-500x250_expand_base_081413.swf",
_swf2: "10341/aw13_rudekid_500x250_expand_rich_081213.swf"
} ,
      mojoSeconds: 0,
      reportDisplayTime: true,
      displayTimeMax: 120,
      expandTimeMax: 120,
      mouseHoverTimeMax: 120,
      expandNMax: 10,
      mouseInMax: 10,
      mouseOutMax: 10,
      interactionsMax: 99,
      usrMsOvr: 0,
      usrMsOut: 0,
      usrMsHvr: 0,
      usrInteractions: 0,
      msOn: false,
      msOff: true,
      visibility: false,
      mmPct: '<mpVPct/>',
      mmTime: '<mpVTime/>'
   };

   /*
Class Definition Section:
   The _mojo object as class contains methods for determining the FlashVars
   string, creating and rendering CSS, and auto and animation functions.
*/

   function _mojo(whichMojo) {
      for (var z in whichMojo) {
         this[z] = whichMojo[z];
      }
      this.single = this.isSingle();
   };
   _mojo.prototype = new mojoBase();
   _mojo.prototype.constructor = _mojo;
   _mojoArray['mojo' + '15383652'] = new _mojo(window['mojopreloader' + '15383652']);

   /*
Static Functions and Methods Section:
   Legacy functions are slightly modified to pass the MPCRID of
   the creative as the first parameter. The first five have
   little change from previous mediaplex code. Much of this 
   should be further moved into Obect-Oriented Structures.
*/

   function mojo_now() {
      return new Date().getTime();
   }

   function mojo_event(whichMojo, rmTag, rmVal, isAuto) {
      if (whichMojo == undefined) whichMojo = '15383652';
      _mojoArray['mojo' + whichMojo].mojo_event(rmTag, rmVal, isAuto);
   }

   function mojo_buckets(whichMojo, d) {
      if (whichMojo == undefined) whichMojo = '15383652';
      _mojoArray['mojo' + whichMojo].mojo_buckets(d);
   }

   function mojo_hide(whichMojo) {
      if (whichMojo == undefined) whichMojo = '15383652';
      _mojoArray['mojo' + whichMojo].mojo_hide();
   }

   function mojo_show(whichMojo) {
      if (whichMojo == undefined) whichMojo = '15383652';
      _mojoArray['mojo' + whichMojo].mojo_show();
   }

   function mojo_action(whichMojo, y) {
      if (whichMojo == undefined) whichMojo = '15383652';
      _mojoArray['mojo' + whichMojo].mojo_action(y)
   }
   function mojo_clickthru(whichMojo) {
      if (whichMojo == undefined) whichMojo = '15383652';
      _mojoArray['mojo' + whichMojo].mojo_clickthru();
   }
   function mojo_clickTag(whichMojo) {
      if (whichMojo == undefined) whichMojo = '15383652';
      _mojoArray['mojo' + whichMojo].mojo_clickTag();
   }
window["currentScreen15383652"]=function() {
      var _win;
      if (window.top != window.self) {
          _win=window.top;
      }else{
          _win=window.self;
      }
      var myWidth = 0,
         myHeight = 0;
      try{
             if (typeof (window.innerWidth) == 'number') {
                //Non-IE
                myWidth = _win.innerWidth;
                myHeight = _win.innerHeight;
             } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
                //IE 6+ in 'standards compliant mode'
                myWidth = _win.document.documentElement.clientWidth;
                myHeight = _win.document.documentElement.clientHeight;
             } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
                //IE 4 compatible
                myWidth = _win.document.body.clientWidth;
                myHeight = _win.document.body.clientHeight;
             }
      }catch(oops){
          if(console && console.log){console.log("Attempted window.top access.")}
      }
      return ({
         w: myWidth,
         h: myHeight
      })
   }

window["renderContent15383652"]=function() {
      _mojoArray['mojo15383652'].mpcrid="15383652";
      if ( top != self ) {
        _mojoArray['mojo15383652'].renderContent();
      } else {
        _mojoArray['mojo15383652'].createBannerLayer();
      }
   }

   try {
      window.parent.mojo_event = mojo_event;
      window.parent.mojo_buckets = mojo_buckets;
      window.parent.mojo_hide = mojo_hide;
      window.parent.mojo_show = mojo_show;
      window.parent.mojo_action = mojo_action;
      window.parent.mojo_clickthru = mojo_clickthru;
      window.parent.mojo_clickTag = mojo_clickTag;
   } catch (e) {
      //console.error("mojo window parent assignment error: " + e);
   }

   /**
    * @constructor Animate
    * @param {HTMLElement} el the element we want to animate
    * @param {String} prop the CSS property we will be animating
    * @param {Object} opts a configuration object
    * object properties include
    * from {Int}
    * to {Int}
    * time {Int} time in milliseconds
    * callback {Function}
    */
   /**
  * Usage Example:
  *
  * if (Animate.canTransition) {
  *   el.style.webkitTransition = 'opacity 0.5s ease-out';

  *   el.style.opacity = 1;
  * }
  * new Animate(el, 'opacity', {
  *   from: 0,
  *   to: 1,
  *   time: 500,
  *   callback: done
  * }).start();
  *
  *
  */
   function Animate(el, prop, opts) {
      this.el = el;
      this.prop = prop;
      this.from = (typeof opts.from === "function") ? opts.from() : opts.from;
      this.to = (typeof opts.to === "function") ? opts.to() : opts.to;
      this.time = opts.time;
      this.callback = opts.callback;
      this.animDiff = this.to - this.from;
   }
   /**
    * @private
    * @param {String} val the CSS value we will set on the property
    */
   Animate.prototype._setStyle = function (val) {
      switch (this.prop) {
         case 'opacity':
            this.el.style[this.prop] = val;
            this.el.style.filter = 'alpha(opacity=' + val * 100 + ')';
            break;
         default:
            this.el.style[this.prop] = val + 'px';

            break;
      };
   };
   /**
    * @private
    * this is the tweening function
    */
   Animate.prototype._animate = function () {
      var that = this;
      this.now = new Date();
      this.diff = this.now - this.startTime;

      if (this.diff > this.time) {
         this._setStyle(this.to);
         if (this.callback) {
            this.callback.call(this);
         }
         clearInterval(this.timer);
         return;
      }
      this.percentage = (Math.floor((this.diff / this.time) * 100) / 100);
      this.val = (this.animDiff * this.percentage) + this.from;
      this._setStyle(this.val);
   };
   /**
    * @public
    * begins the animation
    */
   Animate.prototype.start = function () {
      var that = this;
      this.startTime = new Date();
      this.timer = setInterval(function () {
         that._animate.call(that);
      }, 4);
   };
   /**
    * @static
    * @boolean
    * allows us to check if native CSS transitions are possible
    */
   Animate.canTransition = function () {
      var el = document.createElement('foo');
      el.style.cssText = '-moz-transition: all .5s linear;-webkit-transition: all .5s linear;-o-transition: all .5s linear;';
      return !!(el.style.MozTransitionProperty || el.style.webkitTransitionProperty || el.style.oTransitionProperty);
   }();
window["renderContent15383652"]();


