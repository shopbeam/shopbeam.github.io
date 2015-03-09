// $Id: bravo.omniture.js 17553 2014-05-05 14:45:02Z matthew.witherow@nbcuni.com $

var bravo = window.bravo || {};
bravo.omniture = (function() {
  var omniture = {};

  omniture.getUid = function() {
    var uid = null;
    if (window.jQuery.cookies) { uid = $.cookies.get('bravo_uid'); }
    return (uid !== null) ? uid : 0;
  }; // bravo.omniture.getUid()

  omniture.getUst = function(uid) {
    if (typeof uid == 'undefined') { uid = this.getUid(); }
    return uid ? 'authenticated' : 'anonymous';
  }; // bravo.omniture.getUst()

  omniture.trackEvent = function(tracking_key, identifier, position, topic, content_type, title, event) {
    s.linkTrackVars = 'pageName,prop3,prop26,prop27,prop28,prop29,events';
    s.linkTrackEvents = 'event16';
    s.prop26 = identifier;
    s.prop27 = position;
    s.prop28 = topic;
    s.prop29 = content_type + '|' + title;
    s.prop30 = event;
    s.events = 'event16';
    s.tl(this, "o", tracking_key);
  }; // bravo.omniture.trackEvent

  return omniture;
})(); // bravo.omniture
