(function () {

	/*
	 *
	 * Three kinds of messages
	 *
	 * 1. Get Message - Both ways
	 *		Request for value of attribute. eg. context, width, height etc.
	 *
	 * 2. Attr Message - Both ways
	 *		Reponse to Get Message. Returns value for requested attribute.
	 *
	 * 3. Action Message - Child to Parent
	 *		Request to take some kind of action. eg. adjust height, width etc.
	 *
	 *
	 *
	 * Child Frame public Methods:
	 *
	 * get(attrName, callback)
	 *
	 *		attrName - name of the attribute to get from Parent Frame
	 *      callback(err, attr) - function to be called on response for the req. for atttribute;
	 *
	 * act(action, param)
	 *		action - name of the action to be performed
	 *		param - parameters for the action
	 *	
	 *
	 * Parent Frame
	 *
	 * Attributes can be handled by one of the two approaches (But, not both).
	 * Method 1:
	 *		Override getAttribute method to handle attributes
	 * 
	 *		getAttribute(attrName)
	 *			This is a sync function that returns the value for the attribute.
	 *			Return null if attrName not supported.
	 *
	 * Method 2:
	 *		Call setAttributes() with an array of name - value pairs.
	 *			The value could be a function that returns the value for an attribute name (the key)
	 * 
	 *		setAttributes(arrayOfAttributeValuePairs)
	 *
	 * Actions can be handled by one of the two approaches (But, not both).
	 * Method 1:
	 *		Override performAction method to handle actions
	 * 
	 *		performAction(trgtWnd, actionName, actionsParams)
	 *			Perform action on the target window (child frame).
	 *
	 * Method 2:
	 *		Call setActions() with an array of name - value pairs.
	 *			The values are functions that performs the actions (the key)
	 * 
	 *		setActions(arrayOfActions)
	 *
	 */

	var FrameMessenger = function () {
		this.attrs = {};
		this.actions = {};
		
		this._postMsg = function (trgt, msg) {
			trgt.postMessage(JSON.stringify(msg), "*");
		};

		var _version = "0.0.1";
		var _runningID = 1;
		var _callbacks = {};


		this._postErrorMsg = function (trgt, id, error) {
			var msg = {
				id : id,
				type : 'error',
				error : error
			};

			this._postMsg(trgt, msg);
		};

		this._postMsgWithCallback = function (trgt, msg, cb) {
			// Stringfy running id
			var id = _runningID++;
			var msgId = 'msg' + id.toString();
			msg.id = msgId;

			var self = this;
			// attach callback to msg id
			_callbacks[msgId] = function (err, returnMsg) {
				cb(err, returnMsg);
				// Single use only
				delete _callbacks[msgId];
			};

			this._postMsg(trgt, msg);

			setTimeout(function () {
				if (msgId in _callbacks) {
					_callbacks[msgId]("Timedout");
				}
			}, this.opt.timeout);
		};

		this._postVerMsg = function (trgt, callback) {
			var msg = {
				type : 'ver'
			};

			this._postMsgWithCallback(trgt, msg, callback);
		};

		this._postGetMsg = function (trgt, attrName, callback) {
			var msg = {
				type : 'get',
				name : attrName
			};

			this._postMsgWithCallback(trgt, msg, callback);
		};

		this._postAttrMsg = function (trgt, id, attr) {
			var msg = {
				id : id,
				type : 'attr',
				attr : attr
			};

			this._postMsg(trgt, msg);
		};

		this._postActionMsg = function (trgt, name, param) {
			var msg = {
				type : 'action',
				name : name,
				param : param
			};
		
			this._postMsg(trgt, msg);
		};

		this.myVersion = function () {
			return _version;
		};

		this.handleVer = function (wnd, id) {
			this._postAttrMsg(wnd, id, this.myVersion());
		};

		this.handleGet = function (wnd, id, attrName) {
			if (attrName instanceof Array) {
				var vals = {};
				for (var i = 0; i < attrName.length; i++) {
					var valu = this.getAttribute(attrName);

					if (typeof valu !== "undefined") {
						vals[attrName] = valu;
					}
				}
				this._postAttrMsg(wnd, id, vals);
			}
			else {
				var val = this.getAttribute(attrName);

				if (typeof val !== "undefined") {
					this._postAttrMsg(wnd, id, val);
				}
				else {
					this._postErrorMsg(wnd, id, "Attribute '" + attrName + "' not supported");
				}
			}
		};

		this.handleAttr = function (id, attr) {
			if (_callbacks[id]) {
				_callbacks[id](null, attr);
			}
		};

		this.handleError = function (id, error) {
			if (_callbacks[id]) {
				_callbacks[id](error);
			}
		};

		this.handleAction = function (wnd, name, param) {
			this.performAction(wnd, name, param);
		};
		
		this._allowOrigin = function (origin) {
			if (this.opt.origin && this.opt.origin !== '*') {
				for (var i = 0; i < this.opt.origin.length; i++) {
					if (origin == this.opt.origin[i]) {
						return true;
					}
				}

				return false;
			}

			return true;
		};

		this._listener = function (event) {
			if (!this._allowOrigin(event.origin)) {
				return;
			}

			try {
				var msg = JSON.parse(event.data);
				if (msg.type) {
					if (msg.type == 'get') {
						this.handleGet(event.source, msg.id, msg.name);
					}
					else if (msg.type == 'attr' && msg.id) {
						this.handleAttr(msg.id, msg.attr);
					}
					else if (msg.type == 'error' && msg.id) {
						this.handleError(msg.id, msg.error);
					}
					else if (msg.type == 'action') {
						this.handleAction(event.source, msg.name, msg.param);
					}
					else if (msg.type == 'ver') {
						this.handleVer(event.source, msg.id);
					}
				}
			}
			catch (e) {	// Probably not ours
				return;
			}

		};


		
		this._init = function (options) {
			this.opt = {
				origin : '*',
				timeout : 1000	// 1 sec.
			};
			var opt = options || {};

			// Merge options
			for (var attr in opt) {
				this.opt[attr] = opt[attr];
			}

			// Pre process opts
			if (this.opt.origin !== '*' && !(this.opt.origin instanceof Array)) {
				this.opt.origin = [this.opt.origin];
			}

			var self = this;

			// Setup the listener.
			if (window.addEventListener) {
				window.addEventListener("message", function (event) {
					self._listener.apply(self, [event]);
				}, false);
			}
			else {
				window.attachEvent("onmessage", function (event) {
					self._listener.apply(self, [event]);
				}, false);
			}
		};
		
	};

	FrameMessenger.prototype.getAttribute = function (attr) {
		var val;
		if (attr in this.attrs) {
			val = this.attrs[attr];
			if (typeof val === 'function') {
				val = val.call(this, attr);
			}
		}
		return val;
	};

	FrameMessenger.prototype.performAction = function (trgt, name, param) {
		if (name in this.actions) {
			this.actions[name].apply(window, [trgt, param]);
		}
	};

	FrameMessenger.prototype.setAttributes = function (attrs) {
		this.attrs = attrs;
		return this;
	};

	FrameMessenger.prototype.setActions = function (actions) {
		this.actions = actions;
		return this;
	};

	FrameMessenger.prototype.getVersion = function (wnd, cb) {
		if (wnd.window != wnd) {	// Child frame communicate to parent
			// insert parent window as first arg
			[].unshift.call(arguments, window.parent);
		}
		this._postVerMsg.apply(this, arguments);
		return this;
	};

	FrameMessenger.prototype.get = function (wnd, attrName, cb) {
		if (wnd.window != wnd) {	// Child frame communicate to parent
			// insert parent window as first arg
			[].unshift.call(arguments, window.parent);
		}
		this._postGetMsg.apply(this, arguments);
		return this;
	};

	FrameMessenger.prototype.act = function (wnd, action, param) {
		if (wnd.window != wnd) {	// Child frame communicate to parent
			// insert parent window as first arg
			[].unshift.call(arguments, window.parent);
		}

		this._postActionMsg.apply(this, arguments);
		return this;
	};

	FrameMessenger.parent = function (opt) {
		if (!this.instance) {
			this.instance = new FrameMessenger();

			opt = opt || {};
			this.instance._init(opt);
		}
		return this.instance;
	};

	FrameMessenger.child = function (name, opt) {
		if (!this.instance) {
			this.instance = new FrameMessenger();
			this.instance.name = name;

			opt = opt || {};
			this.instance._init(opt);
		}
		return this.instance;
	};


	// Public access
	window.FrameMessenger = {
		parent: FrameMessenger.parent,
		child: FrameMessenger.child,
		util : {
			isIFramed : function () {
				try {
					return window.self !== window.top;
				}
				catch (e) {	// Some browsers throw error on cross-origin frame access
					return true;
				}
			},

			hasFrames : function () {
				return (document.getElementsByTagName("iframe").length > 0);
			}
		}
	};

	// Using require.js?
	if (typeof define === 'function' && define.amd) {
		define("dj.framemessenger.resources/framemessenger", [], function () {
			return window.FrameMessenger;
		});
	}

}());
