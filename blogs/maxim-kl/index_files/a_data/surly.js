(function(){function l(c){return/(adsafeprotected.com\/(rjss|rjsi|rfw)\/c.betrad.com|(^https?:)?\/\/c.betrad.com)/.test(c)}function m(){try{return window.localStorage&&window.postMessage}catch(c){return!1}}function n(c,a){function b(d){if(l(d.origin)){var g=document.createElement("script");g.text=d.data;c.parentNode.insertBefore(g,c);p();BAPStart(a)}}function p(){d=!0;window.removeEventListener?window.removeEventListener("message",b,!1):window.detachEvent("onmessage",b)}var d=!1;window.addEventListener?
window.addEventListener("message",b,!1):window.attachEvent("onmessage",b);window.setTimeout(function(){d||(p(),q(c,a))},3E3)}function q(c,a){var d=!1,b=document.createElement("script");b.id="ba.js";b.src=h+"/geo/ba.js?"+j;-1<navigator.userAgent.indexOf("MSIE ")&&(b.onreadystatechange=function(){if(!d&&("loaded"==this.readyState||"complete"==this.readyState))d=!0,b.onload(),b.onload=null});var g;if(!a||"object"!=typeof a)g=a;else{var f=a.constructor(),e;for(e in a)a.hasOwnProperty(e)&&(f[e]=a[e]);
g=f}b.onload=function(){BAPStart(g)};c.parentNode.insertBefore(b,c)}var c,d,a={},r=document.getElementsByTagName("SCRIPT"),h="http"+("https:"==document.location.protocol?"s":"")+"://c.betrad.com",j="1159";window.BAPStart=function(a){try{BAP.start(a)}catch(c){var b=window._bab||[],d={},e;for(e in a)d[e]=a[e];b.push(d);window._bab=b}};for(c=0;c<r.length;c++){var b=r[c];if(b.src&&!b._surly){d=b.src;var e=l(d)||/^https?:\/\/a248.e.akamai.net/.test(d);if(d.match("surly.js")&&e){b._surly=1;var s=!1,e=Math.floor(1E5*
Math.random()),f=d.split(";");a.uqid=e;f=f.splice(1,f.length);for(d=0;d<f.length;d++){if("r=0"==f[d])return;var k=f[d].split("=");a[k[0]]=unescape(k[1]);"nowrite"==k[0]&&(s=!0)}a.order=c;this._bao=a;if(s){c=document.createElement("img");c.style.margin="0px";c.style.padding="0px";c.border=c.width=c.height="0";c.src=h+"/a/4.gif";c.id="bap-pixel-"+e;b.parentNode.insertBefore(c,b);document.getElementById("ba.js")?BAPStart(a):m()?(n(b,a),a=document.createElement("iframe"),a.style.display="none",a.id="ba.html",
a.src=h+"/ba.html?"+j,b.parentNode.insertBefore(a,b)):q(b,a);break}document.write('<img style="margin:0;padding:0;" border="0" width="0" height="0" src="'+h+'/a/4.gif" id="bap-pixel-'+e+'"/>');m()?!document.getElementById("ba.js")&&!document.getElementById("ba.html")?(n(b,a),document.write("<iframe id='ba.html' style='display: none;' width='0' height='0' frameborder='0' scrolling='no' src='"+h+"/ba.html?"+j+"'></iframe>")):BAPStart(a):document.write("<script>(function(){if(document.getElementById('ba.js'))return;document.write('<sc'+'ript id=\"ba.js\" type=\"text/javascript\" src=\""+
h+"/geo/ba.js?"+j+"\"></scr'+'ipt>');})();\x3c/script><script>document.write('<sc'+'ript>BAPStart(_bao);</sc'+'ript>');\x3c/script>")}}}})();
