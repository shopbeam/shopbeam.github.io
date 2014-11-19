(function () {
  if (typeof console == "undefined") {
    console = {
      log : function () {}
    }
  }
  console.log("console.log defined as " + console.log)
})();
/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);
/*! jQuery UI - v1.9.2 - 2013-05-12
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.button.js, jquery.ui.dialog.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */

(function(e,t){function i(t,n){var r,i,o,u=t.nodeName.toLowerCase();return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap=#"+i+"]")[0],!!o&&s(o))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().andSelf().filter(function(){return e.css(this,"visibility")==="hidden"}).length}var n=0,r=/^ui-id-\d+$/;e.ui=e.ui||{};if(e.ui.version)return;e.extend(e.ui,{version:"1.9.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,n){return typeof t=="number"?this.each(function(){var r=this;setTimeout(function(){e(r).focus(),n&&n.call(r)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length){var r=e(this[0]),i,s;while(r.length&&r[0]!==document){i=r.css("position");if(i==="absolute"||i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);if(!isNaN(s)&&s!==0)return s}r=r.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){r.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&i(t,!r)}}),e(function(){var t=document.body,n=t.appendChild(n=document.createElement("div"));n.offsetHeight,e.extend(n.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),e.support.minHeight=n.offsetHeight===100,e.support.selectstart="onselectstart"in n,t.removeChild(n).style.display="none"}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")})}}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),function(){var t=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];e.ui.ie=t.length?!0:!1,e.ui.ie6=parseFloat(t[1],10)===6}(),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n){var r,i=e.plugins[t];if(!i||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11)return;for(r=0;r<i.length;r++)e.options[i[r][0]]&&i[r][1].apply(e.element,n)}},contains:e.contains,hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)},isOverAxis:function(e,t,n){return e>t&&e<t+n},isOver:function(t,n,r,i,s,o){return e.ui.isOverAxis(t,r,s)&&e.ui.isOverAxis(n,i,o)}})})(jQuery);(function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(t,n,r){var i,s,o,u,a=t.split(".")[0];t=t.split(".")[1],i=a+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[a]=e[a]||{},s=e[a][t],o=e[a][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,i){e.isFunction(i)&&(r[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},r=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=r,s=i.apply(this,arguments),this._super=t,this._superApply=n,s}}())}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix:t},r,{constructor:o,namespace:a,widgetName:t,widgetBaseClass:i,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o)},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName||n;e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.jquery?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():e.data(this,s,new i(o,this))}),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetName,this),e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,n,r){var i,s=this;typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;return(typeof o=="string"?s[o]:o).apply(s,arguments)}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);var a=r.match(/^(\w+)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];l?i.delegate(l,f,u):n.bind(f,u)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&(e.effects.effect[u]||e.uiBackCompat!==!1&&e.effects[u])?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}}),e.uiBackCompat!==!1&&(e.Widget.prototype._getCreateOptions=function(){return e.metadata&&e.metadata.get(this.element[0])[this.widgetName]})})(jQuery);(function(e,t){var n=!1;e(document).mouseup(function(e){n=!1}),e.widget("ui.mouse",{version:"1.9.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target,t.widgetName+".preventClickEvent"))return e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(n)return;this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var r=this,i=t.which===1,s=typeof this.options.cancel=="string"&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;if(!i||s||!this._mouseCapture(t))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==!1;if(!this._mouseStarted)return t.preventDefault(),!0}return!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return r._mouseMove(e)},this._mouseUpDelegate=function(e){return r._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0,!0},_mouseMove:function(t){return!e.ui.ie||document.documentMode>=9||!!t.button?this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted):this._mouseUp(t)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(e){return this.mouseDelayMet},_mouseStart:function(e){},_mouseDrag:function(e){},_mouseStop:function(e){},_mouseCapture:function(e){return!0}})})(jQuery);(function(e,t){function h(e,t,n){return[parseInt(e[0],10)*(l.test(e[0])?t/100:1),parseInt(e[1],10)*(l.test(e[1])?n/100:1)]}function p(t,n){return parseInt(e.css(t,n),10)||0}e.ui=e.ui||{};var n,r=Math.max,i=Math.abs,s=Math.round,o=/left|center|right/,u=/top|center|bottom/,a=/[\+\-]\d+%?/,f=/^\w+/,l=/%$/,c=e.fn.position;e.position={scrollbarWidth:function(){if(n!==t)return n;var r,i,s=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return e("body").append(s),r=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,r===i&&(i=s[0].clientWidth),s.remove(),n=r-i},getScrollInfo:function(t){var n=t.isWindow?"":t.element.css("overflow-x"),r=t.isWindow?"":t.element.css("overflow-y"),i=n==="scroll"||n==="auto"&&t.width<t.element[0].scrollWidth,s=r==="scroll"||r==="auto"&&t.height<t.element[0].scrollHeight;return{width:i?e.position.scrollbarWidth():0,height:s?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),r=e.isWindow(n[0]);return{element:n,isWindow:r,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:r?n.width():n.outerWidth(),height:r?n.height():n.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return c.apply(this,arguments);t=e.extend({},t);var n,l,d,v,m,g=e(t.of),y=e.position.getWithinInfo(t.within),b=e.position.getScrollInfo(y),w=g[0],E=(t.collision||"flip").split(" "),S={};return w.nodeType===9?(l=g.width(),d=g.height(),v={top:0,left:0}):e.isWindow(w)?(l=g.width(),d=g.height(),v={top:g.scrollTop(),left:g.scrollLeft()}):w.preventDefault?(t.at="left top",l=d=0,v={top:w.pageY,left:w.pageX}):(l=g.outerWidth(),d=g.outerHeight(),v=g.offset()),m=e.extend({},v),e.each(["my","at"],function(){var e=(t[this]||"").split(" "),n,r;e.length===1&&(e=o.test(e[0])?e.concat(["center"]):u.test(e[0])?["center"].concat(e):["center","center"]),e[0]=o.test(e[0])?e[0]:"center",e[1]=u.test(e[1])?e[1]:"center",n=a.exec(e[0]),r=a.exec(e[1]),S[this]=[n?n[0]:0,r?r[0]:0],t[this]=[f.exec(e[0])[0],f.exec(e[1])[0]]}),E.length===1&&(E[1]=E[0]),t.at[0]==="right"?m.left+=l:t.at[0]==="center"&&(m.left+=l/2),t.at[1]==="bottom"?m.top+=d:t.at[1]==="center"&&(m.top+=d/2),n=h(S.at,l,d),m.left+=n[0],m.top+=n[1],this.each(function(){var o,u,a=e(this),f=a.outerWidth(),c=a.outerHeight(),w=p(this,"marginLeft"),x=p(this,"marginTop"),T=f+w+p(this,"marginRight")+b.width,N=c+x+p(this,"marginBottom")+b.height,C=e.extend({},m),k=h(S.my,a.outerWidth(),a.outerHeight());t.my[0]==="right"?C.left-=f:t.my[0]==="center"&&(C.left-=f/2),t.my[1]==="bottom"?C.top-=c:t.my[1]==="center"&&(C.top-=c/2),C.left+=k[0],C.top+=k[1],e.support.offsetFractions||(C.left=s(C.left),C.top=s(C.top)),o={marginLeft:w,marginTop:x},e.each(["left","top"],function(r,i){e.ui.position[E[r]]&&e.ui.position[E[r]][i](C,{targetWidth:l,targetHeight:d,elemWidth:f,elemHeight:c,collisionPosition:o,collisionWidth:T,collisionHeight:N,offset:[n[0]+k[0],n[1]+k[1]],my:t.my,at:t.at,within:y,elem:a})}),e.fn.bgiframe&&a.bgiframe(),t.using&&(u=function(e){var n=v.left-C.left,s=n+l-f,o=v.top-C.top,u=o+d-c,h={target:{element:g,left:v.left,top:v.top,width:l,height:d},element:{element:a,left:C.left,top:C.top,width:f,height:c},horizontal:s<0?"left":n>0?"right":"center",vertical:u<0?"top":o>0?"bottom":"middle"};l<f&&i(n+s)<l&&(h.horizontal="center"),d<c&&i(o+u)<d&&(h.vertical="middle"),r(i(n),i(s))>r(i(o),i(u))?h.important="horizontal":h.important="vertical",t.using.call(this,e,h)}),a.offset(e.extend(C,{using:u}))})},e.ui.position={fit:{left:function(e,t){var n=t.within,i=n.isWindow?n.scrollLeft:n.offset.left,s=n.width,o=e.left-t.collisionPosition.marginLeft,u=i-o,a=o+t.collisionWidth-s-i,f;t.collisionWidth>s?u>0&&a<=0?(f=e.left+u+t.collisionWidth-s-i,e.left+=u-f):a>0&&u<=0?e.left=i:u>a?e.left=i+s-t.collisionWidth:e.left=i:u>0?e.left+=u:a>0?e.left-=a:e.left=r(e.left-o,e.left)},top:function(e,t){var n=t.within,i=n.isWindow?n.scrollTop:n.offset.top,s=t.within.height,o=e.top-t.collisionPosition.marginTop,u=i-o,a=o+t.collisionHeight-s-i,f;t.collisionHeight>s?u>0&&a<=0?(f=e.top+u+t.collisionHeight-s-i,e.top+=u-f):a>0&&u<=0?e.top=i:u>a?e.top=i+s-t.collisionHeight:e.top=i:u>0?e.top+=u:a>0?e.top-=a:e.top=r(e.top-o,e.top)}},flip:{left:function(e,t){var n=t.within,r=n.offset.left+n.scrollLeft,s=n.width,o=n.isWindow?n.scrollLeft:n.offset.left,u=e.left-t.collisionPosition.marginLeft,a=u-o,f=u+t.collisionWidth-s-o,l=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0,c=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0,h=-2*t.offset[0],p,d;if(a<0){p=e.left+l+c+h+t.collisionWidth-s-r;if(p<0||p<i(a))e.left+=l+c+h}else if(f>0){d=e.left-t.collisionPosition.marginLeft+l+c+h-o;if(d>0||i(d)<f)e.left+=l+c+h}},top:function(e,t){var n=t.within,r=n.offset.top+n.scrollTop,s=n.height,o=n.isWindow?n.scrollTop:n.offset.top,u=e.top-t.collisionPosition.marginTop,a=u-o,f=u+t.collisionHeight-s-o,l=t.my[1]==="top",c=l?-t.elemHeight:t.my[1]==="bottom"?t.elemHeight:0,h=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight:0,p=-2*t.offset[1],d,v;a<0?(v=e.top+c+h+p+t.collisionHeight-s-r,e.top+c+h+p>a&&(v<0||v<i(a))&&(e.top+=c+h+p)):f>0&&(d=e.top-t.collisionPosition.marginTop+c+h+p-o,e.top+c+h+p>f&&(d>0||i(d)<f)&&(e.top+=c+h+p))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,n,r,i,s,o=document.getElementsByTagName("body")[0],u=document.createElement("div");t=document.createElement(o?"div":"body"),r={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&e.extend(r,{position:"absolute",left:"-1000px",top:"-1000px"});for(s in r)t.style[s]=r[s];t.appendChild(u),n=o||document.documentElement,n.insertBefore(t,n.firstChild),u.style.cssText="position: absolute; left: 10.7432222px;",i=e(u).offset().left,e.support.offsetFractions=i>10&&i<11,t.innerHTML="",n.removeChild(t)}(),e.uiBackCompat!==!1&&function(e){var n=e.fn.position;e.fn.position=function(r){if(!r||!r.offset)return n.call(this,r);var i=r.offset.split(" "),s=r.at.split(" ");return i.length===1&&(i[1]=i[0]),/^\d/.test(i[0])&&(i[0]="+"+i[0]),/^\d/.test(i[1])&&(i[1]="+"+i[1]),s.length===1&&(/left|center|right/.test(s[0])?s[1]="center":(s[1]=s[0],s[0]="center")),n.call(this,e.extend(r,{at:s[0]+i[0]+" "+s[1]+i[1],offset:t}))}}(jQuery)})(jQuery);(function(e,t){e.widget("ui.draggable",e.ui.mouse,{version:"1.9.2",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var n=this.options;return this.helper||n.disabled||e(t.target).is(".ui-resizable-handle")?!1:(this.handle=this._getHandle(t),this.handle?(e(n.iframeFix===!0?"iframe":n.iframeFix).each(function(){e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var n=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt),n.containment&&this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,n){this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute");if(!n){var r=this._uiHash();if(this._trigger("drag",t,r)===!1)return this._mouseUp({}),!1;this.position=r.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";return e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var n=!1;e.ui.ddmanager&&!this.options.dropBehaviour&&(n=e.ui.ddmanager.drop(this,t)),this.dropped&&(n=this.dropped,this.dropped=!1);var r=this.element[0],i=!1;while(r&&(r=r.parentNode))r==document&&(i=!0);if(!i&&this.options.helper==="original")return!1;if(this.options.revert=="invalid"&&!n||this.options.revert=="valid"&&n||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,n)){var s=this;e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){s._trigger("stop",t)!==!1&&s._clear()})}else this._trigger("stop",t)!==!1&&this._clear();return!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){var n=!this.options.handle||!e(this.options.handle,this.element).length?!0:!1;return e(this.options.handle,this.element).find("*").andSelf().each(function(){this==t.target&&(n=!0)}),n},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t])):n.helper=="clone"?this.element.clone().removeAttr("id"):this.element;return r.parents("body").length||r.appendTo(n.appendTo=="parent"?this.element[0].parentNode:n.appendTo),r[0]!=this.element[0]&&!/(fixed|absolute)/.test(r.css("position"))&&r.css("position","absolute"),r},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t=this.options;t.containment=="parent"&&(t.containment=this.helper[0].parentNode);if(t.containment=="document"||t.containment=="window")this.containment=[t.containment=="document"?0:e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t.containment=="document"?0:e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(t.containment=="document"?0:e(window).scrollLeft())+e(t.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(t.containment=="document"?0:e(window).scrollTop())+(e(t.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(t.containment)&&t.containment.constructor!=Array){var n=e(t.containment),r=n[0];if(!r)return;var i=n.offset(),s=e(r).css("overflow")!="hidden";this.containment=[(parseInt(e(r).css("borderLeftWidth"),10)||0)+(parseInt(e(r).css("paddingLeft"),10)||0),(parseInt(e(r).css("borderTopWidth"),10)||0)+(parseInt(e(r).css("paddingTop"),10)||0),(s?Math.max(r.scrollWidth,r.offsetWidth):r.offsetWidth)-(parseInt(e(r).css("borderLeftWidth"),10)||0)-(parseInt(e(r).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(s?Math.max(r.scrollHeight,r.offsetHeight):r.offsetHeight)-(parseInt(e(r).css("borderTopWidth"),10)||0)-(parseInt(e(r).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=n}else t.containment.constructor==Array&&(this.containment=t.containment)},_convertPositionTo:function(t,n){n||(n=this.position);var r=t=="absolute"?1:-1,i=this.options,s=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(s[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():o?0:s.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():o?0:s.scrollLeft())*r}},_generatePosition:function(t){var n=this.options,r=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(r[0].tagName),s=t.pageX,o=t.pageY;if(this.originalPosition){var u;if(this.containment){if(this.relative_container){var a=this.relative_container.offset();u=[this.containment[0]+a.left,this.containment[1]+a.top,this.containment[2]+a.left,this.containment[3]+a.top]}else u=this.containment;t.pageX-this.offset.click.left<u[0]&&(s=u[0]+this.offset.click.left),t.pageY-this.offset.click.top<u[1]&&(o=u[1]+this.offset.click.top),t.pageX-this.offset.click.left>u[2]&&(s=u[2]+this.offset.click.left),t.pageY-this.offset.click.top>u[3]&&(o=u[3]+this.offset.click.top)}if(n.grid){var f=n.grid[1]?this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1]:this.originalPageY;o=u?f-this.offset.click.top<u[1]||f-this.offset.click.top>u[3]?f-this.offset.click.top<u[1]?f+n.grid[1]:f-n.grid[1]:f:f;var l=n.grid[0]?this.originalPageX+Math.round((s-this.originalPageX)/n.grid[0])*n.grid[0]:this.originalPageX;s=u?l-this.offset.click.left<u[0]||l-this.offset.click.left>u[2]?l-this.offset.click.left<u[0]?l+n.grid[0]:l-n.grid[0]:l:l}}return{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():i?0:r.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:r.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,n,r){return r=r||this._uiHash(),e.ui.plugin.call(this,t,[n,r]),t=="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,n,r)},plugins:{},_uiHash:function(e){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,n){var r=e(this).data("draggable"),i=r.options,s=e.extend({},n,{item:r.element});r.sortables=[],e(i.connectToSortable).each(function(){var n=e.data(this,"sortable");n&&!n.options.disabled&&(r.sortables.push({instance:n,shouldRevert:n.options.revert}),n.refreshPositions(),n._trigger("activate",t,s))})},stop:function(t,n){var r=e(this).data("draggable"),i=e.extend({},n,{item:r.element});e.each(r.sortables,function(){this.instance.isOver?(this.instance.isOver=0,r.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,r.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,i))})},drag:function(t,n){var r=e(this).data("draggable"),i=this,s=function(t){var n=this.offset.click.top,r=this.offset.click.left,i=this.positionAbs.top,s=this.positionAbs.left,o=t.height,u=t.width,a=t.top,f=t.left;return e.ui.isOver(i+n,s+r,a,f,o,u)};e.each(r.sortables,function(s){var o=!1,u=this;this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(o=!0,e.each(r.sortables,function(){return this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this!=u&&this.instance._intersectsWith(this.instance.containerCache)&&e.ui.contains(u.instance.element[0],this.instance.element[0])&&(o=!1),o})),o?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(i).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return n.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=r.offset.click.top,this.instance.offset.click.left=r.offset.click.left,this.instance.offset.parent.left-=r.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=r.offset.parent.top-this.instance.offset.parent.top,r._trigger("toSortable",t),r.dropped=this.instance.element,r.currentItem=r.element,this.instance.fromOutside=r),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),r._trigger("fromSortable",t),r.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,n){var r=e("body"),i=e(this).data("draggable").options;r.css("cursor")&&(i._cursor=r.css("cursor")),r.css("cursor",i.cursor)},stop:function(t,n){var r=e(this).data("draggable").options;r._cursor&&e("body").css("cursor",r._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,n){var r=e(n.helper),i=e(this).data("draggable").options;r.css("opacity")&&(i._opacity=r.css("opacity")),r.css("opacity",i.opacity)},stop:function(t,n){var r=e(this).data("draggable").options;r._opacity&&e(n.helper).css("opacity",r._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(t,n){var r=e(this).data("draggable");r.scrollParent[0]!=document&&r.scrollParent[0].tagName!="HTML"&&(r.overflowOffset=r.scrollParent.offset())},drag:function(t,n){var r=e(this).data("draggable"),i=r.options,s=!1;if(r.scrollParent[0]!=document&&r.scrollParent[0].tagName!="HTML"){if(!i.axis||i.axis!="x")r.overflowOffset.top+r.scrollParent[0].offsetHeight-t.pageY<i.scrollSensitivity?r.scrollParent[0].scrollTop=s=r.scrollParent[0].scrollTop+i.scrollSpeed:t.pageY-r.overflowOffset.top<i.scrollSensitivity&&(r.scrollParent[0].scrollTop=s=r.scrollParent[0].scrollTop-i.scrollSpeed);if(!i.axis||i.axis!="y")r.overflowOffset.left+r.scrollParent[0].offsetWidth-t.pageX<i.scrollSensitivity?r.scrollParent[0].scrollLeft=s=r.scrollParent[0].scrollLeft+i.scrollSpeed:t.pageX-r.overflowOffset.left<i.scrollSensitivity&&(r.scrollParent[0].scrollLeft=s=r.scrollParent[0].scrollLeft-i.scrollSpeed)}else{if(!i.axis||i.axis!="x")t.pageY-e(document).scrollTop()<i.scrollSensitivity?s=e(document).scrollTop(e(document).scrollTop()-i.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<i.scrollSensitivity&&(s=e(document).scrollTop(e(document).scrollTop()+i.scrollSpeed));if(!i.axis||i.axis!="y")t.pageX-e(document).scrollLeft()<i.scrollSensitivity?s=e(document).scrollLeft(e(document).scrollLeft()-i.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<i.scrollSensitivity&&(s=e(document).scrollLeft(e(document).scrollLeft()+i.scrollSpeed))}s!==!1&&e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(r,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,n){var r=e(this).data("draggable"),i=r.options;r.snapElements=[],e(i.snap.constructor!=String?i.snap.items||":data(draggable)":i.snap).each(function(){var t=e(this),n=t.offset();this!=r.element[0]&&r.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:n.top,left:n.left})})},drag:function(t,n){var r=e(this).data("draggable"),i=r.options,s=i.snapTolerance,o=n.offset.left,u=o+r.helperProportions.width,a=n.offset.top,f=a+r.helperProportions.height;for(var l=r.snapElements.length-1;l>=0;l--){var c=r.snapElements[l].left,h=c+r.snapElements[l].width,p=r.snapElements[l].top,d=p+r.snapElements[l].height;if(!(c-s<o&&o<h+s&&p-s<a&&a<d+s||c-s<o&&o<h+s&&p-s<f&&f<d+s||c-s<u&&u<h+s&&p-s<a&&a<d+s||c-s<u&&u<h+s&&p-s<f&&f<d+s)){r.snapElements[l].snapping&&r.options.snap.release&&r.options.snap.release.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[l].item})),r.snapElements[l].snapping=!1;continue}if(i.snapMode!="inner"){var v=Math.abs(p-f)<=s,m=Math.abs(d-a)<=s,g=Math.abs(c-u)<=s,y=Math.abs(h-o)<=s;v&&(n.position.top=r._convertPositionTo("relative",{top:p-r.helperProportions.height,left:0}).top-r.margins.top),m&&(n.position.top=r._convertPositionTo("relative",{top:d,left:0}).top-r.margins.top),g&&(n.position.left=r._convertPositionTo("relative",{top:0,left:c-r.helperProportions.width}).left-r.margins.left),y&&(n.position.left=r._convertPositionTo("relative",{top:0,left:h}).left-r.margins.left)}var b=v||m||g||y;if(i.snapMode!="outer"){var v=Math.abs(p-a)<=s,m=Math.abs(d-f)<=s,g=Math.abs(c-o)<=s,y=Math.abs(h-u)<=s;v&&(n.position.top=r._convertPositionTo("relative",{top:p,left:0}).top-r.margins.top),m&&(n.position.top=r._convertPositionTo("relative",{top:d-r.helperProportions.height,left:0}).top-r.margins.top),g&&(n.position.left=r._convertPositionTo("relative",{top:0,left:c}).left-r.margins.left),y&&(n.position.left=r._convertPositionTo("relative",{top:0,left:h-r.helperProportions.width}).left-r.margins.left)}!r.snapElements[l].snapping&&(v||m||g||y||b)&&r.options.snap.snap&&r.options.snap.snap.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[l].item})),r.snapElements[l].snapping=v||m||g||y||b}}}),e.ui.plugin.add("draggable","stack",{start:function(t,n){var r=e(this).data("draggable").options,i=e.makeArray(e(r.stack)).sort(function(t,n){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(n).css("zIndex"),10)||0)});if(!i.length)return;var s=parseInt(i[0].style.zIndex)||0;e(i).each(function(e){this.style.zIndex=s+e}),this[0].style.zIndex=s+i.length}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,n){var r=e(n.helper),i=e(this).data("draggable").options;r.css("zIndex")&&(i._zIndex=r.css("zIndex")),r.css("zIndex",i.zIndex)},stop:function(t,n){var r=e(this).data("draggable").options;r._zIndex&&e(n.helper).css("zIndex",r._zIndex)}})})(jQuery);(function(e,t){e.widget("ui.droppable",{version:"1.9.2",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect"},_create:function(){var t=this.options,n=t.accept;this.isover=0,this.isout=1,this.accept=e.isFunction(n)?n:function(e){return e.is(n)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},e.ui.ddmanager.droppables[t.scope]=e.ui.ddmanager.droppables[t.scope]||[],e.ui.ddmanager.droppables[t.scope].push(this),t.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){var t=e.ui.ddmanager.droppables[this.options.scope];for(var n=0;n<t.length;n++)t[n]==this&&t.splice(n,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,n){t=="accept"&&(this.accept=e.isFunction(n)?n:function(e){return e.is(n)}),e.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var n=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),n&&this._trigger("activate",t,this.ui(n))},_deactivate:function(t){var n=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),n&&this._trigger("deactivate",t,this.ui(n))},_over:function(t){var n=e.ui.ddmanager.current;if(!n||(n.currentItem||n.element)[0]==this.element[0])return;this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(n)))},_out:function(t){var n=e.ui.ddmanager.current;if(!n||(n.currentItem||n.element)[0]==this.element[0])return;this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(n)))},_drop:function(t,n){var r=n||e.ui.ddmanager.current;if(!r||(r.currentItem||r.element)[0]==this.element[0])return!1;var i=!1;return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var t=e.data(this,"droppable");if(t.options.greedy&&!t.options.disabled&&t.options.scope==r.options.scope&&t.accept.call(t.element[0],r.currentItem||r.element)&&e.ui.intersect(r,e.extend(t,{offset:t.element.offset()}),t.options.tolerance))return i=!0,!1}),i?!1:this.accept.call(this.element[0],r.currentItem||r.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(r)),this.element):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(t,n,r){if(!n.offset)return!1;var i=(t.positionAbs||t.position.absolute).left,s=i+t.helperProportions.width,o=(t.positionAbs||t.position.absolute).top,u=o+t.helperProportions.height,a=n.offset.left,f=a+n.proportions.width,l=n.offset.top,c=l+n.proportions.height;switch(r){case"fit":return a<=i&&s<=f&&l<=o&&u<=c;case"intersect":return a<i+t.helperProportions.width/2&&s-t.helperProportions.width/2<f&&l<o+t.helperProportions.height/2&&u-t.helperProportions.height/2<c;case"pointer":var h=(t.positionAbs||t.position.absolute).left+(t.clickOffset||t.offset.click).left,p=(t.positionAbs||t.position.absolute).top+(t.clickOffset||t.offset.click).top,d=e.ui.isOver(p,h,l,a,n.proportions.height,n.proportions.width);return d;case"touch":return(o>=l&&o<=c||u>=l&&u<=c||o<l&&u>c)&&(i>=a&&i<=f||s>=a&&s<=f||i<a&&s>f);default:return!1}},e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,n){var r=e.ui.ddmanager.droppables[t.options.scope]||[],i=n?n.type:null,s=(t.currentItem||t.element).find(":data(droppable)").andSelf();e:for(var o=0;o<r.length;o++){if(r[o].options.disabled||t&&!r[o].accept.call(r[o].element[0],t.currentItem||t.element))continue;for(var u=0;u<s.length;u++)if(s[u]==r[o].element[0]){r[o].proportions.height=0;continue e}r[o].visible=r[o].element.css("display")!="none";if(!r[o].visible)continue;i=="mousedown"&&r[o]._activate.call(r[o],n),r[o].offset=r[o].element.offset(),r[o].proportions={width:r[o].element[0].offsetWidth,height:r[o].element[0].offsetHeight}}},drop:function(t,n){var r=!1;return e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options)return;!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance)&&(r=this._drop.call(this,n)||r),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=1,this.isover=0,this._deactivate.call(this,n))}),r},dragStart:function(t,n){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,n)})},drag:function(t,n){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,n),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible)return;var r=e.ui.intersect(t,this,this.options.tolerance),i=!r&&this.isover==1?"isout":r&&this.isover==0?"isover":null;if(!i)return;var s;if(this.options.greedy){var o=this.options.scope,u=this.element.parents(":data(droppable)").filter(function(){return e.data(this,"droppable").options.scope===o});u.length&&(s=e.data(u[0],"droppable"),s.greedyChild=i=="isover"?1:0)}s&&i=="isover"&&(s.isover=0,s.isout=1,s._out.call(s,n)),this[i]=1,this[i=="isout"?"isover":"isout"]=0,this[i=="isover"?"_over":"_out"].call(this,n),s&&i=="isout"&&(s.isout=0,s.isover=1,s._over.call(s,n))})},dragStop:function(t,n){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,n)}}})(jQuery);(function(e,t){e.widget("ui.resizable",e.ui.mouse,{version:"1.9.2",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1e3},_create:function(){var t=this,n=this.options;this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!n.aspectRatio,aspectRatio:n.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:n.helper||n.ghost||n.animate?n.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("resizable",this.element.data("resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=n.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se");if(this.handles.constructor==String){this.handles=="all"&&(this.handles="n,e,s,w,se,sw,ne,nw");var r=this.handles.split(",");this.handles={};for(var i=0;i<r.length;i++){var s=e.trim(r[i]),o="ui-resizable-"+s,u=e('<div class="ui-resizable-handle '+o+'"></div>');u.css({zIndex:n.zIndex}),"se"==s&&u.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(u)}}this._renderAxis=function(t){t=t||this.element;for(var n in this.handles){this.handles[n].constructor==String&&(this.handles[n]=e(this.handles[n],this.element).show());if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var r=e(this.handles[n],this.element),i=0;i=/sw|ne|nw|se|n|s/.test(n)?r.outerHeight():r.outerWidth();var s=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join("");t.css(s,i),this._proportionallyResize()}if(!e(this.handles[n]).length)continue}},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){if(!t.resizing){if(this.className)var e=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);t.axis=e&&e[1]?e[1]:"se"}}),n.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(n.disabled)return;e(this).removeClass("ui-resizable-autohide"),t._handles.show()}).mouseleave(function(){if(n.disabled)return;t.resizing||(e(this).addClass("ui-resizable-autohide"),t._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){t(this.element);var n=this.element;this.originalElement.css({position:n.css("position"),width:n.outerWidth(),height:n.outerHeight(),top:n.css("top"),left:n.css("left")}).insertAfter(n),n.remove()}return this.originalElement.css("resize",this.originalResizeStyle),t(this.originalElement),this},_mouseCapture:function(t){var n=!1;for(var r in this.handles)e(this.handles[r])[0]==t.target&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(t){var r=this.options,i=this.element.position(),s=this.element;this.resizing=!0,this.documentScroll={top:e(document).scrollTop(),left:e(document).scrollLeft()},(s.is(".ui-draggable")||/absolute/.test(s.css("position")))&&s.css({position:"absolute",top:i.top,left:i.left}),this._renderProxy();var o=n(this.helper.css("left")),u=n(this.helper.css("top"));r.containment&&(o+=e(r.containment).scrollLeft()||0,u+=e(r.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:o,top:u},this.size=this._helper?{width:s.outerWidth(),height:s.outerHeight()}:{width:s.width(),height:s.height()},this.originalSize=this._helper?{width:s.outerWidth(),height:s.outerHeight()}:{width:s.width(),height:s.height()},this.originalPosition={left:o,top:u},this.sizeDiff={width:s.outerWidth()-s.width(),height:s.outerHeight()-s.height()},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio=typeof r.aspectRatio=="number"?r.aspectRatio:this.originalSize.width/this.originalSize.height||1;var a=e(".ui-resizable-"+this.axis).css("cursor");return e("body").css("cursor",a=="auto"?this.axis+"-resize":a),s.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(e){var t=this.helper,n=this.options,r={},i=this,s=this.originalMousePosition,o=this.axis,u=e.pageX-s.left||0,a=e.pageY-s.top||0,f=this._change[o];if(!f)return!1;var l=f.apply(this,[e,u,a]);this._updateVirtualBoundaries(e.shiftKey);if(this._aspectRatio||e.shiftKey)l=this._updateRatio(l,e);return l=this._respectSize(l,e),this._propagate("resize",e),t.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"}),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),this._updateCache(l),this._trigger("resize",e,this.ui()),!1},_mouseStop:function(t){this.resizing=!1;var n=this.options,r=this;if(this._helper){var i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),o=s&&e.ui.hasScroll(i[0],"left")?0:r.sizeDiff.height,u=s?0:r.sizeDiff.width,a={width:r.helper.width()-u,height:r.helper.height()-o},f=parseInt(r.element.css("left"),10)+(r.position.left-r.originalPosition.left)||null,l=parseInt(r.element.css("top"),10)+(r.position.top-r.originalPosition.top)||null;n.animate||this.element.css(e.extend(a,{top:l,left:f})),r.helper.height(r.size.height),r.helper.width(r.size.width),this._helper&&!n.animate&&this._proportionallyResize()}return e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(e){var t=this.options,n,i,s,o,u;u={minWidth:r(t.minWidth)?t.minWidth:0,maxWidth:r(t.maxWidth)?t.maxWidth:Infinity,minHeight:r(t.minHeight)?t.minHeight:0,maxHeight:r(t.maxHeight)?t.maxHeight:Infinity};if(this._aspectRatio||e)n=u.minHeight*this.aspectRatio,s=u.minWidth/this.aspectRatio,i=u.maxHeight*this.aspectRatio,o=u.maxWidth/this.aspectRatio,n>u.minWidth&&(u.minWidth=n),s>u.minHeight&&(u.minHeight=s),i<u.maxWidth&&(u.maxWidth=i),o<u.maxHeight&&(u.maxHeight=o);this._vBoundaries=u},_updateCache:function(e){var t=this.options;this.offset=this.helper.offset(),r(e.left)&&(this.position.left=e.left),r(e.top)&&(this.position.top=e.top),r(e.height)&&(this.size.height=e.height),r(e.width)&&(this.size.width=e.width)},_updateRatio:function(e,t){var n=this.options,i=this.position,s=this.size,o=this.axis;return r(e.height)?e.width=e.height*this.aspectRatio:r(e.width)&&(e.height=e.width/this.aspectRatio),o=="sw"&&(e.left=i.left+(s.width-e.width),e.top=null),o=="nw"&&(e.top=i.top+(s.height-e.height),e.left=i.left+(s.width-e.width)),e},_respectSize:function(e,t){var n=this.helper,i=this._vBoundaries,s=this._aspectRatio||t.shiftKey,o=this.axis,u=r(e.width)&&i.maxWidth&&i.maxWidth<e.width,a=r(e.height)&&i.maxHeight&&i.maxHeight<e.height,f=r(e.width)&&i.minWidth&&i.minWidth>e.width,l=r(e.height)&&i.minHeight&&i.minHeight>e.height;f&&(e.width=i.minWidth),l&&(e.height=i.minHeight),u&&(e.width=i.maxWidth),a&&(e.height=i.maxHeight);var c=this.originalPosition.left+this.originalSize.width,h=this.position.top+this.size.height,p=/sw|nw|w/.test(o),d=/nw|ne|n/.test(o);f&&p&&(e.left=c-i.minWidth),u&&p&&(e.left=c-i.maxWidth),l&&d&&(e.top=h-i.minHeight),a&&d&&(e.top=h-i.maxHeight);var v=!e.width&&!e.height;return v&&!e.left&&e.top?e.top=null:v&&!e.top&&e.left&&(e.left=null),e},_proportionallyResize:function(){var t=this.options;if(!this._proportionallyResizeElements.length)return;var n=this.helper||this.element;for(var r=0;r<this._proportionallyResizeElements.length;r++){var i=this._proportionallyResizeElements[r];if(!this.borderDif){var s=[i.css("borderTopWidth"),i.css("borderRightWidth"),i.css("borderBottomWidth"),i.css("borderLeftWidth")],o=[i.css("paddingTop"),i.css("paddingRight"),i.css("paddingBottom"),i.css("paddingLeft")];this.borderDif=e.map(s,function(e,t){var n=parseInt(e,10)||0,r=parseInt(o[t],10)||0;return n+r})}i.css({height:n.height()-this.borderDif[0]-this.borderDif[2]||0,width:n.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var t=this.element,n=this.options;this.elementOffset=t.offset();if(this._helper){this.helper=this.helper||e('<div style="overflow:hidden;"></div>');var r=e.ui.ie6?1:0,i=e.ui.ie6?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+i,height:this.element.outerHeight()+i,position:"absolute",left:this.elementOffset.left-r+"px",top:this.elementOffset.top-r+"px",zIndex:++n.zIndex}),this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(e,t,n){return{width:this.originalSize.width+t}},w:function(e,t,n){var r=this.options,i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,n){var r=this.options,i=this.originalSize,s=this.originalPosition;return{top:s.top+n,height:i.height-n}},s:function(e,t,n){return{height:this.originalSize.height+n}},se:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},sw:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,n,r]))},ne:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},nw:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,n,r]))}},_propagate:function(t,n){e.ui.plugin.call(this,t,[n,this.ui()]),t!="resize"&&this._trigger(t,n,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","alsoResize",{start:function(t,n){var r=e(this).data("resizable"),i=r.options,s=function(t){e(t).each(function(){var t=e(this);t.data("resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};typeof i.alsoResize=="object"&&!i.alsoResize.parentNode?i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):e.each(i.alsoResize,function(e){s(e)}):s(i.alsoResize)},resize:function(t,n){var r=e(this).data("resizable"),i=r.options,s=r.originalSize,o=r.originalPosition,u={height:r.size.height-s.height||0,width:r.size.width-s.width||0,top:r.position.top-o.top||0,left:r.position.left-o.left||0},a=function(t,r){e(t).each(function(){var t=e(this),i=e(this).data("resizable-alsoresize"),s={},o=r&&r.length?r:t.parents(n.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var n=(i[t]||0)+(u[t]||0);n&&n>=0&&(s[t]=n||null)}),t.css(s)})};typeof i.alsoResize=="object"&&!i.alsoResize.nodeType?e.each(i.alsoResize,function(e,t){a(e,t)}):a(i.alsoResize)},stop:function(t,n){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","animate",{stop:function(t,n){var r=e(this).data("resizable"),i=r.options,s=r._proportionallyResizeElements,o=s.length&&/textarea/i.test(s[0].nodeName),u=o&&e.ui.hasScroll(s[0],"left")?0:r.sizeDiff.height,a=o?0:r.sizeDiff.width,f={width:r.size.width-a,height:r.size.height-u},l=parseInt(r.element.css("left"),10)+(r.position.left-r.originalPosition.left)||null,c=parseInt(r.element.css("top"),10)+(r.position.top-r.originalPosition.top)||null;r.element.animate(e.extend(f,c&&l?{top:c,left:l}:{}),{duration:i.animateDuration,easing:i.animateEasing,step:function(){var n={width:parseInt(r.element.css("width"),10),height:parseInt(r.element.css("height"),10),top:parseInt(r.element.css("top"),10),left:parseInt(r.element.css("left"),10)};s&&s.length&&e(s[0]).css({width:n.width,height:n.height}),r._updateCache(n),r._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(t,r){var i=e(this).data("resizable"),s=i.options,o=i.element,u=s.containment,a=u instanceof e?u.get(0):/parent/.test(u)?o.parent().get(0):u;if(!a)return;i.containerElement=e(a);if(/document/.test(u)||u==document)i.containerOffset={left:0,top:0},i.containerPosition={left:0,top:0},i.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight};else{var f=e(a),l=[];e(["Top","Right","Left","Bottom"]).each(function(e,t){l[e]=n(f.css("padding"+t))}),i.containerOffset=f.offset(),i.containerPosition=f.position(),i.containerSize={height:f.innerHeight()-l[3],width:f.innerWidth()-l[1]};var c=i.containerOffset,h=i.containerSize.height,p=i.containerSize.width,d=e.ui.hasScroll(a,"left")?a.scrollWidth:p,v=e.ui.hasScroll(a)?a.scrollHeight:h;i.parentData={element:a,left:c.left,top:c.top,width:d,height:v}}},resize:function(t,n){var r=e(this).data("resizable"),i=r.options,s=r.containerSize,o=r.containerOffset,u=r.size,a=r.position,f=r._aspectRatio||t.shiftKey,l={top:0,left:0},c=r.containerElement;c[0]!=document&&/static/.test(c.css("position"))&&(l=o),a.left<(r._helper?o.left:0)&&(r.size.width=r.size.width+(r._helper?r.position.left-o.left:r.position.left-l.left),f&&(r.size.height=r.size.width/r.aspectRatio),r.position.left=i.helper?o.left:0),a.top<(r._helper?o.top:0)&&(r.size.height=r.size.height+(r._helper?r.position.top-o.top:r.position.top),f&&(r.size.width=r.size.height*r.aspectRatio),r.position.top=r._helper?o.top:0),r.offset.left=r.parentData.left+r.position.left,r.offset.top=r.parentData.top+r.position.top;var h=Math.abs((r._helper?r.offset.left-l.left:r.offset.left-l.left)+r.sizeDiff.width),p=Math.abs((r._helper?r.offset.top-l.top:r.offset.top-o.top)+r.sizeDiff.height),d=r.containerElement.get(0)==r.element.parent().get(0),v=/relative|absolute/.test(r.containerElement.css("position"));d&&v&&(h-=r.parentData.left),h+r.size.width>=r.parentData.width&&(r.size.width=r.parentData.width-h,f&&(r.size.height=r.size.width/r.aspectRatio)),p+r.size.height>=r.parentData.height&&(r.size.height=r.parentData.height-p,f&&(r.size.width=r.size.height*r.aspectRatio))},stop:function(t,n){var r=e(this).data("resizable"),i=r.options,s=r.position,o=r.containerOffset,u=r.containerPosition,a=r.containerElement,f=e(r.helper),l=f.offset(),c=f.outerWidth()-r.sizeDiff.width,h=f.outerHeight()-r.sizeDiff.height;r._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:l.left-u.left-o.left,width:c,height:h}),r._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:l.left-u.left-o.left,width:c,height:h})}}),e.ui.plugin.add("resizable","ghost",{start:function(t,n){var r=e(this).data("resizable"),i=r.options,s=r.size;r.ghost=r.originalElement.clone(),r.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof i.ghost=="string"?i.ghost:""),r.ghost.appendTo(r.helper)},resize:function(t,n){var r=e(this).data("resizable"),i=r.options;r.ghost&&r.ghost.css({position:"relative",height:r.size.height,width:r.size.width})},stop:function(t,n){var r=e(this).data("resizable"),i=r.options;r.ghost&&r.helper&&r.helper.get(0).removeChild(r.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(t,n){var r=e(this).data("resizable"),i=r.options,s=r.size,o=r.originalSize,u=r.originalPosition,a=r.axis,f=i._aspectRatio||t.shiftKey;i.grid=typeof i.grid=="number"?[i.grid,i.grid]:i.grid;var l=Math.round((s.width-o.width)/(i.grid[0]||1))*(i.grid[0]||1),c=Math.round((s.height-o.height)/(i.grid[1]||1))*(i.grid[1]||1);/^(se|s|e)$/.test(a)?(r.size.width=o.width+l,r.size.height=o.height+c):/^(ne)$/.test(a)?(r.size.width=o.width+l,r.size.height=o.height+c,r.position.top=u.top-c):/^(sw)$/.test(a)?(r.size.width=o.width+l,r.size.height=o.height+c,r.position.left=u.left-l):(r.size.width=o.width+l,r.size.height=o.height+c,r.position.top=u.top-c,r.position.left=u.left-l)}});var n=function(e){return parseInt(e,10)||0},r=function(e){return!isNaN(parseInt(e,10))}})(jQuery);(function(e,t){e.widget("ui.selectable",e.ui.mouse,{version:"1.9.2",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch"},_create:function(){var t=this;this.element.addClass("ui-selectable"),this.dragged=!1;var n;this.refresh=function(){n=e(t.options.filter,t.element[0]),n.addClass("ui-selectee"),n.each(function(){var t=e(this),n=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:n.left,top:n.top,right:n.left+t.outerWidth(),bottom:n.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=n.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var n=this;this.opos=[t.pageX,t.pageY];if(this.options.disabled)return;var r=this.options;this.selectees=e(r.filter,this.element[0]),this._trigger("start",t),e(r.appendTo).append(this.helper),this.helper.css({left:t.clientX,top:t.clientY,width:0,height:0}),r.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var r=e.data(this,"selectable-item");r.startselected=!0,!t.metaKey&&!t.ctrlKey&&(r.$element.removeClass("ui-selected"),r.selected=!1,r.$element.addClass("ui-unselecting"),r.unselecting=!0,n._trigger("unselecting",t,{unselecting:r.element}))}),e(t.target).parents().andSelf().each(function(){var r=e.data(this,"selectable-item");if(r){var i=!t.metaKey&&!t.ctrlKey||!r.$element.hasClass("ui-selected");return r.$element.removeClass(i?"ui-unselecting":"ui-selected").addClass(i?"ui-selecting":"ui-unselecting"),r.unselecting=!i,r.selecting=i,r.selected=i,i?n._trigger("selecting",t,{selecting:r.element}):n._trigger("unselecting",t,{unselecting:r.element}),!1}})},_mouseDrag:function(t){var n=this;this.dragged=!0;if(this.options.disabled)return;var r=this.options,i=this.opos[0],s=this.opos[1],o=t.pageX,u=t.pageY;if(i>o){var a=o;o=i,i=a}if(s>u){var a=u;u=s,s=a}return this.helper.css({left:i,top:s,width:o-i,height:u-s}),this.selectees.each(function(){var a=e.data(this,"selectable-item");if(!a||a.element==n.element[0])return;var f=!1;r.tolerance=="touch"?f=!(a.left>o||a.right<i||a.top>u||a.bottom<s):r.tolerance=="fit"&&(f=a.left>i&&a.right<o&&a.top>s&&a.bottom<u),f?(a.selected&&(a.$element.removeClass("ui-selected"),a.selected=!1),a.unselecting&&(a.$element.removeClass("ui-unselecting"),a.unselecting=!1),a.selecting||(a.$element.addClass("ui-selecting"),a.selecting=!0,n._trigger("selecting",t,{selecting:a.element}))):(a.selecting&&((t.metaKey||t.ctrlKey)&&a.startselected?(a.$element.removeClass("ui-selecting"),a.selecting=!1,a.$element.addClass("ui-selected"),a.selected=!0):(a.$element.removeClass("ui-selecting"),a.selecting=!1,a.startselected&&(a.$element.addClass("ui-unselecting"),a.unselecting=!0),n._trigger("unselecting",t,{unselecting:a.element}))),a.selected&&!t.metaKey&&!t.ctrlKey&&!a.startselected&&(a.$element.removeClass("ui-selected"),a.selected=!1,a.$element.addClass("ui-unselecting"),a.unselecting=!0,n._trigger("unselecting",t,{unselecting:a.element})))}),!1},_mouseStop:function(t){var n=this;this.dragged=!1;var r=this.options;return e(".ui-unselecting",this.element[0]).each(function(){var r=e.data(this,"selectable-item");r.$element.removeClass("ui-unselecting"),r.unselecting=!1,r.startselected=!1,n._trigger("unselected",t,{unselected:r.element})}),e(".ui-selecting",this.element[0]).each(function(){var r=e.data(this,"selectable-item");r.$element.removeClass("ui-selecting").addClass("ui-selected"),r.selecting=!1,r.selected=!0,r.startselected=!0,n._trigger("selected",t,{selected:r.element})}),this._trigger("stop",t),this.helper.remove(),!1}})})(jQuery);(function(e,t){e.widget("ui.sortable",e.ui.mouse,{version:"1.9.2",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3},_create:function(){var e=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?e.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_setOption:function(t,n){t==="disabled"?(this.options[t]=n,this.widget().toggleClass("ui-sortable-disabled",!!n)):e.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(t,n){var r=this;if(this.reverting)return!1;if(this.options.disabled||this.options.type=="static")return!1;this._refreshItems(t);var i=null,s=e(t.target).parents().each(function(){if(e.data(this,r.widgetName+"-item")==r)return i=e(this),!1});e.data(t.target,r.widgetName+"-item")==r&&(i=e(t.target));if(!i)return!1;if(this.options.handle&&!n){var o=!1;e(this.options.handle,i).find("*").andSelf().each(function(){this==t.target&&(o=!0)});if(!o)return!1}return this.currentItem=i,this._removeCurrentsFromItems(),!0},_mouseStart:function(t,n,r){var i=this.options;this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!=this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),i.containment&&this._setContainment(),i.cursor&&(e("body").css("cursor")&&(this._storedCursor=e("body").css("cursor")),e("body").css("cursor",i.cursor)),i.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",i.opacity)),i.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",i.zIndex)),this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions();if(!r)for(var s=this.containers.length-1;s>=0;s--)this.containers[s]._trigger("activate",t,this._uiHash(this));return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs);if(this.options.scroll){var n=this.options,r=!1;this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<n.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+n.scrollSpeed:t.pageY-this.overflowOffset.top<n.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-n.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<n.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+n.scrollSpeed:t.pageX-this.overflowOffset.left<n.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-n.scrollSpeed)):(t.pageY-e(document).scrollTop()<n.scrollSensitivity?r=e(document).scrollTop(e(document).scrollTop()-n.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<n.scrollSensitivity&&(r=e(document).scrollTop(e(document).scrollTop()+n.scrollSpeed)),t.pageX-e(document).scrollLeft()<n.scrollSensitivity?r=e(document).scrollLeft(e(document).scrollLeft()-n.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<n.scrollSensitivity&&(r=e(document).scrollLeft(e(document).scrollLeft()+n.scrollSpeed))),r!==!1&&e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(var i=this.items.length-1;i>=0;i--){var s=this.items[i],o=s.item[0],u=this._intersectsWithPointer(s);if(!u)continue;if(s.instance!==this.currentContainer)continue;if(o!=this.currentItem[0]&&this.placeholder[u==1?"next":"prev"]()[0]!=o&&!e.contains(this.placeholder[0],o)&&(this.options.type=="semi-dynamic"?!e.contains(this.element[0],o):!0)){this.direction=u==1?"down":"up";if(this.options.tolerance!="pointer"&&!this._intersectsWithSides(s))break;this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,n){if(!t)return;e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t);if(this.options.revert){var r=this,i=this.placeholder.offset();this.reverting=!0,e(this.helper).animate({left:i.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:i.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){r._clear(t)})}else this._clear(t,n);return!1},cancel:function(){if(this.dragging){this._mouseUp({target:null}),this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var n=this._getItemsAsjQuery(t&&t.connected),r=[];return t=t||{},e(n).each(function(){var n=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[-=_](.+)/);n&&r.push((t.key||n[1]+"[]")+"="+(t.key&&t.expression?n[1]:n[2]))}),!r.length&&t.key&&r.push(t.key+"="),r.join("&")},toArray:function(t){var n=this._getItemsAsjQuery(t&&t.connected),r=[];return t=t||{},n.each(function(){r.push(e(t.item||this).attr(t.attribute||"id")||"")}),r},_intersectsWith:function(e){var t=this.positionAbs.left,n=t+this.helperProportions.width,r=this.positionAbs.top,i=r+this.helperProportions.height,s=e.left,o=s+e.width,u=e.top,a=u+e.height,f=this.offset.click.top,l=this.offset.click.left,c=r+f>u&&r+f<a&&t+l>s&&t+l<o;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?c:s<t+this.helperProportions.width/2&&n-this.helperProportions.width/2<o&&u<r+this.helperProportions.height/2&&i-this.helperProportions.height/2<a},_intersectsWithPointer:function(t){var n=this.options.axis==="x"||e.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),r=this.options.axis==="y"||e.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),i=n&&r,s=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return i?this.floating?o&&o=="right"||s=="down"?2:1:s&&(s=="down"?2:1):!1},_intersectsWithSides:function(t){var n=e.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),r=e.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),i=this._getDragVerticalDirection(),s=this._getDragHorizontalDirection();return this.floating&&s?s=="right"&&r||s=="left"&&!r:i&&(i=="down"&&n||i=="up"&&!n)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return e!=0&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return e!=0&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor==String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){var n=[],r=[],i=this._connectWith();if(i&&t)for(var s=i.length-1;s>=0;s--){var o=e(i[s]);for(var u=o.length-1;u>=0;u--){var a=e.data(o[u],this.widgetName);a&&a!=this&&!a.options.disabled&&r.push([e.isFunction(a.options.items)?a.options.items.call(a.element):e(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a])}}r.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(var s=r.length-1;s>=0;s--)r[s][0].each(function(){n.push(this)});return e(n)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var n=0;n<t.length;n++)if(t[n]==e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var n=this.items,r=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],i=this._connectWith();if(i&&this.ready)for(var s=i.length-1;s>=0;s--){var o=e(i[s]);for(var u=o.length-1;u>=0;u--){var a=e.data(o[u],this.widgetName);a&&a!=this&&!a.options.disabled&&(r.push([e.isFunction(a.options.items)?a.options.items.call(a.element[0],t,{item:this.currentItem}):e(a.options.items,a.element),a]),this.containers.push(a))}}for(var s=r.length-1;s>=0;s--){var f=r[s][1],l=r[s][0];for(var u=0,c=l.length;u<c;u++){var h=e(l[u]);h.data(this.widgetName+"-item",f),n.push({item:h,instance:f,width:0,height:0,left:0,top:0})}}},refreshPositions:function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());for(var n=this.items.length-1;n>=0;n--){var r=this.items[n];if(r.instance!=this.currentContainer&&this.currentContainer&&r.item[0]!=this.currentItem[0])continue;var i=this.options.toleranceElement?e(this.options.toleranceElement,r.item):r.item;t||(r.width=i.outerWidth(),r.height=i.outerHeight());var s=i.offset();r.left=s.left,r.top=s.top}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(var n=this.containers.length-1;n>=0;n--){var s=this.containers[n].element.offset();this.containers[n].containerCache.left=s.left,this.containers[n].containerCache.top=s.top,this.containers[n].containerCache.width=this.containers[n].element.outerWidth(),this.containers[n].containerCache.height=this.containers[n].element.outerHeight()}return this},_createPlaceholder:function(t){t=t||this;var n=t.options;if(!n.placeholder||n.placeholder.constructor==String){var r=n.placeholder;n.placeholder={element:function(){var n=e(document.createElement(t.currentItem[0].nodeName)).addClass(r||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];return r||(n.style.visibility="hidden"),n},update:function(e,i){if(r&&!n.forcePlaceholderSize)return;i.height()||i.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),i.width()||i.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10))}}}t.placeholder=e(n.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),n.placeholder.update(t,t.placeholder)},_contactContainers:function(t){var n=null,r=null;for(var i=this.containers.length-1;i>=0;i--){if(e.contains(this.currentItem[0],this.containers[i].element[0]))continue;if(this._intersectsWith(this.containers[i].containerCache)){if(n&&e.contains(this.containers[i].element[0],n.element[0]))continue;n=this.containers[i],r=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",t,this._uiHash(this)),this.containers[i].containerCache.over=0)}if(!n)return;if(this.containers.length===1)this.containers[r]._trigger("over",t,this._uiHash(this)),this.containers[r].containerCache.over=1;else{var s=1e4,o=null,u=this.containers[r].floating?"left":"top",a=this.containers[r].floating?"width":"height",f=this.positionAbs[u]+this.offset.click[u];for(var l=this.items.length-1;l>=0;l--){if(!e.contains(this.containers[r].element[0],this.items[l].item[0]))continue;if(this.items[l].item[0]==this.currentItem[0])continue;var c=this.items[l].item.offset()[u],h=!1;Math.abs(c-f)>Math.abs(c+this.items[l][a]-f)&&(h=!0,c+=this.items[l][a]),Math.abs(c-f)<s&&(s=Math.abs(c-f),o=this.items[l],this.direction=h?"up":"down")}if(!o&&!this.options.dropOnEmpty)return;this.currentContainer=this.containers[r],o?this._rearrange(t,o,null,!0):this._rearrange(t,null,this.containers[r].element,!0),this._trigger("change",t,this._uiHash()),this.containers[r]._trigger("change",t,this._uiHash(this)),this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[r]._trigger("over",t,this._uiHash(this)),this.containers[r].containerCache.over=1}},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t,this.currentItem])):n.helper=="clone"?this.currentItem.clone():this.currentItem;return r.parents("body").length||e(n.appendTo!="parent"?n.appendTo:this.currentItem[0].parentNode)[0].appendChild(r[0]),r[0]==this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(r[0].style.width==""||n.forceHelperSize)&&r.width(this.currentItem.width()),(r[0].style.height==""||n.forceHelperSize)&&r.height(this.currentItem.height()),r},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t=this.options;t.containment=="parent"&&(t.containment=this.helper[0].parentNode);if(t.containment=="document"||t.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e(t.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(e(t.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(t.containment)){var n=e(t.containment)[0],r=e(t.containment).offset(),i=e(n).css("overflow")!="hidden";this.containment=[r.left+(parseInt(e(n).css("borderLeftWidth"),10)||0)+(parseInt(e(n).css("paddingLeft"),10)||0)-this.margins.left,r.top+(parseInt(e(n).css("borderTopWidth"),10)||0)+(parseInt(e(n).css("paddingTop"),10)||0)-this.margins.top,r.left+(i?Math.max(n.scrollWidth,n.offsetWidth):n.offsetWidth)-(parseInt(e(n).css("borderLeftWidth"),10)||0)-(parseInt(e(n).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,r.top+(i?Math.max(n.scrollHeight,n.offsetHeight):n.offsetHeight)-(parseInt(e(n).css("borderTopWidth"),10)||0)-(parseInt(e(n).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(t,n){n||(n=this.position);var r=t=="absolute"?1:-1,i=this.options,s=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(s[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():o?0:s.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():o?0:s.scrollLeft())*r}},_generatePosition:function(t){var n=this.options,r=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(r[0].tagName);this.cssPosition=="relative"&&(this.scrollParent[0]==document||this.scrollParent[0]==this.offsetParent[0])&&(this.offset.relative=this._getRelativeOffset());var s=t.pageX,o=t.pageY;if(this.originalPosition){this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(s=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(s=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top));if(n.grid){var u=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1];o=this.containment?u-this.offset.click.top<this.containment[1]||u-this.offset.click.top>this.containment[3]?u-this.offset.click.top<this.containment[1]?u+n.grid[1]:u-n.grid[1]:u:u;var a=this.originalPageX+Math.round((s-this.originalPageX)/n.grid[0])*n.grid[0];s=this.containment?a-this.offset.click.left<this.containment[0]||a-this.offset.click.left>this.containment[2]?a-this.offset.click.left<this.containment[0]?a+n.grid[0]:a-n.grid[0]:a:a}}return{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():i?0:r.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:r.scrollLeft())}},_rearrange:function(e,t,n,r){n?n[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var i=this.counter;this._delay(function(){i==this.counter&&this.refreshPositions(!r)})},_clear:function(t,n){this.reverting=!1;var r=[];!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var i in this._storedCSS)if(this._storedCSS[i]=="auto"||this._storedCSS[i]=="static")this._storedCSS[i]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!n&&r.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),(this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!n&&r.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(n||(r.push(function(e){this._trigger("remove",e,this._uiHash())}),r.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),r.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer))));for(var i=this.containers.length-1;i>=0;i--)n||r.push(function(e){return function(t){e._trigger("deactivate",t,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over&&(r.push(function(e){return function(t){e._trigger("out",t,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over=0);this._storedCursor&&e("body").css("cursor",this._storedCursor),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex),this.dragging=!1;if(this.cancelHelperRemoval){if(!n){this._trigger("beforeStop",t,this._uiHash());for(var i=0;i<r.length;i++)r[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!1}n||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!=this.currentItem[0]&&this.helper.remove(),this.helper=null;if(!n){for(var i=0;i<r.length;i++)r[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var n=t||this;return{helper:n.helper,placeholder:n.placeholder||e([]),position:n.position,originalPosition:n.originalPosition,offset:n.positionAbs,item:n.currentItem,sender:t?t.element:null}}})})(jQuery);(function(e,t){var n,r,i,s,o="ui-button ui-widget ui-state-default ui-corner-all",u="ui-state-hover ui-state-active ",a="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",f=function(){var t=e(this).find(":ui-button");setTimeout(function(){t.button("refresh")},1)},l=function(t){var n=t.name,r=t.form,i=e([]);return n&&(r?i=e(r).find("[name='"+n+"']"):i=e("[name='"+n+"']",t.ownerDocument).filter(function(){return!this.form})),i};e.widget("ui.button",{version:"1.9.2",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,f),typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var t=this,u=this.options,a=this.type==="checkbox"||this.type==="radio",c=a?"":"ui-state-active",h="ui-state-focus";u.label===null&&(u.label=this.type==="input"?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(o).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(u.disabled)return;this===n&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){if(u.disabled)return;e(this).removeClass(c)}).bind("click"+this.eventNamespace,function(e){u.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,function(){t.buttonElement.addClass(h)}).bind("blur"+this.eventNamespace,function(){t.buttonElement.removeClass(h)}),a&&(this.element.bind("change"+this.eventNamespace,function(){if(s)return;t.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(e){if(u.disabled)return;s=!1,r=e.pageX,i=e.pageY}).bind("mouseup"+this.eventNamespace,function(e){if(u.disabled)return;if(r!==e.pageX||i!==e.pageY)s=!0})),this.type==="checkbox"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||s)return!1;e(this).toggleClass("ui-state-active"),t.buttonElement.attr("aria-pressed",t.element[0].checked)}):this.type==="radio"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||s)return!1;e(this).addClass("ui-state-active"),t.buttonElement.attr("aria-pressed","true");var n=t.element[0];l(n).not(n).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(u.disabled)return!1;e(this).addClass("ui-state-active"),n=this,t.document.one("mouseup",function(){n=null})}).bind("mouseup"+this.eventNamespace,function(){if(u.disabled)return!1;e(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(t){if(u.disabled)return!1;(t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active")}).bind("keyup"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",u.disabled),this._resetButton()},_determineButtonType:function(){var e,t,n;this.element.is("[type=checkbox]")?this.type="checkbox":this.element.is("[type=radio]")?this.type="radio":this.element.is("input")?this.type="input":this.type="button",this.type==="checkbox"||this.type==="radio"?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),n=this.element.is(":checked"),n&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",n)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(o+" "+u+" "+a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){this._super(e,t);if(e==="disabled"){t?this.element.prop("disabled",!0):this.element.prop("disabled",!1);return}this._resetButton()},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),this.type==="radio"?l(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label);return}var t=this.buttonElement.removeClass(a),n=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),r=this.options.icons,i=r.primary&&r.secondary,s=[];r.primary||r.secondary?(this.options.text&&s.push("ui-button-text-icon"+(i?"s":r.primary?"-primary":"-secondary")),r.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+r.primary+"'></span>"),r.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+r.secondary+"'></span>"),this.options.text||(s.push(i?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(n)))):s.push("ui-button-text-only"),t.addClass(s.join(" "))}}),e.widget("ui.buttonset",{version:"1.9.2",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){e==="disabled"&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery);(function(e,t){var n="ui-dialog ui-widget ui-widget-content ui-corner-all ",r={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},i={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};e.widget("ui.dialog",{version:"1.9.2",options:{autoOpen:!0,buttons:{},closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:!1,maxWidth:!1,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var n=e(this).css(t).offset().top;n<0&&e(this).css("top",t.top-n)}},resizable:!0,show:null,stack:!0,title:"",width:300,zIndex:1e3},_create:function(){this.originalTitle=this.element.attr("title"),typeof this.originalTitle!="string"&&(this.originalTitle=""),this.oldPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.options.title=this.options.title||this.originalTitle;var t=this,r=this.options,i=r.title||"&#160;",s,o,u,a,f;s=(this.uiDialog=e("<div>")).addClass(n+r.dialogClass).css({display:"none",outline:0,zIndex:r.zIndex}).attr("tabIndex",-1).keydown(function(n){r.closeOnEscape&&!n.isDefaultPrevented()&&n.keyCode&&n.keyCode===e.ui.keyCode.ESCAPE&&(t.close(n),n.preventDefault())}).mousedown(function(e){t.moveToTop(!1,e)}).appendTo("body"),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(s),o=(this.uiDialogTitlebar=e("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown",function(){s.focus()}).prependTo(s),u=e("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role","button").click(function(e){e.preventDefault(),t.close(e)}).appendTo(o),(this.uiDialogTitlebarCloseText=e("<span>")).addClass("ui-icon ui-icon-closethick").text(r.closeText).appendTo(u),a=e("<span>").uniqueId().addClass("ui-dialog-title").html(i).prependTo(o),f=(this.uiDialogButtonPane=e("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),(this.uiButtonSet=e("<div>")).addClass("ui-dialog-buttonset").appendTo(f),s.attr({role:"dialog","aria-labelledby":a.attr("id")}),o.find("*").add(o).disableSelection(),this._hoverable(u),this._focusable(u),r.draggable&&e.fn.draggable&&this._makeDraggable(),r.resizable&&e.fn.resizable&&this._makeResizable(),this._createButtons(r.buttons),this._isOpen=!1,e.fn.bgiframe&&s.bgiframe(),this._on(s,{keydown:function(t){if(!r.modal||t.keyCode!==e.ui.keyCode.TAB)return;var n=e(":tabbable",s),i=n.filter(":first"),o=n.filter(":last");if(t.target===o[0]&&!t.shiftKey)return i.focus(1),!1;if(t.target===i[0]&&t.shiftKey)return o.focus(1),!1}})},_init:function(){this.options.autoOpen&&this.open()},_destroy:function(){var e,t=this.oldPosition;this.overlay&&this.overlay.destroy(),this.uiDialog.hide(),this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},close:function(t){var n=this,r,i;if(!this._isOpen)return;if(!1===this._trigger("beforeClose",t))return;return this._isOpen=!1,this.overlay&&this.overlay.destroy(),this.options.hide?this._hide(this.uiDialog,this.options.hide,function(){n._trigger("close",t)}):(this.uiDialog.hide(),this._trigger("close",t)),e.ui.dialog.overlay.resize(),this.options.modal&&(r=0,e(".ui-dialog").each(function(){this!==n.uiDialog[0]&&(i=e(this).css("z-index"),isNaN(i)||(r=Math.max(r,i)))}),e.ui.dialog.maxZ=r),this},isOpen:function(){return this._isOpen},moveToTop:function(t,n){var r=this.options,i;return r.modal&&!t||!r.stack&&!r.modal?this._trigger("focus",n):(r.zIndex>e.ui.dialog.maxZ&&(e.ui.dialog.maxZ=r.zIndex),this.overlay&&(e.ui.dialog.maxZ+=1,e.ui.dialog.overlay.maxZ=e.ui.dialog.maxZ,this.overlay.$el.css("z-index",e.ui.dialog.overlay.maxZ)),i={scrollTop:this.element.scrollTop(),scrollLeft:this.element.scrollLeft()},e.ui.dialog.maxZ+=1,this.uiDialog.css("z-index",e.ui.dialog.maxZ),this.element.attr(i),this._trigger("focus",n),this)},open:function(){if(this._isOpen)return;var t,n=this.options,r=this.uiDialog;return this._size(),this._position(n.position),r.show(n.show),this.overlay=n.modal?new e.ui.dialog.overlay(this):null,this.moveToTop(!0),t=this.element.find(":tabbable"),t.length||(t=this.uiDialogButtonPane.find(":tabbable"),t.length||(t=r)),t.eq(0).focus(),this._isOpen=!0,this._trigger("open"),this},_createButtons:function(t){var n=this,r=!1;this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),typeof t=="object"&&t!==null&&e.each(t,function(){return!(r=!0)}),r?(e.each(t,function(t,r){var i,s;r=e.isFunction(r)?{click:r,text:t}:r,r=e.extend({type:"button"},r),s=r.click,r.click=function(){s.apply(n.element[0],arguments)},i=e("<button></button>",r).appendTo(n.uiButtonSet),e.fn.button&&i.button()}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog)):this.uiDialog.removeClass("ui-dialog-buttons")},_makeDraggable:function(){function r(e){return{position:e.position,offset:e.offset}}var t=this,n=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(n,i){e(this).addClass("ui-dialog-dragging"),t._trigger("dragStart",n,r(i))},drag:function(e,n){t._trigger("drag",e,r(n))},stop:function(i,s){n.position=[s.position.left-t.document.scrollLeft(),s.position.top-t.document.scrollTop()],e(this).removeClass("ui-dialog-dragging"),t._trigger("dragStop",i,r(s)),e.ui.dialog.overlay.resize()}})},_makeResizable:function(n){function u(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}n=n===t?this.options.resizable:n;var r=this,i=this.options,s=this.uiDialog.css("position"),o=typeof n=="string"?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:i.maxWidth,maxHeight:i.maxHeight,minWidth:i.minWidth,minHeight:this._minHeight(),handles:o,start:function(t,n){e(this).addClass("ui-dialog-resizing"),r._trigger("resizeStart",t,u(n))},resize:function(e,t){r._trigger("resize",e,u(t))},stop:function(t,n){e(this).removeClass("ui-dialog-resizing"),i.height=e(this).height(),i.width=e(this).width(),r._trigger("resizeStop",t,u(n)),e.ui.dialog.overlay.resize()}}).css("position",s).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var e=this.options;return e.height==="auto"?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(t){var n=[],r=[0,0],i;if(t){if(typeof t=="string"||typeof t=="object"&&"0"in t)n=t.split?t.split(" "):[t[0],t[1]],n.length===1&&(n[1]=n[0]),e.each(["left","top"],function(e,t){+n[e]===n[e]&&(r[e]=n[e],n[e]=t)}),t={my:n[0]+(r[0]<0?r[0]:"+"+r[0])+" "+n[1]+(r[1]<0?r[1]:"+"+r[1]),at:n.join(" ")};t=e.extend({},e.ui.dialog.prototype.options.position,t)}else t=e.ui.dialog.prototype.options.position;i=this.uiDialog.is(":visible"),i||this.uiDialog.show(),this.uiDialog.position(t),i||this.uiDialog.hide()},_setOptions:function(t){var n=this,s={},o=!1;e.each(t,function(e,t){n._setOption(e,t),e in r&&(o=!0),e in i&&(s[e]=t)}),o&&this._size(),this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",s)},_setOption:function(t,r){var i,s,o=this.uiDialog;switch(t){case"buttons":this._createButtons(r);break;case"closeText":this.uiDialogTitlebarCloseText.text(""+r);break;case"dialogClass":o.removeClass(this.options.dialogClass).addClass(n+r);break;case"disabled":r?o.addClass("ui-dialog-disabled"):o.removeClass("ui-dialog-disabled");break;case"draggable":i=o.is(":data(draggable)"),i&&!r&&o.draggable("destroy"),!i&&r&&this._makeDraggable();break;case"position":this._position(r);break;case"resizable":s=o.is(":data(resizable)"),s&&!r&&o.resizable("destroy"),s&&typeof r=="string"&&o.resizable("option","handles",r),!s&&r!==!1&&this._makeResizable(r);break;case"title":e(".ui-dialog-title",this.uiDialogTitlebar).html(""+(r||"&#160;"))}this._super(t,r)},_size:function(){var t,n,r,i=this.options,s=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0}),i.minWidth>i.width&&(i.width=i.minWidth),t=this.uiDialog.css({height:"auto",width:i.width}).outerHeight(),n=Math.max(0,i.minHeight-t),i.height==="auto"?e.support.minHeight?this.element.css({minHeight:n,height:"auto"}):(this.uiDialog.show(),r=this.element.css("height","auto").height(),s||this.uiDialog.hide(),this.element.height(Math.max(r,n))):this.element.height(Math.max(i.height-t,0)),this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}}),e.extend(e.ui.dialog,{uuid:0,maxZ:0,getTitleId:function(e){var t=e.attr("id");return t||(this.uuid+=1,t=this.uuid),"ui-dialog-title-"+t},overlay:function(t){this.$el=e.ui.dialog.overlay.create(t)}}),e.extend(e.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:e.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(e){return e+".dialog-overlay"}).join(" "),create:function(t){this.instances.length===0&&(setTimeout(function(){e.ui.dialog.overlay.instances.length&&e(document).bind(e.ui.dialog.overlay.events,function(t){if(e(t.target).zIndex()<e.ui.dialog.overlay.maxZ)return!1})},1),e(window).bind("resize.dialog-overlay",e.ui.dialog.overlay.resize));var n=this.oldInstances.pop()||e("<div>").addClass("ui-widget-overlay");return e(document).bind("keydown.dialog-overlay",function(r){var i=e.ui.dialog.overlay.instances;i.length!==0&&i[i.length-1]===n&&t.options.closeOnEscape&&!r.isDefaultPrevented()&&r.keyCode&&r.keyCode===e.ui.keyCode.ESCAPE&&(t.close(r),r.preventDefault())}),n.appendTo(document.body).css({width:this.width(),height:this.height()}),e.fn.bgiframe&&n.bgiframe(),this.instances.push(n),n},destroy:function(t){var n=e.inArray(t,this.instances),r=0;n!==-1&&this.oldInstances.push(this.instances.splice(n,1)[0]),this.instances.length===0&&e([document,window]).unbind(".dialog-overlay"),t.height(0).width(0).remove(),e.each(this.instances,function(){r=Math.max(r,this.css("z-index"))}),this.maxZ=r},height:function(){var t,n;return e.ui.ie?(t=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),n=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight),t<n?e(window).height()+"px":t+"px"):e(document).height()+"px"},width:function(){var t,n;return e.ui.ie?(t=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),n=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth),t<n?e(window).width()+"px":t+"px"):e(document).width()+"px"},resize:function(){var t=e([]);e.each(e.ui.dialog.overlay.instances,function(){t=t.add(this)}),t.css({width:0,height:0}).css({width:e.ui.dialog.overlay.width(),height:e.ui.dialog.overlay.height()})}}),e.extend(e.ui.dialog.overlay.prototype,{destroy:function(){e.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
/*!
 * jQuery blockUI plugin
 * Version 2.33 (29-MAR-2010)
 * @requires jQuery v1.2.3 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2008 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */

;(function($) {

if (/1\.(0|1|2)\.(0|1|2)/.test($.fn.jquery) || /^1.1/.test($.fn.jquery)) {
	alert('blockUI requires jQuery v1.2.3 or later!  You are using v' + $.fn.jquery);
	return;
}

$.fn._fadeIn = $.fn.fadeIn;

var noOp = function() {};

// this bit is to ensure we don't call setExpression when we shouldn't (with extra muscle to handle
// retarded userAgent strings on Vista)
var mode = document.documentMode || 0;
var setExpr = $.browser.msie && (($.browser.version < 8 && !mode) || mode < 8);
var ie6 = $.browser.msie && /MSIE 6.0/.test(navigator.userAgent) && !mode;

// global $ methods for blocking/unblocking the entire page
$.blockUI   = function(opts) { install(window, opts); };
$.unblockUI = function(opts) { remove(window, opts); };

// convenience method for quick growl-like notifications  (http://www.google.com/search?q=growl)
$.growlUI = function(title, message, timeout, onClose) {
	var $m = $('<div class="growlUI"></div>');
	if (title) $m.append('<h1>'+title+'</h1>');
	if (message) $m.append('<h2>'+message+'</h2>');
	if (timeout == undefined) timeout = 3000;
	$.blockUI({
		message: $m, fadeIn: 700, fadeOut: 1000, centerY: false,
		timeout: timeout, showOverlay: false,
		onUnblock: onClose, 
		css: $.blockUI.defaults.growlCSS
	});
};

// plugin method for blocking element content
$.fn.block = function(opts) {
	return this.unblock({ fadeOut: 0 }).each(function() {
		if ($.css(this,'position') == 'static')
			this.style.position = 'relative';
		if ($.browser.msie)
			this.style.zoom = 1; // force 'hasLayout'
		install(this, opts);
	});
};

// plugin method for unblocking element content
$.fn.unblock = function(opts) {
	return this.each(function() {
		remove(this, opts);
	});
};

$.blockUI.version = 2.33; // 2nd generation blocking at no extra cost!

// override these in your code to change the default behavior and style
$.blockUI.defaults = {
	// message displayed when blocking (use null for no message)
	message:  '<h1>Please wait...</h1>',

	title: null,	  // title string; only used when theme == true
	draggable: true,  // only used when theme == true (requires jquery-ui.js to be loaded)
	
	theme: false, // set to true to use with jQuery UI themes
	
	// styles for the message when blocking; if you wish to disable
	// these and use an external stylesheet then do this in your code:
	// $.blockUI.defaults.css = {};
	css: {
		padding:	0,
		margin:		0,
		width:		'30%',
		top:		'40%',
		left:		'35%',
		textAlign:	'center',
		color:		'#000',
		border:		'3px solid #aaa',
		backgroundColor:'#fff',
		cursor:		'wait'
	},
	
	// minimal style set used when themes are used
	themedCSS: {
		width:	'30%',
		top:	'40%',
		left:	'35%'
	},

	// styles for the overlay
	overlayCSS:  {
		background: '#fff url(../images/spinner.gif) center center no-repeat',
		opacity:	  	 0.8,
		cursor:		  	 'wait'
	},

	// styles applied when using $.growlUI
	growlCSS: {
		width:  	'350px',
		top:		'10px',
		left:   	'',
		right:  	'10px',
		border: 	'none',
		padding:	'5px',
		opacity:	0.6,
		cursor: 	'default',
		color:		'#fff',
		backgroundColor: '#000',
		'-webkit-border-radius': '10px',
		'-moz-border-radius':	 '10px',
		'border-radius': 		 '10px'
	},
	
	// IE issues: 'about:blank' fails on HTTPS and javascript:false is s-l-o-w
	// (hat tip to Jorge H. N. de Vasconcelos)
	iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank',

	// force usage of iframe in non-IE browsers (handy for blocking applets)
	forceIframe: false,

	// z-index for the blocking overlay
	baseZ: 1000,

	// set these to true to have the message automatically centered
	centerX: true, // <-- only effects element blocking (page block controlled via css above)
	centerY: true,

	// allow body element to be stetched in ie6; this makes blocking look better
	// on "short" pages.  disable if you wish to prevent changes to the body height
	allowBodyStretch: true,

	// enable if you want key and mouse events to be disabled for content that is blocked
	bindEvents: true,

	// be default blockUI will supress tab navigation from leaving blocking content
	// (if bindEvents is true)
	constrainTabKey: true,

	// fadeIn time in millis; set to 0 to disable fadeIn on block
	fadeIn:  100,

	// fadeOut time in millis; set to 0 to disable fadeOut on unblock
	fadeOut:  100,

	// time in millis to wait before auto-unblocking; set to 0 to disable auto-unblock
	timeout: 0,

	// disable if you don't want to show the overlay
	showOverlay: true,

	// if true, focus will be placed in the first available input field when
	// page blocking
	focusInput: true,

	// suppresses the use of overlay styles on FF/Linux (due to performance issues with opacity)
	applyPlatformOpacityRules: true,
	
	// callback method invoked when fadeIn has completed and blocking message is visible
	onBlock: null,

	// callback method invoked when unblocking has completed; the callback is
	// passed the element that has been unblocked (which is the window object for page
	// blocks) and the options that were passed to the unblock call:
	//	 onUnblock(element, options)
	onUnblock: null,

	// don't ask; if you really must know: http://groups.google.com/group/jquery-en/browse_thread/thread/36640a8730503595/2f6a79a77a78e493#2f6a79a77a78e493
	quirksmodeOffsetHack: 4
};

// private data and functions follow...

var pageBlock = null;
var pageBlockEls = [];

function install(el, opts) {
	var full = (el == window);
	var msg = opts && opts.message !== undefined ? opts.message : undefined;
	opts = $.extend({}, $.blockUI.defaults, opts || {});
	opts.overlayCSS = $.extend({}, $.blockUI.defaults.overlayCSS, opts.overlayCSS || {});
	var css = $.extend({}, $.blockUI.defaults.css, opts.css || {});
	var themedCSS = $.extend({}, $.blockUI.defaults.themedCSS, opts.themedCSS || {});
	msg = msg === undefined ? opts.message : msg;

	// remove the current block (if there is one)
	if (full && pageBlock)
		remove(window, {fadeOut:0});

	// if an existing element is being used as the blocking content then we capture
	// its current place in the DOM (and current display style) so we can restore
	// it when we unblock
	if (msg && typeof msg != 'string' && (msg.parentNode || msg.jquery)) {
		var node = msg.jquery ? msg[0] : msg;
		var data = {};
		$(el).data('blockUI.history', data);
		data.el = node;
		data.parent = node.parentNode;
		data.display = node.style.display;
		data.position = node.style.position;
		if (data.parent)
			data.parent.removeChild(node);
	}

	var z = opts.baseZ;

	// blockUI uses 3 layers for blocking, for simplicity they are all used on every platform;
	// layer1 is the iframe layer which is used to supress bleed through of underlying content
	// layer2 is the overlay layer which has opacity and a wait cursor (by default)
	// layer3 is the message content that is displayed while blocking

	var lyr1 = ($.browser.msie || opts.forceIframe) 
		? $('<iframe class="blockUI" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+opts.iframeSrc+'"></iframe>')
		: $('<div class="blockUI" style="display:none"></div>');
	var lyr2 = $('<div class="blockUI blockOverlay" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');
	
	var lyr3, s;
	if (opts.theme && full) {
		s = '<div class="blockUI blockMsg blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+z+';display:none;position:fixed">' +
				'<div class="ui-widget-header ui-dialog-titlebar blockTitle">'+(opts.title || '&nbsp;')+'</div>' +
				'<div class="ui-widget-content ui-dialog-content"></div>' +
			'</div>';
	}
	else if (opts.theme) {
		s = '<div class="blockUI blockMsg blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+z+';display:none;position:absolute">' +
				'<div class="ui-widget-header ui-dialog-titlebar blockTitle">'+(opts.title || '&nbsp;')+'</div>' +
				'<div class="ui-widget-content ui-dialog-content"></div>' +
			'</div>';
	}
	else if (full) {
		s = '<div class="blockUI blockMsg blockPage" style="z-index:'+z+';display:none;position:fixed"></div>';
	}			
	else {
		s = '<div class="blockUI blockMsg blockElement" style="z-index:'+z+';display:none;position:absolute"></div>';
	}
	lyr3 = $(s);

	// if we have a message, style it
	if (msg) {
		if (opts.theme) {
			lyr3.css(themedCSS);
			lyr3.addClass('ui-widget-content');
		}
		else 
			lyr3.css(css);
	}

	// style the overlay
	if (!opts.applyPlatformOpacityRules || !($.browser.mozilla && /Linux/.test(navigator.platform)))
		lyr2.css(opts.overlayCSS);
	lyr2.css('position', full ? 'fixed' : 'absolute');

	// make iframe layer transparent in IE
	if ($.browser.msie || opts.forceIframe)
		lyr1.css('opacity',0.0);

	//$([lyr1[0],lyr2[0],lyr3[0]]).appendTo(full ? 'body' : el);
	var layers = [lyr1,lyr2,lyr3], $par = full ? $('body') : $(el);
	$.each(layers, function() {
		this.appendTo($par);
	});
	
	if (opts.theme && opts.draggable && $.fn.draggable) {
		lyr3.draggable({
			handle: '.ui-dialog-titlebar',
			cancel: 'li'
		});
	}

	// ie7 must use absolute positioning in quirks mode and to account for activex issues (when scrolling)
	var expr = setExpr && (!$.boxModel || $('object,embed', full ? null : el).length > 0);
	if (ie6 || expr) {
		// give body 100% height
		if (full && opts.allowBodyStretch && $.boxModel)
			$('html,body').css('height','100%');

		// fix ie6 issue when blocked element has a border width
		if ((ie6 || !$.boxModel) && !full) {
			var t = sz(el,'borderTopWidth'), l = sz(el,'borderLeftWidth');
			var fixT = t ? '(0 - '+t+')' : 0;
			var fixL = l ? '(0 - '+l+')' : 0;
		}

		// simulate fixed position
		$.each([lyr1,lyr2,lyr3], function(i,o) {
			var s = o[0].style;
			s.position = 'absolute';
			if (i < 2) {
				full ? s.setExpression('height','Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.boxModel?0:'+opts.quirksmodeOffsetHack+') + "px"')
					 : s.setExpression('height','this.parentNode.offsetHeight + "px"');
				full ? s.setExpression('width','jQuery.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"')
					 : s.setExpression('width','this.parentNode.offsetWidth + "px"');
				if (fixL) s.setExpression('left', fixL);
				if (fixT) s.setExpression('top', fixT);
			}
			else if (opts.centerY) {
				if (full) s.setExpression('top','(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
				s.marginTop = 0;
			}
			else if (!opts.centerY && full) {
				var top = (opts.css && opts.css.top) ? parseInt(opts.css.top) : 0;
				var expression = '((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + '+top+') + "px"';
				s.setExpression('top',expression);
			}
		});
	}

	// show the message
	if (msg) {
		if (opts.theme)
			lyr3.find('.ui-widget-content').append(msg);
		else
			lyr3.append(msg);
		if (msg.jquery || msg.nodeType)
			$(msg).show();
	}

	if (($.browser.msie || opts.forceIframe) && opts.showOverlay)
		lyr1.show(); // opacity is zero
	if (opts.fadeIn) {
		var cb = opts.onBlock ? opts.onBlock : noOp;
		var cb1 = (opts.showOverlay && !msg) ? cb : noOp;
		var cb2 = msg ? cb : noOp;
		if (opts.showOverlay)
			lyr2._fadeIn(opts.fadeIn, cb1);
		if (msg)
			lyr3._fadeIn(opts.fadeIn, cb2);
	}
	else {
		if (opts.showOverlay)
			lyr2.show();
		if (msg)
			lyr3.show();
		if (opts.onBlock)
			opts.onBlock();
	}

	// bind key and mouse events
	bind(1, el, opts);

	if (full) {
		pageBlock = lyr3[0];
		pageBlockEls = $(':input:enabled:visible',pageBlock);
		if (opts.focusInput)
			setTimeout(focus, 20);
	}
	else
		center(lyr3[0], opts.centerX, opts.centerY);

	if (opts.timeout) {
		// auto-unblock
		var to = setTimeout(function() {
			full ? $.unblockUI(opts) : $(el).unblock(opts);
		}, opts.timeout);
		$(el).data('blockUI.timeout', to);
	}
};

// remove the block
function remove(el, opts) {
	var full = (el == window);
	var $el = $(el);
	var data = $el.data('blockUI.history');
	var to = $el.data('blockUI.timeout');
	if (to) {
		clearTimeout(to);
		$el.removeData('blockUI.timeout');
	}
	opts = $.extend({}, $.blockUI.defaults, opts || {});
	bind(0, el, opts); // unbind events
	
	var els;
	if (full) // crazy selector to handle odd field errors in ie6/7
		els = $('body').children().filter('.blockUI').add('body > .blockUI');
	else
		els = $('.blockUI', el);

	if (full)
		pageBlock = pageBlockEls = null;

	if (opts.fadeOut) {
		els.fadeOut(opts.fadeOut);
		setTimeout(function() { reset(els,data,opts,el); }, opts.fadeOut);
	}
	else
		reset(els, data, opts, el);
};

// move blocking element back into the DOM where it started
function reset(els,data,opts,el) {
	els.each(function(i,o) {
		// remove via DOM calls so we don't lose event handlers
		if (this.parentNode)
			this.parentNode.removeChild(this);
	});

	if (data && data.el) {
		data.el.style.display = data.display;
		data.el.style.position = data.position;
		if (data.parent)
			data.parent.appendChild(data.el);
		$(el).removeData('blockUI.history');
	}

	if (typeof opts.onUnblock == 'function')
		opts.onUnblock(el,opts);
};

// bind/unbind the handler
function bind(b, el, opts) {
	var full = el == window, $el = $(el);

	// don't bother unbinding if there is nothing to unbind
	if (!b && (full && !pageBlock || !full && !$el.data('blockUI.isBlocked')))
		return;
	if (!full)
		$el.data('blockUI.isBlocked', b);

	// don't bind events when overlay is not in use or if bindEvents is false
	if (!opts.bindEvents || (b && !opts.showOverlay)) 
		return;

	// bind anchors and inputs for mouse and key events
	var events = 'mousedown mouseup keydown keypress';
	b ? $(document).bind(events, opts, handler) : $(document).unbind(events, handler);

// former impl...
//	   var $e = $('a,:input');
//	   b ? $e.bind(events, opts, handler) : $e.unbind(events, handler);
};

// event handler to suppress keyboard/mouse events when blocking
function handler(e) {
	// allow tab navigation (conditionally)
	if (e.keyCode && e.keyCode == 9) {
		if (pageBlock && e.data.constrainTabKey) {
			var els = pageBlockEls;
			var fwd = !e.shiftKey && e.target == els[els.length-1];
			var back = e.shiftKey && e.target == els[0];
			if (fwd || back) {
				setTimeout(function(){focus(back)},10);
				return false;
			}
		}
	}
	// allow events within the message content
	if ($(e.target).parents('div.blockMsg').length > 0)
		return true;

	// allow events for content that is not being blocked
	return $(e.target).parents().children().filter('div.blockUI').length == 0;
};

function focus(back) {
	if (!pageBlockEls)
		return;
	var e = pageBlockEls[back===true ? pageBlockEls.length-1 : 0];
	if (e)
		e.focus();
};

function center(el, x, y) {
	var p = el.parentNode, s = el.style;
	var l = ((p.offsetWidth - el.offsetWidth)/2) - sz(p,'borderLeftWidth');
	var t = ((p.offsetHeight - el.offsetHeight)/2) - sz(p,'borderTopWidth');
	if (x) s.left = l > 0 ? (l+'px') : '0';
	if (y) s.top  = t > 0 ? (t+'px') : '0';
};

function sz(el, p) {
	return parseInt($.css(el,p))||0;
};

})(jQuery);

if(!this.JSON){this.JSON={};}
(function(){function f(n){return n<10?'0'+n:n;}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+
partial.join(',\n'+gap)+'\n'+
mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+
mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}
if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};}}());
var NO_BLOCK_UI = 1
var NO_ERROR_FUNCTION = function () {}
var DEFAULT_ERROR_FUNCTION = function (message) { alert(message) }

var Observer = function() {
    this.observations = [];
};

var Observation = function(name, func) {
    this.name = name;
    this.func = func;
};

Observer.prototype = {
    observe: function(name, func) {
        var exists = this.observations.findAll(function(i) {
            return i.name == name && i.func == func; }).length > 0;
        if (!exists) { this.observations.push(new Observation(name, func)); }
    },
    unobserve: function(name, func) {
        this.observations.remove(function(i) {
            return i.name == name && i.func == func;
        });
    },
    fire: function(name, data, scope) {
        var funcs = this.observations.findAll(function(i) {
            return i.name == name; });
        funcs.forEach(function(i) { i.func.call(scope || window, data); });
    }
};

// MyGlam main object
//
var MG = {
  badError: function(error) {
    alert("Cannot communicate with main server. Check your internet connection, or try again later (" + error + ")");
  },

  load: function(path, callback, blockObject, error, scope) {
    if (blockObject) {
      if (blockObject != NO_BLOCK_UI) blockObject.block();
    } else
      $.blockUI();
    if (path.indexOf('?') < 0)
      path += "?t=" + (new Date()).getTime();
    else
      path += "&t=" + (new Date()).getTime();
    $.ajax({
      url: path,
      type: 'GET',
      dataType: 'html',
      success: function(data) {
        if (blockObject) {
          if (blockObject != NO_BLOCK_UI) blockObject.unblock();
        } else
          $.unblockUI();
        if (data && callback)
          callback.call(scope, data);
      },
      error: function(req, status, err) {
        if (blockObject)
          if (blockObject != NO_BLOCK_UI) blockObject.unblock();
        else
          $.unblockUI();
        if (error)
          error.call(scope, err);
        else
          alert(err)
      }
    });
  },

  call: function(url, params, callback, error, blockObject, scope, secure, no_error) {
    var ajaxParams = {
      url: url,
      type: "POST",
      success: function(data) {
        console.log('MG.call success: ' + url)
        console.log(data)
        if (blockObject) {
          if (blockObject != NO_BLOCK_UI) {
            blockObject.unblock();
          }
        } else {
          $.unblockUI();
        }

        if (data.error) {
          if (error)
            error.call(scope, data.error);
          else
            DEFAULT_ERROR_FUNCTION(data.error)
          return;
        }
        if (callback && typeof data.result != "undefined")
          callback.call(scope, data.result);
      },
      error: function(req, status, error) {
        if (blockObject)
          if (blockObject != NO_BLOCK_UI) blockObject.unblock();
        else
          $.unblockUI();
        if (!no_error) MG.badError(error);
      }
    }

    if (isJSONP(secure)) {
      ajaxParams.dataType = "jsonp"
      ajaxParams.data = {"jsonpData": JSON.stringify(params).replace(/\\u000a/gi, "\\n")}
    } else {
      ajaxParams.data = JSON.stringify(params).replace(/\\u000a/gi, "\\n")
    }
    
    if (secure) ajaxParams.url = 'https://' + window.location.hostname + url
    
    if (blockObject) {
      if (blockObject != NO_BLOCK_UI) blockObject.block();
    }
    else {
      $.blockUI();
    }

    console.log("MG.call: " + ajaxParams.url)
    console.log(ajaxParams.data)
    $.ajax(ajaxParams);
  },

  callNoBlock: function(url, params, callback, error, scope, secure, no_error) {
    this.call(url, params, callback, error, NO_BLOCK_UI, scope, secure, no_error)
  },
  callSSL: function(url, params, callback, error, blockObject, scope, no_error) {
    this.call(url, params, callback, error, blockObject, scope, true, no_error)
  },
  callPassive: function (url, params, callback, error, blockObject, scope, secure) {
    this.call(url, params, callback, error, blockObject, scope, secure, true)
  }
};

$(document).ready(function() {
  $.ajaxSetup({
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      timeout: 15 * 60 * 1000 // 15 minute timeout
  });
  //$(window).error(function(e){ }); // default error handler
  if ($.blockUI) {
    $.blockUI.defaults.overlayCSS["z-index"] = "1000000";
    $.blockUI.defaults.css.border = 'none';
    $.blockUI.defaults.css.cursor = 'default';
    $.blockUI.defaults.overlayCSS.cursor = 'default';
    $.blockUI.defaults.message = '';
    $.blockUI.defaults.overlayCSS.background = "#fff url(/images/ajax_loader-heart.gif) center center no-repeat";
  }
});

function isJSONP(secure) {
  if (secure && window.location.protocol == "https:") return false
  if (!secure && window.location.protocol == "http:") return false
  return true
}
/*	
 *	jQuery dotdotdot 1.5.1
 *	
 *	Copyright (c) 2012 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Plugin website:
 *	dotdotdot.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


(function( $ )
{
	if ( $.fn.dotdotdot )
	{
		return;
	}

	$.fn.dotdotdot = function( o )
	{
		if ( this.length == 0 )
		{
			debug( true, 'No element found for "' + this.selector + '".' );
			return this;
		}
		if ( this.length > 1 )
		{
			return this.each(
				function()
				{
					$(this).dotdotdot( o );
				}
			);
		}


		var $dot = this;

		if ( $dot.data( 'dotdotdot' ) )
		{
			$dot.trigger( 'destroy.dot' );
		}

		$dot.bind_events = function()
		{
			$dot.bind(
				'update.dot',
				function( e, c )
				{
					e.preventDefault();
					e.stopPropagation();

					opts.maxHeight = ( typeof opts.height == 'number' ) 
						? opts.height 
						: getTrueInnerHeight( $dot );

					opts.maxHeight += opts.tolerance;

					if ( typeof c != 'undefined' )
					{
						if ( typeof c == 'string' || c instanceof HTMLElement )
						{
					 		c = $('<div />').append( c ).contents();
						}
						if ( c instanceof $ )
						{
							orgContent = c;
						}
					}

					$inr = $dot.wrapInner( '<div class="dotdotdot" />' ).children();
					$inr.empty()
						.append( orgContent.clone( true ) )
						.css({
							'height'	: 'auto',
							'width'		: 'auto',
							'border'	: 'none',
							'padding'	: 0,
							'margin'	: 0
						});

					var after = false,
						trunc = false;

					if ( conf.afterElement )
					{
						after = conf.afterElement.clone( true );
						conf.afterElement.remove();
					}
					if ( test( $inr, opts ) )
					{
						if ( opts.wrap == 'children' )
						{
							trunc = children( $inr, opts, after );
						}
						else
						{
							trunc = ellipsis( $inr, $dot, $inr, opts, after );
						}
					}
					$inr.replaceWith( $inr.contents() );
					$inr = null;
					
					if ( $.isFunction( opts.callback ) )
					{
						opts.callback.call( $dot[ 0 ], trunc, orgContent );
					}

					conf.isTruncated = trunc;
					return trunc;
				}

			).bind(
				'isTruncated.dot',
				function( e, fn )
				{
					e.preventDefault();
					e.stopPropagation();

					if ( typeof fn == 'function' )
					{
						fn.call( $dot[ 0 ], conf.isTruncated );
					}
					return conf.isTruncated;
				}

			).bind(
				'originalContent.dot',
				function( e, fn )
				{
					e.preventDefault();
					e.stopPropagation();

					if ( typeof fn == 'function' )
					{
						fn.call( $dot[ 0 ], orgContent );
					}
					return orgContent;
				}

			).bind(
				'destroy.dot',
				function( e )
				{
					e.preventDefault();
					e.stopPropagation();

					$dot.unwatch()
						.unbind_events()
						.empty()
						.append( orgContent )
						.data( 'dotdotdot', false );
				}
			);
			return $dot;
		};	//	/bind_events

		$dot.unbind_events = function()
		{
			$dot.unbind('.dot');
			return $dot;
		};	//	/unbind_events

		$dot.watch = function()
		{
			$dot.unwatch();
			if ( opts.watch == 'window' )
			{
				var $window = $(window),
					_wWidth = $window.width(),
					_wHeight = $window.height(); 

				$window.bind(
					'resize.dot' + conf.dotId,
					function()
					{
						if ( _wWidth != $window.width() || _wHeight != $window.height() || !opts.windowResizeFix )
						{
							_wWidth = $window.width();
							_wHeight = $window.height();
	
							if ( watchInt )
							{
								clearInterval( watchInt );
							}
							watchInt = setTimeout(
								function()
								{
									$dot.trigger( 'update.dot' );
								}, 10
							);
						}
					}
				);
			}
			else
			{
				watchOrg = getSizes( $dot );
				watchInt = setInterval(
					function()
					{
						var watchNew = getSizes( $dot );
						if ( watchOrg.width  != watchNew.width ||
							 watchOrg.height != watchNew.height )
						{
							$dot.trigger( 'update.dot' );
							watchOrg = getSizes( $dot );
						}
					}, 100
				);
			}
			return $dot;
		};
		$dot.unwatch = function()
		{
			$(window).unbind( 'resize.dot' + conf.dotId );
			if ( watchInt )
			{
				clearInterval( watchInt );
			}
			return $dot;
		};

		var	orgContent	= $dot.contents(),
			opts 		= $.extend( true, {}, $.fn.dotdotdot.defaults, o ),
			conf		= {},
			watchOrg	= {},
			watchInt	= null,
			$inr		= null;

		conf.afterElement	= getElement( opts.after, $dot );
		conf.isTruncated	= false;
		conf.dotId			= dotId++;


		$dot.data( 'dotdotdot', true )
			.bind_events()
			.trigger( 'update.dot' );

		if ( opts.watch )
		{
			$dot.watch();
		}

		return $dot;
	};


	//	public
	$.fn.dotdotdot.defaults = {
		'ellipsis'	: '... ',
		'wrap'		: 'word',
		'lastCharacter': {
			'remove'		: [ ' ', ',', ';', '.', '!', '?' ],
			'noEllipsis'	: []
		},
		'tolerance'	: 0,
		'callback'	: null,
		'after'		: null,
		'height'	: null,
		'watch'		: false,
		'windowResizeFix': true,
		'debug'		: false
	};
	

	//	private
	var dotId = 1;

	function children( $elem, o, after )
	{
		var $elements 	= $elem.children(),
			isTruncated	= false;

		$elem.empty();

		for ( var a = 0, l = $elements.length; a < l; a++ )
		{
			var $e = $elements.eq( a );
			$elem.append( $e );
			if ( after )
			{
				$elem.append( after );
			}
			if ( test( $elem, o ) )
			{
				$e.remove();
				isTruncated = true;
				break;
			}
			else
			{
				if ( after )
				{
					after.remove();
				}
			}
		}
		return isTruncated;
	}
	function ellipsis( $elem, $d, $i, o, after )
	{
		var $elements 	= $elem.contents(),
			isTruncated	= false;

		$elem.empty();

		var notx = 'table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, select, optgroup, option, textarea, script, style';
		for ( var a = 0, l = $elements.length; a < l; a++ )
		{

			if ( isTruncated )
			{
				break;
			}

			var e	= $elements[ a ],
				$e	= $(e);

			if ( typeof e == 'undefined' )
			{
				continue;
			}

			$elem.append( $e );
			if ( after )
			{
				var func = ( $elem.is( notx ) )
					? 'after'
					: 'append';
				$elem[ func ]( after );
			}
			if ( e.nodeType == 3 )
			{
				if ( test( $i, o ) )
				{
					isTruncated = ellipsisElement( $e, $d, $i, o, after );
				}
			}
			else
			{
				isTruncated = ellipsis( $e, $d, $i, o, after );
			}

			if ( !isTruncated )
			{
				if ( after )
				{
					after.remove();
				}
			}
		}
		return isTruncated;
	}
	function ellipsisElement( $e, $d, $i, o, after )
	{
		var isTruncated	= false,
			e			= $e[ 0 ];

		if ( typeof e == 'undefined' )
		{
			return false;
		}

		var seporator	= ( o.wrap == 'letter' ) ? '' : ' ',
			textArr		= getTextContent( e ).split( seporator ),
			position 	= -1,
			midPos		= -1,
			startPos	= 0,
			endPos		= textArr.length - 1;

		while ( startPos <= endPos )
		{
			var m = Math.floor( ( startPos + endPos ) / 2 );
			if ( m == midPos ) 
			{
				break;
			}
			midPos = m;

			setTextContent( e, textArr.slice( 0, midPos + 1 ).join( seporator ) + o.ellipsis );

			if ( !test( $i, o ) )
			{
				position	= midPos;
				startPos	= midPos; 
			}
			else
			{
				endPos		= midPos;
			}				
		}	
	
		if ( position != -1 )
		{
			var txt = textArr.slice( 0, position + 1 ).join( seporator );
			isTruncated = true;

			while( $.inArray( txt.slice( -1 ), o.lastCharacter.remove ) > -1 )
			{
				txt = txt.slice( 0, -1 );
			}
			if ( $.inArray( txt.slice( -1 ), o.lastCharacter.noEllipsis ) < 0 )
			{
				txt += o.ellipsis;
			}
			setTextContent( e, txt );
		}
		else
		{
			var $w = $e.parent();
			$e.remove();
			$n = $w.contents().eq( -1 );

			isTruncated = ellipsisElement( $n, $d, $i, o, after );
		}

		return isTruncated;
	}
	function test( $i, o )
	{
		return $i.innerHeight() > o.maxHeight;
	}
	function getSizes( $d )
	{
		return {
			'width'	: $d.innerWidth(),
			'height': $d.innerHeight()
		};
	}
	function setTextContent( e, content )
	{
		if ( e.innerText )
		{
			e.innerText = content;
		}
		else if ( e.nodeValue )
		{
			e.nodeValue = content;
		}
		else if (e.textContent)
		{
			e.textContent = content;
		}
	}
	function getTextContent( e )
	{
		if ( e.innerText )
		{
			return e.innerText;
		}
		else if ( e.nodeValue )
		{
			return e.nodeValue;
		}
		else if ( e.textContent )
		{
			return e.textContent;
		}
		else
		{
			return "";
		}
	}
	function getElement( e, $i )
	{
		if ( typeof e == 'undefined' )
		{
			return false;
		}
		if ( !e )
		{
			return false;
		}
		if ( typeof e == 'string' )
		{
			e = $(e, $i);
			return ( e.length )
				? e 
				: false;
		}
		if ( typeof e == 'object' )
		{
			return ( typeof e.jquery == 'undefined' )
				? false
				: e;
		}
		return false;
	}
	function getTrueInnerHeight( $el )
	{
		var h = $el.innerHeight(),
			a = [ 'paddingTop', 'paddingBottom' ];

		for ( z = 0, l = a.length; z < l; z++ ) {
			var m = parseInt( $el.css( a[ z ] ), 10 );
			if ( isNaN( m ) )
			{
				m = 0;
			}
			h -= m;
		}
		return h;
	}
	function debug( d, m )
	{
		if ( !d )
		{
			return false;
		}
		if ( typeof m == 'string' )
		{
			m = 'dotdotdot: ' + m;
		}
		else
		{
			m = [ 'dotdotdot:', m ];
		}

		if ( window.console && window.console.log )
		{
			window.console.log( m );
		}
		return false;
	}
	

	//	override jQuery.html
	var _orgHtml = $.fn.html;
    $.fn.html = function( str ) {
		if ( typeof str != 'undefined' )
		{
			if ( this.data( 'dotdotdot' ) )
			{
				if ( typeof str != 'function' )
				{
					return this.trigger( 'update', [ str ] );
				}
			}
			return _orgHtml.call( this, str );
		}
		return _orgHtml.call( this );
    };


	//	override jQuery.text
	var _orgText = $.fn.text;
    $.fn.text = function( str ) {
		if ( typeof str != 'undefined' )
		{
			if ( this.data( 'dotdotdot' ) )
			{
				var temp = $( '<div />' );
				temp.text( str );
				str = temp.html();
				temp.remove();
				return this.trigger( 'update', [ str ] );
			}
			return _orgText.call( this, str );
		}
        return _orgText.call( this );
    };


})( jQuery );
/**
* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne brian(at)cherne(dot)net
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);
/*
 * Copyright (c) 2009 Simo Kinnunen.
 * Licensed under the MIT license.
 *
 * @version 1.09i
 */
var Cufon=(function(){var m=function(){return m.replace.apply(null,arguments)};var x=m.DOM={ready:(function(){var C=false,E={loaded:1,complete:1};var B=[],D=function(){if(C){return}C=true;for(var F;F=B.shift();F()){}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",D,false);window.addEventListener("pageshow",D,false)}if(!window.opera&&document.readyState){(function(){E[document.readyState]?D():setTimeout(arguments.callee,10)})()}if(document.readyState&&document.createStyleSheet){(function(){try{document.body.doScroll("left");D()}catch(F){setTimeout(arguments.callee,1)}})()}q(window,"load",D);return function(F){if(!arguments.length){D()}else{C?F():B.push(F)}}})(),root:function(){return document.documentElement||document.body}};var n=m.CSS={Size:function(C,B){this.value=parseFloat(C);this.unit=String(C).match(/[a-z%]*$/)[0]||"px";this.convert=function(D){return D/B*this.value};this.convertFrom=function(D){return D/this.value*B};this.toString=function(){return this.value+this.unit}},addClass:function(C,B){var D=C.className;C.className=D+(D&&" ")+B;return C},color:j(function(C){var B={};B.color=C.replace(/^rgba\((.*?),\s*([\d.]+)\)/,function(E,D,F){B.opacity=parseFloat(F);return"rgb("+D+")"});return B}),fontStretch:j(function(B){if(typeof B=="number"){return B}if(/%$/.test(B)){return parseFloat(B)/100}return{"ultra-condensed":0.5,"extra-condensed":0.625,condensed:0.75,"semi-condensed":0.875,"semi-expanded":1.125,expanded:1.25,"extra-expanded":1.5,"ultra-expanded":2}[B]||1}),getStyle:function(C){var B=document.defaultView;if(B&&B.getComputedStyle){return new a(B.getComputedStyle(C,null))}if(C.currentStyle){return new a(C.currentStyle)}return new a(C.style)},gradient:j(function(F){var G={id:F,type:F.match(/^-([a-z]+)-gradient\(/)[1],stops:[]},C=F.substr(F.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig);for(var E=0,B=C.length,D;E<B;++E){D=C[E].split("=",2).reverse();G.stops.push([D[1]||E/(B-1),D[0]])}return G}),quotedList:j(function(E){var D=[],C=/\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,B;while(B=C.exec(E)){D.push(B[3]||B[1])}return D}),recognizesMedia:j(function(G){var E=document.createElement("style"),D,C,B;E.type="text/css";E.media=G;try{E.appendChild(document.createTextNode("/**/"))}catch(F){}C=g("head")[0];C.insertBefore(E,C.firstChild);D=(E.sheet||E.styleSheet);B=D&&!D.disabled;C.removeChild(E);return B}),removeClass:function(D,C){var B=RegExp("(?:^|\\s+)"+C+"(?=\\s|$)","g");D.className=D.className.replace(B,"");return D},supports:function(D,C){var B=document.createElement("span").style;if(B[D]===undefined){return false}B[D]=C;return B[D]===C},textAlign:function(E,D,B,C){if(D.get("textAlign")=="right"){if(B>0){E=" "+E}}else{if(B<C-1){E+=" "}}return E},textShadow:j(function(F){if(F=="none"){return null}var E=[],G={},B,C=0;var D=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;while(B=D.exec(F)){if(B[0]==","){E.push(G);G={};C=0}else{if(B[1]){G.color=B[1]}else{G[["offX","offY","blur"][C++]]=B[2]}}}E.push(G);return E}),textTransform:(function(){var B={uppercase:function(C){return C.toUpperCase()},lowercase:function(C){return C.toLowerCase()},capitalize:function(C){return C.replace(/\b./g,function(D){return D.toUpperCase()})}};return function(E,D){var C=B[D.get("textTransform")];return C?C(E):E}})(),whiteSpace:(function(){var D={inline:1,"inline-block":1,"run-in":1};var C=/^\s+/,B=/\s+$/;return function(H,F,G,E){if(E){if(E.nodeName.toLowerCase()=="br"){H=H.replace(C,"")}}if(D[F.get("display")]){return H}if(!G.previousSibling){H=H.replace(C,"")}if(!G.nextSibling){H=H.replace(B,"")}return H}})()};n.ready=(function(){var B=!n.recognizesMedia("all"),E=false;var D=[],H=function(){B=true;for(var K;K=D.shift();K()){}};var I=g("link"),J=g("style");function C(K){return K.disabled||G(K.sheet,K.media||"screen")}function G(M,P){if(!n.recognizesMedia(P||"all")){return true}if(!M||M.disabled){return false}try{var Q=M.cssRules,O;if(Q){search:for(var L=0,K=Q.length;O=Q[L],L<K;++L){switch(O.type){case 2:break;case 3:if(!G(O.styleSheet,O.media.mediaText)){return false}break;default:break search}}}}catch(N){}return true}function F(){if(document.createStyleSheet){return true}var L,K;for(K=0;L=I[K];++K){if(L.rel.toLowerCase()=="stylesheet"&&!C(L)){return false}}for(K=0;L=J[K];++K){if(!C(L)){return false}}return true}x.ready(function(){if(!E){E=n.getStyle(document.body).isUsable()}if(B||(E&&F())){H()}else{setTimeout(arguments.callee,10)}});return function(K){if(B){K()}else{D.push(K)}}})();function s(D){var C=this.face=D.face,B={"\u0020":1,"\u00a0":1,"\u3000":1};this.glyphs=D.glyphs;this.w=D.w;this.baseSize=parseInt(C["units-per-em"],10);this.family=C["font-family"].toLowerCase();this.weight=C["font-weight"];this.style=C["font-style"]||"normal";this.viewBox=(function(){var F=C.bbox.split(/\s+/);var E={minX:parseInt(F[0],10),minY:parseInt(F[1],10),maxX:parseInt(F[2],10),maxY:parseInt(F[3],10)};E.width=E.maxX-E.minX;E.height=E.maxY-E.minY;E.toString=function(){return[this.minX,this.minY,this.width,this.height].join(" ")};return E})();this.ascent=-parseInt(C.ascent,10);this.descent=-parseInt(C.descent,10);this.height=-this.ascent+this.descent;this.spacing=function(L,N,E){var O=this.glyphs,M,K,G,P=[],F=0,J=-1,I=-1,H;while(H=L[++J]){M=O[H]||this.missingGlyph;if(!M){continue}if(K){F-=G=K[H]||0;P[I]-=G}F+=P[++I]=~~(M.w||this.w)+N+(B[H]?E:0);K=M.k}P.total=F;return P}}function f(){var C={},B={oblique:"italic",italic:"oblique"};this.add=function(D){(C[D.style]||(C[D.style]={}))[D.weight]=D};this.get=function(H,I){var G=C[H]||C[B[H]]||C.normal||C.italic||C.oblique;if(!G){return null}I={normal:400,bold:700}[I]||parseInt(I,10);if(G[I]){return G[I]}var E={1:1,99:0}[I%100],K=[],F,D;if(E===undefined){E=I>400}if(I==500){I=400}for(var J in G){if(!k(G,J)){continue}J=parseInt(J,10);if(!F||J<F){F=J}if(!D||J>D){D=J}K.push(J)}if(I<F){I=F}if(I>D){I=D}K.sort(function(M,L){return(E?(M>=I&&L>=I)?M<L:M>L:(M<=I&&L<=I)?M>L:M<L)?-1:1});return G[K[0]]}}function r(){function D(F,G){if(F.contains){return F.contains(G)}return F.compareDocumentPosition(G)&16}function B(G){var F=G.relatedTarget;if(!F||D(this,F)){return}C(this,G.type=="mouseover")}function E(F){C(this,F.type=="mouseenter")}function C(F,G){setTimeout(function(){var H=d.get(F).options;m.replace(F,G?h(H,H.hover):H,true)},10)}this.attach=function(F){if(F.onmouseenter===undefined){q(F,"mouseover",B);q(F,"mouseout",B)}else{q(F,"mouseenter",E);q(F,"mouseleave",E)}}}function u(){var C=[],D={};function B(H){var E=[],G;for(var F=0;G=H[F];++F){E[F]=C[D[G]]}return E}this.add=function(F,E){D[F]=C.push(E)-1};this.repeat=function(){var E=arguments.length?B(arguments):C,F;for(var G=0;F=E[G++];){m.replace(F[0],F[1],true)}}}function A(){var D={},B=0;function C(E){return E.cufid||(E.cufid=++B)}this.get=function(E){var F=C(E);return D[F]||(D[F]={})}}function a(B){var D={},C={};this.extend=function(E){for(var F in E){if(k(E,F)){D[F]=E[F]}}return this};this.get=function(E){return D[E]!=undefined?D[E]:B[E]};this.getSize=function(F,E){return C[F]||(C[F]=new n.Size(this.get(F),E))};this.isUsable=function(){return !!B}}function q(C,B,D){if(C.addEventListener){C.addEventListener(B,D,false)}else{if(C.attachEvent){C.attachEvent("on"+B,function(){return D.call(C,window.event)})}}}function v(C,B){var D=d.get(C);if(D.options){return C}if(B.hover&&B.hoverables[C.nodeName.toLowerCase()]){b.attach(C)}D.options=B;return C}function j(B){var C={};return function(D){if(!k(C,D)){C[D]=B.apply(null,arguments)}return C[D]}}function c(F,E){var B=n.quotedList(E.get("fontFamily").toLowerCase()),D;for(var C=0;D=B[C];++C){if(i[D]){return i[D].get(E.get("fontStyle"),E.get("fontWeight"))}}return null}function g(B){return document.getElementsByTagName(B)}function k(C,B){return C.hasOwnProperty(B)}function h(){var C={},B,F;for(var E=0,D=arguments.length;B=arguments[E],E<D;++E){for(F in B){if(k(B,F)){C[F]=B[F]}}}return C}function o(E,M,C,N,F,D){var K=document.createDocumentFragment(),H;if(M===""){return K}var L=N.separate;var I=M.split(p[L]),B=(L=="words");if(B&&t){if(/^\s/.test(M)){I.unshift("")}if(/\s$/.test(M)){I.push("")}}for(var J=0,G=I.length;J<G;++J){H=z[N.engine](E,B?n.textAlign(I[J],C,J,G):I[J],C,N,F,D,J<G-1);if(H){K.appendChild(H)}}return K}function l(D,M){var C=D.nodeName.toLowerCase();if(M.ignore[C]){return}var E=!M.textless[C];var B=n.getStyle(v(D,M)).extend(M);var F=c(D,B),G,K,I,H,L,J;if(!F){return}for(G=D.firstChild;G;G=I){K=G.nodeType;I=G.nextSibling;if(E&&K==3){if(H){H.appendData(G.data);D.removeChild(G)}else{H=G}if(I){continue}}if(H){D.replaceChild(o(F,n.whiteSpace(H.data,B,H,J),B,M,G,D),H);H=null}if(K==1){if(G.firstChild){if(G.nodeName.toLowerCase()=="cufon"){z[M.engine](F,null,B,M,G,D)}else{arguments.callee(G,M)}}J=G}}}var t=" ".split(/\s+/).length==0;var d=new A();var b=new r();var y=new u();var e=false;var z={},i={},w={autoDetect:false,engine:null,forceHitArea:false,hover:false,hoverables:{a:true},ignore:{applet:1,canvas:1,col:1,colgroup:1,head:1,iframe:1,map:1,optgroup:1,option:1,script:1,select:1,style:1,textarea:1,title:1,pre:1},printable:true,selector:(window.Sizzle||(window.jQuery&&function(B){return jQuery(B)})||(window.dojo&&dojo.query)||(window.Ext&&Ext.query)||(window.YAHOO&&YAHOO.util&&YAHOO.util.Selector&&YAHOO.util.Selector.query)||(window.$$&&function(B){return $$(B)})||(window.$&&function(B){return $(B)})||(document.querySelectorAll&&function(B){return document.querySelectorAll(B)})||g),separate:"words",textless:{dl:1,html:1,ol:1,table:1,tbody:1,thead:1,tfoot:1,tr:1,ul:1},textShadow:"none"};var p={words:/\s/.test("\u00a0")?/[^\S\u00a0]+/:/\s+/,characters:"",none:/^/};m.now=function(){x.ready();return m};m.refresh=function(){y.repeat.apply(y,arguments);return m};m.registerEngine=function(C,B){if(!B){return m}z[C]=B;return m.set("engine",C)};m.registerFont=function(D){if(!D){return m}var B=new s(D),C=B.family;if(!i[C]){i[C]=new f()}i[C].add(B);return m.set("fontFamily",'"'+C+'"')};m.replace=function(D,C,B){C=h(w,C);if(!C.engine){return m}if(!e){n.addClass(x.root(),"cufon-active cufon-loading");n.ready(function(){n.addClass(n.removeClass(x.root(),"cufon-loading"),"cufon-ready")});e=true}if(C.hover){C.forceHitArea=true}if(C.autoDetect){delete C.fontFamily}if(typeof C.textShadow=="string"){C.textShadow=n.textShadow(C.textShadow)}if(typeof C.color=="string"&&/^-/.test(C.color)){C.textGradient=n.gradient(C.color)}else{delete C.textGradient}if(!B){y.add(D,arguments)}if(D.nodeType||typeof D=="string"){D=[D]}n.ready(function(){for(var F=0,E=D.length;F<E;++F){var G=D[F];if(typeof G=="string"){m.replace(C.selector(G),C,true)}else{l(G,C)}}});return m};m.set=function(B,C){w[B]=C;return m};return m})();Cufon.registerEngine("vml",(function(){var e=document.namespaces;if(!e){return}e.add("cvml","urn:schemas-microsoft-com:vml");e=null;var b=document.createElement("cvml:shape");b.style.behavior="url(#default#VML)";if(!b.coordsize){return}b=null;var h=(document.documentMode||0)<8;document.write(('<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:'+(h?"middle":"text-bottom")+";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}</style>").replace(/;/g,"!important;"));function c(i,j){return a(i,/(?:em|ex|%)$|^[a-z-]+$/i.test(j)?"1em":j)}function a(l,m){if(m==="0"){return 0}if(/px$/i.test(m)){return parseFloat(m)}var k=l.style.left,j=l.runtimeStyle.left;l.runtimeStyle.left=l.currentStyle.left;l.style.left=m.replace("%","em");var i=l.style.pixelLeft;l.style.left=k;l.runtimeStyle.left=j;return i}function f(l,k,j,n){var i="computed"+n,m=k[i];if(isNaN(m)){m=k.get(n);k[i]=m=(m=="normal")?0:~~j.convertFrom(a(l,m))}return m}var g={};function d(p){var q=p.id;if(!g[q]){var n=p.stops,o=document.createElement("cvml:fill"),i=[];o.type="gradient";o.angle=180;o.focus="0";o.method="sigma";o.color=n[0][1];for(var m=1,l=n.length-1;m<l;++m){i.push(n[m][0]*100+"% "+n[m][1])}o.colors=i.join(",");o.color2=n[l][1];g[q]=o}return g[q]}return function(ac,G,Y,C,K,ad,W){var n=(G===null);if(n){G=K.alt}var I=ac.viewBox;var p=Y.computedFontSize||(Y.computedFontSize=new Cufon.CSS.Size(c(ad,Y.get("fontSize"))+"px",ac.baseSize));var y,q;if(n){y=K;q=K.firstChild}else{y=document.createElement("cufon");y.className="cufon cufon-vml";y.alt=G;q=document.createElement("cufoncanvas");y.appendChild(q);if(C.printable){var Z=document.createElement("cufontext");Z.appendChild(document.createTextNode(G));y.appendChild(Z)}if(!W){y.appendChild(document.createElement("cvml:shape"))}}var ai=y.style;var R=q.style;var l=p.convert(I.height),af=Math.ceil(l);var V=af/l;var P=V*Cufon.CSS.fontStretch(Y.get("fontStretch"));var U=I.minX,T=I.minY;R.height=af;R.top=Math.round(p.convert(T-ac.ascent));R.left=Math.round(p.convert(U));ai.height=p.convert(ac.height)+"px";var F=Y.get("color");var ag=Cufon.CSS.textTransform(G,Y).split("");var L=ac.spacing(ag,f(ad,Y,p,"letterSpacing"),f(ad,Y,p,"wordSpacing"));if(!L.length){return null}var k=L.total;var x=-U+k+(I.width-L[L.length-1]);var ah=p.convert(x*P),X=Math.round(ah);var O=x+","+I.height,m;var J="r"+O+"ns";var u=C.textGradient&&d(C.textGradient);var o=ac.glyphs,S=0;var H=C.textShadow;var ab=-1,aa=0,w;while(w=ag[++ab]){var D=o[ag[ab]]||ac.missingGlyph,v;if(!D){continue}if(n){v=q.childNodes[aa];while(v.firstChild){v.removeChild(v.firstChild)}}else{v=document.createElement("cvml:shape");q.appendChild(v)}v.stroked="f";v.coordsize=O;v.coordorigin=m=(U-S)+","+T;v.path=(D.d?"m"+D.d+"xe":"")+"m"+m+J;v.fillcolor=F;if(u){v.appendChild(u.cloneNode(false))}var ae=v.style;ae.width=X;ae.height=af;if(H){var s=H[0],r=H[1];var B=Cufon.CSS.color(s.color),z;var N=document.createElement("cvml:shadow");N.on="t";N.color=B.color;N.offset=s.offX+","+s.offY;if(r){z=Cufon.CSS.color(r.color);N.type="double";N.color2=z.color;N.offset2=r.offX+","+r.offY}N.opacity=B.opacity||(z&&z.opacity)||1;v.appendChild(N)}S+=L[aa++]}var M=v.nextSibling,t,A;if(C.forceHitArea){if(!M){M=document.createElement("cvml:rect");M.stroked="f";M.className="cufon-vml-cover";t=document.createElement("cvml:fill");t.opacity=0;M.appendChild(t);q.appendChild(M)}A=M.style;A.width=X;A.height=af}else{if(M){q.removeChild(M)}}ai.width=Math.max(Math.ceil(p.convert(k*P)),0);if(h){var Q=Y.computedYAdjust;if(Q===undefined){var E=Y.get("lineHeight");if(E=="normal"){E="1em"}else{if(!isNaN(E)){E+="em"}}Y.computedYAdjust=Q=0.5*(a(ad,E)-parseFloat(ai.height))}if(Q){ai.marginTop=Math.ceil(Q)+"px";ai.marginBottom=Q+"px"}}return y}})());Cufon.registerEngine("canvas",(function(){var b=document.createElement("canvas");if(!b||!b.getContext||!b.getContext.apply){return}b=null;var a=Cufon.CSS.supports("display","inline-block");var e=!a&&(document.compatMode=="BackCompat"||/frameset|transitional/i.test(document.doctype.publicId));var f=document.createElement("style");f.type="text/css";f.appendChild(document.createTextNode(("cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;"+(e?"":"font-size:1px;line-height:1px;")+"}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}"+(a?"cufon canvas{position:relative;}":"cufon canvas{position:absolute;}")+"}@media print{cufon{padding:0;}cufon canvas{display:none;}}").replace(/;/g,"!important;")));document.getElementsByTagName("head")[0].appendChild(f);function d(p,h){var n=0,m=0;var g=[],o=/([mrvxe])([^a-z]*)/g,k;generate:for(var j=0;k=o.exec(p);++j){var l=k[2].split(",");switch(k[1]){case"v":g[j]={m:"bezierCurveTo",a:[n+~~l[0],m+~~l[1],n+~~l[2],m+~~l[3],n+=~~l[4],m+=~~l[5]]};break;case"r":g[j]={m:"lineTo",a:[n+=~~l[0],m+=~~l[1]]};break;case"m":g[j]={m:"moveTo",a:[n=~~l[0],m=~~l[1]]};break;case"x":g[j]={m:"closePath"};break;case"e":break generate}h[g[j].m].apply(h,g[j].a)}return g}function c(m,k){for(var j=0,h=m.length;j<h;++j){var g=m[j];k[g.m].apply(k,g.a)}}return function(V,w,P,t,C,W){var k=(w===null);if(k){w=C.getAttribute("alt")}var A=V.viewBox;var m=P.getSize("fontSize",V.baseSize);var B=0,O=0,N=0,u=0;var z=t.textShadow,L=[];if(z){for(var U=z.length;U--;){var F=z[U];var K=m.convertFrom(parseFloat(F.offX));var I=m.convertFrom(parseFloat(F.offY));L[U]=[K,I];if(I<B){B=I}if(K>O){O=K}if(I>N){N=I}if(K<u){u=K}}}var Z=Cufon.CSS.textTransform(w,P).split("");var E=V.spacing(Z,~~m.convertFrom(parseFloat(P.get("letterSpacing"))||0),~~m.convertFrom(parseFloat(P.get("wordSpacing"))||0));if(!E.length){return null}var h=E.total;O+=A.width-E[E.length-1];u+=A.minX;var s,n;if(k){s=C;n=C.firstChild}else{s=document.createElement("cufon");s.className="cufon cufon-canvas";s.setAttribute("alt",w);n=document.createElement("canvas");s.appendChild(n);if(t.printable){var S=document.createElement("cufontext");S.appendChild(document.createTextNode(w));s.appendChild(S)}}var aa=s.style;var H=n.style;var j=m.convert(A.height);var Y=Math.ceil(j);var M=Y/j;var G=M*Cufon.CSS.fontStretch(P.get("fontStretch"));var J=h*G;var Q=Math.ceil(m.convert(J+O-u));var o=Math.ceil(m.convert(A.height-B+N));n.width=Q;n.height=o;H.width=Q+"px";H.height=o+"px";B+=A.minY;H.top=Math.round(m.convert(B-V.ascent))+"px";H.left=Math.round(m.convert(u))+"px";var r=Math.max(Math.ceil(m.convert(J)),0)+"px";if(a){aa.width=r;aa.height=m.convert(V.height)+"px"}else{aa.paddingLeft=r;aa.paddingBottom=(m.convert(V.height)-1)+"px"}var X=n.getContext("2d"),D=j/A.height;X.scale(D,D*M);X.translate(-u,-B);X.save();function T(){var x=V.glyphs,ab,l=-1,g=-1,y;X.scale(G,1);while(y=Z[++l]){var ab=x[Z[l]]||V.missingGlyph;if(!ab){continue}if(ab.d){X.beginPath();if(ab.code){c(ab.code,X)}else{ab.code=d("m"+ab.d,X)}X.fill()}X.translate(E[++g],0)}X.restore()}if(z){for(var U=z.length;U--;){var F=z[U];X.save();X.fillStyle=F.color;X.translate.apply(X,L[U]);T()}}var q=t.textGradient;if(q){var v=q.stops,p=X.createLinearGradient(0,A.minY,0,A.maxY);for(var U=0,R=v.length;U<R;++U){p.addColorStop.apply(p,v[U])}X.fillStyle=p}else{X.fillStyle=P.get("color")}T();return s}})());

/*!
 * The following copyright notice may not be removed under any circumstances.
 * 
 * Copyright:
 * Copyright (c) 1985, 1987, 1989, 1990, 1991, 1992, 1997, 1998, 1999 Adobe
 * Systems Incorporated. All Rights Reserved.ITC Avant Garde Gothic is a registered
 * trademark of International Typeface Corporation.
 * 
 * Trademark:
 * ITC Avant Garde Gothic is a registered trademark of International Typeface 
 * Corporation.
 * 
 * Vendor URL:
 * http://www.linotypelibrary.com
 */
Cufon.registerFont({"w":554,"face":{"font-family":"avantgardeBook","font-weight":500,"font-stretch":"normal","units-per-em":"1000","panose-1":"2 0 6 3 3 0 0 2 0 4","ascent":"800","descent":"-200","bbox":"-113 -955.059 1148 222","underline-thickness":"50","underline-position":"-75","unicode-range":"U+0020-U+FB02"},"glyphs":{" ":{"w":277},"\u00a0":{"w":277},"$":{"d":"485,-223v-5,109,-66,181,-170,194r0,99r-74,0r0,-99v-102,-17,-170,-83,-171,-199r74,0v1,90,52,131,137,138v131,11,171,-176,77,-238v-58,-38,-140,-36,-196,-79v-38,-29,-71,-71,-71,-139v0,-97,64,-168,150,-181r0,-84r74,0r0,81v103,14,154,82,163,186r-74,0v-2,-77,-47,-116,-125,-121v-111,-8,-153,148,-71,203v58,39,144,39,200,84v41,32,80,79,77,155"},"%":{"d":"206,0r-68,0r424,-740r68,0xm202,-695v-74,0,-121,50,-121,123v0,74,47,123,121,123v74,0,121,-49,121,-123v0,-73,-47,-123,-121,-123xm202,-393v-108,0,-181,-72,-181,-179v0,-107,73,-179,181,-179v108,0,181,72,181,179v0,107,-73,179,-181,179xm572,13v-108,0,-181,-72,-181,-179v0,-107,73,-179,181,-179v108,0,181,72,181,179v0,107,-73,179,-181,179xm572,-289v-74,0,-121,50,-121,123v0,74,47,123,121,123v74,0,121,-49,121,-123v0,-73,-47,-123,-121,-123","w":775},"&":{"d":"302,-464v58,-23,125,-46,123,-126v-2,-58,-44,-91,-104,-93v-87,-3,-134,99,-76,161v18,19,36,40,57,58xm130,-210v0,112,113,184,218,136v55,-25,82,-79,110,-132r-178,-175v-73,30,-150,79,-150,171xm499,-580v0,95,-76,141,-144,168r140,138r108,-208r83,0r-137,261r187,182r-53,51r-169,-165v-45,82,-99,165,-225,165v-141,0,-233,-90,-233,-226v0,-124,85,-178,171,-220v-38,-40,-83,-79,-83,-155v0,-102,76,-164,178,-164v104,0,177,69,177,173","w":757},"\u2019":{"d":"94,-546r88,-194r74,0r-88,194r-74,0","w":351},"(":{"d":"121,-276v0,195,100,327,234,409r0,72v-133,-49,-228,-169,-279,-308v-63,-172,-6,-387,73,-489v54,-70,124,-136,206,-165r0,75v-131,82,-234,212,-234,406","w":369},")":{"d":"248,-276v0,-194,-103,-324,-234,-406r0,-75v133,49,229,169,280,308v63,172,5,387,-74,489v-54,70,-124,136,-206,165r0,-72v133,-83,234,-213,234,-409","w":369},"*":{"d":"184,-740r58,0r-2,116r109,-37r18,55r-110,34r68,92r-47,34r-67,-94r-66,93r-47,-34r69,-92r-109,-34r18,-56r109,38","w":425},"+":{"d":"337,-287r218,0r0,68r-218,0r0,219r-68,0r0,-219r-218,0r0,-68r218,0r0,-219r68,0r0,219","w":606},",":{"d":"102,-126r74,0r-88,193r-74,0","w":277},"-":{"d":"302,-315r0,67r-272,0r0,-67r272,0","w":332},"\u00ad":{"d":"302,-315r0,67r-272,0r0,-67r272,0","w":332},".":{"d":"102,-126r74,0r0,126r-74,0r0,-126","w":277},"\/":{"d":"324,-740r79,0r-283,840r-76,0","w":437},"0":{"d":"277,-54v125,0,174,-94,174,-227r0,-188v1,-126,-54,-217,-174,-217v-120,0,-175,90,-174,217r0,188v-4,133,49,227,174,227xm277,13v-165,0,-248,-106,-248,-283v0,-155,-15,-327,71,-411v64,-62,205,-96,300,-41v75,44,126,116,125,236r0,216v0,177,-82,283,-248,283"},"1":{"d":"262,-673r-127,0r0,-67r201,0r0,740r-74,0r0,-673"},"2":{"d":"46,-501v0,-160,90,-252,238,-252v141,0,230,92,230,225v0,119,-70,171,-136,234r-238,227r370,0r0,67r-470,0r0,-67r318,-307v40,-43,82,-80,82,-155v0,-93,-64,-157,-160,-157v-105,0,-160,70,-160,185r-74,0"},"3":{"d":"268,-686v-72,0,-109,54,-111,131r-74,0v6,-119,70,-198,187,-198v115,0,187,76,187,190v0,71,-37,107,-76,139v98,42,156,172,105,296v-40,96,-144,169,-280,132v-100,-27,-168,-105,-172,-236r74,0v4,105,60,178,165,178v100,0,159,-66,159,-170v0,-115,-82,-169,-212,-165r0,-65v96,8,163,-31,163,-115v0,-69,-41,-117,-115,-117"},"4":{"d":"387,-202r0,-436r-2,0r-286,436r288,0xm387,-135r-373,0r0,-67r359,-538r88,0r0,538r67,0r0,67r-67,0r0,135r-74,0r0,-135"},"5":{"d":"280,-438v-70,0,-120,40,-154,84r-58,-21r67,-365r333,0r0,67r-274,0r-37,204v49,-33,153,-46,223,-15v107,48,185,191,132,336v-40,110,-171,198,-319,146v-95,-33,-152,-113,-167,-231r74,0v13,103,70,179,179,179v111,0,177,-82,177,-191v0,-112,-66,-193,-176,-193"},"6":{"d":"277,-436v-111,0,-179,78,-179,193v0,109,66,189,179,189v112,0,179,-77,179,-191v0,-113,-68,-191,-179,-191xm512,-346v62,182,-47,363,-235,359v-160,-4,-253,-104,-253,-263v0,-98,48,-156,89,-217r184,-272r84,0r-171,251v139,-46,265,35,302,142"},"7":{"d":"415,-673r-352,0r0,-67r428,0r0,67r-303,673r-78,0"},"8":{"d":"279,-686v-75,0,-124,48,-124,122v0,70,49,120,123,120v73,0,121,-48,121,-120v0,-72,-47,-122,-120,-122xm276,-375v-94,0,-161,63,-161,157v0,104,67,164,164,164v94,0,160,-62,160,-161v0,-100,-68,-160,-163,-160xm58,-130v-48,-120,15,-249,110,-283v-51,-32,-87,-80,-87,-148v0,-119,79,-192,196,-192v118,0,196,76,196,195v0,68,-37,118,-88,145v95,39,158,159,111,283v-39,104,-181,179,-314,124v-57,-24,-100,-68,-124,-124"},"9":{"d":"277,-303v111,0,179,-78,179,-193v0,-108,-66,-189,-179,-189v-112,0,-179,77,-179,191v0,113,68,191,179,191xm42,-394v-77,-218,109,-424,340,-337v117,44,191,219,120,357v-70,135,-164,249,-245,374r-84,0r171,-251v-137,46,-264,-36,-302,-143"},":":{"d":"102,-548r74,0r0,126r-74,0r0,-126xm102,-126r74,0r0,126r-74,0r0,-126","w":277},";":{"d":"102,-548r74,0r0,126r-74,0r0,-126xm102,-126r74,0r-88,193r-74,0","w":277},"<":{"d":"554,-446r-425,193r425,193r0,68r-508,-230r0,-62r508,-230r0,68","w":606},"=":{"d":"51,-186r504,0r0,68r-504,0r0,-68xm555,-320r-504,0r0,-68r504,0r0,68","w":606},">":{"d":"52,-60r425,-193r-425,-193r0,-68r508,230r0,62r-508,230r0,-68","w":606},"?":{"d":"263,-126r74,0r0,126r-74,0r0,-126xm428,-458v68,-93,-15,-230,-132,-224v-100,6,-160,67,-158,174r-74,0v-3,-117,57,-192,142,-226v175,-70,363,62,313,257v-30,118,-173,139,-182,284r-74,0v0,-138,108,-187,165,-265","w":591},"@":{"d":"413,-212v94,0,128,-86,132,-182v2,-64,-40,-112,-99,-112v-92,0,-136,74,-140,168v-3,76,40,126,107,126xm441,-562v74,-1,105,41,126,89r14,-75r60,0r-51,295v-3,46,51,50,80,25v46,-39,73,-110,73,-195v0,-179,-115,-274,-291,-274v-156,0,-254,83,-302,197v-16,40,-25,84,-25,131v0,203,121,325,338,326v96,1,174,-22,238,-50r15,51v-112,58,-312,76,-437,20v-130,-58,-214,-173,-214,-348v0,-234,152,-375,386,-383v246,-8,401,180,337,432v-21,84,-70,165,-166,165v-51,0,-74,-35,-82,-80v-28,49,-69,78,-138,80v-167,7,-192,-232,-102,-336v32,-37,77,-69,141,-70","w":867},"A":{"d":"225,-316r287,0r-142,-340xm328,-740r83,0r318,740r-81,0r-107,-249r-344,0r-108,249r-77,0","w":740,"k":{"\u00dd":122,"\u00fd":72,"\u0178":122,"\u00ff":72,"y":72,"w":65,"v":73,"Y":122,"W":95,"V":122,"T":81}},"B":{"d":"428,-546v0,-132,-138,-131,-280,-127r0,252r93,0v110,6,187,-29,187,-125xm470,-212v0,-113,-101,-149,-231,-142r-91,0r0,287r104,0v127,6,218,-31,218,-145xm544,-212v0,148,-105,212,-266,212r-204,0r0,-740r186,0v146,1,237,62,242,197v3,75,-40,116,-81,149v69,28,123,91,123,182","w":574},"C":{"d":"312,-78v152,64,307,-10,376,-116r83,0v-67,116,-171,207,-341,207v-179,0,-296,-101,-356,-230v-42,-91,-38,-211,0,-304v65,-161,267,-282,484,-209v95,32,170,99,210,180r-83,0v-64,-107,-232,-171,-379,-108v-133,57,-239,237,-163,412v33,75,93,135,169,168","w":813},"D":{"d":"625,-371v0,-202,-145,-309,-370,-302r-107,0r0,606v164,2,322,1,398,-96v40,-51,79,-115,79,-208xm74,-740v170,0,350,-11,457,61v108,73,192,198,161,375v-33,187,-174,302,-402,304r-216,0r0,-740","w":744},"E":{"d":"70,-740r405,0r0,67r-331,0r0,266r320,0r0,67r-320,0r0,273r331,0r0,67r-405,0r0,-740","w":536},"F":{"d":"70,-740r374,0r0,67r-300,0r0,268r289,0r0,67r-289,0r0,338r-74,0r0,-740","w":485,"k":{"\u00c4":60,"\u00c0":60,"\u00c2":60,"\u00c5":60,"\u00c1":60,"\u00c3":60,"A":60,".":79,",":122}},"G":{"d":"700,-543v-50,-80,-135,-143,-263,-143v-153,0,-254,86,-299,198v-74,183,34,351,171,408v112,47,262,16,330,-44v44,-39,84,-89,100,-149r-413,0r0,-67r502,0v-16,171,-119,281,-256,329v-229,80,-428,-49,-501,-213v-66,-150,-3,-327,78,-410v85,-88,265,-154,420,-96v98,36,178,101,217,187r-86,0","w":872},"H":{"d":"76,-740r74,0r0,326r383,0r0,-326r74,0r0,740r-74,0r0,-347r-383,0r0,347r-74,0r0,-740","w":683},"I":{"d":"76,-740r74,0r0,740r-74,0r0,-740","w":226},"J":{"d":"208,-54v101,1,120,-80,120,-178r0,-508r74,0r0,505v15,177,-98,284,-264,237v-75,-21,-126,-83,-132,-178r73,0v3,73,59,121,129,122","w":482},"K":{"d":"81,-740r74,0r0,425r2,0r339,-425r95,0r-293,361r293,379r-93,0r-247,-321r-96,118r0,203r-74,0r0,-740","w":591},"L":{"d":"82,-740r74,0r0,673r306,0r0,67r-380,0r0,-740","w":462,"k":{"\u00dd":91,"\u00fd":23,"\u0178":91,"\u00ff":23,"y":23,"Y":91,"W":67,"V":113,"T":46}},"M":{"d":"76,-740r114,0r269,630r270,-630r114,0r0,740r-74,0r0,-659r-2,0r-277,659r-63,0r-275,-659r-2,0r0,659r-74,0r0,-740","w":919},"N":{"d":"75,-740r100,0r413,614r2,0r0,-614r74,0r0,740r-74,0r-439,-651r-2,0r0,651r-74,0r0,-740","w":740},"O":{"d":"314,-662v-140,56,-246,229,-172,416v53,137,235,242,414,168v110,-46,196,-142,196,-291v0,-148,-87,-243,-194,-292v-74,-33,-168,-31,-244,-1xm74,-219v-44,-93,-37,-213,2,-305v70,-164,290,-288,507,-200v136,55,243,170,243,354v0,183,-109,296,-243,354v-156,67,-342,4,-423,-82v-34,-36,-65,-75,-86,-121","w":869},"P":{"d":"490,-519v0,-119,-97,-163,-234,-154r-107,0r0,308r107,0v137,9,234,-35,234,-154xm564,-519v0,157,-112,224,-283,221r-132,0r0,298r-74,0r0,-740r206,0v171,-3,283,64,283,221","w":592,"k":{"\u00c4":74,"\u00c0":74,"\u00c2":74,"\u00c5":74,"\u00c1":74,"\u00c3":74,"A":74,".":91,",":123}},"Q":{"d":"661,-142v88,-76,130,-220,75,-352v-57,-137,-233,-237,-416,-170v-134,49,-241,198,-193,385v41,-12,91,-25,156,-25v179,0,282,80,378,162xm157,-216v52,129,293,222,446,114v-95,-88,-270,-177,-446,-114xm715,-94v30,24,58,41,110,40r0,67v-81,2,-124,-27,-165,-64v-91,66,-256,82,-378,34v-168,-67,-302,-270,-214,-493v55,-140,178,-243,371,-243v187,0,309,99,368,235v20,48,30,99,30,154v0,119,-51,205,-122,270","w":871},"R":{"d":"498,-503v0,-123,-91,-173,-225,-170r-129,0r0,673r-74,0r0,-740r188,0v189,-8,314,70,314,239v0,134,-87,214,-220,225r209,276r-93,0r-251,-335v160,8,281,-26,281,-168","w":607,"k":{"\u00dd":20,"\u00fd":-32,"\u0178":20,"\u00ff":-32,"y":-32,"Y":20,"W":-2,"V":39,"T":-6}},"S":{"d":"250,-686v-124,-11,-180,162,-82,222v63,39,179,47,228,96v94,60,92,235,14,315v-67,69,-227,87,-308,17v-43,-37,-80,-91,-80,-171r74,0v3,90,61,153,154,153v113,0,187,-121,130,-218v-76,-130,-338,-59,-338,-282v0,-150,146,-237,291,-183v71,26,119,91,122,185r-74,0v-4,-80,-53,-127,-131,-134","w":498},"T":{"d":"176,-673r-170,0r0,-67r413,0r0,67r-169,0r0,673r-74,0r0,-673","w":426,"k":{"\u00fd":-5,"\u00ea":49,"\u00e3":52,"\u00e8":49,"\u00e0":52,"\u00e4":52,"\u00ec":-31,"\u00e1":52,"\u00eb":49,"\u00fc":46,"\u00f2":49,"\u00e5":52,"\u00ef":-31,"\u00c4":81,"\u00c0":81,"\u00f9":46,"\u00e7":51,"\u00e2":52,"\u00ff":-5,"\u00f4":49,"\u00c2":81,"\u00f5":49,"\u00c5":81,"\u00c1":81,"\u00c3":81,"\u00ee":-31,"\u00ed":-31,"\u00e9":49,"\u00fa":46,"\u00fb":46,"\u00f6":49,"\u00f3":49,"\u00f8":49,"y":-5,"w":-7,"u":46,"s":23,"r":30,"o":49,"i":-31,"e":49,"c":51,"a":52,"A":81,";":29,":":-3,".":71,",":102}},"U":{"d":"327,13v-169,0,-252,-111,-252,-292r0,-461r74,0r0,461v-1,135,53,225,178,225v125,0,178,-90,178,-225r0,-461r74,0r0,461v0,181,-83,292,-252,292","w":655},"V":{"d":"8,-740r82,0r261,648r262,-648r80,0r-307,740r-73,0","w":702,"k":{"\u00fd":25,"\u00ea":101,"\u00e3":104,"\u00e8":101,"\u00e0":104,"\u00e4":104,"\u00e1":104,"\u00eb":101,"\u00fc":40,"\u00f2":101,"\u00e5":104,"\u00c4":122,"\u00c0":122,"\u00f9":40,"\u00e2":104,"\u00ff":25,"\u00f4":101,"\u00c2":122,"\u00f5":101,"\u00c5":122,"\u00c1":122,"\u00c3":122,"\u00ed":-5,"\u00e9":101,"\u00fa":40,"\u00fb":40,"\u00f6":101,"\u00f3":101,"\u00f8":101,"y":25,"u":40,"r":40,"o":101,"i":-5,"e":101,"a":104,"A":122,";":33,":":1,".":75,",":106}},"W":{"d":"11,-740r76,0r181,645r2,0r176,-645r69,0r177,644r2,0r181,-644r75,0r-212,740r-94,0r-163,-607r-2,0r-162,607r-95,0","w":960,"k":{"\u00fd":2,"\u00ea":47,"\u00e3":50,"\u00e8":47,"\u00e0":50,"\u00e4":50,"\u00ec":-16,"\u00e1":50,"\u00eb":47,"\u00fc":30,"\u00f2":46,"\u00e5":50,"\u00ef":-16,"\u00c4":73,"\u00c0":73,"\u00f9":30,"\u00e2":50,"\u00ff":2,"\u00f4":46,"\u00c2":73,"\u00f5":46,"\u00c5":73,"\u00c1":73,"\u00c3":73,"\u00ee":-16,"\u00ed":-6,"\u00e9":47,"\u00fa":30,"\u00fb":30,"\u00f6":46,"\u00f3":46,"\u00f8":46,"y":2,"u":30,"r":29,"o":46,"i":-6,"e":47,"a":50,"A":73,";":33,":":1,".":74,",":106}},"X":{"d":"259,-378r-237,-362r87,0r197,296r195,-296r86,0r-238,362r253,378r-88,0r-208,-316r-211,316r-87,0","w":609},"Y":{"d":"258,-247r-257,-493r82,0r211,415r217,-415r81,0r-260,493r0,247r-74,0r0,-247","w":592,"k":{"\u00ea":89,"\u00e3":93,"\u00e8":89,"\u00e0":93,"\u00e4":93,"\u00ec":-23,"\u00e1":93,"\u00eb":89,"\u00fc":69,"\u00f2":89,"\u00e5":93,"\u00ef":-23,"\u00c4":122,"\u00c0":122,"\u00f9":69,"\u00e2":93,"\u00f4":89,"\u00c2":122,"\u00f5":89,"\u00c5":122,"\u00c1":122,"\u00c3":122,"\u00ee":-23,"\u00ed":-13,"\u00e9":89,"\u00fa":69,"\u00fb":69,"\u00f6":89,"\u00f3":89,"\u00f8":89,"v":17,"u":69,"q":93,"p":67,"o":89,"i":-13,"e":89,"a":93,"A":122,";":23,":":-9,".":65,",":97}},"Z":{"d":"12,-67r364,-606r-353,0r0,-67r436,0r0,67r-363,606r374,0r0,67r-458,0r0,-67","w":480},"[":{"d":"207,-110v-2,117,45,177,130,214r0,75v-117,-36,-203,-120,-204,-276r0,-378v3,-157,84,-240,204,-278r0,75v-77,33,-130,92,-130,203r0,365","w":351},"\\":{"d":"477,100r-76,0r-283,-840r79,0","w":605},"]":{"d":"14,-753v118,38,204,122,204,278r0,378v-1,156,-86,240,-204,276r0,-75v85,-37,130,-97,130,-214r0,-365v0,-111,-53,-170,-130,-203r0,-75","w":351},"^":{"d":"271,-740r64,0r218,433r-70,0r-181,-360r-178,360r-71,0","w":606},"_":{"d":"500,75r0,50r-500,0r0,-50r500,0","w":500},"\u2018":{"d":"183,-546r-88,-194r74,0r88,194r-74,0","w":351},"a":{"d":"423,-480v-156,-62,-316,42,-311,208v4,136,87,222,224,222v159,0,259,-150,202,-309v-20,-56,-61,-100,-115,-121xm336,-561v103,0,168,47,215,110r0,-96r70,0r0,547r-70,0v-2,-31,4,-69,-2,-96v-53,94,-206,136,-332,86v-126,-50,-219,-208,-154,-372v41,-103,131,-179,273,-179","w":683},"b":{"d":"353,-50v137,0,224,-86,224,-222v0,-140,-88,-226,-224,-226v-134,0,-219,92,-219,225v0,134,87,223,219,223xm353,13v-102,0,-167,-48,-215,-109r0,96r-70,0r0,-740r70,0r0,289r2,0v45,-64,111,-110,213,-110v142,0,236,75,273,179v74,209,-57,395,-273,395","w":682},"c":{"d":"337,-50v99,0,158,-49,193,-111r77,0v-49,94,-127,174,-272,174v-140,0,-231,-76,-272,-177v-68,-168,30,-326,157,-374v169,-64,339,21,387,156r-77,0v-42,-85,-155,-146,-274,-102v-82,30,-145,98,-145,209v0,136,89,225,226,225","w":647},"d":{"d":"420,-480v-156,-62,-316,42,-311,208v4,136,87,222,224,222v159,0,260,-150,203,-309v-20,-56,-62,-100,-116,-121xm212,-537v125,-56,280,-6,336,84r0,-287r70,0r0,740r-70,0v-2,-31,4,-69,-2,-96v-53,93,-206,136,-332,86v-126,-50,-218,-208,-154,-372v27,-71,81,-124,152,-155","w":685},"e":{"d":"537,-311v-21,-127,-135,-219,-281,-176v-77,23,-132,85,-146,176r427,0xm406,-548v125,39,206,142,202,300r-498,0v13,116,91,198,212,198v101,0,166,-54,196,-129r74,0v-42,136,-205,235,-378,170v-126,-47,-219,-211,-154,-374v47,-117,184,-215,346,-165","w":650},"f":{"d":"314,-688v-100,-2,-143,45,-140,141r140,0r0,63r-140,0r0,484r-70,0r0,-484r-85,0r0,-63r85,0v-2,-139,69,-207,210,-206r0,65","w":314,"k":{"f":-3}},"g":{"d":"408,-480v-191,-78,-355,107,-284,292v30,77,94,138,199,138v135,0,217,-94,217,-223v0,-104,-57,-176,-132,-207xm218,-540v127,-54,263,3,318,91r0,-98r70,0r0,461v11,214,-128,331,-336,294v-106,-19,-181,-88,-211,-194r74,0v33,75,93,139,205,138v138,-1,215,-98,196,-252v-44,94,-192,143,-316,93v-101,-41,-181,-126,-181,-264v0,-139,80,-226,181,-269","w":673},"h":{"d":"302,-498v-106,0,-170,74,-170,192r0,306r-70,0r0,-740r70,0r0,263r2,0v38,-70,161,-107,261,-69v88,33,148,115,148,245r0,301r-70,0r0,-301v1,-122,-62,-197,-171,-197","w":610},"i":{"d":"65,-740r70,0r0,126r-70,0r0,-126xm65,-547r70,0r0,547r-70,0r0,-547","w":200},"j":{"d":"67,-740r70,0r0,126r-70,0r0,-126xm-44,123v90,-1,112,-69,111,-161r0,-509r70,0r-1,559v-7,110,-66,176,-180,180r0,-69","w":203},"k":{"d":"70,-740r70,0r0,527r2,0r255,-334r90,0r-216,276r227,271r-90,0r-180,-216r-88,112r0,104r-70,0r0,-740","w":502},"l":{"d":"65,-740r70,0r0,740r-70,0r0,-740","w":200},"m":{"d":"285,-498v-100,0,-149,73,-149,181r0,317r-70,0r0,-547r70,0r0,63v28,-46,80,-77,149,-77v88,0,150,44,184,105v43,-70,105,-105,184,-105v142,0,219,91,219,236r0,325r-70,0r0,-317v1,-108,-49,-181,-149,-181v-100,0,-149,73,-149,181r0,317r-70,0r0,-317v1,-108,-49,-181,-149,-181","w":938},"n":{"d":"305,-498v-106,0,-170,74,-170,192r0,306r-70,0r0,-547r70,0v2,22,-4,52,2,70v38,-70,161,-107,261,-69v88,33,148,115,148,245r0,301r-70,0r0,-301v1,-122,-62,-197,-171,-197","w":610},"o":{"d":"544,-277v0,-135,-89,-221,-216,-221v-157,0,-258,158,-198,316v35,93,153,165,276,116v79,-32,138,-101,138,-211xm215,-10v-125,-51,-216,-212,-149,-378v50,-124,214,-216,374,-149v122,51,214,208,152,371v-48,126,-213,223,-377,156","w":655},"p":{"d":"349,-50v137,0,224,-86,224,-222v0,-140,-88,-226,-224,-226v-134,0,-219,92,-219,225v0,134,87,223,219,223xm349,13v-102,0,-167,-48,-215,-109r0,288r-70,0r0,-739r70,0v2,31,-4,69,2,96v46,-65,111,-110,213,-110v142,0,236,75,273,179v74,209,-57,395,-273,395","w":682},"q":{"d":"418,-480v-156,-62,-316,42,-311,208v4,136,87,222,224,222v159,0,260,-150,203,-309v-20,-56,-62,-100,-116,-121xm331,-561v103,0,168,47,215,110r0,-96r70,0r0,739r-70,0r0,-288r-2,0v-52,95,-206,136,-332,86v-126,-49,-219,-208,-154,-372v41,-103,131,-179,273,-179","w":682},"r":{"d":"291,-487v-97,8,-156,66,-156,167r0,320r-70,0r0,-547r70,0v2,25,-4,58,2,79v24,-61,75,-89,154,-93r0,74","w":301,"k":{"\u00ea":4,"\u00e8":4,"\u00eb":4,"\u00f2":4,"\u00e7":7,"\u00f4":4,"\u00f5":4,"\u00f1":-21,"\u00e9":4,"\u00f6":4,"\u00f3":4,"\u00f8":4,"q":8,"o":4,"n":-21,"m":-28,"h":-29,"g":-1,"f":-48,"e":4,"d":6,"c":7,".":73,",":105}},"s":{"d":"192,13v-103,0,-168,-63,-168,-175r70,0v1,70,34,106,98,112v101,10,135,-126,62,-174v-80,-52,-214,-52,-214,-185v0,-94,60,-152,156,-152v90,0,146,58,149,149r-70,0v-4,-52,-31,-82,-82,-86v-80,-6,-111,108,-49,144v89,51,222,58,220,200v-3,107,-63,167,-172,167","w":388},"t":{"d":"129,-484r-115,0r0,-63r115,0r0,-193r70,0r0,193r131,0r0,63r-131,0r0,484r-70,0r0,-484","w":339},"u":{"d":"132,-246v-8,146,91,227,226,187v74,-22,113,-93,113,-199r0,-289r70,0r0,547r-66,0v-2,-27,4,-62,-2,-85v-30,57,-86,98,-175,98v-161,0,-236,-99,-236,-258r0,-302r70,0r0,301","w":608},"v":{"d":"7,-547r75,0r193,460r196,-460r75,0r-231,547r-77,0"},"w":{"d":"13,-547r73,0r172,458r2,0r125,-392r61,0r126,392r2,0r174,-458r72,0r-209,547r-79,0r-116,-364r-2,0r-114,364r-79,0","w":831},"x":{"d":"199,-278r-187,-269r84,0r144,211r143,-211r85,0r-187,269r187,278r-83,0r-145,-219r-145,219r-83,0","w":480},"y":{"d":"228,-18r-213,-529r74,0r174,436r186,-436r74,0r-317,739r-73,0","w":536},"z":{"d":"10,-61r303,-423r-293,0r0,-63r377,0r0,63r-300,421r318,0r0,63r-405,0r0,-61","w":425},"{":{"d":"159,-609v-2,-76,40,-131,106,-131r66,0r0,60r-50,0v-42,2,-48,43,-48,86r0,183v-1,71,-36,117,-87,134r0,3v55,14,87,61,87,134r0,183v1,42,6,86,48,86r50,0r0,60r-66,0v-66,-2,-106,-55,-106,-131v0,-125,29,-290,-89,-301r0,-64v58,-8,89,-55,89,-120r0,-182","w":351},"|":{"d":"373,-778r0,1000r-74,0r0,-1000r74,0","w":672},"}":{"d":"118,-594v-1,-43,-6,-86,-48,-86r-50,0r0,-60r66,0v66,2,106,55,106,131v0,126,-28,290,89,302r0,64v-58,8,-89,53,-89,119r0,182v2,76,-40,131,-106,131r-66,0r0,-60r50,0v42,-2,48,-44,48,-86r0,-183v0,-73,32,-120,87,-134r0,-3v-51,-17,-86,-63,-87,-134r0,-183","w":351},"~":{"d":"197,-315v84,0,140,60,213,72v49,-4,65,-46,88,-76r36,50v-29,40,-58,86,-125,86v-91,0,-124,-72,-217,-72v-49,0,-67,41,-84,76r-36,-50v24,-45,57,-86,125,-86","w":606},"\u00a1":{"d":"110,-548r74,0r0,126r-74,0r0,-126xm110,-355r74,0r0,547r-74,0r0,-547","w":295},"\u00a2":{"d":"504,-291v-29,69,-97,126,-184,136r0,93r-74,0r0,-94v-115,-21,-198,-97,-198,-227v0,-130,83,-206,198,-227r0,-97r74,0r0,96v92,10,162,72,190,148r-81,0v-28,-47,-69,-84,-144,-84v-99,0,-163,69,-163,164v0,95,64,161,163,164v69,2,109,-31,136,-72r83,0"},"\u00a3":{"d":"552,-212v-7,143,-97,212,-250,212r-273,0r0,-63r148,0v20,-31,35,-71,35,-119v0,-86,-62,-117,-102,-167r-106,0r0,-63r59,0v-25,-46,-27,-132,-5,-191v39,-105,162,-184,301,-135v83,29,141,96,154,197r-72,0v-17,-85,-68,-149,-165,-149v-104,0,-158,73,-161,180v-1,49,12,71,29,98r285,0r0,63r-225,0v55,50,105,138,71,235r-19,51v127,6,221,-29,222,-153v0,-22,-5,-34,-9,-52r74,0v6,18,10,31,9,56"},"\u2044":{"d":"220,-740r60,0r-333,740r-60,0","w":166},"\u2215":{"d":"220,-740r60,0r-333,740r-60,0","w":166},"\u00a5":{"d":"240,-227r-207,0r0,-63r207,0r0,-58r-17,-26r-190,0r0,-63r152,0r-181,-303r80,0r194,325r192,-325r80,0r-181,303r152,0r0,63r-190,0r-17,26r0,58r207,0r0,64r-207,0r0,226r-74,0r0,-227"},"\u0192":{"d":"1,82v62,16,135,-3,159,-44v21,-36,31,-81,42,-131r81,-424r-114,0r13,-67r112,0v20,-134,75,-239,224,-232r-11,67v-103,-9,-129,77,-143,165r112,0r-12,67r-112,0r-92,493v-18,125,-126,199,-272,170"},"\u00a7":{"d":"399,-181v47,-22,81,-112,35,-155v-57,-54,-145,-76,-216,-117v-48,21,-80,103,-42,151v10,13,22,21,35,27xm134,-592v-10,-173,271,-215,336,-76v8,18,12,39,12,62r-74,0v-1,-51,-40,-80,-96,-80v-108,0,-140,139,-47,181v77,35,163,69,225,124v24,21,42,55,39,100v-4,63,-38,106,-81,135v36,29,52,64,52,119v0,132,-142,202,-270,153v-72,-28,-117,-94,-121,-190r74,0v4,86,51,132,129,138v104,7,153,-126,72,-182v-80,-55,-196,-87,-266,-154v-20,-19,-33,-47,-33,-85v1,-73,47,-113,89,-144v-24,-24,-37,-57,-40,-101","w":615},"\u00a4":{"d":"148,-482v56,-55,203,-56,258,0r98,-98r42,44r-96,96v55,56,56,203,0,258r96,98r-42,42r-98,-96v-55,55,-203,56,-258,0r-96,96r-44,-42r98,-98v-56,-57,-55,-202,0,-258r-98,-96r44,-44xm433,-311v0,-93,-63,-156,-156,-156v-92,0,-154,64,-154,156v0,93,61,158,154,158v94,0,156,-64,156,-158"},"'":{"d":"71,-444r-12,-296r81,0r-12,296r-57,0","w":198},"\u201c":{"d":"185,-546r-88,-194r74,0r88,194r-74,0xm332,-546r-87,-194r73,0r88,194r-74,0","w":502},"\u00ab":{"d":"214,-282r113,-199r59,31r-95,168r95,168r-59,33xm40,-282r113,-199r59,31r-94,168r94,168r-59,33","w":425},"\u2039":{"d":"40,-282r113,-199r59,31r-94,168r94,168r-59,33","w":251},"\u203a":{"d":"39,-114r94,-168r-94,-168r58,-31r114,199r-114,201","w":251},"\ufb01":{"d":"352,-740r70,0r0,126r-70,0r0,-126xm314,-688v-100,-2,-143,45,-140,141r248,0r0,547r-70,0r0,-484r-178,0r0,484r-70,0r0,-484r-85,0r0,-63r85,0v-2,-139,69,-207,210,-206r0,65","w":487},"\ufb02":{"d":"314,-688v-100,-2,-143,45,-140,141r176,0r0,-193r70,0r0,740r-70,0r0,-484r-176,0r0,484r-70,0r0,-484r-85,0r0,-63r85,0v-2,-139,69,-207,210,-206r0,65","w":485},"\u2013":{"d":"465,-315r0,67r-430,0r0,-67r430,0","w":500},"\u2020":{"d":"313,-539r180,0r0,67r-180,0r0,605r-74,0r0,-605r-180,0r0,-67r180,0r0,-201r74,0r0,201","w":553},"\u2021":{"d":"313,-539r180,0r0,67r-180,0r0,337r180,0r0,67r-180,0r0,201r-74,0r0,-201r-180,0r0,-67r180,0r0,-337r-180,0r0,-67r180,0r0,-201r74,0r0,201","w":553},"\u00b7":{"d":"102,-316r74,0r0,126r-74,0r0,-126","w":277},"\u2219":{"d":"102,-316r74,0r0,126r-74,0r0,-126","w":277},"\u00b6":{"d":"22,-542v0,-138,96,-198,243,-198r286,0r0,56r-64,0r0,794r-62,0r0,-794r-120,0r0,794r-62,0r0,-458v-136,2,-221,-66,-221,-194","w":564},"\u2022":{"d":"150,-377v0,-93,61,-155,154,-155v91,0,151,63,151,155v0,92,-60,155,-152,155v-92,0,-153,-63,-153,-155","w":606},"\u201a":{"d":"89,68r88,-194r74,0r-88,194r-74,0","w":354},"\u201e":{"d":"325,-126r74,0r-88,194r-74,0xm177,-126r74,0r-88,194r-74,0","w":502},"\u201d":{"d":"243,-546r88,-194r74,0r-88,194r-74,0xm96,-546r88,-194r73,0r-87,194r-74,0","w":484},"\u00bb":{"d":"39,-114r94,-168r-94,-168r58,-31r114,199r-114,201xm213,-114r94,-168r-94,-168r58,-31r114,199r-114,201","w":425},"\u2026":{"d":"796,-126r74,0r0,126r-74,0r0,-126xm463,-126r74,0r0,126r-74,0r0,-126xm130,-126r74,0r0,126r-74,0r0,-126","w":1000},"\u2030":{"d":"210,0r-68,0r424,-740r68,0xm206,-695v-74,0,-121,50,-121,123v0,74,47,123,121,123v74,0,121,-49,121,-123v0,-73,-47,-123,-121,-123xm206,-393v-108,0,-181,-72,-181,-179v0,-107,73,-179,181,-179v108,0,181,72,181,179v0,107,-73,179,-181,179xm967,-289v-74,0,-121,50,-121,123v0,74,47,123,121,123v74,0,121,-49,121,-123v0,-73,-47,-123,-121,-123xm967,13v-108,0,-181,-72,-181,-179v0,-107,73,-179,181,-179v108,0,181,72,181,179v0,107,-73,179,-181,179xm576,13v-108,0,-181,-72,-181,-179v0,-107,73,-179,181,-179v108,0,181,72,181,179v0,107,-73,179,-181,179xm576,-289v-74,0,-121,50,-121,123v0,74,47,123,121,123v74,0,121,-49,121,-123v0,-73,-47,-123,-121,-123","w":1174},"\u00bf":{"d":"328,-422r-74,0r0,-126r74,0r0,126xm190,-120v-97,86,-33,255,105,255v67,0,106,-35,135,-73v21,-28,22,-60,23,-101r74,0v3,117,-57,191,-142,225v-175,70,-363,-61,-313,-256v30,-118,173,-140,182,-285r74,0v-1,120,-74,178,-138,235","w":591},"`":{"d":"300,-677r-33,58r-198,-107r32,-60","w":378},"\u00b4":{"d":"277,-786r32,60r-198,107r-33,-58","w":375},"\u02c6":{"d":"219,-764r66,0r143,125r-89,0r-86,-73r-88,73r-91,0","w":502},"\u02dc":{"d":"293,-713v31,0,37,-12,63,-26r36,49v-26,20,-59,38,-98,39v-61,1,-90,-41,-145,-41v-28,0,-51,15,-67,30r-35,-50v30,-28,65,-42,104,-42v61,-1,86,41,142,41","w":439},"\u00af":{"d":"411,-736r0,67r-338,0r0,-67r338,0","w":485},"\u02c9":{"d":"411,-736r0,67r-338,0r0,-67r338,0","w":485},"\u02d8":{"d":"117,-754v38,61,181,61,219,0r65,0v-26,114,-233,134,-315,54v-14,-14,-26,-31,-34,-54r65,0","w":453},"\u02d9":{"d":"148,-765r0,126r-74,0r0,-126r74,0","w":222},"\u00a8":{"d":"295,-765r0,126r-74,0r0,-126r74,0xm147,-765r0,126r-74,0r0,-126r74,0","w":369},"\u02da":{"d":"165,-755v-27,0,-51,24,-51,52v0,27,24,51,51,51v28,0,52,-23,52,-51v0,-29,-23,-52,-52,-52xm165,-600v-61,0,-103,-41,-103,-103v0,-62,41,-101,103,-104v57,-2,106,47,104,104v-2,62,-42,103,-104,103","w":332},"\u00b8":{"d":"213,137v7,-54,-68,-64,-88,-32r-36,-21r46,-87r42,3r-28,56v60,-18,106,25,105,82v-1,70,-89,109,-144,64v-16,-12,-26,-30,-31,-57r42,-2v4,24,21,41,46,42v27,1,43,-23,46,-48","w":324},"\u02dd":{"d":"446,-786r40,46r-164,135r-38,-46xm270,-786r41,46r-164,135r-38,-46","w":552},"\u02db":{"d":"228,182v-82,33,-187,-25,-147,-118v13,-30,39,-47,64,-64r52,0v-38,32,-75,48,-75,98v0,51,62,60,106,40r0,44","w":302},"\u02c7":{"d":"160,-764r86,73r88,-73r89,0r-143,125r-67,0r-145,-125r92,0","w":502},"\u2014":{"d":"965,-315r0,67r-930,0r0,-67r930,0","w":1000},"\u00c6":{"d":"290,-317r226,0r0,-328r-2,0xm495,-740r412,0r0,67r-317,0r0,266r306,0r0,67r-306,0r0,273r317,0r0,67r-391,0r0,-250r-273,0r-174,250r-89,0","w":992},"\u00aa":{"d":"177,-697v-71,0,-120,45,-120,118v0,70,49,116,120,116v73,0,122,-44,122,-118v0,-72,-50,-116,-122,-116xm174,-753v59,-2,96,25,122,60r0,-52r60,0r0,330r-60,0v-2,-16,4,-40,-2,-52v-22,39,-65,60,-120,60v-105,0,-177,-69,-177,-174v0,-103,71,-168,177,-172","w":369},"\u00d8":{"d":"274,-98v120,80,302,32,382,-48v74,-74,128,-225,70,-348v-17,-38,-42,-74,-75,-106xm596,-641v-72,-48,-193,-58,-285,-20v-136,56,-241,229,-170,411v16,40,42,78,78,111xm286,-724v115,-48,263,-31,352,28r92,-123r55,40r-92,123v76,68,133,154,133,286v0,183,-109,296,-243,354v-113,49,-262,31,-350,-27r-94,126r-55,-40r93,-126v-108,-83,-176,-278,-102,-439v43,-92,117,-162,211,-202","w":868},"\u0152":{"d":"143,-494v-57,130,1,290,75,355v76,67,212,113,332,63v113,-47,202,-140,202,-295v0,-147,-84,-241,-191,-289v-126,-58,-287,-6,-351,66v-26,30,-51,62,-67,100xm284,-724v179,-74,394,6,467,131r0,-147r391,0r0,67r-317,0r0,267r306,0r0,67r-306,0r0,272r317,0r0,67r-391,0v-2,-49,4,-106,-2,-151v-68,132,-279,208,-460,137v-139,-54,-244,-170,-244,-357v0,-183,105,-298,239,-353","w":1194},"\u00ba":{"d":"185,-697v-68,0,-113,47,-113,118v0,71,44,116,113,116v69,0,111,-46,111,-118v0,-71,-45,-116,-111,-116xm184,-407v-102,0,-172,-68,-172,-170v0,-107,68,-176,172,-176v103,0,172,70,172,172v0,104,-67,174,-172,174","w":369},"\u00e6":{"d":"238,-68v156,60,310,-40,310,-204v0,-165,-152,-269,-312,-206v-95,38,-165,167,-115,292v22,54,63,97,117,118xm1043,-310v-20,-129,-133,-220,-279,-177v-78,23,-131,86,-146,177r425,0xm912,-548v124,41,206,141,201,301r-495,0v14,118,92,197,213,197v98,0,166,-53,194,-128r70,0v-37,110,-126,191,-264,191v-104,0,-169,-51,-216,-112r0,99r-70,0v-2,-32,4,-71,-2,-99v-45,67,-110,112,-217,112v-145,0,-236,-81,-274,-187v-59,-162,32,-304,147,-360v37,-18,79,-27,128,-27v104,-1,176,47,218,115r0,-101r70,0v2,32,-4,73,2,101v45,-84,172,-143,295,-102","w":1157},"\u0131":{"d":"65,-547r70,0r0,547r-70,0r0,-547","w":200},"\u00f8":{"d":"220,-540v81,-35,189,-23,250,20r72,-94r55,41r-72,94v71,63,117,199,66,313v-44,99,-129,179,-265,179v-59,0,-107,-17,-145,-42r-71,93r-54,-38r72,-95v-74,-63,-114,-207,-62,-319v32,-69,84,-122,154,-152xm221,-81v78,56,198,24,253,-29v52,-50,91,-163,53,-252v-11,-25,-25,-46,-42,-64xm431,-468v-73,-52,-195,-23,-249,29v-52,50,-93,158,-56,249v10,25,24,48,43,67","w":653},"\u0153":{"d":"1034,-311v-21,-127,-132,-219,-278,-176v-78,23,-132,86,-147,176r425,0xm519,-182v72,-180,-81,-367,-275,-301v-101,35,-174,172,-122,301v37,93,157,165,280,116v53,-22,96,-62,117,-116xm568,-138v-48,83,-123,151,-249,151v-134,0,-226,-77,-263,-176v-77,-205,54,-398,263,-398v126,0,203,69,251,152v51,-102,182,-187,332,-139v123,39,206,138,202,300r-497,0v14,116,91,198,213,198v99,0,165,-54,194,-129r74,0v-41,107,-126,192,-267,192v-127,0,-205,-67,-253,-151","w":1137},"\u00df":{"d":"268,-690v-107,0,-137,90,-137,209r0,278r51,0v6,87,48,153,134,153v83,0,139,-55,139,-143v0,-121,-99,-157,-231,-149r0,-67v101,-1,179,-37,179,-142v0,-85,-51,-139,-135,-139xm317,13v-92,4,-158,-55,-186,-122r0,109r-70,0r0,-481v-4,-134,26,-199,107,-246v31,-17,65,-26,100,-26v127,0,202,80,205,209v2,82,-34,124,-88,154v79,29,140,83,140,190v0,134,-81,208,-208,213"},"\u00b0":{"d":"200,-659v-58,0,-94,38,-94,94v0,56,36,94,94,94v58,0,94,-38,94,-94v0,-56,-36,-94,-94,-94xm200,-421v-87,0,-144,-57,-144,-144v0,-87,58,-144,144,-144v86,0,144,58,144,144v0,86,-57,144,-144,144","w":400},"\u00f3":{"d":"447,-786r32,60r-198,107r-33,-58xm544,-277v0,-135,-89,-221,-216,-221v-157,0,-258,158,-198,316v35,93,153,165,276,116v79,-32,138,-101,138,-211xm215,-10v-125,-51,-216,-212,-149,-378v50,-124,214,-216,374,-149v122,51,214,208,152,371v-48,126,-213,223,-377,156","w":655},"\u00d6":{"d":"545,-928r0,126r-74,0r0,-126r74,0xm397,-928r0,126r-74,0r0,-126r74,0xm314,-662v-140,56,-246,229,-172,416v53,137,235,242,414,168v110,-46,196,-142,196,-291v0,-148,-87,-243,-194,-292v-74,-33,-168,-31,-244,-1xm74,-219v-44,-93,-37,-213,2,-305v70,-164,290,-288,507,-200v136,55,243,170,243,354v0,183,-109,296,-243,354v-156,67,-342,4,-423,-82v-34,-36,-65,-75,-86,-121","w":869},"\u00f6":{"d":"438,-765r0,126r-74,0r0,-126r74,0xm290,-765r0,126r-74,0r0,-126r74,0xm544,-277v0,-135,-89,-221,-216,-221v-157,0,-258,158,-198,316v35,93,153,165,276,116v79,-32,138,-101,138,-211xm215,-10v-125,-51,-216,-212,-149,-378v50,-124,214,-216,374,-149v122,51,214,208,152,371v-48,126,-213,223,-377,156","w":655},"\u00ca":{"d":"236,-927r66,0r143,125r-89,0r-86,-73r-88,73r-91,0xm70,-740r405,0r0,67r-331,0r0,266r320,0r0,67r-320,0r0,273r331,0r0,67r-405,0r0,-740","w":536},"\u00fb":{"d":"272,-764r66,0r143,125r-89,0r-86,-73r-88,73r-91,0xm132,-246v-8,146,91,227,226,187v74,-22,113,-93,113,-199r0,-289r70,0r0,547r-66,0v-2,-27,4,-62,-2,-85v-30,57,-86,98,-175,98v-161,0,-236,-99,-236,-258r0,-302r70,0r0,301","w":608},"\u00ac":{"d":"555,-109r-68,0r0,-211r-436,0r0,-68r504,0r0,279","w":606},"\u00cb":{"d":"379,-928r0,126r-74,0r0,-126r74,0xm231,-928r0,126r-74,0r0,-126r74,0xm70,-740r405,0r0,67r-331,0r0,266r320,0r0,67r-320,0r0,273r331,0r0,67r-405,0r0,-740","w":536},"\u00d5":{"d":"508,-876v31,0,37,-12,63,-26r36,49v-26,20,-59,38,-98,39v-61,1,-90,-41,-145,-41v-28,0,-51,15,-67,30r-35,-50v30,-28,65,-42,104,-42v61,-1,86,41,142,41xm314,-662v-140,56,-246,229,-172,416v53,137,235,242,414,168v110,-46,196,-142,196,-291v0,-148,-87,-243,-194,-292v-74,-33,-168,-31,-244,-1xm74,-219v-44,-93,-37,-213,2,-305v70,-164,290,-288,507,-200v136,55,243,170,243,354v0,183,-109,296,-243,354v-156,67,-342,4,-423,-82v-34,-36,-65,-75,-86,-121","w":869},"\u00fa":{"d":"414,-786r32,60r-198,107r-33,-58xm132,-246v-8,146,91,227,226,187v74,-22,113,-93,113,-199r0,-289r70,0r0,547r-66,0v-2,-27,4,-62,-2,-85v-30,57,-86,98,-175,98v-161,0,-236,-99,-236,-258r0,-302r70,0r0,301","w":608},"\u00e9":{"d":"415,-786r32,60r-198,107r-33,-58xm537,-311v-21,-127,-135,-219,-281,-176v-77,23,-132,85,-146,176r427,0xm406,-548v125,39,206,142,202,300r-498,0v13,116,91,198,212,198v101,0,166,-54,196,-129r74,0v-42,136,-205,235,-378,170v-126,-47,-219,-211,-154,-374v47,-117,184,-215,346,-165","w":650},"\u00ed":{"d":"229,-786r32,60r-198,107r-33,-58xm65,-547r70,0r0,547r-70,0r0,-547","w":200},"\u00ee":{"d":"68,-764r66,0r143,125r-89,0r-86,-73r-88,73r-91,0xm65,-547r70,0r0,547r-70,0r0,-547","w":200},"\u00ae":{"d":"675,-497v-56,-147,-237,-253,-431,-177v-143,55,-249,247,-172,432v47,114,146,203,301,203v153,0,252,-89,301,-201v34,-78,32,-176,1,-257xm102,-639v79,-87,266,-153,420,-83v130,59,233,173,233,352v0,180,-103,294,-233,352v-153,70,-338,0,-420,-83v-87,-89,-148,-269,-82,-417v20,-46,49,-85,82,-121xm493,-463v0,-98,-134,-65,-228,-71r0,151v100,-3,228,22,228,-80xm486,-229v0,-79,-33,-104,-112,-104r-109,0r0,185r-55,0r0,-437v148,5,337,-35,338,119v0,59,-32,92,-81,108v84,10,68,117,81,197v1,4,3,8,6,13r-55,0v-12,-21,-13,-48,-13,-81","w":747},"\u00c3":{"d":"444,-876v31,0,37,-12,63,-26r36,49v-26,20,-59,38,-98,39v-61,1,-90,-41,-145,-41v-28,0,-51,15,-67,30r-35,-50v30,-28,65,-42,104,-42v61,-1,86,41,142,41xm225,-316r287,0r-142,-340xm328,-740r83,0r318,740r-81,0r-107,-249r-344,0r-108,249r-77,0","w":740,"k":{"\u00dd":122,"\u00fd":72,"\u0178":122,"\u00ff":72,"y":72,"w":65,"v":73,"Y":122,"W":95,"V":122,"T":81}},"\u00c1":{"d":"460,-949r32,60r-198,107r-33,-58xm225,-316r287,0r-142,-340xm328,-740r83,0r318,740r-81,0r-107,-249r-344,0r-108,249r-77,0","w":740,"k":{"\u00dd":122,"\u00fd":72,"\u0178":122,"\u00ff":72,"y":72,"w":65,"v":73,"Y":122,"W":95,"V":122,"T":81}},"\u00c7":{"d":"312,-78v152,64,307,-10,376,-116r83,0v-66,116,-171,200,-340,207r-22,43v60,-18,106,25,105,82v-1,70,-89,109,-144,64v-16,-12,-26,-30,-31,-57r42,-2v4,24,21,42,46,42v28,0,44,-24,46,-52v4,-50,-69,-60,-88,-28r-36,-21r39,-74v-157,-19,-264,-111,-318,-236v-38,-89,-32,-206,4,-295v65,-161,267,-282,484,-209v95,32,170,99,210,180r-83,0v-64,-107,-232,-171,-379,-108v-133,57,-239,237,-163,412v33,75,93,135,169,168","w":813},"\u00f1":{"d":"379,-713v31,0,37,-12,63,-26r36,49v-26,20,-59,38,-98,39v-61,1,-90,-41,-145,-41v-28,0,-51,15,-67,30r-35,-50v30,-28,65,-42,104,-42v61,-1,86,41,142,41xm305,-498v-106,0,-170,74,-170,192r0,306r-70,0r0,-547r70,0v2,22,-4,52,2,70v38,-70,161,-107,261,-69v88,33,148,115,148,245r0,301r-70,0r0,-301v1,-122,-62,-197,-171,-197","w":610},"\u00c5":{"d":"369,-903v-27,0,-51,24,-51,52v0,27,24,51,51,51v28,0,52,-23,52,-51v0,-29,-23,-52,-52,-52xm369,-748v-61,0,-103,-41,-103,-103v0,-62,41,-101,103,-104v57,-2,106,47,104,104v-2,62,-42,103,-104,103xm225,-316r287,0r-142,-340xm328,-740r83,0r318,740r-81,0r-107,-249r-344,0r-108,249r-77,0","w":740,"k":{"\u00dd":122,"\u00fd":72,"\u0178":122,"\u00ff":72,"y":72,"w":65,"v":73,"Y":122,"W":95,"V":122,"T":81}},"\u00b5":{"d":"132,-246v-9,146,90,227,226,187v74,-22,113,-93,113,-199r0,-289r70,0r0,547r-66,0v-2,-27,4,-62,-2,-85v-30,57,-86,98,-175,98v-84,1,-132,-24,-166,-69r0,248r-70,0r0,-739r70,0r0,301","w":608},"\u03bc":{"d":"132,-246v-9,146,90,227,226,187v74,-22,113,-93,113,-199r0,-289r70,0r0,547r-66,0v-2,-27,4,-62,-2,-85v-30,57,-86,98,-175,98v-84,1,-132,-24,-166,-69r0,248r-70,0r0,-739r70,0r0,301","w":608},"\u00d9":{"d":"419,-840r-33,58r-198,-107r32,-60xm327,13v-169,0,-252,-111,-252,-292r0,-461r74,0r0,461v-1,135,53,225,178,225v125,0,178,-90,178,-225r0,-461r74,0r0,461v0,181,-83,292,-252,292","w":655},"\u00c8":{"d":"379,-840r-33,58r-198,-107r32,-60xm70,-740r405,0r0,67r-331,0r0,266r320,0r0,67r-320,0r0,273r331,0r0,67r-405,0r0,-740","w":536},"\u00f5":{"d":"401,-713v31,0,37,-12,63,-26r36,49v-26,20,-59,38,-98,39v-61,1,-90,-41,-145,-41v-28,0,-51,15,-67,30r-35,-50v30,-28,65,-42,104,-42v61,-1,86,41,142,41xm544,-277v0,-135,-89,-221,-216,-221v-157,0,-258,158,-198,316v35,93,153,165,276,116v79,-32,138,-101,138,-211xm215,-10v-125,-51,-216,-212,-149,-378v50,-124,214,-216,374,-149v122,51,214,208,152,371v-48,126,-213,223,-377,156","w":655},"\u00d1":{"d":"444,-876v31,0,37,-12,63,-26r36,49v-26,20,-59,38,-98,39v-61,1,-90,-41,-145,-41v-28,0,-51,15,-67,30r-35,-50v30,-28,65,-42,104,-42v61,-1,86,41,142,41xm75,-740r100,0r413,614r2,0r0,-614r74,0r0,740r-74,0r-439,-651r-2,0r0,651r-74,0r0,-740","w":740},"\u00da":{"d":"437,-949r32,60r-198,107r-33,-58xm327,13v-169,0,-252,-111,-252,-292r0,-461r74,0r0,461v-1,135,53,225,178,225v125,0,178,-90,178,-225r0,-461r74,0r0,461v0,181,-83,292,-252,292","w":655},"\u00c2":{"d":"338,-927r66,0r143,125r-89,0r-86,-73r-88,73r-91,0xm225,-316r287,0r-142,-340xm328,-740r83,0r318,740r-81,0r-107,-249r-344,0r-108,249r-77,0","w":740,"k":{"\u00dd":122,"\u00fd":72,"\u0178":122,"\u00ff":72,"y":72,"w":65,"v":73,"Y":122,"W":95,"V":122,"T":81}},"\u00f4":{"d":"296,-764r66,0r143,125r-89,0r-86,-73r-88,73r-91,0xm544,-277v0,-135,-89,-221,-216,-221v-157,0,-258,158,-198,316v35,93,153,165,276,116v79,-32,138,-101,138,-211xm215,-10v-125,-51,-216,-212,-149,-378v50,-124,214,-216,374,-149v122,51,214,208,152,371v-48,126,-213,223,-377,156","w":655},"\u00ff":{"d":"379,-765r0,126r-74,0r0,-126r74,0xm231,-765r0,126r-74,0r0,-126r74,0xm228,-18r-213,-529r74,0r174,436r186,-436r74,0r-317,739r-73,0","w":536},"\u00c9":{"d":"358,-949r32,60r-198,107r-33,-58xm70,-740r405,0r0,67r-331,0r0,266r320,0r0,67r-320,0r0,273r331,0r0,67r-405,0r0,-740","w":536},"\u00d2":{"d":"546,-840r-33,58r-198,-107r32,-60xm314,-662v-140,56,-246,229,-172,416v53,137,235,242,414,168v110,-46,196,-142,196,-291v0,-148,-87,-243,-194,-292v-74,-33,-168,-31,-244,-1xm74,-219v-44,-93,-37,-213,2,-305v70,-164,290,-288,507,-200v136,55,243,170,243,354v0,183,-109,296,-243,354v-156,67,-342,4,-423,-82v-34,-36,-65,-75,-86,-121","w":869},"\u00e2":{"d":"310,-764r66,0r143,125r-89,0r-86,-73r-88,73r-91,0xm423,-480v-156,-62,-316,42,-311,208v4,136,87,222,224,222v159,0,259,-150,202,-309v-20,-56,-61,-100,-115,-121xm336,-561v103,0,168,47,215,110r0,-96r70,0r0,547r-70,0v-2,-31,4,-69,-2,-96v-53,94,-206,136,-332,86v-126,-50,-219,-208,-154,-372v41,-103,131,-179,273,-179","w":683},"\u00f7":{"d":"266,-113r74,0r0,126r-74,0r0,-126xm266,-519r74,0r0,126r-74,0r0,-126xm51,-287r504,0r0,68r-504,0r0,-68","w":606},"\u00e7":{"d":"337,-50v99,0,158,-49,193,-111r77,0v-49,92,-124,171,-266,173r-22,44v60,-18,106,25,105,82v-1,70,-89,109,-144,64v-16,-12,-26,-30,-31,-57r42,-2v4,24,21,42,46,42v28,0,44,-24,46,-52v4,-50,-69,-60,-88,-28r-36,-21r39,-74v-152,-22,-257,-119,-257,-283v0,-136,79,-224,179,-265v167,-68,339,21,387,156r-77,0v-42,-85,-155,-146,-274,-102v-82,30,-145,98,-145,209v0,136,89,225,226,225","w":647},"\u00f9":{"d":"395,-677r-33,58r-198,-107r32,-60xm132,-246v-8,146,91,227,226,187v74,-22,113,-93,113,-199r0,-289r70,0r0,547r-66,0v-2,-27,4,-62,-2,-85v-30,57,-86,98,-175,98v-161,0,-236,-99,-236,-258r0,-302r70,0r0,301","w":608},"\u00c0":{"d":"481,-840r-33,58r-198,-107r32,-60xm225,-316r287,0r-142,-340xm328,-740r83,0r318,740r-81,0r-107,-249r-344,0r-108,249r-77,0","w":740,"k":{"\u00dd":122,"\u00fd":72,"\u0178":122,"\u00ff":72,"y":72,"w":65,"v":73,"Y":122,"W":95,"V":122,"T":81}},"\u00db":{"d":"296,-927r66,0r143,125r-89,0r-86,-73r-88,73r-91,0xm327,13v-169,0,-252,-111,-252,-292r0,-461r74,0r0,461v-1,135,53,225,178,225v125,0,178,-90,178,-225r0,-461r74,0r0,461v0,181,-83,292,-252,292","w":655},"\u0178":{"d":"407,-928r0,126r-74,0r0,-126r74,0xm259,-928r0,126r-74,0r0,-126r74,0xm258,-247r-257,-493r82,0r211,415r217,-415r81,0r-260,493r0,247r-74,0r0,-247","w":592,"k":{"\u00ea":89,"\u00e3":93,"\u00e8":89,"\u00e0":93,"\u00e4":93,"\u00ec":-23,"\u00e1":93,"\u00eb":89,"\u00fc":69,"\u00f2":89,"\u00e5":93,"\u00ef":-23,"\u00c4":122,"\u00c0":122,"\u00f9":69,"\u00e2":93,"\u00f4":89,"\u00c2":122,"\u00f5":89,"\u00c5":122,"\u00c1":122,"\u00c3":122,"\u00ee":-23,"\u00ed":-13,"\u00e9":89,"\u00fa":69,"\u00fb":69,"\u00f6":89,"\u00f3":89,"\u00f8":89,"v":17,"u":69,"q":93,"p":67,"o":89,"i":-13,"e":89,"a":93,"A":122,";":23,":":-9,".":65,",":97}},"\u00c4":{"d":"481,-928r0,126r-74,0r0,-126r74,0xm333,-928r0,126r-74,0r0,-126r74,0xm225,-316r287,0r-142,-340xm328,-740r83,0r318,740r-81,0r-107,-249r-344,0r-108,249r-77,0","w":740,"k":{"\u00dd":122,"\u00fd":72,"\u0178":122,"\u00ff":72,"y":72,"w":65,"v":73,"Y":122,"W":95,"V":122,"T":81}},"\u00ce":{"d":"81,-927r66,0r143,125r-89,0r-86,-73r-88,73r-91,0xm76,-740r74,0r0,740r-74,0r0,-740","w":226},"\u00ef":{"d":"211,-765r0,126r-74,0r0,-126r74,0xm63,-765r0,126r-74,0r0,-126r74,0xm65,-547r70,0r0,547r-70,0r0,-547","w":200},"\u00d3":{"d":"564,-949r32,60r-198,107r-33,-58xm314,-662v-140,56,-246,229,-172,416v53,137,235,242,414,168v110,-46,196,-142,196,-291v0,-148,-87,-243,-194,-292v-74,-33,-168,-31,-244,-1xm74,-219v-44,-93,-37,-213,2,-305v70,-164,290,-288,507,-200v136,55,243,170,243,354v0,183,-109,296,-243,354v-156,67,-342,4,-423,-82v-34,-36,-65,-75,-86,-121","w":869},"\u00e5":{"d":"341,-755v-27,0,-51,24,-51,52v0,27,24,51,51,51v28,0,52,-23,52,-51v0,-29,-23,-52,-52,-52xm341,-600v-61,0,-103,-41,-103,-103v0,-62,41,-101,103,-104v57,-2,106,47,104,104v-2,62,-42,103,-104,103xm423,-480v-156,-62,-316,42,-311,208v4,136,87,222,224,222v159,0,259,-150,202,-309v-20,-56,-61,-100,-115,-121xm336,-561v103,0,168,47,215,110r0,-96r70,0r0,547r-70,0v-2,-31,4,-69,-2,-96v-53,94,-206,136,-332,86v-126,-50,-219,-208,-154,-372v41,-103,131,-179,273,-179","w":683},"\u2122":{"d":"331,-740r78,0r164,365r164,-365r79,0r0,444r-55,0r0,-372r-2,0r-163,372r-46,0r-162,-371r-2,0r0,371r-55,0r0,-444xm114,-693r-105,0r0,-47r265,0r0,47r-105,0r0,397r-55,0r0,-397","w":1000},"\u00f2":{"d":"439,-677r-33,58r-198,-107r32,-60xm544,-277v0,-135,-89,-221,-216,-221v-157,0,-258,158,-198,316v35,93,153,165,276,116v79,-32,138,-101,138,-211xm215,-10v-125,-51,-216,-212,-149,-378v50,-124,214,-216,374,-149v122,51,214,208,152,371v-48,126,-213,223,-377,156","w":655},"\u00fc":{"d":"415,-765r0,126r-74,0r0,-126r74,0xm267,-765r0,126r-74,0r0,-126r74,0xm132,-246v-8,146,91,227,226,187v74,-22,113,-93,113,-199r0,-289r70,0r0,547r-66,0v-2,-27,4,-62,-2,-85v-30,57,-86,98,-175,98v-161,0,-236,-99,-236,-258r0,-302r70,0r0,301","w":608},"\u00eb":{"d":"436,-765r0,126r-74,0r0,-126r74,0xm288,-765r0,126r-74,0r0,-126r74,0xm537,-311v-21,-127,-135,-219,-281,-176v-77,23,-132,85,-146,176r427,0xm406,-548v125,39,206,142,202,300r-498,0v13,116,91,198,212,198v101,0,166,-54,196,-129r74,0v-42,136,-205,235,-378,170v-126,-47,-219,-211,-154,-374v47,-117,184,-215,346,-165","w":650},"\u00b1":{"d":"51,-44r504,0r0,68r-504,0r0,-68xm269,-518r68,0r0,178r218,0r0,68r-218,0r0,178r-68,0r0,-178r-218,0r0,-68r218,0r0,-178","w":606},"\u00e1":{"d":"431,-786r32,60r-198,107r-33,-58xm423,-480v-156,-62,-316,42,-311,208v4,136,87,222,224,222v159,0,259,-150,202,-309v-20,-56,-61,-100,-115,-121xm336,-561v103,0,168,47,215,110r0,-96r70,0r0,547r-70,0v-2,-31,4,-69,-2,-96v-53,94,-206,136,-332,86v-126,-50,-219,-208,-154,-372v41,-103,131,-179,273,-179","w":683},"\u00cf":{"d":"224,-928r0,126r-74,0r0,-126r74,0xm76,-928r0,126r-74,0r0,-126r74,0xm76,-740r74,0r0,740r-74,0r0,-740","w":226},"\u00ec":{"d":"171,-677r-33,58r-198,-107r32,-60xm65,-547r70,0r0,547r-70,0r0,-547","w":200},"\u00cd":{"d":"242,-949r32,60r-198,107r-33,-58xm76,-740r74,0r0,740r-74,0r0,-740","w":226},"\u00a9":{"d":"675,-497v-56,-147,-237,-253,-431,-177v-143,55,-249,247,-172,432v47,114,146,203,301,203v153,0,252,-89,301,-201v34,-78,32,-176,1,-257xm102,-639v79,-87,266,-153,420,-83v130,59,233,173,233,352v0,180,-103,294,-233,352v-153,70,-338,0,-420,-83v-87,-89,-148,-269,-82,-417v20,-46,49,-85,82,-121xm164,-371v-3,-162,127,-264,289,-215v62,19,108,68,118,139r-55,0v-14,-66,-59,-101,-137,-101v-101,0,-160,71,-160,177v0,106,59,177,160,177v78,0,123,-34,137,-101r55,0v-16,93,-86,152,-192,152v-137,0,-212,-90,-215,-228","w":747},"\u00e4":{"d":"452,-765r0,126r-74,0r0,-126r74,0xm304,-765r0,126r-74,0r0,-126r74,0xm423,-480v-156,-62,-316,42,-311,208v4,136,87,222,224,222v159,0,259,-150,202,-309v-20,-56,-61,-100,-115,-121xm336,-561v103,0,168,47,215,110r0,-96r70,0r0,547r-70,0v-2,-31,4,-69,-2,-96v-53,94,-206,136,-332,86v-126,-50,-219,-208,-154,-372v41,-103,131,-179,273,-179","w":683},"\u00e0":{"d":"453,-677r-33,58r-198,-107r32,-60xm423,-480v-156,-62,-316,42,-311,208v4,136,87,222,224,222v159,0,259,-150,202,-309v-20,-56,-61,-100,-115,-121xm336,-561v103,0,168,47,215,110r0,-96r70,0r0,547r-70,0v-2,-31,4,-69,-2,-96v-53,94,-206,136,-332,86v-126,-50,-219,-208,-154,-372v41,-103,131,-179,273,-179","w":683},"\u00cc":{"d":"184,-840r-33,58r-198,-107r32,-60xm76,-740r74,0r0,740r-74,0r0,-740","w":226},"\u00d4":{"d":"403,-927r66,0r143,125r-89,0r-86,-73r-88,73r-91,0xm314,-662v-140,56,-246,229,-172,416v53,137,235,242,414,168v110,-46,196,-142,196,-291v0,-148,-87,-243,-194,-292v-74,-33,-168,-31,-244,-1xm74,-219v-44,-93,-37,-213,2,-305v70,-164,290,-288,507,-200v136,55,243,170,243,354v0,183,-109,296,-243,354v-156,67,-342,4,-423,-82v-34,-36,-65,-75,-86,-121","w":869},"\u00e8":{"d":"436,-677r-33,58r-198,-107r32,-60xm537,-311v-21,-127,-135,-219,-281,-176v-77,23,-132,85,-146,176r427,0xm406,-548v125,39,206,142,202,300r-498,0v13,116,91,198,212,198v101,0,166,-54,196,-129r74,0v-42,136,-205,235,-378,170v-126,-47,-219,-211,-154,-374v47,-117,184,-215,346,-165","w":650},"\u00e3":{"d":"415,-713v31,0,37,-12,63,-26r36,49v-26,20,-59,38,-98,39v-61,1,-90,-41,-145,-41v-28,0,-51,15,-67,30r-35,-50v30,-28,65,-42,104,-42v61,-1,86,41,142,41xm423,-480v-156,-62,-316,42,-311,208v4,136,87,222,224,222v159,0,259,-150,202,-309v-20,-56,-61,-100,-115,-121xm336,-561v103,0,168,47,215,110r0,-96r70,0r0,547r-70,0v-2,-31,4,-69,-2,-96v-53,94,-206,136,-332,86v-126,-50,-219,-208,-154,-372v41,-103,131,-179,273,-179","w":683},"\u00dc":{"d":"438,-928r0,126r-74,0r0,-126r74,0xm290,-928r0,126r-74,0r0,-126r74,0xm327,13v-169,0,-252,-111,-252,-292r0,-461r74,0r0,461v-1,135,53,225,178,225v125,0,178,-90,178,-225r0,-461r74,0r0,461v0,181,-83,292,-252,292","w":655},"\u00ea":{"d":"293,-764r66,0r143,125r-89,0r-86,-73r-88,73r-91,0xm537,-311v-21,-127,-135,-219,-281,-176v-77,23,-132,85,-146,176r427,0xm406,-548v125,39,206,142,202,300r-498,0v13,116,91,198,212,198v101,0,166,-54,196,-129r74,0v-42,136,-205,235,-378,170v-126,-47,-219,-211,-154,-374v47,-117,184,-215,346,-165","w":650},"#":{"d":"236,-467r-27,194r123,0r27,-194r-123,0xm130,-206r-97,0r0,-67r107,0r26,-193r-107,0r0,-68r117,0r29,-206r69,0r-29,206r124,0r29,-206r69,0r-29,206r83,0r0,67r-93,0r-27,194r92,0r0,67r-101,0r-29,206r-69,0r29,-206r-124,0r-29,206r-69,0"},"!":{"d":"111,-740r74,0r0,547r-74,0r0,-547xm111,-126r74,0r0,126r-74,0r0,-126","w":295},"\"":{"d":"204,-444r-12,-296r81,0r-12,296r-57,0xm48,-444r-12,-296r81,0r-12,296r-57,0","w":309},"\u0141":{"d":"59,-334r78,-56r0,-350r74,0r0,296r153,-111r0,77r-153,111r0,300r306,0r0,67r-380,0r0,-313r-78,56r0,-77","w":517,"k":{"\u00dd":91,"\u00fd":23,"\u0178":91,"\u00ff":23,"y":23,"Y":91,"W":67,"V":113,"T":46}},"\u0142":{"d":"43,-283r0,-71r70,-51r0,-335r70,0r0,284r76,-55r0,70r-76,55r0,386r-70,0r0,-335","w":300},"\u00b9":{"d":"138,-686r-75,0r0,-54r135,0r0,444r-60,0r0,-390","w":332},"\u2212":{"d":"51,-287r504,0r0,68r-504,0r0,-68","w":606},"\u00bc":{"d":"629,-78r-225,0r0,-49r219,-317r65,0r0,312r41,0r0,54r-41,0r0,78r-59,0r0,-78xm175,-686r-75,0r0,-54r135,0r0,444r-60,0r0,-390xm629,-132r0,-222r-2,0r-149,222r151,0xm516,-740r60,0r-333,740r-60,0","w":831},"\u00bd":{"d":"605,-451v116,-5,186,128,119,219v-51,69,-124,119,-185,178r210,0r0,54r-298,0r0,-49r194,-181v22,-24,45,-42,45,-83v0,-50,-35,-84,-87,-84v-61,0,-89,39,-88,107r-60,0v-3,-105,58,-156,150,-161xm156,-686r-75,0r0,-54r135,0r0,444r-60,0r0,-390xm497,-740r60,0r-333,740r-60,0","w":831},"\u00d0":{"d":"665,-371v0,-202,-145,-309,-370,-302r-107,0r0,259r210,0r0,67r-210,0r0,280v164,2,322,1,398,-96v40,-51,79,-115,79,-208xm326,-740v256,4,413,132,413,372v0,236,-156,364,-409,368r-216,0r0,-347r-74,0r0,-67r74,0r0,-326r212,0","w":790},"\u00a6":{"d":"373,-203r0,350r-74,0r0,-350r74,0xm373,-703r0,350r-74,0r0,-350r74,0","w":672},"\u00fe":{"d":"349,-50v137,0,224,-86,224,-222v0,-140,-88,-226,-224,-226v-134,0,-219,92,-219,225v0,134,87,223,219,223xm349,13v-102,0,-167,-48,-215,-109r0,288r-70,0r0,-932r70,0r0,289r2,0v53,-95,207,-138,334,-86v124,51,217,212,151,373v-42,102,-132,177,-272,177","w":682},"\u00fd":{"d":"378,-786r32,60r-198,107r-33,-58xm228,-18r-213,-529r74,0r174,436r186,-436r74,0r-317,739r-73,0","w":536},"\u00f0":{"d":"470,-514v-36,-50,-92,-91,-146,-124r-155,61r-50,-39r145,-55v-38,-21,-79,-37,-117,-49r78,-33v35,11,80,28,119,51r133,-51r48,37r-125,49v113,84,214,189,214,381v0,142,-75,232,-177,276v-117,51,-258,-1,-317,-67v-61,-69,-105,-202,-55,-309v45,-94,124,-172,257,-172v66,0,103,16,146,46xm324,-495v-127,0,-212,85,-212,223v0,133,85,221,214,221v131,0,218,-89,218,-228v0,-136,-91,-216,-220,-216","w":655},"\u0160":{"d":"158,-927r86,73r88,-73r89,0r-143,125r-67,0r-145,-125r92,0xm250,-686v-124,-11,-180,162,-82,222v63,39,179,47,228,96v94,60,92,235,14,315v-67,69,-227,87,-308,17v-43,-37,-80,-91,-80,-171r74,0v3,90,61,153,154,153v113,0,187,-121,130,-218v-76,-130,-338,-59,-338,-282v0,-150,146,-237,291,-183v71,26,119,91,122,185r-74,0v-4,-80,-53,-127,-131,-134","w":498},"\u00d7":{"d":"74,-72r182,-182r-181,-180r48,-48r181,180r180,-180r48,48r-180,180r181,182r-48,48r-181,-182r-182,182","w":606},"\u00b2":{"d":"173,-747v116,-5,186,128,119,219v-51,69,-124,119,-185,178r210,0r0,54r-298,0r0,-49r194,-181v22,-24,45,-42,45,-83v0,-50,-35,-84,-87,-84v-61,0,-89,39,-88,107r-60,0v-3,-105,58,-156,150,-161","w":332},"\u017e":{"d":"122,-764r86,73r88,-73r89,0r-143,125r-67,0r-145,-125r92,0xm10,-61r303,-423r-293,0r0,-63r377,0r0,63r-300,421r318,0r0,63r-405,0r0,-61","w":425},"\u00dd":{"d":"406,-949r32,60r-198,107r-33,-58xm258,-247r-257,-493r82,0r211,415r217,-415r81,0r-260,493r0,247r-74,0r0,-247","w":592,"k":{"\u00ea":89,"\u00e3":93,"\u00e8":89,"\u00e0":93,"\u00e4":93,"\u00ec":-23,"\u00e1":93,"\u00eb":89,"\u00fc":69,"\u00f2":89,"\u00e5":93,"\u00ef":-23,"\u00c4":122,"\u00c0":122,"\u00f9":69,"\u00e2":93,"\u00f4":89,"\u00c2":122,"\u00f5":89,"\u00c5":122,"\u00c1":122,"\u00c3":122,"\u00ee":-23,"\u00ed":-13,"\u00e9":89,"\u00fa":69,"\u00fb":69,"\u00f6":89,"\u00f3":89,"\u00f8":89,"v":17,"u":69,"q":93,"p":67,"o":89,"i":-13,"e":89,"a":93,"A":122,";":23,":":-9,".":65,",":97}},"\u00b3":{"d":"226,-650v-18,-67,-130,-48,-118,32r-60,0v1,-81,46,-129,121,-129v73,0,116,46,120,117v2,42,-21,62,-41,80v39,24,67,59,70,115v8,152,-213,192,-279,75v-12,-21,-20,-49,-21,-85r60,0v2,59,32,100,92,102v54,2,88,-37,88,-91v0,-60,-47,-92,-127,-86r0,-54v62,5,110,-18,95,-76","w":332},"\u017d":{"d":"149,-927r86,73r88,-73r89,0r-143,125r-67,0r-145,-125r92,0xm12,-67r364,-606r-353,0r0,-67r436,0r0,67r-363,606r374,0r0,67r-458,0r0,-67","w":480},"\u00be":{"d":"254,-650v-18,-67,-130,-48,-118,32r-60,0v1,-81,46,-129,121,-129v73,0,116,46,120,117v2,42,-21,62,-41,80v39,24,67,59,70,115v8,152,-213,192,-279,75v-12,-21,-20,-49,-21,-85r60,0v2,59,32,100,92,102v54,2,88,-37,88,-91v0,-60,-51,-92,-127,-86r0,-54v62,5,110,-18,95,-76xm684,-78r-225,0r0,-49r219,-317r65,0r0,312r41,0r0,54r-41,0r0,78r-59,0r0,-78xm586,-740r60,0r-333,740r-60,0xm684,-132r0,-222r-2,0r-149,222r151,0","w":831},"\u20ac":{"d":"98,-468v-1,-190,124,-320,324,-276v58,13,106,45,136,85r-29,72v-35,-55,-88,-99,-178,-99v-123,0,-173,97,-179,218r311,0r-25,63r-287,0r0,70r259,0r-25,63r-232,0v3,124,59,218,178,218v70,0,130,-27,159,-72r0,87v-34,32,-90,54,-159,52v-169,-4,-247,-113,-252,-285r-91,0r25,-63r64,0r0,-70r-89,0r25,-63r65,0"},"\u0161":{"d":"103,-764r86,73r88,-73r89,0r-143,125r-67,0r-145,-125r92,0xm192,13v-103,0,-168,-63,-168,-175r70,0v1,70,34,106,98,112v101,10,135,-126,62,-174v-80,-52,-214,-52,-214,-185v0,-94,60,-152,156,-152v90,0,146,58,149,149r-70,0v-4,-52,-31,-82,-82,-86v-80,-6,-111,108,-49,144v89,51,222,58,220,200v-3,107,-63,167,-172,167","w":388},"\u00de":{"d":"475,-370v0,-119,-97,-163,-234,-154r-107,0r0,308r107,0v137,9,234,-35,234,-154xm549,-370v0,157,-112,224,-283,221r-132,0r0,149r-74,0r0,-740r74,0r0,149r132,0v171,-3,283,64,283,221","w":592}}});

function prepareComment(commentDiv) {

  commentDiv = $(commentDiv)
  if (commentDiv.attr('comment_done'))
    return;
  commentDiv.on(
    {
      focus: function () { if ($.trim($(this).val()) == 'Reply to this comment') $(this).val('').addClass('fieldEntry') },
      blur: function () { if ($.trim($(this).val()) == '') $(this).val('Reply to this comment').removeClass('fieldEntry') },
      keypress: function (event) {
        if (event.which == 13) {
          event.preventDefault()
          $(this).closest('form').submit()
        }
      }
    },
    'textarea.replyField'
  )

  commentDiv.find('.mainComment').hoverIntent(
    function(){
      var mainComment = $(this)
      if(!(mainComment.find('.showHide').length)){
        mainComment.find('.icons img').css( 'display','inline' ); // REVISED 7/26/12
        mainComment.children('.replyOuter').animate( { 'height': ($(this).find('.replyInner').innerHeight() + 10) + 'px' }, 400 );
      }
      else{
        if(mainComment.find('.showHide').html() == 'hide'){
          mainComment.find('.icons img').css( 'display','inline' ); // REVISED 7/26/12
          mainComment.children('.replyOuter').animate( { 'height': ($(this).find('.replyInner').innerHeight() + 10) + 'px' }, 400 );
        }
        else{
          mainComment.find('.icons img').css( 'display','none' );
        }
      }
    },
    function(){
      var mainComment = $(this)
      if(!(mainComment.find('.noLove').length)){
        mainComment.find('.icons img').css( 'display','none' ); // REVISED 7/26/12
      }
      else{
        mainComment.find('.icons img').css( 'display','none' ); // REVISED 7/26/12
      }

      if( mainComment.find('.replyField').is(':focus')){}
      else{ mainComment.children('.replyOuter').animate( { 'height':'0px' }, 400 ); }
    }
  )


  commentsDiv.find('.subComment').hoverIntent(
    function(){
      $(this).find('.icons img').css( 'display','inline' ); // REVISED 7/26/12
    },
    function(){
      $(this).find('.icons img').css( 'display','none' ); // REVISED 7/26/12
    }
  )

  commentsDiv.find('.showComment').click(
    function(){
      if($(this).children('.showHide').html() == 'show'){
        $(this).siblings('.commentHidden').css( 'display','inline' );
        $(this).children('.showHide').html('hide');
        $(this).parent().siblings('.toolbar').find('.icons img').css( 'display','inline' ); // REVISED 7/26/12
        $(this).closest('.mainComment').find('.replyOuter').css( 'height',($(this).closest('.mainComment').find('.replyInner').innerHeight() + 10) + 'px' );
        if($(this).closest('.commentLine').children('.subComment').length){
          $(this).closest('.commentLine').children('.subComment').css( 'display','block' );
        }
      }
      else{
        $(this).siblings('.commentHidden').css( 'display','none' );
        $(this).children('.showHide').html('show');
        $(this).parent().siblings('.toolbar').find('.icons img').css( 'display','none' ); // REVISED 7/26/12
        $(this).closest('.mainComment').find('.replyOuter').css( 'height','0px' );
        if($(this).closest('.commentLine').children('.subComment').length){
         $(this).closest('.commentLine').children('.subComment').css( 'display','none' );
        }
      }
    }
  );

  commentsDiv.attr("comment_done", 1);
}


function commentReplySubmit(thisform) {
    var form = $(thisform);
    var text = form.find('textarea').val();
    if (!text.length) return false;
    if (!form.find('textarea').hasClass('fieldEntry')) return false;
    var params = {};
    params['id'] = form.closest('.mainComment').attr('id')
    params['text'] = text
    form.find('textarea').val('Reply to this comment').blur().removeClass('fieldEntry')
    MG.call(
      "/actionsAPI/comment_create", params,
      function(data) {
        var comment = $(data.comment)
        form.closest('.commentLine').append(comment.hide())
        comment.show()
        prepareComment(comment)
        $('.commentCount > strong').html(data.comment_count)
        _gaq.push(['_trackEvent', 'Comment', 'Create Comment']);
      }, DEFAULT_ERROR_FUNCTION, NO_BLOCK_UI
    )
    return false // block the form submission
  }

function removeComment(clickedDiv) {
  //CLICK: COMMENTS - REMOVE YES
  clickedDiv = $(clickedDiv)
  var params = {}
  if ($(clickedDiv).closest('.subComment').size()) //removing a reply
    params['id'] = $(clickedDiv).closest('.subComment').attr('id')
  else
    params['id'] = $(clickedDiv).closest('.commentLine').find('.mainComment').attr('id')

  MG.call(
    "/actionsAPI/comment_delete",
    params,
    function(data) {
      var comment = $(clickedDiv).closest('.commentLine')
      comment.replaceWith(data.comment)
      _gaq.push(['_trackEvent', 'Comment', 'Comment Deleted']);
      prepareComment($('.mainComment[id=' + comment.find('[id]').first().attr('id') + ']').parent())
    }, DEFAULT_ERROR_FUNCTION, NO_BLOCK_UI
  )
  return false
}

function prepareComments() {
  commentsDiv = $('#moduleComments')

  var commentForm = commentsDiv.find('#commentAddForm')
  var commentInput = commentForm.find('textarea')
  // commentInput.unbind('keypress')
  commentInput
    .focus(function () { if ($.trim($(this).val()) == 'Add a comment') $(this).val('').addClass('fieldEntry') })
    .blur(function () { if ($.trim($(this).val()) == '') $(this).val('Add a comment').removeClass('fieldEntry') })
    .keypress(function (event) {
      if (event.which == 13) {
        event.preventDefault() // don't let enter actually make a newline TODO we may want to change this if user does shift + enter
        commentForm.submit()
      }
    })

  // commentForm.unbind('submit')
  commentForm.submit( function () {
    var text = $(this).find('textarea[name=comment_text]').val()
    if (!text.length) return false
    if (!commentInput.hasClass('fieldEntry')) return false;
    var params = {}
    params['id'] = $(this).find('input[name=id]').val()
    params['text'] = text
    commentInput.val('Add a comment').removeClass('fieldEntry')
    commentInput.blur()
    MG.call(
      "/actionsAPI/comment_create",
      params,
      function(data) {
        var comment = $(data.comment)
        comment.hide().insertAfter('.commentAdd').fadeIn(1000)
        $('.commentCount > strong').html(data.comment_count)
        _gaq.push(['_trackEvent', 'Comment', 'Create Comment']);
        prepareComment(comment)
      }, DEFAULT_ERROR_FUNCTION, NO_BLOCK_UI
    )
    return false // block the form submission
  })

  $('.commentLine').each(function () {
    prepareComment(this)
  });
  $('#commentsExpand').click(function() {
    MG.call(
      "/actionsAPI/comment_get_more_view",
      commentsGetMoreParams,
      function(data) {
        $('#commentsBodyInner').append(data.comments);
        $('.commentLine').each(function () {
          prepareComment(this)
        });
      }, DEFAULT_ERROR_FUNCTION, $('#moduleComments')
    );
  });
}

function reRenderComments(view, id) {
  if ($('#moduleComments .navLink').text() == view) return
  var params = {
    view: view,
    id: $('#moduleComments').find('input[name=id]').val()
  }
  MG.call(
    "/actionsAPI/comment_get_view", params,
    function(data) {
      var commentDiv = $(data.comments)
      $('#moduleComments').fadeOut(500, function () {
        $('#moduleComments').before(commentDiv.css("visibility", "hidden")).remove();
        setTimeout(function(){$('#moduleComments').css("visibility", "visible").hide().fadeIn(500)}, 100);
        prepareComments(commentDiv)
      })
    },
    NO_ERROR_FUNCTION,
    $('#moduleComments')
  )
}

function thumbComment(id, thumb, commentDiv) {
  commentDiv = $(commentDiv)
  var params = {
    id: id,
    thumb: thumb
  }
  MG.call(
      "/actionsAPI/comment_thumb", params,
      function(data) {
        var newCommentDiv = $(data.comment)
        commentDiv.fadeOut(500, function () {
          commentDiv.before(newCommentDiv.hide()).remove()
          newCommentDiv.fadeIn(500)
          prepareComment(newCommentDiv)
        })
      }, NO_ERROR_FUNCTION, NO_BLOCK_UI
  )
}

var flagCommentSuccess = function(data,commentDiv) {
  var newCommentDiv = $(data.comment)
  commentDiv.before(newCommentDiv.hide()).remove()
  newCommentDiv.fadeIn(500)
  prepareComment(newCommentDiv)
  _gaq.push(['_trackEvent', 'Comment', 'Comment Flagged']);
  closeModal('modalFlag')
}


$(document).ready(function () {
  prepareComments($('#moduleComments'))
})

// everything to do with creating, maintaining, and cancelling orders
var ordersAPI = {

  cancelId: null,
  cancelType: null,
  cancelInterval: null,

  defaultCancelSuccessFunction: function() {
    _gaq.push(['_trackEvent', 'Account', 'Cancel Subscription']);
  },

  defaultCancelEmailSuccessFunction: function() {
    _gaq.push(['_trackEvent', 'Account', 'Cancellation Email']);
  },

  cancelSubscription: function(cancellationReasons, callbackOverride, errorCallbackOverride) {
    console.log('cancelling subscription for ' + this.cancelId + ' with reasons ' + cancellationReasons)

    var callback = typeof callbackOverride != 'undefined' ? callbackOverride : this.defaultCancelSuccessFunction
    var params = { subscriptionId: this.cancelId, cancellationReasons: cancellationReasons }

    if (typeof errorCallbackOverride != 'undefined') MG.call('/accountAPI/cancelSubscription', params, callback, errorCallbackOverride)
    else MG.call('/accountAPI/cancelSubscription', params, callback)
  },

  sendCancellationConfirmationEmail: function(cancellationReasons, callbackOverride, errorCallbackOverride) {
    console.log('sending cancellation confirmation email for ' + this.cancelId + ' with reasons ' + cancellationReasons)

    var callback = typeof callbackOverride != 'undefined' ? callbackOverride : this.defaultCancelEmailSuccessFunction
    var params = { subscriptionId: this.cancelId, cancellationReasons: cancellationReasons }

    if (typeof errorCallbackOverride != 'undefined') MG.call('/accountAPI/sendCancellationEmail', params, callback, errorCallbackOverride)
    else MG.call('/accountAPI/sendCancellationEmail', params, callback)
  },

  pushCancelMessageToGAQ: function(action) {
    action = 'Cancel ' + this.cancelType + ' ' + this.cancelInterval + ' ' + action;
    console.log('pushing ' + action + ' to GAQ');
    _gaq.push(['_trackEvent', 'Account', action]);
  },

  openWaitlistCancel: function(orderId, orderInterval) {
    this.openCancel(orderId, orderInterval, 'Waitlist');
  },

  openSubCancel: function(orderId, orderInterval) {
    this.openCancel(orderId, orderInterval, 'Sub');
  },

  openCancel: function(orderId, orderInterval, orderType) {
    this.cancelId = orderId;
    this.cancelType = orderType;
    this.cancelInterval = orderInterval;
    this.pushCancelMessageToGAQ('Step1');
    launchModal('modalCancel' + orderType);
  },

  advanceToCancel2: function() {
    this.pushCancelMessageToGAQ('Step2')
    closeModal('modalCancel' + this.cancelType);
    launchModal('modalCancel' + this.cancelType + '2');
  },

  advanceToCancelReason: function() {
    this.pushCancelMessageToGAQ('Step3')
    closeModal('modalCancel' + this.cancelType + '2');
    launchModal('modalCancel' + this.cancelType + 'Reason');
  },

  validateCancelReason: function() {
    var checkedBoxes = $('#modalCancel' + this.cancelType + 'Reason input:checked');
    $('#modalCancel' + this.cancelType + 'Reason .errorBox').hide();
    $('#reason' + this.cancelType + 'Desc').removeClass('fieldError');

    // nothing is checked, we need at least one!
    if(!checkedBoxes.size()) {
      $('#modalCancel' + this.cancelType + 'Reason .errorBox').text('Please select at least 1 reason.').show();
      return false
    }

    // other is checked, we need a real value
    if ($('#reason' + this.cancelType + 'Other').is(':checked') && $('#reason' + this.cancelType + 'Desc').val() == '') {
      $('#reason' + this.cancelType + 'Desc').addClass('fieldError');
      return false
    }

    return true
  },

  getCancelReasons: function() {
    var cancellationReasons = []

    var checkedBoxes = $('#modalCancel' + this.cancelType + 'Reason input:checked');
    checkedBoxes.each(function () {
      console.log('adding cancel reason for ' + $(this).attr('name'))
      if ($(this).attr('name') == 'reason' + ordersAPI.cancelType + 'Other')
        cancellationReasons.push($(this).attr('name') + '.' + $('#reason' + ordersAPI.cancelType + 'Desc').val())
      else
        cancellationReasons.push($(this).attr('name'))
    })

    console.log("cancellationReasons = " + cancellationReasons)
    return cancellationReasons
  },

  validateReasonAndAdvanceToCancelConfirm: function() {
    if (!this.validateCancelReason()) return

    this.cancelSubscription(
        this.getCancelReasons(),
        function (successResponse) {
          ordersAPI.pushCancelMessageToGAQ('Finish');
          closeModal('modalCancel' + ordersAPI.cancelType + 'Reason');
          launchModal('modalCancel' + ordersAPI.cancelType + 'Confirm');
        },
        function (errorResponse) {
          $('#modalCancel' + ordersAPI.cancelType + 'Reason .errorBox').html('Sorry, something went wrong.  Please try again or <a href="http://help.ipsy.com/customer/portal/emails/new">contact ipsyCare</a>').show();
        })
  },

  validateReasonAndAdvanceToCancelEmail: function() {
    if (!this.validateCancelReason()) return

    this.sendCancellationConfirmationEmail(
        this.getCancelReasons(),
        function (successResponse) {
          ordersAPI.pushCancelMessageToGAQ('Cancellation Email');
          closeModal('modalCancel' + ordersAPI.cancelType + 'Reason');
          launchModal('modalCancel' + ordersAPI.cancelType + 'Confirm');
        },
        function (errorResponse) {
          $('#modalCancel' + ordersAPI.cancelType + 'Reason .errorBox').html('Sorry, something went wrong.  Please try again or <a href="http://help.ipsy.com/customer/portal/emails/new">contact ipsyCare</a>').show();
        })
  }
}
function updateBeautyProfile() {
  div = $('#modalEditBeautyProfile')
  var params = {
    hair_color: $('select[name=hair_color]').val(),
    eye_color: $('select[name=eye_color]').val(),
    skin_tone: $('select[name=skin_tone]').val()
  }
  MG.call('/accountAPI/update_beauty_profile', params, function(data) {
    _gaq.push(['_trackEvent', 'Account', 'Update Beauty Profile']);
    var current = $('.renderUserAttributes')
    current.after(data.user_attributes).remove()
    prepareUserAttributesTable()
  })
}

function updatePersonalInfo() {
  div = $('#modalEditPersonal')
  dob = div.find('#dobSelector')
  var params = {
    firstname: div.find('#firstnameSelector input').val(),
    firstname_show: div.find('#firstnameSelector .text').text(),
    lastname: div.find('#lastnameSelector input').val(),
    lastname_show: div.find('#lastnameSelector .text').text(),
    dob_month: dob.find('#dob_month').val(),
    dob_day: dob.find('#dob_day').val(),
    dob_year: dob.find('#dob_year').val(),
    dob_show: dob.find('.toggleDisplay .text').text(),
    location: div.find('#locationSelector input').val(),
    location_show: div.find('#locationSelector .text').text(),
    location_country: div.find('#countrySelector select').val(),
    location_country_show: div.find('#countrySelector .text').text()
  }
  MG.call('/accountAPI/update_personal_info', params, function(data) {
    _gaq.push(['_trackEvent', 'Account', 'Update Personal Info']);
    var current = $('.renderUserAttributes')
    current.after(data.user_attributes).remove()
    prepareUserAttributesTable()
    closeModal('modalEditPersonal')
  }, function(err) {
    alert(err)
  })
}

function resetDobDaysInMonth() {
  var selectedDay = $('#dob_day').val()
  $('#dob_day').empty()
  var days = daysInMonth($('#dob_month').val(), $('#dob_year').val())
  for (i = 1; i <= days; i++) {
    var html = i == selectedDay ? '<option selected="selected">' + i + '</option' : '<option>' + i + '</option'
    $('#dob_day').append(html)
  }
}

function showAllVideosByLook(id, sortBy) {
  if (typeof sortBy == 'undefined') sortBy = 'Most Loved'
  var params = {
    id: id,
    sort_by: sortBy
  }
  MG.call('/actionsAPI/all_videos_by_look', params, function(data) {
    $('#modalViewAll').remove()
    $(data.show_all).appendTo($('body'))
    launchModal('modalViewAll')
  })
}

function prepareUserAttributesTable() {
  // HOVER: PERSONAL DETAILS - EDIT CONTROLS
  if ($('.profileDetails table .editRow').size() > 0) {
    $('.profileDetails table').hoverIntent(
      function(){
        $('.profileDetails table').addClass('editContainer');
        $('.profileDetails td').addClass('editSection');
        $('.profileDetails .editRow').show();
        $('.profileDetails .editRow div').animate({'height':'20px'},300);
      },
      function(){
        $('.profileDetails table').removeClass('editContainer');
        $('.profileDetails td').removeClass('editSection');
        $('.profileDetails .editRow div').animate({'height':'0px'},300);
        $('.profileDetails .editRow').hide();
      }
    );
  }
}

function prepareUsername() {
  //HOVER: USERNAME - EDIT CONTROLS
  if ($('.profileDetails .usernameContainer .editUsernameLink').size() > 0) {
    $('.profileDetails .usernameContainer').hoverIntent(
      function(){
        $('.profileDetails h1').addClass('editUsername');
        $('.profileDetails .editUsernameLink').animate({'height':'25px'},300); /* 08/15/2012 */
      },
      function(){
        $('.profileDetails h1').removeClass('editUsername');
        $('.profileDetails .editUsernameLink').animate({'height':'0px'},300); /* 08/15/2012 */
      }
    );
  }
}

function prepareDescription() {
  // HOVER: ABOUT ME - EDIT CONTROLS
  if ($('.profileDetails .editAboutContainer .editAboutLink').size() > 0) {
    $('.profileDetails .editAboutContainer').hoverIntent(
      function(){
        $('.profileDetails .mainText').addClass('editAbout');
        $('.profileDetails .editAboutLink').animate({'height':'25px'},300);
      },
      function(){
        $('.profileDetails .mainText').removeClass('editAbout');
        $('.profileDetails .editAboutLink').animate({'height':'0px'},300);
      }
    );
  }
}


function prepareProfile() {

  prepareUserAttributesTable()

  // HOVER: BANNER - EDIT CONTROLS
  $('.profileBanner .photo').hoverIntent(
    function(){ $('.profileBanner .editPhoto').show(); }, function(){ $('.profileBanner .editPhoto').hide(); }
  );
  $('.profileBanner .stats').hoverIntent(
    function(){ $('.profileBanner .editBackground').show(); }, function(){ $('.profileBanner .editBackground').hide(); }
  );

  prepareUsername()
  prepareDescription()

  // REMOVE: WEBSITE URL
  $('#modalEditWebsites .remove').click( function(){

    // HIDES REMOVED URL
    $(this).parent().remove();

    // RESIZES MODAL AFTER REMOVAL OF A URL
    $('#modalEditWebsites .modalContent').animate( { 'height': ($('#modalEditWebsites .modalInner').innerHeight()) + 'px' },500 );

    // RE-ENABLES DROPDOWN SELECTION OF THE REMOVED URL
    switch($(this).closest('li').find('.label').html())
    {

      case 'Website URL:':
        $('.websiteNew').find('select option:eq(1)').removeAttr('disabled');
        break;
      case 'Facebook URL:':
        $('.websiteNew').find('select option:eq(2)').removeAttr('disabled');
        break;
      case 'Twitter URL:':
        $('.websiteNew').find('select option:eq(3)').removeAttr('disabled');
        break;
      case 'Pinterest URL:':
        $('.websiteNew').find('select option:eq(4)').removeAttr('disabled');
        break;
      case 'YouTube URL:':
        $('.websiteNew').find('select option:eq(5)').removeAttr('disabled');
        break;
    }
  });

  //ADD: NEW URL (TEXT FIELD)
  $('#modalEditWebsites').on('change', '.urlNew, select', function(){
    // ADDS A NEW ROW IF BOTH A WEBSITE TYPE (SELECT DROPDOWN) AND WEBSITE URL (TEXT FIELD) ARE SELECTED/ENTERED BY THE USER
    var input = $(this).closest('li').find('input')
    var select = $(this).closest('li').find('select')
    if(input.val() != '' && input.val() != 'http://' && select.prop('selectedIndex') != 0) {
      var disabledTypes = getDisabledTypes()
      if (disabledTypes.length != 5)
      // SHOWS NEW URL
      var lastRow = $('.websiteNew').last()
      var websiteElement = lastRow.clone()
      websiteElement.find('select option[name=new]').removeAttr('disabled')
      websiteElement.find('select').val('Add New')
      websiteElement.find('input').val('http://')
      websiteElement.find('option').each(function () {
        if (disabledTypes.indexOf($(this).val()) >= 0) $(this).attr('disabled', 'disabled')
        else $(this).removeAttr('disabled')
      })
      websiteElement.insertAfter(lastRow)
      // RESIZES MODAL AFTER ADDITION OF A NEW URL
      $('#modalEditWebsites .modalContent').animate( { 'height': ($('#modalEditWebsites .modalInner').innerHeight()) + 'px' },500 );
    }
  });

  // ADD: NEW URL (SELECT DROPDOWN)
  $('#modalEditWebsites select').blur( function(){
    if($(this).closest('li').find('input').val() != '' && $(this).closest('li').find('input').val() != 'http://' && $(this).prop('selectedIndex') != 0) {
      $('#websiteNew2').show();
      $('#modalEditWebsites .modalContent').animate( { 'height': ($('#modalEditWebsites .modalInner').innerHeight()) + 'px' },500 );
    }
  });
}

function toggleDisplay(el){
  if($(el).find('.text').html() == 'shown')
  {
    $(el).find('.switch').animate( {'margin-left':'-6px'},300);
    $(el).find('.text').html('hidden');
    $(el).find('.container').css( {'background':'#aaaaaa','text-align':'right'} );
    $(el).css( {'borderColor':'#aaaaaa'} );
  }
  else
  {
    $(el).find('.switch').animate( {'margin-left':'34px'},300);
    $(el).find('.text').html('shown');
    $(el).find('.container').css( {'background':'#d13393','text-align':'left'} );
    $(el).css( {'borderColor':'#d13393'} );
  }
}

function updateUserWebsites() {
  var error = false
  var params = {}
  $('#modalEditWebsites .websiteNew').each(function () {
    var type = $(this).find('select').val()

    if (type != 'Add New') params[type] = $(this).find('input').val()
    else{
      val = $(this).find('input').val()
      if(val && val!='http://')
      {
        alert("Please, select a URL type.")
        error =true;
        return false;
      }
    }

  })

  if(error)
    return false;

  if ($('#urlFacebook').size()) params['Facebook'] = $('#urlFacebook').val()
  if ($('#urlTwitter').size()) params['Twitter'] = $('#urlTwitter').val()
  if ($('#urlPinterest').size()) params['Pinterest'] = $('#urlPinterest').val()
  if ($('#urlYouTube').size()) params['YouTube'] = $('#urlYouTube').val()
  if ($('#urlWeb').size()) params['Website'] = $('#urlWeb').val()
  MG.call('/accountAPI/update_user_websites', params, function(data) {
    $('.renderUserAttributes').replaceWith(data.user_attributes)
    _gaq.push(['_trackEvent', 'Account', 'Update Websites']);
    prepareUserAttributesTable()
  })
  return true;
}


function getDisabledTypes() {
  var disabledTypes = []
  if ($('#urlFacebook').size()) disabledTypes.push('Facebook')
  if ($('#urlTwitter').size()) disabledTypes.push('Twitter')
  if ($('#urlPinterest').size()) disabledTypes.push('Pinterest')
  if ($('#urlYouTube').size()) disabledTypes.push('YouTube')
  if ($('#urlWeb').size()) disabledTypes.push('Website')
  websiteElements = $('.websiteNew select').each(function () {
    if ($(this).val() == 'Facebook') disabledTypes.push('Facebook')
    if ($(this).val() == 'Twitter') disabledTypes.push('Twitter')
    if ($(this).val() == 'Pinterest') disabledTypes.push('Pinterest')
    if ($(this).val() == 'YouTube') disabledTypes.push('YouTube')
    if ($(this).val() == 'Website') disabledTypes.push('Website')
  })
  return disabledTypes
}

function updateDescription() {
  params = {
    description: $('#modalEditAboutMe textarea').val()
  }
  MG.call('/accountAPI/update_description', params, function(data) {
    $('.editAboutContainer').replaceWith(data.user_description)
    prepareDescription()
    _gaq.push(['_trackEvent', 'Account', 'Change Description']);
  })
}

$(document).ready(function () {
  prepareProfile()
})
/* === Date Utils === */

function daysInMonth(month, year) {
  return 32 - new Date(year, month, 32).getDate()
}

/* === String Utils === */

/* Beware that this will eliminate some extra whitespace you have in the value. Methods should be used when losing extra whitespace is not an issue. */
function htmlEncode(value){
  return $('<div/>').text(value).html();
}

function htmlDecode(value){
  return $('<div/>').html(value).text();
}
$.fn.resizeImageToMax = function(max) {
  imgElement = $(this)
  imgElement.css({'height':'auto', 'width':'auto'});
  if(imgElement.width() >= imgElement.height() && imgElement.width() > max)
    imgElement.css('width', max + 'px')
  else if(imgElement.height() > imgElement.width() && imgElement.height() > max)
    imgElement.css('height', max + 'px')
}
$.fn.ellipsed = function (configOverride) {
  // TODO configOverride should actually override default properties
  var config = {
    ellipsis        : '... ',
    /*  How to cut off the text/html: 'word'/'letter'/'children' */
    wrap            : 'word',
    /*  jQuery-selector for the element to keep and put after the ellipsis. */
    after           : '.readMore',
    /*  Whether to update the ellipsis: true/'window' */
    watch           : false,
    /*  Optionally set a max-height, if null, the height will be measured. */
    height          : null,
    /*  Deviation for the height-option. */
    tolerance       : 0,
    /*  Callback function that is fired after the ellipsis is added,
    receives two parameters: isTruncated(boolean), orgContent(string). */
    callback        : function( isTruncated, orgContent ) {},
    lastCharacter   : {
      /*  Remove these characters from the end of the truncated text. */
      remove          : [ ' ', ',', ';', '.', '!', '?' ],
      /*  Don't add an ellipsis if this array contains
      the last character of the truncated text. */
      noEllipsis      : []
    }
  }
  for (configKey in configOverride)
    config[configKey] = configOverride[configKey]
  $(this).dotdotdot(config)
}

// this jQuery plug-in controls expandable divs such as product module, video module, etc.
// this plug-in should be applied to any div you want to click to expand/contract the module
$.fn.expandable = function(startingSize, contentDiv, triggerElements, onExpand, onContract, animationSpeed, startOpen) {
  triggerElements = $(triggerElements)
  // make sure we have jq objects
  var viewportDiv = $(this)
  contentDiv = $(contentDiv)
  animationSpeed = typeof animationSpeed !== 'undefined' ? animationSpeed : 400;
  //set up functions for changing size (i.e. change carrots from expand to contract)
  onExpand = typeof onExpand !== 'undefined' ? onExpand : function () {
    triggerElements.find('img.carrotExpand').attr('src', '/images/carrot_contract.png')
    triggerElements.filter('.carrotExpand').attr('src', '/images/carrot_contract.png')
  }
  onContract = typeof onContract !== 'undefined' ? onContract : function () {
    triggerElements.find('img.carrotExpand').attr('src', '/images/carrot_expand.png')
    triggerElements.filter('.carrotExpand').attr('src', '/images/carrot_expand.png')
  }
  onTooLarge = typeof onTooLarge !== 'undefined' ? onTooLarge : function () {
    triggerElements.css('pointer', 'normal')
  }

  //if there's nothing to expand turn off pointers for triggerElements and shrink down the viewport pane
  if (startingSize >= parseInt(contentDiv.height())) {
    viewportDiv.animate( { 'height': contentDiv.height() + 'px' }, animationSpeed);
    onTooLarge()
    return // don't do anything cool
  } else if (viewportDiv.height() != startingSize) {
    if (!startOpen)
      viewportDiv.animate( { 'height': startingSize + 'px' }, animationSpeed);
    else
      viewportDiv.animate( { 'height': contentDiv.height() + 'px' }, animationSpeed, onExpand)
  }
  // otherwise add a click to all trigger divs!
  triggerElements.each(function () {
    $(this).click( function () {

      if (parseInt(viewportDiv.height()) == startingSize){ // not expanded
        viewportDiv.animate( { 'height': contentDiv.height() + 'px' }, animationSpeed, onExpand)
      }
      else{ // already expanded
        viewportDiv.animate( { 'height': startingSize + 'px' }, animationSpeed, onContract)
      }
    })
  })
  return $(this)
}


$.fn.scroller = function (pageCount, leftTriggerElement, rightTriggerElement, width, scrollSpeed, isDynamic) {

  // init some variables
  scrollSpeed = typeof scrollSpeed == 'undefined' ? 500 : scrollSpeed
  isDynamic = typeof isDynamic == 'undefined' ? false : isDynamic
  var id = $(this).find('input[name=id]').val();
  var loadedCount = 0
  var pagePosition = 0
  var position = 0
  var scrollDiv = $(this)
  var leftTriggerCarrot = leftTriggerElement.find('[src]')
  var rightTriggerCarrot = rightTriggerElement.find('[src]')
  // setting icons
  leftTriggerCarrot.attr('src', '/images/carrot_left-gray.png')
  if (pageCount > 1) rightTriggerCarrot.attr('src', '/images/carrot_right-pink.png')
  else rightTriggerCarrot.attr('src', '/images/carrot_right-gray.png')

  // function for when left scroll is initiated
  leftTriggerElement.unbind('click')
  leftTriggerElement.click(function () {
    if (leftTriggerElement.find('[src="/images/carrot_left-pink.png"]').size()) {
      position = position - width
      scrollDiv.animate( {'scrollLeft': position}, scrollSpeed );
      rightTriggerCarrot.attr('src', '/images/carrot_right-pink.png')
      pagePosition--
    }
    if (position == 0) leftTriggerCarrot.attr('src', '/images/carrot_left-gray.png')

  })
  // function for when right scroll is initiated
  rightTriggerElement.unbind('click')
  rightTriggerElement.click(function () {
    if (rightTriggerElement.find('[src="/images/carrot_right-pink.png"]').size()) {
      if(isDynamic){
        if(loadedCount==pagePosition){
          var params = {};
          params['sort'] = scrollDiv.find('input[name=sort]').val();
          params['page'] = pagePosition+1
          params['count'] = 6
          params['id'] = id
          var action = "/actionsAPI/looks_panel_contents_view";

          MG.call(action, params, function(data) {
            loadedCount++

            scrollDiv.find("ul:last-child").after(data.looks)
          });
        }
      }
      pagePosition++
      position = position + width

      scrollDiv.animate( {'scrollLeft': position}, scrollSpeed );
      leftTriggerCarrot.attr('src', '/images/carrot_left-pink.png')
    }
    if (position == (pageCount -1) * width) rightTriggerCarrot.attr('src', '/images/carrot_right-gray.png')
  })

  return $(this)
}
//


var qasInit = false

function toggleToolbar(active){

  if ($('.toolbarSection :animated').length == 0){
    _gaq.push(['_trackEvent', 'Account', active + ' opened']);
    if(!qasInit){
      if(typeof qas != 'undefined' && qas!=null){
        qas.verification.Init();
      }
      qasInit = true
    }

    $('#toolBar div').removeClass('active')
    $('#toolBar .carrot').attr('src','/images/carrot_pink.png')

    if($('#' + active + 'Bar').css('height') == '0px'){
      $('#' + active + 'Btn').addClass('active')
      $('#' + active + 'Btn .carrot').attr('src','/images/carrot_pink-up.png')
      $('.toolbarSection').animate({ 'height':'0px',opacity:0 },500, function(){
        $('#' + active + 'Bar').show().animate( { 'height': ($('#' + active + 'Bar .accountMidInner').height() + 30) + 'px', opacity:1 }, 500);
      });
    }
    else{
      $('#' + active + 'Bar').animate( { 'height':'0px', opacity:0  }, 500);
    }
  }
}

<!--- CONTROLS FOR NAV --->

function navHover(value){
  $('#nav' + value + 'Content').animate({'height': ($('#nav' + value + 'List').height() + 5) + 'px' },300);
  $('#nav' + value).css( { 'color': '#ffffff' }, 300);
  $('#nav' + value).css( { 'background': '#d13393' }, 300);
  $('#nav' + value + 'Carrot').attr('src','/images/carrot_white-up.png');
}

function navUnhover(value){
  $('#nav' + value + 'Content').animate( { 'height': '0px' }, 300);
  $('#nav' + value).css( { 'color': '#d13393' }, 300);
  $('#nav' + value).css( { 'background': '#ffffff' }, 300);
  $('#nav' + value + 'Carrot').attr('src','/images/carrot_pink.png');
}

function navUserHover(value){
  $('#nav' + value + 'Content').animate( { 'height': ($('#nav' + value + 'List').height() + 5) + 'px' }, 300);
  $('#nav' + value).css({'color': '#ffffff', 'background': '#555555'}, 300);
  $('#nav' + value + 'Carrot').attr('src','/images/carrot_pink-up.png');
}

function navUserUnhover(value){
  $('#nav' + value + 'Content').animate( { 'height': '0px' }, 300);
  $('#nav' + value).css( { 'color': '#555555' }, 300);
  $('#nav' + value).css( { 'background': 'none' }, 300);
  $('#nav' + value + 'Carrot').attr('src','/images/carrot_pink.png');
}

function resetSearch(value){
  if(document.getElementById('searchField').value == '') document.getElementById('searchField').value = 'Search'
}

function toggleUserBar(active,inactive) {
  if(document.getElementById('user' + active).style.height == '0px') {
    $('#user' + active).animate( { 'height':'190px', opacity:1  }, 500).show();
    $('#toggleUser' + active).css( 'background-image','url(/images/module_user-bgactive.png)' );
    document.getElementById('carrotUser' + active).src = '/images/carrot_pink-up.png';

    $('#user' + inactive).hide();
    $('#user' + inactive).animate( { 'height':'0px', opacity:0  }, 500);
    $('#toggleUser' + inactive).css( 'background-image','url(/images/module_user-divider.gif)' );
    document.getElementById('carrotUser' + inactive).src = '/images/carrot_pink.png';
  }
  else {
    $('#toggleUser' + active).css( 'background-image','url(/images/module_user-divider.gif)' );
    document.getElementById('carrotUser' + active).src = '/images/carrot_pink.png';
    $('#user' + active).animate( { 'height':'0px', opacity:0  }, 500);
  }
}

function toggleUserBar(active,inactive) {
  if(document.getElementById('user' + active).style.height == '0px') {
    $('#user' + active).animate( { 'height':'190px', opacity:1  }, 500).show();
    $('#toggleUser' + active).css( 'background-image','url(/images/module_user-bgactive.png)' );
    document.getElementById('carrotUser' + active).src = '/images/carrot_pink-up.png';

    $('#user' + inactive).hide();
    $('#user' + inactive).animate( { 'height':'0px', opacity:0  }, 500);
    $('#toggleUser' + inactive).css( 'background-image','url(/images/module_user-divider.gif)' );
    document.getElementById('carrotUser' + inactive).src = '/images/carrot_pink.png';
  }
  else {
    $('#toggleUser' + active).css( 'background-image','url(/images/module_user-divider.gif)' );
    document.getElementById('carrotUser' + active).src = '/images/carrot_pink.png';
    $('#user' + active).animate( { 'height':'0px', opacity:0  }, 500);
  }
}

/* START VERSION 2.0 SCRIPTS ---------------------------------------------------------------------------------------------------------------------------------- */

function navHover2(navType,navGroup)
{
  $('#' + navGroup + ' .carrot').attr('src','/images/carrot_white-up.png');

  switch(navType)
  {
    case 'Main':
      $('.' + navGroup + 'Content').stop().animate( { 'height': ($('.' + navGroup + 'List').height() + 5) + 'px' }, 300);
      $('#' + navGroup).css( { 'color': '#ffffff' } );
      $('#' + navGroup).css( { 'background': '#d13393' } );
      break;

    case 'User':
      $('.' + navGroup + 'Content').stop().animate( { 'height': ($('.' + navGroup + 'List').height() + 5) + 'px' }, 300);
      $('#' + navGroup).css( { 'color': '#ffffff' } );
      $('#' + navGroup).css( { 'background': '#555555' } );
      break;

    case 'Sort':
      $('#' + navGroup + ' .navSortContent')
        .stop()
        .animate({
          'height': ($('#' + navGroup + ' .navSortList').height() + 5) + 'px'
        }, 300);

      $('#' + navGroup + ' .navSort').css( { 'color': '#ffffff' } );
      $('#' + navGroup + ' .navSort').css( { 'background': '#555555' } );
      break;
  }
}

function navUnHover2(navType,navGroup)
{
  switch(navType)
  {
    case 'Main':
      $('.' + navGroup + 'Content').stop().animate( { 'height': '0px' }, 300);
      $('#' + navGroup).css( { 'color': '#d13393' } );
      $('#' + navGroup).css( { 'background': 'none' } );
      $('#' + navGroup + ' .carrot').attr('src','/images/carrot_pink.png');
      break;

    case 'User':
      $('.' + navGroup + 'Content').stop().animate( { 'height': '0px' }, 300);
      $('#' + navGroup).css( { 'color': '#555555' } );
      $('#' + navGroup).css( { 'background': 'none' } );
      $('#' + navGroup + ' .carrot').attr('src','/images/carrot_purple.png');
      break;

    case 'Sort':
      $('#' + navGroup + ' .navSortContent').stop().animate( { 'height': '0px' }, 300);
      $('#' + navGroup + ' .navSort').css( { 'color': '#555555' } );
      $('#' + navGroup + ' .navSort').css( { 'background': 'none' } );
      $('#' + navGroup + ' .carrot').attr('src','/images/carrot_purple.png');
      break;
  }
}

function resetSearch(value){
  if(document.getElementById('searchField').value == '') {
    document.getElementById('searchField').value = 'Search'
  }
}

function loveButtonMouseEnter() {
  $('.buttonLoved').html('<img src="/images/icon_heart-broken.png"> UnLove Her'); $('.buttonLoved').css( { 'color':'#d13193','font-weight':'normal' } )
}

function loveButtonMouseLeave() {
  $('.buttonLoved').html('<img src="/images/icon_heart-pink.png"> You Love Her!'); $('.buttonLoved').css( { 'color':'#aaaaaa','font-weight':'bold' } )
}

function prepareLovedVideos() {
  if ($('#videosSidebar').length > 0)
    $('#videosSidebar .rowOuter').expandable(288, $('#videosSidebar .rowInner'), $('#videosExpand'))
}

$(window).load(function () {
  if (typeof(homePageLookIds) != "undefined") loadHomePageLooks(homePageLookIds)
  prepareLookPreviews()
})

//
$(document).ready(function () {
	
  prepareUserLove();
  prepareLovedVideos();

  // USER PHOTO ON USER BADGE
  $('#header .userPhoto').load(function () {
    if($('#header .userPhoto').height() > $('#header .userPhoto').width()) {
      $('#header .userPhoto').css('width','67px');
      $('#header .userPhoto').css('marginTop','-'+ (($('#header .userPhoto').height() - 67) / 2) + 'px');
      $('#header .userPhoto').animate({'opacity':1},300);
    }
    else {
      $('#header .userPhoto').css('height','67px');
      $('#header .userPhoto').css('marginLeft','-' + (($('#header .userPhoto').width() - 67) / 2) + 'px');
      $('#header .userPhoto').animate({'opacity':1},300);
    }
  })
  if ($('#header .userPhoto').height() != null) $('#header .userPhoto').load() // if the image already loaded and we missed the load event we should still show it

  // USER PHOTO ON PROFILE PAGE
  $('#userProfileImage').load(function () {
    if($('#userProfileImage').height() > $('#userProfileImage').width()) {
      $('#userProfileImage').css('width','250px');
      $('#userProfileImage').css('marginTop','-'+ (($('#userProfileImage').height() - 250) / 2) + 'px');
      $('#userProfileImage').animate({'opacity':1},300);
    }
    else {
      $('#userProfileImage').css('height','250px');
      $('#userProfileImage').css('marginLeft','-' + (($('#userProfileImage').width() - 250) / 2) + 'px');
      $('#userProfileImage').animate({'opacity':1},300);
    }
    $('.backgroundContainer img').css('height', '250px')
    $('.backgroundContainer').animate({'opacity':1},300);
  })
  if ($('#userProfileImage').height() != null) $('#userProfileImage').load() // if the image already loaded and we missed the load event we should still show it

  $('.profileBanner .photo').hoverIntent(
    function(){ $('.profileBanner .editPhoto').show(); }, function(){ $('.profileBanner .editPhoto').hide(); }
  );
  $('.profileBanner .stats').hoverIntent(
    function(){ $('.profileBanner .editBackground').show(); }, function(){ $('.profileBanner .editBackground').hide(); }
  );
  $('.profileBanner .editPhoto').click(
    function(){ $('.profileBanner .photo iframe').show(); }
  );
  $('.profileBanner .editBackground').click(
    function(){ $('.profileBanner .stats iframe').show(); }
  );

  $('#looksSidebar .row li').hoverIntent(
    function(){ $(this).find('.lookInfo').animate( { 'opacity': 1 }, 200 ); },
    function(){ $(this).find('.lookInfo').animate( { 'opacity': 0 }, 200 ); }
  )

  // setting up all expando divs
  // expandable function sig: function(startingSize, contentDiv, triggerElements, onExpand, onContract, animationSpeed) {
  $('.mainOuter').expandable(650, '.mainInner', $('#descriptionExpand'))
  $('#glammiesSidebar .rowOuter').expandable(136, $('#glammiesSidebar .rowInner'), $('#glammiesExpand'))
  $('#looksSidebar .rowOuter').expandable(283, $('#looksSidebar .rowInner'), $('#looksExpand'))


  // set default display of 'Looks' and 'Videos' scroll boxes
  $('#userVideos').css('height', '0px');
  $('#userLooks').css('height', '0px');

  // click events for toggling display of 'Looks' and 'Videos' scroll boxes
  $('#toggleUserVideos').live('click', function(){	toggleUserBar('Videos','Looks'); });
  $('#toggleUserLooks').live('click', function(){ toggleUserBar('Looks','Videos'); });

  $('#userVideos').find('.rowOuter').scroller(
    Math.ceil(parseInt($('#userVideos .realRowCount').val())/5),
    $('#userVideos').find('div.carrotLeft'),
    $('#userVideos').find('div.carrotRight'),
    550
  )

  $('.recentContainer').each( function () {
    $(this).find('.rowOuter').scroller(
        Math.ceil($(this).find('li').size() / 5),
        $(this).find('div.carrotLeft'),
        $(this).find('div.carrotRight'),
        550)
  })

  $('#userLooks').find('.rowOuter').scroller(
    Math.ceil(parseInt($('#userLooks .rowCount').html())/7),
    $('#userLooks div.carrotLeft'),
    $('#userLooks div.carrotRight'),
    550
  )

  $('.categoryContainer').each(function () {
    highlightSortOption($(this), "love_count");
  })

  $('.horizontalScrollContainer .rowOuter').each(function () {
    var scrollerDiv = $(this).closest('.horizontalScrollContainer')
    $(this).scroller(
      Math.ceil(parseInt(scrollerDiv.find('input[name=count]').val())/6),
      scrollerDiv.find('div.carrotLeft'),
      scrollerDiv.find('div.carrotRight'),
      865,500,true)
  })

  <!--- NEW BUTTON ONCLICK STATE --->
  // $('.buttonPink').mousedown( function(){ $(this).css( 'margin','1px 0px -1px 0px' ); });
  // $('.buttonPink').mouseup( function(){ $(this).css( 'margin','0px' ); });

  <!--- CONTROLS FOR ACCOUNT BAR --->

  //set default display of 'My Glam Room' and 'My Account'
  if ( $('#glamroomBar').length )$('#glamroomBar').css( 'height','0px' );
  if ( $('#accountBar').length )$('#accountBar').css( 'height','0px' );

  //click events for toggling display of 'My Glam Room' and 'My Account'
  $('#glamroomBtn').click( function(){  toggleToolbar('glamroom'); });
  $('#accountBtn').click( function(){ if ($('#accountContent').length > 0) { toggleToolbar('account') } else { loadAccountInfo() } });

  $('#navCreate').hover( function(){ navHover('Create'); },function(){ navUnhover('Create'); });
  $('#navAbout').hover( function(){ navHover('About'); },function(){ navUnhover('About'); });

  $('#navUser').hover( function(){ navUserHover('User'); },function(){ navUserUnhover('User'); });
  $('#searchField').click( function(){
    if(document.getElementById('searchField').value == 'Search'){ document.getElementById('searchField').value = '' }
  });

<!--- CONTROLS FOR NAVIGATION TYPES --->

  $('.navMain').hover( function(){ var navGroup = $(this).closest('[id]').attr('id'); navHover2('Main',navGroup); },function(){ var navGroup = $(this).closest('[id]').attr('id'); navUnHover2('Main',navGroup); });
  $('.navUser').hover( function(){ var navGroup = $(this).closest('[id]').attr('id'); navHover2('User',navGroup); },function(){ var navGroup = $(this).closest('[id]').attr('id'); navUnHover2('User',navGroup); });
  $('body').on({
      mouseenter: function() { navHover2('Sort', $(this).closest('[id]').attr('id')) },
      mouseleave: function() { navUnHover2('Sort', $(this).closest('[id]').attr('id')) }
    },
    '.navSort'
  );

<!--- CONTROLS FOR SEARCH BAR --->

  $('#searchField').click( function(){
    if($('#searchField').val() == 'Search') $('#searchField').val('')
  });

<!--- CONTROLS FOR USER BAR --->

  //set default display of 'Looks' and 'Videos' scroll boxes
  if ( $('#userVideos').length )$('#userVideos').css( 'height','0px' );
  if  ( $('#userLooks').length )$('#userLooks').css( 'height','0px' );

  //click events for toggling display of 'Looks' and 'Videos' scroll boxes
  $('#toggleUserVideos').click( function(){ toggleUserBar('Videos','Looks'); });
  $('#toggleUserLooks').click( function(){ toggleUserBar('Looks','Videos'); });
});

<!--- ADD VIDEO FUNCTIONS --->
function addToLook(value)
{
  if(value == 'create')
  {
    $('#createNewLook').show()
    $('#createNewLookField').focus()
    $('#createNewLookField').select()
    $('#modalAddVideo .modalContent').animate( { 'height': ($('#modalAddVideo .modalInner').innerHeight()) + 'px' } )
    $('#createNewLook').animate( { opacity:1 },300 )
  } else {
    $('#createNewLook').animate( { opacity:0 },300 )
    $('#createNewLook').hide(0,
      function(){
        $('#modalAddVideo .modalContent').animate( { 'height': ($('#modalAddVideo .modalInner').innerHeight()) + 'px' } )
      }
    )
    $('#createNewLookField').val('Name Your Look')
  }
}

<!--- VIDEO INSERT BOX FUNCTIONS --->
function removeAddedVideo(videoLinkIndex, uuid, look_id) {
  var params = {};
  //alert("in removeAddedVideo videoLinkIndex:" + videoLinkIndex);

  params['video_link_index'] = videoLinkIndex;
  params['uuid'] = uuid
  params['look_id'] = look_id
  var action = "/actionsAPI/remove_added_video";

  MG.call(action, params, function(data) {
    var rendered_stuff = data;
    var videoInsert = $('#videoInsert').first()
    videoInsert.before(rendered_stuff)
    videoInsert.remove()
    _gaq.push(['_trackEvent', 'Look Creation', 'Removed Video']);
  });
}

<!--- SPECIAL SHOW METHOD FOR CREATE LOOK MODAL
function showCreateLookModal(frame, newSrc) {
  // Because we need to set the iframe src property only
  // at the time when the user clicks on the create look
  // otherwise everytime users open any page iframe would
  // get loaded and waste resources.
  //alert("frame=" + frame + "\n\n newSrc=" + newSrc);
  //frame.attr('src', newSrc);
  //alert("frame_new.src = " + frame.src);
  launchModal('modalCreateLook');
}

<!--- CONTROLS FOR GLAM ROOM --->

function changeBag(bag)
{
  $('.mthContainer,#imgBag').hide()
  $('#imgBag').attr('src','/images/products/gb_bag-' + bag + '.png')
  $('#gb_' + bag + ',#imgBag').fadeIn(500, function(){
    $('#glamroomBar').animate( { 'height': ($('#glamroomBar .accountMidInner').height() + 30) + 'px', opacity:1 }, 500);
  })
}

/* END VERSION 2.0 SCRIPTS ---------------------------------------------------------------------------------------------------------------------------------- */


// GLOBAL SHOW/HIDE FUNCTIONS
function hideDiv(value)
{
  document.getElementById(value).style.display = 'none';
  return false;
}
function showDiv(value)
{
  document.getElementById(value).style.display = '';
  return false;
}

//MODAL LAUNCH FUNCTION
function launchModal(modalId) {

  /*google analytics
  _gaq.push(['_trackEvent', 'Modal Opened', modalId]);
  //google analytics*/
  if (modalId === "modalLogin" || modalId === "modalLoginEmail") {
    ensureFacebookLoaded();
  }
  var modal = jQuery('#' + modalId);
  var modalContent = modal.find('.modalContent');
  var modalInner = modal.find('.modalInner');
  var gridBox = modal.find('.gridBox');
  var transactionHistory = modal.find('.transactionHistory');
  var sortBy = modal.find('.sortBy');

  if (!window.innerHeight) {
    var viewportHeight = document.documentElement.clientHeight;
  }
  else {
    var viewportHeight = window.innerHeight;
  }

  modal.trigger("show");
  modal.show().animate( { opacity:1 },250,
    function() {
      if (modal.closest('.stickyContainer').length) {
        var positionTop = (viewportHeight / 2) - (modalContent.height() / 2);
      }
      else {
        var positionTop = (viewportHeight / 2) + $(document).scrollTop() - (modalContent.height() / 2);
      }

      // POSITION
      modalContent.css( 'margin-left', '-' + (modalInner.innerWidth() / 2) + 'px' )

      // IF MODAL HEIGHT IS LARGER THAN VIEWPORT
      if (modalInner.innerHeight() > (viewportHeight - 100)) {

        // VERTICAL ALIGNMENT
        modalContent.css( 'top', 50 + $(document).scrollTop() + 'px' )

        // HEIGHT
        modalContent.css( 'height', modalInner.height() + 'px' )
        modalInner.css( 'height', modalInner.height() + 150 )

        // GRIDBOX: SET DIMENSIONS
        if(gridBox.length) {
          modalContent.css( 'height', (viewportHeight - 150) + 'px' )
          modalInner.css( 'height', modalContent.height() + 'px' )
          gridBox.css({ 'height':(modalInner.height() - 75) + 'px', 'width':(modalInner.width()) + 'px' })
          sortBy.css( 'width', (modalInner.width()) + 'px' )
        }

        // TRANSACTION HISTORY: SET DIMENSIONS
        if(transactionHistory.length) {
          modalContent.css( 'height', (viewportHeight - 150) + 'px' )
          modalInner.css( 'height', modalContent.height() + 'px' )
          transactionHistory.css({ 'height':(modalInner.height() - 200) + 'px', 'width':(modalInner.width()) + 'px' })
        }

        // ANIMATE OPACITY
        modalContent.animate({ opacity:1 }, 500, function(){
          modalInner.animate({ opacity:1 }, 700)
        })

      }
      else
      {
        // VERTICAL ALIGNMENT
        modalContent.css( 'top', (positionTop - 20) + 'px' )

        // GRIDBOX: SET DIMENSIONS
        if(gridBox.length) {
          gridBox.css({ 'height':'auto', 'width':'795px' })
        }

        // ANIMATE OPACITY
        modalContent.animate({ 'top': positionTop + 'px', opacity: 1 }, 300, function(){
          modalInner.animate({ opacity: 1 }, 700)
        })

      }
      console.log('modalContent:' + modalContent.height())
      console.log('modalInner:' + modalInner.height())
      console.log('positionTop:' + positionTop)
      console.log('gridBox:' + gridBox.height())
      console.log('scrollTop:' + $(document).scrollTop())
    }
  )
}

//RE-ADJUST MODAL HEIGHT WHEN CONTENT CHANGES
function adjustModal(modal){
  var modal = jQuery('#' + modal);
  var modalContent = modal.find('.modalContent');
  var modalInner = modal.find('.modalInner');

  if(!window.innerHeight){
   var viewportHeight = document.documentElement.clientHeight;
  }
  else{
    var viewportHeight = window.innerHeight;
  }
  if(modalInner.innerHeight() > (viewportHeight - 100)){
    modalContent.css( 'top', 50 + $(document).scrollTop() + 'px' )
  }
  else{
    modalContent.css( 'top',(viewportHeight / 2) + $(document).scrollTop() - (modalContent.height() / 2) )
  }
}

//TRANSITION FROM MODAL TO ANOTHER MODAL
function changeModal(currentModal,newModal) {
  closeModal(currentModal);
  setTimeout(function(){ launchModal(newModal) }, 500);
}

// CLOSE MODAL
function closeModal(modalId) {
  var modal = jQuery('#' + modalId);
  var modalContent = modal.find('.modalContent');
  var modalInner = modal.find('.modalInner');
  var positionTop = ((window.innerHeight / 2) + $(document).scrollTop()) - (($('#' + modalId + ' .modalContent').height() + 50) / 2);

  // MODALINNER: RESET OPACITY
  modalInner.animate( { opacity:0 }, 300, function(){
    // MODALCONTENT: RESET POSITION & OPACITY
    modalContent.animate( { 'top': positionTop + 'px', opacity:0},300, function(){
      // MODAL: RESET OPACITY & DISPLAY
      modal.animate( { opacity:0 }, 250, function(){
        modal.hide()
      })
    })
  })
}

// MODAL MOBILE LAUNCH
function launchModalMobile(modal) {
  $('.' + modal).removeClass('truncate')
  $('.' + modal).removeClass('hideDesktop')
  $('.pageContainer').css({'height':$('.modalMobileContent').height() - 20,'overflow':'hidden' })
}
// LAUNCH MODAL SELECT
function launchModalSelect(desktop,mobile) {
  if ($(window).width() > 480) {
    window.open(desktop);
  }
  else {
    $('.' + mobile).removeClass('hideDesktop')
    launchModalMobile(mobile);
  }
}
// CLOSE MODAL MOBILE LAUNCH
function closeModalMobile(modal){
  $('.' + modal).addClass('truncate')
  $('.pageContainer').css({ 'height':'auto','overflow':'visible' })
}


function launchFlagModal(parentId, parentDiv, successFunction) {
  launchModal('modalFlag')
  var form = $('#modalFlag form')
  var params = {}
  params['id'] = parentId
  form.find('#otherReasonField').focus(function () {
    form.find('input:radio[value=other]').attr('checked','checked')
  })
  form.unbind()
  form.submit(function () {
    params['reason'] =  $("input[name=flagReason]:checked").val()
    if (!params['reason'] || params['reason'] == '') {
      alert("Please select a flag reason")
      return false
    }
    if (params['reason'] == 'other') params['reason'] = $('#otherReasonField').val()
    MG.call("/actionsAPI/flag", params,
        function(data){ successFunction(data,parentDiv); },
        DEFAULT_ERROR_FUNCTION,
        NO_BLOCK_UI
    )
    return false // block the form submission
  })
}

var flagShareSuccess = function(data,shareDiv) {
  var newShareDiv = $(data.share)
  shareDiv.before(newShareDiv.hide()).remove()
  newShareDiv.fadeIn(500)
  //prepareComment(newCommentDiv)
  closeModal('modalFlag')
}

var homePageLooks = []
var homePageLooksIndex = 1
var fullyRendered = false
var scrolling = false

// ids is an array of string arrays
function loadHomePageLooks(ids) {
  $(window).scroll( function () {
    if (scrolling) return;

    scrolling = true

    if ($(this).scrollTop() + $(this).height() >= $(document).height()-10) {
      console.log("scrolling index " + homePageLooksIndex)
      if (homePageLooksIndex >= ids.length) {
        homePageLooksIndex = 0;
        fullyRendered = true
      }

      if (!fullyRendered) {
        if (ids[homePageLooksIndex] && ids[homePageLooksIndex] instanceof Array && ids[homePageLooksIndex][0]) {
          var params = { ids: ids[homePageLooksIndex] }
          !function (params, index, array) {
            MG.callPassive("/actionsAPI/get_looks_previews", params, function(data) { // handle the return data
              array.push( data.looks)
              $('.pageContainer').last().after(data.looks)
              _gaq.push(['_trackEvent', 'Home', 'Scroll ', '' +homePageLooksIndex]);
            }, NO_ERROR_FUNCTION, NO_BLOCK_UI)
          }(params, homePageLooksIndex, homePageLooks);
        }
      } else {
        $('.pageContainer').last().after(homePageLooks[homePageLooksIndex])
      }

      homePageLooksIndex ++
      prepareLookPreviews()

    }

    scrolling = false;
  })
}

function loadAccountInfo() {
  ensureFacebookLoaded(function() {
    MG.callPassive("/actionsAPI/get_account_info", {}, function(data) { // handle the return data
      if ($('#accountContent').length == 0) {
        $('#accountMidInner').append(data.accountInfo)
      }
      toggleToolbar('account');
      FB.XFBML.parse(document.getElementById('fb_button_div'));
    }, NO_ERROR_FUNCTION, NO_BLOCK_UI);
  });
}
// DISABLES SCROLLING FOR THE CURRENT WINDOW
function disableScrolling() {
  var scrollPosition = [self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
                        self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop];
  var html = jQuery('html');
  html.data('scroll-position', scrollPosition);
  html.data('previous-overflow', html.css('overflow'));
  html.css('overflow', 'hidden');
  window.scrollTo(scrollPosition[0], scrollPosition[1]);
}

//ENABLES SCROLLING FOR THE CURRENT WINDOW
function enableScrolling() {
  var html = jQuery('html');
  var scrollPosition = html.data('scroll-position');
  if (scrollPosition) {
    html.css('overflow', html.data('previous-overflow'));
  window.scrollTo(scrollPosition[0], scrollPosition[1])
  }
}

// CANCEL SUBSCRIPTION FUNCTIONS
function cancelPrompt(subType, subId)
{
  launchModal('modalSubscription');
  document.getElementById('cancelSubType').value = subType;
  document.getElementById('cancelSubId').value = subId;
}

//CANCEL SUBSCRIPTION FUNCTIONS
function cancelWaitlistPrompt(subType, subId)
{
  launchModal('modalWaitlist');
  document.getElementById('cancelWaitlistSubType').value = subType;
  document.getElementById('cancelWaitlistSubId').value = subId;
}

// CHANGE PAYMENT METHOD FUNCTIONS
function selectPaymentType(value)
{
  switch(value)
  {
    case 'creditCard':
      showDiv('creditCard');
      break;
    default:
      hideDiv('creditCard');
      break;
  }
}

function selectCreditCardType(value)
{
  switch(value)
  {
    case 'Amex':
      showDiv('ccNumberAmex');
      showDiv('amexCCV');
      hideDiv('ccNumberStandard');
      hideDiv('standardCCV');
      break;
    case 'Visa':
    case 'Discover':
    case 'Mastercard':
    default:
      showDiv('ccNumberStandard');
      showDiv('standardCCV');
      hideDiv('ccNumberAmex');
      hideDiv('amexCCV');
      break;
  }
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function isEmailInUse(email) {
  MG.call("/accountAPI/isEmailInUse", {email:email}, function(data) {
    if (data != "false") {
      return true;
    }
  }, NO_ERROR_FUNCTION);
  return false;
}

function changePassword() {
  if ($('#passwordNew').val() != $('#passwordNew2').val()) {
    alert("Passwords don't match!");
    return;
  }
  var params = {
    old_pass:$('#passwordCurrent').val(),
    new_pass:$('#passwordNew').val()
  };
  MG.callSSL("/accountAPI/changePassword", params, function(data) {
    _gaq.push(['_trackEvent', 'Account', 'Change Password']);
    hideDiv('modalPassword');
    $('#passwordNew').val('');
    $('#passwordNew2').val('');
    $('#passwordCurrent').val('');
  });
  return false;
}

function turnFacebookShareOff() {
  var shareLink = $('#facebookShareStatusLink')
  MG.call('/accountAPI/remove_facebook_share', {}, function(data) {
    _gaq.push(['_trackEvent', 'SocialConnect', 'Facebook share off']);
    shareLink.text("Off");
    shareLink.attr('onclick','').unbind('click');
    shareLink.click(turnFacebookShareOn);
  }, function(err) {
    alert(err)
  })
}

function turnFacebookShareOn() {
  var shareLink = $('#facebookShareStatusLink')
  MG.call('/accountAPI/add_facebook_share', {}, function(data) {
    _gaq.push(['_trackEvent', 'SocialConnect', 'Facebook share on']);
    shareLink.text("On");
    shareLink.attr('onclick','').unbind('click');
    shareLink.click(turnFacebookShareOff);
  }, function(err) {
    alert(err)
  })
}

function updateNameEmail() {
  var params = {
    firstname:$('#contactFirstName').val(),
    lastname:$('#contactLastName').val(),
    email:$('#contactEmail').val()
  };
  MG.callSSL("/accountAPI/changeNameEmail", params, function(data) {
    _gaq.push(['_trackEvent', 'Account', 'Change Name and Email']);
    hideDiv('modalContact');
    $('.userFullName').html(params.firstname + " " + params.lastname);
    $('.userEmail').html(params.email);
  });
  return false;
}

// Helper functions.
function findIndex(arr, el) {
  if (!arr) { return -1; }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].value == el) { return i; }
  }
  return -1;
}

function setSelect(select, optionValue) {
  var idx = findIndex(select.options, optionValue);
  if (idx != -1) { select.selectedIndex = idx; }
}

function loveUpdate(data, div, renderType, id) {

  if(id && $("[lovable_id="+id +"] .loves").length>0){
    $("[lovable_id="+id +"] .loves").each(function(){
      $(this).closest(".tooltipNew").replaceWith(data.love_button)
    })
  }
  else
    div.closest(".tooltipNew").replaceWith(data.love_button)

  if (renderType != null && typeof renderType != 'undefined') {
    var lovers = $('#glammiesSidebar.updateMe')
    if (lovers.size() > 0) {
      lovers.removeAttr('id')
      lovers.before($(data[renderType]).find('#glammiesSidebar'))
      lovers.remove()
    }
  }
}

function love(div, id, renderType, updateFunction) {
  if(id){
    if(id.lastIndexOf("u", 0) === 0){
      _gaq.push(['_trackEvent', 'Profile', 'Profile Loved']);
    } else if(id.lastIndexOf("l", 0) === 0){
      _gaq.push(['_trackEvent', 'Look', 'Look Loved']);
    } else if(id.lastIndexOf("v", 0) === 0){
      _gaq.push(['_trackEvent', 'Video', 'Video Loved']);
    }
  }
  loveUpdateAjax("/actionsAPI/love", div, id, renderType, updateFunction)
}

function unlove(div, id, renderType, updateFunction) {
  if(id){
    if(id.lastIndexOf("u", 0) === 0){
      _gaq.push(['_trackEvent', 'Profile', 'Profile Unloved']);
    } else if(id.lastIndexOf("l", 0) === 0){
      _gaq.push(['_trackEvent', 'Look', 'Look Unloved']);
    } else if(id.lastIndexOf("v", 0) === 0){
      _gaq.push(['_trackEvent', 'Video', 'Video Unloved']);
    }
  }
  loveUpdateAjax("/actionsAPI/unlove", div, id, renderType, updateFunction)
}

function loveUpdateAjax(action, div, id, renderType, updateFunction) {
  updateFunction = typeof updateFunction != 'undefined' ? updateFunction : loveUpdate
  div = $(div)
  var renderAssets = ['love_button']
  if (renderType != null && typeof renderType != 'undefined') {
    renderAssets.push(renderType)
  }
  var params = {
    id: id,
    render_assets: renderAssets
  }
  MG.call(action, params, function(data) { updateFunction(data, div, renderType, id) }, NO_ERROR_FUNCTION, NO_BLOCK_UI)
}

function findMgids(div) {
  var ids = []
  $(div).find('[mgid]').each(function () {
    ids.push($(this).attr('mgid'))
  })
  return ids
}

function findAllIdsInShowAllModal() {
  return findMgids('#modalViewAll')
}

function showAll(ids, sortBy, description, needResize) {
  if (typeof sortBy == 'undefined') sortBy = 'Most Loved'
  var params = {
    ids: ids,
    sort_by: sortBy,
    description: description
  }
  MG.call('/actionsAPI/show_all', params, function(data) {
    $('#modalViewAll').remove()
    $(data.show_all).appendTo($('body'))
    launchModal('modalViewAll')
    if (needResize) { // for products
      $('.product .photo img').each(function () {
        $(this).css({ 'max-width':'140px','max-height':'100px','width':'auto','height':'auto' });
        $(this).animate({'opacity':1},300);
      })
    }
  })
}

function showAllVideosByLook(id, sortBy) {
  if (typeof sortBy == 'undefined') sortBy = 'Most Loved'
  var params = {
    id: id,
    sort_by: sortBy
  }
  MG.call('/actionsAPI/all_videos_by_look', params, function(data) {
    $('#modalViewAll').remove()
    $(data.show_all).appendTo($('body'))
    launchModal('modalViewAll')
  })
}

function showAllVideosByCreator(id, sortBy) {
  if (typeof sortBy == 'undefined') sortBy = 'Most Loved'
  var params = {
    id: id,
    sort_by: sortBy
  }
  MG.call('/actionsAPI/all_videos_by_creator', params, function(data) {
    $('#modalViewAll').remove()
    $(data.show_all).appendTo($('body'))
    launchModal('modalViewAll')
  })
}

function showAllLooksByCreator(id, sortBy) {
  if (typeof sortBy == 'undefined') sortBy = 'Most Loved'
  var params = {
    id: id,
    sort_by: sortBy
  }
  MG.call('/actionsAPI/all_looks_by_creator', params, function(data) {
    $('#modalViewAll').remove()
    $(data.show_all).appendTo($('body'))
    launchModal('modalViewAll')
  })
}

function prepareUserLove() {
  $('#toggleUserLove').live("click", function () {
    var params = {}
    params['id'] = $(this).attr('uid')
    params['viewed_id'] = $(this).attr('vid')
    params['render_assets'] = ['user_panel']
    var action = $(this).hasClass('buttonLoved') ? "/actionsAPI/unlove" : "/actionsAPI/love"
    MG.call(action, params, function(data) { // handle the return data
      var share = $('#userModule').first()
      share.removeAttr('id')
      share.before(data.user_panel)
      share.remove()
    }, NO_ERROR_FUNCTION, NO_BLOCK_UI)
    return false // block the click from following any link
  })
}

function prepareLookPreviews(){
  $('.lookInfo .title, .lookContainer .description, .lookContainer .descriptionNoComment, .lookContainer .comment, .modalGrid .labelLook').ellipsed()

  $('.videoInsert li').hoverIntent(
    function(){ $(this).find('.infoVideo').show(); $(this).find('.infoVideo').animate( { opacity:1 },100 ); $('.infoVideo .videoDescription').ellipsed(); },
    function(){ $(this).find('.infoVideo').animate( { opacity:0 },200, function(){ $(this).hide(); } ); }
  )

  Cufon.replace('.profileDetails h1,.lookContainer .description h1,.promotion,.buttonPink,.buttonPinkLg,.buttonChar,.buttonGray,.buttonGreen,.buttonBuy,.lookPromo div,.modalContent h1,.subscribeDesc h1,.render');
}

function reRenderLooksList(categoryId, sortBy) {
  var params = {
    id: categoryId,
    sort: sortBy
  }
  MG.call(
    "/actionsAPI/looks_panel_contents_view", params,
    function(data) {

      $('#category'+categoryId+'Contents').html(data.looks)
      var scrollerDiv = $("#" +categoryId +  "-horizontalScrollContainer")
      scrollerDiv.find("input[name=sort]").val(sortBy)
      scrollerDiv.find(".rowOuter").scroller(
        Math.ceil(parseInt(scrollerDiv.find('input[name=count]').val())/6),
        scrollerDiv.find('div.carrotLeft'),
        scrollerDiv.find('div.carrotRight'),
        865, 500, true)
      scrollerDiv.find(".rowOuter").animate( {'scrollLeft': 0}, 500 );
    }
  )
  var navGroup = $('#category'+categoryId+'Contents').closest('.categoryContainer');
  highlightSortOption(navGroup, sortBy);
  navUnHover2('Sort',navGroup.attr('id'));
  //$('#category' + categoryId + 'Position').val('0');
  //scrollerControl('category', assetGroup, 'left');
}

function highlightSortOption(navGroup, sortBy) {
  var sortDropDown = navGroup.find('.navSort');
  sortDropDown.find('li').css('font-weight', 'inherit');
  var selectedSearch = sortDropDown.find('.' + sortBy + "Sort");
  if (selectedSearch.size() > 0) {
    sortDropDown.find('.currentSort').html(selectedSearch.html());
    selectedSearch.css('font-weight', 'bold');
  }
}

// UPDATE SHIPPING ADDRESS FUNCTIONS
function showShippingAddressModal(modalFormName, address, profileId) {
  launchModal(modalFormName);
  address = JSON.parse(address);
  document.getElementById('shippingProfileId').value = profileId;
  document.getElementById('shippingFirstName').value = address.firstname;
  document.getElementById('shippingLastName').value = address.lastname;
  document.getElementById('shippingAddress1').value = address.address1;
  document.getElementById('shippingAddress2').value = address.address2;
  document.getElementById('shippingCity').value = address.city;
  setSelect(document.getElementById('shippingCountry'), address.country);
  toggleCountry('shipping');
  document.getElementById('shippingZip1').value = address.zip;
  setSelect(document.getElementById('shippingST'), address.state);
  // Disable country change for shipping address.
  document.getElementById('shippingCountry').disabled = true;
  document.getElementById('shippingPhone1').value = address.phone.substring(0, 3);
  document.getElementById('shippingPhone2').value = address.phone.substring(3, 6);
  document.getElementById('shippingPhone3').value = address.phone.substring(6, 11);
}

// UPDATE BILLING ADDRESS FUNCTIONS
function showBillingAddressModal(modalFormName, address, ccLast4, profileType, profileId) {
  launchModal(modalFormName);
  address = JSON.parse(address);
  document.getElementById('billingProfileType').value = profileType;
  document.getElementById('billingProfileId').value = profileId;
  document.getElementById('billingFirstName').value = address.firstname;
  document.getElementById('billingLastName').value = address.lastname;
  document.getElementById('billingAddress1').value = address.address1;
  document.getElementById('billingAddress2').value = address.address2;
  document.getElementById('billingCity').value = address.city;
  setSelect(document.getElementById('billingCountry'), address.country);
  toggleCountry('billing');
  document.getElementById('billingZip1').value = address.zip;
  setSelect(document.getElementById('billingST'), address.state);
  document.getElementById('billingPhone1').value = address.phone.substring(0, 3);
  document.getElementById('billingPhone2').value = address.phone.substring(3, 6);
  document.getElementById('billingPhone3').value = address.phone.substring(6, 11);
}

/*
 * The following is a simple framework to provide access to the child frame/iframe
 * javascript methods and/or perform any action on the child frame DOM. It relies
 * on concept of the bridge which is a simple object with methods that performing
 * some action on the child frame.
 * For example your bridge defined in the frame could be

var bridgeA = {
  methodA:function(val) {
    $('#frameForm #field').val(val);
  }
}

  Now you want to set up the bridge inside of the document ready function of the frame
  by calling:

globalBridges.setBridge("frameIdBridge", bridgeA);

  Finally in the main/parent page you can use this bridge by calling:

globalBridges.getBridge("frameIdBridge").methodA('abc');

 *
 */
var globalBridges = {
    // Stores bridge name -> bridge object key value pairs.
    bridges : {},

    // For each bridge stores list of callbacks. It's possible
    // to have more than one callback for each bridge setup action.
    // Each call back is executed whenever a bridge with corresponding name
    // gets assigned.
    callbacks : {},

    // This callback get executed whenever setBridge is called, so it's
    // not specific to any bridge.
    onchangeCallback : null,

    setBridge: function(name, bridge) {
        this.bridges[name] = bridge;

        // Execute specific callbacks
        //console.log('checking for callbacks for ' + name + ' while callbacks are:' + Object.keys(this.callbacks));
        if (name in this.callbacks) {
          console.log('callback for ' + name + ' is found. trying to launch');
            var bridgeCallbacks = this.callbacks[name]
            for (i = 0; i < bridgeCallbacks.length; i++) {
                bridgeCallbacks[i](bridge);
            }
        } else {
          console.log("no callbacks found for " + name);
        }

        // Execute on change callback
        if (this.onchangeCallback != null) {
            this.onchangeCallback();
        }
    },
    getBridge: function(name) {
        return this.bridges[name];
    },
    bridgeExists: function(name) {
      return name in this.bridges;
    },
    addBridgeCallback: function(name, callback) {
      console.log("adding callback for " + name + "...");
      if (name in this.callbacks) {
          this.callbacks[name].push(callback);
      } else {
          this.callbacks[name] = [callback];
      }
      //console.log('Now callbacks keys are:' + Object.keys(this.callbacks));
    },
    setBridgeCallback: function(name, callback) {
      console.log("setting callback for " + name + "...");
      this.callbacks[name] = [callback];
      //console.log('Now callbacks keys are:' + Object.keys(this.callbacks));
    },
    setOnChangeCallback: function(callback) {
        this.onchangeCallback = callback;
    }
}

function genericValidateForm(formElement) {
  var valid = true
  $(formElement).find('.forceNonEmpty').each( function(){
    if ($(this).is(":visible")) {
      if ($(this).val() == '') {
        valid = false
        $(this).addClass("fieldError");
      }
      else $(this).removeClass("fieldError");
    }
  });
  return valid
}

function getParamsFromForm(formElement) {
  var params = {}
  $(formElement).find('select, input, textarea').each(function () {
    params[$(this).attr('name')] = $(this).val()
  })
  return params
}

function changeUsername() {
  var params = {
    username: $('#modalEditUsername input[name=username]').val(),
    user_id: $('#modalEditUsername input[name=user_id]').val()
  }
  MG.call('/accountAPI/changeUsername', params)
  _gaq.push(['_trackEvent', 'Account', 'Change Username']);
}

function launchChangeUsernameFromAccountBar(userid, username) {
  $('#modalEditUsername input[name=username]').val(username).focus();
  $('#modalEditUsername input[name=user_id]').val(userid);
  $('#modalEditUsername form').submit(function () {
    changeUsername();
    return false;
  });
  launchModal('modalEditUsername');
}

function launchChangeUsernameFromProfile(userid, username) {
  $('#modalEditUsername input[name=username]').val(username).focus();
  $('#modalEditUsername input[name=user_id]').val(userid);
  $('#modalEditUsername form').unbind('submit').attr('action', '/main/changeUsername');
  launchModal('modalEditUsername');
}

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function clearInputOnClick(input_id) {
  var inp = $("#" + input_id);
  if (inp.hasClass('modifiedInput')) {
    return false;
  }
  if (inp.val() == 'http://') {
    inp.val('');
  }
  markAsModified(input_id);
  return true;
}
function markAsModified(input_id) {
  var inp = $("#" + input_id);
  if (inp.hasClass('modifiedInput')) {
    return false;
  }
  inp.addClass('modifiedInput');
}

function fb_like(url,type) {
  window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(url),'sharer','toolbar=0,status=0,width=626,height=436');
  _gaq.push(['_trackEvent', 'Social', 'Facebook share ' + type]);
  return false;
}

function defined(object) {
  return typeof object != "undefined"
}

function buildURLFromURI(uri) {
  if (uri.indexOf('/') == 0)
    return window.location.protocol + "//" + window.location.host + uri
  else
    return window.location.protocol + "//" + window.location.host + "/" + uri
}

//COUNTRY SELECTOR
function toggleCountry(value)
{
  // CLEAR DROPDOWN OPTIONS
  $('#' + value + 'ST').empty();
  var country = $('#' + value + 'Country').val();
  switch(country)
  {
    case 'US':
      // QAS uses 3-character country codes
      $('#' + value + 'CountryQAS').val("USA");

      // CHANGE FIELD LABELS
      $('#' + value + 'StateLabel').html('State');
      $('#' + value + 'ZipLabel').html('Zip');
      $('#' + value + 'Zip1').attr('maxlength','5').val('');

      // RECREATE LIST FROM MAP
      var stateSelect = $('#' + value + 'ST')
      $.each(statesUS, function(value, text) {
        stateSelect.append(
          $('<option></option>').val(value).html(text)
        );
      });
      break;
    case 'CA':
      // QAS uses 3-character country codes
      $('#' + value + 'CountryQAS').val("CAN");

      // CHANGE FIELD LABELS
      $('#' + value + 'StateLabel').html('Province');
      $('#' + value + 'ZipLabel').html('Postal');
      $('#' + value + 'Zip1').attr('maxlength','7').val('');

      // RECREATE LIST FROM MAP
      var stateSelect = $('#' + value + 'ST')
      $.each(statesCanada, function(value, text) {
        stateSelect.append(
          $('<option></option>').val(value).html(text)
        );
      });
      break;
  }

  // REFOCUS ON STATE/PROVINCE FIELD
  $('#' + value + 'ST').focus();
}
// CLIENT-SIDE FORM VALIDATION

var statesUS = {
  "":"Select...",
  AA:"AA (Armed Forces)",
  AE:"AE (Armed Forces)",
  AL:"Alabama",
  AK:"Alaska",
  AP:"AP (Armed Forces)",
  AZ:"Arizona",
  AR:"Arkansas",
  CA:"California",
  CO:"Colorado",
  CT:"Connecticut",
  DC:"District of Columbia",
  DE:"Delaware",
  FL:"Florida",
  GA:"Georgia",
  GU:"Guam",
  HI:"Hawaii",
  ID:"Idaho",
  IL:"Illinois",
  IN:"Indiana",
  IA:"Iowa",
  KS:"Kansas",
  KY:"Kentucky",
  LA:"Louisiana",
  ME:"Maine",
  MD:"Maryland",
  MA:"Massachusetts",
  MI:"Michigan",
  MN:"Minnesota",
  MS:"Mississippi",
  MO:"Missouri",
  MT:"Montana",
  MP:"N. Mariana Islands",
  NE:"Nebraska",
  NV:"Nevada",
  NH:"New Hampshire",
  NJ:"New Jersey",
  NM:"New Mexico",
  NY:"New York",
  NC:"North Carolina",
  ND:"North Dakota",
  OH:"Ohio",
  OK:"Oklahoma",
  OR:"Oregon",
  PA:"Pennsylvania",
  PR:"Puerto Rico",
  RI:"Rhode Island",
  SC:"South Carolina",
  SD:"South Dakota",
  TN:"Tennessee",
  TX:"Texas",
  UT:"Utah",
  VI:"Virgin Islands",
  VT:"Vermont",
  VA:"Virginia",
  WA:"Washington",
  WI:"Wisconsin",
  WV:"West Virginia",
  WY:"Wyoming"
};

var statesCanada = {
  "":"Select...",
  AB:"Alberta",
  BC:"British Columbia",
  MB:"Manitoba",
  NB:"New Brunswick",
  NL:"Newfoundland/Labrador",
  NT:"Northwest Territories",
  NS:"Nova Scotia",
  NU:"Nunavut",
  ON:"Ontario",
  PE:"Prince Edward Island",
  QC:"Quebec",
  SK:"Saskatchewan",
  YT:"Yukon"
};

$(document).ready(function(){
    var editVideoForm = $('#editVideoForm');

    editVideoForm.submit(function () {
        var params = {}
        params['id'] = $(this).find('input[name=id]').val()
        params['name'] =  $(this).find('input[name=name]').val()
        params['description'] = $(this).find('textarea[name=description]').val()
        MG.call
        (
          "/actionsAPI/edit_video",
          params,
          function(data) {
            closeModal('modalEditVideoDetails');
            $(".mainDescription").replaceWith(data.video_description)
            $('.mainOuter').expandable(650, '.mainInner', $('#descriptionExpand'))
            _gaq.push(['_trackEvent', 'Video', 'Video edited']);
          }
        )
        return false // block the form submission
      }
    )
  }
)


$(document).ready(function(){
    var editLookForm = $('#editLookForm');

    editLookForm.submit(function () {
        var params = {}
        params['id'] = $(this).find('input[name=id]').val()
        params['name'] =  $(this).find('input[name=name]').val()
        params['look_category'] =  $(this).find('select[name=look_category]').val()
        params['description'] = $(this).find('textarea[name=description]').val()
        MG.call
        (
          "/actionsAPI/edit_look",
          params,
          function(data) {
            closeModal('modalEditLookDetails');
            $(".mainDescription").replaceWith(data.look_description)
            _gaq.push(['_trackEvent', 'Look', 'Look edited']);
            prepLookDescription()
          }
        )
        return false // block the form submission
      }
    )
  }
)

function deleteVideo(videoId){
  var params = {}
  params['id'] = videoId

  MG.call
  (
    "/actionsAPI/delete_video",
    params,
    function(data) {
      $("#videoInsert").replaceWith(data.video_insert);
      $("#lookVideoCount").html(data.video_count);
      _gaq.push(['_trackEvent', 'Video', 'Video deleted']);
    }
  )
}

function prepLookDescription(){
  //HOVER: DETAILS - EDIT CONTROLS
  $('.mainDescription').hoverIntent(
    function(){
      $('.mainDetails').addClass('editLookContainer');
      $('.mainDetails .editLook').animate({'height':'25px'},300);
    },
    function(){
      $('.mainDetails').removeClass('editLookContainer');
      $('.mainDetails .editLook').animate({'height':'0px'},300);
    }
  );
  // LAUNCH MODAL: EDIT DETAILS
  $('.editDetails').click(
    function(){ launchModal('modalEditDetails'); }
  );
  $('.mainOuter').expandable(650, '.mainInner', $('#descriptionExpand'))
}

// Is there current active call that has not returned yet.
var requestInProgress = false;

// Has the contents of the search box changed during active_call.
var searchStringChanged = false;
var lastSearchString = "";
var lastProductSetId = "";

$(document).ready(function () {
  if ($('#productsSidebar').size() > 0) prepareProductsPanel()
  
  // INGREDIENTS EXPANDER
  $('.ingredients').click( function(){
  if($('.ingredients .carrot').attr('src') == '/images/carrot_pink.png')
  { $('.ingredientsList').animate({ 'height':($('.ingredientsList div').innerHeight()) + 'px' }, 400); $('.ingredients .carrot').attr('src','/images/carrot_pink-up.png'); }
  else
  { $('.ingredientsList').animate({ 'height':'0px' }, 400); $('.ingredients .carrot').attr('src','/images/carrot_pink.png'); }
  });
  
})
function resizeProductImages() {
  $('.productsPhoto img').each(function () {
    $(this).css({ 'max-width':'140px','max-height':'100px','width':'auto','height':'auto' });
    $(this).animate({'opacity':1},300);
  })
}
function replaceProductsPanel(content) {
  $('#productsSidebar').replaceWith($(content).find('#productsSidebar'))
  prepareProductsPanel()
}

function prepareProductsPanel() {
  $('#productsSidebar .rowOuter').expandable(288, $('#productsSidebar .rowInner'), $('#productsExpand'));
  initEditableProductsPanel();
  resizeProductImages();
}

function addProduct(productId, productSetId) {
  params = {
    productId: productId,
    productSetId: productSetId,
  }
  MG.call('/productsAPI/addProduct', params, function(data) {
    replaceProductsPanel(data.other_products)
    _gaq.push(['_trackEvent', 'Product', 'Product Added']);
    closeModal('modalAddProduct')
  })
}

function removeProduct(productId, productSetId) {
  params = {
    productId: productId,
    productSetId: productSetId,
  }
  MG.call('/productsAPI/removeProduct', params, function(data) {
    _gaq.push(['_trackEvent', 'Product', 'Product Removed']);
    replaceProductsPanel(data.other_products)
  })
}

function refreshProductsModal(searchString, productSetId) {
  console.log("refreshProductsModal called with params:" + searchString + "; " + productSetId);
  if (searchString == null || searchString.length < 3 || searchString == 'Enter a product brand and/or name') return
  if (requestInProgress) {
    console.log("There is a request in progress. So we save params:" + searchString + "; " + productSetId);
    searchStringChanged = true;
    lastSearchString = searchString;
    lastProductSetId = productSetId;
    return;
  }
  var params = {
    searchString: searchString,
    productSetId: productSetId,
  }
  requestInProgress = true;
  //MG.callNoBlock("/productsAPI/getAddableProducts", params, function (data) {
  MG.call("/productsAPI/getAddableProducts", params, function (data) {
    $('#modalAddProduct .gridBox').replaceWith(data.selectBox)
    resizeProductSearch()
    
    requestInProgress = false;
    console.log("Finished request to getAddableProducts. searchStringChanged = " + searchStringChanged);
    if (searchStringChanged) {
      searchStringChanged = false;
      console.log("Calling refreshProductModal since search string change with params:" + lastSearchString + "; " + lastProductSetId);
      refreshProductsModal(lastSearchString, lastProductSetId);
      return;
    }
  }, null, $('#modalAddProduct .gridBox'));
}

function initEditableProductsPanel(startOpen){
  $('#productsSidebar li,.modalGrid .product').hoverIntent(
    function(){ $(this).find('.removeProduct').show(); }, function(){ $(this).find('.removeProduct').hide(); }
  );
  $('.removeProduct').click(
    function(){ $(this).siblings('.removeProductConfirm').show().animate( { 'opacity':1 },400 ); }
  );
  $('.removeProductConfirm .No').click(
    function(){ $(this).parent().css( 'opacity',0 ).hide(); }
  );
  $('#productsSidebar .rowOuter').expandable(288, $('#productsSidebar .rowInner'), $('#productsExpand'), undefined, undefined, undefined, startOpen)
}

function resizeProductSearch() {
  var modal = $('#modalAddProduct');
  var modalContent = modal.find('.modalContent');
  var height = $(window).height();
  modalContent.animate( { 'width': (modal.find('.modalInner').innerWidth()) + 'px', 'height': ((height - 150) + 'px'), opacity:1},500, function(){ modal.find('.modalInner').animate( { opacity:1 },700);} );
  modalContent.css( {'height': ((height - 150) + 'px')} );
  modalContent.css( {'top': ((height / 2)) - ((modal.find('.modalContent').height() + 50) / 2) + 'px' });
  modalContent.css( {'margin-left': (('-' + (modal.find('.modalInner').innerWidth())) / 2) + 'px' },500);
  modal.find('.modalInner').css({'height': ((modal.find('.modalContent').height()) + 'px')}, function(){ modal.find('.modalInner').animate( { opacity:1 },700);} );
  if(modal.find('.gridBox').length) {
    modal.find('.gridBox').css( {'height': ((modal.find('.modalInner').height() - 75) + 'px')} );
    modal.find('.sortBy').css( {'width': ((modal.find('.sortBy').width() + 18) + 'px')} );
  }
  modal.find('.modalInner').css( { 'height': (modal.find('.modalInner').height() + 150) });
}

//MODAL LAUNCH FUNCTION FOR ADDING PRODUCTS
function launchProductSearch() {
  var modal = $('#modalAddProduct');
  modal.find('input').keyup()
  modal.show().animate( { opacity:1 }, 250, resizeProductSearch)
  $('#productSearchField').select();
}
$(document).ready(function () {

  if (!$('.headerContainer .doodleJump').size()) return

  $('.headerContainer .doodle, .doodleJump').click(function(){
    launchModal('modalDoodle');
    document.onselectstart = function(){ return false; }
  });
  $('.headerContainer .logoContainer').hover( function(){ $('.doodleJump').show(); },function(){ $('.doodleJump').hide(); });

  var restorePoints = [];
  var coordsSinceSave = []
  var record = false;
  var xStart = '';
  var yStart = '';
  var canvas = document.getElementById('ipsyDoodle');
  if (canvas.getContext) { // IE doesn't support this
    var context = canvas.getContext("2d");

    context.strokeStyle = "#d13393";
    context.lineWidth = 5;
    context.lineCap = "round";
    context.fillStyle="#ffffff";
    context.fillRect(0,0,canvas.width,canvas.height);

    $(canvas).mousedown(function(e) {
      saveRestorePoint();
      record = true;
      context.save();
      xStart = e.pageX - $(this).offset().left
      yStart = e.pageY - $(this).offset().top
    })

    $("body").mouseup(function(){ record = false; });
    $(canvas).click(function(){ record = false; });

    $(canvas).mousemove(function(e){
      if (record == true) {
        var xEnd = e.pageX - $(this).offset().left
        var yEnd = e.pageY - $(this).offset().top
        coordsSinceSave.push([xEnd, yEnd, context.strokeStyle, context.lineWidth, context.lineCap])
        context.beginPath();
        context.moveTo(xEnd,yEnd);
        context.lineTo(xStart,yStart);
        context.stroke();
        context.closePath();
        xStart = xEnd
        yStart = yEnd
      }
    });
  } else {
    $('#doodleJumpLink').remove(); // don't show doodler link
  }
  function saveRestorePoint() {
    var imgSrc = canvas.toDataURL("image/png");
    console.log("saving")
    console.log(imgSrc)
    console.log(coordsSinceSave)
    restorePoints.push([imgSrc, coordsSinceSave]);
    coordsSinceSave = []
  }

  function undoDrawOnCanvas(){
    if (restorePoints.length > 0) {
      var oImg = new Image();
      oImg.onload = function() {
        context.drawImage(oImg, 0, 0);
      }
      oImg.src = restorePoints.pop()[0];
    }
  }

  function setButton(elem)
  {
    $('#draw1,#draw2,#draw3,#erase1,#erase2,#erase3').removeClass('pink');
    $(elem).addClass('pink');
  }

  $("#draw1").click(function(){ context.strokeStyle = "#d13393"; context.lineWidth = 2; setButton(this); });
  $("#draw2").click(function(){ context.strokeStyle = "#d13393"; context.lineWidth = 5; setButton(this); });
  $("#draw3").click(function(){ context.strokeStyle = "#d13393"; context.lineWidth = 10; setButton(this); });

  $("#erase1").click(function(){ context.strokeStyle = "#ffffff"; context.lineWidth = 2; setButton(this); });
  $("#erase2").click(function(){ context.strokeStyle = "#ffffff"; context.lineWidth = 5; setButton(this); });
  $("#erase3").click(function(){ context.strokeStyle = "#ffffff"; context.lineWidth = 10; setButton(this); });

  $("#undo").mousedown(function(){ $(this).addClass('pink'); });
  $("#undo").mouseup(function(){ $(this).removeClass('pink'); });
  $("#undo").click(function(){ undoDrawOnCanvas(); });

  $("#clear").mousedown(function(){ $(this).addClass('pink'); });
  $("#clear").mouseup(function(){ $(this).removeClass('pink'); });
  $("#clear").click(function(){
    context.fillStyle = "#ffffff";
    context.fillRect(0,0,canvas.width,canvas.height);
    context.strokeStyle = "#d13393";
    context.fillStyle = "#d13393";
    restorePoints = []
    coordsSinceSave = []
  })

  window.saveDoodle = function () {
    var coordinates = []
    for (coordinateList in restorePoints) coordinates.push(restorePoints[coordinateList][1])
    coordinates.push(coordsSinceSave)
    var params = {
        doodlePNG: canvas.toDataURL("image/png;base64"),
        doodleInfo: coordinates
    }
    MG.call("/accountAPI/saveDoodle", params, function (data) {
      window.location = window.location
      _gaq.push(['_trackEvent', 'Doodle', 'Doodle Saved']);
    })
  }
})



var CloudSpongeContact = function(firstName, lastName, emailAddresses) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.emailAddresses = emailAddresses;
} 

var CloudSpongeClient = function() {
  this.importedContacts = [];
}

CloudSpongeClient.GMAIL_IMPORT = "GMAIL";
CloudSpongeClient.YAHOO_IMPORT = "YAHOO";
CloudSpongeClient.WINDOWSLIVE_IMPORT = "WINDOWSLIVE";
CloudSpongeClient.AOL_IMPORT = "AOL";
CloudSpongeClient.PLAXO_IMPORT = "PLAXO";
CloudSpongeClient.OUTLOOK_IMPORT = "OUTLOOK";
CloudSpongeClient.ADDRESSBOOK_IMPORT = "ADDRESSBOOK";

CloudSpongeClient.USER_CONSENT_IMPORT_TYPES = [
  CloudSpongeClient.GMAIL_IMPORT,
  CloudSpongeClient.YAHOO_IMPORT,
  CloudSpongeClient.WINDOWSLIVE_IMPORT
];

CloudSpongeClient.REGULAR_IMPORT_TYPES = [
  CloudSpongeClient.AOL_IMPORT,
  CloudSpongeClient.PLAXO_IMPORT,
];

CloudSpongeClient.DESKTOP_APPLET_IMPORT_TYPES = [
  CloudSpongeClient.OUTLOOK_IMPORT,
  CloudSpongeClient.ADDRESSBOOK_IMPORT,
];

CloudSpongeClient.prototype.doUserConsentImport = function(type, onUrlCallbackFunction, onCompleteCallbackFunction) {
	if ($.inArray(type, CloudSpongeClient.USER_CONSENT_IMPORT_TYPES) >= 0) {
	  var thiz = this;
	  this.initUserConsentImport(type, function(importId, url) {
	    onUrlCallbackFunction(url);
	    thiz.onImportComplete(importId, function() {
	      thiz.retreiveContactsHTML(importId, onCompleteCallbackFunction);
	    });
	  });
	}
	else throw "Import Type " + type + " not a User Consent Import.";
}

CloudSpongeClient.prototype.doRegularImport = function(type, username, password, onCompleteCallbackFunction) {
  if ($.inArray(type, CloudSpongeClient.REGULAR_IMPORT_TYPES) >= 0) {
    var thiz = this;
    this.initRegularImport(type, username, password, function(importId) {
      thiz.onImportComplete(importId, function() {
        thiz.retreiveContactsHTML(importId, onCompleteCallbackFunction);
      });
    });
  }
  else throw "Import Type " + type + " not a Regular Import.";
}

CloudSpongeClient.prototype.doDesktopAppletImport = function(type, onCompleteCallbackFunction) {
  if ($.inArray(type, CloudSpongeClient.DESKTOP_APPLET_IMPORT_TYPES) >= 0) {
    var thiz = this;
    this.initDesktopAppletImport(type, function(importId, url) {
      thiz.showDesktopApplet(importId, url);
      thiz.onImportComplete(importId, function() {
        thiz.retreiveContactsHTML(importId, onCompleteCallbackFunction);
      });
    });
  }
  else throw "Import Type " + type + " not a Desktop Applet Import.";
}

CloudSpongeClient.prototype.initUserConsentImport = function(type, callbackFunction) {
  MG.callNoBlock("/cloudSponge/initUserConsentImport", {importType: type}, function(responseData) {
    callbackFunction(responseData.import_id, responseData.url);
  });
}

CloudSpongeClient.prototype.initRegularImport = function(type, username, password, callbackFunction) {
  var params = {
    importType: type,
    username: username,
    password: password
  };
  
  MG.callSSL("/cloudSponge/initRegularImport", params, function(responseData) {
    callbackFunction(responseData.import_id);
  }, DEFAULT_ERROR_FUNCTION, NO_BLOCK_UI);
}

CloudSpongeClient.prototype.initDesktopAppletImport = function(type, callbackFunction) {  
  MG.callNoBlock("/cloudSponge/initDesktopAppletImport", {importType: type}, function(responseData) {
    callbackFunction(responseData.import_id, responseData.url);
  });
}

CloudSpongeClient.prototype.showDesktopApplet = function(importId, url) {
  var params = {
    importId: importId,
    url: url
  };
  
  MG.callNoBlock("/cloudSponge/showDesktopApplet", params, function(data){
$("body").prepend(data.appletHTML);
  });
}

CloudSpongeClient.prototype.onImportComplete = function(importId, callbackFunction) {
  var checkInProgress = false;
  var thiz = this;
  var params = {
    importId: importId
  };
  
  var intervalId = setInterval(function() {
    if(checkInProgress)
      return;
    checkInProgress = true;
    
    MG.callNoBlock("/cloudSponge/checkImportComplete", params, function(results) {
      if (!results) {
        checkInProgress = false;
        return;
      }
      clearInterval(intervalId);
      callbackFunction();
    });
  }, 1000);
}

CloudSpongeClient.prototype.retreiveContacts = function(importId, callbackFunction) {

  MG.callNoBlock("/cloudSponge/retreiveContacts", {importId: importId}, function(contacts) {
    var importedContacts = [];
    console.log(contacts);
    for (contact in contacts) {
      contact = contacts[contact];
      importedContact = new CloudSpongeContact(contact.firstName, contact.lastName, contact.emailAddresses);
      importedContacts.push(importedContact);
    }
    console.log(importedContacts);
    callbackFunction(importedContacts);
  });
}

CloudSpongeClient.prototype.retreiveContactsHTML = function(importId, callbackFunction) {

  MG.callNoBlock("/cloudSponge/retreiveContactsHTML", {importId: importId}, function(contactsHTML) {
    console.log(contactsHTML);
    console.log(contactsHTML);
    callbackFunction(contactsHTML);
  });
}



