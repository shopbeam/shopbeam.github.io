this["JST"] = this["JST"] || {};

this["JST"]["admin-status"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div class="header clearfix">\n<div class="user clearfix">\n<div class="avatar">\n<a href="' +((__t = ( purl )) == null ? '' : __t) +'">\n' +((__t = ( avatar )) == null ? '' : __t) +'\n</a>\n</div>\n<div class="info">\n<div class="name">\n<a href="' +((__t = ( purl )) == null ? '' : __t) +'">\n' +((__t = ( user )) == null ? '' : __t) +'\n</a>\n</div>\n<div class="via">\nvia <span class="network">' +((__t = ( network )) == null ? '' : __t) +'</span>\n</div>\n<div class="hashtag">\n#' +((__t = ( hashtag )) == null ? '' : __t) +'\n</div>\n</div>\n</div>\n<i class="icon-' +((__t = ( network )) == null ? '' : __t) +'">\n</i>\n</div>\n<div class="media">\n<img class="img" src="' +((__t = ( image )) == null ? '' : __t) +'">\n</div>\n'; if ("" != content) { ;__p += '\n<div class="content">\n' +((__t = ( content )) == null ? '' : __t) +'\n</div>\n'; } ;__p += '\n<div class="meta clearfix">\n<div class="time">\n' +((__t = ( time )) == null ? '' : __t) +'\n</div>\n<div class="btn delete">\n<i class="icon-trash"></i> Delete\n</div>\n</div>\n<div class="delete-confirm clearfix">\nAre you sure you want to delete this status?\n<div class="buttons">\n<div class="btn cancel">\n<i class="icon-ban-circle"></i> Cancel\n</div>\n<div class="btn confirm">\n<i class="icon-ok"></i> Confirm\n</div>\n</div>\n</div>';}return __p};

this["JST"]["follow-twitter"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div class="clearfix">\n<div class="avatar">\n<a href="' +((__t = ( url )) == null ? '' : __t) +'">\n' +((__t = ( img )) == null ? '' : __t) +'\n</a>\n</div>\n<div class="social">\n<a href="' +((__t = ( url )) == null ? '' : __t) +'">\n<h3>' +((__t = ( name )) == null ? '' : __t) +'</h3>\n</a>\n<h4>#' +((__t = ( hashtag )) == null ? '' : __t) +'</h4>\n'; if (twittername != "" && twittername !== null) { ;__p += '\n<div>\n<a href="https://twitter.com/' +((__t = ( twittername )) == null ? '' : __t) +'" class="twitter-follow-button" data-show-count="false" data-lang="en">Follow @' +((__t = ( twittername )) == null ? '' : __t) +'</a>\n</div>\n'; } ;__p += '\n'; if (facebookurl != "" && facebookurl !== null) { ;__p += '\n<div class="fb-like" data-href="' +((__t = ( facebookurl )) == null ? '' : __t) +'" data-colorscheme="light" data-layout="button_count" data-action="like" data-show-faces="false" data-send="false"></div>\n'; } ;__p += '\n'; if (instagramacct != "" && instagramacct !== null) { ;__p += '\n<div>\n<a href="http://instagram.com/' +((__t = ( instagramacct )) == null ? '' : __t) +'?ref=badge" target="_blank" class="ig-b- ig-b-v-24 instagram-btn"><img src="//badges.instagram.com/static/images/ig-badge-view-24.png" alt="Instagram" /></a>\n</div>\n'; } ;__p += '\n</div>\n</div>';}return __p};

this["JST"]["personality"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class="profile">\n<div class="avatar">\n' +((__t = ( img )) == null ? '' : __t) +'\n</div>\n</div>';}return __p};

this["JST"]["status"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div class="header clearfix">\n'; if ("rss" !== network) { ;__p += '\n<div class="user clearfix">\n<div class="avatar">\n<a target="_blank" href="' +((__t = ( purl )) == null ? '' : __t) +'" class="bravolebrity-link">\n' +((__t = ( avatar )) == null ? '' : __t) +'\n</a>\n</div>\n<div class="info">\n<div class="name">\n<a target="_blank" href="' +((__t = ( purl )) == null ? '' : __t) +'" class="bravolebrity-link">\n' +((__t = ( user )) == null ? '' : __t) +'\n</a>\n</div>\n<div class="via">\nvia <span class="network">' +((__t = ( network )) == null ? '' : __t) +'</span>\n</div>\n'; if (follow) { ;__p += '\n<div class="follow">\n'; if ('twitter' === network) { ;__p += '\n<a href="https://twitter.com/' +((__t = ( username )) == null ? '' : __t) +'" target="_blank" class="twitter-btn">Follow @' +((__t = ( username )) == null ? '' : __t) +'</a>\n'; } else if ('facebook' === network) { ;__p += '\n<a href="' +((__t = ( username )) == null ? '' : __t) +'" target="_blank" class="facebook-btn">Like on Facebook</a>\n'; } else if ('instagram' === network) { ;__p += '\n<a href="http://instagram.com/' +((__t = ( username )) == null ? '' : __t) +'?ref=badge" target="_blank" class="ig-b- ig-b-v-24 instagram-btn"><img src="//badges.instagram.com/static/images/ig-badge-view-24.png" alt="Instagram" /></a>\n'; } ;__p += '\n</div>\n'; } ;__p += '\n</div>\n</div>\n<i class="icon-' +((__t = ( network )) == null ? '' : __t) +'">\n</i>\n'; } else { ;__p += '\n<h3>' +((__t = ( title )) == null ? '' : __t) +'</h3>\n'; } ;__p += '\n</div>\n'; if ("" != content) { ;__p += '\n<div class="content">\n' +((__t = ( content )) == null ? '' : __t) +'\n</div>\n'; } ;__p += '\n<div class="meta clearfix">\n<div class="time">\n' +((__t = ( timeago )) == null ? '' : __t) +'\n</div>\n<div class="social">\n'; if ('twitter' === network) { ;__p += '\n<div>\n<a href="https://twitter.com/intent/tweet?in_reply_to=' +((__t = ( id )) == null ? '' : __t) +'" class="twitter-reply">\n<i class="icon-reply"></i>Reply\n</a>\n</div>\n<div>\n<a href="https://twitter.com/intent/retweet?tweet_id=' +((__t = ( id )) == null ? '' : __t) +'" class="twitter-retweet">\n<i class="icon-retweet"></i>Retweet\n</a>\n</div>\n<div>\n<a href="https://twitter.com/intent/favorite?tweet_id=' +((__t = ( id )) == null ? '' : __t) +'" class="twitter-fav">\n<i class="icon-star"></i>Favorite\n</a>\n</div>\n'; } else if ('facebook' === network) { ;__p += '\n<div>\n<a href="' +((__t = ( linkurl )) == null ? '' : __t) +'" target="_blank">\n<i class="icon-thumbs-up"></i><span class="likes">' +((__t = ( likes )) == null ? '' : __t) +'</span>\n</a>\n</div>\n<div>\n<a href="' +((__t = ( linkurl )) == null ? '' : __t) +'" target="_blank">\n<i class="icon-comments"></i><span class="comments">' +((__t = ( comments )) == null ? '' : __t) +'</span>\n</a>\n</div>\n'; } else if ('instagram' === network) { ;__p += '\n<div>\n<a href="' +((__t = ( linkurl )) == null ? '' : __t) +'" target="_blank">\n<i class="icon-heart"></i><span class="likes">' +((__t = ( likes )) == null ? '' : __t) +'</span>\n</a>\n</div>\n<div>\n<a href="' +((__t = ( linkurl )) == null ? '' : __t) +'" target="_blank">\n<i class="icon-comments"></i><span class="comments">' +((__t = ( comments )) == null ? '' : __t) +'</span>\n</a>\n</div>\n'; } ;__p += '\n</div>\n</div>';}return __p};