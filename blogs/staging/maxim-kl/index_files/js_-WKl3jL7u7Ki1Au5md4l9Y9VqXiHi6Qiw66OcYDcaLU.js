/*
 * main navigation
 */
var navOverlay = {
	currentID: null,
	mainNavElement: '#region-menu .block-system-main-menu',
	mainNavTimer: null,
  subNavWrapper: this.mainNavElement + ' ul.menu li .subNav',
  currentChannelName: null,
	disableSubnavHide:0,
	subChannelTimer: null,
	currentSubChannelID: null,
  magazineImg: '/sites/default/files/circ_magazine_cover.png',
  magazineLink: 'https://ssl.palmcoastd.com/0815B/apps/3OFFERS?ikey=I**PA9',
  sponsorAdIframe:'/sites/default/libraries/ads/menu_sponsor_ad.php',
  cdnURL: 'http://cdn2.maxim.com/maxim'
};

/*
 * init function
 */
navOverlay.init = function(id){
	if(typeof id != 'undefined'){
		this.mainNavElement = id;
	}
  this.formatMenu();

	jQuery(this.mainNavElement+" ul.menu li").not(this.mainNavElement+" ul.menu li ul li").mouseenter(
		function(){
      this.currentID = navOverlay.getMenuIdFromClasses(jQuery(this).attr('class'));
      navOverlay.currentChannelName = jQuery('a', this).html();
      navOverlay.showSubnav(this.currentID);
		}
	).mouseleave( function(){
		navOverlay.delayHideSubnav();
  });

	jQuery(this.subNavWrapper).mouseenter(
		function(){ clearTimeout(navOverlay.mainNavTimer); }
	).mouseleave(
		function(){	navOverlay.delayHideSubnav(); }
	);
};

/*
 * Format menu
 *
 */
navOverlay.formatMenu = function(){
  var $this=this;
  jQuery(this.mainNavElement + " ul.menu li ul").wrap('<div class="subNav" />');
  jQuery(this.mainNavElement + " ul.menu li ul").prepend("<h6>Subchannels:</h6>");
  jQuery(this.mainNavElement + " ul.menu li ul").show();
  jQuery(this.mainNavElement + " ul.menu li ul li").prepend("<span></span>");
  jQuery(this.mainNavElement + " ul.menu li.expanded").each(
    function(){
      var circAd = '<div class="circ-ad"><a href="'+$this.magazineLink+'" target="_blank"><div class="cover-img"><img src="'+$this.cdnURL+$this.magazineImg+'" /></div><p>&raquo; Subscribe to Maxim Magazine</p></a></div>';
      var sponsorAd = '';
      if($this.sponsorAdIframe.length){
        sponsorAd = '<div class="sponsor-ad menu-sponsor-'+ navOverlay.getMenuIdFromClasses(jQuery(this).attr('class')) +'"></div>';
      }
      var channel = jQuery('a:first', this).html();
      jQuery('ul', this).after(circAd + sponsorAd + '<div class="subnav_subchannel_feature"></div><ul class="nav_articles"><h3>Featured ' + channel + ':</h3></ul><ul class="nav_tv"><h3>Maxim TV:</h3></ul>');
    }
  );
}

/*
 * Get menu name and link from ID
 */
function getMenuLink(id){
  return [jQuery(".mtid-"+id + ' a:first').html(), jQuery(".mtid-"+id + ' a:first').attr('href')];
}

/*
 * Show menu dropdown
 */
