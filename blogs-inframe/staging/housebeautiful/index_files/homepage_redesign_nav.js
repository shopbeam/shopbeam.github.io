//HB HP Redesign Nav
$(function() {
    $("#decoratingdd, #decorating_btn")
        .mouseover(function() { 
            var src = $("#decorating_btn").attr("src").match(/[^\.]+/);
            if (src[0].indexOf('over') < 0) {
                src += "-over.gif";
                $("#decorating_btn").attr("src", src);
            }else{
                $("#decorating_btn").addClass("selected");
            };
        })
        .mouseout(function() {
            if(!$("#decorating_btn").hasClass("selected")){
                var src = $("#decorating_btn").attr("src").replace("-over", "");
                $("#decorating_btn").attr("src", src);
            }else{
                $("#kitchens_btn").removeClass("selected");
                $("#pictures_btn").removeClass("selected");
                $("#shopping_btn").removeClass("selected");
            }
        });	
		
	$("#kitchensdd, #kitchens_btn")
        .mouseover(function() { 
            var src = $("#kitchens_btn").attr("src").match(/[^\.]+/);
            if (src[0].indexOf('over') < 0){
                src += "-over.gif";
                $("#kitchens_btn").attr("src", src);    
            }else{
                $("#kitchens_btn").addClass("selected");
            }
        })
        .mouseout(function() {
            if(!$("#kitchens_btn").hasClass("selected")){
                var src = $("#kitchens_btn").attr("src").replace("-over", "");
                $("#kitchens_btn").attr("src", src);    
            }else{
                $("#decorating_btn").removeClass("selected");
                $("#pictures_btn").removeClass("selected");
                $("#shopping_btn").removeClass("selected");
            }
        });	
		
	$("#picturesdd, #pictures_btn")
        .mouseover(function() { 
            var src = $("#pictures_btn").attr("src").match(/[^\.]+/);
            if(src[0].indexOf('over') < 0){
                src += "-over.gif";
                $("#pictures_btn").attr("src", src);
            }else{
                $("#pictures_btn").addClass("selected");
            }
        })
        .mouseout(function() {
            if(!$("#pictures_btn").hasClass("selected")){
                var src = $("#pictures_btn").attr("src").replace("-over", "");
                $("#pictures_btn").attr("src", src);
            }else{
                $("#decorating_btn").removeClass("selected");
                $("#kitchens_btn").removeClass("selected");
                $("#shopping_btn").removeClass("selected");
            }
        });
		
	$("#shoppingdd, #shopping_btn")
        .mouseover(function() { 
            var src = $("#shopping_btn").attr("src").match(/[^\.]+/);
            if(src[0].indexOf('over') < 0){
                src += "-over.gif";
                $("#shopping_btn").attr("src", src);
            }else{
                $("#shopping_btn").addClass("selected");
            }
        })
        .mouseout(function() {
            if(!$("#shopping_btn").hasClass("selected")){
                var src = $("#shopping_btn").attr("src").replace("-over", "");
                $("#shopping_btn").attr("src", src);
            }else{
                $("#decorating_btn").removeClass("selected");
                $("#kitchens_btn").removeClass("selected");
                $("#pictures_btn").removeClass("selected");
            }
        });
});

//Removes Bottom Border on 2nd to last element in dropdown
$(function() {

	var navs = "#redesign_nav #decoratingdd div:last, #redesign_nav #kitchensdd div:last, #redesign_nav #picturesdd div:last, #redesign_nav #shoppingdd div:last";

    $(navs).addClass("last");
    $(navs).prev().addClass("sec_last");

	$(".last").mouseover(function(){
		 $(".sec_last").removeClass("add_border").addClass("no_border");
	});
	$(".last").mouseout(function(){
		 $(".sec_last").removeClass("no_border").addClass("add_border");
	});
});


var disappeardelay=250  //menu disappear speed onMouseout (in miliseconds)
var enableanchorlink=0 //Enable or disable the anchor link when clicked on? (1=e, 0=d)
var hidemenu_onclick=1 //hide menu when user clicks within menu? (1=yes, 0=no)
var horizontaloffset=1 //horizontal offset of menu from default location. (0-5 is a good value)

/////No further editting needed

var ie5=document.all
var ns6=document.getElementById&&!document.all

