/*
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !!TGX - Version 2.0.4 - 2013.07.31!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !!TII ADS - Version 1.4.9 - 2013.05.31 - As Base !!!!!!!!!!!!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */

/*
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *    BEGINNING OF TII ADS CLASSIC CODE   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */


function TiiAdConfig(sitename) {
	this.sitename	= sitename;
	this.cmSitename	= sitename;

	this.popups		= true;
	this.useBehaviorTracking	= false;
	
	this.setSitename	= TiiAdConfigSetSitename;
	this.setCmSitename	= TiiAdConfigSetCmSitename;
	this.setPopups		= TiiAdConfigSetPopups;
	this.setBehaviorTracking	= TiiAdConfigSetBehaviorTracking;

	this.useRevSciTracking = false;
	this.setRevSciTracking = TiiAdConfigSetRevSciTracking;

	this.useTacodaTracking = false;
	this.setTacodaTracking = TiiAdConfigSetTacodaTracking;

	this.convertHyphens = false
	this.stripNonAlphaNumeric = false
	this.setConvertHyphens = TiiAdConfigSetConvertHyphens;
	this.setStripNonAlphaNumeric = TiiAdConfigStripNonAlphaNumeric;
}
function _quantgc(n) {
	var c=document.cookie;if(!c)return '';
	var i=c.indexOf(n+"=");if(-1==i)return '';
	var len=i+n.length+1;
	var end=c.indexOf(";", len);
	return c.substring(len,end<0?c.length:end);
}
function TiiAdGetQuantcastSegments() {
	var _qsegs = _quantgc('__qseg').split('|');
	var segLen = _qsegs.length;
	var segArray = new Array(); var segs = new Array();
	segs[0] = "";
	for (var i = 0; i < segLen && i < 10; i++ )
	{
		segArray = _qsegs[i].split("_");
		if (segArray.length>1){segs[i]=segArray[1];}
	}
	return segs;	
}
function TiiAdConfigSetTacodaTracking(value) {
	this.useTacodaTracking = value;
}
function TiiAdConfigSetRevSciTracking(value) {
	this.useRevSciTracking = value;
}
function TiiAdConfigSetConvertHyphens(value) {
	this.convertHyphens = value;
}
function TiiAdConfigStripNonAlphaNumeric(value) {
	this.stripNonAlphaNumeric = value;
}
function TiiAdConfigSetSitename(value) {
	this.sitename = value;
}
function TiiAdConfigSetCmSitename(value) {
	this.cmSitename = value;
}
function TiiAdConfigSetPopups(value) {
	this.popups = value;
}
function TiiAdConfigSetBehaviorTracking(value) {
	this.useBehaviorTracking = value;
}
function TiiAdFactory() {
	// Detect if first argument is a string or an array
	var first = arguments[0];

	if (typeof(first) == "string") {
		this.sitename		= first;
		this.cmSitename		= first;

	} else if (typeof(first) == "object") {
		this.config		= first;
		this.sitename		= first.sitename;
		this.cmSitename		= first.cmSitename;
	}

	if (TiiAd_isSecure()) {
		this.adServer		= "https://ad.doubleclick.net/";
	} else {
		this.adServer		= "http://ad.doubleclick.net/";
	}
	
	this.randomNumber	= TiiAdsGetRandomNumber();
	this.tileCounter	= 1;
	this.params			= new Array();
	this.zone			= "";
	this.dcopt			= false;
	this.behaviorTracked = false;

	if (arguments.length == 2) {
		this.zone = arguments[1];
	}
	
	this.createAd		= TiiAdFactoryCreateAd;
	this.refreshAds		= TiiAdFactoryRefreshAds;
	this.getAd		= TiiAdFactoryGetAd;
	this.getCmAd		= TiiAdFactoryGetCmAd;
	this.getMultiCmAd	= TiiAdFactoryGetMultiCmAd;
	this.getMultiAd		= TiiAdFactoryGetMultiAd;
	this.getTransitionalAd	= TiiAdFactoryGetTransitionalAd;
	this.setArticleId	= TiiAdFactorySetArticleId;
	this.setChannel		= TiiAdFactorySetChannel;
	this.setChannelPage	= TiiAdFactorySetChannelPage;
	this.setContentPage	= TiiAdFactorySetContentPage;
	this.setContentType	= TiiAdFactorySetContentType;
	this.setPackageId	= TiiAdFactorySetPackageId;
	this.setParam		= TiiAdFactorySetParam;
	this.setSubchannel	= TiiAdFactorySetSubchannel;
	this.setZone		= TiiAdFactorySetZone;
	this.trackBehaviour	= TiiAdTrackBehavior;
	
	if (this.config.useBehaviorTracking || this.config.useRevSciTracking) {
		var revSciSegments = TiiAdGetRevSciSegments();
		this.setParam("rsseg", revSciSegments)
	}
	
	var quantSegs = TiiAdGetQuantcastSegments();
	this.setParam("qc", quantSegs);
	
	if (this.config.useTacodaTracking) {
		var tacodaSegments = TiiAdGetTacodaSegments();
		this.setParam("tcseg", tacodaSegments)
	}
        
        if (document.referrer != "") {
            this.setParam("rhost", document.referrer.split("/")[2]);
        }
}
function TiiAdFactoryRefreshAds(slots) {
	var tgx = new TgxAdBridge(this);
	tgx.refreshSlots(slots);       
}


