function clearEvents(){svarArr=['events'];for(var i=1;i<svarArr.length;i++){s[svarArr[i]]='';}}
function clickTracker(eventType,categorySlug,productId,brandName,pageType,productName,storeName){mds.s.linkTrackVars='eVar9,eVar14,eVar45,prop35,prop38,events,prop1,prop2,eVar29,products,eVar38,eVar64,eVar63';mds.s.linkTrackEvents='event90,event91,event92,event93,event94';if(productId==''){mds.s.eVar9=pageType+':'+eventType;}else{mds.s.eVar9=pageType+':'+eventType+';'+productName;}
mds.s.prop35=brandName;mds.s.eVar45=brandName;_tempPageName=mds.s.pageName;if(eventType=='moreproducts'){mds.s.linkTrackEvents='event92';mds.s.events='event92';mds.s.pageName=_tempPageName+':'+eventType;mds.s.tl(this,'o',mds.s.pageName);}
if(eventType=='infinitescroll'){mds.s.linkTrackEvents='event93';mds.s.events='event93';mds.s.pageName=_tempPageName+':'+eventType;mds.s.tl(this,'o',mds.s.pageName);}
if(eventType=='filterselect'){mds.s.linkTrackEvents='event94';mds.s.events='event94';mds.s.pageName=_tempPageName+':'+eventType;mds.s.tl(this,'o',mds.s.pageName);}
if(eventType=='quickview'){mds.s.products=storeName+';'+productName;mds.s.prop38=storeName;mds.s.eVar38=storeName;if(pageType=='homepage'){mds.s.eVar29='editors choice';}
mds.s.events='event90';if(pageType=='detail'){if(mds.s.channel!=''){mds.s.pageName='detail:'+mds.s.channel+':'+productName+':'+eventType;}else{mds.s.pageName='detail:'+productName+':'+eventType;}}else{mds.s.pageName=_tempPageName+':'+productName+':'+eventType;}
mds.s.tl(this,'o',mds.s.pageName);}
clearEvents();mds.s.pageName=_tempPageName;}