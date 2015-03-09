// $Id: bravo.ad.js 17372 2014-02-26 21:10:07Z matthew.witherow@nbcuni.com $

var bravo = window.bravo || {};
bravo.ad = (function() {
  var ad = {},
    DART_BASE = 'http://iv.doubleclick.net',
    DART_CMD = 'N2620/adj',
    DART_SITE_KEYNAME = 'nbcu.bravo',
    zone = '',
    kvs = {
      "site": "bravo",
      "sect": "",
      "sub": "",
      "sub2": "",
      "pageid": "",
      "season": "",
      "aff": "",
      "daypart": "primetime",
      "genre": "reality",
      "dcopt": "ist",
      "mtfInline": "true",
      "sz": "",
      "pos": "",
      "tile": "",
      "ord": Math.ceil(1 + 1E12 * Math.random())
    },
    excludes = [],
    FS = '/', SC = ';', EQ = '=', DA = '-', US = '_';

  function getDartUrl() {
    var dartUrl = '',
      url = [DART_BASE, DART_CMD, DART_SITE_KEYNAME],
      params = [zone];

    for (var k in kvs) {
      params.push(k + EQ + kvs[k]);
    }
    if (typeof top.__nbcudigitaladops_dtparams != 'undefined') {
      params.splice(11, 0, top.__nbcudigitaladops_dtparams.substr(top.__nbcudigitaladops_dtparams.length - 1, 1) == SC ? top.__nbcudigitaladops_dtparams.substring(0, top.__nbcudigitaladops_dtparams.length - 1) : top.__nbcudigitaladops_dtparams);
    }
    if ('dcopt' in kvs) {
      delete kvs['dcopt'];
    }
    for (var e in excludes) {
      // inserts excludes at a specific index *before* ord
      params.splice(13, 0, '!c' + EQ + excludes[e]);
    }
    url.push(params.join(SC));
    dartUrl = url.join(FS);
    return dartUrl;
  }

  function getDartTag() {
    return '<script type="text/javascript" src="' + getDartUrl() + '"><\/script>';
  }

  function writeDartTag() {
    document.write(getDartTag());
  }

  ad.init = function() {
    if (typeof Drupal.settings.bravo_ad != 'undefined') {
      $.extend(kvs, Drupal.settings.bravo_ad);
      zone = kvs['sect'] ? kvs['sect'] + (kvs['sub'] ? '_' + kvs['sub'] : '') : '';
      excludes = [kvs['site'], kvs['sect']];
    }
  }; // bravo.ad.init()

  ad.load = function(sz, tile, pos) {
    $.extend(kvs, {"sz": sz, "tile": tile, "pos": pos});
    writeDartTag(sz, pos, tile);
  }; // bravo.ad.load()

  ad.refresh = function() {
    var ads = $('.ad'),
        randNo = Math.ceil(1 + 1E12 * Math.random());

    $.each(ads, function(index, value) {
      var ad_str = $(this).attr('id');
      var ad_array = ad_str.split(DA);
      $.extend(kvs, {"sz": ad_array[1].replace('_', ','), "tile": ad_array[2], "pos": ad_array[3], "ord": randNo});
      if (typeof Drupal.settings.bravo_ad != 'undefined') {
        $.extend(kvs, Drupal.settings.bravo_ad);
      }
      $(this).adRefresher('/sites/all/modules/custom/bravo_ad/ads.html?' + $.param(kvs), $(this).attr('id') + '_iframe').refreshAll();
    });

    // fire Omniture page view
    // mw TODO: refactor. Right now this only accounts for props 3 and 10
    if (typeof s !== 'undefined' && s.t) {
      if (typeof Drupal.settings.bravo_omniture != 'undefined') {
        s.prop3 = Drupal.settings.bravo_omniture.prop3;
        s.prop10 = Drupal.settings.bravo_omniture.prop10;
      }
      s.t();
    }
  }; // bravo.ad.refresh();

  ad.refreshThis = function(ad) {
      var ad_str = $(ad).attr('id'),
          ad_array = ad_str.split(DA),
          randNo = Math.ceil(1 + 1E12 * Math.random());

      $.extend(kvs, {"sz": ad_array[1].replace('_', ','), "tile": ad_array[2], "pos": ad_array[3], "ord": randNo});
      if (typeof Drupal.settings.bravo_ad != 'undefined') {
        $.extend(kvs, Drupal.settings.bravo_ad);
      }
      $(ad).adRefresher('/sites/all/modules/custom/bravo_ad/ads.html?' + $.param(kvs), $(ad).attr('id') + '_iframe').refreshAll();
  }; // bravo.ad.refresh_this();

  ad.url = function(sz, tile, pos) {
    $.extend(kvs, {"sz": sz, "tile": tile, "pos": pos});
    return getDartUrl();
  }; // bravo.ad.url();

  return ad;
})(); // bravo.ad

$.fn.adRefresher = function (adPage, iframe_id) {
    var ads = this;
    this.adScripts = [];
    this.refreshedAds = [];
    this.adPage = adPage;
    this.iframe_id = iframe_id;
    this.each(function () {
        var currentAd = $(this);
        ads.adScripts[currentAd.attr('id')] = $(currentAd.children('script:first'));
    });

    this.refreshAll = function () {
        this.each(function () {
            ads.refreshAd($(this));
        });
    };

    this.refreshAd = function (ad, adPage) {
        ad = $(ad);

        if (!adPage) {
            adPage = this.adPage;
        }
        if ($.inArray(ad.attr('id'), this.refreshedAds) == -1) {
            var adScript = this.adScripts[ad.attr('id')];
            ad.children().remove();
            ad.html('<iframe class="adframe" id="' + this.iframe_id + '"scrolling="no" frameborder="0" src="' + adPage + '"></iframe>');
            $('#' + this.iframe_id).attr('src', adPage);

            this.refreshedAds.push(ad.attr('id'));
        } else {
            ad.children('iframe').attr('src', ad.children('iframe').attr('src'));
        }
    };
    return this;
};
