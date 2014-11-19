/*
 * jQuery UI Effects 1.7.1
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/
 */
;jQuery.effects || (function($) {

$.effects = {
	version: "1.7.1",

	save: function(element, set) {
		for(var i=0; i < set.length; i++) {
			if(set[i] !== null) element.data("ec.storage."+set[i], element[0].style[set[i]]);
		}
	},

	restore: function(element, set) {
		for(var i=0; i < set.length; i++) {
			if(set[i] !== null) element.css(set[i], element.data("ec.storage."+set[i]));
		}
	},

	setMode: function(el, mode) {
		if (mode == 'toggle') mode = el.is(':hidden') ? 'show' : 'hide'; // Set for toggle
		return mode;
	},

	getBaseline: function(origin, original) { // Translates a [top,left] array into a baseline value
		var y, x;
		switch (origin[0]) {
			case 'top': y = 0; break;
			case 'middle': y = 0.5; break;
			case 'bottom': y = 1; break;
			default: y = origin[0] / original.height;
		};
		switch (origin[1]) {
			case 'left': x = 0; break;
			case 'center': x = 0.5; break;
			case 'right': x = 1; break;
			default: x = origin[1] / original.width;
		};
		return {x: x, y: y};
	},

	createWrapper: function(element) {

		if (element.parent().is('.ui-effects-wrapper'))
			return element.parent();

		var props = { width: element.outerWidth(true), height: element.outerHeight(true), 'float': element.css('float') };
		element.wrap('<div class="ui-effects-wrapper" style="font-size:100%;background:transparent;border:none;margin:0;padding:0"></div>');
		var wrapper = element.parent();

		if (element.css('position') == 'static') {
			wrapper.css({ position: 'relative' });
			element.css({ position: 'relative'} );
		} else {
			var top = element.css('top'); if(isNaN(parseInt(top,10))) top = 'auto';
			var left = element.css('left'); if(isNaN(parseInt(left,10))) left = 'auto';
			wrapper.css({ position: element.css('position'), top: top, left: left, zIndex: element.css('z-index') }).show();
			element.css({position: 'relative', top: 0, left: 0 });
		}

		wrapper.css(props);
		return wrapper;
	},

	removeWrapper: function(element) {
		if (element.parent().is('.ui-effects-wrapper'))
			return element.parent().replaceWith(element);
		return element;
	},

	setTransition: function(element, list, factor, value) {
		value = value || {};
		$.each(list, function(i, x){
			unit = element.cssUnit(x);
			if (unit[0] > 0) value[x] = unit[0] * factor + unit[1];
		});
		return value;
	},

	animateClass: function(value, duration, easing, callback) {

		var cb = (typeof easing == "function" ? easing : (callback ? callback : null));
		var ea = (typeof easing == "string" ? easing : null);

		return this.each(function() {

			var offset = {}; var that = $(this); var oldStyleAttr = that.attr("style") || '';
			if(typeof oldStyleAttr == 'object') oldStyleAttr = oldStyleAttr["cssText"]; /* Stupidly in IE, style is a object.. */
			if(value.toggle) { that.hasClass(value.toggle) ? value.remove = value.toggle : value.add = value.toggle; }

			var oldStyle = $.extend({}, (document.defaultView ? document.defaultView.getComputedStyle(this,null) : this.currentStyle));
			if(value.add) that.addClass(value.add); if(value.remove) that.removeClass(value.remove);
			var newStyle = $.extend({}, (document.defaultView ? document.defaultView.getComputedStyle(this,null) : this.currentStyle));
			if(value.add) that.removeClass(value.add); if(value.remove) that.addClass(value.remove);

			for(var n in newStyle) {
				if( typeof newStyle[n] != "function" && newStyle[n] /* No functions and null properties */
				&& n.indexOf("Moz") == -1 && n.indexOf("length") == -1 /* No mozilla spezific render properties. */
				&& newStyle[n] != oldStyle[n] /* Only values that have changed are used for the animation */
				&& (n.match(/color/i) || (!n.match(/color/i) && !isNaN(parseInt(newStyle[n],10)))) /* Only things that can be parsed to integers or colors */
				&& (oldStyle.position != "static" || (oldStyle.position == "static" && !n.match(/left|top|bottom|right/))) /* No need for positions when dealing with static positions */
				) offset[n] = newStyle[n];
			}

			that.animate(offset, duration, ea, function() { // Animate the newly constructed offset object
				if(typeof $(this).attr("style") == 'object') { $(this).attr("style")["cssText"] = ""; $(this).attr("style")["cssText"] = oldStyleAttr; } else $(this).attr("style", oldStyleAttr);
				if(value.add) $(this).addClass(value.add); if(value.remove) $(this).removeClass(value.remove);
				if(cb) cb.apply(this, arguments);
			});

		});
	}
};


function _normalizeArguments(a, m) {

	var o = a[1] && a[1].constructor == Object ? a[1] : {}; if(m) o.mode = m;
	var speed = a[1] && a[1].constructor != Object ? a[1] : (o.duration ? o.duration : a[2]); //either comes from options.duration or the secon/third argument
		speed = $.fx.off ? 0 : typeof speed === "number" ? speed : $.fx.speeds[speed] || $.fx.speeds._default;
	var callback = o.callback || ( $.isFunction(a[1]) && a[1] ) || ( $.isFunction(a[2]) && a[2] ) || ( $.isFunction(a[3]) && a[3] );

	return [a[0], o, speed, callback];

}

$.fn.extend({

	_show: $.fn.show,
	_hide: $.fn.hide,
	__toggle: $.fn.toggle,
	_addClass: $.fn.addClass,
	_removeClass: $.fn.removeClass,
	_toggleClass: $.fn.toggleClass,

	effect: function(fx, options, speed, callback) {
		return $.effects[fx] ? $.effects[fx].call(this, {method: fx, options: options || {}, duration: speed, callback: callback }) : null;
	},

	show: function() {
		if(!arguments[0] || (arguments[0].constructor == Number || (/(slow|normal|fast)/).test(arguments[0])))
			return this._show.apply(this, arguments);
		else {
			return this.effect.apply(this, _normalizeArguments(arguments, 'show'));
		}
	},

	hide: function() {
		if(!arguments[0] || (arguments[0].constructor == Number || (/(slow|normal|fast)/).test(arguments[0])))
			return this._hide.apply(this, arguments);
		else {
			return this.effect.apply(this, _normalizeArguments(arguments, 'hide'));
		}
	},

	toggle: function(){
		if(!arguments[0] || (arguments[0].constructor == Number || (/(slow|normal|fast)/).test(arguments[0])) || (arguments[0].constructor == Function))
			return this.__toggle.apply(this, arguments);
		else {
			return this.effect.apply(this, _normalizeArguments(arguments, 'toggle'));
		}
	},

	addClass: function(classNames, speed, easing, callback) {
		return speed ? $.effects.animateClass.apply(this, [{ add: classNames },speed,easing,callback]) : this._addClass(classNames);
	},
	removeClass: function(classNames,speed,easing,callback) {
		return speed ? $.effects.animateClass.apply(this, [{ remove: classNames },speed,easing,callback]) : this._removeClass(classNames);
	},
	toggleClass: function(classNames,speed,easing,callback) {
		return ( (typeof speed !== "boolean") && speed ) ? $.effects.animateClass.apply(this, [{ toggle: classNames },speed,easing,callback]) : this._toggleClass(classNames, speed);
	},
	morph: function(remove,add,speed,easing,callback) {
		return $.effects.animateClass.apply(this, [{ add: add, remove: remove },speed,easing,callback]);
	},
	switchClass: function() {
		return this.morph.apply(this, arguments);
	},

	cssUnit: function(key) {
		var style = this.css(key), val = [];
		$.each( ['em','px','%','pt'], function(i, unit){
			if(style.indexOf(unit) > 0)
				val = [parseFloat(style), unit];
		});
		return val;
	}
});

/*
 * jQuery Color Animations
 * Copyright 2007 John Resig
 * Released under the MIT and GPL licenses.
 */

$.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function(i,attr){
		$.fx.step[attr] = function(fx) {
				if ( fx.state == 0 ) {
						fx.start = getColor( fx.elem, attr );
						fx.end = getRGB( fx.end );
				}

				fx.elem.style[attr] = "rgb(" + [
						Math.max(Math.min( parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0],10), 255), 0),
						Math.max(Math.min( parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1],10), 255), 0),
						Math.max(Math.min( parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2],10), 255), 0)
				].join(",") + ")";
			};
});


function getRGB(color) {
		var result;

		if ( color && color.constructor == Array && color.length == 3 )
				return color;

		if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
				return [parseInt(result[1],10), parseInt(result[2],10), parseInt(result[3],10)];

		if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
				return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

		if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
				return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

		if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
				return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

		if (result = /rgba\(0, 0, 0, 0\)/.exec(color))
				return colors['transparent'];

		return colors[$.trim(color).toLowerCase()];
}

function getColor(elem, attr) {
		var color;

		do {
				color = $.curCSS(elem, attr);

				if ( color != '' && color != 'transparent' || $.nodeName(elem, "body") )
						break;

				attr = "backgroundColor";
		} while ( elem = elem.parentNode );

		return getRGB(color);
};


var colors = {
	aqua:[0,255,255],
	azure:[240,255,255],
	beige:[245,245,220],
	black:[0,0,0],
	blue:[0,0,255],
	brown:[165,42,42],
	cyan:[0,255,255],
	darkblue:[0,0,139],
	darkcyan:[0,139,139],
	darkgrey:[169,169,169],
	darkgreen:[0,100,0],
	darkkhaki:[189,183,107],
	darkmagenta:[139,0,139],
	darkolivegreen:[85,107,47],
	darkorange:[255,140,0],
	darkorchid:[153,50,204],
	darkred:[139,0,0],
	darksalmon:[233,150,122],
	darkviolet:[148,0,211],
	fuchsia:[255,0,255],
	gold:[255,215,0],
	green:[0,128,0],
	indigo:[75,0,130],
	khaki:[240,230,140],
	lightblue:[173,216,230],
	lightcyan:[224,255,255],
	lightgreen:[144,238,144],
	lightgrey:[211,211,211],
	lightpink:[255,182,193],
	lightyellow:[255,255,224],
	lime:[0,255,0],
	magenta:[255,0,255],
	maroon:[128,0,0],
	navy:[0,0,128],
	olive:[128,128,0],
	orange:[255,165,0],
	pink:[255,192,203],
	purple:[128,0,128],
	violet:[128,0,128],
	red:[255,0,0],
	silver:[192,192,192],
	white:[255,255,255],
	yellow:[255,255,0],
	transparent: [255,255,255]
};

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

$.easing.jswing = $.easing.swing;

$.extend($.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		return $.easing[$.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - $.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return $.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return $.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

})(jQuery);
/*
 * jQuery UI Effects Highlight 1.7.1
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	effects.core.js
 */
(function($) {

$.effects.highlight = function(o) {

	return this.queue(function() {

		var el = $(this), props = ['backgroundImage','backgroundColor','opacity'];

		var mode = $.effects.setMode(el, o.options.mode || 'show'); // Set Mode
		var color = o.options.color || "#ffff99"; // Default highlight color
		var oldColor = el.css("backgroundColor");

		$.effects.save(el, props); el.show(); // Save & Show
		el.css({backgroundImage: 'none', backgroundColor: color}); // Shift

		var animation = {backgroundColor: oldColor };
		if (mode == "hide") animation['opacity'] = 0;

		el.animate(animation, { queue: false, duration: o.duration, easing: o.options.easing, complete: function() {
			if(mode == "hide") el.hide();
			$.effects.restore(el, props);
		if (mode == "show" && $.browser.msie) this.style.removeAttribute('filter');
			if(o.callback) o.callback.apply(this, arguments);
			el.dequeue();
		}});

	});

};

})(jQuery);
/*
 * *************************
 * This is a modified version of the Facebox plugin. Modifications made by Time Inc staff.
 * *************************
 *Facebox (for jQuery)
 * version: 1.2 (05/05/2008)
 * @requires jQuery v1.2 or later
 *
 * Examples at http://famspam.com/facebox/
 *
 * Licensed under the MIT:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2007, 2008 Chris Wanstrath [ chris@ozmm.org ]
 *
 * Usage:
 *
 *  jQuery(document).ready(function() {
 *    jQuery('a[rel*=facebox]').facebox()
 *  })
 *
 *  <a href="#terms" rel="facebox">Terms</a>
 *    Loads the #terms div in the box
 *
 *  <a href="terms.html" rel="facebox">Terms</a>
 *    Loads the terms.html page in the box
 *
 *  <a href="terms.png" rel="facebox">Terms</a>
 *    Loads the terms.png image in the box
 *
 *
 *  You can also use it programmatically:
 *
 *    jQuery.facebox('some html')
 *
 *  The above will open a facebox with "some html" as the content.
 *
 *    jQuery.facebox(function($) {
 *      $.get('blah.html', function(data) { $.facebox(data) })
 *    })
 *
 *  The above will show a loading screen before the passed function is called,
 *  allowing for a better ajaxy experience.
 *
 *  The facebox function can also display an ajax page or image:
 *
 *    jQuery.facebox({ ajax: 'remote.html' })
 *    jQuery.facebox({ image: 'dude.jpg' })
 *
 *  Want to close the facebox?  Trigger the 'close.facebox' document event:
 *
 *    jQuery(document).trigger('close.facebox')
 *
 *  Facebox also has a bunch of other hooks:
 *
 *    loading.facebox
 *    beforeReveal.facebox
 *    reveal.facebox (aliased as 'afterReveal.facebox')
 *    init.facebox
 *
 *  Simply bind a function to any of these hooks:
 *
 *   $(document).bind('reveal.facebox', function() { ...stuff to do after the facebox and contents are revealed... })
 *
 */
