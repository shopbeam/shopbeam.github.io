var config = {
sensitivity: 3,
interval:  200, 
over: doOpen, 
timeout: 300,
out: doClose 
};
function doOpen() {$(this).addClass('css-hoverState');}
function doClose() {$(this).removeClass('css-hoverState');}
$(function() {
$('.more').hoverIntent(config);
$('.more a#moreanchor').click(function(event) {
  event.preventDefault();
}); 

}); 


