(function(){glam.create.define("domready",function(){function f(){if(!c){try{g.doScroll("left")}catch(a){setTimeout(f,1);return}d()}}function d(){if(!c){if(!a.body)return setTimeout(d,1);c=!0;for(var b;b=e.shift();)b.call(null,[])}}function b(){a.addEventListener?a.removeEventListener("DOMContentLoaded",b,!1):a.detachEvent("onreadystatechange",b);d()}var k=!1,c=!1,e=[],a=window.document,g=a.documentElement;return function(h){var l=!1;if(!k)if(k=!0,navigator.userAgent.indexOf("MSIE")?"complete"===a.readyState:
"loading"!==a.readyState)d();else if(a.addEventListener)a.addEventListener("DOMContentLoaded",b,!1),window.addEventListener("load",b,!1);else if(a.attachEvent){a.attachEvent("onreadystatechange",b);window.attachEvent("onload",b);try{l=null===window.frameElement}catch(m){}g.doScroll&&l&&f()}c?h.call(null,[]):e&&e.push(h)}});})();