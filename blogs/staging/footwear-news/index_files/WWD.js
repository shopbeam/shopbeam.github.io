var s_tc_WWD=new TagContainer('WWD');

function TagContainer(n){var t=this,w=t.w=window;t.d=w.document;t._c='s_t';if(!w.s_c_il){w.s_c_il=[];w.s_c_in=0}t._il=w.s_c_il;t._in=w.s_c_in;t._il[t._in]=t;w.s_c_in++;t.tcn=t.l=0;t.stc=function(n){
var t=this,l=t.w.s_c_il,i,x;t.tcn=n;if(l)for(i=0;i<l.length;i++){x=l[i];if(x&&x._c=='s_l'&&x.tagContainerName==n)t.l=x}};t.stc(n);t.xd=function(s){var t=this,x=0;if(
t.d.implementation&&t.d.implementation.createDocument)x=(new DOMParser).parseFromString(s,'text/xml');else if(t.w.ActiveXObject){x=new ActiveXObject('Microsoft.XMLDOM');x.async='false';x.loadXML(s)}
return x};t.xe=function(x,t){var a,b=[],i,j;for(i=0;i<2;i++){if(i>0)t=t.toLowerCase();a=x.getElementsByTagName(t);if(a)for(j=0;j<a.length;j++)b[b.length]=a[j]}return b};t.xt=function(x){var t=this,b=
"",l,i;l=x.childNodes;if(l)for(i=0;i<l.length;i++)b+=t.xt(l[i]);if(x.data)b+=x.data;return b};t.cp=function(x){var t=this,tn=Math.floor((new Date).getTime()/1000),ts=x.s,te=x.e,tp=1,l=t.d.location,h=
l.hostname,hm=x.h,hp=1,p=l.pathname,pm=x.p,pp=1,q=l.search,qm=x.q,qp=1,qi,qv,c=t.d.cookie,cm=x.c,cp=1,ci,cv,i;if(ts)tp=(tn>=ts&&(!te||tn<=te));if(hm){hp=0;if(h){i=0;while(!hp&&i<hm.length){if(
h.indexOf(hm[i])>=0)hp=1;i++}}}if(pm){pp=0;if(p){i=0;while(!pp&&i<pm.length){if(p.indexOf(pm[i])>=0)pp=1;i++}}}if(qm){qp=0;if(q){if(q.substring(0,1)=='?')q=q.substring(1);q='&'+q+'&';i=0;while(
!qp&&i<qm.length){qi=q.indexOf('&'+qm[i].k+'=');if(!qm[i].v&&qi<0)qi=q.indexOf('&'+qm[i].k+'&');if(qi>=0)if(qm[i].v){qv=q.substring(qi+qm[i].k.length+2);qi=qv.indexOf('&');if(qi>=0){qv=unescape(
qv.substring(0,qi));if(qv==qm[i].v)qp=1}}else qp=1;i++}}}if(cm){cp=0;if(c){c=';'+c+';';c=c.split('; ').join(';');i=0;while(!cp&&i<cm.length){ci=c.indexOf(';'+cm[i].k+'=');if(!cm[i].v&&ci<0)ci=
c.indexOf(';'+cm[i].k+';');if(ci>=0)if(cm[i].v){cv=c.substring(ci+cm[i].k.length+2);ci=cv.indexOf(';');if(ci>=0){cv=unescape(cv.substring(0,ci));if(cv==cm[i].v)cp=1}}else cp=1;i++}}}return(
tp&&hp&&pp&&qp&&cp)};t.cl=[];t.cn=t.cpn=0;t.crt=0;t.bl=[];t.crl=function(cn,cpn){var t=this;if(cn==t.cn&&cpn==t.cpn)t.cr()};t.cr=function(){var t=this,d=t.d,b,c,p,n=1,o,u,x,y,l,i;if(t.cl.length>0){if(
!d.body){if(!t.crt)t.crt=setTimeout(function(){t.crt=0;t.cr()},13)}else{b=d.body;while(n&&t.cn<t.cl.length){c=t.cl[t.cn];if(t.cdwb){u=t.cdwb;t.cdwb=0;u='<div>'+u.replace(/&/g,'&amp;').replace(
/<img /gi,'<IMG ').replace(/<\/img>/gi,'</IMG>').replace(/<script /gi,'<SCRIPT ').replace(/<script>/gi,'<SCRIPT>').replace(/<\/script>/gi,'</SCRIPT>').replace(/<iframe /gi,'<IFRAME ').replace(
/<\/iframe>/gi,'</IFRAME>')+'</div>';x=t.xd(u);l=t.xe(x,'IMG');for(i=0;i<l.length;i++){u=l[i].getAttribute('src');if(u)c.p.splice(t.cpn,0,{t:'i',u:u})}l=t.xe(x,'SCRIPT');for(i=0;i<l.length;i++){u=l[i]
.getAttribute('src');if(u)c.p.splice(t.cpn,0,{t:'s',u:u});else{u=t.xt(l[i]);if(u)c.p.splice(t.cpn,0,{t:'c',c:u})}}l=t.xe(x,'IFRAME');for(i=0;i<l.length;i++){u=l[i].getAttribute('src');if(u)c.p.splice(
t.cpn,0,{t:'f',u:u})}}if((t.cpn>0||!c.x||t.cp(c.x))&&c.p&&t.cpn<c.p.length){p=c.p[t.cpn];if(p.t=='b'&&p.u){u=p.u;o=new Image;t.bl[t.bl.length]=o;o.onload=function(){var i;for(i=0;i<t.bl.length;i++)if(
t.bl[i]&&t.bl[i].src==u){t.bl.splice(i,1);return}};o.src=u}if((p.t=='s'&&p.u)||(p.t=='c'&&p.c)){n=0;t.cpn++;u=p.u;o=d.createElement('script');o.type='text/javascript';o.setAttribute('async','async')
x='s_c_il['+t._in+']';y=x+'.crl('+t.cn+','+t.cpn+')';if(p.t=='s'){o.n=new Function(y);o.t=0;o.i=setInterval(function(){if(o.readyState=='loaded')o.t++;if(o.readyState=='complete'||o.t>2){o.c();o.n()}}
,50);o.c=function(){if(o.i){clearInterval(o.i);o.i=0}};o.onreadystatechange=function(){if(o.readyState=='complete'){o.c();o.n()}};o.onload=function(){o.c();o.n()};o.src=u}else o.text=x+'.cdw='+x+
'.d.write;'+x+'.cdwb="";'+x+'.d.write=function(m){'+x+'.cdwb+=m};'+"\n"+p.c+"\n"+x+'.d.write='+x+'.cdw;'+y;x=b;l=d.getElementsByTagName('HEAD');if(l&&l[0])x=l[0];if(x.firstChild)x.insertBefore(o,
x.firstChild);else x.appendChild(o)}if(p.t=='f'&&p.u){u=p.u;o=d.createElement('IFRAME');o.setAttribute('style','display:none');o.setAttribute('width','0');o.setAttribute('height','0');o.setAttribute(
'src',u);b.appendChild(o)}if(n)t.cpn++}else{t.cn++;t.cpn=0}}if(n&&t.l){for(x in t.l.wl)if(!Object.prototype[x]){u=t.w[x];x=t.l.wl[x];if(u&&x)for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!=
'function'||(''+x[i]).indexOf('s_c_il')<0)u[i]=x[i]}}for(i=0;i<t.l.wq.length;i++){c=t.l.wq[i];u=c.f;if(u)if(c.o)x=t.w[c.o];else x=t.w;if(x[u]&&typeof(x[u])=='function'&&(''+x[u]).indexOf('s_c_il')<0){
if(c.a)x[u].apply(x,c.a);else x[u].apply(x)}}}}}};}

var o = new Object();
if (typeof(s_account) == 'undefined') { 
	s_account='condewwdprod'; 
}

o.live = s_account;
o.stage = o.dev = 'condewwddev';


o.rc = function(cn){
    var c = " " + document.cookie;
    var ind = c.indexOf(cn + "=");

    if (ind==-1 || cn=="") return o.live;
    var ind1 = c.indexOf(";",ind+1);

    if (ind1==-1) ind1=c.length; 

    return o[unescape(c.substring(ind+cn.length+1,ind1))];
}

var s = s_gi(o.rc('tagEnv')) // dynamic report suite ID pulled from custom core Javascript

/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */

/* Conversion Config */
s.currencyCode="USD";

/* Link Tracking Config */
s.trackDownloadLinks=true;
s.trackExternalLinks=true;
s.trackInlineStats=true;
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
s.linkInternalFilters="javascript:,wwd.com,wwdcareers.com,fnshoestar.com,pubservice.com";
s.linkLeaveQueryString=false;
s.linkTrackVars="None";
s.linkTrackEvents="None";

/* Plugin Config */
s.usePlugins=true;
function s_doPlugins(s) {
    /* Add calls to plugins here */

    /* External Campaign Tracking */
    if(!s.campaign) {
        s.campaign=s.getQueryParam('src');
        s.campaign=s.getValOnce(s.campaign,'s_campaign',0);
    }

    s.prop16 = s.getVisitNum();
    s.prop17 = s.getNewRepeat(999);

    var articleTitle = jQuery('#articleContentTitle').val();
    var articleSEOTitle = jQuery('#articleSEOTitle').val();
    if (articleSEOTitle == '') { // this block of code is to ensure articleTitle in prop34 has a value. Only true for image search results
        articleSEOTitle = "Image Search";
    }
    if(articleTitle == '') {
        articleTitle = 'Featured Images or Image Search';
    } else {
        articleTitle = articleSEOTitle;
    }
    s.prop34 = jQuery('#article-id').val() + " | " + jQuery('#article-date').val() + " | " + articleTitle;

    s.eVar23 = s.prop16;
    s.eVar24 = s.prop17;
    s.eVar37 = s.prop34;

    /* Download Event */
    s.d_url=s.downloadLinkHandler(s.linkDownloadFileTypes);
    /* if(s.d_url){
        s.events=s.apl(s.events,'event27',',',2);
        s.linkTrackVars="events";
        s.linkTrackEvents="event27,";
    } */

    /* Set Time Parting Variables - SAMPLE EST */
    s.eVar8=s.prop8=s.TimeParting('h','-5'); // Set hour
    s.eVar9=s.prop9=s.TimeParting('d','-5'); // Set day
    s.eVar10=s.prop10=s.TimeParting('w','-5'); // Set weekday v. Weekend

    /* Copy props to eVars */
    if(s.pageName&&!s.eVar11) s.eVar11=s.pageName;
    if(s.channel&&!s.eVar12) s.eVar12=s.channel;
    if(s.prop1&&!s.eVar1) s.eVar1=s.prop1;
    if(s.prop2&&!s.eVar2) s.eVar2=s.prop2;
    if(s.prop3&&!s.eVar3) s.eVar3=s.prop3;
    if(s.prop4&&!s.eVar4) s.eVar4=s.prop4;
    if(s.prop5&&!s.eVar5) s.eVar5=s.prop5;
    if(s.prop6&&!s.eVar6) s.eVar6=s.prop6;
    if(s.prop7&&!s.eVar7) s.eVar7=s.prop7;
    if(s.prop15&&!s.eVar15) s.eVar15=s.prop15;
    if(s.prop13&&!s.eVar20) s.eVar20=s.prop13;
    if(s.prop14&&!s.eVar21) s.eVar21=s.prop14;

    /* pagename/sitesection/hierarchy
    if (!s.pageName){
        s.Aurl=s.wd.location+'';
        s.Aurl=s.Aurl.indexOf('?')>-1?s.Aurl.substring(0,s.Aurl.indexOf('?')):s._url;
        s.Aurl=s.split(s.Aurl,'/');
        s.Burl=s.Aurl.length;
        s.pageName='mobile';
        s.channel='mobile';
        s.hier1='mobile';
        for (s.Curl=3;s.Curl<s.Burl;s.Curl++) { s.pageName=s.pageName+'/'+s.Aurl[s.Curl]; s.hier1=s.hier1+':'+s.Aurl[s.Curl]; }
    }*/

}
s.doPlugins=s_doPlugins;
/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here.                 */

/*
 * Function - read combined cookies v 0.3
 */
if(!s.__ccucr){s.c_rr=s.c_r;s.__ccucr = true;
s.c_r=new Function("k",""
+"var s=this,d=new Date,v=s.c_rr(k),c=s.c_rr('s_pers'),i,m,e;if(v)ret"
+"urn v;k=s.ape(k);i=c.indexOf(' '+k+'=');c=i<0?s.c_rr('s_sess'):c;i="
+"c.indexOf(' '+k+'=');m=i<0?i:c.indexOf('|',i);e=i<0?i:c.indexOf(';'"
+",i);m=m>0?m:e;v=i<0?'':s.epa(c.substring(i+2+k.length,m<0?c.length:"
+"m));if(m>0&&m!=e)if(parseInt(c.substring(m+1,e<0?c.length:e))<d.get"
+"Time()){d.setTime(d.getTime()-60000);s.c_w(s.epa(k),'',d);v='';}ret"
+"urn v;");}
/*
 * Function - write combined cookies v 0.3
 */
if(!s.__ccucw){s.c_wr=s.c_w;s.__ccucw = true;
s.c_w=new Function("k","v","e",""
+"this.new2 = true;"
+"var s=this,d=new Date,ht=0,pn='s_pers',sn='s_sess',pc=0,sc=0,pv,sv,"
+"c,i,t;d.setTime(d.getTime()-60000);if(s.c_rr(k)) s.c_wr(k,'',d);k=s"
+".ape(k);pv=s.c_rr(pn);i=pv.indexOf(' '+k+'=');if(i>-1){pv=pv.substr"
+"ing(0,i)+pv.substring(pv.indexOf(';',i)+1);pc=1;}sv=s.c_rr(sn);i=sv"
+".indexOf(' '+k+'=');if(i>-1){sv=sv.substring(0,i)+sv.substring(sv.i"
+"ndexOf(';',i)+1);sc=1;}d=new Date;if(e){if(e.getTime()>d.getTime())"
+"{pv+=' '+k+'='+s.ape(v)+'|'+e.getTime()+';';pc=1;}}else{sv+=' '+k+'"
+"='+s.ape(v)+';';sc=1;}if(sc) s.c_wr(sn,sv,0);if(pc){t=pv;while(t&&t"
+".indexOf(';')!=-1){var t1=parseInt(t.substring(t.indexOf('|')+1,t.i"
+"ndexOf(';')));t=t.substring(t.indexOf(';')+1);ht=ht<t1?t1:ht;}d.set"
+"Time(ht);s.c_wr(pn,pv,d);}return v==s.c_r(s.epa(k));");}
/*
 * Plugin: TimeParting 3.0 - Set timeparting values based on time zone - valid through 2014
 */
s.TimeParting=new Function("t","z",""
+"var s=this,d,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T;d = new Date()"
+";A=d.getFullYear();if(A=='2009'){B='08';C='01'}if(A=='2010'){B='14'"
+";C='07'}if(A=='2011'){B='13';C='06'}if(A=='2012'){B='11';C='04'}if("
+"A=='2013'){B='10';C='03'}if(A=='2014'){B='09';C='02'}if(!B||!C){B='"
+"08';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;D=new Date('1/1/2000');i"
+"f(D.getDay()!=6||D.getMonth()!=0){return'Data Not Available'}else{z"
+"=parseFloat(z);E=new Date(B);F=new Date(C);G=F;H=new Date();if(H>E&"
+"&H<G){z=z+1}else{z=z};I=H.getTime()+(H.getTimezoneOffset()*60000);J"
+"=new Date(I + (3600000*z));K=['Sunday','Monday','Tuesday','Wednesda"
+"y','Thursday','Friday','Saturday'];L=J.getHours();M=J.getMinutes();"
+"N=J.getDay();O=K[N];P='AM';Q='Weekday';R='00';if(M>30){R='30'}if(L>"
+"=12){P='PM';L=L-12};if (L==0){L=12};if(N==6||N==0){Q='Weekend'}T=L+"
+"':'+R+P;if(t=='h'){return T}if(t=='d'){return O}if(t=='w'){return Q"
+"}}");
/*
 * Plugin: getQueryParam 2.3
 */
