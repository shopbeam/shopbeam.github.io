// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());



// place any jQuery/helper plugins in here, instead of separate, slower script files.

/* ========================================================
 * bootstrap-tab.js v2.0.3
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* TAB CLASS DEFINITION
  * ==================== */

  var Tab = function ( element ) {
    this.element = $(element)
  }

  Tab.prototype = {

    constructor: Tab

  , show: function () {
      var $this = this.element
        , $ul = $this.closest('ul:not(.dropdown-menu)')
        , selector = $this.attr('data-target')
        , previous
        , $target
        , e

      if (!selector) {
        selector = $this.attr('href')
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
      }

      if ( $this.parent('li').hasClass('active') ) return

      previous = $ul.find('.active a').last()[0]

      e = $.Event('show', {
        relatedTarget: previous
      })

      $this.trigger(e)

      if (e.isDefaultPrevented()) return

      $target = $(selector)

      this.activate($this.parent('li'), $ul)
      this.activate($target, $target.parent(), function () {
        $this.trigger({
          type: 'shown'
        , relatedTarget: previous
        })
      })
    }

  , activate: function ( element, container, callback) {
      var $active = container.find('> .active')
        , transition = callback
            && $.support.transition
            && $active.hasClass('fade')

      function next() {
        $active
          .removeClass('active')
          .find('> .dropdown-menu > .active')
          .removeClass('active')

        element.addClass('active')

        if (transition) {
          element[0].offsetWidth // reflow for transition
          element.addClass('in')
        } else {
          element.removeClass('fade')
        }

        if ( element.parent('.dropdown-menu') ) {
          element.closest('li.dropdown').addClass('active')
        }

        callback && callback()
      }

      transition ?
        $active.one($.support.transition.end, next) :
        next()

      $active.removeClass('in')
    }
  }


 /* TAB PLUGIN DEFINITION
  * ===================== */

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tab')
      if (!data) $this.data('tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


 /* TAB DATA-API
  * ============ */

  $(function () {
    $('body').on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
  })

}(window.jQuery);

/*! (c) Mat Marquis (@wilto). MIT License. http://wil.to/3a */

