var sayATM = {
    oddTracker: -1,
    adZones: [],
    adTemplates: [],
    fgSettings: [],
    tpl_fullSpotlight: function(o, p) {
        sayATM.insertHTML(o.adZones[p], '<div id="saymedia-sponsor-logo" class="sponsor-bug" style="height:100px"></div><div id="spotlight_top_wrapper"></div>');
        if (o.sponsor) {
            sayATM.insertHTML("saymedia-sponsor-logo", o.sponsor);
            sayATM.setStyle(o.adZones[p], {
                height: "1000px"
            })
        } else {
            sayATM.setStyle("saymedia-sponsor-logo", {
                height: "0px"
            });
            sayATM.setStyle(o.adZones[p], {
                height: "900px"
            })
        }
        sayATM.addDashTag("spotlight_top_wrapper", o["300x900"])
    },
    tpl_splitSpotlight: function(o, p) {
        sayATM.insertHTML(o.adZones[p], '<div id="saymedia-sponsor-logo" class="sponsor-bug" style="height:100px"></div><div class="unit" id="spotlight_top_wrapper"></div><div class="unit" id="spotlight_bottom_wrapper"></div>');
        if (o.sponsor) {
            sayATM.insertHTML("saymedia-sponsor-logo", o.sponsor)
        }
        sayATM.setStyle("page-header", {
            backgroundPosition: "top right",
            backgroundRepeat: "repeat",
            backgroundImage: 'url("/ads/grey.png")'
        });
        sayATM.addDashTag("spotlight_top_wrapper", o["300x600"]);
        sayATM.addDashTag("spotlight_bottom_wrapper", o["300x250"]);
        sayATM.setStyle(o.adZones[p], {
            height: "970px"
        })
    },
    tpl_adframe: function(o, p) {
        sayATM.insertHTML(o.adZones[p], '<div id="saymedia-sponsor-logo" class="sponsor-bug" style="height:100px"></div><div id="spotlight_top_wrapper"></div>');
        if (o.sponsor) {
            sayATM.insertHTML("saymedia-sponsor-logo", o.sponsor);
            if (!o.pop) {
                sayATM.setStyle(o.adZones[p], {
                    height: "700px"
                })
            }
        } else {
            sayATM.setStyle("saymedia-sponsor-logo", {
                height: "0px"
            });
            if (!o.pop) {
                sayATM.setStyle(o.adZones[p], {
                    height: "600px"
                })
            }
        }
        sayATM.addDashTag("spotlight_top_wrapper", o["300x600"])
    },
    tpl_adframeSponsored: function(o, p) {
        sayATM.insertHTML(o.adZones[p], '<div id="saymedia-sponsor-logo" class="sponsor-bug" style="height:100px"></div><div id="spotlight_top_wrapper"></div>');
        if (o.sponsor) {
            sayATM.insertHTML("saymedia-sponsor-logo", o.sponsor);
            sayATM.setStyle(o.adZones[p], {
                height: "700px"
            })
        } else {
            sayATM.setStyle("saymedia-sponsor-logo", {
                height: "0px"
            });
            sayATM.setStyle(o.adZones[p], {
                height: "600px"
            })
        } if (o.tracker) {
            sayATM.insertHTML("saymedia-sponsor-logo", o.tracker)
        }
        sayATM.addDashTag("spotlight_top_wrapper", o["300x600"])
    },
    tpl_spark: function(o, p) {
        sayATM.insertHTML(o.adZones[p], '<div id="saymedia-sponsor-logo" class="sponsor-bug" style="height:100px"></div><div id="spotlight_top_wrapper"></div>');
        if (o.sponsor) {
            sayATM.insertHTML("saymedia-sponsor-logo", o.sponsor);
            sayATM.setStyle(o.adZones[p], {
                height: "350px"
            })
        } else {
            sayATM.setStyle("saymedia-sponsor-logo", {
                height: "0px"
            });
            sayATM.setStyle(o.adZones[p], {
                height: "250px"
            })
        }
        sayATM.addDashTag("spotlight_top_wrapper", o["300x250"])
    },
    tpl_seriesSponsor: function(o, p) {
        sayATM.insertHTML(o.adZones[p], '<div id="saymedia-sponsor-logo" class="sponsor-bug" style="height:100px"></div><div class="unit" id="spotlight_top_wrapper"></div><div class="unit" id="spotlight_bottom_wrapper"></div>');
        if (o.sponsor) {
            sayATM.insertHTML("saymedia-sponsor-logo", o.sponsor)
        }
        if (o.badge) {
            sayATM.insertHTML("sponsor_badge_top", o.badge);
            sayATM.insertHTML("sponsor_badge_bottom", o.badge)
        }
        sayATM.addDashTag("spotlight_top_wrapper", o["300x600"]);
        sayATM.addDashTag("spotlight_bottom_wrapper", o["300x250"]);
        sayATM.setStyle(o.adZones[p], {
            height: "970px"
        });
        sayATM.setStyle("page-header", {
            backgroundPosition: "top right",
            backgroundRepeat: "repeat",
            backgroundImage: 'url("/ads/grey.png")'
        })
    },
    tpl_rightRailSingle: function(o, p) {
        sayATM.addDashTag(o.adZones[p], o.content_ad)
    },
    tpl_rightRailDouble: function(o, p) {
        var t = String(new Date().getTime());
        t = t.substring(t.length - 5, t.length);
        sayATM.addDashTag(o.adZones[p], o.content_ad_1, t);
        sayATM.addDashTag(o.adZones[p], o.content_ad_2, t)
    },
    tpl_contentAdTiles: function(o, p) {
        var t = String(new Date().getTime());
        t = t.substring(t.length - 5, t.length);
        sayATM.insertHTML(o.adZones[p], '<div id="gridContainer" class="say-flexGrid" style="position:relative; width:300px; padding-bottom:5px; margin:0;"><div id="adGrid-pos1" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos2" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos3" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos4" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos5" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos6" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos7" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos8" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos9" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: none;"></div><div id="bottomClearDiv" style="clear:both;"></div></div>');
        sayATM.addDashTag("adGrid-pos1", o.ad1, t);
        sayATM.addDashTag("adGrid-pos2", o.ad2, t);
        sayATM.addDashTag("adGrid-pos3", o.ad3, t);
        sayATM.addDashTag("adGrid-pos4", o.ad4, t);
        sayATM.addDashTag("adGrid-pos5", o.ad5, t);
        sayATM.addDashTag("adGrid-pos6", o.ad6, t);
        sayATM.addDashTag("adGrid-pos7", o.ad7, t);
        sayATM.addDashTag("adGrid-pos8", o.ad8, t);
        sayATM.addDashTag("adGrid-pos9", o.ad9, t, 1)
    },
    tpl_contentAdTiles4: function(o, p) {
        var t = String(new Date().getTime());
        t = t.substring(t.length - 5, t.length);
        sayATM.insertHTML(o.adZones[p], '<div id="gridContainer" class="say-flexGrid" style="position:relative; width:300px; padding-bottom:5px; margin:0;"><div id="adGrid-pos1" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos2" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos3" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos4" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos5" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="bottomClearDiv" style="clear:both;"></div></div>');
        sayATM.addDashTag("adGrid-pos1", o.ad1, t);
        sayATM.addDashTag("adGrid-pos2", o.ad2, t);
        sayATM.addDashTag("adGrid-pos3", o.ad3, t);
        sayATM.addDashTag("adGrid-pos4", o.ad4, t);
        sayATM.addDashTag("adGrid-pos5", o.ad5, t, 1)
    },
    tpl_contentAdTiles12: function(o, p) {
        var t = String(new Date().getTime());
        t = t.substring(t.length - 5, t.length);
        sayATM.insertHTML(o.adZones[p], '<div id="gridContainer" class="say-flexGrid" style="position:relative; width:300px; padding-bottom:5px; margin:0;"><div id="adGrid-pos1" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos2" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos3" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos4" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos5" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos6" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos7" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos8" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos9" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos10" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos11" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos12" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos13" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: none;"></div><div id="bottomClearDiv" style="clear:both;"></div></div>');
        sayATM.addDashTag("adGrid-pos1", o.ad1, t);
        sayATM.addDashTag("adGrid-pos2", o.ad2, t);
        sayATM.addDashTag("adGrid-pos3", o.ad3, t);
        sayATM.addDashTag("adGrid-pos4", o.ad4, t);
        sayATM.addDashTag("adGrid-pos5", o.ad5, t);
        sayATM.addDashTag("adGrid-pos6", o.ad6, t);
        sayATM.addDashTag("adGrid-pos7", o.ad7, t);
        sayATM.addDashTag("adGrid-pos8", o.ad8, t);
        sayATM.addDashTag("adGrid-pos9", o.ad9, t);
        sayATM.addDashTag("adGrid-pos10", o.ad10, t);
        sayATM.addDashTag("adGrid-pos11", o.ad11, t);
        sayATM.addDashTag("adGrid-pos12", o.ad12, t);
        sayATM.addDashTag("adGrid-pos13", o.ad13, t, 1)
    },
    tpl_streamContentAd_300x250: function(o, p) {
        var ad1id = "content-stream-ad-pos" + Number(1 + Number(Number(o.pos) - 1) * 2);
        var ad2id = "content-stream-ad-pos" + Number(o.pos) * 2;
        var t = String(new Date().getTime());
        t = t.substring(t.length - 5, t.length);
        if (document.getElementById(o.adZones[Number(o.pos) + 1]) != null) {
            if (document.getElementById(o.adZones[Number(o.pos) + 1]).offsetWidth >= 608) {
                sayATM.insertHTML(o.adZones[Number(o.pos) + 1], '<div class="say-contentRow" style="width:608px;text-align:center;margin:0 auto;"><div class="say-medRec-unit" style="width:300px;height:250px;display:inline-block;" id="' + ad1id + '"></div><div class="say-medRec-unit" style="width:300px;height:250px;margin-left:8px;display:inline-block;" id="' + ad2id + '"></div></div>');
                sayATM.addDashTag(ad1id, o["300x250_1"], t);
                sayATM.addDashTag(ad2id, o["300x250_2"], t)
            } else {
                sayATM.insertHTML(o.adZones[Number(o.pos) + 1], '<div class="say-medRec-unit" style="display:inline-block;width:50%;min-width:300px;" id="' + ad1id + '"></div></div>');
                sayATM.addDashTag(ad1id, o["300x250_1"], t)
            }
        } else {
            console.log(">>>ATM: cannot find adzone: " + o.adZones[Number(o.pos) + 1])
        }
    },
    tpl_streamContentAd_140x150: function(o, p) {
        var ranId = Math.round(Math.random() * 10000000);
        var ad1id = ranId + "-content-stream-ad-pos1";
        var ad2id = ranId + "-content-stream-ad-pos2";
        var ad3id = ranId + "-content-stream-ad-pos3";
        var t = String(new Date().getTime());
        t = t.substring(t.length - 5, t.length);
        sayATM.insertHTML(o.adZones[p], '<div id="' + ad1id + '" class="say-unit say-140x150 say-pos-1" style="display:inline-block; width: 33%;"></div><div id="' + ad2id + '" class="say-unit say-140x150 say-pos-2" style="display:inline-block; width: 33%;"></div><div id="' + ad3id + '" class="say-unit say-140x150 say-pos-3" style="display:inline-block; width: 33%;"></div>');
        sayATM.addDashTag(ad1id, o["140x150_1"], t);
        sayATM.addDashTag(ad2id, o["140x150_1"], t);
        sayATM.addDashTag(ad3id, o["140x150_1"], t)
    },
    tpl_streamAdTiles: function(o, p) {
        var t = String(new Date().getTime());
        var fixWidth = 590;
        t = t.substring(t.length - 5, t.length);
        if (document.getElementById(o.adZones[p]).offsetWidth >= 1190) {
            fixWidth = 1200
        }
        sayATM.insertHTML(o.adZones[p], '<div id="gridContainer" class="say-flexGrid" style="position:relative; width:' + fixWidth + 'px; padding-bottom:5px; margin:0;"><div id="adGrid-pos1" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos2" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos3" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos4" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos5" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos6" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos7" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos8" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="bottomClearDiv" style="clear:both;"></div></div>');
        sayATM.addDashTag("adGrid-pos1", o.ad1, t);
        sayATM.addDashTag("adGrid-pos2", o.ad2, t);
        sayATM.addDashTag("adGrid-pos3", o.ad3, t);
        sayATM.addDashTag("adGrid-pos4", o.ad4, t);
        sayATM.addDashTag("adGrid-pos5", o.ad5, t);
        sayATM.addDashTag("adGrid-pos6", o.ad6, t);
        sayATM.addDashTag("adGrid-pos7", o.ad7, t);
        sayATM.addDashTag("adGrid-pos8", o.ad8, t)
    },
    tpl_streamAdTiles12: function(o, p) {
        var t = String(new Date().getTime());
        var fixWidth = "900";
        var sn = window.location.hostname;
        var snLink;
        if (sn.indexOf("www") != -1) {
            sn = sn.replace(/([a-zA-Z0-9]+.)/, "")
        }
        if (sayATM.fgSettings[0] != undefined && sayATM.fgSettings[0] != "" && sayATM.fgSettings[1] != undefined && sayATM.fgSettings[1] != "") {
            sn = sayATM.fgSettings[0];
            snLink = sayATM.fgSettings[1]
        } else {
            sn = sayATM.toTitleCase(sn) + " is proudly sponsored by";
            snLink = "/sponsors"
        }
        t = t.substring(t.length - 5, t.length);
        sayATM.insertHTML(o.adZones[p], '<div id="gridContainer" class="say-flexGrid" style="position:relative; width:' + fixWidth + 'px; padding-bottom:5px; margin:0;"><div class="sponsor-btns shazam" style="color:#9E9E9E;font-family:arial,helvetica,clean,sans-serif;font-size:18px;" id="sponsorText"><h3 id="sponsorTextLink">' + sn + '</h3><a id="sponsor-btns-showcase-link" href="' + snLink + '" style="font-family:arial,helvetica,clean,sans-serif;position:absolute;font-size:11px;right:8px;top:8px;text-decoration:none;color:#e19a15;">View our Sponsors Showcase</a><div id="adGrid-pos1" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos2" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos3" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos4" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos5" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos6" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos7" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos8" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos9" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos10" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos11" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="adGrid-pos12" class="say-tile-unit" style="position:relative; width: 140px; height: 150px; margin: 5px 0 0 5px; float: left; display: block;"></div><div id="bottomClearDiv" style="clear:both;"></div></div>');
        setTimeout(function() {
            sayATM.addDashTag("adGrid-pos1", o.ad1, t)
        }, 10000);
        setTimeout(function() {
            sayATM.addDashTag("adGrid-pos2", o.ad2, t)
        }, 10000);
        setTimeout(function() {
            sayATM.addDashTag("adGrid-pos3", o.ad3, t)
        }, 10000);
        setTimeout(function() {
            sayATM.addDashTag("adGrid-pos4", o.ad4, t)
        }, 10000);
        setTimeout(function() {
            sayATM.addDashTag("adGrid-pos5", o.ad5, t)
        }, 10000);
        setTimeout(function() {
            sayATM.addDashTag("adGrid-pos6", o.ad6, t)
        }, 10000);
        setTimeout(function() {
            sayATM.addDashTag("adGrid-pos7", o.ad7, t)
        }, 10000);
        setTimeout(function() {
            sayATM.addDashTag("adGrid-pos8", o.ad8, t)
        }, 10000);
        setTimeout(function() {
            sayATM.addDashTag("adGrid-pos9", o.ad9, t)
        }, 10000);
        setTimeout(function() {
            sayATM.addDashTag("adGrid-pos10", o.ad10, t)
        }, 10000);
        setTimeout(function() {
            sayATM.addDashTag("adGrid-pos11", o.ad11, t)
        }, 10000);
        setTimeout(function() {
            sayATM.addDashTag("adGrid-pos12", o.ad12, t)
        }, 10000)
    },
    tpl_twigAd: function(o, p) {
        sayATM.insertHTML(o.adZones[p], '<div class="say-twig-unit" style="display:inline-block;width:100%;" id="content-well-twig-1"></div></div>');
        sayATM.addDashTag("content-well-twig-1", o.twig)
    },
    regView: function(rUrl) {
        var e = document.createElement("img");
        e.width = 0;
        e.height = 0;
        e.src = rUrl;
        document.getElementsByTagName("body")[0].appendChild(e)
    },
    parseCustomVars: function(customVars) {
        var zones = customVars[0].split("~");
        sayATM.adZones = zones;
        var tmpArr = customVars[1].split("~");
        var pData = {};
        for (var m = 0; m < tmpArr.length; m++) {
            var keyVal = tmpArr[m].split(":");
            if (keyVal[1] != undefined) {
                pData[keyVal[0]] = keyVal[0] + "_" + keyVal[1].replace(/[\-]/g, "")
            } else {
                pData[keyVal[0]] = keyVal[0] + "_" + keyVal[1]
            }
        }
        if (customVars[3] != undefined) {
            if (customVars[3].indexOf("~") != -1) {
                sayATM.fgSettings = customVars[3].split("~")
            }
        }
        return {
            adZones: zones,
            pageData: pData
        }
    },
    selectAds: function(varData, adsConfig, adsPriority, regUrl) {
        var adLoaded;
        for (var d = 0; d < sayATM.adZones.length; d++) {
            adLoaded = false;
            if (sayATM.adZones[d].toLowerCase() == "x") {
                continue
            }
            for (var c = 0; c < adsPriority.length; c++) {
                var targetData = varData.pageData[adsPriority[c]];
                if (targetData != "undefined" && adsConfig[d][targetData] != undefined) {
                    sayATM.setupAds(adsConfig[d][targetData], varData, d);
                    adLoaded = true;
                    break
                }
            }
            if (!adLoaded) {
                sayATM.setupAds(adsConfig[d]["ros"], varData, d)
            }
        }
        if (regUrl != undefined) {
            sayATM.regView(regUrl)
        } else {}
    },
    setupAds: function(sovArr, varData, pos) {
        var pArr = new Array();
        for (var c = 0; c < sovArr.length; c++) {
            for (var i = 0; i < sovArr[c]["p"]; i++) {
                pArr.push(c)
            }
        }
        var idx = Math.floor(Math.random() * pArr.length);
        var sel = sovArr[pArr[idx]];
        sel.adZones = varData.adZones;
        var tpl = this[sel.e];
        if (typeof(tpl) === "function") {
            sayATM.adTemplates[pos] = [];
            sayATM.adTemplates[pos][0] = tpl;
            sayATM.adTemplates[pos][1] = sel;
            tpl(sel, pos)
        } else {
            console.log("TEMPLATED FUNCTION IS NOT DEFINED")
        }
    },
    addCustomTag: function(tag, divId) {
        var x = document.getElementById(divId);
        var y = document.createElement("iframe");
        y.scrolling = "no";
        y.width = "300";
        y.height = "250";
        y.style.border = "none";
        y.style.margin = "0 0 0 0";
        y.style.top = "0";
        y.style.left = "0";
        x.appendChild(y);
        var z = (y.contentWindow || y.contentDocument);
        var content = '<html><head><title>ad frame</title></head><body><script type="text/javascript" src="' + tag + '"><\/script></body></html>';
        z.contents = content;
        y.src = 'javascript:window["contents"]'
    },
    addDashTag: function(divId, aid, gid, trigger) {
        var t = document.getElementById(divId);
        var s2;
        var scr;
        if (!t) {
            console.log("ATM: divId: " + divId + " not found!");
            return true
        }
        if (typeof(gid) === "undefined") {
            gid = null
        }
        if (typeof(trigger) === "undefined") {
            trigger = null
        }
        s2 = document.createElement("script");
        s2.async = true;
        s2.setAttribute("data-cfasync", "false");
        s2.src = "http://ads.saymedia.com/" + aid + ".js?ord=" + Math.random();
        if (gid != null) {
            s2.src = "http://ads.saymedia.com/" + aid + ".js?grp=" + gid + "&ord=" + Math.random()
        }
        t.appendChild(s2);
        if (trigger != null) {
            setTimeout(function() {
                sayATM.handleShowHouseAd(divId)
            }, 4000)
        }
    },
    setStyle: function(divId, styles) {
        var styleObj = document.getElementById(divId).style;
        for (var key in styles) {
            styleObj[key] = styles[key]
        }
    },
    insertHTML: function(divId, str) {
        if (document.getElementById(divId)) {
            document.getElementById(divId).innerHTML += str
        }
    },
    clearSponsor: function() {
        this.setStyle("page-header", {
            backgroundImage: "none"
        })
    },
    collapseAdContainer: function(divId) {
        document.getElementById(divId).style.display = "none"
    },
    handleNoAd: function(divNum, mode) {
        if (mode == 1) {
            document.getElementById("adGrid-pos" + Number(divNum)).style.display = "none";
            sayATM.oddTracker *= -1
        } else {
            if (mode == 2) {
                document.getElementById("content-stream-ad-pos" + Number(divNum)).style.display = "none"
            }
        }
    },
    handleShowHouseAd: function(divId) {
        if (sayATM.oddTracker > 0) {
            document.getElementById(divId).style.display = "block"
        }
    },
    toTitleCase: function(str) {
        return str.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        })
    }
};
var sayReloader = {
    totalCount: 0,
    maxReloads: 1000,
    minReloadTimeMs: 1000,
    lastReloadTime: [],
    TimeToFade: 500,
    reloadAd: function(adzone) {
        var rightNow, thisProd, scriptTags, tagUrl, newScriptElt;
        rightNow = new Date().getTime();
        for (thisProd in veprods) {
            if (veprods[thisProd].takeovershowing) {
                return
            }
        }
        if ((sayReloader.totalCount >= sayReloader.maxReloads) || ((typeof sayReloader.lastReloadTime[adzone] != "undefined") && (rightNow - sayReloader.lastReloadTime[adzone] < sayReloader.minReloadTimeMs))) {
            return
        }
        sayReloader.fade(adzone);
        sayReloader.totalCount++;
        sayReloader.lastReloadTime[adzone] = rightNow
    },
    fade: function(adzone) {
        var element = document.getElementById(sayATM.adZones[adzone]);
        if (element == null) {
            return
        }
        if (element.FadeState == null) {
            if (element.style.opacity == null || element.style.opacity == "" || element.style.opacity == "1") {
                element.FadeState = 2
            } else {
                element.FadeState = -2
            }
        }
        if (element.FadeState == 1 || element.FadeState == -1) {
            element.FadeState = element.FadeState == 1 ? -1 : 1;
            element.FadeTimeLeft = sayReloader.TimeToFade - element.FadeTimeLeft
        } else {
            element.FadeState = element.FadeState == 2 ? -1 : 1;
            element.FadeTimeLeft = sayReloader.TimeToFade;
            setTimeout("sayReloader.animateFade(" + new Date().getTime() + ",'" + adzone + "')", 33)
        }
    },
    animateFade: function(lastTick, adzone) {
        var curTick = new Date().getTime();
        var elapsedTicks = curTick - lastTick;
        var element = document.getElementById(sayATM.adZones[adzone]);
        var oldAdDiv;
        if (element.FadeTimeLeft <= elapsedTicks) {
            element.style.opacity = element.FadeState == 1 ? "1" : "0";
            element.style.filter = "alpha(opacity = " + (element.FadeState == 1 ? "100" : "0") + ")";
            element.FadeState = element.FadeState == 1 ? 2 : -2;
            if (element.FadeState == -2) {
                oldAdDiv = document.getElementById(sayATM.adZones[adzone]);
                while (oldAdDiv.childNodes.length) {
                    oldAdDiv.removeChild(oldAdDiv.childNodes[0])
                }
                sayATM.adTemplates[adzone][0](sayATM.adTemplates[adzone][1], adzone);
                setTimeout("sayReloader.fade('" + adzone + "')", 500)
            }
            return
        }
        element.FadeTimeLeft -= elapsedTicks;
        var newOpVal = element.FadeTimeLeft / sayReloader.TimeToFade;
        if (element.FadeState == 1) {
            newOpVal = 1 - newOpVal
        }
        element.style.opacity = newOpVal;
        element.style.filter = "alpha(opacity = " + (newOpVal * 100) + ")";
        setTimeout("sayReloader.animateFade(" + curTick + ",'" + adzone + "')", 33)
    }
};
var handleNoAd = sayATM.handleNoAd;