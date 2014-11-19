/* Ayads Skin Engine by Aymeric Le Corre 000014 */

(function(){var w=top,d=w.document,ie=d.documentMode||false,url='http://ayads.co/',ads_url='http://ads.ayads.co/',ayads={setItem:function(k,v,d){var ov=localStorage.getItem('ayads-'+k);var x=parseInt(ov?ov.split('|')[1]:Date.now());if(d)x+=parseInt(d)*1000;localStorage.setItem('ayads-'+k,v+'|'+x);for(k in localStorage) if(k.substr(0,5)==='ayads'&&localStorage.getItem(k).split('|')[1]<Date.now()) localStorage.removeItem(k);},getItem:function(k){var v;if((v=localStorage.getItem('ayads-'+k))&&(v=v.split('|'))&&v[1]>Date.now()) return v[0];else {ayads.removeItem(k);return null;}},removeItem:function(k){localStorage.removeItem('ayads-'+k);},addcss:function(css){var style,id='ayads-style',c;if(c=!(style=d.getElementById(id))) {style=d.createElement('style');style.type='text/css';style.id=id;} if(style.styleSheet) style.styleSheet.cssText+=css;else style.appendChild(d.createTextNode(css));if(c) d.getElementsByTagName('head')[0].appendChild(style);},get:function(u,c){if(c===true) {var s=d.createElement('script');s.type='text/javascript';s.src=url+u;s.async=false;d.body.insertBefore(s,d.body.firstChild);} else {var x=new XMLHttpRequest(),r;if(c)x.onload=function(){c(x.responseText);};x.open('GET',url+u,false);x.send(null);return x.responseText;}},clickurlize:function(u){return url+'click.php?c='+ayads_zone.zid+'-'+ayads_ad.aid+(u?'&url='+encodeURIComponent(u):'');}},ayads_display_ad=function(){var data=ayads_ad.data,image=ayads_ad.image||data.image||ads_url+'delivery/image-'+ayads_ad.aid+'.jpg',color=data.color?data.color:'#FFF',top=data.top?data.top:0,click_url=ayads.clickurlize(data.url),html='',scale=1,height=1000,click_callback=function(e){if(d.body.scrollTop>(height+parseInt(w.getComputedStyle(d.body.parentNode).marginTop))&&!data.fixed&&!data.video&&!data.improve_id&&ayads_ad.format==1) return false;if(window.ayads_clickcount) new Image().src=ayads_clickcount;if(ayads_ad.data.capping_clicks) {var capping_click=ayads.getItem('capping-clicks-a'+ayads_ad.aid);if(capping_click) ayads.setItem('capping-clicks-a'+ayads_ad.aid,++capping_click);else ayads.setItem('capping-clicks-a'+ayads_ad.aid,1,ayads_ad.data.capping_duration);} ayads_ad.click_callback&&ayads_ad.click_callback();w.open(click_url);};if(window.ayads_ad&&d.location.hash.indexOf('ayads-')===-1) {setTimeout(function(){new Image().src=url+'impression.php?zid='+ayads_zone.zid+'&aid='+ayads_ad.aid+'&sid='+(ayads_zone.sid||0);if(window.ayads_impressioncount) new Image().src=ayads_impressioncount;},5000);} if(ayads_zone.format===ayads_ad.format&&ayads_zone.data.html) html+=ayads_zone.data.html;if(ayads_ad.data.html) html+=ayads_ad.data.html;if(html) {html=html.replace('[timestamp]',Math.round(Date.now()*.001));document.write('<div id="ayads-html">'+html+'</div>');d.body.insertBefore(document.getElementById('ayads-html'),d.body.firstChild);} if(ayads_ad.format) {if(ayads_zone.data.scale) {scale=ayads_zone.data.scale*(ayads_zone.data.scale>5?.01:1);top=Math.round(top*scale);} if(ayads_ad.data.video) ayads_display_video({scale:scale,image:image});else {var img=new Image();img.src=image;img.onload=function(){ayads.addcss('body{background-image:url("'+image+'") !important;background-size:'+Math.round(this.width*scale)+'px auto !important}');height=this.height;if(!ayads_ad.data.color&&!ie) {var canvas=document.createElement('canvas');canvas.width=1;canvas.height=img.height;var ctx=canvas.getContext('2d');var data='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'+img.width+'" height="'+img.height+'"><image width="'+img.width+'" height="'+img.height+'" y="0" x="0" xlink:href="'+img.src.replace(/&/g,'&amp;')+'"/></svg>';var img2=new Image();var svg=new Blob([data],{type:'image/svg+xml;charset=utf-8'});var url=URL.createObjectURL(svg);img2.onload=function(){ctx.drawImage(img2,0,0);var data=ctx.getImageData(0,img2.height-1,1,1).data;if(data[3]) ayads.addcss('body{background-color:rgb('+data[0]+','+data[1]+','+data[2]+') !important}');};img2.src=url;}};} ayads.addcss('body{cursor:default;background-position:'+(ayads_ad.data.fixed?'50% '+(w.getComputedStyle(d.body.parentNode).marginTop):'center top')+' !important;background-repeat:no-repeat !important;background-image:none;background-color:'+color+' !important;background-attachment:'+(ayads_ad.data.fixed?'fixed':'scroll')+' !important;margin-left:auto !important;margin-right:auto !important;margin-top:'+top+'px !important;max-width:'+(1000*scale)+'px}html{background-image:none !important;background-color:transparent !important;cursor:pointer}');d.documentElement.onclick=function(e){if(!e||e.target===d.body.parentNode&&e.clientX<d.documentElement.clientWidth-25) click_callback(e);};} if(ayads_ad.data.capping_impressions) {var capping_impressions=ayads.getItem('capping-impressions-a'+ayads_ad.aid);if(capping_impressions) ayads.setItem('capping-impressions-a'+ayads_ad.aid,++capping_impressions);else ayads.setItem('capping-impressions-a'+ayads_ad.aid,1,ayads_ad.data.capping_duration);} if(ayads_zone.data.capping_impressions) {var capping_impressions=ayads.getItem('capping-impressions-z'+ayads_zone.zid);if(capping_impressions) ayads.setItem('capping-impressions-z'+ayads_zone.zid,++capping_impressions);else ayads.setItem('capping-impressions-z'+ayads_zone.zid,1,86400);} (function(){var t,u,l,h=d.getElementsByTagName('head')[0];for(i in t=[url,ayads_ad.data.url])if((u=t[i])&&u.length>9) {l=d.createElement('link');l.rel='dns-prefetch';l.href=u;h.appendChild(l);}})();},ayads_display_video=function(p){var videobg=d.createElement('video'),video=d.createElement('video'),layer=d.createElement('div'),controls=d.createElement('div'),container=d.createElement('div'),share=d.createElement('div'),canplay=true,canplay_scroll=true,canplay_hover=true,play=function(p){if(p&&canplay&&(canplay_scroll||canplay_hover)) {controls.className='ayads-video-buttons';video.play();videobg.play();} else {controls.className='ayads-video-buttons paused';video.pause();videobg.pause();}};ayads.addcss('body{position:static !important}'+'#ayads-video{height:100%}'+'#ayads-video-bg{min-width:100%;min-height:100%;position:fixed;top:0;left:0;right:0;z-index:-2147483648;cursor:pointer}'+'#ayads-video-layer{background:url('+p.image+') no-repeat top center;position:'+(ayads_ad.data.fixed?'fixed':'absolute')+';z-index:-2147483647;margin:auto;width:100%;height:1000px;left:0;right:0;-webkit-transform-origin:top center;-webkit-transform:scale('+p.scale+') translatez(0);transform-origin: top center;transform:scale('+p.scale+') translate3D(0,0,1px);cursor:pointer}'+'#ayads-video-container{position:absolute;margin:auto;left:50%;margin-left:-195px;box-shadow: 0 0 18px #000;opacity:0;cursor:pointer}'+'.ayads-video-buttons{background:no-repeat center;background-size:contain;width:28px;height:28px;position:absolute;z-index:1;bottom:0;margin:10px 12px;opacity:.5;-webkit-transition:opacity .2s;transition:opacity .3s} .ayads-video-buttons:hover{opacity:.9 !important}\n'+'#ayads-video-controls{background-image:url(data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiBpZD0ic3ZnMiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMnB4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4Ij48ZyBpZD0iYmFja2dyb3VuZCI+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIzMiIgd2lkdGg9IjMyIiAvPjwvZz48ZyBpZD0icGF1c2UiPjxnPjxyZWN0IGhlaWdodD0iMjQiIHdpZHRoPSI4IiB4PSIyMCIgeT0iNCIgZmlsbD0iI0ZGRiIvPjxyZWN0IGhlaWdodD0iMjQiIHdpZHRoPSI4IiB4PSI0IiB5PSI0IiBmaWxsPSIjRkZGIiAvPjwvZz48L2c+PC9zdmc+)}'+'#ayads-video-controls.paused{background-image:url(\'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE2cHgiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMTZweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGUvPjxkZWZzLz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJJY29ucyB3aXRoIG51bWJlcnMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIj48ZyBmaWxsPSIjRkZGIiBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01MjguMDAwMDAwLCAtMTQ0LjAwMDAwMCkiPjxwYXRoIGQ9Ik01NDMsMTUyIEw1MzEsMTU4IEw1MzEsMTQ2IEw1NDMsMTUyIEw1NDMsMTUyIFogTTU0MywxNTIiIGlkPSJTaGFwZSIvPjwvZz48L2c+PC9zdmc+\');}');var srctype=!!ayads_ad.data.video.toString().match(':');video.id='ayads-video';video.src=ads_url+(srctype?'gateway.php?video='+encodeURIComponent(ayads_ad.data.video):'delivery/video-'+(ayads_ad.data.video==1?ayads_ad.aid:ayads_ad.data.video)+'.mp4');video.autoplay=true;video.preload=true;video.loop=true;video.muted=true;container.style.height=Math.round(ayads_ad.data.top*p.scale)+'px';container.style.marginTop='-'+container.style.height;container.addEventListener('mouseover',function(){video.volume=.6;video.muted=false;ayads.metrics=ayads.metrics||{};if(!ayads.metrics.hover) {clearTimeout(ayads.metrics.hover_timeout);ayads.metrics.hover_timeout=setTimeout(function(){ayads.metrics.hover=1;new Image().src=url+'impression.php?zid='+ayads_zone.zid+'&aid='+ayads_ad.aid+'&metric=hover';},2000);}});container.addEventListener('mouseout',function(){video.muted=true;clearTimeout(ayads.metrics.hover_timeout);});var hovertimeout=false,mouseover=function(){video.volume=.1;video.muted=false;clearTimeout(hovertimeout);hovertimeout=setTimeout(function(){canplay_hover=true;play(true);},0);},mouseout=function(){clearTimeout(hovertimeout);video.muted=true;canplay_hover=false;play(true);};layer.addEventListener('mouseover',mouseover);layer.addEventListener('mouseout',mouseout);videobg.addEventListener('mouseover',mouseover);videobg.addEventListener('mouseout',mouseout);w.videobg=videobg;w.layer=layer;layer.onclick=function(){d.body.parentNode.onclick();};videobg.onclick=function(){d.body.parentNode.onclick();};video.addEventListener('loadedmetadata',function(){container.style.marginLeft=-Math.floor(video.offsetWidth/2)+'px';container.style.opacity=1;});video.onclick=function(){d.body.parentNode.onclick();};video.addEventListener('canplaythrough',function(){var sync=function(){var diff=Math.abs(videobg.currentTime-video.currentTime);if(diff>.08) {videobg.currentTime=video.currentTime;if(!video.paused)videobg.play();} ayads.metrics=ayads.metrics||{};ayads.metrics.quartile=ayads.metrics.quartile||0;var quartile=Math.floor(Math.min(1,video.currentTime/video.duration)*4);if(quartile<ayads.metrics.quartile&&ayads.metrics.quartile===3) quartile=4;if(quartile>ayads.metrics.quartile) {ayads.metrics.quartile=quartile;new Image().src=url+'impression.php?zid='+ayads_zone.zid+'&aid='+ayads_ad.aid+'&metric=quartile'+quartile+'&currenttime='+video.currentTime+'&duration='+video.duration;}};play(true);if(!ayads.played) {ayads.played=1;setInterval(sync,2000);} sync();});videobg.id='ayads-video-bg';videobg.src=ads_url+(srctype?'gateway.php?video='+encodeURIComponent(ayads_ad.data.video)+'&bg':'delivery/video-bg-'+(ayads_ad.data.video==1?ayads_ad.aid:ayads_ad.data.video)+'.mp4');videobg.preload=true;videobg.loop=true;videobg.muted=true;layer.id='ayads-video-layer';layer.style.marginTop=container.style.marginTop;container.id='ayads-video-container';controls.id='ayads-video-controls';controls.className='ayads-video-buttons';controls.addEventListener('click',function(){canplay=video.paused;play(video.paused);});w.addEventListener('blur',function(e){play(false)});w.addEventListener('focus',function(e){play(true)});var scrolltimeout=false;w.addEventListener('scroll',function(e){if(w.onscroll)w.onscroll(e);if(!arguments.callee.threshold) arguments.callee.threshold=(d.getElementsByTagName('html')[0].offsetTop+video.offsetHeight);var p=w.pageYOffset<arguments.callee.threshold;if(video.paused==p||p&&scrolltimeout) {if(p) {play(canplay_scroll=p);if(scrolltimeout) {clearTimeout(scrolltimeout);scrolltimeout=false;}} else if(!scrolltimeout) {scrolltimeout=setTimeout(function(){canplay_scroll=false;play(true);},20000);}}});d.body.addEventListener('keypress',function(e){if(e.srcElement===d.body&&e.keyCode===32) {e.preventDefault();canplay=video.paused;play(video.paused);}});container.appendChild(controls);container.appendChild(video);d.body.insertBefore(container,d.body.firstChild);d.body.insertBefore(layer,d.body.firstChild);d.body.insertBefore(videobg,d.body.firstChild);},improve_display_ad=function() {window.improve_callback=function() {var div=document.getElementById('ayads-improve'),a=null,img=null,iframes;if(div.childNodes.length===0) div.insertBefore(div.nextSibling,div.firstChild);top.div=div;a=div.getElementsByTagName('a')[0];if(a) img=a.getElementsByTagName('img')[0];if(iframes=div.getElementsByTagName('iframe')) {for(var i=0,ii=iframes.length;i<ii;++i) {if(iframes[i].width>500) {var u=encodeURIComponent(iframes[i].src),t='';if(u.indexOf('doubleclick')!==-1) t=encodeURIComponent(div.innerHTML.match(/pixel\?d\=(.*?)&/)[1]);a={href:url+'gateway.php?a&iframeparser='+u+'&t='+t};img={src:url+'gateway.php?img&iframeparser='+u+'&t='+t};break;}}} if(window.console&&console.log) {console.log(a);console.log(img);} [['http://ad.turn.com/r/cs?pid=15',0],['http://cm.g.doubleclick.net/pixel?google_nid=improvedigital&google_cm&google_sc',0],['http://pixel.mathtag.com/sync/js?sync=auto',1]].forEach(function(u){if(u[1]) {var e=document.createElement('script');e.type='text/javascript';e.async=true;} else {var e=document.createElement('img');e.style.display='none';} e.src=u[0];div.appendChild(e);});if(window.ayads_video) {ayads_ad.data.video=ayads_video.video;ayads_ad.data.image=ayads_video.layer;ayads_ad.data.url=ayads_video.click_url;ayads_video.click_callback&&(ayads_ad.data.click_callback=ayads_video.click_callback);ayads_display_ad();} else if(window.ayads_data) {ayads_data.improve_id=ayads_ad.data.improve_id;ayads_ad.data=ayads_data;delete ayads_data;if(ayads_ad.data.shop) shop_display_ad();else ayads_display_ad();} else if(a&&img&&a.href&&img.src&&a.href.length>15) {if(a.href.indexOf('j')===0) {new Image().src=ayads.clickurlize();ayads_ad.click_callback=function(){eval(a.href.replace('javascript:',''))};} else ayads_ad.data.url=a.href;ayads_ad.data.image=img.src;ayads_ad.data.top=220;ayads_ad.data.color=false;if(a.onclick) ayads_ad.click_callback=a.onclick;if(window.ayads_shop) ayads_ad.data.shop=ayads_shop;ayads_display_ad();} else {ayads_zone.noads.push(ayads_ad.aid);ayads.setItem('noads-'+ayads_ad.aid,1,1036800);ayads_select_ad();}};var improve_url='http://ad.360yield.com/adj?p='+ayads_ad.data.improve_id+'&w=1800&h=1000&tz='+(new Date().getTimezoneOffset())+'&click3rd=';document.write('<div id="ayads-improve" style="display:none"><script type="text/javascript" src="'+improve_url+'"><\/script></div><script type="text/javascript">improve_callback();</script>');},ayads_display_targeted_ad=function() {var segments,ttl=86400*7;window.ayads_callback=function(r){ayads.setItem('segments',JSON.stringify(r),ttl);if(r.indexOf(ayads_ad.data.sgid)!==-1) ayads_display_ad();else {ayads_zone.noads.push(ayads_ad.aid);ayads.setItem('noads-'+ayads_ad.aid,1,ttl);ayads_select_ad();} delete ayads_callback;};if((segments=ayads.getItem('segments'))!==null) ayads_callback(eval('('+segments+')'));else document.write('<script type="text/javascript" src="'+url+'gateway.php?segments"></script>');},ayads_select_ad=function() {var ads=[{"aid":2487,"zid":2062,"weight":10,"priority":1,"format":1,"chid":0,"data":{"improve_id":543673,"top":220,"color":"#FFF"}}];var ads_count=ads.length;var i;var ii;var r;var weight_total=0;var weight_sum=0;var max_priority=0;if(!window.ayads_zone) {window.ayads_zone={"zid":2062,"sid":1681,"format":1,"data":{"html":"\u003Cstyle\u003E.fs-con{background:#FFF;}\r\n.fs-wrap{width:1100px;}\r\n#fs-tertiary:first-child{width:357px;}\r\n@media screen and (min-width: 1600px)\r\n.fs-wrap {\r\nwidth: 1000px;\r\n}\u003C/style\u003E","scale":1.1}};if(window!==w)w.ayads_zone=ayads_zone;if(!ayads_zone.zid)ayads_zone.zid=0;if(!ayads_zone.noads)ayads_zone.noads=[];} if(window.ayads_ads) {for(i=0;i<ayads_ads.length;++i) {ayads_ads[i].priority+=10;} ads=ads.concat(ayads_ads);ads_count=ads.length;} if(d.location.hash.indexOf('ayads-')===1||sessionStorage.getItem('ayads')) {var h=d.location.hash.substr(7)||sessionStorage.getItem('ayads');if(h.indexOf('aid=')===0) {var aid=parseInt(h.match(/aid=([0-9]+)/)[1]);ad=eval('('+ayads.get('ajs.php?aid='+aid+'&from_zone='+ayads_zone.zid)+')');if(!ad.data)return false;ad.data.capping_impressions=0;ad.data.capping_clicks=0;ad.data.capping_duration=0;ad.data.geo=null;ad.data.hours=null;ad.data.sgid=null;ayads_zone.data.capping_impressions=0;ads=[ad];ads_count=1;ayads_zone.data=ad.zone;if(ad.js)eval(ad.js);} else {var js=ayads.get('ajs.php?aid=0&from_zone='+ayads_zone.zid);if(js)ayads_zone.data=eval('('+js+')').zone;ayads_zone.data.capping_impressions=0;ads=[{aid:14,format:1,weight:50,priority:1,data:{color:'#FFF',image:ads_url+'img/ayads-test.jpg',top:220}}];ads_count=1;if(h==='skinzlab') ads[0].data.image='http://sublimeskinz.com/v1/?skinzlab&image='+Date.now();}} var hour=new Date().getHours();for(i=0;i<ads_count;++i) {var ad=ads[i];ads[i].enabled=true;if(!ad.aid)ads[i].aid=0;if(!ad.weight)ads[i].weight=1;if(!ad.priority)ads[i].priority=1;if(ayads.getItem('noads-'+ad.aid)&&!w.location.hash||(ayads_zone.noads.indexOf&&ayads_zone.noads.indexOf(ads[i].aid)!==-1)) ads[i].enabled=false;if(ad.data.video) {var v=document.createElement('video');if(!v.canPlayType||!v.canPlayType('audio/mp4')) ads[i].enabled=false;} if(ad.data.capping_duration&&(parseInt(ayads.getItem('capping-clicks-a'+ad.aid))>=ad.data.capping_clicks||parseInt(ayads.getItem('capping-impressions-a'+ad.aid))>=ad.data.capping_impressions)) {ads[i].enabled=false;ads[i].disabled=true;} if(ad.data.hours&&ad.data.hours.indexOf(hour)===-1) ads[i].enabled=false;if(ad.data.geo) {var geo,matched=false;if(!(geo=ayads.getItem('geo'))) ayads.setItem('geo',geo=ayads.get('gateway.php?geo'),7776000);geo=geo?eval('('+geo+')'):[0];ad.data.geo=ad.data.geo.split(',');for(var j=0;j<ad.data.geo.length;++j) {var ad_geo=ad.data.geo[j].split(':');if(geo[0]===ad_geo[0].toLowerCase()) {if(ad_geo.length===1) matched=true;else {for(var k=1;k<geo.length;++k) {if(ad_geo[1].toLowerCase().replace(/ /,'-')==(geo[k]&&geo[k].toLowerCase().replace(/ /,'-'))) {matched=true;}}}}} if(!matched) ads[i].enabled=false;}} for(i=0;i<ads_count;++i) if(ads[i].enabled&&ads[i].priority>max_priority) max_priority=ads[i].priority;for(i=0;i<ads_count;++i) if(ads[i].enabled) ads[i].enabled=ads[i].priority==max_priority;for(i=0;i<ads_count;++i) if(ads[i].enabled) weight_total+=ads[i].weight;if(ayads_zone.data.capping_impressions&&typeof(aid)==='undefined') {var capping=ayads.getItem('capping-impressions-z'+ayads_zone.zid);if(capping>=ayads_zone.data.capping_impressions) {ads=[];ads_count=0;}} r=Math.random()*weight_total;if((!ie||ie>9)&&w.matchMedia('(min-width:1100px)').matches) for(i=0;i<ads_count;++i) {var ad=ads[i];if(ads[i].enabled&&!ads[i].disabled) {weight_sum+=ad.weight;if(r<weight_sum) {if(!ad.format&&ad.format!==0)ad.format=1;window.ayads_ad=ad;if(window!==w)w.ayads_ad=ayads_ad;if(ad.data.criteo_id) criteo_display_ad();else if(ad.data.improve_id) improve_display_ad();else if(ad.data.shop) shop_display_ad();else if(ad.data.sgid) ayads_display_targeted_ad();else ayads_display_ad();setTimeout(function(){new Image().src='http://coray.ayads.co/analytics/tracker.php?sid='+ayads_zone.sid;},3000);return false;}}} if(ayads_zone.data.passback) document.write(ayads_zone.data.passback);};ayads_select_ad();})();

// time=0.04795503616333 length=19334