navOverlay.showSubnav = function(id){
  clearTimeout(this.mainNavTimer);
 	this.hideSubnav();
	this.currentID = id;
  jQuery(".mtid-"+id).addClass('over');
  jQuery(".region-header-second").css('visibility','hidden'); // Hide top nav to prevent bleed thru
  jQuery(this.mainNavElement+" ul.menu li.over .subNav").show();
	jQuery(this.mainNavElement+" ul.menu li.over .subNav li").removeClass("selected");
  jQuery(this.mainNavElement+" ul.menu li.over .subNav li:eq(0)").addClass("selected");

  if(!isNaN(id)){
    this.getChannelData(id);

    // Get first subchannel featured article
    if(jQuery(this.mainNavElement+" ul.menu li.over .subNav").length != 0){
      subChannelID = this.getMenuIdFromClasses(jQuery(this.mainNavElement+" ul.menu li.over .subNav li.selected").attr('class'));
      this.getSubchannelData(subChannelID, 0);
    }
  }

	jQuery(this.mainNavElement+" ul.menu li.over .subNav ul li").mouseenter(
		function(){
			jQuery(this).parent().children('li').removeClass('selected');
			jQuery(this).addClass('selected');
      subChannelID = navOverlay.getMenuIdFromClasses(jQuery(this).attr('class'));
      navOverlay.getSubchannelData(subChannelID, 1);
		}
	);

	// fix for mouse over maxim logo (IE)
	jQuery(".logo-img img").mouseenter(
		function(){	navOverlay.disableSubnavHide=1;	}
	).mouseleave(
		function(){ navOverlay.disableSubnavHide=0;	}
	);
}

navOverlay.delayHideSubnav = function(){
	this.mainNavTimer = setTimeout(function(){
		navOverlay.hideSubnav();
	}, 250);
};

navOverlay.hideSubnav = function(){
	if(!this.disableSubnavHide){
		jQuery(this.mainNavElement + " li.over").removeClass('over');
		jQuery(this.mainNavElement + " ul.menu li .subNav").hide();
    jQuery(".region-header-second").css('visibility','visible');
	}
};

/*
 * Get menu id from class
 */
navOverlay.getMenuIdFromClasses = function($classes){
  var menuID='';
  var classList = $classes.split(/\s+/);
  for (i = 0; i < classList.length; i++) {
    if(classList[i].indexOf('mtid-') > -1){
      var menuID=classList[i].replace('mtid-','');
      break;
    }
  }
  return menuID;
}

/*
 * Get channel data using ajax
 */
navOverlay.getChannelData = function(id, navName){
  if(jQuery(".mtid-"+id).data("nav_featured_list")){
    jQuery(".mtid-"+id+" .nav_articles").html(jQuery(".mtid-"+id).data("nav_featured_list"));
  } else {
    //console.log('ajax: /menu-channel/'+id);
	  jQuery.ajax({
		  url: '/menu-channel/'+id,
		  dataType: 'JSON',
		  success: function(resp){
        str = navOverlay.buildChannelFeatured(resp, id);
        jQuery(".mtid-"+id).data("nav_featured_list", str);
        jQuery(".mtid-"+id+" .nav_articles").html(str);
      }
	  });
  }
  if(jQuery(".mtid-"+id).data("nav_tv_list")){
    jQuery(".mtid-"+id+" .nav_tv").html(jQuery(".mtid-"+id).data("nav_tv_list"));
  } else {
/*     console.log('ajax: /menu-video/'+id); */
	  jQuery.ajax({
		  url: '/menu-video/'+id,
		  dataType: 'JSON',
		  success: function(resp, textstatus){
        str = navOverlay.buildChannelTV(resp);
        jQuery(".mtid-"+id).data("nav_tv_list", str);
        jQuery(".mtid-"+id+" .nav_tv").html(str);
		  }
	  });
  }
}

/*
 * Build Channel tv list
 */
navOverlay.buildChannelTV = function(data){
  str = "<h3>Maxim TV:</h3>";
  if(data.featured && data.featured.length){
    for(var i=0; i < data.featured.length; i++){
      if(i==0){
        str += '<li class="feature">';
        str += '<a href="' + data.featured[i].item.path + '">';
        str += '<figure><img src="' + data.featured[i].item.thumb + '" /></figure>';
        str += '<h2>' + data.featured[i].item.title + '</h2></a>';
      } else {
        str += '<li>';
        str += '<a href="' + data.featured[i].item.path + '">' + data.featured[i].item.title + '</a>';
      }
      str += '</li>';
    }
  }
  return str;
}

/*
 * Build Channel featured list
 */
