// Toolbar v 2.1.1
// 28-Aug-13
//
//
var flag = 0;
var tb_300_ad_div = false;

var cmn_network_members = [
    {name: "12ozProphet", link: "12ozProphet.com"},
    {name: "2DopeBoyz", link: "2DopeBoyz.com"},
    {name: "6Magazine", link: "6MagazineOnline.com"},
    {name: "AllHipHop", link: "AllHipHop.com"},
    {name: "AlreadyDigital", link: "AlreadyDigital.com"},
    {name: "AnalogHype", link: "AnalogHype.com"},
    {name: "ApeToGentleman", link: "ApeToGentleman.com"},
    {name: "ArrestedMotion", link: "ArrestedMotion.com"},
    {name: "AudioMack", link: "AudioMack.com"},
    {name: "BallerStatus", link: "Ballerstatus.com"},
    {name: "BallJunkie", link: "BallJunkie.com"},
    {name: "BarbershopConnect", link: "BarbershopConnect.com"},
    {name: "BeatsPerMinute", link: "BeatsPerMinute.com"},
    {name: "BestOfBothOffices", link: "BestOfBothOffices.com"},
    {name: "Boomshots", link: "Boomshots.com"},
    {name: "TheCageDoctors", link: "TheCageDoctors.com"},
    {name: "CelebKicks", link: "CelebKicks.com"},
    {name: "CelebritySchoolPics", link: "CelebritySchoolPics.com"},
    {name: "TheChoosyBeggar", link: "TheChoosyBeggar.com"},
    {name: "Complex", link: "Complex.com"},
    {name: "ComplexVideo", link: "ComplexVideo.com"},
    {name: "ConsequenceOfSound", link: "ConsequenceOfSound.net"},
    {name: "Curated", link: "CuratedMag.com"},
    {name: "DaJaz1", link: "DaJaz1.com"},
    {name: "DatNewCudi", link: "DatNewCudi.com"},
    {name: "DimeMag", link: "DimeMag.com"},
    {name: "DJBooth", link: "DJBooth.net"},
    {name: "DMarge", link: "DMarge.com"},
    {name: "TheDugoutDoctors", link: "TheDugoutDoctors.com"},
    {name: "Earmilk", link: "Earmilk.com"},
    {name: "EgoTripLand", link: "EgoTripLand.com"},
    {name: "FakeShoreDrive", link: "FakeShoreDrive.com"},
    {name: "FreeOnSmash", link: "FreeOnSmash.com"},
    {name: "FreshnessMag", link: "FreshnessMag.com"},
    {name: "GameRant", link: "GameRant.com"},
    {name: "GameRanx", link: "GameRanx.com"},
    {name: "GeekTyrant", link: "GeekTyrant.com"},
    {name: "GetTheBigPicture", link: "GetTheBigPicture.net"},
    {name: "HighSchoolHoop", link: "HighSchoolHoop.com"},
    {name: "HighSnobette", link: "HighSnobette.com"},
    {name: "HighSnobiety", link: "HighSnobiety.com"},
    {name: "HipHopDX", link: "HipHopDX.com"},
    {name: "HollywoodHeavy", link: "HollywoodHeavy.com"},
    {name: "Hookit", link: "Hookit.com"},
    {name: "TheHoopDoctors", link: "TheHoopDoctors.com"},
    {name: "HypeVideos", link: "HypeVideos.com"},
    {name: "illRoots", link: "illRoots.com"},
    {name: "JordansDaily", link: "JordansDaily.com"},
    {name: "JapaneseSportCars", link: "JapaneseSportCars.com"},
    {name: "Juxtapoz", link: "Juxtapoz.com"},
    {name: "Karmaloop", link: "Karmaloop.com"},
    {name: "KarmaloopTV", link: "KarmaloopTV.com"},
    {name: "KicksDeals", link: "KicksDeals.com"},
    {name: "KicksOnFire", link: "KicksOnFire.com"},
    {name: "Kineda", link: "Kineda.com"},
    {name: "LakersNation", link: "LakersNation.com"},
    {name: "LilWayneHQ", link: "LilWayneHQ.com"},
    {name: "LiveMixTapes", link: "LiveMixTapes.com"},
    {name: "LX-Goods", link: "LX-Goods.com"},
    {name: "MaestroKnows", link: "MaestroKnows.com"},
    {name: "TheMaskedGorilla", link: "TheMaskedGorilla.com"},
    {name: "MassAppeal", link: "MassAppeal.com"},
    {name: "MechanicalDummy", link: "MechanicalDummy.com"},
    {name: "MissInfo", link: "MissInfo.tv"},
    {name: "MoeJackson", link: "MoeJackson.com"},
    {name: "NahRight", link: "NahRight.com"},
    {name: "NiceKicks", link: "NiceKicks.com"},
    {name: "Nxus", link: "Nxus.co"},
    {name: "TheOriginalWinger", link: "TheOriginalWinger.com"},
    {name: "Pastapadre", link: "Pastapadre.com"},
    {name: "PigeonsAndPlanes", link: "PigeonsAndPlanes.com"},
    {name: "ThePigSkinDoctors", link: "ThePigSkinDoctors.com"},
    {name: "PlanetXbox360", link: "PlanetXbox360.com"},
    {name: "PlanetPlaystation", link: "PlanetPlaystation.com"},
    {name: "PlaystationUniversity", link: "PlaystationUniversity.com"},
    {name: "PorHomme", link: "PorHomme.com"},
    {name: "ThePuckDoctors", link: "ThePuckDoctors.com"},
    {name: "RefinedHype", link: "RefinedHype.com"},
    {name: "RadCollector", link: "RadCollector.com"},
    {name: "RawrDenim", link: "RawrDenim.com"},
    {name: "RunTheTrap", link: "RunTheTrap.com"},
    {name: "Sarcasticgamer", link: "Sarcasticgamer.com"},
    {name: "Selectism", link: "Selectism.com"},
    {name: "SheridanHoops", link: "SheridanHoops.com"},
    {name: "TheShoeGame", link: "TheShoeGame.com"},
    {name: "Shoryuken", link: "Shoryuken.com"},
    {name: "SlamxHype", link: "SlamxHype.com"},
    {name: "SneakerNews", link: "SneakerNews.com"},
    {name: "SneakerFreaker", link: "SneakerFreaker.com"},
    {name: "SneakerWareApp", link: "SneakerWareApp.com"},
    {name: "SneakerWatch", link: "SneakerWatch.com"},
    {name: "StupidDope", link: "StupidDope.com"},
    {name: "StyleEngine", link: "StyleEngine.com"},
    {name: "TotalProSports", link: "TotalProSports.com"},
    {name: "UnabashedlyPrep", link: "UnabashedlyPrep.com"},
    {name: "UpscaleHype", link: "UpscaleHype.com"},
    {name: "VibeToThis", link: "VibeToThis.com"},
    {name: "VideoGoneViral", link: "VideoGoneViral.com"},
    {name: "VladTV", link: "VladTV.com"},
    {name: "WizardWorld", link: "WizardWorld.com"},
    {name: "WorldOfDance", link: "WorldOfDance.com"},
    {name: "YouHeardThatNew", link: "YouHeardThatNew.com"},
    {name: "YoungMoneyHQ", link: "YoungMoneyHQ.com"},
    {name: "Ranker", link: "Ranker.com"},
    {name: "SoleCollector", link: "SoleCollector.com"},
    {name: "InfiniteLegRoom", link: "InfiniteLegRoom.com"},
    {name: "DoAndroidsDance", link: "DoAndroidsDance.com"},
    {name: "RareSoul", link: "RareSoul.com"},
    {name: "HiConsumption", link: "HiConsumption.com"},
    {name: "HipsterRunoff", link: "HipsterRunoff.com"},
    {name: "Green-Label", link: "Green-Label.com"},
    {name: "BehindTheHustle", link: "BehindTheHustle.com"},
    {name: "YouGottaEatThis", link: "YouGottaEatThis.com"},
    {name: "SuperGlued", link: "SuperGlued.com"}
];

var cmn_style_network_members = [
    {name: "ApeToGentleman", link: "ApeToGentleman.com"},
    {name: "ArrestedMotion", link: "ArrestedMotion.com"},
    {name: "Complex", link: "Complex.com/style"},
    {name: "Curated", link: "CuratedMag.com"},
    {name: "DMarge", link: "DMarge.com"},
    {name: "FreshnessMag", link: "FreshnessMag.com"},
    {name: "Green-Label", link: "Green-Label.com"},
    {name: "HighSnobette", link: "HighSnobette.com"},
    {name: "HighSnobiety", link: "HighSnobiety.com"},
    {name: "PorHomme", link: "PorHomme.com"},
    {name: "RadCollector", link: "RadCollector.com"},
    {name: "RawrDenim", link: "RawrDenim.com"},
    {name: "Selectism", link: "Selectism.com"},
    {name: "SlamxHype", link: "SlamxHype.com"},
    {name: "HiConsumption", link: "HiConsumption.com"},
    {name: "Green-Label", link: "Green-Label.com"}
];



var hoverquick = false;
var tb_remain_open = false;
var tb_over = true;

//  Adds custom client impression trackers
function cmnImpressionTracker() {

// The impression tracker tracker would go hear to be added to the body
//var imp_tracker = '';

//$tb('body').append(imp_tracker);

}



var $tb = jQuery.noConflict(true);
// Do something with jQuery

var cmn_img_path = 'http://cdnl.complex.com/toolbar/images/v1/';
var btn_rollover_color = cmn_config.btn_rollover_color;
var btn_down_color = cmn_config.btn_down_color;
var link_mouse_over_color = cmn_config.link_mouse_over_color;
var tooltip_timeout = cmn_config.tooltip_timeout;
var tooltip_predelay = cmn_config.tooltip_predelay;
var track_src = cmn_config.track_src;
var cmn_close_all_boxes_timer = cmn_config.cmn_close_all_boxes_timer;

