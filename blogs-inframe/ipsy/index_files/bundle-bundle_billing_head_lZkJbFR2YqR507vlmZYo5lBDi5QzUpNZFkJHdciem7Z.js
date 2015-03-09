/*global window, console, $, LANGUAGES, alert */
/** @namespace Namespace for On Demand implementation codes. */
var qas = qas || {};
/** @namespace Namespace for search configuration and classes. */
qas.search = qas.search || {};
/** @namespace Namespace for language configuration and classes. */
qas.lang = qas.lang || {};
/** @namespace Namespace for utility functions and classes. */
qas.util = qas.util || {};
/** @namespace Namespace for user interface functions and classes. */
qas.ui = qas.ui || {};
/** @class The type of languages available. The value of each type must be the same as the filename of language file. */
qas.lang.Type = {
	/** @static */
	EN_UK : "en-gb",
	/** @static */
	EN_US : "en-us"
};
/** @class The value displayed in the language combobox for each languages. */
qas.lang.DisplayMapping = {
	/** @static */
	EN_UK : "English (UK)",
	/** @static */
	EN_US : "English (US)"
};
/**
 * Cookie name for language
 * @type {string}
 * @default "lang"
 */
qas.lang.COOKIE_NAME = "lang";
/**
 * Language directory
 * @type {string}
 * @default "js/lang/"
 */
qas.lang.LANGUAGE_DIRECTORY = "/js/lang/";
/**
 * Language file extension
 * @type {string}
 * @default ".js"
 */
qas.lang.LANGUAGE_FILE_EXTENSION = ".js";
/**
 * JQuery Selector for language span
 * @type {string}
 * @default "span.translation"
 */
qas.lang.LANGUAGE_SPAN = "span.translation";
/**
 * Default language to be displayed
 * @type {qas.lang.Type}
 * @default qas.lang.Type.EN_UK
 */
qas.lang.DEFAULT_LANGUAGE = qas.lang.Type.EN_US;
/**
 * Default header string to be displayed
 * @type {string}
 * @default JSP
 */
qas.lang.PROGRAMMING_LANGUAGE = "JSP";
/**
 * JQuery Selector for button
 * @type {string}
 * @default "input#translation"
 */
qas.lang.BUTTON = "input.translation";
/**
 * @class Language Controller
 */
qas.lang.LanguageController = function () {
	var me = this;
	var jqLanguageComboBox = null;
	var selectedLang = null;
	var AJAX_TIMEOUT = 15000;
	var jqSelectorContainer = "";

	/**
	 * Get translation
	 * @param {string} untranslated string
	 * @type string
	 */
	var getTranslation = function (untranslatedString) {
		if(untranslatedString.indexOf("LANGUAGES.") === -1)
		{
			return untranslatedString;
		}
		return eval('(' + untranslatedString + ')');
	};
	/**
	 * Callback when language file is downloaded successfully
	 * @type void
	 */
	var ajaxSuccess = function () {
		if($(jqSelectorContainer).length)
		{
			$(jqSelectorContainer).css('display', 'block');
		}
	};
	/**
	 * Initialize function
	 * @param {string} JQuery selector string
	 * @type void
	 */
	this.init = function (jqSelector) {
		jqSelectorContainer = jqSelector;

		selectedLang = $.cookie(qas.lang.COOKIE_NAME);
		if(null === selectedLang) {
			selectedLang = qas.lang.DEFAULT_LANGUAGE;
			$.cookie(qas.lang.COOKIE_NAME, selectedLang);
		}

		if( typeof LANGUAGES === 'undefined') {
			var selectedLanguageFile = qas.lang.LANGUAGE_DIRECTORY + selectedLang + qas.lang.LANGUAGE_FILE_EXTENSION;

			$.ajax({
				url : selectedLanguageFile,
				async : false,
				dataType : 'script',
				success : ajaxSuccess,
				timeout : AJAX_TIMEOUT
			});
		}
	};
	/**
	 * Reload whole document
	 * @type void
	 */
	this.reloadAll = function () {
		me.reload($(document));
	};
	/**
	 * Reload specific container only
	 * @type void
	 */
	this.reload = function (container) {
		if( typeof LANGUAGES === 'undefined') {
			alert("Language file is missing.");
			return;
		}
		container.find(qas.lang.LANGUAGE_SPAN).each(function () {
			$(this).html(getTranslation($(this).text()));
		});
		// Look for button
		container.find(qas.lang.BUTTON).each(function () {
			$(this).val(getTranslation($(this).val()));
		});
	};
	/**
	 * Initialize combo box
	 * @param {JQuery} object
	 * @type void
	 */
	this.initComboBox = function (jqComboBox) {
		jqLanguageComboBox = jqComboBox;
		jqLanguageComboBox.html("");
		$.each(qas.lang.DisplayMapping, function (key, value) {
			jqLanguageComboBox.append("<option value ='" + qas.lang.Type[key] + "'>" + value + "</option>");
		});
		me.init();

		// Workaround for IE 6 where cannot set value immediately
		setTimeout(function () {
			jqLanguageComboBox.val(selectedLang);
			jqLanguageComboBox.css("width", 100);
			jqLanguageComboBox.change(function () {
				me.setLanguage($(this).val());
			});
		}, 50);
	};
	this.initFlag = function (jqFlag) {
        var currentLanguage = $.cookie(qas.lang.COOKIE_NAME);
        var imageUrl = "/images/qas/flags/" + currentLanguage + ".png";
        jqFlag.attr("src", imageUrl);
	};
	this.initLink = function (jqLink, translationId) {
        jqLink.attr("href", getTranslation(translationId));
	};

	/**
	 * Set language
	 * @param {string} language
	 * @type void
	 */
	this.setLanguage = function (lang) {
		$.cookie(qas.lang.COOKIE_NAME, lang);
		// Reload
		location.reload();
	};
};
/** @class The type of search engines. */
qas.search.EngineType = {
	/** @static */
	SINGLELINE : "Singleline",
	/** @static */
	TYPEDOWN : "Typedown",
	/** @static */
	VERIFICATION : "Verification",
	/** @static */
	KEYFINDER : "Keyfinder",
	/** @static */
	INTUITIVE : "Intuitive"
};
/** @class The type of search intensities. */
qas.search.IntensityType = {
	/** @static */
	EXACT : "Exact",
	/** @static */
	CLOSE : "Close",
	/** @static */
	EXTENSIVE : "Extensive"
};
/** @class The type of promptsets. */
qas.search.PromptsetType = {
	/** Oneline @static */
	ONELINE : "OneLine",
	/** @static */
	DEFAULT : "Default",
	/** @static */
	GENERIC : "Generic",
	/** @static */
	OPTIMAL : "Optimal",
	/** @static */
	ALTERNATE : "Alternate",
	/** @static */
	ALTERNATE2 : "Alternate2",
	/** @static */
	ALTERNATE3 : "Alternate3"
};
/** @class Type of DPV statuses. */
qas.search.DPVStatus = {
	/** @static */
	CONFIGURED : "DPVNotConfigured",
	/** @static */
	CONFIRMED : "DPVConfirmed",
	/** @static */
	CONFIRMED_MISSING_SEC : "DPVConfirmedMissingSec",
	/** @static */
	NOT_CONFIRMED : "DPVNotConfirmed",
	/** @static */
	LOCKED : "DPVLocked",
	/** @static */
	SEED_HIT : "DPVSeedHit"
};
/**
 * Default URL of REST API.
 * @type {string}
 * @default "QASCaptureController"
 */
qas.search.DEFAULT_AJAX_URL = "/QASCaptureController";
/**
 * Default AJAX invocation.
 * @type {bool}
 * @default true
 */
qas.search.DEFAULT_AJAX_IS_ASYNC = true;
/**
 * Default datatype. DO NOT CHANGE TO ANYTHING OTHER THAN JSON unless rest controller is changed to support.
 * @type {string}
 * @default "json"
 */
qas.search.DEFAULT_AJAX_DATA_TYPE = "json";
/**
 * Default invoke api timeout. When timeout, errorcallback will be invoked.
 * @type {number}
 * @default 5000
 */
qas.search.DEFAULT_AJAX_TIMEOUT = 15000;
/**
 * Default country ID (datamap ID) for all APIs. Available country ID can be obtained by invoking QASCapture.getAllDataSet()
 * @type {string}
 * @default "GBR";
 */
qas.search.DEFAULT_COUNTRY_ID = "USA";
/**
 * Default layout to use for a specfic country.
 */
qas.search.DEFAULT_COUNTRY_LAYOUT_MAP = {
    "GBR": "Database Layout",
    "USA": "Database Layout",
    "CAN": "Database Layout",
    "AUS": "Database Layout",
    "NZL": "Database Layout",
    "FRP": "Database Layout"
};
/**
 * Default layout for all APIs. Available layouts can be obtained by invoking
 * QASCapture.getAllLayout();
 * @type {string}
 * @default "Database Layout".
 */
qas.search.DEFAULT_LAYOUT = "Database Layout";
/**
 * Default search engine type for all APIs.
 * @type {string}
 * @default qas.search.EngineType.SINGLELINE
 */
qas.search.DEFAULT_ENGINE = qas.search.EngineType.SINGLELINE;
/**
 * Default promptset for all API.
 * @type {string}
 * @default qas.search.PromptsetType.DEFAULT
 */
qas.search.DEFAULT_PROMPTSET_TYPE = qas.search.PromptsetType.DEFAULT;
/**
 * Default flatten flag for all API.
 * @type {boolean}
 * @default false
 */
qas.search.DEFAULT_IS_FLATTEN = false;
/**
 * Default threshold for all API. This is the number of items to be displayed when calling refine() api, usually displayed in picklist.
 * @type {number}
 * @default 25
 */
qas.search.DEFAULT_THRESHOLD = 25;
/**
 * Default timeout when invoking refine() API. This is the timeout when calling refine() api.
 * @type {number}
 * @default 5000
 */
qas.search.DEFAULT_TIMEOUT = 5000;
/**
 * Default search intensity when invoking all API.
 * @type {string}
 * @default qas.search.IntensityType.CLOSE
 */
qas.search.DEFAULT_INTENSITY = qas.search.IntensityType.CLOSE;
/**
 * Default localisation. (Currently not implemented in OnDemand server)
 * @type {string}
 * @default ""
 */
qas.search.DEFAULT_LOCALISATION = "";
/**
 * Default request tag.
 * @type {string}
 * @default ""
 */
qas.search.DEFAULT_REQUEST_TAG = "";
/**
 * Default flag to indicate is formatted address in picklist.
 * @type {boolean}
 * @default false
 */
qas.search.DEFAULT_IS_FORMATTED_ADDRESS_IN_PICKLIST = false;
/**
 * Default country cookie expiry (in days).
 * @default 1
 */
qas.search.DEFAULT_COUNTRY_COOKIE_EXPIRY = 1;
/**
 * Default country cookie key.
 * @default "qas.search.country"
 */
qas.search.DEFAULT_COUNTRY_COOKIE_NAME = "qas.search.country";
/**
 * Default search delimiter.
 * @default "|"
 */
qas.search.DEFAULT_DELIMITER = "|";
/**
 * display any errors encountered in an alert, should only be used for debugging
 * @default true
 */
qas.search.DISPLAY_ERROR = false;
/**
 * Dictionary of available countries. Values are populated by QASCapture object and will be reused once populated.
 */
