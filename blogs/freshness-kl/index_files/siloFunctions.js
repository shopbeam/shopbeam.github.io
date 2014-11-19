// use for array.indexOf()
// This will add the method if your browser doesn't have it.
if (!Array.prototype.indexOf)
{
    Array.prototype.indexOf = function(x)
    {
        var i;
        for (i = 0; i < this.length; i++)
        {
            if (this[i] === x)
            {
                return i;
            }
        }
        return -1;
    }
}

    $tb(function(){
        var silo_url = getSiloUrl(cmnunt_silo, cmnunt_site);
        var silo_label = getSiloLabel(cmnunt_silo, cmnunt_site);
        var rand = GetRandomNumberBetween(0,4);
        var s_id ='';
        
        //alert('work time');
        // ---generate default silos--- //
        //generateDefaultSilos(sitesBySilo);
        // ---end--- //
        
        // ---insert silo in the default list--- //
        
        switch(cmnunt_silo){
            case 's_sty':
                s_id = '#style_'+rand;
                break;
            case 's_sne':
                s_id = '#sneakers_'+rand;
                break;
            case 's_mus':
                s_id = '#music_'+rand;
                break;
            case 's_gam':
                s_id = '#videoGames_'+rand;
                break;
            case 's_pop':
                s_id = '#popCulture_'+rand;
                break;
            case 's_spo':
                s_id = '#sports_'+rand;
                break;
            default:
                break;
        }
        
        if(silo_label !=''){
            $tb(s_id).html('<a class= "siloLink" href="'+silo_url+'">'+silo_label+'</a>');
        }
        // ---end of insertion--- //
        
        // -------------------Events-------------------//
        $tb('.view_all').live('click',function(){
            overlay();
            var category = $tb(this).parent().attr("id");
            var detail = '';
            var label = '';
            var height = $tb('#cmn_network_container').css('height');
            var left = $tb('#cmn_network_links').css('left');
            var width = $tb('#cmn_network_links').css('width');
            
            if($tb(window).width() <=900){
                $tb('#selectedSiloContainer').css('left','0px');
            }
            else{
                $tb('#selectedSiloContainer').css('left','4%');
            }
            var closeWidth = $tb('#siloContainer').css('width');
            height = height.replace('px','');
            if(isNaN(height)){
                height = Number(height) -35;
            }
            else
                height -= 35;
                
            $tb('#siloContainer').css('left',left);
            $tb('#selectedSilo').css({'height': height});
            $tb('#close').css({'width': closeWidth});
            
            switch(category){
                case 'style':
                    label = 'STYLE & ART';
                    detail = viewAll(sitesBySilo.style,category);
                    $tb('#close label').html(label);
                    break;
                case 'sneakers':
                    label = 'SNEAKERS';
                    detail = viewAll(sitesBySilo.sneakers,category);
                    $tb('#close label').html(label);
                    break;
                case 'music':
                    label = 'MUSIC';
                    detail = viewAll(sitesBySilo.music,category);
                    $tb('#close label').html(label);
                    break;
                case 'videoGames':
                    label = 'VIDEO GAMES';
                    detail = viewAll(sitesBySilo.videoGames,category);
                    $tb('#close label').html(label);
                    break;
                case 'popCulture':
                    label = 'ENTERTAINMENT';
                    detail = viewAll(sitesBySilo.popCulture,category);
                    $tb('#close label').html(label);
                    break;
                case 'sports':
                    label = 'SPORTS';
                    detail = viewAll(sitesBySilo.sports,category);
                    $tb('#close label').html(label);
                    break;
                default:
                    break;
            }
            // use for View all link
            $tb('#selectedSiloContainer').html(detail);
        });
        
        $tb('#close-arrow').live('click',overlay);
    });
    
    function includeSocialNetworkLogos(){
        // host name
        //var path = '/toolbar/v2.0.5/images/toolbar_sprite_image.png';
        var path = 'http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png';
        
        // --set social networks logo-- //
        //  --for dark themes-- //
        if((cmn_tb_theme == 'dark')||(cmn_tb_theme == 'style')){
             $tb('#fatmata').css('background', 'url('+path+') no-repeat -260px -76px');
             //$tb('#fb a').attr('class','socialNetworksLogo');
             $tb('#fb a').css({
                'background': 'url('+path+') no-repeat -260px -76px'
             });
             //$tb('#twitter a').attr('class','socialNetworksLogo');
             $tb('#twitter a').css({
                'background': 'url('+path+') no-repeat -440px -76px'
             });
             //$tb('#google_plus a').attr('class','socialNetworksLogo');
             $tb('#google_plus a').css({
                'background': 'url('+path+') no-repeat -296px -76px'
             });
             //$tb('#digg a').attr('class','socialNetworksLogo');
             $tb('#digg a').css({
                'background': 'url('+path+') no-repeat -224px -76px'
             });
             //$tb('#stumble_upon a').attr('class','socialNetworksLogo');
             $tb('#stumble_upon a').css({
                'background': 'url('+path+') no-repeat -368px -76px'
             });
             //$tb('#pinterest a').attr('class','socialNetworksLogo');
             $tb('#pinterest a').css({
                'background': 'url('+path+') no-repeat -332px -76px'
             });
             //$tb('#tumblr a').attr('class','socialNetworksLogo');
             $tb('#tumblr a').css({
                'background': 'url('+path+') no-repeat -404px -76px'
             });
        }
        else{
             //$tb('#fb a').attr('class','socialNetworksLogo');
             $tb('#fb a').css({
                'background': 'url('+path+') no-repeat -512px -76px'
             });
             //$tb('#twitter a').attr('class','socialNetworksLogo');
             $tb('#twitter a').css({
                'background': 'url('+path+') no-repeat -692px -76px'
             });
             //$tb('#google_plus a').attr('class','socialNetworksLogo');
             $tb('#google_plus a').css({
                'background': 'url('+path+') no-repeat -548px -76px'
             });
             //$tb('#digg a').attr('class','socialNetworksLogo');
             $tb('#digg a').css({
                'background': 'url('+path+') no-repeat -476px -76px'
             });
             //$tb('#stumble_upon a').attr('class','socialNetworksLogo');
             $tb('#stumble_upon a').css({
                'background': 'url('+path+') no-repeat -620px -76px'
             });
             //$tb('#pinterest a').attr('class','socialNetworksLogo');
             $tb('#pinterest a').css({
                'background': 'url('+path+') no-repeat -584px -76px'
             });
             //$tb('#tumblr a').attr('class','socialNetworksLogo');
             $tb('#tumblr a').css({
                'background': 'url('+path+') no-repeat -656px -76px'
             });
        }
    }
    
    function setCMNlogoBasedOnTheme(){
        // set advertise logo
        $tb('#advertise a').css({'width':'135px', 'height':'24px'});
        if(cmn_tb_theme == '' || cmn_tb_theme == 'default'){
            $tb('#advertise a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -692px -1px transparent');
        }
        else if(cmn_tb_theme == 'gray'){
            $tb('#advertise a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -556px -1px transparent');
        }
        else if((cmn_tb_theme == 'dark')||(cmn_tb_theme == 'style')){
            $tb('#advertise a').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -420px -1px transparent');
        }
        else;
        /*else if(cmn_tb_theme == 'style'){
            $tb('#advertise img').css('background','url("http://cdn.complexmedianetwork.com/cdn/toolbar/v2.0.5/images/toolbar_sprite_image.png") no-repeat scroll -31px -22px transparent');
            $tb('#advertise a').css({'width':'125px'});
        }*/
    }
    
    function generateDefaultSilos(obj){
        var html = '';
        var cmn_host ='/';
        var cmn_domain = '';
        var logoStr = '';
        
        // set cmn logo based on theme
        setCMNlogoBasedOnTheme();
        
        // include social network logos
        includeSocialNetworkLogos();
        
        if(typeof obj == 'object'){
            for(var i in obj){
                switch(i){
                    case 'style':
                        var styleObj = obj.style;
                        html = generateDefaultDivs(styleObj, 'style');
                        $tb('#style').append(html);
                        break;
                    case 'sneakers':
                        var styleObj = obj.sneakers;
                        html = generateDefaultDivs(styleObj, 'sneakers');
                        $tb('#sneakers').append(html);
                        break;
                    case 'music':
                        var styleObj = obj.music;
                        html = generateDefaultDivs(styleObj, 'music');
                        $tb('#music').append(html);
                        break;
                    case 'videoGames':
                        var styleObj = obj.videoGames;
                        html = generateDefaultDivs(styleObj, 'videoGames');
                        $tb('#videoGames').append(html);
                        break;
                    case 'popCulture':
                        var styleObj = obj.popCulture;
                        html = generateDefaultDivs(styleObj, 'popCulture');
                        $tb('#popCulture').append(html);
                        break;
                    case 'sports':
                        var styleObj = obj.sports;
                        html = generateDefaultDivs(styleObj, 'sports');
                        $tb('#sports').append(html);
                        break;
                    default:
                        break;
                }
            }
        }
        return html;
    }
    
    function inJSarray(arr, value){
        var i = arr.indexOf(value);
        if (i != -1)
        {
            return(1);
        }
        return (0);
    }
    
    function generateDefaultDivs(obj, id){
        var n =0;
        var spanId = '';
        var html ='';
        var url ='';
        var label ='';
        var index = 0;
        var arr = new Array();
        
        if((obj instanceof Array)&&(id != '')){
            html +='    <label>'+getLabel(id)+'</label><br/>';
            for(var i in obj){
                if(obj[i].feature == 1){
                    spanId = id+'_'+i;
                    
                    // get random index
                    index = GetRandomNumberBetween(0, 3);
                    while((inJSarray(arr, index)==1)&&(arr.length<4)){
                        index = GetRandomNumberBetween(0, 4);
                    }
                    if(arr.length<4){
                        arr.push(index);
                    }
                    else
                        index = 4;
                        
                    url = obj[index].url;
                    label = obj[index].label;
                    
                    html +='    <span id = "'+spanId+'" class = "silo">';
                    html +='        <a class = "siloLink" href ="'+url+'" target="_blanck">'+label+'</a>';
                    html +='    </span><br/>';
                }
            }
            html +='    <span id="view_all" class="view_all">View all &raquo;</span>';
        }
        return html;
    }
    
    function getLabel(cat){
        var label = '';
        switch(cat){
            case 'style':
                label = 'STYLE & ART';
                break;
            case 'sneakers':
                label = 'SNEAKERS';
                break;
            case 'music':
                label = 'MUSIC';
                break;
            case 'videoGames':
                label = 'VIDEO GAMES';
                break;
            case 'popCulture':
                label = 'ENTERTAINMENT';
                break;
            case 'sports':
                label = 'SPORTS';
                break;
            default:
                break;
        }
        return label
    }
    
    function getSiloUrl(kw, sitename){
        var url ='';
        var obj = getObjByKeyword(kw, sitename);
        
        for(var i in obj){
            if((obj[i].kw == kw)&&(obj[i].dfp == sitename)&&(obj[i].feature==0)){
                url = obj[i].url;
                break;
            }
        }
        return url;
    }
    
    function getSiloLabel(kw, sitename){
        var label ='';
        var obj =getObjByKeyword(kw, sitename);
        
        for(var i in obj){
            if((obj[i].kw == kw)&&(obj[i].dfp == sitename)&&(obj[i].feature==0)){
                label = obj[i].label;
                break;
            }
        }
        return label;
    }
    
    function getObjByKeyword(kw, sitename){
        var obj = "";
        switch(kw){
            case 's_sty':
                obj = sitesBySilo.style;
                break;
            case 's_sne':
                obj = sitesBySilo.sneakers;
                break;
            case 's_mus':
                obj = sitesBySilo.music;
                break;
            case 's_gam':
                obj = sitesBySilo.videoGames;
                break;
            case 's_pop':
                obj = sitesBySilo.popCulture;
                break;
            case 's_spo':
                obj = sitesBySilo.sports;
                break;
            default:
                break;
        }
        return obj;
    }
    
    function GetRandomNumberBetween(lo, hi) {
        return Math.floor(lo + Math.random() * (hi - lo));
    }
    
    function overlay(){
        if($tb('#siloContainer').css('display')=='none'){
            $tb('#siloContainer').slideDown(400, 'linear');
        }
        else{
            $tb('#siloContainer').slideUp(400, 'linear');
        }
    }
    
    function generateDivs(jsonVar,divs,itemPerDiv){
        var html = '';
        var j =0;
        var len = 0;
        var url ='';

        // insertion sort
        var insertionSort = function (arr) {
            var len = arr.length, i = -1, j, tmp;
            while (len--) {
                tmp = arr[++i];
                j = i;
                while (j-- && arr[j].label > tmp.label) {
                    arr[j + 1] = arr[j];
                }
                arr[j + 1] = tmp;
            }
            return arr;
        };
        
        if(jsonVar instanceof Array){
           jsonVar = insertionSort(jsonVar);
            for(var d =1; d<=divs; d++){
                len +=itemPerDiv;
                if(len > jsonVar.length){
                    len = jsonVar.length;
                }
                
                html += '<div id="detail_'+d+'">';
                for(j; j < len;j++){
                    url = jsonVar[j].url;
                    if(jsonVar[j].label != ''){
                        if(url!="")
                            html += '<span id="silo_'+d+'" class="silo"><a class= "siloLink" href="'+jsonVar[j].url+'" target="_blanck">'+jsonVar[j].label+'</a></span><br/>';
                        else
                            html += '<span id="silo_'+d+'" class="silo"><label>'+jsonVar[j].label+'</label></span><br/>';
                    }
                }
                html +='</div>';
            } 
        }
        return html;
    }
    
    function viewAll(jsonVar,cat){
        var html = '';
        var divs = 1;
        var itemPerDiv = 8
        $tb('#selectedSiloContainer').html('');
        
        if((jsonVar != '')&&(cat !="")){
            divs = Math.ceil(jsonVar.length/itemPerDiv);
            html = generateDivs(jsonVar,divs,itemPerDiv);
        }
        return html;
    }
  