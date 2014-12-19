package com.shopbeam {
	import flash.display.*;
	import flash.display.Stage;
	import flash.events.*;
	import flash.net.*;
	import flash.utils.*;
	import flash.media.*;
	import flash.external.*;
	import flash.system.Security;

	public class Shopbeam {
		public var API_KEY: String;
		public var API_VERSION: * = "1";
		public var API_SCHEME: String = "https";
		public var API_DOMAIN: String = "www.shopbeam.com";
		public var API_PORT: * = "443";
		public var API_URL: String = API_SCHEME + "://" +API_DOMAIN + ":" + API_PORT + "/v" + API_VERSION + "/products";
		public var main: MovieClip;
		public var stageRef: Stage;
		public var index:Number = 0;
		private var widgetLoader: int = 0;
		public var x_area:Number = 0;
		
		public var register:Array = new Array();
		
		public function Shopbeam(apiKey: String, mainMc: MovieClip) {
			Security.allowDomain("*");
			this.main = mainMc;
			this.API_KEY = apiKey;
			this.x_area = 0;
			widgetLoaderExists();
		}
		private function widgetLoaderExists(): int {
			var exists: * = ExternalInterface.call('eval', 'window.Shopbeam !== undefined');
			return exists;
		}
		private function registerProductInWidget(registerProductUrl:String, i: Number):Object{
			var result:Object = null;
			result = executeJS("Shopbeam.swfWidgetRegisterProduct('" + main.stage.loaderInfo.parameters.widgetUuid + "', '" + registerProductUrl + "')");
			if(!result){
				setTimeout(function():void{
					registerProductInWidget(registerProductUrl, i);
					}, 2000);
			} else {
				register[i] = result.toString();
			}
			return result;
		}
		private function log(args: * ): void {
			if (ExternalInterface.available) {
				ExternalInterface.call('console.log', arguments.join(' '));
			}
		}
		public function onClickGoToProduct(mc_name: String, productId: String): Boolean {
			var requestVars: URLVariables = new URLVariables();
			var request: URLRequest = new URLRequest();
			var loader: URLLoader;
			var prodUrl: String = "/v1/products?id=" + productId + "&image=1&apiKey=" + API_KEY;
			var index:Number = this.index;
						
			request.url = API_URL;
			requestVars.apiKey = API_KEY;
			requestVars.image = "1";
			request.method = URLRequestMethod.GET;

			loader = new URLLoader();
			loader.dataFormat = URLLoaderDataFormat.TEXT;
			loader.addEventListener(Event.COMPLETE, function callHandler(e:Event){
					var jsonObject: Object = JSON.parse(e.target.data);
					loaderCompleteHandler(mc_name, jsonObject, prodUrl, index);
				}, false, 0, true);
			this.index += 1;
			requestVars.id = productId;
			request.data = requestVars;
			loader.load(request);

			return true;
		}
		
		public function loaderCompleteHandler(mc_name:String, data:Object, registerProductUrl:String, i:Number): void {
			var mc: MovieClip;
			var wl = this.widgetLoaderExists();
			var result:Object;
			mc = this.main.getChildByName(mc_name) as MovieClip;
			mc.buttonMode = true;
			mc.useHandCursor = true;
			
			registerProductInWidget(registerProductUrl, i);

			mc.addEventListener(MouseEvent.CLICK, function (e: Event) {
				if(!wl){
					onClickProductArea(data[0].variants[0].sourceUrl);
				} else {
					onClickProductArea(register[i]);
				}
			}, false, 0, true);
		}		
		
		public function loadProductsFromWidgetEmbed():void{
			var areax:Number = 0;
			ExternalInterface.addCallback('setWidgetData', function setWidgetData(data: String, productData: String): void {				
				var prodData: Object = JSON.parse(productData);
				var dataParse: Object = JSON.parse(data);
				var index: int = prodData.index;
				var area: MovieClip = new MovieClip();

				var box:Shape = new Shape();
				box.graphics.lineStyle(1);
				box.graphics.beginFill(0x0000FF, 1);
				box.graphics.drawRect(0,0,300,main.stage.stageHeight);
				box.x = 0;
				box.y = 0;
				
				area.addChild(box);
				if(!areax){
					area.x = areax;
					areax += area.width;
				} else {
					area.x = areax;
					areax = area.x + area.width;
				}
				
				area.y = 0;
				this.x_area += area.width;

				area.useHandCursor = true;
				area.buttonMode = true;
				area.addEventListener(MouseEvent.CLICK, function (e:Event){
					onClickProductArea(index.toString());
				});
				main.stage.addChild(area);
			});
		}

		private function onClickProductArea(url:String): void {
			if(!widgetLoaderExists()){
				navigateToURL(new URLRequest(url), "_blank");
			} else {
				if (main.stage.loaderInfo.parameters.widgetUuid && ExternalInterface.available) {
					executeJS("Shopbeam.swfOpenLightbox('" + main.stage.loaderInfo.parameters.widgetUuid + "', " + url + ")");
				}
			}
		}
		private function executeJS(js): * {
			var wrapped = 'try {\n' + js + '\n}catch(err){ }'; // console.error(err);console.error(err.stack);
			var result: * = null;
			try {
				result = ExternalInterface.call('eval', wrapped);
			} catch (e: Error) {
				trace(e.message);
			}
			return result;
		}		
	}
}