(function($) {
  $.facebox = function(data, klass) {
    $.facebox.loading()

    if (data.ajax) fillFaceboxFromAjax(data.ajax)
    else if (data.image) fillFaceboxFromImage(data.image)
    else if (data.div) fillFaceboxFromHref(data.div)
    else if ($.isFunction(data)) data.call($)
    else $.facebox.reveal(data, klass)
  }

  /*
   * Public, $.facebox methods
   */

  $.extend($.facebox, {
    settings: {
      opacity         : 0,
      overlay         : true,
      overlayClickable: true,
      loadingImage    : 'http://dev-jsrails.timeinc.net/i/facebox/loading.gif',
      closeImage      : 'http://dev-jsrails.timeinc.net/i/facebox/closelabel.gif',
      imageTypes      : [ 'png', 'jpg', 'jpeg', 'gif' ],
      faceboxHtml     : '<div id="facebox" style="display:none;"><div class="popup"><table><tbody><tr><td class="tl"/><td class="b"/><td class="tr"/></tr><tr><td class="b"/><td class="body"><div class="content"></div><div class="footer"><a href="#" class="close"><img src="" title="close" class="close_image" /></a></div></td><td class="b"/></tr><tr><td class="bl"/><td class="b"/><td class="br"/></tr></tbody></table></div></div>'
    },

    loading: function() {
      init()
      if ($('#facebox .loading').length == 1) return true
      showOverlay()

      $('#facebox .content').empty()
      $('#facebox .body').children().hide().end().
        append('<div class="loading"><img src="'+$.facebox.settings.loadingImage+'"/></div>')

      $('#facebox').css({
        top:	getPageScroll()[1] + (getPageHeight() / 10),
        left:	385.5
      }).show()

      $(document).bind('keydown.facebox', function(e) {
        if (e.keyCode == 27) $.facebox.close()
        return true
      })
      $(document).trigger('loading.facebox')
    },

    reveal: function(data, klass) {
      $(document).trigger('beforeReveal.facebox')
      if (klass) $('#facebox .content').addClass(klass)
      $('#facebox .content').append(data)
      $('#facebox .loading').remove()
      $('#facebox .body').children().fadeIn('normal')
      $('#facebox').css('left', $(window).width() / 2 - ($('#facebox').width() / 2))
      $(document).trigger('reveal.facebox').trigger('afterReveal.facebox')
    },

    close: function() {
      $(document).trigger('close.facebox')
      return false
    }
  })

  /*
   * Public, $.fn methods
   */

  $.fn.facebox = function(settings) {
    init(settings)

    function clickHandler() {
      $.facebox.loading(true)

      var klass = this.rel.match(/facebox\[?\.(\w+)\]?/)
      if (klass) klass = klass[1]

      fillFaceboxFromHref(this.href, klass)
      return false
    }

    return this.click(clickHandler)
  }

  /*
   * Private methods
   */

  function init(settings) {
    if ($.facebox.settings.inited) return true
    else $.facebox.settings.inited = true

    $(document).trigger('init.facebox')
    makeCompatible()

    var imageTypes = $.facebox.settings.imageTypes.join('|')
    $.facebox.settings.imageTypesRegexp = new RegExp('\.' + imageTypes + '$', 'i')

    var host = $('script[src*=jsrails]').attr('src').match(/[a-z]*-?jsrails/);
    if (host) {
      host = host[0];
    } else {
      host = 'dev-jsrails';
    }
    $.facebox.settings.loadingImage = $.facebox.settings.loadingImage.replace('dev-jsrails', host);
    $.facebox.settings.closeImage = $.facebox.settings.closeImage.replace('dev-jsrails', host);

    if (settings) $.extend($.facebox.settings, settings)
    $('body').append($.facebox.settings.faceboxHtml)

    var preload = [ new Image(), new Image() ]
    preload[0].src = $.facebox.settings.closeImage
    preload[1].src = $.facebox.settings.loadingImage

    $('#facebox').find('.b:first, .bl, .br, .tl, .tr').each(function() {
      preload.push(new Image())
      preload.slice(-1).src = $(this).css('background-image').replace(/url\((.+)\)/, '$1')
    })

    $('#facebox .close').live('click', $.facebox.close)
    $('#facebox .close_image').attr('src', $.facebox.settings.closeImage)
  }

  function getPageScroll() {
    var xScroll, yScroll;
    if (self.pageYOffset) {
      yScroll = self.pageYOffset;
      xScroll = self.pageXOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) {	 // Explorer 6 Strict
      yScroll = document.documentElement.scrollTop;
      xScroll = document.documentElement.scrollLeft;
    } else if (document.body) {// all other Explorers
      yScroll = document.body.scrollTop;
      xScroll = document.body.scrollLeft;
    }
    return new Array(xScroll,yScroll)
  }

  function getPageHeight() {
    var windowHeight
    if (self.innerHeight) {	// all except Explorer
      windowHeight = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
      windowHeight = document.documentElement.clientHeight;
    } else if (document.body) { // other Explorers
      windowHeight = document.body.clientHeight;
    }
    return windowHeight
  }

  function makeCompatible() {
    var $s = $.facebox.settings

    $s.loadingImage = $s.loading_image || $s.loadingImage
    $s.closeImage = $s.close_image || $s.closeImage
    $s.imageTypes = $s.image_types || $s.imageTypes
    $s.faceboxHtml = $s.facebox_html || $s.faceboxHtml
  }

  function fillFaceboxFromHref(href, klass) {
    if (href.match(/#/)) {
      var url    = window.location.href.split('#')[0]
      var target = href.replace(url,'')
      $.facebox.reveal($(target).clone().show(), klass)

    } else if (href.match($.facebox.settings.imageTypesRegexp)) {
      fillFaceboxFromImage(href, klass)
    } else {
      fillFaceboxFromAjax(href, klass)
    }
  }

  function fillFaceboxFromImage(href, klass) {
    var image = new Image()
    image.onload = function() {
      $.facebox.reveal('<div class="image"><img src="' + image.src + '" /></div>', klass)
    }
    image.src = href
  }

  function fillFaceboxFromAjax(href, klass) {
    $.get(href, function(data) { $.facebox.reveal(data, klass) })
  }

  function skipOverlay() {
    return $.facebox.settings.overlay == false || $.facebox.settings.opacity === null
  }

  function showOverlay() {
    if (skipOverlay()) return

    if ($('#facebox_overlay').length == 0)
      $("body").append('<div id="facebox_overlay" class="facebox_hide"></div>')

    $('#facebox_overlay').hide().addClass("facebox_overlayBG")
      .css('opacity', $.facebox.settings.opacity)
      .fadeIn(200)

    if($.facebox.settings.overlayClickable) $('#facebox_overlay').click(function() { $(document).trigger('close.facebox') });

    return false
  }

  function hideOverlay() {
    if (skipOverlay()) return

    $('#facebox_overlay').fadeOut(200, function(){
      $("#facebox_overlay").removeClass("facebox_overlayBG")
      $("#facebox_overlay").addClass("facebox_hide")
      $("#facebox_overlay").remove()
    })

    return false
  }

  /*
   * Bindings
   */

  $(document).bind('close.facebox', function() {
    $(document).unbind('keydown.facebox')
    $('#facebox').fadeOut(function() {
      $('#facebox .content').removeClass().addClass('content')
      hideOverlay()
      $('#facebox .loading').remove()
    })
  })

})(jQuery);
/**
 * Copyright (c) 2005 - 2009, James Auldridge
 * All rights reserved.
 *
 * Licensed under the BSD, MIT, and GPL (your choice!) Licenses:
 *  http://code.google.com/p/cookies/wiki/License
 *
 */
var jaaulde = window.jaaulde || {};
jaaulde.utils = jaaulde.utils || {};
jaaulde.utils.cookies = ( function()
{
	var cookies = [];

	var defaultOptions = {
		hoursToLive: null,
		path: '/',
		domain:  null,
		secure: false
	};
	/**
	 * resolveOptions - receive an options object and ensure all options are present and valid, replacing with defaults where necessary
	 *
	 * @access private
	 * @static
	 * @parameter Object options - optional options to start with
	 * @return Object complete and valid options object
	 */
	var resolveOptions = function( options )
	{
		var returnValue;

		if( typeof options !== 'object' || options === null )
		{
			returnValue = defaultOptions;
		}
		else
		{
			returnValue = {
				hoursToLive: ( typeof options.hoursToLive === 'number' && options.hoursToLive !== 0 ? options.hoursToLive : defaultOptions.hoursToLive ),
				path: ( typeof options.path === 'string' && options.path !== '' ? options.path : defaultOptions.path ),
				domain: ( typeof options.domain === 'string' && options.domain !== '' ? options.domain : defaultOptions.domain ),
				secure: ( typeof options.secure === 'boolean' && options.secure ? options.secure : defaultOptions.secure )
			};
		}

		return returnValue;
	};
	/**
	 * expiresGMTString - add given number of hours to current date/time and convert to GMT string
	 *
	 * @access private
	 * @static
	 * @parameter Integer hoursToLive - number of hours for which cookie should be valid
	 * @return String - GMT time representing current date/time plus number of hours given
	 */
	var expiresGMTString = function( hoursToLive )
	{
		var dateObject = new Date();
		dateObject.setTime( dateObject.getTime() + ( hoursToLive * 60 * 60 * 1000 ) );

		return dateObject.toGMTString();
	};
	/**
	 * assembleOptionsString - analyze options and assemble appropriate string for setting a cookie with those options
	 *
	 * @access private
	 * @static
	 * @parameter Object options - optional options to start with
	 * @return String - complete and valid cookie setting options
	 */
	var assembleOptionsString = function( options )
	{
		options = resolveOptions( options );

		return (
			( typeof options.hoursToLive === 'number' ? '; expires=' + expiresGMTString( options.hoursToLive ) : '' ) +
			'; path=' + options.path +
			( typeof options.domain === 'string' ? '; domain=' + options.domain : '' ) +
			( options.secure === true ? '; secure' : '' )
		);
	};
	
  var decodeValue = function(encodedValue) {
    try {
      return decodeURIComponent(encodedValue);
    } catch (e) {
      // if this cookie was encoded with escape(), it might have
      // invalid unicode %uXXXX forms encoded in it
      try {
        return unescape(encodedValue);
      } catch (e) {
        return '';
      }
    }
  };
	/**
	 * splitCookies - retrieve document.cookie string and break it into a hash
	 *
	 * @access private
	 * @static
	 * @return Object - hash of cookies from document.cookie
	 */
	var splitCookies = function()
	{
		cookies = {};
		var pair, name, value, separated = document.cookie.split( ';' );
		for( var i = 0; i < separated.length; i = i + 1 )
		{
			pair = separated[i].split( '=' );
			name = pair[0].replace( /^\s*/, '' ).replace( /\s*$/, '' );
			value = decodeValue(pair[1]);
			cookies[name] = value;
		}
		return cookies;
	};

	var constructor = function(){};

	/**
	 * get - get one, several, or all cookies
	 *
	 * @access public
	 * @paramater Mixed cookieName - String:name of single cookie; Array:list of multiple cookie names; Void (no param):if you want all cookies
	 * @return Mixed - String:if single cookie requested and found; Null:if single cookie requested and not found; Object:hash of multiple or all cookies
	 */
	constructor.prototype.get = function( cookieName )
	{
		var returnValue;

		splitCookies();

		if( typeof cookieName === 'string' )
		{
			returnValue = ( typeof cookies[cookieName] !== 'undefined' ) ? cookies[cookieName] : null;
		}
		else if( typeof cookieName === 'object' && cookieName !== null )
		{
			returnValue = {};
			for( var item in cookieName )
			{
				if( typeof cookies[cookieName[item]] !== 'undefined' )
				{
					returnValue[cookieName[item]] = cookies[cookieName[item]];
				}
				else
				{
					returnValue[cookieName[item]] = null;
				}
			}
		}
		else
		{
			returnValue = cookies;
		}

		return returnValue;
	};
	/**
	 * filter - get array of cookies whose names match the provided RegExp
	 *
	 * @access public
	 * @paramater Object RegExp - The regular expression to match against cookie names
	 * @return Mixed - Object:hash of cookies whose names match the RegExp
	 */
	constructor.prototype.filter = function( cookieNameRegExp )
	{
		var returnValue = {};

		splitCookies();

		if( typeof cookieNameRegExp === 'string' )
		{
			cookieNameRegExp = new RegExp( cookieNameRegExp );
		}

		for( var cookieName in cookies )
		{
			if( cookieName.match( cookieNameRegExp ) )
			{
				returnValue[cookieName] = cookies[cookieName];
			}
		}

		return returnValue;
	};
	/**
	 * set - set or delete a cookie with desired options
	 *
	 * @access public
	 * @paramater String cookieName - name of cookie to set
	 * @paramater Mixed value - Null:if deleting, String:value to assign cookie if setting
	 * @paramater Object options - optional list of cookie options to specify (hoursToLive, path, domain, secure)
	 * @return void
	 */
	constructor.prototype.set = function( cookieName, value, options )
	{
		if( typeof value === 'undefined' || value === null )
		{
			if( typeof options !== 'object' || options === null )
			{
				options = {};
			}
			value = '';
			options.hoursToLive = -8760;
		}

		var optionsString = assembleOptionsString( options );

		document.cookie = cookieName + '=' + encodeURIComponent( value ) + optionsString;
	};
	/**
	 * del - delete a cookie (domain and path options must match those with which the cookie was set; this is really an alias for set() with parameters simplified for this use)
	 *
	 * @access public
	 * @paramater MIxed cookieName - String name of cookie to delete, or Bool true to delete all
	 * @paramater Object options - optional list of cookie options to specify ( path, domain )
	 * @return void
	 */
	constructor.prototype.del = function( cookieName, options )
	{
		var allCookies = {};

		if( typeof options !== 'object' || options === null )
		{
			options = {};
		}

		if( typeof cookieName === 'boolean' && cookieName === true )
		{
			allCookies = this.get();
		}
		else if( typeof cookieName === 'string' )
		{
			allCookies[cookieName] = true;
		}

		for( var name in allCookies )
		{
			if( typeof name === 'string' && name !== '' )
			{
				this.set( name, null, options );
			}
		}
	};
	/**
	 * test - test whether the browser is accepting cookies
	 *
	 * @access public
	 * @return Boolean
	 */
	constructor.prototype.test = function()
	{
		var returnValue = false, testName = 'cT', testValue = 'data';

		this.set( testName, testValue );

		if( this.get( testName ) === testValue )
		{
			this.del( testName );
			returnValue = true;
		}

		return returnValue;
	};
	/**
	 * setOptions - set default options for calls to cookie methods
	 *
	 * @access public
	 * @param Object options - list of cookie options to specify (hoursToLive, path, domain, secure)
	 * @return void
	 */
	constructor.prototype.setOptions = function( options )
	{
		if( typeof options !== 'object' )
		{
			options = null;
		}

		defaultOptions = resolveOptions( options );
	};

	return new constructor();
} )();

( function()
{
	if( window.jQuery )
	{
		( function( $ )
		{
			$.cookies = jaaulde.utils.cookies;

			var extensions = {
				/**
				 * $( 'selector' ).cookify - set the value of an input field or the innerHTML of an element to a cookie by the name or id of the field or element
				 *                           (radio and checkbox not yet supported)
				 *                           (field or element MUST have name or id attribute)
				 *
				 * @access public
				 * @param Object options - list of cookie options to specify
				 * @return Object jQuery
				 */
				cookify: function( options )
				{
					return this.each( function()
					{
						var i, resolvedName = false, resolvedValue = false, name = '', value = '', nameAttrs = ['name', 'id'], nodeName, inputType;

						for( i in nameAttrs )
						{
							if( ! isNaN( i ) )
							{
								name = $( this ).attr( nameAttrs[ i ] );
								if( typeof name === 'string' && name !== '' )
								{
									resolvedName = true;
									break;
								}
							}
						}

						if( resolvedName )
						{
							nodeName = this.nodeName.toLowerCase();
							if( nodeName !== 'input' && nodeName !== 'textarea' && nodeName !== 'select' && nodeName !== 'img' )
							{
								value = $( this ).html();
								resolvedValue = true;
							}
							else
							{
								inputType = $( this ).attr( 'type' );
								if( typeof inputType === 'string' && inputType !== '' )
								{
									inputType = inputType.toLowerCase();
								}
								if( inputType !== 'radio' && inputType !== 'checkbox' )
								{
									value = $( this ).val();
									resolvedValue = true;
								}
							}

							if( resolvedValue )
							{
								if( typeof value !== 'string' || value === '' )
								{
									value = null;
								}
								$.cookies.set( name, value, options );
							}
						}
					} );
				},
				/**
				 * $( 'selector' ).cookieFill - set the value of an input field or the innerHTML of an element from a cookie by the name or id of the field or element
				 *
				 * @access public
				 * @return Object jQuery
				 */
				cookieFill: function()
				{
					return this.each( function()
					{
						var i, resolvedName = false, name = '', value, nameAttrs = ['name', 'id'], iteration = 0, nodeName;

						for( i in nameAttrs )
						{
							if( ! isNaN( i ) )
							{
								name = $( this ).attr( nameAttrs[ i ] );
								if( typeof name === 'string' && name !== '' )
								{
									resolvedName = true;
									break;
								}
							}
						}

						if( resolvedName )
						{
							value = $.cookies.get( name );
							if( value !== null )
							{
								nodeName = this.nodeName.toLowerCase();
								if( nodeName === 'input' || nodeName === 'textarea' || nodeName === 'select' )
								{
								    $( this ).val( value );
								}
								else
								{
									$( this ).html( value );
								}
							}
						}

						iteration = 0;
					} );
				},
				/**
				 * $( 'selector' ).cookieBind - call cookie fill on matching elements, and bind their change events to cookify()
				 *
				 * @access public
				 * @param Object options - list of cookie options to specify
				 * @return Object jQuery
				 */
				cookieBind: function( options )
				{
					return this.each( function()
					{
						$( this ).cookieFill().change( function()
						{
							$( this ).cookify( options );
						} );
					} );
				}
			};

			$.each( extensions, function( i )
			{
				$.fn[i] = this;
			} );

		} )( window.jQuery );
	}
} )();
/*
    http://www.JSON.org/json2.js
    2009-08-17

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html

    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:


            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.

    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.
*/

/*jslint evil: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/

"use strict";


if (!this.JSON) {
    this.JSON = {};
}

(function () {

    function f(n) {
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                   this.getUTCFullYear()   + '-' +
                 f(this.getUTCMonth() + 1) + '-' +
                 f(this.getUTCDate())      + 'T' +
                 f(this.getUTCHours())     + ':' +
                 f(this.getUTCMinutes())   + ':' +
                 f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {


        escapable.lastIndex = 0;
        return escapable.test(string) ?
            '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c :
                    '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' :
            '"' + string + '"';
    }


    function str(key, holder) {


        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];


        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }


        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }


        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':


            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':


            return String(value);


        case 'object':


            if (!value) {
                return 'null';
            }


            gap += indent;
            partial = [];


            if (Object.prototype.toString.apply(value) === '[object Array]') {


                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }


                v = partial.length === 0 ? '[]' :
                    gap ? '[\n' + gap +
                            partial.join(',\n' + gap) + '\n' +
                                mind + ']' :
                          '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }


            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {


                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }


            v = partial.length === 0 ? '{}' :
                gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                        mind + '}' : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }


    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {


            var i;
            gap = '';
            indent = '';


            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }


            } else if (typeof space === 'string') {
                indent = space;
            }


            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                     typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }


            return str('', {'': value});
        };
    }



    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {


            var j;

            function walk(holder, key) {


                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }



            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }



            if (/^[\],:{}\s]*$/.
test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {


                j = eval('(' + text + ')');


                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }


            throw new SyntaxError('JSON.parse');
        };
    }
}());
/*
 * comments.js
 *
 */
var Comment = (function($) {
  var c = {
    base_url: null,
    brand_name: null,
    section_name: null,
    board_name: null,
    board_url: null,
    board_resource_id: null,
	number_of_boards: 3,
	_board_require_profile: null,
	page_includes_form: null,
	max_level: 3,
	auto_scroll: true,

    init: function(options) {
      options = options || {};

      c.base_url = options["base_url"];
      c.brand_name = options["brand_name"];
      c.section_name = options["section_name"];
      c.board_name = encodeURIComponent(options["board_name"]);
      c.board_url = encodeURIComponent(options["board_url"]);
      c.board_resource_id = encodeURIComponent(options["board_resource_id"]);
	  c.number_of_boards = options["number_of_boards"] || c.number_of_boards;
      c.page_includes_form = $('#new_comment_form').length > 0;
	  c.auto_scroll = (typeof(options.comments_auto_scroll)!=="undefined")?options.comments_auto_scroll:c.auto_scroll;
	  

      if(options.max_level) c.max_level = options.max_level;

      if(!c.page_includes_form){
        c.render_main_form();
      } else {
        c.init_form_behaviours();
      }
    },

    init_expand_replies_links: function() {
      $("#comments a.get.expand_replies_link").live("click", function() {
        var comment_id = $(this).parents(".comment").attr("id").split('_').last();
        c.render_children(comment_id);
        $(this).removeClass("get").addClass("toggle expanded");
        return false;
      });

      $("#comments a.toggle.expand_replies_link").live("click", function() {
        var comment_id = $(this).parents(".comment").attr("id").split('_').last();
        var replies = $("#comment_"+comment_id+" .replies:first");
        if(replies.is(":visible")) {
          replies.hide();
          $(this).removeClass("expanded");
        } else {
          replies.show();
          $(this).addClass("expanded");
          c.scroll_to(replies);
        }
        return false;
      });
    },

    init_add_reply_links: function() {
      $("#comments a.get.add_reply_link").live("click", function() {
        var comment_id = $(this).parents(".comment").attr("id").split('_').last();
        if($(this).parents(".comment").length < c.max_level) {
          var parent_id = comment_id;
        } else {
          var parent_id = $($(this).parents(".comment")[1]).attr("id").split('_').last();
        }
        reply_form = c.clone_form(parent_id);
        reply_form.appendTo("#comment_"+comment_id+" div.form:first");
        c.init_form_behaviours(comment_id);
        c.scroll_to(reply_form);
        $(this).removeClass("get").addClass("toggle");
        return false;
      });

      $("#comments a.toggle.add_reply_link").live("click", function() {
        var comment_id = $(this).parents(".comment").attr("id").split('_').last();
        var form_div = $("#comment_"+comment_id+" div.form:first");
        form_div.toggle();
        if(form_div.is(":visible")) c.scroll_to(form_div);
        return false;
      });
    },

    init_delete_comment_links: function() {
      $("#comments a.delete_comment").live("click", function() {
        var comment_id = $(this).closest(".comment").attr("id").split('_').last();
        $("<form/>").hide().append('<input type="hidden" name="_method" value="delete" />').appendTo($(document.body)).attr("action", c.comment_url(comment_id)).post_with_iframe({
          success: function(response) {
            var comment = $("#comment_"+response.comment.id);
            if(comment.siblings().size() == 0) {
              comment.parents(".comment:first").find(".expand_replies_link:first").removeClass("not_empty").addClass("empty");
            }
            comment.remove();
          }
        }).submit();
        return false;
      });
    },

    init_form_behaviours: function(id) {
      var form = id ? $("#comment_"+id+" form:first") : $("#new_comment_form");
      form.attr("action", c.comments_url()).disable_on_submit().post_with_iframe({
        success: function(response, f){if(response.comment){
            c.insert_comment(response.comment);
			c.render_updated_comments_pagination();
          } else if(response.notice) {
            c.render_message(response.notice);
          }
          f.enable_submit();
          c.reset_form(f, {hide: true});},
        failure: function(response, f){f.enable_submit(); c.render_comment_errors(response.errors, f);}
        });
    },

    init_get_board_details: function(callback){
      $.getJSON(c.board_details_url(), function(data){
        c._board_require_profile = data.comments_board["require_profile?"];
        if(callback != null) callback();
      });
    },

    init_report_inappropriate_links: function(){

      var flag_my_comment = function(me) {
        var comment_id = me.parents(".comment").attr("id").split('_').last();
        c.flag_comment(me, comment_id);
      }

      $("#comments a.get.report_inappropriate_link").live("click", function() {
        var me = $(this);
        Profile.logged_in({
          success: function(){flag_my_comment(me);},
          failure: function(){Profile.log_in();}
        });
        return false;
      });

      $("#comments a.flagged.report_inappropriate_link").live("click", function(){return false;})
    },

    comments_url: function() {
      var page = parseInt(Url.get_param("page"), 10);
	  page = (page)? page : 1;
      return c.build_url([c.board_resource_id, "comments"], ".json?page="+page+"&order="+Url.get_param("order")+"&expand_all="+Url.get_param("expand_all")+"&per_page="+Url.get_param("per_page")+"&board_name="+c.board_name+"&board_url="+c.board_url+"&callback=?");
    },

    comment_url: function(comment_id) {
      return c.build_url([c.board_resource_id, "comments", comment_id]);
    },

    flag_comment_url: function(comment_id) {
      return c.build_url([c.board_resource_id, "comments", comment_id, "flag"], ".json")
    },

    children_url: function(parent) {
      return c.build_url([c.board_resource_id, "comments", parent, "children"], ".json?board_name=" + c.board_name + "&board_url=" + c.board_url + "&callback=?");
    },

    top_boards_url: function() {
	  return c.build_url([], ".json?expecting_type=comments_board&number_of_boards=" + c.number_of_boards +"&callback=?");
    },

	board_details_url: function() {
	  return c.build_url([c.board_resource_id], ".json?expecting_type=comments_board&board_name="+c.board_name+"&board_url="+c.board_url+"&callback=?");
	},

    featured_comment_url: function(options) {
      var options = options || {};
      var url = c.base_url + "/featured_comments.json?callback=?";

      switch(options["scope"]) {
      case 'brand':
        url += "&brand_name="+c.brand_name;
        break;
      case 'section':
        url += "&brand_name="+c.brand_name+"&section_name="+c.section_name;
        break;
      case 'board':
        url += "&brand_name="+c.brand_name+"&section_name="+c.section_name+"&board_resource_id="+c.board_resource_id+"&board_name="+c.board_name+"&board_url="+c.board_url;
        break;
      }
      return url;
    },

    comments_count_url: function() {
      var board_resource_ids = $.map($("a.comments_count"), function(link) { return link.rel; });
      if (board_resource_ids.length == 0) return;
      var url = c.base_url + "/brands/" + c.brand_name + "/sections/" + c.section_name + "/boards/comments_count?board_resource_id[]=" + board_resource_ids.join("&board_resource_id[]=") + "&callback=?";
      return url;
    },

    build_url: function(url_atoms, qs) {
      return [c.base_url, 'brands', c.brand_name, 'sections', c.section_name, 'boards'].concat(url_atoms).join('/') + qs;
    },

    build_url_from_path: function(path) {
      return c.base_url + path
    },

    render_comments_with_pagination: function(options) {
      Url.set_defaults(options);

      $.getJSON(c.comments_url(), function(data) {
        var pagination = data.pagination;
        Pagination.init(pagination);
        pagination.info = Pagination.pagination_info();
        pagination.links = Pagination.paginate();
        pagination.expand_all_or_collapse_all = c.expand_all_or_collapse_all_link();
        pagination.oldest_first = c.oldest_first_link_or_span();
        pagination.newest_first = c.newest_first_link_or_span();
		$("#comments").empty();
        if(typeof(pagination.total_entries) !== 'undefined' && parseInt(pagination.total_entries, 10) > 0){
       		$("#comments").before(Template.evaluate(c.top_pagination_template(), pagination));
        	c.render_comments(data.comments, "#comments");
        	$("#comments").after(Template.evaluate(c.bottom_pagination_template(), pagination));
		}else{
			$("#comments").before(Template.evaluate(c.top_pagination_no_comments_template(), pagination));
			$("#comments").after(Template.evaluate(c.bottom_pagination_no_comments_template(), pagination));
		}
        c.init_expand_replies_links();
        c.init_add_reply_links();
        c.init_report_inappropriate_links();
        c.init_delete_comment_links();
		if(c.auto_scroll && Url.get_param("order")!="" && Url.get_param("page")!=""){
			var t = $("#comments").prev('div.top_pagination').children(':first').offset().top - 10;
			$("html, body").animate({scrollTop: t},1000);
		}
      });
    },
	
    render_updated_comments_pagination: function() {
      $.getJSON(c.comments_url(), function(data) {
        var pagination = data.pagination;
        Pagination.init(pagination);
        pagination.info = Pagination.pagination_info();
        pagination.links = Pagination.paginate();
        pagination.expand_all_or_collapse_all = c.expand_all_or_collapse_all_link();
        pagination.oldest_first = c.oldest_first_link_or_span();
        pagination.newest_first = c.newest_first_link_or_span();

        if((typeof pagination.total_entries) !== 'undefined' && parseInt(pagination.total_entries, 10) > 0){
       		$(".top_pagination").replaceWith(Template.evaluate(c.top_pagination_template(), pagination));
        	$(".bottom_pagination").replaceWith(Template.evaluate(c.bottom_pagination_template(), pagination));
		}
      });
    },
	
    render_comments: function(comments, container) {
      $.each(comments, function(i, obj) {
        var comment = c.convert_comment_path_to_urls(obj);
        $(container).append(Template.evaluate(c.comment_template(), comment));
        if(comment.comments && comment.comments.length > 0) {
          $("#toggle_replies_"+comment.id).removeClass("get").addClass("toggle expanded");
          c.render_comments(comment.comments, "#comment_"+comment.id+" .replies:first");
          if(comment.viewable_children_count > comment.comments.length) {
            $("#comment_"+comment.id+" .replies:first").append(Template.evaluate(c.more_comments_template(), {comments: comment.viewable_children_count, remaining_comments: comment.viewable_children_count-comment.comments.length }));
          }
        }
      });
    },

    render_comment_errors: function(errors, form) {
      var object = {};
      object.count = errors.length;
      object.errors = '';
      $.each(errors, function(i, error) {
        object.errors += error[0].capitalize() + " " + error[1] + "<br />";
      });
      form.find("div.errors").empty().append(Template.evaluate(c.comment_errors_template(), object));
    },

    render_message: function(response) {
      message = $("<div/>").attr("class", "comment").append(response);
      $("#comments").append(message);
      c.scroll_to(message);
    },

    render_children: function(parent, options) {
      options = options || {};
      $.getJSON(c.children_url(parent), function(data) {
        var container = $("#comment_"+parent+" .replies:first");
        container.empty();
        c.render_comments(data, container);
        c.scroll_to(container);
        if(options.highlight) c.highlight("#comment_"+options.highlight);
      });
    },

    render_top_boards: function() {
      $.getJSON(c.top_boards_url(), function(data) {
  		if(data.length > 0) {
  		  var top_boards = '';
          $.each(data, function(i, obj) {
            top_boards += Template.evaluate(c.top_board_template(), obj.board || obj.comments_board);
          });
          $("#top_boards").append(Template.evaluate(c.top_boards_template(), {top_boards: top_boards}));
  		}
      });
    },

    render_featured_comment: function(options) {
      $.getJSON(c.featured_comment_url(options), function(data) {
        if(data){
			data.comment.board = data.comment.resource;
			data.comment.board_url = data.comment.board.url;
			data.comment.board_name = data.comment.board.name;
			data.comment.board_viewable_comments_count = data.comment.board.viewable_comments_count;
            var comment = c.convert_comment_path_to_urls(data.comment);
            $("#featured_comment").append(Template.evaluate(c.featured_comment_template(), comment));
        }
      });
    },

    render_comments_count: function() {
      $.getJSON(c.comments_count_url(), function(data) {
        $("a.comments_count").each(function() {
          board_resource_id = $(this).attr("rel");
          object = {count: data[board_resource_id]};
          if (object.count > 0) $(this).html(Template.evaluate(c.comments_count_template(), object));
        });
      });
    },

	  render_main_form: function() {
	    if($('.comment_form').length > 0)
		    c.render_comments_form("new_comment_form", function(html){$(".comment_form").html(html); c.init_form_behaviours();});
	  },

	  render_comments_form: function(id, insert_template_function){
		  c.require_profile({
			  yes: function(){
				  Profile.logged_in({
					  success: function(){var form = c.build_form_var_map(id, true); insert_template_function(Template.evaluate(c.require_profile_comment_form_logged_in_template(), form));},
					  failure: function(){var form = c.build_form_var_map(id, false); insert_template_function(Template.evaluate(c.require_profile_comment_form_logged_out_template(), form));}
				})

			  },
			  no: function(){
				  Profile.logged_in({
					  success: function(){var form = c.build_form_var_map(id, true); insert_template_function(Template.evaluate(c.anonymous_comment_form_logged_in_template(), form));},
					  failure: function(){var form = c.build_form_var_map(id, false); insert_template_function(Template.evaluate(c.anonymous_comment_form_logged_out_template(), form));}
				  })
			  }
		  })
	  },

    insert_comment: function(comment) {
      order = Url.get_param("order") || 'ASC';
      comment = c.convert_comment_path_to_urls(comment);

      if ($("#comments").size() == 0) {
        window.location = Url.new_url({order: "DESC"}, decodeURIComponent(c.board_url));
      } else if (comment["parent_id"] > 0) {
        if ($("#toggle_replies_"+comment.parent_id).hasClass("get.expand_replies_link.not_empty")) {
          c.render_children(comment.parent_id, {highlight: comment.id});
        } else {
          var replies = $("#comment_"+comment["parent_id"]+" .replies:first");
          replies.append(Template.evaluate(c.comment_template(), comment));
          if (replies.is(":hidden")) replies.show();
          c.scroll_to_and_highlight("#comment_"+comment["id"]);
        }
        $("#toggle_replies_"+comment.parent_id).removeClass("get").addClass("toggle expanded");
        c.update_replies_count(comment.parent_id);
      } else if (order == "ASC") {
        if (Pagination.current_page == Pagination.total_pages) {
          $("#comments").append(Template.evaluate(c.comment_template(), comment));
          c.scroll_to_and_highlight("#comment_"+comment["id"]);
        } else {
          window.location = Url.new_url({page: Pagination.total_pages});
        }
      } else if (order == "DESC") {
        if (Pagination.current_page == 1) {
          $("#comments").prepend(Template.evaluate(c.comment_template(), comment));
          c.scroll_to_and_highlight("#comment_"+comment["id"]);
        } else {
          window.location = Url.new_url({page: 1});
        }
      }
    },

    clone_form: function(comment_id) {
      var reply_form = $("#new_comment_form").clone();
      reply_form.removeAttr("id");
      reply_form.append('<input type="hidden" name="comment[parent_id]" value="'+comment_id+'" />');
      reply_form.find(".form_title").text("Reply");
      c.reset_form(reply_form);
      return reply_form;
    },

    scroll_to: function(element) {
      scroll_to_if_necessary(element);
    },

    highlight: function(comment) {
      $(comment).effect("highlight", {}, 3000);
    },

    scroll_to_and_highlight: function(comment) {
      c.scroll_to(comment);
      c.highlight(comment);
    },

    reset_form: function(form, options) {
      options = options || {};
      form = $(form);

      form.find("input#comment_user_name").val("");
      form.find("textarea").val("");
      form.find("div.errors").empty();
      if (form.attr("id") != "new_comment_form" && options.hide) form.parent().hide();
    },

    update_replies_count: function(id) {
      var tag = $("#comment_"+id+" .expand_replies_link:first");
      tag.text(tag.text().replace(/([\d]+)/, function(i) {return parseInt(i)+1;}));
      if(tag.hasClass("empty")) tag.removeClass("empty").addClass("not_empty");
      if(tag.hasClass("get_comment_replies")) tag.removeClass("get_comment_replies").addClass("toggle_replies");
    },


	  require_profile: function(callbacks){
		  if(c._board_require_profile == null){
			  c.init_get_board_details(function(){
				  if(c._board_require_profile){
					  if(callbacks.yes) callbacks.yes();
				  }else{
					  if(callbacks.no) callbacks.no();
				  }
			  })
		  }else if(c._board_require_profile){
			  if(callbacks.yes) callbacks.yes();
		  }else{
			  if(callbacks.no) callbacks.no();
		  }
	  },

	  convert_comment_path_to_urls: function(comment) {
	    comment = comment.comment ? comment.comment : comment;
      var comment_additions = {};
      comment_additions["profile_url"] = comment.profile == null ? "#" : c.build_url_from_path(comment.profile.path);
      jQuery.extend(comment, comment_additions);
      return comment;
	  },

    build_form_var_map: function(form_id, signed_in) {
      if(signed_in){
        return {form_id: form_id, user_name: Profile.profile.name, small_photo_url: Profile.profile.photos.small, medium_photo_url: Profile.profile.photos.medium, large_photo_url: Profile.profile.photos.large, profile_url: Profile.my_profile_url()}
      } else {
        return {form_id: form_id}
      }
    },

	  flag_comment: function(link, comment_id) {
	    $("<form/>").hide().appendTo($(document.body)).attr("action", c.flag_comment_url(comment_id)).post_with_iframe({
	      success: function(response, form) {link.removeClass("flag").addClass("flagged").html(response.notice)},
	      failure: function() { alert('Error trying to flag comment.'); }
	    }).submit();
	  },

	  /*
	     build_comment_html: function(comment) {

	       var load_image = function(url){
	         var profile_img = new Image();
	         profile_img.src = url;
	       }
	       var reg_mapping = {small_photo_url: /#{\s*small_photo_url/, medium_photo_url: /#{\s*medium_photo_url/, large_photo_url: /#{\s*large_photo_url/};

	       for(var key in reg_mapping) {
	         if(reg_mapping[key].exec(c.comment_template())){
	           load_image(comment[key])
	         }
	       }
	       return Template.evaluate(c.comment_template(), comment);
	     },*/



    expand_all_or_collapse_all_link: function() {
      if(Url.get_params().expand_all == 'true') {
        return '<a class="collapse" href="'+Url.new_url({expand_all: 'false'})+'">Collapse all replies</a>';
      } else {
        return '<a class="expand" href="'+Url.new_url({expand_all: 'true'})+'">Expand all replies</a>';
      }
    },

    oldest_first_link_or_span: function() {
      return c.link_or_span('Oldest first', Url.new_url({page: 1, order: 'ASC'}), Url.get_params().order == 'DESC')
    },

    newest_first_link_or_span: function() {
      return c.link_or_span('Newest first', Url.new_url({page: 1, order: 'DESC'}), Url.get_params().order != 'DESC')
    },

    link_or_span: function(text, link, needs_link) {
      if(needs_link) {
        return '<a href="'+link+'">'+text+'</a>';
      } else {
        return '<span>'+text+'</span>';
      }
    },

    comment_template: function() {
      return '<li class="comment" id="comment_#{id}"><img src=#{small_photo_url} /><span class="author">#{user_name}</span><span class="date">#{created_at:Format.iso_date}</span>#{body:Format.text}<div class="options"><a href="#" class="get expand_replies_link #{viewable_children_count:Format.quantity_class_name}" id="toggle_replies_#{id}">Read replies (#{viewable_children_count})</a> <a href="#" class="get add_reply_link" id="toggle_add_reply_#{id}">Add reply</a><a href="#{profile_url}" class="get view_profile">View profile</a><a href="#" class="get report_inappropriate_link" id="report_inappropriate_link#{id}">Report as inappropriate?</a></div><div class="form"></div><ul class="replies"><li/></ul></li>';
    },

    top_pagination_template: function() {
      return '<div class="top_pagination"><div class="pagination_row1"><div class="left"><b>COMMENTS</b> (#{info})</div><div class="right">#{expand_all_or_collapse_all} <a href="#new_comment_form">Add comment</a></div></div><div class="pagination_row2"><div class="left"><span class="label">Sort by:</span> #{newest_first} | #{oldest_first}</div><div class="right"><span class="label">Page:</span><div class="pagination">#{links}</div></div></div></div>';
    },
	
    top_pagination_no_comments_template: function() {
      return '<div class="top_pagination"><div class="pagination_row1"><div class="left"></div><div class="right"><a href="#new_comment_form">Add comment</a></div></div>';
    },
    bottom_pagination_template: function() {
      return '<div class="bottom_pagination"><div class="right"><span class="label">Page:</span><div class="pagination">#{links}</div></div></div>';
    },
    bottom_pagination_no_comments_template: function() {
      return '<div class="bottom_pagination"></div>';
    },	
    top_boards_template: function() {
      return '<h1>Most talked about boards</h1>#{top_boards}';
    },

    top_board_template: function() {
      return '<div class="top_board"><a href="#{url}">#{name}</a> | <a href="#{url}">Comments (#{viewable_comments_count})</a></div>';
    },

    comments_count_template: function() {
      return 'Replies (#{count})';
    },

    more_comments_template: function() {
      return '<li>There are <a href="#" class="get expand_replies_link">#{remaining_comments}</a> more comments</li>';
    },

    featured_comment_template: function() {
      return '<h3>You Said It...</h3><h4>...about <a href="#{board.url}" class="link-to-article">#{board.name}</a></h4><a href="#{board.url}" class="link-to-comments">Comments (#{board.viewable_comments_count})</a><a href="#{board.url}#add-your-comment" class="link-to-comments">Add comment</a><div class="comment-body"><div class="ldquo">"</div><p>#{body}</p><div class="rdquo">"</div><span class="mdash">-</span><span class="author">#{user_name}</span></div>';
    },

    comment_errors_template: function() {
      return '#{count} errors:<br/>#{errors}';
    },

	  require_profile_comment_form_logged_in_template: function() {
	    return '<form id="#{form_id}" action=""><h1 class="form_title">Add new comment</h1><div class="errors"></div><img src="#{small_photo_url}" /><p><label for="comment_user_name">Name</label><br/><span>#{user_name}</span></p><p><label for="comment_body">Comment</label><br/><textarea id="comment_body" name="comment[body]" cols="50" rows="10"></textarea></p><p><input type="submit" value="Add comment"/></p></form>';
	  },

	  require_profile_comment_form_logged_out_template: function() {
	    return '<form id="#{form_id}" action=""><h1 class="form_title">Please sign up or log in to comment.</h1><div class="errors"></div><p><label for="comment_user_name">Name</label><br/><span>Annonymous</span></p><p><label for="comment_body">Comment</label><br/><textarea id="comment_body" name="comment[body]" cols="50" rows="10"></textarea></p><p><input type="submit" value="Add comment"/></p></form>';
	  },

	  anonymous_comment_form_logged_in_template: function(){
		  return '<form id="#{form_id}" action=""><h1 class="form_title">Add new comment</h1><div class="errors"></div><img src="#{small_photo_url}" /><p><label for="comment_user_name">Name</label><br/><span>#{user_name}</span></p><p><label for="comment_body">Comment</label><br/><textarea id="comment_body" name="comment[body]" cols="50" rows="10"></textarea></p><p><input type="submit" value="Add comment"/></p></form>';
	  },

	  anonymous_comment_form_logged_out_template: function(){
		  return '<form id="#{form_id}" action=""><h1 class="form_title">Add new comment</h1><div class="errors"></div><p><label for="comment_user_name">Name</label><br/><input type="text" id="comment_user_name" name="comment[user_name]" /></p><p><label for="comment_body">Comment</label><br/><textarea id="comment_body" name="comment[body]" cols="50" rows="10"></textarea></p><p><input type="submit" value="Add comment"/></p></form>';
	  }


  };
  return(c);
})(jQuery);
/*
 * polls.js
 *
 */
var Poll = (function($) {
  var init_vote_form = function(id) {
    var iframe_name = "postiframe_"+id;
    var form = $("#poll_form_"+id);

    form.submit(function() {
      var voted_answers = $.map(form.find("input:checked"), function(x) { return(Poll.answer_by_id[x.value]); });
      var validation_message = Poll.validate_votes(voted_answers)
      if (validation_message) {
        Poll.render_error(id, validation_message);
        return false;
      }
      var poll = voted_answers[0].poll;
      var input_me = function(x) { return '<input name="poll[votes][]" value="' + x.id + '" />' };
      var fieldset = $("<fieldset>" + $.map(voted_answers, input_me).join('') + "</fieldset>").hide();
      fieldset.appendTo(form);
      $(document.body).append('<iframe name="'+iframe_name+'" style="display:none;"></iframe>');
      var iframe = $("iframe[name="+iframe_name+"]:last");
      form.attr("action", vote_url(id)).attr("target", iframe_name).attr("method", "post");
      iframe.load(function(){
        var response = iframe.contents().find("body").html();
        try { response = eval(response); }
        catch(e) { response = 'Something went wrong!  Please, try again!'; }
        if (response == ' ') {
          $.each(voted_answers, function(i, answer) {
            answer.vote_count += 1;
            answer.question.total_vote_count += 1;
          });
          if (poll.vote_again_in) {
            var payload = '[' + $.map(voted_answers, function(a) { a.id }) + ']';
            $.cookies.set('poll_'+poll.id, payload, {hoursToLive: (poll.vote_again_in / 3600)});
          }
          poll.template = Poll.closed_poll_template;
          $.each(poll.questions, function(i, question) {
            question.template = Poll.closed_question_template;
            $.each(question.answers, function(i, answer) {
              answer.template = Poll.closed_answer_template;
            } );
          });
          form.replaceWith(build_poll(poll));
        } else {
          Poll.render_error(id, response);
        }
        setTimeout(function() { iframe.remove(); fieldset.remove(); }, 200);
      });
    });
  };

  var polls_url = function() {
    return [create_article_url(), Poll.article, "polls?add_document_domain=true&callback="].join('/') + Poll.callback;
  };

  var vote_url = function(poll_id) {
    return [create_article_url(), Poll.article, "polls", poll_id, "vote?add_document_domain=true"].join('/');

  };

  var create_article_url =  function() {
    return [Poll.base_url, "brands", Poll.brand, "sections", Poll.section, "articles"].join('/');
  };

  var get_target = function(i) {
    return Poll.poll_targets[i] || "#polls";
  };

  var build_poll = function(poll) {
    poll.prebuilt_questions = $.map(poll.questions, build_question).join('')
    return Template.evaluate(poll.template(), poll);
  };

  var build_question = function(question) {
    question.prebuilt_answers = $.map(question.answers, build_answer).join('');
    return Template.evaluate(question.template(), question);
  };

  var build_answer = function(answer) {
    var tvc = answer.question.total_vote_count;
    answer.prebuilt_image = (answer.image_source_url ? Template.evaluate(Poll.answer_image_template(), answer) : '');
    answer.prebuilt_enlarge = (answer.image_enlarge_url ? Template.evaluate(Poll.answer_image_enlarge_template(), answer) : '');;
    answer.percentage = ((tvc && tvc > 0) ? ((answer.vote_count / tvc) * 100) : 0).toFixed(2);
    return Template.evaluate(answer.template(), answer);
  };

  var build_creating_article = function(article) {
    article.prebuilt_creating_polls = build_creating_polls(article.polls)
    return Template.evaluate(creating_article_template(), article);
  };

  var build_creating_polls = function(polls) {
    return $.map(polls, function(poll, i) {
      poll.i = i;
      poll.prebuilt_creating_questions = build_creating_questions(poll.questions, i)
      return Template.evaluate(creating_poll_template(), poll);
    }).join('');
  };

  var build_creating_questions = function(questions, pi) {
    return $.map(questions, function(question, i) {
      question.pi = pi;
      question.i = i;
      question.prebuilt_creating_answers = build_creating_answers(question.answers, pi, i)
      return Template.evaluate(creating_question_template(), question);
    }).join('');
  };

  var build_creating_answers = function(answers, pi, qi) {
    return $.map(answers, function(answer, i) {
      answer.pi = pi;
      answer.qi = qi;
      answer.i = i;
      answer.prebuilt_image = (answer.image_source_url ? Template.evaluate(creating_answer_image_template(), answer) : '');
      answer.prebuilt_enlarge = (answer.image_enlarge_url ? Template.evaluate(creating_answer_image_enlarge_template(), answer) : '');;
      return Template.evaluate(creating_answer_template(), answer);
    }).join('');
  };

  var creating_article_template = function() {
    return '<input name="article[name]" value="#{name}" /><input name="article[url]" value="#{url}" /><input name="article[resource_id]" value="#{resource_id}" />#{prebuilt_creating_polls}';
  };

  var creating_poll_template = function() {
    return '<input name="article[polls_attributes][new_#{i}][name]" value="#{name}" /><input name="article[polls_attributes][new_#{i}][description]" value="#{description}" /><input name="article[polls_attributes][new_#{i}][vote_again_in]" value="#{vote_again_in}" /><input name="article[polls_attributes][new_#{i}][position]" value="#{position}" />#{prebuilt_creating_questions}';
  };

  var creating_question_template = function() {
    return '<input name="article[polls_attributes][new_#{pi}][questions_attributes][new_#{i}][text]" value="#{text}" /><input name="article[polls_attributes][new_#{pi}][questions_attributes][new_#{i}][position]" value="#{position}" />#{prebuilt_creating_answers}';
  };

  var creating_answer_template = function() {
    return '<input name="article[polls_attributes][new_#{pi}][questions_attributes][new_#{qi}][answers_attributes][new_#{i}][text]" value="#{text}" /><input name="article[polls_attributes][new_#{pi}][questions_attributes][new_#{qi}][answers_attributes][new_#{i}][vote_count]" value="#{vote_count}" /><input name="article[polls_attributes][new_#{pi}][questions_attributes][new_#{qi}][answers_attributes][new_#{i}][position]" value="#{position}" />#{prebuilt_image}#{prebuilt_enlarge}';
  };

  var creating_answer_image_template = function() {
    return '<input name="article[polls_attributes][new_#{pi}][questions_attributes][new_#{qi}][answers_attributes][new_#{i}][image_source_url]" value="#{image_source_url}" />';
  };

  var creating_answer_image_enlarge_template = function() {
    return '<input name="article[polls_attributes][new_#{pi}][questions_attributes][new_#{qi}][answers_attributes][new_#{i}][image_enlarge_url]" value="#{image_enlarge_url}" />';
  };

  var Poll = {
    base_url: null,
    brand: null,
    section: null,
    article: null,
    callback: null,
    answer_by_id: null,
    data_url: null,
    poll_targets: null,

    init: function(options) {
      options = options || {};
      Poll.base_url = options["base_url"];
      Poll.brand = options["brand"];
      Poll.section = options["section"];
      Poll.article = options["article"];
      Poll.callback = options["callback"] || '?';
      Poll.data_url = options["data_url"];
      Poll.answer_by_id = {};
      Poll.poll_targets = options["poll_targets"] || [];
    },

    validate_votes: function(voted_answers){
      if (!voted_answers || voted_answers.length == 0) {
        return 'You must answer every question before voting!';
      }
      var answered_questions = $.map(voted_answers, function(answer) { return answer.question });
      if (!answered_questions.compare(voted_answers[0].poll.questions)) {
        return 'You must answer every question before voting!';
      }
      if (!answered_questions.compare($.unique(answered_questions))) {
        return 'You may not vote for more than one answer per question!';
      }
      return false;
    },

    render_polls: function() {
      var nest_and_stash = function(poll) {
        var templates = get_templates(poll);
        poll.template = templates[0];
        $.each(poll.questions, function(i, question) {
          question.template = templates[1];
          question.poll = poll;
          $.each(question.answers, function(i, answer) {
            answer.template = templates[2];
            answer.question = question;
            answer.poll = poll;
            Poll.answer_by_id[String(answer.id)] = answer;
          });
        });
      };
      var get_templates = function(poll) {
        if (poll.starts_at && (Date.from_iso(poll.starts_at) > new Date())) {
          return [Poll.unopened_poll_template, Poll.unopened_question_template, Poll.unopened_answer_template];
        } else if ((poll.stops_at && (Date.from_iso(poll.stops_at) < new Date())) || $.cookies.get('poll_'+poll.id)) {
          return [Poll.closed_poll_template, Poll.closed_question_template, Poll.closed_answer_template];
        } else {
          return [Poll.poll_template, Poll.question_template, Poll.answer_template];
        }
      };
      var success = function(polls) {
        $.each(polls, function(i, poll) {
          nest_and_stash(poll);
	  poll.target = get_target(i);
          $(poll.target).append(build_poll(poll));
          init_vote_form(poll.id)
        });
      };
      var error = function() {
        $.getJSON(Poll.data_url, function(article) {
          var form = $('<form style="display:none;">' + build_creating_article(article) + "</form>");
          form.appendTo($(document.body));
          form.submit(function() {
            $(document.body).append('<iframe name="creating_article_iframe" style="display:none;"></iframe>');
            var iframe = $("iframe[name=creating_article_iframe]:last");
            form.attr("action", create_article_url()).attr("target", "creating_article_iframe").attr("method", "post");
            iframe.load(function() {
              var response = eval('('+iframe.contents().find("body").html()+')');
              if (response.polls) {
                success(response.polls);
              }
              setTimeout(function() { iframe.remove(); form.remove(); }, 200);
            });
          });
          form.submit();
        });
      };
      var decision_tree = function(response) {
        if (response && response.status != '404') {
          success(response);
        } else {
          error();
        }
      };

      $.getJSON(polls_url(), decision_tree);
    },

    render_error: function(id, message) {
      $('#poll_' + id + '_errors').html(message);
    },

    poll_template: function() {
      return '<h1>#{name}</h1><p class="description">#{description}</p><form method="post" action="#" id="poll_form_#{id}"><div class="poll_errors" id="poll_#{id}_errors" /><ol class="questions">#{prebuilt_questions}</ol><input type="submit" value="Vote" class="vote_button"></form>';
    },

    question_template: function() {
      return '<li id="question_#{id}"><p>#{text}</p><ul class="answers">#{prebuilt_answers}</ul></li>';
    },

    answer_template: function() {
      return '<li><input type="radio" name="question_#{question_id}" id="answer_#{id}" value="#{id}" /><label for="answer_#{id}">#{prebuilt_image}#{text}</label>#{prebuilt_enlarge}</li>';
    },

    answer_image_template: function() {
      return '<img src="#{image_source_url}" /> ';
    },

    answer_image_enlarge_template: function() {
      return ' <a href="#{image_enlarge_url}" class="small red">enlarge</a>';
    },

    unopened_poll_template: function() {
      return '<div id="poll_#{id}"><h1>#{name}</h1><p class="description">#{description}</p><ol class="questions">#{prebuilt_questions}</ol></div>';
    },

    unopened_question_template: function() {
      return '<li id="question_#{id}"><p>#{text}</p><ul class="answers">#{prebuilt_answers}</ul></li>';
    },

    unopened_answer_template: function() {
      return '<li>#{prebuilt_image}#{text}#{prebuilt_enlarge}</li>';
    },

    closed_poll_template: function() {
      return '<ol>#{prebuilt_questions}</ol>';
    },

    closed_question_template: function() {
      return '<li id="question_#{id}"><p>#{text}</p><ul class="answers">#{prebuilt_answers}</ul></li>';
    },

    closed_answer_template: function() {
      return '<li><div class="bar" style="width:#{percentage}%; background:#{percentage:Format.get_color};"></div>#{text} <span class="answer_percentage">(#{percentage}%)</span></li>';
    }
  };
  return(Poll);
})(jQuery);
/*
 * profiles.js
 *
 */

var Profile = (function($) {
  function form_data(form) {
    var values = {};
    $(':input',form).each(function() {
      var name = $(this).attr('name');
      if (name && (!$(this).is(":checkbox") || $(this).is(":checked"))) {
        values[name] = $(this).val();
      }
    });
    return values;
  }

  function ajax_form(form) {
  }

  var RecentlyViewed = {
    cookie_name: function() {
      if (Profile.profile) {
        return('recently_viewed_' + p.profile.id);
      } else {
        return null;
      }
    },

    max_saves: 10,

    get_list: function() {
      var s = $.cookies.get(RecentlyViewed.cookie_name());
      if (s) {
        var list = JSON.parse(s);
      } else {
        var list = [];
      }
      return(list);
    },

    add_to_list: function(url, text) {
      if(!RecentlyViewed.cookie_name()) return [];
      var list = RecentlyViewed.get_list();
      for(i=0; i<list.length; i++) {
        if(list[i].url == url && list[i].url == url) {
          list.splice(i,1);
          break;
        }
      }
      list.unshift({url: url, text: text});
      if(list.length > RecentlyViewed.max_saves) list.pop();
      $.cookies.set(RecentlyViewed.cookie_name(), JSON.stringify(list));
      return(list);
    }
  };

  var p = {
    init: function(options) {
      for(var key in options) { Profile[key] = options[key]; }
      p.check_for_var_errors();
      p.init_sign_up_behaviour();
      p.init_log_in_behaviour();
      p.init_log_out_behaviour();
      p.init_forgot_password_behaviour();
      p.init_edit_photo_behaviour();
      p.init_add_bookmark_behaviour();
      p.init_pending_callback();
      p.init_follow();
      if (options['cookie_domain']) $.cookies.setOptions({domain: options['cookie_domain']});
    },

    init_log_in_behaviour: function() {
      $(".profile_log_in").live('click', function() {
        p.log_in();
        return false;
      });
    },

    init_sign_up_behaviour: function() {
      $(".profile_sign_up").live('click', function() {
        $.facebox(p.sign_up_form_template());
        var form = $("#facebox form").on_blur_errors().submit(function(ev) {
          ev.preventDefault();

          var fields = {'email': "Email address", 'name': "Name", 'password': "Password", 'password_confirmation': 'Password Confirmation', 'terms_of_service': "Terms of Service"};
          var blank_fields = [];
          $.each(fields, function(k,v) {
            if ($('#profile_' + k)[0].value == '') {
              blank_fields.push(k);
            }
          });

          function success(data) {
            $("#facebox .content").html(
              Template.evaluate(p.sign_up_success_template(), data.profile));
          }

          function failure(data) {
            $.each(data.errors,function() {
              var input = $('#profile_' + this[0]);

              if (fields[this[0]]) {
                if(this[1].match(/^\^/)) {
                  var msg = this[1].substr(1);
                } else {
                  var msg = fields[this[0]] + ' ' + this[1] + '.';
                }
                input.parent().find('.error').html(msg);
              }

              input.parent().find('.instruction').hide();
              input.parent().find('.error').show();
            });
          }

          if (blank_fields.length == 0) {
            $(this).find('.error').hide();
            $(this).find('.instruction').show();

            $.getJSON(p.sign_up_url(),form_data(this),function(data) {
              if (!data.errors) success(data);
              else failure(data);
            });
          } else {
            $(this).find('.error').hide();
            $(this).find('.instruction').hide();
            $.each(blank_fields, function(i, k) {
              $('#profile_' + k).parent().find('.error').show();
            });
          }
        });
        if(p.signup_focus_callback)
          form.on_inputs_focus(p.signup_focus_callback);
        return false;
      });
    },

    init_forgot_password_behaviour: function() {
      $(".profile_forgot_password").live('click', function() {
        $.facebox(p.forgot_password_form_template());

        var on_failure = function(response, form) {
          $(form).find('.error').hide();
          $(form).find('.instruction').show();
          p.show_errors(form);
        }

        var form = $("#facebox form").attr("action", p.forgot_password_url()).on_blur_errors().post_with_iframe({
          success: function() { $("#facebox .content").html(p.forgot_password_success_template()); },
          failure: on_failure
        });
        return false;
      });
    },

    init_log_out_behaviour: function() {
      $(".profile_log_out").live('click', function() {
        $.getJSON(p.log_out_url(),function() { p.refresh_page(); });
        p.profile = null;
        return false;
      });
    },

    init_edit_photo_behaviour: function() {
      $(".profile_edit_photo").live('click', function() {
        $("#profile_rcol").html(p.edit_photo_form_template());
        $("#profile_rcol form").attr("action", p.profile_url()).post_with_iframe({
          before:  function(form) { form.find("input[type=submit]").val('Uploading...').attr('disabled', 'true'); },
          success: function() { p.refresh_my_profile(); },
          failure: function(response, form) { p.render_errors(response.errors, form); }
        });
        return false;
      });
    },

    init_add_bookmark_behaviour: function() {
      if($(".profile_add_bookmark").size() == 1) {
        $.getJSON(p.bookmark_url(), p.bookmark_add_bookmark_already_saved_callback);
      }

      $(".profile_add_bookmark").live('click', function() {
        p.enforce_logged_in(function() {
          TempIframeForm({
            success: p.bookmark_add_bookmark_success_callback,
            failure: p.bookmark_add_bookmark_failure_callback
          }).attr("action", p.bookmarks_url()).submit();
        });
        return false;
      });
    },

    init_follow: function() {
      var get_id = function(link) {
        return $(link).attr('href').substring(1);
      }

      $('#pa_save').live('click',function(ev) {
        ev.preventDefault();
        var id = get_id(this);
        p.follow(id,p.followed);
      });

      $('#pa_unsave').live('click',function(ev) {
        ev.preventDefault();
        var id = get_id(this);
        p.unfollow(id,p.unfollowed);
      });
    },

    init_pending_callback: function() {
      if($.cookies.get('on_success_log_in')) {
        p.logged_in({
          success: function() {
            eval('('+$.cookies.get('on_success_log_in')+')')();
            $.cookies.del('on_success_log_in');
          }
        });
      }
    },

    log_in_url: function() {
      return p.secure_base_url() + '/profiles/create_session?callback=?';
    },

    post_log_in_url: function() {
      return p.secure_base_url() + '/session';
    },

    log_out_url: function() { return p.base_url + '/profiles/destroy_session?callback=?' },

    session_status_url: function() { return p.base_url + '/session.json?callback=?'; },

    profile_url: function(secure) {
      if(secure){
        return p.secure_base_url() + '/profile';
      }else{
        return p.base_url + '/profile';
      }
    },

    view_profile_url: function(profile_id) {
      return p.base_url + '/profiles/' + profile_id;
    },

    sign_up_url: function() {
      return p.secure_base_url() + '/profiles/create?callback=?';
    },

    forgot_password_url: function() {
      return p.base_url + '/profile/reset_password';
    },

    complete_password_reset_url: function() {
      return p.base_url + '/profiles/complete_password_reset?callback=?';
    },

    my_profile_url: function() {
      if(p.profile) return p.base_url + '/profiles/' + p.profile.id;
    },

    bookmarks_url: function() {
      return p.profile_url() + '/bookmarks.json?resource[name]=' + encodeURIComponent(p.resource_name) + '&resource[url]=' + encodeURIComponent(p.resource_url) + '&resource[content_id]=' + p.resource_content_id +'&resource[image_url]=' + encodeURIComponent(p.resource_image_url) + '&brand_name=' + encodeURIComponent(p.brand_name) + '&section_name=' + encodeURIComponent(p.section_name) + '&callback=?';
    },

    bookmark_url: function() {
      return p.profile_url() + '/bookmarks/' + p.resource_content_id + '.json?callback=?';
    },

    record_prompt_view_url: function() {
      return p.profile_url() + '/record_prompt_view.json'
    },

    secure_base_url: function() {
      if(p.dev_no_https){
        return p.base_url;
      } else {
        return p.base_url.replace(/^http/, "https");
      }
    },

    log_in: function(form, override_callbacks) {
      if(p.profile) p.profile = undefined;

      if(!form) {
        $.facebox(p.log_in_form_template());
        form = $("#facebox form");
      }

      var callbacks = {
        success: function() {p.refresh_page(); },
        failure: function(response, form) {p.show_errors(form); }
      };
      if(override_callbacks) jQuery.extend(callbacks, override_callbacks);


      form.on_blur_errors().submit(function(ev) {
        ev.preventDefault();
        if(callbacks.before) callbacks.before();
        $.getJSON(p.log_in_url(),form_data(this),function(data) {
          if (!data.errors) callbacks.success(data);
          else callbacks.failure(data);
        });
      });
    },

    checking_for_logged_in: false,
    logged_in: function(callbacks) {
      if(typeof p.profile == 'undefined') {
        if(p.checking_for_logged_in == false) {
          p.checking_for_logged_in = true;
          $.getJSON(p.session_status_url(), function(data) {
            if(data.profile) {
              p.profile = data.profile;
              if(callbacks.success) callbacks.success();
            } else {
              p.profile = null;
              if(callbacks.failure) callbacks.failure();
            }
             p.checking_for_logged_in = false;
          });
        } else {
          setTimeout(function() {Profile.logged_in(callbacks)}, 50);
        }
      } else if(p.profile) {
        if(callbacks.success) callbacks.success();
      } else {
        if(callbacks.failure) callbacks.failure();
      }
    },

    enforce_logged_in: function(callback) {
      p.logged_in({
        success: function() { callback(); },
        failure: function() {
          $.cookies.set('on_success_log_in', callback, {hoursToLive: 72});
          p.log_in();
        }
      });
    },

    refresh_my_profile: function() {
      window.location = p.my_profile_url();
    },

    refresh_page: function() {
      window.location = window.location.href;
    },

    check_for_var_errors: function() {
      if(p.base_url == undefined) {
        console.error("The base_url has not been set. Check your Profile.init() call to make sure it's present.");
      } else if(/^http:\/\//.exec(p.base_url) == null) {
        console.error("The base_url must start with 'http://', the current base_url is '" + p.base_url + "'. Check your Profile.init() call.")
      }
    },

    recently_viewed: function (url, text) {
      p.logged_in({
        success: function(){ RecentlyViewed.add_to_list(url, text);}
      });
    },

    recently_viewed_list: function () {
      return RecentlyViewed.get_list();
    },

    record_prompt_view: function(callbacks){
      if(!callbacks) callbacks = {};
      TempIframeForm(callbacks).attr('action', p.record_prompt_view_url()).submit();
    },

    update_prompt_preference: function(preference, callbacks) {
      if(!callbacks) callbacks = {};
      var val = preference ? '1' : '0';
      TempIframeForm(callbacks)
        .attr('action', p.profile_url() + '.json')
        .append('<input name="_method" value="put" type="hidden" /><input name="profile[current_brand_attributes][profile_prompt_preference]" value="' + val + '" />')
        .submit();
    },

    alter_relationship: function(verb,subject,callback) {
      var url = p.base_url + "/profile/" + verb,
          handler = function() { callback(subject); };
      p.enforce_logged_in(function() {
        $.post(url,{ id: subject },handler);
      });
    },

    follow: function(subject) {
      var callback = arguments[1];
      if (!callback) { callback = p.followed; }
      p.alter_relationship('follow',subject,callback);
    },

    unfollow: function(subject) {
      var callback = arguments[1];
      if (!callback) { callback = p.unfollowed; }
      p.alter_relationship('unfollow',subject,callback);
    },

    followed: function(id) {
      $('#pa_follow').find('.unfollow').show();
      $('#pa_follow').find('.follow').hide();
    },

    unfollowed: function(id) {
      $('#pa_follow').find('.unfollow').hide();
      $('#pa_follow').find('.follow').show();
    },

    format_error: function(err) {
      var fmt_re = /\^(.*)/;
      var matches = err.match(fmt_re);

      if (matches) { return matches[1]; }
      return err;
    },

    reset_password_form_default_success: function(form) {
      Profile.log_in();
      $('#facebox h5 .instructions').html(
          "Your password has been changed. " +
          "Please Sign In using your new password to access the site.");
    },

    reset_password_form_default_failure: function(form,errors) {
      var error = p.format_error(errors[0]);
      var field = 'co_new_pwd', other = 'co_confirm_new_pwd';

      if (error == "The passwords entered do not match. Please try again.") {
        field = 'co_confirm_new_pwd';
      }

      var input = $('#' + field);
      input.siblings('.instruction').hide();
      input.siblings('.error').html(error).show();
    },

    reset_password_form: function(form,success,failure) {
      if (!success) { success = p.reset_password_form_default_success; }
      if (!failure) { failure = p.reset_password_form_default_failure; }

      var do_reset = function(cookie,password,password_confirmation) {
        var params = {
          cookie: cookie,
          password: password,
          password_confirmation: password_confirmation
        }

        var callback = function(data) {
          if (data.errors && failure) { failure(form,data.errors); }
          if (!data.errors && success) { success(form); }
        }

        $.getJSON(p.complete_password_reset_url(),params,callback);
      }

      var get_reset_token = function() {
        var qs_re = /password_reset_token=([^&]*)($|&)/;
        var matches = window.location.search.match(qs_re);
        if (matches) { return matches[1]; }
        return '';
      }

      $(form).submit(function(ev) {
        ev.preventDefault();
        $('.co_reset_password').find('.error').hide();
        $('.co_reset_password').find('.instruction').show();
        do_reset(get_reset_token(),
          $('#co_new_pwd').val(),
          $('#co_confirm_new_pwd').val());
      }).on_blur_errors();
    },


    bookmark_add_bookmark_already_saved_callback: function(data) {
      if(data.resource) {
        $(".profile_add_bookmark").before("SAVED").remove();
      }
    },

    bookmark_add_bookmark_success_callback: function(response, form) {
      $(".profile_add_bookmark").before("SAVED").remove();
    },

    bookmark_add_bookmark_failure_callback: function(response, form) {
      alert('Error trying to add bookmark.');
    },

    render_profile_box: function() {
      p.logged_in({
        success: function() {
			p.profile.my_profile_url = p.my_profile_url();
			$("#profile_box").html(Template.evaluate(p.logged_in_profile_box_template(), p.profile));
		},
        failure: function() {
          $("#profile_box").html(p.logged_out_profile_box_template());
          p.log_in($("#profile_box form"));
        }
      });
    },

    render_errors: function(errors, form) {
      var object = { count: errors.length, errors: ''};
      $.each(errors, function(i, error) {
        if(typeof error == 'string') {
          object.errors += error + "<br />";
        } else {
          object.errors += error[0].humanize() + " " + error[1] + "<br />";
        }
      });
      form.find(".errors").empty().append(Template.evaluate(p.errors_template(), object));
    },

    show_errors: function(form) {
      $("#facebox").find(".instructions:first").hide();
      $("#facebox").find(".errors:first").show();
    },

    render_errors_inline: function(errors, form) {
      form.find(".error").empty().show();
      $.each(errors, function(i, error) {
        form.find("input[id$='"+error[0]+"'] + .error").html(error[1]);
      });
    },

    render_recently_viewed: function () {
      var render = function() {
        var list = p.recently_viewed_list();
        if (list.length > 0) {
          var prebuild = function (item) { return Template.evaluate(p.recently_viewed_item_template(), item); };
          var prebuilt_list_items = {prebuilt_list_items: $.map(list, prebuild).join('')};
          $('#profile_recently_viewed').html(Template.evaluate(p.recently_viewed_list_template(), prebuilt_list_items));
        }
      };
      p.logged_in({success: render})
    },

    logged_in_profile_box_template: function() {
      return '<h3>Welcome back! #{name}</h3><img src="#{photos.small}" /><p>There are xx new messages in your profile.</p><p><a href="#{my_profile_url}" class="my_profile">My profile</a> | Not #{name}? <a href="#" class="profile_log_out">Sign out</a></p>';
    },

    logged_out_profile_box_template: function() {
      return '<h2><a href="#" class="profile_log_in">Log in</a> or <a href="#" class="profile_sign_up">Sign up</a></h2>';
    },

    sign_up_form_template: function() {
      return '<div id="profile_sign_up_form"><h1>Sign up</h1><form><p>email address<br /><input type="text" id="profile_email" name="profile[email]" /><span class="error"></span></p><p>password<br /><input type="password" id="profile_password" name="profile[password]" /><span class="error"></span></p><p>confirm password<br /><input type="password" id="profile_password_confirmation" name="profile[password_confirmation]" /><span class="error"></span></p><p>member name<br /><input type="text" id="profile_name" name="profile[name]" /><span class="error"></span></p><p><input type="hidden" value="0" name="profile[terms_of_service]" /><input type="checkbox" id="profile_terms_of_service" name="profile[terms_of_service]" /> I accept the terms.<span class="error"></span></p><input type="submit" value="Done" /></form></div>';
    },

    edit_photo_form_template: function() {
      return '<div id="profile_edit_photo_form"><h1>Edit photo</h1><form enctype="multipart/form-data"><div class="errors" /><p>upload your own photo<br /><input type="file" id="profile_photo" name="profile[photo]" /></p><input type="submit" value="Save" /><input type="hidden" name="_method" value="put" /></form></div>';
    },

    sign_up_success_template: function() {
      return '<h1>We\'ve just emailed you the activation link!</h1>';
    },

    log_in_form_template: function() {
      return '<div id="profile_log_in_form"><h1>Log in</h1><form><div class="errors" /><p>Email<br /><input type="text" name="email" /></p><p>Password<br /><input type="password" name="password" /></p><input type="submit" /></form><a href="#" class="profile_forgot_password">forgot password</a></div>';
    },

    forgot_password_form_template: function() {
      return '<div id="profile_forgot_password_form"><h1>Forgot password</h1><form><div class="errors" /><p>email address<br /><input type="text" name="email" /></p><input type="submit" value="Submit" /></form></div>';
    },

    forgot_password_success_template: function() {
      return '<h1>We\'ve just emailed you instructions on how to reset your password.</h1>';
    },

    errors_template: function() {
      return '#{errors}';
    },

    recently_viewed_list_template: function () {
      return '<div class="recently_viewed"><h4 class="recently_viewed_hdr">Recently Viewed Content</h4></div><ul class="recently_viewed_list">#{prebuilt_list_items}</ul>';
    },

    recently_viewed_item_template: function () {
      return '<li><a href="#{url}">#{text}</a></li>'
    }
  };
  return(p);
})(jQuery);
/*
 * questions.js
 *
 */

var Question = (function($) {
  var c = {
    base_url: null,
    brand_name: null,
    section_name: null,
    question_id: null,
    _board_require_profile: true,

    init: function(options) {
      options = options || {};
      c.base_url = options["base_url"];
      c.brand_name = options["brand_name"];
      c.section_name = options["section_name"];
      c.question_id = options["question_id"];
    },

    init_form_behaviours: function() {
      var form = $("#new_answer_form");
      var textarea = form.find('textarea');

      form.attr("action", c.answers_url()).disable_on_submit().post_with_iframe({
        success: function(response, f){if(response.comment){
            c.insert_answer(response.comment);
            f.attr("style","display: none");
          } else if(response.notice) {
            c.render_message(response.notice);
          }
          c.reset_form(f, {hide: true});},
        failure: function(response, f){f.enable_submit(); c.render_answer_errors(response.errors, f);}
      });

      textarea.limit_chars(1000);
    },


	  init_get_board_details: function(callback){
		  $.getJSON(c.board_details_url(), function(data){
			  c._board_require_profile = data.question_board["require_profile?"];
			  if(callback != null) callback();
		  });
	  },

	  init_report_inappropriate_links: function(){
      var flag_my_answer = function(me) {
        var answer_id = me.parents(".answer").attr("id").split('_').last();
        c.flag_answer(me, answer_id);
      }

      $("#answers a.get.report_inappropriate_link").live("click", function() {
        var me = $(this);
        Profile.logged_in({
          success: function(){flag_my_answer(me);},
          failure: function(){Profile.log_in();}
        });
        return false;
      });

      $("#answers a.flagged.report_inappropriate_link").live("click", function(){return false;})
    },


    answers_url: function() {
      return c.build_url([c.question_id, "answers"], ".json?page="+Url.get_param("page")+"&order="+Url.get_param("order")+"&per_page="+Url.get_param("per_page"));
    },

    question_index_url: function(parent) {
      return c.build_url([], ".json?callback=?");
    },

    featured_q_and_a_url: function(options) {
      var options = options || {};
      var url = c.base_url + "/featured_questions.json?callback=?&brand_name="+c.brand_name;
      if(options["scope"] == 'section') url += "&section_name="+c.section_name;
      return url;
    },

    answer_url: function(id){
      return c.build_url([c.question_id, "answers", id], ".json?callback=?");
    },

    question_board_url: function() {
      return c.build_url([], ".json?callback=?")
    },

    build_url: function(url_atoms, qs) {
      return [c.base_url, 'sections', c.section_name, 'questions'].concat(url_atoms).join('/') + qs;
    },

    my_answer_url: function() {
      return c.build_url([c.question_id, "answers", "mine"], ".json?callback=?")
    },

    flag_answer_url: function(answer_id) {
      return c.build_url([c.question_id, "answers", answer_id, "flag"], ".json")
    },


    render_answers: function(comments, container) {
      $.each(comments, function(i, obj) {
        var comment = obj.comment ? obj.comment : obj;
        $(container).append(Template.evaluate(c.answer_template(), comment));
      });
    },

    render_answer_errors: function(errors, form) {
      var object = {};
      object.count = errors.length;
      object.errors = '';
      $.each(errors, function(i, error) {
        object.errors += error[0].capitalize() + " " + error[1] + "<br />";
      });
      form.find("div.errors").empty().append(Template.evaluate(c.answer_errors_template(), object));
    },

    render_message: function(response) {
      message = $("<div/>").attr("class", "answer").append(response);
      $("#answers").append(message);
      c.scroll_to(message);
    },

    render_featured_question: function(options) {
      var build_template_data_hash = function(data) {
        var map;
        if (data.question_board && data.question_board.featured_answer){
          var question_board = data.question_board;
          var answer = question_board.featured_answer.comment;
          map = {question_text: question_board.question,
                 profile_user_name: answer.user_name,
                 answer_text: answer.body,
                 question_url: question_board.url,
                 question_num_answers: question_board.num_answers,
                 profile_url: c.build_url_from_path(answer.profile.path),
                 profile_small_pic_url: answer.small_photo_url,
                 profile_medium_pic_url: answer.medium_photo_url,
                 profile_large_pic_url: answer.large_photo_url,
                 question_index_url: c.build_url_from_path('/questions')};
        }


        return map;
      };


      $.getJSON(c.featured_q_and_a_url(options), function(data){
        if (!data.errors) {
          var variable_mapping = build_template_data_hash(data);
          if (variable_mapping)
            $("#featured_question").html(Template.evaluate(c.featured_question_template(), variable_mapping));
        }
      });
    },

	  render_answer_form: function() {
	    var get_template = function(require_profile, logged_in, answer) {
	      if(require_profile){
	        if (logged_in){
	          if(answer) return c.require_profile_answer_form_already_answered_template();
	          return c.require_profile_answer_form_logged_in_template();
	        } else {
	          return c.require_profile_answer_form_logged_out_template();
          }
	      } else {
	        if (logged_in){
	          if (answer) return c.anonymous_answer_form_already_answered_template();
	          return c.anonymous_answer_form_logged_in_template();
	        } else {
	          return c.anonymous_answer_form_logged_out_template();
	        }
	      }
	    };
	    var build_template_vars = function(logged_in, answer){
	      if(logged_in){
	        return {form_id: 'new_answer_form', user_name: Profile.profile.name, small_photo_url: Profile.profile.photos.small, medium_photo_url: Profile.profile.photos.medium, large_photo_url: Profile.profile.photos.large, profile_url: Profile.my_profile_url(), answer: answer};
	      } else {
	        return {form_id: 'new_answer_form'};
	      }
	    };

	    var check_for_user_answer = function(require_profile) {
	      c.get_user_answer(function(answer){
	        insert_template(render_template(require_profile, true, answer));
	      })
	    };

	    var render_template = function(require_profile, logged_in, answer){
	      return Template.evaluate(get_template(require_profile, logged_in, answer), build_template_vars(logged_in, answer));
	    };

	    var insert_template = function(html){
	      $(".answer_form").html(html);
	      c.init_form_behaviours();
	    };

      var check_logged_in = function(require_profile) {
        Profile.logged_in({
          success: function(){check_for_user_answer(require_profile);},
          failure: function(){insert_template(render_template(true, false, null));}
        });
      };

	    c.require_profile({
	      yes: function(){check_logged_in(true);},
	      no: function(){check_logged_in(false);}
	    });
    },

    insert_answer: function(comment) {
      order = Url.get_param("order") || 'DESC';

      if ($("#answers").size() == 0) {
        window.location = Url.new_url({order: "DESC"}, decodeURIComponent(c.questions_url));
      } else if (order == "ASC") {
        console.error("When order is ASC this does not work. Leaving it for now because of RealSimple deadline.")
        /*
        if (Pagination.current_page == Pagination.total_pages) {
          $("#answers").append(Template.evaluate(c.answer_template(), comment));
          c.scroll_to_and_highlight("#answer_"+comment["id"]);
        } else {
          window.location = Url.new_url({page: Pagination.total_pages});
        }
        */
      } else if (order == "DESC") {
        $("#answers").prepend(Template.evaluate(c.answer_template(), c.convert_answer_path_to_urls(comment)));
        c.scroll_to_and_highlight("#answer_"+comment["id"]);
      }
    },

    flag_answer: function(link, answer_id) {
	    $("<form/>").hide().appendTo($(document.body)).attr("action", c.flag_answer_url(answer_id)).post_with_iframe({
	      success: function(response, form) {link.removeClass("get").addClass("flagged").html(response.notice)},
	      failure: function() { alert('Error trying to flag answer.'); }
	    }).submit();
	  },

    convert_answer_path_to_urls: function(answer) {
	    answer = answer.comment ? answer.comment : answer;
      var answer_additions = {};
      answer_additions["profile_url"] = answer.profile == null ? "#" : c.build_url_from_path(answer.profile.path);
      jQuery.extend(answer, answer_additions);
      return answer;
	  },

    scroll_to: function(element) {
      scroll_to_if_necessary(element);
    },

    highlight: function(comment) {
      $(comment).effect("highlight", {}, 3000);
    },

    scroll_to_and_highlight: function(comment) {
      c.scroll_to(comment);
      c.highlight(comment);
    },

    reset_form: function(form, options) {
      options = options || {};
      form = $(form);

      form.find("textarea").val("");
      form.find("div.errors").empty();
    },

	  require_profile: function(callbacks){
		  if(c._board_require_profile == null){
			  c.init_get_board_details(function(){
				  if(c._board_require_profile){
					  if(callbacks.yes) callbacks.yes();
				  }else{
					  if(callbacks.no) callbacks.no();
				  }
			  })
		  }else if(c._board_require_profile){
			  if(callbacks.yes) callbacks.yes();
		  }else{
			  if(callbacks.no) callbacks.no();
		  }
	  },

	  build_url_from_path: function(path){
	    return c.base_url + path;
	  },

	  get_user_answer: function(callback){
	    if(c._user_answer == undefined){
	      Profile.enforce_logged_in(function(){
          $.getJSON(c.my_answer_url(), function(data){
            c._user_answer = (data.comment ? data.comment : null);
            callback(c._user_answer);
          });
  	    });
	    } else {
	      callback(c._user_answer);
	    }
	  },


    oldest_first_link_or_span: function() {
      return c.link_or_span('Oldest first', Url.new_url({page: 1, order: 'ASC'}), Url.get_params().order == 'DESC')
    },

    newest_first_link_or_span: function() {
      return c.link_or_span('Newest first', Url.new_url({page: 1, order: 'DESC'}), Url.get_params().order != 'DESC')
    },

    link_or_span: function(text, link, needs_link) {
      if(needs_link) {
        return '<a href="'+link+'">'+text+'</a>';
      } else {
        return '<span>'+text+'</span>';
      }
    },

    answer_template: function() {
      return '<li class="comment" id="answer_#{id}"><span class="author">#{user_name}</span><span class="date">#{created_at:Format.iso_date}</span>#{body:Format.text}</li>';
    },

    featured_question_template: function() {
      return '<h4>Featured Question</h4><div class="question">#{question_text}</div><div class="featured_answer"><img src="#{profile_small_pic_url}" class="featured_answer_pic" /><span class="user"><a href="#{profile_url}">#{profile_user_name}</a> says:</span><span class="answer_body">#{answer_text : Format.truncate}<a href="#{question_url}"> more</a></span><span class="num_answers"><a href="#{question_index_url}">#{question_num_answers} Members Answered This Question</a></span></div><a href="#{question_index_url}" class="answer_link">Answer This Question</a>';
    },

    answer_errors_template: function() {
      return '#{count} errors:<br/>#{errors}';
    },

    require_profile_answer_form_logged_in_template: function() {
      return '<form id="#{form_id}" action=""><h1 class="form_title">Add new answer</h1><div class="errors"></div><p><label for="comment_user_name">Name</label><br/><span>#{user_name}</span></p><p><label for="comment_body">Answer</label><br/><textarea id="comment_body" name="comment[body]" cols="50" rows="10"></textarea></p><p><input type="submit" value="Add answer"/></p></form>';
    },

    require_profile_answer_form_logged_out_template: function() {
      return '<form id="#{form_id}" action=""><h1 class="empty_form_title">Please <a href="#" class="profile_log_in">sign in</a> to post your answer.</h1></form>';
    },

    require_profile_answer_form_already_answered_template: function(){
      return '<span>You already answered this question. Go to your <a href="#{profile_url}" >profile</a> to edit your response.</span>';
    },

    anonymous_answer_form_logged_in_template: function(){
        return '<form id="#{form_id}" action=""><h1 class="form_title">Add new comment</h1><div class="errors"></div><p><label for="comment_user_name">Name</label><br/><span>#{user_name}</span></p><p><label for="comment_body">Comment</label><br/><textarea id="comment_body" name="comment[body]" cols="50" rows="10"></textarea></p><p><input type="submit" value="Add comment"/></p></form>';
    },

    anonymous_answer_form_logged_out_template: function(){
        return '<form id="#{form_id}" action=""><h1 class="form_title">Add new comment</h1><div class="errors"></div><p><label for="comment_user_name">Name</label><br/><input type="text" id="comment_user_name" name="comment[user_name]" /></p><p><label for="comment_body">Comment</label><br/><textarea id="comment_body" name="comment[body]" cols="50" rows="10"></textarea></p><p><input type="submit" value="Add comment"/></p></form>';
    },

    anonymous_answer_form_already_answered_template: function(){
      return '<span>You already answered this question. Go to your <a href="#{profile_url}" >profile</a> to edit your response.</span>';
    }

  };
  return(c);
})(jQuery);
/*
 * errors.js
 *
 */
jQuery.fn.on_blur_errors = function(callback) {
  this.find("input:text, input:password").blur(function() {
    var input = $(this);
    var show_error = false;

    if(input.attr("alt")) {
      var regexp = new RegExp(input.attr("alt"));
      if (!regexp.exec(input.attr("value"))) show_error = true;
    } else if(input.attr("id").match(/_confirmation$/)) {
      var original = $("#"+input.attr("id").replace("_confirmation", ''));
      if (input.attr("value") != original.attr("value")) show_error = true;
    }

    if(show_error) {
      input.parent().find(".error").show();
      input.parent().find(".instruction").hide();
    } else {
      input.parent().find(".error").hide();
      input.parent().find(".instruction").show();
    }

    if(callback)
      callback(input, show_error);
  });
  return this;
};
/*
 * extensions.js
 *
 */
Array.prototype.last = function() {
  return this[this.length-1];
}

Array.prototype.compare = function(testArr) {
  if (this.length != testArr.length) return false;
  for (var i = 0; i < testArr.length; i++) {
    if (this[i].compare) {
      if (!this[i].compare(testArr[i])) return false;
    }
    if (this[i] !== testArr[i]) return false;
  }
  return true;
}

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
}

