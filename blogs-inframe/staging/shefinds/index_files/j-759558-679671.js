//Generated:2014-03-05 02:17:29
	
	
//2-127

//2-121
(function() {
  var p = "759558",
    n = [],
    w = window,
    c = (function() {
      var r = w["ftClick_" + p];
      var i = n.length;
      if(!r) {
        r = "";
        while(i--) {
          if(w["ftClick_" + n[i]]) {
            r = w["ftClick_" + n[i]];
            break;
          }
        }
      }
      return r;
    }()),
    q = "ftParams_" + p;
  if (c && w[q].indexOf("click=") == -1) {
    c = (c.indexOf("&") != -1) ? encodeURIComponent(c) : c;
    w[q] += "&click=" + c;
  }
})();

var ft759558 = {
	params:window.ftParams_759558||"",
	guid:window.ftGUID_759558||"",
	confID:window.ftConfID_759558||"",
	exttrack:["https://ad-ace.doubleclick.net/ad/N3671.270478.AD.COM/B7956331.3;abr=!ie4;abr=!ie5;sz=1x1;pc=[TPAS_ID];ord="],
	extscript:[""],
	utilityURL:"http://cdn.flashtalking.com/atlas/1/suite.swf",
	atSiteAlias:"",
	atAdTagID:"",
	aID:"1",
	pID:"759558",
	cID:"26997",
	creativeID:"679671",
	campaignID: "31321",
	width:"728",
	height:"90",
	serveDom:"http://cdn.flashtalking.com",
	setFileSize:"15.9521484375",
	statBaseURL:"http://stat.flashtalking.com/reportV3/ft.stat?34526832-",
	linkMode:"0",
	linkID:"0",
	mvt:true,
	swf:"http://cdn.flashtalking.com/xre/75/759558/679671/swf/tMobile_DDR_Tier2_728x90_base_Retargeting.swf",
	altimg:"http://servedby.flashtalking.com/imp/3/31321;759558;204;gif;Adcom;PURdCPMTMobilecpmcampaignPlansROS728x90Stnd/?",
	storeGUID:/iP(ad|hone|od)/.test(navigator.appVersion),
	servedby:location.href.indexOf("http://servedby.flashtalking.com")>-1,
	cdn:location.href.indexOf("http://cdn.flashtalking.com")>-1,
	cdnSrc:"http://cdn.flashtalking.com/frameworks/js/frame/?g=",
	cdnGUID:"http://cdn.flashtalking.com/frameworks/js/ftGUID.html?g=",
	iDeviceImp:"http://servedby.flashtalking.com/imp/3/31321;759558;207;guid;Adcom;PURdCPMTMobilecpmcampaignPlansROS728x90Stnd/?ft_guid=",
	clickTags:["http://servedby.flashtalking.com/click/3/31321;759558;679671;211;[FT_CONFID]/?g=[FT_GUID]&random=[FT_RANDOM]&ft_width=728&ft_height=90&url=https://ad.doubleclick.net/clk;278392452;105300244;w;pc=[TPAS_ID]"],
	altimghref:"http://servedby.flashtalking.com/click/3/31321;759558;679671;210;[FT_CONFID]/?g=[FT_GUID]&random=[FT_RANDOM]&ft_width=728&ft_height=90&url=https://ad.doubleclick.net/clk;278392452;105300244;w;pc=[TPAS_ID]",
	switchArray:["swf","serveDom", "statBaseURL", "utilityURL", "altimg", "altimghref"],
	divID:"ftdiv759558",
	swfID:"ftswf759558",
	altimgID:"ftalt759558",
	alttext:"Click here",
	altimgtarget:"_blank",
	altimgborder:"0",
	minflashversion:10,
	centreAd:false,
	wtype:"transparent",
	advload:false,
	politeload:(false)?"1":"0",
	streamMode:(false)?"1":"0",
	customVars:"",
	adVis: true ? 1 : 0,
	adDisplayed:false,
	eventListeners:{},
	flashVarList:{},
	w:window,
	secure:location.protocol=="https:",
	scriptLocation: document.getElementById("ftscript_m759558"),
	flashVarHolder:[
		["adVis", "adVis"],
		["divID","divID"],
		["ftfuncid", "pID"],
		["creativeID","creativeID"],
		["cID","cID"],
		["ftPlacementID","pID"],
		["aID","aID"],
		["ftSetFileSize","setFileSize"],
		["ftStatBaseURL","statBaseURL"],
		["ftMVT","mvt"],
		["ftServeDom","serveDom"],
		["ftLinkMode","linkMode"],
		["ftLinkID","linkID"],
		["ftPL","politeload"],
		["ftStreamMode","streamMode"]
	],
	gFlashVarList:[
		["ftGUID","ftGUID_"],
		["ftConfID","ftConfID_"],
		["ftKeyword","ftKeyword_"],
		["ftSegment","ftSegment_"]
	],
	$:function(el){
		var o=this,
		x = el||o.divID,
		p={o:o};
		p.y=typeof x=="string"?document.getElementById(x):x;
		return new this.$Base(p);
	},
	decode: function(s) {
		try {
			return decodeURIComponent(s);
		} catch(e) {
			return unescape(s)
		}
	},
	flashVar:function x(){
		var a = [],
		fv = this.flashVarList;
		switch(arguments.length){
			case 1:
				a = arguments[0].replace(/[&=]/g,"-__-").split("-__-");
				if(a.length>1){
					for(var i=0,j=a.length;i<j;i+=2){
						x.call(this, a[i],a[i+1]);
					}
				}
			break;
			case 2:
				fv[arguments[0]]=arguments[1];
			break;
			default:
				for(var i in fv){
					a.push(i+"="+encodeURIComponent(fv[i]));
				}
			return a.join("&");
		}
	},
	bver:function(b, p){
		return (navigator[p||"appVersion"].toLowerCase().indexOf(b.toLowerCase())>=0);
	},
	fver:function(){
		var axo,
		s = "Shockwave",
		f = "Flash",
		sf = s+" "+f;
		if(this.bver("MSIE")){
			for(var i = 15; i>=7; i--){
				try {
					axo = new ActiveXObject(s+f+"."+s+f+"."+i);
					return parseFloat(axo.GetVariable("$version").match(/\b\d+\b/g).join("."));
				} catch (e) {}
			}
		}else{
			if (typeof navigator.plugins[sf]!="undefined")
		        return parseFloat(navigator.plugins[sf].description.substring(sf.length));
		}
	},
	qs:function(){
		var o=this,
		querystring=o.params,
		args=querystring.split('&'),
		qsObj = {},
		temp, temp0, temp1;
		for(var i=0;i<args.length;i++){
			var pair=args[i].split('=');
			if(pair.length>1){
				for(var j=2;j<pair.length;j++){
					pair[1]+="="+pair[j];
				}
			}
			temp=o.decode(pair[0]).split('+');
			temp0=temp.join(' ');
			temp=o.decode(pair[1]).split('+');
			temp1=temp.join(' ');
			qsObj[temp0]=temp1;
		}
		o.qs = function(ref,def){
			var c = window["ftClick_"+this.pID];
			if(ref==="click"&&c){
				qsObj[ref]=c;
			}else if(!qsObj[ref]){
				qsObj[ref]=def;
			}
			return qsObj[ref];
		};
		return o.qs.apply(o, arguments);
	},
	addEventListener:function(type,func){
		if(typeof this.eventListeners[type]=="undefined")
			this.eventListeners[type]=[];
		if(typeof func=="function")
			this.eventListeners[type].push(func);
		if((type=="adonpage"||type=="adready")&&this.adDisplayed)
			func.call(this);
	},
	once:function(type, func) {
		var o = this;
		var newFunc = function(e) {
			var i = o.eventListeners[type].length;
			func(e);
			while(i--) {
				if(o.eventListeners[type][i] === newFunc) {
					o.eventListeners[type].splice(i,1);
				}
			}
		};
		o.addEventListener(type, newFunc);
	},
	dispatchEvent:function(type, msg){
		if(typeof this.eventListeners[type]!="undefined"){
			for(var i=0;i<this.eventListeners[type].length;i++){
				this.eventListeners[type][i].call(this, msg);
			}
		}
		if(type=="adonpage"){
			this.adDisplayed = true;
		}
	},
	init:function(){
		var flash = false,
		o = this,
		addScripts = function(){
			var i = o.extscript.length;
			while(i--){
				if(o.extscript[i]!=="") {
					o.appendScriptToHead(o.replaceMacros(o.extscript[i]));
				}
			}
		};
		o.qs();
		if(o.fver()>=o.minflashversion){
			flash=true;
		}
		o.setup();
		if(!flash&&o.storeGUID&&!o.servedby&&!o.cdn){
			o.cdnSrc += o.guid+"&p="+encodeURIComponent(o.params);
			o.cdnSrc += "&c="+o.confID;
			o.cdnSrc += "&pID="+o.pID+"&xx="+String(o.pID).substr(0,2);
			o.cdnSrc += "&creativeID="+o.creativeID;
			o.insertParam(o.altimghref, {param:"ft_guid", value:o.guid});
			o.dispatchEvent("start");
			o.getBackup = o.getFrame;
			o.outputDiv(false);
		}else{
			o.outputExternals();
			o.dispatchEvent("start");
			if(o.storeGUID){
				delete o.qs.ftx;
				delete o.qs.fty;
			}
			o.outputDiv(flash);
			if(o.storeGUID){
				o.output207(o.guid);
			}

			if(o.adDisplayed&&document.getElementById(o.divID)){
				addScripts();
			} else {
				o.addEventListener('load', addScripts);
			}
		}
		o.addEventListener('visibleAd', function(bool){
			try{
				o.flashObject().ftAdVisible(bool ? 'visible' : 'undetectable');
			} catch(e) {}
		});
		o.dispatchEvent("end");
	},
	setup:function(){
		var o = this,
		q = o.qs,
		p = o.pID,
		switchArray = o.switchArray,
		fvarList = o.flashVarHolder,
		gfvl = o.gFlashVarList,
		fv = {},
		t;
		if(o.secure){
			for(i=switchArray.length;i--;){
				t = o[switchArray[i]];
				t = t.replace(/\bhttp:\/\/(cdn(?=\.flash)|video(?=\.flash)|stat(?=\.flash)|a(?=\.flash))/, "https://secure");
				o[switchArray[i]] = t.replace("http:", "https:");
			}
			for(i=o.clickTags.length;i--;){
				if(o.clickTags[i]){
					o.clickTags[i]=o.clickTags[i].replace("http:","https:");
				}
			}
		}
		if(typeof window["ftGeoC2_"+p]!="undefined"){
			fv.ftGeoCountry=window["ftGeoC2_"+p];
			fv.ftGeoState=window["ftGeoState_"+p];
			fv.ftGeoCity=window["ftGeoCity_"+p];
			fv.ftGeoISP=window["ftISP_"+p];
			fv.ftGeoSpeed=window["ftSpeed_"+p];
			fv.ftDMA=window["ftDMA_"+p];
			fv.ftLong=window["ftLong_"+p];
			fv.ftLat=window["ftLat_"+p];
			fv.ftPostal=window["ftPostal_"+p];	
		}
		o.guid = window["ftGUID_"+p];
		o.confID = window["ftConfID_"+p];	
		o.setupClickTags();
		o.setupBackupImp();
		for(var i = fvarList.length; i--; ){
			fv[fvarList[i][0]]=o[fvarList[i][1]];
		}
		for(var i = gfvl.length; i--; ){
			fv[gfvl[i][0]]=window[gfvl[i][1]+p];
		}
		for(var i in fv){
			o.flashVar(i, fv[i]);
		}
		o.flashVar(o.customVars);
		if (!(o.atSiteAlias === "" && o.atAdTagID === "")) {
			o.flashVar("utilityURL", o.utilityURL);
			o.flashVar("atSiteAlias", o.atSiteAlias);
			o.flashVar("atAdTagID", o.atAdTagID);
		}
		if(q("ftx","")!== ""||q("fty","")!==""){
			q.ftx=q("ftx","0");
			q.fty=q("fty","0");
		}
		o.setupLoadListener();
		if(o.bver("Macintosh")&&o.bver("Chrome")){
			o.addEventListener("adonpage",o.webkitTransform);
		}
	},
	outputDiv:function(flash){
		var o = this,
		div = '',
		absPos = '',
		posStyle = 'relative';
		if(o.qs.ftx||o.qs.fty){
			absPos = 'left:'+o.qs.ftx+'px; top:'+o.qs.fty+'px; ';
			posStyle = 'absolute';
		}
		if(o.qs("ftadz","")!=="")
			absPos+='z-index:'+o.qs("ftadz")+';';
			
		if(this.centreAd)
			absPos+=" margin: 0 auto;";
			
		div += '<div id="'+o.divID+'" style="position:'+posStyle+'; width:'+o.width+'px; height:'+o.height+'px;'+absPos+'">';
		div += flash?o.getSwf():o.getBackup();
		div += '</div>';
		if(window.ftImp759558 && window.ftImp759558.jsAppend) {
			o.scriptLocation.insertAdjacentHTML('afterEnd', div);
		} else {
			document.write(div);
		}
		o.dispatchEvent(flash?"adonpage":"backup");
		o.dispatchEvent("adready");
		if(o.politeload==="1"&&flash&&o.minflashversion>7){
			o.addEventListener("load", function(){
				try{
					o.flashObject().politeReady();
				}catch(e){}
			});	
		}
	},
	getSwf:function(){
		var o=this,
		div="";
		div += '<OBJECT type="application/x-shockwave-flash" '+(o.bver("MSIE")?'classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"':'data="'+o.swf+'"')+' ID="'+o.swfID+'" width="'+o.width+'" height="'+o.height+'">';
		div += '<PARAM NAME=movie VALUE="'+o.swf+'"/>';
		div += '<PARAM NAME=FlashVars VALUE="'+o.flashVar()+'"/>';
		div += '<PARAM NAME=quality VALUE="autohigh"/>';
		div += '<PARAM NAME=wmode VALUE="'+o.wtype+'"/>';
		div += '<PARAM NAME="allowScriptAccess" value="always"/>';
		div += '<PARAM NAME="allowFullScreen" value="true"/>';
		div += '</OBJECT>';
		return div;
	},
	getBackup:function(){
		var o=this,
		href = o.decode(o.addVClick(o.altimghref));
		return '<a id="fta'+o.altimgID+'" href="'+href+'" target="'+o.altimgtarget+'"><img id="'+o.altimgID+'" sr'+'c="'+o.altimg+'?'+o.random()+'" alt="'+o.alttext+'" style="width:'+o.width+'px; height:'+o.height+'px; border:'+o.altimgborder+'px"/></a>';
	},
	getFrame:function(){
		var o = this;
		return '<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0" allowtransparency="true" width="'+o.width+'" height="'+o.height+'" src="'+o.cdnSrc+'"></iframe>';
	},
	output207:function(guid){
		var o = this,
			fr = document.createElement("iframe"),
			cdnFr;
		fr.style.display = "none";
		if(o.servedby){
			cdnFr = fr.cloneNode();
			cdnFr.src = o.cdnGUID+guid;
			document.body.appendChild(cdnFr);
		}
		o.iDeviceImp = o.iDeviceImp+guid;
		o.iDeviceImp = o.insertParam(o.iDeviceImp, {param: "ft_creative", value:o.creativeID});
		o.iDeviceImp = o.insertParam(o.iDeviceImp, {param: "ft_configuration", value:window["ftConfID_"+o.pID]});
		fr.src = o.iDeviceImp+"&cachebuster="+o.random();
		document.body.appendChild(fr);
	},
	setupClickTags:function(){
		this.modifyClicks();
		this.flashVar('clickTag',this.addVClick(this.clickTags[0]));
		for(var i=this.clickTags.length;i--;){
			if(this.clickTags[i])
				this.flashVar('clickTag'+(i+1), this.addVClick(this.clickTags[i]));
		}
	},
	modifyClicks:function(){
		var o = this,
			insert = {param:"ft_custom", value:window["ftCustom_"+o.pID]||""};
		for(var i = o.clickTags.length; i--; ){
			if(o.clickTags[i])
				o.clickTags[i]=o.replaceMacros(o.insertParam(o.clickTags[i], insert), true);
			}
			o.altimghref = o.replaceMacros(o.insertParam(o.altimghref, insert), true);
	},
	setupBackupImp:function(){
		var o = this;
		o.altimg = o.insertParam(o.altimg, {param: "ft_creative", value:o.creativeID});
		o.altimg = o.insertParam(o.altimg, {param: "ft_configuration", value:window["ftConfID_"+o.pID]});
	},
	insertParam:function(str, insert){
		if(typeof str === "string" && insert.value!=="")
			str = str.replace("/?", "/?"+insert.param+"="+insert.value+"&");

		return str;
	},
	addVClick: function(ct){
		return this.decode(this.qs("click",""))+ct;
	},
	outputExternals:function(){
		var o=this,
		i;
		function outputPixel(p){
			if(p) {
				new Image().src = o.replaceMacros(p);
			}
		}
		for(i=o.exttrack.length;i--;){
				outputPixel(o.exttrack[i]);
		}
	},
	replaceMacros:function(str, cb){
		var o = this,
		macro = /(\[|%5B|%255B)FT_RANDOM(\]|%5D|%255D)/g,
		conf = /(\[|%5B|%255B)FT_CONFID(\]|%5D|%255D)/g,
		guid = /(\[|%5B|%255B)FT_GUID(\]|%5D|%255D)/g,
		noCache = /(\[|%5B|%255B)noCachebuster(\]|%5D|%255D)/,
		tStamp = /(\[|%5B|%255B)FT_TIMESTAMP(\]|%5D|%255D)/g,
		r = o.random(),
		c = window["ftConfID_"+o.pID],
		g = window["ftGUID_"+o.pID],
		t = window["ftTimestamp_"+o.pID];
		if(noCache.test(str)){
			str = str.replace(noCache,"");
			return str.replace(conf, c);
		}
		str = str.replace(guid, g);
		str = str.replace(tStamp, t);
		str = !macro.test(str)&&!cb?str+'?'+r:str.replace(macro, r);
		return str.replace(conf, c);
	},
	appendScriptToHead: function(scr) {
		var div = this.$().target,
			newScript = document.createElement('script');
		newScript.type = 'text/javascript';
		newScript.src = scr;
		div.appendChild(newScript);
	},
	setupLoadListener:function(){
		var o = this,
		w = o.w,
		f = function(){
			o.dispatchEvent("load");
		};
		if(this.bver("MSIE")){
			if(this.advload)
				document.attachEvent("onreadystatechange",function(){if(document.readyState=="complete")f();});
			else
				w.attachEvent("onload",f);
		}else{
			w.addEventListener(this.advload ?"DOMContentLoaded":"load",f,false);			
		}
	},
	flashObject:function(m){
		return this.$(this.swfID).target;
	},
	random:function(x){
		var x = x||1e9;
		return Math.floor(Math.random()*x);
	},
	$Base:function(p){
		var o = this;
		o.$ = true;
		o.o = p.o;
		o.target = p.y.$ ? p.y.target : p.y;
		o.style = p.y.style;
	},
	webkitTransform:function(){
		var o = this,
		swf = null,
		set = false,
		refreshSwf = function(){
			swf.style.webkitTransform=set?"scale(1)":"";
			set = !set;
			setTimeout(refreshSwf,50);
		};
		try {
			swf = o.$(o.swfID);
			refreshSwf();
		} catch(e) {
			setTimeout(function(){o.webkitTransform();}, 50);
		}
	}
};

