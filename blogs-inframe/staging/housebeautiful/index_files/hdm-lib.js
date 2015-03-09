/*global jQuery, $, Modernizr */

//Douglas Crockford's json2.js
var JSON;if(!JSON){JSON={};}
(function(){"use strict";function f(n){return n<10?'0'+n:n;}
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
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}
if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};}}());
/* jQuery Tools v1.2.5 - The missing UI library for the Web */
//$.tools.overlay
(function(a){a.tools=a.tools||{version:"v1.2.5"},a.tools.overlay={addEffect:function(a,b,d){c[a]=[b,d]},conf:{close:null,closeOnClick:!0,closeOnEsc:!0,closeSpeed:"fast",effect:"default",fixed:!a.browser.msie||a.browser.version>6,left:"center",load:!1,mask:null,oneInstance:!0,speed:"normal",target:null,top:"10%"}};var b=[],c={};a.tools.overlay.addEffect("default",function(b,c){var d=this.getConf(),e=a(window);d.fixed||(b.top+=e.scrollTop(),b.left+=e.scrollLeft()),b.position=d.fixed?"fixed":"absolute",this.getOverlay().css(b).fadeIn(d.speed,c)},function(a){this.getOverlay().fadeOut(this.getConf().closeSpeed,a)});function d(d,e){var f=this,g=d.add(f),h=a(window),i,j,k,l=a.tools.expose&&(e.mask||e.expose),m=Math.random().toString().slice(10);l&&(typeof l=="string"&&(l={color:l}),l.closeOnClick=l.closeOnEsc=!1);var n=e.target||d.attr("rel");j=n?a(n):null||d;if(!j.length)throw"Could not find Overlay: "+n;d&&d.index(j)==-1&&d.click(function(a){f.load(a);return a.preventDefault()}),a.extend(f,{load:function(d){if(f.isOpened())return f;var i=c[e.effect];if(!i)throw"Overlay: cannot find effect : \""+e.effect+"\"";e.oneInstance&&a.each(b,function(){this.close(d)}),d=d||a.Event(),d.type="onBeforeLoad",g.trigger(d);if(d.isDefaultPrevented())return f;k=!0,l&&a(j).expose(l);var n=e.top,o=e.left,p=j.outerWidth({margin:!0}),q=j.outerHeight({margin:!0});typeof n=="string"&&(n=n=="center"?Math.max((h.height()-q)/2,0):parseInt(n,10)/100*h.height()),o=="center"&&(o=Math.max((h.width()-p)/2,0)),i[0].call(f,{top:n,left:o},function(){k&&(d.type="onLoad",g.trigger(d))}),l&&e.closeOnClick&&a.mask.getMask().one("click",f.close),e.closeOnClick&&a(document).bind("click."+m,function(b){a(b.target).parents(j).length||f.close(b)}),e.closeOnEsc&&a(document).bind("keydown."+m,function(a){a.keyCode==27&&f.close(a)});return f},close:function(b){if(!f.isOpened())return f;b=b||a.Event(),b.type="onBeforeClose",g.trigger(b);if(!b.isDefaultPrevented()){k=!1,c[e.effect][1].call(f,function(){b.type="onClose",g.trigger(b)}),a(document).unbind("click."+m).unbind("keydown."+m),l&&a.mask.close();return f}},getOverlay:function(){return j},getTrigger:function(){return d},getClosers:function(){return i},isOpened:function(){return k},getConf:function(){return e}}),a.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","),function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){b&&a(f).bind(c,b);return f}}),i=j.find(e.close||".close"),!i.length&&!e.close&&(i=a("<a class=\"close\"></a>"),j.prepend(i)),i.click(function(a){f.close(a)}),e.load&&f.load()}a.fn.overlay=function(c){var e=this.data("overlay");if(e)return e;a.isFunction(c)&&(c={onBeforeLoad:c}),c=a.extend(!0,{},a.tools.overlay.conf,c),this.each(function(){e=new d(a(this),c),b.push(e),a(this).data("overlay",e)});return c.api?e:this}})(jQuery);
(function(a){var b=a.tools.overlay,c=a(window);a.extend(b.conf,{start:{top:null,left:null},fadeInSpeed:"fast",zIndex:9999});function d(a){var b=a.offset();return{top:b.top+a.height()/2,left:b.left+a.width()/2}}var e=function(b,e){var f=this.getOverlay(),g=this.getConf(),h=this.getTrigger(),i=this,j=f.outerWidth({margin:!0}),k=f.data("img"),l=g.fixed?"fixed":"absolute";if(!k){var m=f.css("backgroundImage");if(!m)throw"background-image CSS property not set for overlay";m=m.slice(m.indexOf("(")+1,m.indexOf(")")).replace(/\"/g,""),f.css("backgroundImage","none"),k=a("<img src=\""+m+"\"/>"),k.css({border:0,display:"none"}).width(j),a("body").append(k),f.data("img",k)}var n=g.start.top||Math.round(c.height()/2),o=g.start.left||Math.round(c.width()/2);if(h){var p=d(h);n=p.top,o=p.left}g.fixed?(n-=c.scrollTop(),o-=c.scrollLeft()):(b.top+=c.scrollTop(),b.left+=c.scrollLeft()),k.css({position:"absolute",top:n,left:o,width:0,zIndex:g.zIndex}).show(),b.position=l,f.css(b),k.animate({top:f.css("top"),left:f.css("left"),width:j},g.speed,function(){f.css("zIndex",g.zIndex+1).fadeIn(g.fadeInSpeed,function(){i.isOpened()&&!a(this).index(f)?e.call():f.hide()})}).css("position",l)},f=function(b){var e=this.getOverlay().hide(),f=this.getConf(),g=this.getTrigger(),h=e.data("img"),i={top:f.start.top,left:f.start.left,width:0};g&&a.extend(i,d(g)),f.fixed&&h.css({position:"absolute"}).animate({top:"+="+c.scrollTop(),left:"+="+c.scrollLeft()},0),h.animate(i,f.closeSpeed,b)};b.addEffect("apple",e,f)})(jQuery);
(function(a){a.tools=a.tools||{version:"v1.2.5"},a.tools.scrollable={conf:{activeClass:"active",circular:!1,clonedClass:"cloned",disabledClass:"disabled",easing:"swing",initialIndex:0,item:null,items:".items",keyboard:!0,mousewheel:!1,next:".next",prev:".prev",speed:400,vertical:!1,touch:!0,wheelSpeed:0}};function b(a,b){var c=parseInt(a.css(b),10);if(c)return c;var d=a[0].currentStyle;return d&&d.width&&parseInt(d.width,10)}function c(b,c){var d=a(c);return d.length<2?d:b.parent().find(c)}var d;function e(b,e){var f=this,g=b.add(f),h=b.children(),i=0,j=e.vertical;d||(d=f),h.length>1&&(h=a(e.items,b)),a.extend(f,{getConf:function(){return e},getIndex:function(){return i},getSize:function(){return f.getItems().size()},getNaviButtons:function(){return m.add(n)},getRoot:function(){return b},getItemWrap:function(){return h},getItems:function(){return h.children(e.item).not("."+e.clonedClass)},move:function(a,b){return f.seekTo(i+a,b)},next:function(a){return f.move(1,a)},prev:function(a){return f.move(-1,a)},begin:function(a){return f.seekTo(0,a)},end:function(a){return f.seekTo(f.getSize()-1,a)},focus:function(){d=f;return f},addItem:function(b){b=a(b),e.circular?(h.children("."+e.clonedClass+":last").before(b),h.children("."+e.clonedClass+":first").replaceWith(b.clone().addClass(e.clonedClass))):h.append(b),g.trigger("onAddItem",[b]);return f},seekTo:function(b,c,k){b.jquery||(b*=1);if(e.circular&&b===0&&i==-1&&c!==0)return f;if(!e.circular&&b<0||b>f.getSize()||b<-1)return f;var l=b;b.jquery?b=f.getItems().index(b):l=f.getItems().eq(b);var m=a.Event("onBeforeSeek");if(!k){g.trigger(m,[b,c]);if(m.isDefaultPrevented()||!l.length)return f}var n=j?{top:-l.position().top}:{left:-l.position().left};i=b,d=f,c===undefined&&(c=e.speed),h.animate(n,c,e.easing,k||function(){g.trigger("onSeek",[b])});return f}}),a.each(["onBeforeSeek","onSeek","onAddItem"],function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){b&&a(f).bind(c,b);return f}});if(e.circular){var k=f.getItems().slice(-1).clone().prependTo(h),l=f.getItems().eq(1).clone().appendTo(h);k.add(l).addClass(e.clonedClass),f.onBeforeSeek(function(a,b,c){if(!a.isDefaultPrevented()){if(b==-1){f.seekTo(k,c,function(){f.end(0)});return a.preventDefault()}b==f.getSize()&&f.seekTo(l,c,function(){f.begin(0)})}}),f.seekTo(0,0,function(){})}var m=c(b,e.prev).click(function(){f.prev()}),n=c(b,e.next).click(function(){f.next()});!e.circular&&f.getSize()>1&&(f.onBeforeSeek(function(a,b){setTimeout(function(){a.isDefaultPrevented()||(m.toggleClass(e.disabledClass,b<=0),n.toggleClass(e.disabledClass,b>=f.getSize()-1))},1)}),e.initialIndex||m.addClass(e.disabledClass)),e.mousewheel&&a.fn.mousewheel&&b.mousewheel(function(a,b){if(e.mousewheel){f.move(b<0?1:-1,e.wheelSpeed||50);return!1}});if(e.touch){var o={};h[0].ontouchstart=function(a){var b=a.touches[0];o.x=b.clientX,o.y=b.clientY},h[0].ontouchmove=function(a){if(a.touches.length==1&&!h.is(":animated")){var b=a.touches[0],c=o.x-b.clientX,d=o.y-b.clientY;f[j&&d>0||!j&&c>0?"next":"prev"](),a.preventDefault()}}}e.keyboard&&a(document).bind("keydown.scrollable",function(b){if(e.keyboard&&!b.altKey&&!b.ctrlKey&&!a(b.target).is(":input")){if(e.keyboard!="static"&&d!=f)return;var c=b.keyCode;if(j&&(c==38||c==40)){f.move(c==38?-1:1);return b.preventDefault()}if(!j&&(c==37||c==39)){f.move(c==37?-1:1);return b.preventDefault()}}}),e.initialIndex&&f.seekTo(e.initialIndex,0,function(){})}a.fn.scrollable=function(b){var c=this.data("scrollable");if(c)return c;b=a.extend({},a.tools.scrollable.conf,b),this.each(function(){c=new e(a(this),b),a(this).data("scrollable",c)});return b.api?c:this}})(jQuery);
(function(a){var b=a.tools.scrollable;b.autoscroll={conf:{autoplay:!0,interval:3e3,autopause:!0}},a.fn.autoscroll=function(c){typeof c=="number"&&(c={interval:c});var d=a.extend({},b.autoscroll.conf,c),e;this.each(function(){var b=a(this).data("scrollable");b&&(e=b);var c,f=!0;b.play=function(){c||(f=!1,c=setInterval(function(){b.next()},d.interval))},b.pause=function(){c=clearInterval(c)},b.stop=function(){b.pause(),f=!0},d.autopause&&b.getRoot().add(b.getNaviButtons()).hover(b.pause,b.play),d.autoplay&&b.play()});return d.api?e:this}})(jQuery);
(function(a){var b=a.tools.scrollable;b.navigator={conf:{navi:".navi",naviItem:null,activeClass:"active",indexed:!1,idPrefix:null,history:!1}};function c(b,c){var d=a(c);return d.length<2?d:b.parent().find(c)}a.fn.navigator=function(d){typeof d=="string"&&(d={navi:d}),d=a.extend({},b.navigator.conf,d);var e;this.each(function(){var b=a(this).data("scrollable"),f=d.navi.jquery?d.navi:c(b.getRoot(),d.navi),g=b.getNaviButtons(),h=d.activeClass,i=d.history&&a.fn.history;b&&(e=b),b.getNaviButtons=function(){return g.add(f)};function j(a,c,d){b.seekTo(c);if(i)location.hash&&(location.hash=a.attr("href").replace("#",""));else return d.preventDefault()}function k(){return f.find(d.naviItem||"> *")}function l(b){var c=a("<"+(d.naviItem||"a")+"/>").click(function(c){j(a(this),b,c)}).attr("href","#"+b);b===0&&c.addClass(h),d.indexed&&c.text(b+1),d.idPrefix&&c.attr("id",d.idPrefix+b);return c.appendTo(f)}k().length?k().each(function(b){a(this).click(function(c){j(a(this),b,c)})}):a.each(b.getItems(),function(a){l(a)}),b.onBeforeSeek(function(a,b){setTimeout(function(){if(!a.isDefaultPrevented()){var c=k().eq(b);!a.isDefaultPrevented()&&c.length&&k().removeClass(h).eq(b).addClass(h)}},1)});function m(a,b){var c=k().eq(b.replace("#",""));c.length||(c=k().filter("[href="+b+"]")),c.click()}b.onAddItem(function(a,c){c=l(b.getItems().index(c)),i&&c.history(m)}),i&&k().history(m)});return d.api?e:this}})(jQuery);
(function(a){a.tools=a.tools||{version:"v1.2.5"},a.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",rotate:!1,history:!1},addEffect:function(a,c){b[a]=c}};var b={"default":function(a,b){this.getPanes().hide().eq(a).show(),b.call()},fade:function(a,b){var c=this.getConf(),d=c.fadeOutSpeed,e=this.getPanes();d?e.fadeOut(d):e.hide(),e.eq(a).fadeIn(c.fadeInSpeed,b)},slide:function(a,b){this.getPanes().slideUp(200),this.getPanes().eq(a).slideDown(400,b)},ajax:function(a,b){this.getPanes().eq(0).load(this.getTabs().eq(a).attr("href"),b)}},c;a.tools.tabs.addEffect("horizontal",function(b,d){c||(c=this.getPanes().eq(0).width()),this.getCurrentPane().animate({width:0},function(){a(this).hide()}),this.getPanes().eq(b).animate({width:c},function(){a(this).show(),d.call()})});function d(c,d,e){var f=this,g=c.add(this),h=c.find(e.tabs),i=d.jquery?d:c.children(d),j;h.length||(h=c.children()),i.length||(i=c.parent().find(d)),i.length||(i=a(d)),a.extend(this,{click:function(c,d){var i=h.eq(c);typeof c=="string"&&c.replace("#","")&&(i=h.filter("[href*="+c.replace("#","")+"]"),c=Math.max(h.index(i),0));if(e.rotate){var k=h.length-1;if(c<0)return f.click(k,d);if(c>k)return f.click(0,d)}if(!i.length){if(j>=0)return f;c=e.initialIndex,i=h.eq(c)}if(c===j)return f;d=d||a.Event(),d.type="onBeforeClick",g.trigger(d,[c]);if(!d.isDefaultPrevented()){b[e.effect].call(f,c,function(){d.type="onClick",g.trigger(d,[c])}),j=c,h.removeClass(e.current),i.addClass(e.current);return f}},getConf:function(){return e},getTabs:function(){return h},getPanes:function(){return i},getCurrentPane:function(){return i.eq(j)},getCurrentTab:function(){return h.eq(j)},getIndex:function(){return j},next:function(){return f.click(j+1)},prev:function(){return f.click(j-1)},destroy:function(){h.unbind(e.event).removeClass(e.current),i.find("a[href^=#]").unbind("click.T");return f}}),a.each("onBeforeClick,onClick".split(","),function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){b&&a(f).bind(c,b);return f}}),e.history&&a.fn.history&&(a.tools.history.init(h),e.event="history"),h.each(function(b){a(this).bind(e.event,function(a){f.click(b,a);return a.preventDefault()})}),i.find("a[href^=#]").bind("click.T",function(b){f.click(a(this).attr("href"),b)}),location.hash&&e.tabs=="a"&&c.find("[href="+location.hash+"]").length?f.click(location.hash):(e.initialIndex===0||e.initialIndex>0)&&f.click(e.initialIndex)}a.fn.tabs=function(b,c){var e=this.data("tabs");e&&(e.destroy(),this.removeData("tabs")),a.isFunction(c)&&(c={onBeforeClick:c}),c=a.extend({},a.tools.tabs.conf,c),this.each(function(){e=new d(a(this),b,c),a(this).data("tabs",e)});return c.api?e:this}})(jQuery);
(function(a){var b;b=a.tools.tabs.slideshow={conf:{next:".forward",prev:".backward",disabledClass:"disabled",autoplay:!1,autopause:!0,interval:3e3,clickable:!0,api:!1}};function c(b,c){var d=this,e=b.add(this),f=b.data("tabs"),g,h=!0;function i(c){var d=a(c);return d.length<2?d:b.parent().find(c)}var j=i(c.next).click(function(){f.next()}),k=i(c.prev).click(function(){f.prev()});a.extend(d,{getTabs:function(){return f},getConf:function(){return c},play:function(){if(g)return d;var b=a.Event("onBeforePlay");e.trigger(b);if(b.isDefaultPrevented())return d;g=setInterval(f.next,c.interval),h=!1,e.trigger("onPlay");return d},pause:function(){if(!g)return d;var b=a.Event("onBeforePause");e.trigger(b);if(b.isDefaultPrevented())return d;g=clearInterval(g),e.trigger("onPause");return d},stop:function(){d.pause(),h=!0}}),a.each("onBeforePlay,onPlay,onBeforePause,onPause".split(","),function(b,e){a.isFunction(c[e])&&a(d).bind(e,c[e]),d[e]=function(b){return a(d).bind(e,b)}}),c.autopause&&f.getTabs().add(j).add(k).add(f.getPanes()).hover(d.pause,function(){h||d.play()}),c.autoplay&&d.play(),c.clickable&&f.getPanes().click(function(){f.next()});if(!f.getConf().rotate){var l=c.disabledClass;f.getIndex()||k.addClass(l),f.onBeforeClick(function(a,b){k.toggleClass(l,!b),j.toggleClass(l,b==f.getTabs().length-1)})}}a.fn.slideshow=function(d){var e=this.data("slideshow");if(e)return e;d=a.extend({},b.conf,d),this.each(function(){e=new c(a(this),d),a(this).data("slideshow",e)});return d.api?e:this}})(jQuery);
(function(a){a.tools=a.tools||{version:"v1.2.5"};var b;b=a.tools.expose={conf:{maskId:"exposeMask",loadSpeed:"slow",closeSpeed:"fast",closeOnClick:!0,closeOnEsc:!0,zIndex:9998,opacity:.8,startOpacity:0,color:"#fff",onLoad:null,onClose:null}};function c(){if(a.browser.msie){var b=a(document).height(),c=a(window).height();return[window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,b-c<20?c:b]}return[a(document).width(),a(document).height()]}function d(b){if(b)return b.call(a.mask)}var e,f,g,h,i;a.mask={load:function(j,k){if(g)return this;typeof j=="string"&&(j={color:j}),j=j||h,h=j=a.extend(a.extend({},b.conf),j),e=a("#"+j.maskId),e.length||(e=a("<div/>").attr("id",j.maskId),a("body").append(e));var l=c();e.css({position:"absolute",top:0,left:0,width:l[0],height:l[1],display:"none",opacity:j.startOpacity,zIndex:j.zIndex}),j.color&&e.css("backgroundColor",j.color);if(d(j.onBeforeLoad)===!1)return this;j.closeOnEsc&&a(document).bind("keydown.mask",function(b){b.keyCode==27&&a.mask.close(b)}),j.closeOnClick&&e.bind("click.mask",function(b){a.mask.close(b)}),a(window).bind("resize.mask",function(){a.mask.fit()}),k&&k.length&&(i=k.eq(0).css("zIndex"),a.each(k,function(){var b=a(this);/relative|absolute|fixed/i.test(b.css("position"))||b.css("position","relative")}),f=k.css({zIndex:Math.max(j.zIndex+1,i=="auto"?0:i)})),e.css({display:"block"}).fadeTo(j.loadSpeed,j.opacity,function(){a.mask.fit(),d(j.onLoad),g="full"}),g=!0;return this},close:function(){if(g){if(d(h.onBeforeClose)===!1)return this;e.fadeOut(h.closeSpeed,function(){d(h.onClose),f&&f.css({zIndex:i}),g=!1}),a(document).unbind("keydown.mask"),e.unbind("click.mask"),a(window).unbind("resize.mask")}return this},fit:function(){if(g){var a=c();e.css({width:a[0],height:a[1]})}},getMask:function(){return e},isLoaded:function(a){return a?g=="full":g},getConf:function(){return h},getExposed:function(){return f}},a.fn.mask=function(b){a.mask.load(b);return this},a.fn.expose=function(b){a.mask.load(b,this);return this}})(jQuery);
(function(a){var b,c,d,e;a.tools=a.tools||{version:"v1.2.5"},a.tools.history={init:function(g){e||(a.browser.msie&&a.browser.version<"8"?c||(c=a("<iframe/>").attr("src","javascript:false;").hide().get(0),a("body").append(c),setInterval(function(){var d=c.contentWindow.document,e=d.location.hash;b!==e&&a.event.trigger("hash",e)},100),f(location.hash||"#")):setInterval(function(){var c=location.hash;c!==b&&a.event.trigger("hash",c)},100),d=d?d.add(g):g,g.click(function(b){var d=a(this).attr("href");c&&f(d);if(d.slice(0,1)!="#"){location.href="#"+d;return b.preventDefault()}}),e=!0)}};function f(a){if(a){var b=c.contentWindow.document;b.open().close(),b.location.hash=a}}a(window).bind("hash",function(c,e){e?d.filter(function(){var b=a(this).attr("href");return b==e||b==e.replace("#","")}).trigger("history",[e]):d.eq(0).trigger("history",[e]),b=e}),a.fn.history=function(b){a.tools.history.init(this);return this.bind("history",b)}})(jQuery);
(function(a){a.tools=a.tools||{version:"v1.2.5"},a.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,position:["top","center"],offset:[0,0],relative:!1,cancelDefault:!0,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(a,c,d){b[a]=[c,d]}};var b={toggle:[function(a){var b=this.getConf(),c=this.getTip(),d=b.opacity;d<1&&c.css({opacity:d}),c.show(),a.call()},function(a){this.getTip().hide(),a.call()}],fade:[function(a){var b=this.getConf();this.getTip().fadeTo(b.fadeInSpeed,b.opacity,a)},function(a){this.getTip().fadeOut(this.getConf().fadeOutSpeed,a)}]};function c(b,c,d){var e=d.relative?b.position().top:b.offset().top,f=d.relative?b.position().left:b.offset().left,g=d.position[0];e-=c.outerHeight()-d.offset[0],f+=b.outerWidth()+d.offset[1],/iPad/i.test(navigator.userAgent)&&(e-=a(window).scrollTop());var h=c.outerHeight()+b.outerHeight();g=="center"&&(e+=h/2),g=="bottom"&&(e+=h),g=d.position[1];var i=c.outerWidth()+b.outerWidth();g=="center"&&(f-=i/2),g=="left"&&(f-=i);return{top:e,left:f}}function d(d,e){var f=this,g=d.add(f),h,i=0,j=0,k=d.attr("title"),l=d.attr("data-tooltip"),m=b[e.effect],n,o=d.is(":input"),p=o&&d.is(":checkbox, :radio, select, :button, :submit"),q=d.attr("type"),r=e.events[q]||e.events[o?p?"widget":"input":"def"];if(!m)throw"Nonexistent effect \""+e.effect+"\"";r=r.split(/,\s*/);if(r.length!=2)throw"Tooltip: bad events configuration for "+q;d.bind(r[0],function(a){clearTimeout(i),e.predelay?j=setTimeout(function(){f.show(a)},e.predelay):f.show(a)}).bind(r[1],function(a){clearTimeout(j),e.delay?i=setTimeout(function(){f.hide(a)},e.delay):f.hide(a)}),k&&e.cancelDefault&&(d.removeAttr("title"),d.data("title",k)),a.extend(f,{show:function(b){if(!h){l?h=a(l):e.tip?h=a(e.tip).eq(0):k?h=a(e.layout).addClass(e.tipClass).appendTo(document.body).hide().append(k):(h=d.next(),h.length||(h=d.parent().next()));if(!h.length)throw"Cannot find tooltip for "+d}if(f.isShown())return f;h.stop(!0,!0);var o=c(d,h,e);e.tip&&h.html(d.data("title")),b=b||a.Event(),b.type="onBeforeShow",g.trigger(b,[o]);if(b.isDefaultPrevented())return f;o=c(d,h,e),h.css({position:"absolute",top:o.top,left:o.left}),n=!0,m[0].call(f,function(){b.type="onShow",n="full",g.trigger(b)});var p=e.events.tooltip.split(/,\s*/);h.data("__set")||(h.bind(p[0],function(){clearTimeout(i),clearTimeout(j)}),p[1]&&!d.is("input:not(:checkbox, :radio), textarea")&&h.bind(p[1],function(a){a.relatedTarget!=d[0]&&d.trigger(r[1].split(" ")[0])}),h.data("__set",!0));return f},hide:function(c){if(!h||!f.isShown())return f;c=c||a.Event(),c.type="onBeforeHide",g.trigger(c);if(!c.isDefaultPrevented()){n=!1,b[e.effect][1].call(f,function(){c.type="onHide",g.trigger(c)});return f}},isShown:function(a){return a?n=="full":n},getConf:function(){return e},getTip:function(){return h},getTrigger:function(){return d}}),a.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){b&&a(f).bind(c,b);return f}})}a.fn.tooltip=function(b){var c=this.data("tooltip");if(c)return c;b=a.extend(!0,{},a.tools.tooltip.conf,b),typeof b.position=="string"&&(b.position=b.position.split(/,?\s/)),this.each(function(){c=new d(a(this),b),a(this).data("tooltip",c)});return b.api?c:this}})(jQuery);
(function(a){a.tools=a.tools||{version:"v1.2.5"};var b=/\[type=([a-z]+)\]/,c=/^-?[0-9]*(\.[0-9]+)?$/,d=a.tools.dateinput,e=/^([a-z0-9_\.\-\+]+)@([\da-z\.\-]+)\.([a-z\.]{2,6})$/i,f=/^(https?:\/\/)?[\da-z\.\-]+\.[a-z\.]{2,6}[#&+_\?\/\w \.\-=]*$/i,g;g=a.tools.validator={conf:{grouped:!1,effect:"default",errorClass:"invalid",inputEvent:null,errorInputEvent:"keyup",formEvent:"submit",lang:"en",message:"<div/>",messageAttr:"data-message",messageClass:"error",offset:[0,0],position:"center right",singleError:!1,speed:"normal"},messages:{"*":{en:"Please correct this value"}},localize:function(b,c){a.each(c,function(a,c){g.messages[a]=g.messages[a]||{},g.messages[a][b]=c})},localizeFn:function(b,c){g.messages[b]=g.messages[b]||{},a.extend(g.messages[b],c)},fn:function(c,d,e){a.isFunction(d)?e=d:(typeof d=="string"&&(d={en:d}),this.messages[c.key||c]=d);var f=b.exec(c);f&&(c=i(f[1])),j.push([c,e])},addEffect:function(a,b,c){k[a]=[b,c]}};function h(b,c,d){var e=b.offset().top,f=b.offset().left,g=d.position.split(/,?\s+/),h=g[0],i=g[1];e-=c.outerHeight()-d.offset[0],f+=b.outerWidth()+d.offset[1],/iPad/i.test(navigator.userAgent)&&(e-=a(window).scrollTop());var j=c.outerHeight()+b.outerHeight();h=="center"&&(e+=j/2),h=="bottom"&&(e+=j);var k=b.outerWidth();i=="center"&&(f-=(k+c.outerWidth())/2),i=="left"&&(f-=k);return{top:e,left:f}}function i(a){function b(){return this.getAttribute("type")==a}b.key="[type="+a+"]";return b}var j=[],k={"default":[function(b){var c=this.getConf();a.each(b,function(b,d){var e=d.input;e.addClass(c.errorClass);var f=e.data("msg.el");f||(f=a(c.message).addClass(c.messageClass).appendTo(document.body),e.data("msg.el",f)),f.css({visibility:"hidden"}).find("p").remove(),a.each(d.messages,function(b,c){a("<p/>").html(c).appendTo(f)}),f.outerWidth()==f.parent().width()&&f.add(f.find("p")).css({display:"inline"});var g=h(e,f,c);f.css({visibility:"visible",position:"absolute",top:g.top,left:g.left}).fadeIn(c.speed)})},function(b){var c=this.getConf();b.removeClass(c.errorClass).each(function(){var b=a(this).data("msg.el");b&&b.css({visibility:"hidden"})})}]};a.each("email,url,number".split(","),function(b,c){a.expr[":"][c]=function(a){return a.getAttribute("type")===c}}),a.fn.oninvalid=function(a){return this[a?"bind":"trigger"]("OI",a)},g.fn(":email","Please enter a valid email address",function(a,b){return!b||e.test(b)}),g.fn(":url","Please enter a valid URL",function(a,b){return!b||f.test(b)}),g.fn(":number","Please enter a numeric value.",function(a,b){return c.test(b)}),g.fn("[max]","Please enter a value smaller than $1",function(a,b){if(b===""||d&&a.is(":date"))return!0;var c=a.attr("max");return parseFloat(b)<=parseFloat(c)?!0:[c]}),g.fn("[min]","Please enter a value larger than $1",function(a,b){if(b===""||d&&a.is(":date"))return!0;var c=a.attr("min");return parseFloat(b)>=parseFloat(c)?!0:[c]}),g.fn("[required]","Please complete this mandatory field.",function(a,b){if(a.is(":checkbox"))return a.is(":checked");return b}),g.fn("[pattern]",function(a){var b=new RegExp("^"+a.attr("pattern")+"$");return b.test(a.val())});function l(b,c,e){var f=this,i=c.add(f);b=b.not(":button, :image, :reset, :submit");function l(b,c,d){if(e.grouped||!b.length){var f;if(d===!1||a.isArray(d)){f=g.messages[c.key||c]||g.messages["*"],f=f[e.lang]||g.messages["*"].en;var h=f.match(/\$\d/g);h&&a.isArray(d)&&a.each(h,function(a){f=f.replace(this,d[a])})}else f=d[e.lang]||d;b.push(f)}}a.extend(f,{getConf:function(){return e},getForm:function(){return c},getInputs:function(){return b},reflow:function(){b.each(function(){var b=a(this),c=b.data("msg.el");if(c){var d=h(b,c,e);c.css({top:d.top,left:d.left})}});return f},invalidate:function(c,d){if(!d){var g=[];a.each(c,function(a,c){var d=b.filter("[name='"+a+"']");d.length&&(d.trigger("OI",[c]),g.push({input:d,messages:[c]}))}),c=g,d=a.Event()}d.type="onFail",i.trigger(d,[c]),d.isDefaultPrevented()||k[e.effect][0].call(f,c,d);return f},reset:function(c){c=c||b,c.removeClass(e.errorClass).each(function(){var b=a(this).data("msg.el");b&&(b.remove(),a(this).data("msg.el",null))}).unbind(e.errorInputEvent||"");return f},destroy:function(){c.unbind(e.formEvent+".V").unbind("reset.V"),b.unbind(e.inputEvent+".V").unbind("change.V");return f.reset()},checkValidity:function(c,g){c=c||b,c=c.not(":disabled");if(!c.length)return!0;g=g||a.Event(),g.type="onBeforeValidate",i.trigger(g,[c]);if(g.isDefaultPrevented())return g.result;var h=[];c.not(":radio:not(:checked)").each(function(){var b=[],c=a(this).data("messages",b),k=d&&c.is(":date")?"onHide.v":e.errorInputEvent+".v";c.unbind(k),a.each(j,function(){var a=this,d=a[0];if(c.filter(d).length){var h=a[1].call(f,c,c.val());if(h!==!0){g.type="onBeforeFail",i.trigger(g,[c,d]);if(g.isDefaultPrevented())return!1;var j=c.attr(e.messageAttr);if(j){b=[j];return!1}l(b,d,h)}}}),b.length&&(h.push({input:c,messages:b}),c.trigger("OI",[b]),e.errorInputEvent&&c.bind(k,function(a){f.checkValidity(c,a)}));if(e.singleError&&h.length)return!1});var m=k[e.effect];if(!m)throw"Validator: cannot find effect \""+e.effect+"\"";if(h.length){f.invalidate(h,g);return!1}m[1].call(f,c,g),g.type="onSuccess",i.trigger(g,[c]),c.unbind(e.errorInputEvent+".v");return!0}}),a.each("onBeforeValidate,onBeforeFail,onFail,onSuccess".split(","),function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){b&&a(f).bind(c,b);return f}}),e.formEvent&&c.bind(e.formEvent+".V",function(a){if(!f.checkValidity(null,a))return a.preventDefault()}),c.bind("reset.V",function(){f.reset()}),b[0]&&b[0].validity&&b.each(function(){this.oninvalid=function(){return!1}}),c[0]&&(c[0].checkValidity=f.checkValidity),e.inputEvent&&b.bind(e.inputEvent+".V",function(b){f.checkValidity(a(this),b)}),b.filter(":checkbox, select").filter("[required]").bind("change.V",function(b){var c=a(this);(this.checked||c.is("select")&&a(this).val())&&k[e.effect][1].call(f,c,b)});var m=b.filter(":radio").change(function(a){f.checkValidity(m,a)});a(window).resize(function(){f.reflow()})}a.fn.validator=function(b){var c=this.data("validator");c&&(c.destroy(),this.removeData("validator")),b=a.extend(!0,{},g.conf,b);if(this.is("form"))return this.each(function(){var d=a(this);c=new l(d.find(":input"),d,b),d.data("validator",c)});c=new l(this,this.eq(0).closest("form"),b);return this.data("validator",c)}})(jQuery);

/* customSelect by Adam Coulombe - http://www.adamcoulombe.info/lab/jquery/select-box/ */
(function($){$.fn.extend({customStyle:function(options){if(!$.browser.msie||($.browser.msie&&$.browser.version>6)){return this.each(function(){var currentSelected=$(this).find(':selected');$(this).after('<span class="customStyleSelectBox"><span class="customStyleSelectBoxInner">'+currentSelected.text()+'</span></span>').css({position:'absolute',opacity:0,fontSize:$(this).next().css('font-size')});var selectBoxSpan=$(this).next();var selectBoxWidth=parseInt($(this).width())-parseInt(selectBoxSpan.css('padding-left'))-parseInt(selectBoxSpan.css('padding-right'));var selectBoxSpanInner=selectBoxSpan.find(':first-child');selectBoxSpan.css({display:'inline-block'});selectBoxSpanInner.css({width:selectBoxWidth,display:'inline-block'});var selectBoxHeight=parseInt(selectBoxSpan.height())+parseInt(selectBoxSpan.css('padding-top'))+parseInt(selectBoxSpan.css('padding-bottom'));$(this).height(selectBoxHeight).change(function(){selectBoxSpanInner.text($(this).find(':selected').text()).parent().addClass('changed');});});}}});})(jQuery);

// for all browsers that do not support console
if (typeof console == "undefined") {
	this.console = {log: function() {},warn: function() {},dir: function() {},error: function(msg) {throw msg}};
}

/************************************************
HDM Javascript Library
	See http://wiki.ops.hearstdigital.com/wiki/HDM_Javascript_Library
*************************************************/
var HDM = {};
/** HDM.vars - Holds various site variables we get during HDM.init and used later on **/
HDM.vars = {
	siteName: null, //site name.. might not need this
	facebookAppID: null, //fb app id.. need this to init FB API
	twitterAPI: null, //twitter API URL.. Site's cached twitter feed
	articleID: null, //article id.. might not need this
	adRefreshInterval: null, //ad refresh interval.. how many pageviews does it take to refresh the ads
	flipbookAdPosition: null, //ad position for the flipbook.. will be something like "ams_gh_flipbook"
	flipbookAdInterval: null, //flipbook ad interval.. how many slides before you see an ad
	pageAdsParams: null //pageAdsParams.. global js variable declared in page-ads.js.. has ad targeting info for when we need to get new ads
};
/** HDM.init - Takes a "Site" JSON object and initializes certain values **/
HDM.init = function(siteObj){
	$.extend(HDM.vars,siteObj); //extend our vars with the Site's
	var vars = HDM.vars;
	HDM.registration.init(vars.facebookAppID); //initialize registration with the FB App ID
	HDM.ads.init(vars.pageAdsParams,vars.adRefreshInterval); //initialize ads with the pageAdsParams and refresh interval
};
/*****************************
*	HDM.utils
*	- HDM.utils is a namespace for utility methods
*
******************************/
HDM.util = HDM.utils = {
	key: {
		BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESCAPE: 27, SPACE: 32, PAGEUP: 33,
		PAGEDOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, INS: 45, DEL: 46
	},
	setCookie: function(name,value,days){
		var expDate = new Date(), cookieValue;
		expDate.setDate(expDate.getDate() + days);
		cookieValue = encodeURIComponent(value) + ( (days == null) ? '' : ';expires=' + expDate.toUTCString() );
		document.cookie = name + '=' + cookieValue;
	},
	setCookieAdvanced : function(name,value,options){
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
		}
	},
	getCookie: function(name){
		var nameEQ = name + "=",
			ca = document.cookie.split(';');
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) === ' ') {c = c.substring(1,c.length);}
			if (c.indexOf(nameEQ) === 0) {
				var result = c.substring(nameEQ.length,c.length);
				return result;
			}
		}
		return null;
	},
	eraseCookie: function(name){
		if ( HDM.utils.getCookie(name) ){
			document.cookie = name + '=' + ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
		}
	},
	getCookieDump: function(){
		var cookies = document.cookie.split(';'), cookieDump = {};
		for (var i = 0; i < cookies.length; i++){
			var thisCookie = cookies[i].split('=');
			cookieDump[thisCookie[0]] = thisCookie[1];
		}
		return cookieDump;
	},
	buildScriptTag: function(src,callback){
		var script = document.createElement('script'), $head = $('head');
		$head.find('script').filter(function(i){
			return $(this).attr('src') && $(this).attr('src').split('?')[0] == src.split('?')[0];
		}).remove();
		script.src = src;
		script.onload = function(){
			try{
				callback();
			} catch(e){}
		};
		script.onreadystatechange = function(){
			if (script.readyState === 'loaded' || script.readyState === 'complete'){
				try{
					callback();
				} catch(e){}
			}
		};
		$head.get(0).appendChild(script);
	},
	cacheBust: function(){
		return Math.floor(1 + Math.random() * 100000);
	},
	getParameter: function(key){
		var params = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for (var i = 0, len = params.length; i < len; i++){
			var param = params[i].split('=');
			if (param[0] === key){
				return param[1];
			}
		}
		return false;
	},
	setBreadcrumb: function(){
		if (Modernizr.localstorage){
			localStorage.nextURL = window.location.href;
		} else {
			HDM.utils.setCookie('nextURL',window.location.href);
		}
		return true;
	},
	getBreadcrumb: function(preserve){
		var nextURL = '';
		if (Modernizr.localstorage && !!localStorage.nextURL){
			nextURL = localStorage.nextURL;
			if (!preserve){ delete localStorage.nextURL; }
		} else {
			nextURL = HDM.utils.getCookie('nextURL') || '/';
		}
		return nextURL;
	},
	storeData: function(key,data){
		if (Modernizr.localstorage){
			localStorage[key] = (typeof data === 'object') ? JSON.stringify(data) : data;
		} else {
			HDM.utils.setCookie(key,encodeURIComponent(data));
		}
	},
	getData: function(key){
		if (Modernizr.localstorage){
			return localStorage[key];
		} else {
			return HDM.utils.getCookie(key);
		}
	},
	getJSON : function(key){
		var unparsed = this.getData(key);
		try{
			// seems wierd using a try/catch block to pass code, but I'm pressed for time
			// I'll fix this later
			return JSON.parse(unparsed);
		} catch(e){
			return {}
		}
	},
	eraseData: function(key){
		if (Modernizr.localstorage){
			delete localStorage[key];
		} else {
			HDM.utils.eraseCookie(key);
		}
	},
	processQueue: function (name, queue, params) {
		var queuebuffer = queue.slice(0);
		while (queuebuffer.length > 0) {
			var func = queuebuffer.pop();
			try {
				func(params);
			} catch (e) {
				console.error("[HDM.utils.processQueue:"+name+"]" + e + "\n\n" + func);
			}
		}
	},
	// really empty.. lets fill this out soon!!
	tmpl : function(str,data){ // HDM.utils.tmpl()
		// resig's nifty micro templating engine. so sweet.
		/// <summary>
		/// Client side template parser that uses &lt;#= #&gt; and &lt;# code #&gt; expressions.
		/// and # # code blocks for template expansion.
		/// NOTE: chokes on single quotes in the document in some situations
		///       use &amp;rsquo; for literals in text and avoid any single quote
		///       attribute delimiters.
		/// </summary>
		/// <param name="str" type="string">The text of the template to expand</param>
		/// <param name="data" type="var">
		/// Any data that is to be merged. Pass an object and
		/// that object's properties are visible as variables.
		/// </param>
		/// <returns type="string" />
		if (this._tmplCache == null){
			this._tmplCache = {};
		}
		var err = "";
		try {
			var func = this._tmplCache[str];
			if (!func) {
				var strFunc = "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+str.replace(/[\r\t\n]/g," ").replace(/'(?=[^#]*#>)/g,"\t").split("'").join("\\'").split("\t").join("'").replace(/<#=(.+?)#>/g,"',$1,'").split("<#").join("');").split("#>").join("p.push('")+"');}return p.join('');";
//				console.log("((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((")
//				console.log(strFunc);
				func = new Function("obj", strFunc);
				this._tmplCache[str] = func;
			}
			return func(data);
		} catch (e) {
			err = e.message;
			console.error(e);
			console.warn("[TMPLERROR] "+str);
			console.warn("var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+str.replace(/[\r\t\n]/g," ").replace(/'(?=[^#]*#>)/g,"\t").split("'").join("\\'").split("\t").join("'").replace(/<#=(.+?)#>/g,"',$1,'").split("<#").join("');").split("#>").join("p.push('")+"');}return p.join('');");
		}
		return "< # ERROR: " + err.htmlEncode() + " # >";
	},
	buildScriptTag: function(src,callback){
		var script = document.createElement('script'), $head = $('head');
		$head.find('script').filter(function(i){
			return $(this).attr('src') && $(this).attr('src').split('?')[0] == src.split('?')[0];
		}).remove();
		script.src = src;
		script.onload = function(){
			try{
				callback(this);
			} catch(e){}
		};
		script.onreadystatechange = function(){
			if (script.readyState === 'loaded' || script.readyState === 'complete'){
				try{
					callback(this);
				} catch(e){}
			}
		};
		$head.get(0).appendChild(script);
	},
	callbackPool : function callbackPool(){
		var eventPool = {};
		var oncePool = {};
		var listEvents = function(){
			for (name in eventPool){
				console.log("eventName:",name)
			}
		}
		var listCallbacks = function(eventName){
			var event = eventPool[eventName];
			if (event){
				for (var i = 0; i < event.length; i++){
					console.log("callback for "+eventName,event[i]);
				}
			} else {
				console.error("event name not found:",eventName);
			}
		}
		var listAll = function(){
			for (name in eventPool){
				console.log("eventName:",name)
				listCallbacks(name);
			}
		}
		var addToPool = function(pool,name,callback,opt){
			console.log("using add2pool");
			pool[name] = pool[name] || [];
			opt = opt || 100;

			function buildEvent(callback,opt){
				var eventObj = {
					fn : callback,
					opt : opt
				}
				return eventObj;
			}
			function compareEvents(a,b) {
				if (a.opt < b.opt) return -1;
				if (a.opt > b.opt) return 1;
				return 0;
			}
			if (typeof callback == "function"){
				pool[name].push(new buildEvent(callback,opt));
				var sorted = pool[name].sort(compareEvents);
				pool[name] = sorted;
			} else {
				throw "invalid callback binding"
			}
			return pool[name].length;
		}		// exports
		this.debug = {
			listEvents : listEvents,
			listCallbacks : listCallbacks,
			all : listAll
		}
		this.dispatchEvent = function(name,args){
			// oncePool always fires first...
			if (oncePool[name]){
				while(oncePool[name].length > 0){
					var func = oncePool[name].pop();
					try {
						func.fn(args);
					} catch(e){
						console.error("callbackPool error:"+e)
					}
				}
			}
			if (eventPool[name]){
				var callbacklist = eventPool[name];
				for (var i = 0; i < callbacklist.length; i++){
					try {
						callbacklist[i].fn(args);
					} catch(e){
						console.error("callbackPool error:"+e)
					}
				}
			}
			if (!oncePool[name] || !eventPool[name]){
				console.warn("callback Event:"+name+" not found")
			}
		};
		this.once = function(name,callback,opt){
			addToPool(oncePool,name,callback,opt);
		}
		this.on = function(name,callback,opt){
			addToPool(eventPool,name,callback,opt);
		};
		return this;
	},
	// HDM utility class for loading scripts
	ScriptQueue: (function () {
			var constructor;
			constructor = function () {
					var self = this;
					this.process = function () {
							if (this.stack.length) {
									var source = this.stack.shift();
									source.complete = function () {
											self.process();
									};
									source.cache = true;
									$.ajax(source);
							}
					};
			};
			return constructor;
	})()
};

