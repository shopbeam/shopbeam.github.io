  /* DON'T LOOK AT ME, I'M HIDEOUS */

/***********************************************
*
* Just look at me, I'm cuuuuuute
*
*
*    Zzzzz  |\      _,,,--,,_        +-----------------------------+
*           /,`.-'`'   ._  \-;;,_    | Why is there always a cat   |
*          |,4-  ) )_   .;.(  `'-'   | on whatever you're editing? |
*         '---''(_/._)-'(_\_)        +-----------------------------+
*
*
*************************************************/


/***********************************************
*
*  You will forget a console log!
*
*************************************************/

if (typeof console == 'undefined') {
  console = { log: function(){} };
}

if (typeof R29 == 'undefined') {
  R29 = {};
}

/***********************************************
*
*  Tracking
*
*************************************************/

R29.tracking = {

  //Refresh analytics tracking to better reflect pageviews
  refresh: function () {

    //Google
    _gaq.push(['_trackPageview']);

    //Comcore
    COMSCORE.beacon({ c1:2, c2:"7395029",c3:"www.refinery29.com", c4:currentUrl, c5:"", c6:"", c15: val});

    //Quantcast
    _qoptions={
      qacct:"p-fesXMHo90Ka_A"
    };

    _qpixelsent = new Array();

    quantserve();

    //ChartBeat

    //if (typeof pSUPERFLY != 'undefined') {
    //  pSUPERFLY.virtualPage(document.location.href.replace(/http(s)?\:\/\/([a-z0-9\.]+)/,''));
    //}

 },

 outbound: function() {

  //Tracks outbound links for GA as Event Trackingg
  $('a').each(function() {

    var $this = $(this);
    var href  = $this.attr('href');

    if ( !href.match(/http[s]?:/) || href.match(/^http[s]?:\/\/(www|welcome)\.(([a-z]+\.dev\.(refinery29|rf29)\.net)|refinery29\.com)/)){
      return;
    };

    if ($this.parents('.ad').length || href.match(/ad.doubleclick.net/)) { //no ads!
      return;
    }

    $this.bind('click', function(e) {
      var href  = $this.attr('href');
      var target = $this.attr('target');
      e.preventDefault();
      _gaq.push(['_trackEvent', 'Outbound Link', href]); //Sends the event as Outbound Link with action URI
      if(target === "_blank"){
        setTimeout('window.open("' + href + '")', 100); //Timeout so the tracking can be sent before the redirect
      } else{
        setTimeout('document.location = "' + href + '"', 100); //Timeout so the tracking can be sent before the redirect
      }
      return false;
      });

    });

  }

};

  /************************************************
   *
   *  ADS
   *
   *   Walker Told Me I Have ADS
   *
   ************************************************/

  R29.ads = {};

  /************************************************
   *
   *  Refresh
   *
   *   Refreshes all the ads that match the element selector
   *
   ************************************************/

  R29.ads.refresh = function( elSelector ) {

    var ord = (new Date()).getTime();

    $(elSelector).each( function() {

      var src = $(this).attr('iframe-code');
      var sz  = $(this).attr('iframe-size');

      if (typeof src == 'undefined' || typeof sz == 'undefined') {
        return; //Guess we don't have
      }

      var dims = sz.split(',');
      var t_w = t_h = w = h = 0;

      //Select the largest dimensions and use those.
      for(var i in dims) {

        t_w = parseInt(dims[i].split('x', 2)[0]);
        t_h = parseInt(dims[i].split('x', 2)[1]);

        if (t_w > w) {
          w = t_w;
        }
        if (t_h > h) {
          h = t_h;
        }
      }

      var iframe = $('<iframe/>')
          .attr('scrolling', 'no')
          .attr('src', src + ';ord=' + ord)
          .attr('noresize', 'noresize')
          .attr('frameBorder', 0)
          .attr('border', 0)
          .attr('cellspacing', 0)
          .attr('marginwidth', 0)
          .attr('marginheight', 0);

      if (h > 0) iframe.css('height', h + 'px');
      if (w > 0) iframe.css('width',  w + 'px');

      $(this).height(h);
      $(this).width(w);

      $(this).html('');

      //Delete ads served via embeds.
      $('embed').each(function() {$(this).attr('src').match(/(unicast|doubleclick)/)?$(this).parent().remove():'';});

      $(this).append(iframe);

    });

  };




  R29.ads.tag = {
    get: function(zone1, zone2, zone3, sponsor, page_id, size, tile, classname){

      if (zone1 == 'shopping') {
        zone1 = 'shopping-and-sales';
      }

      var path   = "/"+zone1+"/"+zone2;
      var height = size.substring(4,7);
      var width  = size.substring(0,3);


      var ad_tag = "<div class=\"ad "+classname+"\"><iframe src=\"http://ad.doubleclick.net/adi/r29.oao/" + path + ";s1="+zone1+";s2="+zone2+";s3="+zone3+";sponsorship="+sponsor+";pageid="+page_id+";pos=top;tile="+tile+";sz="+size+";\" width=\""+width+"\" height=\""+height+"\" scrolling=\"no\" frameborder=\"0\"/></div>";

      return ad_tag;
    }
  };


  //
  // Welcome mat ads, you know you love em'
  //

  R29.ads.welcome = {
    show: function( timeout_sec, tag){

      $('body').append( $('<div id="ad-center" style="position:fixed;z-index:1001;">' + tag + '</div>'));
      $('body').append( $('<div id="screen" style="position:fixed;left: 0;top: 0;background:#000;z-index:1000;"></div>') );

      $('#screen').css({"display": "block", opacity: 0.7, "width":$(window).width(),"height":$(window).height()});
      $('#ad-center').css({"display": "block"});
      $('#ad-center').css({"left": Math.round(($(window).width() - $('#ad-center').width())/2) +'px',"top": Math.round(($(window).height() - $('#ad-center').height())/2) +'px'});


      $('#screen').click(function() {R29.ads.welcome.close();});

      setTimeout(R29.ads.welcome.close, 1000*timeout_sec);
    },
    close: function () {
      $('#screen').remove();
      $('#ad-center').remove();
    }

  };


