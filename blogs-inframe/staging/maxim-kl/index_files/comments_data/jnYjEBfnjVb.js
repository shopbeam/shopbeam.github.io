/*!CK:503979551!*//*1379296516,173217857*/

if (self.CavalryLogger) { CavalryLogger.start_js(["GPb4J"]); }

__d("legacy:connect-xd",["XD"],function(a,b,c,d){a.UnverifiedXD=b('XD').UnverifiedXD;a.XD=b('XD').XD;},3);
__d("TimeSpentArray",["Banzai","pageID"],function(a,b,c,d,e,f){var g=b('Banzai'),h=b('pageID'),i=2,j=i*32,k,l,m,n,o,p,q,r,s,t={},u;function v(){return {timeoutDelayMap:t,nextDelay:u,timeoutInSeconds:m};}function w(){if(k){var ea=Date.now();if(ea>o)q=Math.min(j,Math.ceil((ea/1000)-n));var fa=ba();if(fa)k(fa,u);}aa();}function x(){y();l=setTimeout(w,m*1000,false);}function y(){if(l){clearTimeout(l);l=null;}}function z(ea){n=ea;o=n*1000;p=[1];for(var fa=1;fa<i;fa++)p.push(0);q=1;r+=1;s+=1;var ga=s.toString()+'_delay';u=t[ga];if(typeof u=='undefined')u=t.delay;var ha=s.toString()+'_timeout',ia=t[ha];if(typeof ia=='undefined')ia=t.timeout;ia=Math.min(ia,j);m=ia||j;x();}function aa(){y();p=null;}function ba(){if(!p)return null;return {tos_id:h,start_time:n,tos_array:p.slice(0),tos_len:q,tos_seq:s,tos_cum:r};}function ca(ea){if(ea>=o&&(ea-o)<1000)return;da(Math.floor(ea/1000));}function da(ea){var fa=ea-n;if(fa<0||fa>=j)w();if(!p){z(ea);}else{p[fa>>5]|=(1<<(fa&31));q=fa+1;r+=1;o=ea*1000;}}e.exports={init:function(ea,fa){r=0;s=-1;k=ea;if(typeof fa=='object'&&fa!==null){t=fa;}else t={};z(Math.floor(Date.now()/1000));g.subscribe(g.SHUTDOWN,w);},update:function(ea){ca(ea);},get:function(){return ba();},ship:function(){w();},reset:function(){aa();},testState:function(){return v();}};});
__d("legacy:onload-action",["OnloadHooks"],function(a,b,c,d){var e=b('OnloadHooks');a._onloadHook=e._onloadHook;a._onafterloadHook=e._onafterloadHook;a.runHook=e.runHook;a.runHooks=e.runHooks;a.keep_window_set_as_loaded=e.keepWindowSetAsLoaded;},3);
__d("Base64",[],function(a,b,c,d,e,f){var g='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';function h(l){l=(l.charCodeAt(0)<<16)|(l.charCodeAt(1)<<8)|l.charCodeAt(2);return String.fromCharCode(g.charCodeAt(l>>>18),g.charCodeAt((l>>>12)&63),g.charCodeAt((l>>>6)&63),g.charCodeAt(l&63));}var i='>___?456789:;<=_______'+'\0\1\2\3\4\5\6\7\b\t\n\13\f\r\16\17\20\21\22\23\24\25\26\27\30\31'+'______\32\33\34\35\36\37 !"#$%&\'()*+,-./0123';function j(l){l=(i.charCodeAt(l.charCodeAt(0)-43)<<18)|(i.charCodeAt(l.charCodeAt(1)-43)<<12)|(i.charCodeAt(l.charCodeAt(2)-43)<<6)|i.charCodeAt(l.charCodeAt(3)-43);return String.fromCharCode(l>>>16,(l>>>8)&255,l&255);}var k={encode:function(l){l=unescape(encodeURI(l));var m=(l.length+2)%3;l=(l+'\0\0'.slice(m)).replace(/[\s\S]{3}/g,h);return l.slice(0,l.length+m-2)+'=='.slice(m);},decode:function(l){l=l.replace(/[^A-Za-z0-9+\/]/g,'');var m=(l.length+3)&3;l=(l+'AAA'.slice(m)).replace(/..../g,j);l=l.slice(0,l.length+m-3);try{return decodeURIComponent(escape(l));}catch(n){throw new Error('Not valid UTF-8');}},encodeObject:function(l){return k.encode(JSON.stringify(l));},decodeObject:function(l){return JSON.parse(k.decode(l));},encodeNums:function(l){return String.fromCharCode.apply(String,l.map(function(m){return g.charCodeAt((m|-(m>63))&-(m>0)&63);}));}};e.exports=k;});
__d("ClickRefUtils",[],function(a,b,c,d,e,f){var g={get_intern_ref:function(h){if(!!h){var i={profile_minifeed:1,gb_content_and_toolbar:1,gb_muffin_area:1,ego:1,bookmarks_menu:1,jewelBoxNotif:1,jewelNotif:1,BeeperBox:1,navSearch:1};for(var j=h;j&&j!=document.body;j=j.parentNode){if(!j.id||typeof j.id!=='string')continue;if(j.id.substr(0,8)=='pagelet_')return j.id.substr(8);if(j.id.substr(0,8)=='box_app_')return j.id;if(i[j.id])return j.id;}}return '-';},get_href:function(h){var i=(h.getAttribute&&(h.getAttribute('ajaxify')||h.getAttribute('data-endpoint'))||h.action||h.href||h.name);return typeof i==='string'?i:null;},should_report:function(h,i){if(i=='FORCE')return true;if(i=='INDIRECT')return false;return h&&(g.get_href(h)||(h.getAttribute&&h.getAttribute('data-ft')));}};e.exports=g;});
__d("setUECookie",["Env"],function(a,b,c,d,e,f){var g=b('Env');function h(i){if(!g.no_cookies)document.cookie="act="+encodeURIComponent(i)+"; path=/; domain="+window.location.hostname.replace(/^.*(\.facebook\..*)$/i,'$1');}e.exports=h;});
__d("ClickRefLogger",["Arbiter","EagleEye","ClickRefUtils","collectDataAttributes","copyProperties","ge","setUECookie","$"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('EagleEye'),i=b('ClickRefUtils'),j=b('collectDataAttributes'),k=b('copyProperties'),l=b('ge'),m=b('setUECookie'),n=b('$');function o(q){if(!l('content'))return [0,0,0,0];var r=n('content'),s=a.Vector2?a.Vector2.getEventPosition(q):{x:0,y:0};return [s.x,s.y,r.offsetLeft,r.clientWidth];}function p(q,r,event,s){var t='r',u=[0,0,0,0],v,w;if(!!event){v=event.type;if(v=='click'&&l('content'))u=o(event);var x=0;event.ctrlKey&&(x+=1);event.shiftKey&&(x+=2);event.altKey&&(x+=4);event.metaKey&&(x+=8);if(x)v+=x;}if(!!r)w=i.get_href(r);var y=j(!!event?(event.target||event.srcElement):r,['ft','gt']);k(y.ft,s.ft||{});k(y.gt,s.gt||{});if(typeof(y.ft.ei)==='string')delete y.ft.ei;var z=[q._ue_ts,q._ue_count,w||'-',q._context,v||'-',i.get_intern_ref(r),t,a.URI?a.URI.getRequestURI(true,true).getUnqualifiedURI().toString():location.pathname+location.search+location.hash,y].concat(u);return z;}g.subscribe("ClickRefAction/new",function(q,r){if(i.should_report(r.node,r.mode)){var s=p(r.cfa,r.node,r.event,r.extra_data);m(r.cfa.ue);h.log('act',s);}});});
__d("QuicklingAugmenter",["URI"],function(a,b,c,d,e,f){var g=b('URI'),h=[],i={addHandler:function(j){h.push(j);},augmentURI:function(j){var k=[],l=g(j);h.forEach(function(m){var n=m(l);if(!n)return l;k.push(m);l=l.addQueryData(n);});h=k;return l;}};e.exports=i;});
__d("Quickling",["AjaxPipeRequest","Arbiter","CSSClassTransition","DocumentTitle","DOM","ErrorUtils","HTML","OnloadHooks","PageTransitions","QuicklingAugmenter","QuicklingConfig","Run","URI","UserAgent","goOrReplace","isEmpty"],function(a,b,c,d,e,f){var g=b('AjaxPipeRequest'),h=b('Arbiter'),i=b('CSSClassTransition'),j=b('DocumentTitle'),k=b('DOM'),l=b('ErrorUtils'),m=b('HTML'),n=b('OnloadHooks'),o=b('PageTransitions'),p=b('QuicklingAugmenter'),q=b('QuicklingConfig'),r=b('Run'),s=b('URI'),t=b('UserAgent'),u=b('goOrReplace'),v=b('isEmpty'),w=q.version,x=q.sessionLength,y=new RegExp(q.inactivePageRegex),z=0,aa,ba='',ca={isActive:function(){return true;},isPageActive:function(la){if(la=='#')return false;la=new s(la);if(la.getDomain()&&la.getDomain()!=s().getDomain())return false;if(la.getPath()=='/l.php'){var ma=la.getQueryData().u;if(ma){ma=s(unescape(ma)).getDomain();if(ma&&ma!=s().getDomain())return false;}}var na=la.getPath(),oa=la.getQueryData();if(!v(oa))na+='?'+s.implodeQuery(oa);return !y.test(na);},getLoadCount:function(){return z;}};function da(la){la=la||'Facebook';j.set(la);if(t.ie()){ba=la;if(!aa)aa=window.setInterval(function(){var ma=ba,na=j.get();if(ma!=na)j.set(ma);},5000,false);}}function ea(la){var ma=document.getElementsByTagName('link');for(var na=0;na<ma.length;++na){if(ma[na].rel!='alternate')continue;k.remove(ma[na]);}if(la.length){var oa=k.find(document,'head');oa&&k.appendContent(oa,m(la[0]));}}for(var fa in g)if(g.hasOwnProperty(fa))ha[fa]=g[fa];var ga=g===null?null:g.prototype;ha.prototype=Object.create(ga);ha.prototype.constructor=ha;ha.__superConstructor__=g;function ha(la){var ma={version:w};g.call(this,la,{quickling:ma});}ha.prototype._preBootloadFirstResponse=function(la){return true;};ha.prototype._fireDomContentCallback=function(){this._request.cavalry&&this._request.cavalry.setTimeStamp('t_domcontent');o.transitionComplete();this._onPageDisplayed&&this._onPageDisplayed(this.pipe);ga._fireDomContentCallback.call(this);};ha.prototype._fireOnloadCallback=function(){if(this._request.cavalry){this._request.cavalry.setTimeStamp('t_hooks');this._request.cavalry.setTimeStamp('t_layout');this._request.cavalry.setTimeStamp('t_onload');}ga._fireOnloadCallback.call(this);};ha.prototype.isPageActive=function(la){return ca.isPageActive(la);};ha.prototype._versionCheck=function(la){if(la.version==w)return true;var ma=['quickling','ajaxpipe','ajaxpipe_token'];u(window.location,s(la.uri).removeQueryData(ma),true);return false;};ha.prototype._processFirstResponse=function(la){var ma=la.getPayload();da(ma.title);ea(ma.syndication||[]);window.scrollTo(0,0);i.go(document.body,ma.body_class||'',o.getMostRecentURI(),la.getRequest().getURI());h.inform('quickling/response');};ha.prototype.getSanitizedParameters=function(){return ['quickling'];};function ia(){z++;return z>=x;}function ja(la){g.setCurrentRequest(null);if(ia())return false;la=p.augmentURI(la);if(!ca.isPageActive(la))return false;window.ExitTime=Date.now();r.__removeHook('onafterloadhooks');r.__removeHook('onloadhooks');n.runHooks('onleavehooks');h.inform('onload/exit',true);new ha(la).setCanvasId('content').send();return true;}function ka(la){var ma=window[la];function na(oa,pa,qa){if(typeof oa!=='function')oa=eval.bind(null,oa);var ra=ma(l.guard(oa,la+' (with Quickling)'),pa);if(pa>0)if(qa!==false)r.onLeave(function(){clearInterval(ra);});return ra;}window[la]=na;}r.onAfterLoad(function la(){ka('setInterval');ka('setTimeout');o.registerHandler(ja,1);});e.exports=a.Quickling=ca;});
__d("StringTransformations",[],function(a,b,c,d,e,f){e.exports={unicodeEscape:function(g){return g.replace(/[^A-Za-z0-9\-\.\:\_\$\/\+\=]/g,function(h){var i=h.charCodeAt().toString(16);return '\\u'+('0000'+i.toUpperCase()).slice(-4);});},unicodeUnescape:function(g){return g.replace(/(\\u[0-9A-Fa-f]{4})/g,function(h){return String.fromCharCode(parseInt(h.slice(2),16));});}};});
__d("UserActionHistory",["Arbiter","ClickRefUtils","ScriptPath","throttle","WebStorage"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('ClickRefUtils'),i=b('ScriptPath'),j=b('throttle'),k=b('WebStorage'),l={click:1,submit:1},m=false,n={log:[],len:0},o=j.acrossTransitions(function(){try{m._ua_log=JSON.stringify(n);}catch(r){m=false;}},1000);function p(){var r=k.getSessionStorage();if(r){m=r;m._ua_log&&(n=JSON.parse(m._ua_log));}else m=false;n.log[n.len%10]={ts:Date.now(),path:'-',index:n.len,type:'init',iref:'-'};n.len++;g.subscribe("UserAction/new",function(s,t){var u=t.ua,v=t.node,event=t.event;if(!event||!(event.type in l))return;var w={path:i.getScriptPath(),type:event.type,ts:u._ue_ts,iref:h.get_intern_ref(v)||'-',index:n.len};n.log[n.len++%10]=w;m&&o();});}function q(){return n.log.sort(function(r,s){return (s.ts!=r.ts)?(s.ts-r.ts):(s.index-r.index);});}p();e.exports={getHistory:q};});
__d("WebStorageMonster",["Event","AsyncRequest","UserActivity","StringTransformations","WebStorage","arrayContains","isEmpty","setTimeoutAcrossTransitions"],function(a,b,c,d,e,f){var g=b('Event'),h=b('AsyncRequest'),i=b('UserActivity'),j=b('StringTransformations'),k=b('WebStorage'),l=b('arrayContains'),m=b('isEmpty'),n=b('setTimeoutAcrossTransitions'),o=300000,p=false;function q(v){var w={};for(var x in v){var y=v.getItem(x),z=j.unicodeEscape(x);if(typeof y==='string')w[z]=y.length;}return w;}function r(v){var w=k.getLocalStorage();if(!w||!v.keys)return;u._getLocalStorageKeys().forEach(function(x){if(l(v.keys,x))w.removeItem(x);});}function s(v){var w=k.getLocalStorage();if(w)u._getLocalStorageKeys().forEach(function(y){if(!v.some(function(z){return new RegExp(z).test(y);}))w.removeItem(y);});var x=k.getSessionStorage();if(x)x.clear();}function t(v){if(i.isActive(o)){n(t.curry(v),o);}else u.cleanNow(v);}var u={registerLogoutForm:function(v,w){g.listen(v,'submit',function(x){u.cleanOnLogout(w);});},schedule:function(v){if(p)return;p=true;t(v);},cleanNow:function(v){var w=Date.now(),x={},y=k.getLocalStorage();if(y)x.localStorage=q(y);var z=k.getSessionStorage();if(z)x.sessionStorage=q(z);var aa=!m(x),ba=Date.now();x.logtime=ba-w;if(aa)new h('/ajax/webstorage/process_keys.php').setData(x).setHandler(function(ca){if(!v){var da=ca.getPayload();if(da.keys)da.keys=da.keys.map(j.unicodeUnescape);r(da);}}.bind(this)).send();},cleanOnLogout:function(v){if(v)s(v);var w=k.getSessionStorage();if(w)w.clear();},_getLocalStorageKeys:function(){var v=k.getLocalStorage();return v?Object.keys(v):[];}};e.exports=u;});