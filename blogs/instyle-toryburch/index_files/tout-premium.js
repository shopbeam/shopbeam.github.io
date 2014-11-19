tcmAds.createFooterTout = function(adVars) {
	if (typeof adVars.name == "undefined") { throw "You must supply a name for this tout"; }
	var ad = {
		"channels" : {
			"dflt" : "https://subscription.instyle.com/storefront/subscribe-to-instyle/link/1002444.html"
		},
		"msName" : "in-expfooter0613",
		"png_ad" : {
			"small" : {
				"width" : 992,
				"height" : 76,
				"assetId": 'footer-close',
				"src" : 'footer-close.png'
			},
			"large" : {
				"width" : 1009,
				"height" : 242,
				"assetId": 'footer-open',
				"src" : 'footer-open.png'
			}
		},
		"inIframe": function() {
			return (window.frameElement) ? true : false;
		},
		"resources": '',
		"clickThroughURL" : '',
		"eligibleBrowser" : false,
		"showFlash": false,
		"cookieName": 'in_expfooter0613',
		"channel":adVars.TCMchannel,
		//METHODS

		"setResourcesURL" : function(_msName){
		//alert("setR");
		var href = window.location.href,
		_URL = "//subscription-assets.timeinc.com/prod/assets/themes/magazines/SUBS/templates/velocity/site/"+_msName+"/resources/images/";
		if(/savvis\.net/.test(href)){_URL =_URL.replace("subscription-assets.timeinc.com/prod/assets/","ecom-dev01-app.usdlls2.savvis.net:10400/");}
		if(/qa\/assets\//.test(href)){_URL = _URL.replace("prod/assets/","qa/assets/");}
		this.resources = _URL;
		},
		"setValues" : function(index){
		//alert("setV");
			this.clickThroughURL = this.formatForDoubleClick(this.channels[adVars.TCMchannel]);
			 this.png_ad.small.divId = this.msName + '-' + this.png_ad['small'].assetId;
			this.png_ad.large.divId = this.msName + '-' + this.png_ad['large'].assetId;
		},
		"formatForDoubleClick": function (url) {
			   var tcm_dfpGet = adVars.clickTracking.dartGet,
					extra_qs = "",
					qs_param, qs_val;

				if (tcm_dfpGet != "%c") {
					url = tcm_dfpGet + url.replace("://","%3a%2f%2f");
				}

				for (qs_param in adVars.subs3Tracking) {
					qs_val = adVars.subs3Tracking[qs_param];
					
					if (/^%%PATTERN/.test(qs_val) || /^%s$/.test(qs_val)){ qs_val = "0000"; }
					if (qs_val == "") qs_val = "null";

					extra_qs += "&" + qs_param + "=" + qs_val;
				}

				// the first "&" should be a "?"
				extra_qs = extra_qs.replace("&", "?");

				return url + extra_qs;
		},
		"getBrowserEligibility": function() {
						// alert("getBrowser");	
			var ua = navigator.userAgent,  eligible = false,  version = 0;
			if (( navigator.userAgent.indexOf('Safari') > 0 ) && !((navigator.userAgent.match('/(iPhone|iPad|iPod)/')))) { // Chrome and Safari both contain 'Safari'
				if ( ua.indexOf('Chrome') > 0 ) { // Chrome
					version = ua.split('Chrome/')[1].split('.')[0];
					if ( version >= 7 ) {
						eligible = true;
					}
				} else { // Safari
					version = ua.split('Version/')[1].split('.')[0];
					if ( version >= 5 ) {
						eligible = true;
					}
				}
			}
			this.eligibleBrowser = eligible;
		},
		"build" : function(index){
			this.setResourcesURL(this.msName);
			this.getBrowserEligibility();
			this.setValues(index);
			this.insertPng('large');
			this.insertPng('small');
			this.exposeTout();
				
				// take up the space since the flash/jpg is absolute positioned
				//document.write("<div style='height: " + this.png_ad.small.height + "px; width: " + this.png_ad.small.width + "px;'></div>");
			
		},
		"createCookie": function() {
						 //    alert("creatCoo");	
		var name = this.cookieName,                                                                                                                                                 value = "true",
			days = 1,
		domainArray = window.location.hostname.split('.'),tcmTopLevelDomain = domainArray.slice(-2).join('.'),domain = "; domain=."+tcmTopLevelDomain;
			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				var expires = "; expires="+date.toGMTString();                                                                                                                                                                                }
			else var expires = "";
			document.cookie = name+"="+value+expires+"; path=/"+domain;
		},
		"getCookie": function(name){	
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {                                                                                                                                                                                                      var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
			}                                                                                                                                                                                                                                 return null;
		},
		"showExpanded": function(obj_id) {
	//alert("showE");
		if(navigator.cookieEnabled && !this.getCookie(this.cookieName)){
			this.createCookie();
			//alert("obj_id: "+obj_id);
			var obj = document.getElementById(obj_id);
				//    alert(obj_id);
			//alert(obj.style.display.value);
			if(obj.style.display=='none'){
				obj.style.display='block';
				setTimeout(function(){ obj.style.display='none'; }, 8000);
			}
		}
		},
		"insertPng": function(size) {
					// alert("insertPng"+size);	
			var oid = this.png_ad[size].assetId;
			var width = this.png_ad[size].width;
			var height = this.png_ad[size].height;
			var url = this.resources + this.png_ad[size].assetId + '.jpg';
			var div_id = this.png_ad[size].divId;
		//	alert(div_id);
			var onmouseover = (size == 'small') ? ' onmouseover="tcmAds[\''+ adVars.name + '\'].showExpanded(\''+ this.msName + '-' + this.png_ad['large'].assetId +'\');" ': '';
			var style = (size == 'large') ? 'style="width:1009px; height:242px; display:none; margin-top:-80px; z-index:999; overflow:hidden; position:absolute !important; background: url(//subscription-assets.timeinc.com/prod/assets/themes/magazines/SUBS/templates/velocity/site/in-expfooter0613/resources/images/footer-open.png) left top no-repeat;"' : 'style="width: 992px; height: 76px; position: relative; overflow: hidden; background: url(//subscription-assets.timeinc.com/prod/assets/themes/magazines/SUBS/templates/velocity/site/in-expfooter0613/resources/images/footer-close.png) left top no-repeat;"';

			var closebtn = (size == 'large') ? this.getCloseBtn( this.png_ad['large'].divId ) : '';
			var cover = this.getCover(size);
			document.write('<div id="'+div_id+'" '+ style + onmouseover+'>'+ closebtn + cover +'<div id="overall" style="position:absolute; width:'+this.png_ad[size].width+'px;height:'+this.png_ad[size].height+'px; display:block; cursor:pointer;" onclick=window.open("'+this.clickThroughURL+'");></div></div>');

		},
		getCloseBtn: function(id) {
					   
			return '<div id="closebtn" onclick="document.getElementById(\''+ id +'\').style.display = \'none\';" style="position:absolute; right:12px; top:91px; width:21px; height:21px; display:block; z-index: 99999; cursor:pointer;"><img src="'+this.resources+'spacer.gif" /></div>'
		},
		getCover: function (size) {
						 //alert("getCover");	
			var cover = '';
			if(size == 'small') { cover='//subscription-assets.timeinc.com/current/1232_top1_100_thumb.jpg';}
			else{cover='//subscription-assets.timeinc.com/current/1232_top1.jpg';}
		   var xy = (size == 'large') ? 'position:absolute; left:159px; top:3px; width:148px; height:201px;' : 'height: 130px;width: 96px;'; 
		  var yz = (size == 'large') ? '' : 'overflow:hidden; height:76px; position:absolute; left:146px; top:2px;';
			return '<div style="'+ yz +'"><img src="'+cover+'" style="'+ xy +'" /></div>'
		},
        exposeTout: function() {
            tcmAds[adVars.name] = this;
            if (this.inIframe()) {
                if (typeof window.parent.tcmAds !== 'undefined') {
                    window.parent.tcmAds[this.toutName] = tcmAds[this.toutName];
                } else {
                    window.parent.tcmAds = tcmAds;
                }
            }
        }

	}
	ad.build();
	return ad;
};
tcmAds.createFooterTout(tcmAds['in-expfooter0613.config']);
document.write('<style type="text/css">#cmfooter {clear:both;display:block; width:994px; overflow:visible; border-top:1px solid #ccc;}</style>');

