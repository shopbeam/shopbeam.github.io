/*!
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(A,w){function ma(){if(!c.isReady){try{s.documentElement.doScroll("left")}catch(a){setTimeout(ma,1);return}c.ready()}}function Qa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function X(a,b,d,f,e,j){var i=a.length;if(typeof b==="object"){for(var o in b)X(a,o,b[o],f,e,d);return a}if(d!==w){f=!j&&f&&c.isFunction(d);for(o=0;o<i;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,j);return a}return i?
e(a[0],b):w}function J(){return(new Date).getTime()}function Y(){return false}function Z(){return true}function na(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function oa(a){var b,d=[],f=[],e=arguments,j,i,o,k,n,r;i=c.data(this,"events");if(!(a.liveFired===this||!i||!i.live||a.button&&a.type==="click")){a.liveFired=this;var u=i.live.slice(0);for(k=0;k<u.length;k++){i=u[k];i.origType.replace(O,"")===a.type?f.push(i.selector):u.splice(k--,1)}j=c(a.target).closest(f,a.currentTarget);n=0;for(r=
j.length;n<r;n++)for(k=0;k<u.length;k++){i=u[k];if(j[n].selector===i.selector){o=j[n].elem;f=null;if(i.preType==="mouseenter"||i.preType==="mouseleave")f=c(a.relatedTarget).closest(i.selector)[0];if(!f||f!==o)d.push({elem:o,handleObj:i})}}n=0;for(r=d.length;n<r;n++){j=d[n];a.currentTarget=j.elem;a.data=j.handleObj.data;a.handleObj=j.handleObj;if(j.handleObj.origHandler.apply(j.elem,e)===false){b=false;break}}return b}}function pa(a,b){return"live."+(a&&a!=="*"?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
"&")}function qa(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function ra(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var f=c.data(a[d++]),e=c.data(this,f);if(f=f&&f.events){delete e.handle;e.events={};for(var j in f)for(var i in f[j])c.event.add(this,j,f[j][i],f[j][i].data)}}})}function sa(a,b,d){var f,e,j;b=b&&b[0]?b[0].ownerDocument||b[0]:s;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===s&&!ta.test(a[0])&&(c.support.checkClone||!ua.test(a[0]))){e=
true;if(j=c.fragments[a[0]])if(j!==1)f=j}if(!f){f=b.createDocumentFragment();c.clean(a,b,f,d)}if(e)c.fragments[a[0]]=j?f:1;return{fragment:f,cacheable:e}}function K(a,b){var d={};c.each(va.concat.apply([],va.slice(0,b)),function(){d[this]=a});return d}function wa(a){return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var c=function(a,b){return new c.fn.init(a,b)},Ra=A.jQuery,Sa=A.$,s=A.document,T,Ta=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Ua=/^.[^:#\[\.,]*$/,Va=/\S/,
Wa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Xa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],L,$=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,ba=Array.prototype.push,R=Array.prototype.slice,ya=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(a==="body"&&!b){this.context=s;this[0]=s.body;this.selector="body";this.length=1;return this}if(typeof a==="string")if((d=Ta.exec(a))&&
(d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:s;if(a=Xa.exec(a))if(c.isPlainObject(b)){a=[s.createElement(a[1])];c.fn.attr.call(a,b,true)}else a=[f.createElement(a[1])];else{a=sa([d[1]],[f]);a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes}return c.merge(this,a)}else{if(b=s.getElementById(d[2])){if(b.id!==d[2])return T.find(a);this.length=1;this[0]=b}this.context=s;this.selector=a;return this}else if(!b&&/^\w+$/.test(a)){this.selector=a;this.context=s;a=s.getElementsByTagName(a);return c.merge(this,
a)}else return!b||b.jquery?(b||T).find(a):c(b).find(a);else if(c.isFunction(a))return T.ready(a);if(a.selector!==w){this.selector=a.selector;this.context=a.context}return c.makeArray(a,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return R.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var f=c();c.isArray(a)?ba.apply(f,a):c.merge(f,a);f.prevObject=this;f.context=this.context;if(b===
"find")f.selector=this.selector+(this.selector?" ":"")+d;else if(b)f.selector=this.selector+"."+b+"("+d+")";return f},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(s,c);else Q&&Q.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,
function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||c(null)},push:ba,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,j,i,o;if(typeof a==="boolean"){f=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((e=arguments[b])!=null)for(j in e){i=a[j];o=e[j];if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){i=i&&(c.isPlainObject(i)||
c.isArray(i))?i:c.isArray(o)?[]:{};a[j]=c.extend(f,i,o)}else if(o!==w)a[j]=o}return a};c.extend({noConflict:function(a){A.$=Sa;if(a)A.jQuery=Ra;return c},isReady:false,ready:function(){if(!c.isReady){if(!s.body)return setTimeout(c.ready,13);c.isReady=true;if(Q){for(var a,b=0;a=Q[b++];)a.call(s,c);Q=null}c.fn.triggerHandler&&c(s).triggerHandler("ready")}},bindReady:function(){if(!xa){xa=true;if(s.readyState==="complete")return c.ready();if(s.addEventListener){s.addEventListener("DOMContentLoaded",
L,false);A.addEventListener("load",c.ready,false)}else if(s.attachEvent){s.attachEvent("onreadystatechange",L);A.attachEvent("onload",c.ready);var a=false;try{a=A.frameElement==null}catch(b){}s.documentElement.doScroll&&a&&ma()}}},isFunction:function(a){return $.call(a)==="[object Function]"},isArray:function(a){return $.call(a)==="[object Array]"},isPlainObject:function(a){if(!a||$.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;if(a.constructor&&!aa.call(a,"constructor")&&!aa.call(a.constructor.prototype,
"isPrototypeOf"))return false;var b;for(b in a);return b===w||aa.call(a,b)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=c.trim(a);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+
a))();else c.error("Invalid JSON: "+a)},noop:function(){},globalEval:function(a){if(a&&Va.test(a)){var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,j=a.length,i=j===w||c.isFunction(a);if(d)if(i)for(f in a){if(b.apply(a[f],
d)===false)break}else for(;e<j;){if(b.apply(a[e++],d)===false)break}else if(i)for(f in a){if(b.call(a[f],f,a[f])===false)break}else for(d=a[0];e<j&&b.call(d,e,d)!==false;d=a[++e]);return a},trim:function(a){return(a||"").replace(Wa,"")},makeArray:function(a,b){b=b||[];if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ba.call(b,a):c.merge(b,a);return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var d=0,f=b.length;d<f;d++)if(b[d]===
a)return d;return-1},merge:function(a,b){var d=a.length,f=0;if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];a.length=d;return a},grep:function(a,b,d){for(var f=[],e=0,j=a.length;e<j;e++)!d!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,d){for(var f=[],e,j=0,i=a.length;j<i;j++){e=b(a[j],j,d);if(e!=null)f[f.length]=e}return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b==="string"){d=a;a=d[b];b=w}else if(b&&
!c.isFunction(b)){d=b;b=w}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},uaMatch:function(a){a=a.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});P=c.uaMatch(P);if(P.browser){c.browser[P.browser]=true;c.browser.version=P.version}if(c.browser.webkit)c.browser.safari=
true;if(ya)c.inArray=function(a,b){return ya.call(b,a)};T=c(s);if(s.addEventListener)L=function(){s.removeEventListener("DOMContentLoaded",L,false);c.ready()};else if(s.attachEvent)L=function(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",L);c.ready()}};(function(){c.support={};var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+J();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var e=d.getElementsByTagName("*"),j=d.getElementsByTagName("a")[0];if(!(!e||!e.length||!j)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(j.getAttribute("style")),hrefNormalized:j.getAttribute("href")==="/a",opacity:/^0.55$/.test(j.style.opacity),cssFloat:!!j.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,
parentNode:d.removeChild(d.appendChild(s.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};b.type="text/javascript";try{b.appendChild(s.createTextNode("window."+f+"=1;"))}catch(i){}a.insertBefore(b,a.firstChild);if(A[f]){c.support.scriptEval=true;delete A[f]}try{delete b.test}catch(o){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function k(){c.support.noCloneEvent=
false;d.detachEvent("onclick",k)});d.cloneNode(true).fireEvent("onclick")}d=s.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=s.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var k=s.createElement("div");k.style.width=k.style.paddingLeft="1px";s.body.appendChild(k);c.boxModel=c.support.boxModel=k.offsetWidth===2;s.body.removeChild(k).style.display="none"});a=function(k){var n=
s.createElement("div");k="on"+k;var r=k in n;if(!r){n.setAttribute(k,"return;");r=typeof n[k]==="function"}return r};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=e=j=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var G="jQuery"+J(),Ya=0,za={};c.extend({cache:{},expando:G,noData:{embed:true,object:true,
applet:true},data:function(a,b,d){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var f=a[G],e=c.cache;if(!f&&typeof b==="string"&&d===w)return null;f||(f=++Ya);if(typeof b==="object"){a[G]=f;e[f]=c.extend(true,{},b)}else if(!e[f]){a[G]=f;e[f]={}}a=e[f];if(d!==w)a[b]=d;return typeof b==="string"?a[b]:a}},removeData:function(a,b){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var d=a[G],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{if(c.support.deleteExpando)delete a[c.expando];
else a.removeAttribute&&a.removeAttribute(c.expando);delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===w){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(f===w&&this.length)f=c.data(this[0],a);return f===w&&d[1]?this.data(d[0]):f}else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,
a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var f=c.data(a,b);if(!d)return f||[];if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);return f}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),f=d.shift();if(f==="inprogress")f=d.shift();if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===
w)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var Aa=/[\n\t]/g,ca=/\s+/,Za=/\r/g,$a=/href|src|style/,ab=/(button|input)/i,bb=/(button|input|object|select|textarea)/i,
cb=/^(a|area)$/i,Ba=/radio|checkbox/;c.fn.extend({attr:function(a,b){return X(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(n){var r=c(this);r.addClass(a.call(this,n,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className){for(var j=" "+e.className+" ",
i=e.className,o=0,k=b.length;o<k;o++)if(j.indexOf(" "+b[o]+" ")<0)i+=" "+b[o];e.className=c.trim(i)}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(k){var n=c(this);n.removeClass(a.call(this,k,n.attr("class")))});if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var j=(" "+e.className+" ").replace(Aa," "),i=0,o=b.length;i<o;i++)j=j.replace(" "+b[i]+" ",
" ");e.className=c.trim(j)}else e.className=""}return this},toggleClass:function(a,b){var d=typeof a,f=typeof b==="boolean";if(c.isFunction(a))return this.each(function(e){var j=c(this);j.toggleClass(a.call(this,e,j.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var e,j=0,i=c(this),o=b,k=a.split(ca);e=k[j++];){o=f?o:!i.hasClass(e);i[o?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=
this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(Aa," ").indexOf(a)>-1)return true;return false},val:function(a){if(a===w){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options;b=b.type==="select-one";if(d<0)return null;var j=b?d:0;for(d=b?d+1:e.length;j<d;j++){var i=
e[j];if(i.selected){a=c(i).val();if(b)return a;f.push(a)}}return f}if(Ba.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Za,"")}return w}var o=c.isFunction(a);return this.each(function(k){var n=c(this),r=a;if(this.nodeType===1){if(o)r=a.call(this,k,n.val());if(typeof r==="number")r+="";if(c.isArray(r)&&Ba.test(this.type))this.checked=c.inArray(n.val(),r)>=0;else if(c.nodeName(this,"select")){var u=c.makeArray(r);c("option",this).each(function(){this.selected=
c.inArray(c(this).val(),u)>=0});if(!u.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===8)return w;if(f&&b in c.attrFn)return c(a)[b](d);f=a.nodeType!==1||!c.isXMLDoc(a);var e=d!==w;b=f&&c.props[b]||b;if(a.nodeType===1){var j=$a.test(b);if(b in a&&f&&!j){if(e){b==="type"&&ab.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:w;return a[b]}if(!c.support.style&&f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&j?a.getAttribute(b,2):a.getAttribute(b);return a===null?w:a}return c.style(a,b,d)}});var O=/\.(.*)$/,db=function(a){return a.replace(/[^\w\s\.\|`]/g,
function(b){return"\\"+b})};c.event={add:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){if(a.setInterval&&a!==A&&!a.frameElement)a=A;var e,j;if(d.handler){e=d;d=e.handler}if(!d.guid)d.guid=c.guid++;if(j=c.data(a)){var i=j.events=j.events||{},o=j.handle;if(!o)j.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):w};o.elem=a;b=b.split(" ");for(var k,n=0,r;k=b[n++];){j=e?c.extend({},e):{handler:d,data:f};if(k.indexOf(".")>-1){r=k.split(".");
k=r.shift();j.namespace=r.slice(0).sort().join(".")}else{r=[];j.namespace=""}j.type=k;j.guid=d.guid;var u=i[k],z=c.event.special[k]||{};if(!u){u=i[k]=[];if(!z.setup||z.setup.call(a,f,r,o)===false)if(a.addEventListener)a.addEventListener(k,o,false);else a.attachEvent&&a.attachEvent("on"+k,o)}if(z.add){z.add.call(a,j);if(!j.handler.guid)j.handler.guid=d.guid}u.push(j);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){var e,j=0,i,o,k,n,r,u,z=c.data(a),
C=z&&z.events;if(z&&C){if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(e in C)c.event.remove(a,e+b)}else{for(b=b.split(" ");e=b[j++];){n=e;i=e.indexOf(".")<0;o=[];if(!i){o=e.split(".");e=o.shift();k=new RegExp("(^|\\.)"+c.map(o.slice(0).sort(),db).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(r=C[e])if(d){n=c.event.special[e]||{};for(B=f||0;B<r.length;B++){u=r[B];if(d.guid===u.guid){if(i||k.test(u.namespace)){f==null&&r.splice(B--,1);n.remove&&n.remove.call(a,u)}if(f!=
null)break}}if(r.length===0||f!=null&&r.length===1){if(!n.teardown||n.teardown.call(a,o)===false)Ca(a,e,z.handle);delete C[e]}}else for(var B=0;B<r.length;B++){u=r[B];if(i||k.test(u.namespace)){c.event.remove(a,n,u.handler,B);r.splice(B--,1)}}}if(c.isEmptyObject(C)){if(b=z.handle)b.elem=null;delete z.events;delete z.handle;c.isEmptyObject(z)&&c.removeData(a)}}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[G]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=
e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return w;a.result=w;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(f=c.data(d,"handle"))&&f.apply(d,b);f=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false}catch(j){}if(!a.isPropagationStopped()&&
f)c.event.trigger(a,b,f,true);else if(!a.isDefaultPrevented()){f=a.target;var i,o=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};if((!k._default||k._default.call(d,a)===false)&&!o&&!(f&&f.nodeName&&c.noData[f.nodeName.toLowerCase()])){try{if(f[e]){if(i=f["on"+e])f["on"+e]=null;c.event.triggered=true;f[e]()}}catch(n){}if(i)f["on"+e]=i;c.event.triggered=false}}},handle:function(a){var b,d,f,e;a=arguments[0]=c.event.fix(a||A.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;
if(!b){d=a.type.split(".");a.type=d.shift();f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}e=c.data(this,"events");d=e[a.type];if(e&&d){d=d.slice(0);e=0;for(var j=d.length;e<j;e++){var i=d[e];if(b||f.test(i.namespace)){a.handler=i.handler;a.data=i.data;a.handleObj=i;i=i.handler.apply(this,arguments);if(i!==w){a.result=i;if(i===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[G])return a;var b=a;a=c.Event(b);for(var d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||s;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=s.documentElement;d=s.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,a.origType,c.extend({},a,{handler:oa}))},remove:function(a){var b=true,d=a.origType.replace(O,"");c.each(c.data(this,
"events").live||[],function(){if(d===this.origType.replace(O,""))return b=false});b&&c.event.remove(this,a.origType,oa)}},beforeunload:{setup:function(a,b,d){if(this.setInterval)this.onbeforeunload=d;return false},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};var Ca=s.removeEventListener?function(a,b,d){a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=
a;this.type=a.type}else this.type=a;this.timeStamp=J();this[G]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=Z;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=Z;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z;this.stopPropagation()},isDefaultPrevented:Y,isPropagationStopped:Y,
isImmediatePropagationStopped:Y};var Da=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},Ea=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ea:Da,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?Ea:Da)}}});if(!c.support.submitBubbles)c.event.special.submit=
{setup:function(){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length)return na("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return na("submit",this,arguments)})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};
if(!c.support.changeBubbles){var da=/textarea|input|select/i,ea,Fa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(f){return f.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},fa=function(a,b){var d=a.target,f,e;if(!(!da.test(d.nodeName)||d.readOnly)){f=c.data(d,"_change_data");e=Fa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",
e);if(!(f===w||e===f))if(f!=null||e){a.type="change";return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:fa,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return fa.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return fa.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,
"_change_data",Fa(a))}},setup:function(){if(this.type==="file")return false;for(var a in ea)c.event.add(this,a+".specialChange",ea[a]);return da.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return da.test(this.nodeName)}};ea=c.event.special.change.filters}s.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(f){f=c.event.fix(f);f.type=b;return c.event.handle.call(this,f)}c.event.special[b]={setup:function(){this.addEventListener(a,
d,true)},teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,f,e){if(typeof d==="object"){for(var j in d)this[b](j,f,d[j],e);return this}if(c.isFunction(f)){e=f;f=w}var i=b==="one"?c.proxy(e,function(k){c(this).unbind(k,i);return e.apply(this,arguments)}):e;if(d==="unload"&&b!=="one")this.one(d,f,e);else{j=0;for(var o=this.length;j<o;j++)c.event.add(this[j],d,i,f)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&
!a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{d=0;for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,f){return this.live(b,d,f,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},
toggle:function(a){for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ga={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,f,e,j){var i,o=0,k,n,r=j||this.selector,
u=j?this:c(this.context);if(c.isFunction(f)){e=f;f=w}for(d=(d||"").split(" ");(i=d[o++])!=null;){j=O.exec(i);k="";if(j){k=j[0];i=i.replace(O,"")}if(i==="hover")d.push("mouseenter"+k,"mouseleave"+k);else{n=i;if(i==="focus"||i==="blur"){d.push(Ga[i]+k);i+=k}else i=(Ga[i]||i)+k;b==="live"?u.each(function(){c.event.add(this,pa(i,r),{data:f,selector:r,handler:e,origType:i,origHandler:e,preType:n})}):u.unbind(pa(i,r),e)}}return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
function(a,b){c.fn[b]=function(d){return d?this.bind(b,d):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});A.attachEvent&&!A.addEventListener&&A.attachEvent("onunload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(g){for(var h="",l,m=0;g[m];m++){l=g[m];if(l.nodeType===3||l.nodeType===4)h+=l.nodeValue;else if(l.nodeType!==8)h+=a(l.childNodes)}return h}function b(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];
if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1&&!p){t.sizcache=l;t.sizset=q}if(t.nodeName.toLowerCase()===h){y=t;break}t=t[g]}m[q]=y}}}function d(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1){if(!p){t.sizcache=l;t.sizset=q}if(typeof h!=="string"){if(t===h){y=true;break}}else if(k.filter(h,[t]).length>0){y=t;break}}t=t[g]}m[q]=y}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
e=0,j=Object.prototype.toString,i=false,o=true;[0,0].sort(function(){o=false;return 0});var k=function(g,h,l,m){l=l||[];var q=h=h||s;if(h.nodeType!==1&&h.nodeType!==9)return[];if(!g||typeof g!=="string")return l;for(var p=[],v,t,y,S,H=true,M=x(h),I=g;(f.exec(""),v=f.exec(I))!==null;){I=v[3];p.push(v[1]);if(v[2]){S=v[3];break}}if(p.length>1&&r.exec(g))if(p.length===2&&n.relative[p[0]])t=ga(p[0]+p[1],h);else for(t=n.relative[p[0]]?[h]:k(p.shift(),h);p.length;){g=p.shift();if(n.relative[g])g+=p.shift();
t=ga(g,t)}else{if(!m&&p.length>1&&h.nodeType===9&&!M&&n.match.ID.test(p[0])&&!n.match.ID.test(p[p.length-1])){v=k.find(p.shift(),h,M);h=v.expr?k.filter(v.expr,v.set)[0]:v.set[0]}if(h){v=m?{expr:p.pop(),set:z(m)}:k.find(p.pop(),p.length===1&&(p[0]==="~"||p[0]==="+")&&h.parentNode?h.parentNode:h,M);t=v.expr?k.filter(v.expr,v.set):v.set;if(p.length>0)y=z(t);else H=false;for(;p.length;){var D=p.pop();v=D;if(n.relative[D])v=p.pop();else D="";if(v==null)v=h;n.relative[D](y,v,M)}}else y=[]}y||(y=t);y||k.error(D||
g);if(j.call(y)==="[object Array]")if(H)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&E(h,y[g])))l.push(t[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&l.push(t[g]);else l.push.apply(l,y);else z(y,l);if(S){k(S,q,l,m);k.uniqueSort(l)}return l};k.uniqueSort=function(g){if(B){i=o;g.sort(B);if(i)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)}return g};k.matches=function(g,h){return k(g,null,null,h)};k.find=function(g,h,l){var m,q;if(!g)return[];
for(var p=0,v=n.order.length;p<v;p++){var t=n.order[p];if(q=n.leftMatch[t].exec(g)){var y=q[1];q.splice(1,1);if(y.substr(y.length-1)!=="\\"){q[1]=(q[1]||"").replace(/\\/g,"");m=n.find[t](q,h,l);if(m!=null){g=g.replace(n.match[t],"");break}}}}m||(m=h.getElementsByTagName("*"));return{set:m,expr:g}};k.filter=function(g,h,l,m){for(var q=g,p=[],v=h,t,y,S=h&&h[0]&&x(h[0]);g&&h.length;){for(var H in n.filter)if((t=n.leftMatch[H].exec(g))!=null&&t[2]){var M=n.filter[H],I,D;D=t[1];y=false;t.splice(1,1);if(D.substr(D.length-
1)!=="\\"){if(v===p)p=[];if(n.preFilter[H])if(t=n.preFilter[H](t,v,l,p,m,S)){if(t===true)continue}else y=I=true;if(t)for(var U=0;(D=v[U])!=null;U++)if(D){I=M(D,t,U,v);var Ha=m^!!I;if(l&&I!=null)if(Ha)y=true;else v[U]=false;else if(Ha){p.push(D);y=true}}if(I!==w){l||(v=p);g=g.replace(n.match[H],"");if(!y)return[];break}}}if(g===q)if(y==null)k.error(g);else break;q=g}return v};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var n=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},
relative:{"+":function(g,h){var l=typeof h==="string",m=l&&!/\W/.test(h);l=l&&!m;if(m)h=h.toLowerCase();m=0;for(var q=g.length,p;m<q;m++)if(p=g[m]){for(;(p=p.previousSibling)&&p.nodeType!==1;);g[m]=l||p&&p.nodeName.toLowerCase()===h?p||false:p===h}l&&k.filter(h,g,true)},">":function(g,h){var l=typeof h==="string";if(l&&!/\W/.test(h)){h=h.toLowerCase();for(var m=0,q=g.length;m<q;m++){var p=g[m];if(p){l=p.parentNode;g[m]=l.nodeName.toLowerCase()===h?l:false}}}else{m=0;for(q=g.length;m<q;m++)if(p=g[m])g[m]=
l?p.parentNode:p.parentNode===h;l&&k.filter(h,g,true)}},"":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("parentNode",h,m,g,p,l)},"~":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("previousSibling",h,m,g,p,l)}},find:{ID:function(g,h,l){if(typeof h.getElementById!=="undefined"&&!l)return(g=h.getElementById(g[1]))?[g]:[]},NAME:function(g,h){if(typeof h.getElementsByName!=="undefined"){var l=[];
h=h.getElementsByName(g[1]);for(var m=0,q=h.length;m<q;m++)h[m].getAttribute("name")===g[1]&&l.push(h[m]);return l.length===0?null:l}},TAG:function(g,h){return h.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,h,l,m,q,p){g=" "+g[1].replace(/\\/g,"")+" ";if(p)return g;p=0;for(var v;(v=h[p])!=null;p++)if(v)if(q^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))l||m.push(v);else if(l)h[p]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},
CHILD:function(g){if(g[1]==="nth"){var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=h[1]+(h[2]||1)-0;g[3]=h[3]-0}g[0]=e++;return g},ATTR:function(g,h,l,m,q,p){h=g[1].replace(/\\/g,"");if(!p&&n.attrMap[h])g[1]=n.attrMap[h];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,h,l,m,q){if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,h);else{g=k.filter(g[3],h,l,true^q);l||m.push.apply(m,
g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,h,l){return!!k(l[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},
text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},
setFilters:{first:function(g,h){return h===0},last:function(g,h,l,m){return h===m.length-1},even:function(g,h){return h%2===0},odd:function(g,h){return h%2===1},lt:function(g,h,l){return h<l[3]-0},gt:function(g,h,l){return h>l[3]-0},nth:function(g,h,l){return l[3]-0===h},eq:function(g,h,l){return l[3]-0===h}},filter:{PSEUDO:function(g,h,l,m){var q=h[1],p=n.filters[q];if(p)return p(g,l,h,m);else if(q==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;else if(q==="not"){h=
h[3];l=0;for(m=h.length;l<m;l++)if(h[l]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+q)},CHILD:function(g,h){var l=h[1],m=g;switch(l){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(l==="first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":l=h[2];var q=h[3];if(l===1&&q===0)return true;h=h[0];var p=g.parentNode;if(p&&(p.sizcache!==h||!g.nodeIndex)){var v=0;for(m=p.firstChild;m;m=
m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;p.sizcache=h}g=g.nodeIndex-q;return l===0?g===0:g%l===0&&g/l>=0}},ID:function(g,h){return g.nodeType===1&&g.getAttribute("id")===h},TAG:function(g,h){return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h},CLASS:function(g,h){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1},ATTR:function(g,h){var l=h[1];g=n.attrHandle[l]?n.attrHandle[l](g):g[l]!=null?g[l]:g.getAttribute(l);l=g+"";var m=h[2];h=h[4];return g==null?m==="!=":m===
"="?l===h:m==="*="?l.indexOf(h)>=0:m==="~="?(" "+l+" ").indexOf(h)>=0:!h?l&&g!==false:m==="!="?l!==h:m==="^="?l.indexOf(h)===0:m==="$="?l.substr(l.length-h.length)===h:m==="|="?l===h||l.substr(0,h.length+1)===h+"-":false},POS:function(g,h,l,m){var q=n.setFilters[h[2]];if(q)return q(g,l,h,m)}}},r=n.match.POS;for(var u in n.match){n.match[u]=new RegExp(n.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[u].source.replace(/\\(\d+)/g,function(g,
h){return"\\"+(h-0+1)}))}var z=function(g,h){g=Array.prototype.slice.call(g,0);if(h){h.push.apply(h,g);return h}return g};try{Array.prototype.slice.call(s.documentElement.childNodes,0)}catch(C){z=function(g,h){h=h||[];if(j.call(g)==="[object Array]")Array.prototype.push.apply(h,g);else if(typeof g.length==="number")for(var l=0,m=g.length;l<m;l++)h.push(g[l]);else for(l=0;g[l];l++)h.push(g[l]);return h}}var B;if(s.documentElement.compareDocumentPosition)B=function(g,h){if(!g.compareDocumentPosition||
!h.compareDocumentPosition){if(g==h)i=true;return g.compareDocumentPosition?-1:1}g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;if(g===0)i=true;return g};else if("sourceIndex"in s.documentElement)B=function(g,h){if(!g.sourceIndex||!h.sourceIndex){if(g==h)i=true;return g.sourceIndex?-1:1}g=g.sourceIndex-h.sourceIndex;if(g===0)i=true;return g};else if(s.createRange)B=function(g,h){if(!g.ownerDocument||!h.ownerDocument){if(g==h)i=true;return g.ownerDocument?-1:1}var l=g.ownerDocument.createRange(),m=
h.ownerDocument.createRange();l.setStart(g,0);l.setEnd(g,0);m.setStart(h,0);m.setEnd(h,0);g=l.compareBoundaryPoints(Range.START_TO_END,m);if(g===0)i=true;return g};(function(){var g=s.createElement("div"),h="script"+(new Date).getTime();g.innerHTML="<a name='"+h+"'/>";var l=s.documentElement;l.insertBefore(g,l.firstChild);if(s.getElementById(h)){n.find.ID=function(m,q,p){if(typeof q.getElementById!=="undefined"&&!p)return(q=q.getElementById(m[1]))?q.id===m[1]||typeof q.getAttributeNode!=="undefined"&&
q.getAttributeNode("id").nodeValue===m[1]?[q]:w:[]};n.filter.ID=function(m,q){var p=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&p&&p.nodeValue===q}}l.removeChild(g);l=g=null})();(function(){var g=s.createElement("div");g.appendChild(s.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,l){l=l.getElementsByTagName(h[1]);if(h[1]==="*"){h=[];for(var m=0;l[m];m++)l[m].nodeType===1&&h.push(l[m]);l=h}return l};g.innerHTML="<a href='#'></a>";
if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){return h.getAttribute("href",2)};g=null})();s.querySelectorAll&&function(){var g=k,h=s.createElement("div");h.innerHTML="<p class='TEST'></p>";if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){k=function(m,q,p,v){q=q||s;if(!v&&q.nodeType===9&&!x(q))try{return z(q.querySelectorAll(m),p)}catch(t){}return g(m,q,p,v)};for(var l in g)k[l]=g[l];h=null}}();
(function(){var g=s.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(h,l,m){if(typeof l.getElementsByClassName!=="undefined"&&!m)return l.getElementsByClassName(h[1])};g=null}}})();var E=s.compareDocumentPosition?function(g,h){return!!(g.compareDocumentPosition(h)&16)}:
function(g,h){return g!==h&&(g.contains?g.contains(h):true)},x=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false},ga=function(g,h){var l=[],m="",q;for(h=h.nodeType?[h]:h;q=n.match.PSEUDO.exec(g);){m+=q[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;q=0;for(var p=h.length;q<p;q++)k(g,h[q],l);return k.filter(m,l)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=a;c.isXMLDoc=x;c.contains=E})();var eb=/Until$/,fb=/^(?:parents|prevUntil|prevAll)/,
gb=/,/;R=Array.prototype.slice;var Ia=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(e,j){return!!b.call(e,j,e)===d});else if(b.nodeType)return c.grep(a,function(e){return e===b===d});else if(typeof b==="string"){var f=c.grep(a,function(e){return e.nodeType===1});if(Ua.test(b))return c.filter(b,f,!d);else b=c.filter(b,f)}return c.grep(a,function(e){return c.inArray(e,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;
c.find(a,this[f],b);if(f>0)for(var j=d;j<b.length;j++)for(var i=0;i<d;i++)if(b[i]===b[j]){b.splice(j--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(Ia(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ia(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,j=
{},i;if(f&&a.length){e=0;for(var o=a.length;e<o;e++){i=a[e];j[i]||(j[i]=c.expr.match.POS.test(i)?c(i,b||this.context):i)}for(;f&&f.ownerDocument&&f!==b;){for(i in j){e=j[i];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:i,elem:f});delete j[i]}}f=f.parentNode}}return d}var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(n,r){for(;r&&r.ownerDocument&&r!==b;){if(k?k.index(r)>-1:c(r).is(a))return r;r=r.parentNode}return null})},index:function(a){if(!a||typeof a===
"string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(qa(a[0])||qa(b[0])?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",
d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);eb.test(a)||(f=d);if(f&&typeof f==="string")e=c.filter(f,e);e=this.length>1?c.unique(e):e;if((this.length>1||gb.test(f))&&fb.test(a))e=e.reverse();return this.pushStack(e,a,R.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return c.find.matches(a,b)},dir:function(a,b,d){var f=[];for(a=a[b];a&&a.nodeType!==9&&(d===w||a.nodeType!==1||!c(a).is(d));){a.nodeType===
1&&f.push(a);a=a[b]}return f},nth:function(a,b,d){b=b||1;for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var Ja=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Ka=/(<([\w:]+)[^>]*?)\/>/g,hb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,La=/<([\w:]+)/,ib=/<tbody/i,jb=/<|&#?\w+;/,ta=/<script|<object|<embed|<option|<style/i,ua=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=function(a,b,d){return hb.test(d)?
a:b+"></"+d+">"},F={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;if(!c.support.htmlSerialize)F._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){if(!b&&f.nodeType===1){c.cleanData(f.getElementsByTagName("*"));c.cleanData([f])}f.parentNode&&f.parentNode.removeChild(f)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,f=this.ownerDocument;if(!d){d=f.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(Ja,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(V,"")],f)[0]}else return this.cloneNode(true)});if(a===true){ra(this,b);ra(this.find("*"),b.find("*"))}return b},html:function(a){if(a===w)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Ja,
""):null;else if(typeof a==="string"&&!ta.test(a)&&(c.support.leadingWhitespace||!V.test(a))&&!F[(La.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ka,Ma);try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}}else c.isFunction(a)?this.each(function(e){var j=c(this),i=j.html();j.empty().append(function(){return a.call(this,e,i)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&
this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),f=d.html();d.replaceWith(a.call(this,b,f))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){function f(u){return c.nodeName(u,"table")?u.getElementsByTagName("tbody")[0]||
u.appendChild(u.ownerDocument.createElement("tbody")):u}var e,j,i=a[0],o=[],k;if(!c.support.checkClone&&arguments.length===3&&typeof i==="string"&&ua.test(i))return this.each(function(){c(this).domManip(a,b,d,true)});if(c.isFunction(i))return this.each(function(u){var z=c(this);a[0]=i.call(this,u,b?z.html():w);z.domManip(a,b,d)});if(this[0]){e=i&&i.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:sa(a,this,o);k=e.fragment;if(j=k.childNodes.length===
1?(k=k.firstChild):k.firstChild){b=b&&c.nodeName(j,"tr");for(var n=0,r=this.length;n<r;n++)d.call(b?f(this[n],j):this[n],n>0||e.cacheable||this.length>1?k.cloneNode(true):k)}o.length&&c.each(o,Qa)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var f=[];d=c(d);var e=this.length===1&&this[0].parentNode;if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){d[b](this[0]);
return this}else{e=0;for(var j=d.length;e<j;e++){var i=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),i);f=f.concat(i)}return this.pushStack(f,a,d.selector)}}});c.extend({clean:function(a,b,d,f){b=b||s;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;for(var e=[],j=0,i;(i=a[j])!=null;j++){if(typeof i==="number")i+="";if(i){if(typeof i==="string"&&!jb.test(i))i=b.createTextNode(i);else if(typeof i==="string"){i=i.replace(Ka,Ma);var o=(La.exec(i)||["",
""])[1].toLowerCase(),k=F[o]||F._default,n=k[0],r=b.createElement("div");for(r.innerHTML=k[1]+i+k[2];n--;)r=r.lastChild;if(!c.support.tbody){n=ib.test(i);o=o==="table"&&!n?r.firstChild&&r.firstChild.childNodes:k[1]==="<table>"&&!n?r.childNodes:[];for(k=o.length-1;k>=0;--k)c.nodeName(o[k],"tbody")&&!o[k].childNodes.length&&o[k].parentNode.removeChild(o[k])}!c.support.leadingWhitespace&&V.test(i)&&r.insertBefore(b.createTextNode(V.exec(i)[0]),r.firstChild);i=r.childNodes}if(i.nodeType)e.push(i);else e=
c.merge(e,i)}}if(d)for(j=0;e[j];j++)if(f&&c.nodeName(e[j],"script")&&(!e[j].type||e[j].type.toLowerCase()==="text/javascript"))f.push(e[j].parentNode?e[j].parentNode.removeChild(e[j]):e[j]);else{e[j].nodeType===1&&e.splice.apply(e,[j+1,0].concat(c.makeArray(e[j].getElementsByTagName("script"))));d.appendChild(e[j])}return e},cleanData:function(a){for(var b,d,f=c.cache,e=c.event.special,j=c.support.deleteExpando,i=0,o;(o=a[i])!=null;i++)if(d=o[c.expando]){b=f[d];if(b.events)for(var k in b.events)e[k]?
c.event.remove(o,k):Ca(o,k,b.handle);if(j)delete o[c.expando];else o.removeAttribute&&o.removeAttribute(c.expando);delete f[d]}}});var kb=/z-?index|font-?weight|opacity|zoom|line-?height/i,Na=/alpha\([^)]*\)/,Oa=/opacity=([^)]*)/,ha=/float/i,ia=/-([a-z])/ig,lb=/([A-Z])/g,mb=/^-?\d+(?:px)?$/i,nb=/^-?\d/,ob={position:"absolute",visibility:"hidden",display:"block"},pb=["Left","Right"],qb=["Top","Bottom"],rb=s.defaultView&&s.defaultView.getComputedStyle,Pa=c.support.cssFloat?"cssFloat":"styleFloat",ja=
function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return X(this,a,b,true,function(d,f,e){if(e===w)return c.curCSS(d,f);if(typeof e==="number"&&!kb.test(f))e+="px";c.style(d,f,e)})};c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return w;if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;var f=a.style||a,e=d!==w;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=
Na.test(a)?a.replace(Na,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Oa.exec(f.filter)[1])/100+"":""}if(ha.test(b))b=Pa;b=b.replace(ia,ja);if(e)f[b]=d;return f[b]},css:function(a,b,d,f){if(b==="width"||b==="height"){var e,j=b==="width"?pb:qb;function i(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(j,function(){f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);if(f==="margin")e+=parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,
"border"+this+"Width",true))||0})}a.offsetWidth!==0?i():c.swap(a,ob,i);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&b==="opacity"&&a.currentStyle){f=Oa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}if(ha.test(b))b=Pa;if(!d&&e&&e[b])f=e[b];else if(rb){if(ha.test(b))b="float";b=b.replace(lb,"-$1").toLowerCase();e=a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=
a.getPropertyValue(b);if(b==="opacity"&&f==="")f="1"}else if(a.currentStyle){d=b.replace(ia,ja);f=a.currentStyle[b]||a.currentStyle[d];if(!mb.test(f)&&nb.test(f)){b=e.left;var j=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=j}}return f},swap:function(a,b,d){var f={};for(var e in b){f[e]=a.style[e];a.style[e]=b[e]}d.call(a);for(e in b)a.style[e]=f[e]}});if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=
a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var sb=J(),tb=/<script(.|\s)*?\/script>/gi,ub=/select|textarea/i,vb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,N=/=\?(&|$)/,ka=/\?/,wb=/(\?|&)_=.*?(&|$)/,xb=/^(\w+:)?\/\/([^\/?#]+)/,yb=/%20/g,zb=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!==
"string")return zb.call(this,a);else if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var e=a.slice(f,a.length);a=a.slice(0,f)}f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);f="POST"}var j=this;c.ajax({url:a,type:f,dataType:"html",data:b,complete:function(i,o){if(o==="success"||o==="notmodified")j.html(e?c("<div />").append(i.responseText.replace(tb,"")).find(e):i.responseText);d&&j.each(d,[i.responseText,o,i])}});return this},
serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ub.test(this.nodeName)||vb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(d){return{name:b.name,value:d}}):{name:b.name,value:a}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,
global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){return new A.XMLHttpRequest}:function(){try{return new A.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&
e.success.call(k,o,i,x);e.global&&f("ajaxSuccess",[x,e])}function d(){e.complete&&e.complete.call(k,x,i);e.global&&f("ajaxComplete",[x,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(q,p){(e.context?c(e.context):c.event).trigger(q,p)}var e=c.extend(true,{},c.ajaxSettings,a),j,i,o,k=a&&a.context||e,n=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);if(e.dataType==="jsonp"){if(n==="GET")N.test(e.url)||(e.url+=(ka.test(e.url)?
"&":"?")+(e.jsonp||"callback")+"=?");else if(!e.data||!N.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&N.test(e.data)||N.test(e.url))){j=e.jsonpCallback||"jsonp"+sb++;if(e.data)e.data=(e.data+"").replace(N,"="+j+"$1");e.url=e.url.replace(N,"="+j+"$1");e.dataType="script";A[j]=A[j]||function(q){o=q;b();d();A[j]=w;try{delete A[j]}catch(p){}z&&z.removeChild(C)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===
false&&n==="GET"){var r=J(),u=e.url.replace(wb,"$1_="+r+"$2");e.url=u+(u===e.url?(ka.test(e.url)?"&":"?")+"_="+r:"")}if(e.data&&n==="GET")e.url+=(ka.test(e.url)?"&":"?")+e.data;e.global&&!c.active++&&c.event.trigger("ajaxStart");r=(r=xb.exec(e.url))&&(r[1]&&r[1]!==location.protocol||r[2]!==location.host);if(e.dataType==="script"&&n==="GET"&&r){var z=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");C.src=e.url;if(e.scriptCharset)C.charset=e.scriptCharset;if(!j){var B=
false;C.onload=C.onreadystatechange=function(){if(!B&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){B=true;b();d();C.onload=C.onreadystatechange=null;z&&C.parentNode&&z.removeChild(C)}}}z.insertBefore(C,z.firstChild);return w}var E=false,x=e.xhr();if(x){e.username?x.open(n,e.url,e.async,e.username,e.password):x.open(n,e.url,e.async);try{if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",
c.lastModified[e.url]);c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])}r||x.setRequestHeader("X-Requested-With","XMLHttpRequest");x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)}catch(ga){}if(e.beforeSend&&e.beforeSend.call(k,x,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");x.abort();return false}e.global&&f("ajaxSend",[x,e]);var g=x.onreadystatechange=function(q){if(!x||x.readyState===0||q==="abort"){E||
d();E=true;if(x)x.onreadystatechange=c.noop}else if(!E&&x&&(x.readyState===4||q==="timeout")){E=true;x.onreadystatechange=c.noop;i=q==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";var p;if(i==="success")try{o=c.httpData(x,e.dataType,e)}catch(v){i="parsererror";p=v}if(i==="success"||i==="notmodified")j||b();else c.handleError(e,x,i,p);d();q==="timeout"&&x.abort();if(e.async)x=null}};try{var h=x.abort;x.abort=function(){x&&h.call(x);
g("abort")}}catch(l){}e.async&&e.timeout>0&&setTimeout(function(){x&&!E&&g("timeout")},e.timeout);try{x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)}catch(m){c.handleError(e,x,null,m);d()}e.async||g();return x}},handleError:function(a,b,d,f){if(a.error)a.error.call(a.context||a,b,d,f);if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===
1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(f)c.etag[b]=f;return a.status===304||a.status===0},httpData:function(a,b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;a=e?a.responseXML:a.responseText;e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b===
"json"||!b&&f.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);return a},param:function(a,b){function d(i,o){if(c.isArray(o))c.each(o,function(k,n){b||/\[\]$/.test(i)?f(i,n):d(i+"["+(typeof n==="object"||c.isArray(n)?k:"")+"]",n)});else!b&&o!=null&&typeof o==="object"?c.each(o,function(k,n){d(i+"["+k+"]",n)}):f(i,o)}function f(i,o){o=c.isFunction(o)?o():o;e[e.length]=encodeURIComponent(i)+"="+encodeURIComponent(o)}var e=[];if(b===w)b=c.ajaxSettings.traditional;
if(c.isArray(a)||a.jquery)c.each(a,function(){f(this.name,this.value)});else for(var j in a)d(j,a[j]);return e.join("&").replace(yb,"+")}});var la={},Ab=/toggle|show|hide/,Bb=/^([+-]=)?([\d+-.]+)(.*)$/,W,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a||a===0)return this.animate(K("show",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");
this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){d=this[a].nodeName;var f;if(la[d])f=la[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");if(f==="none")f="block";e.remove();la[d]=f}c.data(this[a],"olddisplay",f)}}a=0;for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b){if(a||a===0)return this.animate(K("hide",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],
"olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){var f=d?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(K("toggle",3),a,b);return this},fadeTo:function(a,b,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d)},
animate:function(a,b,d,f){var e=c.speed(b,d,f);if(c.isEmptyObject(a))return this.each(e.complete);return this[e.queue===false?"each":"queue"](function(){var j=c.extend({},e),i,o=this.nodeType===1&&c(this).is(":hidden"),k=this;for(i in a){var n=i.replace(ia,ja);if(i!==n){a[n]=a[i];delete a[i];i=n}if(a[i]==="hide"&&o||a[i]==="show"&&!o)return j.complete.call(this);if((i==="height"||i==="width")&&this.style){j.display=c.css(this,"display");j.overflow=this.style.overflow}if(c.isArray(a[i])){(j.specialEasing=
j.specialEasing||{})[i]=a[i][1];a[i]=a[i][0]}}if(j.overflow!=null)this.style.overflow="hidden";j.curAnim=c.extend({},a);c.each(a,function(r,u){var z=new c.fx(k,j,r);if(Ab.test(u))z[u==="toggle"?o?"show":"hide":u](a);else{var C=Bb.exec(u),B=z.cur(true)||0;if(C){u=parseFloat(C[2]);var E=C[3]||"px";if(E!=="px"){k.style[r]=(u||1)+E;B=(u||1)/z.cur(true)*B;k.style[r]=B+E}if(C[1])u=(C[1]==="-="?-1:1)*u+B;z.custom(B,u,E)}else z.custom(B,u,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);
this.each(function(){for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){b&&d[f](true);d.splice(f,1)}});b||this.dequeue();return this}});c.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,f){return this.animate(b,d,f)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration===
"number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,b,d,f){return d+f*a},swing:function(a,b,d,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||
c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(j){return e.step(j)}this.startTime=J();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;
this.pos=this.state=0;var e=this;f.elem=this.elem;if(f()&&c.timers.push(f)&&!W)W=setInterval(c.fx.tick,13)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=J(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=
this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;a=c.data(this.elem,"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,
e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}else{e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||
c.fx.stop()},stop:function(){clearInterval(W);W=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.fn.offset="getBoundingClientRect"in s.documentElement?
function(a){var b=this[0];if(a)return this.each(function(e){c.offset.setOffset(this,a,e)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),f=b.ownerDocument;b=f.body;f=f.documentElement;return{top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=
this[0];if(a)return this.each(function(r){c.offset.setOffset(this,a,r)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,f=b,e=b.ownerDocument,j,i=e.documentElement,o=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;for(var k=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==i;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;j=e?e.getComputedStyle(b,null):b.currentStyle;
k-=b.scrollTop;n-=b.scrollLeft;if(b===d){k+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&j.overflow!=="visible"){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=j}if(f.position==="relative"||f.position==="static"){k+=o.offsetTop;n+=o.offsetLeft}if(c.offset.supportsFixedPosition&&
f.position==="fixed"){k+=Math.max(i.scrollTop,o.scrollTop);n+=Math.max(i.scrollLeft,o.scrollLeft)}return{top:k,left:n}};c.offset={initialize:function(){var a=s.body,b=s.createElement("div"),d,f,e,j=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.insertBefore(b,a.firstChild);d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==j;a.removeChild(b);
c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.curCSS(a,"marginTop",true))||0;d+=parseFloat(c.curCSS(a,"marginLeft",true))||0}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),j=parseInt(c.curCSS(a,"top",true),10)||0,i=parseInt(c.curCSS(a,"left",true),10)||0;if(c.isFunction(b))b=b.call(a,
d,e);d={top:b.top-e.top+j,left:b.left-e.left+i};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;return{top:d.top-
f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(f){var e=this[0],j;if(!e)return null;if(f!==w)return this.each(function(){if(j=wa(this))j.scrollTo(!a?f:c(j).scrollLeft(),a?f:c(j).scrollTop());else this[d]=f});else return(j=wa(e))?"pageXOffset"in j?j[a?"pageYOffset":
"pageXOffset"]:c.support.boxModel&&j.document.documentElement[d]||j.document.body[d]:e[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(f){return this[0]?c.css(this[0],d,false,f?"margin":"border"):null};c.fn[d]=function(f){var e=this[0];if(!e)return f==null?null:this;if(c.isFunction(f))return this.each(function(j){var i=c(this);i[d](f.call(this,j,i[d]()))});return"scrollTo"in
e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);


/*
 * Shadowbox.js, version 3.0.3
 * http://shadowbox-js.com/
 *
 * Copyright 2007-2010, Michael J. I. Jackson
 * Date: 2010-10-21 17:33:29 +0000
 */
