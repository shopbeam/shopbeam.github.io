/* Author: 
*/

//GLOBAL

var tm = {
  handleResize: function (){
    if (Modernizr.mq('only screen and (max-width: 767px)')){
      $('.post-slide').width('300px');
    }
    if (Modernizr.mq('only screen and (min-width: 768px) and (max-width:1019px)')){
      $('.post-slide').width('400px');
    }
    if (Modernizr.mq('only screen and (min-width: 1020px)')){
      $('.post-slide').width('630px');
    }
    $('body').attr('data-content', $(window).height() + 'x' +$(window).width());
    ($(window).width() > 767) ?
      $('#storeguide, #searchform, #s').removeClass('hidden'):
      $('#storeguide, #searchform, #s, #nav-network, #nav-main').addClass('hidden');
    ($(window).width() > 767 && $(window).width() < 1020 ) ?
      $('#nav-main-btn').html('Top Categories'):
      $('#nav-main-btn').html(''); 
  },
  toolbar:''
};

// as soon as DOM is ready
$(document).ready(function() {
  tm.handleResize();
  $(window).on('load resize', function(){
    if (!Modernizr.touch) tm.handleResize();
  });
  $(window).on('orientationchange', function(){
    if (Modernizr.mq('only screen and (min-width: 765px)')) {
      tm.handleResize();
    }
  });
  $('html').click(function() {
    $('#nav-main').addClass('hidden');
    $('#nav-network').addClass('hidden');
  });
  $('#nav-main').click(function(event){
    event.stopPropagation();
  });
  $('#nav-network').click(function(event){
    event.stopPropagation();
  });

  $('#nav-main-btn').on('click', function(e){
    e.stopPropagation();
    $('#nav-network').addClass('hidden');
    if ($(window).width() < 768) $('#storeguide, #searchform, #s').addClass('hidden');
    $('#nav-main').toggleClass('hidden');
  });

  $('#logo-network').on('click', function(e){
    e.stopPropagation();
    $('#nav-main').addClass('hidden');
    if ($(window).width() < 768) $('#storeguide, #searchform, #s').toggleClass('hidden')
    $('#nav-network').toggleClass('hidden');
  });

  $('.post-slide-content').click(function(event) {
    $('.post-slider-next').click();
    //window.writeCaptureRefresh();
  });
  $('.post-slide-content').hover(
    function () {
      $('.post-slider-next').addClass("hover");
    }, 
    function () {
      $('.post-slider-next').removeClass("hover");
    }
  );



  // $('a.swipelink').click(function(event) {
  //   event.preventDefault();
  //   console.log('a hit');
  // });

});
// after page is fully loaded
$(window).load(function() {
  if (Modernizr.mq('only screen and (min-width: 765px)')){
  	$('#js-top-links').load('http://www.highsnobiety.com/mostpopular/');
    $('#js-follow-us-fb').sharrre({
      share: {
        facebook:true
      },
      action: 'like',
      click: function(api, options){
        api.simulateClick();
        api.openPopup('facebook');
      },
      buttons: {
        facebook: {
        url: 'http://www.facebook.com/highsnobiety',  //if you need to personalize url button
        action: 'like',
        layout: 'button_count',
        width: '50',
        send: 'true',
        faces: 'false',
        colorscheme: '',
        font: '',
        lang: 'en_US'
        },
      },
      enableHover: false,
      enableCounter: false,
      enableTracking: true
    }); 
  }
  // $('#js-share-area').sharrre({
  //   share: {
  //     facebook: true,
  //     twitter: true,
  //     pinterest: true,
  //     googlePlus: true,
  //   },
  //   buttons: {
  //     facebook: {
  //       layout: 'button_count',
  //       action: 'share',
  //     },
  //     twitter: {count: 'horizontal'},
  //     pinterest: {media: $('#js-share-area').data('media'), description: $('#js-share-area').data('text'), layout: 'horizontal'},
  //     googlePlus: {size: 'medium'},
  //   },
  //   enableHover: false,
  //   enableCounter: false,
  //   enableTracking: true
  // });
  //tm.initDirt();

  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
  
  $("img").lazyload({
      event : "sporty"
  }); 
  $("img").trigger("sporty"); 
});

