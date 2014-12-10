/*!
* @file jquery.history.js
* @description jQuery History Plugin
* @author Paul Bronshteyn
* @comment Built by a geek loaded on caffeine ...
* @copyright (c) Conde Nast Digital
*/
(function($) {
    var
        currentHash,
        previousNav,
        timer,
        timeout = 300, /* default: 300 */
        hashTrim = /^.*#/,
        loc = location,

        getHash = function() {
            return loc.hash.replace(hashTrim, '');
        },

        msie = {
            iframe: null,

            getHash: function() {
                try {
                    return this.iframe.contentWindow.document.location.hash.replace(hashTrim, '');
                } catch(e) {
                    return '';
                }
            },

            setHash: function(hash) {
                $(this.iframe).one('load', { hash: hash }, this.onSetHash);
                try {
                    this.iframe.contentWindow.newdoc();
                } catch(e) {}
            },

            onSetHash: function(e) {
                this.contentWindow.document.location.hash = e.data.hash;
            }
        },

        historycheck = function() {
            var hash = msie.iframe ? msie.getHash() : getHash(),
                localHash = getHash();

            if (hash !== currentHash) {
                currentHash = hash;

                if (msie.iframe) {
                    loc.hash = currentHash;
                }

                var current = currentHash;
                $.event.trigger('history', [current, previousNav]);
                CN.debug.info('Firing History Change', [current, previousNav]);
                previousNav = current;
            } else if (msie.iframe && hash !== localHash) {
                $.history.add(localHash);
                var current = currentHash;
                $.event.trigger('history', [current, previousNav]);
                CN.debug.info('Firing Manual History Change', [hash, localHash, current, previousNav]);
                previousNav = current;
            }
        };

    $.history = {
        add: function(hash) {
            hash = hash.replace(hashTrim, '');

            if (currentHash !== hash) {
                var previous = currentHash;
                loc.hash = currentHash = hash;

                if (msie.iframe) {
                    msie.setHash(currentHash);
                }

                $.event.trigger('historyadd', [currentHash, previous]);
                CN.debug.info('History Add', [currentHash, previous]);
                previousNav = previous;
            }

            if (!timer) {
                timer = setInterval(historycheck, timeout);
            }
        }
    };

    $.fn.history = function(fn) {
        $(this).bind('history', fn);
    };

    $.fn.historyadd = function(fn) {
        $(this).bind('historyadd', fn);
    };

    $(function() {
        currentHash = getHash();

        if (!$.support.cssFloat) {
            msie.iframe = $('<iframe src="/nocount/historyhelper.html" width="0" height="0" />').one('load', function() {
                msie.setHash(currentHash);
                currentHash = msie.getHash();
                if (!timer) {
                    timer = setInterval(historycheck, timeout);
                }
                CN.debug.info('Creating history iFrame');
            }).prependTo(document.body)[0];
        }
    });
})(jQuery)