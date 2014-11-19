(function(window, undefined) {

  window.shubTrack = function(key, network, user, show_title, event_name) {
    s.linkTrackVars="prop38,prop39,prop40,prop41";
    s.linkTrackEvents="event63";
    s.prop38=network;
    s.prop39=user;
    s.prop40=show_title;
    s.prop41=event_name;
    s.events="event63";
    s.tl(this, "o", key + " - " + user);
  };

  window.shubFilter = function(key) {
    s.linkTrackEvents="event63";
    s.prop41="Show Change";
    s.tl(this, "o", key);
  };

  window.shubRefreshAd = function(nid) {
    if (typeof nid != 'undefined') {
      Drupal.settings.bravo_socialhub.show_page = _.findWhere(Drupal.settings.bravo_socialhub.shows, { nid: nid.toString() });
      Drupal.settings.bravo_socialhub.show_page.title_clean = Drupal.settings.bravo_socialhub.show_page.title.replace(/ /g,"").toLowerCase().substr(0,30);
      Drupal.settings.bravo_ad.sect = Drupal.settings.bravo_socialhub.show_page.title_clean;
      Drupal.settings.bravo_omniture.prop3 = "Social";
      Drupal.settings.bravo_omniture.prop10 = Drupal.settings.bravo_socialhub.show_page.title;
      bravo.ad.refresh();
    } else {
      Drupal.settings.bravo_ad.sect = "";
      Drupal.settings.bravo_omniture.prop10 = "";
      bravo.ad.refresh();
    }
  };

})(window);