// Public class member variable to hold an array stack of scripts to load
HDM.utils.ScriptQueue.prototype.stack = [];

// Instance of ScriptQueue for deferred scripts
HDM.DeferredScriptQueue = new HDM.utils.ScriptQueue();


/*****************************
HDM.widgets
	HDM Widgets is a namespace for small reusable widgets that can be used in any given application.
*****************************/
HDM.widgets = {};
/*****************************
HDM.widgets.TabPanel - Provides a tab/panel interface
I will be deprecating this. $.tools.tabs is included above. Much better plugin.
*****************************/
HDM.widgets.TabPanel = function(){
	var TabPanel = this;
	this.currentIndex = 0;
	this.tabs = [];
	this.working = false;
	//moves to the next tab
	this.nextTab = function(){
		if (TabPanel.currentIndex < TabPanel.tabs.length - 1){
			TabPanel.setActiveTab(TabPanel.currentIndex + 1);
			return true;
		} else {
			return false;
		}
	};
	//moves to the previous tab
	this.prevTab = function(){
		if (TabPanel.currentIndex > 0){
			TabPanel.setActiveTab(TabPanel.currentIndex - 1);
			return true;
		} else {
			return false;
		}
	};
	this.onTabChange = function(currentTab,newTab){
		$(currentTab.panel).fadeOut();
		$(newTab.panel).fadeIn();
	};
	//sets the active tab
	this.setActiveTab = function(newIndex){
		this.working = true;
		//switch aria-hidden on the panels
		var currentTab = TabPanel.tabs[TabPanel.currentIndex],
			newTab = TabPanel.tabs[newIndex];
		//set the currentIndex
		TabPanel.currentIndex = newIndex;
		newTab.panel.setAttribute('aria-hidden',false);
		currentTab.panel.setAttribute('aria-hidden',true);
		//switch tabindex on the tabs
		newTab.tab.tabIndex = 0;
		currentTab.tab.tabIndex = -1;
		//switch selected states on tab
		$(newTab.tab).addClass('selected');
		$(currentTab.tab).removeClass('selected');
		//switch selected states on the panel
		$(newTab.panel).addClass('selected');
		$(currentTab.panel).removeClass('selected');
		//focus the new tab
		//newTab.tab.focus();
		//look for a tabChange callback and get'er dun
		if (typeof TabPanel.onTabChange === 'function'){
			TabPanel.onTabChange(currentTab,newTab);
		}
		this.working = false;
	};
	//adds a new tab into the tab list
	this.addTab = function(tab,panel,initCallback){
		var t = { tab: tab, panel: panel };
		if (typeof initCallback === 'function'){ t.init = initCallback; }
		TabPanel.tabs[TabPanel.tabs.length] = t;
	};
	//returns true if the node passed in is a tab
	this.isTab = function(node){
		return (TabPanel.getTabIndex(node) > -1);
	};
	//returns the index of the tab passed in or -1 if the tab is not in the tab list
	this.getTabIndex = function(node){
		var index = -1;
		for (var i = 0, len = TabPanel.tabs.length; i < len; i++){
			if (TabPanel.tabs[i].tab === node){ index = i; }
		}
		return index;
	};
	//click handler
	this.handleClick = function(tabClicked){
		if (TabPanel.working){ return false; }
		var tabIndex;
		if (TabPanel.isTab(tabClicked)){
			tabIndex = TabPanel.getTabIndex(tabClicked);
			if (tabIndex !== TabPanel.currentIndex){ TabPanel.setActiveTab(tabIndex); }
			return false;
		}
		return true;
	};
	this.init = function(container){
		//make sure we have tabs
		TabPanel.container = container;
		if (TabPanel.tabs.length < 1){
			try {
				console.error('No tabs have been added to the tabPanel widget.');
			} catch(e){ }
			return;
		}

		$(TabPanel.tabs).each(function(){
			$(this.tab).click(function(){
				TabPanel.handleClick(this);
				return false;
			});
		});
	};
	return this;
};
/****************************
HDM.widgets.Pager

****************************/
HDM.widgets.Pager = function(container){
	var Pager = this;
	this.currentIndex = 0; //track the current page's index
	this.pages = []; //array of pages in the widget
	this.container = container; //container for the widget.. when focused RIGHT will go to next page, LEFT will go back
	this.onPageChange = function(currentPage,nextPage){}; //onPageChange event.. called when page changes
	//moves to the next page if possible, if not, return false
	this.nextPage = function(){
		if (Pager.currentIndex < Pager.pages.length - 1){
			Pager.setActivePage(Pager.currentIndex + 1);
			return true;
		} else {
			return false;
		}
	};
	//moves to the last page if possible, if not, return false
	this.prevPage = function(){
		if (Pager.currentIndex > 0){
			Pager.setActivePage(Pager.currentIndex - 1);
			return true;
		} else {
			return false;
		}
	};
	this.setActivePage = function(newIndex){
		var curPage = Pager.pages[Pager.currentIndex],
			nextPage = Pager.pages[newIndex];

		$(curPage).removeClass('selected');
		$(nextPage).addClass('selected');

		Pager.currentIndex = newIndex;

		if (typeof Pager.onPageChange === 'function'){
			Pager.onPageChange(curPage,nextPage);
		}
	};
	this.addPage = function(page){
		var pages = Pager.pages;
		pages[pages.length] = page;
	};
	this.getPageIndex = function(page){
		var pages = Pager.pages, index = -1;
		for (var i = 0, len = pages.length; i < len; i++){
			if (pages[i] === page) index = i;
		}
		return index;
	};
	return this;
};
/****************************
HDM.video
	Namespace for video players
	Contains classes for Brightcove and MSN interfaces
****************************/
HDM.video = {
	BrightcovePlayer: function(bcExperienceName,params){},
	MSNPlayer: function(params){}
};
HDM.ads = {
	viewCount: 1, //this is the first view, so set to 1
	//fake ad tags taken from live GHK.. for testing
	fakeAdJSON: {
		"ams_gh_top":"<!-- Begin 728x90 Top Ad Tag -->\r\n<script language=\"JavaScript\" type=\"text/javascript\">\r\nif(typeof(segQS) == \"undefined\") {var segQS=\"\";}\r\nif(typeof(ord) == \"undefined\") {var ord=\"1234567890\";}\r\nif(typeof(g_GamePageName) == \"undefined\") {var g_GamePageName = '';};\r\ndocument.write('<script language=\"JavaScript\" src=\"http://ad.doubleclick.net/adj/hdm.goodhousekeeping/wellness/;sz=728x90,1000x124;tile=1;pos=1;' + segQS + 'site=goodhousekeeping;sect=health;sub=advice;subsub=index;page=healthy-alternatives;cat=wellness;subcat=;tool=cravings-911;kw=;a=;b=;game=' + g_GamePageName + ';ord=' + ord + '?\" type=\"text/javascript\"><\\/script>');\r\n</script>\r\n<!-- End 728x90 Top Ad Tag -->\r\n<script language=\"Javascript\">if (typeof lb728t == 'object'){lb728t[0] = 1;lb728t[1]++} else {var lb728t = new Array(2);lb728t[0]=1;lb728t[1]=0};</script>",
		"ams_gh_gallery":"<!-- Begin 336x280 Top Ad Tag -->\r\n<script language=\"JavaScript\" type=\"text/javascript\">\r\nif(typeof(segQS) == \"undefined\") {var segQS=\"\";}\r\nif(typeof(ord) == \"undefined\") {var ord=\"1234567890\";}\r\nif(typeof(g_GamePageName) == \"undefined\") {var g_GamePageName = '';};\r\ndocument.write('<script language=\"JavaScript\" src=\"http://ad.doubleclick.net/adj/hdm.goodhousekeeping/wellness/;sz=336x280;tile=2;pos=4;' + segQS + 'site=goodhousekeeping;sect=health;sub=advice;subsub=index;page=healthy-alternatives;cat=wellness;subcat=;tool=cravings-911;kw=;a=;b=;game=' + g_GamePageName + ';ord=' + ord + '?\" type=\"text/javascript\"><\\/script>');\r\n</script>\r\n<!-- End 336x280 Top Ad Tag -->\r\n<script language=\"Javascript\">if (typeof gal336t == 'object'){gal336t[0] = 1;gal336t[1]++} else {var gal336t = new Array(2);gal336t[0]=1;gal336t[1]=0};</script>"
	},
	ispreview : /a\w+preview/.test(document.location.hostname),
	//array of regular expressions that will match our ads.. i could have made one big one, but this is more readable (and easier to add to)
	refreshablePositions: [
		/^ams_\w+_top$/i, //banner ad
		/^ams_\w+_banner$/i, //banner ad - alternative title since most are labeled _top instead of _banner
		/^ams_\w+_tower$/i, //tower ad
		/^ams_\w+_skyscraper$/i, //tower ad
		/^ams_(?!(cos|elle|mar)_og2_reactions_social_amp)\w+_bottom$/i, //bottom banner
		/^ams_\w+_bot$/i, //bot banner
		/^ams_\w+_gallery$/i, //gallery ad
		/^ams_\w+_gallery_bot$/i, //bottom gallery ad
		/^ams_\w+_wild$/i, //wild card ad
		/^ams_\w+_social_ad$/i //social ad
	],
	positionList: '', //String - will store the position list string for page-ads.js
	pageAdsParams: {}, //Object - will store the pageAdsParams object for page-ads.js
	//intializer.. sets up the pageAdsParams object for page-ads calls.. sets the refresh and flipbook ad intervals
	init: function(pageAdsParams,refreshInterval,flipbookAdInterval){
		var self = HDM.ads,
			positionList, //this will hold our position list after filtering it through the white list
			$allPositions = $('[id^=ams_]'); //this collection will contain all ams elements on the page
		self.pageAdsParams = pageAdsParams || {};
		self.pageAdsParams.position_list = self.getPositionList($allPositions);
		self.refreshInterval = refreshInterval || 4;
		self.flipbookAdInterval = flipbookAdInterval || 5;
		window.refreshAds = self.refreshAds; //set the global refreshAds function for legacy applications
	},
	//returns a list of positions to refresh as a string: 'ams_gh_top,ams_gh_gallery'
	getPositionList: function ($positions) {
		//$positions will be a jQuery collection of all ad nodes on the page
		var self = HDM.ads,
			positionArray = []; //start off with an empty string
		//loop through the ads
		$positions.each(function () {
			//loop through the list of refreshable positions
			for (var i = 0, len = self.refreshablePositions.length; i < len; i++) {
				//if our ad node's id matches the refreshable position, add it to the list
				if (this.id.match(self.refreshablePositions[i]) && !(/gptLayer/.test($('#' + this.id).contents('script').text()))) {
					positionArray.push(this.id);
				}
			}
		});
		return positionArray.join(','); //return the list and get rid of the trailing comma
	},
	//this function will make all of our tracking calls
	trackingCalls: function(pageName){
		try {
			if(typeof pageName === 'undefined') {
				pageviewTracking();
			} else {
				pageviewTracking(pageName);
			}
		} catch(e) {}
		try { _vrtrack(); } catch(e) {}
	},
	refreshAds: function(forceRefresh, pageName){
		ord = Math.floor(Math.random()*10e12);
		var self = HDM.ads,
			//check to see if the dapMgr object exists and we're on delish.. if so we're gonna call a different function
			isMSN = (typeof dapMgr === 'object') && window.location.hostname.match('delish.com');
		if (isMSN){ return self.refreshMSNAds(); } //if it's MSN, call the msn refresh ads function and exit
		if (forceRefresh === true || self.viewCount >= self.refreshInterval){ //if we're forcing a refresh or we've reached the refresh interval..
			self.getGPT();
			self.getAds(function(adjson){ //get the new ads
				self.renderAdJSON(adjson); //render the ads that come back
				self.trackingCalls(pageName); //execute the tracking calls
			});
			self.viewCount = 1; //reset the view count
			return true;
		}
		self.trackingCalls(pageName);
		self.viewCount++; //if we didn't force a refresh or hit the refresh interval, increment the view count
		return false;
	},
	refreshMSNAds: function(){
		//call the MSN tracking functions
		try { wlAnalytics.TrackPage(); }
		catch (e) {
			try {
				$.track.trackInfo.userStatic.requestId = null;
				$.track.trackPage();
			} catch(e){}
		}
		//find the msn ads
		$('[id^=ams_del]').each(function(){
			var adIndex = dapMgr.getAdItemIndex(this.firstChild.id); //get the index of the ad in dapMgr
			if (adIndex >= 0){ dapMgr.displayAd(adIndex); } //if we have a valid ad index, refresh it
		});
		return true;
	},
	//renderAds takes a position name and a target jQuery object
	//it makes a call to page-ads for the positionName and renders the ad inside the target
	renderAd: function(positionName,$target,parentWidth,parentHeight,browserPath){
		var self = HDM.ads;
		//if a target wasn't passed, look for an element with the same id as the position name
		if (typeof target === 'undefined'){
			target = $(document.getElementById(positionName));
		}
		self.getAds(function(adjson){ //get the ad, passing in the position name
			self.renderAdJSON(adjson,$target,parentWidth,parentHeight); //render the ad
		},positionName,browserPath);
	},
	//all this really does it take a string and wrap it in jQuery then append it to the container
	//need to look for the document.write doubleclick stuff and handle that appropriately
	renderAdJSON: function(adjson,$target,parentWidth,parentHeight){
		// sorting by tile!
		var tileorder = [];
		for (var key in adjson){
			var adObj = {
				"positionName" : key,
				"creative" : adjson[key],
				"order" : /\;tile\=(\d*)\;/.test(adjson[key]) ? parseInt(/\;tile\=(\d*)\;/.exec(adjson[key])[1]) : 999
			}
			tileorder.push(adObj);
		}

		tileorder.sort(function(a,b){return (a.order-b.order)});

		for (var i = 0; i < tileorder.length; i++){
			var val = tileorder[i].creative;
			var adPositionName = tileorder[i].positionName;
			if (!adPositionName){
				if (HDM.ads.ispreview)	console.error("invalid json! adPositionName",adPositionName);
				continue;
			}
			if (HDM.ads.ispreview)	console.warn("AD RENDER CHECK",adPositionName,"############",val);

			//if there's a target passed, that's out container.. otherwise get the element with the id of our ad object
			var $container = (typeof $target === 'undefined') ? $(document.getElementById(adPositionName)) : $target,
				$adHTML, //this will hold out ad html
				randomColor, //random color we'll give to preview ad backgrounds for lols
				isAdDebug = val.match('FOR PREVIEW ONLY - Ad Ops Debug'), //look for preview ads for testing the refresh
				isDoubleClick = val.match('ad.doubleclick.net/adj/'); //matches doubleclick javascript ads.. we need to turn them into iframe ads


			var refreshTMPLRegexp = /\<script type=\"text\/html\" ams_refresh_tmpl=\"\w*\"\>[\s\S]*?\<\/script\>/;
			var isRefreshTMPL = refreshTMPLRegexp.test(val);
			var isGPTLayer = /gptLayer/.test(val);

			if (isGPTLayer){
				if (HDM.ads.ispreview) console.warn("gptLayer found in "+adPositionName);
				continue;
			} else if (isRefreshTMPL){
				val = HDM.ads.handleRefreshTMPL(refreshTMPLRegexp.exec(val)[0],adPositionName)
				if (HDM.ads.ispreview)	console.warn("--------------------my ad!",val)
			} else if ( isDoubleClick ){ //if it's a doubleclick ad.. handle it
				val = HDM.ads.handleDoubleclickAd(val,parentWidth,parentHeight,adPositionName); //swap the document.write for an iframe
			}
			$adHTML = $(val); //wrap the string in jquery and poof we have an ad
			if ( isAdDebug ){ //if it's a preview ad..
				randomColor = 'rgb(' + Math.ceil(Math.random()*254) + ',' + Math.ceil(Math.random()*254) + ',' + Math.ceil(Math.random()*254) + ')'; //get a random rgb color
				$adHTML.filter('div').css({'background-color':randomColor}); //set the divs background-color to our random color
			}

			if (isRefreshTMPL){
//				console.warn("--------------------INSERTING!",$adHTML,$container)
				$container.html($adHTML); //insert the ad html into the container
//				$container.html(val)
			} else if (isDoubleClick){
				$container.html($adHTML); //insert the ad html into the container
			} else {
				if (HDM.ads.ispreview)	console.error("[pageAds ERROR] nonsupported insert of ad. Please review ad content",val)
				$container.html($adHTML);
			}

		};
	},
	handleRefreshTMPL : function(parsed,amsposition){

		var myreg = new RegExp("ams_refresh_tmpl=[\"|']"+amsposition+"[\"|']","i")
		if (myreg.test(parsed)){
			var firsttag = parsed.match(/<script(.*)>/gi)[0];
			var lasttag = parsed.match(/<\/script>/gi)[0]
			var mytmpl = parsed.replace(firsttag,"").replace(lasttag,"");
			var output = HDM.utils.tmpl(mytmpl,window);
			if (HDM.ads.ispreview)	console.log("################################# AMS POSITION:"+amsposition,output,"/################################# AMS POSITION:"+amsposition)
			return output;
		} else {
			console.error("[adRefresh] illegal amsposition! "+amsposition,parsed);
			return "<!-- illegal ams position used "+amsposition+" -->";
		}
	},
	handleDoubleclickAd: function(adCode,parentWidth,parentHeight){
		//finds the document.write line in the doubleclick ad
		var doubleclickReg = /document\.write\(\'<script[\s\w="]+src="([\w\s\:\/\.;=,'\+-?]+)"[\s\w="\/]+><\\\/script>'\);/,
			sizeCodeReg = /\d{1,4}x\d{1,4}/g, //looking for size codes like 336x280, 1024x90, etc..
			varReplaceReg = /'\s\+\s\w*\s\+\s'/g, //find variables we need to replace (' + ord + ')
			varNameReg = /\w+/, //matches the variable name in the string being replaced abovedoubleclickURL,
			doubleclickURL, //will hold our doubleclick iframe url
			variablesToReplace, //array for the variables we need to replace
			tempVar; //temp var to hold the variable names
			//sizeArray, //array for the ad size codes
			//tempSize, //temp var to hold the sizes
			//styleString = ""; //style string for the iframe
		try{
			doubleclickURL = doubleclickReg.exec(adCode)[1]; //the url for our doubleclick ad tag
		} catch(e) {
			console.error("[handleDoubleclickAd] check failed!",adCode)
			return "<!-- FAIL --><!-- "+adCode+" --><!-- /FAIL -->";
		}
		doubleclickURL = doubleclickURL.replace('/adj/','/adi/'); //swap adj (js document.write implementaion) for adi (iframe implementation)
		adCode = adCode.replace(doubleclickReg,''); //strip out the document.write line
		variablesToReplace = doubleclickURL.match(varReplaceReg); //get an array of the variables we need to replace
		//loop through the variables
		for (var j = 0; j < variablesToReplace.length; j++){
			tempVar = variablesToReplace[j].match(varNameReg)[0]; //get the variable name
			tempVar = window[tempVar] || ''; //look to window for a value.. or give it an empty string
			doubleclickURL = doubleclickURL.replace(variablesToReplace[j],tempVar); //replace the variables with values
		}
		sizeArray = doubleclickURL.match(sizeCodeReg); //get the size code array
		//if there's only 1 size code, just set the style string to that size
		tempSize = sizeArray[0].split('x'); //get [width,height]
		styleString = "width:" + tempSize[0] + "px;height:" + tempSize[1] + "px;border:none;";
		//add our iframe tag into the ad string
		if (parentWidth) {
			console.log("parentWidth: " + parentWidth);
			adCode += '<iframe src="' + doubleclickURL + '" width="' + parentWidth + '" height="' + parentHeight + '" style="border:0 none;" frameborder="0" scrolling="no" marginWidth="0" marginHeight="0"></iframe>';
		} else {
			adCode += '<iframe src="' + doubleclickURL + '" width="' + tempSize[0] + '" height="' + tempSize[1] + '" style="' + styleString + '" frameborder="0" scrolling="no" marginWidth="0" marginHeight="0"></iframe>';
		}
		return adCode; //return it
	},
	getGPT : function(){
		try{
			if (window["gptLayer"].refreshArray.length > 0){
				window["gptLayer"].refresh();
			}
		} catch(e){
			if (HDM.ads.ispreview) console.error("gptLayer not found, skipping gptLayer.refresh()",e);
		}
	},
	getAds: function(callback,positionName,browserPath){
		var self = HDM.ads,
			pageAdsParams = $.extend({},self.pageAdsParams); //get a temporary pageAds Params object
		if (typeof callback !== 'function'){
			callback = function(){};
		}
		//if we passed in a position, overwrite the temp position list
		if (typeof positionName === 'string'){
			pageAdsParams.position_list = positionName;
		}
		if (typeof browserPath === 'string'){
			pageAdsParams.browser_path = browserPath;
		}

		if (pageAdsParams.position_list.length == 0) {
			callback({});
		} else {
			//get the ads
			$.ajax({
				url: '/ams/page-ads.js',
				data: pageAdsParams,
				dataType: 'json',
				success: function(json){
					callback(json); //fire the callback
				}
			});
		}
	},
	getPageAds: function (json) {
		pageAds = json;
		$('.ams-mixed-defer').each(HDM.ads.loadPageAd);
	},
	loadPageAd: function (index, pageAd) {
		var adContent = pageAds[pageAd.id];
		$(pageAd).html($(adContent));
	}
};