qas.search.AvailableCountries = null;
qas.search.ALL_COUNTRIES = [{
	"Name" : "Afghanistan",
	"ID" : "AFG"
}, {
	"Name" : "Albania",
	"ID" : "ALB"
}, {
	"Name" : "Algeria",
	"ID" : "DZA"
}, {
	"Name" : "American Samoa",
	"ID" : "ASM"
}, {
	"Name" : "Andorra",
	"ID" : "AND"
}, {
	"Name" : "Angola",
	"ID" : "AGO"
}, {
	"Name" : "Anguilla",
	"ID" : "AIA"
}, {
	"Name" : "Antarctica",
	"ID" : "ATA"
}, {
	"Name" : "Antigua And Barbuda",
	"ID" : "ATG"
}, {
	"Name" : "Argentina",
	"ID" : "ARG"
}, {
	"Name" : "Armenia",
	"ID" : "ARM"
}, {
	"Name" : "Aruba",
	"ID" : "ABW"
}, {
	"Name" : "Australia",
	"ID" : "AUS"
}, {
	"Name" : "Austria",
	"ID" : "AUT"
}, {
	"Name" : "Azerbaijan",
	"ID" : "AZE"
}, {
	"Name" : "Bahamas",
	"ID" : "BHS"
}, {
	"Name" : "Bahrain",
	"ID" : "BHR"
}, {
	"Name" : "Bangladesh",
	"ID" : "BGD"
}, {
	"Name" : "Barbados",
	"ID" : "BRB"
}, {
	"Name" : "Belarus",
	"ID" : "BLR"
}, {
	"Name" : "Belgium",
	"ID" : "BEL"
}, {
	"Name" : "Belize",
	"ID" : "BLZ"
}, {
	"Name" : "Benin",
	"ID" : "BEN"
}, {
	"Name" : "Bermuda",
	"ID" : "BMU"
}, {
	"Name" : "Bhutan",
	"ID" : "BTN"
}, {
	"Name" : "Bolivia",
	"ID" : "BOL"
}, {
	"Name" : "Bosnia And Herzegowina",
	"ID" : "BIH"
}, {
	"Name" : "Botswana",
	"ID" : "BWA"
}, {
	"Name" : "Bouvet Island",
	"ID" : "BVT"
}, {
	"Name" : "Brazil",
	"ID" : "BRA"
}, {
	"Name" : "British Indian Ocean Territory",
	"ID" : "IOT"
}, {
	"Name" : "Brunei Darussalam",
	"ID" : "BRN"
}, {
	"Name" : "Bulgaria",
	"ID" : "BGR"
}, {
	"Name" : "Burkina Faso",
	"ID" : "BFA"
}, {
	"Name" : "Burundi",
	"ID" : "BDI"
}, {
	"Name" : "Cambodia",
	"ID" : "KHM"
}, {
	"Name" : "Cameroon",
	"ID" : "CMR"
}, {
	"Name" : "Canada",
	"ID" : "CAN"
}, {
	"Name" : "Cape Verde",
	"ID" : "CPV"
}, {
	"Name" : "Cayman Islands",
	"ID" : "CYM"
}, {
	"Name" : "Central African Republic",
	"ID" : "CAF"
}, {
	"Name" : "Chad",
	"ID" : "TCD"
}, {
	"Name" : "Chile",
	"ID" : "CHL"
}, {
	"Name" : "China",
	"ID" : "CHN"
}, {
	"Name" : "Christmas Island",
	"ID" : "CXR"
}, {
	"Name" : "Cocos (Keeling) Islands",
	"ID" : "CCK"
}, {
	"Name" : "Colombia",
	"ID" : "COL"
}, {
	"Name" : "Comoros",
	"ID" : "COM"
}, {
	"Name" : "Congo",
	"ID" : "COG"
}, {
	"Name" : "Congo, The Democratic Republic Of The",
	"ID" : "COD"
}, {
	"Name" : "Cook Islands",
	"ID" : "COK"
}, {
	"Name" : "Costa Rica",
	"ID" : "CRI"
}, {
	"Name" : "Cote D'Ivoire",
	"ID" : "CIV"
}, {
	"Name" : "Croatia (Local Name: Hrvatska)",
	"ID" : "HRV"
}, {
	"Name" : "Cuba",
	"ID" : "CUB"
}, {
	"Name" : "Cyprus",
	"ID" : "CYP"
}, {
	"Name" : "Czech Republic",
	"ID" : "CZE"
}, {
	"Name" : "Denmark",
	"ID" : "DNK"
}, {
	"Name" : "Djibouti",
	"ID" : "DJI"
}, {
	"Name" : "Dominica",
	"ID" : "DMA"
}, {
	"Name" : "Dominican Republic",
	"ID" : "DOM"
}, {
	"Name" : "East Timor",
	"ID" : "TMP"
}, {
	"Name" : "Ecuador",
	"ID" : "ECU"
}, {
	"Name" : "Egypt",
	"ID" : "EGY"
}, {
	"Name" : "El Salvador",
	"ID" : "SLV"
}, {
	"Name" : "Equatorial Guinea",
	"ID" : "GNQ"
}, {
	"Name" : "Eritrea",
	"ID" : "ERI"
}, {
	"Name" : "Estonia",
	"ID" : "EST"
}, {
	"Name" : "Ethiopia",
	"ID" : "ETH"
}, {
	"Name" : "Falkland Islands (Malvinas)",
	"ID" : "FLK"
}, {
	"Name" : "Faroe Islands",
	"ID" : "FRO"
}, {
	"Name" : "Fiji",
	"ID" : "FJI"
}, {
	"Name" : "Finland",
	"ID" : "FIN"
}, {
	"Name" : "France",
	"ID" : "FRP"
}, {
	"Name" : "France, Metropolitan",
	"ID" : "FXX"
}, {
	"Name" : "French Guiana",
	"ID" : "GUF"
}, {
	"Name" : "French Polynesia",
	"ID" : "PYF"
}, {
	"Name" : "French Southern Territories",
	"ID" : "ATF"
}, {
	"Name" : "Gabon",
	"ID" : "GAB"
}, {
	"Name" : "Gambia",
	"ID" : "GMB"
}, {
	"Name" : "Georgia",
	"ID" : "GEO"
}, {
	"Name" : "Germany",
	"ID" : "DEU"
}, {
	"Name" : "Ghana",
	"ID" : "GHA"
}, {
	"Name" : "Gibraltar",
	"ID" : "GIB"
}, {
	"Name" : "Greece",
	"ID" : "GRC"
}, {
	"Name" : "Greenland",
	"ID" : "GRL"
}, {
	"Name" : "Grenada",
	"ID" : "GRD"
}, {
	"Name" : "Guadeloupe",
	"ID" : "GLP"
}, {
	"Name" : "Guam",
	"ID" : "GUM"
}, {
	"Name" : "Guatemala",
	"ID" : "GTM"
}, {
	"Name" : "Guinea",
	"ID" : "GIN"
}, {
	"Name" : "Guinea-Bissau",
	"ID" : "GNB"
}, {
	"Name" : "Guyana",
	"ID" : "GUY"
}, {
	"Name" : "Haiti",
	"ID" : "HTI"
}, {
	"Name" : "Heard And McDonald Islands",
	"ID" : "HMD"
}, {
	"Name" : "Holy See (Vatican City State)",
	"ID" : "VAT"
}, {
	"Name" : "Honduras",
	"ID" : "HND"
}, {
	"Name" : "Hong Kong",
	"ID" : "HKG"
}, {
	"Name" : "Hungary",
	"ID" : "HUN"
}, {
	"Name" : "Iceland",
	"ID" : "ISL"
}, {
	"Name" : "India",
	"ID" : "IND"
}, {
	"Name" : "Indonesia",
	"ID" : "IDN"
}, {
	"Name" : "Iran (Islamic Republic Of)",
	"ID" : "IRN"
}, {
	"Name" : "Iraq",
	"ID" : "IRQ"
}, {
	"Name" : "Ireland",
	"ID" : "IRL"
}, {
	"Name" : "Israel",
	"ID" : "ISR"
}, {
	"Name" : "Italy",
	"ID" : "ITA"
}, {
	"Name" : "Jamaica",
	"ID" : "JAM"
}, {
	"Name" : "Japan",
	"ID" : "JPN"
}, {
	"Name" : "Jordan",
	"ID" : "JOR"
}, {
	"Name" : "Kazakhstan",
	"ID" : "KAZ"
}, {
	"Name" : "Kenya",
	"ID" : "KEN"
}, {
	"Name" : "Kiribati",
	"ID" : "KIR"
}, {
	"Name" : "Korea, Democratic People's Republic Of",
	"ID" : "PRK"
}, {
	"Name" : "Korea, Republic Of",
	"ID" : "KOR"
}, {
	"Name" : "Kuwait",
	"ID" : "KWT"
}, {
	"Name" : "Kyrgyzstan",
	"ID" : "KGZ"
}, {
	"Name" : "Lao People's Democratic Republic",
	"ID" : "LAO"
}, {
	"Name" : "Latvia",
	"ID" : "LVA"
}, {
	"Name" : "Lebanon",
	"ID" : "LBN"
}, {
	"Name" : "Lesotho",
	"ID" : "LSO"
}, {
	"Name" : "Liberia",
	"ID" : "LBR"
}, {
	"Name" : "Libyan Arab Jamahiriya",
	"ID" : "LBY"
}, {
	"Name" : "Liechtenstein",
	"ID" : "LIE"
}, {
	"Name" : "Lithuania",
	"ID" : "LTU"
}, {
	"Name" : "Luxembourg",
	"ID" : "LUX"
}, {
	"Name" : "Macau",
	"ID" : "MAC"
}, {
	"Name" : "Macedonia, The Former Yugoslav Republic Of",
	"ID" : "MKD"
}, {
	"Name" : "Madagascar",
	"ID" : "MDG"
}, {
	"Name" : "Malawi",
	"ID" : "MWI"
}, {
	"Name" : "Malaysia",
	"ID" : "MYS"
}, {
	"Name" : "Maldives",
	"ID" : "MDV"
}, {
	"Name" : "Mali",
	"ID" : "MLI"
}, {
	"Name" : "Malta",
	"ID" : "MLT"
}, {
	"Name" : "Marshall Islands",
	"ID" : "MHL"
}, {
	"Name" : "Martinique",
	"ID" : "MTQ"
}, {
	"Name" : "Mauritania",
	"ID" : "MRT"
}, {
	"Name" : "Mauritius",
	"ID" : "MUS"
}, {
	"Name" : "Mayotte",
	"ID" : "MYT"
}, {
	"Name" : "Mexico",
	"ID" : "MEX"
}, {
	"Name" : "Micronesia, Federated States Of",
	"ID" : "FSM"
}, {
	"Name" : "Moldova, Republic Of",
	"ID" : "MDA"
}, {
	"Name" : "Monaco",
	"ID" : "MCO"
}, {
	"Name" : "Mongolia",
	"ID" : "MNG"
}, {
	"Name" : "Montserrat",
	"ID" : "MSR"
}, {
	"Name" : "Morocco",
	"ID" : "MAR"
}, {
	"Name" : "Mozambique",
	"ID" : "MOZ"
}, {
	"Name" : "Myanmar",
	"ID" : "MMR"
}, {
	"Name" : "Namibia",
	"ID" : "NAM"
}, {
	"Name" : "Nauru",
	"ID" : "NRU"
}, {
	"Name" : "Nepal",
	"ID" : "NPL"
}, {
	"Name" : "Netherlands",
	"ID" : "NLD"
}, {
	"Name" : "Netherlands Antilles",
	"ID" : "ANT"
}, {
	"Name" : "New Caledonia",
	"ID" : "NCL"
}, {
	"Name" : "New Zealand",
	"ID" : "NZL"
}, {
	"Name" : "Nicaragua",
	"ID" : "NIC"
}, {
	"Name" : "Niger",
	"ID" : "NER"
}, {
	"Name" : "Nigeria",
	"ID" : "NGA"
}, {
	"Name" : "Niue",
	"ID" : "NIU"
}, {
	"Name" : "Norfolk Island",
	"ID" : "NFK"
}, {
	"Name" : "Northern Mariana Islands",
	"ID" : "MNP"
}, {
	"Name" : "Norway",
	"ID" : "NOR"
}, {
	"Name" : "Oman",
	"ID" : "OMN"
}, {
	"Name" : "Pakistan",
	"ID" : "PAK"
}, {
	"Name" : "Palau",
	"ID" : "PLW"
}, {
	"Name" : "Palestinian Territory, Occupied",
	"ID" : "P>P"
}, {
	"Name" : "Panama",
	"ID" : "PAN"
}, {
	"Name" : "Papua New Guinea",
	"ID" : "PNG"
}, {
	"Name" : "Paraguay",
	"ID" : "PRY"
}, {
	"Name" : "Peru",
	"ID" : "PER"
}, {
	"Name" : "Philippines",
	"ID" : "PHL"
}, {
	"Name" : "Pitcairn",
	"ID" : "PCN"
}, {
	"Name" : "Poland",
	"ID" : "POL"
}, {
	"Name" : "Portugal",
	"ID" : "PRT"
}, {
	"Name" : "Puerto Rico",
	"ID" : "PRI"
}, {
	"Name" : "Qatar",
	"ID" : "QAT"
}, {
	"Name" : "Reunion",
	"ID" : "REU"
}, {
	"Name" : "Romania",
	"ID" : "ROM"
}, {
	"Name" : "Russian Federation",
	"ID" : "RUS"
}, {
	"Name" : "Rwanda",
	"ID" : "RWA"
}, {
	"Name" : "Saint Kitts And Nevis",
	"ID" : "KNA"
}, {
	"Name" : "Saint Lucia",
	"ID" : "LCA"
}, {
	"Name" : "Saint Vincent And The Grenadines",
	"ID" : "VCT"
}, {
	"Name" : "Samoa",
	"ID" : "WSM"
}, {
	"Name" : "San Marino",
	"ID" : "SMR"
}, {
	"Name" : "Sao Tome And Principe",
	"ID" : "STP"
}, {
	"Name" : "Saudi Arabia",
	"ID" : "SAU"
}, {
	"Name" : "Senegal",
	"ID" : "SEN"
}, {
	"Name" : "Seychelles",
	"ID" : "SYC"
}, {
	"Name" : "Sierra Leone",
	"ID" : "SLE"
}, {
	"Name" : "Singapore",
	"ID" : "SGF"
}, {
	"Name" : "Slovakia (Slovak Republic)",
	"ID" : "SVK"
}, {
	"Name" : "Slovenia",
	"ID" : "SVN"
}, {
	"Name" : "Solomon Islands",
	"ID" : "SLB"
}, {
	"Name" : "Somalia",
	"ID" : "SOM"
}, {
	"Name" : "South Africa",
	"ID" : "ZAF"
}, {
	"Name" : "South Georgia And The South Sandwich Islands",
	"ID" : "SGS"
}, {
	"Name" : "Spain",
	"ID" : "ESP"
}, {
	"Name" : "Sri Lanka",
	"ID" : "LKA"
}, {
	"Name" : "St. Helena",
	"ID" : "SHN"
}, {
	"Name" : "St. Pierre And Miquelon",
	"ID" : "SPM"
}, {
	"Name" : "Sudan",
	"ID" : "SDN"
}, {
	"Name" : "Suriname",
	"ID" : "SUR"
}, {
	"Name" : "Svalbard And Jan Mayen Islands",
	"ID" : "SJM"
}, {
	"Name" : "Swaziland",
	"ID" : "SWZ"
}, {
	"Name" : "Sweden",
	"ID" : "SWE"
}, {
	"Name" : "Switzerland",
	"ID" : "CHE"
}, {
	"Name" : "Syrian Arab Republic",
	"ID" : "SYR"
}, {
	"Name" : "Taiwan, Province Of China",
	"ID" : "TWN"
}, {
	"Name" : "Tajikistan",
	"ID" : "TJK"
}, {
	"Name" : "Tanzania, United Republic Of",
	"ID" : "TZA"
}, {
	"Name" : "Thailand",
	"ID" : "THA"
}, {
	"Name" : "Togo",
	"ID" : "TGO"
}, {
	"Name" : "Tokelau",
	"ID" : "TKL"
}, {
	"Name" : "Tonga",
	"ID" : "TON"
}, {
	"Name" : "Trinidad And Tobago",
	"ID" : "TTO"
}, {
	"Name" : "Tunisia",
	"ID" : "TUN"
}, {
	"Name" : "Turkey",
	"ID" : "TUR"
}, {
	"Name" : "Turkmenistan",
	"ID" : "TKM"
}, {
	"Name" : "Turks And Caicos Islands",
	"ID" : "TCA"
}, {
	"Name" : "Tuvalu",
	"ID" : "TUV"
}, {
	"Name" : "Uganda",
	"ID" : "UGA"
}, {
	"Name" : "Ukraine",
	"ID" : "UKR"
}, {
	"Name" : "United Arab Emirates",
	"ID" : "ARE"
}, {
	"Name" : "United Kingdom",
	"ID" : "GBR"
}, {
	"Name" : "United States",
	"ID" : "USA"
}, {
	"Name" : "United States Minor Outlying Islands",
	"ID" : "UMI"
}, {
	"Name" : "Uruguay",
	"ID" : "URY"
}, {
	"Name" : "Uzbekistan",
	"ID" : "UZB"
}, {
	"Name" : "Vanuatu",
	"ID" : "VUT"
}, {
	"Name" : "Venezuela",
	"ID" : "VEN"
}, {
	"Name" : "Vietnam",
	"ID" : "VNM"
}, {
	"Name" : "Virgin Islands (British)",
	"ID" : "VGB"
}, {
	"Name" : "Virgin Islands (U.S.)",
	"ID" : "VIR"
}, {
	"Name" : "Wallis And Futuna Islands",
	"ID" : "WLF"
}, {
	"Name" : "Western Sahara",
	"ID" : "ESH"
}, {
	"Name" : "Yemen",
	"ID" : "YEM"
}, {
	"Name" : "Yugoslavia",
	"ID" : "YUG"
}, {
	"Name" : "Zambia",
	"ID" : "ZMB"
}, {
	"Name" : "Zimbabwe",
	"ID" : "ZWE"
}];
/**
 * Checks if an object is an element in the array.
 * http://stackoverflow.com/questions/237104/javascript-array-containsobj
 */
qas.util.checkIsInArray = function (arr, obj) {
	var i = 0, iLen = arr.length;
	// http://stackoverflow.com/questions/3000276/the-unexpected-error-in-jslint
	for(; i < iLen; i += 1) {
		if(arr[i] === obj) {
			return true;
		}
	}
	return false;
};
/**
 * Log to the window console if available.
 */