String.prototype.humanize = function() {
  return this.replace(/_/g, ' ').capitalize();
}

String.prototype.tableize = function() {
  return this.toLowerCase().replace(/[\s]+/g, "_");
}

String.prototype.inspect = function() {
  var special_chars = {
    '\b': '\\b',
    '\t': '\\t',
    '\n': '\\n',
    '\f': '\\f',
    '\r': '\\r',
    '\\': '\\\\'
  };

  var escape_text = function(match) {
    var character = special_chars[match];
    return character ? character : '\\u00' + match.charCodeAt().toPaddedString(2, 16);
  }

  return this.replace(/[\x00-\x1f\\]/g, escape_text);
}

String.prototype.strip_html = function() {
  var regexp = /<("[^"]*"|'[^']*'|[^'">])*>/gi;
  return this.replace(regexp, "");
}

Date.prototype.strftime = function(format) {
  var MONTHNAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var DAYNAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var ABBR_MONTHNAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var ABBR_DAYNAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var date = this;

  /*
  %a - The abbreviated weekday name (``Sun'')
  %A - The  full  weekday  name (``Sunday'')
  %b - The abbreviated month name (``Jan'')
  %B - The  full  month  name (``January'')
  TODO %c - The preferred local date and time representation
  %d - Day of the month (01..31)
  %H - Hour of the day, 24-hour clock (00..23)
  %I - Hour of the day, 12-hour clock (01..12)
  TODO %j - Day of the year (001..366)
  %m - Month of the year (01..12)
  %M - Minute of the hour (00..59)
  %p - Meridian indicator (``AM''  or  ``PM'')
  %S - Second of the minute (00..60)
  TODO %U - Week  number  of the current year, starting with the first Sunday as the first day of the first week (00..53)
  TODO %W - Week  number  of the current year, starting with the first Monday as the first day of the first week (00..53)
  %w - Day of the week (Sunday is 0, 0..6)
  TODO %x - Preferred representation for the date alone, no time
  TODO %X - Preferred representation for the time alone, no date
  %y - Year without a century (00..99)
  %Y - Year with century
  TODO %Z - Time zone name
  %% - Literal ``%'' character
  */

  var a = function() { return ABBR_DAYNAMES[date.getDay()]; };
  var A = function() { return DAYNAMES[date.getDay()]; };
  var b = function() { return ABBR_MONTHNAMES[date.getMonth()]; };
  var B = function() { return MONTHNAMES[date.getMonth()]; };
  var d = function() { return date.getDate(); };
  var H = function() { return add_zero_if_necessary(date.getHours()); };
  var I = function() { return add_zero_if_necessary(date.getHours() > 0 && date.getHours() < 13 ? date.getHours() : Math.abs(date.getHours()-12)); };
  var m = function() { return date.getMonth()+1; };
  var M = function() { return add_zero_if_necessary(date.getMinutes()); };
  var p = function() { return (date.getHours() > 11) ? "PM" : "AM"; };
  var S = function() { return add_zero_if_necessary(date.getSeconds()); };
  var w = function() { return date.getDay(); };
  var y = function() { return date.getFullYear().toString().substr(2); };
  var Y = function() { return date.getFullYear(); };

  var add_zero_if_necessary = function(number) { return number < 10 ? "0"+number : number; };

  var replace_value = function(str, match) {
    try { convertion = match == '%' ? match : eval(match+"()"); }
    catch(e) { convertion = null; }
    return convertion ? convertion : str;
  }

  return format.replace(/%([a-zA-Z%])/g, replace_value);
}

