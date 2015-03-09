var DisqusControl = (function() {

	function trimComments() {

        $('.show-more').show();
        $('#comment-container-alt').addClass('is-trimmed');
        trimToCommentIndex(1);
    }

    function getHeight(itemIndex) {
    	// var itemId = '#dsq-comment-'+DISQUS.jsonData.ordered_posts[itemIndex];
        var $secondComment = $('.dsq-comment').eq(itemIndex);
    	var height = $secondComment.height();

    	var topOffset = $secondComment.position().top;

    	return topOffset + height;
    }

    function trimToCommentIndex(index) {
    	$('.is-trimmed').css('max-height', getHeight(index));
    }

    /*-------------------------------------------- */
    /** Export */
    /*-------------------------------------------- */
    
    return {
    	trimComments: trimComments,
    	getHeight: getHeight,
    	trimToCommentIndex: trimToCommentIndex
    }

})();