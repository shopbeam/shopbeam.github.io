/* AG-master 13.10.13-40 (2013-10-13 13:33:59 EDT) */
var rsinetsegs=[];
var rmxUrls=['http://ad.yieldmanager.com/pixel?id=1491470&t=2','http://ad.yieldmanager.com/pixel?id=2416533&t=2','http://ad.yieldmanager.com/pixel?id=1753374&t=2','http://ad.yieldmanager.com/pixel?id=2299727&t=2','http://ad.yieldmanager.com/pixel?id=2405281&t=2','http://ad.yieldmanager.com/pixel?id=2107773&t=2','http://ad.yieldmanager.com/pixel?id=2297137&t=2','http://ad.yieldmanager.com/pixel?id=908888&t=2','http://ad.yieldmanager.com/pixel?id=906701&t=2','http://ad.yieldmanager.com/pixel?id=1407478&t=2','http://ad.yieldmanager.com/pixel?id=2228144&t=2','http://ad.yieldmanager.com/pixel?id=2384609&t=2','http://ad.yieldmanager.com/pixel?id=2253024&t=2','http://ad.yieldmanager.com/pixel?id=2107766&t=2','http://ad.yieldmanager.com/pixel?id=2408357&t=2','http://ad.yieldmanager.com/pixel?id=1085864&t=2','http://ad.yieldmanager.com/pixel?id=1400194&t=2','http://ad.yieldmanager.com/pixel?id=1314564&t=2','http://ad.yieldmanager.com/pixel?id=2413543&t=2','http://ad.yieldmanager.com/pixel?id=1009454&t=2','http://ad.yieldmanager.com/pixel?id=2405279&t=2','http://ad.yieldmanager.com/pixel?id=1400156&t=2','http://ad.yieldmanager.com/pixel?id=1312460&t=2','http://ad.yieldmanager.com/pixel?id=1400188&t=2','http://ad.yieldmanager.com/pixel?id=1085865&t=2',];
var segids="'F09828_11171','F09828_10281','F09828_10665','F09828_10702','F09828_10804','F09828_10807','F09828_11018','F09828_11037','F09828_11089','F09828_11193','D08734_73860','F09828_11441','F09828_12160','F09828_12165','F09828_12184','F09828_12219','F09828_12381','D08734_73926','D08734_73929','D08734_73932','D08734_73938','D08734_73945','F09828_12568','F09828_12570','F09828_0'";
function asi_makeGIF(u){var i=new Image(2,2);i.src=u;return i;}
if(segids.indexOf("F09828_11950") == -1){
for(var x = 0; x < rmxUrls.length; ++x){
    if(typeof rmxUrls[x] !== "undefined") {
        asi_makeGIF(rmxUrls[x]);
    }
}
}
if(typeof(DM_onSegsAvailable)=="function"){DM_onSegsAvailable([],'f09828');}