(function( $, undefined ) {
  var inst = 0;
  
  $.fn.getPercentage = function() {
    var oPercent = this.attr('style').match(/margin\-left:(.*[0-9])/i) && parseInt(RegExp.$1);
    
    return oPercent;
  };
  
  $.fn.adjRounding = function(slide) {
    var $el = $(this),
      $slides = $el.find( slide ),
      diff = $el.parent().width() - $($slides[0]).width();
    
    if (diff !== 0) { 
      $($slides).css( "position", "relative" );
      
      for (var i = 0; i < $slides.length; i++) {
        $($slides[i]).css( "left", (diff * i) + "px" );
      }
    }

    return this;
  };
  
  $.fn.carousel = function(config) {
    
    // Prevent re-init:
    if( this.data( "carousel-initialized" ) ) { return; }
    
    // Carousel is being initialized:
    this.data( "carousel-initialized", true );

    var defaults = {
      slider      : '.slider',
      slide     : '.slide',
      prevSlide   : null,
      nextSlide   : null,
      slideHed    : null,
      addPagination : false,
      addNav      : ( config != undefined && ( config.prevSlide || config.nextSlide ) ) ? false : true,
      namespace   : 'carousel',
      speed     : 300
    },
    opt               = $.extend(defaults, config),
    $slidewrap        = this,
    dBody            = (document.body || document.documentElement),
    transitionSupport = function() {
        dBody.setAttribute('style', 'transition:top 1s ease;-webkit-transition:top 1s ease;-moz-transition:top 1s ease;');
      var tSupport = !!(dBody.style.transition || dBody.style.webkitTransition || dBody.style.msTransition || dBody.style.OTransition || dBody.style.MozTransition )
      
      return tSupport;
    },
    carousel = {
      init : function() {       
        inst++;
                
        $slidewrap.each(function(carInt) {
            var $wrap      = $(this),
              $slider    = $wrap.find(opt.slider),
              $slide     = $wrap.find(opt.slide),     
              slidenum   = $slide.length,
              transition = "margin-left " + ( opt.speed / 1000 ) + "s ease",
              tmp        = 'carousel-' + inst + '-' + carInt
              slidewidth = "300px";

            if( $slide.length <= 1 ) {
              return; /* No sense running all this code if the carousel functionality is unnecessary. */
            }
            if (Modernizr.mq('only screen and (min-width: 768px)')){
              slidewidth = "400px";
            }
            if (Modernizr.mq('only screen and (min-width: 1020px)')){
              slidewidth = "630px";
            }
            
            $wrap
              .css({
                overflow             : "hidden",
                width                : "100%"
              })
              .attr('role' , 'application');
            
            $slider
              .attr( 'id', ( $slider[0].id || 'carousel-' + inst + '-' + carInt ) )
              .css({
                "marginLeft"         : "0px",
                "float"              : "left",
                "width"              : 100 * slidenum + "%",
                "-webkit-transition" : transition,
                "-moz-transition"    : transition,
                "-ms-transition"     : transition,
                "-o-transition"      : transition,
                "transition"         : transition
              })
              .bind( 'carouselmove' , carousel.move )
              .bind( 'nextprev'     , carousel.nextPrev )
              .bind( 'navstate'     , carousel.navState );

            $slide
              .css({
                "float": "left",
                width: slidewidth       
              })
              .each(function(i) {
                var $el = $(this);

                $el.attr({
                  role : "tabpanel document",
                  id   : tmp + '-slide' + i
                });

                if( opt.addPagination ) {
                  $el.attr('aria-labelledby', tmp + '-tab' + i);
                }
              });
  
            // Build and insert navigation/pagination, if specified in the options:
            opt.addPagination   && carousel.addPagination();
            opt.addNav      && carousel.addNav();
            
            $slider.trigger( "navstate", { current: 0 });
        });
      },
      addNav : function() {
        $slidewrap.each(function(i) {           
          var $oEl = $(this),
            $slider = $oEl.find(opt.slider),
            currentSlider = $slider[0].id,
            navMarkup = [
              '<ul class="slidecontrols_overlay" role="navigation">',
              ' <li role="presentation" class="' + opt.namespace + '-li-next"><a href="#' + currentSlider + '" class="' + opt.namespace + '-next"></a></li>',
              ' <li role="presentation" class="' + opt.namespace + '-li-prev"><a href="#' + currentSlider + '" class="' + opt.namespace + '-prev"></a></li>',
              '</ul>'
              ].join(''),
            nextprev = {
              nextSlide : '.' + opt.namespace + '-next',
              prevSlide : '.' + opt.namespace + '-prev'
            };

          opt = $.extend(opt, nextprev);
          
          $oEl.prepend(navMarkup);
        });
      },
      // addPagination : function() {
      //  $slidewrap.each(function(i) {
      //    var $oEl        = $(this),
      //      $pagination = $('<ol class="' + opt.namespace + '-tabs" role="tablist navigation" />'),
      //      $slider     = $oEl.find(opt.slider),
      //      $slides     = $oEl.find(opt.slide)
      //      slideNum    = $slides.length,
      //      associated  = 'carousel-' + inst + '-' + i;
            
      //    while( slideNum-- ) {
      //      var hed = $( $slides[ slideNum ] ).find( opt.slideHed ).text() || 'Page ' + ( slideNum + 1 ),
      //        tabMarkup = [
      //          '<li role="presentation">',
      //            '<a href="#' + associated + '-slide' + slideNum +'"',
      //            ' aria-controls="' + associated + '-slide' + slideNum +'"',
      //            ' id="' + associated + '-tab' + slideNum + '" role="tab">' + hed + '</a>',
      //          '</li>'
      //        ].join('');
            
      //      $pagination.prepend(tabMarkup);
      //    };

      //    $pagination
      //      .appendTo( $oEl )
      //      .find('li').keydown( function(e) {
      //        var $el      = $(this),
      //          $prevTab = $el.prev().find('a'),
      //          $nextTab = $el.next().find('a');

      //        switch( e.which ) {
      //          case 37:
      //          case 38:    
      //            $prevTab.length && $prevTab.trigger('click').focus();
      //            e.preventDefault();
      //            break;
      //          case 39: 
      //          case 40:
      //            $nextTab.length && $nextTab.trigger('click').focus();
      //            e.preventDefault();
      //            break;
      //        }
      //      })
      //      .find('a').click( function(e) {
      //        var $el = $(this);
              
      //        if( $el.attr('aria-selected') == 'false' ) { 
      //          var current = $el.parent().index(),
      //            move    = -( 100 * ( current ) ),
      //            $slider = $oEl.find( opt.slider );

      //          $slider.trigger( 'carouselmove', { moveTo: move });
      //        }
      //        e.preventDefault();
      //      });
      //  });
      // },
      addPagination : function() {
        $slidewrap.each(function(i) {
          var $oEl        = $(this),
            $pagination = $('<ol class="' + opt.namespace + '-tabs" role="tablist navigation" />'),
            $slider     = $oEl.find(opt.slider),
            $slides     = $oEl.find(opt.slide)
            slideNum    = $slides.length,
            associated  = 'carousel-' + inst + '-' + i;
            
          while( slideNum-- ) {
            var hed = $( $slides[ slideNum ] ).find( '.feature-archive-meta' ).html() || 'Page ' + ( slideNum + 1 ),
              permalink = $( $slides[ slideNum ] ).find( '.feature-archive-meta' ).data('permalink'),
              tabMarkup = [
                '<li role="presentation">',
                  '<a href="#' + associated + '-slide' + slideNum +'"',
                  ' aria-controls="' + associated + '-slide' + slideNum +'"',
                  ' id="' + associated + '-tab' + slideNum + '" role="tab" >' + hed + '</a>',
                  // ' <a href="' + permalink +'"',
                  // ' role="tab" class="feature-archive-meta-permalink">VIEW FEATURES</a>',
                '</li>'
              ].join('');
            
            $pagination.prepend(tabMarkup);
          };

          $pagination
            .appendTo( $oEl )
            .find('li').keydown( function(e) {
              var $el      = $(this),
                $prevTab = $el.prev().find('a'),
                $nextTab = $el.next().find('a');

              switch( e.which ) {
                case 37:
                case 38:    
                  $prevTab.length && $prevTab.trigger('click').focus();
                  e.preventDefault();
                  break;
                case 39: 
                case 40:
                  $nextTab.length && $nextTab.trigger('click').focus();
                  e.preventDefault();
                  break;
              }
            })
            .find('a.slidelink').click( function(e) {
              var $el = $(this);
              
              if( $el.attr('aria-selected') == 'false' ) { 
                var current = $el.parent().index(),
                  move    = -( 100 * ( current ) ),
                  $slider = $oEl.find( opt.slider );

                $slider.trigger( 'carouselmove', { moveTo: move });
              }
              e.preventDefault();
            });
        });
      },
      roundDown : function(oVal) {
        var val = parseInt(oVal, 10);

        return Math.ceil( (val - (val % 100 ) ) / 100) * 100;
      },
      navState : function(e, ui) {
        var $el          = $(this),
          $slides      = $el.find(opt.slide),
          ind          = -(ui.current / 100),
          $activeSlide = $($slides[ind]);
                
        $el.attr('aria-activedescendant', $activeSlide[0].id);

        // Update state of active tabpanel:
        $activeSlide
          .addClass( opt.namespace + "-active-slide" )
          .attr( 'aria-hidden', false )
          .siblings() 
            .removeClass( opt.namespace + "-active-slide" )
            .attr( 'aria-hidden', true );
            
        // Update state of next/prev navigation:
        if( ( !!opt.prevSlide || !!opt.nextSlide ) ) {
          var $target = $('[href*="#' + this.id + '"]');
          
          $target.removeClass( opt.namespace + '-disabled' );

          if( ind == 0 ) {
            $target.filter(opt.prevSlide).addClass( opt.namespace + '-disabled' );
          } else if( ind == $slides.length - 1 ) {
            $target.filter(opt.nextSlide).addClass( opt.namespace + '-disabled' );
          }
        }
                
        // Update state of pagination tabs:
        if( !!opt.addPagination ) {
          var tabId = $activeSlide.attr('aria-labelledby'),
            $tab  = $('#' + tabId );
          
          $tab
            .parent()
            .addClass(opt.namespace + '-active-tab')
            .siblings()
            .removeClass(opt.namespace + '-active-tab')
            .find('a')
              .attr({
                'aria-selected' : false,
                'tabindex' : -1
              });
              
          $tab.attr({
            'aria-selected' : true,
            'tabindex' : 0
          });
        }
      },
      move : function(e, ui) {
        var $el = $(this);

        $el
          .trigger(opt.namespace + "-beforemove")
          .trigger("navstate", { current: ui.moveTo });
        
        if( transitionSupport() ) {

          $el
            .adjRounding( opt.slide ) /* Accounts for browser rounding errors. Lookin’ at you, iOS Safari. */
            .css('marginLeft', ui.moveTo + "%")
            .one("transitionend webkitTransitionEnd OTransitionEnd", function() {
              $(this).trigger( opt.namespace + "-aftermove" );
            });
            
        } else {          
          $el
            .adjRounding( opt.slide )
            .animate({ marginLeft: ui.moveTo + "%" }, { duration : opt.speed, queue : false }, function() {
              $(this).trigger( opt.namespace + "-aftermove" );
            });
        }
      },
      nextPrev : function(e, ui) {        
        var $el = $(this),
          left = ( $el ) ? $el.getPercentage() : 0,
          $slide = $el.find(opt.slide),
          constrain = ui.dir === 'prev' ? left != 0 : -left < ($slide.length - 1) * 100,
          $target = $( '[href="#' + this.id + '"]');

        if (!$el.is(":animated") && constrain ) {

          if ( ui.dir === 'prev' ) {
            left = ( left % 100 != 0 ) ? carousel.roundDown(left) : left + 100;
          } else {
            left = ( ( left % 100 ) != 0 ) ? carousel.roundDown(left) - 100 : left - 100;
          }

          $el.trigger('carouselmove', { moveTo: left });

          $target
            .removeClass( opt.namespace + '-disabled')
            .removeAttr('aria-disabled');

          switch( left ) {
            case ( -($slide.length - 1) * 100 ):
              $target.filter(opt.nextSlide)
                .addClass( opt.namespace + '-disabled')
                .attr('aria-disabled', true);
              break;
            case 0:
              $target.filter(opt.prevSlide)
                .addClass( opt.namespace + '-disabled')
                .attr('aria-disabled', true);
              break;
          }
        } else {
          var reset = carousel.roundDown(left);

          $el.trigger('carouselmove', { moveTo: reset });
        }

      }
    };
  
    carousel.init(this);

    $(opt.nextSlide + ',' + opt.prevSlide)
      .bind('click', function(e) {        
        var $el = $(this),
          link = this.hash,
          dir = ( $el.is(opt.prevSlide) ) ? 'prev' : 'next',
          $slider = $(link);

          if ( $el.is('.' + opt.namespace + '-disabled') ) { 
            return false;
          }

          $slider.trigger('nextprev', { dir: dir });
        
        e.preventDefault();
      })
      .bind('keydown', function(e) {
        var $el = $(this),
          link = this.hash;

        switch (e.which) {
          case 37:
          case 38:
            $('#' + link).trigger('nextprev', { dir: 'next' });
            e.preventDefault();
            break;
          case 39:
          case 40:
            $('#' + link).trigger('nextprev', { dir: 'prev' });
            e.preventDefault();
            break;
        }
      });

    var setup = {
      wrap : this,
      slider : opt.slider
    };
    $slidewrap.bind( "dragSnap", setup, function(e, ui){
      var $slider = $(this).find( opt.slider ),
        dir = ( ui.direction === "left" ) ? 'next' : 'prev';
      
      $slider.trigger("nextprev", { dir: dir });  
    });


    $slidewrap.filter('[data-autorotate]').each(function() {
      var auto,
        $el         = $(this),
        speed       = $el.attr('data-autorotate'),
        slidenum    = $el.find(opt.slide).length,
        autoAdvance = function() {
          var $slider  = $el.find(opt.slider),
            active   = -( $(opt.slider).getPercentage() / 100 ) + 1;

          switch( active ) {
            case slidenum: 
              clearInterval(auto);

              auto = setInterval(function() {
                autoAdvance();
                $slider.trigger("nextprev", { dir: 'prev' }); 
              }, speed);

              break;
            case 1:
              clearInterval(auto);

              auto = setInterval(function() {
                autoAdvance();                
                $slider.trigger("nextprev", { dir: 'next' }); 
              }, speed);

              break;
          }
        };

      auto = setInterval(autoAdvance, speed);

      $el
        .attr('aria-live', 'polite')
        .bind('mouseenter click touchstart', function() {
          clearInterval(auto);
        });
    });

    return this;
  };
})(jQuery);


