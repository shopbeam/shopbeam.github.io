(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_LA/all.js#xfbml=1&appId=152032514811026";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));		  

/* Para agregar redes sociales a GA */
function trackTwitter(intent_event)
{
	if (intent_event)
	{
		var opt_pagePath;
		if (intent_event.target && intent_event.target.nodeName == 'IFRAME')
		{
			opt_target = extractParamFromUri(intent_event.target.src, 'url');
		}
		_gaq.push(['_trackSocial', 'twitter', 'tweet', opt_pagePath]);
	}
}
function extractParamFromUri(uri, paramName)
{
	if (!uri)
	{
		return;
	}
	var regex = new RegExp('[\\?&#]' + paramName + '=([^&#]*)');
	var params = regex.exec(uri);
	if (params != null)
	{
		return unescape(params[1]);
	}
	return;
}
function clickEventToAnalytics(intent_event)
{
	if (intent_event)
	{
		var opt_pagePath;
		if (intent_event.target && intent_event.target.nodeName == 'IFRAME')
		{
			opt_target = extractParamFromUri(intent_event.target.src, 'url');
		}
		var label = intent_event.region;
		_gaq.push(['_trackSocial', 'twitter', label, opt_pagePath]);
	};
}
function tweetIntentToAnalytics(intent_event)
{
	if (intent_event)
	{
		var opt_pagePath;
		if (intent_event.target && intent_event.target.nodeName == 'IFRAME')
		{
			opt_target = extractParamFromUri(intent_event.target.src, 'url');
		}
		var label = "tweet";
		_gaq.push(['_trackSocial', 'twitter', label, opt_pagePath]);
	};
}
function favIntentToAnalytics(intent_event)
{
	if (intent_event)
	{
		var opt_pagePath;
		if (intent_event.target && intent_event.target.nodeName == 'IFRAME')
		{
			opt_target = extractParamFromUri(intent_event.target.src, 'url');
		}
		var label = "favorite";
		_gaq.push(['_trackSocial', 'twitter', label, opt_pagePath]);
	};
}
function retweetIntentToAnalytics(intent_event)
{
	if (intent_event)
	{
		var opt_pagePath;
		if (intent_event.target && intent_event.target.nodeName == 'IFRAME')
		{
			opt_target = extractParamFromUri(intent_event.target.src, 'url');
		}
		var label = "retweet";
		_gaq.push(['_trackSocial', 'twitter', label, opt_pagePath]);
	};
}
function followIntentToAnalytics(intent_event)
{
	if (intent_event)
	{
		var opt_pagePath;
		if (intent_event.target && intent_event.target.nodeName == 'IFRAME')
		{
			opt_target = extractParamFromUri(intent_event.target.src, 'url');
		}
		var label = "follow";
		_gaq.push(['_trackSocial', 'twitter', label, opt_pagePath]);
	};
}
try
{ 
	if (twttr)
	{
		twttr.ready(function (twttr) {
			twttr.events.bind('click',    clickEventToAnalytics);
			twttr.events.bind('tweet',    tweetIntentToAnalytics);
			twttr.events.bind('retweet',  retweetIntentToAnalytics);
			twttr.events.bind('favorite', favIntentToAnalytics);
			twttr.events.bind('follow',   followIntentToAnalytics);
		  });

	}
}
catch(e) {}
try
{
		FB.Event.subscribe('edge.create', function(targetUrl) {
		  _gaq.push(['_trackSocial', 'facebook', 'like', targetUrl]);
		});
}
catch(e) {}
try
{
		FB.Event.subscribe('edge.remove', function(targetUrl) {
		  _gaq.push(['_trackSocial', 'facebook', 'unlike', targetUrl]);
		});
}
catch(e) {}
try
{
		FB.Event.subscribe('message.send', function(targetUrl) {
		  _gaq.push(['_trackSocial', 'facebook', 'send', targetUrl]);
		});
}
catch(e) {}
try
{
		FB.Event.subscribe('comment.create', function(targetUrl) {
		  _gaq.push(['_trackSocial', 'facebook', 'comment', targetUrl]);
		});
}
catch(e) {}
try
{
		FB.Event.subscribe('comment.remove', function(targetUrl) {
		  _gaq.push(['_trackSocial', 'facebook', 'uncomment', targetUrl]);
		});
}
catch(e) {}

/* JavaScript Document */
if (typeof(bannerProtocolo)=="undefined")
{
    var bannerProtocolo=document.location.protocol.toString();
}

/* 
 var pageTracker = null;
 function doStats(sitename, trackUrl) {
 /* Google * /
 try {
 pageTracker = _gat._getTracker("UA-1380906-30");
 ( trackUrl ) ? pageTracker._trackPageview(trackUrl) : pageTracker._trackPageview();
 } 
 catch(err){
 // alert('Bienvenido, derechos reservador por: Editorial Televisa');
 }
 }

 /* Google Analytics  * /
 var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
 document.writeln(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
 */
function IsNumericStats(input)
{
	if ((input=="")||(input=="."))
	{
		return false;
	}
	else
	{
		var RE = /^-{0,1}\d*\.{0,1}\d+$/;
	    return (RE.test(input));
	}
}

function doStats(sitename, trackUrl) {}
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-1380906-30']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();




/* Comscore */

/* Comscore por sitio  */
var domain = document.domain;
var comscorePorSitio = false;
if (domain=="www.caras.com.mx")
{
    comscorePorSitio=true;
    comscoreSitio="caras-mx";
    comscoreSeccion = document.URL;
    comscoreSeccion = comscoreSeccion.replace(/http:\/\/www.caras.com.mx\//gi,"");
    comscoreSeccion = comscoreSeccion.replace(/\//gi,".");
}
if(comscorePorSitio)
{
	
	
	
	siteSeccion = window.location.pathname;
	var seccionesSitio=siteSeccion.split("/");
	esHome=true;
	for (i=0;i<seccionesSitio.length;i++)
	{
		if(IsNumericStats(seccionesSitio[i]))
		{
			esHome=false;
		}
	}
	
	if ((typeof(tipoArticulo)=="undefined")||(esHome==true))
	{
		tipoArticulo="home";
	}
	
	
	if(tipoArticulo!="home")
	{
		if(tipoArticulo=="galeria")
		{
			comscoreType="galeria";
		}
		else
		{
			comscoreType="articulo";
		}
		
		comscoreSeccion="";
		var seccionesSitio=siteSeccion.split("/");
		for (i=0;i<seccionesSitio.length;i++)
		{
			if(seccionesSitio[i]!="")
			{
				if(IsNumericStats(seccionesSitio[i]))
				{
					comscoreSeccion=comscoreSeccion + "."+comscoreType+"." + seccionesSitio[i]+"-"+seccionesSitio[i+1];
					i=i+1;
				}
				else
				{
					if (comscoreSeccion=="")
					{
						comscoreSeccion=seccionesSitio[i];
					}
					else
					{
						comscoreSeccion=comscoreSeccion + "." + seccionesSitio[i];
					}
				}
			}
		}
		
	}
	else
	{
		if (siteSeccion=="/")
		{
			comscoreSeccion=window.location.hostname + ".inicio";
			comscoreSeccion=comscoreSeccion.replace("www.","");
			comscoreSeccion=comscoreSeccion.replace(".com","");
			comscoreSeccion=comscoreSeccion.replace(".mx","");
		}
		else
		{
			comscoreSeccion="";
			var seccionesSitio=siteSeccion.split("/");
			for (i=0;i<seccionesSitio.length;i++)
			{
				if(seccionesSitio[i]!="")
				{
					
					if (comscoreSeccion=="")
					{
						comscoreSeccion=seccionesSitio[i];
					}
					else
					{
						comscoreSeccion=comscoreSeccion + "." + seccionesSitio[i];
					}
				}
			}
			comscoreSeccion=comscoreSeccion+".inicio";
		}
	}
	
    function udm_(e){var t="comScore=",n=document,r=n.cookie,i="",s="indexOf",o="substring",u="length",a=2048,f,l="&ns_",c="&",h,p,d,v,m=window,g=m.encodeURIComponent||escape;if(r[s](t)+1)for(d=0,p=r.split(";"),v=p[u];d<v;d++)h=p[d][s](t),h+1&&(i=c+unescape(p[d][o](h+t[u])));e+=l+"_t="+ +(new Date)+l+"c="+(n.characterSet||n.defaultCharset||"")+"&c8="+g(n.title)+i+"&c7="+g(n.URL)+"&c9="+g(n.referrer),e[u]>a&&e[s](c)>0&&(f=e[o](0,a-8).lastIndexOf(c),e=(e[o](0,f)+l+"cut="+g(e[o](f+1)))[o](0,a)),n.images?(h=new Image,m.ns_p||(ns_p=h),h.src=e):n.write("<","p","><",'img src="',e,'" height="1" width="1" alt="*"',"><","/p",">")};
    udm_('http'+(document.location.href.charAt(4)=='s'?'s://sb':'://b')+'.scorecardresearch.com/b?c1=2&c2=6035759&ns_site='+comscoreSitio+'&name='+comscoreSeccion);
    document.writeln('<script type="text/javascript" language="JavaScript1.3" src="http://b.scorecardresearch.com/c2/6035759/cs.js"></script>');
}
else
{
    var __cs_c1 = 2;
    var __cs_c2 = "6035759";
    var __cs_c3 = "";
    var __cs_c4 = document.location.href;
    var __cs_c5 = "";
    var __cs_c6 = "";
    var __cs_c15 = "";
    var __cs_params = ["c1=", __cs_c1, "&c2=", __cs_c2, "&c3=", __cs_c3, "&c4=", __cs_c4, "&c5=", __cs_c5, "&c6=",
        __cs_c6, "&c15=", __cs_c15].join('');
    if( window.parent.location == window.location ) {
        document.writeln(unescape("%3Cscript src='" + (bannerProtocolo == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js?" + __cs_params +"' %3E%3C/script%3E"));
    }
}






