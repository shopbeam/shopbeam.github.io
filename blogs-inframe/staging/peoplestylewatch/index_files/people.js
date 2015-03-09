/* updated 2013-12-17 */
s_time.charSet="UTF-8";
s_time.trackDownloadLinks=true
s_time.trackExternalLinks=true
s_time.trackInlineStats=true
s_time.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,doc,pdf,xls"
s_time.linkInternalFilters="javascript:,people.aol.com,people.com,peoplestore.seenon.com,timeinc.net,peoplestylewatch.com,tvlistings.stage.zap2it.com,tvlistings.zap2it.com,peoplepets.com,thisweekspeoplemagazine.com,traffic.outbrain.com"
s_time.linkTrackVars="prop17"
s_time.linkTrackEvents="None"
s_time.events="event1,event32"
/*-------------------------------------------------*/ 
/*  Celebrity Food / Great Ideas - Do not remove  */
s_time.prop65=s_time.eVar65='free';
s_time.prop74=s_time.eVar74='not logged-in';
var ckVal=s_time.c_r('TISub');if(ckVal) {
var xyz=ckVal.split('|');	
s_time.prop65=s_time.eVar65='paid';
s_time.prop74=s_time.eVar74='logged-in'; 
var hashMap=new Object();
for (var i=0; i<xyz.length; i++){ 
var tilde=xyz[i].split('~');  
nameVal=tilde[0].toString();
valuVal=tilde[1].toString();   
if (typeof valuVal=='undefined'||valuVal=="") {} else {hashMap [nameVal]=valuVal;}}
if (typeof hashMap['availableAppIds']=="string"){var aApps=hashMap['availableAppIds'];var aApps=aApps.split(',').join('|');s_time.list1=aApps;}
if (typeof hashMap['bundleId']=="string"){s_time.prop64=s_time.eVar64=hashMap['bundleId'];}  
if (typeof hashMap['tierLevel']=="string"){s_time.prop63=s_time.eVar63=hashMap['tierLevel'];}  
if (typeof hashMap['subscriberType']=="string"){s_time.prop66=s_time.eVar66=hashMap['subscriberType'];}  
if (typeof hashMap['subscriberId']=="string"){s_time.prop67=s_time.eVar67=hashMap['subscriberId'];}}
/*-------------------------------------------------*/ 
function omnitureHookFunction() {
if (typeof(s_time.pageName)=="string") s_time.eVar23=s_time.pageName;
if (typeof(s_time.prop16)=="string") s_time.eVar24=s_time.prop16;
}
/* Tout Tracker Cookie Expiration */
s_time.toutExp=new Function(''
	+'var tiiDate=new Date(); tiiDate.setTime(tiiDate.getTime()-(24*60*60*1000)); return tiiDate');
