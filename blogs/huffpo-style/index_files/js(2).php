/* From: production-mt-wfe-56-191-use1 : 30989 */
(function(a,k){a.huff=({init:function(){this.jquery=k?jQuery:jQuery.noConflict();this.jquery.ajaxSetup({cache:true});this.events={};this.versions=undefined;this.styles={};this.units={};this.unit("dom/ready",this.jquery);this.unit("jquery",this.jquery,true);var c=this;window.onerror=function(l,i,e){c.error(l?new Error(l,i,e):window.error)};this.beta=(location.host.toLowerCase().indexOf("beta")>0||location.host.toLowerCase().indexOf("amazon")>0);this.blogger=location.host.toLowerCase().indexOf("blogger")===0;this.editorial=location.host.toLowerCase().indexOf("editorial")===0;this.nonminified=location.search.indexOf("no-min=")>0?"no-min=1&":"";this.host=this.beta||this.editorial||this.blogger?location.host:"s.huffpost.com";this.path={js:location.protocol+"//"+this.host+"/assets/js.php?"+this.nonminified+"f=",css:location.protocol+"//"+this.host+"/assets/css.php?"+this.nonminified+"f="};this.env={async:document.createElement("script").async===true};(this.env.webkit=/AppleWebKit\//.test(navigator.userAgent))||(this.env.ie=/MSIE/.test(navigator.userAgent))||(this.env.opera=/Opera/.test(navigator.userAgent))||(this.env.gecko=/Gecko\//.test(navigator.userAgent))||(this.env.unknown=true);this.console=true;this.waiting={};return this},run:function(c){try{"function"===typeof c&&c.call(this)}catch(i){this.error(i)}},ready:function(e){this.run(function(){this.jquery(e)})},log:function(){this.pass("log",arguments)},debug:function(){this.pass("debug",arguments)},error:function(c){this.pass("error",arguments)},unit:function(c,m,l){var i=this,n=function(e){i.units[c]=e;i.fire("load/"+c+".js");i.emit("unit",c,e)};try{i.units[c]=false;if("function"===typeof m){l?n(m):new m(n)}else{l||"function"!==typeof m.init?n(m):m.init(n)}}catch(o){i.error(o);n()}},use:function(){var l=this,c=[],e=Array.prototype.slice.call(arguments,0),o="function"===typeof e[e.length-1]?e.pop():null,m=e.length,n=[],i=function(p,q){c[p]=q;if(--m===0){try{"function"===typeof o&&o.apply(l,c)}catch(s){l.error(s)}}};setTimeout(function(){for(var p=0;p<e.length;p++){(function(q,r){if(q in l.units){if(false===l.units[q]){l.waiting[q]=true;l.on("load/"+q+".js",function(){delete l.waiting[q];i(r,l.units[q])})}else{i(r,l.units[q])}}else{n.push("_"+q+".js");l.units[q]=false;l.waiting[q]=true;l.on("load/"+q+".js",function(){delete l.waiting[q];i(r,l.units[q])})}})(e[p],p)}if(n.length){l.vers(n,function(q){l.jquery.getScript(l.path.js+n.join(",")+q)})}},0)},js:function(){var i=this,e=Array.prototype.slice.call(arguments,0),l="function"===typeof e[e.length-1]&&e.pop();i.vers(e,function(c){"object"===typeof e&&(e=e.join(","));i.jquery.getScript(i.path.js+e+c,l)})},css:function(){arguments=Array.prototype.slice.call(arguments,0);var m=this,o=[],p="function"===typeof arguments[arguments.length-1]?arguments.pop():null,n=arguments.length,e=function(){if(--n===0){try{for(var q=0;q<o.length;q++){m.styles[o[q]]=true;m.fire("load/"+o[q]+".css")}"function"===typeof p&&p()}catch(r){m.error(r)}}};for(var l=0;l<arguments.length;l++){var c=arguments[l];switch(m.styles[c]){case true:e();break;case false:m.on("load/"+c+".css",e);break;default:o.push(c);m.styles[c]=false;m.on("load/"+c+".css",e)}}if(o.length===0){return}m.vers(o,".css",function(q){var s,i=0,r=m.path.css+o.join(".css,")+".css"+q;s=m.jquery("<link>").attr({href:r,rel:"stylesheet",charset:"utf-8"});if(m.env.webkit||m.env.gecko){(function(){for(var u=document.styleSheets,t=u.length;--t>=0;){if(u[t].href===r){return e()}}++i<200?setTimeout(arguments.callee,50):e()})()}else{s[0].onload=s[0].onerror=e}s.appendTo("head")})},on:function(c,e){this.events[c]=this.events[c]||(this.events[c]=[]);this.events[c].push(e);return this},off:function(c){delete this.events[c];return this},once:function(e,i){this.events[e]=this.events[e]||(this.events[e]=[]);var c=this.events.length;this.events[e].push(function(){i();this.events[e].splice(c,1);if(this.events[e].length===0){delete this.events[e]}})},emit:function(){arguments=Array.prototype.slice.call(arguments,0);var l=arguments.shift();if(undefined===this.events[l]){return}for(var c=0;c<this.events[l].length;c++){try{this.events[l][c].apply(this,arguments)}catch(m){this.error(m)}}},pass:function(e,c){c=Array.prototype.slice.call(c,0);c.unshift(e);this.emit.apply(this,c)},fire:function(){this.emit.apply(this,arguments);delete this.events[name]},v:function(c){if(undefined===c){this.versions=false;return}if("object"===typeof this.versions){for(var e in c){if(c.hasOwnProperty(e)){this.versions[e]=c[e]}}}else{this.versions=c;this.fire("load/deploy_config.json")}},vers:function(n,m,o){var l=this,e=arguments,c=+new Date();if(l.beta){return(o||m||function(p){return p})("&r"+c)}if(undefined===l.versions){l.versions=false;l.jquery.ajax({url:"/deploy_config.json?"+(l.vv?"v"+l.vv:"r"+c),success:function(p){l.v(p);e.callee.apply(l,e)}})}else{if(l.versions===false){l.on("load/deploy_config.json",function(){e.callee.apply(l,e)})}else{if(undefined===o){o=m,m=undefined}var i="&v="+l.versions.deploy_seq;return"function"===typeof o?o(i):i}}}}).init();if(!k){try{var j=a.console,g=function(){};if(a.console){a.console=undefined;g.prototype=j}var f=a.console=new g;var b=["assert","debug","error","info","log","warn"];for(var d=b.length;d--;){(function(c){a.console[c]=function(){try{a.console=j;a.huff.console&&j&&c in j&&j[c].apply(j,arguments);a.huff.pass(c,arguments);a.console=f}catch(i){}}})(b[d])}}catch(h){a.huff.error(h)}}})(window,window.IS_CHROMEAPP||window.IS_NEWSGLIDE||window.KEEP_$);
var _port=document.location.port;var HPConfig={current_vertical_name:"",current_web_domain:document.location.hostname+((!_port||_port==""||_port==80)?"":":"+_port),current_web_address:"http://"+document.location.hostname+((!_port||_port==""||_port==80)?"":":"+_port),timestamp_for_clearing_js:0,slideshow_mode:0,blog_id:0,comments_update_interval:0,comments_update_for_all_users:false,wide_format:false,enable_fb_widgets:false,page_data:{},entry_design:"",ipad_application:false,entry_design:"",hp_static_domain:"",display_domain:"",load_big_slideshow_from:0,current_vertical_color:"#058B7B",current_vertical_color_light:"#005F4C",site:false,huffsite:"",terms_link:"",privacy_link:"",fb_page_id:"",fb_vertical_name:"",fb_vertical_handle:""};
var JSON;if(!JSON){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());
var jimAuld=window.jimAuld||{};jimAuld.utils=jimAuld.utils||{};jimAuld.utils.cookies={get:function(e){var c,b,a,d;c=document.cookie.indexOf(e+"=");if(c<0){return null}b=document.cookie.indexOf(e+"=")+e.length+1;a=document.cookie.indexOf(";",b);if(a==-1){a=document.cookie.length}d=document.cookie.substring(b,a);d=unescape(d);if(d==""){return null}return d},set:function(j,l,g,n,d,a,f){var e,h,m,c,k,i,b;if(!g||typeof g!="number"||parseInt(g)=="NaN"){e=""}else{h=new Date();g=parseInt(g);if(!(f)){g=g*60*60}h.setTime(h.getTime()+g*1000);m=h.toGMTString();e="; expires="+m}c="; path=";(!n||n=="")?c+="/":c+=n;k="; domain=";(!d||d=="")?k+=window.location.hostname.replace(/www\./,""):k+=d;(a===true)?i="; secure":i="";l=escape(l);b=j+"="+l+e+c+k+i;document.cookie=b},del:function(c,b,a){(!b||!b.length)?b="":b=b;(!a||!a.length)?a="":a=a;jimAuld.utils.cookies.set(c,"",-8760,b,a)},test:function(){jimAuld.utils.cookies.set("cT","acc");var a=jimAuld.utils.cookies.get("cT");if(a=="acc"){jimAuld.utils.cookies.del("cT");testStatus=true}else{testStatus=false}return testStatus}};var HuffCookies=jimAuld.utils.cookies;HuffCookies.getCookiePrefix=function(){var a=location.hostname;if(HPConfig.site){a=HPConfig.huffsite}var b="";b=(""==location.port)?"80":location.port;if((/\.beta\./.test(a))||(/\.beta2\./.test(a))){return"beta"+b+"_"}else{return""}};HuffCookies.getUserName=function(){var a=this.get(this.getCookiePrefix()+"huffpost_user");if(a){a=HPUtil.utf8_decode(a)}return a};HuffCookies.getUserGuid=function(){return this.get(this.getCookiePrefix()+"huffpost_user_guid")};HuffCookies.getLastLogin=function(){return};HuffCookies.getSNPstatus=function(){if(this.getUserName()){return 1}else{return 0}};HuffCookies.getUserInfluence=function(){HPUtil.removeEmptyInfluence();var b=this.get(this.getCookiePrefix()+"huffpost_influence_"+HuffCookies.getUserId());if(!b||b==""){b=HuffCookies.userInfluence;HPUtil.setInfluenceCookie(JSON.stringify(b))}else{b=JSON.parse(b);var a=new Date();a.setDate(a.getDate()-30);a=Date.parse(a.toString());b.bages=HuffCookies.getLevels();if(b.blogged.check_date<a){b.blogged.value=0;b.blogged.check_date=Date.parse(new Date().toString())}if(b.emailed.check_date<a){b.emailed.value=0;b.emailed.check_date=Date.parse(new Date().toString())}if(b.shared.check_date<a){b.shared.value=0;b.shared.check_date=Date.parse(new Date().toString())}if(b.commented.check_date<a){b.commented.value=0;b.commented.check_date=Date.parse(new Date().toString())}}return b};HuffCookies.setCookie=function(d,c,a){var b=this.getCookiePrefix();if(!a){a=336}else{if(a==-1){a=0}}huff.use("conf",function(e){e.get("cookie/domain",function(g){var f=g||HuffCookies.domainCookie();HuffCookies.set(b+d,c,a,"/","."+f)})});return true};HuffCookies.getCookie=function(a){return this.get(HuffCookies.getCookiePrefix()+a)};HuffCookies.domainCookie=function(){var a=location.hostname;a=a.replace(/www\./,"");return a};HuffCookies.getUserId=function(){return this.get(this.getCookiePrefix()+"huffpost_user_id")};HuffCookies.getLevels=function(){return this.get(this.getCookiePrefix()+"huffpost_levels")};HuffCookies.destroyCookie=function(a){var b=this.getCookiePrefix();return this.del(b+a,"/","."+HuffCookies.domainCookie())};HuffCookies.userInfluence={commented:{value:0,check_date:Date.parse(new Date().toString())},blogged:{value:0,check_date:Date.parse(new Date().toString())},shared:{value:0,check_date:Date.parse(new Date().toString())},emailed:{value:0,check_date:Date.parse(new Date().toString())},bages:HuffCookies.getLevels()};HuffCookies.userPrefs={pending:false,subvalues:{facebook:0,twitter:1,read_tracking:2,gfc:3,yahoo:4,google:5,linkedin:6,aol:7,winlive:8},subvalues_abbr:{0:"fb",1:"tw",2:"rt",3:"gfc",4:"yh",5:"gfc",6:"linkedin",7:"aol",8:"winlive"},charmap:{facebook:"F",twitter:"T",read_tracking:"R",gfc:"G",yahoo:"Y",google:"L",registered:"H",anonymous:"A"},cookie_name:"huffpost_prefs",get:function(a){if(!HuffCookies.getUserId()){return false}if(this.pending){return null}var b=this._getFromOffset(this.subvalues[a]);if(b=="y"){return true}else{if(b=="n"){return false}}return null},to_string:function(b){var a="";for(var c in this.subvalues){if(this.get(c+"")){if(b){a+=this.charmap[c+""]}else{if(a){a+=","}a+=c}}}return a},_getFromOffset:function(b){var a=this._getPrefsValues();if(a[b]&&(a[b]=="y"||a[b]=="n")){return a[b]}else{this.pending=true;jQuery.ajax({type:"POST",url:"/users/login/reauthenticate.php",success:function(){huff.log("Reauthenticated");HuffCookies.userPrefs.pending=false},error:function(){huff.log("Error reauthenticating");HuffCookies.userPrefs.pending=false}});return null}},_getPrefsValues:function(){var a=HuffCookies.getCookie(this.cookie_name);this.values=(a&&a.split(""))||[];return this.values}};HuffPrefs=HuffCookies.userPrefs;HuffCookies.getCurrentUserPhotoUrl=function(){var d=HuffCookies.getUserId()||false;if(!d){return false}var c="http://s.huffpost.com/images/profile/user_placeholder.gif";var b=HuffCookies.getCookie("huffpost_photo_mode")||false;switch(b){case"facebook":var e=(window.HPFB&&window.HPFB.authResponse&&window.HPFB.authResponse.userID)?window.HPFB.authResponse.userID:false;if(e){c="http://graph.facebook.com/"+e+"/picture?type=square"}break;case"twitter":case"yahoo":case"google":case"linkedin":case"aol":case"winlive":c="http://"+HPConfig.display_domain+"/"+b+"_profile_img/"+d+".png";break;case"huffpo":c="http://"+HPConfig.display_domain+"/profiles/"+d+".png";break;case"huffpo2":c="http://"+HPConfig.display_domain+"/profiles/"+d+"-2.png";break}if(b=="default"||!b){var a=HuffCookies.getCookie("huffpost_bigphoto")||HuffCookies.getCookie("huffpost_smallphoto")||false;if(a){var c=a}}return c};
var HPTrack={async:false,gaUpgrade:false,gaDomain:"auto",pageTracker:null,prod_account:"UA-71081-1",dev_account:"UA-71081-7",trackedShares:[],trackedVideos:{},custom_vars:{vertical:{scope:3,slot:1,display:"Vertical"},blog:{scope:3,slot:2,display:"Blog"},news:{scope:3,slot:2,display:"News"},page:{scope:3,slot:2,display:"Page"},tpage:{scope:3,slot:2,display:"TPage"},user:{scope:1,slot:3,display:"User"},joined:{scope:1,slot:4,display:"JoinedOn"},special:{scope:1,slot:5,display:"Special"}},Nielsen:function(a){var c=new Image(1,1);c.onerror=c.onload=function(){c.onerror=c.onload=null};var b="ts=compact";if(a&&a=="ajax"){b="c0=usergen,1"}c.src=["//secure-us.imrworldwide.com/cgi-bin/m?ci=us-703240h&cg=0&cc=1&si=",escape(window.location.href),"&rp=",escape(document.referrer),"&",b,"&rnd=",(new Date()).getTime()].join("")},Services:{options:{},setOptions:function(a,b){if(!b){return}HPTrack.Services.options[a]=b},COMMON:["GA","Quantcast","Comscore","DataLayer","Omniture","Nielsen"],trackTo:function(b,c){if(!b){return false}var e={Quantcast:function(i){var h=HPTrack.Services;if(!h.qc_loaded){window._qevents=window._qevents||[];h.qc_loaded=true;(function(){var k=document.createElement("script");k.src=(document.location.protocol=="https:"?"https://secure":"http://edge")+".quantserve.com/quant.js";k.async=true;k.type="text/javascript";var j=document.getElementsByTagName("script")[0];j.parentNode.insertBefore(k,j)})()}var g=h.options.Quantcast||{};if(i.ajax){g.event="refresh"}_qevents.push(g)},Comscore:function(g){if(window.COMSCORE){COMSCORE.beacon(comscore_data);if(g.add_comscore_noop){jQuery.get("/images/comscore_track.html?"+comscore_data.options.url_append)}if(COMSCORE.newBeacon){COMSCORE.newBeacon()}}},Omniture:function(g){window.s_265&&s_265.t()},Nielsen:function(h){var g=h.ajax?"ajax":false;HPTrack.Nielsen(g)},GA:function(g){HPTrack.trackPageview()},DataLayer:function(g){if(window.bN&&window.bN_cfg){g.gallery&&bN.set("dL_sDpt","gallery");bN.view()}}};c=c||{};for(var d=0,a=b.length;d<a;d++){var f=b[d];if(e[f]){e[f](c)}}}},getTracker:function(d){var c=this.dev_account;!huff.beta&&(c=d||this.prod_account);if(this.async){if(this.gaUpgrade==true){__gaTracker("create",c,this.gaDomain);__gaTracker("require","displayfeatures")}else{_gaq.push(["_setAccount",c])}}else{if(typeof _gat!=="undefined"){this.pageTracker=_gat._getTracker(c)}}if(typeof(HuffPrefs)!=="undefined"&&HuffPrefs.to_string){var a="A";if(HuffCookies.getUserId()){var b=HuffPrefs.to_string(true);if(this.gaUpgrade==true){a=HuffCookies.getUserId()}else{a="H"+b}}else{if(this.gaUpgrade==true){__gaTracker("set","&uid",0)}else{this.setCustomVar("joined","0")}}if(this.gaUpgrade==true){__gaTracker("set","&uid",a)}else{this.setCustomVar("user",a)}}if(window.SiteMode){if(this.gaUpgrade==false){this.setCustomVar("special","sitemode")}}},setCustomVar:function(c,b){var a=this.custom_vars[c+""];if(!(a&&b)){return}if(b.length&&b.length>8){b=b.substr(0,8)}if(this.async){_gaq.push(["_setCustomVar",a.slot,a.display,b,a.scope])}else{if(this.pageTracker){this.pageTracker._setCustomVar(a.slot,a.display,b,a.scope)}}},trackPageview:function(b){if(this.async){var c=["_trackPageview"];var a=this.gaUpgrade;b&&c.push(b);_gaq.push(c);huff.use("cookies",function(f){var e=f.get("__utmc")||0;if(e){e=parseInt(e.substr(0,2))}var d=false;if(!b&&window.SiteMode){d="yes"}else{if(!b&&(e==22)){d="no"}}if(a==true){__gaTracker("send","pageview")}else{d&&_gaq.push(["_trackPageview","/t/i/sitemode/"+d])}})}else{!this.pageTracker&&this.getTracker();this.pageTracker._trackPageview(b||undefined)}},trackEvent:function(b,d,a,c){if(this.async){if(this.gaUpgrade==true){__gaTracker("send","event",b,d,a,c,{nonInteraction:1})}else{_gaq.push(["_trackEvent",b,d,a,c])}}else{if(this.pageTracker!=null){this.pageTracker._trackEvent(b,d,a,c)}}try{if(-1===jQuery.inArray(a,Badges.trackedShares)&&("Reddit"===a||"Stumbleupon"===a)){if("Stumbleupon"===a){jQuery.post("/include/social_track.php",{t:"stumble",entry:HPUtil.GetEntryID(window.location.href),banners:HPAds.get_banners_str()})}HPTrack.trackedShares.push(a);bN.set("dL_shareType",a.toLowerCase(),1);bN.set("dL_shareURL",escape(window.location.href),1);bN.ping("aol-share")}}catch(f){}},trackSocial:function(d,a,b,c){if(this.gaUpgrade==true){this.async&&__gaTracker("send","social",d,a,b,{page:c})}else{this.async&&_gaq.push(["_trackSocial",d,a,b,c])}},navigateAfterTrack:function(f,b,a,d){var c=(typeof d=="undefined")?100:d;if(f.ctrlKey){window.open(b,"_blank")}else{if(a){window.open(b,a)}else{setTimeout(function(){document.location=b},c)}}}};HPTrack.Module=function(c,a){var b=HPTrack.Module,d;c=b.Impressions.clean(c);if(d=b.modules[c]){return d}b.modules[c]={huff_tracker:1,impression:function(e){if(e){e="-"+b.Impressions.clean(e)}else{e=""}b.Impressions.queue(c+e);return},click:function(e){return this.event("Click",e)},event:function(f,e){HPTrack.trackEvent(a,f,e);return},trackLink:function(h,f){var g=h.currentTarget;if(!(g&&g.tagName.toLowerCase()=="a")){return}h.preventDefault();this.click(f);HPTrack.navigateAfterTrack(h,g.href,g.target)}};return b.modules[c]};HPTrack.Module.modules={};HPTrack.Module.Impressions={to_track:[],to_track_separate:[],fired:false,MAX_LENGTH:712,PREFIX:"/t/m/",clean:function(a){return a.replace(/[ \-]/g,"_").toLowerCase()},queueSingle:function(a){this.queue(a,true)},queue:function(a,b){if(a.length>this.MAX_LENGTH/3){return}a=this.clean(a);if(b){this.to_track_separate.push(a)}else{this.to_track.push(a)}if(this.fired){this.fire()}},sendRequest:function(a){a=a.substr(0,a.length-1);HPTrack.trackPageview(a)},fire:function(){this.fired=true;var f=this.to_track;var c=this.to_track_separate;var g=this.PREFIX;if(!(f.length||c.length)){return}if(f.length){var b=g;for(var e=0,a=f.length;e<a;e++){var d=b+f[e]+",";if(d.length>this.MAX_LENGTH){this.sendRequest(b);this.to_track=f.slice(e);this.fire();return}else{b=d}}this.sendRequest(b);this.to_track=[]}var a=c.length;if(!a){return}for(var e=0;e<a;e++){this.sendRequest(g+c[e]+",")}this.to_track_separate=[]}};HPTrack.Module.getTrackingPrefix=function(a){var c="";var d=Dom.getAncestorByClassName(a,"module_section");if(d){var b=d.className.match(/track_childs_([^ ]+)/);if(b){c=b[1]+" - "}}return c};HPTrack.Module.DelegatedHandler=function(a,b){return function(h){var d=HPTrack;var i=E.getTarget(h);if(i&&(i.tagName=="IMG"||i.tagName=="SPAN")){i=i.parentNode||false}if(i&&i.tagName=="A"){var c="";var k="";if(i.className){var m=i.className;if(m.indexOf("TRACKED")>=0){return}var g=m.match(/track_([^_]+)_?([^ ]*)/);if(g){var c=g[1];if(g[2]){k=g[2]}}i.className+=" TRACKED";k=d.Module.getTrackingPrefix(i)+k}var f={page:"Clickthrough",lightbox:"Lightbox Open",action:"Action"};if(!f[c+""]){return}var j=false;if(c=="page"&&(!(i.target&&(!window.name||window.name!=i.target)))){j=true;E.preventDefault(h)}var l=f[c+""];if(a.huff_tracker){a.event(l,k)}else{a.call((b||this),l,k)}if(j){d.navigateAfterTrack(h,i.href)}}}};HPTrack.Vid={DL:function(b){if(typeof(bN)=="undefined"){return}var a={};a.d=b;a.t=(new Date()).getTime();a.q=-1;HPTrack.trackedVideos[b.videoId]=a;bN.set("vidId",a.d.videoId,1);bN.set("vidTime",a.t,1);bN.set("vidAdViewed",0,1);bN.ping("video5min")},TC:function(c){if(typeof(bN)=="undefined"){return}var b;if(typeof(b=HPTrack.trackedVideos[c.videoId])=="undefined"){return}if(typeof(c.playheadTime)=="undefined"||typeof(b.d)=="undefined"||b.d.duration<=0){return}var a=Math.floor(c.playheadTime/b.d.duration*4)*25;if(b.q<a){b.q=a;bN.set("vidId",c.videoId,1);bN.set("vidTime",b.t,1);bN.set("vidAdViewed",1,1);bN.set("vidState",a,1);bN.ping("video5min")}}};HPTrack.TwitterEvents={__initialized:false,__placement:document.title,__network:"twitter",track:function(){if(this.__initialized){return}var a=this;twttr.ready(function(b){b.events.bind("click",a.__trackEvent);b.events.bind("tweet",a.__trackEvent);b.events.bind("retweet",a.__trackEvent);b.events.bind("favorite",a.__trackEvent);b.events.bind("follow",a.__trackEvent)});this.__initialized=true},__trackEvent:function(d){if(!d){return}var f=HPTrack.TwitterEvents,b=f.__getGATarget(d),a=d.hasOwnProperty("region")?d.region:null,c=b;a&&(c="["+a+"] - "+b);HPTrack.trackSocial(f.__network,d.type,c)},__getGATarget:function(f){var d=HPTrack.TwitterEvents.__placement,c=jQuery(f.target),b=c.parent(),a=b.data("placement");return a?a:d}};
var HuffPoUtil={entry_comments_for_ajax:[],commenter_name:"",images_preload:[],vote_results:{},vote_results_text:{},url_hashes:[],body_element:document.documentElement?document.documentElement:document.body,uniq_counter:0,init:function(){this.trackLinks();E.on("top_nav","click",function(g){var d=E.getTarget(g),e="Click";if(!(d&&d.tagName&&d.tagName=="A")){return}var c="Top Nav";if(d.className&&d.className.match(/subnav_link/)){if(HPConfig&&HPConfig.local_nav){c="Local Nav"}else{if(HPConfig&&HPConfig.vertical_nav){c="Vertical Nav"}}}else{if(!(d.parentNode.className&&d.parentNode.className.match(/(^n_| n_)/))){return}}E.preventDefault(g);if(HPConfig&&HPConfig.current_vertical_name){e+=" from "+HPConfig.current_vertical_name}var f=d.title||d.innerHTML;var b=HPTrack;b.trackEvent(c,e,f);b.navigateAfterTrack(g,d.href)});if(this.GetEntryID()){E.on("chicklets","click",function(f){var d=f.target||f.srcElement;if(!(d&&d.target&&d.target=="chicklet"&&d.title)){return true}E.preventDefault(f);var g="/"+__("Share on")+" (.*)/";var b=new RegExp(g);var c=b.test(d.title);if(c[1]){HPTrack.trackEvent("Chicklets","Click",c[1])}window.open(d.href,"chicklet","width=642,height=436,left=0,top=0,resizable,scrollbars=yes")})}if(window.SiteMode){SiteMode.init()}if("undefined"!==typeof HuffCookies&&HuffCookies.getUserName()&&jQuery("#header_connect_button").length){jQuery("#header_connect_button").css("display","none")}},trackLinks:function(){E.addListener(window.document,"click",function(l){var m=E.getTarget(l);if(!(m.tagName&&m.tagName.toUpperCase()=="A")){m=m.parentNode||m}if(!(m.tagName&&m.tagName.toUpperCase()=="A")){return}var f=m.href;if(m.rel=="popup"){E.stopEvent(l);var r=430;var c=450;if(m.className=="commentpop"){r=430}if(m.className=="biolink"){c=450}var o=Math.ceil(screen.height/2)-Math.ceil(r/2);var g=Math.ceil(screen.width/2)-Math.ceil(c/2);window.open(m.href,"bio","toolbar=0,scrollbars=1,location=0,statusbar=1,menubar=1,resizable=1,width="+c+",height="+r+",top="+o+",left="+g);return false}if(!f||(f.indexOf(window.location.href)==0)||(f.indexOf("javascript:")>-1)){return}if(f.indexOf("ffingtonpost.com")>-1&&typeof HPTrack!="undefined"){if(m.onclick){return}if(l.ctrlKey){return}var d=HPTrack._furthest_scrolled||0;var q=Dom.getDocumentHeight();var b=Dom.getViewportHeight();var n=d+b;var k=Math.round((n/q)*100);if(k>100){k=100}var j=125;var h="";if(!d){h="Left w/o scrolling"}else{if(n>q-j){h="Left after scrolling to bottom"}else{h="Left w/o scrolling to bottom"}}var p="non-b-page";if(HPUtil.GetEntryID()){p="b-page"}HPTrack.trackEvent("Scrolling",h,p,k);return}else{if(typeof HPTrack!="undefined"){HPTrack.trackPageview("/out/?u="+f)}}})},guid:function(){this.uniq_counter++;return"HP_uniq_"+this.uniq_counter},isArray:function(b){return Object.prototype.toString.call(b)==="[object Array]"},bind:function(f,e,d,b,c){if(!c&&b){c=b}var f=jQuery(f);f.bind(e,b,function(){d.apply(c,arguments)});return f},getTarget:function(b){var d=b.target||b.srcElement;try{if(d&&3==d.nodeType){return d.parentNode}}catch(c){}return d},getRegion:function(c){var b={top:0,left:0,bottom:0,right:0};c=jQuery(c);if(!c.length){return b}var d=c.offset();return{top:d.top,left:d.left,bottom:d.top+c.height(),right:d.left+c.width()}},onAvailable:function(e,h,b,f){this.__onAvailable_stack=this.__onAvailable_stack||{};var j=e+HuffPoUtil.guid();var g=this;var c=function(){if(jQuery(e).length>0||g.__onAvailable_stack[j].counter>40){g.__onAvailable_stack[j].cancel&&g.__onAvailable_stack[j].cancel();return true}g.__onAvailable_stack[j].counter++;return false};var d=function(){h.apply(b,[f])};this.__onAvailable_stack[j]={counter:0};var k=HuffPoUtil.WaitForCondition(d,500,c);this.__onAvailable_stack[j].cancel=function(){clearInterval(k)}},EvalScript:function(b){huff.use("util/util",function(c){c.evalScript(b)})},getNode:function(b){var c=[];jQuery(b).each(function(){c.push(this)});if(c.length>1){return c}if(c.length==1){return c[0]}return false},insertAfter:function(c,d,b){if(b.nextSibling){c.insertBefore(d,b.nextSibling)}else{c.appendChild(d)}},appendScript:function(c){var d=document.getElementsByTagName("head")[0];var b=document.createElement("script");b.type="text/javascript";b.src=c;d.appendChild(b)},getReadableTime:function(j,m){if(!m){m=2}var b=["1-second","60-minute","3600-hour","86400-day","604800-week","2592000-month","31536000-year"];var k=new Date;var l=k.getTime();var c=parseInt(l/1000);var g=c-j;var h=0;var e="";for(var f=7;f--;){data=b[f].split("-");key=data[0];value=data[1];if(g>=key&&value!="second"){var n="";e+=""+Math.floor(g/key).toString();if((Math.floor(g/key)!=1)){n="s"}e+=" "+value+n;h++;g=g%key;if(h>m-1||g==0){break}else{if(value!="minute"){e+=", "}}}}return e},AddStringToQueryString:function(c,b){var e=false,d=(new RegExp(/(#.*)/)).exec(c);c=d?c.replace(d[1],""):c;if(-1===c.indexOf("?")){e=true;c+="?"}c+=(e?"":"&")+b+(d?d[1]:"");return c},ShowNearElement:function(d,e,c,h,b,g){var f=undefined===g?Dom.getXY(e):g;h=h||[0,0];switch(d){case"right-middle":f[0]+=e.offsetWidth;f[1]+=e.offsetHeight/2;break;case"right-top":f[0]+=e.offsetWidth;break}if(b){b()}c.style.top=parseInt(parseInt(f[1])+h[1])+"px";c.style.left=parseInt(parseInt(f[0])+h[0])+"px";c.style.display="block"},getUrlVar:function(e){if(!this.url_hashes.length){var d;var b=window.location.href.slice(window.location.href.indexOf("?")+1).replace(/\#.*$/,"").split("&");for(var c=0;c<b.length;c++){d=b[c].split("=");this.url_hashes[d[0]]=d[1]}}if(typeof(this.url_hashes[e])=="undefined"){return null}else{return this.url_hashes[e]}},ScrollTo:function(b,d,c){b=typeof(b)=="string"?Dom.get(b):b;if(!b){return}if(typeof(c)=="undefined"||c==null){c=HuffPoUtil.body_element}if(typeof(d)=="undefined"){d=0.5}var e=jQuery("#"+b).offset();jQuery("#"+c).scrollTop(e.top)},CopyListeners:function(e,d){var c=E.getListeners(e);if(c){for(var b=0;b<c.length;++b){E.addListener(d,c[b].type,c[b].fn,c[b].obj)}}},AddSlashes:function(d){var f="",e="";for(var b=0;b<d.length;++b){switch(d.charAt(b)){case"<":f+="\\x3C";break;case">":f+="\\x3E";break;case"'":f+="\\'";break;case"\\":f+="\\\\";break;case'"':f+='\\"';break;case"\n":f+="\\n";break;case"\r":f+="\\r";break;default:f+=d.charAt(b);break}}return f},getHostName:function(){var b=document.location.port;if(!b||b==""||b==80){b=""}else{b=":"+b}return"http://"+document.location.hostname+b},GetAmazonS3Location:function(){return -1!==location.href.toLowerCase().indexOf("beta.huffingtonpost.com")?"dev.assets.huffingtonpost.com":"i.huffpost.com"},LinkifyTextLinks:function(b){return b.replace(/[a-z]+:\/\/[a-z0-9-_]+\.[a-z0-9-_:~%&\?\/.=]+[^:\.,\)\s*$]/ig,function(c){return'<a href="'+c+'">'+((c.length>25)?c.substr(0,24)+"...":c)+"</a>"})},GetEntryID:function(c){if("object"===typeof HPConfig&&HPConfig.entry_id){return HPConfig.entry_id}var b=null;if(!c){c=document.location.href}if((b=(new RegExp(/.*_(\d+)\.html/)).exec(c))){return b[1]}return false},isWWW:function(b){if(!b){b=window.location.href+""}if(b.indexOf("www")==7){return true}if(b.indexOf("p.")==7){return true}return false},hide:function(b){if(typeof(b)==="string"){b=document.getElementById(b)}if(!b){return}b.style.display="none"},show:function(c,b){if(typeof(c)==="string"){c=document.getElementById(c)}if(!c){return}c.style.display=b||"block"},show_inline:function(b){if(typeof(b)==="string"){var b=document.getElementById(b)}if(!b){return}b.style.display="inline"},trim:function(c,b){return this.ltrim(this.rtrim(c,b),b)},ltrim:function(c,b){b=b||"\\s";return c.replace(new RegExp("^["+b+"]+","g"),"")},rtrim:function(c,b){b=b||"\\s";return c.replace(new RegExp("["+b+"]+$","g"),"")},toggleVis:function(b){Dom.batch(b,function(c){if(c.style.display=="none"){c.style.display="block"}else{c.style.display="none"}})},toggleReply:function(b){Dom.batch("reply_"+b,function(c){if(c.style.display=="none"){c.style.display="block"}else{c.style.display="none"}})},toggleTopPosts:function(b){if(!Dom.hasClass(b,"active")){HuffPoUtil.toggleVis(["top_news_links","top_blog_links"]);HuffPoUtil.tradeClass("tab_top_news","tab_top_blogs","active")}},tradeClass:function(c,b,d){var c=jQuery("#"+c);var b=jQuery("#"+b);if(c.hasClass(d)){b.addClass(d);c.removeClass(d)}else{c.addClass(d);b.removeClass(d)}},WaitForCondition:function(c,b,e){if(!e.apply(this)){var d=this;return setTimeout(function(){HPUtil.WaitForCondition.apply(d,[c,b,e])},b)}else{c.apply(this)}},AnimRequestFinished:function(c,d,b){if(!c){return}d=d||"#F9E801";b=b||"#FFFFFF";for(i=0;i<c.length;i++){jQuery(c[i]).css("background-color",d);jQuery(c[i]).animate({backgroundColor:b},{duration:1000,complete:function(){jQuery(this).css("background-color","transparent")}})}},AnimPagination:function(c){if(undefined===c){c=[]}if(0==c.length){return}var d=[];for(var b=0;b<c.length;++b){d[d.length]=new YAHOO.util.Anim(c[b],{opacity:{from:0.2,to:1}});if(HPBrowser.isIEOld()){d[d.length-1].onComplete.subscribe(function(){Dom.setStyle(this.getEl(),"zoom","normal")})}d[d.length-1].animate()}},getCookie:function(d){var f=d+"=";var h=document.cookie;var b="";var e=h.indexOf(f);if(e==-1){return b}var g=h.indexOf(";",e+f.length);if(g==-1){g=h.length}return unescape(h.substring(e+f.length,g))},loadAndRun:function(c,e,d,b){LazyLoad.load(c,e,d,b);return false},trackerImg:function(c,d){c=c.replace(/%n/,ord);if(d){var b=new Image();b.src=c;b.width=b.height=1;b.style.display="none";try{d.appendChild(b)}catch(f){return}return}document.write('<img src="'+c+'" width="1" height="1" style="display:none"/>')},scriptTag:function(b,c){if(document.createElement&&((script=document.createElement("script")))){script.type="text/javascript";script.src=b;if(c){}else{var d=document.getElementsByTagName("head");if(d[0]){c=d[0]}}try{c.appendChild(script);return}catch(f){}}document.write('<script type="text/javascript" src="'+b+'"><\/script>')},checkEmail:function(b){if(b&&((b.indexOf("@")>0)&&(b.indexOf(".")>0))&&(b.indexOf(".")!=b.length-1)){return true}return false},getDisplayName:function(d){if("undefined"===typeof d||!d){d=HuffCookies.getUserName()||""}var b=d.replace(/[\+_]/g," ");var c=b.replace("hp blogger ","");return c},flash:function(c,b){var d=b||"#ff0000";jQuery(c).css("background-color",d).animate({opacity:"-=0.5"},300,function(){jQuery(this).css("background-color","#FFFFFF");jQuery(this).css("opacity","1")})},yellowFlash:function(b){this.flash(b,"#F9E801")},enforceTextAreaLimit:function(c,b){if(!b||!b.chars){b={chars:100}}if(this.value.length>b.chars){HuffPoUtil.flash(this);this.value=this.value.substring(0,b.chars);this.scrollTop=this.scrollHeight}},enforceTextAreaLimit_v2:function(c){var b=100;if(c.data&&c.data.chars){b=c.data.chars}if(jQuery(this).attr("value").length>b){HuffPoUtil.flash(this);this.value=this.value.substring(0,b);this.scrollTop=this.scrollHeight}return},initLogout:function(){if((typeof HuffCookies=="undefined")||!(HPUtil.isWWW()||HPConfig.site)){return}jQuery("#wendybird_user_name").html("");jQuery("#wendybird_user").hide();jQuery("#not_logged_user").show();return},initUserNavStatus:function(b){huff.use("util/user",function(c){c.updateAuthStatus()});return},reinit:function(){HPUtil.initUserNavStatus()},isIE6:function(){return HPBrowser.isIE6()},getCorrectVideoContentForIE6:function(b){return b},onPageReady:function(b){jQuery(window).ready(b)},getQueryVariables:function(){var d=window.location.search.substring(1);var e=d.split("&");var c=new Array();for(var b=0;b<e.length;b++){var f=e[b].split("=");c[f[0]]=f[1]}return c},region_contains:function(b,c){return(c.left>=b.left&&c.right<=b.right&&c.top>=b.top&&c.bottom<=b.bottom)},resize:function(){if(window.innerWidth<970){re=new RegExp(/.*?Netscape.(.*)/);matches=re.exec(navigator.userAgent);if(matches&&matches.length>=2&&matches[1]<7.2){document.body.style.margin="0"}}},showad:function(){this.show("rightad");this.show("frontmidad")},SharePollToFacebook:function(c,b){huff.use("util/util",function(d){d.sharePollOnFacebook(c,b)})},vote:function(b){huff.use("util/util",function(c){c.voteOnPoll(b)})},UpdateEntriesComments:function(){huff.use("util/util",function(b){b.updateEntriesComments()})},number_format:function(g,d,j,f){var c=!isFinite(+g)?0:+g,b=!isFinite(+d)?0:Math.abs(d),l=(typeof f==="undefined")?",":f,e=(typeof j==="undefined")?".":j,k="",h=function(p,o){var m=Math.pow(10,o);return""+Math.round(p*m)/m};k=(b?h(c,b):""+Math.round(c)).split(".");if(k[0].length>3){k[0]=k[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,l)}if((k[1]||"").length<b){k[1]=k[1]||"";k[1]+=new Array(b-k[1].length+1).join("0")}return k.join(e)},int2size:function(f,c){var e=1000;var b=e*1000;var d=b*1000;if(typeof c=="undefined"){c=1}if((f>=0)&&(f<e)){return f}else{if((f>=e)&&(f<b)){return(f/e).toFixed(c)+"K"}else{if((f>=b)&&(f<d)){return(f/b).toFixed(c)+"M"}else{return f}}}},updateContent:function(c,d,e,b){huff.use("util/util",function(f){f.fadeOutfadeInContent(c,d,e,b)})},addCSS:function(b){huff.use("util/util",function(c){c.addCSSFile(b)});return},render_video:function(b){huff.use("util/util",function(c){c.renderVideo(b)})},cleanup_cookies:function(){huff.use("util/util",function(b){b.cleanupCookies()})},migrate_cookies:function(){huff.use("util/util",function(b){b.migrateCookies()})},PeriodicalExecute:function(c,d,b,f){if(undefined===b||(undefined!==b&&b())){c.apply(this)}var e=this;if(undefined!==d&&(undefined===f||(undefined!==f&&!f()))){window.setTimeout(function(){HuffPoUtil.PeriodicalExecute.apply(e,[c,d,b,f])},d)}},Strip_Tags:function(h,j){var n="",l=false;var g=[];var b=[];var m="";var e=0;var d="";var f="";var c=function(o,k,p){return p.split(o).join(k)};if(j){b=j.match(/([a-zA-Z]+)/gi)}h+="";g=h.match(/(<\/?[\S][^>]*>)/gi);for(n in g){if(isNaN(n)){continue}f=g[n].toString();l=false;for(d in b){m=b[d];e=-1;if(e!=0){e=f.toLowerCase().indexOf("<"+m+">")}if(e!=0){e=f.toLowerCase().indexOf("<"+m+" ")}if(e!=0){e=f.toLowerCase().indexOf("</"+m)}if(e==0){l=true;break}}if(!l){h=c(f,"",h)}}return h},PreloadImages:function(b){if(Y.lang.isArray(b)){for(var c=0;c<b.length;++c){this.images_preload[this.images_preload.length]=new Image();this.images_preload[this.images_preload.length-1].src=b[c]}}else{for(var d in b){this.images_preload[this.images_preload.length]=new Image();if(b[d].callback){this.images_preload[this.images_preload.length-1].onload=b[d].callback}this.images_preload[this.images_preload.length-1].src=d}}},bitly_url:function(c,b){huff.use("util/util",function(d){d.bitlyUrl(c,b)})},checkUserInfluence:function(){huff.use("util/user",function(b){b.updateUserInfluence()})},setInfluenceCookie:function(b){huff.use("util/user",function(c){c.setInfluenceCookie(b)})},updateInfluenceCookie:function(c,b){huff.use("util/user",function(d){d.updateInfluenceCookie(c,b)})},removeEmptyInfluence:function(){if(HuffCookies.getCookie("huffpost_influence_null")){HuffCookies.destroyCookie("huffpost_influence_null")}},updateNavByReferrer:function(){huff.use("util/user",function(b){b.updateNavByReferrer()})},providerOverview:function(b){huff.use("util/user",function(c){c.providerOverview(b)})},utf8_decode:function(b){var d=[],f=0,h=0,g=0,e=0,c=0;b+="";while(f<b.length){g=b.charCodeAt(f);if(g<128){d[h++]=String.fromCharCode(g);f++}else{if(g>191&&g<224){e=b.charCodeAt(f+1);d[h++]=String.fromCharCode(((g&31)<<6)|(e&63));f+=2}else{e=b.charCodeAt(f+1);c=b.charCodeAt(f+2);d[h++]=String.fromCharCode(((g&15)<<12)|((e&63)<<6)|(c&63));f+=3}}}return d.join("")},frameAuthSuccess:function(b){return true},frameAuthFailure:function(b){return true},isDotComVersion:function(){var b=window.location.hostname;if(/huffingtonpost.com/.test(b)){return true}return false},isHPBetaLiveHost:function(){return(window.location.hostname==="beta.live.huffingtonpost.com")},isHPLiveHost:function(){return(window.location.hostname==="live.huffingtonpost.com")},isUSAVersion:function(){var b=window.location.hostname;if(!huff.beta&&/www.huffingtonpost.com/.test(b)){return true}else{if(huff.beta&&/www.beta(\d*).huffingtonpost.com/.test(b)){return true}}return false},isMobileweb:function(){return(window.HPConfig&&window.HPConfig.site==="mobileweb")},youMayLikeModule:function(){var g=["taboola","gravity"];var c=this.getUrlVar("you_may_like");var d=(c&&-1!==jQuery.inArray(c,g))?c:("undefined"!==typeof __taboola_params&&"undefined"!==typeof __gravity_params)?"taboola/gravity":("undefined"!==typeof __taboola_params)?"taboola":("undefined"!==typeof __gravity_params)?"gravity":"";function e(){if(typeof __taboola_params!=="undefined"){window._taboola=window._taboola||[];for(var l=0;l<__taboola_params.length-1;l++){jQuery("#hp-more-taboola").append("<div id="+__taboola_params[l].container+" ></div>");_taboola.push(__taboola_params[l])}window._taboola=window._taboola||[];_taboola.push({flush:true})}}function j(){if(typeof __gravity_params!=="undefined"){var p=__gravity_params.pl||19;var u="grv-personalization-"+p;if(!jQuery("#"+u).length){jQuery("#hp-more-gravity").append(jQuery("<div id='"+u+"'/>"))}delete (__gravity_params.percent);delete (__gravity_params.pl);window.gravityInsightsParams=__gravity_params;var x,r,A,C,q,l,w,v,y,B,t,o,n,m;q=function(F){var D;D=document.createElement("script");D.async=!0;D.src=F;F=document.getElementsByTagName("script")[0];return F.parentNode.insertBefore(D,F)};r="";y=(C=!0===gravityInsightsParams.useGravityUserGuid?1:0)?"":gravityInsightsParams.user_guid||(null!=(o=/grvinsights=([^;]+)/.exec(document.cookie))?o[1]:void 0)||"";t=(B="http://rma-api.gravity.com/v1/api/intelligence",l=(null!=(n=window.jQuery)?null!=(m=n.fn)?m.jquery:void 0:void 0)||"",v="iframe",x=gravityInsightsParams.ad||"",A=gravityInsightsParams.cburl||"",w=gravityInsightsParams.pfurl||"",""+B+"/wl?jq="+l+"&sg="+gravityInsightsParams.site_guid+"&ug="+y+"&ugug="+C+"&id="+u+"&pl="+p+("&type="+v+"&ad="+x+"&cburl=")+encodeURIComponent(A)+"&pfurl="+encodeURIComponent(w)+("&x="+(new Date).getTime())+("undefined"!==typeof forceArticleIds&&null!==forceArticleIds&&forceArticleIds.join?"&ai="+forceArticleIds.join(","):"")+("undefined"!==typeof apids&&null!==apids&&""!==apids?"&apids="+encodeURIComponent(apids):""));r&&q(r);t&&(window.gravityInsightsParams.sidebar&&(window.gravityInsightsParams.wlStartTime=(new Date).getTime()),q(t))}}switch(d){case"taboola/gravity":var b=("undefined"!==typeof __gravity_params.percent)?__gravity_params.percent:0.5;var k=10000;var h="huffPoGravityVsTaboolaBucketNum";var f=HuffCookies.getCookie(h);null==f&&(f=Math.floor(Math.random()*k),HuffCookies.setCookie(h,f,30));f<b*k?j():e();break;case"taboola":e();break;case"gravity":j();break}return}};var HPUtil=HuffPoUtil;HuffPoUtil.WEDGJE=function(){ad_store={};WEDGJE_ord=Math.random();WEDGJE_ord=WEDGJE_ord*10000000000000000000;isIE=(true||(navigator.userAgent&&navigator.userAgent.match(/MSIE/)));getIframe=function(b){innerH='<iframe width="'+b.width+'" height="'+b.height+'" ';innerH+='src="'+getSource(b)+'"';innerH+=' marginheight="0" marginwidth="0" frameborder="0" scrolling="no"></iframe>';if(this.isIE){return innerH}else{i=document.createElement("span");i.innerHTML=innerH;return i}};getScript=function(b){if(this.isIE){b.prefix="http://ad.doubleclick.net/adj/";innerH='<script type="text/javascript" src="'+getSource(b)+'"><\/script>';return innerH}else{b.prefix="http://ad.doubleclick.net/adj/";s=document.createElement("script");s.type="text/javascript";s.src=getSource(b);return s}};getQCSegs=function(){a=HuffPoUtil.getCookie("__qseg");return(a)?a.replace(/\|{0,1}Q_/gi,";qcs=").replace(/^;/,"")+";":""};getSource=function(b){if(b.prefix){adSource=b.prefix}else{adSource="http://ad.doubleclick.net/adi/"}adSource+=b.zone_info+";global=1;";adSource+=getQCSegs();if(b.interstitial&&(typeof ads_page_type!="undefined"&&ads_page_type!="big_news")&&!(document.referrer&&document.referrer.match(/.*(yahoo|aol)\.com.*/))){adSource+="dcopt=ist;"}adSource+=(test_kws=location.href.match(/dc_kw\=[^\&]*/gi))?"kw="+test_kws.toString().replace(/dc_kw\=/gi,"").replace(/\,/gi,";kw=")+";":"";adSource+=(location.href.match(/beta\./))?"kw=beta;":"";adSource+=(document.referrer.match("google.com/cse"))?"utm_hp_ref=hp_search;":"";adSource+=(document.referrer.match("google.com/search"))?"utm_hp_ref=google;":"";adSource+=(navigator.userAgent.toLowerCase().match("chrome/"))?"brsr=chrome;":"";adSource+=(typeof ads_page_type!="undefined")?"page_type="+ads_page_type+";":"";adSource+=(b.kv)?b.kv:"postload=0;";adSource+="tile="+b.tile+";";adSource+="sz="+(b.sizes||(b.width+"x"+b.height))+";";adSource+="ord="+WEDGJE_ord+"?";return adSource};getBareScript=function(b){if(this.isIE){innerH='<script type="text/javascript" src="'+b.src+'"><\/script>';return innerH}else{s=document.createElement("script");s.type="text/javascript";s.src=b.src;return s}};return{double_adsense:false,ads:function(b){return ad_store[b]},ord:function(b){return WEDGJE_ord},debug_ad_code:function(b){return(location.href.toLowerCase().match("debugadcode"))?'<div style="position:relative;z-index:1000"><div style="z-index:10000;position:absolute;top:0px;left:0px;padding:5px;background-color:#e8d4f4;font-family:arial,helvetica,sans-serif;font-size:9px">'+getSource(b).replace(/\;/gi,";<br/>")+'<br/><a style="font-weight:bold;font-size:12px" target="_blank" href="/ads/test/ad_isolator.html?'+escape('<script type="text/javascript" src="'+getSource(b)+'"><\/script>')+'">See Ad In New Page</a></div></div>':""},inline_ad:function(b){b.prefix="http://ad.doubleclick.net/adj/";document.write('<script type="text/javascript" src="'+getSource(b)+'"><\/script>'+this.debug_ad_code(b))},postload_ad:function(b,d){var e="height: "+b.height+"px; ";var c="width: "+b.width+"px; ";if(b.no_container){e="";c=""}if(b.type=="iframe"){ad_store[b.el_id]=getIframe(b)}else{if(b.type=="script"){ad_store[b.el_id]=getScript(b)}else{if(b.type=="bare"){ad_store[b.el_id]=getBareScript(b)}}}if(isIE){if(typeof(d)=="undefined"){document.write('<div style="'+c+e+'" class="'+b.class_name+'" id="'+b.el_id+'">'+ad_store[b.el_id]+"</div>"+this.debug_ad_code(b))}else{document.getElementById(d).innerHTML='<div style="'+c+e+'" class="'+b.class_name+'" id="'+b.el_id+'">'+ad_store[b.el_id]+"</div>"+this.debug_ad_code(b)}}else{if(typeof(d)=="undefined"){document.write('<div style="'+c+e+'" class="'+b.class_name+'" id="'+b.el_id+'"></div>'+this.debug_ad_code(b))}else{document.getElementById(d).innerHTML='<div style="'+c+e+'" class="'+b.class_name+'" id="'+b.el_id+'"></div>'+this.debug_ad_code(b)}setTimeout("document.getElementById('"+b.el_id+"').appendChild(HuffPoUtil.WEDGJE.ads('"+b.el_id+"'));",(b.tile*200)+1)}},interstitial:true,tile:1,write:function(b,c){if(!HPBrowser.isIEOld()&&b.width!="234"&&c!="ad_advertisement"&&!(typeof ads_page_type!="undefined"&&ads_page_type=="front"&&(b.zone_info.match("comedy")||b.zone_info.match("world")))||location.href.match("postload_test")){b.interstitial=this.interstitial;this.interstitial=false;this.deferred_write(b,c);return}b.tile=this.tile++;if(location.href.match("no_ads")||location.href.match("nsup")){return}if(c){this.postload_ad(b,c)}else{b.interstitial=this.interstitial;this.interstitial=false;this.inline_ad(b)}},google_ads:{primed:false,counter:0,vars:{ad_client:"pub-3264687723376607",ad_output:"js",max_num_ads:"4",ad_type:"text",feedback:"on"},init:function(){if(!HuffPoUtil.WEDGJE.google_ads.primed){HuffPoUtil.WEDGJE.google_ads.primed=true}HuffPoUtil.WEDGJE.google_ads.executions=HuffPoUtil.WEDGJE.google_ads.executions||[];var c=HuffPoUtil.WEDGJE.google_ads.executions.length;HuffPoUtil.WEDGJE.google_ads.executions[c]=[];for(var b in HuffPoUtil.WEDGJE.google_ads.vars){HuffPoUtil.WEDGJE.google_ads.executions[c][b]=HuffPoUtil.WEDGJE.google_ads.vars[b]}for(var b in arguments[0]){HuffPoUtil.WEDGJE.google_ads.executions[c][b]=arguments[0][b]}},exec:function(){if(!HuffPoUtil.WEDGJE.google_ads.executions||!HuffPoUtil.WEDGJE.google_ads.executions[0]){return}var b=0;for(z=0;HuffPoUtil.WEDGJE.google_ads.executions[z];z++){var c="page_url---"+document.location.href+"*";for(_var in HuffPoUtil.WEDGJE.google_ads.executions[z]){if(typeof HuffPoUtil.WEDGJE.google_ads.executions[z][_var]=="string"){c+=_var+"---"+HuffPoUtil.WEDGJE.google_ads.executions[z][_var]+"*"}}c=c.replace(/\*$/gi,"");iframe=document.createElement("iframe");iframe.src="/ads/google_ads_iframe_loader.html#"+escape(escape(c));iframe.style.marginBottom="10px";iframe.frameBorder="0";iframe.id="iframe_"+HuffPoUtil.WEDGJE.google_ads.executions[z]["hp_dest_id"];iframe.height=1;iframe.scrolling="no";iframe.width="100%";iframe.name="adsense_iframe_"+Math.round(Math.random()*100000);adloc=document.getElementById(HuffPoUtil.WEDGJE.google_ads.executions[z]["hp_dest_id"].replace(/\"/gi,""));adloc.innerHTML="";adloc.appendChild(iframe)}},render:function(c){var e=document.getElementById(google_hp_dest_id);if(c.length==0||!e){return}var d='<div class="adsense_left">';d+='<div class="google_links_header"><a target="_blank" href="'+google_info.feedback_url+'" ><span>Ads by Google</span></a></div>';for(var b=0;b<c.length;++b){d+=HuffPoUtil.WEDGJE.google_ads.make_link(c[b])}d+="</div>";e.innerHTML=d;HuffPoUtil.WEDGJE.google_ads.contextual_ad_unit++;HuffPoUtil.WEDGJE.google_ads.counter+=c.length;HuffPoUtil.WEDGJE.google_ads.executions.splice(0,1);HuffPoUtil.WEDGJE.google_ads.exec()},make_link:function(e){var f=(arguments[1])?arguments[1]:["header","description","visible_url"];var c={header:'<div class="link_header"><a target="_blank" href="'+e.url+'" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to '+e.visible_url+"';return true\">"+e.line1+"</a></div>",description:'<div class="link_description"><span class="line2">'+e.line2+'</span><span class="spacer">&nbsp;</span><span class="line3">'+e.line3+"</span></div>",visible_url:'<div class="link_visible_url"><a target="_blank" href="'+e.url+'" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to '+e.visible_url+"';return true\"><span>"+e.visible_url+"</a></span></div>"};var b='<div class="adsense_block">';for(var d=0;d<f.length;d++){b+=c[f[d]]}b+="</div>";return b}}}}();HuffPoUtil.WEDGJE.deferred_write=function(b,d){b.tile=this.tile++;if(location.href.match("no_ads")||location.href.match("nsup")){return}var e="height: "+b.height+"px; ";var c="width: "+b.width+"px; ";if(b.no_container){e="";c=""}b.type="script";b.kv="postload=1;";isIE=true;if(b.type=="iframe"){ad_store[b.el_id]=getIframe(b)}else{if(b.type=="script"){ad_store[b.el_id]=getScript(b)}else{if(b.type=="bare"){ad_store[b.el_id]=getBareScript(b)}}}if(typeof(d)=="undefined"){document.write('<div style="'+c+e+'" class="'+b.class_name+'" id="'+b.el_id+'"></div>'+this.debug_ad_code(b))}else{document.getElementById(d).innerHTML='<div style="'+c+e+'" class="'+b.class_name+'" id="'+b.el_id+'"></div>'+this.debug_ad_code(b)}HuffPoUtil.WEDGJE.ad_renders.push(function(){document.write('<div id="defer-'+b.el_id+'">'+ad_store[b.el_id]+"</div>");(function(){var f=$("defer-"+b.el_id);if(!f){setTimeout(arguments.callee,100);return}f.parentNode.removeChild(f);$(b.el_id).appendChild(f)})()})};HuffPoUtil.WEDGJE.ad_renders=[];HuffPoUtil.ImageLoader={foldCheck:function(d,b,c,e){huff.beta&&console.error("HuffPoUtil.ImageLoader is DEPRECATED")}};HuffPoUtil.AvatarLoader={loadAvatar:function(b){huff.beta&&console.error("HuffPoUtil.AvatarLoader is DEPRECATED")},loadAvatarHomeStyle:function(b){huff.beta&&console.error("HuffPoUtil.AvatarLoader is DEPRECATED")},loadAvatarArticleStyle:function(){huff.beta&&console.error("HuffPoUtil.AvatarLoader is DEPRECATED")}};var HPConnect={current_hash:false,Login:function(){huff.use("user","connect/auth","connect/modal","connect/provider",function(b,d,c){if(b.logged){return}d.Login.init()})},Signup:function(){huff.use("user","connect/auth","connect/modal","connect/provider",function(b,d,c){if(b.logged){return}d.Signup.init()})},Verify:function(){huff.use("user","connect/auth","connect/modal","connect/provider",function(b,d,c){if(!b.logged){return}d.Verify.init()})},Forgot:function(){huff.use("user","connect/auth","connect/modal","connect/provider",function(b,d,c){if(b.logged){return}d.ResetPassword.init()})},showLoader:function(){huff.use("modal",function(b){var c={content:'<div style="width:32px; height:32px; background:url(http://s.huffpost.com/images/loader.gif); margin:33px auto;"></div>',width:350,position:"fixed",onshow:function(){jQuery(".qr_close").hide()}};b.show(c);return})},hideLoader:function(){huff.use("modal",function(b){b.hide();return})},isAuthHash:function(){if(this.current_hash){return this.current_hash}var b=window.location.hash;if(/login_success/.test(b)||/signup_success/.test(b)||/login_failure/.test(b)||/reset_success/.test(b)){this.current_hash=b.replace("#","");window.location.hash="";return this.current_hash}return false},updateXDAuthStatus:function(){var b=window.location.href;if((HPUtil.GetEntryID()||/\/users\//.test(b))&&-1===window.location.href.indexOf("just_reloaded")){window.location.href=HPUtil.AddStringToQueryString(window.location.href,"just_reloaded=1")}else{huff.use("util/user",function(c){c.updateAuthStatus(true)})}return},postAuthHashCallback:function(b){switch(b){case"login_success_rem":case"login_success":case"reset_success":HPConnect.hideLoader();if("login_success_rem"===b){var c=HuffCookies.getUserName()||false;HuffCookies.setCookie("last_login_username",c,(24*365))}if(!HPUtil.isDotComVersion()){HPConnect.updateXDAuthStatus()}break;case"signup_success":huff.use("connect/modal","connect/auth",function(e,d){ConnectModal=e;e.init(function(){HPConnect.hideLoader();d.Login.loginSuccess=HPConnect.updateXDAuthStatus;d.Signup.loadWelcomeBrief()})});break;case"login_failure":HPConnect.hideLoader();huff.use("modal",function(d){d.show({content:"<div class='bold arial_14' style='margin-top: 15px;'>"+__("Something's off. Please check the account info and password and try again.")+"</div>",width:300})});break}return},postAuthHash:function(){var b=this.isAuthHash();if(b&&HPUtil.isDotComVersion()){HPConnect.postAuthHashCallback(b)}return}};HPConnect.postAuthHash();var HPError={DEFAULT_ERROR:"Sorry, an error occurred.  Please check your internet connection",DEBUG:0,is_error:0,setDebug:function(b){if(b){HuffCookies.setCookie("debug_mode","1","1");HPError.DEBUG=1;window.onbeforeunload=function(d){var c="Your debug cookie is set, please confirm you want to leave the page";d=d||window.event;if(d){d.returnValue=c}return c}}else{HuffCookies.destroyCookie("debug_mode");HPError.DEBUG=0;window.onbeforeunload=function(){}}},throwError:function(b,c){c=c||false;if(b&&typeof b!=="object"){b={msg:b}}if(!b){b=new Array()}if(!(b.show===0)){b.show=1}if(!b.msg||b.msg==this.DEFAULT_ERROR){b.msg=this.DEFAULT_ERROR;b.show=0}this.is_error=1;if(this.DEBUG){try{throw ("Err")}catch(b){if(b.stack){console.log("Stack:",b.stack)}}console.log("Msg: ",b.msg);if(b.obj){console.log(b.obj)}}if(b.show){if(c){alert(b.msg)}}},debugMessage:function(c,b){if(!this.DEBUG){return false}if(!b){b={}}if(!c){c=""}HPError.e({show:0,msg:c,obj:b})}};if(typeof HuffCookies!="undefined"&&HuffCookies.getCookie("debug_mode")){HPError.setDebug(true)}HPError.e=HPError.throwError;HPError.d=HPError.debugMessage;String.prototype.format=function(){return String.format(this,arguments.length==1?arguments[0]:arguments)};String.format=function(b,d){var c=function(j,h){var g=function(k){if(typeof k=="number"){return Number}else{if(typeof k=="boolean"){return Boolean}else{if(typeof k=="string"){return String}else{return k.constructor}}}}(j);var f=g.prototype;var e=typeof j!="string"?f?f.format||f.toString:j.format||j.toString:j.toString;if(e){if(typeof h=="undefined"||h==""){return e.call(j)}else{return e.call(j,h)}}else{return""}};if(arguments.length==1){return function(){return String.format.apply(null,[b].concat(Array.prototype.slice.call(arguments,0)))}}if(arguments.length==2&&typeof d!="object"&&typeof d!="array"){d=[d]}if(arguments.length>2){d=Array.prototype.slice.call(arguments,1)}b=b.replace(/\{\{|\}\}|\{([^}: ]+?)(?::([^}]*?))?\}/g,function(f,e,g){if(f=="{{"){return"{"}if(f=="}}"){return"}"}if(typeof d[e]!="undefined"&&d[e]!==null){return c(d[e],g)}else{return""}});return b};String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};(function(b){b.fn.disable_inputs=function(){return this.each(function(){jQuery(this).find("input,select,textarea").attr("disabled","disabled")})};b.fn.enable_inputs=function(){return this.each(function(){jQuery(this).find("input,select,textarea").removeAttr("disabled")})};b.fn.set_iframe_height=function(){return this.filter("iframe").each(function(){if(this.contentDocument){this.height=this.contentDocument.body.offsetHeight+35}else{this.height=this.contentWindow.document.body.scrollHeight+40}})}})(jQuery);
var HPBrowser={};HPBrowser.isAppleFirefox=function(){if(navigator&&navigator.userAgent){return jQuery.browser&&jQuery.browser.mozilla&&(-1!==navigator.userAgent.toLowerCase().indexOf("macintosh"))}return false};HPBrowser.isFirefox=function(){if(navigator&&navigator.userAgent){return jQuery.browser&&jQuery.browser.mozilla&&(-1!==navigator.userAgent.toLowerCase().indexOf("mozilla"))}return false};HPBrowser.isAppleSafari=function(){if(navigator&&navigator.userAgent){return jQuery.browser&&jQuery.browser.webkit&&(-1!==navigator.userAgent.toLowerCase().indexOf("macintosh"))}return false};HPBrowser.isSafari=function(){var a=navigator.userAgent.toString().toLowerCase();if((a.indexOf("safari")!=-1)&&!(a.indexOf("chrome")!=-1)){return true}else{return false}};HPBrowser.isChrome=function(){if(navigator&&navigator.vendor){return -1!==navigator.vendor.toLowerCase().indexOf("google")}return false};HPBrowser.isIE6=function(){if(navigator&&navigator.userAgent){return jQuery.browser.msie&&/MSIE 6.0/i.test(navigator.userAgent)}return false};HPBrowser.isIE7=function(){if(navigator&&navigator.userAgent){return jQuery.browser.msie&&/MSIE 7./i.test(navigator.userAgent)}return false};HPBrowser.isIE8=function(){var c=-1;var a=navigator.userAgent;var b=new RegExp("Trident/([0-9]{1,}[.0-9]{0,})");if(b.exec(a)!=null){c=parseFloat(RegExp.$1)}return(c==4)};HPBrowser.isIEOld=function(){return HPBrowser.isIE6()||HPBrowser.isIE7()||HPBrowser.isIE8()};HPBrowser.isIE=HPBrowser.isIEOld;HPBrowser.isWebkit=function(){return HPBrowser.isChrome()||HPBrowser.isAppleFirefox()||HPBrowser.isAppleSafari()};HPBrowser.nameBrowser=function(){var a=jQuery.browser||false;if(HPBrowser.isChrome()){return"Chrome"}else{if(a&&a.msie){return"Explorer"}else{if(HPBrowser.isFirefox()||HPBrowser.isAppleFirefox()){return"Firefox"}else{if(HPBrowser.isAppleSafari()){return"Safari"}else{if(HPBrowser.isWebkit()){return"Webkit"}else{if(a&&a.opera){return"Opera"}else{if(a&&a.camino){return"Camino"}else{if(a&&a.konqueror){return"Konqueror"}else{if(a&&a.omniweb){return"OmniWeb"}else{if(/netscape/.test(navigator.userAgent)){return"Netscape"}else{return"An unknown browser"}}}}}}}}}}};HPBrowser.browser_class=function(){var a=HPBrowser.nameBrowser();return a.replace(" ","_")};HPBrowser.version=function(){var a=HPBrowser.nameBrowser();if(a=="Explorer"){a="MSIE"}if(a=="OmniWeb"){a="OmniWeb/"}if(a=="Netscape"){a="Mozilla"}var b=navigator.userAgent.indexOf(a);if(b==-1){b=navigator.appVersion.indexOf(a);if(b==-1){return"an unknown version"}else{return parseFloat(navigator.appVersion.substring(b+a.length+1))}}else{return parseFloat(navigator.userAgent.substring(b+a.length+1))}};HPBrowser.major_version=function(){return parseInt(HPBrowser.version())};HPBrowser.minor_version=function(){var b=HPBrowser.version();var a=HPBrowser.major_version();return(b+"").substring((a+"").length+1)||0};HPBrowser.version_class=function(){var a=HPBrowser.version();return(""+a).replace(" ","_").replace(".","_")};HPBrowser.OS=function(){var a={name:(/(win|mac|linux|sunos|solaris|iphone|ipad)/.exec(navigator.platform.toLowerCase())||["unknown"])[0].replace("sunos","solaris")};if(a.name=="win"){return"Windows"}if(a.name=="mac"){return"Mac"}if(a.name=="linux"){return"Linux"}return a.name};HPBrowser.OS_class=function(){var a=HPBrowser.OS();return a.replace(" ","_")};
(function(h){var b,c,e=document.documentElement,f={},g=0;var d=function(o,m){var m=m||{},r=m.callback,k=m.pollDelay||100,p=m.timeout||10000,l,n=e;if(!b){b=j('<div style="position:absolute;top:-999em;left:-999em;width:auto;font-size:200px;font-family:serif">fONT TeST</div>')}function q(s){function t(){n.insertBefore(s,n.firstChild);i(function(){return b.offsetWidth!==s.offsetWidth},function(u){n.removeChild(s);n.removeChild(b);if(r){r(o,u)}},k,p)}if(c===2){t()}else{i(function(){return c===2},t,k)}}if(!c){e.insertBefore(b,e.firstChild);c=1;if(b.offsetWidth===0){i(function(){return document.body},function(){n=document.body;n.insertBefore(b,n.firstChild);c=2},k)}else{c=2}}l=b.cloneNode(true);l.style.fontFamily="'"+o+"',serif";q(l)};h.getFont=d;function j(k){var l=document.createElement("div");l.innerHTML=k;return l.firstChild}function a(){return new Date().getTime()}function i(m,r,l,o){var n=g++,q=a(),p,k=false;l=l||1;f[n]=setInterval(function(){p=a()-q;if(m()||(o&&(k=p>o))){r.call(h,k,p);clearInterval(f[n])}},l)}}(this));
huff.use("conf",function(a){a.set("topnav/font-load-status",-1);getFont("OpenSansCondensed",{callback:function(c,b){a.set("topnav/font-load-status",(b?0:1))}})});
var Y=YAHOO;var E=Y.util.Event;var R=Y.util.Region;var Dom=Y.util.Dom;var C=Y.util.Connect;var $=Dom.get;var addEvent=E.addListener;var addListener=E.addListener;var axel=Math.random()+"";var ord=axel*1000000000000000000;var HpSupport={script_eval:null};var TrackingData=new Object;if("undefined"===typeof Array.prototype.inArray){Array.prototype.inArray=function(b){var a;for(a=0;a<this.length;a++){if(this[a]===b){return true}}return false}}if("undefined"===typeof Array.prototype.arrayPos){Array.prototype.arrayPos=function(b){for(var a=0;a<this.length;a++){if(this[a]===b){return a}}return -1}}function extend(b,c){for(var a in c){if(!c.hasOwnProperty(a)){continue}b[a]=c[a]}}function form_to_iframe_callback(b){try{b()}catch(a){}}function isset(a){if(typeof(window[a])!="undefined"){return true}else{return false}}function simulateClick(a){jQuery("#"+a).click()}function supress_keyvalues(a,b){jQuery.each(a,function(d,c){r=new RegExp(c+"=[^;]+;","g");b=b.replace(r,"")});return b}HPUtil.onPageReady(function(){HuffPoUtil.init();if("undefined"!==typeof window.Mobileweb){return}var f=(ClickTracker.sample==1)?1:(Math.round(Math.random()*(ClickTracker.sample-1))==1);ClickTracker.trackClicks=(f||ClickTracker.debug)&&(Dom.hasClass(document.body,"frontpage")||Dom.hasClass(document.body,"big_news_class")||document.getElementById("partner_box")||((typeof(bN_cfg)!="undefined")&&(typeof(bN_cfg.p)!="undefined")&&(bN_cfg.p.dL_dpt=="front")));if(ClickTracker.trackClicks){ClickTracker.init()}Dom.batch(document.getElementsByTagName("UL"),function(h){if(h&&h.getElementsByTagName){lis=h.getElementsByTagName("LI");if(lis[0]){Dom.addClass(lis[0],"first");Dom.addClass(lis[lis.length-1],"last")}}});lists=Dom.getElementsByClassName("widget_children","div");for(var e=0;e<lists.length;e++){els=lists[e].getElementsByTagName("div");wi_els=new Array();for(var c=0;c<els.length;c++){o=els[c];if(Dom.hasClass(o,"widget_item")){wi_els.push(o)}}for(var b=0;b<wi_els.length;b++){o=wi_els[b];if(b==0){Dom.addClass(o,"first_child")}if(b==wi_els.length-1){Dom.addClass(o,"last_child")}}}setInterval(HuffPoUtil.UpdateEntriesComments,1000*300);var g=document.getElementById("loggedin_user");if(g){if(HuffCookies.getUserName()){g.innerHTML='<a href="/users/logout/?referer='+encodeURIComponent(HPConfig.current_uri)+'" onclick="QuickLogin.SocialLogout(\'http://'+HPConfig.current_web_address+"/users/logout/?referer="+encodeURIComponent(HPConfig.current_uri)+"'); return false;\">"+_("Logout")+'</a> <span class="sign_bar">|</span> '}else{g.innerHTML='<a href="http://'+HPConfig.current_web_address+'/users/login/" onclick="HPConnect.Login(); return false;">'+_("Log In")+'</a> <span class="sign_bar">|</span> '}}if(HPBrowser.isIE8()){var d=Dom.getElementsByClassName("webslice_icons");for(var a=d.length;a--;){d[a].style.display="inline"}}});
var ClickTracker={debug:false,disabled:false,trackerImg:{},blogRecentRanking:0,trackMe:function(c){if(ClickTracker.disabled){return 1}if(ClickTracker.debug){c.preventDefault()}var a;var b=this;for(i=0;i<6;i++){if(b.id&&b.id.match(/(entry|blog|recent|href)_\d+/)){a=b;break}if(b.parentNode){b=b.parentNode}}this.trackerImg=new Image();this.trackerImg.onload=function(){HPTrack.navigateAfterTrack(c,this.href,this.target,0)};if(a){var d=a.id.match(/href_(\d+)/);var e=(d)?TrackingData["entry_"+d[1]]:TrackingData[a.id];if(!e){e={type:"popular",id:this.href.match(/(\d+).html/).pop(),blog_id:this.href.match(/_n_/)?2:3}}e.url=escape(this.href);if(!e.type){if(this.innerHTML.match(/read post/i)){e.type="read%20post"}else{if(this.innerHTML.match(/quick read/i)){e.type="in%20brief"}else{if(this.innerHTML.match(/Related/)){e.type="related"}else{if(this.innerHTML.match(/Comment/)){e.type="comments"}else{if(this.innerHTML.match(/bio/i)){e.type="bio"}else{if(Dom.hasClass(this.parentNode,"tag_wrap")){e.type="tag"}else{if(this.parentNode.className=="author"||this.parentNode.className=="byline"){e.type="author"}else{if(e.blog_id==2&&this.firstChild&&this.firstChild.tagName=="IMG"){e.type="image"}else{if(e.blog_id==2){e.type="headline"}else{if(e.blog_id==3&&this.parentNode.tagName&&this.parentNode.tagName=="H2"){e.type="headline"}else{if(e.blog_id==3&&this.parentNode.tagName&&this.parentNode.tagName=="P"){e.type="entry%20body"}else{if(e.zone_id==30){e.type="from-partners"}else{e.type="other"}}}}}}}}}}}}}e.sample=ClickTracker.sample;this.trackerImg.src="/clicktracking/front.php?"+JSON.stringify(e)}else{if(!Dom.hasClass(document.body,"big_news_class")){b=this;for(i=0;i<6;i++){if(b.id&&!Dom.hasClass(b,"ignore_id")&&!b.id.match(/yuievtautoid/)){a=b;break}b=b.parentNode}var e={url:"",type:"",id:-1,blog_id:-1,rank:-1,zone:-1,sample:ClickTracker.sample,vertical:ClickTracker.vertical_id};e.url=escape(this.href);a&&(e.type=escape(a.id));this.trackerImg.src="/clicktracking/front.php?"+JSON.stringify(e)}}c.preventDefault();if(ClickTracker.debug){console.log(this.trackerImg.src);console.log(e)}else{HPTrack.navigateAfterTrack(c,this.href,this.target,400)}},trackTicker:function(a){if(ClickTracker.trackClicks){if(!(url_chunks=a.match(/_([nb])_(\d+)\.html/))){window.location.href=a}blog_id=(url_chunks[1]=="n")?2:3;var b={url:escape(a),type:"ticker_flash",id:-1,blog_id:blog_id,rank:-1,zone:-1,vertical:ClickTracker.vertical_id};this.trackerImg=new Image();this.trackerImg.src="/clicktracking/front.php?"+JSON.stringify(b)}if(Dom.hasClass(document.body,"frontpage")){if(Dom.hasClass(document.body,"homepage")){ticker_area="front"}else{ticker_area=document.body.id}}else{ticker_area="secondary"}HPTrack.trackPageview("/t/a/ticker/"+ticker_area);window.location.href=a},trackComment:function(b,a){this.trackerImg=new Image();this.trackerImg.src="/clicktracking/best-of.php?comment_id="+b+"&entry_id="+a},deprecated_flagComment:function(b,a){this.trackerImg=new Image();this.trackerImg.src="/huff-send-comment.cgi?id="+b+"&entry_id="+a;Dom.addClass("flag_"+b,"flagged");$("flag_"+b).innerHTML="Flagged"},flagComment:function(c,a,b){var e=$("flag_"+c);if(e.innerHTML.indexOf("Flagged")==-1){this.trackerImg=new Image();this.trackerImg.src="/include/flagComment.php?type=abuse&blog_id="+b+"&cmt_id="+c+"&entry_id="+a;var d=parseInt(/\((\d+)\)/.exec(e.innerHTML)[1])+1;e.innerHTML="Flagged ("+d+")"}},favComment:function(c,a,b){var e=$("best_"+c);if(e.innerHTML.indexOf("Marked")==-1){this.trackerImg=new Image();this.trackerImg.src="/include/flagComment.php?type=best&blog_id="+b+"&cmt_id="+c+"&entry_id="+a;var d=parseInt(/\((\d+)\)/.exec(e.innerHTML)[1])+1;e.innerHTML="Marked as favorite ("+d+")";SNProject.track(c,"comment_favored",a)}},initRelatedTracker:function(){lists=Dom.getElementsByClassName("relatedposts","ul");for(var a=0;a<lists.length;a++){Dom.batch(lists[a].getElementsByTagName("a"),function(b){b.href="http://www.huffingtonpost.com/include/lib/RelatedTracker.php?type=related&utm_hp_ref="+document.URL+"&dest="+b.href})}lists=Dom.getElementsByClassName("topposts","ul");for(var a=0;a<lists.length;a++){Dom.batch(lists[a].getElementsByTagName("a"),function(b){b.href="http://www.huffingtonpost.com/include/lib/RelatedTracker.php?type=top&utm_hp_ref="+document.URL+"&dest="+b.href})}},init:function(){var a=ClickTracker.type=="from-partners"?"#partner_box a":"a";jQuery(document).delegate(a,"click",ClickTracker.trackMe)}};huff.unit("tmp/click_tracker",function(a){a(ClickTracker)});
function CommonPaginator(){this.init.apply(this,arguments)}CommonPaginator.prototype={init:function(a){this.currentPage=1;this.currentCustomPage=0;this.startPage=1;this.to_hide=0;this.lock=false;var b=this;huff.use("common_paginator",function(c){c.init(b,a)})},Previous:function(){var a=this;huff.use("common_paginator",function(b){b.Previous(a)})},Goto:function(a){var b=this;huff.use("common_paginator",function(c){c.Goto(b,a)})},Next:function(){var a=this;huff.use("common_paginator",function(b){b.Next(a)})}};huff.unit("tmp/common_paginator",function(a){a(CommonPaginator)});
var HPAds={ad_timezone_store:[],ad_store:[],iframe_ads_queue:[],iframe_ads_callback:[],iframe_ads_timeout:4000,iframe_ads_queue_running:false,ad_capchecked:false,ad_cap:"n",snpmodule_skin:false,dfp_tile_num:0,homepage_trailer:{},spot_rendered:{},page_spots:[],curr_page_config:false,full_page_config:false,current_platform:false,revsplit:{getAdId:function(c,b){if(typeof io_c3sd!="undefined"&&typeof io_c3sd.ads!="undefined"&&typeof io_c3sd.ads[c]!="undefined"){var d=io_c3sd.ads[c];return d.replace(/\s/g,"")}else{return b}}},hide_ugc_ads:function(){if(HPAds.ugc_ads_hidden){return}var b=jQuery('iframe[src*="adpage.html"]');for(x=0;b[x];x++){if(b[x].contentWindow.document.body.innerHTML.indexOf("ugc_flag")>1){jQuery(b[x]).closest(".ad_728_90b_fix,.ad_wrapper_top, .ad_wrapper_, .ad_wrapper").css("display","none");HPAds.ugc_ads_hidden=true}}},ugc_suppress_check:function(){if("undefined"!=typeof(twitter_suppress)&&twitter_suppress){jQuery("#twitter_block_holder").css("display","none");jQuery("#show_twitter_block").css("display","block");jQuery("#show_twitter_block").click(function(){jQuery("#twitter_block_holder").css("display","block");jQuery("#show_twitter_block").css("display","none");HPAds.hide_ugc_ads();return false})}else{jQuery("#show_twitter_block").css("display","none");jQuery("#twitter_block_holder").css("display","block")}if("undefined"!=typeof(comments_suppress)&&comments_suppress){if(typeof window.ConversationsLoader==="object"&&window.ConversationsLoader.hideConversations){window.ConversationsLoader.hideConversations()}else{jQuery(".comments_block_holder").css("display","none");jQuery("#show_comments_block").css("display","block");jQuery("#show_comments_block").click(function(){jQuery(".comments_block_holder").css("display","block");jQuery("#show_comments_block").css("display","none");HPAds.hide_ugc_ads();return false})}var b=jQuery("#huffpost-web-fb-comments");var c=jQuery("#huffpost-web-fb-comments-opener");if(b.length&&c.length){b.css("display","none");c.css("display","block").bind("click",function(){b.css("display","block");c.css("display","none");HPAds.hide_ugc_ads()})}}else{if(typeof window.ConversationsLoader==="object"&&window.ConversationsLoader.showConversations){window.ConversationsLoader.showConversations()}else{jQuery("#show_comments_block").css("display","none");jQuery(".comments_block_holder").css("display","block")}}},iframe_ads_queue_callback:function(c){if(c){this.iframe_ads_callback.push(c);if(this.iframe_ads_queue_running){return}}if((this.iframe_ads_queue.length==0)||(this.iframe_ads_timeout<=0)){this.iframe_ads_queue_running=false;if(this.iframe_ads_callback.length>0){for(var b=0;b<this.iframe_ads_callback.length;b++){this.iframe_ads_callback[b].call();this.iframe_ads_callback.slice(b,1)}}}else{this.iframe_ads_timeout=this.iframe_ads_timeout-200;this.iframe_ads_queue_running=true;setTimeout("HPAds.iframe_ads_queue_callback(null)",200)}},adSonar:function(c,d,b,e){document.write('<script type="text/javascript">adsonar_placementId='+c+";adsonar_pid="+d+";adsonar_ps=-1;adsonar_zw="+b+";adsonar_zh="+e+';adsonar_jv="ads.tw.adsonar.com";<\/script><script language="JavaScript" src="http://js.adsonar.com/js/tw_dfp_adsonar.js"><\/script>');if(location.href.match("debugadcode")){document.write('<div style="padding:5px;background-color:#e8d4f4;font-family:arial,helvetica,sans-serif;font-size:9px">');document.write("<b>ADSONAR PLACEMENT</b>");document.write("<br />plid: "+c);document.write("<br />pid: "+d);document.write("<br />width: "+b);document.write("<br />height: "+e);document.write("</div>")}},iframe_ads_queue_remove:function(c){for(var b=0;b<this.iframe_ads_queue.length;b++){if(this.iframe_ads_queue[b]==c){this.iframe_ads_queue.splice(b,1);break}}},ad_check_savecookie:function(){var c="huffpost_adssale";if(this.ad_capchecked){return}var b=HuffCookies.getCookie(c);if(b=="y"){HuffCookies.setCookie(c,"n",12);this.ad_cap="y"}else{if(b=="n"){this.ad_cap="n"}else{HuffCookies.setCookie(c,"y",-1)}}this.ad_capchecked=true},ad_store_push:function(j,h,d,g,b,k,f,c){var e=c||false;HPAds.ad_store[j]={ad_type:h,ad_container_width:d,ad_content:g,defer:b,positioned_callback:k,slug:f,refresh_rate:e}},homepage_trailer_add:function(e,d,c,b){if(HPAds.homepage_trailer[e]){HPAds.homepage_trailer[e].video_params=d}if(b){QV.popHomepageTrailer(e,c)}},ads_ord:function(){return ord},ads_client_info:function(){var f="";var c="null";var d="null";if(HPBrowser.OS()=="Windows"){c="win"}else{if(HPBrowser.OS()=="Linux"){c="lin"}else{if(HPBrowser.OS()=="Mac"){c="mac"}}}var b=HPBrowser.nameBrowser();if(b=="Explorer"){d="ie"}else{if(b=="Firefox"){d="ff"}else{if(b=="Chrome"){d="ch"}else{if(b=="Opera"){d="op"}else{if(b=="Safari"){d="sa"}else{if(b=="Konqueror"){d="ko"}else{if(b=="Camino"){d="ca"}else{if(b=="OmniWeb"){d="om"}}}}}}}}var e=HPUtil.getQueryVariables();var g=new Array();if(typeof(e.no_keyvalue)!="undefined"){g=e.no_keyvalue.split(",")}if(g.inArray("plat")===false){f+="plat="+c+";"}if(g.inArray("br")===false){f+="br="+d+";"}if(g.inArray("bv")===false){f+="bv="+HPBrowser.major_version()+";"}if(g.inArray("subbv")===false){f+="subbv="+HPBrowser.minor_version()}return f},ads_u_value:function(){var d=HuffCookies.getSNPstatus()=="1"?"y|":"|";var f=document.cookie;var e="__qseg=";var b=f.indexOf(e);if(b!=-1){if((cei=f.indexOf(";",b+e.length))==-1){cei=f.length}a=unescape(f.substring(b+e.length,cei));d+=a.replace(/\|{0,1}Q_/gi,",").replace(/^,/,"")}return d},ads_inf_value:function(){var c=HuffCookies.getUserInfluence();var b=c.commented.value==1||c.shared.value==1||c.emailed.value==1||c.blogged.value==1||c.blogged.value==1?"y":"";return b},adtech_client_side_inf:function(){var c=HPUtil.getQueryVariables();var d=new Array();if(typeof(c.no_keyvalue)!="undefined"){d=c.no_keyvalue.split(",")}var b=HuffCookies.getUserInfluence();if((b.commented.value==1||b.shared.value==1||b.emailed.value==1||b.blogged.value==1||b.blogged.value==1)&&(d.inArray("inf")===false)){return"kvinf=y;"}return""},ads_client_side_qvs:function(){var g="";var l=false;var k="__qseg=";var h=document.cookie;var m=h.indexOf(k);var j=HPUtil.getQueryVariables();var e=new Array();if(typeof(j.no_keyvalue)!="undefined"){e=j.no_keyvalue.split(",")}if(m!=-1){if((cei=h.indexOf(";",m+k.length))==-1){cei=h.length}l=unescape(h.substring(m+k.length,cei))}if((HuffCookies.getSNPstatus()=="1")&&(e.inArray("snn")===false)){g+="snn=y;"}var b=HuffCookies.getUserInfluence();if((b.commented.value==1||b.shared.value==1||b.emailed.value==1||b.blogged.value==1||b.blogged.value==1)&&(e.inArray("inf")===false)){g+="inf=y;"}this.ad_check_savecookie();if(e.inArray("cap_12")===false){g+="cap_12="+this.ad_cap+";"}if(e.inArray("ref")===false){var f=/ref=([^&]+)/ig;var d;while((d=f.exec(location.search))!=null){g+="utm_hp_ref="+d[1]+";"}}if(e.inArray("qcs")===false){g+=(l?l.replace(/\|{0,1}Q_/gi,";qcs=").replace(/^;/,"")+";":"")}return g},timeout_store:{},ad_move_to_place:function(e,o){var k=HPAds.ad_store[e];var l=k.ad_type;var d=k.ad_container_width;if("by_request"==l&&!o&&!k.defer){setTimeout(function(){HPAds.ad_reload(e)},2000)}else{if("dom_move"==l&&!o&&!("pushdown"==e&&"Explorer"==HPBrowser.nameBrowser())){document.getElementById("ad_"+e).innerHTML="";document.getElementById("ad_"+e).appendChild(document.getElementById("ad_store_"+e));YAHOO.util.Dom.removeClass("ad_store_"+e,"ad_store")}else{if("css_positioned"==l){var h=document.getElementById("ad_store_"+e);if(h.clientHeight>59){var m=document.createElement("IMG");m.src="/images/spacer.gif";m.width=h.clientWidth;m.height=h.clientHeight;Dom.setStyle(m,"margin","0");Dom.setStyle(m,"padding","0");var c=document.getElementById("ad_"+e);if(c.hasChildNodes()){c.removeChild(c.firstChild)}document.getElementById("ad_"+e).appendChild(m);var g=YAHOO.util.Dom.getXY(m);var j=YAHOO.util.Dom.getXY(document.getElementById("wrapper"))[0];var b=YAHOO.util.Dom.getXY(document.getElementById("wrapper"))[1];h.style.top=parseInt(parseInt(g[1])-b)+"px";h.style.left=parseInt(parseInt(g[0]-j))+"px";YAHOO.util.Dom.removeClass(h,"ad_store");h.style.visibility="visible";h.style.position="absolute";if(HPAds.timeout_store[e]){clearInterval(HPAds.timeout_store[e].interval)}if(k.positioned_callback&&typeof(k.positioned_callback)=="function"){k.positioned_callback()}}else{if(!HPAds.timeout_store[e]){HPAds.timeout_store[e]={interval:setInterval(function(){HPAds.ad_move_to_place(e)},200),attempt:1}}else{if(HPAds.timeout_store[e].attempt<12){HPAds.timeout_store[e].attempt++}else{clearInterval(HPAds.timeout_store[e].interval);HPAds.timeout_store[e]=null;HPAds.ad_store[e]=null;var f=document.getElementById("ad_store_"+e);var n=f.parentNode;n.removeChild(f)}}}}}}},ad_store_move_to_place:function(c){var b=HPAds.ad_store;for(i in b){if(b[i]&&typeof(b[i])=="object"){HPAds.ad_move_to_place(i,c)}}if(location.href.match("debugadcode")){jQuery('script[src*="PlayerSeed.js"]').each(function(e){var h=jQuery(this).attr("src").match("&siteSection=");var g='<div style="padding:5px;background-color:#e8d4f4;font-family:arial,helvetica,sans-serif;font-size:9px;clear:both">Player: 5min '+(h?"commercial":"classic");var d=commercial_video.site_and_category!==""?commercial_video.site_and_category:"N/A";if(h&&typeof(commercial_video)=="object"){g+="<br />Site Section: "+d}var f=commercial_video["package"]!==""?commercial_video["package"]:"N/A";if(h&&typeof(commercial_video)=="object"){g+="<br />Sponsorship: "+f}g+="</div>";jQuery(this).parent().append(g)});jQuery('script[src*="videoplayer/loader.js"]').each(function(d){var e='<div style="padding:5px;background-color:#e8d4f4;font-family:arial,helvetica,sans-serif;font-size:9px;clear:both">Player: Brightcove<br />Sponsorship: '+AOLVP_cfg[d].sponsorship+"</div>";jQuery("#"+AOLVP_cfg[d].id).after(e)})}},ad_reload:function(p,q,d){if(!HPAds.ad_check_page_config(p)){return false}var u;if(!q||q==""){if("slideshow_300x250_req"===p){u=jQuery('.ad_wrapper[id^="ad_slideshow_"]:visible')}else{if("slideshow_728x90_req"===p){u=jQuery('.ad_wrapper[id^="ad_slideshow_"]:visible')}else{u=jQuery("#ad_"+p)}}}else{u=jQuery("#"+q)}u=u[0];if(u&&HPAds.ad_store[p]){if(HPAds.ad_store[p].reload_count&&HPAds.ad_store[p].refresh_rate&&(HPAds.ad_store[p].reload_count%Math.round(100/HPAds.ad_store[p].refresh_rate))){HPAds.ad_store[p].reload_count++;return false}var o=HPAds.ad_store[p].ad_content;try{var f=jQuery.parseJSON(o);if("undefined"!=typeof(f.adRealMediaPos)&&"korea"==HPConfig.site){var b=window.ord||Math.floor(Math.random()*10000000000000000);var c=realmedia_page_tag;var g="";if(p=="slideshow_300x250_req"||p=="slideshow_728x90_req"){var j=p.match(/([0-9]+)x([0-9]+)/);g='width="'+j[1]+'" height="'+j[2]+'"';if(korea_realmedia_page_tag_slideshow!=undefined){c=korea_realmedia_page_tag_slideshow}}var h="http://ad.hani.co.kr/RealMedia/ads/adstream_sx.ads/www.huffingtonpost.kr/"+c+"@"+f.adRealMediaPos+"?"+b+"?";u.innerHTML="<iframe "+g+' src="'+h+'" scrolling="no" frameborder="0" marginwidth="0" marginheight="0" noresize="" allowtransparency="true"></iframe>';if(location.href.match("debugadcode")){var s=jQuery('<div style="position:relative;z-index:800"><div style="z-index:800;position:absolute;top:0px;left:0px;padding:5px;background-color:#e8d4f4;font-family:arial,helvetica,sans-serif;font-size:9px"><div style="width:250px;font-size:11px;font-weight:bold">RealMedia</div>Position: '+f.adRealMediaPos+"</div></div>");jQuery(u).after(s)}}else{if("undefined"!=typeof(f.adRealMediaPos)&&"brazil"!=HPConfig.site){realmedia_url="/ads/ads_realmedia.php?ad_pos="+f.adRealMediaPos+"&ad_name="+p+"&site="+HPConfig.site;if("italy"===HPConfig.site&&window.OAS_sitepage){realmedia_url+="&"+encodeURIComponent(OAS_sitepage)}var l=250;if("spain"===HPConfig.site&&"undefined"!==typeof PBS&&(p==="quickread"||p==="quickread_most_popular")){l=0}u.innerHTML='<iframe id="'+q+'_proxy" src="'+realmedia_url+'" scrolling="no" frameborder="no" border="0" width="300" height="'+l+'" style="width:300px;height:'+l+'px;"></iframe>';if(location.href.match("debugadcode")){var s=jQuery('<div style="position:relative;z-index:800"><div style="z-index:800;position:absolute;top:0px;left:0px;padding:5px;background-color:#e8d4f4;font-family:arial,helvetica,sans-serif;font-size:9px"><div style="width:250px;font-size:11px;font-weight:bold">RealMedia</div>Position: '+f.adRealMediaPos+"</div></div>");jQuery(u).after(s)}}else{if("brazil"==HPConfig.site&&"undefined"!=typeof(f.adSpotSizeWidth)&&"undefined"!=typeof(f.adSpotSizeHeight)){var r=window.dfp_brazil_ord||Math.floor(Math.random()*10000000000000000);dfp_brazil_pos="";if("undefined"!=typeof(f.adRealMediaPos)&&1!=f.adRealMediaPos){dfp_brazil_pos=";pos="+f.adRealMediaPos}dfp_brazil_iframe_url="http://ad.doubleclick.net/N9287/adi/brasilpost;sz="+f.adSpotSizeWidth+"x"+f.adSpotSizeHeight+";ord="+r+dfp_brazil_pos;u.innerHTML='<iframe id="'+q+'_proxy" src="'+dfp_brazil_iframe_url+'" scrolling="no" frameborder="no" border="0" width="'+f.adSpotSizeWidth+'" height="'+f.adSpotSizeHeight+'" style="width:'+f.adSpotSizeWidth+"px;height:"+f.adSpotSizeHeight+'px;"></iframe>';if(location.href.match("debugadcode")){var s=jQuery('<div style="position:relative;z-index:800"><div style="z-index:800;position:absolute;top:0px;left:0px;padding:5px;background-color:#e8d4f4;font-family:arial,helvetica,sans-serif;font-size:9px"><div style="width:250px;font-size:11px;font-weight:bold">RealMedia</div>Position: '+dfp_brazil_pos+"("+f.adSpotSize+")</div></div>");jQuery(u).after(s)}}else{if("undefined"!=typeof(f.AdEnginePlacement)){var k=ads_gettag(f.AdEnginePlacement);if("germany"===HPConfig.site&&this.is_slideshow_spot(p)){if(k&&/ord=.+/i.test(k)){var m="ord="+Math.floor(10000000000000*Math.random())+";?";k=k.replace(/ord=.+/i,m)}}u.innerHTML='<iframe id="'+q+'_proxy" src="'+k+'" scrolling="no" frameborder="no" border="0" width="300" height="250" style="width:300px;height:250px;"></iframe>';if(location.href.match("debugadcode")){var s=jQuery('<div style="position:relative;z-index:800"><div style="z-index:800;position:absolute;top:0px;left:0px;padding:5px;background-color:#e8d4f4;font-family:arial,helvetica,sans-serif;font-size:9px;color:black"><div style="width:250px;font-size:11px;font-weight:bold">AdEngine</div>Position(s): '+f.AdEnginePlacement+"</div></div>");jQuery(u).after(s)}}else{if("undefined"!=typeof(f.SmartAdsFormatId)){if("undefined"!=typeof(get_sas_iframe)){u.innerHTML='<iframe id="'+q+'_proxy" src="'+get_sas_iframe(f.SmartAdsFormatId)+'" scrolling="no" frameborder="no" border="0" width="300" height="250" style="width:300px;height:250px;"></iframe>'}if(location.href.match("debugadcode")){var s=jQuery('<div style="position:relative;z-index:800"><div style="z-index:800;position:absolute;top:0px;left:0px;padding:5px;background-color:#e8d4f4;font-family:arial,helvetica,sans-serif;font-size:9px;color:black"><div style="width:250px;font-size:11px;font-weight:bold">SmartAds</div>Position(s): '+f.SmartAdsFormatId+"</div></div>");jQuery(u).after(s)}}else{if("japan"===HPConfig.site&&"undefined"!==typeof f.CCIPlacementTag){var t="";var v=[];var n="<!-- IFRAMEtag start --><iframe id='"+q+"' src='http://web-jp.ad-v.jp/adam/detect?tag=htm&cat=huffpost_pc."+f.CCIPlacementTag+"&format="+f.CCIPlacementTag+"&huff_tag=__ENTRY_TAGS__&huff_eid=__ENTRY_ID__&robot=false' width='300' height='250' frameborder='no' border='0' marginwidth='0' marginheight='0' scrolling='no'></iframe><!-- IFRAMEtag end -->";huff.use("conf",function(B){if(p==="quickread"||p==="quickread_most_popular"){if(B.get("quickread_entry_id")){t=B.get("quickread_entry_id");var y=B.get("quickread_entry_normalized_tags");for(var e in y){var A=y[e].tag_name;if("string"===typeof A){v.push(A)}}}}else{if(p==="slideshow_300x250_req"){t=HPConfig.entry_id||"";v=HPConfig.entry_tags||[]}}n=n.replace("__ENTRY_TAGS__",v.join());n=n.replace("__ENTRY_ID__",t);u.innerHTML=n;if(location.href.match("debugadcode")){var z=jQuery('<div style="position:relative;z-index:800"><div style="z-index:800;position:absolute;top:0px;left:0px;padding:5px;background-color:#e8d4f4;font-family:arial,helvetica,sans-serif;font-size:9px;color:black"><div style="width:250px;font-size:11px;font-weight:bold">CCI_Placements</div>Position(s): '+f.CCIPlacementTag+"</div></div>");jQuery(u).after(z)}})}else{f.magic_number=HPAds.revsplit.getAdId(p,f.magic_number);if(f.height=="RR"){htmlAdWHDyn(f.magic_number,f.sizes,f.call_type,u)}else{if(HPAds.is_slideshow_spot(p)&&HPAds.spot_reload_count(p)>0){adsReloadAd(q)}else{htmlAdWH(f.magic_number,f.width,f.height,f.call_type,u)}}if("undefined"!=typeof(f.debugadcode)&&f.debugadcode){var s=jQuery('<div style="position:relative;z-index:800"><div style="z-index:800;position:absolute;top:0px;left:0px;padding:5px;background-color:#e8d4f4;font-family:arial,helvetica,sans-serif;font-size:9px"><div style="width:250px;font-size:11px;font-weight:bold">AdTech</div>'+f.debugadcode.replace("customAdId",f.magic_number)+"</div></div>");jQuery(u).after(s)}}}}}}}}catch(w){var b=parseInt(Math.random()*1000000000000000);if(/ajax_ord=/i.test(o)){o=o.replace(/ajax_ord=\d*;/ig,"ajax_ord="+b+";")}else{o=o.replace(/ord=/ig,"ajax_ord="+b+";ord=")}if(HPAds.ad_store[p].slug){u.className=u.className+" ad_wrapper_"+HPAds.ad_store[p].slug}if(typeof d!=="undefined"){jQuery(u).replaceWith(o)}else{u.innerHTML=o}}if(HPAds.ad_store[p].reload_count){HPAds.ad_store[p].reload_count++}else{HPAds.ad_store[p].reload_count=1}}if("slideshow_300x250_req"===p){HPAds.slideshow_tracking()}},spot_reload_count:function(b){return("undefined"!==typeof HPAds.ad_store[b]&&HPAds.ad_store[b].reload_count)?HPAds.ad_store[b].reload_count:0},is_slideshow_spot:function(b){return("slideshow_300x250_req"===b||"slideshow_728x90_req"===b)},ad_html_wh:function(b,c){return},ad_check_handlers:{referer:function(b){return(document.referrer.search(b)>=0)}},ad_check_wrapper:function(b,c){if(typeof(this.ad_check_handlers[b])!="undefined"){return this.ad_check_handlers[b](c)}else{return true}},trackSponsorContent:function(c,b){if(b&&b.length){HPTrack.trackPageview(c.replace(/__SPONSOR__/g,b))}},ad_flight_to_store:function(e,b,d,c){if("undefined"==typeof(HPAds.ad_timezone_store[e])){HPAds.ad_timezone_store[e]=new Array()}HPAds.ad_timezone_store[e].push({content:b,date_start:d,date_end:c})},time_check:function(j){var h=new Date();var g="";g+=h.getFullYear();var f=h.getMonth()+1;f+="";if(1==f.length){g+="0"}g+=f;var c=h.getDate()+"";if(1==c.length){g+="0"}g+=c;var b=h.getHours()+"";if(1==b.length){g+="0"}g+=b;var e=h.getMinutes()+"";if(1==e.length){g+="0"}g+=e;g=parseInt(g);jQuery(HPAds.ad_timezone_store[j]).each(function(k,d){try{if(d.date_start>=g||d.date_end<=g){HPAds.ad_timezone_store[j].splice(k,1)}}catch(l){HPAds.ad_timezone_store[j].splice(k,1)}})},ad_flight_store_render:function(d,b){try{if(!b){HPAds.ad_timezone_store[d]=new Array(HPAds.ad_timezone_store[d].pop())}jQuery(HPAds.ad_timezone_store[d]).each(function(f,e){document.write(e.content)})}catch(c){}},page_config_set:function(b){if(typeof HPAds.full_page_config.flights!="undefined"){for(var c=0;c<HPAds.full_page_config.flights.length;c++){if(HPAds.full_page_config.flights[c].name==b){HPAds.curr_page_config=HPAds.full_page_config.flights[c];break}}}},ad_check_page_config:function(c){var b=(typeof ad_overrides=="undefined"||(ad_overrides.spots&&jQuery.inArray(c,ad_overrides.spots)>-1));if(!HPAds.curr_page_config&&(typeof aol_devil_flag!=="undefined")&&aol_devil_flag){HPAds.page_config_set("devil")}if(HPAds.curr_page_config){if(HPAds.curr_page_config.mode=="all_but"){b=(jQuery.inArray(c,HPAds.curr_page_config.spots)==-1)}else{b=(jQuery.inArray(c,HPAds.curr_page_config.spots)>-1)}}return b},ad_onload:function(e,fn){jQuery(e).bind("load",function(){eval(fn)})},ad_uac_onload_handler:function(f,g,e,c){var g="#"+jQuery(g).parent().parent().attr("id");var f=typeof f!=="undefined"?g+f:g;var h=c||3;var d=1;var b=setInterval(function(){if(jQuery(f).length){jQuery(g).addClass(e)}if(h==d){clearInterval(b)}d++},300)},get_banner_ids:function(){var b=new Array();try{jQuery('iframe[title="Ad"]').each(function(e,f){var d=jQuery(f).attr("banid").split("|");if("undefined"!=typeof(d[0])&&d[0].length){b.push(d[0])}})}catch(c){}return b},get_banners_str:function(){try{var c=HPAds.get_banner_ids();return c.join()}catch(b){return""}},lookbook:{click_track:function(b){if(typeof HPAds.lookbook.href!=="undefined"){jQuery(b).each(function(){this.href=HPAds.lookbook.href+this.href})}},imp_track:{init:function(b){if(typeof HPAds.lookbook.src!=="undefined"){this.setup(b)}},rand:function(){return Math.floor(Math.random()*10000000)},setup:function(b){if(jQuery("div.hp-lookbook-tracking").length==0){jQuery(b).append('<div class="hp-lookbook-tracking" style="display:none;"></div>')}this.exec()},exec:function(){jQuery("div.hp-lookbook-tracking").append('<img src="'+HPAds.lookbook.src+"?"+this.rand()+'" alt="" border="0" height="1" width="1"/>')}}},ad_sharebox_260x60_fix:function(){jQuery(document).ready(function(){setTimeout(function(){if(jQuery("#ad_sharebox_260x60 iframe").height()>10){jQuery("#ad_sharebox_260x60").parent().addClass("padding_bottom_5 margin_right_20").removeClass("hidden")}if(jQuery.browser.msie){jQuery(".ad_share_box").addClass("display_block").removeClass("hidden")}},2000)})},get_dfp_tile_num:function(){return ++HPAds.dfp_tile_num},get_polar_mn:function(b,c){for(var d=0;d<polar_config.length;d++){if(polar_config[d].label==c){return polar_config[d].id}}},get_platform:function(){return HPAds.current_platform},slideshow_tracking:function(){if(typeof SPR!="undefined"&&typeof __reach_config!="undefined"){SPR.Reach.collect(__reach_config)}}};huff.unit("tmp/hp_ads",function(b){b(HPAds);jQuery(document).ready(function(){var c=15;var d=setInterval(function(){HPAds.ugc_suppress_check();--c;if(!c||"undefined"!==typeof comments_suppress){clearInterval(d)}},5000)})});
window._||(window._=function(a){return a});window.ngettext||(window.ngettext=function(a){return a});window.sprintf||(window.sprintf=function(a){return a});var QuickLogin={};QuickLogin.SocialLogout=function(a){HuffConnect.SocialLogout(a);return};QuickLogin.FacebookLogout=function(a){HuffConnect.FacebookLogout(a);return};QuickLogin.pop=function(){HPConnect.Login();return};QuickLogin.onLoginSuccess=function(){HuffConnect.Login.onLoginSuccess();return};QuickLogin.googleAdsExec=function(a){_google_vertical_name=(typeof _google_vertical_name!="undefined")?_google_vertical_name:"";_google_hints=(typeof _google_hints!="undefined")?_google_hints:"";_google_test_channel=(typeof _google_test_channel!="undefined")?_google_test_channel:"";if(document.getElementById("contextual_ad_unit_1")){HuffPoUtil.WEDGJE.google_ads.init({ad_channel:"8073093451,"+_google_vertical_name+",9299244974,"+_google_test_channel,hints:_google_hints+" "+a,hp_dest_id:"contextual_ad_unit_1"})}if(document.getElementById("contextual_ad_unit_2")){HuffPoUtil.WEDGJE.google_ads.init({ad_channel:"8073093451,"+_google_vertical_name+",4661083346,"+_google_test_channel,hints:_google_hints+" "+a,max_num_ads:"1",hp_dest_id:"contextual_ad_unit_2"})}HuffPoUtil.WEDGJE.google_ads.exec()};huff.unit("tmp/quick_login",function(a){a(QuickLogin)});
HPFB={_redirect:"",enabled:true,session:false,authResponse:false,api_key:false,app_id:false,app_namespace:false,initialized:false,is_logged_in_on_huffpost:false,user_status:"unknown",user_just_login:false,callback_init:null,initialized_session:false,force_login:false,isFBEnabled:function(){return(HPFB.enabled!==false)},maybeFacebookConnected:function(){if(HPFB.authResponse){return true}return false},init:function(a){if(!a){el=document.getElementById("fConnect_img_container");if(el){el.style.display="block"}}if("undefined"!==typeof FB){HPFB.initUser()}else{window.fbAsyncInit=function(){var b={appId:HPFB.app_id,cookies:false,xfbml:true,oauth:true};if(window.HPConfig&&HPConfig.current_web_address){b.channelUrl="http://"+HPConfig.current_web_address+"/facebook/channel.html"}if("undefined"!==typeof HPUtil&&HPUtil.getUrlVar("fb_no_channel")==="1"){delete (b.channelUrl)}FB.init(b);HPFB.initEvents();HPFB.initUser()};(function(b){var c=jQuery.I18N.getLocale()||"en_US";c=(c=="es_US")?"es_LA":c;c=(c=="fr_MB")?"fr_FR":c;b(window).bind("load",function(){b("<script>",{type:"text/javascript",src:"//connect.facebook.net/"+c+"/all.js",async:true}).appendTo("#fb-root")})})(jQuery)}},initEvents:function(){FB.Event.subscribe("auth.login",HPFB.handleStateChange);HPFB.Tracking.Subscribe(["Liked","Unliked","Recommended","Unrecommended"],[],false,HPFB.trackFBAction);HPFB.Tracking.Init()},trackFBAction:function(f,a,d){var b=d.getAttribute("author_nickname");if(b&&"Liked"==f){jQuery.ajax({url:"/users/favorite-bloggers/fan_action.php",data:"fan="+b+"&action=add",type:"POST",success:function(){},error:function(){}})}var e={};if(d.getAttribute("entry_id")){e.entity_type=2;e.entity_id=parseInt(d.getAttribute("entry_id"))}else{if(d.getAttribute("entity_type")){e.entity_type=parseInt(d.getAttribute("entity_type"));e.entity_id=parseInt(d.getAttribute("entity_id"))}}if(e.entity_type){if("Liked"==f||"Recommended"==f){e.action=1}else{if("Unliked"==f||"Unrecommended"==f){e.action=2}else{return{}}}}if(![0,1,2].inArray(e.entity_type)){return{}}if(isNaN(e.entity_id)||(e.reference_id&&isNaN(e.reference_id))){return{}}if(![1,2].inArray(e.action)){return{}}if(window.HPConfig&&HPConfig.inst_type=="dev"){return{}}if(!HPFB.authResponse||"undefined"===typeof(HPFB.authResponse.userID)){return{}}var c=function(){var g="http://fb-stats.huffpost.com/";var h=g+"?"+HPFB.authResponse.userID+"&"+Math.random().toString(16).replace("0.","")+"&"+escape(e.entity_type)+"&"+escape(e.entity_id)+"&"+escape(e.action)+"&"+(e.reference_id||0);my_img=document.createElement("img");my_img.setAttribute("src",h);my_img.setAttribute("style","height:1px; line-height:1px; overflow:hidden");var i=document.getElementById("_snp_tracking");i&&i.appendChild(my_img);var j=d.getAttribute("hp_track")||"Unknown";HPTrack.trackSocial("facebook",f,"["+HPTrack.Module.getTrackingPrefix(d)+"] - "+j)};c();return{}},handleStateChange:function(a){HPFB.authResponse=a.authResponse;HPFB.user_status=a.status;if(typeof HuffZodiac1!=="undefined"&&document.getElementById("zodiac_container")&&"connected"==HPFB.user_status){HuffZodiac1.buildHtml()}},initUser:function(a,b){this.initialized=true;var c=function(e,d){if(typeof(HPFB.mobileAuthFacebookCallback)!=="undefined"){HPFB.mobileAuthFacebookCallback(e.status)}var f=HuffCookies;if(typeof(SNProject)!=="undefined"){SNProject.fanCheck()}HPFB.user_status=e.status;if(e.status=="notConnected"&&!f.getUserName()){HPFB.initialized_session=true;if(!window.IS_NEWSGLIDE&&!window.IS_CHROMEAPP&&!/twitter\.com/.test(document.referrer)){HPUtil.addCSS("hp_modules/module.facebook_promo.css");HuffPoUtil.onAvailable("#facebook_promo",function(){$("fb_facepile").innerHTML='<fb:facepile max_rows="2" width="264px"/>';var g=HPTrack.Module("fb_promo","Facebook Promo");g.impression();jQuery("#facebook_promo_link").click(function(h){h.preventDefault();g.click("Connect with Facebook");linkSocialAccount.checkLoginStatus("facebook")})});setTimeout(function(){HPFB.loadFacePilePromo()},1000)}}else{if(e.status=="connected"){HPFB.authResponse=e.authResponse;huff.use("conf",function(g){g.set("hpfb/user_id",HPFB.authResponse.userID);g.set("hpfb/access_token",HPFB.authResponse.accessToken);g.set("hpfb/user_status",HPFB.user_status)});if(typeof SNPModule!=="undefined"&&typeof Recommendations!=="undefined"){Recommendations.load({fb_session:HPFB.authResponse,status:HPFB.user_status})}window.HPUtil&&window.HPUtil.initUserNavStatus();HPFB.initialized_session=true;if(typeof HuffConnect!=="undefined"&&!f.getUserName()&&(d||!f.getCookie("autologin"))){if(HPUtil.GetEntryID()){HuffConnect.Login.onLoginSuccessCallback=function(){var g=HPFB.callback_init||function(){if(HPFB.user_just_login){if(window.IS_NEWSGLIDE){$(document).trigger("userlogedin");HuffConnect.hideModal()}else{if(window.IS_CHROMEAPP){ChromeApp.Login&&ChromeApp.Login.Collection.Instance.fireEvent("userlogedin");HuffConnect.hideModal()}else{location.href=location.href}}return}if(-1===window.location.href.indexOf("just_reloaded")){if(window.IS_NEWSGLIDE){$(document).trigger("userlogedin");HuffConnect.hideModal()}else{if(window.IS_CHROMEAPP){ChromeApp.Login&&ChromeApp.Login.Collection.Instance.fireEvent("userlogedin");HuffConnect.hideModal()}else{window.location.href=HPUtil.AddStringToQueryString(window.location.href,"just_reloaded=2")}}}};g();if(HPFB.callback_init){HPFB.callback_init=null}}}else{HuffConnect.Login.onLoginSuccessCallback=function(){HPUtil.reinit();if(HPFB.callback_init){HPFB.callback_init();HPFB.callback_init=null}}}HPFB.authenticate(!!!d,b)}else{if(f.getUserName()){HPFB.is_logged_in_on_huffpost=true;if(HPFB.callback_init){HPFB.callback_init();HPFB.callback_init=null}}}}else{HPFB.initialized_session=true}}return};if(a){c(a,true)}else{FB.getLoginStatus(c)}},loadFacePilePromo:function(){var d="hp_disable_fb_promo";var c=HuffCookies;if(c.getCookie(d)){return}var a="cookie_test";c.setCookie(a,"1");if(c.getCookie(a)){c.destroyCookie(a)}else{return}if(-1!==location.href.indexOf("stylelist.com")){return}var b=function(){FB.XFBML.parse(document.getElementById("facebook_promo_lb_friends"));var e=HPTrack.Module("fb_promo_lb","Facebook Promo Lightbox");e.impression();jQuery("#facebook_promo_lb_connect,#facebook_promo_lb_mock").bind("click",function(){e.click("Connect with Facebook");linkSocialAccount.checkLoginStatus("facebook");return})};HuffConnect.socialModal({inner_html:'<div class="facebook_promo_lb"><div class="facebook_promo_lb_head facebook_promo_text">'+_("Check out stories you might like,<br/>and see what your friends are sharing!")+'</div><div class="facebook_promo_lb_friends float_left" id="facebook_promo_lb_friends"><fb:facepile app_id="46744042133" width="264" style="display:block" max_rows="4"></fb:facepile></div><div id="facebook_promo_lb_mock" class="facebook_promo_lb_sprite facebook_promo_lb_screens float_right cursor_pointer" title="'+_("Connect with Facebook")+'"></div><div class="facebook_promo_lb_connect clear_first"><img class="cursor_pointer" id="facebook_promo_lb_connect" src="/images/facebook_promo_connect.png?3" /></div></div>',modal_head_image:"",modal_subhead_image:"",onclose:function(){c.setCookie(d,1,(24*60))},onshow:b});return}};HPFB.overridden_permissions=false;HPFB.login=function(h,g,d,f,i){var c=d||{};f=f||false;i=i||false;if(!HPFB.enabled){HPFB.showErrorLightbox();return}var b=new Array();b[0]={attempt_key:"/t/a/facebook/perms-test/lots/attempt",success_key:"/t/a/facebook/perms-test/lots/success",permissions:"user_about_me,user_birthday,user_interests,user_likes,user_location,read_stream,email"};b[1]={attempt_key:"/t/a/facebook/perms-test/some/attempt",success_key:"/t/a/facebook/perms-test/some/success",permissions:"user_birthday,user_location,email"};HPFB.ab_set=b[0];var e=HPFB.ab_set.permissions;if(HPFB.overridden_permissions!==false){e=HPFB.overridden_permissions}if("string"===typeof f&&f!==""){e=e+","+f}g=undefined===g?true:g;HPFB.is_logged_in_on_huffpost=HuffCookies.getUserName()?true:false;h="function"==typeof h?h:undefined;var a=HuffConnect.Login;if(!HPFB.authResponse||HPFB.force_login||i){FB.login(function(k){if(h){HPFB.callback_init=h;a.registerCallback("after_facebook_login",h,"facebook")}var j=function(m){HPFB.initUser(m,c);FB.Event.unsubscribe("auth.authResponseChange",arguments.callee)};if(k.authResponse){j(k)}else{if(k.status==="connected"){FB.Event.subscribe("auth.authResponseChange",j);var l={appId:HPFB.app_id,cookies:false,status:true,xfbml:true,oauth:true};if(window.HPConfig&&HPConfig.current_web_address){l.channelUrl="http://"+HPConfig.current_web_address+"/facebook/channel.html"}if("undefined"!==typeof HPUtil&&HPUtil.getUrlVar("fb_no_channel")==="1"){delete (l.channelUrl)}FB.init(l)}}},{scope:e})}else{if(!HPFB.is_logged_in_on_huffpost&&g){if(h){a.registerCallback("after_facebook_login",h,"facebook")}HPFB.authenticate(false,c)}else{if(h&&g){h()}else{if(HPFB.user_just_login){if(window.IS_NEWSGLIDE){$(document).trigger("userlogedin");HuffConnect.hideModal()}else{if(window.IS_CHROMEAPP){ChromeApp.Login&&ChromeApp.Login.Collection.Instance.fireEvent("userlogedin");HuffConnect.hideModal()}else{location.href=location.href}}}else{linkSocialAccount.provider="facebook";linkSocialAccount.FacebookPromtLogin()}}}}};HPFB.authenticate=function(e,h){var d=h||{};var b=HuffConnect.Login;if(!HPFB.enabled){HPFB.showErrorLightbox();return}HPFB.is_logged_in_on_huffpost=HuffCookies.getUserName()?true:false;var g=window.QuickLogin||false;if(!HPFB.authResponse){return false}if(HPFB.is_logged_in_on_huffpost){b.callback("after_facebook_login");return false}if(g&&e){g._auto_login=true}var a="";var c={};var f=HPFB.getSessionForServer();if(g&&g._auto_login){f+="&autologin=1";c.autologin=true}if(d&&d.fb_signup){f+="&not_login_to_huff=1"}if(g){delete (g._auto_login)}jQuery.ajax({type:"post",url:"/commentsv3/_facebookLogin.php",data:f,error:b.FacebookFail,success:function(j,k){var i=JSON.parse(j);var l=function(){if("function"===typeof(HPFB.onAuthenticateRequestSuccess)){HPFB.onAuthenticateRequestSuccess(i,c);return}b.FacebookSuccess(i,c)};switch(i.msg){case"success":HPFB.user_just_login=true;l();break;case"new_user":HPFB.user_just_login=true;HPFB.verifiedStatus(function(m){if(m){l()}else{i.msg="unverified_user";if("function"!==typeof(HPFB.onAuthenticateRequestSuccess)){HPFB.showVerifyUserModal()}else{l()}}});return;break;default:HPFB.user_just_login=false;l();break}}})};HPFB.verifiedStatus=function(a){a=a||function(b){};HPFB.ensureInit(function(){FB.api("/me?fields=verified",function(b){b=b||{};if(huff.beta){a(true);return}if(b.verified){a(b.verified)}else{a(false)}})})};HPFB.showVerifyUserModal=function(){huff.use("connect/provider","connect/auth","connect/modal",function(a,b,c){b.SubscribeEvent("auth.onModalShow",function(){b.Signup.unverified_fb_error_el.fadeIn();return});b.Signup.init()})};HPFB.getSessionForServer=function(d){if(!HPFB.enabled){HPFB.showErrorLightbox();return}var a=HPFB.authResponse;if(!a){return""}var e="fb_sig";var g="";var f={};for(var c in a){if(!(a&&a.hasOwnProperty(c))){continue}var b=e+"_"+c;if(g&&d!="obj"){g+="&"}if(c=="sig"){b=e}if(d!="obj"){g+=encodeURIComponent(b)+"="+encodeURIComponent(a[c])}else{if(d=="obj"){f[b]=a[c]}}}if(d=="obj"){return f}else{return g}};HPFB.authenticate.setCallback=function(){};HPFB.showErrorLightbox=function(){var a="hpfb_tmp_tech_issue",b=HuffCookies;if(!b.get(a)){b.set(a,1,24);HuffConnect.hideModal();HuffConnect.socialModal({inner_html:_("Sorry, This feature is temporarily disabled due to technical difficulties.  Please check back soon!"),inner_wrapper_class:"padding_10_0"})}};HPFB.markFBDisabled=function(){HPFB.ensureInit=HPFB.showErrorLightbox;if(typeof(FB)=="undefined"){FB={}}FB.ensureInit=HPFB.showErrorLightbox;HPFB.enabled=false};HPFB.ensureInit=function(c,b){if(!HPFB.enabled){HPFB.showErrorLightbox();return}HPFB.is_logged_in_on_huffpost=HuffCookies.getUserName()?true:false;var a=this;HPUtil.WaitForCondition.apply(this,[c,10,function(){return a.initialized}])};HPFB.ensureUserSessionStarted=function(b){if(!HPFB.enabled){HPFB.showErrorLightbox();return}HPFB.is_logged_in_on_huffpost=HuffCookies.getUserName()?true:false;var a=this;HPUtil.WaitForCondition.apply(this,[b,10,function(){return a.initialized_session}])};HPFB.waitForSession=function(c,b){var a=b||{};if(!HPFB.enabled){HPFB.showErrorLightbox();return}HPFB.is_logged_in_on_huffpost=HuffCookies.getUserName()?true:false;if(HPFB.authResponse){c();return}HPFB.login(c,false,a)};HPFB.getFBInfo=function(e,b){if(!HPFB.enabled){HPFB.showErrorLightbox();return}e=e||function(){};b=b||function(){};if(!HPFB.authResponse){return false}var c=HPFB.authResponse.userID;var d=FB.Data.query("SELECT name, email, pic_square, pic_square_with_logo, uid FROM user WHERE uid = {0}",c);function a(h,f){function g(i){if(i&&i[0]){h(i)}else{f(i)}}return g}d.wait(a(e,b))};HPFB.chrome_fix={stage:0,top:false,handler:false,time_to_stop:false};HPFB.streamPublish=function(c,h,i,k,g,j,a,d){if(!HPFB.enabled){HPFB.showErrorLightbox();return}HuffConnect.hideModal();if(h&&h.description&&h.description.length>422){h.description=h.description.substr(0,420)+"..."}if(c&&c.length>422){c=c.substr(0,420)+"..."}if(h&&h.media&&h.media[0]&&!h.media[0].src){h.media=[]}HPFB.is_logged_in_on_huffpost=HuffCookies.getUserName()?true:false;var f={method:"stream.publish",message:c,attachment:h,action_links:i,target_id:k,user_message_prompt:g,actor_id:d};var l;if(jQuery.browser.safari){l=jQuery("body")}else{l=jQuery("html,body")}var b=l.scrollTop();var e=function(m){l.scrollTop(b);if(j){j(m)}if(m&&m.post_id&&console&&console.log){console.log(m.post_id)}};if(HPFB.authResponse){FB.ui(f,e);return}else{HPFB.login(function(){FB.ui(f,e)},false)}};HPFacebookVoteV2={status:0,status_limit:0,vote_status:[],lock:false,init_done:false,init:function(e,h,b,g,a,f,d,c){if(this.init_done===true){return}this.init_done=true;this.userLoggedIn=HuffCookies.getUserName();this.voteUpCalled=false;this.entryId=e;this.entryTitle=h;this.entryBrief=b;this.permalink=g;this.entryImgSrc=a;this.inviteContent=f;this.userDefaultComment="";if("undefined"!=typeof(d)){this.bpage=d}else{this.bpage=""}if("undefined"!=typeof(c)){this.vote_status=c}else{this.vote_status=["Amazing","Inspiring","Funny","Scary","Hot","Crazy","Important","Weird"]}this.status_limit=this.vote_status.length;if(HuffCookies.get("facebook_user_has_voted")&&null==HuffCookies.get("facebook_user_is_voting")){this.status=HuffCookies.get("facebook_user_has_voted");HuffCookies.del("facebook_user_has_voted");HuffPoUtil.onPageReady(HPFacebookVoteV2.postVote());return}if(this.userLoggedIn&&null!=HuffCookies.get("facebook_user_is_voting")){this.status=HuffCookies.get("facebook_user_is_voting");HuffCookies.del("facebook_user_is_voting");HPFacebookVoteV2.onFacebookVote()}},postVoteCallback:function(data){try{eval("oVoteData = "+data)}catch(err){return}if(oVoteData.error){HPError.e(oVoteData.error);return}if(oVoteData.total_votes){if("news"==HPFacebookVoteV2.bpage||"blog"==HPFacebookVoteV2.bpage){if(jQuery("#link_vote_0").length>0){for(var i=0;i<HPFacebookVoteV2.status_limit;i++){if("undefined"!=typeof(oVoteData[i])){jQuery("#link_vote_"+oVoteData[i].status).html(HPFacebookVoteV2.vote_status[oVoteData[i].status]+"<br/> ("+oVoteData[i].count+")")}else{jQuery("#link_vote_"+i).html(HPFacebookVoteV2.vote_status[i])}}}if(jQuery("#bottom_link_vote_0").length>0){for(i=0;i<HPFacebookVoteV2.status_limit;i++){if("undefined"!=typeof(oVoteData[i])){jQuery("#bottom_link_vote_"+oVoteData[i].status).html(HPFacebookVoteV2.vote_status[oVoteData[i].status]+"<br/> ("+oVoteData[i].count+")")}else{jQuery("#bottom_link_vote_"+i).html(HPFacebookVoteV2.vote_status[i])}}}}}},postVote:function(c){var b="/include/vote.php?entry_id=";b+=this.entryId;b+="&vote_status="+this.status;b+=("undefined"!=typeof(c))?"&update=1":"";b+="&v=2";var a=jQuery.ajax({url:b,timeout:7000,success:HPFacebookVoteV2.postVoteCallback})},onFeedDialogClosed:function(a){if(a&&a.post_id){HuffCookies.set("facebook_user_has_voted",HPFacebookVoteV2.status);HuffCookies.del("facebook_user_is_voting");HPFacebookVoteV2.voteUpCalled=false;HPFacebookVoteV2.lock=false}else{HPFacebookVoteV2.lock=false;if(HPFB.user_just_login){location.href=location.href}}},onFacebookVote:function(){HuffCookies.del("snn_popup_needed");HuffCookies.del("facebook_user_is_voting");if(HPFacebookVoteV2.voteUpCalled){return}HPFacebookVoteV2.postVote(true);HPFB.ensureInit(function(){HPFB.waitForSession(function(){if("connected"==HPFB.user_status){HPFacebookVoteV2.voteUpCalled=true;feedData={name:HPFacebookVoteV2.entryTitle,description:HPFacebookVoteV2.entryBrief,href:HPFacebookVoteV2.permalink,media:[{type:"image",src:HPFacebookVoteV2.entryImgSrc,href:HPFacebookVoteV2.permalink}]};HPFB.streamPublish(HPFacebookVoteV2.vote_status[HPFacebookVoteV2.status]+"... "+HPFacebookVoteV2.userDefaultComment,feedData,null,null,_("Your comment is here"),HPFacebookVoteV2.onFeedDialogClosed)}else{alert(_("You're not connected to Facebook. Please try again."));FB.logout(function(){})}})})},onVote:function(b){if(this.lock){return}this.lock=true;HPFacebookVoteV2.voteUpCalled=false;this.status=b;if(this.status>this.status_limit){return}if(HPFB.authResponse){HuffCookies.set("facebook_user_is_voting",this.status);HPFB.ensureInit(function(){HPFB.waitForSession(function(){HPFacebookVoteV2.onFacebookVote()})})}else{if(this.userLoggedIn){HPFacebookVoteV2.postVote(true);this.lock=false}else{var a=this;HPFB.ensureInit(function(){HPFB.waitForSession(function(){a.lock=false;HPFacebookVoteV2.onFacebookVote()})})}}}};HPFB.likeButton=function(e,b,d,g,a,h){a=(typeof a==="undefined")?false:a;if(HPBrowser.isIEOld()&&a){jQuery(e).unbind("mouseover");return false}var c="";if("undefined"!=typeof h){c+=' hp_track="'+h+'" '}var f=jQuery("#"+g);if(f.length){if(f.attr("author_nickname")){c+=' author_nickname="'+f.attr("author_nickname")+'" '}f.html("<fb:like "+c+' width="180" href="'+b+'" action="'+d+'" layout="button_count" show_faces="false" colorscheme="light" locale="en_US"></fb:like>');FB.XFBML.parse(document.getElementById(g),function(){jQuery("#"+g).prev().addClass("visibility_hidden")})}jQuery(e).unbind("mouseover")};HPFB.likeButton_v2=function(c,b,a){if(HPBrowser.isIEOld()&&a){jQuery(c).attr("onmouseover",null);return false}b=b||"like";var e=jQuery(c).hasClass("i_v_fb_like")?c:jQuery(c).find(".i_v_fb_like")[0];if(!e){return}jQuery(c).get(0).onmouseover="";var d=jQuery(c).find(".fb_like_xml")[0];jQuery(d).html(HPFB.GetHtmlLikeWidget(JSON.parse(e.getAttribute("fblike_params")),b));FB.XFBML.parse(d,function(){jQuery(d).prev().addClass("visibility_hidden")});jQuery(e).addClass("i_v_with_count");jQuery(e).get(0).onmouseover=""};HPFB.parseLikeButton=function(a){jQuery(a).addClass("fb-like").removeAttr("onmouseover").empty();FB.XFBML.parse(a.parentNode)};HPFB.GetHtmlLikeWidget=function(b,a){return'<fb:like action="'+a.toLowerCase()+'" '+HPFB.__construct_params_for_widget(b).join(" ")+"></fb:"+a+">"};HPFB.__construct_params_for_widget=function(c){var b=[];for(var a in c){if(c.hasOwnProperty(a)){b[b.length]=a+'="'+c[a]+'"'}}return b};HPFB.handleTwitterFollowClick=function(b,a){if(jQuery(b).hasClass("tw-follow-btn")){jQuery(b).removeClass("tw-follow-btn");jQuery(b).addClass("tw-unfollow-btn")}else{jQuery(b).removeClass("tw-unfollow-btn");jQuery(b).addClass("tw-follow-btn")}};HPFB.Tracking={};HPFB.Tracking._subscribers=new Array();HPFB.Tracking.Subscribe=function(a,f,b,e){if("string"!=typeof a&&!jQuery.isArray(a)){return false}if("string"!=typeof f&&!jQuery.isArray(f)){return false}if("boolean"!=typeof b){return false}if("function"!=typeof e){return false}var d={};if("string"==typeof a){a=[a]}for(var c=0;c<a.length;c++){a[c]=a[c].toLowerCase()}d.fb_events=a;if("string"==typeof f){f=[f]}for(var c=0;c<f.length;c++){f[c]=f[c].toLowerCase()}d.hptrack_codes=f;d.is_tracking=b;d.callback=e;HPFB.Tracking._subscribers.push(d);return true};HPFB.Tracking.Init=function(){FB.Event.subscribe("edge.create",HPFB.Tracking._onEdgeCreate);FB.Event.subscribe("edge.remove",HPFB.Tracking._onEdgeRemove)};HPFB.Tracking._onEdgeCreate=function(a,b){HPFB.Tracking._processEvent("edge.create",a,b)};HPFB.Tracking._onEdgeRemove=function(a,b){HPFB.Tracking._processEvent("edge.remove",a,b)};HPFB.Tracking._processEvent=function(c,b,f){if("edge.create"==c&&("like"==f.dom.getAttribute("action")||null===f.dom.getAttribute("action"))){c="Liked"}else{if("edge.create"==c&&"recommend"==f.dom.getAttribute("action")){c="Recommended"}else{if("edge.remove"==c&&("like"==f.dom.getAttribute("action")||null===f.dom.getAttribute("action"))){c="Unliked"}else{if("edge.remove"==c&&"recommend"==f.dom.getAttribute("action")){c="Unrecommended"}}}}var i=false;var d="";if(null!==f.dom.getAttribute("hp_track")){hptrack=f.dom.getAttribute("hp_track")}else{hptrack="Unknown"}d=decodeURIComponent(b);d=d.split("?")[0].split("/").slice(3).join("/");if(d.length>0){d="/"+d}if("Unknown"==hptrack&&null!==f.dom.getAttribute("entity_id")&&null!==f.dom.getAttribute("author_nickname")&&1==f.dom.getAttribute("entity_type")){hptrack="Author Info"}for(var h=0;h<HPFB.Tracking._subscribers.length;h++){var e=HPFB.Tracking._subscribers[h];var l={};var g={};g.module=hptrack;g.action=c;g.label=HPTrack.Module.getTrackingPrefix(f)+"Facebook";if("Unknown"==hptrack){g.label+=" v2 "+d}g.localy_tracked=false;if(!e.is_tracking){e.callback(c,b,f);continue}else{if(e.is_tracking&&!i){if((0==e.fb_events.length||e.fb_events.inArray(c.toLowerCase()))&&(0==e.hptrack_codes.length||(null!==hptrack&&e.hptrack_codes.inArray(hptrack.toLowerCase())))){l=e.callback(c,b,f);if("object"==typeof l&&("undefined"!=typeof l.module||"undefined"!=typeof g.localy_tracked)){for(var a in l){g[a]=l[a]}if("undefined"!=typeof g.localy_tracked&&true!==g.localy_tracked){HPTrack.trackEvent(g.module,g.action,g.label);HPTrack.trackSocial("facebook",g.action,"["+HPTrack.Module.getTrackingPrefix(f)+"] - "+hptrack);if(huff.beta||location.search.indexOf("debug")>0){console.log("Tracking: "+g.module+" | "+g.action+" | "+g.label)}}else{if(true!==g.localy_tracked){if(huff.beta||location.search.indexOf("debug")>0){console.log("Localy tracked")}}}i=true;f.dom.setAttribute("hp_tracked",1)}}continue}}}if(!i){if("mostpop_entry"==g.module){var k="";if(f&&f.dom&&f.dom.className){k=" | "+f.dom.className+" | "}g.label+=k+d}HPTrack.trackEvent(g.module,g.action,g.label);i=true;f.dom.setAttribute("hp_tracked",1);if(huff.beta||location.search.indexOf("debug")>0){console.log("Tracking: "+g.module+" | "+g.action+" | "+g.label)}}};HPFB.saveTokens=function(a,e){a=a||false;e=e||false;if("connected"==HPFB.user_status&&HPUser.is_logged_in()){var c="/users/refresh_facebook_tokens.php";var b=HPFB.getSessionForServer();var d=(b?""+b:"");jQuery.ajax({url:c,type:"POST",data:d,success:function(i,h,g){try{var f=JSON.parse(i)}catch(j){var f={status:"failure",msg:"Some error occured"}}if(/success/.test(f.status)){if("function"==typeof(a)){a()}}else{if("function"==typeof(e)){e()}}return},error:function(){HPError.e();return}})}};HPFB.removeSocialReading=function(){HPFB.ensureInit(function(){FB.getLoginStatus(function(a){if(a&&"connected"==a.status){FB.api("/me/permissions",function(b){if(b&&b.data[0]&&b.data[0].publish_actions&&b.data[0].publish_actions==1){jQuery("#readedge_removal").show();jQuery("#re_removal_big").click(function(){jQuery("#re_removal_buttons").show()});jQuery("#re_removal_revert").click(function(){jQuery("#re_removal_buttons").hide()});jQuery("#re_removal_confirm").click(function(){jQuery("#re_removal_buttons").html("Removing reads...");var c=HPFB.getSessionForServer("obj");jQuery.ajax({url:"/users/read_edge/v2/remove_social_reading.php",type:"post",data:c,dataType:"json",success:function(h,f,e){if(/success/.test(h.status)){if(h.action_ids&&h.action_ids.length){var g=h.action_ids.length;for(var d=0;d<g;d++){FB.api("/"+h.action_ids[d],"delete",function(i){})}}FB.api({method:"auth.revokeExtendedPermission",perm:"publish_actions"},function(i){if(i===true){jQuery("#readedge_removal").html('<div class="color_444444 bold arial_14">Social reading experience has been removed.</div>');setTimeout(function(){jQuery("#readedge_removal").fadeOut()},5000)}})}else{jQuery("#readedge_removal").html('<div class="color_444444 bold arial_14">Some error occurred.</div>')}},error:function(){jQuery("#readedge_removal").html('<div class="color_444444 bold arial_14">Some error occurred.</div>');HPUtil.error()}})})}})}})})};HPFB.facebookAppCenterCallback=function(){var b=false;var a=false;var d={};var c=function(){if(document.loading_info_modal){return}document.loading_info_modal=true;var e=function(){var h="";switch(HPConfig.site){case"france":h="/images/facebook/fr/";break;default:h="/images/facebook/";break}return h};var g=function(){var h="";h+='<div id="readedge_modal">';h+='	<div class="center readedge_slides" id="slideshow_div">';h+='		<div id="readedge_slide1" class="readedge_slide"> <h2>'+_("Welcome")+" "+d.first_name+", "+_("See what your friends are reading")+'</h2><img src="'+e()+'facebook_readedge1.jpg" alt="'+_("See what your friends are reading")+'" /> </div>';h+='		<div id="readedge_slide2" class="hidden readedge_slide"> <h2>'+_("Share only the stories you want")+'</h2><img src="'+e()+'facebook_readedge2.jpg" alt="'+_("Share only the stories you want")+'" /> </div>';h+='		<div id="readedge_slide3" class="hidden readedge_slide"> <h2>'+_("Full control over what you share")+'</h2><img src="'+e()+'facebook_readedge3.jpg" alt="'+_("Full control over what you share")+'" /> </div> ';h+='		<div id="readedge_slide4" class="hidden readedge_slide"> <h2>'+_("Access your reading history on Facebook timeline")+'</h2><img src="'+e()+'facebook_readedge4.jpg" alt="'+_("Access your reading history on Facebook timeline")+'" /> </div> ';h+="	</div>";h+='	<div class="readedge_bg readedge_left_arr"></div>';h+='	<div class="readedge_bg readedge_right_arr"></div>';h+='	<div class="readedge_paging" style="text-align:center"></div>';h+='	<ul class="re-fb-modal-actions">';h+='		<li id="re-start-share" style="height:12px;"><a href="javascript:void(0);" id="re-fb-button"><img src="https://graph.facebook.com/'+d.id+'/picture" style="position:absolute; top:0; left:-10px; height:28px;" />'+_("Start Sharing")+" </a></li>";h+='		<li><a id="re-modal-faq" href="/faq/#socialnews" target="_blank">'+__("Learn more")+"</a></li>";h+="	</ul>";h+='	<div class="clear"></div>';h+="</div>";return h};var f=function(){if(document.loading_info_modal_plugin){return}document.loading_info_modal_plugin=true;jQuery.getScript("/include/lib/jquery/jquery.cycles.all.min.js",function(){jQuery("div.readedge_slides").cycle({fx:"scrollHorz",pager:".readedge_paging",next:".readedge_right_arr",prev:".readedge_left_arr",width:635,speed:250,cleartype:1});jQuery("div.readedge_slides").cycle("pause");jQuery("#re-fb-button").bind("click",function(){huff.use("modal",function(h){h.hide()})});return});return};onmodalshow=function(){f()};onmodalclose=function(){delete (document.loading_info_modal);delete (document.loading_info_modal_plugin);if(document.loading_info_modal2){delete (document.loading_info_modal2)}};huff.use("connect/modal","modal",function(i,h){i.init(function(){if(document.loading_info_modal2){return}document.loading_info_modal2=true;h.show({theme:"connect_modal",width:750,position:"fixed",onshow:onmodalshow,onclose:onmodalclose,content:g()})})});return};jQuery(document).ready(function(){if("undefined"!==typeof HPUtil&&"appcenter"===HPUtil.getUrlVar("fb_source")){HPFB.ensureInit(function(){FB.getLoginStatus(function(e){e=e||{};if("connected"===e.status){b=true;FB.api("/me",function(f){d=f;FB.api("/me/permissions",function(h){h=h||{};var g=h.data[0].publish_actions||0;if(1===g){a=true;c()}})})}})})}});return};HPFB.facebookAppCenterCallback();
window._||(window._=function(a){return a});window.ngettext||(window.ngettext=function(a){return a});window.sprintf||(window.sprintf=function(a){return a});var SNProject={join_max_tries:5,facebook_join_retried:0,popup_needed:HuffCookies.get("snn_popup_needed"),init:function(){this.user_logged_in=!!HuffCookies.getUserName();this.maybe_facebook=HPFB.maybeFacebookConnected();this.snp_cookie=HuffCookies.getSNPstatus();this.read_tracking_enabled=HuffPrefs.get("read_tracking")},_tryToJoinUser:function(){var a=SNProject;var b=HuffCookies;HPError.d("snn join callback");if(a.join_max_tries>0){if(b.getUserId()){huff.use("connect/auth",function(c){c.Login.loginSuccess()})}else{a.join_max_tries--;setTimeout(a._tryToJoinUser,200)}}else{if(typeof IS_NEWSGLIDE==="boolean"&&IS_NEWSGLIDE){$(document).trigger("userlogedin");HuffConnect.hideModal()}else{window.location="/social/join.html?autojoin=1"}}},joinCheckingUserStatus:function(e){var c=SNProject;var d=QuickLogin;var b=HuffConnect.Login;e=e||{};var a=e.service||false;if(HuffCookies.getSNPstatus()==1&&HuffCookies.getUserName()&&!HuffPrefs.get("yahoo")&&HPUtil.getUrlVar("just_reloaded")!=="3"){location.href=HPUtil.AddStringToQueryString(location.href,"just_reloaded=3");return false}if(!a){HuffConnect.loadConnectModal();return false}d.calledBySNN=true;if(HuffCookies.getUserName()){if(a=="facebook"){d.FacebookLoginCallback=c._tryToJoinUser;HPFB.login()}else{c._join()}}else{if(a=="facebook"){d.FacebookLoginCallback=c._tryToJoinUser;HPFB.login()}else{b.onLoginSuccessCallback=c._tryToJoinUser;HuffConnect.loadConnectModal()}}return false},installYApp:function(){var a="http://apps.yahoo.com/-AIjuiA4o";PopupManager.open(a,800,600);HuffConnect.hideModal();return},checkFriendsFansOnJoin:function(){var c=false;var a={facebook:"",twitter:"",google:"",linkedin:"",aol:"",winlive:""};for(var b in a){if(HuffPrefs.get(b)){c=true;break}}if(!c){return}jQuery.ajax({url:"/users/social_news_project/make_friends_fans.php",type:"POST",data:HPFB.getSessionForServer()+"&showall=1"||"showall=1",success:function(g,f,e){return;if(e.status!=200){return}if(HuffPoUtil.trim(g)!=""){var h=g.split(":::::");var d='<div id="auto_friends_modal" class="padding_10">'+h[0]+"</div>";huff.use("modal",function(i){i.show({content:d,width:680,position:"absolute",onshow:function(){if("undefined"!=typeof(FB)){setTimeout(function(){FB.XFBML.parse(jQuery("#auto_friends_modal").get(0))},500)}SocialFriends.init();return}})})}},error:function(){HPError.e();return},timeout:30000})},checkFriendsFansOnLogin:function(){SNProject.checkFriendsFansOnJoin()},track:function(f,d,a){var e=SNProject;var b="http://user-stats.huffpost.com/";if(window.location.host!="www.huffingtonpost.com"){if(window.HPConfig&&HPConfig.inst_type=="dev"){b="/FAKE_SNProject.track_FROM_BETA/"}else{return true}}if(!f||f==""){f=0}if(!a||a==""){a=0}if(/[^\d+]/.test(f)||/[^\d+]/.test(a)||(d!="delete_entry_view"&&d!="entry_view"&&d!="entry_like"&&d!="entry_unlike"&&d!="comment_comment"&&d!="entry_vote"&&d!="slideshow_poll_vote"&&d!="slideshow_poll_facebook_share"&&d!="user_snp_join"&&d!="hufflist_item_added"&&d!="comment_favored"&&d!="user_log_in"&&d!="user_log_out"&&d!="user_follow"&&d!="poll_vote"&&d!="prediction_vote"&&d!="entry_facebook_share"&&d!="entry_twitter_share")){return false}can_track=true;if(d=="entry_view"){can_track=HuffPrefs.get("read_tracking")}can_track=can_track?1:0;if(HuffCookies.getUserId()){var c=function(){var g=b+"?"+HuffCookies.getUserId()+"&"+Math.random().toString(16).replace("0.","")+"&"+escape(f)+"&"+escape(d)+"&"+escape(a)+"&"+can_track;my_img=document.createElement("img");my_img.setAttribute("src",g);my_img.setAttribute("style","height:1px; line-height:1px; overflow:hidden");var h=document.getElementById("_snp_tracking");if(h){document.getElementById("_snp_tracking").appendChild(my_img)}};if(d=="entry_view"){setTimeout(c,1000)}else{c()}}return true},fanCheck:function(){if(SNProject.user_logged_in&&1==HuffCookies.getCookie("check_for_fans")){SNProject.checkFriendsFansOnLogin()}else{if(SNProject.user_logged_in&&SNProject.snp_cookie==1&&HuffCookies.get("snn_popup_needed")){HPFB.ensureInit(function(){if("connected"==HPFB.user_status){setTimeout(function(){SNProject.checkFriendsFansOnLogin()},3000)}})}}HuffCookies.del("snn_popup_needed");HuffCookies.destroyCookie("check_for_fans")},initModal:function(a){a=a||"tweet";huff.use("modal",function(b){var c="";c+="<div class='"+a+"_modal_frame'>";c+="<div class='border_top'></div>";c+="<div class='"+a+"_modal_close close_button'></div>";c+="<div style='clear:both;'></div>";c+="<div class='main_container'>";c+="<div class='head_image'></div>";c+="<div class='content'>";c+="</div>";c+="</div>";c+="<div style='clear:both;'></div>";c+="<div class='border_bottom'></div>";c+="</div>";c+="<div class='"+a+"_modal_close' style='position:fixed; z-index:900; left:0px; top:0px; width:100%; height:100%; background:#000; opacity:0.7; filter:alpha(opacity=70);'></div>";b.theme(a+"_modal",{frame:c,window:"div:first",content:"div.content",closer:"."+a+"_modal_close",init:function(e,d){e.width(d.width||"").height(d.height||"").css("margin-left","-"+(e.width()/2)+"px")}})});return}};SNProject.init();(function(c,b){var a={config:{ajax:true},CONSTANTS:{updateInterval:1000*60*3,countNotificationsUrl:"/users/social/notifications/action.php?count"},setCounter:function(f){var e=this.getCounter();var d=function(h){var g=e.text();if(g!=""&&h==g){return}var j=100,i=h;h>100&&(i="100+");h>=0&&e.animate({top:20},j,"linear",function(){e.html(i).css({top:-20}).animate({top:0},j,"linear")})};e.length&&typeof f=="undefined"&&c.ajax({url:this.CONSTANTS.countNotificationsUrl,success:d});f>=0&&d(f);return;b.clearTimeout(this.counter_timer);this.counter_timer=b.setTimeout(function(){a.setCounter()},this.CONSTANTS.updateInterval)},getCounter:function(){return c(".notifications .counter-box .value")},clearVisited:function(){var e=c("#social-nav-bar iframe").contents(),d=e.find(".notification.visited");d.length>0&&d.remove();return true},clearAll:function(){c.ajax({url:"/users/social_news_project/profile/notifications/clear.php",success:function(){b.location=b.location}})},setEvents:function(){c(document).ready(function(){var e='<iframe id="notifications-window" frameborder="0" title="Notifications" src="/users/social/notifications/frame.php" width="350" height="480"></iframe>';var d=function(g){return g.css("visibility")=="visible"};var f=function(){var h=jQuery("#social-nav-bar"),l=jQuery("#wendybird_user"),m=l.find(".dropdown"),i=l.find(".notifications-link"),g=l.find(".wendybird_user_data"),k=h.find(".popup"),j=a;d(h)&&h.css({visibility:"hidden"})&&i.removeClass("active")&&j.clearVisited()&&k.html(e)&&j.setCounter();m.is(":visible")&&m.slideUp(200,function(){g.removeClass("active")})};c("#wendybird_user .notifications-link").click(function(i){HPTrack.trackEvent("Social/Notifications","Click","Popup");i.stopPropagation();i.preventDefault();var h=jQuery("#social-nav-bar"),m=jQuery("#wendybird_user"),g=m.find(".wendybird_user_data"),j=m.find(".notifications-link"),l=h.find(".popup"),k=a;m.find(".dropdown").hide()&&g.removeClass("active");if(d(h)){h.css({visibility:"hidden"})&&j.removeClass("active")&&k.clearVisited()&&l.html(e)}else{jQuery(this).addClass("active");if(!l.find("iframe").length||k.getCounter().text()>0){l.html(e)}h.css({visibility:"visible"})}});jQuery("#wendybird_user .wendybird_user_data").unbind().click(function(j){j.stopPropagation();var i=jQuery("#social-nav-bar"),l=jQuery("#wendybird_user"),m=l.find(".dropdown"),k=l.find(".notifications-link"),h=jQuery(this),g=jQuery(j.target);!g.closest(m).length&&j.preventDefault();d(i)&&i.css({visibility:"hidden"})&&k.removeClass("active");if(m.is(":visible")){m.slideUp(200,function(){h.removeClass("active")})}else{m.slideDown(200)&&h.addClass("active")}});jQuery("body").click(f)})}};b.SocialNotifications=a})(jQuery,window);
window._ || (window._ = function (str) { return str; });
window.ngettext || (window.ngettext = function (str) { return str; });
window.sprintf || (window.sprintf = function (str) { return str; });
/*
    Code related to SNP module / Most Popular Module
*/

YAHOO.namespace('SNP');
YAHOO.SNP.SNPBlock = function(params)
{
	params = params || {};
	extend(this,params);
	this.load();
}
YAHOO.SNP.SNPBlock.prototype = {
	url: '',
	id: '',
	cur_obj: null,
	paginator: null,
	paginated: true,
	update_max_page: false,
	is_circle: true,
	next: function() {},
	prev: function() {},
	load: function() {
		if (this.cur_obj)
		{
			this.cur_obj.loadSNPBlock();
		}
	},
	goto: function() {},
	init_pagination: function(page, maxPage, url, passed_params)
	{
		if (this.paginated)
		{
			var params = {
				moduleName: this.id,
				update_max_page: this.update_max_page,
				maxPage: maxPage,
				is_circle: this.is_circle,
				is_ajax_update: true,
				update_images: true,
				url: url
			};
			extend(params, passed_params);
			this.paginator = new CommonPaginator(params);
		}
	}
}
YAHOO.SNP.RecommendBlock = function(params)
{
	YAHOO.SNP.SNPBlock.call(this, params);
}

YAHOO.extend(YAHOO.SNP.RecommendBlock, YAHOO.SNP.SNPBlock);
/*
    SNPModule manages right-hand sidebar of the page.

    Specifically, it powers the part of sidebar that shows
    either:
        * Most Popular module only (to logged-out users
    and other some other conditions)
        * The full "Social Module" (aka "SNN module" aka "SNP module"...)

   To prevent loading of Social Module, please set:
    * HPConfig.no_social_module = true;
   (but continue to call SNPModule.load)
*/
var SNPModule = {
        current_notSNN_vertical     :'',
	loaded: false,
    arr_pages: Array(),
    arr_current_page: Array(),
    arr_max_page: Array(),
    arr_lock_status: Array(),
	
    // used in not_snn_init
    arr_non_snn_modules: ['not_signed_mp', 'not_signed_mbc', 'not_signed_mbf', 'not_signed_mbt', 'not_signed_mpr', 'not_signed_dm'],
    non_snn_made_init: 0,
	
    // used in init
    arr_snn_modules: ['comment', 'friends', 'mp', 'mp_bn', 'mp_hp', 'follower', 'dm_hp', 'mbc', 'mbf', 'mbt', 'mbt', 'act', 'mpr', 'entry_inside_comment', 'twitter_friends', 'twitter_influencers'],
	
    snn_made_init: 0,
    animation: null,
    url_user_id: '',
    isFormLoaded: false,
    mpTimeout: null,
    ms: 24000,
    twitter_timeline_type: 'home',
    tweetout_module_div: 'hidden_twitter_module',
    skin: null,
    hide_hp_module: true,

    load: function (trends_mode)
	{
        if (!HPConfig.no_social_module && HuffCookies.getUserName() && document.domain !== 'preview.huffingtonpost.com')
		{
                var get_data = '';
				
                get_data = '?v=' + HPConfig.current_vertical_name;
			
            var path = window.location.pathname.split('/');
			
                if( typeof path[1] !== "undefined" && path[1] == 'big-news' ) {
			get_data += '&page_type=big_news_list';
		} else if( typeof path[1] !== "undefined" && path[1] == 'social' ) {
			get_data += '&page_type=profile_page';
		} else if( typeof path[1] !== "undefined" && path[1] == 'theblog' ) {
			get_data += '&page_type=theblog';
		}
			
                if (trends_mode) get_data += '&hot_trends_mode=' + trends_mode;
                if (HuffPoUtil.getUrlVar("level")) get_data += '&level=1';
				if (HuffPoUtil.getUrlVar("snp")) get_data += '&snp=v2';
			
            get_data += '&includefbrecom=1';
			
            location.href.match(/[?&]external=1/) && (get_data += '&external=1');
			
            C.asyncRequest('GET', '/users/social_news_project/snp_module.php' + get_data, {
                success: function (o) {
                    if (o.responseText != '') {
                        var display_module_arr = o.responseText.split('::module_to_disp::');    //set in snp_module.php to display module based upon number of friends and twitter linked
                        var display_module = display_module_arr[1];
                        var response = o.responseText.replace('::module_to_disp::' + display_module, '');
						
						if (display_module == "snn") {
							//snn module
							if ("undefined" != typeof (response)) {
								var ffu = Dom.get('facebook_friends_unit_wrapper');
								if (ffu) {
									ffu.innerHTML = response;
								}
							}
						}
                        else if (display_module == "twitter_popular") {
							//twitter and most popular on huffpost module
                            SNPModule.hide_hp_module = false;
                            SNPModule.tweetout_module_div = "hidden_twitter_module_frontpage";
                        }
                        else if (display_module == "popular") {
							//most popular on huffpost module
                            SNPModule.hide_hp_module = false;
                        }
						
                        SNPModule.snn_made_init = false;
                        SNPModule.init();
						
                        if (typeof HPAds.page_spots["most_popular_edit_promo"] !== "undefined") {
                            var mp_adv_items = jQuery("#snp_mp_hp_page_0 div[id^='snp_mp_hp_subpage_']");
                            var mp_adv_item;
                            if (mp_adv_items.length > 3) mp_adv_item = jQuery(mp_adv_items[2]);
                            else if (mp_adv_items.length) mp_adv_item = jQuery(mp_adv_items[mp_adv_items.length - 1]);
                            if (mp_adv_item.length) {
                                HPAds.ad_reload('most_popular_edit_promo',mp_adv_item.attr('id'), true);
                            }
                        }
						
                        if (SNPModule.skin) {
                            setTimeout("SNPModule.show_skinned_module()", 1000);
                            setTimeout("HPAds.ad_reload('snn_234x60_req','ad_snn_234x60_req')", 3000);
                            return;
                        }
						
                        setTimeout("HPAds.ad_reload('snn_234x60_req','ad_snn_234x60_req')", 2000);
                        SNPModule.loaded = true;
					
						//if facebook api is enabled load recommendations
						if ( HPFB.enabled ) {
							var recom_interval = window.setInterval(function() {
								if ( typeof Recommendations !== "undefined" ) {
									HPFB.ensureInit( function() {
										if ( HPFB.initialized ) {
											if (huff.beta)
												console.log('Trying to load recommendations...');
											clearInterval(recom_interval);
											if ( HPFB.authResponse ) {
												Recommendations.load({ 
													fb_session: HPFB.authResponse, 
													status: HPFB.user_status 
												});
											}
										}
									} );
								}
							}, 500);
						}
					}
                    },
                    failure: function(o) {
                    if ($('hidden_snp_body')) {
                            HuffPoUtil.hide('hidden_snp_body');
                            HPError.e();
                        }
                    },
					timeout: 20000
                });
        } else {  // user is not logged in, SNP module not initializing
			
            jQuery(document).ready(function(){
                if (typeof HPAds.page_spots["most_popular_edit_promo"] !== "undefined") {
                    var mp_adv_items = jQuery("#snp_not_signed_mp_page_0 div[id^='snp_mp_hp_subpage_']");
                    var mp_adv_item;
                    if (mp_adv_items.length > 3) mp_adv_item = jQuery(mp_adv_items[2]);
                    else if (mp_adv_items.length) mp_adv_item = jQuery(mp_adv_items[mp_adv_items.length - 1]);
                    if (mp_adv_item.length) {
                        HPAds.ad_reload('most_popular_edit_promo',mp_adv_item.attr('id'), true);
                    }
                }
            });
            this.trackLoaded();
        }
        if (HuffCookies.getSNPstatus() == 1) {
                HuffPoUtil.hide('snn_fb_promo_box');
            }
    },

	/*
	 * TODO: Ads team to confirm whether we'll use the skinned snp module
	 * It is safe to comment out this block of code till we enable skinned snp module
    skin_click_handler_flag: false,
    skin_click_handler: function (check_flag) {
        if (check_flag && this.skin_click_handler_flag) {
				this.skin_click_handler_flag = false;
				return;
			}
            if((typeof(HPAds.snpmodule_skinhref) != "undefined") && (HPAds.snpmodule_skinhref != ''))
                location.href = HPAds.snpmodule_skinhref;
        },
	
    show_skinned_module: function () {
            var skin = this.skin;
            var is_bpage = HuffPoUtil.GetEntryID(location.href);
        this.animatePage(0, 'facebook_friends_unit_wrapper');
        // -----------------
        var module_body_el = Dom.get('snp_friends_module');
        var module_logo_top = document.createElement('div');
        var module_top_wrap = document.createElement('div');
        var module_body_wrap = document.createElement('div');
        var module_bottom_wrap = document.createElement('div');
        var head_stealth_mode_sw = document.createElement('div');
        var mp_copy = document.createElement('div');
        mp_copy.id = 'mp_module_copy_holder';
        Dom.addClass(mp_copy, 'mp_module_copy_holder');
        Dom.addClass(module_logo_top, skin + '-logo-top');
        Dom.addClass(module_top_wrap, skin + '-top-wrap');
        Dom.addClass(module_body_wrap, skin + '-body-wrap');
        Dom.addClass(module_bottom_wrap, skin + '-bottom-wrap');
        Dom.addClass(module_body_el, skin);
        var ffu = Dom.get('facebook_friends_unit_wrapper');
        ffu.appendChild(mp_copy);
        ffu.appendChild(module_logo_top);
        ffu.appendChild(module_top_wrap);
        ffu.appendChild(module_body_wrap);
        ffu.appendChild(module_bottom_wrap);
        module_body_wrap.appendChild(module_body_el);
        module_body_el.insertBefore(head_stealth_mode_sw, module_body_el.firstChild);
        head_stealth_mode_sw.id = skin + '_stealth_mode_switcher';
        Dom.addClass(head_stealth_mode_sw, 'border_bottom_ccc');
        module_logo_top.innerHTML = '&nbsp;';
        module_top_wrap.innerHTML = '&nbsp;';
        module_bottom_wrap.innerHTML = '&nbsp;';
        // add onclick handlers 
        E.on(module_top_wrap, "click", function () { this.skin_click_handler(); }, null, this);
        E.on(module_bottom_wrap, "click", function () { this.skin_click_handler(); }, null, this);
        E.on(module_body_wrap, "click", function (e, param) { this.skin_click_handler(param); }, true, this);
        E.on(module_body_el, "click", function () { this.skin_click_handler_flag = true; }, null, this);
        // hide blocks in SNP module
        HPUtil.hide('snn_frontpage_widget_make_home');
        HPUtil.hide('snp_title');
        HPUtil.hide('snp_module_header');
        HPUtil.hide('snp_huffpo_bloggers_module_here');
        HPUtil.hide('snn_frontpage_widget_sub_footer');
        // move huffpo_mp_module to it's copy holder
        mp_copy.appendChild(Dom.get('huffpo_mp_module_here'));
		
        // we should display it only for b-n-pages
        if (is_bpage) {
            this.animatePage(0, 'all_frontpage_widgets');
            HPUtil.show('all_frontpage_widgets');
			
            // hide blocks in MP module
            var hide_it = Dom.getElementsByClassName('unique_identifier_for_mp');
            if (hide_it[0])
                hide_it[0].style.display = 'none';
				
            // move most popular on huffpo to MP module
            //var htm = Dom.get('hidden_twitter_module_frontpage');

            //	htm.parentNode.insertBefore(Dom.get('huffpo_mp_module_here'), htm);
            }
			
            // ------------------------------
            this.animatePage(1,'facebook_friends_unit_wrapper');
		
        // ------------------------------
        this.animatePage(1, 'facebook_friends_unit_wrapper');
		
        this.skinned_module_stealth.init();
        if ((typeof (HPAds.snpmodule_trackingpixel) != "undefined") && (HPAds.snpmodule_trackingpixel != ''))
            HPUtil.onPageReady(function () { HPUtil.trackerImg(HPAds.snpmodule_trackingpixel, document.body); });
        },

        skinned_module_stealth:
	{
		id: null,
		
		init: function () {
			var skin = SNPModule.skin;
			if (Dom.get(skin + '_stealth_mode_switcher')) {
				this.id = skin + '_stealth_mode_switcher';
				if (HuffPrefs.get('read_tracking') === true) {
					Dom.get(this.id).innerHTML = '<div class="moto-head-stealth-off" onclick="SNPModule.stealth.update(); return false;">' + _("Stealth Mode (Off)") + '</div>';
				}
				else {
					Dom.get(this.id).innerHTML = '<div class="moto-head-stealth-on" onclick="SNPModule.stealth.update(); return false;">' + _("Stealth Mode (On)") + '</div>';
				}
			}
		},
		
		onUpdated: function () {
			if (Dom.get(this.id)) {
				if ('on' == SNPModule.stealth.current_status) {
					Dom.get(this.id).innerHTML = '<div class="moto-head-stealth-off" onclick="SNPModule.stealth.update(); return false;">' + _("Stealth Mode (Off)") + '</div>';
				}
				else {
					Dom.get(this.id).innerHTML = '<div class="moto-head-stealth-on" onclick="SNPModule.stealth.update(); return false;">' + _("Stealth Mode (On)") + '</div>';
				}
			}
		}
	},
	
    show_skinned_twitter_module: function () {
            // trim twitter name in the head of the twitter module
        if (Dom.get('main_snn_twitter_module')) {
            anch_to_find = Dom.get('main_snn_twitter_module').getElementsByTagName('a');
            for (var j = 0; j < anch_to_find.length; j++) {
                if (Dom.hasClass(anch_to_find[j], 'twitter_snn_name')) {
                    var tname = anch_to_find[j].innerHTML;
                    if(tname.length > 18)  anch_to_find[j].innerHTML = tname.slice(0,17) + '&hellip;';
                    break;
	                }
                }
            }
        },
    */


    init_module: function (mod_name, force_reinit) {
        // if arr_max_page is not defined probably the this.arr_pages for the same module is not defined
        if ('undefined' == typeof (this.arr_pages[mod_name])) {
            this.arr_pages[mod_name] = new Array();
            }
		
        if ('undefined' == typeof (this.arr_current_page[mod_name])) {
            this.arr_current_page[mod_name] = 0;
            }
		
        if ($('snp_' + mod_name + '_max_page_counter')) {
            this.arr_max_page[mod_name] = parseInt($('snp_' + mod_name + '_max_page_counter').innerHTML) - 1;
			
            // check if there are pages, some modules doesn't provide such
            // first page is enough to indicate there are such
            if ($('snp_' + mod_name + '_page_ids_0')) {
                for (var pg_num = 0; pg_num <= this.arr_max_page[mod_name]; pg_num++) {
                    this.arr_pages[mod_name][pg_num] = $('snp_' + mod_name + '_page_ids_' + pg_num).innerHTML;
                }
			}			
        }
        else {
            this.arr_max_page[mod_name] = 0;
        }
    },

    init: function () {
        if (this.snn_made_init) return false;

        if (HPAds.snpmodule_skin == 'motorola' && Dom.get('snp_friends_pages')) {
            this.skin = 'moto';
        }

        if (!this.url_user_id && $('snp_module_user_id')) {
            this.url_user_id = $('snp_module_user_id').innerHTML;
        }

        this.lightbox.init();
        this.stealth.init();

        for (i = 0; i < this.arr_snn_modules.length; i++) {
            this.init_module(this.arr_snn_modules[i]);
        }

            //add current entry to activity?
            var entry_id = HuffPoUtil.GetEntryID(window.location.href);
        if (SNProject.read_tracking_enabled == 1 && entry_id && !$('snp_activity_read_entry_' + entry_id) && $('snp_current_reading_entry_title')) {
                //yes, we should add it
                this.current_reading_entry_id = entry_id;
                $('snp_current_reading_entry_title').innerHTML = document.title;
                $('snp_current_reading_entry').style.display = 'block';
            }

        this.snn_made_init = 1;

            this.hideHpModules();

        if ($('most_popular_ad_stub') && HuffPoUtil.trim($('most_popular_ad_stub').innerHTML) == '') {
                    $('most_popular_ad_stub').innerHTML = '<iframe src="http://ad.doubleclick.net/adi/huffpost.socialnews;tile=1;sz=234x60;ord='+ HuffPoUtil.WEDGJE.ord() +'?" width="234" height="60" marginwidth="0" marginheight="0" frameborder="0" scrolling="no" name="social_news_234x60" id="social_news_234x60"></iframe>';
                }

            //Display button in module depending upon service first Facebook then Twitter
            this.networkToLink();

        if (HuffPrefs.get('twitter') && !HPConfig.no_twitter) {
                SNPModule.twitterModule(
                    function () {
                        SNPModule.init_module('twitter_friends');
                        SNPModule.init_module('twitter_influencers');


                        E.on('tweet_status', 'keyup', HPUtil.enforceTextAreaLimit, {chars: 140});
                        E.on('tweet_status', 'change', HPUtil.enforceTextAreaLimit, {chars: 140});
                    }
                    );

            }

            this.trackLoaded();

		// user levels code - new level SNN notification
		if (HuffPoUtil.getUrlVar("level") || HPConfig.user_show_levels_and_badges_disabled == false) {
			var my_level = $("snn_module_my_level");
			if (my_level) {
				my_level = my_level.innerHTML;
				Y.util.Event.onDOMReady(SNPModule.show_user_level_box);
			}
		}

        for (i = 0; i < this.arr_snn_modules.length; i++) {
            var page_0 = 'snp_' + this.arr_snn_modules[i] + '_page_0'
            if ($(page_0))
                huff.emit('content/update', '#' + page_0);
        }

		//rebalance columns now that module has loaded
		huff.emit('content/update');
    },

    not_snn_init: function () {
        if (this.non_snn_made_init) return false;

        for (i = 0; i < this.arr_non_snn_modules.length; i++) {
            this.init_module(this.arr_non_snn_modules[i]);
        }

        this.non_snn_made_init = 1;
        },

        /*
            Track SNP or Most Popular module events
        */
    trackEvent: function (action, label) {
            this.tracker.event(action, label);
        },

        trackLoaded: function() // call once SNN module has initialized (or not initialized, and is Most Pop)
        {
            if (typeof HPTrack == 'undefined')
                return;

            // Set module name
            var long_name = 'Sidebar - ';
            var short_name = 'sb-';
        if (this.snn_made_init) // social mode
            {
                short_name += 'social';
                long_name += 'Social';
            }
            else // most popular mode
            {
            	var preffix = ( HPConfig.most_popular_version > 1 )? '-viralsort':'-hpsort';

                short_name += 'mostpop'+preffix;
                long_name += 'non-Social'+preffix;
            }

            var HPM = HPTrack.Module;
            this.tracker = HPM(short_name, long_name);
            this.tracker.impression();

            /*
                Fire impression tracking here to send first batched
                module impression tracking because this is usually the "last"
                module to load on the page

                TODO: clearer placement of this - maybe a timer that happens
                irrespective of social module loading or not loading
            */
            HPM.Impressions.fire();

            var event_handler = new HPTrack.Module.DelegatedHandler(this.trackEvent, this);

            // initialize click tracking
            E.on('snp_friends_module', 'click', event_handler, this, true);

			// track like/recommend buttons
			this.initLikeTracking(this.tracker);

        },

    networkToLink: function () {
        if (HuffPrefs.get('facebook') === false) {
            if ($('sidebar_service_connect')) {
                    $('sidebar_service_connect').innerHTML = "<div id=\"fbconnect\" style=\"text-align:center\"><a class=\"facebook connect_button\" href=\"/social/join.html?autojoin=1\" onclick=\"HPFB.login(QuickLogin.FacebookLoginCallback);return false;\" target=\"_blank\"><span class=\"icon fb_icon\"></span>"+ __("Connect with Facebook")+" </a></div>";
                }
            }
        else if (HuffPrefs.get('twitter') === false) {
            if ($('sidebar_service_connect')) {
				$('sidebar_service_connect').innerHTML = "<div style=\"text-align:center\"><a href=\"javascript:void(0);\" onclick=\"linkSocialAccount.checkLoginStatus('twitter'); return false;\" target=\"_blank\"><span class=\"twitter-darker\">"+ __("Connect with Twitter") + "</span></a></div>";
                }
            }
            else
                if($('sidebar_service_connect')) $('sidebar_service_connect').style.display = "none";
            return;
        },


    hideHpModules: function () {
        if (this.hide_hp_module) //hide frontpage module when true 
            HuffPoUtil.hide('all_frontpage_widgets');
        return;
    },

    showHpModules: function () {
        HuffPoUtil.show('all_frontpage_widgets');
    },

    refreshPagination: function (page, type) {
        if ($('snp_' + type + '_page_counter')) {
            $('snp_' + type + '_page_counter').innerHTML = page + 1;
        }

        this.arr_current_page[type] = page;
    },

    get_url_to_call: function (page, type) {
            var get_data = '';
        if ('' != HuffPoUtil.trim(this.current_notSNN_vertical) || false == HuffPoUtil.GetEntryID(location.href))
                get_data = '&is_frontpage=1';

        switch (type) {
            case 'friends':
                return '/users/social_news_project/snp_module_page.php?page=' + page + '&page_ids=' + this.arr_pages[type][page] + '&user_id=' + this.url_user_id;
                break;
            case 'mp':
				return '/users/social_news_project/snp_module_page.php?type=mp&page=' + page + '&page_ids=' + this.arr_pages[type][page] + '&user_id=' + this.url_user_id;
				break;
            case 'act':
                return '/users/social_news_project/snp_module_page.php?type=act&page='+page+'&user_id='+this.url_user_id;
                break;
            case 'comment':
                return '/users/social_news_project/snp_module_page.php?type=comment&page=' + page + '&page_ids=' + this.arr_pages[type][page] + '&user_id=' + this.url_user_id;
                break;
            case 'mpr':
                return '/widget/frontpage/frontpage_widgets_update.php?type=mpr&page=' + page + '&entry_ids=' + this.arr_pages[type][page] + '&status=snp' + get_data;
                break;
                /* entry inside */
            case 'entry_inside_comment':
                return '/users/social_news_project/snp_module_page.php?type=entry_inside_comment&page=' + page + '&page_ids=' + this.arr_pages[type][page] + '&user_id=' + this.url_user_id;
                break;
                /* not signed users */
            case 'mp_bn':
                return '/widget/big_news_mp_update.php?type=mp&page=' + page + '&entry_ids=' + this.arr_pages[type][page] + get_data;
                break;
            case 'not_signed_mp':
                return '/widget/frontpage/frontpage_widgets_update.php?type=mp&page=' + page + '&entry_ids=' + this.arr_pages[type][page] + get_data;
                break;
            case 'not_signed_dm':
                return '/widget/frontpage/frontpage_widgets_update.php?type=dm&page=' + page + '&entry_ids=' + this.arr_pages[type][page] + get_data;
                break;
            case 'not_signed_mpr':
                return '/widget/frontpage/frontpage_widgets_update.php?type=mpr&page=' + page + '&entry_ids=' + this.arr_pages[type][page] + get_data;
                break;
            case 'twitter_friends':
                	return '/users/social_news_project/twitter/snn_twitter_page.php?page=' + page + "&type=" + this.twitter_timeline_type ;
                break;
				/* hot on comments */
            case 'not_signed_mbc':
					var notSNN_mbc_shifted_ids = '';
                if ($('snp_not_signed_mbc_shifted_ids')) {
						notSNN_mbc_shifted_ids = '&mbc_shifted_ids=' + $('snp_not_signed_mbc_shifted_ids').innerHTML;
					}
                return '/ajax/common/hot_on.php?type=mbc&page=' + page + notSNN_mbc_shifted_ids +
                			(this.current_notSNN_vertical != '' ? '&v='+this.current_notSNN_vertical : '');
				break;
				/* hot on facebook */
            case 'not_signed_mbf':
					var notSNN_mbf_shifted_ids = '';
                if ($('snp_not_signed_mbf_shifted_ids')) {
						notSNN_mbf_shifted_ids = '&mbf_shifted_ids=' + $('snp_not_signed_mbf_shifted_ids').innerHTML;
					}
                return '/ajax/common/hot_on.php?type=mbf&page=' + page + notSNN_mbf_shifted_ids +
                			(this.current_notSNN_vertical != '' ? '&v='+this.current_notSNN_vertical : '');
				break;
				/* hot on twitter */
            case 'not_signed_mbt':
                return '/ajax/common/hot_on.php?type=mbt&page=' + page;
				break;
			case 'mp_hp':
				return '/widget/frontpage/frontpage_widgets_update.php?status=snp&type=mp_hp&page=' + page + '&entry_ids=' + this.arr_pages[type][page] + get_data;
                break;
            }
        },

        get_current_page:function(page, type){
        if (page == this.arr_current_page[type]) return false;
        return this.arr_current_page[type];
    },

    get_max_page: function (type) {
        return this.arr_max_page[type];
    },

    setPage: function (page, type) {
			
            var current_page = this.get_current_page(page, type);
            if(current_page===false){
            	return false;
            }
            if (this.isLocked(type)) return false;

        this.animatePage(0, 'snp_' + type + '_module_all_pages_here');
            //show selected if it exists
        if ($('snp_' + type + '_page_' + page)) {
                //hide current page
            HuffPoUtil.hide('snp_' + type + '_page_' + current_page);

                //show new page
            HuffPoUtil.show('snp_' + type + '_page_' + page);

                //refresh arrows
                this.refreshPagination(page, type);
            this.animatePage(1, 'snp_' + type + '_module_all_pages_here');

            if ($('snp_' + type + '_page_' + page))
                huff.emit('content/update', '#snp_' + type + '_page_' + page);
        } else {
                this.setLock(type);

                var url_to_call = this.get_url_to_call(page,type);
				
                if(typeof (url_to_call)!="string"){
                	return url_to_call;
                }

            if (SNPModule.skin) {
                    url_to_call += '&skin=' + SNPModule.skin;
                }
                //loads
            if (null != $("snp_twitter_friends_left_arrow")) {
                    $("snp_twitter_friends_left_arrow").style.visibility = "hidden";
                }
            if (null != $("snp_twitter_friends_act_right_arrow")) {
                    $("snp_twitter_friends_act_right_arrow").style.visibility = "hidden";
                }

            var content_container = $('snp_' + type + '_module_all_pages_here').parentNode;
                YAHOO.util.Dom.addClass(content_container,"mp-ajax-notify");
                C.asyncRequest('GET', url_to_call, {
                success: function (o) {
                	YAHOO.util.Dom.removeClass(content_container,"mp-ajax-notify");
                    if (o.responseText != '') {
                            //hide current page
                        HuffPoUtil.hide('snp_' + type + '_page_' + current_page);
                            //write new html
                        $('snp_' + type + '_module_all_pages_here').innerHTML += o.responseText;

                        SNPModule.animatePage(1, 'snp_' + type + '_module_all_pages_here');

                            //refresh arrows
                            SNPModule.refreshPagination(page, type);
                            SNPModule.releaseLock(type);
                        if (null != $("snp_twitter_friends_left_arrow")) {
                                $("snp_twitter_friends_act_right_arrow").style.visibility = "visible";
                            }
                        if (null != $("snp_twitter_friends_act_right_arrow")) {
                                $("snp_twitter_friends_left_arrow").style.visibility = "visible";
                            }

                        if ($('snp_' + type + '_page_' + page))
                            huff.emit('content/update', '#snp_' + type + '_page_' + page);

                    } else {
                            HPError.e();
                        SNPModule.animatePage(1, 'snp_' + type + '_module_all_pages_here');
                            SNPModule.releaseLock(type);
                        }
                    },
                failure: function (o) {
                    	YAHOO.util.Dom.removeClass(content_container,"mp-ajax-notify");
                        //HPError.e();
                    if (SNPModule.mpTimeout) {
                            clearTimeout(SNPModule.mpTimeout);
                        }
                    SNPModule.animatePage(1, 'snp_' + type + '_module_all_pages_here');
                        SNPModule.releaseLock(type);
                    },
                    timeout: 5000
                });

                setTimeout('SNPModule.checkTwitterPage()', 5000);
            }

            return true;
        },

    checkTwitterPage: function () {
        if ($("snp_twitter_friends_left_arrow") && $("snp_twitter_friends_left_arrow").style.visibility == "hidden") {
                    $("snp_twitter_friends_left_arrow").style.visibility = "visible";
            }
        if ($("snp_twitter_friends_act_right_arrow") && $("snp_twitter_friends_act_right_arrow").style.visibility == "hidden") {
                $("snp_twitter_friends_act_right_arrow").style.visibility = "visible";
            }
            return;
        },

    animatePage: function (enable, id, callback, set_time) {
            if(id == "snp_twitter_friends_module_all_pages_here" && HPBrowser.isIEOld())
            {
                return;
        } else {
            if (this.animation) {
                    this.animation.stop(true);
                }
                var direction = {from: 0, to: 1};
                var time = 0.5;

            if (!enable) {
                    direction = {from: 1, to: 0};
                    time = 0.9;
                }

            if ("undefined" != set_time) {
                    time = set_time;
                }

                this.animation = new Y.util.Anim($(id), {opacity: direction}, time, Y.util.Easing.easeOut);

            if (typeof (callback) == 'function') {
                    this.animation.onComplete.subscribe(callback);
                }
                this.animation.animate();
            }

        },

    setLock: function (type) {
        this.arr_lock_status[type] = 1;
        },

    releaseLock: function (type) {
        this.arr_lock_status[type] = 0;
        },

    isLocked: function (type) {
        if ('undefined' == typeof (this.arr_lock_status[type])) {

            return false;
        } else if (this.arr_lock_status[type]) {
            return true;
        } else {
            return false;
            }
    },

    getModuleType: function (type) {

        for (var j = 0; j < this.arr_non_snn_modules.length; j++) {
            if (this.arr_non_snn_modules[j] == type) return "non_snn";
        }

        for (var i = 0; i < this.arr_snn_modules.length; i++) {
            if (this.arr_snn_modules[i] == type) return "snn";
        }

        return '';
        },


    nextPage: function (type, vertical) {
        if ("undefined" != typeof (vertical))
            this.current_notSNN_vertical = vertical;

        var mod_type = this.getModuleType(type);

        if ("snn" == mod_type) {
            this.init();
        } else if ("non_snn" == mod_type) {
            this.not_snn_init();
        }

        var next_index = this.arr_current_page[type] + 1;
        if (next_index > this.arr_max_page[type]) {
            if ("snn" == mod_type) {
                next_index = this.arr_max_page[type];
            } else {
                next_index = 0;
            }
        }
        this.setPage(next_index, type);
    },

    prevPage: function (type, vertical) {
        if ("undefined" != typeof (vertical))
            this.current_notSNN_vertical = vertical;

        var mod_type = this.getModuleType(type);

        if ("snn" == mod_type) {
            this.init();
        } else if ("non_snn" == mod_type) {
            this.not_snn_init();
        }


        var prev_index = this.arr_current_page[type] - 1;
        if (prev_index < 0) {
            if ("snn" == mod_type) {
                prev_index = 0;
            } else {
                prev_index = this.arr_max_page[type];
            }
        }
        this.setPage(prev_index, type);
    },

    /*************************************************************************
    * Not SNN Section
    */
    /*
    * Auto click for Most Popular
    */
    initAutoClickMpPage: function () {
        this.nextNotSnnMpPage();
        this.mpTimeout = setTimeout("SNPModule.initAutoClickMpPage()", this.ms);
    },

    /*
    * Most popular
    */
    nextNotSnnMpPage: function (vertical, user_click) {
        this.nextPage('not_signed_mp', vertical);
    },

    prevNotSnnMpPage: function (vertical, user_click) {
        this.prevPage('not_signed_mp', vertical);
    },
    /*
    * Auto click for Most Popular
    */
    initAutoClickMBCPage: function () {
        this.nextNotSnnMBCommentsPage();
        this.mpTimeout = setTimeout("SNPModule.initAutoClickMBCPage()", this.ms);
    },
    /*
    * Most by Comments
    */
    nextNotSnnMBCommentsPage: function (vertical, user_click) {
        this.nextPage('not_signed_mbc', vertical);
    },

    prevNotSnnMBCommentsPage: function (vertical, user_click) {
        this.prevPage('not_signed_mbc', vertical);
    },
    /*
    * Auto click for Most By Facebook
    */
    initAutoClickMBFPage: function () {
        this.nextNotSnnMBFacebookPage();
        this.mpTimeout = setTimeout("SNPModule.initAutoClickMBFPage()", this.ms);
    },
    /*
    * Most by Facebook
    */
    nextNotSnnMBFacebookPage: function (vertical, user_click) {
        this.nextPage('not_signed_mbf', vertical);
    },

    prevNotSnnMBFacebookPage: function (vertical, user_click) {
        this.prevPage('not_signed_mbf', vertical);
    },
    /*
    * Auto click for Most By Twitter
    */
    initAutoClickMBTPage: function () {
        this.nextNotSnnMBTwitterPage();
        this.mpTimeout = setTimeout("SNPModule.initAutoClickMBTPage()", this.ms);
    },
    /*
    * Most by Twitter
    */
    nextNotSnnMBTwitterPage: function (vertical, user_click) {
        this.nextPage('not_signed_mbt', vertical);
    },

    prevNotSnnMBTwitterPage: function (vertical, user_click) {
        this.prevPage('not_signed_mbt', vertical);
    },

    /*
    * Most reporters
    */
    nextNotSnnMpReportersPage: function (vertical) {
        this.nextPage('not_signed_mpr', vertical);
    },

    prevNotSnnMpReportersPage: function (vertical) {
        this.prevPage('not_signed_mpr', vertical);
    },
    /*
    * Don't miss
    */
    nextNotSnnDontMissPage: function () {
        this.nextPage('not_signed_dm');
    },

    prevNotSnnDontMissPage: function () {
        this.prevPage('not_signed_dm');
    },

    /* END OF NON SNN */

    nextFriendsPage: function () {
        this.nextPage('friends');
    },

    prevFriendsPage: function () {
        this.prevPage('friends');
    },

    nextMpPage: function () {
        this.nextPage('mp');
    },

    prevMpPage: function () {
        this.prevPage('mp');
    },

    nextMpReportersPage: function () {
        this.nextPage('mpr');
    },

    prevMpReportersPage: function () {
        this.prevPage('mpr');
    },
    /*
    * Most Popular in Big News
    */
    nextMpBNPage: function () {
        this.nextPage('mp_bn');
    },

    prevMpBNPage: function () {
        this.prevPage('mp_bn');
    },
    /*
    * Most Popular in Social News
    */
    nextMpHPPage: function () {
        this.nextPage('mp_hp');
    },

    prevMpHPPage: function () {
        this.prevPage('mp_hp');
    },

    /*
    * Most by Comments in Social News
    */
    nextMBCPage: function () {
        this.nextPage('mbc');
    },

    prevMBCPage: function () {
        this.prevPage('mbc');
    },
    /*
    * Most on Facebook in Social News
    */
    nextMBFPage: function () {
        this.nextPage('mbf');
    },

    prevMBFPage: function () {
        this.prevPage('mbf');
    },
    /*
    * Most on Twitter in Social News
    */
    nextMBTPage: function () {
        this.nextPage('mbt');
    },

    prevMBTPage: function () {
        this.prevPage('mbt');
    },

    nextDMPage: function () {
        this.nextPage('dm_hp');
    },

    prevDMPage: function () {
        this.prevPage('dm_hp');
    },


    nextActPage: function () {
        this.nextPage('act');
    },

    prevActPage: function () {
        this.prevPage('act');
    },

    nextCommentPage: function () {
        this.nextPage('comment');
    },

    prevCommentPage: function () {
        this.prevPage('comment');
    },

    /*
    * New Follower in Social News
    */
    nextFollowerPage: function () {
        this.nextPage('follower');
    },

    prevFollowerPage: function () {
        this.prevPage('follower');
    },

    removeCurrentFollower: function () {
        if (this.arr_max_page['follower'] == 0) {
            // just 1 follower - hide module
            HuffPoUtil.hide('snp_follower');
        } else {
            // remove current page after switching to other
            var page = $('snp_follower_page_' + this.arr_current_page['follower']);
            if (this.arr_max_page['follower'] != this.arr_current_page['follower']) {
                SNPModule.nextFollowerPage();
                this.arr_current_page['follower']--;
            } else SNPModule.prevFollowerPage();
            this.arr_max_page['follower']--;

            var parent = page.parentNode;
            parent.removeChild(page);

            // change pages id's
            for (var i = 0, j = 0; i < parent.childNodes.length; i++) if (parent.childNodes[i].nodeName == 'DIV')
                parent.childNodes[i].id = 'snp_follower_page_' + j++;

            if (this.arr_max_page['follower'] == 0) {
                // if just 1 page remaining - remove pagination,
                HuffPoUtil.hide('snp_follower_pagination');
            } else {
                // change page counter
                $('snp_follower_max_page_counter').innerHTML = this.arr_max_page['follower'] + 1;
                $('snp_follower_page_counter').innerHTML = this.arr_current_page['follower'] + 1;
            }
        }
    },

    acceptFollower: function (e, userid) {
        SocialFriends.acceptFollower(userid, function () {
            // on success
            SNPModule.removeCurrentFollower();
        }, function () {
            // on error

        });
    },

    declineFollower: function (e, userid) {
        SocialFriends.declineFollower(userid, function () {
            // on success
            SNPModule.removeCurrentFollower();
        }, function () {
            // on error

        });
    },


    nextTwitterPage: function () {
        this.nextPage('twitter_friends');
    },

    prevTwitterPage: function () {
        this.prevPage('twitter_friends');
    },

    nextInfluencersPage: function () {
        this.nextPage('twitter_influencers');
    },

    prevInfluencersPage: function () {
        this.prevPage('twitter_influencers');
    },

    removeRecentActivity: function (id, is_first) {
            this.init();
            var o_id = 'snp_recent_activity_' + id;
        var get_url = '/users/social_news_project/snp_module_action.php?action=delete&id=' + id + '&user_id=' + this.url_user_id + '&page=' + this.arr_current_page['act'];
        if (is_first) {
                o_id = 'snp_current_reading_entry';
                get_url += '&type=entry';
                //send track request to not write this entry
                SNProject.track(id, 'delete_entry_view');
            }

            SNPModule.animatePage(0, o_id);

            //send remove request
            C.asyncRequest('GET', get_url, {
            success: function (o) {
                if (o.responseText != '') {
                    if (SNPModule.animation) {
                                SNPModule.animation.stop();
                            }
                            var obj = $(o_id);
                            var p = obj.parentNode;
                            p.removeChild(obj);

                    if (o.responseText != 'ok') {
                                p.innerHTML += o.responseText;
                                SNPModule.animatePage(1, p.lastChild.id);

                                //clear all cached next pages
                        for (var i = SNPModule.arr_current_page['act'] + 1; i <= SNPModule.arr_max_page['act']; i++) {
                                    var tmp = '';
                            if (tmp = $('snp_act_page_' + i)) {
                                        var parent = tmp.parentNode;
                                        parent.removeChild(tmp);
                                    }
                                }
                            }
                    else {
                                //we're in the last 3 records
                                var last_child = Dom.getLastChild(p);
                        if (!last_child || last_child.id == 'snp_current_reading_entry') {
                                    p.innerHTML = 'You have no recorded activities';
                                }
                            }
                        }
                else {
                            HPError.e();
                            SNPModule.animatePage(1, o_id);
                        }
                    },
            failure: function (o) {
                        HPError.e();
                        SNPModule.animatePage(1, o_id);
                    },
                    timeout: 5000
                });
        },

	show_user_level_box: function() {
		// sometimes, with Moto design we need to use more taller box
		var height = 173;
		/*
		if ($("snp_friends_module").className == "moto") {
			height = 180;
		}
		*/
		var animation = new Y.util.Anim($("snn_module_user_badge"), {height: { to: height }}, 1, Y.util.Easing.easeOut);
		animation.animate();
	},

	hide_user_level_box: function(my_level) {
		var animation = new Y.util.Anim($("snn_module_user_badge"), {height: { to: 0 }}, 1, Y.util.Easing.bounceOut);
		HuffCookies.setCookie("level_knowledge", my_level);
		animation.animate();
	},

        /* lightbox methods */
    // region
        lightbox: {

            isFormLoaded: false,
            zone_info: '',

            init:function() {
                //get from global variable
                if (typeof(zone_info) != "undefined")
                    this.zone_info = zone_info;
                else if (typeof(QV) != "undefined" && typeof(QV.ad_zone) != "undefined")
                    this.zone_info = QV.ad_zone;
                else
                    this.zone_info = 'huffpost.general/general';
            },

            show: function(ltype, entry_id, entity_id, friend_user_id, identification) {
            if (!this.isFormLoaded) {
                    var me = this;
                    //default for 'entry_details' type
                    var url = '/users/social_news_project/snp_module_lightbox.php?type=entry_details&entry_id='+entry_id + '&user_id=' + SNPModule.url_user_id;
                switch (ltype) {
                        case 'comment_details':
                            url = '/users/social_news_project/snp_module_lightbox.php?type=comment_details&entry_id='+entry_id + '&user_id=' + SNPModule.url_user_id + '&comment_id=' + entity_id;
                        break;

                        case 'vote_details':
                            url = '/users/social_news_project/snp_module_lightbox.php?type=vote_details&entry_id='+entry_id + '&user_id=' + SNPModule.url_user_id + '&friend_user_id=' + friend_user_id + '&slideshow_id=' + entity_id;
                        break;

                        case 'poll_vote_details':
                            url = '/users/social_news_project/snp_module_lightbox.php?type=poll_vote_details&entry_id='+entry_id + '&user_id=' + SNPModule.url_user_id + '&friend_user_id=' + friend_user_id + '&user_answer_id=' + entity_id;
                        break;

                        case 'comment_activity_details':
                            url = '/users/social_news_project/snp_module_lightbox.php?type=comment_activity_details&entry_id='+entry_id + '&user_id=' + SNPModule.url_user_id + '&parent_id=' + entity_id + '&reply_user_id=' + friend_user_id + '&comment_id=' + identification ;
                        break;

                        case 'contribute_details':
                            url = '/users/social_news_project/snp_module_lightbox.php?type=contribute_details&entry_id='+entry_id + '&user_id=' + SNPModule.url_user_id + '&contribute_id=' + entity_id + '&friend_user_id=' + friend_user_id;
                        break;

                    }
                    HuffConnect.showLoader();
                    YAHOO.util.Connect.asyncRequest(
                        'GET',
                        url, {
                            success: function(o) {
                                me.onLoadSuccess(o);
                            },
                            failure: function(o) {
                                me.onLoadFail(o);
                            }
                        }
                    );
                }
            },

            onLoadSuccess: function(o) {
				HuffConnect.hideModal();
				HuffConnect.socialModal({
					inner_html: o.responseText,
                    onclose: this.close
				});
                this.isFormLoaded = true;
				if(jQuery('#snn_qr_ad').length)
				{
					if (HuffPoUtil.trim(jQuery('#snn_qr_ad').html()) == "")
					{
						$('snn_qr_ad').innerHTML = '<div class="visible_frame"><iframe src="http://ad.doubleclick.net/adi/' + this.zone_info + ';ptile=4;sz=300x250;ord=' + HuffPoUtil.WEDGJE.ord() + '?" width="300" height="250" marginwidth="0" marginheight="0" frameborder="0" scrolling="no" name="social_news_300x250" id="social_news_300x250"></iframe></div>';
					} else {
						$('snn_qr_ad').style.display = "block";
					}
				}
            },

            onLoadFail: function(o) {
                HPError.e();
				HuffConnect.hideModal();
            },

            close: function() {
                SNPModule.lightbox.isFormLoaded = false;
            }

    }, /* end of lightbox object */
    // endregion

	// Hack to spawn Conversations from really old modules
	open_conversations_overlay: function(options) {
		var callback = function() {
			window.top.Conversations.app.openOverlayFromNotification(options);
		};
		// Sanitize this data, it's coming from deep in MT
		options.comment_id = parseInt(options.comment_id, 10);
		options.entry_id = parseInt(options.entry_id, 10);
		if ( options.comment_id && !isNaN(options.comment_id) && options.entry_id && !isNaN(options.entry_id) ) {
			if ( window.top.Conversations && window.top.Conversations.app ) {
				callback();
			} else {
				window.top.ConversationsLoader.skipLoadTest = true;
				window.top.ConversationsLoader.load(callback);
			}
			return true;
		}
		return false;
	},

    /* stealth */

        stealth:  {

            current_status:'',
            hidden: false,

            init: function() {

            if (jQuery('#snp_friends_module .stealth-mode')) {
                    jQuery('#snp_friends_module .stealth-mode .switcher').click(function() { SNPModule.stealth.update(); });
                if (HuffPrefs.get('read_tracking') === true) {
                        this.disableStealthMode();
                    }
                else {
                        this.enableStealthMode();
                    }
                }

            },

            update: function() {

                var url = '';

            switch (this.current_status) {
                    case 'on':
                        url = '/users/social_news_project/snp_module_action.php?action=change_stealth&user_id=' + SNPModule.url_user_id + '&value=' + 1;
                    break;

                    // off
                    default:
                        url = '/users/social_news_project/snp_module_action.php?action=change_stealth&user_id=' + SNPModule.url_user_id + '&value=' + 0;
                    break;
                }

                var me = this;

                YAHOO.util.Connect.asyncRequest(
                    'GET',
                    url, {
                        success: function(o) {
                            me.onSuccess(o);
                        },
                        failure: function(o) {
                            me.onFail(o);
                        }
                    }
                );

            },

			onSuccess: function(o) {

            if ('ok' == o.responseText) {
                	if(SNPModule.skin)

                    	SNPModule.skinned_module_stealth.onUpdated();

                if ('on' == SNPModule.stealth.current_status) {
                                        this.disableStealthMode();
			        }
			        else // off
			        {
                                        this.enableStealthMode();
			        }
			}
            else {
			   HPError.e();
			}

			},

			onFail: function(o) {

			    //SNPModule.animatePage(1, $('stealth_mode'));

			},

			close: function() {

			    HuffPoUtil.hide('snp_stealth_bubble');
			    this.hidden = true;
			},

            disableStealthMode: function() {
                jQuery('#snp_friends_module .stealth-mode .on').removeClass('active');
                jQuery('#snp_friends_module .stealth-mode .off').addClass('active');
                SNPModule.stealth.current_status = 'off';
            },

            enableStealthMode: function() {
                jQuery('#snp_friends_module .stealth-mode .off').removeClass('active');
                jQuery('#snp_friends_module .stealth-mode .on').addClass('active');
                SNPModule.stealth.current_status = 'on';
            }
    }, /* end of stealth */

    /* entryInside */

    entryInside:  {

        loading: function(responseText) {

            if ($('huffpost_snn_entry_inside')) {
                var removed = $('huffpost_snn_entry_inside').parentNode.removeChild($('huffpost_snn_entry_inside'));
            }

            var div = document.createElement('div');

            div.setAttribute('id','huffpost_snn_entry_inside');
            div.innerHTML = '<br/>' + responseText + '<br/>';
            if (HPConfig.wide_format) {
                if (2 == HPConfig.blog_id) {
			var news_content = Dom.get('news_content');
			var news_content_first_child = Dom.getFirstChild(news_content);

			if (HPConfig.entry_expanded > 0){
				var element = Dom.getElementsByClassName('link_entries', 'DIV', news_content_first_child)[0];
				if (element) news_content_first_child.insertBefore(div, element.nextSibling);
				else news_content.insertBefore(div, news_content_first_child);
			} else {
				news_content.insertBefore(div, news_content_first_child);
			}
                } else if (3 == HPConfig.blog_id) {
                    Dom.get('blog_content').insertBefore(div, Dom.get('blog_content').firstChild);
                }
            } else if ($('entry_12345')) { // for news
                $('entry_12345').appendChild(div);

            } else if ($('entry_body')) { // for blog posts
                var added = $('entry_body').appendChild(div);
            }

            var tabView = new YAHOO.widget.TabView('snn_entry_inside');
            this.init();

        },

        init: function() {
            SNPModule.init_module('entry_inside_comment');

            if (SNPModule.arr_max_page['entry_inside_comment'] > 9) {
                $('entry_inside_all_pages').style.width = "140px";
            }

        },

        next: function() {

            this.set_page(SNPModule.arr_current_page['entry_inside_comment'] + 1);
        },

        prev: function() {

            this.set_page(SNPModule.arr_current_page['entry_inside_comment'] - 1);

        },

        set_page: function(page) {
            if (SNPModule.isLocked('entry_inside_comment')) return false;
            if (page == SNPModule.arr_current_page['entry_inside_comment']) {
                return false;
            } else if (page < 0) { // loop is disabled
                return false;
            } else if (page > SNPModule.arr_max_page['entry_inside_comment']) {  // loop is disabled
                return false;
            }

            $("count_comment_" + SNPModule.arr_current_page['entry_inside_comment']).className = "";
            $("count_comment_" + page).className = "entry_inside_current_page";

            SNPModule.setPage(page, 'entry_inside_comment');

            if ("none" == $('count_comment_' + page).style.display) {
                HuffPoUtil.hide('count_comment_' + (page + 9));
                $('count_comment_' + page).style.display = "inline-block";
            }

            if (page > 8) {
                HuffPoUtil.hide('count_comment_' + (page - 9));
                $('count_comment_' + page).style.display = "inline-block";
            }
        }

    }, /* end of entryInside */


    /* snnTwitterStatus */
    snnTwitterStatus: function(params){
        var url_to_short = (params && params.url_to_short) || false;

        var status = $('tweet_status').value;
        status = status.replace( /^\s+/g, "" );
        status = status.replace( /\s+$/g, "" );
        if (status.length <= 140 && status != '') {
            status = encodeURIComponent(status);
            var get_data = "?tweet=" + status + "&eid=" + HuffPoUtil.GetEntryID();
            if (url_to_short) {
                get_data += "&url_to_short=" + encodeURIComponent(url_to_short);
            }
            $('snn_resp_tweet').innerHTML = "<div style=\"text-align:center\"><img src=\"/images/ajax-loader.gif\" /></div>";
            C.asyncRequest('GET', '/users/social_news_project/twitter/post_to_twitter.php' + get_data, {
                success: function(o){
					var response_obj = eval( " ( " + o.responseText + " ) " );
                    if (response_obj && response_obj.response_code == "200") {
                        $('snn_resp_tweet').innerHTML = _("Twitter status set!");
                        HuffPoUtil.flash($('snn_resp_tweet'));
                        $('tweet_status').value = "";
                        SNPModule.textCounter();
                    }
                    else {
                        $('snn_resp_tweet').innerHTML = _("Unable to process!");
                        HuffPoUtil.hide('hidden_snp_body');
                    }
                },
                failure: function(o) {
                    if ($('hidden_snp_body')) {
                        HuffPoUtil.hide('hidden_snp_body');
                        HPError.e();
                    }
                },
                timeout: 20000
            });
        }
        else if (status.length > 140) {
            $('snn_resp_tweet').innerHTML = _("Tweet limit exceeded!");
            $('tweet_status').focus();
        }
        else {
            $('snn_resp_tweet').innerHTML = _("Please enter some text!");
            $('tweet_status').focus();
        }
        if($('snn_resp_tweet'))
            setTimeout("$('snn_resp_tweet').innerHTML='';", 5000);

        return false;
    }, /* end of snnTwitterStatus */

    twitterModule: function (callback) {
        // user-facing error message
        // if available, an error code will also be returned, and will log to console if HPError.setDebug(true) is set
        this.error_msg = _("Sorry, we had some trouble getting your Tweets. Please check back soon!");

        var entry = HuffPoUtil.GetEntryID();
        this.twitter_timeline_type  = 'home';
        var mod_el = $(this.tweetout_module_div);
        if (mod_el) {
            mod_el.style.display = "block";
            mod_el.innerHTML = '<div style="text-align:center; padding:20px 0;"><div class="snn_twitter_loading">' + _("Loading Twitter module...") + '</div><div class="snn_twitter_loading_img"><img width="32" height="32" src="http://s.huffpost.com/images/loader.gif" alt="" /></div></div>';
            var callback = {
            argument:[callback],
            success: function(o) {
                    var callback = o.argument[0];
                    SNPModule.TwitterCallbacks(o, callback);
                },
               failure: function(o) {
                    if ($('hidden_snp_body')) {
                        HuffPoUtil.hide('hidden_snp_body');
                        HPError.e();
                    }
                }
            };
            var fb_session = HPFB.getSessionForServer();
            var url = '/users/social_news_project/twitter/show_twitter_module.php?' + (entry ? 'entry_id=' + entry : '') + '&' + fb_session;
            if ( SNPModule.skin )
                url += ((/\?/.test(url)) ? '&' : '?') + 'skin=' + SNPModule.skin;
            var co = YAHOO.util.Connect.asyncRequest('GET', url, callback);
        }
    },

    TwitterCallbacks: function (o, callback) {
        var callback_type = typeof(callback);
        var response = o.responseText;
        var error_msg = SNPModule.twitterModule.error_msg;

        if (response != "") {
            var js_resp = JSON.parse(response);
            var resp = js_resp.html;
            var resp_code = js_resp.response_code;
            var mod_el = $(this.tweetout_module_div);

            if (resp && resp_code == 200) {
                if (mod_el) {
                    mod_el.innerHTML = resp;

                    //Hiding twitter related elements
                    if($('top_twitter_info'))
                        Dom.setStyle($('top_twitter_info'), 'display', 'none');
                    if($('service_bottom_bar') && SNProject.service_bar=='twitter')
                        Dom.setStyle($('service_bottom_bar'), 'display', 'none');

                    //Call callback function if specified
                    if(callback_type == 'function')
                        callback();

                    //Init module paging vars
                    SNPModule.init_module('twitter_friends');

                    //Flashing module when loads and adding textarea events 
                    HuffPoUtil.yellowFlash(this.tweetout_module_div);
                    E.on($('tweet_status'), 'keyup', HPUtil.enforceTextAreaLimit, {chars: 140});
                    E.on($('tweet_status'), 'change', HPUtil.enforceTextAreaLimit, {chars: 140});

                    //Check twitter linked status when the module loads and call networkToLink() if not linked
                    if ($('twitter_linked_status')) {
                        if (parseInt($('twitter_linked_status').innerHTML) == 0) {
                            mod_el.innerHTML = "";
                            Dom.setStyle(mod_el, 'display', 'none');
                            SNPModule.networkToLink();
                            HuffCookies.setCookie('twitter_linked', '0');
                        }
                    }

                    //Reseting other module vars
                    SNPModule.resetTwitterModuleValues();

					//rebalance columns on front pages now that twitter module has rendered right column longer
					huff.emit('content/update');

                    //Call check for new tweets 
                    if($('max_tweet_id'))
                        SNPModule.max_tweet_id = parseInt($('max_tweet_id').innerHTML);

                    if (SNPModule.check_new_tweets_flag)
					{
						if(SNPModule.interval_id) {
							clearInterval(SNPModule.interval_id);
							SNPModule.interval_id = false;
						}
						SNPModule.interval_id = setInterval(function(){SNPModule.checkNewTweets();}, SNPModule.check_tweets_rate);
					}

                    SNPModule.new_tweets_found = false;

                    if (SNPModule.skin) {
                        SNPModule.show_skinned_twitter_module();
                    }

                    //Processing comm hash tag
                    if (HPAds.tweet_comm_info && $('tweet_status')) {
                        $('tweet_status').value += ' ' + HPAds.tweet_comm_info.hash;
                        $('snn_twitter_comm_text').innerHTML = HPAds.tweet_comm_info.text;
                        $('snn_twitter_comm_text_cb').checked = true;
                        Dom.removeClass('snn_twitter_comm_text_wrapper', 'hidden');
                        E.on('snn_twitter_comm_text_cb', 'click', function(){
                            if ($('snn_twitter_comm_text_cb').checked) {
                                if(!$('tweet_status').value.match(HPAds.tweet_comm_info.hash)) $('tweet_status').value += ' ' + HPAds.tweet_comm_info.hash;
                            }
                            else {
                                $('tweet_status').value = $('tweet_status').value.replace(' ' + HPAds.tweet_comm_info.hash, '');
                            }
                            SNPModule.textCounter();
                        });
                    }
                }
            }
            else {
                mod_el.innerHTML = "<div class='module_error_response' style='text-align:center; padding:5px 0; color:#444;'><div class='error_message'>" + _("Unable to load the Twitter module") +"</div></div>";
                HPError.e({msg:error_msg,obj:response});
            }
        }
        else {
			HPError.e(error_msg);
        }
    },

    /*------------ Check new tweets for module function ----------------*/

    check_new_tweets_flag: true,
    max_tweet_id: 0,
    check_tweets_rate: 300000,
    new_tweets_found: false,
    new_tweet_call_status: false,
    times: 1,
	interval_id: false,

    checkNewTweets: function()
	{
        if (HPConfig && HPConfig.no_twitter_refresh) {
            return false;
        }

        if (this.max_tweet_id && !this.new_tweet_call_status)
		{
            var url = "/users/social_news_project/twitter/check_new_tweets.php";
            url += "?since_id=" + this.max_tweet_id + "&type=" + this.twitter_timeline_type;
            var cObj = C.asyncRequest('GET', url, {
                success: function (o)
				{
					var resp = JSON.parse(o.responseText);
                    var new_tweets = parseInt(resp.total_new_tweets);
                    var check_tweets = resp.check_new_tweets;
					
					//no more calls if tweets found exceeds 20
					if (new_tweets >= 20) {
						check_tweets = 0;
					}
					
					//If check_tweets is 0 we'll clear the interval and avoid any further calls to the twitter api
					if(check_tweets == 0)
					{
						clearInterval(SNPModule.interval_id);
						if (window.HPConfig) {
							window.HPConfig.no_twitter_refresh = true;
						}
					}

					if (new_tweets && SNPModule.max_tweet_id)
					{
                        SNPModule.new_tweets_found = true;
                        if ($("more_friend_tweets"))
						{
                            if (SNPModule.twitter_timeline_type == 'home')
							{
                                var ttext = _("New tweets!");
                                if (new_tweets == 1) {
                                    ttext = _("New tweet!");
                                }
                            }
                            else if (SNPModule.twitter_timeline_type == 'mentions')
							{
                                var ttext = _("New mentions!");
                                if (new_tweets == 1) {
                                    ttext = _("New mention!");
                                }
                            }
                            $('more_friend_tweets').innerHTML = "<a style=\"color:#222;\" href=\"javascript:void(0);\" onclick=\"SNPModule.twitterTimeline('" + SNPModule.twitter_timeline_type + "')\"><div class=\"some_new_tweets\">" + new_tweets + " " + ttext + "</div></a>";
                        }
                    }
                    SNPModule.new_tweet_call_status = false;
                },
                failure: function (o) {
                    if ($('hidden_snp_body')) {
                        HuffPoUtil.hide('hidden_snp_body');
                        HPError.e();
                        SNPModule.new_tweet_call_status = false;
                    }
                },
                timeout: 10000
            });

            this.new_tweet_call_status = true;
		}
        return false;
    },
    /*---------------------------------------------------------*/

    textCounter: function(input, countField){
        var maxlimit = 140;
        var field = input || $('tweet_status');
        countField = countField || $('tweet_char_limit');
        if (field) {
            if (field.value.length > maxlimit) {
                countField.innerHTML = 0;
                new YAHOO.util.ColorAnim(field, {backgroundColor: { from: '#26CFCC', to: '#FFFFFF' } });
            }
            else
                countField.innerHTML = maxlimit - field.value.length;
        }
    },


    favoriteTweet: function(status_id, cb){
        if(cb == null) cb = function() {};

        var get_data = "?status_id=" + status_id;
        var el = $('fav_span_'+status_id);
        C.asyncRequest('GET', '/users/social_news_project/twitter/favorite_tweet.php' + get_data, {
        success: function(o){
                if (o.responseText && /success_favorited/.test(o.responseText)){
                    if(el) el.innerHTML = "<img src=\"/images/tfaved.gif\" />";
                    $('snn_resp_tweet').innerHTML = _("Already a favorite!");
                    HuffPoUtil.flash($('snn_resp_tweet'));
                }
                else if (o.responseText && /success/.test(o.responseText)){
                    if(el) el.innerHTML = "<img src=\"/images/tfaved.gif\" />";
                    $('snn_resp_tweet').innerHTML = _("Tweet added to Favorites");
                    HuffPoUtil.flash($('snn_resp_tweet'));
                }
                else{
                    $('snn_resp_tweet').innerHTML = _("Unable to process!");
                    HuffPoUtil.hide('hidden_snp_body');
                }
                cb(o.responseText);
                if($('snn_resp_tweet'))
                    setTimeout("if($('snn_resp_tweet')){$('snn_resp_tweet').innerHTML='';}", 5000);
            },
            failure: function(o) {
                if ($('hidden_snp_body')) {
                    HuffPoUtil.hide('hidden_snp_body');
                    HPError.e();
                }
                cb('failure');
            },
            timeout: 20000
        });
    },

    reTweet: function (status_id) {
        var screen_name = $('username_' + status_id).innerHTML;
        var tweet = $('plain_tweet_' + status_id).innerHTML;

        var el = $('tweet_status');

        if (tweet && screen_name) {
            el.value = "RT @" + screen_name + " " + tweet;
            if (el.value.length > 140) {
                el.value = el.value.substr(0, 137) + "...";
            }
            this.textCounter();
            el.focus();
        }
        HPTrack.trackEvent('twitter_snn', 'click', 'retweet');
        return;
    },

    replyTweet: function (status_id) {
        var screen_name = $('username_' + status_id).innerHTML;
        var el = $('tweet_status');

        if (el && screen_name) {
            el.value = "@" + screen_name + " ";
            var end = el.value.length;
            if(el.setSelectionRange)
                el.setSelectionRange(end, end);
        }
        return false;
    },

    twitterTimeline: function (type) {
        if(type == this.twitter_timeline_type && !this.new_tweets_found)
            return;
        else if (this.new_tweets_found) {
            if($("more_friend_tweets")) $("more_friend_tweets").innerHTML= "";
        }

        var error_msg = SNPModule.twitterModule.error_msg;
        this.max_tweet_id = 0;
        if (type == 'mentions') {
            //$('ttop_links').innerHTML = "<a href=\"javascript:void(0);\" id=\"tmore_links\" style=\"color:#FFF;\" onclick=\"SNPModule.twitterTimeline('home');\"><span class=\"small_ttext\">(Friends)</span></a>";
            $('ttop_links').innerHTML = "<a href=\"javascript:void(0);\" id=\"tmore_links\" onclick=\"SNPModule.twitterTimeline('home');\"><span class=\"small_ttext\">" + _("Get Back") + "</span></a>";
        }
        else if (type == 'home') {
            //$('ttop_links').innerHTML = "<a href=\"javascript:void(0);\" id=\"tmore_links\" style=\"color:#FFF;\" onclick=\"SNPModule.twitterTimeline('mentions');\"><span class=\"small_ttext\">(Mentions)</span></a>";
            $('ttop_links').innerHTML = "";
        }

        var entry = HuffPoUtil.GetEntryID();
        var fb_session = HPFB.getSessionForServer();
        var get_data = "?type=" + type + "&new_tweets_found=" + this.new_tweets_found + (entry ? '&entry_id=' + entry : '') + '&get_updates=1&' + fb_session;
        this.twitter_timeline_type = type;
        $('snp_twitter_friends_module_all_pages_here').innerHTML = '<div style="text-align:center; padding:15px 0;"><div class="snn_twitter_loading_img"><img width="32" height="32" src="http://s.huffpost.com/images/loader.gif" alt="" /></div></div>';
        HuffPoUtil.hide('tmodpaging');
        C.asyncRequest('GET', '/users/social_news_project/twitter/show_twitter_module.php' + get_data, {
            success: function (o)
			{
                var response = o.responseText;
                if (response != "")
				{
                    var js_resp = JSON.parse(response);
                    var resp = js_resp.html;
                    var resp_code = js_resp.response_code;

                    if (resp_code == 200)
					{
                        jQuery('#snp_twitter_friends_module_all_pages_here').html(resp);
                        jQuery('#snp_twitter_friends_page_counter').html(1);
                        SNPModule.arr_max_page['twitter'] = parseInt(jQuery('#snp_twitter_max_page_counter').text()) - 1;
                        SNPModule.arr_current_page['twitter'] = 0;

						HuffPoUtil.show('tmodpaging');

                        SNPModule.new_tweets_found = false;
                        SNPModule.max_tweet_id = js_resp.max_friend_tweet_id;
                    }
                    else
					{
                        HPError.e({ msg: error_msg, obj: response });
                    }
                }
                else {
                    HPError.e(error_msg);
                }
            },
            failure: function(o) {
                    HPError.e();
            },
            timeout: 20000
        });
    },

    /*-------------- #3254 --------------- */

    replyToUser: function (status_id) {
        var screen_name = $('username_' + status_id).innerHTML;
        var el = $('tweet_status');
        if (screen_name) {
            el.value = "@" + screen_name + " ";
            this.textCounter();
            el.focus();
        }
        HPTrack.trackEvent('twitter_snn','click','reply');
        return;
    },


    user_profile_open        : false,
    twitter_id_opened        : 0,
    user_profile_call_status : false,
    show_user_bio            : false,

    resetTwitterModuleValues: function () {
        this.user_profile_open  = false;
        this.twitter_id_opened  = 0;
        this.user_profile_call_status = false;
        this.show_user_bio      = false;
    },


    facebook_like_button: function (id, url, type, obj) {
		if(HPBrowser.isIEOld()) {
			Dom.setAttribute($('snp_mp_hp_subpage_' + id), 'onmouseover', null);
			return false;
		}

		if($('fb_like_button_iframe_'+id)) {
			$('fb_like_button_iframe_'+id).src = 'http://www.facebook.com/plugins/like.php?locale=en_US&href='+url+'&layout=button_count&amp;show_faces=true&width=165&action='+type+'&colorscheme=light&height=21';
			$('fb_like_button_iframe_'+id).onload = function() { $('fb_like_button_iframe_'+id).className += ' white_bg'; };
		}

		if($('snp_mp_hp_subpage_' + id)) {
			Dom.setAttribute($('snp_mp_hp_subpage_' + id), 'onmouseover', null);
		}
		else if (obj) {
			Dom.setAttribute(obj, 'onmouseover', null);
		}
	}
};

/*
    "Hot On" version of Most Popular module
*/
SNPModule.HotOn = {

    init: function()
    {
        var tracker = HPTrack.Module('hot_on', 'Hot On');
        tracker.impression();
        var event_handler = new HPTrack.Module.DelegatedHandler(tracker);

        // initialize click tracking
        E.on('most_popular_social', 'click', event_handler, this, true);
    }
};

/*
    Initialize tracking on FB buttons hp_track attribure is required: example mostpop_entry
*/
SNPModule.initLikeTracking = function(tracker) 
{
    HPFB.ensureInit(function() 
    { 
        var callback = function(action, href, elem)
        {
            var label = 'Facebook';
            label = HPTrack.Module.getTrackingPrefix(elem.dom) + label;

            tracker.event(action, label);

            return { localy_tracked: true };
        }

        HPFB.Tracking.Subscribe(['Liked','Unliked', 'Recommended', 'Unrecommended'], ['mostpop_entry'], true, callback);
    }); 
};

SNPModule.addEntriesInside = function(html) {
	html = html || '';
	HPUtil.loadAndRun('/assets/js.php?f=yui_2.7.0/build/tabview/tabview-min.js', function() {
		HPUtil.onPageReady(function() {
			SNPModule.entryInside.loading(html);
		});
	}, null, this);
	return;
};

var HuffPromo={placeholder:"huff_promo_space",placeholder_el:false,promo_displayed:false,ny_promo:false,is_on:true,init:function(){if(this.placeholder_el){return true}var a=$(this.placeholder);if(a){this.placeholder_el=a}else{return false}return true},ieUpgradePromo:function(){var a=HPBrowser.version();if(!this.init()||this.promo_displayed==true||a!=6){return}var d=HuffCookies.getCookie("ieupgrade_promo");if(d!="1"){var c="			<div>				<div class='close_promo_link'><a href='javascript:HuffPromo.closePromo(\"ie_upgrade\");'><img src='/images/close-black.png' /></a></div>				<div class='float_left ie_icon'></div>				<div class='float_left ie_icon_text'><span class='ie_promo_bold'>Enhance your web experience!</span>&nbsp;HuffPost recommends that users&nbsp;<a href='http://www.microsoft.com/nz/windows/internet-explorer/default.aspx' target='_blank'>upgrade to the latest version of Internet Explorer.</a></div>				<div class='ie_icon_link'></div>				<div class='clear'></div>			</div>			";var b=document.createElement("div");b.id="ieupgrade_promo";b.className="ieupgrade_promo_main promo_blue";b.innerHTML=c;this.displayPromo("ieupgrade_promo",b)}return},displayPromo:function(b,a){if($("service_bottom_bar")){return}if(a&&this.placeholder_el){this.placeholder_el.appendChild(a);this.promo_displayed=true;switch(b){case"gbuzz_promo":var c=24;HuffCookies.setCookie(b,1,c);break;default:break}}return},closePromo:function(a){if(a=="ie_upgrade"){el=$("ieupgrade_promo");var b="ieupgrade_promo"}if(el&&this.placeholder_el){this.placeholder_el.removeChild(el);HuffCookies.setCookie(b,1)}return},chromeExtensionPromo:function(){if(navigator.userAgent.toLowerCase().indexOf("chrome")>-1&&typeof(localStorage)!="undefined"&&localStorage["show-chromeapp-popup"]!="0"){var g=HPTrack.Module("top promo","Top Promo");g.impression("chrome");var f="https://chrome.google.com/webstore/detail/khjialelnkjdomiblmnpcpjongleegef?hl=en-US";var e=function(){$("chrome_extension_promo").style.display="none";localStorage["show-chromeapp-popup"]=0};var h=function(){g.click("Chrome App");e()};var a=document.createElement("div");a.id="chrome_extension_promo";var c=document.createElement("span");c.innerHTML='Check out <a id="goog_newsglide_ch" href="'+f+'" target="_blank">NewsGlide</a>, our <a id="goog_ch" href="'+f+'" target="_blank">Google Chrome App</a>. The fastest news experience on the web...';a.appendChild(c);var d=document.createElement("a");d.href=f;d.id="install_button";d.target="_blank";d.onclick=h;a.appendChild(d);var b=document.createElement("a");b.href="#";b.id="close_button";b.onclick=e;a.appendChild(b);document.body.insertBefore(a,document.body.firstChild);$("goog_ch").onclick=h;$("goog_newsglide_ch").onclick=h;HuffPromo.animateHuffPromo("chrome_extension_promo")}},verticalPromo:function(e){var c=true,d="";e=e.toLowerCase();if(c&&HPConfig.current_vertical_name!=e&&typeof(localStorage)!="undefined"&&localStorage["show-vertical-popup"]!="0"){var i=HPTrack.Module("top promo","Top Promo");i.impression(e);var b="http://www.huffingtonpost.com/"+e;switch(e){case"new-york":d='<a id="vertical_ch" href="'+b+'" target="_blank">HuffPost New York</a>: Your news and city guide from the inside out.';break;default:d='Have you checked out <a id="vertical_ch" href="'+b+'" target="_blank">HuffPost Divorce</a>? It\'s everything you need to know to conquer the Big D.';break}var g=function(){$("vertical_promo").style.display="none";localStorage["show-vertical-popup"]=0};var a=document.createElement("div");a.id="vertical_promo";var h=document.createElement("span");h.innerHTML=d;a.appendChild(h);var f=document.createElement("a");f.href="#";f.id="close_button";f.onclick=g;a.appendChild(f);document.body.insertBefore(a,document.body.firstChild);$("vertical_ch").onclick=function(){i.click(e);g();return};HuffPromo.animateHuffPromo("vertical_promo",{to:26})}},eventPromo:function(f){var d=true;var h={};h.a="HuffPost Spotlight: Live Interview At 3:00 PM EST With <a href='http://www.huffingtonpost.com/2010/11/17/ok-go-video_n_777868.html' id='vertical_ch'>OK GO</a>.";h.b="HuffPost Spotlight: Live Interview At 4:00 PM EST With <a href='http://www.huffingtonpost.com/2010/11/17/perry-chen-kickstarter_n_777870.html' id='vertical_ch'>Perry Chen</a>.";if(d&&typeof(localStorage)!="undefined"&&localStorage["show-event-popup"]!="0"&&typeof(h[f])!=="undefined"){var g=HPTrack.Module("top promo","Top Promo");g.impression("event"+f);var e=function(){$("vertical_promo").style.display="none";localStorage["show-event-popup"]=0};var a=document.createElement("div");a.id="vertical_promo";var c=document.createElement("span");c.innerHTML=h[f];a.appendChild(c);var b=document.createElement("a");b.href="#";b.id="close_button";b.onclick=e;a.appendChild(b);document.body.insertBefore(a,document.body.firstChild);$("vertical_ch").onclick=function(){g.click("event"+f);e();return};HuffPromo.animateHuffPromo("vertical_promo",{to:26})}},adPromo:function(){return false},customPromo:function(e){if(typeof(e)==="undefined"){return false}var c=true;var j={};j.Blackberry="Check out HuffPost's NEW BlackBerry app. Click <a href='http://appworld.blackberry.com/webstore/content/19143' id='vertical_ch' target='_blank'>here</a> to download.";j.Prediction="Polish off your crystal ball. Play HuffPost's <a href='http://www.huffingtonpost.com/predict-the-news/' id='vertical_ch' target='_blank'>Predict the News</a>.";j.Facebook="Breaking news sent directly to your News Feed. Get <a href='http://facebook.com/huffingtonpost' id='vertical_ch' target='_blank'>HuffPost on Facebook</a>.";j.Twitter="Real-time updates from the Internet Newspaper. Follow <a href='http://twitter.com/huffingtonpost' id='vertical_ch' target='_blank'>HuffPost on Twitter</a>.";j.facebook_twitter="The Internet Newspaper &mdash; at your doorstep. Follow HuffPost on <a href='http://facebook.com/huffingtonpost' id='vertical_chf' target='_blank'>Facebook</a> and <a href='http://twitter.com/huffingtonpost' id='vertical_cht' target='_blank'>Twitter</a>.";j.DailyBrief="<a href='http://www.huffingtonpost.com/huffingtonpost/new-daily-brief_b_811083.html' target='_blank'><img src='/images/chrome_extension/H_logo_2ox20.png' height='20' width='20' align='top' /> Sign Up for HuffPost's Newly Redesigned Daily Brief</a>";j.commercial=HuffPromo.adPromo();j.SiteModeA="<img src='/images/promo/huff_promo_icon.png' height='20' width='20' align='top' class='msPinSite' />&nbsp;&nbsp;Unlock the hidden powers of The Huffington Post with a click and a drag. <a href='javascript:void(0);' onclick='HuffPromo.siteModeModal();'>Learn more</a>";j.SiteModeB="<img src='/images/promo/huff_promo_icon.png' height='20' width='20' align='top' class='msPinSite' />&nbsp;&nbsp;Experience Huffington Post as a Pinned Site.  Drag the icon to your Windows Taskbar to pin.";j.SiteModeC="";var b=(typeof(localStorage)!="undefined")?true:false;if(b&&/SiteMode/.test(e)){localStorage["show-custom-popup"]=1}if(c&&b&&localStorage["show-custom-popup"]!="0"&&j[e]){var i=HPTrack.Module("top promo","Top Promo");i.impression(e.toLowerCase());var g=function(){$("custom_promo").style.display="none";localStorage["show-custom-popup"]=0};var a=document.createElement("div");a.id="custom_promo";var h=document.createElement("span");if(/SiteMode/.test(e)){localStorage.siteModePromoType=e;if(e=="SiteModeC"){return}h.className="promo-sitemode"}else{h.className="promo-"+e.toLowerCase()}h.innerHTML=j[e];a.appendChild(h);var d=document.createElement("a");d.href="#";d.id="close_button";d.onclick=g;a.appendChild(d);document.body.insertBefore(a,document.body.firstChild);if("facebook_twitter"==e){$("vertical_chf").onclick=function(){i.click("Facebook via twitter/fb");g();return};$("vertical_cht").onclick=function(){i.click("Twitter via twitter/fb");g();return}}else{var f=$("vertical_ch");if(f){f.onclick=function(){i.click(e);g();return}}}HuffPromo.animateHuffPromo("custom_promo",{to:26})}},siteModeModal:function(){HuffConnect.showLoader();HPUtil.addCSS("huff_promo_sitemode.css");HPUtil.loadAndRun(["/include/lib/modules/sitemode_promo.js"],function(){HPTrack.Module("top promo").click("Show SiteMode Details");PromoSiteMode.LoadModal();return});return},NY:function(){if(HuffPromo.adPromo()){return}if(HPConfig.current_vertical_name!=="homepage"){return false}var a=HuffCookies.get("geostate");if(a=="New+York"||a=="New+Jersey"||a=="Connecticut"){$("promo_ny").innerHTML='<a href="/new-york/"><img src="/images/promo/geolocal_promo_ny.jpg" alt="The Huffington Post: New York City" width="224" height="29" onload="HPUtil.show(\'promo_ny\');" /></a>';this.ny_promo=true}},NewsGlide:function(){if(navigator.userAgent.toLowerCase().indexOf("chrome")>-1&&typeof(localStorage)!="undefined"&&localStorage["show-newsglide-popup"]!="0"&&!this.ny_promo&&$("promo_ny")){if(HPConfig.current_vertical_name=="homepage"){$("promo_ny").innerHTML='<a href="https://chrome.google.com/webstore/detail/khjialelnkjdomiblmnpcpjongleegef?hl=en-US" target="_blank"><img src="/images/promo/geolocal_promo_newsglide.png" width="282" height="28" alt="The Huffington Post -- NewsGlide" onload="HPUtil.show(\'promo_ny\');" /></a>'}else{$("promo_ny").innerHTML='<a href="http://www.huffingtonpost.com/NewsGlide/#'+HPConfig.current_vertical_id+"/"+HPConfig.current_vertical_name+'" target="_blank"><img src="/images/promo/geolocal_promo_newsglide.png" width="282" height="28" alt="The Huffington Post -- NewsGlide" onload="HPUtil.show(\'promo_ny\');" /></a>'}}else{if(HPConfig.current_vertical_name!=="homepage"&&HPConfig.current_vertical_name!=="new-york"&&$("promo_ny")){$("promo_ny").innerHTML='<a href="/'+HPConfig.current_vertical_name+'/twitter/"><img src="http://s.huffpost.com/images/v/logos/twitter/promo.png" width="224" height="29" alt="The Huffington Post -- Twitter Edition" onload="HPUtil.show(\'promo_ny\');" /></a>'}}},animateHuffPromo:function(e,d){if(!e){return false}d=d||{};var c=d.to||37;$(e).style.display="block";var b=new Y.util.Anim(e,{height:{to:c}},1,Y.util.Easing.easeOut);b.animate()},rotation:function(){if(typeof(skin_driver)!=="undefined"){return false}if(HuffPromo.adPromo()!=false){HuffPromo.customPromo("commercial");return false}if(HuffPromo.is_on==false){return false}var b=["Chrome","Prediction","Facebook","Twitter","facebook_twitter","Blackberry","DailyBrief"];if((navigator.userAgent.indexOf("Trident/5.")>-1&&!window.SiteMode)){var d=Math.floor(Math.random()*3);var a="C";if(d==1){a="A"}else{if(d==2){a="B"}}HuffPromo.customPromo("SiteMode"+a)}else{if(navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var b=["Chrome","Prediction","Facebook","Twitter","facebook_twitter","Blackberry","DailyBrief"];var c=b[Math.floor(Math.random()*b.length)];if(c==="Chrome"){HuffPromo.chromeExtensionPromo()}else{HuffPromo.customPromo(c)}}else{b.splice(0,1);HuffPromo.customPromo(b[Math.floor(Math.random()*b.length)])}}}};HuffPoUtil.onPageReady(function(){if(location.hash&&location.hash.indexOf("sitemode")!=-1){HuffPromo.siteModeModal()}});
window._||(window._=function(a){return a});window.ngettext||(window.ngettext=function(a){return a});window.sprintf||(window.sprintf=function(a){return a});(function(e){var c={};var d={ANYWHERE_URL:"/ajax/twitter/anywhere/anywhere.php",ANYWHERE_URL_V2:"/ajax/twitter/anywhere/anywhere_v2.php"};var b={};b.anywhereWnd={hideTimeout:undefined,version:1,config:{window_delay:250}};b.anywhere=function(g,h){if(!g){g=e("body")}var i=typeof(g)==="string"?e("#"+g):g;if(i.length==0){return}e.proxy(this.setConfig(h),this);if(e("#hp_anywhere_wnd").length==0){this.anywhereWnd.loadCSS();e("#hp_anywhere_wnd").mouseenter(e.proxy(this.anywhereWnd.onMouseOver,this.anywhereWnd));e("#hp_anywhere_wnd").mouseleave(e.proxy(this.anywhereWnd.onMouseOut,this.anywhereWnd))}this.anywhereWnd.wnd=e("#hp_anywhere_wnd");this.anywhereWnd.content=e("#aw_content");this.anywhereWnd.triangle=e("#aw_triangle");a();i.mouseover(e.proxy(this.anywhereWnd.show,this.anywhereWnd));i.mouseout(e.proxy(function(n){var o=n.target;var j=o.className;if(!j||typeof(j.indexOf)!="function"){return}var l=j.indexOf("twitter-anywhere-user")>-1;var m=j.indexOf("twitter-anywhere-user-v2")>-1;if(!l&&!m){return}var k=this;clearTimeout(this.mouseoverTimeout);b.anywhereWnd.timeoutHide()},this.anywhereWnd))};b.setConfig=function(g){if(g){if(g.hasOwnProperty("window_delay")){this.anywhereWnd.config.window_delay=g.window_delay}}};b.anywhereWnd.loadCSS=function(){var g=document.createElement("link");g.setAttribute("rel","stylesheet");g.setAttribute("href","http://s.huffpost.com/assets/css.php?f=hptwitter_anywhere.css&9");g.setAttribute("type","text/css");g.setAttribute("media","screen");e("head").append(g)};b.anywhereWnd.show=function(g){var l=g.target;var o=l.className;if(!o||typeof(o.indexOf)!="function"){return}var m=o.indexOf("twitter-anywhere-user")>-1;var k=o.indexOf("twitter-anywhere-user-v2")>-1;if(!m&&!k){return}if(k){this.version=2;this.wnd.addClass("v2")}else{this.version=1;this.wnd.removeClass("v2")}var h=l.nodeName==="IMG"?l.parentNode:l;var j=this.getUsernameFromTarget(h);var i=this.getTweetIdFromTarget(l);var n=this;this.mouseoverTimeout=window.setTimeout(function(){if(n.request&&f(n.request)){n.request.abort()}n.target=l;clearTimeout(n.hideTimeout);n.setContent(j,i,{author_nickname:n.target&&e(n.target).attr("author_nickname")?e(n.target).attr("author_nickname").toString():""});e.proxy(n.setPosition(),n)},this.config.window_delay)};b.anywhereWnd.hide=function(){this.request.abort();this.wnd.offset({top:-999})};b.anywhereWnd.timeoutHide=function(){var g=this;this.hideTimeout=setTimeout(function(){g.hide()},500)};b.anywhereWnd.cancelHiding=function(){if(this.hideTimeout){clearTimeout(this.hideTimeout);this.hideTimeout=0}};b.anywhereWnd.getUsernameFromTarget=function(g){if(g.href){return g.href.replace(/.+\//,"")}else{return e.trim(g.innerHTML).replace("@","")}};b.anywhereWnd.getTweetIdFromTarget=function(g){return e(g).attr("tid")};b.anywhereWnd.onMouseOver=function(h){var j={left:h.pageX,top:h.pageY};var g=e("#hp_anywhere_wnd");var i={top:g.offset().top,right:g.offset().left+g.width(),bottom:g.offset().top+g.height()+13,left:g.offset().left};this.cancelHiding()};b.anywhereWnd.onMouseOut=function(g){this.timeoutHide()};b.anywhereWnd.setPosition=function(){var h=e(this.target).offset();var g=h.left+(e(this.target).width()/2-(20+19/2));var i=h.top-e(this.wnd).height()+3;e(this.wnd).offset({left:g,top:i})};b.anywhereWnd.setContent=function(h,l,j){var k={author_nickname:""};extend(k,j);if(c.hasOwnProperty(h)){this.content.removeClass("smallwidth");this.content.html(c[h]);e.proxy(this.setMoreEvent(),this);return}else{a()}var g="";if(l>0){g="&tid="+l}var i;if(this.version==2){i=d.ANYWHERE_URL_V2+"?user="+h+g}else{i=d.ANYWHERE_URL+"?user="+h}i+="&author_nickname="+k.author_nickname;this.request=e.ajax({context:this,url:i,dataType:"json",success:function(m,n){if(m.status=="error"){this.showError(__("Sorry, this does not appear to be an active Twitter account"));e.proxy(this.setPosition(),this);return}this.content.removeClass("smallwidth");this.content.html(m.userinfo_html);this.setMoreEvent();c[h]=m.userinfo_html;e.proxy(this.setPosition(),this)}})};b.anywhereWnd.setMoreEvent=function(){e("#aw_more").click(e.proxy(function(g){e(g.target).remove();e("#aw_more_details").removeClass("force_hidden");e.proxy(this.setPosition(),this)},this))};b.anywhereWnd.showError=function(g){this.content.removeClass("smallwidth");this.content.html('<div style="padding:3px;">'+g+"</div>")};function a(){b.anywhereWnd.content.addClass("smallwidth");b.anywhereWnd.content.html('<div class="aw_loader">'+__("Loading...")+"</div>")}function f(g){if(g){return g.readyState!==4&&g.readyState!==0}else{return false}}window.TwitterAnywhere=b})(jQuery);
var EntryTweets={updatePeriod:30000,entryTweets:{},entryIds:[],ajaxUrl:"/ajax/twitter/frontpages/entry_tweet.php",init:function(a,b){if(!a||!b){return}this.entryTweets[a]={min_tweet_id:b,max_tweet_id:b,last_tweet_id:false};this.entryIds.push(a)},update:function(){var a=this;setTimeout(function(){a.getUpdates()},this.updatePeriod)},getUpdates:function(){var a=this.getMaxEntrySIds();if(!a){return}var b="entry_tweet_ids="+JSON.stringify(a);var c={success:this.getUpdatesCallback,scope:this};this.request("update",b,c)},getUpdatesCallback:function(a){var e=JSON.parse(a.responseText);if(!e||!e.length){this.update();return}var k=e.length;var l,f,d;for(var g=k;g--;){d=e[g];l=d.entry_id;f=d.tweet_id;if(f>this.entryTweets[l].max_tweet_id){this.entryTweets[l].max_tweet_id=f;var n=this.buildTweetNode();n.innerHTML=d.html;var h=Dom.get("entry_tweets_"+l);var c=this.getActiveEntryTweet(l);var m=Dom.getFirstChild(h);var b=new YAHOO.util.Anim(h,{opacity:{to:0}},0.2);var j=this;b.onComplete.subscribe(function(){Dom.addClass(n,"visible");h.insertBefore(n,m);Dom.removeClass(c,"visible");(new YAHOO.util.Anim(h,{opacity:{to:1}},0.2)).animate();j.updateArrows(l)});b.animate()}}this.update()},request:function(c,b,d){if(!c){return}var a=this.ajaxUrl+"?action="+c;if(b){a+="&"+b}return C.asyncRequest("GET",a,d)},getMaxEntrySIds:function(){var e={};var c;var b=false;for(var d=0,a=this.entryIds.length;d<a;d++){c=this.entryIds[d];e[c]=this.entryTweets[c].max_tweet_id;b=true}return b?e:undefined},getActiveEntryTweet:function(a){var d=Dom.get("entry_tweets_"+a);if(!d){return}var c=Dom.getElementsByClassName("visible","li",d);var b=c.length?c[0]:undefined;return b},next:function(a){if(C.isCallInProgress(this.reqId)){return}var b=this.getActiveEntryTweet(a);var c=Dom.getNextSibling(b);if(c){Dom.removeClass(b,"visible");Dom.addClass(c,"visible");this.updateArrows(a)}else{if(!this.entryTweets[a].last_tweet_id){this.getNextTweet(a)}}},prev:function(a){if(C.isCallInProgress(this.reqId)){return}var c=this.getActiveEntryTweet(a);var b=Dom.getPreviousSibling(c);if(b){Dom.removeClass(c,"visible");Dom.addClass(b,"visible")}this.updateArrows(a)},getNextTweet:function(a){var d={success:function(l){var g=JSON.parse(l.responseText);this.hideLoader(a);if(!g){this.entryTweets[a].last_tweet_id=true;this.updateArrows(a);return}var k=document.createDocumentFragment();var f=g.html.length;for(var h=0;h<f;h++){var e=this.buildTweetNode();e.innerHTML=g.html[h];k.appendChild(e)}Dom.get("entry_tweets_"+a).appendChild(k);var j=this.getActiveEntryTweet(a);var m=Dom.getNextSibling(j);Dom.removeClass(j,"visible");Dom.addClass(m,"visible");this.entryTweets[a].min_tweet_id=g.tweet_id;this.updateArrows(a)},scope:this};var b=this.entryTweets[a].min_tweet_id;var c="tweet_id="+b+"&entry_id="+a;this.showLoader(a);this.reqId=this.request("next",c,d)},showLoader:function(b){var e=Dom.get("entry_tweets_"+b);var c=Dom.get("entry_"+b);var a=Dom.getElementsByClassName("loader","div",c);var d=new YAHOO.util.Anim(e,{opacity:{to:0}},0.2);Dom.removeClass(a,"hidden");d.animate()},hideLoader:function(b){var d=Dom.get("entry_tweets_"+b);var c=Dom.get("entry_"+b);var a=Dom.getElementsByClassName("loader","div",c)[0];Dom.addClass(a,"hidden");(new YAHOO.util.Anim(d,{opacity:{to:1}},0.2)).animate()},buildTweetNode:function(){var a=document.createElement("li");a.className="entry_tweet";return a},updateArrows:function(a){var b=this.getArrowByClassName("left",a);var e=this.getArrowByClassName("right",a);var d=this.getActiveEntryTweet(a);var c=Dom.getPreviousSibling(d);var f=Dom.getNextSibling(d);if(!c){Dom.addClass(b,"off")}else{Dom.removeClass(b,"off")}if(!f&&this.entryTweets[a].last_tweet_id){Dom.addClass(e,"off")}else{Dom.removeClass(e,"off")}},getArrowByClassName:function(c,a){var e=Dom.get("entry_"+a);var b=Dom.getElementsByClassName("arrow","div",e);var d=b.length;while(d--){if(Dom.hasClass(b[d],c)){return b[d]}}}};var ReporterTweets={reporterIds:[],EntryIdTweetIdMap:{},requestedEntryTweets:{},init:function(e,a,d){if(!e||!a||!d){return}this.reporterIds.push(e);var b=Dom.getElementsByClassName("arrow","div",$("reporter_tweets_"+a));for(var c=0;c<b.length;c++){var f=b[c];f.reporter_id=e;f.entry_id=a}this.EntryIdTweetIdMap[a]=d},prev:function(d){var a=d.entry_id;var c=this.getActiveReporterTweet(a);var b=Dom.getPreviousSibling(c);if(b){Dom.removeClass(c,"visible");Dom.addClass(b,"visible")}this.updateArrows(a)},next:function(d){if(C.isCallInProgress(this.request)){return}var a=d.entry_id;var b=d.reporter_id;var c=this.getActiveReporterTweet(d.entry_id);var e=Dom.getNextSibling(c);if(e){Dom.removeClass(c,"visible");Dom.addClass(e,"visible");this.updateArrows(a)}else{if(!this.requestedEntryTweets.hasOwnProperty(a)){this.getNextTweet(a,b)}}},getActiveReporterTweet:function(a){var d=Dom.get("reporter_tweets_"+a);if(!d){return}var c=Dom.getElementsByClassName("visible","li",d);var b=c.length?c[0]:undefined;return b},getNextTweet:function(a,c){var e={success:function(g){var k=JSON.parse(g.responseText);this.hideLoader(a);this.requestedEntryTweets[a]=1;if(!k){this.updateArrows()}var n=document.createDocumentFragment();var h=k.length;for(var l=0;l<h;l++){var p=this.buildTweetNode();p.innerHTML=k[l];n.appendChild(p)}var m=this.tweetsNodeByEntryId(a);m.appendChild(n);var j=this.getActiveReporterTweet(a);var f=Dom.getNextSibling(j);Dom.removeClass(j,"visible");Dom.addClass(f,"visible");this.updateArrows(a)},scope:this};this.showLoader(a);var b=this.EntryIdTweetIdMap[a];var d="?author_id="+c+"&tweet_id="+b;this.request=C.asyncRequest("GET","/ajax/twitter/frontpages/reporter_tweet.php"+d,e)},showLoader:function(b){var e=this.tweetsNodeByEntryId(b);var c=Dom.get("entry_"+b);var a=Dom.getElementsByClassName("loader","div",c);var d=new YAHOO.util.Anim(e,{opacity:{to:0}},0.2);Dom.removeClass(a,"hidden");d.animate()},hideLoader:function(b){var d=this.tweetsNodeByEntryId(b);var c=Dom.get("entry_"+b);var a=Dom.getElementsByClassName("loader","div",c)[0];Dom.addClass(a,"hidden");(new YAHOO.util.Anim(d,{opacity:{to:1}},0.2)).animate()},tweetsNodeByEntryId:function(a){return Dom.get("reporter_tweets_"+a).getElementsByTagName("ul")[0]},updateArrows:function(a){var b=EntryTweets.getArrowByClassName("left",a);var e=EntryTweets.getArrowByClassName("right",a);var d=this.getActiveReporterTweet(a);var c=Dom.getPreviousSibling(d);var f=Dom.getNextSibling(d);if(!c){Dom.addClass(b,"off")}else{Dom.removeClass(b,"off")}if(!f){Dom.addClass(e,"off")}else{Dom.removeClass(e,"off")}},buildTweetNode:function(){var a=document.createElement("li");a.className="reporter_tweet";return a}};
jQuery(document).ready(function(a){a(".search-huffpost form").submit(function(){if(a(".search-huffpost form .inp-text").val()=="Search the Huffington Post"){a(".search-huffpost form .inp-text").focus();return false}})});
jQuery(document).ready(function($){var form=$(".search-huffpost form");var formAction=form.attr("action");if(formAction=="http://www.huffingtonpost.fr/recherche?"){return false}var input=$(".search-huffpost form .inp-text");input.click(function(){$(this).addClass("clicked")});form.attr("autocomplete","off");var t=form.find("input[name=q]");t.attr("autocomplete","off");var results;t.keyup(function(e){var input=t.val();var url="http://clients1.google.com/complete/search?q="+input+"&hl=en&client=partner&source=gcsc&partnerid=004830092955692134028%3Aan6per91wyc&callback=google.search.CustomSearchControl.GcrcGcsc17089&ds=cse";$.ajax({url:url,dataType:"jsonp",success:function(data){if(data[1]){results=[];for(i=0;i<data[1].length;i++){if(data[1][i][0]){results.push(data[1][i][0]);console.log(data)}}}t.autocomplete({source:results,autoFocus:true,open:function(e,ui){var newtop=(parseInt($(".ui-autocomplete.ui-menu").css("top"))-1)+"px";$(".ui-autocomplete.ui-menu").css({top:newtop});var acData=$(this).data("autocomplete");var styledTerm="<span class='ui-autocomplete-term'>"+acData.term+"</span>";acData.menu.element.find("li a").each(function(){var me=$(this);var newtext=me.text().replace(eval("/"+acData.term+"/gi"),styledTerm);me.html(newtext)})}})},error:function(data){console.log("Bad request")}})})});
jQuery(function(b){var c={el:".mod-follow form.subscribe",init:function(){this.$el=b(this.el);this.$el.submit(b.proxy(this.subscribe,this));b(".mod-follow .tabs-control > li").append('<div class="icon-pointer">')},subscribe:function(d){d.preventDefault();if(!this.validate()){return false}var e={email:this.$el.find('[name="email"]').val()};this.$el.find('input.list[type="checkbox"]').each(function(g,h){var f=b(h).attr("name");e[f]=b(h).is(":checked")?1:0});this.$el.find('input[type="hidden"]').each(function(g,h){var f=b(h).attr("name");e[f]=b(h).val()});b.ajax({url:"/ajax/newsletter/rightrail/subscribe.php",type:"POST",data:e,dataType:"json",success:b.proxy(this.success,this),failure:b.proxy(this.failure,this)})},validate:function(){var d=this.$el.find('[name="email"]');var e=0;if(!d.val()||d.val()==d.attr("placeholder")){d.focus();return false}this.$el.find('input.list[type="checkbox"]').each(function(f,g){if((b(g).is(":checked"))&&(e==0)){e=1}});if(e==0){b(".signup_error").css("display","block");return false}else{b(".signup_error").css("display","none")}return true},success:function(d){if(d.error){return}this.$el.html(d.message)},failure:function(){this.$el.html(_("An error occurred, please try in few minutes")+".")}};var a={init:function(){b(".tabs").unbind().each(function(){b(".tabs-control",this).delegate(".tabs-control > li","click",function(d){b(this).addClass("active").siblings().removeClass("active");b(".tabs-content > li",b(this).parents(".tabs:first")).hide().eq(b(d.currentTarget).index()).show();return false})});if(b("body").hasClass("ar_SA")){b(".tabs .tabs-control li:last-child").trigger("click")}else{b(".tabs .tabs-control li:first-child").trigger("click")}}};a.init();c.init()});
(function(a){var b=function(){var f=window.top.location.hostname,d={".de":"de_DE",".co.uk":"en_GB",".es":"es_ES",voces:"es_US",quebec:"fr_CA",".fr":"fr_FR",maghreb:"fr_MB",".it":"it_IT",".jp":"ja_JP",brasilpost:"pt_BR",".kr":"ko_KR"},c="en_US";for(var e in d){if(f.indexOf(e)!==-1){c=d[e]}}return c};a.ConversationsLoader={defaultLocale:b,loading:false,config:{mode:"orphan",base_url:window.top.location.protocol+"//"+window.top.location.host+"/conversations",use_verified:true,locale:b(),entity:null},custom_methods:{short_url:function(c,d){if(!window.HPUtil||!window.HPUtil.bitly_url){window.Conversations.app.log("HPUtil.bitly_url was undefined, triggering callback...",5);d(c);return}window.Conversations.app.log("Calling HPUtil.bitly_url...",5);window.HPUtil.bitly_url(c,d)},get_facebook_info:function(){return window.HPFB||undefined},beacon_click:function(c){if(window.bN){window.bN.click((c instanceof window.Conversations.jQuery)?c[0]:c)}},track_omniture:function(){if(typeof(window.s_265)!=="undefined"){try{var e=window.s_265.prop1;var d=window.s_265.prop2;window.Conversations.app.log("Tracking omniture",5);window.s_265.prop1="comments_conversation";window.s_265.prop2="";window.s_265.t();if(typeof(e)=="undefined"){delete window.s_265.prop1}else{window.s_265.prop1=e}if(typeof(d)=="undefined"){delete window.s_265.prop2}else{window.s_265.prop2=d}return true}catch(c){window.Conversations.app.log("Omniture track error: "+c,5)}}window.Conversations.app.log("Omniture error: s_265 undefined",5);return false},track_comscore:function(){if(window.HPTrack&&window.HPTrack.Services&&window.HPTrack.Services.trackTo){window.HPTrack.Services.trackTo(["Comscore"],{add_comscore_noop:true});window.Conversations.app.log("Comscore track",5);return true}window.Conversations.app.log("Comscore error: HPTrack was not a function",5);return false},track_google:function(){if(window.HPTrack&&typeof window.HPTrack.trackEvent==="function"){window.Conversations.app.log("GA Track: "+arguments[0].toString(),5);window.HPTrack.trackEvent("Conversations",arguments[0].toString());return true}window.Conversations.app.log("GA Track error: HPTrack was not a function",5);return false},load_overlay_ad:function(c,f){var g=window.Conversations.jQuery,e=false;try{if(!window.HPAds){throw"HPAds did not exist"}if(!c||c.length!==1){throw"container was empty or had multiple selector matches"}window.Conversations.app.log("Appending ad container",5);c.append("<div id='conv_overlay_ads'></div>");if(!g.contains(window.document.body,g("#conv_overlay_ads")[0])){throw"container append failed"}window.Conversations.app.log("Firing HPAds.ad_reload...",5);e=window.HPAds.ad_reload("conversation_300x250_req","conv_overlay_ads");window.Conversations.app.log("HPAds.ad_reload returned "+(e?"true":"false"),5);return true}catch(d){window.Conversations.app.log(d.toString(),5)}return false},login_prompt:function(){var c=window.Conversations._;if(window.Conversations.app.config.mode==="mobile"){if(c.isFunction(window.on_async_files_ready)&&window.Mobile&&window.Mobile.Auth&&c.isFunction(window.Mobile.Auth.display)){window.Conversations.app.log("Adding Mobile.Auth to async files ready",5);window.on_async_files_ready(function(){window.Mobile.Auth.display()});return true}window.Conversations.app.log("login_prompt error: Unable to initialize Mobile.Auth dialog",5)}else{if(window.HPConnect){window.Conversations.app.log("Calling HPConnect.Login...",5);window.HPConnect.Login();return true}window.Conversations.app.log("login_prompt error: Unable to find HPConnect.Login",5)}return false},get_user_token:function(){var d,c=null,f=null,e="huffpost_user_id";if(typeof window.huff==="object"&&window.Conversations.jQuery&&window.Conversations.jQuery.cookie&&typeof window.Conversations.phpjs==="object"&&window.Conversations.phpjs.md5){d=window.huff.beta?"beta"+(location.port||80)+"_":"";f=window.Conversations.jQuery.cookie(d+"huffpost_user_id");if(f&&f!==null){c=window.Conversations.phpjs.md5(f)}}return c}},isLoaded:function(){return a.Conversations!==undefined},isConversationsOn:function(){var c=this.getQueryStringByName("conversations_off");if(c!==undefined){return false}return true},init:function(){this.debug=this.getQueryStringByName("debug");this.log("Initializing");this.checkOverlayHash()},log:function(c){if(!this.debug){return}if(a.console&&a.console.log){a.console.log("[COMMTECH] ConversationsLoader: "+c)}},load:function(j){if(this.loading===true){return}var i=false,h=this,f=function(){a.ConversationsLoader.config.custom_methods=a.ConversationsLoader.custom_methods;var k=a.Conversations.require("Conversations");a.Conversations.app=new k();h.log("Appending Conversations CSS");var m=a.Conversations.jQuery("<link>");var l=null;if(a.huff.beta===true){if(parseInt(a.ConversationsLoader.getQueryStringByName("localhost"),10)===1){l="http://local.huffingtonpost.com/stylesheets/app.css?_="+Math.floor(Math.random()*1000000)}else{l="/include/lib/conversations/stylesheets/app.css?_="+Math.floor(Math.random()*1000000)}}else{l="http://s.huffpost.com/include/lib/conversations/stylesheets/app.css?v="+((a.huff.versions&&a.huff.versions.deploy_seq)||"")}m.attr({rel:"stylesheet",type:"text/css",href:l});a.Conversations.jQuery("head").append(m);a.Conversations.jQuery(document).ready(function(){a.Conversations.app.initialize(a.ConversationsLoader.config);if(a.Conversations.app.isInitialized()===false){a.Conversations.app.die()}else{a.Conversations.app.start()}g()})};var g=function(){if(j!==undefined&&typeof j==="function"){j()}if(typeof window.linkSocialAccount==="object"){linkSocialAccount.onLinkSuccess=function(){if(typeof window.Conversations==="object"&&typeof window.Conversations.app==="object"){window.Conversations.app.verifyUserCallback()}}}if(typeof window.bN_scrollTrack==="function"){window.bN_scrollTrack("cmts","#conversations-huffpost-web")}h.loading=false};try{if(!a.huff){throw"huff has not been initialized"}this.loading=true;i=true;if(this.isLoaded()){throw"Conversations already loaded"}if(this.isConversationsOn()===false){throw"Conversations turned off by query string"}this.log("Loading conversations app...");if(a.huff.beta===true&&parseInt(this.getQueryStringByName("localhost"),10)===1){this.log("bootstrapping off localhost");var d=["http://local.huffingtonpost.com/javascripts/vendor.js","http://local.huffingtonpost.com/javascripts/templates.js","http://local.huffingtonpost.com/javascripts/app.js"];var c=function(){a.huff.units.jquery.getScript(d.shift(),function(){if(d.length){c()}else{f()}})};c()}else{a.huff.js("conversations/javascripts/vendor.js","conversations/javascripts/templates.js","conversations/javascripts/app.js",f)}}catch(e){this.log(e);if(i){g()}}},showConversations:function(){if(typeof window.Conversations==="object"&&typeof window.Conversations.app==="object"){window.Conversations.app.showConversations()}},hideConversations:function(){if(typeof window.Conversations==="object"&&typeof window.Conversations.app==="object"){window.Conversations.app.hideConversations()}},getQueryStringByName:function(d){var d=d.toString().replace(/[\[]/,"\\[").replace(/[\]]/,"\\]"),c="[\\?&]"+d+"=([^&#]*)",f=new RegExp(c),e=f.exec(window.top.location.search);if(null===e){return undefined}return decodeURIComponent(e[1].replace(/\+/g," "))},checkVerifiedStatus:function(h){var f=window.huff.beta?"beta"+(location.port||80)+"_":"",c=window.huff.units.cookies.get(f+"huffpost_user_id"),d=null,e=false,g=function(){if(e===true){h()}else{window.HPConnect.Verify()}};if(window.ConversationsLoader.config.use_verified===true){if(typeof window.Conversations==="object"&&typeof window.Conversations.app==="object"){d=window.Conversations.app.getCurrentUser();e=d.is_verified===true?true:false;g()}else{window.huff.units.jquery.ajax({url:this.config.base_url+"/users/"+c.toString(),type:"GET",dataType:"json",data:{app_token:"d6dc44cc3ddeffb09b8957cf270a845d"},success:function(i){e=i&&typeof i.model==="object"&&i.model.is_verified===true},complete:function(){g()}})}}else{h()}},notificationsReplyClick:function(c){var d=function(){a.Conversations.app.openOverlayFromNotification(c)};if(this.isLoaded()===false){this.load(d);return true}d()},checkOverlayHash:function(){var e=window.top.location.hash.toString(),c=window.top.location.href.toString().match(/_(n|b)_\d*\.html/),d=e.match(/conversation-(\d*)-(\d*)/);if(d===null){return}this.log("Hash found: "+e);if(c!==null){this.log("on bpage, waiting for backbone router");return}this.notificationsReplyClick({entry_id:d[1],comment_id:d[2]})},checkMobileWebComments:function(){var g=window.top.location,f=g.hash.toString(),e=f.match(/#comments/),d,g,c,h;if(e!==null&&e.length){h=g.pathname.split("/");do{c=parseInt(h.pop(),10)}while(isNaN(c)&&h.length);if(!isNaN(c)){d=g.protocol+"//"+g.hostname+(g.port?":"+g.port:"")+"/comments/"+c.toString();window.top.location.href=d}}}};a.ConversationsLoader.init()})(window.top);
huff.on("topnav/load-start",function(a){a.className+=" nav_repositioning"});huff.on("topnav/loaded",function(a){huff.use("jquery","conf","user",function(h,B,o){var C=h(a),x=C.find("> ul > li"),z=x.children("div"),f=C.next().find("div.featured ul"),b=C.next().find("ul.subnav_list"),d=x.slice(1),k=C.outerWidth(),l=k-x.first().outerWidth(),D=(x.hasClass("n_live"))?true:false,p=(x.last().hasClass("n_all_sections"))?true:false,i=125,q=500,r,t,j=(jQuery.browser.msie&&(jQuery.browser.version<="7.0"))?true:false,g=150,A=(!!("ontouchstart" in window)?1:0);i=HPUtil.getUrlVar("onDelay")||i;q=HPUtil.getUrlVar("offDelay")||q;if(p){l-=d.last().outerWidth();d=d.slice(0,-1)}if(D){l-=d.filter("li.n_live").outerWidth();d=d.not("li.n_live")}var e=function(){if(x.parent().outerWidth()>k){for(var G=1,K=0;G<x.length;G++){K+=x.eq(G).outerWidth();if(K>l){d.slice(G-1).remove();break}}}else{if(x.length<=6){var E=Math.floor(l/d.length);d.css({"min-width":E+"px","padding-left":0,"padding-right":0});d.slice(0,-1).css({"border-right-width":1,"border-right-style":"solid"});if(j){var I=(D?(E-1):(E-(d.length-1)))+"px";d.last().css({"min-width":I,width:I})}}else{if(!j){var F=d.find("div.relative > a"),u=F.first(),c=u.html(),H=u.text(),M=8;u.html("<u>"+H+"</u>");var L=Math.floor(u.find("u").position().left);if(L<M){L=M}u.html(c);var J=function(N){F.css({"padding-right":N+"px","padding-left":N+"px"})};do{J(L--)}while(L>M&&x.parent().outerWidth()>k)}}}};var n=setInterval(function(){var c=B.get("topnav/font-load-status");if(typeof c!=="number"||c>-1){try{e()}catch(u){}C.removeClass("nav_repositioning");clearInterval(n)}},100);var y=function(){var c,u=0,G,F=0,E=x;c=l;if(p){E=D?E.slice(1,-2):E.slice(1,-1)}else{E=D?E.slice(1,-1):E.slice(1)}E.each(function(){u+=h(this).outerWidth()});G=u/c;u=0;E.each(function(H){if(H<E.length-1){F=Math.floor(h(this).outerWidth()/G);h(this).css("width",F);u+=F}else{h(this).css("width",c-u)}})};if(j){C.removeClass("nav_repositioning");y();x.first().closest("ul").css({visibility:"visible"})}if(x.length>=4){x.slice(x.length/2).find("div.menu").addClass("right_align")}if(A){z.bind("click",function(c){var u=h(this);if(c.target.parentNode!==this&&!u.find("a").is(c.target.parentNode)){return}if(!u.children(".menu").length){return}if(!u.hasClass("hover")){z.removeClass("hover");u.addClass("hover");c.preventDefault()}else{if(p&&u.parent().is(":last-child")){u.removeClass("hover");c.preventDefault()}}});h("body").bind("click",function(c){var u=h(this);if(z.find(h(c.target)).length===0){z.removeClass("hover")}})}else{var v={show:function(u){var E=this,c=u.delay||200;this.clear_timer();r=setTimeout(function(){E.clear_hover();u.el.addClass("hover")},c)},hide:function(u){var E=this,c=u.delay||200;this.clear_timer();if(u.el.hasClass("hover")){r=setTimeout(function(){u.el.removeClass("hover")},c)}else{r=setTimeout(function(){E.clear_hover()},c)}},clear_hover:function(){z.each(function(){h(this).removeClass("hover")})},clear_timer:function(){clearTimeout(r)}};z.bind({mouseenter:function(c){v.show({el:h(this)})},mouseleave:function(c){v.hide({el:h(this),delay:700})}})}x.find("a").unbind("click").bind("click",function(G){var E=h(this).parent();var F=A&&E.parent().parent().hasClass("jd_menu");var H=A&&F&&(E.children(".menu").length);if(F&&H&&A&&!E.hasClass("hover")){return}else{if(F&&H&&A&&E.hasClass("hover")&&p&&E.parent().is(":last-child")){return}}var I=h(this).parent().attr("id");if((I!=undefined)&&(I!=null)&&I.indexOf("id_trending")===0){var u=!h(G.target).is(this);if(u){this.href+=h(this).children(".comments").data("anchor")}G.target=this;huff.emit("topnavnew_trending/click",G)}else{var c=h(this).parent().parent().attr("class");if((c!=undefined)&&(c!=undefined)&&c==="vertical_list"){G.target=this;huff.emit("topnavnew_vertical_list/click",G)}else{if((c!=undefined)&&(c!=undefined)&&c==="like_list"){G.target=this;huff.emit("topnavnew_like_list/click",G)}else{if((c!=undefined)&&(c!=undefined)&&c==="all_sections_section"){G.target=this;huff.emit("topnavnew_all_sections/click",G)}else{if((c!=undefined)&&(c!=undefined)&&c==="topnav_blogs"){G.target=this;huff.emit("topnavnew_blogs/click",G)}else{G.target=this;huff.emit("topnavnew/click",G)}}}}}});h(".new-topnav_second_row a").unbind("click").bind("click",function(c){c.target=this;huff.emit("topnavnew_subnav/click",c)});C.addClass("topnav_first_row_squre_right");h("#li_local").removeClass("rounded_top_right_4");var w=h("#fb_social"),s=h("#tw_social");if(!o.logged){w.addClass("fb_social_btn").removeClass("display_none");s.addClass("tw_social_btn").removeClass("display_none")}else{o.pref("facebook","twitter",function(u,c){if(!u&&!c){w.addClass("fb_social_btn").removeClass("display_none");s.addClass("tw_social_btn").removeClass("display_none")}else{if(!u){h("#not_logged_user, #wendybird_user").css("right","125px");w.addClass("fb_social_btn_only").removeClass("display_none")}else{if(!c){h("#not_logged_user, #wendybird_user").css("right","125px");s.addClass("tw_social_btn_only").removeClass("display_none")}}}})}w.bind("click",function(){huff.emit("topnav/signup","Facebook");return false});s.bind("click",function(){huff.emit("topnav/signup","Twitter");return false});var m=function(u,c){h.each(u.find("li"),function(F,E){if((F!==0)&&(h(E).position().left<=12)&&c.find("li").length){c.find("li:first-child").remove();return m(u,c)}})};b.length&&m(f,b);b.css({visibility:"visible"})})});
jQuery(document).ready(function(j){var f;var A=[];var g=[];var s;var o;var u;var B;var k;var m;var t;var v=2;var x;var z=30;var a=j("#hp_live_scroll_main");var p="0";var q="0";var w=new Date();w.setHours(24);w.setMinutes(0);w.setSeconds(0);w.setMilliseconds(0);var y=new Date();y.setDate(y.getDate()+7);var l=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];var n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var e=function(){x=j(".hp-live-time");for(var C=0;C<x.length;C++){var E=j(x[C]);var D=E.data("time");E.html(d(D))}};var i=function(){f=false;A=[];g=[];s=0;o=0;u=j("#ap_wires_scroll_pages, #hp_live_scroll_pages");B=u.children().length;k=j("#ap-wires-scroll-container, #hp-live-scroll-container");t=0;for(var D=1,E;D<=B;D++){E=j("#hp_ap_wires_page_"+D+", #hp_live_page_"+D);A.push(E);var C=E.get(0).offsetWidth;g.push(C);s+=C}u.css("width",s+50+"px");u.mouseover(function(){f=true});u.mouseout(function(){f=false});m=A[o]};var d=function(G){G=parseInt(G)*1000;var E=new Date(G);var C=E.getHours();var F=E.getMinutes();if(E>w){if(E>y){return n[E.getMonth()]+". "+E.getDate()}return l[E.getDay()]}var D=C>=12?"PM":"AM";C=C%12;C=C?C:12;F=F<10?"0"+F:F;var H=C+":"+F+" "+D;return H};function c(){if(a.length&&p!==q){p=q;j.ajax("/get_hplive_ticker.php?schedule="+q).done(function(D){var C=j(D).html();if(C){a.fadeOut(400,function(){a.html(C);e();a.fadeIn(400,function(){i();window.setTimeout(c,z)})})}else{window.setTimeout(c,z)}}).fail(function(){window.setTimeout(c,z)});return}if(f){window.setTimeout(c,z);return}t+=v;u.css("left",t*(-1));if(t-g[o]>=0){m.remove();m.appendTo(u);t=0;u.css("left",t);o++;if(o>=B){o=0}m=A[o]}window.setTimeout(c,z)}e();i();window.setTimeout(c,z*10);j.ajax("http://live.huffingtonpost.com/api/startup").done(function(C){if(C.data&&C.data.schedule_version){q=C.data.schedule_version}else{q="1"}}).fail(function(){q="1"});var b;var h=function(){b=new WebSocket("ws://ws.live.huffingtonpost.com/socket/websocket");b.onopen=function(C){b.send('{ "action" : "sub", "channel" : "rundown", "id" : 0 }')};b.onmessage=function(D){var C=JSON.parse(D.data);try{q=C.payload.schedule_version}catch(E){}}};var r=function(){if(b.readyState===3){h()}else{if(b.readyState===1){b.send("ping")}}window.setTimeout(r,45000)}});

/* From: production-mt-wfe-56-191-use1 : 30989 *//* 70a1ca13cb701e82e59e63a33ed813fa4dcf8f70 */