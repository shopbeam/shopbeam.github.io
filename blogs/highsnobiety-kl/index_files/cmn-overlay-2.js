/**
 * CMN Overlay
 *
 * v 2.0.7
 * @author Jonathan Crockett
 * @date 2/12/12
 *
 * - Absolute position fix.
 * 
 * Code adapted from:
 * A overlay-js Project
 * Copyright 2009 Eric Liu. All rights reserved.
 * MIT Licensed
 * Adapted for complex.
 *
 * @usage
 * cmnOverlayV2.showOverlay('http://www.complex.com', 600, 300, 'auto');
 * cmnOverlayV2.hideOverlay();
 *
 */
var cmnOverlayV2=new function(){this.defaultWidth=850;this.defaultHeight=500;this.showOverlay=function(e,t,n,r){if(t&&n){this.width=t;this.height=n}else{this.width=this.defaultWidth;this.height=this.defaultHeight}if(r===true){this.scrolling="auto"}else if(r){this.scrolling=r}else{this.scrolling="no"}this.offsetHeight=Math.floor(this.height/2);this.offsetWidth=Math.floor(this.width/2);if(!document.getElementById("cmn_overlay_cont")){this.createOverlayHTML()}if(this.isIE6()){this.ie6OverlayStyles()}else{this.overlayStyles()}document.getElementById("cmn_overlay_cont").style.display="block";if(!document.getElementById("cmn_overlay_iframe")){this.loadIframe(e)}else{if(document.getElementById("cmn_overlay_iframe").scrolling!=this.scrolling){document.getElementById("cmn_banner_overlay_content").removeChild(document.getElementById("cmn_overlay_iframe"));this.loadIframe(e)}else{document.getElementById("cmn_overlay_iframe").width=this.width;document.getElementById("cmn_overlay_iframe").height=this.height;document.getElementById("cmn_overlay_iframe").src=e}}};this.hideOverlay=function(){document.getElementById("cmn_overlay_cont").style.display="none";document.getElementById("cmn_overlay_iframe").src=""};this.loadIframe=function(e){var t=this.createIFrame(e,this.width,this.height,"cmn_overlay_iframe",this.scrolling);document.getElementById("cmn_banner_overlay_content").appendChild(t)};this.createIFrame=function(e,t,n,r,i){var s;s=document.createElement("IFRAME");s.style.zIndex="1000";s.marginheight=0;s.marginwidth=0;s.width=t;s.height=n;s.scrolling=i;s.frameBorder="0";s.border="0";s.id=r;s.setAttribute("src",e);return s};this.createOverlayHTML=function(){var e="";e+="   ";e+="     ";e+='        <div id="cmn_overlay_drop_shadow" style="width: 100%;height:100%; position: absolute; left:0px !important;top:0px !important;z-index:167777260;background-color:#000000; opacity:0.9; filter:alpha(opacity=90);display:block;" onclick="cmnOverlayV2.hideOverlay();"></div>';e+="        ";e+='             <div id="cmn_banner_overlay_content" style="">';e+='                <div id="cmn-banner-overlay-x" style="height:24px; position:absolute; right:-28px; top:-2px; width:26px; background: url(http://cdn.complexmedianetwork.com/cdn/complex.com/assets/banners/js/overlay_x.png) no-repeat; color: #000000 !important; font-family: arial, verdana, helvetica !important; font-size: 12px !important">';e+="                <div onclick=\"javascript: cmnOverlayV2.hideOverlay();\" style=\"text-decoration: none; font-size: 12px !important; font-family: arial, verdana, helvetica !important; color: #999999; outline: none !important; display: block; width: 100%; height: 100%;\" onmouseout=\"this.style.textDecoration = 'none'; this.style.color = '#999999';\" onmouseover=\"this.style.cursor = 'pointer'; this.style.color = '#999999';\"></div></div>";e+="             </div>";e+="";e+="        ";e+="  </div>";e+="    ";e+="        ";e+="        </div>";var t=document.getElementsByTagName("body")[0];var n=document.createElement("div");n.id="cmn_overlay_cont";n.style.width="100%";n.style.height="100%";n.style.position="fixed";n.style.display="none";n.style.zIndex=167777250;n.style.top=0;n.style.left=0;n.innerHTML=e;t.appendChild(n)};this.isIE6=function(){return window.XMLHttpRequest==undefined&&ActiveXObject!=undefined};this.ie6OverlayStyles=function(){var e=0,t=0;if(document.body&&document.body.offsetWidth){e=document.body.offsetWidth;t=document.body.offsetHeight}if(document.compatMode=="CSS1Compat"&&document.documentElement&&document.documentElement.offsetWidth){e=document.documentElement.offsetWidth;t=document.documentElement.offsetHeight}if(window.innerWidth&&window.innerHeight){e=window.innerWidth;t=window.innerHeight}var n=document.getElementById("cmn_banner_overlay_content");n.style.marginLeft="-"+this.offsetWidth+"px";n.style.marginTop=Math.floor((t-this.height)/2)+"px";n.style.width=this.width+"px";n.style.height=this.height+"px";n.style.position="absolute";n.style.left="50%";n.style.zIndex="167777261";n.style.display="block";n.style.backgroundColor="#ffffff";n.style.border="2px solid white";document.getElementById("cmn_overlay_drop_shadow").style.width=e+"px";document.getElementById("cmn_overlay_drop_shadow").style.height=t+"px";document.getElementById("cmn_overlay_drop_shadow").style.position="absolute";document.getElementById("cmn_overlay_drop_shadow").style.zIndex="167777260"};this.overlayStyles=function(){var e=document.getElementById("cmn_banner_overlay_content");e.style.cssText="position: absolute; top: 50%; left: 50%; z-index: 167777261; background: #fff; border: 2px solid white; background: url('http://cdn.complexmedianetwork.com/cdn/complex.com/assets/banners/js/loadingAnimation.gif') center center no-repeat #ffffff;";e.style.marginLeft="-"+this.offsetWidth+"px";e.style.marginTop="-"+this.offsetHeight+"px";e.style.width=this.width+"px";e.style.height=this.height+"px";e.style.display="block"}}