//	Modernizr custom build of 1.7: rgba | borderradius | boxshadow | opacity | cssgradients
window.Modernizr=function(a,b,c){function G(){}function F(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+p.join(c+" ")+c).split(" ");return!!E(d,b)}function E(a,b){for(var d in a)if(k[a[d]]!==c&&(!b||b(a[d],j)))return!0}function D(a,b){return(""+a).indexOf(b)!==-1}function C(a,b){return typeof a===b}function B(a,b){return A(o.join(a+";")+(b||""))}function A(a){k.cssText=a}var d="1.7",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l=b.createElement("input"),m=":)",n=Object.prototype.toString,o=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),p="Webkit Moz O ms Khtml".split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v,w=function(a){var c=b.createElement("style"),d=b.createElement("div"),e;c.textContent=a+"{#modernizr{height:3px}}",h.appendChild(c),d.id="modernizr",g.appendChild(d),e=d.offsetHeight===3,c.parentNode.removeChild(c),d.parentNode.removeChild(d);return!!e},x=function(){function d(d,e){e=e||b.createElement(a[d]||"div");var f=(d="on"+d)in e;f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],c)||(e[d]=c),e.removeAttribute(d))),e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),y=({}).hasOwnProperty,z;C(y,c)||C(y.call,c)?z=function(a,b){return b in a&&C(a.constructor.prototype[b],c)}:z=function(a,b){return y.call(a,b)},r.rgba=function(){A("background-color:rgba(150,255,150,.5)");return D(k.backgroundColor,"rgba")},r.borderradius=function(){return F("borderRadius","",function(a){return D(a,"orderRadius")})},r.boxshadow=function(){return F("boxShadow")},r.opacity=function(){B("opacity:.55");return/^0.55$/.test(k.opacity)},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";A((a+o.join(b+a)+o.join(c+a)).slice(0,-a.length));return D(k.backgroundImage,"gradient")};for(var H in r)z(r,H)&&(v=H.toLowerCase(),e[v]=r[H](),u.push((e[v]?"":"no-")+v));e.input||G(),e.crosswindowmessaging=e.postmessage,e.historymanagement=e.history,e.addTest=function(a,b){a=a.toLowerCase();if(!e[a]){b=!!b(),g.className+=" "+(b?"":"no-")+a,e[a]=b;return e}},A(""),j=l=null,e._enableHTML5=f,e._version=d,g.className=g.className.replace(/\bno-js\b/,"")+" js "+u.join(" ");return e}(this,this.document);
/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);

/*********************************************************************************************************/
/****  GLOBAL FUNCTIONS  ****/
/*********************************************************************************************************/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();

