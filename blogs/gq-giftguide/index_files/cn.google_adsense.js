
if (typeof CN === 'undefined' || !CN) {
    var CN = {};
}

CN.googleAdsense = (function($) {
        var url="http://pagead2.googlesyndication.com/pagead/show_ads.js",

        gAdsense = function(sz, adtest,adType,adClient,adChannel,adcolor) {
            var size = sz.split("x");
            google_ad_client = adClient; // substitute your client_id
            google_ad_channel = adChannel;
            google_ad_width = size[0]; // with of iframe
            google_ad_height = size[1]; // height of iframe
            google_language = 'en';
            google_safe = 'high';
            google_encoding = 'utf8';

            // @params text, image, flash, html
            google_ad_type = adType;
            google_ad_format = '';

            // "on" in stag, "off" on prod
            google_adtest = adtest;

            // targetting section (see below)
            google_ad_section = 'default';
            google_image_size =  sz;
            google_max_num_ads=3;

            if(adcolor){
                var color = adcolor.split(",");
                google_color_link = color[0];
                google_color_text = color[1];
                google_color_url = color[2];
                google_color_line = color[3];
                google_color_bg = color[4]; // the ads' background coloris gray
                google_color_border = color[5];//the border surrounding all of the ads is red
            }
        };

    return {
        iframGoogleAdsense: function(size, ad,type,adClientId,adChannelId,adcolors) {
           gAdsense(size, ad,type,adClientId,adChannelId,adcolors);
           document.writeln("<script type='text/javascript' src='"+url+"'></script>");
        }
    }
})(jQuery)