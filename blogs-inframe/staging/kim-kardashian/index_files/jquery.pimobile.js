/**
 * Plugin to avoid fixed position issue on iPod, iPad and other mobile devices.
 * 
 * author: Eugene Zhurakhovskiy, PostIndustria
 */
(function( $ ){
	$.fn.piMoveToCenter = function() {		
		if (Math.abs(orientation) == 90)
		{ // landscape
			this.css( 'top',  document.body.scrollTop + ( ( screen.width - this.height() ) / 2 ) );
			this.css( 'left', document.body.scrollLeft + ( ( screen.height - this.width() ) / 2 ) );
		} else { // portrait
			this.css( 'top',  document.body.scrollTop + ( ( screen.height -  this.height()) / 2 ) );
			this.css( 'left', document.body.scrollLeft + ( ( screen.width - this.width() ) / 2 ) );
		}
		return this;
	};
})( jQuery );