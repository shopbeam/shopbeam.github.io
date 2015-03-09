// Set ads to async mode.
var TGX_SITE_CONFIG = {
    'gpt_sync_mode': 'async'
};

var gallery = window.gallery || false, //there was an error in retrieving the gallery JSON
    PhotoGallery = []; // prep for in-page variables/old functions

PEOPLE.Photo = {
    slides : [], // slide array
    inpage : '', // id for in-page content
    nextprev: '', // photo next prev nav
    preid : '', // package and/or gallery id
    slide : '', // #slide
    slider : '', // #slide UL
    sliderwidth: '', // jquery width of above slider
    rightcolumn : '', // #rightColumn
    fetching : '', // string of ids currently fetching
    fetched : '', // string of ids previously fetched
    fetchcount : 1, // instantiate, changed after initial page load
    direction : false, // used for swipe function to track direction
    draggable : false, // indicates if draggable library has been downloaded yet
    firstload : true,
    currentIndex : 0,
    currentOffsetX : 0,
    legaltext : 'PEOPLE StyleWatch receives a commission from these sales.',
    init : function() {PEOPLE.Photo.startmeup();},
    startmeup : function() {
        this.inpage = this.slideid;
        if( String(gallery[0]).match('_') ){ //determine if slides use gallery_slide or just slide by looking at first
            this.preid = (this.packageid != '') ? this.packageid+'_' : '';
            this.preid += this.galleryid+'_';
        }
        this.main = $('#main');
        this.main.addClass('js');
        this.nextprev = $('#slide ul.navigation');
        this.slide = $('#slide');
        this.slider = $('#slider');
        this.sliderwidth = $('#slider').parent().width() || 0;
        this.rightcolumn = $('#rightColumn');
        this.credit = $('#credit');
        this.thisslide = $('#thisslide');
        this.scrollbar = $('#scrollbar');
        this.relatedcontent = $('#relatedlinks');
        this.celebdb = ($('#database').length) ? true : false;
        this.navall = $('#slide ul.navigation a,#rightColumn div.navigation a');
        this.navnext = $('#slide ul.navigation li.next a,#rightColumn li.next a');
        //$('#slide #credit').before('<div id="shoplegaltext"></div>');
        if ( this.pollWithButtonsEnabled ) {
            this.pollIds = [];
            this.pollData = [];
            this.pollHash = {};
            this.pollWithButtons( this.slideid );
        }
        if ( this.style360PollEnabled ) {
            this.get360( this.slideid );
        }
        if(PEOPLE.Photo.imgRevealGallery) {
            $.getScript('http://img2-3.timeinc.net/people/static/j/jqueryui/jquery-ui-1.8.20.custom.js', function() {
                $.getScript('http://img2-3.timeinc.net/people/static/j/jqueryui/reveal.js', function() {
                    $('.imgReveal:not(:hidden)').imgReveal({ 'startPercent': 10 });
                });
            });
        }
        if (String(document.location).match('peoplestylewatch.com')) {
            document.domain = 'peoplestylewatch.com';
            this.isStyleWatch = true;
        }else if(String(document.location).match('peoplepets')) {
            document.domain = 'peoplepets.com';
        }else{
            document.domain = 'people.com';
        }
        if (document.location.href.match('http://preview.people') && !document.location.search.match('test')) { // set all galleries to hardrefresh in preview
            this.hardrefresh = true;
            this.relatedcontent.find('li').show();
        }
        if (this.hardrefresh) {
            this.showslide(this.slideid);
            this.additionalcontent(this.slideid);
            if (this.slide.find('img,video,object,embed,iframe').length > 0) {
                this.slider.css('height',this.slide.find('img,video,object,embed,iframe')[0].height+'px');
            }
            this.main.find('.noscript').removeClass('noscript');
        }
        if ((this.fullscreen === true) && (!((navigator.userAgent.match('iPhone')) || (navigator.userAgent.match('iPad')) || (navigator.userAgent.match('iPod'))))){
            this.rightcolumn.addClass('fullscreen').find('p.pageof').after('<iframe id="fullscreeniframe" src="/people/static/h/photos/fullscreen/iframe.html?'+location.href+'" frameborder="0" scrolling="no" allowtransparency="true"></iframe>');
        }
        //if ( PEOPLE.Photo.shopping ) {//if we're on a stylewatch slideshow with shopping
        //    this.styleFindFirstView = true;
        //    this.styleFindFirstViewIds = [];
        //    this.styleFindProductsHash = {};//since we are rendering slides before they are visible, instantiate an object to use as a hash table to store value of hasProducts
        //    this.styleFindDiv( this.slideid );
        //    this.styleFindLoad( this.slideid );
        //    this.refreshshoppingomniture();//called for the first slide
        //}        
        if (!this.slide.hasClass('endScreen') && !this.hardrefresh) { //check for end screen status
            var hash = String(document.location).split('#')[1];
            if (!hash || hash == this.slideid) { // in-page content is correct
                this.showslide(this.slideid);
                this.getslide(this.slideid);

                var h;
                if ( this.slide.find('.imgRevealLeft').length ) {
                    h = Number(this.slide.find('.imgRevealLeft img').attr('height'));
                } else {
                    h = Number(this.slide.find('img,video,object,embed')[0].height);
                }

                var w = Number(this.slide.find('img,video,object,embed')[0].width);
                if (this.slide.find('video,object,embed').length > 0) { h += 40; }
                this.slider.css('height',h+'px');
            } else { // in-page content is NOT correct
                this.hideslide(this.slideid);
                this.slideid = hash;
                this.getslide(this.slideid);
            }
            this.main.find('.noscript').removeClass('noscript');
            this.clicklistener();
            this.fetchcount = 2;
            this.fetchfiles(this.slideid);
            this.checkstuff = setInterval('PEOPLE.Photo.checkhash()',1000);
        }

        if(this.slide.hasClass('endScreen') && $('#slidetouts').length == 0) {
            url = '';
            if (document.location.href.match('/people/gallery')) {
                url = '/people/component/photos/endscreen/recirc/';
                $.get(url, function(data) {
                    $('#slide .navigation').after(data);
                });
            } else if (document.location.href.match('/people/stylewatch/gallery')) {
                url = '/people/component/stylewatch/photos/endscreen/recirc/';
                $.get(url, function(data) {
                    $('#slide .navigation').after(data);
                });
            }
        }

        /* dynamically add a 1x1 ad call to page */
        this.main.append('<div id="ad1x1"></div>');
        adFactory.iframes.push("ad1x1|1,1");

        /* dynamically add Outbrain IFRAME to page */
        this.writeOutbrain();

        this.writeads();
        this.sharebarlistener();
        this.firstload = false;
        if (this.stitch) {this.addstitch();}
        $(window).ready(function(){
            MasterArray.length = 0;
            PEOPLE.Photo.initializeRandomRecirc();
        });

        this.paginateJumptime();
        this.video();
        // swipe functionality
        if ( PEOPLE.isTablet && window.location.toString().indexOf("?swipe=true") > -1 ) {
            $.getScript( '/people/static/j/photos/gallery.swipe.js', function(){ PEOPLE.Photo.swipe.init(); } );
        }
    },
    replacestring : function(r,f) {
        var toreplace = String(r),
            re = new RegExp(toreplace,'gi');
        return f.replace(re,'');
    },
    addtofetching : function(id) {
        this.fetching += id+',';
    },
    removefromfetching : function(id) {
        this.fetched += id+',';
        this.fetching = this.replacestring(id+',',this.fetching);
    },
    fetchfiles : function(id) {
        var c = $.inArray(this.preid+id,gallery),
            p, n, i, len = this.fetchcount;
        for (i = -1; ++i < len;) {
            if (gallery[c+i]) { // fetch next first
                n = this.replacestring(this.preid,gallery[c+i]);
                if (!this.fetched.match(n)){this.getslide(n);};
            }
            if (gallery[c-i]) { // then previous
                p = this.replacestring(this.preid,gallery[c-i]);
                if (!this.fetched.match(p)){this.getslide(p);};
            }
        }
    },
    checkfetching : function() {
        if (this.fetching != '') {
            var id = this.fetching.split(',')[0];
            this.removefromfetching(id);
            this.fetched = this.replacestring(id+',',this.fetched);
            this.getslide(id);
        }
    },
    checkhash : function() {
        var hash = String(document.location).split('#')[1];
        if (hash && hash != this.slideid) { // hash has changed
            this.hideslide(this.slideid);
            this.slideid = hash;
            this.getslide(this.slideid);
        }
    },
    updatehash : function(id) {
        var loc = (String(document.location).match('#')) ? String(document.location).split('#')[0] : '';
        document.location = loc+'#'+id;
    },
    buildjsonurl : function(id) {
        var u = '/people/';
        if ( this.style360PollEnabled ) {
            u += 'component/gallery/multiview/0,,' + this.galleryid + '_' + id  + ',00.html';
        } else {
            if (String(document.location).match('peoplestylewatch.com')) {u += 'stylewatch/';}
            if (String(document.location).match('peoplepets.com')) {u += 'pets/';}
            if (String(document.location).match('quiz')) {
                u += 'quiz/content/json/html/0,,';
            } else {
                u += 'gallery/celeboverlay/content/html/0,,';
            }
            u += this.preid+id+',00.html';
        }
        return u;
    },
    hideslide : function(id) {
        $('#slide_'+id+',#photographer_'+id+',#published_'+id+',#caption_'+id+',#relatedlink_'+id+',#disclaimerid_'+id).hide();
    },
    showslide : function(id) {
        if (typeof this.slides['slide_'+id] === 'object') {
            if (this.firstload == false) {
                this.refreshit(id);
            }
            var arr = this.slides['slide_'+id],
                s = $.inArray(this.preid+id,gallery),
                site = arr.titlebar.indexOf(': People.com') ? '' : ' : People.com';

            this.thisslide.text(s+1);
            document.title = PEOPLE.removeHTML(arr.titlebar) + site;
            this.slider.css('height',arr.height+'px');
        }

        // Sets the imgXXX class for current image to load the correct shopping CSS
        if ( $('#slide_' + id + ' span img').length ) {
            var currentimgwidth = '';

            // Get the width of the image in the last span
            currentimgwidth = $('#slide_' + id + ' span img').last().attr('width');

            // add the imgXXX class to the LI
            $('#slide_' + id).addClass('img'+currentimgwidth);
        }

        $('#slide_'+id+',#photographer_'+id+',#published_'+id+',#caption_'+id+',#relatedlink_'+id+',#disclaimerid_'+id).show();
        this.togglenav(id);
        //if( PEOPLE.Photo.shopping && typeof pswViewed != 'undefined' ) {
        //    pswViewed( id );//not called on first load because pswViewed is called as part of the style find request
        //    PEOPLE.Photo.refreshshoppingomniture();//called for subsequent slides
        //}
        if( $('#slide_'+id).find('.imgReveal').length && typeof $.fn.imgReveal !== 'undefined' ) {//if we're on a slide with image reveal
            $('#slide_'+id).find('.imgReveal:not(:hidden)').imgReveal({'startPercent': 10});
        }
    },
    getslide : function(id) {
        if (this.fetching.match(id)) {
            return false;
        } else if (this.fetched.match(id)) {
            this.showslide(id);
        } else {
            this.addtofetching(id);
            var u = this.buildjsonurl(id);
            $.ajax({
                async: false,
                url: u,
                dataType: 'html',
                success: function(result){
                    if ($('#slide_'+id).length) {
                        $('#slide_'+id).append(result);
                    } else {
                        $('<li id="slide_'+id+'" class="image"></li>').appendTo(PEOPLE.Photo.slider).append(result);
                    }
                },
                error: function(){
                    PEOPLE.Photo.removefromfetching(id);
                    PEOPLE.Photo.hardrefresh = true;
                }
            });
        }
    },
    get360 : function(id) {
        var u = this.buildjsonurl(id);
        $.ajax({
            async: false,
            url: u,
            dataType: 'html',
            success: function(result){
                if ($('#slide_'+id).length) {
                    $('#slide_'+id).append(result);
                } else {
                    $('<li id="slide_'+id+'" class="image"></li>').appendTo(PEOPLE.Photo.slider).append(result);
                }
            }
        });
    },
    appendslide : function(id,json) {
        this.slides['slide_'+id] = json;
        this.removefromfetching(id);
        var slide = $('#slide_'+id),
            arr = this.slides['slide_'+id];

        if (id == this.inpage) {
            this.slider.css('height',arr.height+'px');
        } else {
            var img = arr.img,
                credit = arr.credit + arr.published,
                caption = arr.caption,
                relatedcontent = arr.relatedcontent;

            slide.prepend(img);
            this.credit.append(credit);
            this.scrollbar.append(caption);
            this.relatedcontent.append(relatedcontent);

            if (id == this.slideid) {
                this.showslide(id);
            }
        }

        this.additionalcontent(id);

        if ( this.pollWithButtonsEnabled ) {
            this.pollWithButtons(id);
        }
    },
    append360 : function(id,json) {
        this.slides['slide_'+id] = json;
        var slide = $('#slide_'+id),
            slideTout = $('#slide .tout'),
            arr = this.slides['slide_'+id],
            images = arr.images,
            imagesLength = images.length,
            credit = arr.credit + arr.published,
            caption = arr.caption,
            relatedcontent = arr.relatedcontent;

        if (id == this.inpage) {
            this.slider.css('height',images[0].height+'px');
        }

        slide.find('span').remove();//remove the inpage slide
        slide.append( '<div id="style-360-imgs"></div>' );
        slide.append( '<div id="style-360-thumbs"><h3>What&rsquo;s her Best Side?</h3></div>' );
        $('#credit .photographer').text('');

        for ( var i = 0; i < imagesLength; i++ ) {
            var img = images[i].img,
                thumb = images[i].thumb,
                credit = images[i].credit,
                styleImgs = $('#style-360-imgs'),
                styleThumbs = $('#style-360-thumbs'),
                stylePhotographer = $('#credit .photographer');

            styleImgs.append(img);
            styleThumbs.append(thumb);
            stylePhotographer.append('<span>Credit: ' + credit + '</span>');
        }

        // for style 360 poll multiview gallery
        PEOPLE.Photo.cycle360();
        PEOPLE.Style360Poll.init(id);
    },
    cycle360: function() {//the slideshow cycle for the 360 slides and thumbs
        var $styleImgs = $('#style-360-imgs'),
            $styleImg = $('.style-360-img'),
            $styleThumb = $('.style-360-thumb'),
            $styleCredit = $('#credit .photographer span');

        $styleImgs.cycle({//cycle the slides
            delay: -1000,
            before: function() {
                var $this = $(this),
                    i = $(this).index();
                $styleImg.removeClass('active-slide');
                $this.addClass('active-slide');
                $styleThumb.removeClass('active-thumb');
                $styleCredit.hide();
                $('.style-360-thumb:eq('+i+')').addClass('active-thumb');
                $('#credit .photographer span:eq('+i+')').show();
            }
        });

        $('.style-360-img img').hover(//pause resume on hover over slige images
            function() {
                $styleImgs.cycle('pause');
            },
            function() {
                $styleImgs.cycle('pause');//design prefers not to resume cycle
            }
        );

        $styleThumb.hover(//link the hover event on the thumbs with the slide that is displayed
            function(){
                var $this = $(this),
                    i = $this.index(),
                    slideIndex = i -1;//decrement slide index due to h3 node in #style-360-thumbs
                $styleThumb.removeClass('active-thumb');
                $this.addClass('active-thumb');
                $styleImgs.cycle(slideIndex);
                $styleImgs.cycle('pause');
            }
        )
    },
    disableCycle360: function() {
        $('#style-360-imgs').cycle('stop');
    },
    clicklistener : function() {
        PEOPLE.Photo.navall.click(function(){
            if (PEOPLE.Photo.fetching != '') {return false;}
            this.blur();
            var obj = PEOPLE.Photo,
                c = $.inArray(obj.preid+obj.slideid,gallery),
                s = ($(this).text() == 'Next') ? c+1 : c-1,
                interstitial = (obj.main.hasClass('interstitial')) ? true : false,
                url = String(window.location).split(',,')[0];
            if (obj.hardrefresh && !interstitial) { // something snapped...
                window.location = url+',,'+gallery[(s+1)]+',00.html';
            } else if (s == gallery.length && !interstitial) { // end of gallery
                window.location = url+',,'+obj.preid+'endscreen,00.html';
            } else {
                obj.resetslide(obj.slideid);
                obj.hideslide(obj.slideid);
                obj.slideid = obj.replacestring(obj.preid,gallery[s]);
                obj.updatehash(obj.slideid);
                obj.getslide(obj.slideid);
                obj.fetchfiles(obj.slideid);
            }
            return false;
        });
    },
    togglenav : function(id) {
        var c = $.inArray(this.preid+id,gallery),
            len = gallery.length;
        var prev = $('#main li.previous'),
            next = $('#main li.next'),
            rightnav = this.rightcolumn.find('div.navigation:first');
        if (c === 0) { // previous off
            prev.addClass('off');
            rightnav.find('li.off:first').append('<p></p>'); // appending <p> to cover right-column bg arrows
        } else { // previous on
            prev.removeClass('off');
            rightnav.find('li p:first').remove();
        }
        if (this.celebdb) { // next is always "on" except for celebdb galleries, which don't have an end slide
            if (len > 1 && c < (len - 1)) { // next on
                next.removeClass('off');
                rightnav.find('li.next p:first').remove();
            } else { // next off
                if (rightnav.find('li.next:first').length === 0) {
                    rightnav.find('ul:first').append('<li class="next off"><p></p></li>');
                } else {
                    next.addClass('off'); // disable/hide both "next" buttons/links
                    rightnav.find('li.off:first').append('<p></p>'); // appending <p> to cover right-column bg arrows
                }
            }
        }
    },
    sharebarlistener : function (){ //handles all requests for sharebar tool links
        this.rightcolumn.find('ul.sharebar').find('a').unbind().click(function(){
            var obj = PEOPLE.Photo,
                u = location.href.split(',,')[0];
            u += ',,'+obj.preid+obj.slideid+',00.html';
            var whichone = $(this).parent().attr('class');

            function toTitleCase(str)
            {
                return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
            }

            switch (whichone) {
                case 'facebook':
                    u = 'http://www.facebook.com/share.php?u='+u;
                    $(this).attr('href',u);
                    break;
                case 'twitter':
                    var slidetitle = '';

                    slidetitle = $('#caption_'+obj.slideid+' h4').text();

                    // Get Gallery Name from <meta name="TITLE" content="">
                function checkMeta() {
                    var metas = document.getElementsByTagName('meta');
                    var i;
                    for (i = 0; i < metas.length; i++)
                        if (metas[i].getAttribute('name') == "TITLE")
                            break;
                    var galleryName = metas[i].getAttribute('content');
                    return(galleryName);
                }

                    var galleryTitle = checkMeta();
                    // End: Get Gallery Name from meta tag

                    // PROD: u = 'http://twitter.com/intent/tweet?url='+ u +'&text='+PEOPLE.removeHTML(document.title);

                    // Convert Slide Title to Title Case
                    // slidetitle = toTitleCase(slidetitle)

                    if (slidetitle == '') {
                        u = 'http://twitter.com/intent/tweet?url='+ u +'&text=' + galleryTitle;
                    }
                    else {
                        slidetitle = PEOPLE.removeHTML(slidetitle);
                        slidetitle = slidetitle.replace(/&/, "%26");
                        u = 'http://twitter.com/intent/tweet?url='+ u +'&text=' + galleryTitle + ' - '+slidetitle;
                    }

                    $(this).attr('href',u);
                    break;
                case 'pinterest':
                    // get slide image url
                    var mediaURL = '',
                        mediaDesc = '';
                    mediaURL = $('li#slide_'+obj.slideid+' img').attr('src');
                    mediaDesc = encodeURIComponent( $('meta[name=TITLE]').attr("content") + ' | ' + $('#caption_'+obj.slideid+' h4').text() + ' | ' + $('#caption_'+obj.slideid+' p').text() );
                    // end: get slide image url


                    mediaDesc = PEOPLE.removeHTML(mediaDesc);
                    mediaDesc = mediaDesc.replace(/&/, "%26");

                    // Convert Slide Title to Title Case
                    // mediaDesc = toTitleCase(mediaDesc);

                    u = 'http://pinterest.com/pin/create/button/?url='+u+'&media='+mediaURL+'&description='+mediaDesc;//+imageURL;
                    $(this).attr('href',u);

                    break;
                case 'email':
                    popEmailWin(u);
            }
        });
    },
    additionalcontent : function(id) {
        if (this.relatedcontent.find('li.poll').length || this.relatedcontent.find('li.poll-with-buttons').length){this.main.addClass('poll');} // poll
        this.celebdblinks(id);
        this.celebdbtouts(id);
        if (PEOPLE.Photo.hastags) {this.starttags(id);}
    },
    pollWithButtons : function(resourceid) {
        var BASE_URL = 'http://profiles.peoplestylewatch.com/brands/PeopleStyleWatch/sections/Polls/articles/';

        this.pollIds.push(resourceid);

        function getPoll() {
            var url = BASE_URL + resourceid + '/polls?add_document_domain=true&callback=RenderPollWithButtons';

            $.ajax({
                url: url,
                dataType: 'script',
                async: false
            });
        }

        function bindEvents() {
            $('.buttons-container .active').live('click', function(e){
                var $this = $(this),
                    votes = $this.attr('data-votes');

                e.preventDefault();

                if ( !$this.hasClass('clicked-once') ) {
                    disablePoll( $this );
                    showResults( $this, votes );
                    tracking( $this );
                    submitPoll( $this );
                    $this.addClass('clicked-once');
                }
            });
        }

        function tracking( el ) {
            if ( el.hasClass('love-it') ) {
                omniTrackEv('love-it');
            } else if ( el.hasClass('leave-it') ) {
                omniTrackEv('leave-it');
            }
        }

        function submitPoll( el ) {
            var itemId = el.attr('data-item'),
                question = el.attr('data-question'),
                poll = el.attr('data-poll'),
                answer = el.attr('data-answer'),
                votes = el.attr('data-votes'),
                vote_url = BASE_URL + itemId + '/polls/' + poll + '/vote?add_document_domain=true',
                results = '<form id="submitform_' + itemId + '" action="' + vote_url + '" target="submitiframe_' + itemId + '" method="post" name="submitform_' + itemId + '">' +
                    '<fieldset>' +
                    '<input name="poll[votes][]" value="' + answer + '">' +
                    '<input name="question_' + question + '" value="' + answer + '">' +
                    '</fieldset>' +
                    '</form>' +
                    '<iframe id="submitiframe_' + itemId + '" name="submitiframe_' + itemId + '"></iframe>';

            $('#relatedlink_' + itemId + ' .buttons-container').append( results );
            $('#submitform_' + itemId).submit();
            $('#submitiframe_' + itemId).load(function(){
                var response = $('#submitiframe_' + itemId).contents().find('body').html();

                try {
                    response = eval(response);
                }
                catch(e) {
                    response = 'Something went wrong! Please, try again!';
                }

                if (response == ' ') {//success
                    setTimeout( function() { $('#submitform_' + itemId).remove(); $('#submitiframe_' + itemId).remove(); }, 200 );
                } else {
                    setTimeout( function() { $('#submitform_' + itemId).remove(); $('#submitiframe_' + itemId).remove(); }, 200 );
                }
            });
        }

        function disablePoll( el ) {
            el.removeClass('active');
            el.siblings('a').removeClass('active');
            $('.vote').click(function(e){ e.preventDefault(); });
        }

        function showResults( el, votes ) {
            var sibling = el.siblings('a'),
                siblingVotes = el.siblings('a').attr('data-votes'),
                totalVotes,
                percentage,
                siblingPercentage;

            votes++;

            totalVotes = parseInt(votes) + parseInt(siblingVotes);
            percentage = Math.round( ( parseInt(votes) / totalVotes ) * 100 );
            siblingPercentage = Math.round( ( parseInt(siblingVotes) / totalVotes ) * 100 );

            el.text( percentage + '%' );
            sibling.text( siblingPercentage + '%' );
        }

        document.domain = 'peoplestylewatch.com';
        Poll.init({base_url: "http://profiles.peoplestylewatch.com", brand: "PeopleStyleWatch", section: "Polls", article: resourceid, data_url: "/people/stylewatch/poll/gallery/json/0,,"+resourceid+",00.js"});
        Poll.render_polls();
        getPoll();
        bindEvents();
    },
    renderPollWithButtons : function(pollData) {
        PEOPLE.Photo.pollData.push(pollData);

        for ( var i = 0; i < PEOPLE.Photo.pollIds.length; i++ ) {
            var pollIdsIndexed = PEOPLE.Photo.pollIds[i],
                pollDataIndexed = PEOPLE.Photo.pollData[i];

            if ( !PEOPLE.Photo.pollHash[ pollIdsIndexed ] ) {
                PEOPLE.Photo.pollHash[ pollIdsIndexed ] = pollDataIndexed;
                PEOPLE.Photo.injectPollWithButtons( pollIdsIndexed );
            }
        }
    },
    injectPollWithButtons : function(id) {
        var pollData = PEOPLE.Photo.pollHash[id];

        if ( typeof pollData != 'undefined' ) {
            var itemId = id,
                questions = pollData[0].questions[0],
                pollId = questions.poll_id,
                questionId = questions.id,
                answers = questions.answers,
                hitId = answers[0].id,
                missId = answers[1].id,
                hitVoteCount = answers[0].vote_count,
                missVoteCount = answers[1].vote_count,
                paragraph = '<p>What do you think of her look?</p>',
                hitMarkup = '<a href="#" class="vote love-it active" data-item="' + itemId + '" data-answer="' + hitId + '" data-question="'+ questionId + '" data-poll="' + pollId + '" data-votes="' + hitVoteCount + '">Love it</a>',
                missMarkup = '<a href="#" class="vote leave-it active" data-item="' + itemId + '" data-answer="' + missId + '" data-question="'+ questionId + '" data-poll="' + pollId + '" data-votes="' + missVoteCount + '">Leave it</a>',
                voteMarkup = paragraph + hitMarkup + '<span class="divider"></span>' + missMarkup + '<div class="clear"></div>',
                container = $('#relatedlink_' + itemId + ' .buttons-container');

            container.append( voteMarkup );
            $('#relatedlinks').addClass('gradient');
        }
    },
    celebdblinks : function(id) { //adds a container around the celebdb last name for styling purposes
        $('#caption_'+id+' a.celebdb').each(function() {
            var rel = $(this).attr('rel')+'_'+id,
                t = $(this).text();
            if (t.match('-')) {
                t = t.replace(/-/,'-<span>');
            } else if (t.match(' ')) {
                t = t.replace(/ /,' <span>');
            } else {
                t = '<span>'+t;
            }
            t += '</span>';
            $(this).attr('rel',rel).html(t);
        }).click(function() {
                var rel = $(this).attr('rel'),
                    tout = $(rel),
                    id = '#slide_'+rel.right(8),
                    slide = $(id);
                if (tout.css('display') == 'block') {
                    tout.hide();
                    slide.removeClass('overlay').find('span:first').removeClass('imagewrapper');
                    PEOPLE.Photo.slide.find('div.zoomtool').show();
                } else {
                    slide.find('div.overlaytout').hide();
                    tout.show();
                    slide.addClass('overlay');
                    if (slide.find('div.tint').length === 0 && !PEOPLE.Photo.imgRevealGallery){
                        var obj = slide.find('img,video,object,embed'),
                            width = obj[0].width,
                            left = (slide.width() - width)/2;
                        slide.find('span:first').append('<div class="tint" style="width:'+width+'px;left:'+left+'px;"></div>');
                    }
                    slide.find('span:first').removeClass('imagewrapper');
                }
                return false;
            });
    },
    celebdbtouts : function(id) {
        var slide = $('#slide_'+id),
            wrappers = slide.find('div.overlaytout'),
            tops = slide.find('div.top'),
            h,
            divid;

        wrappers.each(function() {
            divid = $(this).attr('id');
            $(this).attr('id',divid+'_'+id);
        });
        if (wrappers.length > 1) {
            h = '<li class="previous"><a href="#">previous</a></li><li class="next"><a href="#">next</a></li>';
            tops.find('ul:first').prepend(h);
        }

        tops.find('li.previous a').unbind().click(function() { // loop backward through this slide's overlaytouts
            var p = $(this).parents('div.overlaytout');
            p.hide();
            if (p.attr('id') == p.parent().find('div.overlaytout:first').attr('id')) {
                p.parent().find('div.overlaytout:last-child').show();
            } else {
                p.prev().show();
            }
            return false;
        });
        tops.find('li.next a').unbind().click(function() { // loop forward through this slide's overlaytouts
            var p = $(this).parents('div.overlaytout');
            p.hide();
            if (p.attr('id') == p.parent().find('div.overlaytout:last-child').attr('id')) {
                p.parent().find('div.overlaytout:first').show();
            } else {
                p.next().show();
            }
            return false;
        });
        tops.find('li.close').unbind().click(function() {
            var p = $(this).parents('div.overlaytout');
            p.hide();
            p.parent().removeClass('overlay');
            p.parent().find('span:first').removeClass('imagewrapper');
            p.parent().find('div.zoomtool').show();
            return false;
        });
    },
    starttags : function(id) { $.getScript('http://img2-short.timeinc.net/people/static/json/gallery/'+id+'.js'); },
    addtags : function(tags,id) {
        if (id && tags) {
            var P = PEOPLE.Photo,
                slide = $('#slide_'+id),
                width = (P.hardrefresh) ? slide.find('img:first').attr('width') : P.slides['slide_'+id].width,
                left = (slide.width()-width)/2,
                h = '',
                next = '', rollover = null,
                tagid, tagwidth, tagheight, tagx, tagy, tagtype, tagarrow, title, caption, imageurl, credit;

            $(tags).each(function(i,obj) {
                if ((typeof obj.id != 'undefined') && (typeof obj.id !== null) && (typeof obj.id != '')) {
                    tagid = id+'-'+obj.id;
                    tagwidth = (obj.width != null && obj.width != '') ? obj.width : '';
                    tagheight = (obj.height != null && obj.height != '') ? obj.height : '';
                    tagx = (obj.topx != null && obj.topx != '') ? Number(obj.topx) : 0;
                    tagy = (obj.topy != null && obj.topy != '') ? Number(obj.topy) : 0;
                    tagtype = (obj.type != null && obj.type != '') ? obj.type.toLowerCase() : '';
                    tagarrow = (obj.arrow != null && obj.arrow != '') ? obj.arrow : '';
                    title = (obj.title != null && obj.title != '') ? obj.title.replace(/\\/g,'') : '';
                    caption = (obj.caption != null && obj.caption != '') ? obj.caption.replace(/\\/g,'') : '';
                    imageurl = (obj.imageurl != null && obj.imageurl != '') ? obj.imageurl.replace(/\\/g,'') : '';
                    credit = (obj.photocredit != null && obj.photocredit != '') ? obj.photocredit.replace(/\\/g,'') : '';
                    if (tagtype == 'zoom-user') { // user zoom
                        if (P.slides['slide_'+id] && P.slides['slide_'+id].zoomimage != '') {
                            if (P.draggable) {
                                P.appendzoomimage(id);
                            } else {
                                P.adddraggable(id);
                                P.appendzoomimage(id);
                            }
                        }
                        slide.find('img.zoomimage').css({'left':'-'+(tagx*2)+'px','top':'-'+(tagy*2)+'px'});
                    } else if (tagtype == 'zoom-edit') { // edit zoom
                        rollover = true;
                        var editids = [],
                            edittitles = [],
                            z,
                            len = tags.length;
                        if (len > 1) {
                            for (z = -1; ++z < len;) {
                                if (tags[z].type.toLowerCase() == 'zoom-edit') {
                                    editids.push(tags[z].id);
                                    edittitles.push(tags[z].title);
                                }
                            }
                        }
                        len = editids.length;
                        h += '<div id="marker-'+tagid+'" class="tagicon '+tagtype+'" style="top:'+tagy+'px;left:'+(tagx+left)+'px;" onmouseover="$(this).addClass(\'hover\');" onmouseout="$(this).removeClass(\'hover\');" onclick="$(\'#slide_'+id+'\').addClass(\'overlay\').find(\'div.overlaytout,div.zoomtool\').hide();$(\'#zoomedit-'+tagid+'\').show();return false;"></div>';
                        h += '<div id="zoomedit-'+tagid+'" class="overlaytout zoomedit">';
                        h += '<div class="wrapper">';
                        h += '<div class="toutSection">';
                        h += '<div class="top">';
                        h += '<p><span></span>Detail</p>';
                        h += '<ul>';
                        if (len > 1) { //zoom-edit pagination
                            for (z = -1; ++z < len;) {
                                if (editids[z] == obj.id) {
                                    if (z === 0) { //start of array, so previous title is last title
                                        h += '<li class="previous"><a href="#" onclick="$(\'#zoomedit-'+tagid+'\').hide();$(\'#zoomedit-'+id+'-'+editids[len-1]+'\').show();return false;" title="Previous">Previous</a></li>';
                                    } else { //add previous title
                                        h += '<li class="previous"><a href="#" onclick="$(\'#zoomedit-'+tagid+'\').hide();$(\'#zoomedit-'+id+'-'+editids[z-1]+'\').show();return false;" title="Previous">Previous</a></li>';
                                    }
                                    if ((z+1) < len){ //add next title
                                        h += '<li class="next"><a href="#" onclick="$(\'#zoomedit-'+tagid+'\').hide();$(\'#zoomedit-'+id+'-'+editids[z+1]+'\').show();return false;" title="Next">Next</a></li>';
                                        next = '<p class="more">NEXT: <a href="#" onclick="$(\'#zoomedit-'+tagid+'\').hide();$(\'#zoomedit-'+id+'-'+editids[z+1]+'\').show();return false;">'+edittitles[z+1]+'</a></p>';
                                    } else { //end of array, so next title is first title
                                        h += '<li class="next"><a href="#" onclick="$(\'#zoomedit-'+tagid+'\').hide();$(\'#zoomedit-'+id+'-'+editids[0]+'\').show();return false;" title="Next">Next</a></li>';
                                        next = '<p class="more">NEXT: <a href="#" onclick="$(\'#zoomedit-'+tagid+'\').hide();$(\'#zoomedit-'+id+'-'+editids[0]+'\').show();return false;">'+edittitles[0]+'</a></p>';
                                    }
                                }
                            }
                        }
                        h += '<li class="close"><a href="#" onclick="$(\'#slide_'+id+'\').removeClass(\'overlay\').find(\'div.zoomtool:first\').show();$(\'#zoomedit-'+tagid+'\').hide();return false;">Close</a></li>';
                        h += '</ul>';
                        h += '</div>';
                        h += '<div class="imgcont">';
                        h += '<img src="'+imageurl+'" alt="'+title+'" />';
                        if (credit !== null) { h += '<p class="photographer">Credit: '+credit+'</p>'; }
                        h += '</div>';
                        h += '<div class="txtcont">';
                        h += '<h4>'+title+'</h4>';
                        h += '<p>'+caption+'</p>';
                        h += next; //next zoom-edit
                        h += '</div>';
                        h += '</div>';
                        h += '</div>';
                        h += '</div>';
                    } else { //note
                        rollover = true;
                        h += '<div id="marker-'+tagid+'" class="tagicon '+tagtype+'" style="top:'+tagy+'px;left:'+(tagx+left)+'px;width:'+tagwidth+'px;height:'+tagheight+'px;">';
                        h += '<p class="title">'+title+'</p>';
                        h += '<p class="arrow '+tagarrow+'"></p>';
                        h += '</div>';
                    }
                }
            });
            if ( rollover && ! $('html').hasClass('tablet') ) { // only add icon & tint if have overlays, and only if we are not tablet
                h = '<div class="rollovericon">Roll Over</div><div class="tint" style="width:'+width+'px;left:'+left+'px;"></div>' + h;
            }
            if ( ! $('html').hasClass('tablet') ) {
                slide.find('span:first').append(h).hover(
                    function() {
                        if ($(this).find('div.tagicon').length > 0) {
                            $(this).addClass('imagewrapper');
                        }
                    },
                    function() {
                        if (!$(this).hasClass('overlay')) {
                            $(this).removeClass('imagewrapper');
                        }
                    }
                );
            } else { // if we are tablet then show the tag icons by default (no rollover necessary)
                slide.find('span:first').append(h).each(function(){
                    if ($(this).find('div.tagicon').length > 0) {
                        $(this).addClass('imagewrapper');
                    }
                });
            }
        }
    },
    appendzoomimage : function(id) {
        var P = PEOPLE.Photo,
            slide = $('#slide_'+id),
            arr = P.slides['slide_'+id],
            width = arr.width * 2,
            height = arr.height * 2,
            top = 0,
            left = (slide.width()-width)/2,
            alt = arr.alt || 'Zoom Image',
            src = arr.zoomimage,
            img = '<img style="left:'+left+'px;top:-'+top+'px;" height="'+height+'" width="'+width+'" alt="'+alt+'" id="zoomimage-'+id+'" class="zoomimage" src="'+src+'" draggable="false" />';//add draggable=false for recent webkit

        slide.find('span:first').append(img);
        $('#zoomimage-' + id).mousedown(function(e){ e.preventDefault(); });//for older safari
        P.addzoomlink(id);
    },
    addzoomlink : function(id) {
        $('#slide_'+id).find('span:first').append('<div id="zooomtool-'+id+'" class="zoomtool"><a>zoom</a></div>');
        PEOPLE.Photo.addzoomclick(id);
    },
    addzoomclick : function(id) {
        $('#slide_'+id).find('div.zoomtool a:first').click(function(){
            var slide = $('#slide_'+id),
                p = $(this).parent(),
                g = p.parent(),
                t = g.find('div.tagicon'),
                z = $('#zoomimage-'+id);
            if (p.hasClass('zoomon')) { // removing zoom
                p.removeClass('zoomon');
                p.find('a').html('zoom');
                t.css('display','');
                PEOPLE.Photo.hidezoomimage(id);
            } else { // activating zoom
                p.addClass('zoomon');
                p.find('a').html('close');
                PEOPLE.Photo.slide.find('ul.navigation:first').hide();
                t.addClass('hidebehind'); //IE needs to adjust the z-index, sigh
                //set new position of the zooom button
                var width = slide.find('img:first').width(),
                    slidewidth = PEOPLE.Photo.slide.width(),
                    zoomtoolleft = ((width*2) < slidewidth) ? ((slidewidth - width*2)/2 + 4) : 4;
                //get draggable x and y coordinates
                var offset = PEOPLE.Photo.slide.offset(),
                    x2 = offset.left,
                    x1 = -(z.width() - slide.width() - x2),
                    y2 = offset.top,
                    y1 = -(slide.height() - y2);
                if ((width*2) < slidewidth) { //zoomed image width is smaller than slide container width, restrain x dragging
                    x2 = (x2 + ((slidewidth - width*2)/2));
                    x1 = (x2);
                }
                z.draggable({
                    containment: [ x1,y1,x2,y2 ],
                    cursor: 'move'
                });
                z.show();
                t.css('display','none');
            }
            return false;
        });
    },
    hidezoomimage : function(id) {
        this.slide.find('ul.navigation:first').show();
        this.slide.find('div.tagicon').removeClass('hidebehind');
        $('#zoomimage-'+id).hide();
    },
    video : function() {

        $.getScript('http://admin.brightcove.com/js/BrightcoveExperiences.js', function(){
            enableInsertVideo();
            enableRemoveVideo();
        });

        function enableInsertVideo() {
            $('.caption .video').live('click', function(e){
                var sliderImage = $('#slider .image').filter(':visible'),
                    videoId = $(this).attr('rel'),
                    overlayTout = $('.overlaytout'),
                    videoTout = $('.overlaytout.video'),
                    aid = (parent.adFactory.params.aid) ? parent.adFactory.params.aid : '',
                    videoMarkup = '<div class="overlaytout video" style="display: block;">' +
                        '<div class="wrapper">' +
                        '<div class="toutSection">' +
                        '<div class="top">' +
                        '<p>' +
                        '<span></span>Video' +
                        '</p>' +
                        '<ul>' +
                        '<li class="close"><a href="#">Close</a></li>' +
                        '</ul>' +
                        '</div>' +
                        '<div class="imgcont">' +
                        '<object id="myExperience1292429054001" class="BrightcoveExperience">' + // By use of this code snippet, I agree to the Brightcove Publisher T and C found at https://accounts.brightcove.com/en/terms-and-conditions/.
                        '<param name="bgcolor" value="#FFFFFF" />' +
                        '<param name="width" value="525" />' +
                        '<param name="height" value="450" />' +
                        '<param name="playerID" value="1348721299001" />' +
                        '<param name="playerKey" value="AQ~~,AAAAABjSC6Q~,pGevSATpV8HktVJqV1H7Q4UMt4S7Mxvc" />' +
                        '<param name="isVid" value="true" />' +
                        '<param name="dynamicStreaming" value="true" />' +
                        '<param name="additionalAdTargetingParams" value=";aid=' + aid + '" />' +
                        '<param name="@videoPlayer" value="' + videoId + '" />' +
                        '</object>' + // End of Brightcove Player
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>';

                if (overlayTout.length != 0) {
                    overlayTout.hide();
                }

                if (videoTout.length != 0) {
                    videoTout.remove();
                    sliderImage.removeClass('overlay');
                } else {
                    sliderImage.addClass('overlay');
                    sliderImage.append(videoMarkup);
                    brightcove.createExperiences();
                }

                paginateRemoveVideo();

                e.preventDefault();
            });
        }

        function enableRemoveVideo() {
            $('#slider .video .close').live('click', function(e){
                var sliderImage = $('#slider .image').filter(':visible');

                $(this).parents('.video').remove();
                sliderImage.removeClass('overlay');

                e.preventDefault();
            });
        }

        function paginateRemoveVideo() {
            $('.navigation li.previous a, .navigation li.next a').click(function(){
                var videoTout = $('.overlaytout.video');

                if (videoTout.length != 0) {
                    videoTout.remove();
                }
            });
        }
    },
    resetslide : function(id) {
        var slide = $('#slide_'+id);
        slide.removeClass('overlay').find('span:first').removeClass('imagewrapper');
        slide.find('div.zoomtool').removeClass('zoomon');
        slide.find('div.tagicon').css('display','');
        slide.find('div.overlaytout').hide();
        this.hidezoomimage(id);
    },
    writeads : function(id) {
        if (!adFactory || adFactory.iframes.length <= 0) {return false;}
        if (typeof adFactory.srnd != 'undefined' && adFactory.srnd !== null && adFactory.srnd != '') {adFactory.srnd = null;}

        var arr = this.slides['slide_'+id];
        var s = $.inArray(this.preid+id,gallery),
            pagenumber = s+1;

        if (typeof arr != 'undefined' && arr !== null && arr != '') {
            var str = (arr.products == '') ? '' : arr.products.replace(/;personsTax:/g,'').toLowerCase(),
                celeb = (arr.products == '') ? '' : str.split(',');
            adFactory.setParam('celeb',celeb);
            adFactory.ord = (new Date()).getTime() + Math.ceil(Math.random() * Math.pow(10,16));
            adFactory.setParam('url', '0,,' + this.preid+id+',00.html');

            if (!this.celebdb) {
                adFactory.setParam('page', arr.page);
            }
            else {
                adFactory.setParam('page', pagenumber);
            }
        }

        function writeIFRAME(v) {
            var p = adFactory.iframes[v].split('|'),
                d = p[1].split(','),
                w = Number(d[0]),
                h = Number(d[1]),
                t = v+1,
                site;

            if ( String(document.location).match('peoplestylewatch.com') ) {
                site = '-sw';
            } else if ( String(document.location).match('peoplepets') ) {
                site = '-Pets';
            } else {
                site = '';
            }

            if ( tgxAds ) {
                var e = document.getElementById(p[0]),
                    targetDivChild;

                if (p[0] != 'adSponsoredBy' && p[0] != 'ad1x1') {
                    targetDivChild = document.createElement('div');
                    targetDivChild.setAttribute("class", "title");
                    targetDivChild.innerHTML = "Advertisement";
                    e.appendChild(targetDivChild);
                }

                PEOPLE.appendAdScript({ w: w, h: h, id: p[0] });
            } else {
                var iframe = '',
                    adop = (location.search != '') ? String(location.search).replace('?','')+'&amp;' : '',
                    src = '/people/static/h/ads/adFactory'+site+'.html?'+adop+'q='+p[1]+','+ t;

                if ($('#ad'+v).length > 0) {$('#'+p[0]).find('iframe').remove();}
                if (p[0] != 'adSponsoredBy' && p[0] != 'ad1x1') {iframe+='<div class="title">Advertisement</div>';}
                iframe += '<iframe id="ad'+v+'" width="'+w+'" height="'+h+'" src="'+src+'" allowtransparency="true" frameborder="0" scrolling="no"></iframe>';
                if ($.browser.mozilla) {iframe += '<iframe src="#" style="display:none;"></iframe>';}
                $('#'+p[0]).html(iframe);
            }
        }

        if ( tgxAds ) {
            if ( PEOPLE.Photo.firstload === true ) {
                if ($.browser.mozilla ) {
                    // Here is a bogus ad slot so that the real call for adSponsored|170,30 will not be aborted.
                    $('body').append('<div id="mozillaAdSlot" style="display:none;"></div>');
                    adFactory.iframes.unshift('mozillaAdSlot|2,9');
                }

                for  ( var i = 0; i < adFactory.iframes.length; i++) {
                    writeIFRAME(i);
                }
            } else {
                var ads = [];
                for  ( var i = 0; i < adFactory.iframes.length; i++) {
                    var p = adFactory.iframes[i].split('|');
                    if ( p[0] != 'mozillaAdSlot' ) {
                        ads.push(p[0]);
                    }
                }
                adFactory.refreshAds(ads);
            }
        } else {
            var current = 0,
                pause = 750,
                len = adFactory.iframes.length,
                to = setInterval(function() {
                    if (current < len) {
                        writeIFRAME(current);
                        current++;
                        pause = 0;
                    } else {
                        clearInterval(to);
                    }
                }, pause);
        }
    },
    refreshomniture : function(id) {
        var arr = this.slides['slide_'+id],
            u = String(location.href).split(',,')[0]+',,'+this.preid+id+',00.html',
            s = $.inArray(this.preid+id,gallery),
            pagenumber = s+1,
            pagename;

        if (typeof s_time.pageTitle == 'undefined') {s_time.pageTitle = s_time.pageName;} // fork for cdb galleries
        pagename = s_time.pageTitle;
        if (!this.celebdb) {
            pagename = (pagenumber==1) ? pagename : pagename+'|'+pagenumber;
        } else {
            if (pagenumber > 50) {
                var c, f, p = Number(pagenumber);
                f = (Math.floor(p/50)*50)+1;
                c = (Math.ceil(p/50)*50);
                pagenumber = f+'-'+c;
            }
            var t = s_time.pageName.split('|');
            t.pop();
            t = t.join('|');
            pagename = t+'|'+pagenumber;
        }
        if ( this.pollWithButtonsEnabled ) { s_time.eVar35 = u; }
        pagename = pagename.replace(/\|\|/,'|'); // for cdb galleries
        s_time.eVar4 = pagename;
        s_time.events = 'event1,event4';
        s_time.pageName = pagename;
        s_time.products = arr.products;
        s_time.pageURL = u;
        s_time.prop17 = u;
        s_code = s_time.t();
    },
    writeOutbrain : function(){

        var width = '660',
            height = '200',
            s = PEOPLE.Photo.getOutbrainIframeURL(width, height);

        $(document).ready(function(){
            t = '<div class="outbrain"><iframe class="google_ads" width="'+ width +'" height="'+ height +'" src="' + s + '" allowtransparency="true" frameborder="0" scrolling="no"></iframe></div>';
            $('#adBottom').append(t);
			
			width = '300';
            height = '265';
            s = PEOPLE.Photo.getOutbrainIframeURL(width, height);
			t = '<div class="outbrain"><iframe class="google_ads" width="'+ width +'" height="'+ height +'" src="' + s + '" allowtransparency="true" frameborder="0" scrolling="no"></iframe></div>';
			$('.ob_rr').append(t);
			
            PEOPLE.Photo.outbrains = $('div.outbrain iframe');
        });

    },
    refreshoutbrain : function() {
        this.outbrains.each(function(){
            //var s = $(this).attr('src');
            //console.log('s: '+s);
			
			var width = $(this).width(),
				height = $(this).height();
			

            var s = PEOPLE.Photo.getOutbrainIframeURL(width, height);
            $(this).attr('src',s);
        });
    },
    getOutbrainIframeURL : function(width, height){
        var obj = PEOPLE.Photo,
            u, url, iframeURL;

        u = location.href.split(',,')[0];
        u += ',,'+obj.preid+obj.slideid+',00.html';
		u = u.split('.people');
        var OBprodURL = 'http://www.people';
        u = OBprodURL + u[1];
        url = escape(u);

        iframeURL = '/people/static/h/ads/adFactory-outbrain.html?width=' + width + '&height=' + height + '&url=' + url;

        // if Celeb DB page, add light class to body
        if($('body#database').length){
            $('body').addClass('light');
        }

        if($('body').hasClass('light')){
            iframeURL += "&theme=light";
        } else {
            iframeURL += "&theme=dark";
        }
        //console.log('iframeURL: '+iframeURL);
        return(iframeURL);
    },
    refreshquantcast : function() {
        _qoptions={qacct:'p-5dyPa639IrgIw',event:'refresh'};
        quantserve();
    },
    refreshcomscore : function(id) {
        var u = location.protocol+'//'+location.host+this.buildjsonurl(id);
        u = 'http://b.scorecardresearch.com/b?c1=2&c2=6035728&rn='+Math.random()+'&c7='+escape(u)+'&c3=&c4=&c5=&c6=&c10=&c15=&c16=&c8=&c9=&cv=1.7';
        $('body:first').append('<img src="'+u+'" width="1" height="1" border="0" />');
        /* NEW Comscore synthesis refresh beacon */
        if ( typeof cs != 'undefined' ) {
            if (cs.enabled) {
                cs.csFireBeacon();
            }
        }
    },
    refreshit : function(id) {
        this.writeads(id);
        this.refreshomniture(id);
        this.refreshoutbrain();
        this.refreshquantcast();
        this.refreshcomscore(id);
    },
    setAdId : function(value) {
        PEOPLE.Photo.adid = value;
    },
    prepareinterstitial : function() { // called by an ad to prepare for an interstital before the next slide is displayed
        PEOPLE.Photo.navall.unbind().click(function() {
            //$('#adRight').find('iframe').css('display','none');
            PEOPLE.Photo.main.addClass('interstitial');
            PEOPLE.Photo.showinterstitial();
            return false;
        });
    },
    prepareinterstitialevery : function(clicks) {
        PEOPLE.Photo.interstitialinterval = clicks;
        PEOPLE.Photo.prepareinterstitialafter(clicks);
    },
    prepareinterstitialafter : function(clicks) {
        var clickcounter = 1;
        PEOPLE.Photo.navall.click(function() {
            if(clickcounter == clicks){
                clickcounter = 0;
                PEOPLE.Photo.prepareinterstitial();
            }
            clickcounter++;
        });
    },
    showinterstitial : function() { // if prepareinterstitial has been flagged, this will be called on request for a next slide to show the actual interstitial before the next slide is displayed, this also handles the closing of the interstitial
        if (!adFactory || adFactory.iframes.length <= 0) {return false;}
        var t = adFactory.iframes.length+2,
            site,
            adwrapper;

        if (String(document.location).match('peoplestylewatch.com')) {
            site = '-sw';
        }else if(String(document.location).match('peoplepets')) {
            site = '-Pets';
        }else{
            site = '';
        }

        if ( tgxAds ) {
            this.slider.css('height','590'); // set height of left column to be covered properly by interstitial
            adwrapper = '<div id="interstitial" class="interstitialcontainer">'
                + '<div class="iframewrapper">'
                + '<div class="navigation">'
                + '<p class="hideprevious one"></p>'
                + '<p class="hideprevious two"></p>'
                + '<ul><li class="previous"></li><li class="next"><a href="#">Next</a></li></ul>'
                + '</div>'
                + '<div class="title">Advertisement</div>'
                + '<div id="interstitial-ad"></div>'
                + '</div>'
                + '</div>';

            this.rightcolumn.append(adwrapper); // append the interstitial

            if ($.browser.mozilla ) {
                if ( $('#mozillaIntAdSlot').length == 0 ) {
                    // Here is a bogus ad slot so that the interstitial will not be aborted.
                    $('body').append('<div id="mozillaIntAdSlot" style="display:none;"></div>');
                }
                $('#mozillaIntAdSlot').html('');
                PEOPLE.appendAdScript({ w: 2, h: 9, id: 'mozillaIntAdSlot' });
            }

            PEOPLE.appendAdScript({ w: 850, h: 428, id: 'interstitial-ad', srnd: PEOPLE.Photo.adid });
        } else {
            var src = '/people/static/h/ads/adFactory'+site+'.html?q=850,428,'+t;

            if (location.href.match('testads')) {src += ';testads';}
            this.slider.css('height','590'); // set height of left column to be covered properly by interstitial
            adwrapper = '<div id="interstitial" class="interstitialcontainer">'
                + '<div class="iframewrapper">'
                + '<div class="navigation">'
                + '<p class="hideprevious one"></p>'
                + '<p class="hideprevious two"></p>'
                + '<ul><li class="previous"></li><li class="next"><a href="#">Next</a></li></ul>'
                + '</div>'
                + '<div class="title">Advertisement</div>'
                + '<iframe height="390" frameborder="0" width="100%" scrolling="no" src="'+src+'" hspace="0" vspace="0" marginheight="0" marginwidth="0" allowtransparency="yes"></iframe>'
                + '</div>'
                + '</div>';
            this.rightcolumn.append(adwrapper); // append the interstitial
        }

        $('#interstitial').find('li.next a').click(function() { // on interstitial "next" click, return everything to original settings, proceed to next slide
            this.blur();
            //$('#adRight').find('iframe').css('display','block');
            if (PEOPLE.Photo.fetching != '') {return false;}
            var obj = PEOPLE.Photo,
                url = String(window.location).split(',,')[0],
                c = $.inArray(obj.preid+obj.slideid,gallery),
                s = c+1;
            if (obj.hardrefresh) { // something snapped...
                var nextslide = s+1;
                // if next slide is undefined, show endscreen, else show next slide
                if ((nextslide < 1) || (nextslide > gallery.length)) {
                    window.location = url+',,'+obj.preid+'endscreen,00.html';					
                }else {
                    window.location = url+',,'+gallery[(s+1)]+',00.html';
                }
            } else if (s == gallery.length) { // end of gallery
                window.location = url+',,'+obj.preid+'endscreen,00.html';
            } else {
                $('#interstitial').remove();
                obj.main.removeClass('interstitial');
                obj.resetslide(obj.slideid);
                obj.hideslide(obj.slideid);
                obj.slideid = obj.replacestring(obj.preid,gallery[s]);
                obj.updatehash(obj.slideid);
                obj.getslide(obj.slideid);
                obj.fetchfiles(obj.slideid);
            }
            obj.navall.unbind(); // reset next to original functionality
            obj.clicklistener();
            if(obj.interstitialinterval){
                obj.prepareinterstitialafter(obj.interstitialinterval);
            }
            return false;
        });
    },
    galleryrecirc : function(r) {
        var name = r.name,
            site = r.site,
            id = name.replace(/\./g,'').replace(/ /g,''),
            c = ' class="show"',
            h = '';

        h += '<div id="'+id+'" class="tout">';
        h += '<p class="header"><a href="'+site+'" target="_blank"><span>'+name+'</span></a></p>';
        h += '<div class="recirclinks">';
        h += '<ul>';
        $(r.response[0]).each(function(i,li){
            if (li.title != '') {h += '<li'+c+'><a href="'+li.url+'" target="_blank">'+li.title+'</a></li>';}
            c = '';
        });
        h += '</ul>';
        h += '</div>';
        h += '</div>';
        $('#'+r.id).addClass('active').append(h);
    },
    initializeRandomRecirc : function() {
        var recircArray = {
            'recircs' : [
                {
                    'id' : 'randomRecirc',
                    'feed' : [
                        {
                            'name' : 'More From PEOPLE',
                            'json' : 'http://www.people.com/people/json/recirc/feed/0,,,00.js',
                            'callback' : PEOPLE.recirc.randomcallback,
                            'display' : 5
                        }
                    ]
                }
            ]
        };
        pushToMasterArray(recircArray);
    },
    adddraggable : function(id) {
        var s = 'http://img2-short.timeinc.net/people/static/j/photos/draggable.js';
        $.getScript(s);
    },
    addstitch : function() {
        var host = location.host.match(/dev/) ? 'dev.people.com' : 'img2-short.timeinc.net',
            s = '<scr'+'ipt type="text/javascript" src="http://' + host + '/people/static/j/photos/gallerystitch.js"></scr'+'ipt>';
        $('body:first').append(s);
    },
    paginateJumptime : function() {
        $('.navigation li.previous a, .navigation li.next a').click(function(){
            PEOPLE.Jumptime.track();
        });
    }
};

// let's get started!
$(PEOPLE.Photo.init);
// external translations
PhotoGallery.addtags = PEOPLE.Photo.addtags;
var gallerySetAdId = PEOPLE.Photo.setAdId,
    prepareinterstitial = PEOPLE.Photo.prepareinterstitial,
    prepareinterstitialafter = PEOPLE.Photo.prepareinterstitialafter,
    prepareinterstitialevery = PEOPLE.Photo.prepareinterstitialevery,
    slideResult = PEOPLE.Photo.styleFindSlideResult,
    RenderPollWithButtons = PEOPLE.Photo.renderPollWithButtons;

$(document).ready(function() {
    // For Pinterset intent
    $('ul.sharebar li.pinterest a').bind('click',PEOPLE.pinterestPopup);
});