function TiiAdTrackRevSci() {
	if (typeof(DM_tag) == "function" && typeof(s_time) == "object") {
		rsCategory = s_time.channel + " > " + s_time.prop16 + " > " + s_time.prop11;
		DM_cat(rsCategory);
		DM_addEncToLoc("referrer", document.referrer.split("/")[2]);
		DM_tag();
	}
	TiiAdQuantBlueKaiMindsetImpl();
	TiiAdWriteComScoreTag();
}
function TiiAdWriteComScoreTag() {
        adTag = '<scr' + 'ipt type="text/javascript" src="'+window.location.protocol+'//b.scorecardresearch.com/beacon.js?c1=2&c2=6035728"></scr' + 'ipt>';
	document.write(adTag);	
}
function TiiRefreshComScoreTag() {
	if (typeof(COMSCORE) == "object") {
		url = (arguments.length == 1 ? arguments[0] : document.location);
		COMSCORE.beacon({
			c1:2,
			c2:6035728,
			c4: url
		});
	}	
}
function TiiAdQuantBlueKaiMindsetImpl() {
        document.write('<scr'+'ipt src="'+window.location.protocol+'//pixel.quantserve.com/seg/p-5dyPa639IrgIw.js;fpa='+_quantgc('__qca')+';r='+Math.ceil(new Date().getTime()/600000)+'" type="text/javascript"></scr'+'ipt>');
        // BlueKai Beacon 03.14.2013
        if (bk.enabled) {
            bk.bkFireBeacon();
        }
        //CsBeacon
        if (cs.enabled) {
            cs.csFireBeacon();
        }
}
function TiiAdFactorySetParam(key, value) {
	if (typeof(value) == "object") {
		this.params[key] = value;
                tgxDo.params[key] = this.params[key];
	} else {
		if (value.toString() != "") {
			this.params[key] = value;
                        tgxDo.params[key] = this.params[key];
		}
	}
}
function TiiAdFactoryCreateAd() {
	var width, height, zone, ad;

	if (arguments.length == 2) {
		width = arguments[0];
		height = arguments[1];

	} else {
		// Assume 3 arguments
		width = arguments[0];
		height = arguments[1];
		zone = arguments[2];

	}

	ad = new TiiAd(this, width, height, this.tileCounter);

	if (null != zone) {
		ad.setZone(zone);
	}

	// Copy Factory params to this specific ad
	for (var key in this.params) {
		ad.setParam(key, this.params[key]);	
	}

	ad.setParam("sz", width + "x" + height);

	var paths = window.location.pathname.split("/");
	paths = paths.slice(1, paths.length - 1);
	ad.setParam("path", paths);
	
	ad.setParam("dcove", "d");

	if (TiiAdsIsTestMode()) {
		var testValue = TiiAdsParseQueryString("testads");
		ad.setParam("test", (isNaN(testValue) ? 1 : testValue));
	}

	if (this.config.useBehaviorTracking && this.behaviorTracked == false) {
		this.trackBehaviour();
	}

	this.tileCounter++;

	return ad;
}
function TiiAdFactoryGetAd() {
	var width, height, zone, ad;
	
	if (arguments.length == 2) {
		width = arguments[0];
		height = arguments[1];

		ad = this.createAd(width, height);	
	
	} else {
		width = arguments[0];
		height = arguments[1];
		zone = arguments[2];
	
		ad = this.createAd(width, height, zone);
	}

	if (this.dcopt == false) {
		ad.setParam("dcopt", "ist");
		this.dcopt = true;
	}

	return ad;
}
function TiiAdFactoryGetCmAd(width, height, position, type) {
	ad = this.createAd(width, height);
	ad.setParam("cmpos", position);
	ad.setParam("cmtyp", type);
	ad.sitename = this.cmSitename;

	return ad;
}
function TiiAdFactoryGetMultiCmAd(sizes, position, type) {
	var width = sizes[0].split("x")[0];
	var height = sizes[0].split("x")[1];
	var ad = this.getCmAd(width, height, position, type);
	var sizeValue = sizes.join(",");
	ad.setParam("sz", sizeValue);

	return ad;	
}
function TiiAdFactoryGetTransitionalAd() {
	ad = this.getAd(0,0);
	return ad;
}
function TiiAdFactoryGetMultiAd(sizes) {
	var width = sizes[0].split("x")[0];
	var height = sizes[0].split("x")[1];
	var ad = this.getAd(width, height);
	var sizeValue = sizes.join(",");
	ad.setParam("sz", sizeValue);
	
	return ad;
}
function TiiAdFactorySetArticleId(articleId) {
	this.setParam("aid", articleId);
}
function TiiAdFactorySetChannel(channel) {
	this.setParam("ch", channel);
}
function TiiAdFactorySetPackageId(packageId) {
	this.setParam("pid", packageId);
}
function TiiAdFactorySetSubchannel(subchannel) {
	this.setParam("sch", subchannel);
}
function TiiAdFactorySetContentPage() {
	this.setParam("ptype", "content");
}
function TiiAdFactorySetChannelPage() {
	this.setParam("ptype", "channel");
}
function TiiAdFactorySetContentType(ctype) {
	this.setParam("ctype", ctype);
}
function TiiAdFactorySetZone(zone) {
	this.zone = zone;
}
function TiiAd(factory, width, height, tileNumber) {
	this.tileNumber		= tileNumber;
	this.width		= width;
	this.height		= height;
	this.params		= new Array();

	// Methods
	this.setParam		= TiiAdFactorySetParam;
	this.setMagicNumber	= TiiAdSetMagicNumber;
	this.setPosition	= TiiAdSetPosition;
	this.setZone		= TiiAdSetZone;
	this.write			= TiiAdWrite;


	// Private Methods
	this._formatParams	= TiiAd_formatParams;
	this._getAdParams	= TiiAd_getAdParams;
	this._getAdTag		= TiiAd_getAdTag;
	this._getAdUrl		= TiiAd_getAdUrl;
	this._getImageUrl	= TiiAd_getImageUrl;
	this._getClickUrl	= TiiAd_getClickUrl;
	this._getDebugHtml	= TiiAd_getDebugHtml;
	this._getSecureAdTag	= TiiAd_getSecureAdTag;
	this._cleanValue = TiiAd_cleanValue;
	
	// Copy factory settings
	this.randomNumber	= factory.randomNumber;
	this.adServer		= factory.adServer;
	this.tileNumber		= factory.tileCounter;
	this.zone		= factory.zone;
	this.sitename		= factory.sitename;
	this.config		= factory.config;
        
        // Set data object
        tgxDo.zone             = this.zone;
}
function TiiAdSetMagicNumber(mn) {
	this.setParam("mn", mn);
}
function TiiAdSetPosition(pos) {
	this.setParam("pos", pos);
}
function TiiAdSetZone(zone) {
	this.zone = zone;
}
function TiiAd_cleanValue(value) {
	if (typeof(value) == "string") {
		if (this.config.convertHyphens) {
			value = value.replace(/-/ig, "_");
		}
		
		if (this.config.stripNonAlphaNumeric) {
			value = value.replace(/[^\w\s]/ig, "");
		}
	}
	return value;
}
function TiiAd_formatParams() {
	var adParams = "";
	for (var key in this.params) {
		var value = this.params[key];
		
		if (typeof(value) == "function") {
			continue;
		}

		if (typeof(value) == "string" || typeof(value) == "number") {
			adParams += ";" + key + "=" + escape(this._cleanValue(value)).toLowerCase();
		} else {
			for (var i = 0; i < value.length; i++) {
				if (value[i] != "") {
					adParams += ";" + key + "=" + escape(this._cleanValue(value[i])).toLowerCase();
				}
			}
		}
	}
	
	return adParams;
}
function TiiAd_getAdParams() {
	var adParams	= this._formatParams();
	var tileParam	= ";tile=" + this.tileNumber;

	var secureParam = "";
	if (TiiAd_isSecure()) {
		secureParam = ";sec=1";
	}

	var puParam = "";
	if (!this.config.popups) {
		puParam = ";pu=0";
	}

	var ordParam	= ";ord=" + this.randomNumber;
	var rhost	= document.referrer.split("/")[2];
	var rhostParam	= "";
	if (typeof(rhost) != "undefined") rhostParam	= ";rhost=" + rhost;
	var pageParam	= ";pgurl=1";
	
	return this.sitename + "/" + this.zone.toLowerCase() + adParams + pageParam + rhostParam + tileParam + puParam + secureParam + ordParam + "?";
}
function TiiAd_getSecureAdTag() {
	return '<a href="' + this._getClickUrl() + '" target="_blank"><img src="' + this._getImageUrl() + '" width="' + this.width + '" height="' + this.height + '" border="0" /></a>';
}
function TiiAd_getImageUrl() {
	return this.adServer + "ad/" + this._getAdParams();
}
function TiiAd_getClickUrl() {
	return this.adServer + "jump/" + this._getAdParams();
}
function TiiAd_getDebugHtml() {
	var output = '<input style="font-family: courier new; font-size: small; width:' + this.width + 'px; margin: 0; padding: 0" value="' + this._getAdUrl() + '"/>';

	return output;
}
// Support Functions
function TiiAdsParseQueryString(sParam) {
	var sQueryString = window.location.search;

	
	
	if (!sQueryString) {
        	
		return;
    	
	} else {
		
		sQueryString = decodeURI(sQueryString.substring(1));
	
	}

	
	
	var aPairs = sQueryString.split("&");
	var aParams = new Array();
	var aKeyValue = new Array();
	
	for (var i = 0; i < aPairs.length; i++) {
		aKeyValue = aPairs[i].split("=");
		if (aKeyValue.length>1){aParams[aKeyValue[0]]=aKeyValue[1];}
	
	}
	return aParams[sParam];
}
function TiiAdsIsDebugMode() {
	return window.location.search.indexOf("debugads") >= 0;
}
function TiiAdsIsTestMode() {
	return window.location.search.indexOf("testads") >= 0;
}
function TiiAdsGetRandomNumber() {
	return Math.ceil(1+1E12*Math.random());
}
function TiiAd_isSecure() {
	return (document.location.protocol == "https:");
}
function TiiAdsSetCookie(sName, sValue, sExpires, sPath, sDomain, bSecure) {
 	var sCookieText =	escape(sName) + '=' + escape(sValue);
	sCookieText +=		(sExpires ? '; EXPIRES=' + sExpires.toGMTString() : '');
	sCookieText +=		(sPath ? '; PATH=' + sPath : '');
	sCookieText +=		(sDomain ? '; DOMAIN=' + sDomain : '');
	sCookieText +=		(bSecure ? '; SECURE' : '');
	
	document.cookie = sCookieText;
}
// Behavior Targeting
function TiiAdTrackBehavior() {
	if (typeof(DM_tag) == "function" && typeof(s_time) == "object") {
		rsCategory = s_time.channel + " > " + s_time.prop16 + " > " + s_time.prop11;
		DM_cat(rsCategory);
		DM_tag();		
		this.behaviorTracked = true;
	}
}
function TiiAdGetTacodaSegments() {
	
	var tcd_segs = [];
	var segs_beg = document.cookie.indexOf('AxData=');
	if (segs_beg >= 0) {
		segs_beg = document.cookie.indexOf('=',segs_beg)+1;

		if (segs_beg > 0){
			var segs_end = document.cookie.indexOf(';',segs_beg);
			if (segs_end == -1) segs_end=document.cookie.length;
			tcd_segs=document.cookie.substring(segs_beg,segs_end);
                        if(tcd_segs.length <=0 ) {
                                var retVal = new Array(); // Will return empty value if there is no cookie
                                return retVal;
                        }

			//tcd_segs = "1#50977|51051|55210"; @value for testing purpose 

			tcd_segs = tcd_segs.split("#");
			if(tcd_segs[1].indexOf("|") > 0) {
				tcd_segs = tcd_segs[1].split("|");	
			} else {
				tcd_segs = tcd_segs[1];	
				return tcd_segs;
			}
			var segLen = "", segArr = new Array()
			segLen = tcd_segs.length;
			var segs = new Array();
			for (var i = 0; i < segLen; i++){
    				segs[i] = tcd_segs[i];
    			}
			return segs;
		} 
	} 
	
	var retVal = new Array(); // Will return empty value if there is no cookie
	return retVal;
}
function TiiAdGetRevSciSegments() {
	var rsi_segs = [];
	var segs_beg = document.cookie.indexOf('rsi_segs=');
	if (segs_beg >= 0) {
		segs_beg = document.cookie.indexOf('=',segs_beg)+1;
		if (segs_beg > 0){
			var segs_end = document.cookie.indexOf(';',segs_beg);
			if (segs_end == -1) segs_end=document.cookie.length;
			rsi_segs=document.cookie.substring(segs_beg,segs_end).split('|');
		}
	}

	var segLen = 10
	var segQS = "", segArr = new Array()
	
	if (rsi_segs.length < segLen){
		segLen = rsi_segs.length
	}

	var segs = new Array();
	for (var i = 0; i < segLen; i++){
		segArr = rsi_segs[i].split("_")
		if (segArr.length > 1) {
    		segs[i] = segArr[1];
    		segQS += ("rsi" + "=" + segArr[1] + ";")
    	}
	}
	
	return segs;
}
function TiiAdsGetVideoTestParam() {
	if (TiiAdsIsTestMode()) {
		return ";test=1"
	}
	return ""
}
// Redirect Functions
function tiiAdSetType() {}
function tiiAdSetTarget() {}
function tiiHtmlAdWH(mn, width, height) {
	adFactory.getAd(width, height).write();
}
 /* 
 // BlueKai Implementation 03.14.2013
 */