s_time.usePlugins=true
function s_time_doPlugins(s_time) {
s_time.campaign=s_time.getQueryParam('cid,iid');  
s_time.eVar1=s_time.getQueryParam('xid,fb_ref'); 
s_time.eVar1 = s_time.getValOnce(s_time.eVar1,'s_var_1',0);
s_time.eVar2=s_time.getQueryParam('pkw');
s_time.eVar2 = s_time.getValOnce(s_time.eVar2,'s_var_2',0);
s_time.eVar28 = s_time.prop11;
s_time.prop3 = "D=User-Agent";
/*------Forum  Reporting --------*/
if(s_time.screen_name) s_time.eVar41 = s_time.screen_name;
if(s_time.user_action) {
	s_time.eVar43 = s_time.prop13 = s_time.user_action;
	s_time.events = s_time.apl(s_time.events,'event43',',','1');
}
/*------Day of week, time of day, wkday-wkend--------*/
s_time.eVar30 = s_time.getTimeParting('d','-5',s_time.tiiGetFullYear());
s_time.eVar31 = s_time.getTimeParting('h','-5',s_time.tiiGetFullYear());
s_time.eVar37 = s_time.getTimeParting('w','-5',s_time.tiiGetFullYear());
/*-------Set daily, weekly, monthly visit  ---------*/
s_time.eVar32=s_time.getVisitNumCustom('d');
s_time.eVar33=s_time.getVisitNumCustom('w');
s_time.eVar34=s_time.getVisitNumCustom('m');
/*------- URL override  ---------*/
s_time.prop17=location.protocol+"//"+location.host+location.pathname;
/*--- Shopper ---*/
if ((s_time.pageName=='people|homepage') && (s_time.c_r('stp_psw_clicked'))) s_time.eVar40 ='shopper';
/*--- Gallery Name ---*/
if (typeof(s_time.prop39)=='string' && s_time.prop39!=''){s_time.eVar39=s_time.prop39}
else s_time.eVar39 = 'n/a';
/* MB 04/11/13 Add Optimizely Code */
window.optimizely = window.optimizely || [];
window.optimizely.push(['activateSiteCatalyst', {"sVariable": s_time}]);
/*--- Celeb Food - copy props into eVars --*/
if (s_time.prop68){s_time.eVar68="D=c68"}
if (s_time.prop69){s_time.eVar69="D=c69"}
if (s_time.prop70){s_time.eVar70="D=c70"}
if (s_time.prop71){s_time.eVar71="D=c71"}
if (s_time.prop72){s_time.eVar72="D=c72"}
if (s_time.prop73){s_time.eVar73="D=c73"}
/* TICM_omni cookie */
if((document.domain.indexOf('people.com')>-1)&&(typeof(s_time.eo)=='undefined')){
(typeof(s_time.prop16)=='string')?s_time.tcm16=s_time.prop16:s_time.tcm16='';
(typeof(s_time.prop11)=='string')?s_time.tcm11=s_time.prop11:s_time.tcm11='';
s_time.tcmval='c16='+s_time.tcm16+'~'+'c11='+s_time.tcm11;
document.cookie='TICM_omni='+ escape(s_time.tcmval)+'; expires=; path=/; domain=people.com';}
/* start Tout Tracker Cookie */
if(s_time.c_r('omni_tout') && s_time.c_r('omni_tout')!=''){
s_time.list2 = s_time.c_r('omni_tout');
s_time.events = s_time.apl(s_time.events,'event29',',','1');
s_time.c_w('omni_tout','',s_time.toutExp());
if (s_time.c_r('omni_tout_pg')) { s_time.eVar15 = s_time.c_r('omni_tout_pg');
s_time.c_w('omni_tout_pg','',s_time.toutExp());}
}
/* end Tout Tracker Cookie */
}
s_time.doPlugins=s_time_doPlugins
/*********Media Module Calls**************/
s_time.loadModule("Media") // possibly make this conditional
s_time.Media.autoTrack=false; // no auto
s_time.Media.trackWhilePlaying=true; // track while playing
s_time.Media.monitor = function (s,media){}
/*--------------------------------------------------------------------------------------------*/
/* Begin HTML5 Video block                                                                    */
/*--------------------------------------------------------------------------------------------*/
var omniStartFlg=omni50PctFlg=true;var mediaName=videoMMSS='';var omniPauseFlg=false;
var html5Video=new Array;var spinFlg=true;var lastVideoTitle='';var playerName='html5';
if (navigator.userAgent.indexOf('iPad')!=-1){playerName='ipad';}
if (navigator.userAgent.indexOf('iPhone')!=-1){playerName='iphone';}
if (navigator.userAgent.indexOf('iPod')!=-1){playerName='ipod';}
/*--------------------------------------------------------------------------------------------*/				 
function addVideoListeners(){for (i=0;i<document.getElementsByTagName('video').length;i++) {  
html5Video[i]=document.getElementsByTagName('video').item(i); 
html5Video[i].addEventListener('pause',onPause,false);html5Video[i].addEventListener('ended',onComplete,false); 
html5Video[i].addEventListener('seeked',onSeeked,false);html5Video[i].addEventListener('timeupdate',newTimeUpdate,false);}}
/*--------------------------------------------------------------------------------------------*/
function onPause() {omniPauseFlg=true;s_time.Media.stop(mediaName,Math.round(this.currentTime));}
/*--------------------------------------------------------------------------------------------*/
function newTimeUpdate() {if (Math.round(this.currentTime) == 0 && spinFlg) { // first time through zero
if (isNaN(this.duration)) {return;}spinFlg=false;if (!omniPauseFlg) {mediaName = playerName+':'+s_time.prop16+':'+this.id; 
if (this.duration<=15) {omni50PctFlg=false;} else {if (this.duration>=16 && this.duration<=30){} 
if (this.duration>=31 && this.duration<=90) {s_time.Media.trackSeconds=Math.floor(this.duration/5).toString();}
if (this.duration>=91) {s_time.Media.trackSeconds=Math.floor(this.duration/5).toString();}} 
var videoMM=Math.floor(this.duration/60).toString(); // minutes
var videoSS=Math.ceil(this.duration%60).toString();  // seconds 
(videoMM.length==1) ? videoMM='(0'+videoMM : videoMM='('+videoMM;(videoSS.length==1) ? videoSS='0'+videoSS +')' : videoSS=videoSS+')'; 
mediaName=mediaName+' '+videoMM+':'+videoSS;s_time.eVar6=mediaName;s_time.eVar7=playerName+':'+s_time.prop16;  
s_time.Media.open(mediaName,Math.round(this.duration),playerName); // open video 
s_time.Media.trackVars="events,eVar6,eVar7";s_time.Media.trackEvents="event6";s_time.events="event6";  
s_time.Media.play(mediaName,0);s_time.events='';
} else {s_time.Media.play(mediaName,Math.round(this.currentTime));}} // end zero loop 
if (omni50PctFlg && Math.round(this.currentTime) >= Math.round(this.duration/2)) { 
s_time.Media.trackVars="events,eVar6,eVar7";s_time.Media.trackEvents="event7";  
s_time.Media.trackEvents="event7";s_time.events="event7";s_time.Media.track(mediaName);s_time.events='';
omni50PctFlg=false;}}
/*--------------------------------------------------------------------------------------------*/
function onSeeked() {s_time.Media.play(mediaName,Math.round(this.currentTime).toString());}
/*--------------------------------------------------------------------------------------------*/
function onComplete() { /* Omniture 100% milestone */
lastVideoTitle=this.id;omniPauseFlg=false;omni50PctFlg=true;spinFlg=true;
s_time.Media.trackVars="events,eVar6,eVar7";s_time.Media.trackEvents="event8";s_time.Media.trackEvents="event8"; 
s_time.events="event8";s_time.Media.track(mediaName);s_time.Media.stop(mediaName,this.duration); 
s_time.Media.close(mediaName);s_time.events='';}
/*--------------------------------------------------------------------------------------------*/
/* End HTML5 Video block                                                                      */ 
/*--------------------------------------------------------------------------------------------*/
/*----------------------------LTV  Block - do not modify------------*/
/* MB - 07/08/08 - Ver. 1.1 Added repeat visit pageviews and XID    */
/*------------------------------------------------------------------*/
var ltv_time=new Date();var ct=ltv_time.getTime();ltv_time.setTime(ct+180*24*60*60*1000);  
var ccxp=new Date();var cct=ccxp.getTime();ccxp.setTime(cct+30*60*1000);  
/*--------------------------- PKW / LTV ----------------------------*/
var cpval1=s_time.getQueryParam('pkw');var isCamp;if(cpval1){isCamp='LTV:'+cpval1}
var isFtcv=s_time.c_r('s_ftcv');var isVisit=s_time.c_r('s_current');
if((isCamp) && (!isFtcv)){s_time.c_w('s_ftcv',isCamp,ltv_time);s_time.c_w('s_current',isCamp,ccxp);
s_time.events=s_time.apl(s_time.events,'event4',',','1');s_time.eVar11=isCamp;} 
if(isVisit){s_time.c_w('s_current','cpvisitor',ccxp)}
if((isFtcv) && (!isVisit)){s_time.events=s_time.apl(s_time.events,'event2',',','1');
s_time.events=s_time.apl(s_time.events,'event5',',','1');} 
/*--------------------------- XID / LTV ----------------------------*/
var cpval1x=s_time.getQueryParam('xid');var isCampx;if(cpval1x){isCampx='XIDLTV:'+cpval1x}
var isFtcvx=s_time.c_r('s_ftcv_xl');var isVisitx=s_time.c_r('s_current_xl');
if((isCampx) && (!isFtcvx)){s_time.c_w('s_ftcv_xl',isCampx,ltv_time);s_time.c_w('s_current_xl',isCampx,ccxp);
s_time.events=s_time.apl(s_time.events,'event16',',','1');s_time.eVar5=isCampx;}  
if(isVisit){s_time.c_w('s_current_xl','cpvisitor',ccxp)}
if((isFtcvx) && (!isVisitx)){s_time.events=s_time.apl(s_time.events,'event15',',','1');
s_time.events=s_time.apl(s_time.events,'event17',',','1');} 
/*-----------------------------------End LTV Block-------------------*/		
//VK 7/23/08
function linkTrack(zn,vl) {
if ((typeof(vl)!="string")||(typeof(zn)!= "string")||(typeof s_account!='string'))return false;
vl = _oChr(vl.substring(0,200));
var s_time = s_gi(s_account);
s_time.linkTrackVars = "events,eVar12,products,list2";
s_time.linkTrackEvents = s_time.events = "event12";
s_time.eVar12 = zn+" | "+vl;
s_time.products = ";"+s_time.getTimeParting("h","-5",s_time.tiiGetFullYear());
if(/^premium\:/i.test(vl)){s_time.linkTrackEvents = s_time.events = "event12,event30";s_time.list2 = s_time.eVar12;}
s_time.tl(this,"o","LinkTrack:"+zn);
s_time.eVar12 = s_time.list2 = s_time.events = "";
s_time.linkTrackVars = s_time.linkTrackEvents = "None";
}
function linkTrackArt(zn,vl) {
if ((typeof(vl)!="string")||(typeof(zn)!= "string")||(typeof s_account!='string'))return false;
vl = _oChr(vl.substring(0,200));
var s_time = s_gi(s_account);
s_time.linkTrackVars = "events,eVar38,products,list2";
s_time.linkTrackEvents = s_time.events = "event28";
s_time.eVar38 = zn+" | "+vl;
s_time.products = ";"+s_time.getTimeParting("h","-5",s_time.tiiGetFullYear());
if(/^premium\:/i.test(vl)){s_time.linkTrackEvents = s_time.events = "event28,event30";s_time.list2 = s_time.eVar38;}
s_time.tl(this,"o","LinkTrackArticle:"+zn);
s_time.eVar38 = s_time.list2 =  s_time.events = "";
s_time.linkTrackVars = s_time.linkTrackEvents = "None";
}
function _oChr(str) 
{	return str.replace( /[^\x20-\x7F]/g, '')}
/*------------------Hollywood Makeover Tool: 08-19-09-----------------*/
var omniPgName = 'people|style watch|instant makeover|makeover|landing page';
function HHMakeover_tracker(omniStr,omniAccount){
	var regexp = /View:|UA:|SU:/;
	if(!regexp.test(omniStr))return 0;
	var s=s_gi(omniAccount);
	var preFix = 'Makeover|';
	var subChannel = 'makeover';
	var postFix = '';
	var bPageView = false;
	var omniSplit = omniStr.indexOf(':');
	var omniType = omniStr.substr(0,omniSplit);
	var omniDetail = omniStr.substr(omniSplit+1,omniStr.length);
	if(omniType == 'View'){
		bPageView = true;
		var omniPgDesc = omniDetail.toLowerCase();
		omniPgName = s_time.pageName = s_time.eVar23 = 'people|style watch|instant makeover|' + omniPgDesc;
		var subchKeys = [
			['hair',' hair'],
			['star style',' hair'],
			['makeup',' makeup'],
			['eyes',' makeup'],
			['lips',' makeup'],
			['skin',' makeup'],
			['color wheel',' makeup'],
			['bestbeauty',' makeup']
			]
		for (i=0; i < subchKeys.length; i++) {
			if(omniPgDesc.indexOf(subchKeys[i][0])> -1) postFix = subchKeys[i][1];
		}
		s_time.prop9 = subChannel + postFix;
		s_time.t();
	}
	else if(omniType == 'UA' || omniType =='SU'){
		var regPrefix = /^Makeover/i;
		(omniType == 'SU') ? suPrefix = 'Sponsor|' : suPrefix = '';
		(regPrefix.test(omniDetail)) ? s_time.prop20 = suPrefix + omniDetail : s_time.prop20 = suPrefix + preFix + omniDetail;
		s_time.prop14 = omniPgName;
		s_time.linkTrackEvents = 'None';
		s_time.linkTrackVars   = 'prop14,prop20';
	 	s_time.tl(this,'o','Makeover Action');
		s.linkTrackVars = s.linkTrackEvents = 'None';
		s_time.prop14 = s_time.prop20 = '';
	}
}
/*------------------Exit Link Domain and Placement: 11-05-09-----------------*/
function omniExit(domain,desc) {
	if ((typeof(domain)!='string')||(typeof(desc)!='string')||(typeof s_account!='string'))return false;
	var s_time = s_gi(s_account);
	prefix='Link Placement: ';
	s_time.linkTrackVars='prop8,prop14';
	s_time.linkTrackEvents='None';
	s_time.prop8=domain;
	s_time.prop14=prefix+desc;
	s_time.tl(this,'o',prefix + desc);
	s_time.linkTrackVars = 'None';
	s_time.prop8 = s_time.prop14 = '';
}
/*--------------------------------------------------------------------------*/
function omniFlyOutTracker(desc,p2) {
var s_time = s_gi(s_account); 
if (desc=='close'||desc=='next'||desc=='previous') {
s_time.linkTrackVars='None';s_time.linkTrackEvents='None';
s_time.tl(this,"o","Fly-Out: "+ desc);return;}
if (desc=='image_click'||desc=='headline_click'||desc=='cta_click') {
if (typeof(p2)!='string') p2='no headline value specified';			
s_time.linkTrackVars="events,eVar13";
s_time.linkTrackEvents=s_time.events="event14";s_time.eVar13=p2;
s_time.tl(this,"o","Fly-Out: "+ desc);s_time.eVar13='';return;}
if (desc=='impression') {
if (typeof(p2)!='string') p2='no headline value specified';			
s_time.linkTrackVars="events,eVar13";
s_time.linkTrackEvents=s_time.events="event13";s_time.eVar13=p2;
s_time.tl(this,"o","Fly-Out: "+ desc);s_time.eVar13='';}}
/************************** PLUGINS SECTION *************************/
/*Utility Function: split v1.5 - split a string (JS 1.0 compatible) */
s_time.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
/* Plugin Utility: apl v1.1  */
s_time.apl=new Function("L","v","d","u",""
+"var s=this,m=0;if(!L)L='';if(u){var i,n,a=s_time.split(L,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)L=L?L+d+v:v;return L");
/* Visit Number */
s_time.dimo=new Function ("m","y", "var d=new Date(y,m+1,0); return d.getDate();");
s_time.endof=new Function ("x", "var t = new Date(); t.setHours(0); t.setMinutes(0);"
	+"t.setSeconds(0); if(x=='m') d=s_time.dimo(t.getMonth(),t.getFullYear()) - t.getDate() + 1;"
	+"else if(x=='w') d=7-t.getDay(); else d=1; t.setDate(t.getDate()+d); return t;");
