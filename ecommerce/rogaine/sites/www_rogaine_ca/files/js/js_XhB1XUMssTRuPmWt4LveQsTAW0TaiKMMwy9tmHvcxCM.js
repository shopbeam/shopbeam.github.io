/*!
 * @file
 * Custom bazaar voice scripts.
 */

// Bazaar Voice generating ratings
function generateBV(prodid) {
	$BV.configure("global", {
		allowSamePageSubmission: true,
		doShowSubmission: function() {
			$("#BVRRContainer").show();
		},
		onSubmissionReturn: function() {
			$("#BVRRContainer_wrapper").css("display","block");
			$("#BVSubmissionContainer_wrapper").css("display","none");
			$('html,body').animate({scrollTop: $("#BVRRContainer_wrapper").offset().top});
			$(".BVLinkReturnToContent ").css("display","none");
		},
		doScrollSubmission: function() {
			return false;
		}
	});			

	$BV.ui("rr", "show_reviews", { 
		productId: prodid,
		submissionContainerDiv: "BVSubmissionContainer",
		onEvent: function(json) {
			if ( json.eventSource == "Action" && json.eType =="Read" ) { 
				$("#BVSubmissionContainer_wrapper").hide();
				$("#BVRRContainer_wrapper").show();
				if($(".bvwrapper").css("display") == "none") {
					$(".bvwrapper").toggle("fast",function(){
						$(".bvwrapper").show();
						$("#prod_review_control span").toggleClass("review_open");
					});
				}
				$("#ntgca_writereview").removeClass("activentgbutton");
				$("#ntgca_readreview").addClass("activentgbutton");
			}
			else if ( json.eventSource == "Action" && json.eType =="Write" ){ 
				$("#BVRRContainer_wrapper").hide();
				$("#BVSubmissionContainer_wrapper").show();
				if($(".bvwrapper").css("display") == "none"){
					$(".bvwrapper").toggle("fast",function(){
					$("#prod_review_control span").toggleClass("review_open");
					});
				}
				$("#ntgca_readreview").removeClass("activentgbutton");
				$("#ntgca_writereview").addClass("activentgbutton");
			}
			else if ( json.eventSource == "Display" && json.eType =="Read" ){
				$("#BVSubmissionContainer_wrapper").hide();
				//$("#BVRRContainer_wrapper").show(); 
				// $(".bvwrapper").hide();
				$("#ntgca_writereview").removeClass("activentgbutton");
				$("#ntgca_readreview").addClass("activentgbutton");
			}
		}
	});
};
