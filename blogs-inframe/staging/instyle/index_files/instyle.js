/* Link Tracking Config */
s_time.trackDownloadLinks=true
s_time.trackExternalLinks=true
s_time.trackInlineStats=true
s_time.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls"
s_time.linkInternalFilters="javascript:,instyle.com,instyle.gilt.com,instyle.stage1.gilt.com,timeinc.net"
s_time.linkTrackVars="prop17" // MB - changed for exit links
s_time.linkTrackEvents="None"
s_time.events="event1,event11"
if(typeof page_events!="undefined")s_time.events+=","+page_events; // MB - 4/15/08 for newsletter subs thank you success event
function omnitureHookFunction() { 
if (typeof(s_time.pageName) == "string") s_time.eVar23 = s_time.pageName;
if (typeof(s_time.prop16) == "string") s_time.eVar24 = s_time.prop16;
}
s_time.usePlugins=true
function s_time_doPlugins(s_time) {
/* Add calls to plugins here */
s_time.campaign=s_time.getQueryParam('cid,xid,fb_ref');
s_time.campaign=s_time.getValOnce(s_time.campaign,'s_v0',0);
s_time.eVar1=s_time.getQueryParam('iid');
s_time.eVar2=s_time.getQueryParam('pkw');
s_time.eVar2=s_time.getValOnce(s_time.eVar2,'s_var_2',0);
s_time.eVar22=s_time.getQueryParam('tcmid');
/* deduped search */
if(s_time.prop18){
s_time.eVar14 = s_time.prop18
var t_search = s_time.getValOnce(s_time.eVar14,'s_var_14',0)
if(t_search) s_time.events=s_time.events+',event2';
}
/* popup blocker */
if (typeof(s_time.getPBD) == "function") s_time.prop13 = s_time.getPBD();
s_time.eVar32=s_time.getVisitNumCustom('d'); // daily visits
s_time.eVar33=s_time.getVisitNumCustom('w'); // weekly visit
s_time.eVar34=s_time.getVisitNumCustom('m'); // monthly visits
/*-04-24-2012 MB ----Day of week, time of day, wkday-wkend--------*/
s_time.eVar30=s_time.getTimeParting('d','-5',s_time.tiiGetFullYear());
s_time.eVar31=s_time.getTimeParting('h','-5',s_time.tiiGetFullYear());
s_time.eVar37=s_time.getTimeParting('w','-5',s_time.tiiGetFullYear());
/* gallery name */
if (typeof(s_time.prop39)=='string' && s_time.prop39!=''){s_time.eVar39=s_time.prop39}
else {s_time.eVar39 = 'n/a'}
/*--- TICM_omni cookie ---*/
if((document.domain.indexOf('instyle.com')>-1)&&(typeof(s_time.eo)=='undefined')){
(typeof(s_time.prop16)=='string')?s_time.tcm16=s_time.prop16:s_time.tcm16='';
(typeof(s_time.prop11)=='string')?s_time.tcm11=s_time.prop11:s_time.tcm11='';
s_time.tcmval='c16='+s_time.tcm16+'~'+'c11='+s_time.tcm11;
document.cookie='TICM_omni='+ escape(s_time.tcmval)+'; expires=; path=/; domain=instyle.com';}
/*--- end TICM_omni cookie ---*/
}
s_time.doPlugins=s_time_doPlugins
/*-------INSTANT STYLIST 07-21-2010--------*/
function omniISG(omniStr,omniApp){
	var regexp = /View:|UA:|SU:/;
	if((!regexp.test(omniStr))||(typeof(omniApp) =='undefined'))return 0;
	var s = s_gi(s_account);
	var omniPgName = s_time.pageName;
	(omniApp =='ISG')? preFix = 'instyle|fashion|isg|' : preFix = 'instyle|none|'
	var bPageView = false;
	var omniSplit = omniStr.indexOf(':');
	var omniType = omniStr.substr(0,omniSplit);
	var omniDetail = omniStr.substr(omniSplit+1,omniStr.length);
	if(omniType == 'View'){
		bPageView = true;
		var omniPgDesc = omniDetail.toLowerCase();
		omniPgName = s_time.pageName = s_time.eVar23 = preFix + omniPgDesc;
		s_time.t();
	}
	else if(omniType == 'UA'||omniType == 'SU'){
		(omniType == 'SU') ? suPrefix = 'Sponsor|' : suPrefix = '';
		(omniApp =='ISG')? actPrefix = 'ISG' : actPrefix = 'Other'
		s_time.prop4 = actPrefix +'|' + suPrefix + omniDetail;
		s_time.prop14 = omniPgName;
		s_time.linkTrackEvents = 'None';
		s_time.linkTrackVars   = 'prop4,prop14'; 
	 	s_time.tl(this,'o',actPrefix +' User Action');
		s.linkTrackVars = s.linkTrackEvents = 'None';
		s_time.prop4 = s_time.prop14 = '';
	}
}

