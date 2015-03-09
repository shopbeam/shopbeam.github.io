// Set the most-recently-loaded cookie.
(function(){
    var locationString = location.href.toString(),
        hostname = location.hostname,
        parts = hostname.split('.'),
        subdomain = parts.shift(),
        upperLevelDomain = parts.join('.');

    docCookies.setItem( 'most-recently-loaded', locationString, null, '/', upperLevelDomain );
})();

/********************************
 * Auth module used for PEOPLE
 * Premium login and greeting.
 * Depends on MDN docCookies.
 ********************************/

PEOPLE.Auth = (function(){
    var authEnabled = true,
        sub = getSubdomain();

    function getCookie() {
        return docCookies.getItem('TISub');
    }

    function getSubdomain() {
        var hostname = location.hostname,
            parts = hostname.split('.'),
            subdomain = parts.shift();

        if ( ( !subdomain.match(/www/) &&
            !subdomain.match(/preview/) &&
            !subdomain.match(/dev/) &&
            !subdomain.match(/qa/) ) ||
            subdomain.match(/subscription/) ) {
            return 'www';
        } else {
            return subdomain;
        }
    }

    function bindIframeLoad() {
        $('iframe#greeting-sign-in').load(function(){
            var $this = $(this);

            $this.addClass('show');
            $this.css( 'display', 'block' ); // Force display in some browsers.
        });
    }

    // Set url of greeting and sign in iframe.
    function setGreetingIframe() {
        var url = 'http://' + sub + '.people.com/people/static/h/premium/greeting-sign-in-iframe.html',
            $iframe = $('iframe#greeting-sign-in');

        if ( $iframe.length != 0 ) {
            $iframe.attr( 'src', url );
        }
    }

    // Refresh the cookie set iframe.
    function refreshGreetingIframe() {
        var $iframe = $('iframe#greeting-sign-in');

        if ( $iframe.length != 0 ) {
            $iframe.removeClass('show');
            $iframe.attr( 'src', function ( i, val ) { return val; });
        }
    }

    function removeCookieSetIframe() {
        var $iframe = $('iframe#cookie-check-set');

        if ( $iframe.length != 0 ) {
            $iframe.remove();
        }
    }

    // Append the cookie set iframe.
    function appendCookieSetIframe() {
        var url = 'http://' + sub + '.people.com/people/static/h/premium/cookie-check-set.html',
            $body = $('body');

        $body.append('<iframe id="cookie-check-set" src="' + url + '" style="display:none;"></iframe>');
    }

    function removeCookieClearIframe() {
        var $iframe = $('iframe#cookie-check-clear');

        if ( $iframe.length != 0 ) {
            $iframe.remove();
        }
    }

    function appendCookieClearIframe() {
        var url = 'http://' + sub + '.people.com/people/static/h/premium/cookie-check-clear.html',
            $body = $('body');

        $body.append('<iframe id="cookie-check-set" src="' + url + '" style="display:none;"></iframe>');
    }

    function removeLogoutIframe() {
        var $iframe = $('iframe#logout-iframe');

        if ( $iframe.length != 0 ) {
            $iframe.remove();
        }
    }

    function appendLogoutIframe() {
        var authSubdomain = 'auth',
            url,
            $body = $('body');

        if ( sub.match(/dev/) ) {
            authSubdomain = 'dev-auth';
        }

        if ( sub.match(/qa/) ) {
            authSubdomain = 'qa-auth';
        }

        url = 'https://' + authSubdomain + '.people.com/logout.php';

        $body.append('<iframe id="logout-iframe" src="' + url + '" style="display:none;"></iframe>');
    }

    function showLoginIframe() { 
        var url = 'http://' + sub + '.people.com/people/static/h/premium/login-iframe.html?firstload=true',
            iframe = '<div id="login-iframe"><iframe src="' + url + '" width="705" height="550" scrolling="no"></iframe></div>',
            $body = $('body'),
            $iframe,
            overlayPrem = '<div id="premium-overlay"></div>',
            windowBound = false;

        $body.append(overlayPrem);
        $body.append(iframe);

        $iframe = $('#login-iframe');
        $iframe.addClass('show');
        $iframe.center();

        if ( windowBound === false ) {
            $(window).bind('resize', function(){
                $iframe.center();
            });
            windowBound = true;
        }
    }

    function handleClose() {
        $('#premium-iframe .close, #premium-overlay').live('click', function(e){
            e.preventDefault();
            closeOverlay();
        });
    }

    function linkToVIP() {
        var url = 'http://subscription-assets.people.com/prod/assets/themes/magazines/SUBS/templates/velocity/site/pe-vipdplp0913/lp.html';

        window.location = url;
    }

    function closeOverlay() {
        $('#login-iframe').remove();
        $('#premium-overlay').remove();
    }

    function premiumRedirect() {
        if ( location.pathname.match(/\/premium\/|\/digitalmagazine\//) ) {
            location.href = 'http://' + sub + '.people.com/people/insider';
        }
    }

    function conditionalRefresh() {
        if ( getCookie() ) {
            if ( location.pathname.match(/\/insider/) ||
                location.pathname.match(/\/shared\//) ) {
                window.location.reload();
            }
        }
    }

    // Listen for message from iframe.
    function handlePostMessage(){
        // Create IE + others compatible event handler.
        var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent",
            eventer = window[eventMethod],
            messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

        // Listen to message from child window.
        eventer( messageEvent, function(e) {
            if ( ! e.origin.match(/people.com/) &&
                ! e.origin.match(/peoplestylewatch.com/) &&
                ! e.origin.match(/peoplepets.com/) ) {
                return false;
            }

            switch ( e.data ) {
                case 'sign-in':
                    PEOPLE.Auth.showLoginIframe();
                    omniTrackEv('premium-signin-1');
                    break;
                case 'refresh-cookie-set':
                    PEOPLE.Auth.removeCookieSetIframe();
                    PEOPLE.Auth.appendCookieSetIframe();
                    PEOPLE.Auth.refreshGreetingIframe();
                    break;
                case 'sign-out':
                    PEOPLE.Auth.removeCookieClearIframe();
                    PEOPLE.Auth.appendCookieClearIframe();
                    PEOPLE.Auth.removeLogoutIframe();
                    PEOPLE.Auth.appendLogoutIframe();
                    setTimeout(function(){
                        PEOPLE.Auth.refreshGreetingIframe();
                        PEOPLE.Auth.premiumRedirect();
                    }, 1000);
                    break;
                case 'vip-link':
                    PEOPLE.Auth.linkToVIP();
                    break;
                case 'close-overlay':
                    PEOPLE.Auth.closeOverlay();
                    PEOPLE.Auth.conditionalRefresh();
                    break;
                default:
                    break;
            }

        }, false );
    }

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
            }
        }
    }

    function parseSignInQuery() {
        var signIn = getQueryVariable('signin');

        if ( ! getCookie() && signIn === 'true' ) {
            showLoginIframe();
        }
    }

    function init() {
        if ( authEnabled === true && $('#insider-nav').length != 0 ) {
            bindIframeLoad();
            setGreetingIframe();
            handleClose();
            handlePostMessage();
            parseSignInQuery();
            PEOPLE.Auth.authComplete = true;
        }
    }

    return {
        init: init,
        showLoginIframe: showLoginIframe,
        refreshGreetingIframe: refreshGreetingIframe,
        removeCookieSetIframe: removeCookieSetIframe,
        appendCookieSetIframe: appendCookieSetIframe,
        removeCookieClearIframe: removeCookieClearIframe,
        appendCookieClearIframe: appendCookieClearIframe,
        removeLogoutIframe: removeLogoutIframe,
        appendLogoutIframe: appendLogoutIframe,
        linkToVIP: linkToVIP,
        premiumRedirect: premiumRedirect,
        closeOverlay: closeOverlay,
        conditionalRefresh: conditionalRefresh
    }
})();

if ( typeof PEOPLE.Auth.authComplete === 'undefined' ) {
    PEOPLE.Auth.init();
}