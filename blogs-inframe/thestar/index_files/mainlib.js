/*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function ($) {
    $.cookie = function (key, value, options) {

        // key and at least value given, set cookie...
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options);

            if (value === null || value === undefined) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return (document.cookie = [
                encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path ? '; path=' + options.path : '',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''
            ].join(''));
        }

        // key and possibly options given, get cookie...
        options = value || {};
        var decode = options.raw ? function (s) {
            return s;
        } : decodeURIComponent;

        var pairs = document.cookie.split('; ');
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
            if (decode(pair[0]) === key) return decode(pair[1] || ''); // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
        }
        return null;
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
(function ($, window) {

    $window = $(window);

    $.fn.lazyload = function (options) {
        var elements = this;
        var settings = {
            threshold:0,
            failure_limit:0,
            event:"scroll",
            effect:"show",
            container:window,
            data_attribute:"original",
            skip_invisible:true,
            appear:null,
            load:null
        };

        function update() {
            var counter = 0;

            elements.each(function () {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
                if ($.abovethetop(this, settings) ||
                    $.leftofbegin(this, settings)) {
                    /* Nothing. */
                } else if (!$.belowthefold(this, settings) &&
                    !$.rightoffold(this, settings)) {
                    $this.trigger("appear");
                } else {
                    if (++counter > settings.failure_limit) {
                        return false;
                    }
                }
            });

        }

        if (options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
            settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
            $container.bind(settings.event, function (event) {
                return update();
            });
        }

        this.each(function () {
            var self = this;
            var $self = $(self);

            self.loaded = false;

            /* When appear is triggered load original image. */
            $self.one("appear", function () {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $("<img />")
                        .bind("load", function () {
                            $self
                                .hide()
                                .attr("src", $self.data(settings.data_attribute))
                                [settings.effect](settings.effect_speed);
                            self.loaded = true;

                            /* Remove image from array so it is not looped next time. */
                            var temp = $.grep(elements, function (element) {
                                return !element.loaded;
                            });
                            elements = $(temp);

                            if (settings.load) {
                                var elements_left = elements.length;
                                settings.load.call(self, elements_left, settings);
                            }
                        })
                        .attr("src", $self.data(settings.data_attribute));
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.bind(settings.event, function (event) {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
                });
            }
        });

        /* Check if something appears when window is resized. */
        $window.bind("resize", function (event) {
            update();
        });

        /* Force initial check if images should appear. */
        update();

        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function (element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.height() + $window.scrollTop();
        } else {
            fold = $container.offset().top + $container.height();
        }

        return fold <= $(element).offset().top - settings.threshold;
    };

    $.rightoffold = function (element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $container.offset().left + $container.width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };

    $.abovethetop = function (element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $container.offset().top;
        }

        return fold >= $(element).offset().top + settings.threshold + $(element).height();
    };

    $.leftofbegin = function (element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $container.offset().left;
        }

        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };

    $.inviewport = function (element, settings) {
        return !$.rightofscreen(element, settings) && !$.leftofscreen(element, settings) &&
            !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
    };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() */

    $.extend($.expr[':'], {
        "below-the-fold":function (a) {
            return $.belowthefold(a, {threshold:0, container:window});
        },
        "above-the-top":function (a) {
            return !$.belowthefold(a, {threshold:0, container:window});
        },
        "right-of-screen":function (a) {
            return $.rightoffold(a, {threshold:0, container:window});
        },
        "left-of-screen":function (a) {
            return !$.rightoffold(a, {threshold:0, container:window});
        },
        "in-viewport":function (a) {
            return !$.inviewport(a, {threshold:0, container:window});
        },
        /* Maintain BC for couple of versions. */
        "above-the-fold":function (a) {
            return !$.belowthefold(a, {threshold:0, container:window});
        },
        "right-of-fold":function (a) {
            return $.rightoffold(a, {threshold:0, container:window});
        },
        "left-of-fold":function (a) {
            return !$.rightoffold(a, {threshold:0, container:window});
        }
    });

})(jQuery, window);
/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(window, document, $) {

	var isInputSupported = 'placeholder' in document.createElement('input'),
	    isTextareaSupported = 'placeholder' in document.createElement('textarea'),
	    prototype = $.fn,
	    valHooks = $.valHooks,
	    hooks,
	    placeholder;

	if (isInputSupported && isTextareaSupported) {

		placeholder = prototype.placeholder = function() {
			return this;
		};

		placeholder.input = placeholder.textarea = true;

	} else {

		placeholder = prototype.placeholder = function() {
			var $this = this;
			$this
				.filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
				.not('.placeholder')
				.bind({
					'focus.placeholder': clearPlaceholder,
					'blur.placeholder': setPlaceholder
				})
				.data('placeholder-enabled', true)
				.trigger('blur.placeholder');
			return $this;
		};

		placeholder.input = isInputSupported;
		placeholder.textarea = isTextareaSupported;

		hooks = {
			'get': function(element) {
				var $element = $(element);
				return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
			},
			'set': function(element, value) {
				var $element = $(element);
				if (!$element.data('placeholder-enabled')) {
					return element.value = value;
				}
				if (value == '') {
					element.value = value;
					// Issue #56: Setting the placeholder causes problems if the element continues to have focus.
					if (element != document.activeElement) {
						// We can't use `triggerHandler` here because of dummy text/password inputs :(
						setPlaceholder.call(element);
					}
				} else if ($element.hasClass('placeholder')) {
					clearPlaceholder.call(element, true, value) || (element.value = value);
				} else {
					element.value = value;
				}
				// `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
				return $element;
			}
		};

		isInputSupported || (valHooks.input = hooks);
		isTextareaSupported || (valHooks.textarea = hooks);

		$(function() {
			// Look for forms
			$(document).delegate('form', 'submit.placeholder', function() {
				// Clear the placeholder values so they don't get submitted
				var $inputs = $('.placeholder', this).each(clearPlaceholder);
				setTimeout(function() {
					$inputs.each(setPlaceholder);
				}, 10);
			});
		});

		// Clear placeholder values upon page reload
		$(window).bind('beforeunload.placeholder', function() {
			$('.placeholder').each(function() {
				this.value = '';
			});
		});

	}

	function args(elem) {
		// Return an object of element attributes
		var newAttrs = {},
		    rinlinejQuery = /^jQuery\d+$/;
		$.each(elem.attributes, function(i, attr) {
			if (attr.specified && !rinlinejQuery.test(attr.name)) {
				newAttrs[attr.name] = attr.value;
			}
		});
		return newAttrs;
	}

	function clearPlaceholder(event, value) {
		var input = this,
		    $input = $(input);
		if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
			if ($input.data('placeholder-password')) {
				$input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
				// If `clearPlaceholder` was called from `$.valHooks.input.set`
				if (event === true) {
					return $input[0].value = value;
				}
				$input.focus();
			} else {
				input.value = '';
				$input.removeClass('placeholder');
				input == document.activeElement && input.select();
			}
		}
	}

	function setPlaceholder() {
		var $replacement,
		    input = this,
		    $input = $(input),
		    $origInput = $input,
		    id = this.id;
		if (input.value == '') {
			if (input.type == 'password') {
				if (!$input.data('placeholder-textinput')) {
					try {
						$replacement = $input.clone().attr({ 'type': 'text' });
					} catch(e) {
						$replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
					}
					$replacement
						.removeAttr('name')
						.data({
							'placeholder-password': true,
							'placeholder-id': id
						})
						.bind('focus.placeholder', clearPlaceholder);
					$input
						.data({
							'placeholder-textinput': $replacement,
							'placeholder-id': id
						})
						.before($replacement);
				}
				$input = $input.removeAttr('id').hide().prev().attr('id', id).show();
				// Note: `$input[0] != input` now!
			}
			$input.addClass('placeholder');
			$input[0].value = $input.attr('placeholder');
		} else {
			$input.removeClass('placeholder');
		}
	}

}(this, document, jQuery));
/*! jQuery UI - v1.8.22 - 2012-07-24
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.core.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;return!b.href||!g||f.nodeName.toLowerCase()!=="map"?!1:(h=a("img[usemap=#"+g+"]")[0],!!h&&d(h))}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}a.ui=a.ui||{};if(a.ui.version)return;a.extend(a.ui,{version:"1.8.22",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;return a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0),/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(c,d){function h(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)}),c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){return c===b?g["inner"+d].call(this):this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){return typeof b!="number"?g["outer"+d].call(this,b):this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));c.offsetHeight,a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.curCSS||(a.curCSS=a.css),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!d||!a.element[0].parentNode)return;for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;return b[d]>0?!0:(b[d]=1,e=b[d]>0,b[d]=0,e)},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}})})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.widget.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){return c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}}),d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;return e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e,f&&e.charAt(0)==="_"?h:(f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b)return h=f,!1}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))}),h)}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}return this._setOptions(e),this},_setOptions:function(b){var c=this;return a.each(b,function(a,b){c._setOption(a,b)}),this},_setOption:function(a,b){return this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.mouse.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c=!1;a(document).mouseup(function(a){c=!1}),a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(b){if(c)return;this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=b.which==1,f=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;if(!e||f||!this._mouseCapture(b))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==!1;if(!this._mouseStarted)return b.preventDefault(),!0}return!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0,!0},_mouseMove:function(b){return!a.browser.msie||document.documentMode>=9||!!b.button?this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted):this._mouseUp(b)},_mouseUp:function(b){return a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target==this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b)),!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(a){return this.mouseDelayMet},_mouseStart:function(a){},_mouseDrag:function(a){},_mouseStop:function(a){},_mouseCapture:function(a){return!0}})})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.position.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.ui=a.ui||{};var c=/left|center|right/,d=/top|center|bottom/,e="center",f={},g=a.fn.position,h=a.fn.offset;a.fn.position=function(b){if(!b||!b.of)return g.apply(this,arguments);b=a.extend({},b);var h=a(b.of),i=h[0],j=(b.collision||"flip").split(" "),k=b.offset?b.offset.split(" "):[0,0],l,m,n;return i.nodeType===9?(l=h.width(),m=h.height(),n={top:0,left:0}):i.setTimeout?(l=h.width(),m=h.height(),n={top:h.scrollTop(),left:h.scrollLeft()}):i.preventDefault?(b.at="left top",l=m=0,n={top:b.of.pageY,left:b.of.pageX}):(l=h.outerWidth(),m=h.outerHeight(),n=h.offset()),a.each(["my","at"],function(){var a=(b[this]||"").split(" ");a.length===1&&(a=c.test(a[0])?a.concat([e]):d.test(a[0])?[e].concat(a):[e,e]),a[0]=c.test(a[0])?a[0]:e,a[1]=d.test(a[1])?a[1]:e,b[this]=a}),j.length===1&&(j[1]=j[0]),k[0]=parseInt(k[0],10)||0,k.length===1&&(k[1]=k[0]),k[1]=parseInt(k[1],10)||0,b.at[0]==="right"?n.left+=l:b.at[0]===e&&(n.left+=l/2),b.at[1]==="bottom"?n.top+=m:b.at[1]===e&&(n.top+=m/2),n.left+=k[0],n.top+=k[1],this.each(function(){var c=a(this),d=c.outerWidth(),g=c.outerHeight(),h=parseInt(a.curCSS(this,"marginLeft",!0))||0,i=parseInt(a.curCSS(this,"marginTop",!0))||0,o=d+h+(parseInt(a.curCSS(this,"marginRight",!0))||0),p=g+i+(parseInt(a.curCSS(this,"marginBottom",!0))||0),q=a.extend({},n),r;b.my[0]==="right"?q.left-=d:b.my[0]===e&&(q.left-=d/2),b.my[1]==="bottom"?q.top-=g:b.my[1]===e&&(q.top-=g/2),f.fractions||(q.left=Math.round(q.left),q.top=Math.round(q.top)),r={left:q.left-h,top:q.top-i},a.each(["left","top"],function(c,e){a.ui.position[j[c]]&&a.ui.position[j[c]][e](q,{targetWidth:l,targetHeight:m,elemWidth:d,elemHeight:g,collisionPosition:r,collisionWidth:o,collisionHeight:p,offset:k,my:b.my,at:b.at})}),a.fn.bgiframe&&c.bgiframe(),c.offset(a.extend(q,{using:b.using}))})},a.ui.position={fit:{left:function(b,c){var d=a(window),e=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft();b.left=e>0?b.left-e:Math.max(b.left-c.collisionPosition.left,b.left)},top:function(b,c){var d=a(window),e=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop();b.top=e>0?b.top-e:Math.max(b.top-c.collisionPosition.top,b.top)}},flip:{left:function(b,c){if(c.at[0]===e)return;var d=a(window),f=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft(),g=c.my[0]==="left"?-c.elemWidth:c.my[0]==="right"?c.elemWidth:0,h=c.at[0]==="left"?c.targetWidth:-c.targetWidth,i=-2*c.offset[0];b.left+=c.collisionPosition.left<0?g+h+i:f>0?g+h+i:0},top:function(b,c){if(c.at[1]===e)return;var d=a(window),f=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop(),g=c.my[1]==="top"?-c.elemHeight:c.my[1]==="bottom"?c.elemHeight:0,h=c.at[1]==="top"?c.targetHeight:-c.targetHeight,i=-2*c.offset[1];b.top+=c.collisionPosition.top<0?g+h+i:f>0?g+h+i:0}}},a.offset.setOffset||(a.offset.setOffset=function(b,c){/static/.test(a.curCSS(b,"position"))&&(b.style.position="relative");var d=a(b),e=d.offset(),f=parseInt(a.curCSS(b,"top",!0),10)||0,g=parseInt(a.curCSS(b,"left",!0),10)||0,h={top:c.top-e.top+f,left:c.left-e.left+g};"using"in c?c.using.call(b,h):d.css(h)},a.fn.offset=function(b){var c=this[0];return!c||!c.ownerDocument?null:b?a.isFunction(b)?this.each(function(c){a(this).offset(b.call(this,c,a(this).offset()))}):this.each(function(){a.offset.setOffset(this,b)}):h.call(this)}),function(){var b=document.getElementsByTagName("body")[0],c=document.createElement("div"),d,e,g,h,i;d=document.createElement(b?"div":"body"),g={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},b&&a.extend(g,{position:"absolute",left:"-1000px",top:"-1000px"});for(var j in g)d.style[j]=g[j];d.appendChild(c),e=b||document.documentElement,e.insertBefore(d,e.firstChild),c.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;",h=a(c).offset(function(a,b){return b}).offset(),d.innerHTML="",e.removeChild(d),i=h.top+h.left+(b?2e3:0),f.fractions=i>21&&i<22}()})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.draggable.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},destroy:function(){if(!this.element.data("draggable"))return;return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy(),this},_mouseCapture:function(b){var c=this.options;return this.helper||c.disabled||a(b.target).is(".ui-resizable-handle")?!1:(this.handle=this._getHandle(b),this.handle?(c.iframeFix&&a(c.iframeFix===!0?"iframe":c.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(a(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),c.containment&&this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_mouseDrag:function(b,c){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute");if(!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp({}),!1;this.position=d.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";return a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c=!1;a.ui.ddmanager&&!this.options.dropBehaviour&&(c=a.ui.ddmanager.drop(this,b)),this.dropped&&(c=this.dropped,this.dropped=!1);var d=this.element[0],e=!1;while(d&&(d=d.parentNode))d==document&&(e=!0);if(!e&&this.options.helper==="original")return!1;if(this.options.revert=="invalid"&&!c||this.options.revert=="valid"&&c||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)){var f=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){f._trigger("stop",b)!==!1&&f._clear()})}else this._trigger("stop",b)!==!1&&this._clear();return!1},_mouseUp:function(b){return this.options.iframeFix===!0&&a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?!0:!1;return a(this.options.handle,this.element).find("*").andSelf().each(function(){this==b.target&&(c=!0)}),c},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b])):c.helper=="clone"?this.element.clone().removeAttr("id"):this.element;return d.parents("body").length||d.appendTo(c.appendTo=="parent"?this.element[0].parentNode:c.appendTo),d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute"),d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[b.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,b.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(b.containment=="document"?0:a(window).scrollLeft())+a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(b.containment=="document"?0:a(window).scrollTop())+(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)&&b.containment.constructor!=Array){var c=a(b.containment),d=c[0];if(!d)return;var e=c.offset(),f=a(d).css("overflow")!="hidden";this.containment=[(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0),(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0),(f?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=c}else b.containment.constructor==Array&&(this.containment=b.containment)},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName),f=b.pageX,g=b.pageY;if(this.originalPosition){var h;if(this.containment){if(this.relative_container){var i=this.relative_container.offset();h=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]}else h=this.containment;b.pageX-this.offset.click.left<h[0]&&(f=h[0]+this.offset.click.left),b.pageY-this.offset.click.top<h[1]&&(g=h[1]+this.offset.click.top),b.pageX-this.offset.click.left>h[2]&&(f=h[2]+this.offset.click.left),b.pageY-this.offset.click.top>h[3]&&(g=h[3]+this.offset.click.top)}if(c.grid){var j=c.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1]:this.originalPageY;g=h?j-this.offset.click.top<h[1]||j-this.offset.click.top>h[3]?j-this.offset.click.top<h[1]?j+c.grid[1]:j-c.grid[1]:j:j;var k=c.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0]:this.originalPageX;f=h?k-this.offset.click.left<h[0]||k-this.offset.click.left>h[2]?k-this.offset.click.left<h[0]?k+c.grid[0]:k-c.grid[0]:k:k}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d]),b=="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(a){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.extend(a.ui.draggable,{version:"1.8.22"}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c){var d=a(this).data("draggable"),e=d.options,f=a.extend({},c,{item:d.element});d.sortables=[],a(e.connectToSortable).each(function(){var c=a.data(this,"sortable");c&&!c.options.disabled&&(d.sortables.push({instance:c,shouldRevert:c.options.revert}),c.refreshPositions(),c._trigger("activate",b,f))})},stop:function(b,c){var d=a(this).data("draggable"),e=a.extend({},c,{item:d.element});a.each(d.sortables,function(){this.instance.isOver?(this.instance.isOver=0,d.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(b),this.instance.options.helper=this.instance.options._helper,d.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",b,e))})},drag:function(b,c){var d=a(this).data("draggable"),e=this,f=function(b){var c=this.offset.click.top,d=this.offset.click.left,e=this.positionAbs.top,f=this.positionAbs.left,g=b.height,h=b.width,i=b.top,j=b.left;return a.ui.isOver(e+c,f+d,i,j,g,h)};a.each(d.sortables,function(f){this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this.instance._intersectsWith(this.instance.containerCache)?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return c.helper[0]},b.target=this.instance.currentItem[0],this.instance._mouseCapture(b,!0),this.instance._mouseStart(b,!0,!0),this.instance.offset.click.top=d.offset.click.top,this.instance.offset.click.left=d.offset.click.left,this.instance.offset.parent.left-=d.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=d.offset.parent.top-this.instance.offset.parent.top,d._trigger("toSortable",b),d.dropped=this.instance.element,d.currentItem=d.element,this.instance.fromOutside=d),this.instance.currentItem&&this.instance._mouseDrag(b)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",b,this.instance._uiHash(this.instance)),this.instance._mouseStop(b,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),d._trigger("fromSortable",b),d.dropped=!1)})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c){var d=a("body"),e=a(this).data("draggable").options;d.css("cursor")&&(e._cursor=d.css("cursor")),d.css("cursor",e.cursor)},stop:function(b,c){var d=a(this).data("draggable").options;d._cursor&&a("body").css("cursor",d._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("opacity")&&(e._opacity=d.css("opacity")),d.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(b,c){var d=a(this).data("draggable");d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"&&(d.overflowOffset=d.scrollParent.offset())},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=!1;if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!e.axis||e.axis!="x")d.overflowOffset.top+d.scrollParent[0].offsetHeight-b.pageY<e.scrollSensitivity?d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop-e.scrollSpeed);if(!e.axis||e.axis!="y")d.overflowOffset.left+d.scrollParent[0].offsetWidth-b.pageX<e.scrollSensitivity?d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft-e.scrollSpeed)}else{if(!e.axis||e.axis!="x")b.pageY-a(document).scrollTop()<e.scrollSensitivity?f=a(document).scrollTop(a(document).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<e.scrollSensitivity&&(f=a(document).scrollTop(a(document).scrollTop()+e.scrollSpeed));if(!e.axis||e.axis!="y")b.pageX-a(document).scrollLeft()<e.scrollSensitivity?f=a(document).scrollLeft(a(document).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<e.scrollSensitivity&&(f=a(document).scrollLeft(a(document).scrollLeft()+e.scrollSpeed))}f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c){var d=a(this).data("draggable"),e=d.options;d.snapElements=[],a(e.snap.constructor!=String?e.snap.items||":data(draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!=d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=e.snapTolerance,g=c.offset.left,h=g+d.helperProportions.width,i=c.offset.top,j=i+d.helperProportions.height;for(var k=d.snapElements.length-1;k>=0;k--){var l=d.snapElements[k].left,m=l+d.snapElements[k].width,n=d.snapElements[k].top,o=n+d.snapElements[k].height;if(!(l-f<g&&g<m+f&&n-f<i&&i<o+f||l-f<g&&g<m+f&&n-f<j&&j<o+f||l-f<h&&h<m+f&&n-f<i&&i<o+f||l-f<h&&h<m+f&&n-f<j&&j<o+f)){d.snapElements[k].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=!1;continue}if(e.snapMode!="inner"){var p=Math.abs(n-j)<=f,q=Math.abs(o-i)<=f,r=Math.abs(l-h)<=f,s=Math.abs(m-g)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n-d.helperProportions.height,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l-d.helperProportions.width}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m}).left-d.margins.left)}var t=p||q||r||s;if(e.snapMode!="outer"){var p=Math.abs(n-i)<=f,q=Math.abs(o-j)<=f,r=Math.abs(l-g)<=f,s=Math.abs(m-h)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o-d.helperProportions.height,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m-d.helperProportions.width}).left-d.margins.left)}!d.snapElements[k].snapping&&(p||q||r||s||t)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=p||q||r||s||t}}}),a.ui.plugin.add("draggable","stack",{start:function(b,c){var d=a(this).data("draggable").options,e=a.makeArray(a(d.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});if(!e.length)return;var f=parseInt(e[0].style.zIndex)||0;a(e).each(function(a){this.style.zIndex=f+a}),this[0].style.zIndex=f+e.length}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("zIndex")&&(e._zIndex=d.css("zIndex")),d.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.dialog.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c="ui-dialog ui-widget ui-widget-content ui-corner-all ",d={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},e={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},f=a.attrFn||{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0,click:!0};a.widget("ui.dialog",{options:{autoOpen:!0,buttons:{},closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:!1,maxWidth:!1,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",collision:"fit",using:function(b){var c=a(this).css(b).offset().top;c<0&&a(this).css("top",b.top-c)}},resizable:!0,show:null,stack:!0,title:"",width:300,zIndex:1e3},_create:function(){this.originalTitle=this.element.attr("title"),typeof this.originalTitle!="string"&&(this.originalTitle=""),this.options.title=this.options.title||this.originalTitle;var b=this,d=b.options,e=d.title||"&#160;",f=a.ui.dialog.getTitleId(b.element),g=(b.uiDialog=a("<div></div>")).appendTo(document.body).hide().addClass(c+d.dialogClass).css({zIndex:d.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(c){d.closeOnEscape&&!c.isDefaultPrevented()&&c.keyCode&&c.keyCode===a.ui.keyCode.ESCAPE&&(b.close(c),c.preventDefault())}).attr({role:"dialog","aria-labelledby":f}).mousedown(function(a){b.moveToTop(!1,a)}),h=b.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g),i=(b.uiDialogTitlebar=a("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g),j=a('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){j.addClass("ui-state-hover")},function(){j.removeClass("ui-state-hover")}).focus(function(){j.addClass("ui-state-focus")}).blur(function(){j.removeClass("ui-state-focus")}).click(function(a){return b.close(a),!1}).appendTo(i),k=(b.uiDialogTitlebarCloseText=a("<span></span>")).addClass("ui-icon ui-icon-closethick").text(d.closeText).appendTo(j),l=a("<span></span>").addClass("ui-dialog-title").attr("id",f).html(e).prependTo(i);a.isFunction(d.beforeclose)&&!a.isFunction(d.beforeClose)&&(d.beforeClose=d.beforeclose),i.find("*").add(i).disableSelection(),d.draggable&&a.fn.draggable&&b._makeDraggable(),d.resizable&&a.fn.resizable&&b._makeResizable(),b._createButtons(d.buttons),b._isOpen=!1,a.fn.bgiframe&&g.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var a=this;return a.overlay&&a.overlay.destroy(),a.uiDialog.hide(),a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"),a.uiDialog.remove(),a.originalTitle&&a.element.attr("title",a.originalTitle),a},widget:function(){return this.uiDialog},close:function(b){var c=this,d,e;if(!1===c._trigger("beforeClose",b))return;return c.overlay&&c.overlay.destroy(),c.uiDialog.unbind("keypress.ui-dialog"),c._isOpen=!1,c.options.hide?c.uiDialog.hide(c.options.hide,function(){c._trigger("close",b)}):(c.uiDialog.hide(),c._trigger("close",b)),a.ui.dialog.overlay.resize(),c.options.modal&&(d=0,a(".ui-dialog").each(function(){this!==c.uiDialog[0]&&(e=a(this).css("z-index"),isNaN(e)||(d=Math.max(d,e)))}),a.ui.dialog.maxZ=d),c},isOpen:function(){return this._isOpen},moveToTop:function(b,c){var d=this,e=d.options,f;return e.modal&&!b||!e.stack&&!e.modal?d._trigger("focus",c):(e.zIndex>a.ui.dialog.maxZ&&(a.ui.dialog.maxZ=e.zIndex),d.overlay&&(a.ui.dialog.maxZ+=1,d.overlay.$el.css("z-index",a.ui.dialog.overlay.maxZ=a.ui.dialog.maxZ)),f={scrollTop:d.element.scrollTop(),scrollLeft:d.element.scrollLeft()},a.ui.dialog.maxZ+=1,d.uiDialog.css("z-index",a.ui.dialog.maxZ),d.element.attr(f),d._trigger("focus",c),d)},open:function(){if(this._isOpen)return;var b=this,c=b.options,d=b.uiDialog;return b.overlay=c.modal?new a.ui.dialog.overlay(b):null,b._size(),b._position(c.position),d.show(c.show),b.moveToTop(!0),c.modal&&d.bind("keydown.ui-dialog",function(b){if(b.keyCode!==a.ui.keyCode.TAB)return;var c=a(":tabbable",this),d=c.filter(":first"),e=c.filter(":last");if(b.target===e[0]&&!b.shiftKey)return d.focus(1),!1;if(b.target===d[0]&&b.shiftKey)return e.focus(1),!1}),a(b.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus(),b._isOpen=!0,b._trigger("open"),b},_createButtons:function(b){var c=this,d=!1,e=a("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),g=a("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);c.uiDialog.find(".ui-dialog-buttonpane").remove(),typeof b=="object"&&b!==null&&a.each(b,function(){return!(d=!0)}),d&&(a.each(b,function(b,d){d=a.isFunction(d)?{click:d,text:b}:d;var e=a('<button type="button"></button>').click(function(){d.click.apply(c.element[0],arguments)}).appendTo(g);a.each(d,function(a,b){if(a==="click")return;a in f?e[a](b):e.attr(a,b)}),a.fn.button&&e.button()}),e.appendTo(c.uiDialog))},_makeDraggable:function(){function f(a){return{position:a.position,offset:a.offset}}var b=this,c=b.options,d=a(document),e;b.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(d,g){e=c.height==="auto"?"auto":a(this).height(),a(this).height(a(this).height()).addClass("ui-dialog-dragging"),b._trigger("dragStart",d,f(g))},drag:function(a,c){b._trigger("drag",a,f(c))},stop:function(g,h){c.position=[h.position.left-d.scrollLeft(),h.position.top-d.scrollTop()],a(this).removeClass("ui-dialog-dragging").height(e),b._trigger("dragStop",g,f(h)),a.ui.dialog.overlay.resize()}})},_makeResizable:function(c){function h(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}}c=c===b?this.options.resizable:c;var d=this,e=d.options,f=d.uiDialog.css("position"),g=typeof c=="string"?c:"n,e,s,w,se,sw,ne,nw";d.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:d.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:d._minHeight(),handles:g,start:function(b,c){a(this).addClass("ui-dialog-resizing"),d._trigger("resizeStart",b,h(c))},resize:function(a,b){d._trigger("resize",a,h(b))},stop:function(b,c){a(this).removeClass("ui-dialog-resizing"),e.height=a(this).height(),e.width=a(this).width(),d._trigger("resizeStop",b,h(c)),a.ui.dialog.overlay.resize()}}).css("position",f).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var a=this.options;return a.height==="auto"?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(b){var c=[],d=[0,0],e;if(b){if(typeof b=="string"||typeof b=="object"&&"0"in b)c=b.split?b.split(" "):[b[0],b[1]],c.length===1&&(c[1]=c[0]),a.each(["left","top"],function(a,b){+c[a]===c[a]&&(d[a]=c[a],c[a]=b)}),b={my:c.join(" "),at:c.join(" "),offset:d.join(" ")};b=a.extend({},a.ui.dialog.prototype.options.position,b)}else b=a.ui.dialog.prototype.options.position;e=this.uiDialog.is(":visible"),e||this.uiDialog.show(),this.uiDialog.css({top:0,left:0}).position(a.extend({of:window},b)),e||this.uiDialog.hide()},_setOptions:function(b){var c=this,f={},g=!1;a.each(b,function(a,b){c._setOption(a,b),a in d&&(g=!0),a in e&&(f[a]=b)}),g&&this._size(),this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",f)},_setOption:function(b,d){var e=this,f=e.uiDialog;switch(b){case"beforeclose":b="beforeClose";break;case"buttons":e._createButtons(d);break;case"closeText":e.uiDialogTitlebarCloseText.text(""+d);break;case"dialogClass":f.removeClass(e.options.dialogClass).addClass(c+d);break;case"disabled":d?f.addClass("ui-dialog-disabled"):f.removeClass("ui-dialog-disabled");break;case"draggable":var g=f.is(":data(draggable)");g&&!d&&f.draggable("destroy"),!g&&d&&e._makeDraggable();break;case"position":e._position(d);break;case"resizable":var h=f.is(":data(resizable)");h&&!d&&f.resizable("destroy"),h&&typeof d=="string"&&f.resizable("option","handles",d),!h&&d!==!1&&e._makeResizable(d);break;case"title":a(".ui-dialog-title",e.uiDialogTitlebar).html(""+(d||"&#160;"))}a.Widget.prototype._setOption.apply(e,arguments)},_size:function(){var b=this.options,c,d,e=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0}),b.minWidth>b.width&&(b.width=b.minWidth),c=this.uiDialog.css({height:"auto",width:b.width}).height(),d=Math.max(0,b.minHeight-c);if(b.height==="auto")if(a.support.minHeight)this.element.css({minHeight:d,height:"auto"});else{this.uiDialog.show();var f=this.element.css("height","auto").height();e||this.uiDialog.hide(),this.element.height(Math.max(f,d))}else this.element.height(Math.max(b.height-c,0));this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}}),a.extend(a.ui.dialog,{version:"1.8.22",uuid:0,maxZ:0,getTitleId:function(a){var b=a.attr("id");return b||(this.uuid+=1,b=this.uuid),"ui-dialog-title-"+b},overlay:function(b){this.$el=a.ui.dialog.overlay.create(b)}}),a.extend(a.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:a.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(a){return a+".dialog-overlay"}).join(" "),create:function(b){this.instances.length===0&&(setTimeout(function(){a.ui.dialog.overlay.instances.length&&a(document).bind(a.ui.dialog.overlay.events,function(b){if(a(b.target).zIndex()<a.ui.dialog.overlay.maxZ)return!1})},1),a(document).bind("keydown.dialog-overlay",function(c){b.options.closeOnEscape&&!c.isDefaultPrevented()&&c.keyCode&&c.keyCode===a.ui.keyCode.ESCAPE&&(b.close(c),c.preventDefault())}),a(window).bind("resize.dialog-overlay",a.ui.dialog.overlay.resize));var c=(this.oldInstances.pop()||a("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});return a.fn.bgiframe&&c.bgiframe(),this.instances.push(c),c},destroy:function(b){var c=a.inArray(b,this.instances);c!=-1&&this.oldInstances.push(this.instances.splice(c,1)[0]),this.instances.length===0&&a([document,window]).unbind(".dialog-overlay"),b.remove();var d=0;a.each(this.instances,function(){d=Math.max(d,this.css("z-index"))}),this.maxZ=d},height:function(){var b,c;return a.browser.msie&&a.browser.version<7?(b=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),c=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight),b<c?a(window).height()+"px":b+"px"):a(document).height()+"px"},width:function(){var b,c;return a.browser.msie?(b=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),c=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth),b<c?a(window).width()+"px":b+"px"):a(document).width()+"px"},resize:function(){var b=a([]);a.each(a.ui.dialog.overlay.instances,function(){b=b.add(this)}),b.css({width:0,height:0}).css({width:a.ui.dialog.overlay.width(),height:a.ui.dialog.overlay.height()})}}),a.extend(a.ui.dialog.overlay.prototype,{destroy:function(){a.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);;
/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.slider.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c=5;a.widget("ui.slider",a.ui.mouse,{widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var b=this,d=this.options,e=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",g=d.values&&d.values.length||1,h=[];this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(d.disabled?" ui-slider-disabled ui-disabled":"")),this.range=a([]),d.range&&(d.range===!0&&(d.values||(d.values=[this._valueMin(),this._valueMin()]),d.values.length&&d.values.length!==2&&(d.values=[d.values[0],d.values[0]])),this.range=a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(d.range==="min"||d.range==="max"?" ui-slider-range-"+d.range:"")));for(var i=e.length;i<g;i+=1)h.push(f);this.handles=e.add(a(h.join("")).appendTo(b.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(a){a.preventDefault()}).hover(function(){d.disabled||a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")}).focus(function(){d.disabled?a(this).blur():(a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),a(this).addClass("ui-state-focus"))}).blur(function(){a(this).removeClass("ui-state-focus")}),this.handles.each(function(b){a(this).data("index.ui-slider-handle",b)}),this.handles.keydown(function(d){var e=a(this).data("index.ui-slider-handle"),f,g,h,i;if(b.options.disabled)return;switch(d.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:d.preventDefault();if(!b._keySliding){b._keySliding=!0,a(this).addClass("ui-state-active"),f=b._start(d,e);if(f===!1)return}}i=b.options.step,b.options.values&&b.options.values.length?g=h=b.values(e):g=h=b.value();switch(d.keyCode){case a.ui.keyCode.HOME:h=b._valueMin();break;case a.ui.keyCode.END:h=b._valueMax();break;case a.ui.keyCode.PAGE_UP:h=b._trimAlignValue(g+(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.PAGE_DOWN:h=b._trimAlignValue(g-(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(g===b._valueMax())return;h=b._trimAlignValue(g+i);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(g===b._valueMin())return;h=b._trimAlignValue(g-i)}b._slide(d,e,h)}).keyup(function(c){var d=a(this).data("index.ui-slider-handle");b._keySliding&&(b._keySliding=!1,b._stop(c,d),b._change(c,d),a(this).removeClass("ui-state-active"))}),this._refreshValue(),this._animateOff=!1},destroy:function(){return this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"),this._mouseDestroy(),this},_mouseCapture:function(b){var c=this.options,d,e,f,g,h,i,j,k,l;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),d={x:b.pageX,y:b.pageY},e=this._normValueFromMouse(d),f=this._valueMax()-this._valueMin()+1,h=this,this.handles.each(function(b){var c=Math.abs(e-h.values(b));f>c&&(f=c,g=a(this),i=b)}),c.range===!0&&this.values(1)===c.min&&(i+=1,g=a(this.handles[i])),j=this._start(b,i),j===!1?!1:(this._mouseSliding=!0,h._handleIndex=i,g.addClass("ui-state-active").focus(),k=g.offset(),l=!a(b.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:b.pageX-k.left-g.width()/2,top:b.pageY-k.top-g.height()/2-(parseInt(g.css("borderTopWidth"),10)||0)-(parseInt(g.css("borderBottomWidth"),10)||0)+(parseInt(g.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(b,i,e),this._animateOff=!0,!0))},_mouseStart:function(a){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);return this._slide(a,this._handleIndex,c),!1},_mouseStop:function(a){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(a){var b,c,d,e,f;return this.orientation==="horizontal"?(b=this.elementSize.width,c=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=c/b,d>1&&(d=1),d<0&&(d=0),this.orientation==="vertical"&&(d=1-d),e=this._valueMax()-this._valueMin(),f=this._valueMin()+d*e,this._trimAlignValue(f)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};return this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("start",a,c)},_slide:function(a,b,c){var d,e,f;this.options.values&&this.options.values.length?(d=this.values(b?0:1),this.options.values.length===2&&this.options.range===!0&&(b===0&&c>d||b===1&&c<d)&&(c=d),c!==this.values(b)&&(e=this.values(),e[b]=c,f=this._trigger("slide",a,{handle:this.handles[b],value:c,values:e}),d=this.values(b?0:1),f!==!1&&this.values(b,c,!0))):c!==this.value()&&(f=this._trigger("slide",a,{handle:this.handles[b],value:c}),f!==!1&&this.value(c))},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("change",a,c)}},value:function(a){if(arguments.length){this.options.value=this._trimAlignValue(a),this._refreshValue(),this._change(null,0);return}return this._value()},values:function(b,c){var d,e,f;if(arguments.length>1){this.options.values[b]=this._trimAlignValue(c),this._refreshValue(),this._change(null,b);return}if(!arguments.length)return this._values();if(!a.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(b):this.value();d=this.options.values,e=arguments[0];for(f=0;f<d.length;f+=1)d[f]=this._trimAlignValue(e[f]),this._change(null,f);this._refreshValue()},_setOption:function(b,c){var d,e=0;a.isArray(this.options.values)&&(e=this.options.values.length),a.Widget.prototype._setOption.apply(this,arguments);switch(b){case"disabled":c?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.propAttr("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.propAttr("disabled",!1),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(d=0;d<e;d+=1)this._change(null,d);this._animateOff=!1}},_value:function(){var a=this.options.value;return a=this._trimAlignValue(a),a},_values:function(a){var b,c,d;if(arguments.length)return b=this.options.values[a],b=this._trimAlignValue(b),b;c=this.options.values.slice();for(d=0;d<c.length;d+=1)c[d]=this._trimAlignValue(c[d]);return c},_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b,d=a-c;return Math.abs(c)*2>=b&&(d+=c>0?b:-b),parseFloat(d.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var b=this.options.range,c=this.options,d=this,e=this._animateOff?!1:c.animate,f,g={},h,i,j,k;this.options.values&&this.options.values.length?this.handles.each(function(b,i){f=(d.values(b)-d._valueMin())/(d._valueMax()-d._valueMin())*100,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",a(this).stop(1,1)[e?"animate":"css"](g,c.animate),d.options.range===!0&&(d.orientation==="horizontal"?(b===0&&d.range.stop(1,1)[e?"animate":"css"]({left:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({width:f-h+"%"},{queue:!1,duration:c.animate})):(b===0&&d.range.stop(1,1)[e?"animate":"css"]({bottom:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({height:f-h+"%"},{queue:!1,duration:c.animate}))),h=f}):(i=this.value(),j=this._valueMin(),k=this._valueMax(),f=k!==j?(i-j)/(k-j)*100:0,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",this.handle.stop(1,1)[e?"animate":"css"](g,c.animate),b==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[e?"animate":"css"]({width:f+"%"},c.animate),b==="max"&&this.orientation==="horizontal"&&this.range[e?"animate":"css"]({width:100-f+"%"},{queue:!1,duration:c.animate}),b==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[e?"animate":"css"]({height:f+"%"},c.animate),b==="max"&&this.orientation==="vertical"&&this.range[e?"animate":"css"]({height:100-f+"%"},{queue:!1,duration:c.animate}))}}),a.extend(a.ui.slider,{version:"1.8.22"})})(jQuery);;
/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.autocomplete.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c=0;a.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var b=this,c=this.element[0].ownerDocument,d;this.isMultiLine=this.element.is("textarea"),this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(c){if(b.options.disabled||b.element.propAttr("readOnly"))return;d=!1;var e=a.ui.keyCode;switch(c.keyCode){case e.PAGE_UP:b._move("previousPage",c);break;case e.PAGE_DOWN:b._move("nextPage",c);break;case e.UP:b._keyEvent("previous",c);break;case e.DOWN:b._keyEvent("next",c);break;case e.ENTER:case e.NUMPAD_ENTER:b.menu.active&&(d=!0,c.preventDefault());case e.TAB:if(!b.menu.active)return;b.menu.select(c);break;case e.ESCAPE:b.element.val(b.term),b.close(c);break;default:clearTimeout(b.searching),b.searching=setTimeout(function(){b.term!=b.element.val()&&(b.selectedItem=null,b.search(null,c))},b.options.delay)}}).bind("keypress.autocomplete",function(a){d&&(d=!1,a.preventDefault())}).bind("focus.autocomplete",function(){if(b.options.disabled)return;b.selectedItem=null,b.previous=b.element.val()}).bind("blur.autocomplete",function(a){if(b.options.disabled)return;clearTimeout(b.searching),b.closing=setTimeout(function(){b.close(a),b._change(a)},150)}),this._initSource(),this.menu=a("<ul></ul>").addClass("ui-autocomplete").appendTo(a(this.options.appendTo||"body",c)[0]).mousedown(function(c){var d=b.menu.element[0];a(c.target).closest(".ui-menu-item").length||setTimeout(function(){a(document).one("mousedown",function(c){c.target!==b.element[0]&&c.target!==d&&!a.ui.contains(d,c.target)&&b.close()})},1),setTimeout(function(){clearTimeout(b.closing)},13)}).menu({focus:function(a,c){var d=c.item.data("item.autocomplete");!1!==b._trigger("focus",a,{item:d})&&/^key/.test(a.originalEvent.type)&&b.element.val(d.value)},selected:function(a,d){var e=d.item.data("item.autocomplete"),f=b.previous;b.element[0]!==c.activeElement&&(b.element.focus(),b.previous=f,setTimeout(function(){b.previous=f,b.selectedItem=e},1)),!1!==b._trigger("select",a,{item:e})&&b.element.val(e.value),b.term=b.element.val(),b.close(a),b.selectedItem=e},blur:function(a,c){b.menu.element.is(":visible")&&b.element.val()!==b.term&&b.element.val(b.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu"),a.fn.bgiframe&&this.menu.element.bgiframe(),b.beforeunloadHandler=function(){b.element.removeAttr("autocomplete")},a(window).bind("beforeunload",b.beforeunloadHandler)},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"),this.menu.element.remove(),a(window).unbind("beforeunload",this.beforeunloadHandler),a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments),b==="source"&&this._initSource(),b==="appendTo"&&this.menu.element.appendTo(a(c||"body",this.element[0].ownerDocument)[0]),b==="disabled"&&c&&this.xhr&&this.xhr.abort()},_initSource:function(){var b=this,c,d;a.isArray(this.options.source)?(c=this.options.source,this.source=function(b,d){d(a.ui.autocomplete.filter(c,b.term))}):typeof this.options.source=="string"?(d=this.options.source,this.source=function(c,e){b.xhr&&b.xhr.abort(),b.xhr=a.ajax({url:d,data:c,dataType:"json",success:function(a,b){e(a)},error:function(){e([])}})}):this.source=this.options.source},search:function(a,b){a=a!=null?a:this.element.val(),this.term=this.element.val();if(a.length<this.options.minLength)return this.close(b);clearTimeout(this.closing);if(this._trigger("search",b)===!1)return;return this._search(a)},_search:function(a){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.source({term:a},this._response())},_response:function(){var a=this,b=++c;return function(d){b===c&&a.__response(d),a.pending--,a.pending||a.element.removeClass("ui-autocomplete-loading")}},__response:function(a){!this.options.disabled&&a&&a.length?(a=this._normalize(a),this._suggest(a),this._trigger("open")):this.close()},close:function(a){clearTimeout(this.closing),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.deactivate(),this._trigger("close",a))},_change:function(a){this.previous!==this.element.val()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(b){return b.length&&b[0].label&&b[0].value?b:a.map(b,function(b){return typeof b=="string"?{label:b,value:b}:a.extend({label:b.label||b.value,value:b.value||b.label},b)})},_suggest:function(b){var c=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(c,b),this.menu.deactivate(),this.menu.refresh(),c.show(),this._resizeMenu(),c.position(a.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(new a.Event("mouseover"))},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(b,c){var d=this;a.each(c,function(a,c){d._renderItem(b,c)})},_renderItem:function(b,c){return a("<li></li>").data("item.autocomplete",c).append(a("<a></a>").text(c.label)).appendTo(b)},_move:function(a,b){if(!this.menu.element.is(":visible")){this.search(null,b);return}if(this.menu.first()&&/^previous/.test(a)||this.menu.last()&&/^next/.test(a)){this.element.val(this.term),this.menu.deactivate();return}this.menu[a](b)},widget:function(){return this.menu.element},_keyEvent:function(a,b){if(!this.isMultiLine||this.menu.element.is(":visible"))this._move(a,b),b.preventDefault()}}),a.extend(a.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},filter:function(b,c){var d=new RegExp(a.ui.autocomplete.escapeRegex(c),"i");return a.grep(b,function(a){return d.test(a.label||a.value||a)})}})})(jQuery),function(a){a.widget("ui.menu",{_create:function(){var b=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(c){if(!a(c.target).closest(".ui-menu-item a").length)return;c.preventDefault(),b.select(c)}),this.refresh()},refresh:function(){var b=this,c=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");c.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(c){b.activate(c,a(this).parent())}).mouseleave(function(){b.deactivate()})},activate:function(a,b){this.deactivate();if(this.hasScroll()){var c=b.offset().top-this.element.offset().top,d=this.element.scrollTop(),e=this.element.height();c<0?this.element.scrollTop(d+c):c>=e&&this.element.scrollTop(d+c-e+b.height())}this.active=b.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end(),this._trigger("focus",a,{item:b})},deactivate:function(){if(!this.active)return;this.active.children("a").removeClass("ui-state-hover").removeAttr("id"),this._trigger("blur"),this.active=null},next:function(a){this.move("next",".ui-menu-item:first",a)},previous:function(a){this.move("prev",".ui-menu-item:last",a)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(a,b,c){if(!this.active){this.activate(c,this.element.children(b));return}var d=this.active[a+"All"](".ui-menu-item").eq(0);d.length?this.activate(c,d):this.activate(c,this.element.children(b))},nextPage:function(b){if(this.hasScroll()){if(!this.active||this.last()){this.activate(b,this.element.children(".ui-menu-item:first"));return}var c=this.active.offset().top,d=this.element.height(),e=this.element.children(".ui-menu-item").filter(function(){var b=a(this).offset().top-c-d+a(this).height();return b<10&&b>-10});e.length||(e=this.element.children(".ui-menu-item:last")),this.activate(b,e)}else this.activate(b,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))},previousPage:function(b){if(this.hasScroll()){if(!this.active||this.first()){this.activate(b,this.element.children(".ui-menu-item:last"));return}var c=this.active.offset().top,d=this.element.height(),e=this.element.children(".ui-menu-item").filter(function(){var b=a(this).offset().top-c+d-a(this).height();return b<10&&b>-10});e.length||(e=this.element.children(".ui-menu-item:first")),this.activate(b,e)}else this.activate(b,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element[a.fn.prop?"prop":"attr"]("scrollHeight")},select:function(a){this._trigger("selected",a,{item:this.active})}})}(jQuery);
/*
 * jPlayer Plugin for jQuery JavaScript Library
 * http://www.jplayer.org
 *
 * Copyright (c) 2009 - 2012 Happyworm Ltd
 * Dual licensed under the MIT and GPL licenses.
 *  - http://www.opensource.org/licenses/mit-license.php
 *  - http://www.gnu.org/copyleft/gpl.html
 *
 * Author: Mark J Panaghiston
 * Version: 2.2.0
 * Date: 13th September 2012
 */

(function(b,f){b.fn.jPlayer=function(a){var c="string"===typeof a,d=Array.prototype.slice.call(arguments,1),e=this,a=!c&&d.length?b.extend.apply(null,[!0,a].concat(d)):a;if(c&&"_"===a.charAt(0))return e;c?this.each(function(){var c=b.data(this,"jPlayer"),h=c&&b.isFunction(c[a])?c[a].apply(c,d):c;if(h!==c&&h!==f)return e=h,!1}):this.each(function(){var c=b.data(this,"jPlayer");c?c.option(a||{}):b.data(this,"jPlayer",new b.jPlayer(a,this))});return e};b.jPlayer=function(a,c){if(arguments.length){this.element=
b(c);this.options=b.extend(!0,{},this.options,a);var d=this;this.element.bind("remove.jPlayer",function(){d.destroy()});this._init()}};b.jPlayer.emulateMethods="load play pause";b.jPlayer.emulateStatus="src readyState networkState currentTime duration paused ended playbackRate";b.jPlayer.emulateOptions="muted volume";b.jPlayer.reservedEvent="ready flashreset resize repeat error warning";b.jPlayer.event={ready:"jPlayer_ready",flashreset:"jPlayer_flashreset",resize:"jPlayer_resize",repeat:"jPlayer_repeat",
click:"jPlayer_click",error:"jPlayer_error",warning:"jPlayer_warning",loadstart:"jPlayer_loadstart",progress:"jPlayer_progress",suspend:"jPlayer_suspend",abort:"jPlayer_abort",emptied:"jPlayer_emptied",stalled:"jPlayer_stalled",play:"jPlayer_play",pause:"jPlayer_pause",loadedmetadata:"jPlayer_loadedmetadata",loadeddata:"jPlayer_loadeddata",waiting:"jPlayer_waiting",playing:"jPlayer_playing",canplay:"jPlayer_canplay",canplaythrough:"jPlayer_canplaythrough",seeking:"jPlayer_seeking",seeked:"jPlayer_seeked",
timeupdate:"jPlayer_timeupdate",ended:"jPlayer_ended",ratechange:"jPlayer_ratechange",durationchange:"jPlayer_durationchange",volumechange:"jPlayer_volumechange"};b.jPlayer.htmlEvent="loadstart abort emptied stalled loadedmetadata loadeddata canplay canplaythrough ratechange".split(" ");b.jPlayer.pause=function(){b.each(b.jPlayer.prototype.instances,function(a,c){c.data("jPlayer").status.srcSet&&c.jPlayer("pause")})};b.jPlayer.timeFormat={showHour:!1,showMin:!0,showSec:!0,padHour:!1,padMin:!0,padSec:!0,
sepHour:":",sepMin:":",sepSec:""};b.jPlayer.convertTime=function(a){var c=new Date(1E3*a),d=c.getUTCHours(),a=c.getUTCMinutes(),c=c.getUTCSeconds(),d=b.jPlayer.timeFormat.padHour&&10>d?"0"+d:d,a=b.jPlayer.timeFormat.padMin&&10>a?"0"+a:a,c=b.jPlayer.timeFormat.padSec&&10>c?"0"+c:c;return(b.jPlayer.timeFormat.showHour?d+b.jPlayer.timeFormat.sepHour:"")+(b.jPlayer.timeFormat.showMin?a+b.jPlayer.timeFormat.sepMin:"")+(b.jPlayer.timeFormat.showSec?c+b.jPlayer.timeFormat.sepSec:"")};b.jPlayer.uaBrowser=
function(a){var a=a.toLowerCase(),c=/(opera)(?:.*version)?[ \/]([\w.]+)/,b=/(msie) ([\w.]+)/,e=/(mozilla)(?:.*? rv:([\w.]+))?/,a=/(webkit)[ \/]([\w.]+)/.exec(a)||c.exec(a)||b.exec(a)||0>a.indexOf("compatible")&&e.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}};b.jPlayer.uaPlatform=function(a){var b=a.toLowerCase(),d=/(android)/,e=/(mobile)/,a=/(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/.exec(b)||[],b=/(ipad|playbook)/.exec(b)||!e.exec(b)&&d.exec(b)||[];a[1]&&(a[1]=a[1].replace(/\s/g,
"_"));return{platform:a[1]||"",tablet:b[1]||""}};b.jPlayer.browser={};b.jPlayer.platform={};var i=b.jPlayer.uaBrowser(navigator.userAgent);i.browser&&(b.jPlayer.browser[i.browser]=!0,b.jPlayer.browser.version=i.version);i=b.jPlayer.uaPlatform(navigator.userAgent);i.platform&&(b.jPlayer.platform[i.platform]=!0,b.jPlayer.platform.mobile=!i.tablet,b.jPlayer.platform.tablet=!!i.tablet);b.jPlayer.prototype={count:0,version:{script:"2.2.0",needFlash:"2.2.0",flash:"unknown"},options:{swfPath:"js",solution:"html, flash",
supplied:"mp3",preload:"metadata",volume:0.8,muted:!1,wmode:"opaque",backgroundColor:"#000000",cssSelectorAncestor:"#jp_container_1",cssSelector:{videoPlay:".jp-video-play",play:".jp-play",pause:".jp-pause",stop:".jp-stop",seekBar:".jp-seek-bar",playBar:".jp-play-bar",mute:".jp-mute",unmute:".jp-unmute",volumeBar:".jp-volume-bar",volumeBarValue:".jp-volume-bar-value",volumeMax:".jp-volume-max",currentTime:".jp-current-time",duration:".jp-duration",fullScreen:".jp-full-screen",restoreScreen:".jp-restore-screen",
repeat:".jp-repeat",repeatOff:".jp-repeat-off",gui:".jp-gui",noSolution:".jp-no-solution"},fullScreen:!1,autohide:{restored:!1,full:!0,fadeIn:200,fadeOut:600,hold:1E3},loop:!1,repeat:function(a){a.jPlayer.options.loop?b(this).unbind(".jPlayerRepeat").bind(b.jPlayer.event.ended+".jPlayer.jPlayerRepeat",function(){b(this).jPlayer("play")}):b(this).unbind(".jPlayerRepeat")},nativeVideoControls:{},noFullScreen:{msie:/msie [0-6]/,ipad:/ipad.*?os [0-4]/,iphone:/iphone/,ipod:/ipod/,android_pad:/android [0-3](?!.*?mobile)/,
android_phone:/android.*?mobile/,blackberry:/blackberry/,windows_ce:/windows ce/,webos:/webos/},noVolume:{ipad:/ipad/,iphone:/iphone/,ipod:/ipod/,android_pad:/android(?!.*?mobile)/,android_phone:/android.*?mobile/,blackberry:/blackberry/,windows_ce:/windows ce/,webos:/webos/,playbook:/playbook/},verticalVolume:!1,idPrefix:"jp",noConflict:"jQuery",emulateHtml:!1,errorAlerts:!1,warningAlerts:!1},optionsAudio:{size:{width:"0px",height:"0px",cssClass:""},sizeFull:{width:"0px",height:"0px",cssClass:""}},
optionsVideo:{size:{width:"480px",height:"270px",cssClass:"jp-video-270p"},sizeFull:{width:"100%",height:"100%",cssClass:"jp-video-full"}},instances:{},status:{src:"",media:{},paused:!0,format:{},formatType:"",waitForPlay:!0,waitForLoad:!0,srcSet:!1,video:!1,seekPercent:0,currentPercentRelative:0,currentPercentAbsolute:0,currentTime:0,duration:0,readyState:0,networkState:0,playbackRate:1,ended:0},internal:{ready:!1},solution:{html:!0,flash:!0},format:{mp3:{codec:'audio/mpeg; codecs="mp3"',flashCanPlay:!0,
media:"audio"},m4a:{codec:'audio/mp4; codecs="mp4a.40.2"',flashCanPlay:!0,media:"audio"},oga:{codec:'audio/ogg; codecs="vorbis"',flashCanPlay:!1,media:"audio"},wav:{codec:'audio/wav; codecs="1"',flashCanPlay:!1,media:"audio"},webma:{codec:'audio/webm; codecs="vorbis"',flashCanPlay:!1,media:"audio"},fla:{codec:"audio/x-flv",flashCanPlay:!0,media:"audio"},rtmpa:{codec:'audio/rtmp; codecs="rtmp"',flashCanPlay:!0,media:"audio"},m4v:{codec:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',flashCanPlay:!0,media:"video"},
ogv:{codec:'video/ogg; codecs="theora, vorbis"',flashCanPlay:!1,media:"video"},webmv:{codec:'video/webm; codecs="vorbis, vp8"',flashCanPlay:!1,media:"video"},flv:{codec:"video/x-flv",flashCanPlay:!0,media:"video"},rtmpv:{codec:'video/rtmp; codecs="rtmp"',flashCanPlay:!0,media:"video"}},_init:function(){var a=this;this.element.empty();this.status=b.extend({},this.status);this.internal=b.extend({},this.internal);this.internal.domNode=this.element.get(0);this.formats=[];this.solutions=[];this.require=
{};this.htmlElement={};this.html={};this.html.audio={};this.html.video={};this.flash={};this.css={};this.css.cs={};this.css.jq={};this.ancestorJq=[];this.options.volume=this._limitValue(this.options.volume,0,1);b.each(this.options.supplied.toLowerCase().split(","),function(c,d){var e=d.replace(/^\s+|\s+$/g,"");if(a.format[e]){var f=false;b.each(a.formats,function(a,b){if(e===b){f=true;return false}});f||a.formats.push(e)}});b.each(this.options.solution.toLowerCase().split(","),function(c,d){var e=
d.replace(/^\s+|\s+$/g,"");if(a.solution[e]){var f=false;b.each(a.solutions,function(a,b){if(e===b){f=true;return false}});f||a.solutions.push(e)}});this.internal.instance="jp_"+this.count;this.instances[this.internal.instance]=this.element;this.element.attr("id")||this.element.attr("id",this.options.idPrefix+"_jplayer_"+this.count);this.internal.self=b.extend({},{id:this.element.attr("id"),jq:this.element});this.internal.audio=b.extend({},{id:this.options.idPrefix+"_audio_"+this.count,jq:f});this.internal.video=
b.extend({},{id:this.options.idPrefix+"_video_"+this.count,jq:f});this.internal.flash=b.extend({},{id:this.options.idPrefix+"_flash_"+this.count,jq:f,swf:this.options.swfPath+(this.options.swfPath.toLowerCase().slice(-4)!==".swf"?(this.options.swfPath&&this.options.swfPath.slice(-1)!=="/"?"/":"")+"Jplayer.swf":"")});this.internal.poster=b.extend({},{id:this.options.idPrefix+"_poster_"+this.count,jq:f});b.each(b.jPlayer.event,function(b,c){if(a.options[b]!==f){a.element.bind(c+".jPlayer",a.options[b]);
a.options[b]=f}});this.require.audio=false;this.require.video=false;b.each(this.formats,function(b,c){a.require[a.format[c].media]=true});this.options=this.require.video?b.extend(true,{},this.optionsVideo,this.options):b.extend(true,{},this.optionsAudio,this.options);this._setSize();this.status.nativeVideoControls=this._uaBlocklist(this.options.nativeVideoControls);this.status.noFullScreen=this._uaBlocklist(this.options.noFullScreen);this.status.noVolume=this._uaBlocklist(this.options.noVolume);this._restrictNativeVideoControls();
this.htmlElement.poster=document.createElement("img");this.htmlElement.poster.id=this.internal.poster.id;this.htmlElement.poster.onload=function(){(!a.status.video||a.status.waitForPlay)&&a.internal.poster.jq.show()};this.element.append(this.htmlElement.poster);this.internal.poster.jq=b("#"+this.internal.poster.id);this.internal.poster.jq.css({width:this.status.width,height:this.status.height});this.internal.poster.jq.hide();this.internal.poster.jq.bind("click.jPlayer",function(){a._trigger(b.jPlayer.event.click)});
this.html.audio.available=false;if(this.require.audio){this.htmlElement.audio=document.createElement("audio");this.htmlElement.audio.id=this.internal.audio.id;this.html.audio.available=!!this.htmlElement.audio.canPlayType&&this._testCanPlayType(this.htmlElement.audio)}this.html.video.available=false;if(this.require.video){this.htmlElement.video=document.createElement("video");this.htmlElement.video.id=this.internal.video.id;this.html.video.available=!!this.htmlElement.video.canPlayType&&this._testCanPlayType(this.htmlElement.video)}this.flash.available=
this._checkForFlash(10);this.html.canPlay={};this.flash.canPlay={};b.each(this.formats,function(b,c){a.html.canPlay[c]=a.html[a.format[c].media].available&&""!==a.htmlElement[a.format[c].media].canPlayType(a.format[c].codec);a.flash.canPlay[c]=a.format[c].flashCanPlay&&a.flash.available});this.html.desired=false;this.flash.desired=false;b.each(this.solutions,function(c,d){if(c===0)a[d].desired=true;else{var e=false,f=false;b.each(a.formats,function(b,c){a[a.solutions[0]].canPlay[c]&&(a.format[c].media===
"video"?f=true:e=true)});a[d].desired=a.require.audio&&!e||a.require.video&&!f}});this.html.support={};this.flash.support={};b.each(this.formats,function(b,c){a.html.support[c]=a.html.canPlay[c]&&a.html.desired;a.flash.support[c]=a.flash.canPlay[c]&&a.flash.desired});this.html.used=false;this.flash.used=false;b.each(this.solutions,function(c,d){b.each(a.formats,function(b,c){if(a[d].support[c]){a[d].used=true;return false}})});this._resetActive();this._resetGate();this._cssSelectorAncestor(this.options.cssSelectorAncestor);
if(!this.html.used&&!this.flash.used){this._error({type:b.jPlayer.error.NO_SOLUTION,context:"{solution:'"+this.options.solution+"', supplied:'"+this.options.supplied+"'}",message:b.jPlayer.errorMsg.NO_SOLUTION,hint:b.jPlayer.errorHint.NO_SOLUTION});this.css.jq.noSolution.length&&this.css.jq.noSolution.show()}else this.css.jq.noSolution.length&&this.css.jq.noSolution.hide();if(this.flash.used){var c,d="jQuery="+encodeURI(this.options.noConflict)+"&id="+encodeURI(this.internal.self.id)+"&vol="+this.options.volume+
"&muted="+this.options.muted;if(b.jPlayer.browser.msie&&Number(b.jPlayer.browser.version)<=8){d=['<param name="movie" value="'+this.internal.flash.swf+'" />','<param name="FlashVars" value="'+d+'" />','<param name="allowScriptAccess" value="always" />','<param name="bgcolor" value="'+this.options.backgroundColor+'" />','<param name="wmode" value="'+this.options.wmode+'" />'];c=document.createElement('<object id="'+this.internal.flash.id+'" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="0" height="0"></object>');
for(var e=0;e<d.length;e++)c.appendChild(document.createElement(d[e]))}else{e=function(a,b,c){var d=document.createElement("param");d.setAttribute("name",b);d.setAttribute("value",c);a.appendChild(d)};c=document.createElement("object");c.setAttribute("id",this.internal.flash.id);c.setAttribute("data",this.internal.flash.swf);c.setAttribute("type","application/x-shockwave-flash");c.setAttribute("width","1");c.setAttribute("height","1");e(c,"flashvars",d);e(c,"allowscriptaccess","always");e(c,"bgcolor",
this.options.backgroundColor);e(c,"wmode",this.options.wmode)}this.element.append(c);this.internal.flash.jq=b(c)}if(this.html.used){if(this.html.audio.available){this._addHtmlEventListeners(this.htmlElement.audio,this.html.audio);this.element.append(this.htmlElement.audio);this.internal.audio.jq=b("#"+this.internal.audio.id)}if(this.html.video.available){this._addHtmlEventListeners(this.htmlElement.video,this.html.video);this.element.append(this.htmlElement.video);this.internal.video.jq=b("#"+this.internal.video.id);
this.status.nativeVideoControls?this.internal.video.jq.css({width:this.status.width,height:this.status.height}):this.internal.video.jq.css({width:"0px",height:"0px"});this.internal.video.jq.bind("click.jPlayer",function(){a._trigger(b.jPlayer.event.click)})}}this.options.emulateHtml&&this._emulateHtmlBridge();this.html.used&&!this.flash.used&&setTimeout(function(){a.internal.ready=true;a.version.flash="n/a";a._trigger(b.jPlayer.event.repeat);a._trigger(b.jPlayer.event.ready)},100);this._updateNativeVideoControls();
this._updateInterface();this._updateButtons(false);this._updateAutohide();this._updateVolume(this.options.volume);this._updateMute(this.options.muted);this.css.jq.videoPlay.length&&this.css.jq.videoPlay.hide();b.jPlayer.prototype.count++},destroy:function(){this.clearMedia();this._removeUiClass();this.css.jq.currentTime.length&&this.css.jq.currentTime.text("");this.css.jq.duration.length&&this.css.jq.duration.text("");b.each(this.css.jq,function(a,b){b.length&&b.unbind(".jPlayer")});this.internal.poster.jq.unbind(".jPlayer");
this.internal.video.jq&&this.internal.video.jq.unbind(".jPlayer");this.options.emulateHtml&&this._destroyHtmlBridge();this.element.removeData("jPlayer");this.element.unbind(".jPlayer");this.element.empty();delete this.instances[this.internal.instance]},enable:function(){},disable:function(){},_testCanPlayType:function(a){try{a.canPlayType(this.format.mp3.codec);return true}catch(b){return false}},_uaBlocklist:function(a){var c=navigator.userAgent.toLowerCase(),d=false;b.each(a,function(a,b){if(b&&
b.test(c)){d=true;return false}});return d},_restrictNativeVideoControls:function(){if(this.require.audio&&this.status.nativeVideoControls){this.status.nativeVideoControls=false;this.status.noFullScreen=true}},_updateNativeVideoControls:function(){if(this.html.video.available&&this.html.used){this.htmlElement.video.controls=this.status.nativeVideoControls;this._updateAutohide();if(this.status.nativeVideoControls&&this.require.video){this.internal.poster.jq.hide();this.internal.video.jq.css({width:this.status.width,
height:this.status.height})}else if(this.status.waitForPlay&&this.status.video){this.internal.poster.jq.show();this.internal.video.jq.css({width:"0px",height:"0px"})}}},_addHtmlEventListeners:function(a,c){var d=this;a.preload=this.options.preload;a.muted=this.options.muted;a.volume=this.options.volume;a.addEventListener("progress",function(){if(c.gate){d._getHtmlStatus(a);d._updateInterface();d._trigger(b.jPlayer.event.progress)}},false);a.addEventListener("timeupdate",function(){if(c.gate){d._getHtmlStatus(a);
d._updateInterface();d._trigger(b.jPlayer.event.timeupdate)}},false);a.addEventListener("durationchange",function(){if(c.gate){d._getHtmlStatus(a);d._updateInterface();d._trigger(b.jPlayer.event.durationchange)}},false);a.addEventListener("play",function(){if(c.gate){d._updateButtons(true);d._html_checkWaitForPlay();d._trigger(b.jPlayer.event.play)}},false);a.addEventListener("playing",function(){if(c.gate){d._updateButtons(true);d._seeked();d._trigger(b.jPlayer.event.playing)}},false);a.addEventListener("pause",
function(){if(c.gate){d._updateButtons(false);d._trigger(b.jPlayer.event.pause)}},false);a.addEventListener("waiting",function(){if(c.gate){d._seeking();d._trigger(b.jPlayer.event.waiting)}},false);a.addEventListener("seeking",function(){if(c.gate){d._seeking();d._trigger(b.jPlayer.event.seeking)}},false);a.addEventListener("seeked",function(){if(c.gate){d._seeked();d._trigger(b.jPlayer.event.seeked)}},false);a.addEventListener("volumechange",function(){if(c.gate){d.options.volume=a.volume;d.options.muted=
a.muted;d._updateMute();d._updateVolume();d._trigger(b.jPlayer.event.volumechange)}},false);a.addEventListener("suspend",function(){if(c.gate){d._seeked();d._trigger(b.jPlayer.event.suspend)}},false);a.addEventListener("ended",function(){if(c.gate){if(!b.jPlayer.browser.webkit)d.htmlElement.media.currentTime=0;d.htmlElement.media.pause();d._updateButtons(false);d._getHtmlStatus(a,true);d._updateInterface();d._trigger(b.jPlayer.event.ended)}},false);a.addEventListener("error",function(){if(c.gate){d._updateButtons(false);
d._seeked();if(d.status.srcSet){clearTimeout(d.internal.htmlDlyCmdId);d.status.waitForLoad=true;d.status.waitForPlay=true;d.status.video&&!d.status.nativeVideoControls&&d.internal.video.jq.css({width:"0px",height:"0px"});d._validString(d.status.media.poster)&&!d.status.nativeVideoControls&&d.internal.poster.jq.show();d.css.jq.videoPlay.length&&d.css.jq.videoPlay.show();d._error({type:b.jPlayer.error.URL,context:d.status.src,message:b.jPlayer.errorMsg.URL,hint:b.jPlayer.errorHint.URL})}}},false);b.each(b.jPlayer.htmlEvent,
function(e,g){a.addEventListener(this,function(){c.gate&&d._trigger(b.jPlayer.event[g])},false)})},_getHtmlStatus:function(a,b){var d=0,e=0,g=0,f=0;if(isFinite(a.duration))this.status.duration=a.duration;d=a.currentTime;e=this.status.duration>0?100*d/this.status.duration:0;if(typeof a.seekable==="object"&&a.seekable.length>0){g=this.status.duration>0?100*a.seekable.end(a.seekable.length-1)/this.status.duration:100;f=this.status.duration>0?100*a.currentTime/a.seekable.end(a.seekable.length-1):0}else{g=
100;f=e}if(b)e=f=d=0;this.status.seekPercent=g;this.status.currentPercentRelative=f;this.status.currentPercentAbsolute=e;this.status.currentTime=d;this.status.readyState=a.readyState;this.status.networkState=a.networkState;this.status.playbackRate=a.playbackRate;this.status.ended=a.ended},_resetStatus:function(){this.status=b.extend({},this.status,b.jPlayer.prototype.status)},_trigger:function(a,c,d){a=b.Event(a);a.jPlayer={};a.jPlayer.version=b.extend({},this.version);a.jPlayer.options=b.extend(true,
{},this.options);a.jPlayer.status=b.extend(true,{},this.status);a.jPlayer.html=b.extend(true,{},this.html);a.jPlayer.flash=b.extend(true,{},this.flash);if(c)a.jPlayer.error=b.extend({},c);if(d)a.jPlayer.warning=b.extend({},d);this.element.trigger(a)},jPlayerFlashEvent:function(a,c){if(a===b.jPlayer.event.ready)if(this.internal.ready){if(this.flash.gate){if(this.status.srcSet){var d=this.status.currentTime,e=this.status.paused;this.setMedia(this.status.media);d>0&&(e?this.pause(d):this.play(d))}this._trigger(b.jPlayer.event.flashreset)}}else{this.internal.ready=
true;this.internal.flash.jq.css({width:"0px",height:"0px"});this.version.flash=c.version;this.version.needFlash!==this.version.flash&&this._error({type:b.jPlayer.error.VERSION,context:this.version.flash,message:b.jPlayer.errorMsg.VERSION+this.version.flash,hint:b.jPlayer.errorHint.VERSION});this._trigger(b.jPlayer.event.repeat);this._trigger(a)}if(this.flash.gate)switch(a){case b.jPlayer.event.progress:this._getFlashStatus(c);this._updateInterface();this._trigger(a);break;case b.jPlayer.event.timeupdate:this._getFlashStatus(c);
this._updateInterface();this._trigger(a);break;case b.jPlayer.event.play:this._seeked();this._updateButtons(true);this._trigger(a);break;case b.jPlayer.event.pause:this._updateButtons(false);this._trigger(a);break;case b.jPlayer.event.ended:this._updateButtons(false);this._trigger(a);break;case b.jPlayer.event.click:this._trigger(a);break;case b.jPlayer.event.error:this.status.waitForLoad=true;this.status.waitForPlay=true;this.status.video&&this.internal.flash.jq.css({width:"0px",height:"0px"});this._validString(this.status.media.poster)&&
this.internal.poster.jq.show();this.css.jq.videoPlay.length&&this.status.video&&this.css.jq.videoPlay.show();this.status.video?this._flash_setVideo(this.status.media):this._flash_setAudio(this.status.media);this._updateButtons(false);this._error({type:b.jPlayer.error.URL,context:c.src,message:b.jPlayer.errorMsg.URL,hint:b.jPlayer.errorHint.URL});break;case b.jPlayer.event.seeking:this._seeking();this._trigger(a);break;case b.jPlayer.event.seeked:this._seeked();this._trigger(a);break;case b.jPlayer.event.ready:break;
default:this._trigger(a)}return false},_getFlashStatus:function(a){this.status.seekPercent=a.seekPercent;this.status.currentPercentRelative=a.currentPercentRelative;this.status.currentPercentAbsolute=a.currentPercentAbsolute;this.status.currentTime=a.currentTime;this.status.duration=a.duration;this.status.readyState=4;this.status.networkState=0;this.status.playbackRate=1;this.status.ended=false},_updateButtons:function(a){if(a!==f){this.status.paused=!a;if(this.css.jq.play.length&&this.css.jq.pause.length)if(a){this.css.jq.play.hide();
this.css.jq.pause.show()}else{this.css.jq.play.show();this.css.jq.pause.hide()}}if(this.css.jq.restoreScreen.length&&this.css.jq.fullScreen.length)if(this.status.noFullScreen){this.css.jq.fullScreen.hide();this.css.jq.restoreScreen.hide()}else if(this.options.fullScreen){this.css.jq.fullScreen.hide();this.css.jq.restoreScreen.show()}else{this.css.jq.fullScreen.show();this.css.jq.restoreScreen.hide()}if(this.css.jq.repeat.length&&this.css.jq.repeatOff.length)if(this.options.loop){this.css.jq.repeat.hide();
this.css.jq.repeatOff.show()}else{this.css.jq.repeat.show();this.css.jq.repeatOff.hide()}},_updateInterface:function(){this.css.jq.seekBar.length&&this.css.jq.seekBar.width(this.status.seekPercent+"%");this.css.jq.playBar.length&&this.css.jq.playBar.width(this.status.currentPercentRelative+"%");this.css.jq.currentTime.length&&this.css.jq.currentTime.text(b.jPlayer.convertTime(this.status.currentTime));this.css.jq.duration.length&&this.css.jq.duration.text(b.jPlayer.convertTime(this.status.duration))},
_seeking:function(){this.css.jq.seekBar.length&&this.css.jq.seekBar.addClass("jp-seeking-bg")},_seeked:function(){this.css.jq.seekBar.length&&this.css.jq.seekBar.removeClass("jp-seeking-bg")},_resetGate:function(){this.html.audio.gate=false;this.html.video.gate=false;this.flash.gate=false},_resetActive:function(){this.html.active=false;this.flash.active=false},setMedia:function(a){var c=this,d=false,e=this.status.media.poster!==a.poster;this._resetMedia();this._resetGate();this._resetActive();b.each(this.formats,
function(e,f){var i=c.format[f].media==="video";b.each(c.solutions,function(b,e){if(c[e].support[f]&&c._validString(a[f])){var g=e==="html";if(i){if(g){c.html.video.gate=true;c._html_setVideo(a);c.html.active=true}else{c.flash.gate=true;c._flash_setVideo(a);c.flash.active=true}c.css.jq.videoPlay.length&&c.css.jq.videoPlay.show();c.status.video=true}else{if(g){c.html.audio.gate=true;c._html_setAudio(a);c.html.active=true}else{c.flash.gate=true;c._flash_setAudio(a);c.flash.active=true}c.css.jq.videoPlay.length&&
c.css.jq.videoPlay.hide();c.status.video=false}d=true;return false}});if(d)return false});if(d){if((!this.status.nativeVideoControls||!this.html.video.gate)&&this._validString(a.poster))e?this.htmlElement.poster.src=a.poster:this.internal.poster.jq.show();this.status.srcSet=true;this.status.media=b.extend({},a);this._updateButtons(false);this._updateInterface()}else this._error({type:b.jPlayer.error.NO_SUPPORT,context:"{supplied:'"+this.options.supplied+"'}",message:b.jPlayer.errorMsg.NO_SUPPORT,
hint:b.jPlayer.errorHint.NO_SUPPORT})},_resetMedia:function(){this._resetStatus();this._updateButtons(false);this._updateInterface();this._seeked();this.internal.poster.jq.hide();clearTimeout(this.internal.htmlDlyCmdId);this.html.active?this._html_resetMedia():this.flash.active&&this._flash_resetMedia()},clearMedia:function(){this._resetMedia();this.html.active?this._html_clearMedia():this.flash.active&&this._flash_clearMedia();this._resetGate();this._resetActive()},load:function(){this.status.srcSet?
this.html.active?this._html_load():this.flash.active&&this._flash_load():this._urlNotSetError("load")},play:function(a){a=typeof a==="number"?a:NaN;this.status.srcSet?this.html.active?this._html_play(a):this.flash.active&&this._flash_play(a):this._urlNotSetError("play")},videoPlay:function(){this.play()},pause:function(a){a=typeof a==="number"?a:NaN;this.status.srcSet?this.html.active?this._html_pause(a):this.flash.active&&this._flash_pause(a):this._urlNotSetError("pause")},pauseOthers:function(){var a=
this;b.each(this.instances,function(b,d){a.element!==d&&d.data("jPlayer").status.srcSet&&d.jPlayer("pause")})},stop:function(){this.status.srcSet?this.html.active?this._html_pause(0):this.flash.active&&this._flash_pause(0):this._urlNotSetError("stop")},playHead:function(a){a=this._limitValue(a,0,100);this.status.srcSet?this.html.active?this._html_playHead(a):this.flash.active&&this._flash_playHead(a):this._urlNotSetError("playHead")},_muted:function(a){this.options.muted=a;this.html.used&&this._html_mute(a);
this.flash.used&&this._flash_mute(a);if(!this.html.video.gate&&!this.html.audio.gate){this._updateMute(a);this._updateVolume(this.options.volume);this._trigger(b.jPlayer.event.volumechange)}},mute:function(a){a=a===f?true:!!a;this._muted(a)},unmute:function(a){a=a===f?true:!!a;this._muted(!a)},_updateMute:function(a){if(a===f)a=this.options.muted;if(this.css.jq.mute.length&&this.css.jq.unmute.length)if(this.status.noVolume){this.css.jq.mute.hide();this.css.jq.unmute.hide()}else if(a){this.css.jq.mute.hide();
this.css.jq.unmute.show()}else{this.css.jq.mute.show();this.css.jq.unmute.hide()}},volume:function(a){a=this._limitValue(a,0,1);this.options.volume=a;this.html.used&&this._html_volume(a);this.flash.used&&this._flash_volume(a);if(!this.html.video.gate&&!this.html.audio.gate){this._updateVolume(a);this._trigger(b.jPlayer.event.volumechange)}},volumeBar:function(a){if(this.css.jq.volumeBar.length){var b=this.css.jq.volumeBar.offset(),d=a.pageX-b.left,e=this.css.jq.volumeBar.width(),a=this.css.jq.volumeBar.height()-
a.pageY+b.top,b=this.css.jq.volumeBar.height();this.options.verticalVolume?this.volume(a/b):this.volume(d/e)}this.options.muted&&this._muted(false)},volumeBarValue:function(a){this.volumeBar(a)},_updateVolume:function(a){if(a===f)a=this.options.volume;a=this.options.muted?0:a;if(this.status.noVolume){this.css.jq.volumeBar.length&&this.css.jq.volumeBar.hide();this.css.jq.volumeBarValue.length&&this.css.jq.volumeBarValue.hide();this.css.jq.volumeMax.length&&this.css.jq.volumeMax.hide()}else{this.css.jq.volumeBar.length&&
this.css.jq.volumeBar.show();if(this.css.jq.volumeBarValue.length){this.css.jq.volumeBarValue.show();this.css.jq.volumeBarValue[this.options.verticalVolume?"height":"width"](a*100+"%")}this.css.jq.volumeMax.length&&this.css.jq.volumeMax.show()}},volumeMax:function(){this.volume(1);this.options.muted&&this._muted(false)},_cssSelectorAncestor:function(a){var c=this;this.options.cssSelectorAncestor=a;this._removeUiClass();this.ancestorJq=a?b(a):[];a&&this.ancestorJq.length!==1&&this._warning({type:b.jPlayer.warning.CSS_SELECTOR_COUNT,
context:a,message:b.jPlayer.warningMsg.CSS_SELECTOR_COUNT+this.ancestorJq.length+" found for cssSelectorAncestor.",hint:b.jPlayer.warningHint.CSS_SELECTOR_COUNT});this._addUiClass();b.each(this.options.cssSelector,function(a,b){c._cssSelector(a,b)})},_cssSelector:function(a,c){var d=this;if(typeof c==="string")if(b.jPlayer.prototype.options.cssSelector[a]){this.css.jq[a]&&this.css.jq[a].length&&this.css.jq[a].unbind(".jPlayer");this.options.cssSelector[a]=c;this.css.cs[a]=this.options.cssSelectorAncestor+
" "+c;this.css.jq[a]=c?b(this.css.cs[a]):[];this.css.jq[a].length&&this.css.jq[a].bind("click.jPlayer",function(c){d[a](c);b(this).blur();return false});c&&this.css.jq[a].length!==1&&this._warning({type:b.jPlayer.warning.CSS_SELECTOR_COUNT,context:this.css.cs[a],message:b.jPlayer.warningMsg.CSS_SELECTOR_COUNT+this.css.jq[a].length+" found for "+a+" method.",hint:b.jPlayer.warningHint.CSS_SELECTOR_COUNT})}else this._warning({type:b.jPlayer.warning.CSS_SELECTOR_METHOD,context:a,message:b.jPlayer.warningMsg.CSS_SELECTOR_METHOD,
hint:b.jPlayer.warningHint.CSS_SELECTOR_METHOD});else this._warning({type:b.jPlayer.warning.CSS_SELECTOR_STRING,context:c,message:b.jPlayer.warningMsg.CSS_SELECTOR_STRING,hint:b.jPlayer.warningHint.CSS_SELECTOR_STRING})},seekBar:function(a){if(this.css.jq.seekBar){var b=this.css.jq.seekBar.offset(),a=a.pageX-b.left,b=this.css.jq.seekBar.width();this.playHead(100*a/b)}},playBar:function(a){this.seekBar(a)},repeat:function(){this._loop(true)},repeatOff:function(){this._loop(false)},_loop:function(a){if(this.options.loop!==
a){this.options.loop=a;this._updateButtons();this._trigger(b.jPlayer.event.repeat)}},currentTime:function(){},duration:function(){},gui:function(){},noSolution:function(){},option:function(a,c){var d=a;if(arguments.length===0)return b.extend(true,{},this.options);if(typeof a==="string"){var e=a.split(".");if(c===f){for(var d=b.extend(true,{},this.options),g=0;g<e.length;g++)if(d[e[g]]!==f)d=d[e[g]];else{this._warning({type:b.jPlayer.warning.OPTION_KEY,context:a,message:b.jPlayer.warningMsg.OPTION_KEY,
hint:b.jPlayer.warningHint.OPTION_KEY});return f}return d}for(var g=d={},h=0;h<e.length;h++)if(h<e.length-1){g[e[h]]={};g=g[e[h]]}else g[e[h]]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(a,b){c._setOption(a,b)});return this},_setOption:function(a,c){var d=this;switch(a){case "volume":this.volume(c);break;case "muted":this._muted(c);break;case "cssSelectorAncestor":this._cssSelectorAncestor(c);break;case "cssSelector":b.each(c,function(a,b){d._cssSelector(a,
b)});break;case "fullScreen":if(this.options[a]!==c){this._removeUiClass();this.options[a]=c;this._refreshSize()}break;case "size":!this.options.fullScreen&&this.options[a].cssClass!==c.cssClass&&this._removeUiClass();this.options[a]=b.extend({},this.options[a],c);this._refreshSize();break;case "sizeFull":this.options.fullScreen&&this.options[a].cssClass!==c.cssClass&&this._removeUiClass();this.options[a]=b.extend({},this.options[a],c);this._refreshSize();break;case "autohide":this.options[a]=b.extend({},
this.options[a],c);this._updateAutohide();break;case "loop":this._loop(c);break;case "nativeVideoControls":this.options[a]=b.extend({},this.options[a],c);this.status.nativeVideoControls=this._uaBlocklist(this.options.nativeVideoControls);this._restrictNativeVideoControls();this._updateNativeVideoControls();break;case "noFullScreen":this.options[a]=b.extend({},this.options[a],c);this.status.nativeVideoControls=this._uaBlocklist(this.options.nativeVideoControls);this.status.noFullScreen=this._uaBlocklist(this.options.noFullScreen);
this._restrictNativeVideoControls();this._updateButtons();break;case "noVolume":this.options[a]=b.extend({},this.options[a],c);this.status.noVolume=this._uaBlocklist(this.options.noVolume);this._updateVolume();this._updateMute();break;case "emulateHtml":if(this.options[a]!==c)(this.options[a]=c)?this._emulateHtmlBridge():this._destroyHtmlBridge()}return this},_refreshSize:function(){this._setSize();this._addUiClass();this._updateSize();this._updateButtons();this._updateAutohide();this._trigger(b.jPlayer.event.resize)},
_setSize:function(){if(this.options.fullScreen){this.status.width=this.options.sizeFull.width;this.status.height=this.options.sizeFull.height;this.status.cssClass=this.options.sizeFull.cssClass}else{this.status.width=this.options.size.width;this.status.height=this.options.size.height;this.status.cssClass=this.options.size.cssClass}this.element.css({width:this.status.width,height:this.status.height})},_addUiClass:function(){this.ancestorJq.length&&this.ancestorJq.addClass(this.status.cssClass)},_removeUiClass:function(){this.ancestorJq.length&&
this.ancestorJq.removeClass(this.status.cssClass)},_updateSize:function(){this.internal.poster.jq.css({width:this.status.width,height:this.status.height});!this.status.waitForPlay&&this.html.active&&this.status.video||this.html.video.available&&this.html.used&&this.status.nativeVideoControls?this.internal.video.jq.css({width:this.status.width,height:this.status.height}):!this.status.waitForPlay&&(this.flash.active&&this.status.video)&&this.internal.flash.jq.css({width:this.status.width,height:this.status.height})},
_updateAutohide:function(){var a=this,b=function(){a.css.jq.gui.fadeIn(a.options.autohide.fadeIn,function(){clearTimeout(a.internal.autohideId);a.internal.autohideId=setTimeout(function(){a.css.jq.gui.fadeOut(a.options.autohide.fadeOut)},a.options.autohide.hold)})};if(this.css.jq.gui.length){this.css.jq.gui.stop(true,true);clearTimeout(this.internal.autohideId);this.element.unbind(".jPlayerAutohide");this.css.jq.gui.unbind(".jPlayerAutohide");if(this.status.nativeVideoControls)this.css.jq.gui.hide();
else if(this.options.fullScreen&&this.options.autohide.full||!this.options.fullScreen&&this.options.autohide.restored){this.element.bind("mousemove.jPlayer.jPlayerAutohide",b);this.css.jq.gui.bind("mousemove.jPlayer.jPlayerAutohide",b);this.css.jq.gui.hide()}else this.css.jq.gui.show()}},fullScreen:function(){this._setOption("fullScreen",true)},restoreScreen:function(){this._setOption("fullScreen",false)},_html_initMedia:function(){this.htmlElement.media.src=this.status.src;this.options.preload!==
"none"&&this._html_load();this._trigger(b.jPlayer.event.timeupdate)},_html_setAudio:function(a){var c=this;b.each(this.formats,function(b,e){if(c.html.support[e]&&a[e]){c.status.src=a[e];c.status.format[e]=true;c.status.formatType=e;return false}});this.htmlElement.media=this.htmlElement.audio;this._html_initMedia()},_html_setVideo:function(a){var c=this;b.each(this.formats,function(b,e){if(c.html.support[e]&&a[e]){c.status.src=a[e];c.status.format[e]=true;c.status.formatType=e;return false}});if(this.status.nativeVideoControls)this.htmlElement.video.poster=
this._validString(a.poster)?a.poster:"";this.htmlElement.media=this.htmlElement.video;this._html_initMedia()},_html_resetMedia:function(){if(this.htmlElement.media){this.htmlElement.media.id===this.internal.video.id&&!this.status.nativeVideoControls&&this.internal.video.jq.css({width:"0px",height:"0px"});this.htmlElement.media.pause()}},_html_clearMedia:function(){if(this.htmlElement.media){this.htmlElement.media.src="";this.htmlElement.media.load()}},_html_load:function(){if(this.status.waitForLoad){this.status.waitForLoad=
false;this.htmlElement.media.load()}clearTimeout(this.internal.htmlDlyCmdId)},_html_play:function(a){var b=this;this._html_load();this.htmlElement.media.play();if(!isNaN(a))try{this.htmlElement.media.currentTime=a}catch(d){this.internal.htmlDlyCmdId=setTimeout(function(){b.play(a)},100);return}this._html_checkWaitForPlay()},_html_pause:function(a){var b=this;a>0?this._html_load():clearTimeout(this.internal.htmlDlyCmdId);this.htmlElement.media.pause();if(!isNaN(a))try{this.htmlElement.media.currentTime=
a}catch(d){this.internal.htmlDlyCmdId=setTimeout(function(){b.pause(a)},100);return}a>0&&this._html_checkWaitForPlay()},_html_playHead:function(a){var b=this;this._html_load();try{if(typeof this.htmlElement.media.seekable==="object"&&this.htmlElement.media.seekable.length>0)this.htmlElement.media.currentTime=a*this.htmlElement.media.seekable.end(this.htmlElement.media.seekable.length-1)/100;else if(this.htmlElement.media.duration>0&&!isNaN(this.htmlElement.media.duration))this.htmlElement.media.currentTime=
a*this.htmlElement.media.duration/100;else throw"e";}catch(d){this.internal.htmlDlyCmdId=setTimeout(function(){b.playHead(a)},100);return}this.status.waitForLoad||this._html_checkWaitForPlay()},_html_checkWaitForPlay:function(){if(this.status.waitForPlay){this.status.waitForPlay=false;this.css.jq.videoPlay.length&&this.css.jq.videoPlay.hide();if(this.status.video){this.internal.poster.jq.hide();this.internal.video.jq.css({width:this.status.width,height:this.status.height})}}},_html_volume:function(a){if(this.html.audio.available)this.htmlElement.audio.volume=
a;if(this.html.video.available)this.htmlElement.video.volume=a},_html_mute:function(a){if(this.html.audio.available)this.htmlElement.audio.muted=a;if(this.html.video.available)this.htmlElement.video.muted=a},_flash_setAudio:function(a){var c=this;try{b.each(this.formats,function(b,d){if(c.flash.support[d]&&a[d]){switch(d){case "m4a":case "fla":c._getMovie().fl_setAudio_m4a(a[d]);break;case "mp3":c._getMovie().fl_setAudio_mp3(a[d]);break;case "rtmpa":c._getMovie().fl_setAudio_rtmp(a[d])}c.status.src=
a[d];c.status.format[d]=true;c.status.formatType=d;return false}});if(this.options.preload==="auto"){this._flash_load();this.status.waitForLoad=false}}catch(d){this._flashError(d)}},_flash_setVideo:function(a){var c=this;try{b.each(this.formats,function(b,d){if(c.flash.support[d]&&a[d]){switch(d){case "m4v":case "flv":c._getMovie().fl_setVideo_m4v(a[d]);break;case "rtmpv":c._getMovie().fl_setVideo_rtmp(a[d])}c.status.src=a[d];c.status.format[d]=true;c.status.formatType=d;return false}});if(this.options.preload===
"auto"){this._flash_load();this.status.waitForLoad=false}}catch(d){this._flashError(d)}},_flash_resetMedia:function(){this.internal.flash.jq.css({width:"0px",height:"0px"});this._flash_pause(NaN)},_flash_clearMedia:function(){try{this._getMovie().fl_clearMedia()}catch(a){this._flashError(a)}},_flash_load:function(){try{this._getMovie().fl_load()}catch(a){this._flashError(a)}this.status.waitForLoad=false},_flash_play:function(a){try{this._getMovie().fl_play(a)}catch(b){this._flashError(b)}this.status.waitForLoad=
false;this._flash_checkWaitForPlay()},_flash_pause:function(a){try{this._getMovie().fl_pause(a)}catch(b){this._flashError(b)}if(a>0){this.status.waitForLoad=false;this._flash_checkWaitForPlay()}},_flash_playHead:function(a){try{this._getMovie().fl_play_head(a)}catch(b){this._flashError(b)}this.status.waitForLoad||this._flash_checkWaitForPlay()},_flash_checkWaitForPlay:function(){if(this.status.waitForPlay){this.status.waitForPlay=false;this.css.jq.videoPlay.length&&this.css.jq.videoPlay.hide();if(this.status.video){this.internal.poster.jq.hide();
this.internal.flash.jq.css({width:this.status.width,height:this.status.height})}}},_flash_volume:function(a){try{this._getMovie().fl_volume(a)}catch(b){this._flashError(b)}},_flash_mute:function(a){try{this._getMovie().fl_mute(a)}catch(b){this._flashError(b)}},_getMovie:function(){return document[this.internal.flash.id]},_checkForFlash:function(a){var b=false,d;if(window.ActiveXObject)try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+a);b=true}catch(e){}else if(navigator.plugins&&navigator.mimeTypes.length>
0)(d=navigator.plugins["Shockwave Flash"])&&navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/,"$1")>=a&&(b=true);return b},_validString:function(a){return a&&typeof a==="string"},_limitValue:function(a,b,d){return a<b?b:a>d?d:a},_urlNotSetError:function(a){this._error({type:b.jPlayer.error.URL_NOT_SET,context:a,message:b.jPlayer.errorMsg.URL_NOT_SET,hint:b.jPlayer.errorHint.URL_NOT_SET})},_flashError:function(a){var c;c=this.internal.ready?"FLASH_DISABLED":"FLASH";this._error({type:b.jPlayer.error[c],
context:this.internal.flash.swf,message:b.jPlayer.errorMsg[c]+a.message,hint:b.jPlayer.errorHint[c]});this.internal.flash.jq.css({width:"1px",height:"1px"})},_error:function(a){this._trigger(b.jPlayer.event.error,a);this.options.errorAlerts&&this._alert("Error!"+(a.message?"\n\n"+a.message:"")+(a.hint?"\n\n"+a.hint:"")+"\n\nContext: "+a.context)},_warning:function(a){this._trigger(b.jPlayer.event.warning,f,a);this.options.warningAlerts&&this._alert("Warning!"+(a.message?"\n\n"+a.message:"")+(a.hint?
"\n\n"+a.hint:"")+"\n\nContext: "+a.context)},_alert:function(a){alert("jPlayer "+this.version.script+" : id='"+this.internal.self.id+"' : "+a)},_emulateHtmlBridge:function(){var a=this;b.each(b.jPlayer.emulateMethods.split(/\s+/g),function(b,d){a.internal.domNode[d]=function(b){a[d](b)}});b.each(b.jPlayer.event,function(c,d){var e=true;b.each(b.jPlayer.reservedEvent.split(/\s+/g),function(a,b){if(b===c)return e=false});e&&a.element.bind(d+".jPlayer.jPlayerHtml",function(){a._emulateHtmlUpdate();
var b=document.createEvent("Event");b.initEvent(c,false,true);a.internal.domNode.dispatchEvent(b)})})},_emulateHtmlUpdate:function(){var a=this;b.each(b.jPlayer.emulateStatus.split(/\s+/g),function(b,d){a.internal.domNode[d]=a.status[d]});b.each(b.jPlayer.emulateOptions.split(/\s+/g),function(b,d){a.internal.domNode[d]=a.options[d]})},_destroyHtmlBridge:function(){var a=this;this.element.unbind(".jPlayerHtml");b.each((b.jPlayer.emulateMethods+" "+b.jPlayer.emulateStatus+" "+b.jPlayer.emulateOptions).split(/\s+/g),
function(b,d){delete a.internal.domNode[d]})}};b.jPlayer.error={FLASH:"e_flash",FLASH_DISABLED:"e_flash_disabled",NO_SOLUTION:"e_no_solution",NO_SUPPORT:"e_no_support",URL:"e_url",URL_NOT_SET:"e_url_not_set",VERSION:"e_version"};b.jPlayer.errorMsg={FLASH:"jPlayer's Flash fallback is not configured correctly, or a command was issued before the jPlayer Ready event. Details: ",FLASH_DISABLED:"jPlayer's Flash fallback has been disabled by the browser due to the CSS rules you have used. Details: ",NO_SOLUTION:"No solution can be found by jPlayer in this browser. Neither HTML nor Flash can be used.",
NO_SUPPORT:"It is not possible to play any media format provided in setMedia() on this browser using your current options.",URL:"Media URL could not be loaded.",URL_NOT_SET:"Attempt to issue media playback commands, while no media url is set.",VERSION:"jPlayer "+b.jPlayer.prototype.version.script+" needs Jplayer.swf version "+b.jPlayer.prototype.version.needFlash+" but found "};b.jPlayer.errorHint={FLASH:"Check your swfPath option and that Jplayer.swf is there.",FLASH_DISABLED:"Check that you have not display:none; the jPlayer entity or any ancestor.",
NO_SOLUTION:"Review the jPlayer options: support and supplied.",NO_SUPPORT:"Video or audio formats defined in the supplied option are missing.",URL:"Check media URL is valid.",URL_NOT_SET:"Use setMedia() to set the media URL.",VERSION:"Update jPlayer files."};b.jPlayer.warning={CSS_SELECTOR_COUNT:"e_css_selector_count",CSS_SELECTOR_METHOD:"e_css_selector_method",CSS_SELECTOR_STRING:"e_css_selector_string",OPTION_KEY:"e_option_key"};b.jPlayer.warningMsg={CSS_SELECTOR_COUNT:"The number of css selectors found did not equal one: ",
CSS_SELECTOR_METHOD:"The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.",CSS_SELECTOR_STRING:"The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.",OPTION_KEY:"The option requested in jPlayer('option') is undefined."};b.jPlayer.warningHint={CSS_SELECTOR_COUNT:"Check your css selector and the ancestor.",CSS_SELECTOR_METHOD:"Check your method name.",CSS_SELECTOR_STRING:"Check your css selector is a string.",OPTION_KEY:"Check your option name."}})(jQuery);
/*
 * Playlist Object for the jPlayer Plugin
 * http://www.jplayer.org
 *
 * Copyright (c) 2009 - 2011 Happyworm Ltd
 * Dual licensed under the MIT and GPL licenses.
 *  - http://www.opensource.org/licenses/mit-license.php
 *  - http://www.gnu.org/copyleft/gpl.html
 *
 * Author: Mark J Panaghiston
 * Version: 2.1.0 (jPlayer 2.1.0)
 * Date: 1st September 2011
 */

(function(b,f){jPlayerPlaylist=function(a,c,d){var e=this;this.current=0;this.removing=this.shuffled=this.loop=!1;this.cssSelector=b.extend({},this._cssSelector,a);this.options=b.extend(!0,{},this._options,d);this.playlist=[];this.original=[];this._initPlaylist(c);this.cssSelector.title=this.cssSelector.cssSelectorAncestor+" .jp-title";this.cssSelector.playlist=this.cssSelector.cssSelectorAncestor+" .jp-playlist";this.cssSelector.next=this.cssSelector.cssSelectorAncestor+" .jp-next";this.cssSelector.previous=
this.cssSelector.cssSelectorAncestor+" .jp-previous";this.cssSelector.shuffle=this.cssSelector.cssSelectorAncestor+" .jp-shuffle";this.cssSelector.shuffleOff=this.cssSelector.cssSelectorAncestor+" .jp-shuffle-off";this.options.cssSelectorAncestor=this.cssSelector.cssSelectorAncestor;this.options.repeat=function(a){e.loop=a.jPlayer.options.loop};b(this.cssSelector.jPlayer).bind(b.jPlayer.event.ready,function(){e._init()});b(this.cssSelector.jPlayer).bind(b.jPlayer.event.ended,function(){e.next()});
b(this.cssSelector.jPlayer).bind(b.jPlayer.event.play,function(){b(this).jPlayer("pauseOthers")});b(this.cssSelector.jPlayer).bind(b.jPlayer.event.resize,function(a){a.jPlayer.options.fullScreen?b(e.cssSelector.title).show():b(e.cssSelector.title).hide()});b(this.cssSelector.previous).click(function(){e.previous();b(this).blur();return!1});b(this.cssSelector.next).click(function(){e.next();b(this).blur();return!1});b(this.cssSelector.shuffle).click(function(){e.shuffle(!0);return!1});b(this.cssSelector.shuffleOff).click(function(){e.shuffle(!1);
return!1}).hide();this.options.fullScreen||b(this.cssSelector.title).hide();b(this.cssSelector.playlist+" ul").empty();this._createItemHandlers();b(this.cssSelector.jPlayer).jPlayer(this.options)};jPlayerPlaylist.prototype={_cssSelector:{jPlayer:"#jquery_jplayer_1",cssSelectorAncestor:"#jp_container_1"},_options:{playlistOptions:{autoPlay:!1,loopOnPrevious:!1,shuffleOnLoop:!0,enableRemoveControls:!1,displayTime:"slow",addTime:"fast",removeTime:"fast",shuffleTime:"slow",itemClass:"jp-playlist-item",
freeGroupClass:"jp-free-media",freeItemClass:"jp-playlist-item-free",removeItemClass:"jp-playlist-item-remove"}},option:function(a,b){if(b===f)return this.options.playlistOptions[a];this.options.playlistOptions[a]=b;switch(a){case "enableRemoveControls":this._updateControls();break;case "itemClass":case "freeGroupClass":case "freeItemClass":case "removeItemClass":this._refresh(!0),this._createItemHandlers()}return this},_init:function(){var a=this;this._refresh(function(){a.options.playlistOptions.autoPlay?
a.play(a.current):a.select(a.current)})},_initPlaylist:function(a){this.current=0;this.removing=this.shuffled=!1;this.original=b.extend(!0,[],a);this._originalPlaylist()},_originalPlaylist:function(){var a=this;this.playlist=[];b.each(this.original,function(b){a.playlist[b]=a.original[b]})},_refresh:function(a){var c=this;if(a&&!b.isFunction(a))b(this.cssSelector.playlist+" ul").empty(),b.each(this.playlist,function(a){b(c.cssSelector.playlist+" ul").append(c._createListItem(c.playlist[a]))}),this._updateControls();
else{var d=b(this.cssSelector.playlist+" ul").children().length?this.options.playlistOptions.displayTime:0;b(this.cssSelector.playlist+" ul").slideUp(d,function(){var d=b(this);b(this).empty();b.each(c.playlist,function(a){d.append(c._createListItem(c.playlist[a]))});c._updateControls();b.isFunction(a)&&a();c.playlist.length?b(this).slideDown(c.options.playlistOptions.displayTime):b(this).show()})}},_createListItem:function(a){var c=this,d="<li><div>";d+="<a href='javascript:;' class='"+this.options.playlistOptions.removeItemClass+
"'>&times;</a>";if(a.free){var e=!0;d+="<span class='"+this.options.playlistOptions.freeGroupClass+"'>(";b.each(a,function(a,f){b.jPlayer.prototype.format[a]&&(e?e=!1:d+=" | ",d+="<a class='"+c.options.playlistOptions.freeItemClass+"' href='"+f+"' tabindex='1'>"+a+"</a>")});d+=")</span>"}d+="<a href='javascript:;' class='"+this.options.playlistOptions.itemClass+"' tabindex='1'>"+a.title+(a.artist?" <span class='jp-artist'>by "+a.artist+"</span>":"")+"</a>";d+="</div></li>";return d},_createItemHandlers:function(){var a=
this;b(this.cssSelector.playlist+" a."+this.options.playlistOptions.itemClass).die("click").live("click",function(){var c=b(this).parent().parent().index();a.current!==c?a.play(c):b(a.cssSelector.jPlayer).jPlayer("play");b(this).blur();return!1});b(a.cssSelector.playlist+" a."+this.options.playlistOptions.freeItemClass).die("click").live("click",function(){b(this).parent().parent().find("."+a.options.playlistOptions.itemClass).click();b(this).blur();return!1});b(a.cssSelector.playlist+" a."+this.options.playlistOptions.removeItemClass).die("click").live("click",
function(){var c=b(this).parent().parent().index();a.remove(c);b(this).blur();return!1})},_updateControls:function(){this.options.playlistOptions.enableRemoveControls?b(this.cssSelector.playlist+" ."+this.options.playlistOptions.removeItemClass).show():b(this.cssSelector.playlist+" ."+this.options.playlistOptions.removeItemClass).hide();this.shuffled?(b(this.cssSelector.shuffleOff).show(),b(this.cssSelector.shuffle).hide()):(b(this.cssSelector.shuffleOff).hide(),b(this.cssSelector.shuffle).show())},
_highlight:function(a){this.playlist.length&&a!==f&&(b(this.cssSelector.playlist+" .jp-playlist-current").removeClass("jp-playlist-current"),b(this.cssSelector.playlist+" li:nth-child("+(a+1)+")").addClass("jp-playlist-current").find(".jp-playlist-item").addClass("jp-playlist-current"),b(this.cssSelector.title+" li").html(this.playlist[a].title+(this.playlist[a].artist?" <span class='jp-artist'>by "+this.playlist[a].artist+"</span>":"")))},setPlaylist:function(a){this._initPlaylist(a);this._init()},
add:function(a,c){b(this.cssSelector.playlist+" ul").append(this._createListItem(a)).find("li:last-child").hide().slideDown(this.options.playlistOptions.addTime);this._updateControls();this.original.push(a);this.playlist.push(a);c?this.play(this.playlist.length-1):this.original.length===1&&this.select(0)},remove:function(a){var c=this;if(a===f)return this._initPlaylist([]),this._refresh(function(){b(c.cssSelector.jPlayer).jPlayer("clearMedia")}),!0;else if(this.removing)return!1;else{a=a<0?c.original.length+
a:a;if(0<=a&&a<this.playlist.length)this.removing=!0,b(this.cssSelector.playlist+" li:nth-child("+(a+1)+")").slideUp(this.options.playlistOptions.removeTime,function(){b(this).remove();if(c.shuffled){var d=c.playlist[a];b.each(c.original,function(a){if(c.original[a]===d)return c.original.splice(a,1),!1})}else c.original.splice(a,1);c.playlist.splice(a,1);c.original.length?a===c.current?(c.current=a<c.original.length?c.current:c.original.length-1,c.select(c.current)):a<c.current&&c.current--:(b(c.cssSelector.jPlayer).jPlayer("clearMedia"),
c.current=0,c.shuffled=!1,c._updateControls());c.removing=!1});return!0}},select:function(a){a=a<0?this.original.length+a:a;0<=a&&a<this.playlist.length?(this.current=a,this._highlight(a),b(this.cssSelector.jPlayer).jPlayer("setMedia",this.playlist[this.current])):this.current=0},play:function(a){a=a<0?this.original.length+a:a;0<=a&&a<this.playlist.length?this.playlist.length&&(this.select(a),b(this.cssSelector.jPlayer).jPlayer("play")):a===f&&b(this.cssSelector.jPlayer).jPlayer("play")},pause:function(){b(this.cssSelector.jPlayer).jPlayer("pause")},
next:function(){var a=this.current+1<this.playlist.length?this.current+1:0;this.loop?a===0&&this.shuffled&&this.options.playlistOptions.shuffleOnLoop&&this.playlist.length>1?this.shuffle(!0,!0):this.play(a):a>0&&this.play(a)},previous:function(){var a=this.current-1>=0?this.current-1:this.playlist.length-1;(this.loop&&this.options.playlistOptions.loopOnPrevious||a<this.playlist.length-1)&&this.play(a)},shuffle:function(a,c){var d=this;a===f&&(a=!this.shuffled);(a||a!==this.shuffled)&&b(this.cssSelector.playlist+
" ul").slideUp(this.options.playlistOptions.shuffleTime,function(){(d.shuffled=a)?d.playlist.sort(function(){return 0.5-Math.random()}):d._originalPlaylist();d._refresh(!0);c||!b(d.cssSelector.jPlayer).data("jPlayer").status.paused?d.play(0):d.select(0);b(this).slideDown(d.options.playlistOptions.shuffleTime)})}}})(jQuery);
/*!
 * jQCloud Plugin for jQuery
 *
 * Version 1.0.2
 *
 * Copyright 2011, Luca Ongaro
 * Licensed under the MIT license.
 *
 * Date: Tue Oct 09 22:08:53 +0200 2012
 */ (function(a) {
    "use strict", a.fn.jQCloud = function(b, c) {
        var d = this,
            e = d.attr("id") || Math.floor(Math.random() * 1e6).toString(36),
            f = {
                width: d.width(),
                height: d.height(),
                center: {
                    x: (c && c.width ? c.width : d.width()) / 2,
                    y: (c && c.height ? c.height : d.height()) / 2
                },
                delayedMode: b.length > 50,
                shape: !1,
                encodeURI: !0
            };
        c = a.extend(f, c || {}), d.addClass("jqcloud").width(c.width).height(c.height), d.css("position") === "static" && d.css("position", "relative");
        var g = function() {
            var f = function(a, b) {
                var c = function(a, b) {
                    return Math.abs(2 * a.offsetLeft + a.offsetWidth - 2 * b.offsetLeft - b.offsetWidth) < a.offsetWidth + b.offsetWidth && Math.abs(2 * a.offsetTop + a.offsetHeight - 2 * b.offsetTop - b.offsetHeight) < a.offsetHeight + b.offsetHeight ? !0 : !1
                }, d = 0;
                for (d = 0; d < b.length; d++) if (c(a, b[d])) return !0;
                return !1
            };
            for (var g = 0; g < b.length; g++) b[g].weight = parseFloat(b[g].weight, 10);
            b.sort(function(a, b) {
                return a.weight < b.weight ? 1 : a.weight > b.weight ? -1 : 0
            });
            var h = c.shape === "rectangular" ? 18 : 2,
                i = [],
                j = c.width / c.height,
                k = function(g, k) {
                    var l = e + "_word_" + g,
                        m = "#" + l,
                        n = 6.28 * Math.random(),
                        o = 0,
                        p = 0,
                        q = 0,
                        r = 5,
                        s = "",
                        t = "",
                        u = "";
                    k.html = a.extend(k.html, {
                        id: l
                    }), k.html && k.html["class"] && (s = k.html["class"], delete k.html["class"]), b[0].weight > b[b.length - 1].weight && (r = Math.round((k.weight - b[b.length - 1].weight) / (b[0].weight - b[b.length - 1].weight) * 9) + 1), u = a("<span>").attr(k.html).addClass("w" + r + " " + s), k.link ? (typeof k.link == "string" && (k.link = {
                        href: k.link
                    }), c.encodeURI && (k.link = a.extend(k.link, {
                        href: encodeURI(k.link.href).replace(/'/g, "%27")
                    })), t = a("<a>").attr(k.link).text(k.text)) : t = k.text, u.append(t);
                    if ( !! k.handlers) for (var v in k.handlers) k.handlers.hasOwnProperty(v) && typeof k.handlers[v] == "function" && a(u).bind(v, k.handlers[v]);
                    d.append(u);
                    var w = u.width(),
                        x = u.height(),
                        y = c.center.x - w / 2,
                        z = c.center.y - x / 2,
                        A = u[0].style;
                    A.position = "absolute", A.left = y + "px", A.top = z + "px";
                    while (f(document.getElementById(l), i)) {
                        if (c.shape === "rectangular") {
                            p++, p * h > (1 + Math.floor(q / 2)) * h * (q % 4 % 2 === 0 ? 1 : j) && (p = 0, q++);
                            switch (q % 4) {
                                case 1:
                                    y += h * j + Math.random() * 2;
                                    break;
                                case 2:
                                    z -= h + Math.random() * 2;
                                    break;
                                case 3:
                                    y -= h * j + Math.random() * 2;
                                    break;
                                case 0:
                                    z += h + Math.random() * 2
                            }
                        } else o += h, n += (g % 2 === 0 ? 1 : -1) * h, y = c.center.x - w / 2 + o * Math.cos(n) * j, z = c.center.y + o * Math.sin(n) - x / 2;
                        A.left = y + "px", A.top = z + "px"
                    }
                    i.push(document.getElementById(l)), a.isFunction(k.afterWordRender) && k.afterWordRender.call(u)
                }, l = function(e) {
                    e = e || 0;
                    if (!d.is(":visible")) {
                        setTimeout(function() {
                            l(e)
                        }, 10);
                        return
                    }
                    e < b.length ? (k(e, b[e]), setTimeout(function() {
                        l(e + 1)
                    }, 10)) : a.isFunction(c.afterCloudRender) && c.afterCloudRender.call(d)
                };
            c.delayedMode ? l() : (a.each(b, k), a.isFunction(c.afterCloudRender) && c.afterCloudRender.call(d))
        };
        return setTimeout(function() {
            g()
        }, 10), d
    }
})(jQuery); 
/*
 XDate v0.7
 Docs & Licensing: http://arshaw.com/xdate/
*/
var XDate=function(g,m,A,p){function f(){var a=this instanceof f?this:new f,c=arguments,b=c.length,d;typeof c[b-1]=="boolean"&&(d=c[--b],c=q(c,0,b));if(b)if(b==1)if(b=c[0],b instanceof g||typeof b=="number")a[0]=new g(+b);else if(b instanceof f){var c=a,h=new g(+b[0]);if(l(b))h.toString=w;c[0]=h}else{if(typeof b=="string"){a[0]=new g(0);a:{for(var c=b,b=d||!1,h=f.parsers,r=0,e;r<h.length;r++)if(e=h[r](c,b,a)){a=e;break a}a[0]=new g(c)}}}else a[0]=new g(n.apply(g,c)),d||(a[0]=s(a[0]));else a[0]=new g;
typeof d=="boolean"&&B(a,d);return a}function l(a){return a[0].toString===w}function B(a,c,b){if(c){if(!l(a))b&&(a[0]=new g(n(a[0].getFullYear(),a[0].getMonth(),a[0].getDate(),a[0].getHours(),a[0].getMinutes(),a[0].getSeconds(),a[0].getMilliseconds()))),a[0].toString=w}else l(a)&&(a[0]=b?s(a[0]):new g(+a[0]));return a}function C(a,c,b,d,h){var e=k(j,a[0],h),a=k(D,a[0],h),h=c==1?b%12:e(1),f=!1;d.length==2&&typeof d[1]=="boolean"&&(f=d[1],d=[b]);a(c,d);f&&e(1)!=h&&(a(1,[e(1)-1]),a(2,[E(e(0),e(1))]))}
function F(a,c,b,d){var b=Number(b),h=m.floor(b);a["set"+o[c]](a["get"+o[c]]()+h,d||!1);h!=b&&c<6&&F(a,c+1,(b-h)*G[c],d)}function H(a,c,b){var a=a.clone().setUTCMode(!0,!0),c=f(c).setUTCMode(!0,!0),d=0;if(b==0||b==1){for(var h=6;h>=b;h--)d/=G[h],d+=j(c,!1,h)-j(a,!1,h);b==1&&(d+=(c.getFullYear()-a.getFullYear())*12)}else b==2?(b=a.toDate().setUTCHours(0,0,0,0),d=c.toDate().setUTCHours(0,0,0,0),d=m.round((d-b)/864E5)+(c-d-(a-b))/864E5):d=(c-a)/[36E5,6E4,1E3,1][b-3];return d}function t(a){var c=a(0),
b=a(1),a=a(2),b=new g(n(c,b,a)),d=u(c),a=d;b<d?a=u(c-1):(c=u(c+1),b>=c&&(a=c));return m.floor(m.round((b-a)/864E5)/7)+1}function u(a){a=new g(n(a,0,4));a.setUTCDate(a.getUTCDate()-(a.getUTCDay()+6)%7);return a}function I(a,c,b,d){var h=k(j,a,d),e=k(D,a,d),b=u(b===p?h(0):b);d||(b=s(b));a.setTime(+b);e(2,[h(2)+(c-1)*7])}function J(a,c,b,d,e){var r=f.locales,g=r[f.defaultLocale]||{},i=k(j,a,e),b=(typeof b=="string"?r[b]:b)||{};return x(a,c,function(a){if(d)for(var b=(a==7?2:a)-1;b>=0;b--)d.push(i(b));
return i(a)},function(a){return b[a]||g[a]},e)}function x(a,c,b,d,e){for(var f,g,i="";f=c.match(M);){i+=c.substr(0,f.index);if(f[1]){g=i;for(var i=a,j=f[1],l=b,m=d,n=e,k=j.length,o=void 0,q="";k>0;)o=N(i,j.substr(0,k),l,m,n),o!==p?(q+=o,j=j.substr(k),k=j.length):k--;i=g+(q+j)}else f[3]?(g=x(a,f[4],b,d,e),parseInt(g.replace(/\D/g,""),10)&&(i+=g)):i+=f[7]||"'";c=c.substr(f.index+f[0].length)}return i+c}function N(a,c,b,d,e){var g=f.formatters[c];if(typeof g=="string")return x(a,g,b,d,e);else if(typeof g==
"function")return g(a,e||!1,d);switch(c){case "fff":return i(b(6),3);case "s":return b(5);case "ss":return i(b(5));case "m":return b(4);case "mm":return i(b(4));case "h":return b(3)%12||12;case "hh":return i(b(3)%12||12);case "H":return b(3);case "HH":return i(b(3));case "d":return b(2);case "dd":return i(b(2));case "ddd":return d("dayNamesShort")[b(7)]||"";case "dddd":return d("dayNames")[b(7)]||"";case "M":return b(1)+1;case "MM":return i(b(1)+1);case "MMM":return d("monthNamesShort")[b(1)]||"";
case "MMMM":return d("monthNames")[b(1)]||"";case "yy":return(b(0)+"").substring(2);case "yyyy":return b(0);case "t":return v(b,d).substr(0,1).toLowerCase();case "tt":return v(b,d).toLowerCase();case "T":return v(b,d).substr(0,1);case "TT":return v(b,d);case "z":case "zz":case "zzz":return e?c="Z":(d=a.getTimezoneOffset(),a=d<0?"+":"-",b=m.floor(m.abs(d)/60),d=m.abs(d)%60,e=b,c=="zz"?e=i(b):c=="zzz"&&(e=i(b)+":"+i(d)),c=a+e),c;case "w":return t(b);case "ww":return i(t(b));case "S":return c=b(2),c>
10&&c<20?"th":["st","nd","rd"][c%10-1]||"th"}}function v(a,c){return a(3)<12?c("amDesignator"):c("pmDesignator")}function y(a){return!isNaN(+a[0])}function j(a,c,b){return a["get"+(c?"UTC":"")+o[b]]()}function D(a,c,b,d){a["set"+(c?"UTC":"")+o[b]].apply(a,d)}function s(a){return new g(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds())}function E(a,c){return 32-(new g(n(a,c,32))).getUTCDate()}function z(a){return function(){return a.apply(p,
[this].concat(q(arguments)))}}function k(a){var c=q(arguments,1);return function(){return a.apply(p,c.concat(q(arguments)))}}function q(a,c,b){return A.prototype.slice.call(a,c||0,b===p?a.length:b)}function K(a,c){for(var b=0;b<a.length;b++)c(a[b],b)}function i(a,c){c=c||2;for(a+="";a.length<c;)a="0"+a;return a}var o="FullYear,Month,Date,Hours,Minutes,Seconds,Milliseconds,Day,Year".split(","),L=["Years","Months","Days"],G=[12,31,24,60,60,1E3,1],M=/(([a-zA-Z])\2*)|(\((('.*?'|\(.*?\)|.)*?)\))|('(.*?)')/,
n=g.UTC,w=g.prototype.toUTCString,e=f.prototype;e.length=1;e.splice=A.prototype.splice;e.getUTCMode=z(l);e.setUTCMode=z(B);e.getTimezoneOffset=function(){return l(this)?0:this[0].getTimezoneOffset()};K(o,function(a,c){e["get"+a]=function(){return j(this[0],l(this),c)};c!=8&&(e["getUTC"+a]=function(){return j(this[0],!0,c)});c!=7&&(e["set"+a]=function(a){C(this,c,a,arguments,l(this));return this},c!=8&&(e["setUTC"+a]=function(a){C(this,c,a,arguments,!0);return this},e["add"+(L[c]||a)]=function(a,d){F(this,
c,a,d);return this},e["diff"+(L[c]||a)]=function(a){return H(this,a,c)}))});e.getWeek=function(){return t(k(j,this,!1))};e.getUTCWeek=function(){return t(k(j,this,!0))};e.setWeek=function(a,c){I(this,a,c,!1);return this};e.setUTCWeek=function(a,c){I(this,a,c,!0);return this};e.addWeeks=function(a){return this.addDays(Number(a)*7)};e.diffWeeks=function(a){return H(this,a,2)/7};f.parsers=[function(a,c,b){if(a=a.match(/^(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/)){var d=
new g(n(a[1],a[3]?a[3]-1:0,a[5]||1,a[7]||0,a[8]||0,a[10]||0,a[12]?Number("0."+a[12])*1E3:0));a[13]?a[14]&&d.setUTCMinutes(d.getUTCMinutes()+(a[15]=="-"?1:-1)*(Number(a[16])*60+(a[18]?Number(a[18]):0))):c||(d=s(d));return b.setTime(+d)}}];f.parse=function(a){return+f(""+a)};e.toString=function(a,c,b){return a===p||!y(this)?this[0].toString():J(this,a,c,b,l(this))};e.toUTCString=e.toGMTString=function(a,c,b){return a===p||!y(this)?this[0].toUTCString():J(this,a,c,b,!0)};e.toISOString=function(){return this.toUTCString("yyyy-MM-dd'T'HH:mm:ss(.fff)zzz")};
f.defaultLocale="";f.locales={"":{monthNames:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),monthNamesShort:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),dayNames:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),dayNamesShort:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),amDesignator:"AM",pmDesignator:"PM"}};f.formatters={i:"yyyy-MM-dd'T'HH:mm:ss(.fff)",u:"yyyy-MM-dd'T'HH:mm:ss(.fff)zzz"};K("getTime,valueOf,toDateString,toTimeString,toLocaleString,toLocaleDateString,toLocaleTimeString,toJSON".split(","),
function(a){e[a]=function(){return this[0][a]()}});e.setTime=function(a){this[0].setTime(a);return this};e.valid=z(y);e.clone=function(){return new f(this)};e.clearTime=function(){return this.setHours(0,0,0,0)};e.toDate=function(){return new g(+this[0])};f.now=function(){return+new g};f.today=function(){return(new f).clearTime()};f.UTC=n;f.getDaysInMonth=E;if(typeof module!=="undefined"&&module.exports)module.exports=f;return f}(Date,Math,Array);
(function(a){a.tiny=a.tiny||{};a.tiny.scrollbar={options:{axis:"y",wheel:40,scroll:true,lockscroll:true,size:"auto",sizethumb:"auto",invertscroll:false}};a.fn.tinyscrollbar=function(d){var c=a.extend({},a.tiny.scrollbar.options,d);this.each(function(){a(this).data("tsb",new b(a(this),c))});return this};a.fn.tinyscrollbar_update=function(c){return a(this).data("tsb").update(c)};function b(q,g){var k=this,t=q,j={obj:a(".viewport",q)},h={obj:a(".overview",q)},d={obj:a(".scrollbar",q)},m={obj:a(".track",d.obj)},p={obj:a(".thumb",d.obj)},l=g.axis==="x",n=l?"left":"top",v=l?"Width":"Height",r=0,y={start:0,now:0},o={},e="ontouchstart" in document.documentElement;function c(){k.update();s();return k}this.update=function(z){j[g.axis]=j.obj[0]["offset"+v];h[g.axis]=h.obj[0]["scroll"+v];h.ratio=j[g.axis]/h[g.axis];d.obj.toggleClass("disable",h.ratio>=1);m[g.axis]=g.size==="auto"?j[g.axis]:g.size;p[g.axis]=Math.min(m[g.axis],Math.max(0,(g.sizethumb==="auto"?(m[g.axis]*h.ratio):g.sizethumb)));d.ratio=g.sizethumb==="auto"?(h[g.axis]/m[g.axis]):(h[g.axis]-j[g.axis])/(m[g.axis]-p[g.axis]);r=(z==="relative"&&h.ratio<=1)?Math.min((h[g.axis]-j[g.axis]),Math.max(0,r)):0;r=(z==="bottom"&&h.ratio<=1)?(h[g.axis]-j[g.axis]):isNaN(parseInt(z,10))?r:parseInt(z,10);w()};function w(){var z=v.toLowerCase();p.obj.css(n,r/d.ratio);h.obj.css(n,-r);o.start=p.obj.offset()[n];d.obj.css(z,m[g.axis]);m.obj.css(z,m[g.axis]);p.obj.css(z,p[g.axis])}function s(){if(!e){p.obj.bind("mousedown",i);m.obj.bind("mouseup",u)}else{j.obj[0].ontouchstart=function(z){if(1===z.touches.length){i(z.touches[0]);z.stopPropagation()}}}if(g.scroll&&window.addEventListener){t[0].addEventListener("DOMMouseScroll",x,false);t[0].addEventListener("mousewheel",x,false)}else{if(g.scroll){t[0].onmousewheel=x}}}function i(A){a("body").addClass("noSelect");var z=parseInt(p.obj.css(n),10);o.start=l?A.pageX:A.pageY;y.start=z=="auto"?0:z;if(!e){a(document).bind("mousemove",u);a(document).bind("mouseup",f);p.obj.bind("mouseup",f)}else{document.ontouchmove=function(B){B.preventDefault();u(B.touches[0])};document.ontouchend=f}}function x(B){if(h.ratio<1){var A=B||window.event,z=A.wheelDelta?A.wheelDelta/120:-A.detail/3;r-=z*g.wheel;r=Math.min((h[g.axis]-j[g.axis]),Math.max(0,r));p.obj.css(n,r/d.ratio);h.obj.css(n,-r);if(g.lockscroll||(r!==(h[g.axis]-j[g.axis])&&r!==0)){A=a.event.fix(A);A.preventDefault()}}}function u(z){if(h.ratio<1){if(g.invertscroll&&e){y.now=Math.min((m[g.axis]-p[g.axis]),Math.max(0,(y.start+(o.start-(l?z.pageX:z.pageY)))))}else{y.now=Math.min((m[g.axis]-p[g.axis]),Math.max(0,(y.start+((l?z.pageX:z.pageY)-o.start))))}r=y.now*d.ratio;h.obj.css(n,-r);p.obj.css(n,y.now)}}function f(){a("body").removeClass("noSelect");a(document).unbind("mousemove",u);a(document).unbind("mouseup",f);p.obj.unbind("mouseup",f);document.ontouchmove=document.ontouchend=null}return c()}}(jQuery));
/*
 * HTML Parser By John Resig (ejohn.org)
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 *
 * // Use like so:
 * HTMLParser(htmlString, {
 *     start: function(tag, attrs, unary) {},
 *     end: function(tag) {},
 *     chars: function(text) {},
 *     comment: function(text) {}
 * });
 *
 * // or to get an XML string:
 * HTMLtoXML(htmlString);
 *
 * // or to get an XML DOM Document
 * HTMLtoDOM(htmlString);
 *
 * // or to inject into an existing document/DOM node
 * HTMLtoDOM(htmlString, document);
 * HTMLtoDOM(htmlString, document.body);
 *
 */

(function(){

	// Regular Expressions for parsing tags and attributes
	var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[\w-_]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
		endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
		attr = /([-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;
		
	// Empty Elements - HTML 4.01
	var empty = makeMap("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed");

	// Block Elements - HTML 4.01
	var block = makeMap("address,applet,blockquote,button,center,dd,del,dir,div,dl,dt,fieldset,form,frameset,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,p,pre,script,table,tbody,td,tfoot,th,thead,tr,ul");

	// Inline Elements - HTML 4.01
	var inline = makeMap("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");

	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var closeSelf = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

	// Attributes that have their values filled in disabled="disabled"
	var fillAttrs = makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");

	// Special Elements (can contain anything)
	var special = makeMap("script,style");

	var HTMLParser = this.HTMLParser = function( html, handler ) {
		var index, chars, match, stack = [], last = html;
		stack.last = function(){
			return this[ this.length - 1 ];
		};

		while ( html ) {
			chars = true;

			// Make sure we're not in a script or style element
			if ( !stack.last() || !special[ stack.last() ] ) {

				// Comment
				if ( html.indexOf("<!--") == 0 ) {
					index = html.indexOf("-->");
	
					if ( index >= 0 ) {
						if ( handler.comment )
							handler.comment( html.substring( 4, index ) );
						html = html.substring( index + 3 );
						chars = false;
					}
	
				// end tag
				} else if ( html.indexOf("</") == 0 ) {
					match = html.match( endTag );
	
					if ( match ) {
						html = html.substring( match[0].length );
						match[0].replace( endTag, parseEndTag );
						chars = false;
					}
	
				// start tag
				} else if ( html.indexOf("<") == 0 ) {
					match = html.match( startTag );
	
					if ( match ) {
						html = html.substring( match[0].length );
						match[0].replace( startTag, parseStartTag );
						chars = false;
					}
				}

				if ( chars ) {
					index = html.indexOf("<");
					
					var text = index < 0 ? html : html.substring( 0, index );
					html = index < 0 ? "" : html.substring( index );
					
					if ( handler.chars )
						handler.chars( text );
				}

			} else {
				html = html.replace(new RegExp("(.*)<\/" + stack.last() + "[^>]*>"), function(all, text){
					text = text.replace(/<!--(.*?)-->/g, "$1")
						.replace(/<!\[CDATA\[(.*?)]]>/g, "$1");

					if ( handler.chars )
						handler.chars( text );

					return "";
				});

				parseEndTag( "", stack.last() );
			}

			if ( html == last )
				throw "Parse Error: " + html;
			last = html;
		}
		
		// Clean up any remaining tags
		parseEndTag();

		function parseStartTag( tag, tagName, rest, unary ) {
			tagName = tagName.toLowerCase();

			if ( block[ tagName ] ) {
				while ( stack.last() && inline[ stack.last() ] ) {
					parseEndTag( "", stack.last() );
				}
			}

			if ( closeSelf[ tagName ] && stack.last() == tagName ) {
				parseEndTag( "", tagName );
			}

			unary = empty[ tagName ] || !!unary;

			if ( !unary )
				stack.push( tagName );
			
			if ( handler.start ) {
				var attrs = [];
	
				rest.replace(attr, function(match, name) {
					var value = arguments[2] ? arguments[2] :
						arguments[3] ? arguments[3] :
						arguments[4] ? arguments[4] :
						fillAttrs[name] ? name : "";
					
					attrs.push({
						name: name,
						value: value,
						escaped: value.replace(/(^|[^\\])"/g, '$1\\\"') //"
					});
				});
	
				if ( handler.start )
					handler.start( tagName, attrs, unary );
			}
		}

		function parseEndTag( tag, tagName ) {
			// If no tag name is provided, clean shop
			if ( !tagName )
				var pos = 0;
				
			// Find the closest opened tag of the same type
			else
				for ( var pos = stack.length - 1; pos >= 0; pos-- )
					if ( stack[ pos ] == tagName )
						break;
			
			if ( pos >= 0 ) {
				// Close all the open elements, up the stack
				for ( var i = stack.length - 1; i >= pos; i-- )
					if ( handler.end )
						handler.end( stack[ i ] );
				
				// Remove the open elements from the stack
				stack.length = pos;
			}
		}
	};
	
	this.HTMLtoXML = function( html ) {
		var results = "";
		
		HTMLParser(html, {
			start: function( tag, attrs, unary ) {
				results += "<" + tag;
		
				for ( var i = 0; i < attrs.length; i++ )
					results += " " + attrs[i].name + '="' + attrs[i].escaped + '"';
		
				results += (unary ? "/" : "") + ">";
			},
			end: function( tag ) {
				results += "</" + tag + ">";
			},
			chars: function( text ) {
				results += text;
			},
			comment: function( text ) {
				results += "<!--" + text + "-->";
			}
		});
		
		return results;
	};
	
	this.HTMLtoDOM = function( html, doc ) {
		// There can be only one of these elements
		var one = makeMap("html,head,body,title");
		
		// Enforce a structure for the document
		var structure = {
			link: "head",
			base: "head"
		};
	
		if ( !doc ) {
			if ( typeof DOMDocument != "undefined" )
				doc = new DOMDocument();
			else if ( typeof document != "undefined" && document.implementation && document.implementation.createDocument )
				doc = document.implementation.createDocument("", "", null);
			else if ( typeof ActiveX != "undefined" )
				doc = new ActiveXObject("Msxml.DOMDocument");
			
		} else
			doc = doc.ownerDocument ||
				doc.getOwnerDocument && doc.getOwnerDocument() ||
				doc;
		
		var elems = [],
			documentElement = doc.documentElement ||
				doc.getDocumentElement && doc.getDocumentElement();
				
		// If we're dealing with an empty document then we
		// need to pre-populate it with the HTML document structure
		if ( !documentElement && doc.createElement ) (function(){
			var html = doc.createElement("html");
			var head = doc.createElement("head");
			head.appendChild( doc.createElement("title") );
			html.appendChild( head );
			html.appendChild( doc.createElement("body") );
			doc.appendChild( html );
		})();
		
		// Find all the unique elements
		if ( doc.getElementsByTagName )
			for ( var i in one )
				one[ i ] = doc.getElementsByTagName( i )[0];
		
		// If we're working with a document, inject contents into
		// the body element
		var curParentNode = one.body;
		
		HTMLParser( html, {
			start: function( tagName, attrs, unary ) {
				// If it's a pre-built element, then we can ignore
				// its construction
				if ( one[ tagName ] ) {
					curParentNode = one[ tagName ];
					if ( !unary ) {
						elems.push( curParentNode );
					}
					return;
				}
			
				var elem = doc.createElement( tagName );
				
				for ( var attr in attrs )
					elem.setAttribute( attrs[ attr ].name, attrs[ attr ].value );
				
				if ( structure[ tagName ] && typeof one[ structure[ tagName ] ] != "boolean" )
					one[ structure[ tagName ] ].appendChild( elem );
				
				else if ( curParentNode && curParentNode.appendChild )
					curParentNode.appendChild( elem );
					
				if ( !unary ) {
					elems.push( elem );
					curParentNode = elem;
				}
			},
			end: function( tag ) {
				elems.length -= 1;
				
				// Init the new parentNode
				curParentNode = elems[ elems.length - 1 ];
			},
			chars: function( text ) {
				curParentNode.appendChild( doc.createTextNode( text ) );
			},
			comment: function( text ) {
				// create comment node
			}
		});
		
		return doc;
	};

	function makeMap(str){
		var obj = {}, items = str.split(",");
		for ( var i = 0; i < items.length; i++ )
			obj[ items[i] ] = true;
		return obj;
	}
})();
// An html parser written in JavaScript
// Based on http://ejohn.org/blog/pure-javascript-html-parser/

(function() {
  var supports = (function() {
    var supports = {};

    var html;
    var work = this.document.createElement('div');

    html = "<P><I></P></I>";
    work.innerHTML = html;
    supports.tagSoup = work.innerHTML !== html;

    work.innerHTML = "<P><i><P></P></i></P>";
    supports.selfClose = work.childNodes.length === 2;

    return supports;
  })();



  // Regular Expressions for parsing tags and attributes
  var startTag = /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/;
  var endTag = /^<\/([\-A-Za-z0-9_]+)[^>]*>/;
  var attr = /([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;
  var fillAttr = /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;

  var DEBUG = false;

  function htmlParser(stream, options) {
    stream = stream || '';

    // Options
    options = options || {};

    for(var key in supports) {
      if(supports.hasOwnProperty(key)) {
        if(options.autoFix) {
          options['fix_'+key] = true;//!supports[key];
        }
        options.fix = options.fix || options['fix_'+key];
      }
    }

    var stack = [];

    var append = function(str) {
      stream += str;
    };

    var prepend = function(str) {
      stream = str + stream;
    };

    // Order of detection matters: detection of one can only
    // succeed if detection of previous didn't
    var detect = {
      comment: /^<!--/,
      endTag: /^<\//,
      atomicTag: /^<\s*(script|style|noscript)[\s>]/i,
      startTag: /^</,
      chars: /^[^<]/
    };

    // Detection has already happened when a reader is called.
    var reader = {

      comment: function() {
        var index = stream.indexOf("-->");
        if ( index >= 0 ) {
          return {
            content: stream.substr(4, index),
            length: index + 3
          };
        }
      },

      endTag: function() {
        var match = stream.match( endTag );

        if ( match ) {
          return {
            tagName: match[1],
            length: match[0].length
          };
        }
      },

      atomicTag: function() {
        var start = reader.startTag();
        if(start) {
          var rest = stream.slice(start.length);
          // for optimization, we check first just for the end tag
          if(rest.match(new RegExp("<\/\\s*" + start.tagName + "\\s*>", "i"))) {
            // capturing the content is inefficient, so we do it inside the if
            var match = rest.match(new RegExp("([\\s\\S]*?)<\/\\s*" + start.tagName + "\\s*>", "i"));
            if(match) {
              // good to go
              return {
                tagName: start.tagName,
                attrs: start.attrs,
                content: match[1],
                length: match[0].length + start.length
              };
            }
          }
        }
      },

      startTag: function() {
        var match = stream.match( startTag );

        if ( match ) {
          var attrs = {};

          match[2].replace(attr, function(match, name) {
            var value = arguments[2] || arguments[3] || arguments[4] ||
              fillAttr.test(name) && name || null;

            attrs[name] = value;
          });

          return {
            tagName: match[1],
            attrs: attrs,
            unary: !!match[3],
            length: match[0].length
          };
        }
      },

      chars: function() {
        var index = stream.indexOf("<");
        return {
          length: index >= 0 ? index : stream.length
        };
      }
    };

    var readToken = function() {

      // Enumerate detects in order
      for (var type in detect) {

        if(detect[type].test(stream)) {
          if(DEBUG) { console.log('suspected ' + type); }

          var token = reader[type]();
          if(token) {
            if(DEBUG) { console.log('parsed ' + type, token); }
            // Type
            token.type = token.type || type;
            // Entire text
            token.text = stream.substr(0, token.length);
            // Update the stream
            stream = stream.slice(token.length);

            return token;
          }
          return null;
        }
      }
    };

    var readTokens = function(handlers) {
      var tok;
      while(tok = readToken()) {
        // continue until we get an explicit "false" return
        if(handlers[tok.type] && handlers[tok.type](tok) === false) {
          return;
        }
      }
    };

    var clear = function() {
      var rest = stream;
      stream = '';
      return rest;
    };

    var rest = function() {
      return stream;
    };

    if(options.fix) {
      (function() {
        // Empty Elements - HTML 4.01
        var EMPTY = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i;

        // Elements that you can| intentionally| leave open
        // (and which close themselves)
        var CLOSESELF = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;


        var stack = [];
        stack.last = function() {
          return this[this.length - 1];
        };
        stack.lastTagNameEq = function(tagName) {
          var last = this.last();
          return last && last.tagName &&
            last.tagName.toUpperCase() === tagName.toUpperCase();
        };

        stack.containsTagName = function(tagName) {
          for(var i = 0, tok; tok = this[i]; i++) {
            if(tok.tagName === tagName) {
              return true;
            }
          }
          return false;
        };

        var correct = function(tok) {
          if(tok && tok.type === 'startTag') {
            // unary
            tok.unary = EMPTY.test(tok.tagName) || tok.unary;
          }
          return tok;
        };

        var readTokenImpl = readToken;

        var peekToken = function() {
          var tmp = stream;
          var tok = correct(readTokenImpl());
          stream = tmp;
          return tok;
        };

        var closeLast = function() {
          var tok = stack.pop();

          // prepend close tag to stream.
          prepend('</'+tok.tagName+'>');
        };

        var handlers = {
          startTag: function(tok) {
            var tagName = tok.tagName;
            // Fix tbody
            if(tagName.toUpperCase() === 'TR' && stack.lastTagNameEq('TABLE')) {
              prepend('<TBODY>');
              prepareNextToken();
            } else if(options.fix_selfClose &&
              CLOSESELF.test(tagName) &&
              stack.containsTagName(tagName)) {
                if(stack.lastTagNameEq(tagName)) {
                  closeLast();
                } else {
                  prepend('</'+tok.tagName+'>');
                  prepareNextToken();
                }
            } else if (!tok.unary) {
              stack.push(tok);
            }
          },

          endTag: function(tok) {
            var last = stack.last();
            if(last) {
              if(options.fix_tagSoup && !stack.lastTagNameEq(tok.tagName)) {
                // cleanup tag soup
                closeLast();
              } else {
                stack.pop();
              }
            } else if (options.fix_tagSoup) {
              // cleanup tag soup part 2: skip this token
              skipToken();
            }
          }
        };

        var skipToken = function() {
          // shift the next token
          readTokenImpl();

          prepareNextToken();
        };

        var prepareNextToken = function() {
          var tok = peekToken();
          if(tok && handlers[tok.type]) {
            handlers[tok.type](tok);
          }
        };

        // redefine readToken
        readToken = function() {
          prepareNextToken();
          return correct(readTokenImpl());
        };
      })();
    }

    return {
      append: append,
      readToken: readToken,
      readTokens: readTokens,
      clear: clear,
      rest: rest,
      stack: stack
    };

  }

  htmlParser.supports = supports;

  htmlParser.tokenToString = function(tok) {
    var handler = {
      comment: function(tok) {
        return '<--' + tok.content + '-->';
      },
      endTag: function(tok) {
        return '</'+tok.tagName+'>';
      },
      atomicTag: function(tok) {
        console.log(tok);
        return handler.startTag(tok) +
              tok.content +
              handler.endTag(tok);
      },
      startTag: function(tok) {
        var str = '<'+tok.tagName;
        for (var key in tok.attrs) {
          var val = tok.attrs[key];
          // escape quotes
          str += ' '+key+'="'+(val ? val.replace(/(^|[^\\])"/g, '$1\\\"') : '')+'"';
        }
        return str + (tok.unary ? '/>' : '>');
      },
      chars: function(tok) {
        return tok.text;
      }
    };
    return handler[tok.type](tok);
  };

  htmlParser.escapeAttributes = function(attrs) {
    var escapedAttrs = {};
    // escape double-quotes for writing html as a string

    for(var name in attrs) {
      var value = attrs[name];
      escapedAttrs[name] = value && value.replace(/(^|[^\\])"/g, '$1\\\"');
    }
    return escapedAttrs;
  };

  for(var key in supports) {
    htmlParser.browserHasFlaw = htmlParser.browserHasFlaw || (!supports[key]) && key;
  }

  this.htmlParser = htmlParser;
})();
//     postscribe.js 1.1.1
//     (c) Copyright 2012 to the present, Krux
//     postscribe is freely distributable under the MIT license.
//     For all details and documentation:
//     http://krux.github.com/postscribe


(function() {

  var global = this;

  if(global.postscribe) {
    return;
  }

  // Debug write tasks.
  var DEBUG = true;

  // Turn on to debug how each chunk affected the DOM.
  var DEBUG_CHUNK = false;

  // # Helper Functions

  var slice = Array.prototype.slice;

  // A function that intentionally does nothing.
  function doNothing() {}


  // Is this a function?
  function isFunction(x) {
    return "function" === typeof x;
  }

  // Loop over each item in an array-like value.
  function each(arr, fn, _this) {
    var i, len = (arr && arr.length) || 0;
    for(i = 0; i < len; i++) {
      fn.call(_this, arr[i], i);
    }
  }

  // Loop over each key/value pair in a hash.
  function eachKey(obj, fn, _this) {
    var key;
    for(key in obj) {
      if(obj.hasOwnProperty(key)) {
        fn.call(_this, key, obj[key]);
      }
    }
  }

  // Set properties on an object.
  function set(obj, props) {
    eachKey(props, function(key, value) {
      obj[key] = value;
    });
    return obj;
  }

  // Set default options where some option was not specified.
  function defaults(options, _defaults) {
    options = options || {};
    eachKey(_defaults, function(key, val) {
      if(options[key] == null) {
        options[key] = val;
      }
    });
    return options;
  }

  // Convert value (e.g., a NodeList) to an array.
  function toArray(obj) {
    try {
      return slice.call(obj);
    } catch(e) {
      var ret = [];
      each(obj, function(val) {
        ret.push(val);
      });
      return ret;
    }
  }

  // Test if token is a script tag.
  function isScript(tok) {
    return (/^script$/i).test(tok.tagName);
  }

  // # Class WriteStream

  // Stream static html to an element, where "static html" denotes "html without scripts".

  // This class maintains a *history of writes devoid of any attributes* or "proxy history".
  // Injecting the proxy history into a temporary div has no side-effects,
  // other than to create proxy elements for previously written elements.

  // Given the `staticHtml` of a new write, a `tempDiv`'s innerHTML is set to `proxy_history + staticHtml`.
  // The *structure* of `tempDiv`'s contents, (i.e., the placement of new nodes beside or inside of proxy elements),
  // reflects the DOM structure that would have resulted if all writes had been squashed into a single write.

  // For each descendent `node` of `tempDiv` whose parentNode is a *proxy*, `node` is appended to the corresponding *real* element within the DOM.

  // Proxy elements are mapped to *actual* elements in the DOM by injecting a data-id attribute into each start tag in `staticHtml`.
  var WriteStream = (function(){

    // Prefix for data attributes on DOM elements.
    var BASEATTR = 'data-ps-';

    // get / set data attributes
    function data(el, name, value) {
      var attr = BASEATTR + name;

      if(arguments.length === 2) {
        // Get
        var val = el.getAttribute(attr);

        // IE 8 returns a number if it's a number
        return val == null ? val : String(val);

      } else if( value != null && value !== '') {
        // Set
        el.setAttribute(attr, value);

      } else {
        // Remove
        el.removeAttribute(attr);
      }
    }

    function WriteStream(root, options) {
      var doc = root.ownerDocument;

      set(this, {
        root: root,

        options: options,

        win: doc.defaultView || doc.parentWindow,

        doc: doc,

        parser: global.htmlParser('', { autoFix: true }),

        // Actual elements by id.
        actuals: [root],

        // Embodies the "structure" of what's been written so far, devoid of attributes.
        proxyHistory: '',

        // Create a proxy of the root element.
        proxyRoot: doc.createElement(root.nodeName),

        scriptStack: [],

        writeQueue: []
      });

      data(this.proxyRoot, 'proxyof', 0);

    }


    WriteStream.prototype.write = function() {
      [].push.apply(this.writeQueue, arguments);
      // Process writes
      // When new script gets pushed or pending this will stop
      // because new writeQueue gets pushed
      var arg;
      while(!this.deferredRemote &&
            this.writeQueue.length) {
        arg = this.writeQueue.shift();

        if(isFunction(arg)) {
          this.callFunction(arg);
        } else {
          this.writeImpl(arg);
        }
      }
    };

    WriteStream.prototype.callFunction = function(fn) {
      var tok = { type: "function", value: fn.name || fn.toString() };
      this.onScriptStart(tok);
      fn.call(this.win, this.doc);
      this.onScriptDone(tok);
    };

    WriteStream.prototype.writeImpl = function(html) {
      this.parser.append(html);

      var tok, tokens = [];

      // stop if we see a script token
      while((tok = this.parser.readToken()) && !isScript(tok)) {
        tokens.push(tok);
      }

      this.writeStaticTokens(tokens);

      if(tok) {
        this.handleScriptToken(tok);
      }
    };


    // ## Contiguous non-script tokens (a chunk)
    WriteStream.prototype.writeStaticTokens = function(tokens) {

      var chunk = this.buildChunk(tokens);

      if(!chunk.actual) {
        // e.g., no tokens, or a noscript that got ignored
        return;
      }
      chunk.html = this.proxyHistory + chunk.actual;
      this.proxyHistory += chunk.proxy;

      this.proxyRoot.innerHTML = chunk.html;

      if(DEBUG_CHUNK) {
        chunk.proxyInnerHTML = this.proxyRoot.innerHTML;
      }

      this.walkChunk();

      if(DEBUG_CHUNK) {
        chunk.actualInnerHTML = this.root.innerHTML; //root
      }

      return chunk;
    };


    WriteStream.prototype.buildChunk = function (tokens) {
      var nextId = this.actuals.length,

          // The raw html of this chunk.
          raw = [],

          // The html to create the nodes in the tokens (with id's injected).
          actual = [],

          // Html that can later be used to proxy the nodes in the tokens.
          proxy = [];

      each(tokens, function(tok) {

        raw.push(tok.text);

        if(tok.attrs) { // tok.attrs <==> startTag or atomicTag or cursor
          // Ignore noscript tags. They are atomic, so we don't have to worry about children.
          if(!(/^noscript$/i).test(tok.tagName)) {
            var id = nextId++;

            // Actual: inject id attribute: replace '>' at end of start tag with id attribute + '>'
            actual.push(
              tok.text.replace(/(\/?>)/, ' '+BASEATTR+'id='+id+' $1')
            );

            // Don't proxy scripts: they have no bearing on DOM structure.
            if(tok.attrs.id !== "ps-script") {
              // Proxy: strip all attributes and inject proxyof attribute
              proxy.push(
                // ignore atomic tags (e.g., style): they have no "structural" effect
                tok.type === 'atomicTag' ? '' :
                  '<'+tok.tagName+' '+BASEATTR+'proxyof='+id+(tok.unary ? '/>' : '>')
              );
            }
          }

        } else {
          // Visit any other type of token
          // Actual: append.
          actual.push(tok.text);
          // Proxy: append endTags. Ignore everything else.
          proxy.push(tok.type === 'endTag' ? tok.text : '');
        }
      });

      return {
        tokens: tokens,
        raw: raw.join(''),
        actual: actual.join(''),
        proxy: proxy.join('')
      };
    };

    WriteStream.prototype.walkChunk = function() {
      var node, stack = [this.proxyRoot];

      // use shift/unshift so that children are walked in document order

      while((node = stack.shift()) != null) {

        var isElement = node.nodeType === 1;
        var isProxy = isElement && data(node, 'proxyof');

        // Ignore proxies
        if(!isProxy) {

          if(isElement) {
            // New actual element: register it and remove the the id attr.
            this.actuals[data(node, 'id')] = node;
            data(node, 'id', null);
          }

          // Is node's parent a proxy?
          var parentIsProxyOf = node.parentNode && data(node.parentNode, 'proxyof');
          if(parentIsProxyOf) {
            // Move node under actual parent.
            this.actuals[parentIsProxyOf].appendChild(node);
          }
        }
        // prepend childNodes to stack
        stack.unshift.apply(stack, toArray(node.childNodes));
      }
    };

    // ### Script tokens

    WriteStream.prototype.handleScriptToken = function(tok) {
      var remainder = this.parser.clear();

      if(remainder) {
        // Write remainder immediately behind this script.
        this.writeQueue.unshift(remainder);
      }

      tok.src = tok.attrs.src || tok.attrs.SRC;

      if(tok.src && this.scriptStack.length) {
        // Defer this script until scriptStack is empty.
        // Assumption 1: This script will not start executing until
        // scriptStack is empty.
        this.deferredRemote = tok;
      } else {
        this.onScriptStart(tok);
      }

      // Put the script node in the DOM.
      var _this = this;
      this.writeScriptToken(tok, function() {
        _this.onScriptDone(tok);
      });

    };

    WriteStream.prototype.onScriptStart = function(tok) {
      tok.outerWrites = this.writeQueue;
      this.writeQueue = [];
      this.scriptStack.unshift(tok);
    };

    WriteStream.prototype.onScriptDone = function(tok) {
      // Pop script and check nesting.
      if(tok !== this.scriptStack[0]) {
        this.options.error({ message: "Bad script nesting or script finished twice" });
        return;
      }
      this.scriptStack.shift();

      // Append outer writes to queue and process them.
      this.write.apply(this, tok.outerWrites);

      // Check for pending remote

      // Assumption 2: if remote_script1 writes remote_script2 then
      // the we notice remote_script1 finishes before remote_script2 starts.
      // I think this is equivalent to assumption 1
      if(!this.scriptStack.length && this.deferredRemote) {
        this.onScriptStart(this.deferredRemote);
        this.deferredRemote = null;
      }
    };

    // Build a script and insert it into the DOM.
    // Done is called once script has executed.
    WriteStream.prototype.writeScriptToken = function(tok, done) {
      var el = this.buildScript(tok);

      if(tok.src) {
        // Fix for attribute "SRC" (capitalized). IE does not recognize it.
        el.src = tok.src;
        this.scriptLoadHandler(el, done);
      }

      try {
        this.insertScript(el);
        if(!tok.src) {
          done();
        }
      } catch(e) {
        this.options.error(e);
        done();
      }
    };

    // Build a script element from an atomic script token.
    WriteStream.prototype.buildScript = function(tok) {
      var el = this.doc.createElement(tok.tagName);

      // Set attributes
      eachKey(tok.attrs, function(name, value) {
        el.setAttribute(name, value);
      });

      // Set content
      if(tok.content) {
        el.text = tok.content;
      }

      return el;
    };


    // Insert script into DOM where it would naturally be written.
    WriteStream.prototype.insertScript = function(el) {
      // Append a span to the stream. That span will act as a cursor
      // (i.e. insertion point) for the script.
      this.writeImpl('<span id="ps-script"/>');

      // Grab that span from the DOM.
      var cursor = this.doc.getElementById("ps-script");

      // Replace cursor with script.
      cursor.parentNode.replaceChild(el, cursor);
    };


    WriteStream.prototype.scriptLoadHandler = function(el, done) {
      function cleanup() {
        el = el.onload = el.onreadystatechange = el.onerror = null;
        done();
      }

      // Error handler
      var error = this.options.error;

      // Set handlers
      set(el, {
        onload: function() { cleanup(); },

        onreadystatechange: function() {
          if(/^(loaded|complete)$/.test( el.readyState )) {
            cleanup();
          }
        },

        onerror: function() {
          error({ message: 'remote script failed ' + el.src });
          cleanup();
        }
      });
    };

    return WriteStream;

  }());






  // Public-facing interface and queuing
  var postscribe = (function() {
    var nextId = 0;

    var queue = [];

    var active = null;

    function nextStream() {
      var args = queue.shift();
      if(args) {
        args.stream = runStream.apply(null, args);
      }
    }


    function runStream(el, html, options) {
      active = new WriteStream(el, options);

      // Identify this stream.
      active.id = nextId++;
      active.name = options.name || active.id;
      postscribe.streams[active.name] = active;

      // Override document.write.
      var doc = el.ownerDocument;

      var stash = { write: doc.write, writeln: doc.writeln };

      function write(str) {
        str = options.beforeWrite(str);
        active.write(str);
        options.afterWrite(str);
      }

      set(doc, { write: write, writeln: function(str) { write(str + '\n'); } });

      // Override window.onerror
      var oldOnError = active.win.onerror || doNothing;

      // This works together with the try/catch around WriteStream::insertScript
      // In modern browsers, exceptions in tag scripts go directly to top level
      active.win.onerror = function(msg, url, line) {
        options.error({ msg: msg + ' - ' + url + ':' + line });
        oldOnError.apply(active.win, arguments);
      };

      // Write to the stream
      active.write(html, function streamDone() {
        // restore document.write
        set(doc, stash);

        // restore window.onerror
        active.win.onerror = oldOnError;

        options.done();
        active = null;
        nextStream();
      });

      return active;
    }


    function postscribe(el, html, options) {
      if(isFunction(options)) {
        options = { done: options };
      }
      options = defaults(options, {
        done: doNothing,
        error: function(e) { throw e; },
        beforeWrite: function(str) { return str; },
        afterWrite: doNothing
      });

      el =
        // id selector
        (/^#/).test(el) ? global.document.getElementById(el.substr(1)) :
        // jquery object. TODO: loop over all elements.
        el.jquery ? el[0] : el;


      var args = [el, html, options];

      el.postscribe = {
        cancel: function() {
          if(args.stream) {
            // TODO: implement this
            args.stream.abort();
          } else {
            args[1] = doNothing;
          }
        }
      };

      queue.push(args);
      if(!active) {
        nextStream();
      }

      return el.postscribe;
    }

    return set(postscribe, {
      // Streams by name.
      streams: {},
      // Queue of streams.
      queue: queue,
      // Expose internal classes.
      WriteStream: WriteStream
    });

  }());

  // export postscribe
  global.postscribe = postscribe;

}());
var ns_=ns_||{};ns_.StreamSense=ns_.StreamSense||function(){function e(e,t){var n=new Image;n.src=e,t&&setTimeout(t,0)}function t(e,t,n){n&&setTimeout(n,0)}function n(t,n){var r=t||"",s=i,o="undefined",u=window.comScore||window.sitestat||function(t){var n="comScore=",r=document,i=r.cookie,s="",u="indexOf",a="substring",f="length",l=2048,c,h="&ns_",p="&",d,v,m,g,y=window,b=y.encodeURIComponent||escape;if(i[u](n)+1)for(m=0,v=i.split(";"),g=v[f];m<g;m++)d=v[m][u](n),d+1&&(s=p+unescape(v[m][a](d+n[f])));t+=h+"_t="+ +(new Date)+h+"c="+(r.characterSet||r.defaultCharset||"")+"&c8="+b(r.title)+s+"&c7="+b(r.URL)+"&c9="+b(r.referrer),t[f]>l&&t[u](p)>0&&(c=t[a](0,l-8).lastIndexOf(p),t=(t[a](0,c)+h+"cut="+b(t[a](c+1)))[a](0,l)),e(t),typeof ns_p===o&&(ns_p={src:t}),ns_p.lastMeasurement=t};if(typeof n!==o){var a=[],f=window.encodeURIComponent||escape;for(var l in n)n.hasOwnProperty(l)&&a.push(f(l)+"="+f(n[l]));r+="&"+a.join("&")}return u(r)}function r(e,t){var n,r=2048,i=document,s=window,o=s.encodeURIComponent||escape,u=[],f=a.LABELS_ORDER,l=e.split("?"),c=l[0],h=l[1],p=h.split("&");for(var d=0,v=p.length;d<v;d++){var m=p[d].split("="),g=unescape(m[0]),y=unescape(m[1]);t[g]=y}var b={};for(var d=0,v=f.length;d<v;d++){var w=f[d];t.hasOwnProperty(w)&&(b[w]=!0,u.push(o(w)+"="+o(t[w])))}for(var w in t){if(b[w])continue;t.hasOwnProperty(w)&&u.push(o(w)+"="+o(t[w]))}return n=c+"?"+u.join("&"),n=n+(n.indexOf("&c8=")<0?"&c8="+o(i.title):"")+(n.indexOf("&c7=")<0?"&c7="+o(i.URL):"")+(n.indexOf("&c9=")<0?"&c9="+o(i.referrer):""),n.length>r&&n.indexOf("&")>0&&(last=n.substr(0,r-8).lastIndexOf("&"),n=(n.substring(0,last)+"&ns_cut="+o(n.substring(last+1))).substr(0,r)),n}var i=function(){var e={uid:function(){var e=1;return function(){return+(new Date)+"_"+e++}}(),filter:function(e,t){var n={};for(var r in t)t.hasOwnProperty(r)&&e(t[r])&&(n[r]=t[r]);return n},extend:function(e){var t=arguments.length,n;e=e||{};for(var r=1;r<t;r++){n=arguments[r];if(!n)continue;for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])}return e},getLong:function(e,t){var n=Number(e);return e==null||isNaN(n)?t||0:n},getInteger:function(e,t){var n=Number(e);return e==null||isNaN(n)?t||0:n},getBoolean:function(e,t){var n=String(e).toLowerCase()=="true";return e==null?t||!1:n},isNotEmpty:function(e){return e!=null&&e.length>0},regionMatches:function(e,t,n,r,i){if(t<0||r<0||t+i>e.length||r+i>n.length)return!1;while(--i>=0){var s=e.charAt(t++),o=n.charAt(r++);if(s!=o)return!1}return!0}};return e.filterMap=function(e,t){for(var n in e)t.indexOf(n)==-1&&delete e[n]},e}(),s=function(){var e=["play","pause","end","buffer","keep-alive","hb","custom","ad_play","ad_pause","ad_end","ad_click"];return{PLAY:0,PAUSE:1,END:2,BUFFER:3,KEEP_ALIVE:4,HEART_BEAT:5,CUSTOM:6,AD_PLAY:7,AD_PAUSE:8,AD_END:9,AD_CLICK:10,toString:function(t){return e[t]}}}(),o=function(){var e=[s.END,s.PLAY,s.PAUSE,s.BUFFER];return{IDLE:0,PLAYING:1,PAUSED:2,BUFFERING:3,toEventType:function(t){return e[t]}}}(),u={ADPLAY:s.AD_PLAY,ADPAUSE:s.AD_PAUSE,ADEND:s.AD_END,ADCLICK:s.AD_CLICK},a={STREAMSENSE_VERSION:"4.1309.13",STREAMSENSEMEDIAPLAYER_VERSION:"4.1309.13",STREAMSENSEVIDEOVIEW_VERSION:"4.1309.13",DEFAULT_HEARTBEAT_INTERVAL:[{playingtime:6e4,interval:1e4},{playingtime:null,interval:6e4}],KEEP_ALIVE_PERIOD:12e5,PAUSED_ON_BUFFERING_PERIOD:500,PAUSE_PLAY_SWITCH_DELAY:500,DEFAULT_PLAYERNAME:"streamsense",C1_VALUE:"19",C10_VALUE:"js",NS_AP_C12M_VALUE:"1",NS_NC_VALUE:"1",PAGE_NAME_LABEL:"name",LABELS_ORDER:["c1","c2","ns_site","ns_vsite","ns_ap_an","ns_ap_pn","ns_ap_pv","c12","name","ns_ak","ns_ap_ec","ns_ap_ev","ns_ap_device","ns_ap_id","ns_ap_csf","ns_ap_bi","ns_ap_pfm","ns_ap_pfv","ns_ap_ver","ns_ap_sv","ns_type","ns_radio","ns_nc","ns_ap_ui","ns_ap_gs","ns_st_sv","ns_st_pv","ns_st_it","ns_st_id","ns_st_ec","ns_st_sp","ns_st_sq","ns_st_cn","ns_st_ev","ns_st_po","ns_st_cl","ns_st_el","ns_st_pb","ns_st_hc","ns_st_mp","ns_st_mv","ns_st_pn","ns_st_tp","ns_st_pt","ns_st_pa","ns_st_ad","ns_st_li","ns_st_ci","ns_ap_jb","ns_ap_res","ns_ap_c12m","ns_ap_install","ns_ap_updated","ns_ap_lastrun","ns_ap_cs","ns_ap_runs","ns_ap_usage","ns_ap_fg","ns_ap_ft","ns_ap_dft","ns_ap_bt","ns_ap_dbt","ns_ap_dit","ns_ap_as","ns_ap_das","ns_ap_it","ns_ap_uc","ns_ap_aus","ns_ap_daus","ns_ap_us","ns_ap_dus","ns_ap_ut","ns_ap_oc","ns_ap_uxc","ns_ap_uxs","ns_ap_lang","ns_ap_miss","ns_ts","ns_st_ca","ns_st_cp","ns_st_er","ns_st_pe","ns_st_ui","ns_st_bc","ns_st_bt","ns_st_bp","ns_st_pc","ns_st_pp","ns_st_br","ns_st_ub","ns_st_vo","ns_st_ws","ns_st_pl","ns_st_pr","ns_st_ep","ns_st_ty","ns_st_cs","ns_st_ge","ns_st_st","ns_st_dt","ns_st_ct","ns_st_de","ns_st_pu","ns_st_cu","ns_st_fee","c7","c8","c9"]},f=function(){var e=function(){function h(e,t){var n=t[e];n!=null&&(c[e]=n)}var e=this,t=0,n=0,r=0,u=0,a=0,f=0,l,c;i.extend(this,{reset:function(t){t!=null&&t.length>0?i.filterMap(c,t):c={},c.ns_st_cl="0",c.ns_st_pn="1",c.ns_st_tp="1",e.setClipId("1"),e.setPauses(0),e.setStarts(0),e.setBufferingTime(0),e.setBufferingTimestamp(-1),e.setPlaybackTime(0),e.setPlaybackTimestamp(-1)},setLabels:function(t,n){t!=null&&i.extend(c,t),e.setRegisters(c,n)},getLabels:function(){return c},setLabel:function(t,n){var r={};r[t]=n,e.setLabels(r,null)},getLabel:function(e){return c[e]},getClipId:function(){return l},setClipId:function(e){l=e},setRegisters:function(e,i){var s=e.ns_st_cn;s!=null&&(l=s,delete e.ns_st_cn),s=e.ns_st_bt,s!=null&&(r=Number(s),delete e.ns_st_bt),h("ns_st_cl",e),h("ns_st_pn",e),h("ns_st_tp",e),h("ns_st_ub",e),h("ns_st_br",e);if(i==o.PLAYING||i==null)s=e.ns_st_sq,s!=null&&(n=Number(s),delete e.ns_st_sq);i!=o.BUFFERING&&(s=e.ns_st_pt,s!=null&&(a=Number(s),delete e.ns_st_pt));if(i==o.PAUSED||i==o.IDLE||i==null)s=e.ns_st_pc,s!=null&&(t=Number(s),delete e.ns_st_pc)},createLabels:function(r,o){var u=o||{};u.ns_st_cn=e.getClipId(),u.ns_st_bt=String(e.getBufferingTime());if(r==s.PLAY||r==null)u.ns_st_sq=String(n);if(r==s.PAUSE||r==s.END||r==s.KEEP_ALIVE||r==s.HEART_BEAT||r==null)u.ns_st_pt=String(e.getPlaybackTime()),u.ns_st_pc=String(t);return i.extend(u,e.getLabels()),u},incrementPauses:function(){t++},incrementStarts:function(){n++},getBufferingTime:function(){var e=r;return u>=0&&(e+=+(new Date)-u),e},setBufferingTime:function(e){r=e},getPlaybackTime:function(){var e=a;return f>=0&&(e+=+(new Date)-f),e},setPlaybackTime:function(e){a=e},getPlaybackTimestamp:function(){return f},setPlaybackTimestamp:function(e){f=e},getBufferingTimestamp:function(){return u},setBufferingTimestamp:function(e){u=e},getPauses:function(){return t},setPauses:function(e){t=e},getStarts:function(){return n},setStarts:function(e){n=e}}),c={},e.reset()};return e}(),l=function(){var e=function(){var e=this,t=null,n,r=0,u=0,a=0,l=0,c=0,h,p=0,d=!1;i.extend(this,{reset:function(t){t!=null&&t.length>0?i.filterMap(h,t):h={},e.setPlaylistId(+(new Date)+"_"+p),e.setBufferingTime(0),e.setPlaybackTime(0),e.setPauses(0),e.setStarts(0),e.setRebufferCount(0),d=!1},setLabels:function(t,n){t!=null&&i.extend(h,t),e.setRegisters(h,n)},getLabels:function(){return h},setLabel:function(t,n){var r={};r[t]=n,e.setLabels(r,null)},getLabel:function(e){return h[e]},getClip:function(){return t},getPlaylistId:function(){return n},setPlaylistId:function(e){n=e},setRegisters:function(e,t){var i=e.ns_st_sp;i!=null&&(r=Number(i),delete e.ns_st_sp),i=e.ns_st_bc,i!=null&&(a=Number(i),delete e.ns_st_bc),i=e.ns_st_bp,i!=null&&(l=Number(i),delete e.ns_st_bp),i=e.ns_st_id,i!=null&&(n=i,delete e.ns_st_id),t!=o.BUFFERING&&(i=e.ns_st_pa,i!=null&&(c=Number(i),delete e.ns_st_pa));if(t==o.PAUSED||t==o.IDLE||t==null)i=e.ns_st_pp,i!=null&&(u=Number(i),delete e.ns_st_pp)},createLabels:function(t,o){var f=o||{};f.ns_st_bp=String(e.getBufferingTime()),f.ns_st_sp=String(r),f.ns_st_id=String(n),a>0&&(f.ns_st_bc=String(a));if(t==s.PAUSE||t==s.END||t==s.KEEP_ALIVE||t==s.HEART_BEAT||t==null)f.ns_st_pa=String(e.getPlaybackTime()),f.ns_st_pp=String(u);if(t==s.PLAY||t==null)e.didFirstPlayOccurred()||(f.ns_st_pb="1",e.setFirstPlayOccurred(!0));return i.extend(f,e.getLabels()),f},incrementStarts:function(){r++},incrementPauses:function(){u++,t.incrementPauses()},setPlaylistCounter:function(e){p=e},incrementPlaylistCounter:function(){p++},addPlaybackTime:function(n){if(t.getPlaybackTimestamp()>=0){var r=n-t.getPlaybackTimestamp();t.setPlaybackTimestamp(-1),t.setPlaybackTime(t.getPlaybackTime()+r),e.setPlaybackTime(e.getPlaybackTime()+r)}},addBufferingTime:function(n){if(t.getBufferingTimestamp()>=0){var r=n-t.getBufferingTimestamp();t.setBufferingTimestamp(-1),t.setBufferingTime(t.getBufferingTime()+r),e.setBufferingTime(e.getBufferingTime()+r)}},getBufferingTime:function(){var e=l;return t.getBufferingTimestamp()>=0&&(e+=+(new Date)-t.getBufferingTimestamp()),e},setBufferingTime:function(e){l=e},getPlaybackTime:function(){var e=c;return t.getPlaybackTimestamp()>=0&&(e+=+(new Date)-t.getPlaybackTimestamp()),e},setPlaybackTime:function(e){c=e},getStarts:function(){return r},setStarts:function(e){r=e},getPauses:function(){return u},setPauses:function(e){u=e},getRebufferCount:function(){return a},incrementRebufferCount:function(){a++},setRebufferCount:function(e){a=e},didFirstPlayOccurred:function(){return d},setFirstPlayOccurred:function(e){d=e}}),t=new f,h={},e.reset()};return e}(),c=function(){var t=function(t,u){function B(e){N=e}function j(e){var t=0;if(N!=null)for(var n=0;n<N.length;n++){var r=N[n],i=r.playingtime;if(!i||e<i){t=r.interval;break}}return t}function F(){U();var e=j(g.getClip().getPlaybackTime());if(e>0){var t=C>0?C:e;T=setTimeout(R,t)}C=0}function I(){U();var e=j(g.getClip().getPlaybackTime());C=e-g.getClip().getPlaybackTime()%e,T!=null&&U()}function q(){C=0,L=0,k=0}function R(){k++;var e=ct(s.HEART_BEAT,null);et(e),C=0,F()}function U(){T!=null&&(clearTimeout(T),T=null)}function z(){X(),S=setTimeout(W,a.KEEP_ALIVE_PERIOD)}function W(){var e=ct(s.KEEP_ALIVE,null);et(e),m++,z()}function X(){S!=null&&(clearTimeout(S),S=null)}function V(){J(),f.isPauseOnBufferingEnabled()&&st(o.PAUSED)&&(w=setTimeout($,a.PAUSED_ON_BUFFERING_PERIOD))}function $(){if(O==o.PLAYING){g.incrementRebufferCount(),g.incrementPauses();var e=ct(s.PAUSE,null);et(e),m++,O=o.PAUSED}}function J(){w!=null&&(clearTimeout(w),w=null)}function K(){x!=null&&(clearTimeout(x),x=null)}function Q(e){return e==o.PLAYING||e==o.PAUSED}function G(e){return e==s.PLAY?o.PLAYING:e==s.PAUSE?o.PAUSED:e==s.BUFFER?o.BUFFERING:e==s.END?o.IDLE:null}function Y(e,t,n){K();if(at(e))if(n)setTimeout(function(){Y(e,t)},n);else{var r=lt(),s=p,u=ut(t),a=s>=0?u-s:0;rt(lt(),t),it(e,t),ft(e);for(var f=0,l=P.length;f<l;f++)P[f](r,e,t,a);Z(t),g.setRegisters(t,e),g.getClip().setRegisters(t,e);var c=ct(o.toEventType(e),t);i.extend(c,t),st(v)&&(et(c),O=v,m++)}}function Z(e){var t=e.ns_st_mp;t!=null&&(M=t,delete e.ns_st_mp),t=e.ns_st_mv,t!=null&&(_=t,delete e.ns_st_mv),t=e.ns_st_ec,t!=null&&(m=Number(t),delete e.ns_st_ec)}function et(t,n){n===undefined&&(n=!0),n&&nt(t);var i=f.getPixelURL();if(y){if(!tt()){var s=H.am,o=H.et,u=s.newApplicationMeasurement(y,o.HIDDEN,t,i);y.getQueue().offer(u)}}else i&&e(r(i,t))}function tt(){var e=y.getAppContext(),t=y.getSalt(),n=y.getPixelURL();return e==null||t==null||t.length==0||n==null||n.length==0}function nt(e){D=ct(null),i.extend(D,e)}function rt(e,t){var n=ut(t);e==o.PLAYING?(g.addPlaybackTime(n),I(),X()):e==o.BUFFERING&&(g.addBufferingTime(n),J())}function it(e,t){var n=ut(t),r=ot(t);d=r,e==o.PLAYING?(F(),z(),g.getClip().setPlaybackTimestamp(n),st(e)&&(g.getClip().incrementStarts(),g.getStarts()<1&&g.setStarts(1))):e==o.PAUSED?st(e)&&g.incrementPauses():e==o.BUFFERING?(g.getClip().setBufferingTimestamp(n),E&&V()):e==o.IDLE&&q()}function st(e){return e!=o.PAUSED||O!=o.IDLE&&O!=null?e!=o.BUFFERING&&O!=e:!1}function ot(e){var t=-1;return e.hasOwnProperty("ns_st_po")&&(t=Number(e.ns_st_po)),t}function ut(e){var t=-1;return e.hasOwnProperty("ns_ts")&&(t=Number(e.ns_ts)),t}function at(e){return e!=null&&lt()!=e}function ft(e){v=e,p=+(new Date)}function lt(){return v}function ct(){var e,t;arguments.length==1?(e=o.toEventType(v),t=arguments[0]):(e=arguments[0],t=arguments[1]);var n={};return t!=null&&i.extend(n,t),n.hasOwnProperty("ns_ts")||(n.ns_ts=String(+(new Date))),e!=null&&!n.hasOwnProperty("ns_st_ev")&&(n.ns_st_ev=s.toString(e)),f.isPersistentLabelsShared()&&y&&i.extend(n,y.getLabels()),i.extend(n,f.getLabels()),ht(e,n),g.createLabels(e,n),g.getClip().createLabels(e,n),n.hasOwnProperty("ns_st_mp")||(n.ns_st_mp=M),n.hasOwnProperty("ns_st_mv")||(n.ns_st_mv=_),n.hasOwnProperty("ns_st_ub")||(n.ns_st_ub="0"),n.hasOwnProperty("ns_st_br")||(n.ns_st_br="0"),n.hasOwnProperty("ns_st_pn")||(n.ns_st_pn="1"),n.hasOwnProperty("ns_st_tp")||(n.ns_st_tp="1"),n.hasOwnProperty("ns_st_it")||(n.ns_st_it="c"),n.ns_st_sv=a.STREAMSENSE_VERSION,n.ns_type="hidden",n}function ht(e,t){var n=t||{};n.ns_st_ec=String(m);if(!n.hasOwnProperty("ns_st_po")){var r=d,i=ut(n);if(e==s.PLAY||e==s.KEEP_ALIVE||e==s.HEART_BEAT||e==null&&v==o.PLAYING)r+=i-g.getClip().getPlaybackTimestamp();n.ns_st_po=String(r)}return e==s.HEART_BEAT&&(n.ns_st_hc=String(k)),n}function pt(e){var t=ut(e);t<0&&(e.ns_ts=String(+(new Date)))}function dt(e,t,n){t=t||{},t.ns_st_ad=1,e>=s.AD_PLAY&&e<=s.AD_CLICK&&f.notify(e,t,n)}function vt(e,t){f.notify(s.CUSTOM,e,t)}var f=this,c,h=null,p=0,d=0,v,m=0,g=null,y,b=!0,w,E=!0,S,x,T,N=a.DEFAULT_HEARTBEAT_INTERVAL,C=0,k=0,L=0,A=!1,O,M,_,D,P,H={};i.extend(this,{reset:function(e){g.reset(e),g.setPlaylistCounter(0),g.setPlaylistId(+(new Date)+"_1"),g.getClip().reset(e),e!=null&&!e.isEmpty()?i.filterMap(c,e):c={},m=1,k=0,I(),q(),X(),J(),K(),v=o.IDLE,p=-1,O=null,M=a.DEFAULT_PLAYERNAME,_=a.STREAMSENSE_VERSION,D=null},notify:function(){var e,t,n,r;t=arguments[0],arguments.length==3?(n=arguments[1],r=arguments[2]):(n={},r=arguments[1]),e=G(t);var o=i.extend({},n);pt(o),o.hasOwnProperty("ns_st_po")||(o.ns_st_po=String(r));if(t==s.PLAY||t==s.PAUSE||t==s.BUFFER||t==s.END)f.isPausePlaySwitchDelayEnabled()&&at(e)&&Q(v)&&Q(e)?Y(e,o,a.PAUSE_PLAY_SWITCH_DELAY):Y(e,o);else{var u=ct(t,o);i.extend(u,o),et(u,!1),m++}},getLabels:function(){return c},setLabels:function(e){e!=null&&(c==null?c=e:i.extend(c,e))},getLabel:function(e){return c[e]},setLabel:function(e,t){t==null?delete c[e]:c[e]=t},setPixelURL:function(e){if(e==null||e.length==0)return null;var t=e.indexOf("?");if(t>=0){if(t<e.length-1){var n=e.substring(t+1).split("&");for(var r=0,i=n.length;r<i;r++){var s=n[r],o=s.split("=");o.length==2?f.setLabel(o[0],o[1]):o.length==1&&f.setLabel(a.PAGE_NAME_LABEL,o[0])}e=e.substring(0,t+1)}}else e+="?";return h=e,h},getPixelURL:function(){return h?h:typeof ns_p!="undefined"&&typeof ns_p.src=="string"?h=ns_p.src.replace(/&amp;/,"&").replace(/&ns__t=\d+/,""):typeof ns_pixelUrl=="string"?h.replace(/&amp;/,"&").replace(/&ns__t=\d+/,""):null},isPersistentLabelsShared:function(){return b},setPersistentLabelsShared:function(e){b=e},isPauseOnBufferingEnabled:function(){return E},setPauseOnBufferingEnabled:function(e){E=e},isPausePlaySwitchDelayEnabled:function(){return A},setPausePlaySwitchDelayEnabled:function(e){A=e},setClip:function(e,t){v==o.IDLE&&(g.getClip().reset(),g.getClip().setLabels(e,null),t&&g.incrementStarts())},setPlaylist:function(e){v==o.IDLE&&(g.incrementPlaylistCounter(),g.reset(),g.getClip().reset(),g.setLabels(e,null))},importState:function(e){reset();var t=i.extend({},e);g.setRegisters(t,null),g.getClip().setRegisters(t,null),Z(t),m++},exportState:function(){return D},getVersion:function(){return a.STREAMSENSE_VERSION},addListener:function(e){P.push(e)},removeListener:function(e){P.splice(P.indexOf(e),1)},getClip:function(){return g.getClip()},getPlaylist:function(){return g}}),i.extend(this,{adNotify:dt,customNotify:vt,viewNotify:function(e,t){e=e||f.getPixelURL(),e&&n(e,t)}}),ns_.comScore&&(H=ns_.comScore.exports,y=H.c()),c={},m=1,v=o.IDLE,g=new l,w=null,E=!0,T=null,k=0,q(),S=null,x=null,A=!1,O=null,d=0,P=[],f.reset(),t&&f.setLabels(t),u&&f.setPixelURL(u)};return function(e){function s(e,n){return t[r]||u(e,n)}function o(){r=-1;for(var e=0;e<=n;e++)if(t.hasOwnProperty(e)){r=e;break}return ns_.StreamSense.activeIndex=r,r}function u(e,r){return e=e||null,r=r||null,e&&typeof e=="object"&&(r=e,e=null),t[++n]=new ns_.StreamSense(r,e),o(),t[n]}function a(){var e=!1,n=r;if(typeof arguments[0]=="number"&&isFinite(arguments[0]))n=arguments[0];else if(arguments[0]instanceof ns_.StreamSense)for(var i in t)if(t[i]===arguments[0]){n=i;break}return t.hasOwnProperty(n)&&(e=t[n],delete t[n],e.reset(),o()),e}function f(e){return e=e||{},s().setPlaylist(e),s().getPlaylist()}function l(e,t,n){return e=e||{},typeof t=="number"&&(e.ns_st_cn=t),s().setClip(e,n),s().getClip()}function c(e,t,n){return typeof e=="undefined"?!1:(n=n||null,t=t||{},s().notify(e,t,n))}function h(e){typeof e!="undefined"&&s().setLabels(e)}function p(){return s().getLabels()}function d(e){typeof e!="undefined"&&s().getPlaylist().setLabels(e)}function v(){return s().getPlaylist().getLabels()}function m(e){typeof e!="undefined"&&s().getClip().setLabels(e)}function g(){return s().getClip().getLabels()}function y(e){return s().reset(e||{})}function b(e){return s().getPlaylist().reset(e||{})}function w(e){return s().getClip().reset(e||{})}function E(e){return e=e||{},s().viewNotify(null,e)}function S(e,t){return arguments.length>2&&(e=arguments[1],t=arguments[2]),e=e||{},typeof t=="number"&&(e.ns_st_po=t),s().customNotify(e,t)}function x(){return s().exportState()}function T(e){s().importState(e)}var t={},n=-1,r=-1;i.extend(e,{activeIndex:r,newInstance:u,"new":u,destroyInstance:a,destroy:a,newPlaylist:f,newClip:l,notify:c,setLabels:h,getLabels:p,setPlaylistLabels:d,getPlaylistLabels:v,setClipLabels:m,getClipLabels:g,resetInstance:y,resetPlaylist:b,resetClip:w,viewEvent:E,customEvent:S,exportState:x,importState:T})}(t),t}();return c.AdEvents=u,c.PlayerEvents=s,c}();
/*! jQuery ellipsis - v1.1.1 - 2014-02-23
* https://github.com/STAR-ZERO/jquery-ellipsis
* Copyright (c) 2014 Kenji Abe; Licensed MIT */
!function(a){a.fn.ellipsis=function(b){var c={row:1,onlyFullWords:!1,"char":"...",callback:function(){},position:"tail"};return b=a.extend(c,b),this.each(function(){var c=a(this),d=c.text(),e=d,f=e.length,g=c.height();c.text("a");var h=parseFloat(c.css("lineHeight"),10),i=c.height(),j=h>i?h-i:0,k=j*(b.row-1)+i*b.row;if(k>=g)return c.text(d),void b.callback.call(this);var l=1,m=0,n=d.length;if("tail"===b.position){for(;n>l;)m=Math.ceil((l+n)/2),c.text(d.slice(0,m)+b["char"]),c.height()<=k?l=m:n=m-1;d=d.slice(0,l),b.onlyFullWords&&(d=d.replace(/[\u00AD\w\uac00-\ud7af]+$/,"")),d+=b["char"]}else if("middle"===b.position){for(var o=0;n>l;)m=Math.ceil((l+n)/2),o=Math.max(f-m,0),c.text(e.slice(0,Math.floor((f-o)/2))+b["char"]+e.slice(Math.floor((f+o)/2),f)),c.height()<=k?l=m:n=m-1;o=Math.max(f-l,0);var p=e.slice(0,Math.floor((f-o)/2)),q=e.slice(Math.floor((f+o)/2),f);b.onlyFullWords&&(p=p.replace(/[\u00AD\w\uac00-\ud7af]+$/,"")),d=p+b["char"]+q}c.text(d),b.callback.call(this)}),this}}(jQuery);
/**
 * BC JAVASCRIPT MAPI WRAPPER 1.0 (12 OCTOBER 2010)
 * A Brightcove JavaScript Media API Wrapper
 * (Formerly known as Kudos)
 *
 * REFERENCES:
 *       Official Website: http://opensource.brightcove.com
 *       Code Repository: http://code.google.com/p/brightcove/
 *
 * AUTHORS:
 *       Brian Franklin, Professional Services Engineer, Brightcove
 *       Matthew Congrove, Professional Services Engineer, Brightcove
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following
 * conditions:
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
 * CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR
 * THE USE OR OTHER DEALINGS IN THE SOFTWARE. YOU AGREE TO RETAIN IN THE SOFTWARE AND ANY
 * MODIFICATIONS TO THE SOFTWARE THE REFERENCE URL INFORMATION, AUTHOR ATTRIBUTION AND
 * CONTRIBUTOR ATTRIBUTION PROVIDED HEREIN.
 */

var BCMAPI = new function () {
        this.token = "";
        this.callback = "BCMAPI.flush";
        this.url = "http://api.brightcove.com/services/library";
        this.calls = [
                { "s":"find_all_videos", "o":false },
                { "s":"find_playlists_for_player_id", "o":"player_id" },
                { "s":"find_all_playlists", "o":false },
                { "s":"find_playlist_by_id", "o":"playlist_id" },
                { "s":"find_related_videos", "o":"video_id" },
                { "s":"find_video_by_id", "o":"video_id" },
                { "s":"find_videos_by_ids", "o":"video_ids" },
                { "s":"find_videos_by_tags", "o":"or_tags" },
                { "s":"find_video_by_reference_id", "o":"reference_id" },
                { "s":"find_video_by_reference_ids", "o":"reference_ids" },
                { "s":"find_videos_by_user_id", "o":"user_id" },
                { "s":"find_videos_by_campaign_id", "o":"campaign_id" },
                { "s":"find_videos_by_text", "o":"text" },
                { "s":"find_modified_videos", "o":"from_date" },
                { "s":"find_playlists_by_ids", "o":"playlist_ids" },
                { "s":"find_playlist_by_reference_id", "o":"reference_id" },
                { "s":"find_playlists_by_reference_ids", "o":"reference_ids" },
                { "s":"search_videos", "o":"all" }
        ];

        /**
         * Create a script element and include the API result
         * @since 0.1
         * @param string [s] A query string with no leading question mark
         * @return true
         */
        this.inject = function (s) {
                var e = document.createElement("script");
                e.setAttribute("src", this.url + "?" + s);
                e.setAttribute("type", "text/javascript");
                document.getElementsByTagName("head")[0].appendChild(e);
                return true;
        };

        /**
         * Construct the API call
         * @since 1.0
         * @param string [s] A Brightcove API method
         * @param mixed [v] Either an object containing the API parameters to apply to the given command, or a single value which is applied to the command's default selector
         * @return true
         */
        this.find = function (s, v) {
                v = v || null;
                var o = null;
                var q = "";
                s = s.toLowerCase().replace(/(find_)|(_)|(get_)/g, "");

                for (var z in this.calls) {
                        if (typeof this.calls[z].s == "undefined") { continue; }
                        if (s == this.calls[z].s.toLowerCase().replace(/(find_)|(_)|(get_)/g, "")) {
                                s = this.calls[z].s;
                                if (typeof this.calls[z].o != "undefined") {
                                        o = this.calls[z].o;
                                }
                                break;
                        }
                }

                q = "command=" + s;

                if ((typeof v == "object") && v) {
                        for (var x in v) {
                                if (x == "selector") {
                                        q += "&" + o + "=" + encodeURIComponent(v[x]);
                                } else {
                                        q += "&" + x + "=" + encodeURIComponent(v[x]);
                                }
                        }

                        if (typeof v.callback != "string") {

                                q += "&callback=" + this.callback;
                        }

                        if (typeof v.token != "string") {
                                q += "&token=" + this.token;
                        }
                } else if (v) {
                        q += "&" + o + "=" + encodeURIComponent(v) + "&callback=" + this.callback;
                        q += "&token=" + this.token;
                } else {
                        q += "&token=" + this.token;
                        q += "&callback=" + this.callback;
                }

                this.inject(q);

                return true;
        };

        /**
         * Dummy method for search calls
         * @since 1.0
         * @param string [s] A Brightcove API method
         * @param mixed [v] Either an object containing the API parameters to apply to the given command, or a single value which is applied to the command's default selector
         * @return true
         */
        this.search = function (v) {
                return this.find("search_videos", v);
        };

        /**
         * Default callback which does nothing
         * @since 0.1
         * @return true
         */
        this.flush = function (s) {
                return true;
        };
}();
/* global */

/*
deps: $, jq-ext
*/

$(document).on('star_component_init', function() {

  // Initialize Brightcove embeds and any Facebook
  if ('brightcove' in window) brightcove.createExperiences();
  if (typeof FB=='object' && 'XFBML' in FB) FB.XFBML.parse();

  // All off-site links should open in a new window
  $('a:not([target="_blank"])').filter(function() {
	return this.hostname && this.hostname !== location.hostname;
  }).attr('target', '_blank');

});

$(document).ready(function() {

  // Prevent empty searches from search forms
  $('#global-header form.search, form.search-result-form, form.search-input').on('submit', function(e) {
	var search = $.trim($(this).find('input[name="q"]').val());
	if (search.length == 0) {
	  e.preventDefault();
	}
  });

  // Track tweets submitted via the popup window in Omniture
  if (typeof window.twttr != 'undefined') {
	window.twttr.ready(function(twttr) {
	  twttr.events.bind('tweet', function(intent_event) {
		if (intent_event)
		  if (intent_event.target && intent_event.target.nodeName == 'IFRAME')
						twitterButton();
	  });
	});
  }

  // Track pdf downloads from article pages in omniture - Unused in new tracking - October 2012
  /* $(document).on('click','.article-related-files a',function(e) {
  	var pageTitle = document.title;
  	var download = $(this);
  	var linkText = pageTitle+': '+download[0].text;
      trackDownload(linkText);
  }); */
  
  // Track related videos on article page in omniture - Unused in new tracking - October 2014
  /*	$(document).on('click','.article-related-video-gallery ul.video-list li',function(e) {
  		var videoTitle = $(this).data('video-title');
  		trackRelatedVideo(videoTitle);
  	}) */

	// Track shatner box titles clicks - Unused in new tracking - October 2014

  /*	$('body.homepage .shatner-box[data-trackable] a').on('click', function() {
  		var shat = $(this).closest('.shatner-box');
  		var source = shat.attr('data-comp-path');
  		var position = Math.round((shat.offset().top/$(document).height())*100)+'%';
  		var text = shat.find('.star-box-heading a').html().trim();
  		var url = ($(this).attr('href')).replace(/http(s)?:\/\//gi, '');

		if (url.indexOf(localprefix) != -1)
			url = (url).replace(/.*\/(.*)$/gi, '$1').replace('.html', '');
		var result = text+'_'+position+'_'+source+'_'+url;
		trackShatnerBoxClick(result);
	}); */


	//track footer links clicks in OMNITURE - Unused in new tracking - October 2014
  /*  $(document).on('click', 'div.global-footer a', function() {
		var link = $(this).closest('.list');
		var enableTrackClick = link.attr('data-enable-track-click');
		if (enableTrackClick != null && enableTrackClick.indexOf('true') != -1) {
			var text = "text";
			var source = link.attr('data-source');
			var position = link.find('a').index($(this)) + 1;
			var url = link.attr('data-url');
			if (url.indexOf(localprefix) != -1)
				url = (url).replace(/.*\/(.*)$/gi, '$1').replace('.html', '');
			trackClickOmniture(source, position, url);
		}
	}); */
});

// initialize misc. features based on actual content
$(function(){
	// use ellipsis JQ plugin to shorten text in selected containers
	$('.two-lines').ellipsis({row:2});

	// Embedded ScribbleLive post
	if ($('.scrbbl-embed').length){
		(function(d, s, id) {
			var js, ijs=d.getElementsByTagName(s)[0];
			if (d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="//embed.scribblelive.com/widgets/embed.js";ijs.parentNode.insertBefore(js, ijs);}(document, 'script', 'scrbbl-js'));
	}
});

var _star_qs_params=$.getQueryMap;// still in use somewhere

/* /global */
var ChartBeatStar = {
	timer: 500,
	checkLimit: 60,
	checks: 0,

	// This function runs periodically to determine the best time to load Chartbeat
	init: function() { 

		// Google A/B testing
		// Google Analytics Content Experiment code - POC for articles only
		// Google adds query string params when redirecting different A/B modes, creating distinct URLs in Chartbeat for one article
		// Force canonical if "utm_referrer" is in the query strong and the A/B script is present
		if ($('#google-multivar').length && $.getQueryParam('utm_referrer')) {
			_sf_async_config.useCanonical = true;
		}

    // How many images are set to lazy-load and are NOT below the fold? (see lazyload.js)
    // This is our best representation of a "complete" page load for the end user
    // When zero, this means any images the user can currently see have been loaded
    var total = $("img[data-original]:not([data-below-fold])").length;

    // Call again if images remain or we haven't hit the 30 second limit, otherwise load Chartbeat
    if (total > 0 && ChartBeatStar.checks < ChartBeatStar.checkLimit)
      setTimeout(ChartBeatStar.init, ChartBeatStar.timer);
    else
       ChartBeatStar.load();

    ChartBeatStar.checks++;
	},

	// Load Chartbeat Javascript (and set _sf_endpt)
	load: function() {		
		window._sf_endpt = (new Date()).getTime();
		var e = document.createElement('script');
		e.setAttribute('language', 'javascript');
		e.setAttribute('type', 'text/javascript');
		e.setAttribute('src',
		(("https:" == document.location.protocol) ? "https://a248.e.akamai.net/chartbeat.download.akamai.com/102508/" : "http://static.chartbeat.com/") +
		"js/chartbeat.js");
		document.body.appendChild(e);
	}

};

//check if images loaded
$(window).load(ChartBeatStar.init);
$(document).ready(function() {

	// Polyfill for browsers that don't support HTML5 placeholder attribute
	$('#global-header input.search-input-text').placeholder();

});
$(document).ready(function () {

	var toggleSection = function(s) {
		s.children('ul').slideToggle('fast', function() { s.toggleClass('collapsed').toggleClass('expanded'); });
	};

	$('#main-nav > ul > li').each(function() { if ($(this).children('ul').length == 0) $(this).addClass('empty'); });	

	$('#main-nav > ul > li:not(.current,.empty) > span').on('click', function(e) {
		if (!$(e.target).is('a')) {
			var _this = $(this).parent();
			var _open = $('#main-nav > ul > li.expanded:not(.current,.empty)').children('ul');

			if (_this.hasClass('expanded'))
				toggleSection(_this);
			else
				if (_open.length) { 
					_open.slideToggle('fast', function() {
						_open.parent().toggleClass('collapsed').toggleClass('expanded');
						toggleSection(_this);
					});
				} else
					toggleSection(_this);

		}
	});

	$('#main-nav > ul > li > ul > li.more-links > span').on('click', function(e) {
		e.preventDefault();
		$(this).text($(this).text().toLowerCase() == 'more' ? 'Less' : 'More').parent().toggleClass('collapsed').toggleClass('expanded');
	});

});
/* homepage_top */

$(document).on('star_component_init', function() {
	
	$('div.more-stories-bar p.switch, div.more-stories-bar span.close-button').on('click', function() {
		var timing = 200;
		var hptop = $(this).closest('div.homepage-top');

		if (typeof hptop.attr('data-switching') == 'undefined') {
			hptop.attr('data-switching', 'true');
			var title = hptop.find('div.more-stories-bar p.switch').html();

			// Fade out the "real" stories and fade in the extra ones
			if (!hptop.hasClass('switched')) {
				hptop.addClass('switched');
				hptop.find('.more-headlines').fadeOut(timing);
				hptop.find('.headlines:not(.more-stories-panel)').fadeOut(timing, function() {
					// $('.homepage-main').addClass('no-bar');
					hptop.find('.headlines.more-stories-panel').fadeIn(timing);
					hptop.removeAttr('data-switching');
				});
				trackHomePageTopFlip(title, "open");
			} else {

				// Fade out the extra stories and fade in the real ones
				hptop.removeClass('switched');
				hptop.find('.headlines.more-stories-panel').fadeOut(timing, function() {
					// $('.homepage-main').removeClass('no-bar');
					hptop.find('.more-headlines').fadeIn(timing);
					hptop.find('.headlines:not(.more-stories-panel)').fadeIn(timing, function() {
						hptop.removeAttr('data-switching');
					});
				});
				trackHomePageTopFlip(title, "close");
			}
		}
	});
});


// Generated Brightcove player in top story main art, if image placeholder exists ----------

$(function(){
	var $el = $('.placeholder.top-story-video');
	
	if ($el.length){
	
		window.TopStoryBrightcove = {
		
			onLoadHandler: function(expId){
				//if ('onTemplateLoaded' in window && typeof onTemplateLoaded=='function') window.onTemplateLoaded(expId);
				// bind brightcove media event handlers
				//var a='COMPLETE, STOP, ERROR'.split(/\W+/),
				var a=['COMPLETE', 'ERROR'],
				bc = brightcove.getExperience(expId),
				vp = bc.getModule(APIModules.VIDEO_PLAYER),
				types = [];
				for (var i=0, n=a.length; i<n; i++) {
					vp.addEventListener(BCMediaEvent[a[i]], TopStoryBrightcove.handleVideoStop);
					types.push(BCMediaEvent[a[i]]);
				}
				/*
				vp.addEventListener(BCAdvertisingEvent['AD_PAUSE'], TopStoryBrightcove.handleVideoStop);
				types.push(BCAdvertisingEvent['AD_PAUSE']);
				*/
				$.dbg("@@@ Binding "+types.join(', ')+" handlers in "+expId);
			},
			
			handleVideoStop: function(evt){
				$('.placeholder.top-story-video .video-still')
				.show()
				.siblings()
				.remove()
				;
			}
		
		};

		$el.each(function(){
			var $it = $(this);

			$it.find('.play-overlay').click(function(){
				$it.attachBrightcove({
					id: $it.attr('data-object-id')||"",
					width: $it.width(),
					height: $it.height(),
					playerID: $it.attr('data-player-id'),
					playerKey: $it.attr('data-player-key'),
					videoID: $it.attr('data-video-id'),
					autoStart: 'true',
					templateLoadHandler: 'TopStoryBrightcove.onLoadHandler'
				})
				.find('.video-still').hide();

			});
		});

	}
});

/* homepage_top */
/*
 * The following function makes any pair of consecutive Shatner Box components appear side-by-side. This will only happen for a
 * Shatner Box if: (a) it appears in a container we've defined as allowing paired Boxes; (b) it is defined as a single-column Box;
 * and (c) it has an immediate sibling which is also a Shatner Box (that hasn't already been paired).
 *
 * Doing this with just CSS is not possible due to the nature of CQ's generated markup (e.g., wrapping <div>s around components in
 * a parsys) and how we enabled the Shatner Box component for re-use in several styles/locations. Using jQuery allows the Shatner
 * Box to remain flexible, without requiring additional configuration from editors.
 */

// Flag to debounce the checking and pairing of Shatner Boxes
window.checking_shatners = false;

// Initialize Shatner Box components on document load
$(document).on('star_component_init', function() {

	// Selectors for containers where paired Shatner Box components are enabled
	var containers = [
		'div.homepage-more > div.left-col',
		'div.section-body > div.features'
	];

	// These are the styles of Shatner Box components which can be paired (e.g., 1 column)
	var pairables = [
		'.shatner-box.onecol.pairable'
	];

	if (!checking_shatners) {
		checking_shatners = true;

		// Reset everything first
		$('div.shatner-shim').remove();
		$('div.section[data-shatner-done]').removeAttr('data-shatner-done').removeAttr('style');

		$(containers.join(',')).each(function() {
			var _container = $(this);
			_container.find('div.section:has(' + pairables.join(',') + ')').each(function() {

				// Only proceed if the current Shatner Box hasn't been looked at yet
				if (!$(this).attr('data-shatner-done')) {

					// We need the next immediate sibling for pairing, but skip over CQ placeholders inserted during Edit mode
					_sibling = $(this).next();
					if (typeof currentState == 'undefined')
						while (!_sibling.is('div.section'))
							_sibling = _sibling.next();
					
					// If the current Shatner Box's next sibling is also a valid Shatner Box, make them float side-by-side
					// Otherwise, only the Shatner Box width is set and it's marked as done
					if (_sibling.has(pairables.join(',')).length) {

						// Margin adjustment (a floated element's margins don't collapse as expected)
						// If this pair is the very first thing in its container it keeps its TOP margin (not counting CQ placeholders)
						var margin = parseInt($(this).css('margin-top').replace('px', ''), 10);
						var top = _container.children('.parsys').children('div.section').index($(this)) != 0 ? 0 : margin + 'px';

						// Put the 1st Shatner Box on the left
						// Put the 2nd Shatner Box on the right
						// Make both of them about half the container width & adjust margins
						$(this).css({ 'float': 'left' });
						_sibling.css({ 'float': 'right' });
						$(this).add(_sibling).attr('data-shatner-done', 'true').css({
							'clear': 'none',
							'width': (Math.floor(_container.width() / 2) - 4) + 'px',
							'margin-bottom': 0,
							'margin-top': top
						});

						// Insert a cleared and margin-adjusted shim after each pair to prevent floating issues
						_sibling.after('<div class="shatner-shim" style="clear:both;height:1px;overflow:hidden;font-size:0;margin-bottom:' + (margin - 1) + 'px;" />');

					} else {
						$(this).attr('data-shatner-done', 'true').css({ 'width': (Math.floor(_container.width() / 2) - 4) + 'px' });
					}

				}

			});
		});

		checking_shatners = false;
	}

});
"use strict";var calenderController=function e(){function B(e){while(e.firstChild){e.removeChild(e.firstChild)}}function j(e,t){if((new RegExp("(^|["+P+"])"+t+"(["+P+"]|$)")).test(e.className)){return}e.className+=(e.className?" ":"")+t}function F(e,t){e.className=!t?"":e.className.replace(new RegExp("(^|["+P+"])"+t+"(["+P+"]|$)")," ").replace(new RegExp("/^["+P+"]["+P+"]*/"),"").replace(new RegExp("/["+P+"]["+P+"]*$/"),"")}function I(){var e=document.getElementsByTagName("html")[0].getAttribute("lang")||document.getElementsByTagName("html")[0].getAttribute("xml:lang");e="en";return e.search(/^([a-z]{2,3})-([a-z]{2})$/)!=-1?[e.match(/^([a-z]{2,3})-([a-z]{2})$/)[1],e]:[e]}function R(e){if(!(typeof e==="object")){return}var n,s={debug:function(e){t=!!e;return true},lang:function(e){if(typeof e==="string"&&e.search(/^[a-z]{2,3}(-([a-z]{2}))?$/i)!=-1){i=[e.toLowerCase()];b=true;v=false}return true},nodrag:function(e){g=!!e;return true},buttontabindex:function(e){p=!!e;return true},derivelocale:function(e){v=!!!e;return false},mousewheel:function(e){d=!!e;return true},cellformat:function(e){if(typeof e==="string"){z(e)}return true},titleformat:function(e){if(typeof e==="string"){x=e}return true},statusformat:function(e){if(typeof e==="string"){T=e}return true},describedby:function(e){if(typeof e==="string"){r=e}return true},finalopacity:function(e){if(typeof e==="number"&&+e>20&&+e<=100){l=parseInt(e,10)}return true},bespoketitles:function(e){if(typeof e==="object"){a={};for(var t in e){if(e.hasOwnProperty(t)&&String(t).match(D)!=-1){a[t]=String(e[t])}}}return true},dateparsefallback:function(e){E=!!e;return true},languagefilelocation:function(e){y=e;return true},_default:function(){if(t){throw"Unknown key located within JSON data: "+n}return true}};for(n in e){if(!e.hasOwnProperty(n)){continue}(s.hasOwnProperty(String(n).toLowerCase())&&s[String(n).toLowerCase()]||s._default)(e[n])}}function U(e){if(!(typeof e==="string")||e==""){return{}}try{if(typeof JSON==="object"&&JSON.parse){return window.JSON.parse(e)}else if(/debug|lang|nodrag|buttontabindex|derivelocale|mousewheel|cellformat|titleformat|statusformat|describedby|finalopacity|bespoketitles|dateparsefallback/.test(e.toLowerCase())){var n=Function(["var document,top,self,window,parent,Number,Date,Object,Function,","Array,String,Math,RegExp,Image,ActiveXObject;","return (",e.replace(/<\!--.+-->/gim,"").replace(/\bfunction\b/g,"function-"),");"].join(""));return n()}}catch(r){}if(t){throw"Could not parse the JSON object"}return{err:1}}function z(e){if(n){N=["%j"];S="%j %F %Y";return}if(e.match(/%([d|j])/)==-1){return}N=q(e,/%([d|j])/);S=e}function W(e,t){t=Math.min(4,t||2);return"0000".substr(0,t-Math.min(String(e).length,t))+e}function X(e,t,n){if(e.addEventListener){e.addEventListener(t,n,true)}else if(e.attachEvent){e.attachEvent("on"+t,n)}}function V(e,t,n){try{if(e.removeEventListener){e.removeEventListener(t,n,true)}else if(e.detachEvent){e.detachEvent("on"+t,n)}}catch(r){}}function $(e){e=e||document.parentWindow.event;if(e.stopPropagation){e.stopPropagation();e.preventDefault()}if(H){e.cancelBubble=true;e.returnValue=false}return false}function J(e,t){if(e&&e.tagName){e.setAttribute("role",t)}}function K(e,t,n){if(e&&e.tagName){e.setAttribute("aria-"+t,n)}}function Q(e,t){e.setAttribute(H?"tabIndex":"tabindex",t);e.tabIndex=t}function G(e){return e instanceof Date&&!isNaN(e)?e.getFullYear()+W(e.getMonth()+1)+""+W(e.getDate()):e}function Y(e){this.dateSet=null;this.timerSet=false;this.visible=false;this.fadeTimer=null;this.timer=null;this.yearInc=0;this.monthInc=0;this.dayInc=0;this.mx=0;this.my=0;this.x=0;this.y=0;this.created=false;this.disabled=false;this.opacity=0;this.opacityTo=100;this.finalOpacity=100;this.inUpdate=false;this.kbEventsAdded=false;this.fullCreate=false;this.selectedTD=null;this.cursorTD=null;this.cursorDate=e.cursorDate?e.cursorDate:"",this.date=e.cursorDate?new Date(+e.cursorDate.substr(0,4),+e.cursorDate.substr(4,2)-1,+e.cursorDate.substr(6,2),5,0,0):new Date;this.defaults={};this.dynDisabledDates={};this.dateList=[];this.bespokeClass=e.bespokeClass;this.firstDayOfWeek=m.firstDayOfWeek;this.interval=new Date;this.clickActivated=false;this.showCursor=false;this.noFocus=true;this.kbEvent=false;this.delayedUpdate=false;this.bespokeTitles={};this.bespokeTabIndex=e.bespokeTabIndex;for(var r in e){if(!e.hasOwnProperty(r)||String(r).search(/^(callbacks|formElements|enabledDates|disabledDates)$/)!=-1){continue}this[r]=e[r]}if(H){this.iePopUp=null}for(var i=0,o;o=["callbacks","formElements"][i];i++){this[o]={};if(o in e){for(r in e[o]){if(e[o].hasOwnProperty(r)){this[o][r]=e[o][r]}}}}this.date.setHours(5);this.changeHandler=function(){if(u.disabled){return}u.setDateFromInput();u.callback("dateset",u.createCbArgObj())};this.createCbArgObj=function(){return this.dateSet?{id:this.id,date:this.dateSet,dd:W(this.date.getDate()),mm:W(this.date.getMonth()+1),yyyy:this.date.getFullYear()}:{id:this.id,date:null,dd:null,mm:null,yyyy:null}};this.getScrollOffsets=function(){if(typeof window.pageYOffset=="number"){return[window.pageXOffset,window.pageYOffset]}else if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){return[document.body.scrollLeft,document.body.scrollTop]}else if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){return[document.documentElement.scrollLeft,document.documentElement.scrollTop]}return[0,0]};this.getDateExceptions=function(e,t){t=W(t);var n={},r=u.firstDateShown,i=u.lastDateShown,s=u.dateList.length,o,a,f,l,c,h,p,d,v,m,g,y,b;if(!i||!r){r=u.firstDateShown=e+W(t)+"01";i=u.lastDateShown=e+W(t)+W(lt(t,e))}c=Number(r.substr(0,6));h=Number(i.substr(0,6));a=String(c);while(+a<=h){f=a.substr(0,4);l=a.substr(4,2);for(o=0;o<s;o++){v=String(u.dateList[o].rLow).replace(/^(\*\*\*\*)/,f).replace(/^(\d\d\d\d)(\*\*)/,"$1"+l);m=String(u.dateList[o].rHigh).replace(/^(\*\*\*\*)/,f).replace(/^(\d\d\d\d)(\*\*)/,"$1"+l);if(m==1){if(+v>=+u.firstDateShown&&+v<=+u.lastDateShown){n[v]=u.dateList[o].type}continue}if(v<=m&&a>=v.substr(0,6)&&a<=m.substr(0,6)){g=Math.max(v,Math.max(String(a)+"01",this.firstDateShown));y=Math.min(m,Math.min(String(a)+"31",this.lastDateShown));for(p=g;p<=y;p++){n[p]=u.dateList[o].type}}}a=new Date(f,+l,2);a=a.getFullYear()+""+W(a.getMonth()+1)}return n};this.reposition=function(){if(!u.created||u.staticPos){return}u.div.style.visibility="hidden";u.div.style.left=u.div.style.top="0px";u.div.style.display="block";var e=u.div.offsetHeight,t=u.div.offsetWidth,n=document.getElementById("fd-but-"+u.id),r=u.truePosition(n),i=document.compatMode&&document.compatMode!="BackCompat"?document.documentElement:document.body,s=u.getScrollOffsets(),o=s[1],a=s[0],f=parseInt(r[1]-2)-parseInt(o),l=parseInt(i.clientHeight+o)-parseInt(r[1]+n.offsetHeight+2);u.div.style.visibility="visible";u.div.style.left=Number(parseInt(i.clientWidth+a)<parseInt(t+r[0])?Math.abs(parseInt(i.clientWidth+a-t)):r[0])+"px";u.div.style.top=l>f?Math.abs(parseInt(r[1]+n.offsetHeight+2))+"px":Math.abs(parseInt(r[1]-(e+2)))+"px";if(H===6){u.iePopUp.style.top=u.div.style.top;u.iePopUp.style.left=u.div.style.left;u.iePopUp.style.width=t+"px";u.iePopUp.style.height=e-2+"px"}};this.removeCursorHighlight=function(){var e=document.getElementById(u.id+"-date-picker-hover");if(e){F(e,"date-picker-hover")}};this.addCursorHighlight=function(){var e=document.getElementById(u.id+"-date-picker-hover");if(e){j(e,"date-picker-hover")}};this.removeOldFocus=function(){var e=document.getElementById(u.id+"-date-picker-hover");if(e){try{Q(e,-1);F(e,"date-picker-hover");e.id="";e.onblur=null;e.onfocus=null}catch(t){}}};this.setNewFocus=function(){var e=document.getElementById(u.id+"-date-picker-hover");if(e){try{Q(e,0);if(this.showCursor){j(e,"date-picker-hover")}if(!this.clickActivated){e.onblur=u.onblur;e.onfocus=u.onfocus}if(!n&&!this.clickActivated){u.addAccessibleDate()}if(!this.noFocus&&!this.clickActivated){setTimeout(function(){try{e.focus()}catch(t){}},0)}}catch(t){}}};this.addAccessibleDate=function(){var e=document.getElementById(u.id+"-date-picker-hover");if(e&&!e.getElementsByTagName("span").length){var t=e.className.match(/cd-([\d]{4})([\d]{2})([\d]{2})/),n=e.className.search(A)!=-1,r=document.createElement("span"),i;r.className="fd-screen-reader";B(e);if(n){i=r.cloneNode(false);i.appendChild(document.createTextNode(ut(13)));e.appendChild(i)}for(var s=0,o;o=N[s];s++){if(o=="%j"||o=="%d"){e.appendChild(document.createTextNode(pt(new Date(t[1],+t[2]-1,t[3],5,0,0),o,true)))}else{i=r.cloneNode(false);i.appendChild(document.createTextNode(pt(new Date(t[1],+t[2]-1,t[3],5,0,0),o,true)));e.appendChild(i)}}}};this.setCursorDate=function(e){if(String(e).search(/^([0-9]{8})$/)!=-1){this.date=new Date(+e.substr(0,4),+e.substr(4,2)-1,+e.substr(6,2),5,0,0);this.cursorDate=e;if(this.staticPos){this.updateTable()}}};this.updateTable=function(e){if(!u||u.inUpdate||!u.created){return}u.inUpdate=true;u.removeOldFocus();u.div.dir=m.rtl?"rtl":"ltr";if(u.timerSet&&!u.delayedUpdate){if(u.monthInc){var t=u.date.getDate(),n=new Date(u.date);n.setDate(2);n.setMonth(n.getMonth()+u.monthInc*1);n.setDate(Math.min(t,lt(n.getMonth(),n.getFullYear())));u.date=new Date(n)}else{u.date.setDate(Math.min(u.date.getDate()+u.dayInc,lt(u.date.getMonth()+u.monthInc,u.date.getFullYear()+u.yearInc)));u.date.setMonth(u.date.getMonth()+u.monthInc);u.date.setFullYear(u.date.getFullYear()+u.yearInc)}}u.outOfRange();if(!u.noToday){u.disableTodayButton()}u.showHideButtons(u.date);var r=u.date.getDate(),i=u.date.getMonth(),o=u.date.getFullYear(),a=String(o)+W(i+1)+W(r),f=new Date(o,i,1,5,0,0);f.setHours(5);var l,c,h,p,d,v,g,y,b,w,E,S,T,N,C,k,L=(f.getDay()+6)%7,A=(L-u.firstDayOfWeek+7)%7-1,O=lt(i,o),M=new Date,M=M.getFullYear()+W(M.getMonth()+1)+W(M.getDate()),_=String(f.getFullYear())+W(f.getMonth()+1),y=[4,4,4,4,4,4],D=new Date(o,i-1,1,5,0,0),P=new Date(o,i+1,1,5,0,0),H=lt(D.getMonth(),D.getFullYear()),j=String(P.getFullYear())+W(P.getMonth()+1),F=String(D.getFullYear())+W(D.getMonth()+1),I=(P.getDay()+6)%7,q=(D.getDay()+6)%7,R=document.createElement("span");R.className="fd-screen-reader";u.firstDateShown=!u.constrainSelection&&u.fillGrid&&0-A<1?String(F)+(H+(0-A)):_+"01";u.lastDateShown=!u.constrainSelection&&u.fillGrid?j+W(41-A-O):_+String(O);u.currentYYYYMM=_;S=u.callback("redraw",{id:u.id,dd:W(r),mm:W(i+1),yyyy:o,firstDateDisplayed:u.firstDateShown,lastDateDisplayed:u.lastDateShown})||{};c=u.getDateExceptions(o,i+1);u.checkSelectedDate();N=u.dateSet!=null?u.dateSet.getFullYear()+W(u.dateSet.getMonth()+1)+W(u.dateSet.getDate()):false;if(this.selectedTD!=null){K(this.selectedTD,"selected",false);this.selectedTD=null}for(var U=0;U<42;U++){p=Math.floor(U/7);d=u.tds[U];T=R.cloneNode(false);B(d);if(U>A&&U<=A+O||u.fillGrid){w=_;k=L;l=U-A;h=[];C=true;if(l<1){l=H+l;w=F;k=q;C=!u.constrainSelection;h.push("month-out")}else if(l>O){l-=O;w=j;k=I;C=!u.constrainSelection;h.push("month-out")}k=(k+l+6)%7;h.push("day-"+k+" cell-"+U);g=w+String(l<10?"0":"")+l;if(u.rangeLow&&+g<+u.rangeLow||u.rangeHigh&&+g>+u.rangeHigh){d.className="out-of-range";d.title="";d.appendChild(document.createTextNode(l));if(u.showWeeks){y[p]=Math.min(y[p],2)}}else{if(C){d.title=x?pt(new Date(+String(w).substr(0,4),+String(w).substr(4,2)-1,+l,5,0,0),x,true):"";h.push("cd-"+g+" yyyymmdd-"+g+" yyyymm-"+w+" mmdd-"+w.substr(4,2)+W(l))}else{d.title=x?ut(13)+" "+pt(new Date(+String(w).substr(0,4),+String(w).substr(4,2)-1,+l,5,0,0),x,true):"";h.push("yyyymmdd-"+g+" yyyymm-"+w+" mmdd-"+w.substr(4,2)+W(l)+" not-selectable")}if(g==M){h.push("date-picker-today")}if(N==g){h.push("date-picker-selected-date");K(d,"selected","true");this.selectedTD=d}if(g in c&&c[g]==1||u.disabledDays[k]&&!(g in c&&c[g]==0)){h.push("day-disabled");if(x&&C){d.title=ut(13)+" "+d.title}}if(g in S){h.push(S[g])}if(u.highlightDays[k]){h.push("date-picker-highlight")}if(a==g){d.id=u.id+"-date-picker-hover"}d.appendChild(document.createTextNode(l));d.className=h.join(" ");if(u.showWeeks){y[p]=Math.min(h[0]=="month-out"?3:1,y[p])}}}else{d.className="date-picker-unused";d.appendChild(document.createTextNode(s));d.title=""}if(u.showWeeks&&U-p*7==6){B(u.wkThs[p]);u.wkThs[p].appendChild(document.createTextNode(y[p]==4&&!u.fillGrid?s:ht(o,i,U-A-6)));u.wkThs[p].className="date-picker-week-header"+["",""," out-of-range"," month-out",""][y[p]]}}var z=u.titleBar.getElementsByTagName("span");B(z[0]);B(z[1]);z[0].appendChild(document.createTextNode(ft(i,false)+s));z[1].appendChild(document.createTextNode(o));if(u.timerSet){u.timerInc=50+Math.round((u.timerInc-50)/1.8);u.timer=window.setTimeout(u.updateTable,u.timerInc)}u.inUpdate=u.delayedUpdate=false;u.setNewFocus()};this.destroy=function(){if(document.getElementById("fd-but-"+this.id)){document.getElementById("fd-but-"+this.id).parentNode.removeChild(document.getElementById("fd-but-"+this.id))}if(!this.created){return}V(this.table,"mousedown",u.onmousedown);V(this.table,"mouseover",u.onmouseover);V(this.table,"mouseout",u.onmouseout);V(document,"mousedown",u.onmousedown);V(document,"mouseup",u.clearTimer);if(window.addEventListener&&!window.devicePixelRatio){try{window.removeEventListener("DOMMouseScroll",this.onmousewheel,false)}catch(e){}}else{V(document,"mousewheel",this.onmousewheel);V(window,"mousewheel",this.onmousewheel)}u.removeOnFocusEvents();clearTimeout(u.fadeTimer);clearTimeout(u.timer);if(H===6&&!u.staticPos){try{u.iePopUp.parentNode.removeChild(u.iePopUp);u.iePopUp=null}catch(e){}}if(this.div&&this.div.parentNode){this.div.parentNode.removeChild(this.div)}u=null};this.resizeInlineDiv=function(){u.div.style.width=u.table.offsetWidth+"px";u.div.style.height=u.table.offsetHeight+"px"};this.reset=function(){var e,t;for(e in u.formElements){t=document.getElementById(e);if(t){if(t.tagName.toLowerCase()=="select"){t.selectedIndex=u.formElements[e.defaultVal]}else{t.value=u.formElements[e.defaultVal]}}}u.changeHandler()};this.create=function(){function f(e){var t=document.createElement("th");if(e.thClassName){t.className=e.thClassName}if(e.colspan){t.setAttribute(H?"colSpan":"colspan",e.colspan)}t.unselectable="on";return t}function l(e,t){for(var n=0,r;r=t[n];n++){var i=f(r);e.appendChild(i);var s=document.createElement("span");s.className=r.className;s.id=u.id+r.id;s.innerHTML=r.text||u.nbsp;s.title=r.title||"";s.unselectable="on";i.appendChild(s)}}if(document.getElementById("fd-"+this.id)){return}var e,n,r,i,o,a;this.noFocus=true;this.div=document.createElement("div");this.div.id="fd-"+this.id;this.div.className="date-picker"+(c?" fd-dp-fade ":"")+this.bespokeClass;this.div.style.visibility="hidden";this.div.style.display="none";if(this.describedBy&&document.getElementById(this.describedBy)){K(this.div,"describedby",this.describedBy)}if(this.labelledBy){K(this.div,"labelledby",this.labelledBy.id)}this.idiv=document.createElement("div");this.table=document.createElement("table");this.table.className="date-picker-table";this.table.onmouseover=this.onmouseover;this.table.onmouseout=this.onmouseout;this.table.onclick=this.onclick;if(this.finalOpacity<100){this.idiv.style.opacity=Math.min(Math.max(parseInt(this.finalOpacity,10)/100,.2),1)}if(this.staticPos){this.table.onmousedown=this.onmousedown}this.div.appendChild(this.idiv);this.idiv.appendChild(this.table);var h=!this.dragDisabled?" drag-enabled":"";if(!this.staticPos){this.div.style.visibility="hidden";this.div.className+=h;document.getElementsByTagName("body")[0].appendChild(this.div);if(H===6){this.iePopUp=document.createElement("iframe");this.iePopUp.src="javascript:'<html></html>';";this.iePopUp.setAttribute("className","iehack");this.iePopUp.setAttribute("tabIndex",-1);J(this.iePopUp,"presentation");K(this.iePopUp,"hidden","true");this.iePopUp.scrolling="no";this.iePopUp.frameBorder="0";this.iePopUp.name=this.iePopUp.id=this.id+"-iePopUpHack";document.body.appendChild(this.iePopUp)}K(this.div,"hidden","true")}else{var p=document.getElementById(this.positioned?this.positioned:this.id);if(!p){this.div=null;if(t){throw this.positioned?"Could not locate a datePickers associated parent element with an id:"+this.positioned:"Could not locate a datePickers associated input with an id:"+this.id}return}this.div.className+=" static-datepicker";if(this.positioned){p.appendChild(this.div)}else{p.parentNode.insertBefore(this.div,p.nextSibling)}if(this.hideInput){for(var d in this.formElements){p=document.getElementById(d);if(p){p.className+=" fd-hidden-input"}}}setTimeout(this.resizeInlineDiv,300)}J(this.div,"application");J(this.table,"grid");if(this.statusFormat){a=document.createElement("tfoot");this.table.appendChild(a);e=document.createElement("tr");e.className="date-picker-tfoot";a.appendChild(e);this.statusBar=f({thClassName:"date-picker-statusbar"+h,colspan:this.showWeeks?8:7});e.appendChild(this.statusBar);this.updateStatus()}i=document.createElement("thead");i.className="date-picker-thead";this.table.appendChild(i);e=document.createElement("tr");J(e,"presentation");i.appendChild(e);this.titleBar=f({thClassName:"date-picker-title"+h,colspan:this.showWeeks?8:7});e.appendChild(this.titleBar);e=null;var v=document.createElement("span");v.appendChild(document.createTextNode(s));v.className="month-display"+h;this.titleBar.appendChild(v);v=document.createElement("span");v.appendChild(document.createTextNode(s));v.className="year-display"+h;this.titleBar.appendChild(v);v=null;e=document.createElement("tr");J(e,"presentation");i.appendChild(e);l(e,[{className:"prev-but prev-year",id:"-prev-year-but",text:"&laquo;",title:ut(2)},{className:"prev-but prev-month",id:"-prev-month-but",text:"&#8249;",title:ut(0)},{colspan:this.showWeeks?4:3,className:"today-but",id:"-today-but",text:ut(4)},{className:"next-but next-month",id:"-next-month-but",text:"&#8250;",title:ut(1)},{className:"next-but next-year",id:"-next-year-but",text:"&raquo;",title:ut(3)}]);o=document.createElement("tbody");this.table.appendChild(o);var m=this.showWeeks?8:7,g=this.showWeeks?0:-1,y,b,w,E;for(var S=0;S<7;S++){n=document.createElement("tr");if(S!=0){J(n,"row");o.appendChild(n)}else{i.appendChild(n)}for(var x=0;x<m;x++){if(S===0||this.showWeeks&&x===0){r=document.createElement("th")}else{r=document.createElement("td");K(r,"describedby",this.id+"-col-"+x+(this.showWeeks?" "+this.id+"-row-"+S:""));K(r,"selected","false")}if(H){r.unselectable="on"}n.appendChild(r);if(this.showWeeks&&x>0&&S>0||!this.showWeeks&&S>0){J(r,"gridcell")}else{if(S===0&&x>g){r.className="date-picker-day-header";r.scope="col";J(r,"columnheader");r.id=this.id+"-col-"+x}else{r.className="date-picker-week-header";r.scope="row";J(r,"rowheader");r.id=this.id+"-row-"+S}}}}r=n=null;this.ths=this.table.getElementsByTagName("thead")[0].getElementsByTagName("tr")[2].getElementsByTagName("th");for(var T=0;T<m;T++){if(T==0&&this.showWeeks){this.ths[T].appendChild(document.createTextNode(ut(6)));this.ths[T].title=ut(8);continue}if(T>(this.showWeeks?0:-1)){y=document.createElement("span");y.className="fd-day-header";if(H){y.unselectable="on"}this.ths[T].appendChild(y)}}y=null;this.trs=this.table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");this.tds=this.table.getElementsByTagName("tbody")[0].getElementsByTagName("td");this.butPrevYear=document.getElementById(this.id+"-prev-year-but");this.butPrevMonth=document.getElementById(this.id+"-prev-month-but");this.butToday=document.getElementById(this.id+"-today-but");this.butNextYear=document.getElementById(this.id+"-next-year-but");this.butNextMonth=document.getElementById(this.id+"-next-month-but");if(this.noToday){this.butToday.style.display="none"}if(this.showWeeks){this.wkThs=this.table.getElementsByTagName("tbody")[0].getElementsByTagName("th");this.div.className+=" weeks-displayed"}o=i=e=l=f=null;this.updateTableHeaders();this.created=true;this.updateTable();if(this.staticPos){this.visible=true;this.opacity=100;this.div.style.visibility="visible";this.div.style.display="block";this.noFocus=true;this.fade()}else{this.reposition();this.div.style.visibility="visible";this.fade();this.noFocus=true}this.callback("domcreate",{id:this.id})};this.transEnd=function(){u.div.style.display="none";u.div.style.visibility="hidden";K(u.div,"hidden","true")};this.fade=function(){window.clearTimeout(u.fadeTimer);u.fadeTimer=null;if(c){u.opacity=u.opacityTo;if(u.opacityTo==0){u.visible=false;X(u.div,h,u.transEnd);j(u.div,"fd-dp-fade")}else{V(u.div,h,u.transEnd);u.visible=true;u.div.style.display="block";u.div.style.visibility="visible";K(u.div,"hidden","false");F(u.div,"fd-dp-fade")}return}var e=Math.round(u.opacity+(u.opacityTo-u.opacity)/4);u.setOpacity(e);if(Math.abs(u.opacityTo-e)>3&&!u.noFadeEffect){u.fadeTimer=window.setTimeout(u.fade,50)}else{u.setOpacity(u.opacityTo);if(u.opacityTo==0){u.div.style.display="none";u.div.style.visibility="hidden";K(u.div,"hidden","true");u.visible=false}else{K(u.div,"hidden","false");u.visible=true}}};this.trackDrag=function(e){e=e||window.event;var t=(e.pageX?e.pageX:e.clientX?e.clientX:e.x)-u.mx;var n=(e.pageY?e.pageY:e.clientY?e.clientY:e.Y)-u.my;u.div.style.left=Math.round(u.x+t)>0?Math.round(u.x+t)+"px":"0px";u.div.style.top=Math.round(u.y+n)>0?Math.round(u.y+n)+"px":"0px";if(H===6&&!u.staticPos){u.iePopUp.style.top=u.div.style.top;u.iePopUp.style.left=u.div.style.left}};this.stopDrag=function(e){var t=document.getElementsByTagName("body")[0];F(t,"fd-drag-active");V(document,"mousemove",u.trackDrag,false);V(document,"mouseup",u.stopDrag,false);u.div.style.zIndex=9999};this.onmousedown=function(e){e=e||document.parentWindow.event;var t=e.target!=null?e.target:e.srcElement,n=t,r=true,i=new RegExp("^fd-(but-)?"+u.id+"$");u.mouseDownElem=null;while(t){if(t.id&&t.id.length&&t.id.search(i)!=-1){r=false;break}try{t=t.parentNode}catch(s){break}}if(r){nt();return true}if((u.div.className+n.className).search("fd-disabled")!=-1){return true}if(n.id.search(new RegExp("^"+u.id+"(-prev-year-but|-prev-month-but|-next-month-but|-next-year-but)$"))!=-1){u.mouseDownElem=n;X(document,"mouseup",u.clearTimer);X(n,"mouseout",u.clearTimer);var o={"-prev-year-but":[0,-1,0],"-prev-month-but":[0,0,-1],"-next-year-but":[0,1,0],"-next-month-but":[0,0,1]},a=n.id.replace(u.id,""),f=Number(u.date.getFullYear()+W(u.date.getMonth()+1));u.timerInc=800;u.timerSet=true;u.dayInc=o[a][0];u.yearInc=o[a][1];u.monthInc=o[a][2];u.accellerator=1;if(!(u.currentYYYYMM==f)){if(u.currentYYYYMM<f&&(u.yearInc==-1||u.monthInc==-1)||u.currentYYYYMM>f&&(u.yearInc==1||u.monthInc==1)){u.delayedUpdate=false;u.timerInc=1200}else{u.delayedUpdate=true}}u.updateTable();return $(e)}else if(t.className.search("drag-enabled")!=-1){u.mx=e.pageX?e.pageX:e.clientX?e.clientX:e.x;u.my=e.pageY?e.pageY:e.clientY?e.clientY:e.Y;u.x=parseInt(u.div.style.left,10);u.y=parseInt(u.div.style.top,10);X(document,"mousemove",u.trackDrag,false);X(document,"mouseup",u.stopDrag,false);j(document.getElementsByTagName("body")[0],"fd-drag-active");u.div.style.zIndex=1e4;return $(e)}return true};this.onclick=function(e){if(!c&&u.opacity!=u.opacityTo||u.disabled){return $(e)}e=e||document.parentWindow.event;var t=e.target!=null?e.target:e.srcElement;while(t.parentNode){if(t.tagName&&t.tagName.toLowerCase()=="td"){if(t.className.search(/cd-([0-9]{8})/)==-1||t.className.search(A)!=-1){return $(e)}var n=t.className.match(/cd-([0-9]{8})/)[1];u.date=new Date(n.substr(0,4),n.substr(4,2)-1,n.substr(6,2),5,0,0);u.dateSet=new Date(u.date);u.noFocus=true;u.callback("dateset",{id:u.id,date:u.dateSet,dd:u.dateSet.getDate(),mm:u.dateSet.getMonth()+1,yyyy:u.dateSet.getFullYear()});u.returnFormattedDate();u.hide();u.stopTimer();break}else if(t.id&&t.id==u.id+"-today-but"){u.date=new Date;u.updateTable();u.stopTimer();break}else if(t.className.search(/date-picker-day-header/)!=-1){var r=u.showWeeks?-1:0,i=t;while(i.previousSibling){i=i.previousSibling;if(i.tagName&&i.tagName.toLowerCase()=="th"){r++}}u.firstDayOfWeek=(u.firstDayOfWeek+r)%7;u.updateTableHeaders();break}try{t=t.parentNode}catch(s){break}}return $(e)};this.show=function(e){if(this.staticPos){return}var t,n;for(n in this.formElements){t=document.getElementById(this.id);if(!t||t&&t.disabled){return}}this.noFocus=true;if(!this.created||!document.getElementById("fd-"+this.id)){this.created=false;this.fullCreate=false;this.create();this.fullCreate=true}else{this.setDateFromInput();this.reposition()}this.noFocus=!!!e;if(this.noFocus){this.clickActivated=true;this.showCursor=false;X(document,"mousedown",this.onmousedown);if(d){if(window.addEventListener&&!window.devicePixelRatio){window.addEventListener("DOMMouseScroll",this.onmousewheel,false)}else{X(document,"mousewheel",this.onmousewheel);X(window,"mousewheel",this.onmousewheel)}}}else{this.clickActivated=false;this.showCursor=true}this.opacityTo=100;this.div.style.display="block";if(H===6){this.iePopUp.style.width=this.div.offsetWidth+"px";this.iePopUp.style.height=this.div.offsetHeight+"px";this.iePopUp.style.display="block"}this.setNewFocus();this.fade();var r=document.getElementById("fd-but-"+this.id);if(r){j(r,"date-picker-button-active")}};this.hide=function(){if(!this.visible||!this.created||!document.getElementById("fd-"+this.id)){return}this.kbEvent=false;F(u.div,"date-picker-focus");this.stopTimer();this.removeOnFocusEvents();this.clickActivated=false;this.noFocus=true;this.showCursor=false;this.setNewFocus();if(this.staticPos){return}if(this.statusBar){this.updateStatus(ut(9))}var e=document.getElementById("fd-but-"+this.id);if(e){F(e,"date-picker-button-active")}V(document,"mousedown",this.onmousedown);if(d){if(window.addEventListener&&!window.devicePixelRatio){try{window.removeEventListener("DOMMouseScroll",this.onmousewheel,false)}catch(t){}}else{V(document,"mousewheel",this.onmousewheel);V(window,"mousewheel",this.onmousewheel)}}if(H===6){this.iePopUp.style.display="none"}this.opacityTo=0;this.fade()};this.onblur=function(e){u.removeCursorHighlight();u.hide()};this.onfocus=function(e){u.noFocus=false;j(u.div,"date-picker-focus");if(u.statusBar){u.updateStatus(pt(u.date,u.statusFormat,true))}u.showCursor=true;u.addCursorHighlight();u.addOnFocusEvents()};this.onmousewheel=function(e){e=e||document.parentWindow.event;var t=0;if(e.wheelDelta){t=e.wheelDelta/120;if(n&&window.opera.version()<9.2){t=-t}}else if(e.detail){t=-e.detail/3}var r=u.date.getDate(),i=new Date(u.date),s=t>0?1:-1;i.setDate(2);i.setMonth(i.getMonth()+s*1);i.setDate(Math.min(r,lt(i.getMonth(),i.getFullYear())));if(u.outOfRange(i)){return $(e)}u.date=new Date(i);u.updateTable();if(u.statusBar){u.updateStatus(pt(u.date,u.statusFormat,true))}return $(e)};this.onkeydown=function(e){u.stopTimer();if(!u.visible){return false}e=e||document.parentWindow.event;var t=e.keyCode?e.keyCode:e.charCode;if(t==13){var n=document.getElementById(u.id+"-date-picker-hover");if(!n||n.className.search(/cd-([0-9]{8})/)==-1||n.className.search(/out-of-range|day-disabled/)!=-1){return $(e)}u.dateSet=new Date(u.date);u.callback("dateset",u.createCbArgObj());u.returnFormattedDate();u.hide();return $(e)}else if(t==27){if(!u.staticPos){u.hide();var r=document.getElementById("fd-but-"+u.id);if(r){setTimeout(function(){try{r.focus()}catch(e){}},0)}return $(e)}return true}else if(t==32||t==0){u.date=new Date;u.updateTable();return $(e)}else if(t==9){if(!u.staticPos){return $(e)}return true}if(H){if((new Date).getTime()-u.interval.getTime()<50){return $(e)}u.interval=new Date}if(t>49&&t<56||t>97&&t<104){if(t>96){t-=96-48}t-=49;u.firstDayOfWeek=(u.firstDayOfWeek+t)%7;u.updateTableHeaders();return $(e)}if(t<33||t>40){return true}var i=new Date(u.date),s=u.date.getFullYear()+W(u.date.getMonth()+1),o;if(t==36){i.setDate(1)}else if(t==35){i.setDate(lt(i.getMonth(),i.getFullYear()))}else if(t==33||t==34){var a=t==34?1:-1;if(e.ctrlKey){i.setFullYear(i.getFullYear()+a*1)}else{var f=u.date.getDate();i.setDate(2);i.setMonth(i.getMonth()+a*1);i.setDate(Math.min(f,lt(i.getMonth(),i.getFullYear())))}}else if(t==37){i=new Date(u.date.getFullYear(),u.date.getMonth(),u.date.getDate()-1,5,0,0)}else if(t==39||t==34){i=new Date(u.date.getFullYear(),u.date.getMonth(),u.date.getDate()+1,5,0,0)}else if(t==38){i=new Date(u.date.getFullYear(),u.date.getMonth(),u.date.getDate()-7,5,0,0)}else if(t==40){i=new Date(u.date.getFullYear(),u.date.getMonth(),u.date.getDate()+7,5,0,0)}if(u.outOfRange(i)){return $(e)}u.date=i;if(u.statusBar){u.updateStatus(u.getBespokeTitle(u.date.getFullYear(),u.date.getMonth()+1,u.date.getDate())||pt(u.date,u.statusFormat,true))}var l=String(u.date.getFullYear())+W(u.date.getMonth()+1)+W(u.date.getDate());if(e.ctrlKey||t==33||t==34||l<u.firstDateShown||l>u.lastDateShown){u.updateTable();if(H){u.interval=new Date}}else{if(!u.noToday){u.disableTodayButton()}u.removeOldFocus();u.showHideButtons(u.date);for(var c=0,n;n=u.tds[c];c++){if(n.className.search("cd-"+l)==-1){continue}n.id=u.id+"-date-picker-hover";u.setNewFocus();break}}return $(e)};this.onmouseout=function(e){e=e||document.parentWindow.event;var t=e.toElement||e.relatedTarget;while(t&&t!=this){try{t=t.parentNode}catch(e){t=this}}if(t==this){return false}if(u.clickActivated||u.staticPos&&!u.kbEventsAdded){u.showCursor=false;u.removeCursorHighlight()}if(u.currentTR){u.currentTR.className="";u.currentTR=null}if(u.statusBar){u.updateStatus(u.dateSet?u.getBespokeTitle(u.dateSet.getFullYear(),u.dateSet.getMonth()+1,u.dateSet.getDate())||pt(u.dateSet,u.statusFormat,true):ut(9))}};this.onmouseover=function(e){e=e||document.parentWindow.event;var t=e.target!=null?e.target:e.srcElement;while(t.nodeType!=1){t=t.parentNode}if(!t||!t.tagName){return}u.noFocus=true;var n=ut(9);if(u.clickActivated||u.staticPos&&!u.kbEventsAdded){u.showCursor=false}switch(t.tagName.toLowerCase()){case"td":if(t.className.search(/date-picker-unused|out-of-range/)!=-1){n=ut(9)}if(t.className.search(/cd-([0-9]{8})/)!=-1){u.showCursor=true;u.stopTimer();var r=t.className.match(/cd-([0-9]{8})/)[1];u.removeOldFocus();t.id=u.id+"-date-picker-hover";u.setNewFocus();u.date=new Date(+r.substr(0,4),+r.substr(4,2)-1,+r.substr(6,2),5,0,0);if(!u.noToday){u.disableTodayButton()}n=u.getBespokeTitle(+r.substr(0,4),+r.substr(4,2),+r.substr(6,2))||pt(u.date,u.statusFormat,true)}break;case"th":if(!u.statusBar){break}if(t.className.search(/drag-enabled/)!=-1){n=ut(10)}else if(t.className.search(/date-picker-week-header/)!=-1){var i=t.firstChild?t.firstChild.nodeValue:"";n=i.search(/^(\d+)$/)!=-1?ut(7,[i,i<3&&u.date.getMonth()==11?ct(u.date.getFullYear())+1:ct(u.date.getFullYear())]):ut(9)}break;case"span":if(!u.statusBar){break}if(t.className.search(/day-([0-6])/)!=-1){var s=t.className.match(/day-([0-6])/)[1];n=ut(11,[at(s,false)])}else if(t.className.search(/(drag-enabled|today-but|prev-(year|month)|next-(year|month))/)!=-1&&t.className.search(/disabled/)==-1){n=ut({"drag-enabled":10,"prev-year":2,"prev-month":0,"next-year":3,"next-month":1,"today-but":12}[t.className.match(/(drag-enabled|today-but|prev-(year|month)|next-(year|month))/)[0]])}break;default:n=""}while(t.parentNode){t=t.parentNode;if(t.nodeType==1&&t.tagName.toLowerCase()=="tr"){if(u.currentTR){if(t==u.currentTR){break}u.currentTR.className=""}t.className="dp-row-highlight";u.currentTR=t;break}}if(u.statusBar&&n){u.updateStatus(n)}if(!u.showCursor){u.removeCursorHighlight()}};this.clearTimer=function(){u.stopTimer();u.timerInc=800;u.yearInc=0;u.monthInc=0;u.dayInc=0;V(document,"mouseup",u.clearTimer);if(u.mouseDownElem!=null){V(u.mouseDownElem,"mouseout",u.clearTimer)}u.mouseDownElem=null};var u=this;this.setDateFromInput();if(this.staticPos){this.create()}else{this.createButton()}(function(){var e,t,n=0;for(e in u.formElements){t=document.getElementById(e);if(t&&t.tagName&&t.tagName.search(/select|input/i)!=-1){X(t,"change",u.changeHandler);if(n==0&&t.form){X(t.form,"reset",u.reset)}n++}if(!t||t.disabled==true){u.disableDatePicker()}}})();this.fullCreate=true}var t=false,n=Object.prototype.toString.call(window.opera)==="[object Opera]",r="",i=I(),s=String.fromCharCode(160),o={},u={},a={},f=0,l=100,c=null,h="",p=true,d=true,v=false,m=false,g=false,y=false,b=false,w=false,E=true,S="%d %F %Y",x="%F %d, %Y",T="",N=n?["%j"]:["%j"," %F %Y"],C=/%([d|j])/,k=/%([M|F|m|n])/,L=/%[y|Y]/,A=/date-picker-unused|out-of-range|day-disabled|not-selectable/,O=/%([d|j|M|F|m|n|Y|y])/,M=/%([d|D|l|j|N|w|S|W|M|F|m|n|t|Y|y])/,_=/^((\d\d\d\d)(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01]))$/,D=/^(((\d\d\d\d)|(\*\*\*\*))((0[1-9]|1[012])|(\*\*))(0[1-9]|[12][0-9]|3[01]))$/,P="	\n\f\r   ᠎             　\u2028\u2029",H=function(){var e,t=3,n=document.createElement("div"),r=n.getElementsByTagName("i");while(n.innerHTML="<!--[if gt IE "+ ++t+"]><i></i><![endif]-->",r[0]);return t>4?t:e}();var q=function(e,t,n){if(Object.prototype.toString.call(t)!=="[object RegExp]"){return q._nativeSplit.call(e,t,n)}var r=[],i=0,s="",t=RegExp(t.source,"g"),o,u,a,f;e=e+"";if(!q._compliantExecNpcg){o=RegExp("^"+t.source+"$(?!\\s)",s)}if(n===undefined||+n<0){n=Infinity}else{n=Math.floor(+n);if(!n){return[]}}while(u=t.exec(e)){a=u.index+u[0].length;if(a>i){r.push(e.slice(i,u.index));if(!q._compliantExecNpcg&&u.length>1){u[0].replace(o,function(){for(var e=1;e<arguments.length-2;e++){if(arguments[e]===undefined){u[e]=undefined}}})}if(u.length>1&&u.index<e.length){Array.prototype.push.apply(r,u.slice(1))}f=u[0].length;i=a;if(r.length>=n){break}}if(t.lastIndex===u.index){t.lastIndex++}}if(i===e.length){if(f||!t.test("")){r.push("")}}else{r.push(e.slice(i))}return r.length>n?r.slice(0,n):r};q._compliantExecNpcg=/()??/.exec("")[1]===undefined;q._nativeSplit=String.prototype.split;Y.prototype.addButtonEvents=function(e){function t(e){e=e||window.event;var t=this.id.replace("fd-but-",""),n=wt(t),r=false,i=o[t].kbEvent;if(i){o[t].kbEvent=false;return}if(e.type=="keydown"){var s=e.keyCode!=null?e.keyCode:e.charCode;if(s!=13)return true;o[t].kbEvent=true;if(n){F(this,"date-picker-button-active");nt();return $(e)}r=true}else{o[t].kbEvent=false}if(!n){j(this,"date-picker-button-active");nt(t);it(t,r)}else{F(this,"date-picker-button-active");nt()}return $(e)}e.onclick=t;e.onkeydown=t;if(!p){Q(e,-1)}else{Q(e,this.bespokeTabIndex)}};Y.prototype.createButton=function(){if(this.staticPos||document.getElementById("fd-but-"+this.id)){return}var e=document.getElementById(this.id),t=document.createElement("span"),n=document.createElement("a");n.href="#"+this.id;n.className="date-picker-control";n.title=ut(5);n.id="fd-but-"+this.id;t.appendChild(document.createTextNode(s));n.appendChild(t);t=document.createElement("span");t.className="fd-screen-reader";t.appendChild(document.createTextNode(n.title));n.appendChild(t);J(n,"button");K(n,"haspopup",true);if(this.positioned&&document.getElementById(this.positioned)){document.getElementById(this.positioned).appendChild(n)}else{e.parentNode.insertBefore(n,e.nextSibling)}this.addButtonEvents(n);n=null;this.callback("dombuttoncreate",{id:this.id})};Y.prototype.setBespokeTitles=function(e){this.bespokeTitles={};this.addBespokeTitles(e)};Y.prototype.addBespokeTitles=function(e){for(var t in e){if(e.hasOwnProperty(t)){this.bespokeTitles[t]=e[t]}}};Y.prototype.getBespokeTitle=function(e,t,n){var r,i,s=e+String(W(t))+W(n);for(r in this.bespokeTitles){if(this.bespokeTitles.hasOwnProperty(r)){i=String(r).replace(/^(\*\*\*\*)/,e).replace(/^(\d\d\d\d)(\*\*)/,"$1"+W(t));if(i==s){return this.bespokeTitles[r]}}}for(r in a){if(a.hasOwnProperty(r)){i=String(r).replace(/^(\*\*\*\*)/,e).replace(/^(\d\d\d\d)(\*\*)/,"$1"+W(t));if(i==s){return a[r]}}}return false};Y.prototype.returnSelectedDate=function(){return this.dateSet};Y.prototype.setRangeLow=function(e){if(String(e).search(_)==-1){if(t){throw"Invalid value passed to setRangeLow method: "+e}return false}this.rangeLow=e;if(!this.inUpdate){this.setDateFromInput()}};Y.prototype.setRangeHigh=function(e){if(String(e).search(_)==-1){if(t){throw"Invalid value passed to setRangeHigh method: "+e}return false}this.rangeHigh=e;if(!this.inUpdate){this.setDateFromInput()}};Y.prototype.setDisabledDays=function(e){if(!e.length||e.join("").search(/^([0|1]{7})$/)==-1){if(t){throw"Invalid values located when attempting to call setDisabledDays"}return false}this.disabledDays=e;if(!this.inUpdate){this.setDateFromInput()}};Y.prototype.setDisabledDates=function(e){this.filterDateList(e,true)};Y.prototype.setEnabledDates=function(e){this.filterDateList(e,false)};Y.prototype.addDisabledDates=function(e){this.addDatesToList(e,true)};Y.prototype.addEnabledDates=function(e){this.addDatesToList(e,false)};Y.prototype.filterDateList=function(e,t){var n=[];for(var r=0;r<this.dateList.length;r++){if(this.dateList[r].type!=t){n.push(this.dateList[r])}}this.dateList=n.concat();this.addDatesToList(e,t)};Y.prototype.addDatesToList=function(e,t){var n;for(n in e){if(String(n).search(D)!=-1&&(e[n]==1||String(e[n]).search(D)!=-1)){if(e[n]!=1&&Number(String(n).replace(/^\*\*\*\*/,2010).replace(/^(\d\d\d\d)(\*\*)/,"$1"+"22"))>Number(String(e[n]).replace(/^\*\*\*\*/,2010).replace(/^(\d\d\d\d)(\*\*)/,"$1"+"22"))){continue}this.dateList.push({type:!!t,rLow:n,rHigh:e[n]})}}if(!this.inUpdate){this.setDateFromInput()}};Y.prototype.setSelectedDate=function(e){if(String(e).search(D)==-1){return false}var t=e.match(_),n=new Date(+t[2],+t[3]-1,+t[4],5,0,0);if(!n||isNaN(n)||!this.canDateBeSelected(n)){return false}this.dateSet=new Date(n);if(!this.inUpdate){this.updateTable()}this.callback("dateset",this.createCbArgObj());this.returnFormattedDate()};Y.prototype.checkSelectedDate=function(){if(this.dateSet&&!this.canDateBeSelected(this.dateSet)){this.dateSet=null}if(!this.inUpdate){this.updateTable()}};Y.prototype.addOnFocusEvents=function(){if(this.kbEventsAdded||this.noFocus){return}X(document,"keypress",this.onkeydown);X(document,"mousedown",this.onmousedown);if(H){V(document,"keypress",this.onkeydown);X(document,"keydown",this.onkeydown)}if(window.devicePixelRatio){V(document,"keypress",this.onkeydown);X(document,"keydown",this.onkeydown)}this.noFocus=false;this.kbEventsAdded=true};Y.prototype.removeOnFocusEvents=function(){if(!this.kbEventsAdded){return}V(document,"keypress",this.onkeydown);V(document,"keydown",this.onkeydown);V(document,"mousedown",this.onmousedown);this.kbEventsAdded=false};Y.prototype.stopTimer=function(){this.timerSet=false;window.clearTimeout(this.timer)};Y.prototype.setOpacity=function(e){this.div.style.opacity=e/100;this.div.style.filter="alpha(opacity="+e+")";this.opacity=e};Y.prototype.truePosition=function(e){var t=this.cumulativeOffset(e);if(n){return t}var r=document.compatMode&&document.compatMode!="BackCompat"?document.documentElement:document.body,i=document.all?r.scrollLeft:window.pageXOffset,s=document.all?r.scrollTop:window.pageYOffset,o=this.realOffset(e);return[t[0]-o[0]+i,t[1]-o[1]+s]};Y.prototype.realOffset=function(e){var t=0,n=0;do{t+=e.scrollTop||0;n+=e.scrollLeft||0;e=e.parentNode}while(e);return[n,t]};Y.prototype.cumulativeOffset=function(e){var t=0,n=0;do{t+=e.offsetTop||0;n+=e.offsetLeft||0;e=e.offsetParent}while(e);return[n,t]};Y.prototype.outOfRange=function(e){if(!this.rangeLow&&!this.rangeHigh){return false}var t=false;if(!e){t=true;e=this.date}var n=W(e.getDate()),r=W(e.getMonth()+1),i=e.getFullYear(),s=String(i)+String(r)+String(n);if(this.rangeLow&&+s<+this.rangeLow){if(!t){return true}this.date=new Date(this.rangeLow.substr(0,4),this.rangeLow.substr(4,2)-1,this.rangeLow.substr(6,2),5,0,0);return false}if(this.rangeHigh&&+s>+this.rangeHigh){if(!t){return true}this.date=new Date(this.rangeHigh.substr(0,4),this.rangeHigh.substr(4,2)-1,this.rangeHigh.substr(6,2),5,0,0)}return false};Y.prototype.canDateBeSelected=function(e){if(!e||isNaN(e)){return false}var t=W(e.getDate()),n=W(e.getMonth()+1),r=e.getFullYear(),i=r+""+n+""+t,s=this.getDateExceptions(r,n),o=e.getDay()==0?7:e.getDay();if(this.rangeLow&&+i<+this.rangeLow||this.rangeHigh&&+i>+this.rangeHigh||i in s&&s[i]==1||this.disabledDays[o-1]&&(!(i in s)||i in s&&s[i]==1)){return false}return true};Y.prototype.updateStatus=function(e){B(this.statusBar);if(e&&this.statusFormat.search(/%S/)!=-1&&e.search(/([0-9]{1,2})(st|nd|rd|th)/)!=-1){e=q(e.replace(/([0-9]{1,2})(st|nd|rd|th)/,"$1<sup>$2</sup>"),/<sup>|<\/sup>/);var t=document.createDocumentFragment();for(var n=0,r;r=e[n];n++){if(/^(st|nd|rd|th)$/.test(r)){var i=document.createElement("sup");i.appendChild(document.createTextNode(r));t.appendChild(i)}else{t.appendChild(document.createTextNode(r))}}this.statusBar.appendChild(t)}else{this.statusBar.appendChild(document.createTextNode(e?e:ut(9)))}};Y.prototype.setDateFromInput=function(){var e=this.dateSet,t=false,n=this.staticPos?false:document.getElementById("fd-but-"+this.id),r=m.imported?[].concat(Z.fullMonths).concat(Z.monthAbbrs):[],i=m.imported?[].concat(m.fullMonths).concat(m.monthAbbrs):[],s=/(3[01]|[12][0-9]|0?[1-9])(st|nd|rd|th)/i,o=0,u=false,a,f,l,c,h,p,d,v,g,y,b;this.dateSet=null;for(l in this.formElements){c=document.getElementById(l);if(!c){return false}o++;v=String(c.value);if(!v){continue}h=this.formElements[l];a=[h];u=false;g=h.search(C)!=-1;y=h.search(k)!=-1;b=h.search(L)!=-1;if(!(g&&y&&b)){if(b&&!(y||g)){a=a.concat(["%Y","%y"])}else if(y&&!(b||g)){a=a.concat(["%M","%F","%m","%n"])}else if(g&&!(b||y)){a=a.concat(["%d%","%j"])}}for(f=0;f<a.length;f++){u=dt(v,a[f]);if(u){if(!p&&g&&u.d){p=u.d}if(t===false&&y&&u.m){t=u.m}if(!d&&b&&u.y){d=u.y}}if((g&&p||!g)&&(y&&!t===false||!y)&&(b&&d||!b)){break}}}if(E&&(!p||t===false||!d)&&g&&y&&b&&o==1&&v){if(m.imported){for(f=0;f<i.length;f++){v=v.replace(new RegExp(i[f],"i"),r[f])}}if(v.search(s)!=-1){v=v.replace(s,v.match(s)[1])}u=new Date(v.replace(new RegExp("-","g"),"/"));if(u&&!isNaN(u)){p=u.getDate();t=u.getMonth()+1;d=u.getFullYear()}}u=false;if(p&&!(t===false)&&d){if(+p>lt(+t-1,+d)){p=lt(+t-1,+d);u=false}else{u=new Date(+d,+t-1,+p,5,0,0)}}if(n){F(n,"date-picker-dateval")}if(!u||isNaN(u)){var w=new Date(d||(new Date).getFullYear(),!(t===false)?t-1:(new Date).getMonth(),1,5,0,0);this.date=this.cursorDate?new Date(+this.cursorDate.substr(0,4),+this.cursorDate.substr(4,2)-1,+this.cursorDate.substr(6,2),5,0,0):new Date(w.getFullYear(),w.getMonth(),Math.min(+p||(new Date).getDate(),lt(w.getMonth(),w.getFullYear())),5,0,0);this.outOfRange();if(this.fullCreate){this.updateTable()}return}u.setHours(5);this.date=new Date(u);this.outOfRange();if(u.getTime()==this.date.getTime()&&this.canDateBeSelected(this.date)){this.dateSet=new Date(this.date);if(n){j(n,"date-picker-dateval")}this.returnFormattedDate(true)}if(this.fullCreate){this.updateTable()}};Y.prototype.setSelectIndex=function(e,t){for(var n=e.options.length-1;n>=0;n--){if(e.options[n].value==t){e.selectedIndex=n;return}}};Y.prototype.returnFormattedDate=function(e){var t=this.staticPos?false:document.getElementById("fd-but-"+this.id);if(!this.dateSet){if(t){F(t,"date-picker-dateval")}return}var n=W(this.dateSet.getDate()),r=W(this.dateSet.getMonth()+1),i=this.dateSet.getFullYear(),s=false,o,u,a,f;e=!!e;for(o in this.formElements){u=document.getElementById(o);if(!u){return}if(!s){s=u}a=this.formElements[o];f=pt(this.dateSet,a,b);if(u.tagName.toLowerCase()=="input"){u.value=f}else{this.setSelectIndex(u,f)}}if(this.staticPos){this.noFocus=true;this.updateTable();this.noFocus=false}else if(t){j(t,"date-picker-dateval")}if(this.fullCreate){if(s.type&&s.type!="hidden"&&!e){try{s.focus()}catch(l){}}}if(!e){this.callback("datereturned",this.createCbArgObj())}};Y.prototype.disableDatePicker=function(){if(this.disabled){return}if(this.staticPos){this.removeOnFocusEvents();this.removeOldFocus();this.noFocus=true;j(this.div,"date-picker-disabled");this.table.onmouseover=this.table.onclick=this.table.onmouseout=this.table.onmousedown=null;V(document,"mousedown",this.onmousedown);V(document,"mouseup",this.clearTimer)}else{if(this.visible){this.hide()}var e=document.getElementById("fd-but-"+this.id);if(e){j(e,"date-picker-control-disabled");K(e,"disabled",true);e.onkeydown=e.onclick=function(){return false};Q(e,-1);e.title=""}}clearTimeout(this.timer);this.disabled=true};Y.prototype.enableDatePicker=function(){if(!this.disabled){return}if(this.staticPos){this.removeOldFocus();if(this.dateSet!=null){this.date=this.dateSet}this.noFocus=true;this.updateTable();F(this.div,"date-picker-disabled");this.disabled=false;this.table.onmouseover=this.onmouseover;this.table.onmouseout=this.onmouseout;this.table.onclick=this.onclick;this.table.onmousedown=this.onmousedown}else{var e=document.getElementById("fd-but-"+this.id);if(e){F(e,"date-picker-control-disabled");K(e,"disabled",false);this.addButtonEvents(e);e.title=ut(5)}}this.disabled=false};Y.prototype.disableTodayButton=function(){var e=new Date;F(this.butToday,"fd-disabled");if(this.outOfRange(e)||this.date.getDate()==e.getDate()&&this.date.getMonth()==e.getMonth()&&this.date.getFullYear()==e.getFullYear()){j(this.butToday,"fd-disabled")}};Y.prototype.updateTableHeaders=function(){var e=this.showWeeks?8:7,t=this.showWeeks?1:0,n,r;for(var i=t;i<e;i++){n=(this.firstDayOfWeek+(i-t))%7;this.ths[i].title=at(n,false);if(i>t){r=this.ths[i].getElementsByTagName("span")[0];B(r);r.appendChild(document.createTextNode(at(n,true)));r.title=this.ths[i].title;r=null}else{B(this.ths[i]);this.ths[i].appendChild(document.createTextNode(at(n,true)))}F(this.ths[i],"date-picker-highlight");if(this.highlightDays[n]){j(this.ths[i],"date-picker-highlight")}}if(this.created){this.updateTable()}};Y.prototype.callback=function(e,t){if(!e||!(e in this.callbacks)){return false}var n=false,r;for(r=0;r<this.callbacks[e].length;r++){n=this.callbacks[e][r](t||this.id)}return n};Y.prototype.showHideButtons=function(e){if(!this.butPrevYear){return}var t=e.getMonth(),n=e.getFullYear();if(this.outOfRange(new Date(n-1,t,lt(+t,n-1),5,0,0))){j(this.butPrevYear,"fd-disabled");if(this.yearInc==-1){this.stopTimer()}}else{F(this.butPrevYear,"fd-disabled")}if(this.outOfRange(new Date(n,+t-1,lt(+t-1,n),5,0,0))){j(this.butPrevMonth,"fd-disabled");if(this.monthInc==-1){this.stopTimer()}}else{F(this.butPrevMonth,"fd-disabled")}if(this.outOfRange(new Date(n+1,+t,1,5,0,0))){j(this.butNextYear,"fd-disabled");if(this.yearInc==1){this.stopTimer()}}else{F(this.butNextYear,"fd-disabled")}if(this.outOfRange(new Date(n,+t+1,1,5,0,0))){j(this.butNextMonth,"fd-disabled");if(this.monthInc==1){this.stopTimer()}}else{F(this.butNextMonth,"fd-disabled")}};var Z={fullMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],monthAbbrs:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],fullDays:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],dayAbbrs:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],titles:["Previous month","Next month","Previous year","Next year","Today","Show Calendar","wk","Week [[%0%]] of [[%1%]]","Week","Select a date","Click & Drag to move","Display “[[%0%]]” first","Go to Today’s date","Disabled date :"],rtl:false,firstDayOfWeek:0,imported:false};var et=function(){if(!arguments.length){return[]}var e=[];for(var t=0;t<arguments.length;t++){for(var n=0,r;r=arguments[t][n];n++){e[e.length]=r}}return e};var tt=function(){var e,t;for(e in o){for(t in o[e].formElements){if(!document.getElementById(t)){o[e].destroy();o[e]=null;delete o[e];break}}}};var nt=function(e){var t;for(t in o){if(!o[t].created||e&&e==o[t].id){continue}o[t].hide()}};var rt=function(e){if(e in o){if(!o[e].created||o[e].staticPos){return}o[e].hide()}};var it=function(e,t){if(!(e in o)){return false}o[e].clickActivated=!!!t;o[e].show(t);return true};var st=function(t){t=t||window.event;if(t.persisted){return}var n;for(n in o){o[n].destroy();o[n]=null;delete o[n]}o=null;V(window,"unload",e.destroy)};var ot=function(e){if(e&&e in o){o[e].destroy();o[e]=null;delete o[e]}};var ut=function(e,t){t=t||[];if(m.titles.length>e){var n=m.titles[e];if(t&&t.length){for(var r=0;r<t.length;r++){n=n.replace("[[%"+r+"%]]",t[r])}}return n.replace(/[[%(\d)%]]/g,"")}return""};var at=function(e,t){var n=m[t?"dayAbbrs":"fullDays"];return n.length&&n.length>e?n[e]:""};var ft=function(e,t){var n=m[t?"monthAbbrs":"fullMonths"];return n.length&&n.length>e?n[e]:""};var lt=function(e,t){e=(e+12)%12;return 0==t%4&&(0!=t%100||0==t%400)&&e==1?29:[31,28,31,30,31,30,31,31,30,31,30,31][e]};var ct=function(e){if(e in u){return u[e]}var t=new Date(e,0,4),n=new Date(e,11,28);t.setDate(t.getDate()-(6+t.getDay())%7);n.setDate(n.getDate()+(7-n.getDay())%7);u[e]=Math.round((n-t)/6048e5);return u[e]};var ht=function(e,t,n){var n=new Date(e,t,n,0,0,0),r=n.getDay(),i;n.setDate(n.getDate()-(r+6)%7+3);i=n.valueOf();n.setMonth(0);n.setDate(4);return Math.round((i-n.valueOf())/(7*864e5))+1};var pt=function(e,t,n){if(!e||isNaN(e)){return t}var r=e.getDate(),i=e.getDay(),s=e.getMonth(),o=e.getFullYear(),u=n?m:Z,a=String(t).split(M),a=q(t,M),f=[],l={d:W(r),D:u.dayAbbrs[i==0?6:i-1],l:u.fullDays[i==0?6:i-1],j:r,N:i==0?7:i,w:i,W:ht(o,s,r),M:u.monthAbbrs[s],F:u.fullMonths[s],m:W(s+1),n:s+1,t:lt(s,o),y:String(o).substr(2,2),Y:o,S:["th","st","nd","rd"][r%10>3?0:(r%100-r%10!=10)*r%10]},c=a.length,h,p;for(p=0;p<c;p++){h=a[p];f.push(h in l?l[h]:h)}return f.join("")};var dt=function(e,t){var n=false,r=false,i=false,s=t.search(C)!=-1?1:0,o=t.search(k)!=-1?1:0,u=t.search(L)!=-1?1:0,a=new Date,f=q(t,M),e=""+e,l=f.length,c,h,p;e:for(c=0;c<l;c++){h=f[c];if(h===""){continue e}if(e.length==0){break}switch(h){case"/":case".":case" ":case"-":case",":case":":e=e.substr(1);break;case"d":if(e.search(/^(3[01]|[12][0-9]|0[1-9])/)!=-1){n=e.substr(0,2);e=e.substr(2);break}else{return false};case"j":if(e.search(/^(3[01]|[12][0-9]|[1-9])/)!=-1){n=+e.match(/^(3[01]|[12][0-9]|[1-9])/)[0];e=e.substr(e.match(/^(3[01]|[12][0-9]|[1-9])/)[0].length);break}else{return false};case"D":case"l":p=Z.fullDays.concat(Z.dayAbbrs);if(m.imported){p=p.concat(m.fullDays).concat(m.dayAbbrs)}for(var d=0;d<p.length;d++){if((new RegExp("^"+p[d],"i")).test(e)){e=e.substr(p[d].length);continue e}}break;case"N":case"w":if(e.search(h=="N"?/^([1-7])/:/^([0-6])/)!=-1){e=e.substr(1)}break;case"S":if(e.search(/^(st|nd|rd|th)/i)!=-1){e=e.substr(2)}break;case"W":if(e.search(/^([1-9]|[1234[0-9]|5[0-3])/)!=-1){e=e.substr(e.match(/^([1-9]|[1234[0-9]|5[0-3])/)[0].length)}break;case"M":case"F":p=Z.fullMonths.concat(Z.monthAbbrs);if(m.imported){p=p.concat(m.fullMonths).concat(m.monthAbbrs)}for(var d=0;d<p.length;d++){if(e.search(new RegExp("^"+p[d],"i"))!=-1){e=e.substr(p[d].length);r=(d+12)%12+1;continue e}}return false;case"m":p=/^(1[012]|0[1-9])/;if(e.search(p)!=-1){r=+e.substr(0,2);e=e.substr(2);break}else{return false};case"n":p=/^(1[012]|[1-9])/;if(e.search(p)!=-1){r=+e.match(p)[0];e=e.substr(e.match(p)[0].length);break}else{return false};case"t":if(e.search(/2[89]|3[01]/)!=-1){e=e.substr(2);break}else{return false};case"Y":if(e.search(/^(\d{4})/)!=-1){i=e.substr(0,4);e=e.substr(4);break}else{return false};case"y":if(e.search(/^(0[0-9]|[1-9][0-9])/)!=-1){i=e.substr(0,2);i=+i<50?"20"+String(i):"19"+String(i);e=e.substr(2);break}else{return false};default:e=e.substr(h.length)}}if(s&&n===false||o&&r===false||u&&i===false){return false}if(s&&o&&u&&+n>lt(+r-1,+i)){return false}return{d:s?+n:false,m:o?+r:false,y:u?+i:false}};var vt=function(e){var t;if(e.parentNode&&e.parentNode.tagName.toLowerCase()=="label"){t=e.parentNode}else{var n=document.getElementsByTagName("label");for(var r=0;r<n.length;r++){if(n[r]["htmlFor"]&&n[r]["htmlFor"]==e.id||n[r].getAttribute("for")==e.id){t=n[r];break}}}if(t&&!t.id&&e.id){t.id=e.id+"_label"}return t};var mt=function(){if(typeof window.fdLocale=="object"){m={titles:fdLocale.titles,fullMonths:fdLocale.fullMonths,monthAbbrs:fdLocale.monthAbbrs,fullDays:fdLocale.fullDays,dayAbbrs:fdLocale.dayAbbrs,firstDayOfWeek:"firstDayOfWeek"in fdLocale?fdLocale.firstDayOfWeek:0,rtl:"rtl"in fdLocale?!!fdLocale.rtl:false,imported:true}}else if(!m){m=Z}};var gt=function(){mt();var e;for(e in o){if(!o[e].created){continue}o[e].updateTable()}};var yt=function(e){return!(!e||!e.tagName||!(e.tagName.toLowerCase()=="input"&&(e.type=="text"||e.type=="hidden")||e.tagName.toLowerCase()=="select"))};var bt=function(e){mt();if(c===null){c=St()}if(!e.formElements){if(t){throw"No form elements stipulated within initialisation parameters"}return}e.id=e.id&&e.id in e.formElements?e.id:"";e.enabledDates=false;e.disabledDates=false;var n={d:0,m:0,y:0},i=false,s=0,u=0,f,h,p,d,v,m,y;for(d in e.formElements){v=document.getElementById(d);if(!yt(v)){if(t){throw"Element '"+d+"' is of the wrong type or does not exist within the DOM"}return false}if(!e.formElements[d].match(O)){if(t){throw"Element '"+d+"' has a date format that does not contain either a day (d|j), month (m|F|n) or year (y|Y) part: "+e.formElements[d]}return false}if(!e.id){e.id=d}e.formElements[d].defaultVal=v.tagName=="select"?v.selectedIndex||0:v.defaultValue;f={value:e.formElements[d]};f.d=f.value.search(C)!=-1;f.m=f.value.search(k)!=-1;f.y=f.value.search(L)!=-1;if(f.d){n.d++}if(f.m){n.m++}if(f.y){n.y++}if(v.tagName.toLowerCase()=="select"){var b=v.options;if(f.d&&f.m&&f.y){i=false;e.enabledDates={};e.disabledDates={};for(y=0;y<b.length;y++){m=dt(b[y].value,f.value);if(m&&m.y&&!(m.m===false)&&m.d){p=m.y+""+W(m.m)+W(m.d);if(!i){i=p}e.enabledDates[p]=1;if(!s||+p<+s){s=p}if(!u||+p>+u){u=p}}}if(!e.cursorDate&&i){e.cursorDate=i}e.disabledDates[s]=u}else if(f.m&&f.y){for(y=0;y<b.length;y++){m=dt(b[y].value,f.value);if(m.y&&!(m.m===false)){p=m.y+""+W(m.m);if(!s||+p<+s){s=p}if(!u||+p>+u){u=p}}}s+=""+"01";u+=""+lt(+u.substr(4,2)-1,+u.substr(0,4))}else if(f.y){for(y=0;y<b.length;y++){m=dt(b[y].value,f.value);if(m.y){if(!s||+m.y<+s){s=m.y}if(!u||+m.y>+u){u=m.y}}}s+=""+"0101";u+=""+"1231"}}}if(!(n.d==1&&n.m==1&&n.y==1)){if(t){throw"Could not find all of the required date parts within the date format for element: "+v.id}return false}e.rangeLow=G(e.rangeLow||false);e.rangeHigh=G(e.rangeHigh||false);e.cursorDate=G(e.cursorDate||false);if(s&&(!e.rangeLow||+e.rangeLow<+s)){e.rangeLow=s}if(u&&(!e.rangeHigh||+e.rangeHigh>+s)){e.rangeHigh=u}h={formElements:e.formElements,id:e.id,staticPos:!!(e.staticPos||e.nopopup),positioned:e.positioned&&document.getElementById(e.positioned)?e.positioned:"",rangeLow:e.rangeLow&&String(e.rangeLow).search(_)!=-1?e.rangeLow:"",rangeHigh:e.rangeHigh&&String(e.rangeHigh).search(_)!=-1?e.rangeHigh:"",statusFormat:e.statusFormat||T,noFadeEffect:!!e.staticPos?true:!!e.noFadeEffect,dragDisabled:g||!!e.staticPos?true:!!e.dragDisabled,bespokeTabIndex:e.bespokeTabindex&&typeof e.bespokeTabindex=="number"?parseInt(e.bespokeTabindex,10):0,bespokeTitles:e.bespokeTitles||a||{},finalOpacity:e.finalOpacity&&typeof e.finalOpacity=="number"&&e.finalOpacity>20&&e.finalOpacity<=100?parseInt(+e.finalOpacity,10):!!e.staticPos?100:l,hideInput:!!e.hideInput,noToday:!!e.noTodayButton,showWeeks:!!e.showWeeks,fillGrid:!!e.fillGrid,constrainSelection:"constrainSelection"in e?!!e.constrainSelection:true,cursorDate:e.cursorDate&&String(e.cursorDate).search(_)!=-1?e.cursorDate:"",labelledBy:vt(v),describedBy:e.describedBy&&document.getElementById(e.describedBy)?e.describedBy:r&&document.getElementById(r)?r:"",callbacks:e.callbackFunctions?e.callbackFunctions:{},highlightDays:e.highlightDays&&e.highlightDays.length&&e.highlightDays.length==7?e.highlightDays:[0,0,0,0,0,1,1],disabledDays:e.disabledDays&&e.disabledDays.length&&e.disabledDays.length==7?e.disabledDays:[0,0,0,0,0,0,0],bespokeClass:e.bespokeClass?" "+e.bespokeClass:""};o[e.id]=new Y(h);if("disabledDates"in e&&!(e.disabledDates===false)){o[e.id].setDisabledDates(e.disabledDates)}if("enabledDates"in e&&!(e.enabledDates===false)){o[e.id].setEnabledDates(e.enabledDates)}o[e.id].callback("create",o[e.id].createCbArgObj())};var wt=function(e){return!e||!(e in o)?false:o[e].visible};var Et=function(){var e;for(e in o){if(o.hasOwnProperty(e)){o[e].changeHandler()}}};var St=function(){var e="Webkit Moz ms O".split(" "),t=document.createElement("div"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",MSTransition:"msTransitionEnd",OTransition:"oTransitionEnd",transition:"transitionEnd"},r;for(r in n){if(t.style[r]!==undefined){h=n[r];break}}if(!h){return false}if(t.style.animationName){return true}for(var i=0;i<e.length;i++){if(t.style[e[i]+"AnimationName"]!==undefined){return true}}return false};X(window,"unload",st);X(window,"load",function(){setTimeout(Et,0)});if(H){j(document.documentElement,"oldie")}return{addEvent:function(e,t,n){return X(e,t,n)},removeEvent:function(e,t,n){return V(e,t,n)},stopEvent:function(e){return $(e)},show:function(e){return it(e,false)},hide:function(e){return rt(e)},createDatePicker:function(e){bt(e)},destroyDatePicker:function(e){ot(e)},cleanUp:function(){tt()},printFormattedDate:function(e,t,n){return pt(e,t,n)},setDateFromInput:function(e){if(!e||!(e in o))return false;o[e].setDateFromInput()},setRangeLow:function(e,t){if(!e||!(e in o)){return false}o[e].setRangeLow(G(t))},setRangeHigh:function(e,t){if(!e||!(e in o)){return false}o[e].setRangeHigh(G(t))},setBespokeTitles:function(e,t){if(!e||!(e in o)){return false}o[e].setBespokeTitles(t)},addBespokeTitles:function(e,t){if(!e||!(e in o)){return false}o[e].addBespokeTitles(t)},parseDateString:function(e,t){return dt(e,t)},setGlobalOptions:function(e){R(e)},setSelectedDate:function(e,t){if(!e||!(e in o)){return false}o[e].setSelectedDate(G(t))},dateValidForSelection:function(e,t){if(!e||!(e in o))return false;return o[e].canDateBeSelected(t)},addDisabledDates:function(e,t){if(!e||!(e in o))return false;o[e].addDisabledDates(t)},setDisabledDates:function(e,t){if(!e||!(e in o))return false;o[e].setDisabledDates(t)},addEnabledDates:function(e,t){if(!e||!(e in o))return false;o[e].addEnabledDates(t)},setEnabledDates:function(e,t){if(!e||!(e in o))return false;o[e].setEnabledDates(t)},disable:function(e){if(!e||!(e in o))return false;o[e].disableDatePicker()},enable:function(e){if(!e||!(e in o))return false;o[e].enableDatePicker()},setCursorDate:function(e,t){if(!e||!(e in o))return false;o[e].setCursorDate(G(t))},getSelectedDate:function(e){return!e||!(e in o)?false:o[e].returnSelectedDate()},loadLanguage:function(){gt()},setDebug:function(e){t=!!e},dateToYYYYMMDDStr:function(e){return G(e)}}}()
$(document).on('star_component_init', function() {

	// Lazy load any configured images
	// Add "data-below-fold" attribute to lazy-loaded images that are off-screen (so we can determine when Chartbeat should load – see chartbeat.js)
	$('img[data-original]').each(function() {
		if ($.belowthefold(this, {threshold : 400, container : window})) $(this).attr('data-below-fold', 'true');
	}).lazyload({
		failure_limit: 40,
		threshold: 400,
		skip_invisible: false,
		load: function() { $(this).removeAttr('data-original').attr('data-lazy-loaded', 'true'); }
	});

});
var Carousel = {

	init: function(carousel) {
		$(carousel).removeAttr('data-init-me');
		var ul = $(carousel).prev('ul.carousel-pages');
		var pages = ul.children('li');
		var width = pages.first().width();
		var mode = typeof $(carousel).attr('data-mode') != 'undefined' ? $(carousel).attr('data-mode') : 'default';

		if (mode == 'ribbon')
			ul.css('width', width * pages.length);

		if (pages.length) {
			var pipWidth = 0;
			$(carousel).find('span.arrow, span.pip').each(function() { pipWidth += $(this).width(); });

			if (pipWidth > width) {
				$(carousel).addClass('numeric-controls').find('span.pip').remove().end().find('span.arrow.previous').after($('<span class="numeric"><strong>1</strong> / ' + pages.length + '</span>'));
			}

			$(carousel).find('span.arrow').on('click', function(e) {
				var current = pages.filter('.active');
				var direction = $(this).hasClass('next') ? 1 : ($(this).hasClass('previous') ? -1 : 0);
				var index = pages.index(current) + direction;
				if (index < 0) index = pages.length - 1;
				if (index >= pages.length) index = 0;
				current.removeClass('active');
				pages.eq(index).addClass('active');

				if ($(carousel).hasClass('numeric-controls'))
					$(carousel).find('span.numeric').find('strong').text(index + 1);
				else
					$(carousel).find('span.pip').filter('.active').removeClass('active').end().eq(index).addClass('active');

				if (mode == 'ribbon')
					ul.animate({ 'marginLeft' : width * -index }, 200);

			});
		}
	}

};

$(document).on('star_component_init', function() {
	$('.carousel-bar[data-init-me]').each(function() { Carousel.init(this); });
});
/* photo_gallery */

$(document).on('star_component_init', function() {

	$('.photo-gallery[data-init-me]').each(function() {
		$(this).removeAttr('data-init-me');
		var slides = $(this).find('ul.thumbnails').children('li');
		var _this = $(this);

		var attachSlideClicks = function(gallery) {
			gallery.find('.carousel-pages').find('img').on('click', function() {
				var gallery = $(this).closest('.carousel-pages');
				var defaultImg = $(this).attr('src');
				var title = gallery.attr('data-title');
				var url = gallery.attr('data-url');

				var ids = typeof gallery.attr('data-image-ids') != 'undefined' ? gallery.attr('data-image-ids').replace(/(^\[|\]$)/g, '').split('][') : null;
				var images = typeof gallery.attr('data-image-uris') != 'undefined' ? gallery.attr('data-image-uris').replace(/(^\[|\]$)/g, '').split('][') : null;
				var credits = typeof gallery.attr('data-image-credits') != 'undefined' ? gallery.attr('data-image-credits').replace(/(^\[|\]$)/g, '').split('][') : null;
				var captions = typeof gallery.attr('data-image-captions') != 'undefined' ? gallery.attr('data-image-captions').replace(/(^\[|\]$)/g, '').split('][') : null;
				var sidebar_path = typeof gallery.attr('data-sidebar') != 'undefined' ? gallery.attr('data-sidebar') : '';

				// Build the lightbox HTML
				var html = $('<div class="photo-gallery-lightbox"/>');
				var container = $('<div class="container float-clear"/>');

				var heading = $('<div class="heading float-clear"/>').append(
					$('<p class="headline">' + title + '</p>')
				).append(
					$('<ul class="buttons float-clear"/>').append(
						$('<li/>').append(
							$('<div class="facebook-like-button"><div class="fb-like" data-href="' + url + '" data-send="false" data-layout="button_count" data-width="100" data-show-faces="false" data-font="arial"></div></div>')
						)
					).append(
						$('<li/>').append(
							$('<div class="twitter-tweet-button"><a href="https://twitter.com/share" class="twitter-share-button" data-lang="en" data-text="' + title + '" data-url="' + url + '" data-via="torontostar" data-count="none">Tweet</a></div>')
						)
					).append(
						$('<li/>').append(
							$('<div class="google-plusone-button"><div class="g-plusone" data-size="medium" data-annotation="none" data-href="' + url + '"/></div>')
						)
					).append(
						$('<li class="close-box"><span>Close</span></li>')
					)
				);

				setTimeout(function() {
					if (typeof FB!='object') return;
					FB.XFBML.parse($('.photo-gallery-lightbox').get(0));
					twttr.widgets.load();
					gapi.plusone.go($('.photo-gallery-lightbox').get(0));
				}, 0);

				var slideshow = $('<div class="slideshow float-clear"/>').append(
					$('<ul/>').append(
						$('<li/>').addClass('loading')
					)
				);

				var content = $('<div class="content float-clear"/>').append(slideshow).append(
					$('<div/>').addClass('caption').addClass('float-clear').append(
						$('<div/>').addClass('info').addClass('float-clear').append(
							$('<p/>').addClass('counter').append('Photo: <span>?</span>')
						).append(
							$('<p/>').addClass('credit').html('&nbsp;')
						)
					).append(
						$('<p/>').addClass('description').html('Loading...')
					)
				);

				var sidebar = $('<div class="sidebar"/>');

				html.append(heading).append(container.append(content).append(sidebar));

				// Open the lightbox
				html.dialog({
		      modal: true,
		      width: 990,
		      autoOpen: false,
		      resizable: false,
		      draggable: false,
		      zIndex: 999999,
		      create: function(event) {
		      	$(event.target).parent().css('position', 'fixed');
		      	$(event.target).parent().find(".ui-dialog-titlebar").remove();
		      },
		      open: function(event, ui) {
		      	var _this = $(this);
		      	$(this).find('.close-box').on('click', function() { _this.dialog('close'); });
						ARPG.openDialog(html, ids, images, credits, captions, sidebar_path, defaultImg);				
		      },
		      close: function(event, ui) {
						sidebar.find('script').remove();
		      	$(this).dialog('destroy').remove();
		      	$(document).off('keyup', ARPG.changeSlide);
		     	}
			  }).dialog('open');

			});
		};

		attachSlideClicks(_this);

		if (slides.length) {

			$(this).find('.slider-arrow').on('click', function(e) {
				var current = slides.filter('.active');
				var direction = $(this).hasClass('next') ? 1 : ($(this).hasClass('previous') ? -1 : 0);
				var index = slides.index(current) + direction;
				if (index < 0) index = slides.length - 1;
				if (index >= slides.length) index = 0;
				current.removeClass('active');
				slides.eq(index).addClass('active');
			});

			$(this).find('.thumbnail-slider').find('img').on('click', function(e) {
				var src = $(this).attr('src');
				var headline = $(this).attr('alt');
				var url = $(this).attr('data-url');
				var new_ids = $(this).attr('data-image-ids');
				var new_uris = $(this).attr('data-image-uris');
				var new_credits = $(this).attr('data-image-credits');
				var new_captions = $(this).attr('data-image-captions');
				var side = $(this).attr('data-sidebar');
				var abst = $(this).attr('data-abst');
				var images = $(this).attr('data-images').replace(/(\[|\])/g, '').split(',');

				// Reset parts of the carousel
				var bar = _this.find('.carousel-bar');
				bar.find('span.arrow').off('click');
				bar.find('span.pip, span.numeric').remove().end().removeClass('numeric-controls');
				bar.find('span.arrow.previous').after($('<span class="loading">Loading</span>'));
				_this.find('.carousel-pages').find('li').remove().end().append(
					$('<li/>').append($('<img src="' + src + '" alt="Loading..."/>'))
				);

				// Preload the images for this slideshow, then add them to the DOM and re-init the carousel
				// Looks convoluted, but all images will load before giving the slideshow over to the user
				var loaded = 0;
				var imgBuffer = $('<ul class="carousel-pages float-clear"/>').attr('data-title', headline).attr('data-image-ids', new_ids).attr('data-image-uris', new_uris).attr('data-image-credits', new_credits).attr('data-image-captions', new_captions).attr('data-sidebar', side).attr('data-url', url);
				var pipBuffer = $('<div/>');
				for (var i = 0; i < images.length; i++) {
			    (function(img) {
		        images[img] = ($("<img/>")
	            .attr("src", images[img]+ "?" + new Date().getTime())
	            .load(function() {
                loaded++;
                if (loaded == images.length) {
     							for (var j = 0; j < images.length; j++) {
     								imgBuffer.append(
     									$('<li/>').addClass(j == 0 ? 'active' : '').append(
     										images[j].attr('alt', 'Image ' + (j + 1) + ' of ' + images.length)
     									).append(
     										$('<span>zoom</span>')
     									)
     								);
     								pipBuffer.append($('<span class="pip">' + (j + 1) + '</span>').addClass(j == 0 ? 'active' : ''));
     							}
									_this.find('.carousel-pages').replaceWith(imgBuffer);
									bar.find('span.loading').replaceWith(pipBuffer.children());
									attachSlideClicks(_this);
									Carousel.init(bar);
                }
	            })
		        );
			    })(i);
				}

				// Update the headline, abstract, etc. 
				var info = _this.find('div.info');
				var info_headline = info.find('p.headline');
				var info_abst = info.find('p.abstract');
				var info_social = info.find('div.social');

				info_headline.empty().append($('<a href="' + url + '">' + headline + '</a>'));
				if (abst.length) {
					if (info_abst.length) {
						info_abst.empty().text(abst);
					} else {
						info_headline.after('<p class="abstract">' + abst + '</p>');
					}
				} else {
					info_abst.remove();
				}

				if (info_social.length) {

					info_social.find('div.facebook-like-button').empty().append(
						$('<div class="fb-like" data-href="' + url + '" data-send="false" data-layout="button_count" data-width="100" data-show-faces="false" data-font="arial"></div>')
					);

					info_social.find('div.twitter-tweet-button').empty().append(
						$('<a href="https://twitter.com/share" class="twitter-share-button" data-lang="en" data-text="' + headline + '" data-url="' + url + '" data-via="torontostar" data-count="none">Tweet</a>')
					);

					info_social.find('div.google-plusone-button').empty().append(
						$('<div class="g-plusone" data-size="medium" data-annotation="none" data-href="' + url + '"/>')
					);

					setTimeout(function() {
						if (typeof FB!='object') return;
						FB.XFBML.parse(info_social.get(0));
						twttr.widgets.load();
						gapi.plusone.go(info_social.get(0));
					}, 0);
				}

				$(this).closest('.thumbnail-slider').find('img.active').removeClass('active').end().end().addClass('active');

			});

		}
	});

});

/* /photo_gallery */
/* pinwheel */

$(document).on('star_component_init', function() {

	$('.pinwheel-box[data-init-me]').each(function() {
		var entityDecode = function(val) { return $('<div/>').html(val).text(); };
		var pinwheel = $(this);

		pinwheel.removeAttr('data-init-me');

		var pinwheelData = {
			image: typeof pinwheel.attr('data-image') != 'undefined' ? entityDecode(pinwheel.attr('data-image')) : '',
			credit: typeof pinwheel.attr('data-credit') != 'undefined' ? entityDecode(pinwheel.attr('data-credit')) : '',
			headline: typeof pinwheel.attr('data-headline') != 'undefined' ? entityDecode(pinwheel.attr('data-headline')) : '',
			url: typeof pinwheel.attr('data-url') != 'undefined' ? entityDecode(pinwheel.attr('data-url')) : '',
			text: typeof pinwheel.attr('data-text') != 'undefined' ? entityDecode(pinwheel.attr('data-text')) : ''
		};

		pinwheel.find('.pinwheel-image, .more-link').on('click', function() {
			var html = $('<div class="pinwheel-lightbox"/>');
			var container = $('<div class="container float-clear"/>');

			var image = $('<div class="pinwheel-image"/>').append(
				$('<img src="' + pinwheelData.image + '" alt="' +  pinwheelData.headline + '" />')
			);

			var text = $('<div class="pinwheel-text"/>').append(
				$('<ul class="buttons float-clear"/>').append(
					$('<li class="close-box"><span>Close</span></li>')
				)
			).append(
				$('<p class="headline">' + pinwheelData.headline + '</p>')
			).append(
				pinwheelData.text.length ? $('<div class="abstract">' + pinwheelData.text + '</div>') : ''
			).append(
				pinwheelData.url.length ? $('<div class="more-link"><a href="' + pinwheelData.url + '">Read More</a></div>') : ''
			);

			if (pinwheelData.url.length) {
				text.find('.close-box').before(
					$('<li/>').append(
						$('<div class="facebook-like-button"><div class="fb-like" data-href="' + pinwheelData.url + '" data-send="false" data-layout="button_count" data-width="100" data-show-faces="false" data-font="arial"></div></div>')
					)
				);
				text.find('.close-box').before(
					$('<li/>').append(
						$('<div class="twitter-tweet-button"><a href="https://twitter.com/share" class="twitter-share-button" data-lang="en" data-text="' + pinwheelData.headline + '" data-url="' + pinwheelData.url + '" data-via="torontostar" data-count="none">Tweet</a></div>')
					)
				);
				text.find('.close-box').before(
					$('<li/>').append(
						$('<div class="google-plusone-button"><div class="g-plusone" data-size="medium" data-annotation="none" data-href="' + pinwheelData.url + '"/></div>')
					)
				);

				setTimeout(function() {
					if (typeof FB!='object') return;
					FB.XFBML.parse($('.pinwheel-lightbox').get(0));
					twttr.widgets.load();
					gapi.plusone.go($('.pinwheel-lightbox').get(0));
				}, 0);
			}

			html.append(container.append(image).append(text));

			if (pinwheelData.credit.length)
				html.append('<div class="footer-credit">by <span>' + pinwheelData.credit + '</span></div>');

			html.dialog({
	      modal: true,
	      width: 990,
	      autoOpen: false,
	      resizable: false,
	      draggable: false,
	      zIndex: 999999,
	      create: function(event) {
	      	$(event.target).parent().css('position', 'fixed');
	      	$(event.target).parent().find(".ui-dialog-titlebar").remove();
	      },
	      open: function(event, ui) {
	      	var _this = $(this);
	      	$(this).find('.close-box').on('click', function() { _this.dialog('close'); });
	      	$(this).find('a').filter(function() {
						return this.hostname && this.hostname !== location.hostname;
					}).attr('target', '_blank');
	      },
	      close: function(event, ui) { $(this).dialog('destroy').remove() }
		  }).dialog('open');

		});

	});

});

/* /pinwheel */
$(document).on('star_component_init', function() {
	
	$('.graphic-lightbox-cta[data-init-me]').each(function() {
		var entityDecode = function(val) { return $('<div/>').html(val).text(); };
		var lightbox = $(this);

		lightbox.removeAttr('data-init-me');

		var contentMatch = lightbox.html().match(/<!--([\S\s]*?)-->/);

		if (contentMatch) {

			var lightboxData = {
				headline: typeof lightbox.attr('data-headline') != 'undefined' ? entityDecode(lightbox.attr('data-headline')) : '',
				caption: typeof lightbox.attr('data-caption') != 'undefined' ? entityDecode(lightbox.attr('data-caption')) : '',
				storyURL: typeof lightbox.attr('data-story-url') != 'undefined' ? entityDecode(lightbox.attr('data-story-url')) : '',
				storyTitle: typeof lightbox.attr('data-story-title') != 'undefined' ? entityDecode(lightbox.attr('data-story-title')) : '',
				credit: typeof lightbox.attr('data-credit') != 'undefined' ? entityDecode(lightbox.attr('data-credit')) : '',
				content: contentMatch[1]
			};

			lightbox.find('.cta-container').on('click', function() {
				//trackGraphicLightboxClick(lightbox.attr('data-comp-path'));
				
				var html = $('<div class="graphic-lightbox"/>');
				var container = $('<div class="container float-clear"/>');

				var heading = $('<div class="heading float-clear"/>').append(
					$('<p class="headline">' + lightboxData.headline + '</p>')
				).append(
					$('<ul class="buttons float-clear"/>').append(
						$('<li class="close-box"><span>Close</span></li>')
					)
				);

				html.append(heading).append(container.append(
					$('<div/>').addClass('graphic-wrapper')
				));

				if (lightboxData.caption.length || lightboxData.storyURL.length) {
					var caption = $('<div class="caption float-clear"/>');
					if (lightboxData.caption.length)
						caption.append($('<p>' + lightboxData.caption + '</p>'));
					if (lightboxData.storyURL.length)
						caption.append($('<p><strong>Related:</strong> <a href="' + lightboxData.storyURL + '">' + lightboxData.storyTitle + '</a></p>'));
					html.append(caption);
				}

				if (lightboxData.credit.length)
					html.append('<div class="footer-credit">' + lightboxData.credit + '</div>');

				html.dialog({
					modal: true,
					width: 1022,
					autoOpen: false,
					resizable: false,
					draggable: false,
					zIndex: 999999,
					create: function(event) {
						$(event.target).parent().css('position', 'fixed');
						$(event.target).parent().find(".ui-dialog-titlebar").remove();

						// Resize the graphic container area to make the largest possible ligthbox for a given user's screen
						var dialogHeight = $(event.target).parent().height();
						var containerHeight = $(event.target).parent().find('.container').height();
						var newHeight = $(window).height() - 200 - (dialogHeight - containerHeight);
						if (newHeight < 400) newHeight = 400;
						$(event.target).parent().find('.container').css('height', newHeight + 'px');

					},
					open: function(event, ui) {
						var _this = $(this);
						$(this).find('.close-box').on('click', function() { _this.dialog('close'); });
						$(this).find('a').filter(function() {
							return this.hostname && this.hostname !== location.hostname;
						}).attr('target', '_blank');

						// The content has to be added this way because jQuery strips out <script> tags when using their methods
						// This is done after all other parts of the lightbox are complete
						$(this).find('.graphic-wrapper').get(0).innerHTML = lightboxData.content;

					},
					close: function(event, ui) { $(this).dialog('destroy').remove() }
					}).dialog('open');

			});

		}

	});

});
/* article */

var Article = {
	defaultFontSize: 14,
	intervalId: null,

	hideCaptchaFrame: function() { setTimeout(function() { $('iframe[src="about:blank"]').hide(); }, 100); },
	killCaptchaFrame: function() { $('iframe[src="about:blank"]').remove(); },

	loadCaptcha: function() {
		Article.killCaptchaFrame();
		Recaptcha.create("6LeG9NISAAAAAJFPw9O2nBv-8oC3B8mt2oUHBSjl", 'recaptcha_div', { theme : "clean" });
		Article.hideCaptchaFrame();
	},

	setEmailMessage: function(form, msg, type) {
		form.find('fieldset.message').text(msg).removeClass('success').removeClass('error').addClass(type).show();
	},
	
	setReportErrorMessage: function(form, msg, type) {
		form.find('fieldset.message').text(msg).removeClass('success').removeClass('error').addClass(type).show();
	},

	muteMainartVideo: function(id) {
		brightcove.getExperience(id).getModule(APIModules.VIDEO_PLAYER).mute(true);
	},

    turndownMainartVideo: function(id) {
        brightcove.getExperience(id).getModule(APIModules.VIDEO_PLAYER).setVolume(.5);
    },

    // Variable to refernece the video list in a video page player
    videoPage: {},

    // Retrieve videos related to the "single" video specified
    loadRelatedVideos: function(id) {

    	// If the API is not in flash mode (iPad, etc.) we must present the "old" player, which uses no fancy API Javascript
    	// Otherwise, carry on with the related video logic
		if (brightcove.api.getExperience(id)) {
			var playerDOM = $('<object/>').addClass('BrightcoveExperience').attr('id', id)
				.append($('<param/>').attr('name', 'bgcolor').attr('value', '#f9f9f9'))
				.append($('<param/>').attr('name', 'width').attr('value', '542'))
				.append($('<param/>').attr('name', 'height').attr('value', '307'))
				.append($('<param/>').attr('name', 'htmlFallback').attr('value', 'true'))
				.append($('<param/>').attr('name', 'playerID').attr('value', '2071349530001'))
				.append($('<param/>').attr('name', 'playerKey').attr('value', 'AQ~~,AAAAuO4KaJE~,gatFNwSKdGDmDpIYqNJ-fTHn_c4z_LH_"'))
				.append($('<param/>').attr('name', 'isVid').attr('value', 'true'))
				.append($('<param/>').attr('name', 'isUI').attr('value', 'true'))
				.append($('<param/>').attr('name', 'wmode').attr('value', 'transparent'))
				.append($('<param/>').attr('name', 'dynamicStreaming').attr('value', 'true'))
				.append($('<param/>').attr('name', 'secureConnections').attr('value', (document.location.protocol == 'https:' ? 'true' : 'false')))
				.append($('<param/>').attr('name', 'videoID').attr('value', id.replace('player-', '')))
				.append($('<param/>').attr('name', 'includeAPI').attr('value', 'true'));
			$('#' + id).closest('.article-story').find('.video-placeholder').css('height', '307px').empty().append($(playerDOM));
			brightcove.createExperiences();
		} else {
	    	BCMAPI.token = 'K4YeC-5GUQ7wbdfYgF0ZhUW6AW-pbspywoZIX974aQg3NhfImuYy-Q..';

	    	// Initialize event handlers
	    	brightcove.getExperience(id).getModule(APIModules.CONTENT).addEventListener(BCContentEvent.MEDIA_COLLECTION_LOAD, Article.loadCollection);
	    	brightcove.getExperience(id).getModule(APIModules.VIDEO_PLAYER).addEventListener(BCMediaEvent.CHANGE, Article.updateVideoPageTitle);

	    	// Save some video player references for use in callbacks
			Article.videoPage.id = id;
			Article.videoPage.list = brightcove.getExperience(id).getModule(APIModules.EXPERIENCE).getElementByID('videoList');
			Article.videoPage.content = brightcove.getExperience(id).getModule(APIModules.CONTENT);

			// Setup search API params
			// The video ID is found in the player's ID
			var params = {};
			params.video_id = id.replace('player-', '');
			params.video_fields = 'id,name,shortDescription';
			params.custom_fields = 'adcategory';

			// Callback used to conduct another search for other videos based on return results
			BCMAPI.callback = 'Article.getVideoInfo';

			BCMAPI.find('find_video_by_id', params);
		}
		if (typeof window.onTemplateLoaded=='function') window.onTemplateLoaded(id);
	},

	// Determine a video's ad category, which is then used to search for other videos in the same category
	getVideoInfo: function(json) {
		var category = '';
		if (typeof json.customFields != 'undefined' && typeof json.customFields.adcategory != 'undefined') {
			category = json.customFields.adcategory;
		}

		// Callback used to add results to the player
		BCMAPI.callback = 'Article.getRelatedVideos';

		// Setup default search API params
		var params = {};
		params.video_fields = 'id,name,shortDescription';
		params.custom_fields = 'adcategory';
		params.page_size = 8;
		params.sort_by = 'PLAYS_TRAILING_WEEK:DESC';

		// Use the category in another API search
		// If no category found, get the most popular videos instead
    	if (category.length)
			params.any = 'adcategory:' + category;
   		BCMAPI.find('search_videos', params);

    },

    // Set the player with a list of videos based on the search results
    getRelatedVideos: function(json) {
    	if (typeof Article.videoPage.list != 'undefined' && typeof json.items != 'undefined') {
    		var videos = [];
    		// Make the 1st video the originally-defined one
    		videos.push(Article.videoPage.id.replace('player-', ''));
			// Add each search result video ID to the list to be loaded
			for (var i = 0; i < json.items.length; i++) {
				var id=json.items[i].id+'';// keep them all strings for array membership check
				if ($.inArray(id, videos)<0) {// skip duplicates
					videos.push(id);
				}
			}
			// Load this list of videos into the player
			Article.videoPage.content.getMediaInGroupAsynch(videos);
    	}
    },

    // Handler/Callback when a list of video IDs is given to the player and loaded asynchronously
    loadCollection: function(e) {
    	var mediaDTOs = new Array();
		for (var i = 0; i < e.mediaCollection.mediaCount; i++) {
			mediaDTOs[i] = Article.videoPage.content.getMedia(e.mediaCollection.mediaIds[i]);
		}
		Article.videoPage.list.setData(mediaDTOs);
    },

    updateVideoPageTitle: function(e) {
    	$('.article-headline h1').html(e.media.displayName);
    	$('.article-headline h2.subheadline').html(e.media.shortDescription);
    },

    //Expore this story bar positiond to fixed when scrolled
    exploreThisStoryBar: function(){
    	var $el = $('.explore-this-story');
    	if (!$el.length) return; // don't bother if the bar is not there
        
        var top = $el.offset().top;
        var $explorerBarItems = $('.explore-this-story-items');

        // set 'explore this story' toolbar width to a fixed value, same as parent container width
        $el.width($el.parent().width());

		$('.explore-menu').click(function () {
		    $explorerBarItems.is(":hidden") ? $explorerBarItems.fadeIn(): $explorerBarItems.slideUp();
		});

		//scroll to comments section
		$('.labelcomment').click(function(){
		    var divLoc = $('#comments-section').offset();
         	$('html, body').animate({scrollTop: divLoc.top}, "slow");
		});
		//tooltip helper
		$(function(){
   		$('.text-decrease,.text-increase,.print-article,.email-article,.explore-menu,.labelcomment').hover(function(e){ // Hover event
 		    var titleText = $(this).attr('title');
		    $(this)
		      .data('tiptext', titleText)
		      .removeAttr('title');
		 
		  $('<p class="tooltip"></p>')
		    .text(titleText)
		    .appendTo('body')
		    .css('top', (e.pageY - 10) + 'px')
		    .css('left', (e.pageX + 20) + 'px')
		    .fadeIn('slow');
		 
		  }, function(){ // Hover off event
		 
		    $(this).attr('title', $(this).data('tiptext'));
		    $('.tooltip').remove();
		 
		  }).mousemove(function(e){ // Mouse move event
		 
		    $('.tooltip')
		      .css('top', (e.pageY - 10) + 'px')
		      .css('left', (e.pageX + 20) + 'px');
		 
		 });

		});

	    $(window).scroll(function () {
	        var pos = $(window).scrollTop();
	        if(pos > top  && !$el.hasClass('fixed')) {
	            $el.addClass('fixed');
	            //$(".thestar-image").css('margin-top','60px');
	            $(".mainart").css('margin-top','60px');
	            $explorerBarItems.slideUp();
	        } else if (pos < top  && $el.hasClass('fixed')) {
	            $el.removeClass('fixed');
	            //$(".thestar-image").css('margin-top','0px');
	            $(".mainart").css('margin-top','0px');
	            $explorerBarItems.slideUp();
	           
	    	}
       	});
    }
};

$(document).ready(function() {

	// Google A/B testing
	if ($('body.type-story').length && $('#google-multivar').length && (typeof currentState != 'undefined' && currentState.toLowerCase() == 'disabled')) {
		
		// HTML of the CTA to be injected
		var html = $('<div/>').addClass('multivar float-clear').append(
			$('<p/>').append(' Get breaking news stories sent to your inbox as they happen.')
		).append(
			$('<a/>').addClass('button').attr('href', 'http://www3.thestar.com/static/newsletter/email_registration.html').append('Sign Up').click(function() { _gaq.push(['_trackEvent', 'ArticleMultivarTest', 'ClickedCTA']); })
		);

		// Look for the query string param "cta" with possible values bottom/right/explore
		// Inject a Sign Up CTA in a certain location given the param
		if (_star_qs_params['cta']) {
			if (_star_qs_params['cta'] == 'bottom') {
				$('.story-footer').prepend(html.addClass('bottom'));
			} else if (_star_qs_params['cta'] == 'right') {
				$('.right-rail > .toprightrail').append(html.addClass('right'));
			} else if (_star_qs_params['cta'] == 'explore') {
				$('.article-story-body').before(html.addClass('explore'));
			}
		}

	}

	// Text-resizing
	if ($('.article-story-body').length) {
		var fontsize = $.cookie("article-font-size");
		if (fontsize != null)
			$('.article-story-body').css('font-size', fontsize + 'px');
	}

   if ($('#explore-comments-count').length) {

      var apiUrl = "https://api.viafoura.com/v2/" + window.location.host;
      var apiEncodedUri = encodeURIComponent(window.location.pathname);
   
      $.ajax({ url: apiUrl +  "/pages/" + apiEncodedUri + "?verb=get",
               async: false,
               type: "GET",
               dataType: "jsonp",
               success : function(data) {
                  $('#explore-comments-count').text(data.result.num_replies);
              }
      });
   }



	// Activate Facebook share button functionality
	$('div.facebook-share').on('click', function(e) {
		if (typeof FB!='object') return;
		FB.ui({ method: 'feed', link: $(this).attr('data-href') }, function(response) {
			if (response && response.post_id)
				facebookShare();
		});
	});

	$('.explore-this-story .icopyright a').on('click', function(e) {
		e.preventDefault();
		
		var html = $('<div class="email-lightbox"/>').append(
			$('<div class="container float-clear"/>').append(
				$('<div class="logobar float-clear"/>').append(
					$('<div class="logo"/>').text('thestar.com')
				).append(
					$('<div class="close-box"/>').text('Close')
				)
			).append(
				$('<div class="article-info"/>').append(
					$('<h2/>').text('Republish with iCopyright')
				)
			)
		).append(
			$('<div class="iframe-container"/>').append(
				$('<iframe/>').attr('src', $(this).attr('href')).css('height', 480)
			)
		);

		html.dialog({
      modal: true,
      width: 548,
      autoOpen: false,
      resizable: false,
      draggable: false,
      zIndex: 999999,
      create: function(event) {
      	$(event.target).parent().css('position', 'fixed');
      	$(event.target).parent().find(".ui-dialog-titlebar").remove();
      },
      open: function(event, ui) {
      	var _this = $(this);
      	$(this).find('.close-box').on('click', function() { _this.dialog('close'); });
      },
      close: function(event, ui) { $(this).dialog('destroy').remove() }
	  }).dialog('open');

	});

	// Setup clicking for Reddit buttons (and tracking for Omniture)
	$('.reddit-button a').on('click', function(e) {
		e.preventDefault();
		if (typeof redditButton != 'undefined')
	 		redditButton();
	 	window.open('http://www.reddit.com/submit?url=' + encodeURIComponent($(this).attr('data-url')));
	});

	$('.article-toolbar .print-article, .explore-this-story-items .print-article').on('click', function() {

		// Track this in Omniture
		printArticle($(this).text());

		window.open($(this).attr('data-printurl'));
	});

	$('.article-toolbar .text-increase, .article-toolbar .text-decrease, .explore-this-story-items .text-increase, .explore-this-story-items .text-decrease').on('click', function() {
		var fontsize = parseInt($('.article-body > .feature div.article-story .article-story-body').css('font-size').replace('px', ''), 10);
		fontsize = fontsize + ($(this).hasClass('text-increase') ? 1 : -1);
		if (fontsize > Article.defaultFontSize + 4) fontsize = Article.defaultFontSize + 4;
		if (fontsize < Article.defaultFontSize - 4) fontsize = Article.defaultFontSize - 4;
		$('.article-body > .feature div.article-story .article-story-body').css('font-size', fontsize + 'px');
		$.cookie('article-font-size', String(fontsize), { expires: 1095, path: '/' });
	});

	$('.article-toolbar .text-reset').on('click', function() {
		$('.article-body > .feature div.article-story .article-story-body').css('font-size', Article.defaultFontSize + 'px');
		$.cookie('article-font-size', null, { path: '/' });
	});

	$('.article-toolbar .email-article, .explore-this-story-items .email-article').on('click', function() {

		// Track this in Omniture
  		emailArticle($(this).text());

		var email_url = $(this).attr("data-emailurl");
	 	$('<div class="email-lightbox"/>').load(email_url, function() {
	 		$(this).dialog({
	      modal: true,
	      width: 462,
	      autoOpen: false,
	      resizable: false,
	      draggable: false,
	      zIndex: 999999,
	      create: function(event) {
	      	var _this = $(this);
	      	$(event.target).parent().css('position', 'fixed');
	      	$(event.target).parent().find(".ui-dialog-titlebar").remove();
	      	
	      	$.getScript('https://www.google.com/recaptcha/api/js/recaptcha_ajax.js', function(data, textStatus, jqxhr) { 
						Article.loadCaptcha();
					});

					$('form#sendtoafriend').on('submit', function(e) {
						e.preventDefault();
						var form = $(this);
						form.find('fieldset.message').empty().hide().removeClass('error').removeClass('success');

						var storyHeadline = unescape($.trim(form.find('#storyHeadline').val()));
						var storySubheadline = unescape($.trim(form.find('#storySubheadline').val()));
						var subject = 'Story from the thestar.com: ' + storyHeadline;
						var default_mailbodyintro = ($.trim(form.find('#yourname').val()).length ? $.trim(form.find('#yourname').val()) : $.trim(form.find('#emailfrom').val())) + ' has shared a story with you from thestar.com:';

						$.ajax({
							type: 'GET',
							url: form.find('#postUrl').val(),
							dataType: 'json',
							data: {
								yourname : $.trim(form.find('#yourname').val()),
								emailfrom : $.trim(form.find('#emailfrom').val()),
								emailto: $.trim(form.find('#emailto').val()),
								emailbody: $.trim(form.find('#emailbody').val()),
								recaptcha_response_field: form.find('input#recaptcha_response_field').val(),
								recaptcha_challenge_field: form.find('input#recaptcha_challenge_field').val(),
								emailsubject: subject,
								story_Headline: storyHeadline,
								story_Subheadline: storySubheadline,
								stroy_AbsoluteUrl: form.find('#storyAbsoluteUrl').val(),
								emailbodyintro: default_mailbodyintro
							},
							success : function(data) {
								switch (data.msg) {
							    case 'success': 
							    	Article.setEmailMessage(form, 'Your email has been sent successfully!', 'success');
							    	form.find('fieldset.humans').remove();
							    	setTimeout(function() { _this.dialog('close'); }, 3000);
						        break; 
							    case 'email error': 
							    	Article.loadCaptcha();
										Article.setEmailMessage(form, 'ERROR: please verify the info you provided is correct.', 'error');
						        break; 
							    case 'captcha error': 
							    	Article.loadCaptcha();
									Article.setEmailMessage(form, 'ERROR: please try the ReCaptcha again.', 'error');
						        break;
						    };
							},
							error: function(jqXHR, textStatus, errorThrown) {
								Article.loadCaptcha();
								Article.setEmailMessage(form, 'ERROR: the server encountered an issue. Please try again.', 'error');
							}
						});

					});

	      },
	      open: function(event, ui) {
	      	var _this = $(this);
	      	$(this).find('.close-box').on('click', function() { _this.dialog('close'); });
	      },
	      close: function(event, ui) {
	      	$(this).dialog('destroy').remove();
	      	Article.killCaptchaFrame();
	      }
		  }).dialog('open');
	 	});
	});	
	
	$('.article-toolbar .error-article, .explore-this-story-items .error-article').on('click', function() {
		var error_url = $(this).attr("data-errorurl");
	 	$('<div class="email-lightbox"/>').load(error_url, function() {
	 		$(this).dialog({
	      modal: true,
	      width: 462,
	      autoOpen: false,
	      resizable: false,
	      draggable: false,
	      zIndex: 999999,
	      create: function(event) {
	      	var _this = $(this);
	      	$(event.target).parent().css('position', 'fixed');
	      	$(event.target).parent().find(".ui-dialog-titlebar").remove();
	      	
	      	$.getScript('https://www.google.com/recaptcha/api/js/recaptcha_ajax.js', function(data, textStatus, jqxhr) { 
						Article.loadCaptcha();
					});

					$('form#reportanerror').on('submit', function(e) {
						e.preventDefault();
						var form = $(this);
						form.find('fieldset.message').empty().hide().removeClass('error').removeClass('success');

						var storyHeadline = unescape($.trim(form.find('#storyHeadline').val()));
						$.ajax({
							type: 'GET',
							url: form.find('#postUrl').val(),
							dataType: 'json',
							data: {
								yourname : $.trim(form.find('#yourname').val()),
								emailfrom : $.trim(form.find('#emailfrom').val()),
								phone: $.trim(form.find('#phone').val()),
								emailbody: $.trim(form.find('#emailbody').val()),
								recaptcha_response_field: form.find('input#recaptcha_response_field').val(),
								recaptcha_challenge_field: form.find('input#recaptcha_challenge_field').val(),
								topic: $.trim(form.find('#issue').val()),
								story_Headline: storyHeadline,
								stroy_AbsoluteUrl: form.find('#storyAbsoluteUrl').val()
							},
							success : function(data) {
								switch (data.msg) {
							    case 'success': 
							    	Article.setReportErrorMessage(form, 'Your email has been sent successfully!', 'success');
							    	form.find('fieldset.humans').remove();
							    	setTimeout(function() { _this.dialog('close'); }, 3000);
						        break; 
							    case 'email error': 
							    	Article.loadCaptcha();
										Article.setReportErrorMessage(form, 'ERROR: please verify the info you provided is correct.', 'error');
						        break; 
							    case 'captcha error': 
							    	Article.loadCaptcha();
									Article.setReportErrorMessage(form, 'ERROR: please try the ReCaptcha again.', 'error');
						        break;
						    };
							},
							error: function(jqXHR, textStatus, errorThrown) {
								Article.loadCaptcha();
								Article.setReportErrorMessage(form, 'ERROR: the server encountered an issue. Please try again.', 'error');
							}
						});

					});

	      },
	      open: function(event, ui) {
	      	var _this = $(this);
	      	$(this).find('.close-box').on('click', function() { _this.dialog('close'); });
	      },
	      close: function(event, ui) {
	      	$(this).dialog('destroy').remove();
	      	Article.killCaptchaFrame();
	      }
		  }).dialog('open');
	 	});
	});

    $('.thestar-image .buyphoto-article').on('click', function() {
        var buyphoto_url = $(this).attr("data-buyphotourl");
        $('<div class="email-lightbox"/>').load(buyphoto_url, function() {
            $(this).dialog({
                modal: true,
                width: 462,
                autoOpen: false,
                resizable: false,
                draggable: false,
                zIndex: 999999,
                create: function(event) {
                    var _this = $(this);
                    $(event.target).parent().css('position', 'fixed');
                    $(event.target).parent().find(".ui-dialog-titlebar").remove();

                    $.getScript('https://www.google.com/recaptcha/api/js/recaptcha_ajax.js', function(data, textStatus, jqxhr) {
                        Article.loadCaptcha();
                    });

                    $('form#buyarticlephoto').on('submit', function(e) {
                        e.preventDefault();
                        var form = $(this);
                        form.find('fieldset.message').empty().hide().removeClass('error').removeClass('success');

                        var storyHeadline = unescape($.trim(form.find('#storyHeadline').val()));
                        var imageCaption = unescape($.trim(form.find('#storyImageCaption').val()));
                        $.ajax({
                            type: 'GET',
                            url: form.find('#postUrl').val(),
                            dataType: 'json',
                            data: {
                                yourname : $.trim(form.find('#yourname').val()),
                                emailfrom : $.trim(form.find('#emailfrom').val()),
                                phone: $.trim(form.find('#phone').val()),
                                photosize: form.find('#psize').val(),
                                usefor: $("input[name=use]:checked").val(),
                                recaptcha_response_field: form.find('input#recaptcha_response_field').val(),
                                recaptcha_challenge_field: form.find('input#recaptcha_challenge_field').val(),
                                story_Headline: storyHeadline,
                                story_AbsoluteUrl: form.find('#storyAbsoluteUrl').val(),
                                story_ImageCaption: imageCaption,
                                story_ImageUrl: form.find('#storyImageUrl').val(),
                                story_ImageID: form.find("#storyImageID").val()
                            },
                            success : function(data) {
                                switch (data.msg) {
                                    case 'success':
                                        Article.setReportErrorMessage(form, 'Thank you for your interest in Toronto Star photographs. You will be contacted during normal business hours to discuss placing an order.', 'success');
                                        form.find('fieldset.humans').remove();
                                        setTimeout(function() { _this.dialog('close'); }, 10000);
                                        break;
                                    case 'email error':
                                        Article.loadCaptcha();
                                        Article.setReportErrorMessage(form, 'ERROR: please verify the info you provided is correct.', 'error');
                                        break;
                                    case 'captcha error':
                                        Article.loadCaptcha();
                                        Article.setReportErrorMessage(form, 'ERROR: please try the ReCaptcha again.', 'error');
                                        break;
                                };
                            },
                            error: function(jqXHR, textStatus, errorThrown) {
                                Article.loadCaptcha();
                                Article.setReportErrorMessage(form, 'ERROR: the server encountered an issue. Please try again.', 'error');
                            }
                        });

                    });

                },
                open: function(event, ui) {
                    var _this = $(this);
                    $(this).find('.close-box').on('click', function() { _this.dialog('close'); });
                },
                close: function(event, ui) {
                    $(this).dialog('destroy').remove();
                    Article.killCaptchaFrame();
                }
            }).dialog('open');
        });
    });

    //Fixes the overlapping of comments and insidethestar related articles on left rail for short articles
    if ($('body.articlepage.type-story').length && $('#comments-section').length && $('.inside-thestar').length) {
        var left_rail_offset = $('.inside-thestar').parent().offset();
        var comments_offset = $('#comments-section').offset();
        var inside_star_height = $('.inside-thestar').parent().outerHeight(true);
        var overlap_diff = ((left_rail_offset.top + inside_star_height) - comments_offset.top);
        if (overlap_diff > 0) {
            $('#comments-section').css('margin-top', overlap_diff + 18);
        }
    }
    Article.exploreThisStoryBar(); // init wherever the bar is present

    // if main art has both video and image, push the image up to 6 paras down
    if (($('.mainart .thestar-video').length || $('.mainart .youtube_video').length) && $('.mainart .thestarimage').length && $('div.feature div.combinedtext').length) {
        if ($('div.feature div.combinedtext').length>5) $('.mainart .thestarimage').insertAfter($('div.feature div.combinedtext').eq(5));
        else $('.mainart .thestarimage').insertAfter($('div.feature div.combinedtext').last());
    }
    $('div.thestar-image').filter(':hidden').show();

});

/* /article */
$(document).ready(function() {

	$('.article-body .feature .article-story .photo-gallery-lightbox').each(function() {
		var ids = typeof $(this).attr('data-image-ids') != 'undefined' ? $(this).attr('data-image-ids').replace(/(^\[|\]$)/g, '').split('][') : null;
		var images = typeof $(this).attr('data-image-uris') != 'undefined' ? $(this).attr('data-image-uris').replace(/(^\[|\]$)/g, '').split('][') : null;
		var credits = typeof $(this).attr('data-image-credits') != 'undefined' ? $(this).attr('data-image-credits').replace(/(^\[|\]$)/g, '').split('][') : null;
		var captions = typeof $(this).attr('data-image-captions') != 'undefined' ? $(this).attr('data-image-captions').replace(/(^\[|\]$)/g, '').split('][') : null;
		var sidebar_path = typeof $(this).attr('data-sidebar') != 'undefined' ? $(this).attr('data-sidebar') : '';
		var defaultImg = $(this).attr('data-default-image');
		ARPG.openDialog($(this), ids, images, credits, captions, sidebar_path, defaultImg);
	});	

});
/* article_related_video_gallery */

var ARVG = {

	players: {},

	animDuration: 400,

	vidWidth: 491,
	vidHeight: 278,

	animating: {},

	// Check to debounce any interactivity during animations
	isAnimated: function(id) {
		return (typeof ARVG.animating[id] == 'undefined' || !ARVG.animating[id]);
	},

	// Slide open the video gallery player and show all video thumbs
	openVideos: function(g, vid, id) {
		g.addClass('expanded');
		g.find('.brightcove-player').show().animate({ 'width': '491px' }, ARVG.animDuration, function() {
			g.addClass('show-extra');
			ARVG.setVideo(vid, id);
		});
	},

	// Slide the video play closed and return thumbnails to normal
	closeVideos: function(g, id) {
		if (ARVG.isAnimated(id)) {
			ARVG.animating[id] = true;
			g.removeClass('show-extra');
			g.find('li.active').removeClass('active');
			ARVG.clearVideo(id);
			g.find('.brightcove-player').animate({ 'width': '0' }, ARVG.animDuration, function() {
				$(this).hide();
				g.removeClass('expanded');
				ARVG.animating[id] = false;
			});
		}
	},

	//Set the video to be shown in the player
	setVideo: function(vid, id) {
		ARVG.animating[id] = false;
		var bc = id.replace('arvg-', 'arvg-bc-');

		// If no player has been set up yet, add it to the DOM and initialize
		// Otherwise just load a new video into the existing player	
		if (typeof ARVG.players[bc] == 'undefined') {
			var playerDOM =
				$('<object/>').addClass('BrightcoveExperience').attr('id', bc)
					.append($('<param/>').attr('name', 'bgcolor').attr('value', '#f9f9f9'))
					.append($('<param/>').attr('name', 'width').attr('value', ARVG.vidWidth))
					.append($('<param/>').attr('name', 'height').attr('value', ARVG.vidHeight))
					.append($('<param/>').attr('name', 'htmlFallback').attr('value', 'true'))
					.append($('<param/>').attr('name', 'playerID').attr('value', '2071349530001'))
					.append($('<param/>').attr('name', 'playerKey').attr('value', 'AQ~~,AAAAuO4KaJE~,gatFNwSKdGDmDpIYqNJ-fTHn_c4z_LH_"'))
					.append($('<param/>').attr('name', 'isVid').attr('value', 'true'))
					.append($('<param/>').attr('name', 'isUI').attr('value', 'true'))
					.append($('<param/>').attr('name', 'wmode').attr('value', 'transparent'))
					.append($('<param/>').attr('name', 'autoStart').attr('value', 'true'))
					.append($('<param/>').attr('name', 'dynamicStreaming').attr('value', 'true'))
					.append($('<param/>').attr('name', 'secureConnections').attr('value', (document.location.protocol == 'https:' ? 'true' : 'false')))
					.append($('<param/>').attr('name', '@videoPlayer').attr('value', vid))
					.append($('<param/>').attr('name', 'includeAPI').attr('value', 'true'))
					.append($('<param/>').attr('name', 'templateLoadHandler').attr('value', 'ARVG.onTemplateLoaded'));
		  $('#' + id).closest('.section.articlerelatedvideogallery').find('.video-placeholder').empty().append($(playerDOM));
		  brightcove.createExperiences();
		} else {
			ARVG.players[bc].getModule(APIModules.MENU).closeMenuPage();
			ARVG.players[bc].getModule(APIModules.VIDEO_PLAYER).loadVideo(vid);
		}

	},

	// Stop and remove the current video
	clearVideo: function(id) {
		var bc = id.replace('arvg-', 'arvg-bc-');
		if (typeof ARVG.players[bc] != 'undefined') {
			ARVG.players[bc].getModule(APIModules.VIDEO_PLAYER).stop();
			ARVG.players[bc].getModule(APIModules.EXPERIENCE).unload();
			delete ARVG.players[bc];
			$('#' + id).closest('.section.articlerelatedvideogallery').find('.video-placeholder').empty();
		}
	},

	// When the Brightcove player loads, save a uniquely identified reference to it
	onTemplateLoaded: function(id) {
	    //bcTrack.onTemplateLoaded(id);
		ARVG.players[id] = brightcove.getExperience(id);
	}

};

$(document).ready(function() {

	// Give each video gallery a unique id and bind events
	$('.article-related-video-gallery').each(function() {
		var id = $(this).attr('id');
		var gallery = $(this).closest('.section.articlerelatedvideogallery');

		// Handler to close the expanded gallery
	  gallery.find('.brightcove-player .close-box').on('click', function() { ARVG.closeVideos(gallery, id); });

		// Handler to open the expanded gallery and/or set the current video to be played
		$(this).find('.video-list li').on('click', function() {
			if (ARVG.isAnimated(id) && !$(this).hasClass('active')) {
				ARVG.animating[id] = true;

				// Set active thumbnail
				gallery.find('li.active').removeClass('active');
				$(this).addClass('active');

				// Update the social buttons for the given video
				gallery.find('div.facebook-like-button').empty().append(
					$('<div class="fb-like" data-href="' + $(this).attr('data-video-url') + '" data-send="false" data-layout="button_count" data-width="100" data-show-faces="false" data-font="arial"></div>')
				);
				gallery.find('div.twitter-tweet-button').empty().append(
					$('<a href="https://twitter.com/share" class="twitter-share-button" data-lang="en" data-text="' + $(this).attr('data-video-title') + '" data-url="' + $(this).attr('data-video-url') + '" data-via="torontostar" data-count="none">Tweet</a>')
				);
				gallery.find('div.google-plusone-button').empty().append(
					$('<div class="g-plusone" data-size="medium" data-annotation="none" data-href="' + $(this).attr('data-video-url') + '"/>')
				);

				setTimeout(function() {
					if (typeof FB!='object') return;
					FB.XFBML.parse(gallery.get(0));
					twttr.widgets.load();
					gapi.plusone.go(gallery.get(0));
				}, 0);

				// Add the current video's description
				gallery.find('.brightcove-player .description').empty().text($(this).attr('data-video-desc'));

				// Set the current video (slide out the player first if not already expanded)
				var video_id = $(this).attr('data-video-id');
				if (gallery.hasClass('expanded'))
					ARVG.setVideo(video_id, id);
				else
					ARVG.openVideos(gallery, video_id, id);

			}
		});
	});
});

/* /article_related_video_gallery */
var ARPG = {

	// Remove the current selection/highligh. Sometimes the overlay links can get highlighted if the user clicks too fast
	// and the highlight covers have the slideshow image.
	doubleClickFix: function() {
		if (window.getSelection) {
		  if (window.getSelection().empty) {
		    window.getSelection().empty();
		  } else if (window.getSelection().removeAllRanges) {
		    window.getSelection().removeAllRanges();
		  }
		} else if (document.selection) {
		  document.selection.empty();
		}
	},

	// Load in someslides and initialize the slideshow
	slideshowInit: function(slideshow, slides) {

		// Add the slides to the DOM
		slideshow.find('ul').replaceWith(slides);

		// Get the width, number of slides and the index of the active slide
		var show = slideshow.find('ul');
		var slides = show.find('li');
		var w = slides.first().width();
		var index = slides.index(slides.filter('.active'));

		// Set the <ul> width to cintain all alised and move it to the active slide
		show.css({
			'width': w * slides.length,
			'marginLeft' : w * -index
		});

		// Add previous/next buttons to the slideshow
		slideshow.append(
			$('<span/>').addClass('arrow').addClass('previous').append('Previous')
		).append(
			$('<span/>').addClass('arrow').addClass('next').append('Next')
		);

		// Update info for initial slide
		ARPG.updateSlideInfo(slides.eq(index));
		ARPG.recordSiteCat(index);

		// Events
		slideshow.find('span.arrow').bind( "click", ARPG.changeSlide);
        //attaching the keyboard navigation
        $(document).on('keyup.keyboard',$.proxy(ARPG.changeSlide, slideshow));


		// Clean up
		show.find('img').removeAttr('data-active');
	},

	// Change the current slide, either going forward or back
	changeSlide: function(e) {
		ARPG.doubleClickFix();
		var ul = null;

        var keycode_leftarrow,keycode_rightarrow, keycode;
        keycode_leftarrow = 37;
        keycode_rightarrow = 39;
        keycode = e.keyCode;

		// Figure out which direction we're sliding and find the list of slides
		if (e.type == 'click' || e.type == 'keyup') {
			ul = $(this).closest('.slideshow').find('ul');
            direction = ($(this).hasClass('next') || keycode === keycode_rightarrow)? 1 : (($(this).hasClass('previous')|| keycode === keycode_leftarrow) ? -1 : 0);
        }




		var slides = ul.children('li');
		var width = slides.first().width();
		var current = slides.filter('.active');
		// Determine the index of the new active slide
		var index = slides.index(current) + direction;
		if (index < 0) index = slides.length - 1;
		if (index >= slides.length) index = 0;

		current.removeClass('active');
		slides.eq(index).addClass('active');
		ul.animate({ 'marginLeft' : width * -index }, 200, function() {
			ARPG.updateSlideInfo(slides.eq(index));
			ARPG.recordSiteCat(index);
		});
	},

	// Update the info (caption, credit, etc.) to reflect the current slide
	updateSlideInfo: function(slide) {
		var slides = slide.parent().children('li');
		var index = slides.index(slide);
		var caption = slide.closest('.content').children('.caption');

		caption.find('.counter').html('Photo: <span>' + (index + 1) + '</span> of ' + slides.length);
		caption.find('.credit').html(slide.children('img').attr('data-credit'));
		caption.find('.description').html(slide.children('img').attr('data-caption'));
	},

	// Set s.prop19 (photoID) and capture Next/Prev Image Click Event (event20)
	recordSiteCat: function(imageIndex) {
		// imagesIds contains the asset IDs of the slideshow in a comma-separated list of values
		// asset ID of photo viewed in the slideshow, photoIds[imageIndex], to set s.prop19 and s.eVar19 to
		if (typeof imagesIds != 'undefined' && imagesIds.length && typeof s.prop20 != 'undefined' && s.prop20.length) {
			var photoIds = imagesIds.split(',');
			var slideshowID = s.prop20;
	    SiteCatalyst.registerEvent({
		  events: 'event20',
	      eVariables: 'eVar2,eVar3,eVar4,eVar5,eVar6,eVar7,eVar8,eVar9,eVar10,prop18,eVar18,prop19,eVar19,prop20,eVar20,prop32,eVar32',
	      eValues: new Array(s.eVar2, s.eVar3, s.eVar4, s.eVar5, s.eVar6, s.eVar7, s.eVar8, s.eVar9, s.eVar10, s.prop18, s.eVar18, photoIds[imageIndex], photoIds[imageIndex], slideshowID, slideshowID, s.prop32, s.eVar32),
	      title: 'Image Click'
	    });
	  }

	},

	// Open a dialog where the slideshow will be setup and displayed – params are:
	// html: jquery object which is the HTML that makes up the lightbox
	// ids: array of image identifiers
	// images: array of image src paths
	// credits: array of credits for each image
	// captions: array of captions for each image
	// sidebar_path: URL to access the sidebar selector of the article page via AJAX
	// defaultImg: URL of the default starting image of the slideshow
	openDialog: function(html, ids, images, credits, captions, sidebar_path, defaultImg) {
		var slideshow = html.find('.slideshow');
		var sidebar = html.find('.sidebar');

		// If preroll exists, initialize it and set it to die after 15 seconds
		// A preroll "exists" when such an element is there and bigger than 10x10 (some ad providers inject 1x1 shims)
		var preroll = slideshow.find('.preroll');
		if (preroll.length) {
			preroll.find('iframe, img, embed, object').each(function() {
				if ($(this).width() > 10 && $(this).height() > 10) {
					preroll.fadeIn();
					setTimeout(function() {
						preroll.fadeOut(function() {
							$(this).remove();
						});
					}, 15000);
					return false;
				}
			});
		}

		// Load the slideshow photo data
		if (ids != null && images != null && credits != null && captions != null) {

		    // Preload the images for this slideshow, then add them to the DOM and re-init the carousel
				// Looks convoluted, but all images will load before giving the slideshow over to the user
				// Each image will also store its caption, credit and status as the default image
				var loaded = 0;
				var imgBuffer = $('<ul/>');
				for (var i = 0; i < images.length; i++) {
			    (function(img) {
		        images[img] = ($('<img/>')
	            .attr('src', images[img]+ '?' + new Date().getTime())
	            .attr('data-credit', credits[img])
	            .attr('data-caption', captions[img])
	            .attr('data-active', defaultImg.indexOf('/' + ids[img]) != -1 ? 'true' : 'false')
	            .load(function() {
                loaded++;
                if (loaded == images.length) {
     							for (var j = 0; j < images.length; j++) {
     								imgBuffer.append(
     									$('<li/>').addClass(images[j].attr('data-active') == 'true' ? 'active' : '').append(
     										images[j].attr('alt', 'Image ' + (j + 1) + ' of ' + images.length)
     									)
     								);
     							}

     							// Executes after all images are loaded
     							// Delay allows for the preroll to initialize (reduces flickering)
     							setTimeout(function() {
     								ARPG.slideshowInit(html.find('.slideshow'), imgBuffer);
     							}, 500);

                }
	            })
		        );
			    })(i);
				}

				// Load the sidebar popular galleries and big box ad
				if (sidebar_path.length) {
					sidebar.load(sidebar_path, function() {
						if (typeof currentState != 'undefined') {
							var bigbox = sidebar.find('.bigbox');

							if (typeof bigbox.attr('data-ad-path') != 'undefined') {

								// Get and prepare the src attribute for the AdTech javascript
								var url = (bigbox.attr('data-ad-path')).replace('\'+window.adgroupid+\'', window.adgroupid).replace('\'+new Date().getTime()+\'', new Date().getTime()).replace('\'+offset+\'', offset).replace('\'+kvaam+\'', kvaam).replace('\'+kvuid+\'', kvuid);

								// Use postscribe to avoid document.write issues in ad code
								postscribe(bigbox.empty().get(0), '<script src="' + url + '"><\/script>');

							}
						} else {
							sidebar.find('.bigbox').empty().append($('<img src="/etc/designs/thestar/images/placeholder/300x250.png"/>'));
						}
					});
				}

		}

	},

	// Sets up the contents of a lightbox and then shows it – params are:
	// trigger: the element that triggered this callback; e.g., $(this)
	// gallery: the overall containing element that has the data- attributes needed to populate the slideshow
	startLightbox: function(trigger, gallery) {

		// Get the image that triggered the lightbox
		// If there is none, check the mainart area, otherwise use the first photo in the list
		var defaultImg = '';
		var defaultCaption = '';
		if (trigger.find('img').length) {
			defaultImg = trigger.find('img').attr('src');
			defaultCaption = trigger.find('img').attr('alt');
		} else {
			if ($('.article-body .article-artwork .mainart img').length) {
				defaultImg = $('.article-body .article-artwork .mainart img').attr('src');
				defaultCaption = $('.article-body .article-artwork .mainart .caption .description').text();
			} else {
				defaultImg = gallery.find('img').first().attr('src');
				defaultCaption = gallery.find('img').first().attr('alt');
			}
		}

		// Build the lightbox HTML
		var html = $('<div class="photo-gallery-lightbox"/>');
		var container = $('<div class="container float-clear"/>');

		var heading = $('<div class="heading float-clear"/>').append(
			$('<h2 class="headline"><span>Photos:</span> ' + gallery.attr('data-title') + '</h2>')
		).append(
			$('<ul class="buttons float-clear"/>').append(
				$('<li class="close-box"><span>Close</span></li>')
			)
		);

		var slideshow = $('<div class="slideshow float-clear"/>').append(
			$('<ul/>').append(
				$('<li/>').addClass('loading')
			)
		);

		var content = $('<div class="content float-clear"/>').append(slideshow).append(
			$('<div/>').addClass('caption').addClass('float-clear').append(
				$('<div/>').addClass('info').addClass('float-clear').append(
					$('<p/>').addClass('counter').append('Photo: <span>?</span>')
				).append(
					$('<p/>').addClass('credit').html('&nbsp;')
				)
			).append(
				$('<p/>').addClass('description').html(defaultCaption)
			)
		);

		var sidebar = $('<div class="sidebar"/>');

		html.append(heading).append(container.append(content).append(sidebar));

		var ids = typeof gallery.attr('data-image-ids') != 'undefined' ? gallery.attr('data-image-ids').replace(/(^\[|\]$)/g, '').split('][') : null;
		var images = typeof gallery.attr('data-image-uris') != 'undefined' ? gallery.attr('data-image-uris').replace(/(^\[|\]$)/g, '').split('][') : null;
		var credits = typeof gallery.attr('data-image-credits') != 'undefined' ? gallery.attr('data-image-credits').replace(/(^\[|\]$)/g, '').split('][') : null;
		var captions = typeof gallery.attr('data-image-captions') != 'undefined' ? gallery.attr('data-image-captions').replace(/(^\[|\]$)/g, '').split('][') : null;
		var sidebar_path = typeof gallery.attr('data-sidebar') != 'undefined' ? gallery.attr('data-sidebar') : '';

		// Open the lightbox
		html.dialog({
			modal: true,
			width: 990,
			autoOpen: false,
			resizable: false,
			draggable: false,
			zIndex: 999999,
			create: function(event) {
				$(event.target).parent().css('position', 'fixed');
				$(event.target).parent().find(".ui-dialog-titlebar").remove();
			},
			open: function(event, ui) {
				var _this = $(this);
				$(this).find('.close-box').on('click', function() { _this.dialog('close'); });
				ARPG.openDialog(html, ids, images, credits, captions, sidebar_path, defaultImg);
			},
			close: function(event, ui) {
				sidebar.find('script').remove();
				$(this).dialog('destroy').remove();
			}
		}).dialog('open');

	}

};

$(document).ready(function() {


	$('ul.article-inset-list.photo-list > li, .article-related-photo-gallery > h2.heading > a').on('click', function() {
		ARPG.startLightbox($(this), $(this).closest('.article-related-photo-gallery'));
        return false;
	});

	$('.thestar-image .image-container').on('click', function() {
		ARPG.startLightbox($(this), $(this).closest('.image-container'));
	});

});
if (typeof jplayerinit != "undefined") {
  $(document).ready(jplayerinit);
}
/* bc_jq */

/*
jQuery plugin for Brightcove player

deps: $, global, BrightcoveExperiences

blame: VP
*/

;
 (function($){

	'use strict';

	var

	playerCount=0,

	defaultParams={
		playerID: '2071349530001',
		playerKey: 'AQ~~,AAAAuO4KaJE~,gatFNwSKdGDmDpIYqNJ-fTHn_c4z_LH_',
		width: 542,
		height: 307,
		bgColor: '#f9f9f9',
		wmode: 'transparent',
		videoID: null,
		htmlFallback: 'true',
		isVid: 'true',
		autoStart: 'false',
		isUI: 'true',
		includeAPI: 'true',
		dynamicStreaming: 'true',
		templateLoadHandler: "onTemplateLoaded",
		secureConnections: (window.location.protocol=='https:') ? 'true':'false'
	},

	createPlayer=function(opt){
		var params=$.extend({}, defaultParams, opt), obj=$('<object/>').attr('class', 'BrightcoveExperience');// class is important
		if (!('id' in params) || !params.id) params.id='player-'+(++playerCount);
		for (var p in params){
			var v=params[p];
			if (!v && v!=0) continue; // ignore empty params
			v+='';
			switch (p){
				case 'id':
					obj.attr('id', v);
					break;
				default:
					$('<param/>').attr('name', p).attr('value', v).appendTo(obj);
			}
		}
		return obj;
	},

	createExperiences=function(){
		if (typeof brightcove=='object' && typeof brightcove.createExperiences=="function") brightcove.createExperiences();
	};

	// check if a queryset contains auto-starting brightcove player and return a boolean
	$.fn.hasAutoStartBrightcove=function(){
		var has=false;
		this.each(function(){
			var $bc=$('object.BrightcoveExperience');
			if (!$bc.length) return false; // break 'each' loop
			$bc.each(function(){
				// 'autoStart' param in bc player somehow gets transformed into 'autoStart=true' entry in 'data' attribute
				var asp=$(this).find('param[name=autoStart]').attr('value')||'',
				data=$(this).attr('data')||'';
				if (asp.toLowerCase()=='true' || data.indexOf('autoStart=true')>=0){
					has=true;
					return false; // break
				}
			});
		});
		return has;
	};

	$.fn.attachBrightcove=function(opt){
		//changed=true;
		this.append(createPlayer(opt));
		createExperiences();
		return this;
	};

	$.fn.attachPlayer=$.fn.attachBrightcove;// keep it for now..


})(jQuery);


/* /bc_jq */
/* bc_ads */

(function($){

    'use strict';

	var dbg = function(content){
		if (('dbg' in $) && typeof $.dbg=='function') $.dbg("bc_ads: "+content);
	};

    // check global dependencies
    var deps="brightcove|APIModules".split("|");
    for (var i=0, n=deps.length; i<n; i++){
        if (!(deps[i] in window)){
            dbg(deps[i]+" not found!");
            return;
        }
    }

    // DFP branch
    if ('dfpConf' in window) {
        var bcDfpManager = {
            adUrl: function(isRva){
                var params = {
                    sz: (isRva)? dfpConf.rvaSize : dfpConf.videoSize,
                    iu: dfpConf.path,
                    ciu_szs: null,
                    impl: "s",
                    gdfp_req: 1,
                    env: "vp",
                    output: "xml_vast2",
                    unviewed_position_start: 1,
                    referrer_url: location.href.split('?')[0],
                    description_url: "",
                    correlator: dfpConf.uts
                },
                buf = [];
                for (var k in params){
                    var val = (null===params[k])? '':'='+params[k];
                    buf.push(k+val);
                }
                return location.protocol + dfpConf.baseUrl + '?' + buf.join('&');
            },
            setupPreroll: function(bcObjectId){
                var player = brightcove.getExperience(bcObjectId);
                if (!player) {
                    dbg("object id='"+bcObjectId+"' not found!");
                    return false;
                }
                var isRVA = $('#'+bcObjectId).is('.rva'),
                adUrl = bcDfpManager.adUrl(isRVA),
                modAdv = player.getModule(APIModules.ADVERTISING);
                dbg("Ad URL is "+adUrl);
                modAdv.setAdPolicy({adServerURL:adUrl, prerollAds:true, prerollAdKeys:null});
                return true;
            }
        };
        window.bcDfpManager = bcDfpManager;
        return;
    }

    // Adtech branch

    var adMap={
        "Rumble":           "http://adserver.adtechus.com/?advideo/3.0/5214.1/3378411/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "Entertainment":    "http://adserver.adtechus.com/?advideo/3.0/5214.1/3144154/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "Small Business":   "http://adserver.adtechus.com/?advideo/3.0/5214.1/3144155/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "GTA":              "http://adserver.adtechus.com/?advideo/3.0/5214.1/3144156/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "Automotive":       "http://adserver.adtechus.com/?advideo/3.0/5214.1/3144157/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "Travel":           "http://adserver.adtechus.com/?advideo/3.0/5214.1/3144158/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "Technology":       "http://adserver.adtechus.com/?advideo/3.0/5214.1/3144159/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "Sports":           "http://adserver.adtechus.com/?advideo/3.0/5214.1/3144160/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "Living":           "http://adserver.adtechus.com/?advideo/3.0/5214.1/3144161/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "Fashion":          "http://adserver.adtechus.com/?advideo/3.0/5214.1/3144162/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "News":             "http://adserver.adtechus.com/?advideo/3.0/5214.1/3144163/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "GlobalTV":         "http://adserver.adtechus.com/?advideo/3.0/5214.1/3144164/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "MasterGlass":      "http://adserver.adtechus.com/?advideo/3.0/5214.1/3144165/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "Business":         "http://adserver.adtechus.com/?advideo/3.0/5214.1/3144166/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "SponsoredSections":"http://adserver.adtechus.com/?advideo/3.0/5214.1/3144167/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "CityTV":           "http://adserver.adtechus.com/?advideo/3.0/5214.1/3144168/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "NewsFeature":      "http://adserver.adtechus.com/?advideo/3.0/5214.1/3144169/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "MVP":              "http://adserver.adtechus.com/?advideo/3.0/5214.1/3144170/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "RVA":              "http://adserver.adtechus.com/?advideo/3.0/5214.1/3246190/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "RVA_News":         "http://adserver.adtechus.com/?advideo/3.0/5214.1/3246191/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "RVA_GTA":          "http://adserver.adtechus.com/?advideo/3.0/5214.1/3246192/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "RVA_Business":     "http://adserver.adtechus.com/?advideo/3.0/5214.1/3246193/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "RVA_Entertainment":"http://adserver.adtechus.com/?advideo/3.0/5214.1/3246194/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "RVA_Life":         "http://adserver.adtechus.com/?advideo/3.0/5214.1/3246189/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "Test":             "http://adserver.adtechus.com/?advideo/3.0/5214.1/3144171/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "Worldvision":      "http://adserver.adtechus.com/?advideo/3.0/5214.1/3149958/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "Sourced":          "http://adserver.adtechus.com/?advideo/3.0/5214.1/3225691/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "Salutin":          "http://adserver.adtechus.com/?advideo/3.0/5214.1/3225696/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "Hume":             "http://adserver.adtechus.com/?advideo/3.0/5214.1/3225695/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "FirstReel":        "http://adserver.adtechus.com/?advideo/3.0/5214.1/3225694/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "FED":              "http://adserver.adtechus.com/?advideo/3.0/5214.1/3225692/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "Ellie":            "http://adserver.adtechus.com/?advideo/3.0/5214.1/3225693/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "DoubleTake":       "http://adserver.adtechus.com/?advideo/3.0/5214.1/3225697/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "AlbertaTravel":    "http://adserver.adtechus.com/?advideo/3.0/5214.1/3225576/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
        "Niagara":          "http://adserver.adtechus.com/?advideo/3.0/5214.1/3343132/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
	"DangersofCO":      "http://adserver.adtechus.com/?advideo/3.0/5214.1/3371580/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
	"Sony":             "http://adserver.adtechus.com/?advideo/3.0/5214.1/3402358/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;",
	"TravelDaytona":    "http://adserver.adtechus.com/?advideo/3.0/5214.1/3428316/0//cc=2;cors=yes;vidAS=PRE_ROLL;vidRT=VAST;vidRTV=2.0.1;"
    },

    bcAdManager = {

        defaultCategory: "News",

        defaultRVACategory: "RVA", // for RVA players only

        categoryExists: function(category){
            return (category in adMap);
        },

        getAdUrl: function(cat){
            if (bcAdManager.categoryExists(cat)) return adMap[cat];
            dbg("Ad category '"+cat+"' does not exist.");
            return '';
        },

        setPrerollUrl: function(bcObjectId, url){
            var player=brightcove.getExperience(bcObjectId);
            if (!player){
                dbg("object id='"+bcObjectId+"' not found!");
                return false;
            }
            if (!url){
                dbg("No ad URL.");
                return false;
            }
            dbg("Ad URL is "+url);
            var modAdv=player.getModule(APIModules.ADVERTISING);
            modAdv.setAdPolicy({adServerURL:url, prerollAds:true, prerollAdKeys:null});
            return true;
        },

        findAdCategory: function(bcObjectId){
            var cat='', player=brightcove.getExperience(bcObjectId);
            if (!player) return cat;
            var isRVA=$('#'+bcObjectId).is('.rva'),
            modExp=player.getModule(APIModules.EXPERIENCE),
            modVP=player.getModule(APIModules.VIDEO_PLAYER);
            cat=modExp.getPlayerParameter('adCategoryOverride') || modVP.getCurrentVideo().customFields.adcategory;
            if (isRVA && cat && cat.indexOf('RVA')!=0) {
                cat='RVA_'+cat;
            }
            if (!cat || !bcAdManager.categoryExists(cat)) {
                dbg("Ad category '"+cat+"' does not exist");
                cat= (isRVA) ? bcAdManager.defaultRVACategory : bcAdManager.defaultCategory;
                dbg("Default ad category '"+cat+"' is assumed");
            }
            else {
                dbg("Ad category is '"+cat+"'");
            }
            return cat;
        },

        setPrerollCategory: function(bcObjectId, cat){
            if (!cat || !bcAdManager.categoryExists(cat)) cat=bcAdManager.findAdCategory(bcObjectId);
            var url=bcAdManager.getAdUrl(cat);
            return bcAdManager.setPrerollUrl(bcObjectId, url);

            return false;
        }
    };

    window.bcAdManager = bcAdManager;

})(jQuery);

/* /bc_ads */
/* bc_track_v2 */

/*
Brightcove Video Tracking Version 2 - October 2014
See old bc_track for deprecated tracking. 

deps: $, global, BrightcoveExperiences, APIModules_all, bc_ads
*/
var bcTrack={
  ready: false,
  refreshed: [],
  trackers: {},
};

// tracker object constructor
bcTrack.Tracker=function(experienceID){

  this.experienceID=experienceID;

  this.bcExp = brightcove.getExperience(this.experienceID);
  this.modVP = this.bcExp.getModule(APIModules.VIDEO_PLAYER);
  this.modExp = this.bcExp.getModule(APIModules.EXPERIENCE);
  this.modCon = this.bcExp.getModule(APIModules.CONTENT);
  this.modAdv = this.bcExp.getModule(APIModules.ADVERTISING);

  this.adUrl = '';

  this.player=this.modExp.getPlayerName();
  this.title='';
  this.credit='';
  this.offset=0;
  this.duration=0;
  this.lastEvent='';

  this.isPlaying=false;
  this.lastPosition = 0; //to track in 15 s increments
  this.roundPos = 0; ////to track in 15 s increments
  this.isComplete=false; //becomes true at 95% complete

  this.currentVideoTitle = "";
  this.currentVideoId = "";
  this.currentVideoRefId = "";
  this.throttle = false; //When true, does not perform actions on Media PROGRESS
  this.timer = setInterval(function () { this.throttle = false; }, 1000); //Resets throttle every 1 second


  this.playVdoCount=0;
  this.notrack = $('#'+this.experienceID).is('.rva'); // do not track RVA video, it's for ads only!
  $.dbg('bc_track: Creating video tracking object ID: '+experienceID);

};

bcTrack.Tracker.prototype.setPreroll=function(){
  if ('bcDfpManager' in window){
    $.dbg("bc_track: setting up DFP preroll");
    window.bcDfpManager.setupPreroll(this.experienceID);
  }
  else if ('bcAdManager' in window) {
    $.dbg("bc_track: setting up Adtech preroll");
    window.bcAdManager.setPrerollCategory(this.experienceID);
  }
  return this;
};

bcTrack.Tracker.prototype.updateOffset=function(){
  this.offset=this.modVP.getVideoPosition();
}

bcTrack.Tracker.prototype.updateVideoStatus=function(){
  var vdo=this.modVP.getCurrentVideo();
  s.eVar37 = this.currentVideoTitle = vdo.displayName; //current video title
  s.eVar38 = this.player; //player name
  s.eVar39 = this.currentVideoId = vdo.id; //current video id
  s.eVar45 = this.currentVideoRefId = this.getVideoRefID();
}

bcTrack.Tracker.prototype.getPlayerInfo=function(){
  var o={
    experienceID: this.experienceID,
    playerID: this.modExp.getPlayerParameter('playerID'),
    player: this.player
  },
  vdo=this.modVP.getCurrentVideo();

  if (vdo){
    o.title=vdo.displayName;
    o.videoID=vdo.id;
    o.duration=Math.floor(this.modVP.getVideoDuration());
    o.offset=this.modVP.getVideoPosition();
  }
  return o;
}

bcTrack.Tracker.prototype.getVideoRefID=function(){
  var vdo=this.modVP.getCurrentVideo();
  return vdo.referenceId || "unknown";
};

bcTrack.Tracker.prototype.trackPlay=function(){ 
  if (!this.isPlaying) {
    this.updateVideoStatus();
    trackVideoEvents("event5");
    this.isComplete=false;
  }
  this.isPlaying=true;
  if (!bcTrack.ready) return;
  $.dbg('bc_track: TRACKING MEDIA/PLAY: "'+this.title+'" in '+this.experienceID);
}

bcTrack.getTrackerByVdoId=function(vdoId){
  var tr=null;
  for (var k in bcTrack.trackers){
    var tr=bcTrack.trackers[k], vdo=tr.modVP.getCurrentVideo(), id=vdo.id;
    if (id==vdoId) return tr;
  }
  return null;
};


bcTrack.mediaEventHandler=function(evt){
  var tr=bcTrack.getTrackerByVdoId(evt.media.id),// pick correct tracker based on video ID
  s=(typeof s_gi=='function' && s_account!=undefined)? s_gi(s_account):false;// get omniture instance
  if (!tr || !s) return;
  if (!tr.credit) tr.credit=(evt.media.customFields.credit==undefined)? 'unknown':evt.media.customFields.credit; // get source from the event
  
  switch (evt.type){

    case 'mediaProgress':
      if(tr.throttle) break;
      if (evt.position / evt.duration > 0.94 && !tr.isComplete) {
        trackVideoEvents("event7"); //Track Video complete, event7
        tr.isComplete = true;
      }else if (!tr.isComplete){
        tr.roundPos = Math.floor(evt.position);
        if (tr.lastPosition != tr.roundPos && tr.roundPos % 15 == 0){
          tr.lastPosition = tr.roundPos;
          s.products = ";;;;event6=15";
          trackVideoEvents("event6"); //Track Video time every 15 seconds, event6
        }
      }
      tr.throttle = true;
      break;

    case 'mediaChange':
      tr.setPreroll();
      tr.isPlaying=false;
      this.updateVideoStatus();
      tr.playVdoCount++;
      break;

    case 'mediaBegin':
      if (tr.notrack) break;
      // regenerate player if mediaChange missed on 1st video
      if (!tr.lastEvent && tr.playVdoCount==0 && $.inArray(tr.experienceID, bcTrack.refreshed)<0){
        $.dbg("bc_track: REFRESHING PLAYER "+tr.experienceID);
        var box=$('#'+tr.experienceID).parent(), html=box.html();
        bcTrack.trackers[tr.experienceID]=null;
        box.children().remove();
        $(html).appendTo(box);
        bcTrack.refreshed.push(tr.experienceID);
        return;
      }
      clearInterval(tr.timer);
      tr.timer = setInterval(function () { tr.throttle = false; }, 1000);
      tr.isComplete = false;
      break;

    case 'mediaPlay':
      if (!tr.notrack && !tr.isPlaying) {
        tr.trackPlay(); //Track Video View, event5
        tr.lastPosition = 0;
      }
      break;

    case 'mediaComplete':
      tr.isPlaying = false;
      clearInterval(tr.timer);
      break;

  }

  //.dbg("bc_track: MEDIA EVENT "+evt.type+" in "+$.repr(tr.getPlayerInfo())+"; previous event: "+(tr.lastEvent || 'none'));
  tr.lastEvent=evt.type;
};


bcTrack.adEventHandler=function(evt){
  $.dbg('bc_track: AD EVENT: '+evt.type);
};


bcTrack.onTemplateLoaded=function(experienceID) {

  $.dbg("bc_track: Executing bcTrack.onTemplateLoaded in "+experienceID);

  if ($('#'+experienceID).is('.adplayer')) {
    $.dbg('bc_track: Ignoring ad player '+experienceID);
    return;
  }
  
  if (typeof brightcove=='undefined' || typeof APIModules=='undefined') {
     $.dbg("bc_track: Object id='"+experienceID+"' not found!");
     $.dbg("brightcove: " + typeof brightcove);
    return; // no API or already registered
  }

  var tr=new bcTrack.Tracker(experienceID), evts=[];

  // bind media event handlers
  var a='CHANGE, BEGIN, COMPLETE, PLAY, STOP, PROGRESS'.split(/\W+/);
  for (var i=0, n=a.length; i<n; i++) {
    tr.modVP.addEventListener(BCMediaEvent[a[i]], bcTrack.mediaEventHandler);
    evts.push(BCMediaEvent[a[i]]);
  }
  // bind ad event handlers
  a='AD_CLICK, AD_START, AD_COMPLETE'.split(/\W+/);
  for (var i=0, n=a.length; i<n; i++) {
    tr.modAdv.addEventListener(BCAdvertisingEvent[a[i]], bcTrack.adEventHandler);
    evts.push(BCAdvertisingEvent[a[i]]);
  }
  $.dbg("bc_track: Binding "+evts.join(', ')+" event handlers in #"+experienceID);
  bcTrack.trackers[experienceID]=tr;

};


(function(w){
  if ('onTemplateLoaded' in w){
    var oldHandler=w.onTemplateLoaded,
    newHandler=function(experienceID){
      oldHandler(experienceID);
      bcTrack.onTemplateLoaded(experienceID);
    };
    w.onTemplateLoaded=newHandler;
  }
  else {
    w.onTemplateLoaded=bcTrack.onTemplateLoaded;
  }

})(window);

$(function(){
  if (typeof s_gi!='function' || s_account==undefined){
    $.dbg("Omniture error!");
    return;
  }
  var s=s_gi(s_account);
});

/* /bc_track */
var RightRailPreroll = {

	videoList: null,

    // Initialize functionality unique to this player (autostart, auto-scrolling of thumbnails)
    init: function(id) {
    	if (!$('body').hasClass('cq-wcm-edit')) {

	    	// If the API is not in flash mode (iPad, etc.) we must present the player as-is, which uses no fancy API Javascript
	    	// Otherwise, carry on with the preroll video logic
			if (brightcove.api.getExperience(id)) {
				// Noop
			} else {
				var exp = brightcove.getExperience(id).getModule(APIModules.EXPERIENCE);
				var adv = brightcove.getExperience(id).getModule(APIModules.ADVERTISING);
				var vid = brightcove.getExperience(id).getModule(APIModules.VIDEO_PLAYER);

				// Save a reference to the video thumbnail list and initialize auto-scrolling
				RightRailPreroll.videoList = exp.getElementByID('videoList');
				RightRailPreroll.setupAutoScroll();

				// Stop/Resume auto-scrolling thumnails whenever a mouse enters/leaves player (so they can interact uninterrupted)
				$('.thumbnail-video .placeholder').on('mouseenter', function() {
					clearInterval(RightRailPreroll.intervalID);
					RightRailPreroll.intervalID = null;
				});
				$('.thumbnail-video .placeholder').on('mouseleave', function() {
					RightRailPreroll.setupAutoScroll();
				});

			}

		}
	},

	// Start interval timer to scroll thumbnails once per 5.5 seconds (there's about 0.5 seconds of transition when scrolling)
	setupAutoScroll: function () {
		RightRailPreroll.intervalID = setInterval(RightRailPreroll.scrollThumbs, 8500);
	},

	// Scroll to next page of thumbnails, or start back at the beginning when we hit the end
	scrollThumbs: function() {
		if (RightRailPreroll.videoList.getPageIndex() < RightRailPreroll.videoList.getNumPages() - 1)
			RightRailPreroll.videoList.showNextPage();
		else
			RightRailPreroll.videoList.showPage(0);
	}

};
var CarouselVideo = {
    autoPrerollDone: false,
    muted: false,
    playerCounter: 0,
    bcInst: null,
    adDetect: false,
    // Retrieve playlist info
    loadPlaylist: function (playlist) {
        var pid = playlist.replace('ref:', '');
        var isReference = playlist.indexOf('ref:') == 0 ? true : false;
        BCMAPI.token = 'K4YeC-5GUQ7wbdfYgF0ZhUW6AW-pbspywoZIX974aQg3NhfImuYy-Q..';

        // Setup search API params
        var params = {};
        params[isReference ? 'reference_id' : 'playlist_id'] = pid;
        params.video_fields = 'id,name,shortDescription,videoStillURL';

        // Callback used to place retrieved videos in the carousel
        BCMAPI.callback = 'CarouselVideo.getPlaylistVideos';

        BCMAPI.find((isReference ? 'find_playlist_by_reference_id' : 'find_playlist_by_id'), params);
    },

    // Utility function will strip out the uniquely identifying prefix of a player, and return just the video id
    extractVideoID: function (id) {
        return id.replace(/.*-(\d*)$/gi, '$1');
    },

    // Returns the boilerplate embed code for a player
    getPlayerCode: function (id, override) {
        var player = $('<div/>').addClass('video-placeholder').append(
            $('<object/>').addClass('BrightcoveExperience').attr('id', id)
            .append($('<param/>').attr('name', 'bgcolor').attr('value', '#f9f9f9'))
            .append($('<param/>').attr('name', 'width').attr('value', '280'))
            .append($('<param/>').attr('name', 'height').attr('value', '157'))
            .append($('<param/>').attr('name', 'htmlFallback').attr('value', 'true'))
            .append($('<param/>').attr('name', 'playerID').attr('value', '2071349530001'))
            .append($('<param/>').attr('name', 'playerKey').attr('value', 'AQ~~,AAAAuO4KaJE~,gatFNwSKdGDmDpIYqNJ-fTHn_c4z_LH_"'))
            .append($('<param/>').attr('name', 'isVid').attr('value', 'true'))
            .append($('<param/>').attr('name', 'autoStart').attr('value', 'false'))
            .append($('<param/>').attr('name', 'isUI').attr('value', 'true'))
            .append($('<param/>').attr('name', 'wmode').attr('value', 'transparent'))
            .append($('<param/>').attr('name', 'dynamicStreaming').attr('value', 'true'))
            .append($('<param/>').attr('name', 'secureConnections').attr('value', (document.location.protocol == 'https:' ? 'true' : 'false')))
            .append($('<param/>').attr('name', 'videoID').attr('value', CarouselVideo.extractVideoID(id)))
            .append($('<param/>').attr('name', 'includeAPI').attr('value', 'true'))
            .append($('<param/>').attr('name', 'templateLoadHandler').attr('value', 'CarouselVideo.videoLoaded'))
        );
        if (override) player.find('object').append($('<param/>').attr('name', 'adCategoryOverride').attr('value', 'MVP'));
        return player;
    },

    // Callback for when a dynamically placed player is done loading
    videoLoaded: function(exp){setTimeout(function(){ // delayed

        var bc = brightcove.getExperience(exp);

        if (!bc) $.dbg("### CAROUSEL VIDEO ERROR");

        //CarouselVideo.bcInst=bc;

        //$.dbg("### CAROUSEL VIDEO LOADED: "+exp+", player counter is "+CarouselVideo.playerCounter+", ad category is "+customAdCat);

        bcTrack.onTemplateLoaded(exp); //---------------------------

        // Hide the vdieo still and show the player
        $('.carousel-video li[data-id="' + exp + '"]').toggleClass('video-playing');

        if (bc != undefined) {
            var customAdCat=bc.getModule(APIModules.EXPERIENCE).getPlayerParameter('adCategoryOverride');

            //bc.getModule(APIModules.VIDEO_PLAYER).play();
            //bc.getModule(APIModules.VIDEO_PLAYER).setVolume(0.5);

            $.dbg("### CAROUSEL VIDEO PLAYER "+CarouselVideo.playerCounter+" started at volume 0.5");

            // Start playing the video once it's ready
            bc.getModule(APIModules.EXPERIENCE).addEventListener(BCExperienceEvent.TEMPLATE_READY, function () {
            //bc.getModule(APIModules.EXPERIENCE).addEventListener(BCExperienceEvent.CHANGE, function () {

                $.dbg("### CAROUSEL VIDEO PLAYER "+CarouselVideo.playerCounter+" READY");

                if (CarouselVideo.playerCounter == 0 && !CarouselVideo.playerCounter && !CarouselVideo.autoPrerollDone) {

                    bc.getModule(APIModules.VIDEO_PLAYER).play();
                    bc.getModule(APIModules.VIDEO_PLAYER).setVolume(0.5);

	                $(".video-placeholder").mouseover(function () {

	                    bc.getModule(APIModules.VIDEO_PLAYER).mute(false);
	                    bc.getModule(APIModules.VIDEO_PLAYER).setVolume(0.5);

	                    $.dbg("### CAROUSEL VIDEO player ad un-muted, volume set to 0.5");
	                });
                }
			});

            bc.getModule(APIModules.ADVERTISING).addEventListener(BCAdvertisingEvent.AD_RECEIVED, function () {
                CarouselVideo.adDetect = true;
                bc.getModule(APIModules.VIDEO_PLAYER).play();
                if (customAdCat) {
                    //apply only for the first video
                    if (CarouselVideo.playerCounter == 0) {
                        bc.getModule(APIModules.VIDEO_PLAYER).mute();
                        CarouselVideo.muted=true;
                        //bc.getModule(APIModules.VIDEO_PLAYER).setVolume(0.0);

                        $.dbg("### CAROUSEL VIDEO player "+CarouselVideo.playerCounter+" muted");
                    }
                    else {
                        bc.getModule(APIModules.VIDEO_PLAYER).mute(false);
                        CarouselVideo.muted=false;
                    }
                    //(CarouselVideo.playerCounter == 0)? bc.getModule(APIModules.VIDEO_PLAYER).mute() : bc.getModule(APIModules.VIDEO_PLAYER).mute(false);
                }
            });

            // When the sepcial preroll ad finishes, set a dirty flag
            bc.getModule(APIModules.ADVERTISING).addEventListener(BCAdvertisingEvent.AD_COMPLETE, function () {
                if (customAdCat) {
                    if (CarouselVideo.playerCounter == 0 && !CarouselVideo.autoPrerollDone) {

                        CarouselVideo.autoPrerollDone=true;

                        bc.getModule(APIModules.VIDEO_PLAYER).pause();
                        $.dbg("### CAROUSEL VIDEO player "+CarouselVideo.playerCounter+" paused on ad complete");

                        var playing = $('.carousel-bar span.arrow').closest('.carousel-video').find('li.video-playing');
                        playing.toggleClass('video-playing').find('.video-still span').show();
                        $('.carousel-video li[data-id="' + exp + '"]').attr('data-reset-me', 'true');
                    }
                    /*
                    CarouselVideo.playerCounter++;
                    if (CarouselVideo.playerCounter == 2) {
                        var adPolicy = new Object();
                        adPolicy.prerollAds = false;
                        bc.getModule(APIModules.ADVERTISING).setAdPolicy(adPolicy);
                        bc.getModule(APIModules.VIDEO_PLAYER).play();
                    }
                    if (CarouselVideo.playerCounter == 1) {
                        bc.getModule(APIModules.VIDEO_PLAYER).pause();
                        var adPolicy = new Object();
                        adPolicy.prerollAds = false;
                        bc.getModule(APIModules.ADVERTISING).setAdPolicy(adPolicy);
                    }
                    */
                }
            });

            // When the special preroll has ended and the video is going to start, pause it
            bc.getModule(APIModules.VIDEO_PLAYER).addEventListener(BCMediaEvent.BUFFER_BEGIN, function () {
            //bc.getModule(APIModules.VIDEO_PLAYER).addEventListener(BCMediaEvent.PLAY, function () {

                $.dbg("### CAROUSEL VIDEO player "+CarouselVideo.playerCounter+" started");

                if (CarouselVideo.playerCounter==0 && !CarouselVideo.autoPrerollDone) {

                    //if (CarouselVideo.playerCounter == 0) {

                        CarouselVideo.autoPrerollDone=true;
                        bc.getModule(APIModules.VIDEO_PLAYER).pause(); // stop on first clip
                        $.dbg("### CAROUSEL VIDEO player "+CarouselVideo.playerCounter+" paused on buffer begin");

                        // Disable the ad policy, since resuming from pause will trigger ANOTHER preroll
                        var adPolicy = new Object();
                        adPolicy.prerollAds = false;
                        bc.getModule(APIModules.ADVERTISING).setAdPolicy(adPolicy);

                    //}
                }
                CarouselVideo.playerCounter++;
                CarouselVideo.autoPrerollDone=true;
            });

            // When a video ends, we automatically move to the next one and play it
            bc.getModule(APIModules.VIDEO_PLAYER).addEventListener(BCMediaEvent.COMPLETE, function () {
                var vids = $('.carousel-video li[data-id="' + exp + '"]').closest('.carousel-video');
                vids.find('.carousel-bar span.arrow.next').click();
                setTimeout(function () {
                    vids.find('li.active div.video-still').click();
                }, 300);
            });

        }

    //},
    },500);},

    // Replace the current slide's video still with a Brightcove player
    embedVideoPlayer: function (pages) {
        var current = pages.children('li.active');
        var index = pages.children('li').index(current);
        var id = pages.children('li').eq(index).attr('data-id');
        var page = pages.children('li').eq(index);
        // Embed a player, if one is not already present
        if (page.find('.video-placeholder').length == 0) {
            page.find('.video-still span').fadeOut();
            page.append(CarouselVideo.getPlayerCode(id, (index == 0 && typeof page.attr('data-reset-me') == 'undefined')));
            brightcove.createExperiences();

            //var $this=$(this);
            //setTimeout(function(){$this.trigger('click');}, 1000); // start playing

            $.dbg("### CAROUSEL VIDEO player "+index+" created");

        } else {
            page.toggleClass('video-playing');
            brightcove.getExperience(id).getModule(APIModules.VIDEO_PLAYER).play();
        }

    },

    // Setup carousel using information for a returned playlist
    getPlaylistVideos: function (json) {
        if (json != null && typeof json.videos != 'undefined') {
            var vids = json.videos.slice(0, 5);
            if (vids.length) {
                $('.carousel-video[data-playlist="' + json.id + '"], .carousel-video[data-playlist="ref:' + json.referenceId + '"]').each(function () {

                    // Set up the carousel items
                    var prefix = $(this).attr('data-id-prefix');
                    var pipBuffer = $('<div/>');
                    var pageBuffer = $('<ul class="carousel-pages float-clear"/>');
                    for (var i = 0; i < vids.length; i++) {
                        pageBuffer.append(
                            $('<li/>').addClass(i == 0 ? 'active' : '').attr('data-id', prefix + '-' + vids[i].id).append(
                                $('<p>' + vids[i].name + '</p>').addClass('caption')
                            ).append(
                                $('<div/>').addClass('video-still').append(
                                    $('<img/>').attr('src', vids[i].videoStillURL)
                                ).append(
                                    $('<span/>').append('video')
                                )
                            )
                        );
                        pipBuffer.append($('<span class="pip">' + (i + 1) + '</span>').addClass(i == 0 ? 'active' : ''));
                    }
                    $(this).find('.carousel-bar span.loading').replaceWith(pipBuffer.children());
                    $(this).find('.carousel-pages').replaceWith(pageBuffer);

                    // Initialize caorusel functionality
                    Carousel.init($(this).find('.carousel-bar'));

                    // When a user clicks a video still, we replace it with a brightcove player
                    // Do this immediately for the first position
                    var pages = $(this).find('.carousel-pages');
                    CarouselVideo.embedVideoPlayer(pages);
                    $(this).find('.carousel-pages li div.video-still').click(function (e) {
                        CarouselVideo.embedVideoPlayer(pages);
                    });

                    // When the carousel is navigated, we need to stop the current video
                    $(this).find('.carousel-bar span.arrow').on('click', function (e) {
                        if ($(this).closest('.carousel-video').find('li.video-playing').length) {
                            var playing = $(this).closest('.carousel-video').find('li.video-playing');
                            playing.toggleClass('video-playing').find('.video-still span').show();

                            // HTML vs. Flash mode; remove an HTML5 player completely since API doesn't apply
                            if (brightcove.api.getExperience(playing.attr('data-id'))) {
                                playing.find('.video-placeholder').remove();
                            } else {

                                // Kill the video that shows the special one-time first preroll
                                if (typeof playing.attr('data-reset-me') != 'undefined') {
                                    playing.find('.video-placeholder').remove();
                                }

                                // Stop playing the video and/or preroll ad
                                var id = playing.attr('data-id');
                                var bc = brightcove.getExperience(id);
                                var ad = brightcove.getExperience(id).getModule(APIModules.ADVERTISING);
                                var vid = brightcove.getExperience(id).getModule(APIModules.VIDEO_PLAYER);
                                bc.getModule(APIModules.VIDEO_PLAYER).pause();
                                //kill other players in the cue
                                vid.stop();
                                ad.stopAd();

                            }
                        }
                    });

                    // Stop/Resume auto-scrolling whenever a mouse enters/leaves player (so they can interact uninterrupted)
                    $(this).find('.container').on('mouseenter', function () {
                        $(this).attr('data-no-scroll', 'true');
                    });
                    $(this).find('.container').on('mouseleave', function () {
                        $(this).removeAttr('data-no-scroll');
                    });

                    // Set up auto-scrolling (which is skipped when video plays or mouse is used)
                    var _carousel = $(this);
                    setInterval(function () {
                        var bc = null;
                        if (_carousel.find('li.active .video-placeholder').length)
                            bc = brightcove.getExperience(_carousel.find('li.active').attr('data-id'));
                        if ((bc == null || !bc.getModule(APIModules.VIDEO_PLAYER).isPlaying()) && typeof _carousel.find('.container').attr('data-no-scroll') == 'undefined')
                            _carousel.find('.carousel-bar span.arrow.next').click();
                    }, 5000);

                });
            }
        }
    }

};

$(document).on('star_component_init', function () {
    $('.carousel-video').each(function () {
        CarouselVideo.loadPlaylist($(this).attr('data-playlist'));
    });

    $(".carousel-video").mouseover(function(){
        if (!CarouselVideo.muted) return;
        var player=CarouselVideo.bcInst.getModule(APIModules.VIDEO_PLAYER);
        player.mute(false);
        player.setVolume(0.5);
        CarouselVideo.muted=false;
        $.dbg("### CAROUSEL VIDEO AD UN-MUTED, VOLUME SET TO 0.5");
    });

});
var EchoComm = {

  char_limit: 50,

  commentsArray: {
    'YourComments': new Array(),
    'PopularComments': new Array(),
    'MyComments': new Array()
  },

  displayComment: function(comment) {
    return comment.length > EchoComm.char_limit ? comment.substring(0, EchoComm.char_limit).split(" ").slice(0, -1).join(" ") + "&hellip;" : comment;
  },

  createCommentObj: function(title, uri, comment, username, pubdate, type) {
    var commentsObj = new Object();
    commentsObj.title = title;
    commentsObj.uri = uri;
    commentsObj.comments = new Array();
    commentPost = new Object();
    commentPost.pubdate = pubdate;
    commentPost.username = username;
    commentPost.comment = comment;
    commentsObj.comments.push(commentPost);
    EchoComm.commentsArray[type].push(commentsObj);
    return true;
  },

  getComments: function(data, commentType, element) {
    var entries = data.entries||[];

    //loop through the returned echo comment entries based on query string
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      var found = false;  //flag to determine if CommentObj exists based on equal title attribute
      //check if title exists b/c thats how we group comments
      if ((typeof entry.object.context[0].title !== "undefined") && (entry.object.context[0].title.length > 0 )) {
        //first time
        if (EchoComm.commentsArray[commentType].length == 0 ) {
          found = EchoComm.createCommentObj(entry.object.context[0].title, entry.object.context[0].uri, entry.object.content, entry.actor.title, entry.object.published, commentType);
        } else {
          found = false;
          //search for commentObj containing the same title so we can add it to the commentObj comments array
          for (commentObj in EchoComm.commentsArray[commentType] ) {
            if (EchoComm.commentsArray[commentType][commentObj].uri == entry.object.context[0].uri) {
              commentPost = new Object();
              commentPost.pubdate = entry.object.published;
              commentPost.username = entry.actor.title;
              commentPost.comment = entry.object.content;
              EchoComm.commentsArray[commentType][commentObj].comments.push(commentPost);
              found = true;
              break;
            }
          }
        }
        //didn't find an commentObj with the same title so we create a new entry
        if (!found)
          EchoComm.createCommentObj(entry.object.context[0].title, entry.object.context[0].uri, entry.object.content, entry.actor.title, entry.object.published, commentType);
      }
    }

    switch (commentType) {

      case "YourComments":
        var ca_length = EchoComm.commentsArray[commentType].length;
        var num_articles = element.attr('data-comment-numofarticles');
        var num_items = element.attr('data-comment-items');
        var buffer = $('<ul/>');

        if (ca_length > 0) {
          for (var co = 0; (co < ca_length && co < num_articles); co++) {
            var c_length = EchoComm.commentsArray[commentType][co].comments.length;
            var article = $('<li/>');

            article.append($('<p class="article"/>').append($('<a href="' + EchoComm.commentsArray[commentType][co].uri + '">' + EchoComm.commentsArray[commentType][co].title + '</a>')));
            for (var c = 0; (c < c_length && c < num_items); c++)
              article.append($('<p class="quote"/>').append('"' + EchoComm.displayComment(EchoComm.commentsArray[commentType][co].comments[c].comment) + '"'));
            article.append($('<p class="post"/>').append($('<a href="' + EchoComm.commentsArray[commentType][co].uri + '">Post a comment</a>')));

            buffer.append(article);
          }
          element.find('p.loading').replaceWith(buffer.children('li').last().addClass('last-child').end().end());
        } else {
          element.find('p.loading').html('No comments found!');
        }
        break;

      case "PopularComments":
        var c_length = 0;
        if (EchoComm.commentsArray[commentType].length)
          c_length = EchoComm.commentsArray[commentType][0].comments.length;
        var num_items = element.attr('data-comment-items');
        var buffer = $('<ul/>').addClass('article-inset-list').addClass('comment-list');

        if (c_length > 0) {
          for (var c = 0; (c < c_length && c < num_items); c++) {
            var formatedDate = new XDate(EchoComm.commentsArray[commentType][0].comments[c].pubdate, false).toString("MMM d, h(:mm) tt");
            var item = $('<li/>');

            item.append(
              $('<p class="quote"/>').append('"' + EchoComm.displayComment(EchoComm.commentsArray[commentType][0].comments[c].comment) + '"')
            );
            item.append(
              $('<p class="source"/>')
                .append('<strong>' + EchoComm.commentsArray[commentType][0].comments[c].username + '</strong>')
                .append('<span>' + formatedDate + '</span>')
            );

            buffer.append(item);
          }
          element.find('p.loading').replaceWith(buffer.children('li').last().addClass('last-child').end().end());
        } else {
          element.find('p.loading').html('No comments found!');
        }
        break;

      case "MyComments":
        var ca_length = EchoComm.commentsArray[commentType].length;
        var buffer = $('<div id="commentswrapper">');

        if (ca_length > 0) {
          for (var co = 0; co < ca_length; co++) {
            var c_length = EchoComm.commentsArray[commentType][co].comments.length;

            var article = $('<div class="combox">');
            var commentTitle = '<a href="' + EchoComm.commentsArray[commentType][co].uri + '" target="_blank">' + EchoComm.commentsArray[commentType][co].title + '</a>';
            for (var c = 0;  c < c_length; c++) {
              var formatedDate = new XDate(EchoComm.commentsArray[commentType][co].comments[c].pubdate, false).toString("MMM d, h(:mm) tt");
              var commentrow = $('<div class="comment_row" data-comment_url="#">');
              var comment = $('<p class="comment">' + EchoComm.commentsArray[commentType][co].comments[c].comment + '</p>');
              var commentmeta = $('<p class="meta">Posted to: ' + commentTitle + '<br />' + formatedDate +'.</span></p>');
              commentrow.append(comment);
              commentrow.append(commentmeta);
              article.append(commentrow);
            }

            buffer.append(article);

          }
        } else {
          buffer.append('<p class="no_comments">You haven&rsquo;t posted any comments yet.</p>');
        }

        element.append(buffer);

        break;

    }
  },

    fetchComments: function(articlePath, commentType, element) {
        var path = articlePath;
        var type = commentType;
        var elem = element;
        if (path != null) {
            var request = $.ajax({
                url: path,
                cache: false,
                dataType: "jsonp",
                type: "GET",
                success: function(data){
                    EchoComm.getComments(data, type, elem);
                }
            });
        }
    }

};

$(document).on('star_component_init', function() {


  $('div.echo-comm-container[data-init-me]').each(function() {
    EchoComm.fetchComments($(this).attr('data-comment-path'), $(this).attr('data-type'), $(this));
  }).removeAttr('data-init-me');
});


/* pageloadhandler */

/*
	this one replaces component_mover.js
	don't use both

	deps: $, jq-ext
	blame: VP

	TODO: move stuff from bc_init to here
*/

;
(function($){

	'use strict';

	var

	ringTheBell = function(){
		$(window).trigger('starpageready');// must be fired when page rearranging is done
	},

	dbg = function(msg){
		$.dbg('pageloadhandler: '+msg);
	},

	rightRailSel = '.rightrailtop, .toprightrail',
	isDfp = ($('.dfpad').children().length>0),
	adBoxSel = (isDfp) ? '.dfpad' : '.adtech',
	adStatus = {isDfp:isDfp}, // for debug

	moveHomeComps = function(featAdSize){
		var
		adW = featAdSize.width,
		adH = featAdSize.height,
		isAdVertical = (adH > adW),
		isAdRegular = (adW < 310 && adH <= 590),
		isAdXXL = (adW > 400),
		isAdXXL2 = (adW==300 && adH==648),// featAdSize.width for 457x648 might be detected as 300x648
		isAdTall = (adH >= 1000)
		;

		$.extend(adStatus, {adW:adW, adH:adH, isAdVertical:isAdVertical, isAdRegular:isAdRegular, isAdXXL:isAdXXL, isAdXXL2:isAdXXL2, isAdTall:isAdTall});

		if (isAdRegular) return;

		$(rightRailSel).find(adBoxSel).addClass('keep-it');

		if (isAdTall) {
			$('div.homepage-more div.rightrail .mostpopular').wrap('<li/>').appendTo('.homepage-top .more-headlines');

			var dH = $('div.headlines').height() - Math.max($('.homepage-top .more-headlines').height(), adH);

			$('div.homepage-more div.left-col')
			.height(dH)
			.css({
				'border-right' : '7px #fff solid',
				'margin-right' : '2px',
				'position': 'relative',
				'background-color': '#fff'
			});
			$('div.homepage-more div.left-col div.leftrail').css({
				'border-top' : '1px #ccc dotted'
			});
		}
		else {
			//keep video component
			$('div.right-rail').find('div.homepagesinglevideo, div.videoring').addClass('keep-it');
		}

		if (isAdXXL || isAdXXL2) {
			// Move/Rearrange the sidebar headlines in homepage top so that they're appended horizontally under "regular" stories
			// Decrease the width so the right column has more room
			// The XXL is too large for the template so let it hang over the edge and remove the border so it looks less broken
			dbg("XXL ad found");
			var
			headlines = $('div.homepagetop ul.more-headlines').find('li').filter(function(){
				return (($(this).attr('data-thumbnail')!=undefined && $(this).attr('data-thumbnail').length) || $(this).find('a.thumbnail img').length);
			}),
			len = headlines.length;
			$('div.homepagetop ul.more-headlines').remove();

			if (len) {
				// Add first row of stories
				if (len > 3) headlines = headlines.slice(0, 3);
				var ul = $('<ul/>').addClass('row float-clear xxl');
				headlines.each(function() {
					var
					li = $(this),
					src = li.attr('data-thumbnail');
					if (src) {
						var img = $('<img/>').attr('src', src).attr('alt', '');
						li.find('a.thumbnail').append(img).css('border', '0');
					}
					ul.append(li);
				});
				$('div.homepagetop div.headlines').append(ul);

				// adjust right rail video, if any
				$('div.right-rail div.homepagesinglevideo')
				.css('width', '457px').css('height', '380px')
				.find('div.homepage-single-video')
				.css('width', '444px').css('height', '380px')
				.find('.placeholder').css('width', '444px').css('height', '308px')
				.find('object')
				.attr('width', '444').attr('height', '308')
				;
			}

			if (!$('ul.xxl li.more-stories').length) {
				$('<ul class="row float-clear xxl"><li class="more-stories"><a class="headline" href="http://thestar.com/news.html">More news stories...</a></li></ul>')
				.appendTo('div.homepagetop div.headlines');
			}
			$('div.homepage-main-wrap').addClass('xxl-fix');
			$('div.homepage-main .right-rail .videoring').width(450);
			if (isAdXXL) {
				$('div.homepage-main-wrap div.homepage-main .features').width(395);
			}
			else if (isAdXXL2) {
				$('div.right-rail').find('div.videoring, div.homepagesinglevideo').css({'margin-top':'20px', 'margin-left':'-150px'});
			}

			$('div.homepage-main-wrap div.homepage-main div.right-rail').css({'overflow': 'visible', 'border': 'none'});
			// Fix for IE7
			//$('.homepage-main-wrap.xxl-fix > .ie-before').hide().show();

			// somehow they end up inside one another..
			if ($('.homepage-main-wrap div.homepage-more').length) $('div.homepage-more').insertAfter($('.homepage-main-wrap'));
		}

		// Move Editor's Picks to the lower homepage and get rid of the rest of the rightrail that isn't the ad
		//$('div.right-rail div.editors-picks').parent().prependTo('div.homepage-more div.middle-col div.centerrail').children();
		$('div.right-rail div.editors-picks').parent().prependTo('div.homepage-more div.middle-col div.centerrail');

		// remove unmarked items from the right rail
		$('div.right-rail div.parsys.rightrailtop').children().not('.keep-it').remove();
	},

	adjustTopAds = function(){
		// Check header for superbutton changes that should affect the leaderboard
		var head = $('div.header-ads'), lead = head.find('div.leaderboard'), butt = head.find('div.superbutton'),
		leadAd = lead.find('div.adtech, div.dfpad'), buttAd = butt.find('div.adtech, div.dfpad'),
		leadAdSize = leadAd.getAdMaxSize(), buttAdSize = buttAd.getAdMaxSize(),
		isLeadExpanded = leadAdSize.width > lead.width();

		if (buttAdSize.height<20 && !isLeadExpanded) {// flash thing may expand leaderboard, don't move it then
			head.addClass('leader-only');
			butt.remove();

			adStatus.isLeaderOnly = true;
		}
		//Check for an ad on the body's background, Make the header background clear so you can see the ad behind the ad
		if ($('body').css('background-image') != 'none' || isLeadExpanded) {
			head.css('background-color', 'transparent');

			adStatus.isHeaderTransparent = true;
		}

		// Check header and if there are no ads in it, hide the entire area
		setTimeout(function(){
			//dbg(head.getAdMaxSize());
			if (head.getAdMaxSize().height < 20) head.remove();
		}, 1000);

		adStatus.isLeadExpanded = isLeadExpanded;
	},

	moveComponents = function(){
		var
		delay = 300, // interval to check if ads are ready
		maxtimes = 40, // max total number of attempts
		verifytimes = 4, // times ad size remains constant
		adDetectCnt = 0,
		adVerifyCnt = 0,
		ticker = null,
		adW = 0,
		adH = 0,
		done = false;

		ticker = setInterval(function(){
			adDetectCnt++;
			dbg("ad lookup round "+adDetectCnt);//<--------------
			if (done || adDetectCnt>maxtimes) {

				adStatus.adDetectSuccess = done;
				adStatus.adDetectRounds = adDetectCnt;
				adStatus.adDetectTime = delay*adDetectCnt;

				$('div.adtech, div.dfpad').each(function(){
					if (!$(this).children().length) $(this).remove();
				});

				adjustTopAds();
				ringTheBell();
				clearInterval(ticker);
				ticker = null;
				adDetectCnt = 0;
				return;
			}
			var featAdSize = $(rightRailSel).find(adBoxSel).getAdMaxSize();
			dbg('right rail max ad size: '+$.repr(featAdSize));//<--------------
			if (!featAdSize.width || !featAdSize.height) return; // ad not rendered yet
			if (featAdSize.width!=adW || featAdSize.height!=adH) {
				adW = featAdSize.width;
				adH = featAdSize.height;
				adVerifyCnt = 0;
				return; // run extra cycle to make sure it's stable
			}
			else if (adVerifyCnt < verifytimes){
				adVerifyCnt++;
				return;
			}
			done = true;
			if ($('body').is('.homepage')) {
				moveHomeComps(featAdSize);
			}
		}, delay);
	};

	window.adStatus = adStatus;


	$(function(){

		// render videoring and ad players
		var
		isHome = $('body').is('.homepage'),
		initVideoPlayers = function(){
			if ('adPlayer' in $.fn) $('.video-ad-placeholder').adPlayer();
			if ('videoRing' in $.fn) $('.videoring-placeholder').videoRing();
		};

		// on custom 'starpageready' event triggered by component mover (pageloadhandler)
		if ('CQURLInfo' in window)  {// author
			initVideoPlayers();
		}
		else if (isHome) {
			$(window).one('starpageready', function(){
				initVideoPlayers();
			});
			moveComponents();
		}
		else {
			initVideoPlayers();
			moveComponents();
		}

		$(window).on('starpageready', function(evt){dbg(evt.type+" fired!")});//<--------------

	});
})(jQuery);

/* /pageloadhandler */
var webmaster = {
	hideCaptchaFrame: function() { setTimeout(function() { $('iframe[src="about:blank"]').hide(); }, 100); },
	killCaptchaFrame: function() { $('iframe[src="about:blank"]').remove(); },
	loadCaptcha: function() {
		webmaster.killCaptchaFrame();
		Recaptcha.create("6LeG9NISAAAAAJFPw9O2nBv-8oC3B8mt2oUHBSjl", 'recaptcha_div', { theme : "clean" });
		webmaster.hideCaptchaFrame();
	},
	setEmailMessage: function(form, msg, type) {
		form.find('fieldset.message').text(msg).removeClass('success').removeClass('error').addClass(type).show();
		form.find('fieldset.send-email input').prop('disabled', false).text('Submit');
		if (type=="success"){
			form.each(function(){
				this.reset();
			});
		}
	}
};

$(document).ready(function(){
	if ($('form#contactwebmaster').length) {
		$.getScript('https://www.google.com/recaptcha/api/js/recaptcha_ajax.js', function(data, textStatus, jqxhr) { 
			webmaster.loadCaptcha();
		});
	}
	
	$('form#contactwebmaster').on('submit', function(e) {
		e.preventDefault();
		var form = $(this);
		form.find('fieldset.message').empty().hide().removeClass('error').removeClass('success');
		form.find('fieldset.send-email input').prop('disabled', true).text('Please wait..');

		var subject = 'Contact Webmaster form submitted';
		var default_mailbodyintro = ($.trim(form.find('#yourname').val()).length ? $.trim(form.find('#yourname').val()) : 'Somebody') + ' has submitted the contact webmaster form';

		$.ajax({
			type: 'GET',
			url: form.find('#postUrl').val(),
			dataType: 'json',
			data: {
				yourname : $.trim(form.find('#yourname').val()),
				emailfrom : $.trim(form.find('#emailfrom').val()),
				topic: $.trim(form.find('#topic').val()),
				emailbody: $.trim(form.find('#emailbody').val()),
				recaptcha_response_field: form.find('input#recaptcha_response_field').val(),
				recaptcha_challenge_field: form.find('input#recaptcha_challenge_field').val(),
				emailsubject: subject,
                usersubject: form.find('#emailsubject').val(),
				postUrl: form.find('#postUrl').val()
			},
			success : function(data) {
				switch (data.msg) {
			    case 'success': 
			    	webmaster.setEmailMessage(form, 'Your email has been sent successfully!', 'success');
			    	form.find('fieldset.humans').remove();
		        break; 
			    case 'email error': 
			    	webmaster.loadCaptcha();
						webmaster.setEmailMessage(form, 'ERROR: please verify the info you provided is correct.', 'error');
		        break; 
			    case 'captcha error': 
			    	webmaster.loadCaptcha();
					webmaster.setEmailMessage(form, 'ERROR: please try the ReCaptcha again.', 'error');
		        break;
		    	};
			},
			error: function(jqXHR, textStatus, errorThrown) {
				webmaster.loadCaptcha();
				webmaster.setEmailMessage(form, 'ERROR: the server encountered an issue. Please try again.', 'error');
			}
		});
	});
});
$(document).on('star_component_init', function() {

	$("div.word-cloud div.cloud").empty().each(function() {
		var word_list = new Array();
		var arr = $(this).attr('data-words').split('####');
		for (var i = 0; i < arr.length; i++) {
			if ($.trim(arr[i]).length) {
				var word = {
					text: "",
					weight: 0,
					link: ""
				};
				var item = $.trim(arr[i]).split(',');
				if (typeof item[0] != 'undefined') word.text = item[0];
				if (typeof item[1] != 'undefined') word.weight = parseFloat(item[1]);
				if (typeof item[2] != 'undefined') word.link = item[2];
				if (word.text.length && (!isNaN(word.weight) && word.weight > 0) && word.link.length)
					word_list.push(word);
			}
		}
		$(this).jQCloud(word_list);
	});
	
});
$(document).ready(function() {

	$(document).on('click', 'div.promo a', function() {
		var promo = $(this).closest('.promo');
		var source = promo.attr('data-comp-path');
		var pos = promo.find('a').index($(this)) + 1;
		var url = ($(this).attr('href')).replace(/http(s)?:\/\//gi, '');
		if (url.indexOf(localprefix) != -1)
			url = (url).replace(/.*\/(.*)$/gi, '$1').replace('.html', '');
		trackPromoClick(source, pos, url);
	});

});
$(document).ready(function() {
	// Polyfill for browsers that don't support HTML5 placeholder attribute
	// Select the contents of input when it gets focus
	$('form.search-input .search-input-text').placeholder().focus(function() {
		var _this = $(this);
		setTimeout(function() { _this.select(); }, 0);
	})	

	// Polyfill for browsers that don't support HTML5 placeholder attribute
	// Select the contents of input when it gets focus
	// Initialize autocomplete, each input specifies its data in the "data-facet" attribute
	// This data is set in a _search_facets object in the body.jsp of the search page for each facet
	$('div.search-tools input.autocomp').placeholder().focus(function() {
		var _this = $(this);
		setTimeout(function() { _this.select(); }, 0);
	}).each(function() {
		var facet = $(this);
		if (facet.attr('data-facet') && _search_facets[facet.attr('data-facet')]) {
			var datasource = _search_facets[facet.attr('data-facet')];
			facet.autocomplete({
		    minLength: 3,
		    delay: 0,
		    autoFocus: true,
		    source: datasource,
		    select: function( event, ui ) {
		      document.location = ui.item.url;
		    }
		  }).autocomplete('widget').addClass('facet-menu');
		}

	});

	// Trigger a lightbox containing the full view of a specific image search result
	$('div.article-list ul li.photo-result a').on('click', function(e) {
		e.preventDefault();
		
		// Fecth image data from result attributes
		var photo = $(this).closest('.photo-result');
		var title = photo.attr('data-title');
		var credit = photo.attr('data-credit');
		var caption = photo.attr('data-caption');
		var storyTitle = photo.attr('data-story-title');
		var storyURL = photo.attr('data-story-url');
		var imageURL = photo.attr('data-image');

		// Build the lightbox HTML
		var html = $('<div class="photo-gallery-lightbox single-photo"/>');
		var container = $('<div class="container float-clear"/>');

		var heading = $('<div class="heading float-clear"/>').append(
			$('<p class="headline"><span>Photo:</span> ' + title + '</p>')
		).append(
			$('<ul class="buttons float-clear"/>').append(
				$('<li class="close-box"><span>Close</span></li>')
			)
		);

		var slideshow = $('<div class="slideshow float-clear"/>').append(
			$('<ul/>').append(
				$('<li/>').addClass('active').append($('<img/>').attr('src', imageURL))
			)
		);

		var content = $('<div class="content float-clear"/>').append(slideshow).append(
			$('<div/>').addClass('caption').addClass('float-clear').append(
				$('<div/>').addClass('info').addClass('float-clear').append(
					$('<p/>').addClass('credit').html(credit)
				)
			).append(
				$('<p/>').addClass('description').html(caption)
			)
		);

		var footer = $('<div class="footer float-clear"/>').html('From: <a href="' + storyURL + '">' + storyTitle + '</a>');

		html.append(heading).append(container.append(content)).append(footer);

		// Open the lightbox
		html.dialog({
			modal: true,
			width: 673,
			autoOpen: false,
			resizable: false,
			draggable: false,
			zIndex: 999999,
			create: function(event) {
				$(event.target).parent().css('position', 'fixed');
				$(event.target).parent().find(".ui-dialog-titlebar").remove();
			},
			open: function(event, ui) {
				var _this = $(this);
				$(this).find('.close-box').on('click', function() { _this.dialog('close'); });
			},
			close: function(event, ui) {
				$(this).dialog('destroy').remove();
			}
		}).dialog('open');

	});

	//Omniture tracking
	if (window.location.href.indexOf("search.html?") != -1){
		trackSearchPage();
	}

});
$(document).on('star_component_init', function() {
	if (typeof twttr != 'undefined' && typeof twttr.widgets != 'undefined')
		twttr.widgets.load();
});

// ----------------------------------------------------------------------------------- //
// debounced resize function declared globally                                         //
// ----------------------------------------------------------------------------------- //
function on_resize(c, t) {
  onresize = function() {
  	clearTimeout(t);
    t = setTimeout(c, 10)
  };
  return c;
};

$(document).ready(function() {
	// ----------------------------------------------------------------------------------- //
	//  mystar sidebar positioning javascript                                              //
	// ----------------------------------------------------------------------------------- //
	if ($('.wrapper:first').length && $('#mystar-sidebar-container').length) {
		// set the offset array for .wrapper into wrapperOffset
		var wrapperOffset = $('.wrapper:first').offset();

		// set the total location for the sidebar from the width and left offset of .wrapper
		// plus 120px for the width of the mystar sidebar.

		var myStarLeft = wrapperOffset.left + $('.wrapper:first').width();

		// position mystar to the right of the wrapper.
		$('#mystar-sidebar-container').css("left", myStarLeft);

		// keep mystar on screeen when one scrolls.
		$(function () {

			// Set the 'top' variable. The following code calculates the initial position of the box.
			// -100 is to compensate for the 100px top position of the sidebar.
			var top = $('#mystar-sidebar-container').offset().top - 100;

			$(window).scroll(function (event) {

		  	var y = $(this).scrollTop();

		  	if (y >= top) {
		    	// Set the box to the 'fixed' class.
		    	$('#mystar-sidebar-container').addClass('fixed');
		  	}
		  	else {
		    	// Remove the 'fixed' class
		    	$('#mystar-sidebar-container').removeClass('fixed');
		  	}
			});
		});


		// reposition sidebar if the window size changes.
		on_resize(function() {
			var wrapperOffset = $('.wrapper:first').offset();

			// set the total location for the sidebar from the width and left offset of .wrapper
			// plus 120px for the width of the mystar sidebar.

			myStarLeft = wrapperOffset.left + $('.wrapper:first').width();

			// position mystar to the right of the wrapper.
			$('#mystar-sidebar-container').css("left", myStarLeft);
		})();
	}
});
var topic_count = 21;
$(".topic-story-load").click(function(){
    var container = $(this).closest(".article-list-more");
    if (!container.hasClass('loading')){
        if (!window.location.origin) window.location.origin = window.location.protocol+"//"+window.location.host;
        var currentUrl = window.location.origin + window.location.pathname;
        var ift = currentUrl.indexOf("topic.");
        var loc = currentUrl.substring(0,ift);
        var tag = currentUrl.substring(ift + 6);
        var url = loc + "search.tag_" + tag + "." + topic_count + ".json";
        container.addClass("loading");
        $.get(url, function (data){
            topic_count = topic_count + data.hits.length;
            var buffer = $('<div>');
            $.each(data.hits, function(i,obj){
                var li = $('<li>').addClass("float-clear");
                if (obj.hasImages){
                    li.addClass("with-thumbnail");
                    var a = $('<a>').addClass("thumbnail icon-overlay").attr("href",obj.path);
                    a.html($("<div>").html(obj.icon).text());
                    var img = $('<img>').attr("src",obj.imgPath).attr("alt",obj.title);
                    a.append(img);
                    li.append(a);
                }
                var p1 = $("<p>").addClass("headline");
                var a2 = $("<a>").attr("href",obj.path);
                if (!obj.hasImages)
                    a2.html($("<div>").html(obj.icon).text());
                a2.append(obj.title);
                p1.append(a2);
                li.append(p1);
                var p2 = $("<p>").addClass("timestamp").html(obj.timestamp);
                li.append(p2);
                var div = $("<div>").addClass("abstract");
                if (obj.hasComments){
                    var span = $("<span>").addClass("with-comment-icon").html(obj["abstract"]);
                    div.append(span);
                    var span2 = $("<span>").addClass("comment-icon");
                    var a3 = $("<a>").attr("href",obj.path).html("comments");
                    span2.append(a3);
                    div.append(span2);
                }else{
                    div.html(obj["abstract"]);
                }
                li.append(div);

                buffer.append(li);
            });
            $(".article-list ul").append(buffer.html());
            container.removeClass("loading");
            if (data.isEndOfResults)container.hide();
        });
    }
    return false;
});
$(document).ready(function() {
	var _gaq = _gaq || [];
	
    $('.digitalAccessTop > a').on('click',function(e) {
        _gaq.push(['_trackEvent',  'CTA_Header' ,'subscription']);
        //trackDigitalAccess("Header"); // Unused in new tracking - October 2014
    });

    $('div.subscriptions a').on('click', function() {
        var variant = null;

        if ($(this).parent('.top').length > 0) {
            variant = 'CTA_header_top';
        }
        else if ($(this).parent('.bottom').length > 0) {
            variant = 'CTA_header_bottom';
        }

        _gaq.push(['_trackEvent', variant, 'subscription']);
        //trackDigitalAccess("Footer"); // Unused in new tracking - October 2014
    });

    var cookie = $.cookie('digital_access');
    if (cookie == null || cookie.toLowerCase() == "false" || cookie == "0" || cookie == "") {
    	if (!$('html').hasClass('lt-ie8')) {

    		var variant = 0;
    		if(typeof cxApi!='undefined'){
    			variant = cxApi.chooseVariation();
    		}

    		$('.digitalAccessTop > a').hide();

    		switch(variant) {
    		case 0:
    			$('.digitalAccessTop').find('[data-type="variant 1"]').fadeToggle();
    			break;
    		case 1:
    			$('.digitalAccessTop').find('[data-type="variant 2"]').fadeToggle();
    			break;
    		default:
    			$('.digitalAccessTop').find('[data-type="variant 3"]').fadeToggle();
    		break;
    		}

    	} else {
    		$('.digitalAccessTop').find('[data-type="variant 1"]').fadeToggle();    	
    	}
    } else {
    	$('.digitalAccessTop').hide();
    	$('.digitalCtaTop').hide();
    }

});


/*
*
* Code for detecting user AAM segment
*
* */

$(document).ready(function() {
    var aamComponents = $("[data-aam-segments]");
    if(typeof CQ_Analytics != 'undefined' && typeof CQ_Analytics.ClientContextUtils != 'undefined' && aamComponents.length != 0){
        CQ_Analytics.ClientContextUtils.onStoreInitialized("profile",function(store){
            refreshMSC(aamComponents);
        }, 5000);

    }
});

function refreshMSC(elems){
    if(typeof CQ_Analytics != 'undefined'){
        if(CQ_Analytics.SegmentMgr != null){
            elems.each(function(){
                var elem = $(this);
                var segments = elem.attr("data-aam-segments").split(",");
                var segmentMgr = CQ_Analytics.SegmentMgr;
                var resolvedSegements = segmentMgr.getResolved();
                var resolvedSegementsSize = resolvedSegements.length;
                var segmentIds = "";
                var rSegmentIds = [];
                for(i=0;i<resolvedSegementsSize;i++){
                    var segment = resolvedSegements[i];
                    if(segmentMgr.segments[segment].toString().indexOf("AAM.AudienceManager") != -1){
                        //get only segments that lie inside the array
                        var sId = segmentMgr.segments[segment].toString().substring(46,52);
                        if ($.inArray(sId, segments) > -1){
                            rSegmentIds.push(sId);
                        }
                    }
                }
                //sort the array based on segments and get the top [maxSegments] segments
                var maxSegments = parseInt(elem.attr("data-aam-count"));
                if (rSegmentIds.length >0){
                    if (rSegmentIds.length != 1){
                        rSegmentIds.sort(function(seg1,seg2){
                            return $.inArray(seg1,segments) - $.inArray(seg2,segments);
                        });
                    }
                    for (i=0;i<rSegmentIds.length;i++){
                        if(i==maxSegments) break;
                        segmentIds += "." + rSegmentIds[i];
                    }
                }

                if (segmentIds != ""){
                    if (!window.location.origin) window.location.origin = window.location.protocol+"//"+window.location.host;
                    var currentUrl = window.location.origin;
                    var component = elem.attr("data-aam-path");
                    if (component != ""){
                        var url = currentUrl + component + segmentIds + ".html";
                        $.get(url, function(data){
                            var data2 = $(data);
                            data2.find("img").each(function(){
                                $(this).attr("src", $(this).attr("data-original"));
                            });
                            
                            data2.find("div.article-list").each(function(){
                            		$(this).hide();
                            });
                            data2.find("div.article-list").each(function(){
                            	if ($(this).attr("data-path").indexOf(window.location.pathname) == -1) {
                            		$(this).show();
                            		return false;
                            	}
                            });
                            elem.replaceWith(data2);

                        });
                    }
                }
            });
        }
    }
}
var url42 = "http://publishers.42andpark.com/";

TINY = {};

TINY.box = function() {
    var j, m, b, g, v, p = 0;
    return {
        show: function(o) {
            v = {
                opacity: 70,
                close: 1,
                animate: 1,
                fixed: 1,
                mask: 1,
                maskid: '',
                boxid: '',
                topsplit: 2,
                url: 0,
                post: 0,
                height: 0,
                width: 0,
                html: 0,
                iframe: 0
            };
            for (s in o) {
                v[s] = o[s]
            }
            if (!p) {
                j = document.createElement('div');
                j.className = 'tbox';
                p = document.createElement('div');
                p.className = 'tinner';
                b = document.createElement('div');
                b.className = 'tcontent';
                m = document.createElement('div');
                m.className = 'tmask';
                g = document.createElement('div');
                g.className = 'tclose';
                g.v = 0;
                document.body.appendChild(m);
                document.body.appendChild(j);
                j.appendChild(p);
                p.appendChild(b);
                m.onclick = g.onclick = TINY.box.hide;
                window.onresize = TINY.box.resize
            } else {
                j.style.display = 'none';
                clearTimeout(p.ah);
                if (g.v) {
                    p.removeChild(g);
                    g.v = 0
                }
            }
            p.id = v.boxid;
            m.id = v.maskid;
            j.style.position = v.fixed ? 'fixed' : 'absolute';
            if (v.html && !v.animate) {
                p.style.backgroundImage = 'none';
                b.innerHTML = v.html;
                b.style.display = '';
                p.style.width = v.width ? v.width + 'px' : 'auto';
                p.style.height = v.height ? v.height + 'px' : 'auto'
            } else {
                b.style.display = 'none';
                if (!v.animate && v.width && v.height) {
                    p.style.width = v.width + 'px';
                    p.style.height = v.height + 'px'
                } else {
                    p.style.width = p.style.height = '100px'
                }
            }
            if (v.mask) {
                this.mask();
                this.alpha(m, 1, v.opacity)
            } else {
                this.alpha(j, 1, 100)
            }
            if (v.autohide) {
                p.ah = setTimeout(TINY.box.hide, 1000 * v.autohide)
            } else {
                document.onkeyup = TINY.box.esc
            }
        },
        fill: function(c, u, k, a, w, h) {
            if (u) {
                if (v.image) {
                    var i = new Image();
                    i.onload = function() {
                        w = w || i.width;
                        h = h || i.height;
                        TINY.box.psh(i, a, w, h)
                    };
                    i.src = v.image
                } else if (v.iframe) {
                    this.psh('<iframe id= "omniFrame"  src="' + v.iframe + '" width="' + v.width + '" frameborder="0" height="' + v.height + '"></iframe>', a, w, h)
                } else {
                    var x = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
                    x.onreadystatechange = function() {
                        if (x.readyState == 4 && x.status == 200) {
                            p.style.backgroundImage = '';
                            TINY.box.psh(x.responseText, a, w, h)
                        }
                    };
                    if (k) {
                        x.open('POST', c, true);
                        x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                        x.send(k)
                    } else {
                        x.open('GET', c, true);
                        x.send(null)
                    }
                }
            } else {
                this.psh(c, a, w, h)
            }
        },
        psh: function(c, a, w, h) {
            if (typeof c == 'object') {
                b.appendChild(c)
            } else {
                b.innerHTML = c
            }
            var x = p.style.width,
                y = p.style.height;
            if (!w || !h) {
                p.style.width = w ? w + 'px' : '';
                p.style.height = h ? h + 'px' : '';
                b.style.display = '';
                if (!h) {
                    h = parseInt(b.offsetHeight)
                }
                if (!w) {
                    w = parseInt(b.offsetWidth)
                }
                b.style.display = 'none'
            }
            p.style.width = x;
            p.style.height = y;
            this.size(w, h, a)
        },
        esc: function(e) {
            e = e || window.event;
            if (e.keyCode == 27) {
                TINY.box.hide()
            }
        },
        hide: function() {
            TINY.box.alpha(j, - 1, 0, 3);
            document.onkeypress = null;
            if (v.closejs) {
                v.closejs()
            }
        },
        resize: function() {
            TINY.box.pos();
            TINY.box.mask()
        },
        mask: function() {
            m.style.height = this.total(1) + 'px';
            m.style.width = this.total(0) + 'px'
        },
        pos: function() {
            var t;
            if (typeof v.top != 'undefined') {
                t = v.top
            } else {
                t = (this.height() / v.topsplit) - (j.offsetHeight / 2);
                t = t < 20 ? 20 : t
            }
            if (!v.fixed && !v.top) {
                t += this.top()
            }
            j.style.top = t + 'px';
            j.style.left = typeof v.left != 'undefined' ? v.left + 'px' : (this.width() / 2) - (j.offsetWidth / 2) + 'px'
        },
        alpha: function(e, d, a) {
            clearInterval(e.ai);
            if (d) {
                e.style.opacity = 0;
                e.style.filter = 'alpha(opacity=0)';
                e.style.display = 'block';
                TINY.box.pos()
            }
            e.ai = setInterval(function() {
                TINY.box.ta(e, a, d)
            }, 20)
        },
        ta: function(e, a, d) {
            var o = Math.round(e.style.opacity * 100);
            if (o == a) {
                clearInterval(e.ai);
                if (d == -1) {
                    e.style.display = 'none';
                    e == j ? TINY.box.alpha(m, - 1, 0, 2) : b.innerHTML = p.style.backgroundImage = ''
                } else {
                    if (e == m) {
                        this.alpha(j, 1, 100)
                    } else {
                        j.style.filter = '';
                        TINY.box.fill(v.html || v.url, v.url || v.iframe || v.image, v.post, v.animate, v.width, v.height)
                    }
                }
            } else {
                var n = a - Math.floor(Math.abs(a - o) * .5) * d;
                e.style.opacity = n / 100;
                e.style.filter = 'alpha(opacity=' + n + ')'
            }
        },
        size: function(w, h, a) {
            if (a) {
                clearInterval(p.si);
                var wd = parseInt(p.style.width) > w ? -1 : 1,
                    hd = parseInt(p.style.height) > h ? -1 : 1;
                p.si = setInterval(function() {
                    TINY.box.ts(w, wd, h, hd)
                }, 20)
            } else {
                p.style.backgroundImage = 'none';
                if (v.close) {
                    p.appendChild(g);
                    g.v = 1
                }
                p.style.width = w + 'px';
                p.style.height = h + 'px';
                b.style.display = '';
                this.pos();
                if (v.openjs) {
                    v.openjs()
                }
            }
        },
        ts: function(w, wd, h, hd) {
            var cw = parseInt(p.style.width),
                ch = parseInt(p.style.height);
            if (cw == w && ch == h) {
                clearInterval(p.si);
                p.style.backgroundImage = 'none';
                b.style.display = 'block';
                if (v.close) {
                    p.appendChild(g);
                    g.v = 1
                }
                if (v.openjs) {
                    v.openjs()
                }
            } else {
                if (cw != w) {
                    p.style.width = (w - Math.floor(Math.abs(w - cw) * .6) * wd) + 'px'
                }
                if (ch != h) {
                    p.style.height = (h - Math.floor(Math.abs(h - ch) * .6) * hd) + 'px'
                }
                this.pos()
            }
        },
        top: function() {
            return document.documentElement.scrollTop || document.body.scrollTop
        },
        width: function() {
            return self.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        },
        height: function() {
            return self.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        },
        total: function(d) {
            var b = document.body,
                e = document.documentElement;
            return d ? Math.max(Math.max(b.scrollHeight, e.scrollHeight), Math.max(b.clientHeight, e.clientHeight)) : Math.max(Math.max(b.scrollWidth, e.scrollWidth), Math.max(b.clientWidth, e.clientWidth))
        }
    }
}();


function PopOmniStore(productId, isProductImage) {
    var width = 0,
        height = 0;
    if (typeof(window.innerWidth) == 'number') {
        //Non-IE
        width = window.innerWidth;
        height = window.innerHeight;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        //IE 6+ in 'standards compliant mode'
        width = document.documentElement.clientWidth;
        height = document.documentElement.clientHeight;
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        //IE 4 compatible
        width = document.body.clientWidth;
        height = document.body.clientHeight;
    }

    height = Math.floor(height * 3 / 4); // Grab 3/4 of the vertical real estate
    if (height > 560) height = 560; // Stores look empty when bigger then this
    width = Math.floor(height / 9 * 16); // 16 x 9 aspect ratio matched HD video
    var jspName = 'product-info.jsp';
    if (isProductImage) jspName = 'product-shopping.jsp';
    TINY.box.show({
        iframe: url42 + jspName + '?id=' + productId,
        clost: 'true',
        boxid: 'frameless',
        width: width,
        height: height,
        fixed: false,
        maskid: 'graymask',
        maskopacity: 40
    });
};

function PopOmniStoreByPartnerId(partnerId) {
    var width = 0,
        height = 0;
    if (typeof(window.innerWidth) == 'number') {
        //Non-IE
        width = window.innerWidth;
        height = window.innerHeight;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        //IE 6+ in 'standards compliant mode'
        width = document.documentElement.clientWidth;
        height = document.documentElement.clientHeight;
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        //IE 4 compatible
        width = document.body.clientWidth;
        height = document.body.clientHeight;
    }

    height = Math.floor(height * 3 / 4); // Grab 3/4 of the vertical real estate
    if (height > 560) height = 560; // Stores look empty when bigger then this
    width = Math.floor(height / 9 * 16); // 16 x 9 aspect ratio matched HD video
    TINY.box.show({
        iframe: url42 + "product-info.jsp?partnerId=" + partnerId,
        clost: 'true',
        boxid: 'frameless',
        width: width,
        height: height,
        fixed: false,
        maskid: 'graymask',
        maskopacity: 40
    });
};

$(document).ready(function() {

    // Activate any 42andPark links to trigger an Omnistore overlay
    $('[data-omnistore]').on('click', function(e) {
        if ($(this).attr('data-partner-id')) {
            PopOmniStoreByPartnerId($(this).attr('data-partner-id'));
        } else if ($(this).attr('data-product-id')) {
            var isImage = true;
            if ($(this).attr('data-is-image'))
                isImage = $(this).attr('data-is-image') === 'true' ? true : false;
            PopOmniStore($(this).attr('data-product-id'), isImage);
        }
    });

});
$(document).ready(function(e) {
    $('.career-signup-widget  a').on('click',function(e) {
        e.preventDefault();
        window.open($(this).attr('href'),'workopolis','width=620,height=280,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,addressbar=no,directories=no,status=no');
    });
});
$(document).ready(function() {

	// Compile info about a clicked link to send to Omniture
	// source: which component was it?
	// pos: which link in the list was it?
	// url: slug of the destination page (or full URL for external sites)
	// segment: which segment did this link come from (when AAM is enabled)
	// comment-icon: comment bubble was clicked, rather than the headline itself
	$(document).on('click', 'div.editors-picks a', function(e) {
		var notes = new Array();
		var picks = $(this).closest('div.editors-picks');
		var source = picks.attr('data-comp-path');
		var pos = (picks.find('li').index($(this).closest('li')) + 1) + '/' + picks.find('li').length;
		if ($(this).parent().hasClass('comment-icon'))
			notes.push('comment-icon');
		if (typeof $(this).closest('li').attr('data-segment') != 'undefined')
			notes.push('segment:' + $(this).closest('li').attr('data-segment'));
		var url = ($(this).attr('href')).replace(/http(s)?:\/\//gi, '');
		if (url.indexOf(localprefix) != -1)
			url = (url).replace(/.*\/(.*)$/gi, '$1').replace('.html', '');
		var msg = [
			'EditorsPicks',
			'src:' + source,
			'pos:' + pos,
			'url:' + url
		];
		if (notes.length)
			msg.push(notes.join('|'));
		//trackEditorsPicks(msg.join('|'));
	});

});
$(document).ready(function() {

	// Compile info about a clicked link to send to Omniture
	// page: which article page are we on?
	// url: slug of the destination page (or full URL for external sites)
	// segment: which segment did this link come from (when AAM is enabled)
	// comment-icon: comment bubble was clicked, rather than the headline itself
	// thumbnail: thumbnail image was clicked, rather than the headline itself
	$(document).on('click', 'div.article-aam-footer a', function(e) {
		var notes = new Array();
		var footer = $(this).closest('div.article-aam-footer');
		var page = document.location.pathname;
		if ($(this).parent().hasClass('comment-icon'))
			notes.push('comment-icon');
		if ($(this).hasClass('thumbnail'))
			notes.push('thumbnail');
		if (typeof $(this).closest('li').attr('data-segment') != 'undefined')
			notes.push('segment:' + $(this).closest('li').attr('data-segment'));
		var url = ($(this).attr('href')).replace(/http(s)?:\/\//gi, '');
		if (url.indexOf(localprefix) != -1)
			url = (url).replace(/.*\/(.*)$/gi, '$1').replace('.html', '');
		var msg = [
			'ArticleAAMFooter',
			'page:' + page,
			'url:' + url
		];
		if (notes.length)
			msg.push(notes.join('|'));
		trackArticleAAMFooter(msg.join('|'));
	});






});
/**------------------------------------------------------
//* Description: Obituary Component Module
//* Author : Kelaggan
//* Version: 1.0
//* Includes: 
//+  - Calendar widget Intialization
//+  - Form Elements Validation
//+  - DDL Manipulation
//+  - Form Handlers
//* Notes: 
//*  - This is explicitly scripted for this component
//*  - Fully customizable
------------------------------------------------------**/
var Obituary = {
	/**--------------------------
	//* Calender date picker
	---------------------------**/
	pickDateInit: function(inputId) {
   		function getProps(propName, propValue){
			this[propName] = propValue;
		}
		var opts = {
				//formElements: new getProps(inputId,'%d/%m/%Y'),
				formElements: new getProps(inputId,'%Y-%m-%d'),
				showWeeks:false,
				statusFormat:"%l, %d%S %F %Y",
				//disable future dates
				rangeHigh:new Date(),
			}
	  	calenderController.createDatePicker(opts);
	},

	intiatDatePicker: function(){
		Obituary.pickDateInit("search-input-date");
		Obituary.pickDateInit("search-input-start-date");
		Obituary.pickDateInit("search-input-end-date");
	},
	/**--------------------------
	//* Core Intiaization
	---------------------------**/
	init: function(){
		this.intiatDatePicker();
		this.ddlInitiate();
		this.formHandlers();
		this.formValidation();
		this.toggleDate();
	},

	/**--------------------------
	//* Validate Date Field script
	---------------------------**/
	checkdate: function(id){
	 	input = $(id);
		var validformat=/^\d{2}\/\d{2}\/\d{4}$/ ;//Basic check for format validity
		var returnval=false;

		if (!validformat.test(input.val())){
			$(id).css( "border", "1px solid #e00909" );
			$(".error-tags").fadeIn(1500).fadeOut(1500);
			$('.obituary-box .button').attr('disabled', true).css("background-color","#68B0DF");
			
		}else{ //Detailed check for valid date ranges
			var monthfield=input.val().split("/")[0];
			var dayfield=input.val().split("/")[1];
			var yearfield=input.val().split("/")[2];
			var dayobj = new Date(yearfield, monthfield-1, dayfield);

			if ((dayobj.getMonth()+1!=monthfield)||(dayobj.getDate()!=dayfield)||(dayobj.getFullYear()!=yearfield)){
				$(".error-tags").fadeIn(1500).fadeOut(1500);
				//errorFlag ++;
			}else{
				returnval=true;
				//errorFlag --;
				console.log("removing");
				$(id).css( "border", "1px solid #C7C3C3" );
				//re-enable
				$('.obituary-box .button').removeAttr('disabled').css("background-color","#0072bb");
			}
		}
		return returnval;
	},
	/**--------------------------
	//* Form Handlers
	---------------------------**/
	formHandlers: function(){
		// Is placeholder supported?
		if ('placeholder' in document.createElement('input')) {
			return false;
		} else {
			// Set the initial values of the inputs as placeholder text
			$('.obituary-search-form input').val(function() {
				if (this.value.length == 0) {
					return $(this).attr('placeholder');
				}
			});
			// Hook up a handler to delete the placeholder text on focus,
			// and put it back on blur
			$('.obituary-search-form').delegate('input', 'focus', function() {
				if (this.value === $(this).attr("placeholder")) {
					this.value = '';
			}}).delegate('input', 'blur', function() {
				if (this.value.length == 0) {
					this.value = $(this).attr("placeholder");
				}
			});
		}
	},
	/**--------------------------
	//* Validation engine
	---------------------------**/
	formValidation: function(){

		$( "#search-input-date, #search-input-start-date,#search-input-end-date" ).blur(function() {
			// temporarily disable validation rules
		  	//Obituary.checkdate(this);
		});
	},
	// will be used to validate
	stripslashes: function (str) {
		return (str + '').replace(/[^a-zA-Z,.!?\d\s:]/gi, '');
	},
	toggleDate: function(){
		var val=$(".search-input-daterange").val()+'',
		h=$('.obituary-search-box').height(), dh=0;
		$(".spec-date input").val("");
		switch (val){
			case '0':
				$(".date-picker-em").show();
				$(".date-inputs-range").hide();
				break;
			case '88888':
				$(".date-inputs-range").show();
				$(".date-picker-em").hide();
				break;
			default:
				$(".date-inputs-range, .date-picker-em").hide();
		}
		dh=$('.obituary-search-box').height()-h;
		if (dh!=0){
			$('.obituary-box-results').height($('.obituary-box-results').height()-dh);
		}
	},
	ddlInitiate: function(){
		$(".search-input-daterange").change(function(){
			Obituary.toggleDate();
		});
	},

	alignBoxes: function(){
		var $boxes=$(".shatnerBox .pairable");
		if ($boxes.length>1){
			var h0=$($boxes[0]).height(), h1=$($boxes[1]).height(), h=(h0>h1)? h0:h1;
			$([$boxes[0], $boxes[1]]).height(h);
		}
	}
};

$(function(){
	if ($('.obituary-search-form').length){

		$('.obituary-search-form').submit(function(){
			// don't submit placeholders as values
			$(this).find('input[type=text]').each(function(){
				if ($(this).val()==$(this).attr('placeholder')) $(this).val('');
			});
			return true;
		});

		Obituary.init();
		Obituary.alignBoxes();
	}
});

var policardbaseurl="http://misc.thestar.com/projects/policards/public/index.html#";

$(document).on('star_component_init', function() {
	
	//hides policard links if hidepolicard variable is set in the body of the article
	if (typeof hidepolicard != 'undefined' && hidepolicard) {
	   $('div.article-story-body a[data-councillor]').each(function() {
		   var linktext = $(this).text();
		   $(this).replaceWith(linktext);
	   });
	} else {
		init_policard_cta();
		//checks for hash in url, if found popup policard
		show_policard();
	}
});


function init_policard_cta() {
	var councillors = [];
	
	
	//fix links in story
	$('div.article-story-body a[data-councillor]').each(function() {
		var councillor = {};
	    councillor.name = $(this).data("councillor");
	    councillor.searchname = $(this).data("councillor").toLowerCase().replace(/[^a-z]/g, "");
		councillor.img = $(this).data("img");
		councillor.ward = $(this).data("ward");
		councillor.position = $(this).data("position");
		councillors.push(councillor);
		$(this).click(function() { 
			location.href = "#councillor/" + councillor.searchname;
			trackOmniture({"events":"Event31","prop49":councillor.name,"eVar49":councillor.name,
				"prop48":"councillorview","eVar48":"councillorview",
				"pev2":"councillorview","linkname":"link","linkTrackEvents":"Event31",
				"pageName":"policard|" + councillor.searchname + "|councillor",
				"prop2":"policard","eVar2":"policard",
				"prop3":councillor.searchname,"eVar3":councillor.searchname,
				"prop4":"policard|" + councillor.searchname + "|councillor",
				"eVar4":"policard|" + councillor.searchname + "|councillor"});
			return false;
			});
	});
	
	if (councillors.length > 0) {
		
		//Position the card after the first paragraph
		var mm_el = $('div.policard-wrap');
		$('.text.combinedtext.parbase.section').eq(0).append(mm_el);
		$('.policard-wrap').css('padding', '10px 0px 5px 0px');
		
		$('div.policard-wrap').show();
		
		for (var i=0;i<councillors.length;i++) {
			
			var $newcontainer = $('<div/>', {
				"class": 'policard-cardwrap'
			});
			var $newinfodiv = $('<div/>', {
				"class": 'policard-info'
			});
			$newcontainer.append($newinfodiv);
			var $newcenterdiv = $('<div/>', {
				"class": 'policard-center'
			});
			$newinfodiv.append($newcenterdiv);

			var $newcardfor =  $('<span/>', {
				html: "Open policard for "
			});

			var $newcardtitle =  $('<span/>', {
				"class": 'policard-title',
				html: councillors[i].position
			});

			var $newcardname =  $('<span/>', {
				"class": 'policard-name',
				html: councillors[i].name
			});
			$newinfodiv.append($newcardfor,$newcardtitle,$newcardname);
			
			var $newbgimg =  $('<img/>', {
				"class": 'policard-gallery-img',
				"src": '/etc/designs/thestar/images/policard/background.png'
			});
			
			$newcontainer.append($newbgimg);
			
			$newcontainer.data("councillor", councillors[i].searchname);
			$newcontainer.data("councillorname", councillors[i].name);
			$newcontainer.click(function(e){
				window.location.hash = "councillor/" + $(this).data("councillor");
				trackOmniture({"events":"Event32","prop49":$(this).data("councillorname"),"eVar49":$(this).data("councillorname"),
					"prop48":"councillorview","eVar48":"councillorview",
					"pev2":"councillorview","linkname":"widget","linkTrackEvents":"Event32",
					"pageName":"policard|" + $(this).data("councillor") + "|councillor",
					"prop2":"policard", "eVar2":"policard",
					"prop3":$(this).data("councillor"),"eVar3":$(this).data("councillor"),
					"prop4":"policard|" + $(this).data("councillor") + "|councillor",
					"eVar4":"policard|" + $(this).data("councillor") + "|councillor"});
				return false;
			});

			$('div.policard-gallery').append($newcontainer);
		}
	}
	
	
	/*Based on: http://css-plus.com/2013/10/create-your-own-jquery-image-slider/*/
	var policardtotalWidth = 0;
	var policardleft = -542;

	$(".policard-cardwrap").each(function(){
		policardtotalWidth = policardtotalWidth + $(this).outerWidth(true);
	});

	var policardmaxScrollPosition = policardtotalWidth - $(".policardwrap").outerWidth();


	function toGalleryItem($targetItem){
	    if($targetItem.length){
	        var policardnewPosition = $targetItem.position().left;
	        if(policardnewPosition <= policardmaxScrollPosition){
	            $targetItem.addClass("policard-gallery-item--active");
	            $targetItem.siblings().removeClass("policard-gallery-item--active");
	            $(".policard-gallery").animate({
	                left : - policardnewPosition
	            });
	        } else {
	            $(".policard-gallery").animate({
	                left : - policardmaxScrollPosition
	            });
	        };
	    };
	};

	$(".policard-gallery").width(policardtotalWidth);

	// Add active class to the first gallery item
	$(".policard-cardwrap:first").addClass("policard-gallery-item--active");

	// When the prev button is clicked
	// ====================================================================
	$("#policard-back").click(function(){
	    // Set target item to the item before the active item
	    var $targetItem = $(".policard-gallery-item--active").prev();
	    toGalleryItem($targetItem);
	});

	// When the next button is clicked
	// ====================================================================
	$("#policard-next").click(function(){
	    // Set target item to the item after the active item
	    var $targetItem = $(".policard-gallery-item--active").next();
	    toGalleryItem($targetItem);
	});
}

function hashHandler(){
    this.oldHash = window.location.hash;
    this.Check;

    var that = this;
    var detect = function(){
        if(that.oldHash!=window.location.hash){
            that.oldHash = window.location.hash;
            show_policard();
        }
    };
    this.Check = setInterval(function(){ detect(); }, 100);
}
var hashDetection = new hashHandler();

function hide_policard() {
	parent.window.location.hash = "";
}

function getInternetExplorerVersion() {
    var rv = -1; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}

function show_policard() {
	hash = window.location.hash;
    if (hash.indexOf("#councillor") == 0) {	
        $('#policard').width("467").height("600").attr('src', policardbaseurl + hash);
        if (getInternetExplorerVersion() == 8) {
        	$("#policard").css("height", "700");
        }
        $(function() {
           $( "#policard-modal" ).dialog({
        	  close: hide_policard,
        	  show: 'fade',
        	  hide: 'fade',
              modal: true
            });
           $( "#policard-modal" ).dialog( "option", "draggable", false );
			$('.ui-dialog-titlebar-close').css("position","absolute");
			$('.ui-dialog-titlebar-close').css("display","block");
			$('.ui-dialog-titlebar-close').css("top","30px");
			$('.ui-dialog-titlebar-close').css("left","428px");
			$('.ui-dialog-titlebar-close').css("width","30px");
			$('.ui-dialog-titlebar-close').css("height","25px");
			$('.ui-dialog-titlebar-close').text("");
         });
    }
}

/* tracking */
$(document).ready(function() {
// Set up postMessage event listeners
    var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    var eventer = window[eventMethod];
    var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
    // Listen to message from child windows
    eventer(messageEvent, function(e) {
        data = e.data.split(':');
        if (typeof myStar != 'undefined' && e.origin == myStar.domain && data[0] == 'myStar') {
            if (data[1] == 'signedIn'){ 
                localStorage.setItem("signedIn","true");
                localStorage.setItem("userId",data[2]);
                localStorage.setItem("userLoc",data[3]);
                trackMyStarEvent("event8", "myStarSignIn");
            }else if (data[1] == 'signedOut'){
                localStorage.setItem("signedIn","false");
                trackMyStarEvent("event9","myStarSignOut");
                localStorage.setItem("userId",null);
                localStorage.setItem("userLoc",null);
            }else if (data[1] == 'newUser'){
                localStorage.setItem("signedIn","true");
                localStorage.setItem("userId",data[2]);
                localStorage.setItem("userLoc",data[3]);
                trackMyStarEvent("event8", "myStarSignIn");
                trackMyStarEvent("event10", "myStarNewUser");
            }else if (data[1] == 'savedArticle'){
                trackMyStarEvent("event11", "myStarSaveArticle");
            }else if (data[1] == 'unsavedArticle'){
            }
        }
    },false);

});

;(function($){
    "use strict"; // primarily, to avoid accidental undeclared globals
    // check if omniture is there
    if (typeof s_gi!='function' || s_account==undefined){
        $.dbg("s_gi not a function!");
        return;
    }

    if ((/\.bb\.html(?:\?.*)*$/).test(location.href)) s_account='thestarmobilewebphone';// for Blackberry

    var s=s_gi(s_account), _currentIframe=null;

    // get omniture evar mapped to a custom property
    var prop2evar=function(propname, fallback){
        if (fallback==undefined) fallback=propname;
        var map={
            spot: "pev2",
            category: "eVar2"
        };
        return (propname in map)? map[propname]:fallback;
    },

    // enable link element click tracking
    trackLink=function(props){
        var scope=(this && this.href)? this:true; // 1st arg of s.tl depends on presence of href
        var obj=$.extend({type:"o", event:"", spot:"", category:""}, props),
        info=$.grep([obj['spot'], obj['category']], function(p){return !!p;}).join('--'),// combine existing link descriptors together
        evars=['events'];
        for (var p in obj){
            var v=prop2evar(p);
            //if (!p.indexOf("prop") || !p.indexOf("eVar") || !p.indexOf("pev")) varlist.push(p);
            if (v.match(/^(?:prop|eVar|pev)\d+$/) && obj[p]){
                s[v]=obj[p];
                evars.push(v);

                $.dbg(v+" = "+s[v]);// --- DEBUG
            }
        }
        s.linkTrackVars=evars.join(',');
        if (obj['event']) s.events=s.linkTrackEvents=obj['event'];

        s.tl(window, obj['type'], obj['spot']);

        $.dbg("s.linkTrackVars = '"+s.linkTrackVars+"'");// ---- DEBUG
    },

    // track all links inside a container element (except for those having "notrack" class);
    // use container's "data-omni-source" and "data-omni-pos" custom attributes to specify page spot;
    // optionally, use link's "data-omni-category" attribute to specify link's category
    trackInnerLinks=function(opts){
        var box=this;
        //if (!opts || typeof opts!='object') opts={};
        $(box).click(function(evt){
            var targ=evt.target;
            if ($(targ).is('a *')) targ=$(targ).parent('a')[0];// we're in a link's child node, e.g. img,- switch to parent link
            if ($(targ).is('a') && !$(targ).is('.notrack')){ // skip links that have 'notrack' class
                // use proprietary 'data-' attributes to compose link's tracking variables
                var sect=$(box).attr('data-omni-source'), subsect=$(box).attr('data-omni-pos'), cat=$(targ).attr('data-omni-category')||"";
                if (subsect) sect+='_'+subsect;
                var props=$.extend({spot: sect, category: cat, type: "o"}, opts);

                //$.dbg('opts = '+$.repr(opts));// --- DEBUG
                $.dbg("target: '"+targ.tagName+"', props: "+$.repr(props));// --- DEBUG
                trackLink.call(targ, props);// execute as link's own method
                $(targ).addClass("notrack");
                //if ($.isDebug()) return false;//<=============== block links -- DEBUG ONLY!!!
            }
        });
    };

    var trackIframeClick=function(){
        if (_currentIframe==null) return;
        if (document.activeElement==_currentIframe){
            var source=$(_currentIframe).attr('data-omni-source')||$(_currentIframe).attr('id');
            trackLink.call($(_currentIframe).parent[0], {spot: source, type: "o"});// parent node is used instead of iframe itself to avoid security exception in Chrome
            $.dbg("iframe clicked!");
            _currentIframe=null;
        }
        else {
            setTimeout(trackIframeClick, 10);
        }
    };

    // create links' tracking method on jQuery wrapped set
    $.fn.trackLinks=function(opts){
        return this.each(function(){
            trackInnerLinks.call(this, opts);
        });
    };

    // track iframe where mouse currently is
    $.fn.trackIframe=function(){
        return this.each(function(){
            if (this.tagName!='IFRAME') return; // applicable to iframe only!
            var that=this;

            $(this).bind({
                mouseenter: function(){
                    _currentIframe=that;
                    //$.dbg("Entered "+that.tagName+", active element is "+document.activeElement.tagName);
                    if (document.activeElement!=_currentIframe) trackIframeClick();
                },
                mouseleave: function(){
                    _currentIframe=null;
                    //$.dbg("Leaving "+that.tagName+", active element is "+document.activeElement.tagName);
                }
            });

        });
    };


    $(function(){

        $('iframe#fb-top-frame').trackIframe();

        $('.home-sect').trackLinks();// apply to home page major sections

        $('.more-content-and-ads').trackLinks();

    });

})(jQuery);

// Generic tracking omniture code
function trackOmniture(props)
{
	var s = s_gi(s_account);
	s.linkTrackVars = "events";
	//copy attributes from props to s
	for (var attr in props) {
		s[attr] = props[attr];
		if (attr.indexOf("prop") == 0 || attr.indexOf("eVar") == 0 || attr.indexOf("pev") == 0) {
		    s.linkTrackVars += "," + attr;
		}
	}
	s.tl(this, 'o',s.linkname);
};

function trackErrorPage() {
    var s=s_gi(s_account);
    trackSectionEVarsForEvents(s);
    s.trackExternalLinks = false;
    s.eVar44 = '404';
    s.linkTrackVars='eVar1,eVar2,eVar3,eVar4,eVar5,eVar6,eVar7,eVar8,eVar9,eVar10,eVar32,eVar44,events';
    s.linkTrackEvents='event22';
    s.events = 'event22';
    s.tl(this,'o','error page');
    s.events = "";
};

function trackSearchPage() {
    //var s=s_gi(s_account); Not necessary for search
    trackSectionEVarsForEvents(s);
    s.trackExternalLinks = false;
    s.prop36=s.eVar36=s.getQueryParam("q");
    s.linkTrackVars='eVar1,eVar1,eVar2,eVar3,eVar4,eVar5,eVar6,eVar7,eVar8,eVar9,eVar10,eVar32,eVar36,events';
    s.linkTrackEvents='event2';
    s.events = 'event2';
    s.tl(this,'o','search results');
    s.events = "";
};  
/*
 *  Custom link tracking for Facebook share button
 */
function facebookShare() {
    var s=s_gi(s_account);
    trackSectionEVarsForEvents(s);
    s.eVar41='fShare';
    s.events='event17';
    s.trackExternalLinks = false;
    s.linkTrackVars='eVar1,eVar2,eVar3,eVar4,eVar5,eVar6,eVar7,eVar8,eVar9,eVar10,eVar32,eVar41,events';
    s.linkTrackEvents='event17';
    s.tl(this,'o','fShare');
};

/*
 *  Custom link tracking for Google +1 button
 *  Note: for now all the clicks are counted as g+1s
 *  Implementation to be changed in case a second click needs to be considered as g-1
 */
function plusone(obj) {
    var s=s_gi(s_account);
    trackSectionEVarsForEvents(s);
    s.eVar41='GooglePlusOne';
    s.events='event17';
    s.trackExternalLinks = false;
    s.linkTrackVars='eVar1,eVar2,eVar3,eVar4,eVar5,eVar6,eVar7,eVar8,eVar9,eVar10,eVar32,eVar41,events';
    s.linkTrackEvents='event17';
    s.tl(this,'o',s.eVar41);
};

/*
 *  Custom link tracking for Twitter tweet button
 */
function twitterButton() {
    var s = s_gi(s_account);
    trackSectionEVarsForEvents(s);
    s.eVar41 = 'Twitter';
    s.events = 'event17';
    s.trackExternalLinks = false;
    s.linkTrackVars = 'eVar1,eVar2,eVar3,eVar4,eVar5,eVar6,eVar7,eVar8,eVar9,eVar10,eVar32,eVar41,events';
    s.linkTrackEvents = 'event17';
    s.tl(this, 'o', s.eVar41);
};

/*
 *  Custom link tracking for LinkedIn share button
 */
function linkedInButton() {
    var s = s_gi(s_account);
    trackSectionEVarsForEvents(s);
    s.eVar41 = 'LinkedIn';
    s.events = 'event17';
    s.trackExternalLinks = false;
    s.linkTrackVars = 'eVar1,eVar2,eVar3,eVar4,eVar5,eVar6,eVar7,eVar8,eVar9,eVar10,eVar32,eVar41,events';
    s.linkTrackEvents = 'event17';
    s.tl(this, 'o', s.eVar41);
};

/*
 *  Custom link tracking for Reddit share button
 */
function redditButton() {
    var s = s_gi(s_account);
    trackSectionEVarsForEvents(s);
    s.eVar41 = 'Reddit';
    s.events = 'event17';
    s.trackExternalLinks = false;
    s.linkTrackVars = 'eVar1,eVar2,eVar3,eVar4,eVar5,eVar6,eVar7,eVar8,eVar9,eVar10,eVar32,eVar41,events';
    s.linkTrackEvents = 'event17'; 
    s.tl(this, 'o', s.eVar41);
};

/*
 *  Custom tracking for email article button
 */
function emailArticle(txt) {
    var s = s_gi(s_account);
    trackSectionEVarsForEvents(s);
    s.linkTrackEvents = s.events = 'event19';
    s.trackExternalLinks = false;
    s.linkTrackVars = 'eVar1,eVar2,eVar3,eVar4,eVar5,eVar6,eVar7,eVar8,eVar9,eVar10,prop14,eVar14,eVar32,events';
    s.tl(this, 'o', txt);
};

/*
 *  Custom tracking for print article button
 */
function printArticle(txt) {
    var s = s_gi(s_account);
    s.linkTrackEvents = s.events = 'event18';
    s.trackExternalLinks = false;
    trackSectionEVarsForEvents(s);
    s.linkTrackVars = 'eVar1,eVar2,eVar3,eVar4,eVar5,eVar6,eVar7,eVar8,eVar9,eVar10,prop14,eVar14,eVar32,events';
    s.tl(this, 'o', txt);
};

/*
 * Custom tracking for Home Page Top component flip
 */
function trackHomePageTopFlip(id, type){
    var s = s_gi(s_account);
    s.trackExternalLinks = false;
    trackSectionEVarsForEvents(s);
    s.prop43 = s.eVar43 = id;
    if (type == "open"){
        s.linkTrackEvents = s.events = 'event3';
    }else if (type == "close"){
        s.linkTrackEvents = s.events = 'event4';
    }
    s.linkTrackVars = 'eVar1,eVar2,eVar3,eVar4,eVar5,eVar6,eVar7,eVar8,eVar9,eVar10,eVar32,prop43,eVar43,events';
    s.tl(this, 'o', 'HomePageTopFlip');
};

function trackTopicTagClicks(keyword){
    var s = s_gi(s_account);
    trackSectionEVarsForEvents(s);
    s.trackExternalLinks = false;
    s.prop34 = s.eVar34 = keyword;
    s.linkTrackEvents = s.events = 'event15';
    s.linkTrackVars = 'eVar1,eVar2,eVar3,eVar4,eVar5,eVar6,eVar7,eVar8,eVar9,eVar10,eVar32,prop34,eVar34,events';
    s.tl(this,'o', 'TopicTagClick');
}

function trackBreakingNewsClicks(){
    var s = s_gi(s_account);
    trackSectionEVarsForEvents(s);
    s.trackExternalLinks = false;
    s.linkTrackEvents = s.events = 'event14';
    s.linkTrackVars = 'eVar1,eVar2,eVar3,eVar4,eVar5,eVar6,eVar7,eVar8,eVar9,eVar10,eVar32,events';
    s.tl(this,'o', 'BreakingNewsClick');
}

function trackVideoEvents(events){
  s.trackExternalLinks = false;
  trackSectionEVarsForEvents(s);
  s.linkTrackEvents = s.events = events;
  s.linkTrackVars = 'channel,hier1,eVar1,eVar2,eVar3,eVar4,eVar5,eVar6,eVar7,eVar8,eVar9,eVar10,eVar32,eVar37,eVar38,eVar39,eVar45,events,products';
  s.tl(this,'o', 'CustomLinkforVideo');
  s.products = ""; //reset products
  s.events = ""; //reset events
}

function trackMyStarEvent(events, pev2){
  var s = s_gi(s_account);
  s.trackExternalLinks = false;
  trackSectionEVarsForEvents(s);
  s.linkTrackEvents = s.events = events;
  s.linkTrackVars = 'channel,hier1,eVar1,eVar2,eVar3,eVar4,eVar5,eVar6,eVar7,eVar8,eVar9,eVar10,eVar21,eVar22,eVar23, eVar32,events';
  s.tl(this,'o', pev2);
}

function trackSectionEVarsForEvents(s){
 s.eVar1 = "s_code_v3.0 - 2014-10-20";
 s.eVar32 = s.wd.location;
    if(s.pageName){
        s.hierDelim="|";
        s.hier1=s.pageName.replace(/:/g,',');         
        s.hps=s.split(s.hier1,",");
        s.channel=s.prop6=s.eVar6=s.prop2=s.eVar2=s.hps[0];
        if(s.hps.length > 1){
            s.prop3 = s.eVar3 = s.channel+s.hierDelim+s.hps[1];
            s.prop7 = s.eVar7 = s.hps[1];
            if(s.hps.length > 2){
                s.prop4 = s.eVar4 = s.prop3+s.hierDelim+s.hps[2];
                s.prop8 = s.eVar8 = s.hps[2];
                if(s.hps.length > 3){
                    s.prop5 = s.eVar5 = s.prop4+s.hierDelim+s.hps[s.hps.length-1];
                    s.prop9 = s.eVar9 = s.hps[s.hps.length-1];
                }
            }
        }else{
            s.prop2 = s.eVar2 =s.channel;
        }
    }
}

/*  Custom tracking for Commercial Promo and More Star Content components */
 
function trackPromoClick(source, pos, url) {
    var s = s_gi(s_account);
    var txt = source + '|' + pos + '|' + url;
    s.trackExternalLinks = false;
    s.linkTrackVars = 'prop6,eVar6';
    s.tl(this, 'o', txt);
};

/*  Custom tracking for Article AAM Footer component */

function trackArticleAAMFooter(msg) {
    var s = s_gi(s_account);
    s.trackExternalLinks = false;
    s.linkTrackVars = 'prop6,eVar6';
    s.tl(this, 'o', msg);
};

/*  Unused in new tracking - October 2014
 *  Custom tracking for Downloads
 *
function trackDownload(txt) {
    var s = s_gi(s_account);
    s.linkTrackVars='prop18,eVar18,event17';
    s.linkTrackEvents='event17';
    s.eVar18=s.prop18=txt;
    s.events='event17';
    s.tl(this,'d',prop18);
};
*/

/*  Unused in new tracking - October 2014
 *  Custom tracking for comments and replies
 *
function trackRealtidbits(type,url) {
    var s = s_gi(s_account);
    s.eVar1= type+" :content article: "+url;
    s.trackExternalLinks = false;
    s.linkTrackEvents = s.events = 'event11';
    s.linkTrackVars = 'eVar1,events';
    s.tl(this, 'o', s.eVar1);
};
*/

/*  Unused in new tracking - October 2014
 *  Custom tracking for Digital Access CTA header and footer
 *
function trackDigitalAccess(type) {
    var s = s_gi(s_account);
    s.eVar1= type + "Digital Access CTA click";
    s.trackExternalLinks = false;
    s.linkTrackEvents = s.events = 'event8';
    s.linkTrackVars = 'eVar1,events';
    s.tl(this, 'o', s.eVar1);
};
*/

/*  Unused in new tracking - October 2014
 *  Custom tracking for Related videos
 *
function trackRelatedVideo(videoTitle) {
    var s = s_gi(s_account);
    s.eVar1= "Related Video played: " +videoTitle;
    s.trackExternalLinks = false;
    s.linkTrackEvents = s.events = 'event10';
    s.linkTrackVars = 'eVar1,events';
    s.tl(this, 'o', s.eVar1);
};
*/

/*  To be implemented in My Star - October 2014
 *  Custom tracking for Save to MyStar
 *
function trackSavetoMyStar(location) {
    var s = s_gi(s_account);
    s.eVar1= location + ": save to MyStar button click";
    s.trackExternalLinks = false;
    s.linkTrackEvents = s.events = 'event10';
    s.linkTrackVars = 'eVar1,events';
    s.tl(this, 'o', s.eVar1);
};
*/ 

/*  Unused in new tracking - October 2014
 *  Custom tracking for Clicks on Shatner box headings
 *
function trackShatnerBoxClick(result) {
    var s = s_gi(s_account);
    var txt = 'ShatnerBoxClick_' + result;
    s.trackExternalLinks = false;
    s.linkTrackVars = 'prop6,eVar6';
    s.tl(this, 'o', txt);
};
*/

/*  Unused in new tracking - October 2014
 *  Custom tracking for Graphic Lightbox components
 *
function trackGraphicLightboxClick(source) {
    var s = s_gi(s_account);
    var txt = 'GraphicLightbox_' + source;
    s.trackExternalLinks = false;
    s.linkTrackVars = 'prop6,eVar6';
    s.tl(this, 'o', txt);
};
*/

/*  Unused in new tracking - October 2014
 *  Custom tracking for Editors' Picks component
 *
function trackEditorsPicks(msg) {
    var s = s_gi(s_account);
    s.trackExternalLinks = false;
    s.linkTrackVars = 'prop6,eVar6';
    s.tl(this, 'o', msg);
};
*/

/*  Unused in new tracking - October 2014
 *  Standardize Custom link click tracking for Omniture
 *
function trackClickOmniture(source, pos, url) {
    var s = s_gi(s_account);
    var txt = source + '_' + pos + '_' + url;
    s.trackExternalLinks = false;
    s.linkTrackVars = 'prop6,eVar6';
    s.tl(this, 'o', txt);
};
*/

/* /tracking */
(function(v, s) {
    v.type = 'text/javascript';
    v.async = !0;
    v.src = location.protocol !== 'https:' ? '//cdn.viafoura.net/vf.js' : '//api.viafoura.com/app/js/vf.js';
    s.parentNode.insertBefore(v, s);
}(document.createElement('script'), document.getElementsByTagName('script')[0]));

window.vfAsyncInit = function() {

    // viafoura object is available
    window.viafoura.ready(function() {


        window.viafoura.subscribe('onLoginSuccess', function () {
          $('button.vf-comment-submit').click(function(){
              trackMyStarEvent("event12", "CommentSubmitted");
          });
        });
       
        myStar.getCurrentUser(function(passedData){
            if( passedData == null ) {

                $('#comments-section').addClass('loggedOut');
                window.viafoura.session.logout();
            } else {
                $('#comments-section').addClass('loggedIn');
            }


            $(".viafoura").slideDown();
            $(".comment-loader").remove();
        });

        window.viafoura.ui.login.hide();
        window.viafoura.ui.signup.hide();
        window.viafoura.ui.profile.hide();
    });
};

$(window).on('load', function() {

    //User initiated
    var
    isClosed = $('span.show_comments_link').hasClass('comments-closed'),
    commentsCounter = parseInt($('.vf-total-comments').text());
    $('.commentCount').text($('.vf-total-comments').text());

    $('.show_comments_link').click(function() {

        $('.comment_master_list').toggleClass("slidedown");
        var $el = $(this);
        $el.text($el.text() == "Show comments." ? "Hide comments." : "Show comments.");

    });
    
    if (commentsCounter == 1) {
        $('.numberTag').text('There is');
        $('.commentTag').text('comment');
    }
    if (!commentsCounter) {
        $('.commentCount').text('no');
        var be1st = (isClosed) ? "" : "Be the first to comment.";
        $('.show_comments_link')
        .unbind( "click")
        .text(be1st)
        .css({"color":"#666", cursor:"default"})
        ;
        $(".comment_master_list").removeClass("slideup").addClass("slidedown");

    }
    if (isClosed) {
        if (commentsCounter) $('.vf-comment-box').hide();
        else $('.vf-commenting').hide();
    }

    //Watcher
    $('.vf-total-comments').bind("DOMSubtreeModified", function() {
        // Update count if the property you are watching has changed
        $('.commentCount').text($('.vf-total-comments').text());
    });

    if (typeof myStar != 'undefined') {
        myStar.getCurrentUser(function(passedData) {
            if (passedData == null) {
                //inset link
                $('.vf-commenting').prepend('<a href="#" class="alt-vf-login">Login</a>');
                listenSelector = '.alt-vf-login, .vf-comment-form';
                if ($.browser.msie == true && $.browser.version == '8.0') {
                    listenSelector = '#comments_list';
                }
                $(listenSelector).click(function() {
                    //location of the mystar dialog.
                    myStar.openLoginModal();
                });
            }
        });
    }
});

(function($) {

    // scroll to shared comment if comments are present and location hash is present and starts with '#vf-'
    if (location.hash && location.hash.indexOf("vf-") == 1 && $('#comments-section').length) {
        $.dbg("@@@ Hash: " + location.hash);
        var comId = location.hash.replace(/^\D+/, ""),
            el = null,
            msec = 1000,
            selectComment = function() {
                var $all = $(".vf-comment-container");
                for (var i = 0, n = $all.length; i < n; i++) {
                    if ($($all[i]).attr("data-id") == comId) {
                        $.dbg("@@@ Found element with data-id = " + comId);
                        el = $all[i];
                        break;
                    }
                }
                if (el) {
                    var $el = $(el);
                    $el.addClass("high").parents(":hidden").show();
                    $el.one('mouseenter', function() {
                        $(this).removeClass("high");
                    });
                    if ($el.is(":hidden")) $el.show();
                    el.scrollIntoView();
                } else setTimeout(selectComment, msec); // keep trying until comments get loaded
            };

        $(function() {
            setTimeout(selectComment, msec);
        });
    }
})(jQuery);
$(document).ready(function() {
    if (typeof mobileDesktopLink === 'undefined') {
    	mobileDesktopLink = '0';
    } 
    if (mobileDesktopLink=='1') {
        $("#returntomobile").show();
    };
    $("#returntomobile").on('click', function() {
        $.cookie("deskTop", null);
        location.reload();
    });
});
$(document).ready(function () {
                $.ajax({
                    //url: 'http://www.workopolis.com/jobsearch/en/quicksearch-partner',
                    url: 'http://www.workopolis.com/jobsearch/en/quicksearch-torstar',
                    type: 'GET',
                    crossDomain: true,
                    dataType: 'jsonp',
                    success: function (response) { $.dbg("main widget markup returned from ajax call"); $("#search-container-partner").html(response); },
                    error: function () { $.dbg('Failed!'); }
                });
            });
/* videoring */

/*
VideoRing Brightcove Video Wrapper
v 2.2

deps:
$
jq-ext
BrightcoveExperiences
APIModules_all
bc-mapi
bc_ads, bc_track (optional)

CSS: videoring.css

blame: VP
*/

;(function($){

	'use strict';

	if (!('dbg' in $)) {
		$.dbg=function(msg){
			if (typeof console=='object' && ('log' in console)) console.log(msg);
		};
	}

	// private vars
	var
	defaultRotateInterval = 5000, // msec
	defaultMaxPause = 0, // sec
	//classname = 'videoring-placeholder',
	registry = {},
	instCount = 0,
	BCMAPItoken = 'K4YeC-5GUQ7wbdfYgF0ZhUW6AW-pbspywoZIX974aQg3NhfImuYy-Q..',
	initVolume = 0.5,
	postNavDelay = 10000, // msec

	// custom logger
	dbg = function(content){
		$.dbg("videoring: "+content);
	},

	o2s = function(obj){
		try {
			return JSON.stringify(obj, null, 2);
		}
		catch (err) {}
		if ('repr' in $) return $.repr(obj);// defined in jq-ext
		return ""+obj;
	},

	// constructor
	VideoRing = function(data, $box){
		this.instCnt = data.instance_counter;
		this.expId = 'videoring-player-'+this.instCnt;
		this.title = ('name' in data) ? data.name : ''; // available for playlist only
		this.videos = ('videos' in data) ? data.videos : ('items' in data) ? data.items : [];
		this.size = this.videos.length;

		//dbg(this.size+" videos")
		//dbg("videos: "+o2s(this.videos));//<----------

		this.$box = $box;
		this.playerID = $box.attr('data-player-id') || "2071349530001";
		this.playerKey = $box.attr('data-player-key') || "AQ~~,AAAAuO4KaJE~,gatFNwSKdGDmDpIYqNJ-fTHn_c4z_LH_";

		this.width = parseInt($box.attr('data-width') || ($box.parent().width()-8)) || 300;
		this.height = parseInt($box.attr('data-height')) || Math.floor(this.width * 9/16);

		if (this.width < 400) $box.addClass('vr-small');
		else if (this.width > 600) $box.addClass('vr-large');

		this.rotateInterval = parseInt($box.attr('data-interval'));
		if (!isFinite(this.rotateInterval) || this.rotateInterval<300) this.rotateInterval = defaultRotateInterval;

		this.maxPauseSec = parseInt($box.attr('data-max-pause')) || defaultMaxPause;

		this.adCategory = $box.attr('data-ad-category') || "";
		//this.autoPreroll = (($box.attr('data-preroll') || '').toLowerCase()=='auto');// 'auto': autostart 1-st preroll

		this.autocenter = $.yes($box.attr('data-adjust')); // put it in the middle of the parent element

		this.curIdx = 0;
		this.volume = false;
		this.isVideo = false;

		this.ticker = null; // pointer to the interval timer
		this.idleTimeout = null;
		this.rotationStartDelay = null;

		// override headlines?
		var headlines = ($box.attr('data-headlines') || "").split(/\|/g);
		for (var i=0, n=headlines.length; i<n; i++) {
			if (i==this.size) break;
			var title = $.trim(headlines[i]);
			if (title!='') this.videos[i].name = title;
		}
	};

	// instance methods

	VideoRing.prototype.setZ = function(){
		var
		seq = ['.vr-overlay', '.vr-caption', '.vr-nav-prev', '.vr-nav-next', '.vr-navbar', '.vr-videobox', '.vr-close', '.video-ad-placeholder'],
		base = parseInt(this.$box.css('z-index'))||0;
		for (var i=0, n=seq.length; i<n; i++) {
			var z = base + i + 1;
			this.$box.find(seq[i]).css('z-index', z);
			//dbg(seq[i]+" has z-index of "+z);
		}
		return this;
	};

	// normalize numeric index based on the number of videos
	VideoRing.prototype.normalizeIdx = function(idx){
		var i = parseInt(idx);
		if (isFinite(i)) {
			while (i<0) i += this.size;
			while (i>=this.size) i -= this.size;
			return i;
		}
		return 0;
	};

	// set video index
	VideoRing.prototype.setIdx = function(idx){
		this.curIdx = this.normalizeIdx(idx);
		//dbg("current index =  "+this.curIdx);
		return this;
	};

	VideoRing.prototype.createBrightcoveObject = function(){
		var
		expId = this.expId,
		params = {
			playerID: this.playerID,
			playerKey: this.playerKey,
			videoID: this.videos[this.curIdx].id,
			bgColor: '#FFFFFF',
			width: this.width,
			height: this.height,
			autoStart: 'true',
			isUI: 'true',
			isVid: 'true',
			includeAPI: 'true',
			templateLoadHandler: "VideoRing.onTemplateLoaded",
			dynamicStreaming: 'true'
		},
		$obj = $('<object/>')
		.attr('class', 'BrightcoveExperience')
		.attr('id', expId);
		if (this.adCategory) params['adCategoryOverride'] = this.adCategory;
		dbg("CREATING PLAYER "+expId);
		for (var p in params){
			var v=params[p];
			if (!v && v!=0) continue; // ignore empty params
			$('<param/>').attr('name', p).attr('value', v+'').appendTo($obj);
		}
		return $obj;
	};

	VideoRing.prototype.render = function(){
		if (!this.size) {
			dbg("no videos in "+this.expId);
			this.$box.hide();
			return this;
		}
		var that = this;

		this.$box.width(this.width).height(this.height).parent('.videoring-wrap').addClass('star-box');

		// still image wrapper
		var $still = $('<div/>')
		.addClass('vr-still')
		.appendTo(this.$box);

		// placeholder for player object
		$('<div/>')
		.addClass('vr-videobox')
		.appendTo(this.$box)
		.hide()
		;

		// player close button
		$('<div/>')
		.addClass('vr-nav')
		.addClass('vr-close')
		.html('&lsaquo;')
		.appendTo(this.$box)
		.click(function(){
			that.dropPlayer().doSlideshow();
		})
		.hide()
		;

		// create still image frames for each video
		for (var i=0; i<this.size; i++) {
			var
			$div = $('<div/>')
			.addClass('vr-pick')
			.addClass('vr-pick'+i)
			.appendTo($still)
			.hide()
			;

			$('<img/>')
			.attr('src', this.videos[i].videoStillURL)
			.attr('width', this.width)
			.attr('height', this.height)
			.attr('alt', this.videos[i].name)
			.attr('title', this.videos[i].name)
			.appendTo($div);
		};

		// 'play' overlay on top of still images
		$('<div/>')
		.addClass('vr-overlay')
		.fadeTo(0, 0.7)
		.appendTo($still)
		.click(function(){
			that.playVideo();
		});

		// caption overlay
		$('<div/>')
		.addClass('vr-caption')
		.appendTo($still)
		//.fadeTo(0, 0.8)
		;

		// navigation buttons
		if (this.size>1) {
			$('<div/>')
			.addClass('vr-nav')
			.addClass('vr-nav-prev')
			.html('&lsaquo;')
			.appendTo($still)
			//.fadeTo(0, 0.8)
			.click(function(){
				that.goPrev();
			})
			;

			$('<div/>')
			.addClass('vr-nav')
			.addClass('vr-nav-next')
			.html('&rsaquo;')
			.appendTo($still)
			//.fadeTo(0, 0.8)
			.click(function(){
				that.goNext();
			})
			;

			// navigation bullets
			var $navbar = $('<div/>')
			.addClass('vr-navbar')
			.appendTo($still);//.fadeTo(0, 0.5);
			for (var j=0; j<this.size; j++){
				$('<span/>')
				.addClass('vr-navbar-item'+j)
				.attr('data-index', j)
				.html('&bull;')
				.appendTo($navbar)
				.mouseover(function(){
					that.stopRotation().showStill($(this).attr('data-index'));
				})
				.mouseout(function(){
					if (!that.isVideo) that.doSlideshow();
				})
				.click(function(){
					that.playVideo($(this).attr('data-index'));
				})
				;
			}

			$(function(){
				$still.find('.vr-nav').each(function(){
					var h = $(this).height(),
					ph = $still.height(),
					top = Math.floor((ph - h)/2)+'px';
					$(this)
					.css('top', top)
					.hover(function(){
						that.stopRotation();
					}, function(){
						that.resumeRotation(postNavDelay);
					});
				});
			});
		}
		return this.setZ();
	};

	// show still image chosen by index
	VideoRing.prototype.showStill = function(idx){
		var i = (typeof idx=='undefined') ? this.curIdx : this.normalizeIdx(idx),
		$frame = this.$box.find('.vr-pick'+i);
		if ($frame.is(':hidden')) {
			this.isVideo = false;
			this.$box.find('.vr-pick').hide();
			this.$box.find('.vr-pick'+i).show(300);
			this.$box.find('.vr-caption').html(this.videos[i].name).show();
			this.$box.find('.vr-navbar-item'+i).addClass('current').siblings().removeClass('current');
			this.curIdx = i;
		}
		return this;
	};

	VideoRing.prototype.goNext = function(){
		return this.showStill(this.curIdx + 1);
	};

	VideoRing.prototype.goPrev = function(){
		return this.showStill(this.curIdx - 1);
	};

	// change still images one by one
	VideoRing.prototype.doSlideshow = function(){
		if (null!=this.rotationStartDelay) {
			clearTimeout(this.rotationStartDelay);
			this.rotationStartDelay = null;
		}
		this.showStill();
		if (this.size>1 && null==this.ticker){
			dbg("slideshow begins");
			var that = this;
			this.ticker = setInterval(function(){
				that.goNext();
			}, that.rotateInterval);
		}
		return this;
	};

	VideoRing.prototype.stopRotation = function(){
		if (null!==this.ticker) {
			dbg("stopping slideshow");
			clearInterval(this.ticker);
			this.ticker = null;
		}
		if (null!==this.rotationStartDelay) {
			dbg("dropping rotation start timer");
			clearTimeout(this.rotationStartDelay);
			this.ticker = null;
		}
		return this;
	};

	VideoRing.prototype.resumeRotation = function(delay){
		var that = this;
		if (delay) this.rotationStartDelay = setTimeout(function(){that.doSlideshow()}, delay);
		else that.doSlideshow();
		return that;
	};

	VideoRing.prototype.dropPlayer = function(){
		this.clearIdleTimeout();
		this.$box.find('.vr-close').hide();
		this.$box.find('.BrightcoveExperience').remove();
		var $still = this.$box.find('.vr-still');
		$still.show().siblings().hide();
		return this;
	};

	// switch current index and play current video
	VideoRing.prototype.playVideo = function(idx){
		if (typeof idx!='undefined') this.setIdx(idx);

		dbg("about to play video #"+this.curIdx+" ["+this.videos[this.curIdx].name+"]");
		this.stopRotation();
		this.isVideo = true;

		var $player = this.createBrightcoveObject(), $still = this.$box.find('.vr-still');
		this.$box.find('.vr-videobox').append($player).show();
		window.brightcove.createExperiences();
		$still.hide();
		return this;
	};

	VideoRing.prototype.setIdleTimeout = function(){
		if (!this.maxPauseSec || this.maxPauseSec<0) return this;
		var that = this;
		var msec = this.maxPauseSec * 1000;
		//this.$box.find('.vr-close').show();
		this.idleTimeout = setTimeout(function(){
			if (that.isVideo) {
				dbg("video pause timed out");
				that.dropPlayer().doSlideshow();
			}
		}, msec);
		return this;
	};

	VideoRing.prototype.clearIdleTimeout = function(){
		if (!this.idleTimeout) return this;
		dbg("clearing idle timer in "+this.expId);
		clearTimeout(this.idleTimeout);
		this.idleTimeout = null;
		return this;
	};

	VideoRing.prototype.setVolume = function(vol){
		if (typeof vol=='undefined') {
			vol = (this.volume===false) ? initVolume : this.volume;
		}
		var bc = brightcove.getExperience(this.expId),
		vp = (bc) ? bc.getModule(APIModules.VIDEO_PLAYER) : null,
		v = parseFloat(vol);

		if (vp  && isFinite(v)) {
			vp.setVolume(v);
			this.volume = v;
		}
		return this;
	};


	// static properties/methods

	VideoRing.callbacks = {}; // holds separate callbacks for each instance

	// find VideoRing instance by experience ID
	VideoRing.getInstance = function(expId){
		return (expId in registry) ? registry[expId] : null;
	};

	VideoRing.submitRequest = function(method, params){
		params.video_fields = "id,name,shortDescription,videoStillURL";
		BCMAPI.token = BCMAPItoken;
		BCMAPI.callback = 'VideoRing.callbacks['+instCount+']';
		BCMAPI.find(method, params);
	};

	VideoRing.searchVideos=function(videoIds){
		var
		method = 'find_videos_by_ids',
		ids = videoIds.replace(/\s+/g, ''),
		params = {video_ids: ids};
		VideoRing.submitRequest(method, params);
	};

	VideoRing.searchPlaylist=function(playlistId){
		var
		ref = (playlistId.indexOf('ref:')===0),
		id = (ref)? playlistId.replace(/^ref:/, '') : playlistId,
		method = (ref)? 'find_playlist_by_reference_id' : 'find_playlist_by_id',
		whatID = (ref)? 'reference_id' : 'playlist_id',
		params = {};

		params[whatID] = id;
		VideoRing.submitRequest(method, params);
	};

	VideoRing.handleMediaEvent = function(evt, expId){
		var inst = VideoRing.getInstance(expId);
		if (!inst) {
			dbg("instance "+expId+" not found!");
			return;
		}
		dbg("handling "+evt.type+" in "+expId);

		switch (evt.type) {

			case 'mediaChange':
				// apply cached volume
				inst.setVolume();
				// in absense of onTemplateLoaded (bc_track) and presence of bcAdManager (bc_ads), set up ads loading method here
				if (!('onTemplateLoaded' in window) && ('bcAdManager' in window)) {
					bcAdManager.setPrerollCategory(expId);
				}
				break;

			case 'mediaStop':
			case 'adPause':
				inst.$box.find('.vr-close').show();
				inst.setIdleTimeout();
				break;

			case 'mediaPlay':
			case 'adResume':
				inst.$box.find('.vr-close').hide();
				inst.clearIdleTimeout();
				break;

			case 'mediaComplete':
			case 'mediaError':
				// remove brightcove instance
				inst.dropPlayer().doSlideshow();
		}
	};

	VideoRing.onTemplateLoaded = function(expId){
		//if (('onTemplateLoaded' in window) && typeof window.onTemplateLoaded=='function') window.onTemplateLoaded(expId);

		// bind brightcove media event handlers
		var a='mediaChange, mediaStop, mediaPlay, mediaComplete, mediaError'.split(/\W+/),
		bc = brightcove.getExperience(expId),
		vp = bc.getModule(APIModules.VIDEO_PLAYER),
		am = bc.getModule(APIModules.ADVERTISING),
		evts = []
		;

		for (var i=0, n=a.length; i<n; i++) {
			//dbg("binding "+a[i]+" handler in "+expId);
			evts.push(a[i]);
			vp.addEventListener(a[i], function(evt){
				VideoRing.handleMediaEvent(evt, expId);
			});
		}
		a = 'adPause, adResume'.split(/\W+/);

		for (var i=0, n=a.length; i<n; i++) {
			//dbg("binding "+a[i]+" handler in "+expId);
			evts.push(a[i]);
			am.addEventListener(a[i], function(evt){
				VideoRing.handleMediaEvent(evt, expId);
			});
		}
		dbg("handlers bound in "+expId+": "+evts.join(', '));
	};


	// create videoring instance on each matched $ element
	$.fn.videoRing = function(){
		return this.each(function(){
			var $el = $(this),
			videoIds = $el.attr('data-video-id')||'', // comma-separated list of video IDs (priority attribute)
			playlistId = $el.attr('data-playlist-id')||'', // playlist ID or reference ID (if prefixed with 'ref:')
			searchFunc,
			searchId;

			// configure MAPI call
			if (videoIds) {
				searchFunc = VideoRing.searchVideos;
				searchId = videoIds;
			}
			else if (playlistId) {
				searchFunc = VideoRing.searchPlaylist;
				searchId = playlistId;
			}

			if (searchFunc) {
				var cnt = ++instCount;
				VideoRing.callbacks[cnt] = function(data){

					//dbg("data arrived: "+o2s(data));//<-------------

					data.instance_counter = cnt;
					var vr = new VideoRing(data, $el);
					registry[vr.expId] = vr;
					vr.render().doSlideshow();
				};
				searchFunc(searchId);
			}
		});
	};

	// export to global context
	window.VideoRing = VideoRing;

	// initialization moved to pageloadhandler
	/*
	$(function(){
		$('.videoring-placeholder').videoRing();
	});
	*/


})(jQuery);

/* /videoring */
/* videoadplayer */

/*
Ad (RVA) player

deps:
$
jq-ext
http://admin.brightcove.com/js/BrightcoveExperiences.js
http://admin.brightcove.com/js/APIModules_all.js
bc_ads

blame: VP
*/

;
(function($){

	'use strict';

	var
	//classname = 'video-ad-placeholder',

	objIdPrefix = 'ad-player-',

	instances = {},

	defaultParams = {
		playerID: "3852884501001", // dedicated single video player
		playerKey: "AQ~~,AAAAuO4KaJE~,gatFNwSKdGAEqI6QuRG05Tme4OKtGwYy",
		//videoID: "2405442682001", // any valid video
		videoID: "3856739391001", // dedicated 1-frame video
		bgColor: '#FFFFFF',
		autoStart: 'true',
		isUI: 'true',
		isVid: 'true',
		includeAPI: 'true',
		dynamicStreaming: 'true',
		templateLoadHandler: 'onAdTemplateLoaded'
	},

	instCount = 0,

	dbg = function(content){
		$.dbg("videoadplayer: "+$.repr(content));
	},

	getPlayerInstance = function(id){
		return (id in instances) ? instances[id] : null;
	},

	removePlayer = function(id){
		if (id in instances) {
			dbg("removing "+id);
			var inst = instances[id];
			inst.$placeholder.hide('slow').remove();
			delete instances[id];
		}
		else {
			dbg(id+" not exist");
		}
	},

	AdPlayer = function($el, params, category){
		var cnt = ++instCount;
		params = $.extend({}, defaultParams, params);

		this.$placeholder = $el;
		this.expId = objIdPrefix + cnt;

		// ad category (or URL) specified
		this.category = "";
		this.source = "";

		// ad category (or URL) specified
		if (category) {
			if (category.search(/https?:\/\//)===0) this.source = category;
			else this.category = category;
		}

		this.isRva = (!this.source && this.category.indexOf('RVA')===0); // RVA player must have category beginning with 'RVA'

		this.experience = null;
		this.modVideo = null;
		this.modAd = null;

		this.$obj = $('<object/>')
		.attr('id', this.expId)
		.addClass('BrightcoveExperience')
		.addClass('adplayer')
		;

		if (this.isRva) this.$obj.addClass('rva');
		if (this.category) params.adCategoryOverride = this.category;


		for (var p in params){
			var v = params[p];
			if (!v && v!=0) continue;
			$('<param/>')
			.attr('name', p)
			.attr('value', v+'')
			.appendTo(this.$obj);
		}

		dbg(params); // --------------- debug

		// abs-pos player wrapper
		this.$wrapper = $('<div/>')
		.attr('id', this.expId+'-wrap')
		.css({position: 'absolute', width: params.width+'px', height: params.height+'px', top: '-9999px', left: '-9999px', 'z-index': '100'}) // keep it away until ad starts
		.append(this.$obj)
		.appendTo(this.$placeholder)
		;

		this.adStarted = false;

	};

	AdPlayer.prototype.initModules = function(){
		this.experience = brightcove.getExperience(this.expId);
		this.modVideo = this.experience.getModule(APIModules.VIDEO_PLAYER);
		this.modAd = this.experience.getModule(APIModules.ADVERTISING);
		return this;
	};

	AdPlayer.prototype.setVolume = function(vol){
		if (this.modVideo) {
			var v = parseFloat(vol);
			if (isFinite(v)) this.modVideo.setVolume(v);
		}
		return this;
	};

	AdPlayer.prototype.setPrerollAd = function(){
		if (this.source) { // ad URL provided
			dbg("setting ad URL '"+this.source+"' in "+this.expId);
			bcAdManager.setPrerollUrl(this.expId, this.source);
		}
		else {
			dbg("setting ad category '"+this.category+"' in "+this.expId);
			bcAdManager.setPrerollCategory(this.expId, this.category);
		}
		return this;
	};

	AdPlayer.prototype.showAd = function(){
		var that = this, $adbox = $('#'+this.expId+'-wrap').css({left:'0', top:'0'});
		this.$placeholder.height($adbox.height()).one('mouseenter', function(){that.setVolume(0.5)});
		this.adStarted = true;
	};


	$.fn.adPlayer = function(){

		return this.each(function(){
			var
			cnt = 0,
			$it = $(this).css('position', 'relative'),
			width = parseInt($it.attr('data-width') || ($it.parent().width()-8)) || 300,
			height = parseInt($it.attr('data-height')) || Math.floor(width * 9/16),
			category = $it.attr('data-category') || $it.attr('data-src') || '', // category or URL
			params = {
				width: width,
				height: height
			},
			playerID = $it.attr('data-player-id'),
			playerKey = $it.attr('data-player-key'),
			videoID = $it.attr('data-video-id')
			;

			if (playerID && playerKey) {
				params.playerID = playerID;
				params.playerKey = playerKey;
			}

			if (videoID) params.videoID = videoID;

			var ap = new AdPlayer($it, params, category);

			instances[ap.expId] = ap;
			cnt++;
			brightcove.createExperiences();

			dbg(ap.expId+" created");
		});
	};


	window.onAdTemplateLoaded = function(expId){

		var ap = getPlayerInstance(expId);
		if (!ap) return;

		ap.initModules();

		ap.modVideo.addEventListener(BCMediaEvent['CHANGE'], function(evt){
			dbg(evt.type+" fired in "+expId);
			ap.setPrerollAd(expId).setVolume(0);
		});

		ap.modAd.addEventListener(BCAdvertisingEvent['AD_START'], function(evt){
			dbg(evt.type+" fired in "+expId);
			ap.showAd();
		});

		// following events must destroy the player
		ap.modAd.addEventListener(BCAdvertisingEvent['AD_COMPLETE'], function(evt){
			dbg(evt.type+" fired in "+expId);
			removePlayer(expId);
		});

		var evts = [BCMediaEvent['BEGIN'], BCMediaEvent['ERROR'], BCMediaEvent['COMPLETE']];
		for (var i=0, n=evts.length; i<n; i++) {
			var t = evts[i];
			//dbg("setting "+t+" handler in "+expId);
			ap.modVideo.addEventListener(t, function(evt){
				dbg(evt.type+" fired in "+expId);
				if (!ap.adStarted) dbg("ad failed in "+expId);
				removePlayer(expId);
			});
		}
	};

	// initialization moved to pageloadhandler
	/*
	$(function(){
		$('.video-ad-placeholder').adPlayer();
	});
	*/

})(jQuery);

/* /videoadplayer */
$(document).ready(function () {

	$('#blog-nav > ul > li.more > span > a').on('click', function(e) {
			$('#blog-nav > ul > li.more').toggleClass('collapsed').toggleClass('expanded');
	});
});

$(document).on('click', function(event) {
  if (!$(event.target).closest('#blog-nav > ul > li.more > span > a').length) {
		if($('#blog-nav > ul > li.more').hasClass('expanded')){
			$('#blog-nav > ul > li.more').toggleClass('collapsed').toggleClass('expanded');
		}
  }
});
/* bc_init */

/*
Brightcove player dynamic instances initialization.

deps: $, global, BrightcoveExperiences, bc_jq
*/


$(function(){

	// add single video player to the top of videos.html if video ID is supplied
	if (window.location.pathname.match(/^.*videos?\.html$/)){ // '/videos.html', '/news/rr_video.html' etc.
		var
		pp={
			//playerID: $.getQueryParam('bcpid', ''),
			//playerKey: $.getQueryParam('bckey', ''),
			//width: 542,
			//height: 307,
			videoID: $.getQueryParam('bctid', '')
		},
		box=$("div.sectionplaylistvideo div.placeholder, div.feature div.html5-container"); // matching different kinds of pages

		for (var k in pp) if (pp[k]=='') delete pp[k];
		if (pp.videoID && box.length){
			var obj=box.find('object').detach();
			box.attachBrightcove(pp).append($('<p>&nbsp;</p>')).append(obj).css('height', 'auto');
		}
	}

	// convert paras with video ID into players. (e.g. <p class="bc-secondary-video" data-video-id="2405442682001"></p>)
	$(".bc-secondary-video").each(function(){
		var vid=$(this).attr("data-video-id")||"", cnt=0;
		if (vid && vid.match(/^\d+$/)){
			$(this).attachBrightcove({
				id: "secondary-video-"+(++cnt),
				videoID: vid
			});
		}
	});

	// if 3rd-party splitbox ad is present, and no players auto-started within a reasonable period,
	//render the splitbox ads (marked up in articles as '<noscript class="splitbox" src="some-third-party.js"></noscript>')
	setTimeout(function(){
		if ($('.splitbox').length && !$(window).hasAutoStartBrightcove()) {
			$.dbg("auto-starting player not found!");
			var srcs=[];// to keep track on what's already loaded
			$('.splitbox').each(function(){
				var src=$(this).attr('src');
				if (src && $.inArray(src, srcs)<0){
					$('<script/>').attr('type', 'text/javascript').attr('src', src).attr('async', 'true').appendTo($('body'));
					srcs.push(src);
				}
			});
		}
		else {
			$('.splitbox').remove();
		}
	}, 1000);// 1 sec


    // RVA player: set volume to 0.5 if mouse hovers
	var $p=$('.rightrailrvaplaylistvideo .BrightcoveExperience');
	if ($p.length){
		setTimeout(function(){
			var $p=$('.rightrailrvaplaylistvideo .BrightcoveExperience');
			if (!$p.length) return;
			var id=$p.attr('id'),
			bcExp = brightcove.getExperience(id),
			modVP = (bcExp)? bcExp.getModule(APIModules.VIDEO_PLAYER) : null;

			if (!modVP) return;

			$p.parent().one('mouseenter', function(){
				$.dbg("### Setting volume to 0.5 in player "+id);
				modVP.setVolume(0.5);
			});

		}, 1000);
	}

});

/* /bc_init */
/* photoslider */

/*
JS for 'photoslider' image comparison component
created: 2014-10-15
deps: $, jquery_ui_custom (incl. slider)
blame: VP
*/

(function($){

	'use strict';

	var
	initOffset = 50;

	$.fn.imageCompareSlider = function(){
		return this.each(function(){
			var
			$box = $(this).empty(),
			w = $box.attr('data-width') || $box.parent().width(),
			srcL = $box.attr('data-src-left'),
			srcR = $box.attr('data-src-right'),
			title = $box.attr('data-title')||"",
			credit = $box.attr('data-credit')||"",
			caption = $box.attr('data-caption')||"",

			// static pic container
			$picframe = $('<div/>')
			.addClass('static-image-box')
			.css({width:'100%', position:'relative', padding:0})
			.appendTo($box),

			// sliding overlay
			$overlay = $('<div/>')
			.addClass('var-image-box')
			.css({position:'absolute', width:initOffset+'%', top:0, left:0, padding:0, overflow:'hidden', 'border-right':'1px solid #fff'})
			.appendTo($picframe),

			$imgL = $('<img/>').attr({src:srcL, width:w, alt:''}).appendTo($overlay),
			$imgR = $('<img/>').attr({src:srcR, width:w, alt:''}).appendTo($picframe)
			.load(function(){
				var h = $imgR.height();
				$imgL.height(h);

				$picframe
				.height(h)
				;

				$overlay
				.height(h);

				// slider
				$('<div/>')
				.addClass('control-slider')
				.width(w)
				.appendTo($box)
				.slider({
					range: "min",
					min: 0,
					max: 100,
					value: initOffset,
					slide: function(event, ui) {
						$overlay.css('width', ui.value+'%');
					}
				});

				if (credit!="") $('<div class="credit">'+credit+'</div>').appendTo($box);
				if (caption!="") $('<div class="caption">'+caption+'</div>').appendTo($box);

			});

			$box.width(w);

			if (title!="") {
				$('<div class="star-box-heading float-clear"><h2 class="heading">'+title+'</h2></div>')
				.insertBefore($picframe);
			}

		});
	};

	$(function(){
		$('.image-compare-slider').imageCompareSlider();
	})

})(jQuery);

/* /photoslider */
$(document).on('star_component_init', function() {
	 $('div.article-keywords a').on('click', function() {
        var keyword = $(this).text();
        trackTopicTagClicks(keyword);
    });

});
$(document).on('star_component_init', function() {
	 $('div.breaking-news a').on('click', function() {
	 	var href = $('div.breaking-news a').attr('href');
	 	if (href !== typeof undefined && href !== false){
	 		trackBreakingNewsClicks();
	 	}
    });
 });
