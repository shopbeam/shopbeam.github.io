// Please lint me with JSHint.
'use strict';

var playlistVisible = false;

/* JSHint directives */
/* global Modernizr, idj, jwplayer, enquire */
/* exported idj jPlayerPlaylist */
/* jshint browser:true, jquery:true */

function log(msg) {
    var debug = false;
    if(debug) {
        window.console.log(msg);
    }
}

idj.player = {
    current_post_id : -1,
    sc_client_id: "a0f2608deda99a78bf71ab74d4a3d37b",
    $controls : $(".def-player-ui"),
    player_id : "#jplayer_holder",
    //in_page_trigger: ".def-track .track-info",
    //in_page_track_selector : null,
    track_li_selector: ".kt-track",
    in_page_track_selector: ".kt-track .play-song-small",
    current_track_li: "",
    //current_track_idx: -1,
    init_player : function(playlist) { //initializes the audioplayer object with the given playlist.  (idj.default_playlist)
        log("Creating new player");
        log(playlist);

        this.audioplayer =
            new jPlayerPlaylist(
                {
                    jPlayer: this.player_id,
                    cssSelectorAncestor: ".def-player-ui"
                }, playlist, {
                    playlistOptions : {
                      autoPlay: false
                    },
                    size : { },
                    swfPath: "/wp-content/themes/katyperry-2/library/js/jplayer",
                    supplied: "mp3",

                    solution: "flash, html",
                    preload: "none",
                    wmode: "window",//Note that the {wmode:"window"} option is set to ensure playback in Firefox 3.6 with the Flash solution. However, the OGA format would be used in this case with the HTML solution. http://www.jplayer.org/latest/developer-guide/#jPlayer-option-wmode
                    smoothPlayBar: true//,
                    //keyEnabled: true
                }
            );
        this.init_controls();

        this.update_gui(playlist[0]);

        //$("#jplayer_inspector_1").jPlayerInspector({jPlayer:$(this.player_id)});
    },
    handle_track_interaction : function(post_id, track_idx, track_li) {

        //Different playlist to be loaded
        if(this.current_post_id !== post_id) {
            var old_id = this.current_post_id;
            this.current_post_id = post_id;

            log("Different playlist to be loaded: " + post_id);

            var playlist = this.get_current_playlist(post_id);

            if(this.audioplayer !== undefined) { //If player exists, destroy it before recreating
                log("Player exists, old post id: " + old_id);
                log("Loading new playlist");
                log(playlist);
                var self = this;
                $(this.player_id).bind($.jPlayer.event.canplay, function(e) {
                    log("---rebind-----can play-----track_idx " + track_idx + " ----- " + self.current_post_id);

                    //Do not auto play when the default playlist loads
                    if(track_idx !== -1 && track_idx !== 0) {
                        self.goToAndPlay(track_idx);
                    }

                    $(self.player_id).unbind($.jPlayer.event.canplay);
                });
                log("loading it!");
                this.audioplayer.options.playlistOptions.autoPlay = true;
                this.audioplayer.setPlaylist(playlist);
            }
        } else {
            log("trying to play");
            var currently_playling_track = this.get_current_track();
            var track_to_be_played = this.get_track_by_idx(track_idx);

            //If user clicked a track that is already playing
            if(currently_playling_track.track_id === track_to_be_played.track_id) {
                //do pause or play...
                if($(track_li).hasClass("pause")) {
                    this.audioplayer.pause();
                    //$(this.in_page_track_selector).removeClass("play");
                    //$(track_li).addClass("play");
                } else {
                    this.audioplayer.play();
                }
            } else { //User clicked a different track, play it.
                this.goToAndPlay(track_idx);
            }
        }
    },
    init_controls : function() {
        log("init controls");
        if(this.audioplayer !== undefined) {
            var self = this;
            $(self.player_id).bind($.jPlayer.event.play, function(e) {
                log("play event");
                self.update_gui(self.get_current_track(), e);

                var track = self.get_current_track();

                var track_title = track.title.replace(/<[^>]*>/g," ");

                //idj.tracker.log_event("Track Interactions", "Track Preview", track.artist + "_" + track_title);
            });
            $(self.player_id).bind($.jPlayer.event.pause, function(e) {
                log("pause event");
                self.update_gui(self.get_current_track(), e);
            });
        }
    },
    update_gui: function(current_track, player_event) {

        log(current_track);


        $(".nowPlaying-album").html(current_track.release_name);

        $(".nowPlaying-track .nowPlaying-title").html(current_track.title);

        //log(this.current_track_li);
        log(player_event);

        this.current_track_li = $(".def-playlist[data-post-id='"+this.current_post_id+"'] li.def-track")[this.audioplayer.current];
        //If the track is not yet playing
        if(!$(this.current_track_li).hasClass("pause")) {

            $(this.track_li_selector).removeClass("pause");
            $(this.current_track_li).addClass("pause");
        } else {
            $(this.track_li_selector).removeClass("pause");
            //this.audioplayer.play();
        }
        /*if(current_track.release_image !== undefined && current_track.release_image !== "") {
            $(".nowPlaying-image").html("<a href='"+current_track.release_link+"'><img src='"+current_track.release_image+"' alt='"+current_track.release_name+"' /></a>");
        } else {
            $(".nowPlaying-image").html("");
        }*/

    },
    get_current_playlist: function(post_id) {
        var current_playlist_objects = [];
        var $current_playlist = $(".def-playlist[data-post-id='"+post_id+"']");

        var self = this;
        $current_playlist.children("li").each(function() {
           if($(this).attr("data-audio-url") !== undefined && $(this).attr("data-audio-url") !== "") {
               log($(this).attr("data-audio-url"));
               var modified_audio_url = $(this).attr("data-audio-url");
               if(modified_audio_url.indexOf("soundcloud") !== -1) {
                   modified_audio_url += "?client_id="+self.sc_client_id;
               }
               var track_data = {
                   "title": $(this).attr("data-track-title"),
                   "artist": $(this).attr("data-artist-name"),
                   "artist_link" : $(this).attr("data-artist-link"),
                   "mp3": modified_audio_url,
                   "release_image" : $(this).attr("data-release-img"),
                   "release_name": $(this).attr("data-release-name"),
                   "release_link": $(this).attr("data-release-link"),
                   "track_id": $(this).attr("data-track-id")
               };
               //log("get_current_playlist");
               log(track_data);
               current_playlist_objects.push(track_data);
           }
        });
        return current_playlist_objects;
    },
    goToAndPlay: function(idx) {
        log("Playing track index: " + idx);
        if(this.audioplayer !== undefined) {
            this.audioplayer.play(idx);
        }
    },
    get_current_track: function() {
        return this.audioplayer.playlist[this.audioplayer.current];
    },
    get_track_by_idx: function(idx) {
        return this.audioplayer.playlist[idx];
    }
};