navOverlay.buildChannelFeatured = function(data, id){
  var channelData = getMenuLink(id);
  str = "<h3>Featured " + channelData[0] + ":</h3>";
  if(data.featured && data.featured.length){
    for(var i=0; i < data.featured.length; i++){
      if(i==0){ str+='<li class="clearfix">'; } else { str+='<li>'; }
      str += '<a href="' + data.featured[i].item.path + '"><figure><img src="' + data.featured[i].item.thumb + '" /></figure><h2>' + data.featured[i].item.title + '</h2></a></li>';
    }
    str += '<div class="morelink">&raquo; <a href="' + channelData[1] + '">more ' + channelData[0].toLowerCase() + ' articles</a></div>';
  }
  return str;
}

/*
 * Get subchannel data using ajax
 */
navOverlay.getSubchannelData = function(id, level){
  if(typeof level == 'undefined') { level = 0; }
  var mainChannelID = this.currentID;

  if(this.currentSubChannelID!=id){
		this.currentSubChannelID=id;

    if(this.sponsorAdIframe.length){
      var mainnavURL = jQuery(this.mainNavElement + ' .mtid-'+mainChannelID + ' a:first').attr('href');
      var subnavURL = jQuery(this.mainNavElement + ' .mtid-'+id + ' a:first').attr('href');
      if(typeof subnavURL !== 'undefined'){
        jQuery('.menu-sponsor-' + mainChannelID).html('<iframe frameborder="0" marginheight="0" marginwidth="0" width="145" height="40" scrolling="no" src="'+this.sponsorAdIframe+'?murl='+ mainnavURL + '&surl=' + subnavURL +'"></iframe>'); //+'&ts='+ new Date().getTime()
      }
    }

    if(jQuery(".mtid-"+id).data("subchannel_feature")){
      jQuery(".mtid-"+mainChannelID+" .subnav_subchannel_feature").html(jQuery(".mtid-"+id).data("subchannel_feature"));
    } else {
      // if top level, don't delay loading of featured article
		  if(level != 0){
			  clearTimeout(this.subChannelTimer);
			  var timeout=100;
		  } else {
			  var timeout=0;
		  }
      this.subChannelTimer = setTimeout(function(){
        //console.log('ajax: /menu-subchannel/'+id);
        if(id.length > 0){
			    jQuery.ajax({
				    url: '/menu-subchannel/'+id,
				    dataType: 'JSON',
				    success: function(resp){
              str = '';
              if(resp.featured && resp.featured.length){
      					str = navOverlay.buildSubchannelFeatured(resp);
              }
              jQuery(".mtid-"+mainChannelID+" .subnav_subchannel_feature").html(str);
              jQuery(".mtid-"+id).data("subchannel_feature", str);
				    }
  			  });
        }
		  }, timeout);
    }
  }
};

/* Display subchannel featured block */
navOverlay.buildSubchannelFeatured = function(data){
  str = '';
  if(data.featured.length){
    str += '<a href="' + data.featured[0].item.path + '"><figure><img src="' + data.featured[0].item.thumb + '" /></figure><h2>' + data.featured[0].item.title + '</h2></a><p>' + data.featured[0].item.summary + '</p>';
    //str += '<h2>' + data.featured[0].item.title + '</h2><figure><img src="' + data.featured[0].item.thumb + '" /></figure><p>Lorem Ipsum</p>';
  }
  return str;
}

jQuery(document).ready(function(jQuery) {
  navOverlay.init('#region-menu .block-system-main-menu');
})
;
var carousel = new ( function($) { 
	var me = this;
	
	$(function() {
		$(window).load(function() {
			$(".carouselLong .jCarouselLite").jCarouselLite({
				btnNext: ".carouselLong .nextBtn",
				btnPrev: ".carouselLong .prevBtn",
				scroll: 1,
				visible: 5,
				speed: 500,
				circular: true
			});
			
			$(".carouselWLongAd .jCarouselLite").jCarouselLite({
				btnNext: ".carouselWLongAd .nextBtn",
				btnPrev: ".carouselWLongAd .prevBtn",
				scroll: 1,
				visible: 1,
				speed: 500,
				circular: true
			});
		});
	}); 
	
	
})(jQuery);


;