var current_background_color;


//
// Functions for CMN Network Box
//


//
// Function to remove site from listing
cmn_network_members.remove = function(elem) {
	num_items = this.length;
	var index;
	for (var x=0; x<num_items; x++) {
	    index = this[x].name.indexOf(elem);
	    if (index !== -1) {
	            this.splice(x, 1);
		    break;
	    }
	}
    };



function cmnBtnHoverOver(obj) {
    this.style.backgroundColor = btn_rollover_color;
}
function cmnBtnHoverOut(obj) {
    this.style.backgroundColor = current_background_color;
}

function cmnTBHoverOver(obj) {
    tb_over = true;
    clearTimeout(close_all_boxes_timeout);
}
function cmnTBHoverOut(obj) {
    tb_over = false;
}


// NETWORK BTN ROLLOVER
function cmnNetworkBtnOver(obj) {
	document.getElementById('arrow_network_2').style.display = "none";
	document.getElementById('arrow_network').style.display = "block";
}
function cmnNetworkBtnOut(obj){
	if (document.getElementById("cmn_toolbar_network").pressed == false && document.getElementById("cmn_toolbar_newsfeed").pressed == false && document.getElementById("cmn_toolbar_share").pressed == false && document.getElementById("cmn_toolbar_complextv").pressed == false) {
		document.getElementById('arrow_network').style.display = "none";
	} else {
		if (document.getElementById("cmn_toolbar_network").pressed == true) {
			document.getElementById('arrow_network').style.display = "block";
			document.getElementById('arrow_network_2').style.display = "none";
		} else {
		document.getElementById('arrow_network_2').style.display = "block";
		document.getElementById('arrow_network').style.display = "none";
		}
	}
}

// NEWSFEED BTN ROLLOVER
function cmnNewsfeedBtnOver(obj) {
	document.getElementById('cmn_toolbar_newsfeed').style.backgroundColor = btn_rollover_color;
	document.getElementById('arrow_newsfeed_2').style.display = "none";
	document.getElementById('arrow_newsfeed').style.display = "block";
}

function cmnNewsfeedBtnOut(obj){
	document.getElementById('cmn_toolbar_newsfeed').style.backgroundColor = current_background_color;
	if (document.getElementById("cmn_toolbar_network").pressed == false && document.getElementById("cmn_toolbar_newsfeed").pressed == false && document.getElementById("cmn_toolbar_share").pressed == false && document.getElementById("cmn_toolbar_complextv").pressed == false) {
		document.getElementById('arrow_newsfeed').style.display = "none";
	} else {
		document.getElementById('arrow_newsfeed_2').style.display = "block";
		document.getElementById('arrow_newsfeed').style.display = "none";
	}
}

// SHARE BTN ROLLOVER
function cmnShareBtnOver(obj) {
	document.getElementById('arrow_share_2').style.display = "none";
	document.getElementById('arrow_share').style.display = "block";
}

function cmnShareBtnOut(obj){
	if (document.getElementById("cmn_toolbar_network").pressed == false && document.getElementById("cmn_toolbar_newsfeed").pressed == false && document.getElementById("cmn_toolbar_share").pressed == false && document.getElementById("cmn_toolbar_complextv").pressed == false) {
		document.getElementById('arrow_share').style.display = "none";
	} else {
		if (document.getElementById("cmn_toolbar_share").pressed == true) {
			document.getElementById('arrow_share').style.display = "block";
			document.getElementById('arrow_share_2').style.display = "none";
		} else {
		document.getElementById('arrow_share_2').style.display = "block";
		document.getElementById('arrow_share').style.display = "none";
		}
	}
}

// COMPLEXTV BTN ROLLOVER
function cmnComplextvBtnOver(obj) {
    document.getElementById('arrow_complextv_2').style.display = "none";
    document.getElementById('arrow_complextv').style.display = "block";
}

function cmnComplextvBtnOut(obj){
    if (document.getElementById("cmn_toolbar_network").pressed == false && document.getElementById("cmn_toolbar_newsfeed").pressed == false && document.getElementById("cmn_toolbar_share").pressed == false && document.getElementById("cmn_toolbar_complextv").pressed == false) {
        document.getElementById('arrow_complextv').style.display = "none";
    } else {
        if (document.getElementById("cmn_toolbar_complextv").pressed == true) {
            document.getElementById('arrow_complextv').style.display = "block";
            document.getElementById('arrow_complextv_2').style.display = "none";
        } else {
        document.getElementById('arrow_complextv_2').style.display = "block";
        document.getElementById('arrow_complextv').style.display = "none";
        }
    }
}

// NETWORK BOX FUNCTIONS

function toggleMediaNetworkBox(obj) {

    if (this.pressed == true) {
	tb_remain_open = false;
	cmnNetworkBoxClose();
	destroytb300ad();
    }
    else {
	tb_remain_open = true;
	tb300ad();
	closeAllOtherBoxes();
	cmnNetworkBoxOpen();
    }

 }

var cmn_network_screenshot_cache;
// NETWORK BOX OPEN

function cmnNetworkBoxOpen() {
	// adjust network arrow by shiffing +1
	switch (cmnunt_silo){
		case 's_sne':
			$tb('#arrow_network').css('left','161px');
			break;
		case 's_spo':
			$tb('#arrow_network').css('left','151px');
			break;
		case 's_mus':
			$tb('#arrow_network').css('left','143px');
			break;
		case 's_gam':
			$tb('#arrow_network').css('left','151px');
			break;
		default:
			break;
	}
	// end
	adjustToolbarPanel();

	document.getElementById('overtblogox').style.display = "none";

	_gaq.push(['c._trackEvent', 'Toolbar', 'NetworkBox', 'Open']); //event tracking Network Open

	if (document.getElementById("cmn_toolbar_network").pressed != true) {

		$tb('#cmn_toolbar_network').css('background-color', btn_down_color);
		$tb('#cmn_toolbar_newsfeed, #cmn_toolbar_share, #cmn_toolbar_complextv').css('background-color', current_background_color);

		document.getElementById("cmn_toolbar_network").pressed = true;

		$tb("#cmn_toolbar_network").unbind('mouseenter', cmnBtnHoverOver);
		$tb("#cmn_toolbar_network").unbind('mouseleave', cmnBtnHoverOut);

		$tb("#cmn_tb_wrapper").mouseenter(cmnTBHoverOver);
		$tb("#cmn_network_box").mouseenter(cmnTBHoverOver);
		$tb("#cmn_tb_wrapper").mouseleave(cmnTBHoverOut);

		$tb('html').click(function() {
			var display = $tb('#siloContainer').css('display');
			if ((tb_over == false)&&($tb('#siloContainer').css('display')=='none') ){
				cmnNetworkBoxClose();
			}
		});

        $tb('#tb_expand_content').animate({'height':250},200).removeClass('cmn_complextv_content');
		$tb('#cmn_tb_wrapper').animate({
		    bottom: "0px",
            height: 288
		},
		{
		    duration: 200,
		    queue: true,
		    complete: function() {

			$tb('#cmn_network_box').css('display', 'block');
			$tb('#cmn_network_box').css('z-index', '2147483648');

			//Network Arrow
			logoSneakers();
			$tb('#arrow_network').css({
			'display':'block',
			'-webkit-transform':'rotate(90deg)',
			'-moz-transform':'rotate(90deg)',
			'-o-transform':'rotate(90deg)',
			'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=1)'
			});

			$tb('#arrow_network_2').css('display','none');

			//Newsfeed Arrow
			$tb('#arrow_newsfeed').css({
				'left':'6px',
				'display':'none',
				'-moz-transform':'rotate(90deg)',
				'-webkit-transform':'rotate(90deg)',
				'-o-transform':'rotate(90deg)',
				'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=1)'
			});
			$tb('#arrow_newsfeed_2').css('display','block');

			//Share Arrow
			$tb('#arrow_share').css({
				'left':'6px',
				'display':'none',
				'-moz-transform':'rotate(90deg)',
				'-webkit-transform':'rotate(90deg)',
				'-o-transform':'rotate(90deg)',
				'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=1)'
			});
			$tb('#arrow_share_2').css('display','block');

            $tb('#arrow_complextv').css({
                'left':'6px',
                'display':'none',
                '-moz-transform':'rotate(90deg)',
                '-webkit-transform':'rotate(90deg)',
                '-o-transform':'rotate(90deg)',
                'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=1)'
            });
            $tb('#arrow_complextv_2').css('display','block');

			if (!cmn_network_screenshot_cache) {
			    cmn_network_screenshot_cache = new Array();
			    for (var x = 0; x < cmn_network_members.length; x++) {
				cmn_network_screenshot_cache[x] = new Image(152, 98);
			    }
			}
		    }
		});
		$tb('#cmn_network_box').animate({
		    bottom: "0px"
		},
		{
		    duration: 200,
		    queue: true,
		    complete: function() {
				document.getElementById('overtblogox').style.display = "none";
		    }
		});
        cmn_closeAllStop = false;
		closeAllBoxesTimer();
    }
}


// NETWORK BOX CLOSE