/******************************************************************************
HDM track object
the front end fires tracking events
	HDM.track.dispatchEvent("customEvent");

the back end creates those events and listens to them
	HDM.track.on("customEvent",function(){ alert("this is my tracking event!")},1);

******************************************************************************/
HDM.track = new HDM.utils.callbackPool();
// For IE8 and earlier version.
if (!Date.now) {
	Date.now = function() {
		return new Date().valueOf();
	};
}
/** HDM.registration **/

HDM.registration = {
	_vars : {
		mag_user : {},
		hearst_user : {},
		fbAppID : null,
		fbResponse : null,
		fbUser : null, // need to fix this..
		_event_queue : {
			loggedin : [],
			loggedout : [],
			//renderLoginLinks : []
		},
		loginstate : -1, // -1 == undefined..
		processAttempt : 0
	},
	count : {
		callstomag_user : 0
	},
	ha :{
		mode : false,
		check : function(){

		}
	},
	init : function(fbAppID){// lives in here because I don't know where mike may call this elsewhere. In any case, this is more legacy than anything..
		// make sure this code isn't run twice..

		// this function is about to handle the profile picture pickup
		window.parent.preview = function (o) {
			var profilePic = document.querySelector("#profileImage img");
			if (o.type === 'file') {
				profilePic.src = (o.files) ? o.files[0].getAsDataURL() : 'file:///' + o.value;
			} else {
				profilePic.src = o.value || original;
			}
			$imageInputs = $("#upload_user_icon, #url_user_icon");
			$imageInputs.not(o).attr('value', '');
		}

		try{
			if (!this._vars.initialized){
				this._vars.initialized = true;
			} else {
				throw("[HDM.registration.init] initialization already invoked: aborting")
			}
		} catch(error){
			return;
		}

		$(document).ready(function(){ // wrapping this in a document.ready because of certain placement
			// lets do some reg prepwork..

		//event for tracking nextURL
		$('a.trackSender').click(function(){
			return HDM.utils.setBreadcrumb();
		});
		//event to return to nextURL
		$('a.returnToSender').click(function(){
			var sender = HDM.utils.getBreadcrumb();
			if (!!sender){
				window.location.href = sender;
			}
			return false;
		});
		//learn more reg tooltips
		$('.learnMore.hdmTooltip').tooltip({
			tipClass: 'regTooltipContent',
			effect: 'fade',
			events: { def: 'mouseenter,mouseleave' },
			position: ['bottom','center'],
			offset: [10,0],
			delay: 100
		});
		//render 100 years back and set the users year if found
		//this should only run on pages with the dob_year select box on them
		$('select[name=dob_year]').each(function(){
			var currentYear = (new Date()).getFullYear(),
				startYear = currentYear - 100,
				$select = $(this), selectedYear = $select.attr('data-selectedyear'),
				$option = $('<option />'), $optionClone;

			for (var i = currentYear; i >= startYear; i--){
				$optionClone = $option.clone();
				$optionClone.val(i);
				$optionClone.text(i);
				if (!!selectedYear && selectedYear == i){
					$optionClone.attr('selected','selected');
				}
				$select.append($optionClone);
			}
		});
		//set the user's month if found
		$('select[name=dob_month]').each(function(){
			var $select = $(this), selectedMonth = $select.attr('data-selectedmonth'),
				$options = $select.find('option'), $selectedOption;
			if (!!selectedMonth){
				$selectedOption = $options.filter('[value='+ selectedMonth + ']');
				$select.get(0).selectedIndex = $options.index($selectedOption);
			}
		});
		//set the user's dob day if found
		$('select[name=dob_day]').each(function(){
			var $select = $(this), selectedDay = $select.attr('data-selectedday'),
				$options = $select.find('option'), $selectedOption;
			if (!!selectedDay){
				$selectedOption = $options.filter('[value=' + selectedDay + ']');
				$select.get(0).selectedIndex = $options.index($selectedOption);
			}
		});
		//we need to do some basic validation on the login and reg forms and set the cookie so we get an updated mag_user on next load
		$('#hdmLoginForm, #hdmEditProfileForm, #hdmRegistrationForm, #hdmConnectLogin, #quizLogin').submit(function(){
			var $this     = $(this)
				, $required = $this.find('[required]')
				, $error    = $this.find('.formError')
				, valid     = true;
			//validation
			switch ( this.id ){
				case 'hdmLoginForm':
					$required.each(function(i, val){
						if ( !val.value ){
							valid = false;
							$(val).addClass('error');
						} else {
							$(val).removeClass('error');
						}
					});
					if ( !valid ){
						$error.text('Please fill in all required fields.');
						$error.fadeIn( 200 );
					} else {
						$error.fadeOut( 200 );
					}
				default:
					break;
			}
			if ( valid ){ HDM.utils.storeData('hdm_forceMagUserUpdate',true); }
			return valid;
		});
		})

		if ( !Modernizr.localstorage || !!HDM.utils.getData('hdm_linkProcess') || !!HDM.utils.getData('hdm_forceMagUserUpdate') || (document.location.pathname == "/login/")){
			forceMagUserUpdate = true;
		}


		this.boot.start(fbAppID);
	},
	process : function(){
		// now that we have all 3 states, lets begin!
		HDM.registration._vars.processAttempt++;
		if (HDM.registration._vars.processAttempt > 4){
//			console.error("[HDM.registration.process] loop detected! Aborting. Setting default")
			if (!HDM.registration._vars.mag_user){
				HDM.registration._vars.mag_user = { logged_in: false,tempstatus: true };
			}
			HDM.registration._vars.hearst_user = HDM.registration._vars.mag_user;

			//HDM.utils.processQueue("queue.loggedin",HDM.registration._vars._event_queue.loggedout);
			return false;
		}
		if (HDM.registration._vars.processAttempt == 1){
			$("[action='/registration/login'],[action='/registration/logout']").submit(function(){
				HDM.utils.storeData('hdm_forceMagUserUpdate',true);
				return true;
			});
		}

		var fbLoggedin = HDM.registration._vars.fbResponse ? (HDM.registration._vars.fbResponse["status"] == "connected" ? true : false) : false
		var mLoggedin = HDM.registration._vars.mag_user["logged_in"] ? !!HDM.registration._vars.mag_user["logged_in"] : false;//!!HDM.registration._vars.mag_user["logged_in"]
		var hLoggedin = HDM.registration._vars.hearst_user["logged_in"] ? !! HDM.registration._vars.hearst_user["logged_in"] : false;//!!HDM.registration._vars.hearst_user["logged_in"]


		if (!mLoggedin && hLoggedin){
//			console.log("*** autologin",HDM.registration._vars.mag_user,HDM.registration._vars.hearst_user)
			var tdomain = "."+document.domain.replace(new RegExp(/^www\./i),"");
			tdomain = tdomain.replace(".pp","").replace(".alphapreview","").replace(".betapreview","");// sanitizing for alpha/betapreview

			HDM.utils.setCookieAdvanced('fSpaceSSOUserId',HDM.registration._vars.hearst_user.user_name,{"path" : "/","domain" : tdomain});
			HDM.utils.setCookieAdvanced('fSpaceSSOUserEmail',HDM.registration._vars.hearst_user.email,{"path" : "/","domain" : tdomain});
			HDM.utils.setCookieAdvanced('fSpaceSSOUserCheck',HDM.registration._vars.hearst_user.encString,{"path" : "/","domain" : tdomain});
			HDM.utils.setCookieAdvanced('fSpaceSSOExpires',HDM.registration._vars.hearst_user.expires,{"path" : "/","domain" : tdomain});

			setTimeout(function(){ // adding timeout... because I don't really trust the browser to save the cookie settings fast enough..
				HDM.registration._Maguser.generate({logged_in: false,tempstatus: true,cookieScan : "online"},HDM.registration.process)
			},100)
			return false;
		} else if (mLoggedin && !hLoggedin){
			// lets make sure this is correct..?
			HDM.registration._Hearstuser.gethearstuser(function(_hearst_user){
				setTimeout(function(){
					if (window.hearst_user["logged_in"] == false){
						HDM.registration._Maguser.generate({logged_in: true,tempstatus: true,cookieScan : "offline"},HDM.registration.process)
					} else {
						HDM.registration.process();
					}
				},100)
			});
			return false;
			// hearst_user is NOT logged in, lets force invoke a logout..
		}
		// states should be in sync before we fire...
//		console.log("registration.process: event.fire is next[mLoggedin:"+mLoggedin+"][hLoggedin:"+hLoggedin+"]")
		HDM.registration.event.fire();

		if (fbLoggedin && mLoggedin && hLoggedin && HDM.utils.getData('hdm_linkProcess')){
			HDM.registration.action.linkFB(function(){
				var $modalAnchor = $('<div id="hdmModalAnchor" />').appendTo('body').hide();
				$modalAnchor.overlay({
					target: '#accountsLinked',
					load: true
				});
				$('#accountsLinked').find('a.continue').click(function(){
					$modalAnchor.data('overlay').close();
				});
				HDM.registration._Fbuser.getfbUser(HDM.registration.ui.renderLoginLinks);// make sure to render loginlinks after fbUser is got
				HDM.utils.eraseData('hdm_linkProcess');
			});
			return false;
		}

		HDM.registration.ui.renderLoginLinks();
	},
	ui : {
		renderLoginLinks : function(){
			this.changed = false;

			//define our various states of logged in-ness
			if (this.fbLoggedIn != HDM.registration._Fbuser.isLoggedIn()){
				this.fbLoggedIn = HDM.registration._Fbuser.isLoggedIn();
				this.changed = true;
			}
			if (this.fbConnected !=  HDM.registration._Fbuser.isConnected()){
				this.fbConnected =  HDM.registration._Fbuser.isConnected();
				this.changed = true;
			}
			if (this.fbLinked !=  HDM.registration._Fbuser.isLinked()){
				this.fbLinked =  HDM.registration._Fbuser.isLinked();
				this.changed = true;
			}
			if (this.hdmLoggedIn != HDM.registration._vars.mag_user.logged_in){
				this.hdmLoggedIn = HDM.registration._vars.mag_user.logged_in;
				this.changed = true;
			}


			if (!this.changed){
				// nothing changed, do nothing. bounce the f out
				return false;
			} else {
				// okay! time to re-render our login links
				var $newRegLink;
				var $linkContainer;// = $('#hdmLoginLinks').fadeOut().empty();
				var $editProfileLink;
				var $signinLink;
				var $signoutLink;

				$linkContainer = $('#hdmLoginLinks');
				$linkContainer.hide().empty(); //fade the link container out

				//fb link needs to say different stuff based on logged in ness
				var fbLinkText = (this.hdmLoggedIn) ? 'Connect with Facebook' : 'Sign In with Facebook';
				var $fbLink = $('<li><a class="fbLink trackSender" href="#">' + fbLinkText + '</a></li>');
				$fbLink.click(function(){
					FB.login(function(response){
						// no need to bind a callback, the event handler does it for us now..
						if (HDM.registration._vars.fbResponse.status == "connected"){
							// ok user is logged in, lets process it..
							HDM.registration._Fbuser.processLogin(response);
						} else {
							// otherwise, we let the auth.statuschance event handler do the rest..
						}
					},{scope:'email'});
					return false;
				});

				if (this.hdmLoggedIn){
					//logged in.. we'll need a signout link
					$signoutLink = $('<li><a href="#">Sign out</a></li>'); //the sign out link
					$signoutLink.click(function(){ //when you click signout, execute HDM.logout
						HDM.registration.action.logout();
						return false;
					});
					// lets figure out fb
					if (this.fbConnected){
						if (this.fbLinked){
							if ( HDM.registration._vars.fbUser != null ){
								$fbLink = $('<li><img src="https://graph.facebook.com/' + HDM.registration._vars.fbUser.id + '/picture" width="15" height="15" /> Hi <a class="trackSender" href="/registration/editProfile.html">' + HDM.registration._vars.fbUser.first_name + '</a></li>');
							} else {
								$fbLink = $('<li>Hi <a class="trackSender" href="/registration/editProfile.html">' + mag_user.first_name + '</a></li>'); //new fb link with profile link
							}

						} else {
							$editProfileLink = $('<li>Hi <a class="trackSender" href="/registration/editProfile.html">' + mag_user.first_name + '</a></li>'); //append the hdm edit profile link
							$linkContainer.append($editProfileLink); //append the edit profile link
							$fbLink = $('<li><a class="fbLink trackSender" href="#">' + fbLinkText + '</a></li>');
							$fbLink.click(function(){
								HDM.registration.action.linkFB(HDM.registration.ui.renderLoginLinks)
								return false;
							});

						}
					} else {
						//if no fb, leave the fb link as-is
						$editProfileLink = $('<li>Hi <a class="trackSender" href="/registration/editProfile.html">' + mag_user.first_name + '</a></li>'); //append the hdm edit profile link
						$linkContainer.append($editProfileLink); //append the edit profile link
					}
					$linkContainer.append($fbLink); //append the facebook link
					$linkContainer.append($signoutLink); //append the signout link
				} else {
					//not logged into hdm.. not much else matters
					$newRegLink = $('<li><a class="trackSender" href="/registration/">JOIN FREE</a></li>'); //new reg link
					$signinLink = $('<li><a class="trackSender" href="/login/">Sign In</a></li>'); //sign in link
					$linkContainer.append($newRegLink); //append the join free
					$linkContainer.append($fbLink); //append the facebook link
					$linkContainer.append($signinLink); //append the sign in link
				}
				$linkContainer.fadeIn(); //fade the container back in
			}
			// HDM.utils.processQueue("event.renderLoginLinks",HDM.registration._vars._event_queue.renderLoginLinks);
		}
	},
	action : {
		logout : function(){
			// before we do anything, lets think about this for a sec.. how should we invoke a soft logout event...
			HDM.registration._Hearstuser.com.parentSet({},function(){
				HDM.registration._Maguser.generate({logged_in: true,tempstatus: true,cookieScan : "offline"},function(){
					if (window.location.href.match('/registration/')){
						// any locations to /registration get an autologout
						window.location.href = '/';
					} else {
						HDM.registration.ui.renderLoginLinks();
						HDM.registration.event.fire()
					}
				});
			});
		},
		linkFB : function(callback){
			//links fb accounts
			if (typeof callback !== 'function'){
				callback = function(){};
			}
			//don't need to pass params.. it reads acocunt info from the session cookies
			$.ajax({
				url: '/registration/FbLink',
				dataType: 'json',
				success: function(data){ //we should get back a valid mag_user with facebook_id set
					HDM.registration._Maguser.set(data); // also has callback.. (window.mag_user,callback);
					HDM.utils.storeData('hdm_wasFBLinked',true); //store the "wasLinked" value for future checks
					callback(data); //execute the callback
				}
			});
		},
		unlinkFB : function(callback){
			if (typeof callback !== 'function'){
				callback = function(){};
			}
			//hit FbLink with delete=1.. will read account info from the session cookie
			$.ajax({
				url: '/registration/FbLink',
				data: { 'delete': 1 },
				dataType: 'json',
				success: function(data){
					//this doesn't return a mag_user, so we have to delete facebook_id on our own
					var magUser = HDM.registration._vars.mag_user; //get a pointer to mag_user
//					console.log("MAGUSER UNLINKED::",window.mag_user,HDM.registration._vars.mag_user,data)
					delete magUser.facebook_id; //delete the facebook_id
					HDM.utils.eraseData('hdm_wasFBLinked'); //erase the "wasLinked" value so future checks know we're not linked anymore
					HDM.registration._Maguser.set(data); //update mag_user with the new object minus the facebook_id
					callback(); //execute the callback.. don't really need to pass mag_user back for anything
				}
			});
		}
	},
	_Maguser : {
		init : function(callback){
			function fastScanCookies(c){
				var c = c + "=",
					d = document.cookie.split(";"),
					b;
				for (b = 0; b < d.length; b++) {
					for (var a = d[b];
					" " === a.charAt(0);) a = a.substring(1, a.length);
					if (0 === a.indexOf(c)) return !0
				}
				return !1
			};
			if (fastScanCookies("password")&&fastScanCookies("cgi-session-id")&&fastScanCookies("fSpaceSSOUserCheck")){
//				console.log("[HDM.registration._Maguser.init] cookiescan determines user is ONLINE")
				var _mag_user = HDM.utils.getJSON("mag_user");
				if (_mag_user["logged_in"] != 1){
					// cookie data does not match storage data! grabbing a fresh copy..
					HDM.registration._Maguser.generate(_mag_user,callback);
				} else {
					HDM.registration._Maguser.set(_mag_user,callback)
				}
			} else {
//				console.log("[HDM.registration._Maguser.init] cookiescan determines user is OFFLINE")
				this.set({ logged_in: false,tempstatus: true,cookieScan : "offline"});// setting mag_user offline no exceptions
				// this is where we also need to check if hearst_user is available...
				if (typeof callback == "function"){callback();};
			}
		},
		generate : function(_mag_user,callback){
			// okay, lets check if _mag_user is whack..
			function isEmpty(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}; // simple check to see if obj is empty
			if (isEmpty(_mag_user)){// meaning nothing was found.. lets build out an offline object and store it
				window["mag_user"] = { logged_in: false,tempstatus: true }; //set the temp mag_user to the stored mag_user, or a logged_out version of it
				HDM.registration._Maguser.set(window.mag_user,callback);
			} else if ((_mag_user.cookieScan == "offline") && (_mag_user.logged_in)){
//				console.warn("[_Maguser.generate] expensive logout call made to get_mag_user.js")
				var url = "/registration/logout?next_url=/registration/get_mag_user.js?cachebust="+Date.now();
				HDM.utils.buildScriptTag(url,function(){
					HDM.registration._Maguser.set(window.mag_user,callback);
				});

			} else {// object is just incorrect.. lets re-get_mag_user.js it!
				HDM.registration.count.callstomag_user++; // just counting..
//				console.warn("[_Maguser.generate] expensive call made to get_mag_user.js")
				var url;
				if (!_mag_user.logged_in && (_mag_user.cookieScan == "online")){
					url = "/registration/login?next_url=/registration/get_mag_user.js?cachebust="+Date.now();
				} else {
					url = "/registration/get_mag_user.js?cachebust="+Date.now();
				}
				HDM.utils.buildScriptTag(url,function(){
//					console.log("is empty",isEmpty(window["mag_user"]),window["mag_user"],callback)
					if (isEmpty(window["mag_user"])){// meaning nothing was found.. lets build out an offline object and store it
						window["mag_user"] = { logged_in: false,tempstatus: true }; //set the temp mag_user to the stored mag_user, or a logged_out version of it
					}
					HDM.registration._Maguser.set(window.mag_user,callback);
				});
			}
		},
		set : function(_mag_user,callback){
			HDM.utils.storeData("mag_user",_mag_user);// storing it in the browser
			HDM.registration._vars.mag_user = _mag_user; // grabbing a local reference for fast access
			window["mag_user"] = _mag_user;
			if (typeof callback == "function"){callback();};
		}
	},
	_Hearstuser : {
		bootCallback : null,
		previewHost : function(){
			if (window.location.host.match('alphapreview')){
				return "alphapreview.";
			} else if (window.location.host.match('betapreview')){
				return "betapreview.";
			} else {
				return "";
			}
		},
		init : function(callback){
			if (document.body == null){
				// LOL SO GHETTO, but I'm pressed for time
				/* okay so this needs an explanation
				 * sometimes this is invoked before the page finishes loading
				 * largely depends on _where_ in the html this is being called from
				 * some sites have this script in the header
				 * most of them in the footer
				 * if in the header, it usually just barfed
				 * but at least with this we can 'try again'
				 */
				setTimeout(function(){
					HDM.registration._Hearstuser.init(callback);
				},50)
				return false
			}
			try{
				/******************************************
				 * Why in a try catch block?
				 * Because fudge IE 7/8. Fudge its problems. Fudge the king.
				 *
				 *
				 */
				this.bootCallback = callback;

				HDM.registration._Hearstuser.tunnel.address = "http://"+HDM.registration._Hearstuser.previewHost()+"services.hearstmags.com/cm/shared/hdm-lib_hearstuser_proxy.min.html"; // this is the address used for the proxy;
				HDM.registration._Hearstuser.tunnel.address = "http://"+HDM.registration._Hearstuser.previewHost()+"services.hearstmags.com/cm/shared/hdm-lib_hearstuser_proxy.html"; // this is the address used for the proxy;
				//alert(new RegExp("^https?://[^/]+/").exec(HDM.registration._Hearstuser.tunnel.address)[0]);
				HDM.registration._Hearstuser.tunnel.origin = "http://"+HDM.registration._Hearstuser.previewHost()+"services.hearstmags.com"; // I wanna like, use a regexp but later on

				// build out iframe, begin tunneling info and get hearst_user via localstorage/cookie/jsfile
				window.addEventListener("message",HDM.registration._Hearstuser.tunnel.receive,false)
				HDM.registration._Hearstuser.tunnel.iframe = document.createElement('iframe')

				HDM.registration._Hearstuser.tunnel.iframe.style.position = "fixed";
				HDM.registration._Hearstuser.tunnel.iframe.style.top = "-50px";
				HDM.registration._Hearstuser.tunnel.iframe.style.left = "-50000px";
				HDM.registration._Hearstuser.tunnel.iframe.style.height = "1px";
				HDM.registration._Hearstuser.tunnel.iframe.style.width = "1px";
				HDM.registration._Hearstuser.tunnel.iframe.style.border = "none";
				HDM.registration._Hearstuser.tunnel.iframe.style.zIndex = "-1";
				HDM.registration._Hearstuser.tunnel.iframe.style.float = "left";
				HDM.registration._Hearstuser.tunnel.iframe.style.opacity = "0";


				document.body.appendChild(HDM.registration._Hearstuser.tunnel.iframe);
				HDM.registration._Hearstuser.tunnel.iframe.onload = function(){
					HDM.registration._Hearstuser.com.init(false);
				}
				HDM.registration._Hearstuser.tunnel.iframe.src = HDM.registration._Hearstuser.tunnel.address;


			} catch(e){
				// my plan for this is to fall back and treat this like mag_user..
				function fastScanCookies(c){
				var c = c + "=",
					d = document.cookie.split(";"),
					b;
				for (b = 0; b < d.length; b++) {
					for (var a = d[b];
					" " === a.charAt(0);) a = a.substring(1, a.length);
					if (0 === a.indexOf(c)) return !0
				}
				return !1
			};
				if (fastScanCookies("password")&&fastScanCookies("cgi-session-id")&&fastScanCookies("fSpaceSSOUserCheck")){
//					console.log("[HDM.registration._Hearstuser.init] cookiescan determines user is ONLINE")
					var _hearst_user = HDM.utils.getJSON("mag_user");
					if (_hearst_user["logged_in"] != 1){
						// cookie data does not match storage data! grabbing a fresh copy..
						HDM.registration._Maguser.generate(_hearst_user,function(){
							window["hearst_user"] = window["mag_user"];
							HDM.registration._vars.hearst_user = window["mag_user"];
							if (typeof callback == "function"){callback();};
						});
					} else {
						window["hearst_user"] = _hearst_user;
						HDM.registration._vars.hearst_user = _hearst_user;
						if (typeof callback == "function"){callback();};
					}
				} else {
//					console.log("[HDM.registration._Hearstuser.init] cookiescan determines user is OFFLINE")
					HDM.registration._Maguser.set({ logged_in: false,tempstatus: true,cookieScan : "offline"});// setting mag_user offline no exceptions
					HDM.registration._vars.hearst_user = HDM.registration._vars.mag_user;
					window["hearst_user"] = HDM.registration._vars.mag_user;
					// this is where we also need to check if hearst_user is available...
					if (typeof callback == "function"){callback();};
				}

				// lets override that logout button..
				HDM.registration.action.logout = function(){
					HDM.registration._Maguser.generate({logged_in: true,tempstatus: true,cookieScan : "offline"},function(){
						HDM.registration._vars.hearst_user = HDM.registration._vars.mag_user;
						window["hearst_user"] = HDM.registration._vars.mag_user;
						if (window.location.href.match('/registration/')){
							// any locations to /registration get an autologout
							window.location.href = '/';
						} else {
							HDM.registration.ui.renderLoginLinks();
							HDM.registration.event.fire()
						}
					});
				}


			}
		},
		synchronize : function(){
			// console.log("[HDM.registration._Hearstuser.synchronize] begin syncprocess, sending syn")
			this.com.init(true);
		},
		attemptLogin : function(callback){
			var l = document.location;
			var url = l.protocol+"//"+l.host+"/registration/login?next_url=http://"+HDM.registration._Hearstuser.previewHost()+"services.hearstmags.com/registration/get_hearst_user.js"
			if (navigator.appName == "Microsoft Internet Explorer"){
				window.location = "/registration/login?next_url="+document.location.href;
			} else {
				HDM.utils.buildScriptTag(url,function(){
//					console.warn("[_Hearstuser] expensive login requested hearst_user",window.hearst_user);
					HDM.registration._vars.hearst_user = window.hearst_user;
					HDM.registration._Hearstuser.com.parentSet(window.hearst_user);
					if (typeof callback == "function"){callback();};
				});
			}
		},
		gethearstuser : function(callback){
			var url = "http://"+HDM.registration._Hearstuser.previewHost()+"services.hearstmags.com/registration/get_hearst_user.js?cachebust="+Date.now();
			HDM.utils.buildScriptTag(url,function(){
				if (JSON.stringify(window.hearst_user) == '{"initial_login":1}'){
					// ok see this little beaut here? This is the result of the servers' static file
					window.hearst_user = { initial_login: 1, logged_in: false,tempstatus: true,cookieScan : "offline"};
				}
				HDM.registration._vars.hearst_user = window.hearst_user;
				HDM.registration._Hearstuser.com.parentSet(window.hearst_user);
				if (typeof callback == "function"){callback(window.hearst_user);};
			});

		},
		com : {
			init : function(forced){
				var forceUpdate = forced || !!HDM.utils.getData('hdm_forceMagUserUpdate');
				HDM.utils.eraseData('hdm_forceMagUserUpdate');
				HDM.registration._Hearstuser.tunnel.send({
					command : "initialize",
					force : forceUpdate
				});
			},
			parentSet : function(_hearst_user,callback){
				// time for ghetto check for empty obj
				function isEmpty(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}; // simple check to see if obj is empty
				if (isEmpty(_hearst_user)){// meaning nothing was found.. lets build out an offline object and store it
					_hearst_user = { logged_in: false,tempstatus: true,cookieScan : "offline"};
				}
				window["hearst_user"] = _hearst_user;
				HDM.registration._vars.hearst_user = _hearst_user;
				HDM.registration._Hearstuser.tunnel.send({
					command : "parentSet",
					hearst_user : _hearst_user
				});
				if (typeof callback == "function"){callback();};
			},
			tearDown : function(){
				// tear this entry down
				HDM.registration._Hearstuser.tunnel.send({
					command : "delete"
				});
			}
		},
		tunnel : {
			iframe : null,
			address : null, // this is the address used for the proxy
			origin : null, // damn, I'm feeling lazy so here we go
			send : function(message){
				if (typeof message == "object"){
					message = JSON.stringify(message);
				}
				HDM.registration._Hearstuser.tunnel.iframe.contentWindow.postMessage(message,HDM.registration._Hearstuser.tunnel.origin)
			},
			receive : function(e){
				//console.warn("[HDM.registration._Hearstuser.tunnel.receive] received!",msg)
				if ((e.origin == HDM.registration._Hearstuser.tunnel.origin) && (e.source == HDM.registration._Hearstuser.tunnel.iframe.contentWindow)){
					//console.error("HDM.registration.hearst_user.messageReceived! LOOKS LEGIT",e,e.data)
					var msg = JSON.parse(e.data);
					if (msg.command == "save"){
						//console.log("Lets save hearst_user",(msg.hearst_user == HDM.registration._vars.mag_user))
						HDM.registration._vars.hearst_user = msg.hearst_user;
						HDM.registration.boot._vars.hearst_isReady = true;
					} else if (msg.command == "parentget"){
						HDM.registration._Hearstuser.gethearstuser(function(){
							HDM.registration.boot._vars.hearst_isReady = true;
						})
					} else if (msg.command == "ack"){
//						console.log("ack received!");
					} else {
//						console.error("[HDM.registration._Hearstuser.tunnel.receive] unrecognized command",msg)
					}
				}
			}
		}
	},
	_Fbuser : {
		init : function(callback){
			HDM.utils.buildScriptTag('//connect.facebook.net/en_US/all.js',function(){
				//init the facebook api..
				FB.init({
					appId: HDM.registration._vars.fbAppID, //pass in the Site object's app id
					status: true, //we want status
					cookie: true, //we want fb to set cookies
					xfbml: true, //we want to parse xfbml
					channelUrl : document.location.protocol+"//"+document.location.host+"/cm/shared/channel.html" //this helps with issues in IE where we're getting hits from ?xd_fragment= or whatever it is
				});
				FB.getLoginStatus(function(response){
					HDM.registration._vars.fbResponse = response;
					if (response.status == "connected"){
						HDM.registration._Fbuser.getfbUser(callback); // make sure not to execute it, but to pass it along..
					} else {
						FB.Event.subscribe('auth.statusChange',function(response){
							HDM.registration._vars.fbResponse = response;
							HDM.registration._Fbuser.processLogin(response);
						})
						// lets bind a status change event
						if (typeof callback == "function"){callback();};
					}
				});

				$(document).ready(function(){
					//set up the link/unlink button on the profile form
					// eek, kinda messy but whatever works..
					$('fieldset#facebookConnect').each(function linkUnlink(){
						// mike is a big fan of self... and I don't feel like refactoring all this.. so I'll just be lazy
						var self = HDM.registration._Fbuser

						var $this = $(this), $status = $('#editProfileFBStatus'),
							$button = $this.find('.linkButton'),
							statusText = '', buttonText = '';
						//set the appropriate button based on whether we're linked or not
						if ( self.isLinked() ){
							$status.addClass('linked').text('linked');
							$button.addClass('linked').text('unlink');
						} else {
							$status.addClass('unlinked').text('unlinked');
							$button.addClass('unlinked').text('link');
						}
						$button.click(function(){
							//when the button is clicked, check for existing link
							if ( self.isLinked() ){
								//if we're linked, unlink and switch the button
								HDM.registration.action.unlinkFB(function(){
									HDM.registration.ui.renderLoginLinks();
									$status.removeClass('linked').addClass('unlinked').text('unlinked');
									$button.removeClass('linked').addClass('unlinked').text('link');
								});
							} else {
								//if we're not linked, link and switch the button
								HDM.registration.action.linkFB(function(){
									HDM.registration.ui.renderLoginLinks();
									$status.removeClass('unlinked').addClass('linked').text('linked');
									$button.removeClass('unlinked').addClass('linked').text('unlink');
								});
							}
							return false;
						});
					});
				})
			});

		},
		getfbUser : function(callback){
			FB.api('/me',function(response){
				HDM.registration._vars.fbUser = response;
				if (typeof callback == "function"){callback();};
			});
		},
		queryFBLinkisEmpty : function(callback){
			if (typeof callback !== 'function'){callback = function(){};}
			$.ajax({
				url: '/registration/FbLink',
				dataType: 'json',
				success: function(data){
					function isEmpty(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}; // simple check to see if obj is empty
					callback(isEmpty(data));
				}
			});

		},
		checkEmailExists : function(emailToCheck,callback){
			if (typeof callback !== 'function'){callback = function(){};}
			$.ajax({
				url: '/registration/email_exist',
				data: { email: emailToCheck },
				success: function(response){
					var exists = (response !== 'Does not exist');
					callback(exists);
				}
			});
		},
		createLinkedAccount: function(email,callback){ //creates a linked account given the email address associated with the user's facebook account
			if (typeof callback !== 'function'){
				callback = function(){};
			}
			//hit FbLink with the email address.. we should get a valid mag_user back
			$.ajax({
				url: '/registration/FbLink',
				data: { email: email },
				dataType: 'json',
				success: function(data){
					HDM.registration._Maguser.set(data); //update the mag_users
					HDM.utils.storeData('hdm_wasFBLinked',true); //store the "wasLinked" value for future checks
					HDM.registration._Hearstuser.attemptLogin(function(){
						HDM.registration.ui.renderLoginLinks();
						HDM.registration.event.fire();
					});
				}
			});
		},
		isLoggedIn : function(){
			return (HDM.registration._vars.fbResponse) ? HDM.registration._vars.fbResponse.status !== "unknown" : false;
		},
		isConnected : function(){
			return (HDM.registration._vars.fbResponse) ? HDM.registration._vars.fbResponse.status === "connected" : false;
		},
		isLinked : function(){
			return !!HDM.registration._vars.mag_user.facebook_id;
		},
		initiateHDMSignin : function(){
			var proceedWithLink = HDM.utils.getData('hdm_linkProcess');
			var wasLinked = HDM.utils.getData('hdm_wasFBLinked'),
			$exists, $thanks, $accountsLinked, modalAPI, $modalAnchor = $('<div id="hdmModalAnchor" />').appendTo('body').hide();
			HDM.registration._Fbuser.getfbUser(function(){
				// once we have the info...
				var info = HDM.registration._vars.fbUser; //set a local pointer to it
				HDM.registration._Fbuser.checkEmailExists(HDM.registration._vars.fbUser.email,function(exists){
					if (exists){//if it exists, pop the existing account modal
						if ( proceedWithLink ){
							$accountsLinked = $('#accountsLinked');

							HDM.registration.action.linkFB(function(){
								$modalAnchor.overlay({
									target: '#accountsLinked',
									load: true
								});
								modalAPI = $modalAnchor.data('overlay');
								$accountsLinked.find('a.continue').click(function(){
									modalAPI.close();
								});
								HDM.registration.ui.renderLoginLinks();
								HDM.utils.eraseData('hdm_linkProcess');
							});
							return;
						}
						$exists = $('#connectEmailExists');
						$exists.find('.hdmFacebookPic').html('<img src="https://graph.facebook.com/' + info.id + '/picture" width="50" height="50" />');
						$exists.find('.welcome').text('Welcome, ' + info.first_name);
						$exists.find('input[name=user_name]').val(info.email);
						$exists.find('form').submit(function(){
							var $error = $(this).find('.loginError');
							if ( ! $(this).find('[name=user_name]').val() || !$(this).find('[name=password]').val() ){
								$error.text('Please fill out your username and password');
								return false;
							} else {
								HDM.utils.storeData('hdm_linkProcess',true);
								return true;
							}
						});
						$modalAnchor.overlay({
							target: '#connectEmailExists',
							load: true,
							closeOnEsc: false,
							closeOnClick: false
						});
						modalAPI = $modalAnchor.data('overlay');
						$exists.find('.cancelLink').click(function(){
							modalAPI.close();
						});
						$("#hdmConnectLogin").append("<input type='hidden' name='next_url' value='"+(( window.location.href.match('/registration/') ) ? '/' : window.location.href)+"'>");

					} else {//if the email doesn't exist in the db, lets create an HDM account
						HDM.registration._Fbuser.createLinkedAccount(info.email,function(){
							HDM.registration.ui.renderLoginLinks();
							$thanks = $('#thanksForJoining');
							$modalAnchor.overlay({
								target: '#thanksForJoining',
								load: true,
								closeOnClick: false
							});
							modalAPI = $modalAnchor.data('overlay');
							$thanks.find('a.continue').click(function(){
								modalAPI.close();
							});
						});

					}
				});
			});
		},
		processLoginTimestamp : Date.now(),
		processLogin : function(response){//
			if ((Date.now()-this.processLoginTimestamp)<200){
//				console.error("[processLogin] revoking calls made too soon")
				return false;
			}//console.log("[processLogin] timeStamp:",this.processLoginTimestamp,Date.now()-this.processLoginTimestamp)
			this.processLoginTimestamp = Date.now();

			var oldResponse = HDM.registration._vars.fbResponse;
			var newResponse = response;
			//console.log("(( FB.login ))",oldResponse,newResponse)
			function fastScanCookies(c){
					var c = c + "=",
						d = document.cookie.split(";"),
						b;
					for (b = 0; b < d.length; b++) {
						for (var a = d[b];
						" " === a.charAt(0);) a = a.substring(1, a.length);
						if (0 === a.indexOf(c)) return !0
					}
					return !1
				};

			if ((newResponse.status == "connected") && fastScanCookies("password")&&fastScanCookies("cgi-session-id")&&fastScanCookies("fSpaceSSOUserCheck")){

				// user is logged in, and connecting...
				HDM.registration.action.linkFB(function(newmag_user){
//					console.log("linked mag_user",newmag_user,HDM.registration._vars.mag_user,window["mag_user"])
					HDM.registration._Hearstuser.attemptLogin(function(){
						HDM.registration.ui.renderLoginLinks();
						HDM.registration.event.fire();
						// also popup thank you event

						var $linked = $('#accountsLinked'), modalAPI,
							$modalAnchor = $('<div id="modalAnchor" />').appendTo('body').hide();
								$modalAnchor.overlay({
								target: '#accountsLinked',
								load: true,
								closeOnClick: false
							});
							modalAPI = $modalAnchor.data('overlay');
							$linked.click(function(){
								modalAPI.close();
							});
					});
				});
			} else if (newResponse.status == "connected"){
				// but NOT logged in... that's when we take action
				HDM.registration._Fbuser.queryFBLinkisEmpty(function(FBLinkisEmpty){
					// if FBLink returns empty, that means we begin the initiate signin process
					if (FBLinkisEmpty){
//						console.log("initiateHDMSignin")
						HDM.registration._Fbuser.initiateHDMSignin();
					} else {
						// otherwise we are logged in, set cookies and be on our way.
						// rebooting the registration process...
//						console.log("[processLogin] attemptLogin");
						HDM.registration._Hearstuser.attemptLogin(HDM.registration.process);
					};
				})
			}
		}
	},
	boot : {
		_vars : {
			started : false,
			intervalID : null,
			mag_isReady : false, // boot._vars.mag_isReady = true
			hearst_isReady : false,
			fb_isReady : false,
			counter : 0,
			loopstartdate : 0
		},
		start : function(fbAppID){
			// build code here to get mag_user
			HDM.registration._Maguser.init(function(){HDM.registration.boot._vars.mag_isReady = true});

			// build code here to get hearst_user
			HDM.registration._Hearstuser.init(function(){HDM.registration.boot._vars.hearst_isReady = true});

			// build code here to get fb user
			if (fbAppID){
				HDM.registration._vars.fbAppID = fbAppID;
				HDM.registration._Fbuser.init(function(){HDM.registration.boot._vars.fb_isReady = true});
			} else {
				HDM.registration.boot._vars.fb_isReady = true
			}
			// begin loop..
			HDM.registration.boot._vars.loopstartdate = Date.now();
			this._vars.intervalID = window.setInterval(HDM.registration.boot.scan,250);
		},
		scan : function(){
			// wanna know why I have to do this?
			// it's because 2 of the calls have to be made async
			// fb needs to initialize via facebook's own fancypants code
			// worse is that hearst_user is needed via an iframe, used to tunnel messages
			// 4x a second isn't so bad tho..
			if (HDM.registration.boot._vars.mag_isReady && HDM.registration.boot._vars.hearst_isReady && HDM.registration.boot._vars.fb_isReady){
				window.clearInterval(HDM.registration.boot._vars.intervalID);
				HDM.registration.process();
			}
			if ((HDM.registration.boot._vars.loopstartdate+5000) < Date.now()){
//				console.dir(HDM.registration._vars.mag_user)
//				console.dir(HDM.registration._vars.hearst_user)
//				console.dir(HDM.registration._vars.fbUser)
//				console.log("[HDM.registration error] data out of sync",HDM.registration._vars.mag_user,HDM.registration._vars.hearst_user,HDM.registration._vars.fbUser)
				window.clearInterval(HDM.registration.boot._vars.intervalID);
				HDM.registration.process();
			}
			HDM.registration.boot._vars.counter++;
			if (HDM.registration.boot._vars.counter++ > 40){
			}
		}
	},
	event : {
		_vars : {
			fireInterval : null
		},
		/*
		renderLoginLinks : function(func){
			/************************************
			 * Event hooks to enable callbacks on renderLoginLInks
			 *
			 * HDM.registration.event.renderLoginLinks(function(){alert("hello world!")});
			 ************************************
			if (typeof func == "function"){
				HDM.registration._vars._event_queue.renderLoginLinks.push(func);
			} else {
				console.log("[event.renderLoginLinks] invalid function callback:"+(typeof func),func)
			}
		},
		*/
		loggedin : function(func){
			if (typeof func == "function"){
				HDM.registration._vars._event_queue.loggedin.push(func);
			} else {
				console.log("[event.loggedin] invalid function callback:"+(typeof func),func)
			}
		},
		loggedout : function(func){
			if (typeof func == "function"){
				HDM.registration._vars._event_queue.loggedout.push(func);
			} else {
				console.log("[event.loggedin] invalid function callback:"+(typeof func),func)
			}
		},
		sure : {
			loggedin : function(){
				if (HDM.registration._vars._event_queue.loggedin.length > 0){
					window.clearInterval(HDM.registration.event._vars.fireInterval);
					HDM.utils.processQueue("queue.loggedin",HDM.registration._vars._event_queue.loggedin);
				}
			},
			loggedout : function(){
				if (HDM.registration._vars._event_queue.loggedout.length > 0){
					window.clearInterval(HDM.registration.event._vars.fireInterval);
					HDM.utils.processQueue("queue.loggedin",HDM.registration._vars._event_queue.loggedout);
				}
			}
		},
		fire : function(){
			var mLoggedin = !!HDM.registration._vars.mag_user["logged_in"]
			var hLoggedin = !!HDM.registration._vars.hearst_user["logged_in"]
			if (mLoggedin && hLoggedin){//console.error("[event.fire] user is logged IN!")
				HDM.registration.event._vars.fireInterval = setInterval(HDM.registration.event.sure.loggedin,250);
			} else if (!mLoggedin && !hLoggedin){//console.error("[event.fire] user is logged OUT!")
				HDM.registration.event._vars.fireInterval = setInterval(HDM.registration.event.sure.loggedout,250);
			} else {
				console.error("[HDM.registration.event] login state out of sync",mLoggedin,hLoggedin)
			}
		}
	}
};
/*****************************
slideModule - jQuery Plugin
	Creates a module that expands and collapses when you click the header
	Options:
		headerSelector - selector for the clickable header of the module
		bodySelector - selector for the portion of the module that will collapse and expand
		slideSpeed - speed of the slide effect
		onOpening - Callback that runs when the module begins to open
		onOpened - Callback that runs when the module has finished opening
		onClosing - Callback that runs when the module begins to close
		onClosed - Callback that runs when the module has finished closing
*****************************/
(function($){
	$.fn.slideModule = function(options){
		//define our default settings..
		var _settings = {
			headerSelector: '.moduleHeader',
			bodySelector: '.moduleBody',
			slideSpeed: 'fast',
			onOpening: function(){},
			onOpened: function(){},
			onClosing: function(){},
			onClosed: function(){}
		};
		//overwrite default settings with any options that were passed in
		if (options){ $.extend(_settings,options); }
		//return this to maintain chainability
		return this.each(function(){
			var $this = $(this),
				$header = $this.find(_settings.headerSelector),
				$body = $this.find(_settings.bodySelector),
				speed = _settings.slideSpeed;

			$header.click(function(){
				if ($this.hasClass('open')){
					_settings.onClosing();
					$this.removeClass('open');
					$this.addClass('closed');
					$body.slideUp(speed,function(){
						_settings.onClosed();
					});
				} else if ($this.hasClass('closed')){
					_settings.onOpening();
					$this.removeClass('closed');
					$this.addClass('open');
					$body.slideDown(speed,function(){
						_settings.onOpened();
					});
				}
			});
		});
	};
}(jQuery));
(function($){
	$.fn.brightcovePlayer = function(bcExperienceName,params){
		if (!window.brightcove){
			try {
				console.error('Brightcove API not found.');
			}catch(e){}
			return false;
		}
		var _params = {
			playerKey: null,
			playerID: null,
			width: 400,
			height: 300,
			isVid: true,
			isUI: true,
			dynamicStreaming: true,
			videoPlayer: null
		}, $target, $player, $param;
		bcExperienceName = bcExperienceName || 'myExperience';
		if (params){ $.extend(_params,params); }
		if (!params.videoPlayer){
			try {
				console.error('No video provided');
			} catch(e){}
		}
		$target = this;
		$player = $('<object></object>');
		$player.attr('id',bcExperienceName);
		$player.addClass('BrightcoveExperience');

		for (var i in _params){
			if (_params.hasOwnProperty(i) && _params[i] != null){
				$param = $('<param />');
				if ( i == 'videoPlayer' ) {
					$param.attr('name','@videoPlayer');
				} else {
					$param.attr('name',i);
				}
				$param.attr('value',_params[i]);
				$player.append($param);
			}
		}
		$target.append($player);
		brightcove.createExperiences(null,bcExperienceName);
		return this;
	};
}(jQuery));
(function($){
	$.fn.msnPlayer = function(options){
		if (!MSN.video.createWidget){
			try {
				console.error('MSN player API not found.');
			} catch(e){}
			return false;
		}
		var _config = {
			playerID: 'myPlayer',
			width: 400,
			height: 300,
			playerType: 'PlayerAd'
		};
		if (options){ $.extend(_config,options); }
		return this.each(function(){

		});
	};
}(jQuery));
(function($){
	$.fn.fbLikeButton = function fbLikeButton(options){
		var _options = {
			href: window.location.href.split('?')[0] + '?src=soc_fcbk',
			width: 90,
			height: 21,
			layout: 'button_count',
			show_faces: 'false',
			overwrite: true
		}, fbmlAttributes = ['href','width','height','layout','show_faces'];
		$.extend(_options,options);
		if ( !window.FB || !window.FB.XFBML ){ return false; }
		return this.each(function(){
			var $container = $(this),
				$likeButton = $('<fb:like></fb:like>');
			for (var i = 0; i < fbmlAttributes.length; i++){
				if ( !!_options[fbmlAttributes[i]] ){
					$likeButton.attr(fbmlAttributes[i],_options[fbmlAttributes[i]]);
				}
			}
			if ( !!_options.overwrite ){
				$container.html($likeButton);
			} else {
				$container.append($likeButton);
			}
			FB.XFBML.parse($container.get(0));
		});
	}
}(jQuery));
//Scroll To Element on a page
(function($){
	$.fn.scrollToElement = function scrollToElement(options){
		var _options = {
			speed: 200 //400ms to scroll
		};
		$.extend(_options,options);
		return this.each(function(){
			var $element = $(this);
			$('html,body').animate({
				scrollTop: $element.offset().top
			},_options.speed);
		});
	};
}(jQuery));