var TIICONSTANTS = {
    'bk_allow_deny_mode': 'allow',
    'bk_enabled_root_domains': 'content.timeinc.net,people.com,peoplestylewatch.com,celebritybabies.com,peoplepets.com,realsimple.com,ew.com,peopleenespanol.com,essence.com,instyle.com,time.com,timeforkids.com,sportsillustrated.cnn.com,si.com,sikids.com,golf.com,fannation.com,allyou.com,coastalliving.com,cookinglight.com,myrecipes.com,southernliving.com,sunset.com,thisoldhouse.com,myhomeideas.com',
    'bk_disabled_root_domains': 'eskyguide.com,foodandwine.com,travelandleisure.com,departures.com,executivetravelmagazine.com,health.com',
    'bk_id': '13731',
    'bk_pixel_limit': '6',
    'bk_keys': 'aid, ch, ctype, path, oid, ptype, sch, rhost',
    'cs_allow_deny_mode': 'allow',
    'cs_c2_id': '15798428',
    'cs_test_mode': '',
    'cs_enabled_root_domains': '',
    'cs_disabled_root_domains': 'eskyguide.com,foodandwine.com,travelandleisure.com,departures.com,executivetravelmagazine.com'
 };
function TiiBkBeacon() {
    this.zone = "";
    this.bkFireBeacon = TiiBkFireBeacon;
    this.enabled = 0;
}
function TiiBkFireBeacon() {

    if (document.referrer == "") {
        bk_addPageCtx("ref","n");
    } else {
        bk_addPageCtx("ref", document.referrer.toString().substring(0,250));
    }
    for (var key in tgxDo.params) {
                if (TIICONSTANTS.bk_keys.indexOf(key) >= 0) {bk_addPageCtx(key, tgxDo.params[key]);}
    }
    if (typeof(s_time) != 'undefined') {
        bk_addPageCtx("channel", (typeof(s_time.channel)!='undefined')?s_time.channel:'');
        bk_addPageCtx("p16", (typeof(s_time.prop16)!='undefined')?s_time.prop16:'');
        bk_addPageCtx("p11", (typeof(s_time.prop11)!='undefined')?s_time.prop11:'');
        bk_addPageCtx("e23", (typeof(s_time.eVar23)!='undefined')?s_time.eVar23:'');
        bk_addPageCtx("p12", (typeof(s_time.prop12)!='undefined')?s_time.prop12:'');
        bk_addPageCtx("p15", (typeof(s_time.prop15)!='undefined')?s_time.prop15:'');
        bk_addPageCtx("p20", (typeof(s_time.prop20)!='undefined')?s_time.prop20:'');
        bk_addPageCtx("p5", (typeof(s_time.prop5)!='undefined')?s_time.prop5:'');
        bk_addPageCtx("p7", (typeof(s_time.prop7)!='undefined')?s_time.prop7:'');
        
        bk_addPageCtx("e30", (typeof(s_time.eVar30)!='undefined')?s_time.eVar30:'');
        bk_addPageCtx("e31", (typeof(s_time.eVar31)!='undefined')?s_time.eVar31:'');
        bk_addPageCtx("e32", (typeof(s_time.eVar32)!='undefined')?s_time.eVar32:'');
        bk_addPageCtx("e33", (typeof(s_time.eVar33)!='undefined')?s_time.eVar33:'');
        bk_addPageCtx("e34", (typeof(s_time.eVar34)!='undefined')?s_time.eVar34:'');
        bk_addPageCtx("e38", (typeof(s_time.eVar38)!='undefined')?s_time.eVar38:'');
        
        bk_addPageCtx("events", (typeof(s_time.events)!='undefined')?s_time.events:'');
	bk_addPageCtx("pgname", (typeof(s_time.pageName)!='undefined')?s_time.pageName:'');
	bk_addPageCtx("e6", (typeof(s_time.eVar6)!='undefined')?s_time.eVar6:'');
	bk_addPageCtx("campaign", (typeof(s_time.campaign)!='undefined')?s_time.campaign:'');
	bk_addPageCtx("s_acct", (typeof(s_account)!='undefined')?s_account:'');
	bk_addPageCtx("p3", (typeof(s_time.prop3)!='undefined')?s_time.prop3:'');
	bk_addPageCtx("device", navigator.userAgent);
    }
    bk_doJSTag(TIICONSTANTS.bk_id,TIICONSTANTS.bk_pixel_limit);

}
function TiiCsBeacon() {

    this.zone = "";
    this.csFireBeacon = TiiCsFireBeacon;
    this.enabled = 0;

}
//Begin comScore Inline Tag 1.1111.15
function udmx_(a){
    var b="comScore=",c=document,d=c.cookie,e="",f="indexOf",g="substring",h="length",i=2048,j,k="&ns_",l="&",m,n,o,p,q=window,r=q.encodeURIComponent||escape;if(d[f](b)+1)for(o=0,n=d.split(";"),p=n[h];o<p;o++)m=n[o][f](b),m+1&&(e=l+unescape(n[o][g](m+b[h])));a+=k+"_t="+ +(new Date)+k+"c="+(c.characterSet||c.defaultCharset||"")+"&c8="+r(c.title)+e+"&c7="+r(c.URL)+"&c9="+r(c.referrer),a[h]>i&&a[f](l)>0&&(j=a[g](0,i-8).lastIndexOf(l),a=(a[g](0,j)+k+"cut="+r(a[g](j+1)))[g](0,i)),c.images?(m=new Image,q.ns_p||(ns_p=m),m.src=a):c.write("<","p","><",'img src="',a,'" height="1" width="1" alt="*"',"><","/p",">")
}
function TiiCsFireBeacon() {

    udmx_('http'+(document.location.href.charAt(4)=='s'?'s://sb':'://b')+ TIICONSTANTS.cs_test_mode + '.scorecardresearch.com/b?c1=2&c2=' + TIICONSTANTS.cs_c2_id  + '&comscorekw='+'&category='+tgxDo.zone);
    if ( typeof ns_.max.run != 'undefined' ) {
        ns_.max.run();
    }
}
function _Tii_init() {
    var domain = tgxUtil.getRootDomain();
    if (TIICONSTANTS.bk_allow_deny_mode == "allow") {
        if (TIICONSTANTS.bk_enabled_root_domains.indexOf(domain) >= 0) {
            document.writeln('<iframe name="__bkframe" height="0" width="0" frameborder="0" style="display:none" src="javascript:void(0)"></iframe>');
            document.writeln('<scr'+'ipt type="text/javascript" src="'+window.location.protocol+'//img.timeinc.net/shared/static/js/tii_bk-coretag.js"></scr'+'ipt>');     
            bk.enabled = 1;
        }   
    } else if (TIICONSTANTS.bk_allow_deny_mode == "deny") {
        if (TIICONSTANTS.bk_disabled_root_domains.indexOf(domain) == -1) {
            document.writeln('<iframe name="__bkframe" height="0" width="0" frameborder="0" style="display:none" src="javascript:void(0)"></iframe>');
            document.writeln('<scr'+'ipt type="text/javascript" src="'+window.location.protocol+'//img.timeinc.net/shared/static/js/tii_bk-coretag.js"></scr'+'ipt>');     
            bk.enabled = 1;
        }  
    }
    if (TIICONSTANTS.cs_allow_deny_mode == "allow") {
        if (TIICONSTANTS.cs_enabled_root_domains.indexOf(domain) >= 0) {
            document.write('<scri'+'pt type="text/javascript" language="JavaScript1.3" src="'+window.location.protocol+'//b' + TIICONSTANTS.cs_test_mode + '.scorecardresearch.com/c2/' + TIICONSTANTS.cs_c2_id  + '/cs.js"></scr'+'ipt>');
            cs.enabled = 1;
        }   
    } else if (TIICONSTANTS.cs_allow_deny_mode == "deny") {
        if (TIICONSTANTS.cs_disabled_root_domains.indexOf(domain) == -1) {
            document.write('<scri'+'pt type="text/javascript" language="JavaScript1.3" src="'+window.location.protocol+'//b' + TIICONSTANTS.cs_test_mode + '.scorecardresearch.com/c2/' + TIICONSTANTS.cs_c2_id  + '/cs.js"></scr'+'ipt>');
            cs.enabled = 1;
        }  
    }
}
function TgxUtil() {
    this.getRootDomain = TgxUtilGetRootDomain;
}   
function TgxUtilGetRootDomain() {

    var arr = window.location.hostname.split('.');  
    if (typeof(arr[1]) == "undefined") {
        return(window.location.hostname);
    }else if (arr.length == 1) {
        return(window.location.hostname);
    }else {
        return(arr[arr.length-2]+'.'+arr[arr.length-1]);
    }
}
function TgxData() {
    this.params = new Array();
    this.refreshSlot = null;
    this.istSlot = null;
    this.istCmSlot = null;
    this.parentDiv = null;
    this.zone = "";
    this.slotQueue = new Array();
    this.renderingMode = null;
    this.processMode = null;
    this.slots = new Array();
} 