function cmnNetworkBoxClose() {

	_gaq.push(['c._trackEvent', 'Toolbar', 'NetworkBox', 'Close']); //event tracking Network Close

        if (document.getElementById("cmn_toolbar_network").pressed == true) {

	$tb('#cmn_toolbar_network').css('background-color', current_background_color);

	document.getElementById("cmn_toolbar_network").pressed = false;

	$tb('#cmn_network_box').css('display','none');
	$tb('#cmn_wrap').css('position', 'relative');

	// Network Arrow
	$tb('#arrow_network').css('display','none');
	//$tb('#arrow_network').css('left','151px');
	//$tb('#arrow_network').css('left','166px');
	logoSneakers();
	/*if(cmnunt_silo != 's_sne'){
		$tb('#arrow_network').css('left','152px');
	}
	else{
		$tb('#arrow_network').css('left','166px');
	}*/
	$tb('#arrow_network').css({
		'display':'block',
		'-webkit-transform':'rotate(-90deg)',
		'-moz-transform':'rotate(-90deg)',
		'-o-transform':'rotate(-90deg)',
		'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)'
	});
	$tb('#arrow_network_2').css('display','none');

	//Newsfeed Arrow
	$tb('#arrow_newsfeed').css({
		'left':'6px',
		'display':'none',
		'-moz-transform':'rotate(-90deg)',
		'-webkit-transform':'rotate(-90deg)',
		'-o-transform':'rotate(-90deg)',
		'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)'
	});
	$tb('#arrow_newsfeed_2').css('display','none');

	//Share Arrow
	$tb('#arrow_share').css({
		'left':'6px',
		'display':'none',
		'-moz-transform':'rotate(-90deg)',
		'-webkit-transform':'rotate(-90deg)',
		'-o-transform':'rotate(-90deg)',
		'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)'
		});
	$tb('#arrow_share_2').css('display','none');

    $tb('#arrow_complextv').css({
        'left':'6px',
        'display':'none',
        '-moz-transform':'rotate(-90deg)',
        '-webkit-transform':'rotate(-90deg)',
        '-o-transform':'rotate(-90deg)',
        'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)'
        });
    $tb('#arrow_complextv_2').css('display','none');

	$tb("#cmn_toolbar_network").bind('mouseenter', cmnBtnHoverOver);
	$tb("#cmn_toolbar_network").bind('mouseleave', cmnBtnHoverOut);

	// Close siloContainer
	$tb('#siloContainer').css({'display':'none'});

    $tb('#tb_expand_content').animate({'height':250},200).removeClass('cmn_complextv_content');
	if (tb_remain_open == false){
	$tb('#cmn_tb_wrapper').animate({
	    bottom: "-252px"
	},
	{
	    duration: 200,
	    queue: true,
	    complete: function() {
			document.getElementById('overtblogox').style.display = "block";
	    }
	});
	}
    }
}



// NEWSFEED BOX FUNCTIONS

function toggleNewsfeedBox() {

   if (this.pressed == true) {
	tb_remain_open = false;
	cmnNewsfeedBoxClose();
	destroytb300ad();
    }
    else {
	tb_remain_open = true;
	tb300ad();
	closeAllOtherBoxes();
	cmnNewsfeedBoxOpen();
    }
}


// NEWSFEED BOX OPEN

function cmnNewsfeedBoxOpen() {
	document.getElementById('overtblogox').style.display = "none";
	_gaq.push(['c._trackEvent', 'Toolbar', 'NewsFeedBox', 'Open']); //event tracking News Feed Box Open

	if (document.getElementById("cmn_toolbar_newsfeed").pressed != true) {

	$tb('#cmn_toolbar_newsfeed').css('background-color', btn_down_color);
	$tb('#cmn_toolbar_network, #cmn_toolbar_share, #cmn_toolbar_complextv').css('background-color', current_background_color);

	$tb('#cmn_toolbar_newsfeed').tooltip().hide();

	document.getElementById("cmn_toolbar_newsfeed").pressed = true;

	$tb("#cmn_newsfeed_btn").unbind('mouseenter', cmnNewsfeedBtnOver);
	$tb("#cmn_newsfeed_btn").unbind('mouseleave', cmnNewsfeedBtnOut);

	$tb("#cmn_tb_wrapper").mouseenter(cmnTBHoverOver);
	$tb("#cmn_newsfeed_box").mouseenter(cmnTBHoverOver);
	$tb("#cmn_tb_wrapper").mouseleave(cmnTBHoverOut);

	$tb('html').click(function() {
		if (tb_over == false) {
			cmnNewsfeedBoxClose();
		}
	});

    $tb('#tb_expand_content').animate({'height':250},200).removeClass('cmn_complextv_content');
	$tb('#cmn_tb_wrapper').animate({
	    bottom: "0px",
        height: 288
	},
	{
	    duration: 200,
	    queue: true,
	    complete: function() {

		$tb('#cmn_newsfeed_box').css('display', 'block');
		$tb('#cmn_newsfeed_box').css('z-index', '2147483648');

		//Newsfeed Arrow
		$tb('#arrow_newsfeed').css({
			'left':'6px',
			'display':'block',
			'-webkit-transform':'rotate(90deg)',
			'-moz-transform':'rotate(90deg)',
			'-o-transform':'rotate(90deg)',
			'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=1)'
		});
		$tb('#arrow_network_2').css('display','block');

		//Network Arrow
		//$tb('#arrow_network').css('left','151px');
		$tb('#arrow_network').css({
			'-webkit-transform':'rotate(90deg)',
			'-moz-transform':'rotate(90deg)',
			'-o-transform':'rotate(90deg)',
			'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=1)'
		});
		$tb('#arrow_network_2').css('display','block');

		//Share Arrow
		$tb('#arrow_share').css({
			'left':'6px',
			'-webkit-transform':'rotate(90deg)',
			'-moz-transform':'rotate(90deg)',
			'-o-transform':'rotate(90deg)',
			'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=1)'
		});
		$tb('#arrow_share_2').css('display','block');

        $tb('#arrow_complextv').css({
            'left':'6px',
            '-webkit-transform':'rotate(90deg)',
            '-moz-transform':'rotate(90deg)',
            '-o-transform':'rotate(90deg)',
            'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=1)'
        });
        $tb('#arrow_complextv_2').css('display','block');
        }
	});

	$tb('#cmn_newsfeed_box').animate({
	    bottom: "0px"
	},
	{
	    duration: 200,
	    queue: true,
	    complete: function() {
		document.getElementById('overtblogox').style.display = "none";

	    }
	});
    cmn_closeAllStop = false;
	$tb("#cmn_tb_wrapper").mouseleave(closeAllBoxesTimer);
    }
}


// NEWSFEED BOX CLOSE

function cmnNewsfeedBoxClose() {

	_gaq.push(['c._trackEvent', 'Toolbar', 'NewsFeedBox', 'Close']); //event tracking News Feed Box Close

	if (document.getElementById("cmn_toolbar_newsfeed").pressed == true) {

	$tb('#cmn_toolbar_newsfeed').css('background-color', current_background_color);
	document.getElementById("cmn_toolbar_newsfeed").pressed = false;

	$tb('#cmn_newsfeed_box').css('display','none');

	// Network Arrow
	//$tb('#arrow_network').css('left','151px');
	$tb('#arrow_network').css({
		'display':'none',
		'-webkit-transform':'rotate(-90deg)',
		'-moz-transform':'rotate(-90deg)',
		'-o-transform':'rotate(-90deg)',
		'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)'
	});
	$tb('#arrow_network_2').css('display','none');

	// Newsfeed Arrow
	$tb('#arrow_newsfeed').css({
		'left':'0px',
		'display':'none',
		'-webkit-transform':'rotate(-90deg)',
		'-moz-transform':'rotate(-90deg)',
		'-o-transform':'rotate(-90deg)',
		'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)'
	});
	$tb('#arrow_newsfeed_2').css('display','none');

	// Share Arrow
	$tb('#arrow_share').css({
		'left':'0px',
		'display':'none',
		'-webkit-transform':'rotate(-90deg)',
		'-moz-transform':'rotate(-90deg)',
		'-o-transform':'rotate(-90deg)',
		'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)'
	});
	$tb('#arrow_share_2').css('display','none');

    $tb('#arrow_complextv').css({
        'left':'0px',
        'display':'none',
        '-webkit-transform':'rotate(-90deg)',
        '-moz-transform':'rotate(-90deg)',
        '-o-transform':'rotate(-90deg)',
        'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)'
    });
    $tb('#arrow_complextv_2').css('display','none');

	$tb("#cmn_newsfeed_btn").bind('mouseenter', cmnNewsfeedBtnOver);
	$tb("#cmn_newsfeed_btn").bind('mouseleave', cmnNewsfeedBtnOut);

    $tb('#tb_expand_content').animate({'height':250},200);

	if (tb_remain_open == false) {

	$tb('#cmn_tb_wrapper').animate({
	    bottom: "-252px"
	},
	{
	    duration: 200,
	    queue: true,
	    complete: function() {
		document.getElementById('overtblogox').style.display = "block";

	    }
	});
	}
    }
}



// SHARE BOX FUNCTIONS

function toggleShareBox() {

   if (this.pressed == true) {
	tb_remain_open = false;
	cmnShareBoxClose();
	destroytb300ad();
    }
    else {
	tb_remain_open = true;
	tb300ad();
	closeAllOtherBoxes();
	cmnShareBoxOpen();
    }
}


// SHARE BOX OPEN

