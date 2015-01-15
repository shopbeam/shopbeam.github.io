// How fast should the video play as the user scrolls?
var SCROLL_SCRUB_SPEED = 120; // pixels/sec

var videoReady;
var continueUpdatingVideo;
var video;
var videoInterval;

var $sections;

$(document).ready(function() {

    //----------------------//
    //   Background Video   //
    //----------------------//

    // Set up the background video when it has loaded.
    videoReady = false;
    // Only do this if this is not a mobile device.
    if(!$.browser.mobile) {
        video = $('#video-bg').get(0);
        videoInterval = setInterval(function(t) {
            if(video) {
                if(video.readyState >= 0) {
                    videoLoaded();
                    clearInterval(videoInterval);
                }
            } else {
                clearInterval(videoInterval);
            }
        }, 500);
    }//TODO:ajaxify tweaks
    if($.browser.mobile) {
        $('#twitter-middle').attr('data-bottom-bottom', 'position:!absolute;');
        $('#twitter-middle').attr('data-top-center','opacity[quadratic]:1;');
        
    }
});

// Update the video's current frame based on
// vertical position within the document.
// * data-checkpoint-in and data-checkpoint-out can be
// *    specified on each section telling the bg-video
// *    how to behave (in seconds)
function updateVideo() {
    var video = $('#video-bg').get(0);
    var videoLength = video.duration;
    var scrollPosition = $(document).scrollTop();
    if(!isNaN(videoLength)) {
        video.currentTime = (scrollPosition / ($(document).height() - $(window).height())) * videoLength;//(scrollPosition / SCROLL_SCRUB_SPEED) % videoLength;
    }

    // Initialize our bounds.
    /*var lowerScrollPosition = 0;
    var lowerBound = 0;
    var upperScrollPosition = $(document).outerHeight();
    var upperBound = videoLength;
    var currentSectionFound = false;
    // Find the video checkpoints that enclose the current scroll position.
    $sections.each(function() {
        var checkpointDataIn = $(this).attr('data-video-checkpoint-in');
        var checkpointDataIn_exists = typeof checkpointDataIn !== 'undefined' && checkpointDataIn !== false;
        var checkpointDataOut = $(this).attr('data-video-checkpoint-out');
        var checkpointDataOut_exists = typeof checkpointDataOut !== 'undefined' && checkpointDataOut !== false;
        if(!checkpointDataIn_exists && !checkpointDataOut_exists) { return true; }
        if($(this).offset().top > scrollPosition) {

            currentSectionFound = true;
            // Use all possible data if this is the current section.
            if(!currentSectionFound && checkpointDataIn_exists) {
                lowerScrollPosition = $(this).offset().top;
                lowerBound = checkpointDataIn;
            }
            // If the current section has no -out data, we must continue the search.
            if(checkpointDataOut_exists) {
                upperScrollPosition = $(this).offset().top + $(this).outerHeight();
                upperBound = checkpointDataOut;
                return false;
            }

        } else {

            // Since this section comes before the current section,
            // use the latest checkpoint data we can find (so -out takes priority).
            if(checkpointDataOut_exists) {
                 lowerScrollPosition = $(this).offset().top + $(this).outerHeight();
                 lowerBound = checkpointDataOut;
            } else {
                lowerScrollPosition = $(this).offset().top;
                lowerBound = checkpointDataIn;
            }
        }
    });
    // Interpolate these values based on scroll position.
    lowerBound = parseFloat(lowerBound);
    upperBound = parseFloat(upperBound);
    var transitionAreaHeight = upperScrollPosition - lowerScrollPosition;
    var transitionProgressHeight = scrollPosition - lowerScrollPosition;
    var newVideoProgress = lowerBound + ((upperBound - lowerBound) * (transitionProgressHeight / transitionAreaHeight));
    // Update video position.
    video.currentTime = newVideoProgress;*/
}

// Runs once the video is loaded.
function videoLoaded(event) {

    videoReady = true;
    if($('body').hasClass('home')) { continueUpdatingVideo = true; } else { continueUpdatingVideo = false; }

    // Update the video whenever the window is scrolled.
    $(window).scroll(function(e) {
        if(videoReady && continueUpdatingVideo) { updateVideo(); }
    });
    updateVideo();
}

//------------------//
//   Twitter Feed   //
//------------------//

var $twitterFront;
var $twitterMiddle;
var $twitterGlow;
var $twitterBack;

var $twitterFrontItems;
var $twitterBackItems;

var twitterFrontWidth;
var twitterBackWidth;
var twitterSizeRatio;

// Initial resizing of the orbit elements.
function resizeOrbits() {

    // Resize the front orbit so it can fit all elements.
    twitterFrontWidth = $twitterFrontItems.outerWidth(true) * $twitterFrontItems.length;
    $twitterFront.css('width', twitterFrontWidth);

    // Resize the back orbit so it can fit all elements.
    twitterBackWidth = $twitterBackItems.outerWidth(true) * $twitterBackItems.length;
    $twitterBack.css('width', twitterBackWidth);

    // Store the size ratio between the orbit widths.
    twitterSizeRatio = twitterBackWidth / twitterFrontWidth;
}

