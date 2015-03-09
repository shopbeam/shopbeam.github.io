/********* configuration list   ********************/
// s.linkInternalFilter - add the brand domains
//	add the coupon provider domain
//	add the e-retailer domains
//	add the social domains
//	set the digital asset vars
//	set the s.fpCookieDomainPeriods if applicable
//	set the s.charSet to the site's charSet (default is ISO-8859-1) - converts analytics values to utf-8
//      verify link tracking for social, coupons and eretailers is correct



var s = window['s']

if(s) {
	s_un = (window._egon.env == "prod") ? "jnj-neutrogena-ca-prod,jnj-global-prod" : "jnj-neutrogena-ca-dev,jnj-global-dev" ; //prod:dev
	s.linkInternalFilters = "javascript:,neutrogena.ca,jjconsumer.com,"+_satellite.getVar('eretailer filters')+","+_satellite.getVar('social filters'); //updated linkInternalFilters property specific
	//s.charSet = "" //set to the site's character set, delete if not applicable
	//s.fpCookieDomainPeriods = 3 //delete if not applicable
	
	/* digital asset vars */
	digAsset = "website"; // set to one of these only:website,responsive,microsite,syndicated,mobile-app,social-app,mobile-site
	digBrand = "neutrogena"; //set to the brand name
	digCountry = "ca"; //set to the 2 character ISO country code for this asset

	/*global asset vars */
	glBrand = "na"; //neutrogena;
	glAsset = "we"; //website;
	s.contextData.gl_append = glBrand + ":" + glAsset + ":" + digCountry;
  
  
	s.usePlugins=true;
	s.top = function() {
  
	/* CONTENT IDENTIFICATION VARIABLES */
	s.eVar57 = s.hier1 = digBrand+"|"+digCountry+"|"+digAsset+"|"+s.root; //brand|country|asset|domain
	s.linkTrackVars=s.apl(s.linkTrackVars,'eVar57',',',1);
	s.contextData.local_ver="LITE"; 
    
	/* LANGUAGE*/
	if(!s.eVar34){
		if(location.hostname.indexOf('fr')==0)
			{s.eVar34="fr";}
		else if(document.URL.indexOf('/fr')>=0)
			{s.eVar34="fr";}
		else{s.eVar34="en";}
		}	
		
 	/* TIMEPARTING  REQUIRES ATTENTION
	Second parameter of function should contain the timezone (GMT) of the report suite: -8=PST; -7=MST; -6=CST; -5=EST */
	/* Plug-in getTimeParting 3.0 */ //default set to Eastern Time - 
    	tpTime=s.getTimeParting('h','-5').toLowerCase(); 
    	tpDay =s.getTimeParting('d','-5').toLowerCase(); 
    	tpWeek=s.getTimeParting('w','-5').toLowerCase(); 
    	s.eVar42=tpTime+"|"+tpDay+"|"+tpWeek;
		
};

s.bottom = function() {
		
	/*  LINK TRACKING  */
	/*Track clicks to social sites*/ //on ky these are all shares
	var Surl=s.linkHandler(_satellite.getVar('social links'),"e");//Social Network
	if(Surl){
		if(Surl.indexOf('facebook')!=-1){s.eVar46 = "facebook"; }
		if(Surl.indexOf('twitter')!=-1){s.eVar46 = "twitter"; }
		if(Surl.indexOf('youtube')!=-1){s.eVar46 = "youtube"; }
		if(Surl.indexOf('pinterest')!=-1){s.eVar46 = "pinterest"; }
		if(Surl.indexOf('linkedin')!=-1){s.eVar46 = "linkedin";}
		s.events="event43,event44";
		s.eVar21=Surl;//link id
		s.eVar20=s.prop9="social interactions";
		s.linkTrackVars="eVar46,events,eVar20,eVar21,prop9,eVar57";
		s.linkTrackEvents="event43,event44";
    }
		
	/*Track clicks to external store IF APPLICABLE*/
	var Eurl=s.linkHandler("javascript:productBuyNow()|"+_satellite.getVar('eretailer links'),"e"); //CUSTOMIZE
	if(Eurl){
		s.eVar21=Eurl; //linkID
		s.eVar20=s.prop9="external click to buy"
		s.events="event2,event43,event44";
    		s.linkTrackVars="eVar21,events,eVar20,prop9,eVar57"; 
		s.linkTrackEvents="event2,event43,event44";
	}
				
	/*Track file downloads*/
	var FDLurl=s.linkHandler(".exe|.zip|.wav|.mp3|.mov|.mpg|.avi|.wmv|.doc|.pdf|.xls","d");
	if(FDLurl){
		s.eVar72=FDLurl //linkID
		s.events="event12"; //file download
		s.linkTrackVars="eVar72,events,eVar57";		
		s.linkTrackEvents="event12";
	}
					
	/* SITES WITH COUPONS */	
	/* Set coupon print returns based on presence of retid parameter */
	/* if(s.getQueryParam('retid')){s.events=s.apl(s.events,'event7',',',1);} */
		
	/*Track clicks to Coupons*/
	var Curl=s.linkHandler("smartsource.com","e");
	if(Curl){
		s.eVar21= Curl; //linkID
		s.events="event6,event83,event43,event44";
		s.eVar20=s.prop9="coupon click";
		s.eVar40="coupon user";
		s.eVar22="no_value|no_coupon"; //coupon ID|coupon name
		s.eVar74="special-offers"; //form name
		s.linkTrackVars="eVar21,eVar40,events,eVar26,eVar22,eVar74,eVar20,prop9,eVar57"; 
		s.linkTrackEvents="event6,event83,event43,event44";
    }

		
	/*Track exit links*/
	var Eurl=s.exitLinkHandler(s.linkInternalFilters);
	if(Eurl){
		s.eVar21=Eurl;
		s.events="event44";
		s.linkTrackVars="eVar21,events,eVar57";
		s.linkTrackEvents="event44";
	}

    
};

	s.doPlugins=s_doPlugins


}