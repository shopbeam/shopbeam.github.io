define([], function() {

  /**
   * Test whether browser support placeholder
   * */
  function nativeSupport(){
    var _i = document.createElement('input');
    return 'placeholder' in _i;
  }

  /**
   * Set up placeholder for old browsers, like IE 8, 9
   * */
  function _init(){
    if (nativeSupport()){
      return ;
    }

    $("input[data-placeholder]").each(function() {
      if ($(this).val().length==0) {
        $(this).val($(this).attr("data-placeholder")).addClass("disabled");
      }
      $(this).focus(function() {
          if ($(this).hasClass('disabled') || $(this).val() == $(this).attr("data-placeholder")) {
            $(this).val("").removeClass("disabled");
          }
      }).blur(function() {
          if ($(this).val().length==0) {
            $(this).val($(this).attr("data-placeholder")).addClass("disabled");
          }
      });
    });
  }

  return {
    init: _init
  };
});