// Update the orbit positions based on window size. The center of
// each orbit should always represent the "opposite side" of
// the orbit these items are supposedly rotating around.
function updateOrbit() {
    var twitterFrontPosition = parseInt($twitterFront.css('left'));
    var twitterBackPosition = (-1 * twitterFrontPosition * twitterSizeRatio) - (twitterBackWidth / 2);
    $twitterBack.css('left', twitterBackPosition);

    // Also update the middle height based on window height.
    $twitterMiddle.css('height', $(window).height() * .85);
    $twitterGlow.css('height', $(window).height() * .50);
}
$(window).resize(function() { updateOrbit(); });

// Keep track of the last positions of the front and back
// to help with the orbitSlide() function.
var lastPosition_front;
var lastPosition_back;

// Slide the orbits using deltaX from hammer.js.
var sliderDragging = false;
function orbitSlide(deltaX, dragend, isdrag) {

    // If this is a drag, update the status.
    if(isdrag) { sliderDragging = true; }

    var newPosition_front = lastPosition_front + deltaX;
    $twitterFront.css('left', newPosition_front);

    var newPosition_back = lastPosition_back - (deltaX * twitterSizeRatio);
    $twitterBack.css('left', newPosition_back);

    // We need to update the twitter items if the orbit goes out of
    // range. Switch the order of the items and change the slider position
    // so it doesn't look like anything has changed.
    if(deltaX > 0 &&
        $twitterFrontItems.first().offset().left > 0 &&
        $twitterFrontItems.last().offset().left - $(document).width() > 0)
    {
        // Move the last item to the first position.
        $twitterFront.prepend($twitterFrontItems.last());
        // Update the slider position to hide the change.
        $twitterFront.css('left', parseInt($twitterFront.css('left')) - $twitterFrontItems.outerWidth(true));
        lastPosition_front = lastPosition_front - $twitterFrontItems.outerWidth(true);
        // Update the cached items to reflect the new order.
        $twitterFrontItems = $twitterFront.find('.twitter-item');
    } else if(deltaX < 0 &&
        $twitterFrontItems.last().offset().left + $twitterFrontItems.outerWidth() - $(document).width() < 0 &&
        $twitterFrontItems.first().offset().left + $twitterFrontItems.outerWidth() < 0)
    {
        // Move the first item to the last position.
        $twitterFront.append($twitterFrontItems.first());
        // Update the slider position to hide the change.
        $twitterFront.css('left', parseInt($twitterFront.css('left')) + $twitterFrontItems.outerWidth(true));
        lastPosition_front = lastPosition_front + $twitterFrontItems.outerWidth(true);
        // Update the cached items to reflect the new order.
        $twitterFrontItems = $twitterFront.find('.twitter-item');
    }

    // Same for the back.
    if(-deltaX > 0 &&
        $twitterBackItems.first().offset().left > 0 &&
        $twitterBackItems.last().offset().left - $(document).width() > 0)
    {
        // Move the last item to the first position.
        $twitterBack.prepend($twitterBackItems.last());
        // Update the slider position to hide the change.
        $twitterBack.css('left', parseInt($twitterBack.css('left')) - $twitterBackItems.outerWidth(true));
        lastPosition_back = lastPosition_back - $twitterBackItems.outerWidth(true);
        // Update the cached items to reflect the new order.
        $twitterBackItems = $twitterBack.find('.twitter-item');
    } else if(-deltaX < 0 &&
        $twitterBackItems.last().offset().left + $twitterBackItems.outerWidth() - $(document).width() < 0 &&
        $twitterBackItems.first().offset().left + $twitterBackItems.outerWidth() < 0)
    {
        // Move the first item to the last position.
        $twitterBack.append($twitterBackItems.first());
        // Update the slider position to hide the change.
        $twitterBack.css('left', parseInt($twitterBack.css('left')) + $twitterBackItems.outerWidth(true));
        lastPosition_back = lastPosition_back + $twitterBackItems.outerWidth(true);
        // Update the cached items to reflect the new order.
        $twitterBackItems = $twitterBack.find('.twitter-item');
    }

    // If the drag is over, update the status.
    if(dragend && isdrag) { sliderDragging = false; }
    // If the drag is over, update the position.
    if(dragend || !isdrag) {
        lastPosition_front = newPosition_front;
        lastPosition_back = newPosition_back;
    }
}

/*var hoverInterval;
 var twitterMousePos = -1;
 $(document).mousemove(function(e) {
 twitterMousePos = e.pageX;
 });
 $(function() {
 $("#twitter-front").hover(
 function() {
 hoverInterval = setInterval(function() {
 if(!sliderDragging) {
 var isLeft = twitterMousePos / $(window).width() < .5;
 if(isLeft) {
 orbitSlide(-1, false, false);
 } else {
 orbitSlide(1, false, false);
 }
 }
 }, 10);
 },
 function() {
 clearInterval(hoverInterval);
 }
 );
 });*/