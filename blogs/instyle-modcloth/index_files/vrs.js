_vrtrack=function(){},function(e,n){var t,r=e._vrq||[],o="http://t.visualrevenue.com/",i="http://t1.visualrevenue.com/",a=new Date,u=function(e,n){for(var t=r.length;t--;)if(r[t][0]==e)return"undefined"==typeof n?r[t][1]:(r[t][1]=n,void 0);"undefined"!=typeof n&&r.push([e,n])},l={poll_interval:50,timer:null,check_dom_tag:function(e,t){if(n.getElementsByTagName&&setTimeout){var r=n.getElementsByTagName(e);r&&r.length&&r.length>0?(clearTimeout(l.timer),t()):l.timer=setTimeout(function(){l.check_dom_tag(e,t)},l.poll_interval)}}},c=function(e,t,r){r=r||"";var o,i,a,u,l,c=n.getElementsByTagName("head");if(c)for(o=0,a=c.length;a>o;o++)if(l=c[o].getElementsByTagName(e))for(i=0,u=l.length;u>i;i++)if(l[i].getAttribute(t)&&(!r||r==l[i].getAttribute(t).toLowerCase()))return l[i];return null},f=function(e){if(e.indexOf("http://")>-1)return e;var t=function(e){return e.split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")},r=n.createElement("div");return r.innerHTML='<a href="'+t(e)+'">x</a>',r.firstChild.href},s=function(){var e=c("meta","property","vr:canonical");if(e&&e.content)return f(e.content);var t=c("link","rel","canonical");if(t&&t.href)return f(t.href);var r=c("meta","property","og:url");return r&&r.content?f(r.content):n.location.href},_=function(){var e=u("refurl");return"undefined"==typeof e&&(e=n.referrer),d()&&(e=t),e},d=function(){if(!C)return!1;var e=c("meta","http-equiv","refresh"),n=null,r=null;return e&&e.content&&(n=decodeURIComponent(g("__vrrefresh")),r=parseInt(e.content.split(";")[0],0),r=Math.round(100*(r/60))/100+.1,p("__vrrefresh",encodeURIComponent(t),r,I),n===t)?!0:!1},v=function(){var e=c("meta","http-equiv","content-type");return e?(b=e.content.split("charset=")[1],b&&(b=b.split(";")[0]),b||(b=e.content.split(";")[1],b||(b=e.content))):(e=c("meta","charset",null),e&&(b=e.getAttribute("charset"))),u("charset",b),b},m=function(){var e={"co.uk":1,"co.il":1,"co.in":1,"co.ke":1,"co.ug":1,"com.my":1},t=n.location.hostname,r=t.split("."),o=null;return r.length>=2&&(o=r.slice(-2).join("."),e[o]&&(o=r.slice(-3).join("."))),o},g=function(e){var t,r=e+"=",o=n.cookie.split(";");for(t=0;t<o.length;t++){for(var i=o[t];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(r))return i.substring(r.length,i.length)}return null},p=function(e,t,r,o){var i;if(r){var a=new Date;a.setTime(a.getTime()+1e3*60*r),i="; expires="+a.toGMTString()}else i="";n.cookie=e+"="+t+i+"; path=/; domain=."+o},h=function(){var e,n,t,r="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");for(e=(new Date).getTime().toString(),t=0;32>t;t++)n=Math.floor(62*Math.random()),e+=r[n];return e},y=function(e){var n=new Image(1,1);n.src=e},k=function(e,t){t.id&&T(t.id);var r=n.createElement("script"),o=n.getElementsByTagName("script")[0];r.async=!0,r.src=e,r.id=t.id,r.onload=t.onload,o.parentNode.insertBefore(r,o)},T=function(e){var t=n.getElementById(e);if(t){t.parentNode.removeChild(t);try{for(var r in t)delete t[r]}catch(o){}}},q=function(e){if(!e)return e;var n,t=[];for(n=0;n<e.length;n++)e.charCodeAt(n)<128?t.push(e.charAt(n)):t.push(encodeURIComponent(e.charAt(n)));return encodeURIComponent(t.join(""))},w=function(e){return u("track_url",e.track_url),query="?idsite="+e.np,query+="&url="+e.track_url,query+="&seen_url="+e.seen_url,query+="&t="+e.title,query+="&c="+e.cookie,query+="&r="+e.timestamp,query+="&ypos="+e.ypos,query+="&debug="+e.debug,e.ref_url&&(query+="&refurl="+e.ref_url),e.ref_np&&(query+="&refnp="+e.ref_np),e.norm_ref_url&&(query+="&norm_refurl="+e.norm_ref_url),e.conversion_id&&(query+="&cv_id="+e.conversion_id),e.content_type&&(query+="&content_type="+e.content_type),e.no_cookies&&(query+="&no_cookies=true"),e.manual_ping&&(query+="&man=true"),e.mx&&(query+="&mx="+e.mx,query+="&my="+e.my,query+="&sw="+e.sw),query+="&v=09"},E=u("id"),C=!u("no_cookies"),M=g("__vrf"),I=m(),b=null,x=function(e){e=e||{};var r=encodeURIComponent(n.title),u=e.conversion_id,l=g("__vry")||-1;E=e.track_id||E;var c=g("__vrid");t=e.track_url||t;var f=e.ref_url,s=null;e.manual_ping?s=f:(s=g("__vru"),s&&(s=decodeURIComponent(s)));var _=g("__vrl");_=_?decodeURIComponent(_):e.seen_url||t;var d=g("__vrm"),v={};d&&(d=d.split("_"),v.x=d[0],v.y=d[1],v.screen_width=d[2]);var m=(new Date).getTime(),p=new Date-a,h=w({track_url:q(t),seen_url:q(_),ref_url:q(f),norm_ref_url:q(s),np:E,ref_np:c,title:r,cookie:M,debug:"loadTime."+p,timestamp:m,ypos:l,conversion_id:u,content_type:b,mx:v.x,my:v.y,sw:v.screen_width,no_cookies:!C,manual_ping:e.manual_ping});y(o+h),y(i+h),e.automate},N=function(e){e=e||{};var t=e.refurl?e.refurl:n.location.href;x({automate:!!e.automate,conversion_id:e.conversion_id,manual_ping:!0,ref_url:t,track_id:e.track_id,track_url:e.track_url})},D=function(e){return e&&e.tagName&&"a"===e.tagName.toLowerCase()},L=function(e){for(var n=4,t=null;e&&n--;){if(D(e)){t=e;break}e=e.parentNode}return t},R=function(e,n){if(!n||null==e)return-1;var t,r,o=-1;for(t=0,r=e.length;r>t;t++)if(e[t].href===n.href&&(o+=1),e[t]===n)return o;return-1},A=function(e,t){var r=function(e){e=e||event,t.apply(n,[e,e.target||e.srcElement])};n.addEventListener?n.addEventListener(e,r,!1):n.attachEvent&&n.attachEvent("on"+e,r)},z=function(){if(!u("no_cookies")){var e=null,r=n.getElementsByTagName("a");A("mousedown",function(o,i){var a=L(i);if(a){var u=R(r,a);p("__vrl",encodeURIComponent(a.href),.4,I),p("__vry",u,.4,I),p("__vru",encodeURIComponent(t),.4,I),g("__vrrefresh")&&p("__vrrefresh",-1,.001,I),p("__vrid",E,.4,I),e=i}else p("__vrl",-1,.001,I),p("__vry",-1,.001,I);var l,c,f;o.pageX||o.pageY?(l=o.pageX,c=o.pageY):(o.clientX||o.clientY)&&(l=o.clientX+n.body.scrollLeft+n.documentElement.scrollLeft,c=o.clientY+n.body.scrollTop+n.documentElement.scrollTop),l&&(f=n.documentElement.clientWidth?n.documentElement.clientWidth:n.body.clientWidth,p("__vrm",l+"_"+c+"_"+f,.4,I))}),A("mouseup",function(n,t){e&&t!==e&&(p("__vrl",-1,.001,I),p("__vry",-1,.001,I),p("__vrm",-1,.001,I)),e=null})}};e._vrtrack=N,C&&!M&&(M=h(),p("__vrf",M,30,I)),l.check_dom_tag("body",function(){t=s(),b=v(),x({ref_url:_(),seen_url:n.location.href})}),z();var U,X="http://a.visualrevenue.com/easyXDM.min.js",j="http://p.visualrevenue.com/",B=50,S=50;r.easyXDM=e&&e.easyXDM;var r,u,g,A,k,H=function(){if(U&&console&&console.log){var e=Array.prototype.slice.apply(arguments),n=new Date,t="VR_S ";t+=(n.getMinutes()>9?n.getMinutes():"0"+n.getMinutes())+":",t+=(n.getSeconds()>9?n.getSeconds():"0"+n.getSeconds())+".",t+=n.getMilliseconds()>9?n.getMilliseconds()>99?n.getMilliseconds():"0"+n.getMilliseconds():"00"+n.getMilliseconds(),e.unshift(t),console.log.apply(console,e)}},Y=function(){var e={};if(n.querySelectorAll){for(var t=n.querySelectorAll("*[data-vr-zone]"),r=0,o=t.length;o>r;r++){var i=t[r].getAttribute("data-vr-zone");e[i]?e[i].push(t[r]):e[i]=[t[r]]}return e}for(var a=n.all,r=0,o=a.length;o>r;r++){var u=a[r].getAttribute("data-vr-zone");u&&(e[u]?e[u].push(a[r]):e[u]=[a[r]])}return e},W=function(e,n,t){var r;return function(){var o=this,i=arguments,a=function(){t||e.apply(o,i),r=null};r?clearTimeout(r):t&&e.apply(o,i),r=setTimeout(a,n||100)}},O=function(e){return e.replace(/\s/g,"")},G=function(){function e(e){return e&&"string"==typeof e&&(e=escape(e).replace(/%26/g,"&").replace(/%23/g,"#").replace(/%3B/g,";"),t.innerHTML=e,t.innerText?(e=t.innerText,t.innerText=""):(e=t.textContent,t.textContent="")),unescape(e)}var t=n.createElement("div");return e}(),F=function(e,n){if(!e)return 0;var t,r=0,o="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",i=e.substr(-n,n),a=i.length;for(t=0;a>t;t++)r=r+o.indexOf(i.charAt(t))+1;return r%n},V=function(e){var n=u("charset"),t="?transport="+e;return t+="&idsite="+u("id"),t+="&url="+u("track_url"),t+=n?"&content_type="+n:"",t+="&easyxdm="+encodeURIComponent(X)},J=function(n){return r.easyXDM&&(H("found existing easyXDM",r.easyXDM.version),parseFloat(r.easyXDM.version)>2.3)?n():(k(X,{onload:function(){r.easyXDM=e.easyXDM.noConflict("_vrq"),n()}}),void 0)},K=function(e){var n=j+V("xdm");r.rpc=r.easyXDM.Rpc({remote:n},{local:{init_serving:e}})},P=function(e){var n=j+V("jsonp"),t="callbackFn";n+="&callback=_vrq.jsonp."+t,r.jsonp={},r.jsonp[t]=e,k(n,{id:"vr-script-002"})},Q=function(e){H("Doing "+e.length+" headline test(s)");for(var n=F(g("__vrf"),2),t=Y(),r=0,o=e.length;o>r;r++)Z(e[r],t,n)},Z=function(e,n,t){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");if(H("Cookie Split: "+r[t]),n[e.config.data_vr_zone]){var o=e.content.new_titles[t],i=e.content.current_title,a=e.content.new_images[t],u=e.content.current_image,l=[];e.config.winner&&(o=e.config.winner.title,a=e.config.winner.image,H("A winner was sent, so use that instead"));for(var c=0,f=n[e.config.data_vr_zone].length;f>c&&(l.push(en(u,a,n[e.config.data_vr_zone][c],!1)),l.push($(i,o,n[e.config.data_vr_zone][c],!1)),!l[0]&&!l[1]);c++);}else var s=20,_=setInterval(function(){if(n=Y(),n[e.config.data_vr_zone])Z(e,n,t);else{if(s>0)return s--,H("Tries left to find zone: "+s),void 0;H('data-vr-zone "'+e.config.data_vr_zone+'" was not found on the page')}clearInterval(_)},100)},$=function(e,t,r,o){if(!t||e==t)return H("Goal title is current title, do nothing"),!1;H("Searching for headline: "+e);for(var i,a=r.getElementsByTagName("a"),u=!1,l=O(G(e)).toLowerCase(),c=0,f=a.length;f>c;c++)i=a[c].innerHTML,i.length>=e.length&&(i=O(G(i)).toLowerCase(),i==l&&(u=!0,a[c].innerHTML=t,H("Headline found and replaced (anchor value)")));if(!u){if(n.getElementsByTagName){var s;for(c=0;f>c;c++){s=a[c].getElementsByTagName("*");for(var _=-1,d=s.length;++_<d;)child_html=s[_].innerHTML,child_html.length>=e.length/2&&(child_html=O(G(child_html)).toLowerCase(),child_html==l&&(u=!0,s[_].innerHTML=t,H("Headline found and replaced (child value)")))}}u||o||(H("Headline not found"),S>0?(setTimeout(function(){$(e,t,r,!1),H("Tries left to find headline: "+S)},100),S--):H("Headline not found in zone"))}return u&&!o&&nn($,e,t,r),u},en=function(e,n,t,r){if(!n||e==n)return H("Goal image is current image, do nothing"),!1;H("Searching for image: "+e);for(var o,i=t.getElementsByTagName("img"),a=!1,u=0,l=i.length;l>u;u++)o=i[u].src,o==e&&(a=!0,i[u].src=n,H("Image found and replaced"));return a||r||(H("Image not found"),B>0?(setTimeout(function(){en(e,n,t,!1),H("Tries left to find image: "+B)},100),B--):H("Image not found in zone")),a&&!r&&nn(en,e,n,t),a},nn=function(e,n,t,r){var o=W(function(r){setTimeout(function(){e.call(e,n,t,r.relatedNode,!0)},1)},50,!0);A(r,"DOMNodeInserted",o)},tn=function(n,t){if(n.config.manip_test&&"#vr-test-modules"!=e.location.hash)return!1;if(t[n.config.container_zone])t[n.config.container_zone][0].innerHTML=n.served_html,H("Container zone found, loading module");else var r=30,o=setInterval(function(){var e=Y();if(e[n.config.container_zone])e[n.config.container_zone][0].innerHTML=n.served_html,H("Container zone found, loading module");else{if(r>0)return r--,H("Tries left to find zone: "+r),void 0;H('data-vr-zone "'+n.config.container_zone+'" was not found on the page')}clearInterval(o)},100)},rn=function(e){H("Doing "+e.length+" module(s)");for(var n=Y(),t=0,r=e.length;r>t;t++)tn(e[t],n)},on=function(e){for(var n=[],t=[],r=0;r<e.length;r++)"content_test"==e[r].type?n.push(e[r]):"automation_module"==e[r].type&&t.push(e[r]);rn(t),Q(n)},an=function(){U=g("vr_js_log");var e=u("serving_tasks"),n=u("transport");e?(H("Inline serving tasks"),on(e)):"xdm"==n?(H("Get serving tasks (xdm)"),J(function(){H("easyXDM library loaded"),K(function(e){on(e)})})):(H("Get serving tasks (jsonp)"),P(function(e){on(e)}))};u("automate")&&an()}(window,document);