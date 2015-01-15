/*

Version 2.0.2
Created: 2014-02-03

http://ds.serving-sys.com/BurstingRes/CustomScripts/OAD_Comscore_NoID2.js?adid=[%tp_adid%]&scriptURL=[ENCODED COMSCORE SCRIPT URL]

parameters: scriptURL is the script url that you want appended to the parent of ebBannerDiv as a sibling.

 */

(function () {
	var ebScriptFileName = "OAD_Comscore_NoID2.js";
	if (!(typeof(ebLastQueryUsedArray) != 'undefined' && ebLastQueryUsedArray)) {
		ebLastQueryUsedArray = new Array();

	}
	var ebScriptQuery = function (scriptPath) {
		this.scriptPath = scriptPath;

	};
	ebScriptQuery.prototype = {
		get : function () {
			var lastQuery = '';
			var srcRegex = new RegExp(this.scriptPath.replace('.', '\\.') + '(\\?.*)?$', 'i');
			var scripts = document.getElementsByTagName("script");
			var i;
			for (i = 0; i < scripts.length; i++) {
				var script = scripts[i];
				var scriptUsed = false;
				if (script.src && script.src.match(srcRegex)) {
					var query = script.src.match(/\?([^#]*)(#.*)?/);
					for (var j = ebLastQueryUsedArray.length - 1; j > -1; j--) {
						if (query[1] == ebLastQueryUsedArray[j]) {
							scriptUsed = true;
							break;

						}
					}
					if (scriptUsed == false) {
						lastQuery = !query ? '' : query[1];

					}
				}
			}
			ebLastQueryUsedArray[ebLastQueryUsedArray.length] = lastQuery;
			return lastQuery;

		},
		parse : function () {
			var result = {};
			var query = this.get();
			var components = query.split('&');
			var i;
			for (i = 0; i < components.length; i++) {
				var pair = components[i].split('=');
				var name = pair[0],
				value = pair[1];

				if (!result[name]) {
					result[name] = [];

				}
				// decode
				if (!value) {
					value = 'true';

				} else {
					try {
						value = decodeURIComponent(value);

					} catch (e) {
						value = unescape(value);

					}
				}
				// MacIE way
				var values = result[name];
				values[values.length] = value;

			}
			return result;

		},
		flatten : function () {
			var queries = this.parse();
			var name;
			for (name in queries) {
				queries[name] = queries[name][0];

			}
			return queries;

		},
		toString : function () {
			return 'ebScriptQuery [path=' + this.scriptPath + ']';

		}
	};

	//verify by Ad ID or Flight ID
	try {
		var gEbQueries_ComScore = new ebScriptQuery(ebScriptFileName).flatten();

		var foundViaEBG = false;
		if (window.EBG) {
			// EBG is available, see if we find the desired ad in EBG.ads, if not, try old client
			try {
				var comAdid = gEbQueries_ComScore.adid || -1;
				var comPlid = gEbQueries_ComScore.flightid || -1;
				for (var adIndex in EBG.ads) {
					if (EBG.ads.hasOwnProperty(adIndex)) {
						var ad = EBG.ads[adIndex],
						cfg = ad._adConfig;
						if ((comAdid == cfg.adId) || (comPlid == cfg.placementId)) { //found the target ad
							mmSetupComScore(ad, "ebDiv" + cfg.rnd, gEbQueries_ComScore.scriptURL);
							foundViaEBG = true;
							break;
						}
					}
				}
			} catch (e) {}
		}

		if (!foundViaEBG) {
			// do existing/old client stuff
			if (typeof(gEbEyes) != "undefined") {
				if (gEbQueries_ComScore.adid) {
					for (var i = gEbEyes.length - 1; i > -1; i--) {
						if (gEbEyes[i].adData.nAdID == gEbQueries_ComScore.adid) {
							mmSetupComScore(gEbEyes[i], "ebFloatingAd_" + gEbEyes[i].adData.nIndex + "_" + gEbEyes[i].adData.strRand, gEbQueries_ComScore.scriptURL);
							break;

						}
					}
				}
				if (gEbQueries_ComScore.flightid) {
					for (var i = gEbEyes.length - 1; i > -1; i--) {
						if (gEbEyes[i].adData.nFlightID == gEbQueries_ComScore.flightid) {
							mmSetupComScore(gEbEyes[i], "ebFloatingAd_" + gEbEyes[i].adData.nIndex + "_" + gEbEyes[i].adData.strRand, gEbQueries_ComScore.scriptURL);
							break;

						}
					}
				}
			}
			if (typeof(gEbBanners) != "undefined") {
				if (gEbQueries_ComScore.adid) {
					for (var i = gEbBanners.length - 1; i > -1; i--) {
						if (gEbBanners[i].adData.nAdID == gEbQueries_ComScore.adid) {
							mmSetupComScore(gEbBanners[i], "ebBannerDiv_" + gEbBanners[i].adData.nIndex + "_" + gEbBanners[i].adData.strRand, gEbQueries_ComScore.scriptURL);
							break;

						}
					}
				}
				if (gEbQueries_ComScore.flightid) {
					for (var i = gEbBanners.length - 1; i > -1; i--) {
						if (gEbBanners[i].adData.nFlightID == gEbQueries_ComScore.flightid) {
							mmSetupComScore(gEbBanners[i], "ebBannerDiv_" + gEbBanners[i].adData.nIndex + "_" + gEbBanners[i].adData.strRand, gEbQueries_ComScore.scriptURL);
							break;

						}
					}
				}
			}
			if (typeof(gEbStdBanners) != "undefined") {
				if (gEbQueries_ComScore.adid) {
					for (var i = gEbStdBanners.length - 1; i > -1; i--) {
						if (gEbStdBanners[i].nAdID == gEbQueries_ComScore.adid) {
							if (gEbStdBanners[i].strImgID != '') {
								var id = gEbStdBanners[i].strImgID;

							} else {
								var id = gEbStdBanners[i].strFlashObjID;

							}
							mmSetupComScore(gEbStdBanners[i], id, gEbQueries_ComScore.scriptURL);
							break;

						}
					}
				}
			}
			if (ebO.adConfig.adId == gEbQueries_ComScore.adid) {
				mmSetupComScore(ebO, ebO.phid, gEbQueries_ComScore.scriptURL);

			}
		}
	} catch (e) {}
	function mmSetupComScore(obj, id, url) {
		obj.ebComscoreDummy = setInterval(function () {
				mmSetupComScore2(obj, id, url)
			},
				500);

	}
	function mmSetupComScore2(obj, id, scriptURL) {
		var thisId = id;
		var thisURL = scriptURL;
		var doc,
		div = null;
		if (window.EBG) // do new client stuff
			try {
				var divTemp = EBG.adaptor.getDisplayWin().document.getElementById(id);
				if (divTemp && divTemp.childNodes) {
					//check the placement holder div actually has it's asset present
					for (var i = 0; i < divTemp.childNodes.length; i++) {
						var node = divTemp.childNodes[i];
						var tagName = node.tagName && node.tagName.toLowerCase();
						if (tagName) {
							if (tagName == "img") {
								div = divTemp; //we have a banner asset present now
								break;
							} else if (tagName == "div") {
								var id = node.id || "";
								var polite = !!obj._gotRich;
								if (!polite || id.indexOf("Rich") > -1) {
									div = divTemp; //we have a banner asset present now
									break;
								}
							}
						}
					}
				}
			} catch (e) {}

		if (!div && !window.EBG) { //if didn't find it using EBG, then try old client stuff
			if (typeof(gEbDisplayPage) != 'undefined' && gEbDisplayPage && typeof(gEbDisplayPage.TI) != 'undefined' && gEbDisplayPage.TI) {
				doc = gEbDisplayPage.TI.getDoc();
			} else
				doc = document;
			div = doc.getElementById(id);
			if ((typeof(div) == 'undefined' || !div) && id.indexOf('ebBannerDiv_') > -1) {
				div = doc.getElementById(id.replace('ebBannerDiv_', 'ebBannerImage_'))
			}
		}
		if (typeof(div) != 'undefined' && div) {
			clearInterval(obj.ebComscoreDummy);
			var node = div.parentNode;
			var appendElem = document.createElement("script");
			appendElem.setAttribute("type", "text/javascript");
			appendElem.setAttribute("src", scriptURL);
			node.appendChild(appendElem);

		}
	}
})();
