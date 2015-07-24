_satellite.pushAsyncScript(function(event, target, $variables){
  var _sf_async_config={};
/** CONFIGURATION START **/
_sf_async_config.uid = 15891;
_sf_async_config.domain = "menshealth.com"; /** CHANGE THIS **/
/** CONFIGURATION END **/
(function(){
  function loadChartbeat() {
    window._sf_endpt=(new Date()).getTime();
    var e = document.createElement("script");
    e.setAttribute("language", "javascript");
    e.setAttribute("type", "text/javascript");
    e.setAttribute('src', '//static.chartbeat.com/js/chartbeat.js');
    document.body.appendChild(e);
  }
  var oldonload = window.onload;
  window.onload = (typeof window.onload != "function") ?
     loadChartbeat : function() { oldonload(); loadChartbeat(); };
})();
});