/****************************
HDM.promoPlayer
	Namespace for promo players
****************************/
HDM.promoPlayer = function (id,interval,speed,pPlayerAd,afterSlide,browserPath,persistence) {
	//initialize vars than can be created without the needing the DOM ready
	var playerContainerId = id;
	var slideInterval = interval || 5000;
	var transitionSpeed = speed;
	var current = 0;
	var slidePosition = 0;
	var slideIntervalId = null;

	//player properties
	var playerContainer;
	var slideContainer;
	var slides;
	var total;
	var width;

	function removePplayerAd() {
		slides.remove('#ppad');
		nav.generate();
		if (current != 0) {
			current = current - 1;
		}
		playerContainer.children(".navLayer").children("ul.pagination").children("li").removeClass("current");
		playerContainer.children(".navLayer").children("ul.pagination").children("li").eq(current).addClass("current");
	}

	var slideTo = function(slide){
		if (!slideContainer.is(':animated')) {
			nav.pagination.children("li").eq(current).removeClass("current");
			if (slide == 'next') {
				current = (current < total - 1) ? current + 1 : 0;
				slidePosition -= width;
			} else if (slide == 'prev') {
				current = (current > 0) ? current - 1 : total - 1;
				slidePosition += width;
			} else {
				slide = parseInt(slide);
				current = slide;
				slidePosition = -(width * (current + 1));
			}
			nav.pagination.children("li").eq(current).addClass("current");
			$(slideContainer).animate({
				left: slidePosition
				},transitionSpeed,function() {
					if ($('#ppad').length != 0 && current == afterSlide) {
						HDM.ads.renderAd(pPlayerAd,$('#ppad'),$('#ppad').width(),$('#ppad').height(),browserPath);
					} else if (persistence !== 'persist' && ($('#ppad').length != 0 && current > afterSlide)) {
						removePplayerAd();
					}
				slidePosition = -(width * (current + 1));
				nav.touch.position.init();
				slideContainer.css("left",slidePosition);
			});
			// restart animation interval
			startSlideshow();
		}
	};
	var stopSlideshow = function(){
		clearInterval(slideIntervalId);
		slides.stop(true,false);
	};
	var startSlideshow = function(){
		clearInterval(slideIntervalId);
		slideIntervalId = setInterval(function(){slideTo('next');},slideInterval);
	};
	var appendClickTracker = function(url) {
		if (url) {
			if (url.indexOf("doubleclick.net") > -1) {
				// Does not append click tracker when one already exists
				var newURL = url;
			} else {
				url = url.replace(" ", "");
				var newURL;
				var argIndex = url.indexOf("?");
				var anchorIndex = url.indexOf("#");

				if (argIndex >= 0) {
					newURL = url.replace("?","?click=pp&");
				} else if (anchorIndex >= 0) {
					newURL = url.replace("#","?click=pp#");
				} else {
					newURL = url + "?click=pp";
				}
			}
			return newURL;
		} else {
			return false;
		}
	};
	var nav = {
		navLayer: null,
		prev: null,
		next: null,
		pagination: null,
		generate: function() {
			//initialize the navigation elements
			this.navLayer = playerContainer.children(".navLayer");
			this.prev = this.navLayer.children("a.prev");
			this.next = this.navLayer.children("a.next");
			this.pagination = this.navLayer.children("ul.pagination");

			if (pPlayerAd && $('#ppad').length == 0){
				this.pagination.children('li').remove();
				total = slides.not('#ppad').length;
			}

			//create pagination loop based on number of slides
			for (var i = 0; i < total; i++) {
				var page = $(document.createElement("li"));
				var popupText = slides.eq(i).attr("title");

				page.html("&bull;");
				page.attr("page",i);
				this.pagination.append(page);

				if (popupText) {
					var popupWidth, pageWidth;
					var popup = $(document.createElement("div"));
					var slideTitle = $(document.createElement("div"));
					var arrowDown = $(document.createElement("div"));

					//apply rollover title classes
					popup.addClass("popup");
					slideTitle.addClass("popupTitle");
					arrowDown.addClass("arrowDown");
					slideTitle.html(popupText);

					//add popup elements to the pagination item
					popup.append(slideTitle);
					popup.append(arrowDown);
					page.append(popup);

					//calculate popup width and positioning
					popup.css("white-space","nowrap"); //fix to ensure that text doesn't break onto newlines for calculation slide title width
					pageWidth = page.width();
					popupWidth = slideTitle.outerWidth() + 1;
					popup.css("left","-"+((popupWidth-pageWidth)/2)+"px");
					popup.width(popupWidth);

					arrowDown.css("left",((popupWidth - arrowDown.outerWidth())/2)+"px");
				}
				if (slides.eq(afterSlide).is("#ppad")) {
					this.pagination.children("li").eq(afterSlide).hide();
				}
				if ($('#ppad').length == 0) {
					this.pagination.children("li").eq(afterSlide).show();
				}
			}
			this.pagination.children("li").eq(current).addClass("current");
			this.navLayer.css("visibility","visible");

			//click navigation event handlers
			$(nav.prev).click(function(){
				slideTo('prev');
				nav.touch.position.init();
			});
			$(nav.next).click(function(){
				slideTo('next');
				nav.touch.position.init();
			});
			$(nav.pagination.children("li")).click(function(){
				if ($(this).attr("page") !== current) {
					slideTo($(this).attr("page"));
					nav.touch.position.init();
				}
			});

		},
		touch : {
			position : {
				mouseDown : false,
				startx : null,
				previousx : null,
				currentx : null,
				offsetx : null,
				delta : function(){
					return (this.currentx-this.startx+this.offsetx);
				},
				init : function(){
					this.mouseDown = false;
					this.startx = -(width * (current + 1));
					this.currentx = -(width * (current + 1));
					this.previousx = -(width * (current + 1));
					this.offsetx = -(width * (current + 1));
				}
			},
			start : function(x){
				this.position.init();
				//slideContainer.css('webkit-transition-duration',0);
				//slideContainer.css('moz-transition-duration',0);
				this.position.startx = x;
				this.position.currentx = x;
				this.position.previousx = x;
				this.position.mouseDown = true;
				this.disabletouch();
				stopSlideshow();
			},
			move : function(x){
				this.position.previousx = this.position.currentx;
				this.position.currentx = x;
				if (Math.abs(this.position.startx - this.position.currentx) > 25) {
					slideContainer.css('left',this.position.delta());
					//slideContainer.css('-webkit-transform','translate('+this.position.delta()+'px,0)');
				}
			},
			end : function(){
				var distancedelta = this.position.currentx-this.position.previousx;
				this.position.offsetx = (10*(distancedelta))+this.position.delta();
				this.enabletouch();
				//slidePosition -= this.position.delta();
				if (Math.abs(this.position.startx - this.position.currentx) > 25) {
					if (this.position.startx - this.position.currentx > 0) {
						slideTo('next');
					} else {
						slideTo('prev');
					}
				}
				else {
					slideTo(current);
				}
				this.position.init();
				startSlideshow();

			},
			preventBehavior : function(e) {
				e.preventDefault();
			},
			disabletouch : function(){
				// Enable fixed positioning
				document.addEventListener("touchmove", this.preventBehavior, false);
			},
			enabletouch : function(){
				// Disable fixed positioning
				document.removeEventListener("touchmove", this.preventBehavior, false);
			}
		}
	};
	var init = function(){
		playerContainer = $('#'+playerContainerId);
		slideContainer = playerContainer.children(".slides");
		slides = slideContainer.children('.slide');
		total = slides.length;
		width = playerContainer.width();
		slides.eq(current).show();

		if (slides.length > 1) {
			nav.generate();
			var firstClone = slideContainer.children(".slide:first-child").clone();
			var lastClone = slideContainer.children(".slide:last-child").clone();
			slideContainer.prepend(lastClone);
			slideContainer.append(firstClone);
			slideContainer.css("left",-width);
			slidePosition = -width;
			startSlideshow();
			//touch navigation event handlers
			$(slides).each(function(){
				$(this).bind('touchstart',function(e){
					var pageX = null;
					if (e.originalEvent.touches) {
						pageX = e.originalEvent.touches[0].pageX;
					} else {
						pageX = e.pageX;
					}
					nav.touch.start(pageX)
				});
				$(this).bind('touchmove', function(e) {
					var pageX = null;
					if (e.originalEvent.touches) {
						pageX = e.originalEvent.touches[0].pageX;
					} else {
						pageX = e.pageX;
					}
					if (nav.touch.position.mouseDown) {
						nav.touch.move(pageX);
					}
				});
				$(this).bind('touchend', function(e) {
					nav.touch.end()
				});
			});

			// clear all animations when window regains focus.  this resolves animation issue caused by reduced interval firing for background tabs in Chrome.
			$(window).focus(function(){
				stopSlideshow();
				startSlideshow();
			});
		}
		//click handler for slide URLs
		$(slides).click(function(){
			var url = appendClickTracker($(this).attr("href"));
			var target = $(this).attr("target");
			if (url) {
				if (target=="Yes") {
					window.open(url);
				} else {
					window.location.href = url;
				}
			}
		});
		var links = $(slideContainer).find("a");
		links.each(function(){
			var url = $(this).attr("href");
			var newURL = appendClickTracker(url);

			if (newURL) {
				$(this).attr("href",newURL);
			}
		});
	};
	
	$(document).ready(function(){
		init();
	});
};



