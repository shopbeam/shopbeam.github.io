var doubleclickBreakout = {
	getIframe: function() {
		return window.parent.document.getElementById(window.frameElement.id);
	},
	inIframe: function() {
		return (window.frameElement) ? true : false;
	},
	getFrameContents: function() {
	   var iFrame =  window.parent.document.getElementById(window.frameElement.id);
	   var iFrameBody;
	   if ( iFrame.contentDocument ) 
	   { // FF
	     iFrameBody = iFrame.contentDocument.getElementsByTagName('body')[0];
	   }
	   else if ( iFrame.contentWindow ) 
	   { // IE
	     iFrameBody = iFrame.contentWindow.document.getElementsByTagName('body')[0];
	   }
	    return iFrameBody.innerHTML;
	},
	hide: function(iframe) {
		iframe.width = 0;
		iframe.height = 0;
	},
	breakout: function(callback) {
		if (!this.inIframe()) { return; }
		var iframe = this.getIframe();
		var iFrame_container = iframe.parentNode;
		var new_div = document.createElement('div');
		new_div.id = 'breakoutDiv';
		new_div.innerHTML = this.getFrameContents();
		// this.insertAfter(iFrame_container, new_div);
		iFrame_container.appendChild(new_div);
		this.hide(iframe);
	},
	insertAfter: function(referenceNode, newNode) {
	    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
	}
};
doubleclickBreakout.breakout();