$.event.special.dragSnap = {
  setup: function(setup) {

    var $el = $(this),
      transitionSwap = function($el, tog) {
        var speed = .3,
          transition = ( tog ) ? "margin-left " + speed + "s ease" : 'none';

        $el.css({
          "-webkit-transition" : transition,
          "-moz-transition"    : transition,
          "-ms-transition"     : transition,
          "-o-transition"      : transition,
          "transition"         : transition
        });
      },
      roundDown = function(left) {
        var left = parseInt(left, 10);
        
        return Math.ceil( (left - (left % 100 ) ) / 100) * 100;
      },
      snapBack = function(e, ui) {
        var $el = ui.target,
          currentPos = ( $el.attr('style') != undefined ) ? $el.getPercentage() : 0,
          left = (ui.left === false) ? roundDown(currentPos) - 100 : roundDown(currentPos),
          dBody = document.body,
          transitionSupport = function() {
              dBody.setAttribute('style', 'transition:top 1s ease;-webkit-transition:top 1s ease;-moz-transition:top 1s ease;');
            var tSupport = !!(dBody.style.transition || dBody.style.webkitTransition || dBody.style.MozTransition )

            return tSupport;
          };

        transitionSwap($el, true);

        if( transitionSupport() ) {
          $el.css('marginLeft', left + "%");
        } else {
          $el.animate({ marginLeft: left + "%" }, opt.speed);
        }
      };

    $el
      .bind("snapback", snapBack)
      .bind("touchstart", function(e) {
        var data = e.originalEvent.touches ? e.originalEvent.touches[0] : e,
          start = {
            time: ( (new Date).getTime() ),
            coords: [ data.pageX, data.pageY ],
            origin: $(e.target).closest( setup.wrap ),
            interacting: false
          },
          stop,
          $tEl = $(e.target).closest( setup.slider ),
          currentPos = ( $tEl.attr('style') != undefined ) ? $tEl.getPercentage() : 0;
        
        transitionSwap($tEl, false);

        function moveHandler(e) {
          var data = e.originalEvent.touches ? e.originalEvent.touches[0] : e;
            stop = {
              time: (new Date()).getTime(),
              coords: [ data.pageX, data.pageY ]
            },
            deltaX = Math.abs( start.coords[0] - data.pageX ),
            deltaY = Math.abs( start.coords[1] - data.pageY );

          if( !start || deltaX < deltaY || deltaX < 15 ) {
            return;
          }

          // prevent scrolling
          if ( deltaX >= 15 ) {
            start.interacting = true;
            $tEl.css({"margin-left": currentPos + ( ( (stop.coords[0] - start.coords[0]) / start.origin.width() ) * 100 ) + '%' });
            e.preventDefault();
          } else {
            return;
          }
        };

        $el
          .bind("gesturestart", function(e) {
            $el
              .unbind("touchmove", moveHandler)
              .unbind("touchend", moveHandler);
          })
          .bind("touchmove", moveHandler)
          .one("touchend", function(e) {
            $el.unbind("touchmove", moveHandler);

            transitionSwap($tEl, true);

          if (start && stop ) {
              var deltaX = Math.abs(start.coords[0] - stop.coords[0]),
              deltaY = Math.abs(start.coords[1] - stop.coords[1]),
              left = start.coords[0] > stop.coords[0],
              jumppoint;

              if( deltaX > 20 && ( deltaX > deltaY ) ) {
                e.preventDefault();
              } else {
                if( start.interacting ) {
                  $el.trigger('snapback', { target: $tEl, left: left });
                }
                return;
              }

              jumppoint = start.origin.width() / 4;

              if( -deltaX > jumppoint || deltaX > jumppoint ) {
                start.origin.trigger("dragSnap", {direction: left ? "left" : "right"});
              } else {
                $el.trigger('snapback', { target: $tEl, left: left });
              }
          }
          start = stop = undefined;
        });
    });
  }
};

