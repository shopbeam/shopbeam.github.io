//	Responsive Accordion v1.3, Copyright 2014, Joe Mottershaw, https://github.com/joemottershaw/
//	============================================================================================

	jQuery(document).ready(function($) {
		$('.responsive-accordion').each(function() {
			// Set Expand/Collapse Icons
				$('.responsive-accordion-minus', this).hide();

			// Hide panels
				$('.responsive-accordion-panel', this).hide();

			// Bind the click event handler
				$('.responsive-accordion-head', this).click(function(e) {
					// Get elements
						var	thisAccordion = $(this).parent().parent(),
							thisHead = $(this),
							thisPlus = thisHead.find('.responsive-accordion-plus'),
							thisMinus = thisHead.find('.responsive-accordion-minus'),
							thisPanel = thisHead.siblings('.responsive-accordion-panel');

					// Reset all plus/mins symbols on all headers
						thisAccordion.find('.responsive-accordion-plus').show();
						thisAccordion.find('.responsive-accordion-minus').hide();

					// Reset all head/panels active statuses except for current
						thisAccordion.find('.responsive-accordion-head').not(this).removeClass('active');
						thisAccordion.find('.responsive-accordion-panel').not(this).removeClass('active').slideUp();

					// Toggle current head/panel active statuses
						if (thisHead.hasClass('active')) {
							thisHead.removeClass('active');
							thisPlus.show();
							thisMinus.hide();
							thisPanel.removeClass('active').slideUp();
						} else {
							thisHead.addClass('active');
							thisPlus.hide();
							thisMinus.show();
							thisPanel.addClass('active').slideDown();
						}
				});
		});
	});