function cmnShareBoxOpen() {
	document.getElementById('overtblogox').style.display = "none";
	_gaq.push(['c._trackEvent', 'Toolbar', 'ShareBox', 'Open']); //event tracking Network Open

	if (document.getElementById("cmn_toolbar_share").pressed != true) {

	$tb('#cmn_toolbar_share').css('background-color', btn_down_color);
	$tb('#cmn_toolbar_network, #cmn_toolbar_newsfeed, #cmn_toolbar_complextv').css('background-color', current_background_color);

	document.getElementById("cmn_toolbar_share").pressed = true;
	$tb('#cmn_toolbar_share').tooltip().hide();

	$tb("#cmn_toolbar_share").unbind('mouseenter', cmnBtnHoverOver);
	$tb("#cmn_toolbar_share").unbind('mouseleave', cmnBtnHoverOut);

	$tb("#cmn_tb_wrapper").mouseenter(cmnTBHoverOver);
	$tb("#cmn_share_box").mouseenter(cmnTBHoverOver);
	$tb("#cmn_tb_wrapper").mouseleave(cmnTBHoverOut);

	$tb('html').click(function() {
		if (tb_over == false) {
			cmnShareBoxClose();
		}
	});

	document.getElementById("qlink").value = window.location.href;

	$tb('#tb_expand_content').animate({'height':250},200).removeClass('cmn_complextv_content');
	$tb('#cmn_tb_wrapper').animate({
	    bottom: "0px",
        height: 288
	},
	{
	    duration: 200,
	    queue: true,
	    complete: function() {

		$tb('#cmn_share_box').css('display', 'block');
		$tb('#cmn_share_box').css('z-index', '2147483648');

		//Share Arrow
		$tb('#arrow_share').css({
			'left':'6px',
			'display':'block',
			'-webkit-transform':'rotate(90deg)',
			'-moz-transform':'rotate(90deg)',
			'-o-transform':'rotate(90deg)',
			'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=1)'
		});

		//Network Arrow
		//$tb('#arrow_network').css('left','151px');
		$tb('#arrow_network').css({
			'-webkit-transform':'rotate(90deg)',
			'-moz-transform':'rotate(90deg)',
			'-o-transform':'rotate(90deg)',
			'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=1)'
		});
		$tb('#arrow_network_2').css('display','block');

		//Newsfeed Arrow
		$tb('#arrow_newsfeed').css({
			'left':'6px',
			'-webkit-transform':'rotate(90deg)',
			'-moz-transform':'rotate(90deg)',
			'-o-transform':'rotate(90deg)',
			'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=1)'
		});
		$tb('#arrow_newsfeed_2').css('display','block');

        $tb('#arrow_complextv').css({
            '-webkit-transform':'rotate(90deg)',
            '-moz-transform':'rotate(90deg)',
            '-o-transform':'rotate(90deg)',
            'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=1)'
        });
        $tb('#arrow_complextv_2').css('display','block');
        }
	});
	$tb('#cmn_share_box').animate({
	    bottom: "0px"
	},
	{
	    duration: 200,
	    queue: true,
	    complete: function() {
		document.getElementById('overtblogox').style.display = "none";
	    }
	});

    cmn_closeAllStop = false;
	$tb("#cmn_tb_wrapper").mouseleave(closeAllBoxesTimer);
    }

}


// SHARE BOX CLOSE

function cmnShareBoxClose() {

	_gaq.push(['c._trackEvent', 'Toolbar', 'ShareBox', 'Close']); //event tracking Network Close

        if (document.getElementById("cmn_toolbar_share").pressed == true) {
	$tb('#cmn_toolbar_share').css('background-color', current_background_color);
	document.getElementById("cmn_toolbar_share").pressed = false;

	$tb('#cmn_share_box').css('display','none');

	// Network Arrow
	//$tb('#arrow_network').css('left','151px');
	$tb('#arrow_network').css({
		'display':'none',
		'-webkit-transform':'rotate(-90deg)',
		'-moz-transform':'rotate(-90deg)',
		'-o-transform':'rotate(-90deg)',
		'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)'
	});
	$tb('#arrow_network_2').css('display','none');

	// Newsfeed Arrow
	$tb('#arrow_newsfeed').css({
		'left':'0px',
		'display':'none',
		'-webkit-transform':'rotate(-90deg)',
		'-moz-transform':'rotate(-90deg)',
		'-o-transform':'rotate(-90deg)',
		'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)'
	});
	$tb('#arrow_newsfeed_2').css('display','none');

	// Share Arrow
	$tb('#arrow_share').css({
		'left':'0px',
		'display':'none',
		'-webkit-transform':'rotate(-90deg)',
		'-moz-transform':'rotate(-90deg)',
		'-o-transform':'rotate(-90deg)',
		'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)'
	});
	$tb('#arrow_share_2').css('display','none');

    // Complex TV Arrow
    $tb('#arrow_complextv').css({
        'left':'0px',
        'display':'none',
        '-webkit-transform':'rotate(-90deg)',
        '-moz-transform':'rotate(-90deg)',
        '-o-transform':'rotate(-90deg)',
        'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)'
    });
    $tb('#arrow_complextv_2').css('display','none');

	$tb("#cmn_toolbar_share").bind('mouseenter', cmnBtnHoverOver);
	$tb("#cmn_toolbar_share").bind('mouseleave', cmnBtnHoverOut);

    $tb('#tb_expand_content').animate({'height':250},200).removeClass('cmn_complextv_content');
	if (tb_remain_open == false){
	$tb('#cmn_tb_wrapper').animate({
	    bottom: "-252px"
	},
	{
	    duration: 200,
	    queue: true,
	    complete: function() {
			document.getElementById('overtblogox').style.display = "block";
	    }
	});

	}
    }
}


// COMPLEX TV BOX FUNCTIONS

function toggleComplextvBox() {
   if (this.pressed == true) {
        tb_remain_open = false;
        cmnComplextvBoxClose();
        destroytb300ad();
    }
    else {
        tb_remain_open = true;
        tb300ad();
        closeAllOtherBoxes();
        cmnComplextvBoxOpen();
    }
}


// COMPLEX TV BOX OPEN

function cmnComplextvBoxOpen() {
    document.getElementById('overtblogox').style.display = "none";
    _gaq.push(['c._trackEvent', 'Toolbar', 'ComplexTVBox', 'Open']); //event tracking Network Open

    if (document.getElementById("cmn_toolbar_complextv").pressed != true) {

        $tb('#cmn_toolbar_complextv').css('background-color', btn_down_color);
        $tb('#cmn_toolbar_network, #cmn_toolbar_newsfeed, #cmn_toolbar_share').css('background-color', current_background_color);

        document.getElementById("cmn_toolbar_complextv").pressed = true;
        // $tb('#cmn_toolbar_complextv').tooltip().hide();

        $tb("#cmn_toolbar_complextv").unbind('mouseenter', cmnBtnHoverOver);
        $tb("#cmn_toolbar_complextv").unbind('mouseleave', cmnBtnHoverOut);

        $tb("#cmn_tb_wrapper").mouseenter(cmnTBHoverOver);
        $tb("#cmn_complextv_box").mouseenter(cmnTBHoverOver);
        $tb("#cmn_tb_wrapper").mouseleave(cmnTBHoverOut);

        $tb('html').click(function() {
            if (tb_over == false) {
                cmnComplextvBoxClose();
            }
        });

        document.getElementById("qlink").value = window.location.href;

        $tb('#tb_expand_content').animate({'height':335},200).addClass('cmn_complextv_content');
        $tb('#cmn_tb_wrapper').animate({
            bottom: "0px",
            height: "423px"
        },
        {
            duration: 200,
            queue: true,
            complete: function() {
                $tb('#cmn_complextv_box').css('display', 'block');
                $tb('#cmn_complextv_box').css('z-index', '2147483648');

                //Complex TV Arrow
                $tb('#arrow_complextv').css({
                    'left':'6px',
                    'display':'block',
                    '-webkit-transform':'rotate(90deg)',
                    '-moz-transform':'rotate(90deg)',
                    '-o-transform':'rotate(90deg)',
                    'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=1)'
                });

                //Network Arrow
                //$tb('#arrow_network').css('left','151px');
                $tb('#arrow_network').css({
                    '-webkit-transform':'rotate(90deg)',
                    '-moz-transform':'rotate(90deg)',
                    '-o-transform':'rotate(90deg)',
                    'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=1)'
                });
                $tb('#arrow_network_2').css('display','block');

                //Newsfeed Arrow
                $tb('#arrow_newsfeed').css({
                    'left':'6px',
                    '-webkit-transform':'rotate(90deg)',
                    '-moz-transform':'rotate(90deg)',
                    '-o-transform':'rotate(90deg)',
                    'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=1)'
                });
                $tb('#arrow_newsfeed_2').css('display','block');

                //Share Arrow
                $tb('#arrow_share').css({
                    '-webkit-transform':'rotate(90deg)',
                    '-moz-transform':'rotate(90deg)',
                    '-o-transform':'rotate(90deg)',
                    'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=1)'
                });
                $tb('#arrow_share_2').css('display','block');
            }
        });
        if ($tb('#cmn_tb_wrapper').height() == 288) { $tb('#cmn_tb_wrapper').animate({'height':423},200); }
        $tb('#cmn_complextv_box').animate({
            bottom: "0px"
        },
        {
            duration: 200,
            queue: true,
            complete: function() {
                if ($tb('#cmn_tb_wrapper').height() != 288) { $tb('#cmn_tb_wrapper').animate({'height':423},25); }
                document.getElementById('overtblogox').style.display = "none";
            }
        });

        cmn_closeAllStop = true;
        $tb("#cmn_tb_wrapper").mouseleave(closeAllBoxesTimer);

        //Load Player
        cmn_complextv.load();
    }
}


// COMPLEX TV BOX CLOSE

