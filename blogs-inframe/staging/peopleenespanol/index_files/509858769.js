/* ag-develop-unit 14.08.26-1048-1048 (2014-08-27 02:38:50 GMT) */
 rsinetsegs=['H07710_10151','H07710_10160','H07710_10164','H07710_10492','H07710_10515','H07710_10548','H07710_10337','H07710_10458','H07710_10460','H07710_10585','H07710_10665','H07710_10685','H07710_10689','H07710_10787','H07710_10929','H07710_10933','H07710_11223','H07710_0']; var asiExp=new Date((new Date()).getTime()+2419200000); var asiSegs=""; var rsiPat=/.*_5.*/; var asiPat=/\d{5}_/; var i=0; for(x=0;x<rsinetsegs.length&&i<20;++x){ if(!rsiPat.test(rsinetsegs[x])){ csid=rsinetsegs[x].substr(0,6); if(csid != "H07710"&&csid != "D08734") { asiSegs+='|'+csid+'_'+rsinetsegs[x].replace(asiPat,"");++i; } else { asiSegs+='|'+rsinetsegs[x];++i; } } } document.cookie="rsi_segs="+(asiSegs.length>0?asiSegs.substr(1):"")+";expires="+asiExp.toGMTString()+";path=/;domain=.peopleenespanol.com"; if(typeof(DM_onSegsAvailable)=="function"){DM_onSegsAvailable(['H07710_10151','H07710_10160','H07710_10164','H07710_10492','H07710_10515','H07710_10548','H07710_10337','H07710_10458','H07710_10460','H07710_10585','H07710_10665','H07710_10685','H07710_10689','H07710_10787','H07710_10929','H07710_10933','H07710_11223','H07710_0'],'h07710');} 