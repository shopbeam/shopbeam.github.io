$( document ).ready( function () {
	$('#featured_slide').jshowoff({
        controls: true,
        links: true,
        speed: 4000,
    	autoPlay: true,
    	controlText: { play:'', pause:'', previous:'&nbsp', next:'&nbsp' }
    });
	jQuery('.thumb_list ul').jcarousel({wrap: 'circular'});
});
