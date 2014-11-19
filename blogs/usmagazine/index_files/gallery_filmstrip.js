$(function() {
	var the_slider = $('#filmstrip_cont #slider_frame') ? $('#filmstrip_cont #slider_frame') : false;
	var slider_items = $('#slider_frame li') ? $('#slider_frame li') : false;
	var api = false;
	the_slider.scrollable({
		items: '#fs_slider',
		next: '.next',
		prev: '.prev',
		keyboard: false
	});
	
	api = the_slider.data('scrollable');
	if(api) {
		
	//overwrite the next and prev functions to scroll 8 at a time
	api.next = function(){
		return api.move(8, 800);
	}
	api.prev = function(){
		return api.move(-8, 800);
	}
	
	
	var originalNext = api.next;
	api.onSeek(function() {
		if(api.getSize() - api.getIndex() == 8) {
			$('.next').addClass('disabled');
			api.next = function() {
				return false;
			}
		} else {
			api.next = originalNext; 
		}
		
		if (api.getSize() - api.getIndex() <= 8) {
			$('#fs_arr_r').addClass('disabled');
		} else {
			$('#fs_arr_r').removeClass('disabled');
		};
	});
	}
	// slide filmstrip to group with selected thumb
	function gotoSlide() { 
		if(api) {
		var page_num = slide_num/8;
		var move_slides = Math.floor(page_num)*8;
		return api.move(move_slides, 100);
		}
	}
	gotoSlide();
});
