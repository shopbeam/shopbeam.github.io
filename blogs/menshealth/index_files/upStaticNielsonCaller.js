
  (function () {
    var d = new Image(1, 1);
    d.onerror = d.onload = function () {
      d.onerror = d.onload = null;
    };
    d.src = ["//secure-us.imrworldwide.com/cgi-bin/m?ci=us-603648h&cg=0&cc=1&si=", escape(window.location.href), "&rp=", escape(document.referrer), "&ts=compact&rnd=", (new Date()).getTime()].join('');
  })();