//AUDIO PLAYER
$("document").ready(function() {
    //Load the default playlist;
    if(idj.default_playlist !== undefined) {
        idj.player.init_player(idj.default_playlist);
    } else {
        log("No default playlist set up for the site");
    }
});

//This needs to be triggered whenever a play button is set.
//Any play button or track li.
$("body").on("click", idj.player.in_page_track_selector, function(e) {
    if($(this).children(".no-audio").length > 0 || $(this).hasClass("no-audio")) {
        return;
    }

    // Open the playlist if this is the first time playing a track.
    if(!playlistVisible) { $('.navbar-fixed-bottom .player-button').click(); }

    var $playlist_ul = $(this).parents(".def-playlist");
    var post_id = $playlist_ul.attr("data-post-id");

    var parent_def_track = $(this).parents(".def-track:first");

    //var track_idx = $playlist_ul.children(idj.player.in_page_track_selector).index($(this));
    var track_idx = $playlist_ul.find(idj.player.in_page_track_selector).index($(this));
    idj.player.handle_track_interaction(post_id, track_idx, parent_def_track);
    //idj.player.goToAndPlay(track_idx);
});

//Playlist play buttons
$("body").on("click", ".listen", function(e) {
    if($(this).children(".no-audio").length > 0 || $(this).hasClass("no-audio")) {
        return;
    }

    // Open the playlist if this is the first time playing a track.
    if(!playlistVisible) { $('.navbar-fixed-bottom .player-button').click(); }

    var $playlist_ul = $(this).parents(".def-playlist");
    var post_id = $playlist_ul.attr("data-post-id");

    var parent_def_track = $(this).parents(".def-track:first");

    //var track_idx = $playlist_ul.children(idj.player.in_page_track_selector).index($(this));
    var track_idx = $playlist_ul.find(".listen").index($(this));
    idj.player.handle_track_interaction(post_id, track_idx, parent_def_track);
    //idj.player.goToAndPlay(track_idx);
});