/*
 * jQuery Mousestop Event v1.0
 * http://richardscarrott.co.uk/posts/view/jquery-mousestop-event
 *
 * Copyright (c) 2010 Richard Scarrott
 * W/ thanks to Ben Alman for his decent jQuery special event API write up:
 * http://benalman.com/news/2010/03/jquery-special-events/
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Requires jQuery v1.3+
 *
 */

(function($) {
  // public vars
  $.mousestopDelay = 50;

  // special event
  $.event.special.mousestop = {
    setup: function(data) {
      $(this).data('mousestop', {delay: data})
           .bind('mouseenter.mousestop', mouseenterHandler)
           .bind('mouseleave.mousestop', mouseleaveHandler);
    },
    teardown: function() {
      $(this).removeData('mousestop')
             .unbind('.mousestop');
    }
  };

  // private methods
  function mouseenterHandler() {
    if (typeof this.timeout === 'undefined') {
      this.timeout = null;
    }
    
    var elem = $(this),
      data = elem.data('mousestop'),
      delay = data.delay || $.mousestopDelay;

    elem.bind('mousemove.mousestop', function() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function() {
        elem.trigger('mousestop');
      }, delay);
    });
  };
  
  function mouseleaveHandler() {
    var elem = $(this);
    elem.unbind('mousemove.mousestop');
    clearTimeout(this.timeout);
  };

  // shorthand alias
  $.fn.mousestop = function(data, fn) {
    if (fn == null) {
      fn = data;
      data = null;
    }

    return arguments.length > 0 ? this.bind('mousestop', data, fn) : this.trigger('mousestop');
  };
})(jQuery);
/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2012 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.7.2
 *
 */
(function(a,b){$window=a(b),a.fn.lazyload=function(c){function f(){var b=0;d.each(function(){var c=a(this);if(e.skip_invisible&&!c.is(":visible"))return;if(!a.abovethetop(this,e)&&!a.leftofbegin(this,e))if(!a.belowthefold(this,e)&&!a.rightoffold(this,e))c.trigger("appear");else if(++b>e.failure_limit)return!1})}var d=this,e={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null};return c&&(undefined!==c.failurelimit&&(c.failure_limit=c.failurelimit,delete c.failurelimit),undefined!==c.effectspeed&&(c.effect_speed=c.effectspeed,delete c.effectspeed),a.extend(e,c)),$container=e.container===undefined||e.container===b?$window:a(e.container),0===e.event.indexOf("scroll")&&$container.bind(e.event,function(a){return f()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,c.one("appear",function(){if(!this.loaded){if(e.appear){var f=d.length;e.appear.call(b,f,e)}a("<img />").bind("load",function(){c.hide().attr("src",c.data(e.data_attribute))[e.effect](e.effect_speed),b.loaded=!0;var f=a.grep(d,function(a){return!a.loaded});d=a(f);if(e.load){var g=d.length;e.load.call(b,g,e)}}).attr("src",c.data(e.data_attribute))}}),0!==e.event.indexOf("scroll")&&c.bind(e.event,function(a){b.loaded||c.trigger("appear")})}),$window.bind("resize",function(a){f()}),f(),this},a.belowthefold=function(c,d){var e;return d.container===undefined||d.container===b?e=$window.height()+$window.scrollTop():e=$container.offset().top+$container.height(),e<=a(c).offset().top-d.threshold},a.rightoffold=function(c,d){var e;return d.container===undefined||d.container===b?e=$window.width()+$window.scrollLeft():e=$container.offset().left+$container.width(),e<=a(c).offset().left-d.threshold},a.abovethetop=function(c,d){var e;return d.container===undefined||d.container===b?e=$window.scrollTop():e=$container.offset().top,e>=a(c).offset().top+d.threshold+a(c).height()},a.leftofbegin=function(c,d){var e;return d.container===undefined||d.container===b?e=$window.scrollLeft():e=$container.offset().left,e>=a(c).offset().left+d.threshold+a(c).width()},a.inviewport=function(b,c){return!a.rightofscreen(b,c)&&!a.leftofscreen(b,c)&&!a.belowthefold(b,c)&&!a.abovethetop(b,c)},a.extend(a.expr[":"],{"below-the-fold":function(c){return a.belowthefold(c,{threshold:0,container:b})},"above-the-top":function(c){return!a.belowthefold(c,{threshold:0,container:b})},"right-of-screen":function(c){return a.rightoffold(c,{threshold:0,container:b})},"left-of-screen":function(c){return!a.rightoffold(c,{threshold:0,container:b})},"in-viewport":function(c){return!a.inviewport(c,{threshold:0,container:b})},"above-the-fold":function(c){return!a.belowthefold(c,{threshold:0,container:b})},"right-of-fold":function(c){return a.rightoffold(c,{threshold:0,container:b})},"left-of-fold":function(c){return!a.rightoffold(c,{threshold:0,container:b})}})})(jQuery,window)


