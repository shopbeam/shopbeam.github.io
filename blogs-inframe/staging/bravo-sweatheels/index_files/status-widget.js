(function () {
"use strict";
  (function($){
    $(document).ready(function() {
      if ( $(window).width() >= 768 ) {
        $('#socialhub.statusupdates .statuses .content').ellipsis();
      }

      $('#socialhub.statusupdates .statuses a').click(function(e) {
        var $el = $(this).parents('.status');
        var $p = $(this).parent();
        var type = 'Link';
        if ($p.hasClass('media')) {
          type = 'Photo';
        } else if ( $p.hasClass('avatar') || $p.hasClass('name') ) {
          type = 'Bravolebrity';
        }
      });
    });
  })(jQuery);
}());