function cmnComplextvBoxClose() {

    _gaq.push(['c._trackEvent', 'Toolbar', 'ComplexTVBox', 'Close']); //event tracking Network Close

    if (document.getElementById("cmn_toolbar_complextv").pressed == true) {
        $tb('#cmn_toolbar_complextv').css('background-color', current_background_color);
        document.getElementById("cmn_toolbar_complextv").pressed = false;

        $tb('#cmn_complextv_box').css('display','none');

        // Network Arrow
        //$tb('#arrow_network').css('left','151px');
        $tb('#arrow_network').css({
            'display':'none',
            '-webkit-transform':'rotate(-90deg)',
            '-moz-transform':'rotate(-90deg)',
            '-o-transform':'rotate(-90deg)',
            'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)'
        });
        $tb('#arrow_network_2').css('display','none');

        // Newsfeed Arrow
        $tb('#arrow_newsfeed').css({
            'left':'0px',
            'display':'none',
            '-webkit-transform':'rotate(-90deg)',
            '-moz-transform':'rotate(-90deg)',
            '-o-transform':'rotate(-90deg)',
            'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)'
        });
        $tb('#arrow_newsfeed_2').css('display','none');

        // Share Arrow
        $tb('#arrow_share').css({
            'left':'0px',
            'display':'none',
            '-webkit-transform':'rotate(-90deg)',
            '-moz-transform':'rotate(-90deg)',
            '-o-transform':'rotate(-90deg)',
            'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)'
        });
        $tb('#arrow_share_2').css('display','none');

        // Complex TV Arrow
        $tb('#arrow_complextv').css({
            'left':'0px',
            'display':'none',
            '-webkit-transform':'rotate(-90deg)',
            '-moz-transform':'rotate(-90deg)',
            '-o-transform':'rotate(-90deg)',
            'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)'
        });
        $tb('#arrow_complextv_2').css('display','none');

        $tb("#cmn_toolbar_complextv").bind('mouseenter', cmnBtnHoverOver);
        $tb("#cmn_toolbar_complextv").bind('mouseleave', cmnBtnHoverOut);
        $tb('#tb_expand_content').animate({'height':250},200).removeClass('cmn_complextv_content');

        if (tb_remain_open == false){
            $tb('#cmn_tb_wrapper').animate({
                bottom: "-252px",
                height: "288px"
            },
            {
                duration: 200,
                queue: true,
                complete: function() {
                    document.getElementById('overtblogox').style.display = "block";
                }
            });
        }

        cmn_complextv.close();
    }
}

var cmn_closeAllStop = false;

var cmn_complextv = {
    fileID: '',
    fileTitle: '',
    player: '',
    adfq: undefined,
    adtype: undefined,
    addefault: undefined,
    adset: undefined,
    advast: {},
    data: {},

    init: function() {

        WebFontConfig = {
            google: { families: [ 'Muli:300:latin' ] }
        };

        //Load Playlist
        var wf = document.createElement('script');
            wf.src = '//cdn.complexmedianetwork.com/cdn/toolbar/complextv/complextv.js';
            wf.type = 'text/javascript';
        var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(wf, s);
            wf.onload = function() {

                if (typeof(cmn_complextv.data.json[0]) == "undefined") { cmn_complextv.data.json = [cmn_complextv.data.json]; }
                cmn_complextv.fileID = cmn_complextv.data.json[0]['embed_code'];
                cmn_complextv.fileTitle = cmn_complextv.data.json[0]['name'];

                $tb('#cmn_complextv_box').append('<div id="cmn_complextv_video"></div><div id="cmn_complextv_title">'+cmn_complextv.fileTitle+'</div><div id="cmn_complextv_link"><a href="http://complex.com/tv/" target="_blank">More on: <span></span></a></div>');

                $tb('#cmn_complextv_link').live('click', function() {
                    _gaq.push(['c._trackEvent', 'Toolbar', 'ComplexTV More Link', 'Click']);
                });

                var wf = document.createElement('script');
                    wf.src = '//player.ooyala.com/v3/13f3acd252d545808e37bff6873ef196';
                    wf.type = 'text/javascript';
                var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(wf, s);
                wf.onload = function() {
                    cmn_complextv.setup(cmn_complextv.data.json[0]);
                    cmn_complextv.create();
                }
            }
    },
    create: function() {
        cmn_complextv.player = OO.Player.create('cmn_complextv_video', cmn_complextv.fileID, {
            width: '480px',
            height: '270px',
            adSetCode: cmn_complextv.adset,
            vast: cmn_complextv.advast
        });
        this.player.play();
    },
    load: function() {
        if (this.fileID != '') { this.create(); }
        else { this.init(); }
    },
    close: function() {
        this.player.destroy();
        $tb('#cmn_complextv_video').html('');
    },
    setup: function(data) {
        var keydata = {};
        if (typeof(data.metadata) != 'undefined') {
            for (y = 0; y < data.metadata.length; y++) { keydata[data.metadata[y].key.toLowerCase()] = data.metadata[y].value; }
        }

        cmn_complextv.adfq = keydata['ad-fq'];
        cmn_complextv.adtype = keydata['ad-type'];
        cmn_complextv.addefault = data.ad_set_id;

        if (typeof(cmn_complextv.adfq) != 'undefined' && cmn_complextv.adfq != 0) {
            cmn_complextv.adset = 'd0601749e69a442b831cde6ba43c2abb';
            cmn_complextv.advast = { tagUrl: cmnTvToolbar(cmn_complextv.adtype) };
        }
        else if (typeof(cmn_complextv.adfq) != 'undefined' && cmn_complextv.adfq == 0) {
            cmn_complextv.adset = 'bc69025d6e364d99950d3e95d2918d71';
            cmn_complextv.advast = { tagUrl: cmnTvToolbar(cmn_complextv.adtype) };
        }
        else {
            // cmn_complextv.adset = cmn_complextv.addefault; // Video Custom
            //cmn_complextv.adset = '3f3b9e47c2954e21bdfb5618c47a61ea'; //Default
            cmn_complextv.advast = { tagUrl: cmnTvToolbar(cmn_complextv.adtype) };
        }
    }
}

function toggleAdBox(obj) {
    clearTimeout(ad_box_hover_timeout);
    if (this.pressed == true) {
	    cmnAdBoxClose();
    }
    else {
        closeAllOtherBoxes();
	    cmnAdBoxOpen();
    }

 }

function cmnAdBoxClose() {

_gaq.push(['c._trackEvent', 'Toolbar', 'AdBox', 'Close']);  //event tracking Adbox Close
    if (document.getElementById("cmn_toolbar_ad").pressed == true) {
    document.getElementById("cmn_toolbar_ad").pressed = false;

    $tb('#cmn_toolbar_ad').css('background-color', current_background_color);

    $tb("#cmn_toolbar_ad").bind('mouseleave', cmnBtnHoverOut);

    if(cmn_tb_ad == true) {

    $tb('#cmn_ad_box').animate({
	    bottom: "-500px"
	},
	{
	    duration: 200,
	    queue: true,
	    complete: function() {
		$tb('#cmn_ad_box').css('display', 'none');
		document.getElementById("cmn_toolbar_ad").innerHTML = '';
		cmntbvideoIframeRemove();
	    }
	});
    }

    }
}

function cmnAdBoxOpen() {
    hoverquick = true;
    _gaq.push(['c._trackEvent', 'Toolbar', 'AdBox', 'Open']); //event tracking Adbox Open
    if (document.getElementById("cmn_toolbar_ad").pressed != true) {
        closeAllOtherBoxes();
        document.getElementById("cmn_toolbar_ad").pressed = true;
        document.getElementById("cmn_toolbar_ad").style.backgroundImage;

        $tb('#cmn_ad_box').css('display', 'block');
        //$tb('#cmn_ad_box').css('z-index', '1147483648');
        $tb('#cmn_ad_box').css('z-index', '2147483500')

        $tb("#cmn_toolbar_ad").unbind('mouseleave', cmnBtnHoverOut);

        if(cmn_tb_ad == true) {
            $tb('#cmn_ad_box').animate({
    	       bottom: "27px"
        	},
        	{
        	    duration: 200,
        	    queue: true,
        	    complete: function() {
            		cmntbvideoIframe();
            		document.getElementById("cmn_toolbar_ad").innerHTML = '<img src="http://cdn.complexmedianetwork.com/cdn/toolbar/v2.1.1/images/transparentImg.png" id="xout" style="position: relative; z-index: 500000; float: right; margin: 5px 3px 0 0;" />';
            		//document.getElementById("cmn_toolbar_ad").innerHTML = '<img src="http://cdn.complexmedianetwork.com/cdn/agenda.complex.com/assets/Q22011/Nokia/closeout18b.png" id="xout" style="position: relative; z-index: 500000; float: right; margin: 5px 3px 0 0;">';

        	    }
        	});
        }
    }
}

var ad_box_hover_timeout;

function adBoxHoverTimer() {
    if (hoverquick != true) {
        ad_box_hover_timeout = setTimeout(cmnAdBoxOpen, 0);
    } else {
	    ad_box_hover_timeout = setTimeout(cmnAdBoxOpen, 1000);
    }
}

var close_all_boxes_timeout;

function closeAllBoxesTimer() {
	tb_remain_open = false;
    document.onmousemove = null;
    document.onkeydown = null;
    document.onkeypress = null;
	clearTimeout(close_all_boxes_timeout);
    if (!cmn_closeAllStop) {
    	close_all_boxes_timeout = setTimeout(closeAllOtherBoxes, cmn_close_all_boxes_timer);
    	document.onmousemove = closeAllBoxesTimer;
    	document.onkeydown = closeAllBoxesTimer;
    	document.onkeypress = closeAllBoxesTimer;
    }
}

function closeAllOtherBoxes() {

    if (document.getElementById('cmn_toolbar_ad').pressed) { cmnAdBoxClose(); }

    if (document.getElementById('cmn_toolbar_newsfeed').pressed) { cmnNewsfeedBoxClose(); }

    if (document.getElementById('cmn_toolbar_network').pressed) { cmnNetworkBoxClose(); }

    if (document.getElementById('cmn_toolbar_share').pressed) { cmnShareBoxClose(); }

    if (document.getElementById('cmn_toolbar_complextv').pressed) { cmnComplextvBoxClose(); }

}

function cmnNetworkMouseOver() {
    clearTimeout(cmn_network_bg_timeout);
    $tb(current_cmn_highlighted_link_id).css('color','#000000');
    var length = cmn_network_members.length;

    this.style.color = link_mouse_over_color;

}
var oDoc;

function cmnChangeFrame() {
    var oIframe = document.getElementById("cmn_player_iframe");
    oDoc = oIframe.contentWindow || oIframe.contentDocument;
}

var current_cmn_highlighted_link_id;

function cmnNetworkRandomBG() {
}

var cmn_scrollable_api;