qas.util.log = function () {
	if(window.console) {
		window.console.log(arguments);
	}
};
// ascending order
qas.util.CompareById = function (x, y) {
	return x.ID - y.ID;
};
qas.util.CompareByName = function (x, y) {
	return ((x.Name === y.Name) ? 0 : ((x.Name > y.Name) ? 1 : -1 ));
};
qas.ui.Datamap = function (captureObj) {
	var capture = captureObj || new qas.search.QASCapture();
	var defaultCountries = qas.search.ALL_COUNTRIES;

	var getCountryInDefault = function () {
		return qas.search.DEFAULT_COUNTRY_ID;
	};
	var getCountryInCookie = function (countryControlId) {
		var cookieName = qas.search.DEFAULT_COUNTRY_COOKIE_NAME;
		if(countryControlId !== null && countryControlId !== "") {
			cookieName = cookieName + "#" + countryControlId;
		}
		return $.cookie(cookieName);
	};
	var setCountryInCookie = function (countryId, countryControlId) {
		var cookieName = qas.search.DEFAULT_COUNTRY_COOKIE_NAME;
		if(countryControlId !== null && countryControlId !== "") {
			cookieName = cookieName + "#" + countryControlId;
		}
		$.cookie(cookieName, countryId, qas.search.DEFAULT_COUNTRY_COOKIE_EXPIRY);
	};
	var getFirstCountry = function (availableCountries, defaultCountries) {
		// the first country to be returned
		var firstCountry = null;
		// find the first country in available countries array
		var i = 0, iLen = availableCountries.length;
		for(; i < iLen; i++) {
			// if already found the first country, stop searching
			if(firstCountry !== null) {
				break;
			}
			firstCountry = availableCountries[i].ID;
		}
		// find the first country in default countries array
		var j = 0, jLen = defaultCountries.length;
		for(; j < jLen; j++) {
			// if already found the first country, stop searching
			if(firstCountry !== null) {
				break;
			}
			firstCountry = defaultCountries[i].ID;
		}
		return firstCountry;
	};
	var checkIsInCountryList = function (countryId, countries) {
		var isInCountryList = false;
		if( typeof countries !== "undefined" && countries !== null) {
			var i = 0, iLen = countries.length;
			for(; i < iLen; i++) {
				if(countries[i].ID === countryId) {
					isInCountryList = true;
				}
			}
		}
		return isInCountryList;
	};
	var getCountryName = function (countryId, countries) {
	    var countryName = null;
        if( typeof countries !== "undefined" && countries !== null) {
            var i = 0, iLen = countries.length;
            for(; i < iLen; i++) {
                if(countries[i].ID === countryId) {
                    countryName = countries[i].Name
                    break;
                }
            }
        }
        return countryName;
	};
	var autoSelectCountry = function (countryControl, availableCountries) {
		var jqCountryControl = $(countryControl);
		// get cookie
		var selectedCountry = getCountryInCookie(jqCountryControl.attr("id"));
		// if cookie country is empty, get default and set cookie
		if(selectedCountry === null || (!checkIsInCountryList(selectedCountry, availableCountries) && !checkIsInCountryList(selectedCountry, defaultCountries))) {
			selectedCountry = getCountryInDefault();
			setCountryInCookie(selectedCountry, jqCountryControl.attr("id"));
		}
		// if selected country not in the list of available countries, select the first available country
		if(!checkIsInCountryList(selectedCountry, availableCountries) && !checkIsInCountryList(selectedCountry, defaultCountries)) {
			selectedCountry = getFirstCountry(availableCountries, defaultCountries);
		}
		// try to select (if fail, do nothing)
		if(selectedCountry !== null) {
			jqCountryControl.val(selectedCountry);
			capture.setCountryId(selectedCountry);
            capture.setCountryName(getCountryName(selectedCountry));
		}
	};
	var populateCountryControlWithData = function (countryControl, availableCountries, defaultCountries) {
		var jqCountryControl = $(countryControl);
		jqCountryControl.empty();
		// populate values from dataset
		if(null !== availableCountries) {
			// Sort the array
			availableCountries.sort(qas.util.CompareByName);
			// Datamap available
			jqCountryControl.append("<option value='' class='heading'>-- " + LANGUAGES.ADDRESS_CAPTURE.DatamapsAvailable + " --</option>");
			$.each(availableCountries, function (key, value) {
				jqCountryControl.append("<option value ='" + value.ID + "'>" + value.Name + "</option>");
			});
			// Other datamap
			jqCountryControl.append("<option value='' class='heading'>-- " + LANGUAGES.ADDRESS_CAPTURE.Other + " --</option>");
		}
		// Add datamap which is not duplicated
		$.each(defaultCountries, function (key, value) {
			var duplicate = false;

			// if there's available countries, the default country should not already been added in the available countries
			if(null !== availableCountries) {
				var i = 0;
				var iLen = availableCountries.length;
				for(; i < iLen; i++) {
					if(value.ID === availableCountries[i].ID || value.Name === availableCountries[i].Name) {
						duplicate = true;
						break;
					}
				}
			}

			if(!duplicate) {
				jqCountryControl.append("<option value ='" + value.ID + "'>" + value.Name + "</option>");
			}
		});
	};
	var autoselectCountryControl = function (countryControl, isControlSpecific, availableCountries, defaultCountries) {
		var jqCountryControl = $(countryControl);
		var controlId = isControlSpecific ? jqCountryControl.attr("id") : "";
		var selectedCountry = getCountryInCookie(controlId);
		// if cookie country is empty, get default and set cookie
		if(selectedCountry === null || (!checkIsInCountryList(selectedCountry, availableCountries) && !checkIsInCountryList(selectedCountry, defaultCountries))) {
			selectedCountry = getCountryInDefault();
			setCountryInCookie(selectedCountry, controlId);
		}
		// if selected country not in the list of available countries, select the first available country
		if(!checkIsInCountryList(selectedCountry, availableCountries) && !checkIsInCountryList(selectedCountry, defaultCountries)) {
			selectedCountry = getFirstCountry(availableCountries, defaultCountries);
		}

		// get selected country from available countries
		var countryName = getCountryName(selectedCountry, availableCountries);
        if(countryName === null) {
            countryName = getCountryName(selectedCountry, defaultCountries);
        }

		// try to select (if fail, do nothing)
		if(selectedCountry !== null) {
        	// workaround to handle IE behaviour
        	setTimeout(function () {
			    jqCountryControl.val(selectedCountry);
        	}, 100);
			capture.setCountryId(selectedCountry);
			capture.setCountryName(countryName);
		}
	};
	var bindCountryControlToCookie = function (countryControl, isControlSpecific) {
		// changes to control will change the cookie (based control specific or not)
		var context = {
			"isControlSpecific" : isControlSpecific
		};
		$(countryControl).bind('change', context, function (e) {
			var selectedCountry = $(this).val();
			var cookieId = e.data.isControlSpecific ? $(this).attr("id") : "";
			setCountryInCookie(selectedCountry, cookieId);
		});
	};
	/**
	 * Changes to country control will also change capture object's country property.
	 */
	this.bindCountryControlToCaptureObject = function (countryControl) {
		// context
		var context = {
			"capture" : capture
		};
		// changes to control selection will change the address capture object
		$(countryControl).bind('change', context, function (e) {
			var selectedCountry = $(this).val();
			e.data.capture.setCountryId(selectedCountry);

			var countryName = getCountryName(selectedCountry, capture.getAvailableCountries());
	        if(countryName === null) {
	            countryName = getCountryName(selectedCountry, qas.search.ALL_COUNTRIES);
	        }
			e.data.capture.setCountryName(countryName);
		});
	};
	/**
	 * Populate control with available and default countries.
	 * The first selected value is, by priority 1) cookie 2) default 3) first available 4) first default.
	 * Changes to control will also change the cookie (cookie either general for all controls or specific to a control).
	 */
	this.populateCountryControl = function (countryControl, isControlSpecific, successCallback, errorCallback) {
		isControlSpecific = (isControlSpecific === null) ? false : isControlSpecific;
		var jqCountryControl = $(countryControl);
		// hide the countrol before getting data from server
		jqCountryControl.hide();
		// create a context so the callbacks can reference to the parameters in this function
		var context = {
			"countryControl" : jqCountryControl,
			"successCallback" : successCallback,
			"errorCallback" : errorCallback,
			"defaultCountries" : defaultCountries,
			"isControlSpecific" : isControlSpecific,
			"capture" : capture
		};
		// get available countries
		var availableCountries = capture.getAvailableCountries();
		// if null, get available countries from server
		if(availableCountries === null) {
			//set success callback
			capture.setSuccessCallback($.proxy(function (result) {
				// remove all callbacks
				this.capture.clearCallbacks();
				for(var i = 0; i < this.countryControl.length; i++) {
					var control = this.countryControl[i];
					// result is available countries. populate to control
					populateCountryControlWithData(control, result, this.defaultCountries);
					// autoselect the country using cookie
					autoselectCountryControl(control, this.isControlSpecific, result, this.defaultCountries);
					// bind change event to control
					bindCountryControlToCookie(control, this.isControlSpecific);
                    // show control
                    $(control).show();
				}
				// invoke successor callback
				if( typeof this.successCallback === "function") {
					this.successCallback(result);
				}
			}, context));
			// set fail callback. if fail to get data, populate will only default countries
			capture.setErrorCallback($.proxy(function (json, text, msg) {
				var result = null;
				// remove all callbacks
				this.capture.clearCallbacks();
				for(var i = 0; i < this.countryControl.length; i++) {
					var control = this.countryControl[i];
					// result is available countries. populate to control
					populateCountryControlWithData(control, result, this.defaultCountries);
					// autoselect the country using cookie
					autoselectCountryControl(control, this.isControlSpecific, null, this.defaultCountries);
					// bind change event to control
					bindCountryControlToCookie(control, this.isControlSpecific);
                    // show control
                    $(control).show();
				}
				// invoke error callback
				if( typeof this.errorCallback === 'function') {
					this.errorCallback(json, text, msg);
				}
			}, context));
			// get available countries from server
			capture.getAllDataset();
		} else {
			// else if there's dataset, populate immediately using data
			// result is available countries
			for(var i = 0; i < jqCountryControl.length; i++) {
				var control = jqCountryControl[i];
				populateCountryControlWithData(jqCountryControl, availableCountries, defaultCountries);
				// autoselect the country using cookie
				autoselectCountryControl(control, isControlSpecific, availableCountries, defaultCountries);
				// bind change event to control
				bindCountryControlToCookie(jqCountryControl, isControlSpecific);
                // show control
                $(control).show();
				// invoke successor callback
				if( typeof successCallback === 'function') {
					successCallback(availableCountries);
				}
			}
		}
	};
};
/**
 * @class Class for address searching.
 */