s.getQueryParam=new Function("p","d","u",""
+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
+"on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-"
+"1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i="
+"=p.length?i:i+1)}return v");
s.p_gpv=new Function("k","u",""
+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+"=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return ''");

/*
 * Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
 */
s.getNewRepeat=new Function("d","cn",""
+"var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
+"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
+"=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
+"-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
+"ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");

/*
* Plugin: Visit Number By Month 2.0 - Return the user visit number
*/
s.getVisitNum=new Function(""
+"var s=this,e=new Date(),cval,cvisit,ct=e.getTime(),c='s_vnum',c2='s"
+"_invisit';e.setTime(ct+30*24*60*60*1000);cval=s.c_r(c);if(cval){var"
+" i=cval.indexOf('&vn='),str=cval.substring(i+4,cval.length),k;}cvis"
+"it=s.c_r(c2);if(cvisit){if(str){e.setTime(ct+30*60*1000);s.c_w(c2,'"
+"true',e);return str;}else return 'unknown visit number';}else{if(st"
+"r){str++;k=cval.substring(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e)"
+";e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else{s.c_w"
+"(c,ct+30*24*60*60*1000+'&vn=1',e);e.setTime(ct+30*60*1000);s.c_w(c2"
+",'true',e);return 1;}}"
);

/********************************************************************
*
* channelManager v2.0
*
*******************************************************************/
/*
* Plugin channelManager v2.0 - The tracking of all external sources and channels
*/
s.channelManager=new Function("a","b","c","V",""
+"var s=this,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,t,u,v,w,x,y,z,A,B,C,D,E,F,"
+"G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,W,X;g=s.referrer?s.referrer:document."
+"referrer;g=g.toLowerCase();if(!g){h='1'}i=g.indexOf('?')>-1?g.index"
+"Of('?'):g.length;j=g.substring(0,i);k=s.linkInternalFilters.toLower"
+"Case();k=s.split(k,',');l=k.length;for(m=0;m<l;m++){n=j.indexOf(k[m"
+"])==-1?'':g;if(n)o=n}if(!o&&!h){p=g;q=g.indexOf('//')>-1?g.indexOf("
+"'//')+2:0;r=g.indexOf('/',q)>-1?g.indexOf('/',q):i;t=g.substring(q,"
+"r);t=t.toLowerCase();u=t;P='Referrers';v=s.seList+'>'+s._extraSearc"
+"hEngines;if(V=='1'){j=s.repl(j,'oogle','%');j=s.repl(j,'ahoo','^');"
+"}A=s.split(v,'>');B=A.length;for(C=0;C<B;C++){D=A[C];D=s.split(D,'|"
+"');E=s.split(D[0],',');F=E.length;for(G=0;G<F;G++){H=j.indexOf(E[G]"
+");if(H>-1){I=s.split(D[1],',');J=I.length;for(K=0;K<J;K++){L=s.getQ"
+"ueryParam(I[K],'',g);if(L){L=L.toLowerCase();M=L;if(D[2]){u=D[2];N="
+"D[2]}else{N=t}N=s.repl(N,'^','ahoo');N=s.repl(N,'%','oogle');}}}}}}"
+"O=s.getQueryParam(a,b);if(O){u=O;if(M){P='Paid Search'}else{P='Paid"
+" Non-Search';}}if(!O&&M){u=N;P='Natural Search'}if(!o&&!M)M='None';"
+"f=s._channelDomain;if(f){k=s.split(f,'>');l=k.length;for(m=0;m<l;m+"
+"+){Q=s.split(k[m],'|');R=s.split(Q[1],',');S=R.length;for(T=0;T<S;T"
+"++){W=j.indexOf(R[T]);if(W>-1)P=Q[0]}}}d=s._channelParameter;if(d){"
+"k=s.split(d,'>');l=k.length;for(m=0;m<l;m++){Q=s.split(k[m],'|');R="
+"s.split(Q[1],',');S=R.length;for(T=0;T<S;T++){U=s.getQueryParam(R[T"
+"]);if(U)P=Q[0]}}}e=s._channelPattern;if(e){k=s.split(e,'>');l=k.len"
+"gth;for(m=0;m<l;m++){Q=s.split(k[m],'|');R=s.split(Q[1],',');S=R.le"
+"ngth;for(T=0;T<S;T++){X=O.indexOf(R[T]);if(X==0)P=Q[0]}}}if(h=='1'&"
+"&!O){u=P=t=p='Direct Load'}T=M+u+t;U=c?'c':'c_m';if(c!='0'){T=s.get"
+"ValOnce(T,U,0);}s._referrer=T&&p?p:'';s._referringDomain=T&&t?t:'';"
+"s._partner=T&&N?N:'';s._campaignID=T&&O?O:'';s._campaign=T&&u?u:'';"
+"s._keywords=T&&M?M:'';s._channel=T&&P?P:'';");

/* Top 100, Partner = Partner */
s.seList=".google.,googlesyndication.|q,as_q|Google>.yahoo.|p,va|Yaho"
+"o!>bing.|q|Microsoft Bing>.aol.|query,q|AOL.com Search>.ask.|ask,q|"
+"Ask>naver.|query|Naver>myway.|searchfor|MyWay.com>altavista.|q,r|Al"
+"taVista>netscape.|query,search|Netscape Search>.baidu.|wd|Baidu>bus"
+"ca.uol.com.br|q|UOL Busca>daum.net|q|Daum>tiscali.|key,query|Tiscal"
+"i>yandex|text|Yandex.ru>abcsok.|q|Startsiden>virgilio.|qs|Virgilio>"
+"reference.|q|Reference.com>alltheweb.|query,q|All The Web>icqit.|q|"
+"icq>.goo.ne.jp|MT|Goo (Jp.)>.lycos.,.lycol.|query|Lycos>.biglobe.ne"
+".jp,search.kbg.jp|q,extrakey|Biglobe>ixquick.|query|ixquick>seznam|"
+"w|Seznam.cz>searchalot.|query,q|Searchalot>search.nifty.|q|Nifty>.e"
+"niro.|search_word|Eniro>toile.|query,q|Toile du Quebec>business.|qu"
+"ery|Business.com>kvasir.|q,searchExpr|Kvasir>mail.|q|Mail.ru>dictio"
+"nary.|term,query,q|Dictionary.com>.excite.,excitesearch.netscape.|s"
+"earch,q,s,qkw|Excite>cuil.|q|Cuil>web.de|su|Web.de>sensis.com.au|fi"
+"nd|Sensis.com.au>empas.|q|Empas>.libero.|query,q|Libero>.about.|ter"
+"ms|About.com>walla.co.il|q|Walla>mamma.|query|Mamma>usseek.|string|"
+"Usseek>clix.pt|question|Clix>terra.es|query|Terra>.infoseek.|qt,que"
+"ry|InfoSeek>.cnn.|query|CNN Web Search>.earthlink.|q|Earthlink Sear"
+"ch>.comcast.|q|Comcast Search>.rr.|qs|RoadRunner Search>optimum.n|q"
+"|Optimum Search>7search.|qu|7search.com>.livedoor.|q|Livedoor.com>v"
+"inden.nl|query|Vinden>dmoz.o|search|Open Directory Project>starmedi"
+"a.|q|Starmedia>centrum.cz|q|Centrum.cz>fireball.de|q,query|Fireball"
+">sesam.no|q|Sesam>odn.excite.co.jp|search|ODN>hispavista.|cadena|Hi"
+"spaVista>nate.|query|Nate.com>nbci.com|keyword,qkw|NBCi>euroseek.co"
+"m|query,string|Euroseek>zoeken.hetnet.nl,.zoeken.nl|q,query|zoeken."
+"nl>aport.ru|r|Aport>gle.sina.|q,word,search_key,kw|Sina>yehey.|q|Ye"
+"hey>atlas.|q|Atlas.cz>hotbot.co.uk|query|Hotbot - United Kingdom>.i"
+"lse.nl|SEARCH_FOR,search_for|Ilse>marchsearch.,.curryguide.|query|M"
+"archSearch>ozu.es|q|Ozu>194.231.3.245,.abacho.|q|Abacho>qksearch.|q"
+"uery|QkSearch>findit-quick.|Terms|Findit-Quick>voila.fr|kw|Voila>se"
+"arch.ch|q|Search.ch>.zoek.nl|query,q|Zoek>.dino-online.d|query|Dino"
+" Online>webalta.ru|q|Webalta>ezsch.ezweb.ne.jp|query|Google @ EZweb"
+">.fresheye.|ord,kw|FreshEye>oingo.|s,q|Oingo>wp.pl|szukaj|Wirtualna"
+" Polska>buyersindex.|query|BuyersIndex>tapuz.co.il|q|Tapuz>webwomba"
+"t.|I,ix|Web Wombat>.kelkoo.|Query,siteSearchQuery|Kelkoo >rambler.r"
+"u|words|Rambler>suche.ch|q|Suche.ch>serbiancafe.|search|SerbianCafe"
+">thunderstone.|q|Thunderstone>ananzi.co.za|qt|Ananzi>infotiger.|qs|"
+"InfoTiger>suchmaschine.|suchstr|Suchmaschine>allsearchengines.co.uk"
+"|querys|AllSearchEngines>vindex.nl|search_for|Vindex>conexcol.|quer"
+"y|Conexcol>locate.|query,show|Locate>.ninemsn.com.au|q|NineMSN";

/*
 * Plugin: downloadLinkHandler 0.5 - identify and report download links
 */
s.downloadLinkHandler=new Function("p",""
+"var s=this,h=s.p_gh(),n='linkDownloadFileTypes',i,t;if(!h||(s.linkT"
+"ype&&(h||s.linkName)))return '';i=h.indexOf('?');t=s[n];s[n]=p?p:t;"
+"if(s.lt(h)=='d')s.linkType='d';else h='';s[n]=t;return h;");

/*
 * Plugin: getTimeToComplete
 */
s.getTimeToComplete=new Function("v","cn","e",""
+"var s=this,d=new Date,x=d,k;if(!s.ttcr){e=e?e:0;if(v=='start'||v=='"
+"stop')s.ttcr=1;x.setTime(x.getTime()+e*86400000);if(v=='start'){s.c"
+"_w(cn,d.getTime(),e?x:0);return '';}if(v=='stop'){k=s.c_r(cn);if(!s"
+".c_w(cn,'',d)||!k)return '';v=(d.getTime()-k)/1000;var td=86400,th="
+"3600,tm=60,r=5,u,un;if(v>td){u=td;un='days';}else if(v>th){u=th;un="
+"'hours';}else if(v>tm){r=2;u=tm;un='minutes';}else{r=.2;u=1;un='sec"
+"onds';}v=v*r/u;return (Math.round(v)/r)+' '+un;}}return '';");

/*
 * Utility Function: p_gh
 */
s.p_gh=new Function(""
+"var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot("
+"o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){"
+"o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s."
+"ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o.href:'';");

/*
 * Plugin Utility: Replace v1.0
 */
s.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");

/*
 * Plugin: getValOnce 0.2 - get a value once per session or number of days
 */
s.getValOnce=new Function("v","c","e",""
+"var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime("
+")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");
/*
 * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
/*
 * Plugin Utility: apl v1.1
 */
s.apl=new Function("L","v","d","u",""
+"var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)L=L?L+d+v:v;return L");

/* Configure Modules and Plugins */

s.loadModule("Media")
s.Media.autoTrack=false
s.Media.trackWhilePlaying=true
s.Media.trackVars="None"
s.Media.trackEvents="None"

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.visitorNamespace="condenast"
s.trackingServer="metrics.wwd.com"
s.trackingServerSecure="smetrics.wwd.com"

/*
* Plugin: getPercentPageViewed v1.4
*/
s.handlePPVevents=new Function("",""
+"if(!s.getPPVid)return;var dh=Math.max(Math.max(s.d.body.scrollHeigh"
+"t,s.d.documentElement.scrollHeight),Math.max(s.d.body.offsetHeight,"
+"s.d.documentElement.offsetHeight),Math.max(s.d.body.clientHeight,s."
+"d.documentElement.clientHeight)),vph=s.wd.innerHeight||(s.d.documen"
+"tElement.clientHeight||s.d.body.clientHeight),st=s.wd.pageYOffset||"
+"(s.wd.document.documentElement.scrollTop||s.wd.document.body.scroll"

+"Top),vh=st+vph,pv=Math.min(Math.round(vh/dh*100),100),c=s.c_r('s_pp"
+"v'),a=(c.indexOf(',')>-1)?c.split(',',4):[],id=(a.length>0)?(a[0]):"
+"escape(s.getPPVid),cv=(a.length>1)?parseInt(a[1]):(0),p0=(a.length>"
+"2)?parseInt(a[2]):(pv),cy=(a.length>3)?parseInt(a[3]):(0),cn=(pv>0)"
+"?(id+','+((pv>cv)?pv:cv)+','+p0+','+((vh>cy)?vh:cy)):'';s.c_w('s_pp"
+"v',cn);");
s.getPercentPageViewed=new Function("pid",""
+"pid=pid?pid:'-';var s=this,ist=!s.getPPVid?true:false;if(typeof(s.l"
+"inkType)!='undefined'&&s.linkType!='e')return'';var v=s.c_r('s_ppv'"
+"),a=(v.indexOf(',')>-1)?v.split(',',4):[];if(a.length<4){for(var i="
+"3;i>0;i--){a[i]=(i<a.length)?(a[i-1]):('');}a[0]='';}a[0]=unescape("
+"a[0]);s.getPPVpid=pid;s.c_w('s_ppv',escape(pid));if(ist){s.getPPVid"
+"=(pid)?(pid):(s.pageName?s.pageName:document.location.href);s.c_w('"
+"s_ppv',escape(s.getPPVid));if(s.wd.addEventListener){s.wd.addEventL"
+"istener('load',s.handlePPVevents,false);s.wd.addEventListener('scro"
+"ll',s.handlePPVevents,false);s.wd.addEventListener('resize',s.handl"
+"ePPVevents,false);}else if(s.wd.attachEvent){s.wd.attachEvent('onlo"
+"ad',s.handlePPVevents);s.wd.attachEvent('onscroll',s.handlePPVevent"
+"s);s.wd.attachEvent('onresize',s.handlePPVevents);}}return(pid!='-'"
+")?(a):(a[1]);");
// END Plugin: getPercentPageViewed v1.4

/*
 * Plugin: getPreviousValue_v1.0 - return previous value of designated
 * variable (requires split utility)
 */
s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

