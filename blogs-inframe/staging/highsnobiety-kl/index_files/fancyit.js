(function(undefined) {
	var DOMAIN      = 'fancy.com',
	    FANCY_IT_ID = 'FancyButton',
	    BGIMAGE_URL = ( document.location.protocol == 'https:' ? 'https://s3.amazonaws.com/thefancy/_ui/images/fancy_it1.png' : 'http://s3.amazonaws.com/thefancy/_ui/images/fancy_it1.png' ),
		BUTTON_SIZE = [56,20],
		FONT_SIZE   = 12,
		BUBBLE_PADDING = [12, 8];

	function css(elem, styles) {
		for(var name in styles) {
			if(!styles.hasOwnProperty(name)) continue;
			elem.style[name] = styles[name];
		}
	};
	
	function attr(elem, attrs) {
		for(var name in attrs) {
			if(!attrs.hasOwnProperty(name)) continue;
			elem.setAttribute(name, attrs[name]);
		}
	};

	function addEvent(elem, type, func) {
		if(elem.addEventListener) {
			elem.addEventListener(type, func, false);
		} else if(elem.attachEvent) {
			elem.attachEvent('on'+type, func);
		}
	};

	function create(tag) {
		return document.createElement(tag);
	};

	function getData(elem, name){
		return (elem.dataset)?elem.dataset[name]:elem.getAttribute('data-'+name);
	};
	
    function FancyIt(elFancyIt) {
		var sNextUrl,
		    elCountNum,
			elCountAnchor,
			elChildFrame,
			elIframe,
			elBackground,
			isOpen = false;

		if(!elFancyIt) return;
		
                // for legacy support
                var params = {};
                elFancyIt.search.substr(1).replace(/(?:^|&)(.+?)=([^&]+)/g, function(m,name,value){
			params[name] = value;
                });

		// get settings
		//var showCount = getData(elFancyIt, 'count'),
		var showCount = getData(elFancyIt, 'count') || params['showcount'] || true,
			image     = getData(elFancyIt, 'image') || BGIMAGE_URL,
		    size      = getData(elFancyIt, 'size'),
			fontSize  = getData(elFancyIt, 'fontsize') || FONT_SIZE,
			padding   = getData(elFancyIt, 'padding');

		this.showCount = !(showCount === false || showCount === 'false');

		size = (typeof(size)=='string')?size.split(','):BUTTON_SIZE;
		if(!size[1]) size[1] = size[0];

		padding = (typeof(padding)=='string')?padding.split(','):BUBBLE_PADDING;
		if(!padding[1]) padding[1] = padding[0];

		this.collectCount = function(data) {
			elCountNum.innerHTML = data.count;

			if(data.thing_url && data.thing_url != 'None') {
				elCountAnchor.setAttribute('href', data.thing_url);
			} else {
				elCountAnchor.removeAttribute('href');
			}

			if(!data.showcount || !parseInt(data.count)) elCountAnchor.style.visibility = 'hidden';
        };

		function addCountAnchor() {
			elCountNum = create('strong');
			elCountNum.innerHTML = '0';
			css(elCountNum, {
				display    : 'inline-block',
				position   : 'relative',
				top        : '0',
				left       : padding[0]+'px',
				height     : size[1]+'px',
				margin     : '0',
				padding    : '0 '+padding[1]+'px 0 0',
				fontSize   : '12px',
				lineHeight : '20px',
				textAlign  : 'left',
				cursor     : 'pointer',
				background : 'transparent url("'+image+'") no-repeat 100% '+(-size[1]*4)+'px',
				transition : 'none',
				webkitTransition : 'none'
			});

			elCountAnchor = create('a');
			elCountAnchor.appendChild(elCountNum);
			css(elCountAnchor, {
				display    : 'inline-block',
				cursor     : 'pointer',
				overflow   : 'visible',
				cssFloat   : 'left',
				styleFloat : 'left',
				font       : fontSize+'px/'+size[1]+'px Arial, Helvetica, sans-serif',
				color      : '#4c515c',
				margin     : '0 0 0 1px',
				padding    : '0',
				background : 'transparent url("'+image+'") no-repeat 0 '+(-size[1]*4)+'px',
				textDecoration : 'none',
				transition : 'none',
				webkitTransition : 'none'
			});
			addEvent(elCountAnchor, 'mouseover', function(){ 
				var posY = (-size[1]*5)+'px';
				elCountAnchor.style.backgroundPosition = '0 '+posY;
				elCountNum.style.backgroundPosition = '100% '+posY;
			});
			addEvent(elCountAnchor, 'mouseout', function(){
				var posY = (-size[1]*4)+'px';
				elCountAnchor.style.backgroundPosition = '0 '+posY;
				elCountNum.style.backgroundPosition = '100% '+posY;
			});
			elFancyIt.parentNode.insertBefore(elCountAnchor, elFancyIt.nextSibling);
		};

		function closeIframe() {
			var elBody = document.getElementsByTagName('body')[0];

            isOpen = false;
			elBody.removeChild( elIframe );
			elBody.removeChild( elChildFrame );
			elBody.removeChild( elBackground );

			if(window.removeEventListener) {
				window.removeEventListener('message', onMessage, false);
			} else if(window.detachEvent) {
				window.detachEvent('onmessage', onMessage);
			}
		};

		function onMessage(e) {
			switch(e.data) {
				case 'fancy.fancyit.close':
					closeIframe();
					break;
				case 'fancy.fancyit.reload':
					//elIframe.style.height = '310px';
					break;
				case 'fancy.fancyit.learn':
					//elIframe.style.height = '610px';
					break;
				case 'fancy.fancyit.fancyd':
					elFancyIt.style.backgroundPosition = '0 '+(-size[1]*2)+'px';
					elFancyIt.className = 'fancyd';
					//elIframe.style.height = '450px';
					break;
			}
		};

		function reloadIframe() {
			var cc = document.getElementById('fancy_fancyit_iframe');
			cc.src = cc.src;
		};

        function adjustParams(href){
        	if(!href) return href;
        	var query = href.split("?")[1]||"";
            var queries = query.split("&");
            var params = {};
            for(var i=0; i<queries.length; i++){                
                params[queries[i].split("=")[0]] = queries[i].split("=")[1]||"";
            }
            if( !params.ItemURL || !(params.ItemURL.replace("http://","").replace("https://",""))) params.ItemURL = document.location.href;
            if( !params.Title ) params.Title = document.title;
            if( !params.Category ) params.Category = "Other";

            var newQuery = [];
            for(var k in params){
            	if(k && params[k]) newQuery[newQuery.length] = k+"="+params[k];
            }
            return href.split("?")[0] + "?" + newQuery.join("&");
        };

		function fancyIt(e) {
			if(!e) e = window.event;
			if(e.preventDefault) e.preventDefault();
			if(isOpen) return false;

			var target = e.target || e.srcElement;
			var elBody = document.getElementsByTagName('body')[0];
			var dummy  = (new Date()).getTime(); // dummy data to prevent browser cache

			isOpen = true;
			if(target !== elFancyIt) return false;

			addEvent(window, 'message', onMessage);
			elBody.appendChild( elBackground = create('div') );
			addEvent(elBackground, 'click', closeIframe);
			elBackground.id = 'fancy_fancyit_background';

			if(!document.getElementById('fancy_button_style')) {
				var link = create('link');
				attr(link, {
					id   : 'fancy_button_style',
					href : ( document.location.protocol == 'https:' ? 'https://' : 'http://' )+DOMAIN+'/_ui/fancyit/css/fancyit_v2.css?c='+dummy,
					rel  : 'stylesheet',
					type : 'text/css'
				});
				elBody.appendChild( link );
			}

			elIframe = create('iframe');
			attr(elIframe, {
				id   : 'fancy_fancyit_iframe',
				name : 'fancy_fancyit_iframe',
				//src  : ( document.location.protocol == 'https:' ? 'https://' : 'http://' )+DOMAIN+'/fancyit/connect?v2&c='+dummy+"&next="+encodeURIComponent(sNextUrl),
				src  : 'https://'+DOMAIN+'/fancyit/connect?c='+dummy+"&next="+encodeURIComponent(sNextUrl),
				scrolling    : 'no',
				marginwidth  : '0',
				marginheight : '0',
				frameborder  : '0',
				allowtransparency : true
			});
			elBody.appendChild( elIframe );

			elBody.insertBefore( (elChildFrame=create('div')), elBody.childNodes[0] );
			elChildFrame.id = 'fancy_fancyit_frame';

            return false;
		};

		this.nextUrl = sNextUrl = adjustParams( elFancyIt.getAttribute('href') );
		elFancyIt.removeAttribute('id');
		css(elFancyIt, {
			display     : 'block',
			overflow    : 'visible',
			cssFloat    : 'left',
			styleFloat  : 'left',
			width       : size[0]+'px',
			height      : size[1]+'px',
			margin      : '0 0 0 1px',
			position    : 'relative',
			top         : '0',
			left        : '0',
			font        : '8px Arial,sans-serif',
			color       : '#547baa',
			textIndent  : '-9999em',
			cursor      : 'pointer',
			backgroundImage  : 'url("'+image+'")',
			backgroundRepeat : 'no-repeat',
			transition : 'none',
			webkitTransition : 'none'
		});
		addEvent(elFancyIt, 'click', fancyIt);
		addEvent(elFancyIt, 'mouseover', function() {
			var cls = elFancyIt.getAttribute('class');
			if(cls != null && cls != undefined && cls != false && cls == 'fancyd') {
				elFancyIt.style.backgroundPosition='0 '+(-size[1]*3)+'px';
			} else {
				elFancyIt.style.backgroundPosition='0 '+(-size[1])+'px';
			}
		});
		addEvent(elFancyIt, 'mouseout', function() {
			var cls = elFancyIt.getAttribute('class');
			if(cls != null && cls != undefined && cls != false && cls == 'fancyd') {
				elFancyIt.style.backgroundPosition='0 '+(-size[1]*2)+'px';
			} else {
				elFancyIt.style.backgroundPosition='0 0';
			}
		});

		
		if(this.showCount) addCountAnchor();
    };

    var is_IE6 = (navigator.appVersion.indexOf("MSIE 6.")>0);
    var is_IE7 = (navigator.appVersion.indexOf("MSIE 7.")>0);
	var target = document.getElementById(FANCY_IT_ID);

	if(target) target.removeAttribute('id');

	if(is_IE6 || is_IE7) {
		target.style.display = 'none';
	} else {
		if(!window.__FANCY_CALLBACK) window.__FANCY_CALLBACK = {};

		var fancyit  = window.__FIB = new FancyIt(target);
		var cb_id    = 'fancy'+(new Date()).getTime()+Math.floor(Math.random()*100+1);
		var indexq   = fancyit.nextUrl.indexOf('?');
		var next_url = (indexq < 0)?'':'&'+fancyit.nextUrl.substring(indexq+1);

		if(!fancyit.showCount) return;

		window.__FANCY_CALLBACK[cb_id] = function(data){
			delete window.__FANCY_CALLBACK[cb_id];
			fancyit.collectCount(data);
		};

		var node = create('script');
		attr(node, {
			type  : 'text/javascript',
			async : 'true',
			defer : 'defer',
			src   : location.protocol+'//'+DOMAIN+'/fancyit/count?callback='+cb_id+next_url
		});
		document.getElementsByTagName('head')[0].appendChild(node);
	}
})();
