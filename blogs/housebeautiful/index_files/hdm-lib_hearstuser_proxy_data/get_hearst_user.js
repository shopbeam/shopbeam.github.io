// no session
var hearst_user = {"initial_login":1};

// default session callback
if (typeof $h != "undefined") {
    if (typeof $h.session != "undefined") {
        if (typeof $h.session.callback != "undefined") {
			if (typeof $h.session.callback.run == "function") {
				$h.session.callback.run(hearst_user);
			}
        }
    }
}