/*----------------05-14-2010----------------------*/
function omniAction_tracker(omniStr,omniAccount){
	var regexp = /View:|UA:|SU:/;
	if(!regexp.test(omniStr))return 0;
	var s=s_gi(omniAccount);
	var omniPgName = s_time.pageName;
	var preFix = 'instyle|none|starbucks style quiz|';
	var bPageView = false;
	var omniSplit = omniStr.indexOf(':');
	var omniType = omniStr.substr(0,omniSplit);
	var omniDetail = omniStr.substr(omniSplit+1,omniStr.length);
	if(omniType == 'View'){
		bPageView = true;
		var omniPgDesc = omniDetail.toLowerCase();
		omniPgName = s_time.pageName = s_time.eVar23 = preFix + omniPgDesc;
		s_time.t();
	}
	else if(omniType == 'UA'||omniType == 'SU'){
		var suPrefix = 'Sponsor|';
		s_time.prop4 = suPrefix + omniDetail;
		s_time.prop14 = omniPgName;
		s_time.linkTrackEvents = 'None';
		s_time.linkTrackVars   = 'prop4,prop14'; 
	 	s_time.tl(this,'o','User Action');
		s.linkTrackVars = s.linkTrackEvents = 'None';
		s_time.prop4 = s_time.prop14 = '';
	}
}
/*-----------------07-25-08 visit tracking------------*/
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

/*----------------------------LTV  Block - do not modify----------------------------*/
/* MB - 09/06/07 - Updated to expire session cookie after 30 mins.                  */
/* Added to Instyle on 9/26/07                                                      */
var ltv_time  = new Date();
var ltv_mon   =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var currentDate = (ltv_mon[ltv_time.getMonth()] + ltv_time.getFullYear());
String(currentDate);var cpval1 = s_time.getQueryParam('pkw');
//var isCamp;if(cpval1){isCamp=currentDate+':'+'LTV:'+cpval1};
var isCamp;if(cpval1){isCamp='LTV:'+cpval1};
var isFtcv  = s_time.c_r('s_ftcv');var isVisit = s_time.c_r('s_current');
ct=ltv_time.getTime();ltv_time.setTime(ct+180*24*60*60*1000) // 180 days expire;
var ccxp=new Date();var cct=ccxp.getTime();ccxp.setTime(cct+30*60*1000); // t + 30 minutes
if((isCamp) && (!isFtcv)){s_time.c_w('s_ftcv',isCamp,ltv_time);
s_time.c_w('s_current',isCamp,ccxp);s_time.events=s_time.apl(s_time.events,'event4',',','1');
s_time.eVar4=isCamp};if(isVisit){s_time.c_w('s_current','cpvisitor',ccxp)};
if((isFtcv) && (!isVisit)){s_time.events=s_time.apl(s_time.events,'event5',',','1')}
/*-----------------------------------End LTV Block----------------------------------*/	
/*----------------------------Custom Instyle Functions Section----------------------*/
function instant_style_tracker(a1,a2,omniAccount,firstTime) {
var origPageName = s_time.pageName;
var omniFT = '';if (typeof(firstTime != "undefined")){omniFT = firstTime;}  
var s=s_gi(omniAccount);
if (a1=='changeOutfit') {
	s_time.linkTrackVars='prop1';
	s_time.linkTrackEvents='None';
	s_time.prop1='Instant Style: '+a2;
    var newPageName=s_time.pageName + ' | ' + a2;
	//if (omniFT == 'true') {}
	if (omniFT == '' || omniFT == 'shuffle') {
	   s_time.pageName = newPageName;
       s_time.t();
	   s_time.pageName = origPageName;
	}
	s_time.prop1 = '';
}
if (a1=='changeItem') {
	s_time.linkTrackVars='prop2'; 		
    s_time.linkTrackEvents='None';
    s_time.prop2='Instant Style: '+a2;
    s_time.tl(this,'o','Instant Style: Item Change');		
    s_time.prop2='';}
}
/*--------------------------------------------------------------------------*/
function instant_style_tracker_old(a1,a2,omniAccount) {
if (a1=='changeOutfit') {var s=s_gi(omniAccount);
s_time.linkTrackVars   = 'prop1';
s_time.linkTrackEvents = 'None';
s_time.prop1 = 'Instant Style: '+a2;
s_time.tl(this,'o','Instant Style: Outfit Change');		
s_time.prop1 = '';}
if (a1=='changeItem') {var s=s_gi(omniAccount);
s_time.linkTrackVars   = 'prop2'; 		
s_time.linkTrackEvents = 'None';
s_time.prop2 = 'Instant Style: '+a2;
s_time.tl(this,'o','Instant Style: Item Change');		
s_time.prop2 = '';}
}
/*--------------------------------------------------------------------------*/
/* 08-14-07 SG function added for Hollywood Hair Makeover                   *
 * Flash Application at http://www.instyle.com/instyle/makeover.            *
 * 10-23-07 Revised to pass pageName and set Page Views in Omniture         *
 * Sets pageName and/or s_prop4 to value(s) in string passed by Flash App   *
 * Example string:  "UA:Tab - Highlights|View:My Makeover"                  *
 * (1 or 2 values may be passed from the App, one UA: or one Veiw: or both) */
