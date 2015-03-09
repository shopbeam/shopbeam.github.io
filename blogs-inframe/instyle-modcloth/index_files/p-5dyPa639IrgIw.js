function _qcdomain2(){
 var d=document.domain;
 if(d.substring(0,4)=="www.")d=d.substring(4,d.length);
 var a=d.split(".");var len=a.length;
 if(len<3)return d;
 var e=a[len-1];
 if(e.length<3)return d;
 d=a[len-2]+"."+a[len-1];
 return d;
}
function quantseg()
{
 var segs="Q_D|Q_T|Q_235|Q_242|Q_240|Q_2900|Q_291|Q_2902|Q_239|Q_1758|Q_446|Q_236|Q_12672|Q_11661|Q_11441";
 var u=document;
 var d=_qcdomain2();
 u.cookie="__qseg="+segs+"; expires=Sun, 18 Jan 2038 00:00:00 GMT; path=/; domain="+d;
}
quantseg();