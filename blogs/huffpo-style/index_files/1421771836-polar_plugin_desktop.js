(function(){
  var compiledTemplate0 = '';
  var compiledTemplate1 = '';
  var compiledTemplate2 = '';
  var compiledTemplate3 = '';

  var get_polar_mn = function (platform, label) {
    for(var i = 0; i< polar_config.length; i++) {
      if ( polar_config[i].label == label) {
        return polar_config[i].id;
      }
    }
  }

  window.NATIVEADS = window.NATIVEADS || {};
  window.NATIVEADS.injectedAt = new Date().getTime();
  window.NATIVEADS.onReady = function(ads) {

  ads.setPropertyID("NA-HUFFPOST-11235841");
  ads.setSecondaryPageURL("/sample/publisher/sponsored.html");
  ads.logging.enable();

  var pad = function(value, digits) {
    var missing, padding;
    missing = digits - String(value).length;
    if (missing > 0) {
      padding = (new Array(missing + 1)).join('0');
    } else {
      padding = '';
    }
    return "" + padding + value;
  };

  var rightRailLocation = '#right_column>div:eq(1)';
  if (!$(rightRailLocation) ||  $(rightRailLocation).length == 0 ) {
    rightRailLocation = '#right_col>div:eq(1)';
  }
  var label0 = "Homepage- Right Rail Unit";
  ads.insertPreview({
    label: label0,
    unit: {"server":"ibw","id":get_polar_mn("desktop", label0),"mobile":false},
    location: rightRailLocation,
    template: compiledTemplate0,
    onRender: function($element) { },
    onFill: function(data) {
  var time_value = new Date(data.pubDate);
  if (time_value) {
    var month = pad(time_value.getMonth() + 1, 2);
    var day = pad(time_value.getDate(), 2);
    var year = time_value.getFullYear();
    var dateTime = month + '.' + day + '.' + year;
    data.pubDate = dateTime;
  }
},
    onError: function(error) { }
  });

  ads.injectCSS("/* info button */ span.mediavoice-button { float: right; display: inline-block; cursor: pointer; padding: 3px 6px; text-align: center; border-radius: 100px; color: #666666; line-height: 1; font-size: 11px; font-weight: bold; font-family: Georgia, Times, serif; background: #d9d9d9; }; /* info box */ .mediavoice-info-enduser { };", "head");


  var label1 = "Homepage- Left Rail Unit";
  ads.insertPreview({
    label: label1,
    unit: {"server":"ibw","id":get_polar_mn("desktop", label1),"mobile":false},
    location: "#the_blogs a:first",
    template: compiledTemplate1,
    onRender: function($element) { },
    onFill: function(data) {
  var time_value = new Date(data.pubDate);
  if (time_value) {
    var month = pad(time_value.getMonth() + 1, 2);
    var day = pad(time_value.getDate(), 2);
    var year = time_value.getFullYear();
    var dateTime = month + '.' + day + '.' + year;
    data.pubDate = dateTime;
  }
},
    onError: function(error) { }
  });


  var label2 = "Homepage- Brand Blog Unit";
  ads.insertPreview({
    label: label2,
    unit: {"server":"ibw","id":get_polar_mn("desktop", label2),"mobile":false},
    location: "#hp_featured_posts_page_1 .entry:eq(1)",
    template: compiledTemplate2,
    onRender: function($element) { },
    onFill: function(data) {
  var time_value = new Date(data.pubDate);
  if (time_value) {
    var month = pad(time_value.getMonth() + 1, 2);
    var day = pad(time_value.getDate(), 2);
    var year = time_value.getFullYear();
    var dateTime = month + '.' + day + '.' + year;
    data.pubDate = dateTime;
  }
  var authorMatch = data.author.name.split('|||');
      if (authorMatch && authorMatch.length >= 3){
        data.author.name = authorMatch[0];
        data.author.bio = authorMatch[1];
        data.author.image = {};
        data.author.image.href = authorMatch[2];
  }
},
    onError: function(error) { }
  });


  var label3 = "Article Page- Right Rail Unit";


  ads.insertPreview({
    label: label3 + " DESKTOP",
    unit: {"server":"ibw","id":get_polar_mn("desktop", label3),"mobile":false},
    location: "#sidebar_right>div:eq(2)",
    template: compiledTemplate3,
    onRender: function($element) { },
    onFill: function(data) {
  var time_value = new Date(data.pubDate);
  if (time_value) {
    var month = pad(time_value.getMonth() + 1, 2);
    var day = pad(time_value.getDate(), 2);
    var year = time_value.getFullYear();
    var dateTime = month + '.' + day + '.' + year;
    data.pubDate = dateTime;
  }
},
    onError: function(error) { }
  });


  ads.insertPreview({
    label: label3 + " PHOENIX",
    unit: {"server":"ibw","id":get_polar_mn("desktop", label3),"mobile":false},
    location: ".most-popular",
    template: compiledTemplate3,
    onRender: function($element) { },
    onFill: function(data) {
  var time_value = new Date(data.pubDate);
  if (time_value) {
    var month = pad(time_value.getMonth() + 1, 2);
    var day = pad(time_value.getDate(), 2);
    var year = time_value.getFullYear();
    var dateTime = month + '.' + day + '.' + year;
    data.pubDate = dateTime;
  }
},
    onError: function(error) { }
  });
  
  ads.configureSecondaryPage({
    track: function() {
      if (window.tacProp && window.tacProp.tags && window.tacProp.tags.indexOf('@sponsor:') != -1) {
        return "inbound";
      }
    }
  });


};


  
  
  compiledTemplate0 = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"preview\" style=\"\">\n  <div class=\"commercial_title commercial_title_parents\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.sponsor),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n    <ul id=\"carousel_XX\" class=\"carousel\" style=\"width:300px;\">\n      <li class=\"unbordered jcarousel-item-1\" style=\"display: inline-block; float: left;\">\n        <div class=\"preview_entry preview_no_border\" id=\"entry_XX\">\n          <div class=\"preview_clear\"></div>\n          <div class=\"preview_image_wrapper\">\n            <a href=\"";
  if (stack2 = helpers.link) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.link; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"preview_a\">\n              <img width=\"282\" height=\"206\" alt=\"\" src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.image),stack1 == null || stack1 === false ? stack1 : stack1.href)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n            </a>\n          </div>\n          <span class=\"preview_h4\"><a href=\"";
  if (stack2 = helpers.link) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.link; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"preview_a\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></span>\n            <ul class=\"preview_meta_links\">\n              <li class=\"first\"><a class=\"preview_a\" onclick=\"return QV.pop(this);\" href=\"";
  if (stack2 = helpers.link) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.link; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">Quick Read</a> |</li>\n              <li><a class=\"preview_a\" href=\"";
  if (stack2 = helpers.link) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.link; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "#comments\">Comments <span id=\"comment_count_XX\" class=\"comment_count\"></span></a> |</li>\n              <li class=\"last\"><span class=\"preview_a\">";
  if (stack2 = helpers.pubDate) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.pubDate; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></li>\n          </ul>\n        </div>\n      </li>\n    </ul>\n  <div style=\"clear:both\"></div>\n</div>";
  return buffer;
  };

  compiledTemplate1 = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"preview\" style=\"\">\n  <div class=\"commercial_title commercial_title_parents\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.sponsor),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n    <ul id=\"carousel_XX\" class=\"carousel\" style=\"width:300px;\">\n      <li class=\"unbordered jcarousel-item-1\" style=\"display: inline-block; float: left;\">\n        <div class=\"preview_entry preview_no_border\" id=\"entry_XX\">\n          <div class=\"preview_clear\"></div>\n          <div class=\"preview_image_wrapper\">\n            <a href=\"";
  if (stack2 = helpers.link) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.link; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"preview_a\">\n              <img width=\"282\" height=\"206\" alt=\"\" src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.image),stack1 == null || stack1 === false ? stack1 : stack1.href)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n            </a>\n          </div>\n          <span class=\"preview_h4\"><a href=\"";
  if (stack2 = helpers.link) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.link; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"preview_a\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></span>\n            <ul class=\"preview_meta_links\">\n              <li class=\"first\"><a class=\"preview_a\" onclick=\"return QV.pop(this);\" href=\"";
  if (stack2 = helpers.link) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.link; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">Quick Read</a> |</li>\n              <li><a class=\"preview_a\" href=\"";
  if (stack2 = helpers.link) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.link; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "#comments\">Comments <span id=\"comment_count_XX\" class=\"comment_count\"></span></a> |</li>\n              <li class=\"last\"><span class=\"preview_a\">";
  if (stack2 = helpers.pubDate) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.pubDate; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></li>\n          </ul>\n        </div>\n      </li>\n    </ul>\n  <div style=\"clear:both\"></div>\n</div>";
  return buffer;
  };

  compiledTemplate2 = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n              <div class=\"blogger_img\">            \n  	             <a href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.author),stack1 == null || stack1 === false ? stack1 : stack1.image)),stack1 == null || stack1 === false ? stack1 : stack1.href)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span id=\"blogger-headshot\" style=\"background-image: url("
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.author),stack1 == null || stack1 === false ? stack1 : stack1.image)),stack1 == null || stack1 === false ? stack1 : stack1.href)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ");\" class=\"unloaded-image\"></span></a>    \n              </div>   \n              ";
  return buffer;
  }

  buffer += "<div id=\"all_sponsored_posts_page_1_wrapper\" class=\"entry\">\n    <div id=\"all_sponsored_posts\">\n    <div class=\"preview\" style=\"\">\n          <div class=\"commercial_title commercial_title_technology\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.sponsor),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n            <ul id=\"carousel_XX\" class=\"carousel\" style=\"width:300px;\">\n              <li class=\"unbordered jcarousel-item-1\" style=\"display: inline-block; float: left;\">\n              <div id=\"blog_XX\" class=\"preview_blog_entry\" style=\"border-bottom: none; padding-bottom:0;\">\n              <div class=\"preview_clear\"></div>\n              <div style=\"width: 285px; margin-top: 5px;\" class=\"preview_entry_right\">\n                <span class=\"preview_h3\" style=\"line-height:18px !important;font-weight: bold;font-size: 16px;font-family: arial;color: #1A1A1A;\">\n                  <a class=\"preview_a\" href=\"";
  if (stack2 = helpers.link) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.link; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a>\n                </span>\n              </div>\n              <div class=\"image_wrapper relative\" style=\"width: 300px;\">\n                <a href=\"";
  if (stack2 = helpers.link) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.link; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n                  <img src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.image),stack1 == null || stack1 === false ? stack1 : stack1.href)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\"\" width=\"300px\" height=\"125px\">\n                </a>\n              <span class=\"absolute image-credit arial_11\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.image),stack1 == null || stack1 === false ? stack1 : stack1.credits)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n              </div>\n              <div style=\"clear: both;\"></div>\n              <p style=\"margin:2px 0;width:285px;\">";
  if (stack2 = helpers.summary) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.summary; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p>\n              </div>\n              </li>\n            </ul>\n            <div class=\"author_bottom_desc\" style=\"padding-top: 10px;\">\n              ";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.author),stack1 == null || stack1 === false ? stack1 : stack1.image)),stack1 == null || stack1 === false ? stack1 : stack1.href), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n              <div class=\"blogger_credit\">\n                 <p class=\"byline_timestamp blogger_name\">\n                 <a href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.author),stack1 == null || stack1 === false ? stack1 : stack1.image)),stack1 == null || stack1 === false ? stack1 : stack1.href)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.author),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n                 </p>\n              	<p class=\"author_teaser\" style=\"margin-left: 2px !important; float:left; width:234px;\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.author),stack1 == null || stack1 === false ? stack1 : stack1.bio)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>	\n\n              </div>          \n             </div>\n        <div style=\"clear:both\"></div>\n    </div>\n  </div>\n</div>";
  return buffer;
  };

  compiledTemplate3 = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"preview\" style=\"\">\n  <div class=\"commercial_title commercial_title_parents\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.sponsor),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n    <ul id=\"carousel_XX\" class=\"carousel\" style=\"width:300px;\">\n      <li class=\"unbordered jcarousel-item-1\" style=\"display: inline-block; float: left;\">\n        <div class=\"preview_entry preview_no_border\" id=\"entry_XX\">\n          <div class=\"preview_clear\"></div>\n          <div class=\"preview_image_wrapper\">\n            <a href=\"";
  if (stack2 = helpers.link) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.link; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"preview_a\">\n              <img width=\"282\" height=\"206\" alt=\"\" src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.image),stack1 == null || stack1 === false ? stack1 : stack1.href)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n            </a>\n          </div>\n          <span class=\"preview_h4\"><a href=\"";
  if (stack2 = helpers.link) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.link; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"preview_a\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></span>\n            <ul class=\"preview_meta_links\">\n              <li class=\"first\"><a class=\"preview_a\" onclick=\"return QV.pop(this);\" href=\"";
  if (stack2 = helpers.link) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.link; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">Quick Read</a> |</li>\n              <li><a class=\"preview_a\" href=\"";
  if (stack2 = helpers.link) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.link; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "#comments\">Comments <span id=\"comment_count_XX\" class=\"comment_count\"></span></a> |</li>\n              <li class=\"last\"><span class=\"preview_a\">";
  if (stack2 = helpers.pubDate) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.pubDate; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></li>\n          </ul>\n        </div>\n      </li>\n    </ul>\n  <div style=\"clear:both\"></div>\n</div>";
  return buffer;
  };




})();

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s);
  js.id = id; js.type = "text/javascript"; js.async = true;
  js.src = "http://plugin.mediavoice.com/plugin.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "nativeads-plugin");
