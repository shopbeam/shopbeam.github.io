/**
Stereogum javascript functions
functions required for WPMU Stereogum theme
MODIFIED FOR KIM K
author: Greg Jackson
dependencies: jquery
**/


// modal overlay (login/signup etc)
function revealModal(divID) {
	window.scrollTo(0,0);
	window.onscroll = function () { document.getElementById(divID).style.top = document.body.scrollTop; };
	document.getElementById(divID).style.display = "block";
	document.getElementById(divID).style.top = document.body.scrollTop;
}

function hideModal(divID){
	document.getElementById(divID).style.display = "none";
}