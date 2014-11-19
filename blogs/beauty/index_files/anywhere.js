(function(){
	var d=document,s=d.getElementById('fancy-anywhere');

	if(!d) return setTimeout(arguments.callee, 10);
	if(!s || s.getAttribute('done')) return;

	s.setAttribute('done', true);
	
	var src=s.getAttribute('src'),hst=/^https?:\/\/([^\/]+)/i.exec(src)[1],prtc=location.protocol,args={},srv=prtc+'//'+hst;

	src.replace(/^.+?\?/, '').replace(/(\w+)=([^&]+)/g,function($0,$1,$2){args[$1]=$2});

	// cache image resources
	(new Image).src = srv+'/embed/images/post_button.png';
	(new Image).src = srv+'/embed/images/anywhere.png';

	var type = typeof(fancy_anywhere_type) != "undefined" ? fancy_anywhere_type : "layer";
	var pos = typeof(fancy_anywhere_pos) != "undefined" ? fancy_anywhere_pos : "RB";
	
	function ready(){
		var alignHor = 'left:auto;right:12px;'; // default : Right
		if (pos.indexOf("L") != -1) {
			alignHor = 'left:12px;right:auto;';
		} else if (pos.indexOf("C") != -1) {
			alignHor = 'left:50%;right:auto;margin-left:-83px;';
		}

		var alignVer = 'top:auto;bottom:29px;'; // default : Bottom
		if (pos.indexOf("T") != -1) {
			alignVer = 'top:29px;bottom:auto;';
		} else if (pos.indexOf("M") != -1) {
			alignVer = 'top:50%;bottom:auto;margin-top:-19px;';
		}

		function process(){
			var i=0,c,im,id,ids=[],mp={},ii=0,re=/(?:^|\b)fancy-id-(\d+)(?:\b|$)/,dv=d.createElement('div'),sp,bt,sc,cb='__fancy_anywhere_'+Math.ceil(Math.random()*999),w,sty,btn,match;

			sty = 'position:absolute;margin:0;'+alignHor+alignVer+'border:0;display:none;';
			if(args.buttonImg) btn = '<img src="'+decodeURIComponent(args.buttonImg)+'" style="'+sty+'" alt="Buy with Fancy" />';

			while(im=d.images[i++]){
				if(!(match=re.exec(im.className)) || im.parentNode.className == 'fancy-image-container')continue;
				id = match[1];
				if(/\/mark\/anywhere\/rb\//.test(im.src)) im.src = im.src.replace(/mark\/anywhere\/rb\/(.+?\/){3}/,'');
				if(!args.buttonImg) btn = '<iframe src="'+srv+'/embed/button?id='+id+'&loc='+prtc+'//'+location.host+(args.ref?'&ref='+args.ref:'')+'&type='+type+'" frameborder="0" allowtransparency="true" style="'+sty+'width:169px;height:38px"></iframe>';
				dv.innerHTML='<span class="fancy-image-container" style="position:relative;display:inline-block;max-width:100%;padding:0;margin:0;top:0;left:0;right:auto;bottom:auto;">'+btn+'</span>';
				im.parentNode.insertBefore(sp=dv.firstChild,im);
				sp.insertBefore(im,bt=sp.firstChild);
				addEvent(sp.parentNode.nodeName=='A'?sp.parentNode:bt,'click',customClickEvent(id));
				if(bt.nodeName == 'IMG') addEvent(bt,'click',customClickEvent(id));
				mp[id] ? mp[id].push(bt) : (mp[id]=[bt]);
				ids.push(id);
			}

			if(!ids.length) return;

			window[cb] = function(rsp){
				var v=rsp.valid,btns,i,j;
				for(i=0;i<v.length;i++){
					if(!(btns=mp[v[i]])) continue;
					for(j=0;j<btns.length;j++) btns[j].style.display = 'block';
				}
			};

			sc=d.createElement('script');
			sc.setAttribute('defer','defer');
			sc.setAttribute('async','true');
			sc.setAttribute('src', srv+'/check-sales.jsonp?id='+ids.join(',')+'&callback='+cb);
			d.getElementsByTagName('body')[0].appendChild(sc);
		};
		process();

		if(window.jQuery && jQuery.ajaxPrefilter){
			jQuery.ajaxPrefilter(function(options, orgOptions, jqXHR){
				if(/\/page\/\d|[\?&]paged?=\d/.test(options.url)) {
					jqXHR.done(process);
				}
			});
		}

		addEvent(window,'scroll',process);
	};

	function addEvent(o,t,f){
		try{ o&&o.attachEvent?o.attachEvent('on'+t,f):o.addEventListener(t,f,false) }catch(e){};
	};

	function getCss(o,prop){
		var p1,p2;
		p1 = prop.replace(/([a-z])([A-Z])/g, function($0,$1,$2){ return $1+'-'+$2.toLowerCase() });
		p2 = prop.replace(/([a-z])\-([a-z])/g, function($0,$1,$2){ return $1+$2.toUpperCase() });
		try{ return o.currentStyle?o.currentStyle[p2]:document.defaultView.getComputedStyle(o).getPropertyCSSValue(p2).cssText; }catch(e){ };
	};

	function customClickEvent(id){
		return function(event){
			event = event || window.event;

			if(event.preventDefault) event.preventDefault();
			if(event.stopPropagation) event.stopPropagation();
			event.returnValue = false;
			event.cancelBubble = true;

			onMessage({data:'open\t'+prtc+'//'+hst+'/embed/buy/'+id+(args.ref?'?ref='+args.ref:'')});

			return false;
		};
	};

	if(d.addEventListener){
		d.addEventListener('DOMContentLoaded',ready,false);
	} else {
		(function(){ // DOMContentLoaded for IE
			if(d.readyState=='complete') return ready();
			setTimeout(arguments.callee,50);
		})();
	}

	if(window.postMessage && type == "layer"){
		var bg = null,dv=d.createElement('div'),body,ifr,wh,t, WIDTH = 440, HEIGHT = (window.screen.height > 900)?750:620;

		function onMessage(event){
			var msg = (event||window.event).data.split('\t');
			if(!body) body = d.getElementsByTagName('body')[0];

			function close(){
				ifr.src = 'about:blank';
				ifr.style.display = 'none';
				bg.style.display = 'none';
			};

			switch(msg[0]){
				case 'open':
					if(!bg) {
						dv.innerHTML = '<div style="position:fixed;top:0;left:0;width:100%;height:100%;opacity:.7;filter:alpha(opacity=70);background:#000;z-index:999;display:none"></div>';
						bg = dv.firstChild;
						bg.onclick = function(event){
							var e = event||window.event;
							if((e.target||e.srcElement)==bg) close();
						};
						body.appendChild(bg);
					}

					wh = document.documentElement.clientHeight;
					ww = document.documentElement.clientWidth - 2;
					if(ww && ww > 0  && WIDTH > ww) {
						HEIGHT = ww/WIDTH * HEIGHT;
						WIDTH  = ww;
					}

					t  = Math.max(Math.ceil((wh-HEIGHT)/2), 20) + Math.max(document.body.scrollTop, document.documentElement.scrollTop);

					if(!ifr) {
						dv.innerHTML = '<iframe src="about:blank" width="'+WIDTH+'" height="'+HEIGHT+'" frameborder="0" style="position:absolute;border:0;left:50%;top:'+t+'px;width:'+WIDTH+'px;height:'+HEIGHT+'px;margin:0 0 0 -'+Math.floor(WIDTH/2)+'px;z-index:1000;border-radius:1px;border:1px solid #000;box-shadow: 0 0 0 3px rgba(0,0,0,0.16);border-radius:3px;overflow:hidden;"></iframe>';
						ifr = dv.firstChild;
						body.appendChild(ifr);
					}
					bg.style.display = 'block';
					ifr.style.top = t+'px';
					ifr.style.display = 'block';
					ifr.src = msg[1]+(msg[1].indexOf('?')>0?'&':'?')+'loc='+prtc+'//'+location.host;
					break;
				case 'close':
					close();
					break;
			};
		};

		addEvent(window, 'message', onMessage);
	};
})();
