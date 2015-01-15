package {
	import flash.display.MovieClip;
	import com.shopbeam.*;
	
	public class chopard extends MovieClip {
		public function chopard() {

			var shopbeam:Shopbeam = new Shopbeam("e8abf83f-38f2-450b-80e5-32d206ce85e6", this);
			shopbeam.onClickGoToProduct("stainless", "9184357");
			shopbeam.onClickGoToProduct("gold", "9184381");
		}
	}
}
