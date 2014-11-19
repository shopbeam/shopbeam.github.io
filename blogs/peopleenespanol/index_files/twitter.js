var PESP = window.PESP || [];
PESP.Twitter = {
	init : function() { // determine page and load appropriate twitter feed js

		PESP.Twitter.tweetspeed = 4000;
		PESP.Twitter.sponsorspeed = 12000;

		setInterval('PESP.Twitter.cycletweets()',this.tweetspeed);
		setInterval('PESP.Twitter.cyclesponsors()',this.sponsorspeed);

	},
	
	cycletweets : function() { // moves last tweet to top
		$('#celebtweets').find('li:last').css('display','none').prependTo($('#celebtweets')).animate({'height':'toggle','opacity':'toggle'},700);
        $('#moms-babies-tweets').find('li:last').css('display','none').prependTo($('#moms-babies-tweets')).animate({'height':'toggle','opacity':'toggle'},700);
	},
	cyclesponsors : function() { // moves last tweet to top
		$('#sponsortweets').find('li:last').css('display','none').prependTo($('#sponsortweets')).animate({'height':'toggle','opacity':'toggle'},700);
	}
	
};
PESP.Twitter.init();