(function(au,k){var Q={version:"3.0.3"};var J=navigator.userAgent.toLowerCase();if(J.indexOf("windows")>-1||J.indexOf("win32")>-1){Q.isWindows=true}else{if(J.indexOf("macintosh")>-1||J.indexOf("mac os x")>-1){Q.isMac=true}else{if(J.indexOf("linux")>-1){Q.isLinux=true}}}Q.isIE=J.indexOf("msie")>-1;Q.isIE6=J.indexOf("msie 6")>-1;Q.isIE7=J.indexOf("msie 7")>-1;Q.isGecko=J.indexOf("gecko")>-1&&J.indexOf("safari")==-1;Q.isWebKit=J.indexOf("applewebkit/")>-1;var ab=/#(.+)$/,af=/^(light|shadow)box\[(.*?)\]/i,az=/\s*([a-z_]*?)\s*=\s*(.+)\s*/,f=/[0-9a-z]+$/i,aD=/(.+\/)shadowbox\.js/i;var A=false,a=false,l={},z=0,R,ap;Q.current=-1;Q.dimensions=null;Q.ease=function(K){return 1+Math.pow(K-1,3)};Q.errorInfo={fla:{name:"Flash",url:"http://www.adobe.com/products/flashplayer/"},qt:{name:"QuickTime",url:"http://www.apple.com/quicktime/download/"},wmp:{name:"Windows Media Player",url:"http://www.microsoft.com/windows/windowsmedia/"},f4m:{name:"Flip4Mac",url:"http://www.flip4mac.com/wmv_download.htm"}};Q.gallery=[];Q.onReady=aj;Q.path=null;Q.player=null;Q.playerId="sb-player";Q.options={animate:true,animateFade:true,autoplayMovies:true,continuous:false,enableKeys:true,flashParams:{bgcolor:"#000000",allowfullscreen:true},flashVars:{},flashVersion:"9.0.115",handleOversize:"resize",handleUnsupported:"link",onChange:aj,onClose:aj,onFinish:aj,onOpen:aj,showMovieControls:true,skipSetup:false,slideshowDelay:0,viewportPadding:20};Q.getCurrent=function(){return Q.current>-1?Q.gallery[Q.current]:null};Q.hasNext=function(){return Q.gallery.length>1&&(Q.current!=Q.gallery.length-1||Q.options.continuous)};Q.isOpen=function(){return A};Q.isPaused=function(){return ap=="pause"};Q.applyOptions=function(K){l=aC({},Q.options);aC(Q.options,K)};Q.revertOptions=function(){aC(Q.options,l)};Q.init=function(aG,aJ){if(a){return}a=true;if(Q.skin.options){aC(Q.options,Q.skin.options)}if(aG){aC(Q.options,aG)}if(!Q.path){var aI,S=document.getElementsByTagName("script");for(var aH=0,K=S.length;aH<K;++aH){aI=aD.exec(S[aH].src);if(aI){Q.path=aI[1];break}}}if(aJ){Q.onReady=aJ}P()};Q.open=function(S){if(A){return}var K=Q.makeGallery(S);Q.gallery=K[0];Q.current=K[1];S=Q.getCurrent();if(S==null){return}Q.applyOptions(S.options||{});G();if(Q.gallery.length){S=Q.getCurrent();if(Q.options.onOpen(S)===false){return}A=true;Q.skin.onOpen(S,c)}};Q.close=function(){if(!A){return}A=false;if(Q.player){Q.player.remove();Q.player=null}if(typeof ap=="number"){clearTimeout(ap);ap=null}z=0;aq(false);Q.options.onClose(Q.getCurrent());Q.skin.onClose();Q.revertOptions()};Q.play=function(){if(!Q.hasNext()){return}if(!z){z=Q.options.slideshowDelay*1000}if(z){R=aw();ap=setTimeout(function(){z=R=0;Q.next()},z);if(Q.skin.onPlay){Q.skin.onPlay()}}};Q.pause=function(){if(typeof ap!="number"){return}z=Math.max(0,z-(aw()-R));if(z){clearTimeout(ap);ap="pause";if(Q.skin.onPause){Q.skin.onPause()}}};Q.change=function(K){if(!(K in Q.gallery)){if(Q.options.continuous){K=(K<0?Q.gallery.length+K:0);if(!(K in Q.gallery)){return}}else{return}}Q.current=K;if(typeof ap=="number"){clearTimeout(ap);ap=null;z=R=0}Q.options.onChange(Q.getCurrent());c(true)};Q.next=function(){Q.change(Q.current+1)};Q.previous=function(){Q.change(Q.current-1)};Q.setDimensions=function(aS,aJ,aQ,aR,aI,K,aO,aL){var aN=aS,aH=aJ;var aM=2*aO+aI;if(aS+aM>aQ){aS=aQ-aM}var aG=2*aO+K;if(aJ+aG>aR){aJ=aR-aG}var S=(aN-aS)/aN,aP=(aH-aJ)/aH,aK=(S>0||aP>0);if(aL&&aK){if(S>aP){aJ=Math.round((aH/aN)*aS)}else{if(aP>S){aS=Math.round((aN/aH)*aJ)}}}Q.dimensions={height:aS+aI,width:aJ+K,innerHeight:aS,innerWidth:aJ,top:Math.floor((aQ-(aS+aM))/2+aO),left:Math.floor((aR-(aJ+aG))/2+aO),oversized:aK};return Q.dimensions};Q.makeGallery=function(aI){var K=[],aH=-1;if(typeof aI=="string"){aI=[aI]}if(typeof aI.length=="number"){aF(aI,function(aK,aL){if(aL.content){K[aK]=aL}else{K[aK]={content:aL}}});aH=0}else{if(aI.tagName){var S=Q.getCache(aI);aI=S?S:Q.makeObject(aI)}if(aI.gallery){K=[];var aJ;for(var aG in Q.cache){aJ=Q.cache[aG];if(aJ.gallery&&aJ.gallery==aI.gallery){if(aH==-1&&aJ.content==aI.content){aH=K.length}K.push(aJ)}}if(aH==-1){K.unshift(aI);aH=0}}else{K=[aI];aH=0}}aF(K,function(aK,aL){K[aK]=aC({},aL)});return[K,aH]};Q.makeObject=function(aH,aG){var aI={content:aH.href,title:aH.getAttribute("title")||"",link:aH};if(aG){aG=aC({},aG);aF(["player","title","height","width","gallery"],function(aJ,aK){if(typeof aG[aK]!="undefined"){aI[aK]=aG[aK];delete aG[aK]}});aI.options=aG}else{aI.options={}}if(!aI.player){aI.player=Q.getPlayer(aI.content)}var K=aH.getAttribute("rel");if(K){var S=K.match(af);if(S){aI.gallery=escape(S[2])}aF(K.split(";"),function(aJ,aK){S=aK.match(az);if(S){aI[S[1]]=S[2]}})}return aI};Q.getPlayer=function(aG){if(aG.indexOf("#")>-1&&aG.indexOf(document.location.href)==0){return"inline"}var aH=aG.indexOf("?");if(aH>-1){aG=aG.substring(0,aH)}var S,K=aG.match(f);if(K){S=K[0].toLowerCase()}if(S){if(Q.img&&Q.img.ext.indexOf(S)>-1){return"img"}if(Q.swf&&Q.swf.ext.indexOf(S)>-1){return"swf"}if(Q.flv&&Q.flv.ext.indexOf(S)>-1){return"flv"}if(Q.qt&&Q.qt.ext.indexOf(S)>-1){if(Q.wmp&&Q.wmp.ext.indexOf(S)>-1){return"qtwmp"}else{return"qt"}}if(Q.wmp&&Q.wmp.ext.indexOf(S)>-1){return"wmp"}}return"iframe"};function G(){var aH=Q.errorInfo,aI=Q.plugins,aK,aL,aO,aG,aN,S,aM,K;for(var aJ=0;aJ<Q.gallery.length;++aJ){aK=Q.gallery[aJ];aL=false;aO=null;switch(aK.player){case"flv":case"swf":if(!aI.fla){aO="fla"}break;case"qt":if(!aI.qt){aO="qt"}break;case"wmp":if(Q.isMac){if(aI.qt&&aI.f4m){aK.player="qt"}else{aO="qtf4m"}}else{if(!aI.wmp){aO="wmp"}}break;case"qtwmp":if(aI.qt){aK.player="qt"}else{if(aI.wmp){aK.player="wmp"}else{aO="qtwmp"}}break}if(aO){if(Q.options.handleUnsupported=="link"){switch(aO){case"qtf4m":aN="shared";S=[aH.qt.url,aH.qt.name,aH.f4m.url,aH.f4m.name];break;case"qtwmp":aN="either";S=[aH.qt.url,aH.qt.name,aH.wmp.url,aH.wmp.name];break;default:aN="single";S=[aH[aO].url,aH[aO].name]}aK.player="html";aK.content='<div class="sb-message">'+s(Q.lang.errors[aN],S)+"</div>"}else{aL=true}}else{if(aK.player=="inline"){aG=ab.exec(aK.content);if(aG){aM=ad(aG[1]);if(aM){aK.content=aM.innerHTML}else{aL=true}}else{aL=true}}else{if(aK.player=="swf"||aK.player=="flv"){K=(aK.options&&aK.options.flashVersion)||Q.options.flashVersion;if(Q.flash&&!Q.flash.hasFlashPlayerVersion(K)){aK.width=310;aK.height=177}}}}if(aL){Q.gallery.splice(aJ,1);if(aJ<Q.current){--Q.current}else{if(aJ==Q.current){Q.current=aJ>0?aJ-1:aJ}}--aJ}}}function aq(K){if(!Q.options.enableKeys){return}(K?F:M)(document,"keydown",an)}function an(aG){if(aG.metaKey||aG.shiftKey||aG.altKey||aG.ctrlKey){return}var S=v(aG),K;switch(S){case 81:case 88:case 27:K=Q.close;break;case 37:K=Q.previous;break;case 39:K=Q.next;break;case 32:K=typeof ap=="number"?Q.pause:Q.play;break}if(K){n(aG);K()}}function c(aK){aq(false);var aJ=Q.getCurrent();var aG=(aJ.player=="inline"?"html":aJ.player);if(typeof Q[aG]!="function"){throw"unknown player "+aG}if(aK){Q.player.remove();Q.revertOptions();Q.applyOptions(aJ.options||{})}Q.player=new Q[aG](aJ,Q.playerId);if(Q.gallery.length>1){var aH=Q.gallery[Q.current+1]||Q.gallery[0];if(aH.player=="img"){var S=new Image();S.src=aH.content}var aI=Q.gallery[Q.current-1]||Q.gallery[Q.gallery.length-1];if(aI.player=="img"){var K=new Image();K.src=aI.content}}Q.skin.onLoad(aK,W)}function W(){if(!A){return}if(typeof Q.player.ready!="undefined"){var K=setInterval(function(){if(A){if(Q.player.ready){clearInterval(K);K=null;Q.skin.onReady(e)}}else{clearInterval(K);K=null}},10)}else{Q.skin.onReady(e)}}function e(){if(!A){return}Q.player.append(Q.skin.body,Q.dimensions);Q.skin.onShow(I)}function I(){if(!A){return}if(Q.player.onLoad){Q.player.onLoad()}Q.options.onFinish(Q.getCurrent());if(!Q.isPaused()){Q.play()}aq(true)}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(S,aG){var K=this.length>>>0;aG=aG||0;if(aG<0){aG+=K}for(;aG<K;++aG){if(aG in this&&this[aG]===S){return aG}}return -1}}function aw(){return(new Date).getTime()}function aC(K,aG){for(var S in aG){K[S]=aG[S]}return K}function aF(aH,aI){var S=0,K=aH.length;for(var aG=aH[0];S<K&&aI.call(aG,S,aG)!==false;aG=aH[++S]){}}function s(S,K){return S.replace(/\{(\w+?)\}/g,function(aG,aH){return K[aH]})}function aj(){}function ad(K){return document.getElementById(K)}function C(K){K.parentNode.removeChild(K)}var h=true,x=true;function d(){var K=document.body,S=document.createElement("div");h=typeof S.style.opacity==="string";S.style.position="fixed";S.style.margin=0;S.style.top="20px";K.appendChild(S,K.firstChild);x=S.offsetTop==20;K.removeChild(S)}Q.getStyle=(function(){var K=/opacity=([^)]*)/,S=document.defaultView&&document.defaultView.getComputedStyle;return function(aJ,aI){var aH;if(!h&&aI=="opacity"&&aJ.currentStyle){aH=K.test(aJ.currentStyle.filter||"")?(parseFloat(RegExp.$1)/100)+"":"";return aH===""?"1":aH}if(S){var aG=S(aJ,null);if(aG){aH=aG[aI]}if(aI=="opacity"&&aH==""){aH="1"}}else{aH=aJ.currentStyle[aI]}return aH}})();Q.appendHTML=function(aG,S){if(aG.insertAdjacentHTML){aG.insertAdjacentHTML("BeforeEnd",S)}else{if(aG.lastChild){var K=aG.ownerDocument.createRange();K.setStartAfter(aG.lastChild);var aH=K.createContextualFragment(S);aG.appendChild(aH)}else{aG.innerHTML=S}}};Q.getWindowSize=function(K){if(document.compatMode==="CSS1Compat"){return document.documentElement["client"+K]}return document.body["client"+K]};Q.setOpacity=function(aG,K){var S=aG.style;if(h){S.opacity=(K==1?"":K)}else{S.zoom=1;if(K==1){if(typeof S.filter=="string"&&(/alpha/i).test(S.filter)){S.filter=S.filter.replace(/\s*[\w\.]*alpha\([^\)]*\);?/gi,"")}}else{S.filter=(S.filter||"").replace(/\s*[\w\.]*alpha\([^\)]*\)/gi,"")+" alpha(opacity="+(K*100)+")"}}};Q.clearOpacity=function(K){Q.setOpacity(K,1)};function o(K){return K.target}function V(K){return[K.pageX,K.pageY]}function n(K){K.preventDefault()}function v(K){return K.keyCode}function F(aG,S,K){jQuery(aG).bind(S,K)}function M(aG,S,K){jQuery(aG).unbind(S,K)}jQuery.fn.shadowbox=function(K){return this.each(function(){var aG=jQuery(this);var aH=jQuery.extend({},K||{},jQuery.metadata?aG.metadata():jQuery.meta?aG.data():{});var S=this.className||"";aH.width=parseInt((S.match(/w:(\d+)/)||[])[1])||aH.width;aH.height=parseInt((S.match(/h:(\d+)/)||[])[1])||aH.height;Shadowbox.setup(aG,aH)})};var y=false,al;if(document.addEventListener){al=function(){document.removeEventListener("DOMContentLoaded",al,false);Q.load()}}else{if(document.attachEvent){al=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",al);Q.load()}}}}function g(){if(y){return}try{document.documentElement.doScroll("left")}catch(K){setTimeout(g,1);return}Q.load()}function P(){if(document.readyState==="complete"){return Q.load()}if(document.addEventListener){document.addEventListener("DOMContentLoaded",al,false);au.addEventListener("load",Q.load,false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",al);au.attachEvent("onload",Q.load);var K=false;try{K=au.frameElement===null}catch(S){}if(document.documentElement.doScroll&&K){g()}}}}Q.load=function(){if(y){return}if(!document.body){return setTimeout(Q.load,13)}y=true;d();Q.onReady();if(!Q.options.skipSetup){Q.setup()}Q.skin.init()};Q.plugins={};if(navigator.plugins&&navigator.plugins.length){var w=[];aF(navigator.plugins,function(K,S){w.push(S.name)});w=w.join(",");var ai=w.indexOf("Flip4Mac")>-1;Q.plugins={fla:w.indexOf("Shockwave Flash")>-1,qt:w.indexOf("QuickTime")>-1,wmp:!ai&&w.indexOf("Windows Media")>-1,f4m:ai}}else{var p=function(K){var S;try{S=new ActiveXObject(K)}catch(aG){}return !!S};Q.plugins={fla:p("ShockwaveFlash.ShockwaveFlash"),qt:p("QuickTime.QuickTime"),wmp:p("wmplayer.ocx"),f4m:false}}var X=/^(light|shadow)box/i,am="shadowboxCacheKey",b=1;Q.cache={};Q.select=function(S){var aG=[];if(!S){var K;aF(document.getElementsByTagName("a"),function(aJ,aK){K=aK.getAttribute("rel");if(K&&X.test(K)){aG.push(aK)}})}else{var aI=S.length;if(aI){if(typeof S=="string"){if(Q.find){aG=Q.find(S)}}else{if(aI==2&&typeof S[0]=="string"&&S[1].nodeType){if(Q.find){aG=Q.find(S[0],S[1])}}else{for(var aH=0;aH<aI;++aH){aG[aH]=S[aH]}}}}else{aG.push(S)}}return aG};Q.setup=function(K,S){aF(Q.select(K),function(aG,aH){Q.addCache(aH,S)})};Q.teardown=function(K){aF(Q.select(K),function(S,aG){Q.removeCache(aG)})};Q.addCache=function(aG,K){var S=aG[am];if(S==k){S=b++;aG[am]=S;F(aG,"click",u)}Q.cache[S]=Q.makeObject(aG,K)};Q.removeCache=function(K){M(K,"click",u);delete Q.cache[K[am]];K[am]=null};Q.getCache=function(S){var K=S[am];return(K in Q.cache&&Q.cache[K])};Q.clearCache=function(){for(var K in Q.cache){Q.removeCache(Q.cache[K].link)}Q.cache={}};function u(K){Q.open(this);if(Q.gallery.length){n(K)}}
/*
 * Sizzle CSS Selector Engine - v1.0
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 *
 * Modified for inclusion in Shadowbox.js
 */
Q.find=(function(){var aP=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,aQ=0,aS=Object.prototype.toString,aK=false,aJ=true;[0,0].sort(function(){aJ=false;return 0});var aG=function(a1,aW,a4,a5){a4=a4||[];var a7=aW=aW||document;if(aW.nodeType!==1&&aW.nodeType!==9){return[]}if(!a1||typeof a1!=="string"){return a4}var a2=[],aY,a9,bc,aX,a0=true,aZ=aH(aW),a6=a1;while((aP.exec(""),aY=aP.exec(a6))!==null){a6=aY[3];a2.push(aY[1]);if(aY[2]){aX=aY[3];break}}if(a2.length>1&&aL.exec(a1)){if(a2.length===2&&aM.relative[a2[0]]){a9=aT(a2[0]+a2[1],aW)}else{a9=aM.relative[a2[0]]?[aW]:aG(a2.shift(),aW);while(a2.length){a1=a2.shift();if(aM.relative[a1]){a1+=a2.shift()}a9=aT(a1,a9)}}}else{if(!a5&&a2.length>1&&aW.nodeType===9&&!aZ&&aM.match.ID.test(a2[0])&&!aM.match.ID.test(a2[a2.length-1])){var a8=aG.find(a2.shift(),aW,aZ);aW=a8.expr?aG.filter(a8.expr,a8.set)[0]:a8.set[0]}if(aW){var a8=a5?{expr:a2.pop(),set:aO(a5)}:aG.find(a2.pop(),a2.length===1&&(a2[0]==="~"||a2[0]==="+")&&aW.parentNode?aW.parentNode:aW,aZ);a9=a8.expr?aG.filter(a8.expr,a8.set):a8.set;if(a2.length>0){bc=aO(a9)}else{a0=false}while(a2.length){var bb=a2.pop(),ba=bb;if(!aM.relative[bb]){bb=""}else{ba=a2.pop()}if(ba==null){ba=aW}aM.relative[bb](bc,ba,aZ)}}else{bc=a2=[]}}if(!bc){bc=a9}if(!bc){throw"Syntax error, unrecognized expression: "+(bb||a1)}if(aS.call(bc)==="[object Array]"){if(!a0){a4.push.apply(a4,bc)}else{if(aW&&aW.nodeType===1){for(var a3=0;bc[a3]!=null;a3++){if(bc[a3]&&(bc[a3]===true||bc[a3].nodeType===1&&aN(aW,bc[a3]))){a4.push(a9[a3])}}}else{for(var a3=0;bc[a3]!=null;a3++){if(bc[a3]&&bc[a3].nodeType===1){a4.push(a9[a3])}}}}}else{aO(bc,a4)}if(aX){aG(aX,a7,a4,a5);aG.uniqueSort(a4)}return a4};aG.uniqueSort=function(aX){if(aR){aK=aJ;aX.sort(aR);if(aK){for(var aW=1;aW<aX.length;aW++){if(aX[aW]===aX[aW-1]){aX.splice(aW--,1)}}}}return aX};aG.matches=function(aW,aX){return aG(aW,null,null,aX)};aG.find=function(a3,aW,a4){var a2,a0;if(!a3){return[]}for(var aZ=0,aY=aM.order.length;aZ<aY;aZ++){var a1=aM.order[aZ],a0;if((a0=aM.leftMatch[a1].exec(a3))){var aX=a0[1];a0.splice(1,1);if(aX.substr(aX.length-1)!=="\\"){a0[1]=(a0[1]||"").replace(/\\/g,"");a2=aM.find[a1](a0,aW,a4);if(a2!=null){a3=a3.replace(aM.match[a1],"");break}}}}if(!a2){a2=aW.getElementsByTagName("*")}return{set:a2,expr:a3}};aG.filter=function(a6,a5,a9,aZ){var aY=a6,bb=[],a3=a5,a1,aW,a2=a5&&a5[0]&&aH(a5[0]);while(a6&&a5.length){for(var a4 in aM.filter){if((a1=aM.match[a4].exec(a6))!=null){var aX=aM.filter[a4],ba,a8;aW=false;if(a3===bb){bb=[]}if(aM.preFilter[a4]){a1=aM.preFilter[a4](a1,a3,a9,bb,aZ,a2);if(!a1){aW=ba=true}else{if(a1===true){continue}}}if(a1){for(var a0=0;(a8=a3[a0])!=null;a0++){if(a8){ba=aX(a8,a1,a0,a3);var a7=aZ^!!ba;if(a9&&ba!=null){if(a7){aW=true}else{a3[a0]=false}}else{if(a7){bb.push(a8);aW=true}}}}}if(ba!==k){if(!a9){a3=bb}a6=a6.replace(aM.match[a4],"");if(!aW){return[]}break}}}if(a6===aY){if(aW==null){throw"Syntax error, unrecognized expression: "+a6}else{break}}aY=a6}return a3};var aM=aG.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(aW){return aW.getAttribute("href")}},relative:{"+":function(a2,aX){var aZ=typeof aX==="string",a1=aZ&&!/\W/.test(aX),a3=aZ&&!a1;if(a1){aX=aX.toLowerCase()}for(var aY=0,aW=a2.length,a0;aY<aW;aY++){if((a0=a2[aY])){while((a0=a0.previousSibling)&&a0.nodeType!==1){}a2[aY]=a3||a0&&a0.nodeName.toLowerCase()===aX?a0||false:a0===aX}}if(a3){aG.filter(aX,a2,true)}},">":function(a2,aX){var a0=typeof aX==="string";if(a0&&!/\W/.test(aX)){aX=aX.toLowerCase();for(var aY=0,aW=a2.length;aY<aW;aY++){var a1=a2[aY];if(a1){var aZ=a1.parentNode;a2[aY]=aZ.nodeName.toLowerCase()===aX?aZ:false}}}else{for(var aY=0,aW=a2.length;aY<aW;aY++){var a1=a2[aY];if(a1){a2[aY]=a0?a1.parentNode:a1.parentNode===aX}}if(a0){aG.filter(aX,a2,true)}}},"":function(aZ,aX,a1){var aY=aQ++,aW=aU;if(typeof aX==="string"&&!/\W/.test(aX)){var a0=aX=aX.toLowerCase();aW=K}aW("parentNode",aX,aY,aZ,a0,a1)},"~":function(aZ,aX,a1){var aY=aQ++,aW=aU;if(typeof aX==="string"&&!/\W/.test(aX)){var a0=aX=aX.toLowerCase();aW=K}aW("previousSibling",aX,aY,aZ,a0,a1)}},find:{ID:function(aX,aY,aZ){if(typeof aY.getElementById!=="undefined"&&!aZ){var aW=aY.getElementById(aX[1]);return aW?[aW]:[]}},NAME:function(aY,a1){if(typeof a1.getElementsByName!=="undefined"){var aX=[],a0=a1.getElementsByName(aY[1]);for(var aZ=0,aW=a0.length;aZ<aW;aZ++){if(a0[aZ].getAttribute("name")===aY[1]){aX.push(a0[aZ])}}return aX.length===0?null:aX}},TAG:function(aW,aX){return aX.getElementsByTagName(aW[1])}},preFilter:{CLASS:function(aZ,aX,aY,aW,a2,a3){aZ=" "+aZ[1].replace(/\\/g,"")+" ";if(a3){return aZ}for(var a0=0,a1;(a1=aX[a0])!=null;a0++){if(a1){if(a2^(a1.className&&(" "+a1.className+" ").replace(/[\t\n]/g," ").indexOf(aZ)>=0)){if(!aY){aW.push(a1)}}else{if(aY){aX[a0]=false}}}}return false},ID:function(aW){return aW[1].replace(/\\/g,"")},TAG:function(aX,aW){return aX[1].toLowerCase()},CHILD:function(aW){if(aW[1]==="nth"){var aX=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(aW[2]==="even"&&"2n"||aW[2]==="odd"&&"2n+1"||!/\D/.test(aW[2])&&"0n+"+aW[2]||aW[2]);aW[2]=(aX[1]+(aX[2]||1))-0;aW[3]=aX[3]-0}aW[0]=aQ++;return aW},ATTR:function(a0,aX,aY,aW,a1,a2){var aZ=a0[1].replace(/\\/g,"");if(!a2&&aM.attrMap[aZ]){a0[1]=aM.attrMap[aZ]}if(a0[2]==="~="){a0[4]=" "+a0[4]+" "}return a0},PSEUDO:function(a0,aX,aY,aW,a1){if(a0[1]==="not"){if((aP.exec(a0[3])||"").length>1||/^\w/.test(a0[3])){a0[3]=aG(a0[3],null,null,aX)}else{var aZ=aG.filter(a0[3],aX,aY,true^a1);if(!aY){aW.push.apply(aW,aZ)}return false}}else{if(aM.match.POS.test(a0[0])||aM.match.CHILD.test(a0[0])){return true}}return a0},POS:function(aW){aW.unshift(true);return aW}},filters:{enabled:function(aW){return aW.disabled===false&&aW.type!=="hidden"},disabled:function(aW){return aW.disabled===true},checked:function(aW){return aW.checked===true},selected:function(aW){aW.parentNode.selectedIndex;return aW.selected===true},parent:function(aW){return !!aW.firstChild},empty:function(aW){return !aW.firstChild},has:function(aY,aX,aW){return !!aG(aW[3],aY).length},header:function(aW){return/h\d/i.test(aW.nodeName)},text:function(aW){return"text"===aW.type},radio:function(aW){return"radio"===aW.type},checkbox:function(aW){return"checkbox"===aW.type},file:function(aW){return"file"===aW.type},password:function(aW){return"password"===aW.type},submit:function(aW){return"submit"===aW.type},image:function(aW){return"image"===aW.type},reset:function(aW){return"reset"===aW.type},button:function(aW){return"button"===aW.type||aW.nodeName.toLowerCase()==="button"},input:function(aW){return/input|select|textarea|button/i.test(aW.nodeName)}},setFilters:{first:function(aX,aW){return aW===0},last:function(aY,aX,aW,aZ){return aX===aZ.length-1},even:function(aX,aW){return aW%2===0},odd:function(aX,aW){return aW%2===1},lt:function(aY,aX,aW){return aX<aW[3]-0},gt:function(aY,aX,aW){return aX>aW[3]-0},nth:function(aY,aX,aW){return aW[3]-0===aX},eq:function(aY,aX,aW){return aW[3]-0===aX}},filter:{PSEUDO:function(a2,aY,aZ,a3){var aX=aY[1],a0=aM.filters[aX];if(a0){return a0(a2,aZ,aY,a3)}else{if(aX==="contains"){return(a2.textContent||a2.innerText||S([a2])||"").indexOf(aY[3])>=0}else{if(aX==="not"){var a1=aY[3];for(var aZ=0,aW=a1.length;aZ<aW;aZ++){if(a1[aZ]===a2){return false}}return true}else{throw"Syntax error, unrecognized expression: "+aX}}}},CHILD:function(aW,aZ){var a2=aZ[1],aX=aW;switch(a2){case"only":case"first":while((aX=aX.previousSibling)){if(aX.nodeType===1){return false}}if(a2==="first"){return true}aX=aW;case"last":while((aX=aX.nextSibling)){if(aX.nodeType===1){return false}}return true;case"nth":var aY=aZ[2],a5=aZ[3];if(aY===1&&a5===0){return true}var a1=aZ[0],a4=aW.parentNode;if(a4&&(a4.sizcache!==a1||!aW.nodeIndex)){var a0=0;for(aX=a4.firstChild;aX;aX=aX.nextSibling){if(aX.nodeType===1){aX.nodeIndex=++a0}}a4.sizcache=a1}var a3=aW.nodeIndex-a5;if(aY===0){return a3===0}else{return(a3%aY===0&&a3/aY>=0)}}},ID:function(aX,aW){return aX.nodeType===1&&aX.getAttribute("id")===aW},TAG:function(aX,aW){return(aW==="*"&&aX.nodeType===1)||aX.nodeName.toLowerCase()===aW},CLASS:function(aX,aW){return(" "+(aX.className||aX.getAttribute("class"))+" ").indexOf(aW)>-1},ATTR:function(a1,aZ){var aY=aZ[1],aW=aM.attrHandle[aY]?aM.attrHandle[aY](a1):a1[aY]!=null?a1[aY]:a1.getAttribute(aY),a2=aW+"",a0=aZ[2],aX=aZ[4];return aW==null?a0==="!=":a0==="="?a2===aX:a0==="*="?a2.indexOf(aX)>=0:a0==="~="?(" "+a2+" ").indexOf(aX)>=0:!aX?a2&&aW!==false:a0==="!="?a2!==aX:a0==="^="?a2.indexOf(aX)===0:a0==="$="?a2.substr(a2.length-aX.length)===aX:a0==="|="?a2===aX||a2.substr(0,aX.length+1)===aX+"-":false},POS:function(a0,aX,aY,a1){var aW=aX[2],aZ=aM.setFilters[aW];if(aZ){return aZ(a0,aY,aX,a1)}}}};var aL=aM.match.POS;for(var aI in aM.match){aM.match[aI]=new RegExp(aM.match[aI].source+/(?![^\[]*\])(?![^\(]*\))/.source);aM.leftMatch[aI]=new RegExp(/(^(?:.|\r|\n)*?)/.source+aM.match[aI].source)}var aO=function(aX,aW){aX=Array.prototype.slice.call(aX,0);if(aW){aW.push.apply(aW,aX);return aW}return aX};try{Array.prototype.slice.call(document.documentElement.childNodes,0)}catch(aV){aO=function(a0,aZ){var aX=aZ||[];if(aS.call(a0)==="[object Array]"){Array.prototype.push.apply(aX,a0)}else{if(typeof a0.length==="number"){for(var aY=0,aW=a0.length;aY<aW;aY++){aX.push(a0[aY])}}else{for(var aY=0;a0[aY];aY++){aX.push(a0[aY])}}}return aX}}var aR;if(document.documentElement.compareDocumentPosition){aR=function(aX,aW){if(!aX.compareDocumentPosition||!aW.compareDocumentPosition){if(aX==aW){aK=true}return aX.compareDocumentPosition?-1:1}var aY=aX.compareDocumentPosition(aW)&4?-1:aX===aW?0:1;if(aY===0){aK=true}return aY}}else{if("sourceIndex" in document.documentElement){aR=function(aX,aW){if(!aX.sourceIndex||!aW.sourceIndex){if(aX==aW){aK=true}return aX.sourceIndex?-1:1}var aY=aX.sourceIndex-aW.sourceIndex;if(aY===0){aK=true}return aY}}else{if(document.createRange){aR=function(aZ,aX){if(!aZ.ownerDocument||!aX.ownerDocument){if(aZ==aX){aK=true}return aZ.ownerDocument?-1:1}var aY=aZ.ownerDocument.createRange(),aW=aX.ownerDocument.createRange();aY.setStart(aZ,0);aY.setEnd(aZ,0);aW.setStart(aX,0);aW.setEnd(aX,0);var a0=aY.compareBoundaryPoints(Range.START_TO_END,aW);if(a0===0){aK=true}return a0}}}}function S(aW){var aX="",aZ;for(var aY=0;aW[aY];aY++){aZ=aW[aY];if(aZ.nodeType===3||aZ.nodeType===4){aX+=aZ.nodeValue}else{if(aZ.nodeType!==8){aX+=S(aZ.childNodes)}}}return aX}(function(){var aX=document.createElement("div"),aY="script"+(new Date).getTime();aX.innerHTML="<a name='"+aY+"'/>";var aW=document.documentElement;aW.insertBefore(aX,aW.firstChild);if(document.getElementById(aY)){aM.find.ID=function(a0,a1,a2){if(typeof a1.getElementById!=="undefined"&&!a2){var aZ=a1.getElementById(a0[1]);return aZ?aZ.id===a0[1]||typeof aZ.getAttributeNode!=="undefined"&&aZ.getAttributeNode("id").nodeValue===a0[1]?[aZ]:k:[]}};aM.filter.ID=function(a1,aZ){var a0=typeof a1.getAttributeNode!=="undefined"&&a1.getAttributeNode("id");return a1.nodeType===1&&a0&&a0.nodeValue===aZ}}aW.removeChild(aX);aW=aX=null})();(function(){var aW=document.createElement("div");aW.appendChild(document.createComment(""));if(aW.getElementsByTagName("*").length>0){aM.find.TAG=function(aX,a1){var a0=a1.getElementsByTagName(aX[1]);if(aX[1]==="*"){var aZ=[];for(var aY=0;a0[aY];aY++){if(a0[aY].nodeType===1){aZ.push(a0[aY])}}a0=aZ}return a0}}aW.innerHTML="<a href='#'></a>";if(aW.firstChild&&typeof aW.firstChild.getAttribute!=="undefined"&&aW.firstChild.getAttribute("href")!=="#"){aM.attrHandle.href=function(aX){return aX.getAttribute("href",2)}}aW=null})();if(document.querySelectorAll){(function(){var aW=aG,aY=document.createElement("div");aY.innerHTML="<p class='TEST'></p>";if(aY.querySelectorAll&&aY.querySelectorAll(".TEST").length===0){return}aG=function(a2,a1,aZ,a0){a1=a1||document;if(!a0&&a1.nodeType===9&&!aH(a1)){try{return aO(a1.querySelectorAll(a2),aZ)}catch(a3){}}return aW(a2,a1,aZ,a0)};for(var aX in aW){aG[aX]=aW[aX]}aY=null})()}(function(){var aW=document.createElement("div");aW.innerHTML="<div class='test e'></div><div class='test'></div>";if(!aW.getElementsByClassName||aW.getElementsByClassName("e").length===0){return}aW.lastChild.className="e";if(aW.getElementsByClassName("e").length===1){return}aM.order.splice(1,0,"CLASS");aM.find.CLASS=function(aX,aY,aZ){if(typeof aY.getElementsByClassName!=="undefined"&&!aZ){return aY.getElementsByClassName(aX[1])}};aW=null})();function K(aX,a2,a1,a5,a3,a4){for(var aZ=0,aY=a5.length;aZ<aY;aZ++){var aW=a5[aZ];if(aW){aW=aW[aX];var a0=false;while(aW){if(aW.sizcache===a1){a0=a5[aW.sizset];break}if(aW.nodeType===1&&!a4){aW.sizcache=a1;aW.sizset=aZ}if(aW.nodeName.toLowerCase()===a2){a0=aW;break}aW=aW[aX]}a5[aZ]=a0}}}function aU(aX,a2,a1,a5,a3,a4){for(var aZ=0,aY=a5.length;aZ<aY;aZ++){var aW=a5[aZ];if(aW){aW=aW[aX];var a0=false;while(aW){if(aW.sizcache===a1){a0=a5[aW.sizset];break}if(aW.nodeType===1){if(!a4){aW.sizcache=a1;aW.sizset=aZ}if(typeof a2!=="string"){if(aW===a2){a0=true;break}}else{if(aG.filter(a2,[aW]).length>0){a0=aW;break}}}aW=aW[aX]}a5[aZ]=a0}}}var aN=document.compareDocumentPosition?function(aX,aW){return aX.compareDocumentPosition(aW)&16}:function(aX,aW){return aX!==aW&&(aX.contains?aX.contains(aW):true)};var aH=function(aW){var aX=(aW?aW.ownerDocument||aW:0).documentElement;return aX?aX.nodeName!=="HTML":false};var aT=function(aW,a3){var aZ=[],a0="",a1,aY=a3.nodeType?[a3]:a3;while((a1=aM.match.PSEUDO.exec(aW))){a0+=a1[0];aW=aW.replace(aM.match.PSEUDO,"")}aW=aM.relative[aW]?aW+"*":aW;for(var a2=0,aX=aY.length;a2<aX;a2++){aG(aW,aY[a2],aZ)}return aG.filter(a0,aZ)};return aG})();Q.lang={code:"es",of:"de",loading:"cargando",cancel:"Cancelar",next:"Siguiente",previous:"Anterior",play:"Reproducir",pause:"Pausa",close:"Cerrar",errors:{single:'Debes instalar el plugin <a href="{0}">{1}</a> en el navegador para ver este contenido.',shared:'Debes instalar el <a href="{0}">{1}</a> y el <a href="{2}">{3}</a> en el navegador para ver este contenido.',either:'Debes instalar o bien el <a href="{0}">{1}</a> o el <a href="{2}">{3}</a> en el navegador para ver este contenido.'}};var D,at="sb-drag-proxy",E,j,ag;function ax(){E={x:0,y:0,startX:null,startY:null}}function aA(){var K=Q.dimensions;aC(j.style,{height:K.innerHeight+"px",width:K.innerWidth+"px"})}function O(){ax();var K=["position:absolute","cursor:"+(Q.isGecko?"-moz-grab":"move"),"background-color:"+(Q.isIE?"#fff;filter:alpha(opacity=0)":"transparent")].join(";");Q.appendHTML(Q.skin.body,'<div id="'+at+'" style="'+K+'"></div>');j=ad(at);aA();F(j,"mousedown",L)}function B(){if(j){M(j,"mousedown",L);C(j);j=null}ag=null}function L(S){n(S);var K=V(S);E.startX=K[0];E.startY=K[1];ag=ad(Q.player.id);F(document,"mousemove",H);F(document,"mouseup",i);if(Q.isGecko){j.style.cursor="-moz-grabbing"}}function H(aI){var K=Q.player,aJ=Q.dimensions,aH=V(aI);var aG=aH[0]-E.startX;E.startX+=aG;E.x=Math.max(Math.min(0,E.x+aG),aJ.innerWidth-K.width);var S=aH[1]-E.startY;E.startY+=S;E.y=Math.max(Math.min(0,E.y+S),aJ.innerHeight-K.height);aC(ag.style,{left:E.x+"px",top:E.y+"px"})}function i(){M(document,"mousemove",H);M(document,"mouseup",i);if(Q.isGecko){j.style.cursor="-moz-grab"}}Q.img=function(S,aG){this.obj=S;this.id=aG;this.ready=false;var K=this;D=new Image();D.onload=function(){K.height=S.height?parseInt(S.height,10):D.height;K.width=S.width?parseInt(S.width,10):D.width;K.ready=true;D.onload=null;D=null};D.src=S.content};Q.img.ext=["bmp","gif","jpg","jpeg","png"];Q.img.prototype={append:function(S,aI){var aG=document.createElement("img");aG.id=this.id;aG.src=this.obj.content;aG.style.position="absolute";var K,aH;if(aI.oversized&&Q.options.handleOversize=="resize"){K=aI.innerHeight;aH=aI.innerWidth}else{K=this.height;aH=this.width}aG.setAttribute("height",K);aG.setAttribute("width",aH);S.appendChild(aG)},remove:function(){var K=ad(this.id);if(K){C(K)}B();if(D){D.onload=null;D=null}},onLoad:function(){var K=Q.dimensions;if(K.oversized&&Q.options.handleOversize=="drag"){O()}},onWindowResize:function(){var aH=Q.dimensions;switch(Q.options.handleOversize){case"resize":var K=ad(this.id);K.height=aH.innerHeight;K.width=aH.innerWidth;break;case"drag":if(ag){var aG=parseInt(Q.getStyle(ag,"top")),S=parseInt(Q.getStyle(ag,"left"));if(aG+this.height<aH.innerHeight){ag.style.top=aH.innerHeight-this.height+"px"}if(S+this.width<aH.innerWidth){ag.style.left=aH.innerWidth-this.width+"px"}aA()}break}}};Q.iframe=function(S,aG){this.obj=S;this.id=aG;var K=ad("sb-overlay");this.height=S.height?parseInt(S.height,10):K.offsetHeight;this.width=S.width?parseInt(S.width,10):K.offsetWidth};Q.iframe.prototype={append:function(K,aG){var S='<iframe id="'+this.id+'" name="'+this.id+'" height="100%" width="100%" frameborder="0" marginwidth="0" marginheight="0" style="visibility:hidden" onload="this.style.visibility=\'visible\'" scrolling="auto"';if(Q.isIE){S+=' allowtransparency="true"';if(Q.isIE6){S+=" src=\"javascript:false;document.write('');\""}}S+="></iframe>";K.innerHTML=S},remove:function(){var K=ad(this.id);if(K){C(K);if(Q.isGecko){delete au.frames[this.id]}}},onLoad:function(){var K=Q.isIE?ad(this.id).contentWindow:au.frames[this.id];K.location.href=this.obj.content}};Q.html=function(K,S){this.obj=K;this.id=S;this.height=K.height?parseInt(K.height,10):300;this.width=K.width?parseInt(K.width,10):500};Q.html.prototype={append:function(K,S){var aG=document.createElement("div");aG.id=this.id;aG.className="html";aG.innerHTML=this.obj.content;K.appendChild(aG)},remove:function(){var K=ad(this.id);if(K){C(K)}}};var ao=false,Y=[],q=["sb-nav-close","sb-nav-next","sb-nav-play","sb-nav-pause","sb-nav-previous"],aa,ae,Z,m=true;function N(aG,aQ,aN,aL,aR){var K=(aQ=="opacity"),aM=K?Q.setOpacity:function(aS,aT){aS.style[aQ]=""+aT+"px"};if(aL==0||(!K&&!Q.options.animate)||(K&&!Q.options.animateFade)){aM(aG,aN);if(aR){aR()}return}var aO=parseFloat(Q.getStyle(aG,aQ))||0;var aP=aN-aO;if(aP==0){if(aR){aR()}return}aL*=1000;var aH=aw(),aK=Q.ease,aJ=aH+aL,aI;var S=setInterval(function(){aI=aw();if(aI>=aJ){clearInterval(S);S=null;aM(aG,aN);if(aR){aR()}}else{aM(aG,aO+aK((aI-aH)/aL)*aP)}},10)}function aB(){aa.style.height=Q.getWindowSize("Height")+"px";aa.style.width=Q.getWindowSize("Width")+"px"}function aE(){aa.style.top=document.documentElement.scrollTop+"px";aa.style.left=document.documentElement.scrollLeft+"px"}function ay(K){if(K){aF(Y,function(S,aG){aG[0].style.visibility=aG[1]||""})}else{Y=[];aF(Q.options.troubleElements,function(aG,S){aF(document.getElementsByTagName(S),function(aH,aI){Y.push([aI,aI.style.visibility]);aI.style.visibility="hidden"})})}}function r(aG,K){var S=ad("sb-nav-"+aG);if(S){S.style.display=K?"":"none"}}function ah(K,aJ){var aI=ad("sb-loading"),aG=Q.getCurrent().player,aH=(aG=="img"||aG=="html");if(K){Q.setOpacity(aI,0);aI.style.display="block";var S=function(){Q.clearOpacity(aI);if(aJ){aJ()}};if(aH){N(aI,"opacity",1,Q.options.fadeDuration,S)}else{S()}}else{var S=function(){aI.style.display="none";Q.clearOpacity(aI);if(aJ){aJ()}};if(aH){N(aI,"opacity",0,Q.options.fadeDuration,S)}else{S()}}}function t(aO){var aJ=Q.getCurrent();ad("sb-title-inner").innerHTML=aJ.title||"";var aP,aL,S,aQ,aM;if(Q.options.displayNav){aP=true;var aN=Q.gallery.length;if(aN>1){if(Q.options.continuous){aL=aM=true}else{aL=(aN-1)>Q.current;aM=Q.current>0}}if(Q.options.slideshowDelay>0&&Q.hasNext()){aQ=!Q.isPaused();S=!aQ}}else{aP=aL=S=aQ=aM=false}r("close",aP);r("next",aL);r("play",S);r("pause",aQ);r("previous",aM);var K="";if(Q.options.displayCounter&&Q.gallery.length>1){var aN=Q.gallery.length;if(Q.options.counterType=="skip"){var aI=0,aH=aN,aG=parseInt(Q.options.counterLimit)||0;if(aG<aN&&aG>2){var aK=Math.floor(aG/2);aI=Q.current-aK;if(aI<0){aI+=aN}aH=Q.current+(aG-aK);if(aH>aN){aH-=aN}}while(aI!=aH){if(aI==aN){aI=0}K+='<a onclick="Shadowbox.change('+aI+');"';if(aI==Q.current){K+=' class="sb-counter-current"'}K+=">"+(++aI)+"</a>"}}else{K=[Q.current+1,Q.lang.of,aN].join(" ")}}ad("sb-counter").innerHTML=K;aO()}function U(aH){var K=ad("sb-title-inner"),aG=ad("sb-info-inner"),S=0.35;K.style.visibility=aG.style.visibility="";if(K.innerHTML!=""){N(K,"marginTop",0,S)}N(aG,"marginTop",0,S,aH)}function av(aG,aM){var aK=ad("sb-title"),K=ad("sb-info"),aH=aK.offsetHeight,aI=K.offsetHeight,aJ=ad("sb-title-inner"),aL=ad("sb-info-inner"),S=(aG?0.35:0);N(aJ,"marginTop",aH,S);N(aL,"marginTop",aI*-1,S,function(){aJ.style.visibility=aL.style.visibility="hidden";aM()})}function ac(K,aH,S,aJ){var aI=ad("sb-wrapper-inner"),aG=(S?Q.options.resizeDuration:0);N(Z,"top",aH,aG);N(aI,"height",K,aG,aJ)}function ar(K,aH,S,aI){var aG=(S?Q.options.resizeDuration:0);N(Z,"left",aH,aG);N(Z,"width",K,aG,aI)}function ak(aM,aG){var aI=ad("sb-body-inner"),aM=parseInt(aM),aG=parseInt(aG),S=Z.offsetHeight-aI.offsetHeight,K=Z.offsetWidth-aI.offsetWidth,aK=ae.offsetHeight,aL=ae.offsetWidth,aJ=parseInt(Q.options.viewportPadding)||20,aH=(Q.player&&Q.options.handleOversize!="drag");return Q.setDimensions(aM,aG,aK,aL,S,K,aJ,aH)}var T={};T.markup='<div id="sb-container"><div id="sb-overlay"></div><div id="sb-wrapper"><div id="sb-title"><div id="sb-title-inner"></div></div><div id="sb-wrapper-inner"><div id="sb-body"><div id="sb-body-inner"></div><div id="sb-loading"><div id="sb-loading-inner"><span>{loading}</span></div></div></div></div><div id="sb-info"><div id="sb-info-inner"><div id="sb-counter"></div><div id="sb-nav"><a id="sb-nav-close" title="{close}" onclick="Shadowbox.close()"></a><a id="sb-nav-next" title="{next}" onclick="Shadowbox.next()"></a><a id="sb-nav-play" title="{play}" onclick="Shadowbox.play()"></a><a id="sb-nav-pause" title="{pause}" onclick="Shadowbox.pause()"></a><a id="sb-nav-previous" title="{previous}" onclick="Shadowbox.previous()"></a></div></div></div></div></div>';T.options={animSequence:"sync",counterLimit:10,counterType:"default",displayCounter:true,displayNav:true,fadeDuration:0.35,initialHeight:160,initialWidth:320,modal:false,overlayColor:"#000",overlayOpacity:0.5,resizeDuration:0.35,showOverlay:true,troubleElements:["select","object","embed","canvas"]};T.init=function(){Q.appendHTML(document.body,s(T.markup,Q.lang));T.body=ad("sb-body-inner");aa=ad("sb-container");ae=ad("sb-overlay");Z=ad("sb-wrapper");if(!x){aa.style.position="absolute"}if(!h){var aG,K,S=/url\("(.*\.png)"\)/;aF(q,function(aI,aJ){aG=ad(aJ);if(aG){K=Q.getStyle(aG,"backgroundImage").match(S);if(K){aG.style.backgroundImage="none";aG.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,src="+K[1]+",sizingMethod=scale);"}}})}var aH;F(au,"resize",function(){if(aH){clearTimeout(aH);aH=null}if(A){aH=setTimeout(T.onWindowResize,10)}})};T.onOpen=function(K,aG){m=false;aa.style.display="block";aB();var S=ak(Q.options.initialHeight,Q.options.initialWidth);ac(S.innerHeight,S.top);ar(S.width,S.left);if(Q.options.showOverlay){ae.style.backgroundColor=Q.options.overlayColor;Q.setOpacity(ae,0);if(!Q.options.modal){F(ae,"click",Q.close)}ao=true}if(!x){aE();F(au,"scroll",aE)}ay();aa.style.visibility="visible";if(ao){N(ae,"opacity",Q.options.overlayOpacity,Q.options.fadeDuration,aG)}else{aG()}};T.onLoad=function(S,K){ah(true);while(T.body.firstChild){C(T.body.firstChild)}av(S,function(){if(!A){return}if(!S){Z.style.visibility="visible"}t(K)})};T.onReady=function(aH){if(!A){return}var S=Q.player,aG=ak(S.height,S.width);var K=function(){U(aH)};switch(Q.options.animSequence){case"hw":ac(aG.innerHeight,aG.top,true,function(){ar(aG.width,aG.left,true,K)});break;case"wh":ar(aG.width,aG.left,true,function(){ac(aG.innerHeight,aG.top,true,K)});break;default:ar(aG.width,aG.left,true);ac(aG.innerHeight,aG.top,true,K)}};T.onShow=function(K){ah(false,K);m=true};T.onClose=function(){if(!x){M(au,"scroll",aE)}M(ae,"click",Q.close);Z.style.visibility="hidden";var K=function(){aa.style.visibility="hidden";aa.style.display="none";ay(true)};if(ao){N(ae,"opacity",0,Q.options.fadeDuration,K)}else{K()}};T.onPlay=function(){r("play",false);r("pause",true)};T.onPause=function(){r("pause",false);r("play",true)};T.onWindowResize=function(){if(!m){return}aB();var K=Q.player,S=ak(K.height,K.width);ar(S.width,S.left);ac(S.innerHeight,S.top);if(K.onWindowResize){K.onWindowResize()}};Q.skin=T;au.Shadowbox=Q})(window);

/*
		Funcion de banners para editorialtelevisa.com.mx
		Utilzando servidores de banners: open adds, google, fijo y dart
		v3.6
*/

if (typeof(tipoArticulo) == "undefined")
	var tipoArticulo='articulo';
var nombre_slot="";
var bannerRotativoEditorial=false;
var tienpoBannerRotativoEditorial=1000*60*3;
var contadorBannerRotativoEditorial=0;
var bannerProtocolo = limpiarCadena(document.location.protocol.toString());
var bannerLiga = limpiarCadena(document.location.toString());
var bannerPath = limpiarCadena(document.location.pathname.toString());
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
function IsNumeric(sText)
{
   var ValidChars = "0123456789.";
   var IsNumber=true;
   var Char;
   for (i = 0; i < sText.length && IsNumber == true; i++) 
      { 
      Char = sText.charAt(i); 
      if (ValidChars.indexOf(Char) == -1) 
         {
         IsNumber = false;
         }
      }
   return IsNumber;
}

function getCookie_banner(name)
{
  var cookie, offset, end;
  cookie  = " "+document.cookie;
  offset  = cookie.indexOf(" "+name+"=");
  if (offset == -1)
  {
	  return undefined;
  }
  offset += name.length+2;
  end     = cookie.indexOf(";", offset);
  if (end    == -1)
  {
	  end = cookie.length;
  }
  return unescape(cookie.substring(offset, end));
}
/* Funciones para ventas */
function validaURL(indice){
	var output;
	output=document.URL;
	var cadenas = output.split('/');
	var dirs = cadenas[cadenas.length-indice];
	return dirs;
}
function getResWidth()
{
 var whScrn = screen.availWidth
 var pgRes = "undefined";
 if (whScrn<=1024){
  pgRes="undefined";
 }else if (whScrn>1024 && whScrn<=1280){
  pgRes="lowRes";
 }else if (whScrn>1280 && whScrn<=1440){ 
  pgRes="mediumRes";  
 }else if (whScrn>1440){
  pgRes="maxRes";
 }else{
  pgRes="undefined";
 } 
 return pgRes; 
}
var codigo = validaURL();
var pos1 = 3;
var pos2 = 4;
var pos3 = 2;
var pos4 = 1;

var codigo = validaURL(pos3);

var id_especial2 = IsNumeric(codigo);
var id_note= codigo;
var zone = validaURL(pos1);
var subzone = validaURL(pos2);
var lt_index = validaURL(pos4);
var pgRes = getResWidth();


/* Obteniendo parametros si el usuario esta logeado */
var params="";
if (typeof(zona_banner) == "undefined")
	var zona_banner="";

var age=null;
age=getCookie_banner("age");
if (typeof(age) != "undefined")
	params=params + "[age=" + age + "];"
	
var gender=null;
gender=getCookie_banner("gender");
if (typeof(gender) != "undefined")
	params=params + "[gender=" + gender + "];"

function limpiarCadena (cadena)
{
	cadena=cadena.replace("'","").replace('"',"").replace("'","").replace("<","").replace(">","").replace("--","").replace("(","").replace(")","").replace("/*","").replace("*/","").replace("script","");
	return (cadena);
}

/* CÃ¯Â¿Â½digo para DART  */
if(window.editorial_dart_ord == undefined){
	editorial_dart_ord = window.editorial_dart_ord || Math.floor(Math.random()*1E16);
}

function recargaBannersDinamicos_dart ()
{
	jQuery( ".banner_rotativo_"+editorial_dart_ord).each(
		function( intIndex ){
			tamano=jQuery(this).attr('rev');
			banner_tamano=tamano.split('x');
			jQuery(this).html('<iframe scrolling="no" frameborder="0" src="http://editorial.esmas.com/js/banners/?banner='+escape(jQuery(this).attr('rel'))+'" style="border:0;width:'+banner_tamano[0]+'px; height:'+banner_tamano[1]+'px; overflow:hidden;"></iframe>');
		}
	);
}
function cargaBannersDinamicosIniciales()
{
	jQuery( ".banner_rotativo_"+editorial_dart_ord).each(
		function( intIndex ){
			if (jQuery(this).html()=="")
			{
				tamano=jQuery(this).attr('rev');
				banner_tamano=tamano.split('x');
				jQuery(this).html('<iframe scrolling="no" frameborder="0" src="http://editorial.esmas.com/js/banners/?banner='+escape(jQuery(this).attr('rel'))+'" style="border:0;width:'+banner_tamano[0]+'px; height:'+banner_tamano[1]+'px; overflow:hidden;"></iframe>');
			}
		}
	);
}
/* Funcion para imprimir in banner DART */
function writeBannerDart (tipo,zona,extraVars,revista)
{
	tile=0; w=0; h=0;
	var mostrar=false;
	if (zona_banner=="")
		zona_banner=zona;
	else
		zona=zona_banner;
	float_vars="";
	if (typeof(extraVars) == "undefined")
		extraVars="";
	extraVars=extraVars+'id='+ ( ( typeof id_note != 'undefined' ) ? id_note : '' ) + ';id2=' + ( ( typeof id_especial2 != 'undefined' ) ? id_especial2 : '' ) + ';id3=' + ( ( typeof zone != 'undefined' ) ? zone : '' ) + ';id4=' + ( ( typeof subzone != 'undefined' ) ? subzone : '' ) + ';id5=' + ( ( typeof lt_index != 'undefined' ) ? lt_index : '' ) + ';';
	var t=document.getElementsByTagName("meta");
	switch(tipo)
	{
		case "inicio":			mostrar=false; break;
		case "super":			w=728;	h=90;	mostrar=true; tile=1;	float_vars="dcopt=ist;intertype=layer;mtfInline=true;";	break;
		case "super3":			w=600;	h=90;	mostrar=true; tile=2;	break;
		case "super2":			w=728;	h=90;	mostrar=true; tile=3;	break;
		case "boton":			w=300;	h=100;	mostrar=true; tile=4;	break;
		case "cubo":			w=300;	h=250;	mostrar=true; tile=5;	float_vars="dcopt=ist;intertype=skin;mtfInline=true;"; break;
		case "cubo2":			w=300;	h=250;	mostrar=true; tile=7;	break;
		case "cubo3":			w=300;	h=250;	mostrar=true; tile=9;	break;
		case "boton1":			w=300;	h=90;	mostrar=true; tile=11;	break;
		case "halfpageadd":		w=300;	h=600;	mostrar=true; tile=13;	break;
		case "letbonus":		w=594;	h=51;	mostrar=true; tile=14;	break;
		case "skyscraper":		w=120;	h=600;	mostrar=true; tile=15;	break;
		case "leo01":			w=633;	h=100;	mostrar=true; tile=16;	break;
		case "boton2":			w=180;	h=300;	mostrar=true; tile=12;	break;
		case "cintillover":		w=160;	h=1600;	mostrar=true; tile=17;	break;
		case "boton3":			w=220;	h=90;	mostrar=true; tile=18;	break;
		case "boton4":			w=336;	h=250;	mostrar=true; tile=20;	break;
		case "boton5":			w=468;	h=60;	mostrar=true; tile=21;	break;
		case "minimalBanner":	w=300;	h=60;	mostrar=true; tile=30;	break;
		case "bigSkyScrapper":	w=200;	h=600;	mostrar=true; tile=35;	break;
		case "bigSkyScrapper2":	w=200;	h=600;	mostrar=true; tile=36;	break;
		case "boxbanner":		w=250;	h=250;	mostrar=true; tile=19;	break;
		case "boxbanner2":		w=250;	h=250;	mostrar=true; tile=22;	break;
		case "boxbanner3":		w=250;	h=250;	mostrar=true; tile=23;	break;
		case "subheader":		w=980;	h=90;	mostrar=true; tile=25;	break;
		case "superNota":		w=635;	h=70;	mostrar=true; tile=27;	break;
		case "halfpageadde":	w=300;	h=600;	mostrar=true; tile=50;	break;
		case "cuboe":			w=300;	h=250;	mostrar=true; tile=51;	break;
		case "boton":			w=300;	h=100;	mostrar=true; tile=52;	break;

		
		
	}
	if (mostrar==true)
	{
		
		for(i=0;i<t.length;i++)
		{
			if( (t[i].name.toUpperCase()=="KEYWORDS") )
			{
				extraVars=extraVars+'id6='+escape(t[i].content.toLowerCase())+";"+'id7='+escape(tipoArticulo)+";";
				break;
			}
		}; 
		
		//if ((bannerRotativoEditorial==true)&&(tipo=='cubo'))
		if (((bannerRotativoEditorial==true)&&(tipo!='letbonus'))||((tipoArticulo=='galeria')&&galeriasSinRotar()))
		{
			document.writeln('<div class="banner_rotativo_'+editorial_dart_ord+'" rev="'+w+'x'+h+'" rel="http://ad.doubleclick.net/adj/'+revista+'/'+zona+';zone0='+zona+';tile=' + tile + ';' + float_vars + 'sz=' + w + 'x' + h + ';' + params + extraVars + 'ord=' + editorial_dart_ord + '?" ></div>');
			if ((typeof rota_banner_fun == 'undefined')&&(tipoArticulo!='galeria'))
			{
				rota_banner_fun=setInterval("recargaBannersDinamicos()", tienpoBannerRotativoEditorial);
			}
			cargaBannersDinamicosIniciales();
		}
		else
		{
			document.writeln('<script type="text/javascript" src="http://ad.doubleclick.net/adj/'+revista+'/'+zona+';zone0='+zona+';tile=' + tile + ';' + float_vars + 'sz=' + w + 'x' + h + ';' + params + extraVars + 'ord=' + editorial_dart_ord + '?"><\/script>');
		}
	}
}
function galeriasSinRotar()
{
	var url = document.URL;
	switch (url)
	{
		case "http://caras.esmas.com/espia/380961/the-fifty1":return(false); break;
		case "http://caras.esmas.com/espia/380966/the-fifty2":return(false); break;
		case "http://caras.esmas.com/espia/380969/the-fifty3":return(false); break;
		case "http://www.caras.com.mx/espia/380961/the-fifty1":return(false); break;
		case "http://www.caras.com.mx/espia/380966/the-fifty2":return(false); break;
		case "http://www.caras.com.mx/espia/380969/the-fifty3":return(false); break;
		default: return(true);
	}
}

/* Funcion para imprimir in banner Open Adds */
function writeBannerOpenX (campana)
{
    	OA_show(campana);
}
function writeBannerGoogle (tipo)
{
	switch(tipo)
	{
		case "super":
			document.writeln('<scr'+'ipt type="text/javascr'+'ipt">');
			document.writeln(' google_ad_client = "pub-8661832288608984";');
			document.writeln(' /* 728x90, creado 14/09/09 */');
			document.writeln(' google_ad_slot = "7280910583";');
			document.writeln(' google_ad_width = 728;');
			document.writeln(' google_ad_height = 90;');
			document.writeln('</scr'+'ipt>');
			document.writeln('<scr'+'ipt type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js">');
			document.writeln('</scr'+'ipt>');
			break;
		case "cubo":
			document.writeln('<scr'+'ipt type="text/javascrvipt">');
			document.writeln(' google_ad_client = "pub-8661832288608984";');
			document.writeln(' /* 300x250, creado 18/09/09 */');
			document.writeln(' google_ad_slot = "4472169108";');
			document.writeln(' google_ad_width = 300;');
			document.writeln(' google_ad_height = 250;');
			document.writeln(' </scr'+'ipt>');
			document.writeln(' <scr'+'ipt type="text/javascript"');
			document.writeln(' src="http://pagead2.googlesyndication.com/pagead/show_ads.js">');
			document.writeln('</scr'+'ipt>');
			break;
	}
}
function writeBannerCosmosArg (tipo)
{
	url=bannerLiga;
	switch(tipo)
	{
		case "super":
			document.writeln("<script type='text/javascript'>var m3_u = ('"+bannerProtocolo+"'=='https:'?'https://www.servicios.atlantida.com.ar/www/delivery/ajs.php':'http://www.servicios.atlantida.com.ar/www/delivery/ajs.php');var m3_r = Math.floor(Math.random()*99999999999);if (!document.MAX_used) {document.MAX_used = ',';}document.writeln(\"<scr\"+\"ipt type='text/javascript' src='\"+m3_u);document.writeln(\"?zoneid=599\");document.writeln('&cb=' + m3_r);if (document.MAX_used != ',') {document.writeln(\"&exclude=\" + document.MAX_used);}document.writeln(document.charset ? '&charset='+document.charset : (document.characterSet ? '&charset='+document.characterSet : ''));document.writeln(\"&loc=\" + escape('"+url+"'));if (document.context) {document.writeln(\"&context=\" + escape(document.context));}if (document.mmm_fo) {document.writeln(\"&mmm_fo=1\");}document.writeln(\"'><\/scr\"+\"ipt>\");</script><noscript><a href='http://www.servicios.atlantida.com.ar/www/delivery/ck.php?n=a39a4d1b&cb=INSERT_RANDOM_NUMBER_HERE' target='_blank'><img src='http://www.servicios.atlantida.com.ar/www/delivery/avw.php?zoneid=599&cb=INSERT_RANDOM_NUMBER_HERE&n=a39a4d1b' border='0' alt='' /></a></noscript>");
			break;
		case "cubo":
			document.writeln("<script type='text/javascript'>var m3_u = ('"+bannerProtocolo+"'=='https:'?'https://www.servicios.atlantida.com.ar/www/delivery/ajs.php':'http://www.servicios.atlantida.com.ar/www/delivery/ajs.php');var m3_r = Math.floor(Math.random()*99999999999);if (!document.MAX_used) {document.MAX_used = ',';}document.writeln(\"<scr\"+\"ipt type='text/javascript' src='\"+m3_u);document.writeln(\"?zoneid=600\");document.writeln('&cb=' + m3_r);if (document.MAX_used != ',') {document.writeln(\"&exclude=\" + document.MAX_used);}document.writeln(document.charset ? '&charset='+document.charset : (document.characterSet ? '&charset='+document.characterSet : ''));document.writeln(\"&loc=\" + escape('"+url+"'));if (document.context) {document.writeln(\"&context=\" + escape(document.context));}if (document.mmm_fo) {document.writeln(\"&mmm_fo=1\");}document.writeln(\"'><\/scr\"+\"ipt>\");</script><noscript><a href='http://www.servicios.atlantida.com.ar/www/delivery/ck.php?n=ad826284&cb=INSERT_RANDOM_NUMBER_HERE' target='_blank'><img src='http://www.servicios.atlantida.com.ar/www/delivery/avw.php?zoneid=600&cb=INSERT_RANDOM_NUMBER_HERE&n=ad826284' border='0' alt='' /></a></noscript>");
			break;
		case "cubo2":
			document.writeln("<script type='text/javascript'>var m3_u = ('"+bannerProtocolo+"'=='https:'?'https://www.servicios.atlantida.com.ar/www/delivery/ajs.php':'http://www.servicios.atlantida.com.ar/www/delivery/ajs.php');var m3_r = Math.floor(Math.random()*99999999999);if (!document.MAX_used) {document.MAX_used = ',';}document.writeln(\"<scr\"+\"ipt type='text/javascript' src='\"+m3_u);document.writeln(\"?zoneid=630\");document.writeln('&cb=' + m3_r);if (document.MAX_used != ',') {document.writeln(\"&exclude=\" + document.MAX_used);}document.writeln(document.charset ? '&charset='+document.charset : (document.characterSet ? '&charset='+document.characterSet : ''));document.writeln(\"&loc=\" + escape('"+url+"'));if (document.context) {document.writeln(\"&context=\" + escape(document.context));}if (document.mmm_fo) {document.writeln(\"&mmm_fo=1\");}document.writeln(\"'><\/scr\"+\"ipt>\");</script><noscript><a href='http://www.servicios.atlantida.com.ar/www/delivery/ck.php?n=a0c1622e&cb=INSERT_RANDOM_NUMBER_HERE' target='_blank'><img src='http://www.servicios.atlantida.com.ar/www/delivery/avw.php?zoneid=630&cb=INSERT_RANDOM_NUMBER_HERE&n=a0c1622e' border='0' alt='' /></a></noscript>");
			break;
	}
}
function writeBannerFijo (tipo)
{
	if (tipo.indexOf("super") > -1)
		tipo="super";
	if (tipo.indexOf("cubo") > -1)
		tipo="cubo";
	switch(tipo)
	{
		case "super":
			document.writeln('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="FLASH_AD" height="90" width="728">');
			document.writeln('<param name="movie" value="http://editorial.esmas.com/banners/templeo/generico728_90.swf">');
			document.writeln('<param name="quality" value="high">');
			document.writeln('<param name="bgcolor" value="#">');
			document.writeln('<param name="wmode" value="opaque">');
			document.writeln('<param name="AllowScriptAccess" value="never">');
			document.writeln('<embed src="http://editorial.esmas.com/banners/templeo/generico728_90.swf" quality="high" wmode="opaque" swliveconnect="TRUE" bgcolor="#" type="application/x-shockwave-flash" allowscriptaccess="never" height="90" width="728">');
			document.writeln('</object>');
			break;
		case "cubo":
			document.writeln('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="FLASH_AD" height="250" width="300">');
			document.writeln('<param name="movie" value="http://editorial.esmas.com/banners/templeo/generico300_250.swf">');
			document.writeln('<param name="quality" value="high">');
			document.writeln('<param name="bgcolor" value="#">');
			document.writeln('<param name="wmode" value="opaque">');
			document.writeln('<param name="AllowScriptAccess" value="never">');
			document.writeln('<embed src="http://editorial.esmas.com/banners/templeo/generico300_250.swf" quality="high" wmode="opaque" swliveconnect="TRUE" bgcolor="#" type="application/x-shockwave-flash" allowscriptaccess="never" height="250" width="300">');
			document.writeln('</object>');
			break;
		case "letbonus":
			document.writeln('<a href="http://mx.letsbonus.com/" target="_blank"><img src="http://editorial.televisa.com/img/letbonus/pleca.jpg"></a>');
			break;
		case "halfpageadd":
			document.writeln('<a href="http://editorial.televisa.com/" target="_blank"><img src="http://editorial.televisa.com/banners/ban300x600.jpg"></a>');
			break;
	}
}
function writeBannerFijoVive (tipo)
{
	switch(tipo)
	{
		case "cubo":
			break;
		case "super":
			break;
		case "halfpageadd":
			document.writeln('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="FLASH_AD" height="600" width="300">');
			document.writeln('<param name="movie" value="http://editorial.televisa.com/banners/VivevanidadesagostoV3.swf">');
			document.writeln('<param name="quality" value="high">');
			document.writeln('<param name="bgcolor" value="#">');
			document.writeln('<param name="wmode" value="opaque">');
			document.writeln('<param name="AllowScriptAccess" value="never">');
			document.writeln('<embed src="http://editorial.televisa.com/banners/VivevanidadesagostoV3.swf" quality="high" wmode="opaque" swliveconnect="TRUE" bgcolor="#" type="application/x-shockwave-flash" allowscriptaccess="never" height="600" width="300">');
			document.writeln('</object>');
			break;
	}
}
	
function writeBannerDart_v2(tipo)
{
	if (tipo=="inicio")
	{
		var subseccion="";
		var dartv2_extras="";
		var liga=bannerLiga.split('?');
		liga=liga[0];
		nombre_slot="/7187/";
		// alert(nombre_slot);
		switch (document.domain)
		{
			case ("jojagawi.info"):case ("localhost"):case ("caras.esmas.com"):case ("www.caras.com.mx"):case ("registro.caras.com.mx"):
					if (liga.indexOf('/sports/')!=-1) 
					{	
						nombre_slot=nombre_slot+"televisa.editorial.caras_sports/caras-sports.";
					}
					else
					{
						nombre_slot=nombre_slot+"televisa.editorial.caras/caras.";
					}
					break;
			case ("www.ngenespanol.com"):case ("natgeo.televisa.com"):case ("registro.ngenespanol.com"):
					if (liga.indexOf('/traveler/')!=-1) 
					{	
						nombre_slot=nombre_slot+"televisa.editorial.ngtraveler/ngtraveler.";
					}
					else
					{
						nombre_slot=nombre_slot+"televisa.editorial.ngenespanol/ngenespanol.";
					}
					break;
			case ("www.vanidades.com"):case ("registro.vanidades.com"):
				
				if (liga.indexOf('/vive/moda/')!=-1) 
				{	
					nombre_slot=nombre_slot+"televisa.editorial.vanidades-vive-moda/vanidades-vive-moda.";
				}
				else
				{	
					if (liga.indexOf('/vive/belleza/')!=-1) 
					{	
						nombre_slot=nombre_slot+"televisa.editorial.vanidades-vive-belleza/vanidades-vive-belleza.";
					}
					else
					{
						if (liga.indexOf('/vive/tecnologia/')!=-1) 
						{	
							nombre_slot=nombre_slot+"televisa.editorial.vanidades-vive-tecnologia/vanidades-vive-tecnologia.";
						}
						else
						{
							if (liga.indexOf('/vive/piel/')!=-1) 
							{	
								nombre_slot=nombre_slot+"televisa.editorial.vanidades-vive-piel/vanidades-vive-piel.";
							}
							else
							{
								if (liga.indexOf('/vive/')!=-1) 
								{	
									nombre_slot=nombre_slot+"televisa.editorial.vanidades-vive/vanidades-vive.";
								}
								else
								{
								
									if (liga.indexOf('/novias/')!=-1) 
									{	
										nombre_slot=nombre_slot+"televisa.editorial.vanidades-novias/vanidades-novias.";
									}
									else
									{
										nombre_slot=nombre_slot+"televisa.editorial.vanidades/vanidades.";
									}
								}
							}
						}
					}
				}
					break;
			case ("registro.tuenlinea.com"):case ("www.tuenlinea.com"): case ("tuenlinea.esmas.com"):		nombre_slot=nombre_slot+"televisa.editorial.tuenlinea/tuenlinea.";break;
			case ("registro.muyinteresante.com.mx"):case ("www.muyinteresante.com.mx"):					nombre_slot=nombre_slot+"televisa.editorial.muyinteresante/muyinteresante.";break;
			case ("localhost"):case ("registro.esquirelat.com"):case ("www.esquirelat.com"): case ("esquire.esmas.com"):		nombre_slot=nombre_slot+"televisa.editorial.esquirelat/esquirelat.";break;
			case ("registro.cosmoenespanol.com"):case ("www.cosmoenespanol.com"):							nombre_slot=nombre_slot+"televisa.editorial.cosmoenespanol/cosmoenespanol.";break;
			case ("registro.menshealthlatam.com"):case ("www.menshealthlatam.com"):							nombre_slot=nombre_slot+"televisa.editorial.menshealth/menshealth.";break;
			case ("olimpicos2012.menshealthlatam.com"):							nombre_slot=nombre_slot+"televisa.editorial.menshealthOlimpicos/menshealthOlimpicos.";break;
			
			case ("registro.tvynovelas.com"):case ("www.tvynovelas.com"):		nombre_slot=nombre_slot+"televisa.editorial.tvynovelas/tvynovelas.";break;
			case ("registro.furiamusical.com"):case ("www.furiamusical.com"):								nombre_slot=nombre_slot+"televisa.editorial.furiamusical/furiamusical.";break;
			case ("registro.padresehijos.com.mx"):case ("www.padresehijos.com.mx"):							nombre_slot=nombre_slot+"televisa.editorial.padresehijos/padresehijos.";break;
			case ("registro.seventeenenespanol.com"):case ("www.seventeenenespanol.com"):					nombre_slot=nombre_slot+"televisa.editorial.seventeenenespanol/seventeenenespanol.";break;
			case ("registro.cosmo.com.ar"):case ("www.cosmo.com.ar"):										nombre_slot=nombre_slot+"televisa.editorial.cosmo-ar/cosmo-ar.";break;
			case ("sky.com.mx"):case ("www.sky.com.mx"):										nombre_slot=nombre_slot+"televisa.editorial.sky/sky.";break;
			case ("revistagentedemexico.com.mx"):case ("www.revistagentedemexico.com.mx"):						nombre_slot=nombre_slot+"televisa.editorial.gente/gente.";break;
			case ("www.taconeras.net"):									nombre_slot=nombre_slot+"televisa.editorial.taconeras-cl/taconeras-cl.";break;
			case ("cosmopolitan.taconeras.net"):						nombre_slot=nombre_slot+"televisa.editorial.cosmopolitan-cl/cosmopolitan-cl.";break;
			case ("seventeen.taconeras.net"):							nombre_slot=nombre_slot+"televisa.editorial.seventeen-cl/seventeen-cl.";break;
			case ("tu.taconeras.net"):									nombre_slot=nombre_slot+"televisa.editorial.tu-cl/tu-cl.";break;
			case ("vanidades.taconeras.net"):							nombre_slot=nombre_slot+"televisa.editorial.vanidades-cl/vanidades-cl.";break;
			case ("embarazo.taconeras.net"):							nombre_slot=nombre_slot+"televisa.editorial.embarazo-cl/embarazo-cl.";break;
			case ("parati.taconeras.net"):								nombre_slot=nombre_slot+"televisa.editorial.parati-cl/parati-cl.";break;
			case ("womenshealth.taconeras.net"):						nombre_slot=nombre_slot+"televisa.editorial.womenshealth-cl/womenshealth-cl.";break;
			case ("serpadres.taconeras.net"):							nombre_slot=nombre_slot+"televisa.editorial.serpadres-cl/serpadres-cl.";break;
			case ("www.harpersbazaar.mx"):								nombre_slot=nombre_slot+"televisa.editorial.harpersbazaar/harpersbazaar.";break;			
			case ("oxm.com.mx"):case ("www.oxm.com.mx"):				nombre_slot=nombre_slot+"televisa.editorial.oxm/oxm.";break;		
			case ("www.jambitz.com"):									nombre_slot=nombre_slot+"televisa.editorial.jambitz/jambitz.";break;		
			case ("www.caras.cl"):										nombre_slot=nombre_slot+"televisa.editorial.caras-cl/caras-cl.";break;
			case ("caras.reactor.cl"):									nombre_slot=nombre_slot+"televisa.editorial.caras-cl/caras-cl.";break;
			case ("editorial.televisa.com"):							nombre_slot=nombre_slot+"televisa.editorial.editorial/editorial.";break;
			case ("editorial.esmas.com"):								nombre_slot=nombre_slot+"televisa.editorial.editorial/editorial.";break;
			case ("www.editorialtelevisa.com.mx"):						nombre_slot=nombre_slot+"televisa.editorial.editorial/editorial.";break;
			case ("www.poder360.com"):									
				{
					nombre_slot=nombre_slot+"televisa.editorial.poder360/poder360.";
					if (liga=="http://www.poder360.com/article_detail.php") 
						{
							id_nota_poder=liga.split("=");
							liga="http://www.poder360.com/articulo/"+getUrlVars()["id_article"]+"/"+escape(document.title.replace("Poder 360Ã‚Â° - ",""))+"/";
						}
					break;
				}
			default:					nombre_slot=nombre_slot+"televisa.editorial";break;
		}
		liga=liga.replace("http://"+document.domain+"/","");
		liga=liga.replace("https://"+document.domain+"/","");
		liga=liga.replace("historico/","");
		liga=liga.replace("/index.php","");
		liga=liga.replace("index.php","");
		liga=liga.replace("/index.v2.php","");
		liga=liga.replace("/index.html","");
		liga=liga.replace("/index_mx.html","");
		liga=liga.replace("/index_us.html","");
		liga=liga.replace("/index_co.html","");
		liga=liga.replace("categoria/","");
		liga=liga.replace("category/","");
		liga=liga.replace("etiqueta/","");
		liga=liga.replace("#prueba","");
		var prueba=false;
		var textoUrl  = unescape(document.URL).split('#');
		if (textoUrl[textoUrl.length-1]=="prueba")
		{
			prueba=true;
		}
		
		dartv2_extras=dartv2_extras+".setTargeting('prueba','"+escape(prueba)+"')";
		if (typeof(navigator.platform)!="undefined")
		{
			dartv2_extras=dartv2_extras+".setTargeting('dispositivo','"+navigator.platform+"')";
		}
		var cadenas = liga.split('/');
		var tot_cadena_dart_2 =  cadenas.length;
		if ((cadenas.length>2)&&(IsNumeric(cadenas[cadenas.length-2])))
		{
			dartv2_extras=dartv2_extras+".setTargeting('id','"+escape(cadenas[cadenas.length-2])+"')";
			tot_cadena_dart_2=tot_cadena_dart_2-2;
		}
		if ((cadenas.length>3)&&(IsNumeric(cadenas[cadenas.length-3])))
		{
			dartv2_extras=dartv2_extras+".setTargeting('id','"+escape(cadenas[cadenas.length-3])+"')";
			tot_cadena_dart_2=tot_cadena_dart_2-3;
		}
		for (i=0;i<tot_cadena_dart_2;i++)
		{
			if(cadenas[i]!="")
			{
				if (subseccion=="")
					subseccion=cadenas[i];
				else
					subseccion=subseccion+"-"+cadenas[i];
			}
		}
		if (subseccion=="")
			subseccion="home";
		nombre_slot=nombre_slot+subseccion;
		var str_script="<scr"+"ipt type='text/javascript'>";
		if ((tipoArticulo=="galeria")||(bannerRotativoEditorial==true))
		{
			str_script = str_script + "googletag.cmd.push(function() {";
		}
		
		// console.log("Nombre slot: %s",nombre_slot);
		// console.log("Liga: %s",liga);
		// console.log("Extras: %s",dartv2_extras);
		
		str_script = str_script + "googletag.defineSlot('"+nombre_slot+"', [[728, 90], [955, 90]], 'div-gpt-ad-1322525793825-1').addService(googletag.pubads()).setTargeting('pos','super1')"+dartv2_extras+";";
		str_script = str_script + "googletag.defineSlot('"+nombre_slot+"', [[728, 90], [955, 90]], 'div-gpt-ad-1322525793825-3').addService(googletag.pubads()).setTargeting('pos','super2')"+dartv2_extras+";";
		str_script = str_script + "googletag.defineSlot('"+nombre_slot+"', [[300, 250], [300, 100], [300, 90], [300, 300], [300, 600]], 'div-gpt-ad-1322525793825-5').addService(googletag.pubads()).setTargeting('pos','cubo5')"+dartv2_extras+";";
		str_script = str_script + "googletag.defineSlot('"+nombre_slot+"', [[300, 250]], 'div-gpt-ad-1322525793825-V').addService(googletag.companionAds()).setTargeting('pos','cuboV')"+dartv2_extras+";";
		str_script = str_script + "googletag.defineSlot('"+nombre_slot+"', [[300, 250], [300, 100], [300, 90], [300, 300], [300, 600], [120, 240]], 'div-gpt-ad-1322525793825-7').addService(googletag.pubads()).setTargeting('pos','cubo7')"+dartv2_extras+";";
		str_script = str_script + "googletag.defineSlot('"+nombre_slot+"', [[300, 250], [300, 100], [300, 90], [300, 300], [300, 600]], 'div-gpt-ad-1322525793825-9').addService(googletag.pubads()).setTargeting('pos','cubo9')"+dartv2_extras+";";
		str_script = str_script + "googletag.defineSlot('"+nombre_slot+"', [[300, 250]], 'div-gpt-ad-1322525793825-10').addService(googletag.pubads()).setTargeting('pos','cuboE')"+dartv2_extras+";";
		str_script = str_script + "googletag.defineSlot('"+nombre_slot+"', [[300, 100], [300, 90]], 'div-gpt-ad-1322525793825-11').addService(googletag.pubads()).setTargeting('pos','boton1')"+dartv2_extras+";";
		str_script = str_script + "googletag.defineSlot('"+nombre_slot+"', [[300, 100], [300, 90]], 'div-gpt-ad-1322525793825-52').addService(googletag.pubads()).setTargeting('pos','boton')"+dartv2_extras+";";
		str_script = str_script + "googletag.defineSlot('"+nombre_slot+"', [[120, 600]], 'div-gpt-ad-1322525793825-15').addService(googletag.pubads()).setTargeting('pos','skyscraper')"+dartv2_extras+";";
		str_script = str_script + "googletag.defineSlot('"+nombre_slot+"', [[300, 250], [300, 100], [300, 90], [300, 300], [300, 600]], 'div-gpt-ad-1322525793825-13').addService(googletag.pubads()).setTargeting('pos','halfpageadd13')"+dartv2_extras+";";
		str_script = str_script + "googletag.defineSlot('"+nombre_slot+"', [[300, 600]], 'div-gpt-ad-1322525793825-50').addService(googletag.pubads()).setTargeting('pos','halfpageadde')"+dartv2_extras+";";
		str_script = str_script + "googletag.defineSlot('"+nombre_slot+"', [[300, 250]], 'div-gpt-ad-1322525793825-51').addService(googletag.pubads()).setTargeting('pos','cuboe')"+dartv2_extras+";";
		str_script = str_script + "googletag.defineSlot('"+nombre_slot+"', [[160, 600]], 'div-gpt-ad-1322525793825-17').addService(googletag.pubads()).setTargeting('pos','cintillover')"+dartv2_extras+";";
		str_script = str_script + "googletag.defineSlot('"+nombre_slot+"', [[220, 90]], 'div-gpt-ad-1322525793825-18').addService(googletag.pubads()).setTargeting('pos','boton3')"+dartv2_extras+";";
		str_script = str_script + "googletag.defineSlot('"+nombre_slot+"', [[180, 300]], 'div-gpt-ad-1322525793825-12').addService(googletag.pubads()).setTargeting('pos','boton2')"+dartv2_extras+";";
		str_script = str_script + "googletag.defineSlot('"+nombre_slot+"', [[336, 280],[300, 100]], 'div-gpt-ad-1322525793825-20').addService(googletag.pubads()).setTargeting('pos','boton4')"+dartv2_extras+";";
		str_script = str_script + "googletag.defineSlot('"+nombre_slot+"', [[468, 60]], 'div-gpt-ad-1322525793825-21').addService(googletag.pubads()).setTargeting('pos','boton5')"+dartv2_extras+";";
		str_script = str_script + "googletag.defineSlot('"+nombre_slot+"', [[250, 250]], 'div-gpt-ad-1322525793825-19').addService(googletag.pubads()).setTargeting('pos','boxbanner')"+dartv2_extras+";";
		str_script = str_script + "googletag.defineSlot('"+nombre_slot+"', [[250, 250]], 'div-gpt-ad-1322525793825-22').addService(googletag.pubads()).setTargeting('pos','boxbanner2')"+dartv2_extras+";";
		str_script = str_script + "googletag.defineSlot('"+nombre_slot+"', [[250, 250]], 'div-gpt-ad-1322525793825-23').addService(googletag.pubads()).setTargeting('pos','boxbanner3')"+dartv2_extras+";";
		str_script = str_script + "googletag.defineSlot('"+nombre_slot+"', [[980, 90], [980, 120], [980, 25]], 'div-gpt-ad-1322525793825-25').addService(googletag.pubads()).setTargeting('pos','subheader')"+dartv2_extras+";";
		str_script = str_script + "googletag.defineSlot('"+nombre_slot+"', [[586, 70], [635, 70], [635, 90], [635, 120]], 'div-gpt-ad-1322525793825-27').addService(googletag.pubads()).setTargeting('pos','superNota')"+dartv2_extras+";";
		
		str_script = str_script + "googletag.defineSlot('"+nombre_slot+"', [[300, 60]], 'div-gpt-ad-1322525793825-30').addService(googletag.pubads()).setTargeting('pos','minimalBanner')"+dartv2_extras+";";
		str_script = str_script + "googletag.defineSlot('"+nombre_slot+"', [[200, 600]], 'div-gpt-ad-1322525793825-35').addService(googletag.pubads()).setTargeting('pos','bigSkyScrapper')"+dartv2_extras+";";
		str_script = str_script + "googletag.defineSlot('"+nombre_slot+"', [[200, 600]], 'div-gpt-ad-1322525793825-36').addService(googletag.pubads()).setTargeting('pos','bigSkyScrapper2')"+dartv2_extras+";";
		
		str_script = str_script + "googletag.defineOutOfPageSlot(\""+nombre_slot+"\", 'div-gpt-ad-1322525793825-0-oop').addService(googletag.pubads())"+dartv2_extras+";";
		str_script = str_script + "googletag.defineOutOfPageSlot(\""+nombre_slot+"\", 'div-gpt-ad-1322525793825-0-oop2').addService(googletag.pubads())"+dartv2_extras+";";
		str_script = str_script + "googletag.pubads().setTargeting('title', '"+escape(document.title)+"');";
		var t=document.getElementsByTagName("meta");
		var dart_v2_keywods="";
		for(i=0;i<t.length;i++)
		{
			if( (t[i].name.toUpperCase()=="KEYWORDS") )
			{
				var dart_v2_keywods=(t[i].content.toLowerCase());
				dart_v2_keywods=dart_v2_keywods.replace(new RegExp('\\n','g'),'').replace(new RegExp('\\r','g'),'');
				break;
			}
		};
		var dart_v2_keywods_fin="@@@";
		var dart_v2_keywods = dart_v2_keywods.split(',');
		for (i=0;i<dart_v2_keywods.length;i++)
		{
			if (dart_v2_keywods[i]!="")
			{
				dart_v2_keywods_fin=dart_v2_keywods_fin+",'"+dart_v2_keywods[i]+"'";
			}
		}
		if (dart_v2_keywods_fin!="@@@") { str_script = str_script + "googletag.pubads().setTargeting('keywords',["+dart_v2_keywods_fin.replace("@@@,","")+"]);";}
		if (typeof(gender) != "undefined") { str_script = str_script + "googletag.pubads().setTargeting('gender', '"+escape(gender)+"');";}
		if (typeof(age) != "undefined") { str_script = str_script + "googletag.pubads().setTargeting('age', '"+escape(age)+"');	";}
		str_script = str_script + "googletag.pubads().setTargeting('tipoDoc', '"+escape(tipoArticulo)+"');";
		if ((tipoArticulo=="galeria")||(bannerRotativoEditorial==true))
		{
			str_script = str_script + "googletag.enableServices();";
			str_script = str_script + "});";
			str_script = str_script + "";
		}
		else
		{
			str_script = str_script + "googletag.pubads().enableSyncRendering();";
			str_script = str_script + "googletag.enableServices();";
		}
		str_script = str_script + "</scr"+"ipt>";
		document.writeln(str_script);	
	}
	var div_class="";
	switch(tipo)
	{
		case "inicio":				div_class="div-gpt-ad-1322525793825-0-oop";		break;
		case "inicio2":				div_class="div-gpt-ad-1322525793825-0-oop2";	break;
		case "super":				div_class="div-gpt-ad-1322525793825-1";			break;
		case "super2":				div_class="div-gpt-ad-1322525793825-3";			break;
		case "cubo":				if (tipoArticulo!='video') {div_class="div-gpt-ad-1322525793825-5";} else {div_class="div-gpt-ad-1322525793825-V";}		break;
		case "cubo2":				div_class="div-gpt-ad-1322525793825-7";			break;
		case "cubo3":				div_class="div-gpt-ad-1322525793825-9";			break;
		case "cuboE":				div_class="div-gpt-ad-1322525793825-10";		break;
		case "boton1":				div_class="div-gpt-ad-1322525793825-11";		break;
		case "boton2":				div_class="div-gpt-ad-1322525793825-12";		break;
		case "halfpageadd":			div_class="div-gpt-ad-1322525793825-13";		break;
		case "skyscraper":			div_class="div-gpt-ad-1322525793825-15";		break;
		case "cintillover":			div_class="div-gpt-ad-1322525793825-17";		break;
		case "boton3":				div_class="div-gpt-ad-1322525793825-18";		break;
		case "boxbanner":			div_class="div-gpt-ad-1322525793825-19";		break;
		case "boton4":				div_class="div-gpt-ad-1322525793825-20";		break;
		case "boton5":				div_class="div-gpt-ad-1322525793825-21";		break;
		case "boxbanner2":			div_class="div-gpt-ad-1322525793825-22";		break;
		case "boxbanner3":			div_class="div-gpt-ad-1322525793825-23";		break;
		case "subheader":			div_class="div-gpt-ad-1322525793825-25";		break;
		case "superNota":			div_class="div-gpt-ad-1322525793825-27";		break;
		case "halfpageadde":		div_class="div-gpt-ad-1322525793825-50";		break;
		case "cuboe":				div_class="div-gpt-ad-1322525793825-51";		break;
		case "boton":				div_class="div-gpt-ad-1322525793825-52";		break;
		case "minimalBanner":		div_class="div-gpt-ad-1322525793825-30";		break;
		case "bigSkyScrapper":		div_class="div-gpt-ad-1322525793825-35";		break;
		case "bigSkyScrapper2":		div_class="div-gpt-ad-1322525793825-36";		break;
			
	}	
	
	if (div_class!="")
	{
		document.writeln('<div id="'+div_class+'"></div>');
   		googletag.cmd.push(function() { googletag.display(div_class); });
	}
}

function recargaBannersDinamicos_dart_v2() {
	googletag.pubads().refresh();
	/*
	if (jQuery('#div-gpt-ad-1322525793825-1_ad_container, #div-gpt-ad-1322525793825-1').length > 0) { var dart_super		=googletag.display('div-gpt-ad-1322525793825-1'); googletag.pubads().refresh(dart_super); }
	if (jQuery('#div-gpt-ad-1322525793825-3_ad_container, #div-gpt-ad-1322525793825-3').length > 0) { var dart_super2	=googletag.display('div-gpt-ad-1322525793825-3'); googletag.pubads().refresh(dart_super2); }
	if (jQuery('#div-gpt-ad-1322525793825-5_ad_container, #div-gpt-ad-1322525793825-5').length > 0) { var dart_cubo		=googletag.display('div-gpt-ad-1322525793825-5'); googletag.pubads().refresh(dart_cubo); }
	if (jQuery('#div-gpt-ad-1322525793825-7_ad_container, #div-gpt-ad-1322525793825-7').length > 0) { var dart_cubo2		=googletag.display('div-gpt-ad-1322525793825-7'); googletag.pubads().refresh(dart_cubo2); }
	if (jQuery('#div-gpt-ad-1322525793825-9_ad_container, #div-gpt-ad-1322525793825-9').length > 0) { var dart_cubo3		=googletag.display('div-gpt-ad-1322525793825-9'); googletag.pubads().refresh(dart_cubo3); }
	*/
}
function inicializaBanners(banner)
{
	switch(banner_editorial)
	{
		case "dart":
						break;
		case "openx":	
						if (typeof(OA_show)!="function")
						{
							var domain=document.domain;
							switch(domain)
							{
								case "caras.esmas.com":			site=1; break;
								default: 						site=0;
							}
							document.writeln('<script type="text/javascript" src="http://lads.esmas.com/openx-2.6.3/www/delivery/spcjs.php?id=' + site + '"></script>');
						}
						break;
		case "google":	
						break;
		case "mensaje":	
						break;
		case "dart_v2":
						document.writeln("<scr"+"ipt type='text/javascript'>(function() {var useSSL = 'https:' == '"+bannerProtocolo+"';var src = (useSSL ? 'https:' : 'http:') +'//www.googletagservices.com/tag/js/gpt.js';document.writeln('<scr' + 'ipt src=\"' + src + '\"></scr' + 'ipt>');'//www.googletagservices.com/tag/js/gpt.js';})();</scr"+"ipt>");	   		
						if ((bannerRotativoEditorial==true)&&(typeof rota_banner_fun == 'undefined')&&(tipoArticulo!='galeria'))
						{
								rota_banner_fun=setInterval("recargaBannersDinamicos()", tienpoBannerRotativoEditorial);
						}
						break;
	}
}
function recargaBannersDinamicos () {
	switch(banner_editorial)
	{
		case "dart":recargaBannersDinamicos_dart (); break;
		case "dart_v2":recargaBannersDinamicos_dart_v2 (); break;
	}
}
function seleccionaServidorBanners ()
{
	var banner="dart_v2";
	var domain=document.domain;
	var url = document.URL;
	/* Filtrado por dominio */
	switch(domain)
	{
		case "cgs-003.esmas.com":					banner="fijo"; 			break;
		case "localhost":							banner="dart_v2"; 			break;
		case "www.cosmo.com.ar":					banner="comsosARG"; 	break;
		case "registro.cosmo.com.ar":				banner="comsosARG";		break;
		case "demo01.servidornoticias.com":			banner="fijo";			break;
						
	}
	/* Filtrado por carpeta contenedora */
	pat = /vanidades.esmas.com\/vive\/tecnologia\//;
	if (pat.test(url))
		banner="fijoVive";
	pat = /cosmopolitan_arg/;
	if (pat.test(url))
		banner="comsosARG";
	
	
	/* Filtrado por URL */
	
	switch(url)
	{
		/* case "http://editorial.esmas.com/test/tu/2/": 		banner="dart"; break; */
	}
	return banner;
}

function funRotarBanner ()
{
	contadorBannerRotativoEditorial=contadorBannerRotativoEditorial+1;
	jQuery( ".banner_rotativo" ).each(
		function( intIndex )
		{
			jQuery(this).html("<scr" + "ipt type='text/javascript'>"+jQuery(this).attr('rel')+"</scr" + "ipt>");
		}
	);
}

function writeBanner (campana,tipo,zona,extraVars,revista)
{
	/* Obteniendo zona */
	url=bannerPath;
	var arrURL = url.split("/");
	if ((typeof arrURL[1] != 'undefined')&&(zona_banner==""))
		zona_banner=arrURL[1];
	switch(revista)
	{
		case "muyinteresante":	revista='es.publishing.muyint'; break;
		case "traveler":		revista='es.publishing.natgeo'; break;
		/* 
		case "esquire": bannerRotativoEditorial=true; revista='es.publishing.'+revista;  break; 
		*/
		default: revista='es.publishing.'+revista;
	}
	/* Llamado del banner */
	switch(banner_editorial)
	{
		case "dart_v2":		writeBannerDart_v2(tipo);	break;
		case "dart":		writeBannerDart(tipo,zona,extraVars,revista);		break;
		case "openx":		writeBannerOpenX(campana);							break;
		case "google":		writeBannerGoogle(tipo);							break;
		case "fijo":		writeBannerFijo(tipo);								break;
		case "fijoVive":	writeBannerFijoVive(tipo);							break;
		case "comsosARG":	writeBannerCosmosArg(tipo);							break;
		case "mensaje":		document.writeln('banner');							break;
	}
}

/* Funcion para llamar un banner - por default openx */
banner_editorial=seleccionaServidorBanners ();
/* Inicializar variables para los banners */
inicializaBanners(banner_editorial);

// Carga buscador de google
function cargaBuscador(id)
{
	
	switch(id)
	{
		case "vanidades":			google_id="016757552045205989869:gf2o0dwcabu";break;
		case "muyinteresante":		google_id="016757552045205989869:ht_bsdw4lb4";break;
		case "caras":				google_id="016757552045205989869:ctg2t7aigns";break;
		case "esquire":				google_id="016757552045205989869:wzrrq_u_7qa";break;
		case "tu":					google_id="016757552045205989869:dskohpsthva";break;
		case "tvynovelas/premios":	google_id="016757552045205989869:wgyksmaakxc";break;
		default:					google_id="016757552045205989869:rwgzuk1tyi8";break;
	}
	if (!window['google']) {
	document.writeln('<script src="http://www.google.com/jsapi" type="text/javascript"></script>');
	}
	google.load('search', '1', {language : 'es'});
	google.setOnLoadCallback(function() {
		var customSearchControl = new google.search.CustomSearchControl(google_id);
		customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
		var options = new google.search.DrawOptions();
		options.setSearchFormRoot('cse-search-form');
		options.setAutoComplete(true);
		customSearchControl.draw('cse', options);
		
		
		jQuery('.gsc-wrapper').append('<div id="btn_cerrar_buscador" style="background:url(http://www.google.com/uds/css/clear.gif) center no-repeat;cursor:pointer;height:20px;position:absolute;right:5px;top:5px;width:20px;"></div>');
		jQuery('#btn_cerrar_buscador').click(function(){jQuery('.gsc-resultsbox-visible').addClass('gsc-resultsbox-invisible').removeClass('gsc-resultsbox-visible')});
		
	}, true);
}

/*   11/8/2010
		PikaChoose
	Jquery plugin for photo galleries
    Copyright (C) 2010 Jeremy Fry

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
(function($){var defaults={autoPlay:true,speed:5000,text:{play:"",stop:"",previous:"Previous",next:"Next"},transition:[1],showCaption:true,IESafe:false,showTooltips:false,animationFinished:null};$.fn.PikaChoose=function(o){return this.each(function(){$(this).data('pikachoose',new $pc(this,o));});}
$.PikaChoose=function(e,o){this.options=$.extend({},defaults,o||{});this.list=null;this.image=null;this.anchor=null;this.caption=null;this.imgNav=null;this.imgPlay=null;this.imgPrev=null;this.imgNext=null;this.textNext=null;this.textPrev=null;this.previous=null;this.next=null;this.aniDiv=null;this.thumbs=null;this.transition=null;this.active=null;this.tooltip=null;this.animating=false;this.stillOut=null;if(e.nodeName=='UL'||e.nodeName=='OL'){this.list=$(e);this.build();this.bindEvents();}else{return;}
var y=0;var x=0;for(var t=0;t<25;t++){var a='<div col="'+y+'" row="'+x+'"></div>';this.aniDiv.append(a);y++
if(y==5){x++;y=0;}}};var $pc=$.PikaChoose;$pc.fn=$pc.prototype={pikachoose:'4.1.0'};$pc.fn.extend=$pc.extend=$.extend;$pc.fn.extend({build:function(){this.step=0;this.wrap=$("<div class='pika-image'></div>").insertBefore(this.list);this.image=$("<img>").appendTo(this.wrap);this.anchor=this.image.wrap("<a>").parent();this.imgNav=$("<div class='pika-imgnav'></div>").insertAfter(this.anchor);this.imgPlay=$("<a></a>").appendTo(this.imgNav);if(this.options.autoPlay){this.imgPlay.addClass('pause');}else{this.imgPlay.addClass('play');}
this.imgPrev=$("<a class='previous'></a>").insertAfter(this.imgPlay);this.imgNext=$("<a class='next'></a>").insertAfter(this.imgPrev);this.caption=$("<div class='caption'></div>").insertAfter(this.imgNav);if(!this.options.showCaption){this.caption.hide();}
this.tooltip=$("<div class='pika-tooltip'></div>").insertAfter(this.list);this.tooltip.hide();this.aniDiv=$("<div class='animation'></div>").insertAfter(this.caption);this.textNav=$("<div class='pika-textnav'></div>").insertAfter(this.aniDiv);this.textPrev=$("<a class='previous'>"+this.options.text.previous+"</a>").appendTo(this.textNav);this.textNext=$("<a class='next'>"+this.options.text.next+"</a>").appendTo(this.textNav);this.list.addClass('pika-thumbs');this.list.children('li').wrapInner("<div class='clip' />");this.thumbs=this.list.find('img');this.active=this.thumbs.eq(0);this.finishAnimating({'source':this.active.attr('ref')||this.active.attr('src'),'caption':this.active.parents('li:first').find('span:first').html(),'clickThrough':this.active.parent().attr('href')||""});var self=this;this.thumbs.each(function(){self.createThumb($(this),self);});},createThumb:function(ele){var self=ele;var that=this;self.hide();$.data(ele[0],'clickThrough',self.parent('a').attr('href')||"#");if(self.parent('a').length>0){self.unwrap();}
$.data(ele[0],'caption',self.next('span').html()||"");self.next('span').remove();$.data(ele[0],'source',self.attr('ref')||self.attr('src'));$.data(ele[0],'order',self.closest('ul').find('li').index(self.parents('li')));var data=$.data(ele[0]);$('<img />').bind('load',{data:data},function(){var img=$(this);var w=img.width();var h=img.height();if(w===0){w=img.attr("width");}
if(h===0){h=img.attr("height");}
var rw=parseInt(self.parents('.clip').css('width').slice(0,-2))/w;var rh=parseInt(self.parents('.clip').css('height').slice(0,-2))/h;var ratio;if(rw<rh){ratio=rh;var left=((w*ratio-parseInt(self.parents('.clip').css('width').slice(0,-2)))/2)*-1;left=Math.round(left);self.css({left:left});}else{ratio=rw;self.css({top:0});}
var width=Math.round(w*ratio);var height=Math.round(h*ratio);self.css("position","relative");var imgcss={width:width+"px",height:height+"px"};self.css(imgcss);self.hover(function(e){clearTimeout(that.stillOut);$(this).stop(true,true).fadeTo(250,1);if(!that.options.showTooltips){return;}
that.tooltip.show().stop(true,true).html(data.caption).animate({top:$(this).parent().position().top,left:$(this).parent().position().left,opacity:1.0},'fast');},function(e){if(!$(this).hasClass("active")){$(this).stop(true,true).fadeTo(250,0.4);that.stillOut=setTimeout(that.hideTooltip,700);}});if(data.order==0){self.fadeTo(250,1);self.addClass('active');}else{self.fadeTo(250,0.4);}}).attr('src',self.attr('src'));},bindEvents:function(){this.thumbs.bind('click',{self:this},this.imgClick);this.imgNext.bind('click',{self:this},this.nextClick);this.textNext.bind('click',{self:this},this.nextClick);this.imgPrev.bind('click',{self:this},this.prevClick);this.textPrev.bind('click',{self:this},this.prevClick);this.imgPlay.bind('click',{self:this},this.playClick);this.wrap.bind('mouseenter',{self:this},function(e){e.data.self.imgPlay.stop(true,true).fadeIn('fast');});this.wrap.bind('mouseleave',{self:this},function(e){e.data.self.imgPlay.stop(true,true).fadeOut('fast');});this.tooltip.bind('mouseenter',{self:this},function(e){clearTimeout(e.data.self.stillOut);});this.tooltip.bind('mouseleave',{self:this},function(e){e.data.self.stillOut=setTimeout(e.data.self.hideTooltip,700);});},hideTooltip:function(e){$(".pika-tooltip").animate({opacity:0.01});},imgClick:function(e,x){var self=e.data.self;var data=$.data(this);if(self.animating){return;}
self.caption.fadeOut('slow');if(typeof(x)=='undefined'||x.how!="auto"){if(self.options.autoPlay){self.imgPlay.trigger('click');}}
self.animating=true;self.active.fadeTo(300,0.4).removeClass('active');self.active=$(this);self.active.addClass('active').fadeTo(200,1);$('<img />').bind('load',{self:self,data:data},function(){self.aniDiv.css({height:self.image.height(),width:self.image.width()}).fadeIn('fast');self.aniDiv.children('div').css({'width':'20%','height':'20%','float':'left'});var n=0;if(self.options.transition[0]==-1){n=Math.floor(Math.random()*6)+1;}else{n=self.options.transition[self.step];self.step++;if(self.step>=self.options.transition.length){self.step=0;}}
if(self.options.IESafe&&$.browser.msie){n=1;}
self.doAnimation(n,data);}).attr('src',$.data(this).source);},doAnimation:function(n,data){var self=this;var aWidth=self.aniDiv.children('div').eq(0).width();var aHeight=self.aniDiv.children('div').eq(0).height();self.aniDiv.children().each(function(){var div=$(this);var xOffset=Math.floor(div.parent().width()/5)*div.attr('col');var yOffset=Math.floor(div.parent().height()/5)*div.attr('row');div.css({'background':'url('+data.source+') -'+xOffset+'px -'+yOffset+'px','width':'0px','height':'0px','position':'absolute','top':yOffset+'px','left':xOffset+'px','float':'none'});});switch(n){case 0:self.aniDiv.hide();self.image.fadeOut('slow',function(){self.image.attr('src',data.source).fadeIn('slow',function(){self.finishAnimating(data);});});break;case 1:self.aniDiv.height(self.image.height()).hide().css({'background':'url('+data.source+') top left no-repeat'});self.aniDiv.children('div').hide();self.aniDiv.fadeIn('slow',function(){self.finishAnimating(data);self.aniDiv.css({'background':'transparent'});});break;case 2:self.aniDiv.children().hide().each(function(index){var delay=index*30;$(this).css({opacity:0.1}).show().delay(delay).animate({opacity:1,"width":aWidth,"height":aHeight},200,'linear',function(){if($(".animation div").index(this)==24){self.finishAnimating(data);}});});break;case 3:self.aniDiv.children("div:lt(5)").hide().each(function(index){var delay=$(this).attr('col')*100;$(this).css({opacity:0.1,"width":aWidth}).show().delay(delay).animate({opacity:1,"height":self.image.height()},700,'linear',function(){if($(".animation div").index(this)==4){self.finishAnimating(data);}});});break;case 4:self.aniDiv.children().hide().each(function(index){var delay=$(this).attr('col')*10;aHeight=self.gapper($(this),aHeight);$(this).css({opacity:0.1,"height":aHeight}).show().delay(delay).animate({opacity:1,"width":aWidth},800,'linear',function(){if($(".animation div").index(this)==24){self.finishAnimating(data);}});});break;case 5:self.aniDiv.children().show().each(function(index){var delay=index*Math.floor(Math.random()*5)*10;aHeight=self.gapper($(this),aHeight);if($(".animation div").index(this)==24){delay=800;}
$(this).css({"height":aHeight,"width":aWidth,"opacity":.01}).delay(delay).animate({"opacity":1},800,function(){if($(".animation div").index(this)==24){self.finishAnimating(data);}});});break;case 6:self.aniDiv.height(self.image.height()).hide().css({'background':'url('+data.source+') top left no-repeat'});self.aniDiv.children('div').hide();self.aniDiv.css({width:0}).show().animate({width:self.image.width()},'slow',function(){self.finishAnimating(data);self.aniDiv.css({'background':'transparent'});});break;}},finishAnimating:function(data){this.animating=false;this.image.attr('src',data.source);this.aniDiv.hide();this.anchor.attr('href',data.clickThrough);if(this.options.showCaption){this.caption.html(data.caption).fadeIn('slow');}
if(this.options.autoPlay==true){var self=this;this.image.delay(this.options.speed).fadeIn(0,function(){if(self.options.autoPlay){self.nextClick();}});}
if(typeof(this.options.animationFinished)=='function'){this.options.animationFinished(this);}},gapper:function(ele,aHeight){if(ele.attr('row')==9&&ele.attr('col')==0){var gap=ani_divs.height()-(aHeight*9);return gap;}
return aHeight;},nextClick:function(e){var how="natural";try{var self=e.data.self;}catch(err){var self=this;how="auto";}
var next=self.active.parents('li:first').next().find('img');if(next.length==0){next=self.list.find('img').eq(0);};next.trigger('click',{how:how});},prevClick:function(e){var self=e.data.self;var prev=self.active.parents('li:first').prev().find('img');if(prev.length==0){prev=self.list.find('img:last');};prev.trigger('click');},playClick:function(e){var self=e.data.self;self.options.autoPlay=!self.options.autoPlay;self.imgPlay.toggleClass('play').toggleClass('pause');if(self.options.autoPlay){self.nextClick();}}});})(jQuery);

/*!
 * jCarousel - Riding carousels with jQuery
 *   http://sorgalla.com/jcarousel/
 *
 * Copyright (c) 2006 Jan Sorgalla (http://sorgalla.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 * Inspired by the "Carousel Component" by Bill Scott
 *   http://billwscott.com/carousel/
 */

(function($){$.fn.jcarousel=function(o){if(typeof o=='string'){var instance=$(this).data('jcarousel'),args=Array.prototype.slice.call(arguments,1);return instance[o].apply(instance,args);}else
return this.each(function(){$(this).data('jcarousel',new $jc(this,o));});};var defaults={vertical:false,start:1,offset:1,size:null,scroll:3,visible:null,animation:'normal',easing:'swing',auto:0,wrap:null,initCallback:null,reloadCallback:null,itemLoadCallback:null,itemFirstInCallback:null,itemFirstOutCallback:null,itemLastInCallback:null,itemLastOutCallback:null,itemVisibleInCallback:null,itemVisibleOutCallback:null,buttonNextHTML:'<div></div>',buttonPrevHTML:'<div></div>',buttonNextEvent:'click',buttonPrevEvent:'click',buttonNextCallback:null,buttonPrevCallback:null};$.jcarousel=function(e,o){this.options=$.extend({},defaults,o||{});this.locked=false;this.container=null;this.clip=null;this.list=null;this.buttonNext=null;this.buttonPrev=null;this.wh=!this.options.vertical?'width':'height';this.lt=!this.options.vertical?'left':'top';var skin='',split=e.className.split(' ');for(var i=0;i<split.length;i++){if(split[i].indexOf('jcarousel-skin')!=-1){$(e).removeClass(split[i]);skin=split[i];break;}}if(e.nodeName=='UL'||e.nodeName=='OL'){this.list=$(e);this.container=this.list.parent();if(this.container.hasClass('jcarousel-clip')){if(!this.container.parent().hasClass('jcarousel-container'))this.container=this.container.wrap('<div></div>');this.container=this.container.parent();}else if(!this.container.hasClass('jcarousel-container'))this.container=this.list.wrap('<div></div>').parent();}else{this.container=$(e);this.list=this.container.find('ul,ol').eq(0);}if(skin!=''&&this.container.parent()[0].className.indexOf('jcarousel-skin')==-1)this.container.wrap('<div class=" '+skin+'"></div>');this.clip=this.list.parent();if(!this.clip.length||!this.clip.hasClass('jcarousel-clip'))this.clip=this.list.wrap('<div></div>').parent();this.buttonNext=$('.jcarousel-next',this.container);if(this.buttonNext.size()==0&&this.options.buttonNextHTML!=null)this.buttonNext=this.clip.after(this.options.buttonNextHTML).next();this.buttonNext.addClass(this.className('jcarousel-next'));this.buttonPrev=$('.jcarousel-prev',this.container);if(this.buttonPrev.size()==0&&this.options.buttonPrevHTML!=null)this.buttonPrev=this.clip.after(this.options.buttonPrevHTML).next();this.buttonPrev.addClass(this.className('jcarousel-prev'));this.clip.addClass(this.className('jcarousel-clip')).css({overflow:'hidden',position:'relative'});this.list.addClass(this.className('jcarousel-list')).css({overflow:'hidden',position:'relative',top:0,left:0,margin:0,padding:0});this.container.addClass(this.className('jcarousel-container')).css({position:'relative'});var di=this.options.visible!=null?Math.ceil(this.clipping()/this.options.visible):null;var li=this.list.children('li');var self=this;if(li.size()>0){var wh=0,i=this.options.offset;li.each(function(){self.format(this,i++);wh+=self.dimension(this,di);});this.list.css(this.wh,wh+'px');if(!o||o.size===undefined)this.options.size=li.size();}this.container.css('display','block');this.buttonNext.css('display','block');this.buttonPrev.css('display','block');this.funcNext=function(){self.next();};this.funcPrev=function(){self.prev();};this.funcResize=function(){self.reload();};if(this.options.initCallback!=null)this.options.initCallback(this,'init');if($.browser.safari){this.buttons(false,false);$(window).bind('load.jcarousel',function(){self.setup();});}else
this.setup();};var $jc=$.jcarousel;$jc.fn=$jc.prototype={jcarousel:'0.2.4'};$jc.fn.extend=$jc.extend=$.extend;$jc.fn.extend({setup:function(){this.first=null;this.last=null;this.prevFirst=null;this.prevLast=null;this.animating=false;this.timer=null;this.tail=null;this.inTail=false;if(this.locked)return;this.list.css(this.lt,this.pos(this.options.offset)+'px');var p=this.pos(this.options.start);this.prevFirst=this.prevLast=null;this.animate(p,false);$(window).unbind('resize.jcarousel',this.funcResize).bind('resize.jcarousel',this.funcResize);},reset:function(){this.list.empty();this.list.css(this.lt,'0px');this.list.css(this.wh,'10px');if(this.options.initCallback!=null)this.options.initCallback(this,'reset');this.setup();},reload:function(){if(this.tail!=null&&this.inTail)this.list.css(this.lt,$jc.intval(this.list.css(this.lt))+this.tail);this.tail=null;this.inTail=false;if(this.options.reloadCallback!=null)this.options.reloadCallback(this);if(this.options.visible!=null){var self=this;var di=Math.ceil(this.clipping()/this.options.visible),wh=0,lt=0;$('li',this.list).each(function(i){wh+=self.dimension(this,di);if(i+1<self.first)lt=wh;});this.list.css(this.wh,wh+'px');this.list.css(this.lt,-lt+'px');}this.scroll(this.first,false);},lock:function(){this.locked=true;this.buttons();},unlock:function(){this.locked=false;this.buttons();},size:function(s){if(s!=undefined){this.options.size=s;if(!this.locked)this.buttons();}return this.options.size;},has:function(i,i2){if(i2==undefined||!i2)i2=i;if(this.options.size!==null&&i2>this.options.size)i2=this.options.size;for(var j=i;j<=i2;j++){var e=this.get(j);if(!e.length||e.hasClass('jcarousel-item-placeholder'))return false;}return true;},get:function(i){return $('.jcarousel-item-'+i,this.list);},add:function(i,s){var e=this.get(i),old=0,add=0;if(e.length==0){var c,e=this.create(i),j=$jc.intval(i);while(c=this.get(--j)){if(j<=0||c.length){j<=0?this.list.prepend(e):c.after(e);break;}}}else
old=this.dimension(e);e.removeClass(this.className('jcarousel-item-placeholder'));typeof s=='string'?e.html(s):e.empty().append(s);var di=this.options.visible!=null?Math.ceil(this.clipping()/this.options.visible):null;var wh=this.dimension(e,di)-old;if(i>0&&i<this.first)this.list.css(this.lt,$jc.intval(this.list.css(this.lt))-wh+'px');this.list.css(this.wh,$jc.intval(this.list.css(this.wh))+wh+'px');return e;},remove:function(i){var e=this.get(i);if(!e.length||(i>=this.first&&i<=this.last))return;var d=this.dimension(e);if(i<this.first)this.list.css(this.lt,$jc.intval(this.list.css(this.lt))+d+'px');e.remove();this.list.css(this.wh,$jc.intval(this.list.css(this.wh))-d+'px');},next:function(){this.stopAuto();if(this.tail!=null&&!this.inTail)this.scrollTail(false);else
this.scroll(((this.options.wrap=='both'||this.options.wrap=='last')&&this.options.size!=null&&this.last==this.options.size)?1:this.first+this.options.scroll);},prev:function(){this.stopAuto();if(this.tail!=null&&this.inTail)this.scrollTail(true);else
this.scroll(((this.options.wrap=='both'||this.options.wrap=='first')&&this.options.size!=null&&this.first==1)?this.options.size:this.first-this.options.scroll);},scrollTail:function(b){if(this.locked||this.animating||!this.tail)return;var pos=$jc.intval(this.list.css(this.lt));!b?pos-=this.tail:pos+=this.tail;this.inTail=!b;this.prevFirst=this.first;this.prevLast=this.last;this.animate(pos);},scroll:function(i,a){if(this.locked||this.animating)return;this.animate(this.pos(i),a);},pos:function(i){var pos=$jc.intval(this.list.css(this.lt));if(this.locked||this.animating)return pos;if(this.options.wrap!='circular')i=i<1?1:(this.options.size&&i>this.options.size?this.options.size:i);var back=this.first>i;var f=this.options.wrap!='circular'&&this.first<=1?1:this.first;var c=back?this.get(f):this.get(this.last);var j=back?f:f-1;var e=null,l=0,p=false,d=0,g;while(back?--j>=i:++j<i){e=this.get(j);p=!e.length;if(e.length==0){e=this.create(j).addClass(this.className('jcarousel-item-placeholder'));c[back?'before':'after'](e);if(this.first!=null&&this.options.wrap=='circular'&&this.options.size!==null&&(j<=0||j>this.options.size)){g=this.get(this.index(j));if(g.length)this.add(j,g.children().clone(true));}}c=e;d=this.dimension(e);if(p)l+=d;if(this.first!=null&&(this.options.wrap=='circular'||(j>=1&&(this.options.size==null||j<=this.options.size))))pos=back?pos+d:pos-d;}var clipping=this.clipping();var cache=[];var visible=0,j=i,v=0;var c=this.get(i-1);while(++visible){e=this.get(j);p=!e.length;if(e.length==0){e=this.create(j).addClass(this.className('jcarousel-item-placeholder'));c.length==0?this.list.prepend(e):c[back?'before':'after'](e);if(this.first!=null&&this.options.wrap=='circular'&&this.options.size!==null&&(j<=0||j>this.options.size)){g=this.get(this.index(j));if(g.length)this.add(j,g.find('>*').clone(true));}}c=e;var d=this.dimension(e);if(d==0){/*alert('jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...');*/return 0;}if(this.options.wrap!='circular'&&this.options.size!==null&&j>this.options.size)cache.push(e);else if(p)l+=d;v+=d;if(v>=clipping)break;j++;}for(var x=0;x<cache.length;x++)cache[x].remove();if(l>0){this.list.css(this.wh,this.dimension(this.list)+l+'px');if(back){pos-=l;this.list.css(this.lt,$jc.intval(this.list.css(this.lt))-l+'px');}}var last=i+visible-1;if(this.options.wrap!='circular'&&this.options.size&&last>this.options.size)last=this.options.size;if(j>last){visible=0,j=last,v=0;while(++visible){var e=this.get(j--);if(!e.length)break;v+=this.dimension(e);if(v>=clipping)break;}}var first=last-visible+1;if(this.options.wrap!='circular'&&first<1)first=1;if(this.inTail&&back){pos+=this.tail;this.inTail=false;}this.tail=null;if(this.options.wrap!='circular'&&last==this.options.size&&(last-visible+1)>=1){var m=$jc.margin(this.get(last),!this.options.vertical?'marginRight':'marginBottom');if((v-m)>clipping)this.tail=v-clipping-m;}while(i-->first)pos+=this.dimension(this.get(i));this.prevFirst=this.first;this.prevLast=this.last;this.first=first;this.last=last;return pos;},animate:function(p,a){if(this.locked||this.animating)return;this.animating=true;var self=this;var scrolled=function(){self.animating=false;if(p==0)self.list.css(self.lt,0);if(self.options.wrap=='circular'||self.options.wrap=='both'||self.options.wrap=='last'||self.options.size==null||self.last<self.options.size)self.startAuto();self.buttons();self.notify('onAfterAnimation');};this.notify('onBeforeAnimation');if(!this.options.animation||a==false){this.list.css(this.lt,p+'px');scrolled();}else{var o=!this.options.vertical?{'left':p}:{'top':p};this.list.animate(o,this.options.animation,this.options.easing,scrolled);}},startAuto:function(s){if(s!=undefined)this.options.auto=s;if(this.options.auto==0)return this.stopAuto();if(this.timer!=null)return;var self=this;this.timer=setTimeout(function(){self.next();},this.options.auto*1000);},stopAuto:function(){if(this.timer==null)return;clearTimeout(this.timer);this.timer=null;},buttons:function(n,p){if(n==undefined||n==null){var n=!this.locked&&this.options.size!==0&&((this.options.wrap&&this.options.wrap!='first')||this.options.size==null||this.last<this.options.size);if(!this.locked&&(!this.options.wrap||this.options.wrap=='first')&&this.options.size!=null&&this.last>=this.options.size)n=this.tail!=null&&!this.inTail;}if(p==undefined||p==null){var p=!this.locked&&this.options.size!==0&&((this.options.wrap&&this.options.wrap!='last')||this.first>1);if(!this.locked&&(!this.options.wrap||this.options.wrap=='last')&&this.options.size!=null&&this.first==1)p=this.tail!=null&&this.inTail;}var self=this;this.buttonNext[n?'bind':'unbind'](this.options.buttonNextEvent+'.jcarousel',this.funcNext)[n?'removeClass':'addClass'](this.className('jcarousel-next-disabled')).attr('disabled',n?false:true);this.buttonPrev[p?'bind':'unbind'](this.options.buttonPrevEvent+'.jcarousel',this.funcPrev)[p?'removeClass':'addClass'](this.className('jcarousel-prev-disabled')).attr('disabled',p?false:true);if(this.buttonNext.length>0&&(this.buttonNext[0].jcarouselstate==undefined||this.buttonNext[0].jcarouselstate!=n)&&this.options.buttonNextCallback!=null){this.buttonNext.each(function(){self.options.buttonNextCallback(self,this,n);});this.buttonNext[0].jcarouselstate=n;}if(this.buttonPrev.length>0&&(this.buttonPrev[0].jcarouselstate==undefined||this.buttonPrev[0].jcarouselstate!=p)&&this.options.buttonPrevCallback!=null){this.buttonPrev.each(function(){self.options.buttonPrevCallback(self,this,p);});this.buttonPrev[0].jcarouselstate=p;}},notify:function(evt){var state=this.prevFirst==null?'init':(this.prevFirst<this.first?'next':'prev');this.callback('itemLoadCallback',evt,state);if(this.prevFirst!==this.first){this.callback('itemFirstInCallback',evt,state,this.first);this.callback('itemFirstOutCallback',evt,state,this.prevFirst);}if(this.prevLast!==this.last){this.callback('itemLastInCallback',evt,state,this.last);this.callback('itemLastOutCallback',evt,state,this.prevLast);}this.callback('itemVisibleInCallback',evt,state,this.first,this.last,this.prevFirst,this.prevLast);this.callback('itemVisibleOutCallback',evt,state,this.prevFirst,this.prevLast,this.first,this.last);},callback:function(cb,evt,state,i1,i2,i3,i4){if(this.options[cb]==undefined||(typeof this.options[cb]!='object'&&evt!='onAfterAnimation'))return;var callback=typeof this.options[cb]=='object'?this.options[cb][evt]:this.options[cb];if(!$.isFunction(callback))return;var self=this;if(i1===undefined)callback(self,state,evt);else if(i2===undefined)this.get(i1).each(function(){callback(self,this,i1,state,evt);});else{for(var i=i1;i<=i2;i++)if(i!==null&&!(i>=i3&&i<=i4))this.get(i).each(function(){callback(self,this,i,state,evt);});}},create:function(i){return this.format('<li></li>',i);},format:function(e,i){var $e=$(e).addClass(this.className('jcarousel-item')).addClass(this.className('jcarousel-item-'+i)).css({'float':'left','list-style':'none'});$e.attr('jcarouselindex',i);return $e;},className:function(c){return c+' '+c+(!this.options.vertical?'-horizontal':'-vertical');},dimension:function(e,d){var el=e.jquery!=undefined?e[0]:e;var old=!this.options.vertical?el.offsetWidth+$jc.margin(el,'marginLeft')+$jc.margin(el,'marginRight'):el.offsetHeight+$jc.margin(el,'marginTop')+$jc.margin(el,'marginBottom');if(d==undefined||old==d)return old;var w=!this.options.vertical?d-$jc.margin(el,'marginLeft')-$jc.margin(el,'marginRight'):d-$jc.margin(el,'marginTop')-$jc.margin(el,'marginBottom');$(el).css(this.wh,w+'px');return this.dimension(el);},clipping:function(){return!this.options.vertical?this.clip[0].offsetWidth-$jc.intval(this.clip.css('borderLeftWidth'))-$jc.intval(this.clip.css('borderRightWidth')):this.clip[0].offsetHeight-$jc.intval(this.clip.css('borderTopWidth'))-$jc.intval(this.clip.css('borderBottomWidth'));},index:function(i,s){if(s==undefined)s=this.options.size;return Math.round((((i-1)/s)-Math.floor((i-1)/s))*s)+1;}});$jc.extend({defaults:function(d){return $.extend(defaults,d||{});},margin:function(e,p){if(!e)return 0;var el=e.jquery!=undefined?e[0]:e;if(p=='marginRight'&&$.browser.safari){var old={'display':'block','float':'none','width':'auto'},oWidth,oWidth2;$.swap(el,old,function(){oWidth=el.offsetWidth;});old['marginRight']=0;$.swap(el,old,function(){oWidth2=el.offsetWidth;});return oWidth2-oWidth;}return $jc.intval($.css(el,p));},intval:function(v){v=parseInt(v);return isNaN(v)?0:v;}});})(jQuery);


/*
 * jQuery Nivo Slider v2.3
 * http://nivo.dev7studios.com
 *
 * Copyright 2010, Gilbert Pellegrom
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function(b){var a=function(j,q){var g=b.extend({},b.fn.nivoSlider.defaults,q);var m={currentSlide:0,currentImage:"",totalSlides:0,randAnim:"",running:false,paused:false,stop:false};var d=b(j);d.data("nivo:vars",m);d.css("position","relative");d.addClass("nivoSlider");var e=d.children();e.each(function(){var t=b(this);var s="";if(!t.is("img")){if(t.is("a")){t.addClass("nivo-imageLink");s=t}t=t.find("img:first")}var r=t.width();if(r==0){r=t.attr("width")}var i=t.height();if(i==0){i=t.attr("height")}if(r>d.width()){d.width(r)}if(i>d.height()){d.height(i)}if(s!=""){s.css("display","none")}t.css("display","none");m.totalSlides++});if(g.startSlide>0){if(g.startSlide>=m.totalSlides){g.startSlide=m.totalSlides-1}m.currentSlide=g.startSlide}if(b(e[m.currentSlide]).is("img")){m.currentImage=b(e[m.currentSlide])}else{m.currentImage=b(e[m.currentSlide]).find("img:first")}if(b(e[m.currentSlide]).is("a")){b(e[m.currentSlide]).css("display","block")}d.css("background","url("+m.currentImage.attr("src")+") no-repeat");for(var k=0;k<g.slices;k++){var o=Math.round(d.width()/g.slices);if(k==g.slices-1){d.append(b('<div class="nivo-slice"></div>').css({left:(o*k)+"px",width:(d.width()-(o*k))+"px"}))}else{d.append(b('<div class="nivo-slice"></div>').css({left:(o*k)+"px",width:o+"px"}))}}d.append(b('<div class="nivo-caption"><p></p></div>').css({display:"none",opacity:g.captionOpacity}));if(m.currentImage.attr("title")!=""){var n=m.currentImage.attr("title");if(n.substr(0,1)=="#"){n=b(n).html()}b(".nivo-caption p",d).html(n);b(".nivo-caption",d).fadeIn(g.animSpeed)}var c=0;if(!g.manualAdvance&&e.length>1){c=setInterval(function(){p(d,e,g,false)},g.pauseTime)}if(g.directionNav){d.append('<div class="nivo-directionNav"><a class="nivo-prevNav">Prev</a><a class="nivo-nextNav">Next</a></div>');if(g.directionNavHide){b(".nivo-directionNav",d).hide();d.hover(function(){b(".nivo-directionNav",d).show()},function(){b(".nivo-directionNav",d).hide()})}b("a.nivo-prevNav",d).live("click",function(){if(m.running){return false}clearInterval(c);c="";m.currentSlide-=2;p(d,e,g,"prev")});b("a.nivo-nextNav",d).live("click",function(){if(m.running){return false}clearInterval(c);c="";p(d,e,g,"next")})}if(g.controlNav){var l=b('<div class="nivo-controlNav"></div>');d.append(l);for(var k=0;k<e.length;k++){if(g.controlNavThumbs){var f=e.eq(k);if(!f.is("img")){f=f.find("img:first")}if(g.controlNavThumbsFromRel){l.append('<a class="nivo-control" rel="'+k+'"><img src="'+f.attr("rel")+'" alt="" /></a>')}else{l.append('<a class="nivo-control" rel="'+k+'"><img src="'+f.attr("src").replace(g.controlNavThumbsSearch,g.controlNavThumbsReplace)+'" alt="" /></a>')}}else{l.append('<a class="nivo-control" rel="'+k+'">'+(k+1)+"</a>")}}b(".nivo-controlNav a:eq("+m.currentSlide+")",d).addClass("active");b(".nivo-controlNav a",d).live("click",function(){if(m.running){return false}if(b(this).hasClass("active")){return false}clearInterval(c);c="";d.css("background","url("+m.currentImage.attr("src")+") no-repeat");m.currentSlide=b(this).attr("rel")-1;p(d,e,g,"control")})}if(g.keyboardNav){b(window).keypress(function(i){if(i.keyCode=="37"){if(m.running){return false}clearInterval(c);c="";m.currentSlide-=2;p(d,e,g,"prev")}if(i.keyCode=="39"){if(m.running){return false}clearInterval(c);c="";p(d,e,g,"next")}})}if(g.pauseOnHover){d.hover(function(){m.paused=true;clearInterval(c);c=""},function(){m.paused=false;if(c==""&&!g.manualAdvance){c=setInterval(function(){p(d,e,g,false)},g.pauseTime)}})}d.bind("nivo:animFinished",function(){m.running=false;b(e).each(function(){if(b(this).is("a")){b(this).css("display","none")}});if(b(e[m.currentSlide]).is("a")){b(e[m.currentSlide]).css("display","block")}if(c==""&&!m.paused&&!g.manualAdvance){c=setInterval(function(){p(d,e,g,false)},g.pauseTime)}g.afterChange.call(this)});var p=function(r,s,u,x){var y=r.data("nivo:vars");if(y&&(y.currentSlide==y.totalSlides-1)){u.lastSlide.call(this)}if((!y||y.stop)&&!x){return false}u.beforeChange.call(this);if(!x){r.css("background","url("+y.currentImage.attr("src")+") no-repeat")}else{if(x=="prev"){r.css("background","url("+y.currentImage.attr("src")+") no-repeat")}if(x=="next"){r.css("background","url("+y.currentImage.attr("src")+") no-repeat")}}y.currentSlide++;if(y.currentSlide==y.totalSlides){y.currentSlide=0;u.slideshowEnd.call(this)}if(y.currentSlide<0){y.currentSlide=(y.totalSlides-1)}if(b(s[y.currentSlide]).is("img")){y.currentImage=b(s[y.currentSlide])}else{y.currentImage=b(s[y.currentSlide]).find("img:first")}if(u.controlNav){b(".nivo-controlNav a",r).removeClass("active");b(".nivo-controlNav a:eq("+y.currentSlide+")",r).addClass("active")}if(y.currentImage.attr("title")!=""){var z=y.currentImage.attr("title");if(z.substr(0,1)=="#"){z=b(z).html()}if(b(".nivo-caption",r).css("display")=="block"){b(".nivo-caption p",r).fadeOut(u.animSpeed,function(){b(this).html(z);b(this).fadeIn(u.animSpeed)})}else{b(".nivo-caption p",r).html(z)}b(".nivo-caption",r).fadeIn(u.animSpeed)}else{b(".nivo-caption",r).fadeOut(u.animSpeed)}var w=0;b(".nivo-slice",r).each(function(){var i=Math.round(r.width()/u.slices);b(this).css({height:"0px",opacity:"0",background:"url("+y.currentImage.attr("src")+") no-repeat -"+((i+(w*i))-i)+"px 0%"});w++});if(u.effect=="random"){var A=new Array("sliceDownRight","sliceDownLeft","sliceUpRight","sliceUpLeft","sliceUpDown","sliceUpDownLeft","fold","fade");y.randAnim=A[Math.floor(Math.random()*(A.length+1))];if(y.randAnim==undefined){y.randAnim="fade"}}if(u.effect.indexOf(",")!=-1){var A=u.effect.split(",");y.randAnim=b.trim(A[Math.floor(Math.random()*A.length)])}y.running=true;if(u.effect=="sliceDown"||u.effect=="sliceDownRight"||y.randAnim=="sliceDownRight"||u.effect=="sliceDownLeft"||y.randAnim=="sliceDownLeft"){var t=0;var w=0;var C=b(".nivo-slice",r);if(u.effect=="sliceDownLeft"||y.randAnim=="sliceDownLeft"){C=b(".nivo-slice",r)._reverse()}C.each(function(){var i=b(this);i.css("top","0px");if(w==u.slices-1){setTimeout(function(){i.animate({height:"100%",opacity:"1.0"},u.animSpeed,"",function(){r.trigger("nivo:animFinished")})},(100+t))}else{setTimeout(function(){i.animate({height:"100%",opacity:"1.0"},u.animSpeed)},(100+t))}t+=50;w++})}else{if(u.effect=="sliceUp"||u.effect=="sliceUpRight"||y.randAnim=="sliceUpRight"||u.effect=="sliceUpLeft"||y.randAnim=="sliceUpLeft"){var t=0;var w=0;var C=b(".nivo-slice",r);if(u.effect=="sliceUpLeft"||y.randAnim=="sliceUpLeft"){C=b(".nivo-slice",r)._reverse()}C.each(function(){var i=b(this);i.css("bottom","0px");if(w==u.slices-1){setTimeout(function(){i.animate({height:"100%",opacity:"1.0"},u.animSpeed,"",function(){r.trigger("nivo:animFinished")})},(100+t))}else{setTimeout(function(){i.animate({height:"100%",opacity:"1.0"},u.animSpeed)},(100+t))}t+=50;w++})}else{if(u.effect=="sliceUpDown"||u.effect=="sliceUpDownRight"||y.randAnim=="sliceUpDown"||u.effect=="sliceUpDownLeft"||y.randAnim=="sliceUpDownLeft"){var t=0;var w=0;var B=0;var C=b(".nivo-slice",r);if(u.effect=="sliceUpDownLeft"||y.randAnim=="sliceUpDownLeft"){C=b(".nivo-slice",r)._reverse()}C.each(function(){var i=b(this);if(w==0){i.css("top","0px");w++}else{i.css("bottom","0px");w=0}if(B==u.slices-1){setTimeout(function(){i.animate({height:"100%",opacity:"1.0"},u.animSpeed,"",function(){r.trigger("nivo:animFinished")})},(100+t))}else{setTimeout(function(){i.animate({height:"100%",opacity:"1.0"},u.animSpeed)},(100+t))}t+=50;B++})}else{if(u.effect=="fold"||y.randAnim=="fold"){var t=0;var w=0;b(".nivo-slice",r).each(function(){var i=b(this);var v=i.width();i.css({top:"0px",height:"100%",width:"0px"});if(w==u.slices-1){setTimeout(function(){i.animate({width:v,opacity:"1.0"},u.animSpeed,"",function(){r.trigger("nivo:animFinished")})},(100+t))}else{setTimeout(function(){i.animate({width:v,opacity:"1.0"},u.animSpeed)},(100+t))}t+=50;w++})}else{if(u.effect=="fade"||y.randAnim=="fade"){var w=0;b(".nivo-slice",r).each(function(){b(this).css("height","100%");if(w==u.slices-1){b(this).animate({opacity:"1.0"},(u.animSpeed*2),"",function(){r.trigger("nivo:animFinished")})}else{b(this).animate({opacity:"1.0"},(u.animSpeed*2))}w++})}}}}}};var h=function(i){if(this.console&&typeof console.log!="undefined"){console.log(i)}};this.stop=function(){if(!b(j).data("nivo:vars").stop){b(j).data("nivo:vars").stop=true;h("Stop Slider")}};this.start=function(){if(b(j).data("nivo:vars").stop){b(j).data("nivo:vars").stop=false;h("Start Slider")}};g.afterLoad.call(this)};b.fn.nivoSlider=function(c){return this.each(function(){var d=b(this);if(d.data("nivoslider")){return}var e=new a(this,c);d.data("nivoslider",e)})};b.fn.nivoSlider.defaults={effect:"random",slices:15,animSpeed:500,pauseTime:3000,startSlide:0,directionNav:true,directionNavHide:true,controlNav:true,controlNavThumbs:false,controlNavThumbsFromRel:false,controlNavThumbsSearch:".jpg",controlNavThumbsReplace:"_thumb.jpg",keyboardNav:true,pauseOnHover:true,manualAdvance:false,captionOpacity:0.8,beforeChange:function(){},afterChange:function(){},slideshowEnd:function(){},lastSlide:function(){},afterLoad:function(){}};b.fn._reverse=[].reverse})(jQuery);

/**
 * Copyright (c) 2010 Anders Ekdahl (http://coffeescripter.com/)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.2.4
 *
 * Demo and documentation: http://coffeescripter.com/code/ad-gallery/
 */
(function($) {
  $.fn.adGallery = function(options) {
    var defaults = { loader_image: 'http://editorial.televisa.com/img/ad-gallery/loader.gif',
                     start_at_index: 0,
                     description_wrapper: false,
                     thumb_opacity: 0.7,
                     animate_first_image: false,
                     animation_speed: 400,
                     width: false,
                     height: false,
                     display_next_and_prev: true,
                     display_back_and_forward: true,
                     scroll_jump: 0, // If 0, it jumps the width of the container
                     slideshow: {
                       enable: true,
                       autostart: false,
                       speed: 5000,
                       start_label: '  ',
                       stop_label: '  ',
                       stop_on_scroll: true,
                       countdown_prefix: '(',
                       countdown_sufix: ')',
                       onStart: false,
                       onStop: false
                     },
                     effect: 'slide-hori', // or 'slide-vert', 'fade', or 'resize', 'none'
                     enable_keyboard_move: true,
                     cycle: true,
					 target:"_blank",
                     callbacks: {
                       init: false,
                       afterImageVisible: false,
                       beforeImageVisible: false
                     }
    };
    var settings = $.extend(false, defaults, options);
    if(options && options.slideshow) {
      settings.slideshow = $.extend(false, defaults.slideshow, options.slideshow);
    };
    if(!settings.slideshow.enable) {
      settings.slideshow.autostart = false;
    };
    var galleries = [];
    $(this).each(function() {
      var gallery = new AdGallery(this, settings);
      galleries[galleries.length] = gallery;
    });
    // Sorry, breaking the jQuery chain because the gallery instances
    // are returned so you can fiddle with them
    return galleries;
  };

  function VerticalSlideAnimation(img_container, direction, desc) {
    var current_top = parseInt(img_container.css('top'), 10);
    if(direction == 'left') {
      var old_image_top = '-'+ this.image_wrapper_height +'px';
      img_container.css('top', this.image_wrapper_height +'px');
    } else {
      var old_image_top = this.image_wrapper_height +'px';
      img_container.css('top', '-'+ this.image_wrapper_height +'px');
    };
    if(desc) {
      desc.css('bottom', '-'+ desc[0].offsetHeight +'px');
      desc.animate({bottom: 0}, this.settings.animation_speed * 2);
    };
    if(this.current_description) {
      this.current_description.animate({bottom: '-'+ this.current_description[0].offsetHeight +'px'}, this.settings.animation_speed * 2);
    };
    return {old_image: {top: old_image_top},
            new_image: {top: current_top}};
  };

  function HorizontalSlideAnimation(img_container, direction, desc) {
    var current_left = parseInt(img_container.css('left'), 10);
    if(direction == 'left') {
      var old_image_left = '-'+ this.image_wrapper_width +'px';
      img_container.css('left',this.image_wrapper_width +'px');
    } else {
      var old_image_left = this.image_wrapper_width +'px';
      img_container.css('left','-'+ this.image_wrapper_width +'px');
    };
    if(desc) {
      desc.css('bottom', '-'+ desc[0].offsetHeight +'px');
      desc.animate({bottom: 0}, this.settings.animation_speed * 2);
    };
    if(this.current_description) {
      this.current_description.animate({bottom: '-'+ this.current_description[0].offsetHeight +'px'}, this.settings.animation_speed * 2);
    };
    return {old_image: {left: old_image_left},
            new_image: {left: current_left}};
  };

  function ResizeAnimation(img_container, direction, desc) {
    var image_width = img_container.width();
    var image_height = img_container.height();
    var current_left = parseInt(img_container.css('left'), 10);
    var current_top = parseInt(img_container.css('top'), 10);
    img_container.css({width: 0, height: 0, top: this.image_wrapper_height / 2, left: this.image_wrapper_width / 2});
    return {old_image: {width: 0,
                        height: 0,
                        top: this.image_wrapper_height / 2,
                        left: this.image_wrapper_width / 2},
            new_image: {width: image_width,
                        height: image_height,
                        top: current_top,
                        left: current_left}};
  };

  function FadeAnimation(img_container, direction, desc) {
    img_container.css('opacity', 0);
    return {old_image: {opacity: 0},
            new_image: {opacity: 1}};
  };

  // Sort of a hack, will clean this up... eventually
  function NoneAnimation(img_container, direction, desc) {
    img_container.css('opacity', 0);
    return {old_image: {opacity: 0},
            new_image: {opacity: 1},
            speed: 0};
  };

  function AdGallery(wrapper, settings) {
    this.init(wrapper, settings);
  };
  AdGallery.prototype = {
    // Elements
    wrapper: false,
    image_wrapper: false,
    gallery_info: false,
    nav: false,
    loader: false,
    preloads: false,
    thumbs_wrapper: false,
    scroll_back: false,
    scroll_forward: false,
    next_link: false,
    prev_link: false,

    slideshow: false,
    image_wrapper_width: 0,
    image_wrapper_height: 0,
    current_index: 0,
    current_image: false,
    current_description: false,
    nav_display_width: 0,
    settings: false,
    images: false,
    in_transition: false,
    animations: false,
    init: function(wrapper, settings) {
      var context = this;
      this.wrapper = $(wrapper);
      this.settings = settings;
      this.setupElements();
      this.setupAnimations();
      if(this.settings.width) {
        this.image_wrapper_width = this.settings.width;
        this.image_wrapper.width(this.settings.width);
        this.wrapper.width(this.settings.width);
      } else {
        this.image_wrapper_width = this.image_wrapper.width();
      };
      if(this.settings.height) {
        this.image_wrapper_height = this.settings.height;
        this.image_wrapper.height(this.settings.height);
      } else {
        this.image_wrapper_height = this.image_wrapper.height();
      };
      this.nav_display_width = this.nav.width();
      this.current_index = 0;
      this.current_image = false;
      this.current_description = false;
      this.in_transition = false;
      this.findImages();
      if(this.settings.display_next_and_prev) {
        this.initNextAndPrev();
      };
      // The slideshow needs a callback to trigger the next image to be shown
      // but we don't want to give it access to the whole gallery instance
      var nextimage_callback = function(callback) {
        return context.nextImage(callback);
      };
      this.slideshow = new AdGallerySlideshow(nextimage_callback, this.settings.slideshow);
      this.controls.append(this.slideshow.create());
      if(this.settings.slideshow.enable) {
        this.slideshow.enable();
      } else {
        this.slideshow.disable();
      };
      if(this.settings.display_back_and_forward) {
        this.initBackAndForward();
      };
      if(this.settings.enable_keyboard_move) {
        this.initKeyEvents();
      };
      var start_at = parseInt(this.settings.start_at_index, 10);
      if(window.location.hash && window.location.hash.indexOf('#ad-image') === 0) {
        start_at = window.location.hash.replace(/[^0-9]+/g, '');
        // Check if it's a number
        if((start_at * 1) != start_at) {
          start_at = this.settings.start_at_index;
        };
      };

      this.loading(true);
      this.showImage(start_at,
        function() {
          // We don't want to start the slideshow before the image has been
          // displayed
          if(context.settings.slideshow.autostart) {
            context.preloadImage(start_at + 1);
            context.slideshow.start();
          };
        }
      );
      this.fireCallback(this.settings.callbacks.init);
    },
    setupAnimations: function() {
      this.animations = {
        'slide-vert': VerticalSlideAnimation,
        'slide-hori': HorizontalSlideAnimation,
        'resize': ResizeAnimation,
        'fade': FadeAnimation,
        'none': NoneAnimation
      };
    },
    setupElements: function() {
      this.controls = this.wrapper.find('.ad-controls');
      this.gallery_info = $('<p class="ad-info"></p>');
      this.controls.append(this.gallery_info);
      this.image_wrapper = this.wrapper.find('.ad-image-wrapper');
      this.image_wrapper.empty();
      this.nav = this.wrapper.find('.ad-nav');
      this.thumbs_wrapper = this.nav.find('.ad-thumbs');
      this.preloads = $('<div class="ad-preloads"></div>');
      this.loader = $('<img class="ad-loader" src="'+ this.settings.loader_image +'">');
      this.image_wrapper.append(this.loader);
      this.loader.hide();
      $(document.body).append(this.preloads);
    },
    loading: function(bool) {
      if(bool) {
        this.loader.show();
      } else {
        this.loader.hide();
      };
    },
    addAnimation: function(name, fn) {
      if($.isFunction(fn)) {
        this.animations[name] = fn;
      };
    },
    findImages: function() {
      var context = this;
      this.images = [];
      var thumb_wrapper_width = 0;
      var thumbs_loaded = 0;
      var thumbs = this.thumbs_wrapper.find('a');
      var thumb_count = thumbs.length;
      if(this.settings.thumb_opacity < 1) {
        thumbs.find('img').css('opacity', this.settings.thumb_opacity);
      };
      thumbs.each(
        function(i) {
          var link = $(this);
          var image_src = link.attr('href');
          var thumb = link.find('img');
          // Check if the thumb has already loaded
          if(!context.isImageLoaded(thumb[0])) {
            thumb.load(
              function() {
                thumb_wrapper_width += this.parentNode.parentNode.offsetWidth;
                thumbs_loaded++;
              }
            );
          } else{
            thumb_wrapper_width += thumb[0].parentNode.parentNode.offsetWidth;
            thumbs_loaded++;
          };
          link.addClass('ad-thumb'+ i);
          link.click(
            function() {
              context.showImage(i);
              context.slideshow.stop();
              return false;
            }
          ).hover(
            function() {
              if(!$(this).is('.ad-active') && context.settings.thumb_opacity < 1) {
                $(this).find('img').fadeTo(300, 1);
              };
              context.preloadImage(i);
            },
            function() {
              if(!$(this).is('.ad-active') && context.settings.thumb_opacity < 1) {
                $(this).find('img').fadeTo(300, context.settings.thumb_opacity);
              };
            }
          );
          var link = false;
          if(thumb.data('ad-link')) {
            link = thumb.data('ad-link');
          } else if(thumb.attr('longdesc') && thumb.attr('longdesc').length) {
            link = thumb.attr('longdesc');
          };
          var desc = false;
          if(thumb.data('ad-desc')) {
            desc = thumb.data('ad-desc');
          } else if(thumb.attr('alt') && thumb.attr('alt').length) {
            desc = thumb.attr('alt');
          };
          var title = false;
          if(thumb.data('ad-title')) {
            title = thumb.data('ad-title');
          } else if(thumb.attr('title') && thumb.attr('title').length) {
            title = thumb.attr('title');
          };
          context.images[i] = { thumb: thumb.attr('src'), image: image_src, error: false,
                                preloaded: false, desc: desc, title: title, size: false,
                                link: link };
        }
      );
      // Wait until all thumbs are loaded, and then set the width of the ul
      var inter = setInterval(
        function() {
          if(thumb_count == thumbs_loaded) {
            thumb_wrapper_width -= 100;
            var list = context.nav.find('.ad-thumb-list');
            list.css('width', thumb_wrapper_width +'px');
            var i = 1;
            var last_height = list.height();
            while(i < 201) {
              list.css('width', (thumb_wrapper_width + i) +'px');
              if(last_height != list.height()) {
                break;
              }
              last_height = list.height();
              i++;
            }
            clearInterval(inter);
          };
        },
        100
      );
    },
    initKeyEvents: function() {
      var context = this;
      $(document).keydown(
        function(e) {
          if(e.keyCode == 39) {
            // right arrow
            context.nextImage();
            context.slideshow.stop();
          } else if(e.keyCode == 37) {
            // left arrow
            context.prevImage();
            context.slideshow.stop();
          };
        }
      );
    },
    initNextAndPrev: function() {
      this.next_link = $('<div class="ad-next"><div class="ad-next-image"></div></div>');
      this.prev_link = $('<div class="ad-prev"><div class="ad-prev-image"></div></div>');
      this.image_wrapper.append(this.next_link);
      this.image_wrapper.append(this.prev_link);
      var context = this;
      this.prev_link.add(this.next_link).mouseover(
        function(e) {
          // IE 6 hides the wrapper div, so we have to set it's width
          $(this).css('height', context.image_wrapper_height);
          $(this).find('div').show();
        }
      ).mouseout(
        function(e) {
          $(this).find('div').hide();
        }
      ).click(
        function() {
          if($(this).is('.ad-next')) {
            context.nextImage();
            context.slideshow.stop();
          } else {
            context.prevImage();
            context.slideshow.stop();
          };
        }
      ).find('div').css('opacity', 0.7);
    },
    initBackAndForward: function() {
      var context = this;
      this.scroll_forward = $('<div class="ad-forward"></div>');
      this.scroll_back = $('<div class="ad-back"></div>');
      this.nav.append(this.scroll_forward);
      this.nav.prepend(this.scroll_back);
      var has_scrolled = 0;
      var thumbs_scroll_interval = false;
      $(this.scroll_back).add(this.scroll_forward).click(
        function() {
          // We don't want to jump the whole width, since an image
          // might be cut at the edge
          var width = context.nav_display_width - 50;
          if(context.settings.scroll_jump > 0) {
            var width = context.settings.scroll_jump;
          };
          if($(this).is('.ad-forward')) {
            var left = context.thumbs_wrapper.scrollLeft() + width;
          } else {
            var left = context.thumbs_wrapper.scrollLeft() - width;
          };
          if(context.settings.slideshow.stop_on_scroll) {
            context.slideshow.stop();
          };
          context.thumbs_wrapper.animate({scrollLeft: left +'px'});
          return false;
        }
      ).css('opacity', 0.6).hover(
        function() {
          var direction = 'left';
          if($(this).is('.ad-forward')) {
            direction = 'right';
          };
          thumbs_scroll_interval = setInterval(
            function() {
              has_scrolled++;
              // Don't want to stop the slideshow just because we scrolled a pixel or two
              if(has_scrolled > 30 && context.settings.slideshow.stop_on_scroll) {
                context.slideshow.stop();
              };
              var left = context.thumbs_wrapper.scrollLeft() + 1;
              if(direction == 'left') {
                left = context.thumbs_wrapper.scrollLeft() - 1;
              };
              context.thumbs_wrapper.scrollLeft(left);
            },
            10
          );
          $(this).css('opacity', 1);
        },
        function() {
          has_scrolled = 0;
          clearInterval(thumbs_scroll_interval);
          $(this).css('opacity', 0.6);
        }
      );
    },
    _afterShow: function() {
      this.gallery_info.html((this.current_index + 1) +' / '+ this.images.length);
      if(!this.settings.cycle) {
        // Needed for IE
        this.prev_link.show().css('height', this.image_wrapper_height);
        this.next_link.show().css('height', this.image_wrapper_height);
        if(this.current_index == (this.images.length - 1)) {
          this.next_link.hide();
        };
        if(this.current_index == 0) {
          this.prev_link.hide();
        };
      };
      this.fireCallback(this.settings.callbacks.afterImageVisible);
    },
    /**
     * Checks if the image is small enough to fit inside the container
     * If it's not, shrink it proportionally
     */
    _getContainedImageSize: function(image_width, image_height) {
      if(image_height > this.image_wrapper_height) {
        var ratio = image_width / image_height;
        image_height = this.image_wrapper_height;
        image_width = this.image_wrapper_height * ratio;
      };
      if(image_width > this.image_wrapper_width) {
  	    var ratio = image_height / image_width;
  	    image_width = this.image_wrapper_width;
  	    image_height = this.image_wrapper_width * ratio;
  	  };
      return {width: image_width, height: image_height};
    },
    /**
     * If the image dimensions are smaller than the wrapper, we position
     * it in the middle anyway
     */
    _centerImage: function(img_container, image_width, image_height) {
      img_container.css('top', '0px');
      if(image_height < this.image_wrapper_height) {
        var dif = this.image_wrapper_height - image_height;
        img_container.css('top', (dif / 2) +'px');
      };
      img_container.css('left', '0px');
      if(image_width < this.image_wrapper_width) {
        var dif = this.image_wrapper_width - image_width;
        img_container.css('left', (dif / 2) +'px');
      };
    },
    _getDescription: function(image) {
      var desc = false;
      if(image.desc.length || image.title.length) {
        var title = '';
        if(image.title.length) {
          title = '<strong class="ad-description-title">'+ image.title +'</strong>';
        };
        var desc = '';
        if(image.desc.length) {
          desc = '<span>'+ image.desc +'</span>';
        };
        desc = $('<p class="ad-image-description">'+ title + desc +'</p>');
      };
      return desc;
    },
    /**
     * @param function callback Gets fired when the image has loaded, is displaying
     *                          and it's animation has finished
     */
    showImage: function(index, callback) {
      if(this.images[index] && !this.in_transition) {
        var context = this;
        var image = this.images[index];
        this.in_transition = true;
        if(!image.preloaded) {
          this.loading(true);
          this.preloadImage(index, function() {
            context.loading(false);
            context._showWhenLoaded(index, callback);
          });
        } else {
          this._showWhenLoaded(index, callback);
        };
      };
    },
    /**
     * @param function callback Gets fired when the image has loaded, is displaying
     *                          and it's animation has finished
     */
    _showWhenLoaded: function(index, callback) {
      if(this.images[index]) {
        var context = this;
        var image = this.images[index];
        var img_container = $(document.createElement('div')).addClass('ad-image');
        var img = $(new Image()).attr('src', image.image);
        if(image.link) {
          var link = $('<a href="'+ image.link +'" target="'+this.settings.target+'"></a>');
          link.append(img);
          img_container.append(link);
        } else {
          img_container.append(img);
        }
        this.image_wrapper.prepend(img_container);
        var size = this._getContainedImageSize(image.size.width, image.size.height);
        img.attr('width', size.width);
        img.attr('height', size.height);
        img_container.css({width: size.width +'px', height: size.height +'px'});
        this._centerImage(img_container, size.width, size.height);
        var desc = this._getDescription(image, img_container);
        if(desc) {
          if(!this.settings.description_wrapper) {
            img_container.append(desc);
            var width = size.width - parseInt(desc.css('padding-left'), 10) - parseInt(desc.css('padding-right'), 10);
            desc.css('width', width +'px');
          } else {
            this.settings.description_wrapper.append(desc);
          }
        };
        this.highLightThumb(this.nav.find('.ad-thumb'+ index));

        var direction = 'right';
        if(this.current_index < index) {
          direction = 'left';
        };
        this.fireCallback(this.settings.callbacks.beforeImageVisible);
        if(this.current_image || this.settings.animate_first_image) {
          var animation_speed = this.settings.animation_speed;
          var easing = 'swing';
          var animation = this.animations[this.settings.effect].call(this, img_container, direction, desc);
          if(typeof animation.speed != 'undefined') {
            animation_speed = animation.speed;
          };
          if(typeof animation.easing != 'undefined') {
            easing = animation.easing;
          };
          if(this.current_image) {
            var old_image = this.current_image;
            var old_description = this.current_description;
            old_image.animate(animation.old_image, animation_speed, easing,
              function() {
                old_image.remove();
                if(old_description) old_description.remove();
              }
            );
          };
          img_container.animate(animation.new_image, animation_speed, easing,
            function() {
              context.current_index = index;
              context.current_image = img_container;
              context.current_description = desc;
              context.in_transition = false;
              context._afterShow();
              context.fireCallback(callback);
            }
          );
        } else {
          this.current_index = index;
          this.current_image = img_container;
          context.current_description = desc;
          this.in_transition = false;
          context._afterShow();
          this.fireCallback(callback);
        };
      };
    },
    nextIndex: function() {
      if(this.current_index == (this.images.length - 1)) {
        if(!this.settings.cycle) {
          return false;
        };
        var next = 0;
      } else {
        var next = this.current_index + 1;
      };
      return next;
    },
    nextImage: function(callback) {
      var next = this.nextIndex();
      if(next === false) return false;
      this.preloadImage(next + 1);
      this.showImage(next, callback);
      return true;
    },
    prevIndex: function() {
      if(this.current_index == 0) {
        if(!this.settings.cycle) {
          return false;
        };
        var prev = this.images.length - 1;
      } else {
        var prev = this.current_index - 1;
      };
      return prev;
    },
    prevImage: function(callback) {
      var prev = this.prevIndex();
      if(prev === false) return false;
      this.preloadImage(prev - 1);
      this.showImage(prev, callback);
      return true;
    },
    preloadAll: function() {
      var context = this;
      var i = 0;
      function preloadNext() {
        if(i < context.images.length) {
          i++;
          context.preloadImage(i, preloadNext);
        };
      };
      context.preloadImage(i, preloadNext);
    },
    preloadImage: function(index, callback) {
      if(this.images[index]) {
        var image = this.images[index];
        if(!this.images[index].preloaded) {
          var img = $(new Image());
          img.attr('src', image.image);
          if(!this.isImageLoaded(img[0])) {
            this.preloads.append(img);
            var context = this;
            img.load(
              function() {
                image.preloaded = true;
                image.size = { width: this.width, height: this.height };
                context.fireCallback(callback);
              }
            ).error(
              function() {
                image.error = true;
                image.preloaded = false;
                image.size = false;
              }
            );
          } else {
            image.preloaded = true;
            image.size = { width: img[0].width, height: img[0].height };
            this.fireCallback(callback);
          };
        } else {
          this.fireCallback(callback);
        };
      };
    },
    isImageLoaded: function(img) {
      if(typeof img.complete != 'undefined' && !img.complete) {
        return false;
      };
      if(typeof img.naturalWidth != 'undefined' && img.naturalWidth == 0) {
        return false;
      };
      return true;
    },
    highLightThumb: function(thumb) {
      this.thumbs_wrapper.find('.ad-active').removeClass('ad-active');
      thumb.addClass('ad-active');
      if(this.settings.thumb_opacity < 1) {
        this.thumbs_wrapper.find('a:not(.ad-active) img').fadeTo(300, this.settings.thumb_opacity);
        thumb.find('img').fadeTo(300, 1);
      };
      var left = thumb[0].parentNode.offsetLeft;
      left -= (this.nav_display_width / 2) - (thumb[0].offsetWidth / 2);
      this.thumbs_wrapper.animate({scrollLeft: left +'px'});
    },
    fireCallback: function(fn) {
      if($.isFunction(fn)) {
        fn.call(this);
      };
    }
  };

  function AdGallerySlideshow(nextimage_callback, settings) {
    this.init(nextimage_callback, settings);
  };
  AdGallerySlideshow.prototype = {
    start_link: false,
    stop_link: false,
    countdown: false,
    controls: false,

    settings: false,
    nextimage_callback: false,
    enabled: false,
    running: false,
    countdown_interval: false,
    init: function(nextimage_callback, settings) {
      var context = this;
      this.nextimage_callback = nextimage_callback;
      this.settings = settings;
    },
    create: function() {
      this.start_link = $('<div class="ad-slideshow-start">'+ this.settings.start_label +'</span>');
      this.stop_link = $('<div class="ad-slideshow-stop">'+ this.settings.stop_label +'</span>');
      this.countdown = $('<div class="ad-slideshow-countdown"></div>');
      this.controls = $('<div class="ad-slideshow-controls"></div>');
      this.controls.append(this.start_link).append(this.stop_link).append(this.countdown);
      this.countdown.hide();

      var context = this;
      this.start_link.click(
        function() {
          context.start();
        }
      );
      this.stop_link.click(
        function() {
          context.stop();
        }
      );
      $(document).keydown(
        function(e) {
          if(e.keyCode == 83) {
            // 's'
            if(context.running) {
              context.stop();
            } else {
              context.start();
            };
          };
        }
      );
      return this.controls;
    },
    disable: function() {
      this.enabled = false;
      this.stop();
      this.controls.hide();
    },
    enable: function() {
      this.enabled = true;
      this.controls.show();
    },
    toggle: function() {
      if(this.enabled) {
        this.disable();
      } else {
        this.enable();
      };
    },
    start: function() {
      if(this.running || !this.enabled) return false;
      var context = this;
      this.running = true;
      this.controls.addClass('ad-slideshow-running');
      this._next();
      this.fireCallback(this.settings.onStart);
      return true;
    },
    stop: function() {
      if(!this.running) return false;
      this.running = false;
      this.countdown.hide();
      this.controls.removeClass('ad-slideshow-running');
      clearInterval(this.countdown_interval);
      this.fireCallback(this.settings.onStop);
      return true;
    },
    _next: function() {
      var context = this;
      var pre = this.settings.countdown_prefix;
      var su = this.settings.countdown_sufix;
      clearInterval(context.countdown_interval);
      this.countdown.show().html(pre + (this.settings.speed / 1000) + su);
      var slide_timer = 0;
      this.countdown_interval = setInterval(
        function() {
          slide_timer += 1000;
          if(slide_timer >= context.settings.speed) {
            var whenNextIsShown = function() {
              // A check so the user hasn't stoped the slideshow during the
              // animation
              if(context.running) {
                context._next();
              };
              slide_timer = 0;
            };
            if(!context.nextimage_callback(whenNextIsShown)) {
              context.stop();
            };
            slide_timer = 0;
          };
          var sec = parseInt(context.countdown.text().replace(/[^0-9]/g, ''), 10);
          sec--;
          if(sec > 0) {
            context.countdown.html(pre + sec + su);
          };
        },
        1000
      );
    },
    fireCallback: function(fn) {
      if($.isFunction(fn)) {
        fn.call(this);
      };
    }
  };
})(jQuery);

/**
* hoverIntent r5 // 2007.03.27 // jQuery 1.1.2+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne <brian@cherne.net>
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);

/* Slide Subnav Menu v1.1.1
 * by Justin Volpato http://www.justjquery.com/
 */

(function(a){a.slidenav=function(e){var k={animspeed:'medium',hideonout:'true'};var e=a.extend(k,e);a('.slidenav > ul > li:not(:has(ul))').append('<ul></ul>');a(".subnav").append(a(".slidenav ul li ul"));a('.slidenav-box').addClass('inactive-box');function l(){if(e.hideonout=='true'){a('.slidenav-box').addClass('inactive-box')}}(a(".slidenav-container"))?a(".slidenav-container").hoverIntent(function(){},l):false;var c=[];a(".slidenav ul li").each(function(b){var m=parseInt(a('.slidenav-box').css("border-left-width"))+parseInt(a('.slidenav-box').css("border-right-width"));var n=parseInt(a('.slidenav-box').css('padding-left'))+parseInt(a('.slidenav-box').css('padding-right'));var o=m+n;c.push(a('.subnav ul:eq('+b+')').width());function p(){a('.slidenav-box').removeClass('inactive-box');a('.subnav ul').hide();a('.subnav ul:eq('+b+')').show(1);if(c[b]==0){a('.slidenav-box').addClass('inactive-box')}else a(".slidenav-box").animate({marginLeft:d[b],width:c[b]},e.animspeed)}a(this).hoverIntent(p,function(){});var f=[];var g=0;var j=[];var h=[];var d=[];for(i=0;i<b+1;i++){f.push(a('.slidenav li:eq('+i+')').width());g=g+f[i];j.push(g);h.push(j[i]-(f[i]*0.5));d.push(h[i]-(c[i]*0.5))}if(h[b]<(c[b]*0.5)){d[b]=0}else if((d[b]+c[b])>a(".slidenav").width()){d[b]=a(".slidenav").width()-c[b]-o}})}})(jQuery);

/*	
 *	jQuery carouFredSel 4.2.3
 *	Demo's and documentation:
 *	caroufredsel.frebsite.nl
 *	
 *	Copyright (c) 2010 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(A($){u($.1t.1u)D;$.1t.1u=A(o){u(V.Y==0)D 1a(\'4C 4D 3l.\');u(V.Y>1){D V.1z(A(){$(V).1u(o)})}C q=V,$1e=q[0],$w=$(V);q.3m=A(o,b){C c=[\'y\',\'X\',\'I\',\'T\',\'S\',\'W\'];o=2H(o);23(C a=0;a<c.Y;a++){o[c[a]]=2H(o[c[a]])}u(B o.X==\'O\'){u(o.X<=50)o.X={y:o.X};F o.X={Z:o.X}}F{u(B o.X==\'1l\')o.X={1b:o.X}}u(B o.y==\'O\')o.y={E:o.y};F u(B o.y==\'1l\')o.y={E:o.y,24:o.y,2p:o.y};u(b){2q=$.25(J,{},$.1t.1u.3n,o)}4=$.25(J,{},$.1t.1u.3n,o);4.2r=R;1E=(4.1E==\'3M\'||4.1E==\'1F\')?\'S\':\'T\';u(4.1E==\'3N\'||4.1E==\'1F\'){4.z=[\'24\',\'3O\',\'3P\',\'2p\',\'3Q\',\'3R\',\'1F\',\'2I\',\'26\',0,1,2,3]}F{4.z=[\'2p\',\'3Q\',\'3R\',\'24\',\'3O\',\'3P\',\'2I\',\'1F\',\'27\',3,2,1,0]}C d=H($w);C e=3o(d,4,5,R);u(4[4.z[3]]==\'I\'){4[4.z[3]]=e;4.y[4.z[3]]=e}u(!4.y[4.z[0]]){4.y[4.z[0]]=(3p(d,4,2))?\'16\':d[4.z[2]](J)}u(!4.y[4.z[3]]){4.y[4.z[3]]=(3p(d,4,5))?\'16\':d[4.z[5]](J)}u(!4[4.z[3]]){4[4.z[3]]=4.y[4.z[3]]}u(!4.y.E){u(4.y[4.z[0]]==\'16\'){4.y.E=\'16\'}F{u(B 4[4.z[0]]==\'O\'){4.y.E=1A.3q(4[4.z[0]]/4.y[4.z[0]])}F{C f=3r(r.28(),4,1);4.y.E=1A.3q(f/4.y[4.z[0]]);4[4.z[0]]=4.y.E*4.y[4.z[0]];u(B 4.K==\'1c\'){4.K=0}}}}u(!4[4.z[0]]){u(4.y.E!=\'16\'&&4.y[4.z[0]]!=\'16\'){4[4.z[0]]=4.y.E*4.y[4.z[0]];u(B 4.K==\'1c\'){4.K=0}}F{4[4.z[0]]=\'16\'}}u(4.y.E==\'16\'){4.2r=J;4.3s=(4[4.z[0]]==\'16\')?3r(r.28(),4,1):4[4.z[0]];u(4.K===R||4.K===0){4[4.z[0]]=\'16\'}4.y.E=2s($w,4,0)}F{u(4.K===R){4.K=0}}u(B 4.K==\'1c\'){4.K=(4[4.z[0]]==\'16\')?0:\'I\'}4.y.1G=4.y.E;4.U=R;u(4.K==\'I\'){4.K=[0,0,0,0];u(4[4.z[0]]!=\'16\'){4.U=\'I\';C p=2J(3t($w,4),4);4.K[4.z[10]]=p[0];4.K[4.z[12]]=p[0]}u(4[4.z[3]]!=\'16\'){C p=(4[4.z[3]]-e)/2;u(p<0)p=0;4.K[4.z[9]]=p;4.K[4.z[11]]=p}}F{4.K=3S(4.K);4.U=(4.K[0]==0&&4.K[1]==0&&4.K[2]==0&&4.K[3]==0)?R:J}u(B 4.y.2K!=\'O\')4.y.2K=(4.2r)?1:4.y.E;u(B 4.X.y!=\'O\')4.X.y=(4.2r)?\'16\':4.y.E;u(B 4.X.Z!=\'O\')4.X.Z=4E;4.I=2t(4.I,R,J);4.T=2t(4.T);4.S=2t(4.S);4.W=2t(4.W,J);4.I=$.25(J,{},4.X,4.I);4.T=$.25(J,{},4.X,4.T);4.S=$.25(J,{},4.X,4.S);4.W=$.25(J,{},4.X,4.W);u(B 4.W.2L!=\'15\')4.W.2L=R;u(B 4.W.3u!=\'A\')4.W.3u=$.1t.1u.3T;u(B 4.I.13!=\'15\')4.I.13=J;u(B 4.I.2u!=\'15\')4.I.2u=J;u(B 4.I.3v!=\'O\')4.I.3v=0;u(B 4.I.1Q!=\'O\')4.I.1Q=(4.I.Z<10)?4F:4.I.Z*5};q.3U=A(){u($w.M(\'1R\')==\'3V\'||$w.M(\'1R\')==\'4G\'){1a(\'4H 4I-4J "1R" 4K 4L "4M" 4N "3W".\')}r.M({1R:\'3W\',4O:\'3X\',2v:$w.M(\'2v\'),26:$w.M(\'26\'),27:$w.M(\'27\'),2w:$w.M(\'2w\')});$w.18(\'3Y\',{24:$w.M(\'24\'),2p:$w.M(\'2p\'),2v:$w.M(\'2v\'),26:$w.M(\'26\'),27:$w.M(\'27\'),2w:$w.M(\'2w\'),\'3w\':$w.M(\'3w\'),1R:$w.M(\'1R\'),2I:$w.M(\'2I\'),1F:$w.M(\'1F\')}).M({2v:0,26:0,27:0,2w:0,\'3w\':\'3x\',1R:\'3V\'});u(4.U){H($w).1z(A(){C m=1H($(V).M(4.z[8]));u(1S(m))m=0;$(V).18(\'1m\',m)})}};q.3Z=A(){q.3y();$w.19(\'1B\',A(e,g){u(B g!=\'15\')g=R;u(g)2x=J;u(2M!=29)4P(2M);u(2N!=29)3z(2N);u(2O!=29)3z(2O);C a=4.I.1Q-2a,1T=2y-1A.2P(a*2y/4.I.1Q);u(1T!=0){u(4.I.41)4.I.41.1i($1e,1T,a)}});$w.19(\'13\',A(e,d,f,g){$w.G(\'1B\');u(!4.I.13)D;u(B g!=\'15\'){u(B f==\'15\')g=f;F u(B d==\'15\')g=d;F g=R}u(B f!=\'O\'){u(B d==\'O\')f=d;F f=0}u(d!=\'T\'&&d!=\'S\')d=1E;u(g)2x=R;u(2x)D;C a=4.I.1Q-2a,42=a+f;1T=2y-1A.2P(a*2y/4.I.1Q);2M=43(A(){u($w.1v(\':2Q\')){$w.G(\'13\',d)}F{2a=0;$w.G(d,4.I)}},42);u(4.I.2b===\'4Q\'){2N=44(A(){2a+=50},50)}u(4.I.45&&1T==0){4.I.45.1i($1e,1T,a)}u(4.I.46){2O=43(A(){4.I.46.1i($1e,1T,a)},f)}});$w.19(\'T S\',A(e){u(2x||$w.1v(\':2Q\')||$w.1v(\':3X\')){e.47();D}u(4.y.2K>=L){1a(\'2c 48 y: 2R 2S\');e.47();D}2a=0});u(4.2r){$w.19(\'T\',A(e,a,b){u(B a==\'O\')b=a;u(B a!=\'1n\')a=4.T;u(B b!=\'O\')b=(B a.y==\'O\')?a.y:4.y.E;2z=b;4.y.1G=4.y.E;C c=H($w);u(4.U){1f(c,4)}4.y.E=4a($w,4,2z);b=4.y.E-4.y.1G+2z;u(b<=0){4.y.E=2s($w,4,L-2z);b=2z}u(4.U){1f(c,4,J)}$w.G(\'2T\',[a,b])});$w.19(\'S\',A(e,a,b){u(B a==\'O\')b=a;u(B a!=\'1n\')a=4.S;u(B b!=\'O\')b=(B a.y==\'O\')?a.y:4.y.E;4.y.1G=4.y.E;C c=H($w);u(4.U){1f(c,4)}4.y.E=2s($w,4,b);u(4.y.1G-b>=4.y.E){4.y.E=2s($w,4,++b)}u(4.U){1f(c,4,J)}$w.G(\'2U\',[a,b])})}F{$w.19(\'T\',A(e,a,b){$w.G(\'2T\',[a,b])});$w.19(\'S\',A(e,a,b){$w.G(\'2U\',[a,b])})}$w.19(\'2T\',A(e,d,f){u(B d==\'O\')f=d;u(B d!=\'1n\')d=4.T;u(B f!=\'O\')f=(B d.y==\'O\')?d.y:4.y.E;u(B f!=\'O\')D 1a(\'2c a 2V O: 2R 2S\');u(d.2W&&!d.2W.1i($1e))D;u(!4.1I){C g=L-P;u(g-f<0){f=g}u(P==0){f=0}}P+=f;u(P>=L)P-=L;u(!4.1I){u(P==0&&f!=0&&d.2X)d.2X.1i($1e);u(4.2Y){u(f==0){$w.G(\'S\',L-4.y.E);D}}F 1U(4,P)}u(f==0)D;H($w,\':1J(\'+(L-f-1)+\')\').4R($w);u(L<4.y.E+f){H($w,\':1j(\'+((4.y.E+f)-L)+\')\').2Z(J).2A($w)}C h=4b($w,4,f),1o=3A($w,4),1V=H($w,\':1q(\'+(f-1)+\')\'),1w=h.1r(\':2d\'),1K=1o.1r(\':2d\');u(4.U){1f(1w,4);1f(1o,4)}u(4.U==\'I\'){C p=2J(3A($w,4,f),4)}C i=2e(H($w,\':1j(\'+f+\')\'),4,0),1L=30(2f(1o,4,J),4,!4.U);u(4.U){1f(1w,4,4.K[4.z[10]]);1f(1V,4,4.K[4.z[12]])}u(4.U==\'I\'){4.K[4.z[9]]=p[1];4.K[4.z[10]]=p[0];4.K[4.z[11]]=p[1];4.K[4.z[12]]=p[0]}C j={},3B={},2g={},2h={},N=d.Z;u(d.1p==\'3x\')N=0;F u(N==\'I\')N=4.X.Z/4.X.y*f;F u(N<=0)N=0;F u(N<10)N=i/N;C k={Z:N,1b:d.1b};u(d.31)d.31.1i($1e,h,1o,1L,N);u(4.U){C l=4.K[4.z[12]];2g[4.z[8]]=1V.18(\'1m\');3B[4.z[8]]=1K.18(\'1m\')+4.K[4.z[10]];2h[4.z[8]]=1w.18(\'1m\');1V.1W().1g(2g,k);1K.1W().1g(3B,k);1w.1W().1g(2h,k)}F{C l=0}j[4.z[6]]=l;u(4[4.z[0]]==\'16\'||4[4.z[3]]==\'16\'){r.1W().1g(1L,k)}1s(d.1p){Q\'1M\':Q\'1N\':Q\'1x\':C m=$w.2Z().2A(r);14}1s(d.1p){Q\'1x\':H(m,\':1j(\'+f+\')\').1k();Q\'1M\':Q\'1N\':H(m,\':1J(\'+(4.y.1G-1)+\')\').1k();14}1s(d.1p){Q\'2i\':1C(d,$w,0,N);14;Q\'1M\':m.M({2j:0});1C(d,m,1,N);1C(d,$w,1,N,A(){m.1k()});14;Q\'1N\':3C(d,$w,m,4,N,J);14;Q\'1x\':3D(d,m,4,N,J);14}1s(d.1p){Q\'2i\':Q\'1M\':Q\'1N\':Q\'1x\':2k=N;N=0;14}C n=f;$w.M(4.z[6],-i);$w.1g(j,{Z:N,1b:d.1b,1X:A(){C a=4.y.E+n-L;u(a>0){H($w,\':1J(\'+(L-1)+\')\').1k();h=H($w,\':1J(\'+(L-(n-a)-1)+\')\').4c().4S(H($w,\':1j(\'+a+\')\').4c())}u(4.U){C b=H($w,\':1q(\'+(4.y.E+f-1)+\')\');b.M(4.z[8],b.18(\'1m\'))}C c=(d.32)?A(){d.32.1i($1e,h,1o,1L)}:R;1s(d.1p){Q\'2i\':1C(d,$w,1,2k,c);14;Q\'1x\':$w.1g({2j:\'+=0\'},{Z:2k,1X:c});14;3E:u(c)c();14}}});$w.G(\'1Y\').G(\'13\',N)});$w.19(\'2U\',A(e,f,g){u(B f==\'O\')g=f;u(B f!=\'1n\')f=4.S;u(B g!=\'O\')g=(B f.y==\'O\')?f.y:4.y.E;u(B g!=\'O\')D 1a(\'2c a 2V O: 2R 2S\');u(f.2W&&!f.2W.1i($1e))D;u(!4.1I){u(P==0){u(g>L-4.y.E){g=L-4.y.E}}F{u(P-g<4.y.E){g=P-4.y.E}}}P-=g;u(P<0)P+=L;u(!4.1I){u(P==4.y.E&&g!=0&&f.2X)f.2X.1i($1e);u(4.2Y){u(g==0){$w.G(\'T\',L-4.y.E);D}}F 1U(4,P)}u(g==0)D;u(L<4.y.E+g)H($w,\':1j(\'+((4.y.E+g)-L)+\')\').2Z(J).2A($w);C h=4d($w,4),1o=3F($w,4,g),1V=h.1r(\':1q(\'+(g-1)+\')\'),1w=h.1r(\':2d\'),1K=1o.1r(\':2d\');u(4.U){1f(1w,4);1f(1K,4)}u(4.U==\'I\'){C p=2J(3F($w,4,g),4)}C i=2e(H($w,\':1j(\'+g+\')\'),4,0),1L=30(2f(1o,4,J),4,!4.U);u(4.U){1f(1w,4,4.K[4.z[10]]);1f(1K,4,4.K[4.z[10]])}u(4.U==\'I\'){4.K[4.z[9]]=p[1];4.K[4.z[10]]=p[0];4.K[4.z[11]]=p[1];4.K[4.z[12]]=p[0]}C j={},2h={},2g={},N=f.Z;u(f.1p==\'3x\')N=0;F u(N==\'I\')N=4.X.Z/4.X.y*g;F u(N<=0)N=0;F u(N<10)N=i/N;C k={Z:N,1b:f.1b};u(f.31)f.31.1i($1e,h,1o,1L,N);u(4.U){2h[4.z[8]]=1w.18(\'1m\');2g[4.z[8]]=1V.18(\'1m\')+4.K[4.z[12]];1K.M(4.z[8],1K.18(\'1m\')+4.K[4.z[10]]);1w.1W().1g(2h,k);1V.1W().1g(2g,k)}j[4.z[6]]=-i;u(4[4.z[0]]==\'16\'||4[4.z[3]]==\'16\'){r.1W().1g(1L,k)}1s(f.1p){Q\'1M\':Q\'1N\':Q\'1x\':C l=$w.2Z().2A(r);14}1s(f.1p){Q\'1M\':Q\'1N\':H(l,\':1j(\'+g+\')\').1k();Q\'1x\':H(l,\':1J(\'+(4.y.E-1)+\')\').1k();14}1s(f.1p){Q\'2i\':1C(f,$w,0,N);14;Q\'1M\':l.M({2j:0});1C(f,l,1,N);1C(f,$w,1,N,A(){l.1k()});14;Q\'1N\':3C(f,$w,l,4,N,R);14;Q\'1x\':3D(f,l,4,N,R);14}1s(f.1p){Q\'2i\':Q\'1M\':Q\'1N\':Q\'1x\':2k=N;N=0;14}C m=g;$w.1g(j,{Z:N,1b:f.1b,1X:A(){C a=4.y.E+m-L;$w.M(4.z[6],4.K[4.z[12]]);u(a>0){H($w,\':1J(\'+(L-1)+\')\').1k()}C b=H($w,\':1j(\'+m+\')\').2A($w).1r(\':2d\');u(a>0){1o=3t($w,4)}u(4.U){u(L<4.y.E+m){C c=H($w,\':1q(\'+(4.y.E-1)+\')\');c.M(4.z[8],c.18(\'1m\')+4.K[4.z[12]])}b.M(4.z[8],b.18(\'1m\'))}C d=(f.32)?A(){f.32.1i($1e,h,1o,1L)}:R;1s(f.1p){Q\'2i\':1C(f,$w,1,2k,d);14;Q\'1x\':$w.1g({2j:\'+=0\'},{Z:2k,1X:d});14;3E:u(d)d();14}}});$w.G(\'1Y\').G(\'13\',N)});$w.19(\'1Z\',A(e,a,b,c,d){u($w.1v(\':2Q\'))D;a=2B(a,b,c,P,L,$w);u(a==0)D;u(B d!=\'1n\')d=R;u(4.1I){u(a<L/2)$w.G(\'S\',[d,a]);F $w.G(\'T\',[d,L-a])}F{u(P==0||P>a)$w.G(\'S\',[d,a]);F $w.G(\'T\',[d,L-a])}});$w.19(\'4e\',A(e,a,b,c,d){u(B a==\'1n\'&&B a.2C==\'1c\')a=$(a);u(B a==\'1l\')a=$(a);u(B a!=\'1n\'||B a.2C==\'1c\'||a.Y==0)D 1a(\'2c a 2V 1n.\');u(B b==\'1c\'||b==\'4f\'){$w.3G(a)}F{b=2B(b,d,c,P,L,$w);C f=H($w,\':1q(\'+b+\')\');u(4.U){a.1z(A(){C m=1H($(V).M(4.z[8]));u(1S(m))m=0;$(V).18(\'1m\',m)})}u(f.Y){u(b<P)P+=a.Y;u(P>=L)P-=L;f.4T(a)}F{$w.3G(a)}}L=H($w).Y;$w.G(\'2l\');2D($w,4);2E(4,L);1U(4,P);$w.G(\'1Y\',J)});$w.19(\'4g\',A(e,a,b,c){u(B a==\'1c\'||a==\'4f\'){H($w,\':2d\').1k()}F{a=2B(a,c,b,P,L,$w);C d=H($w,\':1q(\'+a+\')\');u(d.Y){u(a<P)P-=d.Y;d.1k()}}L=H($w).Y;2D($w,4);2E(4,L);1U(4,P);$w.G(\'1Y\',J)});$w.19(\'2l\',A(e,a,b){u(B a==\'1c\'||a.Y==0)a=$(\'4U\');F u(B a==\'1l\')a=$(a);u(B a!=\'1n\')D 1a(\'2c a 2V 1n.\');u(B b!=\'1l\'||b.Y==0)b=\'a.4h\';a.4V(b).1z(A(){C h=V.4i||\'\';u(h.Y>0&&H($w).4j($(h))!=-1){$(V).1d(\'2m\').2m(A(e){e.1D();$w.G(\'1Z\',h)})}})});$w.19(\'33\',A(e,a){u(P==0)C b=0;F C b=L-P;u(B a==\'A\')a.1i($1e,b)});$w.19(\'20\',A(e,a,b,c){u($w.1v(\':2Q\')){C d=44(A(){$w.G(\'20\',[a,b,c]);3z(d)},2y);D}u(B c!=\'15\')c=J;u(B a==\'A\'){a.1i($1e,4)}F u(B b==\'A\'){C f=3H(\'4.\'+a);u(B f==\'1c\')f=\'\';b.1i($1e,f)}F u(B a!=\'1c\'&&B b!=\'1c\'){3H(\'2q.\'+a+\' = b\');u(c){1f(H($w),4);q.3m(2q);2D($w,4)}F{3H(\'4.\'+a+\' = b\')}}});$w.19(\'21\',A(e,a){u(a){$w.G(\'1Z\',[0,0,J,{Z:0}])}u(4.U){1f(H($w),4)}$w.G(\'1B\').M($w.18(\'3Y\'));q.3y();q.4k();r.4W($w)});$w.19(\'1Y\',A(e,b){u(!4.W.1h)D;u(B b==\'15\'&&b){H(4.W.1h).1k();23(C a=0;a<1A.2P(L/4.y.E);a++){C i=H($w,\':1q(\'+2B(a*4.y.E,0,J,P,L,$w)+\')\');4.W.1h.3G(4.W.3u(a+1,i))}H(4.W.1h).1d(\'2m\').1z(A(a){$(V).2m(A(e){e.1D();$w.G(\'1Z\',[a*4.y.E,0,J,4.W])})})}C c=1A.2P(L/4.y.E-1);u(P==0)C d=0;F u(P<L%4.y.E)C d=0;F u(P==4.y.E&&!4.1I)C d=c;F C d=1A.4X((L-P)/4.y.E);u(d<0)d=0;u(d>c)d=c;H(4.W.1h).2F(\'3l\').1r(\':1q(\'+d+\')\').34(\'3l\')})};q.3y=A(){$w.1d(\'1B\').1d(\'13\').1d(\'T\').1d(\'S\').1d(\'2T\').1d(\'2U\').1d(\'1Z\').1d(\'4e\').1d(\'4g\').1d(\'2l\').1d(\'21\').1d(\'1Y\').1d(\'33\').1d(\'20\')};q.4l=A(){2E(4,\'3I\');1U(4,P);u(4.I.2b&&4.I.13){r.35(A(){$w.G(\'1B\')},A(){$w.G(\'13\')})}u(4.T.17){4.T.17.2m(A(e){e.1D();$w.G(\'T\')});u(4.T.2b&&4.I.13){4.T.17.35(A(){$w.G(\'1B\')},A(){$w.G(\'13\')})}}u(4.S.17){4.S.17.2m(A(e){e.1D();$w.G(\'S\')});u(4.S.2b&&4.I.13){4.S.17.35(A(){$w.G(\'1B\')},A(){$w.G(\'13\')})}}u($.1t.1y){u(4.T.1y){r.1y(A(e,a){u(a>0){e.1D();36=(B 4.T.1y==\'O\')?4.T.1y:\'\';$w.G(\'T\',36)}})}u(4.S.1y){r.1y(A(e,a){u(a<0){e.1D();36=(B 4.S.1y==\'O\')?4.S.1y:\'\';$w.G(\'S\',36)}})}}u(4.W.1h){$w.G(\'1Y\',J);u(4.W.2b&&4.I.13){4.W.1h.35(A(){$w.G(\'1B\')},A(){$w.G(\'13\')})}}u(4.S.1O||4.T.1O){$(4m).4n(A(e){C k=e.4o;u(k==4.S.1O){e.1D();$w.G(\'S\')}u(k==4.T.1O){e.1D();$w.G(\'T\')}})}u(4.W.2L){$(4m).4n(A(e){C k=e.4o;u(k>=49&&k<58){k=(k-49)*4.y.E;u(k<=L){e.1D();$w.G(\'1Z\',[k,0,J,4.W])}}})}u(4.I.13){$w.G(\'13\',4.I.3v);u($.1t.2u&&4.I.2u){$w.2u(\'1B\',\'13\')}}};q.4k=A(){2E(4,\'3J\');1U(4,\'2F\');u(4.W.1h){H(4.W.1h).1k()}};q.20=A(a,b){1a(\'3a "20" 3b 3c 1v 3d, 3e 3f "20" 3g 3h.\');C c=R;C d=A(a){c=a};u(!a)a=d;u(!b)b=d;$w.G(\'20\',[a,b]);D c};q.4p=A(){1a(\'3a "4p" 3b 3c 1v 3d, 3e 3f "33" 3g 3h.\');C b=R;$w.G(\'33\',A(a){b=a});D b};q.21=A(){1a(\'3a "21" 3b 3c 1v 3d, 3e 3f "21" 3g 3h.\');$w.G(\'21\');D q};q.4q=A(a,b){1a(\'3a "4q" 3b 3c 1v 3d, 3e 3f "2l" 3g 3h.\');$w.G(\'2l\',[a,b]);D q};u($w.28().1v(\'.4r\')){C r=$w.28();$w.G(\'21\')}C r=$w.4Y(\'<4Z 51="4r" />\').28(),4={},2q=o,L=H($w).Y,P=0,2M=29,2N=29,2O=29,2a=0,2x=R,1E=\'S\';q.3m(2q,J);q.3U();q.3Z();q.4l();$w.G(\'2l\');2D($w,4,R);u(4.y.1P!==0&&4.y.1P!==R){C s=4.y.1P;u(s===J){s=3i.52.4i;u(!s.Y)s=0}u(s===\'4s\'){s=1A.3q(1A.4s()*L)}$w.G(\'1Z\',[s,0,J,{Z:0}])}D V};$.1t.1u.3n={2Y:J,1I:J,1E:\'1F\',y:{1P:0},X:{1b:\'53\',2b:R,1y:R}};$.1t.1u.3T=A(a,b){D\'<a 54="#"><4t>\'+a+\'</4t></a>\'};A 1C(a,c,x,d,f){C o={Z:d,1b:a.1b};u(B f==\'A\')o.1X=f;c.1g({2j:x},o)}A 3C(a,b,c,o,d,e){C f=2f(H(c),o,J)[0],3j=(e)?-f:f,22={},2n={};22[o.z[0]]=f;22[o.z[6]]=3j;2n[o.z[6]]=0;b.1g({2j:\'+=0\'},d);c.M(22).1g(2n,{Z:d,1b:a.1b,1X:A(){$(V).1k()}})}A 3D(a,c,o,d,b){C e=2f(H(c),o,J)[0],3j=(b)?e:-e,22={},2n={};22[o.z[0]]=e;2n[o.z[6]]=3j;c.M(22).1g(2n,{Z:d,1b:a.1b,1X:A(){$(V).1k()}})}A 2E(o,t){u(t==\'3I\'||t==\'3J\'){C f=t}F u(o.y.2K>=t){1a(\'2c 48 y: 2R 2S\');C f=\'3J\'}F{C f=\'3I\'}u(o.T.17)o.T.17[f]();u(o.S.17)o.S.17[f]();u(o.W.1h)o.W.1h[f]()}A 1U(o,f){u(o.1I||o.2Y)D;C a=(f==\'2F\'||f==\'34\')?f:R;u(o.S.17){C b=a||(f==o.y.E)?\'34\':\'2F\';o.S.17[b](\'4u\')}u(o.T.17){C b=a||(f==0)?\'34\':\'2F\';o.T.17[b](\'4u\')}}A 3K(k){u(k==\'3N\')D 39;u(k==\'1F\')D 37;u(k==\'3M\')D 38;u(k==\'55\')D 40;D-1}A 2H(a){u(B a==\'1c\')a={};D a}A 2t(a,b,c){u(B b!=\'15\')b=R;u(B c!=\'15\')c=R;a=2H(a);u(B a==\'1l\'){C d=3K(a);u(d==-1)a=$(a);F a=d}u(b){u(B a==\'15\')a={2L:a};u(B a.2C!=\'1c\')a={1h:a};u(B a.1h==\'1l\')a.1h=$(a.1h)}F u(c){u(B a==\'15\')a={13:a};u(B a==\'O\')a={1Q:a};u(B a.4v!=\'1n\')a.4v={}}F{u(B a.2C!=\'1c\')a={17:a};u(B a==\'O\')a={1O:a};u(B a.17==\'1l\')a.17=$(a.17);u(B a.1O==\'1l\')a.1O=3K(a.1O)}D a}A 2B(a,b,c,d,e,f){u(B a==\'1l\'){u(1S(a))a=$(a);F a=1H(a)}u(B a==\'1n\'){u(B a.2C==\'1c\')a=$(a);a=H(f).4j(a);u(a==-1)a=0;u(B c!=\'15\')c=R}F{u(B c!=\'15\')c=J}u(1S(a))a=0;F a=1H(a);u(1S(b))b=0;F b=1H(b);u(c){a+=d}a+=b;u(e>0){4w(a>=e){a-=e}4w(a<0){a+=e}}D a}A H(c,f){u(B f!=\'1l\')f=\'\';D $(\'> *\'+f,c)}A 3t(c,o){D H(c,\':1j(\'+o.y.E+\')\')}A 4b(c,o,n){D H(c,\':1j(\'+(o.y.1G+n)+\'):1J(\'+(n-1)+\')\')}A 3A(c,o){D H(c,\':1j(\'+o.y.E+\')\')}A 4d(c,o){D H(c,\':1j(\'+o.y.1G+\')\')}A 3F(c,o,n){D H(c,\':1j(\'+(o.y.E+n)+\'):1J(\'+(n-1)+\')\')}A 1f(i,o,m){C x=(B m==\'15\')?m:R;u(B m!=\'O\')m=0;i.1z(A(){C t=1H($(V).M(o.z[8]));u(1S(t))t=0;$(V).18(\'4x\',t);$(V).M(o.z[8],((x)?$(V).18(\'4x\'):m+$(V).18(\'1m\')))})}A 2f(i,o,a){4y=2e(i,o,0,a);4z=2G(i,o,3,a);D[4y,4z]}A 2G(i,o,a,b){u(B b!=\'15\')b=R;u(B o[o.z[a]]==\'O\'&&b)D o[o.z[a]];u(B o.y[o.z[a]]==\'O\')D o.y[o.z[a]];D 3o(i,o,a+2)}A 3o(i,o,a){C s=0;i.1z(A(){C m=$(V)[o.z[a]](J);u(s<m)s=m});D s}A 3r(b,o,c){C d=b[o.z[c]](),3L=(o.z[c].56().57(\'24\')>-1)?[\'59\',\'5a\']:[\'5b\',\'5c\'];23(a=0;a<3L.Y;a++){C m=1H(b.M(3L[a]));u(1S(m))m=0;d-=m}D d}A 2e(i,o,a,b){u(B b!=\'15\')b=R;u(B o[o.z[a]]==\'O\'&&b)D o[o.z[a]];u(B o.y[o.z[a]]==\'O\')D o.y[o.z[a]]*i.Y;D 4A(i,o,a+2)}A 4A(i,o,a){C s=0;i.1z(A(){s+=$(V)[o.z[a]](J)});D s}A 3p(i,o,a){C s=R,v=R;i.1z(A(){c=$(V)[o.z[a]]();u(s===R)s=c;F u(s!=c)v=J});D v}A 30(a,o,p){u(B p!=\'15\')p=J;C b=(o.U&&p)?o.K:[0,0,0,0];C c={};c[o.z[0]]=a[0]+b[1]+b[3];c[o.z[3]]=a[1]+b[0]+b[2];D c}A 2D(a,o,p){C b=a.28(),$i=H(a),$l=$i.1r(\':1q(\'+(o.y.E-1)+\')\');b.M(30(2f($i.1r(\':1j(\'+o.y.E+\')\'),o,J),o,p));u(o.U){$l.M(o.z[8],$l.18(\'1m\')+o.K[o.z[10]]);a.M(o.z[7],o.K[o.z[9]]);a.M(o.z[6],o.K[o.z[12]])}a.M(o.z[0],2e($i,o,0)*2);a.M(o.z[3],2G($i,o,3))}A 3S(p){u(B p==\'1c\')D[0,0,0,0];u(B p==\'O\')D[p,p,p,p];F u(B p==\'1l\')p=p.4B(\'5d\').5e(\'\').4B(\' \');u(B p!=\'1n\'){D[0,0,0,0]}23(i 5f p){p[i]=1H(p[i])}1s(p.Y){Q 0:D[0,0,0,0];Q 1:D[p[0],p[0],p[0],p[0]];Q 2:D[p[0],p[1],p[0],p[1]];Q 3:D[p[0],p[1],p[2],p[1]];3E:D[p[0],p[1],p[2],p[3]]}}A 2J(a,o){C b=(B o[o.z[3]]==\'O\')?o[o.z[3]]:2G(a,o,3);D[(o[o.z[0]]-2e(a,o,0))/2,(b-2G(a,o,3))/2]}A 4a(b,o,c){C d=H(b),2o=0,1P=o.y.E-c-1,x=0;u(1P<0)1P=d.Y-1;23(C a=1P;a>=0;a--){2o+=d.1r(\':1q(\'+a+\')\')[o.z[2]](J);u(2o>o.3s)D x;u(a==0)a=d.Y;x++}}A 2s(b,o,c){C d=H(b),2o=0,x=0;23(C a=c;a<=d.Y-1;a++){2o+=d.1r(\':1q(\'+a+\')\')[o.z[2]](J);u(2o>o.3s)D x;u(a==d.Y-1)a=-1;x++}}A 1a(m){u(B m==\'1l\')m=\'1u: \'+m;u(3i.3k&&3i.3k.1a)3i.3k.1a(m);F 5g{3k.1a(m)}5h(5i){}D R}$.1t.4h=A(o){D V.1u(o)}})(5j);',62,330,'||||opts||||||||||||||||||||||||||if||cfs||items|dimensions|function|typeof|var|return|visible|else|trigger|getItems|auto|true|padding|totalItems|css|a_dur|number|firstItem|case|false|next|prev|usePadding|this|pagination|scroll|length|duration||||play|break|boolean|variable|button|data|bind|log|easing|undefined|unbind|tt0|resetMargin|animate|container|call|lt|remove|string|cfs_origCssMargin|object|c_new|fx|eq|filter|switch|fn|carouFredSel|is|l_old|uncover|mousewheel|each|Math|pause|fx_fade|preventDefault|direction|left|oldVisible|parseInt|circular|gt|l_new|w_siz|crossfade|cover|key|start|pauseDuration|position|isNaN|perc|enableNavi|l_cur|stop|complete|updatePageStatus|slideTo|configuration|destroy|css_o|for|width|extend|marginRight|marginBottom|parent|null|pauseTimePassed|pauseOnHover|Not|last|getTotalSize|getSizes|a_cur|a_old|fade|opacity|f_dur|linkAnchors|click|ani_o|total|height|opts_orig|variableVisible|getVisibleItemsNext|getNaviObject|nap|marginTop|marginLeft|pausedGlobal|100|oI|appendTo|getItemIndex|jquery|setSizes|showNavi|removeClass|getLargestSize|getObject|top|getAutoPadding|minimum|keys|autoTimeout|autoInterval|timerInterval|ceil|animated|not|scrolling|slidePrev|slideNext|valid|conditions|onEnd|infinite|clone|mapWrapperSizes|onBefore|onAfter|currentPosition|addClass|hover|num||||The|public|method|deprecated|use|the|custom|event|window|cur_p|console|selected|init|defaults|getTrueLargestSize|hasVariableSizes|floor|getTrueInnerSize|maxDimention|getCurrentItems|anchorBuilder|delay|float|none|unbind_events|clearInterval|getNewItemsPrev|a_new|fx_cover|fx_uncover|default|getNewItemsNext|append|eval|show|hide|getKeyCode|arr|up|right|innerWidth|outerWidth|innerHeight|outerHeight|getPadding|pageAnchorBuilder|build|absolute|relative|hidden|cfs_origCss|bind_events||onPausePause|dur2|setTimeout|setInterval|onPauseEnd|onPauseStart|stopImmediatePropagation|enough||getVisibleItemsPrev|getOldItemsPrev|get|getOldItemsNext|insertItem|end|removeItem|caroufredsel|hash|index|unbind_buttons|bind_buttons|document|keyup|keyCode|current_position|link_anchors|caroufredsel_wrapper|random|span|disabled|timer|while|cfs_tempCssMargin|s1|s2|getTotalSizeVariable|split|No|element|500|2500|fixed|Carousels|CSS|attribute|should|be|static|or|overflow|clearTimeout|resume|prependTo|concat|before|body|find|replaceWith|round|wrap|div||class|location|swing|href|down|toLowerCase|indexOf||paddingLeft|paddingRight|paddingTop|paddingBottom|px|join|in|try|catch|err|jQuery'.split('|'),0,{}))

	if (!window.getCookieEditorial)
	{
		function getCookieEditorial(name)
		{
		  var cookie, offset, end;
		  cookie  = " "+document.cookie;
		  offset  = cookie.indexOf(" "+name+"=");
		  if (offset == -1)
		  {
			  return undefined;
		  }
		  offset += name.length+2;
		  end     = cookie.indexOf(";", offset);
		  if (end    == -1)
		  {
			  end = cookie.length;
		  }
		  return unescape(cookie.substring(offset, end));
		}
	
	
	}

jQuery(document).ready(function() {
	if ($(".ad-gallery-home").length > 0) { var galleries = $('.ad-gallery-home').adGallery({target:"_top",slideshow: {enable: true,autostart: true,speed: 5000,start_label: 'Iniciar',stop_label: 'Detener',stop_on_scroll: true,countdown_prefix: '(', countdown_sufix: ')'},effect: 'fade'}); }
	if ($(".slidenav").length > 0) { $.slidenav({ animspeed: 'medium', hideonout: 'true' }); }
	if (jQuery('#slider').length > 0){jQuery('#slider').nivoSlider({pauseTime:5000});}
	if (jQuery('#pikame').length > 0){jQuery("#pikame").PikaChoose();jQuery("#pikame").jcarousel({scroll:4,initCallback: function(carousel) {jQuery(carousel.list).find('img').click(function() {carousel.scroll(parseInt(jQuery(this).parents('.jcarousel-item').attr('jcarouselindex')));});}});}
	if (jQuery('.scrollable').length > 0){jQuery(".scrollable").scrollable({ vertical: true, mousewheel: true });	}
	if (jQuery('#scroller').length > 0){$("#scroller").scrollable({circular: true,speed: 800}).autoscroll({ interval: 5000 }).navigator();}
	if (jQuery('.scrollable2').length > 0) { jQuery(".scrollable2").scrollable({next:"#foo1_next1",prev:"#foo1_prev1",circular: true});}
	jQuery('a[href^="http\\:\\/\\/www.youtube.com\\/watch?v="], .video_youtube').each(function( intIndex ){var src=jQuery(this).attr("href");id=src.replace("http://www.youtube.com/watch?v=", "");id=id.replace("&amp;", "&");fragmentoTexto = id.split('&');id=fragmentoTexto[0];int_with=560;int_heigth=340;if (typeof fragmentoTexto[2] != 'undefined'){int_with	= fragmentoTexto[1].split('=');int_heigth	= fragmentoTexto[2].split('=');if (typeof int_with[1] != 'undefined') { int_with=int_with[1]; }if (typeof int_heigth[1] != 'undefined') { int_heigth=int_heigth[1]; }}jQuery(this).replaceWith('<object width="'+int_with+'" height="'+int_heigth+'"><param name="movie" value="http://www.youtube.com/v/'+id+'?fs=1&amp;hl=es_ES&amp;rel=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/'+id+'?fs=1&amp;hl=es_ES&amp;rel=0" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="'+int_with+'" height="'+int_heigth+'"></embed></object>');});
	jQuery("img[src='http://s0.2mdn.net/viewad/817-grey.gif']").parent().parent().hide();
	if ($(".ad-gallery").length > 0) {var galleries = $('.ad-gallery').adGallery({slideshow: {enable: true,autostart: true,speed: 15000,start_label: '<img src="http://editorial.televisa.com/img/vanidades/v2/player_r1_c3.png" />',stop_label: '<img src="http://editorial.televisa.com/img/vanidades/v2/player_r1_c7.png" />',stop_on_scroll: true,countdown_prefix: '(',countdown_sufix: ')'},loader_image: 'http://editorial.televisa.com/img/ad-gallery/loader.gif',effect: 'fade',width: 608,height: 427, description_wrapper: $('.ad-image-descripcion'),enable_keyboard_move: true,cycle: true,callbacks: {afterImageVisible: function() { actualizabannesGaleria();}}});}
	if ($("#foo2").length > 0) 	{	$("#foo2").carouFredSel({auto    : true,scroll : {mousewheel		: true,items           : 1,duration        : 1000,pauseOnHover    : true},prev    : { button  : "#foo1_prev" },next    : { button  : "#foo1_next" }});	}
	if (jQuery("#footer:contains('Contenido no disponible')").length > 0) {var html=jQuery("#footer").html();html=html.replace('Contenido no disponible','<div id="car_footer_v2"></div>');jQuery("#footer").html(html);jQuery.getJSON("http://editorial.televisa.com/footer.v2/index2.php?sitio=cosmopolitan&jsoncallback=?",{},function(data) {$('#car_footer_v2').html(data.html);$("#foo2").carouFredSel({auto    : true,scroll : {mousewheel		: true,items           : 1,duration        : 1000,pauseOnHover    : true},prev    : { button  : "#foo1_prev" },next    : { button  : "#foo1_next" }});});}
	jQuery('.ad-forward, .ad-back, .nivo-imageLink, .nivo-prevNav, .nivo-prevNav, .nivo-controlNav a, .pika-imgnav a').click(function() { pageTracker._trackPageview(bannerPath+"_galeria"); if (tipoArticulo=='galeria') {recargaBannersDinamicos(); } });
	jQuery("img[src='http://s0.2mdn.net/viewad/817-grey.gif']").parent().parent().hide();
	if ((document.domain=="www.cosmoenespanol.com")&&(typeof(MN_geo)!="undefined")&&(MN_geo.country=="USA"))
	{
		jQuery(".suscripcion .sus_txt").html('<p></p><p><a target="_blank" href="https://secure.palmcoastd.com/pcd/eSv?iMagId=15504&i4Ky=IKOS&iLang=b"><img src="http://editorial.televisa.com/img/cosmopolitan/sus_r1_c1.gif"></a><a href="https://secure.palmcoastd.com/pcd/eSv?iMagId=15504&i4Ky=IKOS&iLang=b">Edici&oacute;n impresa</a></p><p><a target="_blank" href="http://www.zinio.com/checkout/publisher/?productId=500638957&offer=500392937&pss=1&bd=1"><img src="http://editorial.televisa.com/img/cosmopolitan/sus_r3_c1.gif"></a><a href="http://www.zinio.com/checkout/publisher/?productId=500638957&offer=500392937&pss=1&bd=1">Edici&oacute;n digital</a></p>');
		jQuery(".portada_sus .sus_ligas").html('<img width="147" height="16" src="http://editorial.televisa.com/img/caras/bt_suscribete_tit.gif"><br><a href="http://www.zinio.com/checkout/publisher/?productId=500638957&offer=500392937&pss=1&bd=1"><img src="http://editorial.televisa.com/img/caras/bt_suscrip3_r1_c1.png" class="sus_ligas_img"></a><span class="link_sus"><a href="http://www.zinio.com/checkout/publisher/?productId=500638957&offer=500392937&pss=1&bd=1" target="_blank">Edici&oacute;n digital</a></span><br>   	            <a href="https://secure.palmcoastd.com/pcd/eSv?iMagId=15504&i4Ky=IKOS&iLang=b"><img src="http://editorial.televisa.com/img/caras/bt_suscrip3_r3_c1.png" class="sus_ligas_img"></a><span class="link_sus"><a href="https://secure.palmcoastd.com/pcd/eSv?iMagId=15504&i4Ky=IKOS&iLang=b" target="_blank">Edición impresa</a></span>');		
	}
	jQuery(".cont_modmas").show();
	
	var usr=null;usr=getCookieEditorial("usr_et");if (typeof(usr)=="undefined"){jQuery(".sin_logear").show();}else{jQuery(".logeado").show();}	
	if ((MN_geo.country=="USA")&&(typeof(agregarUSA)=="function")){agregarUSA();}
	
	if ((jQuery('#btnMEX').length > 0) || (jQuery('#btnUSA').length > 0) ){
		if (MN_geo.country=="USA"){$("#btnUSA").show();	$("#btnMEX").remove();}else{ $("#btnMEX").show();$("#btnUSA").remove();}
	}
	if ((jQuery('#btnSlideMX').length > 0) || (jQuery('#btnSlideUS').length > 0) ){
		if (MN_geo.country=="USA"){$("#btnSlideUS").show();	$("#btnSlideMX").remove();}else{ $("#btnSlideMX").show();$("#btnSlideUS").remove();}
	}
});

function guardaVoto(tipo,url,id)
{
	if (tipo=='positivo')
	{
		comunidades.setnewvote(url,0,1,0);
		jQuery('#angel'+id).html(eval(jQuery('#angel'+id).html())+1);
	}
	else
	{
		comunidades.setnewvote(url,1,0,0);
		jQuery('#demon'+id).html(eval(jQuery('#demon'+id).html())+1);
	}
}
function popup_sharing(pagina) 
{
	// Inicializando variables
	var ancho=600;
	var alto=200;
	var titulo=document.title;
	var url=bannerLiga;
	var w=screen.width;
	var h=screen.height;
	var x=Math.round((w-ancho+1)/2);
	var y=Math.round((h-alto+1)/2);
	// Obteniendo la URL para cada servicio
	switch (pagina)
	{
		case 'twitter':		
			pag='http://twitter.com/home?status=' + escape(titulo + ' ' + url); 
			if (pag.length>140)
			{
				tmp =url;
				pag='http://twitter.com/home?status=' + escape(titulo.substring(0,(140-tmp.length)) + ' ' + url); 
			}
			break;
		case 'facebook':	pag='http://www.facebook.com/share.php?u=' + escape(url) + '&t=padresehijos.com.mx'; break;
		case 'del.icio.us':	pag='http://del.icio.us/post?url=' + escape(url) + '&title=' + escape(titulo); break;
		case 'live':		pag='https://favorites.live.com/quickadd.aspx?marklet=1&url=' + escape(url) + '&title=' + escape(titulo); break;
		case 'google':		pag='http://www.google.com/bookmarks/mark?op=edit&bkmk=' + escape(url) + '&title=' + escape(titulo); break;
		case 'technorati':	pag='http://technorati.com/faves?add=' + escape(url); break;
		case 'yahoo':		
			pag='http://myweb.yahoo.com/myresults/bookmarklet?u=' + escape(url) + '&t=' + escape(titulo) + '&ei=UTF8'; 
			if (pag.length>150)
			{
				pag='http://myweb.yahoo.com/myresults/bookmarklet?u=' + unescape(url) + '&t=' + titulo.substring(0,150) + '&ei=UTF8';
			}
			break;
		case 'linkedin':	
			pag='http://www.linkedin.com/shareArticle?mini=true&url=' + escape(url) + '&title=' + escape(titulo) + '&ro=false&summary=&source=Source'; 
			if (pag.length>150)
			{
				pag='http://www.linkedin.com/shareArticle?mini=true&url=' + escape(url) + '&title=' + escape(titulo.substring(0,150)) + '&ro=false&summary=&source=Source'; 
			}
			break;
		case 'myspace':		pag='http://www.myspace.com/Modules/PostTo/Pages/?u=' + escape(url) + '&t=' + escape(titulo) + '&c=%20'; break;
		case 'plaxo':		pag='http://www.plaxo.com/?share_link=' + escape(url); break;
		case 'meneame':		pag='http://meneame.net/submit.php?url=' + escape(url); break;
	}
	// Crando popup
	var wp ='width='+ancho+',height='+alto+',hotkeys=NO,screenX='+x+',screenY='+y+',left='+x+',top='+y+',scrollbars=1,status=0,toolbar=0,menubar=0,directories=0,resizable=1';
	var pp = window.open(pag,'_blank',wp);
	pp.focus();
} 
function mostrarMas (activa)
{
	jQuery("#tit_mas_visto, #tit_mas_nuevo").removeClass("active");
	jQuery("#tabs_mas_visto, #tabs_mas_nuevo").hide();
	
	jQuery("#tit_"+activa).addClass("active");
	jQuery("#tabs_"+activa).show();
}
function validaCampo(variable,accion,valDefault)
{
	if ((accion=="press")&&(escape(variable.value)==valDefault))
	{
			variable.value="";
	}
	if ((accion=="release")&&(variable.value==""))
	{
			variable.value=unescape(valDefault);
	}
}
function enviarBuscador ()
{
	
	if (jQuery("#frm_buscador").length > 0) 
	{
		jQuery("#frm_buscador").attr("src",'http://googleak.esmas.com/search?q='+escape(limpiarCadena(jQuery("#txt_buscador").val()))+'&btnG=Google+Search&access=p&client=cosmoenespanol&site=cosmoenespanol&sort=date%3AD%3AS%3Ad1&output=xml_no_dtd&proxystylesheet=cosmoenespanol&entqrm=0&oe=UTF-8&ie=UTF-8&ud=1&exclude_apps=1&getfields=*&num=15&entqr=3&start=0&filter=0');
	}
	else
	{
		window.location="http://www.cosmoenespanol.com/busqueda/#"+escape(limpiarCadena(jQuery("#txt_buscador").val()))+"";
	}
}
function enviaTexto2 (sitio,seccion,formulario)
{
	if (jQuery('#iframeFrmTxt').length == 0)
	{
		jQuery("#"+formulario).append('<iframe id="iframeFrmTxt" name="iframeFrmTxt" style="display:none"></iframe>');
	}
	if (jQuery("#"+formulario+" #sitio").length == 0)
	{
		jQuery("#"+formulario).append('<input type="hidden" name="sitio" id="sitio" value="'+sitio+'">');
	}
	if (jQuery("#"+formulario+" #seccion").length == 0)
	{
		jQuery("#"+formulario).append('<input type="hidden" name="seccion" id="seccion" value="'+seccion+'">');
	}
	jQuery("#"+formulario).attr("action","http://editorial.televisa.com/textos/index3.php");
	jQuery("#"+formulario).attr("target","iframeFrmTxt");
	jQuery("#"+formulario).attr("method","post");
	jQuery("#"+formulario).submit();
}
function enviaContacto (sitio,seccion,formulario)
{
	if (jQuery('#iframeFrmTxt').length == 0)
	{
		jQuery("#"+formulario).append('<iframe id="iframeFrmTxt" name="iframeFrmTxt" style="display:none"></iframe>');
	}
	if (jQuery("#"+formulario+" #sitio").length == 0)
	{
		jQuery("#"+formulario).append('<input type="hidden" name="sitio" id="sitio" value="'+sitio+'">');
	}
	if (jQuery("#"+formulario+" #seccion").length == 0)
	{
		jQuery("#"+formulario).append('<input type="hidden" name="seccion" id="seccion" value="'+seccion+'">');
	}
	jQuery("#"+formulario).attr("action","http://editorial.televisa.com/textos/contacto_cosmo_arg.php");
	jQuery("#"+formulario).attr("target","iframeFrmTxt");
	jQuery("#"+formulario).attr("method","post");
	jQuery("#"+formulario).submit();
}
function esmasUpdatePageGalaxy()
{
	for(var i = 0; i < home_000.length; i++) 
	{
		jQuery("#demon"+i).html(home_000[i].positive_votes);
		jQuery("#angel"+i).html(home_000[i].negative_votes);
	}
}


function mostrar(id)
{
	jQuery(".cont_promocion div").hide();
	jQuery(".cont_promocion ."+id).show();
}
function aceptarTerminosPromo (val)
{
	if (val==1)
	{
		jQuery("#btn_participar").show();
	}
	else
	{
		jQuery("#btn_participar").hide();
	}
}

function eventBuscar(evento,input,urlImage){
	var txtBuscar=$("#"+input);
	if(evento=="focus"){
		txtBuscar.css('background-image','none');
	}else if(evento=="blur"){
		txtBuscar.css('background-image','url('+urlImage+')');
	}else{
		alert("Error en la funcion");
		}

}

function participa(promo)
{
	if (jQuery('#frmPromo').length == 0)
	{
		jQuery("body").append('<form id="frmPromo" name="frmPromo"></form>');
	}
	if (jQuery('#iframeFrmTxt').length == 0)
	{
		jQuery("#frmPromo").append('<iframe id="iframeFrmTxt" name="iframeFrmTxt" style="display:none"></iframe>');
	}
	if (jQuery("#frmPromo #sitio").length == 0)
	{
		jQuery("#frmPromo").append('<input type="hidden" name="sitio" id="sitio" value="cosmo_arg">');
	}
	if (jQuery("#frmPromo #promo").length == 0)
	{
		jQuery("#frmPromo").append('<input type="hidden" name="promo" id="promo" value="'+promo+'">');
	}
	else
	{
		jQuery("#frmPromo #promo").val(promo);
	}
	suma=jQuery("#captcha").val();
	if (jQuery("#frmPromo #captcha_val").length == 0)
	{
		jQuery("#frmPromo").append('<input type="hidden" name="captcha_val" id="captcha_val" value="'+suma+'">');
	}
	else
	{
		jQuery("#frmPromo #captcha_val").val(suma);
	}
	jQuery("#frmPromo").attr("action","http://registro.cosmo.com.ar/promos/");
	jQuery("#frmPromo").attr("target","iframeFrmTxt");
	jQuery("#frmPromo").attr("method","post");
	jQuery("#frmPromo").submit();
}
/* Funciones comparte */
var actualizabannesGaleriaFlag=false;
function actualizabannesGaleria()
{
	if (actualizabannesGaleriaFlag==false)
	{
		actualizabannesGaleriaFlag=true;
	}
	else
	{
		if (tipoArticulo=='galeria')
		{
			recargaBannersDinamicos(); 
		}
		try
		{
			 _gaq.push(['_trackPageview', bannerPath+"_galeria"]);
		}
		catch(err)
		{
			try
			{
				 pageTracker._trackPageview(bannerPath+"_galeria");
			}
			catch(err){}
		}
		
		
	}
}

function cargaCat(no)
{
	jQuery("#tit_cat1, #tit_cat2").removeClass('activo');
	jQuery("#txt_cat1, #txt_cat2").hide();
	jQuery("#tit_cat"+no).addClass('activo');
	if (no==1)
	{
		jQuery("#txt_cat2").show();
	}
	else
	{
		jQuery("#txt_cat1").show();
	}
}

