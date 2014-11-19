
define(['jquery'], function ($) {

  /**
   * Automatically set iframe with class auto-height to it's content height.
   *
   * Note the <iframe class="auto-height"></iframe> must not has "height=xxx" set, or this
   * auto height will not work.
   *
   * Also not work for iframe to other domain.
   * */
  function _autoHeight(){
    $('iframe.auto-height').each(function(){
      try{
        this.height = this.contentWindow.document.body.scrollHeight;
      } catch (err){ // try to access iframe in different domain
        console.error(err);
      }

    });
  }

  function _init(){
    _autoHeight();
  }

  return {
    init: _init
  };
});