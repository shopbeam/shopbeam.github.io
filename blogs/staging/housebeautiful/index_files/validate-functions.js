function isChosen(optionObj)
{
	var selected=0;
	if(optionObj.checked == true) {
		selected=1;
	} else {
		for(var i=0; i < optionObj.length; ++i)
		{
			if(optionObj[i].checked==true)
			{
				selected = 1;
			}
		}
		if(!selected)
		{
			return false;
		}
	}
	return true;
}

function isSelected(selectObj)
{
	if(selectObj && selectObj.options)
	{
		var retVal = selectObj.options[selectObj.selectedIndex].value;
		return retVal;
	}
	return false;
}

function isFilled(stringObj)
{
	stringObj = stripSpaces(stringObj);
	if(stringObj == "")
	{
		return false;
	}
	else
	{
		return true;
	}
}

function stripSpaces(field)
{
    while (field.substring(0,1) == ' ') field = field.substring(1);
    while (field.substring(field.length-1,field.length) == ' ') field = field.substring(0,field.length-1);
    return field;
}

function isValidCCType(ccNum, pt_id) {

	var cardNumbersOnly = ccNum.replace(/ /g,"");
	var cardNumberLength = cardNumbersOnly.length;
	var lengthIsValid = false;
	var prefixIsValid = false;
	var prefixRegExp;

	var masterCardRegExp 	= /^5[1-5]/;
	var visaRegExp 			= /^4/;
	var amexRegExp 			= /^3(4|7)/;
	var dinersClubRegExp 	= /^3(0[0-5]|6|8)/;
	var discoverCardRegExp 	= /^6(011|22[1-9]|4[4-9]|5)/;

	switch(pt_id)
	{
		/* master card */
		case '1':
			lengthIsValid = (cardNumberLength == 16);
			prefixRegExp = masterCardRegExp;
			break;

		/* visa */
		case '2':
			lengthIsValid = (cardNumberLength == 16 || cardNumberLength == 13);
			prefixRegExp = visaRegExp;
			break;

		/* american express */
		case '3':
			lengthIsValid = (cardNumberLength == 15);
			prefixRegExp = amexRegExp;
			break;

		/* diners club */
		case '4':
			lengthIsValid = (cardNumberLength == 14);
			prefixRegExp = dinersClubRegExp;
			break;

		/* discover card */
		case '5':
			lengthIsValid = (cardNumberLength == 16);
			prefixRegExp = discoverCardRegExp;
			break;

		default:
			prefixRegExp = /^$/;
			alert("Unknown Card Type");
	}

	prefixIsValid = prefixRegExp.test(cardNumbersOnly);
	typeIsValid = prefixIsValid && lengthIsValid;

	if(!typeIsValid) {
	/* we attempt to match a regExp to it and display a user friendly error message */
		var suggestedType;
		if(masterCardRegExp.test(cardNumbersOnly)) {
			suggestedType = 'MasterCard';
		}
		else if(visaRegExp.test(cardNumbersOnly)) {
			suggestedType = 'Visa';
		}
		else if(amexRegExp.test(cardNumbersOnly)) {
			suggestedType = 'American Express';
		}
		else if(dinersClubRegExp.test(cardNumbersOnly)) {
			suggestedType = 'Diners Club';
		}
		else if(discoverCardRegExp.test(cardNumbersOnly)) {
			suggestedType = 'Discover';
		}
		else {
			/* we let unknown types pass just incase some new type is introduced in the future:
			http://en.wikipedia.org/wiki/Credit_card_numbers*/
			return true;
		}

		alert("The credit card type you have selected does not seem valid.\nPlease try choosing '" + suggestedType + "' and re-submit.");

		return false;
	}

	return true;
}

function isLuhn(ccNum)
{
    var cardNum = ccNum;
    var len = cardNum.length;

    if (len < 2)  {
        return false;
    }
    var checksum = 0;

    for (var i = 1; i < len; i++) {
        var ch = cardNum.charAt(len - 1 - i);
        var digit = parseInt(ch);
        var temp = digit * (1 + (i % 2));
        if (temp < 10)
          checksum = checksum + temp;
        else
          checksum = checksum + temp - 9;
    }

    checksum = (10 - (checksum % 10)) % 10;

    if (parseInt(cardNum.charAt(len - 1)) != checksum)
      return false;

    return true;
}

function isNumeric(strString)
{
	return validChars(strString, "1234567890");
}

function validChars(strString, strValidChars)
{
   if (!strString) return false;

   for (var i = 0; i < strString.length; i++) {
      if (strValidChars.indexOf(strString.charAt(i)) < 0)
         return false;
   }
   return true;
}

function invalidChars(strString, strInvalidChars)
{
   if (!strString) return false;

   for (var i = 0; i < strString.length; i++) {
      if (strInvalidChars.indexOf(strString.charAt(i)) != -1)
         return false;
   }
   return true;
}

function isEmail(string)
{
    if(string.search)
    {
        if (string.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]{2,}$/) != -1)
            return true;
        else
            return false;
    }
    else
    {
        if(!invalidChars(string,"*|,\":<>[]{}`\';()&$#%"))
        {
            return false;
        }
        if(string.indexOf('@') < 0 || string.indexOf('.') < 0)
        {
            return false;
        }
    }
    return true;
}
