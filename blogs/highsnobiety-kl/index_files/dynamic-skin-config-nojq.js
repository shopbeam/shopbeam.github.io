if (typeof cmnunt_site != 'string') {
    //domain check for joblo because they are running skin tag through their ad server.
    var cmn_domain_url = document.domain;
    var cmn_stripped_url = cmn_domain_url.match(/\.?([^.]+)\.[^.]+.?$/)[1];

    if (cmn_stripped_url == 'joblo'){
      cmnunt_site = 'cmn_joblo';
    }
} else {
    if (cmnunt_site == 'cmn_complex') { cmn_wrap_width = "970"; }
    else if (cmnunt_site == 'cmn_complex') { cmn_wrap_width = "990"; }
    else if (cmnunt_site == 'cmn_complextv') { cmn_wrap_width = "1044"; }
    else if (cmnunt_site == 'cmn_livemixtapes' ) { cmn_wrap_width = "850"; }
    else if (cmnunt_site == 'cmn_playstationuniversity' ) { cmn_wrap_width = "962"; }
    else if (cmnunt_site == 'cmn_boomshots' ) { cmn_wrap_width = "975"; }
    else if (cmnunt_site == 'cmn_missinfo' || cmnunt_site == 'cmn_nahright' ) { cmn_wrap_width = "855"; }
    else if (cmnunt_site == 'cmn_the305' ) { cmn_wrap_width = "902"; }
    else if (cmnunt_site == 'cmn_apetogentleman' ) { cmn_wrap_width = "986"; }
    else if (cmnunt_site == 'cmn_highschoolhoop' || cmnunt_site == 'cmn_youngmoneyhq' || cmnunt_site == 'cmn_inflexwetrust') { cmn_wrap_width = "940"; }
    else if (cmnunt_site == 'cmn_dimemag') { cmn_wrap_width = "940"; document.getElementById("cmn_wrap").style.background="#ffffff";}
    else if (cmnunt_site == 'cmn_jordansdaily' || cmnunt_site == 'cmn_celebkicks' ) { cmn_wrap_width = "945"; }
    else if (cmnunt_site == 'cmn_consquenceofsound') { cmn_wrap_width = "950"; }
    else if (cmnunt_site == 'cmn_6magazineonline' || cmnunt_site == 'cmn_pastapadre' || cmnunt_site == 'cmn_worldofdance' || cmnunt_site == 'cmn_sheridanhoops') { cmn_wrap_width = "960"; }
    else if (cmnunt_site == 'cmn_lilwaynehq') { cmn_wrap_width = "960"; document.getElementById("header").style.width="960px"; document.getElementById("header").style.margin="0 auto 30px auto";}
    else if (cmnunt_site == 'cmn_freeonsmash'  || cmnunt_site == 'cmn_sarcasticgamer' ||  cmnunt_site == 'cmn_onethirtybpm' || cmnunt_site == 'cmn_pigeonsandplanes' || cmnunt_site == 'cmn_consequenceofsound' || cmnunt_site == 'cmn_demo' || cmnunt_site == 'cmn_ballerstatus') { cmn_wrap_width = "970";  }
    else if (cmnunt_site == 'cmn_thefilmstage') { cmn_wrap_width = "970"; document.getElementById('cmn_wrap').style.background ='#ffffff'; }
    else if (cmnunt_site == 'cmn_sneakerreport') { cmn_wrap_width = "980"; document.getElementById('cmn_wrap').style.background ='#e7e7e7'; }
    else if (cmnunt_site == 'cmn_porhomme') { cmn_wrap_width = "992"; }
    else if (cmnunt_site == 'cmn_shoryuken') { cmn_wrap_width = "1024"; }
    else if (cmnunt_site == 'cmn_theshoegame') { cmn_wrap_width = "982"; }
    else if (cmnunt_site == 'cmn_youheardthatnew' ||  cmnunt_site == 'cmn_thegameraccess'  || cmnunt_site == 'cmn_theoriginalwinger' || cmnunt_site == 'cmn_allhiphop' || cmnunt_site == 'cmn_pushat' || cmnunt_site == 'cmn_wizardworld' || cmnunt_site == 'cmn_cluttermagazine' ||  cmnunt_site == 'cmn_mechanicaldummy' || cmnunt_site == 'cmn_cluttermagazine' || cmnunt_site == 'cmn_stupiddope' || cmnunt_site == 'cmn_frankocean' || cmnunt_site == 'cmn_bestofbothoffices' || cmnunt_site == 'cmn_doandroidsdance' || cmnunt_site == 'cmn_behindthehustle' || cmnunt_site == 'cmn_runthetrap' || cmnunt_site == 'cmn_runthetrap' ) { cmn_wrap_width = "980"; }
    else if (cmnunt_site == 'cmn_earmilk') { cmn_wrap_width = "980"; document.getElementById("cmn_dynBg_rt").style.marginTop="40px"; document.getElementById("cmn_dynBg_lt").style.marginTop="40px";  }
    else if (cmnunt_site == 'cmn_sneakerfreaker' || cmnunt_site == 'cmn_slamxhype' || cmnunt_site == 'cmn_highsnobette') { cmn_wrap_width = "984"; }
    else if (cmnunt_site == 'cmn_checkoutmyink' || cmnunt_site == 'cmn_hookit' || cmnunt_site == 'cmn_balljunkie' || cmnunt_site == 'cmn_rawrdenim') { cmn_wrap_width = "990"; }
    else if (cmnunt_site == 'cmn_audiomack') { cmn_wrap_width = "990"; document.getElementById("cmn_dynBg_rt").style.marginTop="39px"; document.getElementById("cmn_dynBg_lt").style.marginTop="39px";}
    else if (cmnunt_site == 'cmn_themaskedgorilla') { cmn_wrap_width = "1010"; }
    else if (cmnunt_site == 'cmn_planetxbox360') { cmn_wrap_width = "998"; }
    else if (cmnunt_site == 'cmn_gameranx') { cmn_wrap_width = "1080"; }
    else if (cmnunt_site == 'cmn_thehoopdoctors' || cmnunt_site == 'cmn_thecagedoctors' || cmnunt_site == 'cmn_thedugoutdoctors' || cmnunt_site == 'cmn_thepuckdoctors' || cmnunt_site == 'cmn_thepigskindoctors' || cmnunt_site == 'cmn_freshnessmag' || cmnunt_site == 'cmn_upscalehype' || cmnunt_site == 'cmn_nicekicks' || cmnunt_site == 'cmn_japanesesportcars' || cmnunt_site == 'cmn_nxus' || cmnunt_site == 'cmn_drizzydrake' || cmnunt_site == 'cmn_arrestedmotion' || cmnunt_site == 'cmn_lxgoods' || cmnunt_site == 'cmn_datnewcudi') { cmn_wrap_width = "1000"; }
    else if (cmnunt_site == 'cmn_wegotthiscovered') { cmn_wrap_width = "1000"; }
    else if (cmnunt_site == 'cmn_gamerant' || cmnunt_site == 'cmn_hiphopdx') { cmn_wrap_width = "1002"; }
    else if (cmnunt_site == 'cmn_refinedguy') { cmn_wrap_width = "1002"; document.getElementById("cmn_dynBg_rt").style.marginTop="45px"; document.getElementById("cmn_dynBg_lt").style.marginTop="45px"; }
    else if (cmnunt_site == 'cmn_totalprosports') { cmn_wrap_width = "1002"; document.getElementById("cmn_dynBg_rt").style.marginTop="77px"; document.getElementById("cmn_dynBg_lt").style.marginTop="77px";}
    else if (cmnunt_site == 'cmn_kineda') { cmn_wrap_width = "1024"; }
    else if (cmnunt_site == 'cmn_nme') { cmn_wrap_width = "1006"; }
    else if (cmnunt_site == 'cmn_kicksonfire' ) { cmn_wrap_width = "1016"; }
    else if (cmnunt_site == 'cmn_fakeshoredrive' || cmnunt_site == 'cmn_hiconsumption') { cmn_wrap_width = "1010"; }
    else if (cmnunt_site == 'cmn_maestroknows') { cmn_wrap_width = "1020"; }
    else if (cmnunt_site == 'cmn_thechoosybeggar') { cmn_wrap_width = "1060"; }
    else if (cmnunt_site == 'cmn_karmalooptv') { cmn_wrap_width = "1070"; }
    else if (cmnunt_site == 'cmn_vladtv' || cmnunt_site == 'cmn_sneakerwatch' || cmnunt_site == 'cmn_techeater' || cmnunt_site == 'cmn_hollywoodheavy' || cmnunt_site == 'cmn_trailerobsessed' ) { cmn_wrap_width = "1054"; }
    else if (cmnunt_site == 'cmn_celebrityschoolpics') { cmn_wrap_width = "1046"; }
    else if (cmnunt_site == 'cmn_iampacked' ) { cmn_wrap_width = "1110"; }
    else if (cmnunt_site == 'cmn_lakersnation' ) {cmn_wrap_width = "1300"; document.getElementById('cmn_wrap').style.background ='#ffffff';}
    else if (cmnunt_site == 'cmn_sneakernews') { cmn_wrap_width = "1026"; }
    else if (cmnunt_site == 'cmn_geektyrant' || cmnunt_site == 'cmn_barbershopconnect') { var cmn_wrap_width = "1200";}
    else if (cmnunt_site == 'cmn_12ozprophet') { var cmn_wrap_width = "1008";}
    else if (cmnunt_site == 'cmn_2dopeboyz' || cmnunt_site == 'cmn_magneticmag') {var cmn_wrap_width = "960";}
    else if (cmnunt_site == 'cmn_bastardly' || cmnunt_site == 'cmn_superglued' ) {var cmn_wrap_width = "990";}
    else if (cmnunt_site == 'cmn_joblo' ) {var cmn_wrap_width = "1044";}
    else if (cmnunt_site == 'cmn_illroots') {var cmn_wrap_width = "970";}
    else if (cmnunt_site == 'cmn_illrootstest') {var cmn_wrap_width = "1056";}
    else if (cmnunt_site == 'cmn_asportingclub' ||  cmnunt_site == 'cmn_hypevideos'|| cmnunt_site == 'cmn_highsnobiety' || cmnunt_site == 'cmn_selectism' || cmnunt_site == 'cmn_sneakerwareapp' || cmnunt_site == 'cmn_hipsterrunoff') {var cmn_wrap_width = "1020";}
    else if (cmnunt_site == 'cmn_firstwefeast') { cmn_wrap_width = "1020"; document.getElementById('cmn_wrap').style.background ='#ffffff';}
    else if (cmnunt_site == 'cmn_djbooth') { cmn_wrap_width = "1000"; }
    else if (cmnunt_site == 'cmn_dajaz1') { cmn_wrap_width = "1030"; }
    else if (cmnunt_site == 'cmn_massappeal') { cmn_wrap_width = "973"; }
    else if (cmnunt_site == 'cmn_analoghype') { cmn_wrap_width = "1030"; }
    else if (cmnunt_site == 'cmn_fourpins' || cmnunt_site == 'cmn_egotripland') { cmn_wrap_width = "1050"; }
    else if (cmnunt_site == 'cmn_houseofhighlights') { cmn_wrap_width = "1090"; }
    else if (cmnunt_site == 'cmn_videogoneviral') { cmn_wrap_width = "1200"; document.getElementById('cmn_wrap').style.background ='#ffffff';  }
    else if (cmnunt_site == 'cmn_kicksdeals' || cmnunt_site == 'cmn_videogoneviral' || cmnunt_site == 'cmn_streetweardeals') { cmn_wrap_width = "1100"; document.getElementById('cmn_wrap').style.background ='#ffffff';  }
    else if (cmnunt_site == 'cmn_styleengine') { cmn_wrap_width = "1016"; }
    else if (cmnunt_site == 'cmn_refinedhype') { cmn_wrap_width = "1000"; }
    else if (cmnunt_site == 'cmn_ranker') { cmn_wrap_width = "1200"; }
    else if (cmnunt_site == 'cmn_raresoul' || cmnunt_site == 'cmn_juxtapoz') { cmn_wrap_width = "960"; }
    else if (cmnunt_site == 'cmn_infinitelegroom') { cmn_wrap_width = "1160"; document.getElementById('infinitelegroomheader').style.width="1160"; document.getElementById('cmn_wrap').style.background ='#ffffff'; }
    else if (cmnunt_site == 'cmn_getthebigpicture') { cmn_wrap_width = "1066"; }
    else if (cmnunt_site == 'cmn_vibetothis') { cmn_wrap_width = "1040"; }
    else if (cmnunt_site == 'cmn_solecollector') { cmn_wrap_width = "996";  document.getElementById("cmn_dynBg_rt").style.paddingTop="21px"; document.getElementById("cmn_dynBg_lt").style.paddingTop="21px"; }
    else if (cmnunt_site == 'cmn_shockmansion') { cmn_wrap_width = "968"; }
    else if (cmnunt_site == 'cmn_dmarge') { cmn_wrap_width = "1004"; }
    else if (cmnunt_site == 'cmn_green-label') { cmn_wrap_width = "1050"; }
    else if (cmnunt_site == 'cmn_yougottaeatthis') { cmn_wrap_width = "1014"; }
    else if (cmnunt_site == 'onlythebeat') {cmn_wrap_width = "1000"; }
    else if (cmnunt_site == 'prefixmag') {cmn_wrap_width = "1060"; }

    else if (cmnunt_site == 'cmn_karmaloop') {
    var karma_case = true;
    cmn_wrap_width = "1014";
    document.getElementById("cmn_dynBg_rt").style.marginTop="40px"; document.getElementById("cmn_dynBg_lt").style.marginTop="40px";
    }
}