qas.search.QASCapture = function () {
	// local reference of this object
	var self = this;
	/**
	 * Ajax success callback function.
	 * @type function
	 * @default jQuery.noop()
	 */
	var ajaxSuccessCallback = function () {
	};
	/**
	 * Ajax error callback function.
	 * @type function
	 * @default jQuery.noop()
	 */
	var ajaxErrorCallback = function () {
	};
	/**
	 * Ajax setting to change URL of controller. Example is "Controller.aspx" for ASP.NET.
	 * @type string
	 * @default qas.search.DEFAULT_AJAX_URL
	 */
	var ajaxUrl = qas.search.DEFAULT_AJAX_URL;
	/**
	 * Ajax setting of invoking asynchronously / synchronously.
	 *
	 * @public
	 * @type boolean
	 * @default qas.config.Ajax.ajaxIsAsync;
	 */
	var ajaxIsAsync = qas.search.DEFAULT_AJAX_IS_ASYNC;
	/**
	 * Ajax setting of return data type.
	 *
	 * @public
	 * @type string
	 * @default qas.config.Ajax.ajaxDataType;
	 */
	var ajaxDataType = qas.search.DEFAULT_AJAX_DATA_TYPE;
	/**
	 * Ajax setting of invocation timeout.
	 *
	 * @public
	 * @type int
	 * @default qas.config.Ajax.ajaxTimeout;
	 */
	var ajaxTimeout = qas.search.DEFAULT_AJAX_TIMEOUT;
	/**
	 * Search setting to select country or datamap. (defaults automatically loaded
	 * from qas.config.Search object)
	 *
	 * @public
	 * @type string
	 * @default qas.config.Search.countryId
	 */
	var countryId = qas.search.DEFAULT_COUNTRY_ID;
    /**
     * Country name. Default is null.
     *
     * @public
     * @type string
     * @default qas.config.Search.countryId
     */
	var countryName = null;
	/**
	 * Search setting to select flatten mode. (defaults automatically loaded from
	 * qas.config.Search object)
	 *
	 * @public
	 * @type boolean
	 * @default qas.config.Search.isFlatten
	 */
	var flatten = qas.search.DEFAULT_IS_FLATTEN;
	/**
	 * Search setting to change intensity. (defaults automatically loaded from
	 * qas.config.Search object)
	 *
	 * @public
	 * @type qas.SearchIntensity
	 * @default qas.config.Search.intensity
	 */
	var intensity = qas.search.DEFAULT_INTENSITY;
	/**
	 * Search setting to change promptset. (defaults automatically loaded from
	 * qas.config.Search object)
	 *
	 * @public
	 * @type qas.SearchPromptSet
	 * @default qas.config.Search.promptset
	 */
	var promptset = qas.search.DEFAULT_PROMPTSET_TYPE;
	/**
	 * Search setting to change threshold. (defaults automatically loaded from
	 * qas.config.Search object)
	 *
	 * @public
	 * @type int
	 * @default qas.config.Search.threshold.
	 */
	var threshold = qas.search.DEFAULT_THRESHOLD;
	/**
	 * Search setting to change timeout during "Refine". (defaults automatically
	 * loaded from qas. object)
	 *
	 * @public
	 * @type int
	 * @default qas.config.Search.timeout.
	 */
	var timeout = qas.search.DEFAULT_TIMEOUT;
	/**
	 * Search setting to change engine type. (defaults automatically loaded from
	 * qas.config.Search object)
	 *
	 * @public
	 * @type qas.SearchEngineType
	 * @default qas.config.Search.engineType.
	 */
	var engineType = qas.search.DEFAULT_ENGINE;
	/**
	 * Search setting to change layout.
	 *
	 * @public
	 * @type string
	 * @default qas.config.Search.layout
	 */
	var layout = qas.search.DEFAULT_LAYOUT;
	/**
	 * Search setting to change localisation. Currently not implemented in
	 * server-side. (defaults automatically loaded from qas.config.Search object)
	 *
	 * @public
	 * @type string
	 * @default qas.config.Search.localisation
	 */
	var localisation = qas.search.DEFAULT_LOCALISATION;
	/**
	 * qas.config.Search object)
	 *
	 * @public
	 * @type string
	 * @default qas.config.Search.requestTag
	 */
	var requestTag = qas.search.DEFAULT_REQUEST_TAG;

	var formattedAddressInPickList = qas.search.DEFAULT_IS_FORMATTED_ADDRESS_IN_PICKLIST;

	var restMethods = {
		Search : "Search",
		CanSearch : "CanSearch",
		Refine : "Refine",
		GetAddress : "GetAddress",
		GetData : "GetData",
		GetLicenseInfo : "GetLicenseInfo",
		GetSystemInfo : "GetSystemInfo",
		GetDataMapDetail : "GetDataMapDetail",
		GetExampleAddresses : "GetExampleAddresses",
		GetLayouts : "GetLayouts",
		GetPromptset : "GetPromptSet"
	};

	// required and non-nullable params
	var restParamsNonNullable = [];
	restParamsNonNullable[restMethods.Search] = [];
	restParamsNonNullable[restMethods.CanSearch] = [];
	restParamsNonNullable[restMethods.Refine] = [];
	restParamsNonNullable[restMethods.GetAddress] = [];
	restParamsNonNullable[restMethods.GetData] = [];
	restParamsNonNullable[restMethods.GetLicenseInfo] = [];
	restParamsNonNullable[restMethods.GetSystemInfo] = [];
	restParamsNonNullable[restMethods.GetDataMapDetail] = [];
	restParamsNonNullable[restMethods.GetExampleAddresses] = [];
	restParamsNonNullable[restMethods.GetLayouts] = [];
	restParamsNonNullable[restMethods.GetPromptset] = [];

	/**
	 * Check for non nullable params, and if not valid param, return array of invalid params.
	 */
	var getNonNullableParams = function (restParamArr, nullableParamArr) {
		var i = 0;
		var iLen = nullableParamArr.length;
		var isInArray = false;
		var paramName = '';
		var invalidParams = [];

		for(; i < iLen; i++) {
			paramName = nullableParamArr[i];
			isInArray = qas.util.checkIsInArray(restParamArr, paramName);
			if(!isInArray) {
				invalidParams.push(paramName);
			}
		}
		return invalidParams;
	};
	var validateParams = function (currRestMethod, ajaxParams) {
		var invalidParams = getNonNullableParams(ajaxParams, restParamsNonNullable[currRestMethod]);
		if(invalidParams.length > 0) {
			ajaxErrorCallback();
		}
	};
	/**
	 * Invoke AJAX API based on the settings configured in the class.
	 * @param {object}
	 *          ajaxParams Required. Dictionary object. Contains all parameters
	 *          for AJAX invocation.
	 * @type void
	 */
	var invokeAjax = function (ajaxParams, internalSuccessCallback, internalErrorCallback) {
		// validate parameters
		validateParams(ajaxParams.method, ajaxParams);
		// context of success / error callback
		var context = {
			"ajaxSuccessCallback" : ajaxSuccessCallback,
			"ajaxErrorCallback" : ajaxErrorCallback,
			"internalSuccessCallback" : internalSuccessCallback,
			"internalErrorCallback" : internalErrorCallback
		};
		// invoke ajax method
		$.ajax({
			type : "POST",
			cache : false,
			url : ajaxUrl,
			async : ajaxIsAsync,
			dataType : ajaxDataType,
      contentType : "application/x-www-form-urlencoded",
			timeout : ajaxTimeout,
			data : ajaxParams,
      beforeSend: function(x) {
        if (x && x.overrideMimeType) {
          x.overrideMimeType("application/j-son;charset=UTF-8");
        }
      },
			success : $.proxy(function (json) {
				// if return json does not have error, invoke success callback
				if(json.error) {

					if( typeof this.internalErrorCallback === 'function') {
						this.internalErrorCallback(json.error, json.error.message, null);
					}
					if( typeof this.ajaxErrorCallback === 'function') {
						this.ajaxErrorCallback(json.error, json.error.message, null);
					}
				} else if(!(json.result)) {
					// else if no error and no result
					if( typeof this.internalErrorCallback === 'function') {
						this.internalErrorCallback(json.error, json.error.message, null);
					}
					if( typeof this.ajaxErrorCallback === 'function') {
						this.ajaxErrorCallback(json.error, "JSON response missing result key.", null);
					}
				} else {
					// else, no error, invoke success callback
					if( typeof this.internalSuccessCallback === 'function') {
						this.internalSuccessCallback(json.result);
					}

					if( typeof this.ajaxSuccessCallback === 'function') {
						this.ajaxSuccessCallback(json.result);
					}
				}
			}, context),
			error : $.proxy(function (jqXHR, textStatus, errorThrown) {
				if( typeof this.internalErrorCallback === 'function') {
					this.internalErrorCallback({}, textStatus, errorThrown);
				}

				if( typeof this.ajaxErrorCallback === 'function') {
					this.ajaxErrorCallback({}, textStatus, errorThrown);
				}
			}, context)
		});
	};
	/**
	 * Update the layout based on country ID.
	 */
	var updateLayout = function () {
		if( typeof qas.search.DEFAULT_COUNTRY_LAYOUT_MAP[countryId] !== "undefined") {
			layout = qas.search.DEFAULT_COUNTRY_LAYOUT_MAP[countryId];
		} else {
			layout = qas.search.DEFAULT_LAYOUT;
		}
	};
	this.checkIsAvailableCountry = function (countryId) {
		var isAvailableCountry = false;

		if(qas.search.AvailableCountries !== null) {
			var i = 0, iLen = qas.search.AvailableCountries.length;
			for(; i < iLen; i++) {
				if(qas.search.AvailableCountries[i].ID === countryId) {
					isAvailableCountry = true;
				}
			}
		}

		return isAvailableCountry;
	};
	this.getAvailableCountries = function () {
		return qas.search.AvailableCountries;
	};
	this.clearCallbacks = function () {
		ajaxSuccessCallback = $.noop;
		ajaxErrorCallback = $.noop;
	};
	this.getLayout = function () {
		return layout;
	};
	this.getRequestTag = function () {
		return requestTag;
	};
	this.getCountryId = function () {
		return countryId;
	};
	this.getCountryName = function () {
	    return countryName;
	};
	this.getPromptsetType = function () {
		return promptset;
	};
	this.getLocalisation = function () {
		return localisation;
	};
	this.getTimeout = function () {
		return timeout;
	};
	this.getThreshold = function () {
		return threshold;
	};
	this.getIntensity = function () {
		return intensity;
	};
	this.getIsFlatten = function () {
		return flatten;
	};
	this.getEngine = function () {
		return engineType;
	};
	this.getIsFormattedAddressInPickList = function () {
		return formattedAddressInPickList;
	};
	/**
	 * Set request tag, used in tagging search performed and saved in On Demand server.
	 * @type string
	 */
	this.setRequestTag = function (paramRequestTag) {
		requestTag = paramRequestTag;
	};
	/**
	 * Set country id to be used in subsequent searches.
	 * @type string
	 */
	this.setCountryId = function (paramCountryId) {
		countryId = paramCountryId;
		// update the layout after changes on country ID.
		updateLayout();
	};

    this.setCountryName = function (paramCountryName) {
        countryName = paramCountryName;
    };
	/**
	 * Set promptset to be used in subsequent searches.
	 * @type qas.const.PROMPTSET_TYPE
	 */
	this.setPromptsetType = function (paramPromptsetType) {
		promptset = paramPromptsetType;
	};
	/**
	 * Set localisation, used in subsequent searches.
	 * @type string
	 */
	this.setLocalisation = function (paramLocalisation) {
		localisation = paramLocalisation;
	};
	/**
	 * Set timeout to be used when refining search.
	 * @type number
	 */
	this.setTimeout = function (paramTimeout) {
		timeout = paramTimeout;
	};
	/**
	 * Set threshold to be used when refining search.
	 * @type number
	 */
	this.setThreshold = function (paramThreshold) {
		threshold = paramThreshold;
	};
	/**
	 * Set intensity to be used in subsequent searches.
	 * @type qas.const.INTENSITY
	 */
	this.setIntensity = function (paramIntensity) {
		intensity = paramIntensity;
	};
	/**
	 * Set flag to indicate intensity to be used in subsequent searches.
	 * @type boolean
	 */
	this.setIsFlatten = function (paramIsFlatten) {
		flatten = paramIsFlatten;
	};
	/**
	 * Set engine type to be used in subsequent searches.
	 * @type qas.const.ENGINE
	 */
	this.setEngine = function (paramEngine) {
		engineType = paramEngine;
	};
	/**
	 * Set flag to indicate is formatted address in picklist
	 * @type boolean
	 */
	this.setIsFormattedAddressInPickList = function (paramIsFormattedAddressInPicklist) {
		formattedAddressInPickList = paramIsFormattedAddressInPicklist;
	};
	/**
	 * Set function to be invoked when success.
	 * @type boolean
	 */
	this.setSuccessCallback = function (callbackFunction) {
		ajaxSuccessCallback = callbackFunction;
	};
	/**
	 * Set function to be invoked when error.
	 * @type boolean
	 */
	this.setErrorCallback = function (callbackFunction) {
		ajaxErrorCallback = callbackFunction;
	};
	/**
	 * Perform a search.
	 *
	 * @param {string}
	 *          countryId Country ID to use.
	 * @param {string[]}
	 *          searchStrArr Search string array. When only one line needed, a
	 *          single element array should be passed as parameter.
	 * @param {string}
	 *          promptset Promptset name to use. Configured in OnDemand server.
	 * @param {string}
	 *          layout Layout name to use. Configured in OnDemand server.
	 * @param {string}
	 *          requestTag Request Tag. Used to text to tag a search for improving
	 *          search history management.
	 * @type void
	 */
	this.search = function (searchText) {
		var ajaxParams = {
			"method" : restMethods.Search,
			"search" : searchText,
			"countryId" : self.getCountryId(),
			"engine" : self.getEngine(),
			"flatten" : self.getIsFlatten(),
			"intensity" : self.getIntensity(),
			"promptset" : self.getPromptsetType(),
			"threshold" : self.getThreshold(),
			"timeout" : self.getTimeout(),
			"layout" : self.getLayout(),
			"formattedAddressInPicklist" : self.getIsFormattedAddressInPickList(),
			"requestTag" : self.getRequestTag(),
			"localisation" : self.getLocalisation()
		};
		invokeAjax(ajaxParams);
	};
	/**
	 * Refine a search.
	 *
	 * @param {string}
	 *          moniker Required. Country ID to use.
	 * @param {string}
	 *          refinementText Optional. Text used for refinement. If step-in,
	 *          refinement text is not needed.
	 * @type void
	 */
	this.refine = function (moniker, refinementText) {
		var ajaxParams = {
			"method" : restMethods.Refine,
			"moniker" : moniker,
			"refinement" : refinementText,
			"layout" : self.getLayout(),
			"formattedAddressInPicklist" : self.getIsFormattedAddressInPickList(),
			"threshold" : self.getThreshold(),
			"timeout" : self.getTimeout(),
			"requestTag" : self.getRequestTag(),
			"localisation" : self.getLocalisation()
		};
		invokeAjax(ajaxParams);
	};
	/**
	 * Get formatted address.
	 *
	 * @param {string}
	 *          moniker Required.
	 * @param {string}
	 *          layout Required.
	 * @type void
	 */
	this.getFormattedAddress = function (moniker) {
		var ajaxParams = {
			"method" : restMethods.GetAddress,
			"moniker" : moniker,
			"layout" : self.getLayout(),
			"requestTag" : self.getRequestTag(),
			"localisation" : self.getLocalisation()
		};
		invokeAjax(ajaxParams);
	};
	/**
	 * Checks whether a country ID and layout name can be used in combination for
	 * a search.
	 *
	 * @param {string}
	 *          countryId Country ID. Configured in OnDemand server.
	 * @param {string}
	 *          layout Layout name. Configured in OnDemand server.
	 * @type void
	 */
	this.canSearch = function () {
		var ajaxParams = {
			"method" : restMethods.CanSearch,
			"countryId" : self.getCountryId(),
			"engine" : self.getEngine(),
			"flatten" : self.getIsFlatten(),
			"intensity" : self.getIntensity(),
			"promptset" : self.getPromptsetType(),
			"threshold" : self.getThreshold(),
			"timeout" : self.getTimeout(),
			"layout" : self.getLayout(),
			"localisation" : self.getLocalisation()
		};
		return invokeAjax(ajaxParams);
	};
	/**
	 * Get all available countries and ids related to these countries.
	 *
	 * @param {string}
	 *          moniker Required.
	 * @param {string}
	 *          layout Required.
	 * @type void
	 */
	this.getAllDataset = function () {
		var ajaxParams = {
			"method" : restMethods.GetData,
			"localisation" : self.getLocalisation()
		};
		invokeAjax(ajaxParams, function (result) {
			qas.search.AvailableCountries = result;
		});
	};
	/**
	 * Get specific details of a specific data.
	 *
	 * @param {string}
	 *          countryId Required.
	 * @type void
	 */
	this.getDataMapDetail = function (countryId) {
		var ajaxParams = {
			"method" : restMethods.GetDataMapDetail,
			"countryId" : self.getCountryId(),
			"localisation" : self.getLocalisation()
		};
		invokeAjax(ajaxParams);
	};
	/**
	 * Get all layouts available for a specific dataset.
	 *
	 * @param {string}
	 *          countryId Required.
	 * @type void
	 */
	this.getAllLayout = function () {
		var ajaxParams = {
			"method" : restMethods.GetLayouts,
			"countryId" : self.getCountryId(),
			"localisation" : self.getLocalisation()
		};
		invokeAjax(ajaxParams);
	};
	/**
	 * Get all example addresses for a specific combination of dataset and layout.
	 *
	 * @param {string}
	 *          countryId Required.
	 * @param {string}
	 *          layout Required.
	 * @type void
	 */
	this.getExampleAddresses = function () {
		var ajaxParams = {
			"method" : restMethods.GetExampleAddresses,
			"countryId" : self.getCountryId(),
			"layout" : self.getLayout(),
			"requestTag" : self.getRequestTag(),
			"localisation" : self.getLocalisation()
		};
		invokeAjax(ajaxParams);
	};
	this.getLicenseInfo = function () {
		var ajaxParams = {
			"method" : restMethods.GetLicenseInfo,
			"localisation" : self.getLocalisation()
		};
		invokeAjax(ajaxParams);
	};
	this.getPromptSet = function () {
		var ajaxParams = {
			"method" : restMethods.GetPromptset,
			"countryId" : self.getCountryId(),
			"engine" : self.getEngine(),
			"flatten" : self.getIsFlatten(),
			"intensity" : self.getIntensity(),
			"promptset" : self.getPromptsetType(),
			"threshold" : self.getThreshold(),
			"timeout" : self.getTimeout(),
			"localisation" : self.getLocalisation()
		};
		invokeAjax(ajaxParams);
	};
	this.getSystemInfo = function () {
		var ajaxParams = {
			"method" : restMethods.GetSystemInfo,
			"localisation" : self.getLocalisation()
		};
		invokeAjax(ajaxParams);
	};
	// CONSTRUCTOR LOGIC
	updateLayout();
};

/*********************************************************************************************************************************************************************
 **********************************************************************************************************************************************************************
 *
 *QAS Best Practices AJAX Sample Code
 *Release v5.1
 *Date: 2/7/2011
 *
 **********************************************************************************************************************************************************************
 *
 *Tested with:
 *	Proweb:
 *		v6.45
 *	Browsers:
 *		Firefox v3.6
 *		Chrome v6.0
 *		Safari v4.0
 *		Opera v10.62
 *		IE v6, v7, v8
 *
 **********************************************************************************************************************************************************************
 *
 *This code is written to be used in conjunction with QAS Pro Web and the provided Common Classes along with a language specific qas_proxy file. It is dependent
 *on both jQuery and jQueryUI.
 *
 *This code processes all addresses on a web page through the proweb engine and requests interaction from an end-user when appropriate. All cleansed
 *addresses are then returned to the proper form. All unique addresses will be processed exactly once, if there are two addresses with the same input ignoring case
 *and after extraneous spaces have been stripped they will be considered the same and processed only once. If any user interaction is needed, it will be requested
 *only once and used for both addresses.
 *
 *
 *All settings are created at the top of the code and can be changed to properly integrate into a website. QAS_Verify() is the function that should be called by
 *a website in order to initiate address verificaton. The Classes are as follows:
 *
 *Main
 *	Instantiates all objects
 *	Loops through addresses
 *	Calls function to return all results
 *	Calls pre and post validation functions
 *
 *Address
 *	Retrieves and stores addresses
 *	Determines unique addresses
 *	Builds search strings
 *	Stores cleaned addresses
 *	Returns addresses to web page
 *
 *Clean
 *	Used to clean a single address by making an AJAX call to qas_proxy
 *	Cleans/Refines/Formats addresses
 *	Stores verifylevel/cleansed result/picklist
 *
 *Business
 *	All business logic is handled here
 *	Controls interaction
 *
 *Interface
 *	creates div tags
 *	populates tags with appropriate messages
 *	displays pop up
 *	accepts user interaction
 *
 **********************************************************************************************************************************************************************
 *
 *Programmer: Jonathan Reimels
 *Date: 10/5/2010
 *
 **********************************************************************************************************************************************************************
 *Please log any internal changes to the code here with the following format(Programmer, Date, Reason for change, Change made)
 *
 *UPDATES:
 *
 *Programmer:  Zulfiqar Ahmad
 *Date: 12/15/10
 *Reason: Renaming/Reorganization for clarity and consistency with prior versions of BP
 *Change: Alphabetized countries in stripPostCode switch statement.   JS updated to match proxy name changes: dpv->dpvstatus; matchtype->verifylevel; isfull->fulladdress
 *
 *Programmer:  Jonathan Reimels
 *Date: 12/15/10
 *Reason: Messaging added for when secondary info inputed on prompt is out of range, as per older versions of BP
 *Change:  Additions to lines 156, 164, 979-986, 994-1001
 *
 *Programmer: Ng Kah Ching
 *Date 8/2/11
 *Reason: Update prior version of BP to use Implementation Code framework
 *Change: Using JSON instead of xml, datamap will be get from OnDemand ws, update logic to handle search result
 **********************************************************************************************************************************************************************
 *********************************************************************************************************************************************************************/

/*********************************************************************************************************************************************************************
 *
 *Settings
 *
 *Set all variables here to properly integrate into website
 *
 *********************************************************************************************************************************************************************/

/*global $*/
/**
 * @namespace Namespace to provide qas feature
 */
var qas = qas || {};

/**
 * @namespace Namespace to provide verification feature
 */
qas.verification = qas.verification || {};

/**
 * This is an array of string arrays, the id's for each set of address fields (excluding country fields) should be listed
 * in an individual string array. These should be listed to match with the proweb config.
 * For each cleaned result, the first item (ie Address Line 1) in the config will go into the first field in the string array
 * @type (array)
 */
qas.verification.address_field_ids = [["add1", "add2", "add3", "city", "state", "zip"], ["shippingAddress1", "shippingAddress2", "shippingAddress3", "shippingCity", "shippingST", "shippingZip1"]];

