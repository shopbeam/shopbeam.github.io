// Set ads to async mode.
var TGX_SITE_CONFIG = {
    'gpt_sync_mode': 'async'
};
var pageurl =  window.location.protocol + "//" + window.location.host + window.location.pathname;
if (pageurl.indexOf("/instyle/lookoftheday") > 0) {
    (function () {
	IS.LOTD = {
	thispagecount : '',
	previouspage : '',
	nextpage : '',
	adcount : 1, // DDM TBD remove
	init : function() {
	   
	},
	tagomniture : function () {
	    var prop_tag = s_time.prop11 + '|TAG',
	    prop_tab = s_time.prop11 + '|TAB';
	    if ( $('p.related').length > 0 )  {  
	        $('p.related').delegate('a', 'click', function(){
		    var $this = $(this),
		    title = '|' + $this.text();
		    //alert('omniture: ' + prop_tag + ' ' + title);
		    omniTrackEv( prop_tag + title );
	        });
	    }
	},
    }
    $(function() { IS.LOTD.init(); });
    })();
}
var PhotoGallery = [];
    
IS.Photo = {
    thispagecount : '',
    slides : [], // slide array
    inpage : '', // id for in-page content
    preid : '', // package and/or gallery id
    slide : '', // #slide
    infobx : '', // equiv to right column in people slideshow js
    fetching : '', // string of ids currently fetching
    fetched : '', // string of ids previously fetched
    fetchcount : 1, // instantiate, changed after initial page load
    nextslideid : '',
    prevslideid : '',
    firstload : true,
	flag : 0,
    click : 0,
    legaltext : 'InStyle receives a commission from these sales.',
    stitchslide : '',
    stitchslidelink : '',
    back : '',
    init : function (){
	IS.Photo.setTKfonts();
	//set gallery array object
	gallery = window.slideList || false;
	if(IS.LOTD){
	IS.Photo.findStitched();
	}
	var q = IS.Global.parseQueryString();
	if ( q["back"] ) {
	    $('#slidewrap #back').removeClass('nolink');
	    $('#infobxnav .btncont').removeClass('nolink');
	    IS.Photo.back = q["back"];	
	}
	$(document).ready(function() {
	    //find width of image and set tab placement and width of captionwrap
	    /*var imgfindheight = new Image();
	    function CreateDelegate(contextObject, delegateMethod){
		return function(){
			return delegateMethod.apply(contextObject, arguments);
		}
	    }
	    function imgfindheight_onload(){
	        var newwidth = (this.width);
		var compensateSmallImage = (350 - newwidth) / 2;
		document.getElementById('captionwrap').style.width = newwidth + 'px';
		document.getElementById('lotdtabs').style.left = newwidth + compensateSmallImage + 'px';
		document.getElementById('lotdtabs').style.position = 'absolute';
		document.getElementById('lotdtabs').style.bottom = 10 + 'px';
	    }
	    imgfindheight.onload = CreateDelegate(imgfindheight, imgfindheight_onload);
	    if ( $('#currentimage').length > 0 ){
		imgfindheight.src = document.getElementById('currentimage').src;
	    }*/
	    //IS.Photo.findImageSize(IS.Photo.slideid);
	    //run rest of setup functions
	if ( $('#browseceleb').length > 0 || $('#browsedesigner').length > 0 || $('#seealltrends').length > 0 ) {
	    $('#browseceleb,#browsedesigner,#seealltrends').hover(function(){
		var $this = $(this);
		$this.parent().addClass('active');
		$this.parent().parent().addClass('active');
		$this.next('ul.mega').addClass('active');
		if( $('#megablockui').length == 0 ){
		    $('body').append('<div id="megablockui"></div>').find('#megablockui').fadeIn(2000);
		    $('#megablockui').click(function(){
			$('#megablockui').remove();
			$('.active').removeClass('active');
		    });
		}
	    });
	}
	    IS.Photo.startmeup();
	});    
    },
    findImageSize : function(id) {
	$('ul#images li#slide_' + id + ' img').one('load', function() {
	    var newwidth = (this.width);
	    //alert('newwidth: ' + newwidth);
	    if ( IS.Photo.shopping === true ) {
		var compensateSmallImage = (400 - newwidth) / 2;// DDM TBD change back to 350
		$('#captionwrap').css('min-height','280px');
	    } else {
		var compensateSmallImage = (350 - newwidth) / 2; 
	    }
	    $('#captionwrap').css( 'width', newwidth + 'px');
	    $('#lotdtabs').css({
		'position' : 'absolute',
		'left' : newwidth + compensateSmallImage + 'px',
		'top':'10px'
		});
	}).each(function() {
	if(this.complete) $(this).load();
	});
    },
    startmeup : function() {
	// if the viewmore and viewlarge tabs and elements are not present then create them
	if( $('#lotdtabmore').length === 0 ){
	    $('#lotdtabs').append('<div id="lotdtabmore" class="lotdtab"></div>');
	    $('#lotdtabmore').hide();
	}
	if( $('#multi-view-wrap').length === 0 ){
	    $('#slidewrap #next').after('<div id="multi-view-wrap"><div id="imulti-view-wrap"></div></div>');
	}
	if( $('#lotdtablarge').length === 0 ){
	    $('#lotdtabs').append('<div id="lotdtablarge" class="lotdtab">');
	    $('#lotdtablarge').hide();
	}
	adFactory.setParam('page',1);
        this.inpage = this.slideid;
        if( gallery[0].match('_') ) {
            //determine if the slides use gallery_slide or just slide by looking at the first
            this.preid = (this.packageid != '') ? this.packageid + '_' : '';
            this.preid += this.galleryid + '_';
        }
	if(IS.LOTD){
	    this.galrow = $('#galrow'); 
	    this.morelook = '';
	}
        this.main = $('#maincontent');
        this.main.addClass('js');
        this.slidewrap = $('#slidewrap');
        this.images = $('#images');
	this.infobxtitle = $('#infobxtitle');
	this.infobx = $('#infobx');
	this.nextimg = $('#upnextimg a');
	this.nexttxt = $('#upnexttxt a');
        this.slideinfobx = $('#slideinfobx');
        this.credit = $('#credit');
	this.vltab = $('#lotdtablarge');
	
	
	
	this.vmtab = $('#lotdtabmore');
	this.multiviewwrap = $('#imulti-view-wrap');	
        this.captionwrap = $('#captionwrap');
        this.curslideno = $('#curslideno');
        this.textpoll = $('#textpoll');
        this.navall = $('#slidewrap #back a,#slidewrap #next a,#infobxnav .btncont a,#nextup .txtcont a,#nextup .imgcont a');
        this.navnext = $('#slidewrap #next a,#infobxnav .btncont a.border-arrow-wht-rt,#nextup .txtcont a,#nextup .imgcont a');
	this.more = $('#imorelotd');
	
	if ( this.textpoll ) {
            this.pollIds = []; 
            this.pollData = [];
            this.pollHash = {};
            this.textPoll( this.slideid );
        }
        //if ( this.multiview ) {
            // this.get360( this.slideid );
        //}
       //document.domain = 'dev.instyle.com'; 
        
        if ( IS.Photo.shopping ) {//if we're on a slideshow with shopping
            /*this.styleFindFirstView = true;
            this.styleFindFirstViewIds = [];
            this.styleFindProductsHash = {};//since we are rendering slides before they are visible, instantiate an object to use as a hash table to store value of hasProducts
            this.styleFindDiv( this.slideid );
            this.styleFindLoad( this.slideid );*/
            this.refreshshoppingomniture();//called for the first slide
        }
         /* dynamically add a 1x1 ad call to page */
        this.main.append('<div id="ad1x1"></div>');
        adFactory.iframes.push("ad1x1|1,1");
        //if (this.stitch) {this.addstitch();}
        // DDM I shut this off for dev - this.paginateJumptime();
        var hash = String(document.location).split('#')[1];
        if (!hash || hash == this.slideid) { // in-page content is correct
            this.showslide(this.slideid);
            this.getslide(this.slideid);
	}else {
	    this.hideslide(this.slideid);
            this.slideid = hash;
            this.getslide(this.slideid);
	    this.refreshomniture(this.slideid);
        }
	this.findImageSize(this.slideid);
	this.thispagecount = $.inArray(this.preid+this.slideid,gallery)+1;//TBD DDM change future $.inArray referecnes to this var to this global
	this.paged(this.thispagecount);
        this.writeads();
        this.sharebarlistener();
        this.firstload = false;
        this.main.find('.noscript').removeClass('noscript');
        this.fetchcount = 2;
        this.fetchfiles(this.slideid);
	this.checkstuff = setInterval('IS.Photo.checkhash()',500);
	this.clicklistener();
	this.getnext(this.slideid);
	this.setviewlarge();
	this.multiView(this.slideid);
	this.viewlargeomniture(this.slideid);
	if(IS.LOTD){
	    this.morelotdcheck(this.slideid);
	    //IS.LOTD.pollomniture();
	    IS.LOTD.tagomniture();
	    //IS.LOTD.socialomniture();    
	}
    },
    replacestring : function(r,f) {
      var toreplace = String(r),
      re = new RegExp( toreplace, 'gi');
      return f.replace(re,'');
    },
    addtofetching : function( id ) {
      this.fetching += id + ',';
    },
    removefromfetching : function( id ) {
	//alert('remove fetching');
      this.fetched += id + ',';
      this.fetching = this.replacestring(id + ',',this.fetching);  
    },
    fetchfiles : function(id) {
	//alert('fetch files');
        var c = $.inArray(this.preid+id,gallery),
            p, n, i, len = this.fetchcount;
        for (i = -1; ++i < len;) {
            if (gallery[c+i]) { // fetch next first
		// if first loop then set next slideid
		if (i == 1){
		    this.nextslideid = gallery[c+1];
		}
                n = this.replacestring(this.preid,gallery[c+i]);
                if (!this.fetched.match(n)){this.getslide(n);};
            };
            if (gallery[c-i]) { // then previous
		this.prevslideid = gallery[c-1];
                p = this.replacestring(this.preid,gallery[c-i]);
                if (!this.fetched.match(p)){this.getslide(p);};
            };
        };
    },
    getnext : function(id){
	var nid = this.nextslideid;
	var s = $.inArray(this.preid+this.slideid,gallery);
	if( s === (gallery.length) - 1 ){
	    //alert('at end of slide: ' + s + ' stitchslide id: ' + this.stitchslide);
	    if( $ ('#nextimg_'+ this.stitchslide ).length > 0 ){
		$ ('#upnextimg img' ).hide();
		$ ('#nextimg_'+ this.stitchslide ).fadeIn();
	    
	    }
	    if( $ ('#nexttxt_'+ this.stitchslide ).length > 0 ){
		$ ('#upnexttxt a span' ).hide();
		$ ('#nexttxt_'+ this.stitchslide ).fadeIn();
	    }   
	}else{
	    //alert('hide current: ' + id +', show next: ' + nid);
	    if( $ ('#nextimg_'+ nid ).length > 0 ){
		$ ('#upnextimg img' ).hide();
		$ ('#nextimg_'+ nid ).fadeIn();
	    
	    }
	    if( $ ('#nexttxt_'+ nid ).length > 0 ){
		$ ('#upnexttxt a span' ).hide();
		$ ('#nexttxt_'+ nid ).fadeIn();
	    }
	}
    },
    checkfetching : function() {
	//alert('check fetching');
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
	this.checkhidepoll(this.slideid);
    },
    updatehash : function(id) {
        var loc = (String(document.location).match('#')) ? String(document.location).split('#')[0] : '';
        document.location = loc+'#'+id;
    },
    buildjsonurl : function(id) {
	//alert('build json');
        //used for finding the url of the slide assets 
        var u = '/instyle/';
	if ( IS.LOTD ){
            u += 'lotd/slide/json/0,,' + id + ',00.html'; //lotd/slide/json/
	} else{
	    u += '/slide/json/0,,' + id + ',00.html'; //any other/slide/json/
	}
        return u;
    },
    hideslide : function(id) {
	//alert('hide slides');
        $('#slide_' + id + ',#credit_' + id + ',#date_' + id + ',#caption_' + id + ',#related_' + id + ',#disclaimerid_' + id + ',#summ_' + id + ',#infobxtitle_' + id + ',#viewlarger_' + id + ',#nextimg_' + id + ',#nexttxt_' + id + ',#moreviews_' + id + ',#poll_' + id + ',#more_' + id).hide(); 
	if(IS.LOTD){
	   $('#galrowtitle_'+id).hide();    
	}
	$('#facebookslide').html('');
    },
    showslide : function(id) {
	//alert( 'show slide: ' + id );
        if (typeof this.slides['slide_'+id] === 'object') {
            if (this.firstload == false) {
            this.refreshit(id);
            }
            var arr = this.slides['slide_'+id],
            s = $.inArray(this.preid+id,gallery);
            this.curslideno.text(s+1);
            document.title = IS.Global.removeHTML(arr.titlebar);
        }	
	// Sets the imgXXX class for current image to load the correct shopping CSS
	if ( $('#slide_' + id + ' a img').length ) {
	    var currentimgwidth = '';
	    // Get the width of the image in the last spot
	    currentimgwidth = $('#slide_' + id + ' a img').last().attr('width');
	    // add the imgXXX class to the LI
	    $('#slide_' + id).addClass('img'+currentimgwidth);
	}
        $('#slide_'+id+',#credit_'+id+',#date_'+id+',#caption_'+id+',#related_'+id+',#disclaimerid_'+id+ ',#summ_'+id+ ',#infobxtitle_'+id+',#viewlarger_' + id+',#nextimg_' + id+',#nexttxt_' + id +',#moreviews_' + id +',#poll_' + id +',#more_' + id).show();
	// check that the viewlarge image and the moreviews imgs are present for this slide and either show or hide them
	if ( $('#viewlarge_'+id + ' img').length > 0 ){
	    $('#lotdtablarge').show();
	    $('#viewlarger_'+id).css('display','block');
	} else{
	    $('#lotdtablarge').hide();
	}
	if ( $('#multi-view_'+id +' img').length > 0 ){
	    $('#lotdtabmore').show();
	    $('#moreviews_'+id).css('display','block');
	} else{
	     $('#lotdtabmore').hide();
	}
	if (IS.LOTD){
	 $('#galrowtitle_'+id).show();
	}
	IS.Photo.writesocial();
        this.togglenav(id);
        if( IS.Photo.shopping && typeof pswViewed != 'undefined' ) {
            pswViewed( id );//not called on first load because pswViewed is called as part of the style find request
            // DDM I shut this off for dev - IS.Photo.refreshshoppingomniture();//called for subsequent slides
        }
    },
    getslide : function(id) {
	var s = $.inArray(this.preid+this.slideid,gallery);
	if(s === (gallery.length) - 1){    
	    //alert('getslide is on last slide: '+ this.slideid + ' and check stitchedslide: ' + this.stitchslide);
	    var u = this.buildjsonurl(this.stitchslide); 
            $.ajax({
                async: false,
                url: u,
                dataType: 'html',
                success: function(result){
                  if ($('#upnext #nexttxt_'+IS.Photo.stitchslide).length) {
                        $('#upnext #nexttxt_'+IS.Photo.stitchslide).append(result);
                    } else {
                        $(IS.Photo.images).append(result);
                    }
                }
            }); 
	}
        if (this.fetching.match(id)) {
            return false;
        } else if (this.fetched.match(id)) {
            this.showslide(id);
        } else {
            this.addtofetching(id);
	    //alert('add to fetching')
            var u = this.buildjsonurl(id); 
            $.ajax({
                async: false,
                url: u,
                dataType: 'html',
                success: function(result){
                    if ($('#slide_'+id).length) {
                        $('#slide_'+id).append(result);
                    } else {
			
                        $('<li id="slide_'+id+'" class="image"></li>').appendTo(IS.Photo.images).append(result);
                    }
                },
                error: function(){
                    IS.Photo.removefromfetching(id);
                }
            });
        }	
    },
    appendslide : function(id,json) {
	//alert('append slide');
	//alert('append stitchslide: ' + IS.Photo.stitchslide);
        this.slides['slide_'+id] = json;
        this.removefromfetching(id);
        var slide = $('#slide_'+id),
            arr = this.slides['slide_'+id],
	    nextarr = this.slides['slide_'+( id + 1 )];
        if (id == this.inpage) {
			// add disclaimer
			$('#disclaimer').prepend('<span id="disclaimerid_'+id+'" class="disclaimer inpage"></span>');
			var showLegalText = '0';
			showLegalText = arr.isshoplink;
			//  add text if tagged as shopping slide
			if (showLegalText == '1') {
				var currentdisclaimer = '#disclaimerid_' + id;
				$(currentdisclaimer).append(IS.Photo.legaltext);
				$(currentdisclaimer).hide();
			}

			// show if disclaimer ID matches current slide showing
			if (id == this.slideid) {
				$(currentdisclaimer).show();
			}
			// end: add disclaimer

        } else {
            var img = arr.img,
            credit = arr.credit,
	    date = arr.date,
            caption = arr.caption,
	    seoname = arr.seoname,
	    summ = arr.shortdesc,
	    textpoll = arr.textpoll,
	    nxtimg = arr.nextimg,
	    nxttxt = arr.nexttxt,
	    viewlarge = arr.viewlarge,
	    viewlargetab = '<a href="#viewlarge_' + id + '" id="viewlarger_' + id + '" name="modal">VIEW LARGER</a>',
	    viewmore = arr.multiview,
	    viewmoretab = '<a href="" id="moreviews_' + id + '">MORE VIEWS</a>';
	    // If look of theday check for the recirc elements
	    if(IS.LOTD){
		$('<div id="more_'+id+'" class="more"></div>').appendTo(IS.Photo.more);
		this.morelook = $('#more_'+ id);
		var morelookrows = '',
		    ajaxurl = '';
		function checkmorelooks(ajaxurl){
		    $.ajax({
			url: ajaxurl,
			type: 'get',
			dataType: 'html',
			async: false,
			success: function(data) {
			    morelookrows = morelookrows + data;
			} 
		    });
		    return morelookrows;   
		}
		if(arr.celeb_recirc){
		    ajaxurl = arr.celeb_recirc;
		    checkmorelooks(ajaxurl);
		}
		if(arr.designer_recirc){
		    ajaxurl = arr.designer_recirc;
		    checkmorelooks(ajaxurl);
		}
		if(arr.trend_recirc){
		    ajaxurl = arr.trend_recirc; 
		    checkmorelooks(ajaxurl);
		}
	    }	    
            slide.prepend(img);
            this.credit.append(credit);
	    this.captionwrap.append(caption);
	    this.infobx.prepend(summ);
	    this.nextimg.append(nxtimg);
	    this.nexttxt.append(nxttxt);
	    this.slidewrap.prepend(viewlarge);
	    this.multiviewwrap.append(viewmore);
	    this.vltab.append(viewlargetab);
	    this.vmtab.append(viewmoretab);
	    this.textpoll.append(textpoll);
	    if(IS.LOTD){
		this.morelook.append(morelookrows);
	    }
	    // build galrowtitle for LOTD plain as oppossed to designer/calelb/trend or for all else in LOTD and leave galrefresh gallereis alone as title is set at gallery level
	    if(IS.LOTD.galleryType === ''){
		var infobxtitle = '<h2 id="infobxtitle_'+ id +'" class="infobxtitle">' + arr.published + '</h2>';
		this.infobxtitle.append(infobxtitle);
	    } else {
		var gallerytitle = IS.Photo.galleryname;
		this.infobxtitle.append('<h2 id="infobxtitle_' + id + '" class="infobxtitle">' + gallerytitle + '</h2>');
	    }
            // add disclaimer
	    //$('#disclaimer').prepend('<span id="disclaimerid_'+id+'" class="disclaimer notinpage"></span>');

	    //var showLegalText = '0';
	    //showLegalText = arr.isshoplink;
	    //if (showLegalText == '1') {
		//var currentdisclaimer = '#disclaimerid_' + id;
		//$(currentdisclaimer).append(IS.Photo.legaltext);
		//$(currentdisclaimer).hide();
	    //}
	    // end: add disclaimer

            if (id == this.slideid) {
		this.showslide(id);
		//$('#disclaimer_'+id).show(); // show current slide's disclaimer
	    }
        }
        // DDM removed this for dev - this.additionalcontent(id);
	if(this.textpoll){
	     this.textPoll(id);
	}
       
        /*if ( IS.Photo.shopping ) {//if we're on a slideshow with shopping
            if ( this.styleFindFirstView === true ) {
                this.styleFindFirstViewIds.push( id );
            } else {
                this.styleFindDiv( id );
                this.styleFind( id );
            }
        }*/
    },
    clicklistener : function() {
        IS.Photo.navall.click(function(){
	   // alert('click applied');
	    IS.Photo.click++;
	    var obj = IS.Photo;
	    //alert(IS.Photo.click);
	    if ( IS.Photo.click % 5 === 0 && (IS.Photo.sponsored === false || !IS.Photo.sponsored)  ) {
		IS.Photo.writeads(obj.slideid);
		//setTimeout(function(){IS.Photo.displayinterstitial(obj.slideid)},750);
		IS.Photo.displayinterstitial(obj.slideid)
		return false;
	    } else {
		if($('#interstitial').length > 0){
		    //this.main.removeClass('interstitial');
		    $('#interstitial').remove();
		    $('#slidewrap').css('height','auto');
		    $('#poll_' + obj.slideid + ',#captionwrap,#infobx').fadeIn('slow');
		    $('#slideinfobx').find('.toolbar').fadeIn('slow'); 
		}
		if (IS.Photo.fetching != '') {return false;}
		    this.blur();
		    var c = $.inArray(obj.preid+obj.slideid,gallery), //this.thispagecount,
			next = ($(this).text() == 'NEXT' || $(this).parent().attr('id') == 'upnextimg' || $(this).parent().attr('id') == 'upnexttxt') ? true : false,
			s = ( next === true ) ? c+1 : c-1,
			//interstitial = (obj.main.hasClass('interstitial')) ? true : false;
			//check if this is a landing page
			chx = (String(window.location).match(',,')) ? true : false;
		    if( !chx ) {
			var url = 'instyle.com/instyle/lookoftheday/0,,';
		    } else {
			var url = String(window.location).split(',,')[0];//'http://www.instyle.com/instyle/lookoftheday/0,,,00.html', 
		    }
		     // if at end of gallery and click next take to next gallery or begin at begining with a refresh
		    if( c === ( gallery.length ) - 1 && next === true ){
			window.location.href = IS.Photo.stitchslidelink;
			return false;
		    }
		     // add click back to previous gallery if there is one
		    if( c === 0 && next === false && IS.Photo.back !== '' ){
			window.location.href = IS.Photo.back;
			return false;
		    }
		    // hide the multi-view and the viewlarge
		    $('.multi-view,.window').hide();
		    obj.resetslide(obj.slideid);
		    obj.hideslide(obj.slideid);
		    obj.slideid = obj.replacestring(obj.preid,gallery[s]);
		    obj.paged(s+1);
		    obj.multiView(obj.slideid);
		    obj.updatehash(obj.slideid);
		    obj.getslide(obj.slideid);
		    obj.fetchfiles(obj.slideid);
		    obj.getnext(obj.slideid);
		    obj.setviewlarge();
		    obj.findImageSize(obj.slideid);
		    obj.viewlargeomniture(obj.slideid);
		    //IS.LOTD.socialomniture();
			obj.setTKfonts();
		    if(IS.LOTD){obj.morelotdcheck(obj.slideid);}
		    return false;
	    }
        });
    },
    displayinterstitial : function(id) {
	//this.main.addClass('interstitial');
	var inter = '<div id="interstitial">' +
            '<div class="centercol">' +
	    '<div class="ad"><p>ADVERTISEMENT</p>';
	    if ( tgxAds ) {
		inter = inter + '<div id="interiframewrap"></div></div><script>IS.Global.appendAdScript({ id: "interiframewrap", multi: ["300x400","300x250"] })</script>'; 
	    } else {
		inter = inter + '<div id="interiframewrap"><iframe width="300" scrolling="no" height="250" frameborder="0" src="/instyle/static/includes/ads/iframe.html?q=300x400,300x250,4&i=true" allowtransparency="true" onload="IS.Photo.sfResizeAdIframe(this,350,400);"></iframe></div></div>';
	    }
	    inter = inter + '</div>'; 
	$('#slidewrap .imgcont').append(inter);
	var interheight = $('#slidewrap .imgcont').height(),
	interheight = Number(interheight) + 55;
	if(interheight < 635){
	    interheight = 680;
	    $('#slidewrap').css('height','680px');
	}
	//alert(interheight + 'px'  );
	$('#interstitial').css('height', interheight + 'px');
	$('#poll_' + id + ',#captionwrap,#infobx').hide('slow');
    $('#slideinfobx').find('.toolbar').hide('slow');
	},
    togglenav : function(id) {
	//alert('togglenav');
        var c = $.inArray(this.preid+id,gallery),
            len = gallery.length;
        var prev = $('#main #back'),
            next = $('#main #next'),
            rightnav = this.slideinfobx.find('#infobxnav');
        if (c === 0 && this.back == '') { // previous off
            prev.addClass('nolink');
            rightnav.find('.btncont:first').addClass('nolink');
        } else { // previous on
            prev.removeClass('nolink');
            rightnav.find('.btncont:first').removeClass('nolink');
        }
    },
    sharebarlistener : function (){ //handles all requests for sharebar tool links
		if ( $('.toolbar ul li#pinitslide').length === 0 ) {
	    	$('.toolbar ul').prepend('<li id="pinitslide" class="pinterest"></li>');
		}
	this.infobx.find('.toolbar ul').find('a').unbind().click(function(){
	var obj = IS.Photo;
	if (location.href.match('#') || ! location.href.match(',,')) {
	    var u = location.href.split('#')[0];
	    u += '0,,'+obj.preid+obj.slideid+',00.html';
	} else {
	    var u = location.href.split(',,')[0];
	    u += ',,'+obj.preid+obj.slideid+',00.html';
	}
	//console.log(obj);
	var whichone = $(this).parent().attr('class');
	function toTitleCase(str){
	    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	}	
	    switch (whichone) {
		case 'twitter':
		    var vendor = 'Twitter|',
		    date = '',
		    slidetitle = '',
		    prop = (typeof s_time.prop11 === undefined) ? 'NOPROP11' : s_time.prop11;
		    if( prop == 'look of the day' ){
			// DDM removed look up of #date_id element as it was removed so am using json created slide_id object
			if($( IS.Photo.slides['slide_'+id] ).length > 0 ){
			    var arr = this.slides['slide_'+id],
			    date = arr.published,
			    slidetitle = arr.title;
			}
			date = ( date == '' )? 'NODATE' : date;
			slidetitle = ( slidetitle == '' )? 'NOTITLE' : slidetitle;
			var omninfo = vendor + '|' + prop + '|' + date + '-' + slidetitle;
		    } else {
			var gallery = ( typeof s_time.prop7 === undefined ) ? 'NOPROP7' : s_time.prop7;
			if($( IS.Photo.slides['slide_'+id] ).length > 0 ){
			    var arr = this.slides['slide_'+id],
			    slidetitle = arr.title;
			}
			    slidetitle = ( slidetitle == '' )? 'NOTITLE' : slidetitle;
			    var omninfo =  vendor + prop + '|'  + gallery + '|' + slidetitle;
		    }
		    omniTrackEv( omninfo );
		    var p7 = (typeof s_time.prop7 === undefined) ? 'NOPROP7' : s_time.prop7;
		    var galleryTitle = toTitleCase(p7);				
		    // DDM http://twitter.com/home?status=From InStyle.com: http://www.instyle.com/instyle/lookoftheday/0,,21325735,00.html
		    slidetitle = IS.Global.removeHTML(slidetitle);
		    slidetitle = slidetitle.replace(/&/, "%26");
		    u = 'http://twitter.com/intent/tweet?url='+ u +'&text=From InStyle.com: ' + galleryTitle + ' - '+slidetitle;
		    $(this).attr('href',u);
		break;
	    case 'pinterest':
		    // get slide image url
		    var mediaURL = '',
		    mediaDesc = '';
		    mediaURL = $('li#slide_'+obj.slideid+' img').attr('src');
		    mediaDesc = $('#caption_'+obj.slideid+' h2').text();
		    // end: get slide image url
		    mediaDesc = IS.Global.removeHTML(mediaDesc);
		    mediaDesc = slidetitle.replace(/&/, "%26");

		    // Convert Slide Title to Title Case
		    // mediaDesc = toTitleCase(mediaDesc);

		    u = 'http://pinterest.com/pin/create/button/?url='+u+'&media='+mediaURL+'&description='+mediaDesc;//+imageURL;
		    $(this).attr('href',u);
										
		break;
		}
        });
	if( this.firstload === true ){
	   $('#pkgSharingIcons').find('a').unbind().click(function(){
					$("#pkgSharingIcons a:first-child").removeAttr('onclick');
					var prop = (typeof s_time.prop11 === undefined) ? 'NOPROP11|' : s_time.prop11 + '-',
					omninfo = prop + 'landing|Twitter';
					omniTrackEv( omninfo );
	    });   
	}
    },
refreshPinterestButton : function(u, media, description) {
	if( IS.Photo.flag > 0 ) {
		var js, href, html, pinJs;
		var url = encodeURIComponent(u);
		media = encodeURIComponent(media);
		description = encodeURIComponent(description);
		href = '//pinterest.com/pin/create/button/?url=' + url + '&media=' + media + '&description=' + description;
		$('#pinitslide').html('<script type="text/javascript" src="//assets.pinterest.com/js/pinit.js"></script><a href="' + href + '" data-pin-config="beside" data-pin-do="buttonPin" ><img src="//assets.pinterest.com/images/pidgets/pin_it_button.png" /></a>');
	}
	var timing = ( IS.Photo.flag === 0 ) ? 3000 : 1500;
	setTimeout ( function() {
	    if ( $( '#pinitslide span' ).text().trim().length > 0 ) {
		$('#pinitslide').addClass("addcount");
	    } else{
		$('#pinitslide').removeClass("addcount");
	    }
	}, timing);
	IS.Photo.flag++;
    },
    writesocial : function(id) {
            var obj = IS.Photo,
	    lotd = IS.LOTD,
	    slidetitle = '',
	    id = obj.slideid;
	    if($( obj.slides['slide_'+id] ).length > 0 ){
		    var arr = obj.slides['slide_'+id],
		    slidetitle = arr.title;
	    } else {
		    slidetitle = ( slidetitle == '' )? '' : ' - ' + slidetitle;
	    }
	    if ( lotd && ( lotd.galleryType === 'celebrity' || lotd.galleryType === 'designer' || lotd.galleryType === 'trend' || lotd.galleryType === '' ) ){
		u = 'http://www.instyle.com/instyle/lookoftheday/',
		u += '0,,'+obj.preid+obj.slideid+',00.html';
	    } else {
		u = location.href.split(',,')[0],
		u += ',,'+obj.preid+obj.slideid+',00.html';
	    }
	    //Facebook like
	    $('#facebookslide').html('<fb:like href="' + u + '" layout="button_count" show-faces="false" font="arial" width="80" ref="fb-like" font="arial"/>');

	    if (typeof FB !== 'undefined') {
		FB.XFBML.parse(document.getElementById('facebookslide'));
	    }
	     $('#googleslide').html('<g:plusone href="' + u + '" size="medium" callback="plusClick"></g:plusone>');
	    //Google plus
	    if(typeof(gapi) !== 'undefined') {
		gapi.plusone.render(document.getElementById('googleslide'),{
		    'href':u,
		    'callback': 'plusClick',
		    'size': 'medium'
		});
	    }
	    // Twitter
	    var galleryname = (typeof obj.galleryname === undefined) ? '' : obj.galleryname;
		
	    $( document ).ready( function() {
		if ($( IS.Photo.slides['slide_'+id] ).length > 0 ) {
			var arr = IS.Photo.slides['slide_'+id],
			twittertxt = arr.alt_tag;
			twittertxt = ( typeof twittertxt === 'undefined' ) ? '' : twittertxt;
			if ( pageurl.indexOf("/instyle/lookoftheday") > 0 && IS.LOTD.galleryType === '' ) {
			    galleryname = arr.published;
			}
		}
		$('#twitterslide').html('<a href="https://twitter.com/share" data-url="' + u + '" data-text="Love this on @InStyle! - ' + galleryname + ' - ' + twittertxt + '" class="twitter-share-button" data-lang="en">Tweet</a>');
	    });
	    
	    //$('#twitterslide').html('<a href="https://twitter.com/share" data-url="' + u + '" data-text="Love this on @InStyle! - ' + galleryname + ' - ' + slidetitle + '" class="twitter-share-button" data-lang="en">Tweet</a>');
	    //remove and add twitter js
	    var twttrJs = $('script[src*="https://platform.twitter.com/widgets.js"]');
	    twttrJs.remove();
	    $.getScript("https://platform.twitter.com/widgets.js");
	    // Pinterest
	    $(document).ready(function() {
		if ( typeof obj.slides[ 'slide_'+ obj.slideid ] !== 'object' ) {
			var media = $('li#slide_'+ obj.slideid +' img').attr('src'),
			galleryTitle = IS.Photo.galleryname;
			description =  galleryTitle + ' - ' + $('h3#infobxtitle_' + obj.slideid ).text();
		} else {
			var media = obj.slides[ 'slide_'+ obj.slideid ].pinitimg,
			description = obj.slides[ 'slide_'+ obj.slideid ].pinitdesc;
			chxpinit = obj.slides[ 'slide_'+ obj.slideid ].pinit;
			if ( chxpinit === false || typeof chxpinit === 'undefined' ) { $('#pinitslide').hide(); } else{ $('#pinitslide').show(); }
		}
		obj.refreshPinterestButton(u,media,description);
	    });
    },
    resetslide : function(id) {
	//alert('reset slide');
        var slide = $('#slide_'+id);
	// DDM do stuff to reset slide
        //slide.find('div.zoomtool').removeClass('zoomon');
        //this.hidezoomimage(id);
    },
    writeads : function(id) {
        if (!adFactory || adFactory.iframes.length <= 0) {return false;}
        if (typeof adFactory.srnd != 'undefined' && adFactory.srnd !== null && adFactory.srnd != '') {adFactory.srnd = null;}
	var arr = this.slides['slide_'+id];
        if (typeof arr != 'undefined' && arr !== null && arr != '') {
            //var str = (arr.products == '') ? '' : arr.products.replace(/;personsTax:/g,'').toLowerCase(),
           // celeb = (arr.products == '') ? '' : str.split(',');
           // adFactory.setParam('celeb',celeb);
            adFactory.ord = (new Date()).getTime() + Math.ceil(Math.random() * Math.pow(10,16));
            adFactory.setParam('url', '0,,' + this.preid+id+',00.html');
            adFactory.setParam('page',IS.Photo.thispagecount);
	    adFactory.setParam('aid',IS.Photo.slideid);
        }
        function writeIFRAME(v) {
            var p = adFactory.iframes[v].split('|'),
            d = p[1].split(','),
            w = Number(d[0]),
            h = Number(d[1]),
            t = v+1,
            iframe = '',
            adop = (location.search != '') ? String(location.search).replace('?','')+'&amp;' : '';
	    if ( tgxAds ) {
		if( d[0].match('x') ){
		    var multiArr = new Array();
		    multiArr = p[1].split(',');
		}
	    
		var e = document.getElementById(p[0]),
		targetDivChild;
		
		if ( p[0] != 'adSponsoredBy' && p[0] != 'ad1x1' ) {
				targetDivChild = ( p[0] == 'ifad300x250-right' ) ? "<span class='title'>Advertisement</span><div id='innerdiv' class='content'></div>" : "<span class='title'>Advertisement</span>";
				$(e).append(targetDivChild);
		}
                if( p[0] == 'ifad300x250-right' ){
		    p[0] = 'innerdiv';
		    var index = $.inArray('ifad300x250-right|300x600,300x250', adFactory.iframes);
		    adFactory.iframes[index] = 'innerdiv|300x600,300x250';
		}
		//check for multiArr and if multi ad present then send it else use h and w
		( typeof multiArr !== 'undefined' && multiArr !== '') ? IS.Global.appendAdScript({ id: p[0], multi: multiArr }) : IS.Global.appendAdScript({ w: w, h: h, id: p[0] });
	    } else {
		if( d[0].match('x') ){
		    var splitExpanderArr = d[1].split('x');
		    w = Number(splitExpanderArr[0]);
		    h = Number(splitExpanderArr[1]);
		}
		//DDM changed this html file to the InStyle includes/ads folder
		src = '/instyle/static/includes/ads/iframe.html?'+adop+'q='+p[1]+','+t;// moved to local address to test so restore: /instyle/static/includes/ads/
		if ($('#ad'+v).length > 0) {$('#'+p[0]).find('iframe').remove();}
		if ( p[0] === 'ifad300x250-right' ) {iframe+='<p>Advertisement</p><div style="width:300px;margin:0 auto;">';}
		iframe += '<iframe id="ad'+v+'" width="'+w+'" height="'+h+'" src="'+src+'" allowtransparency="true" frameborder="0" scrolling="no"';
		if ( p[0] === 'ifad300x250-right' ) {iframe += ' onload="IS.Photo.sfResizeAdIframe(this,350,600);"';}
		iframe += '></iframe>';
		if ($.browser.mozilla) {iframe += '<iframe src="#" style="display:none;"></iframe></div>';}
		$('#' + p[0]).html(iframe);
	    }
	}
	if ( tgxAds ) {
		if ( IS.Photo.firstload === true ) {
			if ($.browser.mozilla ) {
				// Here is a bogus ad slot
				$('body').append('<div id="mozillaAdSlot" style="display:none;"></div>');
				adFactory.iframes.unshift('mozillaAdSlot|2,9');

			}

			for  ( var i = 0; i < adFactory.iframes.length; i++) {
				writeIFRAME(i);
			}
		} else {
			var ads = new Array();
			for  ( var i = 0; i < adFactory.iframes.length; i++) {
				var p = adFactory.iframes[i].split('|');
				ads.push(p[0]);
			}
			adFactory.refreshAds(ads);
		}
		
        } else {
		// loop through ads
		var current = 0,
		pause = 0,
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
	date = arr.published,
	title = arr.title;
       //pagenumber = s+1,
	//pagename;
	if(!arr.products){s_time.products = 'NOPRODUCTS';}
	s_time.products = arr.products;
	s_time.prop17 = u;
	if( typeof s_time.pageName === undefined ) {
	    s_time.pageName = 'NOPAGENAME';
	} else {
	    s_time.pageName = 'instyle|' + s_time.prop16 + '|' + s_time.prop11;
	}
	s_time.pageTitle = s_time.pageName + '|' + date + '|' + title;
	s_time.pageName = s_time.pageName + '|' + title + '|' + date + '-' + title;
	s_code = s_time.t();
	/*pagename = s_time.pageTitle;
        pagename = (pagenumber==1) ? pagename : pagename+'|'+pagenumber;
	s_time.eVar4 = pagename;
        s_time.events = 'event1,event4';
        s_time.pageName = pagename;
        s_time.products = arr.products;
        s_time.pageURL = u;
        s_time.prop17 = u;*/
	
		
       /* if ( this.pollWithButtonsEnabled ) { s_time.eVar35 = u; }
        s_time.eVar4 = pagename;
        s_time.events = 'event1,event4';
        s_time.pageName = pagename;
        s_time.products = arr.products;
        s_time.pageURL = u;
        s_time.prop17 = u;
        s_code = s_time.t(); */
    },
    refreshshoppingomniture : function() {
        var s=s_gi(s_account)
        s_time.linkTrackVars = "events,eVar18,eVar19"
        s_time.linkTrackEvents = s_time.events = "event47"
        s_time.eVar18 = IS.Photo.galleryid + "|" + IS.Photo.slideid + "|" + $('#headline h1').text() + "|" + $('#caption_' + IS.Photo.slideid + ' h4').text();
        s_time.eVar18 = _oChr(s_time.eVar18); // Omniture function for

        if(s_time.products){
            var productsa = s_time.products.split(','),
                productsb = new Array();
            for(i=0; i<productsa.length; i++){
                if(productsa[i] != ''){
                    productsb[i] = productsa[i].replace(';personsTax:','');
                }
            }
            s_time.eVar19 = productsb.join('|');
        } else {
            s_time.eVar19 = '';
        }

        s_time.tl(this,"o","LinkTrack: shopping")
        s_time.eVar18 = s_time.eVar19 = s_time.events = ""
        s_time.linkTrackVars = s_time.linkTrackEvents = "None"
    },
    viewlargeomniture : function(id){
	if ( $( '#viewlarger_' + id ).length > 0 )  {  
	    $( '#viewlarger_' + id ).click( function(){
		var $this = $(this),
		title = '|' + $this.text();
		if(typeof s_time.prop11 != undefined){
		    var prop_tab = s_time.prop11 + '|TAB';
		}else{
		    var prop_tab = NOPROP + '|TAB';
		}
		//alert('omniture: ' + prop_tab + ' ' + title);
		omniTrackEv( prop_tab + title );
	    });
	}
    },
    refreshcomscore : function(id) {
	//refresh comscore
        var u = location.protocol+'//'+location.host+this.buildjsonurl(id);
        u = 'http://b.scorecardresearch.com/b?c1=2&c2=6035728&rn='+Math.random()+'&c7='+escape(u)+'&c3=&c4=&c5=&c6=&c10=&c15=&c16=&c8=&c9=&cv=1.7';
        $('body:first').append('<img src="'+u+'" width="1" height="1" border="0" />');
	// DDM new comscore code as of 4.4.13
         if ( typeof cs != 'undefined' ) {
                if (cs.enabled) { cs.csFireBeacon(); }
        }
    },
    refreshit : function(id) {
        this.writeads(id);
        this.refreshomniture(id);
        this.refreshcomscore(id);
    },
    addstitch : function() {
        var s = '<scr'+'ipt type="text/javascript" src="gallerystitch.js"></scr'+'ipt>';
        $('body:first').append(s);
    },
    paginateJumptime : function() {
        $('.navigation li.previous a, .navigation li.next a').click(function(){
            PEOPLE.Jumptime.track();
        });
    },
    setviewlarge : function() {
    //select all the a tag with name equal to modal
	$('a[name=modal]').click(function(e) {
		//Cancel the link behavior
		e.preventDefault();
		//Get the A tag
		var id = $(this).attr('href');
		//transition effect
		$(id).fadeIn(1800); 
     
	});
	//if close button is clicked
	$('.window,.window .close').click(function (e) {
		//Cancel the link behavior
		e.preventDefault();
		$('.window').fadeOut(2000);
	});
    },
    paged : function(s) {
	//alert('inside paged function paged: ' +s);
	var slidetitle = $( 'h3#infobxtitle_' + IS.Photo.slideid ).text();
	//alert('h3#infobxtitle_' + IS.Photo.slideid);
	var jsonLength = gallery.length;
	var months = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
	var currentDate = new Date();
	var day = currentDate.getDate();
	var monthindex = currentDate.getMonth();
	var month = months[monthindex];
	var year = currentDate.getFullYear();
	var todaydate = month + " " + day + ", " + year;
	$('#infobxpaged').html( s + ' of ' + jsonLength );
	$('#infobxpaged').css('text-indent','0px');
	if( typeof IS.LOTD ){
	    if( s < 6 && todaydate === slidetitle){
	    //change title to "Today's Looks"
	 	$('h3#infobxtitle_' + IS.Photo.slideid).text("Today's Looks");
	    }
	}
	this.thispagecount = s;
	
    },
    multiView : function(id){
	if ( $('#multi-view_' + id).length > 0 )  {
	    $('#multi-view_' + id).delegate('img', 'click', function(){
		var $this = $(this),
		imageurl = $this.attr('data-alt');
		imagelrgurl = $this.attr('data-alt-lrg');
		$('#multi-view_' + id + ' img.active').removeClass('active');
		$this.addClass('active');
		$('#slidewrap .imgcont #slide_' + id + ' img').attr('src', imageurl);
		$('#viewlarge_' + id + ' img').attr('src', imagelrgurl);
		return false;
	    });
	}
	if ( $('#multi-view_' + id + ' #plustoggle').length > 0 )  {
	    $('#multi-view_' + id + ' #plustoggle').click( function() {
		$('#multi-view_' + id).fadeOut();
		return false;
	    });
	}
	if ( $( '#lotdtabmore a#moreviews_' + id ).length > 0 )  {
	    $( '#lotdtabmore a#moreviews_' + id ).click( function(e) {
		//Cancel the link behavior
		e.preventDefault();
		var $this = $(this);
		if(typeof s_time.prop11 != undefined){
		    prop_tab = s_time.prop11 + '|TAB';
		}else{
		    prop_tab = NOPROP + '|TAB';
		}
		var title = '|' + $this.text();
		//alert('omniture: ' + prop_tab + ' ' + title);
		omniTrackEv( prop_tab + title );
		$('#multi-view_' + id).fadeIn();
		return false;
	    });
	}
    },
    morelotdcheck : function( id ) {
	// reset css styles for all recirc touts
	$('#morelotd ul li').css('display','inline');
	$('#morelotd ul li.last').css('display','none');
	// if the slide in the more list matches thecurrent slide of the slideshow hide it and show the extra 5th slide
	for (i=1;i<=3;i++){
	    if( $('#morelotd #more_' + id + ' ul li#tout' + i + id + '.last').length === 0 && $('#morelotd #more_' + id + ' ul li#tout' + i + id).length > 0 ) {
		$('#morelotd #more_' + id + ' ul li#tout' + i + id).css('display','none');
		$('#morelotd #more_' + id + ' ul#row' + i +' li.last').css('display','inline');
	    }
	}
    },
    sfResizeAdIframe : function(iframeElement,resizeIframeMaxWidth,resizeIframeMaxHeight) {
	var scrollWidth=iframeElement.contentWindow.document.body.scrollWidth;
	var scrollHeight=iframeElement.contentWindow.document.body.scrollHeight;
	if ( scrollWidth > resizeIframeMaxWidth ) {
	    scrollWidth=resizeIframeMaxWidth;
	}
	if ( scrollHeight > resizeIframeMaxHeight ) {
	    scrollHeight=resizeIframeMaxHeight;
	}
	iframeElement.width=scrollWidth;
	iframeElement.height=scrollHeight;
    },
    textPoll : function(resourceid) { //textPoll
        var BASE_URL = 'http://profiles.instyle.com/brands/InStyle/sections/Polls/articles/';

        this.pollIds.push(resourceid);

        function getPoll() {
            var url = BASE_URL + resourceid + '/polls?add_document_domain=true&callback=IS.Photo.RenderPoll';

            $.ajax({
                url: url,
                dataType: 'script',
                async: false
            });
        }

        function bindEvents() {
	    
	    if ( $('li#poll_' + resourceid ).hasClass('default') ){
		$('li#poll_' + resourceid + ' ul li').live('click', function(e){
		    var $this = $(this);
		    if ( $this.find("[type='radio']").length > 0 ){
			var votes = $this.find("[type='radio']").attr('data-votes');
			var selected = $this.find("[type='radio']").first().prop("checked", true);
			IS.Poll.show_share( resourceid );
			tracking( selected );
			showResults( selected, votes );
			submitPoll( selected );
			$this.addClass('clicked-once');
			/*var selectedid = $this.find("[type='radio']").attr('id');
			var votes = $this.find("[type='radio']").attr('data-votes');
			document.getElementById(selectedid).checked = true;
			//var truefalse = document.getElementById(selectedid).checked;
			var el = document.getElementById(selectedid);
			var el = $(el);
			IS.Poll.show_share(resourceid);
			showResults( el, votes );
			tracking( el );
			submitPoll( el );
			$this.addClass('clicked-once');*/
			//var answertext = $('#pollwrap #' + selectedid).next().text(),
			//slidetitle = $('#caption h2').first().text(),
			//title_answer = slidetitle + '-' + answertext,
			//slidedate = $('#caption .date').text() + 'POLL',
			//prop_date = s_time.prop11 + '-' + slidedate;
			//omniTrackEv( prop_date + title_answer );
		    }
		});
	    } else {
		setTimeout( function() {
		    $( '#poll_' + resourceid + ' input[type=submit]' ).click( function(e){
			e.preventDefault();
			$( '#poll_' + resourceid + '_errors' ).html( '<div class="poll_errors">Please make a selection before voting.</div>' );
		    });
		}, 5000 );
		
		$('#poll_' + resourceid + ' input[type=radio]').live('click', function(e){
		    $('#poll_' + resourceid + ' input[type=submit]' ).off('click');
		    $('#poll_' + resourceid + '_errors').html('');
		    var $this = $(this),
		    votes = $this.attr('data-votes');
		    $('#poll_' + resourceid + ' input[type=submit]' ).click( function(e){
			e.preventDefault();
			IS.Poll.show_share(resourceid);
			tracking( $this );
			showResults( $this, votes );
			submitPoll( $this );
		    });	
                    $this.addClass('clicked-once');
		});	
	    }
        }
	
        function tracking( el ) {
	    var id = el.data('item'),
	    answer = el.next('span').find('label').text();
	    // DDM the #date_id element was taken out 5.15.13 due to new design so no longer present I have to look up the date in the json created slide object
	    if($( IS.Photo.slides['slide_'+id] ).length > 0 ){
		    var arr = IS.Photo.slides['slide_'+id],
		    date = arr.date,
		    date = $(date).text();
	    }else{
		    var date = 'NODATE';
	    }
	    if($( '#caption_' + id + ' h2' ).length > 0 ){
		    var slidetitle = $( '#caption_' + id + ' h2' ).text();
	    }else{
		    var slidetitle = 'NOTITLE';
	    }
	    if(typeof s_time.prop11 != undefined){
		    var prop = s_time.prop11;
	    }else{
		    var prop = 'NOPROP';
	    }
	    //alert('omniture: ' + prop + '-poll|' + answer + '|' + date + '-' + slidetitle );
	    omniTrackEv( prop + '-poll|' + answer + '|' + date + '-' + slidetitle );
	    //console.log(id + slidedate + slidetitle + prop_date + votetitle);
           /*if ( el.hasClass('love-it') ) {
                omniTrackEv('love-it');
            } else if ( el.hasClass('leave-it') ) {
                omniTrackEv('leave-it');
            }*/
        }

        function submitPoll( el ) {
            var itemId = el.attr('data-item'),
                question = el.attr('data-question'),
                poll = el.attr('data-poll'),
                answer = el.attr('data-answer'),
                votes = el.attr('data-votes'),
                vote_url = BASE_URL + itemId + '/polls/' + poll + '/vote?add_document_domain=true',
                results = '<form id="submitform_' + itemId + '" action="' + vote_url + '" target="submitiframe_' + itemId + '" method="post" name="submitform_' + itemId + '" class="submitform">' +
                    '<fieldset>' +
                    '<input name="poll[votes][]" value="' + answer + '">' +
                    '<input name="question_' + question + '" value="' + answer + '">' +
                    '</fieldset>' +
                    '</form>' +
                    '<iframe id="submitiframe_' + itemId + '" name="submitiframe_' + itemId + '"></iframe>';
            $('li#poll_' + itemId).after( results );
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
	    //var  parentSiblings = parent.siblings('li'),
	    //siblings =  parentSiblings.find('input[type=radio]');
           // el.removeClass('active');
            //siblings.removeClass('active');
        }

        function showResults( el, votes ) {
	    var id = el.data("item"),			
	    // var id = el[0].dataset['item'],
	    parent = el.parent('li'),
	    parentSiblings = parent.siblings('li'),
	    sibling =  parentSiblings.find('input[type=radio]'),
	    answertext = $(parent).find('label').text(),
	    totalVotes,
            percentage,
            siblingPercentage,
	    thisSiblingVote,
	    thisSiblingPercentage,
	    thisSiblingText,
	    count = sibling.length,
	    siblingVotes = '',
	    siblingVote = '';
	    if($('#poll_' + id).hasClass('default')){
		$('#poll_' + id).removeClass('default');
	    }
	    for(i=0; i<count; i++) {
		siblingVote = sibling[i].getAttribute('data-votes');
		siblingVotes = Number(siblingVotes) + Number(siblingVote);
	    }	     
            votes++;
            totalVotes = parseInt(votes) + parseInt(siblingVotes);
            percentage = Math.round( ( parseInt(votes) / totalVotes ) * 100 );
	    for(i=0; i<count; i++) {		
		thisSiblingVote = sibling[i].getAttribute('data-votes');
		thisSiblingPercentage = Math.round( ( parseInt(thisSiblingVote) / totalVotes ) * 100 );
		thisSiblingText = $(parentSiblings[i]).find('label').text();
		$(parentSiblings[i]).html( '<span class="answer_percentage">' + thisSiblingPercentage + '%</span>'
					  + '<div class="barframe"><div class="bar" style="width:' + thisSiblingPercentage + '%;"></div></div>'
					  + '<span class="choice_name">'+ thisSiblingText +'</span>');
		$(parentSiblings[i]).css('border','none'); 
	    }
            $(parent).html( '<span class="answer_percentage">' + percentage  + '%</span>'
			    + '<div class="barframe"><div class="bar" style="width:' + percentage + '%;"></div></div>'
			    + '<span class="choice_name">'+ answertext +'</span>' );
	    $(parent).css('border','none'); 
        }

        document.domain = 'instyle.com';
        Poll.init({base_url: "http://profiles.instyle.com", brand: "InStyle", section: "Polls", article: resourceid, data_url: "http://www.instyle.com/instyle/poll/lotd/json/0,,"+resourceid+",00.js"});
        Poll.render_polls();
        getPoll();
        bindEvents();
    },
    RenderPoll : function(pollData) {
        IS.Photo.pollData.push(pollData);

        for ( var i = 0; i < IS.Photo.pollIds.length; i++ ) {
            var pollIdsIndexed = IS.Photo.pollIds[i],
                pollDataIndexed = IS.Photo.pollData[i];

            if ( !IS.Photo.pollHash[ pollIdsIndexed ] ) {
                IS.Photo.pollHash[ pollIdsIndexed ] = pollDataIndexed;
                IS.Photo.injectTextPoll( pollIdsIndexed );
            }
        }
    },
    injectTextPoll : function(id) {
	var BASE_URL = 'http://profiles.instyle.com/brands/InStyle/sections/Polls/articles/';
        var pollData = IS.Photo.pollHash[id];

        if ( typeof pollData != 'undefined' ) {
            var itemId = id,
                questions = pollData[0].questions[0],
                pollId = questions.poll_id,
                questionId = questions.id,
		questionText = questions.text,
                answers = questions.answers,
                vote_url = BASE_URL + itemId + '/polls/' + pollId + '/vote?add_document_domain=true',
		polltoggle = '<p class="polltoggle">-</p>',
		polltop = '<form method="post" action="' + vote_url + '" onsubmit="IS.Poll.show_share(' + itemId + ');" return false;" id="poll_form_' + itemId + '"><div id="poll_' + itemId + '_errors"></div>',
                paragraph = '<p class="poll_question">' + questionText + '</p>',
                pollfoot = '<p id="poll-foot"></p>',
		count = answers.length,
		answerMarkup =	'';
		for ( i = 0; i < count; i++ ) {
		    //<li><input type="radio" class="radio" name="question_40398" id="answer_70851" value="70851"><span class="poll_txt"><label for="answer_70851">Like It</label></span> </li>
		    answerMarkup += '<li><input type="radio" class="radio" name="question_' + questionId + '" id="answer_' + answers[i].id + '" value="' + answers[i].id + '" data-item="' + itemId +'" data-answer="' + answers[i].id + '" data-question="' + questionId + '" data-poll="' + pollId + '" data-votes="' + answers[i].vote_count + '"><span class="poll_txt"><label for="answer_' + answers[i].id + '">' + answers[i].text + '</label></span></li>';
		}
		
		var voteMarkup = polltoggle + paragraph + polltop + '<div class="pollmore"><ul>' + answerMarkup + '</ul><input type="submit" value="VOTE" class="vote-button btn-grey"></div></form>',
                container = $('#poll_' + itemId + ' .pollwrap');
		container.append( voteMarkup );
		container.after( pollfoot );
        }
	IS.Photo.polltoggle(id);
    },
    polltoggle : function(id) {
	$('li#poll_' + id + ' .polltoggle').click(function() {
	    $(".pollmore").slideToggle();
	    $(this).toggleClass("active");
	    return false;
	});
    },
    findStitched : function() {
	var galleryTypeIs = IS.LOTD.galleryType,
	    url,
	    type;
	switch (galleryTypeIs){
	    case '':
		//type_url = '/instyle/lotd/json/0,,,00.js';
		var next = gallery[0];
		IS.Photo.findstitchslide(next);
		break;
	    case 'designer':
		url = '/instyle/static/includes/galleries/endeca_lotd.js';
		$.getJSON( url, function( data ) {
		    var jsonLength = data.brand_dim.length; 
		    for ( i=0; i < jsonLength; i++ ){
			var n = Number(i) + 1,
			next = '',
			name = data.brand_dim[i].seo_friendly_brand ;
			if ( name == IS.LOTD.seoName && data.brand_dim[n].seo_friendly_brand !== undefined){  
			    next = data.brand_dim[n].seo_friendly_brand;
			    IS.Photo.findstitchslide(next); 
			} else if (name == IS.LOTD.seoName && dataItem[n].seo_friendly_brand === undefined) {
			    next = data.brand_dim[0].seo_friendly_brand;
			    IS.Photo.findstitchslide(next);
			}
		    }
		});
		break;
	    case 'celebrity':
		url = '/instyle/static/includes/galleries/endeca_lotd.js';
		$.getJSON( url, function( data ) {
		    var jsonLength = data.celebrity_dim.length; 
		    for ( i=0; i < jsonLength; i++ ){
			var n = Number(i) + 1,
			next = '',
			name = data.celebrity_dim[i].seo_friendly_celebrity;
			if ( name == IS.LOTD.seoName && data.celebrity_dim[n].seo_friendly_celebrity !== undefined ){
			    next = data.celebrity_dim[n].seo_friendly_celebrity;
			    IS.Photo.findstitchslide(next); 
			} else if ( name == IS.LOTD.seoName && data.celebrity_dim[n].seo_friendly_celebrity === undefined ) {
			    next = data.celebrity_dim[0].seo_friendly_celebrity;
			    IS.Photo.findstitchslide(next);
			}
		    }
		});
		break;
	    case 'trend':
		url = '/instyle/lotd/trendslist/0,,,00.js';
                $.getScript( url, function( data ) {
                    var jsonLength = slideList.length; 
                    // DDM look for current seo-friend
                    for ( i=0; i < jsonLength; i++ ){
                        var n = Number(i) + 1,
			trend = slideList[i],
			next = '';
                        if (trend == IS.LOTD.seoName && slideList[n] !== undefined ) {
			    next = slideList[n];
			    IS.Photo.findstitchslide(next);
                        } else if (trend == IS.LOTD.seoName && slideList[n] === undefined ){
                            next = slideList[0];
			    IS.Photo.findstitchslide(next);
			}
                    }
                });    
		break;
	}
    },
    findstitchslide : function (next) {
	//alert('findstitchslide: ' + next);
	var galtype = IS.LOTD.galleryType,
	stitchurl;
        if ( IS.LOTD && IS.LOTD.galleryType !== ''){
            galtype = '/' + IS.LOTD.galleryType,
	    stitch_url = '/instyle/lotd' + galtype + '/json/0,,' + this.preid + next + ',00.js';
	} else if( IS.LOTD ){
	    //alert('stitch url: ' + stitch_url);
	    stitch_url = '/instyle/lotd/json/0,,' + this.preid + next + ',00.js';
	} else {
	    //DDM TBD if not LOTD lets do the stitching later
	    return false;
	}
	$.getScript( stitch_url, function( data ) {
	    // console.log(data);
	    var obj = IS.Photo,
	    url =  window.location.protocol + "//" + window.location.host + window.location.pathname;
	    obj.stitchslide = slideList[0];
	    //alert( 'stitchslide' + obj.stitchslide);
	    if ( IS.LOTD && IS.LOTD.galleryType !== ''){
		//var linkurl = '/instyle/lookoftheday' + galtype + '/0,,' + obj.stitchslide + ',00.html',
		IS.Photo.stitchslidelink = '/instyle/lookoftheday' + galtype + '/0,,' + next + ',00.html?back=' + url;//'/instyle/lotd/slide/json/1,,' + stitchslide + ',00.js';
	    //alert( linkurl + ' ' + stitchslideurl );
	    }else if ( IS.LOTD ){
		//var linkurl = '/instyle/lookoftheday' + galtype + '/0,,' + obj.stitchslide + ',00.html',
		IS.Photo.stitchslidelink = '/instyle/lookoftheday/' + obj.stitchslide + ',00.html?back=' + url;//'/instyle/lotd/slide/json/1,,' + stitchslide + ',00.js';
	    }else{
		IS.Photo.stitchslidelink = '/instyle/something_else/' + obj.stitchslide + ',00.html?back=' + url;
		//alert(stitchslideurl);
	    }
            /*$.ajax({
                async: false,
                url: stitchslideurl ,
                dataType: 'html',
                success: function(result){
                        console.log(result);
                }
	    });*/
        });
    },
    checkhidepoll : function(id){
	var fetchedarray = IS.Photo.fetched.split(','),
	count = fetchedarray.length - 1;
	for(i = 0; i < count; i++){
	    if(id !==  fetchedarray[i]){
		$('#poll_' + fetchedarray[i]).hide();
	    }
	}
	$('#poll_' + id).show();
    },
    setTKfonts : function() {
	$('#pageheader h2').addClass('tk-freight-sans-pro');
	if ( IS.Photo.firstload !== false ){
	    $.getScript("//use.typekit.net/pct7cup.js", function(data) {
		try{Typekit.load();}catch(e){}
	    });
	}
    }
}

$(IS.Photo.init);

/*
*
* jQuery listnav plugin
* Copyright (c) 2009 iHwy, Inc.
* Author: Jack Killpatrick
*
* Version 2.1 (08/09/2009)
* Requires jQuery 1.3.2, jquery 1.2.6 or jquery 1.2.x plus the jquery dimensions plugin
*
* Visit http://www.ihwy.com/labs/jquery-listnav-plugin.aspx for more information.
*
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*
*/

(function($) {
	$.fn.listnav = function(options) {
		var opts = $.extend({}, $.fn.listnav.defaults, options);
		var letters = ['_', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '-'];
		var firstClick = false;
		opts.prefixes = $.map(opts.prefixes, function(n) { return n.toLowerCase(); });

		return this.each(function() {
			var $wrapper, list, $list, $letters, $letterCount, id;
			id = this.id;
			$wrapper = $('#' + id + '-nav'); // user must abide by the convention: <ul id="myList"> for list and <div id="myList-nav"> for nav wrapper
			$list = $(this);

			var counts = {}, allCount = 0, isAll = true, numCount = 0, prevLetter = '';

			function init() {
				$wrapper.append(createLettersHtml());

				$letters = $('.ln-letters', $wrapper).slice(0, 1); // will always be a single item
				if (opts.showCounts) $letterCount = $('.ln-letter-count', $wrapper).slice(0, 1); // will always be a single item

				addClasses();
				addNoMatchLI();
				if (opts.flagDisabled) addDisabledClass();
				bindHandlers();

				if (!opts.includeAll) $list.show(); // show the list in case the recommendation for includeAll=false was taken

				// remove nav items we don't need
				//
				if (!opts.includeAll) $('.all', $letters).remove();
				if (!opts.includeNums) $('._', $letters).remove();
				if (!opts.includeOther) $('.-', $letters).remove();

				$(':last', $letters).addClass('ln-last'); // allows for styling a case where last item needs right border set (because items before that only have top, left and bottom so that border between items isn't doubled)
				
				if ($.cookie && (opts.cookieName != null)) {
					var cookieLetter = $.cookie(opts.cookieName);
					if (cookieLetter != null) opts.initLetter = cookieLetter;
				}

				// decide what to show first
				//
				if (opts.initLetter != '') {
					firstClick = true;
					$('.' + opts.initLetter.toLowerCase(), $letters).slice(0, 1).click(); // click the initLetter if there was one
				}
				else {
					if (opts.includeAll) $('.all', $letters).addClass('ln-selected'); // showing all: we don't need to click this: the whole list is already loaded
					else { // ALL link is hidden, click the first letter that will display LI's
						for (var i = ((opts.includeNums) ? 0 : 1); i < letters.length; i++) {
							if (counts[letters[i]] > 0) {
								firstClick = true;
								$('.' + letters[i], $letters).slice(0, 1).click();
								break;
							}
						}
					}
				}
			}

			// positions the letter count div above the letter links (so we only have to do it once: after this we just change it's left position via mouseover)
			//
			function setLetterCountTop() {
				$letterCount.css({ top: $('.a', $letters).slice(0, 1).offset({ margin: false, border: true }).top - $letterCount.outerHeight({ margin: true }) }); // note: don't set top based on '.all': it might not be visible
			}

			// adds a class to each LI that has text content inside of it (ie, inside an <a>, a <div>, nested DOM nodes, etc)
			//
			function addClasses() {
				var str, firstChar, firstWord, spl, $this, hasPrefixes = (opts.prefixes.length > 0);
				$($list).children().each(function(){
					$this = $(this);
					$this.children().each(function() {
						$this = $(this), firstChar = '', str = $.trim($this.text()).toLowerCase();
						if (str != '') {
							if (hasPrefixes) {
								spl = str.split(' ');
								if ((spl.length > 1) && ($.inArray(spl[0], opts.prefixes) > -1)) {
									firstChar = spl[1].charAt(0);
									addLetterClass(firstChar, $this, true);
								}
							}
							firstChar = str.charAt(0);
							addLetterClass(firstChar, $this);
						}
					});
				});
			}

			function addLetterClass(firstChar, $el, isPrefix) {
				if (/\W/.test(firstChar)) firstChar = '-'; // not A-Z, a-z or 0-9, so considered "other"
				if (!isNaN(firstChar)) firstChar = '_'; // use '_' if the first char is a number
				$el.addClass('ln-' + firstChar);

				if (counts[firstChar] == undefined) counts[firstChar] = 0;
				counts[firstChar]++;
				if (!isPrefix) allCount++;
			}

			function addDisabledClass() {
				for (var i = 0; i < letters.length; i++) {
					if (counts[letters[i]] == undefined) $('.' + letters[i], $letters).addClass('ln-disabled');
				}
			}

			function addNoMatchLI() {
				$list.append('<li class="ln-no-match" style="display:none">' + opts.noMatchText + '</li>');
			}

			function getLetterCount(el) {
				if ($(el).hasClass('all')) return allCount;
				else {
					var count = counts[$(el).attr('class').split(' ')[0]];
					return (count != undefined) ? count : 0; // some letters may not have a count in the hash
				}
			}

			function bindHandlers() {

				// sets the top position of the count div in case something above it on the page has resized
				//
				if (opts.showCounts) {
					$wrapper.mouseover(function() {
						setLetterCountTop();
					});
				}

				// mouseover for each letter: shows the count above the letter
				//
				if (opts.showCounts) {
					$('a', $letters).mouseover(function() {
						var left = $(this).position().left;
						var width = ($(this).outerWidth({ margin: true }) - 1) + 'px'; // the -1 is to tweak the width a bit due to a seeming inaccuracy in jquery ui/dimensions outerWidth (same result in FF2 and IE6/7)
						var count = getLetterCount(this);
						$letterCount.css({ left: left, width: width }).text(count).show(); // set left position and width of letter count, set count text and show it
					});

					// mouseout for each letter: hide the count
					//
					$('a', $letters).mouseout(function() {
						$letterCount.hide();
					});
				}

				// click handler for letters: shows/hides relevant LI's
				//
				$('a', $letters).click(function() {
					$('a.ln-selected', $letters).removeClass('ln-selected');

					var letter = $(this).attr('class').split(' ')[0];
					if (letter == 'all') {
						$('ul#' + id + ' li.ln-no-match').hide();
						$('ul#' + id + ' ul.letterbox').fadeIn();
						$('ul#' + id + ' li').css('border-left','1px dotted #CCC');
						isAll = true;
					} else {
						if (isAll) {
							//$list.children().hide();
							$('ul#' + id + ' ul.letterbox').hide();
							isAll = false;
						} else if (prevLetter != '') $('ul#' + id + ' ul.letterbox.ln-' + prevLetter).hide();

						var count = getLetterCount(this);
						if (count > 0) {
							$list.children('.ln-no-match').fadeOut(); // in case it's showing
							$('ul#' + id + ' ul.letterbox.ln-' + letter).fadeIn();
							$('ul#' + id + ' li').css('border-left','0');
						}
						else $list.children('.ln-no-match').fadeIn();

						prevLetter = letter;
					}

					if ($.cookie && (opts.cookieName != null)) $.cookie(opts.cookieName, letter);


					$(this).addClass('ln-selected');
					$(this).blur();
					if (!firstClick && (opts.onClick != null)) opts.onClick(letter);
					else firstClick = false;
					return false;
				});
			}

			// creates the HTML for the letter links
			//	
			function createLettersHtml() {
				var html = [];
				for (var i = 1; i < letters.length; i++) {
					if (html.length == 0) html.push('<a class="all" href="#">View All</a><a class="_" href="#">0-9</a>');
					html.push('<a class="' + letters[i] + '" href="#">' + ((letters[i] == '-') ? '...' : letters[i].toUpperCase()) + '</a>');
				}
				return '<div class="ln-letters">' + html.join('') + '</div>' + ((opts.showCounts) ? '<div class="ln-letter-count" style="display:none; position:absolute; top:0; left:0; width:20px;">0</div>' : ''); // the styling for ln-letter-count is to give us a starting point for the element, which will be repositioned when made visible (ie, should not need to be styled by the user)
			}

			init();
		});
	};

	$.fn.listnav.defaults = {
		initLetter: '',
		includeAll: true,
		incudeOther: false,
		includeNums: true,
		flagDisabled: true,
		noMatchText: 'No matching entries',
		showCounts: true,
		cookieName: null,
		onClick: null,
		prefixes: []
	};
})(jQuery);