jQuery(document).ready(function () {

    jQuery("#pi-fb-oauth-error-dialog").dialog({
        autoOpen: false,
        width: 200,
        minHeight: 100,
        height: 'auto',
        modal: true,
        closeText: " ",
        draggable: false,
        close: function () {

        },
        open: function () {

        }
    });

    jQuery('.close-pi-fb-oauth-error-dialog').live('click',function() {
        jQuery( "#pi-fb-oauth-error-dialog" ).dialog( "close" );
    });

    FB.init({
        appId: PI_OAUTH_FACEBOOK_APP_ID,
        status: true,
        cookie: false,
        xfbml: true,
        oauth: true
    });
});

function showError(mess) {
	var error_callback = showErrorDialog; 
	if (typeof(PI_OAUTH_FACEBOOK_ERROR_CALLBACK) == "function") {
		error_callback = PI_OAUTH_FACEBOOK_ERROR_CALLBACK;
	}
	error_callback(mess);
}

function showErrorDialog(message) {
    if (typeof message == typeof undefined || message.length < 1) {
        message = 'Something goes wrong. Try to reload page';
    }

    /**
     * @TODO : draw modal dialog
     */
    var messageSpan = document.getElementById('pi-fb-oauth-error-dialog-message');
    if (messageSpan) {
        messageSpan.innerText = message;
    }

    var d = jQuery("#pi-fb-oauth-error-dialog");
    d.dialog("open");
    d.parent().css('text-align','center');
    return false;
}

function fb_start_login() {

    FB.login(function (response) {
        if (response.authResponse) {

            var fb_access_token = response.authResponse.accessToken;

            jQuery.post(document.location.href, {
                fb_access_token: fb_access_token,
                fb_ajax_login: 1
            }, function (data) {
                if ('status' in data) {
                    if ('OK' == data.status) {
                        // reload page after ajax login
                        location.reload();
                    } else {
                        var message = 'Error. Problem with FB login. Try to reload page and login again.'
                        if ('message' in data && data.message.length > 1) {
                            message = data.message;
                        }
                        showError(message);
                    }
                } else {
                    showError();
                }
            }, 'json');
        }
    },{
        scope: PI_OAUTH_FACEBOOK_SCOPE
    });

}
