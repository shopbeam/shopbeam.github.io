jQuery(document).ready(function($) {

	var postType = fangohr_dynload.postType;
	var pageNum = parseInt(fangohr_dynload.startPage) + 1;
	var postPageNum = parseInt(fangohr_dynload.startPostPage) + 1;
	var max = parseInt(fangohr_dynload.maxPages);
	var nextLink = fangohr_dynload.nextLink;
	var nextPostPageLink = fangohr_dynload.nextPostPageLink
	var maxPostPage = $('#continue_post').addClass('continue_post_' + postPageNum ).attr('data-maxPages') ;
	if (!nextLink) {
		$('#view_more_posts').addClass('hidden');
	}
	$('#view_more_posts').click(function() {
		$('.sticky_ad').show();

		// Are there more posts to load?
		if(pageNum <= max) {
		
			// Show that we're working.
			$(this).text('Loading posts...');
			
			$('.more_posts_'+ pageNum).load(nextLink + ' .post',
				function() {
					console.log (nextLink);
					// Update page number and nextLink.
					pageNum++;
					nextLink = nextLink.replace(/\/page\/[0-9]?/, '/page/'+ pageNum);
					
					// Add a new placeholder, for when user clicks again.
					$('#view_more_posts')
						.before('<div class="more_posts_'+ pageNum +'"></div>')
					
					// Update the button message.
					if(pageNum <= max) {
						$('#view_more_posts').text('+ View More Posts');
					} else {
						$('#view_more_posts').text('No more posts to load.');
					}
					tm.initSocial();
					tm.initDirt();
					$("img").trigger("sporty");
					_gaq.push(['_trackEvent', 'DynamicContent', 'loadMorePostsNEW', nextLink]);
				}
			);
		} else {
			$('#view_more_posts').append('.');
		}	
		
		return false;
	});
	// $('#continue_reading').click(function() {
	// 	//$('.sticky_ad').show();
	// 	console.log(postPageNum + ':'+ maxPostPage);
	// 	if(postPageNum <= maxPostPage) {
	// 		$(this).text('Loading content...');
		
	// 		$('.continue_post_'+ postPageNum).load(nextPostPageLink + ' .feature_body',
	// 			function() {
	// 				// Update page number and nextLink.
	// 				postPageNum++;
	// 				nextPostPageLink = nextPostPageLink.replace(/\/[0-9]+/, '/'+ postPageNum);
	// 				console.log(nextPostPageLink);
					
					
	// 				$('#continue_reading')
	// 					.before('<div class="continue_post_' + postPageNum +'"></div>')
	// 				if(postPageNum < maxPostPage) {
	// 					$('#continue_reading').text('Continue Reading');
	// 				} else {
	// 					$('#continue_reading').hide();
	// 				}
					
	// 				tm.initSocial();
	// 				tm.initDirt();
	// 				$("img").trigger("sporty");
	// 				_gaq.push(['_trackEvent', 'DynamicContent', 'loadMorePosts', nextPostPageLink]);
	// 			}
	// 		);
	// 	} 
		
	// 	return false;
	// });
});