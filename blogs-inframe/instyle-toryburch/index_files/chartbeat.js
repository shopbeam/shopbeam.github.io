(function(){var e=true,h=null,i,j=this;function k(a){var b={};if(a){a.charAt(0)=="?"&&(a=a.substring(1));for(var a=a.replace("+"," "),a=a.split(/[&;]/g),c=0;c<a.length;c++){var d=a[c].split("=");b[decodeURIComponent(d[0])]=decodeURIComponent(d[1])}}return b}function l(a,b,c){var d="",f=j.location.href.split("?");f.length&&(f=k(f[1]),b=c||b,f[b]&&(d="&"+a+"="+f[b]));return d};function o(a){a+="=";for(var b=document.cookie.split(";"),c=0;c<b.length;c++){for(var d=b[c];d.charAt(0)==" ";)d=d.substring(1,d.length);if(d.indexOf(a)==0)return d.substring(a.length,d.length)}return h}function r(a,b,c){var d=j._sf_async_config;if(!d||!d.noCookies)d=new Date,d.setTime(s()+c*864E5),document.cookie=a+"="+b+("; expires="+d.toGMTString())+"; path=/"};function t(){if(u!==void 0)return u;try{var a=j.localStorage;if(a.removeItem)return u=a}catch(b){}return u=h}var u;function x(){var a="",b,c;for(c=0;c<16;c++)b=Math.floor(Math.random()*36).toString(36),a+=b;return a}function y(a,b){return function(){a.apply(b,arguments)}}function z(a,b){var c=j;c.addEventListener?c.addEventListener(a,b,false):c.attachEvent&&c.attachEvent("on"+a,b)}function A(a){a=new Date(+a);return Date.UTC(a.getFullYear(),a.getMonth(),a.getDate())}
function s(){return(new Date).getTime()};function B(a){this.a=j._sf_async_config||{};this.I=y(this.N,this);this.e=[];this.r=a;this.b();z("unload",y(this.M,this));for(var a=y(this.P,this),b=j._cbq||[];b.length;)a(b.shift());j._cbq={push:a}}i=B.prototype;i.b=function(){this.o=this.c=0;this.D=s();this.C=x();this.p=e;this.z=72E5;this.f=this.d=0;this.r.b();var a=+this.a.sessionLength;if(!isNaN(a))this.z=a*6E4};i.P=function(a){this.a[a[0]]=a[1];this.c=0};function C(a,b){var c;c=new Image(1,1);c.onerror=a.I;c.src=b}
i.q=function(){var a=j._sf_startpt,b=j._sf_endpt;if(typeof a=="number")this.B=typeof b=="number"?b-a:s()-a;this.n=setInterval(y(this.A,this),15E3);this.A()};i.N=function(){this.e.push(1);for(var a=0,b=0;b<this.e.length;++b)a+=this.e[b];a<3?(this.p=e,D(this)):(clearInterval(this.n),r("_SUPERFLY_nosample","1",0.007))};function E(a){if(!o("_SUPERFLY_nosample"))a.K?a.q():(a.K=e,!j._sf_async_config&&!j._cbq?z("load",y(a.q,a)):a.q())}
i.M=function(){var a=this.C,b=t();if(b)b._cb_cp+=(b._cb_cp?",":"")+a;else if(!j.name)j.name="_cb_cp"+a};function D(a){var b=a.c,b=b?Math.min(b*2,16):1;a.c=b}i.R=function(a,b){this.s=j.location.protocol+"//"+this.a.domain+this.a.path;this.a.path=a;b&&(this.a.title=b);clearInterval(this.n);this.b();E(this)};
i.A=function(){var a=this.r,b=a.d;a.d=0;F(a);this.f=b;this.d+=this.f;a=this.a.reading&&+this.a.reading||this.f>0;if(this.o<this.c&&!a)this.o++;else{a?this.c=0:D(this);this.o=0;this.e.push(0);this.e.length>18&&this.e.shift();var a=this.a,c=G(),d=Math.round((s()-this.D)/600)/100,f=b=0,g=0;H(this.r,"onkeydown")?f=1:this.a.reading&&+this.a.reading||this.f>0||d<0.09?b=1:g=1;var m="",v="",K="";if(this.p){this.p=false;var m=(I(this)?"&v=":"&r=")+encodeURIComponent(this.s||document.referrer||""),v=this.a.title.slice(0,
100),v="&i="+encodeURIComponent(v),w=this.a.hudTrackable;w!==void 0&&(K="&L="+(w?"1":"0"))}var w=this.B?"&b="+this.B:"",R=this.l?"&A="+this.l:"",S=this.u?"&f="+this.u:"",p,n=t();if(n)p=n._cb_cp,n._cb_cp="";else if(/_cb_cp[a-z0-9]{16}/.test(j.name))p=j.name.substr(6),j.name="";p=p?"&D="+p:"";var n=[],q;for(q in a)q.charAt(0)=="_"&&n.push(q+"="+a[q]);q=(j.location.protocol||"http:")+"//"+a.pingServer+"/ping?h="+encodeURIComponent(a.domain)+"&p="+encodeURIComponent(a.path)+"&u="+this.i+"&d="+encodeURIComponent(this.m)+
"&g="+a.uid+(a.sections?"&g0="+encodeURIComponent(a.sections):"")+(a.authors?"&g1="+encodeURIComponent(a.authors):"")+(a.noCookies?"":"&n="+this.L)+S+"&c="+d+"&x="+c+"&y="+J("Height")+"&o="+J("Width")+"&w=";c=document;C(this,q+(c[c.compatMode==="CSS1Compat"?"documentElement":"body"].clientHeight||0)+"&j="+Math.round((this.c+2)*15E3/1E3)+"&R="+b+"&W="+f+"&I="+g+"&E="+this.d+"&e="+this.f+m+w+R+l("C","utm_campaign",a.campaignTag)+l("M","utm_medium",a.mediumTag)+"&t="+this.C+"&V=16"+p+v+K+(n.length?"&"+
n.join("&"):"")+"&_");s()-this.D>=this.z&&clearInterval(this.n)}};function I(a){if(a.s)return e;a=(document.referrer||"").indexOf("://"+j.location.host+"/");return a!=-1&&a<9};function J(a){a="scroll"+a;return Math.max(document.body[a],document.documentElement[a])||0};function G(){var a=document.body,b=document.documentElement;if(typeof j.pageYOffset=="number")return j.pageYOffset;else if(a&&a.scrollTop)return a.scrollTop;else if(b&&b.scrollTop)return b.scrollTop;return 0};function L(a){B.call(this,a)}(function(){var a=B;function b(){}b.prototype=a.prototype;L.Q=a.prototype;L.prototype=new b})();
L.prototype.b=function(){L.Q.b.call(this);this.l=h;for(var a=this.a,b=document.getElementsByTagName("script"),c=0;c<b.length;++c)if(b[c].src.match(/chartbeat.js/)){b=k(b[c].src.split("?")[1]);a.uid=a.uid||b.uid;a.domain=a.domain||b.domain;break}a=j.location;b=this.a;b.pingServer=b.pingServer||"ping.chartbeat.net";b=this.a;b.title=b.title||document.title;b=this.a;b.domain=b.domain||a.host;b=this.a;a:{c=h;if(this.a.useCanonical){for(var c=h,d=document.getElementsByTagName("link"),f=0;f<d.length;++f)if(d[f].rel==
"canonical")c=d[f].href,c=c.substring(c.indexOf("/",9));if(c)break a}f=j.location;c=f.pathname+(f.search||"");c=c.replace(/PHPSESSID=[^&]+/,"");d=/&utm_[^=]+=[^&]+/ig;(f=d.exec(f.search))&&(c=c.replace(d,""));d=/\?utm_[^=]+=[^&]+(.*)/i;(f=d.exec(c))&&(c=c.replace(d,f[1]!=""?"?"+f[1]:""))}b.path=b.path||c;this.m=a.host.replace(/^www\./,"");this.a.domain=this.a.domain.replace(/^www\./,"");var a=(o("_chartbeat2")||"").split("."),b=s(),c=b-+(a[1]||0),f="1",g=a&&+a[2],d=a&&a[3];if(a&&g&&d)if(f=Math.abs((A(b)-
A(g))/864E5)){f=Math.min(f,16)-1;for(g="";f--;)g+=0;f=(d+g+"1").slice(-16)}else f=d;this.L=a[0]&&c>18E5?0:1;a[0]||(a[0]=x(),a[1]=b);a[2]=b;a[3]=f;this.i=a[0];this.O=a.join(".");r("_chartbeat2",this.O,30);this.a.utoken=this.i;var m;b=+a[1];c=+a[2];if((a=a[3])&&b&&c)m=(Math.min((Math.abs((A(c)-A(b))/864E5)||0)+1,16,a.length)-1).toString(16),m+=("0000"+parseInt(a,2).toString(16)).slice(-4);this.u=m;j.postMessage&&z("message",y(this.J,this));m=o("_chartbeat_uuniq")==="1";r("_chartbeat_uuniq","1",30);
m||C(this,"//ping.chartbeat.net/uuniq?u="+this.i)};L.prototype.G=function(a){this.l=a};
L.prototype.J=function(a){var b=this.a;if(a.origin==="http://"+(b.playerdomain||this.m)){var c=a.data;if(typeof c=="string"&&c.indexOf("cbqpush::")===0){if(a=c.split("::"),a.length==3)a[1].indexOf("_")===0&&(b[a[1]]=a[2]),this.c=0}else c=="cbdata?"&&(b="domain="+encodeURIComponent(b.domain)+"&path="+encodeURIComponent(b.path)+"&title=",c=this.a.title.slice(0,100),a.source.postMessage(b+encodeURIComponent(c)+"&referrer="+encodeURIComponent(this.s||document.referrer||"")+"&internal="+(I(this)?"1":"0")+
"&subdomain="+encodeURIComponent(this.m)+"&utoken="+this.i,"*"))}};function M(){this.j=[];this.H=false;this.t=this.g=h;this.k=[];N(this,j,"onscroll");N(this,document.body,"onkeydown");N(this,document.body,"onmousemove");this.b()}M.prototype.b=function(){this.h={};this.d=0;F(this);this.h.onmousemove=s()};function F(a){a.w&&clearInterval(a.w);a.F();a.w=setInterval(y(a.F,a),1E3)}
function N(a,b,c){var d=b[c]||function(){};a.k.push(c);b[c]=function(b){d.apply(this,arguments);if(b&&c=="onkeydown"){var g=b.keyCode?b.keyCode:b.which;if(g==32||g>36&&g<41){a.h.onscroll=s();return}}a.h[c]=s();if(a.H)a.g===h&&a.v(),j.clearTimeout(a.t),a.t=j.setTimeout(y(a.v,a),500)}}M.prototype.v=function(){var a=this;this.g=j.setTimeout(function(){j.clearTimeout(a.g);a.g=h},500);for(var b=0,c=this.j.length;b<c;b++)if(typeof this.j[b]==="function")this.j[b]()};
function H(a,b,c){a=a.h[b];if(a===void 0)return false;a=s()-a;return a<=(c||15E3)&&a>=0}M.prototype.F=function(){var a;a:{for(a=0;a<this.k.length;a++)if(H(this,this.k[a],5E3)){a=e;break a}a=false}a&&this.d++};var O=(document.location.protocol=="https:"?"https://a248.e.akamai.net/chartbeat.download.akamai.com/102508/":"http://static.chartbeat.com/")+"js/inpage.js";function P(){var a=document.createElement("script");a.async=e;a.src=O;var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}function Q(a){if(/[\/|\.]chartbeat\.com$/.test(a.origin)){var b=t(),c=String(a.data);if(b&&c.indexOf("_cb_ip")==0)b._cb_ip=1,a.source.postMessage(1,a.origin),P()}};if(!j.pSUPERFLY){var T=new M,U=new L(T);j.pSUPERFLY=U;L.prototype.virtualPage=L.prototype.R;L.prototype.activity=L.prototype.G;E(U);var V=t();V&&(z("message",Q),V._cb_ip&&P())};})();
