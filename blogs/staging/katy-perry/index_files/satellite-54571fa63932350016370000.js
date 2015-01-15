_satellite.pushBlockingScript(function(event, target, $variables){
    
// Set Notify Function 
function dtm_notify(text)
{	_satellite.notify(text,1);
return true;
}  

// Get URL,Path,Domain & Referrer  
// Trim www and end slash

var get_url = window.location.href;
var getURL = window.location.href;  
var getPath = window.location.host+window.location.pathname;
var getDomain = window.location.host;
var getPathName = window.location.pathname;  
var trimPath = getDomain.replace(/.*?:\/\/www./g, ""); 
var getRef = document.referrer;
  
if(!getRef){getRef="No Referrer"};
trimPath = trimPath.replace("www.", "");
var dir = trimPath.split('/');
var p1 = dir[1];

if(!p1){trimPath = trimPath.substr(0, trimPath.lastIndexOf('/')) || trimPath;}

dtm_notify('trimPath:'+trimPath);




// Set Bootstrap Code based on trimPath Value

switch (trimPath) {
// Capitol Records    
case "capitolrecords.com":
document.write("<script src='//assets.adobedtm.com/e264f00eb0c37aa53085fd9876f9ec341123f732/satelliteLib-16a0aa0f1c2e8594481e1be0b2de1cdf1ca7dd7c.js'</scr'+'ipt>");
break;
// Capitol Records Dev    
case "capitolrecords.umg-wp3-dev.com":
document.write("<script src='//assets.adobedtm.com/e264f00eb0c37aa53085fd9876f9ec341123f732/satelliteLib-16a0aa0f1c2e8594481e1be0b2de1cdf1ca7dd7c-staging.js'</scr'+'ipt>");
break;    
// Ariana Grande     
case "arianagrande.com":
document.write("<script src='//assets.adobedtm.com/e264f00eb0c37aa53085fd9876f9ec341123f732/satelliteLib-ef5eaaf42e368fb381eed313eeca4c7be11bbe0e-staging.js'></scr'+'ipt>");
break;  
// Ariana Grande Dev    
case "arianagrande.umg-wp-stage.com":
document.write("<script src='//assets.adobedtm.com/e264f00eb0c37aa53085fd9876f9ec341123f732/satelliteLib-ef5eaaf42e368fb381eed313eeca4c7be11bbe0e-staging.js'></scr'+'ipt>");
break;      
// Universal Music  
case "universalmusic.com":
document.write("<script src='//assets.adobedtm.com/e264f00eb0c37aa53085fd9876f9ec341123f732/satelliteLib-0d0f9e10b0083a5a1f861296878d5c2b7beb2c0e-staging.js'></scr'+'ipt>");
break;    
// Jessie J     
case "jessiejofficial.com":
document.write("<script src='//assets.adobedtm.com/e264f00eb0c37aa53085fd9876f9ec341123f732/satelliteLib-48322fcf7002761658df8587eda9ddc963fcc5d6.js'</scr'+'ipt>");
break;
// Jessie J Dev    
case "jessiejofficial.umg-wp-stage.com":
document.write("<script src='//assets.adobedtm.com/e264f00eb0c37aa53085fd9876f9ec341123f732/satelliteLib-48322fcf7002761658df8587eda9ddc963fcc5d6-staging.js'</scr'+'ipt>");
break;      
// Katy Perry     
case "katyperry.com":
document.write("<script src='//assets.adobedtm.com/e264f00eb0c37aa53085fd9876f9ec341123f732/satelliteLib-48322fcf7002761658df8587eda9ddc963fcc5d6.js'</scr'+'ipt>");
break;
// Katy Perry Dev    
case "katyperry2.umg-wp3-dev.com":
document.write("<script src='//assets.adobedtm.com/e264f00eb0c37aa53085fd9876f9ec341123f732/satelliteLib-48322fcf7002761658df8587eda9ddc963fcc5d6-staging.js'</scr'+'ipt>");
break;    
// Nick Jonas     
case "nickjonas.com":
document.write("<script src='//assets.adobedtm.com/e264f00eb0c37aa53085fd9876f9ec341123f732/satelliteLib-48322fcf7002761658df8587eda9ddc963fcc5d6.js'</scr'+'ipt>");
break;
// Nick Jonas Dev    
case "nickjonas.umg-wp-stage.com":
document.write("<script src='//assets.adobedtm.com/e264f00eb0c37aa53085fd9876f9ec341123f732/satelliteLib-48322fcf7002761658df8587eda9ddc963fcc5d6-staging.js'</scr'+'ipt>");
break;  
// Def Jam     
case "defjam.com":
document.write("<script src='//assets.adobedtm.com/e264f00eb0c37aa53085fd9876f9ec341123f732/satelliteLib-48322fcf7002761658df8587eda9ddc963fcc5d6.js'</scr'+'ipt>");
break;
// Def Jam Dev    
case "defjam.umg-wp-stage.com":
document.write("<script src='//assets.adobedtm.com/e264f00eb0c37aa53085fd9876f9ec341123f732/satelliteLib-48322fcf7002761658df8587eda9ddc963fcc5d6-staging.js'</scr'+'ipt>");
break;     
// SoMo    
case "officialsomo.com":
document.write("<script src='//assets.adobedtm.com/e264f00eb0c37aa53085fd9876f9ec341123f732/satelliteLib-48322fcf7002761658df8587eda9ddc963fcc5d6.js'</scr'+'ipt>");
break;
// SoMo Dev    
case "officialsomo.umg-wp-stage.com":
document.write("<script src='//assets.adobedtm.com/e264f00eb0c37aa53085fd9876f9ec341123f732/satelliteLib-48322fcf7002761658df8587eda9ddc963fcc5d6-staging.js'</scr'+'ipt>");
break;   
// Angel Haze    
case "angelhazemusic.com":
document.write("<script src='//assets.adobedtm.com/e264f00eb0c37aa53085fd9876f9ec341123f732/satelliteLib-48322fcf7002761658df8587eda9ddc963fcc5d6.js'</scr'+'ipt>");
break;
// Angel Haze Dev    
case "angelhaze.umg-wp-stage.com":
document.write("<script src='//assets.adobedtm.com/e264f00eb0c37aa53085fd9876f9ec341123f732/satelliteLib-48322fcf7002761658df8587eda9ddc963fcc5d6-staging.js'</scr'+'ipt>");
break;    
// Neil Diamond    
case "neildiamond.com":
document.write("<script src='//assets.adobedtm.com/e264f00eb0c37aa53085fd9876f9ec341123f732/satelliteLib-48322fcf7002761658df8587eda9ddc963fcc5d6.js'</scr'+'ipt>");
break;
// Neil Diamond Dev    
case "neildiamond.umg-wp-stage.com":
document.write("<script src='//assets.adobedtm.com/e264f00eb0c37aa53085fd9876f9ec341123f732/satelliteLib-48322fcf7002761658df8587eda9ddc963fcc5d6-staging.js'</scr'+'ipt>");
break;  
// The Madden Brothers    
case "themaddenbrothers.com":
document.write("<script src='//assets.adobedtm.com/e264f00eb0c37aa53085fd9876f9ec341123f732/satelliteLib-48322fcf7002761658df8587eda9ddc963fcc5d6.js'</scr'+'ipt>");
break;
// The Madden Brothers Dev    
case "themaddenbrothers.umg-wp-stage.com":
document.write("<script src='//assets.adobedtm.com/e264f00eb0c37aa53085fd9876f9ec341123f732/satelliteLib-48322fcf7002761658df8587eda9ddc963fcc5d6-staging.js'</scr'+'ipt>");
break;      
// Tove Lo    
case "tove-lo.com":
document.write("<script src='//assets.adobedtm.com/e264f00eb0c37aa53085fd9876f9ec341123f732/satelliteLib-48322fcf7002761658df8587eda9ddc963fcc5d6.js'</scr'+'ipt>");
break;
// Tove Lo Dev    
case "tovelo.umg-wp-stage.com":
document.write("<script src='//assets.adobedtm.com/e264f00eb0c37aa53085fd9876f9ec341123f732/satelliteLib-48322fcf7002761658df8587eda9ddc963fcc5d6-staging.js'</scr'+'ipt>");
break;     
// localhost  
case "localhost":
document.write("<script src='//assets.adobedtm.com/e264f00eb0c37aa53085fd9876f9ec341123f732/satelliteLib-abfc178cf9533b0e200d698077fa29a76d274146.js'></script>");
break; 
    
}

/* 
default:
    document.write("<script src='//assets.adobedtm.com/e264f00eb0c37aa53085fd9876f9ec341123f732/satelliteLib-0d0f9e10b0083a5a1f861296878d5c2b7beb2c0e-staging.js'></scr'+'ipt>");
           
    
}
*/
dtm_notify('DTM:Bootstrap Switch Loaded');

});
