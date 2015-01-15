var sayATM = {

    //// GLOBALS ////
    oddTracker: -1,

    //// TEMPLATES ////

    tpl_fullSpotlight: function(o) {
        //// SOLD STATE - SPONSOR LOGO + 300x900 ////
        sayATM.insertHTML(o.adZones[0], '<div id="saymedia-sponsor-logo" class="sponsor-bug" style="height:100px"></div><div id="spotlight_top_wrapper"></div>');
        if (o["sponsor"]) sayATM.insertHTML("saymedia-sponsor-logo", o["sponsor"]);
        sayATM.clearSponsor();
        sayATM.addDashTag("spotlight_top_wrapper", o["300x900"]);
        sayATM.setStyle(o.adZones[0], {
            height: "1000px"
        });
    },

    tpl_splitSpotlight: function(o) {
        //// SOLD STATE - SPONSOR LOGO + 300x600 + 300x250 ////
        sayATM.insertHTML(o.adZones[0], '<div id="saymedia-sponsor-logo" class="sponsor-bug" style="height:100px"></div><div class="unit" id="spotlight_top_wrapper"></div><div class="unit" id="spotlight_bottom_wrapper"></div>');
        if (o["sponsor"]) sayATM.insertHTML("saymedia-sponsor-logo", o["sponsor"]);
        sayATM.setStyle('page-header', {
            backgroundPosition: "top right",
            backgroundRepeat: "repeat",
            backgroundImage: 'url("/ads/grey.png")'
        });
        sayATM.addDashTag("spotlight_top_wrapper", o["300x600"]);
        sayATM.addDashTag("spotlight_bottom_wrapper", o["300x250"]);
        sayATM.setStyle(o.adZones[0], {
            height: "970px"
        });
    },

    tpl_adframe: function(o) {
        //// UNSOLD STATE - NO SPONSOR LOGO + 300x600 ////
        sayATM.insertHTML(o.adZones[0], '<div id="saymedia-sponsor-logo" class="sponsor-bug" style="height:100px"></div><div id="spotlight_top_wrapper"></div>');
        sayATM.clearSponsor();
        sayATM.addDashTag("spotlight_top_wrapper", o["300x600"]);
        sayATM.setStyle(o.adZones[0], {
            height: "700px"
        });
    },

    tpl_seriesSponsor: function(o) {
        //// SOLD STATE - SPONSOR LOGO + 300x600 + 300x250 + CONTENT BADGES ////
        sayATM.insertHTML(o.adZones[0], '<div id="saymedia-sponsor-logo" class="sponsor-bug" style="height:100px"></div><div class="unit" id="spotlight_top_wrapper"></div><div class="unit" id="spotlight_bottom_wrapper"></div>');
        if (o["sponsor"]) sayATM.insertHTML("saymedia-sponsor-logo", o["sponsor"]);
        if (o["badge"]) {
            sayATM.insertHTML("sponsor_badge_top", o["badge"]);
            sayATM.insertHTML("sponsor_badge_bottom", o["badge"]);
        }
        sayATM.addDashTag("spotlight_top_wrapper", o["300x600"]);
        sayATM.addDashTag("spotlight_bottom_wrapper", o["300x250"]);
        sayATM.setStyle(o.adZones[0], {
            height: "970px"
        });
        sayATM.setStyle('page-header', {
            backgroundPosition: "top right",
            backgroundRepeat: "repeat",
            backgroundImage: 'url("/ads/grey.png")'
        });
    },

    tpl_streamContentAd_300x250: function(o) {
        //var ranId = Math.round(Math.random()*10000000);
        var ad1id = "content-stream-ad-pos" + o["pos"];
        var ad2id = "content-stream-ad-pos" + Number(Number(o["pos"]) + 1);
        var parentElem = document.getElementById(o.adZones[0]);
        var t = String(new Date().getTime());
        t = t.substring(t.length - 5, t.length);

        if (parentElem.offsetWidth >= 608 || parentElem.offsetWidth == 0) {
            if (parentElem.offsetWidth == 0) {
                parentElem.style.width = "608px";
            }
            sayATM.insertHTML(o.adZones[0], '<div class="say-contentRow" style="width:608px;text-align:center;margin:0 auto;"><div class="say-medRec-unit" style="width:300px;height:250px;display:inline-block;" id="' + ad1id + '"></div><div class="say-medRec-unit" style="width:300px;height:250px;display:inline-block;margin-left:8px" id="' + ad2id + '"></div></div>');
            sayATM.addDashTag(ad1id, o["300x250_1"], t);
            sayATM.addDashTag(ad2id, o["300x250_2"], t);
        } else {
            sayATM.insertHTML(o.adZones[0], '<div class="say-medRec-unit" style="display:inline-block;width:50%" id="' + ad1id + '"></div></div>');
            sayATM.addDashTag(ad1id, o["300x250_1"], t);
        }
    },

    tpl_streamContentAd_140x150: function(o) {
        var ranId = Math.round(Math.random() * 10000000);
        var ad1id = ranId + "-content-stream-ad-pos1";
        var ad2id = ranId + "-content-stream-ad-pos2";
        var ad3id = ranId + "-content-stream-ad-pos3";
        var t = String(new Date().getTime());
        t = t.substring(t.length - 5, t.length);

        sayATM.insertHTML(o.adZones[0], '<div id="' + ad1id + '" class="say-unit say-140x150 say-pos-1" style="display:inline-block; width: 33%;"></div>' +
            '<div id="' + ad2id + '" class="say-unit say-140x150 say-pos-2" style="display:inline-block; width: 33%;"></div>' +
            '<div id="' + ad3id + '" class="say-unit say-140x150 say-pos-3" style="display:inline-block; width: 33%;"></div>');

        sayATM.addDashTag(ad1id, o["140x150_1"], t);
        sayATM.addDashTag(ad2id, o["140x150_1"], t);
        sayATM.addDashTag(ad3id, o["140x150_1"], t);
    },

    tpl_rightRailSingle: function(o) {
        //        sayATM.insertHTML( adZones[0], '<div class="ad say-beta-contentad"><div id="say-140x150-1" class="say-unit say-300x250"></div></div>');
        sayATM.addDashTag(o.adZones[0], o["content_ad"]);
        //sayATM.setStyle(o.adZones[0], {height:"250px"} );
    },

    tpl_rightRailDouble: function(o) {
        //        insertHTML = (adZones[0], '<div class="ad say-beta-contentad"><div id="say-140x150-2" class="say-unit say-140x150"></div><div id="say-140x150-3" class="say-unit say-140x150"></div></div>');
        var t = String(new Date().getTime());
        t = t.substring(t.length - 5, t.length);

        sayATM.addDashTag(o.adZones[0], o["content_ad_1"], t);
        sayATM.addDashTag(o.adZones[0], o["content_ad_2"], t);
        //sayATM.setStyle(o.adZones[0], {height:"250px"} );
    },

    tpl_contentAdTiles: function(o) {
        var t = String(new Date().getTime());
        t = t.substring(t.length - 5, t.length);

        sayATM.insertHTML(o.adZones[0], '<div id="gridContainer" class="say-flexGrid" style="position:relative; width:300px; padding-bottom:5px; margin:0;">' +
            '<div id="adGrid-pos1" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="adGrid-pos2" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="adGrid-pos3" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="adGrid-pos4" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="adGrid-pos5" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="adGrid-pos6" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="adGrid-pos7" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="adGrid-pos8" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="bottomClearDiv" style="clear:both;"></div></div>');

        sayATM.addDashTag('adGrid-pos1', o["ad1"], t);
        sayATM.addDashTag('adGrid-pos2', o["ad2"], t);
        sayATM.addDashTag('adGrid-pos3', o["ad3"], t);
        sayATM.addDashTag('adGrid-pos4', o["ad4"], t);
        sayATM.addDashTag('adGrid-pos5', o["ad5"], t);
        sayATM.addDashTag('adGrid-pos6', o["ad6"], t);
        sayATM.addDashTag('adGrid-pos7', o["ad7"], t);
        sayATM.addDashTag('adGrid-pos8', o["ad8"], t);
    },

    tpl_contentAdTiles2: function(o) {
        var t = String(new Date().getTime());
        t = t.substring(t.length - 5, t.length);

        sayATM.insertHTML(o.adZones[0], '<div id="gridContainer" class="say-flexGrid" style="position:relative; width:300px; padding-bottom:5px; margin:0;">' +
            '<div id="adGrid-pos1" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="adGrid-pos2" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="adGrid-pos3" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="adGrid-pos4" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="adGrid-pos5" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="adGrid-pos6" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="adGrid-pos7" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="adGrid-pos8" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="adGrid-pos9" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: none;"></div>' +
            '<div id="bottomClearDiv" style="clear:both;"></div></div>');

        sayATM.addDashTag('adGrid-pos1', o["ad1"], t);
        sayATM.addDashTag('adGrid-pos2', o["ad2"], t);
        sayATM.addDashTag('adGrid-pos3', o["ad3"], t);
        sayATM.addDashTag('adGrid-pos4', o["ad4"], t);
        sayATM.addDashTag('adGrid-pos5', o["ad5"], t);
        sayATM.addDashTag('adGrid-pos6', o["ad6"], t);
        sayATM.addDashTag('adGrid-pos7', o["ad7"], t);
        sayATM.addDashTag('adGrid-pos8', o["ad8"], t);
        sayATM.addDashTag('adGrid-pos9', o["ad9"], t, 1);
    },

    tpl_contentAdTiles12: function(o) {
        var t = String(new Date().getTime());
        t = t.substring(t.length - 5, t.length);

        sayATM.insertHTML(o.adZones[0], '<div id="gridContainer" class="say-flexGrid" style="position:relative; width:300px; padding-bottom:5px; margin:0;">' +
            '<div id="adGrid-pos1" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="adGrid-pos2" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="adGrid-pos3" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="adGrid-pos4" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="adGrid-pos5" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="adGrid-pos6" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="adGrid-pos7" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="adGrid-pos8" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="adGrid-pos9" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="adGrid-pos10" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="adGrid-pos11" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="adGrid-pos12" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div>' +
            '<div id="bottomClearDiv" style="clear:both;"></div></div>');

        sayATM.addDashTag('adGrid-pos1', o["ad1"], t);
        sayATM.addDashTag('adGrid-pos2', o["ad2"], t);
        sayATM.addDashTag('adGrid-pos3', o["ad3"], t);
        sayATM.addDashTag('adGrid-pos4', o["ad4"], t);
        sayATM.addDashTag('adGrid-pos5', o["ad5"], t);
        sayATM.addDashTag('adGrid-pos6', o["ad6"], t);
        sayATM.addDashTag('adGrid-pos7', o["ad7"], t);
        sayATM.addDashTag('adGrid-pos8', o["ad8"], t);
        sayATM.addDashTag('adGrid-pos9', o["ad9"], t);
        sayATM.addDashTag('adGrid-pos10', o["ad10"], t);
        sayATM.addDashTag('adGrid-pos11', o["ad11"], t);
        sayATM.addDashTag('adGrid-pos12', o["ad12"], t);
    },

    //// VARS /////

    //    adZones: [],

    //// UTILITY FUNCTIONS ////

    parseCustomVars: function(customVars) {
        var zones = customVars[0].split(';');
        //        sayATM.adZones = zones;
        var tmpArr = customVars[1].split(';');
        var pData = {};
        for (var m = 0; m < tmpArr.length; m++) {
            var keyVal = tmpArr[m].split(':');
            pData[keyVal[0]] = keyVal[0] + '_' + keyVal[1];
        }
        return {
            adZones: zones,
            pageData: pData
        };
    },

    selectAds: function(varData, adsConfig, adsPriority) {
        if (adsPriority) {
            for (var c = 0; c < adsPriority.length; c++) {
                var targetData = varData.pageData[adsPriority[c]];
                if (targetData != 'undefined' && adsConfig[targetData] != undefined) {
                    sayATM.setupAds(adsConfig[targetData], varData);
                    //                alert("Targetting Ads to: " + targetData );
                    return;
                }
            }
        }
        sayATM.setupAds(adsConfig["ros"], varData);
    },

    setupAds: function(sovArr, varData) {
        var pArr = new Array();
        for (var c = 0; c < sovArr.length; c++) {
            for (var i = 0; i < sovArr[c]["p"]; i++) {
                pArr.push(c);
            }
        }
        // Get the weighted random Ad definition
        var idx = Math.floor(Math.random() * pArr.length);
        var sel = sovArr[pArr[idx]];

        // Add the AdZone data to this Ad object so Template has access to it.
        sel.adZones = varData.adZones;

        var tpl = this[sel.e];

        if (typeof(tpl) === "function") {
            tpl(sel);
        } else {
            console.log("TEMPLATED FUNCTION IS NOT DEFINED")
        }
    },

    addDashTag: function(divId, aid, gid, trigger) {
        var t = document.getElementById(divId);
        var s1;
        var s2;
        var scr;
        if (typeof(gid) === 'undefined') gid = null;
        if (typeof(trigger) === 'undefined') trigger = null;
        if (gid != null) {
            s1 = document.createElement("script");
            scr = "var grp_" + aid + "=\";grp=" + gid + "\"";
            s1.async = true;
            s1.text = scr;
            t.appendChild(s1);
        }
        s2 = document.createElement("script");
        s2.async = true;
        s2.src = "http://ads.saymedia.com/" + aid + ".js?ord=" + Math.random();
        t.appendChild(s2);
        if (trigger != null) {
            setInterval(sayATM.handleShowHouseAd, 4000);
        }
    },

    setStyle: function(divId, styles) {
        var styleObj = document.getElementById(divId).style;
        for (var key in styles) {
            styleObj[key] = styles[key];
        }
    },

    insertHTML: function(divId, str) {
        if (document.getElementById(divId)) {
            document.getElementById(divId).innerHTML += str;
        }
    },

    clearSponsor: function() {
        this.setStyle("page-header", {
            backgroundImage: "none"
        });
    },

    collapseAdContainer: function(divId) {
        document.getElementById(divId).style["display"] = "none";
    },

    handleNoAd: function(divNum, mode) {
        //alert("no ad at: " + divNum);
        if (mode == 1) //flexGrid
        {
            document.getElementById('adGrid-pos' + Number(divNum)).style.display = "none";
            sayATM.oddTracker *= -1;
        } else if (mode == 2) //row
        {
            document.getElementById('content-stream-ad-pos' + Number(divNum)).style.display = "none";
        }
    },

    handleShowHouseAd: function() {
        if (sayATM.oddTracker > 0) {
            document.getElementById('adGrid-pos9').style.display = "block";
        }
    }

};