Date.from_iso = function(isoDate) {
  var matches = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})([+|-]?\d{2}:\d{2})$/.exec(isoDate);
  var date = new Date(matches[1], matches[2]-1, matches[3], matches[4], matches[5], matches[6]);
  return date;
}
/*
 * focus.js
 *
 */
jQuery.fn.on_inputs_focus = function(callback) {
  jQuery.each(this, function(){
    var form = $(this);
    form.find("input").focus(function(){
      var input = $(this);
      callback(input, form);
    });
  });

  return this;
};
/*
 * form_helpers.js
 *
 */
jQuery.fn.disable_on_submit = function() {
  this.submit(function() {
    $(this).disable_submit();
  });
  return this;
};

jQuery.fn.enable_submit = function() {
  this.find('input[type=submit], input[type=image]').removeAttr('disabled');
  return this;
};

jQuery.fn.disable_submit = function() {
  this.find('input[type=submit], input[type=image]').attr('disabled', 'disabled');
  return this;
}

var Format = {
  text: function(text) {
    text = text.replace(/\r\n?/g, "\n");                    // \r\n and \r -> \n
    text = text.replace(/\n\n+/g, "</p>\n\n<p>");           // 2+ newline  -> paragraph
    text = text.replace(/([^\n]\n)(?=[^\n])/g, '$1<br />'); // 1 newline   -> br
    return "<p>" + text + "</p>";
  },

  quantity_class_name: function(count) {
    return count > 0 ? "not_empty" : "empty";
  },

  iso_date: function(iso_date) {
    var date = new Date.from_iso(iso_date);
    return date.strftime('%a %m/%d/%y %I:%M %p'); // e.g.: Wed 04/22/09 8:53 AM
  },

  colors: [ [255,0,0] ],
  color_index: 0,
  get_color: function(percentage) {
    if(Format.colors.length > 1) {
      var color = Format.colors[Format.color_index];
      Format.color_index = (Format.color_index + 1 == Format.colors.length) ? 0 : Format.color_index + 1;
    } else {
      var base_color = Format.colors[0];
      var color = [];
      var inverse_percentage = 100 - percentage;
      var max_value = 225;
      for(var i in base_color) {
        color_diff = base_color[i] < max_value ? max_value - base_color[i] : 0;
        color[i] = base_color[i] + Math.floor(inverse_percentage * color_diff / 100);
      }
    }
    return "rgb(" + color.join(",") + ")";
  },

  truncate_length: 30,

  truncate: function(text) {
    if(text.length <= Format.truncate_length) {
      return text;
    } else {
      var last_ix = Format.truncate_length - 1;
      return text.substring(0, last_ix) + '...'
    }
  }
}
/*
 * iframe.js
 *
 */
