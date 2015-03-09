// JavaScript Document

jQuery(document).ready(function(){
		
		// Mouseovers in the pagination...
		/*
jQuery('.next').hover(
         function(){jQuery(this).fadeTo("fast", 0.8);},function(){jQuery(this).fadeTo("normal", 1);}
         );
         
         jQuery('.previous').hover(
         function(){jQuery(this).fadeTo("fast", 0.8);},function(){jQuery(this).fadeTo("normal", 1);}
         );
		
		jQuery('#pagination li a').hover(
         function(){jQuery(this).fadeTo("fast", 0.8);},function(){jQuery(this).fadeTo("normal", 1);}
         );
*/
		
		// Search mouseover on submit button...
		jQuery('#searchform .button').hover(showhover,hidehover);
		
		function showhover(){
		 jQuery('#searchform .button').addClass('hover');
		}
		
		function hidehover(){
		 jQuery('#searchform .button').removeClass('hover');
		}
		

// Search box...
		
		// initial value
		jQuery('.textbox').val('Search the site...');
		
		// clear out the searchbox onClick...
		jQuery('.textbox').focus(function(){
			this.value = '';
		});	
		// Add the text back in onBlur
		jQuery('.textbox').blur(function(){
			this.value = 'Search the site...';
		});		
				

// Hovering functionality for image.php page carousel thumbs
// adds a triangle over the top on hover state.
jQuery('.cat-image .article-thumbs li.panel').hover(showSquare,hideSquare);

function showSquare(){
	jQuery('.square',this).show();
}

function hideSquare(){
	jQuery('.square',this).hide();
}


});