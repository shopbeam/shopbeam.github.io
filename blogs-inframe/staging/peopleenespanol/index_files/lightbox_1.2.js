if (typeof(prwin) == "undefined"){
	var prwin = window;
}
function prDocumentSize() {
	var D = prwin.document;
	var w = Math.max(
		Math.max(D.body.scrollWidth, D.documentElement.scrollWidth),
		Math.max(D.body.offsetWidth, D.documentElement.offsetWidth),
		Math.max(D.body.clientWidth, D.documentElement.clientWidth)
	),
	h = Math.max(
		Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
		Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
		Math.max(D.body.clientHeight, D.documentElement.clientHeight)
	);
	return [w,h];
}

function prWindowSize() {
	  var w = 0, h = 0;
	  if( typeof( prwin.window.innerWidth ) == 'number' ) {
		//Non-IE
		w = prwin.window.innerWidth;
		h = prwin.window.innerHeight;
	  } else if( prwin.document.documentElement && ( prwin.document.documentElement.clientWidth || prwin.document.documentElement.clientHeight ) ) {
		//IE 6+ in 'standards compliant mode'	
		w = prwin.document.documentElement.clientWidth;
		h = prwin.document.documentElement.clientHeight;
	  } else if( prwin.document.body && ( prwin.document.body.clientWidth || prwin.document.body.clientHeight ) ) {
		//IE 4 compatible
		w = prwin.document.body.clientWidth;
		h = prwin.document.body.clientHeight;
	  }
		return [w,h];
}
function prGetScrollOffset(){
	var y;
	if (self.pageYOffset){ 
		y = self.pageYOffset;
	}else if (prwin.document.documentElement && prwin.document.documentElement.scrollTop){
		y = prwin.document.documentElement.scrollTop;
	}else if (prwin.document.body){
		y = prwin.document.body.scrollTop;
	}
	return y;
}
function prFadeElem(from,to,dur) {
	var inc = 10;
	var steps = dur/inc,
		d = (from<to)?1:-1,
		op = 0;
	var s = Math.abs(to-from)/steps;
	for (var i = 0; i <= steps; i += 1) {
		op = (from+(s*i*d)).toFixed(2);
		setTimeout("prSetElemOpacity("+op+");",i*inc);	
	}
}
function prSetElemOpacity(op) {
	var lb = prwin.document.getElementById("prLightBox");
	lb.style.opacity = op.toString();
	lb.style.filter = 'alpha(opacity='+Math.floor(op*100).toString()+')';
}
function prInitLightBox(){
	var lb = prwin.document.getElementById("prLightBox");
	var prlbimg = prwin.document.getElementById("prlbimg");
	if (!lb){
		lb = prwin.document.createElement("DIV");
		lb.id = "prLightBox";
		lb.style.visibility = "visible";
		lb.style.position = (Pointroll.useAbs)?"absolute":"fixed";
		lb.style.top = lb.style.left = "0px";
		lb.style.zIndex = (Pointroll.zIndex-2).toString();
		lb.style.backgroundColor = Pointroll.color;
		lb.style.opacity = "0.0";
		lb.style.filter = 'alpha(opacity=0)';
		prlbimg = prwin.document.createElement("IMG");
		prlbimg.id="prlbimg";
		prlbimg.src="http://speed.pointroll.com/PointRoll/Media/Banners/tran1x1.gif";
		prlbimg.width="0";
		prlbimg.height="0";
		prlbimg.style.width="0px";
		prlbimg.style.height="0px";
		prlbimg.style.border="0px";
		prlbimg.style.padding="0px";
		prlbimg.style.margin="0px";
		prlbimg.style.background="none";
		prlbimg.style.outline="none";
		prlbimg.style.position="absolute";
		prlbimg.style.visibility="visible";
		prlbimg.style.overflow="hidden";
		prlbimg.style.opacity = "0.0";
		prlbimg.style.filter = 'alpha(opacity=0)';
		lb.appendChild(prlbimg);
				
		if (Pointroll.lbBG != ''){
			lb.style.background = Pointroll.lbBG;
		}
		if (Pointroll.element != ''){
			try{
				var elem = prwin.document.getElementById(Pointroll.element);
				if (elem==null) throw "error";
				var c = prwin.document.createElement("DIV");
				c.style.position = "relative";
				c.style.zIndex = (Pointroll.zIndex-2).toString();
				lb.style.position = "absolute";
				lb.style.width = elem.offsetWidth+"px";
				lb.style.height = elem.offsetHeight+"px";
				c.appendChild(lb);
				elem.insertBefore(c,elem.firstChild);
			}catch(e){
				prwin.document.body.insertBefore(lb,prwin.document.body.firstChild);
				Pointroll.element = "";
			}
		} else {
			prwin.document.body.insertBefore(lb,prwin.document.body.firstChild);
		}
	}
	lb.style.display = "block";
	if (Pointroll.element == ''){
		prSizeLightbox(lb);
	}
	prFadeElem(0,Pointroll.opacity,Pointroll.fadeTime);
}
function prSizeLightbox(lb){
	lb.style.width = Math.max(prDocumentSize()[0],prWindowSize()[0])+"px";
	lb.style.height = Math.max(prDocumentSize()[1],prWindowSize()[1])+"px";
}
function prCenterFixedMargins(obj){
	obj.firstChild.style.marginLeft = -(obj.firstChild.offsetWidth/2)+"px";
	obj.firstChild.style.marginTop = -(obj.firstChild.offsetHeight/2)+"px";
}
function prMoveLightboxPanel(pid){
	var obj = prwin.document.getElementById("pro"+pid), xOffset = 0, yOffset = 0;
	obj.style.marginLeft=obj.style.marginTop='0';
	var n = obj.firstChild;
	while(n.offsetParent){
		xOffset += n.offsetLeft;
		yOffset += n.offsetTop;
		n=n.offsetParent;
	}	
	obj.style.marginLeft = ((prWindowSize()[0]/2)-obj.firstChild.offsetWidth/2)-xOffset+"px";
	obj.style.marginTop = ((prWindowSize()[1]/2)-obj.firstChild.offsetHeight/2)-yOffset+prGetScrollOffset()+"px";
}
//used with prMakeLightbox
function prOpenLightBox(pid){
	if (Pointroll.pids.join(":").indexOf(pid) >= 0){
		prwin.prajx = 1;
		prInitLightBox();
		var obj = prwin.document.getElementById(((Pointroll.isIE)?"pro":"prf")+pid);
		if (Pointroll.isIE){
			try{prwin.document.body.insertBefore(obj,prwin.document.body.firstChild);}catch(e){try{console.log("Error moving panel to body");}catch(ee){}}
		}
		obj.style.zIndex = obj.firstChild.style.zIndex = Pointroll.zIndex;
		if(!Pointroll.useAbs){
			obj.firstChild.style.position = "fixed";
			obj.firstChild.style.left = obj.firstChild.style.top = "50%";
			prCenterFixedMargins(obj);
		} else {
			prMoveLightboxPanel(pid);
			Pointroll.inrvl = setInterval("prMoveLightboxPanel('"+pid+"')",100);
		}
		if (typeof(Pointroll.onLightBoxOpen) == 'function'){
			try{Pointroll.onLightBoxOpen();}catch(e){}
		}
	}
}
//used with prMakeLightbox
function prCloseLightBox(pid){
	if (Pointroll.pids.join(":").indexOf(pid) >= 0){
		prFadeElem(Pointroll.opacity,0,Pointroll.fadeTime);
		setTimeout((function(){prwin.document.getElementById("prLightBox").style.display = "none";}),Pointroll.fadeTime);
		clearInterval(Pointroll.inrvl);
		if (typeof(Pointroll.onLightBoxClose) == 'function'){
			try{Pointroll.onLightBoxClose();}catch(e){}
		}
	}
}