jQuery.fn.post_with_iframe = function(callbacks) {
  this.submit(function() {
    var form = $(this);
    form.append('<input type="hidden" name="add_document_domain" value="true" />');
    if(callbacks.before) callbacks.before(form);

    var id = new Date().getTime();
    var iframe = '<iframe name="'+id+'" id="'+id+'" style="display:none;"></iframe>';
    $(document.body).append(iframe);
    iframe = $("#"+id+"");

    form.attr("target", id).attr("method", "post");

    iframe.load(function(){
      var response_string = iframe.contents().find("body").html();
      try { response = eval("(" + response_string + ")"); } catch(e) { response = {}; }
      if(response.errors) {
        if(callbacks.failure) callbacks.failure(response, form);
      } else if(typeof response == 'object') {
        if(callbacks.success) callbacks.success(response, form);
      }
      setTimeout(function() { iframe.remove(); if(callbacks.cleanup) callbacks.cleanup();}, 200);
    });
  });
  return this;
};


var TempIframeForm = function(callbacks) {
  var id = new Date().getTime();
  id = 'temp_' + id;
  var form = '<form id="'+id+'" style="display:none;"></form>';
  form = $(form);
  callbacks["cleanup"] = function(){$(id).remove();};
  form.post_with_iframe(callbacks);
  form.appendTo('body');

  return form;
}
/*
 * limit_chars.js
 *
 */

