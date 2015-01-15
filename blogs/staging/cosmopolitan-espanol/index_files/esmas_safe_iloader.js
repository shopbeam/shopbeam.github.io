// v. 2013.agosto.12 20:14
var typeobj;
var pollguid;
var ambiente = new Object;
//ambiente['desarrollo'] = 'http://encuestas.esmas.com.mx'
ambiente['desarrollo'] = 'http://polls.esmas.com'

var boxLoaderClass = function(properties) { 
	// inicializa las propiedades
	if( properties )
		this.boxProperties = properties;
	else {
		this.boxProperties = {
			box_index: 0, 
			box_full_id: '', 
			box_key: ''
		};
	}
	// interval timer
	var timerId = 0;
	// instance of this class
	var thisObject; 
	// cuenta de veces intentados cargar el js � css
	var tries = 0;
	// carga js � css externo
	this.loadjscssfile = function(filename, filetype){
		if (filetype=='js'){ //if filename is a external JavaScript file
		  var fileref=document.createElement('script');
		  fileref.setAttribute('type','text/javascript');
		  fileref.setAttribute('src', filename); 
		  fileref.setAttribute('id', 'script_' + this.boxProperties.box_full_id);
		}
		else if (filetype=='css'){ //if filename is an external CSS file
		 var fileref=document.createElement('link');
		 fileref.setAttribute('rel', 'stylesheet');
		 fileref.setAttribute('type', 'text/css');
		 fileref.setAttribute('href', filename);
		}
		if (typeof fileref != 'undefined')
		 document.getElementsByTagName('head')[0].appendChild(fileref);
	}; 
	// obtiene un objeto html mediante su id
	this.get_object = function(id){
	   var object = null;
	   if( document.layers ){
		object = document.layers[id];
	   } else if( document.all){
		object = document.all[id];
	   } else if(document.getElementById){
			object = document.getElementById(id);
	   }
	   return object;
	};
	// crea un iframe y le asigna todas sus propiedades
	this.makeiFrame = function(){
		var arrRuta = new Array();
		arrRuta = location.href.split("type/");
		//casos de typos de casillas		
		if ( arrRuta.length == 2 ){
			var typeNt = arrRuta[1].substr(0,2);
		} else { // caso default
			var typeNt = 'wg';
		}
		
		if(esmas_safe_boxattributes[thisObject.boxProperties.box_index][0].encuestas[0].pollHeight != undefined){
			var alt = esmas_safe_boxattributes[thisObject.boxProperties.box_index][0].encuestas[0].pollHeight;
		}		
		if(alt != undefined && alt != 0 && alt != "0" && alt != "" && alt != null && alt){
			//var pollHeight = esmas_safe_boxattributes[thisObject.boxProperties.box_index][0].pollHeight;
			var pollHeight = alt;
			alert(pollHeight)
		}else{
			var pollHeight = 400;
		}
		//alert(esmas_safe_boxattributes[thisObject.boxProperties.box_index][0].encuestas[0].enc_guid)
		
		if(esmas_safe_boxattributes[thisObject.boxProperties.box_index][0].encuestas[0].status.toString() == '1' || esmas_safe_boxattributes[thisObject.boxProperties.box_index][0].encuestas[0].status.toString() == '2'){
		   // Se crea de esta forma, de lo contrario no respeta la transparencia
			typeobj = esmas_safe_boxattributes[thisObject.boxProperties.box_index][0].encuestas[0].variation
			iframe_id = 'esmas_safe_simplepoll_iframe_' + esmas_safe_boxattributes[thisObject.boxProperties.box_index][0].box_guid.toString();
			//pollguid = esmas_safe_boxattributes[thisObject.boxProperties.box_index][0].encuestas[0].enc_guid;
			for (cont = 0; cont < esmas_safe_boxattributes.length; cont++){
				if (esmas_safe_boxattributes[cont][0].box_id == this.boxProperties.box_key)
					pollguid = esmas_safe_boxattributes[cont][0].encuestas[0].enc_guid;
			}
			var casilla = this.boxProperties.box_key;
			parentBoxesArray[esmas_safe_boxattributes[thisObject.boxProperties.box_index][0].encuestas[0].enc_guid] = iframe_id;
			switch(typeobj){
				case 'simple':
					iframe_src = ambiente['desarrollo']+'/esmassafeiframe/type/'+typeNt+'/host/'+window.location.host+'/pollguid/' +pollguid+'/variant/none/casilla/'+casilla;
					break;
				case 'versuswg':
					iframe_src = ambiente['desarrollo']+'/generaformversuswg/pollguid/'+pollguid+'/i/0/type/wg/host/'+window.location.host;
					break;
				case 'versuswg3':
					iframe_src = ambiente['desarrollo']+'/generaformversuswg/pollguid/'+pollguid+'/i/0/type/wg3/host/'+window.location.host;
					break;
				case 'video_encuesta_multiple': case 'video': case 'video_encuesta_simple':
					iframe_src = ambiente['desarrollo']+'/videoencuestawg/pollguid/'+pollguid+'/host/'+window.location.host+'/casilla/'+casilla;
					//console.log(iframe_src)
					break;
			}
			
			var box_continer = thisObject.get_object('esmas_safe_simple_poll_box_' + thisObject.boxProperties.box_key); 

			if(typeobj != 'versuswg'){
				box_continer.innerHTML = '<iframe id="' + iframe_id + '" allowtransparency="true" frameborder="0" scrolling="no" src="' + iframe_src + '" style="height:'+pollHeight+'px;"></iframe><div id="safe_poll_socialmedia_'+pollguid+'" class="safe_poll_socialmedia" ></div>'; 
			}else{
				box_continer.innerHTML = '<iframe id="' + iframe_id + '" allowtransparency="true" frameborder="0" scrolling="no" src="' + iframe_src + '" style="height:450px;"></iframe><div id="safe_poll_socialmedia_'+pollguid+'" class="safe_poll_socialmedia" ></div>';
			}

		} else {
			//thisObject.get_object(thisObject.boxProperties.box_full_id).innerHTML = 'Check Poll (' + esmas_safe_boxattributes[thisObject.boxProperties.box_index][0].encuestas[0].enc_id.toString() + ') Status!';
			thisObject.get_object(thisObject.boxProperties.box_full_id).style.backgroundImage = 'url(http://i2.esmas.com/encuestas/public/img/frontend/background_polls.jpg)'; 
			thisObject.get_object(thisObject.boxProperties.box_full_id).style.width = '300px';
			thisObject.get_object(thisObject.boxProperties.box_full_id).style.height = '400px'; 
			
		}
	};
	// Carga de datos Din�mica y de Encuesta dentro del Box
	this.loadAttributes = function() { 
		//this.loadjscssfile('http://encuestas.esmas.com.mx/resources/json/frontend/attributes/esmas_safe_boxattributes_' + this.boxProperties.box_key + '.js', 'js');
		
		this.loadjscssfile('http://pollsdynamic.esmas.com/resources/json/frontend/attributes/esmas_safe_boxattributes_' + this.boxProperties.box_key + '.js', 'js');
		this.waitForLoad();        
	};
	// Espera a la carga de del JS
	this.waitForLoad = function() {
		var arrRuta = new Array();
		arrRuta = location.href.split("type/");
		//casos de typos de casillas
		if ( arrRuta.length == 2 ){
			var typeNt = arrRuta[1].substr(0,2);
		} else { // caso default
			var typeNt = 'wg';
		}
		//console.log(esmas_safe_boxattributes)
		//alert('typeNt: ' + typeNt);
		
		thisObject = this;
		thisObject.tries = 0;
		thisObject.timerId = setInterval(
		function()
		{
			new function(){
				if (thisObject.tries >= 60){
					clearInterval(thisObject.timerId);
					//thisObject.get_object(thisObject.boxProperties.box_full_id).innerHTML = 'Poll Properties Not Found!';
					thisObject.get_object(thisObject.boxProperties.box_full_id).style.backgroundImage = 'url(http://i2.esmas.com/encuestas/public/img/frontend/background_polls.jpg)'; 
					thisObject.get_object(thisObject.boxProperties.box_full_id).style.width = '300px';
					thisObject.get_object(thisObject.boxProperties.box_full_id).style.height = '400px'; 
				}
				
				if (esmas_safe_boxattributes[thisObject.boxProperties.box_index] != undefined) {
					clearInterval(thisObject.timerId);						
					if ( esmas_safe_boxattributes[thisObject.boxProperties.box_index][0].box_status.toString() == '1' ){
						var css_url = '';
						
						switch(typeNt){
							case "wg":
								css_url = esmas_safe_boxattributes[thisObject.boxProperties.box_index][0].box_css.toString();
							break;
							case "nt":
								css_url = esmas_safe_boxattributes[thisObject.boxProperties.box_index][0].box_css_nt.toString();
							break;
						}
						
						//alert('css_url: ' + css_url);
						
						//esta se quitar�a en un futuro
						
						thisObject.loadjscssfile(css_url, 'css');
						
						thisObject.makeiFrame(); 
					}
				}				
				thisObject.tries++;
			}
		}, 250);
	}
}
//Obtiene todos los objetos mediante la clase especificada
document.getElementsByClassName = function(clsName){
	var retVal = new Array();
	var elements = document.getElementsByTagName('*');
	for(var i = 0;i < elements.length;i++){
		if(elements[i].className.indexOf(' ') >= 0){
			var classes = elements[i].className.split(' ');
			for(var j = 0;j < classes.length;j++){
				if(classes[j] == clsName)
				retVal.push(elements[i]);
			}
		}
		else if(elements[i].className == clsName)
		retVal.push(elements[i]);
	}
	return retVal;
}

