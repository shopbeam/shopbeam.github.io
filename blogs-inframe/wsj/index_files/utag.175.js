//tealium universal tag - utag.175 ut4.0.201509141910, Copyright 2015 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
if(utag.ut.loader===undefined){u.loader=function(o){var b,c,l,a=document;if(o.type==="iframe"){b=a.createElement("iframe");o.attrs=o.attrs||{"height":"1","width":"1","style":"display:none"};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";for(l in utag.loader.GV(o.attrs)){b[l]=o.attrs[l];}b.src=o.src;}if(o.id){b.id=o.id};if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}else{u.loader=utag.ut.loader;}
u.ev={"view":1,"link":1};u.initialized=false;u.scriptrequested=false;u.queue=[];u.map={"qc_fc_event":"_fp.event","qc_fp_account":"qacct"};u.extend=[function(a,b){try{if(b['dom.domain'].toString().indexOf('wsj.com')>-1){b['qc_fc_event']='Generic WSJ Page';b['qc_fp_account']='p-R0dwA_32anqn8'}}catch(e){utag.DB(e)}},function(a,b){try{if(b['dom.domain'].toString().indexOf('barrons.com')>-1){b['qc_fc_event']='Generic Barrons Page';b['qc_fp_account']='p-nPDJ-A115hdYh'}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,g,i;u.data={"base_url":(document.location.protocol=="https:"?"https://secure":"http://edge")+".quantserve.com/quant.js","qacct":"p-R0dwA_32anqn8","orderid":"","revenue":"","order_id":"","order_subtotal":""};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};window._qevents=[];c=[];g={};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(u.data[e[f]]!==undefined){u.data[e[f]]=b[d];}else if(e[f].indexOf("_fp.")===0){c.push(e[f]+"."+b[d]);}else{c.push(b[d]);}}}}
u.data.order_id=u.data.orderid||u.data.order_id||b._corder||"";u.data.order_subtotal=u.data.revenue||u.data.order_subtotal||b._csubtotal||"";u.loader_cb=function(a,b,c){u.initialized=true;g.qacct=u.data.qacct;if(c.length>0){u.data.labels=c.join(",");g.labels=c.join(",");}
if(u.data.order_id){g.orderid=u.data.order_id;}
if(u.data.order_subtotal){g.revenue=u.data.order_subtotal;}
_qevents.push(g);};u.callBack=function(){var data={};while(data=u.queue.shift()){u.data=data.data;u.loader_cb(data.a,data.b,data.c);}};if(u.initialized){u.loader_cb(a,b,c);}else{u.queue.push({"data":u.data,"a":a,"b":b,"c":c});if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":u.callBack,"loc":"script","id":"utag_175"});}}
}};utag.o[loader].loader.LOAD(id);}("175","wsjdn.wsjarticles"));}catch(error){utag.DB(error);}