jQuery.fn.limit_chars = function(limit,element) {
    var self = $(this);
    var substring = function() {
      var val = $(self).val();
      var length = (val ? val.length : 0);
      if(typeof element != 'undefined')
      $(element).html((limit-length));
      if($(self).val())
      $(self).val($(self).val().substring(0,limit));
    };

    $(this).keydown(function(){ substring(); });

    $(this).keypress(function(){ substring(); });
    substring();
  };
/*
 * pagination.js
 *
 */
var Pagination = {

  inner_window: 2, // links around the current page
  outer_window: 0, // links around beginning and end
  gap_marker: '<span class="gap">&hellip;</span>',
  separator: ' ',
  previous_label: '&laquo; Previous',
  next_label: 'Next &raquo;',
  total_pages: null,
  current_page: null,
  total_entries: null,
  entries: null,
  per_page: null,
  offset: null,

  init: function(pagination) {
    Pagination.total_entries = pagination["total_entries"];
    Pagination.entries = pagination["entries"];
    Pagination.per_page = pagination["per_page"];
    Pagination.offset = pagination["offset"];

    Pagination.total_pages = Math.ceil(Pagination.total_entries / Pagination.per_page) || 1;
    Pagination.current_page = (Pagination.offset / Pagination.per_page) + 1;
  },

  paginate: function() {
    links = Pagination.windowed_links();

    links.unshift(Pagination.page_link_or_span(Pagination.previous_page(), 'disabled prev_page', Pagination.previous_label));
    links.push(Pagination.page_link_or_span(Pagination.next_page(), 'disabled next_page', Pagination.next_label));

    html = links.join(Pagination.separator);

    return html;
  },

  pagination_info: function() {
    var from = Pagination.offset + 1;
    var to = Pagination.offset + Pagination.per_page;
    var total = Pagination.total_entries;
    if (to > total) to = total;

    return from + "-" + to + " of " + total;
  },

  visible_page_numbers: function() {
    window_from = Pagination.current_page - Pagination.inner_window;
    window_to = Pagination.current_page + Pagination.inner_window;

    if(window_to > Pagination.total_pages) {
      window_from -= window_to - Pagination.total_pages;
      window_to = Pagination.total_pages;
    }
    if(window_from < 1) {
      window_to += 1 - window_from;
      window_from = 1;
      if(window_to > Pagination.total_pages)
        window_to = Pagination.total_pages;
    }

    visible = [];
    left_gap = [];
    right_gap = [];
    for(i=1; i<=Pagination.total_pages; i++) visible.push(i);
    for(i=(2 + Pagination.outer_window); i<=(window_from - 1); i++) left_gap.push(i);
    for(i=(window_to + 1); i<=(Pagination.total_pages - Pagination.outer_window - 1); i++) right_gap.push(i);
    if(left_gap[left_gap.length - 1] + 1 - left_gap[0] > 1) {
     for(i=0; i<left_gap.length; i++) {
       index = jQuery.inArray(left_gap[i], visible);
       if(index >= 0) visible.splice(index,1);
     }
    }
    if(right_gap[right_gap.length - 1] + 1 - right_gap[0] > 1) {
      for(i=0; i<right_gap.length; i++) {
        index = jQuery.inArray(right_gap[i], visible);
        if(index >= 0) visible.splice(index,1);
      }
    }

    return visible;
  },

  windowed_links: function() {
    links = [];
    prev = null;

    $.each(Pagination.visible_page_numbers(), function(i, obj) {
      if(prev && obj > prev + 1) links.push(Pagination.gap_marker);
      links.push(Pagination.page_link_or_span(obj, 'current'));
      prev = obj;
    });

    return links;
  },

  previous_page: function() {
    return Pagination.current_page > 1 ? (Pagination.current_page - 1) : null;
  },

  next_page: function() {
    return Pagination.current_page < Pagination.total_pages ? (Pagination.current_page + 1) : null;
  },

  page_link_or_span: function(page, span_class, text) {
    text = text || page.toString();

    if(page && page != Pagination.current_page) {
      classnames = span_class && span_class.indexOf(' ') && span_class.split(' ')[span_class.split(' ').length-1];
      return '<a href="'+Url.new_url({page: page})+'" class="'+span_class+'">'+text+'</a>';
    } else {
      return '<span class="'+span_class+'">'+text+'</span>';
    }
  }

};
/*
 * scroll_to_if_necessary.js
 *
 */