/*
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *    END OF TII ADS CLASSIC CODE   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */


/*
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *   BEGINNING OF Overridden TII ADS CODE   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
function TiiAd_getAdTag() {

    var adTag; var tgx = new TgxAdBridge(this);
    adTag = '<div id="' + tgx._getSlotTarget() + '"><scr' + 'ipt type="text/javascript">' + tgx.getSlotScript(tgxDo.renderingMode, 1, 0, tgx._getSlotUnitName(), tgx._getSlotSizes(), tgx._getSlotTarget(), 1, 1 ) + '</scr' + 'ipt></div>';
    return adTag;

}
function TiiAd_getAdUrl() {

    return this.adServer + (this.params['pfadx'] ? "pfadx" : "adj") + "/" + this._getAdParams();
}

function TiiAdWrite(parentDivId) {

        var tgx = new TgxAdBridge(this);
        if ((!tgxDo.renderingMode)) {
            if ((typeof(TGX_SITE_CONFIG) != "undefined") && (TGX_SITE_CONFIG.gpt_sync_mode == 'async')) {
                tgxDo.renderingMode = "async";
            } else {
                tgxDo.renderingMode = "sync";
            }
        }
        var scripts = document.getElementsByTagName("script");
        if (!parentDivId) {
            tgxDo.parentDiv = scripts[scripts.length - 1].parentNode;            
        }
        if (tgxDo.processMode == "dequeue") {
            for (i = 0; i < tgxDo.slotQueue.length; i++) {
                tgx._getScript(tgxDo.slotQueue[i].divId, tgxDo.slotQueue[i].code);
            }
        }
        tgx.writeDebugInfoDiv(parentDivId);
        tgx.writeAdSlot(parentDivId);
        tgx.setProcessMode();
        tgx.writeOopSlot(parentDivId);
        //tgx.writeRefreshSlot(parentDivId);
        tgx.setProcessMode();

    } 
    
/*
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *   END OF Overridden TII ADS CODE   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */   
    