/****************************** MODULES *****************************/
/* Module: Media */
s.m_Media_c="var m=s.m_i('Media');m.cn=function(n){var m=this;return m.s.rep(m.s.rep(m.s.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new Date,a='',"
+"x;n=m.cn(n);l=parseInt(l);if(!l)l=1;if(n&&p){if(!m.l)m.l=new Object;if(m.l[n])m.close(n);if(b&&b.id)a=b.id;for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.p=m.cn(p);i.a=a;i.t=0"
+";i.ts=0;i.s=Math.floor(tm.getTime()/1000);i.lx=0;i.lt=i.s;i.lo=0;i.e='';i.to=-1;m.l[n]=i}};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o){var m=this,i;i=m.e(n,1,o);i.m=new Function('var m"
+"=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.mt=setTimeout(i.m,5000)}}');i.m()};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){va"
+"r m=this;if (m.trackWhilePlaying) {m.e(n,4,-1)}};m.e=function(n,x,o){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/1000),ti=m.trackSeconds,tp=m.trackMilestones,z=new Array,j,d='--**--',t=1,b,"
+"v=m.trackVars,e=m.trackEvents,pe='media',pev3,w=new Object,vo=new Object;n=m.cn(n);i=n&&m.l&&m.l[n]?m.l[n]:0;if(i){w.name=n;w.length=i.l;w.playerName=i.p;if(i.to<0)w.event=\"OPEN\";else w.event=(x="
+"=1?\"PLAY\":(x==2?\"STOP\":(x==3?\"MONITOR\":\"CLOSE\")));w.openTime=new Date();w.openTime.setTime(i.s*1000);if(x>2||(x!=i.lx&&(x!=2||i.lx==1))) {b=\"Media.\"+name;pev3 = m.s.ape(i.n)+d+i.l+d+m.s.a"
+"pe(i.p)+d;if(x){if(o<0&&i.lt>0){o=(ts-i.lt)+i.lo;o=o<i.l?o:i.l-1}o=Math.floor(o);if(x>=2&&i.lo<o){i.t+=o-i.lo;i.ts+=o-i.lo;}if(x<=2){i.e+=(x==1?'S':'E')+o;i.lx=x;}else if(i.lx!=1)m.e(n,1,o);i.lt=ts"
+";i.lo=o;pev3+=i.t+d+i.s+d+(m.trackWhilePlaying&&i.to>=0?'L'+i.to:'')+i.e+(x!=2?(m.trackWhilePlaying?'L':'E')+o:'');if(m.trackWhilePlaying){b=0;pe='m_o';if(x!=4){w.offset=o;w.percent=((w.offset+1)/w"
+".length)*100;w.percent=w.percent>100?100:Math.floor(w.percent);w.timePlayed=i.t;if(m.monitor)m.monitor(m.s,w)}if(i.to<0)pe='m_s';else if(x==4)pe='m_i';else{t=0;v=e='None';ti=ti?parseInt(ti):0;z=tp?"
+"m.s.sp(tp,','):0;if(ti&&i.ts>=ti)t=1;else if(z){if(o<i.to)i.to=o;else{for(j=0;j<z.length;j++){ti=z[j]?parseInt(z[j]):0;if(ti&&((i.to+1)/i.l<ti/100)&&((o+1)/i.l>=ti/100)){t=1;j=z.length}}}}}}}else{m"
+".e(n,2,-1);if(m.trackWhilePlaying){w.offset=i.lo;w.percent=((w.offset+1)/w.length)*100;w.percent=w.percent>100?100:Math.floor(w.percent);w.timePlayed=i.t;if(m.monitor)m.monitor(m.s,w)}m.l[n]=0;if(i"
+".e){pev3+=i.t+d+i.s+d+(m.trackWhilePlaying&&i.to>=0?'L'+i.to:'')+i.e;if(m.trackWhilePlaying){v=e='None';pe='m_o'}else{t=0;m.s.fbr(b)}}else t=0;b=0}if(t){vo.linkTrackVars=v;vo.linkTrackEvents=e;vo.p"
+"e=pe;vo.pev3=pev3;m.s.t(vo,b);if(m.trackWhilePlaying){i.ts=0;i.to=o;i.e=''}}}}return i};m.ae=function(n,l,p,x,o,b){if(n&&p){var m=this;if(!m.l||!m.l[n])m.open(n,l,p,b);m.e(n,x,o)}};m.a=function(o,t"
+"){var m=this,i=o.id?o.id:o.name,n=o.name,p=0,v,c,c1,c2,xc=m.s.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+m._in+'_s',f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m',"
+"f7='s_media_'+m._in+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol=new Object;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s.b;tcf=n"
+"ew Function('o','var e,p=0;try{if(o.versionInfo&&o.currentMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catc"
+"h(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)}}v=\"var m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){"
+"p='Windows Media Player '+o.versionInfo;c1=v+',n,p,l,x=-1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.URL;l=cm.duration;p=c.currentPosition;n=o.playState;if(n){if(n="
+"=8)x=0;if(n==3)x=1;if(n==1||n==2||n==4||n==5||n==6)x=2;}';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,o)}}';c=c1+c2;if(m.s.isie&&xc){x=m.s.d.createElement('script');x.language='jscript';x.type='tex"
+"t/javascript';x.htmlFor=i;x.event='PlayStateChange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'if(n==3){x=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p==2){p='Qui"
+"ckTime Player '+(o.GetIsQuickTimeRegistered()?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMovieName()?o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTimeScale();l"
+"=o.GetDuration()/t;p=o.GetTime()/t;p2=o.'+f5+';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5)m.ae(mn,l,\"'+p+'\",2,p2,o);m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,o)}if(n>0&&"
+"o.'+f7+'>=10){m.ae(mn,l,\"'+p+'\",3,p,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTimeout(\"'+v+';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c);o[f4]=-1;o[f7]=0;o[f1](0,0)}if(p==3){p='"
+"RealPlayer '+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.GetTitle()?o.GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetLength()/1000;p=o.GetPosition()/1000;if(n!="
+"o.'+f4+'){if(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,o)}if(n==3&&(o.'+f7+'>=10||!o.'+f3+')){m.ae(mn,l,\"'+p+'\",3,p,o);o.'+f7+'=0}o."
+"'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s.wd[f1])o[f2]=m.s.wd[f1];m.s.wd[f1]=new Function('a','b',c1+c2);o[f1]=new Function('a','b',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)\",o.'+f3+"
+"'?500:5000);'+c2);o[f4]=-1;if(m.s.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m.as=new Function('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack&&m.s.d.getElementsByTagName){l=m.s.d.getElementsByTagName(m.s.i"
+"sie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if(s.wd.attachEvent)s.wd.attachEvent('onload',m.as);else if(s.wd.addEventListener)s.wd.addEventListener('load',m.as,false)";
s.m_i("Media");

