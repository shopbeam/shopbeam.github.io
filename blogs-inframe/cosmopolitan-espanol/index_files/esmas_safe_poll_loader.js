// v. 2013.mayo.06.13.26
//alert(variant+'ok')
function loadScript(url, callback){
	var f = arguments.callee;
	if (!("queue" in f))
		f.queue = {};
	var queue =  f.queue;
	if (url in queue) { // script is already in the document
		if (callback) {
			if (queue[url]) // still loading
				queue[url].push(callback);
			else // loaded
				callback();
		}
		return;
	}
	queue[url] = callback ? [callback] : [];
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.setAttribute('charset', 'iso-8859-1');
	script.onload = script.onreadystatechange = function() {
		if (script.readyState && script.readyState != "loaded" && script.readyState != "complete")
			return;
		script.onreadystatechange = script.onload = null;
		while (queue[url].length)
			queue[url].shift()();
		queue[url] = null;
	};
	script.src = url;
	document.getElementsByTagName("head")[0].appendChild(script);
}
function waitLoad(){	
	if (!esmasSafeGlobalLoading){
		esmasSafeGlobalLoading = true;
		execution();
	} else {	
		interval = setTimeout('waitLoad()',100);
	}
}
var urlwg = ''
function execution(){
	tmpId = esmasSafeItem.getProperty('id').substr(31,36); //guid
    
	//var myCSS = new Asset.css(tmpId+'.css');		
	if(document.location.href.indexOf('/type/nt') >= 0) var typeenc = 'nt';
	if(document.location.href.indexOf('/type/wg') >= 0) var typeenc = 'wg';
	if(document.location.href.indexOf('/type/wg3') >= 0) var typeenc = 'wg3';
	if(document.location.href.indexOf('/type/mv') >= 0) var typeenc = 'mv';
    //alert(variant)
    switch(variant){
        case 'versuspop':
            var tmp_url = 'http://pollsdynamic.esmas.com/generaformversus/pollguid/'+ tmpId + '/i/' + esmasSafeIndex + '/type/'+ typeenc +'/';
            //var tmp_url = 'http://encuestas.esmas.com.mx/generaformversus/pollguid/'+ tmpId + '/i/' + esmasSafeIndex + '/type/'+ typeenc +'/';
            break
    
        case 'versuswg': case 'versuswg3':
            var tmp_url = 'http://pollsdynamic.esmas.com/generaformversuswg/pollguid/'+ tmpId + '/i/' + esmasSafeIndex + '/type/'+ typeenc +'/host/polls.esmas.com';
            //var tmp_url = urlwg = 'http://encuestas.esmas.com.mx/generaformversuswg/pollguid/'+ tmpId + '/i/' + esmasSafeIndex + '/type/'+ typeenc +'/host/polls.esmas.com';
            location.href = tmp_url            
            break
            
        default:
            var tmp_url = 'http://pollsdynamic.esmas.com/generaform/pollguid/'+ tmpId + '/i/' + esmasSafeIndex + '/type/'+ typeenc +'/';
            //var tmp_url = 'http://encuestas.esmas.com.mx/generaform/pollguid/'+ tmpId + '/i/' + esmasSafeIndex + '/type/'+ typeenc +'/'; 
    }

	//var myScript = new Asset.javascript(tmp_url, null);
	loadScript(tmp_url); 
	$('esmas_safe_simple_poll_wrapper_'+tmpId).style.background = 'none';
    
}
function eraseCookie(name){
	createCookie(name,"",-1);
}
//Cargado DinÃ¡mico
var esmasSafeSimplePoll = new Array;
var esmasSafeGlobalLoading = false;
var emasSafeinterval = null;
var esmasSafeIndex = 0;
var esmasSafeItem = null;
delete String.prototype.contains;

//http://encuestas.esmas.com.mx/resources/js/
//http://i2.esmas.com/encuestas/public/js/
loadScript("http://i2.esmas.com/encuestas/public/js/mootools-1.2.3-core-yc.js", function(){
	loadScript("http://i2.esmas.com/encuestas/public/js/mootools-1.2-more-plugins.js", function (){													 
		//loadScript("http://encuestas.esmas.com.mx/resources/js/swf.js", function(){
			loadScript("http://i2.esmas.com/encuestas/public/js/browserdetect.js", function(){
				//loadScript("http://encuestas.esmas.com.mx/resources/js/swfobject.js", function(){
				    if(variant== 'versuspop'){
                       //loadScript("http://encuestas.esmas.com.mx/resources/js/actionsVersus.js", function(){
					   loadScript("http://i2.esmas.com/encuestas/public/js/actionsVersus.js", function(){	
                       $(document.body).getElements('.esmas_safe_simple_poll_wrapper').each(function(item,index){				
							esmasSafeIndex = index;
							esmasSafeItem = item;	
							waitLoad();						
						});//each
					   });
                    }else{
                        //loadScript("http://encuestas.esmas.com.mx/resources/js/pollactions.js", function(){
                        loadScript("http://i2.esmas.com/encuestas/public/js/pollactions.js", function(){					
						$(document.body).getElements('.esmas_safe_simple_poll_wrapper').each(function(item,index){				
							esmasSafeIndex = index;
							esmasSafeItem = item;	
							waitLoad();						
						});//each
					   });//swfobject.js
				    }
			}); //loadScript browserdetect.js
		//}); //loadScript swf.js
	}); //loadScript More
}); //loadScript Mootols
