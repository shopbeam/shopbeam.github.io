/* JS */ gapi.loaded_1(function(_){var window=this;
_.Pj=window.oauth2||{};_.Qj=window.auth_firstparty||{};
_.Vj=function(a,c){this.B=a;var f=c||{};this.M=f.Fr;this.G=f.domain;this.ha=f.path;this.qa=f.wD};_.dk=function(a){this.B=a};_.fk=function(a){this.B=a;this.G=window.sessionStorage};var LC=/^[-+/_=.:|%&a-zA-Z0-9@]*$/,MC=/^[A-Z_][A-Z0-9_]{0,63}$/;_.Vj.prototype.Hd=function(){for(var a=this.B+"=",c=window.document.cookie.split(/;\s*/),f=0;f<c.length;++f){var g=c[f];if(0==g.indexOf(a))return g.substr(a.length)}};
_.Vj.prototype.write=function(a,c){if(!MC.test(this.B))throw"Invalid cookie name";if(!LC.test(a))throw"Invalid cookie value";var f=this.B+"="+a;this.G&&(f+=";domain="+this.G);this.ha&&(f+=";path="+this.ha);var g="number"===typeof c?c:this.M;if(0<=g){var h=new Date;h.setSeconds(h.getSeconds()+g);f+=";expires="+h.toUTCString()}this.qa&&(f+=";secure");window.document.cookie=f};_.Vj.prototype.clear=function(){this.write("",0)}; _.Vj.iterate=function(a){for(var c=window.document.cookie.split(/;\s*/),f=0;f<c.length;++f){var g=c[f].split("="),h=g.shift();a(h,g.join("="))}};
var Ok={};_.dk.prototype.Hd=function(){if(Ok.hasOwnProperty(this.B))return Ok[this.B]};_.dk.prototype.write=function(a){Ok[this.B]=a};_.dk.prototype.clear=function(){delete Ok[this.B]};_.dk.iterate=function(a){for(var c in Ok)Ok.hasOwnProperty(c)&&a(c,Ok[c])};
_.fk.prototype.Hd=function(){return this.G.getItem(this.B)};_.fk.prototype.write=function(a){this.G.setItem(this.B,a)};_.fk.prototype.clear=function(){this.G.removeItem(this.B)};_.fk.iterate=function(a){for(var c=0,f=window.sessionStorage.length;c<f;++c){var g=window.sessionStorage.key(c);a(g,window.sessionStorage[g])}};
for(var pl=0;64>pl;++pl);
var Iv;_.Fn=function(){return Math.floor((new Date).getTime()/1E3)};_.sl=function(a){a=a.toUpperCase();for(var c=0,f=Iv.length;c<f;++c){var g=a.split(Iv[c]);2==g.length&&""===g[1]&&(a=g[0])}a=a.replace(/-/g,"_").toUpperCase();40<a.length&&(c=new _.rl,c.lC(a),a=c.Of().toUpperCase());return a};
_.ul=function(a){var c=a.substr(1),f="",g=window.location.hostname;if(""!==c){f=(0,window.parseInt)(c,10);if((0,window.isNaN)(f))return null;c=g.split(".");if(c.length<f-1)return null;c.length==f-1&&(g="."+g)}else g="";return{Gb:"S"==a.charAt(0),domain:g,Ke:f}};
_.vl=function(a){if(0!==a.indexOf("GCSC"))return null;var c={uf:!1};a=a.substr(4);if(!a)return c;var f=a.charAt(0);a=a.substr(1);var g=a.lastIndexOf("_");if(-1==g)return c;var h=(0,_.ul)(a.substr(g+1));if(null==h)return c;a=a.substring(0,g);if("_"!==a.charAt(0))return c;g="E"===f&&h.Gb;return!g&&("U"!==f||h.Gb)||g&&!_.Gt?c:{uf:!0,Gb:g,ep:a.substr(1),domain:h.domain,Ke:h.Ke}};var Pn=function(a){this.G=a;this.B=null};
_.st=function(a){if(!a)return null;"single_host_origin"!==a&&(a=_.T.Pq(a));var c=window.location.hostname,f=c,g=_.Gt;if("single_host_origin"!==a){f=a.split("://");if(2==f.length)g="https"===f.shift();else return(0,_.kd)("WARNING invalid cookie_policy: "+a),null;f=f[0]}if(-1!==f.indexOf(":"))f=c="";else{a="."+f;if(c.lastIndexOf(a)!==c.length-a.length)return(0,_.kd)("Invalid cookie_policy domain: "+f),null;f=a;c=f.split(".").length-1}return{domain:f,Gb:g,Ke:c}};
var OC=function(a){if(!a)return null;var c=a.client_id;if(!c)return null;c=(0,_.sl)(c);a=(0,_.st)(a.cookie_policy);return a?!_.Gt&&a.Gb?((0,_.kd)("WARNING: https cookie_policy set for http domain"),null):["GCSC",a.Gb?"E":"U","_",c,"_",a.Gb?"S":"H",a.Ke].join(""):null};_.vv=function(a){return a?{domain:a.domain,path:"/",wD:a.Gb}:null};_.Cv=function(a){var c=Dv[a];c||(c=new Pn(new _.dk(a)),Dv[a]=c);return{Kc:c,key:a}};
_.Ev=function(a,c){var f=c?Fv:Dv,g=c?_.Lv:_.fk,h=a&&OC(a),l=!!h;a&&!a.g_user_cookie_policy&&(g=_.dk,h="token");if(!h)if(!c&&_.Jv)h=_.Jv;else return null;var b=f[h];if(!b){b=(0,_.vl)(h);if(!("token"===h||b&&b.uf))return null;b=new g(h,(0,_.vv)(b));c||(b=new Pn(b))}f[h]=b;return{Kc:b,key:h,Fj:l}};
_.Hx=function(a,c,f){a=a&&"token"!==a?(0,_.Cv)(a):(0,_.Ev)();if(!a)return null;if(f){f=a.Kc;(0,_.O)();var g=f.G.Hd();f=null;try{f=_.Kb.parse(g)}catch(h){}!1==f&&(f=null);g=(0,_.ak)()||"0";g=String(g);f=f&&f[g]}else f=a.Kc.Hd();f&&f.expires_at&&(0,_.Fn)()>f.expires_at&&(a.Kc.clear(),f=null);f&&f.error&&!c&&(f=null);return f};
_.Zj=function(a,c){var f="";if(!a)return f;var g=c||"&",h;for(h in a)if({}.hasOwnProperty.call(a,h)){var l;l=a[h];if(null!=l){var b=[(0,window.encodeURIComponent)(h),"="];if(l instanceof Array){for(var q=[],t=0;t<l.length;t++)q.push((0,window.encodeURIComponent)(l[t]));b.push(q.join("+"))}else b.push((0,window.encodeURIComponent)(l));l=b.join("")}else l="";l&&(f&&(f+=g),f+=l)}return f};_.Ak={};Iv=[".APPS.GOOGLEUSERCONTENT.COM","@DEVELOPER.GSERVICEACCOUNT.COM"];_.Gt="https:"===window.location.protocol; _.Lv=_.Gt||"http:"===window.location.protocol?_.Vj:_.dk;
var lw;var Fv;var Dv;Dv=(0,_.O)();Fv=(0,_.O)();_.Mv=(0,_.O)();_.wl=(0,_.O)();_.Jv=null;lw="state code cookie_policy g_user_cookie_policy authuser prompt g-oauth-window".split(" ");Pn.prototype.write=function(a){var c=(0,_.O)(),f=(0,_.O)(),g;for(g in a)Object.prototype.hasOwnProperty.call(a,g)&&(f[g]=a[g],c[g]=a[g]);g=0;for(var h=lw.length;g<h;++g)delete f[lw[g]];a=String(a.authuser||0);g=(0,_.O)();g[a]=_.R.$c("#"+(0,_.Zj)(f));this.G.write(_.Kb.stringify(g));this.B=c};Pn.prototype.Hd=function(){return this.B}; Pn.prototype.clear=function(){this.G.clear();this.B=(0,_.O)()};_.fk.iterate(function(a){var c=(0,_.vl)(a);c&&c.uf&&(Dv[a]=new Pn(new _.fk(a,(0,_.vv)(c))))});_.Lv.iterate(function(a){Dv[a]&&(Fv[a]=new _.Lv(a,(0,_.vv)((0,_.vl)(a))))});

_.Xj=window.googleapis&&window.googleapis.server||{};
_.Yj=function(){var a=/\s*;\s*/;return{get:function(c,f){for(var g=c+"=",h=(window.document.cookie||"").split(a),l=0,b;b=h[l];++l)if(0==b.indexOf(g))return b.substr(g.length);return f}}}();
_.Qj=function(){function a(){var a=window.__OVERRIDE_SID;null==a&&(a=_.Yj.get("SID"));return!!a}return{Nq:function(a){var f={SAPISIDHASH:!0,APISIDHASH:!0};return a&&(a.OriginToken||a.Authorization&&f[String(a.Authorization).split(" ")[0]])?!0:!1},er:a,bq:function(){var c=null;a()&&(c=window.__PVT,null==c&&(c=_.Yj.get("BEAT")));return c},Qe:function(){var c=_.Rb.Pq(String(window.location.href));if(a()){var f=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:"),g=f?"SAPISID":"APISID",h=f?window.__SAPISID: window.__APISID;null==h&&(h=_.Yj.get(g));if(h)return f=f?"SAPISIDHASH":"APISIDHASH",g=(0,_.Tb)(),g.reset(),g.update([h,c].join(" ")),f+" "+g.Of().toLowerCase()}return null}}}();

_.Pb.ft=function(a){var c=[];if(1<arguments.length)for(var f=0,g;g=arguments[f];++f)c.push(g);else c=a;return function(a){for(var f=0;c[f];++f)if(a===c[f])return!0;return!1}};_.Pb.Dt=function(a){return function(c){return a.test(c)}};_.Pb.Sn=function(a){return"undefined"!==typeof a};_.Pb.yt=function(a){return"string"===typeof a&&0<a.length};_.Pb.nL=function(a){return"boolean"===typeof a};_.Pb.rt=function(a){return function(c){for(var f in a)if(a.hasOwnProperty(f)&&!(0,a[f])(c[f]))return!1;return!0}};

_.R=_.R||{};
(function(){function a(c){var f="";if(3==c.nodeType||4==c.nodeType)f=c.nodeValue;else if(c.innerText)f=c.innerText;else if(c.innerHTML)f=c.innerHTML;else if(c.firstChild){f=[];for(c=c.firstChild;c;c=c.nextSibling)f.push(a(c));f=f.join("")}return f}_.R.createElement=function(a){var f;if(!window.document.body||window.document.body.namespaceURI)try{f=window.document.createElementNS("http://www.w3.org/1999/xhtml",a)}catch(g){}return f||window.document.createElement(a)};_.R.Fh=function(a){var f=_.R.createElement("iframe");
try{var g=["<","iframe"],h=a||{},l;for(l in h)h.hasOwnProperty(l)&&(g.push(" "),g.push(l),g.push('="'),g.push(_.R.Qf(h[l])),g.push('"'));g.push("></");g.push("iframe");g.push(">");var b=_.R.createElement(g.join(""));b&&(!f||b.tagName==f.tagName&&b.namespaceURI==f.namespaceURI)&&(f=b)}catch(q){}g=f;a=a||{};for(var t in a)a.hasOwnProperty(t)&&(g[t]=a[t]);return f};_.R.Jk=function(){if(window.document.body)return window.document.body;try{var a=window.document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "body");if(a&&1==a.length)return a[0]}catch(f){}return window.document.documentElement||window.document};_.R.Qt=function(c){return a(c)}})();

_.R=_.R||{};(function(){function a(a){c=a["core.util"]||{}}var c={},f={};_.Pb&&_.Pb.Q("core.util",null,a);_.R.Nt=function(a){return"undefined"===typeof c[a]?null:c[a]};_.R.hasFeature=function(a){return"undefined"!==typeof c[a]};_.R.Rt=function(){return f}})();

var Um;var yn;var Tm;var Ze;var Ye;var Xe;var We;var Ve;var Ie;var Je;var Ke;var Le;var Me;_.Tl=function(a,c){return-1!=a.indexOf(c)};_.Ge=function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
_.He=function(a,c){if(c)return a.replace(Ie,"&amp;").replace(Je,"&lt;").replace(Ke,"&gt;").replace(Le,"&quot;");if(!Me.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Ie,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Je,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Ke,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Le,"&quot;"));return a};_.Ne=function(){return _.D.navigator?_.D.navigator.userAgent:null};var Oe=function(){return _.D.navigator};var Pe=function(){var a=_.D.document;return a?a.documentMode:void 0};
_.Ul=function(a){var c;if(!(c=Zk[a])){c=0;for(var f=(0,_.Ge)(String(Se)).split("."),g=(0,_.Ge)(String(a)).split("."),h=Math.max(f.length,g.length),l=0;0==c&&l<h;l++){var b=f[l]||"",q=g[l]||"",t=RegExp("(\\d*)(\\D*)","g"),v=RegExp("(\\d*)(\\D*)","g");do{var w=t.exec(b)||["","",""],A=v.exec(q)||["","",""];if(0==w[0].length&&0==A[0].length)break;c=((0==w[1].length?0:(0,window.parseInt)(w[1],10))<(0==A[1].length?0:(0,window.parseInt)(A[1],10))?-1:(0==w[1].length?0:(0,window.parseInt)(w[1],10))>(0==A[1].length?
0:(0,window.parseInt)(A[1],10))?1:0)||((0==w[2].length)<(0==A[2].length)?-1:(0==w[2].length)>(0==A[2].length)?1:0)||(w[2]<A[2]?-1:w[2]>A[2]?1:0)}while(0==c)}c=Zk[a]=0<=c}return c};_.Te=function(a){return _.W&&Ue>=a};Me=/[&<>\"]/;Le=/\"/g;Ke=/>/g;Je=/</g;Ie=/&/g;Ze=Ye=Xe=We=Ve=!1;var Wl;if(Wl=(0,_.Ne)()){var zm=Oe();Ve=(0,_.Sl)(Wl,"Opera");We=!Ve&&((0,_.Tl)(Wl,"MSIE")||(0,_.Tl)(Wl,"Trident"));Ye=(Xe=!Ve&&(0,_.Tl)(Wl,"WebKit"))&&(0,_.Tl)(Wl,"Mobile");Ze=!Ve&&!Xe&&!We&&"Gecko"==zm.product}_.cf=Ve;
_.W=We;_.df=Ze;_.ef=Xe;_.ff=Ye;Tm=Oe();yn=Tm&&Tm.platform||"";_.$e=(0,_.Tl)(yn,"Mac");_.Eh=(0,_.Tl)(yn,"Win");_.tk=(0,_.Tl)(yn,"Linux");_.zn=!!Oe()&&(0,_.Tl)(Oe().appVersion||"","X11");
t:{var on="",vn;if(_.cf&&_.D.opera)var wn=_.D.opera.version,on="function"==typeof wn?wn():wn;else if(_.df?vn=/rv\:([^\);]+)(\)|;)/:_.W?vn=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:_.ef&&(vn=/WebKit\/(\S+)/),vn)var xn=vn.exec((0,_.Ne)()),on=xn?xn[1]:"";if(_.W){var An=Pe();if(An>(0,window.parseFloat)(on)){Um=String(An);break t}}Um=on}var Se=Um,Zk={},Bn=_.D.document,Ue=Bn&&_.W?Pe()||("CSS1Compat"==Bn.compatMode?(0,window.parseInt)(Se,10):5):void 0;


var pe;_.oe=function(a){return a[_.oa]||(a[_.oa]=++pe)};_.Vg=function(a){var c=typeof a;return"object"==c&&null!=a||"function"==c};_.Cn=function(a){return"function"==(0,_.da)(a)};_.qe=function(a){return"number"==typeof a};_.gh=function(){};_.ue=function(a,c,f){t:{for(var g=a.length,h=(0,_.fa)(a)?a.split(""):a,l=0;l<g;l++)if(l in h&&c.call(f,h[l],l,a)){c=l;break t}c=-1}return 0>c?null:(0,_.fa)(a)?a.charAt(c):a[c]};_.ve=function(a,c){return 0<=(0,_.we)(a,c)};
_.xe=function(a,c){var f=(0,_.we)(a,c),g;(g=0<=f)&&_.ye.splice.call(a,f,1);return g};_.ze=function(a){var c=a.length;if(0<c){for(var f=Array(c),g=0;g<c;g++)f[g]=a[g];return f}return[]};_.Ae=function(a,c,f){return 2>=arguments.length?_.ye.slice.call(a,c):_.ye.slice.call(a,c,f)};pe=0;_.ye=Array.prototype;
_.we=_.ye.indexOf?function(a,c,f){return _.ye.indexOf.call(a,c,f)}:function(a,c,f){f=null==f?0:0>f?Math.max(0,a.length+f):f;if((0,_.fa)(a))return(0,_.fa)(c)&&1==c.length?a.indexOf(c,f):-1;for(;f<a.length;f++)if(f in a&&a[f]===c)return f;return-1};_.Be=_.ye.forEach?function(a,c,f){_.ye.forEach.call(a,c,f)}:function(a,c,f){for(var g=a.length,h=(0,_.fa)(a)?a.split(""):a,l=0;l<g;l++)l in h&&c.call(f,h[l],l,a)};
_.Ce=_.ye.filter?function(a,c,f){return _.ye.filter.call(a,c,f)}:function(a,c,f){for(var g=a.length,h=[],l=0,b=(0,_.fa)(a)?a.split(""):a,q=0;q<g;q++)if(q in b){var t=b[q];c.call(f,t,q,a)&&(h[l++]=t)}return h};_.De=_.ye.map?function(a,c,f){return _.ye.map.call(a,c,f)}:function(a,c,f){for(var g=a.length,h=Array(g),l=(0,_.fa)(a)?a.split(""):a,b=0;b<g;b++)b in l&&(h[b]=c.call(f,l[b],b,a));return h};
_.Ee=_.ye.some?function(a,c,f){return _.ye.some.call(a,c,f)}:function(a,c,f){for(var g=a.length,h=(0,_.fa)(a)?a.split(""):a,l=0;l<g;l++)if(l in h&&c.call(f,h[l],l,a))return!0;return!1};_.Fe=_.ye.every?function(a,c,f){return _.ye.every.call(a,c,f)}:function(a,c,f){for(var g=a.length,h=(0,_.fa)(a)?a.split(""):a,l=0;l<g;l++)if(l in h&&!c.call(f,h[l],l,a))return!1;return!0};

_.Qn=function(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(c){}throw Error("G`"+a);};_.PC=function(a,c){var f=[];Bp(new zp(c),a,f);return f.join("")};var zp=function(a){this.B=a};
var Bp=function(a,c,f){switch(typeof c){case "string":Cp(a,c,f);break;case "number":f.push((0,window.isFinite)(c)&&!(0,window.isNaN)(c)?c:"null");break;case "boolean":f.push(c);break;case "undefined":f.push("null");break;case "object":if(null==c){f.push("null");break}if((0,_.ea)(c)){var g=c.length;f.push("[");for(var h="",l=0;l<g;l++)f.push(h),h=c[l],Bp(a,a.B?a.B.call(c,String(l),h):h,f),h=",";f.push("]");break}f.push("{");g="";for(l in c)Object.prototype.hasOwnProperty.call(c,l)&&(h=c[l],"function"!=
typeof h&&(f.push(g),Cp(a,l,f),f.push(":"),Bp(a,a.B?a.B.call(c,l,h):h,f),g=","));f.push("}");break;case "function":break;default:throw Error("H`"+typeof c);}};var Cp=function(a,c,f){f.push('"',c.replace(Sn,function(a){if(a in Dp)return Dp[a];var c=a.charCodeAt(0),f="\\u";16>c?f+="000":256>c?f+="00":4096>c&&(f+="0");return Dp[a]=f+c.toString(16)}),'"')}; var Dp={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Sn=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;

_.ow=function(){_.mw="oauth2relay"+String(2147483647*(0,_.Vb)()|0);_.uk.proxy=_.mw};var yk;yk={};_.uk={};(0,_.ow)();var Dn=(0,_.P)("oauth-flow/client_id");_.uk.client_id=Dn;var Un=_.uk,co;var jo=(0,_.P)("oauth-flow/redirectUri");if(jo)co=jo.replace(/[#][\s\S]*/,"");else{var ep=_.Rb.Pq(window.location.href);co=[(0,_.P)("oauth-flow/callbackUrl"),"?x_origin=",(0,window.encodeURIComponent)(ep)].join("")}Un.redirect_uri=co;_.uk.origin=_.Rb.Pq(window.location.href);_.uk.response_type="token";
var __OAUTH2_URI=yk.kt,__OAUTH2_RELAY_URI=yk.jt,__OAUTH2_CALLBACK_URI=yk.LD,__OAUTH2_REDIRECT_URI=yk.ND,__OAUTH2_PROXY_URI=yk.MD;
var nw;var hk;var xk;var kk;var tv;var sv;var rv;var jk;var qk;var tq;var hp=function(a){if(!a)return[];a=a.split("=");return a[1]?a[1].split("|"):[]};var up=function(a){a=a.split(":");return{jD:a[0].split("=")[1],zK:hp(a[1]),KN:hp(a[2]),mN:hp(a[3])}};
var Ap=function(a){var c=(0,_.P)("oauth-flow/toast/position"),f=window.document.createElement("div");"top"!==c&&(c="bottom");f.style.cssText="position:fixed;"+c+":20px;width:100%;z-index:1000;display:none;";var g=window.document.createElement("div");g.style.cssText="float:left;position:relative;left:50%;";f.appendChild(g);c=window.document.createElement("div");c.style.cssText="float:left;position:relative;left:-50%";g.appendChild(c);g=window;try{for(;g.parent!=g&&g.parent.document;)g=g.parent}catch(h){}g=
g.document.body;try{g.insertBefore(f,g.firstChild)}catch(l){}_.Sm.cj({url:":socialhost:/:session_prefix:_/widget/oauthflow/toast",queryParams:{clientId:a.client_id,idToken:a.id_token},where:c,onRestyle:function(){f.style.display=""}}).WB(function(){f.parentNode.removeChild(f)},_.Vz)};
var Pp=function(a){var c,f=null;_.Lv.iterate(function(a,g){if(0===a.indexOf("G_AUTHUSER_")){var h=(0,_.ul)(a.substring(11));if(!c||h.Gb&&!c.Gb||h.Gb==c.Gb&&h.Ke>c.Ke)c=h,f=g}});var g=a&&(0,_.sl)(a);if(null!==f){var h;_.Lv.iterate(function(a,f){var l=(0,_.vl)(a);l&&l.uf&&(g&&l.ep!=g||l.Gb==c.Gb&&l.Ke==c.Ke&&(h=f))});if(h){var l=up(h);a=l&&l.zK[Number(f)];l=l&&l.jD;if(a)return{Wy:f,cO:a,jD:l}}}return null};var Wp=function(a){return"true"===String(a.immediate)};
var pw=function(a,c){var f=null;a&&c&&(f=c.client_id=c.client_id||a.client_id,c.scope=c.scope||a.scope,c.g_user_cookie_policy=a.cookie_policy,c.cookie_policy=c.cookie_policy||a.cookie_policy,c.response_type=c.response_type||a.response_type);if(c){c.issued_at||(c.issued_at=String((0,_.Fn)()));var g=(0,window.parseInt)(c.expires_in,10)||86400;c.error&&(g=(0,_.P)("oauth-flow/errorMaxAge")||86400);c.expires_in=String(g);c.expires_at||(c.expires_at=String((0,_.Fn)()+g));a&&Wp(a)||(c["g-oauth-window"]=
(qk||{}).popup);c._aa||c.error||null!=Pp(f)||!Wp(a)||(c._aa="1")}return c};
var ck=function(a,c){var f,g;"string"==typeof a?(f=c,g=a):(f=a,g="token");if(f){var h=(0,_.Ev)(f,!0);if(h){var l;if((l=f)&&l.session_state){var b=[],q=[],t=[],v=(0,window.parseInt)(l.authuser,10)||0;b[v]=l.session_state;q[v]=l.issued_at;t[v]=l.expires_at;l=["C="+l.client_id,"S="+b.join("|"),"I="+q.join("|"),"X="+t.join("|")].join(":")}else l=null;l&&h.Kc.write(l);"token"==g&&(h=(0,_.st)(f.g_user_cookie_policy),!h||h.Gb&&!_.Gt?h=null:(l="G_AUTHUSER_"+(_.Gt&&h.Gb?"S":"H")+h.Ke,b=_.Mv[l],b||(b=new _.Lv(l,
(0,_.vv)(h)),_.Mv[l]=b),h=b),h&&f.session_state&&!f.error&&h.write(f.authuser||"0"))}}if(g="token"!==g?(0,_.Cv)(g):(0,_.Ev)(f))if(f){if(g.Kc.write(f),!_.Jv||g.Fj&&"token"!==_.Jv)_.Jv=g.key}else g.Kc.clear(),_.Jv=null;(0,_.Hx)(void 0,void 0)};
var lk=function(a,c){var f=c&&c.key||"token",g=a=pw(c&&c.params,a);(0,_.P)("oauth-flow/toastCfg")&&!(0,_.P)("isSignedOut")&&0<=(" "+(g.scope||"")+" ").indexOf(" https://www.googleapis.com/auth/plus.login ")&&"1"===g._aa&&(g._aa="0",tq||(tq=!0,Ap(g)));ck(f,a);a=(0,_.Hx)(f,void 0);if(c){(f=c.iframe)&&f.parentNode.removeChild(f);f=c.popup;g=c.after_redirect;if(f&&"keep_open"!=g)try{f.close()}catch(h){}c.timeout&&(window.clearTimeout(c.timeout),c.timeout=null);c.callback&&(c.callback(a),c.callback=null)}};
var uq=function(a){if((0,_.P)("oauth-flow/eso")&&(a=(0,_.st)(a))){a=["G_USERSTATE_",a.Gb?"E":"U",a.Ke].join("");var c=_.wl[a];c||(c=new _.Vj(a,63072E3),_.wl[a]=c);return c}return new _.dk(_.Ak.rL)};var wq=function(a){var c=uq(a).Hd();a=(0,_.O)();if(c)for(var c=c.split(":"),f;f=c.shift();)f=f.split("="),a[f[0]]=f[1];return a};
_.yq=function(a){a=a&&a.id_token;if(!a||!a.split(".")[1])return null;a=(a.split(".")[1]+"...").replace(/^((....)+).?.?.?$/,"$1");var c=_.Qn;if(!tv){tv={};sv={};rv={};for(var f=0;65>f;f++)tv[f]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f),sv[f]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(f),rv[sv[f]]=f}for(var f=rv,g=[],h=0;h<a.length;){var l=f[a.charAt(h++)],b=h<a.length?f[a.charAt(h)]:0;++h;var q=h<a.length?f[a.charAt(h)]:0;++h;var t=
h<a.length?f[a.charAt(h)]:0;++h;if(null==l||null==b||null==q||null==t)throw Error();g.push(l<<2|b>>4);64!=q&&(g.push(b<<4&240|q>>2),64!=t&&g.push(q<<6&192|t))}return c(String.fromCharCode.apply(null,g)).sub};var ik=function(){var a=hk;if(null!==a){hk=null;for(var c=0,f=a.length;c<f;c++)a[c]()}};var ek=function(a){var c=_.mw;return function(f){if(this.f==c&&this.t==_.T.Wd(this.f)&&this.origin==_.T.$d(this.f))return a.apply(this,arguments)}};var Mq=function(a){var c=(0,_.yq)(a);return c&&"X"==wq(a.cookie_policy)[c]};
_.er=function(a){var c={error:"user_signed_out"};c.client_id=a.client_id;c.g_user_cookie_policy=a.g_user_cookie_policy;c.scope=a.scope;c.response_type=a.response_type;c.session_state=a.session_state;return c};
var rk=function(a,c){var f=a||{},g;for(g in _.uk)(0,_.kf)(f[g])||(f[g]=_.uk[g]);a=f;f=(0,_.P)("googleapis/overrideClientId");null!=f&&(a.client_id=f);if(!a.redirect_uri||"postmessage"===a.redirect_uri){f=a;g=a.state||"";g=String(g);var h="";if({}.hasOwnProperty.call(xk,g))h=xk[g];else{for(var l=2147483647*(0,_.Vb)()|0;;){h=String(l);if(!{}.hasOwnProperty.call(jk,h))break;l+=(0,_.Vb)()}jk[h]=g;xk[g]=h}f.state=h+"|"+(0,_.Vb)();kk[a.state]=c}f=a.authorize_uri||(0,_.P)("oauth-flow/authUrl");delete a.authorize_uri;
f+=0<f.indexOf("?")?"&":"?";f+=(0,_.Zj)(a);return f=(0,_.Xb)(f)};
var gk=function(a){if(null===hk)a&&a();else{a&&hk.push(a);a=_.mw;var c=window.document.getElementById(a),f=(new Date).getTime();if(c){if(nw&&6E4>f-nw)return;c.parentNode.removeChild(c);if(/Firefox/.test(window.navigator.userAgent))try{window.frames[a]=void 0}catch(g){}(0,_.ow)();a=_.mw}nw=f;var h=String(2147483647*(0,_.Vb)()|0);_.T.Q("oauth2relayReady:"+h,ek(function(){_.T.Jd("oauth2relayReady:"+h);ik()}));_.T.Q("oauth2relayReady",ek(function(){ik()}));c=ek(function(a){var c=_.R.$c;a=c(a);var f=c=
a.state,f=f.replace(/\|.*$/,"");a.state={}.hasOwnProperty.call(jk,f)?jk[f]:null;null!=a.state&&(f=kk[c],delete kk[c],lk(a,f))});_.T.Q("oauth2callback:"+h,c);_.T.Q("oauth2callback",c);var c=[(0,_.P)("oauth-flow/proxyUrl")||(0,_.P)("oauth-flow/relayUrl"),"?parent=",(0,window.encodeURIComponent)(_.Rb.Pq(window.location.href)),"#rpctoken=",h,"&forcesecure=1"].join(""),f=_.R.Jk(),l=_.R.Fh({name:a,id:a});l.src=c;l.style.width="1px";l.style.height="1px";l.style.position="absolute";l.style.top="-100px";f.appendChild(l);
_.T.tf(a)}};_.lr=function(a,c,f,g){var h=wq(f),l=h[a];c?h[a]="X":delete h[a];var b=[];(0,_.DC)(h,function(a,c){b.push(c+"="+a)});c=b.join(":");f=uq(f);c?f.write(b.join(":")):f.clear();h[a]!==l&&g&&g()};var Ix=function(a,c){for(var f=a.split(" "),g=c.split(" "),h=(0,_.O)(),l=0,b=g.length;l<b;++l)g[l]&&(h[g[l]]=1);l=0;for(b=f.length;l<b;++l)if(f[l]&&!h[f[l]])return!1;return!0};
var Jx=function(a){if(!a)return null;var c,f,g=(0,_.sl)(a);_.fk.iterate(function(a){var l=(0,_.vl)(a);l&&l.uf&&l.ep===g&&(!c||l.Gb&&!c.Gb||l.Gb==c.Gb&&l.Ke>c.Ke)&&(c=l,f=a)});return f};var Vx=function(a){var c=_.R.Jk(),f=_.R.Fh();f.src=a.uri;f.style.width="1px";f.style.height="1px";f.style.position="absolute";f.style.top="-100px";a.timeout=window.setTimeout(function(){f.parentNode&&f.parentNode.removeChild(f)},3E5);c.appendChild(f)};
var mk=function(a,c){if(qk){var f=qk.popup,g=qk.after_redirect;if(f&&"keep_open"!=g)try{f.close()}catch(h){}}f=qk={};"key"in a&&(f.key=a.key,delete a.key);qk.params=a;qk.callback=function(f){Mq(f)&&(Wp(a)?f=(0,_.er)(f):f.error||(0,_.lr)((0,_.yq)(f),!1,f.cookie_policy));(c||function(){})(pw(a,f))};f.uri=rk(a,f);return f};var rA=function(a,c){gk(function(){_.T.call(_.mw,"check_session_state",function(a){c.call(null,a)},a.session_state,a.client_id)})};
var fz=function(a){a=_.R.$c("#"+(0,_.Zj)(a));if(!Wp(a))return null;var c=a.key||Jx(a.client_id);return(c=(0,_.Hx)(c,!0,!0))&&c.client_id===a.client_id&&Ix(a.scope,c.scope)&&Ix(a.response_type,c.response_type)?c:null};
var qA=function(a,c){var f=_.R.$c();a.Vt=f.lang||f.hl;var g=mk(a,c);a.after_redirect&&(g.after_redirect=a.after_redirect);if(null!=a.scope){var h=function(){gk(function(){if(g.popup)g.popup.focus();else if(Wp(a))Vx(g);else{var c=Math.min((0,_.P)("oauth-flow/authWindowWidth",650),window.screen.width-20),f=Math.min((0,_.P)("oauth-flow/authWindowHeight",600),window.screen.height-30);qk.popup=window.open(g.uri,"_blank",["toolbar=no","location="+(window.opera?"no":"yes"),"directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no",
"width="+c,"height="+f,"top="+(window.screen.height-f)/2,"left="+(window.screen.width-c)/2].join())}})},l=fz(a);!(0,_.P)("oauth-flow/disableOpt")&&l?rA(l,function(a){a?lk(l,qk):h()}):h()}else lk(null,qk)};
_.sk=function(a,c){var f=a||{},g=c||function(){};if((0,_.P)("oauth-flow/disableOpt")||(0,_.P)("isLoggedIn")||!Wp(f))qA(f,g);else{var h=(0,_.O)();h.client_id=f.client_id;h.session_state=null;rA(h,function(a){a?(a=(0,_.O)(),a.error="immediate_failed_user_logged_out",g(pw(f,a))):((0,_.Fa)("isLoggedIn",!0),qA(f,g))})}};tq=!1;jk={};rv=null;sv=null;tv=null;kk={};xk={};hk=[];nw=0;
_.Ek={Ff:_.sk,mH:rA,Qe:_.Qj.Qe,$f:function(a,c){return(0,_.Hx)(a,c)},Wk:function(a,c){gk(function(){var f=_.mw,g=_.Qj.Qe()||"",h=null,l=null;g&&(l=g.split(" "),2==l.length&&(h=l[1]));h?_.T.call(f,"get_versioninfo",function(c){a(c)},h,c):a()})},gb:gk,Ym:ck,dH:Ap};
(0,_.d)("gapi.auth.authorize",_.Ek.Ff);(0,_.d)("gapi.auth.checkSessionState",_.Ek.mH);(0,_.d)("gapi.auth.getAuthHeaderValueForFirstParty",_.Ek.Qe);(0,_.d)("gapi.auth.getToken",_.Ek.$f);(0,_.d)("gapi.auth.getVersionInfo",_.Ek.Wk);(0,_.d)("gapi.auth.init",_.Ek.gb);(0,_.d)("gapi.auth.setToken",_.Ek.Ym);(0,_.d)("gapi.auth._oart",_.Ek.dH);

});

// Copyright 2002-2013 Google Inc.