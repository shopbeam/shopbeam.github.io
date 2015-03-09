function Nielsen_Event()
{
	var d = new Image(1, 1);
	d.onerror = d.onload = function () { d.onerror = d.onload = null; };
	d.src = ["//secure-us.imrworldwide.com/cgi-bin/m?ci=us-204353h&cg=0&cc=1&si=",escape(window.location.href), "&rp=", escape(document.referrer),
	"&ts=compact&c0=usergen,1&rnd=", (new Date()).getTime()].join('')
};