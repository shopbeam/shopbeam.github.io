/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();;

/**
 * Override jQuery.fn.init to guard against XSS attacks.
 *
 * See http://bugs.jquery.com/ticket/9521
 */
(function () {
  var jquery_init = jQuery.fn.init;
  jQuery.fn.init = function (selector, context, rootjQuery) {
    // If the string contains a "#" before a "<", treat it as invalid HTML.
    if (selector && typeof selector === 'string') {
      var hash_position = selector.indexOf('#');
      if (hash_position >= 0) {
        var bracket_position = selector.indexOf('<');
        if (bracket_position > hash_position) {
          throw 'Syntax error, unrecognized expression: ' + selector;
        }
      }
    }
    return jquery_init.call(this, selector, context, rootjQuery);
  };
  jQuery.fn.init.prototype = jquery_init.prototype;
})();

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'themes': {}, 'locale': {} };

/**
 * Set the variable that indicates if JavaScript behaviors should be applied
 */
Drupal.jsEnabled = true;

/**
 * Attach all registered behaviors to a page element.
 *
 * Behaviors are event-triggered actions that attach to page elements, enhancing
 * default non-Javascript UIs. Behaviors are registered in the Drupal.behaviors
 * object as follows:
 * @code
 *    Drupal.behaviors.behaviorName = function () {
 *      ...
 *    };
 * @endcode
 *
 * Drupal.attachBehaviors is added below to the jQuery ready event and so
 * runs on initial page load. Developers implementing AHAH/AJAX in their
 * solutions should also call this function after new page content has been
 * loaded, feeding in an element to be processed, in order to attach all
 * behaviors to the new content.
 *
 * Behaviors should use a class in the form behaviorName-processed to ensure
 * the behavior is attached only once to a given element. (Doing so enables
 * the reprocessing of given elements, which may be needed on occasion despite
 * the ability to limit behavior attachment to a particular element.)
 *
 * @param context
 *   An element to attach behaviors to. If none is given, the document element
 *   is used.
 */
Drupal.attachBehaviors = function(context) {
  context = context || document;
  // Execute all of them.
  jQuery.each(Drupal.behaviors, function() {
    this(context);
  });
};

/**
 * Encode special characters in a plain-text string for display as HTML.
 */
Drupal.checkPlain = function(str) {
  str = String(str);
  var replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
  for (var character in replace) {
    var regex = new RegExp(character, 'g');
    str = str.replace(regex, replace[character]);
  }
  return str;
};

/**
 * Translate strings to the page language or a given language.
 *
 * See the documentation of the server-side t() function for further details.
 *
 * @param str
 *   A string containing the English string to translate.
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 * @return
 *   The translated string.
 */
Drupal.t = function(str, args) {
  // Fetch the localized version of the string.
  if (Drupal.locale.strings && Drupal.locale.strings[str]) {
    str = Drupal.locale.strings[str];
  }

  if (args) {
    // Transform arguments before inserting them
    for (var key in args) {
      switch (key.charAt(0)) {
        // Escaped only
        case '@':
          args[key] = Drupal.checkPlain(args[key]);
        break;
        // Pass-through
        case '!':
          break;
        // Escaped and placeholder
        case '%':
        default:
          args[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
      str = str.replace(key, args[key]);
    }
  }
  return str;
};

/**
 * Format a string containing a count of items.
 *
 * This function ensures that the string is pluralized correctly. Since Drupal.t() is
 * called by this function, make sure not to pass already-localized strings to it.
 *
 * See the documentation of the server-side format_plural() function for further details.
 *
 * @param count
 *   The item count to display.
 * @param singular
 *   The string for the singular case. Please make sure it is clear this is
 *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
 *   Do not use @count in the singular string.
 * @param plural
 *   The string for the plural case. Please make sure it is clear this is plural,
 *   to ease translation. Use @count in place of the item count, as in "@count
 *   new comments".
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 *   Note that you do not need to include @count in this array.
 *   This replacement is done automatically for the plural case.
 * @return
 *   A translated string.
 */
Drupal.formatPlural = function(count, singular, plural, args) {
  var args = args || {};
  args['@count'] = count;
  // Determine the index of the plural form.
  var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

  if (index == 0) {
    return Drupal.t(singular, args);
  }
  else if (index == 1) {
    return Drupal.t(plural, args);
  }
  else {
    args['@count['+ index +']'] = args['@count'];
    delete args['@count'];
    return Drupal.t(plural.replace('@count', '@count['+ index +']'), args);
  }
};

/**
 * Generate the themed representation of a Drupal object.
 *
 * All requests for themed output must go through this function. It examines
 * the request and routes it to the appropriate theme function. If the current
 * theme does not provide an override function, the generic theme function is
 * called.
 *
 * For example, to retrieve the HTML that is output by theme_placeholder(text),
 * call Drupal.theme('placeholder', text).
 *
 * @param func
 *   The name of the theme function to call.
 * @param ...
 *   Additional arguments to pass along to the theme function.
 * @return
 *   Any data the theme function returns. This could be a plain HTML string,
 *   but also a complex object.
 */
Drupal.theme = function(func) {
  for (var i = 1, args = []; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
};

/**
 * Parse a JSON response.
 *
 * The result is either the JSON object, or an object with 'status' 0 and 'data' an error message.
 */
Drupal.parseJson = function (data) {
  if ((data.substring(0, 1) != '{') && (data.substring(0, 1) != '[')) {
    return { status: 0, data: data.length ? data : Drupal.t('Unspecified error') };
  }
  return eval('(' + data + ');');
};

/**
 * Freeze the current body height (as minimum height). Used to prevent
 * unnecessary upwards scrolling when doing DOM manipulations.
 */
Drupal.freezeHeight = function () {
  Drupal.unfreezeHeight();
  var div = document.createElement('div');
  $(div).css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '1px',
    height: $('body').css('height')
  }).attr('id', 'freeze-height');
  $('body').append(div);
};

/**
 * Unfreeze the body height
 */
Drupal.unfreezeHeight = function () {
  $('#freeze-height').remove();
};

/**
 * Wrapper around encodeURIComponent() which avoids Apache quirks (equivalent of
 * drupal_urlencode() in PHP). This function should only be used on paths, not
 * on query string arguments.
 */
Drupal.encodeURIComponent = function (item, uri) {
  uri = uri || location.href;
  item = encodeURIComponent(item).replace(/%2F/g, '/');
  return (uri.indexOf('?q=') != -1) ? item : item.replace(/%26/g, '%2526').replace(/%23/g, '%2523').replace(/\/\//g, '/%252F');
};

/**
 * Get the text selection in a textarea.
 */
Drupal.getSelection = function (element) {
  if (typeof(element.selectionStart) != 'number' && document.selection) {
    // The current selection
    var range1 = document.selection.createRange();
    var range2 = range1.duplicate();
    // Select all text.
    range2.moveToElementText(element);
    // Now move 'dummy' end point to end point of original range.
    range2.setEndPoint('EndToEnd', range1);
    // Now we can calculate start and end points.
    var start = range2.text.length - range1.text.length;
    var end = start + range1.text.length;
    return { 'start': start, 'end': end };
  }
  return { 'start': element.selectionStart, 'end': element.selectionEnd };
};

/**
 * Build an error message from ahah response.
 */
Drupal.ahahError = function(xmlhttp, uri) {
  if (xmlhttp.status == 200) {
    if (jQuery.trim(xmlhttp.responseText)) {
      var message = Drupal.t("An error occurred. \n@uri\n@text", {'@uri': uri, '@text': xmlhttp.responseText });
    }
    else {
      var message = Drupal.t("An error occurred. \n@uri\n(no information available).", {'@uri': uri });
    }
  }
  else {
    var message = Drupal.t("An HTTP error @status occurred. \n@uri", {'@uri': uri, '@status': xmlhttp.status });
  }
  return message.replace(/\n/g, '<br />');
}

// Global Killswitch on the <html> element
$(document.documentElement).addClass('js');
// Attach all behaviors.
$(document).ready(function() {
  Drupal.attachBehaviors(this);
});

/**
 * The default themes.
 */
Drupal.theme.prototype = {

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param str
   *   The text to format (plain-text).
   * @return
   *   The formatted text (html).
   */
  placeholder: function(str) {
    return '<em>' + Drupal.checkPlain(str) + '</em>';
  }
};
;
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
            options = $.extend({}, options); // clone object since it's unexpected behavior if the expired property were changed
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
        // NOTE Needed to parenthesize options.path and options.domain
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
;
/*
 * jQuery Tooltip plugin 1.3
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-tooltip/
 * http://docs.jquery.com/Plugins/Tooltip
 *
 * Copyright (c) 2006 - 2008 JÃ¶rn Zaefferer
 *
 * $Id: jquery.tooltip.js 5741 2008-06-21 15:22:16Z joern.zaefferer $
 * 
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */;(function($){var helper={},current,title,tID,IE=$.browser.msie&&/MSIE\s(5\.5|6\.)/.test(navigator.userAgent),track=false;$.tooltip={blocked:false,defaults:{delay:200,fade:false,showURL:true,extraClass:"",top:15,left:15,id:"tooltip"},block:function(){$.tooltip.blocked=!$.tooltip.blocked;}};$.fn.extend({tooltip:function(settings){settings=$.extend({},$.tooltip.defaults,settings);createHelper(settings);return this.each(function(){$.data(this,"tooltip",settings);this.tOpacity=helper.parent.css("opacity");this.tooltipText=this.title;$(this).removeAttr("title");this.alt="";}).mouseover(save).mouseout(hide).click(hide);},fixPNG:IE?function(){return this.each(function(){var image=$(this).css('backgroundImage');if(image.match(/^url\(["']?(.*\.png)["']?\)$/i)){image=RegExp.$1;$(this).css({'backgroundImage':'none','filter':"progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='"+image+"')"}).each(function(){var position=$(this).css('position');if(position!='absolute'&&position!='relative')$(this).css('position','relative');});}});}:function(){return this;},unfixPNG:IE?function(){return this.each(function(){$(this).css({'filter':'',backgroundImage:''});});}:function(){return this;},hideWhenEmpty:function(){return this.each(function(){$(this)[$(this).html()?"show":"hide"]();});},url:function(){return this.attr('href')||this.attr('src');}});function createHelper(settings){if(helper.parent)return;helper.parent=$('<div id="'+settings.id+'"><h3></h3><div class="body"></div><div class="url"></div></div>').appendTo(document.body).hide();if($.fn.bgiframe)helper.parent.bgiframe();helper.title=$('h3',helper.parent);helper.body=$('div.body',helper.parent);helper.url=$('div.url',helper.parent);}function settings(element){return $.data(element,"tooltip");}function handle(event){if(settings(this).delay)tID=setTimeout(show,settings(this).delay);else
show();track=!!settings(this).track;$(document.body).bind('mousemove',update);update(event);}function save(){if($.tooltip.blocked||this==current||(!this.tooltipText&&!settings(this).bodyHandler))return;current=this;title=this.tooltipText;if(settings(this).bodyHandler){helper.title.hide();var bodyContent=settings(this).bodyHandler.call(this);if(bodyContent.nodeType||bodyContent.jquery){helper.body.empty().append(bodyContent)}else{helper.body.html(bodyContent);}helper.body.show();}else if(settings(this).showBody){var parts=title.split(settings(this).showBody);helper.title.html(parts.shift()).show();helper.body.empty();for(var i=0,part;(part=parts[i]);i++){if(i>0)helper.body.append("<br/>");helper.body.append(part);}helper.body.hideWhenEmpty();}else{helper.title.html(title).show();helper.body.hide();}if(settings(this).showURL&&$(this).url())helper.url.html($(this).url().replace('http://','')).show();else
helper.url.hide();helper.parent.addClass(settings(this).extraClass);if(settings(this).fixPNG)helper.parent.fixPNG();handle.apply(this,arguments);}function show(){tID=null;if((!IE||!$.fn.bgiframe)&&settings(current).fade){if(helper.parent.is(":animated"))helper.parent.stop().show().fadeTo(settings(current).fade,current.tOpacity);else
helper.parent.is(':visible')?helper.parent.fadeTo(settings(current).fade,current.tOpacity):helper.parent.fadeIn(settings(current).fade);}else{helper.parent.show();}update();}function update(event){if($.tooltip.blocked)return;if(event&&event.target.tagName=="OPTION"){return;}if(!track&&helper.parent.is(":visible")){$(document.body).unbind('mousemove',update)}if(current==null){$(document.body).unbind('mousemove',update);return;}helper.parent.removeClass("viewport-right").removeClass("viewport-bottom");var left=helper.parent[0].offsetLeft;var top=helper.parent[0].offsetTop;if(event){left=event.pageX+settings(current).left;top=event.pageY+settings(current).top;var right='auto';if(settings(current).positionLeft){right=$(window).width()-left;left='auto';}helper.parent.css({left:left,right:right,top:top});}var v=viewport(),h=helper.parent[0];if(v.x+v.cx<h.offsetLeft+h.offsetWidth){left-=h.offsetWidth+20+settings(current).left;helper.parent.css({left:left+'px'}).addClass("viewport-right");}if(v.y+v.cy<h.offsetTop+h.offsetHeight){top-=h.offsetHeight+20+settings(current).top;helper.parent.css({top:top+'px'}).addClass("viewport-bottom");}}function viewport(){return{x:$(window).scrollLeft(),y:$(window).scrollTop(),cx:$(window).width(),cy:$(window).height()};}function hide(event){if($.tooltip.blocked)return;if(tID)clearTimeout(tID);current=null;var tsettings=settings(this);function complete(){helper.parent.removeClass(tsettings.extraClass).hide().css("opacity","");}if((!IE||!$.fn.bgiframe)&&tsettings.fade){if(helper.parent.is(':animated'))helper.parent.stop().fadeTo(tsettings.fade,0,complete);else
helper.parent.stop().fadeOut(tsettings.fade,complete);}else
complete();if(settings(this).fixPNG)helper.parent.unfixPNG();}})(jQuery);;
Drupal.behaviors.casOnLoad = function() {
  if ("undefined" == typeof jQuery || "undefined" == typeof jQuery.cookie) {
	return false;
  }

  var $ = jQuery;
  var cas = Drupal.settings.cas;
  var callback = encodeURIComponent(window.location.href);
  var setIt = false;

  if ($.cookie("extcache") != null) {
	var ec_values = $.cookie("extcache").split(":");
	if (ec_values.length > 0 && ec_values[1] == "1") {
	  var username = ("undefined" != typeof ec_values[2]) ? ec_values[2] : null;
	  var roles = ("undefined" != typeof ec_values[3]) ? ec_values[3] : null;

	  username = unescape(username).replace(/\+/g, ' ');

	  /* Required: user is active, and basic "authenticated user" role. */
	  if (roles.indexOf("authenticated+user") != -1) {
        $('#cas-login').html('<a href="/caslogout?callback=' + callback + '">Log out</a>');
        if (cas.server != "") {
          $('<a href=\"' + cas.server + '/membercenter/mvc/member/editUser?site=' + cas.site
            + '&returnUrl=' + callback + '\" title=\"' + Drupal.t("Edit my user information")
            + '\">Profile</a>').appendTo('#cas-register');
        }
        setIt = true;
	  }
	}
  }

  if (! setIt) {
    $('#cas-login').html('<a href="' + cas.uri + '?login=1&callback=' + callback + '&return_url=' + callback + '">Login</a>');
    $('<a href="' + cas.server + '/membercenter/mvc/createUser?site=' + cas.site + '&return_url=' + callback + '">Register</a>').appendTo('#cas-register');
  }
  $('#cas-register').show();
}
;
/* $Id: auto_image_handling.js,v 1.1.4.33 2010/09/22 21:07:57 snpower Exp $ */

// Image Node Auto-Format with Auto Image Grouping.
// Original version by Steve McKenzie.
// Altered by Stella Power for jQuery version.

function parse_url(url, param) {
  param = param.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  url = url.replace(/&amp;/, "&");
  var regexS = "[\\?&]"+param+"=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(url);
  if (results === null) {
    return "";
  }
  else {
    return results[1];
  }
}


function lightbox2_init_triggers(classes, rel_type, custom_class) {
  if (classes == '' || rel_type == 0) {
    return;
  }
  var settings = Drupal.settings.lightbox2;

  var link_target  = "";
  if (settings.node_link_target !== 0) {
    link_target = 'target="'+ settings.node_link_target +'"';
  }

  $("a:has("+classes+")").each(function(i) {

    if ((!settings.disable_for_gallery_lists && !settings.disable_for_acidfree_gallery_lists) || (!$(this).parents("td.giAlbumCell").attr("class") && !$(this).parents(".galleries").length && !$(this).parents(".acidfree-folder").length && !$(this).parents(".acidfree-list").length) || ($(this).parents(".galleries").length && !settings.disable_for_gallery_lists) || (($(this).parents(".acidfree-folder").length || $(this).parents(".acidfree-list").length) && !settings.disable_for_acidfree_gallery_lists)) {

      var child = $(this).find(classes);

      // Ensure the child has a class attribute we can work with.
      if ($(child).attr("class") && !$(this).parents("div.acidfree-video").length) {

        // Set the alt text.
        var alt = $(child).attr("alt");
        if (!alt) {
          alt = "";
        }

        // Set the image node link text.
        var link_text = settings.node_link_text;
        var download_link_text = settings.download_link_text;
        var rewrite = 1;

        // Set the rel attribute.
        var rel = "lightbox";
        var lightframe = false;
        if (rel_type == "lightframe_ungrouped") {
          rel = "lightframe[]";
          lightframe = true;
        }
        else if (rel_type == "lightframe") {
          lightframe = true;
        }
        else if (rel_type == "lightbox_ungrouped") {
          rel = "lightbox[]";
        }
        if (rel_type != "lightbox_ungrouped" && rel_type != "lightframe_ungrouped") {
          rel = rel_type + "[" + $(child).attr("class") + "]";
        }

        // Set the basic href attribute - need to ensure there's no language
        // string (e.g. /en) prepended to the URL.
        var id = null;
        var href = $(child).attr("src");
        var download = null;
        var orig_href = $(this).attr("href");
        var pattern = new RegExp(settings.file_path);
        if (orig_href.match(pattern)) {
          var lang_pattern = new RegExp(Drupal.settings.basePath + "\\w\\w\\/");
          orig_href = orig_href.replace(lang_pattern, Drupal.settings.basePath);
        }
        var frame_href = orig_href;

        // Handle flickr images.
        if ($(child).attr("class").match("flickr-photo-img") ||
          $(child).attr("class").match("flickr-photoset-img")) {
          href = $(child).attr("src").replace("_s.", ".").replace("_t.", ".").replace("_m.", ".").replace("_b.", ".");
          if (rel_type != "lightbox_ungrouped" && rel_type != "lightframe_ungrouped") {
            rel = rel_type + "[flickr]";
            if ($(child).parents("div.block-flickr").attr("class")) {
              id = $(child).parents("div.block-flickr").attr("id");
              rel = rel_type + "["+ id +"]";
            }
          }
          download = href;
        }

        // Handle "image-img_assist_custom" images.
        else if ($(child).filter("img[class*=img_assist_custom]").size()) {
          // Image assist uses "+" signs for spaces which doesn't work for
          // normal links.
          if (settings.display_image_size != "original") {
            orig_href = orig_href.replace(/\+/, " ");
            href = $(child).attr("src").replace(new RegExp("\\.img_assist_custom-[0-9]+x[0-9]+"), ((settings.display_image_size === "")?settings.display_image_size:"."+ settings.display_image_size));
            if (rel_type != "lightbox_ungrouped" && rel_type != "lightframe_ungrouped") {
              rel = rel_type + "[node_images]";
            }
            if (lightframe) {
              frame_href = orig_href + "/lightbox2";
            }
          }
          else {
            rewrite = 0;
          }
        }

        // Handle "inline" images.
        else if ($(child).attr("class").match("inline")) {
          href = orig_href;
        }

        // Handle gallery2 block images.
        else if ($(child).attr("class").match("ImageFrame_image") || $(child).attr("class").match("ImageFrame_none")) {
          var thumb_id = parse_url(href, "g2_itemId");
          var new_id = parse_url(orig_href, "g2_itemId");
          if (new_id && thumb_id) {
            var g2pattern = new RegExp("g2_itemId="+thumb_id);
            var replacement = "g2_itemId="+ new_id;
            href = href.replace(g2pattern, replacement);
          }
          rel = rel_type + "[gallery2]";
          if ($(child).parents("div.block-gallery").attr("class")) {
            id = $(child).parents("div.block-gallery").attr("id");
            rel = rel_type + "["+ id +"]";
          }
          download = href;
        }


        // Set the href attribute.
        else if (settings.image_node_sizes != '()' && !custom_class) {
          if (settings.display_image_size != "original") {
            href = $(child).attr("src").replace(new RegExp(settings.image_node_sizes), ((settings.display_image_size === "")?settings.display_image_size:"."+ settings.display_image_size)).replace(/(image\/view\/\d+)(\/[\w\-]*)/, ((settings.display_image_size === "")?"$1/_original":"$1/"+ settings.display_image_size));
            if (rel_type != "lightbox_ungrouped" && rel_type != "lightframe_ungrouped") {
              rel = rel_type + "[node_images]";
              if ($(child).parents("div.block-multiblock,div.block-image").attr("class")) {
                id = $(child).parents("div.block-multiblock,div.block-image").attr("id");
                rel = rel_type + "["+ id +"]";
              }
            }
            download = $(child).attr("src").replace(new RegExp(settings.image_node_sizes), "").replace(/(image\/view\/\d+)(\/[\w\-]*)/, "$1/_original");
            if (lightframe) {
              frame_href = orig_href + "/lightbox2";
            }
          }
          else {
            rewrite = 0;
          }
        }

        // Modify the image url.
        var img_title = $(child).attr("title");
        if (!img_title) {
          img_title = $(this).attr("title");
          if (!img_title) {
            img_title = $(child).attr("alt");
          }
          $(child).attr({title: img_title});
        }
        if (lightframe) {
          href = frame_href;
        }
        if (rewrite) {
          if (!custom_class) {
            var title_link = "";
            if (link_text.length) {
              title_link = "<br /><br /><a href=\"" + orig_href + "\" id=\"lightbox2-node-link-text\" "+ link_target +" >"+ link_text + "</a>";
            }
            if (download_link_text.length && download) {
              title_link = title_link + " - <a href=\"" + download + "\" id=\"lightbox2-download-link-text\" target=\"_blank\">" + download_link_text + "</a>";
            }
            rel = rel + "[" + img_title + title_link + "]";
            $(this).attr({
              rel: rel,
              href: href
            });
          }
          else {
            if (rel_type != "lightbox_ungrouped" && rel_type != "lightframe_ungrouped") {
              rel = rel_type + "[" + $(child).attr("class") + "]";
              if ($(child).parents("div.block-image").attr("class")) {
                id = $(child).parents("div.block-image").attr("id");
                rel = rel_type + "["+ id +"]";
              }
            }
            rel = rel + "[" + img_title + "]";
            $(this).attr({
              rel: rel,
              href: orig_href
            });
          }
        }
      }
    }

  });
}

function lightbox2_init_acidfree_video() {
  var settings = Drupal.settings.lightbox2;

  var link_target  = "";
  if (settings.node_link_target !== 0) {
    link_target = 'target="'+ settings.node_link_target +'"';
  }

  var link_text = settings.node_link_text;
  var rel = "lightframe";

  $("div.acidfree-video a").each(function(i) {

    if (!settings.disable_for_acidfree_gallery_lists || (!$(this).parents(".acidfree-folder").length && !$(this).parents(".acidfree-list").length) || (($(this).parents(".acidfree-folder").length || $(this).parents(".acidfree-list").length) && !settings.disable_for_acidfree_gallery_lists)) {
      var orig_href = $(this).attr("href");
      var href = orig_href + "/lightframevideo";
      var title = $(this).attr("title");
      var title_link = "";
      if (link_text.length) {
        title_link = "<br /><a href=\"" + orig_href + "\" id=\"lightbox2-node-link-text\" "+ link_target +" >"+ link_text + "</a>";
      }

      $(this).attr({
        rel: rel,
        title: title + title_link,
        href: href
      });
    }
  });
}

function lightbox2_image_nodes() {

  var settings = Drupal.settings.lightbox2;

  // Don't do it on the image assist popup selection screen.
  var img_assist = document.getElementById("img_assist_thumbs");
  if (!img_assist) {

    // Select the enabled image types.
    lightbox2_init_triggers(settings.trigger_lightbox_classes, "lightbox_ungrouped");
    lightbox2_init_triggers(settings.custom_trigger_classes, settings.custom_class_handler, true);
    lightbox2_init_triggers(settings.trigger_lightbox_group_classes, "lightbox");
    lightbox2_init_triggers(settings.trigger_slideshow_classes, "lightshow");
    lightbox2_init_triggers(settings.trigger_lightframe_classes, "lightframe_ungrouped");
    lightbox2_init_triggers(settings.trigger_lightframe_group_classes, "lightframe");
    if (settings.enable_acidfree_videos) {
      lightbox2_init_acidfree_video();
    }

  }
}


Drupal.behaviors.initAutoLightbox = function (context) {
  lightbox2_image_nodes();
};

;
/* $Id: lightbox.js,v 1.5.2.6.2.136 2010/09/24 08:39:40 snpower Exp $ */

/**
 * jQuery Lightbox
 * @author
 *   Stella Power, <http://drupal.org/user/66894>
 *
 * Based on Lightbox v2.03.3 by Lokesh Dhakar
 * <http://www.huddletogether.com/projects/lightbox2/>
 * Also partially based on the jQuery Lightbox by Warren Krewenki
 *   <http://warren.mesozen.com>
 *
 * Permission has been granted to Mark Ashmead & other Drupal Lightbox2 module
 * maintainers to distribute this file via Drupal.org
 * Under GPL license.
 *
 * Slideshow, iframe and video functionality added by Stella Power.
 */

var Lightbox = {
  auto_modal : false,
  overlayOpacity : 0.8, // Controls transparency of shadow overlay.
  overlayColor : '000', // Controls colour of shadow overlay.
  disableCloseClick : true,
  // Controls the order of the lightbox resizing animation sequence.
  resizeSequence: 0, // 0: simultaneous, 1: width then height, 2: height then width.
  resizeSpeed: 'normal', // Controls the speed of the lightbox resizing animation.
  fadeInSpeed: 'normal', // Controls the speed of the image appearance.
  slideDownSpeed: 'slow', // Controls the speed of the image details appearance.
  minWidth: 240,
  borderSize : 10,
  boxColor : 'fff',
  fontColor : '000',
  topPosition : '',
  infoHeight: 20,
  alternative_layout : false,
  imageArray : [],
  imageNum : null,
  total : 0,
  activeImage : null,
  inprogress : false,
  disableResize : false,
  disableZoom : false,
  isZoomedIn : false,
  rtl : false,
  loopItems : false,
  keysClose : ['c', 'x', 27],
  keysPrevious : ['p', 37],
  keysNext : ['n', 39],
  keysZoom : ['z'],
  keysPlayPause : [32],

  // Slideshow options.
  slideInterval : 5000, // In milliseconds.
  showPlayPause : true,
  autoStart : true,
  autoExit : true,
  pauseOnNextClick : false, // True to pause the slideshow when the "Next" button is clicked.
  pauseOnPrevClick : true, // True to pause the slideshow when the "Prev" button is clicked.
  slideIdArray : [],
  slideIdCount : 0,
  isSlideshow : false,
  isPaused : false,
  loopSlides : false,

  // Iframe options.
  isLightframe : false,
  iframe_width : 600,
  iframe_height : 400,
  iframe_border : 1,

  // Video and modal options.
  enableVideo : false,
  flvPlayer : '/flvplayer.swf',
  flvFlashvars : '',
  isModal : false,
  isVideo : false,
  videoId : false,
  modalWidth : 400,
  modalHeight : 400,
  modalHTML : null,


  // initialize()
  // Constructor runs on completion of the DOM loading.
  // The function inserts html at the bottom of the page which is used
  // to display the shadow overlay and the image container.
  initialize: function() {

    var s = Drupal.settings.lightbox2;
    Lightbox.overlayOpacity = s.overlay_opacity;
    Lightbox.overlayColor = s.overlay_color;
    Lightbox.disableCloseClick = s.disable_close_click;
    Lightbox.resizeSequence = s.resize_sequence;
    Lightbox.resizeSpeed = s.resize_speed;
    Lightbox.fadeInSpeed = s.fade_in_speed;
    Lightbox.slideDownSpeed = s.slide_down_speed;
    Lightbox.borderSize = s.border_size;
    Lightbox.boxColor = s.box_color;
    Lightbox.fontColor = s.font_color;
    Lightbox.topPosition = s.top_position;
    Lightbox.rtl = s.rtl;
    Lightbox.loopItems = s.loop_items;
    Lightbox.keysClose = s.keys_close.split(" ");
    Lightbox.keysPrevious = s.keys_previous.split(" ");
    Lightbox.keysNext = s.keys_next.split(" ");
    Lightbox.keysZoom = s.keys_zoom.split(" ");
    Lightbox.keysPlayPause = s.keys_play_pause.split(" ");
    Lightbox.disableResize = s.disable_resize;
    Lightbox.disableZoom = s.disable_zoom;
    Lightbox.slideInterval = s.slideshow_interval;
    Lightbox.showPlayPause = s.show_play_pause;
    Lightbox.showCaption = s.show_caption;
    Lightbox.autoStart = s.slideshow_automatic_start;
    Lightbox.autoExit = s.slideshow_automatic_exit;
    Lightbox.pauseOnNextClick = s.pause_on_next_click;
    Lightbox.pauseOnPrevClick = s.pause_on_previous_click;
    Lightbox.loopSlides = s.loop_slides;
    Lightbox.alternative_layout = s.use_alt_layout;
    Lightbox.iframe_width = s.iframe_width;
    Lightbox.iframe_height = s.iframe_height;
    Lightbox.iframe_border = s.iframe_border;
    Lightbox.enableVideo = s.enable_video;
    if (s.enable_video) {
      Lightbox.flvPlayer = s.flvPlayer;
      Lightbox.flvFlashvars = s.flvFlashvars;
    }

    // Make the lightbox divs.
    var layout_class = (s.use_alt_layout ? 'lightbox2-alt-layout' : 'lightbox2-orig-layout');
    var output = '<div id="lightbox2-overlay" style="display: none;"></div>\
      <div id="lightbox" style="display: none;" class="' + layout_class + '">\
        <div id="outerImageContainer"></div>\
        <div id="imageDataContainer" class="clearfix">\
          <div id="imageData"></div>\
        </div>\
      </div>';
    var loading = '<div id="loading"><a href="#" id="loadingLink"></a></div>';
    var modal = '<div id="modalContainer" style="display: none;"></div>';
    var frame = '<div id="frameContainer" style="display: none;"></div>';
    var imageContainer = '<div id="imageContainer" style="display: none;"></div>';
    var details = '<div id="imageDetails"></div>';
    var bottomNav = '<div id="bottomNav"></div>';
    var image = '<img id="lightboxImage" alt="" />';
    var hoverNav = '<div id="hoverNav"><a id="prevLink" href="#"></a><a id="nextLink" href="#"></a></div>';
    var frameNav = '<div id="frameHoverNav"><a id="framePrevLink" href="#"></a><a id="frameNextLink" href="#"></a></div>';
    var hoverNav = '<div id="hoverNav"><a id="prevLink" title="' + Drupal.t('Previous') + '" href="#"></a><a id="nextLink" title="' + Drupal.t('Next') + '" href="#"></a></div>';
    var frameNav = '<div id="frameHoverNav"><a id="framePrevLink" title="' + Drupal.t('Previous') + '" href="#"></a><a id="frameNextLink" title="' + Drupal.t('Next') + '" href="#"></a></div>';
    var caption = '<span id="caption"></span>';
    var numberDisplay = '<span id="numberDisplay"></span>';
    var close = '<a id="bottomNavClose" title="' + Drupal.t('Close') + '" href="#"></a>';
    var zoom = '<a id="bottomNavZoom" href="#"></a>';
    var zoomOut = '<a id="bottomNavZoomOut" href="#"></a>';
    var pause = '<a id="lightshowPause" title="' + Drupal.t('Pause Slideshow') + '" href="#" style="display: none;"></a>';
    var play = '<a id="lightshowPlay" title="' + Drupal.t('Play Slideshow') + '" href="#" style="display: none;"></a>';

    $("body").append(output);
    $('#outerImageContainer').append(modal + frame + imageContainer + loading);
    if (!s.use_alt_layout) {
      $('#imageContainer').append(image + hoverNav);
      $('#imageData').append(details + bottomNav);
      $('#imageDetails').append(caption + numberDisplay);
      $('#bottomNav').append(frameNav + close + zoom + zoomOut + pause + play);
    }
    else {
      $('#outerImageContainer').append(bottomNav);
      $('#imageContainer').append(image);
      $('#bottomNav').append(close + zoom + zoomOut);
      $('#imageData').append(hoverNav + details);
      $('#imageDetails').append(caption + numberDisplay + pause + play);
    }

    // Setup onclick handlers.
    if (Lightbox.disableCloseClick) {
      $('#lightbox2-overlay').click(function() { Lightbox.end(); return false; } ).hide();
    }
    $('#loadingLink, #bottomNavClose').click(function() { Lightbox.end('forceClose'); return false; } );
    $('#prevLink, #framePrevLink').click(function() { Lightbox.changeData(Lightbox.activeImage - 1); return false; } );
    $('#nextLink, #frameNextLink').click(function() { Lightbox.changeData(Lightbox.activeImage + 1); return false; } );
    $('#bottomNavZoom').click(function() { Lightbox.changeData(Lightbox.activeImage, true); return false; } );
    $('#bottomNavZoomOut').click(function() { Lightbox.changeData(Lightbox.activeImage, false); return false; } );
    $('#lightshowPause').click(function() { Lightbox.togglePlayPause("lightshowPause", "lightshowPlay"); return false; } );
    $('#lightshowPlay').click(function() { Lightbox.togglePlayPause("lightshowPlay", "lightshowPause"); return false; } );

    // Fix positioning.
    $('#prevLink, #nextLink, #framePrevLink, #frameNextLink').css({ 'paddingTop': Lightbox.borderSize + 'px'});
    $('#imageContainer, #frameContainer, #modalContainer').css({ 'padding': Lightbox.borderSize + 'px'});
    $('#outerImageContainer, #imageDataContainer, #bottomNavClose').css({'backgroundColor': '#' + Lightbox.boxColor, 'color': '#'+Lightbox.fontColor});
    if (Lightbox.alternative_layout) {
      $('#bottomNavZoom, #bottomNavZoomOut').css({'bottom': Lightbox.borderSize + 'px', 'right': Lightbox.borderSize + 'px'});
    }
    else if (Lightbox.rtl == 1 && $.browser.msie) {
      $('#bottomNavZoom, #bottomNavZoomOut').css({'left': '0px'});
    }

    // Force navigation links to always be displayed
    if (s.force_show_nav) {
      $('#prevLink, #nextLink').addClass("force_show_nav");
    }

  },

  // initList()
  // Loops through anchor tags looking for 'lightbox', 'lightshow' and
  // 'lightframe', etc, references and applies onclick events to appropriate
  // links. You can rerun after dynamically adding images w/ajax.
  initList : function(context) {

    if (context == undefined || context == null) {
      context = document;
    }

    // Attach lightbox to any links with rel 'lightbox', 'lightshow' or
    // 'lightframe', etc.
    $("a[rel^='lightbox']:not(.lightbox-processed), area[rel^='lightbox']:not(.lightbox-processed)", context).addClass('lightbox-processed').click(function(e) {
      if (Lightbox.disableCloseClick) {
        $('#lightbox').unbind('click');
        $('#lightbox').click(function() { Lightbox.end('forceClose'); } );
      }
      Lightbox.start(this, false, false, false, false);
      if (e.preventDefault) { e.preventDefault(); }
      return false;
    });
    $("a[rel^='lightshow']:not(.lightbox-processed), area[rel^='lightshow']:not(.lightbox-processed)", context).addClass('lightbox-processed').click(function(e) {
      if (Lightbox.disableCloseClick) {
        $('#lightbox').unbind('click');
        $('#lightbox').click(function() { Lightbox.end('forceClose'); } );
      }
      Lightbox.start(this, true, false, false, false);
      if (e.preventDefault) { e.preventDefault(); }
      return false;
    });
    $("a[rel^='lightframe']:not(.lightbox-processed), area[rel^='lightframe']:not(.lightbox-processed)", context).addClass('lightbox-processed').click(function(e) {
      if (Lightbox.disableCloseClick) {
        $('#lightbox').unbind('click');
        $('#lightbox').click(function() { Lightbox.end('forceClose'); } );
      }
      Lightbox.start(this, false, true, false, false);
      if (e.preventDefault) { e.preventDefault(); }
      return false;
    });
    if (Lightbox.enableVideo) {
      $("a[rel^='lightvideo']:not(.lightbox-processed), area[rel^='lightvideo']:not(.lightbox-processed)", context).addClass('lightbox-processed').click(function(e) {
        if (Lightbox.disableCloseClick) {
          $('#lightbox').unbind('click');
          $('#lightbox').click(function() { Lightbox.end('forceClose'); } );
        }
        Lightbox.start(this, false, false, true, false);
        if (e.preventDefault) { e.preventDefault(); }
        return false;
      });
    }
    $("a[rel^='lightmodal']:not(.lightbox-processed), area[rel^='lightmodal']:not(.lightbox-processed)", context).addClass('lightbox-processed').click(function(e) {
      $('#lightbox').unbind('click');
      // Add classes from the link to the lightbox div - don't include lightbox-processed
      $('#lightbox').addClass($(this).attr('class'));
      $('#lightbox').removeClass('lightbox-processed');
      Lightbox.start(this, false, false, false, true);
      if (e.preventDefault) { e.preventDefault(); }
      return false;
    });
    $("#lightboxAutoModal:not(.lightbox-processed)", context).addClass('lightbox-processed').click(function(e) {
      Lightbox.auto_modal = true;
      $('#lightbox').unbind('click');
      Lightbox.start(this, false, false, false, true);
      if (e.preventDefault) { e.preventDefault(); }
      return false;
    });
  },

  // start()
  // Display overlay and lightbox. If image is part of a set, add siblings to
  // imageArray.
  start: function(imageLink, slideshow, lightframe, lightvideo, lightmodal) {

    Lightbox.isPaused = !Lightbox.autoStart;

    // Replaces hideSelectBoxes() and hideFlash() calls in original lightbox2.
    Lightbox.toggleSelectsFlash('hide');

    // Stretch overlay to fill page and fade in.
    var arrayPageSize = Lightbox.getPageSize();
    $("#lightbox2-overlay").hide().css({
      'width': '100%',
      'zIndex': '10090',
      'height': arrayPageSize[1] + 'px',
      'backgroundColor' : '#' + Lightbox.overlayColor
    });
    // Detect OS X FF2 opacity + flash issue.
    if (lightvideo && this.detectMacFF2()) {
      $("#lightbox2-overlay").removeClass("overlay_default");
      $("#lightbox2-overlay").addClass("overlay_macff2");
      $("#lightbox2-overlay").css({'opacity' : null});
    }
    else {
      $("#lightbox2-overlay").removeClass("overlay_macff2");
      $("#lightbox2-overlay").addClass("overlay_default");
      $("#lightbox2-overlay").css({'opacity' : Lightbox.overlayOpacity});
    }
    $("#lightbox2-overlay").fadeIn(Lightbox.fadeInSpeed);


    Lightbox.isSlideshow = slideshow;
    Lightbox.isLightframe = lightframe;
    Lightbox.isVideo = lightvideo;
    Lightbox.isModal = lightmodal;
    Lightbox.imageArray = [];
    Lightbox.imageNum = 0;

    var anchors = $(imageLink.tagName);
    var anchor = null;
    var rel_parts = Lightbox.parseRel(imageLink);
    var rel = rel_parts["rel"];
    var rel_group = rel_parts["group"];
    var title = (rel_parts["title"] ? rel_parts["title"] : imageLink.title);
    var rel_style = null;
    var i = 0;

    if (rel_parts["flashvars"]) {
      Lightbox.flvFlashvars = Lightbox.flvFlashvars + '&' + rel_parts["flashvars"];
    }

    // Set the title for image alternative text.
    var alt = imageLink.title;
    if (!alt) {
      var img = $(imageLink).find("img");
      if (img && $(img).attr("alt")) {
        alt = $(img).attr("alt");
      }
      else {
        alt = title;
      }
    }

    if ($(imageLink).attr('id') == 'lightboxAutoModal') {
      rel_style = rel_parts["style"];
      Lightbox.imageArray.push(['#lightboxAutoModal > *', title, alt, rel_style, 1]);
    }
    else {
      // Handle lightbox images with no grouping.
      if ((rel == 'lightbox' || rel == 'lightshow') && !rel_group) {
        Lightbox.imageArray.push([imageLink.href, title, alt]);
      }

      // Handle other items with no grouping.
      else if (!rel_group) {
        rel_style = rel_parts["style"];
        Lightbox.imageArray.push([imageLink.href, title, alt, rel_style]);
      }

      // Handle grouped items.
      else {

        // Loop through anchors and add them to imageArray.
        for (i = 0; i < anchors.length; i++) {
          anchor = anchors[i];
          if (anchor.href && typeof(anchor.href) == "string" && $(anchor).attr('rel')) {
            var rel_data = Lightbox.parseRel(anchor);
            var anchor_title = (rel_data["title"] ? rel_data["title"] : anchor.title);
            img_alt = anchor.title;
            if (!img_alt) {
              var anchor_img = $(anchor).find("img");
              if (anchor_img && $(anchor_img).attr("alt")) {
                img_alt = $(anchor_img).attr("alt");
              }
              else {
                img_alt = title;
              }
            }
            if (rel_data["rel"] == rel) {
              if (rel_data["group"] == rel_group) {
                if (Lightbox.isLightframe || Lightbox.isModal || Lightbox.isVideo) {
                  rel_style = rel_data["style"];
                }
                Lightbox.imageArray.push([anchor.href, anchor_title, img_alt, rel_style]);
              }
            }
          }
        }

        // Remove duplicates.
        for (i = 0; i < Lightbox.imageArray.length; i++) {
          for (j = Lightbox.imageArray.length-1; j > i; j--) {
            if (Lightbox.imageArray[i][0] == Lightbox.imageArray[j][0]) {
              Lightbox.imageArray.splice(j,1);
            }
          }
        }
        while (Lightbox.imageArray[Lightbox.imageNum][0] != imageLink.href) {
          Lightbox.imageNum++;
        }
      }
    }

    if (Lightbox.isSlideshow && Lightbox.showPlayPause && Lightbox.isPaused) {
      $('#lightshowPlay').show();
      $('#lightshowPause').hide();
    }

    // Calculate top and left offset for the lightbox.
    var arrayPageScroll = Lightbox.getPageScroll();
    var lightboxTop = arrayPageScroll[1] + (Lightbox.topPosition == '' ? (arrayPageSize[3] / 10) : Lightbox.topPosition) * 1;
    var lightboxLeft = arrayPageScroll[0];
    $('#frameContainer, #modalContainer, #lightboxImage').hide();
    $('#hoverNav, #prevLink, #nextLink, #frameHoverNav, #framePrevLink, #frameNextLink').hide();
    $('#imageDataContainer, #numberDisplay, #bottomNavZoom, #bottomNavZoomOut').hide();
    $('#outerImageContainer').css({'width': '250px', 'height': '250px'});
    $('#lightbox').css({
      'zIndex': '10500',
      'top': lightboxTop + 'px',
      'left': lightboxLeft + 'px'
    }).show();

    Lightbox.total = Lightbox.imageArray.length;
    Lightbox.changeData(Lightbox.imageNum);
  },

  // changeData()
  // Hide most elements and preload image in preparation for resizing image
  // container.
  changeData: function(imageNum, zoomIn) {

    if (Lightbox.inprogress === false) {
      if (Lightbox.total > 1 && ((Lightbox.isSlideshow && Lightbox.loopSlides) || (!Lightbox.isSlideshow && Lightbox.loopItems))) {
        if (imageNum >= Lightbox.total) imageNum = 0;
        if (imageNum < 0) imageNum = Lightbox.total - 1;
      }

      if (Lightbox.isSlideshow) {
        for (var i = 0; i < Lightbox.slideIdCount; i++) {
          window.clearTimeout(Lightbox.slideIdArray[i]);
        }
      }
      Lightbox.inprogress = true;
      Lightbox.activeImage = imageNum;

      if (Lightbox.disableResize && !Lightbox.isSlideshow) {
        zoomIn = true;
      }
      Lightbox.isZoomedIn = zoomIn;


      // Hide elements during transition.
      $('#loading').css({'zIndex': '10500'}).show();
      if (!Lightbox.alternative_layout) {
        $('#imageContainer').hide();
      }
      $('#frameContainer, #modalContainer, #lightboxImage').hide();
      $('#hoverNav, #prevLink, #nextLink, #frameHoverNav, #framePrevLink, #frameNextLink').hide();
      $('#imageDataContainer, #numberDisplay, #bottomNavZoom, #bottomNavZoomOut').hide();

      // Preload image content, but not iframe pages.
      if (!Lightbox.isLightframe && !Lightbox.isVideo && !Lightbox.isModal) {
        $("#lightbox #imageDataContainer").removeClass('lightbox2-alt-layout-data');
        imgPreloader = new Image();
        imgPreloader.onerror = function() { Lightbox.imgNodeLoadingError(this); };

        imgPreloader.onload = function() {
          var photo = document.getElementById('lightboxImage');
          photo.src = Lightbox.imageArray[Lightbox.activeImage][0];
          photo.alt = Lightbox.imageArray[Lightbox.activeImage][2];

          var imageWidth = imgPreloader.width;
          var imageHeight = imgPreloader.height;

          // Resize code.
          var arrayPageSize = Lightbox.getPageSize();
          var targ = { w:arrayPageSize[2] - (Lightbox.borderSize * 2), h:arrayPageSize[3] - (Lightbox.borderSize * 6) - (Lightbox.infoHeight * 4) - (arrayPageSize[3] / 10) };
          var orig = { w:imgPreloader.width, h:imgPreloader.height };

          // Image is very large, so show a smaller version of the larger image
          // with zoom button.
          if (zoomIn !== true) {
            var ratio = 1.0; // Shrink image with the same aspect.
            $('#bottomNavZoomOut, #bottomNavZoom').hide();
            if ((orig.w >= targ.w || orig.h >= targ.h) && orig.h && orig.w) {
              ratio = ((targ.w / orig.w) < (targ.h / orig.h)) ? targ.w / orig.w : targ.h / orig.h;
              if (!Lightbox.disableZoom && !Lightbox.isSlideshow) {
                $('#bottomNavZoom').css({'zIndex': '10500'}).show();
              }
            }

            imageWidth  = Math.floor(orig.w * ratio);
            imageHeight = Math.floor(orig.h * ratio);
          }

          else {
            $('#bottomNavZoom').hide();
            // Only display zoom out button if the image is zoomed in already.
            if ((orig.w >= targ.w || orig.h >= targ.h) && orig.h && orig.w) {
              // Only display zoom out button if not a slideshow and if the
              // buttons aren't disabled.
              if (!Lightbox.disableResize && Lightbox.isSlideshow === false && !Lightbox.disableZoom) {
                $('#bottomNavZoomOut').css({'zIndex': '10500'}).show();
              }
            }
          }

          photo.style.width = (imageWidth) + 'px';
          photo.style.height = (imageHeight) + 'px';
          Lightbox.resizeContainer(imageWidth, imageHeight);

          // Clear onLoad, IE behaves irratically with animated gifs otherwise.
          imgPreloader.onload = function() {};
        };

        imgPreloader.src = Lightbox.imageArray[Lightbox.activeImage][0];
        imgPreloader.alt = Lightbox.imageArray[Lightbox.activeImage][2];
      }

      // Set up frame size, etc.
      else if (Lightbox.isLightframe) {
        $("#lightbox #imageDataContainer").addClass('lightbox2-alt-layout-data');
        var src = Lightbox.imageArray[Lightbox.activeImage][0];
        $('#frameContainer').html('<iframe id="lightboxFrame" style="display: none;" src="'+src+'"></iframe>');

        // Enable swf support in Gecko browsers.
        if ($.browser.mozilla && src.indexOf('.swf') != -1) {
          setTimeout(function () {
            document.getElementById("lightboxFrame").src = Lightbox.imageArray[Lightbox.activeImage][0];
          }, 1000);
        }

        if (!Lightbox.iframe_border) {
          $('#lightboxFrame').css({'border': 'none'});
          $('#lightboxFrame').attr('frameborder', '0');
        }
        var iframe = document.getElementById('lightboxFrame');
        var iframeStyles = Lightbox.imageArray[Lightbox.activeImage][3];
        iframe = Lightbox.setStyles(iframe, iframeStyles);
        Lightbox.resizeContainer(parseInt(iframe.width, 10), parseInt(iframe.height, 10));
      }
      else if (Lightbox.isVideo || Lightbox.isModal) {
        $("#lightbox #imageDataContainer").addClass('lightbox2-alt-layout-data');
        var container = document.getElementById('modalContainer');
        var modalStyles = Lightbox.imageArray[Lightbox.activeImage][3];
        container = Lightbox.setStyles(container, modalStyles);
        if (Lightbox.isVideo) {
          Lightbox.modalHeight =  parseInt(container.height, 10) - 10;
          Lightbox.modalWidth =  parseInt(container.width, 10) - 10;
          Lightvideo.startVideo(Lightbox.imageArray[Lightbox.activeImage][0]);
        }
        Lightbox.resizeContainer(parseInt(container.width, 10), parseInt(container.height, 10));
      }
    }
  },

  // imgNodeLoadingError()
  imgNodeLoadingError: function(image) {
    var s = Drupal.settings.lightbox2;
    var original_image = Lightbox.imageArray[Lightbox.activeImage][0];
    if (s.display_image_size !== "") {
      original_image = original_image.replace(new RegExp("."+s.display_image_size), "");
    }
    Lightbox.imageArray[Lightbox.activeImage][0] = original_image;
    image.onerror = function() { Lightbox.imgLoadingError(image); };
    image.src = original_image;
  },

  // imgLoadingError()
  imgLoadingError: function(image) {
    var s = Drupal.settings.lightbox2;
    Lightbox.imageArray[Lightbox.activeImage][0] = s.default_image;
    image.src = s.default_image;
  },

  // resizeContainer()
  resizeContainer: function(imgWidth, imgHeight) {

    imgWidth = (imgWidth < Lightbox.minWidth ? Lightbox.minWidth : imgWidth);

    this.widthCurrent = $('#outerImageContainer').width();
    this.heightCurrent = $('#outerImageContainer').height();

    var widthNew = (imgWidth  + (Lightbox.borderSize * 2));
    var heightNew = (imgHeight  + (Lightbox.borderSize * 2));

    // Scalars based on change from old to new.
    this.xScale = ( widthNew / this.widthCurrent) * 100;
    this.yScale = ( heightNew / this.heightCurrent) * 100;

    // Calculate size difference between new and old image, and resize if
    // necessary.
    wDiff = this.widthCurrent - widthNew;
    hDiff = this.heightCurrent - heightNew;

    $('#modalContainer').css({'width': imgWidth, 'height': imgHeight});
    // Detect animation sequence.
    if (Lightbox.resizeSequence) {
      var animate1 = {width: widthNew};
      var animate2 = {height: heightNew};
      if (Lightbox.resizeSequence == 2) {
        animate1 = {height: heightNew};
        animate2 = {width: widthNew};
      }
      $('#outerImageContainer').animate(animate1, Lightbox.resizeSpeed).animate(animate2, Lightbox.resizeSpeed, 'linear', function() { Lightbox.showData(); });
    }
    // Simultaneous.
    else {
      $('#outerImageContainer').animate({'width': widthNew, 'height': heightNew}, Lightbox.resizeSpeed, 'linear', function() { Lightbox.showData(); });
    }

    // If new and old image are same size and no scaling transition is necessary
    // do a quick pause to prevent image flicker.
    if ((hDiff === 0) && (wDiff === 0)) {
      if ($.browser.msie) {
        Lightbox.pause(250);
      }
      else {
        Lightbox.pause(100);
      }
    }

    var s = Drupal.settings.lightbox2;
    if (!s.use_alt_layout) {
      $('#prevLink, #nextLink').css({'height': imgHeight + 'px'});
    }
    $('#imageDataContainer').css({'width': widthNew + 'px'});
  },

  // showData()
  // Display image and begin preloading neighbors.
  showData: function() {
    $('#loading').hide();

    if (Lightbox.isLightframe || Lightbox.isVideo || Lightbox.isModal) {
      Lightbox.updateDetails();
      if (Lightbox.isLightframe) {
        $('#frameContainer').show();
        if ($.browser.safari || Lightbox.fadeInSpeed === 0) {
          $('#lightboxFrame').css({'zIndex': '10500'}).show();
        }
        else {
          $('#lightboxFrame').css({'zIndex': '10500'}).fadeIn(Lightbox.fadeInSpeed);
        }
      }
      else {
        if (Lightbox.isVideo) {
          $("#modalContainer").html(Lightbox.modalHTML).click(function(){return false;}).css('zIndex', '10500').show();
        }
        else {
          var src = unescape(Lightbox.imageArray[Lightbox.activeImage][0]);
          if (Lightbox.imageArray[Lightbox.activeImage][4]) {
            $(src).appendTo("#modalContainer");
            $('#modalContainer').css({'zIndex': '10500'}).show();
          }
          else {
            // Use a callback to show the new image, otherwise you get flicker.
            $("#modalContainer").hide().load(src, function () {$('#modalContainer').css({'zIndex': '10500'}).show();});
          }
          $('#modalContainer').unbind('click');
        }
        // This might be needed in the Lightframe section above.
        //$('#modalContainer').css({'zIndex': '10500'}).show();
      }
    }

    // Handle display of image content.
    else {
      $('#imageContainer').show();
      if ($.browser.safari || Lightbox.fadeInSpeed === 0) {
        $('#lightboxImage').css({'zIndex': '10500'}).show();
      }
      else {
        $('#lightboxImage').css({'zIndex': '10500'}).fadeIn(Lightbox.fadeInSpeed);
      }
      Lightbox.updateDetails();
      this.preloadNeighborImages();
    }
    Lightbox.inprogress = false;

    // Slideshow specific stuff.
    if (Lightbox.isSlideshow) {
      if (!Lightbox.loopSlides && Lightbox.activeImage == (Lightbox.total - 1)) {
        if (Lightbox.autoExit) {
          Lightbox.slideIdArray[Lightbox.slideIdCount++] = setTimeout(function () {Lightbox.end('slideshow');}, Lightbox.slideInterval);
        }
      }
      else {
        if (!Lightbox.isPaused && Lightbox.total > 1) {
          Lightbox.slideIdArray[Lightbox.slideIdCount++] = setTimeout(function () {Lightbox.changeData(Lightbox.activeImage + 1);}, Lightbox.slideInterval);
        }
      }
      if (Lightbox.showPlayPause && Lightbox.total > 1 && !Lightbox.isPaused) {
        $('#lightshowPause').show();
        $('#lightshowPlay').hide();
      }
      else if (Lightbox.showPlayPause && Lightbox.total > 1) {
        $('#lightshowPause').hide();
        $('#lightshowPlay').show();
      }
    }

    // Adjust the page overlay size.
    var arrayPageSize = Lightbox.getPageSize();
    var arrayPageScroll = Lightbox.getPageScroll();
    var pageHeight = arrayPageSize[1];
    if (Lightbox.isZoomedIn && arrayPageSize[1] > arrayPageSize[3]) {
      var lightboxTop = (Lightbox.topPosition == '' ? (arrayPageSize[3] / 10) : Lightbox.topPosition) * 1;
      pageHeight = pageHeight + arrayPageScroll[1] + lightboxTop;
    }
    $('#lightbox2-overlay').css({'height': pageHeight + 'px', 'width': arrayPageSize[0] + 'px'});

    // Gecko browsers (e.g. Firefox, SeaMonkey, etc) don't handle pdfs as
    // expected.
    if ($.browser.mozilla) {
      if (Lightbox.imageArray[Lightbox.activeImage][0].indexOf(".pdf") != -1) {
        setTimeout(function () {
          document.getElementById("lightboxFrame").src = Lightbox.imageArray[Lightbox.activeImage][0];
        }, 1000);
      }
    }
  },

  // updateDetails()
  // Display caption, image number, and bottom nav.
  updateDetails: function() {

    $("#imageDataContainer").hide();

    var s = Drupal.settings.lightbox2;

    if (s.show_caption) {
      var caption = Lightbox.filterXSS(Lightbox.imageArray[Lightbox.activeImage][1]);
      if (!caption) caption = '';
      $('#caption').html(caption).css({'zIndex': '10500'}).show();
    }

    // If image is part of set display 'Image x of x'.
    var numberDisplay = null;
    if (s.image_count && Lightbox.total > 1) {
      var currentImage = Lightbox.activeImage + 1;
      if (!Lightbox.isLightframe && !Lightbox.isModal && !Lightbox.isVideo) {
        numberDisplay = s.image_count.replace(/\!current/, currentImage).replace(/\!total/, Lightbox.total);
      }
      else if (Lightbox.isVideo) {
        numberDisplay = s.video_count.replace(/\!current/, currentImage).replace(/\!total/, Lightbox.total);
      }
      else {
        numberDisplay = s.page_count.replace(/\!current/, currentImage).replace(/\!total/, Lightbox.total);
      }
      $('#numberDisplay').html(numberDisplay).css({'zIndex': '10500'}).show();
    }
    else {
      $('#numberDisplay').hide();
    }

    $("#imageDataContainer").hide().slideDown(Lightbox.slideDownSpeed, function() {
      $("#bottomNav").show();
    });
    if (Lightbox.rtl == 1) {
      $("#bottomNav").css({'float': 'left'});
    }
    Lightbox.updateNav();
  },

  // updateNav()
  // Display appropriate previous and next hover navigation.
  updateNav: function() {

    $('#hoverNav').css({'zIndex': '10500'}).show();
    var prevLink = '#prevLink';
    var nextLink = '#nextLink';

    // Slideshow is separated as we need to show play / pause button.
    if (Lightbox.isSlideshow) {
      if ((Lightbox.total > 1 && Lightbox.loopSlides) || Lightbox.activeImage !== 0) {
        $(prevLink).css({'zIndex': '10500'}).show().click(function() {
          if (Lightbox.pauseOnPrevClick) {
            Lightbox.togglePlayPause("lightshowPause", "lightshowPlay");
          }
          Lightbox.changeData(Lightbox.activeImage - 1); return false;
        });
      }
      else {
        $(prevLink).hide();
      }

      // If not last image in set, display next image button.
      if ((Lightbox.total > 1 && Lightbox.loopSlides) || Lightbox.activeImage != (Lightbox.total - 1)) {
        $(nextLink).css({'zIndex': '10500'}).show().click(function() {
          if (Lightbox.pauseOnNextClick) {
            Lightbox.togglePlayPause("lightshowPause", "lightshowPlay");
          }
          Lightbox.changeData(Lightbox.activeImage + 1); return false;
        });
      }
      // Safari browsers need to have hide() called again.
      else {
        $(nextLink).hide();
      }
    }

    // All other types of content.
    else {

      if ((Lightbox.isLightframe || Lightbox.isModal || Lightbox.isVideo) && !Lightbox.alternative_layout) {
        $('#frameHoverNav').css({'zIndex': '10500'}).show();
        $('#hoverNav').css({'zIndex': '10500'}).hide();
        prevLink = '#framePrevLink';
        nextLink = '#frameNextLink';
      }

      // If not first image in set, display prev image button.
      if ((Lightbox.total > 1 && Lightbox.loopItems) || Lightbox.activeImage !== 0) {
        // Unbind any other click handlers, otherwise this adds a new click handler
        // each time the arrow is clicked.
        $(prevLink).css({'zIndex': '10500'}).show().unbind().click(function() {
          Lightbox.changeData(Lightbox.activeImage - 1); return false;
        });
      }
      // Safari browsers need to have hide() called again.
      else {
        $(prevLink).hide();
      }

      // If not last image in set, display next image button.
      if ((Lightbox.total > 1 && Lightbox.loopItems) || Lightbox.activeImage != (Lightbox.total - 1)) {
        // Unbind any other click handlers, otherwise this adds a new click handler
        // each time the arrow is clicked.
        $(nextLink).css({'zIndex': '10500'}).show().unbind().click(function() {
          Lightbox.changeData(Lightbox.activeImage + 1); return false;
        });
      }
      // Safari browsers need to have hide() called again.
      else {
        $(nextLink).hide();
      }
    }

    // Don't enable keyboard shortcuts so forms will work.
    if (!Lightbox.isModal) {
      this.enableKeyboardNav();
    }
  },


  // enableKeyboardNav()
  enableKeyboardNav: function() {
    $(document).bind("keydown", this.keyboardAction);
  },

  // disableKeyboardNav()
  disableKeyboardNav: function() {
    $(document).unbind("keydown", this.keyboardAction);
  },

  // keyboardAction()
  keyboardAction: function(e) {
    if (e === null) { // IE.
      keycode = event.keyCode;
      escapeKey = 27;
    }
    else { // Mozilla.
      keycode = e.keyCode;
      escapeKey = e.DOM_VK_ESCAPE;
    }

    key = String.fromCharCode(keycode).toLowerCase();

    // Close lightbox.
    if (Lightbox.checkKey(Lightbox.keysClose, key, keycode)) {
      Lightbox.end('forceClose');
    }
    // Display previous image (p, <-).
    else if (Lightbox.checkKey(Lightbox.keysPrevious, key, keycode)) {
      if ((Lightbox.total > 1 && ((Lightbox.isSlideshow && Lightbox.loopSlides) || (!Lightbox.isSlideshow && Lightbox.loopItems))) || Lightbox.activeImage !== 0) {
        Lightbox.changeData(Lightbox.activeImage - 1);
      }

    }
    // Display next image (n, ->).
    else if (Lightbox.checkKey(Lightbox.keysNext, key, keycode)) {
      if ((Lightbox.total > 1 && ((Lightbox.isSlideshow && Lightbox.loopSlides) || (!Lightbox.isSlideshow && Lightbox.loopItems))) || Lightbox.activeImage != (Lightbox.total - 1)) {
        Lightbox.changeData(Lightbox.activeImage + 1);
      }
    }
    // Zoom in.
    else if (Lightbox.checkKey(Lightbox.keysZoom, key, keycode) && !Lightbox.disableResize && !Lightbox.disableZoom && !Lightbox.isSlideshow && !Lightbox.isLightframe) {
      if (Lightbox.isZoomedIn) {
        Lightbox.changeData(Lightbox.activeImage, false);
      }
      else if (!Lightbox.isZoomedIn) {
        Lightbox.changeData(Lightbox.activeImage, true);
      }
      return false;
    }
    // Toggle play / pause (space).
    else if (Lightbox.checkKey(Lightbox.keysPlayPause, key, keycode) && Lightbox.isSlideshow) {

      if (Lightbox.isPaused) {
        Lightbox.togglePlayPause("lightshowPlay", "lightshowPause");
      }
      else {
        Lightbox.togglePlayPause("lightshowPause", "lightshowPlay");
      }
      return false;
    }
  },

  preloadNeighborImages: function() {

    if ((Lightbox.total - 1) > Lightbox.activeImage) {
      preloadNextImage = new Image();
      preloadNextImage.src = Lightbox.imageArray[Lightbox.activeImage + 1][0];
    }
    if (Lightbox.activeImage > 0) {
      preloadPrevImage = new Image();
      preloadPrevImage.src = Lightbox.imageArray[Lightbox.activeImage - 1][0];
    }

  },

  end: function(caller) {
    var closeClick = (caller == 'slideshow' ? false : true);
    if (Lightbox.isSlideshow && Lightbox.isPaused && !closeClick) {
      return;
    }
    // To prevent double clicks on navigation links.
    if (Lightbox.inprogress === true && caller != 'forceClose') {
      return;
    }
    Lightbox.disableKeyboardNav();
    $('#lightbox').hide();
    $("#lightbox2-overlay").fadeOut();
    Lightbox.isPaused = true;
    Lightbox.inprogress = false;
    // Replaces calls to showSelectBoxes() and showFlash() in original
    // lightbox2.
    Lightbox.toggleSelectsFlash('visible');
    if (Lightbox.isSlideshow) {
      for (var i = 0; i < Lightbox.slideIdCount; i++) {
        window.clearTimeout(Lightbox.slideIdArray[i]);
      }
      $('#lightshowPause, #lightshowPlay').hide();
    }
    else if (Lightbox.isLightframe) {
      $('#frameContainer').empty().hide();
    }
    else if (Lightbox.isVideo || Lightbox.isModal) {
      if (!Lightbox.auto_modal) {
        $('#modalContainer').hide().html("");
      }
      Lightbox.auto_modal = false;
    }
  },


  // getPageScroll()
  // Returns array with x,y page scroll values.
  // Core code from - quirksmode.com.
  getPageScroll : function() {

    var xScroll, yScroll;

    if (self.pageYOffset || self.pageXOffset) {
      yScroll = self.pageYOffset;
      xScroll = self.pageXOffset;
    }
    else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {  // Explorer 6 Strict.
      yScroll = document.documentElement.scrollTop;
      xScroll = document.documentElement.scrollLeft;
    }
    else if (document.body) {// All other Explorers.
      yScroll = document.body.scrollTop;
      xScroll = document.body.scrollLeft;
    }

    arrayPageScroll = [xScroll,yScroll];
    return arrayPageScroll;
  },

  // getPageSize()
  // Returns array with page width, height and window width, height.
  // Core code from - quirksmode.com.
  // Edit for Firefox by pHaez.

  getPageSize : function() {

    var xScroll, yScroll;

    if (window.innerHeight && window.scrollMaxY) {
      xScroll = window.innerWidth + window.scrollMaxX;
      yScroll = window.innerHeight + window.scrollMaxY;
    }
    else if (document.body.scrollHeight > document.body.offsetHeight) { // All but Explorer Mac.
      xScroll = document.body.scrollWidth;
      yScroll = document.body.scrollHeight;
    }
    else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari.
      xScroll = document.body.offsetWidth;
      yScroll = document.body.offsetHeight;
    }

    var windowWidth, windowHeight;

    if (self.innerHeight) { // All except Explorer.
      if (document.documentElement.clientWidth) {
        windowWidth = document.documentElement.clientWidth;
      }
      else {
        windowWidth = self.innerWidth;
      }
      windowHeight = self.innerHeight;
    }
    else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode.
      windowWidth = document.documentElement.clientWidth;
      windowHeight = document.documentElement.clientHeight;
    }
    else if (document.body) { // Other Explorers.
      windowWidth = document.body.clientWidth;
      windowHeight = document.body.clientHeight;
    }
    // For small pages with total height less than height of the viewport.
    if (yScroll < windowHeight) {
      pageHeight = windowHeight;
    }
    else {
      pageHeight = yScroll;
    }
    // For small pages with total width less than width of the viewport.
    if (xScroll < windowWidth) {
      pageWidth = xScroll;
    }
    else {
      pageWidth = windowWidth;
    }
    arrayPageSize = new Array(pageWidth,pageHeight,windowWidth,windowHeight);
    return arrayPageSize;
  },


  // pause(numberMillis)
  pause : function(ms) {
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while (curDate - date < ms);
  },


  // toggleSelectsFlash()
  // Hide / unhide select lists and flash objects as they appear above the
  // lightbox in some browsers.
  toggleSelectsFlash: function (state) {
    if (state == 'visible') {
      $("select.lightbox_hidden, embed.lightbox_hidden, object.lightbox_hidden").show();
    }
    else if (state == 'hide') {
      $("select:visible, embed:visible, object:visible").not('#lightboxAutoModal select, #lightboxAutoModal embed, #lightboxAutoModal object').addClass("lightbox_hidden");
      $("select.lightbox_hidden, embed.lightbox_hidden, object.lightbox_hidden").hide();
    }
  },


  // parseRel()
  parseRel: function (link) {
    var parts = [];
    parts["rel"] = parts["title"] = parts["group"] = parts["style"] = parts["flashvars"] = null;
    if (!$(link).attr('rel')) return parts;
    parts["rel"] = $(link).attr('rel').match(/\w+/)[0];

    if ($(link).attr('rel').match(/\[(.*)\]/)) {
      var info = $(link).attr('rel').match(/\[(.*?)\]/)[1].split('|');
      parts["group"] = info[0];
      parts["style"] = info[1];
      if (parts["style"] != undefined && parts["style"].match(/flashvars:\s?(.*?);/)) {
        parts["flashvars"] = parts["style"].match(/flashvars:\s?(.*?);/)[1];
      }
    }
    if ($(link).attr('rel').match(/\[.*\]\[(.*)\]/)) {
      parts["title"] = $(link).attr('rel').match(/\[.*\]\[(.*)\]/)[1];
    }
    return parts;
  },

  // setStyles()
  setStyles: function(item, styles) {
    item.width = Lightbox.iframe_width;
    item.height = Lightbox.iframe_height;
    item.scrolling = "auto";

    if (!styles) return item;
    var stylesArray = styles.split(';');
    for (var i = 0; i< stylesArray.length; i++) {
      if (stylesArray[i].indexOf('width:') >= 0) {
        var w = stylesArray[i].replace('width:', '');
        item.width = jQuery.trim(w);
      }
      else if (stylesArray[i].indexOf('height:') >= 0) {
        var h = stylesArray[i].replace('height:', '');
        item.height = jQuery.trim(h);
      }
      else if (stylesArray[i].indexOf('scrolling:') >= 0) {
        var scrolling = stylesArray[i].replace('scrolling:', '');
        item.scrolling = jQuery.trim(scrolling);
      }
      else if (stylesArray[i].indexOf('overflow:') >= 0) {
        var overflow = stylesArray[i].replace('overflow:', '');
        item.overflow = jQuery.trim(overflow);
      }
    }
    return item;
  },


  // togglePlayPause()
  // Hide the pause / play button as appropriate.  If pausing the slideshow also
  // clear the timers, otherwise move onto the next image.
  togglePlayPause: function(hideId, showId) {
    if (Lightbox.isSlideshow && hideId == "lightshowPause") {
      for (var i = 0; i < Lightbox.slideIdCount; i++) {
        window.clearTimeout(Lightbox.slideIdArray[i]);
      }
    }
    $('#' + hideId).hide();
    $('#' + showId).show();

    if (hideId == "lightshowPlay") {
      Lightbox.isPaused = false;
      if (!Lightbox.loopSlides && Lightbox.activeImage == (Lightbox.total - 1)) {
        Lightbox.end();
      }
      else if (Lightbox.total > 1) {
        Lightbox.changeData(Lightbox.activeImage + 1);
      }
    }
    else {
      Lightbox.isPaused = true;
    }
  },

  triggerLightbox: function (rel_type, rel_group) {
    if (rel_type.length) {
      if (rel_group && rel_group.length) {
        $("a[rel^='" + rel_type +"\[" + rel_group + "\]'], area[rel^='" + rel_type +"\[" + rel_group + "\]']").eq(0).trigger("click");
      }
      else {
        $("a[rel^='" + rel_type +"'], area[rel^='" + rel_type +"']").eq(0).trigger("click");
      }
    }
  },

  detectMacFF2: function() {
    var ua = navigator.userAgent.toLowerCase();
    if (/firefox[\/\s](\d+\.\d+)/.test(ua)) {
      var ffversion = new Number(RegExp.$1);
      if (ffversion < 3 && ua.indexOf('mac') != -1) {
        return true;
      }
    }
    return false;
  },

  checkKey: function(keys, key, code) {
    return (jQuery.inArray(key, keys) != -1 || jQuery.inArray(String(code), keys) != -1);
  },

  filterXSS: function(str, allowed_tags) {
    var output = "";
    $.ajax({
      url: Drupal.settings.basePath + 'system/lightbox2/filter-xss',
      data: {
        'string' : str,
        'allowed_tags' : allowed_tags
      },
      type: "POST",
      async: false,
      dataType:  "json",
      success: function(data) {
        output = data;
      }
    });
    return output;
  }

};

// Initialize the lightbox.
Drupal.behaviors.initLightbox = function (context) {
  $('body:not(.lightbox-processed)', context).addClass('lightbox-processed').each(function() {
    Lightbox.initialize();
    return false; // Break the each loop.
  });

  // Attach lightbox to any links with lightbox rels.
  Lightbox.initList(context);
  $('#lightboxAutoModal', context).triggerHandler('click');
};

;

(function ($) {
  Drupal.Panels = {};

  Drupal.Panels.autoAttach = function() {
    if ($.browser.msie) {
      // If IE, attach a hover event so we can see our admin links.
      $("div.panel-pane").hover(
        function() {
          $('div.panel-hide', this).addClass("panel-hide-hover"); return true;
        },
        function() {
          $('div.panel-hide', this).removeClass("panel-hide-hover"); return true;
        }
      );
      $("div.admin-links").hover(
        function() {
          $(this).addClass("admin-links-hover"); return true;
        },
        function(){
          $(this).removeClass("admin-links-hover"); return true;
        }
      );
    }
  };

  $(Drupal.Panels.autoAttach);
})(jQuery);
;
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

(function(g){var q={vertical:!1,rtl:!1,start:1,offset:1,size:null,scroll:3,visible:null,animation:"normal",easing:"swing",auto:0,wrap:null,initCallback:null,setupCallback:null,reloadCallback:null,itemLoadCallback:null,itemFirstInCallback:null,itemFirstOutCallback:null,itemLastInCallback:null,itemLastOutCallback:null,itemVisibleInCallback:null,itemVisibleOutCallback:null,animationStepCallback:null,buttonNextHTML:"<div></div>",buttonPrevHTML:"<div></div>",buttonNextEvent:"click",buttonPrevEvent:"click", buttonNextCallback:null,buttonPrevCallback:null,itemFallbackDimension:null},m=!1;g(window).bind("load.jcarousel",function(){m=!0});g.jcarousel=function(a,c){this.options=g.extend({},q,c||{});this.autoStopped=this.locked=!1;this.buttonPrevState=this.buttonNextState=this.buttonPrev=this.buttonNext=this.list=this.clip=this.container=null;if(!c||c.rtl===void 0)this.options.rtl=(g(a).attr("dir")||g("html").attr("dir")||"").toLowerCase()=="rtl";this.wh=!this.options.vertical?"width":"height";this.lt=!this.options.vertical? this.options.rtl?"right":"left":"top";for(var b="",d=a.className.split(" "),f=0;f<d.length;f++)if(d[f].indexOf("jcarousel-skin")!=-1){g(a).removeClass(d[f]);b=d[f];break}a.nodeName.toUpperCase()=="UL"||a.nodeName.toUpperCase()=="OL"?(this.list=g(a),this.clip=this.list.parents(".jcarousel-clip"),this.container=this.list.parents(".jcarousel-container")):(this.container=g(a),this.list=this.container.find("ul,ol").eq(0),this.clip=this.container.find(".jcarousel-clip"));if(this.clip.size()===0)this.clip= this.list.wrap("<div></div>").parent();if(this.container.size()===0)this.container=this.clip.wrap("<div></div>").parent();b!==""&&this.container.parent()[0].className.indexOf("jcarousel-skin")==-1&&this.container.wrap('<div class=" '+b+'"></div>');this.buttonPrev=g(".jcarousel-prev",this.container);if(this.buttonPrev.size()===0&&this.options.buttonPrevHTML!==null)this.buttonPrev=g(this.options.buttonPrevHTML).appendTo(this.container);this.buttonPrev.addClass(this.className("jcarousel-prev"));this.buttonNext= g(".jcarousel-next",this.container);if(this.buttonNext.size()===0&&this.options.buttonNextHTML!==null)this.buttonNext=g(this.options.buttonNextHTML).appendTo(this.container);this.buttonNext.addClass(this.className("jcarousel-next"));this.clip.addClass(this.className("jcarousel-clip")).css({position:"relative"});this.list.addClass(this.className("jcarousel-list")).css({overflow:"hidden",position:"relative",top:0,margin:0,padding:0}).css(this.options.rtl?"right":"left",0);this.container.addClass(this.className("jcarousel-container")).css({position:"relative"}); !this.options.vertical&&this.options.rtl&&this.container.addClass("jcarousel-direction-rtl").attr("dir","rtl");var j=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible):null,b=this.list.children("li"),e=this;if(b.size()>0){var h=0,i=this.options.offset;b.each(function(){e.format(this,i++);h+=e.dimension(this,j)});this.list.css(this.wh,h+100+"px");if(!c||c.size===void 0)this.options.size=b.size()}this.container.css("display","block");this.buttonNext.css("display","block");this.buttonPrev.css("display", "block");this.funcNext=function(){e.next()};this.funcPrev=function(){e.prev()};this.funcResize=function(){e.resizeTimer&&clearTimeout(e.resizeTimer);e.resizeTimer=setTimeout(function(){e.reload()},100)};this.options.initCallback!==null&&this.options.initCallback(this,"init");!m&&g.browser.safari?(this.buttons(!1,!1),g(window).bind("load.jcarousel",function(){e.setup()})):this.setup()};var f=g.jcarousel;f.fn=f.prototype={jcarousel:"0.2.8"};f.fn.extend=f.extend=g.extend;f.fn.extend({setup:function(){this.prevLast= this.prevFirst=this.last=this.first=null;this.animating=!1;this.tail=this.resizeTimer=this.timer=null;this.inTail=!1;if(!this.locked){this.list.css(this.lt,this.pos(this.options.offset)+"px");var a=this.pos(this.options.start,!0);this.prevFirst=this.prevLast=null;this.animate(a,!1);g(window).unbind("resize.jcarousel",this.funcResize).bind("resize.jcarousel",this.funcResize);this.options.setupCallback!==null&&this.options.setupCallback(this)}},reset:function(){this.list.empty();this.list.css(this.lt, "0px");this.list.css(this.wh,"10px");this.options.initCallback!==null&&this.options.initCallback(this,"reset");this.setup()},reload:function(){this.tail!==null&&this.inTail&&this.list.css(this.lt,f.intval(this.list.css(this.lt))+this.tail);this.tail=null;this.inTail=!1;this.options.reloadCallback!==null&&this.options.reloadCallback(this);if(this.options.visible!==null){var a=this,c=Math.ceil(this.clipping()/this.options.visible),b=0,d=0;this.list.children("li").each(function(f){b+=a.dimension(this, c);f+1<a.first&&(d=b)});this.list.css(this.wh,b+"px");this.list.css(this.lt,-d+"px")}this.scroll(this.first,!1)},lock:function(){this.locked=!0;this.buttons()},unlock:function(){this.locked=!1;this.buttons()},size:function(a){if(a!==void 0)this.options.size=a,this.locked||this.buttons();return this.options.size},has:function(a,c){if(c===void 0||!c)c=a;if(this.options.size!==null&&c>this.options.size)c=this.options.size;for(var b=a;b<=c;b++){var d=this.get(b);if(!d.length||d.hasClass("jcarousel-item-placeholder"))return!1}return!0}, get:function(a){return g(">.jcarousel-item-"+a,this.list)},add:function(a,c){var b=this.get(a),d=0,p=g(c);if(b.length===0)for(var j,e=f.intval(a),b=this.create(a);;){if(j=this.get(--e),e<=0||j.length){e<=0?this.list.prepend(b):j.after(b);break}}else d=this.dimension(b);p.get(0).nodeName.toUpperCase()=="LI"?(b.replaceWith(p),b=p):b.empty().append(c);this.format(b.removeClass(this.className("jcarousel-item-placeholder")),a);p=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible): null;d=this.dimension(b,p)-d;a>0&&a<this.first&&this.list.css(this.lt,f.intval(this.list.css(this.lt))-d+"px");this.list.css(this.wh,f.intval(this.list.css(this.wh))+d+"px");return b},remove:function(a){var c=this.get(a);if(c.length&&!(a>=this.first&&a<=this.last)){var b=this.dimension(c);a<this.first&&this.list.css(this.lt,f.intval(this.list.css(this.lt))+b+"px");c.remove();this.list.css(this.wh,f.intval(this.list.css(this.wh))-b+"px")}},next:function(){this.tail!==null&&!this.inTail?this.scrollTail(!1): this.scroll((this.options.wrap=="both"||this.options.wrap=="last")&&this.options.size!==null&&this.last==this.options.size?1:this.first+this.options.scroll)},prev:function(){this.tail!==null&&this.inTail?this.scrollTail(!0):this.scroll((this.options.wrap=="both"||this.options.wrap=="first")&&this.options.size!==null&&this.first==1?this.options.size:this.first-this.options.scroll)},scrollTail:function(a){if(!this.locked&&!this.animating&&this.tail){this.pauseAuto();var c=f.intval(this.list.css(this.lt)), c=!a?c-this.tail:c+this.tail;this.inTail=!a;this.prevFirst=this.first;this.prevLast=this.last;this.animate(c)}},scroll:function(a,c){!this.locked&&!this.animating&&(this.pauseAuto(),this.animate(this.pos(a),c))},pos:function(a,c){var b=f.intval(this.list.css(this.lt));if(this.locked||this.animating)return b;this.options.wrap!="circular"&&(a=a<1?1:this.options.size&&a>this.options.size?this.options.size:a);for(var d=this.first>a,g=this.options.wrap!="circular"&&this.first<=1?1:this.first,j=d?this.get(g): this.get(this.last),e=d?g:g-1,h=null,i=0,k=!1,l=0;d?--e>=a:++e<a;){h=this.get(e);k=!h.length;if(h.length===0&&(h=this.create(e).addClass(this.className("jcarousel-item-placeholder")),j[d?"before":"after"](h),this.first!==null&&this.options.wrap=="circular"&&this.options.size!==null&&(e<=0||e>this.options.size)))j=this.get(this.index(e)),j.length&&(h=this.add(e,j.clone(!0)));j=h;l=this.dimension(h);k&&(i+=l);if(this.first!==null&&(this.options.wrap=="circular"||e>=1&&(this.options.size===null||e<= this.options.size)))b=d?b+l:b-l}for(var g=this.clipping(),m=[],o=0,n=0,j=this.get(a-1),e=a;++o;){h=this.get(e);k=!h.length;if(h.length===0){h=this.create(e).addClass(this.className("jcarousel-item-placeholder"));if(j.length===0)this.list.prepend(h);else j[d?"before":"after"](h);if(this.first!==null&&this.options.wrap=="circular"&&this.options.size!==null&&(e<=0||e>this.options.size))j=this.get(this.index(e)),j.length&&(h=this.add(e,j.clone(!0)))}j=h;l=this.dimension(h);if(l===0)throw Error("jCarousel: No width/height set for items. This will cause an infinite loop. Aborting..."); this.options.wrap!="circular"&&this.options.size!==null&&e>this.options.size?m.push(h):k&&(i+=l);n+=l;if(n>=g)break;e++}for(h=0;h<m.length;h++)m[h].remove();i>0&&(this.list.css(this.wh,this.dimension(this.list)+i+"px"),d&&(b-=i,this.list.css(this.lt,f.intval(this.list.css(this.lt))-i+"px")));i=a+o-1;if(this.options.wrap!="circular"&&this.options.size&&i>this.options.size)i=this.options.size;if(e>i){o=0;e=i;for(n=0;++o;){h=this.get(e--);if(!h.length)break;n+=this.dimension(h);if(n>=g)break}}e=i-o+ 1;this.options.wrap!="circular"&&e<1&&(e=1);if(this.inTail&&d)b+=this.tail,this.inTail=!1;this.tail=null;if(this.options.wrap!="circular"&&i==this.options.size&&i-o+1>=1&&(d=f.intval(this.get(i).css(!this.options.vertical?"marginRight":"marginBottom")),n-d>g))this.tail=n-g-d;if(c&&a===this.options.size&&this.tail)b-=this.tail,this.inTail=!0;for(;a-- >e;)b+=this.dimension(this.get(a));this.prevFirst=this.first;this.prevLast=this.last;this.first=e;this.last=i;return b},animate:function(a,c){if(!this.locked&& !this.animating){this.animating=!0;var b=this,d=function(){b.animating=!1;a===0&&b.list.css(b.lt,0);!b.autoStopped&&(b.options.wrap=="circular"||b.options.wrap=="both"||b.options.wrap=="last"||b.options.size===null||b.last<b.options.size||b.last==b.options.size&&b.tail!==null&&!b.inTail)&&b.startAuto();b.buttons();b.notify("onAfterAnimation");if(b.options.wrap=="circular"&&b.options.size!==null)for(var c=b.prevFirst;c<=b.prevLast;c++)c!==null&&!(c>=b.first&&c<=b.last)&&(c<1||c>b.options.size)&&b.remove(c)}; this.notify("onBeforeAnimation");if(!this.options.animation||c===!1)this.list.css(this.lt,a+"px"),d();else{var f=!this.options.vertical?this.options.rtl?{right:a}:{left:a}:{top:a},d={duration:this.options.animation,easing:this.options.easing,complete:d};if(g.isFunction(this.options.animationStepCallback))d.step=this.options.animationStepCallback;this.list.animate(f,d)}}},startAuto:function(a){if(a!==void 0)this.options.auto=a;if(this.options.auto===0)return this.stopAuto();if(this.timer===null){this.autoStopped= !1;var c=this;this.timer=window.setTimeout(function(){c.next()},this.options.auto*1E3)}},stopAuto:function(){this.pauseAuto();this.autoStopped=!0},pauseAuto:function(){if(this.timer!==null)window.clearTimeout(this.timer),this.timer=null},buttons:function(a,c){if(a==null&&(a=!this.locked&&this.options.size!==0&&(this.options.wrap&&this.options.wrap!="first"||this.options.size===null||this.last<this.options.size),!this.locked&&(!this.options.wrap||this.options.wrap=="first")&&this.options.size!==null&& this.last>=this.options.size))a=this.tail!==null&&!this.inTail;if(c==null&&(c=!this.locked&&this.options.size!==0&&(this.options.wrap&&this.options.wrap!="last"||this.first>1),!this.locked&&(!this.options.wrap||this.options.wrap=="last")&&this.options.size!==null&&this.first==1))c=this.tail!==null&&this.inTail;var b=this;this.buttonNext.size()>0?(this.buttonNext.unbind(this.options.buttonNextEvent+".jcarousel",this.funcNext),a&&this.buttonNext.bind(this.options.buttonNextEvent+".jcarousel",this.funcNext), this.buttonNext[a?"removeClass":"addClass"](this.className("jcarousel-next-disabled")).attr("disabled",a?!1:!0),this.options.buttonNextCallback!==null&&this.buttonNext.data("jcarouselstate")!=a&&this.buttonNext.each(function(){b.options.buttonNextCallback(b,this,a)}).data("jcarouselstate",a)):this.options.buttonNextCallback!==null&&this.buttonNextState!=a&&this.options.buttonNextCallback(b,null,a);this.buttonPrev.size()>0?(this.buttonPrev.unbind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev), c&&this.buttonPrev.bind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev),this.buttonPrev[c?"removeClass":"addClass"](this.className("jcarousel-prev-disabled")).attr("disabled",c?!1:!0),this.options.buttonPrevCallback!==null&&this.buttonPrev.data("jcarouselstate")!=c&&this.buttonPrev.each(function(){b.options.buttonPrevCallback(b,this,c)}).data("jcarouselstate",c)):this.options.buttonPrevCallback!==null&&this.buttonPrevState!=c&&this.options.buttonPrevCallback(b,null,c);this.buttonNextState= a;this.buttonPrevState=c},notify:function(a){var c=this.prevFirst===null?"init":this.prevFirst<this.first?"next":"prev";this.callback("itemLoadCallback",a,c);this.prevFirst!==this.first&&(this.callback("itemFirstInCallback",a,c,this.first),this.callback("itemFirstOutCallback",a,c,this.prevFirst));this.prevLast!==this.last&&(this.callback("itemLastInCallback",a,c,this.last),this.callback("itemLastOutCallback",a,c,this.prevLast));this.callback("itemVisibleInCallback",a,c,this.first,this.last,this.prevFirst, this.prevLast);this.callback("itemVisibleOutCallback",a,c,this.prevFirst,this.prevLast,this.first,this.last)},callback:function(a,c,b,d,f,j,e){if(!(this.options[a]==null||typeof this.options[a]!="object"&&c!="onAfterAnimation")){var h=typeof this.options[a]=="object"?this.options[a][c]:this.options[a];if(g.isFunction(h)){var i=this;if(d===void 0)h(i,b,c);else if(f===void 0)this.get(d).each(function(){h(i,this,d,b,c)});else for(var a=function(a){i.get(a).each(function(){h(i,this,a,b,c)})},k=d;k<=f;k++)k!== null&&!(k>=j&&k<=e)&&a(k)}}},create:function(a){return this.format("<li></li>",a)},format:function(a,c){for(var a=g(a),b=a.get(0).className.split(" "),d=0;d<b.length;d++)b[d].indexOf("jcarousel-")!=-1&&a.removeClass(b[d]);a.addClass(this.className("jcarousel-item")).addClass(this.className("jcarousel-item-"+c)).css({"float":this.options.rtl?"right":"left","list-style":"none"}).attr("jcarouselindex",c);return a},className:function(a){return a+" "+a+(!this.options.vertical?"-horizontal":"-vertical")}, dimension:function(a,c){var b=g(a);if(c==null)return!this.options.vertical?b.outerWidth(!0)||f.intval(this.options.itemFallbackDimension):b.outerHeight(!0)||f.intval(this.options.itemFallbackDimension);else{var d=!this.options.vertical?c-f.intval(b.css("marginLeft"))-f.intval(b.css("marginRight")):c-f.intval(b.css("marginTop"))-f.intval(b.css("marginBottom"));g(b).css(this.wh,d+"px");return this.dimension(b)}},clipping:function(){return!this.options.vertical?this.clip[0].offsetWidth-f.intval(this.clip.css("borderLeftWidth"))- f.intval(this.clip.css("borderRightWidth")):this.clip[0].offsetHeight-f.intval(this.clip.css("borderTopWidth"))-f.intval(this.clip.css("borderBottomWidth"))},index:function(a,c){if(c==null)c=this.options.size;return Math.round(((a-1)/c-Math.floor((a-1)/c))*c)+1}});f.extend({defaults:function(a){return g.extend(q,a||{})},intval:function(a){a=parseInt(a,10);return isNaN(a)?0:a},windowLoaded:function(){m=!0}});g.fn.jcarousel=function(a){if(typeof a=="string"){var c=g(this).data("jcarousel"),b=Array.prototype.slice.call(arguments, 1);return c[a].apply(c,b)}else return this.each(function(){var b=g(this).data("jcarousel");b?(a&&g.extend(b.options,a),b.reload()):g(this).data("jcarousel",new f(this,a))})}})(jQuery);;
/*
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version: 2.88 (08-JUN-2010)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.2.6 or later
 */
(function($){var ver="2.88";if($.support==undefined){$.support={opacity:!($.browser.msie)};}function debug(s){if($.fn.cycle.debug){log(s);}}function log(){if(window.console&&window.console.log){window.console.log("[cycle] "+Array.prototype.join.call(arguments," "));}}$.fn.cycle=function(options,arg2){var o={s:this.selector,c:this.context};if(this.length===0&&options!="stop"){if(!$.isReady&&o.s){log("DOM not ready, queuing slideshow");$(function(){$(o.s,o.c).cycle(options,arg2);});return this;}log("terminating; zero elements found by selector"+($.isReady?"":" (DOM not ready)"));return this;}return this.each(function(){var opts=handleArguments(this,options,arg2);if(opts===false){return;}opts.updateActivePagerLink=opts.updateActivePagerLink||$.fn.cycle.updateActivePagerLink;if(this.cycleTimeout){clearTimeout(this.cycleTimeout);}this.cycleTimeout=this.cyclePause=0;var $cont=$(this);var $slides=opts.slideExpr?$(opts.slideExpr,this):$cont.children();var els=$slides.get();if(els.length<2){log("terminating; too few slides: "+els.length);return;}var opts2=buildOptions($cont,$slides,els,opts,o);if(opts2===false){return;}var startTime=opts2.continuous?10:getTimeout(els[opts2.currSlide],els[opts2.nextSlide],opts2,!opts2.rev);if(startTime){startTime+=(opts2.delay||0);if(startTime<10){startTime=10;}debug("first timeout: "+startTime);this.cycleTimeout=setTimeout(function(){go(els,opts2,0,(!opts2.rev&&!opts.backwards));},startTime);}});};function handleArguments(cont,options,arg2){if(cont.cycleStop==undefined){cont.cycleStop=0;}if(options===undefined||options===null){options={};}if(options.constructor==String){switch(options){case"destroy":case"stop":var opts=$(cont).data("cycle.opts");if(!opts){return false;}cont.cycleStop++;if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);}cont.cycleTimeout=0;$(cont).removeData("cycle.opts");if(options=="destroy"){destroy(opts);}return false;case"toggle":cont.cyclePause=(cont.cyclePause===1)?0:1;checkInstantResume(cont.cyclePause,arg2,cont);return false;case"pause":cont.cyclePause=1;return false;case"resume":cont.cyclePause=0;checkInstantResume(false,arg2,cont);return false;case"prev":case"next":var opts=$(cont).data("cycle.opts");if(!opts){log('options not found, "prev/next" ignored');return false;}$.fn.cycle[options](opts);return false;default:options={fx:options};}return options;}else{if(options.constructor==Number){var num=options;options=$(cont).data("cycle.opts");if(!options){log("options not found, can not advance slide");return false;}if(num<0||num>=options.elements.length){log("invalid slide index: "+num);return false;}options.nextSlide=num;if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0;}if(typeof arg2=="string"){options.oneTimeFx=arg2;}go(options.elements,options,1,num>=options.currSlide);return false;}}return options;function checkInstantResume(isPaused,arg2,cont){if(!isPaused&&arg2===true){var options=$(cont).data("cycle.opts");if(!options){log("options not found, can not resume");return false;}if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0;}go(options.elements,options,1,(!opts.rev&&!opts.backwards));}}}function removeFilter(el,opts){if(!$.support.opacity&&opts.cleartype&&el.style.filter){try{el.style.removeAttribute("filter");}catch(smother){}}}function destroy(opts){if(opts.next){$(opts.next).unbind(opts.prevNextEvent);}if(opts.prev){$(opts.prev).unbind(opts.prevNextEvent);}if(opts.pager||opts.pagerAnchorBuilder){$.each(opts.pagerAnchors||[],function(){this.unbind().remove();});}opts.pagerAnchors=null;if(opts.destroy){opts.destroy(opts);}}function buildOptions($cont,$slides,els,options,o){var opts=$.extend({},$.fn.cycle.defaults,options||{},$.metadata?$cont.metadata():$.meta?$cont.data():{});if(opts.autostop){opts.countdown=opts.autostopCount||els.length;}var cont=$cont[0];$cont.data("cycle.opts",opts);opts.$cont=$cont;opts.stopCount=cont.cycleStop;opts.elements=els;opts.before=opts.before?[opts.before]:[];opts.after=opts.after?[opts.after]:[];opts.after.unshift(function(){opts.busy=0;});if(!$.support.opacity&&opts.cleartype){opts.after.push(function(){removeFilter(this,opts);});}if(opts.continuous){opts.after.push(function(){go(els,opts,0,(!opts.rev&&!opts.backwards));});}saveOriginalOpts(opts);if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg){clearTypeFix($slides);}if($cont.css("position")=="static"){$cont.css("position","relative");}if(opts.width){$cont.width(opts.width);}if(opts.height&&opts.height!="auto"){$cont.height(opts.height);}if(opts.startingSlide){opts.startingSlide=parseInt(opts.startingSlide);}else{if(opts.backwards){opts.startingSlide=els.length-1;}}if(opts.random){opts.randomMap=[];for(var i=0;i<els.length;i++){opts.randomMap.push(i);}opts.randomMap.sort(function(a,b){return Math.random()-0.5;});opts.randomIndex=1;opts.startingSlide=opts.randomMap[1];}else{if(opts.startingSlide>=els.length){opts.startingSlide=0;}}opts.currSlide=opts.startingSlide||0;var first=opts.startingSlide;$slides.css({position:"absolute",top:0,left:0}).hide().each(function(i){var z;if(opts.backwards){z=first?i<=first?els.length+(i-first):first-i:els.length-i;}else{z=first?i>=first?els.length-(i-first):first-i:els.length-i;}$(this).css("z-index",z);});$(els[first]).css("opacity",1).show();removeFilter(els[first],opts);if(opts.fit&&opts.width){$slides.width(opts.width);}if(opts.fit&&opts.height&&opts.height!="auto"){$slides.height(opts.height);}var reshape=opts.containerResize&&!$cont.innerHeight();if(reshape){var maxw=0,maxh=0;for(var j=0;j<els.length;j++){var $e=$(els[j]),e=$e[0],w=$e.outerWidth(),h=$e.outerHeight();if(!w){w=e.offsetWidth||e.width||$e.attr("width");}if(!h){h=e.offsetHeight||e.height||$e.attr("height");}maxw=w>maxw?w:maxw;maxh=h>maxh?h:maxh;}if(maxw>0&&maxh>0){$cont.css({width:maxw+"px",height:maxh+"px"});}}if(opts.pause){$cont.hover(function(){this.cyclePause++;},function(){this.cyclePause--;});}if(supportMultiTransitions(opts)===false){return false;}var requeue=false;options.requeueAttempts=options.requeueAttempts||0;$slides.each(function(){var $el=$(this);this.cycleH=(opts.fit&&opts.height)?opts.height:($el.height()||this.offsetHeight||this.height||$el.attr("height")||0);this.cycleW=(opts.fit&&opts.width)?opts.width:($el.width()||this.offsetWidth||this.width||$el.attr("width")||0);if($el.is("img")){var loadingIE=($.browser.msie&&this.cycleW==28&&this.cycleH==30&&!this.complete);var loadingFF=($.browser.mozilla&&this.cycleW==34&&this.cycleH==19&&!this.complete);var loadingOp=($.browser.opera&&((this.cycleW==42&&this.cycleH==19)||(this.cycleW==37&&this.cycleH==17))&&!this.complete);var loadingOther=(this.cycleH==0&&this.cycleW==0&&!this.complete);if(loadingIE||loadingFF||loadingOp||loadingOther){if(o.s&&opts.requeueOnImageNotLoaded&&++options.requeueAttempts<100){log(options.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH);setTimeout(function(){$(o.s,o.c).cycle(options);},opts.requeueTimeout);requeue=true;return false;}else{log("could not determine size of image: "+this.src,this.cycleW,this.cycleH);}}}return true;});if(requeue){return false;}opts.cssBefore=opts.cssBefore||{};opts.animIn=opts.animIn||{};opts.animOut=opts.animOut||{};$slides.not(":eq("+first+")").css(opts.cssBefore);if(opts.cssFirst){$($slides[first]).css(opts.cssFirst);}if(opts.timeout){opts.timeout=parseInt(opts.timeout);if(opts.speed.constructor==String){opts.speed=$.fx.speeds[opts.speed]||parseInt(opts.speed);}if(!opts.sync){opts.speed=opts.speed/2;}var buffer=opts.fx=="shuffle"?500:250;while((opts.timeout-opts.speed)<buffer){opts.timeout+=opts.speed;}}if(opts.easing){opts.easeIn=opts.easeOut=opts.easing;}if(!opts.speedIn){opts.speedIn=opts.speed;}if(!opts.speedOut){opts.speedOut=opts.speed;}opts.slideCount=els.length;opts.currSlide=opts.lastSlide=first;if(opts.random){if(++opts.randomIndex==els.length){opts.randomIndex=0;}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{if(opts.backwards){opts.nextSlide=opts.startingSlide==0?(els.length-1):opts.startingSlide-1;}else{opts.nextSlide=opts.startingSlide>=(els.length-1)?0:opts.startingSlide+1;}}if(!opts.multiFx){var init=$.fn.cycle.transitions[opts.fx];if($.isFunction(init)){init($cont,$slides,opts);}else{if(opts.fx!="custom"&&!opts.multiFx){log("unknown transition: "+opts.fx,"; slideshow terminating");return false;}}}var e0=$slides[first];if(opts.before.length){opts.before[0].apply(e0,[e0,e0,opts,true]);}if(opts.after.length>1){opts.after[1].apply(e0,[e0,e0,opts,true]);}if(opts.next){$(opts.next).bind(opts.prevNextEvent,function(){return advance(opts,opts.rev?-1:1);});}if(opts.prev){$(opts.prev).bind(opts.prevNextEvent,function(){return advance(opts,opts.rev?1:-1);});}if(opts.pager||opts.pagerAnchorBuilder){buildPager(els,opts);}exposeAddSlide(opts,els);return opts;}function saveOriginalOpts(opts){opts.original={before:[],after:[]};opts.original.cssBefore=$.extend({},opts.cssBefore);opts.original.cssAfter=$.extend({},opts.cssAfter);opts.original.animIn=$.extend({},opts.animIn);opts.original.animOut=$.extend({},opts.animOut);$.each(opts.before,function(){opts.original.before.push(this);});$.each(opts.after,function(){opts.original.after.push(this);});}function supportMultiTransitions(opts){var i,tx,txs=$.fn.cycle.transitions;if(opts.fx.indexOf(",")>0){opts.multiFx=true;opts.fxs=opts.fx.replace(/\s*/g,"").split(",");for(i=0;i<opts.fxs.length;i++){var fx=opts.fxs[i];tx=txs[fx];if(!tx||!txs.hasOwnProperty(fx)||!$.isFunction(tx)){log("discarding unknown transition: ",fx);opts.fxs.splice(i,1);i--;}}if(!opts.fxs.length){log("No valid transitions named; slideshow terminating.");return false;}}else{if(opts.fx=="all"){opts.multiFx=true;opts.fxs=[];for(p in txs){tx=txs[p];if(txs.hasOwnProperty(p)&&$.isFunction(tx)){opts.fxs.push(p);}}}}if(opts.multiFx&&opts.randomizeEffects){var r1=Math.floor(Math.random()*20)+30;for(i=0;i<r1;i++){var r2=Math.floor(Math.random()*opts.fxs.length);opts.fxs.push(opts.fxs.splice(r2,1)[0]);}debug("randomized fx sequence: ",opts.fxs);}return true;}function exposeAddSlide(opts,els){opts.addSlide=function(newSlide,prepend){var $s=$(newSlide),s=$s[0];if(!opts.autostopCount){opts.countdown++;}els[prepend?"unshift":"push"](s);if(opts.els){opts.els[prepend?"unshift":"push"](s);}opts.slideCount=els.length;$s.css("position","absolute");$s[prepend?"prependTo":"appendTo"](opts.$cont);if(prepend){opts.currSlide++;opts.nextSlide++;}if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg){clearTypeFix($s);}if(opts.fit&&opts.width){$s.width(opts.width);}if(opts.fit&&opts.height&&opts.height!="auto"){$slides.height(opts.height);}s.cycleH=(opts.fit&&opts.height)?opts.height:$s.height();s.cycleW=(opts.fit&&opts.width)?opts.width:$s.width();$s.css(opts.cssBefore);if(opts.pager||opts.pagerAnchorBuilder){$.fn.cycle.createPagerAnchor(els.length-1,s,$(opts.pager),els,opts);}if($.isFunction(opts.onAddSlide)){opts.onAddSlide($s);}else{$s.hide();}};}$.fn.cycle.resetState=function(opts,fx){fx=fx||opts.fx;opts.before=[];opts.after=[];opts.cssBefore=$.extend({},opts.original.cssBefore);opts.cssAfter=$.extend({},opts.original.cssAfter);opts.animIn=$.extend({},opts.original.animIn);opts.animOut=$.extend({},opts.original.animOut);opts.fxFn=null;$.each(opts.original.before,function(){opts.before.push(this);});$.each(opts.original.after,function(){opts.after.push(this);});var init=$.fn.cycle.transitions[fx];if($.isFunction(init)){init(opts.$cont,$(opts.elements),opts);}};function go(els,opts,manual,fwd){if(manual&&opts.busy&&opts.manualTrump){debug("manualTrump in go(), stopping active transition");$(els).stop(true,true);opts.busy=false;}if(opts.busy){debug("transition active, ignoring new tx request");return;}var p=opts.$cont[0],curr=els[opts.currSlide],next=els[opts.nextSlide];if(p.cycleStop!=opts.stopCount||p.cycleTimeout===0&&!manual){return;}if(!manual&&!p.cyclePause&&!opts.bounce&&((opts.autostop&&(--opts.countdown<=0))||(opts.nowrap&&!opts.random&&opts.nextSlide<opts.currSlide))){if(opts.end){opts.end(opts);}return;}var changed=false;if((manual||!p.cyclePause)&&(opts.nextSlide!=opts.currSlide)){changed=true;var fx=opts.fx;curr.cycleH=curr.cycleH||$(curr).height();curr.cycleW=curr.cycleW||$(curr).width();next.cycleH=next.cycleH||$(next).height();next.cycleW=next.cycleW||$(next).width();if(opts.multiFx){if(opts.lastFx==undefined||++opts.lastFx>=opts.fxs.length){opts.lastFx=0;}fx=opts.fxs[opts.lastFx];opts.currFx=fx;}if(opts.oneTimeFx){fx=opts.oneTimeFx;opts.oneTimeFx=null;}$.fn.cycle.resetState(opts,fx);if(opts.before.length){$.each(opts.before,function(i,o){if(p.cycleStop!=opts.stopCount){return;}o.apply(next,[curr,next,opts,fwd]);});}var after=function(){$.each(opts.after,function(i,o){if(p.cycleStop!=opts.stopCount){return;}o.apply(next,[curr,next,opts,fwd]);});};debug("tx firing; currSlide: "+opts.currSlide+"; nextSlide: "+opts.nextSlide);opts.busy=1;if(opts.fxFn){opts.fxFn(curr,next,opts,after,fwd,manual&&opts.fastOnEvent);}else{if($.isFunction($.fn.cycle[opts.fx])){$.fn.cycle[opts.fx](curr,next,opts,after,fwd,manual&&opts.fastOnEvent);}else{$.fn.cycle.custom(curr,next,opts,after,fwd,manual&&opts.fastOnEvent);}}}if(changed||opts.nextSlide==opts.currSlide){opts.lastSlide=opts.currSlide;if(opts.random){opts.currSlide=opts.nextSlide;if(++opts.randomIndex==els.length){opts.randomIndex=0;}opts.nextSlide=opts.randomMap[opts.randomIndex];if(opts.nextSlide==opts.currSlide){opts.nextSlide=(opts.currSlide==opts.slideCount-1)?0:opts.currSlide+1;}}else{if(opts.backwards){var roll=(opts.nextSlide-1)<0;if(roll&&opts.bounce){opts.backwards=!opts.backwards;opts.nextSlide=1;opts.currSlide=0;}else{opts.nextSlide=roll?(els.length-1):opts.nextSlide-1;opts.currSlide=roll?0:opts.nextSlide+1;}}else{var roll=(opts.nextSlide+1)==els.length;if(roll&&opts.bounce){opts.backwards=!opts.backwards;opts.nextSlide=els.length-2;opts.currSlide=els.length-1;}else{opts.nextSlide=roll?0:opts.nextSlide+1;opts.currSlide=roll?els.length-1:opts.nextSlide-1;}}}}if(changed&&opts.pager){opts.updateActivePagerLink(opts.pager,opts.currSlide,opts.activePagerClass);}var ms=0;if(opts.timeout&&!opts.continuous){ms=getTimeout(els[opts.currSlide],els[opts.nextSlide],opts,fwd);}else{if(opts.continuous&&p.cyclePause){ms=10;}}if(ms>0){p.cycleTimeout=setTimeout(function(){go(els,opts,0,(!opts.rev&&!opts.backwards));},ms);}}$.fn.cycle.updateActivePagerLink=function(pager,currSlide,clsName){$(pager).each(function(){$(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);});};function getTimeout(curr,next,opts,fwd){if(opts.timeoutFn){var t=opts.timeoutFn.call(curr,curr,next,opts,fwd);while((t-opts.speed)<250){t+=opts.speed;}debug("calculated timeout: "+t+"; speed: "+opts.speed);if(t!==false){return t;}}return opts.timeout;}$.fn.cycle.next=function(opts){advance(opts,opts.rev?-1:1);};$.fn.cycle.prev=function(opts){advance(opts,opts.rev?1:-1);};function advance(opts,val){var els=opts.elements;var p=opts.$cont[0],timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0;}if(opts.random&&val<0){opts.randomIndex--;if(--opts.randomIndex==-2){opts.randomIndex=els.length-2;}else{if(opts.randomIndex==-1){opts.randomIndex=els.length-1;}}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{if(opts.random){opts.nextSlide=opts.randomMap[opts.randomIndex];}else{opts.nextSlide=opts.currSlide+val;if(opts.nextSlide<0){if(opts.nowrap){return false;}opts.nextSlide=els.length-1;}else{if(opts.nextSlide>=els.length){if(opts.nowrap){return false;}opts.nextSlide=0;}}}}var cb=opts.onPrevNextEvent||opts.prevNextClick;if($.isFunction(cb)){cb(val>0,opts.nextSlide,els[opts.nextSlide]);}go(els,opts,1,val>=0);return false;}function buildPager(els,opts){var $p=$(opts.pager);$.each(els,function(i,o){$.fn.cycle.createPagerAnchor(i,o,$p,els,opts);});opts.updateActivePagerLink(opts.pager,opts.startingSlide,opts.activePagerClass);}$.fn.cycle.createPagerAnchor=function(i,el,$p,els,opts){var a;if($.isFunction(opts.pagerAnchorBuilder)){a=opts.pagerAnchorBuilder(i,el);debug("pagerAnchorBuilder("+i+", el) returned: "+a);}else{a='<a href="#">'+(i+1)+"</a>";}if(!a){return;}var $a=$(a);if($a.parents("body").length===0){var arr=[];if($p.length>1){$p.each(function(){var $clone=$a.clone(true);$(this).append($clone);arr.push($clone[0]);});$a=$(arr);}else{$a.appendTo($p);}}opts.pagerAnchors=opts.pagerAnchors||[];opts.pagerAnchors.push($a);$a.bind(opts.pagerEvent,function(e){e.preventDefault();opts.nextSlide=i;var p=opts.$cont[0],timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0;}var cb=opts.onPagerEvent||opts.pagerClick;if($.isFunction(cb)){cb(opts.nextSlide,els[opts.nextSlide]);}go(els,opts,1,opts.currSlide<i);});if(!/^click/.test(opts.pagerEvent)&&!opts.allowPagerClickBubble){$a.bind("click.cycle",function(){return false;});}if(opts.pauseOnPagerHover){$a.hover(function(){opts.$cont[0].cyclePause++;},function(){opts.$cont[0].cyclePause--;});}};$.fn.cycle.hopsFromLast=function(opts,fwd){var hops,l=opts.lastSlide,c=opts.currSlide;if(fwd){hops=c>l?c-l:opts.slideCount-l;}else{hops=c<l?l-c:l+opts.slideCount-c;}return hops;};function clearTypeFix($slides){debug("applying clearType background-color hack");function hex(s){s=parseInt(s).toString(16);return s.length<2?"0"+s:s;}function getBg(e){for(;e&&e.nodeName.toLowerCase()!="html";e=e.parentNode){var v=$.css(e,"background-color");if(v.indexOf("rgb")>=0){var rgb=v.match(/\d+/g);return"#"+hex(rgb[0])+hex(rgb[1])+hex(rgb[2]);}if(v&&v!="transparent"){return v;}}return"#ffffff";}$slides.each(function(){$(this).css("background-color",getBg(this));});}$.fn.cycle.commonReset=function(curr,next,opts,w,h,rev){$(opts.elements).not(curr).hide();opts.cssBefore.opacity=1;opts.cssBefore.display="block";if(w!==false&&next.cycleW>0){opts.cssBefore.width=next.cycleW;}if(h!==false&&next.cycleH>0){opts.cssBefore.height=next.cycleH;}opts.cssAfter=opts.cssAfter||{};opts.cssAfter.display="none";$(curr).css("zIndex",opts.slideCount+(rev===true?1:0));$(next).css("zIndex",opts.slideCount+(rev===true?0:1));};$.fn.cycle.custom=function(curr,next,opts,cb,fwd,speedOverride){var $l=$(curr),$n=$(next);var speedIn=opts.speedIn,speedOut=opts.speedOut,easeIn=opts.easeIn,easeOut=opts.easeOut;$n.css(opts.cssBefore);if(speedOverride){if(typeof speedOverride=="number"){speedIn=speedOut=speedOverride;}else{speedIn=speedOut=1;}easeIn=easeOut=null;}var fn=function(){$n.animate(opts.animIn,speedIn,easeIn,cb);};$l.animate(opts.animOut,speedOut,easeOut,function(){if(opts.cssAfter){$l.css(opts.cssAfter);}if(!opts.sync){fn();}});if(opts.sync){fn();}};$.fn.cycle.transitions={fade:function($cont,$slides,opts){$slides.not(":eq("+opts.currSlide+")").css("opacity",0);opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.opacity=0;});opts.animIn={opacity:1};opts.animOut={opacity:0};opts.cssBefore={top:0,left:0};}};$.fn.cycle.ver=function(){return ver;};$.fn.cycle.defaults={fx:"fade",timeout:4000,timeoutFn:null,continuous:0,speed:1000,speedIn:null,speedOut:null,next:null,prev:null,onPrevNextEvent:null,prevNextEvent:"click.cycle",pager:null,onPagerEvent:null,pagerEvent:"click.cycle",allowPagerClickBubble:false,pagerAnchorBuilder:null,before:null,after:null,end:null,easing:null,easeIn:null,easeOut:null,shuffle:null,animIn:null,animOut:null,cssBefore:null,cssAfter:null,fxFn:null,height:"auto",startingSlide:0,sync:1,random:0,fit:0,containerResize:1,pause:0,pauseOnPagerHover:0,autostop:0,autostopCount:0,delay:0,slideExpr:null,cleartype:!$.support.opacity,cleartypeNoBg:false,nowrap:0,fastOnEvent:0,randomizeEffects:1,rev:0,manualTrump:true,requeueOnImageNotLoaded:true,requeueTimeout:250,activePagerClass:"activeSlide",updateActivePagerLink:null,backwards:false};})(jQuery);
/*
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version:	 2.72
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($){$.fn.cycle.transitions.none=function($cont,$slides,opts){opts.fxFn=function(curr,next,opts,after){$(next).show();$(curr).hide();after();};};$.fn.cycle.transitions.scrollUp=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var h=$cont.height();opts.cssBefore={top:h,left:0};opts.cssFirst={top:0};opts.animIn={top:0};opts.animOut={top:-h};};$.fn.cycle.transitions.scrollDown=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var h=$cont.height();opts.cssFirst={top:0};opts.cssBefore={top:-h,left:0};opts.animIn={top:0};opts.animOut={top:h};};$.fn.cycle.transitions.scrollLeft=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var w=$cont.width();opts.cssFirst={left:0};opts.cssBefore={left:w,top:0};opts.animIn={left:0};opts.animOut={left:0-w};};$.fn.cycle.transitions.scrollRight=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var w=$cont.width();opts.cssFirst={left:0};opts.cssBefore={left:-w,top:0};opts.animIn={left:0};opts.animOut={left:w};};$.fn.cycle.transitions.scrollHorz=function($cont,$slides,opts){$cont.css("overflow","hidden").width();opts.before.push(function(curr,next,opts,fwd){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.left=fwd?(next.cycleW-1):(1-next.cycleW);opts.animOut.left=fwd?-curr.cycleW:curr.cycleW;});opts.cssFirst={left:0};opts.cssBefore={top:0};opts.animIn={left:0};opts.animOut={top:0};};$.fn.cycle.transitions.scrollVert=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push(function(curr,next,opts,fwd){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.top=fwd?(1-next.cycleH):(next.cycleH-1);opts.animOut.top=fwd?curr.cycleH:-curr.cycleH;});opts.cssFirst={top:0};opts.cssBefore={left:0};opts.animIn={top:0};opts.animOut={left:0};};$.fn.cycle.transitions.slideX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$(opts.elements).not(curr).hide();$.fn.cycle.commonReset(curr,next,opts,false,true);opts.animIn.width=next.cycleW;});opts.cssBefore={left:0,top:0,width:0};opts.animIn={width:"show"};opts.animOut={width:0};};$.fn.cycle.transitions.slideY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$(opts.elements).not(curr).hide();$.fn.cycle.commonReset(curr,next,opts,true,false);opts.animIn.height=next.cycleH;});opts.cssBefore={left:0,top:0,height:0};opts.animIn={height:"show"};opts.animOut={height:0};};$.fn.cycle.transitions.shuffle=function($cont,$slides,opts){var i,w=$cont.css("overflow","visible").width();$slides.css({left:0,top:0});opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);});if(!opts.speedAdjusted){opts.speed=opts.speed/2;opts.speedAdjusted=true;}opts.random=0;opts.shuffle=opts.shuffle||{left:-w,top:15};opts.els=[];for(i=0;i<$slides.length;i++){opts.els.push($slides[i]);}for(i=0;i<opts.currSlide;i++){opts.els.push(opts.els.shift());}opts.fxFn=function(curr,next,opts,cb,fwd){var $el=fwd?$(curr):$(next);$(next).css(opts.cssBefore);var count=opts.slideCount;$el.animate(opts.shuffle,opts.speedIn,opts.easeIn,function(){var hops=$.fn.cycle.hopsFromLast(opts,fwd);for(var k=0;k<hops;k++){fwd?opts.els.push(opts.els.shift()):opts.els.unshift(opts.els.pop());}if(fwd){for(var i=0,len=opts.els.length;i<len;i++){$(opts.els[i]).css("z-index",len-i+count);}}else{var z=$(curr).css("z-index");$el.css("z-index",parseInt(z)+1+count);}$el.animate({left:0,top:0},opts.speedOut,opts.easeOut,function(){$(fwd?this:curr).hide();if(cb){cb();}});});};opts.cssBefore={display:"block",opacity:1,top:0,left:0};};$.fn.cycle.transitions.turnUp=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.cssBefore.top=next.cycleH;opts.animIn.height=next.cycleH;});opts.cssFirst={top:0};opts.cssBefore={left:0,height:0};opts.animIn={top:0};opts.animOut={height:0};};$.fn.cycle.transitions.turnDown=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssFirst={top:0};opts.cssBefore={left:0,top:0,height:0};opts.animOut={height:0};};$.fn.cycle.transitions.turnLeft=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.cssBefore.left=next.cycleW;opts.animIn.width=next.cycleW;});opts.cssBefore={top:0,width:0};opts.animIn={left:0};opts.animOut={width:0};};$.fn.cycle.transitions.turnRight=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.animIn.width=next.cycleW;opts.animOut.left=curr.cycleW;});opts.cssBefore={top:0,left:0,width:0};opts.animIn={left:0};opts.animOut={width:0};};$.fn.cycle.transitions.zoom=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,false,true);opts.cssBefore.top=next.cycleH/2;opts.cssBefore.left=next.cycleW/2;opts.animIn={top:0,left:0,width:next.cycleW,height:next.cycleH};opts.animOut={width:0,height:0,top:curr.cycleH/2,left:curr.cycleW/2};});opts.cssFirst={top:0,left:0};opts.cssBefore={width:0,height:0};};$.fn.cycle.transitions.fadeZoom=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,false);opts.cssBefore.left=next.cycleW/2;opts.cssBefore.top=next.cycleH/2;opts.animIn={top:0,left:0,width:next.cycleW,height:next.cycleH};});opts.cssBefore={width:0,height:0};opts.animOut={opacity:0};};$.fn.cycle.transitions.blindX=function($cont,$slides,opts){var w=$cont.css("overflow","hidden").width();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.width=next.cycleW;opts.animOut.left=curr.cycleW;});opts.cssBefore={left:w,top:0};opts.animIn={left:0};opts.animOut={left:w};};$.fn.cycle.transitions.blindY=function($cont,$slides,opts){var h=$cont.css("overflow","hidden").height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssBefore={top:h,left:0};opts.animIn={top:0};opts.animOut={top:h};};$.fn.cycle.transitions.blindZ=function($cont,$slides,opts){var h=$cont.css("overflow","hidden").height();var w=$cont.width();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssBefore={top:h,left:w};opts.animIn={top:0,left:0};opts.animOut={top:h,left:w};};$.fn.cycle.transitions.growX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.cssBefore.left=this.cycleW/2;opts.animIn={left:0,width:this.cycleW};opts.animOut={left:0};});opts.cssBefore={width:0,top:0};};$.fn.cycle.transitions.growY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.cssBefore.top=this.cycleH/2;opts.animIn={top:0,height:this.cycleH};opts.animOut={top:0};});opts.cssBefore={height:0,left:0};};$.fn.cycle.transitions.curtainX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true,true);opts.cssBefore.left=next.cycleW/2;opts.animIn={left:0,width:this.cycleW};opts.animOut={left:curr.cycleW/2,width:0};});opts.cssBefore={top:0,width:0};};$.fn.cycle.transitions.curtainY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false,true);opts.cssBefore.top=next.cycleH/2;opts.animIn={top:0,height:next.cycleH};opts.animOut={top:curr.cycleH/2,height:0};});opts.cssBefore={left:0,height:0};};$.fn.cycle.transitions.cover=function($cont,$slides,opts){var d=opts.direction||"left";var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);if(d=="right"){opts.cssBefore.left=-w;}else{if(d=="up"){opts.cssBefore.top=h;}else{if(d=="down"){opts.cssBefore.top=-h;}else{opts.cssBefore.left=w;}}}});opts.animIn={left:0,top:0};opts.animOut={opacity:1};opts.cssBefore={top:0,left:0};};$.fn.cycle.transitions.uncover=function($cont,$slides,opts){var d=opts.direction||"left";var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);if(d=="right"){opts.animOut.left=w;}else{if(d=="up"){opts.animOut.top=-h;}else{if(d=="down"){opts.animOut.top=h;}else{opts.animOut.left=-w;}}}});opts.animIn={left:0,top:0};opts.animOut={opacity:1};opts.cssBefore={top:0,left:0};};$.fn.cycle.transitions.toss=function($cont,$slides,opts){var w=$cont.css("overflow","visible").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);if(!opts.animOut.left&&!opts.animOut.top){opts.animOut={left:w*2,top:-h/2,opacity:0};}else{opts.animOut.opacity=0;}});opts.cssBefore={left:0,top:0};opts.animIn={left:0};};$.fn.cycle.transitions.wipe=function($cont,$slides,opts){var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.cssBefore=opts.cssBefore||{};var clip;if(opts.clip){if(/l2r/.test(opts.clip)){clip="rect(0px 0px "+h+"px 0px)";}else{if(/r2l/.test(opts.clip)){clip="rect(0px "+w+"px "+h+"px "+w+"px)";}else{if(/t2b/.test(opts.clip)){clip="rect(0px "+w+"px 0px 0px)";}else{if(/b2t/.test(opts.clip)){clip="rect("+h+"px "+w+"px "+h+"px 0px)";}else{if(/zoom/.test(opts.clip)){var top=parseInt(h/2);var left=parseInt(w/2);clip="rect("+top+"px "+left+"px "+top+"px "+left+"px)";}}}}}}opts.cssBefore.clip=opts.cssBefore.clip||clip||"rect(0px 0px 0px 0px)";var d=opts.cssBefore.clip.match(/(\d+)/g);var t=parseInt(d[0]),r=parseInt(d[1]),b=parseInt(d[2]),l=parseInt(d[3]);opts.before.push(function(curr,next,opts){if(curr==next){return;}var $curr=$(curr),$next=$(next);$.fn.cycle.commonReset(curr,next,opts,true,true,false);opts.cssAfter.display="block";var step=1,count=parseInt((opts.speedIn/13))-1;(function f(){var tt=t?t-parseInt(step*(t/count)):0;var ll=l?l-parseInt(step*(l/count)):0;var bb=b<h?b+parseInt(step*((h-b)/count||1)):h;var rr=r<w?r+parseInt(step*((w-r)/count||1)):w;$next.css({clip:"rect("+tt+"px "+rr+"px "+bb+"px "+ll+"px)"});(step++<=count)?setTimeout(f,13):$curr.css("display","none");})();});opts.cssBefore={display:"block",opacity:1,top:0,left:0};opts.animIn={left:0};opts.animOut={left:0};};})(jQuery);;
// $Id: views_slideshow.js,v 1.1.2.1.2.39 2010/07/01 03:29:08 redndahead Exp $

/**
 *  @file
 *  A simple jQuery SingleFrame Div Slideshow Rotator.
 */

/**
 * This will set our initial behavior, by starting up each individual slideshow.
 */
Drupal.behaviors.viewsSlideshowSingleFrame = function (context) {
  $('.views_slideshow_singleframe_main:not(.viewsSlideshowSingleFrame-processed)', context).addClass('viewsSlideshowSingleFrame-processed').each(function() {
    var fullId = '#' + $(this).attr('id');
    var settings = Drupal.settings.viewsSlideshowSingleFrame[fullId];
    settings.targetId = '#' + $(fullId + " :first").attr('id');
    settings.paused = false;

    settings.opts = {
      speed:settings.speed,
      timeout:parseInt(settings.timeout),
      delay:parseInt(settings.delay),
      sync:settings.sync==1,
      random:settings.random==1,
      pause:false,
      allowPagerClickBubble:(settings.pager_hover==1 || settings.pager_click_to_page),
      prev:(settings.controls > 0)?'#views_slideshow_singleframe_prev_' + settings.vss_id:null,
      next:(settings.controls > 0)?'#views_slideshow_singleframe_next_' + settings.vss_id:null,
      pager:(settings.pager > 0)?'#views_slideshow_singleframe_pager_' + settings.vss_id:null,
      nowrap:parseInt(settings.nowrap),
      pagerAnchorBuilder: function(idx, slide) {
        var classes = 'pager-item pager-num-' + (idx+1);
        if (idx == 0) {
          classes += ' first';
        }
        if ($(slide).siblings().length == idx) {
          classes += ' last';
        }

        if (idx % 2) {
          classes += ' odd';
        }
        else {
          classes += ' even';
        }
        
        var theme = 'viewsSlideshowPager' + settings.pager_type;
        return Drupal.theme.prototype[theme] ? Drupal.theme(theme, classes, idx, slide, settings) : '';
      },
      after:function(curr, next, opts) {
        // Used for Image Counter.
        if (settings.image_count) {
          $('#views_slideshow_singleframe_image_count_' + settings.vss_id + ' span.num').html(opts.currSlide + 1);
          $('#views_slideshow_singleframe_image_count_' + settings.vss_id + ' span.total').html(opts.slideCount);
        }
      },
      before:function(curr, next, opts) {
        // Remember last slide.
        if (settings.remember_slide) {
          createCookie(settings.vss_id, opts.currSlide + 1, settings.remember_slide_days);
        }

        // Make variable height.
        if (settings.fixed_height == 0) {
          //get the height of the current slide
          var $ht = $(this).height();
          //set the container's height to that of the current slide
          $(this).parent().animate({height: $ht});
        }
      },
      cleartype:(settings.ie.cleartype == 'true')? true : false,
      cleartypeNoBg:(settings.ie.cleartypenobg == 'true')? true : false
    }
    
    // Set the starting slide if we are supposed to remember the slide
    if (settings.remember_slide) {
      var startSlide = readCookie(settings.vss_id);
      if (startSlide == null) {
        startSlide = 0;
      }
      settings.opts.startingSlide =  startSlide;
    }

    if (settings.pager_hover == 1) {
      settings.opts.pagerEvent = 'mouseover';
      settings.opts.pauseOnPagerHover = true;
    }

    if (settings.effect == 'none') {
      settings.opts.speed = 1;
    }
    else {
      settings.opts.fx = settings.effect;
    }

    // Pause on hover.
    if (settings.pause == 1) {
      $('#views_slideshow_singleframe_teaser_section_' + settings.vss_id).hover(function() {
        $(settings.targetId).cycle('pause');
      }, function() {
        if (settings.paused == false) {
          $(settings.targetId).cycle('resume');
        }
      });
    }

    // Pause on clicking of the slide.
    if (settings.pause_on_click == 1) {
      $('#views_slideshow_singleframe_teaser_section_' + settings.vss_id).click(function() { 
        viewsSlideshowSingleFramePause(settings);
      });
    }

    // Add additional settings.
		if (settings.advanced != "\n") {
      var advanced = settings.advanced.split("\n");
      for (i=0; i<advanced.length; i++) {
        var prop = '';
        var value = '';
        var property = advanced[i].split(":");
        for (j=0; j<property.length; j++) {
          if (j == 0) {
            prop = property[j];
          }
          else if (j == 1) {
            value = property[j];
          }
          else {
            value += ":" + property[j];
          }
        }

        // Need to evaluate so true, false and numerics aren't a string.
        if (value == 'true' || value == 'false' || IsNumeric(value)) {
          value = eval(value);
        }
        else {
          // Parse strings into functions.
          var func = value.match(/function\s*\((.*?)\)\s*\{(.*)\}/i);
          if (func) {
            value = new Function(func[1].match(/(\w+)/g), func[2]);
          }
        }
	
        // Call both functions if prop was set previously.
        if (typeof(value) == "function" && prop in settings.opts) {
          var callboth = function(before_func, new_func) {
            return function() {
              before_func.apply(null, arguments);
              new_func.apply(null, arguments);
            };
          };
          settings.opts[prop] = callboth(settings.opts[prop], value);
        }
        else {
          settings.opts[prop] = value;
        }
      }
    }
    
    $(settings.targetId).cycle(settings.opts);

    // Start Paused
    if (settings.start_paused) {
      viewsSlideshowSingleFramePause(settings);
    }
    
    // Pause if hidden.
    if (settings.pause_when_hidden) {
      var checkPause = function(settings) {
        // If the slideshow is visible and it is paused then resume.
        // otherwise if the slideshow is not visible and it is not paused then
        // pause it.
        var visible = viewsSlideshowSingleFrameIsVisible(settings.targetId, settings.pause_when_hidden_type, settings.amount_allowed_visible);
        if (visible && settings.paused) {
          viewsSlideshowSingleFrameResume(settings);
        }
        else if (!visible && !settings.paused) {
          viewsSlideshowSingleFramePause(settings);
        }
      }
     
      // Check when scrolled.
      $(window).scroll(function() {
       checkPause(settings);
      });
      
      // Check when the window is resized.
      $(window).resize(function() {
        checkPause(settings);
      });
    }

    // Show image count for people who have js enabled.
    $('#views_slideshow_singleframe_image_count_' + settings.vss_id).show();

    if (settings.controls > 0) {
      // Show controls for people who have js enabled browsers.
      $('#views_slideshow_singleframe_controls_' + settings.vss_id).show();
      
      $('#views_slideshow_singleframe_playpause_' + settings.vss_id).click(function(e) {
      	if (settings.paused) {
      	  viewsSlideshowSingleFrameResume(settings);
      	}
      	else {
      	  viewsSlideshowSingleFramePause(settings);
      	}
        e.preventDefault();
      });
    }
  });
}

// Pause the slideshow 
viewsSlideshowSingleFramePause = function (settings) {
  //make Resume translatable
  var resume = Drupal.t('Resume');

  $(settings.targetId).cycle('pause');
  if (settings.controls > 0) {
    $('#views_slideshow_singleframe_playpause_' + settings.vss_id)
      .addClass('views_slideshow_singleframe_play')
      .addClass('views_slideshow_play')
      .removeClass('views_slideshow_singleframe_pause')
      .removeClass('views_slideshow_pause')
      .text(resume);
  }
  settings.paused = true;
}

// Resume the slideshow
viewsSlideshowSingleFrameResume = function (settings) {
  $(settings.targetId).cycle('resume');
  if (settings.controls > 0) {
    $('#views_slideshow_singleframe_playpause_' + settings.vss_id)
      .addClass('views_slideshow_singleframe_pause')
      .addClass('views_slideshow_pause')
      .removeClass('views_slideshow_singleframe_play')
      .removeClass('views_slideshow_play')
      .text('Pause');
  }
  settings.paused = false;
}

Drupal.theme.prototype.viewsSlideshowPagerThumbnails = function (classes, idx, slide, settings) {
  var href = '#';
  if (settings.pager_click_to_page) {
    href = $(slide).find('a').attr('href');
  }
  return '<div class="' + classes + '"><a href="' + href + '"><img src="' + $(slide).find('img').attr('src') + '" /></a></div>';
}

Drupal.theme.prototype.viewsSlideshowPagerNumbered = function (classes, idx, slide, settings) {
  var href = '#';
  if (settings.pager_click_to_page) {
    href = $(slide).find('a').attr('href');
  }
  return '<div class="' + classes + '"><a href="' + href + '">' + (idx+1) + '</a></div>';
}

// Verify that the value is a number.
function IsNumeric(sText) {
  var ValidChars = "0123456789";
  var IsNumber=true;
  var Char;

  for (var i=0; i < sText.length && IsNumber == true; i++) { 
    Char = sText.charAt(i); 
    if (ValidChars.indexOf(Char) == -1) {
      IsNumber = false;
    }
  }
  return IsNumber;
}

/**
 * Cookie Handling Functions
 */
function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else {
    var expires = "";
  }
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) {
      return c.substring(nameEQ.length,c.length);
    }
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}

/**
 * Checks to see if the slide is visible enough.
 * elem = element to check.
 * type = The way to calculate how much is visible.
 * amountVisible = amount that should be visible. Either in percent or px. If
 *                it's not defined then all of the slide must be visible.
 *
 * Returns true or false
 */
function viewsSlideshowSingleFrameIsVisible(elem, type, amountVisible) {
  // Get the top and bottom of the window;
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var docViewLeft = $(window).scrollLeft();
  var docViewRight = docViewLeft + $(window).width();

  // Get the top, bottom, and height of the slide;
  var elemTop = $(elem).offset().top;
  var elemHeight = $(elem).height();
  var elemBottom = elemTop + elemHeight;
  var elemLeft = $(elem).offset().left;
  var elemWidth = $(elem).width();
  var elemRight = elemLeft + elemWidth;
  var elemArea = elemHeight * elemWidth;
  
  // Calculate what's hiding in the slide.
  var missingLeft = 0;
  var missingRight = 0;
  var missingTop = 0;
  var missingBottom = 0;
  
  // Find out how much of the slide is missing from the left.
  if (elemLeft < docViewLeft) {
    missingLeft = docViewLeft - elemLeft;
  }

  // Find out how much of the slide is missing from the right.
  if (elemRight > docViewRight) {
    missingRight = elemRight - docViewRight;
  }
  
  // Find out how much of the slide is missing from the top.
  if (elemTop < docViewTop) {
    missingTop = docViewTop - elemTop;
  }

  // Find out how much of the slide is missing from the bottom.
  if (elemBottom > docViewBottom) {
    missingBottom = elemBottom - docViewBottom;
  }
  
  // If there is no amountVisible defined then check to see if the whole slide
  // is visible.
  if (type == 'full') {
    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
    && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop)
    && (elemLeft >= docViewLeft) && (elemRight <= docViewRight)
    && (elemLeft <= docViewRight) && (elemRight >= docViewLeft));
  }
  else if(type == 'vertical') {
    var verticalShowing = elemHeight - missingTop - missingBottom;
    
    // If user specified a percentage then find out if the current shown percent
    // is larger than the allowed percent.
    // Otherwise check to see if the amount of px shown is larger than the
    // allotted amount.
    if (amountVisible.indexOf('%')) {
      return (((verticalShowing/elemHeight)*100) >= parseInt(amountVisible));
    }
    else {
      return (verticalShowing >= parseInt(amountVisible));
    }
  }
  else if(type == 'horizontal') {
    var horizontalShowing = elemWidth - missingLeft - missingRight;
    
    // If user specified a percentage then find out if the current shown percent
    // is larger than the allowed percent.
    // Otherwise check to see if the amount of px shown is larger than the
    // allotted amount.
    if (amountVisible.indexOf('%')) {
      return (((horizontalShowing/elemWidth)*100) >= parseInt(amountVisible));
    }
    else {
      return (horizontalShowing >= parseInt(amountVisible));
    }
  }
  else if(type == 'area') {
    var areaShowing = (elemWidth - missingLeft - missingRight) * (elemHeight - missingTop - missingBottom);
    
    // If user specified a percentage then find out if the current shown percent
    // is larger than the allowed percent.
    // Otherwise check to see if the amount of px shown is larger than the
    // allotted amount.
    if (amountVisible.indexOf('%')) {
      return (((areaShowing/elemArea)*100) >= parseInt(amountVisible));
    }
    else {
      return (areaShowing >= parseInt(amountVisible));
    }
  }
}

;
// $Id: views_slideshow.js,v 1.1.2.2.2.35 2010/07/01 03:29:08 redndahead Exp $

/**
 * @file
 * A simple jQuery ThumbnailHover Div Slideshow Rotator.
 */

/**
 * This will set our initial behavior, by starting up each individual slideshow.
 */
Drupal.behaviors.viewsSlideshowThumbnailHover = function (context) {
  $('.views_slideshow_thumbnailhover_main:not(.viewsSlideshowThumbnailHover-processed)', context).addClass('viewsSlideshowThumbnailHover-processed').each(function() {
    var fullId = '#' + $(this).attr('id');
    var settings = Drupal.settings.viewsSlideshowThumbnailHover[fullId];
    settings.targetId = '#' + $(fullId + " :first").attr('id');
		settings.paused = false;
		
    settings.opts = {
      speed:settings.speed,
      timeout:parseInt(settings.timeout),
      delay:parseInt(settings.delay),
      sync:settings.sync==1,
      random:settings.random==1,
      pause:false,
      allowPagerClickBubble:(settings.pager_event=='click')? false : true,
      pager:(settings.pager_event == 'hoverIntent') ? null : '#views_slideshow_breakout_teasers_' + settings.vss_id,
      nowrap:parseInt(settings.nowrap),
      pagerAnchorBuilder:(settings.pager_event == 'hoverIntent') ? null : function(idx, slide) { 
        return '#views_slideshow_thumbnailhover_div_breakout_teaser_' + settings.vss_id + '_' + idx; 
      },
      after:function(curr, next, opts) {
        // Used for Image Counter.
        if (settings.image_count) {
          $('#views_slideshow_thumbnailhover_image_count_' + settings.vss_id + ' span.num').html(opts.currSlide + 1);
          $('#views_slideshow_thumbnailhover_image_count_' + settings.vss_id + ' span.total').html(opts.slideCount);
        }
      },
      before:function(current, next, opts) {
        // Remember last slide.
        if (settings.remember_slide) {
          createCookie(settings.view_id, opts.currSlide + 1, settings.remember_slide_days);
        }

        // Make variable height.
        if (settings.fixed_height == 0) {
          //get the height of the current slide
          var $ht = $(this).height();
          //set the container's height to that of the current slide
          $(this).parent().animate({height: $ht});
        }
        
        var currId = (currId=$(current).attr('id')).substring(currId.lastIndexOf('_')+1)
        var nextId = (nextId=$(next).attr('id')).substring(nextId.lastIndexOf('_')+1)
        $('#views_slideshow_thumbnailhover_div_breakout_teaser_' + settings.vss_id + '_' + currId).removeClass('activeSlide');
        $('#views_slideshow_thumbnailhover_div_breakout_teaser_' + settings.vss_id + '_' + nextId).addClass('activeSlide');
      },
      pagerEvent: (settings.pager_event == 'hoverIntent') ? null : settings.pager_event,
      prev:(settings.controls > 0)?'#views_slideshow_thumbnailhover_prev_' + settings.vss_id:null,
      next:(settings.controls > 0)?'#views_slideshow_thumbnailhover_next_' + settings.vss_id:null,
      cleartype:(settings.ie.cleartype == 'true')? true : false,
      cleartypeNoBg:(settings.ie.cleartypenobg == 'true')? true : false
    };

    // Set the starting slide if we are supposed to remember the slide
    if (settings.remember_slide) {
      var startSlide = readCookie(settings.view_id);
      if (startSlide == null) {
        startSlide = 0;
      }
      settings.opts.startingSlide =  startSlide;
    }

    if (settings.effect == 'none') {
      settings.opts.speed = 1;
    }
    else {
      settings.opts.fx = settings.effect;
    }

    // Pause on hover.
    if (settings.pause == 1) {
      $('#views_slideshow_thumbnailhover_teaser_section_' + settings.vss_id).hover(function() {
        $(settings.targetId).cycle('pause');
      }, function() {
        if (settings.paused == false) {
          $(settings.targetId).cycle('resume');
        }
      });
    }

    // Pause on clicking of the slide.
    if (settings.pause_on_click == 1) {
      $('#views_slideshow_thumbnailhover_teaser_section_' + settings.vss_id).click(function() { 
        viewsSlideshowThumbnailHoverPause(settings);
      });
    }
    
    // Add additional settings.
		if (settings.advanced != "\n") {
      var advanced = settings.advanced.split("\n");
      for (i=0; i<advanced.length; i++) {
        var prop = '';
        var value = '';
        var property = advanced[i].split(":");
        for (j=0; j<property.length; j++) {
          if (j == 0) {
            prop = property[j];
          }
          else if (j == 1) {
            value = property[j];
          }
          else {
            value += ":" + property[j];
          }
        }

        // Need to evaluate so true, false and numerics aren't a string.
        if (value == 'true' || value == 'false' || IsNumeric(value)) {
          value = eval(value);
        }
        else {
          // Parse strings into functions.
          var func = value.match(/function\s*\((.*?)\)\s*\{(.*)\}/i);
          if (func) {
            value = new Function(func[1].match(/(\w+)/g), func[2]);
          }
        }
	
        // Call both functions if prop was set previously.
        if (typeof(value) == "function" && prop in settings.opts) {
          var callboth = function(before_func, new_func) {
            return function() {
              before_func.apply(null, arguments);
              new_func.apply(null, arguments);
            };
          };
          settings.opts[prop] = callboth(settings.opts[prop], value);
        }
        else {
          settings.opts[prop] = value;
        }
      }
    }

    $(settings.targetId).cycle(settings.opts);

    // Start Paused
    if (settings.start_paused) {
      viewsSlideshowThumbnailHoverPause(settings);
    }
    
    // Pause if hidden.
    if (settings.pause_when_hidden) {
      var checkPause = function(settings) {
        // If the slideshow is visible and it is paused then resume.
        // otherwise if the slideshow is not visible and it is not paused then
        // pause it.
        var visible = viewsSlideshowThumbnailHoverIsVisible(settings.targetId, settings.pause_when_hidden_type, settings.amount_allowed_visible);
        if (visible && settings.paused) {
          viewsSlideshowThumbnailHoverResume(settings);
        }
        else if (!visible && !settings.paused) {
          viewsSlideshowThumbnailHoverPause(settings);
        }
      }
     
      // Check when scrolled.
      $(window).scroll(function() {
       checkPause(settings);
      });
      
      // Check when window is resized.
      $(window).resize(function() {
        checkPause(settings);
      });
    }

    // Show image count for people who have js enabled.
    $('#views_slideshow_thumbnailhover_image_count_' + settings.vss_id).show();
    
    if (settings.pager_event == 'hoverIntent') {
      $('#views_slideshow_thumbnailhover_breakout_teasers_' + settings.vss_id + ' .views_slideshow_thumbnailhover_div_breakout_teaser').each(function(i,obj) {
        $(obj).hoverIntent(
          function() {
            $('.views_slideshow_thumbnailhover_div_breakout_teaser').removeClass('activeSlide');
            var id = $(this).attr('id');
            id = parseInt(id.substring(id.lastIndexOf('_')+1));
            $(settings.targetId).cycle(id);
            $('#views_slideshow_thumbnailhover_div_breakout_teaser_' + settings.vss_id + '_' + id).addClass('activeSlide');
            $(settings.targetId).cycle('stop');
          },
          function() {
            var id = $(this).attr('id');
            settings.opts.startingSlide = parseInt(id.substring(id.lastIndexOf('_')+1));
            $(settings.targetId).cycle(settings.opts);
          }
        );
      });
    }

    if (settings.controls > 0) {
      // Show controls for people who have js enabled browsers.
      $('#views_slideshow_thumbnailhover_controls_' + settings.vss_id).show();
      
      $('#views_slideshow_thumbnailhover_playpause_' + settings.vss_id).click(function(e) {
        if (settings.paused) {
          viewsSlideshowThumbnailHoverResume(settings);
        }
        else {
          viewsSlideshowThumbnailHoverPause(settings);
        }
        e.preventDefault();
      });
    }
  });
}

// Pause the slideshow 
viewsSlideshowThumbnailHoverPause = function (settings) {
  //make Resume translatable
  var resume = Drupal.t('Resume');

  $(settings.targetId).cycle('pause');
  if (settings.controls > 0) {
    $('#views_slideshow_thumbnailhover_playpause_' + settings.vss_id)
      .addClass('views_slideshow_thumbnailhover_play')
      .addClass('views_slideshow_play')
      .removeClass('views_slideshow_thumbnailhover_pause')
      .removeClass('views_slideshow_pause')
      .text(resume);
  }
  settings.paused = true;
}

// Resume the slideshow
viewsSlideshowThumbnailHoverResume = function (settings) {
  $(settings.targetId).cycle('resume');
  if (settings.controls > 0) {
    $('#views_slideshow_thumbnailhover_playpause_' + settings.vss_id)
      .addClass('views_slideshow_thumbnailhover_pause')
      .addClass('views_slideshow_pause')
      .removeClass('views_slideshow_thumbnailhover_play')
      .removeClass('views_slideshow_play')
      .text('Pause');
  }
  settings.paused = false;
}

// Verify that the value is a number.
function IsNumeric(sText) {
  var ValidChars = "0123456789";
  var IsNumber=true;
  var Char;

  for (var i=0; i < sText.length && IsNumber == true; i++) { 
    Char = sText.charAt(i); 
    if (ValidChars.indexOf(Char) == -1) {
      IsNumber = false;
    }
  }
  return IsNumber;
}

/**
 * Cookie Handling Functions
 */
function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else {
    var expires = "";
  }
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) {
      return c.substring(nameEQ.length,c.length);
    }
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}

/**
 * Checks to see if the slide is visible enough.
 * elem = element to check.
 * amountVisible = amount that should be visible. Either in percent or px. If
 *                it's not defined then all of the slide must be visible.
 *
 * Returns true or false
 */
function viewsSlideshowThumbnailHoverIsVisible(elem, type, amountVisible) {
  // Get the top and bottom of the window;
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var docViewLeft = $(window).scrollLeft();
  var docViewRight = docViewLeft + $(window).width();

  // Get the top, bottom, and height of the slide;
  var elemTop = $(elem).offset().top;
  var elemHeight = $(elem).height();
  var elemBottom = elemTop + elemHeight;
  var elemLeft = $(elem).offset().left;
  var elemWidth = $(elem).width();
  var elemRight = elemLeft + elemWidth;
  var elemArea = elemHeight * elemWidth;
  
  // Calculate what's hiding in the slide.
  var missingLeft = 0;
  var missingRight = 0;
  var missingTop = 0;
  var missingBottom = 0;
  
  // Find out how much of the slide is missing from the left.
  if (elemLeft < docViewLeft) {
    missingLeft = docViewLeft - elemLeft;
  }

  // Find out how much of the slide is missing from the right.
  if (elemRight > docViewRight) {
    missingRight = elemRight - docViewRight;
  }
  
  // Find out how much of the slide is missing from the top.
  if (elemTop < docViewTop) {
    missingTop = docViewTop - elemTop;
  }

  // Find out how much of the slide is missing from the bottom.
  if (elemBottom > docViewBottom) {
    missingBottom = elemBottom - docViewBottom;
  }
  
  // If there is no amountVisible defined then check to see if the whole slide
  // is visible.
  if (type == 'full') {
    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
    && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop)
    && (elemLeft >= docViewLeft) && (elemRight <= docViewRight)
    && (elemLeft <= docViewRight) && (elemRight >= docViewLeft));
  }
  else if(type == 'vertical') {
    var verticalShowing = elemHeight - missingTop - missingBottom;
    
    // If user specified a percentage then find out if the current shown percent
    // is larger than the allowed percent.
    // Otherwise check to see if the amount of px shown is larger than the
    // allotted amount.
    if (amountVisible.indexOf('%')) {
      return (((verticalShowing/elemHeight)*100) >= parseInt(amountVisible));
    }
    else {
      return (verticalShowing >= parseInt(amountVisible));
    }
  }
  else if(type == 'horizontal') {
    var horizontalShowing = elemWidth - missingLeft - missingRight;
    
    // If user specified a percentage then find out if the current shown percent
    // is larger than the allowed percent.
    // Otherwise check to see if the amount of px shown is larger than the
    // allotted amount.
    if (amountVisible.indexOf('%')) {
      return (((horizontalShowing/elemWidth)*100) >= parseInt(amountVisible));
    }
    else {
      return (horizontalShowing >= parseInt(amountVisible));
    }
  }
  else if(type == 'area') {
    var areaShowing = (elemWidth - missingLeft - missingRight) * (elemHeight - missingTop - missingBottom);
    
    // If user specified a percentage then find out if the current shown percent
    // is larger than the allowed percent.
    // Otherwise check to see if the amount of px shown is larger than the
    // allotted amount.
    if (amountVisible.indexOf('%')) {
      return (((areaShowing/elemArea)*100) >= parseInt(amountVisible));
    }
    else {
      return (areaShowing >= parseInt(amountVisible));
    }
  }
}
;
/*
 * Copyright (c) 2009 Simo Kinnunen.
 * Licensed under the MIT license.
 *
 * @version 1.09i
 */
var Cufon=(function(){var m=function(){return m.replace.apply(null,arguments)};var x=m.DOM={ready:(function(){var C=false,E={loaded:1,complete:1};var B=[],D=function(){if(C){return}C=true;for(var F;F=B.shift();F()){}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",D,false);window.addEventListener("pageshow",D,false)}if(!window.opera&&document.readyState){(function(){E[document.readyState]?D():setTimeout(arguments.callee,10)})()}if(document.readyState&&document.createStyleSheet){(function(){try{document.body.doScroll("left");D()}catch(F){setTimeout(arguments.callee,1)}})()}q(window,"load",D);return function(F){if(!arguments.length){D()}else{C?F():B.push(F)}}})(),root:function(){return document.documentElement||document.body}};var n=m.CSS={Size:function(C,B){this.value=parseFloat(C);this.unit=String(C).match(/[a-z%]*$/)[0]||"px";this.convert=function(D){return D/B*this.value};this.convertFrom=function(D){return D/this.value*B};this.toString=function(){return this.value+this.unit}},addClass:function(C,B){var D=C.className;C.className=D+(D&&" ")+B;return C},color:j(function(C){var B={};B.color=C.replace(/^rgba\((.*?),\s*([\d.]+)\)/,function(E,D,F){B.opacity=parseFloat(F);return"rgb("+D+")"});return B}),fontStretch:j(function(B){if(typeof B=="number"){return B}if(/%$/.test(B)){return parseFloat(B)/100}return{"ultra-condensed":0.5,"extra-condensed":0.625,condensed:0.75,"semi-condensed":0.875,"semi-expanded":1.125,expanded:1.25,"extra-expanded":1.5,"ultra-expanded":2}[B]||1}),getStyle:function(C){var B=document.defaultView;if(B&&B.getComputedStyle){return new a(B.getComputedStyle(C,null))}if(C.currentStyle){return new a(C.currentStyle)}return new a(C.style)},gradient:j(function(F){var G={id:F,type:F.match(/^-([a-z]+)-gradient\(/)[1],stops:[]},C=F.substr(F.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig);for(var E=0,B=C.length,D;E<B;++E){D=C[E].split("=",2).reverse();G.stops.push([D[1]||E/(B-1),D[0]])}return G}),quotedList:j(function(E){var D=[],C=/\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,B;while(B=C.exec(E)){D.push(B[3]||B[1])}return D}),recognizesMedia:j(function(G){var E=document.createElement("style"),D,C,B;E.type="text/css";E.media=G;try{E.appendChild(document.createTextNode("/**/"))}catch(F){}C=g("head")[0];C.insertBefore(E,C.firstChild);D=(E.sheet||E.styleSheet);B=D&&!D.disabled;C.removeChild(E);return B}),removeClass:function(D,C){var B=RegExp("(?:^|\\s+)"+C+"(?=\\s|$)","g");D.className=D.className.replace(B,"");return D},supports:function(D,C){var B=document.createElement("span").style;if(B[D]===undefined){return false}B[D]=C;return B[D]===C},textAlign:function(E,D,B,C){if(D.get("textAlign")=="right"){if(B>0){E=" "+E}}else{if(B<C-1){E+=" "}}return E},textShadow:j(function(F){if(F=="none"){return null}var E=[],G={},B,C=0;var D=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;while(B=D.exec(F)){if(B[0]==","){E.push(G);G={};C=0}else{if(B[1]){G.color=B[1]}else{G[["offX","offY","blur"][C++]]=B[2]}}}E.push(G);return E}),textTransform:(function(){var B={uppercase:function(C){return C.toUpperCase()},lowercase:function(C){return C.toLowerCase()},capitalize:function(C){return C.replace(/\b./g,function(D){return D.toUpperCase()})}};return function(E,D){var C=B[D.get("textTransform")];return C?C(E):E}})(),whiteSpace:(function(){var D={inline:1,"inline-block":1,"run-in":1};var C=/^\s+/,B=/\s+$/;return function(H,F,G,E){if(E){if(E.nodeName.toLowerCase()=="br"){H=H.replace(C,"")}}if(D[F.get("display")]){return H}if(!G.previousSibling){H=H.replace(C,"")}if(!G.nextSibling){H=H.replace(B,"")}return H}})()};n.ready=(function(){var B=!n.recognizesMedia("all"),E=false;var D=[],H=function(){B=true;for(var K;K=D.shift();K()){}};var I=g("link"),J=g("style");function C(K){return K.disabled||G(K.sheet,K.media||"screen")}function G(M,P){if(!n.recognizesMedia(P||"all")){return true}if(!M||M.disabled){return false}try{var Q=M.cssRules,O;if(Q){search:for(var L=0,K=Q.length;O=Q[L],L<K;++L){switch(O.type){case 2:break;case 3:if(!G(O.styleSheet,O.media.mediaText)){return false}break;default:break search}}}}catch(N){}return true}function F(){if(document.createStyleSheet){return true}var L,K;for(K=0;L=I[K];++K){if(L.rel.toLowerCase()=="stylesheet"&&!C(L)){return false}}for(K=0;L=J[K];++K){if(!C(L)){return false}}return true}x.ready(function(){if(!E){E=n.getStyle(document.body).isUsable()}if(B||(E&&F())){H()}else{setTimeout(arguments.callee,10)}});return function(K){if(B){K()}else{D.push(K)}}})();function s(D){var C=this.face=D.face,B={"\u0020":1,"\u00a0":1,"\u3000":1};this.glyphs=D.glyphs;this.w=D.w;this.baseSize=parseInt(C["units-per-em"],10);this.family=C["font-family"].toLowerCase();this.weight=C["font-weight"];this.style=C["font-style"]||"normal";this.viewBox=(function(){var F=C.bbox.split(/\s+/);var E={minX:parseInt(F[0],10),minY:parseInt(F[1],10),maxX:parseInt(F[2],10),maxY:parseInt(F[3],10)};E.width=E.maxX-E.minX;E.height=E.maxY-E.minY;E.toString=function(){return[this.minX,this.minY,this.width,this.height].join(" ")};return E})();this.ascent=-parseInt(C.ascent,10);this.descent=-parseInt(C.descent,10);this.height=-this.ascent+this.descent;this.spacing=function(L,N,E){var O=this.glyphs,M,K,G,P=[],F=0,J=-1,I=-1,H;while(H=L[++J]){M=O[H]||this.missingGlyph;if(!M){continue}if(K){F-=G=K[H]||0;P[I]-=G}F+=P[++I]=~~(M.w||this.w)+N+(B[H]?E:0);K=M.k}P.total=F;return P}}function f(){var C={},B={oblique:"italic",italic:"oblique"};this.add=function(D){(C[D.style]||(C[D.style]={}))[D.weight]=D};this.get=function(H,I){var G=C[H]||C[B[H]]||C.normal||C.italic||C.oblique;if(!G){return null}I={normal:400,bold:700}[I]||parseInt(I,10);if(G[I]){return G[I]}var E={1:1,99:0}[I%100],K=[],F,D;if(E===undefined){E=I>400}if(I==500){I=400}for(var J in G){if(!k(G,J)){continue}J=parseInt(J,10);if(!F||J<F){F=J}if(!D||J>D){D=J}K.push(J)}if(I<F){I=F}if(I>D){I=D}K.sort(function(M,L){return(E?(M>=I&&L>=I)?M<L:M>L:(M<=I&&L<=I)?M>L:M<L)?-1:1});return G[K[0]]}}function r(){function D(F,G){if(F.contains){return F.contains(G)}return F.compareDocumentPosition(G)&16}function B(G){var F=G.relatedTarget;if(!F||D(this,F)){return}C(this,G.type=="mouseover")}function E(F){C(this,F.type=="mouseenter")}function C(F,G){setTimeout(function(){var H=d.get(F).options;m.replace(F,G?h(H,H.hover):H,true)},10)}this.attach=function(F){if(F.onmouseenter===undefined){q(F,"mouseover",B);q(F,"mouseout",B)}else{q(F,"mouseenter",E);q(F,"mouseleave",E)}}}function u(){var C=[],D={};function B(H){var E=[],G;for(var F=0;G=H[F];++F){E[F]=C[D[G]]}return E}this.add=function(F,E){D[F]=C.push(E)-1};this.repeat=function(){var E=arguments.length?B(arguments):C,F;for(var G=0;F=E[G++];){m.replace(F[0],F[1],true)}}}function A(){var D={},B=0;function C(E){return E.cufid||(E.cufid=++B)}this.get=function(E){var F=C(E);return D[F]||(D[F]={})}}function a(B){var D={},C={};this.extend=function(E){for(var F in E){if(k(E,F)){D[F]=E[F]}}return this};this.get=function(E){return D[E]!=undefined?D[E]:B[E]};this.getSize=function(F,E){return C[F]||(C[F]=new n.Size(this.get(F),E))};this.isUsable=function(){return !!B}}function q(C,B,D){if(C.addEventListener){C.addEventListener(B,D,false)}else{if(C.attachEvent){C.attachEvent("on"+B,function(){return D.call(C,window.event)})}}}function v(C,B){var D=d.get(C);if(D.options){return C}if(B.hover&&B.hoverables[C.nodeName.toLowerCase()]){b.attach(C)}D.options=B;return C}function j(B){var C={};return function(D){if(!k(C,D)){C[D]=B.apply(null,arguments)}return C[D]}}function c(F,E){var B=n.quotedList(E.get("fontFamily").toLowerCase()),D;for(var C=0;D=B[C];++C){if(i[D]){return i[D].get(E.get("fontStyle"),E.get("fontWeight"))}}return null}function g(B){return document.getElementsByTagName(B)}function k(C,B){return C.hasOwnProperty(B)}function h(){var C={},B,F;for(var E=0,D=arguments.length;B=arguments[E],E<D;++E){for(F in B){if(k(B,F)){C[F]=B[F]}}}return C}function o(E,M,C,N,F,D){var K=document.createDocumentFragment(),H;if(M===""){return K}var L=N.separate;var I=M.split(p[L]),B=(L=="words");if(B&&t){if(/^\s/.test(M)){I.unshift("")}if(/\s$/.test(M)){I.push("")}}for(var J=0,G=I.length;J<G;++J){H=z[N.engine](E,B?n.textAlign(I[J],C,J,G):I[J],C,N,F,D,J<G-1);if(H){K.appendChild(H)}}return K}function l(D,M){var C=D.nodeName.toLowerCase();if(M.ignore[C]){return}var E=!M.textless[C];var B=n.getStyle(v(D,M)).extend(M);var F=c(D,B),G,K,I,H,L,J;if(!F){return}for(G=D.firstChild;G;G=I){K=G.nodeType;I=G.nextSibling;if(E&&K==3){if(H){H.appendData(G.data);D.removeChild(G)}else{H=G}if(I){continue}}if(H){D.replaceChild(o(F,n.whiteSpace(H.data,B,H,J),B,M,G,D),H);H=null}if(K==1){if(G.firstChild){if(G.nodeName.toLowerCase()=="cufon"){z[M.engine](F,null,B,M,G,D)}else{arguments.callee(G,M)}}J=G}}}var t=" ".split(/\s+/).length==0;var d=new A();var b=new r();var y=new u();var e=false;var z={},i={},w={autoDetect:false,engine:null,forceHitArea:false,hover:false,hoverables:{a:true},ignore:{applet:1,canvas:1,col:1,colgroup:1,head:1,iframe:1,map:1,optgroup:1,option:1,script:1,select:1,style:1,textarea:1,title:1,pre:1},printable:true,selector:(window.Sizzle||(window.jQuery&&function(B){return jQuery(B)})||(window.dojo&&dojo.query)||(window.Ext&&Ext.query)||(window.YAHOO&&YAHOO.util&&YAHOO.util.Selector&&YAHOO.util.Selector.query)||(window.$$&&function(B){return $$(B)})||(window.$&&function(B){return $(B)})||(document.querySelectorAll&&function(B){return document.querySelectorAll(B)})||g),separate:"words",textless:{dl:1,html:1,ol:1,table:1,tbody:1,thead:1,tfoot:1,tr:1,ul:1},textShadow:"none"};var p={words:/\s/.test("\u00a0")?/[^\S\u00a0]+/:/\s+/,characters:"",none:/^/};m.now=function(){x.ready();return m};m.refresh=function(){y.repeat.apply(y,arguments);return m};m.registerEngine=function(C,B){if(!B){return m}z[C]=B;return m.set("engine",C)};m.registerFont=function(D){if(!D){return m}var B=new s(D),C=B.family;if(!i[C]){i[C]=new f()}i[C].add(B);return m.set("fontFamily",'"'+C+'"')};m.replace=function(D,C,B){C=h(w,C);if(!C.engine){return m}if(!e){n.addClass(x.root(),"cufon-active cufon-loading");n.ready(function(){n.addClass(n.removeClass(x.root(),"cufon-loading"),"cufon-ready")});e=true}if(C.hover){C.forceHitArea=true}if(C.autoDetect){delete C.fontFamily}if(typeof C.textShadow=="string"){C.textShadow=n.textShadow(C.textShadow)}if(typeof C.color=="string"&&/^-/.test(C.color)){C.textGradient=n.gradient(C.color)}else{delete C.textGradient}if(!B){y.add(D,arguments)}if(D.nodeType||typeof D=="string"){D=[D]}n.ready(function(){for(var F=0,E=D.length;F<E;++F){var G=D[F];if(typeof G=="string"){m.replace(C.selector(G),C,true)}else{l(G,C)}}});return m};m.set=function(B,C){w[B]=C;return m};return m})();Cufon.registerEngine("vml",(function(){var e=document.namespaces;if(!e){return}e.add("cvml","urn:schemas-microsoft-com:vml");e=null;var b=document.createElement("cvml:shape");b.style.behavior="url(#default#VML)";if(!b.coordsize){return}b=null;var h=(document.documentMode||0)<8;document.write(('<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:'+(h?"middle":"text-bottom")+";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}</style>").replace(/;/g,"!important;"));function c(i,j){return a(i,/(?:em|ex|%)$|^[a-z-]+$/i.test(j)?"1em":j)}function a(l,m){if(m==="0"){return 0}if(/px$/i.test(m)){return parseFloat(m)}var k=l.style.left,j=l.runtimeStyle.left;l.runtimeStyle.left=l.currentStyle.left;l.style.left=m.replace("%","em");var i=l.style.pixelLeft;l.style.left=k;l.runtimeStyle.left=j;return i}function f(l,k,j,n){var i="computed"+n,m=k[i];if(isNaN(m)){m=k.get(n);k[i]=m=(m=="normal")?0:~~j.convertFrom(a(l,m))}return m}var g={};function d(p){var q=p.id;if(!g[q]){var n=p.stops,o=document.createElement("cvml:fill"),i=[];o.type="gradient";o.angle=180;o.focus="0";o.method="sigma";o.color=n[0][1];for(var m=1,l=n.length-1;m<l;++m){i.push(n[m][0]*100+"% "+n[m][1])}o.colors=i.join(",");o.color2=n[l][1];g[q]=o}return g[q]}return function(ac,G,Y,C,K,ad,W){var n=(G===null);if(n){G=K.alt}var I=ac.viewBox;var p=Y.computedFontSize||(Y.computedFontSize=new Cufon.CSS.Size(c(ad,Y.get("fontSize"))+"px",ac.baseSize));var y,q;if(n){y=K;q=K.firstChild}else{y=document.createElement("cufon");y.className="cufon cufon-vml";y.alt=G;q=document.createElement("cufoncanvas");y.appendChild(q);if(C.printable){var Z=document.createElement("cufontext");Z.appendChild(document.createTextNode(G));y.appendChild(Z)}if(!W){y.appendChild(document.createElement("cvml:shape"))}}var ai=y.style;var R=q.style;var l=p.convert(I.height),af=Math.ceil(l);var V=af/l;var P=V*Cufon.CSS.fontStretch(Y.get("fontStretch"));var U=I.minX,T=I.minY;R.height=af;R.top=Math.round(p.convert(T-ac.ascent));R.left=Math.round(p.convert(U));ai.height=p.convert(ac.height)+"px";var F=Y.get("color");var ag=Cufon.CSS.textTransform(G,Y).split("");var L=ac.spacing(ag,f(ad,Y,p,"letterSpacing"),f(ad,Y,p,"wordSpacing"));if(!L.length){return null}var k=L.total;var x=-U+k+(I.width-L[L.length-1]);var ah=p.convert(x*P),X=Math.round(ah);var O=x+","+I.height,m;var J="r"+O+"ns";var u=C.textGradient&&d(C.textGradient);var o=ac.glyphs,S=0;var H=C.textShadow;var ab=-1,aa=0,w;while(w=ag[++ab]){var D=o[ag[ab]]||ac.missingGlyph,v;if(!D){continue}if(n){v=q.childNodes[aa];while(v.firstChild){v.removeChild(v.firstChild)}}else{v=document.createElement("cvml:shape");q.appendChild(v)}v.stroked="f";v.coordsize=O;v.coordorigin=m=(U-S)+","+T;v.path=(D.d?"m"+D.d+"xe":"")+"m"+m+J;v.fillcolor=F;if(u){v.appendChild(u.cloneNode(false))}var ae=v.style;ae.width=X;ae.height=af;if(H){var s=H[0],r=H[1];var B=Cufon.CSS.color(s.color),z;var N=document.createElement("cvml:shadow");N.on="t";N.color=B.color;N.offset=s.offX+","+s.offY;if(r){z=Cufon.CSS.color(r.color);N.type="double";N.color2=z.color;N.offset2=r.offX+","+r.offY}N.opacity=B.opacity||(z&&z.opacity)||1;v.appendChild(N)}S+=L[aa++]}var M=v.nextSibling,t,A;if(C.forceHitArea){if(!M){M=document.createElement("cvml:rect");M.stroked="f";M.className="cufon-vml-cover";t=document.createElement("cvml:fill");t.opacity=0;M.appendChild(t);q.appendChild(M)}A=M.style;A.width=X;A.height=af}else{if(M){q.removeChild(M)}}ai.width=Math.max(Math.ceil(p.convert(k*P)),0);if(h){var Q=Y.computedYAdjust;if(Q===undefined){var E=Y.get("lineHeight");if(E=="normal"){E="1em"}else{if(!isNaN(E)){E+="em"}}Y.computedYAdjust=Q=0.5*(a(ad,E)-parseFloat(ai.height))}if(Q){ai.marginTop=Math.ceil(Q)+"px";ai.marginBottom=Q+"px"}}return y}})());Cufon.registerEngine("canvas",(function(){var b=document.createElement("canvas");if(!b||!b.getContext||!b.getContext.apply){return}b=null;var a=Cufon.CSS.supports("display","inline-block");var e=!a&&(document.compatMode=="BackCompat"||/frameset|transitional/i.test(document.doctype.publicId));var f=document.createElement("style");f.type="text/css";f.appendChild(document.createTextNode(("cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;"+(e?"":"font-size:1px;line-height:1px;")+"}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}"+(a?"cufon canvas{position:relative;}":"cufon canvas{position:absolute;}")+"}@media print{cufon{padding:0;}cufon canvas{display:none;}}").replace(/;/g,"!important;")));document.getElementsByTagName("head")[0].appendChild(f);function d(p,h){var n=0,m=0;var g=[],o=/([mrvxe])([^a-z]*)/g,k;generate:for(var j=0;k=o.exec(p);++j){var l=k[2].split(",");switch(k[1]){case"v":g[j]={m:"bezierCurveTo",a:[n+~~l[0],m+~~l[1],n+~~l[2],m+~~l[3],n+=~~l[4],m+=~~l[5]]};break;case"r":g[j]={m:"lineTo",a:[n+=~~l[0],m+=~~l[1]]};break;case"m":g[j]={m:"moveTo",a:[n=~~l[0],m=~~l[1]]};break;case"x":g[j]={m:"closePath"};break;case"e":break generate}h[g[j].m].apply(h,g[j].a)}return g}function c(m,k){for(var j=0,h=m.length;j<h;++j){var g=m[j];k[g.m].apply(k,g.a)}}return function(V,w,P,t,C,W){var k=(w===null);if(k){w=C.getAttribute("alt")}var A=V.viewBox;var m=P.getSize("fontSize",V.baseSize);var B=0,O=0,N=0,u=0;var z=t.textShadow,L=[];if(z){for(var U=z.length;U--;){var F=z[U];var K=m.convertFrom(parseFloat(F.offX));var I=m.convertFrom(parseFloat(F.offY));L[U]=[K,I];if(I<B){B=I}if(K>O){O=K}if(I>N){N=I}if(K<u){u=K}}}var Z=Cufon.CSS.textTransform(w,P).split("");var E=V.spacing(Z,~~m.convertFrom(parseFloat(P.get("letterSpacing"))||0),~~m.convertFrom(parseFloat(P.get("wordSpacing"))||0));if(!E.length){return null}var h=E.total;O+=A.width-E[E.length-1];u+=A.minX;var s,n;if(k){s=C;n=C.firstChild}else{s=document.createElement("cufon");s.className="cufon cufon-canvas";s.setAttribute("alt",w);n=document.createElement("canvas");s.appendChild(n);if(t.printable){var S=document.createElement("cufontext");S.appendChild(document.createTextNode(w));s.appendChild(S)}}var aa=s.style;var H=n.style;var j=m.convert(A.height);var Y=Math.ceil(j);var M=Y/j;var G=M*Cufon.CSS.fontStretch(P.get("fontStretch"));var J=h*G;var Q=Math.ceil(m.convert(J+O-u));var o=Math.ceil(m.convert(A.height-B+N));n.width=Q;n.height=o;H.width=Q+"px";H.height=o+"px";B+=A.minY;H.top=Math.round(m.convert(B-V.ascent))+"px";H.left=Math.round(m.convert(u))+"px";var r=Math.max(Math.ceil(m.convert(J)),0)+"px";if(a){aa.width=r;aa.height=m.convert(V.height)+"px"}else{aa.paddingLeft=r;aa.paddingBottom=(m.convert(V.height)-1)+"px"}var X=n.getContext("2d"),D=j/A.height;X.scale(D,D*M);X.translate(-u,-B);X.save();function T(){var x=V.glyphs,ab,l=-1,g=-1,y;X.scale(G,1);while(y=Z[++l]){var ab=x[Z[l]]||V.missingGlyph;if(!ab){continue}if(ab.d){X.beginPath();if(ab.code){c(ab.code,X)}else{ab.code=d("m"+ab.d,X)}X.fill()}X.translate(E[++g],0)}X.restore()}if(z){for(var U=z.length;U--;){var F=z[U];X.save();X.fillStyle=F.color;X.translate.apply(X,L[U]);T()}}var q=t.textGradient;if(q){var v=q.stops,p=X.createLinearGradient(0,A.minY,0,A.maxY);for(var U=0,R=v.length;U<R;++U){p.addColorStop.apply(p,v[U])}X.fillStyle=p}else{X.fillStyle=P.get("color")}T();return s}})());;
/*!
 * The following copyright notice may not be removed under any circumstances.
 * 
 * Copyright:
 * FTF Flama Copyright (c) Feliciano Type Foundry, 2004-2006. All rights reserved.
 * 
 * Description:
 * FTF Flama Copyright (c) Feliciano Type Foundry, 2004-2006. All rights reserved.
 * 
 * Manufacturer:
 * Feliciano Type Foundry,
 * 
 * Designer:
 * M‡rio Feliciano
 */
Cufon.registerFont({"w":209,"face":{"font-family":"flama","font-weight":700,"font-stretch":"normal","units-per-em":"360","panose-1":"2 0 5 3 4 0 0 2 0 4","ascent":"288","descent":"-72","x-height":"4","bbox":"-22 -350 424 72.0176","underline-thickness":"18","underline-position":"-18","stemh":"53","stemv":"59","unicode-range":"U+0020-U+FB02"},"glyphs":{" ":{"w":88},"\u00d0":{"d":"26,0r0,-113r-20,0r0,-36r20,0r0,-108v102,-3,210,-9,211,91r0,72v-2,105,-108,96,-211,94xm90,-53v43,2,82,0,83,-41v0,-52,10,-113,-46,-110r-37,0r0,55r50,0r0,36r-50,0r0,60","w":252,"k":{"\u00c6":14,"Y":11,"X":11,"W":2,"V":4,"T":3,"A":7,".":8,",":8}},"\u00f0":{"d":"193,-74v-5,104,-176,107,-180,2v-3,-67,16,-113,77,-114r-12,-16r-35,9r-14,-30r29,-8r-18,-26r60,-12r16,23r38,-10r13,30r-31,9v25,42,61,68,57,143xm103,-41v35,1,31,-37,30,-71v0,-18,-12,-31,-30,-31v-34,-2,-31,38,-30,72v0,18,10,30,30,30","w":206},"\u0141":{"d":"26,0r0,-107r-20,7r0,-38r20,-7r0,-112r64,0r0,90r39,-15r0,38r-39,15r0,76r122,0r0,53r-186,0","w":220,"k":{"\u2019":33,"\u201d":33,"\u0152":1,"\u00e6":-3,"\u00c7":1,"y":11,"w":12,"v":12,"t":10,"a":-3,"Y":33,"W":20,"V":23,"U":1,"T":29,"S":-1,"O":1,"G":1,"C":1,"A":-9,"'":33,"\"":33}},"\u0142":{"d":"76,4v-65,-2,-52,-56,-53,-113r-17,6r0,-36r17,-6r0,-112r59,0r0,91r25,-9r0,37r-25,9r0,69v-2,15,18,16,32,12r0,45v-11,3,-25,7,-38,7","w":122,"k":{"y":14,"w":12,"v":14}},"\u0160":{"d":"217,-80v-1,103,-166,108,-212,38r41,-36v13,19,38,32,65,32v19,0,40,-6,40,-24v0,-31,-48,-30,-73,-38v-34,-11,-61,-30,-61,-71v0,-91,155,-107,194,-42r-42,35v-12,-16,-34,-25,-54,-25v-19,0,-35,7,-35,25v0,26,52,27,76,35v36,11,61,31,61,71xm91,-279r-38,-67r44,0r18,35r20,-35r44,0r-41,67r-47,0","w":227,"k":{"y":4,"Y":3,"T":4,"A":4}},"\u0161":{"d":"184,-62v0,80,-126,83,-175,37r31,-35v13,13,33,22,54,22v14,0,29,-4,29,-16v0,-11,-8,-14,-23,-17v-1,0,-3,1,-34,-7v-30,-7,-49,-23,-49,-51v0,-69,118,-84,158,-39r-34,32v-12,-11,-28,-16,-43,-16v-16,0,-25,5,-25,15v4,17,41,16,59,21v33,9,52,27,52,54xm74,-214r-39,-66r45,0r18,34r20,-34r44,0r-41,66r-47,0","w":195},"\u00dd":{"d":"84,0r0,-102r-84,-155r67,0r51,101r50,-101r65,0r-85,156r0,101r-64,0xm97,-275r32,-64r58,0r-49,64r-41,0","w":232,"k":{"\u2014":12,"\u2013":12,"\u0153":26,"\u0152":8,"\u2026":30,"\u00e6":26,"\u00c6":41,"\u00e7":26,"\u00c7":8,"z":13,"y":10,"x":9,"w":9,"v":12,"u":13,"t":11,"s":17,"r":15,"q":26,"p":15,"o":26,"n":15,"m":15,"g":26,"e":26,"d":26,"c":26,"a":26,"T":-5,"S":8,"O":8,"J":31,"G":8,"C":8,"A":28,";":9,":":9,".":29,"-":12,",":29}},"\u00fd":{"d":"124,20v-18,47,-52,53,-101,47r0,-46v26,6,46,-1,49,-24r-69,-186r64,0r38,119r38,-119r55,0xm82,-212r31,-65r59,0r-50,65r-40,0","w":199,"k":{"t":-4,".":19,",":19}},"\u00de":{"d":"22,0r0,-257r64,0r0,44v77,-7,142,14,142,79v0,40,-26,81,-89,81r-53,0r0,53r-64,0xm86,-100v37,1,79,4,79,-32v0,-37,-42,-34,-79,-33r0,65","w":238,"k":{"\u2026":13,"\u00c6":24,"Z":12,"Y":15,"X":15,"W":5,"V":8,"T":9,"S":5,"A":9,".":12,",":12}},"\u00fe":{"d":"20,68r0,-325r60,0r0,90v39,-49,127,-26,122,44r0,57v4,65,-84,93,-122,49r0,85r-60,0xm80,-69v1,40,63,42,63,-1v1,-35,5,-77,-31,-77v-15,0,-32,8,-32,34r0,44","w":215},"\u017d":{"d":"13,0r0,-42r119,-163r-114,0r0,-52r193,0r0,45r-115,159r116,0r0,53r-199,0xm93,-278r-39,-67r44,0r19,35r20,-35r43,0r-41,67r-46,0","w":225,"k":{"\u0152":4,"\u00c7":4,"y":3,"w":3,"v":3,"O":4,"G":4,"C":4}},"\u017e":{"d":"12,0r0,-40r90,-105r-85,0r0,-44r158,0r-1,40r-88,103r90,0r0,46r-164,0xm73,-213r-38,-67r44,0r18,34r20,-34r44,0r-41,67r-47,0","w":188},"\u00a6":{"d":"72,49r0,-148r35,0r0,148r-35,0xm72,-125r0,-136r35,0r0,136r-35,0","w":178},"\u2212":{"d":"12,-96r0,-36r186,0r0,36r-186,0"},"\u00d7":{"d":"39,-24r-25,-26r63,-65r-64,-65r26,-26r64,65r64,-65r25,26r-63,65r64,64r-26,27r-64,-65","w":203},"!":{"d":"38,-81v-10,-53,-17,-110,-14,-176r63,0v3,66,-4,123,-14,176r-35,0xm25,0r0,-62r61,0r0,62r-61,0","w":110,"k":{"\u2026":14}},"\"":{"d":"32,-151v-5,-34,-10,-68,-8,-108r50,0v2,40,-3,74,-8,108r-34,0xm105,-151v-4,-34,-9,-68,-7,-108r49,0v2,40,-3,74,-8,108r-34,0","w":171,"k":{"\u00c1":29,"\u00c2":29,"\u0153":17,"\u00c3":29,"\u00c0":29,"\u2026":17,"\u00f8":17,"\u00c6":40,"\u00f5":17,"\u00f6":17,"\u00f4":17,"\u00f2":17,"\u00f3":17,"\u00eb":17,"\u00ea":17,"\u00e8":17,"\u00e9":17,"\u00e7":17,"\u00c5":29,"\u00c4":29,"s":21,"q":17,"o":17,"g":17,"e":17,"d":17,"c":17,"A":29,".":30,",":30,"\u0161":21}},"#":{"d":"38,0r10,-62r-41,0r6,-35r40,0r11,-69r-43,0r6,-33r41,0r9,-58r32,0r-8,58r45,0r9,-58r32,0r-9,58r40,0r-5,33r-40,0r-11,69r42,0r-5,35r-42,0r-9,62r-32,0r9,-62r-45,0r-10,62r-32,0xm85,-97r45,0r11,-69r-46,0","w":220},"$":{"d":"89,14r0,-26v-32,-3,-59,-17,-76,-41r37,-33v12,17,31,28,54,28v17,0,34,-5,34,-19v0,-28,-42,-24,-65,-32v-30,-11,-51,-28,-51,-62v0,-37,27,-65,67,-72r0,-26r41,0r0,26v27,3,48,14,63,35r-39,32v-11,-15,-29,-22,-46,-22v-16,0,-28,6,-28,20v0,24,42,22,63,29v33,11,55,27,55,63v0,41,-30,66,-68,72r0,28r-41,0","w":211},"%":{"d":"129,-161v-2,61,-111,64,-112,0r0,-53v1,-65,111,-63,112,1r0,52xm72,-146v30,-1,17,-44,17,-70v0,-8,-6,-15,-17,-15v-29,2,-16,44,-16,70v0,8,4,15,16,15xm290,-42v-2,62,-111,63,-112,0r0,-53v1,-64,111,-65,112,0r0,53xm234,-27v30,-1,17,-44,17,-70v0,-8,-6,-15,-17,-15v-30,1,-17,44,-17,70v0,9,5,15,17,15xm51,3r171,-262r34,0r-171,262r-34,0","w":306},"&":{"d":"188,-22v-50,46,-174,36,-174,-47v0,-35,28,-62,63,-74v-49,-44,-29,-118,64,-118v48,0,79,25,79,60v0,35,-26,56,-55,66r37,41v4,-10,5,-16,9,-33r50,5v-5,27,-13,46,-25,63r53,59r-81,0xm141,-161v29,-5,45,-59,4,-60v-46,2,-21,46,-4,60xm78,-74v0,39,61,46,81,20r-56,-61v-19,9,-25,27,-25,41","w":293},"'":{"d":"32,-151v-5,-34,-10,-68,-8,-108r50,0v2,40,-3,74,-8,108r-34,0","w":98,"k":{"\u00c1":29,"\u00c2":29,"\u0153":17,"\u00c3":29,"\u00c0":29,"\u2026":17,"\u00f8":17,"\u00c6":40,"\u00f5":17,"\u00f6":17,"\u00f4":17,"\u00f2":17,"\u00f3":17,"\u00eb":17,"\u00ea":17,"\u00e8":17,"\u00e9":17,"\u00e7":17,"\u00c5":29,"\u00c4":29,"s":21,"q":17,"o":17,"g":17,"e":17,"d":17,"c":17,"A":29,".":30,",":30,"\u0161":21}},"(":{"d":"83,69v-67,-91,-73,-245,0,-338r28,0v-50,108,-44,229,0,338r-28,0","w":125},")":{"d":"15,69v45,-108,50,-231,0,-338r28,0v73,93,67,247,0,338r-28,0","w":125},"*":{"d":"53,-132r-27,-17r30,-43r-46,-25r17,-26r41,22r0,-46r33,0r0,46r40,-22r17,26r-46,25r31,43r-28,17r-31,-44","w":168},"+":{"d":"87,-14r0,-82r-82,0r0,-36r82,0r0,-82r36,0r0,82r81,0r0,36r-81,0r0,82r-36,0"},",":{"d":"30,50r11,-50r-20,0r0,-62r60,0r0,58r-23,54r-28,0","w":101,"k":{"\u2019":30,"\u201d":30,"\\":22,"'":30,"\"":30}},"-":{"d":"12,-81r0,-48r107,0r0,48r-107,0","w":130,"k":{"\u00c1":5,"\u00c2":5,"\u0178":12,"\u2014":19,"\u2013":19,"\u00c3":5,"\u00c0":5,"\u00c5":5,"\u00c4":5,"\\":9,"Y":12,"W":7,"V":8,"A":5,"9":-10,"8":-10,"6":-13,"5":-7,"2":6,"1":11,"\/":9,"-":19,"\u00dd":12}},".":{"d":"21,0r0,-62r60,0r0,62r-60,0","w":101,"k":{"\u2019":30,"\u201d":30,"\\":22,"'":30,"\"":30}},"\/":{"d":"-7,40r95,-302r43,0r-94,302r-44,0","w":129,"k":{"\u2014":15,"\u2013":15,"\/":17,".":23,"-":15,",":23}},"0":{"d":"112,4v-46,0,-97,-20,-97,-79r0,-105v1,-109,192,-111,193,1r0,103v0,56,-50,80,-96,80xm112,-46v22,0,32,-15,32,-31v0,-50,24,-134,-32,-134v-57,0,-33,85,-33,135v0,16,11,30,33,30","w":222},"1":{"d":"19,0r0,-43r50,0r0,-161r-47,3r-4,-42v37,-5,68,-18,112,-16r0,216r45,0r0,43r-156,0","w":189,"k":{"\u2044":-13}},"2":{"d":"24,0r-2,-42v48,-46,34,-28,98,-112v14,-18,22,-60,-16,-59v-23,0,-31,15,-29,38r-58,0v-5,-59,33,-86,91,-87v57,0,86,32,86,76v-1,58,-60,96,-90,136r92,0r0,50r-172,0","w":213,"k":{"\u2044":-16}},"3":{"d":"105,4v-62,-1,-91,-27,-88,-79r59,0v-2,23,10,31,33,31v17,0,29,-12,29,-33v0,-35,-29,-30,-57,-30r0,-45v29,1,55,2,54,-30v0,-21,-15,-29,-29,-29v-23,1,-30,12,-29,31r-58,0v-3,-51,31,-77,89,-81v91,-6,115,101,49,128r0,2v26,7,46,28,46,59v0,56,-53,76,-98,76","w":215,"k":{"\u2014":-8,"\u2013":-8,"-":-8}},"4":{"d":"123,0r0,-56r-110,0r0,-46r95,-155r69,0r-100,153r46,0r0,-32r60,-38r0,70r27,0r0,48r-27,0r0,56r-60,0","w":220},"5":{"d":"200,-75v9,100,-183,103,-183,16r0,-16r59,0v-2,20,10,29,31,30v24,1,31,-21,31,-51v0,-33,-48,-34,-61,-14r-54,-7r7,-140r155,0r0,52r-106,0r-2,52v56,-36,137,-10,123,78","w":213,"k":{"\u2014":-13,"\u2013":-13,"\\":6,"-":-13}},"6":{"d":"109,4v-50,0,-94,-28,-94,-77r0,-110v0,-50,46,-78,97,-78v59,0,92,26,88,80r-59,0v2,-22,-10,-32,-30,-32v-37,0,-31,35,-31,69v35,-35,131,-22,124,38v10,74,-28,110,-95,110xm111,-44v32,0,35,-23,32,-53v-4,-38,-63,-34,-63,8v0,27,4,45,31,45","w":218,"k":{"\u2014":-13,"\u2013":-13,"-":-13}},"7":{"d":"43,0v1,-76,46,-161,87,-205r-114,0r0,-52r182,0r0,44v-34,34,-90,111,-90,213r-65,0","w":212},"8":{"d":"108,4v-59,0,-94,-23,-94,-84v0,-23,14,-41,32,-50v-21,-10,-28,-31,-28,-59v0,-47,42,-72,90,-72v54,1,91,25,91,87v0,19,-13,36,-28,44v21,10,32,33,32,65v0,44,-43,69,-95,69xm108,-41v24,0,32,-14,32,-40v0,-36,-61,-34,-63,-2v-2,26,8,42,31,42xm109,-151v22,0,31,-13,31,-38v0,-35,-61,-34,-63,-2v-2,26,9,40,32,40","w":217,"k":{"\u2014":-10,"\u2013":-10,"-":-10}},"9":{"d":"106,5v-59,0,-92,-27,-88,-80r60,0v-2,21,10,31,29,31v38,1,32,-35,32,-70v-33,44,-131,22,-125,-37v-10,-74,29,-110,96,-110v50,0,93,28,93,77r0,110v0,50,-46,79,-97,79xm76,-161v4,40,61,35,63,-7v1,-27,-4,-46,-31,-46v-32,0,-35,23,-32,53","w":217,"k":{"\u2014":-13,"\u2013":-13,"-":-13}},":":{"d":"21,0r0,-62r60,0r0,62r-60,0xm21,-125r0,-62r60,0r0,62r-60,0","w":101,"k":{"\\":12}},";":{"d":"30,50r11,-50r-20,0r0,-62r60,0r0,58r-23,54r-28,0xm21,-125r0,-62r60,0r0,62r-60,0","w":101},"<":{"d":"180,-23r-167,-77r0,-29r166,-78r16,33r-128,59r129,60"},"=":{"d":"5,-56r0,-35r199,0r0,35r-199,0xm5,-133r0,-36r199,0r0,36r-199,0"},">":{"d":"30,-23r-17,-32r130,-60r-129,-59r16,-33r166,78r0,29"},"?":{"d":"68,-80v-10,-59,62,-65,62,-106v0,-15,-11,-27,-28,-27v-19,0,-37,11,-33,36r-53,0v-5,-58,39,-80,88,-83v88,-6,106,96,51,131v-18,11,-38,19,-33,49r-54,0xm64,0r0,-62r61,0r0,62r-61,0","w":199,"k":{"\u2026":20,".":17,",":17}},"@":{"d":"49,-86v0,110,121,144,225,106r7,24v-28,12,-62,19,-104,19v-97,0,-161,-54,-161,-148v0,-103,76,-164,171,-164v70,0,138,43,138,119v0,88,-54,125,-142,117v0,-6,4,-15,2,-19v-29,39,-108,28,-97,-36v9,-53,21,-108,78,-108v15,0,32,7,42,18r3,-16r48,0r-23,133v33,-6,57,-35,57,-88v0,-64,-56,-93,-110,-93v-83,0,-134,54,-134,136xm138,-68v5,34,51,22,55,-7v3,-24,17,-66,-18,-65v-34,1,-31,43,-37,72","w":341},"A":{"d":"3,0r91,-257r69,0r90,257r-65,0r-16,-48r-92,0r-16,48r-61,0xm96,-98r60,0r-30,-93","w":255,"k":{"\u00d9":7,"\u00db":7,"\u00da":7,"\u00d2":7,"\u00d4":7,"\u00d3":7,"\u0178":28,"\u00ff":17,"\u2019":29,"\u201d":29,"\u2014":5,"\u2013":5,"\u0152":7,"\u00d5":7,"\u00d8":7,"\u00dc":7,"\u00d6":7,"\u00c7":7,"y":17,"w":17,"v":20,"t":8,"Y":28,"W":22,"V":26,"U":7,"T":29,"S":-1,"O":7,"G":7,"C":7,"?":19,"-":5,"'":29,"\"":29,"\u00fd":17,"\u00dd":28,"\u0160":-1}},"B":{"d":"22,0r0,-257r131,0v85,-6,103,96,38,123v72,23,50,134,-34,134r-135,0xm86,-51v36,0,84,7,84,-29v0,-35,-50,-26,-84,-27r0,56xm86,-154v0,0,80,6,80,-28v0,-33,-48,-24,-80,-25r0,53","w":247,"k":{"\u00c1":3,"\u00c2":3,"\u0178":7,"\u00c3":3,"\u00c0":3,"\u00c6":5,"\u00c5":3,"\u00c4":3,"Y":7,"X":4,"A":3,".":3,",":3,"\u00dd":7}},"C":{"d":"125,4v-57,0,-110,-28,-110,-92r0,-79v0,-63,51,-94,108,-94v53,0,110,28,105,96r-61,0v2,-30,-20,-43,-42,-43v-23,0,-45,12,-45,41v1,53,-12,119,45,119v22,0,45,-14,42,-45r61,0v6,69,-49,97,-103,97","w":241,"k":{"\u0178":4,"Y":4,"X":3,"\u00dd":4}},"D":{"d":"22,0r0,-257v102,-2,211,-10,212,91r0,72v-2,106,-108,96,-212,94xm86,-53v43,2,83,1,84,-41v0,-52,10,-113,-46,-110r-38,0r0,151","w":249,"k":{"\u00c1":7,"\u00c2":7,"\u0178":11,"\u00c3":7,"\u00c0":7,"\u00c6":14,"\u00c5":7,"\u00c4":7,"Y":11,"X":11,"W":2,"V":4,"T":3,"A":7,".":8,",":8,"\u00dd":11}},"E":{"d":"22,0r0,-257r189,0r0,53r-125,0r0,48r105,0r0,52r-105,0r0,51r126,0r0,53r-190,0","w":229,"k":{"\u00d9":3,"\u00db":3,"\u00da":3,"\u00d2":6,"\u00d4":6,"\u00d3":6,"\u00ff":3,"\u0153":5,"\u0152":6,"\u00d5":6,"\u00f8":5,"\u00e6":5,"\u00d8":6,"\u00fc":6,"\u00fb":6,"\u00f9":6,"\u00fa":6,"\u00f5":5,"\u00f6":5,"\u00f4":5,"\u00f2":5,"\u00f3":5,"\u00eb":5,"\u00ea":5,"\u00e8":5,"\u00e9":5,"\u00e7":5,"\u00e5":5,"\u00e3":5,"\u00e4":5,"\u00e2":5,"\u00e0":5,"\u00e1":5,"\u00dc":3,"\u00d6":6,"\u00c7":6,"y":3,"w":4,"v":4,"u":6,"t":9,"q":5,"o":5,"g":5,"e":5,"d":5,"c":5,"a":5,"X":3,"U":3,"S":4,"O":6,"J":3,"G":6,"C":6,"\u00fd":3,"\u0160":4}},"F":{"d":"22,0r0,-257r186,0r0,53r-122,0r0,51r101,0r0,53r-101,0r0,100r-64,0","w":218,"k":{"\u00d2":4,"\u00d4":4,"\u00d3":4,"\u00c1":24,"\u00c2":24,"\u00ff":5,"\u0153":16,"\u0152":4,"\u00d5":4,"\u00c3":24,"\u00c0":24,"\u2026":18,"\u00f8":16,"\u00e6":12,"\u00d8":5,"\u00c6":45,"\u00fc":6,"\u00fb":6,"\u00f9":6,"\u00fa":6,"\u00f5":16,"\u00f6":16,"\u00f4":16,"\u00f2":16,"\u00f3":16,"\u00f1":6,"\u00eb":16,"\u00ea":16,"\u00e8":16,"\u00e9":16,"\u00e7":16,"\u00e5":12,"\u00e3":12,"\u00e4":12,"\u00e2":12,"\u00e0":12,"\u00e1":12,"\u00d6":4,"\u00c7":4,"\u00c5":24,"\u00c4":24,"z":11,"y":5,"x":6,"w":4,"v":4,"u":6,"t":5,"s":9,"r":6,"q":16,"p":6,"o":16,"n":6,"m":6,"g":16,"e":16,"d":16,"c":16,"a":12,"S":3,"O":4,"J":22,"G":4,"C":4,"A":24,";":4,":":4,".":22,",":22,"\u017e":11,"\u00fd":5,"\u0161":9,"\u0160":3}},"G":{"d":"229,-80v-5,116,-217,112,-214,-8r0,-79v0,-63,51,-94,108,-94v53,0,111,25,106,93r-61,0v3,-31,-21,-42,-43,-42v-22,0,-45,12,-45,41v1,54,-12,122,45,122v24,0,44,-13,42,-44r-52,0r0,-48r114,0r0,59","w":242,"k":{"\u00c1":4,"\u00c2":4,"\u00c3":4,"\u00c0":4,"\u00c6":9,"\u00c5":4,"\u00c4":4,"X":8,"A":4,".":4,",":4}},"H":{"d":"22,0r0,-257r64,0r0,99r84,0r0,-99r64,0r0,257r-64,0r0,-102r-84,0r0,102r-64,0","w":256},"I":{"d":"22,0r0,-257r64,0r0,257r-64,0","w":108},"J":{"d":"112,4v-66,1,-104,-28,-99,-100r62,0v-1,27,1,47,36,47v24,0,32,-18,32,-38r0,-170r64,0r0,171v0,51,-35,90,-95,90","w":227,"k":{"\u00c1":7,"\u00c2":7,"\u00c3":7,"\u00c0":7,"\u00c6":10,"\u00c5":7,"\u00c4":7,"A":7,".":7,",":7}},"K":{"d":"22,0r0,-257r64,0r0,117r89,-117r69,0r-82,103r86,154r-70,0r-61,-109r-31,34r0,75r-64,0","w":250,"k":{"\u00d2":11,"\u00d4":11,"\u00d3":11,"\u00ff":7,"\u0153":8,"\u0152":11,"\u00d5":11,"\u00f8":8,"\u00d8":11,"\u00f5":8,"\u00f6":8,"\u00f4":8,"\u00f2":8,"\u00f3":8,"\u00eb":8,"\u00ea":8,"\u00e8":8,"\u00e9":8,"\u00e7":8,"\u00d6":11,"\u00c7":11,"y":7,"w":9,"v":9,"t":11,"q":8,"o":8,"g":8,"e":8,"d":8,"c":8,"O":11,"G":11,"C":11,"\u00fd":7}},"L":{"d":"22,0r0,-257r64,0r0,204r122,0r0,53r-186,0","w":216,"k":{"\u00d9":1,"\u00db":1,"\u00da":1,"\u00d2":1,"\u00d4":1,"\u00d3":1,"\u00c1":-9,"\u00c2":-9,"\u0178":33,"\u00ff":11,"\u2019":33,"\u201d":33,"\u0152":1,"\u00d5":1,"\u00c3":-9,"\u00c0":-9,"\u00e6":-3,"\u00d8":1,"\u00e5":-3,"\u00e3":-3,"\u00e4":-3,"\u00e2":-3,"\u00e0":-3,"\u00e1":-3,"\u00dc":1,"\u00d6":1,"\u00c7":1,"\u00c5":-9,"\u00c4":-9,"y":11,"w":12,"v":12,"t":10,"a":-3,"Y":33,"W":20,"V":23,"U":1,"T":29,"S":-1,"O":1,"G":1,"C":1,"A":-9,"'":33,"\"":33,"\u00fd":11,"\u00dd":33,"\u0160":-1}},"M":{"d":"22,0r0,-257r80,0r53,133r51,-133r79,0r0,257r-60,0r0,-163r-49,128r-45,0r-50,-128r0,163r-59,0","w":306},"N":{"d":"22,0r0,-257r62,0r99,145r0,-145r59,0r0,257r-59,0r-102,-151r0,151r-59,0","w":264},"O":{"d":"234,-93v1,130,-220,131,-219,3r0,-74v0,-65,54,-97,109,-97v57,0,110,31,110,97r0,71xm125,-49v23,0,45,-13,45,-42r0,-76v0,-27,-22,-41,-46,-41v-23,0,-44,12,-44,42v0,53,-11,117,45,117","w":249,"k":{"\u00c1":7,"\u00c2":7,"\u0178":11,"\u00c3":7,"\u00c0":7,"\u00c6":14,"\u00c5":7,"\u00c4":7,"Y":11,"X":11,"W":2,"V":4,"T":3,"A":7,".":8,",":8,"\u00dd":11}},"P":{"d":"22,0r0,-257r116,0v57,0,90,35,90,83v0,42,-26,85,-89,85r-53,0r0,89r-64,0xm86,-138v38,1,79,3,79,-34v0,-38,-41,-35,-79,-34r0,68","w":238,"k":{"\u00c1":22,"\u00c2":22,"\u0178":8,"\u0153":6,"\u00c3":22,"\u00c0":22,"\u2026":21,"\u00f8":6,"\u00e6":4,"\u00c6":45,"\u00f5":6,"\u00f6":6,"\u00f4":6,"\u00f2":6,"\u00f3":6,"\u00eb":6,"\u00ea":6,"\u00e8":6,"\u00e9":6,"\u00e7":6,"\u00e5":4,"\u00e3":4,"\u00e4":4,"\u00e2":4,"\u00e0":4,"\u00e1":4,"\u00c5":22,"\u00c4":22,"q":6,"o":6,"g":6,"e":6,"d":6,"c":6,"a":4,"Z":5,"Y":8,"X":8,"T":2,"J":21,"A":22,".":24,",":24,"\u017d":5,"\u00dd":8}},"Q":{"d":"203,43r-64,-40v-66,6,-123,-23,-124,-93r0,-74v0,-65,54,-97,109,-97v57,0,110,31,110,97v1,59,4,117,-31,142r37,16xm125,-49v23,0,45,-13,45,-42r0,-76v0,-27,-22,-41,-46,-41v-23,0,-44,12,-44,42v0,53,-11,117,45,117","w":249},"R":{"d":"22,0r0,-257r112,0v101,-7,123,122,44,157r59,100r-71,0r-50,-91r-30,0r0,91r-64,0xm86,-138v37,1,77,3,77,-34v0,-37,-40,-35,-77,-34r0,68","w":243,"k":{"\u0178":10,"Y":10,"T":4,"\u00dd":10}},"S":{"d":"217,-80v-1,103,-166,108,-212,38r41,-36v13,19,38,32,65,32v19,0,40,-6,40,-24v0,-31,-48,-30,-73,-38v-34,-11,-61,-30,-61,-71v0,-91,155,-107,194,-42r-42,35v-12,-16,-34,-25,-54,-25v-19,0,-35,7,-35,25v0,26,52,27,76,35v36,11,61,31,61,71","w":227,"k":{"\u00c1":4,"\u00c2":4,"\u0178":3,"\u00ff":4,"\u00c3":4,"\u00c0":4,"\u00c5":4,"\u00c4":4,"y":4,"Y":3,"T":4,"A":4,"\u00fd":4,"\u00dd":3}},"T":{"d":"82,0r0,-205r-73,0r0,-52r210,0r0,52r-73,0r0,205r-64,0","w":227,"k":{"\u00d2":3,"\u00d4":3,"\u00d3":3,"\u00c1":30,"\u00c2":30,"\u0178":-5,"\u00ff":8,"\u0153":24,"\u0152":3,"\u00d5":3,"\u00c3":30,"\u00c0":30,"\u2026":18,"\u00f8":24,"\u00e6":24,"\u00d8":3,"\u00c6":41,"\u00fc":10,"\u00fb":10,"\u00f9":10,"\u00fa":10,"\u00f5":24,"\u00f6":24,"\u00f4":24,"\u00f2":24,"\u00f3":24,"\u00f1":9,"\u00eb":24,"\u00ea":24,"\u00e8":24,"\u00e9":24,"\u00e7":24,"\u00e5":24,"\u00e3":24,"\u00e4":24,"\u00e2":24,"\u00e0":24,"\u00e1":24,"\u00d6":3,"\u00c7":3,"\u00c5":30,"\u00c4":30,"z":13,"y":8,"x":8,"w":8,"v":8,"u":10,"t":6,"s":22,"r":9,"q":24,"p":9,"o":24,"n":9,"m":9,"g":24,"e":24,"d":24,"c":24,"a":24,"Y":-5,"W":-5,"V":-5,"S":3,"O":3,"J":41,"G":3,"C":3,"A":30,";":6,":":6,".":31,",":31,"\u017e":13,"\u00fd":8,"\u00dd":-5,"\u0161":22,"\u0160":3}},"U":{"d":"127,4v-65,0,-106,-31,-106,-95r0,-166r64,0r0,162v0,29,15,46,44,46v27,0,42,-15,42,-46r0,-162r63,0r0,163v0,64,-47,98,-107,98","w":255,"k":{"\u00c1":7,"\u00c2":7,"\u00c3":7,"\u00c0":7,"\u00c6":14,"\u00c5":7,"\u00c4":7,"A":7}},"V":{"d":"82,1r-81,-258r65,0r52,181r52,-181r62,0r-84,258r-66,0","w":232,"k":{"\u00d2":6,"\u00d4":6,"\u00d3":6,"\u00c1":31,"\u00c2":31,"\u00ff":8,"\u2014":8,"\u2013":8,"\u0153":18,"\u0152":6,"\u00d5":6,"\u00c3":31,"\u00c0":31,"\u2026":18,"\u00f8":18,"\u00e6":18,"\u00d8":6,"\u00c6":36,"\u00f5":18,"\u00f6":18,"\u00f4":18,"\u00f2":18,"\u00f3":18,"\u00f1":5,"\u00eb":15,"\u00ea":15,"\u00e8":15,"\u00e9":18,"\u00e7":18,"\u00e5":18,"\u00e3":18,"\u00e4":18,"\u00e2":18,"\u00e0":18,"\u00e1":18,"\u00d6":6,"\u00c7":6,"\u00c5":31,"\u00c4":31,"y":8,"x":9,"v":6,"s":9,"r":11,"q":18,"p":11,"o":18,"n":11,"m":11,"g":18,"e":18,"d":18,"c":18,"a":18,"T":-5,"S":4,"O":6,"J":18,"G":6,"C":6,"A":31,";":8,":":8,".":29,"-":8,",":29,"\u00fd":8,"\u0161":9,"\u0160":4}},"W":{"d":"68,1r-64,-258r64,0r36,157r40,-157r56,0r39,157r35,-157r62,0r-65,258r-60,0r-41,-163r-2,0r-41,163r-59,0","w":339,"k":{"\u00d2":3,"\u00d4":3,"\u00d3":3,"\u00c1":22,"\u00c2":22,"\u00ff":4,"\u2014":7,"\u2013":7,"\u0153":12,"\u0152":3,"\u00d5":3,"\u00c3":22,"\u00c0":22,"\u2026":19,"\u00f8":12,"\u00e6":12,"\u00d8":3,"\u00c6":33,"\u00f5":12,"\u00f6":12,"\u00f4":12,"\u00f2":12,"\u00f3":12,"\u00f1":4,"\u00eb":12,"\u00ea":12,"\u00e8":12,"\u00e9":12,"\u00e7":12,"\u00e5":12,"\u00e3":12,"\u00e4":12,"\u00e2":12,"\u00e0":12,"\u00e1":12,"\u00d6":3,"\u00c7":3,"\u00c5":22,"\u00c4":22,"z":8,"y":4,"x":8,"v":2,"s":9,"r":4,"q":12,"p":4,"o":12,"n":4,"m":4,"g":12,"e":12,"d":12,"c":12,"a":12,"T":-5,"O":3,"J":15,"G":3,"C":3,"A":22,";":9,":":9,".":23,"-":7,",":23,"\u017e":8,"\u00fd":4,"\u0161":9}},"X":{"d":"-1,0r79,-133r-73,-124r70,0r45,80r44,-80r66,0r-74,125r79,132r-70,0r-50,-86r-49,86r-67,0","w":234,"k":{"\u00d2":11,"\u00d4":11,"\u00d3":11,"\u00ff":8,"\u0152":11,"\u00d5":11,"\u00d8":11,"\u00d6":11,"\u00c7":11,"y":8,"O":11,"G":11,"C":11,"\u00fd":8}},"Y":{"d":"84,0r0,-102r-84,-155r67,0r51,101r50,-101r65,0r-85,156r0,101r-64,0","w":232,"k":{"\u00d2":8,"\u00d4":8,"\u00d3":8,"\u00c1":28,"\u00c2":28,"\u00ff":10,"\u2014":12,"\u2013":12,"\u0153":26,"\u0152":8,"\u00d5":8,"\u00c3":28,"\u00c0":28,"\u2026":30,"\u00f8":26,"\u00e6":26,"\u00d8":11,"\u00c6":41,"\u00fc":13,"\u00fb":13,"\u00f9":13,"\u00fa":13,"\u00f5":26,"\u00f6":26,"\u00f4":26,"\u00f2":26,"\u00f3":26,"\u00f1":6,"\u00eb":20,"\u00ea":20,"\u00e8":20,"\u00e9":26,"\u00e7":26,"\u00e5":26,"\u00e3":26,"\u00e4":26,"\u00e2":26,"\u00e0":26,"\u00e1":26,"\u00d6":8,"\u00c7":8,"\u00c5":28,"\u00c4":28,"z":13,"y":10,"x":9,"w":9,"v":12,"u":13,"t":11,"s":17,"r":15,"q":26,"p":15,"o":26,"n":15,"m":15,"g":26,"e":26,"d":26,"c":26,"a":26,"T":-5,"S":8,"O":8,"J":31,"G":8,"C":8,"A":28,";":9,":":9,".":29,"-":12,",":29,"\u017e":13,"\u00fd":10,"\u0161":17,"\u0160":8}},"Z":{"d":"13,0r0,-42r119,-163r-114,0r0,-52r193,0r0,45r-115,159r116,0r0,53r-199,0","w":225,"k":{"\u00d2":4,"\u00d4":4,"\u00d3":4,"\u00ff":3,"\u0152":4,"\u00d5":4,"\u00d8":4,"\u00d6":4,"\u00c7":4,"y":3,"w":3,"v":3,"O":4,"G":4,"C":4,"\u00fd":3}},"[":{"d":"34,70r0,-349r91,0r0,29r-42,0r0,292r41,0r0,28r-90,0","w":129,"k":{"\u00c1":11,"\u00c2":11,"\u00c3":11,"\u00c0":11,"\u00c5":11,"\u00c4":11,"A":11}},"\\":{"d":"93,40r-94,-302r43,0r94,302r-43,0","w":129,"k":{"_":-32}},"]":{"d":"6,70r0,-28r41,0r0,-292r-41,0r0,-29r90,0r0,349r-90,0","w":129},"^":{"d":"36,-44r46,-178r49,0r43,178r-42,0r-27,-133r-28,133r-41,0"},"_":{"d":"0,53r0,-39r180,0r0,39r-180,0","w":180,"k":{"\\":51}},"`":{"d":"66,-212r-49,-65r59,0r31,65r-41,0","w":122},"a":{"d":"132,-21v-37,43,-122,31,-122,-30v0,-57,60,-65,118,-62v2,-24,-4,-38,-29,-38v-21,0,-29,9,-28,24r-53,0v-3,-48,39,-65,84,-66v44,0,86,17,86,65r0,86v0,14,2,38,3,42r-57,0v0,-1,-1,-7,-2,-21xm96,-39v26,0,34,-16,32,-41v-26,0,-58,-4,-58,21v0,12,8,20,26,20","w":206},"b":{"d":"202,-66v3,65,-86,94,-124,48r0,18r-58,0r0,-257r60,0r0,90v38,-50,126,-24,122,44r0,57xm80,-69v2,40,63,41,63,-2v1,-35,5,-76,-31,-76v-15,0,-32,8,-32,34r0,44","w":215,"k":{"v":3}},"c":{"d":"104,5v-59,2,-91,-39,-91,-116v0,-56,45,-82,91,-82v47,1,91,24,87,78r-58,0v2,-23,-12,-33,-29,-33v-36,0,-32,42,-31,77v0,19,13,31,32,31v17,0,30,-10,28,-33r58,0v4,55,-40,77,-87,78","w":199},"d":{"d":"137,-22v-38,47,-129,27,-124,-44r0,-57v-4,-66,83,-91,123,-49r0,-85r59,0r0,257r-58,0r0,-22xm104,-42v33,4,34,-42,32,-78v-3,-40,-63,-42,-63,3v0,35,-4,77,31,75","w":215},"e":{"d":"185,-25v-48,50,-172,41,-172,-48v0,-78,32,-120,92,-120v56,0,94,42,84,113r-116,0v-6,51,65,44,89,22xm73,-114r59,0v2,-24,-11,-35,-29,-35v-18,0,-32,11,-30,35","w":201},"f":{"d":"32,0r0,-144r-25,0r0,-43r25,0v-7,-64,33,-86,91,-73r0,41v-15,-2,-32,-3,-32,13r0,19r33,0r0,43r-33,0r0,144r-59,0","w":130},"g":{"d":"196,-19v10,89,-124,117,-178,60r31,-33v32,31,104,19,87,-38v-38,45,-129,19,-121,-47v-7,-67,16,-117,74,-116v20,-1,38,9,50,22r0,-18r57,0r0,170xm106,-52v28,4,34,-33,31,-66v-3,-38,-62,-43,-62,2v0,33,-1,67,31,64","w":215},"h":{"d":"20,0r0,-257r60,0r1,92v31,-48,118,-35,118,34r0,131r-60,0r0,-111v0,-19,-7,-35,-29,-35v-49,0,-24,97,-30,146r-60,0","w":216},"i":{"d":"20,0r0,-189r60,0r0,189r-60,0xm20,-212r0,-48r60,0r0,48r-60,0","w":99},"j":{"d":"85,12v1,48,-41,63,-87,55r0,-44v15,1,28,0,27,-15r0,-197r60,0r0,201xm25,-212r0,-48r60,0r0,48r-60,0","w":105},"k":{"d":"21,0r0,-257r59,0r0,142r59,-74r62,0r-56,68r57,121r-65,0r-37,-81r-20,23r0,58r-59,0","w":206},"l":{"d":"73,4v-40,0,-54,-27,-54,-53r0,-208r60,0r0,197v-2,15,18,16,32,12r0,45v-11,3,-25,7,-38,7","w":118,"k":{"\u00ff":14,"y":14,"w":12,"v":14,"\u00fd":14}},"m":{"d":"20,0r0,-189r58,0v1,7,-2,18,1,24v25,-38,90,-37,112,1v30,-43,122,-43,123,30r0,134r-59,0r0,-111v0,-18,-6,-35,-29,-35v-49,0,-23,97,-29,146r-59,0r0,-111v0,-17,-5,-35,-29,-35v-13,0,-29,11,-29,37r0,109r-60,0","w":333},"n":{"d":"20,0r0,-189r58,0v1,7,-2,18,1,23v33,-45,120,-35,120,35r0,131r-60,0r0,-111v0,-19,-7,-35,-29,-35v-49,0,-24,97,-30,146r-60,0","w":216},"o":{"d":"104,4v-45,0,-91,-21,-91,-76r0,-41v0,-107,181,-108,181,-1r0,39v0,55,-48,79,-90,79xm104,-41v35,0,31,-42,30,-77v0,-18,-13,-30,-31,-30v-35,0,-31,43,-30,78v0,18,12,29,31,29","w":207,"k":{"v":3}},"p":{"d":"20,68r0,-257r58,0v1,7,-2,17,1,22v38,-50,127,-25,123,44r0,57v4,65,-84,93,-122,49r0,85r-60,0xm80,-69v1,40,63,42,63,-1v1,-35,5,-77,-31,-77v-15,0,-32,8,-32,34r0,44","w":215,"k":{"v":3}},"q":{"d":"136,68r0,-90v-37,49,-127,24,-123,-44r0,-56v-4,-68,83,-92,124,-49r0,-19r58,0r0,258r-59,0xm104,-42v33,4,34,-42,32,-78v-3,-40,-63,-42,-63,3v0,35,-4,77,31,75","w":215},"r":{"d":"19,0r0,-189r58,0v1,10,-2,23,1,31v14,-23,41,-42,76,-33r0,51v-39,-6,-76,-2,-76,41r0,99r-59,0","w":158,"k":{"\u00ff":-8,"\u00e6":-1,"\u00e5":-1,"\u00e3":-1,"\u00e4":-1,"\u00e2":-1,"\u00e0":-1,"\u00e1":-1,"y":-8,"w":-8,"v":-8,"t":-7,"a":-1,".":26,",":26,"\u00fd":-8}},"s":{"d":"184,-62v0,80,-126,83,-175,37r31,-35v13,13,33,22,54,22v14,0,29,-4,29,-16v0,-11,-8,-14,-23,-17v-1,0,-3,1,-34,-7v-30,-7,-49,-23,-49,-51v0,-69,118,-84,158,-39r-34,32v-12,-11,-28,-16,-43,-16v-16,0,-25,5,-25,15v4,17,41,16,59,21v33,9,52,27,52,54","w":195,"k":{"\u2019":14,"\u201d":14,"'":14,"\"":14}},"t":{"d":"129,-3v-45,13,-98,12,-98,-45r0,-96r-25,0r0,-43r25,0r0,-53r59,0r0,53r40,0r0,43r-40,0r0,81v-3,20,24,17,39,14r0,46","w":137,"k":{"\u00ff":-4,"y":-4,"w":-4,"v":-4,"\u00fd":-4}},"u":{"d":"140,-26v-33,47,-121,40,-120,-33r0,-130r59,0r0,110v0,19,7,36,29,36v49,-2,26,-96,31,-146r59,0r0,189r-58,0r0,-26","w":217},"v":{"d":"69,1r-67,-190r63,0v14,39,21,84,38,120r36,-120r56,0r-65,190r-61,0","w":196,"k":{"\u0153":3,"\u00f8":3,"\u00f5":3,"\u00f6":3,"\u00f4":3,"\u00f2":3,"\u00f3":3,"\u00eb":3,"\u00ea":3,"\u00e8":3,"\u00e9":3,"\u00e7":3,"t":-4,"q":3,"o":3,"g":3,"e":3,"d":3,"c":3,".":19,",":19}},"w":{"d":"62,1r-60,-190r61,0r31,114r31,-114r55,0r32,113r30,-113r57,0r-60,190r-55,0r-34,-121r-33,121r-55,0","w":300,"k":{"t":-4,".":19,",":19}},"x":{"d":"3,0r62,-98r-59,-91r66,0r31,52r31,-52r58,0r-58,91r63,98r-66,0r-35,-58r-34,58r-59,0","w":199},"y":{"d":"124,20v-18,47,-52,53,-101,47r0,-46v26,6,46,-1,49,-24r-69,-186r64,0r38,119r38,-119r55,0","w":199,"k":{"t":-4,".":19,",":19}},"z":{"d":"12,0r0,-40r90,-105r-85,0r0,-44r158,0r-1,40r-88,103r90,0r0,46r-164,0","w":188},"{":{"d":"128,70v-47,1,-89,7,-89,-46r0,-99v0,-18,-3,-24,-16,-25r0,-30v16,-3,16,-6,16,-19v2,-51,-13,-133,39,-130r50,0r0,28v-14,2,-37,-7,-38,9v-4,45,15,114,-23,126r0,2v43,16,15,96,23,147v2,16,25,5,38,8r0,29","w":133,"k":{"\u00c1":11,"\u00c2":11,"\u00c3":11,"\u00c0":11,"\u00c5":11,"\u00c4":11,"A":11}},"|":{"d":"36,14r0,-275r45,0r0,275r-45,0","w":117},"}":{"d":"6,70r0,-29v14,-3,36,8,38,-8v5,-53,-17,-129,23,-149v-38,-12,-18,-81,-23,-126v-1,-16,-24,-7,-38,-9r0,-28v47,-1,90,-6,89,46r0,84v0,13,0,16,16,19r0,30v-13,1,-16,7,-16,25v0,55,17,147,-40,145r-49,0","w":132},"~":{"d":"35,-84r-27,-5v5,-28,17,-51,45,-51v22,0,83,11,105,11v10,0,13,-7,17,-17r26,6v-4,27,-15,51,-43,51v-22,0,-84,-11,-106,-11v-9,0,-12,3,-17,16"},"\u00c4":{"d":"3,0r91,-257r69,0r90,257r-65,0r-16,-48r-92,0r-16,48r-61,0xm96,-98r60,0r-30,-93xm63,-277r0,-54r50,0r0,54r-50,0xm142,-277r0,-54r51,0r0,54r-51,0","w":255,"k":{"\u2019":29,"\u201d":29,"\u2014":5,"\u2013":5,"\u0152":7,"\u00c7":7,"y":17,"w":17,"v":20,"t":8,"Y":28,"W":22,"V":26,"U":7,"T":29,"S":-1,"O":7,"G":7,"C":7,"?":19,"-":5,"'":29,"\"":29}},"\u00c5":{"d":"3,0r91,-257r69,0r90,257r-65,0r-16,-48r-92,0r-16,48r-61,0xm96,-98r60,0r-30,-93xm128,-271v-24,0,-42,-15,-42,-38v0,-23,19,-41,42,-41v24,0,42,14,42,38v0,23,-19,41,-42,41xm128,-292v10,0,18,-8,18,-18v0,-11,-6,-19,-18,-19v-11,0,-18,8,-18,19v0,10,8,18,18,18","w":255,"k":{"\u2019":29,"\u201d":29,"\u2014":5,"\u2013":5,"\u0152":7,"\u00c7":7,"y":17,"w":17,"v":20,"t":8,"Y":28,"W":22,"V":26,"U":7,"T":29,"S":-1,"O":7,"G":7,"C":7,"?":19,"-":5,"'":29,"\"":29}},"\u00c7":{"d":"99,47v19,2,38,0,28,-11v0,-3,-4,-2,-15,-3r-5,-18r15,-19v5,9,16,3,12,20v18,0,41,3,41,24v0,22,-25,32,-53,32r1,-1v-27,-4,-22,4,-40,-14v5,2,12,3,16,-10xm125,4v-57,0,-110,-28,-110,-92r0,-79v0,-63,51,-94,108,-94v53,0,110,28,105,96r-61,0v2,-30,-20,-43,-42,-43v-23,0,-45,12,-45,41v1,53,-12,119,45,119v22,0,45,-14,42,-45r61,0v6,69,-49,97,-103,97","w":241,"k":{"\u0178":4,"Y":4,"X":3,"\u00dd":4}},"\u00c9":{"d":"96,-278r31,-64r59,0r-50,64r-40,0xm22,0r0,-257r189,0r0,53r-125,0r0,48r105,0r0,52r-105,0r0,51r126,0r0,53r-190,0","w":229,"k":{"\u0153":5,"\u0152":6,"\u00e6":5,"\u00e7":5,"\u00c7":6,"y":3,"w":4,"v":4,"u":6,"t":9,"q":5,"o":5,"g":5,"e":5,"d":5,"c":5,"a":5,"X":3,"U":3,"S":4,"O":6,"J":3,"G":6,"C":6}},"\u00d1":{"d":"22,0r0,-257r62,0r99,145r0,-145r59,0r0,257r-59,0r-102,-151r0,151r-59,0xm88,-277r-28,-6v5,-29,18,-54,46,-54v28,0,72,33,81,-5r26,6v-4,28,-14,54,-43,54v-29,0,-71,-33,-82,5","w":264},"\u00d6":{"d":"234,-93v1,130,-220,131,-219,3r0,-74v0,-65,54,-97,109,-97v57,0,110,31,110,97r0,71xm125,-49v23,0,45,-13,45,-42r0,-76v0,-27,-22,-41,-46,-41v-23,0,-44,12,-44,42v0,53,-11,117,45,117xm59,-278r0,-54r51,0r0,54r-51,0xm139,-278r0,-54r51,0r0,54r-51,0","w":249,"k":{"\u00c6":14,"Y":11,"X":11,"W":2,"V":4,"T":3,"A":7,".":8,",":8}},"\u00dc":{"d":"127,4v-65,0,-106,-31,-106,-95r0,-166r64,0r0,162v0,29,15,46,44,46v27,0,42,-15,42,-46r0,-162r63,0r0,163v0,64,-47,98,-107,98xm65,-277r0,-55r51,0r0,55r-51,0xm144,-277r0,-55r51,0r0,55r-51,0","w":255,"k":{"\u00c6":14,"A":7}},"\u00e1":{"d":"132,-21v-37,43,-122,31,-122,-30v0,-57,60,-65,118,-62v2,-24,-4,-38,-29,-38v-21,0,-29,9,-28,24r-53,0v-3,-48,39,-65,84,-66v44,0,86,17,86,65r0,86v0,14,2,38,3,42r-57,0v0,-1,-1,-7,-2,-21xm96,-39v26,0,34,-16,32,-41v-26,0,-58,-4,-58,21v0,12,8,20,26,20xm78,-212r31,-65r59,0r-49,65r-41,0","w":206},"\u00e0":{"d":"132,-21v-37,43,-122,31,-122,-30v0,-57,60,-65,118,-62v2,-24,-4,-38,-29,-38v-21,0,-29,9,-28,24r-53,0v-3,-48,39,-65,84,-66v44,0,86,17,86,65r0,86v0,14,2,38,3,42r-57,0v0,-1,-1,-7,-2,-21xm96,-39v26,0,34,-16,32,-41v-26,0,-58,-4,-58,21v0,12,8,20,26,20xm90,-212r-50,-65r59,0r32,65r-41,0","w":206},"\u00e2":{"d":"132,-21v-37,43,-122,31,-122,-30v0,-57,60,-65,118,-62v2,-24,-4,-38,-29,-38v-21,0,-29,9,-28,24r-53,0v-3,-48,39,-65,84,-66v44,0,86,17,86,65r0,86v0,14,2,38,3,42r-57,0v0,-1,-1,-7,-2,-21xm96,-39v26,0,34,-16,32,-41v-26,0,-58,-4,-58,21v0,12,8,20,26,20xm38,-211r41,-67r47,0r39,67r-45,0r-18,-35r-20,35r-44,0","w":206},"\u00e4":{"d":"132,-21v-37,43,-122,31,-122,-30v0,-57,60,-65,118,-62v2,-24,-4,-38,-29,-38v-21,0,-29,9,-28,24r-53,0v-3,-48,39,-65,84,-66v44,0,86,17,86,65r0,86v0,14,2,38,3,42r-57,0v0,-1,-1,-7,-2,-21xm96,-39v26,0,34,-16,32,-41v-26,0,-58,-4,-58,21v0,12,8,20,26,20xm37,-212r0,-54r50,0r0,54r-50,0xm116,-212r0,-54r51,0r0,54r-51,0","w":206},"\u00e3":{"d":"132,-21v-37,43,-122,31,-122,-30v0,-57,60,-65,118,-62v2,-24,-4,-38,-29,-38v-21,0,-29,9,-28,24r-53,0v-3,-48,39,-65,84,-66v44,0,86,17,86,65r0,86v0,14,2,38,3,42r-57,0v0,-1,-1,-7,-2,-21xm96,-39v26,0,34,-16,32,-41v-26,0,-58,-4,-58,21v0,12,8,20,26,20xm52,-210r-28,-5v5,-29,18,-54,46,-54v28,0,72,31,82,-6r26,6v-4,28,-15,54,-44,54v-29,0,-71,-33,-82,5","w":206},"\u00e5":{"d":"132,-21v-37,43,-122,31,-122,-30v0,-57,60,-65,118,-62v2,-24,-4,-38,-29,-38v-21,0,-29,9,-28,24r-53,0v-3,-48,39,-65,84,-66v44,0,86,17,86,65r0,86v0,14,2,38,3,42r-57,0v0,-1,-1,-7,-2,-21xm96,-39v26,0,34,-16,32,-41v-26,0,-58,-4,-58,21v0,12,8,20,26,20xm103,-210v-24,0,-42,-15,-42,-38v0,-23,19,-41,42,-41v24,0,42,15,42,39v0,23,-19,40,-42,40xm103,-231v10,0,18,-8,18,-18v0,-11,-6,-19,-18,-19v-11,0,-18,8,-18,19v0,10,8,18,18,18","w":206},"\u00e7":{"d":"104,5v-59,2,-91,-39,-91,-116v0,-56,45,-82,91,-82v47,1,91,24,87,78r-58,0v2,-23,-12,-33,-29,-33v-36,0,-32,42,-31,77v0,19,13,31,32,31v17,0,30,-10,28,-33r58,0v4,55,-40,77,-87,78xm156,40v-1,34,-57,37,-93,27r0,-23v17,4,49,12,53,-3v-2,-12,-21,-7,-33,-9r10,-36r24,0r-5,20v18,0,44,2,44,24","w":199},"\u00e9":{"d":"185,-25v-48,50,-172,41,-172,-48v0,-78,32,-120,92,-120v56,0,94,42,84,113r-116,0v-6,51,65,44,89,22xm73,-114r59,0v2,-24,-11,-35,-29,-35v-18,0,-32,11,-30,35xm81,-212r31,-65r59,0r-50,65r-40,0","w":201},"\u00e8":{"d":"185,-25v-48,50,-172,41,-172,-48v0,-78,32,-120,92,-120v56,0,94,42,84,113r-116,0v-6,51,65,44,89,22xm73,-114r59,0v2,-24,-11,-35,-29,-35v-18,0,-32,11,-30,35xm89,-212r-50,-65r59,0r32,65r-41,0","w":201},"\u00ea":{"d":"185,-25v-48,50,-172,41,-172,-48v0,-78,32,-120,92,-120v56,0,94,42,84,113r-116,0v-6,51,65,44,89,22xm73,-114r59,0v2,-24,-11,-35,-29,-35v-18,0,-32,11,-30,35xm40,-211r41,-67r46,0r39,67r-44,0r-19,-35r-19,35r-44,0","w":201},"\u00eb":{"d":"185,-25v-48,50,-172,41,-172,-48v0,-78,32,-120,92,-120v56,0,94,42,84,113r-116,0v-6,51,65,44,89,22xm73,-114r59,0v2,-24,-11,-35,-29,-35v-18,0,-32,11,-30,35xm39,-212r0,-54r51,0r0,54r-51,0xm118,-212r0,-54r51,0r0,54r-51,0","w":201},"\u00ed":{"d":"20,0r0,-189r60,0r0,189r-60,0xm27,-212r32,-65r58,0r-49,65r-41,0","w":99},"\u00ec":{"d":"20,0r0,-189r60,0r0,189r-60,0xm32,-212r-49,-65r59,0r31,65r-41,0","w":99},"\u00ee":{"d":"20,0r0,-189r60,0r0,189r-60,0xm-12,-211r41,-67r46,0r39,67r-44,0r-19,-35r-20,35r-43,0","w":99},"\u00ef":{"d":"20,0r0,-189r60,0r0,189r-60,0xm-15,-212r0,-54r51,0r0,54r-51,0xm64,-212r0,-54r51,0r0,54r-51,0","w":99},"\u00f1":{"d":"20,0r0,-189r58,0v1,7,-2,18,1,23v33,-45,120,-35,120,35r0,131r-60,0r0,-111v0,-19,-7,-35,-29,-35v-49,0,-24,97,-30,146r-60,0xm64,-210r-28,-5v5,-29,18,-54,46,-54v28,0,71,31,81,-6r26,6v-4,28,-14,54,-43,54v-29,0,-71,-33,-82,5","w":216},"\u00f3":{"d":"104,4v-45,0,-91,-21,-91,-76r0,-41v0,-107,181,-108,181,-1r0,39v0,55,-48,79,-90,79xm104,-41v35,0,31,-42,30,-77v0,-18,-13,-30,-31,-30v-35,0,-31,43,-30,78v0,18,12,29,31,29xm79,-212r32,-65r58,0r-49,65r-41,0","w":207,"k":{"v":3}},"\u00f2":{"d":"104,4v-45,0,-91,-21,-91,-76r0,-41v0,-107,181,-108,181,-1r0,39v0,55,-48,79,-90,79xm104,-41v35,0,31,-42,30,-77v0,-18,-13,-30,-31,-30v-35,0,-31,43,-30,78v0,18,12,29,31,29xm88,-212r-49,-65r58,0r32,65r-41,0","w":207,"k":{"v":3}},"\u00f4":{"d":"104,4v-45,0,-91,-21,-91,-76r0,-41v0,-107,181,-108,181,-1r0,39v0,55,-48,79,-90,79xm104,-41v35,0,31,-42,30,-77v0,-18,-13,-30,-31,-30v-35,0,-31,43,-30,78v0,18,12,29,31,29xm41,-211r41,-67r47,0r39,67r-45,0r-18,-35r-20,35r-44,0","w":207,"k":{"v":3}},"\u00f6":{"d":"104,4v-45,0,-91,-21,-91,-76r0,-41v0,-107,181,-108,181,-1r0,39v0,55,-48,79,-90,79xm104,-41v35,0,31,-42,30,-77v0,-18,-13,-30,-31,-30v-35,0,-31,43,-30,78v0,18,12,29,31,29xm38,-212r0,-54r51,0r0,54r-51,0xm118,-212r0,-54r50,0r0,54r-50,0","w":207,"k":{"v":3}},"\u00f5":{"d":"104,4v-45,0,-91,-21,-91,-76r0,-41v0,-107,181,-108,181,-1r0,39v0,55,-48,79,-90,79xm104,-41v35,0,31,-42,30,-77v0,-18,-13,-30,-31,-30v-35,0,-31,43,-30,78v0,18,12,29,31,29xm54,-210r-27,-5v5,-29,18,-54,46,-54v29,0,71,31,81,-6r26,6v-4,28,-15,54,-44,54v-29,0,-70,-33,-82,5","w":207,"k":{"v":3}},"\u00fa":{"d":"140,-26v-33,47,-121,40,-120,-33r0,-130r59,0r0,110v0,19,7,36,29,36v49,-2,26,-96,31,-146r59,0r0,189r-58,0r0,-26xm91,-212r32,-65r58,0r-49,65r-41,0","w":217},"\u00f9":{"d":"140,-26v-33,47,-121,40,-120,-33r0,-130r59,0r0,110v0,19,7,36,29,36v49,-2,26,-96,31,-146r59,0r0,189r-58,0r0,-26xm90,-212r-49,-65r59,0r31,65r-41,0","w":217},"\u00fb":{"d":"140,-26v-33,47,-121,40,-120,-33r0,-130r59,0r0,110v0,19,7,36,29,36v49,-2,26,-96,31,-146r59,0r0,189r-58,0r0,-26xm47,-211r41,-67r47,0r38,67r-44,0r-18,-35r-20,35r-44,0","w":217},"\u00fc":{"d":"140,-26v-33,47,-121,40,-120,-33r0,-130r59,0r0,110v0,19,7,36,29,36v49,-2,26,-96,31,-146r59,0r0,189r-58,0r0,-26xm44,-212r0,-54r50,0r0,54r-50,0xm123,-212r0,-54r51,0r0,54r-51,0","w":217},"\u2020":{"d":"83,58r0,-217r-73,0r0,-35r73,0r0,-64r39,0r0,64r73,0r0,35r-73,0r0,217r-39,0","w":205},"\u00b0":{"d":"63,-180v-28,0,-45,-20,-45,-42v0,-23,19,-44,45,-44v27,0,45,19,45,42v0,24,-21,44,-45,44xm63,-203v10,0,19,-8,19,-19v0,-11,-7,-21,-19,-21v-11,0,-19,9,-19,21v0,11,9,19,19,19","w":125},"\u00a2":{"d":"87,29r0,-33v-53,-4,-68,-49,-68,-117v0,-45,31,-70,68,-76r0,-28r42,0r0,28v38,7,67,29,63,74r-56,0v2,-22,-12,-33,-28,-33v-37,0,-32,45,-31,81v0,18,13,30,32,30v16,0,29,-12,27,-33r56,0v4,46,-24,68,-63,74r0,33r-42,0","w":206},"\u00a3":{"d":"17,0r0,-48r28,0r0,-60r-22,0r0,-35r22,0r0,-43v1,-103,163,-99,165,-6r0,15r-54,0v2,-22,-6,-36,-26,-36v-32,0,-24,39,-25,70r63,0r0,35r-63,0r0,60r110,0r-11,48r-187,0","w":225},"\u00a7":{"d":"97,32v-37,0,-83,-17,-76,-72r43,0v-2,22,6,33,35,34v45,1,45,-37,12,-44v-28,-6,-86,-21,-86,-65v0,-17,7,-32,21,-43v-46,-33,-15,-105,55,-101v48,3,78,21,74,70r-41,0v2,-22,-6,-33,-35,-33v-20,0,-31,8,-31,20v27,37,108,19,110,82v0,18,-6,34,-20,45v47,37,10,107,-61,107xm118,-94v23,-9,23,-30,-2,-36v0,0,-10,-2,-30,-8v-11,4,-17,10,-17,21v11,20,20,12,49,23","w":198},"\u2022":{"d":"80,-75v-31,0,-56,-25,-56,-56v0,-31,25,-56,56,-56v31,0,56,25,56,56v0,31,-25,56,-56,56","w":159},"\u00b6":{"d":"91,32r0,-109v-99,-8,-84,-180,6,-180r110,0r0,29r-17,0r0,260r-35,0r0,-260r-29,0r0,260r-35,0","w":223},"\u00df":{"d":"224,-69v0,61,-66,86,-124,67r0,-47v26,10,62,5,61,-24v0,-23,-22,-33,-50,-33r0,-43v24,1,36,-21,36,-39v0,-19,-12,-30,-33,-30v-22,0,-34,17,-34,36r0,182r-60,0r0,-176v0,-41,27,-85,96,-85v51,0,91,23,91,68v1,24,-15,45,-37,55v36,12,54,39,54,69","w":235},"\u00ae":{"d":"63,-147r0,-86v32,-1,72,-4,71,27v0,11,-6,21,-16,26r18,33r-25,0r-16,-30r-8,0r0,30r-24,0xm96,-109v-50,0,-80,-36,-80,-79v0,-43,34,-79,80,-79v49,0,80,36,80,79v0,43,-32,79,-80,79xm96,-126v31,0,59,-23,59,-62v0,-39,-27,-63,-59,-63v-32,0,-59,24,-59,63v0,39,28,62,59,62xm87,-194v21,7,32,-17,12,-21r-12,0r0,21","w":192},"\u00a9":{"d":"243,-88v-3,81,-152,82,-150,-6r0,-61v-3,-85,147,-90,150,-6r0,16r-48,0v2,-22,-5,-35,-25,-35v-39,0,-27,51,-27,86v0,17,10,26,27,26v21,1,27,-15,25,-37r48,0r0,17xm167,23v-92,0,-146,-68,-146,-148v0,-80,60,-146,146,-146v90,0,148,66,148,146v0,80,-59,148,-148,148xm167,-4v60,0,115,-47,115,-121v0,-75,-53,-122,-115,-122v-63,0,-114,47,-114,122v0,75,54,121,114,121","w":335},"\u2122":{"d":"122,-146r0,-114r38,0r16,47r17,-47r38,0r0,114r-29,0r0,-64r-16,45r-20,0r-15,-44r0,63r-29,0xm46,-146r0,-87r-30,0r0,-27r91,0r0,27r-30,0r0,87r-31,0","w":248},"\u00b4":{"d":"16,-212r32,-65r58,0r-49,65r-41,0","w":122},"\u00a8":{"d":"23,-212r0,-54r51,0r0,54r-51,0xm103,-212r0,-54r51,0r0,54r-51,0","w":177},"\u2260":{"d":"75,-10r-29,-11r17,-35r-58,0r0,-35r77,0r20,-42r-97,0r0,-36r115,0r20,-41r29,11r-15,30r50,0r0,36r-68,0r-20,42r88,0r0,35r-107,0"},"\u00c6":{"d":"3,0r128,-257r227,0r0,53r-124,0r0,48r104,0r0,52r-104,0r0,51r125,0r0,53r-189,0r0,-52r-76,0r-26,52r-65,0xm116,-102r54,0r0,-108","w":376,"k":{"\u00d9":3,"\u00db":3,"\u00da":3,"\u00d2":6,"\u00d4":6,"\u00d3":6,"\u00ff":3,"\u0153":5,"\u0152":6,"\u00d5":6,"\u00f8":5,"\u00e6":5,"\u00d8":6,"\u00fc":6,"\u00fb":6,"\u00f9":6,"\u00fa":6,"\u00f5":5,"\u00f6":5,"\u00f4":5,"\u00f2":5,"\u00f3":5,"\u00eb":5,"\u00ea":5,"\u00e8":5,"\u00e9":5,"\u00e7":5,"\u00e5":5,"\u00e3":5,"\u00e4":5,"\u00e2":5,"\u00e0":5,"\u00e1":5,"\u00dc":3,"\u00d6":6,"\u00c7":6,"y":3,"w":4,"v":4,"u":6,"t":9,"q":5,"o":5,"g":5,"e":5,"d":5,"c":5,"a":5,"X":3,"U":3,"S":4,"O":6,"J":3,"G":6,"C":6,"\u00fd":3,"\u0160":4}},"\u00d8":{"d":"50,18r-25,-14r17,-27v-34,-24,-27,-85,-27,-141v0,-88,99,-117,170,-83r16,-25r23,15r-16,26v32,26,26,82,26,138v-1,89,-96,115,-168,85xm82,-85r71,-114v-27,-19,-74,-9,-73,33v1,29,-2,54,2,81xm98,-56v29,16,73,5,72,-35v-1,-26,3,-56,-3,-78","w":249,"k":{"\u00c6":14,"Y":11,"X":11,"W":2,"V":4,"T":3,"A":7,".":8,",":8}},"\u221e":{"w":180},"\u00b1":{"d":"87,-60r0,-69r-82,0r0,-36r82,0r0,-70r36,0r0,70r81,0r0,36r-81,0r0,69r-36,0xm5,0r0,-36r199,0r0,36r-199,0"},"\u2264":{"d":"182,-59r-169,-74r0,-28r168,-74r16,32r-130,56r131,56xm5,0r0,-36r199,0r0,36r-199,0"},"\u2265":{"d":"28,-59r-17,-32r132,-56r-131,-56r16,-32r168,74r0,28xm5,0r0,-36r199,0r0,36r-199,0"},"\u00a5":{"d":"84,0r0,-90r-68,0r0,-35r60,0r-76,-132r67,0r51,94r50,-94r65,0r-77,132r60,0r0,35r-68,0r0,90r-64,0","w":232},"\u00b5":{"w":180},"\u2202":{"d":"193,-74v0,104,-175,107,-180,2v-3,-68,20,-112,77,-114r-50,-71r65,-5r75,109v14,18,14,47,13,79xm103,-41v35,1,31,-37,30,-71v0,-18,-12,-31,-30,-31v-34,-2,-31,38,-30,72v0,18,10,30,30,30","w":206},"\u2211":{"w":180},"\u220f":{"w":180},"\u03c0":{"d":"16,0r0,-257r264,0r0,257r-264,0","w":295},"\u222b":{"w":180},"\u00aa":{"d":"98,-149v-24,30,-80,24,-80,-17v0,-40,43,-43,76,-42v1,-15,-1,-25,-17,-25v-14,0,-18,7,-17,19r-37,0v-3,-33,25,-46,58,-47v27,0,54,13,54,44v0,26,-2,63,3,83r-39,0xm75,-160v11,0,22,-10,19,-27v-16,0,-34,-2,-34,15v0,8,5,12,15,12xm26,-77r0,-35r109,0r0,35r-109,0","w":157},"\u00ba":{"d":"79,-131v-41,0,-60,-26,-60,-79v0,-37,29,-54,60,-54v41,0,60,28,60,81v0,37,-30,52,-60,52xm79,-161v24,0,17,-29,18,-51v0,-12,-5,-21,-17,-21v-24,-1,-17,30,-18,52v0,12,4,20,17,20xm26,-77r0,-35r109,0r0,35r-109,0","w":158},"\u2126":{"w":180},"\u00e6":{"d":"301,-24v-40,40,-126,40,-160,-5v-19,31,-50,33,-68,33v-36,0,-63,-19,-63,-55v0,-57,60,-65,118,-62v2,-24,-4,-38,-29,-38v-21,0,-29,9,-28,24r-53,0v-7,-69,97,-81,145,-50v53,-35,142,-13,141,61r0,36r-116,0v-5,51,64,44,89,22xm96,-39v26,0,34,-16,32,-41v-26,0,-58,-4,-58,21v0,12,8,20,26,20xm188,-114r59,0v2,-23,-11,-35,-28,-35v-18,0,-33,11,-31,35","w":318},"\u00f8":{"d":"43,18r-23,-12r16,-24v-24,-17,-24,-54,-23,-95v1,-73,79,-95,137,-70r15,-21r22,12r-15,23v23,18,23,54,22,94v-3,72,-76,92,-136,71xm74,-72r48,-70v-19,-13,-51,-4,-49,25v1,16,-1,30,1,45xm87,-45v20,10,49,1,47,-26v0,-15,1,-28,-1,-43","w":207},"\u00bf":{"d":"134,-119v10,59,-61,63,-61,106v0,16,11,27,28,27v19,1,38,-10,33,-36r53,0v6,59,-39,83,-89,84v-53,0,-83,-27,-83,-72v0,-32,20,-51,42,-67v13,-10,28,-18,24,-42r53,0xm78,-137r0,-61r60,0r0,61r-60,0","w":199},"\u00a1":{"d":"24,58v-3,-66,4,-122,14,-175r35,0v10,53,17,109,14,175r-63,0xm25,-137r0,-61r61,0r0,61r-61,0","w":110},"\u00ac":{"d":"185,-42r0,-63r-180,0r0,-36r216,0r0,99r-36,0","w":245},"\u221a":{"w":180},"\u0192":{"d":"16,66r21,-193r-31,0r4,-38r30,0r5,-42v6,-52,50,-64,98,-52r-5,40v-15,-2,-33,-3,-34,13r-5,41r34,0r-3,38r-34,0r-21,193r-59,0","w":138},"\u2248":{"w":180},"\u2206":{"w":180},"\u00ab":{"d":"88,-19r-80,-75r80,-77r27,25r-44,52r45,52xm185,-19r-80,-75r80,-77r27,25r-44,52r44,52","w":220},"\u00bb":{"d":"36,-19r-28,-24r45,-52r-44,-52r27,-24r80,76xm133,-19r-28,-24r45,-52r-45,-52r28,-24r79,76","w":217,"k":{".":6,",":6}},"\u2026":{"d":"25,0r0,-62r61,0r0,62r-61,0xm112,0r0,-62r61,0r0,62r-61,0xm199,0r0,-62r61,0r0,62r-61,0","w":284,"k":{"\u2019":22,"\u201d":22,"'":22,"\"":22}},"\u00a0":{"w":88},"\u00c0":{"d":"3,0r91,-257r69,0r90,257r-65,0r-16,-48r-92,0r-16,48r-61,0xm96,-98r60,0r-30,-93xm111,-277r-49,-64r58,0r32,64r-41,0","w":255,"k":{"\u2019":29,"\u201d":29,"\u2014":5,"\u2013":5,"\u0152":7,"\u00c7":7,"y":17,"w":17,"v":20,"t":8,"Y":28,"W":22,"V":26,"U":7,"T":29,"S":-1,"O":7,"G":7,"C":7,"?":19,"-":5,"'":29,"\"":29}},"\u00c3":{"d":"3,0r91,-257r69,0r90,257r-65,0r-16,-48r-92,0r-16,48r-61,0xm96,-98r60,0r-30,-93xm79,-273r-28,-6v5,-29,18,-54,46,-54v28,0,71,33,81,-5r27,6v-4,28,-15,54,-44,54v-29,0,-71,-35,-82,5","w":255,"k":{"\u2019":29,"\u201d":29,"\u2014":5,"\u2013":5,"\u0152":7,"\u00c7":7,"y":17,"w":17,"v":20,"t":8,"Y":28,"W":22,"V":26,"U":7,"T":29,"S":-1,"O":7,"G":7,"C":7,"?":19,"-":5,"'":29,"\"":29}},"\u00d5":{"d":"234,-93v1,130,-220,131,-219,3r0,-74v0,-65,54,-97,109,-97v57,0,110,31,110,97r0,71xm125,-49v23,0,45,-13,45,-42r0,-76v0,-27,-22,-41,-46,-41v-23,0,-44,12,-44,42v0,53,-11,117,45,117xm76,-273r-28,-6v5,-29,18,-54,46,-54v28,0,72,31,81,-6r27,6v-4,28,-15,54,-44,54v-29,0,-71,-33,-82,6","w":249,"k":{"\u00c6":14,"Y":11,"X":11,"W":2,"V":4,"T":3,"A":7,".":8,",":8}},"\u0152":{"d":"170,-9v-66,32,-158,4,-155,-81r0,-74v-2,-85,87,-117,155,-84r0,-9r189,0r0,53r-125,0r0,48r105,0r0,52r-105,0r0,51r125,0r0,53r-189,0r0,-9xm125,-49v23,0,45,-13,45,-42r0,-76v0,-27,-22,-41,-46,-41v-23,0,-44,12,-44,42v0,53,-11,117,45,117","w":377,"k":{"\u00d9":3,"\u00db":3,"\u00da":3,"\u00d2":6,"\u00d4":6,"\u00d3":6,"\u00ff":3,"\u0153":5,"\u0152":6,"\u00d5":6,"\u00f8":5,"\u00e6":5,"\u00d8":6,"\u00fc":6,"\u00fb":6,"\u00f9":6,"\u00fa":6,"\u00f5":5,"\u00f6":5,"\u00f4":5,"\u00f2":5,"\u00f3":5,"\u00eb":5,"\u00ea":5,"\u00e8":5,"\u00e9":5,"\u00e7":5,"\u00e5":5,"\u00e3":5,"\u00e4":5,"\u00e2":5,"\u00e0":5,"\u00e1":5,"\u00dc":3,"\u00d6":6,"\u00c7":6,"y":3,"w":4,"v":4,"u":6,"t":9,"q":5,"o":5,"g":5,"e":5,"d":5,"c":5,"a":5,"X":3,"U":3,"S":4,"O":6,"J":3,"G":6,"C":6,"\u00fd":3,"\u0160":4}},"\u0153":{"d":"163,-14v-53,37,-149,21,-150,-58r0,-41v0,-80,98,-99,152,-61v52,-39,146,-18,145,58r0,36r-115,0v-5,51,64,44,89,22r23,33v-34,36,-103,40,-144,11xm104,-41v35,0,31,-42,30,-77v0,-18,-13,-30,-31,-30v-35,0,-31,43,-30,78v0,18,12,29,31,29xm195,-114r59,0v2,-24,-12,-35,-29,-35v-18,0,-32,11,-30,35","w":324},"\u2013":{"d":"10,-92r0,-37r187,0r0,37r-187,0","w":207,"k":{"\u00c1":5,"\u00c2":5,"\u0178":12,"\u2014":19,"\u2013":19,"\u00c3":5,"\u00c0":5,"\u00c5":5,"\u00c4":5,"\\":9,"Y":12,"W":7,"V":8,"A":5,"9":-10,"8":-10,"6":-13,"5":-7,"2":6,"1":11,"\/":9,"-":19,"\u00dd":12}},"\u2014":{"d":"10,-92r0,-37r318,0r0,37r-318,0","w":338,"k":{"\u00c1":5,"\u00c2":5,"\u0178":12,"\u2014":19,"\u2013":19,"\u00c3":5,"\u00c0":5,"\u00c5":5,"\u00c4":5,"\\":9,"Y":12,"W":7,"V":8,"A":5,"9":-10,"8":-10,"6":-13,"5":-7,"2":6,"1":11,"\/":9,"-":19,"\u00dd":12}},"\u201c":{"d":"22,-148r0,-58r24,-54r29,0r-12,51r20,0r0,61r-61,0xm103,-148r0,-58r24,-54r28,0r-12,51r21,0r0,61r-61,0","w":186,"k":{"\u00c1":29,"\u00c2":29,"\u00c3":29,"\u00c0":29,"\u00c6":40,"\u00c5":29,"\u00c4":29,"A":29,".":24,",":24}},"\u201d":{"d":"32,-148r12,-51r-21,0r0,-61r61,0r0,58r-24,54r-28,0xm112,-148r12,-51r-20,0r0,-61r60,0r0,58r-23,54r-29,0","w":186,"k":{"\u00c1":29,"\u00c2":29,"\u0153":17,"\u00c3":29,"\u00c0":29,"\u2026":17,"\u00f8":17,"\u00c6":42,"\u00f5":17,"\u00f6":17,"\u00f4":17,"\u00f2":17,"\u00f3":17,"\u00eb":17,"\u00ea":17,"\u00e8":17,"\u00e9":17,"\u00e7":17,"\u00c5":29,"\u00c4":29,"s":21,"q":17,"o":17,"g":17,"e":17,"d":17,"c":17,"A":29,".":30,",":30,"\u0161":21}},"\u2018":{"d":"22,-148r0,-58r24,-54r29,0r-12,51r20,0r0,61r-61,0","w":105,"k":{"\u00c1":29,"\u00c2":29,"\u00c3":29,"\u00c0":29,"\u00c6":40,"\u00c5":29,"\u00c4":29,"A":29,".":24,",":24}},"\u2019":{"d":"32,-148r12,-51r-21,0r0,-61r61,0r0,58r-24,54r-28,0","w":105,"k":{"\u00c1":29,"\u00c2":29,"\u0153":17,"\u00c3":29,"\u00c0":29,"\u2026":17,"\u00f8":17,"\u00c6":42,"\u00f5":17,"\u00f6":17,"\u00f4":17,"\u00f2":17,"\u00f3":17,"\u00eb":17,"\u00ea":17,"\u00e8":17,"\u00e9":17,"\u00e7":17,"\u00c5":29,"\u00c4":29,"s":21,"q":17,"o":17,"g":17,"e":17,"d":17,"c":17,"A":29,".":30,",":30,"\u0161":21}},"\u00f7":{"d":"78,-18r0,-51r53,0r0,51r-53,0xm8,-96r0,-36r194,0r0,36r-194,0xm78,-159r0,-52r53,0r0,52r-53,0"},"\u25ca":{"w":180},"\u00ff":{"d":"124,20v-18,47,-52,53,-101,47r0,-46v26,6,46,-1,49,-24r-69,-186r64,0r38,119r38,-119r55,0xm40,-212r0,-54r51,0r0,54r-51,0xm120,-212r0,-54r51,0r0,54r-51,0","w":199,"k":{"t":-4,".":19,",":19}},"\u0178":{"d":"84,0r0,-102r-84,-155r67,0r51,101r50,-101r65,0r-85,156r0,101r-64,0xm54,-276r0,-55r51,0r0,55r-51,0xm134,-276r0,-55r51,0r0,55r-51,0","w":232,"k":{"\u2014":12,"\u2013":12,"\u0153":26,"\u0152":8,"\u2026":30,"\u00e6":26,"\u00c6":41,"\u00e7":26,"\u00c7":8,"z":13,"y":10,"x":9,"w":9,"v":12,"u":13,"t":11,"s":17,"r":15,"q":26,"p":15,"o":26,"n":15,"m":15,"g":26,"e":26,"d":26,"c":26,"a":26,"T":-5,"S":8,"O":8,"J":31,"G":8,"C":8,"A":28,";":9,":":9,".":29,"-":12,",":29}},"\u2044":{"d":"-22,13r163,-275r40,0r-163,275r-40,0","w":160,"k":{"1":-8}},"\u20ac":{"d":"150,4v-55,0,-100,-27,-102,-89r-31,0r0,-32r31,0r0,-24r-31,0r0,-31v9,-2,25,3,31,-2v1,-113,202,-119,204,-2r0,11r-60,0v5,-52,-78,-61,-80,-9r0,2r64,0r0,31r-64,0r0,24r64,0r0,32v-20,2,-48,-4,-64,2v1,22,14,35,38,35v22,0,45,-14,42,-45r60,0v6,69,-48,97,-102,97","w":267},"\u2039":{"d":"88,-19r-80,-75r80,-77r27,25r-44,52r45,52","w":123},"\u203a":{"d":"36,-19r-28,-24r45,-52r-44,-52r27,-24r80,76","w":123,"k":{".":6,",":6}},"\u2021":{"d":"83,57r0,-67r-73,0r0,-35r73,0r0,-114r-73,0r0,-36r73,0r0,-63r39,0r0,63r73,0r0,36r-73,0r0,114r73,0r0,35r-73,0r0,67r-39,0","w":205},"\u00b7":{"d":"21,-117r0,-62r60,0r0,62r-60,0","w":101},"\u201a":{"d":"32,50r12,-50r-21,0r0,-62r61,0r0,58r-24,54r-28,0","w":106,"k":{"\u2019":22,"\u201d":22,"'":22,"\"":22}},"\u201e":{"d":"32,50r12,-50r-21,0r0,-62r61,0r0,58r-24,54r-28,0xm112,50r12,-50r-20,0r0,-62r60,0r0,58r-23,54r-29,0","w":186,"k":{"\u2019":22,"\u201d":22,"'":22,"\"":22}},"\u2030":{"d":"129,-161v-2,61,-111,64,-112,0r0,-53v1,-65,111,-63,112,1r0,52xm72,-146v30,-1,17,-44,17,-70v0,-8,-6,-15,-17,-15v-29,2,-16,44,-16,70v0,8,4,15,16,15xm290,-42v-2,62,-111,63,-112,0r0,-53v1,-64,111,-65,112,0r0,53xm234,-27v30,-1,17,-44,17,-70v0,-8,-6,-15,-17,-15v-30,1,-17,44,-17,70v0,9,5,15,17,15xm424,-42v-2,62,-111,63,-112,0r0,-53v1,-64,111,-65,112,0r0,53xm368,-27v30,-2,16,-44,16,-70v0,-8,-4,-15,-16,-15v-30,1,-17,44,-17,70v0,9,5,15,17,15xm51,3r171,-262r34,0r-171,262r-34,0","w":440},"\u00c2":{"d":"3,0r91,-257r69,0r90,257r-65,0r-16,-48r-92,0r-16,48r-61,0xm96,-98r60,0r-30,-93xm65,-279r41,-66r46,0r39,66r-44,0r-18,-34r-21,34r-43,0","w":255,"k":{"\u2019":29,"\u201d":29,"\u2014":5,"\u2013":5,"\u0152":7,"\u00c7":7,"y":17,"w":17,"v":20,"t":8,"Y":28,"W":22,"V":26,"U":7,"T":29,"S":-1,"O":7,"G":7,"C":7,"?":19,"-":5,"'":29,"\"":29}},"\u00ca":{"d":"22,0r0,-257r189,0r0,53r-125,0r0,48r105,0r0,52r-105,0r0,51r126,0r0,53r-190,0xm57,-276r41,-67r47,0r39,67r-45,0r-18,-35r-20,35r-44,0","w":229,"k":{"\u0153":5,"\u0152":6,"\u00e6":5,"\u00e7":5,"\u00c7":6,"y":3,"w":4,"v":4,"u":6,"t":9,"q":5,"o":5,"g":5,"e":5,"d":5,"c":5,"a":5,"X":3,"U":3,"S":4,"O":6,"J":3,"G":6,"C":6}},"\u00c1":{"d":"3,0r91,-257r69,0r90,257r-65,0r-16,-48r-92,0r-16,48r-61,0xm96,-98r60,0r-30,-93xm105,-276r32,-65r59,0r-50,65r-41,0","w":255,"k":{"\u2019":29,"\u201d":29,"\u2014":5,"\u2013":5,"\u0152":7,"\u00c7":7,"y":17,"w":17,"v":20,"t":8,"Y":28,"W":22,"V":26,"U":7,"T":29,"S":-1,"O":7,"G":7,"C":7,"?":19,"-":5,"'":29,"\"":29}},"\u00cb":{"d":"22,0r0,-257r189,0r0,53r-125,0r0,48r105,0r0,52r-105,0r0,51r126,0r0,53r-190,0xm54,-276r0,-54r51,0r0,54r-51,0xm134,-276r0,-54r51,0r0,54r-51,0","w":229,"k":{"\u0153":5,"\u0152":6,"\u00e6":5,"\u00e7":5,"\u00c7":6,"y":3,"w":4,"v":4,"u":6,"t":9,"q":5,"o":5,"g":5,"e":5,"d":5,"c":5,"a":5,"X":3,"U":3,"S":4,"O":6,"J":3,"G":6,"C":6}},"\u00c8":{"d":"22,0r0,-257r189,0r0,53r-125,0r0,48r105,0r0,52r-105,0r0,51r126,0r0,53r-190,0xm106,-276r-49,-65r59,0r31,65r-41,0","w":229,"k":{"\u0153":5,"\u0152":6,"\u00e6":5,"\u00e7":5,"\u00c7":6,"y":3,"w":4,"v":4,"u":6,"t":9,"q":5,"o":5,"g":5,"e":5,"d":5,"c":5,"a":5,"X":3,"U":3,"S":4,"O":6,"J":3,"G":6,"C":6}},"\u00cd":{"d":"22,0r0,-257r64,0r0,257r-64,0xm33,-273r31,-64r59,0r-50,64r-40,0","w":108},"\u00ce":{"d":"22,0r0,-257r64,0r0,257r-64,0xm-8,-272r41,-67r46,0r39,67r-44,0r-19,-35r-20,35r-43,0","w":108},"\u00cf":{"d":"22,0r0,-257r64,0r0,257r-64,0xm-11,-277r0,-55r51,0r0,55r-51,0xm69,-277r0,-55r51,0r0,55r-51,0","w":108},"\u00cc":{"d":"22,0r0,-257r64,0r0,257r-64,0xm45,-273r-49,-64r58,0r32,64r-41,0","w":108},"\u00d3":{"d":"234,-93v1,130,-220,131,-219,3r0,-74v0,-65,54,-97,109,-97v57,0,110,31,110,97r0,71xm125,-49v23,0,45,-13,45,-42r0,-76v0,-27,-22,-41,-46,-41v-23,0,-44,12,-44,42v0,53,-11,117,45,117xm102,-278r31,-64r59,0r-49,64r-41,0","w":249,"k":{"\u00c6":14,"Y":11,"X":11,"W":2,"V":4,"T":3,"A":7,".":8,",":8}},"\u00d4":{"d":"234,-93v1,130,-220,131,-219,3r0,-74v0,-65,54,-97,109,-97v57,0,110,31,110,97r0,71xm125,-49v23,0,45,-13,45,-42r0,-76v0,-27,-22,-41,-46,-41v-23,0,-44,12,-44,42v0,53,-11,117,45,117xm62,-276r41,-67r46,0r39,67r-44,0r-19,-35r-20,35r-43,0","w":249,"k":{"\u00c6":14,"Y":11,"X":11,"W":2,"V":4,"T":3,"A":7,".":8,",":8}},"\u00d2":{"d":"234,-93v1,130,-220,131,-219,3r0,-74v0,-65,54,-97,109,-97v57,0,110,31,110,97r0,71xm125,-49v23,0,45,-13,45,-42r0,-76v0,-27,-22,-41,-46,-41v-23,0,-44,12,-44,42v0,53,-11,117,45,117xm111,-278r-50,-64r59,0r32,64r-41,0","w":249,"k":{"\u00c6":14,"Y":11,"X":11,"W":2,"V":4,"T":3,"A":7,".":8,",":8}},"\u00da":{"d":"127,4v-65,0,-106,-31,-106,-95r0,-166r64,0r0,162v0,29,15,46,44,46v27,0,42,-15,42,-46r0,-162r63,0r0,163v0,64,-47,98,-107,98xm108,-276r31,-65r59,0r-50,65r-40,0","w":255,"k":{"\u00c6":14,"A":7}},"\u00db":{"d":"127,4v-65,0,-106,-31,-106,-95r0,-166r64,0r0,162v0,29,15,46,44,46v27,0,42,-15,42,-46r0,-162r63,0r0,163v0,64,-47,98,-107,98xm66,-275r41,-67r47,0r38,67r-44,0r-18,-35r-20,35r-44,0","w":255,"k":{"\u00c6":14,"A":7}},"\u00d9":{"d":"127,4v-65,0,-106,-31,-106,-95r0,-166r64,0r0,162v0,29,15,46,44,46v27,0,42,-15,42,-46r0,-162r63,0r0,163v0,64,-47,98,-107,98xm111,-275r-50,-65r59,0r32,65r-41,0","w":255,"k":{"\u00c6":14,"A":7}},"\u0131":{"d":"20,0r0,-189r60,0r0,189r-60,0","w":99},"\u02c6":{"d":"10,-211r41,-67r47,0r38,67r-44,0r-19,-35r-19,35r-44,0","w":146},"\u02dc":{"d":"42,-210r-27,-5v5,-29,17,-54,45,-54v28,0,72,31,82,-6r26,6v-4,28,-14,54,-43,54v-29,0,-71,-33,-83,5","w":182},"\u00af":{"d":"13,-217r0,-44r137,0r0,44r-137,0","w":163},"\u02d8":{"d":"145,-277v-3,90,-134,84,-135,0r36,0v5,38,59,44,63,0r36,0","w":155},"\u02d9":{"d":"21,-212r0,-54r51,0r0,54r-51,0","w":92},"\u02da":{"d":"59,-210v-24,0,-42,-15,-42,-38v0,-23,19,-41,42,-41v24,0,43,15,43,39v0,23,-20,40,-43,40xm59,-231v10,0,19,-8,19,-18v0,-11,-7,-19,-19,-19v-11,0,-18,8,-18,19v0,10,8,18,18,18","w":119},"\u00b8":{"d":"116,40v-1,34,-57,37,-92,27r0,-23v17,4,48,13,52,-3v-2,-12,-20,-7,-32,-9r9,-36r24,0r-5,20v18,0,44,2,44,24","w":134},"\u02dd":{"d":"17,-211r31,-64r55,0r-46,64r-40,0xm90,-211r31,-64r55,0r-46,64r-40,0","w":191},"\u02db":{"d":"106,67v-29,9,-76,5,-75,-23v1,-27,43,-58,77,-44v-24,10,-36,22,-36,36v0,17,17,15,34,12r0,19","w":144},"\u02c7":{"d":"45,-215r-39,-67r44,0r19,35r20,-35r43,0r-41,67r-46,0","w":138},"\u00a4":{"d":"150,4v-55,0,-100,-27,-102,-89r-31,0r0,-32r31,0r0,-24r-31,0r0,-31v9,-2,25,3,31,-2v1,-113,202,-119,204,-2r0,11r-60,0v5,-52,-78,-61,-80,-9r0,2r64,0r0,31r-64,0r0,24r64,0r0,32v-20,2,-48,-4,-64,2v1,22,14,35,38,35v22,0,45,-14,42,-45r60,0v6,69,-48,97,-102,97","w":267},"\u00ad":{"d":"12,-81r0,-48r107,0r0,48r-107,0","w":130},"\u2080":{"d":"63,2v-23,0,-52,-10,-52,-41r0,-50v2,-57,102,-56,104,1r0,49v0,30,-29,41,-52,41xm63,-29v23,0,8,-40,12,-61v0,-5,-5,-9,-12,-9v-23,2,-8,40,-12,60v0,5,4,10,12,10","w":126},"\u2081":{"d":"16,0r0,-26r22,0r0,-70r-22,1r-2,-26v20,-3,36,-10,61,-9r0,104r20,0r0,26r-79,0","w":107},"\u2082":{"d":"16,0r0,-21v15,-21,49,-44,53,-70v0,-5,-1,-10,-10,-10v-9,0,-10,9,-10,18r-37,0v-3,-33,19,-47,50,-48v31,0,46,18,46,41v-1,25,-29,42,-42,59r43,0r0,31r-93,0","w":120},"\u2083":{"d":"58,2v-32,0,-48,-13,-46,-43r37,0v-1,10,2,14,13,14v6,0,10,-5,10,-13v0,-12,-13,-11,-23,-11r0,-25v21,7,31,-23,11,-23v-10,0,-11,4,-11,12r-36,0v-1,-27,16,-40,47,-43v47,-4,65,48,29,64r0,2v14,3,23,14,23,28v0,30,-32,38,-54,38","w":122},"\u2084":{"d":"67,0r0,-23r-56,0r0,-28r47,-77r43,0r-50,75r16,0r0,-11r37,-27r0,38r12,0r0,30r-12,0r0,23r-37,0","w":124},"\u2085":{"d":"111,-36v2,48,-98,51,-99,5r0,-9r37,0v0,8,2,12,12,12v12,0,11,-9,11,-20v0,-11,-17,-13,-22,-5r-34,-4r3,-71r83,0r0,31r-53,0r-1,21v29,-17,71,-5,63,40","w":120},"\u2086":{"d":"113,-35v-1,50,-103,49,-102,-2r0,-53v0,-26,25,-40,52,-40v32,1,51,13,48,43r-37,0v1,-9,-3,-13,-11,-13v-14,-1,-12,14,-12,27v27,-18,73,-5,62,38xm63,-28v13,0,13,-8,12,-20v-1,-15,-24,-14,-24,3v-1,10,2,17,12,17","w":123},"\u2087":{"d":"27,0v0,-32,20,-74,42,-97r-56,0r0,-31r97,0r0,26v-20,18,-43,58,-43,102r-40,0","w":121},"\u2088":{"d":"62,2v-45,9,-69,-45,-36,-66v-30,-21,-6,-73,35,-66v41,-6,67,41,37,66v32,20,11,73,-36,66xm62,-26v11,0,12,-5,12,-15v0,-13,-23,-13,-24,-2v-1,11,1,17,12,17xm62,-77v11,0,12,-5,12,-15v0,-13,-23,-13,-24,-2v-1,11,1,17,12,17","w":123},"\u2089":{"d":"61,3v-32,-1,-50,-14,-48,-43r37,0v-1,8,4,13,11,13v15,1,12,-16,12,-30v-24,22,-74,8,-62,-36v0,-25,25,-37,52,-37v26,0,50,13,50,39r0,54v0,26,-25,40,-52,40xm49,-92v-6,21,22,31,24,8v1,-10,-1,-17,-11,-17v-8,0,-13,4,-13,9","w":123},"\u2070":{"d":"63,-126v-23,0,-52,-10,-52,-41r0,-50v2,-58,102,-58,104,1r0,49v0,30,-29,41,-52,41xm63,-157v23,0,8,-40,12,-62v0,-5,-5,-9,-12,-9v-23,2,-8,40,-12,61v0,5,4,10,12,10","w":126},"\u00b9":{"d":"16,-129r0,-26r22,0r0,-70r-22,1r-2,-26v20,-3,37,-9,61,-8r0,103r20,0r0,26r-79,0","w":107},"\u00b2":{"d":"16,-129r0,-21v15,-21,48,-43,53,-69v0,-5,-1,-10,-10,-10v-9,0,-10,8,-10,17r-37,0v-3,-32,19,-46,50,-47v31,0,46,17,46,40v0,25,-29,42,-42,60r43,0r0,30r-93,0","w":120},"\u00b3":{"d":"58,-126v-32,0,-47,-14,-46,-43r37,0v-1,9,3,13,13,13v6,0,10,-4,10,-12v0,-12,-13,-11,-23,-11r0,-26v21,7,31,-23,11,-23v-11,0,-11,5,-11,13r-36,0v-2,-28,15,-42,47,-44v48,-3,63,49,29,66v14,3,23,14,23,28v0,30,-32,39,-54,39","w":122},"\u2074":{"d":"67,-129r0,-23r-56,0r0,-28r47,-77r43,0r-50,75r16,0r0,-11r37,-27r0,38r12,0r0,30r-12,0r0,23r-37,0","w":124},"\u2075":{"d":"111,-164v0,48,-99,51,-99,4r0,-9r37,0v0,8,2,12,12,12v11,0,11,-8,11,-19v0,-11,-17,-15,-22,-5r-34,-4r3,-72r83,0r0,31r-53,0r-1,22v29,-18,63,-6,63,40","w":120},"\u2076":{"d":"62,-126v-26,0,-51,-14,-51,-40r0,-53v0,-26,25,-40,52,-40v32,1,50,14,48,43r-37,0v1,-9,-3,-13,-11,-13v-15,-1,-12,15,-12,28v26,-19,73,-6,62,37v0,25,-25,38,-51,38xm63,-156v12,-1,13,-9,12,-20v-2,-14,-24,-14,-24,2v-1,11,2,18,12,18","w":123},"\u2077":{"d":"27,-129v0,-32,20,-74,42,-97r-56,0r0,-31r97,0r0,27v-20,18,-43,57,-43,101r-40,0","w":121},"\u2078":{"d":"62,-126v-45,9,-68,-45,-36,-67v-30,-21,-6,-72,35,-66v41,-5,68,42,37,66v32,20,10,73,-36,67xm62,-154v11,0,12,-6,12,-16v0,-14,-24,-12,-24,-1v-1,11,1,17,12,17xm62,-205v11,0,12,-6,12,-16v0,-14,-24,-12,-24,-1v-1,11,1,17,12,17","w":123},"\u2079":{"d":"61,-126v-32,-1,-50,-14,-48,-43r37,0v-1,9,3,13,11,13v15,1,12,-15,12,-29v-24,22,-74,7,-62,-36v0,-25,25,-38,52,-38v26,0,50,14,50,40r0,53v0,26,-25,40,-52,40xm49,-220v-6,21,22,31,24,8v1,-10,-1,-18,-11,-18v-8,0,-13,5,-13,10","w":123},"\u00bc":{"d":"16,-129r0,-26r22,0r0,-70r-22,1r-2,-26v20,-3,37,-9,61,-8r0,103r20,0r0,26r-79,0xm49,13r163,-275r39,0r-163,275r-39,0xm240,0r0,-23r-56,0r0,-28r46,-77r44,0r-50,75r16,0r0,-11r37,-27r0,38r11,0r0,30r-11,0r0,23r-37,0","w":297},"\u00bd":{"d":"16,-129r0,-26r22,0r0,-70r-22,1r-2,-26v20,-3,37,-9,61,-8r0,103r20,0r0,26r-79,0xm49,13r163,-275r39,0r-163,275r-39,0xm203,0r0,-21v15,-21,49,-44,54,-70v0,-5,-2,-10,-11,-10v-9,0,-10,9,-10,18r-37,0v-3,-33,19,-47,50,-48v31,0,46,18,46,41v-1,25,-29,42,-42,59r43,0r0,31r-93,0","w":308},"\u00be":{"d":"54,13r163,-275r40,0r-163,275r-40,0xm245,0r0,-23r-56,0r0,-28r47,-77r43,0r-50,75r16,0r0,-11r37,-27r0,38r12,0r0,30r-12,0r0,23r-37,0xm58,-126v-32,0,-47,-14,-46,-43r37,0v-1,9,3,13,13,13v6,0,10,-4,10,-12v0,-12,-13,-11,-23,-11r0,-26v21,7,31,-23,11,-23v-11,0,-11,5,-11,13r-36,0v-2,-28,15,-42,47,-44v48,-3,63,49,29,66v14,3,23,14,23,28v0,30,-32,39,-54,39","w":302},"\u2153":{"d":"16,-129r0,-26r22,0r0,-70r-22,1r-2,-26v20,-3,37,-9,61,-8r0,103r20,0r0,26r-79,0xm49,13r163,-275r39,0r-163,275r-39,0xm246,2v-32,0,-49,-13,-47,-43r37,0v-1,10,2,14,13,14v6,0,10,-5,10,-13v0,-11,-12,-11,-22,-11r0,-25v21,7,29,-23,10,-23v-10,0,-10,5,-10,12r-37,0v-1,-27,17,-40,48,-43v47,-4,63,49,28,64r0,2v14,3,23,14,23,28v0,30,-31,38,-53,38","w":309},"\u2155":{"d":"16,-129r0,-26r22,0r0,-70r-22,1r-2,-26v20,-3,37,-9,61,-8r0,103r20,0r0,26r-79,0xm49,13r163,-275r39,0r-163,275r-39,0xm298,-36v2,48,-98,51,-99,5r0,-9r37,0v0,8,2,12,12,12v12,0,12,-9,12,-20v0,-11,-18,-13,-23,-5r-34,-4r3,-71r83,0r0,31r-53,0r-1,21v29,-17,71,-5,63,40","w":308},"\u2159":{"d":"16,-129r0,-26r22,0r0,-70r-22,1r-2,-26v20,-3,37,-9,61,-8r0,103r20,0r0,26r-79,0xm49,13r163,-275r39,0r-163,275r-39,0xm301,-35v-1,50,-104,50,-103,-2r0,-53v0,-26,26,-40,53,-40v32,1,50,13,47,43r-37,0v1,-9,-3,-13,-11,-13v-14,-1,-11,14,-11,27v26,-18,73,-5,62,38xm250,-28v13,0,13,-8,12,-20v-1,-15,-23,-14,-23,3v-1,10,1,17,11,17","w":311},"\u2154":{"d":"63,13r163,-275r40,0r-163,275r-40,0xm260,2v-32,0,-49,-13,-47,-43r37,0v-1,10,2,14,13,14v6,0,10,-5,10,-13v0,-12,-12,-11,-22,-11r0,-25v22,7,30,-23,10,-23v-10,0,-10,5,-10,12r-37,0v-1,-27,17,-40,48,-43v48,-4,64,49,28,64r0,2v14,3,23,14,23,28v0,30,-31,38,-53,38xm16,-129r0,-21v15,-21,48,-43,53,-69v0,-5,-1,-10,-10,-10v-9,0,-10,8,-10,17r-37,0v-3,-32,19,-46,50,-47v31,0,46,17,46,40v0,25,-29,42,-42,60r43,0r0,30r-93,0","w":323},"\u2156":{"d":"63,13r163,-275r40,0r-163,275r-40,0xm16,-129r0,-21v15,-21,48,-43,53,-69v0,-5,-1,-10,-10,-10v-9,0,-10,8,-10,17r-37,0v-3,-32,19,-46,50,-47v31,0,46,17,46,40v0,25,-29,42,-42,60r43,0r0,30r-93,0xm312,-36v2,48,-98,51,-98,5r0,-9r36,0v0,8,2,12,12,12v12,0,12,-9,12,-20v0,-11,-18,-13,-23,-5r-34,-4r4,-71r82,0r0,31r-52,0r-1,21v29,-17,69,-5,62,40","w":322},"\u2157":{"d":"54,13r163,-275r40,0r-163,275r-40,0xm58,-126v-32,0,-47,-14,-46,-43r37,0v-1,9,3,13,13,13v6,0,10,-4,10,-12v0,-12,-13,-11,-23,-11r0,-26v21,7,31,-23,11,-23v-11,0,-11,5,-11,13r-36,0v-2,-28,15,-42,47,-44v48,-3,63,49,29,66v14,3,23,14,23,28v0,30,-32,39,-54,39xm303,-36v2,48,-98,51,-98,5r0,-9r36,0v0,8,2,12,12,12v12,0,12,-9,12,-20v0,-11,-18,-13,-23,-5r-34,-4r4,-71r82,0r0,31r-52,0r-1,21v29,-17,69,-5,62,40","w":313},"\u2158":{"d":"61,13r163,-275r40,0r-163,275r-40,0xm310,-36v2,48,-98,51,-98,5r0,-9r36,0v-1,8,3,11,13,12v12,0,11,-9,11,-20v1,-11,-18,-13,-23,-5r-33,-4r3,-71r83,0r0,31r-53,0r-1,21v29,-17,69,-5,62,40xm67,-129r0,-23r-56,0r0,-28r47,-77r43,0r-50,75r16,0r0,-11r37,-27r0,38r12,0r0,30r-12,0r0,23r-37,0","w":320},"\u215a":{"d":"54,13r163,-275r40,0r-163,275r-40,0xm111,-164v0,48,-99,51,-99,4r0,-9r37,0v0,8,2,12,12,12v11,0,11,-8,11,-19v0,-11,-17,-15,-22,-5r-34,-4r3,-72r83,0r0,31r-53,0r-1,22v29,-18,63,-6,63,40xm306,-35v-1,50,-103,49,-102,-2r0,-53v0,-26,25,-40,52,-40v32,1,50,13,47,43r-36,0v1,-9,-3,-13,-11,-13v-14,-1,-12,14,-12,27v27,-18,73,-5,62,38xm256,-28v13,0,13,-8,12,-20v-2,-14,-24,-15,-24,3v0,10,2,17,12,17","w":316},"\u215b":{"d":"16,-129r0,-26r22,0r0,-70r-22,1r-2,-26v20,-3,37,-9,61,-8r0,103r20,0r0,26r-79,0xm49,13r163,-275r39,0r-163,275r-39,0xm249,2v-45,9,-69,-45,-36,-66v-30,-21,-6,-73,35,-66v41,-6,67,41,37,66v32,20,11,73,-36,66xm249,-26v11,0,12,-5,12,-15v0,-13,-23,-13,-24,-2v-1,11,1,17,12,17xm249,-77v11,0,12,-5,12,-15v0,-13,-23,-13,-24,-2v-1,11,1,17,12,17","w":310},"\u215c":{"d":"54,13r163,-275r40,0r-163,275r-40,0xm58,-126v-32,0,-47,-14,-46,-43r37,0v-1,9,3,13,13,13v6,0,10,-4,10,-12v0,-12,-13,-11,-23,-11r0,-26v21,7,31,-23,11,-23v-11,0,-11,5,-11,13r-36,0v-2,-28,15,-42,47,-44v48,-3,63,49,29,66v14,3,23,14,23,28v0,30,-32,39,-54,39xm255,2v-45,9,-70,-44,-37,-66v-29,-22,-5,-72,36,-66v41,-6,66,41,37,66v30,20,10,73,-36,66xm254,-26v11,0,12,-5,12,-15v0,-13,-23,-13,-24,-2v-1,11,1,17,12,17xm254,-77v11,0,12,-5,12,-15v0,-13,-23,-13,-24,-2v-1,11,1,17,12,17","w":316},"\u215d":{"d":"54,13r163,-275r40,0r-163,275r-40,0xm111,-164v0,48,-99,51,-99,4r0,-9r37,0v0,8,2,12,12,12v11,0,11,-8,11,-19v0,-11,-17,-15,-22,-5r-34,-4r3,-72r83,0r0,31r-53,0r-1,22v29,-18,63,-6,63,40xm255,2v-45,9,-70,-44,-37,-66v-29,-22,-5,-72,36,-66v41,-6,66,41,37,66v30,20,10,73,-36,66xm254,-26v11,0,12,-5,12,-15v0,-13,-23,-13,-24,-2v-1,11,1,17,12,17xm254,-77v11,0,12,-5,12,-15v0,-13,-23,-13,-24,-2v-1,11,1,17,12,17","w":316},"\u215e":{"d":"38,13r163,-275r39,0r-163,275r-39,0xm238,2v-45,9,-69,-45,-36,-66v-30,-22,-5,-73,36,-66v41,-6,66,43,36,66v32,20,11,73,-36,66xm238,-26v11,0,12,-5,12,-15v0,-13,-23,-13,-24,-2v-1,11,1,17,12,17xm238,-77v11,0,12,-5,12,-15v0,-13,-23,-13,-24,-2v-1,11,1,17,12,17xm27,-129v0,-32,20,-74,42,-97r-56,0r0,-31r97,0r0,27v-20,18,-43,57,-43,101r-40,0","w":299},"\u215f":{"d":"16,-129r0,-26r22,0r0,-70r-22,1r-2,-26v20,-3,37,-9,61,-8r0,103r20,0r0,26r-79,0xm49,13r163,-275r39,0r-163,275r-39,0","w":236}}});
;
/*!
 * The following copyright notice may not be removed under any circumstances.
 * 
 * Copyright:
 * FTF Flama Copyright (c) Feliciano Type Foundry, 2004-2006. All rights reserved.
 * 
 * Description:
 * FTF Flama Copyright (c) Feliciano Type Foundry, 2004-2006. All rights reserved.
 * 
 * Manufacturer:
 * Feliciano Type Foundry,
 * 
 * Designer:
 * M‡rio Feliciano
 */
Cufon.registerFont({"w":215,"face":{"font-family":"Flama Bold","font-weight":700,"font-stretch":"normal","units-per-em":"360","panose-1":"2 0 5 3 4 0 0 2 0 4","ascent":"288","descent":"-72","x-height":"4","bbox":"-7 -279.594 336 70.7054","underline-thickness":"18","underline-position":"-18","stemh":"53","stemv":"59","unicode-range":"U+0020-U+007E"},"glyphs":{" ":{"w":88},"!":{"d":"38,-81v-10,-53,-17,-110,-14,-176r63,0v3,66,-4,123,-14,176r-35,0xm25,0r0,-62r61,0r0,62r-61,0","w":110},"\"":{"d":"32,-151v-5,-34,-10,-68,-8,-108r50,0v2,40,-3,74,-8,108r-34,0xm105,-151v-4,-34,-9,-68,-7,-108r49,0v2,40,-3,74,-8,108r-34,0","w":171,"k":{"s":21,"q":17,"o":17,"g":17,"e":17,"d":17,"c":17,"A":29,".":30,",":30}},"#":{"d":"38,0r10,-62r-41,0r6,-35r40,0r11,-69r-43,0r6,-33r41,0r9,-58r32,0r-8,58r45,0r9,-58r32,0r-9,58r40,0r-5,33r-40,0r-11,69r42,0r-5,35r-42,0r-9,62r-32,0r9,-62r-45,0r-10,62r-32,0xm85,-97r45,0r11,-69r-46,0","w":220},"$":{"d":"89,14r0,-26v-32,-3,-59,-17,-76,-41r37,-33v12,17,31,28,54,28v17,0,34,-5,34,-19v0,-28,-42,-24,-65,-32v-30,-11,-51,-28,-51,-62v0,-37,27,-65,67,-72r0,-26r41,0r0,26v27,3,48,14,63,35r-39,32v-11,-15,-29,-22,-46,-22v-16,0,-28,6,-28,20v0,24,42,22,63,29v33,11,55,27,55,63v0,41,-30,66,-68,72r0,28r-41,0","w":211},"%":{"d":"129,-161v-2,61,-111,64,-112,0r0,-53v1,-65,111,-63,112,1r0,52xm72,-146v30,-1,17,-44,17,-70v0,-8,-6,-15,-17,-15v-29,2,-16,44,-16,70v0,8,4,15,16,15xm290,-42v-2,62,-111,63,-112,0r0,-53v1,-64,111,-65,112,0r0,53xm234,-27v30,-1,17,-44,17,-70v0,-8,-6,-15,-17,-15v-30,1,-17,44,-17,70v0,9,5,15,17,15xm51,3r171,-262r34,0r-171,262r-34,0","w":306},"&":{"d":"188,-22v-50,46,-174,36,-174,-47v0,-35,28,-62,63,-74v-49,-44,-29,-118,64,-118v48,0,79,25,79,60v0,35,-26,56,-55,66r37,41v4,-10,5,-16,9,-33r50,5v-5,27,-13,46,-25,63r53,59r-81,0xm141,-161v29,-5,45,-59,4,-60v-46,2,-21,46,-4,60xm78,-74v0,39,61,46,81,20r-56,-61v-19,9,-25,27,-25,41","w":293},"'":{"d":"32,-151v-5,-34,-10,-68,-8,-108r50,0v2,40,-3,74,-8,108r-34,0","w":98,"k":{"s":21,"q":17,"o":17,"g":17,"e":17,"d":17,"c":17,"A":29,".":30,",":30}},"(":{"d":"83,69v-67,-91,-73,-245,0,-338r28,0v-50,108,-44,229,0,338r-28,0","w":125},")":{"d":"15,69v45,-108,50,-231,0,-338r28,0v73,93,67,247,0,338r-28,0","w":125},"*":{"d":"53,-132r-27,-17r30,-43r-46,-25r17,-26r41,22r0,-46r33,0r0,46r40,-22r17,26r-46,25r31,43r-28,17r-31,-44","w":168},"+":{"d":"87,-14r0,-82r-82,0r0,-36r82,0r0,-82r36,0r0,82r81,0r0,36r-81,0r0,82r-36,0","w":209},",":{"d":"30,50r11,-50r-20,0r0,-62r60,0r0,58r-23,54r-28,0","w":101,"k":{"\\":22,"'":30,"\"":30}},"-":{"d":"12,-81r0,-48r107,0r0,48r-107,0","w":130,"k":{"\\":9,"Y":12,"W":7,"V":8,"A":5,"9":-10,"8":-10,"6":-13,"5":-7,"2":6,"1":11,"\/":9,"-":19}},".":{"d":"21,0r0,-62r60,0r0,62r-60,0","w":101,"k":{"\\":22,"'":30,"\"":30}},"\/":{"d":"-7,40r95,-302r43,0r-94,302r-44,0","w":129,"k":{"\/":17,".":23,"-":15,",":23}},"0":{"d":"112,4v-46,0,-97,-20,-97,-79r0,-105v1,-109,192,-111,193,1r0,103v0,56,-50,80,-96,80xm112,-46v22,0,32,-15,32,-31v0,-50,24,-134,-32,-134v-57,0,-33,85,-33,135v0,16,11,30,33,30","w":222},"1":{"d":"19,0r0,-43r50,0r0,-161r-47,3r-4,-42v37,-5,68,-18,112,-16r0,216r45,0r0,43r-156,0","w":189},"2":{"d":"24,0r-2,-42v48,-46,34,-28,98,-112v14,-18,22,-60,-16,-59v-23,0,-31,15,-29,38r-58,0v-5,-59,33,-86,91,-87v57,0,86,32,86,76v-1,58,-60,96,-90,136r92,0r0,50r-172,0","w":213},"3":{"d":"105,4v-62,-1,-91,-27,-88,-79r59,0v-2,23,10,31,33,31v17,0,29,-12,29,-33v0,-35,-29,-30,-57,-30r0,-45v29,1,55,2,54,-30v0,-21,-15,-29,-29,-29v-23,1,-30,12,-29,31r-58,0v-3,-51,31,-77,89,-81v91,-6,115,101,49,128r0,2v26,7,46,28,46,59v0,56,-53,76,-98,76","k":{"-":-8}},"4":{"d":"123,0r0,-56r-110,0r0,-46r95,-155r69,0r-100,153r46,0r0,-32r60,-38r0,70r27,0r0,48r-27,0r0,56r-60,0","w":220},"5":{"d":"200,-75v9,100,-183,103,-183,16r0,-16r59,0v-2,20,10,29,31,30v24,1,31,-21,31,-51v0,-33,-48,-34,-61,-14r-54,-7r7,-140r155,0r0,52r-106,0r-2,52v56,-36,137,-10,123,78","w":213,"k":{"\\":6,"-":-13}},"6":{"d":"109,4v-50,0,-94,-28,-94,-77r0,-110v0,-50,46,-78,97,-78v59,0,92,26,88,80r-59,0v2,-22,-10,-32,-30,-32v-37,0,-31,35,-31,69v35,-35,131,-22,124,38v10,74,-28,110,-95,110xm111,-44v32,0,35,-23,32,-53v-4,-38,-63,-34,-63,8v0,27,4,45,31,45","w":218,"k":{"-":-13}},"7":{"d":"43,0v1,-76,46,-161,87,-205r-114,0r0,-52r182,0r0,44v-34,34,-90,111,-90,213r-65,0","w":212},"8":{"d":"108,4v-59,0,-94,-23,-94,-84v0,-23,14,-41,32,-50v-21,-10,-28,-31,-28,-59v0,-47,42,-72,90,-72v54,1,91,25,91,87v0,19,-13,36,-28,44v21,10,32,33,32,65v0,44,-43,69,-95,69xm108,-41v24,0,32,-14,32,-40v0,-36,-61,-34,-63,-2v-2,26,8,42,31,42xm109,-151v22,0,31,-13,31,-38v0,-35,-61,-34,-63,-2v-2,26,9,40,32,40","w":217,"k":{"-":-10}},"9":{"d":"106,5v-59,0,-92,-27,-88,-80r60,0v-2,21,10,31,29,31v38,1,32,-35,32,-70v-33,44,-131,22,-125,-37v-10,-74,29,-110,96,-110v50,0,93,28,93,77r0,110v0,50,-46,79,-97,79xm76,-161v4,40,61,35,63,-7v1,-27,-4,-46,-31,-46v-32,0,-35,23,-32,53","w":217,"k":{"-":-13}},":":{"d":"21,0r0,-62r60,0r0,62r-60,0xm21,-125r0,-62r60,0r0,62r-60,0","w":101,"k":{"\\":12}},";":{"d":"30,50r11,-50r-20,0r0,-62r60,0r0,58r-23,54r-28,0xm21,-125r0,-62r60,0r0,62r-60,0","w":101},"<":{"d":"180,-23r-167,-77r0,-29r166,-78r16,33r-128,59r129,60","w":209},"=":{"d":"5,-56r0,-35r199,0r0,35r-199,0xm5,-133r0,-36r199,0r0,36r-199,0","w":209},">":{"d":"30,-23r-17,-32r130,-60r-129,-59r16,-33r166,78r0,29","w":209},"?":{"d":"68,-80v-10,-59,62,-65,62,-106v0,-15,-11,-27,-28,-27v-19,0,-37,11,-33,36r-53,0v-5,-58,39,-80,88,-83v88,-6,106,96,51,131v-18,11,-38,19,-33,49r-54,0xm64,0r0,-62r61,0r0,62r-61,0","w":199,"k":{".":17,",":17}},"@":{"d":"49,-86v0,110,121,144,225,106r7,24v-28,12,-62,19,-104,19v-97,0,-161,-54,-161,-148v0,-103,76,-164,171,-164v70,0,138,43,138,119v0,88,-54,125,-142,117v0,-6,4,-15,2,-19v-29,39,-108,28,-97,-36v9,-53,21,-108,78,-108v15,0,32,7,42,18r3,-16r48,0r-23,133v33,-6,57,-35,57,-88v0,-64,-56,-93,-110,-93v-83,0,-134,54,-134,136xm138,-68v5,34,51,22,55,-7v3,-24,17,-66,-18,-65v-34,1,-31,43,-37,72","w":341},"A":{"d":"3,0r91,-257r69,0r90,257r-65,0r-16,-48r-92,0r-16,48r-61,0xm96,-98r60,0r-30,-93","w":255,"k":{"y":17,"w":17,"v":20,"t":8,"Y":28,"W":22,"V":26,"U":7,"T":29,"S":-1,"O":7,"G":7,"C":7,"?":19,"-":5,"'":29,"\"":29}},"B":{"d":"22,0r0,-257r131,0v85,-6,103,96,38,123v72,23,50,134,-34,134r-135,0xm86,-51v36,0,84,7,84,-29v0,-35,-50,-26,-84,-27r0,56xm86,-154v0,0,80,6,80,-28v0,-33,-48,-24,-80,-25r0,53","w":247,"k":{"Y":7,"X":4,"A":3,".":3,",":3}},"C":{"d":"125,4v-57,0,-110,-28,-110,-92r0,-79v0,-63,51,-94,108,-94v53,0,110,28,105,96r-61,0v2,-30,-20,-43,-42,-43v-23,0,-45,12,-45,41v1,53,-12,119,45,119v22,0,45,-14,42,-45r61,0v6,69,-49,97,-103,97","w":241,"k":{"Y":4,"X":3}},"D":{"d":"22,0r0,-257v102,-2,211,-10,212,91r0,72v-2,106,-108,96,-212,94xm86,-53v43,2,83,1,84,-41v0,-52,10,-113,-46,-110r-38,0r0,151","w":249,"k":{"Y":11,"X":11,"W":2,"V":4,"T":3,"A":7,".":8,",":8}},"E":{"d":"22,0r0,-257r189,0r0,53r-125,0r0,48r105,0r0,52r-105,0r0,51r126,0r0,53r-190,0","w":229,"k":{"y":3,"w":4,"v":4,"u":6,"t":9,"q":5,"o":5,"g":5,"e":5,"d":5,"c":5,"a":5,"X":3,"U":3,"S":4,"O":6,"J":3,"G":6,"C":6}},"F":{"d":"22,0r0,-257r186,0r0,53r-122,0r0,51r101,0r0,53r-101,0r0,100r-64,0","w":218,"k":{"z":11,"y":5,"x":6,"w":4,"v":4,"u":6,"t":5,"s":9,"r":6,"q":16,"p":6,"o":16,"n":6,"m":6,"g":16,"e":16,"d":16,"c":16,"a":12,"S":3,"O":4,"J":22,"G":4,"C":4,"A":24,";":4,":":4,".":22,",":22}},"G":{"d":"229,-80v-5,116,-217,112,-214,-8r0,-79v0,-63,51,-94,108,-94v53,0,111,25,106,93r-61,0v3,-31,-21,-42,-43,-42v-22,0,-45,12,-45,41v1,54,-12,122,45,122v24,0,44,-13,42,-44r-52,0r0,-48r114,0r0,59","w":242,"k":{"X":8,"A":4,".":4,",":4}},"H":{"d":"22,0r0,-257r64,0r0,99r84,0r0,-99r64,0r0,257r-64,0r0,-102r-84,0r0,102r-64,0","w":256},"I":{"d":"22,0r0,-257r64,0r0,257r-64,0","w":108},"J":{"d":"112,4v-66,1,-104,-28,-99,-100r62,0v-1,27,1,47,36,47v24,0,32,-18,32,-38r0,-170r64,0r0,171v0,51,-35,90,-95,90","w":227,"k":{"A":7,".":7,",":7}},"K":{"d":"22,0r0,-257r64,0r0,117r89,-117r69,0r-82,103r86,154r-70,0r-61,-109r-31,34r0,75r-64,0","w":250,"k":{"y":7,"w":9,"v":9,"t":11,"q":8,"o":8,"g":8,"e":8,"d":8,"c":8,"O":11,"G":11,"C":11}},"L":{"d":"22,0r0,-257r64,0r0,204r122,0r0,53r-186,0","w":216,"k":{"y":11,"w":12,"v":12,"t":10,"a":-3,"Y":33,"W":20,"V":23,"U":1,"T":29,"S":-1,"O":1,"G":1,"C":1,"A":-9,"'":33,"\"":33}},"M":{"d":"22,0r0,-257r80,0r53,133r51,-133r79,0r0,257r-60,0r0,-163r-49,128r-45,0r-50,-128r0,163r-59,0","w":306},"N":{"d":"22,0r0,-257r62,0r99,145r0,-145r59,0r0,257r-59,0r-102,-151r0,151r-59,0","w":264},"O":{"d":"234,-93v1,130,-220,131,-219,3r0,-74v0,-65,54,-97,109,-97v57,0,110,31,110,97r0,71xm125,-49v23,0,45,-13,45,-42r0,-76v0,-27,-22,-41,-46,-41v-23,0,-44,12,-44,42v0,53,-11,117,45,117","w":249,"k":{"Y":11,"X":11,"W":2,"V":4,"T":3,"A":7,".":8,",":8}},"P":{"d":"22,0r0,-257r116,0v57,0,90,35,90,83v0,42,-26,85,-89,85r-53,0r0,89r-64,0xm86,-138v38,1,79,3,79,-34v0,-38,-41,-35,-79,-34r0,68","w":238,"k":{"q":6,"o":6,"g":6,"e":6,"d":6,"c":6,"a":4,"Z":5,"Y":8,"X":8,"T":2,"J":21,"A":22,".":24,",":24}},"Q":{"d":"203,43r-64,-40v-66,6,-123,-23,-124,-93r0,-74v0,-65,54,-97,109,-97v57,0,110,31,110,97v1,59,4,117,-31,142r37,16xm125,-49v23,0,45,-13,45,-42r0,-76v0,-27,-22,-41,-46,-41v-23,0,-44,12,-44,42v0,53,-11,117,45,117","w":249},"R":{"d":"22,0r0,-257r112,0v101,-7,123,122,44,157r59,100r-71,0r-50,-91r-30,0r0,91r-64,0xm86,-138v37,1,77,3,77,-34v0,-37,-40,-35,-77,-34r0,68","w":243,"k":{"Y":10,"T":4}},"S":{"d":"217,-80v-1,103,-166,108,-212,38r41,-36v13,19,38,32,65,32v19,0,40,-6,40,-24v0,-31,-48,-30,-73,-38v-34,-11,-61,-30,-61,-71v0,-91,155,-107,194,-42r-42,35v-12,-16,-34,-25,-54,-25v-19,0,-35,7,-35,25v0,26,52,27,76,35v36,11,61,31,61,71","w":227,"k":{"y":4,"Y":3,"T":4,"A":4}},"T":{"d":"82,0r0,-205r-73,0r0,-52r210,0r0,52r-73,0r0,205r-64,0","w":227,"k":{"z":13,"y":8,"x":8,"w":8,"v":8,"u":10,"t":6,"s":22,"r":9,"q":24,"p":9,"o":24,"n":9,"m":9,"g":24,"e":24,"d":24,"c":24,"a":24,"Y":-5,"W":-5,"V":-5,"S":3,"O":3,"J":41,"G":3,"C":3,"A":30,";":6,":":6,".":31,",":31}},"U":{"d":"127,4v-65,0,-106,-31,-106,-95r0,-166r64,0r0,162v0,29,15,46,44,46v27,0,42,-15,42,-46r0,-162r63,0r0,163v0,64,-47,98,-107,98","w":255,"k":{"A":7}},"V":{"d":"82,1r-81,-258r65,0r52,181r52,-181r62,0r-84,258r-66,0","w":232,"k":{"y":8,"x":9,"v":6,"s":9,"r":11,"q":18,"p":11,"o":18,"n":11,"m":11,"g":18,"e":18,"d":18,"c":18,"a":18,"T":-5,"S":4,"O":6,"J":18,"G":6,"C":6,"A":31,";":8,":":8,".":29,"-":8,",":29}},"W":{"d":"68,1r-64,-258r64,0r36,157r40,-157r56,0r39,157r35,-157r62,0r-65,258r-60,0r-41,-163r-2,0r-41,163r-59,0","w":339,"k":{"z":8,"y":4,"x":8,"v":2,"s":9,"r":4,"q":12,"p":4,"o":12,"n":4,"m":4,"g":12,"e":12,"d":12,"c":12,"a":12,"T":-5,"O":3,"J":15,"G":3,"C":3,"A":22,";":9,":":9,".":23,"-":7,",":23}},"X":{"d":"-1,0r79,-133r-73,-124r70,0r45,80r44,-80r66,0r-74,125r79,132r-70,0r-50,-86r-49,86r-67,0","w":234,"k":{"y":8,"O":11,"G":11,"C":11}},"Y":{"d":"84,0r0,-102r-84,-155r67,0r51,101r50,-101r65,0r-85,156r0,101r-64,0","w":232,"k":{"z":13,"y":10,"x":9,"w":9,"v":12,"u":13,"t":11,"s":17,"r":15,"q":26,"p":15,"o":26,"n":15,"m":15,"g":26,"e":26,"d":26,"c":26,"a":26,"T":-5,"S":8,"O":8,"J":31,"G":8,"C":8,"A":28,";":9,":":9,".":29,"-":12,",":29}},"Z":{"d":"13,0r0,-42r119,-163r-114,0r0,-52r193,0r0,45r-115,159r116,0r0,53r-199,0","w":225,"k":{"y":3,"w":3,"v":3,"O":4,"G":4,"C":4}},"[":{"d":"34,70r0,-349r91,0r0,29r-42,0r0,292r41,0r0,28r-90,0","w":129,"k":{"A":11}},"\\":{"d":"93,40r-94,-302r43,0r94,302r-43,0","w":129,"k":{"_":-32}},"]":{"d":"6,70r0,-28r41,0r0,-292r-41,0r0,-29r90,0r0,349r-90,0","w":129},"^":{"d":"36,-44r46,-178r49,0r43,178r-42,0r-27,-133r-28,133r-41,0","w":209},"_":{"d":"0,53r0,-39r180,0r0,39r-180,0","w":180,"k":{"\\":51}},"`":{"d":"66,-212r-49,-65r59,0r31,65r-41,0","w":122},"a":{"d":"132,-21v-37,43,-122,31,-122,-30v0,-57,60,-65,118,-62v2,-24,-4,-38,-29,-38v-21,0,-29,9,-28,24r-53,0v-3,-48,39,-65,84,-66v44,0,86,17,86,65r0,86v0,14,2,38,3,42r-57,0v0,-1,-1,-7,-2,-21xm96,-39v26,0,34,-16,32,-41v-26,0,-58,-4,-58,21v0,12,8,20,26,20","w":206},"b":{"d":"202,-66v3,65,-86,94,-124,48r0,18r-58,0r0,-257r60,0r0,90v38,-50,126,-24,122,44r0,57xm80,-69v2,40,63,41,63,-2v1,-35,5,-76,-31,-76v-15,0,-32,8,-32,34r0,44","k":{"v":3}},"c":{"d":"104,5v-59,2,-91,-39,-91,-116v0,-56,45,-82,91,-82v47,1,91,24,87,78r-58,0v2,-23,-12,-33,-29,-33v-36,0,-32,42,-31,77v0,19,13,31,32,31v17,0,30,-10,28,-33r58,0v4,55,-40,77,-87,78","w":199},"d":{"d":"137,-22v-38,47,-129,27,-124,-44r0,-57v-4,-66,83,-91,123,-49r0,-85r59,0r0,257r-58,0r0,-22xm104,-42v33,4,34,-42,32,-78v-3,-40,-63,-42,-63,3v0,35,-4,77,31,75"},"e":{"d":"185,-25v-48,50,-172,41,-172,-48v0,-78,32,-120,92,-120v56,0,94,42,84,113r-116,0v-6,51,65,44,89,22xm73,-114r59,0v2,-24,-11,-35,-29,-35v-18,0,-32,11,-30,35","w":201},"f":{"d":"32,0r0,-144r-25,0r0,-43r25,0v-7,-64,33,-86,91,-73r0,41v-15,-2,-32,-3,-32,13r0,19r33,0r0,43r-33,0r0,144r-59,0","w":130},"g":{"d":"196,-19v10,89,-124,117,-178,60r31,-33v32,31,104,19,87,-38v-38,45,-129,19,-121,-47v-7,-67,16,-117,74,-116v20,-1,38,9,50,22r0,-18r57,0r0,170xm106,-52v28,4,34,-33,31,-66v-3,-38,-62,-43,-62,2v0,33,-1,67,31,64"},"h":{"d":"20,0r0,-257r60,0r1,92v31,-48,118,-35,118,34r0,131r-60,0r0,-111v0,-19,-7,-35,-29,-35v-49,0,-24,97,-30,146r-60,0","w":216},"i":{"d":"20,0r0,-189r60,0r0,189r-60,0xm20,-212r0,-48r60,0r0,48r-60,0","w":99},"j":{"d":"85,12v1,48,-41,63,-87,55r0,-44v15,1,28,0,27,-15r0,-197r60,0r0,201xm25,-212r0,-48r60,0r0,48r-60,0","w":105},"k":{"d":"21,0r0,-257r59,0r0,142r59,-74r62,0r-56,68r57,121r-65,0r-37,-81r-20,23r0,58r-59,0","w":206},"l":{"d":"73,4v-40,0,-54,-27,-54,-53r0,-208r60,0r0,197v-2,15,18,16,32,12r0,45v-11,3,-25,7,-38,7","w":118,"k":{"y":14,"w":12,"v":14}},"m":{"d":"20,0r0,-189r58,0v1,7,-2,18,1,24v25,-38,90,-37,112,1v30,-43,122,-43,123,30r0,134r-59,0r0,-111v0,-18,-6,-35,-29,-35v-49,0,-23,97,-29,146r-59,0r0,-111v0,-17,-5,-35,-29,-35v-13,0,-29,11,-29,37r0,109r-60,0","w":333},"n":{"d":"20,0r0,-189r58,0v1,7,-2,18,1,23v33,-45,120,-35,120,35r0,131r-60,0r0,-111v0,-19,-7,-35,-29,-35v-49,0,-24,97,-30,146r-60,0","w":216},"o":{"d":"104,4v-45,0,-91,-21,-91,-76r0,-41v0,-107,181,-108,181,-1r0,39v0,55,-48,79,-90,79xm104,-41v35,0,31,-42,30,-77v0,-18,-13,-30,-31,-30v-35,0,-31,43,-30,78v0,18,12,29,31,29","w":207,"k":{"v":3}},"p":{"d":"20,68r0,-257r58,0v1,7,-2,17,1,22v38,-50,127,-25,123,44r0,57v4,65,-84,93,-122,49r0,85r-60,0xm80,-69v1,40,63,42,63,-1v1,-35,5,-77,-31,-77v-15,0,-32,8,-32,34r0,44","k":{"v":3}},"q":{"d":"136,68r0,-90v-37,49,-127,24,-123,-44r0,-56v-4,-68,83,-92,124,-49r0,-19r58,0r0,258r-59,0xm104,-42v33,4,34,-42,32,-78v-3,-40,-63,-42,-63,3v0,35,-4,77,31,75"},"r":{"d":"19,0r0,-189r58,0v1,10,-2,23,1,31v14,-23,41,-42,76,-33r0,51v-39,-6,-76,-2,-76,41r0,99r-59,0","w":158,"k":{"y":-8,"w":-8,"v":-8,"t":-7,"a":-1,".":26,",":26}},"s":{"d":"184,-62v0,80,-126,83,-175,37r31,-35v13,13,33,22,54,22v14,0,29,-4,29,-16v0,-11,-8,-14,-23,-17v-1,0,-3,1,-34,-7v-30,-7,-49,-23,-49,-51v0,-69,118,-84,158,-39r-34,32v-12,-11,-28,-16,-43,-16v-16,0,-25,5,-25,15v4,17,41,16,59,21v33,9,52,27,52,54","w":195,"k":{"'":14,"\"":14}},"t":{"d":"129,-3v-45,13,-98,12,-98,-45r0,-96r-25,0r0,-43r25,0r0,-53r59,0r0,53r40,0r0,43r-40,0r0,81v-3,20,24,17,39,14r0,46","w":137,"k":{"y":-4,"w":-4,"v":-4}},"u":{"d":"140,-26v-33,47,-121,40,-120,-33r0,-130r59,0r0,110v0,19,7,36,29,36v49,-2,26,-96,31,-146r59,0r0,189r-58,0r0,-26","w":217},"v":{"d":"69,1r-67,-190r63,0v14,39,21,84,38,120r36,-120r56,0r-65,190r-61,0","w":196,"k":{"t":-4,"q":3,"o":3,"g":3,"e":3,"d":3,"c":3,".":19,",":19}},"w":{"d":"62,1r-60,-190r61,0r31,114r31,-114r55,0r32,113r30,-113r57,0r-60,190r-55,0r-34,-121r-33,121r-55,0","w":300,"k":{"t":-4,".":19,",":19}},"x":{"d":"3,0r62,-98r-59,-91r66,0r31,52r31,-52r58,0r-58,91r63,98r-66,0r-35,-58r-34,58r-59,0","w":199},"y":{"d":"124,20v-18,47,-52,53,-101,47r0,-46v26,6,46,-1,49,-24r-69,-186r64,0r38,119r38,-119r55,0","w":199,"k":{"t":-4,".":19,",":19}},"z":{"d":"12,0r0,-40r90,-105r-85,0r0,-44r158,0r-1,40r-88,103r90,0r0,46r-164,0","w":188},"{":{"d":"128,70v-47,1,-89,7,-89,-46r0,-99v0,-18,-3,-24,-16,-25r0,-30v16,-3,16,-6,16,-19v2,-51,-13,-133,39,-130r50,0r0,28v-14,2,-37,-7,-38,9v-3,48,12,112,-23,128v43,16,15,96,23,147v2,16,25,5,38,8r0,29","w":133,"k":{"A":11}},"|":{"d":"36,14r0,-275r45,0r0,275r-45,0","w":117},"}":{"d":"6,70r0,-29v14,-3,36,8,38,-8v7,-51,-19,-131,23,-147r0,-2v-38,-12,-18,-81,-23,-126v-1,-16,-24,-7,-38,-9r0,-28v47,-1,90,-6,89,46r0,84v0,13,0,16,16,19r0,30v-13,1,-16,7,-16,25v0,55,17,147,-40,145r-49,0","w":132},"~":{"d":"35,-84r-27,-5v5,-28,17,-51,45,-51v22,0,83,11,105,11v10,0,13,-7,17,-17r26,6v-4,27,-15,51,-43,51v-22,0,-84,-11,-106,-11v-9,0,-12,3,-17,16","w":209},"\u00a0":{"w":88}}});
;
// $Id$
Cufon.replace('#lead h1.black_yellow a.nocufon');
Cufon.replace('h1:not(#page-title,#video-description-title,.pretitle,.no-cufon)');
Cufon.replace('h2.title');
///Cufon.replace('#lead h1 a');
Cufon.replace('h2.block-title');
Cufon.replace('h5.mostpop-num', {fontFamily: 'Flama Basic', fontSize: '14px' });
Cufon.replace('h3.mostpop-title', {fontFamily: 'Flama Bold', fontSize: '18px' });
;
(function($){$.fn.easyTabs=function(option){var param=jQuery.extend({fadeSpeed:"fast",defaultContent:1,activeClass:'active'},option);$(this).each(function(){var thisId="#"+this.id;if(param.defaultContent==''){param.defaultContent=1;}
if(typeof param.defaultContent=="number")
{var defaultTab=$(thisId+" .tabs li:eq("+(param.defaultContent-1)+") a").attr('href').substr(1);}else{var defaultTab=param.defaultContent;}
$(thisId+" .tabs li a").each(function(){var tabToHide=$(this).attr('href').substr(1);$("#"+tabToHide).addClass('easytabs-tab-content');});hideAll();changeContent(defaultTab);function hideAll(){$(thisId+" .easytabs-tab-content").hide();}
function changeContent(tabId){hideAll();$(thisId+" .tabs li").removeClass(param.activeClass);$(thisId+" .tabs li a[href=#"+tabId+"]").closest('li').addClass(param.activeClass);if(param.fadeSpeed!="none")
{$(thisId+" #"+tabId).fadeIn(param.fadeSpeed);}else{$(thisId+" #"+tabId).show();}}
$(thisId+" .tabs li").click(function(){var tabId=$(this).find('a').attr('href').substr(1);changeContent(tabId);return false;});});}})(jQuery);;
jQuery(document).ready(function() {
  boldFirstThree();
  sliderHover();
  tagSliderHover();
});

jQuery(document).ready(function() {
  
});

/*
* First three words of an article need to be bold
*/
function boldFirstThree(){

  if($('#expert-block').length == 1){
    //Get the second paragraph of the article
    var str = $(".content_article p:eq(2)");
  }
  else{
    //Get the first paragraph of the article
    var str = $(".content_article p:first");
  }
  
  console.log(str.length);

  if(str.length > 0){
    //Build out the first 3 words of the article
    for(var i = 0; i <= 2; i++){

        //Find the first, second and third index of " "
        var spaceChar = str.html().indexOf(" ", nextIndex);
        var reqstr = str.html().substring(0,spaceChar);
        
        //Identify where the next word starts
        var nextIndex = spaceChar + 1;

        //Build the output
        var output = reqstr;

    }

    var newHTML = str.html();
    //console.log(newHTML.replace(output, '<strong>' + output + '</strong>'));

    //Set the new output
    //Print only if var 'output' is not empty.  Other wise a space shows up on page added 16Jun2014
    if (output && (output.trim().length > 0)) {
       str.html(newHTML.replace(output, '<div class="bold-first-three">' + output + '&nbsp;</div>'));
    }
    
  }
}

/* 
* Create hover state for hed text on sliders
*/
function sliderHover(){

  $('.gg-slider-v2 li').hover(
    function(){
      $('h2', this).css({'color': '#FF3300'});
    },
    function(){
      $('h2', this).css({'color': ''});
    }
  );
}

/*
* Create hover link for /tag /by page slides
*/
function tagSliderHover(){

  $('.pager').hover(function(){
    $(this).click(function(){
      window.location.href = $("a", this).attr("href");
    });
  });
}

/**
 * The following script controls the display of the navbar flyouts and their delays
 */
var mh_flyout_callState = 0;

function displayMenu(e)
{
  var gmnuObj = this;
  jQuery(this).attr('ON','1');
  jQuery(this).removeAttr('OFF');
  setTimeout(function() {
	var mnuObj = gmnuObj;
	if(jQuery(mnuObj).attr('ON') == '1')
	{
	  jQuery('.mh_flyout_menu').css('display','none');
	  jQuery('#mh_header_flyout_subscribe').css('display','block');
	  jQuery(mnuObj).removeAttr('ON');
	}
  },
			 500
		    );
}
function hideMenu(e)
{
  mh_flyout_callState=0;
  var gmnuObj = this;
  jQuery(this).attr('OFF','1');
  jQuery(this).removeAttr('ON');
  setTimeout(function() {
	var mnuObj = gmnuObj;
	if((mh_flyout_callState==0) && (jQuery(mnuObj).attr('OFF') == '1'))
	{
	  jQuery('#mh_header_flyout_subscribe').css('display','none');
	  jQuery(mnuObj).removeAttr('OFF');
	}
  },
			 7000
		    );
}

function setCallOnState(e)
{
  mh_flyout_callState = 1;
}
function setCallOffState(e)
{
  mh_flyout_callState = 0;
  var mnuId = "#mh_header_subnav_subscribe";
  jQuery(mnuId).trigger("mouseout");
}

function hideMenuImmed(e)
{
  mh_flyout_callState=0;
  jQuery('#mh_header_flyout_subscribe').css('display','none');
}

/**
 * END - MH_SUB_FLYOUT
 */

$(document).ready( function() {
  $(".advertisement-sponsor tr td:last").parents("td:first").addClass("td-last");
  try{
	var mainvideospacerheight = $('#content #content-inner .mainvideospacer').height();
	var mharticleadtopheight = $('#mh-115x25-top-ad').height();
	if((mainvideospacerheight > 10) && (!$.browser.msie)) {
	  $('#content #content-inner .mainvideospacer').height(mainvideospacerheight + mharticleadtopheight);
	}
  }
  catch(e){}
  try{
	var channelsponsoradh = $('#channel-special-sponsor-ad .advertisement a img').height();
	if((channelsponsoradh > 10)) {
	  $('#channel-special-sponsor-ad .advertisement').height(channelsponsoradh);
	}
  }
  catch(e2){}

  try{
	var mainvideospacerheight = $('#content #content-inner .mainvideospacer').height();
	var mharticletoppromoheight = $('#mh-article-top-promo-crp').height();
	if((mainvideospacerheight > 10) && (!$.browser.msie)) {
	  $('#content #content-inner .mainvideospacer').height(mainvideospacerheight + mharticletoppromoheight);
	}
  } catch(e){}

  $('#site-menu .main-menu li').each( function(i, el){
	var menuTimer;
    $(this).hover( function() {
      if (menuTimer != 'undefined') {
        clearTimeout(menuTimer);
      }
      //mouseover
      var menuli = $('#site-menu .main-menu li:eq('+i+')');
      var flyout = $('#site-nav-flyouts .flyout_shadow:eq('+i+') .flyout_menu');

      menuTimer = setTimeout(function() {
       	menuli.removeClass('hiho').addClass('hiho');
      	flyout.show();
      }, 400);

	  flyout.hover( function() {
        if (menuTimer != 'undefined') {
          clearTimeout(menuTimer);
        }

        menuli.removeClass('hiho').addClass('hiho');
      }, function() {
    	clearTimeout(menuTimer);
        menuTimer = setTimeout(function() {
          menuli.removeClass('hiho');
          flyout.hide();//fadeOut(200);

        }, 10);
      });
    }, function() {
      //mouseout
      var menuli = $('#site-menu .main-menu li:eq('+i+')');
      var flyout = $('#site-nav-flyouts .flyout_shadow:eq('+i+') .flyout_menu');
  	  clearTimeout(menuTimer);
      menuTimer = setTimeout(function() {
        menuli.removeClass('hiho');
        flyout.hide();//fadeOut(200);
      }, 10);
    });


  });
 /* end flyout*/

  /*hover function for flyout_front */
  $('#site-menu-front .main-menu li').each( function(i, el) {
	var menuTimer;
    $(this).hover( function() {
      if (menuTimer != 'undefined') {
        clearTimeout(menuTimer);
      }
      //mouseover
      var menuli = $('#site-menu-front .main-menu li:eq('+i+')');
      var flyout_front = $('#site-nav-flyouts-front .flyout_shadow:eq('+i+') .flyout_menu');

      menuTimer = setTimeout(function() {
       	menuli.removeClass('hiho').addClass('hiho');
      	flyout_front.show();
      }, 400);

   	  flyout_front.hover( function() {
        if (menuTimer != 'undefined') {
          clearTimeout(menuTimer);
        }


        menuli.removeClass('hiho').addClass('hiho');
      }, function() {
    	clearTimeout(menuTimer);
        menuTimer = setTimeout(function() {
          menuli.removeClass('hiho');
          flyout_front.hide();//fadeOut(200);

        }, 10);
      });
    }, function() {
      //mouseout
      var menuli = $('#site-menu-front .main-menu li:eq('+i+')');
      var flyout_front = $('#site-nav-flyouts-front .flyout_shadow:eq('+i+') .flyout_menu');
  	  clearTimeout(menuTimer);
      menuTimer = setTimeout(function() {
        menuli.removeClass('hiho');
        flyout_front.hide();//fadeOut(200);
      }, 10);
    });
  }); /* end flyout_front*/

  $('.mh_flyout_menu').hover(
	setCallOnState,
	setCallOffState
  );
  $('#mh_header_subnav_subscribe').hover(
 	displayMenu,
 	hideMenu
  );

  $('.main-menu').hover(
	hideMenuImmed,
	function(){}
  );

  $("#newsletter_container form").submit(function() {
    return validateEnhancedFreeNewsLettersForm(this);
  });

});

function mh_header_changer(from,to) {
    if(document.images) {
        document.images[from].src = header_pics[to].src;
    }
}

function checkwelcomeemail(welcomeform) {
   if(welcomeform.email.value.length>0) {
      if(!jcv_checkEmail(welcomeform.email.value)) {
	     alert('Please provide a valid email');
         return false;
      } else {
          return true;
      }
   } else {
	  alert('Email is required');
      return false;
   }
}

/* Begin JS validation functions */

var bCancel = false;

function validateEnhancedFreeNewsLettersForm(form) {
if (bCancel) {
    return true;
} else {
    var formValidationResult;
    formValidationResult = validateRequired(form) && validateEmail(form);
    return (formValidationResult);
}
}

function enhancedFreeNewsLettersForm_required () {
this.a0 = new Array("email", "Email is required.", new Function ("varName", " return this[varName];"));
this.a1 = new Array("selectedNewsletters", "A Newsletter Selection is required.", new Function ("varName", " return this[varName];"));
}

function enhancedFreeNewsLettersForm_email () {
this.a0 = new Array("email", "Email is an invalid e-mail address.", new Function ("varName", " return this[varName];"));
}




/*$RCSfile: validateFloatRange.js,v $ $Rev: 376673 $ $Date: 2006-02-10 13:42:31 +0000 (Fri, 10 Feb 2006) $ */
/**
* Check to see if fields are in a valid float range.
* Fields are not checked if they are disabled.
* <p>
* @param form The form validation is taking place on.
*/
function validateFloatRange(form) {
var isValid = true;
var focusField = null;
var i = 0;
var fields = new Array();

var oRange = eval('new ' + jcv_retrieveFormName(form) +  '_floatRange()');
for (var x in oRange) {
    if (!jcv_verifyArrayElement(x, oRange[x])) {
        continue;
    }
    var field = form[oRange[x][0]];
    if (!jcv_isFieldPresent(field)) {
      continue;
    }

    if ((field.type == 'hidden' ||
        field.type == 'text' || field.type == 'textarea') &&
        (field.value.length > 0)) {

        var fMin = parseFloat(oRange[x][2]("min"));
        var fMax = parseFloat(oRange[x][2]("max"));
        var fValue = parseFloat(field.value);
        if (!(fValue >= fMin && fValue <= fMax)) {
            if (i == 0) {
                focusField = field;
            }
            fields[i++] = oRange[x][1];
            isValid = false;
        }
    }
}
if (fields.length > 0) {
    jcv_handleErrors(fields, focusField);
}
return isValid;
}

/*$RCSfile: validateUtilities.js,v $ $Rev: 376673 $ $Date: 2006-02-10 13:42:31 +0000 (Fri, 10 Feb 2006) $ */

/**
* This is a place holder for common utilities used across the javascript validation
*
**/

/**
* Retreive the name of the form
* @param form The form validation is taking place on.
*/
function jcv_retrieveFormName(form) {

// Please refer to Bugs 31534, 35127, 35294, 37315 & 38159
// for the history of the following code

var formName;

if (form.getAttributeNode) {
  if (form.getAttributeNode("id") && form.getAttributeNode("id").value) {
      formName = form.getAttributeNode("id").value;
  } else {
      formName = form.getAttributeNode("name").value;
  }
} else if (form.getAttribute) {
  if (form.getAttribute("id")) {
      formName = form.getAttribute("id");
  } else {
      formName = form.attributes["name"];
  }
} else {
  if (form.id) {
      formName = form.id;
  } else {
      formName = form.name;
  }
}

return formName;

}

/**
* Handle error messages.
* @param messages Array of error messages.
* @param focusField Field to set focus on.
*/
function jcv_handleErrors(messages, focusField) {
if (focusField && focusField != null) {
  var doFocus = true;
  if (focusField.disabled || focusField.type == 'hidden') {
      doFocus = false;
  }
  if (doFocus &&
      focusField.style &&
      focusField.style.visibility &&
      focusField.style.visibility == 'hidden') {
      doFocus = false;
  }
  if (doFocus) {
      focusField.focus();
  }
}
alert(messages.join('\n'));
}

/**
* Checks that the array element is a valid
* Commons Validator element and not one inserted by
* other JavaScript libraries (for example the
* prototype library inserts an "extends" into
* all objects, including Arrays).
* @param name The element name.
* @param value The element value.
*/
function jcv_verifyArrayElement(name, element) {
if (element && element.length && element.length == 3) {
  return true;
} else {
  return false;
}
}

/**
* Checks whether the field is present on the form.
* @param field The form field.
*/
function jcv_isFieldPresent(field) {
var fieldPresent = true;
if (field == null || field == undefined) {
  fieldPresent = false;
} else {
  if (field.disabled) {
      fieldPresent = false;
  }
}
return fieldPresent;
}

/**
* Check a value only contains valid numeric digits
* @param argvalue The value to check.
*/
function jcv_isAllDigits(argvalue) {
argvalue = argvalue.toString();
var validChars = "0123456789";
var startFrom = 0;
if (argvalue.substring(0, 2) == "0x") {
 validChars = "0123456789abcdefABCDEF";
 startFrom = 2;
} else if (argvalue.charAt(0) == "0") {
 validChars = "01234567";
 startFrom = 1;
} else if (argvalue.charAt(0) == "-") {
  startFrom = 1;
}

for (var n = startFrom; n < argvalue.length; n++) {
  if (validChars.indexOf(argvalue.substring(n, n+1)) == -1) return false;
}
return true;
}

/**
* Check a value only contains valid decimal digits
* @param argvalue The value to check.
*/
function jcv_isDecimalDigits(argvalue) {
argvalue = argvalue.toString();
var validChars = "0123456789";

var startFrom = 0;
if (argvalue.charAt(0) == "-") {
  startFrom = 1;
}

for (var n = startFrom; n < argvalue.length; n++) {
  if (validChars.indexOf(argvalue.substring(n, n+1)) == -1) return false;
}
return true;
}


/*$RCSfile: validateByte.js,v $ $Rev: 376673 $ $Date: 2006-02-10 13:42:31 +0000 (Fri, 10 Feb 2006) $ */
/**
* Check to see if fields are a valid byte.
* Fields are not checked if they are disabled.
* <p>
* @param form The form validation is taking place on.
*/
function validateByte(form) {
var bValid = true;
var focusField = null;
var i = 0;
var fields = new Array();

var oByte = eval('new ' + jcv_retrieveFormName(form) + '_ByteValidations()');

for (var x in oByte) {
    if (!jcv_verifyArrayElement(x, oByte[x])) {
        continue;
    }
    var field = form[oByte[x][0]];
    if (!jcv_isFieldPresent(field)) {
      continue;
    }

    if ((field.type == 'hidden' ||
        field.type == 'text' ||
        field.type == 'textarea' ||
        field.type == 'select-one' ||
        field.type == 'radio')) {

        var value = '';
        // get field's value
        if (field.type == "select-one") {
            var si = field.selectedIndex;
            if (si >= 0) {
                value = field.options[si].value;
            }
        } else {
            value = field.value;
        }

        if (value.length > 0) {
            if (!jcv_isDecimalDigits(value)) {
                bValid = false;
                if (i == 0) {
                    focusField = field;
                }
                fields[i++] = oByte[x][1];

            } else {

                var iValue = parseInt(value, 10);
                if (isNaN(iValue) || !(iValue >= -128 && iValue <= 127)) {
                    if (i == 0) {
                        focusField = field;
                    }
                    fields[i++] = oByte[x][1];
                    bValid = false;
                }
            }
        }

    }
}
if (fields.length > 0) {
   jcv_handleErrors(fields, focusField);
}
return bValid;
}


/*$RCSfile: validateMaxLength.js,v $ $Rev: 376673 $ $Date: 2006-02-10 13:42:31 +0000 (Fri, 10 Feb 2006) $ */
/**
* A field is considered valid if less than the specified maximum.
* Fields are not checked if they are disabled.
* <p>
* <strong>Caution:</strong> Using <code>validateMaxLength</code> on a password field in a
*  login page gives unnecessary information away to hackers. While it only slightly
*  weakens security, we suggest using it only when modifying a password.</p>
* @param form The form validation is taking place on.
*/
function validateMaxLength(form) {
var isValid = true;
var focusField = null;
var i = 0;
var fields = new Array();

var oMaxLength = eval('new ' + jcv_retrieveFormName(form) +  '_maxlength()');
for (var x in oMaxLength) {
    if (!jcv_verifyArrayElement(x, oMaxLength[x])) {
        continue;
    }
    var field = form[oMaxLength[x][0]];
    if (!jcv_isFieldPresent(field)) {
      continue;
    }

    if ((field.type == 'hidden' ||
        field.type == 'text' ||
        field.type == 'password' ||
        field.type == 'textarea')) {

        /* Adjust length for carriage returns - see Bug 37962 */
        var lineEndLength = oMaxLength[x][2]("lineEndLength");
        var adjustAmount = 0;
        if (lineEndLength) {
            var rCount = 0;
            var nCount = 0;
            var crPos = 0;
            while (crPos < field.value.length) {
                var currChar = field.value.charAt(crPos);
                if (currChar == '\r') {
                    rCount++;
                }
                if (currChar == '\n') {
                    nCount++;
                }
                crPos++;
            }
            var endLength = parseInt(lineEndLength);
            adjustAmount = (nCount * endLength) - (rCount + nCount);
        }

        var iMax = parseInt(oMaxLength[x][2]("maxlength"));
        if ((field.value.length + adjustAmount)  > iMax) {
            if (i == 0) {
                focusField = field;
            }
            fields[i++] = oMaxLength[x][1];
            isValid = false;
        }
    }
}
if (fields.length > 0) {
   jcv_handleErrors(fields, focusField);
}
return isValid;
}


/*$RCSfile: validateRequired.js,v $ $Rev: 376673 $ $Date: 2006-02-10 13:42:31 +0000 (Fri, 10 Feb 2006) $ */
/**
*  Check to see if fields must contain a value.
* Fields are not checked if they are disabled.
* <p>
* @param form The form validation is taking place on.
*/

function validateRequired(form) {
var isValid = true;
var focusField = null;
var i = 0;
var fields = new Array();

var oRequired = eval('new ' + jcv_retrieveFormName(form) +  '_required()');

for (var x in oRequired) {
    if (!jcv_verifyArrayElement(x, oRequired[x])) {
        continue;
    }
    var field = form[oRequired[x][0]];

    if (!jcv_isFieldPresent(field)) {
        fields[i++] = oRequired[x][1];
        isValid=false;
    } else if ((field.type == 'hidden' ||
        field.type == 'text' ||
        field.type == 'textarea' ||
        field.type == 'file' ||
        field.type == 'radio' ||
        field.type == 'checkbox' ||
        field.type == 'select-one' ||
        field.type == 'password')) {

        var value = '';
        // get field's value
        if (field.type == "select-one") {
            var si = field.selectedIndex;
            if (si >= 0) {
                value = field.options[si].value;
            }
        } else if (field.type == 'radio' || field.type == 'checkbox') {
            if (field.checked) {
                value = field.value;
            }
        } else {
            value = field.value;
        }

        if (trim(value).length == 0) {

            if ((i == 0) && (field.type != 'hidden')) {
                focusField = field;
            }
            fields[i++] = oRequired[x][1];
            isValid = false;
        }
    } else if (field.type == "select-multiple") {
        var numOptions = field.options.length;
        lastSelected=-1;
        for(loop=numOptions-1;loop>=0;loop--) {
            if(field.options[loop].selected) {
                lastSelected = loop;
                value = field.options[loop].value;
                break;
            }
        }
        if(lastSelected < 0 || trim(value).length == 0) {
            if(i == 0) {
                focusField = field;
            }
            fields[i++] = oRequired[x][1];
            isValid=false;
        }
    } else if ((field.length > 0) && (field[0].type == 'radio' || field[0].type == 'checkbox')) {
        isChecked=-1;
        for (loop=0;loop < field.length;loop++) {
            if (field[loop].checked) {
                isChecked=loop;
                break; // only one needs to be checked
            }
        }
        if (isChecked < 0) {
            if (i == 0) {
                focusField = field[0];
            }
            fields[i++] = oRequired[x][1];
            isValid=false;
        }
    }
}
if (fields.length > 0) {
   jcv_handleErrors(fields, focusField);
}
return isValid;
}

// Trim whitespace from left and right sides of s.
function trim(s) {
return s.replace( /^\s*/, "" ).replace( /\s*$/, "" );
}


/*$RCSfile: validateInteger.js,v $ $Rev: 376673 $ $Date: 2006-02-10 13:42:31 +0000 (Fri, 10 Feb 2006) $ */
/**
* Check to see if fields are a valid integer.
* Fields are not checked if they are disabled.
* <p>
* @param form The form validation is taking place on.
*/
function validateInteger(form) {
var bValid = true;
var focusField = null;
var i = 0;
var fields = new Array();

var oInteger = eval('new ' + jcv_retrieveFormName(form) +  '_IntegerValidations()');
for (var x in oInteger) {
    if (!jcv_verifyArrayElement(x, oInteger[x])) {
        continue;
    }
    var field = form[oInteger[x][0]];
    if (!jcv_isFieldPresent(field)) {
      continue;
    }

    if ((field.type == 'hidden' ||
        field.type == 'text' ||
        field.type == 'textarea' ||
        field.type == 'select-one' ||
        field.type == 'radio')) {

        var value = '';
        // get field's value
        if (field.type == "select-one") {
            var si = field.selectedIndex;
            if (si >= 0) {
                value = field.options[si].value;
            }
        } else {
            value = field.value;
        }

        if (value.length > 0) {

            if (!jcv_isDecimalDigits(value)) {
                bValid = false;
                if (i == 0) {
                    focusField = field;
                }
                fields[i++] = oInteger[x][1];

            } else {
                var iValue = parseInt(value, 10);
                if (isNaN(iValue) || !(iValue >= -2147483648 && iValue <= 2147483647)) {
                    if (i == 0) {
                        focusField = field;
                    }
                    fields[i++] = oInteger[x][1];
                    bValid = false;
               }
           }
       }
    }
}
if (fields.length > 0) {
   jcv_handleErrors(fields, focusField);
}
return bValid;
}


/*$RCSfile: validateCreditCard.js,v $ $Rev: 376673 $ $Date: 2006-02-10 13:42:31 +0000 (Fri, 10 Feb 2006) $ */
/**
* Check to see if fields are a valid creditcard number based on Luhn checksum.
* Fields are not checked if they are disabled.
* <p>
* @param form The form validation is taking place on.
*/
function validateCreditCard(form) {
var bValid = true;
var focusField = null;
var i = 0;
var fields = new Array();

var oCreditCard = eval('new ' + jcv_retrieveFormName(form) +  '_creditCard()');

for (var x in oCreditCard) {
    if (!jcv_verifyArrayElement(x, oCreditCard[x])) {
        continue;
    }
    var field = form[oCreditCard[x][0]];
    if (!jcv_isFieldPresent(field)) {
      continue;
    }
    if ((field.type == 'text' ||
         field.type == 'textarea') &&
        (field.value.length > 0)) {
        if (!jcv_luhnCheck(field.value)) {
            if (i == 0) {
                focusField = field;
            }
            fields[i++] = oCreditCard[x][1];
            bValid = false;
        }
    }
}
if (fields.length > 0) {
    jcv_handleErrors(fields, focusField);
}
return bValid;
}

/**
* Checks whether a given credit card number has a valid Luhn checksum.
* This allows you to spot most randomly made-up or garbled credit card numbers immediately.
* Reference: http://www.speech.cs.cmu.edu/~sburke/pub/luhn_lib.html
*/
function jcv_luhnCheck(cardNumber) {
if (jcv_isLuhnNum(cardNumber)) {
    var no_digit = cardNumber.length;
    var oddoeven = no_digit & 1;
    var sum = 0;
    for (var count = 0; count < no_digit; count++) {
        var digit = parseInt(cardNumber.charAt(count));
        if (!((count & 1) ^ oddoeven)) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        };
        sum += digit;
    };
    if (sum == 0) return false;
    if (sum % 10 == 0) return true;
};
return false;
}

function jcv_isLuhnNum(argvalue) {
argvalue = argvalue.toString();
if (argvalue.length == 0) {
    return false;
}
for (var n = 0; n < argvalue.length; n++) {
    if ((argvalue.substring(n, n+1) < "0") ||
        (argvalue.substring(n,n+1) > "9")) {
        return false;
    }
}
return true;
}


/*$RCSfile: validateDate.js,v $ $Rev: 376673 $ $Date: 2006-02-10 13:42:31 +0000 (Fri, 10 Feb 2006) $ */
/**
* Check to see if fields are a valid date.
* Fields are not checked if they are disabled.
* <p>
* @param form The form validation is taking place on.
*/
function validateDate(form) {
var bValid = true;
var focusField = null;
var i = 0;
var fields = new Array();

var oDate = eval('new ' + jcv_retrieveFormName(form) +  '_DateValidations()');

for (var x in oDate) {
    if (!jcv_verifyArrayElement(x, oDate[x])) {
        continue;
    }
   var field = form[oDate[x][0]];
   if (!jcv_isFieldPresent(field)) {
     continue;
   }
   var value = field.value;
   var isStrict = true;
   var datePattern = oDate[x][2]("datePatternStrict");
   // try loose pattern
   if (datePattern == null) {
       datePattern = oDate[x][2]("datePattern");
       isStrict = false;
   }
   if ((field.type == 'hidden' ||
        field.type == 'text' ||
        field.type == 'textarea') &&
       (value.length > 0) && (datePattern.length > 0)) {
         var MONTH = "MM";
         var DAY = "dd";
         var YEAR = "yyyy";
         var orderMonth = datePattern.indexOf(MONTH);
         var orderDay = datePattern.indexOf(DAY);
         var orderYear = datePattern.indexOf(YEAR);
         if ((orderDay < orderYear && orderDay > orderMonth)) {
             var iDelim1 = orderMonth + MONTH.length;
             var iDelim2 = orderDay + DAY.length;
             var delim1 = datePattern.substring(iDelim1, iDelim1 + 1);
             var delim2 = datePattern.substring(iDelim2, iDelim2 + 1);
             if (iDelim1 == orderDay && iDelim2 == orderYear) {
                dateRegexp = isStrict
                     ? new RegExp("^(\\d{2})(\\d{2})(\\d{4})$")
                     : new RegExp("^(\\d{1,2})(\\d{1,2})(\\d{4})$");
             } else if (iDelim1 == orderDay) {
                dateRegexp = isStrict
                     ? new RegExp("^(\\d{2})(\\d{2})[" + delim2 + "](\\d{4})$")
                     : new RegExp("^(\\d{1,2})(\\d{1,2})[" + delim2 + "](\\d{4})$");
             } else if (iDelim2 == orderYear) {
                dateRegexp = isStrict
                     ? new RegExp("^(\\d{2})[" + delim1 + "](\\d{2})(\\d{4})$")
                     : new RegExp("^(\\d{1,2})[" + delim1 + "](\\d{1,2})(\\d{4})$");
             } else {
                dateRegexp = isStrict
                     ? new RegExp("^(\\d{2})[" + delim1 + "](\\d{2})[" + delim2 + "](\\d{4})$")
                     : new RegExp("^(\\d{1,2})[" + delim1 + "](\\d{1,2})[" + delim2 + "](\\d{4})$");
             }
             var matched = dateRegexp.exec(value);
             if(matched != null) {
                if (!jcv_isValidDate(matched[2], matched[1], matched[3])) {
                   if (i == 0) {
                       focusField = field;
                   }
                   fields[i++] = oDate[x][1];
                   bValid =  false;
                }
             } else {
                if (i == 0) {
                    focusField = field;
                }
                fields[i++] = oDate[x][1];
                bValid =  false;
             }
         } else if ((orderMonth < orderYear && orderMonth > orderDay)) {
             var iDelim1 = orderDay + DAY.length;
             var iDelim2 = orderMonth + MONTH.length;
             var delim1 = datePattern.substring(iDelim1, iDelim1 + 1);
             var delim2 = datePattern.substring(iDelim2, iDelim2 + 1);
             if (iDelim1 == orderMonth && iDelim2 == orderYear) {
                 dateRegexp = isStrict
                    ? new RegExp("^(\\d{2})(\\d{2})(\\d{4})$")
                    : new RegExp("^(\\d{1,2})(\\d{1,2})(\\d{4})$");
             } else if (iDelim1 == orderMonth) {
                 dateRegexp = isStrict
                    ? new RegExp("^(\\d{2})(\\d{2})[" + delim2 + "](\\d{4})$")
                    : new RegExp("^(\\d{1,2})(\\d{1,2})[" + delim2 + "](\\d{4})$");
             } else if (iDelim2 == orderYear) {
                 dateRegexp = isStrict
                    ? new RegExp("^(\\d{2})[" + delim1 + "](\\d{2})(\\d{4})$")
                    : new RegExp("^(\\d{1,2})[" + delim1 + "](\\d{1,2})(\\d{4})$");
             } else {
                 dateRegexp = isStrict
                    ? new RegExp("^(\\d{2})[" + delim1 + "](\\d{2})[" + delim2 + "](\\d{4})$")
                    : new RegExp("^(\\d{1,2})[" + delim1 + "](\\d{1,2})[" + delim2 + "](\\d{4})$");
             }
             var matched = dateRegexp.exec(value);
             if(matched != null) {
                 if (!jcv_isValidDate(matched[1], matched[2], matched[3])) {
                     if (i == 0) {
                          focusField = field;
                     }
                     fields[i++] = oDate[x][1];
                     bValid =  false;
                  }
             } else {
                 if (i == 0) {
                     focusField = field;
                 }
                 fields[i++] = oDate[x][1];
                 bValid =  false;
             }
         } else if ((orderMonth > orderYear && orderMonth < orderDay)) {
             var iDelim1 = orderYear + YEAR.length;
             var iDelim2 = orderMonth + MONTH.length;
             var delim1 = datePattern.substring(iDelim1, iDelim1 + 1);
             var delim2 = datePattern.substring(iDelim2, iDelim2 + 1);
             if (iDelim1 == orderMonth && iDelim2 == orderDay) {
                 dateRegexp = isStrict
                    ? new RegExp("^(\\d{4})(\\d{2})(\\d{2})$")
                    : new RegExp("^(\\d{4})(\\d{1,2})(\\d{1,2})$");
             } else if (iDelim1 == orderMonth) {
                 dateRegexp = isStrict
                    ? new RegExp("^(\\d{4})(\\d{2})[" + delim2 + "](\\d{2})$")
                    : new RegExp("^(\\d{4})(\\d{1,2})[" + delim2 + "](\\d{1,2})$");
             } else if (iDelim2 == orderDay) {
                 dateRegexp = isStrict
                    ? new RegExp("^(\\d{4})[" + delim1 + "](\\d{2})(\\d{2})$")
                    : new RegExp("^(\\d{4})[" + delim1 + "](\\d{1,2})(\\d{1,2})$");
             } else {
                 dateRegexp = isStrict
                    ? new RegExp("^(\\d{4})[" + delim1 + "](\\d{2})[" + delim2 + "](\\d{2})$")
                    : new RegExp("^(\\d{4})[" + delim1 + "](\\d{1,2})[" + delim2 + "](\\d{1,2})$");
             }
             var matched = dateRegexp.exec(value);
             if(matched != null) {
                 if (!jcv_isValidDate(matched[3], matched[2], matched[1])) {
                     if (i == 0) {
                         focusField = field;
                     }
                     fields[i++] = oDate[x][1];
                     bValid =  false;
                 }
             } else {
                  if (i == 0) {
                      focusField = field;
                  }
                  fields[i++] = oDate[x][1];
                  bValid =  false;
             }
         } else {
             if (i == 0) {
                 focusField = field;
             }
             fields[i++] = oDate[x][1];
             bValid =  false;
         }
  }
}
if (fields.length > 0) {
  jcv_handleErrors(fields, focusField);
}
return bValid;
}

function jcv_isValidDate(day, month, year) {
if (month < 1 || month > 12) {
    return false;
}
if (day < 1 || day > 31) {
    return false;
}
if ((month == 4 || month == 6 || month == 9 || month == 11) &&
    (day == 31)) {
    return false;
}
if (month == 2) {
    var leap = (year % 4 == 0 &&
       (year % 100 != 0 || year % 400 == 0));
    if (day>29 || (day == 29 && !leap)) {
        return false;
    }
}
return true;
}


/*$RCSfile: validateIntRange.js,v $ $Rev: 376673 $ $Date: 2006-02-10 13:42:31 +0000 (Fri, 10 Feb 2006) $ */
/**
* Check to see if fields is in a valid integer range.
* Fields are not checked if they are disabled.
* <p>
* @param form The form validation is taking place on.
*/
function validateIntRange(form) {
var isValid = true;
var focusField = null;
var i = 0;
var fields = new Array();

var oRange = eval('new ' + jcv_retrieveFormName(form) +  '_intRange()');
for (var x in oRange) {
    if (!jcv_verifyArrayElement(x, oRange[x])) {
        continue;
    }
    var field = form[oRange[x][0]];
    if (jcv_isFieldPresent(field)) {
        var value = '';
        if (field.type == 'hidden' ||
            field.type == 'text' || field.type == 'textarea' ||
            field.type == 'radio' ) {
            value = field.value;
        }
        if (field.type == 'select-one') {
            var si = field.selectedIndex;
            if (si >= 0) {
                value = field.options[si].value;
            }
        }
        if (value.length > 0) {
            var iMin = parseInt(oRange[x][2]("min"));
            var iMax = parseInt(oRange[x][2]("max"));
            var iValue = parseInt(value, 10);
            if (!(iValue >= iMin && iValue <= iMax)) {
                if (i == 0) {
                    focusField = field;
                }
                fields[i++] = oRange[x][1];
                isValid = false;
            }
        }
    }
}
if (fields.length > 0) {
    jcv_handleErrors(fields, focusField);
}
return isValid;
}


/*$RCSfile: validateShort.js,v $ $Rev: 376673 $ $Date: 2006-02-10 13:42:31 +0000 (Fri, 10 Feb 2006) $ */
/**
*  Check to see if fields are a valid short.
* Fields are not checked if they are disabled.
* <p>
* @param form The form validation is taking place on.
*/
function validateShort(form) {
var bValid = true;
var focusField = null;
var i = 0;
var fields = new Array();

var oShort = eval('new ' + jcv_retrieveFormName(form) +  '_ShortValidations()');

for (var x in oShort) {
    if (!jcv_verifyArrayElement(x, oShort[x])) {
        continue;
    }
    var field = form[oShort[x][0]];
    if (!jcv_isFieldPresent(field)) {
      continue;
    }

    if ((field.type == 'hidden' ||
        field.type == 'text' ||
        field.type == 'textarea' ||
        field.type == 'select-one' ||
        field.type == 'radio')) {

        var value = '';
        // get field's value
        if (field.type == "select-one") {
            var si = field.selectedIndex;
            if (si >= 0) {
                value = field.options[si].value;
            }
        } else {
            value = field.value;
        }

        if (value.length > 0) {
            if (!jcv_isDecimalDigits(value)) {
                bValid = false;
                if (i == 0) {
                    focusField = field;
                }
                fields[i++] = oShort[x][1];

            } else {

                var iValue = parseInt(value, 10);
                if (isNaN(iValue) || !(iValue >= -32768 && iValue <= 32767)) {
                    if (i == 0) {
                        focusField = field;
                    }
                    fields[i++] = oShort[x][1];
                    bValid = false;
                }
           }
       }
    }
}
if (fields.length > 0) {
   jcv_handleErrors(fields, focusField);
}
return bValid;
}


/*$RCSfile: validateFloat.js,v $ $Rev: 376673 $ $Date: 2006-02-10 13:42:31 +0000 (Fri, 10 Feb 2006) $ */
/**
* Check to see if fields are a valid float.
* Fields are not checked if they are disabled.
* <p>
* @param form The form validation is taking place on.
*/
function validateFloat(form) {
var bValid = true;
var focusField = null;
var i = 0;
var fields = new Array();

var oFloat = eval('new ' + jcv_retrieveFormName(form) +  '_FloatValidations()');
for (var x in oFloat) {
    if (!jcv_verifyArrayElement(x, oFloat[x])) {
        continue;
    }
	var field = form[oFloat[x][0]];
    if (!jcv_isFieldPresent(field)) {
      continue;
    }

    if ((field.type == 'hidden' ||
        field.type == 'text' ||
        field.type == 'textarea' ||
        field.type == 'select-one' ||
        field.type == 'radio')) {

    	var value = '';
        // get field's value
        if (field.type == "select-one") {
            var si = field.selectedIndex;
            if (si >= 0) {
                value = field.options[si].value;
            }
        } else {
            value = field.value;
        }

        if (value.length > 0) {
            // remove '.' before checking digits
            var tempArray = value.split('.');
            //Strip off leading '0'
            var zeroIndex = 0;
            var joinedString= tempArray.join('');
            while (joinedString.charAt(zeroIndex) == '0') {
                zeroIndex++;
            }
            var noZeroString = joinedString.substring(zeroIndex,joinedString.length);

            if (!jcv_isAllDigits(noZeroString) || tempArray.length > 2) {
                bValid = false;
                if (i == 0) {
                    focusField = field;
                }
                fields[i++] = oFloat[x][1];

            } else {
            var iValue = parseFloat(value);
            if (isNaN(iValue)) {
                if (i == 0) {
                    focusField = field;
                }
                fields[i++] = oFloat[x][1];
                bValid = false;
            }
            }
        }
    }
}
if (fields.length > 0) {
   jcv_handleErrors(fields, focusField);
}
return bValid;
}


/*$RCSfile: validateEmail.js,v $ $Rev: 376673 $ $Date: 2006-02-10 13:42:31 +0000 (Fri, 10 Feb 2006) $ */
/**
* Check to see if fields are a valid email address.
* Fields are not checked if they are disabled.
* <p>
* @param form The form validation is taking place on.
*/
function validateEmail(form) {
var bValid = true;
var focusField = null;
var i = 0;
var fields = new Array();

var oEmail = eval('new ' + jcv_retrieveFormName(form) +  '_email()');

for (var x in oEmail) {
    if (!jcv_verifyArrayElement(x, oEmail[x])) {
        continue;
    }
    var field = form[oEmail[x][0]];
    if (!jcv_isFieldPresent(field)) {
      continue;
    }
    if ((field.type == 'hidden' ||
         field.type == 'text' ||
         field.type == 'textarea') &&
        (field.value.length > 0)) {
        if (!jcv_checkEmail(field.value)) {
            if (i == 0) {
                focusField = field;
            }
            fields[i++] = oEmail[x][1];
            bValid = false;
        }
    }
}
if (fields.length > 0) {
    jcv_handleErrors(fields, focusField);
}
return bValid;
}

/**
* Reference: Sandeep V. Tamhankar (stamhankar@hotmail.com),
* http://javascript.internet.com
*/
function jcv_checkEmail(emailStr) {
if (emailStr.length == 0) {
    return true;
}
// TLD checking turned off by default
var checkTLD=0;
var knownDomsPat=/^(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum)$/;
var emailPat=/^(.+)@(.+)$/;
var specialChars="\\(\\)><@,;:\\\\\\\"\\.\\[\\]";
var validChars="\[^\\s" + specialChars + "\]";
var quotedUser="(\"[^\"]*\")";
var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;
var atom=validChars + '+';
var word="(" + atom + "|" + quotedUser + ")";
var userPat=new RegExp("^" + word + "(\\." + word + ")*$");
var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$");
var matchArray=emailStr.match(emailPat);
if (matchArray==null) {
    return false;
}
var user=matchArray[1];
var domain=matchArray[2];
for (i=0; i<user.length; i++) {
    if (user.charCodeAt(i)>127) {
        return false;
    }
}
for (i=0; i<domain.length; i++) {
    if (domain.charCodeAt(i)>127) {
        return false;
    }
}
if (user.match(userPat)==null) {
    return false;
}
var IPArray=domain.match(ipDomainPat);
if (IPArray!=null) {
    for (var i=1;i<=4;i++) {
        if (IPArray[i]>255) {
            return false;
        }
    }
    return true;
}
var atomPat=new RegExp("^" + atom + "$");
var domArr=domain.split(".");
var len=domArr.length;
for (i=0;i<len;i++) {
    if (domArr[i].search(atomPat)==-1) {
        return false;
    }
}
if (checkTLD && domArr[domArr.length-1].length!=2 &&
    domArr[domArr.length-1].search(knownDomsPat)==-1) {
    return false;
}
if (len<2) {
    return false;
}
return true;
}


/*$RCSfile: validateMask.js,v $ $Rev: 376673 $ $Date: 2006-02-10 13:42:31 +0000 (Fri, 10 Feb 2006) $ */
/**
* Check to see if fields are a valid using a regular expression.
* Fields are not checked if they are disabled.
* <p>
* @param form The form validation is taking place on.
*/
function validateMask(form) {
var isValid = true;
var focusField = null;
var i = 0;
var fields = new Array();

var oMasked = eval('new ' + jcv_retrieveFormName(form) +  '_mask()');
for (var x in oMasked) {
    if (!jcv_verifyArrayElement(x, oMasked[x])) {
        continue;
    }
    var field = form[oMasked[x][0]];
    if (!jcv_isFieldPresent(field)) {
      continue;
    }

    if ((field.type == 'hidden' ||
        field.type == 'text' ||
         field.type == 'textarea' ||
		 field.type == 'file') &&
         (field.value.length > 0)) {

        if (!jcv_matchPattern(field.value, oMasked[x][2]("mask"))) {
            if (i == 0) {
                focusField = field;
            }
            fields[i++] = oMasked[x][1];
            isValid = false;
        }
    }
}

if (fields.length > 0) {
   jcv_handleErrors(fields, focusField);
}
return isValid;
}

function jcv_matchPattern(value, mask) {
return mask.exec(value);
}


/*$RCSfile: validateMinLength.js,v $ $Rev: 376673 $ $Date: 2006-02-10 13:42:31 +0000 (Fri, 10 Feb 2006) $ */
/**
* A field is considered valid if greater than the specified minimum.
* Fields are not checked if they are disabled.
* <p>
* <strong>Caution:</strong> Using <code>validateMinLength</code> on a password field in a
*  login page gives unnecessary information away to hackers. While it only slightly
*  weakens security, we suggest using it only when modifying a password.</p>
* @param form The form validation is taking place on.
*/
function validateMinLength(form) {
var isValid = true;
var focusField = null;
var i = 0;
var fields = new Array();

var oMinLength = eval('new ' + jcv_retrieveFormName(form) +  '_minlength()');

for (var x in oMinLength) {
    if (!jcv_verifyArrayElement(x, oMinLength[x])) {
        continue;
    }
    var field = form[oMinLength[x][0]];
    if (!jcv_isFieldPresent(field)) {
      continue;
    }

    if ((field.type == 'hidden' ||
        field.type == 'text' ||
        field.type == 'password' ||
        field.type == 'textarea')) {

        /* Adjust length for carriage returns - see Bug 37962 */
        var lineEndLength = oMinLength[x][2]("lineEndLength");
        var adjustAmount = 0;
        if (lineEndLength) {
            var rCount = 0;
            var nCount = 0;
            var crPos = 0;
            while (crPos < field.value.length) {
                var currChar = field.value.charAt(crPos);
                if (currChar == '\r') {
                    rCount++;
                }
                if (currChar == '\n') {
                    nCount++;
                }
                crPos++;
            }
            var endLength = parseInt(lineEndLength);
            adjustAmount = (nCount * endLength) - (rCount + nCount);
        }

        var iMin = parseInt(oMinLength[x][2]("minlength"));
        if ((trim(field.value).length > 0) && ((field.value.length + adjustAmount) < iMin)) {
            if (i == 0) {
                focusField = field;
            }
            fields[i++] = oMinLength[x][1];
            isValid = false;
        }
    }
}
if (fields.length > 0) {
   jcv_handleErrors(fields, focusField);
}
return isValid;
}

/* End validation routines */

/* Janrain scripts Begin */

var doMHSocialSignUp = function(mhRegURL, mhLoginCallback) {
  var left = ($(window).width()-593)/2.0;
  var top = ($(window).height()-485)/2.0;
  if(left<0) {
	left = 0;
  }
  if(top<0) {
	top = 0;
  }
  $('#rpxnow-main-lightbox').css({'display':'block'});
  $('#rpxnow_lightbox_container').css({'left':left});
  $('#rpxnow_lightbox_container').css({'top':top});
  $('#rpxnow_lightbox_container').css({'height':500});
  $('#rpxnow_lightbox_container').load('/sites/all/themes/zen_ninesixty/includes/social/socialbtnmain.php?mhRegURL='+mhRegURL+'&lgCallback='+mhLoginCallback);
}

var noMHSignUp =  function() {
  $('#rpxnow-main-lightbox').css({'display':'none'});
}

var noop = function(){}

/* Janrain scripts End*/
;
/*!
 * The following copyright notice may not be removed under any circumstances.
 * 
 * Copyright:
 * Copyright (c) The Font Bureau, Inc., 2003. All rights reserved.
 * 
 * Trademark:
 * HerounMHSans Bold is a trademark of The Font Bureau, Inc..
 * 
 * Full name:
 * HerounMHSans-Bold
 * 
 * Manufacturer:
 * The Font Bureau, Inc.
 * 
 * Designer:
 * Cyrus Highsmith
 * 
 * Vendor URL:
 * http://www.fontbureau.com
 */

Cufon.registerFont({"w":561,"face":{"font-family":"heroun","font-weight":700,"font-stretch":"normal","units-per-em":"1000","panose-1":"2 0 5 3 4 0 0 2 0 3","ascent":"800","descent":"-200","x-height":"6","bbox":"-31 -875 1160 204","underline-thickness":"50","underline-position":"-50","stemh":"145","stemv":"175","unicode-range":"U+0020-U+007E"},"glyphs":{" ":{"w":175},"\u00a0":{"w":175},"!":{"d":"77,0r0,-165r190,0r0,165r-190,0xm86,-219r-7,-531r187,0r-7,531r-173,0","w":345},"\"":{"d":"71,-469r-7,-281r156,0r-7,281r-142,0xm304,-469r-8,-281r156,0r-8,281r-140,0","w":516,"k":{"J":57,"A":59,"1":-20}},"#":{"d":"100,0r22,-191r-73,0r0,-143r91,0r8,-75r-99,0r0,-143r115,0r23,-198r167,0r-24,198r96,0r23,-198r166,0r-23,198r75,0r0,143r-92,0r-8,75r100,0r0,143r-117,0r-22,191r-167,0r23,-191r-96,0r-22,191r-166,0xm306,-334r95,0r8,-75r-95,0","w":717},"$":{"d":"205,124r0,-131v-140,-25,-175,-112,-186,-218r187,-27v8,83,23,101,93,101v79,0,95,-27,95,-84v0,-43,-26,-56,-99,-73v-130,-31,-261,-45,-261,-220v0,-107,33,-190,171,-215r0,-132r178,0r0,129v149,21,177,105,187,215r-186,27v-6,-76,-19,-96,-81,-96v-63,0,-82,22,-82,66v0,50,37,58,120,76v133,29,240,48,240,217v0,126,-31,216,-198,237r0,128r-178,0","w":600},"%":{"d":"252,-279v-212,0,-221,-105,-221,-280v0,-119,48,-197,221,-197v211,0,223,103,223,279v0,118,-49,198,-223,198xm253,-412v78,0,62,-77,63,-147v0,-42,-18,-65,-63,-65v-78,0,-63,77,-64,148v0,40,19,64,64,64xm937,6v-211,0,-221,-105,-221,-279v0,-119,48,-198,221,-198v210,0,223,104,223,280v0,117,-49,197,-223,197xm938,-126v78,0,63,-77,64,-148v0,-41,-19,-65,-64,-65v-78,0,-62,78,-63,148v0,40,18,65,63,65xm259,0r495,-750r178,0r-495,750r-178,0","w":1191},"&":{"d":"278,6v-202,0,-274,-75,-274,-218v0,-109,36,-158,125,-201v-40,-55,-54,-95,-54,-149v0,-123,58,-194,225,-194v172,0,207,74,207,187v0,91,-41,142,-144,193r96,116r37,-157r147,0v-24,95,-38,207,-80,282r112,135r-196,0r-25,-28v-46,22,-103,34,-176,34xm181,-215v0,76,104,88,175,71r-141,-165v-33,23,-34,47,-34,94xm236,-569v0,35,8,49,44,93v67,-32,78,-54,78,-92v0,-39,-20,-55,-58,-55v-38,0,-64,20,-64,54","w":682,"k":{"z":-23,"x":-24,"Z":-34,"Y":23,"X":-23,"T":37,"A":-12}},"'":{"d":"71,-469r-7,-281r167,0r-7,281r-153,0","w":295,"k":{"J":57,"A":59,"1":-20}},"(":{"d":"293,188v-183,0,-252,-82,-252,-251r0,-437v0,-169,69,-250,252,-250r88,0r0,159v-101,1,-162,-21,-162,112r0,395v-8,133,59,112,162,113r0,159r-88,0","w":403,"k":{"j":-34,"Z":-11,"Y":-11,"W":-23,"V":-23,"T":-23}},")":{"d":"22,188r0,-159v102,-1,162,20,162,-113r0,-395v8,-132,-59,-111,-162,-112r0,-159r87,0v184,0,253,81,253,250r0,437v0,169,-69,251,-253,251r-87,0","w":403},"*":{"d":"175,-309r-104,-80r92,-115r-139,-46r37,-110r142,55r-6,-148r128,0r-7,148r145,-54r37,109r-141,46r95,115r-104,80r-90,-132","w":521},"+":{"d":"197,-156r0,-150r-134,0r0,-142r134,0r0,-146r166,0r0,146r135,0r0,142r-135,0r0,150r-166,0","w":560},",":{"d":"80,131r56,-131r-86,0r0,-194r200,0r0,194r-56,131r-114,0","w":300,"k":{"z":-11,"y":24,"w":24,"v":24,"t":24,"Z":-23,"Y":84,"W":37,"V":37,"T":67,"J":-23,"8":20,"7":34,"4":30,"3":20,"1":37,"0":20}},"-":{"d":"31,-204r0,-165r375,0r0,165r-375,0","w":438,"k":{"Y":46,"T":46,"7":20,"1":24}},"\u00ad":{"d":"31,-204r0,-165r375,0r0,165r-375,0","w":438},".":{"d":"50,0r0,-194r200,0r0,194r-200,0","w":300,"k":{"z":-11,"y":24,"w":24,"v":24,"t":24,"Z":-23,"Y":84,"W":37,"V":37,"T":67,"J":-23,"8":20,"7":34,"4":30,"3":20,"1":37,"0":20}},"\/":{"d":"-19,0r321,-750r178,0r-323,750r-176,0","w":461,"k":{"z":50,"y":37,"x":37,"w":37,"v":37,"u":61,"s":73,"r":61,"q":73,"p":61,"o":73,"n":61,"m":61,"j":1,"i":1,"g":73,"e":73,"d":73,"c":73,"a":73,"Z":-28,"Y":-47,"X":-23,"W":-36,"V":-36,"U":-11,"T":-37,"J":37,"A":23,"7":-24,"4":23,"1":-30}},"0":{"d":"319,6v-176,0,-288,-81,-288,-256r0,-250v0,-176,113,-256,288,-256v175,0,287,80,287,256r0,250v0,175,-112,256,-287,256xm319,-162v82,0,100,-38,100,-111r0,-204v0,-75,-18,-112,-100,-112v-83,0,-100,37,-100,112r0,204v0,73,17,111,100,111","w":638,"k":{"7":22,"4":-5,"1":12,".":20,",":20}},"1":{"d":"122,0r0,-591r-113,0r24,-159r276,0r0,750r-187,0","w":383,"k":{"3":12}},"2":{"d":"27,0r0,-158v0,-159,111,-204,226,-261v109,-53,132,-55,132,-108v0,-54,-21,-70,-88,-70v-58,0,-91,14,-94,96r-177,-15v7,-127,43,-240,267,-240v255,0,274,110,274,229v0,140,-91,172,-216,237v-114,59,-145,63,-143,128r368,0r0,162r-549,0","w":595,"k":{"9":-17,"4":15,"3":12,"\/":-46}},"3":{"d":"298,6v-224,0,-265,-102,-277,-246r176,-15v6,75,28,102,101,102v69,0,93,-26,93,-81v0,-108,-123,-72,-215,-78r0,-147r122,0v70,0,87,-27,87,-75v0,-40,-16,-63,-87,-63v-73,0,-89,26,-95,91r-176,-15v11,-127,60,-235,271,-235v205,0,269,65,269,187v0,97,-33,149,-99,169v82,22,105,73,105,187v0,147,-72,219,-275,219","w":603,"k":{"9":-5,"8":-6,"4":-5,".":30,",":30}},"4":{"d":"367,0r0,-139r-339,0r0,-148r275,-463r194,0r-277,463r147,0r0,-153r171,0r0,153r83,0r0,148r-83,0r0,139r-171,0","w":644,"k":{"9":-7,"7":33,"4":-5,"2":-10,"1":12,"0":-5}},"5":{"d":"303,6v-204,0,-261,-75,-277,-246r176,-15v5,77,27,102,101,102v91,-1,93,-44,93,-120v0,-62,-22,-87,-100,-87v-36,0,-81,11,-103,24r-152,-46r11,-368r490,0r-20,162r-309,0r-5,123v27,-23,79,-39,129,-39v145,0,236,32,236,218v0,204,-49,292,-270,292","w":603,"k":{"7":23,"4":-5,"1":12}},"6":{"d":"308,6v-164,0,-276,-72,-276,-230r0,-276v0,-176,103,-256,274,-256v152,0,261,51,275,219r-176,14v-4,-52,-32,-75,-99,-75v-87,0,-102,61,-96,148v26,-18,62,-38,139,-38v171,0,236,77,236,258v0,169,-106,236,-277,236xm308,-158v75,0,99,-36,99,-104v0,-56,-33,-77,-99,-77v-74,0,-98,29,-98,99v0,52,33,82,98,82","w":612,"k":{"7":12,"5":12,"4":-5,"3":12,"1":12}},"7":{"d":"106,0r231,-591r-318,0r22,-159r486,0r0,159r-232,591r-189,0","w":546,"k":{";":15,":":15,"7":-10,"4":35,"1":-30,".":91,",":91,"'":-21,"\"":-21}},"8":{"d":"308,6v-208,0,-281,-98,-281,-199v0,-105,10,-176,104,-212v-83,-34,-98,-82,-98,-172v0,-107,95,-179,275,-179v191,0,274,63,274,205v0,70,-23,117,-98,146v97,37,105,106,105,212v0,101,-73,199,-281,199xm308,-143v67,0,104,-30,104,-102v0,-57,-44,-85,-104,-85v-67,1,-104,33,-104,105v0,57,44,82,104,82xm308,-458v63,-1,96,-23,96,-86v0,-47,-40,-64,-96,-64v-64,1,-97,19,-97,83v0,47,41,67,97,67","w":616,"k":{"7":10,"3":12,"1":12,".":20,",":20}},"9":{"d":"306,6v-152,0,-261,-51,-275,-219r176,-14v4,52,32,75,99,75v87,0,102,-61,96,-148v-26,18,-62,38,-139,38v-171,0,-236,-77,-236,-258v0,-169,106,-236,277,-236v164,0,276,72,276,230r0,276v0,176,-103,256,-274,256xm304,-411v74,0,98,-29,98,-99v0,-52,-33,-82,-98,-82v-75,0,-99,36,-99,104v0,56,33,77,99,77","w":612,"k":{"7":23,"3":23,"1":11,"\/":11}},":":{"d":"55,0r0,-184r200,0r0,184r-200,0xm55,-339r0,-184r200,0r0,184r-200,0","w":310,"k":{"7":34}},";":{"d":"85,131r56,-131r-86,0r0,-184r200,0r0,184r-56,131r-114,0xm55,-339r0,-184r200,0r0,184r-200,0","w":310,"k":{"7":34}},"<":{"d":"498,-139r-435,-156r0,-153r435,-157r0,143r-280,92r280,88r0,143","w":560},"=":{"d":"63,-196r0,-144r435,0r0,144r-435,0xm63,-414r0,-144r435,0r0,144r-435,0","w":560},">":{"d":"63,-139r0,-143r279,-88r-279,-92r0,-143r435,157r0,153","w":560},"?":{"d":"178,-219v-4,-119,23,-141,121,-216v52,-39,77,-58,77,-94v0,-44,-18,-73,-83,-73v-59,0,-89,19,-96,96r-176,-15v11,-141,63,-235,269,-235v164,0,266,45,266,213v0,103,-68,156,-124,201v-74,59,-78,53,-76,123r-178,0xm172,0r0,-165r190,0r0,165r-190,0","w":581},"@":{"d":"451,188v-243,0,-408,-56,-408,-270r0,-400v0,-179,165,-274,408,-274v248,0,418,95,418,274r0,266v0,126,-71,195,-182,195r-176,0r0,-20v-21,14,-68,26,-102,26v-193,4,-165,-153,-165,-321v0,-114,27,-191,169,-191v33,0,78,11,98,24r0,-18r151,0r0,387v67,4,91,-15,91,-97r0,-235v0,-121,-121,-187,-302,-187v-182,0,-291,66,-291,187r0,380v0,118,108,169,291,169r235,0r0,105r-235,0xm450,-148v45,0,61,-23,61,-63r0,-149v-2,-21,-29,-35,-61,-35v-90,-1,-57,109,-57,184v0,40,10,63,57,63","w":912,"k":{"Y":30,"T":30}},"A":{"d":"13,0r218,-756r190,0r219,756r-187,0r-36,-128r-182,0r-36,128r-186,0xm273,-278r106,0r-53,-189","w":653,"k":{"y":13,"w":13,"v":23,"u":11,"t":11,"r":-10,"f":11,"Y":81,"W":54,"V":76,"U":21,"T":66,"S":20,"Q":21,"O":21,"J":-10,"G":21,"C":21,"?":46,"\/":-37,"*":59,"'":59,"\"":59}},"B":{"d":"56,0r0,-750r257,0v208,1,282,54,281,190v0,85,-28,132,-110,155v112,24,122,94,122,214v0,135,-73,191,-281,191r-269,0xm244,-153r100,0v80,2,81,-33,81,-100v0,-50,-15,-70,-81,-70r-100,0r0,170xm244,-461r81,0v78,0,81,-21,81,-80v0,-40,-15,-56,-81,-56r-81,0r0,136","w":625,"k":{"o":-10,"e":-10,"d":-10,"c":-10,"a":-10,"Z":-16,"Y":23,"X":12,"W":11,"V":11,"T":12,"O":-10,"&":-5}},"C":{"d":"313,6v-167,0,-282,-81,-282,-256r0,-250v0,-176,117,-256,282,-256v165,0,263,50,280,243r-187,27v-6,-69,-16,-103,-93,-103v-78,0,-94,50,-94,112r0,204v0,61,15,111,94,111v77,0,86,-31,92,-103r188,28v-20,185,-115,243,-280,243","w":611,"k":{"y":10,"w":10,"u":10,"s":10,"o":10,"e":10,"a":10,"Z":10,"Y":45,"X":20,"W":10,"V":30,"T":10,"J":12,"A":21}},"D":{"d":"56,0r0,-750r269,0v175,0,281,74,281,250r0,250v0,175,-106,250,-281,250r-269,0xm244,-168r81,0v83,0,94,-32,94,-105r0,-204v0,-75,-11,-105,-94,-105r-81,0r0,414","w":638,"k":{"Y":20,"J":12}},"E":{"d":"56,0r0,-750r487,0r-30,168r-269,0r0,115r174,0r0,174r-174,0r0,125r269,0r30,168r-487,0","w":558,"k":{"}":-10,"y":24,"w":24,"v":24,"u":24,"t":24,"s":24,"q":24,"o":24,"g":24,"f":24,"e":24,"d":24,"c":24,"a":5,"\\":-11,"Z":-10,"Y":1,"U":5,"S":5,"Q":12,"O":12,"G":12,"C":12,"\/":-24}},"F":{"d":"56,0r0,-750r487,0r-30,168r-269,0r0,115r174,0r0,174r-174,0r0,293r-188,0","w":535,"k":{"}":-37,"z":49,"y":61,"x":37,"w":37,"v":37,"u":89,"t":24,"s":61,"r":49,"q":96,"p":49,"o":86,"n":49,"m":49,"j":12,"i":12,"g":96,"f":46,"e":86,"d":96,"c":61,"a":96,"]":-24,"\\":-38,"Z":-10,"Y":-7,"W":-24,"V":-24,"T":-24,"Q":5,"O":5,"J":80,"G":5,"F":11,"C":5,"A":82,"@":34,";":71,":":71,"\/":47,".":130,"-":57,",":130,"*":-10,")":-24,"'":-20,"&":60,"\"":-20,"!":23}},"G":{"d":"313,6v-167,0,-282,-81,-282,-256r0,-250v0,-176,117,-256,282,-256v165,0,263,49,280,243r-187,27v-6,-70,-16,-103,-93,-103v-78,0,-94,50,-94,112r0,204v0,61,15,111,94,111v85,1,99,-34,98,-110r-100,0r0,-153r282,0r0,161v0,205,-115,270,-280,270","w":624,"k":{"w":-12,"v":-12,"u":-12,"t":-12,"s":-18,"r":-12,"q":-18,"p":-12,"o":-18,"n":-12,"m":-12,"l":-12,"k":-12,"j":-12,"i":-12,"h":-12,"g":-18,"f":-12,"e":-18,"d":-18,"c":-18,"b":-12,"a":3,"Y":43,"X":20,"W":10,"V":30,"T":20,"A":10}},"H":{"d":"56,0r0,-750r188,0r0,260r187,0r0,-260r188,0r0,750r-188,0r0,-316r-187,0r0,316r-188,0","w":675},"I":{"d":"63,0r0,-750r187,0r0,750r-187,0","w":313},"J":{"d":"13,0r0,-168v89,3,131,-2,131,-101r0,-481r187,0r0,496v0,166,-42,254,-272,254r-46,0","w":375,"k":{"J":12}},"K":{"d":"56,0r0,-750r188,0r0,235r168,-235r193,0r-210,290r221,460r-201,0r-141,-293r-30,41r0,252r-188,0","w":623,"k":{"y":34,"w":34,"u":25,"o":30,"e":30,"c":30,"a":20,"\\":-34,"Y":10,"V":10,"U":10,"S":20,"Q":30,"O":30,"G":30,"C":30,"\/":-36}},"L":{"d":"56,0r0,-750r188,0r0,582r269,0r30,168r-487,0","w":555,"k":{"y":54,"x":-12,"w":54,"v":54,"u":20,"o":10,"e":10,"\\":69,"Z":-12,"Y":126,"X":-2,"W":89,"V":90,"U":43,"T":116,"S":25,"Q":32,"O":32,"L":5,"J":-12,"G":32,"C":32,"?":61,"\/":-37,".":-24,",":-24,"*":73,"'":134,"\"":134}},"M":{"d":"56,0r0,-750r233,0r129,485r127,-485r233,0r0,750r-188,0r0,-372r-92,372r-163,0r-97,-372r0,372r-182,0","w":834},"N":{"d":"56,0r0,-750r194,0r188,392r0,-392r181,0r0,750r-185,0r-195,-409r0,409r-183,0","w":675},"O":{"d":"319,6v-176,0,-288,-81,-288,-256r0,-250v0,-176,113,-256,288,-256v175,0,287,80,287,256r0,250v0,175,-112,256,-287,256xm319,-162v82,0,100,-38,100,-111r0,-204v0,-75,-18,-112,-100,-112v-83,0,-100,37,-100,112r0,204v0,73,17,111,100,111","w":638,"k":{"Z":1,"Y":45,"X":23,"W":11,"V":31,"T":22,"J":5,"A":21}},"P":{"d":"56,0r0,-750r282,0v224,1,268,88,268,283v0,142,-76,212,-268,212r-94,0r0,255r-188,0xm244,-417r100,0v81,2,81,-35,81,-102v0,-49,-15,-69,-81,-69r-100,0r0,171","w":625,"k":{"z":12,"y":-12,"w":-12,"v":-12,"u":22,"t":-12,"s":20,"r":12,"q":12,"p":12,"o":32,"n":12,"m":12,"j":12,"i":12,"g":12,"f":-12,"e":32,"d":12,"c":12,"a":44,"Z":12,"Y":13,"X":23,"W":4,"V":4,"U":-5,"Q":-12,"O":-12,"J":36,"G":-12,"C":-12,"A":50,"\/":24,".":108,",":108}},"Q":{"d":"409,124r-59,-124v-191,10,-319,-65,-319,-250r0,-250v0,-176,113,-256,288,-256v175,0,287,80,287,256r0,250v0,88,-31,153,-85,195r85,179r-197,0xm319,-162v82,0,100,-38,100,-111r0,-204v0,-75,-18,-112,-100,-112v-83,0,-100,37,-100,112r0,204v0,73,17,111,100,111","w":638,"k":{"Y":45,"X":20,"W":10,"V":30,"T":22,"A":21}},"R":{"d":"56,0r0,-750r282,0v224,1,268,88,268,283v0,102,-39,166,-131,195r131,272r-197,0r-123,-255r-42,0r0,255r-188,0xm244,-417r100,0v81,2,81,-35,81,-102v0,-49,-15,-69,-81,-69r-100,0r0,171","w":633,"k":{"Z":-11,"Y":11,"U":-9,"Q":-9,"O":-9,"G":-9,"C":-9,"\/":-12}},"S":{"d":"299,6v-220,0,-266,-105,-280,-231r187,-27v8,83,23,96,93,96v79,0,95,-22,95,-79v0,-43,-26,-56,-99,-73v-130,-31,-261,-45,-261,-220v0,-129,49,-228,269,-228v220,0,256,97,267,225r-186,27v-6,-76,-19,-90,-81,-90v-63,0,-82,16,-82,60v0,50,37,58,120,76v133,29,240,48,240,217v0,144,-40,247,-282,247","w":600,"k":{"x":-12,"w":-12,"v":-12,"u":-12,"t":-12,"s":-12,"r":-12,"q":-12,"p":-12,"o":-12,"n":-12,"m":-12,"l":-12,"k":-12,"j":-12,"i":-12,"h":-12,"g":-12,"e":-12,"d":-12,"c":-12,"b":-12,"a":-14,"Z":-11,"Y":33,"X":10,"W":10,"V":20,"T":5,"S":-11,"A":10,"&":-11}},"T":{"d":"200,0r0,-582r-187,0r0,-168r562,0r0,168r-187,0r0,582r-188,0","w":588,"k":{"}":-23,"z":84,"y":61,"x":84,"w":84,"v":84,"u":76,"t":37,"s":84,"r":76,"q":96,"p":76,"o":96,"n":76,"m":76,"l":12,"k":12,"j":24,"i":24,"h":12,"g":96,"f":37,"e":96,"d":96,"c":96,"b":12,"a":96,"]":-23,"\\":-37,"T":-15,"S":5,"Q":22,"O":22,"J":48,"G":22,"C":22,"A":66,"@":30,";":67,":":67,"\/":12,".":67,"-":46,",":67,"*":-10,")":-23,"&":37}},"U":{"d":"325,6v-176,0,-281,-81,-281,-256r0,-500r187,0r0,477v0,73,12,111,94,111v83,0,94,-38,94,-111r0,-477r187,0r0,500v0,175,-106,256,-281,256","w":650,"k":{"A":21}},"V":{"d":"231,6r-218,-756r187,0r127,460r127,-460r186,0r-219,756r-190,0","w":653,"k":{"}":-11,"z":18,"y":35,"x":12,"w":12,"v":12,"u":61,"t":40,"s":24,"r":51,"q":59,"p":31,"o":69,"n":31,"m":31,"j":12,"i":12,"g":59,"e":69,"d":59,"c":24,"a":59,"]":-23,"\\":-34,"Y":10,"S":20,"Q":30,"O":31,"G":30,"C":30,"A":76,".":37,",":37,")":-23,"&":11}},"W":{"d":"194,6r-188,-756r188,0r94,406r95,-406r175,0r93,406r95,-406r183,0r-188,756r-181,0r-92,-399r-93,399r-181,0","w":935,"k":{"}":-11,"z":24,"y":35,"x":12,"w":12,"v":12,"u":31,"s":24,"r":31,"q":59,"p":31,"o":59,"n":31,"m":31,"j":12,"i":12,"g":59,"e":59,"d":59,"c":24,"a":59,"]":-11,"\\":-34,"S":10,"Q":10,"O":11,"G":10,"C":10,"A":54,".":37,",":37,")":-23,"&":11}},"X":{"d":"211,-392r-193,-358r186,0r103,190r103,-190r184,0r-194,362r211,388r-188,0r-118,-218r-119,218r-186,0","w":611,"k":{"y":12,"u":23,"q":23,"o":23,"g":23,"e":23,"d":23,"\\":-11,"Y":20,"S":10,"Q":22,"O":23,"G":22,"C":22,"\/":-35}},"Y":{"d":"226,0r0,-313r-220,-437r189,0r126,266r128,-266r185,0r-220,437r0,313r-188,0","w":640,"k":{"}":-11,"z":61,"y":49,"x":49,"w":49,"v":49,"u":89,"t":74,"s":96,"r":49,"q":108,"p":89,"o":108,"n":49,"m":49,"l":12,"k":12,"j":24,"i":24,"g":108,"f":24,"e":108,"d":108,"c":73,"b":12,"a":108,"]":-11,"\\":-24,"S":33,"Q":45,"O":45,"J":24,"G":45,"C":45,"A":81,"@":30,";":37,":":37,"\/":23,".":84,"-":46,",":84,")":-11,"&":35}},"Z":{"d":"13,0r0,-162r303,-426r-291,0r0,-162r506,0r0,162r-303,426r316,0r0,162r-531,0","w":556,"k":{"}":-11,"z":-23,"y":36,"w":24,"v":24,"u":13,"q":13,"o":13,"i":12,"g":13,"e":13,"d":13,"c":1,"a":-6,"]":-11,"\\":-23,"Z":-17,"Q":1,"O":1,"J":-23,"G":1,"C":1,"A":-5,"\/":-46,".":-23,",":-23,")":-11,"&":-11}},"[":{"d":"41,188r0,-938r339,0r0,160r-161,0r0,619r161,0r0,159r-339,0","w":403,"k":{"j":-34,"Z":-11,"Y":-11,"W":-11,"V":-23,"T":-23}},"\\":{"d":"304,0r-323,-750r178,0r321,750r-176,0","w":461,"k":{"z":-36,"x":-24,"s":-11,"q":-12,"o":-12,"k":-11,"j":-11,"g":-12,"e":-12,"d":-12,"c":-12,"b":-11,"a":-12,"Z":-34,"Y":23,"X":-34,"J":-23,"A":-24}},"]":{"d":"22,188r0,-159r162,0r0,-619r-162,0r0,-160r339,0r0,938r-339,0","w":403},"^":{"d":"41,-532r124,-187r169,0r124,187r-136,0r-72,-76r-71,76r-138,0","w":500},"_":{"d":"-31,167r0,-143r497,0r0,143r-497,0","w":435},"`":{"d":"193,-563r-108,-187r165,0r92,187r-149,0","w":500},"a":{"d":"221,6v-135,0,-201,-48,-201,-155v0,-117,42,-169,250,-169r68,0v4,-45,-14,-67,-56,-67v-45,0,-59,6,-67,46r-170,-27v22,-115,80,-163,250,-163v155,0,218,57,218,193r0,336r-175,0r0,-39v-27,27,-65,45,-117,45xm271,-127v58,0,73,-34,67,-93r-68,0v-59,0,-75,14,-75,48v0,38,20,45,76,45","w":551,"k":{"y":11,"w":11,"v":11,"\\":61,"\/":-24}},"b":{"d":"333,6v-52,0,-88,-17,-114,-42r0,36r-175,0r0,-750r175,0r0,266v26,-27,64,-45,117,-45v219,-2,200,147,200,338v0,117,-46,197,-203,197xm290,-139v46,0,71,-21,71,-58v0,-84,29,-188,-71,-188v-44,0,-71,19,-71,53v0,85,-31,193,71,193","k":{"y":5,"x":11,"w":5,"v":5,"\\":49}},"c":{"d":"269,6v-186,0,-244,-88,-244,-197r0,-141v0,-112,60,-197,244,-197v184,0,224,58,240,190r-175,27v-5,-47,-11,-73,-65,-73v-107,-1,-69,103,-69,188v0,31,15,58,69,58v54,0,57,-25,65,-72r175,27v-15,120,-56,190,-240,190","w":528,"k":{"y":11,"x":23,"w":11,"v":11,"t":10,"\\":61,"\/":-12}},"d":{"d":"225,6v-218,2,-200,-147,-200,-338v0,-117,46,-197,204,-197v51,0,88,17,114,42r0,-263r175,0r0,750r-175,0r0,-38v-27,27,-65,44,-118,44xm271,-139v44,0,72,-18,72,-52r0,-141v0,-33,-28,-53,-72,-53v-46,0,-71,22,-71,58r0,130v0,38,25,58,71,58","k":{"\/":-11}},"e":{"d":"269,6v-186,0,-244,-88,-244,-197r0,-141v0,-112,60,-197,244,-197v227,0,249,124,240,327r-315,0v-3,47,13,74,75,74v54,0,60,-22,65,-57r175,27v-11,93,-56,164,-240,164xm194,-313r146,0v3,-53,-5,-83,-71,-83v-65,0,-79,29,-75,83","w":534,"k":{"y":5,"x":23,"w":5,"v":5,"\\":61,"\/":-12}},"f":{"d":"88,0r0,-378r-69,0r0,-145r69,0v-4,-143,13,-227,188,-227r107,0r0,157v-49,5,-133,-20,-120,43r0,27r120,0r0,145r-120,0r0,378r-175,0","w":395,"k":{"}":-36,"u":10,"q":12,"o":12,"g":12,"e":12,"d":12,"c":12,"a":23,"]":-36,"\\":-35,".":24,",":24,"*":-12,")":-36,"'":-12,"\"":-12}},"g":{"d":"274,204v-149,0,-225,-29,-240,-149r175,-33v5,33,11,54,65,54v98,-2,62,-52,69,-120v-27,27,-65,44,-118,44v-215,1,-200,-143,-200,-332v0,-117,46,-197,204,-197v51,0,88,17,114,42r0,-36r175,0r0,529v0,139,-58,198,-244,198xm271,-139v44,0,72,-18,72,-52v0,-86,32,-194,-72,-194v-46,0,-71,22,-71,58r0,130v0,38,25,58,71,58","k":{"j":-10,"\\":61,"\/":-11}},"h":{"d":"44,0r0,-750r175,0r0,269v34,-34,79,-48,142,-48v132,0,170,70,170,158r0,371r-175,0r0,-339v0,-29,-27,-42,-70,-42v-34,0,-67,16,-67,46r0,335r-175,0","w":569,"k":{"\\":61,"\/":-11}},"i":{"d":"50,0r0,-523r175,0r0,523r-175,0xm50,-577r0,-168r175,0r0,168r-175,0","w":275},"j":{"d":"-20,198r0,-155v44,2,70,2,70,-47r0,-519r175,0r0,550v0,113,-50,171,-189,171r-56,0xm50,-577r0,-168r175,0r0,168r-175,0","w":275,"k":{"\/":-11}},"k":{"d":"44,0r0,-750r175,0r0,375r122,-148r185,0r-167,197r171,326r-185,0r-100,-191r-26,31r0,160r-175,0","w":528,"k":{"z":-11,"x":-12,"u":10,"s":10,"q":21,"o":21,"l":10,"i":10,"g":21,"e":21,"d":21,"c":21,"a":15,"\\":37,"\/":-37,"&":11}},"l":{"d":"50,0r0,-750r175,0r0,750r-175,0","w":275,"k":{"y":37,"w":17,"v":17,"t":22,"s":10,"l":12,"f":21,"\\":24,"\/":-24,".":-12,",":-12}},"m":{"d":"44,0r0,-523r175,0r0,41v32,-33,76,-47,139,-47v77,0,121,24,144,62v37,-44,89,-62,161,-62v131,0,166,70,166,158r0,371r-175,0r0,-339v0,-29,-24,-42,-66,-42v-35,0,-64,15,-64,50r0,331r-175,0r0,-339v0,-29,-24,-42,-66,-42v-34,0,-64,14,-64,45r0,336r-175,0","w":866,"k":{"\\":61,"\/":-24}},"n":{"d":"44,0r0,-523r175,0r0,42v34,-34,79,-48,142,-48v132,0,170,70,170,158r0,371r-175,0r0,-339v0,-29,-27,-42,-70,-42v-35,0,-67,15,-67,50r0,331r-175,0","w":569,"k":{"\\":61,"\/":-24}},"o":{"d":"270,-139v46,0,73,-21,73,-58r0,-130v0,-37,-27,-58,-73,-58v-100,0,-70,105,-70,188v0,37,24,58,70,58xm270,6v-179,0,-245,-80,-245,-197r0,-141v0,-119,68,-197,245,-197v178,0,248,78,248,197r0,141v0,117,-70,197,-248,197","w":543,"k":{"y":11,"x":23,"w":11,"v":11,"\\":61}},"p":{"d":"44,198r0,-721r175,0r0,39v26,-27,64,-45,117,-45v219,-2,200,147,200,338v0,117,-46,197,-203,197v-52,0,-88,-17,-114,-42r0,234r-175,0xm290,-139v46,0,71,-21,71,-58v0,-84,29,-188,-71,-188v-44,0,-71,19,-71,53v0,85,-31,193,71,193","k":{"y":5,"x":11,"w":5,"v":5,"\\":61}},"q":{"d":"343,198r0,-236v-27,27,-65,44,-118,44v-218,2,-200,-147,-200,-338v0,-117,46,-197,204,-197v51,0,88,17,114,42r0,-36r175,0r0,721r-175,0xm271,-139v44,0,72,-18,72,-52r0,-141v0,-33,-28,-53,-72,-53v-46,0,-71,22,-71,58r0,130v0,38,25,58,71,58","k":{"\\":61,"\/":-11}},"r":{"d":"44,0r0,-523r175,0r0,42v32,-34,78,-51,145,-48r0,150v-71,-1,-145,5,-145,55r0,324r-175,0","w":376,"k":{"z":-10,"y":-18,"x":-5,"w":-12,"v":-12,"u":10,"t":-18,"s":20,"r":10,"q":10,"o":10,"g":10,"e":10,"d":10,"c":10,"a":20,"\\":37,".":74,",":74,"&":11}},"s":{"d":"263,6v-193,0,-229,-32,-244,-156r175,-27v7,44,20,52,69,52v55,0,68,-11,68,-34v0,-25,-13,-29,-80,-36v-160,-16,-222,-44,-222,-152v0,-104,32,-182,237,-182v184,0,222,53,234,155r-175,27v-4,-40,-16,-49,-59,-49v-46,0,-62,5,-62,31v0,24,17,29,84,34v138,12,218,25,218,141v0,109,-25,196,-243,196","w":525,"k":{"y":11,"x":11,"w":11,"v":11,"\\":61,"\/":-12,"&":-8}},"t":{"d":"276,0v-156,0,-188,-57,-188,-184r0,-194r-69,0r0,-145r69,0r0,-135r175,-20r0,155r120,0r0,145r-120,0r0,189v-12,64,71,39,120,44r0,145r-107,0","w":410,"k":{"z":-3,"y":9,"x":11,"w":7,"v":11,"u":8,"t":30,"q":10,"o":10,"l":6,"k":-2,"i":6,"g":10,"f":12,"e":10,"d":10,"c":10,"a":12,"\\":37,"\/":-11,"&":23}},"u":{"d":"281,6v-178,0,-243,-80,-243,-197r0,-332r175,0r0,326v0,29,11,58,68,58v58,0,69,-29,69,-58r0,-326r175,0r0,332v0,117,-66,197,-244,197","w":563,"k":{"\\":61}},"v":{"d":"179,6r-179,-529r175,0r94,284r94,-284r173,0r-178,529r-179,0","w":536,"k":{"s":11,"q":11,"o":11,"g":11,"e":11,"d":11,"c":11,"a":23,"\\":24,".":24,",":24,"&":23}},"w":{"d":"154,6r-148,-529r174,0r68,272r55,-272r173,0r54,269r69,-269r172,0r-147,529r-174,0r-61,-269r-61,269r-174,0","w":778,"k":{"s":11,"q":11,"o":11,"g":11,"e":11,"d":11,"c":11,"a":23,"\\":24,".":24,",":24,"&":23}},"x":{"d":"172,-271r-159,-252r176,0r74,117r72,-117r171,0r-158,252r171,271r-176,0r-87,-137r-85,137r-171,0","w":519,"k":{"s":11,"q":23,"o":23,"g":23,"e":23,"d":23,"c":23,"a":11,"\\":24,"\/":-24,"&":11}},"y":{"d":"111,198r70,-202r-181,-519r175,0r93,273r95,-273r173,0r-251,721r-174,0","w":536,"k":{"s":11,"q":11,"o":11,"g":11,"e":11,"d":11,"c":11,"a":28,"\\":24,".":24,",":24,"&":11}},"z":{"d":"19,0r0,-145r217,-233r-210,0r0,-145r443,0r0,145r-216,233r223,0r0,145r-457,0","w":489,"k":{"z":-11,"d":12,"a":-2,"\\":40,"\/":-35,".":-11,",":-11,"&":-11}},"{":{"d":"356,188v-184,0,-252,-82,-252,-251r0,-147r-82,0r0,-154r82,0r0,-136v0,-169,68,-250,252,-250r87,0r0,159v-101,1,-162,-21,-162,112r0,395v-8,132,59,113,162,113r0,159r-87,0","w":466,"k":{"j":-34,"Z":-11,"Y":-11,"W":-11,"V":-11,"T":-23}},"|":{"d":"56,188r0,-1063r178,0r0,1063r-178,0","w":290},"}":{"d":"23,188r0,-159v102,-1,162,20,162,-113r0,-395v8,-132,-59,-111,-162,-112r0,-159r87,0v184,0,252,81,252,250r0,136r83,0r0,154r-83,0r0,147v0,169,-68,251,-252,251r-87,0","w":467},"~":{"d":"49,-516v0,-100,32,-160,128,-160v47,0,92,31,123,31v14,0,26,-10,26,-31r122,0v0,100,-32,160,-128,160v-47,0,-99,-35,-123,-35v-15,0,-29,14,-29,35r-119,0","w":500}}});
;
(function($) {
  $.fn.equalizeCols = function(children){
    var child = Array(0);
    if (children) child = children.split(",");
    var maxH = 0;
    this.each(
      function(i) 
      {
        if (this.offsetHeight > maxH) maxH = this.offsetHeight;
      }
		
    ).css("height", "100%").each(
      function(i)
      {
        var gap = maxH-this.offsetHeight;
        if (gap > 0)
        {
          t = document.createElement('div');
          $(t).attr("class","fill").css("height",gap+"px");
		  /* $(t).attr("class","fill").css("clear","both"); */
          if (child.length > i)
          {
            $(this).find(child[i]).children(':last-child').after(t);
          } 
          else 
          {
            $(this).children(':last-child').after(t);
          }
        }
      }  
    );
  }
})(jQuery);;
ï»¿/**
 * jQuery.timers - Timer abstractions for jQuery
 * Written by Blair Mitchelmore (blair DOT mitchelmore AT gmail DOT com)
 * Licensed under the WTFPL (http://sam.zoy.org/wtfpl/).
 * Date: 2009/10/16
 *
 * @author Blair Mitchelmore
 * @version 1.2
 *
 **/

jQuery.fn.extend({
	everyTime: function(interval, label, fn, times) {
		return this.each(function() {
			jQuery.timer.add(this, interval, label, fn, times);
		});
	},
	oneTime: function(interval, label, fn) {
		return this.each(function() {
			jQuery.timer.add(this, interval, label, fn, 1);
		});
	},
	stopTime: function(label, fn) {
		return this.each(function() {
			jQuery.timer.remove(this, label, fn);
		});
	}
});

jQuery.extend({
	timer: {
		global: [],
		guid: 1,
		dataKey: "jQuery.timer",
		regex: /^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/,
		powers: {
			// Yeah this is major overkill...
			'ms': 1,
			'cs': 10,
			'ds': 100,
			's': 1000,
			'das': 10000,
			'hs': 100000,
			'ks': 1000000
		},
		timeParse: function(value) {
			if (value == undefined || value == null)
				return null;
			var result = this.regex.exec(jQuery.trim(value.toString()));
			if (result[2]) {
				var num = parseFloat(result[1]);
				var mult = this.powers[result[2]] || 1;
				return num * mult;
			} else {
				return value;
			}
		},
		add: function(element, interval, label, fn, times) {
			var counter = 0;
			
			if (jQuery.isFunction(label)) {
				if (!times) 
					times = fn;
				fn = label;
				label = interval;
			}
			
			interval = jQuery.timer.timeParse(interval);

			if (typeof interval != 'number' || isNaN(interval) || interval < 0)
				return;

			if (typeof times != 'number' || isNaN(times) || times < 0) 
				times = 0;
			
			times = times || 0;
			
			var timers = jQuery.data(element, this.dataKey) || jQuery.data(element, this.dataKey, {});
			
			if (!timers[label])
				timers[label] = {};
			
			fn.timerID = fn.timerID || this.guid++;
			
			var handler = function() {
				if ((++counter > times && times !== 0) || fn.call(element, counter) === false)
					jQuery.timer.remove(element, label, fn);
			};
			
			handler.timerID = fn.timerID;
			
			if (!timers[label][fn.timerID])
				timers[label][fn.timerID] = window.setInterval(handler,interval);
			
			this.global.push( element );
			
		},
		remove: function(element, label, fn) {
			var timers = jQuery.data(element, this.dataKey), ret;
			
			if ( timers ) {
				
				if (!label) {
					for ( label in timers )
						this.remove(element, label, fn);
				} else if ( timers[label] ) {
					if ( fn ) {
						if ( fn.timerID ) {
							window.clearInterval(timers[label][fn.timerID]);
							delete timers[label][fn.timerID];
						}
					} else {
						for ( var fn in timers[label] ) {
							window.clearInterval(timers[label][fn]);
							delete timers[label][fn];
						}
					}
					
					for ( ret in timers[label] ) break;
					if ( !ret ) {
						ret = null;
						delete timers[label];
					}
				}
				
				for ( ret in timers ) break;
				if ( !ret ) 
					jQuery.removeData(element, this.dataKey);
			}
		}
	}
});

jQuery(window).bind("unload", function() {
	jQuery.each(jQuery.timer.global, function(index, item) {
		jQuery.timer.remove(item);
	});
});;
/**
* MH Billboard / Brunello Creative - 11/2009
* @author    Mat Marquis <mat@brunellocreative.com>
*/
$(document).ready(function(){
if($.browser.msie) {
	var d=$(".slide").length;
	var e=$(".morefeat").width();
	var c=d*$(".slide").width();
	var a=$(".slide:first-child");
	$(".slidenext").click(function(){
		var f=$(".slider").css("margin-left");
		f=parseInt(f);f=f-e;if(-f<c&&!$(".slider").is(":animated")){$(".slider").animate({marginLeft:f+"px"},400);
		$(".slideprev").css("color","#555")}if(-f>=(c-e)){$(this).css("color","#aaa")}return false});
	$(".slideprev").click(function(){var f=$(".slider").css("margin-left");f=parseInt(f);
		if(f<0&&!$(".slider").is(":animated")){f=f+e;$(".slider").animate({marginLeft:f+"px"},400);
		$(".slidenext").css("color","#555")}if(f==0){$(this).css("color","#aaa")}
		if(f>0){$(".slider").css("margin-left","0px")}return false});	
}});;