// If a user clicks the "Listen" button on desktop, show
// the player controls and open the playlist.
$('.navbar-fixed-bottom .player-button').click(function(e) {
    $(this).fadeOut(200);
    $(this).siblings('.def-player-ui').fadeIn(200);
    openPlaylist($(this).parents('.navbar').find('.playlist-collapse'));
    playlistVisible = true;
});
// The playlist UI button opens and closes the playlist.
$('.btn-playlist').click(function(e) {
    var playlist = $(this).parents('#listen').find('.playlist-collapse');
    if(playlist.hasClass('active')){
        closePlaylist(playlist);
    } else {
        openPlaylist(playlist);
    }
    e.stopPropagation();
    return false;
});
// The close button closes the playlist.
$('.navbar-fixed-bottom .playlist-holder .playlist-close').click(function() {
    closePlaylist($(this).parents('.playlist-collapse'));
    return false;
});
// Function to slide open the given ".playlist-collapse" jQuery object.
function openPlaylist($collapse) {
    var autoHeight;
    //$collapse.css('height', 'auto');
    /*if ($collapse.height() === 0) {

        /*$collapse.css('height', 'auto');
        autoHeight = $collapse.height();
        $collapse.addClass('slideOut');
        $collapse
            .stop()
            .css('height', 0)
            .animate({
                height : autoHeight
            }, 500, function() {
                $collapse.css('height', '');
            });
        */
    /*}*/
    //$(".playlist-holder").css("opacity", 0);
    //$(".playlist-holder").show();
   // $collapse.slideDown(function() { $(".playlist-holder").css("opacity", 1);});

    $collapse.addClass('active');
}
// Function to slide closed the given ".playlist-collapse" jQuery object.
function closePlaylist($collapse) {
    /*if ($collapse.hasClass('slideOut', 'active')) {
        $collapse
            .stop()
            .animate({
                height : 0
            }, 500, function() {
                $collapse.css('height', '');
            });
    }*/
   // $collapse.slideUp();
   // $collapse.removeClass('active', 'slideOut');
   $collapse.removeClass('active');
}
//AUDIO PLAYER - MOBILE

// Show the playlist if the expand icon is clicked.
$('.main-nav .nowPlaying-more').click(function(event) {

    $('.main-nav .playlist-holder')
        .css('left', '100%')
        .animate({left:0}, 500);
    event.preventDefault();
    return false;
});
// Close the playlist if the close button is clicked.
$('.main-nav .playlist-holder .playlist-close').click(function() {

    $('.main-nav .playlist-holder')
        .animate({left:'100%'}, 500);
    event.preventDefault();
    return false;
});


/* Helper function to check for iPhone */
function isiPhone(){
    return (
        //Detect iPhone
        (navigator.platform.indexOf("iPhone") != -1) ||
            //Detect iPod
            (navigator.platform.indexOf("iPad") != -1) ||
            (navigator.platform.indexOf("iPod") != -1)
        );
}
//--------------------//
// VIDEO PLAYER SETUP //
//--------------------//

// Sets up JW Player for the given video frame element.
function setupJW($videoFrame) {
    var bg_img = $videoFrame.children(".video-frame-thumb").attr("src");
    var youtube_id = $videoFrame.attr("data-youtube-id");
    var auto = false;

    var vid_w = $(".entry-thumbnail").width();
    var vid_h = $(".entry-thumbnail").height();

    if($videoFrame.hasClass("autoplay")) { auto = true; }

    //last_image = bg_img;
    idj.old_player_code = $videoFrame.wrap("<div class='vid-wrap'>").parent().html();

    jwplayer(youtube_id).setup({
        'primary': 'flash',
        'flashplayer': '/wp-content/themes/katyperry-2/library/js/jwplayer/player.swf',
        'file': 'http://www.youtube.com/watch?v='+youtube_id,
        'controlbar': 'over',
        'image' : bg_img,
        'width': "100%",
        'height': vid_h,
        'aspectratio': '16:9',
        'autostart' : auto,
        'skin': '/wp-content/themes/katyperry-2/library/js/jwplayer/skins/PRODbekle/PRODbekle.zip',
        'events': {
            onReady: function() {
                $("#"+youtube_id+"_wrapper, #"+youtube_id).css({'margin-left': 'auto', 'margin-right': 'auto'});
                $("#"+youtube_id+"_wrapper").css('margin-bottom', "15px");
            }
        }
    });
    //$videoFrame.html(updated_embed);
    $videoFrame.fitVids();
}

// This will execute when the YouTube API is ready. The code
// inside only runs if the device is an iPhone. It will replace
// our normal JW Player setup with a straight YT video embed.
function onYouTubeIframeAPIReady() {
    if(isiPhone()) {
        $('body .video-frame').each(function() {
            var $videoFrame = $(this);

            var vid_w = $(".entry-thumbnail").width();
            var vid_h = $(".entry-thumbnail").height();

            var youtube_id = $videoFrame.attr("data-youtube-id");
            var element_id = youtube_id+"_wrapper";
            $videoFrame.html($('<div>', { id: element_id }));

            var player;
            player = new YT.Player(element_id, {
                videoId: youtube_id,
                width: vid_w,
                height: vid_h,
                events: {
                    'onReady': onPlayerReady
                }
            });
            function onPlayerReady(event) {
                $videoFrame.fitVids();
            }
        });
    }
}

$(document).ready(function() {
    // If on iPhone, we're going to use straight YT embeds.
    if(isiPhone()) {
        // Set up the YouTube API script.
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    // If not on iPhone, set up JW Player.
    } else {
        $("body").on("click", ".video-frame", function(e) {
            setupJW($(this));
        });
    }
});