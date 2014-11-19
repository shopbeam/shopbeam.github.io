/*{"mac":"1:fa9c8855e062f11616e4ef49a74102b7b8c85fed3d3b63dde387a3a324da3895","k":"1.1.3","created":"2012-12-05T21:27:37Z","version":"14565078"}*/
/*
 * For font license information, see the CSS file loaded by this JavaScript.
 */
;(function(window,document,undefined){
var g=void 0,k=!0,l=null,m=!1;function n(a){return function(){return this[a]}}var o;function p(a,c,b){var d=2<arguments.length?Array.prototype.slice.call(arguments,2):[];return function(){d.push.apply(d,arguments);return c.apply(a,d)}}function q(a){this.k=a;this.s=g}q.prototype.createElement=function(a,c,b){a=this.k.createElement(a);if(c)for(var d in c)c.hasOwnProperty(d)&&("style"==d?this.pa(a,c[d]):a.setAttribute(d,c[d]));b&&a.appendChild(this.k.createTextNode(b));return a};
function r(a,c,b){a=a.k.getElementsByTagName(c)[0];a||(a=document.documentElement);a&&a.lastChild&&a.insertBefore(b,a.lastChild)}function s(a){function c(){document.body?a():setTimeout(c,0)}c()}function t(a){a.parentNode&&a.parentNode.removeChild(a)}function u(a,c){for(var b=a.className.split(/\s+/),d=0,e=b.length;d<e;d++)if(b[d]==c)return;b.push(c);a.className=b.join(" ").replace(/^\s+/,"")}
function v(a,c){for(var b=a.className.split(/\s+/),d=[],e=0,f=b.length;e<f;e++)b[e]!=c&&d.push(b[e]);a.className=d.join(" ").replace(/^\s+/,"").replace(/\s+$/,"")}function w(a,c){for(var b=a.className.split(/\s+/),d=0,e=b.length;d<e;d++)if(b[d]==c)return k;return m}q.prototype.pa=function(a,c){this.U()?a.setAttribute("style",c):a.style.cssText=c};q.prototype.U=function(){if(this.s===g){var a=this.k.createElement("p");a.innerHTML='<a style="top:1px;">w</a>';this.s=/top/.test(a.getElementsByTagName("a")[0].getAttribute("style"))}return this.s};
function x(a,c,b,d,e,f,h){this.W=a;this.Na=c;this.wa=b;this.va=d;this.Ia=e;this.Ha=f;this.ua=h}o=x.prototype;o.getName=n("W");o.getVersion=n("Na");o.getEngine=n("wa");o.getEngineVersion=n("va");o.getPlatform=n("Ia");o.getPlatformVersion=n("Ha");o.getDocumentMode=n("ua");function z(a,c){this.c=a;this.p=c}var ca=new x("Unknown","Unknown","Unknown","Unknown","Unknown","Unknown",g);
z.prototype.parse=function(){var a;if(-1!=this.c.indexOf("MSIE")){a=A(this);var c=B(this),b=C(this.c,/(MSIE [\d\w\.]+)/,1);if(""!=b){var d=b.split(" "),b=d[0],d=d[1];E(d);E(c);a=new x(b,d,b,d,a,c,F(this.p))}else a=new x("MSIE","Unknown","MSIE","Unknown",a,c,F(this.p))}else if(-1!=this.c.indexOf("Opera"))a:if(c=a="Unknown",b=C(this.c,/(Presto\/[\d\w\.]+)/,1),""!=b?(c=b.split("/"),a=c[0],c=c[1]):(-1!=this.c.indexOf("Gecko")&&(a="Gecko"),b=C(this.c,/rv:([^\)]+)/,1),""!=b&&(c=b)),-1!=this.c.indexOf("Opera Mini/"))b=
C(this.c,/Opera Mini\/([\d\.]+)/,1),""==b&&(b="Unknown"),a=new x("OperaMini",b,a,c,A(this),B(this),F(this.p));else{if(-1!=this.c.indexOf("Version/")&&(b=C(this.c,/Version\/([\d\.]+)/,1),""!=b)){a=new x("Opera",b,a,c,A(this),B(this),F(this.p),10<=E(b));break a}b=C(this.c,/Opera[\/ ]([\d\.]+)/,1);a=""!=b?new x("Opera",b,a,c,A(this),B(this),F(this.p),10<=E(b)):new x("Opera","Unknown",a,c,A(this),B(this),F(this.p))}else if(-1!=this.c.indexOf("AppleWebKit")){a=A(this);c=B(this);b=C(this.c,/AppleWebKit\/([\d\.]+)/,
1);""==b&&(b="Unknown");d="Unknown";-1!=this.c.indexOf("Chrome")||-1!=this.c.indexOf("CrMo")||-1!=this.c.indexOf("CriOS")?d="Chrome":-1!=this.c.indexOf("Safari")?d="Safari":-1!=this.c.indexOf("AdobeAIR")&&(d="AdobeAIR");var e="Unknown";-1!=this.c.indexOf("Version/")?e=C(this.c,/Version\/([\d\.\w]+)/,1):"Chrome"==d?e=C(this.c,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):"AdobeAIR"==d&&(e=C(this.c,/AdobeAIR\/([\d\.]+)/,1));"AdobeAIR"==d?(C(e,/\d+\.(\d+)/,1),2<E(e)||E(e)):(C(b,/\d+\.(\d+)/,1),526<=E(b)||E(b));
a=new x(d,e,"AppleWebKit",b,a,c,F(this.p))}else if(-1!=this.c.indexOf("Gecko")){c=a="Unknown";d=m;-1!=this.c.indexOf("Firefox")?(a="Firefox",b=C(this.c,/Firefox\/([\d\w\.]+)/,1),""!=b&&(d=C(b,/\d+\.(\d+)/,1),c=b,d=""!=b&&3<=E(b)&&5<=parseInt(d,10))):-1!=this.c.indexOf("Mozilla")&&(a="Mozilla");b=C(this.c,/rv:([^\)]+)/,1);if(""==b)b="Unknown";else if(!d){var d=E(b),e=parseInt(C(b,/\d+\.(\d+)/,1),10),f=parseInt(C(b,/\d+\.\d+\.(\d+)/,1),10);1<d||1==d&&9<e||1==d&&9==e&&2<=f||b.match(/1\.9\.1b[123]/)!=
l||b.match(/1\.9\.1\.[\d\.]+/)}a=new x(a,c,"Gecko",b,A(this),B(this),F(this.p))}else a=ca;return a};function A(a){var c=C(a.c,/(iPod|iPad|iPhone|Android|Windows Phone)/,1);if(""!=c)return c;a=C(a.c,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/,1);return""!=a?("Mac_PowerPC"==a&&(a="Macintosh"),a):"Unknown"}
function B(a){var c=C(a.c,/(OS X|Windows NT|Android|CrOS) ([^;)]+)/,2);if(c||(c=C(a.c,/Windows Phone( OS)? ([^;)]+)/,2)))return c;if(c=C(a.c,/(iPhone )?OS ([\d_]+)/,2))return c;return(a=C(a.c,/Linux ([i\d]+)/,1))?a:"Unknown"}function E(a){a=C(a,/(\d+)/,1);return""!=a?parseInt(a,10):-1}function C(a,c,b){return(a=a.match(c))&&a[b]?a[b]:""}function F(a){if(a.documentMode)return a.documentMode}function da(a,c,b){this.e=a;this.j=c;this.$=b;this.m="wf";this.l=new G("-")}
function H(a){v(a.j,a.l.g(a.m,"loading"));w(a.j,a.l.g(a.m,"active"))||u(a.j,a.l.g(a.m,"inactive"));I(a,"inactive")}function I(a,c,b,d){if(a.$[c])a.$[c](b,d)}function J(a,c,b,d,e){this.e=a;this.z=c;this.B=b;this.q=d;this.F=e;this.O=0;this.qa=this.ia=m}
J.prototype.watch=function(a,c,b,d,e){for(var f=a.length,h=0;h<f;h++){var i=a[h];c[i]||(c[i]=["n4"]);this.O+=c[i].length}e&&(this.ia=e);for(h=0;h<f;h++)for(var i=a[h],e=c[i],j=b[i],y=0,wa=e.length;y<wa;y++){var aa=e[y],D=this.z,L=i,ba=aa;u(D.j,D.l.g(D.m,L,ba,"loading"));I(D,"fontloading",L,ba);D=p(this,this.xa);L=p(this,this.ya);(new d(D,L,this.e,this.B,this.q,this.F,i,aa,j)).start()}};
J.prototype.xa=function(a,c){var b=this.z;v(b.j,b.l.g(b.m,a,c,"loading"));v(b.j,b.l.g(b.m,a,c,"inactive"));u(b.j,b.l.g(b.m,a,c,"active"));I(b,"fontactive",a,c);this.qa=k;ea(this)};J.prototype.ya=function(a,c){var b=this.z;v(b.j,b.l.g(b.m,a,c,"loading"));w(b.j,b.l.g(b.m,a,c,"active"))||u(b.j,b.l.g(b.m,a,c,"inactive"));I(b,"fontinactive",a,c);ea(this)};
function ea(a){0==--a.O&&a.ia&&(a.qa?(a=a.z,v(a.j,a.l.g(a.m,"loading")),v(a.j,a.l.g(a.m,"inactive")),u(a.j,a.l.g(a.m,"active")),I(a,"active")):H(a.z))}
function K(a,c,b,d,e,f,h,i,j){this.sa=a;this.Ca=c;this.e=b;this.B=d;this.q=e;this.F=f;this.Ga=new fa;this.Aa=new ga;this.Q=h;this.P=i;this.za=j||"BESbswy";this.ja=ha(this,"arial,'URW Gothic L',sans-serif");this.ka=ha(this,"Georgia,'Century Schoolbook L',serif");this.ga=this.ja;this.ha=this.ka;this.X=M(this,"arial,'URW Gothic L',sans-serif");this.Y=M(this,"Georgia,'Century Schoolbook L',serif")}K.prototype.start=function(){this.La=this.F();this.aa()};
K.prototype.aa=function(){var a=this.B.T(this.X),c=this.B.T(this.Y);(this.ja!=a||this.ka!=c)&&this.ga==a&&this.ha==c?(a=this.sa,t(this.X),t(this.Y),a(this.Q,this.P)):5E3<=this.F()-this.La?(a=this.Ca,t(this.X),t(this.Y),a(this.Q,this.P)):(this.ga=a,this.ha=c,ia(this))};function ia(a){a.q(function(a,b){return function(){b.call(a)}}(a,a.aa),25)}function ha(a,c){var b=M(a,c,k),d=a.B.T(b);t(b);return d}function M(a,c,b){c=a.e.createElement("span",{style:ja(a,c,a.P,b)},a.za);r(a.e,"body",c);return c}
function ja(a,c,b,d){b=a.Aa.expand(b);return"position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;font-family:"+(d?"":a.Ga.quote(a.Q)+",")+c+";"+b}function G(a){this.Ea=a||"-"}G.prototype.g=function(a){for(var c=[],b=0;b<arguments.length;b++)c.push(arguments[b].replace(/[\W_]+/g,"").toLowerCase());return c.join(this.Ea)};function fa(){this.oa="'"}
fa.prototype.quote=function(a){for(var c=[],a=a.split(/,\s*/),b=0;b<a.length;b++){var d=a[b].replace(/['"]/g,"");-1==d.indexOf(" ")?c.push(d):c.push(this.oa+d+this.oa)}return c.join(",")};function ga(){this.ma=ka;this.C=la}var ka=["font-style","font-weight"],la={"font-style":[["n","normal"],["i","italic"],["o","oblique"]],"font-weight":[["1","100"],["2","200"],["3","300"],["4","400"],["5","500"],["6","600"],["7","700"],["8","800"],["9","900"],["4","normal"],["7","bold"]]};
function ma(a,c,b){this.Da=a;this.Ja=c;this.C=b}ma.prototype.expand=function(a,c){for(var b=0;b<this.C.length;b++)if(c==this.C[b][0]){a[this.Da]=this.Ja+":"+this.C[b][1];break}};ga.prototype.expand=function(a){if(2!=a.length)return l;for(var c=[l,l],b=0,d=this.ma.length;b<d;b++){var e=this.ma[b];(new ma(b,e,this.C[e])).expand(c,a.substr(b,1))}return c[0]&&c[1]?c.join(";")+";":l};function N(a){this.k=a;this.s=g}N.prototype=q.prototype;N.prototype.Ba=function(){return this.k.location.hostname};
function na(a,c,b){var d=a.k.getElementsByTagName("head")[0];if(d){var e=a.k.createElement("script");e.src=c;var f=m;e.onload=e.onreadystatechange=function(){if(!f&&(!this.readyState||"loaded"==this.readyState||"complete"==this.readyState))f=k,b&&b(),e.onload=e.onreadystatechange=l,"HEAD"==e.parentNode.tagName&&d.removeChild(e)};d.appendChild(e)}}N.prototype.pa=function(a,c){this.U()?a.setAttribute("style",c):a.style.cssText=c};
N.prototype.U=function(){if(this.s===g){var a=this.k.createElement("p");a.innerHTML='<a style="top:1px;">w</a>';this.s=/top/.test(a.getElementsByTagName("a")[0].getAttribute("style"))}return this.s};function O(a,c){this.Ka=a;this.ba=c}function oa(a){for(var c=a.Ka.join(","),b=[],d=0;d<a.ba.length;d++){var e=a.ba[d];b.push(e.name+":"+e.value+";")}return c+"{"+b.join("")+"}"}function P(a,c){this.A=a;this.D=c;this.da={};this.ca={}}P.prototype.t=function(a){return a?(this.da[a.I]||this.D).slice(0):this.D.slice(0)};
function pa(a,c,b){for(var d=[],e=a.A.split(",")[0].replace(/"|'/g,""),f=a.t(),h,i=[],j={},y=0;y<f.length;y++)h=f[y],0<h.length&&!j[h]&&(j[h]=k,i.push(h));b=b.na?b.na(e,i,d):i;c=c.I;a.da[c]=b;a.ca[c]=d}P.prototype.watch=function(a,c,b){var d=[],e={};qa(this,c,d,e);a(d,e,b)};function qa(a,c,b,d){b.push(a.A);d[a.A]=a.t(c);a=a.ca[c.I]||[];for(c=0;c<a.length;c++){for(var e=a[c],f=e.A,h=m,i=0;i<b.length;i++)b[i]==f&&(h=k);h||(b.push(f),d[f]=e.t())}}function ra(a,c){this.A=a;this.D=c}ra.prototype.t=n("D");
function sa(a){var c=new Image(1,1);c.src=a;c.onload=function(){c.onload=l}}function Q(a,c){this.I=a;this.fa=c}function ta(){this.Oa=this.w=this.G=this.H=k}function R(a){ua.L.push(a)}function va(a){this.e=a;this.ta=this.o=this.c=this.K=l;this.h=[];this.r=[];this.ra=this.R=this.M=this.N=l}
function xa(a,c){a.c=c;if(a.K){var b;a:{b=a.K;for(var d=a.c,e=a.ta,f=0;f<b.L.length;f++){var h=b.L[f],i=d,j=e;j||(j=new ta);if(h.fa&&h.fa(i.getName(),i.getVersion(),i.getEngine(),i.getEngineVersion(),i.getPlatform(),i.getPlatformVersion(),i.getDocumentMode(),j)){b=h;break a}}b=l}a.o=b}}o=va.prototype;o.supportsConfiguredBrowser=function(){return!!this.o};
o.init=function(){if(0<this.r.length){for(var a=[],c=0;c<this.r.length;c++)a.push(oa(this.r[c]));var c=this.e,a=a.join(""),b=this.e.k.createElement("style");b.setAttribute("type","text/css");b.styleSheet?b.styleSheet.cssText=a:b.appendChild(document.createTextNode(a));r(c,"head",b)}};
o.load=function(a,c){var b=this.o.I;if(this.R)for(var d=ya(this.R,b),e=0;e<this.h.length;e++)pa(this.h[e],this.o,d);this.N&&(d=[],this.M&&(d=new za(this.e,this.o,this.h),d=Aa(this.M,b,d)),b=this.N.g("https:"==this.e.k.location.protocol,Ba(b,d)),r(this.e,"head",this.e.createElement("link",{rel:"stylesheet",href:b})));a&&s(function(a,b,c,e){return function(){for(var d=0;d<a.h.length;d++)a.h[d].watch(b,c,e&&d==a.h.length-1)}}(this,a,this.o,c))};
o.collectFontFamilies=function(a,c){for(var b=0;b<this.h.length;b++)qa(this.h[b],this.o,a,c)};o.performOptionalActions=function(a){this.V&&s(function(a,b,d,e){return function(){var b=a.V;if(b.la){var h=window.__adobewebfontsappname__,h=h?h.toString().substr(0,20):"";sa(b.la.g("https:"==e.k.location.protocol,{host:encodeURIComponent(e.k.location.hostname),app:encodeURIComponent(h),_:(+new Date).toString()}))}b=a.V;b.Z&&(b=b.Z.g(d,e),r(e,"body",b))}}(this,a,this.c,this.e))};
function S(a,c,b,d){this.Fa=a;this.e=c;this.j=b;this.q=d;this.n=[]}S.prototype.J=function(a){this.n.push(a)};S.prototype.load=function(a,c){var b=a,d=c||{};if("string"==typeof b)b=[b];else if(!b||!b.length)d=b||{},b=[];if(b.length)for(var e=this,f=b.length,h=0;h<b.length;h++)Ca(this,b[h],function(){0==--f&&Da(e,d)});else Da(this,d)};function Ca(a,c,b){na(a.e,a.Fa.g("https:"==a.e.k.location.protocol,{id:encodeURIComponent(c)}),b)}
function Da(a,c){if(0!=a.n.length){for(var b=new da(a.e,a.j,c),d=m,e=0;e<a.n.length;e++)a.n[e].init(),d=d||a.n[e].supportsConfiguredBrowser();d?(u(b.j,b.l.g(b.m,"loading")),I(b,"loading"),Ea(a,b)):H(b);a.n=[]}}function Ea(a,c){function b(a,b,c){d.watch(a,b,{},K,c)}for(var d=new J(a.e,c,{T:function(a){return a.offsetWidth}},a.q,function(){return+new Date}),e=0;e<a.n.length;e++){var f=a.n[e];f.supportsConfiguredBrowser()&&(f.load(b,e==a.n.length-1),f.performOptionalActions(window))}}
function T(a,c){this.ea=a;this.q=c;this.n=[]}T.prototype.J=function(a){this.n.push(a)};T.prototype.load=function(){var a=this.ea.__webfonttypekitmodule__;if(a)for(var c=0;c<this.n.length;c++){var b=this.n[c],d=a[b.ra];if(d){var e=this.q;d(function(a,c,d){var c=[],j={};xa(b,a);b.supportsConfiguredBrowser()&&(b.init(),b.load(l,e),b.collectFontFamilies(c,j),b.performOptionalActions(window));d(b.supportsConfiguredBrowser(),c,j)})}}};function U(a,c){this.W=a;this.na=c}U.prototype.getName=n("W");
function Fa(a){var c=V;Ga(c,a.getName())||c.S.push(a)}function Ga(a,c){for(var b=0;b<a.S.length;b++){var d=a.S[b];if(c===d.getName())return d}return l}function ya(a,c){var b=a.u[c];return b?Ga(a,b):l}function Aa(a,c,b){for(var d=[],a=a.v[c]||[],c=0;c<a.length;c++){var e;a:switch(a[c]){case "observeddomain":e=new Ha(b.e);break a;case "fontmask":e=new Ia(b.o,b.h);break a;default:e=l}e&&d.push(e)}return d}function za(a,c,b){this.e=a;this.o=c;this.h=b}function Ha(a){this.e=a}
Ha.prototype.toString=function(){return encodeURIComponent(this.e.Ba?this.e.k.location.hostname:document.location.hostname)};function Ia(a,c){this.o=a;this.h=c}Ia.prototype.toString=function(){for(var a=[],c=0;c<this.h.length;c++)for(var b=this.h[c],d=b.t(),b=b.t(this.o),e=0;e<d.length;e++){var f;a:{for(f=0;f<b.length;f++)if(d[e]===b[f]){f=k;break a}f=m}a.push(f?1:0)}a=a.join("");a=a.replace(/^0+/,"");c=[];for(d=a.length;0<d;d-=4)b=a.slice(0>d-4?0:d-4,d),c.unshift(parseInt(b,2).toString(16));return c.join("")};
function W(a){this.Ma=a}W.prototype.g=function(a,c){var b=c||{},d=this.Ma.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,c,d){return d&&b[c]?"/"+b[c].join("/"):b[c]||""});d.match(/^\/\//)&&(d=(a?"https:":"http:")+d);return d.replace(/\/*\?*($|\?)/,"$1")};function Ba(a,c){for(var b=[],d=0;d<c.length;d++)b.push(c[d].toString());return{format:a,extras:b}}var ua=new function(){this.L=[]};
R(new Q("a",function(a,c,b,d,e,f){if(m||("Windows"==e&&"Unknown"==f?k:m)||("Ubuntu"==e||"Linux"==e?k:m))a:{if("AdobeAIR"==a&&(a=/([0-9]+.[0-9]+)/.exec(c))){a=2.5<=parseFloat(a[1]);break a}a=m}else a=m;return a}));
R(new Q("b",function(a,c,b,d,e,f,h,i){var j;j=m||function(a,b,c,e,d,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==d&&a?(d=parseInt(a[1],10),f=parseInt(a[3],10),10<d||10==d&&4<=f):"Macintosh"==d&&"Unknown"==f?k:m}(a,c,b,d,e,f,h,i);return!j?m:function(a,b){if("AdobeAIR"==a){var c=/([0-9]+.[0-9]+)/.exec(b);if(c)return 2.5<=parseFloat(c[1])}return m}(a,c,b,d,e,f,h,i)}));
R(new Q("a",function(a,c,b,d,e,f,h,i){var j;j=(j=m||("Windows"==e&&"5.1"==f?k:m)||("Windows"==e&&"5.2"==f?k:m)||("Windows"==e&&"6.0"==f?k:m)||function(a,b,c,d,e,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==e&&a?(e=parseInt(a[1],10),a=parseInt(a[2],10),6<e||6==e&&1<=a):m}(a,c,b,d,e,f,h,i))||function(a,b,c,e,d,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==d&&a?(d=parseInt(a[1],10),f=parseInt(a[3],10),10<d||10==d&&4<=f):"Macintosh"==d&&"Unknown"==f?k:m}(a,c,b,d,e,f,h,i);return!j&&!("Ubuntu"==
e||"Linux"==e?k:m)?m:function(a,b){if("Chrome"==a){var c=/([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(b);if(c){var d=parseFloat(c[1]),e=parseInt(c[2],10),c=parseInt(c[3],10);if(!(6<=d)&&(4<d||4==d&&249<e||4==d&&249==e&&4<=c))return k}}return m}(a,c,b,d,e,f,h,i)}));
R(new Q("d",function(a,c,b,d,e,f,h,i){var j;j=(j=(j=(j=(j=m||("Windows"==e&&"5.1"==f?k:m)||("Windows"==e&&"5.2"==f?k:m)||("Windows"==e&&"6.0"==f?k:m)||function(a,b,c,d,e,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==e&&a?(e=parseInt(a[1],10),a=parseInt(a[2],10),6<e||6==e&&1<=a):m}(a,c,b,d,e,f,h,i))||function(a,b,c,d,e,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==e&&a?(e=parseInt(a[1],10),f=parseInt(a[3],10),10<e||10==e&&4<=f):"Macintosh"==e&&"Unknown"==f?k:m}(a,c,b,d,e,f,h,i))||("Ubuntu"==
e||"Linux"==e?k:m)||function(a,b,c,e,d,f,h,i){a=/([0-9]+).([0-9]+)/.exec(f);return i.w&&"Android"==d&&a?(d=parseInt(a[1],10),i=parseInt(a[2],10),3==d&&1<=i||3<d):m}(a,c,b,d,e,f,h,i))||"CrOS"==e||function(a,b,c,e,d,f,h,i){return i.G&&"iPad"==d?(a=/^([0-9]+)_([0-9]+)/.exec(f))?5<=parseInt(a[1],10):m:m}(a,c,b,d,e,f,h,i))||function(a,b,c,d,e,f,h,i){return i.H&&("iPhone"==e||"iPod"==e)?(a=/^([0-9]+)_([0-9]+)/.exec(f))?5<=parseInt(a[1],10):m:m}(a,c,b,d,e,f,h,i);return!j?m:function(a,b){if("Chrome"==a){var c=
/([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(b);if(c&&6<=parseFloat(c[1]))return k}}(a,c,b,d,e,f,h,i)}));
R(new Q("a",function(a,c,b,d,e,f,h,i){var j;j=(j=m||function(a,b,c,e,d,f,h,i){return i.G&&"iPad"==d&&(a=/^([0-9]+)_([0-9]+)/.exec(f))?(b=parseInt(a[2],10),4==parseInt(a[1],10)&&2<=b):m}(a,c,b,d,e,f,h,i))||function(a,b,c,e,d,f,h,i){if(i.H&&("iPhone"==d||"iPod"==d))if(a=/^([0-9]+)_([0-9]+)/.exec(f))return b=parseInt(a[2],10),4==parseInt(a[1],10)&&2<=b;return m}(a,c,b,d,e,f,h,i);return!j?m:function(a,b){if("Chrome"==a){var c=/([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(b);if(c&&6<=parseFloat(c[1]))return k}}(a,
c,b,d,e,f,h,i)}));R(new Q("a",function(a,c,b,d,e,f,h,i){var j;j=m||("Windows"==e&&"5.1"==f?k:m)||("Windows"==e&&"5.2"==f?k:m)||("Windows"==e&&"6.0"==f?k:m)||function(a,b,c,d,e,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==e&&a?(e=parseInt(a[1],10),a=parseInt(a[2],10),6<e||6==e&&1<=a):m}(a,c,b,d,e,f,h,i);return!j&&!("Ubuntu"==e||"Linux"==e?k:m)?m:function(a,b,c,e){return"Gecko"==c?(a=/1.9.1b[1-3]{1}/,/1.9.1/.test(e)&&!a.test(e)):m}(a,c,b,d,e,f,h,i)}));
R(new Q("b",function(a,c,b,d,e,f,h,i){var j;j=m||function(a,b,c,e,d,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==d&&a?(d=parseInt(a[1],10),f=parseInt(a[3],10),10<d||10==d&&4<=f):"Macintosh"==d&&"Unknown"==f?k:m}(a,c,b,d,e,f,h,i);return!j?m:function(a,b,c,e){return"Gecko"==c?(a=/1.9.1b[1-3]{1}/,/1.9.1/.test(e)&&!a.test(e)):m}(a,c,b,d,e,f,h,i)}));
R(new Q("d",function(a,c,b,d,e,f,h,i){var j;j=(j=(j=m||("Windows"==e&&"5.1"==f?k:m)||("Windows"==e&&"5.2"==f?k:m)||("Windows"==e&&"6.0"==f?k:m)||function(a,b,c,e,d,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==d&&a?(d=parseInt(a[1],10),a=parseInt(a[2],10),6<d||6==d&&1<=a):m}(a,c,b,d,e,f,h,i))||function(a,b,c,d,e,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==e&&a?(e=parseInt(a[1],10),f=parseInt(a[3],10),10<e||10==e&&4<=f):"Macintosh"==e&&"Unknown"==f?k:m}(a,c,b,d,e,f,h,i))||("Ubuntu"==
e||"Linux"==e?k:m)||i.w&&"Android"==e;return!j?m:function(a,b,c,e){return"Gecko"==c&&(b=/([0-9]+.[0-9]+)(.([0-9]+)|)/.exec(e))?(a=parseFloat(b[1]),b=parseInt(b[3],10),1.9<a||1.9<=a&&1<b):m}(a,c,b,d,e,f,h,i)}));
R(new Q("i",function(a,c,b,d,e,f,h,i){var j;j=m||("Windows"==e&&"5.1"==f?k:m)||("Windows"==e&&"5.2"==f?k:m)||("Windows"==e&&"6.0"==f?k:m)||function(a,b,c,e,d,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==d&&a?(d=parseInt(a[1],10),a=parseInt(a[2],10),6<d||6==d&&1<=a):m}(a,c,b,d,e,f,h,i);return!j?m:function(a,b,c,e,d,f,i){if("MSIE"==a)return(a=/([0-9]+.[0-9]+)/.exec(b))?6<=parseFloat(a[1])&&(i===g||9>i):m}(a,c,b,d,e,f,h,i)}));
R(new Q("d",function(a,c,b,d,e,f,h){if(!(c=m))b=/^([0-9]+).([0-9]+)/.exec(f),"Windows"==e&&b?(c=parseInt(b[1],10),b=parseInt(b[2],10),c=6<c||6==c&&1<=b):c=m;a=c||("Windows"==e&&"6.0"==f?k:m)?"MSIE"==a?9<=h:g:m;return a}));R(new Q("d",function(a,c,b,d,e,f,h,i){if(!(c=m))f=/^([0-9]+)/.exec(f),c=i.Oa&&"Windows Phone"==e&&f?8<=parseInt(f[1],10):m;return!c?m:"MSIE"==a}));
R(new Q("a",function(a,c,b,d,e,f,h,i){var j;j=m||("Windows"==e&&"5.1"==f?k:m)||("Windows"==e&&"5.2"==f?k:m)||("Windows"==e&&"6.0"==f?k:m)||function(a,b,c,e,d,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==d&&a?(d=parseInt(a[1],10),a=parseInt(a[2],10),6<d||6==d&&1<=a):m}(a,c,b,d,e,f,h,i);return!j&&!("Ubuntu"==e||"Linux"==e?k:m)?m:function(a,b){if("Opera"==a){var c=parseFloat(b);return 10.54<=c&&11.1>c}return m}(a,c,b,d,e,f,h,i)}));
R(new Q("b",function(a,c,b,d,e,f,h,i){var j;j=m||function(a,b,c,d,e,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==e&&a?(e=parseInt(a[1],10),f=parseInt(a[3],10),10<e||10==e&&4<=f):"Macintosh"==e&&"Unknown"==f?k:m}(a,c,b,d,e,f,h,i);return!j?m:function(a,b){if("Opera"==a){var c=parseFloat(b);return 10.54<=c&&11.1>c}return m}(a,c,b,d,e,f,h,i)}));
R(new Q("d",function(a,c,b,d,e,f,h,i){var j;j=(j=(j=m||("Windows"==e&&"5.1"==f?k:m)||("Windows"==e&&"5.2"==f?k:m)||("Windows"==e&&"6.0"==f?k:m)||function(a,b,c,e,d,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==d&&a?(d=parseInt(a[1],10),a=parseInt(a[2],10),6<d||6==d&&1<=a):m}(a,c,b,d,e,f,h,i))||function(a,b,c,d,e,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==e&&a?(e=parseInt(a[1],10),f=parseInt(a[3],10),10<e||10==e&&4<=f):"Macintosh"==e&&"Unknown"==f?k:m}(a,c,b,d,e,f,h,i))||("Ubuntu"==
e||"Linux"==e?k:m)||i.w&&"Android"==e;return!j?m:"Opera"==a?11.1<=parseFloat(c):m}));R(new Q("b",function(a,c,b,d,e,f,h,i){var j;j=m||function(a,b,c,e,d,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==d&&a?(d=parseInt(a[1],10),f=parseInt(a[3],10),10<d||10==d&&4<=f):"Macintosh"==d&&"Unknown"==f?k:m}(a,c,b,d,e,f,h,i);return!j?m:function(a,b,c,d){return"Safari"==a&&"AppleWebKit"==c&&(a=/([0-9]+.[0-9]+)/.exec(d))?(a=parseFloat(a[1]),525.13<=a&&534.5>a):m}(a,c,b,d,e,f,h,i)}));
R(new Q("a",function(a,c,b,d,e,f,h,i){var j;j=m||("Windows"==e&&"5.1"==f?k:m)||("Windows"==e&&"5.2"==f?k:m)||("Windows"==e&&"6.0"==f?k:m)||function(a,b,c,d,e,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==e&&a?(e=parseInt(a[1],10),a=parseInt(a[2],10),6<e||6==e&&1<=a):m}(a,c,b,d,e,f,h,i);return!j?m:function(a,b,c,e){return"Safari"==a&&"AppleWebKit"==c&&(a=/([0-9]+.[0-9]+)/.exec(e))?(a=parseFloat(a[1]),525.13<=a&&534.5>a):m}(a,c,b,d,e,f,h,i)}));
R(new Q("d",function(a,c,b,d,e,f,h,i){var j;j=(j=m||("Windows"==e&&"5.1"==f?k:m)||("Windows"==e&&"5.2"==f?k:m)||("Windows"==e&&"6.0"==f?k:m)||function(a,b,c,e,d,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==d&&a?(d=parseInt(a[1],10),a=parseInt(a[2],10),6<d||6==d&&1<=a):m}(a,c,b,d,e,f,h,i))||function(a,b,c,d,e,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==e&&a?(e=parseInt(a[1],10),f=parseInt(a[3],10),10<e||10==e&&4<=f):"Macintosh"==e&&"Unknown"==f?k:m}(a,c,b,d,e,f,h,i);return!j?m:function(a,
b,c,e){return"Safari"==a&&"AppleWebKit"==c&&(a=/([0-9]+.[0-9]+)/.exec(e))?534.5<=parseFloat(a[1]):m}(a,c,b,d,e,f,h,i)}));
R(new Q("a",function(a,c,b,d,e,f,h,i){var j;j=(j=(j=m||function(a,b,c,e,d,f,i,h){a=/([0-9]+).([0-9]+)/.exec(f);return h.w&&"Android"==d&&a?(d=parseInt(a[1],10),h=parseInt(a[2],10),2==d&&2<=h||3==d&&1>h):m}(a,c,b,d,e,f,h,i))||function(a,b,c,e,d,f,h,i){return i.G&&"iPad"==d&&(a=/^([0-9]+)_([0-9]+)/.exec(f))?(b=parseInt(a[2],10),4==parseInt(a[1],10)&&2<=b):m}(a,c,b,d,e,f,h,i))||function(a,b,c,e,d,f,i,h){if(h.H&&("iPhone"==d||"iPod"==d))if(a=/^([0-9]+)_([0-9]+)/.exec(f))return b=parseInt(a[2],10),4==
parseInt(a[1],10)&&2<=b;return m}(a,c,b,d,e,f,h,i);return!j?m:"Safari"==a&&"AppleWebKit"==b||"Unknown"==a&&"AppleWebKit"==b&&("iPhone"==e||"iPad"==e)?k:m}));R(new Q("f",function(a,c,b,d,e,f,h,i){if(!(c=m))f=/([0-9]+).([0-9]+)/.exec(f),i.w&&"Android"==e&&f?(i=parseInt(f[1],10),f=parseInt(f[2],10),c=3==i&&1<=f||3<i):c=m;return!c?m:"Safari"==a&&"AppleWebKit"==b||"Unknown"==a&&"AppleWebKit"==b&&("iPhone"==e||"iPad"==e)?k:m}));
R(new Q("d",function(a,c,b,d,e,f,h,i){var j;j=(j=m||function(a,b,c,d,e,f,h,i){return i.G&&"iPad"==e?(a=/^([0-9]+)_([0-9]+)/.exec(f))?5<=parseInt(a[1],10):m:m}(a,c,b,d,e,f,h,i))||function(a,b,c,e,d,f,i,h){return h.H&&("iPhone"==d||"iPod"==d)?(a=/^([0-9]+)_([0-9]+)/.exec(f))?5<=parseInt(a[1],10):m:m}(a,c,b,d,e,f,h,i);return!j?m:"Safari"==a&&"AppleWebKit"==b||"Unknown"==a&&"AppleWebKit"==b&&("iPhone"==e||"iPad"==e)?k:m}));var V=new function(){this.S=[];this.u={}};Fa(new U("AllFonts",function(a,c){return c}));
Fa(new U("DefaultFourFontsWithSingleFvdFamilies",function(a,c,b){for(var d=0;d<c.length;d++){var e=c[d],f=a.replace(/(-1|-2)$/,"").slice(0,28)+"-"+e;b.push(new ra(f,[e]))}a={};for(e=0;e<c.length;e++)b=c[e],d=b.charAt(1),(a[d]||(a[d]=[])).push(b);b=[[4,3,2,1,5,6,7,8,9],[7,8,9,6,5,4,3,2,1]];d=[];for(e=0;e<b.length;e++)for(var f=b[e],h=0;h<f.length;h++){var i=f[h];if(a[i]){d=d.concat(a[i]);break}}b=d;d={};a=[];for(e=0;e<b.length;e++)f=b[e],d[f]||(d[f]=k,a.push(f));b=[];for(d=0;d<c.length;d++){e=c[d];
for(f=0;f<a.length;f++)h=a[f],h==e&&b.push(h)}return b}));V.u.a="AllFonts";V.u.b="AllFonts";V.u.d="AllFonts";V.u.f="AllFonts";V.u.i="DefaultFourFontsWithSingleFvdFamilies";var X=new function(){this.v={}};X.v.a=[];X.v.b=[];X.v.d=[];X.v.f=["observeddomain"];X.v.i=["observeddomain","fontmask"];window.Typekit||(window.Typekit={});
if(!window.Typekit.load){var Ja=function(a,c){setTimeout(a,c)},Y=new S(new W("//fonts.timeinc.net/{id}.js"),new N(document),document.documentElement,Ja),Z=new T(window,Ja);window.Typekit.load=function(){Y.load.apply(Y,arguments)};window.Typekit.addKit=function(){Y.J.apply(Y,arguments)}}var Ka=l,La,$,Ka=new W("//p.typekit.net/p.gif?a=647441&f=5898.5901.5902.13429.13430.14017.14018.14019.14021.14041.14042.14043&h={host}&ht=sh&k=lxk3msw&s=1&_={_}");La=new function(){var a=Ka;this.Z=l;this.la=a};$=new va(new N(document));
$.ra="lxk3msw";$.N=new W("//fonts.timeinc.net/k/lxk3msw-{format}.css?3bb2a6e53c9684ffdc9a9aff195b2a62452a13f44e7d614e14426014041bf0573979680ea34c2fab2725390b3393b717cccd6e0459de78b048e9900b610de6fb89c3e67674d916082b9b6a2a2a6370db26b2640e3d74fb0c5cac9bea34");$.V=La;$.h.push(new P("leitura-news",["n4","i4","n7","i7"]));$.h.push(new P("lft-etica",["n4","i4","n6","n7","i7"]));$.h.push(new P("leitura-display",["n4","i4"]));$.h.push(new P("leitura-display-swashes",["n4"]));
$.r.push(new O([".tk-leitura-news"],[{value:'"leitura-news",serif',name:"font-family"}]));$.r.push(new O([".tk-lft-etica"],[{value:'"lft-etica",sans-serif',name:"font-family"}]));$.r.push(new O([".tk-leitura-display"],[{value:'"leitura-display",sans-serif',name:"font-family"}]));$.r.push(new O([".tk-leitura-display-swashes"],[{value:'"leitura-display-swashes",sans-serif',name:"font-family"}]));$.K=ua;$.M=X;$.R=V;
Z&&Z.ea.__webfonttypekitmodule__?(Z.J($),Z.load()):(xa($,(new z(navigator.userAgent,document)).parse()),window.Typekit.addKit($));
})(this,document);