/*
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *    BEGINNING OF TGX CORE CODE      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */

/*
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !!!!!!!!!!!!     TGX PUBLIC METHODS    !!!!!!!!!!!!!!!!!!!!!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
function TgxAdBridge(ad) {

/**
 *  TGX Public Methods
 */
    this.getSlotFormattedParams     = TgxAdBridgeGetSlotFormattedParams;
    this.getSlotScript              = TgxAdBridgeGetSlotScript;
    this.setProcessMode             = TgxAdBridgeSetProcessMode;
    this.writeRefreshSlot           = TgxAdBridgeWriteRefreshSlot;
    this.writeAdSlot                = TgxAdBridgeWriteAdSlot;
    this.writeOopSlot               = TgxAdBridgeWriteOopSlot;
    this.writeDebugInfoDiv          = TgxAdBridgeWriteDebugInfoDiv;
    this.refreshSlots          		= TgxAdBridgeRefreshSlots;

/**
 *  TGX Private Methods
 */
    this._getSlotSizes              = TgxAdBridge_getSlotSizes;
    this._getSlotZone               = TgxAdBridge_getSlotZone;
    this._getSlotSiteName           = TgxAdBridge_getSlotSiteName;
    this._getSlotFilteredSiteName   = TgxAdBridge_getSlotFilteredSiteName;
    this._getInterstitial           = TgxAdBridge_getInterstitial;
    this._getSlotUnitName           = TgxAdBridge_getSlotUnitName;
    this._getSlotTarget             = TgxAdBridge_getSlotTarget;
    this._getTextBox                = TgxAdBridge_getTextBox;
    this._placeDebugHtml            = TgxAdBridge_placeDebugHtml;
    this._getDiv                    = TgxAdBridge_getDiv;
    this._getScript                 = TgxAdBridge_getScript;