$(document).ready(function() {
  if (Modernizr.touch && Modernizr.csstransforms){
    $('.ad-slide').remove();
    $('.post-slide').eq(0).addClass('post-slider-active-slide');
    window.homeleadslider = new Swipe(document.getElementById('js-post-slider-wrap'), {
        speed: 400,
        callback: function(event, index, elem) {
            $('#js-post-slide-current-count').text(((index + 1 ) < 10 ? '0' : '') + (index + 1));
            $('.post-slider-active-slide').removeClass('post-slider-active-slide');
            $('.post-slide').eq(index).addClass('post-slider-active-slide');
        }
    });
    $('.post-slide').removeClass('hidden');
  } else {
    $('#js-post-slider-wrap').carousel({
      slider: '.post-slider',
      slide: '.post-slide',
      addNav: true,
      addPagination: false,
      namespace: 'post-slider',
      speed: 300 // ms.
    })
    .bind({
      'post-slider-aftermove' : function() {
        var tempindex = $('.post-slider-active-slide').data('index');
        $('#js-post-slide-current-count').text((tempindex < 10 ? '0' : '') + (tempindex));
        if ($('.post-slider-active-slide').hasClass('ad-slide')){
          //$('.ad-frame').attr('src','http://hsnb.dev.pixelshelf.com/ad-load/?zone='+ cmnunt_zone);
          //$('.post-slider-next').addClass('post-slider-next-small');
          //document.getElementById('ad-frame').contentDocument.location.reload(true);
        }else{
          //$('.post-slider-next').removeClass('post-slider-next-small');
        }
      }
    });
    $('.post-slide').removeClass('hidden');
  }

  $('#js-post-slide-fullscreen').on('click', function(event){
    event.preventDefault();
    $('.post-slider-active-slide').find('a').click();
  })


 if (Modernizr.mq('only screen and (min-width: 768px)')){
    $('#myTab').tab('show')
  tm.toolbar = '';
}

	

  var myPhotoSwipe = $(".swipelink").photoSwipe({
    captionAndToolbarFlipPosition: true,
    captionAndToolbarAutoHideDelay: 4000,
    imageScaleMethod: 'fitNoUpscale',
    allowUserZoom: false,
    getToolbar: function(){
      return '</div><div class="ps-logo"></div><div class="ps-ad">' + tm.toolbar +'</div></div><div class="ps-toolbar-close" style="padding-top: 12px;">Close</div><div class="ps-toolbar-previous" style="padding-top: 12px;">Previous</div><div class="ps-toolbar-next" style="padding-top: 12px;">Next</div>';
      // NB. Calling PhotoSwipe.Toolbar.getToolbar() wil return the default toolbar HTML
    },
    getImageCaption: function(el){
      
      var captionText, captionEl, previousButton, captionTextWrapper,indexArea;
      
      // Get the caption from the alt tag
      if (el.nodeName === "IMG"){
        captionText = el.getAttribute('data-description'); 
      }
      var i, j, childEl;
      for (i=0, j=el.childNodes.length; i<j; i++){
        childEl = el.childNodes[i];
        if (el.childNodes[i].nodeName === 'IMG'){
          captionText = childEl.getAttribute('data-description');
          indexText = childEl.getAttribute('data-index');
        }
      }
      
      // Return a DOM element with custom styling
      captionEl = document.createElement('div');
      captionEl.style.cssText = 'font-weight: bold;';
      indexArea = document.createElement('div');
      indexArea.className = 'slide-count-container';
      indexArea.innerHTML = '<span class="slide-count-label">No.</span><span id="js-current-count">'+indexText+'</span><span>/</span><span id="js-total-count" >'+ (document.getElementById('js-post-slider').getElementsByTagName('img').length / 2 ) +'</span>';
      captionEl.appendChild(indexArea);
      captionTextWrapper = document.createElement('div');
      captionTextWrapper.className = 'caption-text-wrapper';
      captionTextWrapper.innerHTML = captionText;
      captionEl.appendChild(captionTextWrapper);
      navigationButtons = document.createElement('div');
      navigationButtons.className = "navigationButtons";
      previousButton = document.createElement('div')
      previousButton.className = "ps-toolbar-previous";
      previousButton.innerHTML = "Previous";
      nextButton = document.createElement('div')
      nextButton.className = "ps-toolbar-next";
      nextButton.innerHTML = "Next";
      navigationButtons.appendChild(previousButton);
      navigationButtons.appendChild(nextButton);
      captionEl.appendChild(navigationButtons)
      return captionEl;
      
      
      // Alternatively you can just pass back a string. However, any HTML 
      // markup will be escaped
    }
  
  });
  
  if (!Modernizr.touch){
    var isNotClicking = true;
    
    $(".ps-caption-content .ps-toolbar-previous").live("click", function(){
      $(".ps-toolbar .ps-toolbar-previous").trigger("click");
      isNotClicking = false;
    });
    
    $(".ps-caption-content .ps-toolbar-next").live("click", function(){
      $(".ps-toolbar .ps-toolbar-next").trigger("click");
      isNotClicking = false;
    });
    
        
    $("body").live('mousemove',function(){
      $("body").stop();
      showToolbar();
      $("body").animate({opacity: 1}, 2000, function(){hideToolbar(isNotClicking);});
      isNotClicking = true;
    });
  }
});

function hideToolbar(isNotClicking){
  if(isNotClicking){
    $(".ps-toolbar").removeClass("showTool").addClass("hideTool");
    $(".ps-caption").removeClass("showTool").addClass("hideTool");
    var timeout = setTimeout(function() { $('#ad-leaderboard').remove(); }, 5000); 
  }
}

function showToolbar(){
  $(".ps-toolbar").css("display", "block").removeClass("hideTool").addClass("showTool");
  $(".ps-caption").css("display", "block").removeClass("hideTool").addClass("showTool");
}


(function( win ){
  var doc = win.document;
  
  // If there's a hash, or addEventListener is undefined, stop here
  if( !location.hash && win.addEventListener ){
    
    //scroll to 1
    window.scrollTo( 0, 1 );
    var scrollTop = 1,
      getScrollTop = function(){
        return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
      },
    
      //reset to 0 on bodyready, if needed
      bodycheck = setInterval(function(){
        if( doc.body ){
          clearInterval( bodycheck );
          scrollTop = getScrollTop();
          win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
        } 
      }, 15 );
    
    win.addEventListener( "load", function(){
      setTimeout(function(){
        //at load, if user hasn't scrolled more than 20 or so...
        if( getScrollTop() < 20 ){
          //reset to hide addr bar at onload
          win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
        }
      }, 0);
    } );
  }
})( this );








