jQuery(document).ready(function ($) {
    var PiLoginHelper = {
        updateTips: function (t, ok) {
            this.tips.html(t);
            if (ok) {
                this.tips.removeClass("ui-message-error").addClass("ui-message-ok");
            } else {
                this.tips.removeClass("ui-message-ok").addClass("ui-message-error");
            }
            //setTimeout(function() {
            //PiLoginHelper.tips.removeClass( "ui-state-highlight", 1500 );
            //}, 1500 );
        }
    }

    $('#th_rh_name').val( '' );

    $("#sign-in-dialog").dialog({
        autoOpen: false,
        width: 420,
        minHeight: 100,
        height: 'auto',
        modal: true,
        closeText: "x",
        draggable: false,
        dialogClass: "PiLogin sign-in",
        resizable: false,
        buttons: [
            {
                text: "Sign In",
                id: "sign_in_btn",
                click: function () {
                    var name = $("#lPiLoginName"),
                        password = $("#lPiLoginPass");
                    PiLoginHelper.tips = $("#lPiLogin_Status");

                    var data = {
                        action: 'pilogin_login',
                        PiLoginPass: password.val(),
                        PiLoginName: name.val(),
                        PiLoginRemember: $("#lPiLoginRemember:checked").val()
                    };

                    $.post(the_ajax_script.ajaxurl, data, function (response) {
                        var resp = $.parseJSON(response);
                        if (resp.status == 'ok') {
                            PiLoginHelper.updateTips('success', true);
                            var rt = $('#redirect_to').val();
                            if (rt) location.href = rt;
                            else location.reload();
                        } else if (resp.status == 'error') {
                            PiLoginHelper.updateTips(resp.data);
                        }
                    });
                    return false;
                }
            }
        ],
        close: function () {
        },
        open: function () {
            $('.ui-button').removeClass('sign-up').removeClass('resetpass');
        }
    });

    $("#sign-up-dialog").dialog({
        autoOpen: false,
        height: 'auto',
        minHeight: 100,
        width: 280,
        modal: true,
        closeText: "x",
        draggable: false,
        dialogClass: "PiLogin sign-up",
        resizable: false,
        buttons: [
            {
                text: "Sign Up",
                id: "sign_up_btn",
                click: function () {
                    var name = $("#a_user_login"),
                        email = $("#a_email"),
                        password = $("#a_pass1"),
                        password2 = $("#a_pass2");
                    PiLoginHelper.tips = $("#rPiLogin_Status");

                    var data = {
                        action: 'pilogin_register',
                        pass1: password.val(),
                        pass2: password2.val(),
                        user_login: name.val(),
                        email: email.val(),
                        th_rh_name: $("#th_rh_name").val()
                    };
                    $.post(the_ajax_script.ajaxurl, data, function (response) {
                        var resp = $.parseJSON(response);
                        if (resp.status == 'ok') {
                            PiLoginHelper.updateTips('success', true);
                            location.reload();
                        } else if (resp.status == 'error') {
                            PiLoginHelper.updateTips(resp.data);
                        }
                    });
                    return false;
                }
            }
        ],
        close: function () {
        },
        open: function () {
            $('.ui-button').removeClass('resetpass').addClass('sign-up');
        }
    });

    $("#forgot-dialog").dialog({
        autoOpen: false,
        width: 400,
        height: 'auto',
        minHeight: 100,
        modal: true,
        closeText: "x",
        dialogClass: "PiLogin forgot",
        draggable: false,
        resizable: false,
        buttons: [
            {
                text: "Submit",
                id: "submit_btn",
                click: function () {
                    var email = $("#fPiLoginEmail");
                    PiLoginHelper.tips = $("#fPiLogin_Status");
                    var data = {
                        action: 'pilogin_forgot',
                        PiLoginEmail: email.val()
                    };
                    $.post(the_ajax_script.ajaxurl, data, function (response) {
                        var resp = $.parseJSON(response);
                        if (resp.status == 'ok') {
                            $('#forgot-dialog').html('<div class="message-ok">' + resp.data + '</div>');
                            $('.ui-dialog-buttonpane').hide();
                        } else if (resp.status == 'error') {
                            PiLoginHelper.updateTips(resp.data);
                        }
                    });
                    return false;
                }
            }
        ],
        close: function () {
            $('.ui-dialog-buttonpane').show();
        },
        open: function () {
            $('.ui-button').removeClass('sign-up').addClass('resetpass');
        }
    });

    $(document).on('click', '.sign-in-link', function () {
        $("#sign-up-dialog").dialog("close");
        $("#forgot-dialog").dialog("close");
        $("#sign-in-dialog").dialog("open");
        return false;
    });

    $(document).on('click', '.sign-up-link', function () {
        $("#forgot-dialog").dialog("close");
        $("#sign-in-dialog").dialog("close");
        $("#sign-up-dialog").dialog("open");
        return false;
    });

    $(".forgot-link").click(function () {
        $("#sign-in-dialog").dialog("close");
        $("#sign-up-dialog").dialog("close");
        $("#forgot-dialog").dialog("open");
        return false;
    });
    $(".logout-link").click(function () {
        var data = {
            action: 'pilogin_logout'
        };
        $.post(the_ajax_script.ajaxurl, data, function (response) {
            location.reload();
        });
        return false;
    });


    if( show_login ){
        $("#sign-in-dialog").dialog('open');
    }

    $("#PiLogin_Form .input").live("keyup", function (event) {
        if (event.keyCode == 13) {
            $("#sign_in_btn").click();
        }
    });
    $("#PiSignon_Form .input").live("keyup", function (event) {
        if (event.keyCode == 13) {
            $("#sign_up_btn").click();
        }
    });
    $("#PiForgot_Form .input").live("keyup", function (event) {
        if (event.keyCode == 13) {
            $("#submit_btn").click();
        }
    });

    jQuery('body')
        .bind('click', function(e) {
            if(jQuery('.ui-dialog').dialog('isOpen')
                && !jQuery(e.target).is('.ui-dialog, a')
                && !jQuery(e.target).closest('.ui-dialog').length
                ) {
                jQuery('.ui-dialog .ui-dialog-content').dialog('close');
            }
        });
});

function openForgotDialog() {
    $("#sign-in-dialog").dialog("close");
    $("#sign-up-dialog").dialog("close");
    $("#forgot-dialog").dialog("open");
    return false;
}

function openSignInDialog() {
    $("#sign-up-dialog").dialog("close");
    $("#forgot-dialog").dialog("close");
    $("#sign-in-dialog").dialog('open');

    return false;
}

function piLoginShowErrorMassage(mess) {
    var tips = $("#lPiLogin_Status");
    tips.html(mess);
    tips.removeClass("ui-message-ok").addClass("ui-message-error");
}