/* get the width of the viewport */
function cmn_get_viewport_width() {
    var cmn_viewportwidth;

    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != 'undefined') {
        cmn_viewportwidth = window.innerWidth;
    }

    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
        cmn_viewportwidth = document.documentElement.clientWidth;
    }

    // older versions of IE
    else {
        cmn_viewportwidth = document.getElementsByTagName('body')[0].clientWidth;
    }
    return cmn_viewportwidth;
}


function cmn_set_gutters_width() {
    var cmn_vp_w = cmn_get_viewport_width();

    //block below fixes 1px gap in Chrome
    var cmn_new_left_width = (cmn_vp_w - cmn_wrap_width)/2;

    //check if integer
    if (cmn_new_left_width % 1 === 0) {
      cmn_new_left_width += 0.5;
    }

    document.getElementById('cmn_dynBg_lt_creative').style.width = cmn_new_left_width + "px";
    document.getElementById('cmn_dynBg_rt_creative').style.width = ((cmn_vp_w-cmn_wrap_width)/2) + "px";
}

function cmn_load_dynamic_skin() {

if (karma_case == true) {
    $(document).ready(function() {
        document.getElementById('takeover').style.width = '1014px';     //assign cmn_wrap width
        document.getElementById('takeover').style.marginLeft = "auto";
        document.getElementById('takeover').style.marginRight="auto";
    });
}
else {
document.getElementById('cmn_wrap').style.width = (cmn_wrap_width + 'px');     //assign cmn_wrap width
}

    cmn_set_gutters_width();
    document.getElementById('cmn_dynBg_lt').style.marginRight = (cmn_wrap_width/2 + 'px');
    document.getElementById('cmn_dynBg_rt').style.marginLeft = (cmn_wrap_width/2 + 'px');
    document.getElementById('cmn_dynBg_rt').style.display = "block";
    document.getElementById('cmn_dynBg_lt').style.display = "block";
}

function cmn_Add_Skin_Event(d, c, a) {
    if (d.addEventListener) {
        d.addEventListener(c, a, false);
        return true
    } else {
        if (d.attachEvent) {
            var b = d.attachEvent("on" + c, a);
            return b
        } else {
            return false
        }
    }
}

//LOAD SKIN
cmn_load_dynamic_skin();

//TAKE CARE OF WINDOW RESIZE
cmn_Add_Skin_Event(window, "resize", cmn_set_gutters_width);