function prChangeLightBox(pid){
	if (Pointroll.pids.join(":").indexOf(pid) >= 0){
		if(!Pointroll.useAbs){
			var obj = prwin.document.getElementById(((Pointroll.isIE)?"pro":"prf")+pid);
			prCenterFixedMargins(obj);
			obj.style.zIndex = Pointroll.zIndex;
		}
	}
}

prwin.prAddEvent('resize',(function(z) {
	var lb = prwin.document.getElementById("prLightBox");
	if (lb && Pointroll.element == ''){
		prSizeLightbox(lb);
	}
}),prwin);
prwin.prAddEvent('pi',prOpenLightBox);
prwin.prAddEvent('pu',prCloseLightBox);
prwin.prAddEvent('pr',prChangeLightBox);

var prCheckEvents = function(){
	var e,l = prwin.prDQ.length;
	if (l > 0){
		for (i = 0; i < l; i++){
			e = prwin.prDQ[i];
			switch (e.q){
			case 'pi':
				prOpenLightBox(e.z);
				break;
			case 'pu':
				prCloseLightBox(e.z);
				break;
			case 'pr':
				prChangeLightBox(e.z);
				break;
			}
			try{console.log('Event found after load : '+e.q+" - "+e.z);}catch(ee){}
		}
	}
}();



