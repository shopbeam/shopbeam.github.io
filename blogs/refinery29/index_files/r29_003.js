define(['jquery', 'r29/r29.ab', 'r29/r29.cookie', 'r29/r29.events', 'r29/r29.placeholder'], function($, AB, Cookie, Events, Placeholder){

  var currentAnimation = null,
  pushdownWeight = environment.socialPushdownWeight || 50,
  variantMap = {
    id: 'social_bar',
    step_name: 'display_module',
    weighted: true,
    cookie_name: 'social_bar',
    variants: [
      {
        name: 'facebook', 
        code: facebookSocialbarInit,
        weight: pushdownWeight  
      },
      {
        name: 'email',
        code: emailSocialbarInit,
        weight: 100 - pushdownWeight 
      }
    ]
  },
  stalkerBarTemplate = $('#stalker-bars').html(),
  named_lists, Email;

  function _init() {
    var isDismissed = Cookie.get('has_dismissed_social_bar');
    if ( isDismissed === null || isDismissed === 'false')
    {
      if (Cookie.get('social_bar') === null) {
        Cookie.set('social_bar', Math.random(), 86400);
      }

      if (environment.socialPushdownEnable) {
        AB.render(variantMap);
      }
      if (isDismissed === null) {
        Cookie.set('has_dismissed_social_bar', false, 86400);
      }
    }
  }

  function facebookSocialbarInit() {
    Events.subscribe('STALKER_BAR_FACEBOOK_LIKED', onFbLiked);
    $('#stalker-bars').before(_.template(stalkerBarTemplate, {barType: 'facebook'}));
    // find our close button remove any click events on it, sub it for ours
    $('.social_bar .close').on('click', onSocialBarClose);
    // TODO: subscribe to slideshow ready event. run the animation in.
    currentAnimation = setTimeout(function(){
      $('.social_bar').addClass('show');
    }, 3000);
    
    Events.publish('GOOGLE_TRACK_EVENT', {category: 'Facebook Acquisition',action: 'Main Facebook Page' , label: 'Pushdown Saw'});
  }

  function emailSocialbarInit() {
    $('#stalker-bars').before(_.template(stalkerBarTemplate, {barType: 'mail'}));
    $('.social_bar > .close').on('click', onSocialBarClose);
    currentAnimation = setTimeout(function(){
      $('.social_bar').addClass('show');
    }, 3000);
    
    Placeholder.init();

    Events.publish('GOOGLE_TRACK_EVENT', {category: 'Email Acquisition', 
      action: 'Pushdown' , label: 'Pushdown Saw'});

   require(['r29/r29.emailsignup'], onEmailModuleLoaded);
  }
  
  function onEmailModuleLoaded(email){
    Email = email;
    Email.set({target: $('.social_bar'), useDropdownOptions: false, 
      onEmailSubmit: onEmailSubscribeSubmit});
  }

  function onEmailSubscribeSubmit(e) {

    var email = $('.social_bar .signup input[type="email"]').val().match(/^[\w-\._\+%]+@(?:[\w-]+\.)+[\w]{2,6}$/),
    $error = $('.social_bar .error').css('display', 'none'),
    lists, formData;

    log('onEmailSubscribeSubmit', $error);
    if (email !== null) {
      lists = ['main_everywhere'];
      named_lists = '<strong>Everywhere</strong>';
      
      formData = {
        email: email.toString(),
        email_lists: lists,
        source: 'signup dropdown module',
        source_type: 'organic',
        welcome: 'welcome_organic',
        category_id: environment.topCategoryId,
        interest_category: $('.social_bar input[name=interest_category]').val(),
        interest_subcategory: $('.social_bar input[name=interest_subcategory]').val()
      }

      Email.setSubscription(formData, 
          named_lists, 
          onSubscribeSuccess,
          onSubscribeError);
    } else {
      // let the user know that is not an email
      $error.css('display', 'block');
      if ($('.social_bar .signup input[type="email"]').val().length) {
        $error.find('span').text('Please enter a valid email');
      } else {
        $error.find('span').text('Please enter an email');
      }

      $('.social_bar input').on('click', function(){
        $error.css('display', 'none');
      });
    }

    return false;
  }

  function onSubscribeSuccess(data, txt, xhr) {
    
    var newThanksString = $('.social_bar .thanks section p:first').text()
      .replace(/#NAMED_LISTS#/, named_lists)
      .replace(/#EMAIL_ADDRESS#/, '<strong>'+$('.social_bar input[type="email"]').val()+'</strong>');

    $('.social_bar .thanks')
      .find('section p:first')
      .html(newThanksString)
    .end()
    .removeAttr('hidden')
      .find('.close')
      .off('click')
      .on('click', function(e) {
        if ($('.social_bar .thanks').is(':visible')) {
          $('.social_bar .thanks').addClass('last-animation animating')
            .attr('hidden', true);
          setTimeout(function() {
            $('.social_bar .thanks').removeClass('last-animation animating');
            $('.social_bar span.close').trigger('click');
          }, 400);
        }
        return false;
      });

    Events.publish('GOOGLE_TRACK_EVENT', {category: 'Email Acquisition', 
      action: 'Pushdown' , label: 'Pushdown Sign Up'});
      
    $('.social_bar .signup').addClass('submitted');

    }

  function onSubscribeError(data, txt, xhr) {
    console.error('Error >>> r29.emailsignup.js :: getMailingError()', xhr);
  }

  function onFbLiked() {
    // for the tooltip to appear we need to remove the overflow
    $('.social_bar').css('overflow', 'visible');
  }

  /**
   * UI Handlers
   **/
  function onSocialBarClose(e) {
    $(e.currentTarget).parent().css('overflow', 'hidden').removeClass('show');
    Cookie.set('has_dismissed_social_bar', true, 86400);
  }

  if (typeof environment.socialPushdownEnable !== undefined
      && environment.socialPushdownEnable === true) {
    _init();
  }

  return {};
});
