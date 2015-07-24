
//Function to parse query string
function PageQuery(q) {
  if(q.length > 1) this.q = q.substring(1, q.length);
  else this.q = null;
  this.keyValuePairs = new Array();
  if(q) {
    for(var i=0; i < this.q.split("&").length; i++) {
      this.keyValuePairs[i] = this.q.split("&")[i];
    }
  }
  this.getKeyValuePairs = function() { return this.keyValuePairs; }
  this.getValue = function(s) {
    for(var j=0; j < this.keyValuePairs.length; j++) {
      if(this.keyValuePairs[j].split("=")[0] == s)
        return this.keyValuePairs[j].split("=")[1];
    }
    return null;
  }
  this.getParameters = function() {
    var a = new Array(this.getLength());
    for(var j=0; j < this.keyValuePairs.length; j++) {
      a[j] = this.keyValuePairs[j].split("=")[0];
    }
    return a;
  }
  this.getLength = function() { return this.keyValuePairs.length; }
}

//Function to ensure that only AlphaNumerics and underscore are passed on
function ensureAlphaNumericIndeed(alphanumo)
{
	var trueBlueAlphaNumo = "";
	for(var j=0; j<alphanumo.length; j++)
	{
		var alfalfa = alphanumo.charAt(j);
	  	var hh = alfalfa.charCodeAt(0);
	  	if( (hh > 47 && hh<58) || (hh > 64 && hh<91) || (hh > 96 && hh<123) )
	  	{
			trueBlueAlphaNumo += alfalfa;
		}
		else if(hh == 46)
		{
			trueBlueAlphaNumo += "_";
		}
	}
	return trueBlueAlphaNumo;
}


var rdl_site_name = "menshealth";

//Start the MSFT Extended image tag with the site name
var msft_ext_tag_img = '<img height="1" width="1" src="http://view.atdmt.com/action/MSFT_Rodale_EXTDATA/v3/atc1.' + rdl_site_name;

//Declare and try to obtain the channel, category, topic and subTopic as declared variables from the caller
var msft_computed_channel, msft_computed_category, msft_computed_topic, msft_computed_subtopic;
try{
	msft_computed_channel = msft_internal_channel
	msft_computed_category = msft_internal_category;
	msft_computed_topic = msft_internal_topic;
	msft_computed_subtopic = msft_internal_subtopic;
}
catch(eNoDec)
{
	//DO_NOTHING - sometimes them callers do not declare it so we will try to get it from the query string params
}

try{
	//Parse the query string
	var rdl_page_query= new PageQuery(location.search) ;

	/*
	 * Use the parsed query string object and try obtaining channel, category, topic and subTopic.
	 * The next level is obtained only if the previous level is set in the hierarchy
	 * Convert to an alphanumeric(with underscores) before appending to the MSFT tag
	 *
	 */
	if( msft_computed_channel = (msft_computed_channel?msft_computed_channel:rdl_page_query.getValue("channel")) )
	{
		msft_computed_channel = ensureAlphaNumericIndeed(msft_computed_channel);
		msft_ext_tag_img += '/atc2.'+ msft_computed_channel;
		if( msft_computed_category = (msft_computed_category?msft_computed_category:rdl_page_query.getValue("category")) )
		{
			msft_computed_category = ensureAlphaNumericIndeed(msft_computed_category);
			msft_ext_tag_img += '/atc3.'+ msft_computed_category;
			if( msft_computed_topic = (msft_computed_topic?msft_computed_topic:rdl_page_query.getValue("topic")) )
			{
				msft_computed_topic = ensureAlphaNumericIndeed(msft_computed_topic);
				msft_ext_tag_img += '/atc4.'+ msft_computed_topic;
				if( msft_computed_subtopic = (msft_computed_subtopic?msft_computed_subtopic:rdl_page_query.getValue("subTopic")) )
				{
					msft_computed_subtopic = ensureAlphaNumericIndeed(msft_computed_subtopic);
					msft_ext_tag_img += '/atc5.'+ msft_computed_subtopic;
				}
			}
		}
	}
}
catch(eBadURL)
{
	//DO_NOTHING
}

//Complete the image tag and write it out to the page
msft_ext_tag_img += '"/>';
document.write(msft_ext_tag_img);