/************************************************
*
*  Coooookkiiiee
*
************************************************/

R29.cookie = {
  domain: (m=document.domain.match(/\.(refinery29\.com|stage\.refinery29\.net|refinery29\.net|rf29\.net)$/))?m[0]:document.domain,
  set: function(name,value,seconds,domain) {

    var expires, date, c_domain;

    //-1 means we got a permanent cookie
    if (seconds == -1) {
      date = new Date();
      seconds = date.getTime() + 3E11; // about 10 years = "forever"
    }

    expires = '';

    if (seconds) {
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
*  Subscribe and find the closest lists
*
*   Examples:
*       R29.mailinglist.subscribe( 'jenn@refinery29.com', ['main_everywhere'], 'Sidebar', 'Organic', function(r) { console.log(r); });
*       R29.mailinglist.closest( 0, function(r) { console.log(r); });
*
************************************************/
R29.mailinglist = {
  closest: function ( threshold_miles, cb, cb_err) {
    if ( !threshold_miles > 0) {
      threshold_miles = 0;
    }
    return R29.api._get('/mailinglist/closest', {threshold: threshold_miles}, function(r) { cb(r.result); }, cb_err);
  },
  subscribe: function ( email, email_lists, source, source_type, cb, cb_err) {
    return R29.api._post('/mailinglist/subscribe', {email: email, email_lists: email_lists, source: source, source_type: source_type}, function(r) { cb(r.result); }, cb_err);
  }
};

/************************************************
*
*  Loader class to load external files
*
*   Example: R29.loader.css('/path/to/file.css');
*
************************************************/
R29.loader = {
  static_base: "static.refinery29.com",
  'static': {
    file: function(file) {
      return document.location.protocol + '//' + R29.loader.static_base + file;
    },
    css: function(file) {
      return R29.loader.css(R29.loader['static'].file(file));
    }
  },
  css: function(file){
	  $('head').append('<link href="' + file + '" type="text/css" rel="stylesheet" />');
  }
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

    // Search Trigger: Need a way to pass in IDs and limit per search box
    (new DynoSearch('#search-box')).limit(10);
    (new DynoSearch('#shopping-search-box')).limit(4);

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

  /**
   * Renders a modal dialogue populated with the html cotent of a
   * specified page.
   *
   * @param {String} page_name
   *    The specific page you want rendered. Note that these names should
   *    specify views located under
   *    application/apps/default/views/modules/modals, so if you need to
   *    create a new view to be called with this modal put it there. Do not
   *    include the trailing ".html".
   *
   * @param {Object} data
   *    (optional) Pass this in if you want to return the user to a
   *    different URL once the modal has rendered. You must format this
   *    object as such: {from: "from=" + URL} where URL is the url you
   *    want to return the user to.
   *
   * @param {Object} obj
   *    (optional) Use this option to pass in one or more of the following
   *    options:
   *        - cb_succ: {Function} A success callback. Invoked after the
   *          successful rendering of a modal dialogue. Takes no arguments.
   *          Default: no-op.
   *
   *        - cb_err: {Function} Callback error handler. Default: no-op.
   *
   *        - bg_mask_bool: {Boolean} Whether or not to use a mask between
   *          the modal and the page. Default: true.
   *
   *        - bg_mask_color: {String} Hex value for the background color of
   *          the modal dialogue. Default: '#fff'.
   *
   *        - bg_mask_opacity: {Number} Value between [0...1]. Default: 0.6
   *
   *        - class_name: {String} adds a class to the modal for greater
   *          selector specifity. Default: ""
   *
   *        - offset_x/y: {Number} Unsigned integer specifying the amount
   *          (in pixels) to shift the modal. Default: 0
   *
   *        - c_width/c_height: {String} The client width/height of the
   *          modal. Default: "auto"
   *
   * @example
   *    R29.modalR29.modal.ajax_modal('user/login',{}, {
   *      bg_mask_color: '#000',
   *      bg_mask_opacity: 0.75
   *    });
   *
   */
  ajax_modal: function (page_name, data, obj) {
    this.remove(); // close existing modals
    var data = data || {};
    var obj = obj || {};

    if(!page_name) { return; } // page_name is required

    // make sure user returns to this page - JS
    if (!this.test_object(data)) {
      data = {from: "from=" + encodeURIComponent(window.location.href)};
    };

    // set cb_err to obj param or default
    var cb_err = (typeof(obj.cb_err) !== undefined)? obj.cb_err : function(){};

    // set cb_succ to obj param or default
    var cb_succ = (typeof obj.cb_succ === 'function') ? obj.cb_succ :
                                                        function() {};

    // render modal with loader while waiting on content
    this.render(page_name, obj);

    // pass page_name into modal controller
    R29.api._aget('/modal', {page: page_name, data: data}, function (r) {
      R29.modal.ajax_content(r.result.html, obj);
      cb_succ();
    }, cb_err, false, true);
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

    if(!obj.is_inline && spinner) {
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

R29.poll = {

  widget: function (id, share) { //this needs to use API to get poll then fill in the poll stuff
    R29.api._aget('/vote/' + id, { id: id }, function (data){ //draw the initial poll
    $('#votingwidget' + id).append(
      '<style type="text/css">' +
          data.result.css +
       '</style>' +
       '<div class="voting_container">' +
        '<div class="voting_header">' +
          '<h3 class="poll_title">' + data.result.title + '</h3>' +
          '<p class="poll_description">' + data.result.description + '</p>' +
        '</div>' +
        '<div class="poll_body">' +
        '<ul>' +
        '</ul>' +
        '</div>'
        );

    var len; //setting up the options loop
    len = data.result.options.length;
    options = data.result.options;

    if(len == 0){
      $('.poll_body').append('<div class="poll_body"><p>There are no options</p></div>');
    }
    for(i = 0; i < len; i++) { //start options loop
      option = options[i];
      $('.poll_body ul').append(
        '<li class="option_container option' + option.id + '">' +
            '<h3 class="option_title">' + option.title + '</h3>' +
            '<div class="option_description">' + option.description + '</div>' +
            '<div class="option_content" onclick="R29.poll.vote(' + option.id + ',1,' + share + ');">' + option.content + '</div>' +
            '<div class="option_votes">' +
              '<div id="voteup' + option.id + '" class="voteup" onclick="R29.poll.vote(' + option.id + ',1,' + share + ');"><p>Vote</p></div>' +

              '<div id="votedown' + option.id + '"class="votedown" onclick="R29.poll.vote(' + option.id + ',-1);"><p>Vote</p></div>' +
            '</div>' +
            '<div class="total_votes">' + option.total_votes + '<span class="text"> votes</span></div>' +

          '</li>'
      );

      if (option.voted == true){ //if current user has voted, show them the after vote thing
        R29.poll.after(option.id);
        R29.poll.share();
      }

    } //end options loop

    });
  },


  vote: function ( option_id, direction, share, cb, cb_err) {
    R29.api._aget('/user/me', {}, function (data) {
      if(!data.result.logged_in) {
        R29.modal.ajax_modal('user/login',{from: window.location.href});
      } else {
        R29.api._apost('/vote', { option_id: option_id, direction: direction }, function (data){
          R29.poll.after(option_id);
          if (share){
            R29.poll.share();
          }
        });
      }
    });
  },

  share: function() {
    $('.option_description').after('<div style="padding:7px 10px 10px 10px;" class="facebook" data-font="arial"></div>');
    //FB.XFBML.parse();

    $(".option_description").after('<a  style="padding:10px;" href="https://twitter.com/share" data-size="medium" class="twitter" data-count="none">Tweet</a>');
    $.ajax({ url: 'http://platform.twitter.com/widgets.js', dataType: 'script', cache:true});
  },

  after: function(option_id){
    $('.voting_header').addClass('voted');
    $('.option_votes').hide();
    $('.option' + option_id).removeClass('option_container').addClass('chosen_one');
    $('.option_container').hide('fast');
    $('.total_votes').addClass('voted_count');
  }

};

/********************************************
┈┈┈┈┈┈┈┈┈┈┈┈╲┈┈╱┈┈┈┈┈┈┈┈┈┈┈┈
┈┈┈┈┈┈╭┓┏╮▕▔▔▔▔▔▔▏╭┓┏╮┈┈┈┈┈┈
┈┈┈┈┈┈┃┗┻┫▕▕▔▏▕▔▏▏┣┻┛┃┈┈┈┈┈┈
┈┈┈┈┈┈╰┳┳╯┏┏┳┳┳┳┓┓╰┳┳╯┈┈┈┈┈┈
┈┈┈┈┈┈┈┣┫┈┃┗┻┻┻┻┛┃┈┣┫┈┈┈┈┈┈┈
┈┈┈┈┈┈┈┣╰┳╋━━━━━━╋┳╯┫┈┈┈┈┈┈┈
┈┈┈┈┈┈┈╰┻┻┫┈┏━━┓┈┣┻┻╯┈┈┈┈┈┈┈
┈┈┈┈┈┈┈┈┈┈┃┈┃┈♡┃┈┃┈┈┈┈┈┈┈┈┈┈
┈┈┈┈┈┈ INSTAGRAM WIDGES YAY ┈┈┈┈┈┈┈
********************************************/
R29.widgets = {instagram:{}};

R29.widgets.instagram.init = function() {

  function R29_widgets_instagram (id, $container) {

    this.submissions  = [];
    this.$container   = $container;
    this.id           = id;

    this.fetch_page   = 0;
    this.limit        = 25;

    this.page          = 0; //Page the user is viewing
    this.page_buffer   = 5;
    this.fetched_items = 0; //The number of fetched items.

    this.next        = function() {

      if (this.page + this.page_buffer > this.items_loaded) {
        this.fetch();
      }

      if (this.page >= this.fetched_items) {
        //OH NOES OUT OF THINGS TO SHOW
      }

      this.page++;

      //Scroll right and show more items.
    }

    this.previous = function() {
      //Scroll left some.
    }

    this.fetch = function () {

      var _this = this;

      var limit  = _this.limit;
      var offset = _this.fetch_page++ * limit;

      R29.api._get('/widgets/instagram/submissions/' + id, {limit: limit, offset:offset}, function (dataArray){

        for(var i=0; i < dataArray.result.length; i++) {

          var item = dataArray.result[i];
          console.log(item);
          _this.$slide_container.append(
            '<img class="submission" src="' + item.image.standard + '">'
          );

          item.displayed = false;
          _this.submissions.push(item);
          _this.fetched_items ++;

        }

      });

    }

    this.render = function () {

      var _this = this;

      $container.addClass('instagram-widget-container');

      R29.api._get('/widgets/instagram/details/' + id, {}, function (data){ //getting the widge

        _this.$container.append(
          '<div class="details"><h1>'  + data.result.title + '</h1>' +
            '<h2>#' + data.result.hashtag + '</h2>' +
            '<p>'   + data.result.description + '</p>' +
          '</div>' +
          '<div class="next"></div>' +
          '<div class="submission-container"><div class="slides"></div></div>' +
          '<div class="prev"></div>'
        );

        _this.$slide_container = $($container.find('div.slides')[0]);

      });

    }

    this.render();
    this.fetch();

  };


  $('div[data-instagram-widget-id]').each(function(){
    var $container = $(this);
    var id         = parseInt($container.attr('data-instagram-widget-id'), 10);
    var widget     = new R29_widgets_instagram(id, $container);
  });

}; // R29.widgets.instagram.init();


