(function(h,g,p){h.SPR||(h.SPR={provide:function(a,b){c[a]||(c[a]=b,"function"===typeof c[a].init&&c[a].init())}});var c=h.SPR;c.provide("Common",{random:function(){return Math.floor(8675309*Math.random())},isArray:function(a){return Array.isArray?Array.isArray(a):"[object Array]"===Object.prototype.toString.call(a)},isString:function(a){return"[object String]"===Object.prototype.toString.call(a)},hasOwnProperty:function(a,b){return Object.prototype.hasOwnProperty.call(a,b)}});c.provide("DOM",{init:function(){function a(){c.DOM.flush();
h.removeEventListener("DOMContentLoaded",a,!1)}function b(){/loaded|interactive|complete/.test(g.readyState)&&(g.detachEvent("onreadystatechange",b),d&&(d=!1,c.DOM.flush()))}c.DOM.on=c.DOM.attachEvent;c.DOM.off=c.DOM.detachEvent;var d=!0;h.addEventListener&&h.addEventListener("DOMContentLoaded",a);g.attachEvent&&g.attachEvent("onreadystatechange",b)},addIframeSync:function(a){var b=g.createElement("iframe"),d=g.body;b.setAttribute("name","spr");b.src=a;b.setAttribute("height","1");b.setAttribute("width",
"1");b.setAttribute("visible","false");b.style.display="none";d||(d=c.DOM.$("BODY")[0]);d||(d=c.DOM.$("HEAD")[0]);d.appendChild(b);return b},addScript:function(a){var b=g.createElement("script");b.type="text/javascript";b.setAttribute("async",!0);b.setAttribute("name","spr");b.src=a;c.DOM.onReady(function(){setTimeout(function(){c.DOM.$("HEAD")[0].appendChild(b)},1)});return b},queue:[],ready:/loaded|interactive|complete/.test(g.readyState),flush:function(){var a=c.DOM.queue.shift();for(c.DOM.ready=
!0;a;)a(),a=c.DOM.queue.shift()},onReady:function(a){c.DOM.ready?(c.DOM.queue.push(a),c.DOM.flush()):g.documentElement.doScroll?h.self===h.top?function(){if(!g.uniqueID&&g.expando)return c.DOM.queue.push(a);try{g.documentElement.doScroll("left"),a()}catch(b){setTimeout(arguments.callee,0)}}():c.DOM.queue.push(a):c.DOM.queue.push(a)},attachEvent:function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c);return a},detachEvent:function(a,c,d){a.addEventListener?a.removeEventListener(c,
d,!1):a.detachEvent("on"+c,d);return a},top:function(a){return a?a.y?a.y:a.offsetTop+c.DOM.top(a.offsetParent):0},left:function(a){return a?a.x?a.x:a.offsetLeft+c.DOM.left(a.offsetParent):0},height:function(a){return Math.max(a.scrollHeight||0,a.offsetHeight||0,a.clientHeight||0)},width:function(a){return Math.max(a.scrollWidth||0,a.offsetWidth||0,a.clientWidth||0)},scroll:function(){var a=0;return a=h.pageYOffset?h.pageYOffset:g.documentElement?g.documentElement.scrollTop:0},viewport:function(){var a=
0,b=0,b=g.documentElement;h.innerWidth?(a=h.innerWidth,b=h.innerHeight):(b&&b.clientWidth||(b=c.$("BODY")[0]),a=b.clientWidth,b=b.clientHeight);return{w:a,h:b}},getsupportedprop:function(a){for(var c=g.documentElement,d=0;d<a.length;d++)if("string"==typeof c.style[a[d]])return a[d]},$:function(a){var c=[],d,e=0,f;if(!a)return[];if("string"!==typeof a)return[a];switch(a.charAt(0)){case "#":c.push(g.getElementById(a.substring(1)));break;case ".":d=g.getElementsByTagName("*");for(f=" "+a.substring(1)+
" ";e<d.length;e+=1)a=(" "+d[e].className+" ").replace(/[\n\t\r]/g," "),-1<a.indexOf(f)&&c.push(d[e]);break;default:c=g.getElementsByTagName(a)}return c}});c.provide("QS",{escape:function(a){return encodeURIComponent(a)},unescape:function(a){return decodeURIComponent(a)},encode:function(a,b){var d=c.QS,e=[];if(c.Common.isArray(a))for(var f=0,k;f<a.length;f+=1)k=a[f],/\[\]$/.test(b)?e.push(d.escape(b)+"="+d.escape(k)):e.push(d.encode(k,b+"["+("object"===typeof k?f:"")+"]"));else if("object"!==typeof a||
null===a||"nodeType"in a)e.push(d.escape(b)+"="+d.escape(a));else for(f in a)Object.prototype.hasOwnProperty.call(a,f)&&(b?e.push(d.encode(a[f],b+"["+f+"]")):e.push(d.encode(a[f],f)));return e.join("&")},decode:function(a){var b={},d=0,e={"true":!0,"false":!1,"null":null};for(a=a.replace(/\+/g," ").split("&");d<a.length;d+=1){var f=a[d].split("="),k=c.QS.unescape(f[0]),l=b,g=0,h=k.split("]["),m=h.length-1;/\[/.test(h[0])&&/\]$/.test(h[m])?(h[m]=h[m].replace(/\]$/,""),h=h.shift().split("[").concat(h),
m=h.length-1):m=0;if(2===f.length)if(f=(f=c.QS.unescape(f[1]))&&!isNaN(f)?+f:"undefined"===f?void 0:void 0!==e[f]?e[f]:f,m)for(;g<=m;g+=1)k=""===h[g]?l.length:h[g],l=l[k]=g<m?l[k]||(h[g+1]&&isNaN(h[g+1])?{}:[]):f;else c.Common.isArray(b[k])?b[k].push(f):b[k]=void 0!==b[k]?[b[k],f]:f;else k&&(b[k]=void 0)}return b}});c.provide("API",{callbacks:{},jsonp:function(a,b,d,e,f){e=e||p;f||(f="cb");var g="cb"+c.Common.random(),l=c.API;d[f]="SPR.API.callbacks."+g;f=h.location.protocol+"//";"file://"===f&&(f=
"http://");d=c.QS.encode(d);var n=c.DOM.addScript(f+a+b+"?"+d);l.callbacks[g]=function(a){setTimeout(function(){n.parentNode.removeChild(n)},0);e(a);try{delete l.callbacks[g]}catch(c){l.callbacks[g]=null}}}});c.provide("de",{api:"feeds.delicious.com",apiPath:"/v2/json/urlinfo/data",collect:function(a){var b=c.de;c.API.jsonp(b.api,b.apiPath,{url:a.url},function(b){c.API.jsonp("cc.simplereach.com","/event",{event:"s",url:a.url,cid:a.id,pid:a.pid,sn:"de",data:b})},"callback")}});c.provide("dg",{api:"services.digg.com",
apiPath:"/stories/",collect:function(a){var b=c.dg;c.API.jsonp(b.api,b.apiPath,{type:"javascript",link:a.url},function(b){c.API.jsonp("cc.simplereach.com","/event",{event:"s",url:a.url,cid:a.id,pid:a.pid,sn:"dg",data:b})},"callback")}});c.provide("fb",{api:"graph.facebook.com",apiPath:"/fql",collect:function(a){var b=c.fb;c.API.jsonp(b.api,b.apiPath,{q:'SELECT url,total_count,share_count,comment_count,like_count,click_count,commentsbox_count FROM link_stat WHERE url in ("'+a.url+'")'},function(b){c.API.jsonp("cc.simplereach.com",
"/event",{event:"s",url:a.url,cid:a.id,pid:a.pid,sn:"fb",data:b})},"callback")}});c.provide("gp",{api:"clients6.google.com",apiPath:"rpc",collect:function(a){}});c.provide("li",{api:"www.linkedin.com",apiPath:"/countserv/count/share",collect:function(a){var b=c.li;c.API.jsonp(b.api,b.apiPath,{url:a.url},function(b){c.API.jsonp("cc.simplereach.com","/event",{event:"s",url:a.url,cid:a.id,pid:a.pid,sn:"li",data:b})},"callback")}});c.provide("rd",{api:"www.reddit.com",apiPath:"/api/info.json",collect:function(a){var b=
c.rd;c.API.jsonp(b.api,b.apiPath,{url:a.url},function(b){c.API.jsonp("cc.simplereach.com","/event",{event:"s",url:a.url,cid:a.id,pid:a.pid,sn:"rd",data:b})},"jsonp")}});c.provide("pi",{api:"partners-api.pinterest.com",apiPath:"/v1/urls/count.json",collect:function(a){var b=c.pi;c.API.jsonp(b.api,b.apiPath,{url:a.url},function(b){c.API.jsonp("cc.simplereach.com","/event",{event:"s",url:a.url,cid:a.id,pid:a.pid,sn:"pi",data:b})},"callback")}});c.provide("su",{api:"www.stumbleupon.com",apiPath:"/services/1.01/badge.getinfo",
collect:function(a){var b=c.su;c.API.jsonp(b.api,b.apiPath,{url:a.url},function(b){c.API.jsonp("cc.simplereach.com","/event",{event:"s",url:a.url,cid:a.id,pid:a.pid,sn:"su",data:b})})}});c.provide("tw",{api:"urls.api.twitter.com",apiPath:"/1/urls/count.json",collect:function(a){var b=c.tw;c.API.jsonp(b.api,b.apiPath,{url:a.url},function(b){c.API.jsonp("cc.simplereach.com","/event",{event:"s",url:a.url,cid:a.id,pid:a.pid,sn:"tw",data:b})},"callback")}});c.provide("Reach",{api:"cc.simplereach.com",
cdn:"d8rk54i4mohrb.cloudfront.net",config:{},init:function(){if(h.location.host!==c.Reach.cdn)try{var a=c.Reach,b=h.__reach_config||h.__spr_config,d=a.config||{},e;for(e in b)void 0===d[e]&&(d[e]=b[e]);d.ckw&&(d.tags=d.ckw.split(" "));d.pub&&(d.date=d.pub);d.cat&&(d.channels=d.cat.split(" "));if(!0===d.no_slide||1===d.no_slide)d.slide_active=!1;a.config=d;a.collect(d)}catch(f){c.DOM.onReady(function(){var a=g.createElement("img");a.src="http://cc.simplereach.com/pixel?bad=true&error="+f.message;a.setAttribute("width",
"1px");g.body.appendChild(a)})}},collect:function(a){function b(a){"string"===typeof a&&(a=a.split(","));if(c.Common.isArray(a)){for(var b=0;b<a.length;b+=1)"string"===typeof a[b]&&(a[b]=a[b].replace(/^\s*/,"").replace(/\s*$/,"").replace(/\|/,""));return a.join("|")}return a}var d=c.Reach,e={};e.pid=a.pid;e.url=a.url;e.title=a.title;e.date=a.date;e.domain=a.domain;e.ref_url=a.ref_url;e.referrer=a.referrer||g.referrer;e.page_url=a.page_url||h.location.toString();a.authors&&(e.authors=b(a.authors));
a.channels&&(e.channels=b(a.channels));a.tags&&(e.tags=b(a.tags));a.brand_tags&&(e.brand_tags=b(a.brand_tags));a.date&&"string"!==typeof a.date&&(e.date=a.date.toString());if(null!==e.pid&&void 0!==e.pid&&e.url&&e.date){if(0===e.url.indexOf("http%3"))try{e.url=decodeURIComponent(e.url)}catch(f){e.url=unescape(e.url)}a.url=e.url;a.iframe?(e.ref_url=e.ref_url||g.referrer,e.cache_buster=(new Date).getTime(),a=c.QS.encode(e),c.DOM.addIframeSync("//"+c.Reach.cdn+"/iframe.html?"+a)):(0===e.pid&&(e.pid=
"000000000000000000000000"),c.API.jsonp(d.api,"/n",e,function(a){if(!1!==a.slide){var b=!1;!0===d.config.slide_active?b=!0:!1!==d.config.slide_active&&!0===a.slide&&(b=!0);c.Slide&&(!0===b&&!1===c.Slide.enabled)&&c.Slide.enable(a.id)}a.de&&c.de.collect(a);a.dg&&c.dg.collect(a);a.fb&&c.fb.collect(a);a.gp&&c.gp.collect(a);a.li&&c.li.collect(a);a.rd&&c.rd.collect(a);a.su&&c.su.collect(a);a.tw&&c.tw.collect(a);a.pi&&c.pi.collect(a)}))}else if(!a.ignore_errors)try{console.log("SPR-ERROR: Please provide pid, url and date in the configuration")}catch(k){}}})})(window,
document,function(){});