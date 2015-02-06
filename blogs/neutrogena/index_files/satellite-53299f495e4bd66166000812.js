_satellite.pushBlockingScript(function(event, target, $variables){
  /***************************
 ________    ______     ___   ____  _____  
|_   __  | .' ___  |  .'   `.|_   \|_   _| 
  | |_ \_|/ .'   \_| /  .-.  \ |   \ | |   
  |  _| _ | |   ____ | |   | | | |\ \| |   
 _| |__/ |\ `.___]  |\  `-'  /_| |_\   |_  
|________| `._____.'  `.___.'|_____|\____|

***************************/
// Egon Region Setting
var egon = {
  regions: {
    // North America
    na: "60c6522c98abbf7e5d6255c8edb2fdc4cd794929",
    // Latin America
    la: "be279410627243bb1844bd64466eb6e65bb74b35",
    // APAC
    as: "8bafb5e4d04cc2ecd5312c0f0d38f286d20b96ea",
    // Europe
    eu: "70804a62afcb5d6ef2c8d4de160af335fea7a006"
  },
  de: {},
  pg: []
};
// md5 moved to global product hash data element for IE11 compatibility
// cleanStrUtil
window.cleanStrUtil=function(e){var t=e.split("(R)").join(" ").split("(TM)").join(" ");var n=t.replace(/\s{2,}/g," ").replace(/[^a-z|A-Z|0-9|&|\s]/g,"").toLowerCase();return n.trim()}

// Trim Method
if(typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, ''); 
  }
}

// Egon Property Mappings
function getEgonProperty() {
  var h, c, g, b, o, a = window.document.location.host + window.document.location.pathname,
    l = {},
      m = window._satellite,
        k = ["staging", "prod"];
  for (var f in m.dataElements) {
    h = m.getDataElement(f);
    if (!h) {
      continue
    }
    if (!h.id || !h.prod || !h.staging) {
      continue
    }
    for (g = 0; g < k.length; g++) {
      c = h[k[g]];
      for (b = 0; b < c.length; b++) {
        if (a.match(c[b])) {
          l.name = f;
          l.region = f.split("-")[0];
          l.id = h.id;
          l.load_scode = typeof h.load_scode != "undefined" ? h.load_scode : true;
          l.env = k[g];
          if (m.getVar("staging") == true || _satellite.configurationSettings.settings.isStaging == true) {
            l.env = "staging"
          }
          // array that contains preload rules to not fire on a property specific basis
          l.no_load = h.no_load || [];
          m.notify("Matched " + l.env + " property " + l.name, 1);
          return l
        }
      }
    }
  }
  return {};
}

var tmp = getEgonProperty();
for (var e in tmp) {
  egon[e] = tmp[e]
}

// make sure we have a property identified before continuing
if(egon.id && egon.name){
  // ensure the no_load is set
  if(!egon.no_load){
    egon.no_load = [];
  }

  // store all data elements in case we need them
  egon.de = _satellite.dataElements;

  // function that copies global settings from Egon to each property
  egon.copyGlobalSettings = function () {
    if(typeof _satellite != 'undefined'){
      // copy global data elements
      for (var b in this.de) {
        if (b.indexOf("global-") > -1) {
          var a = b.substring(7);
          if (!_satellite.dataElements[a]) {
            _satellite.dataElements[a] = this.de[b];
            _satellite.notify("Copied global data element " + a, 1);
          }
        }
      }
      // update DTM functionality
      (function(SL){
        var tools = SL.tools;
        for(var t in tools){
          // update SC engine settings
          if(tools[t].settings.engine=='sc'){
            // getS
            tools[t].getS = function(t, n){
              var e = window,
                  i = n && n.hostname || e.location.hostname,
                    r = this.concatWithToolVarBindings(n && n.setVars || this.varBindings),
                      a = n && n.addEvent || this.events,
                        o = this.getAccount(i),
                          s = window.s,
                            s2 = e.s_gi;
              if (!t) {
                t = s;
                if(!t && s2){
                  t = s2(o);
                }
              }
              this.isValidSCInstance(t) || (t = null);
              if (t !== null){
                for (var c in r)
                  t[c] = r[c];
              	return a.length > 0 && (t.events = a.join(",")), t
              } else {
                return t;
              }
            };
          };
        };
        // loadScript fix
        SL.loadScript = function(c, a) {
          var b = document.createElement("script");
          b.type = "text/javascript";
          if(a && typeof a=='function'){
            if (b.readyState) {
              b.onreadystatechange = function() {
                if (b.readyState === "loaded" || b.readyState === "complete") {
                  b.onreadystatechange = null;
                  a()
                }
              }
            } else {
              b.onload = function() {
                a()
              }
            }
          }
          b.src = c;
          document.getElementsByTagName("head")[0].appendChild(b)
        };
        SL.replace = function(str, elm, evt) {
          if (typeof str !== 'string') return str
          return str
            .replace(/%(.*?)%/g, function(m, variable){
              var val = SL.getVar(variable, elm, evt)
              if (val == null)
                return ""
              else
                val = val.toString();
                return val.indexOf('D=')==0 || val=='errorPage'?val:val.toLowerCase();
            })
        }
      })(_satellite);
    }
    // older IE browsers don't obey the law of the order of operations,
    // so we have to hack it with a timer that updates every millisecond
    // to verify that _satellite has been loaded
    else {
      if(!window._egon.timer){
        window._egon.timer = setInterval(function(){
          if(typeof _satellite != 'undefined'){
            window._egon.copyGlobalSettings();
            clearInterval(window._egon.timer);
          }
        },1);
      }
    }
  };

  // create Egon on the global scope
  window._egon = egon;

  // create the site specific user cookie
  var uid = _satellite.readCookie(_egon.name + "_uid");
  if (!uid || uid == "") {
    var d = new Date(),
        n = d.getTime(),
        uid = d.getTime() + Math.random();
    _satellite.setCookie(_egon.name + "_uid", uid, n + 1825);
    _satellite.notify("New user identified with UID " + uid, 1)
  }

  // load s_code
  if (egon.load_scode) {
    _satellite.notify("Loading global s_code", 1);
    _satellite.track("load_scode")
  }

  // execute the preload direct call rules
  for (var i = 0; i < _satellite.directCallRules.length; i++) {
    var d = _satellite.directCallRules[i];
    if (d.name.indexOf("preload-") == 0) {
      var doPreload = true;
      for(var z=0; z<egon.no_load.length; z++){
        if(egon.no_load[z]==d.name){
          doPreload = false;
        }
      }
      if(doPreload == true){
        _satellite.track(d.name)
      }
    }
  }

  // load the property
  _satellite.notify("Loading " + egon.env + " environment code", 1);
  window._slimer = _satellite;
  
  // wipe the _satellite object 
  try {
    delete _satellite;
  }
  catch(e){
    _satellite = undefined;
  }

  // add the new DTM code to the page
  document.write('<script type="text/javascript" src="//assets.adobedtm.com/' + egon.regions[egon.region] + "/satelliteLib-" + egon.id + (egon.env == "staging" ? "-staging" : "") + '.js"><\/script>');
  document.write('<scr'+'ipt type="text/javascript">window._egon.copyGlobalSettings();<\/script>');
} else {
  _satellite.notify("Egon did not detect an environment", 1)
};
});