function makeover_tracker(omniStr,omniAccount){	
	var regexp = /View:|UA:/;
	if(!regexp.test(omniStr))return 0;

	var preFix = 'Makeover: ';
	var bPageView = false; var bLanding = false;
	var arrPropStr = new Array();
	var s=s_gi(omniAccount);
	var arrProps = omniStr.split("|");
	for(var i = 0; i < arrProps.length; i++){
		arrPropStr = arrProps[i].split(":");
		if(arrPropStr[0] == "View"){
			if(arrPropStr[1]=="Landing Page")bLanding = true;
			else{s_time.pageName = s_time.eVar23 = "instyle|trends|hollywood hair virtual makeover|"+arrPropStr[1];bPageView = true;}
		}else if(arrPropStr[0] == "UA"){
			s_time.prop4 = preFix+arrPropStr[1];
		}
	}
	if(!bLanding){
		if(bPageView){
			s_time.t();
		}
		else{
			s_time.linkTrackEvents = 'None';
			s_time.linkTrackVars   = 'prop4'; 
		 	s_time.tl(this,'o',preFix+'Action');
		}
	}
	s_time.prop4 = '';
}
/*--------------------------------------------------------------------------*/
/* 08-27-09 Hollywood Makeover Tool
/* 2-item correlation: prop4=actions + prop14=virtual page names */
var omniPgName = 'instyle|makeover|hollywood makeover|landing page';
function HHMakeover_tracker(omniStr,omniAccount){
	var regexp = /View:|UA:|SU:/;
	if(!regexp.test(omniStr))return 0;
	var s=s_gi(omniAccount);
	var preFix = 'Makeover|';
	var subChannel = 'hollywood makeover';
	var bPageView = false;
	var omniSplit = omniStr.indexOf(':');
	var omniType = omniStr.substr(0,omniSplit);
	var omniDetail = omniStr.substr(omniSplit+1,omniStr.length);
	if(omniType == 'View'){
		bPageView = true;
		var omniPgDesc = omniDetail.toLowerCase();
		omniPgName = s_time.pageName = s_time.eVar23 = 'instyle|makeover|hollywood ' + omniPgDesc;
		if((omniPgDesc.indexOf('hair')>-1)||(omniPgDesc.indexOf('star style')>-1)) subChannel += ' hair';
		if((omniPgDesc.indexOf('makeup')>-1)||(omniPgDesc.indexOf('eyes')>-1)||(omniPgDesc.indexOf('lips')>-1)||(omniPgDesc.indexOf('skin')>-1)||(omniPgDesc.indexOf('color wheel')>-1)||(omniPgDesc.indexOf('bestbeauty')>-1)) subChannel += ' makeup';
		s_time.prop11 =  subChannel;
		s_time.t();
		//alert('Omniture Page View:\n'+ s_time.pageName);
	}
	else if(omniType == 'UA'||omniType == 'SU'){
		var regPrefix = /^Makeover/i;
		(omniType == 'SU') ? suPrefix = 'Sponsor|' : suPrefix = '';
		(regPrefix.test(omniDetail)) ? s_time.prop4 = suPrefix + omniDetail : s_time.prop4 = suPrefix + preFix + omniDetail;
		s_time.prop14 = omniPgName;
		s_time.linkTrackEvents = 'None';
		s_time.linkTrackVars   = 'prop4,prop14'; 
	 	s_time.tl(this,'o','Makeover Action');
		//alert('Omniture UA/SU:\n' + s_time.prop4);
		s.linkTrackVars = s.linkTrackEvents = 'None';
		s_time.prop4 = s_time.prop14 = '';
	}
}
/*---------------------------------------------------------------------------------------------*/
/* 06-25-08 SG function added for Taaz Build -- Channel changed from 'trends' to 'celebrities' */
function HHMakeover_tracker_ver1(omniStr,omniAccount){
//alert(omniStr);	
	var regexp = /View:|UA:/;
	if(!regexp.test(omniStr))return 0;

	var preFix = 'Makeover: ';
	var bPageView = false;
	var arrPropStr = new Array();
	var s=s_gi(omniAccount);
	var arrProps = omniStr.split("|");
	for(var i = 0; i < arrProps.length; i++){
		arrPropStr = arrProps[i].split(":");
		if(arrPropStr[0] == "View"){
			s_time.pageName = s_time.eVar23 = "instyle|celebrities|hollywood hair virtual makeover|"+arrPropStr[1];bPageView = true;
		}else if(arrPropStr[0] == "UA"){
			s_time.prop4 = preFix+arrPropStr[1];
		}
	}
	if(bPageView){
		s_time.t();
	}
	else{
		s_time.linkTrackEvents = 'None';
		s_time.linkTrackVars   = 'prop4'; 
	 	s_time.tl(this,'o',preFix+'Action');
	}
	s_time.prop4 = '';
}