/*
 *  Sharrre.com - Make your sharing widget!
 *  Version: beta 1.3.2 
 *  Author: Julien Hany
 *  License: MIT http://en.wikipedia.org/wiki/MIT_License or GPLv2 http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}(';(4($,g,h,i){l j=\'1X\',1Y={2u:\'1X\',L:{N:B,C:B,y:B,H:B,o:B,I:B,J:B,A:B},1Z:0,1a:\'\',Y:\'\',3:h.2v.14,w:h.Y,1q:\'1X.2w\',x:{},1g:0,1r:r,2x:r,2y:r,20:B,21:4(){},2z:4(){},1C:4(){},22:4(){},8:{N:{3:\'\',15:B,1h:\'2A\',Z:\'2B-3f\',23:\'\'},C:{3:\'\',15:B,R:\'1D\',11:\'3g\',F:\'\',1s:\'B\',24:\'B\',25:\'\',1t:\'\',Z:\'3h\'},y:{3:\'\',15:B,x:\'2C\',26:\'\',16:\'\',1E:\'\',Z:\'2B\'},H:{3:\'\',15:B,P:\'3i\'},o:{3:\'\',15:B,1h:\'2A\'},I:{3:\'\',15:B,11:\'1\'},J:{3:\'\',15:B,27:\'\'},A:{3:\'\',1u:\'\',1v:\'\',11:\'2C\'}}},1i={N:"",C:"Q://3j.C.p/?28={3}&1w=?",y:"Q://3k.3l.y.p/1/3m/x.2D?3={3}&1w=?",H:"Q://3n.H.p/2.0/3o.3p?3q={3}&P=1b&1w=?",o:\'Q://3r.o.p/3s/2D/3t/n?3={3}&1w=?\',I:"",J:"Q://1j.J.p/3u/x/L?3v=3w&3={3}&1w=?",A:""},2E={N:4(b){l c=b.6.8.N;$(b.q).V(\'.8\').12(\'<m G="S 3x"><m G="g-1F" n-1h="\'+c.1h+\'" n-14="\'+(c.3!==\'\'?c.3:b.6.3)+\'" n-23="\'+c.23+\'"></m></m>\');g.3y={Z:b.6.8.N.Z};l d=0;9(z 2F===\'E\'&&d==0){d=1;(4(){l a=h.1c(\'O\');a.P=\'w/1b\';a.1k=r;a.17=\'//3z.2G.p/W/1F.W\';l s=h.1d(\'O\')[0];s.1e.1f(a,s)})()}K{2F.1F.3A()}},C:4(c){l e=c.6.8.C;$(c.q).V(\'.8\').12(\'<m G="S C"><m 28="1G-3B"></m><m G="1G-1D" n-14="\'+(e.3!==\'\'?e.3:c.6.3)+\'" n-1s="\'+e.1s+\'" n-11="\'+e.11+\'" n-F="\'+e.F+\'" n-3C-24="\'+e.24+\'" n-R="\'+e.R+\'" n-25="\'+e.25+\'" n-1t="\'+e.1t+\'" n-16="\'+e.16+\'"></m></m>\');l f=0;9(z 1l===\'E\'&&f==0){f=1;(4(d,s,a){l b,29=d.1d(s)[0];9(d.3D(a)){1x}b=d.1c(s);b.28=a;b.17=\'//3E.C.3F/\'+e.Z+\'/3G.W#3H=1\';29.1e.1f(b,29)}(h,\'O\',\'C-3I\'))}K{1l.3J.3K()}},y:4(b){l c=b.6.8.y;$(b.q).V(\'.8\').12(\'<m G="S y"><a 14="1H://y.p/L" G="y-L-S" n-3="\'+(c.3!==\'\'?c.3:b.6.3)+\'" n-x="\'+c.x+\'" n-w="\'+b.6.w+\'" n-16="\'+c.16+\'" n-26="\'+c.26+\'" n-1E="\'+c.1E+\'" n-Z="\'+c.Z+\'">3L</a></m>\');l d=0;9(z 2a===\'E\'&&d==0){d=1;(4(){l a=h.1c(\'O\');a.P=\'w/1b\';a.1k=r;a.17=\'//1I.y.p/1J.W\';l s=h.1d(\'O\')[0];s.1e.1f(a,s)})()}K{$.3M({3:\'//1I.y.p/1J.W\',3N:\'O\',3O:r})}},H:4(a){l b=a.6.8.H;$(a.q).V(\'.8\').12(\'<m G="S H"><a G="3P \'+b.P+\'" 3Q="3R 3S" 14="Q://H.p/2H?3=\'+T((b.3!==\'\'?b.3:a.6.3))+\'"></a></m>\');l c=0;9(z 3T===\'E\'&&c==0){c=1;(4(){l s=h.1c(\'2I\'),2b=h.1d(\'2I\')[0];s.P=\'w/1b\';s.1k=r;s.17=\'//1J.H.p/8.W\';2b.1e.1f(s,2b)})()}},o:4(a){9(a.6.8.o.1h==\'3U\'){l b=\'F:2c;\',2d=\'D:2J;F:2c;1t-1h:3V;1y-D:2J;\',2e=\'D:2K;1y-D:2K;2f-3W:1K;\'}K{l b=\'F:3X;\',2d=\'2g:3Y;2h:0 1K;D:1z;F:3Z;1y-D:1z;\',2e=\'2g:40;D:1z;1y-D:1z;\'}l c=a.1r(a.6.x.o);9(z c==="E"){c=0}$(a.q).V(\'.8\').12(\'<m G="S o"><m 1L="\'+b+\'1t:41 42,43,44-45;46:47;1M:#48;2L:49-2M;2g:2N;D:1z;1y-D:4a;2f:0;2h:0;w-4b:0;4c-2i:4d;">\'+\'<m 1L="\'+2d+\'2O-1M:#2P;2f-4e:4f;4g:4h;w-2i:2Q;1N:2R 2S #4i;1N-2T:1K;">\'+c+\'</m>\'+\'<m 1L="\'+2e+\'2L:2M;2h:0;w-2i:2Q;w-4j:2N;F:2c;2O-1M:#4k;1N:2R 2S #4l;1N-2T:1K;1M:#2P;">\'+\'<2U 17="Q://1j.o.p/4m/2U/o.4n.4o" D="10" F="10" 4p="4q" /> 4r</m></m></m>\');$(a.q).V(\'.o\').4s(\'1C\',4(){a.2V(\'o\')})},I:4(b){l c=b.6.8.I;$(b.q).V(\'.8\').12(\'<m G="S I"><2W:2j 11="\'+c.11+\'" 2v="\'+(c.3!==\'\'?c.3:b.6.3)+\'"></2W:2j></m>\');l d=0;9(z 1O===\'E\'&&d==0){d=1;(4(){l a=h.1c(\'O\');a.P=\'w/1b\';a.1k=r;a.17=\'//1I.I.p/1/1J.W\';l s=h.1d(\'O\')[0];s.1e.1f(a,s)})();s=g.4t(4(){9(z 1O!==\'E\'){1O.2X();2k(s)}},2l)}K{1O.2X()}},J:4(b){l c=b.6.8.J;$(b.q).V(\'.8\').12(\'<m G="S J"><O P="2m/L" n-3="\'+(c.3!==\'\'?c.3:b.6.3)+\'" n-27="\'+c.27+\'"></O></m>\');l d=0;9(z g.2Y===\'E\'&&d==0){d=1;(4(){l a=h.1c(\'O\');a.P=\'w/1b\';a.1k=r;a.17=\'//1I.J.p/2m.W\';l s=h.1d(\'O\')[0];s.1e.1f(a,s)})()}K{g.2Y.1P()}},A:4(b){l c=b.6.8.A;$(b.q).V(\'.8\').12(\'<m G="S A"><a 14="Q://A.p/1Q/2n/S/?3=\'+(c.3!==\'\'?c.3:b.6.3)+\'&1u=\'+c.1u+\'&1v=\'+c.1v+\'" G="1Q-4u-S" x-11="\'+c.11+\'">4v 4w</a></m>\');(4(){l a=h.1c(\'O\');a.P=\'w/1b\';a.1k=r;a.17=\'//4x.A.p/W/4y.W\';l s=h.1d(\'O\')[0];s.1e.1f(a,s)})()}},2Z={N:4(){},C:4(){1G=g.30(4(){9(z 1l!==\'E\'){1l.2o.2p(\'31.2n\',4(a){1m.1n([\'1o\',\'C\',\'1D\',a])});1l.2o.2p(\'31.4z\',4(a){1m.1n([\'1o\',\'C\',\'4A\',a])});1l.2o.2p(\'4B.1s\',4(a){1m.1n([\'1o\',\'C\',\'1s\',a])});2k(1G)}},32)},y:4(){33=g.30(4(){9(z 2a!==\'E\'){2a.4C.4D(\'1R\',4(a){9(a){1m.1n([\'1o\',\'y\',\'1R\'])}});2k(33)}},32)},H:4(){},o:4(){},I:4(){},J:4(){4 4E(){1m.1n([\'1o\',\'J\',\'L\'])}},A:4(){}},34={N:4(a){g.18("1H://1F.2G.p/35/+1/4F?4G="+a.8.N.Z+"&3="+T((a.8.N.3!==\'\'?a.8.N.3:a.3)),"","19=0, 1S=0, F=36, D=2l")},C:4(a){g.18("Q://1j.C.p/4H.2w?u="+T((a.8.C.3!==\'\'?a.8.C.3:a.3))+"&t="+a.w+"","","19=0, 1S=0, F=36, D=2l")},y:4(a){g.18("1H://y.p/4I/1R?w="+T(a.w)+"&3="+T((a.8.y.3!==\'\'?a.8.y.3:a.3))+(a.8.y.16!==\'\'?\'&16=\'+a.8.y.16:\'\'),"","19=0, 1S=0, F=37, D=38")},H:4(a){g.18("Q://H.p/4J/4K/2H?3="+T((a.8.H.3!==\'\'?a.8.H.3:a.3))+"&Y="+a.w+"&1E=r&1L=r","","19=0, 1S=0, F=37, D=38")},o:4(a){g.18(\'Q://1j.o.p/4L?v=5&4M&4N=4O&3=\'+T((a.8.o.3!==\'\'?a.8.o.3:a.3))+\'&Y=\'+a.w,\'o\',\'19=1T,F=1p,D=1p\')},I:4(a){g.18(\'Q://1j.I.p/2j/?3=\'+T((a.8.o.3!==\'\'?a.8.o.3:a.3)),\'I\',\'19=1T,F=1p,D=1p\')},J:4(a){g.18(\'1H://1j.J.p/4P/L?3=\'+T((a.8.o.3!==\'\'?a.8.o.3:a.3))+\'&4Q=&4R=r\',\'J\',\'19=1T,F=1p,D=1p\')},A:4(a){g.18(\'Q://A.p/1Q/2n/S/?3=\'+T((a.8.A.3!==\'\'?a.8.A.3:a.3))+\'&1u=\'+T(a.8.A.1u)+\'&1v=\'+a.8.A.1v,\'A\',\'19=1T,F=4S,D=4T\')}};4 U(a,b){7.q=a;7.6=$.4U(r,{},1Y,b);7.6.L=b.L;7.4V=1Y;7.4W=j;7.1P()};U.X.1P=4(){l c=7;9(7.6.1q!==\'\'){1i.N=7.6.1q+\'?3={3}&P=N\';1i.I=7.6.1q+\'?3={3}&P=I\';1i.A=7.6.1q+\'?3={3}&P=A\'}$(7.q).4X(7.6.2u);9(z $(7.q).n(\'Y\')!==\'E\'){7.6.Y=$(7.q).4Y(\'n-Y\')}9(z $(7.q).n(\'3\')!==\'E\'){7.6.3=$(7.q).n(\'3\')}9(z $(7.q).n(\'w\')!==\'E\'){7.6.w=$(7.q).n(\'w\')}$.1A(7.6.L,4(a,b){9(b===r){c.6.1Z++}});9(c.6.2y===r){$.1A(7.6.L,4(a,b){9(b===r){4Z{c.39(a)}50(e){}}})}K{7.2q();7.6.22(7,7.6)}$(7.q).21(4(){9($(7).V(\'.8\').51===0&&c.6.2x===r){c.2q()}c.6.21(c,c.6)},4(){c.6.2z(c,c.6)});$(7.q).1C(4(){c.6.1C(c,c.6);1x B})};U.X.2q=4(){l c=7;$(7.q).12(\'<m G="8"></m>\');$.1A(c.6.L,4(a,b){9(b==r){2E[a](c);9(c.6.20===r){2Z[a]()}}})};U.X.39=4(c){l d=7,x=0,3=1i[c].1B(\'{3}\',T(7.6.3));9(7.6.8[c].15===r&&7.6.8[c].3!==\'\'){3=1i[c].1B(\'{3}\',7.6.8[c].3)}9(3!=\'\'){$.52(3,4(a){9(z a.x!=="E"){l b=a.x+\'\';b=b.1B(\'\\53\\54\',\'\');x+=1U(b,10)}K 9(z a.3a!=="E"){x+=1U(a.3a,10)}K 9(z a.3b!=="E"){x+=1U(a.3b,10)}K 9(z a[0]!=="E"){x+=1U(a[0].55,10)}K 9(z a[0]!=="E"){}d.6.x[c]=x;d.6.1g+=x;d.2r();d.1V()}).56(4(){d.6.x[c]=0;d.1V()})}K{d.2r();d.6.x[c]=0;d.1V()}};U.X.1V=4(){l a=0;57(e 2m 7.6.x){a++}9(a===7.6.1Z){7.6.22(7,7.6)}};U.X.2r=4(){l a=7.6.1g,1a=7.6.1a;9(7.6.1r===r){a=7.1r(a)}9(1a!==\'\'){1a=1a.1B(\'{1g}\',a);$(7.q).1W(1a)}K{$(7.q).1W(\'<m G="58"><a G="x" 14="#">\'+a+\'</a>\'+(7.6.Y!==\'\'?\'<a G="L" 14="#">\'+7.6.Y+\'</a>\':\'\')+\'</m>\')}};U.X.1r=4(a){9(a>=3c){a=(a/3c).3d(2)+"M"}K 9(a>=3e){a=(a/3e).3d(1)+"k"}1x a};U.X.2V=4(a){34[a](7.6);9(7.6.20===r){l b={N:{13:\'59\',R:\'+1\'},C:{13:\'C\',R:\'1D\'},y:{13:\'y\',R:\'1R\'},H:{13:\'H\',R:\'2s\'},o:{13:\'o\',R:\'2s\'},I:{13:\'I\',R:\'2s\'},J:{13:\'J\',R:\'L\'},A:{13:\'A\',R:\'1Q\'}};1m.1n([\'1o\',b[a].13,b[a].R])}};U.X.5a=4(){l a=$(7.q).1W();$(7.q).1W(a.1B(7.6.1g,7.6.1g+1))};U.X.5b=4(a,b){9(a!==\'\'){7.6.3=a}9(b!==\'\'){7.6.w=b}};$.5c[j]=4(b){l c=5d;9(b===i||z b===\'5e\'){1x 7.1A(4(){9(!$.n(7,\'2t\'+j)){$.n(7,\'2t\'+j,5f U(7,b))}})}K 9(z b===\'5g\'&&b[0]!==\'35\'&&b!==\'1P\'){1x 7.1A(4(){l a=$.n(7,\'2t\'+j);9(a 5h U&&z a[b]===\'4\'){a[b].5i(a,5j.X.5k.5l(c,1))}})}}})(5m,5n,5o);',62,335,'|||url|function||options|this|buttons|if||||||||||||var|div|data|delicious|com|element|true|||||text|count|twitter|typeof|pinterest|false|facebook|height|undefined|width|class|digg|stumbleupon|linkedin|else|share||googlePlus|script|type|http|action|button|encodeURIComponent|Plugin|find|js|prototype|title|lang||layout|append|site|href|urlCount|via|src|open|toolbar|template|javascript|createElement|getElementsByTagName|parentNode|insertBefore|total|size|urlJson|www|async|FB|_gaq|push|_trackSocial|550|urlCurl|shorterTotal|send|font|media|description|callback|return|line|20px|each|replace|click|like|related|plusone|fb|https|platform|widgets|3px|style|color|border|STMBLPN|init|pin|tweet|status|no|parseInt|rendererPerso|html|sharrre|defaults|shareTotal|enableTracking|hover|render|annotation|faces|colorscheme|hashtags|counter|id|fjs|twttr|s1|50px|cssCount|cssShare|margin|float|padding|align|badge|clearInterval|500|in|create|Event|subscribe|loadButtons|renderer|add|plugin_|className|location|php|enableHover|enableCounter|hide|medium|en|horizontal|json|loadButton|gapi|google|submit|SCRIPT|35px|18px|display|block|none|background|fff|center|1px|solid|radius|img|openPopup|su|processWidgets|IN|tracking|setInterval|edge|1000|tw|popup|_|900|650|360|getSocialJson|likes|shares|1e6|toFixed|1e3|US|button_count|en_US|DiggCompact|graph|cdn|api|urls|services|story|getInfo|links|feeds|v2|urlinfo|countserv|format|jsonp|googleplus|___gcfg|apis|go|root|show|getElementById|connect|net|all|xfbml|jssdk|XFBML|parse|Tweet|ajax|dataType|cache|DiggThisButton|rel|nofollow|external|__DBW|tall|15px|top|93px|right|26px|left|12px|Arial|Helvetica|sans|serif|cursor|pointer|666666|inline|normal|indent|vertical|baseline|bottom|5px|overflow|hidden|ccc|decoration|7EACEE|40679C|static|small|gif|alt|Delicious|Add|on|setTimeout|it|Pin|It|assets|pinit|remove|unlike|message|events|bind|LinkedInShare|confirm|hl|sharer|intent|tools|diggthis|save|noui|jump|close|cws|token|isFramed|700|300|extend|_defaults|_name|addClass|attr|try|catch|length|getJSON|u00c2|u00a0|total_posts|error|for|box|Google|simulateClick|update|fn|arguments|object|new|string|instanceof|apply|Array|slice|call|jQuery|window|document'.split('|'),0,{}))

/*
 * Swipe 1.0
 *
 * Brad Birdsall, Prime
 * Copyright 2011, Licensed GPL & MIT
 *
*/
window.Swipe=function(a,b){if(!a)return null;var c=this;this.options=b||{},this.index=this.options.startSlide||0,this.speed=this.options.speed||300,this.callback=this.options.callback||function(){},this.delay=this.options.auto||0,this.container=a,this.element=this.container.children[0],this.container.style.overflow="hidden",this.element.style.listStyle="none",this.setup(),this.begin(),this.element.addEventListener&&(this.element.addEventListener("touchstart",this,!1),this.element.addEventListener("touchmove",this,!1),this.element.addEventListener("touchend",this,!1),this.element.addEventListener("webkitTransitionEnd",this,!1),this.element.addEventListener("msTransitionEnd",this,!1),this.element.addEventListener("oTransitionEnd",this,!1),this.element.addEventListener("transitionend",this,!1),window.addEventListener("resize",this,!1))},Swipe.prototype={setup:function(){this.slides=this.element.children,this.length=this.slides.length;if(this.length<2)return null;this.width=this.container.getBoundingClientRect().width;if(!this.width)return null;this.container.style.visibility="hidden",this.element.style.width=this.slides.length*this.width+"px";var a=this.slides.length;while(a--){var b=this.slides[a];b.style.width=this.width+"px",b.style.display="table-cell",b.style.verticalAlign="top"}this.slide(this.index,0),this.container.style.visibility="visible"},slide:function(a,b){var c=this.element.style;c.webkitTransitionDuration=c.MozTransitionDuration=c.msTransitionDuration=c.OTransitionDuration=c.transitionDuration=b+"ms",c.webkitTransform="translate3d("+ -(a*this.width)+"px,0,0)",c.msTransform=c.MozTransform=c.OTransform="translateX("+ -(a*this.width)+"px)",this.index=a},getPos:function(){return this.index},prev:function(a){this.delay=a||0,clearTimeout(this.interval),this.index&&this.slide(this.index-1,this.speed)},next:function(a){this.delay=a||0,clearTimeout(this.interval),this.index<this.length-1?this.slide(this.index+1,this.speed):this.slide(0,this.speed)},begin:function(){var a=this;this.interval=this.delay?setTimeout(function(){a.next(a.delay)},this.delay):0},stop:function(){this.delay=0,clearTimeout(this.interval)},resume:function(){this.delay=this.options.auto||0,this.begin()},handleEvent:function(a){switch(a.type){case"touchstart":this.onTouchStart(a);break;case"touchmove":this.onTouchMove(a);break;case"touchend":this.onTouchEnd(a);break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"transitionend":this.transitionEnd(a);break;case"resize":this.setup()}},transitionEnd:function(a){this.delay&&this.begin(),this.callback(a,this.index,this.slides[this.index])},onTouchStart:function(a){this.start={pageX:a.touches[0].pageX,pageY:a.touches[0].pageY,time:Number(new Date)},this.isScrolling=undefined,this.deltaX=0,this.element.style.webkitTransitionDuration=0},onTouchMove:function(a){if(a.touches.length>1||a.scale&&a.scale!==1)return;this.deltaX=a.touches[0].pageX-this.start.pageX,typeof this.isScrolling=="undefined"&&(this.isScrolling=!!(this.isScrolling||Math.abs(this.deltaX)<Math.abs(a.touches[0].pageY-this.start.pageY))),this.isScrolling||(a.preventDefault(),clearTimeout(this.interval),this.deltaX=this.deltaX/(!this.index&&this.deltaX>0||this.index==this.length-1&&this.deltaX<0?Math.abs(this.deltaX)/this.width+1:1),this.element.style.webkitTransform="translate3d("+(this.deltaX-this.index*this.width)+"px,0,0)")},onTouchEnd:function(a){var b=Number(new Date)-this.start.time<250&&Math.abs(this.deltaX)>20||Math.abs(this.deltaX)>this.width/2,c=!this.index&&this.deltaX>0||this.index==this.length-1&&this.deltaX<0;this.isScrolling||this.slide(this.index+(b&&!c?this.deltaX<0?1:-1:0),this.speed)}}

