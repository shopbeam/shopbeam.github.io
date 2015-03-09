/*
 * jQuery Easy Social Hover Plugin
 * © 2013. WpBrickr
 * 01/06/2013
 */
 

(function($) {
  
  $.fn.esh = function(options){
    
    // Settings
    var settings = $.extend( {
      'background'     : '',
      'opacity'        : 0.8,
      'fadeSpeed'      : 500,
      'effect'         : 'fade-in',
      'direction'      : 'top-bottom',
      'fb_url'         : '',
      'google'         : '',
      'linkedin'       : '',
      'twitter'        : '',
      'pinterest'      : ''
    }, options);
    
    
        //wrap it with div
        $(this).one('load', function() {
          
          var background    = '';
          var html          = '';
          var fix_width     = $(this).width();
          var fix_height    = $(this).height();
          var center_height = fix_height/2;
          var middle        = center_height-25; // Minus margin for social buttons
          var socials       = '<div class="wpb-esh-socials"></div>'
          
          $(this).wrap(function(){
            return '<div class="wpb-esh-wrapper '+$(this).attr('class')+'" style="width:'+$(this).width()+'px; height:'+$(this).height()+'px;"/>';
          });
          
          // Overlay Social buttons
          if (settings.background != '') {
            background = "background: url('" + settings.background + "') top left repeat;";
          }
          
          // Count Icons
          var icon_count = 0;
          
          html += '<div class="wpb-esh-background" style="' + background + 'filter: alpha(opacity=' + (settings.opacity*100) + ');opacity:' + settings.opacity + ';display:none;width:'+$(this).width()+'px;height:'+$(this).height()+'px;"></div>';
          html += '<div class="wpb-esh-overlay" style="display:none;width:'+$(this).width()+'px;height:'+$(this).height()+'px;" align="center">';
          html += '<div class="wpb-social-container">';
          
          // Facebook button
          if (settings.fb_url != '') {
            icon_count++;
            html += '<a href="' + settings.fb_url + '" target="_blank"><div class="wpb-esh-facebook"></div></a>';
          }
          
          // Google button
          if (settings.google != '') {
            icon_count++;
            html += '<a href="' + settings.google + '" target="_blank"><div class="wpb-esh-google"></div></a>';
          }
          
          // LinkedIn button
          if (settings.linkedin != '') {
            icon_count++;
            html += '<a href="' + settings.linkedin + '" target="_blank"><div class="wpb-esh-in"></div></a>';
          }
          
          // Twitter button
          if (settings.twitter != '') {
            icon_count++;
            html += '<a href="' + settings.twitter + '" target="_blank"><div class="wpb-esh-twitter"></div></a>';
          }     
               
          // Pinterest button
          if (settings.pinterest != '') {
            icon_count++;
            html += '<a href="' + settings.pinterest + '" target="_blank"><div class="wpb-esh-pinterest"></div></a>';
          }
          
          html += '<br style="clear:both;"/>';
          html += '</div>';
          html += '</div>';
          
          // Append overlay buttons
          $(this).parent().append(html);
          
          if (icon_count > 0) {
            $('.wpb-social-container').attr('style', 'width:' + icon_count*52 + 'px');
          }
          
          var social_container_height = '50';
          var animating = false;
          
          // Bind hover functions
          $(this).parent().bind('mouseenter', function(){
            var wrapper = $(this);
            
            $('.wpb-esh-background', wrapper).stop().fadeTo(500, settings.opacity);
            
            if (settings.effect == 'show') {
              $('.wpb-esh-overlay', wrapper).css({top:center_height + 'px'}).show();
            } else if(settings.effect == 'fade-in') {
              $('.wpb-esh-overlay', wrapper).css({top:center_height + 'px'}).stop().fadeTo(500, settings.opacity);
              $('.wpb-esh-background', wrapper).stop().fadeTo(500, settings.opacity);
            } else if (settings.effect == 'bounce') {
              
              if (settings.direction == 'top-middle') {
                $('.wpb-esh-overlay',wrapper).show();
                $('.wpb-esh-overlay',wrapper).stop().animate({top:middle}, {duration: 1500, easing: 'easeOutBounce'});
              } else if (settings.direction == 'bottom-middle') {
                $('.wpb-esh-overlay', wrapper).show().css({top:'' + fix_height + 'px'});;
                $('.wpb-esh-overlay', wrapper).stop().animate({top:middle}, {duration: 1500, easing: 'easeOutBounce'});
              } else if (settings.direction == 'top-bottom') {
                if (animating === false) {
                  $('.wpb-esh-overlay', wrapper).css({top:'-' +  social_container_height + 'px'}).show();
                  $('.wpb-esh-overlay', wrapper).stop().animate({top:center_height}, {duration: 1500, easing: 'easeOutBounce'});
                } else {
                  $('.wpb-esh-overlay', wrapper).stop().animate({top:center_height}, {duration: 1500, easing: 'easeOutBounce'});
                }
              } else if (settings.direction == 'bottom-top') {
                $('.wpb-esh-overlay', wrapper).show().css({top:'' + fix_height + 'px'});;
                $('.wpb-esh-overlay', wrapper).stop().animate({top:center_height}, {duration: 1500, easing: 'easeOutBounce'});
              }
              
            }
      
          });
          
          $(this).parent().bind('mouseleave', function(){
            var wrapper = $(this);
              
            if (settings.effect == 'show') {
              $('.wpb-esh-overlay', wrapper).css({top:center_height + 'px'}).hide();
              $('.wpb-esh-background').stop().fadeOut();
            } else if(settings.effect == 'fade-in') {
              $('.wpb-esh-background, .wpb-esh-overlay', wrapper).fadeOut();
            } else if (settings.effect == 'bounce') {
              
              if (settings.direction == 'top-middle') {
                $('.wpb-esh-overlay', wrapper).stop().animate({top:'-' + social_container_height + 'px'}, {duration: 1500, easing: 'easeInOutBack'});
                $('.wpb-esh-background', wrapper).fadeOut(1800);
              } else if (settings.direction == 'bottom-middle') {
                $('.wpb-esh-overlay', wrapper).stop().animate({top:'' + fix_height + 'px'}, {duration: 1500, easing: 'easeInOutBack'});
                $('.wpb-esh-background', wrapper).fadeOut(1800);
              } else if (settings.direction == 'top-bottom') {
                animating = true;
                $('.wpb-esh-overlay', wrapper).stop().animate({top:'' + fix_height + 'px'}, {duration: 1500, easing: 'easeInOutBack', complete: function(){
                  animating = false;
                }});
                $('.wpb-esh-background', wrapper).fadeOut(1800);
              } else if (settings.direction == 'bottom-top') {
                $('.wpb-esh-overlay', wrapper).stop().animate({top:'-' + social_container_height + 'px'}, {duration: 1500, easing: 'easeInOutBack'});
                $('.wpb-esh-background', wrapper).fadeOut(1800);
              }
              
            }
            
          });
          
         }).each(function() {
            if(this.complete) $(this).load();
        });
        
        return $(this);
    
  };
  
})(jQuery);