qas.verification.edit_address_ids = ["editadd1", "editadd2", "editadd3", "editcity", "editstate", "editzip"];

/**
 * Country field id's, these should be listed in the same order as the string arrays in qas.verification.address_field_ids.
 * If a layout doesn't have a country field, then enter false in for the appropriate address within the string.
 * @type (array)
 */
qas.verification.country_fields_ids = ["country", "shippingCountry"];

/**
 * This is only for Canadian addresses.
 * The proweb configuration should be setup to include LVR and Building name as one of the last lines in order to properly handle CAN apartments.
 * This variable should be set to the line number within the config that contains these fields.
 * @type (int)
 */
qas.verification.lvr = 7;

/**
 *	Regular Expression to check for LVR
 */
qas.verification.lvr_regular_expression = /\|?\d+[A-Za-z]*\s*-\s*\d+/;

/**
 * prompt user for information to correct address when needed
 * @type (boolean)
 */
qas.verification.interaction_required = true;

//number of lines to display to user in an interaction required address, this will prevent, additional data, such as dpv indicator, or lat/long from being displayed to user
/**
 * number of lines to display to user in an interaction required address,
 * to prevent additional data to be displayed to user.
 * @type (int)
 */
qas.verification.display_lines = 6;

//Instantiate global instance for QASCapture
var capture = new qas.search.QASCapture();
capture.setEngine(qas.search.EngineType.VERIFICATION);
capture.setIsFlatten(true);

//Instantiate global instance of LanguageController
var languageController = new qas.lang.LanguageController();
/**
 *
 * @class Verification Init
 */
qas.verification.Init = function () {

	var error = null;
	/**
	 * Display error message with alert
	 * @type void
	 */
	var displayDatamapError = function () {
		if (null !== error) {
			if (qas.search.DISPLAY_ERROR) {
				alert(LANGUAGES.VERIFICATION.TheOnDemandServerIsNotAvailable + "\n" + error);
			}
		}
	};
	/**
	 * Callback when the loading of datamap is failed
	 * @param {XmlHttpRequest} XHR object
	 * @param {string} Error message
	 * @param {string} Unknown
	 * @type void
	 */
	var datamapLoadError = function (xhr, errorMessage, optional) {
		error = errorMessage;
		displayDatamapError();
	};
	/**
	 * populate the datamap and load the translated string
	 * @type void
	 */
	var loadData = function () {

		languageController.init("body");

		var datamap = new qas.ui.Datamap(capture);
		datamap.populateCountryControl($('select.countrySelector'), false, null, datamapLoadError);
		languageController.init("body");
		languageController.initComboBox($("select#lang"));
        // start page header codes: can be remove after integration
        languageController.initFlag($("#imgCountry"));
        languageController.initLink($("#guideLink"), "LANGUAGES.COMMON.GuideLink");
        languageController.initLink($("#supportLink"), "LANGUAGES.COMMON.SupportLink");
        // end page header codes
		languageController.reloadAll();
	};
	// Constructor
	loadData();
};
/**
 * to clear Verification form fields value
 * @class QAS ClearForm
 */
qas.verification.QAS_ClearForm = function () {
	$(".verifyFields").val("");
}
/**
 * the initial function to call from the webpage in order to initiate address verification, set onclick events inside this function
 * @class QAS Verify
 */
qas.verification.QAS_Verify = function () {
	//set any onclick events and submit buttons to use pre and post validation
	var preOnclick = null;
	var postOnclick = function() { if (typeof(postVerify) == "function") postVerify(); };
	var buttonID = "";
	var isValid = false;
	var i;
	var m = null;

	//check if the country is selected
	for (i = 0; i < qas.verification.country_fields_ids.length; i++) {
		var dropDownValue = $('#' + qas.verification.country_fields_ids[i]).val();

		if ((dropDownValue)) {
			isValid = true;
			break;
		}
	}

	//if country not selected, alert
	if (!isValid) {
		alert("Please select the country code");
		return false;
	}

	if (preOnclick === null) {
		m = new qas.verification.Main(postOnclick, buttonID);
		m.process();
	} else if (preOnclick()) {
		m = new qas.verification.Main(postOnclick, buttonID);
		m.process();
	}

	return false;
};
/*********************************************************************************************************************************************************************
 *
 *Main Class
 *
 *Public Methods
 *	process		- instantiate Interface and Clean, perform clean and sent result to Business
 *	next		- store cleaned address, move on to next address
 *	finish		- put cleaned addresses in form, submit form
 *	ajaxError	- handle any errors during the ajax call to proweb
 *
 *********************************************************************************************************************************************************************/

qas.verification.Main = function (clickEvent, buttonID) {

	//Private Variables
	var me = this;

	var m_click = clickEvent;
	var m_button = buttonID;

	//instantiate Address, and build the search string
	var add = new qas.verification.Address(qas.verification.address_field_ids, qas.verification.country_fields_ids);
	var strings = add.getSearchStrings();
	var countries = add.getSearchCountries();
	var orig = add.getOriginalAddresses();

	var inter;

	var clean;

	//keep track of address to be processed (the 'next' method controls this)
	var procIndex = 0;

	/**
	 * process an address - part 1, search the address
	 * @type void
	 */
	this.process = function () {
		//hide select boxes to handle bug with ie6, where select boxes show through the pop-up window
		$('select').css('visibility', 'hidden');

		//instantiate Interface to handle all user interaction
		inter = new qas.verification.Interface(me.returnEarly);

		//instantiate Clean, to process address
		clean = new qas.verification.Clean(strings[procIndex], countries[procIndex], me.ajaxError);

		//if string isn't false process it (false string means it is either an empty address or the country isn't in Avaliable DATA_SETS)
		if (strings[procIndex]) {
			//open the waiting widget, clean address, close waiting widget
			inter.waitOpen();
			clean.search(me.process2);
		} else {
			//if string is false use original address
			clean.result = orig[procIndex];
			me.next();
		}
	};
	/**
	 * process an address - part 2, process the result after callback from ajax call
	 * @type void
	 */
	this.process2 = function () {
		inter.waitClose();

		//instantiate a new Business object and process the cleaned result
		var business = new qas.verification.Business(me.next, clean, orig[procIndex], inter);

		//call appropriate business function to process address depending on whether end-user interaction is allowed
		if (qas.verification.interaction_required) {
			business.processResult();
		} else {
			business.noInteraction();
		}
	};
	/**
	 * this is called in order to store an address and increment procIndex so that if another address exists it will be cleaned
	 * @type void
	 */
	this.next = function () {
		//add verify level to result, commented out so DPVDefault layout can display result correctly
		//clean.result.push(clean.verifylevel);

		//store cleaned address
		add.storeCleanedAddress(clean.result);

		//increase procIndex to point to the next address
		procIndex++;

		//if another address exists, process it, otherwise move to end
		if (procIndex < strings.length) {
			me.process();
		} else {
			me.finish();
		}
	};
	/**
	 * returns cleaned addresses to webpage, calls submit functions if any exist
	 * @type void
	 */
	this.finish = function () {
		//unhide select boxes to handle bug with ie6, where select boxes show through the pop-up window
		$('select').css('visibility', '');

		inter.waitClose();
		//return cleaned addresses
		add.returnCleanAddresses();

		//if an onclick event exists, call it
		if (m_click !== null) {
			m_click();
		}

		//if a submit button exists, click it
		if (m_button !== "") {
			$('#' + m_button).attr('onclick', '');
			$('#' + m_button).parent('form').attr('onsubmit', '');
			$('#' + m_button).click();
		}
	};
	/**
	 * used for clicks on the edit button to return any addresses already cleaned
	 * @type void
	 */
	this.returnEarly = function () {
		//unhide select boxes to handle bug with ie6, where select boxes show through the pop-up window
		$('select').css('visibility', '');

		//return cleaned addresses
		add.returnCleanAddresses();
	};
	/**
	 * handle ajax errors
	 * @param json
	 * @param text
	 * @param msg
	 */
	this.ajaxError = function (json, text, msg) {

		if (text === "timeout") {
			//set match type to timeout
			clean.verifylevel = "Timeout";
		} else {
			//set match type to error
			clean.verifylevel = "Error";
		}

		//close the waiting widget
		inter.waitClose();

		//if display errors is set, then display the error
		if (qas.search.DISPLAY_ERROR) {
			alert(LANGUAGES.VERIFICATION.TheOnDemandServerIsNotAvailable + "\n" + text);
		}

		//set restult to the original address entered
		clean.result = orig[procIndex];

		//move onto next record
		me.next();
	};
};
//End Main Class

/*********************************************************************************************************************************************************************
 *
 *Address Class
 *
 *Public Methods
 *	getSearchStrings		- returns an array of strings ready to be sent to qas, a value of false means the address should not be processed
 *	getSearchCountries		- returns an array of countries corresponding to the search strings
 *	getOriginalAddresses	- returns an array of original addresses corresponding to the search strings
 *	storeCleanedAddress		- stores a cleaned address
 *	returnCleanAddresses	- returns cleaned addresses to the webpage
 *
 *********************************************************************************************************************************************************************/

qas.verification.Address = function (addressIds, countryIds) {

	/**************************PRIVATE**************************/
	var ids = addressIds;
	var cIds = countryIds;
	var addresses = [];
	var uniqueAddresses = [];
	var uniqueTracker = new Array(ids.length);
	var searchStrings = [];
	var searchCountries = [];
	var cleanedAddresses = [];
	var i;
	var j;

	//retrieve address values from forms and return array
	var getAddresses = function () {
		//loop through forms
		for (i = 0; i < ids.length; i++) {
			//a variable to temporarily store an address form
			var tempAddress = [];

			//loop through fields in form
			for (j = 0; j < ids[i].length; j++) {
				//get data in address field
				var fieldValue = $('#' + ids[i][j]).val();

				//if this field is undefined and display errors is on, display an error, otherwise this will be handled later
				if (fieldValue === undefined) {
					if (qas.search.DISPLAY_ERROR) {
						alert("ID '" + ids[i][j] + "' is undefined");
					}
				} else {
					//trim whitespace
					fieldValue = fieldValue.replace(/^\s+|\s+$/g, "");
				}

				//push the value into the temporary variable
				tempAddress.push(fieldValue);
			}

			//get the country from the form
			var c3 = $('#' + cIds[i]).val();
      if (c3 == "US") c3 = "USA";

			//push country into the temporary variable
			tempAddress.push(c3);

			//push temporary address into array of addresses
			addresses.push(tempAddress);
		}
	};

	//determine which forms contain unique addresses
	var getUnique = function () {
		var isUnique = true;
		var j = 0;

		//loop through addresses
		for (i = 0; i < addresses.length; i++) {
			//assume address is unique, point uniqueTracker to where address will be added in uniqueAddresses, and set isUnique to true
			uniqueTracker[i] = uniqueAddresses.length;
			isUnique = true;
			j = 0;

			//loop through unique addresses until the current address either matches a unique
			//address or no more unique addresses are left, in which case the address is unique
			//and is added to the unique address list - if this is the first address it will
			//be unique by default
			while (isUnique && (j < uniqueAddresses.length)) {
				if (addresses[i].toString().toLowerCase() === uniqueAddresses[j].toString().toLowerCase()) {
					isUnique = false;
					uniqueTracker[i] = j;
				}
				j++;
			}

			if (isUnique) {
				uniqueAddresses.push(addresses[i]);
			}
		}
	};

	//check if an address should be cleaned
	var cleanCheck = function (address, country) {
		var addNotEmpty = false;
		var j = 0;

		//if an address is empty or has an undefined field, then false will be returned
		while (j < address.length) {
			if (address[j] !== "") {
				addNotEmpty = true;
			}

			if (address[j] === undefined) {
				return false;
			}
			j++;
		}

		//if the country is not in the list, return false
		if (addNotEmpty) {
			addNotEmpty = capture.checkIsAvailableCountry(country);

			if (!addNotEmpty) {
				if (window.console) {
					console.log("The country is not in available datamap, by default accept them");
				}
			}
		}
		return addNotEmpty;
	};

	//build the SearchString array from the unique addresses
	var buildSearchStrings = function () {
		for (i = 0; i < uniqueAddresses.length; i++) {
			searchCountries.push(uniqueAddresses[i].pop());

			if (cleanCheck(uniqueAddresses[i], searchCountries[i])) {
				searchStrings.push(uniqueAddresses[i].join("|"));
			} else {
				searchStrings.push(false);
			}
		}
	};

	//return cleansed address
	var returnAddresses = function () {
		for (i = 0; i < ids.length; i++) {
			//if edit is clicked, not all addresses will have been validated, only update validated addresses in this case
			if (cleanedAddresses[uniqueTracker[i]] !== undefined) {
				for (j = 0; j < ids[i].length; j++) {
					$('#' + ids[i][j]).val(cleanedAddresses[uniqueTracker[i]][j]);
				}
			}
		}
	};
	/**************************END OF PRIVATE**************************/

	/**************************PUBLIC**************************/
	this.getSearchStrings = function () {
		return searchStrings;
	};
	this.getSearchCountries = function () {
		return searchCountries;
	};
	this.getOriginalAddresses = function () {
		return uniqueAddresses;
	};
	this.storeCleanedAddress = function (cleanAddress) {
		cleanedAddresses.push(cleanAddress);
	};
	this.returnCleanAddresses = function () {
		returnAddresses();
	};
	/**************************END OF PUBLIC**************************/
	//constructor
	getAddresses();
	getUnique();
	buildSearchStrings();

};
//end Address Class

/*********************************************************************************************************************************************************************
 *
 *Clean Class
 *
 *Public Properties
 *	result		- cleaned result from proweb, either a picklist, or a cleaned address
 *	verifylevel	- match type from the cleaning process
 *	dpv			- dpv information
 *	country		- country of cleaned address
 *
 *Public Methods
 *	search					- main search, to be used to process an address
 *	searchPremisesPartial	- reprocesses a premises partial address
 *	searchStreetPartial		- reprocesses a street partial address
 *	searchDPVPartial		- reprocesses an address that failed dpv
 *	formatAddress			- get a formatted address
 *	refineAddress			- refine on a picklist
 *
 *********************************************************************************************************************************************************************/

