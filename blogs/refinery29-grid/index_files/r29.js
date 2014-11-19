R29 = window.R29 || {};

/************************************************
*
*  Closure for jQuery hostile environment
*
************************************************/

;(function($){

/************************************************
*
*  Coooookkiiiee 
*
************************************************/

R29.cookie = {
  domain: (m=document.domain.match(/\.(refinery29\.com|stage\.refinery29\.net|refinery29\.net)$/))?m[0]:document.domain,
  set: function(name,value,seconds,domain) {
    
    var expires, date, c_domain;
    
    // -1 means delete cookie (-24 hours)
    if (seconds == -1) {
      seconds = 3600*24*-1;
    }
    
    expires = '';
    
    if (seconds) {
      //We got a permanent cookie
      date = new Date();
      date.setTime(date.getTime()+(seconds*1000));
      expires = "; expires="+date.toGMTString();
    }
    
    c_domain = domain || R29.cookie.domain;
    
    document.cookie = name+"="+value+expires+";path=/;domain=" + c_domain + ";";
    
  },
  get: function (name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for(var i=0;i<ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) {
        return c.substring(nameEQ.length,c.length);
      }
    }
    return null;
  },
  remove: function(name) {
   this.set(name,"",-1);
  }
};

/************************************************
*
*  URL Functions 
*
************************************************/

R29.url = {};

R29.url.param = {
  parse: function ( param_str ) {
    
    if (typeof param_str != 'string') {
      return {};
    } 
    
    var vars  = {};
    var parts = param_str.split('&');
    
    for(var i = 0; i < parts.length; i++) {
      var hash = parts[i].split('=',2);
      if (hash.length == 2)
        vars[unescape(hash[0])] = unescape(hash[1]);
    }
    
    return vars;
    
  },
  build: function ( params ) {
    var out = [];
    
    for( var k in params ) {
      out.push( escape(k) +'=' + escape(params[k]));
    }
    
    return out.join('&');
  },
  get: function() { 
  
    if (window.location.href.indexOf('?') < 1) {
      return {};
    }
    
    var e = window.location.href.indexOf('#');
    
    if (e < 1) {
      e = window.location.href.length;
    }
    
    return window.location.href.slice(window.location.href.indexOf('?') + 1,e);
  },
  getVars: function() {
    return R29.url.param.parse(R29.url.param.get());
  },
  getVar: function (key) {
    var params = R29.url.param.getVars();
    if (typeof params[key] != 'undefined') {
      return params[key];
    }
  },
  getUTM: function () {
   
    /* Returns hash of UTM params if they're set */
    
    var utm = {};
    var utm_tags = ['utm_source','utm_medium','utm_content','utm_name','utm_campaign', 'utm_term'];
    
    for (var i in utm_tags) {
      var t = R29.url.param.getVar(utm_tags[i]);
      
      if (t) {
        utm[utm_tags[i]] = t;
      }
    }
    
    return utm;
  }
};

R29.url.hash = {
  
  //
  // Get the value of everything after the #
  //
  get: function() {
  
    var parts = window.location.href.split('#', 2);
    
    if (parts.length == 1) {
      return '';
    }
    
    return unescape(parts[1]);
    
  },
  set: function (hash) {
    document.location = document.location.href.split('#')[0] + '#' + escape(hash);
  },
  getVars: function () {
  
    var parts = R29.url.hash.get().split('/');
    var vars  = {};
    
    for(var i = 0; i < parts.length; i++) {
    
      var hash = parts[i].match(/^([^\-]+)\-(.*)$/i);
      
      if (hash && hash.length == 3) {
        vars[unescape(hash[1])] = unescape(hash[2]);
      }
    }
    
    return vars;
  },
  getVar: function ( varname ) {
    var vars = R29.url.hash.getVars();
    
    if (typeof vars[varname] != 'undefined')  {
      return vars[varname];
    }
  },
  setVar: function ( varname, value) {
    var out = R29.url.hash.getVars();
    out[varname] = value;
    R29.url.hash.setVars(out);
    return R29.url.hash;
  },
  setVars: function ( hash ) {
  
    var out = [];
    
    for( var k in hash ) {
      out.push( escape(k) +'-' + escape(hash[k]));
    }
    
    R29.url.hash.set(out.join('/'));
  
  },
  hashVar: function ( varName, value ) {

    if (typeof value != 'undefined') {
      return R29.url.hash(varName + '-' + value);
    }

    var parts = R29.url.hash().split('-', 2);

    if (parts.length == 1) {
      return;
    }

    return parts[1];
  }

};


/************************************************
*
*  Users are Winners
*
************************************************/

R29.user = {
  // this is used for split or multivariant testing
  testing_code: (function(){
    var cookie_code, make_cookie;
    cookie_code = R29.cookie.get('testing_code');
    if(cookie_code) {
      return cookie_code;
    } else {
      make_cookie = Math.random();
      R29.cookie.set('testing_code', make_cookie);
      return make_cookie;
    }
  }()),
  
  init: function() {
    R29.user.setSource();
  },

  setSource: function() {
    
    var utm = R29.url.param.getUTM();
    
    if (typeof utm.utm_source == 'undefined' || !utm.utm_source) {
      return;
    }
     
    for (i in utm) {
      var cookieVar = 'trk_' + i;
      R29.cookie.set(cookieVar, utm[i], -1); //4 eva 
    }
    
    return true;
    
  },
  getSource: function() {
  
    var utm_tags = ['utm_source','utm_medium','utm_content','utm_name','utm_campaign','utm_term'];
    var out_tags = {};
    
    for (i in utm_tags) {
      var cookieVar = 'trk_' + utm_tags[i];
      out_tags[utm_tags[i]] = R29.cookie.get(cookieVar);
    }
    
    return out_tags;
    
  }
  
};

/************************************************
*
*  Widget the world wattcherrrr 
*
************************************************/  

R29.widget = {};

R29.widget.clickaway = function() {

  var input = document.createElement("input");
  if ('placeholder' in input) {
    return;
  }

  $(":input").each(
    function() {
      if($(this).attr('data-placeholder') == "undefined") {
        return;
      }
      if ($(this).val().length==0) {
        $(this).val($(this).attr("data-placeholder")).addClass("disabled");
      }
      
      $(this).focus(
        function() {
          if ($(this).hasClass('disabled') || $(this).val() == $(this).attr("data-placeholder")) {
            $(this).val("").removeClass("disabled"); 
          }
        }
      ).blur(
        function() {
          if ($(this).val().length==0) {
            $(this).val($(this).attr("data-placeholder")).addClass("disabled");
          }
        }
      );
    }
  );  
};

/************************************************
*
*  Add Handlers (because I'm wild)
*  A home for element event assigning-ing
*
************************************************/
R29.handlers = {
  set_handlers: function() {
    // html class os-win prevents web-fonts from loading
    // TODO : evaluate web-fonts on windows platform
    try {
      var h = document.getElementsByTagName('html')[0];
      h.className = h.className.replace('no-js', 'js');
      if(navigator.platform.indexOf('Win')>=0) {
        h.className = h.className + ' os-win';
      }
    }
    catch(err) { }
    
    // Universal Login Modal
    // live removed until IE bug can be fixed

    $('a.r29-login').click(function(e) {
      $(this).attr('href', 'javascript:void(0);');
      R29.modal.ajax_modal('user/login',{},{bg_mask_color: '#ffffff', bg_mask_opacity: '0.0', width: '100%', offset_y: '60px'});
      e.preventDefault();
      return false;
    });
    
    // User Dropdown Menu
    $('div.user').live('hover', function() {
      $(this).children('ul').toggleClass('display_none');
    });

  } // set_handlers
};

/************************************************
*
*  modal utilities
*
************************************************/
R29.modal = {
  jsonp_modal_uri: '',
  set_jsonp_modal_uri: function(uri) {
    if (uri) {
      this.jsonp_modal_uri = uri;
      return true;
    }
    var scripts = document.getElementsByTagName('script');
    for(var i=0,len=scripts.length, script_src; i<len; i++) {
      script_src = scripts[i].src;
      if (script_src && script_src.match(/\/r29\.js$/) && script_src.match(/^https?:/)) {
        var tmp = /^(https?):\/\/([^\/]+)/.exec(script_src);
        this.jsonp_modal_uri = tmp[1]+'://'+tmp[2]+'/api/modal/?callback=?';
        return true;
      }
    }
    return false;
  },
  jsonp_modal: function(page_name, data, obj, callback) {
    this.remove(); // close existing modals
    var data = data || {};
    var obj = obj || {};
    
    if (!page_name) return;
    
    if (!this.jsonp_modal_uri && !this.set_jsonp_modal_uri()) return;
    
    if (!this.test_object(data)) {
      data = {from: "from=" + encodeURIComponent(window.location.href)};
    }
    
    // set cb_err to obj param or default
    var cb_err = (typeof(obj.cb_err) !== undefined)? obj.cb_err : function(){};
    
    // render modal with loader while waiting on content
    this.render(page_name, obj);
    
    $.getJSON(this.jsonp_modal_uri, {page: page_name, data: data}, function(r){
      var html = r.html.replace(/R29\.modal\.ajax_modal/g, 'R29.modal.jsonp_modal');
      R29.modal.ajax_content(html, obj);
      callback && callback($('.modal').get(0));
    });
  },
  
  /*
    example: R29.modal.ajax_modal('user/login',{data: 'stuff'},{bg_mask_color: '#ffffff', bg_mask_opacity: '0.6'});
  */
  ajax_modal: function (page_name, data, obj) {
    this.remove(); // close existing modals
    var data = data || {};
    var obj = obj || {};
    /* page_name - the file in apps/default/views/modules/modals/ no .html
     * data - URL
     * obj - contains some or all of the following:
     *    cb_err - (default: none) callback err handler
     *    bg_mask_bool (default: true) - whether or not to use a mask between modal and page
     *    bg_mask_color (default: #fff) - hex value
     *    bg_mask_opacity (default: 0.6) - float value
     *    class_name (default: empty string) - string used for greater specificity
     *    offset_x/y (default: 0) - unsigned int to shift in pixels
     *    c_width/c_height (default: auto) - use pixels or percentage
    */
    
    if(!page_name) { return; } // page_name is required
    
    // make sure user returns to this page - JS
    if (!this.test_object(data)) {
      data = {from: "from=" + encodeURIComponent(window.location.href)};
    };
    
    // set cb_err to obj param or default
    var cb_err = (typeof(obj.cb_err) !== undefined)? obj.cb_err : function(){};
    
    // render modal with loader while waiting on content
    this.render(page_name, obj);

    // pass page_name into modal controller
    R29.api._aget('/modal', {page: page_name, data: data}, function (r) { R29.modal.ajax_content(r.result.html, obj); }, cb_err, false, true);
  }, // end ajax_modal
  
  /*
    example: R29.modal.inline_modal('#login',{bg_mask_color: '#ffffff', bg_mask_opacity: '0.6'});
  */
  inline_modal: function (id, obj) {
    this.remove(); // close existing modals
    var obj = obj || {};
    /* id - container div top pull into modal
     * obj - contains some or all of the following:
     *    cb_err - (default: none) callback err handler
     *    bg_mask_bool (default: true) - whether or not to use a mask between modal and page
     *    bg_mask_color (default: #fff) - hex value
     *    bg_mask_opacity (default: 0.6) - float value
     *    class_name (default: empty string) - string used for greater specificity
     *    offset_x/y (default: 0) - unsigned int to shift in pixels
     *    width/height (default: auto) - use pixels or percentage
    */
    
    if(!id) { return; } // id is required
    
    // set cb_err to obj param or default
    var cb_err = (typeof(obj.cb_err) !== undefined)? obj.cb_err : function(){};
    
    // render modal with loader while waiting on content
    obj.is_inline = true;
    this.render(id, obj);
    
    return;
  }, // end inline_modal
  
  /*
    example: R29.modal.iframe_modal('http://www.apple.com',{bg_mask_color: '#ffffff', bg_mask_opacity: '0.6'});
  */
  iframe_modal: function (path, obj) {
    this.remove(); // close existing modals
    var obj = obj || {};
    /* page_name - the file in apps/default/views/modules/modals/ no .html
     * data - URL
     * obj - contains some or all of the following:
     *    cb_err - (default: none) callback err handler
     *    bg_mask_bool (default: true) - whether or not to use a mask between modal and page
     *    bg_mask_color (default: #fff) - hex value
     *    bg_mask_opacity (default: 0.6) - float value
     *    class_name (default: empty string) - string used for greater specificity
     *    offset_x/y (default: 0) - unsigned int to shift in pixels
     *    width/height (default: auto) - use pixels or percentage
     *    overflow_x/y (default: scroll)
    */
    
    if(!path) { return; } // page_name is required
    
    // set cb_err to obj param or default
    var cb_err = (typeof(obj.cb_err) !== undefined)? obj.cb_err : function(){};
    
    // render modal with loader while waiting on content
    obj.is_iframe = true;
    
    this.render(path, obj);
  }, // end iframe_modal
  
  render: function (id, obj) {
    var bg_mask_bool, bg_mask_color, bg_mask_opacity, classy, c_height, offset_x, offset_y, c_width,
        mask_height, window_height, doc_width, file_name, get_top, get_left, clean_id, contents,
        overflow_x, overflow_y, opts, spinner;

    // set vars from obj or defaults
    bg_mask_bool = (typeof(obj.bg_mask_bool) !== 'undefined')? false : true;
    bg_mask_color = (typeof(obj.bg_mask_color) !== 'undefined')? obj.bg_mask_color : '#fff';
    bg_mask_opacity = (typeof(obj.bg_mask_opacity) !== 'undefined')? obj.bg_mask_opacity : '0.6';
    classy = (typeof(obj.class_name) !== 'undefined')? obj.class_name : '';
    c_height = (typeof(obj.height) !== 'undefined')? obj.height : 'auto';
    c_width = (typeof(obj.width) !== 'undefined')? obj.width : 'auto';
    offset_x = (typeof(obj.offset_x) !== 'undefined')? obj.offset_x : 0;
    offset_y = (typeof(obj.offset_y) !== 'undefined')? obj.offset_y : 0;
    overflow_x = (typeof(obj.overflow_x) !== 'undefined')? obj.overflow_x : 'auto';
    overflow_y = (typeof(obj.overflow_y) !== 'undefined')? obj.overflow_y : 'auto';
    
    if(obj.is_inline) {
      clean_id = id.split("#")[1]; // inline uses jquery #id, clean for modal id
      contents = $(id).html();
      file_name = clean_id;
    } else if(obj.is_iframe) {
      clean_id = 'iframe';
      
      contents = "<iframe src='" + id + "' style='border: none; height:" + c_height 
                  + "; width:" + c_width 
                  + ";  overflow-x:" + overflow_x
                  + ";  overflow-y:" + overflow_y
                  + ";'></iframe>";
      file_name = clean_id;
    } else {
      clean_id = id;
      contents = ''; // nadda
      opts = {
        lines: 9,
        length: 3,
        width: 3,
        radius: 5,
        rotate: 0,
        color: '#000',
        speed: 1,
        trail: 60,
        shadow: false,
        hwaccel: false,
        className: 'spinner',
        zIndex: 2e9,
        top: 'auto',
        left: 'auto'
      };
  
      spinner = new Spinner(opts).spin(); 
      // set file name to class name
      file_name = this.split_path(id);
    }

    // internally set vars
    mask_height = $(document).height();
    window_height = $(window).height();
    doc_width = $(window).width();
    
    $('body').append(
      '<div id="modal-' + clean_id + '" class="modal visible ' + file_name + ' ' + classy + '">'
      + '<div class="lightbox"></div>'
      + '<div class="content">'
      + '<div class="inner">'
      + '<div class="close">Close</div>'
      + contents
      + '</div>'
      + '</div>'
      + '</div>'
    );
    
    if(!obj.is_inline) {
      $('.modal .inner').append(spinner.el);
    }
    get_top = (function () {
      var topper = (window_height / 3 - $('.modal .content').height() / 3) + $(document).scrollTop() + parseInt(offset_y, 10);
      return (topper > 0) ? topper : 0;
    })();

    get_left = (function () {
      var border_padding, extra_width, content_width;
      
      // IE sucks and returns medium for 'border-left-width' instead of 0px when there is no border, checking for NaN
      border_padding = (parseInt($('.modal .content').css('border-left-width'), 10) * 2);
      if(isNaN(border_padding)) {
        border_padding = 0;
      }
      // borders and padding aren't added to width total and need to be accounted for
      extraWidth = border_padding + (parseInt($('.modal .content').css('padding-left'), 10) * 2);
      
      if (c_width === "100%") { // full width modal
        return 0;
      }
      
      return (doc_width / 2 - $('.modal .content').width() / 2) - extraWidth + parseInt(offset_x, 10);
    })();
    
    
    //Set the popup window to center
    $('.modal .content').css({'top': get_top, 'left': get_left, 'width': c_width, 'height': c_height});
    
    //Style the background mask and add click function to close modal
    $('.modal .lightbox').css({'height': mask_height, 'width': doc_width, 'background-color': bg_mask_color, 'opacity': bg_mask_opacity}).click(function () {
      R29.modal.remove();
    });
    
    $('.modal .close').click(function () {
      R29.modal.remove();
    });
  }, // end render
  
  ajax_content: function (html, obj) {
    var c_height, offset_x, offset_y, c_width,
        mask_height, window_height, doc_width, get_top, get_left;

    $('.modal .spinner').remove();
    $('div.modal div.content .inner').append(html);

    c_height = (typeof(obj.height) !== 'undefined')? obj.height : 'auto';
    offset_x = (typeof(obj.offset_x) !== 'undefined')? obj.offset_x : 0;
    offset_y = (typeof(obj.offset_y) !== 'undefined')? obj.offset_y : 0;
    c_width = (typeof(obj.width) !== 'undefined')? obj.width : 'auto';

    // internally set vars
    mask_height = $(document).height();
    window_height = $(window).height();
    doc_width = $(window).width();
    
    get_top = (function () {
      var topper = (window_height / 3 - $('.modal .content').height() / 3) + $(document).scrollTop() + parseInt(offset_y, 10);
      return (topper > 0) ? topper : 0;
    })();
    
    get_left = (function () {
      var border_padding, extraWidth;
      // IE sucks and returns medium for 'border-left-width' instead of 0px when there is no border, checking for NaN
      border_padding = (parseInt($('.modal .content').css('border-left-width'), 10) * 2);
      if(isNaN(border_padding)) {
        border_padding = 0;
      }
      // borders and padding aren't added to width total and need to be accounted for
      extraWidth = border_padding + (parseInt($('.modal .content').css('padding-left'), 10) * 2);
      return (doc_width / 2 - $('.modal .content').width() / 2) - extraWidth + parseInt(offset_x, 10);
    })();
    
    //Set the popup window to center
    $('.modal .content').css({'top': get_top, 'left': get_left, 'width': c_width, 'height': c_height});
  }, // end ajax_content

  remove: function () {
    $('.modal').empty().remove();
  },
  
  test_object: function( obj ) {
    var prop;
    for ( var prop in obj ) {
      if (obj.hasOwnProperty(prop)) {
        return true;
      }
    }
    return false;
  },
  
  split_path: function( p ) {
    var sp = p.split('/');
    var sp = sp[sp.length-1];
    return sp;
  }
  
};

/************************************************
*
*  Think the cat below, but with a signup form
*
*         |\__/,|   (`\
*       _.|o o  |_   ) )
*  ---(((---(((---------
*
************************************************/ 

//Delay in ms before we show the thing
R29.widget.signupDelay = 1000;

R29.widget.signup = function() {
  
  //Yes, busted in IE
  if ($.browser.msie) {
    return false;
  }
  
  //Bad ipad, bad
  if (navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/)) {
    return false;
  }
  
  if (R29.cookie.get("signup-ws")) {
    return false;
  }
  
  //This needs a CSS file, so, let's grab it.
  R29.loader['static'].css('/base/widgets/signup-ws/style.css');
  
  //Draw the actual divs

  $('body').append(
    '<div id="signup-ws" style="height:0;position:fixed;bottom:0;">' + //This is a good location so it's hidden from the start
    ' <div class="x"></div>' +
    ' <div class="trans"></div>' +
    ' <div class="inner">' +
    '  <div class="market-text"></div>' +
    '  <input type="text" class="clickaway email" value="" default="Your Email Address" name="" />' +
    '  <input class="submit" type="submit" value="GO" />' +
    ' </div>' +
    '</div>'
  );
  
  R29.widget.clickaway();
  
  //X to close
  $("#signup-ws div.x").click (
    function() {
      R29.cookie.set("signup-ws", 1, 3600*24*7); //Set a cookie for a week.
      $("#signup-ws").animate({height:"0px"});
    }
  );
  
  //Grab the closest mailing list, if one, and set to subscribe the user.
  R29.mailinglist.closest( 50, 
    function (r) {
    
      list_ids = ["mail_everywhere"];
      
      if (r.length) {
        list_ids[1] = r[0].list_id;
        $("#signup-ws .market-text").addClass(r[0].market);
      }
    
      //Wait for DOM ready and show the thing
      $().ready(function() {
        $("#signup-ws").show().delay(R29.widget.signupDelay).animate({height:"40px"}, 500);
      });
      
      $("#signup-ws .submit").click( 
        function() {
      
          //If the box is empty or set to disabled
          if ($("#signup-ws .email").val().length==0 || $("#signup-ws .email").hasClass("disabled")) return false;
          
          R29.cookie.set("signup-ws", 1, -1); //You'll never see this again!
          
          if (!R29.validate.email($("#signup-ws .email").val())) {
            $("#signup-ws .email").val('Invalid Email').addClass('disabled');
            return;
          }
           
          //Do the actual subscription
          
          R29.mailinglist.subscribe( $("#signup-ws .email").val(), list_ids, function(r) { 
          
            $("#signup-ws .inner").fadeOut(400,function() {
              $("#signup-ws .trans").addClass("confirmation");
            });
            
            $("#signup-ws .email").val('Thanks!').addClass('disabled');
            $("#signup-ws").delay(4000).animate({height:"0px"});
            
          },
          function(r) {
            
          });
          
          return false;
        }
      );
    }
  );
  
  return true;
};

/***********************************************
*
*  I VALIDATE 
*
*************************************************/

R29.validate = {
  email: function (email) {
    //You and me both know email validation is a sham
    return email.match(/^(.*)@(.*)\.(.*)$/)?true:false;
  },
  
  email_2: function (email) {
    pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i);
    return pattern.test(email);
  },
  
  email_available: function (email, cb) {
    R29.api._get('/user/email',{'email': email}, cb);
  },
  // TODO: Check against server?
  username: function(username) {
    if (username.length) {
      return true;
    }
    return false;
  },
  
  zipcode: function (zipcode) {
    return zipcode.match(/^\d{5}$/) ? true : false;
  }
};

R29.user.init();

$('input.submit[type=submit][after_value]').live('click', function() {
  if (this.beenSubmitted) {
    return false;
  }
  
  $(this).val($(this).attr('after_value'));
  
  return this.beenSubmitted = true;
});

})(jQuery);