/**
 *  TGX Properties
 */
    this.width                      = ad.width;
    this.height                     = ad.height;
    this.sitename                   = ad.sitename;
    this.tileNumber                 = ad.tileNumber;
    this.params                     = ad.params;
    this.zone                       = ad.zone;

}
function TgxAdBridgeGetSlotFormattedParams() {

    var paramsCode = "";
    for (var key in this.params) {
        var tempParamsVals = this.params[key].toString();
        if (typeof(this.params[key]) != "function") {
            if (tempParamsVals.indexOf(",") != -1) {
                tempParamsVals = " ['" + this.params[key].toString().replace(/,/g, "','")  + "']";
            } else {
                tempParamsVals = " '" + this.params[key].toString() + "'"
            }
            paramsCode += ".setTargeting('" + key + "'," + tempParamsVals + ")";   
        }

    }
    paramsCode += ".setTargeting('ch','";
    if (typeof(this.params.ch) != "undefined") {
        paramsCode += this.params.ch;
    }
    return paramsCode;
}
function TgxAdBridgeGetSlotScript(setMode, enableServices, oop, slotName, slotSize, slotTarget, targetAd, display, parentDivId) {

     var codePayload = '';
     if (setMode == 'sync') {
            codePayload += "googletag.pubads().enableSyncRendering();";
     } 
     if (!tgxDo.processMode) {
            codePayload += "googletag.pubads().collapseEmptyDivs();";
     }
     if (oop) {
         codePayload += "googletag.defineOutOfPageSlot('" + slotName + "',";
     } else if (parentDivId) {
         codePayload += "tgxDo.slots['" + parentDivId + "'] = googletag.defineSlot('" + slotName + "',";
         codePayload += slotSize + ","; 
     } else {
         codePayload += "googletag.defineSlot('" + slotName + "',";
         codePayload += slotSize + ",";      
     }
     codePayload += "'" + slotTarget + "')";
     if (targetAd) {
         codePayload += ".addService(googletag.pubads())" + this.getSlotFormattedParams() + "');";
     } else {
         codePayload += ";";
     }
     if (enableServices) {
         codePayload += "googletag.enableServices();";
     }
     if (display) {
         codePayload += "googletag.display('" + slotTarget + "');"; 
     } else {
         codePayload = "tgxDo.refreshSlot = " + codePayload + "googletag.pubads().noFetch();";
     }
     return codePayload;
 }
 
 