qas.verification.Clean = function (searchString, country_3, ajaxErr) {

	var me = this;
	var m_ajaxErr = ajaxErr;
	var premClean = false;
	var strClean = false;
	var partialAddress = "";
	var m_callback;

	/**************************PRIVATE**************************/

	var origSearchString = searchString;
	var i;

	//append each line from the returned xml to result
	var saveAddress = function (line) {
		me.result.push(line);
	};

	//build array of picklist items from the returned xml
	var savePickList = function (items) {
		////try-catch here

		var partialText = items.PartialAddress;
		var addressText = items.Text;
		var postCode = items.Postcode;
		var moniker = items.Moniker;
		var fulladdress = items.IsFullAddress;

		me.result.push({
			"partialText" : partialText,
			"addressText" : addressText,
			"postCode" : postCode,
			"moniker" : moniker,
			"fulladdress" : fulladdress
		});
	};

	//get a partial address within a picklist that is not a full address
	//this is used to append building or apt info, and research on the resulting address
	var getPartialAddress = function () {
		for (i = 0; i < me.result.length; i++) {
			if (me.result[i].fulladdress.toString().toLowerCase() === "false") {
				return me.result[i].partialText;
			}
		}
		return null;
	};

	//strip postcodes from strings based on country
	//used to strip the postcode out of premises and street
	//partial addresses prior to address being re-submitted
	var stripPostCode = function (str) {
		switch (me.country) {
		case "AUS":
			str = str.replace(/\d{4}$/, "");
			break;
		case "DEU":
			str = str.replace(/\d{5}-\d{5}$/, "");
			break;
		case "DNK":
			str = str.replace(/\s\d{4}\s/, " ");
			break;
		case "FRA":
			str = str.replace(/\s\d{5}\s/, " ");
			break;
		case "GBR":
			str = str.replace(/\w{1,2}\d{1,2}\w?\s\d\w{2}$/, "");
			break;
		case "LUX":
			str = str.replace(/\s\d{4}\s/, "");
			break;
		case "NLD":
			str = str.replace(/\s\d{4}\s\w{2}\s/, " ");
			break;
		case "NZL":
			str = str.replace(/\d{4}$/, "");
			break;
		case "SGP":
			str = str.replace(/\d{6}$/, "");
			break;
		case "USA":
			str = str.replace(/-\d{4}$/, "");
			break;
		}

		return str;
	};

	//process result from ajax call
	var saveResult = function (json) {

		me.verifylevel = json.VerifyLevel;
		if (me.verifylevel == "Verified") {
                  me.verifylevel = "InteractionRequired";
                }
		me.dpv = "";
		var i;

		if (json.Address) {
			me.dpv = json.Address.DPVStatus;
		} else {
			me.dpv = json.DPVStatus;
		}

		//if a premisesPartial is searched on and a premisesPartial is returned,
		//keep old result, so as not to retain the incorectly entered premise info
		if (premClean && (me.verifylevel === "PremisesPartial")) {
			premClean = false;
		} else if (strClean && (me.verifylevel === "StreetPartial")) {
			strClean = false;
		} else {
			//re-initialize this.result
			me.result = [];
			premClean = false;
			strClean = false;

			//save each line of the address if result is 'Verified' or 'InteractionRequired' || (me.dpv == 0)
			if ((me.verifylevel === "Verified") || (me.verifylevel === "InteractionRequired") || (me.verifylevel === "VerifiedStreet") || (me.verifylevel === "VerifiedPlace") || (me.dpv)) {

				var addressLine = [];

				if (json.Address) {
					addressLine = json.Address.AddressLines;
				} else if (json.AddressLines) {
					addressLine = json.AddressLines;
				} else if (json.Picklist.Items) {
					if (json.Picklist.Items.length > 1) {
						me.verifylevel = "PremisesPartial";
						for (i = 0; i < json.Picklist.Items.length; i++) {
							savePickList(json.Picklist.Items[i]);
						}
						partialAddress = getPartialAddress();
						if (partialAddress === null) {
							me.verifylevel = "Multiple";
						}
					} else {
						me.result.push(json.Picklist.Items[0].Text);
					}
				}
				for (i = 0; i < addressLine.length; i++) {
					saveAddress(addressLine[i].Line);
				}
			} else { //otherwise save each picklist item

				if (typeof json.Picklist === 'undefined') {
					for (i = 0; i < json.Items.length; i++) {
						savePickList(json.Items[i]);
					}
					me.verifylevel = "PremisesPartial";
				} else if (typeof json.Picklist.Items !== 'undefined' && json.Picklist.Items !== null) {
					for (i = 0; i < json.Picklist.Items.length; i++) {
						savePickList(json.Picklist.Items[i]);
					}
				}

				if ((me.verifylevel === "PremisesPartial") || (me.verifylevel === "StreetPartial")) {
					partialAddress = getPartialAddress();
					if (partialAddress === null) {
						me.verifylevel = "Multiple";
					}
				}
			}
		}
		m_callback();
	};

	//build up ajax parameters for verification search, and call ajax search
	var doSearch = function (address, c3, ajaxError) {

		capture.setSuccessCallback(function (json) {
			saveResult(json);
		});
		capture.setErrorCallback(function (json, text, msg) {
			ajaxError(json, text, msg);
		});
		capture.setCountryId(c3);

		capture.search(address);
	};
	//build up ajax parameters for format, and call ajax
	var doFormat = function (moniker, ajaxError) {

		capture.setSuccessCallback(function (json) {
			saveResult(json);
		});
		capture.setErrorCallback(function (json, text, msg) {
			ajaxError(json, text, msg);
		});
		capture.getFormattedAddress(moniker);
	};
	//build up ajax parameters for refine, and call ajax
	var doRefine = function (moniker, ajaxError) {

		capture.setSuccessCallback(function (json) {
			saveResult(json);
		});
		capture.setErrorCallback(function (json, text, msg) {
			ajaxError(json, text, msg);
		});
		capture.refine(moniker, "");
	};

	/**************************END OF PRIVATE**************************/

	/**************************PUBLIC**************************/

	this.result = [];
	this.verifylevel = "";
	this.dpv = "";

	this.country = country_3;

	this.search = function (callback) {
		m_callback = callback;
		doSearch(origSearchString, me.country, m_ajaxErr);
	};
	this.searchPremisesPartial = function (aptNo, callback) {
		m_callback = callback;
		premClean = true;
		//strip the +4 from a partial address and append the apt to the end of the first line
		var noPost = stripPostCode(partialAddress);
		var aptAddress = noPost.replace(/,/, " # " + aptNo + ",");

		//process address
		doSearch(aptAddress, me.country, m_ajaxErr);
	};
	this.searchStreetPartial = function (buildingNo, callback) {
		m_callback = callback;
		strClean = true;
		//strip the +4 from a partial address and append the building number to the start of the first line
		var noPost = stripPostCode(partialAddress);
		var buildAddress = buildingNo + " " + noPost;

		//process address
		doSearch(buildAddress, me.country, m_ajaxErr);
	};
	this.searchDPVPartial = function (buildingNo, callback) {
		m_callback = callback;

		//replace old building number with new building number to original address
		var wholeAddress = me.result.join("|");
		wholeAddress = wholeAddress.replace(/\|?\d+\w*\s/, "|" + buildingNo + " ");

		//process address
		doSearch(wholeAddress, me.country, m_ajaxErr);
	};
	this.formatAddress = function (moniker, callback) {
		m_callback = callback;

		//format on the moniker
		doFormat(moniker, m_ajaxErr);
	};
	this.refineAddress = function (moniker, callback) {
		m_callback = callback;
		//refine on the moniker
		doRefine(moniker, m_ajaxErr);
	};
	this.editSearch = function (editAdd, callback) {
		m_callback = callback;
		doSearch(editAdd, me.country, m_ajaxErr);
	};
	/**************************END OF PUBLIC**************************/
};
//end Clean Class

/*********************************************************************************************************************************************************************
 *
 *Business Class
 *
 *The public methods of this class are used to process a cleansed address, prompt for interaction if necessary, handle interaction, pass address back to main
 *
 *********************************************************************************************************************************************************************/

qas.verification.Business = function (callback, clean, orig, inter) {
	var me = this;

	var m_callback = callback;
	var m_clean = clean;
	var m_orig = orig;
	var m_inter = inter;

	//used for double street partials and double premise partials
	var previousMatch = "";
	var count = 0;

    // check if anything actually changed
	if (typeof m_clean.result[0] == "string") { // can be an object: documentation says cleaned result is either a picklist, or a cleaned address
        var changes = 0;
        for (var i = 0; i < m_orig.length && i < m_clean.result.length; i++) {
          if (m_orig[i].toString().toLowerCase() != m_clean.result[i].toString().toLowerCase()) {
            if (i != 5 || m_orig[i].toString().substr(0,5) != m_clean.result[i].toString().substr(0, 5))
              changes += 1;
          }
        }
        document.getElementById("shippingZipFull").value = m_clean.result[5].toString();
        if (changes == 0) m_clean.verifylevel = "Verified";
	}
	else {
        var matchingZip = 0;
        for (var i = 0; i < m_clean.result.length && matchingZip == 0; i++) {
          if (m_orig[5].toString().substr(0,5) == m_clean.result[i].postCode.substr(0, 5)) {
        	matchingZip = i;
          }
        }
        document.getElementById("shippingZipFull").value = m_clean.result[matchingZip].postCode;
	}
	//handle addresses with no end-user interaction
	this.noInteraction = function () {
		if ((m_clean.verifylevel === "Verified") || (m_clean.verifylevel === "InteractionRequired")) {
			m_callback();
		} else {
			me.useOriginal();
		}
	};

	this.acceptInter = function () {
		//accept interaction address
		m_callback();
	};
	this.acceptMoniker = function (moniker) {
		//get formatted address associated with moniker and accept it
		m_clean.formatAddress(moniker, m_callback);
	};
	this.refineApt = function () {
		//clean a premisespartial address and process it
		var aptNo = $('#QAS_RefineText').val();
		m_clean.searchPremisesPartial(aptNo, me.processResult);
	};
	this.refineBuild = function () {
		//clean a streetpartial address and process it
		var buildNo = $('#QAS_RefineText').val();
		m_clean.searchStreetPartial(buildNo, me.processResult);
	};
	this.refineDPV = function () {
		//clean an address that failed dpv and process it
		var buildNo = $('#QAS_RefineText').val();
		m_clean.searchDPVPartial(buildNo, me.processResult);
	};
	this.appendApt = function () {
		//append apt to address and accept it
		var aptNo = $('#QAS_RefineText').val();

		var aptIndex = 0;
		var aptLine = false;

		//find address line one and add apt to it
		while ((!aptLine) && (aptIndex < m_clean.result.length)) {
			if (m_clean.result[aptIndex].search(/^\d+\s/) !== -1) {
				aptLine = true;
				m_clean.result[aptIndex] = aptNo + "-" + m_clean.result[aptIndex];
			}
			aptIndex++;
		}
		m_callback();
	};
	this.refineMult = function (moniker) {
		//refine on multiple address and process the result
		m_clean.refineAddress(moniker, me.processResult);
	};
	this.useOriginal = function () {
		//accept orignally entered address
		m_clean.result = m_orig;
		m_callback();
	};
	var aptCheck = function (lvrLine) {
		var isApt = "";

		//check if address should have apt
		isApt = m_clean.result[lvrLine];

		//if address should have apt, check if it already does have an apt
		if (isApt) {
			//search on wholeaddress as address line 1 is unknown
			var wholeAddress = m_clean.result.join("|");
			if (wholeAddress.search(qas.verification.lvr_regular_expression) !== -1) {
				return true;
			} else {
				return false;
			}
		} else {
			return true;
		}
	};
	this.editSearch = function (editAdd) {
		//search the editted address
		previousMatch = "";
		count = 0;
		m_clean.editSearch(editAdd, me.processResult);
	};

	this.processResult = function () {
		count++;

		//handle address based on verifylevel
		switch (m_clean.verifylevel) {
		case "Verified":
			//if address is USA, then check DPV status
			if (m_clean.country === "USA") {
				//if dpv is not confirmed or dpv seed hit, prompt for Building Number
				if (((clean.dpv === "DPVNotConfirmed") || (clean.dpv === "DPVSeedHit")) && count <= 1) {
					m_inter.setDPVPartial(m_orig, me.refineDPV, me.useOriginal, me.editSearch);
					m_inter.display();
				} else if (clean.dpv === "DPVConfirmedMissingSec") {
					//if dpv is missing secondary, treat address as an Interactino Required
					m_inter.setInterReq(m_clean.result, m_orig, me.acceptInter, me.useOriginal, me.editSearch);
					m_inter.display();
				} else { //otherwise, dpv was passed or not set. Accept the address
					m_callback();
				}
			} else if (m_clean.country === "CAN") { //if address is Canadian, check to see if there should be an apartment
				//if there should be an apt and the address currently doesn't have one, prompt for an apt
				if (!aptCheck(qas.verification.lvr - 1)) {
					m_inter.setAptAppend(m_orig, me.appendApt, m_callback, me.useOriginal, me.editSearch);
					m_inter.display();
				} else { //otherwise, apartment was already entered, or address doesn't need an apt
					m_callback();
				}
			} else { //all other countries, accept verified address
				m_callback();
			}
			break;

		case "InteractionRequired":

			//if there should be an apt and the address currently doesn't have one, prompt for an apt
			if ((m_clean.country === "CAN") && (!aptCheck(qas.verification.lvr - 1))) {
				m_inter.setAptAppend(m_orig, me.appendApt, m_callback, me.useOriginal, me.editSearch);
				m_inter.display();
			} else if (count > 1) { //if interaction has already happened and resulting address is an interaction required, accept the address without further interaction
				m_callback();
			} else { //otherwise display interaction required dialog
				m_inter.setInterReq(m_clean.result, m_orig, me.acceptInter, me.useOriginal, me.editSearch);
				m_inter.display();
			}
			break;

		case "VerifiedPlace":
			//if there should be an apt and the address currently doesn't have one, prompt for an apt
			if ((m_clean.country === "CAN") && (!aptCheck(qas.verification.lvr - 1))) {
				m_inter.setAptAppend(m_orig, me.appendApt, m_callback, me.useOriginal, me.editSearch);
				m_inter.display();
			} else if (count > 1) { //if interaction has already happened and resulting address is an interaction required, accept the address without further interaction
				m_callback();
			} else { //otherwise display interaction required dialog
				m_inter.setInterReq(m_clean.result, m_orig, me.acceptInter, me.useOriginal, me.editSearch);
				m_inter.display();
			}
			break;

		case "VerifiedStreet":
			//if there should be an apt and the address currently doesn't have one, prompt for an apt
			if ((m_clean.country === "CAN") && (!aptCheck(qas.verification.lvr - 1))) {
				m_inter.setAptAppend(m_orig, me.appendApt, m_callback, me.useOriginal, me.editSearch);
				m_inter.display();
			} else if (count > 1) { //if interaction has already happened and resulting address is an interaction required, accept the address without further interaction
				m_callback();
			} else { //otherwise display interaction required dialog
				m_inter.setInterReq(m_clean.result, m_orig, me.acceptInter, me.useOriginal, me.editSearch);
				m_inter.display();
			}
			break;

		case "PremisesPartial":

			//display premises partial dialog
			m_inter.setPremisesPartial(m_clean.result, m_orig, me.refineApt, me.acceptMoniker, me.useOriginal, me.editSearch);
			m_inter.display();

			//if previous address was a PremisesPartial, inform user that invalid range was entered
			if (previousMatch === "PremisesPartial") {
				alert(LANGUAGES.VERIFICATION.PromptPremisesPartialInvalidRange);
			}

			//set previous match type
			previousMatch = "PremisesPartial";
			break;

		case "StreetPartial":

			//display street partial dialog
			m_inter.setStreetPartial(m_clean.result, m_orig, me.refineBuild, me.acceptMoniker, me.useOriginal, me.editSearch);
			m_inter.display();

			//if previous address was a StreetPartial, inform user that invalid range was entered
			if (previousMatch === "StreetPartial") {
				alert(LANGUAGES.VERIFICATION.PromptStreetPartialInvalidRange);
			}

			//set previous match type
			previousMatch = "StreetPartial";
			break;

		case "Multiple":
			//display multiple dialog
			m_inter.setMultiple(m_clean.result, m_orig, me.acceptMoniker, me.refineMult, me.useOriginal, me.editSearch);
			m_inter.display();
			break;

		case "None":
			//display none dialog
			m_inter.setNone(m_orig, me.useOriginal, me.editSearch);
			m_inter.display();
			break;
		}
	};
};
//end Business Class

/*********************************************************************************************************************************************************************
 *
 *Interface Class
 *
 *	Display dialog to user
 *
 *********************************************************************************************************************************************************************/

