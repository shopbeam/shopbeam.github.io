var adTagOptions = {"creatives":{"295271":{"landingPages":{"1":"http://www.amazon.com/The-Lost-Sisterhood-A-Novel/dp/0345536223","2":"http://www.barnesandnoble.com/w/the-lost-sisterhood-anne-fortier/1115557859?ean=9780345536228","3":"https://itunes.apple.com/us/book/the-lost-sisterhood/id721355851?mt=11","4":"http://www.indiebound.org/book/9780345536228","":"http://www.scribd.com/doc/204364688/The-Lost-Sisterhood-by-Anne-Fortier-Excerpt"},"displayUrl":null,"macros":{"placementId":["SPONGECELL_PLACEMENT_ID"],"siteId":["%%TTD_SITE%%","SPONGECELL_SITE_ID"],"activityPixel":["SPONGECELL_ACTIVITY_PIXEL"]},"flashHTML":"<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" height=\"250\" id=\"spongecellCreative295271-**iid**\" width=\"300\">\n<param name=\"movie\" value=\"**http**://**creative_resource_host**/randomhouse/q1/lostsisterhood/v4.30.0/bin/RectangleGrid.swf?r=1393524252\">\n<param name=\"flashvars\" value=\"**flashvars**\">\n<param name=\"allowScriptAccess\" value=\"always\">\n<param name=\"allowNetworking\" value=\"all\">\n<param name=\"allowFullScreen\" value=\"true\">\n<param name=\"wmode\" value=\"opaque\">\n<param name=\"quality\" value=\"high\">\n<param name=\"salign\" value=\"tl\">\n<param name=\"base\" value=\".\">\n<!--[if !IE]>-->\n<object allowFullScreen=\"true\" allowNetworking=\"all\" allowScriptAccess=\"always\" base=\".\" data=\"**http**://**creative_resource_host**/randomhouse/q1/lostsisterhood/v4.30.0/bin/RectangleGrid.swf?r=1393524252\" height=\"250\" quality=\"high\" salign=\"tl\" type=\"application/x-shockwave-flash\" width=\"300\" wmode=\"opaque\">\n<param name=\"flashvars\" value=\"**flashvars**\">\n</object>\n<!--<![endif]-->\n</object>\n","ie11FlashHTML":"<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" height=\"250\" id=\"spongecellCreative295271-**iid**\" width=\"300\">\n<param name=\"movie\" value=\"**http**://**creative_resource_host**/randomhouse/q1/lostsisterhood/v4.30.0/bin/RectangleGrid.swf?r=1393524252\">\n<param name=\"flashvars\" value=\"**flashvars**\">\n<param name=\"allowScriptAccess\" value=\"always\">\n<param name=\"allowNetworking\" value=\"all\">\n<param name=\"allowFullScreen\" value=\"true\">\n<param name=\"wmode\" value=\"opaque\">\n<param name=\"quality\" value=\"high\">\n<param name=\"salign\" value=\"tl\">\n<param name=\"base\" value=\".\">\n<object data=\"**http**://**creative_resource_host**/randomhouse/q1/lostsisterhood/v4.30.0/bin/RectangleGrid.swf?r=1393524252\" height=\"250\" type=\"application/x-shockwave-flash\" width=\"300\">\n<param name=\"flashvars\" value=\"**flashvars**\">\n<param name=\"base\" value=\".\">\n<param name=\"allowScriptAccess\" value=\"always\">\n<param name=\"allowNetworking\" value=\"all\">\n<param name=\"allowFullScreen\" value=\"true\">\n<param name=\"wmode\" value=\"opaque\">\n<param name=\"salign\" value=\"tl\">\n<param name=\"quality\" value=\"high\">\n</object>\n</object>\n","noflashHTML":"<a href=\"**http**://spongecell.com/api/ad_tags/51215933/clickthrough?creative_id=295271&noflash=true&iid=**iid**&external_placement_id=**placement_id**&external_site_id=**site_id**&anticache=**random**&click_tag=**click_tag**\" target=\"_blank\"><img alt=\"\" border=\"0\" height=\"250\" src=\"**http**://**creative_resource_host**/randomhouse/q1/lostsisterhood/v4.30.0/assets/300x250.jpg\" width=\"300\" /></a>\n","resourceHostDefault":"live.cdn.spongecell.com","resourceHostDefaultSSL":"live-ssl.cdn.spongecell.com","cdnDisabled":false,"width":300,"height":250,"creativeAndAdTagSettings":"actionsType=Rectangle&backupImageUrl=../assets/300x250.jpg&creativeSwfUrl=../assets/300x250.swf&adRevision=1393524252&HeatMap%5Btrack%5D=true","tracking":{"domId":"spongecellCreative295271-**iid**","campaign":{"id":7485},"creative":{"id":295271},"flight":{"id":17461},"placement":{"id":"Lost_300x2_1"},"site":{"id":""},"adTag":{"id":51215933},"hostBaseUrl":"http://analytics.spongecell.com","reportBaseURL":"http://analytics.spongecell.com/ad_tags","reportBaseURLSSL":"https://analytics.spongecell.com/ad_tags","heatmapBaseURL":"http://fire.spongecell.com","trackingDisabled":false,"heatMapTrackingEnabled":true,"pixels":{"impression":null,"engagement":null,"completion":null,"expansion":null}},"weight":1.0}},"adTagId":51215933};
!function(){var n,e;n="undefined"!=typeof global&&null!==global?global:window,e=null!=n.spongecell?n.spongecell:n.spongecell={},e.Broker=function(){function n(){}var r,l,a,o,t,u;return r=null!=e.brokerChannels?e.brokerChannels:e.brokerChannels={},t=null!=e.brokerChannels?e.brokerChannels:e.brokerChannels={},a=function(){return Math.random().toString().replace(/0\./,"")},o=function(n){return t[n]},u=function(n,e){return t[n]=e},l=function(n){var r;return r="call"+n,null==e.callbacks&&(e.callbacks={}),e.callbacks[r]=function(e){return t[n](e)},"spongecell.callbacks."+r},n.registerCallbackFn=function(n){var e;return e=a(),u(e,n),l(e)},n.registerChannels=function(n,l,a){var o,t,u,s,c;e.Console.group("Registering Channels for %s, %o",n,l),t={};for(c in l)s=l[c],o=function(){switch(c){case"debug":return e.DebugChannel;case"feature":return e.FeatureChannel;case"hooks":return e.HooksChannel;case"mraid":return e.MRAIDChannel;case"setup":return e.SetupChannel;case"tracking":return e.TrackingChannel}}(),null!=o&&(e.Console.debug("Initializing Channel: %s with %o",c,s),t[c]=new o(n,s,a));r[n]=t;for(c in t)u=t[c],e.Console.debug("Starting Channel: %s",c),u.start();return e.Console.groupEnd(),t},n.sendOnChannel=function(n,e){var l,a;return l=r[n.iid],null!=l&&(a=l[n.topic],null!=a)?a.send(n,e):void 0},n}()}.call(this);
!function(){var e,t;e="undefined"!=typeof global&&null!==global?global:window,t=null!=e.spongecell?e.spongecell:e.spongecell={},t.Browser=function(){function e(){}return e.isAndroidSupported=function(){return!!/Android ([2].?[3-9].?[0-9]?|[4].?[0-9].?[0-9]?)/.test(navigator.userAgent)},e.isAndroidGingerbread=function(){return!!/Android ([2].?[3-9].?[0-9]?)/.test(navigator.userAgent)},e.isAndroidIceCreamSandwich=function(){return!!/Android ([4].?[0].?[0-9]?)/.test(navigator.userAgent)},e.isAndroidJellyBean=function(){return!!/Android ([4].?[1-3].?[0-9]?)/.test(navigator.userAgent)},e.isIE8=function(){var e;return(null!=(e=$.browser)?e.msie:void 0)&&parseFloat($.browser.version)<9},e.isIE10=function(){var e;return(null!=(e=$.browser)?e.msie:void 0)&&10===parseInt($.browser.version)},e.isIE11=function(){return/Trident\/.*rv:(11.\d+)/.test(navigator.userAgent)},e.isiOS5=function(){var e;return!!(null!=(e=$.os)?e.ios:void 0)&&5===parseInt($.os.version)},e.isMobile=function(){var e,t;return!!(null!=(e=$.os)?e.tablet:void 0)||!!(null!=(t=$.os)?t.phone:void 0)},e.isChrome=function(){return/Chrome/.test(navigator.userAgent)},e.isSafari=function(){return/Safari/.test(navigator.userAgent)},e.supportsSrcdoc=function(){return!this.isSafari()&&!this.isChrome()},e.detectsSrcdoc=function(){return"about:srcdoc"===window.location.href},e}()}.call(this),function(){var e,t,i=[].slice;e="undefined"!=typeof global&&null!==global?global:window,t=null!=e.spongecell?e.spongecell:e.spongecell={},t.Console=function(){function e(){}return e.ENABLED=!1,e.log=function(){var e,t,a;return t=arguments[0],e=2<=arguments.length?i.call(arguments,1):[],this.ENABLED&&window.console?null!=window.console.log.apply?(a=window.console).log.apply(a,[t].concat(i.call(e))):window.console.log(t):void 0},e.debug=function(){var e,a,n,r,s;return a=arguments[0],e=2<=arguments.length?i.call(arguments,1):[],this.ENABLED&&window.console?null!=(null!=(n=window.console.debug)?n.apply:void 0)?(r=window.console).debug.apply(r,[a].concat(i.call(e))):(s=t.Console).log.apply(s,[a].concat(i.call(e))):void 0},e.pad=function(e,t){var i;for(i=e||"";i.length<t;)i+=" ";return i},e.groupCollapsedSupported=function(){var e,t;return null!=(null!=(e=window.console)?null!=(t=e.groupCollapsed)?t.apply:void 0:void 0)},e.group=function(){var e,a,n,r;return a=arguments[0],e=2<=arguments.length?i.call(arguments,1):[],this.ENABLED?this.groupCollapsedSupported()?(n=window.console).groupCollapsed.apply(n,[a].concat(i.call(e))):(r=t.Console).log.apply(r,[a].concat(i.call(e))):void 0},e.groupEnd=function(){var e;return this.ENABLED&&(null!=(e=window.console)?e.groupEnd:void 0)?window.console.groupEnd():void 0},e}()}.call(this),function(){var e,t;e="undefined"!=typeof global&&null!==global?global:window,t=null!=e.spongecell?e.spongecell:e.spongecell={},t.Cookie=function(){function e(){}return e.createCookie=function(e,t,i){var a,n;return null==i&&(i=24),a=new Date,a.setTime(a.getTime()+1e3*60*60*parseInt(i)),n="; expires="+a.toGMTString(),document.cookie=e+"="+t+n+"; path=/"},e.readCookie=function(e){var t,i,a,n,r,s;for(n=e+"=",i=document.cookie.split(";"),a=0,r=0,s=i.length;s>r;r++)if(t=i[r]," "===t[0]&&(t=t.substring(1,t.length)),0===t.indexOf(n))return t.substring(n.length,t.length);return null},e}()}.call(this),function(){var e,t;e="undefined"!=typeof global&&null!==global?global:window,t=null!=e.spongecell?e.spongecell:e.spongecell={},t.Event=function(){function e(){}return e.onLoad=function(e){return document&&"complete"===document.readyState?(e(),void 0):"undefined"!=typeof window.addEventListener?window.addEventListener("load",e,!1):"undefined"!=typeof document.addEventListener?document.addEventListener("load",e,!1):"undefined"!=typeof window.attachEvent?window.attachEvent("onload",e):void 0},e.on=function(e,t,i){return"undefined"!=typeof document.addEventListener?e.addEventListener(t,i,!1):"undefined"!=typeof document.attachEvent?e.attachEvent("on"+t,i):void 0},e}()}.call(this),function(){var e,t;e="undefined"!=typeof global&&null!==global?global:window,t=null!=e.spongecell?e.spongecell:e.spongecell={},t.Flash=function(){function e(){}return e.isIE=-1!==navigator.appVersion.indexOf("MSIE")?!0:!1,e.isWin=-1!==navigator.appVersion.toLowerCase().indexOf("win")?!0:!1,e.isOpera=-1!==navigator.userAgent.indexOf("Opera")?!0:!1,e.controlVersion=function(){var e,t,i;i=void 0,e=void 0,t=void 0;try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),i=e.GetVariable("$version")}catch(a){}if(!i)try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),i="WIN 6,0,21,0",e.AllowScriptAccess="always",i=e.GetVariable("$version")}catch(a){}if(!i)try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"),i=e.GetVariable("$version")}catch(a){}if(!i)try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"),i="WIN 3,0,18,0"}catch(a){}if(!i)try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),i="WIN 2,0,0,11"}catch(a){t=a,i=-1}return i},e.getSwfVer=function(){var e,t,i,a,n,r,s,o;return i=-1,null!=navigator.plugins&&navigator.plugins.length>0?(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"])&&(a=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"",t=navigator.plugins["Shockwave Flash"+a].description,e=t.split(" "),n=e[2].split("."),r=n[0],s=n[1],o=e[3],""===o&&(o=e[4]),"d"===o[0]?o=o.substring(1):"r"===o[0]&&(o=o.substring(1),o.indexOf("d")>0&&(o=o.substring(0,o.indexOf("d")))),i=r+"."+s+"."+o):-1!==navigator.userAgent.toLowerCase().indexOf("webtv/2.6")?i=4:-1!==navigator.userAgent.toLowerCase().indexOf("webtv/2.5")?i=3:-1!==navigator.userAgent.toLowerCase().indexOf("webtv")?i=2:this.isIE&&this.isWin&&!this.isOpera&&(i=this.controlVersion()),i},e.detectFlashVer=function(e,t,i){var a,n,r,s,o,l,c;if(c=this.getSwfVer(),r=null,-1===c)return!1;if(0!==c){if(this.isIE&&this.isWin&&!this.isOpera?(a=c.split(" "),n=a[1],r=n.split(",")):r=c.split("."),s=r[0],o=r[1],l=r[2],s>parseFloat(e))return!0;if(s===parseFloat(e)){if(o>parseFloat(t))return!0;if(o===parseFloat(t)?l>=parseFloat(i):void 0)return!0}return!1}},e.html=function(e,i,a,n,r){return null==r&&(r=""),t.Browser.isIE11()?'<object id="'+e+'" width="'+a+'" height="'+n+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">\n  <param name="allowFullScreen" value="true">\n  <param name="allowNetworking" value="all">\n  <param name="allowScriptAccess" value="always">\n  <param name="base" value=".">\n  <param name="flashvars" value="'+r+'">\n  <param name="movie" value="'+i+'">\n  <param name="quality" value="high">\n  <param name="salign" value="tl">\n  <param name="wmode" value="opaque">\n  <object name="'+e+'" data="'+i+'" type="application/x-shockwave-flash" height="'+n+'" width="'+a+'">\n    <param name="flashvars" value="'+r+'"></param>\n    <param name="base", value="."></param>\n    <param name="allowScriptAccess" value="always"></param>\n    <param name="allowNetworking" value="all"></param>\n    <param name="allowFullScreen" value="true"></param>\n    <param name="wmode" value="opaque"></param>\n    <param name="salign" value="tl"></param>\n    <param name="quality" value="high"></param>\n  </object>\n</object>':'<object id="'+e+'" width="'+a+'" height="'+n+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">\n  <param name="allowFullScreen" value="true">\n  <param name="allowNetworking" value="all">\n  <param name="allowScriptAccess" value="always">\n  <param name="base" value=".">\n  <param name="flashvars" value="'+r+'">\n  <param name="movie" value="'+i+'">\n  <param name="quality" value="high">\n  <param name="salign" value="tl">\n  <param name="wmode" value="opaque">\n  <!--[if !IE]>-->\n  <object name="'+e+'" allowFullScreen="true" allowNetworking="all" allowScriptAccess="always" base="." data="'+i+'" height="'+n+'" quality="high" salign="tl" type="application/x-shockwave-flash" width="'+a+'" wmode="opaque">\n    <param name="flashvars" value="'+r+'">\n  </object>\n  <!--<![endif]-->\n</object>'},e}()}.call(this),function(){var e,t;e="undefined"!=typeof global&&null!==global?global:window,t=null!=e.spongecell?e.spongecell:e.spongecell={},t.Net=function(){function e(){}return e.isSSL=function(){return"https:"===document.location.protocol},e.isHttp=function(e){return!!/^https?\:\/\//i.test(e)},e.isHttpEncoded=function(e){return!!/^https?\%3a\%2f\%2f/i.test(e)},e.encode=function(e){return e?encodeURIComponent(e):null},e.writePixel=function(e,i){var a,n;return t.Net.isHttp(e)?(a=document.createElement("div"),a.setAttribute("style","position:absolute;left:0px;top:0px;visibility: hidden;"),n=document.createElement("img"),n.setAttribute("width",0),n.setAttribute("height",0),n.setAttribute("style","width:0px;height:0px;"),n.setAttribute("src",e),a.appendChild(n),(null!=i?i:document.body).appendChild(a)):void 0},e.writeScript=function(e,i,a){var n,r;return this.isSSL()&&(e=e.replace(/^http:\/\//,"https://")),null!=i&&(e+=e.indexOf("?")>0?"&":"?",e+="callback="+t.Broker.registerCallbackFn(i)),r=document.createElement("script"),r.defer=!0,r.async=!0,r.src=e,null!=a&&(r.onload=a),null!=a&&(r.onerror=a),n=document.getElementsByTagName("head")[0],n.appendChild(r)},e.getParam=function(e,t,i){var a,n,r,s,o;for(null==i&&(i="&"),o=t.split(i),r=0,s=o.length;s>r;r++)if(n=o[r],a=n.split("="),2===a.length&&a[0]===e)return a[1];return""},e.scrubTargeting=function(e,t){var i;return"ysa"===e&&(i=decodeURIComponent(t).match(/yud=(.*)/))?i[1]:t},e}()}.call(this),function(){var e,t;e="undefined"!=typeof global&&null!==global?global:window,t=null!=e.spongecell?e.spongecell:e.spongecell={},t.Utils=function(){function e(){}return e.extend=function(e,t){var i,a,n;n=[];for(i in t)a=t[i],n.push(e[i]=a);return n},e.generateIID=function(){return"xxxx-xxxx-Axxx-xxxx".replace(/x/g,function(){return new Number(0|36*Math.random()).toString(36)})},e.flashSupported=function(){return t.Flash.detectFlashVer(9,0,0)},e.getUrl=function(e){return t.Utils.isString(e)?e:t.Utils.isObject(e)?t.Net.isSSL()?null!=e?e.ssl:void 0:null!=e?e.no_ssl:void 0:void 0},e.convertUrls=function(e,i){var a,n,r,s,o,l,c;if(i){for(l=[],s=0,o=i.length;o>s;s++)a=i[s],n=e[a],null!=n?l.push(e[a]=t.Utils.getUrl(n)):l.push(void 0);return l}c=[];for(a in e)r=e[a],null!=r?c.push(e[a]=t.Utils.getUrl(r)):c.push(void 0);return c},e.toQueryString=function(e){var t,i,a;if(i=[],null!=e)for(t in e)a=e[t],i.push(""+t+"="+a);return i.join("&")},e.isObject=function(e){return"object"==typeof e},e.isString=function(e){return"string"==typeof e},e.shuffle=function(e){var t,i,a;for(t=e.length;--t>0;)i=~~(Math.random()*(t+1)),a=e[i],e[i]=e[t],e[t]=a;return e},e}()}.call(this),function(){var e,t;e="undefined"!=typeof global&&null!==global?global:window,t=null!=e.spongecell?e.spongecell:e.spongecell={},t.Iframe=function(){function e(){}var i,a;return i="&",e.parse=function(e,n){var r,s,o,l,c;return null==e&&(e=""),null==n&&(n={}),e.indexOf(";$;")>=0&&(i=";$;"),-1!==e.indexOf("?")&&(e=e.replace(/.+?\?/,""),a(e,n),s=t.Net.getParam("placementId",e,i),s&&s.length>0&&(n.placementId=s),l=t.Net.getParam("siteId",e,i),l&&l.length>0&&(n.siteId=l),c=t.Net.getParam("targeting",e,i),c&&c.length>0&&(n.targeting=c),o=t.Net.getParam("signalData",e,i),o&&o.length>0&&(n.targeting={ysa:o}),r=t.Net.getParam("adTagId",e,i),r&&r.length>0&&(n.adTagId=r)),n},a=function(e,t){var a,n,r,s,o,l,c;if(l="clickTag.?.?.?.?.?=([^("+i+")#]*)",o=new RegExp(l,"g"),s=e.match(o),null!=s){for(a=0,c=[];a<s.length;)r=s[a].replace(i,""),n=r.indexOf("="),n>0&&(t[r.slice(0,n)]=r.slice(n+1)),c.push(++a);return c}},e}()}.call(this),function(){var e,t;e="undefined"!=typeof global&&null!==global?global:window,t=null!=e.spongecell?e.spongecell:e.spongecell={},t.Tracker=function(){function e(e){var t,i;for(t in e)i=e[t],this[t]=i;this.adVersion=this.AD_VERSION_PLATFORM,null==this.iid&&(this.iid="xxxx-xxxx-Axxx-xxxx".replace(/x/g,function(){return new Number(0|36*Math.random()).toString(36)})),this.trackOnce={ENGAGEMENT:!1,MOUSEOVER:!1},this.trackOncePerFeature={START:!1,COMPLETION:!1},this.defaultOptions={}}return e.prototype.METRIC={IMPRESSION:"IMPRESSION",ENGAGEMENT:"ENGAGEMENT",MOUSEOVER:"MOUSEOVER",START:"START",COMPLETION:"COMPLETION",CLICK_THROUGH:"CLICK_THROUGH",DYNODE:"DYNODE",INTERACTION:"INTERACTION",TIME:"TIME",EXPANSION:"EXPANSION"},e.prototype.AD_VERSION_PLATFORM="PLATFORM",e.prototype.trackEvent=function(e){switch(e.action){case"clickThrough":return this.trackClickThrough(e.feature,e.description,e.data,e.x,e.y);case"mouseOver":return this.track("MOUSEOVER",e.feature,{description:"Mouse over "+e.feature});case"clickEvent":return this.trackHeatMap(e.x,e.y);case"play":return this.trackPlay(e.feature);case"pause":return this.trackPause(e.feature);case"unpause":return this.trackUnpause(e.feature);case"replay":return this.trackReplay(e.feature);case"played":return this.trackPlayed(e.feature,e.percentage);case"seek":return this.track("INTERACTION",{feature:e.feature,description:"Seek Video",data:e.data});case"mute":return this.track("INTERACTION",{feature:e.feature,description:"Muted Video",data:e.data});case"unmute":return this.track("INTERACTION",{feature:e.feature,description:"Unmuted Video",data:e.data});case"enterFullscreen":return this.track("INTERACTION",{feature:e.feature,description:"Entered Full Screen",data:e.data});case"exitFullscreen":return this.track("INTERACTION",{feature:e.feature,description:"Exited Full Screen",data:e.data});case"timeStart":return this.timerStart();case"timeStop":return this.timerStop();case"engagement":return this.track("ENGAGEMENT");case"start":return this.trackStart(e.feature);case"completion":return this.trackCompletion(e.feature,e);case"mobileMapSwipe":return this.track("INTERACTION",{feature:e.feature,description:"Map Swipe",data:e.data});case"mobileMapClickThrough":return this.track("CLICK_THROUGH",{feature:e.feature,description:e.description,data:e.data}),this.track("INTERACTION",{feature:e.feature,description:e.description,data:e.data}),this.trackCompletion(e.feature,e);case"mapGeocoded":return this.track("INTERACTION",{feature:e.feature,description:"IP Geocoded",data:e.data});case"slideView":return this.track("ENGAGEMENT"),this.track("INTERACTION",{feature:e.feature,description:e.description,data:e.data}),this.trackStart(e.feature);case"mapInteraction":return this.track("INTERACTION",{feature:e.feature,description:e.description,data:e.data}),this.trackCompletion(e.feature,e);default:return this.track(e.action,e)}},e.prototype.trackClickThrough=function(e,t,i,a,n){return this.track("ENGAGEMENT",{feature:e}),this.track("INTERACTION",{feature:e,description:t,data:i}),this.track("CLICK_THROUGH",{feature:e,description:t,data:i}),this.trackHeatMap(a,n)},e.prototype.trackHeatMap=function(e,i){return t.Console.log("HEATMAP POINT: "+e+", "+i),e&&i?this.writePixel(""+this.heatmapBaseURL+"/create_point?x="+e+"&y="+i+"&partition=Creative&event=click&heatmap="+this.creative.id):void 0},e.prototype.trackPlay=function(e){return this.track("ENGAGEMENT",{feature:e}),this.trackStart(e),this.track("INTERACTION",{feature:e,description:"Started "+e})},e.prototype.trackReplay=function(e){return this.track("INTERACTION",{feature:e,description:"Replayed "+e})},e.prototype.trackPause=function(e){return this.track("INTERACTION",{feature:e,description:"Paused "+e})},e.prototype.trackUnpause=function(e){return this.track("INTERACTION",{feature:e,description:"Unpaused "+e})},e.prototype.trackPlayed=function(e,t){return this.track("INTERACTION",{feature:e,description:"Viewed "+t+"%"}),100===t?this.trackCompletion(e,{description:"Viewed 100%"}):void 0},e.prototype.trackStart=function(e){return this.trackOncePerFeature.START===!1?(this.track("START",{feature:e}),this.trackOncePerFeature.START=!0):void 0},e.prototype.trackCompletion=function(e,t){return null==t&&(t={}),this.trackOncePerFeature.COMPLETION===!1?(this.trackOncePerFeature.COMPLETION=!0,this.track("COMPLETION",{feature:e,description:t.description,data:t.data}),this.trackStart(e)):void 0},e.prototype.trackDynode=function(e){return null==e&&(e={}),this.track(this.METRIC.DYNODE,e)},e.prototype.timerStart=function(){var e=this;return this.timer=setInterval(function(){return e.trackTime()},500)},e.prototype.timerStop=function(){return clearInterval(this.timer)},e.prototype.trackTime=function(){return null==this.timeSpent&&(this.timeSpent=0),this.timeSpent+=.5,0===this.timeSpent%5?this.track("TIME",{duration:this.timeSpent}):void 0},e.prototype.trackOpen=function(){return this.track("EXPANSION"),this.timerStart()},e.prototype.trackClose=function(e){return this.track("INTERACTION",{description:e}),this.timerStop()},e.prototype.track=function(e,i){var a,n,r,s,o,l,c,d,u;if(null==i&&(i={}),e=e.toUpperCase(),this.trackOnce[e]===!1)this.trackOnce[e]=!0;else if(this.trackOnce[e]===!0)return;if(r=t.Console.pad("Tracking "+e+":",24),o=i.feature||"",i.feature&&i.baseFeature&&(o+=" ("+i.baseFeature+")"),r+=t.Console.pad(o,24),i.description&&(r+=t.Console.pad(i.description,32)),i.data&&(r+=t.Console.pad("("+i.data+")",32)),i.pixel&&(r+=i.pixel),t.Console.group(r),l=t.Net.isSSL()?this.reportBaseURLSSL:this.reportBaseURL,l+="/"+this.adTag.id+"?",s=[],a=function(e,i,a){return null==a&&(a=!1),s.push([e,encodeURIComponent(i)].join("=")),t.Console.groupCollapsedSupported()?t.Console.log(""+e+": "+i):void 0},a("type",e),i.creativeOptions){d=i.creativeOptions;for(n in d)c=d[n],a(n,c)}u=this.defaultOptions;for(n in u)c=u[n],null==i[n]&&a(n,c);return i.feature&&a("screen",i.feature),i.baseFeature&&a("base_screen",i.baseFeature),i.description&&a("description",i.description),i.duration&&a("duration",i.duration),i.item_id&&a("item_id",i.item_id),i.sp_id&&a("sp_id",i.sp_id),i.srcdoc&&a("srcdoc",i.srcdoc),i.sv_id&&a("sv_id",i.sv_id),i.data&&a("data",i.data),a("flight_id",this.flight.id),a("creative_id",this.creative.id),a("iid",this.iid),a("ad_version",i.adVersion?i.adVersion:this.adVersion),this.placement.id&&a("external_placement_id",this.placement.id),this.site.id&&a("external_site_id",this.site.id),this.ysa&&a("ysa",this.ysa),a("anticache",(new Date).getTime()),a("e","mc2"),l+=s.join("&"),t.Console.groupCollapsedSupported()&&t.Console.log("Analytics URL: "+l),this.writePixel(l),"IMPRESSION"===e&&i.item_id||this.trackExternalPixels(e,i),t.Console.groupEnd()},e.prototype.trackExternalPixels=function(e,i){var a,n;return e=e.toLowerCase(),a=this.pixels[e],null!=(null!=(n=this.pixels[i.feature])?n[e]:void 0)&&(a=this.pixels[i.feature][e]),a=t.Tracker.substituteVariables(a),a&&(t.Console.log("PIXEL: "+a),this.writePixel(a)),this.trackActivityPixel(e,i)},e.prototype.trackActivityPixel=function(e,i){var a;return a=this.pixels.activity,a=t.Tracker.substituteVariables(a),a?(a=a.replace("[activity]",e),a=a.replace("[feature]",i.feature||""),a=a.replace("[base_feature]",i.baseFeature||i.feature||""),this.writePixel(a),t.Console.log("Activity pixel: "+a)):void 0},e.prototype.writePixel=function(e){return this.trackingDisabled?void 0:t.Net.writePixel(e,document.getElementById("spongecell-ad-"+this.iid))},e.prototype.trackImpression=function(e){return this.track(this.METRIC.IMPRESSION,e)},e.substituteVariables=function(e){return null==e&&(e=""),e=e.replace(/\[clickTag.*?\]/g,""),e=e.replace(/\[rand\]/g,Math.floor(1e10*Math.random())),e=e.replace(/\[timestamp\]/g,(new Date).getTime().toString())},e.prototype.inspect=function(){return"Campaign: "+this.campaign.id+"    Flight: "+(this.flight.id||"")+"    Ad Tag: "+(this.adTag.id||"")+"    Creative: "+this.creative.id+"    Placement: "+(this.placement.id||"")+"    Site: "+this.site.id+"    IID: "+this.iid},e}()}.call(this),function(){var e,t;e="undefined"!=typeof global&&null!==global?global:window,t=null!=e.spongecell?e.spongecell:e.spongecell={},t.LegacyTag=function(){function e(e,i){var a,n,r,s,o,l,c,d,u,p;this.params=i,a=this.creativeData=this.rotate(e.creatives);for(n in a)s=a[n],this[n]=s;this.adType="standard",this.adTagId=e.adTagId||1,t.Cookie.readCookie("_console_logging")&&(t.Console.ENABLED=!0),(null!=(c=this.params)?null!=(d=c.signalData)?d.yahoo:void 0:void 0)&&(this.params.targeting={ysa:this.params.signalData.yahoo}),this.params.iframeSrc&&t.Iframe.parse(this.params.iframeSrc,this.params),this.params.placementId&&!this.isMacro("placementId",this.params.placementId)&&(a.tracking.placement.id=this.params.placementId),this.params.siteId&&!this.isMacro("siteId",this.params.siteId)&&(a.tracking.site.id=this.params.siteId),this.params.activityPixel&&!this.isMacro("activityPixel",this.params.activityPixel)&&(a.tracking.pixels.activity=this.params.activityPixel),(null!=(u=this.params.targeting)?u.ysa:void 0)&&(a.tracking.ysa=this.params.targeting.ysa),this.resourceHost=t.Net.isSSL()?this.resourceHostDefaultSSL:this.resourceHostDefault,this.tracker=null!=this.params.tracker?this.params.tracker:new t.Tracker(a.tracking),null!=this.params.gallery&&(this.tracker.trackingDisabled=!0,this.cdnDisabled=!1,this.resourceHost.match(/cdn/)||(this.resourceHost=this.resourceHost.replace(/.spongecell/,".cdn.spongecell"))),this.creativeImpressionTrackingOptions={},null!=this.signal_processors&&(this.creativeImpressionTrackingOptions.sp_id=function(){var e,t,i,a;for(i=this.signal_processors,a=[],e=0,t=i.length;t>e;e++)r=i[e],a.push(r.id);return a}.call(this).join(",")),t.Browser.detectsSrcdoc()&&(this.creativeImpressionTrackingOptions.srcdoc=!0),t.Console.group(this.tracker.inspect()),t.Console.log("CDN "+(this.cdnDisabled?"Disabled":"Enabled")+"  Tracking "+(this.tracker.trackingDisabled?"Disabled":"Enabled")),t.Console.log("Ad Tag: %O",this),t.Console.log("Ad Server Parameters: %O",this.params),this.clickTags=this.findClickTags(this.params),this.clickTagsAndLandingPages=this.mergeClickTagsAndLandingPages(this.clickTags,this.landingPages),t.Console.log("ClickTags + Landing Pages: %o",this.clickTagsAndLandingPages),t.Console.groupEnd(),null==t.adTags&&(t.adTags={}),null==(o=t.adTags)[l=this.tracker.iid]&&(o[l]=this),null!=(p=t.Broker)&&p.registerChannels(this.tracker.iid,e.channels,this),this.sendChannelMessage("debug",{description:"tag_init",type:"start"}),this.show_static_backup||(this.show_static_backup=t.Browser.detectsSrcdoc()&&!t.Browser.supportsSrcdoc()),this.channels=e.channels||[],this.flashData=i.flashData||{},(!this.hasFlash()||this.show_static_backup)&&(this.creativeImpressionTrackingOptions.creativeOptions={noflash:!0,screen:"DEFAULT"}),this.sendChannelMessage("hooks",{description:"before_ad_load_hook",type:"beforeAdLoad"})}var i;return e.prototype.adHtml=function(){return'<div id="spongecell-ad-'+this.tracker.iid+'" class="spongecell-ad" style="position: relative; display: inline-block; *display: inline; width: '+this.width+"px; height: "+this.height+'px;opacity: 1; filter:alpha(opacity=100); "><div id="'+this.innerDomId()+'" style="overflow:hidden; display:inline-block; position: relative;">'+this.creativeHTML()+"</div></div>"},e.prototype.innerDomId=function(){return"spongecell-"+this.adType+"-"+this.tracker.iid},e.prototype.creativeHTML=function(){var e;return e=this.hasFlash()&&!this.show_static_backup?t.Browser.isIE11()?this.ie11FlashHTML:this.flashHTML:this.noflashHTML,e=e.replace(/\*\*flashvars\*\*/g,this.flashvars()),e=e.replace(/\*\*creative_resource_host\*\*/g,this.resourceHost),e=e.replace(/\*\*http\*\*/g,t.Net.isSSL()?"https":"http"),e=e.replace(/\*\*click_tag\*\*/g,encodeURIComponent(this.clickTags.clickTag)),e=e.replace(/\*\*site_id\*\*/g,this.tracker.site.id?t.Net.encode(this.tracker.site.id):""),e=e.replace(/\*\*placement_id\*\*/g,this.tracker.placement.id?t.Net.encode(this.tracker.placement.id):""),e=e.replace(/\*\*random\*\*/g,this.random()),e=e.replace(/\*\*iid\*\*/g,this.tracker.iid),e=e.replace(/\*\*flash_build_version\*\*/g,this.params.flash_build_version?this.params.flash_build_version:"master")},e.prototype.write=function(){var e,i,a,n,r,s,o,l;if("jasmine"!==this.environment){if(null!=document.body?document.write(this.adHtml()):(document.write("<html><body>"),document.write(this.adHtml()),document.write("</html></body>")),null!=this.signal_processors&&this.hasFlash()&&!this.show_static_backup)for(null==t.signalProcessors&&(t.signalProcessors={}),n=this.signal_processors,i=0,a=n.length;a>i;i++)e=n[i],this.writeDynode(e);this.addLoadListeners(),document.close()}return(null!=t?null!=(r=t.director)?r.in_busted_iframe:void 0:void 0)||(this.tracker.trackImpression(this.creativeImpressionTrackingOptions),this.sendChannelMessage("debug",{description:null!=(s=null!=(o=this.creativeImpressionTrackingOptions.creativeOptions)?o.screen:void 0)?s:null!=(l=this.creativeImpressionTrackingOptions.creativeOptions)?l.feature:void 0,type:"IMPRESSION"})),this.panel&&this.billboard&&!this.billboardCookie&&this.panel.createAndAppendBillboard(),this.sendChannelMessage("debug",{description:"tag_init",type:"stop"}),"about:srcdoc"===window.location.href?this.sendChannelMessage("debug",{type:"SRCDOC"}):void 0},e.prototype.relatePanel=function(e,i,a){var n,r=this;return this.adType="teaser","Creative::Lightbox"===a?this.panel=this.overlay=new t.Overlay(e,this,i):"Creative::PushdownPanel"===a?(this.expandable="Pushdown",this.panel=new t.Pushdown(e,this,i)):"Creative::VerticalExpandablePanel"===a?(this.expandable="Vertical",this.panel=new t.VerticalExpandable(e,this,i)):"Creative::HorizontalExpandablePanel"===a?(this.expandable="Horizontal",this.panel=new t.HorizontalExpandable(e,this,i)):"Creative::BillboardPanel"===a&&(this.expandable="Billboard",this.billboard=this.panel=new t.Billboard(e,this,i),this.billboardCookie=t.Cookie.readCookie(this.adTagId),null==this.billboardCookie&&(this.height=e.height)),i.allowedAccessToTop()&&this.hasFlash()||(this.show_static_backup=!0),null==this.flashvars().match(/autoExpand=(true|false)/)||t.Cookie.readCookie(this.adTagId)||this.show_static_backup?void 0:(setTimeout(function(){return r.panel.open()},2e3),setTimeout(function(){return r.panel.close()},8e3),n=null!=this.flashvars().match(/frequencyCapOverride=(\d+)/)?this.flashvars().match(/frequencyCapOverride=(\d+)/)[1]:void 0,setTimeout(function(){return t.Cookie.createCookie(r.adTagId,"pushdown",n)}))},e.prototype.enableSiteWindow=function(e){return this.panel=new t.SiteWindow(this,this,e),e.allowedAccessToTop()?void 0:(this.show_static_backup=!0,this.sendDebugMessage({description:"expandable",type:"backup"}))},e.prototype.writeDynode=function(e){var i,a,n,r,s,o=this;if(t.signalProcessors[e.id]={defaultURL:e.staticURL,itemId:e.fallbackId,tracked:!1},null!=e.dynamicURL){a=""+e.dynamicURL+"&iid="+this.tracker.iid+"&tzo="+(new Date).getTimezoneOffset(),r=this.params.targeting||{};for(i in r)n=r[i],a+="&targeting["+i+"]="+t.Net.scrubTargeting(i,n);s=this.flashData;for(i in s)n=s[i],i.match(/^signals\[\d+\]$/)&&(a+="&"+i+"="+n);return t.Net.writeScript(a,function(e){return o.handleDynodeResponse(e)},function(){return o.handleDynodeFailure(e.id,"fail")}),window.setTimeout(function(){return o.handleDynodeFailure(e.id,"timeout")},750),this.sendChannelMessage("debug",{description:"tag_dynode",type:"start"})}return t.Console.log("Dynode: no dynamic url specified; using static: "+e.staticURL)},e.prototype.handleDynodeResponse=function(e){var i,a,n,r,s,o,l,c,d,u,p,h,g,f;if(null!=e&&null!=e.id&&null!=e.items&&null!=e.signals){for(this.creativeData.creativeAndAdTagSettings.indexOf("dynamic[randomize]=true")>-1&&(t.Console.log("AdTag shuffling "+e.items.length+" items"),t.Utils.shuffle(e.items)),o=t.signalProcessors[e.id].tracked,t.signalProcessors[e.id]=e,i=null!=(p=e.items)?null!=(h=p[0])?h.id:void 0:void 0,r=[],g=e.signals,l=0,d=g.length;d>l;l++)for(a=g[l],f=a.signalValues,c=0,u=f.length;u>c;c++)n=f[c],r.push(n.id);return r.length>0&&(s=r.join(",")),null!=i&&(this.tracker.defaultOptions.item_id=i),null!=s&&(this.tracker.defaultOptions.sv_id=this.tracker.defaultOptions.sv_id?""+this.tracker.defaultOptions.sv_id+","+s:s),o?void 0:this.tracker.trackDynode({sp_id:e.id,sv_id:null!=s?s:"",item_id:null!=i?i:""})}},e.prototype.handleDynodeFailure=function(e,i){return t.signalProcessors[e].id||(t.signalProcessors[e].tracked||(t.signalProcessors[e].tracked=!0,this.tracker.trackDynode({description:i,sp_id:e,item_id:t.signalProcessors[e].itemId})),this.sendChannelMessage("debug",{description:"tag_dynode",type:i})),this.sendChannelMessage("debug",{description:"tag_dynode",type:"complete"})},e.getSignalProcessors=function(){return null!=t.signalProcessors?t.signalProcessors:void 0},e.prototype.hasFlash=function(){return t.Flash.detectFlashVer(9,0,0)},e.prototype.isMacro=function(e,t){var i,a,n;n=this.macros[e]||[];for(i in n)if(a=n[i],t===a)return!0;return!1},e.prototype.mergeClickTagsAndLandingPages=function(e,i){var a,n,r,s;r={};for(a in e)s=e[a],n=a.replace("clickTag",""),i[n]&&(s+=i[n]),r[a]=s;for(a in i)s=i[a],a="clickTag"+a,r[a]||(r[a]=s);for(a in r)s=r[a],r[a]=t.Tracker.substituteVariables(s);return r},e.prototype.findClickTags=function(e){var i,a,n;i={};for(a in e)n=e[a],0===a.indexOf("clickTag")&&(t.Net.isHttp(n)||t.Net.isHttpEncoded(n)?t.Net.isHttpEncoded(n)&&(n=decodeURIComponent(n)):n="",i[a]=n);return i},e.prototype.random=function(){return Math.floor(1e9*Math.random())},e.prototype.rotate=function(e){var i,a,n,r,s,o,l,c;l={},o=function(){var t;t=[];for(r in e)c=e[r],t.push(r);return t}().length>1,n=0,s=Math.random(),o&&t.Console.group("Rotating");for(a in e){if(i=e[a],n+=i.weight,n>s){l=i;break}o&&t.Console.log(a+": "+100*i.weight+"%")}return o&&t.Console.groupEnd(),l},e.prototype.isPageLoaded=function(){return this.params.pageLoaded},e.prototype.addLoadListeners=function(){var e=this;return this.params.pageLoaded=!!document&&"complete"===document.readyState,this.params.isPageLoaded=this.isPageLoaded(),this.addLoadListener(function(){return e.sendChannelMessage("hooks",{description:"after_page_load_hook",type:"afterPageLoad"}),e.params.pageLoaded=!0,e.sendChannelMessage("debug",{description:"tag_polite",type:"stop"})}),this.sendChannelMessage("debug",{description:"tag_polite",type:"start"})},e.prototype.addLoadListener=function(e){return"undefined"!=typeof window.addEventListener?window.addEventListener("load",e,!1):"undefined"!=typeof document.addEventListener?document.addEventListener("load",e,!1):"undefined"!=typeof window.attachEvent?window.attachEvent("onload",e):void 0},e.prototype.sendChannelMessage=function(e,i){return null!=t.Broker?(null==i.iid&&(i.iid=this.tracker.iid),null==i.topic&&(i.topic=e),t.Broker.sendOnChannel(i)):void 0},e.prototype.flashData=function(){var e,t;e=[];for(t in this.flashData||{})e.push({key:t,value:this.flashData[t]});return e},e.prototype.flashvars=function(){var e,t;return t={trackingDisabled:this.tracker.trackingDisabled?"1":null,cdnDisabled:this.cdnDisabled?"1":null,hostBaseUrl:this.tracker.hostBaseUrl,iid:this.tracker.iid,campaignId:this.tracker.campaign.id,creativeId:"panel"===this.adType?this.tracking.creative.id:this.tracker.creative.id,flightId:this.tracker.flight.id,placementId:this.tracker.adTag.id,platformPlacementId:this.tracker.adTag.id,externalPlacementId:this.tracker.placement.id,siteId:this.tracker.site.id,externalSiteId:this.tracker.site.id,interactionPixel:this.tracker.pixels.engagement,completionPixel:this.tracker.pixels.completion,expansionPixel:this.tracker.pixels.expansion,activityPixel:this.tracker.activityPixel,"HeatMap[track]":this.tracker.heatMapTrackingEnabled,isPanel:"panel"===this.adType?"1":null,initialScreen:this.initialScreen?this.initialScreen:null},e=function(){var a,n,r,s;for(r=[t,this.clickTagsAndLandingPages,this.flashData],s=[],a=0,n=r.length;n>a;a++)e=r[a],s.push(i(e));return s}.call(this).join("&"),e=[e,this.creativeAndAdTagSettings].join("&")},i=function(e){var t,i,a;i=[];for(t in e)a=e[t],a&&i.push([encodeURIComponent(t),encodeURIComponent(a)].join("="));return i.join("&")},e}()}.call(this),function(){}.call(this);
spongecell.adTag = new spongecell.LegacyTag(adTagOptions, spongecellParams);
spongecell.adTag.write();