function scroll_to_if_necessary(element) {
  element = $(element);

  element_height = element.height();
  element_top_position = element.offset().top;
  element_bottom_position = element_height + element_top_position;

  viewport_height = $(window).height();
  viewport_top_position = $(window).get(0).pageYOffset;
  viewport_bottom_position = viewport_height + viewport_top_position;

  if (element_bottom_position > viewport_bottom_position) {
    $('html,body').animate({scrollTop: element_bottom_position - viewport_height}, 250);
  } else if (element_top_position < viewport_top_position) {
    $('html,body').animate({scrollTop: element_top_position}, 250);
  }
}

jQuery.fn.scroll_to = function() {
  scroll_to_if_necessary(this);
  return this;
};
/*
 * template.js
 *
 */
var Template = {
  /**
  Evaluates the string with the object provided
  @params string, object
  @public
  */
  evaluate: function(template, values) {
  	template = template || '';
  	values = values || {};

    var replace_value = function (str, match) {
      try { var value = eval('values.'+match.split(":")[0]); } catch(e) { return str; }

      if ((arr = match.split(":")) && arr.length > 1) {
        return eval(arr[1]+'("'+value.toString().inspect().replace(/"/g, '\\"')+'")');
      } else {
        return value;
      }
  	};

  	return template.replace(/#\{([^{}]*)\}/g, replace_value);
  }
}
/*
 * url.js
 *
 */
var Url = {
  params: null,
  defaults: {},

  set_defaults: function(options) {
    options = options || {};

    for(var key in options) {
      Url.defaults[key] = options[key];
      if(Url.params && !Url.params[key]) Url.params[key] = options[key];
    }
  },

  set_params: function(options) {
    options = options || {};
    Url.params = jQuery.extend({}, Url.defaults);
    var url = window.location.href;

    if ( (match = /^[^\?]*\?([^#]*).*$/.exec(url)) && (params = match[1].split("&")) ) {
      for (i = 0; i < params.length; i++) {
        key = params[i].split("=")[0];
        value = params[i].split("=")[1];
        Url.params[key] = value;
      }
    }

    for(var key in options) {
      Url.params[key] = options[key];
    }
  },

  get_params: function() {
    if(!Url.params) { Url.set_params(); }
    return Url.params;
  },

  get_param: function(param) {
    value = Url.get_params()[param];
    return value ? value : "";
  },

  new_url: function(object, url) {
    var base_url = (url ? url : window.location.href).split("?")[0];
    var merged_object = jQuery.extend({}, Url.get_params(), object);
    var params = [];
    for(var key in merged_object) {
      params.push(key+"="+merged_object[key]);
    }
    return base_url + "?" + params.join("&");
  }
}