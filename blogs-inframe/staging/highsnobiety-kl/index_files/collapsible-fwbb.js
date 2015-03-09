/* data collection - do NOT change ids below if you did not change ids in the html */
var banner_id           = "fwbanner";
var holder_id           = "cmn_holder";
var container_id        = "";

var head_container      = document.getElementById("cmn_ad_tag_head");

if (typeof(head_container) != 'undefined' && head_container != null) {
    container_id = "cmn_ad_tag_head";
}
else {
    container_id = "fw_promo";
}

//MANUALLY expand banner
function cmn_expand_and_track() {
    _gaq.push(['d._trackEvent', campaign_name, unit_name, 'ExpandBanner']);
    cmn_bb_expand();
}

//MANUALLY collapse banner
function cmn_collapse_and_track() {
    _gaq.push(['d._trackEvent', campaign_name, unit_name, 'CollapseBanner']);
    cmn_bb_collapse();
}

//expand banner
function cmn_bb_expand() {
    document.getElementById(holder_id).innerHTML = cmn_expanded_src;
    document.getElementById(banner_id).style.backgroundImage  = "url("+cmn_open_bg+")";
    document.getElementById(container_id).style.height        = cmn_open_height;
    document.getElementById(banner_id).style.height           = cmn_open_height;
    setCandy(cmn_candy_name,'opened',6);
}

//collapse banner
function cmn_bb_collapse() {
    document.getElementById(banner_id).style.backgroundImage  = "url("+cmn_coll_bg+")";
    document.getElementById(container_id).style.height        = cmn_coll_height;
    document.getElementById(banner_id).style.height           = cmn_coll_height;
    document.getElementById(holder_id).innerHTML = cmn_collapsed_src;
    setCandy(cmn_candy_name,'collapsed',6)
}

//set candy
function setCandy(c_name,value,exhours) {  
    var now = new Date();
    var time = now.getTime();
    time += exhours * 3600 * 1000;
    now.setTime(time);
    var c_value=escape(value) + ((exhours==null) ? "" : "; expires="+now.toGMTString());
    document.cookie =c_name + "=" + c_value;
}

//get candy
function getCandy(c_name) {
    var i,x,y,ARRcandies=document.cookie.split(";");
    for (i=0;i<ARRcandies.length;i++) {
        x=ARRcandies[i].substr(0,ARRcandies[i].indexOf("="));
        y=ARRcandies[i].substr(ARRcandies[i].indexOf("=")+1);
        x=x.replace(/^\s+|\s+$/g,"");
        if (x==c_name) {
            return unescape(y);
        }
    } 
}


function cmn_load_banner() {
    var cmn_banner_state = getCandy(cmn_candy_name);
    if (cmn_banner_state != null && cmn_banner_state != "") {
        //candy is set and is not empty
        //proceeed to check if state is closed or opened
        if (cmn_banner_state == "opened") {
            //open banner
            cmn_bb_expand();
        }
        //collapse if state is collapsed
        else {
            cmn_bb_collapse()
        }
    }
    else {
        //candy not set = viewed for the first time or after 1 day -> open banner
        cmn_bb_expand();
    }
}

//LOAD BANNER
cmn_load_banner();