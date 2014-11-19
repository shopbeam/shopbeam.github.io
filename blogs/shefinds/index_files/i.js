//<script>
if (!bouncex) { 
window.console || (window.console = {log: function () { return {} }});

var bouncex = {};
var bcx_init = function(){
	if(bouncex.baddjs){
		return;//only include our tag once
	}
	if(!window['postMessage']){
		return;//only support browsers that support messages
	}
		if(document.cookie.length>6000){
		return;
	}
			if(window!=window.top){//we can't run inside of iframe
			return;
		}
	
	bouncex.log = function(msg){
		if(typeof(console)=='object' && console.log){
			console.log(msg+'');
		}
	};
	function getJString(e){var t=typeof e;if(t!="object"||e===null){if(t=="string")e='"'+e+'"';return String(e)}else{var n,r,i=[],s=e&&e.constructor==Array;for(n in e){r=e[n];t=typeof r;if(t=="string")r='"'+r+'"';else if(t=="object"&&r!==null)r=getJString(r);i.push((s?"":'"'+n+'":')+String(r))}return(s?"[":"{")+String(i)+(s?"]":"}")}}

	bouncex.stringify = function(e){
		if(typeof JSON === 'undefined' || typeof JSON.stringify !== 'function'){
			return getJString(e);
		}else{
			return JSON.stringify(e);
		}
	};
	bouncex.parseJSON=function(e){if(window.JSON&&window.JSON.parse){return window.JSON.parse(e)}if(e===null){return e}if(typeof e==="string"&&e){var t=/^[\],:{}\s]*$/,n=/(?:^|:|,)(?:\s*\[)+/g,r=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,i=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g;if(t.test(e.replace(r,"@").replace(i,"]").replace(n,""))){return(new Function("return "+e))()}}}

		bouncex.updateQS=function(){var e=arguments.length&1,t=e?arguments[0]:window.top.location.href,n=t.split("#"),r=n[0],i=n.length>1?n[1]:false,s=[];for(var o=e;o<arguments.length;o+=2){var u=arguments[o],a=encodeURIComponent(arguments[o+1]),f=new RegExp("([?&])"+u+"=?.*?(&|$)","gi");if(r.match(f))r=r.replace(f,"$1"+u+"="+a+"$2");else s.push(u+"="+a)}if(s.length)r+=(r.indexOf("?")==-1?"?":r.slice(-1)!="&"?"&":"")+s.join("&");return r+(i?"#"+i:"")};

	bouncex.referrer = escape(document.referrer);

	bouncex.baddjs = function(file){
		var oScript = document.createElement("script");
		oScript.setAttribute("src", file);
		oScript.setAttribute("type", "text/javascript");
		document.getElementsByTagName("head")[0].appendChild(oScript);
	};
	bouncex.wndsize = function(){
		var e=0;var t=0;if(!window.innerWidth){if(!(document.documentElement.clientWidth==0)){e=document.documentElement.clientWidth;t=document.documentElement.clientHeight}else{e=document.body.clientWidth;t=document.body.clientHeight}}else{e=window.innerWidth;t=window.innerHeight}return{width:e,height:t};
	};
		if(areCookiesEnabled()){
		var tojQ = typeof jQuery;
		var bcxReady = false;

		bouncex.bcxReady = function(f) {
			if (!bouncex._bcxReady) {
				eval('bouncex._bcxReady=function(){function i(){if(r.isReady){return}try{document.documentElement.doScroll("left")}catch(e){setTimeout(i,1);return}r.ready()}function s(t){r.bindReady();var n=r.type(t);e.done(t)}var e,t,n={};n["[object Boolean]"]="boolean";n["[object Number]"]="number";n["[object String]"]="string";n["[object Function]"]="function";n["[object Array]"]="array";n["[object Date]"]="date";n["[object RegExp]"]="regexp";n["[object Object]"]="object";var r={isReady:false,readyWait:1,holdReady:function(e){if(e){r.readyWait++}else{r.ready(true)}},ready:function(t){if(t===true&&!--r.readyWait||t!==true&&!r.isReady){if(!document.body){return setTimeout(r.ready,1)}r.isReady=true;if(t!==true&&--r.readyWait>0){return}e.resolveWith(document,[r])}},bindReady:function(){if(e){return}e=r._Deferred();if(document.readyState==="complete"){return setTimeout(r.ready,1)}if(document.addEventListener){document.addEventListener("DOMContentLoaded",t,false);window.addEventListener("load",r.ready,false)}else if(document.attachEvent){document.attachEvent("onreadystatechange",t);window.attachEvent("onload",r.ready);var n=false;try{n=window.frameElement==null}catch(s){}if(document.documentElement.doScroll&&n){i()}}},_Deferred:function(){var e=[],t,n,i,s={done:function(){if(!i){var n=arguments,o,u,a,f,l;if(t){l=t;t=0}for(o=0,u=n.length;o<u;o++){a=n[o];f=r.type(a);if(f==="array"){s.done.apply(s,a)}else if(f==="function"){e.push(a)}}if(l){s.resolveWith(l[0],l[1])}}return this},resolveWith:function(r,s){if(!i&&!t&&!n){s=s||[];n=1;try{while(e[0]){e.shift().apply(r,s)}}finally{t=[r,s];n=0}}return this},resolve:function(){s.resolveWith(this,arguments);return this},isResolved:function(){return!!(n||t)},cancel:function(){i=1;e=[];return this}};return s},type:function(e){return e==null?String(e):n[Object.prototype.toString.call(e)]||"object"}};if(document.addEventListener){t=function(){document.removeEventListener("DOMContentLoaded",t,false);r.ready()}}else if(document.attachEvent){t=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",t);r.ready()}}}return s}()');
			}
			bouncex._bcxReady(f);
		};

					bcxReady=true;		
		

		function validv(v) {
			return ((typeof(v)=='number'&&!isNaN(v))||typeof(v)=='string'||typeof(v)=='boolean');
		}

		function maked(exp) {
			var v=null;
			try { v=eval(exp); } catch(e){bouncex.log('bad maked ' + exp);}
			return validv(v)?v:0;
		}

		function makeq(exp) {
			var f=function() {return null;}
			var str = 'f = (function(){return ' + exp + '});';
			try {eval(str);} catch(e){bouncex.log('bad makef ' + exp);}
			return f;
		}

		var evalv = function(n) {
			var r={s:true,c:false,v:bouncex.vard[n].d}; 			var nv=r.v;
			try { nv=bouncex.vard[n].q(); }
			catch(e) { r.s=false; }
			if (!validv(nv)) { r.s=false; }
			if (r.s) { 
				r.v = nv;
				r.c = r.v!=bouncex.vars[n];
			}
			return r;
		}

		var init_vars = function() {

						var cookie = getBounceCookie();
			bouncex.cookie = cookie ? bouncex.parseJSON(cookie) : {};

						bouncex.vard = {};
			bouncex.vars = {};
			bouncex.varp = {max:0,c:0,timer:null,vn:[],suc:{},def:{}};
			
					var n = 'categories';
					bouncex.vard[n] = { d: maked('0'), q: makeq('$(\'a[rel=\"category tag\"]\').map(function(){return $(this).text();}).get().join().toLowerCase()'),m:'none',p:false };
					initv(n);
					
		}

		var formatv = bouncex.formatv = function(nv) {
			if (nv==='true'){return true;}
			else if (nv==='false'){return false;}
			else if (typeof nv==='string' && nv.match(/^[0-9]+$/)){return parseInt(nv);}
			else if (typeof nv==='string' && nv.match(/^[0-9]+\.[0-9]+$/)){return parseFloat(nv);}
			return nv;
		}

		var getpv = function(n) { 			return (bouncex.cookie.v && bouncex.cookie.v[n]) 				? formatv(bouncex.cookie.v[n])
				: bouncex.vard[n].d;
		}

		var initv = function(n) {
						setv(n, evalv(n).v);
					}

		var setv = bouncex.setv = function(n,v) {
			bouncex.vars[n] = v;
					}

		

		
		bouncex.make_include_string = function(type){
			var bcx_persist = '';
			if(!type){
				type = 'init1';

									var cookie = getBounceCookie();
							}else{
				var cookie = bouncex.stringify(bouncex.cookie);
				type = 'reloadCampaigns';
			}
			//var cookie = bouncex.stringify(bouncex.cookie);
			bcx_vars = '';
			var currval = null;
			for(var n in bouncex.vars) {
				var v = bouncex.vars[n];
				bcx_vars += '&vars['+n+']='+escape(v);
			}
			var tzo = new Date().getTimezoneOffset();
			var wsize = bouncex.wndsize();
			var resolution = wsize.width+'x'+wsize.height;
			var bcx_str = window.location.protocol + '//bounceexchange.com/bounce/'+type+'.js?tojQ='+tojQ+'&tzo='+tzo+'&is_preview=false&website_id=481&resolution='+resolution+'&referrer='+bouncex.referrer+'&calling_url='+escape(window.location.href)+'&cookie='+escape(cookie)+bcx_vars.replace(/\+/g,'%2B')+bcx_persist;
			return bcx_str;
		}
		

		var bcx_str;
		if(bcxReady){
			bouncex.bcxReady(function(){
				init_vars();
				bcx_str = bouncex.make_include_string();
				bouncex.baddjs(bcx_str);
			});
		}else{
			init_vars();
			bcx_str = bouncex.make_include_string();
			bouncex.baddjs(bcx_str);
		}
	}else{
		bouncex.log('cookies disabled');
	}
	
	function areCookiesEnabled(){
		var cookieEnabled=(navigator.cookieEnabled)? true : false   
		if (typeof navigator.cookieEnabled=="undefined" && !cookieEnabled){ 
			document.cookie="testcookie";
			cookieEnabled=(document.cookie.indexOf("testcookie")!=-1)? true : false;
		}
		return cookieEnabled;
	}

	
};


	bcx_init();

} 

function getBounceCookie(name){
	if(!name){
		name = 'bounceClientVisit481';
	}	
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++){
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		if (x==name){
			return (y);
		}
	}
}