/*--------------------------------------------------------------------------*/
/* 05-20-08 SG function added for Makeup Match Application                  */
function makeupMatch_tracker(omniStr){
	var regexp = /View:|UA:/;
	if(!regexp.test(omniStr))return 0;
	
	var preFix = 'Makeup Match: ';
	var bPageView = false;
	var arrPropStr = new Array();
	var s=s_gi(s_account);
	var arrProps = omniStr.split("|");
	
	for(var i = 0; i < arrProps.length; i++){
		arrPropStr = arrProps[i].split(":");
		if(arrPropStr[0] == "View"){
			s_time.pageName = s_time.eVar23 = "instyle|celebrities|makeup match|"+arrPropStr[1];bPageView = true;
		}else if(arrPropStr[0] == "UA"){
			s_time.prop6 = preFix+arrPropStr[1];
		}
	}
	if(bPageView){
		s_time.t();
	}
	else{
		s_time.linkTrackEvents = 'None';
		s_time.linkTrackVars   = 'prop6'; 
	 	s_time.tl(this,'o',preFix+'Action');
	}
	s_time.prop6 = '';
}

/*--------------------------------------------------------------------------*/
/* MB - doit() is a temporary function that will be used to track the       */
/* select country popup by clicking on the USA Flag or UK Flag, or XOUT     */
function doit(a1) {
var s=s_gi(s_account);
s_time.linkTrackVars = 'eVar8';  
s_time.linkTrackEvents = 'None';
s_time.eVar8 = a1;  
s_time.tl(this,'o','Pop-Up Selection: '+a1);
s_time.linkTrackVars = 'None';  
}
/*--------------------------------------------------------------------------*/
/* 11-06-08 MB Tracking code for Designer Central Flash app                 */
/* 12-01-08 MB Tracking code for Star Style Profile Flash app               */
function omniTracking(application_name,descriptor,pagename_suffix,page_action){
var s=s_gi(s_account);
switch(application_name) {
/*-------------------Designer Central-------------*/	
case 'DC': // DC is for designer central flash 
if (descriptor == 'APL') {} // ignore for now
if (descriptor == 'PTYPE') {
var origPN = s_time.pageName;
s_time.pageName = s_time.channel + '|' + s_time.prop16 + '|' + pagename_suffix;
s_time.t();
s_time.pageName = origPN;}
break;
/*-------------------Star Style Profile-------------*/	
case 'STARSTYLE':
if (descriptor == 'PAGEVIEW') {
var origPN = s_time.pageName;
s_time.pageName = s_time.channel + '|' + s_time.prop16 + '|' + s_time.prop11 + '|' + s_time.prop12 + '|' + pagename_suffix;
s_time.t();
s_time.pageName = origPN;
}
if (descriptor == 'ACTION') {
s_time.tl(this,'o','STARSTYLE:'+page_action);
}
break;
default:}}
/*--------------------------------------------------------------------------*/
/* MB - Added 12/10/10 for linkTracking of home page - based on People.com code */
function linkTrack(zn,vl) {
if ((typeof(vl)!="string")||(typeof(zn)!= "string")||(typeof s_account!='string'))return false
vl = _oChr(vl.substring(0,200))
var s=s_gi(s_account)
s_time.linkTrackVars="events,eVar12,products"
s_time.linkTrackEvents=s_time.events="event12"
if (vl!=''){s_time.eVar12=zn+" | "+vl}
else {s_time.eVar12=zn}
s_time.products=";"+s_time.getTimeParting("h","-5",s_time.tiiGetFullYear())
s_time.tl(this,"o","LinkTrack: "+zn)
s_time.eVar12=s_time.events=""
s_time.linkTrackVars=s_time.linkTrackEvents="None"}
/*------------------------------------------------------------------------------------*/
function _oChr(str) {return str.replace( /[^\x20-\x7F]/g, '')}
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
s_time.prop4=omniDetail;
s_time.prop14=omniPgName;
s_time.linkTrackEvents='None';
s_time.linkTrackVars='prop4,prop14'; 
s_time.tl(this,'o','omniTracker User Actions:'+omniDetail);
s.linkTrackVars=s.linkTrackEvents='None';
s_time.prop4=s_time.prop14='';}}
/*-------------SF Search Box 02-22-2011------------------*/
function omniSFTrack(str,type){
if ((typeof(str)!='string') || str=='' || (typeof(s_account)!='string')) return 0;
var s = s_gi(s_account);
s_time.linkTrackVars = 'prop4,prop14'; 
s_time.linkTrackEvents = 'None';
var preFix = 'StyleFind Link: '; var preFix2 = 'sf link: ';
if(type=='f') {
preFix = 'StyleFind Search: '; preFix2 = 'sf search: '
}
s_time.prop4 = preFix + str.toLowerCase();
s_time.prop14 = preFix2 + s_time.prop16;
s_time.tl(true,'o', preFix + str.toLowerCase());
s.linkTrackVars = s.linkTrackEvents = 'None';
s_time.prop4 = s_time.prop14 = '';
}
/*------------------UA & Comment Tracker 10-28-2011-----------------*/
function omniTrackEv(omniStr,omniStr2) {
if ((typeof(omniStr)!='string')||(typeof s_account!='string'))return 0;
var s_time = s_gi(s_account);
s_time.linkTrackVars='events,eVar43,prop4,prop14';
var aEvent='event43';
var aList = [['fb-like','event43'],['fb-leave-it','event43'],['comment','event43'],['twitter','event43']]
for (i=0; i < aList.length; i++) {
	if(omniStr.toLowerCase()==aList[i][0]){aEvent = s_time.apl(aEvent,aList[i][1],',','1');}
}
s_time.linkTrackEvents = s_time.events = aEvent;
s_time.prop4 = s_time.eVar43 = omniStr;
s_time.prop14 = s_time.pageName;
if((omniStr == 'comment') && typeof(omniStr2)!='undefined'){
s_time.screen_name = omniStr2;
s_time.linkTrackVars+=',eVar41';
}
s_time.tl(true,'o','Event:'+omniStr);
s_time.linkTrackVars = s_time.linkTrackEvents = 'None';
s_time.eVar43 = s_time.eVar41 = s_time.prop4 = s_time.prop14 = s_time.events = ''; 
}
/*------------------------------------------------------------*/