/************* Developing Story Components ********************/
HDM.devStory = {

	// don't know another way to associate site id's to url's...would be nice if there was another way
	// would have been nice if the api returned full url to sections in the blog_section_loop
	// could i have used a simple object?  sure.  why didn't I?  cause.
	sites : [
	{ id: 2, url: 'http://www.cosmopolitan.com'},
	{ id: 11, url: 'http://www.countryliving.com'},
	{ id: 58, url: 'http://www.delish.com'},
	{ id: 817, url: 'http://www.elle.com'},
	{ id: 811, url: 'http://www.elledecor.com'},
	{ id: 13, url: 'http://www.esquire.com'},
	{ id: 15, url: 'http://www.goodhousekeeping.com'},
	{ id: 17, url: 'http://www.harpersbazaar.com'},
	{ id: 19, url: 'http://www.housebeautiful.com'},
	{ id: 21, url: 'http://www.marieclaire.com'},
	{ id: 42, url: 'http://www.misquincemag.com'},
	{ id: 27, url: 'http://www.popularmechanics.com'},
	{ id: 29, url: 'http://www.redbookmag.com'},
	{ id: 819, url: 'http://www.roadandtrack.com'},
	{ id: 50, url: 'http://www.thedailygreen.com'},
	{ id: 35, url: 'http://www.townandcountrymag.com'},
	{ id: 39, url: 'http://www.veranda.com'},
	{ id: 818, url: 'http://www.womansday.com'},
	{ id: 1, url: 'http://www.seventeen.com'},
	{ id: 567, url: 'http://www.realbeauty.com'}

	],
	dsArray : [],  // store the DS sections this article belongs to
	isSponsored: false,  // internal flag indicating if we are part of a DS
	dsCount : 0,  //using this to see which DS we're at.
	sections: [],
	dsRightRail: [],
	rrStart: 0, //starting element for RR load more

	init: function(o){

		if(!o){
			console.warn("Can't find the content model");
			return false;
		}

		var dsSections = 0;
		// First let's build an array with the DS sections this article belongs to.
		for (var i = o.sections.length-1; i>=0; i--){

			if(dsSections < 3){
				if(o.sections[i].isDevelopingStory){
					HDM.devStory.sections.push(o.sections[i]);
					 if(o.sections[i].sponsored){
						HDM.devStory.isSponsored = true;
					}
					dsSections++;
				}
			}else{
				break;
			}
		}

		//register the templates for indicator and listbox and rightrail
		this.template.register();
		if(o.sections.length > 0){
		// html output for the indicator....uses the ressig templat engine
			var indicatorOutput = HDM.devStory.buildIndicator();

			//if we have output then append it to the ds_indicator section and remove the script
			//else remove the entire section
			if(indicatorOutput != ''){
				$('[role=ds_indicator]').append(indicatorOutput);
				$('[HDMTMPL=ds_indicator]').remove();
			}else{
				$('[role=ds_indicator]').remove();
			}

		}
		//Now get the articles for each Developing story section that this article belongs to so that we can build the listbox.

		if(HDM.devStory.sections.length > 0){ // IF we have developing stories
			var counter = -1;
			var interval = setInterval(function(){

				++counter;

				HDM.devStory.getArticles(HDM.devStory.sections[counter].sectionId, o.articleId);

				if(counter == HDM.devStory.sections.length-1){
					clearInterval(interval);
				}

			}, 500);
		}else{
			$('[role=ds_listbox]').remove();

		}

		$(document).ready(function(){

			$(".indicator").live({
				mouseenter:
					function(){
						$(this).find(".ds_box").text("Developing Story");
					},
				mouseleave:
					function() {
						$(this).find(".ds_box").text("DS");
					}
				}
			);

			$(".ds_hdeader").eq(0).addClass('open');

			$(".ds_header").live('click', function(){

				$(".ds_header").removeClass('open');

				var $this = $(this);
				var $content = $(this).next(".ds_listbox_item");

				var visible = $content.is(":visible");

				$(".less").removeClass("less");
				$(".ds_listbox_item").slideUp();

				if(!visible){
					$content.slideDown();
					$content.addClass("less");
					$this.addClass('open');

					var color = $(this).find(".ds_box").css('background-color');
					$("#listbox_label").css('background-color',color);
				}
			});

		});


	},

	template : {
		indicator : "",
		listbox : "",
		listheader: "",
		register : function(){
			this.indicator =  $("[HDMTMPL='ds_indicator']").html();
			if($('[role=ds_listbox]').length){
				this.listbox =  $("[HDMTMPL='ds_listbox']").html();
				this.listheader =  $("[HDMTMPL='ds_listHeader']").html();
			}
			this.rightRail = $("[HDMTMPL='ds_rightRail']").html();

		}
	},
	getData: function(options, fn){
		var ajaxOptions = {
			url: 'http://hearst.api.mashery.com/Article/search',
			jsonp: '_callback',
			dataType: 'jsonp',
			traditional: true,
			cache: true
		};

		$.extend( ajaxOptions, {
			data:    options,
			success: ( $.isFunction(fn) ) ? fn : $.noop
		});


		return $.ajax( ajaxOptions );


	},


	// Retrieves all the articles that we need
	getArticles: function(secId, artId){
		var options = {
			_key: 'xujnzz63zsw8qw4rsnu3p8xh',
			article_section_id: secId,
			start: 0,
			limit: 5000,
			shape: 'brief',
			sort: 'virtual_date,asc'
		};

		var arr = HDM.devStory.sections;	//ref to dsArray
		var myIndex = 0;  //index of article in the section list
		var listboxOutput = '';


		var xhr = HDM.devStory.getData(options); // grab the new xhr

		xhr.done(function(json){
			console.log(HDM.devStory.sections.length);
			var listheaderOutput;
			// loop through the blog_section_loop array and check if the article belongs to a dev story
			// this will have to be modified to check if the developing story flag is checked when dev trigs.
			for(var i = 0; i< json.items.length; i++){

				if(json.items[i].id == artId){

					myIndex = i;
				}

			}
			if($('[role=ds_listbox]').length){
				listheaderOutput = HDM.devStory.buildHeaderOutput();
			}else{
				HDM.devStory.dsCount++;
			}

			if(HDM.devStory.dsCount==1 && $("#ds_RR_updates").length > 0){
				HDM.devStory.dsRightRail = json.items;
				var rightRailOutput = HDM.devStory.buildRightRailOutput(HDM.devStory.dsRightRail, HDM.devStory.dsRightRail.length-1, 5);

				if(HDM.devStory.rrStart < HDM.devStory.dsRightRail.length){
					$('[role=ds_RR_loadmore]').show();
					$('[role=ds_RR_loadmore]').bind('click',HDM.devStory.loadMore);
				}else{
					$('[role=ds_RR_loadmore]').remove();
				}
				$('[role=ds_rightRail]').append(rightRailOutput);
			}

			if($('[role=ds_listbox]').length){
				$('[role=ds_listbox]').show();
				var listboxOutput = HDM.devStory.buildListBox(json.items, myIndex);

				$('[role=ds_listbox]').append(listheaderOutput);
				$('[role=ds_listbox]').append('<div id="box'+ HDM.devStory.dsCount + '" class="ds_listbox_item"></div>');
				$('#box' + HDM.devStory.dsCount).append(listboxOutput);

				$('[role=ds_listbox]').append('<div style="clear:both"></div>');
			}
		});

	},

	// Builds the indicator at the top of our content pages
	buildIndicator: function(){

		var sections = HDM.devStory.sections;
		var sites = HDM.devStory.sites;

		var siteUrl = "", html = "", length;


		//We can only display up to 3 DS sections...
		length = sections.length > 3 ? 3 : sections.length;

		//used for applying a width.  don't know how many we'll have
		//need to use important in responsive to override.
		width = 100/length;

		for(var i = 0; i < length; i++){

			var indicator = {};

			indicator.w = width+'%';
			indicator.title = sections[i].sectionName;
			indicator.num = i+1;

			for(var j=0; j < sites.length; j++){
				if(sites[j].id == sections[i].siteId){
					indicator.url = sites[j].url + sections[i].sectionFullPath;
					break;
				}

			}

			html += HDM.utils.tmpl(HDM.devStory.template.indicator,indicator);



		}

		return html;
	},

	buildHeaderOutput: function(){


		var arr = HDM.devStory.sections;
		var sites = HDM.devStory.sites;

		var header = {}, html = '';

		if(HDM.devStory.dsCount < arr.length){
			header.dsTitle = arr[HDM.devStory.dsCount].sectionName;
		}
		HDM.devStory.dsCount++;
		header.num = HDM.devStory.dsCount;
		if(HDM.devStory.dsCount == 1){
			header.state = "open";
		}else{
			header.state = "closed";
		}

		return html= HDM.utils.tmpl(HDM.devStory.template.listheader,header);


	},
	buildRightRailOutput: function(obj, start, end){
		var html = "";

		if(start < 5 || start != obj.length-1){
			end = -1;
		}else{
			end = start - end;
		}

		for(var i = start; i > end; i--){
			var rrLinks = {}

			if(i % 2 == 0){
				rrLinks.status = "odd";
			}else{
				rrLinks.status = "even";
			}

			rrLinks.link = obj[i].canonical_url;
			rrLinks.title = obj[i].title;

			html += HDM.utils.tmpl(HDM.devStory.template.rightRail, rrLinks);


		}
		HDM.devStory.rrStart = i;

		if(end > -1 ){
			$('[role=ds_RR_loadmore]').text(end + 1 + " more updates");
		}else{
			$('[role=ds_RR_loadmore]').remove();
		}

		return html;
	},
	loadMore: function(){

		var start = HDM.devStory.rrStart;
		var end = 5;

		if(start < 0){
			end = 0;
		}

		var rightRailOutput = HDM.devStory.buildRightRailOutput(HDM.devStory.dsRightRail, start, end);
		$('[role=ds_rightRail]').append(rightRailOutput);

	},
	buildListBox: function(obj, idx){
		//console.log(obj);
		var start, end;
		var html = "";


		var arr = HDM.devStory.dsArray;
		var sites = HDM.devStory.sites;

		//first
		if(obj.length >= 3){
			if(idx==0){ start = 2; end = 0;
			}else if(idx == 1){start = 3; end = 0;
			}else if(idx == obj.length-1){ start = idx; end = idx-2;
			}else if(idx == obj.length-2){ start = idx+1; end = idx -2;
			}else{ start = idx+2; end=idx-2;}
		}else if(obj.length == 1){
			if(idx == 0){start = 0; end = 0;}
		}else if (obj.length == 2){
			if(idx == 0){start = 1; end = 0;
			}else{ start = 1; end = 0;
			}
		}



		for(var x = start; x >= end; x--){
			var myslide = {};
			var count = x;
			myslide.dsIdx = count+1;
			myslide.link =  obj[x].canonical_url;
			myslide.title = obj[x].title;

			if(idx == x) myslide.status = "active";
			else myslide.status="inactive";

			html += HDM.utils.tmpl(HDM.devStory.template.listbox, myslide);

		}

		return html;

	}

};