// Cookies
function cmnCreateCookie(name,value,hours) {
	if (hours) {
		var date = new Date();
		date.setTime(date.getTime()+(hours*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}


function cmnReadCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function cmnEraseCookie(name) {
	cmnCreateCookie(name,"",-1);
}

//
// Toolbar show hide functions
//

// Closes toolbar
function cmnToolbarClose() {

	document.getElementById('overtblogox').style.display = "none";

   destroytb300ad();

   $tb("#cmn_toolbar_ad").unbind('mouseenter');
   $tb("#cmn_toolbar_ad").unbind('mouseleave');

	$tb('#cmn_toolbar_network').css('background-color', current_background_color);
	$tb('#cmn_toolbar_newsfeed').css('background-color', current_background_color);
	$tb('#cmn_toolbar_share').css('background-color', current_background_color);
    $tb('#cmn_toolbar_complextv').css('background-color', current_background_color);

    document.getElementById('cmn_ad_box').style.display = "none";
    tb_remain_open = false;
    closeAllOtherBoxes();

    $tb('#cmn_toolbar_close').css('right','178').css('bottom','0').css('position','fixed');

    cmnCreateCookie('cmn_toolbar_state', '0', 12);

    $tb('#cmn_tb_wrapper').animate({
	    bottom: "-252px",
        height: "288px"
	},
	{
	    duration: 200,
	    queue: true,
	    complete: function() {
			document.getElementById('overtblogox').style.display = "none";
	    }
	});

    $tb('#cmn_tb_wrapper').animate({
	left: document.body.offsetWidth-178
    },
    {
	duration: 500,
	queue: true,
	complete: function () {
	    cmnShowOpenBtn();

		_gaq.push(['c._trackEvent', 'Toolbar', 'MinimizeTB']); //event tracking toolbar close
		document.getElementById('cmn_toolbar_state_tracking_iframe').src="http://stats.complex.com/cmn_toolbar/toolbar_impressions_minimized.html?source=" + track_src;

	}
    });

}

function cmnShowOpenBtn() {
    $tb('#cmn_toolbar_open_container').css('display','block');
    $tb('#cmn_toolbar_close').css('display','none');
}

function cmnHideOpenBtn() {
     $tb('#cmn_toolbar_open_container').css('display','none');
    $tb('#cmn_toolbar_close').css('display','block');
    $tb('#cmn_toolbar_close').css('right','0').css('bottom','0').css('position','relative');
}

// Opens toolbar
function cmnToolbarOpen() {

    $tb('#cmn_tb_wrapper').css('display', 'block').css('left', (document.body.offsetWidth -178) + 'px');
    $tb('#cmn_toolbar_open_container').css('background','none');

    cmnCreateCookie('cmn_toolbar_state', '1', 12);

    $tb('#cmn_tb_wrapper').animate({
	left: "0"
    },
    {
	duration: 500,
	queue: true,
	complete: function () {
	    cmnHideOpenBtn();

	    if (cmn_config.ad_type == 'popup') {
		$tb("#cmn_toolbar_ad").mouseenter(adBoxHoverTimer);
		$tb("#cmn_toolbar_ad").mouseleave(function () { clearTimeout(ad_box_hover_timeout);});
		$tb("#overtblogox").mouseenter(adBoxHoverTimer);
		$tb("#overtblogox").mouseleave(function () { clearTimeout(ad_box_hover_timeout);});

	    }

	    cmnImpressionTracker();
	    _gaq.push(['c._trackEvent', 'Toolbar', 'ExpandToolbar']); //event tracking toolbar open
	    document.getElementById('cmn_toolbar_state_tracking_iframe').src="http://stats.complex.com/cmn_toolbar/toolbar_impressions.html?source=" + track_src;
	$tb('#cmn_toolbar_close').css('background','none');

	document.getElementById('overtblogox').style.display = "block";

	}
    });
}



function tooltipHandler(btn_id) {
    if (document.getElementById(btn_id).pressed == true) {

	return false;
    }
    else {

	return true;
	}

}


function scrollHideTooltips() {
    $tb('.cmn_tooltip').css('display','none');
}


// Fixes inconsistant max z-index on targeted browsers
function tbZindexFix() {
    if (/(3\.[0-9.]* Safari\/)|Opera/.test(navigator.userAgent)) {

       $tb('#cmn_tb_wrapper, #cmn_toolbar_open ').css('z-index', '167777271');

       $tb('#cmn_toolbar_open_container, #cmn_tooltip').css('z-index', '167777560');

       $tb('#cmn_newsfeed_box, #cmn_share_box, #cmn_network_box, #cmn_complextv_box, #cmn_status_box, #cmn_ad_box, #cmn_subscribe_box').css('z-index', '167777250');

    }
}

// Default logo
function logoDefault(){
	if ((cmnunt_silo != 's_sne')&&(cmnunt_silo != 's_mus')&&(cmnunt_silo != 's_gam')&&(cmnunt_silo != 's_spo') ) {
		$tb('#cmn_toolbar_network a').css('width','135px');
		if (cmn_tb_theme == 'dark') {
			$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -415px 1px transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -415px 1px transparent');
		}
		else if (cmnunt_silo == 's_sty') {
			$tb('#cmn_toolbar_network a').css('width','125px');
			$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -27px -22px transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -27px -22px transparent');
		} else if (cmn_tb_theme == 'gray') {
			$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll  -553px 1px transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll  -553px 1px transparent');
		} else {
			$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -690px 1px  transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -690px 1px  transparent');
		}
		/*$tb('#cmn_toolbar_network').css('width','184px');
		$tb('#arrow_network').css('left','160px');*/
	}
}

// Sneakers Logo
function logoSneakers() {
	if (cmnunt_silo == 's_sne') {
		$tb('#cmn_toolbar_network a').css('width','149px');
		if ((cmn_tb_theme == 'dark') || (cmn_tb_theme == 'style')) {
			$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -158px -44px transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -157px -45px transparent');
			/*$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/cmn_sneakers_logo_dark.png") no-repeat scroll 5px 5px transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/cmn_sneakers_logo_dark.png") no-repeat scroll 5px 5px transparent');*/
		} else if (cmn_tb_theme == 'gray') {
			$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -307px -43px transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -307px -43px transparent');
			/*$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/cmn_sneakers_logo_gray.png") no-repeat scroll 5px 5px transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/cmn_sneakers_logo_gray.png") no-repeat scroll 5px 5px transparent');*/
		} else {
			$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -458px -43px transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -458px -43px transparent');
			/*$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/cmn_sneakers_logo_light.png") no-repeat scroll 5px 5px transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/cmn_sneakers_logo_light.png") no-repeat scroll 5px 5px transparent');*/
		}
		$tb('#cmn_toolbar_network').css('width','184px');
		$tb('#arrow_network').css('left','160px');
	}
}

// Music Logo
function logoMusic() {
	if (cmnunt_silo == 's_mus') {
		$tb('#cmn_toolbar_network a').css('width','126px');
		if ((cmn_tb_theme == 'dark') || (cmn_tb_theme == 'style')) {
			$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -565px -22px transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -565px -22px transparent');
			/*$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/cmn_music_logo_dark.png") no-repeat scroll 10px 5px transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/cmn_music_logo_dark.png") no-repeat scroll 10px 5px transparent');*/
		} else if (cmn_tb_theme == 'gray') {
			$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -693px -22px transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -693px -22px transparent');
			/*$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/cmn_music_logo_gray.png") no-repeat scroll 10px 5px transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/cmn_music_logo_gray.png") no-repeat scroll 10px 5px transparent');*/
		} else {
			$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -30px -44px  transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -30px -44px transparent');
			/*$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/cmn_music_logo_light.png") no-repeat scroll 10px 5px transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/cmn_music_logo_light.png") no-repeat scroll 10px 5px transparent');*/
		}
		$tb('#arrow_network').css('left','142px');
	}
}

// Games Logo
function logoGames() {
	if (cmnunt_silo == 's_gam') {
		$tb('#cmn_toolbar_network a').css('width','133px');
		if ((cmn_tb_theme == 'dark') || (cmn_tb_theme == 'style')) {
			$tb('#cmn_toolbar_network a').css('width','126px');
			$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -30px 2px transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -30px 2px transparent');
			/*$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/cmn_games_logo_dark.png") no-repeat scroll 10px 5px transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/cmn_games_logo_dark.png") no-repeat scroll 10px 5px transparent');*/
		} else if (cmn_tb_theme == 'gray') {
			$tb('#cmn_toolbar_network a').css('width','130px');
			$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -158px 1px transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -158px 1px transparent');
			/*$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/cmn_games_logo_gray.png") no-repeat scroll 10px 5px transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/cmn_games_logo_gray.png") no-repeat scroll 10px 5px transparent');*/
		} else {
			$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -287px 1px transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -287px 1px transparent');
			/*$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/cmn_games_logo_light.png") no-repeat scroll 10px 5px transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/cmn_games_logo_light.png") no-repeat scroll 10px 5px transparent');*/
		}
		$tb('#cmn_toolbar_network').css('width','174px');
		$tb('#arrow_network').css('left','150px');
	}
}

// Sports Logo
function logoSports() {
	if (cmnunt_silo == 's_spo') {
		$tb('#cmn_toolbar_network a').css('width','126x');
		if ((cmn_tb_theme == 'dark') || (cmn_tb_theme == 'style')) {
			$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -605px -45px transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -605px -45px transparent');
			/*$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/cmn_sports_logo_dark.png") no-repeat scroll 10px 5px transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/cmn_sports_logo_dark.png") no-repeat scroll 10px 5px transparent');*/
		} else if (cmn_tb_theme == 'gray') {
			$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -739px -45px transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -739px -45px transparent');
			/*$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/cmn_sports_logo_gray.png") no-repeat scroll 10px 5px transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/cmn_sports_logo_gray.png") no-repeat scroll 10px 5px transparent');*/
		} else {
			$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -30px -68px transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -30px -68px transparent');
			/*$tb('#cmn_toolbar_network a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/cmn_sports_logo_light.png") no-repeat scroll 10px 5px transparent');
			$tb('#cmn_toolbar_network a:hover').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/cmn_sports_logo_light.png") no-repeat scroll 10px 5px transparent');*/
		}
		$tb('#cmn_toolbar_network').css('width','174px');
		$tb('#arrow_network').css('left','150px');
	}
}


// Remove Share Button from FreeOnSmash
function removeShareBtn() {
	if (cmn_tb_domain == 'freeonsmash') {
		$tb('#cmn_toolbar_share').hide();
	}
}

// Custom function to selectively populate network box
function cmnPopulateNetworkBox() {

    if (cmn_tb_domain == 'vladtv') {

	cmn_network_members.remove('FreeOnSMASH');

    } else if (cmn_tb_domain == 'freeonsmash') {

	cmn_network_members.remove('VladTV');

    }

    var cmn_start=0, cmn_end = 0;
    var cmn_network_members_length = cmn_network_members.length;

    // generate toolbar content
    generateDefaultSilos(sitesBySilo);

}

function dimention(num){
	var lnksWidth = num;
	if(typeof num == 'number'){
		lnksWidth = Math.ceil(lnksWidth/3);
		lnksWidth = lnksWidth+'%';
	}
	return lnksWidth;
}


function adjustToolbarPanel(){
	var windowWidth =$tb('#cmn_network_box').width();

	if(windowWidth<900){
		$tb('#cmn_site_screenshot_caption').hide();

		if(Number($tb('#cmn_network_links').css('left').replace('px','')) >0){
			$tb('#cmn_network_links').css('left',0);
			$tb('#cmn_network_links').css('width','auto');
			$tb('#cmn_network_container').css('padding-left','0px');
		}
		else{
			$tb('#cmn_network_links').css('width', windowWidth);
		}
	}
}


var cmn_tooltip_api;

//
// Main toolbar event handlers and inits
//

function cmnTBLoad() {
	logoSneakers();
	logoMusic();
	logoGames();
	logoSports();
	if ((cmnunt_silo != 's_sne')&&(cmnunt_silo != 's_mus')&&(cmnunt_silo != 's_gam')&&(cmnunt_silo != 's_spo') ) {
		logoDefault();
	}
	removeShareBtn();

	if (cmn_tb_theme == 'style'){
		cmn_network_members = cmn_style_network_members;
	}

    cmnResponsive();

	$tb(window).resize(function() {
		$tb('#siloContainer').css('display','none');

		var lnksWidth = 0;
		var width = 0;
		var str = 0;
		var cmn_network_container_width ="";
		var windowWidth =$tb('#cmn_network_box').width();
		var adWidth = $tb('#300x300 iframe').width();
		var update = $tb('#cmn_network_links').width()+120;

		//cmn_network_container_width = windowWidth - adWidth;

		if(typeof cmnTBLoad.flag == 'undefined'){
			cmnTBLoad.flag =0;
		}

		// --slide network container left-- //
		if(windowWidth<900){
			$tb('#cmn_site_screenshot_caption').hide();
			$tb('#cmn_network_container').css('padding-left','0px');

			if(Number($tb('#cmn_network_links').css('left').replace('px','')) >0){
				if(cmnTBLoad.flag ==0){
					$tb('#cmn_network_links').css('left',0);
					$tb('#cmn_network_links').css('width',update);
					cmnTBLoad.flag =1;
				}
			}
			else{
				$tb('#cmn_network_links').css('width', windowWidth);
			}
		}
		else{
			$tb('#cmn_site_screenshot_caption').show();
			$tb('#cmn_network_links').css('left','150px');
			$tb('#cmn_network_links').css('width', 'auto');
			$tb('#cmn_network_container').css('padding-left','50px');
			cmnTBLoad.flag =0;
		}

		// --Overlay section-- //
		if(($tb('#siloContainer').css('display'))=='block'){
			$tb('#siloContainer').css('width',lnksWidth);
			$tb('#close').css({'width': lnksWidth});
		}

		cmnResponsive();

		// adjusting overlay of silos

		if($tb(window).width() < 620) {
			$tb('#siloContainer').css('left','80px');
		}
		else{
			$tb('#siloContainer').css('left','205px');
		}
	});


 $tb('#cmn_toolbar_close').css('right','0').css('bottom','0').css('position','relative').css('display','block');

    document.getElementById("cmn_toolbar_network").pressed = false;
    document.getElementById("cmn_toolbar_newsfeed").pressed = false;
    document.getElementById("cmn_toolbar_share").pressed = false;
    document.getElementById("cmn_toolbar_complextv").pressed = false;

    // Adds site elements to the takeover script if it exists
    if (typeof campaignExists != 'undefined') {
	if (typeof siteElmts != 'undefined' && (campaignExists)) {
				//site element
		siteElmts(cmnDfpName, dfpTracking, 'cmn_tb_wrapper', '', 'no-repeat', '  ', '', '', '', '', '', '', '', '');
		//site element
		siteElmts(cmnDfpName, dfpTracking, 'cmn_status_msg_tooltip', '', 'no-repeat', '  ', '', '', '', '', '', '', '', '');
		//site element
		siteElmts(cmnDfpName, dfpTracking, 'cmn_subscribe_tooltip', '', 'no-repeat', '  ', '', '', '', '', '', '', '', '');
		//site element
		siteElmts(cmnDfpName, dfpTracking, 'cmn_network_tooltip', '', 'no-repeat', '  ', '', '', '', '', '', '', '', '');
		//site element
		siteElmts(cmnDfpName, dfpTracking, 'cmn_status_tooltip', '', 'no-repeat', '  ', '', '', '', '', '', '', '', '');
		//site element
		siteElmts(cmnDfpName, dfpTracking, 'cmn_newsfeed_tooltip', '', 'no-repeat', '  ', '', '', '', '', '', '', '', '');
		//site element
		siteElmts(cmnDfpName, dfpTracking, 'cmn_share_tooltip', '', 'no-repeat', '  ', '', '', '', '', '', '', '', '');
		//site element
		siteElmts(cmnDfpName, dfpTracking, 'cmn_hide_tooltip', '', 'no-repeat', '  ', '', '', '', '', '', '', '', '');
		//site element
		siteElmts(cmnDfpName, dfpTracking, 'cmn_show_tooltip', '', 'no-repeat', '  ', '', '', '', '', '', '', '', '');
		//site element
		siteElmts(cmnDfpName, dfpTracking, 'cmn_subscribe_box', '', 'no-repeat', '  ', '', '', '', '', '', '', '', '');
		//site element
		siteElmts(cmnDfpName, dfpTracking, 'cmn_share_box', '', 'no-repeat', '  ', '', '', '', '', '', '', '', '');
        //site element
        siteElmts(cmnDfpName, dfpTracking, 'cmn_complextv_box', '', 'no-repeat', '  ', '', '', '', '', '', '', '', '');
		//site element
		siteElmts(cmnDfpName, dfpTracking, 'cmn_newsfeed_box', '', 'no-repeat', '  ', '', '', '', '', '', '', '', '');
		//site element
		siteElmts(cmnDfpName, dfpTracking, 'cmn_toolbar_open_container', '', 'no-repeat', '  ', '', '', '', '', '', '', '', '');
		//site element
		siteElmts(cmnDfpName, dfpTracking, 'cmn_connect_box', '', 'no-repeat', '  ', '', '', '', '', '', '', '', '');
		//site element
		siteElmts(cmnDfpName, dfpTracking, 'cmn_ad_box', '', 'no-repeat', '  ', '', '', '', '', '', '', '', '');
		//site element
		siteElmts(cmnDfpName, dfpTracking, 'cmn_status_box', '', 'no-repeat', '  ', '', '', '', '', '', '', '', '');
		//site element
		siteElmts(cmnDfpName, dfpTracking, 'cmn_music_box', '', 'no-repeat', '  ', '', '', '', '', '', '', '', '');
		//site element
		siteElmts(cmnDfpName, dfpTracking, 'cmn_tb_overlay_ad', '', 'no-repeat', '  ', '', '', '', '', '', '', '', '');

		siteElmts(cmnDfpName, dfpTracking, 'cmn_network_box', '', 'no-repeat', '  ', '', '', '', '', '', '', '', '');

	}
    }

    current_background_color = document.getElementById('cmn_toolbar_nav_middle').style.backgroundColor;

    // Sets the initial state of the gigya login vars

    $tb("#cmn_toolbar_network").click(toggleMediaNetworkBox);

    $tb("#cmn_network_box .cmnbox_hdr_x").click(cmnNetworkBoxClose);

    if (cmn_config.ad_type == 'overlay') {
	    $tb("#cmn_toolbar_ad[rel]").overlay({ expose: {
		color: '#333',
		loadSpeed: 200,
		opacity: 0.9
	    }});

    } else if (cmn_config.ad_type == 'popup') {

    $tb("#cmn_toolbar_ad").click(toggleAdBox);
    $tb("#cmn_toolbar_ad").mouseenter(adBoxHoverTimer);
    $tb("#cmn_toolbar_ad").mouseleave(function () { clearTimeout(ad_box_hover_timeout);});
    $tb("#overtblogox").click(toggleAdBox);
    $tb("#overtblogox").mouseenter(adBoxHoverTimer);
    $tb("#overtblogox").mouseleave(function () { clearTimeout(ad_box_hover_timeout);});

    $tb("#cmn_ad_box .cmnbox_hdr_x").click(cmnAdBoxClose);
    }


    $tb('#cmn_toolbar_close').click(cmnToolbarClose);

    $tb('#cmn_toolbar_open').click(cmnToolbarOpen);

    $tb('#cmn_toolbar_newsfeed').click(toggleNewsfeedBox);

    $tb('#cmn_newsfeed_box_close_x').click(cmnNewsfeedBoxClose);

    $tb('#cmn_toolbar_share').click(toggleShareBox);

    $tb('#cmn_toolbar_complextv').click(toggleComplextvBox);

    $tb('#cmn_toolbar_share, #cmn_toolbar_network, #cmn_toolbar_complextv').mouseenter(cmnBtnHoverOver);

    $tb('#cmn_toolbar_share, #cmn_toolbar_network, #cmn_toolbar_complextv').mouseleave(cmnBtnHoverOut);

    $tb('#cmn_newsfeed_btn').mouseenter(cmnNewsfeedBtnOver);

    $tb('#cmn_toolbar_network').mouseenter(cmnNetworkBtnOver);

    $tb('#cmn_toolbar_network').mouseleave(cmnNetworkBtnOut);

    $tb('#cmn_toolbar_share').mouseenter(cmnShareBtnOver);

    $tb('#cmn_toolbar_share').mouseleave(cmnShareBtnOut);

    $tb('#cmn_toolbar_complextv').mouseenter(cmnComplextvBtnOver);

    $tb('#cmn_toolbar_complextv').mouseleave(cmnComplextvBtnOut);

    $tb('#cmn_newsfeed_btn').mouseleave(cmnNewsfeedBtnOut);

    $tb('#cmn_ad_box_close_x').click(cmnAdBoxClose);

    $tb('#cmn_toolbar_open_container_left_shadow').css('display','block');

    var cmn_dynamic_tooltip_config = { classNames: 'tooltip_repo_top tooltip_repo_right tooltip_repo_bottom tooltip_repo_left'};

    $tb("#cmn_toolbar_network").tooltip({ tip: '#cmn_network_tooltip', predelay: tooltip_predelay, onBeforeShow: function () { return tooltipHandler('cmn_toolbar_network');} }).dynamic(cmn_dynamic_tooltip_config);

    $tb("#cmn_toolbar_close").tooltip({ tip: '#cmn_hide_tooltip', position: 'top left', predelay: tooltip_predelay, offset: [0, 30] }).dynamic(cmn_dynamic_tooltip_config);
    $tb("#cmn_toolbar_open").tooltip({ tip: '#cmn_show_tooltip', position: 'top left', predelay: tooltip_predelay, offset: [0, 30]  }).dynamic(cmn_dynamic_tooltip_config);

    $tb('#cmn_toolbar_newsfeed').tooltip({ tip: '#cmn_newsfeed_tooltip', predelay:tooltip_predelay, onBeforeShow: function () { return tooltipHandler('cmn_toolbar_newsfeed');} }).dynamic(cmn_dynamic_tooltip_config);

    $tb("#cmn_toolbar_share").tooltip({ tip: '#cmn_share_tooltip', predelay: tooltip_predelay, onBeforeShow: function () { return tooltipHandler('cmn_toolbar_share');} }).dynamic(cmn_dynamic_tooltip_config);

    $tb('#cmn_status_msg_tooltip_trigger').tooltip({ tip: '#cmn_status_msg_tooltip', events: {
		input: '',
		checkbox: '',
		date: '',
		tooltip: ''
	}});


    if (cmnReadCookie('cmn_toolbar_state')=='0') {
	cmnToolbarClose();
	$tb('#cmn_tb_wrapper').fadeIn("fast");
    } else {

        document.getElementById('cmn_toolbar_state_tracking_iframe').src = "http://stats.complex.com/cmn_toolbar/toolbar_impressions.html?source=" + track_src;
	cmnImpressionTracker();
        $tb('#cmn_tb_wrapper').fadeIn("fast");

    }

    $tb(window).scroll(scrollHideTooltips);

    var toolbar_icon_path = 'icons/';

    if (cmn_tb_theme == 'black') {
	toolbar_icon_path = 'icons_black/';
    }

    var newsfeed_scroll_html = '', newsfeed_list_html = '';

    var item_inc = 0;

    var num_items = newsFeed.items.length;

    $tb.each(newsFeed.items, function(i,item){

	// Feed exclusion for vlad and onsmash
	if (!(cmn_tb_domain == 'freeonsmash' && item.name == 'vladtv_com_0') && !(cmn_tb_domain == 'vladtv' && item.name == 'freeonsmash_com_0'))  {
	newsfeed_scroll_html +=  '<div class="item" onclick="return false;"><div class="cmn_network_newsline"><span class="cmn_newsfeed_source">' + item.sourceVanityUrl + '</span>&nbsp;<span class="cmn_newsfeed_item_title">' + item.storyTitle + '</span></div></div>';

	newsfeed_list_html += '<li class="newsfeed_item"><a onClick="_gaq.push([\'c._trackEvent\', \'Toolbar\', \'NewsFeedBox\', \'SiteLinkClick\']);" target="_blank" class="cmn_newsfeed_site_link" href="' + item.sourceUrl + '">' + item.sourceVanityUrl +'</a> <a  target="_blank" onClick="_gaq.push([\'c._trackEvent\', \'Toolbar\', \'NewsFeedBox\', \'FeedLinkClick\']);" class="cmn_newsfeed_story_title" href="' + item.storyUrl + '">' + item.storyTitle + '</a> ';

	item_inc++;
	} else {

	}

          });

	$tb('#cmn_toolbar_newsfeed .items').append(newsfeed_scroll_html);
	$tb('#cmn_newsfeed_list').append(newsfeed_list_html);

	    cmn_scrollable_api =  $tb("#cmn_toolbar_newsfeed #cmn_tb_scroller").scrollable({
	    vertical:true,
	    size: 1,
	    keyboard: false

	// use mousewheel plugin
	}).circular().autoscroll({autoplay: true});

    cmnPopulateNetworkBox();

    tbZindexFix();

    if ($tb.browser.msie && (parseInt($tb.browser.version) <= 8)) {
        $tb('#cmn_toolbar_complextv .cmn_btn_logo').css({
            'background-image': 'none',
            'filter': "progid:DXImageTransform.Microsoft.AlphaImageLoader( src='http://cdnl.complex.com/tv/images/widget-logo.png', sizingMethod='scale')",
            '-ms-filter': "progid:DXImageTransform.Microsoft.AlphaImageLoader( src='http://cdnl.complex.com/tv/images/widget-logo.png', sizingMethod='scale')"
        });
    }

    // toolbarPlayerLoad();

}

function cmnResponsive() {
    var actualWidth = $tb(window).width();

    if (actualWidth < 1190) {
        $tb('#cmn_toolbar_newsfeed').css('width','38.5%');
        $tb('#cmn_toolbar_share').show();
        $tb('#cmn_toolbar_complextv').hide();
    } else if (actualWidth < 1290) {
        $tb('#cmn_toolbar_newsfeed').css('width','35%');
        $tb('#cmn_toolbar_share').show();
        $tb('#cmn_toolbar_complextv').show();
    } else {
        $tb('#cmn_toolbar_newsfeed').css('width','40%');
        $tb('#cmn_toolbar_share').show();
        $tb('#cmn_toolbar_complextv').show();
    }
}

// ==============300x300 TB Ad

function createIFrame(src, width, height, ad_iframe_id) {
    ifrm = document.createElement("IFRAME");
	ifrm.setAttribute("src", src);
	ifrm.style.width = width +"px";
	ifrm.style.height = height +"px";
	ifrm.style.border = "none";
	ifrm.style.position = "absolute";
	ifrm.style.zIndex = "2147483640";
	ifrm.marginheight = 0;
	ifrm.marginwidth = 0;

	ifrm.width = width;
	ifrm.height = height;
	ifrm.scrolling = "no";
	ifrm.frameBorder = "0";
	ifrm.border = "0";
	ifrm.id = ad_iframe_id;
	return ifrm;
}


//Toolbar 300 ad
var neword = Math.random()*10000000000000000;

		if ( cmnunt_site  != '') {
		var cmnunt_site_frame         	= cmnunt_site;
		}

		if (cmnunt_zone != '') {
		var cmnunt_zone_frame         	= cmnunt_zone;
		}

		if (cmnunt_silo != '') {
		var cmnunt_silo_frame         	= cmnunt_silo + ',';
		}
		if (cmnunt_silo != '') {
		var cmnunt_subsilo_frame    	= cmnunt_subsilo;
		}
		if (cmnunt_silo != '') {
		var cmnunt_tier_frame         	= cmnunt_tier + ',';
		}
		if (cmnunt_silo != '') {
		var cmnunt_kw_frame         	= cmnunt_kw + ',';
		}
		if (cmnunt_silo != '') {
		var cmnunt_exclude_frame    	= cmnunt_exclude;
		}
		if (cmnunt_silo != '') {
		var cmnunt_exclude_frame2    	= '!c=' + cmnunt_exclude + ';';
		}



		// The dom element has been loaded
		function tb300ad()  {
			tb_300_ad_div = document.getElementById('300x300');

			tb_300_ad_iframe = createIFrame('http://ad.doubleclick.net/adi/' + cmnunt_site_frame +'/' + cmnunt_zone_frame +';kw=' + cmnunt_silo_frame + cmnunt_subsilo_frame + cmnunt_kw_frame + cmnunt_tier_frame + cmnunt_exclude_frame + ';' + cmnunt_exclude_frame2 + 's=a;tile=4;sz=300x300;ord=' + neword+ '?', '300', '300', 'tb_300_ad_iframe');

				tb_300_ad_div.innerHTML = "";


				tb_300_ad_div.appendChild(tb_300_ad_iframe);
		}


		function destroytb300ad() {
			neword = Math.random()*10000000000000000;
			tb_300_ad_div.innerHTML = "";
		}



$tb(document).ready(function () {

    if (!document.getElementById('spiralflash') && (cmn_tb_on == 1)) {
    cmnTBLoad();
    }


    });
