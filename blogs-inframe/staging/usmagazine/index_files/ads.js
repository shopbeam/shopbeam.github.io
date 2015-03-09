function us_renderAd(url){
    if (typeof googletag === 'undefined' && typeof window.Krux !== 'undefined' && window.Krux.dfppKeyValues) {
        var pieces = url.split(';');
        if (pieces.length > 1 && window.Krux.dfppKeyValues) {
        	// remove final semi-colon from Krux values
        	var kruxKeyVals = window.Krux.dfppKeyValues;
        	pieces.splice(1, 0, kruxKeyVals.substring(0, kruxKeyVals.length - 1));
            url = pieces.join(';');
        }
    }
    document.write('<script src="'+ url +'"><\/script>');
}

function us_addLegacyDartKeyword(keyword){
    if( typeof keyword === 'string' && typeof gptAds !== 'undefined' && typeof gptAds.keywords !== 'undefined' ) {
        if( gptAds.keywords.indexOf(keyword) < 0 ) {
            gptAds.keywords.push(keyword);
            for( var i=0; i < gptAds.slots.length; i++ ) {
                if( typeof gptAds.slots[i] !== 'undefined' ) {
                    gptAds.slots[i].setTargeting("kw", keyword);
                }
            } 
        }      
    }
}