HDM.flipbook = {
	dom : {
		frame : null,
		stage : null,
		indframeleft : null, // HDM.flipbook.dom.indframeleft
		indframemiddle : null,
		indframeright : null,
		jqMain : null,
		jqInterstitial : null,
		jqRelatedStories : null,
		jqRelatedStoriesSource : null,
		jdDocBody : null,
		jqPageNum : null,
		jqPageTotal : null,
		jqLarge : null
	},
	_vars : {
		FBModel : {},
		counter : 0,
		deltaframe : null,
		deltaboundary : null,
		eventDisabled : false,
		isAnimating : false,
		state : "main",
		notouch : false,
		smartloadThumbs : false,
		isHSwipe:false,
		isVSwipe:false
	},
	/******************************************************************************
	HDM.flipbook.listen
	
	event listener that listens to callbacks and fires them
	
	available events:
	
		"slideChanged"
	
	Listening Example:
	
		HDM.flipbook.listen.dispatchEvent("slideChanged");
	
	Binding Example:
	
		HDM.flipbook.listen.on("slideChanged",function(){alert("my slide has changed!")},1)

	******************************************************************************/
	listen : new HDM.util.callbackPool(),
	template : {
		code : "",
		largeCode : "",
		register : function(){
//			HDM.article.template.article_images = $("[HDMTMPL='article_images']").html();
			// lets grab the template and store it locally..
			this.code =  $("[HDMTMPL='flipbook_images']").html();
			this.largeCode = $("[HDMTMPL='flipbook_large']").html();

		},
		output : function(position){
			var imgObject = HDM.flipbook._vars.FBModel.slides[position];
			if (!imgObject){
				return "<!-- nothing here.. -->";
			}
			var framewidth = HDM.flipbook.dom.frame.offsetWidth*HDM.smartImages._vars.devicePixelRatio; // this is the width of the frames... also taking into account pixeldensity
			var cuts = imgObject.cuts;
			// ok lets place them in a fancypants array... hrm.. you knwo what, screw that!
			cuts.sort(function(a,b){return b[0]-a[0]});
			var imgSrcFound = false;
			for (var i = 0; i < cuts.length; i++){
				var mywidth = cuts[i][0];
				if (mywidth > framewidth){
					imgObject.src = cuts[i][1];
					imgSrcFound = true;
				}
			}

			//if framewidth too large (retina devices) and can't find the appropriate cut sizes, get the largest image
			if(!imgSrcFound){
				imgObject.src = cuts[0][1];
			}

			imgObject.sponsored = HDM.flipbook._vars.FBModel.slides[position].sponsored;
			var myoutput = HDM.util.tmpl(HDM.flipbook.template.code,imgObject);
//			console.log(myoutput,imgObject,cutstring)
			return myoutput;
		},
		generateThumbCode : function(tmplsource,slides){
			var html = "";
			for (var i = 0; i < slides.length; i++){
				var myslide = slides[i];
				/*if (!!myslide.i || true){ // wtf is this??? lol
				}*/
				myslide.i = i+1;
				html += HDM.util.tmpl(tmplsource,myslide);
//				console.log("TMPL THUMB OUTPUT "+i,HDM.util.tmpl(tmplsource,myslide))
			}
			return html;
		},
		outputLarge : function(position){
			var imgObject = HDM.flipbook._vars.FBModel.slides[position];
			if (!imgObject){
				return "<!-- nothing here.. -->";
			}
			imgObject.sponsored = HDM.flipbook._vars.FBModel.slides[position].sponsored;
			var myoutput = HDM.util.tmpl(HDM.flipbook.template.largeCode,imgObject);
			$("[role='flipbook-largecontent']").html(myoutput);

			// get the first img inside..
			var myimg = $("[role='flipbook-largecontent'] img").get(0);

			var tsmartimg = HDM.smartImages.fn.register(myimg,"flipbook",true);
			if (tsmartimg){
				HDM.smartImages.fn.findIdealImageSrc(tsmartimg);
				HDM.smartImages.fn.loadIt(tsmartimg,true)
			}
		},
		updateSlidePosition : function(slideNumber){
			// if we have active next and prev buttons, href updates for those go in here..
			//update the URL
			window.location.hash = '#slide-' + ( slideNumber );
		}
	},
	engine : {
		centralizeFrames : function(whackyoffset){
//			console.log("frames centralized!",HDM.flipbook._vars.counter)
			// the first thing we're going to do is remove the event listener:
			HDM.flipbook.dom.stage.removeEventListener('webkitTransitionEnd',HDM.flipbook.engine.centralizeFrames,false);
			HDM.flipbook.dom.stage.removeEventListener('transitionend',HDM.flipbook.engine.centralizeFrames,false);

			HDM.flipbook.dom.stage.style.webkitTransitionDuration = '0';
			HDM.flipbook.dom.stage.style.MozTransitionDuration = '0ms';
			HDM.flipbook.dom.stage.style.msTransitionDuration = '0ms';
			// we need to find out if the css assignment is too slow.. if that's the case may need to wrap in timeout event...
			if (HDM.flipbook._vars.currentDirection === "next"){
				HDM.flipbook._vars.counter++;//console.log("[engine.next] current counter position is: "+HDM.flipbook._vars.counter)
			} else if (HDM.flipbook._vars.currentDirection === "back"){
				HDM.flipbook._vars.counter--;//console.log("[engine.next] current counter position is: "+HDM.flipbook._vars.counter)
			}

			// first thing we need to do is populate the center area..
			HDM.flipbook.dom.indframemiddle.innerHTML = HDM.flipbook.template.output(HDM.flipbook._vars.counter)
			// then we do a instant repositioning (some flicker may occur..?)
			if (HDM.flipbook._vars.notouch){
				HDM.flipbook.dom.stage.style.webkitTransform = 'translate3d(0px, 0px, 0)';
				HDM.flipbook.dom.stage.style.MozTransform = 'translate(0px, 0px)';
				HDM.flipbook.dom.stage.style.msTransform = 'translate(0px, 0px)';
				HDM.flipbook.dom.stage.style.left= "0px";
			} else {
				HDM.flipbook.dom.stage.style.webkitTransform = 'translate3d(0px, 0px, 0)';
				HDM.flipbook.dom.stage.style.MozTransform = 'translate(0px, 0px)';
				HDM.flipbook.dom.stage.style.msTransform = 'translate(0px, 0px)';
			}

			// then once it is center positioned, readjust the left and right frames with the appropriate code..

			HDM.flipbook.dom.indframeleft.innerHTML = HDM.flipbook.template.output(HDM.flipbook._vars.counter-1)
			HDM.flipbook.dom.indframeright.innerHTML = HDM.flipbook.template.output(HDM.flipbook._vars.counter+1)

			HDM.flipbook.position.offsetx = -HDM.flipbook._vars.deltaframe;// reset to middle frame
			// lets bind any buttons we find..
			// lets bind any buttons we find..
			if (HDM.flipbook._vars.counter + 1 > 1) {
				$('.fb_prev').css('display', 'block');
				$('.fb_prev').removeClass('inactive');
				$('[flipbook="button_prev"]').unbind('mousedown').bind('mousedown', HDM.flipbook.click.back)
			} else {
				$('.fb_prev').addClass('inactive');
			}
			$('[flipbook="button_next"]').unbind('mousedown').bind('mousedown', HDM.flipbook.click.next)
			$('[flipbook="button_thumbs"]').unbind('mousedown').bind('mousedown', HDM.flipbook.click.gotoThumbs)
			$('[flipbook="button_larger"]').unbind('mousedown').bind('mousedown', HDM.flipbook.click.gotoLarger)

			HDM.flipbook.dom.jqPageNum.html((HDM.flipbook._vars.counter+1)+" of "+HDM.flipbook._vars.FBModel.slides.length)
			HDM.flipbook.dom.jqPageTotal.html(HDM.flipbook._vars.FBModel.slides.length + " images")

			if (typeof HDM.flipbook.flipCallback == 'function'){
				try {
					HDM.flipbook.flipCallback(HDM.flipbook._vars.counter);
				} catch(e) {}
			}
			HDM.flipbook.interstitial.tick(HDM.flipbook._vars.currentDirection);
			HDM.flipbook.template.updateSlidePosition(HDM.flipbook._vars.counter+1);
			// lets adjust the height value of the parent container..
			HDM.flipbook.isAnimating = false;
			HDM.flipbook.listen.dispatchEvent("slideChanged",HDM.flipbook._vars.counter+1);
		},
		events : {
			disable : function(){
				if (HDM.flipbook._vars.eventDisabled){
					console.error("dude this is busted!",HDM.flipbook._vars.eventDisabled);
				} else {
					HDM.flipbook._vars.eventDisabled = true;
				}
			},
			enable : function(){
				if (!HDM.flipbook._vars.eventDisabled){
					console.error("dude this is busted!",HDM.flipbook._vars.eventDisabled);
				} else {
					HDM.flipbook._vars.eventDisabled = false;
				}
			}
		},
		renderThumbs : function(FBModel){
			console.error("render thumbs here")
			$(document).ready(function(){
				var thumbsSourceDOM = $("[HDMTMPL='flipbook_thumbs']");
				console.log("MY SOURCEDOM",thumbsSourceDOM.html());

				var thumbsOutput = HDM.flipbook.template.generateThumbCode(thumbsSourceDOM.html(),FBModel.slides)
//				console.log("_____________",thumbsOutput);
				thumbsSourceDOM.after(thumbsOutput);
//				$("[flipbook='thumbsFrame']").html(thumbsOutput);
				thumbsSourceDOM.remove();
			})
		}
	},
	position : {
		startx : null,
		starttimestamp : 0,
		previousx : null, // this is used to test immediate velocity
		currentx : null,
		currenttimestamp : 0,
		offsetx : 0,

		starty:null,
		currenty:null,
		previousy:null,
		xmov:0,
		ymov:0,

		updatex : function(x,y,timeStamp){
			this.previousx = this.currentx;
			this.previousy = this.currenty;
			this.currentx = x;
			this.currenty = y;
			this.previoustimestamp = this.currenttimestamp;
			this.currenttimestamp = timeStamp;

			this.xmov = Math.abs(this.currentx-this.startx);
			this.ymov = Math.abs(this.currenty-this.starty);

			if(!HDM.flipbook._vars.isVSwipe){
				if((this.xmov > this.ymov)){
					HDM.flipbook._vars.isHSwipe = true;
				}else if(this.xmov <= this.ymov && this.ymov > 10){
					HDM.flipbook._vars.isHSwipe = false;
					HDM.flipbook._vars.isVSwipe = true;
				}
			}
		},
		initx : function(x,y,timeStamp){// intialization
			this.startx = x;
			this.currentx = x;
			this.previousx = x;
			this.starty = y;
			this.currenty = y;
			this.previousy = y;
			this.starttimestamp = timeStamp;
			this.currenttimestamp = timeStamp;
			this.offsetx = 0;
		},
		delta : function(){
			var delta = this.currentx-this.startx+this.offsetx;
			// this is where we need to calculate the boundary limits...
			// lets assume that every image initiated always starts off in the middle frame...
			if ((HDM.flipbook._vars.counter==0)&&(delta > 0)){
				delta = 0;
			} else if ((delta > HDM.flipbook._vars.deltaframe)){
				delta = HDM.flipbook._vars.deltaframe;
			} else if ((HDM.flipbook._vars.counter >(HDM.flipbook._vars.FBModel.slides.length-2))&&(delta < 0)){
				delta = 0;
			} else if (((-delta) > HDM.flipbook._vars.deltaframe)){
				delta = -HDM.flipbook._vars.deltaframe;
			}
			return delta;
		}
	},
	util : {
		getFrameWidth : function(){
			// lets grab some initial scroll boundaries..
			HDM.flipbook._vars.deltaframe = $("[flipbook='frame_left']").width();
			HDM.flipbook._vars.deltaboundary = (HDM.flipbook._vars.deltaframe-$("[flipbook='scrollstage']").width());
		},
		readjustFrameScroll : function(){
		}
	},
	view : {
		hideMain : function(){
			console.log("view.hideMain");
			HDM.flipbook.dom.jqMain.addClass("hidden").removeClass("show");
		},
		hideThumbs : function(){
			console.log("view.hideThumbs");
			HDM.flipbook.dom.jqDocBody.removeClass("showfbthumbs");
			$('html, body').animate({scrollTop:$(".fb_frame").offset().top - $(".stickymenu.visible").height()}, 'slow');
		},
		hideInterstitial : function(){
			console.log("view.hideInterstitial")
			HDM.flipbook.dom.jqInterstitial.addClass("hidden").removeClass("show");
		},
		hideRelatedStories : function(){
			console.log("view.hideRelatedStories")
			HDM.flipbook.dom.jqRelatedStories.addClass("hidden").removeClass("show");
			HDM.flipbook.dom.jqRelatedStoriesSource.removeClass("hidden").addClass("show");
		},
		hideLarge : function(){
			console.log("view.hideLarge")
			HDM.flipbook.dom.jqLarge.addClass("hidden").removeClass("show");
			HDM.flipbook.dom.jqDocBody.removeClass("showfblarge")
		},
		showMain : function(){
			console.log("view.showMain")
			HDM.flipbook.dom.jqMain.removeClass("hidden").addClass("show");
		},
		showThumbs : function(){
			console.log("view.showThumbs")
			HDM.flipbook.dom.jqDocBody.addClass("showfbthumbs");
		},
		showInterstitial : function(){
			console.log("view.showInterstitial")
			HDM.flipbook.dom.jqInterstitial.removeClass("hidden").addClass("show");
		},
		showRelatedStories : function(){
			console.log("view.showRelatedStories")
			HDM.flipbook.dom.jqRelatedStories.removeClass("hidden").addClass("show");
			HDM.flipbook.dom.jqRelatedStoriesSource.addClass("hidden").removeClass("show");
		},
		showLarge : function(){
			console.log("view.showLarge")
			HDM.flipbook.dom.jqLarge.removeClass("hidden").addClass("show");
			HDM.flipbook.dom.jqDocBody.addClass("showfblarge")
			HDM.flipbook.template.outputLarge(HDM.flipbook._vars.counter);
		}
	},
	control : {
		// all of the main fb actions are performed here...
		gotoThumbs : function(e){
			console.log("thumbs clicked..",e,this)
			// should only be called from main..
			if (HDM.flipbook._vars.state == "main"){
				HDM.flipbook._vars.state = "thumbs";
				HDM.flipbook.view.hideMain();
				HDM.flipbook.view.showThumbs();
				window.scrollTo(0, 1);
				HDM.flipbook.listen.dispatchEvent("gotoThumbs");
				if (HDM.flipbook._vars.smartloadThumbs == false){
					var thumbimg = $("[flipbook='thumbsFrame'] img");
					thumbimg.each(function(index){
						var attr = this.getAttribute("hdmimg")
						if (attr){
							var smartimg = HDM.smartImages.fn.register(this,"flipbookThumbs");
							HDM.smartImages.fn.findIdealImageSrc(smartimg);
						}
					})
					HDM.flipbook._vars.smartloadThumbs = true;
				}
			} else {
				console.error("this should not have been called from here...",HDM.flipbook._vars.state)
//				HDM.flipbook.control.gotoMain();
//				HDM.flipbook.view.hideInterstitial();
			}
		},
		gotoMain : function(){
			// should only be called from interstitial, or thumbs..
			if (HDM.flipbook._vars.state == "interstitial"){
				HDM.flipbook._vars.state = "main";
				HDM.flipbook.view.hideInterstitial();
				HDM.flipbook.view.showMain();
			} else 	if (HDM.flipbook._vars.state == "thumbs"){
				HDM.flipbook._vars.state = "main";
				HDM.flipbook.view.hideThumbs();
				HDM.flipbook.view.showMain();
			} else 	if (HDM.flipbook._vars.state == "larger"){
				HDM.flipbook._vars.state = "main";
				HDM.flipbook.view.hideLarge();
				HDM.flipbook.dom.jqDocBody.unbind('click',HDM.flipbook.click.gotoMain)
			} else {
				console.error("this should not have been called from here...",HDM.flipbook._vars.state)
			}
		},
		gotoInterstitial : function(callback){
			// shoud only be called from main..
			if (HDM.flipbook._vars.state == "main"){
				HDM.flipbook._vars.state = "interstitial";
				HDM.flipbook.view.hideMain();
				HDM.flipbook.view.showInterstitial();

				if (typeof callback == 'function'){
					callback();
				}

			} else {
				console.error("this should not have been called from here...",HDM.flipbook._vars.state)
			}
		},
		gotoLastFrame : function(){
			if (HDM.flipbook._vars.state == "main"){
				HDM.flipbook._vars.state = "lastFrame";
				HDM.flipbook.view.hideMain();
				HDM.flipbook.view.showRelatedStories();
			} else {
				console.error("this should not have been called from here...",HDM.flipbook._vars.state)
			}
		},
		restartFB : function(e){
			if (HDM.flipbook._vars.state == "lastFrame"){
				if(HDM.flipbook._vars.state != "interstitial"){
					HDM.flipbook._vars.state = "main";
				}
				// we're restarting the fb..
				HDM.flipbook._vars.currentDirection = "";
				HDM.flipbook._vars.counter = 0;
				$(".fb_prev").addClass("inactive");
				HDM.flipbook.engine.centralizeFrames();

				HDM.flipbook.view.hideRelatedStories();
				if(HDM.flipbook._vars.state != "interstitial"){
					HDM.flipbook.view.showMain();
				}
			} else {
				console.error("this should not have been called from here...",HDM.flipbook._vars.state)
			}
		},
		gotoSlide : function(position){
			if (HDM.flipbook._vars.state == "thumbs"){
				HDM.flipbook._vars.state = "main";
				// we're restarting the fb..
				HDM.flipbook._vars.currentDirection = null;
				HDM.flipbook._vars.counter = position;
				HDM.flipbook.view.hideThumbs();
				HDM.flipbook.view.showMain();
				HDM.flipbook.engine.centralizeFrames();
				window.scrollTo(0, 1);
			} else {
				console.error("this should not have been called from here...",HDM.flipbook._vars.state)
			}
		},
		gotoLarger : function(e){
			if (HDM.flipbook._vars.state == "main"){
				HDM.flipbook._vars.state = "larger";
				HDM.flipbook.view.showLarge();
				//HDM.flipbook.dom.jqDocBody.bind('click',HDM.flipbook.click.gotoMain)
				$("body.showfblarge > #HDM_site").bind('click',HDM.flipbook.click.gotoMain);
			} else {
				console.error("this should not have been called from here...",HDM.flipbook._vars.state)
			}
		}
	},
	interstitial : {
		_vars : {
			counter : 0,
			interval : -1,
			adPosition : null,
			jqAdDOM : null
		},
		init : function(interval,adPosition){
			HDM.flipbook.interstitial._vars.counter = 0;
			HDM.flipbook.interstitial._vars.interval = interval;
			HDM.flipbook.interstitial._vars.adPosition = adPosition;
			HDM.flipbook.interstitial._vars.jqAdDOM = $(".fb_adContainer");
			console.log("HDM.flipbook interstitial intialization:",this)
		},
		tick : function (direction){
//			console.error("I need to trace this..",this,direction)
			if ((HDM.flipbook.interstitial._vars.interval < 0)||(direction == null)){
				/* tick will only run if a direction has been placed
				 * if it is null, do not do anything
				 */
				return false;
			}
			HDM.flipbook.interstitial._vars.counter++;
			HDM.ads.refreshAds(true); // global ad refresh happens regardless..
//			console.log("[interstitial.tick]",HDM.flipbook.interstitial._vars.counter)
			if (HDM.flipbook.interstitial._vars.counter >= HDM.flipbook.interstitial._vars.interval){
				HDM.ads.renderAd(HDM.flipbook.interstitial._vars.adPosition,HDM.flipbook.interstitial._vars.jqAdDOM);
				HDM.flipbook.control.gotoInterstitial(function(){
					HDM.flipbook.interstitial._vars.counter = 0
				});
			}
		}
	},
	autoplay : {
		autoplayset : false,
		interval : 5000,
		intervalID : null,
		nextit : function(){
			if(HDM.flipbook._vars.state == "lastFrame"){
				HDM.flipbook.control.restartFB();
			} else if(HDM.flipbook._vars.state == "interstitial"){
				HDM.flipbook.control.gotoMain();
			} else {
				HDM.flipbook.click.next();
			}
		},
		start : function(){
			if (HDM.flipbook.autoplay.intervalID == null){
				HDM.flipbook.autoplay.intervalID = setInterval(HDM.flipbook.autoplay.nextit,HDM.flipbook.autoplay.interval)
			} else {
				console.error("[flipbook autoplay] already set! Cannot invoke a second start event")
			}
		},
		stop : function(){
			window.clearInterval(HDM.flipbook.autoplay.intervalID);
			HDM.flipbook.autoplay.intervalID = null;
		},
		init : function(playit,interval){
			if (playit){
				HDM.flipbook.autoplay.autoplayset = true;
				HDM.flipbook.autoplay.interval = interval;
				$(document).ready(HDM.flipbook.autoplay.start)
				$(HDM.flipbook.dom.stage).bind('mousedown',HDM.flipbook.autoplay.stop).bind('touchstart',HDM.flipbook.autoplay.stop);

//			HDM.menu._vars.jqWrap.unbind('click',HDM.menu.close).unbind('touchstart',HDM.menu.close);


			}
		}
	},
	move : {
		start : function(x,y,timeStamp){
//			console.log("move start!",x,timeStamp);
			if (HDM.flipbook.isAnimating){
//				console.log("is animating! lets centralize..")
				HDM.flipbook.engine.centralizeFrames();
			}
			HDM.flipbook.position.initx(x,y,timeStamp);
			// I'm having some real problems with this stupid thing not being removed quickly enough...
			// so instead I'm just gonna fire it every time the user starts
			HDM.flipbook.dom.stage.removeEventListener('webkitTransitionEnd',HDM.flipbook.engine.centralizeFrames,false);
			HDM.flipbook.dom.stage.removeEventListener('transitionend',HDM.flipbook.engine.centralizeFrames,false);
			HDM.flipbook.dom.stage.style.webkitTransitionDuration = '0ms';
			HDM.flipbook.dom.stage.style.MozTransitionDuration = '0ms';
			HDM.flipbook.dom.stage.style.msTransitionDuration = '0';
		},
		drag : function(e,x,y,timeStamp){
			var delta = HDM.flipbook.position.delta(); // we calculate maximum allowed delta movement, one frame at a time
//			console.log("[move.drag] "+x+" "+timeStamp,delta);
			HDM.flipbook.position.updatex(x,y,timeStamp);
			if(HDM.flipbook._vars.isHSwipe && !HDM.flipbook._vars.isVSwipe){
				e.preventDefault();
				HDM.flipbook.dom.stage.style.webkitTransform = 'translate3d(' + delta + 'px, 0px, 0)';
				HDM.flipbook.dom.stage.style.MozTransform = 'translate(' + delta + 'px, 0px)';
				HDM.flipbook.dom.stage.style.msTransform = 'translate(' + delta + 'px, 0px)';
			}
		},
		end : function(timeStamp){
			if (HDM.flipbook.isAnimating){
				console.log("***end is isAnimating")
			}
			HDM.flipbook.isAnimating = true;
//			console.log("[HDM.flipbook.position.offsetx:"+HDM.flipbook.position.offsetx+"]");
			HDM.flipbook._vars.currentDirection = null; // this is the default current direction

			if(!HDM.flipbook._vars.isVSwipe){
				var transitionDuration = 300;
				var movedelta = HDM.flipbook.position.delta();
				var movethreshold =movedelta-HDM.flipbook.position.offsetx;

				if (Math.abs(movethreshold) > 143){
					if (movethreshold < 0){
						if (HDM.flipbook._vars.counter <= (HDM.flipbook._vars.FBModel.slides.length-2)){
							HDM.flipbook._vars.currentDirection = "next";
						}
					} else {
						if (HDM.flipbook._vars.counter!= 0){
							HDM.flipbook._vars.currentDirection = "back";
						}
					}
				}
				var flicktime = HDM.flipbook.position.currenttimestamp-HDM.flipbook.position.starttimestamp;
				if (flicktime < 500){
					var flickdistance = HDM.flipbook.position.startx - HDM.flipbook.position.currentx;
					var flickvelocity = Math.abs(flickdistance)/flicktime; // units: pixels/milliseconds
					if (flickvelocity > .25){
						if (flickdistance > 0){
							if (HDM.flipbook._vars.counter <= (HDM.flipbook._vars.FBModel.slides.length-2)){
								transitionDuration = (HDM.flipbook.position.delta()-(HDM.flipbook.position.offsetx - HDM.flipbook._vars.deltaframe))/flickvelocity;
								HDM.flipbook._vars.currentDirection = "next";
							}
							if (HDM.flipbook._vars.counter == (HDM.flipbook._vars.FBModel.slides.length-1)){
								HDM.flipbook.control.gotoLastFrame();
							}
						} else {
							if (HDM.flipbook._vars.counter!= 0){
								transitionDuration = Math.abs(-HDM.flipbook.position.delta());
								HDM.flipbook._vars.currentDirection = "back";
							}
						}
	//					console.warn("high velocity detected! lets roll out..",HDM.flipbook.position.delta(),HDM.flipbook.position.offsetx,HDM.flipbook._vars.deltaframe,flickvelocity,transitionDuration)
					}
				}
				if (HDM.flipbook._vars.currentDirection === "next"){
					HDM.flipbook.position.offsetx -= HDM.flipbook._vars.deltaframe;
				} else if (HDM.flipbook._vars.currentDirection === "back"){
					HDM.flipbook.position.offsetx += HDM.flipbook._vars.deltaframe;
				}
				if (movedelta == HDM.flipbook.position.offsetx){
					// TIL that transitionend won't invoke if the translate value is the same as it's previous value
					// so if you managed to do a 'full' screen push, then it'll never fire
					// good part is that you don't have to do your own animations, yay.
					HDM.flipbook.engine.centralizeFrames();
				} else {

					if (HDM.flipbook._vars.notouch){
	//					console.log("MER DERTER",HDM.flipbook._vars.currentDirection,HDM.flipbook.position.offsetx,transitionDuration,movedelta)
						$(HDM.flipbook.dom.stage).animate({
							left: HDM.flipbook.position.offsetx-movedelta
						}, transitionDuration, function(e) {
							// Animation complete.
							HDM.flipbook.engine.centralizeFrames(movedelta);
						});
						// we gotta ghetto animate this,, also unbind any events..
					} else {

						HDM.flipbook.dom.stage.addEventListener('webkitTransitionEnd',HDM.flipbook.engine.centralizeFrames,false);
						HDM.flipbook.dom.stage.addEventListener('transitionend',HDM.flipbook.engine.centralizeFrames,false);

						HDM.flipbook.dom.stage.style.webkitTransitionDuration = transitionDuration+'ms';
						HDM.flipbook.dom.stage.style.MozTransitionDuration = transitionDuration+'ms';
						HDM.flipbook.dom.stage.style.msTransitionDuration = transitionDuration+'ms';

						HDM.flipbook.dom.stage.style.webkitTransform = 'translate3d('+HDM.flipbook.position.offsetx+'px, 0px, 0)';
						HDM.flipbook.dom.stage.style.MozTransform = 'translate(' + HDM.flipbook.position.offsetx + 'px, 0px)';
						HDM.flipbook.dom.stage.style.msTransform = 'translate(' + HDM.flipbook.position.offsetx + 'px, 0px)';
					}
				}
			}//end if vertical swipe

			HDM.flipbook._vars.isHSwipe = false;
			HDM.flipbook._vars.isVSwipe = false;
		}
	},
	event :{
//		ythreshold : null,// silly little hacky thing to make the frame sticky-like
		lockScrolling : false,
		eventCache : null,
		/*
			ok, so this sucker is related to a stupid android bug that prevents the touchmove from firing correctly..
			http://code.google.com/p/chromium/issues/detail?id=150779
			what needs to be done is that on touchstart we enable lockScrolling at touchstart..
			however, we need to make sure that a user *CAN* scroll at a certain threshold.. lets call it  25 px
		*/
		touchstart : function(e){
			HDM.flipbook.move.start(e.touches[0].pageX,e.touches[0].pageY,e.timeStamp);
			HDM.flipbook.event.ythreshold = e.touches[0].pageY;
			HDM.flipbook.event.lockScrolling = true;
		},
		touchmove : function(e){
			// ghetto user agent switching... blah
			/* so, the iPhone has different behavior with .preventDefault(), so by default I'm just gonna not have the preventDefault fire on iOS
				which is actually okay, since the problem was with the android browsers having a bug that would cancel touchmove

			var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true : false );
			if (HDM.flipbook.event.lockScrolling && (!iOS)){
				e.preventDefault();
				HDM.flipbook.move.drag(e.touches[0].pageX,e.timeStamp);
				if (Math.abs(HDM.flipbook.event.ythreshold-e.touches[0].pageY) > 25){
					// making the scroll a little sticky
					HDM.flipbook.event.lockScrolling = false;
					e.target.dispatchEvent(e); // honestly, I don't even know if this works...
				}
			} else if (iOS) {
				if (HDM.flipbook.event.ythreshold === e.touches[0].pageY){
					e.preventDefault();
				}*/
				HDM.flipbook.move.drag(e,e.touches[0].pageX,e.touches[0].pageY,e.timeStamp);
			//}
		},
		touchend : function(e){
			HDM.flipbook.move.end(e.timeStamp);
		},
		touchcancel : function(e){
			HDM.flipbook.move.end(e.timeStamp);
		},
		initmouseposition : function(e){
			HDM.flipbook.move.start(e.pageX,e.timeStamp);
		},
		mousestart : function(e){

			function findbuttonTag(el) {
				// dude this code is crass as hell, fixme.. :-(
				var at = el.getAttribute("flipbook")
				if ((at== "button_next")||(at=="button_prev")){
					return at
				}
				while (el.parentNode) {
					el = el.parentNode;
					if (el.tagName === "BODY"){
						return null;
					}
					var at = el.getAttribute("flipbook")
					if ((at== "button_next")||(at=="button_prev")){
						return at
					}
				}
				return null;
			}
			if (findbuttonTag(e.target)){
				if (!e) e = window.event;
				if (e.stopPropagation) { //IE9 & Other Browsers
				  e.stopPropagation();
				} else { //IE8 and Lower
				  e.cancelBubble = true;
				}
				return false;
			}
			console.log("what am i",e.target,e)

			HDM.flipbook.event.mousedown = true;
			document.body.addEventListener("mouseup",HDM.flipbook.event.mouseend,  false);
		},
		mousemove : function(e){
			if (HDM.flipbook.event.mousedown) {
				HDM.flipbook.move.drag(e.pageX,e.timeStamp);
			}
		},
		mouseend : function(e){
			HDM.flipbook.event.mousedown = false;
			HDM.flipbook.move.end(e.timeStamp);
			document.body.removeEventListener("mouseup",HDM.flipbook.event.mouseend,  false);
		},
		mousedown : false
	},
	click : {
		back : function(){
			if (HDM.flipbook._vars.counter > 0){
				HDM.flipbook._vars.currentDirection = "back"
				HDM.flipbook.listen.dispatchEvent("directionClicked",HDM.flipbook._vars.currentDirection);
				HDM.flipbook.click.scrollNCentralize((HDM.flipbook._vars.deltaframe))
			}
		},
		next : function(){
			if (HDM.flipbook._vars.counter < (HDM.flipbook._vars.FBModel.slides.length-1)){
				HDM.flipbook._vars.currentDirection = "next"
				HDM.flipbook.listen.dispatchEvent("directionClicked",HDM.flipbook._vars.currentDirection);
				HDM.flipbook.click.scrollNCentralize((-HDM.flipbook._vars.deltaframe))
			} else if (HDM.flipbook._vars.counter == (HDM.flipbook._vars.FBModel.slides.length-1)){
				HDM.flipbook.control.gotoLastFrame();
			}
		},
		scrollNCentralize : function(distance){
				if (HDM.flipbook._vars.notouch){
					$(HDM.flipbook.dom.stage).animate({
						left: distance
					}, 300, function(e) {
						// Animation complete.
						HDM.flipbook.engine.centralizeFrames();
					});
					// we gotta ghetto animate this,, also unbind any events..
				} else {
					HDM.flipbook.dom.stage.style.webkitTransitionDuration = 300+'ms';
					HDM.flipbook.dom.stage.style.MozTransitionDuration = 300+'ms';
					HDM.flipbook.dom.stage.addEventListener('webkitTransitionEnd',HDM.flipbook.engine.centralizeFrames,false);
					HDM.flipbook.dom.stage.addEventListener('transitionend',HDM.flipbook.engine.centralizeFrames,false);
					HDM.flipbook.dom.stage.style.webkitTransform = 'translate3d('+distance+'px, 0px, 0)';
					HDM.flipbook.dom.stage.style.MozTransform = 'translate(' + distance + 'px, 0px)';
					HDM.flipbook.dom.stage.style.msTransform = 'translate(' + distance + 'px, 0px)';
				}
		},
		gotoThumbs : function(e){
//			HDM.flipbook.control.gotoInterstitial(e);
			HDM.flipbook.control.gotoThumbs(e);
		},
		gotoMain : function(e){
			HDM.flipbook.control.gotoMain(e);
			HDM.flipbook._vars.currentDirection = null;
			HDM.flipbook.engine.centralizeFrames();
		},
		restartFB : function(e){
			HDM.flipbook.control.restartFB(e);
		},
		thumbSelect : function(position){
			HDM.flipbook.control.gotoSlide(--position);
			HDM.flipbook.engine.centralizeFrames();
		},
		gotoLarger : function(e){
			HDM.flipbook.control.gotoLarger(e);
		}
	},
	init: function(FBModel,options){
		// lets grab the jquery references and store them locally...
		this.dom.frame = document.querySelector("[flipbook=scrollframe]");
		this.dom.stage = document.querySelector("[flipbook=scrollstage]");
		this.dom.indframeleft = document.querySelector("[flipbook=frame_left]");
		this.dom.indframemiddle = document.querySelector("[flipbook=frame_center]");
		this.dom.indframeright = document.querySelector("[flipbook=frame_right]");

		// lets bind some jq objects..

		this.dom.jqMain = $("[flipbook='scrollframe'],[flipbook='flipbookSubHead'],[flipbook='flipbookSubFoot']");
		this.dom.jqInterstitial = $("[flipbook='adFrame']");
		this.dom.jqDocBody = $(document.body);
		this.dom.jqPageNum = $("[flipbook='pageNum']");
		this.dom.jqPageTotal = $("[flipbook='pageNumTotal']");
		this.dom.jqRelatedStories = $("[flipbook='storiesFrame']");
		this.dom.jqRelatedStoriesSource = $("[flipbook='storiesFrameSource']");
		this.dom.jqRelatedStoriesSource.find("span[id] script:contains('document.write')").remove();
		this.dom.jqRelatedStories.append(this.dom.jqRelatedStoriesSource.clone());
		this.dom.jqLarge = $("[role='screen-flipbooklargeoverlay']");

		//Bind pagination buttons (R&T doesn't have these...Should not have any effect)
		//Note: T&C has it's own click.next and click.back in its global.js
		this.dom.pagNext = $("[flipbook=pag_next]");
		this.dom.pagNext.each(function(){
			$(this).bind("click", HDM.flipbook.click.next);
		});

		this.dom.pagPrev = $("[flipbook=pag_prev]");
		this.dom.pagPrev.each(function(){
			$(this).bind("click", HDM.flipbook.click.back);
		});

		if (this.dom.frame==null){
			return false;
		}
		this.util.getFrameWidth(); // store the frame width value so when the screen changes..
		this.template.register();// register the template!


		if (Modernizr.touch){
			this.dom.frame.addEventListener("touchstart",HDM.flipbook.event.touchstart,  true);
			this.dom.frame.addEventListener("touchmove",HDM.flipbook.event.touchmove,  false);
			this.dom.frame.addEventListener("touchend",HDM.flipbook.event.touchend,  true);
			this.dom.frame.addEventListener("touchcancel",HDM.flipbook.event.touchcancel, true);
		} else {
			this._vars.notouch = true;
			//this.dom.frame.addEventListener("mousedown",HDM.flipbook.event.mousestart,  false);
			//document.body.addEventListener("mousedown",HDM.flipbook.event.initmouseposition,  false);
			//document.body.addEventListener("mousemove",HDM.flipbook.event.mousemove,  false);
		}


		HDM.flipbook._vars.FBModel = FBModel;

		// if a hash exists for pagination, lets load that page..
		var indexString = /slide\-(\d+)$/.exec(window.location.hash)
		if ( indexString ){
			HDM.flipbook._vars.counter = parseInt(indexString[1],10)-1;
		}

		HDM.flipbook.engine.centralizeFrames();

		this._vars.state = "main"; // I know it's redundantly being called, but whatever..


		$(window).resize(function(){
			HDM.flipbook.util.getFrameWidth();
		});

		this.interstitial.init(options.fb_adInterval,options.flipbookAdPosition);

		HDM.flipbook.engine.renderThumbs(HDM.flipbook._vars.FBModel);

		$(document).ready(function(){

			// lets render the thumbs..
			// lets move thumbs content to it the container..
			$("[role='flipbook-thumbscontent']").append($("[flipbook='thumbsFrame']"))
			// gonna bind it onload..
			$("[flipbook='button_closead'],[flipbook='button_closethumbs'],[flipbook='button_closelarge']").bind("click",HDM.flipbook.click.gotoMain);
			$("[flipbook='button_restart']").bind("click",HDM.flipbook.click.restartFB)

			$("[flipbook='pageNumTotal']").html(HDM.flipbook._vars.FBModel.slides.length+" images");
			HDM.flipbook.listen.dispatchEvent("init")

		})

//		options.fb_autoplay = true;
//		options.fb_autoplayDelay = 3000;
		this.autoplay.init(options.fb_autoplay,options.fb_autoplayDelay);

	}
}