s.loadModule("Integrate")
s.Integrate.onLoad=function(s,m){
// WWD-Stats 
// Specify which pages to exclude this code from
if ( document.location.href.indexOf("espdev.espcomp.net") == -1 && document.location.href.indexOf("subscribe.wwd.com") == -1 && document.location.href.indexOf("pubservice.com") == -1 && document.location.href.indexOf("login-iframe") == -1 && document.location.href.indexOf("login-help") == -1 && document.location.href.indexOf("login-email-verify") == -1 	&& document.location.href.indexOf("mobile.wwd.com") == -1 && document.location.href.indexOf("m.wwd.com") == -1 && document.location.href.indexOf("julysystems.com") == -1 &&  document.location.href.indexOf("exit.html") == -1 && document.location.href.indexOf("exit_archive.html") == -1) {
	
wwd.stats={
    linktype:'o',
    networkStatus : 'unset',
    initialize:function($) {

    /*
        CN.debug.info("Stats.initialization()");
        jQuery("#topnav a").bind("click",function(){                     wwd.stats.trackAction("topnav",true)});
        jQuery("#topsubnav a").bind("click",function(){                  wwd.stats.trackAction("topnav",true)});
        jQuery("#editorial-brands-container a").bind("click",function(){ wwd.stats.trackAction("module_click",true)});
        jQuery("#events a").bind("click",function(){                     wwd.stats.trackAction("module_click",true)});
        jQuery("a.pdf").bind("click",function(){                         wwd.stats.trackAction("download",jQuery("a.pdf").attr("href"))});
    */

//        jQuery(".tabs-container ul.tabs li a").bind("click",function(){wwd.stats.trackAction("tabs",true)});

            /* Setting stat calls on custom elements */
        var $header = $('#header');
        var $wrapper = $('#wrapper');
        $(window).load(function() {
            $('#wrapper a, #wrapper input[type=image], #wrapper input[type=button], #wrapper input[type=submit], #wrapper .result-search-btn input').click(function(){wwd.stats.trackAction("serverTime","true")});
            $('iframe#iframe-latest-shows').contents().find('a').click(function(){wwd.stats.trackAction("serverTime","true")});
        });              
        $header.find('#hdr-sec-3 #justin #topSubnav a').click(function(e){
            var statFlag = e.target.className.match(/stat-\w+/)[0].match(/\w+$/)[0];
            wwd.stats.trackAction(statFlag, true);
        });
        $header.find('#subnav a').click(function(){wwd.stats.trackAction("botnav","true")});

        var $yrail = $('#yrail');
        var $memopad = $yrail.find('#memo-pad-container');
        $memopad.find('h2').click(function(){wwd.stats.trackAction('module','media')});
        $memopad.find('.mpStart').click(function(){wwd.stats.trackAction('module','memopad')});
        $memopad.find('.memoUp a').click(function(){wwd.stats.trackAction('module','media')});
        $memopad.find('.memoDown a').click(function(){wwd.stats.trackAction('module','memopad')});
	/*
        $('#slideshow-most-container #slide-restart a').click(function(){wwd.stats.trackAction("slideshowLink","restart")});
        $('#slideshow-content-container #slide-restart a').click(function(){wwd.stats.trackAction("slideshowLink","restartsmall")});
        $('#slideshow-content-container #zoom .setfullsize a').click(function(){wwd.stats.trackAction("slideshowLink","setfullsize")});
		*/

        this.call();
    },
    call:function(params) {

        // You may give each page an identifying name, server, and channel on the next lines.
        s.pageName=this.scrubbedUrl();
		
		//remove slideshow id from slide pagename
		if (document.URL.indexOf("/slideshow") >= 0) {  
		    strPageName = s.pageName;
            if (strPageName.indexOf("/slideshow/") >= 0) { //this means there is an ID in the URL that needs to be removed 
				var pageNameSplit = strPageName.split('/slideshow'); //split on '/slideshow'
				pageNameSplit.pop();  //pop off anything after 'slideshow'
				s.pageName = pageNameSplit + "/slideshow";                   
            }
        }
				
        s.eVar11=s.pageName;

        s.hier1=this.scrubHierchy();

        if (jQuery("#articleContentUrl").length > 0){
            var subCatName = jQuery('#articleContentUrl').val();
            var subCatNameArray = subCatName.split("/");
            s.hier2=subCatNameArray[2];
        }

        var pagetypeVar = jQuery('#pagetype').val();
        var contextVar = jQuery('#context').val();

        if (pagetypeVar=="landing") {
            s.hier2=s.pageName;
        }

        //set up H2
        if (contextVar=="subcategory-landing" || document.URL.indexOf("/slideshow") >= 0 || document.URL.indexOf("/runway") >= 0) {
            var subCatName2 = s.pageName;
            var subCatNameArray2 = subCatName2.split("/");
            s.hier2=subCatNameArray2[2];
        }

        if (jQuery('#blog-category').length) {
            s.hier2 = jQuery('#blog-category').attr('class');
        } else if (jQuery('#blog-landing').length) {
            s.hier2 = s.pageName;
        }

        if (jQuery('#blog-entry').length) {
            if (jQuery('#wwd-entries h4 a').length) {
                s.hier2 = jQuery('#wwd-entries h4').text();
            } else {
                s.hier2 = 'Archive - no category';
            }
        }

        if (contextVar=="subcategory-landing" || pagetypeVar == "article" || jQuery('#blog-entry').length || document.URL.indexOf("/slideshow") >= 0 || document.URL.indexOf("/runway") >= 0) {
            if (jQuery('html').hasClass("x-portrait") || jQuery('html').hasClass("x-landscape")) {
                s.hier3 = "h3-mobile-ignore"; //bypass this for now - get page name with document.url
            } else {
                s.hier3=s.pageName;
            }		
            if (document.URL.indexOf("/slideshow") >= 0) {
                s.hier3 = s.hier3.replace("/slideshow", "") //remove /slideshow from slideshow urls
            }
        }

        s.prop4=this.scrubAll(wwd.pageType); //content type
		// explicitly setting s.prop4 because wwd.pageType is not working properly
		if( jQuery('body').hasClass("slideshow") ) {
			s.prop4 = "slideshow"	
		}
		if( jQuery('body').hasClass("article") ) {
			s.prop4 = "article"
			if ( jQuery('body').hasClass("article") && jQuery('body').hasClass("roadblock") ){
				s.prop4 = "roadblock"
			}
		}
        s.eVar4=s.prop4;

        //scrub dartzone for 3 levels of sections
        var scrubbedChannel=this.scrubAll(this.scrubChannel(true));
        if (s.prop4=="slideshow") {
            s.channel="slideshows/" + scrubbedChannel;
            s.events='event25';
        } else {
            s.channel=scrubbedChannel;
        }
        s.eVar12=s.channel;

        //if ct article, slideshow or roadblock
        if (s.prop4=="article"||s.prop4=="roadblock"||s.prop4=="slideshow"){
            s.prop28=s.prop4+":"+s.pageName;
        }

        var articleSection=jQuery('#articleSection').val();
        var pagetype=jQuery('#pagetype').val();
        if ((articleSection=="runway" && pagetype=="article") ||  (jQuery('input[name=tocSection]').val() == "runway" && document.URL.indexOf("/slideshow") >= 0)) { //this section of code is only for Runway articles and SlideShows
            //var subCatName3 = s.pageName;
            //var subCatNameArray3 = subCatName3.split("/");
            //s.hier2=subCatNameArray3[2];
            //set up H3 for Runway articles and SS (h3 is city)
            if (document.URL.indexOf("/slideshow") >= 0) {
                s.hier3 = jQuery('#runway-city').val(); //runway-city only on runway SS
            } else {
                var runwayCity = jQuery('#review-city').val(); //review-city this value is only on runway articles
                var runwayCityArray = runwayCity.split("|");
                s.hier3=jQuery.trim(runwayCityArray[runwayCityArray.length-1]);			
            }
			if (s.hier3 == "") { //this will only be true for Runway articles and slideshows that don't have cities - non-RTWs
					s.hier3 = "no-city"; 
			}
            //setup H4 - Designer Name
            var runwayDesigner = jQuery("input[name=referringPage]").val();
            var designerArray = runwayDesigner.split("/");
            s.hier4=designerArray[4];	
            //setup H5 - Article type (review for Runway)
            s.hier5=designerArray[3];
            //set up H6 for Runway pages (page type)
            s.hier6=s.prop4;
            s.hier7=s.pageName;
        } else {
            if (document.URL.indexOf("/slideshow") >= 0) {
                if (jQuery('html').hasClass("x-portrait") || jQuery('html').hasClass("x-landscape")) {
                    s.hier4 = "h4-mobile-ignore"; //bypass this for now - will return to it later
                } else {
                    s.hier4 = s.prop4;
                }						
            } else {
				if (jQuery('body').hasClass("article")) {
                	s.hier4=s.prop4; //H4 value for regular articles - placed here so that the above if statement provides a value to s.prop28
				}
            }
        }

        //set up H2 and H3 for Publications
        if (s.channel=="wwd-publications") {
            var publicationVar = s.pageName;
            var publicationVarArray = publicationVar.split("/");
            if (s.pageName=="/wwd-publications/wwd") {
                s.hier2=publicationVarArray[2];
            } else {
                s.hier2=publicationVarArray[2];
                s.hier3=publicationVarArray[3];
            }
        }

        //no h3 or h4 for image search or featured images
        if (document.URL.indexOf("featured-images") >= 0 || document.URL.indexOf("/results/slideshow") >= 0 ) {
            var slideshowUrl = document.URL;
            if (document.URL.indexOf("featured-images") >= 0) {
                var slideshowUrlArray = slideshowUrl.split("/");
                var slideshowID = slideshowUrlArray[slideshowUrlArray.length-1];
            } else {
                s.hier1="image-search";
                var slideshowUrlArray = slideshowUrl.split("/results/slideshow/");
                var slideshowID = slideshowUrlArray[1].slice(0,7);
            }
            s.hier2=slideshowID;
            s.hier3="";
            s.hier4="";
        }

        if (s.pageType!="errorPage"){
            sHier2Temp = "";
            if (s.hier2) {
                sHier2Temp = "/" + s.hier2
                }
            s.eVar1 = s.hier1 + sHier2Temp;
            s.prop1 = s.hier1 + sHier2Temp;
        }

        //append all hiers to hier1
        if (s.hier1 && s.hier2 && s.hier3 && s.hier4 && s.hier5 && s.hier6) {//6 levels only occurs in Runway articles and slideshows
            s.hier1 = s.hier1 + ":" + s.hier2 + ":" + s.hier3 + ":" + s.hier4 + ":" + s.hier5 + ":" + s.hier6;
        }
            else if (s.hier1 && s.hier2 && s.hier3 && s.hier4) {
                s.hier1 = s.hier1 + ":" + s.hier2 + ":" + s.hier3 + ":" + s.hier4;
            }
            else if (s.hier1 && s.hier2 && s.hier3) {
                s.hier1 = s.hier1 + ":" + s.hier2 + ":" + s.hier3;
            }
            else if (s.hier1 && s.hier2) {
                s.hier1 = s.hier1 + ":" + s.hier2;
            }


        s.prop5=this.scrubbedTitle(); //content title
        s.prop38=jQuery('#article-access-type').val();
        s.eVar38=s.prop38;
        if (s.prop38 == "Gated Paid") {
            s.events='event48';
            s.linkTrackVars="events";
            s.linkTrackEvents="event48";
        } else if (s.prop38 == "Gated Archive") {
            s.events='event49';
            s.linkTrackVars="events";
            s.linkTrackEvents="event49";
        } else if (s.prop38 == "Ungated") {
            s.events='event50';
            s.linkTrackVars="events";
            s.linkTrackEvents="event50";
        }

        this.networkStatus = this.fetchNetworkStatus();
        s.prop35=this.networkStatus;
        s.eVar39=s.prop35;
       // autoLogin=jQuery('#auto-login').val();
        autoLogin=jQuery.cookie('autologin'); //test for cookie instead of #auto-login hidden form field
        if (autoLogin != null) {
            s.prop36="Remember Me Enabled";
        } else {
            s.prop36="Remember Me Disabled or Unknown";
        }
        if (s.channel=="runway" || s.channel=="slideshows/runway") {
            s.prop40=jQuery('#review-city').val();
        }
        if (s.prop4=="roadblock"){
            s.events=s.apl(s.events,'event39',',',2);
        }
        if (s.channel=="news") {
            var newsRegion = jQuery.url.param("region");
            if (newsRegion != "") {
                s.eVar30 = newsRegion;
            } else {
                s.eVar30 = "all";
            }
        }
        //s.prop6=""; //content id
        //s.eVar6=s.prop6;
        if(jQuery.url.param("query")){
            var livesearch = jQuery.url.param("query");
            if (livesearch=="") {
                s.prop7="null";
            }
            else {
                s.prop7=this.scrubAll(livesearch);
            }
            s.eVar7=s.prop7;
            if (s.channel=="image-search") {
                s.eVar18="image_search";
                s.prop4 = "search";
                s.eVar4 = s.prop4;
            }
            else if(s.channel=="search") {  //this is article-search
                s.eVar18="search";
                s.prop4 = "search";
                s.eVar4 = s.prop4;
            }
            s.events=s.apl(s.events,"event1",",",2)
        }
        if (wwd.user.isLoggedIn()){
            s.prop13 = wwd.user.getSubscriptionLevel();  //account type
            s.prop15 = "logged-in";  //User segmentation
            s.prop14 = wwd.user.email;   //account id
            s.prop52 = s.prop14;
        } else {
            s.prop13 = "logged-out";
            s.prop15 = "logged-out";
            s.prop14 = "";   //report account id as blank if user is logged-out
        }
        s.eVar15 = s.prop15;
        s.eVar20 = s.prop13;
        s.eVar21 = s.prop14;

        if (jQuery.url.param("photoType")){
            var livesearchfilter = jQuery.url.param("photoType");
            s.prop19=livesearchfilter;
        }
        if (jQuery.url.param("startYear")&&jQuery.url.param("startYear")!=""&&jQuery.url.param("endYear")&&jQuery.url.param("endYear")!=""){
            var livesearchstartyear = jQuery.url.param("startYear");
            var livesearchendyear = jQuery.url.param("endYear");
            s.prop20=livesearchstartyear+":"+livesearchendyear;
        }
        if (jQuery.url.param("time")){
            var livesearchtime = jQuery.url.param("time");
            s.prop21=livesearchtime;
        }
        if (jQuery.url.param("sortCriteria")){
            var livesearchsort = jQuery.url.param("sortCriteria");
            s.prop22=livesearchsort;
        }
        if (jQuery.url.param("navSection")){
            var livenavsection = jQuery.url.param("navSection");
            s.prop26=livenavsection;
        }
        if (jQuery.url.param("mosttab")){
            var livemosttab = jQuery.url.param("mosttab");
            s.prop27=livemosttab;
        }
        if (jQuery.url.param("featuretab")){
            var livefeaturetab = jQuery.url.param("featuretab");
            if(s.prop4=="article"||s.prop4=="roadblock"||s.prop4=="slideshow"){
            s.prop28=livefeaturetab;}
            s.events=s.apl(s.events,'event6',',',2);
        }
        if (jQuery.url.param("module")){
            var livemodule = jQuery.url.param("module");
            if (livemodule != 'tn') {
                s.prop37=livemodule;
                s.eVar17=s.prop37;
            } else {
                if ( wwd.history.hash.length < 1 ) {
                    s.prop37=livemodule;
                    s.eVar17=s.prop37;
                } else {
                    s.eVar17='';
                }
            }
        }
        if (jQuery.url.param("src")){
            var livesource = jQuery.url.param("src");
            s.campaign=livesource;
        }
        if (jQuery.url.param("target")) {
            var targetwwd100 = jQuery.url.param("target");
            if (targetwwd100=="wwd100") {
                s.channel="100";
                s.eVar12="100";
            }
        }
        if (jQuery.url.param("gnewsid") && document.referrer.indexOf("news.google.com")!=-1){
            var livegsource = jQuery.url.param("gnewsid");
            s.campaign="google_news";
        }
        s.eVar31 = this.parseURL(document.referrer).host;

        var machineBuild = this.scrubMachineBuild();
        if(jQuery.cookie(machineBuild)) {
            var mbVals = jQuery.cookie(machineBuild).split('|');
            for(var i=0;i<mbVals.length;i++) {
                if(mbVals[i].match("organization")) {
                    var mbOrgId=mbVals[i].replace(/organization/,"");
                    accessTypeVar=jQuery('#article-access-type').val();
                    if(mbOrgId) { //if mbOrgId not null, not undefined and not blank
                        s.eVar26=mbOrgId;
						if (wwd.user.hasTooManyIPClientUsers) {
							if (accessTypeVar == "Gated Paid" || accessTypeVar == "Gated Archive") {
								s.events=s.apl(s.events,'event52',',',2);
							}
						}
                    }
                }
            }
        }



        if (jQuery.url.param('searchPosition')) { //if View Articles button was clicked in right rail
            if (jQuery.url.param('searchPosition') == "rightrail") {
                s.events=s.apl(s.events,'event35',',',2);
            }
        }
        if (jQuery.url.param('success')) {
            if (jQuery.url.param('success') == "corporate" ) {
                s.events=s.apl(s.events,'event47',',',2);
            }
            if (jQuery.url.param('success') == "education" ) {
                s.events=s.apl(s.events,'event46',',',2);
            }
            if (jQuery.url.param('success') == "site-license" ) {
                s.events=s.apl(s.events,'event60',',',2);
            }			
        }
        if (jQuery.url.param('src')) {
            if (jQuery.url.param('src') == "4top" || jQuery.url.param('src') == "5top") {
                if (document.URL.indexOf("/corporate") >= 0) {
                    s.events=s.apl(s.events,'event58',',',2);
                }
                if (document.URL.indexOf("/education") >= 0) {
                    s.events=s.apl(s.events,'event56',',',2);
                }
            }
            if (jQuery.url.param('src') == "4bottom" || jQuery.url.param('src') == "5bottom") {
                if (document.URL.indexOf("/corporate") >= 0) {
                    s.events=s.apl(s.events,'event59',',',2);
                }
                if (document.URL.indexOf("/education") >= 0) {
                    s.events=s.apl(s.events,'event57',',',2);
                }
            }
            if (jQuery.url.param('src') == "search_links" ) {
                s.events=s.apl(s.events,'event29',',',2);
                }
			if (jQuery.url.param('src') == "newsletter_signup" ) {
                s.events=s.apl(s.events,'event12',',',2);
                }	
        }
		
		// fire event15 if link is clicked within WWD.com. For IE, need to use document.URL for Just In module.
		if (jQuery.url.param('module') == "just-in" ) {
			if (document.URL.indexOf("wwd.com") >= 0) {
				s.events=s.apl(s.events,'event15',',',2);
			} 
		} else if (document.referrer.indexOf("wwd.com") >= 0) {
			s.events=s.apl(s.events,'event15',',',2);
		}
        
        //Omniture Server Response/Page Load times
        startPageLoad = new Date().getTime();
        if (jQuery.cookie("clickToLoadPageCookie")){ //time user clicked on link from previous page
            s.prop46 = Math.round((startPageLoad - jQuery.cookie("clickToLoadPageCookie")) * .001);   //server response time (only onClick)
        }
		

		if (document.URL.indexOf("/slideshow") >= 0) {
        	s.events=s.events +',event25';// add event25 to first slide impression of a slideshow
			if (jQuery.url.param('src') == "slideshow_bottom") {
				s.events=s.events +',event67';
			}			
		}
		s.events=s.apl(s.events,'event2',',',2);


        var srcParam = jQuery.url.param('src');
        if (srcParam !== "rightrail") {
            var srcUnique = jQuery.cookie('srcUnique');
            if (!srcUnique) {
                s.events=s.apl(s.events,'event28',',',2);
                jQuery.cookie('srcUnique','true');
            }
        }

        if (s.prop4=="article"){
            s.events=s.apl(s.events,'event26',',',2);
        }
        if ((s.prop4=="article" || s.prop4=="roadblock") && document.URL.indexOf("/slideshow") <= 0){
            var region = jQuery('#region').val();
            s.prop48 = region;
            s.eVar45 = region;
        }

        if (pagetypeVar=="article") {
            var metaKeywords = jQuery('meta[name=keywords]').attr("content");
            if(metaKeywords) {
                prop41Temp=metaKeywords.replace(/, /g, "|"); //use regex to replace all instances of ', ' with '|'
                s.prop41=prop41Temp.replace(/,/g, "|"); //use regex to replace all instances of ',' with '|'

            } else {
                s.prop41 = "WWD"; //if keywords are empty, set default keyword value
            }
            s.eVar41=s.prop41;
        }

        // capture previous page name; if it exists, capture percent of page viewed
        s.prop39=s.getPreviousValue(s.pageName,'gpv_pn');
        //jQuery("#referringPage").val(s.prop39);
        if (s.prop39){ s.prop43=s.getPercentPageViewed(); }

        if (document.URL.indexOf("/slideshow") >= 0) {  //remove slideshow id from slide pagename
            s.prop39=s.getPreviousValue(jQuery("input[name=referringPage]").val(),'gpv_pn');
        }

        //Omniture Server Response/Page Load times
        if (jQuery.cookie("pageLoadTimeCookie")){
            var prop42prop47=jQuery.cookie("pageLoadTimeCookie");
            var prop42prop47Array = prop42prop47.split(",");
            s.prop42=prop42prop47Array[0];
            s.prop47=prop42prop47Array[1];
        }

        //RESET Trailing nonsense
        s.eVar28="";
        //add session and browser ID to all pages
        s.prop44=jQuery.cookie("JSESSIONID");
        s.eVar40=jQuery.cookie("JSESSIONID");
        s.prop45=jQuery.cookie("browser_guid");
        s.eVar44=jQuery.cookie("browser_guid");
		
		s.prop11 = wwd.user.pubCode + wwd.user.accountNumber;   //account number
		s.eVar14 = s.prop11;		

        if (this.scrubbedUrl()!="") {
            // Write out the tracking pixel using the Omniture code
            var s_code=s.t();
            if (s_code) {
                document.write(s_code);
            }
        } else {
            var s_code=s.t();
            if (s_code) {
                document.write(s_code);
            }
            CN.debug.warn("scrubbedUrl null bypassed");
            //CN.debug.warn("NO STATS CALL MADE");
        }

    },
    scrubHierchy:function(){
        //clean up the hier stuff!!! make a scrub function
        var hierstr;

        //var fullpath = document.location.href;
       // if (fullpath.indexOf("#",0)>0 && wwd.history.getHash()!=""){
            //strip out whole string after #
           // pathstr = this.scrubbedUrl();
            //hierstr = pathstr.replace( /\//g, ":" );
            //if (hierstr.indexOf(':') == 0) {
                //hierstr = hierstr.substring(1, hierstr.length);
            //}
        //} else {
            //no # so use url
            hierstr = this.scrubAll(this.scrubChannel(false));
            var pathsegs = this.parseURL(document.location.href).segments;
            var pageid=this.scrubPageId();
        //}

        //if (hierstr.indexOf(':') == hierstr.lastIndexOf(':') && s.prop1!=null) {
            //s.pageType=""; //pass status, set manually in 404 page
            //hierstr = hierstr.replace(':', ':' + s.prop1 + ':');
        //}
        return hierstr;
    },
    scrubPageId:function(){
        var fullpath = document.location.href;

        if (fullpath.indexOf("#",0)>0&&wwd.history.getHash()!=""){
            //strip out whole string after #
            fullpath = wwd.history.getHash();
            //clean out the url of everything after .com
            fullpath = fullpath.replace(/article/, "");
            fullpath = "http://"+this.parseURL(document.location.href).host+fullpath
        }
        var pathsegs = this.parseURL(fullpath).segments;


        var pageid = "";
        if (pathsegs[pathsegs.length-1]!="") {
            //added the print page hack compensating for the end slash
            pageid = pathsegs[pathsegs.length-1];
            if (pageid=="print")
                pageid = pathsegs[pathsegs.length-2];
        } else {
            pageid = pathsegs[pathsegs.length-2];
            if(pageid=="print")
                pageid = pathsegs[pathsegs.length-3];
        }

        return pageid;
    },
    scrubChannel:function(root){
        var pathstr =this.parseURL(document.location.href).path
        var fullpath = document.location.href;

        if (!root && fullpath.indexOf("#",0)>0 && wwd.history.getHash()!=""){
            //strip out whole string after #
            pathstr = wwd.history.getHash();
            //clean out the url of everything after .com
            pathstr = pathstr.replace(/article/, "");
        }

        var channel = pathstr.split("/")[1] || '';
        channel = ((channel !=='' ? channel.match(/^[^\.]*$/) : ['homepage']) || [''])[0];

        if (s.pageName=="/print-image"||s.pageName=="/print-images"){
            channel="print-images";
        }
        return channel;
    },
    scrubbedTitle:function(){
        return document.title;

    },
    scrubAll:function(str){
        var rExps=[ /[\xC0-\xC2]/g, /[\xE0-\xE2]/g,
        /[\xC8-\xCA]/g, /[\xE8-\xEB]/g,
        /[\xCC-\xCE]/g, /[\xEC-\xEE]/g,
        /[\xD2-\xD4]/g, /[\xF2-\xF4]/g,
        /[\xD9-\xDB]/g, /[\xF9-\xFB]/g,
        /[\xc2]/g, /[\x80]/g,/[\x98]/g,/[\x99]/g,/[\x8c]/g,/[\x9d]/g,/'/g,/"/g ];
        var repChar=['A','a','E','e','I','i','O','o','U','u','','','','','','','',''];
        for(var i=0; i<rExps.length; i++) {
            str=str.replace(rExps[i],repChar[i]);
        }
        return str.toLowerCase();
    },
    scrubMachineBuild:function(){
        var mbcookies=new Array();
        if(document.cookie) {
            mbcookies = document.cookie.split(";");

        }
        var mbids = new Array();
        //traverse the cookies
        for (var i=0;i<mbcookies.length;i++) {
            if (mbcookies[i].match("machinebuild")) {
                var mbcookie = mbcookies[i].split("=")[0];
                mbcookie = jQuery.trim(mbcookie);
                var mbid = mbcookie.replace(/machinebuild/,"");
                mbids.push(mbid);
            }
        }
        var mblatest=mbids.sort().reverse();
        //return the word "machinebuild" + greatest numerical value in the list
        return "machinebuild"+mblatest;
    },
    scrubbedUrl:function(){
        var href = document.location.href;
        var parsedhref = this.parseURL(href);
        //fixes IE bug that doesn't set parsedhref.path to '/' on the homepage
        if (parsedhref.path == "") {
            parsedhref.path = "/";
        }
        var scrubbed_href = "";
        //fix the path string
        var pathstr ="";
        if (href.indexOf("#",0)>0 && wwd.history.getHash()!="") {

            //fetch navSection - PULL THIS OUT OF THE SCRUBBER!!!
            var fakeurl = parsedhref.hash;
            if (fakeurl.split("?")[1]) {
                var navSection = fakeurl.split("?")[1].split("=")[1];
                //code this way better than it is right now!
                var livenavsection = navSection.replace(/\&.*$/, "");;
                s.prop26=livenavsection;
            }

            //strip out whole string after #
            var tocstr = wwd.history.getHash();
            //clean out the url of everything after .com
            tocstr =tocstr.replace(/article/, "");
            //if the string is not "/wwd"
            if(tocstr!="/wwd"){
                // append sting to cleaned url
                scrubbed_href=tocstr.replace(/\?.*$/, "");
            }
        } else {
                //else pull out everything after the query string and send the url
            if (href.indexOf("chinese-week-in-review",0)>0) {
                scrubbed_href="/"+href.slice(href.indexOf("chinese-week-in-review",0));
            }
            if (href.indexOf("/print-preview/",0)>0) {
                var printpath = parsedhref.path.replace(/print-preview\//,"");
                scrubbed_href=printpath;
                } else {
                scrubbed_href=parsedhref.path;
            }
        }

        var lc = scrubbed_href.charAt(scrubbed_href.length-1);
        if (lc=="/" && scrubbed_href.length > 1) {
            //strip it out
            scrubbed_href=scrubbed_href.slice(0,-1);
        }

        return scrubbed_href;

    },
    parseURL:function(url) {
        var a =  document.createElement('a');
        a.href = url;
        return {
            source: url,
            protocol: a.protocol.replace(':',''),
            host: a.hostname,
            port: a.port,
            query: a.search,
            params: (function(){
                var ret = {},
                    seg = a.search.replace(/^\?/,'').split('&'),
                    len = seg.length, i = 0, s;
                for (;i<len;i++) {
                    if (!seg[i]) { continue; }
                    s = seg[i].split('=');
                    ret[s[0]] = s[1];
                }
                return ret;
            })(),
            file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
            hash: a.hash.replace('#',''),
            subdomain:a.hostname.split('.')[0],
            path: a.pathname.replace(/^([^\/])/,'/$1'),
            relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
            segments: a.pathname.replace(/^\//,'').split('/')
        };
    },
    fetchNetworkStatus:function(){
        var r;
        try{
            r=wwd.user.networkStatus;

        }catch(error){
            wwd.logger.verbose("error in getting the network status "+error);
        }
        return r;
    },
    setEvent:function(event){
        //set event for page load call
        CN.debug.info("Stats.setEvent() : "+event);
        this.setAction(event,true);
    },
    //pageview so slideshows are counted as pageviews instead of events. pageview set to true in wwd-slideshow.js
    trackAction:function(a,v,pageview)
    {
        CN.debug.info("Stats.trackAction()-"+a);
        //set Evar
        this.setAction(a,v);
        if (pageview){ 
            this.callLink();//removing the 'a' makes it count as a pageview
        } else {
           this.callLink(a);
        }
    },
    setAction:function(a,v){
        if(a=="query" || a=="afquery"){
            s.eVar18="advanced_search";
            s.events='event1';
            if (s.channel=="wwd-video"){
                s.eVar18="video_search";s.events='event1';
            }
            s.prop7=this.scrubAll(v);
            s.prop4 = "search";
            s.eVar4 = s.prop4;
            s.linkTrackVars="eVar18,prop4,eVar4,prop7,events";
            s.linkTrackEvents="event1";
            }
        if(a=="featured_stories" || a=="featured_videos" || a=="markets"){
            s.events='event6';
            s.linkTrackVars="events";
            s.linkTrackEvents="event6";
            }
        //Omniture Server Response/Page Load times
        if(a=="serverTime"){
            var clickToLoadPage = new Date().getTime();
            jQuery.cookie("clickToLoadPageCookie", clickToLoadPage, { path: '/'});
            }
        if(a=="topnav" || a=="tntools"){
            s.events='event15';
            s.linkTrackVars="events";
            s.linkTrackEvents="event15";
            var clickToLoadPage = new Date().getTime();
            jQuery.cookie("clickToLoadPageCookie", clickToLoadPage, { path: '/'});
            }
        if(a=="print"){
            s.events='event7';
            s.linkTrackVars="events";
            s.linkTrackEvents="event7";
            }
        if(a=="downloadroadblock"){
			/*s.prop4='roadblock';
            s.events='event32';
            s.linkTrackVars="pageName,channel,prop4,prop5,prop13,prop14,events";
            s.linkTrackEvents="event32";*/
            }
        if(a=="pdf"){
            if (v == "downloaded") {
				//s.d_url  = s.downloadLinkHandler(s.linkDownloadFileTypes);
				linktype = 'event27';
            } else if (v == "blocked") {
                linktype = 'event32';
				s.prop4  = 'roadblock';
				state = 'blocked';
            }
            s.eVar11 = s.pageName;
            s.eVar21 = s.prop14;
			s.eVar16 = jQuery('#publication-body h4.slug').text();
			s.events = linktype;
            s.linkTrackVars = "pageName,channel,prop4,prop5,prop13,prop14,eVar11,eVar21,eVar16,events";
            s.linkTrackEvents = linktype;
            }
        if(a=="404"){
            var href = document.location.href;
            s.pageName=href;
            s.prop4='404';
            s.events='';
            s.linkTrackVars="pageName,channel,prop4,prop5,prop13,prop14";
            s.linkTrackEvents="None"
            }
        if(a=="slideshow"){
            var pathstr =this.parseURL(document.location.href).path;
            var patharry = pathstr.split("/");
            var channel = this.scrubChannel(true);
           // s.hier2=this.scrubAll(v);
            s.prop28="slideshow:"+s.pageName;
            accessTypeVar=jQuery('#article-access-type').val();
            if (accessTypeVar == "Gated Paid") {
                eventVar='event48';
            } else if (accessTypeVar == "Gated Archive") {
                eventVar='event49';
            } else if (accessTypeVar == "Ungated") {
                eventVar='event50';
            } else {
                eventVar='event50';
            }
            s.events='event2,event25,' + eventVar;// fired when slideshow loads new slide
            s.linkTrackEvents = s.events 
            s.channel="slideshows/"+channel;
            s.eVar12=s.channel;
            s.prop4="slideshow";
            s.eVar4=s.prop4;
        }
		/*
        if(a=="slideshowLink"){ 
            if (v == "restart") {
                s.events='event53';
            } else if (v == "restartsmall") {
                s.events='event54';
            } else if (v == "setfullsize") {
                s.events='event55';
            }
            s.linkTrackVars="events";
            s.linkTrackEvents = s.events;
            }
			*/
        if(a=="today_module" || a=="module"){
            s.eVar17=v;
            s.events='event10';
            s.linkTrackVars="eVar17,events";
            s.linkTrackEvents="event10";
            }
        if(a=="emailaction"){
            s.events='event9';
            s.linkTrackVars="events";
            s.linkTrackEvents="event9";
            s.eVar11 = s.pageName;
            }
        if(a=="loggedin"){
            s.events = 'event34';
			s.prop11 = wwd.user.pubCode + wwd.user.accountNumber;   //account number
            s.prop14 = wwd.user.email;   //account id		
			s.eVar14 = s.prop11;
            s.eVar21 = s.prop14;
            s.prop44 = jQuery.cookie("JSESSIONID");
            s.eVar40 = s.prop44;
            s.prop45 = jQuery.cookie("browser_guid");
            s.eVar44 = s.prop45;
            s.linkTrackVars = "events,prop11,prop14,eVar14,eVar21,prop36,prop44,eVar40,prop45,eVar44";
            s.linkTrackEvents = "event34";
            }
        if(a=="loggedout"){
            s.events = 'event51';
			s.prop11 = wwd.user.pubCode + wwd.user.accountNumber;   //account number
            s.prop14 = wwd.user.email;   //account id		
			s.eVar14 = s.prop11;
            s.eVar21 = s.prop14;
            s.prop44 = jQuery.cookie("JSESSIONID");
            s.eVar40 = s.prop44;
            s.prop45 = jQuery.cookie("browser_guid");
            s.eVar44 = s.prop45;
            s.linkTrackVars = "events,prop11,prop14,eVar14,eVar21,prop36,prop44,eVar40,prop45,eVar44";
            s.linkTrackEvents = "event51";
            }
        if(a=="sub_combo"){
            s.events='event40';
            s.linkTrackVars="events";
            s.linkTrackEvents="event40";
            }
        if(a=="sub_online"){
            s.events='event41';
            s.linkTrackVars="events";
            s.linkTrackEvents="event41";
            }
        if(a=="sub_print"){
            s.events='event42';
            s.linkTrackVars="events";
            s.linkTrackEvents="event42";
            }
        if(a=="sub_archive"){
            s.events='event43';
            s.linkTrackVars="events";
            s.linkTrackEvents="event43";
            }
        if(a=="sub_fn"){
            s.events='event44';
            s.linkTrackVars="events";
            s.linkTrackEvents="event44";
            }
        if(a=="sub_trial"){
            s.events='event45';
            s.linkTrackVars="events";
            s.linkTrackEvents="event45";
            }			
    },
    //only exists because of the legacy calls in the toc
    track2Actions:function(a,v,a2,v2){
        CN.debug.info("Stats.track2Actions()-"+a+"-"+a2);
        //set Evar
        this.setAction(a,v);
        this.callLink(a);
        this.setAction(a2, v2);
        this.callLink(a2);
    },
    callLink:function(a){ 
        if (a!="serverTime") { //do not make Omniture call if a = serverTime
			if (!a || a == null) {
				s.t(a,this.linktype,a);
			} else {
				s.tl(a,this.linktype,a); 
			}
				s.events="";
        }
    }
}

jQuery(document).ready(function($) {
    wwd.stats.initialize($);
});

//Page load complete
jQuery(window).load(function() {
    //Omniture Server Response/Page Load times
    var completePageLoad = new Date().getTime();
    s.prop42 = Math.round((completePageLoad - startPageLoad) * .001); //page (html) load time
    if (jQuery.cookie("clickToLoadPageCookie")){ //this is true if a page loaded as a result of clicking a link on our site, as opposed to entering our site for the first time o
        s.prop47 = Math.round((completePageLoad - jQuery.cookie("clickToLoadPageCookie")) * .001); //complete page load time (includes server response time)
    } else {
        s.prop47 = s.prop42; //the first time entering WWD.com, I can only get the page load time.
    }
    pageLoadTime = s.prop42 + "," + s.prop47; //pass these values to be displayed on next page
    jQuery.cookie("pageLoadTimeCookie", pageLoadTime, { path: '/'});
});

//use jquery to load the P&G script
jQuery.getScript('//js.revsci.net/gateway/gw.js?csid=F09828&auto=t&bpid=condenast', function()
{});

}

// Third Party Stats
// Specify which pages should include this code
if ( document.location.href.indexOf("subscribe.wwd.com") !== -1 || document.location.href.indexOf("pubservice.com") !== -1 || document.location.href.indexOf("espdev.espcomp.net") !== -1 || document.location.href.indexOf("login-iframe") !== -1 || document.location.href.indexOf("login-help") !== -1 || document.location.href.indexOf("login-email-verify") !== -1 || document.location.href.indexOf("exit.html") !== -1 || document.location.href.indexOf("exit_archive.html") !== -1 ) {
jQuery(document).ready(function() {
	jQuery('.help.forgot-email-password a').click(function(){
		s.events='event62';
		s.eVar46="log in help intercept";
		s.linkTrackVars="events,eVar46";
		s.linkTrackEvents = "event62";
		s.tl(true,'o','log in help intercept');
	});
});			
thirdparty_stats={
    //{pageName:'subscribe',channel:'subscriptions',contentType:'subscription',contentTitle:'WWD Subscription Services',contentId:'step1',event:'renewal'}
    call:function(params, dontFireStatCall) {

        if (params!=null) {

            s.events=s.apl(s.events,'event2',',',2);//to fire event2 on every page

            if (params.purchaseAmount) {
                s.events = "purchase";
                s.purchase = params.purchaseAmount+",1,1";
                //s.products = params.promoCode+";"+params.pubCode+";1;"+params.purchaseAmount;
            }
            if (params.purchaseId) {
                s.purchaseID = params.purchaseId;
				if ($.url.param('PK') != "") {
					promoVar = $.url.param('PK');
				} else {
					promoVar = "NOPROMOCODE";
				}				
                s.products = promoVar+";"+jQuery.url.param('PC')+";1;"+params.purchaseAmount;
            }
            if (params.pageName) {
                s.pageName = params.pageName;
                s.eVar11 = s.pageName;
				if (params.pageName = "thankyou_tri") {
					s.events = "event61";
				}	
				if (params.pageName = "updateEmail") {
					s.events = "event61";
				}		
				if (params.pageName = "changeEmail") {
					s.events = "event61";
				}		
				if (params.pageName = "verify_email") {
					s.eVar46 = "triangulation_complete";
				}				
                //s.hier1 = params.pageName.replace(/\//g, ': '); 
            }
            if (params.channel) {
                s.channel = params.channel;
				s.hier1 = params.channel;
            }
            if (params.contentType) {
                s.prop4 = params.contentType;
            }
            if (params.contentTitle) {
                s.prop5 = params.contentTitle;
            }
            if (params.contentId) {
                s.prop6 = params.contentId;
            }
            if (params.promoCode) {
                s.eVar22 = params.promoCode;
            }
            if (params.event) {
                this.event(params.event);
            }
            if (params.videoTitle) {
                s.prop25 = params.videoTitle;
                s.eVar33 = s.prop25;
            }
            if (params.total) {
                s.products = params.promoCode+";1;"+params.total;
            }
        }

        if (jQuery.url.param("module")) {
            var livemodule = jQuery.url.param("module");
            s.eVar17=livemodule;
        }
        //do not fire this stat call during too_many_users or exit_popups - otherwise you get 2 calls
        if (!params.too_many_users  && !params.exit_popup && !params.archive_exit_popup && !params.login_help && !params.non_email_login_message && !params.login_email_verify) {
            if (!dontFireStatCall) {
                var s_code=s.t();
                if (s_code){
                    document.write(s_code);
                }
            }
        }
        if (params.too_many_users) {
            s.events='event38';
            s.eVar21=params.login_username;
            s.prop44=jQuery.cookie("JSESSIONID");
            s.eVar40=jQuery.cookie("JSESSIONID");
            s.prop45=jQuery.cookie("browser_guid");
            s.eVar44=jQuery.cookie("browser_guid");
            s.linkTrackVars="events,eVar21,prop14,prop44,eVar40,prop45,eVar44";
            s.linkTrackEvents = "event38";
            s.tl(true,'o','too_many_users');

        }
        if (params.exit_popup) {
            s.events='event30';
            s.prop39=s.getPreviousValue(s.pageName,'gpv_pn');
            s.linkTrackVars="events,event30,prop39";
            s.linkTrackEvents = "event30";
            s.tl(true,'o','exit_popup');

        }
        if (params.archive_exit_popup) {
            s.events='event31';
            s.prop39=s.getPreviousValue(s.pageName,'gpv_pn');
            s.linkTrackVars="events,event31,prop39";
            s.linkTrackEvents = "event31";
            s.tl(true,'o','archive_exit_popup');
        }
        if (params.login_help) {
            s.events='event61';
			s.eVar46="forgot_intercept";
            s.linkTrackVars="events,eVar46";
            s.linkTrackEvents = "event61";
            s.tl(true,'o','forgot_intercept');
        }	
        if (params.login_email_verify) {
            s.events='event61';
			s.eVar46="email pending verification";
            s.linkTrackVars="events,eVar46";
            s.linkTrackEvents = "event61";
            s.tl(true,'o','email pending verification');
        }		
		if (params.non_email_login_message) {
			s.eVar46="non-email login error";
			s.events='event61';
            s.linkTrackVars="events,event61,eVar46";
            s.linkTrackEvents = "event61";
            s.tl(true,'o','verify_email');			
		}
    },

    event:function(event) {
        var eventpassed = "";
        switch(event) {
            case 'renewal':
                //Renewal
                eventpassed = "event14";
                break;
            case 'free_trial':
                //Free Trial
                eventpassed = "event13";
                break;
            case 'account_setup':
                //Account Setup
                eventpassed = "event19";
                break;
            case 'delivery_address':
                //Delivery Address
                eventpassed = "event20";
                break;
            case 'payment_information':
                //Payment Information
                eventpassed = "event21";
                break;
            case 'confirmation':
                //Confirmation
                eventpassed = "purchase,event22";
                break;
            case 'registration':
                //Registration try is independent of successful purchase
                s.events = "event3";
                s.linkTrackVars = "events";
                s.linkTrackEvents = "event3";
                s.tl(true,'o','event3');
                break;
        }
        if (eventpassed!="") {
            s.events=eventpassed;
        }
    }
}
}

// Third Party Stats Calls
// Specify which pages should include this code
if ( document.location.href.indexOf("subscribe.wwd.com") !== -1 || document.location.href.indexOf("pubservice.com") !== -1 || document.location.href.indexOf("espdev.espcomp.net") !== -1 ) {
	$(document).ready(function() {
		
		if ($.url.param('PK') != "") {
			promo = $.url.param('PK');
		} else {
			promo = "NOPROMOCODE";
		}
		pub = $.url.param('PC');
		uniqID = "";
		if ($('#confAcctNo').length){
			uniqID = $.trim($('#confAcctNo').html()) + '-' + promo;
		}
		purchaseAmt = "";
		eventVar = "";
		pageNameVar = "";
		channelVar = "";
		contentTypeVar = "";
		contentIdVar = "";
		
		// Combo Sub
		if ( document.location.href.indexOf("wxsubscription.aspx") !== -1 ) {
			pageNameVar = "combo_subscription";
			channelVar = "esp_pages";
			contentTypeVar = "new_sub";
			contentIdVar = "step1";
		}
		// Online Sub
		if ( document.location.href.indexOf("subnew_onepage_v2.aspx") !== -1 ) {
			pageNameVar = "online_subscription";
			channelVar = "esp_pages";
			contentTypeVar = "new_sub";
			contentIdVar = "step1";
		}
		// Print Sub
		if ( document.location.href.indexOf("subnew_print.aspx?PC=WD") !== -1 ) {
			pageNameVar = "print_subscription";
			channelVar = "esp_pages";
			contentTypeVar = "new_sub";
			contentIdVar = "step1";
		}
		// Archive Sub
		if ( document.location.href.indexOf("subnew.aspx") !== -1 ) {
			pageNameVar = "archive_subscription";
			channelVar = "esp_pages";
			contentTypeVar = "new_sub";
			contentIdVar = "step1";
		}
		// FN Sub
		if ( document.location.href.indexOf("subnew_print.aspx?PC=FN") !== -1 ) {
			pageNameVar = "fn_subscription";
			channelVar = "esp_pages";
			contentTypeVar = "new_sub";
			contentIdVar = "step1";
		}
		// Log in
		if ( document.location.href.indexOf("login.aspx") !== -1 || document.location.href.indexOf("Login.aspx") !== -1) {
			pageNameVar = "accountlogin";
			channelVar = "esp_pages";
			contentTypeVar = "new_sub";
			contentIdVar = "step1";
		}
		// Password Help
		if ( document.location.href.indexOf("PasswordHelp.aspx") !== -1 ) {
			pageNameVar = "passwordhelp";
			channelVar = "esp_pages";
			contentTypeVar = "new_sub";
			contentIdVar = "step1";
		}
		// Bill Pay
		if ( document.location.href.indexOf("Subbillpay.aspx") !== -1 ) {
			pageNameVar = "subbillpay";
			channelVar = "esp_pages";
			contentTypeVar = "new_sub";
			contentIdVar = "step1";
		}
		// Update Login
		if ( document.location.href.indexOf("Subupd.aspx") !== -1 ) {
			pageNameVar = $('#hiddenInputPageName').val();
			channelVar = "esp_pages";
			contentTypeVar = "new_sub";
			contentIdVar = "step1";
		}
		// Thank you
		if ( document.location.href.indexOf("thankyou.aspx") !== -1 ) {
			if ( document.location.href.indexOf("frame=1") !== -1 ) {
				pageNameVar = "thankyou";
			} else {
				pageNameVar = "thankyou_tri";
			}
			channelVar = "esp_pages";
			contentTypeVar = "new_sub";
			//contentIdVar = "step1";
			contentIdVar = $('#Label1').html().replace('$','');
		}	
		// Sub Combo
		if ( document.location.href.indexOf("subscribe_combo.aspx") !== -1 ) {
			pageNameVar = "combo_plus_subscription";
			channelVar = "esp_pages";
			contentTypeVar = "new_sub";
			contentIdVar = "step1";		 
		} 
		// Update Email  
		if ( document.location.href.indexOf("UpdateEmail.aspx") !== -1 ) {
			pageNameVar = "update_email";
			channelVar = "esp_pages";
			contentTypeVar = "new_sub";
			contentIdVar = "step1";		 
		}		
		// Sub Renew
		if ( document.location.href.indexOf("subRenewConf.aspx") !== -1 ) {
			pageNameVar = $('#hiddenInputPageName').val();
			channelVar = "esp_pages";
			contentTypeVar = "new_sub";
			contentIdVar = "step1";		 
		}
		// Update/Change email for triangulation
		if ( document.location.href.indexOf("updateemail.aspx") !== -1 ) {
			pageNameVar = $('#hiddenInputPageName').val();
			channelVar = "esp_pages";
			contentTypeVar = "new_sub";
			contentIdVar = "step1";		 
		}		
		// Verify email for triangulation
		if ( document.location.href.indexOf("VerifyEmail.aspx") !== -1 ) {
			pageNameVar = "verify_email";
			channelVar = "esp_pages";
			contentTypeVar = "new_sub";
			contentIdVar = "step1";	
			eventVar = "event61";
			promo = "";
		}		
		if ( document.location.href.indexOf("subnewconf.aspx") !== -1 || document.location.href.indexOf("subNewConf.aspx") !== -1 ) {
			pageNameVar = $('#pageName').val();
			channelVar = "esp_pages";
			contentTypeVar = "";
			contentIdVar = "";
			if ($('#confOrderTotal').length){
				purchaseAmt = $('#confOrderTotal').html().replace('$','');
			}
			eventVar = $('#eventName').val();
		}
			
		thirdparty_stats.call({ pageName: pageNameVar ,channel: channelVar, contentType: contentTypeVar, contentId: contentIdVar, promoCode: promo, pubCode: pub, purchaseAmount:purchaseAmt, purchaseId:uniqID, event: eventVar });
	});	
}		

// for login-form -need to use third party stats because of iframe
if (document.location.href.indexOf("login-iframe") !== -1 ) {
    thirdPartyStatsCall = function(usernameVar) {
		if (login_error_message == "verifyemail") {
			thirdparty_stats.call({ non_email_login_message: 'users'});
		} else {
        	thirdparty_stats.call({ too_many_users: 'users', login_username: usernameVar });
		}
    }
}

// for exit archive pop up
if (document.location.href.indexOf("exit_archive.html") !== -1 ) {
	jQuery(document).ready(function() {
		thirdparty_stats.call({ archive_exit_popup: 'exit' });
	});
}

// for exit pop up
if (document.location.href.indexOf("exit.html") !== -1 ) {
	jQuery(document).ready(function() {
		thirdparty_stats.call({ exit_popup: 'exit' });
	});
}

// for Video pop-ups (2010 runway pages, etc)
if (document.location.href.indexOf("/video/") !== -1 ) {
	$(document).ready(function() {
		thirdparty_stats.call({pageName:'video',contentType:'video',channel:'video-popup'});
	});
}

// for log in help
if (document.location.href.indexOf("login-help.html") !== -1 ) {
	$(document).ready(function() {
		thirdparty_stats.call({ login_help: 'help' });
	});
}

// for log in help
if (document.location.href.indexOf("login-email-verify.html") !== -1 ) {
	$(document).ready(function() {
		thirdparty_stats.call({ login_email_verify: 'help' });
	});
}


// Mobile/July System Pages
// Specify which pages should include this code
if ( document.location.href.indexOf("m.wwd.com") !== -1 || document.location.href.indexOf("mobile.wwd.com") !== -1 || document.location.href.indexOf("julysystems.com") !== -1) { 	  

	s.pageName=pageName;
	s.server="mobile";
	s.channel="mobile";
	s.prop1="mobile";
	s.hier1="mobile";
	s.prop4="mobile";
	s.events="event2";

	s.prop14 = prop14;
	s.prop15 = prop15;
	s.eVar15 = eVar15;
	s.eVar21 = prop14;
	
	s.prop38=prop38;
	s.eVar38=eVar38;

	/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
	var s_code=s.t();
	if(s_code)
	document.write(s_code)

}



s.Integrate.add("AAM")
s.Integrate.AAM.setVars=function(s,p){

};
s.Integrate.AAM.useVars=function(s,p){
	"function"!=typeof DIL&&(DIL=function(c,d){var a=[],e,f,g,i,m,s,q;"object"!=typeof c&&(c={});m=!!c.disableDestinationPublishingIframe;s=c.mappings;q=c.uuidCookie;(e=d)&&a.push(e+"");f=c.partner;if(!f||"string"!=typeof f)return e="DIL partner is invalid or not specified in initConfig",DIL.errorModule.handleError({name:"error",message:e,filename:"dil.js"}),Error(e);e="DIL containerNSID is invalid or not specified in initConfig, setting to default of 0";if((g=c.containerNSID)||"number"==typeof g)g=parseInt(g,
10),!isNaN(g)&&0<=g&&(e="");e&&(g=0,a.push(e),e="");i=DIL.getDil(f,g);if(i instanceof DIL&&i.api.getPartner()==f&&i.api.getContainerNSID()==g)return i;if(this instanceof DIL)DIL.registerDil(this,f,g);else return new DIL(c,"DIL was not instantiated with the 'new' operator, returning a valid instance with partner = "+f+" and containerNSID = "+g);var r={IS_HTTPS:"https:"==document.location.protocol,POST_MESSAGE_ENABLED:!!window.postMessage},x={},k={},j={firingQueue:[],fired:[],firing:!1,errored:[],reservedKeys:{sids:!0,
pdata:!0,logdata:!0,callback:!0,postCallbackFn:!0,useImageRequest:!0},callbackPrefix:"demdexRequestCallback",firstRequestHasFired:!1,useJSONP:!0,abortRequests:!1,num_of_jsonp_responses:0,num_of_jsonp_errors:0,num_of_img_responses:0,num_of_img_errors:0,registerRequest:function(b){var h=this.firingQueue;"object"==typeof b&&h.push(b);!this.firing&&h.length&&(b=h.shift(),w.fireRequest(b),!this.firstRequestHasFired&&"script"==b.tag&&(this.firstRequestHasFired=!0))}};i=function(){var b="http://fast.";r.IS_HTTPS&&
(b=!0===c.iframeAkamaiHTTPS?"https://fast.":"https://");return b+f+".demdex.net/dest3.html?d_nsid="+g+"#"+encodeURIComponent(document.location.href)};var t={THROTTLE_START:3E4,throttleTimerSet:!1,id:"destination_publishing_iframe_"+f+"_"+g,url:i(),iframe:null,iframeHasLoaded:!1,sendingMessages:!1,messages:[],messageSendingInterval:r.POST_MESSAGE_ENABLED?15:100,jsonProcessed:[],attachIframe:function(){var b=this,h=document.createElement("iframe");h.id=this.id;h.style.cssText="display: none; width: 0; height: 0;";
h.src=this.url;l.addListener(h,"load",function(){b.iframeHasLoaded=!0;b.requestToProcess()});document.body.appendChild(h);this.iframe=h},requestToProcess:function(b){var h=this;b&&!n.isEmptyObject(b)&&this.process(b);this.iframeHasLoaded&&(this.messages.length&&!this.sendingMessages)&&(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){h.messageSendingInterval=r.POST_MESSAGE_ENABLED?15:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},process:function(b){var h=
this.messages,o=encodeURIComponent,p,c,a,e,d;if((p=b.dests)&&p instanceof Array&&(c=p.length))for(a=0;a<c;a++)e=p[a],e=[o("dests"),o(e.id||""),o(e.y||""),o(e.c||"")],h.push(e.join("|"));if((p=b.ibs)&&p instanceof Array&&(c=p.length))for(a=0;a<c;a++)e=p[a],e=[o("ibs"),o(e.id||""),o(e.tag||""),l.encodeAndBuildRequest(e.url||[],","),o(e.ttl||"")],h.push(e.join("|"));if((p=b.dpcalls)&&p instanceof Array&&(c=p.length))for(a=0;a<c;a++)e=p[a],d=e.callback||{},d=[d.obj||"",d.fn||"",d.key||"",d.tag||"",d.url||
""],e=[o("dpm"),o(e.id||""),o(e.tag||""),l.encodeAndBuildRequest(e.url||[],","),o(e.ttl||""),l.encodeAndBuildRequest(d,",")],h.push(e.join("|"));this.jsonProcessed.push(b)},sendMessages:function(){var b=this;this.messages.length?(DIL.xd.postMessage(b.messages.shift(),b.url,b.iframe.contentWindow),setTimeout(function(){b.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1}},y={traits:function(b){n.isValidPdata(b)&&(k.sids instanceof Array||(k.sids=[]),l.extendArray(k.sids,b));return this},
pixels:function(b){n.isValidPdata(b)&&(k.pdata instanceof Array||(k.pdata=[]),l.extendArray(k.pdata,b));return this},logs:function(b){n.isValidLogdata(b)&&("object"!=typeof k.logdata&&(k.logdata={}),l.extendObject(k.logdata,b));return this},customQueryParams:function(b){n.isEmptyObject(b)||l.extendObject(k,b,j.reservedKeys);return this},signals:function(b,h){var a,e=b;if(!n.isEmptyObject(e)){if(h&&"string"==typeof h)for(a in e={},b)b.hasOwnProperty(a)&&(e[h+a]=b[a]);l.extendObject(k,e,j.reservedKeys)}return this},
result:function(b){"function"==typeof b&&(k.callback=b);return this},afterResult:function(b){"function"==typeof b&&(k.postCallbackFn=b);return this},useImageRequest:function(){k.useImageRequest=!0;return this},clearData:function(){k={};return this},submit:function(){w.submitRequest(k);k={};return this},getPartner:function(){return f},getContainerNSID:function(){return g},getEventLog:function(){return a},getState:function(){var b={},h={};l.extendObject(b,j,{callbackPrefix:!0,useJSONP:!0,registerRequest:!0});
l.extendObject(h,t,{attachIframe:!0,requestToProcess:!0,process:!0,sendMessages:!0});return{pendingRequest:k,otherRequestInfo:b,destinationPublishingInfo:h}}},w={submitRequest:function(b){j.registerRequest(w.createQueuedRequest(b));return!0},createQueuedRequest:function(b){var h,e=b.callback,c="img";if(!n.isEmptyObject(s)){var d,f,g;for(d in s)if(s.hasOwnProperty(d)&&(f=s[d],!(null==f||""===f)&&d in b&&!(f in b)&&!(f in j.reservedKeys)))g=b[d],null==g||""===g||(b[f]=g)}n.isValidPdata(b.sids)||(a.push("requestProcs.createQueuedRequest(): sids is not valid, converting to an empty array"),
b.sids=[]);n.isValidPdata(b.pdata)||(a.push("requestProcs.createQueuedRequest(): pdata is not valid, converting to an empty array"),b.pdata=[]);n.isValidLogdata(b.logdata)||(a.push("requestProcs.createQueuedRequest(): logdata is not valid, converting to an empty object"),b.logdata={});b.logdataArray=l.convertObjectToKeyValuePairs(b.logdata,"=",!0);b.logdataArray.push("_ts="+(new Date).getTime());"function"!=typeof e&&(e=this.defaultCallback);if(j.useJSONP=!b.useImageRequest||"boolean"!=typeof b.useImageRequest)c=
"script",h=j.callbackPrefix+(new Date).getTime();return{tag:c,src:w.makeRequestSrc(b,h),internalCallbackName:h,callbackFn:e,postCallbackFn:b.postCallbackFn,useImageRequest:b.useImageRequest,requestData:b}},defaultCallback:function(b){var h,e,a,c,d,f,g,r,i;if((h=b.stuff)&&h instanceof Array&&(e=h.length))for(a=0;a<e;a++)if((c=h[a])&&"object"==typeof c)if(d=c.cn,f=c.cv,g=c.ttl||0,r=c.dmn||"."+document.domain,i=c.type,d&&(f||"number"==typeof f))"var"!=i&&(g=parseInt(g,10))&&!isNaN(g)&&l.setCookie(d,
f,1440*g,"/",r,!1),x[d]=f;h=b.uuid;if("string"==typeof h&&h.length&&!n.isEmptyObject(q)){e=q.path;if("string"!=typeof e||!e.length)e="/";a=parseInt(q.days,10);isNaN(a)&&(a=100);l.setCookie(q.name||"aam_did",h,1440*a,e,q.domain||"."+document.domain,!0===q.secure)}!m&&!j.abortRequests&&t.requestToProcess(b)},makeRequestSrc:function(b,h){b.sids=n.removeEmptyArrayValues(b.sids||[]);b.pdata=n.removeEmptyArrayValues(b.pdata||[]);var a=l.encodeAndBuildRequest(b.sids,","),e=l.encodeAndBuildRequest(b.pdata,
","),c=(b.logdataArray||[]).join("&");delete b.logdataArray;var d=r.IS_HTTPS?"https://":"http://",i;i=[];var m,k;for(m in b)!(m in j.reservedKeys)&&b.hasOwnProperty(m)&&(k=b[m],m=encodeURIComponent(m),k instanceof Array?i.push(m+"="+l.encodeAndBuildRequest(k,",")):i.push(m+"="+encodeURIComponent(k)));i=i.length?"&"+i.join("&"):"";return d+f+".demdex.net/event?d_nsid="+g+(a.length?"&d_sid="+a:"")+(e.length?"&d_px="+e:"")+(c.length?"&d_ld="+encodeURIComponent(c):"")+i+(j.useJSONP?"&d_rtbd=json&d_jsonv="+
DIL.jsonVersion+"&d_dst=1&d_cts=1&d_cb="+(h||""):"")},fireRequest:function(b){"img"==b.tag?this.fireImage(b):"script"==b.tag&&this.fireScript(b)},fireImage:function(b){var h,c;j.abortRequests||(j.firing=!0,h=new Image(0,0),h.onload=function(){j.firing=!1;j.fired.push(b);j.num_of_img_responses++;j.registerRequest()},c=function(h){e="imgAbortOrErrorHandler received the event of type "+h.type;a.push(e);j.abortRequests=!0;j.firing=!1;j.errored.push(b);j.num_of_img_errors++;j.registerRequest()},h.addEventListener?
(h.addEventListener("error",c,!1),h.addEventListener("abort",c,!1)):h.attachEvent&&(h.attachEvent("onerror",c),h.attachEvent("onabort",c)),h.src=b.src)},fireScript:function(b){var h=this,c,d,g=b.src,i=b.postCallbackFn,m="function"==typeof i;j.abortRequests||(j.firing=!0,window[b.internalCallbackName]=function(h){try{h||(h={});var c=b.callbackFn;j.firing=!1;j.fired.push(b);j.num_of_jsonp_responses++;c(h);m&&i(h)}catch(d){d.message="DIL jsonp callback caught error with message "+d.message;e=d.message;
a.push(e);d.filename=d.filename||"dil.js";d.partner=f;DIL.errorModule.handleError(d);try{c({error:d.name+"|"+d.message}),m&&i({error:d.name+"|"+d.message})}catch(g){}}finally{j.registerRequest()}},d=document.createElement("script"),d.addEventListener&&d.addEventListener("error",function(c){e="jsonp script tag error listener received the event of type "+c.type+" with src "+g;h.handleScriptError(e,b)},!1),d.type="text/javascript",d.src=g,c=document.getElementsByTagName("script")[0],c.parentNode.insertBefore(d,
c))},handleScriptError:function(b,h){a.push(b);j.abortRequests=!0;j.firing=!1;j.errored.push(h);j.num_of_jsonp_errors++;j.registerRequest()}},n={isValidPdata:function(b){return b instanceof Array&&this.removeEmptyArrayValues(b).length?!0:!1},isValidLogdata:function(b){return!this.isEmptyObject(b)},isEmptyObject:function(b){if("object"!=typeof b)return!0;for(var h in b)if(b.hasOwnProperty(h))return!1;return!0},removeEmptyArrayValues:function(b){for(var h=0,c=b.length,a,e=[],h=0;h<c;h++)a=b[h],"undefined"!=
typeof a&&null!=a&&e.push(a);return e}},u;u=document.addEventListener?function(b,c,a){b.addEventListener(c,function(b){"function"==typeof a&&a(b)},!1)}:document.attachEvent?function(b,c,a){b.attachEvent("on"+c,function(b){"function"==typeof a&&a(b)})}:void 0;var l={addListener:u,convertObjectToKeyValuePairs:function(b,c,a){var e=[],c=c||"=",d,f;for(d in b)f=b[d],"undefined"!=typeof f&&null!=f&&e.push(d+c+(a?encodeURIComponent(f):f));return e},encodeAndBuildRequest:function(b,c){return this.map(b,
function(b){return encodeURIComponent(b)}).join(c)},map:function(b,c){if(Array.prototype.map)return b.map(c);if(void 0===b||null===b)throw new TypeError;var a=Object(b),e=a.length>>>0;if("function"!==typeof c)throw new TypeError;for(var d=Array(e),f=0;f<e;f++)f in a&&(d[f]=c.call(c,a[f],f,a));return d},filter:function(b,c){if(!Array.prototype.filter){if(void 0===b||null===b)throw new TypeError;var a=Object(b),e=a.length>>>0;if("function"!==typeof c)throw new TypeError;for(var d=[],f=0;f<e;f++)if(f in
a){var g=a[f];c.call(c,g,f,a)&&d.push(g)}return d}return b.filter(c)},getCookie:function(b){var b=b+"=",c=document.cookie.split(";"),a,e,d;a=0;for(e=c.length;a<e;a++){for(d=c[a];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(b))return decodeURIComponent(d.substring(b.length,d.length))}return null},setCookie:function(b,c,a,d,e,f){var g=new Date;a&&(a*=6E4);document.cookie=b+"="+encodeURIComponent(c)+(a?";expires="+(new Date(g.getTime()+a)).toUTCString():"")+(d?";path="+d:"")+(e?";domain="+
e:"")+(f?";secure":"")},extendArray:function(b,a){return b instanceof Array&&a instanceof Array?(Array.prototype.push.apply(b,a),!0):!1},extendObject:function(b,a,c){var d;if("object"==typeof b&&"object"==typeof a){for(d in a)if(a.hasOwnProperty(d)&&(n.isEmptyObject(c)||!(d in c)))b[d]=a[d];return!0}return!1}};"error"==f&&0==g&&l.addListener(window,"load",function(){DIL.windowLoaded=!0});u=function(){m||setTimeout(function(){j.firstRequestHasFired||y.submit()},DIL.constants.TIME_TO_DEFAULT_REQUEST);
!m&&!j.abortRequests&&t.attachIframe()};var z=document,v=c.iframeAttachmentDelay;"error"!=f&&(DIL.windowLoaded?u():"complete"!=z.readyState&&"loaded"!=z.readyState?l.addListener(window,"load",u):DIL.isAddedPostWindowLoadWasCalled?l.addListener(window,"load",u):(v="number"==typeof v?parseInt(v,10):0,0>v&&(v=0),setTimeout(u,v||DIL.constants.TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT)));this.api=y;this.getStuffedVariable=function(b){var a=x[b];!a&&"number"!=typeof a&&(a=l.getCookie(b),!a&&"number"!=typeof a&&
(a=""));return a};this.validators=n;this.helpers=l;window._unit_tests&&(this.constants=r,this.pendingRequest=k,this.requestController=j,this.setDestinationPublishingUrl=i,this.destinationPublishing=t,this.requestProcs=w,this.log=a)},function(){var c=document,d;null==c.readyState&&c.addEventListener&&(c.readyState="loading",c.addEventListener("DOMContentLoaded",d=function(){c.removeEventListener("DOMContentLoaded",d,!1);c.readyState="complete"},!1))}(),DIL.extendStaticPropertiesAndMethods=function(c){var d;
if("object"==typeof c)for(d in c)c.hasOwnProperty(d)&&(this[d]=c[d])},DIL.extendStaticPropertiesAndMethods({version:"2.6",jsonVersion:1,constants:{TIME_TO_DEFAULT_REQUEST:50,TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT:500},windowLoaded:!1,dils:{},isAddedPostWindowLoadWasCalled:!1,isAddedPostWindowLoad:function(c){this.isAddedPostWindowLoadWasCalled=!0;this.windowLoaded="function"==typeof c?!!c():"boolean"==typeof c?c:!0},create:function(c){try{return new DIL(c)}catch(d){return(new Image(0,0)).src="http://error.demdex.net/event?d_nsid=0&d_px=14137&d_ld=name%3Derror%26filename%3Ddil.js%26partner%3Dno_partner%26message%3DError%2520in%2520attempt%2520to%2520create%2520DIL%2520instance%2520with%2520DIL.create()%26_ts%3D"+
(new Date).getTime(),Error("Error in attempt to create DIL instance with DIL.create()")}},registerDil:function(c,d,a){d=d+"$"+a;d in this.dils||(this.dils[d]=c)},getDil:function(c,d){var a;"string"!=typeof c&&(c="");d||(d=0);a=c+"$"+d;return a in this.dils?this.dils[a]:Error("The DIL instance with partner = "+c+" and containerNSID = "+d+" was not found")},dexGetQSVars:function(c,d,a){d=this.getDil(d,a);return d instanceof this?d.getStuffedVariable(c):""},xd:{postMessage:function(c,d,a){var e=1;d&&
(window.postMessage?a.postMessage(c,d.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):d&&(a.location=d.replace(/#.*$/,"")+"#"+ +new Date+e++ +"&"+c))}}}),DIL.errorModule=function(){var c=DIL.create({partner:"error",containerNSID:0,disableDestinationPublishingIframe:!0}),d={harvestererror:14138,destpuberror:14139,dpmerror:14140,generalerror:14137,error:14137,noerrortypedefined:15021,evalerror:15016,rangeerror:15017,referenceerror:15018,typeerror:15019,urierror:15020};return{handleError:function(a){var e=a.name?
(new String(a.name)).toLowerCase():"",f=[],a={name:e,filename:a.filename?a.filename+"":"",partner:a.partner?a.partner+"":"no_partner",site:a.site?a.site+"":document.location.href,message:a.message?a.message+"":""};f.push(e in d?d[e]:d.noerrortypedefined);c.api.pixels(f).logs(a).useImageRequest().submit()},pixelMap:d}}());DIL.tools={};
DIL.tools.getSearchReferrer=function(c,d){var a=DIL.getDil("error"),e=DIL.tools.decomposeURI(c||document.referrer),f="",g="",i={queryParam:"q"},f=a.helpers.filter(["object"==typeof d?d:{},{hostPattern:/aol\./},{hostPattern:/ask\./},{hostPattern:/bing\./},{hostPattern:/google\./},{hostPattern:/yahoo\./,queryParam:"p"}],function(a){return!(!a.hasOwnProperty("hostPattern")||!e.hostname.match(a.hostPattern))}).shift();return!f?{valid:!1,name:"",keywords:""}:{valid:!0,name:e.hostname,keywords:(a.helpers.extendObject(i,
f),g=i.queryPattern?(f=(""+e.search).match(i.queryPattern))?f[1]:"":e.uriParams[i.queryParam],decodeURIComponent(g||"").replace(/\+|%20/g," "))}};
DIL.tools.decomposeURI=function(c){var d=DIL.getDil("error"),a=document.createElement("a");a.href=c||document.referrer;var c=a.hash,e=a.host.split(":").shift(),f=a.hostname,g=a.href,i=a.pathname.replace(/^\//,""),m=a.protocol,s=a.search,q={},a=a.search.replace(/^(\/|\?)?|\/$/g,"");d.helpers.map(a.split("&"),function(a){a=a.split("=");q[a.shift()]=a.shift()});return{hash:c,host:e,hostname:f,href:g,pathname:i,protocol:m,search:s,uriParams:q}};
DIL.tools.getMetaTags=function(){var c={},d=document.getElementsByTagName("meta"),a,e,f,g,i;a=0;for(f=arguments.length;a<f;a++)if(g=arguments[a],null!==g)for(e=0;e<d.length;e++)if(i=d[e],i.name==g){c[g]=i.content;break}return c};DIL.modules={};
DIL.modules.siteCatalyst={init:function(c,d,a){try{var e={name:"DIL Site Catalyst Module Error"},f;if(!(d instanceof DIL))return f="dilInstance is not a valid instance of DIL",e.message=f,DIL.errorModule.handleError(e),f;e.partner=d.api.getPartner();if("object"!=typeof c)return f="siteCatalystReportingSuite is not an object",e.message=f,DIL.errorModule.handleError(e),f;if("function"!=typeof c.m_i||"function"!=typeof c.loadModule)return f="s.m_i is not a function or s.loadModule is not a function",
e.message=f,DIL.errorModule.handleError(e),f;var g=c.m_i("DIL");if("object"!=typeof g)return f="m is not an object",e.message=f,DIL.errorModule.handleError(e),f;g.trackVars=this.constructTrackVars(a);g.d=0;g._t=function(){var a,c,d=","+this.trackVars+",",g=this.s,i,k=[];i=[];var j={},t=!1;if("object"!=typeof g||!(g.va_t instanceof Array))return f="Error in m._t function: s is not an object or s.va_t is not an array",e.message=f,DIL.errorModule.handleError(e),f;if(this.d){if(g.lightProfileID)(a=g.lightTrackVars)&&
(a=","+a+","+g.vl_mr+",");else if(g.pe||g.linkType)a=g.linkTrackVars,g.pe&&(c=g.pe.substring(0,1).toUpperCase()+g.pe.substring(1),g[c]&&(a=g[c].trackVars)),a&&(a=","+a+","+g.vl_l+","+g.vl_l2+",");if(a){c=0;for(k=a.split(",");c<k.length;c++)0<=d.indexOf(","+k[c]+",")&&i.push(k[c]);i.length&&(d=","+i.join(",")+",")}i=0;for(c=g.va_t.length;i<c;i++)a=g.va_t[i],0<=d.indexOf(","+a+",")&&(null!=g[a]&&""!==g[a])&&(j[a]=g[a],t=!0);t&&this.d.api.signals(j,"c_").submit()}};g.setup=function(){this.d=d};c.loadModule("DIL");
if("object"!=typeof c.DIL||"function"!=typeof c.DIL.setup)return f="s.DIL is not an object or s.DIL.setup is not a function",e.message=f,DIL.errorModule.handleError(e),f;c.DIL.setup()}catch(i){return i.message="DIL Site Catalyst module caught error with message "+i.message,d instanceof DIL&&(i.partner=d.api.getPartner()),DIL.errorModule.handleError(i),i.message}},constructTrackVars:function(c){var d=[],a,e,f,g,i;if("object"==typeof c){a=c.names;if(a instanceof Array&&(f=a.length))for(e=0;e<f;e++)g=
a[e],"string"==typeof g&&g.length&&d.push(g);c=c.iteratedNames;if(c instanceof Array&&(f=c.length))for(e=0;e<f;e++)if(a=c[e],"object"==typeof a&&(g=a.name,i=parseInt(a.maxIndex,10),"string"==typeof g&&g.length&&!isNaN(i)&&0<=i))for(a=0;a<=i;a++)d.push(g+a);if(d.length)return d.join(",")}return this.constructTrackVars({names:"pageName channel campaign products events pe pev1 pev2 pev3".split(" "),iteratedNames:[{name:"prop",maxIndex:75},{name:"eVar",maxIndex:75}]})}};
//v2.7
// Get the in Site Catalyst object instance
var _scObj = window['s'];
// create instance of DIL
var scDil = DIL.create({
	partner : "condenast",
	uuidCookie:{
     name:'aam_uuid',
     days:30
	 }
	});
DIL.modules.siteCatalyst.init(_scObj, scDil);
(function() {
				if(typeof _scObj.prop52 != 'undefined' && "" !== _scObj.prop52){
					var getCookie = DIL.getDil('condenast').helpers.getCookie; // Save DILs getCookie function
					var bbp = _scObj.prop52; //getting needed id
					queryString = null;
					if (!navigator.cookieEnabled || getCookie('_dx') || !bbp) {
                                return;
					}
					queryString = 'dpid=544&dpuuid=' + bbp;
					new Image().src = (document.location.protocol == 'https:'? 'https:':'http:') + '//dpm.demdex.net/ibs:' + queryString;
					document.cookie = '_dx=1;domain=' + (function(){var domainSplit=document.domain.split('.'),l=domainSplit.length;return '.'+domainSplit[l-2]+'.'+domainSplit[l-1];})() + ';path=/;expires=' + new Date(new Date().getTime() + 86400000).toUTCString();
				}
				
})();
};













}

s.m_Integrate_c="var m=s.m_i('Integrate');m.add=function(n,o){var m=this,p;if(!o)o='s_Integrate_'+n;if(!m.s.wd[o])m.s.wd[o]=new Object;m[n]=new Object;p=m[n];p._n=n;p._m=m;p._c=0;p._d=0;p.disable=0;p"
+".get=m.get;p.delay=m.delay;p.ready=m.ready;p.beacon=m.beacon;p.script=m.script;m.l[m.l.length]=n};m._g=function(t){var m=this,s=m.s,i,p,f=(t?'use':'set')+'Vars',tcf;for(i=0;i<m.l.length;i++){p=m[m."
+"l[i]];if(p&&!p.disable&&p[f]){if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','p','f','var e;try{p[f](s,p)}catch(e){}');tcf(s,p,f)}else p[f](s,p)}}};m._t=function(){this._g(1)};m._fu=func"
+"tion(p,u){var m=this,s=m.s,v,x,y,z,tm=new Date;if(u.toLowerCase().substring(0,4) != 'http')u='http://'+u;if(s.ssl)u=s.rep(u,'http:','https:');p.RAND=Math&&Math.random?Math.floor(Math.random()*10000"
+"000000000):tm.getTime();p.RAND+=Math.floor(tm.getTime()/10800000)%10;x=0;while(x>=0){x=u.indexOf('[',x);if(x>=0){y=u.indexOf(']',x);if(y>x){z=u.substring(x+1,y);if(z.length>2&&z.substring(0,2)=='s."
+"'){v=s[z.substring(2)];if(!v)v=''}else{v=''+p[z];if(!(v==p[z]||parseFloat(v)==p[z]))z=0}if(z) {u=u.substring(0,x)+s.rep(escape(v),'+','%2B')+u.substring(y+1);x=y-(z.length-v.length+1)} else {x=y}}}"
+"}return u};m.get=function(u,v){var p=this,m=p._m;if(!p.disable){if(!v)v='s_'+m._in+'_Integrate_'+p._n+'_get_'+p._c;p._c++;p.VAR=v;p._d++;m.s.loadModule('Integrate:'+v,m._fu(p,u),0,1,p._n)}};m.delay"
+"=function(){var p=this;if(p._d<=0)p._d=1};m.ready=function(){var p=this,m=p._m;p._d=0;if(!p.disable)m.s.dlt()};m._d=function(){var m=this,i,p;for(i=0;i<m.l.length;i++){p=m[m.l[i]];if(p&&!p.disable&"
+"&p._d>0)return 1}return 0};m._x=function(d,n){var p=this[n],x;if(!p.disable){for(x in d)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))p[x]=d[x];p._d--}};m.beacon=function(u){var p=this,m"
+"=p._m,s=m.s,imn='s_i_'+m._in+'_Integrate_'+p._n+'_'+p._c,im;if(!p.disable&&s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){p._c++;im=s.wd[imn]=new Image;im.src=m._fu(p,u)}};m.s"
+"cript=function(u){var p=this,m=p._m;if(!p.disable)m.s.loadModule(0,m._fu(p,u),0,1)};m.l=new Array;if(m.onLoad)m.onLoad(s,m)";
s.m_i("Integrate");


s.setTagContainer("WWD")
/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s.version='H.25.4';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\"
+"\\\\\"),\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}retur"
+"n y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;ret"
+"urn 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',f=\"+~!*()'\",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent("
+"x);for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,\"%\"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.su"
+"bstring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+"
+"','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00"
+"'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unesc"
+"ape(x)}return y');return tcf(x)}else return unescape(x)}return y};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r"
+";z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring("
+"0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf'"
+",f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visi"
+"bilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){whil"
+"e(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\")"
+";s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.li"
+"nkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostnam"
+"e,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'"
+".','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<"
+"0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-6"
+"0);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':''"
+");return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i"
+";l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tc"
+"f=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s"
+".wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0"
+";return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return "
+"s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)fo"
+"r(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackin"
+"gServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase()"
+";else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.version+(s.t"
+"cn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[u"
+"n]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;retur"
+"n ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd[imn];if("
+"!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nr"
+"s){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'"
+"].bcr()',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=='_top'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return '"
+"'}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=="
+"'s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x"
+";i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h."
+"substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length"
+">1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.lengt"
+"h;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v)if((!f||sk.subst"
+"ring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nf"
+"l[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!n"
+"fl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.contextData.')<0){sp=sk."
+"substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+"
+"ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var s=this,qs='',l,fv='',"
+"fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring("
+"0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+"
+"s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!="
+"'linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';if(v.length>255){s.pageURLRest=v.substring(255);v=v.substrin"
+"g(0,255);}}else if(k=='pageURLRest')q='-g';else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&"
+"&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1"
+"';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k"
+"=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascri"
+"ptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='h"
+"omepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k"
+"=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieveLightProfiles')"
+"q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eV"
+"ar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'"
+"';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLow"
+"erCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h"
+"=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.indexOf('#')!=0&&h.indexOf('about:')!=0&&h.indexOf('javascript:')!=0&&(lef||lif)&&(!lef||"
+"s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=this;s.t();s.lnk=0;if(b)return this[b](e"
+");return true');s.bcr=function(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if(s.bcf){if(typeof(s.bcf)=='function')s.bcf();else if(s.bct&&s.bct.href)s.d.location=s.bct.href}s.bct=s.bce=s"
+".bcf=0};s.bc=new Function('e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n,nrs,a,h;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;if(!s.bbc)s.useForcedLinkTracking=0;else if(!s.useForcedLinkTr"
+"acking){s.b.removeEventListener(\"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEventListener(\"click\",s.bc,false);s.eo=e.srcElement?e.srcElement:e.target;nrs=s.nrs;s.t("
+");s.eo=0;if(s.nrs>nrs&&s.useForcedLinkTracking&&e.target){a=e.target;while(a&&a!=s.b&&a.tagName.toUpperCase()!=\"A\"&&a.tagName.toUpperCase()!=\"AREA\")a=a.parentNode;if(a){h=a.href;if(h.indexOf(\""
+"#\")==0||h.indexOf(\"about:\")==0||h.indexOf(\"javascript:\")==0)h=0;t=a.target;if(e.target.dispatchEvent&&h&&(!t||t==\"_self\"||t==\"_top\"||(s.wd.name&&t==s.wd.name))){e.stopPropagation();e.stopI"
+"mmediatePropagation();e.preventDefault();n=s.d.createEvent(\"MouseEvents\");n.initMouseEvent(\"click\",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.alt"
+"Key,e.shiftKey,e.metaKey,e.button,e.relatedTarget);n.s_fe=1;s.bct=e.target;s.bce=n}}}');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h."
+"indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.ho"
+"st:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.to"
+"UpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=thi"
+"s,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''"
+"+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t"
+"=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u"
+"+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)re"
+"turn s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return "
+"0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',"
+"q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&"
+"s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i"
+"<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=f"
+"unction(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener){if(s.n&&s.n.userAgent.indexOf('WebKit')>=0"
+"&&s.d.createEvent){s.bbc=1;s.useForcedLinkTracking=1;s.b.addEventListener('click',s.bc,true)}s.b.addEventListener('click',s.bc,false)}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,"
+"v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%"
+"10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.subst"
+"ring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if"
+"(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){v"
+"ar s=this;if(s.un&&s.mpc('sa',arguments))return;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r"
+",l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s"
+";m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l="
+"m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c="
+"s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))return;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if("
+"x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,"
+"i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m"
+"[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl"
+",i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':'"
+");if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');"
+"i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'"
+"')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s"
+".d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,"
+"100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m"
+"=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x"
+" in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=n"
+"ew Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if("
+"!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if"
+"(!s.maxDelay)s.maxDelay=250;s.dlt()};s.gfid=function(){var s=this,d='0123456789ABCDEF',k='s_fid',fid=s.c_r(k),h='',l='',i,j,m=8,n=4,e=new Date,y;if(!fid||fid.indexOf('-')<0){for(i=0;i<16;i++){j=Mat"
+"h.floor(Math.random()*m);h+=d.substring(j,j+1);j=Math.floor(Math.random()*n);l+=d.substring(j,j+1);m=n=16}fid=h+'-'+l;}y=e.getYear();e.setYear(y+2+(y<1900?1900:0));if(!s.c_w(k,fid,e))fid=0;return f"
+"id};s.applyADMS=function(){var s=this,vb=new Object;if(s.wd.ADMS&&!s.visitorID&&!s.admsc){if(!s.adms)s.adms=ADMS.getDefault();if(!s.admsq){s.visitorID=s.adms.getVisitorID(new Function('v','var s=s_"
+"c_il['+s._in+'],l=s.admsq,i;if(v==-1)v=0;if(v)s.visitorID=v;s.admsq=0;if(l){s.admsc=1;for(i=0;i<l.length;i++)s.t(l[i]);s.admsc=0;}'));if(!s.visitorID)s.admsq=new Array}if(s.admsq){s.vob(vb);vb['!vi"
+"sitorID']=0;s.admsq.push(vb);return 1}else{if(s.visitorID==-1)s.visitorID=0}}return 0};s.track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*100000000"
+"00000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds("
+")+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;if(s.mpc('t',arguments))return;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i"
+",x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&"
+"s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next){j='1"
+".7';if(a.reduce){j='1.8';if(j.trim){j='1.8.1';if(Date.parse){j='1.8.2';if(Object.create)j='1.8.5'}}}}}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaE"
+"nabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){"
+"bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\""
+":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)whi"
+"le(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.bro"
+"wserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}s.fid=s.gfid();if(s.applyADMS())return '';if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);i"
+"f(!s.abort){var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s."
+"eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if"
+"(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeav"
+"eQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else t"
+"rk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(o.dataset&&o.dataset.sObjectId){s.wd.s_objectID=o.dataset.sObjectId;}else if(o.getAttribute&&o.getAttribute('data-s-o"
+"bject-id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if(s.useForcedLinkTracking){s.wd.s_objectID='';oc=o.onclick?''+o.onclick:'';if(oc){var ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;"
+"if(ocb>=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.charAt(ocb))>=0)ocb++;if(ocb<oc.length){oce=ocb;ocq=ocx=0;while(oce<oc.length&&(oc.charAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt("
+"oce)==ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx=0;}else{ocq=oc.charAt(oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}oce++;}oc=oc.substring(ocb,oce);if(oc){o.s_soid=new Function('s','"
+"var e;try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+("
+"x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('"
+"t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}}else s.dl(vo);if(vo)s.voa(vb,1);s.abort=0;s.pageURLRest=s.lnk=s.eo=s.linkName=s.linkType"
+"=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo,f){var s=this;s.lnk=o;s.linkType="
+"t;s.linkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){va"
+"r s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s"
+"[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf("
+"'s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i"
+"<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElements"
+"ByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf"
+"('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6"
+"));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.e"
+"m=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visito"
+"rID,fid,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCod"
+"e,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookie"
+"DomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,e"
+"vents,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va"
+"_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,pageURLRest,plugins';s.vl_t"
+"+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dy"
+"namicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilter"
+"s,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();i"
+"f(pg){s.wd.s_co=function(o){return o};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,j,x,s;if(un){un=un.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s=l[i];x=s._c;if((!x||x=='s_c'||(j>0&&x=='s_l'))&&(s.oun==un||(s.fs&&s.sa&&s.fs(s.oun,un)))){if(s.sa)s.sa(un);if(x=='s_c')return s}else s=0}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");
w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");
w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a<5||v.indexOf('Opera')>=0||u.indexOf('Opera')>=0)c=s_ft(c);if(!s){s=new Object;if(!w.s_c_in){w.s_c_il=new Array;w.s_c_in=0}s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;}s._c='s_c';(new Function("s","un","pg","ss",c))(s,un,pg,ss);return s}
function s_giqf(){var w=window,q=w.s_giq,i,t,s;if(q)for(i=0;i<q.length;i++){t=q[i];s=s_gi(t.oun);s.sa(t.un);s.setTagContainer(t.tagContainerName)}w.s_giq=0}s_giqf()