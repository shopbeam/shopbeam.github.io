/* mycon-bgas 14.03.17-12-12 (2014-03-17 17:46:06 GMT) */

rsinetsegs=['D08734_72079','D08734_70018','D08734_70025','D08734_70030','D08734_70041','D08734_70067','D08734_70075','D08734_70086','D08734_70093','D08734_70098','D08734_70117','D08734_70509','D08734_70513','D08734_70751','D08734_71001','D08734_72008','D08734_72016','D08734_72017','D08734_72081','D08734_72083','F10931_0'];
var rsiExp=new Date((new Date()).getTime()+2419200000);
var rsiDom=location.hostname;
rsiDom=rsiDom.replace(/.*(\.[\w\-]+\.[a-zA-Z]{3}$)/,'$1');
rsiDom=rsiDom.replace(/.*(\.[\w\-]+\.\w+\.[a-zA-Z]{2}$)/,'$1');
rsiDom=rsiDom.replace(/.*(\.[\w\-]{3,}\.[a-zA-Z]{2}$)/,'$1');
var rsiSegs="";
var rsiPat=/.*_5.*/;
for(x=0;x<rsinetsegs.length;++x){if(!rsiPat.test(rsinetsegs[x]))rsiSegs+='|'+rsinetsegs[x];}
document.cookie="rsi_segs="+(rsiSegs.length>0?rsiSegs.substr(1):"")+";expires="+rsiExp.toGMTString()+";path=/;domain="+rsiDom;
if(typeof(DM_onSegsAvailable)=="function"){DM_onSegsAvailable(['D08734_72079','D08734_70018','D08734_70025','D08734_70030','D08734_70041','D08734_70067','D08734_70075','D08734_70086','D08734_70093','D08734_70098','D08734_70117','D08734_70509','D08734_70513','D08734_70751','D08734_71001','D08734_72008','D08734_72016','D08734_72017','D08734_72081','D08734_72083','F10931_0'],'f10931');} 