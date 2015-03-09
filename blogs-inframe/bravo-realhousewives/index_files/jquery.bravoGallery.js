(function( $ ){
  $.fn.bravoEmbedGallery = function() {

    var next_gallery = $('.replay-gallery a', this);

    next_gallery.click(function() {

      $('#gallery').addClass('gallery-blured');
      $('.gallery-description').addClass('gallery-blured');
      jQuery.get(
        Drupal.settings.bravo_photo_gallery.embed_ajax_callback + '/' + $(this).attr('data-canonical') + '/embedded',
        function (response) {
          data = Drupal.parseJson(response);
          Drupal.settings.bravo_photo_gallery.photo_data = data.settings;
          $('#gallery').removeClass('gallery-blured');
          $('.gallery-description').removeClass('gallery-blured');
          $('.gallery-embed-ajax-wrapper').html(data.html);

          $('#gallery').bravoGallery(true);

          $('#gallery .pager').hide();

          $('#gallery').hover(function(){$('#gallery .pager').show();});
          $('#gallery').mouseleave(function() {$('#gallery .pager').hide();});
          $.fn.bravoGallery.updateAd();
          hoverEmbedSetup();
        }
      );
      return false;
    });
  };

  $.fn.bravoGallery = function(silent) {
    var images = $('.items li', this);
    var counter = $('.counter', this);
    var current_image = null;
    var page_num = null;
    var silent_mode = silent;
    var stored_hash_value = '#';

    /**
     * Helper "method". It updates hash value only if
     * bravoGallery image wasn't initialzed with silent mode flag.
     */
    var setHash = function(hash_value) {
      if (!silent_mode) {
        window.location.hash = hash_value;
      }
      else {
        stored_hash_value = "#" + hash_value;
      }
    };

    var getHash = function() {
      if (!silent_mode) {
        return window.location.hash;
      }
      else {
        return stored_hash_value;
      }
    };

    var hash = window.location.hash.split('#')[1];

    if (hash == 'image-[nid]') {
      hash = undefined;
      setHash('');
    }

    // If hash is unknown, cast it to empty string.
    if ((typeof hash === 'undefined') || !hash.match(/image-\d+/)) {
      hash = '';
    }

    if (Drupal.settings.bravo_photo_gallery !== undefined) {
      current_image = Drupal.settings.bravo_photo_gallery.current_photo_index;
    }
    else {
       if (hash === '') {
          current_image = 1;
       }
    }

    // Check if hash is around.
    if (typeof hash === 'undefined') {
      hash = '';
    }

    // Processing images in slideshow.
    var count = 0;
    var positions = [];
    images.each(function() {
      count++;
      positions[$(this).attr('class').split(' ')[0]] = count;
      $(this).hide();
      $(this).addClass('item-'+ count);
    });

    if ($('.gallery-embed-ajax-wrapper').length > 0) {
      hash = '';
    }


    if (hash !== 'undefined') {
      if (hash !== '') {
        var Classes = $('.' + hash).attr('class');
        var items = Classes.split(' ');
        var index = items[2].split('item-');
        current_image = index[1];
      }
    }
     if (current_image === 'undefined' || isNaN(Number(current_image))) {
       current_image = 1;
     }


    // Prevent broken gallery display.
    var image_id = hash.match(/([0-9]+)/gi);
    if (!hash.match(/image\-([0-9]+)/gi) || (hash.match(/image\-([0-9]+)/gi) && $('li.image-'+ image_id).length === 0)) {
      hash = '';
    }

    // If we are no image no.1, remove first class from wrapper
    if (current_image > 1) {
      $(this).removeClass('first');
    }

    // Override image path, if we are entering directly
    if (current_image !== undefined) {
      hash = positions[current_image];
    }

    // Show the first image, unless hash is specified.
    if (typeof(hash) == 'undefined' || hash === '') {
      if (images.length > 0) {
        $('.gallery-loading').fadeOut('fast');
        images.siblings('li.item-' + current_image).bravoLoadImage().fadeIn('fast');
        page_num = current_image;
        hash = images.siblings('li.item-' + current_image).attr('class').split(' ')[0];
        $.fn.bravoGallery.updateShareWidget(hash.substr(6));
        // Comments disable.
        // $.fn.bravoGallery.updateComments(hash.substr(6));
        $('#gallery-thumbnail-nav li').removeClass('active');
        $('#gallery-thumbnail-nav li.' + hash).addClass('active');
      }

      // If we are on first page, hide prev button
      if (page_num <= 1) {
        $.fn.bravoGallery.hidePrevButton();
      }
    }

    // Display the image defined in the hash.
    else {
      $('.gallery-loading').fadeOut('fast');
      images.siblings('li.'+ hash).fadeIn('fast');
      page_num = positions[hash];
      $.fn.bravoGallery.updateShareWidget(hash.substr(6));
      //  $.fn.bravoGallery.updateComments(hash.substr(6));
      $('#gallery-thumbnail-nav li').removeClass('active');
      $('#gallery-thumbnail-nav li.' + hash).addClass('active');

      if (images.siblings('li.' + hash).prev().lenght === 0) {
        $.fn.bravoGallery.hidePrevButton();
      }
    }

    // Create the mini pager.
    counter.html('<span class="current_slide">' + page_num + '</span> of <span class="total_slides">' + count + '</span>');

    // Enable the next controls.
    $('.pager-next', this).click(function() {
      var page = parseInt(counter.children('.current_slide').html(), 10);
      var next = images.siblings('li:visible').hide().next();

      if (next.length > 0) {
        $.fn.bravoGallery.showPrevButton();
        next.bravoLoadImage().fadeIn('fast');
        current_image = next.attr('class').split(' ')[0];
        setHash(next.attr('class').split(' ')[0]);
        counter.children('.current_slide').html((page + 1));
        $('#gallery-thumbnail-nav li').removeClass('active');
        $('#gallery-thumbnail-nav li.' + current_image).addClass('active');
      }
      else {
        if($(this).hasClass('button-replay')) {
          images.siblings('li.item-1').bravoLoadImage().fadeIn('fast');
          current_image = images.siblings('li.item-1').attr('class').split(' ')[0];
          setHash(images.siblings('li.item-1').attr('class').split(' ')[0]);
          counter.children('.current_slide').html(1);
          $('#gallery-thumbnail-nav li').removeClass('active');
          $('#gallery-thumbnail-nav li.' + current_image).addClass('active');
        } else if ($('.gallery-embed-ajax-wrapper').length > 0) {
          jQuery(".gallery-embed-ajax-wrapper .views-row-last a").trigger('click');
          return false;
        } else {
          var href = jQuery( ".views-row-last a.imagecache-248x165").attr( "href");
          jQuery("a.pager-next").attr( "href", href);
          window.location = href;
        }
      }
      if (isNaN(parseInt(getHash().substr(7), 10))) {
        $('body').addClass('replay-page');
        setHash('replay');
        $.fn.bravoGallery.updateAd(window.location.hash.substr(7));
      }
      else {
        $('body').removeClass('replay-page');
        $.fn.bravoGallery.updateAd(getHash().substr(7));
        $.fn.bravoGallery.updateShareWidget(getHash().substr(7));
        // $.fn.bravoGallery.updateComments(window.location.hash.substr(7));
      }

      return false;
    });

    // Enable the previous controls.
    $('.pager-prev', this).click(function() {
      var page = parseInt(counter.children('.current_slide').html(), 10);
      var prev = images.siblings('li:visible').hide().prev();
      if (prev.length > 0) {

        prev.bravoLoadImage().fadeIn('fast');
        current_image = prev.attr('class').split(' ')[0];
        setHash(prev.attr('class').split(' ')[0]);
        counter.children('.current_slide').html((page - 1));
        $('#gallery-thumbnail-nav li').removeClass('active');
        $('#gallery-thumbnail-nav li.' + current_image).addClass('active');
      }
      else {
        images.siblings('li.last').bravoLoadImage().fadeIn('fast');
        current_image = images.siblings('li.last').attr('class').split(' ')[0];
        setHash(images.siblings('li.last').attr('class').split(' ')[0]);
        counter.children('.current_slide').html(count);
        $('#gallery-thumbnail-nav li').removeClass('active');

        $('#gallery-thumbnail-nav li.' + current_image).addClass('active');
      }

      if ((page - 1) <= 1) {
        $.fn.bravoGallery.hidePrevButton();
      }

      if (isNaN(parseInt(getHash().substr(7), 10))) {
        $('body').addClass('replay-page');
        setHash('replay');
      }
      else {
        $('body').removeClass('replay-page');
        $.fn.bravoGallery.updateAd(getHash().substr(7));
        $.fn.bravoGallery.updateShareWidget(getHash().substr(7));
        // $.fn.bravoGallery.updateComments(window.location.hash.substr(7));
      }

      return false;
    });

    // Thumbnail controls
    $('#gallery-thumbnail-nav li').click(function() {
      current_thumbnail = $(this).attr('class').split(' ')[0];
      images.siblings('li:visible').hide();
      $('#gallery .items li.' + current_thumbnail).fadeIn('fast');
      setHash(current_thumbnail);
      current_page = $('#gallery .items li.' + current_thumbnail).attr('class').split('item-')[1];
      counter.children('.current_slide').html(current_page);
      $(this).siblings().removeClass('active');
      $('#gallery-thumbnail-nav li.' + current_thumbnail).addClass('active');
      $.fn.bravoGallery.updateAd(getHash().substr(7));
      $.fn.bravoGallery.updateShareWidget(getHash().substr(7));
      // $.fn.bravoGallery.updateComments(window.location.hash.substr(7));
    });

  };

  $.fn.bravoLoadImage = function() {
    return this.each(function() {
      var placeholder = $(this).find('.image-placeholder:not(.processed)');

      var source_placeholder = $(this).find('.image-placeholder');
      var alt = placeholder.attr('data-alt');
      var src = placeholder.attr('data-src');
      var title = source_placeholder.attr('data-title');
      var description = source_placeholder.attr('data-body');

    if (title !== '' || description !== '') {
      $('#block-bravo_photo_gallery-caption h2').html(title);
      $('#block-bravo_photo_gallery-caption .description').html(description);
      $('#block-bravo_photo_gallery-caption').css('display', 'block');

    }
    else {
      $('#block-bravo_photo_gallery-caption h2').html('');
      $('#block-bravo_photo_gallery-caption .description').html('');
      $('#block-bravo_photo_gallery-caption').css('display', 'none');
    }
      placeholder.addClass('processed').append("<img src='" + src + "' alt='" + alt + "' />");
    });

  };

  $.fn.bravoGallery.share_widget_cache = {};
  $.fn.bravoGallery.last_timeout = 0;

  $.fn.bravoGallery.updateShareWidget = function(current_image_id) {
    var data = Drupal.settings.bravo_photo_gallery.photo_data[current_image_id];

    if (data !== undefined) {
      var title = data['title'];
      var url = data['url'];

      // It's ugly, but putting this on js variable doesn't seems very good idea.
      // It can be replaced with some dom API reuse or js template (but I
      // don't want to put additional js lib to frontend).
      var html_code = '<div class="gallery_addthis_toolbox addthis_toolbox addthis_default_style ">' + "\n" +
        '<a class="addthis_button_email at300b" style="margin-top:-2px;"  addthis:title="' +
        title + '"  addthis:url="' + url +
        '" target="_blank" title="Email"><img border="0" alt="Share" src="/media/addthis/icon-email-v4.png" /></a>' +
        '<a class="addthis_button_facebook_share" fb:share:href="' + url +
        '" fb:share:layout="horizontal"></a>' +
        '<a class="addthis_button_tweet" addthis:title="' +
        title + '" tw:url="' + url +
        '"></a><a class="addthis_button_pinterest_pinit" addthis:title="' +
        title + '" addthis:url="' + url + '"></a>' +
        '<a class="addthis_button_google_plusone" addthis:title="' + title +
        '" addthis:url="' + url + '" g:plusone:size="medium" g:plusone:count="false"></a>' +
        '<a class="addthis_pill_style gallery_addthis_counter addthis_counter" addthis:title="' + title +
        '" addthis:url="' + url + '"></a>' +
      '</div>';
      $('.share-wrapper').html(html_code);
      addthis.toolbox('.gallery_addthis_toolbox');
      addthis.counter('.gallery_addthis_counter');
    }
    else {
      $('.share-wrapper').html('');
    }
  };

// Comments .disable.
//   $.fn.bravoGallery.updateComments = function(current_image_id) {
//    document.getElementById(current_image_id).submit();
//    jQuery( "span.livefyre-commentcount").attr( "data-lf-article-id", current_image_id);
//  };

  $.fn.bravoGallery.changeSentry = 0;

  /**
   * Update Ad region on every X image switch in photogallery.
   */
  $.fn.bravoGallery.updateAd = function(nid) {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      // custom ad refreshing & omniture reporting only applicable to referenced (embedded) galleries
      if (typeof Drupal.settings.bravo_photo_gallery.embedded_mode != 'undefined'  && Drupal.settings.bravo_photo_gallery.embedded_mode === true) {
        bravo.ad.refreshThis($('#ad-300x250-8-8'));
        if (typeof s !== 'undefined' && s.t) {
          if (typeof Drupal.settings.bravo_photo_gallery.embedded_omniture != 'undefined') {
            // console.log(Drupal.settings.bravo_photo_gallery.embedded_omniture);
            $.each(Drupal.settings.bravo_photo_gallery.embedded_omniture, function(key, value) {
              s[key] = value;
            });
          }
          s.t();
        }
      }
      else {
        bravo.ad.refresh();
      }
    }
  };

  $.fn.bravoGallery.showPrevButton = function() {
    $('#gallery').removeClass('first');
  };

  $.fn.bravoGallery.hidePrevButton = function() {
    $('#gallery').addClass('first');
  };

})( jQuery );