/**********************************************************
 *
 * HDM smartImages
 *
 * Handles the lazy loading scripts, along with choosing the appropriate cut sizes
 * based on dom attributes. The attribute syntax looks something like this:
 *
 * hdmimgcut_[width]x[height]="path/to/file.jpg"
 *
 * make sure we have hdmimg="smart" attribute in the dom node as well. Classnames
 * smartload and noimg will change dynamically and only have a visual impact, mostly
 * for fancy fadin effects and stuff
 *
 * <img class="smartload noimg" hdmimg="smart" src="placeholder16x9.gif" hdmimgcut_1280x768="reallylargefile.jpg" hdmimgcut_960x576="largefile.jpg" hdmimgcut_640x384="mediumfile.jpg" hdmimgcut_320x192="smallfile.jpg" hdmimgcut_160x96="thumbfile.jpg" >
 *
 * attributes:
 *		hdmimg
 *			- smart - standard attribute name
 *			- unique - there is only one image being used here, so replace common images
 *
 *
 **********************************************************/
HDM.smartImages = {
	_vars : {
		devicePixelRatio : 1, // lets default this to one..
		imglist : [],
		windowHeight : null,
		jqwindowobj : null/*,
		loadQueue : []*/
	},
	fn : {
		checksize : function(){
		},
		loadByimg : function(imgObj){
			var imglist = HDM.smartImages._vars.imglist;
			var foundsmartimg = null;
			for (var i = 0; i < imglist.length; i++){
				if (imglist[i].img = imgObj){
					foundsmartimg = imglist[i];
					break;
				}
			}
//			console.log("DURD ER FURD ERT?",foundsmartimg,foundsmartimg.img)
			if (foundsmartimg != null){
				HDM.smartImages.fn.loadIt(foundsmartimg);
			}

		},
		loadIt: function(smartimg,force){
			// ok even before all that, lets' find out if this element is attached to the dom..
			var elementInDocument = function(e) {
				while (e = e.parentNode) {
					if (e == document) {return true;}
				}
				return false;
			}
			if (!elementInDocument(smartimg.img)){
//				console.warn("[HDM.smargImages.fb.loadInt] imagen not in dom",smartimg);
				return false;
			}
			// before we do antyhing, lets check smartimg and see if the idealURL is already being used as the src
			if ((smartimg.img.src == smartimg.selectedCut[0]) && (!force)){
//				console.warn("***** same url found",smartimg.img.src,smartimg.selectedCut);
				return false;
			}
			if ((smartimg.top == -1)&&(!force)){
				return false;
			}
			// lets see if it is hidden..
			if ((window.getComputedStyle(smartimg.img,null).getPropertyValue("display") == "none")&&(!force)){
				return false;
			}
			if (smartimg.img.src == smartimg.selectedCut[0]){
				return false; // if the same img is attempted to being loaded, lets pass..
			}
			var newimg = new Image();
//			alert("load it"); return false;
			function loadme(){
				smartimg.jqobj.removeClass("noimg");
				smartimg.img.src = this.src;
				smartimg.jqobj.addClass("loaded");
			}
			newimg.addEventListener('load',loadme,false);
			newimg.src = smartimg.selectedCut[0];
		},
		lazyLoadit : function(){
		},
		selectImageSrc : function(index){
			// let's get the img object..
			myimg = HDM.smartImages._vars.imglist[index];

		},
		register : function(imgObj,imgType,nosave){
			var jqsmart = $(imgObj)
			// lets find all the cuts...
			var cuts = [];
			var attributes = imgObj.attributes;
			for (var i = 0; i < attributes.length; i++){
				var name = attributes[i].nodeName.toLowerCase();
				if (/hdmimgcut_\d+x\d+$/.test(name)){
					var dimensions = name.split("hdmimgcut_")[1].split("x");
					cuts.push([attributes[i].nodeValue,parseInt(dimensions[0]),parseInt(dimensions[1])]);
					// array format: [hdmimgcut_1280x768,1280,768]
					// or [name, width, height]
				}

			}

			if (cuts.length == 0){
				console.warn("[HDM.smartImages.fn.register] no image cuts found",imgObj);
				return false;
			}
			cuts.sort(function(a,b){return b[1]-a[1]});// sort it by width value - I love these slick functions, always so fancy
			var smartimg = {
				height : jqsmart.height(),
				width : jqsmart.width(), // needed when image is resized and need to check to see if the url we need is good enough
				top : -1,
				loaded : false,
				cuts : cuts,
				selectedCut : [],
				imgType : imgType,
				jqobj : jqsmart,
				img : imgObj // may not need these..
			}
/*			jqsmart.load(function(){
//				smartimg.top = smartimg.jqobj.offset().top;
				console.log("smartimg test "+smartimg.jqobj.offset().top,smartimg,this)
			});*/
			// keep in mind that if there are redundant image
			var found = false;
			if (imgType == "unique"){
				var imglist = HDM.smartImages._vars.imglist;
				for (var i = 0; i < imglist.length; i++){
					var testimg = imglist[i];
					if (testimg.img.src == smartimg.img.src){
						// reference has already been found, lets replace it..
						HDM.smartImages._vars.imglist[i] = smartimg;
						found = true;
						break;
					}
				}
			} else {
			// okay, so we will also need to make sure any redundant files pointing to the same src file will
			// not be referenced twice..
				var imglist = HDM.smartImages._vars.imglist;
				for (var i = 0; i < imglist.length; i++){
					var testimg = imglist[i];
					if (testimg.img == smartimg.img){
						// reference has already been found, lets replace it..
//						console.error("[HDM.smartImages.fn.register] duplicate img ref found, ignoring..",smartimg)
						found = true;
						break;
					}
				}
			}

			console.warn("regme",imgType)

			if (!found && (imgType != "carousel") && (imgType != "flipbook")){
				HDM.smartImages._vars.imglist.push(smartimg);
				return smartimg;
			} else if ((imgType == "carousel")||(imgType == "flipbook")){
				// we do not store carousel images in the smartImage bank, carousels have their own management
				// same thing with flipbook..
				return smartimg;
			} else if (nosave){
				console.warn("not saving this smartimg in the registry, simply just pass the obj back")
				return smartimg;
			} else {
				return smartimg;
			}
		},
		findIdealImageSrc : function(smartimg){
			smartimg.loaded = false;
			var currentwidth = smartimg.width*HDM.smartImages._vars.devicePixelRatio;

			var cuts = smartimg.cuts;
			var chosencut;
			for (var i = 0; i < cuts.length; i++){
				var mywidth = cuts[i][1];
				if (mywidth > currentwidth){// this sucker works because it's sorted.. remember?
					chosencut = cuts[i];
				}
			}
			if (!chosencut){
				chosencut = cuts[0];
			}
			if (smartimg.selectedCut.length < 1){
				smartimg.selectedCut = chosencut;
			} else 	if (chosencut[1] > smartimg.selectedCut[1]){
//				console.log("chosen cut changed!",chosencut[1],smartimg.selectedCut[1]);
				smartimg.selectedCut  = chosencut
			} else if (!chosencut){
				smartimg.selectedCut = cuts[0];
			}
//			console.log("selected cut found",smartimg.selectedCut)
			/*
				in addition to this, we need to be able to detect things like retina display.. also, I kinda wanna do a load comparison to see if it is worth checking the load times
				that way I can figure out if I need to load up a smaller image next time around... you know what, tat's really complicated, lol
				yeah scratch that. I'll do that later, right now I"m just pressed for time.
			*/
			return smartimg;// after it is all found and set to idealURL, pass the var back..
		}
	},
	event : {
		repositionCheck : function(e){
			// do we need to grab the window for anything? oh yeah, to determine the bottom..
			HDM.smartImages._vars.windowHeight = HDM.smartImages._vars.jqwindowobj.height();
			for(var i = 0; i < HDM.smartImages._vars.imglist.length; i++){
				var smartimg = HDM.smartImages._vars.imglist[i];
				var ttop = smartimg.jqobj.offset().top;
				if (smartimg.top != ttop){
					HDM.smartImages._vars.imglist[i].top = ttop;
					// hopefully this isn't too taxing...
				}
				var twidth = smartimg.jqobj.width()
				if (smartimg.width != twidth){
					// find the ideal image width
					HDM.smartImages._vars.imglist[i].width = twidth;
					if (HDM.smartImages._vars.imglist[i].imgType == "carousel"){// ok thing about the carousels, they will have to manage their own images.. hrm how the frig
						continue; // bail out for carousels
					}

					HDM.smartImages.fn.loadIt(HDM.smartImages.fn.findIdealImageSrc(HDM.smartImages._vars.imglist[i]));
				}
			}
		},
		scrollCheck : function(e){
			/*			// initially used to throttle down the scrollCheck event.. but prolly not necessary
			var timegate = true;
			if (e && (e.timeStamp > (HDM.smartImages._vars.scrollTimestamp+100))){
				console.log("DO EEET")
				timegate = false;
				HDM.smartImages._vars.scrollTimestamp = e.timeStamp;
			}
			if (timegate){
				return;
			}*/
			var scrollValue = HDM.smartImages._vars.jqwindowobj.scrollTop();
			for(var i = 0; i < HDM.smartImages._vars.imglist.length; i++){
				if (HDM.smartImages._vars.imglist[i].loaded){
					continue;
				}
				if (HDM.smartImages._vars.imglist[i].imgType == "carousel"){
					// ok thing about the carousels, they will have to manage their own images.. hrm how the frig
					continue;
				}
				var smartimg = HDM.smartImages._vars.imglist[i];
				smartimg.top = smartimg.jqobj.offset().top; // man.. I really didn't want to call this like this..
				if ((smartimg.top-(HDM.smartImages._vars.windowHeight*2)) < scrollValue){
					if (!smartimg.loaded){
						HDM.smartImages._vars.imglist[i].loaded = true;
						HDM.smartImages.fn.loadIt(smartimg);
//						console.warn("load it!",smartimg,smartimg.top,HDM.smartImages._vars.windowHeight,scrollValue,smartimg.jqobj.offset().top)
					}
				}
			}
		}
	},
	init : function(){
		HDM.smartImages._vars.devicePixelRatio = window["devicePixelRatio"] ? window["devicePixelRatio"] : 1;
		HDM.smartImages._vars.jqwindowobj = $(window);
		/*
		 scan the loaded page, look for all images
		 register all lazyloading images
		 load up initial set, then bind events to resize and scroll
		*/

		var unculledimages = $("img.smartload");
		unculledimages.each(function(index){
			var attr = this.getAttribute("hdmimg")
			if ((attr) && (attr != "carousel")){
				HDM.smartImages.fn.register(this,attr);
			}
		})
		// let's test this out..
		HDM.smartImages._vars.jqwindowobj.resize(HDM.smartImages.event.repositionCheck);
		HDM.smartImages._vars.windowHeight = HDM.smartImages._vars.jqwindowobj.height();
		for(var i = 0; i < HDM.smartImages._vars.imglist.length; i++){
				// write code here to generate idealURL
				HDM.smartImages.fn.findIdealImageSrc(HDM.smartImages._vars.imglist[i])
		}
		// bind scroll event
		HDM.smartImages.event.scrollCheck();
		$(document).scroll(HDM.smartImages.event.scrollCheck);
		// let's initiate reposition event
	}
}
