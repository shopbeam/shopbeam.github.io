// Automated Slideshow

var currPic = 0;
var paused = false;
var ssTxt = new Array(3); // total number of slides being displayed
var ssPh = new Array(3);
var ssBtns = new Array(3); 
var ppBtn;
var timer1;

function initPageComponents() {
	/*  Used to load all components on the page */
	ssTxt[0] = document.getElementById('txt1');
	ssTxt[1] = document.getElementById('txt2');
	ssTxt[2] = document.getElementById('txt3');

	ssPh[0] = document.getElementById('ph1');
	ssPh[1] = document.getElementById('ph2');
	ssPh[2] = document.getElementById('ph3');

	ssBtns[0] = document.getElementById('a1'); 
	ssBtns[1] = document.getElementById('a2');
	ssBtns[2] = document.getElementById('a3');

	ppBtn = document.getElementById('ppBtn');
	timer1 = setTimeout('timedStory()', 3000);
}

function change(num) {
	currPic = num;
	ssTxt[0].style.display = (num == 0 ? "block" : "none");
	ssTxt[1].style.display = (num == 1 ? "block" : "none");
	ssTxt[2].style.display = (num == 2 ? "block" : "none");
	
	ssPh[0].style.display = (num == 0 ? "block" : "none"); 
	ssPh[1].style.display = (num == 1 ? "block" : "none"); 
	ssPh[2].style.display = (num == 2 ? "block" : "none");

	ssBtns[0].className = (num == 0 ? "on" : "off");
	ssBtns[1].className = (num == 1 ? "on" : "off");
	ssBtns[2].className = (num == 2 ? "on" : "off"); 
}

/* change picture, wait some seconds, repeat */
function timedStory() {
	currPic = (currPic + 1)%3; // must divide by total number of slides (in this case 3)
	change(currPic);
	timer1 = setTimeout('timedStory()', 4000);
}

/* executed when the play/pause button is selected */
function doButton() {
	paused = !paused;
	doImageSwap();
	if (paused) {
		clearTimeout(timer1); /* stop the image loop */
	} else {
		timedStory(); /* restart the image loop */
	}
}

/*executed when a number link is selected */
function doNumber(num) {
	paused = true;
	doImageSwap();
	clearTimeout(timer1);
	change(num);
} 

/* swap the play/pause button image */
function doImageSwap() {
	ppBtn.style.backgroundPosition = (paused ? "0 -50px" : "0 -75px"); // position of Play button, then Pause
}