function TgxAdBridgeRefreshSlots(slots) {
	var slotsToRefresh = new Array();
	for  (i=0; i < slots.length; i++) {
		tgxDo.slots[slots[i]].clearTargeting;
		for (var key in this.params) {
			var tempParamsVals = this.params[key].toString();
			if (typeof(this.params[key]) != "function") {
				tgxDo.slots[slots[i]].setTargeting(key,this.params[key]);   
			}
		}
		if (typeof(this.params.ch) != "undefined") {
			tgxDo.slots[slots[i]].setTargeting('ch',this.params.ch);
		}
		slotsToRefresh.push(tgxDo.slots[slots[i]]);
	}
	googletag.pubads().refresh(slotsToRefresh);
 }  
 
function TgxAdBridgeWriteRefreshSlot(parentDivId) {
     if ((parentDivId) && (TGX_SITE_CONFIG.gpt_sync_mode == 'async') && (tgxDo.refreshSlot == null)) {
         var refreshSlotName = this._getSlotTarget() + "_refresh";
         tgxDo.refreshSlot = this._getDiv(refreshSlotName, 1, 1, parentDivId);
         this._getScript(refreshSlotName, this.getSlotScript(tgxDo.renderingMode, 0, 0, '/8484/refreshslot', "[2, 2]", refreshSlotName, 0, 0 ));
     } 
 } 
function TgxAdBridgeSetProcessMode(mode) {
    if (mode) {
        tgxDo.processMode = mode;
    } else {
        if (!tgxDo.processMode) {
            tgxDo.processMode = "queue";
        } else if (tgxDo.processMode == "queue") {
            tgxDo.processMode = "dequeue";
        } else if (tgxDo.processMode == "dequeue") {
            tgxDo.processMode = "run";
        }
    }      
} 
function TgxAdBridgeWriteAdSlot(parentDivId) {

    this._getDiv(this._getSlotTarget(), this.width, this.height, parentDivId);
    this._getScript(this._getSlotTarget(), this.getSlotScript(tgxDo.renderingMode, 1, 0, this._getSlotUnitName(), this._getSlotSizes(), this._getSlotTarget(), 1, 1 , parentDivId));
    if (TiiAdsIsDebugMode()) {this._getTextBox(this._getSlotTarget() + "_debug", this.getSlotScript(tgxDo.renderingMode, 1, 0, this._getSlotUnitName(), this._getSlotSizes(), this._getSlotTarget(), 1, 1 ))};

 }      
function TgxAdBridgeWriteOopSlot(parentDivId) {
    if ((this.params.dcopt == "ist") && (this._getSlotSiteName().search("cm")+1) && (tgxDo.istCmSlot == null)) {
        this._getDiv(this._getSlotTarget() + "-oop", this.width, this.height, parentDivId);
        this._getScript(this._getSlotTarget() + "-oop", this.getSlotScript(0, 1, 1, this._getSlotUnitName(), this._getSlotSizes(), this._getSlotTarget()  + "-oop", 1, 1 ));
        if (TiiAdsIsDebugMode()) {this._getTextBox(this._getSlotTarget() + "_debug", this.getSlotScript(0, 1, 1, this._getSlotUnitName(), this._getSlotSizes(), this._getSlotTarget()  + "-oop", 1, 1 ))};
        tgxDo.istCmSlot = true;
    }
    if ((this.params.dcopt == "ist") && (this._getSlotSiteName().search("cm") == -1) && (tgxDo.istSlot == null)) {
        this._getDiv(this._getSlotTarget() + "-oop", this.width, this.height, parentDivId);
        this._getScript(this._getSlotTarget() + "-oop", this.getSlotScript(0, 1, 1, this._getSlotUnitName(), this._getSlotSizes(), this._getSlotTarget()  + "-oop", 1, 1 ));
        if (TiiAdsIsDebugMode()) {this._getTextBox(this._getSlotTarget() + "_debug", this.getSlotScript(0, 1, 1, this._getSlotUnitName(), this._getSlotSizes(), this._getSlotTarget()  + "-oop", 1, 1 ))};
        tgxDo.istSlot = true;
    }
    
    }   
