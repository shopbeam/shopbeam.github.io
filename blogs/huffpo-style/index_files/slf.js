// 2014/04/29 16:29:17
var UDASG='1.0';
var ANAXLSL;
var ANEU='http://anrtx.tacoda.net/e/e.js?';
var SILOOKUP22='A18470vert=ted-weekends|G18447aste|F18308small-business|K18308business|A18434kvbn=opportunity-working|C18319vert=mindful-living|A#18242vert=marlo.thomas|A18358kvbn=love--sex|F18454starting-college|O18453a-job|F18452planning-for-retirement|F18451making-a-home|A#18445vert=huffpost.home|F18468good-news|A18356kvvert=crime|A18467vert=science|F18385fifty|F18388miami|F18386detroit|F#18387high.school|F18387teen|F18389weddings|F18355black-voices|F18354culture|F18353latino|F18352parents|F18351tv|F18350weird|F18348dc|F18347san-francisco|F18338chicago|F18339denver|G18341ivorce|F18340los-angeles|F18342new-york|F18343religion|F18344travel|F18304politics|F18328women|F18307business|F18310celebrity|F18309entertainment|F18312books|F18306technology|F18313comedy|F18314sports|G18315tyle|F18317world|F18318food|F18327college|F18319health|F18321education|F18305green|F18316arts|F18320impact|F18322local|F18311media|F18215kitchendaily|F18408home|F18410voces|A18433live.huffingtonpost.com|A18324huffingtonpost.ca|Q18303om|R18330.uk';
var ANCSIPD=1;
var ANCSISD=0;
var ANSGV='unescape(document.location.href+document.referrer).toLowerCase()';
function ANEH(m,u,l)
{
var s=ANEU+'m='+escape(m)+'&u='+escape(u)+'&l='+l;
document.write('<SCR'+'IPT SRC="'+s+'" LANGUAGE="JavaScript"></SCR'+'IPT>');
}
function ANUDASG(tc)
{
var si=ANV2R(eval(ANSGV),SILOOKUP22,ANCSIPD,ANCSISD,5,null);
if(si!=null)
{
document.write('<SCR'+'IPT LANGUAGE="JavaScript">var tcdacmd="'+tc+'"</SCR'+'IPT>');
document.write('<SCR'+'IPT SRC="http://an.tacoda.net/an/'+si.toUpperCase()
+'/slf.js" LANGUAGE="JavaScript"></SCR'+'IPT>');
}
}
function ANV2R(v,rg,psl,ssl,rs,rd)
{
var lm="";
var rt=null;
var ra=rg.split("|");
var pi=0;
var si=psl;
var oi=si+ssl;
var miwoo=oi+rs;
var miwo=miwoo+1;
for(var ri=0;(ri<ra.length)&&(rt==null);ri++)
{
var m;
var r=ra[ri];
var rl=r.length;
var ss;
if(rl>=miwoo)
{
var oc=r.charCodeAt(oi);
if((oc<42)&&(oc>32)&&(rl>=miwo))
{
if((psl==0)||(r[pi]=='A'))
{
m=r.substr(miwo,r.length-miwo);
}
else
{
m=lm.substr(0,r.charCodeAt(pi)-65);
m=m.concat(r.substr(miwo,r.length-miwo));
}
if((ssl!=0)&&(r[si]!='A'))
{
ss=r.charCodeAt(si)-65;
m=m.concat(lm.substr(lm.length-ss,ss));
}
switch(r[oi])
{
case"!":
if((v.length==m.length)&&(v.indexOf(m)==0))
{
rt=r.substr(oi+1,rs);
}
break;
case")":
if(v.lastIndexOf(m)==(v.length-m.length))
{
rt=r.substr(oi+1,rs);
}
break;
case"(":
if(v.indexOf(m)==0)
{
rt=r.substr(oi+1,rs);
}
break;
case"#":
if(v.search(m)!=-1)
{
rt=r.substr(oi+1,rs);
}
break;
case"&":
if(v.indexOf(m)!=-1)
{
rt=r.substr(oi+1,rs);
}
break;
}
}
else
{
if((psl==0)||(r[pi]=='A'))
{
m=r.substr(miwoo,r.length-miwoo);
}
else
{
m=lm.substr(0,r.charCodeAt(pi)-65);
m=m.concat(r.substr(miwoo,r.length-miwoo));
}
if((ssl!=0)&&(r[si]!='A'))
{
ss=r.charCodeAt(si)-65;
m=m.concat(lm.substr(lm.length-ss,ss));
}
if(v.indexOf(m)!=-1)
{
rt=r.substr(oi,rs);
}
}
}
lm=m;
}
return(rt==null)?rd:rt.replace(/^\s+|\s+$/g,"");
}
try
{
var tc;
var tcdacmd
if(tcdacmd!=null)
{
tc=tcdacmd+'dt';
}
else
{
tc='dt';
}
tcdacmd='';
ANUDASG(tc);
}
catch(e)
{
ANEH(e,'','');
}
