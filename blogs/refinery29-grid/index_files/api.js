	/************************************************
	*
	*  Our API is all up in yos face.
	*
	************************************************/
	
	R29.api = {
	    baseUrlLocal:  '/api',
	    baseUrlRemote: null,
	    pipeServer: null,
	    isRemote:      null, 
	    setServer:     function() {
	    
	      if (document.domain.match(/\.refinery29\.com$/)) {
	        //We're in production
	        R29.api.isRemote      = false;
	        R29.api.baseUrlRemote = document.location.protocol + '//api.refinery29.com';
	        R29.api.pipeServer    = 'https://pipe.refinery29.com';
	      } else if (m = document.domain.match(/(([a-z0-9]+)\.)?(dev|local|stage).(refinery29\.net|rf29\.net)$/)) {
	        //We're in dev/stage
	        R29.api.isRemote      = false;
	        domain = '.'+m[2]+'.' +m[3]+'.' + m[4];
	        R29.api.baseUrlRemote = document.location.protocol + '//api' + domain;
	        R29.api.pipeServer    = 'https://pipe' + domain + ':8000';
	      } else {
	        //Someone else is including us.
	        R29.api.isRemote      = true;
	        R29.api.baseUrlRemote = document.location.protocol + '//api.refinery29.com';
	        R29.api.pipeServer    = 'https://pipe.refinery29.com';
	      }
	
	    },
	    ajax: function (url, method, data, cb, cb_err, settings) {
	    
	      if (typeof settings == 'undefined')            settings = [];
	      if (typeof settings.cache == 'undefined')      settings.cache = false;
	      if (typeof settings.isRemote == 'undefined')   settings.isRemote = R29.api.isRemote;
	      
	      if (typeof cb_err == 'undefined')              cb_err = function() {};
	      
	      var data_type  = 'json';
	      var api_url    = R29.api.baseUrlLocal + url;
	      var out_cb     = cb;
	      var out_cb_err = cb_err;
	      
	      //Or if we're doing jsonp
	      if (settings.isRemote == true) {
	        data_type = 'jsonp';
	        api_url   = R29.api.baseUrlRemote + url;
	        data.method = method;
	        method    = 'GET';
	        out_cb_err = function() {}; //No error handling in jsonp
	        out_cb = function (r) {
	        
	          if (r.status == 'OK') {
	            cb(r.result);
	          } else {
	            cb_err(r.code, r.message);
	          }
	          
	        }
	        
	      } else {
	        //In case of an error, let's wrap it in a function that returns a the error message.
	        out_cb_err = function(r) {
	          return cb_err(jQuery.parseJSON(r.responseText));
	        };
	      }
	      
	      return jQuery.ajax({
	        url:      api_url, 
	        data:     data, 
	        cache:    settings.cache,
	        type:     method,
	        success:  out_cb,
	        error:    out_cb_err,
	        dataType: data_type
	      });
	 
	    },
	    _post: function ( url, data, cb, cb_err ) {
	      return R29.api.ajax(url,'POST', data, cb, cb_err );
	    },
	    _get: function ( url, data, cb, cb_err, isRemote, cache ) {
	      return R29.api.ajax(url,'GET', data, cb, cb_err, isRemote, cache);
	    },
	    _rget: function ( url, data, cb, cb_err, cache ) {
	      return R29.api.ajax(url,'GET', data, cb, cb_err, cache);
	    },    
	    _put: function ( url, data, cb, cb_err ) {
	      return R29.api.ajax(url,'PUT', data, cb, cb_err );
	    },
	    _delete: function ( url, data, cb, cb_err ) {
	      return R29.api.ajax(url,'DELETE', data, cb, cb_err );
	    },
	    //Authenticated
	    _apost: function ( url, data, cb, cb_err ) {
	      data.access_token = R29.user.token();
	      return R29.api.ajax(url,'POST', data, cb, cb_err );
	    },
	    _aget: function ( url, data, cb, cb_err, isRemote, cache ) {
	      data.access_token = R29.user.token();
	      return R29.api.ajax(url,'GET', data, cb, cb_err, isRemote, cache);
	    },
	    _aput: function ( url, data, cb, cb_err ) {
	      data.access_token = R29.user.token();
	      return R29.api.ajax(url,'PUT', data, cb, cb_err );
	    },
	    _adelete: function ( url, data, cb, cb_err ) {
	      data.access_token = R29.user.token();
	      return R29.api.ajax(url,'DELETE', data, cb, cb_err );
	    }
	};
	
	WEB_SOCKET_SWF_LOCATION = '/static/js/socket.io/WebSocketMain.swf';
	
	R29.pipe = function( onConnect ) {
	
	  if (typeof io !== 'object') {
	    console.err('Socket.io not loaded');
	    return;
	  }
	  
	  var that = this;
	  
	  this.socket = io.connect(R29.api.pipeServer, {secure: true});
	  
	  this.handlers        = {};
	  this.onMessageSet    = false;
	  this.last_msg_id     = null
	  
	  if (this.socket.socket.connected) {
	    if (typeof onConnect == 'function') {
	      onConnect();
	    }
	  } else {
	    this.socket.on('connect', onConnect);
	  }
	  
	  this.onMessage = function(payload) {
	    
	    var pattern = payload.pattern;
	    
	    if (payload.msg_id == that.last_msg_id) {
	      //console.error('Got a duplicate payload: %o', payload);
	      return;
	    }
	    
	    if (typeof that.handlers[pattern] == 'undefined') {
	      //console.error('Handler not defined for pattern: %o', pattern);
	      return;
	    }
	    
	    //All the handler with the full payload;
	    that.last_msg_id = payload.msg_id;
	    that.handlers[pattern](payload); 
	    
	  }
	  
	  this.subscribe = function(patterns, callback) {
	  
	    if (typeof patterns == "string") {
	      patterns = [patterns];
	    }
	    
	    var new_patterns = [];
	    
	    for(var i in patterns) {
	      if (typeof this.handlers[patterns[i]] == 'undefined') {
	        new_patterns.push(patterns[i]);
	      }
	      this.handlers[patterns[i]] = callback;
	    }
	    
	    var last_id = null;
	    
	    if (new_patterns.length > 0) { 
	      this.socket.emit('subscribe', { patterns: new_patterns }); 
	    }
	    
	    //We only want to set this once;
	    if (!this.onMessageSet) { 
	      this.socket.on('message',this.onMessage);
	      this.onMessageSet = true;
	    }
	    return this;
	  };
	  
	};
	
	
	R29.contest = { 
	  submissions: function (contest_id, query, cb, cb_err) {
	    return R29.api._get( '/blog/contest/submissions/' + contest_id, query, cb, cb_err);
	  }
	};
	
	(function($){
	
	  /* Extend R29.user object */
	  R29.user = $.extend(true, R29.user || {}, {
	    token: function(token) {
	      if (typeof token == 'undefined') {
	       token = R29.cookie.get('session29');
	       return token;
	      }
	      return R29.cookie.set('auth_token', token);
	    },
	    login: function ( user, pass, cb, cb_err) {
	      var data = {user: user, pass: pass, app_id: '8675309',mode: 'usercreds'};
	      return R29.api._post( '/auth/access_token', data, function(data) {
	        //Set the token
	        R29.user.token(data.result.token);
	      });
	    },
	    require: function() {
	      alert('hey bud, we need a login');
	    }
	  });
	
	})(jQuery);
	
	R29.api.setServer();