$(document).ready(function() {

  if ($('.gallery-embedded-wrapper #gallery').length > 0) {
    $('.gallery-embedded-wrapper #gallery').bravoGallery(true);
  }
  else {
    $('#gallery').bravoGallery(false);
  }
  $('#gallery .pager').hide();
  $('#gallery').hover(function(){$('#gallery .pager').show();});
  $('#gallery').mouseleave(function() {$('#gallery .pager').hide();});
});


var hoverEmbedSetup = function() {
  var runOnce = 0;
  $('.gallery-embedded-wrapper #gallery').bravoEmbedGallery();

  if ($('#overlay-gallery').length === 0) {
    var overlay = $('<div id="overlay-gallery"> </div>');
    overlay.appendTo(document.body);
  }

  $('.gallery-description-slidebox').css('height', '100%');

  // hover action
  $('.gallery-embedded-wrapper').hover(function() {
    // only call intial ad load once on hover
    if (runOnce === 0) {
      $.fn.bravoGallery.updateAd();
    }
    runOnce = 1;

    $('.gallery-description-slidebox').animate({width: '986px'}, 500);
    var curHeight = $('.gallery-description-slidebox').height();
    $('.gallery-description-slidebox').css('height', 'auto');
    var autoHeight = $('.gallery-description-slidebox').height();
    $('.gallery-description-slidebox').height(curHeight).animate({height: autoHeight}, 250);

  }, function() {
    if ($(".gallery-embedded-wrapper").hasClass("clicked")) {
      $('.gallery-description-slidebox').stop(true, true);
      $('.gallery-description-slidebox').css('width', '986px');
      $('.gallery-description-slidebox').css('height', 'auto');
    } else {
      $('.gallery-description-slidebox').stop(true, true);
      $('.gallery-description-slidebox').animate({height: '100%'}, 250);
      $('.gallery-description-slidebox').animate({width: '648px'}, 250);
    }
  });


  if ($(".gallery-embedded-wrapper").hasClass("clicked")) {
    $('.gallery-description-slidebox').css('width', '648px');
    $('.gallery-description-slidebox').css('height', 'auto');
  }

  // click action

  $('#gallery, #gallery a').click(function() {
    $(".gallery-embedded-wrapper").addClass("clicked");
    $('.node-type-blog #overlay-gallery').css('filter', 'alpha(opacity=80)');
    $('.node-type-blog #overlay-gallery').fadeIn("slow");
    var curHeight = $('.gallery-description-slidebox').height();
    $('.gallery-description-slidebox').css('height', 'auto');
    var autoHeight = $('.gallery-description-slidebox').height();
    $('.gallery-description-slidebox').height(curHeight).animate({height: autoHeight}, 250);

  });

  // close overlay on click

  $('.node-type-blog #overlay-gallery').click(function() {
    $(this).fadeOut("slow");
    $('.gallery-description-slidebox').animate({height: '100%'}, 250);
    $('.gallery-description-slidebox').animate({width: '648px'}, 250);
    $(".gallery-embedded-wrapper").removeClass("clicked");
  });

  // close overlay and box on close button

  $('.gallery-description-slidebox a').click(function() {
    $('.gallery-description-slidebox').animate({height: '100%'}, 250);
    $('.gallery-description-slidebox').animate({width: '648px'}, 250);
    $('.node-type-blog #overlay-gallery').fadeOut("slow");
    $(".gallery-embedded-wrapper").removeClass("clicked");
  });

  // caption and arrows position

  var titleheight = $('h2.embedded-gallery-title').height();
  var MarginTop = parseInt( $(".node-type-blog #block-bravo_photo_gallery-caption").css("marginTop"), 10);

  $('.node-type-blog #block-bravo_photo_gallery-caption').css('margin-top', MarginTop + titleheight);
  $('.node-type-blog #gallery .pager .pager-prev, .node-type-blog #gallery .pager .pager-next').css('top', titleheight + 257);

};

/**
 *  Embedded gallery
 */

$(document).ready(function() {
  hoverEmbedSetup();
});
