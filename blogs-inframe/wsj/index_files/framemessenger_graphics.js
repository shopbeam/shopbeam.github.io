var Iframe = {

	init: function(frame_name, jq_root_elem, options) {
		if (!!frame_name && typeof(frame_name) == "string") {
			frame_name = frame_name;	
		}
		else {
			// shift args
			options = jq_root_elem;
			jq_root_elem = frame_name;
			// Get from data-attr
			frame_name = $('script#framemessenger_graphics').data('frame-name');
		}
		
		if (!!jq_root_elem && typeof(jq_root_elem) == "string") {
			jq_root_elem = jq_root_elem;	
		}
		else {
			// shift args
			options = jq_root_elem;
			// Get from data-attr
			jq_root_elem = $('script#framemessenger_graphics').data('root-element');
		}
		
		options = options || {};
		this.jq_root_elem = jq_root_elem;
		this.lastHeight = -1;
		var frame;
		if (FrameMessenger.util.isIFramed()) {
			// IE give IFrame height, so use outerHeight
			if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
				this._getHeight = function() {
					//return $(this.jq_root_elem).outerHeight(true);
					return ($('body').height());
				}
			}
			frame = FrameMessenger.child(name, options);
			var autoSize = options.autoSize === false ? false : true;	// default is true
			if (autoSize) {
				var self = this;
				$(window).resize(function() {
					setTimeout(function() { 
						self.push_height(frame);
					}, 500);
				});

				// FrameMessenger loads late on parent frame due to requirejs
				// Call init on parentReady notification.
				frame.setActions( {
					parentReady : function(parent, dim) {
						Iframe.init_dimension(frame);
						}
					});
				setTimeout(function() {
					Iframe.init_dimension(frame);
				}, 1000);
			}
			return frame;
		} else {
			return frame;
		}
	},

	init_dimension: function(fm){
		if (typeof fm === 'undefined') return;
		this.lastHeight = this._getHeight();

		fm.act('dimension', {
			width: '100%',
			height: this.lastHeight
		});
	},

	init_hash: function(fm){
		if (typeof fm === 'undefined') return;
		var dfd = $.Deferred();
		fm.get('hash', function(err, hashValue) {

			if (!err && hashValue) {
				dfd.resolve(hashValue);
			}
			else {
				dfd.reject();
			}
		});
		return dfd.promise();
	},

	get_parent_href: function(fm){
		if (typeof fm === 'undefined') return;
		var dfd = $.Deferred();
		fm.get('href', function(err, value) {

			if (!err && value) {
				dfd.resolve(value);
			}
		});
		return dfd.promise();
	},

	push_height: function(fm, height){
		if (typeof fm === 'undefined') return;
		height = height || this._getHeight();

		if (height != this.lastHeight) {
			this.lastHeight = height;
			fm.act('height', height);
		}
	},

	push_hash: function(fm){
		if (typeof fm === 'undefined') return;
		var hash = window.location.hash

		fm.act('hash', hash);
	},
	
	_getHeight: function() {
		var height = this.jq_root_elem ? $(this.jq_root_elem).outerHeight(true) : $(document).height();
		return height;
		// return $('html').height();	// This returns the iframe height
		// return $(this.jq_root_elem).outerHeight(true);
		// return $(document).height();
	}

};

$(function() {
	var options_auto = $('script#framemessenger_graphics').data('options-auto');
	if (options_auto && /^true$/i.test(options_auto)) {
		var fm = Iframe.init();
	}
});
