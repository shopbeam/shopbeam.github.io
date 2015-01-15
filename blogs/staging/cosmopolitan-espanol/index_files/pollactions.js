// v. 2013.junio.21 16:25
var global_data = '';
var seriedata = new Array();
//alert('action')
var g_data = {
	items:new Array(),
	get:function(key){
		var index=-1;
		for(var i=0;i<this.items.length;i++)if(this.items[i][0]==key){
			index=i;
			break;
		}
		if(index==-1)return false;
		else return this.items[index][1];
	},
	set:function(key,value){
		var index = -1;
		for(var i=0;i<this.items.length;i++)if(this.items[i][0]==key){
				index=i;
				break;
		}
		if(index==-1)this.items.push(new Array(key,value));
		else this.items[index][1] = value;
	}
}
var g_data_pointer = new Array();
var safeSimplePoll = new Class({ 
    Implements: Options,
	options: {
		poll_index : 0, 
		xmlString: '',
		simplePollGuid : '',
		chartSwfFile : '',
		chartWidth : '250',
		chartHeight : '250', 
		chartTitle : '',
		validationText : '&iexcl;Elige una opci&oacute;n!', 
		thanksText : 'Gracias por Votar', 
		valuesArray : new Array(),
		groupFieldGuid : '', 
		groupFieldsGuids : '',
		sectionGuid : '', 
		dataString : '',
		indice: '', 
		indices: new Array(),
		fieldType : '',
		chartType : 'NewPie',
		pieRadius : '65',
		bgChart : 'CCCCCC',
		pathGenerate : '', 
		webname : 'ejemplo-nota-terminal',
		typeDisplay : '',
		seriesArray: new Array(),
		is_multivote: '0',
		captcha : '0',
		host: '',
		icon: '',
		dc_seg: ''
	},
	flashObject : null, 
	nameRadioField : '', 
	myTimer : null, 
	guidGoField : '', 
	guidSection : '', 
	answerContainer : '', 
	thanksObject : '',
	cookiefound : false,
	newData : '',
	cadenaCookieMField: '',
	dc_iu: '',
	px_seg_dom: '',
	
	
	initialize: function(options){
	   //alert('typeDisplay');
		this.setOptions(options);
		//this.options.typeDisplay = '';
		//alert(this.options.captcha);
        	
		if (this.options.chartType != 'NewPie' || this.options.chartType != 'Versus'){		
			if (this.options.simplePollGuid == '0bc5cd46-0007-102d-b31a-0025b3a6e69c')
				this.options.chartTitle = 'Â¿Ves a MÃ©xico en la segunda fase del Mundial?';
			this.setChartTitle(this.options.chartTitle,true);
			this.addDataValues(this.options.valuesArray,true);		
			this.validateCookie('esmas_safe_simplepoll_'+this.options.simplePollGuid);
		}
		else{
			if(this.options.chartType != 'Versus' ){
				this.validateCookie('esmas_safe_simplepoll_'+this.options.simplePollGuid);
			}
		} 
        //6e1584ba-4a2e-102e-835b-0019b9d72c08  MATTEL
        var myCookie = Cookie.read('esmas_safe_simplepoll_6e1584ba-4a2e-102e-835b-0019b9d72c08');
        if(myCookie){    
            this.createCookie('esmas_safe_simplepoll_'+this.options.simplePollGuid, this.options.simplePollGuid  + '@@@' + this.cadenaCookieMField, .5);
        }        		
	},
	
	validateCookie: function(cookieName){
		
		if (this.readCookie(cookieName) != null){
			this.cookiefound = true;
			this.indice = this.readCookie('esmas_safe_simplepoll_' + this.options.simplePollGuid).split('@@@')[1];
			var fguidval = this.indice.split("@ind@");
			for(var i = 0; i < fguidval.length ; i++){				
				var arrval = fguidval[i].split("@fguid@");	
				if(arrval[0] != ""){
					this.options.indices[this.options.indices.length] = new Array(arrval[0], arrval[1]);					
				}
			}
			//console.log("al validar cookie el arreglo es:" + this.options.indices);
            
		}
	},
	
	generateLocalGuid : function(myObject, myNewGuid, override_warnings){ 
		if (myNewGuid != '' && myNewGuid != null && myNewGuid != undefined){
			if (myObject == '' || myObject == null || myObject == undefined){
				myObject = myNewGuid;
			} else if ( !override_warnings ){ alert('safeSimplePoll.generateLocalGuid.' + myObject + ': guid Allready Exists'); } 
		} else if ( !override_warnings ){ alert('safeSimplePoll.generateLocalGuid.' + myObject + ': Missing Parameter'); } 
	}, 
	
	
	declareSwfObject : function(override_warnings){
		if ( this.options.chartSwfName != '' && this.options.simplePollGuid != '' && !this.flashObject ){
			this.flashObject = new SWFObject(this.options.chartSwfFile, 'safeChart_' + this.options.simplePollGuid, this.options.chartWidth, this.options.chartHeight, 5, "#ffffff"); 
			this.flashObject.addParam("wmode", "transparent");		
		} else if ( this.flashObject == null && !override_warnings ) { alert('safeSimplePoll.declareSwfObject: Missing Parameters'); }
	}, 
	
	declareNewSwfObject : function(){

			var params = {};
			params.wmode = "transparent"; 			
			//("open-flash-chart.swf", "esmas_safe_chart_container_" + this.options.simplePollGuid, "300", "160", "9.0.0","expressInstall.swf", params);
			
	}, 
	
	setChartTitle : function(newTitle,override_warnings){
		if ( newTitle != null && newTitle != undefined){
			this.options.chartTitle = newTitle;
			
			if(this.options.chartType == "NewPie"){				
				this.options.xmlString = global_data;/*"xml_string=<graph>" 
				+ "<general_settings bg_color='ffffff' bagel='0' animation='1' />" 
				+ "<header text='" + this.options.chartTitle  + "' font='Verdana' color='FFFFFF' size='8' />" 
				+ "<subheader text='' font='Arial' color='FFFFFF' size='0' />" 
				+ "<legend show='0' font='Arial Black' font_color='FFFFFF' font_size='12' bgcolor='FFFFE3' alternate_bg_color='00FFFF' border_color='000000' />" 
				+ "<legend_popup font='Verdana' bgcolor='FFFFE3' font_size='10' />" 
				+ "<pie_chart radius='" + this.options.pieRadius + "' alpha='100'/>";*/
				
			
				
				this.options.chartSwfFile = this.options.pathGenerate + "swf/open-flash-chart.swf";
			}			
			
			
			if(this.options.chartType == "FlashPie"){				
				this.options.xmlString = "xml_string=<graph>" 
				+ "<general_settings bg_color='ffffff' bagel='0' animation='1' />" 
				+ "<header text='" + this.options.chartTitle  + "' font='Verdana' color='FFFFFF' size='8' />" 
				+ "<subheader text='' font='Arial' color='FFFFFF' size='0' />" 
				+ "<legend show='0' font='Arial Black' font_color='FFFFFF' font_size='12' bgcolor='FFFFE3' alternate_bg_color='00FFFF' border_color='000000' />" 
				+ "<legend_popup font='Verdana' bgcolor='FFFFE3' font_size='10' />" 
				+ "<pie_chart radius='" + this.options.pieRadius + "' alpha='100'/>";
				this.options.chartSwfFile = this.options.pathGenerate + "swf/fcp-pie-2d-charts.swf";
			}
			
			if(this.options.chartType == "horizontalFlashBar"){				
				this.options.xmlString = global_data;
				/*"xml_string=<graph> " +
				 "<general_settings bg_color='FFF8F0' type_graph='h' /> "+
				 " <header text='Decline' font='Verdana' color='000000' size='18' /> "+
				 " <subheader text='From' font='Verdana' color='595959' size='0' /> "+
				 " <legend font='Verdana' color='000000' font_size='11' /> "+
				 " <legend_popup font='Verdana' bgcolor='FFFFE3' font_size='10' />"+ 
				 " <Xheaders rotate='0' color='000000' size='10' title='Points' title_color='000000' />"+ 
				 " <Yheaders color='000000' size='10' title='Countries' title_rotate='90' title_color='000000' /> "+
				 " <grid grid_width='50' grid_height='50' grid_color='EDEDED' grid_alpha='50' grid_thickness='1' bg_color='ffffff' bg_alpha='70' alternate_bg_color='FFFFFE' border_color='000000' border_thickness='1' />"+ 
				 " <bars view_value='1' width='22' space='0.5' alpha='100' view_double_bar='1' color_double_bar='666666' pieces_grow_bar='0' />";
				//this.options.chartSwfFile = this.options.pathGenerate + "swf/fcp-bars2d-charts.swf";*/
				this.options.chartSwfFile = this.options.pathGenerate + "swf/open-flash-chart.swf";
			}			
			
			//this.options.xmlString = this.options.xmlString.replace('&header_text', this.options.chartTitle);
			
			
			
		} else if ( !override_warnings ){ alert('safeSimplePoll.setChartTitle: Invalid Parameter'); }
	}, 
	
	addDataValues : function(newArray,override_warnings){
		if (newArray != null && newArray != undefined){
			if (this.isArray(newArray)){
				if (newArray.length > 0){
					this.options.valuesArray = newArray;
					this.options.xmlString = this.options.xmlString.replace('</graph>', '');
					for (i = 0; i <= this.options.valuesArray.length-1; ++i){
						tmp_sliced = 0;
						if (this.arrayMaxPosition(this.options.valuesArray, 0) == i) 
							tmp_sliced = 10; 
						var promedio = 0;
						
						
						var slidedDistace = "";
						
						slidedDistace = ' distance_sliced=\'' + tmp_sliced + '\'';
						
						
						tmp_item = "<data name='" + this.options.valuesArray[i][1] + "' value='&value_" + this.Right(("00" + i.toString()),2) + "' color='" + this.options.valuesArray[i][2] + "' "+ slidedDistace +" />";
						
						this.options.xmlString += tmp_item;
					}
					this.options.xmlString += '</graph>';
				} else if ( !override_warnings  ){ alert('safeSimplePoll.addDataValues: No Values'); }
			} else if ( !override_warnings  ){ alert('safeSimplePoll.addDataValues: Wrong Data Type'); }
		} else if ( !override_warnings  ){ alert('safeSimplePoll.addDataValues: No Data'); }
	}, 
		
		
		
		
	writeSwfChart : function(newSimplePollGuid, newXml, override_warnings){ 
		
		if ( newSimplePollGuid != '' && newXml != undefined && newXml != null ){
			this.options.xmlString = newXml;
			this.options.simplePollGuid = newSimplePollGuid; 
			//Enviamos al Flash el nuevo XML y lo insertamos en el HTML 		
			
			//new_string = "xml_string=<graph><general_settings bg_color='FFF8F0' type_graph='h' /><header text='Decline in Net Interest Margins of Asian Banks' font='Verdana' color='000000' size='18' /><subheader text='From For period 1995-2001, in Percentage %' font='Verdana' color='595959' size='12' /><legend font='Verdana' color='000000' font_size='11' /><legend_popup font='Verdana' bgcolor='FFFFE3' font_size='10' /><Xheaders rotate='0' color='000000' size='10' title='Points' title_color='000000' /><Yheaders color='000000' size='10' title='Countries' title_rotate='90' title_color='000000' /><grid grid_width='500' grid_height='250' grid_color='EDEDED' grid_alpha='100' grid_thickness='1' bg_color='ffffff' bg_alpha='70' alternate_bg_color='FFFFFE' border_color='000000' border_thickness='1' /><bars view_value='1' width='22' space='0.5' alpha='70' view_double_bar='1' color_double_bar='666666' pieces_grow_bar='0' /><data name='Singapore' value='-0.52' color='B6D90D' /><data name='India' value='0.2' color='D90D56' /><data name='Thailand' value='-1.6' color='0BB13A' /><data name='Malaysia' value='2.2' color='F66E0F' /><data name='Taiwan' value='-0.3' color='0B63B0' /><data name='Hong Kong' value='0.5' color='F6BD0F' /><data name='Philippines' value='1.4' color='470AA3' /></graph>";
			
			/*if (this.options.chartType != 'NewPie'){
				this.flashObject.addParam("flashvars", this.options.xmlString);				
				this.flashObject.write("esmas_safe_chart_container_" + this.options.simplePollGuid );			
			}else {	*/	
							
			var params = {}; 
			params.wmode = "transparent"; 	
					
			var newJsonValueString = '';
			var newJsonLabelString = '';
			var sumaValues = new Array();
			var arrGuidsFlds = new Array();
			//arrGuidFlds.clean();
			arrGuidsFlds["guid"] = new Array();			
						
			arrGuidFlds = this.options.groupFieldsGuids.split("|||");		
			if(this.options.fieldType == "RadioButtonList"){
				for(var i = 0; i < this.options.valuesArray.length ; i++){					
					if(this.options.indices[this.options.groupFieldGuid] == i ){//sumaValues[arrGuidFlds[gf]] += parseInt(this.options.valuesArray[i][6]);
						valueVote = ((this.options.valuesArray[i][0])) + parseInt(this.options.valuesArray[i][6]);
					}else {
						valueVote = ((this.options.valuesArray[i][0]));
					}					
					/*newJsonValueString += '{';
					newJsonValueString += '"right": '+ valueVote;
					if(i < this.options.valuesArray.length - 1){
						newJsonValueString += '},';
					}else {newJsonValueString += '}';}
					
					//newJsonLabelString += '{';
					newJsonLabelString += '"'+ this.options.valuesArray[i][1] + '"';
					if(i < this.options.valuesArray.length - 1){
						newJsonLabelString += ',';
					}/*else {newJsonLabelString += '}';}	*/		

					newJsonValueString += '{';
					newJsonValueString += '"value" : '+ valueVote + ',';
					newJsonValueString += '"label" : "'+ this.options.valuesArray[i][1] + '   ' + this.options.valuesArray[i][4] + ' %"';				
					//newJsonValueString += '}';				
					if(i < this.options.valuesArray.length - 1){
						newJsonValueString += '},';
					}else {newJsonValueString += '}';}	
			
					
				}
								
			}if(this.options.fieldType == "RadioButtonArray"){
				
				
				/*for(var gf = 0; gf < arrGuidFlds.length ; gf++){
					if(arrGuidFlds[gf] != ""){
						var datos = document.getElementsByName("esmas_safe_input_group_" + arrGuidFlds[gf]);						
						for(var i = 0; i < this.options.valuesArray.length ; i++){
							//console.log("fieldvalue "+ i +" con el conteo "+ this.options.valuesArray[i][0]);
							if(arrGuidFlds[gf] == this.options.valuesArray[i][5]){//se realiza la sumatoria por cada guidfld								
								sumaValues[sumaValues.length] = new Array(arrGuidFlds[gf], this.options.valuesArray[i][0]);								
							}
						}
						for(i=0;i<sumaValues.length;i++){
							if( this.options.indices[i][0] == arrGuidFlds[gf] ){alert("coincide el guid de indices: "+ this.options.indices[i][0] + " con el guid de cadena(|||) "+ arrGuidFlds[gf]);
								alert("sumaValues[arrGuidFlds[gf]] vale " + i);
								// if(isNaN(sumaValues[i][1])){
									// sumaValues[i][1]= 0;
								// }
								sumaValues[i][1] += parseInt(this.options.valuesArray[i][6]);
								console.log("al incrementar el voto: " + sumaValues[i][1]);
							}
						}
						//console.log("el conteo es: "+ parseInt(sumaValues[arrGuidFlds[gf]]));
						
						newJsonValueString += '{';
						newJsonValueString += '"value" : '+ sumaValues[arrGuidFlds[gf]] +',';					
						newJsonValueString += '"label" : "video '+ (gf + 1) + '"';				
						
						if(gf < arrGuidFlds.length - 2 ){
							newJsonValueString += '},';
						} else {
							newJsonValueString += '}';
						}
					}
				}*/
			}
			
			
			
			var global_data = g_data.get(this.options.simplePollGuid);			
			global_data = global_data.replace("#labels#", newJsonLabelString);
			global_data = global_data.replace("#values#", newJsonValueString);
			g_data.set(this.options.simplePollGuid, global_data);
			
			
			
			
			
			
			//console.log("global_data: " + global_data);
			
			
			
						
			g_data_pointer.push(this.options.simplePollGuid);
			//swfobject.embedSWF(this.options.pathGenerate + "swf/open-flash-chart.swf", "esmas_safe_chart_container_" + this.options.simplePollGuid, "270", "160", "9.0.0");
			swfobject.embedSWF(this.options.pathGenerate + "resources/swf/open-flash-chart.swf", "esmas_safe_chart_container_" + this.options.simplePollGuid, this.options.chartWidth, this.options.chartHeight, "9.0.0");			
			//SWFObject.setAttribute("type","application/x-shockwave-flash");
			//(global_data);
			/*}*/
		} else if (!override_warnings){
			alert('safeSimplePoll.writeSwfChart: Missing Parameters or Wrong Data Type'); 
		}
	}, 
	
	setEvents : function(){
	
		
		if(this.options.groupFieldGuid != '' && this.options.groupFieldGuid != undefined && this.options.groupFieldGuid != null ){
			
			if ($('esmas_safe_poll_go_' + this.options.simplePollGuid)){			
				this.guidGoField = 'esmas_safe_poll_go_' + this.options.simplePollGuid;
				this.nameRadioField = 'esmas_safe_input_group_' + this.options.groupFieldGuid;
				this.guidSection = 'esmas_safe_sections_' + this.options.sectionGuid;
				this.answerContainer = 'esmas_safe_answer_container_' + this.options.simplePollGuid;
				this.thanksObject = 'esmas_safe_thanks_text_' + this.options.simplePollGuid;
				if(this.options.fieldType == "RadioButtonVideoList"){ // checa si es video simple
                    if ( document.location.href.indexOf('/type/nt') >= 0 ){
                        var tp = 'nt_'
                    }else{
                        var tp = 'wg_'
                    }
					if(this.cookiefound){ 
						
						this.voteAndShow(this.options.indices);	
						$$('.'+tp+'esmas_safe_answer_container').setStyle('display','none'); 
						$$('.'+tp+'esmas_safe_graph_container').setStyle('display','block'); 
						
						$(this.thanksObject).innerHTML = 'Gracias por Votar'; 
						$(this.guidGoField).style.display = 'none'; 
						
					
						
					}else{
					
					  	var all_my_radios = $$('.safe_video_option'); 
						for (var m = 0; m < all_my_radios.length; m++){
							var radios_row = all_my_radios[m].getElements('input');
							for (var o = 0; o < radios_row.length; o++){
									radios_row[o].addEvent('click', this.quitaComent.bind(this));
							}
						}
						
						$(this.guidGoField).addEvent('click', this.muestraResults.bind(this));
					}
					
				}
				
				
				
				
				if(this.options.fieldType == "RadioButtonArray"){
					
					if(this.cookiefound){
						
						this.voteAndShow(this.options.indices);	
						
						
						if ( document.location.href.indexOf('/type/nt') >= 0 ){
							$$('.nt_esmas_safe_answer_container').setStyle('display','none');
							$$('.nt_esmas_safe_graph_container').setStyle('display','block');
						} else {
							$$('.wg_esmas_safe_answer_container').setStyle('display','none');
							$$('.wg_esmas_safe_graph_container').setStyle('display','block');
						}
						
						$(this.guidGoField).style.display = 'none';
						
					}else{
						
					  	var all_my_radios = $$('.safe_video_option');
						for (var m = 0; m < all_my_radios.length; m++){
							var radios_row = all_my_radios[m].getElements('input');
							for (var o = 0; o < radios_row.length; o++){
									radios_row[o].addEvent('click', this.quitaComent.bind(this));
							}
						}
						
						$(this.guidGoField).addEvent('click', this.muestraResultsRadioArray.bind(this));
						
						
						var my_elements = new Array(); 
						
						//if ( document.location.href.indexOf('/type/nt') >= 0 )
						//	my_elements = $$('.nt_esmas_safe_radio_option');
						//else
						my_elements = $$('.esmas_safe_radio_option');
							
						actual_group = my_elements[0].getProperty('name');
						groups_length = 0;
						
						my_elements.each(function(item, index){
							if ( item.getProperty('name') == actual_group ){
								groups_length++;
							} 
						});
						
						groups_qtty = eval(my_elements.length/groups_length);

						var multiDimensionRadioArray = new Array();
						

						for (var i = 0; i < groups_qtty; i++){
							var myGroupOfRadios = new Array();
							for (var r = 0; r < groups_length; r++){
								myGroupOfRadios[r] = my_elements[eval((i*groups_length)+r)];
							}
							multiDimensionRadioArray.push(myGroupOfRadios);
						}
						
						
						for (var i = 0; i < multiDimensionRadioArray.length; i++){
							for (var r = 0; r < multiDimensionRadioArray[i].length; r++){
								$(multiDimensionRadioArray[i][r]).addEvent('click', function(){
																							 
									if ( this.checked ){
										var this_group = $$('input[name=' + this.getProperty('name') + ']');
										var this_group_selected_index;
										var this_poll_selected_row;
										for (var u = 0; u < this_group.length; u++){
											if( this_group[u].checked)
												this_group_selected_index = u;
										}
										var all_groups = $$('.video_points');
										for (var g = 0; g < all_groups.length; g++){
											var all_groups_items = all_groups[g].getElements('input');
											for (var c = 0; c < all_groups_items.length; c++){
												if ( all_groups_items[c].getProperty('id') == this.getProperty('id') ){
													this_poll_selected_row = g;
												}
											}
										}
										
										for (var u = 0; u < multiDimensionRadioArray.length; u++){
											if ( u ==  this_poll_selected_row ){
												multiDimensionRadioArray[u][this_group_selected_index].checked = true;
												//multiDimensionRadioArray[u][this_group_selected_index].disabled = false;
											} else {
												multiDimensionRadioArray[u][this_group_selected_index].checked = false;
												//multiDimensionRadioArray[u][this_group_selected_index].disabled = true;
											}
										}
									}
								}.bind(multiDimensionRadioArray[i][r]));
							}
						}		
						
					}
					
				}
			
/*--------->*/if(this.options.fieldType == "RadioButtonList"){	
				
					if(this.cookiefound){						
						
						//if ( document.location.href.indexOf('/type/nt') >= 0 )
							$('esmas_safe_section_container_' + this.options.sectionGuid).style.display = 'none';
						
						
						 //if ( document.location.href.indexOf('/type/nt') >= 0 )
								$(this.thanksObject).innerHTML = 'Gracias por votar';
								
								
						 if ( document.location.href.indexOf('/type/wg') >= 0 ){
								//if ( this.options.simplePollGuid != 'f7d1f192-7780-102d-8011-0019b9d72c08' && this.options.simplePollGuid != '8c24d8b6-8e45-102d-8011-0019b9d72c08' ) { 
									
									
									if ( this.options.chartWidth != '260' && this.options.chartHeight != '100' && this.options.bgChart != '000000' ){ 
											$(this.thanksObject).innerHTML = this.options.thanksText;
									} else {
										$(this.thanksObject).innerHTML = 'Gracias por votar';
									}
									
								//} else {
								//	$(this.thanksObject).innerHTML = 'Gracias por votar';
								//}
						 	}


						
						$(this.guidGoField).style.display = 'none';
						this.voteAndShow(this.options.indices);
					}else{
					  	$(this.answerContainer).getElements('input').addEvent('click', this.quitaComent.bind(this));
						
						$(this.guidGoField).addEvent('click', this.muestraResults.bind(this));
					}
				}
				
				/**********************************************************************************************/
				
				if(this.options.fieldType == "ImageButtonList"){
					if(this.cookiefound){						
						
						//if ( document.location.href.indexOf('/type/nt') >= 0 )
							$('esmas_safe_section_container_' + this.options.sectionGuid).style.display = 'none';
						
						
						 //if ( document.location.href.indexOf('/type/nt') >= 0 )
								$(this.thanksObject).innerHTML = 'Gracias por votar';
								
								
						 if ( document.location.href.indexOf('/type/wg') >= 0 ){
									
									if ( this.options.chartWidth != '260' && this.options.chartHeight != '100' && this.options.bgChart != '000000' ){ 
											$(this.thanksObject).innerHTML = this.options.thanksText;
									} else {
										$(this.thanksObject).innerHTML = 'Gracias por votar';
									}
									
						 	}
					
						$(this.guidGoField).style.display = 'none';
						this.voteAndShow(this.options.indices);
					}else{
					  	$(this.answerContainer).getElements('input').addEvent('click', this.quitaComent.bind(this));
						
						$(this.guidGoField).addEvent('click', this.muestraResults.bind(this));
					}
				}
				
				if(this.options.fieldType == "Select"){
					if (this.cookiefound){
						this.voteAndShow(this.indice);
						$('esmas_safe_section_container_' + this.options.sectionGuid).style.display = 'none';
						$(this.guidGoField).style.display = 'none';
					}else{						
					  	$(this.answerContainer).getElements('input').addEvent('click', this.quitaComent.bind(this));				  	
						$(this.guidGoField).addEvent('click', this.muestraResultsSelect.bind(this));
					}
				}				
			} else { alert('safeSimplePoll.setEvents: Field "' + this.options.groupFieldGuid + '" Not Found'); }
		} else { alert('safeSimplePoll.setEvents: Missing Parameter<-'); } 
		
		/******************* evento aqui **************************/
		if (this.options.typeDisplay != '' && this.options.typeDisplay != undefined && this.options.typeDisplay != null) {
			if(this.options.typeDisplay == "Versus"){ 
				$("nextVersus").addEvent('click',this.nextVersus.bind(this))
				$("siguiente").addEvent('click',this.siguiente)
				$("terminar").addEvent('click',this.terminar.bind(this))
			}
		}		
	}, 
		
	
	muestraResultsImage : function(e,idx,voto){ 
		this.myTimer = this.quitaComent.bind(this).delay(5000);
		this.indice = idx;
		var indice = idx;
		if (indice < 0){
			$(this.thanksObject).innerHTML = this.options.validationText; 

		}else{
			$clear(this.myTimer);		 	
			//mandar cadena por post
			//var browsedet = new BrowserDetect();
			//BrowserDetect
			var javaEnabled = "";
			if (navigator.javaEnabled() < 1) javaEnabled ="No";
			if (navigator.javaEnabled() == 1) javaEnabled ="Yes";			

			var dataStringVotos = this.options.dataString = this.options.dataString + " Sitio@@@Programa@@@Categoria@@@Subcategoria@@@Token-@@@CSIE-@@@url@@@Sexo del usuario@@@IP-@@@Codigo del Pais@@@Cuidad@@@Estado@@@Unix Timestamp-@@@" + BrowserDetect.browser + "@@@" + BrowserDetect.version +"@@@" + BrowserDetect.OS + "@@@" +  window.screen.width + " x " + window.screen.height + "@@@"+ javaEnabled +"@@@Previous Page Address@@@"+ navigator.systemLanguage + "@@@" +navigator.userLanguage + "@@@"+ navigator.browserLanguage;
			//$('cargaAJAX').load(this.options.pathGenerate + 'calcularesultado/arreglo/' + this.options.dataString + ' /voto/ '+ voto);			
			alert('3')
			var myImage = new Asset.image(this.options.pathGenerate + 'calcularesultado/arreglo/' + this.options.dataString + '/voto/'+ voto, {id: 'logImage', title: 'logImage'});

			$(this.guidGoField).style.display = 'none';	
			this.setAnimation(e, indice);
		}
		//cambiar valores de la cookie	
	},
	
	muestraResultsSelect : function(e){ 
		this.myTimer = this.quitaComent.bind(this).delay(5000);
		var indice = -1;
		var datos = document.getElementById(this.options.groupFieldGuid);		
		for(i=0;i<datos.length;i++){
			if(datos[i].selected){
				voto = datos[i].value;
				indice = parseInt(i) -1;
				this.indice = indice;
			}
		}
		if (indice < 0){
			$(this.thanksObject).innerHTML = this.options.validationText; 
			$(this.answerContainer).getElements('input').addEvent('click', this.quitaComent.bind(this));
			$(this.guidGoField).addEvent('click', this.muestraResults.bind(this));
		}else{
			$clear(this.myTimer);			
			//mandar cadena por post
			//var browsedet = new BrowserDetect();
			//BrowserDetect
			var javaEnabled = "";
			if (navigator.javaEnabled() < 1) javaEnabled ="No";
			if (navigator.javaEnabled() == 1) javaEnabled ="Yes";
			this.options.dataString = this.options.dataString + " Sitio@@@Programa@@@Categoria@@@Subcategoria@@@Token-@@@CSIE-@@@url@@@Sexo del usuario@@@IP-@@@Codigo del Pais@@@Cuidad@@@Estado@@@Unix Timestamp-@@@" + BrowserDetect.browser + "@@@" + BrowserDetect.version +"@@@" + BrowserDetect.OS + "@@@" +  window.screen.width + " x " + window.screen.height + "@@@"+ javaEnabled +"@@@Previous Page Address@@@"+ navigator.systemLanguage + "@@@" +navigator.userLanguage + "@@@"+ navigator.browserLanguage;
			//$('cargaAJAX').load(this.options.pathGenerate + 'calcularesultado/arreglo/' + this.options.dataString + ' /voto/ '+ voto);			
			//alert('2')
			var myImage = new Asset.image(this.options.pathGenerate + 'calcularesultado/arreglo/' + this.options.dataString + '/voto/'+ voto, {id: 'logImage', title: 'logImage'});
			$(this.guidGoField).style.display = 'none';	
			//this.voteAndShow(indice);
			this.setAnimation(e, indice);
		}		
		//cambiar valores de la cookie	
	},
	
	muestraResultsRadioArray : function(e){
	
		this.myTimer = this.quitaComent.bind(this).delay(5000);		
		var my_elements = new Array(); 
		my_elements = $$('.esmas_safe_radio_option');
		radios_selected_qtty = 0;
		
		my_elements.each(function(item, index){
			if ( item.checked ){
				radios_selected_qtty++;
			}
		});		
		
		var arrGuidFlds = new Array();
		arrGuidFlds = this.options.groupFieldsGuids.split("|||");
		var votos = "";
		
		if (radios_selected_qtty < arrGuidFlds.length-1){
			$(this.thanksObject).innerHTML = this.options.validationText;
		}else {
			$clear(this.myTimer);
			for(var gf = 0; gf < arrGuidFlds.length ; gf++){
				if(arrGuidFlds[gf] != ""){
					var datos = document.getElementsByName("esmas_safe_input_group_" + arrGuidFlds[gf]);
					for(i=0;i<datos.length;i++){
						if(datos[i].checked){
							votos += "[" + arrGuidFlds[gf] + "&&&" + datos[i].value + "]";
							//alert(votos);
							var voto = datos[i].value;
							//alert("antes de declarar" + this.options.indices.length);
							this.options.indices[this.options.indices.length] = new Array(arrGuidFlds[gf], voto);
							
							this.cadenaCookieMField += arrGuidFlds[gf]+"@fguid@"+voto+"@ind@";
							//alert(this.cadenaCookieMField);
							indice = i;
							this.indice = i;
						}
					}
				}
			}
			
			//console.log("la cadena para log es: " + votos);
			var javaEnabled = "";
			if (navigator.javaEnabled() < 1) javaEnabled ="No";
			if (navigator.javaEnabled() == 1) javaEnabled ="Yes";			

			this.options.dataString = this.options.dataString + " Sitio@@@Programa@@@Categoria@@@Subcategoria@@@Token-@@@CSIE-@@@url@@@Sexo del usuario@@@IP-@@@Codigo del Pais@@@Cuidad@@@Estado@@@Unix Timestamp-@@@" + BrowserDetect.browser + "@@@" + BrowserDetect.version +"@@@" + BrowserDetect.OS + "@@@" +  window.screen.width + " x " + window.screen.height + "@@@"+ javaEnabled +"@@@Previous Page Address@@@"+ navigator.systemLanguage + "@@@" +navigator.userLanguage + "@@@"+ navigator.browserLanguage;
			//$('cargaAJAX').load(this.options.pathGenerate + 'calcularesultado/arreglo/' + this.options.dataString + ' /voto/ '+ voto);			
			//alert('1')
			/*var myImage = new Asset.image(this.options.pathGenerate + 'calcularesultado/arreglo/' + this.options.dataString + '/voto/'+ votos, {id: 'logImage', title: 'logImage'});
			$(this.guidGoField).style.display = 'none';	
			this.setAnimation(e, this.options.indices);*/
            
            if(this.options.captcha != '1'){
			     this.sendVote(this.options.dataString,votos,0,e)
            }else{
                this.sendVote(this.options.dataString,votos,1,e)
            }
                        			
		}
	},
	
	
	
	muestraResults : function(e){ 
		this.myTimer = this.quitaComent.bind(this).delay(5000);
		var indice = -1;	
		var arrGuidFlds = new Array();
		arrGuidFlds = this.options.groupFieldsGuids.split("|||");
		var votos = "";		
		var voto = "";	
		for(var gf = 0; gf < arrGuidFlds.length ; gf++){
			if(arrGuidFlds[gf] != ""){
				var datos = document.getElementsByName("esmas_safe_input_group_" + arrGuidFlds[gf]);
				for(i=0;i<datos.length;i++){
					if(datos[i].checked){					
						votos += "[" + arrGuidFlds[gf] + "&&&" + datos[i].value + "]";	
						voto = datos[i].value;
						
						this.options.indices[this.options.indices.length] = new Array(arrGuidFlds[gf], voto);						
						this.cadenaCookieMField += arrGuidFlds[gf]+"@fguid@"+voto+"@ind@";
						
						indice = i;
						this.indice = i;
					}
				}				
			}
		}
		
		if (indice < 0){			
			$(this.thanksObject).innerHTML = this.options.validationText; 
		}else{
		  
            $clear(this.myTimer);
            var javaEnabled = "";
			if (navigator.javaEnabled() < 1) javaEnabled ="No";
			if (navigator.javaEnabled() == 1) javaEnabled ="Yes";
            this.options.dataString = this.options.dataString + " Sitio@@@Programa@@@Categoria@@@Subcategoria@@@Token-@@@CSIE-@@@url@@@Sexo del usuario@@@IP-@@@Codigo del Pais@@@Cuidad@@@Estado@@@Unix Timestamp-@@@" + BrowserDetect.browser + "@@@" + BrowserDetect.version +"@@@" + BrowserDetect.OS + "@@@" +  window.screen.width + " x " + window.screen.height + "@@@"+ javaEnabled +"@@@Previous Page Address@@@"+ navigator.systemLanguage + "@@@" +navigator.userLanguage + "@@@"+ navigator.browserLanguage;
		    if(this.options.captcha != '1'){
			     //var myImage = new Asset.image(this.options.pathGenerate + 'calcularesultado/arreglo/' + this.options.dataString + '/voto/'+ votos, {id: 'logImage', title: 'logImage'});
			     //this.setAnimation(e, this.options.indices);
                 this.sendVote(this.options.dataString,votos,0,e)
            }else{
                this.sendVote(this.options.dataString,votos,1,e)
            }
		}
	},
	
	nextVersus : function(){ //siguiente versus
		//alert('next')
		 var res = parent.siguientePos();
		 if(res == 0){
			document.getElementById('nextVersus').style.visibility = "hidden";
		 }else if(res == 2){
			new_html = ''		
			$("esmas_safe_conclusion_container_"+ this.options.simplePollGuid).innerHTML = "<h1>Â¡Gracias por jugar a Esmas Versus!</h1>";
			new_html +='<div id="esmas_safe_chart_container_'+this.options.simplePollGuid+'" class="wg_esmas_safe_chart_container">';
			new_html +='<div id="pollResult" >';
			new_html += '<div id="terminarseccion">';
			new_html +=    '<div id="opciones" style="margin-top:150px;">';
			new_html +=	'<fieldset>';
			new_html +=	 '<legend>Juega mÃ¡s Esmas Versus</legend>';
			new_html +=	  '<ul>';
			var x;
			for(x=0; x<this.options.seriesArray.length; x++){
				var idSerie = String(this.options.seriesArray[x][0]);
				var nombreSerie = this.options.seriesArray[x][1];
				var descriptionSerie = this.options.seriesArray[x][3];
				var rutathumb = this.options.seriesArray[x][4];
				var resESA = parent.evaluaSeriaActual(idSerie);
				if(resESA == 1){
					continue;
                    var myIdSerie = parent.evaluaSeriaActual(idSerie);
                    alert(myIdSerie);
				}

                new_html += '<li><a href="http://polls.esmas.com/safeversus/id/'+idSerie+'/versus/name" target="_top"><div class="divopcion">';
				new_html += '<img src="'+rutathumb+'" ></a>';
				new_html += '<div class="descripcionT"><a href="http://polls.esmas.com/safeversus/id/'+idSerie+'/versus/name" target="_top"><h2>'+nombreSerie+'</h2><h3>'+descriptionSerie+'</h3></div>';
				new_html += '</a></div></li>';
				if(x==6){
					break;
				}
			}
		
			new_html +=	  '</ul>';
			new_html +=	'</fieldset>';
			new_html +=    '</div>';
		
			new_html += '</div>';
			new_html +='</div>';				
			new_html +='</div>';
			//alert(new_html)	;			
			$("esmas_safe_graph_container_" + this.options.simplePollGuid).innerHTML = new_html;
			$("resultado" ).innerHTML = '';
			$('resultado').setStyle('display', 'block');
			$$('.wg_esmas_safe_simple_poll_section').setStyle('display','none');
			$('votar').setStyle('display','none');
		}
	},
	 
	siguiente : function(){ // para el voton de siguiente
		var res = parent.siguientePos();
		if(res == 0){
			//alert('oculatar');
			/*var oculto = new Fx.Slide('nextVersus');
			oculto.hide();*/
			document.getElementById('siguiente').style.visibility = "hidden";
			//$("nextVersus").fade('out');
		 }
	},
	
	terminar : function(){ 
		var versusArr = '';
		//$('share').style.display = "block";
		new_html = ''		
		$("esmas_safe_conclusion_container_"+ this.options.simplePollGuid).innerHTML = "<h1>Â¡Gracias por jugar a Esmas Versus!</h1>"
		
		new_html +='<div id="esmas_safe_chart_container_'+this.options.simplePollGuid+'" class="wg_esmas_safe_chart_container">';
		new_html +='<div id="pollResult" style="margin-top:308px" >';
		new_html += '<div id="terminarseccion">';	
		new_html +=    '<div id="opciones" style="margin-top:0px !important;">';
		new_html +=	'<fieldset style="height:120px">';  
		new_html +=	 '<legend>Juega mÃ¡s Esmas Versus</legend>';
		new_html +=	  '<ul>';
		var x;
        //alert(this.options.seriesArray[1].length)
		for(x=0; x<this.options.seriesArray.length; x++){
		  //alert(x)
			var idSerie = String(this.options.seriesArray[x][0]);
			var nombreSerie = this.options.seriesArray[x][1];
			var descriptionSerie = this.options.seriesArray[x][3];
			var rutathumb = this.options.seriesArray[x][4];
			var resESA = parent.evaluaSeriaActual(idSerie); 
            //console.log(idSerie+" res"+resESA)
			if(resESA == 1){	          
                var jsonRequest = new Request.JSON({
                    url: 'http://encuestas.esmas.com.mx/resources/json/frontend/series/serie_'+idSerie+'.json', 
                    //url: 'http://polls.esmas.com/resources/json/frontend/series/serie_'+idSerie+'.json',
                    async : false,
                    onSuccess: function(person){ 
						//alert(person)
                        versusArr = person                        
                    }}).get(); //lo del get no sirve pero es necesario poner algo para la funcion
                    
				continue;
			}
            var guidVersus = new Array();
            var datavs = new Object();
            
           
			if(x<=2){
			new_html += '<li><div class="divopcion"><a href="http://polls.esmas.com/safeversus/id/'+idSerie+'/versus/name" target="_top">';
				    new_html += '<img src="'+rutathumb+'" ></a>';
				    new_html += '<div class="descripcionT"><a href="http://polls.esmas.com/safeversus/id/'+idSerie+'/versus/name" target="_top"><h2>'+nombreSerie+'</h2><h3>'+descriptionSerie+'</h3></div>';
				    new_html += '</a></div></li>';
				    if(x==6){
					    break;
				    }
			}
		}
		 for(var i in versusArr){ 
                if(i != 'css' && i != 'dominio' && i != 'recent'){ 
                    var medalLeft = '';
                    var medalRight = '';
		    //var datavs = new Object();
                    datavs[i] = new Object();
                    datavs[i]['left'] = new Object();
                    datavs[i]['right'] = new Object();
                    versus = dataResult(versusArr[i].guid_spl)
                    vote = voteForvspop(versusArr[i].guid_spl)
                    //console.log(vote+" -> "+versus[0].guid_fvl)
                    if(vote == versus[0].guid_fvl){
                        var countLeft = 1 + parseInt(versus[0].conteo);
                        var countRight = parseInt(versus[1].conteo);
                    }else{
                        var countLeft = parseInt(versus[0].conteo);
                        var countRight = 1+parseInt(versus[1].conteo);
                    }
                                    
                    var totalVotes = countLeft + countRight;
                    datavs[i]['left'].label = versus[0].ValueLabel
                    datavs[i]['right'].label = versus[1].ValueLabel
                    datavs[i]['left'].conteo = ((countLeft*100)/totalVotes)
                    datavs[i]['right'].conteo = ((countRight*100)/totalVotes)
                    datavs[i]['left'].img = versus[0].icon
                    datavs[i]['right'].img = versus[1].icon
                    //datavs.label = versus[1].ValueLabel
                }
            }
		new_html +=	  '</ul>';
		new_html +=	'</fieldset>';
		new_html +=    '</div>';
		
		new_html += '</div>';
		new_html +='</div>';				
		new_html +='</div>';
        
        new_html += '<div id="result" style="margin-left:0px; z-index:500; overflow-y: auto; height:270px; position: relative; top:-430px; margin-right:10px">';
        new_html += '<ul>';
        for(var versus in datavs){
            if(datavs[versus]['left']['conteo'] > datavs[versus]['right']['conteo']){  
                medalLeft = '<img src="http://i2.esmas.com/encuestas/public/img/frontend/sources/vspop/medal.png" width="20" >';
                medalRight = '';
            }else if(datavs[versus]['left']['conteo'] < datavs[versus]['right']['conteo']){  
                medalLeft = '';
                medalRight = '<img src="http://i2.esmas.com/encuestas/public/img/frontend/sources/vspop/medal.png" width="20" >';
            }else{
                medalLeft = '';
                medalRight = '';
            }
            new_html += '<li style="display:block; width:300px;">';
                //new_html += '<div>';
                    new_html += '<ul>';
                        new_html += '<li style="height:85px; width:500px">'; //1
                            new_html += '<div style="position:relative; top:40px; left:37px; z-index:100">';
                                new_html += '<img src="http://polls.esmas.com/resources/img/frontend/50c37f16-26ac-102e-aa0d-0019b9d72c08/vs.png" width="25">';
                            new_html += '</div>'; 
                
                            new_html += '<div style="float:left; margin-right:5px">';
                                new_html += '<img src="'+datavs[versus]['left']['img']+'" width="50">';
                            new_html += '</div>';
                            new_html += '<div style="float:left">';
                                new_html += '<img src="'+datavs[versus]['right']['img']+'" width="50">';
                            new_html += '</div>';
                            new_html += '<div style="float:left; margin-left:15px; margin-top:5px; margin-bottom: 5px; font-weight: bold; font-size: 17px;">';
                                new_html += '<div>';
                                    new_html += datavs[versus]['left']['label'];  
                                    new_html += '<span> '+datavs[versus]['left']['conteo'].toFixed(1)+'% </span>'+medalLeft;
                                new_html += '</div>';
                                new_html += '<div>';
                                    new_html += datavs[versus]['right']['label'];
                                    new_html += '<span> '+datavs[versus]['right']['conteo'].toFixed(1)+'% </span>'+medalRight;
                                new_html += '</div>';
                            new_html += '</div>';               
                
                        new_html += '</li>';//1
                    new_html += '</ul>';
            //new_html += '</div>';
        new_html += '</li>';
        }

        new_html += '</ul>';
        new_html += '</div>';
		//alert(new_html)					
		$("esmas_safe_graph_container_" + this.options.simplePollGuid).innerHTML = new_html;
		$("resultado" ).innerHTML = '';
		//$("esmas_safe_graph_container_" + this.options.simplePollGuid).fade('in')
	},
	
	setAnimation : function(e, indices){		
		if ( this.options.fieldType == 'RadioButtonArray' || this.options.fieldType == 'RadioButtonVideoList' ) {					
		
			my_name = '';
		
			if (document.location.href.indexOf('/type/nt') >= 0)
				my_name = 'nt';
			else
				my_name = 'wg';
		
	
			$$('.' + my_name + '_esmas_safe_answer_container ').set('tween', {
				link: 'mychain', 
				onComplete: function(e){

						$(this.thanksObject).innerHTML = this.options.thanksText;						

                        if( this.options.is_multivote == 0){
						  this.createCookie('esmas_safe_simplepoll_'+this.options.simplePollGuid, this.options.simplePollGuid  + '@@@' + this.cadenaCookieMField, 1000000);
					   }else{
					       this.createCookie('esmas_safe_simplepoll_'+this.options.simplePollGuid, this.options.simplePollGuid  + '@@@' + this.cadenaCookieMField, 1);
                           //console.log('multivote')
					   }	
                    
						this.voteAndShow(indices);						
						$$('.' + my_name + '_esmas_safe_graph_container').setStyle('display','block');
						$(this.thanksObject).innerHTML = 'Gracias por Votar'; 
						
					}.bind(this)
				});			
			$$('.' + my_name + '_esmas_safe_answer_container').tween('width', 41);				
		}else{
			
			$(this.guidSection).set('tween', {
				onComplete: function(e){

					if ( parseInt(document.location.href.indexOf('/type/wg')) >= 0 ){
						$(this.thanksObject).innerHTML = this.options.thanksText;
					} else {
						$(this.thanksObject).innerHTML = 'Gracias por Votar'
					}
					if( this.options.is_multivote == 0){
					   //alert('crea galleta 1')
						this.createCookie('esmas_safe_simplepoll_'+this.options.simplePollGuid, this.options.simplePollGuid  + '@@@' + this.cadenaCookieMField, 1000000);
					}else{
					    this.createCookie('esmas_safe_simplepoll_'+this.options.simplePollGuid, this.options.simplePollGuid  + '@@@' + this.cadenaCookieMField, 1);
					}	
                    //alert(indices)
					this.voteAndShow(indices);

						if ( this.options.chartWidth != '260' && this.options.chartHeight != '100' && this.options.bgChart != '000000' ){ 
						
							if ( parseInt(document.location.href.indexOf('/type/nt')) <= -1 ){
								//parent.location.href = this.options.thanksText.substring(9,this.options.thanksText.indexOf('">'));
								//window.open('http://www.pageresource.com/jscript/jex5.htm','esmassafe','width=400,height=200,toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes'); 
								
								//alert(this.options.thanksText);
								
								if ( this.options.thanksText.substring(this.options.thanksText.indexOf('http://'),this.options.thanksText.indexOf('" target')) != ''){
									if(this.options.typeDisplay != 'Versus'){
									   var urlnt = this.options.thanksText.substring(this.options.thanksText.indexOf('http://'),this.options.thanksText.indexOf('" target'))
                                       setTimeout("window.open('"+urlnt+"')", 2000)
										//window.open(this.options.thanksText.substring(this.options.thanksText.indexOf('http://'),this.options.thanksText.indexOf('" target')),'esmassafe');
									}
								}
							}
							
						}
					//}
						
							
						
					}.bind(this)
				});	
				
			$(this.guidSection).tween('right', 0, eval($(this.guidSection).getSize().x/2));		
		}
	}, 
	
	voteAndShow : function(Items){		
		var colorsCad = '';
		var Item;
		var newJsonValueString = '';
		var newJsonLabelString = '';
		
		//Recalculamos Total de Votos
		total_votes = 0;
		
		for(i = 0; i < this.options.valuesArray.length; i++){
			for(var j = 0; j < Items.length ; j++){
				var guid = Items[j][0];
				var ind = Items[j][1];
				if(ind == this.options.valuesArray[i][9]){
					//console.log("coincide en el guid: " + ind);
					this.options.valuesArray[i][0] += parseInt(this.options.valuesArray[i][6]);					
					if(this.options.fieldType == "RadioButtonArray"){						
						newJsonValueString += '{';
						newJsonValueString += '"value" : '+ this.options.valuesArray[i][0] +',';					
						newJsonValueString += '"label" : "'+ this.options.valuesArray[i][8] + '"';				
						if(i < this.options.valuesArray.length - 2 ){
							newJsonValueString += '},';
						} else {
							newJsonValueString += '}';
						}
					}				
				}
			}
			
			if(this.options.chartType == "HorizontalFlashChart"){
				newJsonValueString += '{';
				newJsonValueString += '"left": 0, "right": "'+ this.options.valuesArray[i][0] + '", "tip": "Votos por '+ this.options.valuesArray[i][1] +': #val# "';
				if(i < this.options.valuesArray.length - 1){
					newJsonValueString += '},';
				}else {newJsonValueString += '}';}
				newJsonLabelString += '"'+ this.options.valuesArray[i][1] + '"';
				if(i < this.options.valuesArray.length - 1){
					newJsonLabelString += ',';
				}	
			}	
			total_votes += this.options.valuesArray[i][0]; 
		} //cierra el for
		//Recalculamos porcentajes y Actualizamos XML
		for(i = 0; i <= this.options.valuesArray.length-1; ++i){
			this.options.valuesArray[i][4] = Math.round(eval((this.options.valuesArray[i][0]*100)/total_votes),2); 
			if(this.options.valuesArray[i][4] > 0){
				this.options.xmlString = this.options.xmlString.replace('&value_' + this.Right(('00' + i.toString()),2), this.options.valuesArray[i][4]); 
			}else{
				this.options.xmlString = this.options.xmlString.replace('&value_' + this.Right(('00' + i.toString()),2), 0);
			}
			//Concatenamos colores
			if(i < this.options.valuesArray.length-1)
			colorsCad += '"#' +this.options.valuesArray[i][2] + '", ';
			else
			colorsCad += '"#' +this.options.valuesArray[i][2] + '"';
		}
		
		if(this.options.chartType == "MyOwnBarChart"){
			var new_html = '';
			var pxSeg = '';
			var total = 0;
			new_html+='<div id="pollResult" style="width: 100%; /*height: 230px;*/ font: bold 10px/10px Arial; color: #003; text-align:left; display:inline-block;">'; 
			if(this.options.fieldType == "RadioButtonArray" || this.options.fieldType == "RadioButtonVideoList"){
			 //Se ordena la grafica de video encuestas MULTIPLES
				new_html+='<div id="pollResult" style="width: 100%; height: 230px; font: bold 14px/14px Arial; color: #003; text-align:left; margin-top:30px; margin-left:30px; display:inline-block;">'; 
				global_percent = 0;
				global_total = 0;
				var arrayGlobalPercents = new Array();
				/*orden*/
				if ( this.options.fieldType == 'RadioButtonVideoList' ){
					this.options.valuesArray = this.options.valuesArray.sort(this.sortArrayDesc);
				}
				var vidIdMax = this.options.valuesArray[0][7];			
				$('vid').src='http://www.tvolucion.com/embed/embed.php?id=' + vidIdMax + '&w=282&h=211&skin=home&move_reporting=esmas_home&autoplay=true&noads=1';
				var new_html = '';
				new_html+='<div class="videos_grid">'; 
				var total = 0;
				var sumaValues = new Array();
				var arrGuidsFlds = new Array();										
				arrGuidFlds = this.options.groupFieldsGuids.split("|||");												
				if ( this.options.fieldType == 'RadioButtonVideoList' ){
					for(i = 0; i <= this.options.valuesArray.length-1; ++i){
					 /* CASO VIDEO ENCUESTAS SIMPLES */
						new_html+= '<div class="safe_video_option"><div class="safe_video_thumb"><div class="safe_video_icon"><a href="javascript:void(null);" onclick="$(\'vid\').src=\'http://www.tvolucion.com/embed/embed.php?id=' + this.options.valuesArray[i][7] + '&w=282&h=211&skin=home&move_reporting=esmas_home&autoplay=true&noads=1\'"><img id="img_' + i + '"src="' + this.options.valuesArray[i][10] + '"/></a></div></div><div class="safe_video_name"><span>' + this.options.valuesArray[i][1] + '</span><div class="safe_video_bar" style="width: '+ parseInt(this.options.valuesArray[i][4]) +'%; background-color:#'+this.options.valuesArray[i][2]+';" ></div><div class="safe_video_votes"><div class="votes_percent">' + parseInt(this.options.valuesArray[i][4]) + '%</div><div class="votes_qtty">(' + addCommas(this.options.valuesArray[i][0]) + ' votos)</div></div></div></div><div class="separator"></div>';
						total += parseInt(this.options.valuesArray[i][0]); 
					}										
				}else{
					/* CASO VIDEO ENCUESTAS MÃšLTIPLES */										
					var arrayPercents = new Array();
					var arrayTotal = new Array();
					var arrMultipleGuidFvlSelected = new Array();
					var datosCoincidentes = new Array();
					totales = 0;
					var totalConteos = 0;
					var arrTotalConteos = new Array();
					for(var j = 0; j < this.options.valuesArray.length ; j++){
						//alert("se suman : total de conteos " + totalConteos + " conteo del arreglo " + this.options.valuesArray[j][0]);
						totalConteos = totalConteos + parseInt(this.options.valuesArray[j][0]);
					}
					//totalConteos = totalConteos + 6;
					if(!this.cookiefound){
						for(var gf = 0; gf < arrGuidFlds.length ; gf++){//Cada guid_field
							arrTotalConteos[arrGuidFlds[gf]] = 0;
							for(var m = 0; m < this.options.valuesArray.length ; m++){
								if(this.options.valuesArray[m][5] == arrGuidFlds[gf]){
									arrTotalConteos[arrGuidFlds[gf]] = arrTotalConteos[arrGuidFlds[gf]] + parseInt(this.options.valuesArray[m][0]);										
								}
							}
							global_percent = 0;
							global_total = 0;
							totales = totales + global_total;
							if(arrGuidFlds[gf] != ""){
								var datos = document.getElementsByName("esmas_safe_input_group_" + arrGuidFlds[gf]);																									
								for(i=0;i<datos.length;i++){//cada radio de cada field	
									if($(datos[i].id).checked){//solo los datos de los radios seleccionados	
										for(var j = 0; j < this.options.valuesArray.length ; j++){																	
											if( arrGuidFlds[gf] == this.options.valuesArray[j][5] ){
												global_percent = global_percent + parseInt(this.options.valuesArray[j][4]);
												global_total = global_total + parseInt(this.options.valuesArray[j][0]);																																	
												var guidfvl = datos[i].id;																		
												guidfvl = guidfvl.replace("esmas_safe_radio_option_", "");																	
												if(guidfvl == this.options.valuesArray[j][9]){																	
													datosCoincidentes[datosCoincidentes.length] = this.options.valuesArray[j];
													//se hace la sumatoria de porcentajes por cada field
													//arrayGlobalPercents[arrGuidFlds[gf]] = global_percent;																		
												}
											}
										}
									}
								}
								arrayPercents[arrGuidFlds[gf]] = new Array(global_percent, global_total);														
							}																					
						}
					}else{														
						for(var i = 0; i < this.options.indices.length; i++){
							arrTotalConteos[this.options.indices[i][0]] = 0;
							for(var m = 0; m < this.options.valuesArray.length ; m++){
								if(this.options.valuesArray[m][5] == this.options.indices[i][0]){
									arrTotalConteos[this.options.indices[i][0]] = arrTotalConteos[this.options.indices[i][0]] + parseInt(this.options.valuesArray[m][0]);										
								}
							}
							global_percent = 0;
							global_total = 0;
							var guidfld = this.options.indices[i][0];
							var guidfvl = this.options.indices[i][1];					
							for(var j = 0; j < this.options.valuesArray.length ; j++){														
								if(guidfld == this.options.valuesArray[j][5]){														
									global_percent = global_percent + parseInt(this.options.valuesArray[j][4]);
									global_total = global_total + parseInt(this.options.valuesArray[j][0]);														
									if(guidfvl == this.options.valuesArray[j][9]){																													
										datosCoincidentes[datosCoincidentes.length] = this.options.valuesArray[j];	
										//se hace la sumatoria de porcentajes por cada field																															
									}
								}
							}
							arrayPercents[this.options.indices[i][0]] = new Array(global_percent, global_total);
						}
					}	
					//alert("el arreglo de porcentajes y totales : " + arrayPercents);
					for(var i = 0; i < datosCoincidentes.length ; i++){								
						datosCoincidentes[i][0] = arrTotalConteos[datosCoincidentes[i][5]];
					}
					datosCoincidentes = datosCoincidentes.sort(this.sortArrayDesc);											
					datosCoincidentes = datosCoincidentes.sort(this.sortArrayDesc);
					datosCoincidentes = datosCoincidentes.sort(this.sortArrayDesc);
					var vidIdMax = datosCoincidentes[0][7];													
					$('vid').src='http://www.tvolucion.com/embed/embed.php?id=' + vidIdMax + '&w=282&h=211&skin=home&move_reporting=esmas_home&autoplay=true&noads=1';
					for(var i = 0; i < datosCoincidentes.length ; i++){											
						for(ind in arrayPercents){
							if(ind == datosCoincidentes[i][5]){
								var totalPercent = parseFloat((parseInt(arrayPercents[ind][1]) * 100) / totalConteos).toFixed(2);
								new_html+= '<div class="safe_video_option"><div class="safe_video_thumb"><div class="safe_video_icon"><a href="javascript:void(null);" onclick="$(\'vid\').src=\'http://www.tvolucion.com/embed/embed.php?id=' + datosCoincidentes[i][7] + '&w=282&h=211&skin=home&move_reporting=esmas_home&autoplay=true&noads=1\'"><img id="img_' + i + '"src="' + datosCoincidentes[i][10] + '"/></a></div></div><div class="safe_video_name"><span>' + datosCoincidentes[i][8] + '</span><div class="safe_video_bar" style="width: '+ totalPercent +'%; background-color:#'+datosCoincidentes[i][2]+';" ></div><div class="safe_video_votes"><div class="votes_percent">' + totalPercent + '%</div><div class="votes_qtty">(' + addCommas(arrayPercents[ind][1]) + ' puntos)</div></div></div></div><div class="separator"></div>';												
							}
						}
					}
					total = totalConteos / 6;										
				}
				new_html+= '</div>';						 
			} else if(this.options.fieldType == "ImageButtonList"){
				for(i = 0; i <= this.options.valuesArray.length-1; ++i){
					if(isNaN(this.options.valuesArray[i][4])){
						this.options.valuesArray[i][4] = 0;
					}
					new_html+= '<div class = "contIconResult">';
					new_html+= '<img src = "' + this.options.valuesArray[i][11] + '" class = "imgIconResult" />';
					new_html+= '<span class="labelIconValue">' + this.options.valuesArray[i][1] + '</span>';
					new_html+= '<div class="result" style="border-bottom: 1px dotted #641E00;"><img style="height: 9px;  border: 1px solid #333; border-top: 0; border-right: 0; width: '+ parseInt(this.options.valuesArray[i][4]) +'%;" src="http://i2.esmas.com/encuestas/public/img/frontend/spacer.gif" align="absmiddle" class="serie_color_'+ i +'">';
                    new_html+= '<div class = "contDataVotes"><span class="safe_chart_element_label safe_percent_votes">' + parseInt(this.options.valuesArray[i][4]) + '% </span>';
                    new_html+= '<span class="safe_chart_element_label safe_total_votes">(' + addCommas(this.options.valuesArray[i][0].toString()) + ')</span></div>';
					new_html+= '</div>';//contIconResult
                    new_html+= '</div>';//pollresult
					total += this.options.valuesArray[i][0];
				}	
			} else {						 
				for(i = 0; i <= this.options.valuesArray.length-1; ++i){
					if(isNaN(this.options.valuesArray[i][4])){
						this.options.valuesArray[i][4] = 0;
					}
					if(this.options.valuesArray[i][9] == ind && this.options.dc_iu != '' && this.options.dc_iu != undefined && this.options.valuesArray[i][12] != '' && this.options.valuesArray[i][12] != undefined){
						var axel = Math.random() + '';
						var a = Math.round(axel * 10000000000000);
						pxSeg = '<img src = "' + this.options.px_seg_dom + 'activity;dc_iu=' + this.options.dc_iu + ';dc_seg=' + this.options.valuesArray[i][12] + ';ord=' + a + '?" width="1" height="1" border="0" />';
					}
					new_html+= '<div class ="group-answer"><span class="safe_chart_element_label">' + this.options.valuesArray[i][1] + '</span>';
					new_html+= '<div class="result" style="margin: 2px 0 2px 0; border-bottom: 1px dotted #641E00; padding: 0 0 1px 0;"><img style="height: 9px;  margin: 0 5px 0 0; border: 1px solid #333; border-top: 0; border-right: 0; width: '+ parseInt(this.options.valuesArray[i][4]) +'%;" src="http://i2.esmas.com/encuestas/public/img/frontend/spacer.gif" align="absmiddle" class="serie_color_'+ i +'">';
                    new_html+= '<span class="safe_chart_element_label safe_percent_votes">' + parseInt(this.options.valuesArray[i][4]) + '% </span>';
                    new_html += '<span class="safe_chart_element_label safe_total_votes">(' + addCommas(this.options.valuesArray[i][0].toString()) + ')</span></div></div>'
					total += this.options.valuesArray[i][0];
				}					 
			}
			new_html+= pxSeg;
			new_html+= '<div class="total" style="text-align: right; font: bold 12px/15px Arial; padding: 0 5px 0 0;"><span class="safe_chart_element_label">Total de votos: ' + addCommas(parseInt(total).toString()) + '</span></div></div>';
			$("esmas_safe_chart_container_" + this.options.simplePollGuid).innerHTML = new_html;
					
		}else if(this.options.chartType == "HorizontalFlashChart" || this.options.fieldType == "RadioButtonArray"){ 
			if(this.options.chartType == "HorizontalFlashChart"){
				var global_data = '';
				global_data += '{ ';
				global_data += '    "elements": [';
				global_data += '        {';
				global_data += '            "type": "hbar",';
				global_data += '            "values": ['+ newJsonValueString +'],';
				global_data += '            "colour": "#FFFA00"';
				global_data += '        } ';
				global_data += '    ],';
				global_data += '    "x_axis": {';
				global_data += '        "offset": false, "colour": "#000000", "grid-colour": "", "tick-height": 0, "stroke": 0, ';
				global_data += '        "labels": {"labels": ["Votos"], "steps": 1, "colour": "#ffffff"}';
				global_data += '    },';
				global_data += '    "y_axis": {';
				global_data += '        "offset": 1, "colour": "#000000",';
				global_data += '        "labels": ['+ newJsonLabelString +'] , "colour": "#ffffff"';
				global_data += '    }, "bg_colour": "#'+ this.options.bgChart +'" ';
				global_data += '}';
								
			}else{		
				if(this.options.fieldType == "RadioButtonArray"){	
					colorsCad = '"#3B3B3B", "#461600", "#813F02"';
					valueString = newJsonValueString;
				}else{
					valueString = "#values#";
				}			
				var global_data = '';
				global_data += '{';
				global_data += '    "elements": [';
				global_data += '        {';
				global_data += '            "type": "pie",';
				global_data += '            "alpha": 1,';
				global_data += '            "start-angle": 0,';
				global_data += '            "animate": [';
				global_data += '                {';
				global_data += '                    "type": "fade"';
				global_data += '                }';
				global_data += '            ],';
				global_data += '            "colours": [' + colorsCad + '],';//"#3B3B3B", "#461600", "#813F02"				
				global_data += '            "values": [ ' + valueString + ' ], "radius": 40 ';
				global_data += '        }';
				global_data += '    ],';
				global_data += '    "title": { "text": "'+ this.options.chartTitle +'", "style": "{font-size: 12px; font-family:Arial; font-weight: normal; color: #FFFFFF; text-align: left;}" },';
				global_data += '    "x_axis": null';
				global_data += ', "bg_colour": "#'+ this.options.bgChart +'"}';		
			}
			g_data.set(this.options.simplePollGuid, global_data);
			this.writeSwfChart(this.options.simplePollGuid, this.options.xmlString,true);					
		}else if(this.options.chartType == "Versus"){
			var p = parent.evaluaPos()
			if(p == 0 ){
				document.getElementById('siguiente').style.visibility = "hidden";
			}
			$('votar').setStyle('display', 'none');
			$('resultado').setStyle('display', 'block');
			var new_html = '';
			var total = 0;
			/*********************   crea la caja de resultado    ******************************/
			new_html += '<div id="esmas_safe_chart_container_'+this.options.simplePollGuid+'" class="wg_esmas_safe_chart_container">'
			new_html += '<div id="pollResult" style="width: 100%; font: bold 10px/10px Arial; color: #003; text-align:left; display:inline-block; margin-left:5px; ">';
			new_html += '<ul>';
			for (i = 0; i <= this.options.valuesArray.length - 1; ++i) {
				if (isNaN(this.options.valuesArray[i][4])) {
					this.options.valuesArray[i][4] = 0;
				}
				new_html += '<li>';
				new_html +=  '<div class="result" >'
				new_html +=   '<ul>';
				new_html +=    '<li>';
				new_html +=	'<img src="'+this.options.valuesArray[i][7]+'" >';
				new_html +=    '</li>';
				new_html +=    '<li>';
				new_html +=	'<div class="description">';
				new_html += 	 '<h2>' + this.options.valuesArray[i][1] + '</h2>';
				new_html +=	 this.options.valuesArray[i][11];
				var visible = '';
				if(this.options.valuesArray[i][0]==0){
					visible = 'visibility:hidden;';
				}
				new_html += 	 '<div class="grafica' + i + '" style="'+visible+'width:' + (parseInt((this.options.valuesArray[i][4]) * 4.1)) + '">' +
				parseInt(this.options.valuesArray[i][4]) +'% (' +
				this.options.valuesArray[i][0] +')' +
				'</div>';//cierra grafica
				new_html +=     '</div>';
				new_html +=    '</li>';
				new_html +=   '</ul>';
				new_html += '</div>';
				new_html += '</li>';		
			}
			new_html += '</ul>';
			new_html += '</div>';
			$('esmas_safe_graph_container_'+this.options.simplePollGuid).innerHTML = new_html;
			//$('esmas_safe_graph_container_'+this.options.simplePollGuid).set('text', new_html)
		}
        resizeThisFrame()

	},
	
	
	sortArrayNumber: function(a,b){
		return b[0] - a[0];
	},

	
	sortArrayDesc : function(a, b){
		var x = a[0];
		var y = b[0];
		return ((x > y) ? -1 : ((x < y) ? 1 : 0));	
	},
	
	sortArrayAsc : function(a, b){
		var x = a[0];
		var y = b[0];
		return ((x < y) ? -1 : ((x > y) ? 1 : 0));	
	},
	
	quitaComent : function(){
		$clear(this.myTimer);
		$(this.thanksObject).innerHTML = '';	
	}, 	
	
	createCookie : function (name,value,days){
        //alert(value);
		Cookie.write(name, value, {duration: days, path: '/'});
	},
	
	readCookie : function (name){
		return Cookie.read(name)
		
	},
		
	arrayMaxPosition : function(arrayToSort, sortBy){
		var tmpArray = new Array();
		var tmpValue = 0;
		var maxiTempos;
		for (amp = 0; amp <= arrayToSort.length-1; ++amp){
			if ( arrayToSort[amp][sortBy] > tmpValue ){
				tmpValue = arrayToSort[amp][sortBy];
				maxiTempos = amp;
			}
		}
		return maxiTempos;
	},
	
 	Left : function(str, n){
		if (n <= 0)
			return "";
		else if (n > String(str).length)
			return str;
		else
			return String(str).substring(0, n);
	},
	
	Right : function(str, n){
		if (n <= 0)
		   return "";
		else if (n > String(str).length)
		   return str;
		else {
		   var iLen = String(str).length;
	    	return String(str).substring(iLen, iLen - n);
		}
	},
    
    sendVote: function(cad,vote,cap,e){
	var ruta = 'http://'+this.options.host+'/newcalcularesultado' 
        this.guidGoField = 'esmas_safe_poll_go_' + this.options.simplePollGuid;
        var bin = this;
        vote = vote.replace("&&&",'@')
        if(cap == 1){
            var capInputField = $('recaptcha_response_field').value
            var capHiddenField = $('recaptcha_challenge_field').value
        }else{
            var capInputField = ''
            var capHiddenField = ''
        }
        //alert(capInputField)
        var myElement = $('esmas_safe_thanks_text_'+this.options.simplePollGuid)
        var myRequest = new Request({
            //url: 'http://encuestas.esmas.com.mx/newcalcularesultado',
			url: ruta,
			method: 'post',
            data:{
                cadena : cad,
                voto : vote,
                captcha : cap,
                inputField : capInputField,
                hiddenField : capHiddenField
            },
			onRequest: function(){
				myElement.set('text', 'loading...');
			},
			onSuccess: function(responseText){ 	
				if (responseText == 0 ){
					Recaptcha.reload(); 
					myElement.set('text','Texto incorrecto, vuelve a ingresar las palabras');
				} else { 
					if($('captcha_form')){
						$('captcha_form').style.display = 'none';
					} 
					myElement.set('text','Gracias por votar');
					bin.setAnimation(e, bin.options.indices);
					$(bin.guidGoField).style.display = 'none'
				}						
			},
			onFailure: function(){
				myElement.set('text', 'Sorry, your request failed :(');
			}
		});
       myRequest.send();
    },
    
	
	isArray : function(obj) { return (obj.constructor.toString().indexOf('Array') != -1); }, 
	guid : function() { return (this.S4()+this.S4()+"-"+this.S4()+"-"+this.S4()+"-"+this.S4()+"-"+this.S4()+this.S4()+this.S4()); }, 
	S4 : function() { return (((1+Math.random())*0x10000)|0).toString(16).substring(1); } 
});

function ofc_ready(){
    //alert('ofc_ready');	
}

function open_flash_chart_data(){
	// alert( global_data );
	//alert(g_data_pointer.shift());
    return g_data.get(g_data_pointer.shift());
}

function findSWF(movieName){//alert(movieName);
  if (navigator.appName.indexOf("Microsoft")!= -1) {
    return window[movieName];
  } else {
    return document[movieName];
  }
}


function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

function dataResult(guid){
    var result = new Array();
    var jsonRequest = new Request.JSON({
            url: 'http://encuestas.esmas.com.mx/resources/json/frontend/'+guid+'.json', 
            //url: 'http://polls.esmas.com/resources/json/frontend/'+guid+'.json', 
            async : false,
            onSuccess: function(data){
                dataversus=data                              
            }}).get()
    return dataversus; 
}

function voteForvspop(vsGuid){
    if(dataCokie = Cookie.read('esmas_safe_simplepoll_'+vsGuid)){
        //console.log(dataCokie)
        vote = dataCokie.split('@')
        return vote[5];
    }
}