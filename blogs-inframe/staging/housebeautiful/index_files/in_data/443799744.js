/* AG-master 13.10.22-43 (2013-10-22 12:57:09 UTC) */
var rsinetsegs=[];
var rmxUrls=['http://ad.yieldmanager.com/pixel?id=1261241&t=2','http://ad.yieldmanager.com/pixel?id=2408358&t=2','http://ad.yieldmanager.com/pixel?id=1400384&t=2','http://ad.yieldmanager.com/pixel?id=2429832&t=2','http://ad.yieldmanager.com/pixel?id=1904780&t=2','http://ad.yieldmanager.com/pixel?id=2107775&t=2','http://ad.yieldmanager.com/pixel?id=908888&t=2','http://ad.yieldmanager.com/pixel?id=906701&t=2','http://ad.yieldmanager.com/pixel?id=1407478&t=2','http://ad.yieldmanager.com/pixel?id=1009454&t=2',];
var segids="'F09828_10281','F09828_10665','F09828_10680','F09828_10702','F09828_10806','F09828_11037','F09828_11089','D08734_73860','F09828_11411','F09828_12184','F09828_12219','D08734_73945','D08734_73948','F09828_50015','F09828_0'";
function asi_makeGIF(u){var i=new Image(2,2);i.src=u;return i;}
if(segids.indexOf("F09828_11950") == -1){
for(var x = 0; x < rmxUrls.length; ++x){
    if(typeof rmxUrls[x] !== "undefined") {
        asi_makeGIF(rmxUrls[x]);
    }
}
}
if(typeof(DM_onSegsAvailable)=="function"){DM_onSegsAvailable([],'f09828');}