function googleAdsense(sz, adtest, no_of_ad){
            var size = sz.split("x");
            window.google_ad_client = 'ca-conde_teenvogue'; // substitute your client_id
            window.google_ad_channel = '3803649991';
            window.google_ad_width = size[0]; // width of iframe
            window.google_ad_height = size[1]; // height of iframe
            window.google_language = 'en';
            window.google_safe = 'high';
            window.google_encoding = 'utf8';

            // @params text, image, flash, html
            window.google_ad_type = 'text';
            window.google_ad_format = '';

            // "on" in stag, "off" on prod
            window.google_adtest = adtest;
            window.google_ad_section = 'default';
            window.google_image_size = sz;
            window.google_max_num_ads = no_of_ad;
            window.google_color_bg = 'ffffff'; // the ads' background color is white
            window.google_color_border = 'ffffff'; //the border surrounding all of the ads is red
            window.google_color_line = 'ffffff'; // the line surrounding each ad is green
            window.google_color_link = '000000'; // the ad link is blue
            window.google_color_text = '000000'; // the ad text is sage green
            window.google_color_url = 'ed1d24'; // color the link
            window.google_font_size = 'small'; // font size of the text
}