var esmas_safe_boxattributes = []; 
var esmas_safe_box_objects = []; 
//hash para encontrar los iframes y resizearlos desde el Parent
var parentBoxesArray = new Array();

//Se obtienen todos los Boxes de la P�gina
var myBoxesArray = new Array();
myBoxesArray = document.getElementsByClassName('esmas_safe_simple_poll_box');

//Se obtiene la encuesta que le corresponde a cada Box y se le inserta
//alert(myBoxesArray.length)
for(i=0;i<myBoxesArray.length;i++){
	poll_box_id = myBoxesArray[i].id; 
	poll_box_key = poll_box_id.substring(27,poll_box_id.length);
	
	//alert('poll_box_key: ');
	
	esmas_safe_box_objects[i] = new boxLoaderClass({box_index: i, box_full_id: poll_box_id, box_key: poll_box_key });
	esmas_safe_box_objects[i].loadAttributes();
}

function updateIFrame(height,guid) { 
    if(guid != 'esmas_safe_simplepoll_iframe_xx'){
	   var iframe = document.getElementById(parentBoxesArray[guid]); 
    }else{ 
        var iframe = document.getElementById('esmas_safe_simplepoll_iframe_xx'); 
    }
	iframe.setAttribute( 'height', height );
	iframe.style.height = height + 'px'; 
}