/* mycon-dev-gradle 13.12.11-1095-1095 (2013-12-11 18:14:18 GMT) */
rsinetsegs=['H07710_10151','H07710_10259','H07710_10160','H07710_10164','H07710_10494','H07710_10515','H07710_10337','H07710_10458','H07710_10460','H07710_10685','H07710_10933','H07710_11164','H07710_11223','H07710_0'];
        var asiExp=new Date((new Date()).getTime()+2419200000);
        var asiSegs="";
        var rsiPat=/.*_5.*/; 
        var asiPat=/\d{5}_/; 
	var i=0;
        for(x=0;x<rsinetsegs.length&&i<20;++x){
                if(!rsiPat.test(rsinetsegs[x])){
                        csid=rsinetsegs[x].substr(0,6);
                                        if(csid != "H07710"&&csid != "D08734") {
                                                asiSegs+='|'+csid+'_'+rsinetsegs[x].replace(asiPat,"");++i;
                                        } else {
                                                asiSegs+='|'+rsinetsegs[x];++i;
                                        }
                                }
                        }
                document.cookie="rsi_segs="+(asiSegs.length>0?asiSegs.substr(1):"")+";expires="+asiExp.toGMTString()+";path=/;domain=.peoplestylewatch.com";
                if(typeof(DM_onSegsAvailable)=="function"){DM_onSegsAvailable(['H07710_10151','H07710_10259','H07710_10160','H07710_10164','H07710_10494','H07710_10515','H07710_10337','H07710_10458','H07710_10460','H07710_10685','H07710_10933','H07710_11164','H07710_11223','H07710_0'],'h07710');}