if(typeof com=="undefined"){var com=new Object();}if(typeof com.deconcept=="undefined"){com.deconcept=new Object();}if(typeof com.deconcept.util=="undefined"){com.deconcept.util=new Object();}if(typeof com.deconcept.FlashObjectUtil=="undefined"){com.deconcept.FlashObjectUtil=new Object();}com.deconcept.FlashObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a,_b){if(!document.createElement||!document.getElementById){return;}this.DETECT_KEY=_b?_b:"detectflash";this.skipDetect=com.deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();this.useExpressInstall=_7;if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new com.deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=com.deconcept.FlashObjectUtil.getPlayerVersion(this.getAttribute("version"),_7);if(c){this.addParam("bgcolor",c);}var q=_8?_8:"high";this.addParam("quality",q);var _d=(_9)?_9:window.location;this.setAttribute("xiRedirectUrl",_d);this.setAttribute("redirectUrl","");if(_a){this.setAttribute("redirectUrl",_a);}};com.deconcept.FlashObject.prototype={setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},createParamTag:function(n,v){var p=document.createElement("param");p.setAttribute("name",n);p.setAttribute("value",v);return p;},getVariablePairs:function(){var _19=new Array();var key;var _1b=this.getVariables();for(key in _1b){_19.push(key+"="+_1b[key]);}return _19;},getFlashHTML:function(){var _1c="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");}_1c="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\"";_1c+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1d=this.getParams();_1d["instanceOf"]=null;for(var key in _1d){_1c+=[key]+"=\""+_1d[key]+"\" ";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_1c+="flashvars=\""+_1f+"\"";}_1c+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");}_1c="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\">";_1c+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _20=this.getParams();for(var key in _20){_1c+="<param name=\""+key+"\" value=\""+_20[key]+"\" />";}var _22=this.getVariablePairs().join("&");if(_22.length>0){_1c+="<param name=\"flashvars\" value=\""+_22+"\" />";}_1c+="</object>";}return _1c;},write:function(_23){if(this.useExpressInstall){var _24=new com.deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_24)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}else{this.setAttribute("doExpressInstall",false);}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _23=="string")?document.getElementById(_23):_23;if(typeof n!='undefined'){n.innerHTML=this.getFlashHTML();}else{document.writeln(this.getFlashHTML());}}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}}};function tiiVBGetFlashVersionExists(){var result=true;try{var dontcare=tiiVBGetFlashVersion(3);}catch(e){result=false}return result;}com.deconcept.FlashObjectUtil.getPlayerVersion=function(_26,_27){var _28=new com.deconcept.PlayerVersion(0,0,0);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_28=new com.deconcept.PlayerVersion(x.description.replace(/([a-z]|[A-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{try{if(!tiiVBGetFlashVersionExists()){var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");for(var i=3;axo!=null;i++){axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+i);_28=new com.deconcept.PlayerVersion([i,0,0]);}}else{var versionStr="";for(var i=25;i>0;i--){var tempStr=tiiVBGetFlashVersion(i);if(tempStr!=""){versionStr=tempStr;break;}}if(versionStr!=""){var splits=versionStr.split(" ");var splits2=splits[1].split(",");_28=new com.deconcept.PlayerVersion([splits2[0],splits2[1],splits2[2]]);}}}catch(e){}if(_26&&_28.major>_26.major){return _28;}if(!_26||((_26.minor!=0||_26.rev!=0)&&_28.major==_26.major)||_28.major!=6||_27){try{_28=new com.deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}catch(e){}}}return _28;};com.deconcept.PlayerVersion=function(_2c){this.major=parseInt(_2c[0])||0;this.minor=parseInt(_2c[1])||0;this.rev=parseInt(_2c[2])||0;};com.deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};com.deconcept.util={getRequestParameter:function(_2e){var q=document.location.search||document.location.hash;if(q){var _30=q.indexOf(_2e+"=");var _31=(q.indexOf("&",_30)>-1)?q.indexOf("&",_30):q.length;if(q.length>1&&_30>-1){return q.substring(q.indexOf("=",_30)+1,_31);}}return"";},removeChildren:function(n){while(n.hasChildNodes()){n.removeChild(n.firstChild);}}};if(Array.prototype.push==null){Array.prototype.push=function(_33){this[this.length]=_33;return this.length;};}var getQueryParamValue=com.deconcept.util.getRequestParameter;var SWFObject=com.deconcept.FlashObject;var PlayerVersion=com.deconcept.PlayerVersion;

//debugging bugger
var echo = (typeof(console)=='undefined') ? alert : console.log;

// fixes IE background flickering
try { document.execCommand('BackgroundImageCache', false, true); } catch(e) {}



/*********************************************************************************************************/
/****  TII FUNCTIONS  ****/
/*********************************************************************************************************/
// ### Array Helper Functions ###

function tiiArrayContains (array, value) {
    if (array != null) {
        var al = array.length;
        for (var i = 0; i < al; i++) {
            if (array[i] == value) return true;
        }
    }
    return false;
}

// ### Key=Value; Functions ###

function tiiHashKeys(string) {
    var keys = null;
    if (string != null) {
        var hash = string.split(';');
        var hl = hash.length - 1;
        if(hl > 0){
            keys = new Array();
            for(var i = 0; i < hl; i++){
                var data = hash[i].split('=');
                keys[i] = data[0].replace(' ', '');
            }
        }
    }
    return keys;
}

function tiiHashGet(string, key) {
    var value = null;
    if (string != null) {
        var keyStart = key + '=';
        var offset = string.indexOf(keyStart);
        if (offset != -1) {
            offset += keyStart.length;
            var end = string.indexOf(';', offset);
            if (end == -1) {
                end = string.length;
            }
            value = string.substring(offset, end);
        }
    }
    return value;
}

function tiiHashSet(string, key, value) {
    var string = tiiHashDelete(string, key);
    var newValue = key + '=' + value + ';';
    if (string != null) newValue = newValue + string;
    return newValue;
}

function tiiHashDelete(string, key) {
    var oldValue = tiiHashGet(string, key);
    var newString = string;
    if (oldValue != null) {
        var search = key + '=';
        var start = string.indexOf(search);
        var offset = start + search.length;
        var end = string.indexOf(';', offset) + 1;
        if (end == -1) end = string.length;
        newString = string.slice(0,start) + string.slice(end,string.length);
        return newString;

    }
    return newString;
}

function tiiGetQueryParamValue(param) {
    var startIndex;
    var endIndex;
    var valueStart;

    var qs = document.location.search;
    var detectIndex = qs.indexOf( "?" + param + "=" );
    var detectIndex2 = qs.indexOf( "&" + param + "=" );
    var key = "&" + param + "=";
    var keylen = key.length;

    if (qs.length > 1) {
        if (detectIndex != -1) {
            startIndex = detectIndex;
        } else if (detectIndex2 != -1) {
            startIndex = detectIndex2;
        } else {
            return null;
        }

        valueStart = startIndex + keylen;

        if (qs.indexOf("&", valueStart) != -1) {
            endIndex = qs.indexOf("&", startIndex + 1)
        } else {
            endIndex = qs.length
        }

        return (qs.substring(qs.indexOf("=", startIndex) + 1, endIndex));
    }

    return null;
}

// ### Date/Time Functions ###

function tiiDateGetOffsetMinutes(minutes)	{ var today = new Date(); return today.getTime() + (60000) * minutes;}
function tiiDateGetOffsetHours(hours)		{ var today = new Date(); return today.getTime() + (3600000) * hours; }
function tiiDateGetOffsetDays(days)			{ var today = new Date(); return today.getTime() + (86400000) * days; }
function tiiDateGetOffsetWeeks(weeks)		{ var today = new Date(); return today.getTime() + (604800000) * weeks; }
function tiiDateGetOffsetMonths(months)		{ var today = new Date(); return today.getTime() + (259200000) * months; }
function tiiDateGetOffsetYears(years)		{ var today = new Date(); return today.getTime() + (31536000000) * years; }
// ### Core Cookie Functions ###

function tiiCookieExists(cookieName) {
    return tiiArrayContains(tiiCookieGet(), cookieName);
}

function tiiCookieGet(cookieName) {
    if (arguments.length == 0) {
        return tiiHashKeys(document.cookie);
    }

    var cookie = tiiHashGet(document.cookie, cookieName);
    if (cookie != null) cookie = unescape(cookie);
    return cookie;
}

function tiiCookieSet(cookieName, cookieValue, domain, path, expires, secure) {
    if (expires != null) {
        expire_date = new Date();
        expire_date.setTime(expires);
    }
    var curCookie = cookieName + '=' + escape(cookieValue)
        + ((expires) ? '; expires=' + expire_date.toGMTString() : '')
        + ((path) ? '; path=' + path : '')
        + ((domain) ? '; domain=' + domain : '')
        + ((secure) ? '; secure' : '');
    document.cookie = curCookie;
}

function tiiCookieSetUnescape(cookieName, cookieValue, domain, path, expires, secure) {
    if (expires != null) {
        expire_date = new Date();
        expire_date.setTime(expires);
    }
    var curCookie = cookieName + '=' + cookieValue
        + ((expires) ? '; expires=' + expire_date.toGMTString() : '')
        + ((path) ? '; path=' + path : '')
        + ((domain) ? '; domain=' + domain : '')
        + ((secure) ? '; secure' : '');
    document.cookie = curCookie;
}

function tiiCookieDelete(cookieName) {
    tiiCookieSet(cookieName, null, null, null, '', 0);
}

// ### Core Chip Functions ###
function tiiCookieChipGet(cookieName, chipName) {
    if (arguments.length == 1) {
        return tiiHashKeys(tiiCookieGet(cookieName));
    }
    return tiiHashGet(tiiCookieGet(cookieName), chipName);
}

function tiiCookieChipSet(cookieName, chipName, chipValue, domain, path, expire, secure) {
    var new_cookieValue = tiiHashSet(tiiCookieGet(cookieName), chipName, chipValue);
    tiiCookieSet(cookieName, new_cookieValue, domain, path, expire, secure);
}

function tiiCookieChipDelete(cookieName, chipName, domain, path, expire, secure) {
    var new_cookieValue = tiiHashDelete(tiiCookieGet(cookieName), chipName);
    if (new_cookieValue == null) new_cookieValue = '';
    tiiCookieSet(cookieName, new_cookieValue, domain, path, expire, secure);
}

// ### Permanent Cookie/Chip Functions ###
function tiiPermCookieChipGet(chipName) {
    return tiiCookieChipGet('tii_perm', chipName);
}

function tiiPermCookieChipSet(chipName, chipValue) {
    tiiCookieChipSet('tii_perm', chipName, chipValue, null, '/', tiiDateGetOffsetYears(2), 0);
}

function tiiPermCookieChipDelete(chipName) {
    tiiCookieChipDelete('tii_perm', chipName, null, '/', tiiDateGetOffsetYears(2), 0);
}

// ### Session Cookie/Chip Functions ###
function tiiSessCookieChipGet(chipName) {
    return tiiCookieChipGet('tii_sess', chipName);
}

function tiiSessCookieChipSet(chipName, chipValue) {
    tiiCookieChipSet('tii_sess', chipName, chipValue, null, '/', null, 0);
}

function tiiSessCookieChipDelete(chipName) {
    tiiCookieChipDelete('tii_sess', chipName, null, '/', null, 0);
}

/**
 * FlashObject is (c) 2006 Geoff Stearns and is released under the MIT License:
 */
if(typeof com=="undefined"){var com=new Object();}
if(typeof com.deconcept=="undefined"){com.deconcept=new Object();}
if(typeof com.deconcept.util=="undefined"){com.deconcept.util=new Object();}
if(typeof com.deconcept.FlashObjectUtil=="undefined"){com.deconcept.FlashObjectUtil=new Object();}
com.deconcept.FlashObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a,_b){
//this.instanceof=null;
if(!document.createElement||!document.getElementById){return;}
this.DETECT_KEY=_b?_b:"detectflash";
this.skipDetect=com.deconcept.util.getRequestParameter(this.DETECT_KEY);
this.params=new Object();
this.variables=new Object();
this.attributes=new Array();
this.useExpressInstall=_7;
if(_1){this.setAttribute("swf",_1);}
if(id){this.setAttribute("id",id);}
if(w){this.setAttribute("width",w);}
if(h){this.setAttribute("height",h);}
if(_5){this.setAttribute("version",new com.deconcept.PlayerVersion(_5.toString().split(".")));}
this.installedVer=com.deconcept.FlashObjectUtil.getPlayerVersion(this.getAttribute("version"),_7);
if(c){this.addParam("bgcolor",c);}
var q=_8?_8:"high";
this.addParam("quality",q);
var _d=(_9)?_9:window.location;
this.setAttribute("xiRedirectUrl",_d);
this.setAttribute("redirectUrl","");
if(_a){this.setAttribute("redirectUrl",_a);}
};
com.deconcept.FlashObject.prototype={setAttribute:function(_e,_f){
this.attributes[_e]=_f;
},getAttribute:function(_10){
return this.attributes[_10];
},addParam:function(_11,_12){
this.params[_11]=_12;
},getParams:function(){
return this.params;
},addVariable:function(_13,_14){
this.variables[_13]=_14;
},getVariable:function(_15){
return this.variables[_15];
},getVariables:function(){
return this.variables;
},createParamTag:function(n,v){
var p=document.createElement("param");
p.setAttribute("name",n);
p.setAttribute("value",v);
return p;
},getVariablePairs:function(){
var _19=new Array();
var key;
var _1b=this.getVariables();
for(key in _1b){_19.push(key+"="+_1b[key]);}
return _19;
},getFlashHTML:function(){
var _1c="";
if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){
if(this.getAttribute("doExpressInstall")){
this.addVariable("MMplayerType","PlugIn");
}
_1c="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\"";
_1c+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";
var _1d=this.getParams();
_1d["instanceOf"]=null;
for(var key in _1d){_1c+=[key]+"=\""+_1d[key]+"\" ";}
var _1f=this.getVariablePairs().join("&");
if(_1f.length>0){_1c+="flashvars=\""+_1f+"\"";}
_1c+="/>";
}else{
if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");}
_1c="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\">";
_1c+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";
var _20=this.getParams();
for(var key in _20){_1c+="<param name=\""+key+"\" value=\""+_20[key]+"\" />";}
var _22=this.getVariablePairs().join("&");
if(_22.length>0){_1c+="<param name=\"flashvars\" value=\""+_22+"\" />";
}_1c+="</object>";}
return _1c;
},write:function(_23){
if(this.useExpressInstall){
var _24=new com.deconcept.PlayerVersion([6,0,65]);
if(this.installedVer.versionIsValid(_24)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){
this.setAttribute("doExpressInstall",true);
this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));
document.title=document.title.slice(0,47)+" - Flash Player Installation";
this.addVariable("MMdoctitle",document.title);}
}else{this.setAttribute("doExpressInstall",false);}
if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){
var n=(typeof _23=="string")?document.getElementById(_23):_23;
if(typeof n != 'undefined'){
    n.innerHTML=this.getFlashHTML();
}else{
    document.writeln(this.getFlashHTML());
}
}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}}};


function tiiVBGetFlashVersionExists() {
    var result = true;
    try {
        var dontcare = tiiVBGetFlashVersion( 3 ); 
    } catch(e) { result = false }
    
    
    return result;
}

com.deconcept.FlashObjectUtil.getPlayerVersion=function(_26,_27){
    var _28 = new com.deconcept.PlayerVersion(0,0,0);
    if ( navigator.plugins && navigator.mimeTypes.length ){
        var x = navigator.plugins["Shockwave Flash"];
        if ( x && x.description ){
            _28 = new com.deconcept.PlayerVersion(x.description.replace(/([a-z]|[A-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));
        }
    } else {
        try {
            if ( ! tiiVBGetFlashVersionExists() ) {
                
                
                var axo = new ActiveXObject( "ShockwaveFlash.ShockwaveFlash" );
                for ( var i = 3; axo != null; i++ ) {
                    axo = new ActiveXObject( "ShockwaveFlash.ShockwaveFlash." + i );
                    _28 = new com.deconcept.PlayerVersion( [ i, 0, 0 ] );
                }
            } else {
                
                
                var versionStr = "";
                for ( var i = 25; i > 0 ; i-- ) {
                    var tempStr = tiiVBGetFlashVersion( i );
                    if ( tempStr != "" ) {
                        versionStr = tempStr;
                        break;
                    }
                }
                if ( versionStr != "" ) {
                    
                    var splits = versionStr.split(" ");
                    var splits2 = splits[1].split(",");
                    _28 = new com.deconcept.PlayerVersion( [ splits2[0], splits2[1], splits2[2] ] );
                }
            }
        } catch(e) {}
        if (_26&&_28.major>_26.major ){return _28;}
        if ( !_26 || ((_26.minor!=0||_26.rev!=0)&&_28.major==_26.major) || _28.major != 6 || _27){
            try {
                _28 = new com.deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));
            } catch(e) {}
        }
    }

    
    return _28;
};

com.deconcept.PlayerVersion=function(_2c){
this.major=parseInt(_2c[0])||0;
this.minor=parseInt(_2c[1])||0;
this.rev=parseInt(_2c[2])||0;
};
com.deconcept.PlayerVersion.prototype.versionIsValid=function(fv){
if(this.major<fv.major){return false;}
if(this.major>fv.major){return true;}
if(this.minor<fv.minor){return false;}
if(this.minor>fv.minor){return true;}
if(this.rev<fv.rev){return false;}
return true;
};

com.deconcept.util={getRequestParameter:function(_2e){
var q=document.location.search||document.location.hash;
if(q){var _30=q.indexOf(_2e+"=");
var _31=(q.indexOf("&",_30)>-1)?q.indexOf("&",_30):q.length;
if(q.length>1&&_30>-1){
return q.substring(q.indexOf("=",_30)+1,_31);}}return "";
},removeChildren:function(n){
while(n.hasChildNodes()){
n.removeChild(n.firstChild);}}};
if(Array.prototype.push==null){
Array.prototype.push=function(_33){
this[this.length]=_33;
return this.length;};}

var getQueryParamValue=com.deconcept.util.getRequestParameter;
var FlashObject=com.deconcept.FlashObject;
var PlayerVersion=com.deconcept.PlayerVersion;

function tiiGetFlashVersion() {
    var flashversion = 0;
    if (navigator.plugins && navigator.plugins.length) {
        var x = navigator.plugins["Shockwave Flash"];
        if(x){
            if (x.description) {
                var y = x.description;
                var flashFullDescriptionArray = y.split('.');
                var flashPartialDescriptionArray = flashFullDescriptionArray[0].split(' ');
                flashversion = flashPartialDescriptionArray[flashPartialDescriptionArray.length - 1];
            }
        }
    } else {
        result = false;
        for(var i = 15; i >= 3 && result != true; i--){
            execScript('on error resume next: result = IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.'+i+'"))','VBScript');
            flashversion = i;
        }
    }
    return flashversion;
}

function tiiDetectFlash(ver) {
    if (tiiGetFlashVersion() >= ver) {
        return true;
    } else {
        return false;
    }
}

 
/*-----------------------------------------------------------------------------*/
/* MB - 10/23/07 - Brightcove Wrapper / JavaScript support functions           */
/* Function: TiiBcLcDcTracker - Called by Brightcove Flash wrapper to notify   */ 
/* DoubleClick / DART that a Lightningcast ad was served                       */
/* Requirements: adsitename i.e. &adsitename=3745.mre needs to be passed to    */
/* the BC wrapper. If no adzone is specified the default value will be used    */
/*-----------------------------------------------------------------------------*/
function TiiBcLcDcTracker (omniAdSiteName,omniAdZone) {
    var defaultFlg = 'false';
    if (omniAdZone == 'default') {  
        omniAdZone = 'video_main_bc_lightningcast';
        defaultFlg = 'true';
    }    
    var bcLCDCTmpPixel = new Image();
    bcLCDCTmpPixel.src = 'http://ad.doubleclick.net/ad/'+omniAdSiteName+'/'+omniAdZone+';sz=1x1;ord='+Math.ceil(1+1E12*Math.random());
    return 'Tracking successful - adSiteName="'+omniAdSiteName+'" ,adZone="'+omniAdZone+ '" defaultFlg="'+defaultFlg+'"'; 
}    
             
function TiiBrightcovePlayer() {
    this.cfg = new Array();
    this.flashUrl = "/web/tii/shared/swf/BrightcoveWrapper.swf";
    this.flashUrl = "/shared/static/swf/BrightcoveWrapper.swf";
    this.bgcolor = "#ffffff";

    // Default cfg
    this.cfg["objectId"] = "bcVideoPlayer";
    this.cfg["divId"] = "";
    this.cfg["testmode"] = "";
    this.cfg["autostart"] = false;
    this.cfg["lctracking"] = "";
    this.cfg["adsitename"] = "";
    this.cfg["lcadzone"] = ""; 
    this.setParam = TiiBcSetParam;
    this.write = TiiBcWrite;
}

function TiiBcSetParam(key, value) {
    this.cfg[key] = value;
}

function TiiBcWrite() {
    var fo = new FlashObject(this.flashUrl, this.cfg["objectId"], this.cfg["width"], this.cfg["height"], 8, this.bgcolor);
    
    fo.addParam("allowScriptAccess", "always");
    fo.addParam("menu", "false");
    fo.addParam("quality", "high");
    fo.addParam("bgcolor", this.bgcolor);
    fo.addParam("loop", "false");
    fo.addParam("wmode", "opaque");

    fo.addVariable("account", this.cfg["account"]);
    fo.addVariable("channel", this.cfg["siteId"]);
    fo.addVariable("prop16", this.cfg["channel"]);

    fo.addVariable("playerwidth", this.cfg["width"]);
    fo.addVariable("playerheight", this.cfg["height"]);
    fo.addVariable("playerid", this.cfg["playerId"]);
    fo.addVariable("videoid", this.cfg["videoId"]);
    fo.addVariable("lineupid", this.cfg["lineupId"]);
    fo.addVariable("autostart", this.cfg["autostart"]);
    
    fo.addVariable("lctracking", this.cfg["lctracking"]); // MB - added 10/23/07
    fo.addVariable("adsitename", this.cfg["adsitename"]); // MB - added 10/23/07
    fo.addVariable("lcadzone", this.cfg["lcadzone"]);     // MB - added 10/23/07
    
    fo.addVariable("objectid", this.cfg["objectId"]);	
    fo.addVariable("adserverurl", this.cfg["adServerUrl"]);
    if (this.cfg["testmode"] != "") {
        fo.addVariable("testmode", this.cfg["testmode"]);	
    }
    
    fo.altTxt = "";

    if (this.cfg["divId"] != "") {
        fo.write(this.cfg["divId"]);
    } else {
        fo.write();
    }
}

//// Deprecated Quigo Ad code in favor of GoogleAds 11.28.11 DDM remove quigo code after switch////
function tiiQuigoSetEnabled(b) {
    _tiiQuigoEnabled = b;
}

function tiiQuigoIsEnabled() {
    if (typeof(_tiiQuigoEnabled) == "boolean") {
        return _tiiQuigoEnabled;
    }
    return true;
}

function tiiQuigoWriteAd(pid, placementId, zw, zh, ps) {
    if (tiiQuigoIsEnabled()) {
        qas_writeAd(placementId, pid, ps, zw, zh, 'ads.adsonar.com');
    }
}
//// Begin googlead code ////
var IS = window.IS || {};
IS.writeGoogleAd = function(width, height, channel, maxads){
    google_ad_output = 'js';
    google_safe = 'high';
    google_ad_type = 'text';
	
    if(channel === 'gallery' || channel == 'poll'){
	google_ad_client = 'ca-timeinc-instyle-photo';
    }else{
        google_ad_client = 'ca-timeinc-instyle-bah';
    }
    google_ad_width = width;
    google_ad_height = height;
    google_ad_channel = channel;
    google_max_num_ads = maxads;	
    var s = ''
    + '	<script src="http://pagead2.googlesyndication.com/pagead/show_ads.js"><' + '/script>'
    document.write(s);
}
var google_ad_request_done = function(google_ads) {
	/*
	if (google_ads.length < 1 ) {
	  return;
	}
	*/
	var s = '';
	
	s = '<div class="googlead">'
		+ '	<p class="adtext"><a href="'+ google_info.feedback_url +'" target="_blank">Ads by Google</a></p>';
	
	for (var i=0; i < google_ads.length; i++) {
		s += ''
		+ '<p class="adentry">'
		+ '	<span class="line1"><a href="' + google_ads[i].url + '">' + google_ads[i].line1 + '</a></span>'
		+ '	<span class="line2">' + google_ads[i].line2  + '</span> <span class="line3">' +  google_ads[i].line3 + '</span>'
		+ '	<span class="line4"><a href="' + google_ads[i].url + '">' + google_ads[i].visible_url + '</a></span>';
		+ '</p>';
	}
	s += '</div>';
	document.write(s);
}

function ajaxObj ()
{
    this.req = null;
    this.url = null;
    this.status = null;
    this.statusText = '';
    this.method = 'GET';
    this.async = true;
    this.dataPayload = null;
    this.readyState = null;
    this.responseText = null;
    this.responseXML = null;
    this.handleResp = null;
    this.responseFormat = 'text', // 'text', 'xml', 'object'
    this.mimeType = null;
    this.headers = [];
    this.init = function ()
    {
        var i = 0;
        var reqTry = [ 
            function() { return new XMLHttpRequest (); },
            function() { return new ActiveXObject ('Msxml2.XMLHTTP'); },
            function() { return new ActiveXObject ('Microsoft.XMLHTTP'); }];
            
        while (!this.req && (i < reqTry.length))
        {
            try
            {
                this.req = reqTry [i++] ();
            }
            catch (e) {}
        }
        return true;
    };
    this.doGet = function (url, handler, format)
    {
        this.url = url;
        this.handleResp = handler;
        this.responseFormat = format || 'text';
        this.doReq ();
    }
    this.doReq = function ()
    {
        if (!this.init ())
        {
            alert ('Could not create XMLHttpRequest object.');
            return;
        }
        this.req.open (this.method, this.url, this.async);
        if (this.mimeType)
        {
            try
            {
                req.overrideMimeType (this.mimeType);
            }
            catch (e)
            {
                // Couldn't override MIME type -- IE6 or Opera?
            }
        }
        var self = this; // Fix loss-of-scope in inner function
        this.req.onreadystatechange = function ()
        {
            var resp = null;
            if (self.req.readyState == 4)
            {
                switch (self.responseFormat)
                {
                    case 'text':
                        resp = self.req.responseText;
                        break;
                    case 'xml':
                        resp = self.req.responseXML;
                        break;
                    case 'object':
                        resp = req;
                        break;
                }
                if (self.req.status >= 200 && self.req.status <= 299)
                {
                    self.handleResp (resp);
                }
                else
                {
                    self.handleErr (resp);
                }
            }
        }
        this.req.send (this.postData);
    };
    this.setMimeType = function (mimeType)
    {
        this.mimeType = mimeType;
    };
    this.handleErr = function () {};
    this.abort = function ()
    {
        if (this.req)
        {
            this.req.onreadystatechange = function () {};
            this.req.abort ();
            this.req = null;
        }
    };
}/* Request controller for JSON-P access */
var $isrc =
{
    NAMESPACE : 'is_',
    CALLBACK_SUFFIX : 'CallbackFn',
    POLL_TIMEOUT : 10000,
    POLL_INTERVAL : 500,
    IS_OPERA : typeof window.opera != 'undefined',
    IS_IE : typeof document.all != 'undefined' && !this.IS_OPERA && navigator.vendor != 'KDE',
    domHook: null,
    isrs : new Array (),
    isrIndex : -1,
    hasBeenLoggedIn : false,
    setDomHook : function (init) { if (init) { document.write ('<div id="domHook"></div>'); } this.domHook = document.getElementById ('domHook'); },
    registerObj : function (obj) { this.isrs [++this.isrIndex] = obj; },
    getPrevObj : function (obj) { if (this.isrIndex > 0) { return this.isrs [this.isrIndex - 1]; }; return null; },
    clearObj : function (obj) { this.isrs [obj.index] = obj = null; }
};
$isrc.setDomHook (true);

/* Request object for JSON-P access */
function $isr ()
{
    $isrc.registerObj (this);
    var self = this;
    this.index = $isrc.isrIndex;
    this.script = document.createElement ('script');
    this.scriptCallback = $isrc.NAMESPACE + 'script' + this.index + $isrc.CALLBACK_SUFFIX,
    this.interval = null;
    this.loadSuccess = false;
    this.timeout = null;
    this.timedOut = false;
    this.prevObj = $isrc.getPrevObj ();
    this.data = null;
    this.getData = function (url, queryString, callback, callbackName)
    {
        if (!$isrc.domHook) { $isrc.setDomHook (false); }
        if (arguments.length > 0)
        {
            this.url = url;
            this.queryString = queryString;
            this.userCallback = callback;
            if (typeof callbackName != 'undefined' && callbackName) { this.scriptCallback = callbackName; }
        }
        if (typeof window [this.scriptCallback] != 'function')
        {
            window [this.scriptCallback] = function (jsonData)
            {
                if (!self.timedOut)
                {
                    clearTimeout ($isrc.isrs [self.index].timeout);
                    self.loadSuccess = true;
                    self.data = jsonData;
                    if (!$isrc.IS_IE) { $isrc.domHook.removeChild (self.script); }
                    self.userCallback.call ('', jsonData);
                }
            }
        }
        if (this.script.src == '')
        {
            this.script.src = this.url + '?callback=' + this.scriptCallback;
            if (typeof this.queryString != 'undefined' && this.queryString && this.queryString != '') { this.script.src += '&' + this.queryString; }
        }
        this.interval = setInterval (function ()
        {
            if (!self.prevObj || self.prevObj.loadSuccess || self.prevObj.timedOut)
            {
                clearInterval (self.interval);
                self.timeout = setTimeout (function ()
                {
                    self.timedOut = true;
                    if (!$isrc.IS_IE) { $isrc.domHook.removeChild (self.script); }
                    var callback = self.userCallback;
                    $isrc.clearObj (self);
                    self.userCallback.call ('', { error : 'Service not available' }, self.index);
                }, $isrc.POLL_TIMEOUT);
                $isrc.domHook.appendChild (self.script);
            }
        }, $isrc.POLL_INTERVAL);
    }
}

function tii_globalRecirc (rootId, toutClass, feedSrc, rulesSrc, useJSONP)
{
    var self = this;
    this.docRoot = null;
    this.touts = null;
    this.feedOrder = null;
    this.ajax = new ajaxObj ();
    this.ajax.setMimeType ('text/plain');
    if (typeof useJSONP != 'undefined' && useJSONP)	{ this.useJSONP = true; }
    else { this.useJSONP = false; }
    this.getFeeds = function ()
    {
        var nextFunction = function (data) { self.main (self.useJSONP ? data.content : data, rulesSrc); };
        if (this.useJSONP) { new $isr ().getData (feedSrc, '', nextFunction, 'recircData'); }
        else { this.ajax.doGet (feedSrc, nextFunction); }
    }
    this.main = function (data, rulesSrc)
    {
        var parseBuffer = document.createElement ('div');
        parseBuffer.innerHTML = data;
        var root = parseBuffer.getElementsByTagName ('div').item (0);
        this.docRoot = document.getElementById (rootId);
        if (root && this.docRoot)
        {
            var toutPattern = new RegExp (toutClass, 'i');
            this.touts = new Array ();
            var rootChildren = root.childNodes;
            var rootChildrenLength = rootChildren.length;
            var toutIndex = 0;
            for (var i = 0; i < rootChildrenLength; i++)
            {
                var rootChild = rootChildren.item (i);
                if (rootChild.nodeName == 'DIV' && toutPattern.test (rootChild.className))
                {
                    this.touts [toutIndex] = rootChild;
                    toutIndex++;
                }
            }
        }
        var nextFunction = function (rulesJSON) { self.setFeedOrder (rulesJSON); };
        if (this.useJSONP) { new $isr ().getData (rulesSrc, '', nextFunction, 'recircRules'); }
        else { this.ajax.doGet (rulesSrc, nextFunction); }
    }
    this.setFeedOrder = function (rulesJSON)
    {
        var feedRules = this.useJSONP ? rulesJSON : eval ('(' + rulesJSON + ')');
        var feedsNeeded = feedRules.feedsNeeded;
        var fixedIndices = feedRules.fixedIndices;
        var fixedIndicesLength = fixedIndices.length;
        var randomIndices = feedRules.randomIndices;
        var randomIndicesLength = randomIndices.length;
        if (fixedIndicesLength + randomIndicesLength != feedsNeeded)
        {
            alert ('The total number of fixed feeds and random feeds needed does not equal the total number of feeds needed.');
            return;
        }
        var feedInfo = feedRules.feedInfo;
        var feedInfoLength = feedInfo.length;
        var feedOrder = new Array ();
        var randomFeeds = new Array ();
        var randomIndex = 0;
        for (var i = 0; i < feedInfoLength; i++)
        {
            var feed = feedInfo [i];
            if (feed.fixed)
            {
                feedOrder [feed.index] = i;
            }
            else
            {
                var relativeWeight = (typeof feed.relativeWeight == 'undefined' || feed.relativeWeight == null) ? 1 : feed.relativeWeight;
                randomFeeds [randomIndex] = [i, relativeWeight * Math.random ()];
                randomIndex++;
            }
        }
        randomFeeds.sort (function (a, b) { return b [1] - a [1]; });
        for (var j = 0; j < randomIndicesLength; j++)
        {
            feedOrder [randomIndices [j]] = randomFeeds [j] [0];
        }
        this.feedOrder = feedOrder;
        this.attachFeeds ();
    }
    this.attachFeeds = function ()
    {
        if (this.feedOrder)
        {
            var feedOrderLength = this.feedOrder.length;
            for (var j = 0; j < feedOrderLength; j++)
            {
                this.docRoot.appendChild (this.touts [this.feedOrder [j]]);
            }
        }
    }
}




function tii_callFunctionOnWindowLoad (functionToCall)
{
  if (typeof window.addEventListener != 'undefined')
  {
    window.addEventListener ('load', functionToCall, false);
  }
  else if (typeof document.addEventListener != 'undefined')
  {
    document.addEventListener ('load', functionToCall, false);
  }
  else if (typeof window.attachEvent != 'undefined')
  {
    window.attachEvent ('onload', functionToCall);
  }
  else
  {
    var oldFunctionToCall = window.onload;
    if (typeof window.onload != 'function')
    {
      window.onload = functionToCall;
    }
    else
    {
      window.onload = function ()
      {
        oldFunctionToCall ();
        functionToCall ();
      };
    }
  }
}


function tii_callFunctionOnElementLoad (targetId, functionToCall)
{
    var myArguments = arguments;
    tii_callFunctionOnWindowLoad (function ()
        {
            window.loaded = true;
        });
    var targetElement = document.getElementById (targetId);
    if (targetElement == null && !window.loaded)
    {
        var pollingInterval = setInterval (function ()
            {
                if (window.loaded)
                {
                    clearInterval (pollingInterval);
                }
                targetElement = document.getElementById (targetId);
                if (targetElement != null)
                {
                    clearInterval (pollingInterval);
                    var argumentsTemp = new Array ();
                    var argumentsTempLength = myArguments.length - 2;
                    for (var i = 0; i < argumentsTempLength; i++)
                    {
                        argumentsTemp [i] = myArguments [i + 2];
                    }		
                    functionToCall.apply (this, argumentsTemp);
                }
            }, 10);
    }
}


function tii_addEventHandlerOnElementLoad (targetId, eventType, functionToCall, bubbleEventUpDOMTree)
{
    tii_callFunctionOnWindowLoad (function ()
        {
            window.loaded = true;
        });
    var targetElement = document.getElementById (targetId);
    if (targetElement == null && !window.loaded)
    {
        var pollingInterval = setInterval (function ()
            {
                if (window.loaded)
                {
                    clearInterval (pollingInterval);
                }
                targetElement = document.getElementById (targetId);
                if (targetElement != null)
                {
                    clearInterval (pollingInterval);
                    tii_addEventHandler (targetElement, eventType, functionToCall, bubbleEventUpDOMTree);
                }
            }, 10);
    }
}


function tii_addEventHandler (targetElement, eventType, functionToCall, bubbleEventUpDOMTree)
{
  if (!targetElement)
  {
      window.status = 'Warning: Tried to attach event to null object';
      return false;
  }
  if (typeof targetElement.addEventListener != 'undefined')
  {
    targetElement.addEventListener (eventType, functionToCall, bubbleEventUpDOMTree);
  }
  else if (typeof targetElement.attachEvent != 'undefined')
  {
    targetElement.attachEvent ('on' + eventType, functionToCall);
  }
  else
  {
    eventType = 'on' + eventType;
    if (typeof targetElement [eventType] == 'function')
    {
      var oldListener = targetElement [eventType];
      targetElement [eventType] = function ()
      {
        oldListener ();
        return functionToCall ();
      }
    }
    else
    {
      targetElement [eventType] = functionToCall;
    }
  }

  return true;
}



function tii_removeEventHandler (targetElement, eventType, functionToRemove, bubbleEventUpDOMTree)
{
  if (typeof targetElement.removeEventListener != "undefined")
  {
    targetElement.removeEventListener (eventType, functionToRemove, bubbleEventUpDOMTree);
  }
  else if (typeof targetElement.detachEvent != "undefined")
  {
    targetElement.detachEvent ("on" + eventType, functionToRemove);
  }
  else
  {
    targetElement ["on" + eventType] = null;
  }
  
  return true;
}

/* Begin KT */

var tii_pnav_branch;
var tii_pnav_previousLink;
var tii_pnav_previousLinkTracker;
var tii_pnav_dontResetCurrentLink = false;

function tii_pnav_initializeDropdownMenu (primaryNavId, hideOrShowMenuFunction, changeStateFunction)
{
  var isopera = typeof window.opera != 'undefined';
  var isie = typeof document.all != 'undefined'
    && !isopera && navigator.vendor != 'KDE';
  var issafari = navigator.vendor == 'Apple Computer, Inc.';

  if (typeof document.getElementById == 'undefined'
      || (issafari && typeof window.XMLHttpRequest == 'undefined')
      || (isie && typeof document.uniqueID == 'undefined'))
  {
    return;
  }
  
  var tree = document.getElementById (primaryNavId);
  if (tree)
  {
    tii_pnav_branch = tree;
    var items = tree.getElementsByTagName('li');
    for (var i = 0; i < items.length; i++)
    {
      tii_pnav_setDropdownTrigger (tree, items[i], primaryNavId, isie, hideOrShowMenuFunction, changeStateFunction);
    }

    if (!isopera)
    {
      tii_dom_removeWhitespaceTextNodes (tree);

      var keyevent = issafari || isie ? 'keydown' : 'keypress';
      tii_addEventHandler(document, keyevent, function(e)
      {
        var target = typeof e.target != 'undefined'
            ? e.target : e.srcElement;
        if (tree.contains(target) && target.getAttribute('href'))
        {
          /*
             keycode 27 = escape key
                     37 = left arrow key
                     38 = up arrow key
                     39 = right arrow key
                     40 = down arrow key
          */
          if (/^(27|37|38|39|40)$/.test(e.keyCode.toString()))
          {
            tii_pnav_setArrowKeyNavigation(tree, target, e.keyCode, isie, hideOrShowMenuFunction, changeStateFunction);

            if (typeof e.preventDefault != 'undefined')
            {
              e.preventDefault();
            }
            return false;
          }
        }
        return true;

      }, false);
    }
    
    if (!isie)
    {
      tree.contains = function (node)
      {
        if (node == null) { return false; }
        if (node == this) { return true; }
        else { return this.contains (node.parentNode); }
      };
    }
  }
}



function tii_pnav_setDropdownTrigger (tree, li, navid, isie, hideOrShowMenuFunction, changeStateFunction)
{
  var opentime, closetime;
  var a = li.getElementsByTagName('a')[0];
  var menu = li.getElementsByTagName('ul').length > 0
      ? li.getElementsByTagName('ul')[0] : li.parentNode.parentNode.id == navid
      ? li : null;
  var issub = li.parentNode.id == navid;
  
  tii_addEventHandler(a, 'focus', function(e)
  {
    clearTimeout(closetime);
    tii_pnav_resetPreviousLink (a, isie, hideOrShowMenuFunction, changeStateFunction);
    if (menu)
    {
      changeStateFunction.call (this, a.parentNode, false, 2);
      tii_pnav_makeMenuVisible (menu, issub, li, a, isie, hideOrShowMenuFunction, changeStateFunction);
    }
    else
    {
        var liGrandPar = li.parentNode.parentNode;
        changeStateFunction.call (this, a.parentNode, true, 2);
        changeStateFunction.call (this, liGrandPar, false, 1);
        var currentLi = a.parentNode;
        var currentPrimaryLi = tii_pnav_getPrimaryLi (a);
        var currentUl = currentLi.parentNode;
        var currentPrimaryA = currentPrimaryLi.firstChild;
        if (currentLi != currentPrimaryLi && currentUl.className == '')
        {
            tii_pnav_makeMenuVisible (currentUl, issub, currentPrimaryLi, currentPrimaryA, isie, hideOrShowMenuFunction, changeStateFunction);
            changeStateFunction.call (this, currentPrimaryLi, false, 1);
        }
    }
  }, false);

  tii_addEventHandler(a, 'blur', function(e)
  {
      if (a.className.indexOf ('lastpnitem') > -1 && tii_pnav_previousLinkTracker != null &&
          tii_pnav_previousLinkTracker.className.indexOf ('lastpnitem') < 0)
      {
          if (!tii_pnav_dontResetCurrentLink)
          {
              tii_pnav_resetCurrentLink (a, hideOrShowMenuFunction, changeStateFunction);
          }
      }
  }, false);
  
  tii_addEventHandler(li, 'mouseover', function(e)
  {
    if (tii_pnav_isUnwantedTextEvent ()) { return; }
    clearTimeout(closetime);
    if (tii_pnav_branch == li) { tii_pnav_branch = null; }

    var target = typeof e.target != 'undefined' ? e.target : window.event.srcElement;
    while (target.nodeName.toUpperCase() != 'LI')
    {
      target = target.parentNode;
    }
    if (target != li) { return; }

    tii_pnav_resetPreviousLink (a, isie, hideOrShowMenuFunction, changeStateFunction);

    if (menu)
    {
      changeStateFunction.call (this, a.parentNode, false, 2);
      opentime = window.setTimeout(function()
      {
        tii_pnav_makeMenuVisible (menu, issub, li, a, isie, hideOrShowMenuFunction, changeStateFunction);
      }, 1);
    }
    else
    {
        changeStateFunction.call (this, li.parentNode.parentNode, false, 1);
    }
  }, false);

  tii_addEventHandler(li, 'mouseout', function(e)
  {
    if (tii_pnav_isUnwantedTextEvent ()) { return; }

    var related = typeof e.relatedTarget != 'undefined' ? e.relatedTarget : window.event.toElement;
    if (!li.contains(related))
    {
      clearTimeout (opentime);
      tii_pnav_branch = li;
      if (menu)
      {
        changeStateFunction.call (this, a.parentNode, false, 0);
        closetime = window.setTimeout (function ()
        {
          tii_pnav_resetCurrentLink (a, hideOrShowMenuFunction, changeStateFunction);
        }, 1);
      }
      else
      {
        changeStateFunction.call (this, a.parentNode, true, 0);
      }	  
    }
  }, false);

  if (!isie)
  {
    li.contains = function(node)
    {
      if (node == null) { return false; }
      if (node == this) { return true; }
      else { return this.contains(node.parentNode); }
    };
  }
}

function tii_pnav_setArrowKeyNavigation (tree, link, keycode, isie, hideOrShowMenuFunction, changeStateFunction)
{
  var currentPrimaryLi = tii_pnav_getPrimaryLi (link);
  var openClosedPrimary = false;
 
  if (link.parentNode != currentPrimaryLi && link.parentNode.parentNode.className == '')
  {
      link = currentPrimaryLi.firstChild;
      openClosedPrimary = true;
  }

  var li = link.parentNode;
  var menu = li.getElementsByTagName('ul').length > 0
      ? li.getElementsByTagName('ul')[0] : null;
  var parent = li.parentNode;
  var isTopLevel = parent.parentNode == tree;

  if (menu)
  {
      changeStateFunction.call (this, li, false, 0);
  }
  else
  {
      changeStateFunction.call (this, li, true, 0);
  }

  if (link.className.indexOf ('lastpnitem') > -1)
  {
      tii_pnav_dontResetCurrentLink = true;
  }
  else
  {
      tii_pnav_dontResetCurrentLink = false;
  }
  
  switch (keycode)
  {
    case 27:
      tii_pnav_dontResetCurrentLink = false;
      tii_pnav_resetCurrentLink (link, hideOrShowMenuFunction, changeStateFunction);
      break;
      
    case 37:
      if (menu || isTopLevel)
      {
          tii_pnav_moveToPrevious (li);
      }
      else
      {
          tii_pnav_moveToPrevious (parent.parentNode);
      }
      break;

    case 38:
      if (menu || isTopLevel)
      {
        changeStateFunction.call (this, link.parentNode, false, 2);
      }
      else
      {
          if (li == li.parentNode.firstChild)
          {
            parent.parentNode.firstChild.focus ();
          }
          else
          {
            tii_pnav_moveToPrevious (li);
          }
      }
      break;

    case 39:
      if (menu || isTopLevel)
      {
          tii_pnav_moveToNext (li);
      }
      else
      {
          tii_pnav_moveToNext (parent.parentNode);
      }
      break;
      
    case 40:
      tii_pnav_dontResetCurrentLink = false;
      if (menu && openClosedPrimary)
      {
        openClosedPrimary = false;
        menu.parentNode.firstChild.focus ();
      }
      if (menu || isTopLevel)
      {
        menu.firstChild.firstChild.focus ();
      }
      else
      {
        tii_pnav_moveToNext (li);
      }
      break;
  }  
}

function tii_pnav_makeMenuVisible (menu, issub, li, a, isie, hideOrShowMenuFunction, changeStateFunction)
{
  if (typeof li.offsetLeft == 'undefined')
  {
      return;
  }

  changeStateFunction.call (this, a.parentNode, false, 2);

  hideOrShowMenuFunction (menu, false, li);
  menu.style.top = a.offsetHeight + 'px';
}

function tii_pnav_resetPreviousLink (a, isie, hideOrShowMenuFunction, changeStateFunction)
{
    if (tii_pnav_previousLink)
    {
        var prevLi = tii_pnav_previousLink.parentNode;
        var currentLi = a.parentNode;
        var prevPrimaryLi = tii_pnav_getPrimaryLi (tii_pnav_previousLink);
        var currentPrimaryLi = tii_pnav_getPrimaryLi (a);
        
        if (prevLi != prevPrimaryLi)
        {
            changeStateFunction.call (this, prevLi, true, 0);
        }
        
        var hideMenu = prevPrimaryLi != currentPrimaryLi || a == null;
        
        if (hideMenu || (prevLi != prevPrimaryLi && currentLi == currentPrimaryLi))
        {
            changeStateFunction.call (this, prevPrimaryLi, false, 0);

            if (hideMenu)
            {
                var ul = prevPrimaryLi.getElementsByTagName('ul').item (0);
                if (ul)
                {
                    hideOrShowMenuFunction (ul, true, null);
                }
            }
        }		
    }
    tii_pnav_previousLinkTracker = tii_pnav_previousLink;
    tii_pnav_previousLink = a;
}

function tii_pnav_resetCurrentLink (a, hideOrShowMenuFunction, changeStateFunction)
{
    var currentLi = a.parentNode;
    var currentPrimaryLi = tii_pnav_getPrimaryLi (a);
    changeStateFunction.call (this, currentPrimaryLi, false, 0);
    if (currentLi != currentPrimaryLi)
    {
        changeStateFunction.call (this, currentLi, true, 0);
    }
    
    var ul = currentPrimaryLi.getElementsByTagName('ul').item (0);
    if (ul)
    {
        closetime = window.setTimeout(function()
            {
                hideOrShowMenuFunction (ul, true, null);
            }, 1);
    }	
}

function tii_pnav_getPrimaryLi (a)
{
    if (a.parentNode.parentNode.parentNode.nodeName.toUpperCase ()== 'DIV')
    {
        return a.parentNode;
    }
    else
    {
        return a.parentNode.parentNode.parentNode;
    }
}

function tii_pnav_moveToPrevious (li)
{
      var previous = li.previousSibling;
      if (!previous)
      {
        previous = li.parentNode.childNodes
            [li.parentNode.childNodes.length - 1];
      }
      previous.firstChild.focus ();
}

function tii_pnav_moveToNext (li)
{
    var next = li.nextSibling;
    if (!next)
    {
      next = li.parentNode.childNodes.item (0);
    }
    next.firstChild.focus ();
};

function tii_pnav_isUnwantedTextEvent ()
{
  return (navigator.vendor == 'Apple Computer, Inc.'
      && (event.target == event.relatedTarget.parentNode
      || (event.eventPhase == 3
      && event.target.parentNode == event.relatedTarget)));
}
function tii_dom_createElement (nodeName, attributes)
{
    var isopera = typeof window.opera != 'undefined';
    var isie = typeof document.all != 'undefined'
        && !isopera && navigator.vendor != 'KDE';
        
    var newElement;
    try
    {
        newElement = document.createElement (nodeName);
    }
    catch (error)
    {
        return null;
    }
    
    var attributesLength = attributes.length;
    for (var i = 0; i < attributesLength; i++)
    {
        var attribute = attributes [i] [0];
        var value = attributes [i] [1];
        newElement.setAttribute (attribute, value);
        switch (attribute)
        {
            case 'id':
                newElement.id = value;
                break;
            case 'class':
                if (isie)
                {
                    newElement.setAttribute ('className', value);
                }
                newElement.className = value;
                break;
            case 'style':
                newElement.style.cssText = newElement.style.cssText + ' ' + value;
                break;
            case 'for':
                if (isie)
                {
                    newElement.setAttribute ('htmlFor', value);
                }
                newElement.htmlFor = value;
        }
    }
    
    return newElement;
}






/* End KT */






function tii_dom_createElement (nodeName, attributes)
{
    var isopera = typeof window.opera != 'undefined';
    var isie = typeof document.all != 'undefined'
        && !isopera && navigator.vendor != 'KDE';
        
    var newElement;
    try
    {
        newElement = document.createElement (nodeName);
    }
    catch (error)
    {
        return null;
    }
    
    var attributesLength = attributes.length;
    for (var i = 0; i < attributesLength; i++)
    {
        var attribute = attributes [i] [0];
        var value = attributes [i] [1];
        newElement.setAttribute (attribute, value);
        switch (attribute)
        {
            case 'id':
                newElement.id = value;
                break;
            case 'class':
                if (isie)
                {
                    newElement.setAttribute ('className', value);
                }
                newElement.className = value;
                break;
            case 'style':
                newElement.style.cssText = newElement.style.cssText + ' ' + value;
                break;
            case 'for':
                if (isie)
                {
                    newElement.setAttribute ('htmlFor', value);
                }
                newElement.htmlFor = value;
        }
    }
    
    return newElement;
}


function tii_dom_removeWhitespaceTextNodes (node)
{
  for (var x = 0; x < node.childNodes.length; x++)
  {
    var child = node.childNodes [x];
    if (child.nodeType == 3 && !/\S/.test (child.nodeValue))
    {
      node.removeChild (node.childNodes [x]);
      x--;
    }
    if (child.nodeType == 1)
    {
      tii_dom_removeWhitespaceTextNodes (child);
    }
  }
}

tii_callFunctionOnElementLoad('topnav2010', function ()
{
    tii_pnav_initializeDropdownMenu.apply (this, new Array ('topnav2010', instyle_pnav_hideMenuFunction, instyle_pnav_changeStatusFunction));
});




function instyle_pnav_hideMenuFunction (menu, hideElseShow, menuParent)
{
    if (hideElseShow)
    {
        menu.style.left = '-999px';
    }
    else
    {
        menu.style.left = (menuParent.offsetLeft - 1) + 'px';
    }
}

function instyle_pnav_changeStatusFunction (element, isADropdownItem, state)
{
    if (isADropdownItem)
    {
        switch (state)
        {
            case 0:
                element.className = '';
                break;
            case 2:
                element.className = 'active';
                break;
        }
    }
    else
    {
        var anchor = element.getElementsByTagName ('a').item (0);
        var em = element.getElementsByTagName ('em').item (0);
        switch (state)
        {
            case 0:
                element.style.visibility = 'visible';
                em.style.visibility = 'visible';
                break;
            case 1:
                element.style.visibility = 'visible';
                em.style.visibility = 'hidden';
                break;
            case 2:
                element.style.visibility = 'visible';
                em.style.visibility = 'hidden';
                break;
        }
    }
}

function initMakeThisHomepage(){
    var makeThisHomepage = document.getElementById("makeThisHomepage");
    if(document.all){
        makeThisHomepage.onclick = function(){
            this.style.behavior='url(#default#homepage)';
            //V6 Migration - hardcoding - sdalvi
            this.setHomePage('http://www.instyle.com');
            return false;
        }
    }else if(document.getElementById){
        makeThisHomepage.onclick = function(){
            alert('Drag the link onto your Home button to make this your Home Page.');
            return false;
        }
    }else{
        makeThisHomepage.onclick = function(){
            alert('Go to <i>Preferences</i> in the <i>Edit</i> Menu.<br />Choose <i>Navigator</i> from the list on the left.<br />Click on the <i>"Use Current Page"</i> button.');
            return false;
        }
    }
}
tii_callFunctionOnElementLoad('makeThisHomepage', initMakeThisHomepage);


function tii_stopDefaultAction (event)
{
    event.returnValue = false;
    if (typeof event.preventDefault != 'undefined')
    {
        event.preventDefault ();
    }
}





var tcdacmd="dt";

var macTest=(navigator.userAgent.toLowerCase().indexOf("macintosh") >= 0);

function IMArticle() {
    if (isInAolClient()) {
        document.location.href = "aol://9293::Here's something that may interest you from InStyle.com: <a href='" + document.location.href + "'>" + document.location.href + "</a>";
    } else {
        document.location.href = "aim:goim?message=Here's+something+that+may+interest+you+from+InStyle.com:+" + document.location.href;
    }
    return false;
}

function openWindow (url) {
    var argv = openWindow.arguments;
    var argc = argv.length;
    
    if (argc == 1) {
        var handle = window.open(url);
    } else if (argc == 2) {
        var handle = window.open(url,argv[1]);
    } else {
        var handle = window.open(url,argv[1],argv[2]);
    }
    
    handle.focus();
}

function showHeaderLogo(channelID) {

    if (channelID != 0) {
        document.getElementById('headerHomeLogo').src = "http://img2.timeinc.net/instyle/i/logo_channel.gif"
    }
    
    if (document.getElementById('headerChannelLogo' + channelID)) {
        document.getElementById('headerChannelLogo' + channelID).style.display = "";
    }

    return;
}


function showCenteredPopup(name, url, features, width, height) {
    
    // example usage:
    // showCenteredPopup("foo", "http://www.cnn.com", null, 640, 480);
    
    var top = (screen.height / 2) - height / 2;
    var left = (screen.width / 2) - width / 2;

    if (features == null || features == '') {
        features = "scrollbars=yes,toolbar=no,menubar=no,status=no,location=no";
    }

    window.open(url, name, features + ",top=" + top + ",left=" + left + ",width=" + width + ",height=" + height);

}

// this name is used as a target by links in popup windows
// that need to open in the main window
function nameThisWindow(winName) {
    if (window.opener) {
        window.opener.name=winName;
    } else {
        window.name=winName;
    }
}	

function showPopupBackButton() {
    if (history.length > 0) {
        document.write('<a href="javascript:history.back()"><img src="http://img2.timeinc.net/instyle/i/arrow_left.gif" alt="Back" border="0" style="vertical-align:middle" /> BACK</a>'); 
    }
}




var ie4Test=document.all&&(navigator.userAgent.toLowerCase().indexOf("msie") >= 0);
var dom=document.getElementById&&(navigator.userAgent.indexOf("Opera")==-1);
var macTest=(navigator.userAgent.toLowerCase().indexOf("macintosh") >= 0);
var firefoxTest=(navigator.userAgent.toLowerCase().indexOf("firefox") >= 0);
var ie      = 1;
var mac     = 2;
var firefox = 3; 
var other   = 4;

function isPrintWindow(){
   bV = parseInt(navigator.appVersion)
   if (bV >= 4) window.print()
}
 
function isEmailToFriend(ptitle,purl) {
    if(pageTitle == "") {
        var pageTitle = escape(self.document.title);
    } else {
        var pageTitle = escape(ptitle);
    }
    if(pageURL == "") {
        var pageURL   = escape(self.document.URL);
    } else {
        var pageURL   = escape(purl);
    }
    //V6 Migration - email server change - sdalvi 
    var formURL   = "http://cgi.instyle.com/cgi-bin/mail/mailurl2friend.cgi?url=" + pageURL + "&group=instyle&title=" + pageTitle + "&path=/instyle/mail/templates";
    window.open(formURL, "emailpop","height=500,width=435,resizable,scrollbars");
    return false;
}
 
function reloadOmniture(toPage) {
    var omnitureFrame = document.getElementById("pageCounter");
    if (omnitureFrame) {
        var frameSrc = omnitureFrame.src;
        var commaIndex = frameSrc.lastIndexOf(",");
        var underScoreIndex = frameSrc.lastIndexOf("_");
        if (commaIndex > -1 && underScoreIndex > -1) { 
            var currentNumber = frameSrc.substring(underScoreIndex + 1, commaIndex)
            var begURL = frameSrc.substring(0,underScoreIndex + 1);
            var endURL = frameSrc.substring(commaIndex, frameSrc.length);
            frameSrc = begURL.concat(toPage, endURL);
            omnitureFrame.src = frameSrc;
        }
    }
}

//track custom link for omniture. the following are the type of links
//-exit links: e
//-download: d
//-custom links: o 
function trackLink(lnkType, lnkObj, lnkName, account) {
    if (lnkType) {
        s_linkType = lnkType;
    }
    
    if (lnkName) {
        s_linkName = lnkName;
    }
    
    if (lnkObj) {
        s_lnk = s_co(lnkObj);
    }
    
    if (account) {
        if (typeof s_gs != "undefined") {
            s_gs(account);
        }
    }
    
    return;
    
}

function getObject(obj) {
  var theObj;
  if(document.all) {
    if(typeof obj=="string") {
      return document.all(obj);
    } else {
      return obj.style;
    }
  }
  if(document.getElementById) {
    if(typeof obj=="string") {
      return document.getElementById(obj);
    } else {
      return obj.style;
    }
  }
  return null;
}

function toCount(entrance,exit,text,characters) {
  var entranceObj=getObject(entrance);
  var exitObj=getObject(exit);
  var length=characters - entranceObj.value.length;
  if(length <= 0) {
    length=0;
    text='<span class="disable"> '+text+' </span>';
    entranceObj.value=entranceObj.value.substr(0,characters);
  }
  exitObj.innerHTML = text.replace("{CHAR}",length);
}
//-->


siteId = "";
cmSiteId = "";

qs =document.location.href;

if(qs.indexOf("instyleweddings") >= 0){
    siteId = "3475.inw";
    cmSiteId = "cm.inw";
} else if( qs.indexOf("instyleyourlook") >= 0) {
    siteId = "3475.iyl";
    cmSiteId = "cm.iyl";
} else {
    siteId = "3475.ins";
    cmSiteId = "cm.ins";
}

        



    var adConfig = new TiiAdConfig(siteId);
    adConfig.setCmSitename(cmSiteId);
    
    if (location.search.indexOf("xid=cnn") >= 0) {
        adConfig.setPopups(false);
    }

    if (location.search.indexOf("google=yes") >= 0) {
        adConfig.setPopups(false);
    }

    if (location.search.indexOf("yahoo=yes") >= 0) {
        adConfig.setPopups(false);
    }
    // partner=yes is for CM popup control
    if (location.search.indexOf("partner=yes") >= 0) {
        adConfig.setPopups(false);
    }
// fixes IE background flickering
try {
    document.execCommand('BackgroundImageCache', false, true);
} catch(e) {}



function adSetTarget() {} 
function htmlAdWH() {}
function adSetType() {} 



 
adConfig.setRevSciTracking(true);


adConfig.setTacodaTracking(false);

/* Search button will not work unless 3 or more characters are entered in search query -- endeca site search*/
tii_callFunctionOnWindowLoad (function() {
      var searchDivs = new Array();
      searchDivs.push(document.getElementById("sitesearch"));
      searchDivs.push(document.getElementById("searchagain"));
      for (var i=0; i < searchDivs.length; i++) {
            if (searchDivs[i]) {
                  try {
                        var form = searchDivs[i].getElementsByTagName("form")[0];
                        form.onsubmit = function(){
                              var inputs = form.getElementsByTagName("input");
                              for (var j=0; inputs[j]; j++) {
                                    if (inputs[j].getAttribute("type") == "text") {
                                          //if (inputs[j].value.length < 3) {
                                                //return false;
                                          //}
                                    }
                              }
                              return true;
                        }
                  } catch(e) {}
            }
      }
});

// browser detection js
var tii_detect = navigator.userAgent.toLowerCase();
var tii_OS,tii_browser,tii_version,tii_browserString;
var tii_variety = "";

var tii_macVersionArray = new Array();
var tii_windowsVersionArray = new Array();
var tii_usersArray = new Array();


var tii_upgradeLocation = "http://www.timeinc.net/web/upgrade/";

function tii_detectBrowserVersionOS(){

    if (tii_isClient('konqueror')) {
        tii_browser = "Konqueror";
        tii_OS = "Linux";
    } else if (tii_isClient('safari')) {
        tii_browser = "Safari";
        tii_OS = "Mac";
    } else if (tii_isClient('omniweb')) {
        tii_browser = "OmniWeb";
    } else if (tii_isClient('opera')) {
        tii_browser = "Opera";
    } else if (tii_isClient('webtv')) {
        tii_browser = "WebTV";
    } else if (tii_isClient('icab')) {
        tii_browser = "iCab";
    } else if (tii_isClient('msie')) {
        if (tii_isClient('aol')) {
            
            tii_isClient('msie');
            tii_variety = "AOL";
            tii_browser = "Internet Explorer";
        } else {
            
            tii_isClient('msie');
            tii_browser = "Internet Explorer";
        }
    } else if (!tii_isClient('compatible')) {
        if (tii_isClient('firefox')) {
            tii_browser = "Firefox";
        } else if ((tii_isClient('gecko'))&&(tii_detect.indexOf("netscape")==-1)) {
            
            tii_isClient('mozilla')
            tii_browser = "Mozilla";
        } else if (tii_isClient('aol')) {
            tii_variety = "AOL";
            tii_browser = "Netscape Navigator";
        } else {
            tii_browser = "Netscape Navigator";
        }
    } else {
        tii_browser = "An unknown tii_browser";
    }
    

    if (!tii_version){
        tii_version = tii_detect.substring(tii_place + tii_browserString.length,tii_detect.length)
        if (tii_browser=="Safari"){
            
            if (tii_version<100){
                tii_version=1.0;
            }else if (tii_version<125){
                tii_version=1.1;
            }else if (tii_version<312.1){
                tii_version=1.2;
            }else if (tii_version<412){
                tii_version=1.3;
            }else{
                tii_version=2;
            }
        } else if (tii_browser=="Netscape Navigator"){
            
            if(tii_isClient('netscape')){
                tii_detectSubstring = tii_detect.substring(tii_place + tii_browserString.length,tii_detect.length);
                if(tii_detectSubstring.indexOf("/")!=-1){
                    tii_version = tii_detect.substring(tii_detect.lastIndexOf("/")+1,tii_detect.length);
                } else {
                    tii_version = tii_detect.substring(tii_place + tii_browserString.length,tii_place + tii_browserString.length + 3);
                }
            }else if(tii_isClient('aol')){
                tii_detectSubstring = tii_detect.substring(tii_place + tii_browserString.length,tii_detect.length);
                if(tii_detectSubstring.indexOf("/")!=-1){
                    tii_version = tii_detect.substring(tii_place + tii_browserString.length + 1,tii_place + tii_browserString.length + 4);
                } else {
                    tii_version = tii_detect.substring(tii_place + tii_browserString.length,tii_place + tii_browserString.length + 3);
                }
            }else{
                tii_version = 4.7;
            }
        } else if ((tii_browser=="Internet Explorer")||(tii_browser=="Firefox")){
            
            tii_version = tii_detect.substring(tii_place + tii_browserString.length,tii_place + tii_browserString.length + 3);
        } else if (tii_browser=="Mozilla"){
            
            tii_version = tii_detect.substring(tii_detect.indexOf("rv:") + 3,tii_detect.indexOf("rv:") + 6);
        }

        tii_version = parseFloat(tii_version)
    }


    if (!tii_OS)
    {
        if (tii_isClient('linux')) tii_OS = "Linux";
        else if (tii_isClient('x11')) tii_OS = "Unix";
        else if (tii_isClient('mac')) tii_OS = "Mac"
        else if (tii_isClient('win')) tii_OS = "Windows"
        else tii_OS = "an unknown operating system";
    }
}



function tii_isClient(string)
{
    tii_place = tii_detect.indexOf(string) + 1;
    tii_browserString = string;
    return tii_place;
}


function tii_checkVersion() {
    tii_detectBrowserVersionOS();
    if(tii_OS=="Mac"){
        tii_usersArray = tii_macVersionArray;
    }else if(tii_OS=="Windows"){
        tii_usersArray = tii_windowsVersionArray;
    }
    if(((tii_usersArray[tii_browser]!=0)&&(tii_version<tii_usersArray[tii_browser]))||(tii_usersArray[tii_browser]==-1)){
        var tii_warningCookieValue = tii_warningCheckCookie();
        if (tii_warningCookieValue != "false") {
            window.location = tii_upgradeLocation + "?tii_location=" + window.location.toString();
        }
    }
}


function tii_warningCheckCookie() {
    var tii_cookies=document.cookie;
    var tii_prefix="showWarning=";
    var tii_start=tii_cookies.indexOf(tii_prefix);
    if (tii_start==-1){
        return null;
    }
    var tii_end=tii_cookies.indexOf(";",tii_start);
    if(tii_end==-1){
        tii_end=tii_cookies.length;
    }
    return unescape(tii_cookies.substring(tii_start+tii_prefix.length,tii_end));
}


function tii_warningSetCookie() {
    var tii_warningCookie = "showWarning=false";
    tii_warningCookie = tii_warningCookie + "; path=/;";
    document.cookie = tii_warningCookie;

    tii_windowLocation = window.location.search.toString();
    tii_windowLocation = tii_windowLocation.substring((tii_windowLocation.indexOf("tii_location=")+13),tii_windowLocation.length);
    window.location = tii_windowLocation;
}


function tii_addMacBrowser(browser,version){
    tii_macVersionArray[browser] = version;
}


function tii_addWindowsBrowser(browser,version){
    tii_windowsVersionArray[browser] = version;
}


function tii_setUpgradeLocation(path){
    tii_upgradeLocation = path;
}


function tii_returnBrowserDisplayString(){
    var tii_yourBrowser;
    if(tii_variety!=""){
        tii_yourBrowser = tii_variety + " using " + tii_browser + " " + tii_version + " on " + tii_OS;
    } else {
        tii_yourBrowser = tii_browser + " " + tii_version + " on " + tii_OS;
    }
    return tii_yourBrowser;
}


tii_addMacBrowser("Internet Explorer",-1);
tii_addMacBrowser("Netscape Navigator",7.2);
tii_addMacBrowser("Safari",1.2);
tii_addMacBrowser("Firefox",0);

tii_addWindowsBrowser("Internet Explorer",6);
tii_addWindowsBrowser("Netscape Navigator",7.2);
tii_addWindowsBrowser("Firefox",0);

tii_setUpgradeLocation("/instyle/browserUpgrade/0,,,00.html");


tii_checkVersion();


// partners code

    /*	recirculation feed functions	*/
    //	global variable initialization
    var MasterArray = new Array();
/* 	global Partner Recirc function */
    var PartnerRecirc = function() {
        var arr = MasterArray;
        var nextFeed;
        var recircCallback = function(pos) {
            if (!document.getElementById) return;
            if (!document.getElementById(pos.id)) return;
            divID = pos.name.replace(/\./,'').replace(/ /,'');
            if (pos.id == 'bottommakeuprecirc' || pos.id == 'bottomhairrecirc' || pos.id == 'bottomfashionrecirc' || pos.id == 'bottomcelebrityrecirc' || pos.id == 'bottomdesignercentralrecirc' || pos.id == 'partiesrecirc' || pos.id == 'bottomrecirc' || pos.id == 'bottomshoppingrecirc' || pos.id == 'starfinderbottomrecirc') {
                var 	tout = '1';
                var 	tout1 = tout - 1;
                var 	divHTML = '<div class="tout0' + tout + ' tout" id="tout' + tout1 +'">';
                divHTML += ' <h6 class="' + pos.clas;
                divHTML += '" title="From '+ pos.name;
                divHTML += '"><a href="' + pos.site;
                divHTML += '">From ' + pos.name;
                divHTML += '</a></h6>';
                divHTML += '	<div class="recirclinks">\n';
                divHTML += '		<ul>\n';
                for (li = 0; li < pos.display; li++) {
                    if (pos.response[0][li].title != '') {
                        divHTML += '			<li><a href="'+pos.response[0][li].url+'" target="_blank">'+pos.response[0][li].title+'</a></li>\n';
                    }
                }
                divHTML += '		</ul>\n';
                divHTML += '	</div>\n';
            } else {
                var	divHTML = '<div class="listtout clear">';	
                divHTML += '	<h6 class="'+ pos.clas +'" title="From '+ pos.name + '"><a href="' + pos.site + '">From ' + pos.name + '</a></h6>';
                divHTML += '	<div class="tout clear">\n';
                divHTML += '	<div class="recirclinks">\n';
                divHTML += '		<ul>\n';
                for (li = 0; li < pos.display; li++) {
                    if (pos.response[0][li].title != '') {
                        divHTML += '			<li><a href="'+pos.response[0][li].url+'" target="_blank">'+pos.response[0][li].title+'</a></li>\n';
                    }
                }
                divHTML += '		</ul>\n';
                divHTML += '	</div>\n';
                divHTML += '</div>\n';
                divHTML += '</div>\n';
            }
            divHTML = document.getElementById(pos.id).innerHTML + divHTML + '\n';
            //alert (divHTML);
            var parent = document.getElementById(pos.id);
                parent.innerHTML = divHTML;
            if (parent.className.indexOf('active') < 0) {parent.className = parent.className + ' active';};
        };
        var checkScript = function(pos) {
            var recircInt = setInterval(function() {
                var name = pos.name.replace(/\./,'').replace(/ /,'');
                if (feed) {
                    pos.response = new Array(feed);
                    feed = null; detachScript(name); pos.callback(pos);
                    //if(nextFeed < lastFeed) { getStarted(); };
                    if(nextFeed > 0) { getStarted(); };
                    clearInterval(recircInt);
                }
            },500);
        };
        var detachScript = function(name) {
            elem = document.getElementById('recirc'+name);
            elem.parentNode.removeChild(elem);
        };
        var attachScript = function(pos) {
            var name = pos.name.replace(/\./,'').replace(/ /,'');
            var script = document.createElement('script');
                script.setAttribute('type','text/javascript');
                script.setAttribute('language','javascript');
                script.setAttribute('id','recirc'+name);
                script.setAttribute('src',pos.json);
            document.body.appendChild(script);
            checkScript(pos);
        };
        var getStarted = function() {
            nextFeed--;
            if (document.getElementById(arr[nextFeed].id)) {
                arr[nextFeed].callback = (arr[nextFeed].callback) ? arr[nextFeed].callback : recircCallback;
                arr[nextFeed].display = (arr[nextFeed].display) ? arr[nextFeed].display : 3;
                arr[nextFeed].cta = (arr[nextFeed].cta) ? arr[nextFeed].cta : 'More news at '+arr[nextFeed].name;
                attachScript(arr[nextFeed]);
            } else {
                if(nextFeed > 0) { getStarted(); };
            }
        };
        var init = function() {
            if (arr.length > 0) {
                nextFeed = arr.length;
                getStarted();
            }
        };
        init();
    }

//	initialize Partner Recirc feeds on photo channel page
    var initializeGlobalRecirc = function() {
        if (!document.getElementById) return;
        if (!document.getElementsByTagName) return;
        var recircArray = {
            'recircs' : [ 
                {

                    'id'		: 'celebrityrecirc',
                    'type' 		: 'random',
                    'display'	: 2,
                    'feed' 		: [ 
                        {
                            'name'  	: 'Fabsugar',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/fabsugar/feed.js',
                            'site' 		: 'http://www.fabsugar.com/',
                            'clas' 	: 'fabsugar'
                        },{
                            'name'  	: 'CNN',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/cnn/feed.js',
                            'site' 		: 'http://www.cnn.com',
                            'clas' 	: 'cnn'
                        },{
                            'name'  	: 'Daily Beast',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/dailybeast/feed.js',
                            'site' 		: 'http://www.thedailybeast.com/newsmaker/sexybeast/',
                            'clas' 	: 'sexybeast'
                        },{
                            'name'  	: 'Huffington Post',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/huffingtonpost/feed.js',
                            'site' 		: 'http://www.huffingtonpost.com/style/',
                            'clas' 	: 'huffpost'
                        }
                    ]
                    
                },				{

                    'id'		: 'celebrityrecirc1',
                    'type' 		: 'random',
                    'display'	: 1,
                    'feed' 		: [ 
                        {
                            'name'  	: 'Fabsugar',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/fabsugar/feed.js',
                            'site' 		: 'http://www.fabsugar.com/',
                            'clas' 	: 'fabsugar'
                        },{
                            'name'  	: 'CNN',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/cnn/feed.js',
                            'site' 		: 'http://www.cnn.com',
                            'clas' 	: 'cnn'
                        },{
                            'name'  	: 'Daily Beast',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/dailybeast/feed.js',
                            'site' 		: 'http://www.thedailybeast.com/newsmaker/sexybeast/',
                            'clas' 	: 'sexybeast'
                        },{
                            'name'  	: 'Huffington Post',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/huffingtonpost/feed.js',
                            'site' 		: 'http://www.huffingtonpost.com/style/',
                            'clas' 	: 'huffpost'
                        }
                    ]
                    
                },/* DDM put back in when template changes have been made to style correctly 10.26.2011{
                    'id'		: 'makeupbbbrecirc',	
                    'display'	: 2,
                    'feed' 		: [
                        {
                            'name'  	: 'Bellasugar',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/bellasugar/feed.js',
                            'site' 		: 'http://www.bellasugar.com',
                            'clas' 	: 'bellasugar'
                        },{
                            'name'  	: 'StyleWatch',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/stylewatch/feed.js',
                            'site' 		: 'http://www.peoplestylewatch.com/people/stylewatch/',
                            'clas' 	: 'stylewatch'
                        }
                    ]
                },*/{
                    'id'		: 'hairrecirc',	
                    'display'	: 2,
                    'feed' 		: [
                        {
                            'name'  	: 'Total Beauty',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/totalbeauty/feed.js',
                            'site' 		: 'http://www.totalbeauty.com/',
                            'clas' 	: 'totalbeauty'
                        },{
                            'name'  	: 'Bellasugar',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/bellasugar/feed.js',
                            'site' 		: 'http://www.bellasugar.com',
                            'clas' 	: 'bellasugar'
                        }
                    ]
                },{
                    'id'		: 'makeuprecirc',	
                    'display'	: 2,
                    'feed' 		: [
                        {
                            'name'  	: 'Total Beauty',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/totalbeauty/feed.js',
                            'site' 		: 'http://www.totalbeauty.com/',
                            'clas' 	: 'totalbeauty'
                        },{
                            'name'  	: 'Bellasugar',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/bellasugar/feed.js',
                            'site' 		: 'http://www.bellasugar.com',
                            'clas' 	: 'bellasugar'
                        }
                    ]
                },{	// example of how to do random recircs in a single container; to randomize order, but show both, change 'display' to 2
                    'id'		: 'fashionrecirc',
                    'type' 		: 'random',
                    'display'	: 2,
                    'feed' 		: [ 
                        {
                            'name'  	: 'Fabsugar',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/fabsugar/feed.js',
                            'site' 		: 'http://www.fabsugar.com',
                            'clas' 	: 'fabsugar'
                        },{
                            'name'  	: 'Stylelist',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/stylelist/feed.js',
                            'site' 		: 'http://www.stylelist.com',
                            'clas' 	: 'stylelist'
                        },{
                            'name'  	: 'Modelinia',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/modelinia/feed.js',
                            'site' 		: 'http://www.modelinia.com',
                            'clas' 	: 'modelinia'
                        }
                    ]
                },{	// example of how to do random recircs in a single container; to randomize order, but show both, change 'display' to 2
                    'id'		: 'shoppingrecirc',
                    'type' 		: 'random',
                    'display'	: 2,
                    'feed' 		: [ 
                        {
                            'name'  	: 'Bellasugar',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/bellasugar/feed.js',
                            'site' 		: 'http://www.bellasugar.com',
                            'clas' 	: 'bellasugar'
                        },{
                            'name'  	: 'Stylelist',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/stylelist/feed.js',
                            'site' 		: 'http://www.stylelist.com',
                            'clas' 	: 'stylelist'
                        }
                    ]
                },{	// example of how to do random recircs in a single container; to randomize order, but show both, change 'display' to 2
                    'id'		: 'makeoverrecirc',
                    'type' 		: 'random',
                    'display'	: 2,
                    'feed' 		: [ 
                        {
                            'name'  	: 'Total Beauty',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/totalbeauty/feed.js',
                            'site' 		: 'http://www.totalbeauty.com/',
                            'clas' 	: 'totalbeauty'
                        },{
                            'name'  	: 'Bellasugar',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/bellasugar/feed.js',
                            'site' 		: 'http://www.beallasugar.com',
                            'clas' 	: 'bellasugar'
                        },{
                            'name'  	: 'Stylelist',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/stylelist/feed.js',
                            'site' 		: 'http://www.stylelist.com',
                            'clas' 	: 'stylelist'
                        }
                    ]
                },{	// example of how to do random recircs in a single container; to randomize order, but show both, change 'display' to 2
                    'id'		: 'recirc',
                    'type' 		: 'random',
                    'display'	: 2,
                    'feed' 		: [ 
                        {
                            'name'  	: 'Total Beauty',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/totalbeauty/feed.js',
                            'site' 		: 'http://www.totalbeauty.com/',
                            'clas' 	: 'totalbeauty'
                        },{
                            'name'  	: 'Bellasugar',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/bellasugar/feed.js',
                            'site' 		: 'http://www.bellasugar.com',
                            'clas' 	: 'bellasugar'
                        },{
                            'name'  	: 'Stylelist',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/stylelist/feed.js',
                            'site' 		: 'http://www.stylelist.com',
                            'clas' 	: 'stylelist'
                        }
                    ]
                },{
                    'id'		: 'bottomcelebrityrecirc',
                    'type' 		: 'random',
                    'display'	: 2,
                    'feed' 		: [ 
                        {
                            'name'  	: 'Total Beauty',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/totalbeauty/feed.js',
                            'site' 		: 'http://www.totalbeauty.com/',
                            'clas' 	: 'totalbeauty'
                        },{
                            'name'  	: 'CNN',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/bellasugar/feed.js',
                            'site' 		: 'http://www.cnn.com',
                            'clas' 	: 'cnn'
                        },{
                            'name'  	: 'Daily Beast',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/dailybeast/feed.js',
                            'site' 		: 'http://www.thedailybeast.com/newsmaker/sexybeast/',
                            'clas' 	: 'sexybeast'
                        }
                    ]
                    
                },{
                    'id'		: 'bottomhairrecirc',	
                    'type' 		: 'random',
                    'display'	: 2,
                    'feed' 		: [ 
                        {
                            'name'  	: 'Total Beauty',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/totalbeauty/feed.js',
                            'site' 		: 'http://www.totalbeauty.com/',
                            'clas' 	: 'totalbeauty'
                        },{
                            'name'  	: 'Bellasugar',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/bellasugar/feed.js',
                            'site' 		: 'http://www.bellasugar.com',
                            'clas' 	: 'bellasugar'
                        }
                    ]
                },{
                    'id'		: 'bottommakeuprecirc',	
                    'type' 		: 'random',
                    'display'	: 2,
                    'feed' 		: [ 
                        {
                            'name'  	: 'Total Beauty',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/totalbeauty/feed.js',
                            'site' 		: 'http://www.totalbeauty.com/',
                            'clas' 	: 'totalbeauty'
                        },{
                            'name'  	: 'Bellasugar',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/bellasugar/feed.js',
                            'site' 		: 'http://www.bellasugar.com',
                            'clas' 	: 'bellasugar'
                        }
                    ]
                },{	// example of how to do random recircs in a single container; to randomize order, but show both, change 'display' to 2
                    'id'		: 'bottomfashionrecirc',
                    'type' 		: 'random',
                    'display'	: 2,
                    'feed' 		: [ 
                        {
                            'name'  	: 'Fabsugar',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/fabsugar/feed.js',
                            'site' 		: 'http://www.fabsugar.com',
                            'clas' 	: 'fabsugar'
                        },{
                            'name'  	: 'Stylelist',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/stylelist/feed.js',
                            'site' 		: 'http://www.stylelist.com',
                            'clas' 	: 'stylelist'
                        },{
                            'name'  	: 'Modelinia',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/modelinia/feed.js',
                            'site' 		: 'http://www.modelinia.com',
                            'clas' 	: 'modelinia'
                        }
                    ]
                },{	//example of how to do random recircs in a single container; to randomize order, but show both, change 'display' to 2
                    'id'		: 'bottomshoppingrecirc',
                    'type' 		: 'random',
                    'display'	: 2,
                    'feed' 		: [ 
                        {
                            'name'  	: 'Bellasugar',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/bellasugar/feed.js',
                            'site' 		: 'http://www.bellasugar.com',
                            'clas' 	: 'bellasugar'
                        },{
                            'name'  	: 'Stylelist',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/stylelist/feed.js',
                            'site' 		: 'http://www.stylelist.com',
                            'clas' 	: 'stylelist'
                        }
                    ]
                },{	// example of how to do random recircs in a single container; to randomize order, but show both, change 'display' to 2
                
                    'id'		: 'bottomrecirc',
                    'type' 		: 'random',
                    'display'	: 2,
                    'feed' 		: [ 
                        {
                            'name'  	: 'Total Beauty',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/totalbeauty/feed.js',
                            'site' 		: 'http://www.totalbeauty.com/',
                            'clas' 	: 'totalbeauty'
                        },{
                            'name'  	: 'Bellasugar',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/bellasugar/feed.js',
                            'site' 		: 'http://www.bellasugar.com',
                            'clas' 	: 'bellasugar'
                        },{
                            'name'  	: 'Stylelist',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/stylelist/feed.js',
                            'site' 		: 'http://www.stylelist.com',
                            'clas' 	: 'stylelist'
                        }
                    ]
                },{
                    'id'		: 'partiesrecirc',
                    'type' 		: 'random',
                    'display'	: 3,
                    'feed' 		: [ 
                        {
                            'name'  	: 'Total Beauty',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/totalbeauty/feed.js',
                            'site' 		: 'http://www.totalbeauty.com/',
                            'clas' 	: 'totalbeauty'
                        },{
                            'name'  	: 'CNN',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/cnn/feed.js',
                            'site' 		: 'http://www.cnn.com',
                            'clas' 	: 'cnn'
                        },{
                            'name'  	: 'Daily Beast',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/dailybeast/feed.js',
                            'site' 		: 'http://www.thedailybeast.com/newsmaker/sexybeast/',
                            'clas' 	: 'sexybeast'
                        },{
                            'name'  	: 'Huffington Post',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/huffingtonpost/feed.js',
                            'site' 		: 'http://www.huffingtonpost.com/style/',
                            'clas' 	: 'huffpost'
                        }
                    ]
                    
                },{
                    'id'		: 'starfinderbottomrecirc',
                    'type' 		: 'random',
                    'display'	: 3,
                    'feed' 		: [ 
                        {
                            'name'  	: 'Total Beauty',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/totalbeauty/feed.js',
                            'site' 		: 'http://www.totalbeauty.com/',
                            'clas' 	: 'totalbeauty'
                        },{
                            'name'  	: 'CNN',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/cnn/feed.js',
                            'site' 		: 'http://www.cnn.com',
                            'clas' 	: 'cnn'
                        },{
                            'name'  	: 'Daily Beast',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/dailybeast/feed.js',
                            'site' 		: 'http://www.thedailybeast.com/newsmaker/sexybeast/',
                            'clas' 	: 'sexybeast'
                        },{
                            'name'  	: 'Huffington Post',
                            'json' 		: 'http://www.instyle.com/instyle/static/json/huffingtonpost/feed.js',
                            'site' 		: 'http://www.huffingtonpost.com/style/',
                            'clas' 	: 'huffpost'
                        }
                    ]
                    
                }
            ]
        };
        for (var a = 0; a < recircArray.recircs.length; a++) {
            var tempArray = new Array(recircArray.recircs[a]);
            var last = tempArray[0].feed.length;
            if (tempArray[0].type && tempArray[0].type == 'random') { 
                tempArray[0].feed.sort(function() {return 0.5 - Math.random();}); 
                last = tempArray[0].display;
            }
            for (var f = 0; f < last; f++) {
                var ids = tempArray[0].id.split(',');
                var thisID = (ids.length > 1) ? ids[f] : tempArray[0].id;
                tempArray[0].feed[f].id = thisID;
                MasterArray.push(tempArray[0].feed[f]);
            }
        }
    }
    initializeGlobalRecirc();
//	start recirc feed process
    var startRecircFeeds = function() {
        var n = new PartnerRecirc();
    }
    
//	can list as many functions as you want and the loader below will load them as soon as the page is loaded
    var pageLoadFunctions = function() {
        startRecircFeeds();
        IS.Global.starfinderbind();
        
//****  LOTD popup window hotfix for Safari bug --Alex 3/26/2010  ************************************************/
/*
        if (document.getElementById('lotd2009') == null && document.getElementById('slide') != null) {
            //for easy access to classes
            document.getElementsByClassName = function(cl) {
                var retnode = [];
                var myclass = new RegExp('\\b'+cl+'\\b');
                var elem = this.getElementsByTagName('*');
                for (var i = 0; i < elem.length; i++) {
                    var classes = elem[i].className;
                    if (myclass.test(classes)) retnode.push(elem[i]);
                }
                return retnode;
            }
            //check to make *sure* this is the pop up window
            if (document.getElementsByClassName('photo').length == 1 && document.getElementsByClassName('photo')[0].firstChild.getAttribute("href") != '#') {
                //set target on photo link
                document.getElementsByClassName('photo')[0].firstChild.setAttribute('target', '_self');
                //set target on previous button
                if (document.getElementsByClassName('prev').length == 1) {
                    document.getElementsByClassName('prev')[0].firstChild.setAttribute('target', '_self');
                }
                //set target on next button
                if (document.getElementsByClassName('next').length == 1) {
                    document.getElementsByClassName('next')[0].firstChild.setAttribute('target', '_self');
                }
            }
        }
 */
//****  end LOTD popup window hotfix  ****************************************************************************/
        
		// iPad optimizations
		if ((document.getElementById('home2010') != null) && ((navigator.userAgent.match('iPhone')) || (navigator.userAgent.match('iPad')) || (navigator.userAgent.match('iPod')) || (location.search.indexOf('ipad=true') > -1))) {
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'http://www.instyle.com/instyle/static/j/ipad/home.js';
			document.getElementsByTagName('head')[0].appendChild(script);
		}

		if ((navigator.userAgent.match('iPhone')) || (navigator.userAgent.match('iPad')) || (navigator.userAgent.match('iPod')) || (location.search.indexOf('ipad=true') > -1)) {
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'http://www.instyle.com/instyle/static/j/ipad/hideflashnojquery.js';
			document.getElementsByTagName('head')[0].appendChild(script);
		}

	}
    tii_callFunctionOnWindowLoad(pageLoadFunctions);



/*********************************************************************************************************/
/****  UNIVERSAL IS CLASS  ****/
/*********************************************************************************************************/
var IS = window.IS || [];
var ord;

function reloadads(str,page_num) { //called by third party applications, pass on to the IS object
    IS.Global.reloadads(str,page_num);
}

IS.Global = {
    is_gallery : '',
    pkgShare : '',
    firstload : true,
    init : function () {
        //set the "ord" value for ads, if undefined
        ord = IS.Global.getrandomnumber();
        // run pinit function if pinint is present
        IS.Global.findpinit();
        $(document).ready(function(){
            IS.Global.pkgShare = ( $('#pkgSharingIcons').length > 0 ) ? $('#pkgSharingIcons') : 'undefined';
            // set var to establish if gallery
            IS.Global.is_gallery = ( typeof IS.Photo === 'undefined' ) ? false : true;
            if ( IS.Global.is_gallery === false ) {
                IS.Global.headerOmniture();
            }
            // logic to handle BBB toolbar
            if( typeof s_time.prop11 !== 'undefined' && s_time.prop11 === 'best beauty buys' ) {
                IS.Global.toolbarOmniture();
            }
        });
    },
    reloadads : function(str,page_num) {
        //set a new global ord value
        ord = IS.Global.getrandomnumber();
        if ( tgxAds ) {
		if ( IS.Global.firstload === true ) {
			if ( $.browser.mozilla ) {
				// Here is a bogus ad slot
				$('body').append('<div id="mozillaAdSlot" style="display:none;"></div>');
				adFactory.iframes.unshift('mozillaAdSlot|2,9');

			}
                        
			for  ( var i = 0; i < adFactory.iframes.length; i++) {
				writeIFRAME(i);
			}

		} else {
                        if ( adFactory.zone === "fashion/instantstylist") {
			    adFactory.setParam('page', IS.Global.currentpage);
			    adFactory.setParam('ad', IS.Global.currentpage);
			    adFactory.setParam('game', IS.Global.currentgame);
			    adFactory.setParam('win', IS.Global.winpage);
			}
                        var ads = new Array();
                       if ( $('#headerad1').length > 0 ) {
                            ads.push('headerad1');
                        } else if ( $('#ifad728x90-top').length > 0 ) {
                            ads.push('ifad728x90-top');
                        }
                        if ( $('#innerdiv').length > 0 ) {
                            ads.push('innerdiv');
                        }
                       
                        // adFactory.iframe loop
			//for  ( var i = 0; i < adFactory.iframes.length; i++) {
				//var p = adFactory.iframes[i].split('|');
				//ads.push(p[0]);
			//}
			adFactory.refreshAds(ads);
		}
		
        } else {
            //loop through each ad iframe and refresh
            $('div.headerad,div#headerad1,#ifad728x90-top').each( function() {
                var $this = $(this);            
                    IS.Global.reloadad(str,$this,ord,page_num);      
                $('div.ad div.content,#ifad300x250-right .content').each( function() {
                    var $this = $(this);
                        IS.Global.reloadad(str,$this,ord,page_num);
                    $('#ad728x90-btm,#ifad728x90-btm').each( function() {
                        var $this = $(this);
                            IS.Global.reloadad(str,$this,ord,page_num);
                    });
                });
            });
        }
    },
    reloadad : function (str,$this,ord,page_num) {
            //splitthe URL into pieces
            var iframeurl = $this.find('iframe').attr('src').split('?'),
            iframeparams = '',
            iframeparamvals = new Array();
            if (iframeurl.length > 1) {
                iframeparams = iframeurl[1].split('&');
                for (var x = 0; x < iframeparams.length; x++) {
                    var parts = iframeparams[x].split('=');
                    iframeparamvals[parts[0]] = parts[1];
                }
            }
            //put the pieces all back together again
            var newiframeurl = iframeurl[0]
            + '?zone=' + iframeparamvals['zone']
            + '&channel=' + iframeparamvals['channel']
            + '&tabid=' + iframeparamvals['tabid']
            + '&height=' + iframeparamvals['height']
            + '&width=' + iframeparamvals['width']
            + '&tile=' + iframeparamvals['tile'];
           // alert('found winpage = ' + IS.Global.winpage);
            if (typeof IS.Global.winpage != "undefined" && typeof IS.Global.currentpage != "undefined" && typeof IS.Global.currentgame != "undefined") {
             var newiframeurl = newiframeurl
            + '&win=' + IS.Global.winpage 
             + '&ad=' + IS.Global.currentpage
             + '&page=' + IS.Global.currentpage
             + '&game=' + IS.Global.currentgame; 
            }
            if (typeof iframeparamvals['test'] !== 'undefined') {
                var newiframeurl = newiframeurl
                + '&test=' + iframeparamvals['test'];
            }
            var newiframeurl = newiframeurl
            + '&ord=' + ord;
            //add on sponsorship flag if param passed
            if (str == 'sponsored') {
                $(this).attr('src', newiframeurl + '&sponsoredad=1');
            } else {
                $(this).attr('src', newiframeurl);
            }
            // get the id of the iframe
            if($this.find('iframe').attr('id')){
                iframeid = $this.find('iframe').attr('id');
            } else {
                iframeid = ''
            }
        //add on sponsorship flag if param passed
        if (str == 'sponsored') {
            newiframeurl = newiframeurl + (newiframeurl.indexOf('?') != -1 ? '&sponsoredad=1' + key + '=' + value : '?sponsoredad=1' + key + '=' + value);
        }
        $this.empty();
        
        $('<iframe />', {
                    id: iframeid,
                    frameborder: '0',
                    scrolling: 'no',
                    src: newiframeurl,
                    width: iframeparamvals['width'] + 'px',
                    height: iframeparamvals['height'] + 'px',
                    allowtransparency: true
                }).appendTo($this);
        
         if ( s_time.pageName.indexOf("whats right now|gallery") != -1 ) {
            //rewrite omniture
            var strg = s_time.pageName.split('|gallery');
		var proxy = s_time.pageName;
		s_time.pageName = strg[0] + '|gallery|'  + (1 + Number(page_num)) + strg[1];
		//alert('s_time.pageName:' + s_time.pageName);
            s_code = s_time.t();
            if(s_code)document.write(s_code);
		//rewrite comscore
		var u = location.href;     
		u = 'http://b.scorecardresearch.com/b?c1=2&c2=p-5dyPa639IrgIw&rn='+Math.random()+'&c7='+escape(u)+'&c3=&c4=&c5=&c6=&c10=&c15=&c16=&c8=&c9=&cv=1.7';
		$('body:first').append('<img src="'+u+'" width="1" height="1" border="0" />');
		s_time.pageName = proxy;
                // DDM new comscore code as of 4.4.13
                 if ( typeof cs != 'undefined' ) {
                    if (cs.enabled) { cs.csFireBeacon(); }
                }
        }
    },
    starfinderbind : function() {		
		if ($('#starfinder .btn').length > 0){
			$('#starfinder .btn').click(function() {
				celebPath = document.formStarFinder.starfinder_select.value;
				if (celebPath == "") {
					alert("Please select a star.");
				} else {
					document.location = celebPath;
				}
				return false;
			});
		}  
    },
    getrandomnumber : function() {
        return(Math.floor(Math.random()*1000000000000+1));
    },
    attachHomePageCMLinks : function(e) {
        //adds CM tracking to every home page link
        var elem = (e.target.nodeName.toLowerCase() != 'a') ? $(e.target).parent('a') : $(e.target);
        var CMLinksSingle = 'H1_A, H2_A, H3_A, H4_A, H5_A, LOGO_A, NAV1_A, NAV1_SUB1_A, NAV1_SUB2_A, NAV1_SUB3_A, NAV1_SUB4_A, NAV1_SUB5_A, NAV2_A, NAV2_SUB1_A, NAV2_SUB2_A, NAV2_SUB3_A, NAV5_SUB4_A, NAV5_SUB5_A, NAV2_SUB4_A, NAV2_SUB5_A, NAV2_SUB6_A, NAV2_SUB7_A, NAV3_A, NAV3_SUB1_A, NAV3_SUB2_A, NAV3_SUB3_A, NAV3_SUB4_A, NAV3_SUB5_A, NAV3_SUB6_A, NAV3_SUB7_A, NAV4_A, NAV4_SUB1_A, NAV4_SUB2_A, NAV4_SUB3_A, NAV4_SUB4_A, NAV4_SUB5_A, NAV5_A, NAV5_SUB1_A, NAV5_SUB2_A, NAV5_SUB3_A, NAV6_A, searchbtn, FL_1, FL_2, FL_3, FL_4, FL_5, FL_6, FL_7, FL_8, FL_9, FL_10, FL_11, FL_12, FL_13, FL_14, FL_15, FL_16, FL_17, FL_18, FL_19, FL_20, FL_21, FL_22, FL_23, FL_24, TODO1_T_A, TODO1_P_A, TODO2_T_A, TODO2_P_A, TODO3_T_A, TODO3_P_A, LOTD_P_A, LOTD_NAME_A, LOTD_T_A, LOTD_LR4_IMG_A, LOTD_LR4_HL_A, WO_GRAB_A, WO_P_A, WO_T_A, VP_VIDEO_A, VP_HL_A, VP_T_A, ISG_LR5_PHOTO_A, ISG_LR5_TEXT1_A, INSIDE_T1_A, INSIDE_T2_A, INSIDE_T3_A, INSIDE_T4_A, LRLINK1_A, LRLINK2_A, WRN1_P_A, WRN1_T1_A, WRN1_HL_A, WRN1_MORE_A, WRN2_P_A, WRN2_HL_A, WRN2_MORE_A, WRN_ALL_A, Shop_A_L1, Shop_A_L2, Shop_A_L3, Shop_A_L4, Shop_A_L5, Shop_A_L6, Shop_A_L7, Shop_A_L8, Shop_A_P1, Shop_A_P2, Shop_A_P3, Shop_A_P4, Shop_A_Seeall1, Shop_A_Seeall2, Shop_A_Seeall3, Shop_A_Seeall4, TF_P_A, TF_HL_A, TF_MORE_A, SF_P_A, SF_PICK_A, SF_GO_A, SF_C6_PHOTO_A, RHA_A, GET_1_A, GET_2_A, GET_3_A, GET_4_A, GET_SUB_A, GET_GIFT_A, BEAUTY1_P_A, BEAUTY1_HL_A, BEAUTY1_T_A, BEAUTY2_P_A, BEAUTY2_HL_A, BEAUTY2_T_A, BEAUTY3_P_A, BEAUTY3_HL_A, BEAUTY3_T_A, BEAUTY4_P_A, BEAUTY4_HL_A, BEAUTY4_T_A, BEAUTY5_P_A, BEAUTY5_HL_A, BEAUTY5_T_A, BEAUTY_RR5_HL2_A, LOTD_P_B, LOTD_NAME_B, LOTD_T_B, LOTD_LR4_IMG_B, LOTD_LR4_HL_B, TODO1_T_B, TODO1_P_B, TODO2_T_B, TODO2_P_B, TODO3_T_B, TODO3_P_B, WO_GRAB_B, WO_P_B, WO_T_B, VP_VIDEO_B, VP_HL_B, VP_T_B, ISG_LR5_PHOTO_B, ISG_LR5_TEXT1_B, INSIDE_T1_B, INSIDE_T2_B, INSIDE_T3_B, INSIDE_T4_B, LRLINK1_B, LRLINK2_B, WRN1_P_B, WRN1_HL_B, WRN1_MORE_B, WRN2_P_B, WRN2_HL_B, WRN2_MORE_B, WRN3_P_B, WRN3_HL_B, WRN3_MORE_B, WRN_ALL_B, Shop_B_L1, Shop_B_L2, Shop_B_L3, Shop_B_L4, Shop_B_L5, Shop_B_L6, Shop_B_L7, Shop_B_L8, Shop_B_P1 Shop_B_P2 Shop_B_P3 , Shop_B_P4, Shop_B_Seeall1, Shop_B_Seeall2, Shop_B_Seeall3 Shop_B_Seeall4, TF_P_B, TF_HL_B, TF_MORE_B, SF_P_B, SF_PICK_B, SF_GO_B, SF_C6_PHOTO_B, RHA_B, RHA_RR1_A, GET_1_B, GET_2_B, GET_3_B, GET_4_B, GET_SUB_B, GET_GIFT_B, BEAUTY1_P_B, BEAUTY1_HL_B, BEAUTY1_T_B, BEAUTY2_P_B, BEAUTY2_HL_B, BEAUTY2_T_B, BEAUTY3_P_B, BEAUTY3_HL_B, BEAUTY3_T_B, BEAUTY4_P_B, BEAUTY4_HL_B, BEAUTY4_T_B, BEAUTY5_P_B, BEAUTY5_HL_B, BEAUTY5_T_B, BEAUTY_RR5_HL2_B, TODO1_T_C, TODO1_P_C, TODO2_T_C, TODO2_P_C, TODO3_T_C, TODO3_P_C, LOTD_P_C, LOTD_NAME_C, LOTD_T_C, LOTD_LR4_IMG_C, LOTD_LR4_HL_C, WO_GRAB_C, WO_P_C, WO_T_C, VP_VIDEO_C, VP_HL_C, VP_T_C, ISG_LR5_PHOTO_C, ISG_LR5_TEXT1_C, INSIDE_T1_C, INSIDE_T2_C, INSIDE_T3_C, INSIDE_T4_C, LRLINK1_C, LRLINK2_C, ISE_P_C, ISE_HL_C, ISE_T_C, WRN1_P_C, WRN1_HL_C, WRN1_MORE_C, WRN_ALL_C, Shop_C_L1, Shop_C_L2, Shop_C_L3, Shop_C_L4, Shop_C_L5, Shop_C_L6, Shop_C_L7, Shop_C_L8, Shop_C_P1 Shop_C_P2 Shop_C_P3,  Shop_C_P4, Shop_C_Seeall1, Shop_C_Seeall2, Shop_C_Seeall3, Shop_C_Seeall4, TF_P_C, TF_HL_C, TF_MORE_C, SF_P_C, SF_PICK_C, SF_GO_C, SF_C6_PHOTO_C, RHA_C, GET_1_C, GET_2_C, GET_3_C, GET_4_C, GET_SUB_C, GET_GIFT_C, BEAUTY1_B, BEAUTY1_P_C, BEAUTY1_HL_C, BEAUTY1_T_C, BEAUTY2_P_C, BEAUTY2_HL_C, BEAUTY2_T_C, BEAUTY3_P_C, BEAUTY3_HL_C, BEAUTY3_T_C, BEAUTY4_P_C, BEAUTY4_HL_C, BEAUTY4_T_C, BEAUTY5_P_C, BEAUTY5_HL_C, BEAUTY5_T_C, BEAUTY_RR5_HL2_B, SHOP_P_A, SHOP_HL_A, SHOP_L1_A, SHOP_L2_A, SHOP_L3_A, SHOP_P_B, SHOP_HL_B, SHOP_L1_B, SHOP_L2_B, SHOP_L3_B, SHOP_P_C, SHOP_HL_C, SHOP_L1_C, SHOP_L2_C, SHOP_L3_C, LSP_TH, LSP_H, LSP_T, LSP_P, LSP_B, LSP_TH_HAIR, LSP_H_HAIR, LSP_T_HAIR, LSP_B_HAIR, LSP_P_HAIR, LSP_TH_CELEBRITY, LSP_H_CELEBRITY, LSP_T_CELEBRITY, LSP_B_CELEBRITY, LSP_P_CELEBRITY, LSP_TH_SHOPPING, LSP_H_SHOPPING, LSP_T_SHOPPING, LSP_B_SHOPPING, LSP_P_SHOPPING, LSP_TH_FASHION, LSP_H_FASHION, LSP_T_FASHION, LSP_B_FASHION, LSP_P_FASHION,LSP_TH_A,LSP_TH_B,LSP_TH_C,LSP_H_A,LSP_H_B,LSP_H_C,LSP_T_A,LSP_T_B,LSP_T_C,LSP_P_A,LSP_P_B,LSP_P_C,LSP_B_A,LSP_B_B,LSP_B_C';
        if (CMLinksSingle.match(elem.attr('id'))) {
            var eltitle = (elem.attr('title').length  > 0 && elem.attr('title') != '') ? elem.attr('title') : elem.text();
            linkTrack(elem.attr('id'),eltitle);
        }
    },
    footerredirect : function() {
        //footer links redirect with "StyleFind" message (no "msg" param)
        $('#stylefind a').click(function() {
            window.open('http://www.instyle.com/instyle/static/h/shopping/redirect.html?r=' + $(this).attr('href'));
            return false;
        });
    },
    popunder : function(winurl,winname,winwidth,winheight,winleft,wintop) {
        //opens a pop under window
        if (winurl != undefined) {
            winname = (winname == undefined) ? 'mywin' : winname;
            winwidth = (winwidth == undefined) ? '700' : winwidth;
            winheight = (winheight == undefined) ? '520' : winheight;
            winleft = (winleft == undefined) ? '0' : winleft;
            wintop = (wintop == undefined) ? '0' : wintop;

            window.open(winurl,winname,'width=' + winwidth + ',height=' + winheight + ',left=' + winleft + ',top=' + wintop).blur();
            window.focus();
        }
    },
	postToFacebook : function(fbshareurl,fbsharepicture,fbsharename,fbsharecaption,fbsharedescription){
		// calling the Graph API ...
		var obj = {
			method: 'feed',
			link: fbshareurl,
			picture: fbsharepicture,
			name: fbsharename,
			caption: fbsharecaption,
			description: fbsharedescription
		};
		function callback(response) {
			//callback
		}
		FB.ui(obj, callback);
	},
	 selectTab : function(num, totaltabs) {
		for (var i=1; i <= totaltabs; i++) {
   			document.getElementById("tab" + i).className = "";
    		document.getElementById("box" + i).className = "infobox";
  		}
  		document.getElementById("tab" + num).className = "selected";
  		document.getElementById("box" + num).className = "infobox enabled";
		$(document).ready( function() {
				$('#showmore').click(function(ev) { 
    				$('.more').slideToggle(); 
    				$('#showmore').text(($('#showmore').text() == 'Less News -') ? 'More News +' : 'Less News -');
					return false;
 				});

	
		});
	 },
	 findpinit : function() {
            $(document).ready(function() {
                if($('.pinit').length){
                    window.PinIt = window.PinIt || { loaded:false };
                    if (window.PinIt.loaded) return;
                    window.PinIt.loaded = true;
                    function async_load(){
                        var s = document.createElement("script");
                        s.type = "text/javascript";
                        s.async = true;
                        if (window.location.protocol == "https:")
                            s.src = "https://assets.pinterest.com/js/pinit.js";
                        else
                            s.src = "http://assets.pinterest.com/js/pinit.js";
                            var x = document.getElementsByTagName("script")[0];
                            x.parentNode.insertBefore(s, x);
                        }
                    if (window.attachEvent)
                        window.attachEvent("onload", async_load);
                    else
                        window.addEventListener("load", async_load, false);
                }
            });
        },
        removeHTML : function(str){ // removes HTML from string
		if (str === null || str === '') {return;}
		str = str.replace(/&(lt|gt);/g, function(strMatch, p1){return (p1 == 'lt') ? '<' : '>';});
		str = str.replace(/<\/?[^>]+(>|$)/g,'');
                str = str.replace(/&#39;/g, "'");
		return str;
        },
        parseQueryString : function() {
	    var params = {};
            var q = arguments[0] || location.search;
	    if (q.length > 0) {
		var pairs = q.substring(q.indexOf('?') + 1).split('&');
		for (var i = pairs.length - 1; i >= 0; --i) {
		    var pair = pairs[i].split('=');
		    params[pair[0]] = (typeof pair[1] === 'string') ? unescape(pair[1]) : pair[1];
		}
	    }
            return params;
	},
        toggleSeeMore : function(){
            $(document).ready( function() {
		$('#seemoreanchor a').click(function(ev) { 
    		$('#seemoreexpander').slideToggle('slow'); 
    		$('#seemoreanchor a').text(($('#seemoreanchor a').text() == 'See Less') ? 'See All' : 'See Less');
                $('#seemoreanchor a').toggleClass('up down');
		    return false;
 		});

	
	    });
        },
        ResizeIframe : function(iframeElement,resizeIframeMaxWidth,resizeIframeMaxHeight) {
            var scrollWidth=iframeElement.contentWindow.document.body.scrollWidth;
            var scrollHeight=iframeElement.contentWindow.document.body.scrollHeight;
            if ( scrollWidth > resizeIframeMaxWidth ) {
                scrollWidth=resizeIframeMaxWidth;
            }
            if ( scrollHeight > resizeIframeMaxHeight ) {
                scrollHeight=resizeIframeMaxHeight;
            }
            iframeElement.width=scrollWidth;
            iframeElement.height=scrollHeight;
        },
        headerOmniture : function () {
            var obj = IS.Global,
            omnifo = '';
            if ( $('#pkgSharingIcons').length > 0 ) {
                obj.pkgShare.find('a:first-child').unbind().click(function(){
                    var pagename = ( typeof s_time.pageName === 'undefined' ) ? 'NOPAGENAME' : s_time.pageName,
                    omninfo = 'Twitter|' + pagename;
                    omniTrackEv( omninfo );
                });
            }
        },
        toolbarOmniture : function () {
            var omnifo = '',
            pagename = ( typeof s_time.pageName === 'undefined' ) ? 'NOPAGENAME' : s_time.pageName;
	    $('#twitterslide').find('a:first-child').unbind().click(function(){
                omninfo = 'Twitter|' + pagename;
                omniTrackEv( omninfo );
            });
            $('#pinitslide').click(function(){
                    omninfo = 'Pinit|' + pagename;
                    omniTrackEv( omninfo );
            });   
        },
        // Use tgx.js to inject an ad script to a div with given id.
        appendAdScript : function(config) { // id required. w AND h OR multi required.
            var targetDivScript,
            w = config.w ? config.w : null,
            h = config.h ? config.h : null,
            id = config.id,
            hyphen = /\-/g,
            adID = id.replace( hyphen, '_' ),
            adVar = 'ad_' + adID,
            declareAdVar = '',
            srndString = config.srnd ? adVar + '.setParam("srnd", ' + config.srnd + ');' : '',
            pidString = config.pid ? adVar + '.setParam("pid", ' + config.pid + ');' : '',
            francString = config.franc ? adVar + '.setParam("franc", "' + config.franc + '");' : '',
            subjString = '',
            code;

            targetDivScript = document.createElement('script');
            targetDivScript.type = 'text/javascript';

            // Condition and loop to allow us to pass config.multi array into the code string.
            if ( config.multi ) {
                var multi = config.multi,
                multiLength = multi.length,
                multiArray = [];

                for ( var i = 0; i < multiLength; i++ ) {
                    multiArray.push('\"' + multi[i] + '\"');
                }

                declareAdVar = 'var ' + adVar + ' = adFactory.getMultiAd([' + multiArray + ']);';
            } else {
                declareAdVar = 'var ' + adVar + ' = adFactory.getAd(' + w + ', ' + h + ');';
            }

            // Condition and loop to allow us to pass config.subj array into the code string.
            if ( config.subj ) {
                var subj = config.subj,
                subjLength = subj.length,
                subjArray = [];

                for ( var j = 0; j < subjLength; j++ ) {
                    subjArray.push('\"' + subj[j] + '\"');
                }

                subjString = adVar + '.setParam("subj", [' + subjArray + ']);';
            }

            code = declareAdVar +
            srndString +
            pidString +
            francString +
            subjString +
            adVar + '.setParam("dcopt", "ist");' +
            adVar + '.write("' + id + '");';
            //alert(code);
            try {
                targetDivScript.appendChild(document.createTextNode(code));
            } catch(e) {
                targetDivScript.text = code;
            }

        document.getElementById(id).appendChild(targetDivScript);
    }
}

IS.Global.init();
//redirect StyleFind footer links to the intersitial page before sending user on
$(function() { IS.Global.footerredirect(); });

// DDM commented out 3.18.13
//**** gallery stitching starts ****************/
/* if( typeof IS.Photo == "undefined" ) {
	IS.Photo = {};
}
IS.Photo = (function() {

	function getNextGallery() {
		$.getJSON( '/instyle/package/navigation/js/0,,' + IS.Photo.packageid + ',00.js', function( data ) {
			var galleries = [];
			$.each( data.galleries, function( i ) {
				galleries.push( data.galleries[i].id );
			});
			var pos = $.inArray( IS.Photo.galleryid	, galleries );
			if( galleries[pos + 1] ) {
				renderNextGallery( data.galleries[ pos + 1 ] );
			} else {
				renderNextGallery( data.galleries[ 0 ] );
			}
		});
	}

	
	function renderNextGallery( gallery ) {
		
		*//* next links *//*
		$( 'li.nextgal' ).find( 'a' ).attr( 'href', gallery.url );
		$( '#pkgmain.gallery #slide .photobox .matte' ).find( 'a' ).attr( 'href', gallery.url );		
		*//* next gallery thumbnail and text *//*
		var recirc = $( '<div class="nextrecirc clear">' +
				'<div class="imgcont">' +
					'<a href="' + gallery.url + '">' +
					'<img src="' + gallery.image + '" alt="' + gallery.title + '" width="75" height="75" border="0" />' +
					'<\/a>' +
				'<\/div>' +
				'<div class="txtcont">' +
					'Next Gallery: <a href="' + gallery.url + '" class="border-arrow">' + gallery.title + '<\/a>' +
				'<\/div>' +
			'<\/div>'
		);
		
		var existingRecirc = $('.nextrecirc');
		
		if( existingRecirc.length ) {
			existingRecirc.replaceWith( recirc );
		} else {
			recirc.insertAfter( '.slideinfo .text' );
		}
		
		
	}
	
	return {
		stitch: function() {
			if( !IS.Photo.isStitched ) return;					
			getNextGallery();
		}
	}

	
	return {
		stitch: function() {
			if( !IS.Photo.isStitched ) return;
			getNextGallery();
		}
	}

})();*/
//**** Gallery stitching ends **************************/

////TODO: remove this when CM pop under ad is no longer running --Alex, 12/14/2010
//$(window).load(function(){
    ////adds a listener to *every* link, pops under a CM ad is the link URL does not contain "instyle"
   // $('body').bind('click', function(e){
       // var target = e.target,
        //$target = $(target);
        //if (target.nodeName === 'A') {
           // if (
                //!$(target).attr('href').match(/instyle/) && //do not show on internal links
                //$(target).attr('href').charAt(0) != '/' &&	//do not show on relative links
                //$(target).attr('href').charAt(0) != '#' &&	//do not show on anchors
                //$('#obsessed').length == 0 &&               //do not show on we're obsessed galleries
                //$('#body-gallery').length == 0 &&           //do not show on the WRN photo galleries
                //$('#searchresults').length == 0 &&          //do not show on search results
                //$('#designercentral').length == 0 &&        //do not show on designer central pages
                //$('#home2010').length == 0                  //do not show on homepage
           // ) {
               // IS.Global.popunder('https://secure.customersvc.com/servlet/Show?WESPAGE=in/home.html&MSRSMAG=IN&js');
            //}
       // }
    //});
//});

/*********************************************************************************************************/
/****  JQUERY EXTEND - SLIDER  ****/
/*********************************************************************************************************/
jQuery.fn.accessNews = function(settings) {
    settings = jQuery.extend({
        sliderSpeed: "normal",
		numberOfSlidesToMove: 1,
		currentNumberOfSlidesToMove : 1
    }, settings);
    return this.each(function(i) {
		var testItem = jQuery(".slide:eq(" + i + ")",".contentslider");
        var itemInnerWidthPx = testItem.css("width");
		var itemInnerWidth = (!itemInnerWidthPx || itemInnerWidthPx == '')? 0 : ((isNaN (parseInt (itemInnerWidthPx)))? 0 : parseInt (itemInnerWidthPx));
		var itemMarginLeftPx = testItem.css("margin-left");
		var itemMarginLeft = (!itemMarginLeftPx || itemMarginLeftPx == '')? 0 : ((isNaN (parseInt (itemMarginLeftPx)))? 0 : parseInt (itemMarginLeftPx));
		var itemMarginRightPx = testItem.css("margin-right");
		var itemMarginRight = (!itemMarginRightPx || itemMarginRightPx == '')? 0 : ((isNaN (parseInt (itemMarginRightPx)))? 0 : parseInt (itemMarginRightPx));
		var itemPaddingLeftPx = testItem.css("padding-left");
		var itemPaddingLeft = (!itemPaddingLeftPx || itemPaddingLeftPx == '')? 0 : ((isNaN (parseInt (itemPaddingLeftPx)))? 0 : parseInt (itemPaddingLeftPx));
		var itemPaddingRightPx = testItem.css("padding-right");
		var itemPaddingRight = (!itemPaddingRightPx || itemPaddingRightPx == '')? 0 : ((isNaN (parseInt (itemPaddingRightPx)))? 0 : parseInt (itemPaddingRightPx));
		var itemBorderLeftPx = testItem.css("border-left-width");
		var itemBorderLeft = (!itemBorderLeftPx || itemBorderLeftPx == '')? 0 : ((isNaN (parseInt (itemBorderLeftPx)))? 0 : parseInt (itemBorderLeftPx));
		var itemBorderRightPx = testItem.css("border-right-width");
		var itemBorderRight = (!itemBorderRightPx || itemBorderRightPx == '')? 0 : ((isNaN (parseInt (itemBorderRightPx)))? 0 : parseInt (itemBorderRightPx));
		aNewsSlider.itemWidth = itemInnerWidth + itemMarginLeft + itemMarginRight + itemPaddingLeft + itemPaddingRight + itemBorderLeft + itemBorderRight;

		$(document).ready(function(){  
			aNewsSlider.init(settings,this);
			jQuery(".viewall > a", this).click(function() {
				aNewsSlider.vAll(settings,this);
				return false;
			});
		});
    });
};
var aNewsSlider = {
	self: this,
    itemWidth: 0,
	trackedNextNode: null,
	trackedPrevNode: null,
    init: function(s,p) {
        jQuery(".disabledmsg",p).css("display","none");
		var agent = navigator.userAgent;
		s.isMacFirefox = /Macintosh/i.test (agent) && /Firefox/i.test (agent);
		s.removeNodesDelay = isNaN (s.sliderSpeed) ? 250 : s.sliderSpeed;
		items = jQuery(".slide",p);
        itemLength = items.length;
		s.currentNumberOfSlidesToMove = s.numberOfSlidesToMove;
		if (s.currentNumberOfSlidesToMove > itemLength)
		{
			s.currentNumberOfSlidesToMove = itemLength;
		}
		//jQuery(".slidetotal",p).get () [0].innerHTML = itemLength;
        newsContainerWidth = itemLength * aNewsSlider.itemWidth;
		slidesContainer = jQuery(".slidescont",p);
        slidesContainer.css("width",(newsContainerWidth * 2) + "px");
		containerEl = slidesContainer.get () [0];
		tii_dom_removeWhitespaceTextNodes (containerEl);
        nextJQ = jQuery(".nextslidelink",p);
		if (nextJQ.get ().length == 0) { nextJQ = jQuery(".nextlink",p); }
        prevJQ = jQuery(".prevslidelink",p);
		if (prevJQ.get ().length == 0) { prevJQ = jQuery(".prevlink",p); }
        nextJQ.css("display","block");
        prevJQ.css("display","block");
		nextslide = nextJQ.get () [0];
		prevslide = prevJQ.get () [0];
		if (navigator.vendor == 'Apple Computer, Inc.')
		{
			nextslide.href = prevslide.href = 'javascript:{}';
		}
		self.next = nextslide;
		self.prev = prevslide;
		s.stopClick = false;
        tii_addEventHandler (next, 'click', function(event)
		{
			tii_stopDefaultAction (event);
			aNewsSlider.moveSlider (s, p, true, -1);
        }, false);
        tii_addEventHandler (prev, 'click', function(event)
		{
			tii_stopDefaultAction (event);
			aNewsSlider.moveSlider (s, p, false, 1);
        });
		if (typeof tii_selectedSlideClass != 'undefined' && tii_selectedSlideClass && tii_selectedSlideClass != '')
		{
			var selectedSlideArray = jQuery ('.' + tii_selectedSlideClass).get ();
			if (selectedSlideArray.length > 0)
			{
				var select0edSlide = selectedSlideArray [0];
				var selectedSlideIndex = 0;
				var itemsArray = items.get ();
				for (var i = 0; i < itemLength; i++)
				{
					if (itemsArray [i].className.indexOf (tii_selectedSlideClass) > -1) { break; } else { selectedSlideIndex++; }
				}
				if (selectedSlideIndex > 0) { aNewsSlider.moveSlider (s, p, true, -1, selectedSlideIndex); }
			}
		}
    },
	moveSlider: function (s, p, moveToNext, directionMultiplier, alternateNumberToMove)
	{
			if (alternateNumberToMove > 0) { s.currentNumberOfSlidesToMove = alternateNumberToMove; } else { s.currentNumberOfSlidesToMove = s.numberOfSlidesToMove; }
			if (s.stopClick)
			{
				return;
			}
			else
			{
				s.stopClick = true;
			}
			var newLeft = aNewsSlider.copyNodes (s, p, moveToNext);
			s.animateLeft = newLeft + (aNewsSlider.itemWidth * s.currentNumberOfSlidesToMove * directionMultiplier);
			slidesContainer.animate({left: s.animateLeft}, s.sliderSpeed, function ()
			{
				if (s.isMacFirefox)
				{
					var removeNodesDelay = setTimeout (function ()
					{
						aNewsSlider.removeNodes (s, p, moveToNext);
						s.stopClick = false;
					}, s.removeNodesDelay);
				}
				else
				{ 
					aNewsSlider.removeNodes (s, p, moveToNext);
					s.stopClick = false;
				}
			});
	},
	copyNodes: function (s,p, moveToNext)
	{
		aNewsSlider.trackedNextNode = null;
		aNewsSlider.trackedPrevNode = null;
		var newItems = jQuery(".slide",p);
		var tempWidth = parseInt(slidesContainer.css("width"));
		var tempLeft = parseInt(slidesContainer.css("left"));
		for (var i = 0; i < s.currentNumberOfSlidesToMove; i++)
		{
	        slidesContainer.css("width", (tempWidth += aNewsSlider.itemWidth) + "px");
			if (moveToNext)
			{
				if (!aNewsSlider.trackedNextNode)
				{
					aNewsSlider.trackedNextNode = newItems.get (i);
				}
				else
				{
					aNewsSlider.trackedNextNode = aNewsSlider.trackedNextNode.nextSibling;
				}
				slidesContainer.append (aNewsSlider.trackedNextNode.cloneNode (true));
			}
			else
			{
				if (!aNewsSlider.trackedPrevNode)
				{
					aNewsSlider.trackedPrevNode = newItems.get (newItems.length - 1);
				}
				else
				{
					aNewsSlider.trackedPrevNode = aNewsSlider.trackedPrevNode.previousSibling;
				}
				slidesContainer.prepend (aNewsSlider.trackedPrevNode.cloneNode (true));
				slidesContainer.css("left", (tempLeft -= aNewsSlider.itemWidth) + "px");
			}
		}
		return tempLeft;
	},
	removeNodes: function (s,p, moveToNext)
	{
		var newItems = jQuery(".slide",p);
		var tempWidth = parseInt(slidesContainer.css("width"));
		var tempLeft = parseInt(slidesContainer.css("left"));
		for (var i = 0; i < s.currentNumberOfSlidesToMove; i++)
		{
			if (moveToNext)
			{
				var firstChildEl = containerEl.firstChild;
				slidesContainer.css("left", (tempLeft += aNewsSlider.itemWidth) + "px");
				firstChildEl.style.display = 'none';
				containerEl.removeChild (firstChildEl);
			}
			else
			{
				containerEl.removeChild (containerEl.lastChild);
			}
	        slidesContainer.css("width", (tempWidth -= aNewsSlider.itemWidth) + "px");
		}
	},
    vAll: function(s,p) {
        var o = p;
        while (p) {
            p = p.parentNode;
            if (jQuery(p).attr("class") != undefined && jQuery(p).attr("class").indexOf("contentslider") != -1) {
                break;
            }
        }
        if (jQuery(o).text().indexOf("View All") != -1) {
            jQuery(".nextlink",p).css("display","none");
            jQuery(".prevlink",p).css("display","none");

            jQuery(o).text("View Less");
            jQuery(".slidescont",p).css("left","0px").css("width", "auto");
        } else {
            jQuery(o).text("View All");
            aNewsSlider.init(s,p);
        }
    }
};

tii_callFunctionOnWindowLoad (function ()
{
    $(".contentslider").accessNews({
        sliderSpeed: 250, // 1 sec = 1000
		numberOfSlidesToMove: 1
    });



	/*
    sliderSpeed: "normal"          (String/Integer)  |  "slow","normal","fast", or an integer, with 1 being the fastest animation.
    */
});


/*********************************************************************************************************/
/****  add Omniture to QL in WAP menu and header of news.instlye site (works with three links) DDM 9.26.11  ****/
/*********************************************************************************************************/
function ti_add_omnitureQL(id)
{
	function AddEvent(html_element, event_name, event_function) 
		{       
		if(html_element.attachEvent) //Internet Explorer
			html_element.attachEvent("on" + event_name, function() {event_function.call(html_element);}); 
		else if(html_element.addEventListener) //Firefox & company
			html_element.addEventListener(event_name, event_function, false); //don't need the 'call' trick because in FF everything already works in the right way          
		} 
	var targetDiv = document.getElementById(id);
	var Anchors = targetDiv.getElementsByTagName("a");
	for (var i = 0; i < Anchors.length ; i++) {
		if (i == 0){
			var title1 = Anchors[0].innerHTML;
			title1 = title1.toLowerCase();
			AddEvent(Anchors[i],"click",
    			function() {
				//alert('function(ql1,' + title1 + ')');
				linkTrack('ql1',title1);
				return false;
    			});
		} else if (i == 1) {
			var title2 = Anchors[1].innerHTML;
			title2 = title2.toLowerCase();
			AddEvent(Anchors[i],"click",
    			function() {
				//alert('function(ql2,' + title2 + ')');
				linkTrack('ql2',title2);
				return false;
    			});
			
		} else {
			var title3 = Anchors[2].innerHTML;
			title3 = title3.toLowerCase();
			AddEvent(Anchors[i],"click",
    			function() {
				//alert('function(ql3,' + title3 + ')');
				linkTrack('ql3',title3);
				return false;
    			});
		}
	}
}

// Jumptime beacon
IS.Jumptime = {
	customerName : "timeseg",
	domain : "http://timeseg.jump-time.net/timeseg",
	excludeAdParams : ["rsseg","qc","url"],
	imageUrl : "http://timeseg.jump-time.net/timeseg.gif",
	scriptUrl : "http://beacon.jump-time.net/jt.js",
	getParams : function () {
		return {
			sup: "Instyle",
			sec: s_time.prop16 || "",
			ss: s_time.prop11 || "",
			tag: s_time.prop11 || "",
			caid: adFactory.params.aid || "",
			akv1: (adFactory.sitename || "") + '/' + (adFactory.zone || ""),
			akv2: (function() {
				var params = [];
				for(param in adFactory.params) {
					if($.inArray(param,IS.Jumptime.excludeAdParams) < 0) {		
							params.push(param + '=' + adFactory.params[param]);
					}
				}
				return params.join('|');
			})(),
			ct: (function() {
				var ptype = adFactory.params.ptype, ctype = adFactory.params.ctype;
				if(ptype && ctype) {
					return ptype + '|' + ctype;
				} else if (ptype) {
					return ptype;
				} else {
					return ctype;
				}
			})()
		}
	},
	track : function( canonical ) {
		var paramsObj = IS.Jumptime.getParams();
                if( canonical ){
                    paramsObj.aref = canonical;
                }
		var params = IS.Jumptime.customerName + '&' + $.param(paramsObj);
		jt(IS.Jumptime.domain,params,true);
	},
    init:function(){$.ajax({type:"GET",url:this.scriptUrl,dataType:"script",cache:true,success:this.track})}
};


// DDM 1.20.12 added tool tip
 $.fn.IStooltip = function(options){  
        /* Setup the options for the tooltip that can be 
           accessed from outside the plugin              */  
        var defaults = {  
            speed: 300,  
            delay: 100  
        };  
  
        var options = $.extend(defaults, options);  
  
        /* Create a function that builds the tooltip 
           markup. Then, prepend the tooltip to the body */  
        getTip = function() { 
            var tTip =  
            "<div class='tip'>" +  
                "<div class='tipMid'>"    +  
                "</div>" +  
                "<div class='tipBtm'></div>" +  
            "</div>";  
            return tTip;  
        }  
        $("body").prepend(getTip());  
  
        /* Give each item with the class associated with 
           the plugin the ability to call the tooltip    */  
        $(this).each(function(){  
  
            var $this = $(this);  
            var tip = $('.tip');  
            var tipInner = $('.tip .tipMid');  
  
            var tTitle = (this.title);  
            this.title = "";  
  
            var offset = $(this).offset();  
            var tLeft = offset.left;  
            var tTop = offset.top;  
            var tWidth = $this.width();  
            var tHeight = $this.height();  
  
            /* Mouse over and out functions*/  
            $this.hover(function() {  
                tipInner.html(tTitle);  
                setTip(tTop, tLeft);  
                setTimer();  
            },  
            function() {  
                stopTimer();  
                tip.hide();  
            }  
        );           
  
        /* Delay the fade-in animation of the tooltip */  
        setTimer = function() {  
            $this.showTipTimer = setInterval("showTip()", defaults.delay);  
        }  
  
        stopTimer = function() {  
            clearInterval($this.showTipTimer);  
        }  
  
        /* Position the tooltip relative to the class 
           associated with the tooltip                */  
        setTip = function(top, left){  
            var topOffset = tip.height();  
            var xTip = (left-30)+"px";  
            var yTip = (top-topOffset-5)+"px";  
            tip.css({'top' : yTip, 'left' : xTip});  
        }  
  
        /* This function stops the timer and creates the 
           fade-in animation                          */  
        showTip = function(){  
            stopTimer();  
            tip.animate({"opacity": "toggle"}, defaults.speed);  
        }  
    });  
};

function appendParam(url, key, value)  {
    var key = encodeURIComponent(key), value = encodeURIComponent(value);    
    window.location.href = url + (url.indexOf('?') != -1 ? '&' + key + '=' + value : '?' + key + '=' + value);
}

function ti_add_omniture_recirc() {
	// omniture for have you heard recirc module
	if ( $('#recirc-box-wrap').length > 0 ) {
            $('#recirc-box-wrap').find('ul').delegate('a', 'click', function(){ 
		var $this = $(this),
		indexNum = $(this).parents('li').index() + 1,
                url = $this.attr('href'),
                prop = s_time.prop11.replace(/\s+/g, '_'),
		title='';
                if ( $('li.hyh-more').length > 0 ) { 
                    var recircid = 'HYHE';
                } else {
                    var recircid = 'HYH';
                }
                if (typeof(s_time.prop11) === "undefined") {
                        var prop = 'NOPROP';    
                } else {
                        var prop = s_time.prop11.replace(/\s+/g, '_');
                }
                var omniTrax = prop + '-' + recircid + '-' + indexNum;
		
                if ($this.find('img').length > 0 ) {				
		    title = $this.parent().next().text();
		    omniTrax =  omniTrax + 'P'  + '-' + title;
                    appendParam(url,'iid',omniTrax);
		    return false;
                } else {
		    title = $this.text();
                    omniTrax =  omniTrax + 'T' + '-' + title;
                    appendParam(url,'iid',omniTrax);
		    return false;
                }
            });
        }
	// omniture for recent news recirc module
	if ( $('#tabswrap').length > 0 )  {
		$('#tabswrap').find('ul').delegate('a', 'click', function(){ 
		    var $this = $(this),
                    indexNum = $this.parents('li').index() + 1,
                    url = $this.attr('href'),
		    title='';
                    if (typeof(s_time.prop11) === "undefined") {
                        var prop = 'NOPROP';    
                    } else {
                        var prop = s_time.prop11.replace(/\s+/g, '_');
                    }
		    if ( $('li.more').length > 0 ) { 
                        var recircid = 'RNE';
                    } else {
                        var recircid = 'RN';
                    }
                    var omniTrax = prop + '-' + recircid + '-' + indexNum;
		    if ($this.find('img').length > 0 ) {
			title = $this.parent().next().text();
			omniTrax =  omniTrax + 'P' + '-' + title;
                        appendParam(url,'iid',omniTrax);
                        return false;
		    } else {
			title = $this.text();
			omniTrax =  omniTrax + 'T' + '-' + title;
                        appendParam(url,'iid',omniTrax);
                        return false;
                    }
		});
	}
        // omniture for OB recent news recirc module
	if ( $('.ob_container_recs').length > 0 )  {
		$('.ob_container_recs').delegate('a', 'click', function(){ 
		    var $this = $(this),
                    indexNum = $('.ob_container_recs a').index($this),
                    indexNum = (indexNum + 1),
                    url = $this.attr('href'),
                    dataid =  $this.parent().parent().parent().parent().attr('data-widget-id'),
		    title = $this.find('.strip-rec-link-title').text();
                    if (typeof(s_time.prop11) === "undefined") {
                        var prop = 'NOPROP';    
                    } else {
                        var prop = s_time.prop11.replace(/\s+/g, '_');
                    }
                    if (dataid) {
                        var recircid = 'OUTBRAIN_' + dataid;    
                    } else {
                        var recircid = 'OUTBRAIN_NOID';
                    }
                    var prop_id = prop + '-' + recircid,
                    index_title = indexNum + '-' + title;
                    linkTrack(prop_id,index_title);
                    //return false;
		});
	}
	// omniture for scroller recirc module
	if ( $('.maincont').length > 0 )  {
		$('.maincont').find('div.slidescont').delegate('a', 'click', function(){
		    var $this = $(this),
		    indexNum = $this.parents('div.slide').index() + 1,
                    url = $this.attr('href'),
                    recircid = 'HB10',
                    title='';
                    if (typeof(s_time.prop11) === "undefined") {
                        var prop = 'NOPROP';    
                    } else {
                        var prop = s_time.prop11.replace(/\s+/g, '_');
                    }
                    var omniTrax = prop + '-' + recircid + '-' + indexNum;
		    if ($this.find('img').length > 0 ) {
			title = $this.parent().next().text();
			omniTrax =  omniTrax + 'P' + '-' + title;
                        appendParam(url,'iid',omniTrax);
                        return false;
		    } else {
			title = $this.text();
			omniTrax =  omniTrax + 'T' + '-' + title;
                        appendParam(url,'iid',omniTrax);
                        return false;   
		    }
		});
	}
	// omniture for latest star photos 4 recirc module
	if ( $('#thumbs4').length > 0 ) {
		$('#thumbs4').find('.imgwrap').delegate('a', 'click', function(){
		    var $this = $(this),
                    indexNum = $this.parents('.imgcont').index() + 1,
                    url = $this.attr('href'),
                    recircid = 'LSP4',
		    title='';
                    if (typeof(s_time.prop11) === "undefined") {
                        var prop = 'NOPROP';    
                    } else {
                        var prop = s_time.prop11.replace(/\s+/g, '_');
                    }
                    var omniTrax = prop + '-' + recircid + '-' + indexNum;
		    if ($(this).find('img').length > 0 ) {	
                        title = $this.parent().next().text();
			omniTrax =  omniTrax + 'P' + '-' + title;
                        appendParam(url,'iid',omniTrax);
                        return false;
		    } else {
			title = $this.text();
			omniTrax =  omniTrax + 'T' + '-' + title;
                        appendParam(url,'iid',omniTrax);
                        return false;
		    }
		});
	}
	// omniture for latest star photos 9 and transformations recirc module
	if ( $('#thumbs9').length > 0 ||  $('#trans').length > 0 ) {
		$('#thumbs9,#trans').find('.imgwrap').delegate('a', 'click', function(){
			if ( $('#thumbs9').length > 0 ) {
			    var recircid = 'LSP9';
			} else if ( $('#trans').length > 0 ) {
			    var recircid = 'TRANS';
			}
                        if (typeof(s_time.prop11) === "undefined") {
                            var prop = 'NOPROP';    
                        } else {
                            var prop = s_time.prop11.replace(/\s+/g, '_');
                        }
			var $this = $(this),
			url = $this.attr('href'),
			indexNum = $this.parents('.imgcont').index() + 1, 
			title = $this.find('img').attr('alt'),
                        omniTrax =  prop + '-' + recircid + '-' + indexNum + 'P' + '-' + title;
                        appendParam(url,'iid',omniTrax);
			return false;
			
		});
	}
	// omniture for two tout recirc module				
	if ( $('#mostpoptwotout').length > 0 ) {
		$('#mostpoptwotout .tout01').delegate( 'a', 'click', function(){ 
			var $this = $(this),
			indexNum = 1,
                        url = $this.attr('href'),
			recircid = 'HB2',
			title = $this.parent('.tout01 .txtcont a:first').html(),
                        omniTrax = '';
                        if (typeof(s_time.prop11) === "undefined") {
                            var prop = 'NOPROP';    
                        } else {
                            var prop = s_time.prop11.replace(/\s+/g, '_');
                        }
			if ($this.find('img').length > 0 ) {
			    omniTrax =  prop + '-' + recircid + '-' + indexNum + 'P' + '-' + title;
                            appendParam(url,'iid',omniTrax);
                            return false;
			} else {
			    omniTrax =  prop + '-' + recircid + '-' + indexNum + 'T' + '-' + title;
                            appendParam(url,'iid',omniTrax);
                            return false
			}
		})
		$('#mostpoptwotout .tout02').delegate( 'a', 'click', function(){ 
			var $this = $(this),
			indexNum = 2,
			recircid = 'HB2',
                        url = $this.attr('href'),
			title = $this.parent('.tout02 .txtcont a:first').html(),
                        omniTrax = '';
			if (typeof(s_time.prop11) === "undefined") {
                            var prop = 'NOPROP';    
                        } else {
                            var prop = s_time.prop11.replace(/\s+/g, '_');
                        }
			if ($this.find('img').length > 0 ) {
			    omniTrax =  prop + '-' + recircid + '-' + indexNum + 'P' + '-' + title;
                            appendParam(url,'iid',omniTrax);
                            return false;
			} else {
			    omniTrax =  prop + '-' + recircid + '-' + indexNum + 'T' + '-' + title;
                            appendParam(url,'iid',omniTrax);
                            return false
			}
		})
	}
        // omniture for hottest celebrity photos recirc module
	if ( $('#hottestcelebrityphotoswrapper').length > 0 ) {
		$('#hottestcelebrityphotoswrapper #hottestcelebrityphotos .tout .txtcont').find('ul').delegate('a', 'click', function(){
                        var $this = $(this),
                        recircid = 'HCP',
                        url = $this.attr('href'),
                        indexId = $this.parents('li').attr('id');
			indexNum = indexId.charAt( indexId.length-1 ),
                        indexNum = 1 + parseInt(indexNum),
                        omniTrax = '';
			if (typeof(s_time.prop11) === "undefined") {
                            var prop = 'NOPROP';    
                        } else {
                            var prop = s_time.prop11.replace(/\s+/g, '_');
                        }
			if ($(this).find('img').length > 0 ) {	
			    title = $this.parent().next().text();
			    omniTrax =  prop + '-' + recircid + '-' + indexNum + 'P' + '-' + title;
                            appendParam(url,'iid',omniTrax);
                            return false
			} else {
			    title = $this.text();
			    omniTrax =  prop + '-' + recircid + '-' + indexNum + 'T' + '-' + title;
                            appendParam(url,'iid',omniTrax);
                            return false
			}
			
		});
	}
}
IS.Video = {
    findtargetlist : function(){
        //alert(IS.Video.featrplaylist);
       // alert(IS.Video.playlist);
        if ( typeof(IS.Video.featrplaylist) === "undefined" || IS.Video.featrplaylist === "") {
            IS.Video.targetlist = IS.Video.playlist.split(',', 1);
        } else {
            IS.Video.targetlist = IS.Video.featrplaylist;
        }
    }
}
IS.Poll = {
    show_share : function(pollid){
        if ($('#poll_form_' + pollid + ' input[@type=radio]:checked').size() > 0){
	    pollanswer = $('#poll_form_' + pollid + ' input[@type=radio]:checked').val(),
	    polltext = $('#poll_form_' + pollid + ' input[@type=radio]:checked').next('span.poll_txt').text(),
	    polltitle = $('li#poll_'+ pollid + ' p.poll_question').text(),
	    pollcaption = 'I Voted for ' + polltext,
	    polldescription = 'Go to InStyle.com to vote now!',
	    pollurl = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
            if ( s_time.prop11 == 'look of the day' ){
		pollname = $('#caption_'+ pollid + ' h2').text() + '- Look of the Day - InStyle';
		pollpicture = $('li#slide_'+ pollid + ' img').attr('src');
	    } else {
                //DDM TBD change these out for element that would be appropriate for non LOTD textpolls
		//pollpicture = Poll.answer_by_id[pollanswer].image_source_url,
		//pollpack = Poll.article,
		//pollname = pollpack + ' : ' + polltitle;
	    }
	    $('#poll_form_' + pollid).after('<div class="pollmore"><input id="facebook_share_' + pollid + '" type="button" value=" Share your vote!" class="share-button btn-grey"></div>');
	    $('#facebook_share_' + pollid).css( {
		'visibility' : 'hidden'
		} ).click( function(){
		// DDM TBD trade out this slidedate var with a consistent var to make this code more resusable.
		var slidedate = $( '#date_' + pollid ).text(),
                slidetitle = $( '#caption_' + pollid + ' h2:first-child' ).text(),
                omninfo = 'look of the day-poll|FBShare|' + slidedate + '-' + slidetitle;
		omniTrackEv( omninfo );
		IS.Global.postToFacebook(pollurl,pollpicture,pollname,pollcaption,polldescription);
	    } );
	    $('#facebook_share_' + pollid).delay(500).css('visibility','visible').hide().fadeIn('slow');
            $('#poll_form_' + pollid + ' input[type=submit]').css({'visibility' : 'hidden','height' : '10px'});
	}
    }
}
// self running methods
$(document).ready( function() {
	ti_add_omniture_recirc();
        // added 3.15.12 to temporarily add a notation that a sponsored gallery is soponsered to be removed when long term solution is found 
        if($('#slide.spons .photobox').length> 0){
	    $('#slide.spons .photobox').prepend('<p>Sponsored Gallery</p>')
	}
});

$(window).load( function(){
	if ($('.tTip').length > 0) {
		$('.tTip').IStooltip();
	}
});
function plusClick(data) {
    if(data.state === "on"){
        var prop = (typeof s_time.prop11 === undefined) ? 'NOPROP11' : s_time.prop11,
        vendor = 'GooglePlus',
        channel = s_time.channel,
        date = '',
        slidetitle ='',
        gallery = '',
        package = '';
        var id = ( typeof IS.Photo !== 'undefined' ) ? IS.Photo.slideid : '';
	if ( prop == 'look of the day' ) {
	    var url = data.href;
	    if ( url.match('0,,,00.html') ) {
		var omninfo = vendor + '|look of the day-landing';
	    } else {
                if( id ){
                    // DDM the #date_id element was taken out 5.15.13 due to new design so no longer present I have to look up the date in the json created slide object
                    if($( IS.Photo.slides['slide_'+id] ).length > 0 ){
                        var arr = IS.Photo.slides['slide_'+id],
                        date = arr.published,
                        slidetitle = arr.title;
                    }
                    date = ( date == '' )? 'NODATE' : date;
                    slidetitle = ( slidetitle == '' )? 'NOTITLE' : slidetitle;
                    omninfo = vendor + '|' + prop + '|' + date + '-' + slidetitle;
                    //alert(omninfo);
                } else {
                    console.log('NO SLIDE ID FOR GOOGLE PLUS');
                }
	    }
        // if GALLERY BUT NOT LOOK OF THE DAY
        } else if ( IS.Global.is_gallery === true && typeof IS.LOTD === 'undefined' && ! typeof IS.WRN === 'undefined' ) {
            if( id ) {
                if($( IS.Photo.slides['slide_'+id] ).length > 0 ){
                        var arr = IS.Photo.slides['slide_'+id],
                        slidetitle = arr.title;
                }
                
                slidetitle = ( slidetitle == '' )? 'NOTITLE' : slidetitle;
                gallery = ( s_time.prop7 && s_time.prop7 != '' ) ? s_time.prop7 : 'NOPROP7';
                package = ( s_time.prop11 && s_time.prop11 != '' ) ? s_time.prop11 : 'NOPROP11';
                var omninfo = vendor + '|' + channel + '|' + package + '|' + gallery + '-' + slidetitle;
            } else {
                var omninfo = vendor + '|NOSLIDEID';
            }
	} else {
	    if ( typeof s_time.pageName !== 'undefined' ){
                var omninfo = vendor + '|' + s_time.pageName;
	    } else {
		var omninfo = vendor + '|NOPAGENAME';
	    }
	}
	omniTrackEv(omninfo);
    }
}
// BUZZFEED 7.10.13
var  str = location.href;
if ( str.indexOf("/photos/") !== -1 || str.indexOf("/instyle/lookoftheday/") !== -1 || str.indexOf("/instyle/best-beauty-buys/product/" ) !== -1 ) {
    BF_WIDGET_JS=document.createElement("script");
    BF_WIDGET_JS.type="text/javascript";
    BF_WIDGET_SRC="http://ct.buzzfeed.com/wd/UserWidget?u=instyle.com&to=1&or=vb&wid=1&cb=" + (new Date()).getTime();
    setTimeout(function(){document.getElementsByTagName("body")[0].appendChild(BF_WIDGET_JS);BF_WIDGET_JS.src=BF_WIDGET_SRC},1);
}
// Test for existence of new (tgx.js) library. Cast tgxAds as boolean.
var tgxAds = !!( typeof Tgx_init != 'undefined' );