function getposOffset(what, offsettype){
var totaloffset=(offsettype=="left")? what.offsetLeft : what.offsetTop;
var parentEl=what.offsetParent;
while (parentEl!=null){
totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
parentEl=parentEl.offsetParent;
}
return totaloffset;
}

function showhide(obj, e, visible, hidden){
	if (ie5||ns6) dropmenuobj.style.left=dropmenuobj.style.top=-500
	if (e.type=="click" && obj.visibility==hidden || e.type=="mouseover") {
		obj.visibility=visible;
		obj.zIndex=5999999;
		obj.display="block";
	} else if (e.type=="click") {
		obj.visibility=hidden;
		obj.zIndex=1;
		obj.display="none";
	}
}

function iecompattest(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function clearbrowseredge(obj, whichedge){
var edgeoffset=0
if (whichedge=="rightedge"){
var windowedge=ie5 && !window.opera? iecompattest().scrollLeft+iecompattest().clientWidth-15 : window.pageXOffset+window.innerWidth-15
dropmenuobj.contentmeasure=dropmenuobj.offsetWidth
if (windowedge-dropmenuobj.x-obj.offsetWidth < dropmenuobj.contentmeasure)
edgeoffset=dropmenuobj.contentmeasure+obj.offsetWidth+(horizontaloffset*2) //no space to the right of page? Move menu over to the left
}
else{
var topedge=ie5 && !window.opera? iecompattest().scrollTop : window.pageYOffset
var windowedge=ie5 && !window.opera? iecompattest().scrollTop+iecompattest().clientHeight-15 : window.pageYOffset+window.innerHeight-18
dropmenuobj.contentmeasure=dropmenuobj.offsetHeight
if (windowedge-dropmenuobj.y < dropmenuobj.contentmeasure){ //move menu up?
edgeoffset=dropmenuobj.contentmeasure-obj.offsetHeight
if ((dropmenuobj.y-topedge)<dropmenuobj.contentmeasure) //up no good either? (position at top of viewable window then)
edgeoffset=dropmenuobj.y
}
}
return edgeoffset
}

function dropdownmenu(obj, e, dropmenuID){
if (window.event) event.cancelBubble=true
else if (e.stopPropagation) e.stopPropagation()
if (typeof dropmenuobj!="undefined") //hide previous menu
{
	dropmenuobj.style.visibility="hidden";
	dropmenuobj.style.display="none";   
}
clearhidemenu()
if (ie5||ns6){
obj.onmouseout=delayhidemenu
dropmenuobj=document.getElementById(dropmenuID)
if (hidemenu_onclick) dropmenuobj.onclick=function(){dropmenuobj.style.visibility='hidden';dropmenuobj.style.display="none";}
dropmenuobj.onmouseover=clearhidemenu
dropmenuobj.onmouseout=ie5? function(){ dynamichide(event)} : function(event){ dynamichide(event)}
showhide(dropmenuobj.style, e, "visible", "hidden")
dropmenuobj.x=getposOffset(obj, "left")
dropmenuobj.y=getposOffset(obj, "top")
dropmenuobj.style.left=dropmenuobj.x-clearbrowseredge(obj, "rightedge")+obj.offsetWidth+horizontaloffset+"px"
dropmenuobj.style.top=dropmenuobj.y-clearbrowseredge(obj, "bottomedge")+"px"
}
return clickreturnvalue()
}

function clickreturnvalue(){
if ((ie5||ns6) && !enableanchorlink) return false
else return true
}

function contains_ns6(a, b) {
while (b.parentNode)
if ((b = b.parentNode) == a)
return true;
return false;
}

function dynamichide(e){
if (ie5&&!dropmenuobj.contains(e.toElement))
delayhidemenu()
else if (ns6&&e.currentTarget!= e.relatedTarget&& !contains_ns6(e.currentTarget, e.relatedTarget))
delayhidemenu()
}

function delayhidemenu(){
delayhide=setTimeout("dropmenuobj.style.visibility='hidden'; dropmenuobj.style.display='none'",disappeardelay)
}

function clearhidemenu(){
if (typeof delayhide!="undefined")
clearTimeout(delayhide)
}




//Gives all Buttons with Class ".over" a hover
$(function() {
    $(".over")
        .mouseover(function() { 
            var src = $(this).attr("src").match(/[^\.]+/) + "-over.gif";
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("-over", "");
            $(this).attr("src", src);
        });	
});
