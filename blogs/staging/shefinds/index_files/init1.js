
//<script>
var flash_objects = {};
var bouncex_events ={};
(function(){
	bouncex.init_lightbox = function(){
		bouncex.css_added=true;
		addStyle('http://bounceexchange.com/assets/bounce/bounce.css?v44');
	}
		var validate_coupons_seen_count = 0;
	var bxBind =  function(obj,type,fn){
		
		var obj = jQuery(obj);
		//bouncex.log(obj);
		bouncex_events[type] = obj;
		obj.bind(type,fn);
	}	
	var addEvent = function( obj, type, fn ) {
        if (obj.addEventListener)
                obj.addEventListener(type, fn, false);
        else if (obj.attachEvent) 
                obj.attachEvent('on' + type, function(){ fn.apply(obj, new Array(window.event)); });
	}
	var removeEvent = function( obj, type, fn ) {
        if (obj.removeEventListener)
                obj.removeEventListener(type, fn, false);
        else if (obj.attachEvent) 
                obj.detachEvent('on' + type, function() { return fn.apply(obj, new Array(window.event));});
	}
	var XD = function(){
		return {
			postMessage	:	function(message,tar) {
				var frame = jQuery('iframe',jQuery(tar));
				if(!frame.length)
					return;
				var f = frame.get(0).contentWindow;
				var target_url = frame.attr('src');
				if (!target_url) {
					return;
				}
				window.setTimeout(function() {
					f['postMessage'](message, target_url);
				}, 0);
			},
			receiveMessage : function(callback) {
				if (window['addEventListener']) {
					window['addEventListener']('message', callback, false);
				} else {
					window['attachEvent']('onmessage', callback);
				}
			}
		};
	}();
	init_bouncex();
	
	function init_helpers(ca_id){
		bxBind(window,'keydown.bouncex_keycodes_'+ca_id,function(event) {
		  if (event.ctrlKey && (event.keyCode==87 || event.keyCode == 115)) {
			event.preventDefault();
			event.keyCode=0
				show_ad(ca_id);
			 return false;
		   }else if(event.keyCode==27){
				close_ad(ca_id); 
		   }
		});
	}
	function hide_flash(){
		flash_objects = jQuery('object,embed');
		flash_objects.css('visibility','hidden');
	}
	function calc_delay_cvt(delay_time){
		var delay = (bouncex.cookie.cvt-getTime2()+delay_time)*1000;
		return delay<0?0:delay;
	}
	function init_activation_funcs(){
		listenMessages();
		for(var ca_id in bouncex.campaigns) {
			if(can_show_ad(ca_id,true)){
				(function(ca_id){
					var delay = 0;
					if(bouncex.campaigns[ca_id].activation_delay){
						delay = calc_delay_cvt(bouncex.campaigns[ca_id].activation_delay);
					}
					bouncex_events['timeout_activation_'+ca_id] = setTimeout(function(){
						
						init_activation(ca_id);
					},delay);
				})(ca_id);
			}
		}
	}
	bouncex.fs = function(){
		if(!bouncex.browser.msie)
			return true;
		if(typeof(bouncex.fixed_supported)=='undefined'){
			bouncex.fixed_supported = isFixedSupported();
		}
		
		return bouncex.fixed_supported;
	}
	function isFixedSupported(){var e=document.body;if(document.createElement&&e&&e.appendChild&&e.removeChild){var t=document.createElement("div");if(!t.getBoundingClientRect)return null;t.innerHTML="x";t.style.cssText="position:fixed;top:100px;";e.appendChild(t);var n=e.style.height,r=e.scrollTop;e.style.height="3000px";e.scrollTop=500;var i=t.getBoundingClientRect().top;e.style.height=n;var s=i===100;e.removeChild(t);e.scrollTop=r;return s}return null}

	bouncex.show_ad = function(ca_id){
		show_ad('manual',ca_id);
	}	
	bouncex.unload_campaigns = function(){
		
		for(var e in bouncex_events) {
			if(typeof(bouncex_events[e])=='object'){
				jQuery(bouncex_events[e]).unbind(e);
			}else{
				clearTimeout(bouncex_events[e]);
			}
		}
		
	}	
	bouncex.reload_campaigns = function() {
		//bouncex.unload_campaigns();
		bouncex.baddjs(bouncex.make_include_string('reloadCampaigns'));		
	}
	bouncex.activate_action = function(act){
		bouncex.cookie['a_'+act] = 1;
		setBounceCookie();
		bouncex.unload_campaigns();
		bouncex.baddjs(bouncex.make_include_string('reloadCampaigns'));
	}
	function init_custom_actions(){
	}	
	function init_activation(ca_id){
		if(bouncex.campaigns[ca_id].html){
			bouncex.campaigns[ca_id].failed = false;
			bouncex.body.append(bouncex.campaigns[ca_id].html);
			
		}else{
			bouncex.activate_campaign(ca_id);
		}
		event_js_eval(ca_id,'activation');
	}
	function listenMessages(){
		XD.receiveMessage(function(message){
			var message_str = message.data;
			if(message_str.indexOf('bcx_message')!==0)
				return false;//not bcx message;
			var messages = message_str.split('&');
			var result = [];
			for (var i = 0; i < messages.length; i++){
				var r = messages[i].split('=');
				result[r[0]] = decodeURIComponent(r[1].replace(/\+/g, ' '));
			}
			
			var mca_id = result['campaign_id'];
			var message = result['message'];
			if(!parseInt(mca_id) || !bouncex.campaigns[mca_id])
				return;
			if(message == 'failed'){
				bouncex.campaigns[mca_id].failed = true;
				if(bouncex.campaigns[mca_id].ad_visible){
					bouncex.close_ad(mca_id);
				}
				return false;
			}else if(message == 'loaded'){
				bouncex.activate_campaign(mca_id);
			}else if(message == 'ibx_input') {
				bouncex.ibx.user(result['check'],{source:"bouncex overlay",campaign:mca_id});
			}else if(bouncex.campaigns[mca_id].ad_visible){
				if(message == 'report_coupon') {
					if(validate_coupons_seen_count > 0) return;
					validate_coupons_seen_count++;
					var cpn = result['code'];
					if(!cpn) {
						return;
					}
										if(typeof(bouncex.cookie.cpn)=='string' && bouncex.cookie.cpn==cpn) {
						return;
					}
										report(mca_id,'coupon_'+cpn);
				}else if(message == 'cpn_') {
										var cpn = message.substr(5);
					if(cpn != '') {
						// trim string and remove potentially unsafe cookie chars
						bouncex.cookie.cpn = cpn[1].replace(/^\s+|\s+$|[^A-Z0-9\.-_\=\+\*\$\%\@]/ig,'');
						setBounceCookie();
					}
													}else if(message == 'bcx_ca_email'){
					/*console.log('emv');*/
					/*console.log(result['email']);*/
					if(typeof(_veroq)=='object' && typeof(result['email'])!='undefined') {
						_veroq.push(['user', {id: result['email'], email: result['email']}]);
						_veroq.push(['track', 'Entered email overlay2']);
						/*console.log('rpt');*/
					}
				}else if(message == 'bcx_close_ad'){
					close_ad(mca_id);
				}else if(message == 'bcx_form_subitted'){
					bouncex.campaigns[mca_id].submitted=true;
					bouncex.cookie.es = true; //email submitted
					bouncex.cookie.campaigns[mca_id].ls = getTime2();//lasdt submitted
					setBounceCookie();
					event_js_eval(mca_id,'submission',result);
					if(typeof(bouncex.onformsubmit)=='function'){
						bouncex.onformsubmit(result['email']);
					}
					if(bouncex.campaigns[mca_id].submission_redirect){
						window.location = bouncex.campaigns[mca_id].submission_redirect;
					}
				}else if(message == 'report_click'){
					report(mca_id,'clicks');
				}else if(message =='reset_fsa'){
					bouncex.cookie.campaigns[mca_id].fsa = result['fsa'];
					setBounceCookie();
				}else if (message=='eval'){
					try{
						eval(result.js);
					}catch(e){}
				}
			}
			
		});
	}

	bouncex.activate_campaign=function(e){if(bouncex.campaigns[e].activated){return false}bouncex.campaigns[e].activated=true;for(var t in bouncex.campaigns[e].activations){if(bouncex.campaigns[e].activations.hasOwnProperty(t)){var n=bouncex.campaigns[e].activations[t];if(n.activation){bouncex.ca[n.activation](n.prop,n.val,e)}}}report(e,"views")}
	function activation_funcs(){var e=[];e["manual"]=function(e,t,n){};e["control"]=function(e,t,n){show_ad("control",n)};e["inter"]=function(e,t,n){if(bouncex.cookie.vpv>=e){show_ad("inter",n)}};e["bounce"]=function(e,t,n){bxBind("html,body","mouseout.bouncex_show_"+n,function(e){process_mouse_out(e,n)});if(bouncex.browser.msie){bxBind("html,body","mousemove.bouncex_show_"+n,function(e){process_mouse_move(e,n)})}init_helpers(n)};e["timer"]=function(e,t,n){bouncex_events["timeout_timer"+n]=setTimeout(function(){show_ad("timer",n)},parseInt(t)*1e3)};e["back"]=function(e,t,n){var r=false;if(e=="landing_page"){if(bouncex.is_on_landing){r=true}}else{r=true}if(r){activate_hash(n)}};e["pers"]=function(e,t,n){var r=false;bouncex.campaigns[n].is_pers=true;if(e=="landing_page"&&bouncex.is_on_landing){r=true}else if(e!="landing_page"){r=true}if(r){show_ad("pers",n)}};e["worm"]=function(e,t,n){noteCookieAdShown(n,true);teleport("_self",t)};e["inactivity"]=function(e,t,n){bouncex.inactivity_events="mousemove.bouncex keydown.bouncex DOMMouseScroll.bouncex mousewheel.bouncex mousedown.bouncex touchstart.bouncex touchmove.bouncex";bxBind(document.body,bouncex.inactivity_events,function(){clearTimeout(bouncex.inactivity_timeout);bouncex.inactivity_timeout=bouncex_events["inactivity"+n]=setInactivityTimeout(n,t)});bouncex.inactivity_timeout=setInactivityTimeout(n,t)};e["scroll"]=function(e,t,n){bouncex.oldSy=100;bxBind(window,"scroll.bouncex_"+n,function(){var e=jQuery(this);var r=bouncex.wndsize();var i=e.scrollTop();i=i?i:document.body.scrollTop;var s=(i+r.height)/jQuery(document).height()*100;var o=parseInt(s)+parseInt(t);if(o>100&&s>bouncex.oldSy&&!bouncex.campaigns[n].ad_shown){show_ad("scroll",n);if(!can_show_ad(n,true)){jQuery(window).unbind("scroll.bouncex_"+n)}}bouncex.oldSy=s})};e["mclick"]=function(e,t,n){if(e=="left"&&bouncex.campaigns[n].overlay=="teleport"&&bouncex.campaigns[n].overlay_teleport_type!=="_self"){var r=function(){show_ad("mclick",n)};addEvent(window.document,"click",r)}else{var r=function(t){var i=t.keyCode||t.which||t.button;if(t.button&&t.button==2)i=3;if(e=="left"&&i==1||e=="any"){show_ad("mclick",n)}if(e=="right"&&i==3||e=="any"){show_ad("mclick",n)}if(!can_show_ad(n,true)){removeEvent(window.document,"mousedown",r)}};addEvent(window.document,"mousedown",r)}};return e}

	
		
			function init_bouncex(){
		bouncex.body = jQuery('body:first');
		if(!bouncex.body || !bouncex.body.length){
			bouncex_events['timeout_body'] = setTimeout(function(){
				init_bouncex();
			},3000);
			return false;
		}
		
		var nav = navigator.userAgent.toLowerCase();
		bouncex.browser = {};
		bouncex.browser.webkit = (/webkit/).test(nav);
		bouncex.browser.firefox = (/firefox/).test(nav);
		bouncex.browser.msie = (/trident\/7\.|msie/).test(nav);
		
		bouncex.overlay_visible = false;
		bouncex.is_on_landing = true;
		bouncex.server_client_time_diff = 1395859465 - parseInt(new Date().getTime()/1000);
		bouncex.cookie = {"fvt":1395857001,"vid":2112190363,"ao":0,"as":0,"vpv":1,"d":"d","lp":"http%3A%2F%2Fwww.shefinds.com%2F2014%2Fshop-reese-witherspoons-designer-accessories-now%2F","r":"","cvt":1395859465,"gcr":66,"m":0,"lvt":1395859465};
		if (bouncex.cookie.v) {
			for(var n in bouncex.cookie.v) {
				if (bouncex.vard && bouncex.vard[n]) {
					if (bouncex.vard[n].p) {
						bouncex.setv(n, bouncex.formatv(bouncex.cookie.v[n]));
					}
				}
			}
		}
		bouncex.campaigns = false;
		bouncex.setBounceCookie = function(){
			setBounceCookie();
		};
		bouncex.initActivationFuncs = function(){
			init_activation_funcs();
		};
		bouncex.contains = jQuery.contains&&jQuery().jquery.indexOf('1.4.')==-1?jQuery.contains:eval('document.contains||document.compareDocumentPosition?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16))}:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true}}}return false};');
		bouncex.website = {"id":"481","tpc":"0","mas":"1","map":"1"};
		bouncex.debug = false;
		bouncex.pa = 0;
		bouncex.timespaced = false;
		bouncex.close_ad = function(ca_id){ close_ad(ca_id);};
		bouncex.destroy_ad = function(ca_id){ destroy_ad(ca_id);};
		bouncex.report = function(ca_id,type){return report(ca_id,type)};
		bouncex.report_submit = function(ca_id,obj,complete) {return report_submit(ca_id,obj,complete)};
		bouncex.setBounceCookie();
		bouncex.ca = activation_funcs();
		bouncex.report_ga = function(action,label,bypass){report_ga(action,label,bypass)};
		
		bouncex.body_margin = parseInt(bouncex.body.css('margin-top'))||0;
		bouncex.report_conversion = function(obj){report_conversion(obj);};

						bouncex.ibx={wsid:bouncex.website.id,_event_store:[],_item_store:[],vid:bouncex.cookie.vid,uid:null,mode:1,cvar:{},_init:function(){this.uid=this._get("user");this.mode=this._get("mode");this._clkthrough();this._log("initialized");this._log("mode: "+this.mode+" | "+"user: "+this.uid)},user:function(e,t){if(!this._validate(e)){this._log("invalid email");return}this.set("user",e);this._push("user",{key:e,val:t})},track:function(e,t,n){if(!this.uid||!e||!t){this._log(!this.uid?"user must first be set":"type and key must be set");return}this["_"+e+"_store"].push({key:JSON.stringify(n)});this._push(e,{key:t,val:n})},conv_params:function(){var e=this._auto_add({ibx_user:this._get("user"),ibx_mode:this._get("mode"),ibx_clicks:this._get("clickstr")});if(e.ibx_clicks){this._cookies.create("__ibxc0",e.ibx_clicks);this._cookies.destroy("__ibxc")}this._log("conv_params: "+(e.ibx_clicks?e.ibx_clicks:"[none]"));return this._qs(e)},set:function(e,t){switch(e){case"user":this.uid=t;this._cookies.create("__ibxu",t);break;case"mode":if(t==0||t==1){this.mode=t;this._cookies.create("__ibxm",t)}break}},dump:function(e){this._log(e+" = "+this._get(e))},_get:function(e){var t;switch(e){case"events":t=this._event_store;break;case"items":t=this._item_store;break;case"user":t=this._cookies.read("__ibxu");break;case"mode":t=this._cookies.read("__ibxm")==="0"?0:1;break;case"clickstr":t=this._cookies.read("__ibxc");break;case"clicks":t=(t=this._cookies.read("__ibxc"))?t.split(","):[];break;default:t="invalid"}return t},_push:function(e,t){var n,r="type="+e+"&wsid="+this.wsid+"&vid="+this.vid+"&mode="+(isNaN(this.mode)?1:parseInt(this.mode));try{mode=parseInt(this.mode)}catch(i){mode=1}if(this.uid)r+="&uid="+encodeURIComponent(this.uid);t.val=JSON.stringify(this._auto_add(t.val||{}));r=r+"&"+this._qs(t);n=typeof t.key!="undefined"?": "+t.key:"";this._log(e.toUpperCase()+n+" // "+r);jQuery('<img src="http://bounceexchange.com/ibx/ping?'+r+'"/>')},_auto_add:function(e){e=e||{};e.__url=location.href;e.__referrer=document.referrer;return e},_clkthrough:function(){var e=this._getparam("ibx_source"),t;if(e){try{t=this._get("clickstr");if(!t)t=e;else if(t.indexOf(e)!=-1){this._log("click-through: "+e+" (DUPLICATE)");return}else t+=","+e;this._cookies.create("__ibxc",t);this._log("click-through: "+e)}catch(n){this._log(n)}}},_log:function(e){if(this.mode==0)bouncex.log("ibx: "+e)},_validate:function(e){var t=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)},_quick_validate:function(e){return e==null?false:e.indexOf(".")>2&&e.indexOf("@")>0},_qs:function(e){var t=[],n="";for(var r in e){if(!e.hasOwnProperty(r))continue;t.push(r+"="+encodeURIComponent(e[r]))}return t.join("&")},_cookies:{create:function(e,t,n){if(!n)n=365;var r=new Date;r.setTime(r.getTime()+n*24*60*60*1e3);var i="; expires="+r.toGMTString();document.cookie=e+"="+t+i+"; path=/"},read:function(e){var t=e+"=",n=document.cookie.split(";");for(var r=0;r<n.length;r++){var i=n[r];while(i.charAt(0)==" ")i=i.substring(1,i.length);if(i.indexOf(t)==0)return i.substring(t.length,i.length)}return null},destroy:function(e){this.create(e,"",-1)}},_getparam:function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t="[\\?&]"+e+"=([^&#]*)";var n=new RegExp(t);var r=n.exec(window.location.href);if(r==null)return"";else return r[1]}};bouncex.ibx._init();
		init_ibx_tracking();

		init_website_custom_js();
		
		if(bouncex.campaigns){
			bouncex.init_lightbox();
			init_activation_funcs();
		}

				bouncex.bcxReady(function(){
			if(typeof(window.bxAsyncInit)==='function'){
				window.bxAsyncInit();
			}else{
							}
		});
		init_custom_actions();

	}

	
	function addStyle(e){var t=document.createElement("link");t.setAttribute("href",e);t.setAttribute("rel","stylesheet");t.setAttribute("media","all");t.setAttribute("type","text/css");document.getElementsByTagName("head")[0].appendChild(t)}
	function setInactivityTimeout(ca_id,v){
		return setTimeout(function(){
				show_ad('inactivity',ca_id);
				bouncex.body.unbind(bouncex.inactivity_events);
			},v*1000);
	}

		function activate_hash(a){function b(){bxBind(c,"hashchange.hash_"+a,function(){c.unbind("hashchange");show_ad("back",a)})}var c=jQuery(window);"."!=window.location.hash.replace("#","")?(window.location.hash=".",bouncex_events["timeout_rewind_"+a]=setTimeout(function(){b()},50)):b()};
	function process_mouse_move(a,b){18>=(a.layerY?a.layerY:a.pageY)-(document.body.scrollTop || document.documentElement.scrollTop)?bouncex.direction="up":bouncex.direction=!1;if(0<bouncex.campaigns[b].iao||0<bouncex.campaigns[b].rao){var c=a.layerX?a.layerX:a.pageX;bouncex.lastX=0<c?c:1}};
	function process_mouse_out(c,a){var d=c?c:window.event,b=d.relatedTarget||d.toElement,e=d.relatedTarget,d=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(!e||e!==this&&!bouncex.contains(this,e))if(!b||"HTML"==b.nodeName)if(bouncex.browser.msie&&"up"==bouncex.direction){if(0<bouncex.campaigns[a].iao&&(b=bouncex.lastX,b<bouncex.campaigns[a].iao)||0<bouncex.campaigns[a].rao&&(b=bouncex.lastX,d-b<bouncex.campaigns[a].rao))return!1;show_ad("bounce",a);can_show_ad(a,!0)||jQuery("html,body").unbind("mouseout.bouncex_show_"+a)}else if(!bouncex.browser.msie&&5>c.clientY){if(0<bouncex.campaigns[a].iao&&(b=c.layerX?c.layerX:c.pageX,b<bouncex.campaigns[a].iao)||0<bouncex.campaigns[a].rao&&(b=c.layerX?c.layerX:c.pageX,d-b<bouncex.campaigns[a].rao))return!1;show_ad("bounce",a);can_show_ad(a,!0)||jQuery("html,body").unbind("mouseout.bouncex_show_"+a)}};

		function getTime2(){
		return parseInt(new Date().getTime()/1000)+bouncex.server_client_time_diff;
	}

		function report_ga(action,label,bypass){
		bypass = typeof(bypass)!='undefined' && !!bypass;
		if(typeof(action)!='string'||typeof(label)!='string') return;
		var interaction = false;
		// enforce case convention
		if(!bypass) {
			action = action.charAt(0).toUpperCase() + action.slice(1).toLowerCase();
			interaction = action=='Impression';
			action = 'BounceX ' + action;
		}
		if(typeof window._gaq == 'object') {
						window._gaq.push(['_trackEvent','BounceX',action,label,,interaction]);
		}
		if(typeof window.ga == 'function') {
						window.ga('send','event','BounceX',action,label,{'nonInteraction':interaction});
		}
	}

	function can_show_ad(ca_id,inthefuture){
		var time_now = getTime2();
		if(bouncex.website.tpc==0){
			var bcxc = getBounceCookie();	
			if(bcxc){
				bouncex.cookie = bouncex.parseJSON((bcxc));
				if(!bouncex.cookie)
					return false;
			}else{ 
				//bouncex.log('no cookie');
				return false;
			}
		}

		/*var new_session = (bouncex.campaigns[ca_id].session_length+bouncex.cookie.campaigns[ca_id].lvt)<time_now;*/
		bouncex.cookie.lvt = bouncex.cookie.campaigns[ca_id].lvt = time_now;

		setBounceCookie();
		/*if(new_session){
			//bouncex.log('new session!');
			//extend session 
			bouncex.cookie.campaigns[ca_id].as = 0;
		}*/
		
		if( !inthefuture){
			if(bouncex.campaigns[ca_id].overlay!='none'&& bouncex.overlay_visible){
				//bouncex.log('FALSE:overlay_visible');
				return false;
			}
		
			if(bouncex.campaigns[ca_id].ad_visible){
				//bouncex.log('FALSE:visible');
				return false;
			}
						if(bouncex.campaigns[ca_id].tvao>0){
				var top = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
				if(bouncex.campaigns[ca_id].tvao>top){
					return false;
				}
			}
		}
		if(bouncex.campaigns[ca_id].failed){
			return false;
		}
		if(bouncex.campaigns[ca_id].map>0){//if max per pageview
			if(bouncex.campaigns[ca_id].overlay!='none' && bouncex.website.map>0 && bouncex.website.map>=bouncex.campaigns[ca_id].map && bouncex.website.map<=bouncex.pa){
				//bouncex.log('FALSE:max_activations_pageview',bouncex.website.max_activations_pageview,bouncex.pageview_activations,bouncex.campaigns[ca_id].overlay);
				return false;
			}
			if(bouncex.campaigns[ca_id].ap>=bouncex.campaigns[ca_id].map){
				//bouncex.log('FALSE:max_activations_pageview');
				return false;
			}
		}
		if(bouncex.campaigns[ca_id].mas>0){//if max per session
			//website level
			/*if(bouncex.campaigns[ca_id].overlay!='none' && bouncex.website.mas>0 && bouncex.website.mas>=bouncex.campaigns[ca_id].mas && bouncex.website.mas<=bouncex.campaigns[ca_id].as){
				//bouncex.log('FALSE:max_activations_session');
				return false;
			}*/
			//campaign level
			if(bouncex.cookie.campaigns[ca_id].as>=bouncex.campaigns[ca_id].mas){
				//bouncex.log('FALSE:max_actiavtions_session');
				return false;
			}
		}
		if(!bouncex.campaigns[ca_id].is_man && bouncex.website.mas>0 && bouncex.campaigns[ca_id].overlay!='none' && bouncex.website.mas<=bouncex.cookie.as){
			//bouncex.log('FALSE:max_activations_session');
			return false;
		}
		if(bouncex.campaigns[ca_id].mao>0 && bouncex.cookie.campaigns[ca_id].ao>=bouncex.campaigns[ca_id].mao){
			//bouncex.log('FALSE:overall_activations');
			return false;
		}
		
		if((bouncex.cookie.es|| bouncex.cookie.campaigns[ca_id].ls ||  bouncex.cookie.campaigns[ca_id].submitted) && (bouncex.campaigns[ca_id].is_ec)){
			//bouncex.log('FALSE:email:submitted');
			return false;
		}
		if((bouncex.campaigns[ca_id].is_pers || bouncex.campaigns[ca_id].closed_no_show) && bouncex.cookie.campaigns[ca_id].wc){
			//bouncex.log('FALSE:closed');
			return false;
		}
		if(bouncex.campaigns[ca_id].repressed){
			return false;
		}
		
		
		return true;
	}

		function destroy_ad(ca_id) {
		/*if(!bouncex.campaigns[ca_id].ad_visible)
			return;//already closed*/
		close_ad(ca_id,true);
		jQuery('#campaign_'+ca_id+'_container_overlay,#campaign_'+ca_id+'_container_top,#campaign_'+ca_id+'_container_bottom,#campaign_'+ca_id+'_pusher_top,#campaign_'+ca_id+'_pusher_bottom').remove();
		if(bouncex.campaigns[ca_id]){
			delete bouncex.campaigns[ca_id];
		}
	}
	
	function close_ad(ca_id,silent){
		if(!bouncex.campaigns[ca_id].ad_visible)
			return;//already closed
				jQuery('#campaign_'+ca_id+'_container_overlay,#campaign_'+ca_id+'_container_top,#campaign_'+ca_id+'_container_bottom').hide().css('display','none');

		bouncex.campaigns[ca_id].ad_visible = false;
		
		if(bouncex.campaigns[ca_id].overlay!='none'){
			bouncex.overlay_visible = false;
					}
		if(!silent){
			bouncex.cookie.campaigns[ca_id].wc = getTime2();
			setBounceCookie();
			report(ca_id,'closes');
		
			if(bouncex.campaigns[ca_id].onclose_fn){
				bouncex.campaigns[ca_id].onclose_fn();
			}
		
			if(bouncex.campaigns[ca_id].close_redirect_url){
				bouncex_events['timeout_close_redirect_'+ca_id] = setTimeout(function(){
					teleport(bouncex.campaigns[ca_id].close_redirect_type,bouncex.campaigns[ca_id].close_redirect_url);
				},300);
			};
		}
		
		if(bouncex.campaigns[ca_id].top!='none'){
			jQuery('#campaign_'+ca_id+'_pusher_top').prependTo('body').slideUp('slow');
		}
		if(bouncex.campaigns[ca_id].bottom!='none'){
			jQuery('#campaign_'+ca_id+'_pusher_bottom').appendTo('body').slideUp('slow');
		}
		if(bouncex.campaigns[ca_id].overlay=='code' || bouncex.campaigns[ca_id].overlay=='email' || bouncex.campaigns[ca_id].overlay=='genie'){
			flash_objects.css('visibility','visible');
		}
		event_js_eval(ca_id,'close');
	}
	function zoomDisable(w){
		/*var agent = navigator.userAgent.toLowerCase();
		var supported =   agent.indexOf('chrome')>0||agent.indexOf('firefox')>0;*/
		//jQuery('head').prepend('<meta name="viewport" content="user-scalable=no"/>');
	}
	function zoomEnable(){
		//jQuery('head meta[name=viewport]').remove();
		//jQuery('head').prepend('<meta name="viewport" content="user-scalable=yes"/>');
	}
	function center_campaign(ca_id,el){
				if(!bouncex.fs()){
			var valign = el.getAttribute("data-valign");
			var height = parseInt(getStyle(el,'height'));
			var type = el.getAttribute('data-type');
			var wsize = bouncex.wndsize();
			var wheight = wsize.height;
			el.style.position = 'absolute';						
			scroll_campaign(valign,type,el,wheight,height);
			jQuery(window).bind('scroll',function(k,v){
				scroll_campaign(valign,type,el,wheight,height);
			});
		}
			}
	function scroll_campaign(valign,type,el,wheight,height){
		var top = get_top();
		if(valign=='middle'){
			if(type=='overlay'){
				el.style.top = top+'px';
			}else{
				el.style.top = (top+wheight/2-height/2)+'px';
			}
		}else if(valign=='bottom'){	
			
			el.style.top = (top+wheight-height)+'px';
		}else if(valign=='top'){
			el.style.top = (top)+'px';
		}
	}
	function get_top(){
		return ((document.documentElement && document.documentElement.scrollTop)?(document.documentElement.scrollTop):document.body.scrollTop);
	}
	function show_ad(type,ca_id){
		
		if(!can_show_ad(ca_id)){
			return;
		}	
		bouncex.campaigns[ca_id].ad_visible = true;
		bouncex.campaigns[ca_id].impression_click_reported = false;
		bouncex.campaigns[ca_id].submitted = false;
		var zx = 2147483646;
		if(bouncex.campaigns[ca_id].top!='none'){
			var top = document.getElementById('campaign_'+ca_id+'_container_top');
			if(top){
				show_ca_el(ca_id,top);
				if(bouncex.campaigns[ca_id].header_top_nano){
					var h = document.getElementById('campaign_'+ca_id+'_pusher_top');
					document.body.insertBefore(h,document.body.firstChild);
					if(bouncex.campaigns[ca_id].htna=='anypage' || (bouncex.campaigns[ca_id].htna=='landing'&&bouncex.is_on_landing)){
						bSlideDown(h,'height');
					}else{
						h.style.display = 'block';
					}
				}
				center_campaign(ca_id,top);
				XD.postMessage('bcx_pop',top);
			}
		}
		if(bouncex.campaigns[ca_id].bottom!='none'){
			var bottom = document.getElementById('campaign_'+ca_id+'_container_bottom');
			if(bottom){
				show_ca_el(ca_id,bottom);
				
				if(bouncex.campaigns[ca_id].header_bottom_nano){
					var h = document.getElementById('campaign_'+ca_id+'_pusher_bottom');
					
					jQuery(document.body).append(h);
					
					if(bouncex.campaigns[ca_id].hbna=='anypage' || (bouncex.campaigns[ca_id].hbna=='landing'&&bouncex.is_on_landing)){
						bSlideDown(h,'height');
					}else{
						h.style.display = 'block';
					}
				}
				center_campaign(ca_id,bottom);
				XD.postMessage('bcx_pop',bottom);
			}
		}
			
		noteCookieAdShown(ca_id,true);
		event_js_eval(ca_id,'impression');
		if(bouncex.campaigns[ca_id].overlay!='teleport'){	
			show_close(ca_id);
			if(bouncex.campaigns[ca_id].ad_auto_close){
				var delay = bouncex.campaigns[ca_id].is_pers?calc_delay_cvt(bouncex.campaigns[ca_id].ad_auto_close):bouncex.campaigns[ca_id].ad_auto_close*1000;
				bouncex_events['timeout_auto_close_'+ca_id] = setTimeout(function(){
					close_ad(ca_id);
				},delay);
			}
		}
		if(bouncex.campaigns[ca_id].overlay!='none'){
			if(bouncex.campaigns[ca_id].overlay=='email' || bouncex.campaigns[ca_id].overlay=='genie' || bouncex.campaigns[ca_id].overlay=='code'){
				var middle = document.getElementById('campaign_'+ca_id+'_container_overlay');
				if(middle){
					show_ca_el(ca_id,middle);
					bouncex.overlay_visible = true;
					var lbx = document.getElementById('campaign_'+ca_id+'_lightbox');
					lbx.style.backgroundColor = bouncex.campaigns[ca_id].color;
					setOpacity(lbx,bouncex.campaigns[ca_id].opacity);
					lbx.style.display='block';
					var mid = document.getElementById('campaign_'+ca_id+'_middle');
					if(!bouncex.fs()){
						middle.style.top = middle.style.left =0;
						mid.style.position = 'absolute';
					}
					center_campaign(ca_id,middle);
					if(top){
						top.style.zIndex = zx;
					}
					if(bottom){
						bottom.style.zIndex = zx;
					}
					//always see x
					if(bouncex.campaigns[ca_id].overlay=='code'){
						var wind = bouncex.wndsize();
						var winH = wind.height;
						var winW = wind.width;
						var w = parseInt(getStyle(mid,'width'));
						var h = parseInt(getStyle(mid,'height'));
						
						if(winH<((h)+10)){
							mtop = -(winH/2)+20;
							mid.style.marginTop = mtop+'px';
						}
						if(winW<((w)+10)){
							mleft = -((w)-winW/2)-20;
							mid.style.marginLeft = mleft+'px';
						}
					}
										hide_flash();
				}
				XD.postMessage('bcx_pop',middle);
			}else if(bouncex.campaigns[ca_id].overlay==='teleport'){
				teleport(bouncex.campaigns[ca_id].overlay_teleport_type,bouncex.campaigns[ca_id].overlay_teleport_html);
			}
		}
		
		if(bouncex.campaigns[ca_id].supress_overlay || bouncex.campaigns[ca_id].supress_top || bouncex.campaigns[ca_id].supress_bottom){
			for(var nca_id in bouncex.campaigns) {
				if(nca_id!=ca_id &&(bouncex.campaigns[ca_id].supress_overlay && bouncex.campaigns[nca_id].overlay!='none'
				||
				bouncex.campaigns[ca_id].supress_top && bouncex.campaigns[nca_id].top!='none'
				||
				bouncex.campaigns[ca_id].supress_bottom && bouncex.campaigns[nca_id].bottom!='none'
				)){
					close_ad(nca_id,true);
				}
			}	
		}
		if(bouncex.campaigns[ca_id].repress_overlay || bouncex.campaigns[ca_id].repress_top || bouncex.campaigns[ca_id].repress_bottom){
			
			for(var nca_id in bouncex.campaigns) {
				if(nca_id!=ca_id &&(bouncex.campaigns[ca_id].repress_overlay && bouncex.campaigns[nca_id].overlay!='none'
				||
				bouncex.campaigns[ca_id].repress_top && bouncex.campaigns[nca_id].top!='none'
				||
				bouncex.campaigns[ca_id].repress_bottom && bouncex.campaigns[nca_id].bottom!='none'
				)){ 
					bouncex.campaigns[nca_id].repressed = true;
				}
			}	
		}
		
		
		if(bouncex.campaigns[ca_id].osfn_website){
			try{
				eval(bouncex.campaigns[ca_id].osfn_website);
			}catch(err){
				bouncex.log(err);
			}
		}	
	}
	function event_js_eval(ca_id,type,data){
		if(bouncex.campaigns[ca_id].event_js){
			if(typeof(bouncex.campaigns[ca_id].event_js)=='string'){
				bouncex.campaigns[ca_id].event_js = bouncex.parseJSON(bouncex.campaigns[ca_id].event_js);
			}
			if(bouncex.campaigns[ca_id].event_js[type]){
				try{
					eval(bouncex.campaigns[ca_id].event_js[type]);
				}catch(err){
					bouncex.log(err);
				}
			}
		}
	}
	
	
	function teleport(type,url){
		if(type=='underlay' || type=='_blank'){
			if(type=='_blank'){
				window.open(url,'_blank');
			}else{
				var d = bouncex.wndsize();
				var teleport_args = 'toolbar=0,scrollbars=1,location=1,statusbar=1,menubar=0,resizable=1,width=' + d.width + ',height=' + d.height;
				var popunder = self.window.open(url, 'bouncex', teleport_args);
				popunder.blur();
				popunder.opener.window.focus();
				window.self.window.focus();
				window.focus();
				try {
					if (bouncex.browser.firefox){
						var ghost = window.open('about:blank');
						ghost.focus();
						ghost.close();
					}else if (bouncex.browser.webkit) {
						var nothing = '';
						var ghost = document.createElement("a");
						ghost.href   = "data:text/html,<scr"+nothing+"ipt>window.close();</scr"+nothing+"ipt>";
						document.getElementsByTagName("body")[0].appendChild(ghost);
						var clk = document.createEvent("MouseEvents");
						clk.initMouseEvent("click", false, true, window, 0, 0, 0, 0, 0, true, false, false, true, 0, null);
						ghost.dispatchEvent(clk);
						ghost.parentNode.removeChild(ghost);
					}else if (bouncex.browser.msie) {
						setTimeout(function() {
							popunder.blur();
							popunder.opener.window.focus();
							window.self.window.focus();
							window.focus();
						}, 100);
					}
				} catch (e) {
					bouncex.log(e);
				}
			}				
		}else{
			window.open(url,type);
		}
	}
	function noteCookieAdShown(ca_id,increment){

		bouncex.campaigns[ca_id].ad_shown = true;
		report(ca_id,'pops');
		bouncex.cookie.campaigns[ca_id].lavid = bouncex.cookie.vid;
		bouncex.cookie.campaigns[ca_id].la = getTime2();
		if(!bouncex.cookie.campaigns[ca_id].fsa){
			bouncex.cookie.campaigns[ca_id].fsa = bouncex.cookie.campaigns[ca_id].la;//first session activation time
		}
		if(increment){
			bouncex.cookie.campaigns[ca_id].as++;
			bouncex.cookie.campaigns[ca_id].ao++;
			if(bouncex.campaigns[ca_id].overlay !== 'none' && !bouncex.campaigns[ca_id].is_man ){
				bouncex.cookie.ao++;
				bouncex.pa++;
				bouncex.cookie.as++;
				bouncex.campaigns[ca_id].ap = bouncex.campaigns[ca_id].ap?bouncex.campaigns[ca_id].ap+1:1;
			}
		}
		setBounceCookie();
	}
	function show_close(ca_id){
		if(bouncex.campaigns[ca_id].close_button_delay || !bouncex.campaigns[ca_id].show_close){
			var closes;
			var poses = ['_top','_bottom','_overlay'];
			for (var index = 0; index < poses.length; index++) {
				closes = document.getElementById('bcx_close_'+ca_id+poses[index]);
				
				if(closes)
					closes.style.display = 'none';
			};
			if(bouncex.campaigns[ca_id].show_close){
				bouncex_events['timeout_close_delay_'+ca_id] = setTimeout(function(){
					for (var index = 0; index < poses.length; index++) {
						closes = document.getElementById('bcx_close_'+ca_id+poses[index]);
						if(closes)
							closes.style.display = 'block';
					};
				
				},bouncex.campaigns[ca_id].close_button_delay*1000);
			}
		}
	}
	function report(ca_id,type,onsuccess_fn){

				

		if(type=='clicks'){
			if(bouncex.campaigns[ca_id].impression_click_reported){
				return false;
			}else{
				bouncex.campaigns[ca_id].impression_click_reported =true;
			}
			bouncex.cookie.campaigns[ca_id].lclk = getTime2();
			
			setBounceCookie();
		}else if(type=='closes'){

			if(bouncex.campaigns[ca_id].impression_click_reported || bouncex.campaigns[ca_id].submitted){
				return false;
			}
		}else if(type.substr(0,6)=='coupon'){
						try {
				bouncex.cookie.cpn = parseInt(type.substr(7));
				setBounceCookie();
			}catch(e){}
		}
		
			jQuery('<img src="http://bounceexchange.com/capture/report.jpg?m='+bouncex.cookie.m+'&website_id='+bouncex.website.id+'&d='+bouncex.cookie.d+'&type='+type+'&cv_id='+bouncex.cookie.campaigns[ca_id].cv_id+'&c_id='+ca_id+'&v_id='+bouncex.cookie.vid+'&opt_rand='+(Math.random())+'"/>');
			if(type=='clicks'){
			//DH: js event should adhere to first-click-only rule
			event_js_eval(ca_id,'click');
		}
		if(onsuccess_fn)
			onsuccess_fn();
	}
	function qs(o) {
		var a=[],s='';
		for(var k in o){
			if(!o.hasOwnProperty(k)) continue;
			a.push(k+'='+encodeURIComponent(o[k]));
		}
		return a.join('&');
	}
	function report_submit(ca_id, obj, complete) {
		obj.m = bouncex.cookie.m;
		obj.d = bouncex.cookie.d;
		obj.visit_id = bouncex.cookie.vid;
		obj.campaign_id = ca_id;
		obj.website_id = bouncex.website.id;
		try {obj.cv_id = bouncex.cookie.campaigns[ca_id].cv_id;}catch(e){}
		if (!obj.hasOwnProperty('step')){obj.step=1;}
		if (complete){obj.last_step=1;}
		jQuery('<img src="http://bounceexchange.com/capture/submit.jpg?'+qs(obj)+'"/>');
	}

	function report_conversion(obj){
		bouncex.bcxReady(function(){
			var bamount,border_id = 0;
			var bemail,bscape = '';
			var bgoal = '';

			if(obj){
				bamount = obj.amount;
				border_id = obj.order_id;
				bemail = obj.email;
				if (obj.goal) {
					bgoal = obj.goal;
				}
			}
												
			bouncex.cookie.lc = getTime2();
			setBounceCookie();
			jQuery('<img src="http://bounceexchange.com/capture/convert.jpg?m='+bouncex.cookie.m+'&d='+bouncex.cookie.d+'&goal='+encodeURIComponent(bgoal)+'&email='+encodeURIComponent(bemail)+'&order_id='+encodeURIComponent(border_id)+'&amount='+encodeURIComponent(bamount)+'&website_id='+bouncex.website.id+'&visit_id='+bouncex.cookie.vid+'&cookie='+escape(bouncex.stringify(bouncex.cookie))+'&'+bouncex.ibx.conv_params()+'"/>');

								});
	}

	function getStyle(e,t){if(e.currentStyle)var n=e.currentStyle[t];else if(window.getComputedStyle)var n=document.defaultView.getComputedStyle(e,null).getPropertyValue(t);return n}
	function show_ca_el(ca_id,element){
		if(bouncex.campaigns[ca_id].te=='no_effect'){
			element.style.display='block';
		}else if(bouncex.campaigns[ca_id].te=='fade'){
			fade(element,bouncex.campaigns[ca_id].tes);
		}else if(bouncex.campaigns[ca_id].te=='slide'){
			slide(element,bouncex.campaigns[ca_id].tes,ca_id);
		}
	}
	function slide(what,duration,ca_id){
		var mid = document.getElementById('campaign_'+ca_id+'_middle');
		if(mid){
			mid.style.display = 'none';
			bSlideDown(mid,'top');
		}
		what.style.display='block';
		
	}
	function fade(what, duration) {
		jQuery(what).fadeIn(duration*10+500);
	}
	function setOpacity(el,val){
		el.style.opacity = val;
		el.style.filter = 'alpha(opacity='+val*100+')';
	}
	function bSlideDown(el,prop){
		var h = (getStyle(el,prop));
		var sym = h.indexOf('%')>0?'%':'px';
		var f = parseInt(h);
		var ch = 0;
		el.style[prop] = 0;
		el.style.display = 'block';
		var iv3 = setInterval(function(){
			if(f>ch){
				el.style[prop] = ch+sym;
				ch++;
			}else{
				clearInterval(iv3);
				return;
			}
		},1);
	}
	function setBounceCookie(){
		var c_name = 'bounceClientVisit481';
		var c_value2 = '; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
					var exdays = 360;
			var exdate=new Date();
			exdate.setDate(exdate.getDate() + exdays);
			var c_value=(bouncex.stringify(bouncex.cookie)) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
			
						document.cookie =  (c_name + "=" + c_value2 + ";path=/;");
			document.cookie =  (c_name + "=" + c_value + ";path=/;domain=.shefinds.com;");
						}

		function init_website_custom_js() {
			}

		function init_ibx_tracking() {
			}
	
})();
function close_bouncex_ad(ca_id){
	bouncex.close_ad(ca_id);
}