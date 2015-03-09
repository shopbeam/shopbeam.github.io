(function () {
"use strict";

// global notifications
Backbone.Notifications = {};
_.extend(Backbone.Notifications, Backbone.Events);

var Personality = Backbone.Model.extend({

  defaults: function() {
    return {
      name: "",
      show: "",
      show_short: "",
      hashtag: "",
      twittername: "",
      facebookurl: "",
      instagramacct: "",
      url: "",
      img: ""
    };
  },

  initialize: function() {

  }

});

var PersonalityList = Backbone.Collection.extend({
  model: Personality
});

var PersonalityView = Backbone.View.extend({

  tagName:  "div",
  className:  "personality clearfix",
  template: JST.personality,

  events: {
      "mouseenter"  : "hover",
      "mouseleave"  : "unhover"
    },

  initialize: function() {

  },

  render: function() {
    var self = this;
    this.$el.html(self.template(self.model.attributes)).addClass('el ' + getSlug(this.model.attributes.show));
    return this;
  },

  hover: function( ){
    Backbone.Notifications.trigger('PersonalityHover', this);
  },

  unhover: function() {
    Backbone.Notifications.trigger('PersonalityUnhover', this.model);
  }

});

var TwitterPopoverView = Backbone.View.extend({

    tagName:  "div",
    className:  "popoverholder",

    initialize: function() {
      _.bindAll(this, "render");
      this.model = new Personality();
    },

    render: function() {
      var self = this;

      self.$el.popover({
        placement: self.getPopoverPlacement,
        html: true,
        trigger: 'manual',
        content: function() {
          var tw = new TwitterFollowView({
            url: self.model.attributes.url,
            img: self.model.attributes.img,
            name: self.model.attributes.name,
            show: self.model.attributes.show_short,
            hashtag: self.model.attributes.hashtag,
            twittername: self.model.attributes.twittername,
            facebookurl: self.model.attributes.facebookurl,
            instagramacct: self.model.attributes.instagramacct
          });
          return tw.render().$el.html();
        }
      });

      return this;
    },

    getPopoverPlacement: function(pop, dom_el) {
      return 'bottom';
    },

    showPopover: function(personality) {
      var redraw = (this.model !== personality.model) ? true : false;
      this.model = personality.model;
      this.position = personality.$el.children('.profile').offset();
      this.$el.css({
        top: this.position.top - getScrollOffsets().y,
        left: this.position.left
      });

      if (redraw) {
        $('.popover').attr('style', '');
        this.$el.popover('show');
      }

      twttr.widgets.load();
      FB.XFBML.parse();
      $('.popover .arrow').attr('style', ''); // reset arrow

      var pWidth = $('.popover').width(),
        $avatar = $('.popover').find('.avatar'),
        cWidth = (parseInt($('.popover').css('border-left-width'), 10) * 2) +
        (parseInt($('.popover-content').css('padding-left'), 10) * 2) +
        $avatar.width() + parseInt($avatar.css('margin-right'), 10) +
        $('.popover').find('.social').width(),
        i = 0;

      if ($('.popover').offset().left < 0) {

        while ($('.popover').offset().left < 0) {
          $('.popover').css({
            left: $('.popover').position().left + 10
          });
          i++;
        }

        $('.popover .arrow').css({
          marginLeft: parseInt($('.popover .arrow').css('margin-left'), 10) - (10 * i)
        });
      } else if (pWidth < cWidth) {
        var sWidth = $(window).width();

        $('.popover').css({
          width: cWidth
        });

        if ($('.popover').offset().left + cWidth > sWidth) {
          while ($('.popover').offset().left + cWidth > sWidth) {
            $('.popover').css({
              left: $('.popover').position().left - 10
            });
            i++;
          }
        }

        $('.popover .arrow').css({
          marginLeft: parseInt($('.popover .arrow').css('margin-left'), 10) + (10 * i)
        });
      }
    },

    hidePopover: function(model) {
      this.model = {};
      this.$el.popover('hide');
    }

  });

var TwitterFollowView = Backbone.View.extend({

  tagName:  "div",
  className:  "twitter",
  template: JST["follow-twitter"],

  initialize: function() {
    _.bindAll(this, "render");
  },

  render: function() {
    var self = this;
    this.$el.html(self.template(self.options));

    this.$el.find('.avatar > a').attr('href', self.options.url + '?cid=' + Drupal.settings.bravo_socialhub.cid);
    this.$el.find('.social > a').attr('href', self.options.url + '?cid=' + Drupal.settings.bravo_socialhub.cid);

    return this;
  }

});

var GridWidgetView = Backbone.View.extend({

  el: "#socialhub.personalities.widget",

  events: {
  },

  initialize: function(data) {

    _.bindAll(
      this,
      "render",
      "addPersonality"
      );

    var self = this;

    Backbone.Notifications.on('PersonalityHover', self.showPopup, this);
    Backbone.Notifications.on('PersonalityUnhover', self.hidePopup, this);
    Backbone.Notifications.on('InstagramClick', self.personalityInstagramClicked, this);

    this.personalities = new PersonalityList();
    this.personalities.on('add', this.addPersonality);

    this.main = $('#social-grid');

    this.count = this.options.count;

    this.$el.on('mouseenter', '.popover', function() {
      self.retainPopup();
    });
    this.$el.on('mouseleave', '.popover', function() {
      self.hidePopup();
    });

    this.render();
  },

  addPersonality: function(personality) {
    var item = Backbone.$('#' + personality.attributes.id);
    var view = new PersonalityView({
        model: personality,
        el: item
      });
  },

  render: function() {
    var self = this,
        gridPersonalities = Drupal.settings.bravo_socialhub.personalities;
        //personalityList = _.shuffle(Drupal.settings.bravo_socialhub.personalities),
        //featuredList = _.shuffle(Drupal.settings.bravo_socialhub.featured),
        //gridPersonalities = _.union(featuredList, personalityList);

    // set up popover
    self.popover = new TwitterPopoverView();
    self.$el.append(self.popover.render().$el);

    if (self.count > 0) {
      gridPersonalities = gridPersonalities.slice(0, self.count);
    }

    async.eachSeries(gridPersonalities, function(val, callback) {
      var personality = new Personality({
        id: val.nid,
        name: val.name,
        show: val.show_title,
        show_short: val.short_name,
        hashtag: val.hashtag,
        twittername: val.twitter,
        facebookurl: val.facebook,
        instagramacct: val.instagram,
        url: val.url,
        img: decodeURIComponent(val.head.replace(/\+/g, ' '))
      });
      self.personalities.push(personality);

      callback(null);
    }, function() {
      //callback
    });
  },

  showPopup: function(personality) {
    var self = this;

    clearTimeout(self.timer);
    self.timer = setTimeout(function() {
      self.popover.showPopover(personality);
    }, 500);
  },

  retainPopup: function() {
    var self = this;
    clearTimeout(self.timer);
  },

  hidePopup: function() {
    var self = this;

    clearTimeout(self.timer);
    self.timer = setTimeout(function() {
      self.popover.hidePopover();
    }, 300);
  },

  personalityInstagramClicked: function() {
    var user = this.popover.model.attributes;
    shubTrack(Drupal.settings.bravo_socialhub.cid, 'instagram', user.user, user.show_title, 'View on Instagram');
  }
});

function getScrollOffsets(w) {

    // Use the specified window or the current window if no argument
    w = w || window;

    // This works for all browsers except IE versions 8 and before
    if (w.pageXOffset !== null) return {
        x: w.pageXOffset,
        y:w.pageYOffset
    };

    // For IE (or any browser) in Standards mode
    var d = w.document;
    if (document.compatMode == "CSS1Compat") {
        return {
            x:d.documentElement.scrollLeft,
            y:d.documentElement.scrollTop
        };
    }

    // For browsers in Quirks mode
    return {
        x: d.body.scrollLeft,
        y: d.body.scrollTop
    };
}

(function($){
  $(document).ready(function() {

    window.fbAsyncInit = function() {
      FB.Event.subscribe('edge.create',
        function(href, widget) {
          var user = _.findWhere(Drupal.settings.bravo_socialhub.personalities, { facebook: href });
          shubTrack(Drupal.settings.bravo_socialhub.cid, 'facebook', user.user, user.show_title, 'Like on Facebook');
        }
      );
    };

    twttr.ready(function (twttr) {
      window.twttr.events.bind('follow', function (event) {
        var user = _.findWhere(Drupal.settings.bravo_socialhub.personalities, { twitter: event.data.screen_name });
        shubTrack(Drupal.settings.bravo_socialhub.cid, 'twitter', user.user, user.show_title, 'Twitter Follow');
      });
    });

    jq18(document).on('click', 'a', function(e) {
      if ($(this).hasClass('instagram-btn')) {
        Backbone.Notifications.trigger('InstagramClick');
      }
    });

    Backbone.$ = window.jq18;

    var gridWidget = new GridWidgetView({
        title: Drupal.settings.bravo_socialhub.title,
        count: Drupal.settings.bravo_socialhub.count
      });

  });
})(jQuery);

}());