//--start extensions



//--end extensions
ft759558.init();

(function(ft){

    var externalURL = (location.protocol==="https:"?"https://secure":"http://cdn") +
            ".flashtalking.com/pageFold/ftpagefold_v3.0.15.js",
        extScript = null,
        adIsVisible = false;

    ft.viewableImpression = "";
    ft.viewableImpressionThreshold = parseFloat("0",10);
    ft.viewableImpressionTime = parseInt("0", 10);
    ft.customDefinition = ("false" === "true");

    function startPageFold(){

        window.ftPageFold_v3(ft);
        ft.addEventListener('adready',function(){
          ft.addEventListener('advisibility', onAdVisibility);
        });
    }

    function checkForLoad(){
        if(typeof window.ftPageFold_v3 === "undefined"){
            setTimeout(checkForLoad, 100);
        }else{
            startPageFold();
        }
    }

    function onAdVisibility(vis){
        if(!adIsVisible){
            if(vis >= ft.viewableImpressionThreshold){
                adIsVisible = true;
                ft.dispatchEvent('visibleAd', true);
            } else if (vis === false) {
                ft.dispatchEvent('visibleAd', false);
            }
        }
    }

    if(typeof window.ftPageFold_v3 === "undefined"){

        extScript = document.createElement("script");
        extScript.src = externalURL;

        if(typeof extScript.addEventListener === "undefined"){
            checkForLoad();
        }else{

            extScript.onload = startPageFold;
        }

        document.getElementsByTagName("head")[0].appendChild(extScript);
    }else{

        startPageFold();
    }

}(window["ft759558"]));