qas.verification.Interface = function (editCall) {

	/**************************PRIVATE**************************/
	var me = this;
	var m_editCall = editCall;
	var m_pickList;
	var m_orig;
	var m_pickHtml = "";
	var i = 0;

	//create a picklist
	var buildPick = function () {
		//reinitialize
		m_pickHtml = "";

		for (i = 0; i < m_pickList.length; i++) {
			if (m_pickList[i].fulladdress.toString().toLowerCase() === "true") {
				m_pickHtml += "<tr><td NOWRAP><a href='#' class='QAS_StepIn' moniker='" + m_pickList[i].moniker + "'>" + m_pickList[i].addressText + "</a></td><td NOWRAP><a href='#' class='QAS_StepIn' moniker='" + m_pickList[i].moniker + "'>" + m_pickList[i].postCode + "</a></td></tr>";
			} else {
				m_pickHtml += "<tr><td NOWRAP>" + m_pickList[i].addressText + "</td><td NOWRAP>" + m_pickList[i].postCode + "</td></tr>";
			}
		}
	};
	//create a picklist for multiple address, all items must be clickable
	var buildMultPick = function () {
		//reinitialize
		m_pickHtml = "";

		for (i = 0; i < m_pickList.length; i++) {
			if (m_pickList[i].fulladdress.toString().toLowerCase() === "true") {
				m_pickHtml += "<tr><td NOWRAP><a href='#' class='QAS_StepIn' moniker='" + m_pickList[i].moniker + "'>" + m_pickList[i].addressText + "</a></td><td NOWRAP><a href='#' class='QAS_StepIn' moniker='" + m_pickList[i].moniker + "'>" + m_pickList[i].postCode + "</a></td></tr>";
			} else {
				m_pickHtml += "<tr><td NOWRAP><a href='#' class='QAS_Refine' moniker='" + m_pickList[i].moniker + "'>" + m_pickList[i].addressText + "</a></td><td NOWRAP><a href='#' class='QAS_Refine' moniker='" + m_pickList[i].moniker + "'>" + m_pickList[i].postCode + "</a></td></tr>";
			}
		}
	};
	//build display of original address and button to click
	var buildRightSide = function (origCallback, editCallback) {
		var origHtml = "";
		var editHtml = "";

		for (i = 0; i < m_orig.length; i++) {
			origHtml += "<tr><td>" + m_orig[i] + "</td></tr>";
		}

		$(".QAS_RightDetails").html("<div class='QAS_RightSidePrompt'>" + "<div class='QAS_RightSidePromptText'>" + "<span class='translation'>" + LANGUAGES.VERIFICATION.PromptRightSidePrompt + "</span>" +  //"&nbsp;[<a href='#' id='QAS_Edit'>" + qas.verification.qas_prompts.RightSide.edit + "</a>]"	+
			"<span class='QAS_EditLink'><a href='#' id='QAS_Edit'>" + LANGUAGES.VERIFICATION.PromptRightSideEdit + "</a></span>" + "</div>" +
			//"<br />"	+
			"<input type='button' id='QAS_AcceptOriginal' class='translate' value='" + LANGUAGES.VERIFICATION.PromptRightSideButton + "' />" + "</div>" +
			//"<br />"	+
			"<div class='QAS_OriginalMessage'>" + "<table>" + origHtml + "</table>" + "</div>" + "<div class='QAS_EditMessage'>" + "</div>" +
			//"<br />"	+
			"<div class='QAS_DeliverableWarning'>" + "<span class='translation'>" + LANGUAGES.VERIFICATION.PromptRightSideWarning + "</span>" + "</div>");

		$(".QAS_EditMessage").html("");
		$(".QAS_OriginalMessage").show();

		$('#QAS_AcceptOriginal').button();

		$('.QAS_RightDetails').css('float', 'right');

		//assign onclick for accepting original address
		$('#QAS_AcceptOriginal').click(function () {
			$('#QAS_Dialog').dialog('close');
			origCallback();
		});
		//assign onclick for edit button
		$('#QAS_Edit').click(function () {

			for (i = 0; i < m_orig.length; i++) {
				editHtml += "<tr><td>" + "<input id='" + qas.verification.edit_address_ids[i] + "' type='text'" + " value='" + m_orig[i] + "' />" + "</td></tr>";
			}
			editHtml += "<tr><td>" + "<input type='button' id='QAS_FinishEdit' class='translate' value='" + LANGUAGES.VERIFICATION.PromptRightSideFinishEdit + "' />" + "</td></tr>";

			$(".QAS_EditMessage").html("<table>" + editHtml + "</table>");

			$('#QAS_Edit').hide();
			$('#QAS_FinishEdit').button();
			$(".QAS_OriginalMessage").html("");
			$(".QAS_EditMessage").show();
			$('#QAS_AcceptOriginal').unbind();

			$('#QAS_AcceptOriginal').click(function () {
				for (i = 0; i < qas.verification.edit_address_ids.length; i++) {
					m_orig[i] = $('#' + qas.verification.edit_address_ids[i]).val();
				}
				$('#QAS_Dialog').dialog('close');
				origCallback();
			});

			//asign onclick for finish edit button
			$('#QAS_FinishEdit').click(function () {
				var editAdd = "";
				for (i = 0; i < qas.verification.edit_address_ids.length; i++) {
					editAdd += $('#' + qas.verification.edit_address_ids[i]).val() + "|";
					m_orig[i] = $('#' + qas.verification.edit_address_ids[i]).val();
				}
				$('#QAS_Dialog').dialog('close');
				me.waitOpen();
				editCallback(editAdd);
			});
		});
	};
	//load div tags to page and set modal dialogs
	var load = function () {
		//remove the dialog if it already exists
		$("#QAS_Dialog").remove();
		$("#QAS_Wait").remove();

		//add div tag to page
		$(document.body).append("<div id='QAS_Dialog' class='translate' title='" + LANGUAGES.VERIFICATION.PromptTitle + "'>" + "<div class='QAS_Header ui-state-highlight'></div>" + "<div class='QAS_Prompt'>" + "<div class='QAS_PromptText'></div>" + "<div class='QAS_Input'></div>" + "<div class='QAS_PromptData'></div>" + "</div>" + "<div class='QAS_RightDetails'></div>" + "<div class='QAS_Picklist'>" + "<div class='QAS_MultPick'></div>" + "<div class='QAS_ShowPick'></div>" + "<div class='QAS_Pick'></div>" + "</div>" + "</div>" + "<div id='QAS_Wait' class='translate' title = '" + LANGUAGES.VERIFICATION.PromptWaitingMessage + "'></div>");

		//add jqueryui modal dialog to div tag, for user interaction
		$("#QAS_Dialog").dialog({
			modal : true,
			//height: 450,	////causes issues with IE
			width : 650,
			autoOpen : false,
			closeOnEscape : false,
			resizable : false,
			draggable : false,
      dialogClass: 'QAS_Dialog'
		});

		//add jqueryui modal dialog to div tag, for waiting dialog
		$("#QAS_Wait").dialog({
			modal : true,
			height : 100,
			width : 200,
			autoOpen : false,
			closeOnEscape : false,
			resizable : false,
			draggable : false,
      dialogClass: 'QAS_Dialog'
		});

		//add slide toggle to show pick list
		$(".QAS_ShowPick").click(function () {
			$(".QAS_Pick").slideToggle("slow");
		});
		//re-center popup when window is resized
		$(window).resize(function () {
			$("#QAS_Dialog").dialog("option", "position", 'center');
		});
	};
	/**************************END OF PRIVATE**************************/

	/**************************PUBLIC**************************/
	//open waiting diaglog
	this.waitOpen = function () {
		$('#QAS_Wait').dialog('open');
		//remove close button from top right of dialog
		$('.ui-dialog-content').hide();
		$('.ui-dialog-titlebar-close').css('display', 'none');
	};
	//close waiting dialog
	this.waitClose = function () {
		$('#QAS_Wait').dialog('close');
	};
	//display interaction dialog
	this.display = function () {
		window.scroll(0, 0);

		$('#QAS_Dialog').dialog('open');

		//remove close button from top right of dialog
		$('.ui-dialog-titlebar-close').css('display', 'none');

		//remove the default focus from interaction required button(so that it is not highlighted as if mouse is hovering on it)
		$('#QAS_RefineBtn').blur();
		$('.QAS_Header').focus();
	};
	//set dialog to handle interaction required address
	this.setInterReq = function (cleaned, orig, acceptCallback, origCallback, editCallback) {
		m_orig = orig;

		var cleanedHtml = "";

		//build right side of dialog
		buildRightSide(origCallback, editCallback);

		//build cleansed address to show to end-user
		for (i = 0; i < qas.verification.display_lines; i++) {
			if (cleaned[i]) {
				cleanedHtml += "<tr><td>" + cleaned[i] + "</td></tr>";
			} else {
				cleanedHtml += "<tr><td></td></tr>";
			}
		}

		//display proper messages
		$(".QAS_Header").html("<span class='translation'>" + LANGUAGES.VERIFICATION.PromptInteractionRequiredHeader + "</span>");

        $(".QAS_Prompt").show();
        $(".QAS_PromptText").show();
		$(".QAS_PromptText").html("<span class='translation'>" + LANGUAGES.VERIFICATION.PromptInteractionRequiredPrompt + "</span>");
        $(".QAS_PromptData").show();
        $(".QAS_Input").show();
		$(".QAS_PromptData").html("<br /><br />" + "<table>" + cleanedHtml + "</table>");
		$(".QAS_Input").html("<input type='button' id='QAS_RefineBtn' class='translation' value='" + LANGUAGES.VERIFICATION.PromptInteractionRequiredButton + "' />");
		$(".QAS_MultPick").html("");
		$(".QAS_ShowPick").html("");
		$(".QAS_Pick").html("");

		$(".QAS_MultPick").hide();

		//add jqueryui button
		$('#QAS_RefineBtn').button();

		//add onclick event to the button
		$('#QAS_RefineBtn').click(function () {
			$('#QAS_Dialog').dialog('close');
			me.waitOpen();
			acceptCallback();
		});
	};
	//set dialog to handle premises partial addresses
	this.setPremisesPartial = function (pickList, orig, refineCallback, monikerCallback, origCallback, editCallback) {
		m_pickList = pickList;
		m_orig = orig;

		//build picklist to display and right side of dialog
		buildPick();
		buildRightSide(origCallback, editCallback);

		//display proper messages and picklist
		$(".QAS_Header").html("<span class='translation'>" + LANGUAGES.VERIFICATION.PromptPremisesPartialHeader + "</span>");
		$(".QAS_Prompt").show();
        $(".QAS_PromptText").show();
		$(".QAS_PromptText").html("<span class='translation'>" + LANGUAGES.VERIFICATION.PromptPremisesPartialPrompt + "</span>");
		$(".QAS_PromptData").html("");
        $(".QAS_Input").show();
		$(".QAS_Input").html("<input type='text' id='QAS_RefineText' />" + "<input type='button' id='QAS_RefineBtn' class='translation' value='" + LANGUAGES.VERIFICATION.PromptPremisesPartialButton + "' />");
		$(".QAS_MultPick").html("");
		$(".QAS_ShowPick").show();
		$(".QAS_ShowPick").html("<a href='#'>" + "<span class='translation'>" + LANGUAGES.VERIFICATION.PromptPremisesPartialShowPicklist + "</span>" + "</a>");
		$(".QAS_Pick").html("<table>" + m_pickHtml + "</table>");

		$(".QAS_MultPick").hide();

		//add jqueryui button
		$('#QAS_RefineBtn').button();

		//add onclick event to the button
		$('#QAS_RefineBtn').click(function () {
			if ($('#QAS_RefineText').val() === "") { //if no value was entered in field, display error message
				alert("No value entered");
			} else {
				$('#QAS_Dialog').dialog('close');
				me.waitOpen();
				refineCallback();
			}
		});
		//add onclick event to any full addresses in the picklist
		$('.QAS_StepIn').click(function () {
			$('#QAS_Dialog').dialog('close');
			me.waitOpen();
			var mon = $(this).attr('moniker');
			monikerCallback(mon);
		});
	};
	//set dialog to handle street partial addresses
	this.setStreetPartial = function (pickList, orig, refineCallback, monikerCallback, origCallback, editCallback) {
		m_pickList = pickList;
		m_orig = orig;

		//build picklist to display and right side of dialog
		buildPick();
		buildRightSide(origCallback, editCallback);

		//display proper messages and picklist
		$(".QAS_Header").html("<span class='translation'>" + LANGUAGES.VERIFICATION.PromptStreetPartialHeader + "</span>");
		$(".QAS_Prompt").show();
        $(".QAS_PromptText").show();
		$(".QAS_PromptText").html("<span class='translation'>" + LANGUAGES.VERIFICATION.PromptStreetPartialPrompt + "</span>");
		$(".QAS_PromptData").html("");
		$(".QAS_Input").show();
		$(".QAS_Input").html("<input type='text' id='QAS_RefineText' />" + "<input type='button' id='QAS_RefineBtn' class='translation' value='" + LANGUAGES.VERIFICATION.PromptStreetPartialButton + "' />");
		$(".QAS_MultPick").html("");
		$(".QAS_ShowPick").show();
		$(".QAS_ShowPick").html("<a href='#'>" + "<span class='translation'>" + LANGUAGES.VERIFICATION.PromptStreetPartialShowPicklist + "</span>" + "</a>");
		$(".QAS_Pick").html("<table>" + m_pickHtml + "</table>");

		$(".QAS_MultPick").hide();

		//add jqueryui button
		$('#QAS_RefineBtn').button();

		//add onclick event to the button
		$('#QAS_RefineBtn').click(function () {
			if ($('#QAS_RefineText').val() === "") { //if no value was entered in field, display error message
				alert("No value entered");
			} else {
				$('#QAS_Dialog').dialog('close');
				me.waitOpen();
				refineCallback();
			}
		});
		//add onclick event to any full addresses in the picklist
		$('.QAS_StepIn').click(function () {
			$('#QAS_Dialog').dialog('close');
			me.waitOpen();
			var mon = $(this).attr('moniker');
			monikerCallback(mon);
		});
	};
	//set dialog to handle addresses that fail dpv
	this.setDPVPartial = function (orig, refineCallback, origCallback, editCallback) {
		m_orig = orig;

		//build right side of dialog
		buildRightSide(origCallback, editCallback);

		//display proper messages
		$(".QAS_Header").html("<span class='translation'>" + LANGUAGES.VERIFICATION.PromptDPVPartialHeader + "</span>");
		$(".QAS_Prompt").show();
        $(".QAS_PromptText").show();
		$(".QAS_PromptText").html("<span class='translation'>" + LANGUAGES.VERIFICATION.PromptDPVPartialPrompt + "</span>");
		$(".QAS_PromptData").html("");
		$(".QAS_Input").show();
		$(".QAS_Input").html("<input type='text' id='QAS_RefineText' />" + "<input type='button' id='QAS_RefineBtn'  class='translation' value='" + LANGUAGES.VERIFICATION.PromptDPVPartialButton + "' />");
		$(".QAS_MultPick").html("");

		$(".QAS_MultPick").hide();

		//add jqueryui button
		$('#QAS_RefineBtn').button();

		//add onclick event to the button
		$('#QAS_RefineBtn').click(function () {
			if ($('#QAS_RefineText').val() === "") { //if no value was entered in field, display error message
				alert("No value entered");
			} else {
				$('#QAS_Dialog').dialog('close');
				me.waitOpen();
				refineCallback();
			}
		});
	};
	//set dialog to handle addresses missing apt info
	this.setAptAppend = function (orig, refineCallback, noAptCallback, origCallback, editCallback) {
		m_orig = orig;

		//build right side of dialog
		buildRightSide(origCallback, editCallback);

		//display proper messages
		$(".QAS_Header").html("<span class='translation'>" + LANGUAGES.VERIFICATION.PromptAptAppendHeader + "</span>");
		$(".QAS_Prompt").show();
        $(".QAS_PromptText").show();
		$(".QAS_PromptText").html("<span class='translation'>" + LANGUAGES.VERIFICATION.PromptAptAppendPrompt + "</span>");
		$(".QAS_PromptData").html("");
		$(".QAS_Input").show();
		$(".QAS_Input").html("<input type='text' id='QAS_RefineText' />" + "<input type='button' id='QAS_RefineBtn' class='translate' value='" + LANGUAGES.VERIFICATION.PromptAptAppendButton + "' />" + "<br />" + "<input type='button' id='QAS_NoApt' class='translate' value='" + LANGUAGES.VERIFICATION.PromptAptAppendNoApt + "' />");
		$(".QAS_MultPick").html("");

		$(".QAS_MultPick").hide();

		//add jqueryui button
		$('#QAS_RefineBtn').button();
		$('#QAS_NoApt').button();

		//add onclick event to the button
		$('#QAS_RefineBtn').click(function () {
			if ($('#QAS_RefineText').val() === "") { //if no value was entered in field, display error message
				alert("No value entered");
			} else {
				$('#QAS_Dialog').dialog('close');
				me.waitOpen();
				refineCallback();
			}
		});
		//add onclick event to button, in order to accept cleaned address as is, with no apt
		$('#QAS_NoApt').click(function () {
			$('#QAS_Dialog').dialog('close');
			me.waitOpen();
			noAptCallback();
		});
	};
	//set dialog to handle multiple addresses
	this.setMultiple = function (pickList, orig, formatCallback, refineCallback, origCallback, editCallback) {
		m_pickList = pickList;
		m_orig = orig;

		//build picklist to display and right side of dialog
		buildMultPick();
		buildRightSide(origCallback, editCallback);

		//display proper messages and picklist
		$(".QAS_Header").html("<span class='translation'>" + LANGUAGES.VERIFICATION.PromptMultipleHeader + "</span>");
		$(".QAS_Prompt").show();
        $(".QAS_PromptText").show();
		$(".QAS_PromptText").html("<span class='translation'>" + LANGUAGES.VERIFICATION.PromptMultiplePrompt + "</span>");
		$(".QAS_PromptData").html("");
		$(".QAS_Input").html("");
		$(".QAS_MultPick").html("<table>" + m_pickHtml + "</table>");
		$(".QAS_ShowPick").html("");
		$(".QAS_Pick").html("");

		$(".QAS_MultPick").show();

		//step into any full address
		$('.QAS_StepIn').click(function () {
			$('#QAS_Dialog').dialog('close');
			me.waitOpen();
			var mon = $(this).attr('moniker');
			formatCallback(mon);
		});
		//refine on non-full address
		$('.QAS_Refine').click(function () {
			$('#QAS_Dialog').dialog('close');
			me.waitOpen();
			var mon = $(this).attr('moniker');
			refineCallback(mon);
		});
	};
	//set display for none verifylevel
	this.setNone = function (orig, origCallback, editCallback) {
		m_orig = orig;

		buildRightSide(origCallback, editCallback);

		$(".QAS_Header").html("<span class='translation'>" + LANGUAGES.VERIFICATION.PromptNoneHeader + "</span>");
        $(".QAS_Prompt").hide();
        $(".QAS_Input").hide();
		$(".QAS_MultPick").html("");
		$(".QAS_ShowPick").hide();
		$(".QAS_Pick").hide();
		$('.QAS_RightDetails').css('float', 'left');

		$(".QAS_MultPick").hide();
	};
	/**************************END OF PUBLIC**************************/

	//constructor
	load();

};	//end Interface Class
var LANGUAGES = {
    "INDEX" : {
        "GeneralDescription": "This page lists the " + qas.lang.PROGRAMMING_LANGUAGE + " implementation code for available search types.",

        "ClickHereForComparisonMatrix" : "Compare search types",
        "AddressCapture" : "Find an address",
        "AddressCaptureFurtherDescription" : "<strong>Capture a customer's address using key address information only.</strong>",
        "AddressCaptureTypicalUseDescription" : "Ideal where address entry needs to performed quickly.<p>The user selects the country and is then prompted to enter key elements of the address (a postcode and house number, for example). If this results in multiple matches, the user is prompted to pick from a list of suggested addresses. The user is also able to edit the address once it is returned.</p>",
        "Verification" : "Verify an address",
        "VerificationFurtherDescription" : "<strong>Verify a customer's address and replace missing or incorrect information.</strong>",
        "VerificationTypicalUseDescription" : "Ideal for untrained users, address information is entered in the same way as on an envelope.<p>Matched addresses are completed, formatted and returned. If a match is not found, the user selects from a number of suggested alternatives or proceeds with the address as they entered it.</p>"
    },
    "MATRIX" : {
        "GeneralDescription": "<p>Each search type demonstrates a different way of integrating address management into a website.</p><p>This table summarises the key features and how they differ between search types.</p>",
        "TableHeaderAddressCapture": "Find an address",
        "TableHeaderVerification": "Verify an address",

        "Overview": "Overview",
        "Features": "Features",

        "TypicalUseRowHeader": "Typical user and environment",
        "TypicalUseDescAddressCapture": "Customer on a website.<br>Also for casual users on a self-service intranet application.",
        "TypicalUseDescVerification": "Customer on a website.<br>Often used in countries where users prefer to verify a complete address.",

        "ProcessRowHeader": "How it fits into existing address entry process",
        "ProcessDescAddressCapture": "Requires additional pages to guide the user through the capture process.",
        "ProcessDescVerification": "Sits behind existing address entry form. Interaction with user only required when the address cannot be verified as correct.",

        "EntryRowHeader": "Entering address information",
        "EntryDescAddressCapture": "A separate page prompts the user for key elements of the address. If the post code is not known, alterative prompts are displayed.",
        "EntryDescVerification": "Entered into existing address entry form.",

        "DataSelectionRowHeader": "Data selection",
        "DataSelectionDescAddressCapture": "A separate page prompts the user to pick from a list of countries. This step can be omitted if only a single country is available.",
        "DataSelectionDescVerification": "Provided by the main address entry form. If this is not defined, a default country is assumed.",

        "UsePicklistRowHeader": "Use of picklists to display multiple matches",
        "UsePicklistDescAddressCapture": "A simple picklist of all correct addresses, each displaying a complete address.",
        "UsePicklistDescVerification": "A simple picklist of all correct addresses, each displaying a complete address.<br>If minimal user interaction is required then this stage can be omitted.",

        "RefinePicklistRowHeader": "Ability to enter text to refine picklists",
        "RefinePicklistDesc": "The user simply selects the required address.",

        "MatchScoreRowHeader": "Display of percentage match scores",
        "MatchScoreDesc": "Scores are not shown, in order to simplify interaction for the user.",

        "PostalCodeWarningsRowHeader": "Postal code recode and bordering locality warning messages",
        "PostalCodeWarningsDesc": "Warnings are not shown, in order to simplify interaction for the user.",

        "PicklistHistoryRowHeader": "Display of picklist history",
        "PicklistHistoryDesc": "Multiple levels of picklist are not supported.",

        "InformationalPromptsRowHeader": "Use of informational prompts (in picklist)",
        "InformationalPromptsDesc": "Informational prompts are not shown, in order to simplify interaction for the user.",

        "MaxMatchesRowHeader": "Maximum number of displayed matches",
        "MaxMatchesDesc": "Picklist displays a maximum of 250 matches.",

        "AutoStepRowHeader": "Automatic step-in to a single exact match (100%)",
        "AutoStepDescAddressCapture": "A picklist is not displayed if a single exact match occurs.",
        "AutoStepDescVerification": "This is not applicable as picklists are only shown if the address cannot be verified.",

        "StepBackWarningRowHeader": "Warning to step-back to view close matches (after an automatic step-in)",
        "StepBackWarningDescAddressCapture": "This is to simplify the interaction for the user.",
        "StepBackWarningDescVerification": "Automatic step-ins do not occur.",

        "UnrecognisedPremiseRowHeader": "Entry of unrecognised premise or sub-premise information",
        "UnrecognisedPremiseDescAddressCapture": "The user selects a suitable address and any changes on the address confirmation page.",
        "UnrecognisedPremiseDescVerification": "All information is retained unless overridden by the user.",

        "AddressConfirmationRowHeader": "Address confirmation page",
        "AddressConfirmationDescAddressCapture": "If the address is passed through to an alternative page which allows address modification, this can be omitted.",
        "AddressConfirmationDescVerification": "Interaction with the user is not required for addresses that are verified as correct.",

        "AdvanceSearchRowHeader": "Use of advanced search functionality",
        "AdvanceSearchDescAddressCapture": "Wildcard characters (* and ?) are supported but not generally used.",
        "AdvanceSearchDescVerification": "The Verification engine is designed to take a complete address.",

        "ReconfigurablePromptSetRowHeader": "Re-configurable prompt sets",
        "ReconfigurablePromptSetDesc": "The format of the input address can be configured or constrained as required. See the Implementation Guide for more details.",

        "NamesDataRowHeader": "Support for names data",
        "NamesDataDesc": "Configured and returned as part of the formatted address.<br>Only available when using Names data.",

        "BusinessDataRowHeader": "Support for business data",
        "BusinessDataDesc": "Configured and returned as part of the formatted address.<br>Only available when using Business data.",

        "DataplusRowHeader": "Support for DataPlus sets",
        "DataplusDesc": "Configured and returned as part of the formatted address.",

        "ChooseSearchType": "Choose a search type"
    },
    "COMMON" : {
        "QASProOnDemand" : "QAS Pro On Demand",
        "ImplementationCode" : qas.lang.PROGRAMMING_LANGUAGE + " Implementation Code",
        "HomePage" : qas.lang.PROGRAMMING_LANGUAGE + " home page",

        // links
        "HeaderLinkGuide": "Guide",
        "HeaderLinkHelp": "Help",
        "HeaderLinkSupport": "Support",
        "SupportLink": "http://support.qas.com/?sc=us",
        "GuideLink": "http://support.qas.com/ImplementationCode-v1_en-us_JSP_guide",

        // Route
        "Defined" : "Defined",
        "Okay" : "Okay",
        "Failed" : "Failed",
        "PreSearchFailed" : "Pre-search failed",
        "UnsupportedCountry" : "Unsupported country",
        "TooManyMatches" : "Too many matches",
        "NoMatches" : "No matches",
        "Timeout" : "Timeout"
    },
    "ADDRESS_CAPTURE" : {
        // Common
        "Title" : "QAS Pro On Demand - Find an address",
        "AddressCapture" : "Find an address",
        "ButtonNext" : "    Next >   ",
        "ButtonBack" : "   < Back   ",
        "ButtonSearchAgain" : "Search Again",

        // Input screen - country selection
        "PleaseSelectACountryOrDatamap" : "To begin, select your country.",
        "DatamapsAvailable" : "--  Select your country --",
        "Other" : "Other",
        "TheOnDemandServerIsNotAvailable": "The On Demand server is not available",

        // Input screen - prompt
        "EnterTheAddressElementsRequestedBelow" : "Enter your address details below.",
        "IfYouDoNotKnowThePostalCode" : "Don't know your ZIP code? Click here",
        "PleaseEnterSomeAddressDetails" : "Please enter some address details to continue.",
        "ReturnToPostcode" : "Return to ZIP code search",

        // Search screen
        "SelectOneOfTheFollowingAddress" : "Select your address:",

        // Format screen
        "PleaseConfirmYourAddressBelow" : "Confirm your address.",
        "AutomaticAddressCaptureDidNotSucceed" : "We were unable to find your address.",
        "PleaseSearchAgainOrEnterYourAddressBelow" : "Please search again, or enter your address below.",
        "AutomaticAddressCaptureIsNotAvailable" : "We were unable to find your address.",
        "PleaseEnterYourAddressBelow" : "Please enter your address below.",
        "ButtonAccept" : "   Accept Address   ",
        "DPVValidated" : "Address has been DPV validated",
        "Warning_DPVNotValidated" : "WARNING - Address has not been DPV validated",
        "DPVValidatedButSecondaryNumberIncorrectOrMissing" : "Address has been DPV validated, but secondary number is incorrect or missing",
        "Warning_DPVValidationLocked" : "WARNING - DPV validation is locked",
        "Warning_DPV_SeedAddressHit" : "WARNING - a DPV seed address has been hit",
        "ThisCombinationOfCountry_Scheme_SearchEngine_IsNotSupported_OrUserDoesNotHaveAppropriateLicense" : "This combination of country and search engine is not supported, or the user does not have an appropriate licence. [0]",
        "IntegrationInformation_SearchResultWas" : "Integrator information: search result was ",
        "Line1": "Line 1",
        "Line2": "Line 2",
        "Line3": "Line 3",
        "CityOrTown": "City or Town",
        "StateProvideOrCounty": "State, Province or County",
        "ZipOrPostCode" : "Zip or Post Code",
        "Country" : "Country",

        // Refine screen
        "PleaseEnterExactDetails" : "Please enter exact details.",
        "YourSelectionRequiresSecondaryInformation_EnterYourExactDetails" : "Your selection requires apartment, suite or unit information. Please enter your exact address.",
        "YourSelectionCoversARangeOfAddresses_EnterYourExactDetails" : "Your selection covers a range of addresses. Please enter your exact address.",
        "YouEntered" : "You entered ",
        "ButThisAddressIsOutsideOfTheRange" : "but this address is outside of the valid range of addresses. ",
        "PleaseTryAgainOrClickBackAndSelectTheCorrectRange" : "Please try again or click Back and select the correct range.",

        // Final screen
        "FinalCaptureAddress" : "Final address:"
    },
        "VERIFICATION": {
		"Title": "QAS Pro On Demand - Verify an address",
		"Verification": "Verify an address",
		"EnterYourAddress": "Enter your address details",
        "MailingAddress": "Mailing Address",
        "BillingAddress": "Billing Address",
        "AlternateAddress": "Alternate Address",
		"InputAddress1": "Line 1:",
		"InputAddress2": "Line 2:",
		"InputAddress3": "Line 3:",
        "InputCity": "City:",
        "InputState": "State:",
		"InputZip": "ZIP code:",
        "InputCountry": "Country:",
        "ButtonSubmit": "   Submit    ",
        "ButtonClear": "   Clear All    ",
		"OnDemandServerNoAvaialbe": "The Pro On Demand server is currently unavailable. Please try again later.",
        "PromptInteractionRequiredHeader": "<b>We think that your address may be incorrect or incomplete.</b><br />To proceed, please choose one of the options below.",
        "PromptInteractionRequiredPrompt": "We recommend:",
        "PromptInteractionRequiredButton": "Use suggested address",
		"PromptPremisesPartialHeader": "<b>Your apartment, suite or unit may be missing or incorrect</b><br />To proceed, please enter your apartment, suite or unit, or use the address you entered.",
		"PromptPremisesPartialPrompt": "Confirm your apartment, suite or unit number:",
		"PromptPremisesPartialButton": "Confirm building number",
        "PromptPremisesPartialShowPicklist": "Show all potential matches",
		"PromptPremisesPartialInvalidRange": "Apartment, suite or unit number is not within the valid range of addresses",
		"PromptStreetPartialHeader": "<b>Sorry, we don't recognize your house or building number.</b><br />To proceed, please choose from one of the options below.",
		"PromptStreetPartialPrompt": "Confirm your building number:",
        "PromptStreetPartialButton": "Confirm number",
        "PromptStreetPartialShowPicklist": "Show all potential matches",
		"PromptStreetPartialInvalidRange": "Building number is not within the valid range of addresses",
		"PromptDPVPartialHeader": "<b>Sorry, we don't recognize your house or building number.</b><br />To proceed, please choose from one of the options below.",
		"PromptDPVPartialPrompt": "Confirm your building number:",
        "PromptDPVPartialButton": "Confirm number",
		"PromptAptAppendHeader": "<b>Sorry, we don't recognize your house or building number.</b><br />To proceed, please choose from one of the options below.",
		"PromptAptAppendPrompt": "Confirm your building number:",
        "PromptAptAppendButton": "Confirm number",
		"PromptAptAppendNoApt": "Your apartment, suite or unit number is missing",
        "PromptMultipleHeader": "<b>We found more than one match for your address.</b><br />To proceed, please choose one of the options below.",
        "PromptMultiplePrompt": "Our suggested matches:",
        "PromptNoneHeader": "<b>Sorry, we could not find a match for your address.</b><br />To proceed, please choose one of the options below.",
        "PromptRightSidePrompt": "You Entered:",
		"PromptRightSideEdit": "[Edit]",
        "PromptRightSideButton": "Use Address As Entered*",
        "PromptRightSideWarning": "<b>*Your address may be undeliverable</b>",
        "PromptRightSideFinishEdit": "Finish Edit",
        "PromptWaitingMessage": "Please wait, your address is being verified",
        "PromptTitle": "Verify your address details",
        "TheOnDemandServerIsNotAvailable": "The On Demand server is not available",
        "AjaxCallError": "Error with AJAX call. Check to make sure pro web is running correctly."
    }
};