var sayReloader = {

    totalCount: 0,
    maxReloads: 1000,
    minReloadTimeMs: 1000,
    lastReloadTime: [],

    reloadAd: function(divId, intgId) {
        var rightNow,
            thisProd,
            oldAdDiv,
            scriptTags,
            tagUrl,
            newScriptElt;

        rightNow = new Date().getTime();

        //make sure a takeover is not open
        for (thisProd in veprods) {
            if (veprods[thisProd].takeovershowing) {
                // a takeover is open so we can't reload nothing
                return;
            }
        }

        // throttle the reloads
        if ((sayReloader.totalCount >= sayReloader.maxReloads) ||
            ((typeof sayReloader.lastReloadTime[divId] != "undefined") &&
                (rightNow - sayReloader.lastReloadTime[divId] < sayReloader.minReloadTimeMs))) {
            return;
        }

        oldAdDiv = document.getElementById(divId);

        // clear out the old div
        while (oldAdDiv.childNodes.length) {
            oldAdDiv.removeChild(oldAdDiv.childNodes[0]);
        }

        tagUrl = intgId;

        newScriptElt = document.createElement('script');
        newScriptElt.setAttribute('type', 'text/javascript');
        newScriptElt.setAttribute('src', tagUrl);
        oldAdDiv.appendChild(newScriptElt);

        sayReloader.totalCount++;
        sayReloader.lastReloadTime[divId] = rightNow;

    }
}

// Backward compatibilty for older Ad tags that call handNoAd in global namepsace
var handleNoAd = sayATM.handleNoAd;