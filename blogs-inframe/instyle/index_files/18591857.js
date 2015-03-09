/* AG-master 13.06.25-24 (2013-06-25 11:42:54 EDT) */
rsinetsegs=[];
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
                document.cookie="rsi_segs="+(asiSegs.length>0?asiSegs.substr(1):"")+";expires="+asiExp.toGMTString()+";path=/;domain=.shopbeam.com";
                if(typeof(DM_onSegsAvailable)=="function"){DM_onSegsAvailable([],'h07710');}