function TgxAdBridgeWriteDebugInfoDiv(parentDivId) {
    if (TiiAdsIsDebugMode()) {this._getDiv(this._getSlotTarget() + "_debug", this.width, this.height, parentDivId)};
}    
/*
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !!!!!!!!!!!!     TGX PRIVATE METHODS    !!!!!!!!!!!!!!!!!!!!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
function TgxAdBridge_getDiv(divId, width, height, parentDivId) {

        var div = document.createElement('div');      
        div.id = divId;
        //Next two lines commented out to address display issues on IE8
        //div.style.width = width;
        //div.style.height = height;
        if (parentDivId) {
            document.getElementById(parentDivId).appendChild(div);
        } else {
            tgxDo.parentDiv.appendChild(div);
        }
        return div;
    }
function TgxAdBridge_getScript(divId, code) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        try {
           script.appendChild(document.createTextNode(code)); 
        } catch (e) {
           script.text = code; 
        }
        
        if (tgxDo.processMode == "queue") {
            var queuedScript = new Object;
            queuedScript.divId = divId;
            queuedScript.code = code;
            tgxDo.slotQueue.push(queuedScript);
        } else {
            document.getElementById(divId).appendChild(script); 
        }
    }
function TgxAdBridge_getTextBox(divId, content) {

        var textbox = document.createElement('textarea');
        textbox.style.width = this.width;
        textbox.style.height = "20px";
        textbox.style.font = "12px courier";
        textbox.style.backgroundColor = "#FFFFBD";
        textbox.style.border = "1px solid black";
        textbox.style.zIndex = "auto";
        textbox.value = content;
        document.getElementById(divId).appendChild(textbox); 
}
function TgxAdBridge_getSlotSizes() {

    var adSizes = "";
    var adSizeArray = new Array();
    if (this.params.sz.search(",")) {
        adSizeArray = this.params.sz.split(",")  
    }
    for (var a = 0; a < adSizeArray.length; a++) {
        var sep = ",";
        if ((adSizeArray.length - 1) == a) {
            sep = "";
        };
        adSizeWH = adSizeArray[a].split("x");
        adSizes += "[" + adSizeWH[0] + "," + adSizeWH[1] + "]" + sep;
    }
    if (adSizeArray.length > 0) {
        adSizes = "[" + adSizes + "]";
    }
    return adSizes;

}
function TgxAdBridge_getSlotZone() {

    var adZone = this.zone.replace(/[^A-Za-z\/]/g, "");
    adZone = adZone.replace(/^\/|\/$/g, '');
    if (adZone) {
        adZone = "/" + adZone;
    }
    return adZone;

}
function TgxAdBridge_getSlotUnitName() {

    var slotUnit;
    if (TGX_CORE_CONFIG.gpt_mode == "test") {
        slotUnit = '/' + TGX_CORE_CONFIG.gpt_test_id + '/' + TGX_CORE_CONFIG.gpt_test_network + '_' + TGX_CORE_CONFIG.test_run_id + "_" + this._getSlotSiteName() +  this._getSlotZone();               
    } else if (TGX_CORE_CONFIG.gpt_mode == "prod") {
        slotUnit = '/' + TGX_CORE_CONFIG.gpt_prod_id + '/' + this._getSlotSiteName() +  this._getSlotZone();                           
    }
    slotUnit = slotUnit.replace(/(\/)\1/g, '/');
    return slotUnit;

}    
function TgxAdBridge_getSlotFilteredSiteName() {

    var filteredSitename = this.sitename.replace(TGX_CORE_CONFIG.legacy_network_id + ".", "");
    filteredSitename = filteredSitename.replace(TGX_CORE_CONFIG.legacy_network_id, ""); 
    if (TGX_CORE_CONFIG.alpha_numeric_site_ids.indexOf(filteredSitename) + 1) {
            filteredSitename = filteredSitename.replace(/[0-9]/g, '');
    }
    return filteredSitename;

}
function TgxAdBridge_getInterstitial() {

    var interstitial = "";
    if (this.params.dcopt == "ist") {
        interstitial = "googletag.defineOutOfPageSlot('" + this._getSlotUnitName() + "', '" + this._getSlotTarget() + "-oop').addService(googletag.pubads())"
    }
    return interstitial;

}
function TgxAdBridge_getSlotSiteName() {


    return this._getSlotFilteredSiteName();

}
function TgxAdBridge_getSlotTarget() {

    return this._getSlotSiteName() + '_' + this.tileNumber;

}

function TgxAdBridge_placeDebugHtml(parentDivName) {
    var divPlaced = false;

    return divPlaced;

}
/*
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !!!!!!!!!!!!     TGX UTIL METHODS    !!!!!!!!!!!!!!!!!!!!!!!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
          "use strict";
          if (this == null) {
              throw new TypeError();
          }
          var t = Object(this);
          var len = t.length >>> 0;
          if (len === 0) {
              return -1;
          }
          var n = 0;
          if (arguments.length > 1) {
              n = Number(arguments[1]);
              if (n != n) { // shortcut for verifying if it's NaN
                  n = 0;
              } else if (n != 0 && n != Infinity && n != -Infinity) {
                  n = (n > 0 || -1) * Math.floor(Math.abs(n));
              }
          }
          if (n >= len) {
              return -1;
          }
          var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
          for (; k < len; k++) {
              if (k in t && t[k] === searchElement) {
                  return k;
              }
          }
          return -1;
      }
}
function Tgx_init() {
    //GPT Boilerplate - Synchronous
    (function() {
        var useSSL = 'https:' == document.location.protocol;
        var src = (useSSL ? 'https:' : 'http:') +
        '//www.googletagservices.com/tag/js/gpt.js';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    })();
}

/*
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *    END OF TGX CORE CODE      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */



/*
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !!!!!!!!!!!!     INLINE TGX CODE      !!!!!!!!!!!!!!!!!!!!!!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */

var TGX_CORE_CONFIG = {
    'legacy_network_id': '3475',
    'test_run_id': '0329',
    'gpt_test_id': '9209926',
    'gpt_test_network': 'test',
    'gpt_prod_id': '8484',
    'gpt_mode' : 'prod',
    'alpha_numeric_site_ids' : ['mre2', 'hlt2', 'toh2', 'tim2', 'si2', 'golf2', 'cm.mre2', 'cm.hlt2', 'cm.toh2', 'cm.tim2', 'cm.si2', 'cm.golf2']
};
var bk = new TiiBkBeacon();
var cs = new TiiCsBeacon();
var tgxDo = new TgxData();
var tgxUtil = new TgxUtil();
_Tii_init();
Tgx_init();