s_time.getVisitNumCustom=new Function("tp", ""
+"var s=this,e=new Date(),cval,cvisit,ct=e.getTime(),c='s_vnum_'+tp,c2='sinvisit_'+tp,eo=s_time.endof(tp),"
+"y=eo.getTime();e.setTime(y);cval=s_time.c_r(c);if(cval){var i=cval.indexOf('&vn='),str=cval.substring(i+4,cval.length),k;}"
+"cvisit=s_time.c_r(c2);if(cvisit){if(str){e.setTime(ct+30*60*1000);s_time.c_w(c2,'true',e);return str;}"
+"else return 'unknown visit number';}"
+"else{if(str){str++;k=cval.substring(0,i);e.setTime(k);s_time.c_w(c,k+'&vn='+str,e);e.setTime(ct+30*60*1000);s_time.c_w(c2,'true',e);return str;}"
+"else{s_time.c_w(c,y+'&vn=1',e);e.setTime(ct+30*60*1000);s_time.c_w(c2,'true',e);return 1;}}"
);
/*------------MB--01-12-2011--Generic function to track PVs and Actions---------------*/
function omniTracker(omniStr){
var regexp=/View:|UA:/;
if(!regexp.test(omniStr))return 0;
var s=s_gi(s_account);
var omniPgName=s_time.pageName;
var omniSplit=omniStr.indexOf(':');
var omniType=omniStr.substr(0,omniSplit);
var omniDetail=omniStr.substr(omniSplit+1,omniStr.length);
if(omniType=='View'){
s_time.pageName=s_time.eVar23=omniDetail.toLowerCase();
s_time.t();}
else if(omniType=='UA'){
s_time.prop13=omniDetail;
s_time.prop14=omniPgName;
s_time.linkTrackEvents='None';
s_time.linkTrackVars='prop13,prop14'; 
s_time.tl(this,'o','omniTracker User Actions:'+omniDetail);
s.linkTrackVars=s.linkTrackEvents='None';
s_time.prop13=s_time.prop14='';}}
/*------------------UA & Comment Tracker 01-05-2012-----------------*/
function omniTrackEv(omniStr,omniStr2) {
if ((typeof(omniStr)!='string')||(typeof s_account!='string'))return 0;
var s_time = s_gi(s_account);
s_time.linkTrackVars='events,eVar43,prop13,prop14,prop17';
var aEvent='event43';
var aList = [['comment','event44'],['love-it','event48'],['leave-it','event49'],['fb-like','event43'],['fb-share','event43'],['google+1','event43'],['twitter','event43']]
for (i=0; i < aList.length; i++) {
	if(omniStr.toLowerCase()==aList[i][0]){aEvent = s_time.apl(aEvent,aList[i][1],',','1');}
}
s_time.linkTrackEvents = s_time.events = aEvent;
s_time.user_action = omniStr;
s_time.prop14 = s_time.pageName;
s_time.prop17;
if((omniStr == 'comment') && typeof(omniStr2)!='undefined'){
s_time.screen_name = omniStr2;
s_time.linkTrackVars+=',eVar41';
}
s_time.tl(true,'o','Event:'+omniStr);
s_time.linkTrackVars = s_time.linkTrackEvents = 'None';
s_time.user_action = s_time.eVar43 = s_time.eVar41 = s_time.prop13 = s_time.prop14 = s_time.prop17 = s_time.events = ''; 
}
/* Added for BC Plug-in SWF */
function omniGetProp16(o_var) {return s_time.prop16;}
function omniGetChannel(o_var) {return s_time.channel;}
/* Tout Tracker */
function omniTrackTout(tout){
if ((typeof(tout)!='string')||(typeof s_account!='string')){return false;}
var s_time = s_gi(s_account);
s_time.articleHP = false;
s_time.toutPg = 'unknown';
if (s_time.pageName) {s_time.toutPg = s_time.pageName; }
if ((typeof(omniArticle) != 'undefined') && omniArticle == true) {s_time.articleHP = true; }
else if (/(article)/.test(location.href) || (s_time.pageName == 'people|homepage')) { s_time.articleHP = true;}
if (s_time.articleHP) {
s_time.linkTrackVars = 'events,list2,eVar15';
s_time.linkTrackEvents = s_time.events = 'event29';
s_time.list2 = tout;
s_time.eVar15 = s_time.toutPg;
s_time.tl(true,'o','Tout Impression');
s_time.list2 = s_time.eVar15 = s_time.events = '';
s_time.linkTrackVars = s_time.linkTrackEvents = 'None';
s_time.c_w('omni_tout','',s_time.toutExp());
s_time.c_w('omni_tout_pg','',s_time.toutExp());
}
else {s_time.c_w('omni_tout',tout,'');
s_time.c_w('omni_tout_pg',s_time.toutPg,'');}
}