var inputVal = 1;

var hasBillMe = false;
var checkedBillMe = false;

function isRequired(argname,notRequired)
{
        if(notRequired[argname])
        {
                return false;
        }
        return true;
}

function replaceAll(str,find,repl)
{
        while(str.indexOf(find) >= 0)
        {
                str = str.replace(find,repl);
        }
        return str;
}

function isIntl(frm,fieldName)
{
        if ( typeof domestic_billme_only == "undefined" ) domestic_billme_only = 1;

	if ( domestic_billme_only == 0 ) return false;

        if ( typeof domestic_countries == "undefined" ) {
		domestic_countries    = new Array();
		domestic_countries[0] = 'US';
		domestic_countries[1] = 'CA';
        }

        if(!fieldName)
        {
                fieldName = "country_code";
        }
        if(frm.elements[fieldName] && frm.elements[fieldName].options)
        {
		if ( inputVal ) {
			var isIntl = 1;
			var country = frm.elements[fieldName];
			for( var i = 0; i < domestic_countries.length; i++ ) {
				var value = country.options[country.selectedIndex].value;
				if ( value == domestic_countries[i] ) isIntl = 0;
			}
			if ( isIntl == 1 ) return true;
		}
        }
        return false;
}

function checkBillMe(frmElement)
{
        var frm = frmElement.form;
        if(frm.elements['pt_id'] && frm.elements['pt_id'].options)
        {
                var intlFlag = false;
                if(frm.elements['country_code'] && !intlFlag)
                {
                        intlFlag = isIntl(frm,'country_code');
                }
                if(frm.elements['ship_country_code'] && !intlFlag)
                {
                        intlFlag = isIntl(frm,'ship_country_code');
                }
                var billMeFound = new Array();
                for(var i = 0; i < frm.elements['pt_id'].options.length; ++i)
                {
                    if(paymentTypes)
                    {
                        if(paymentTypes[frm.elements['pt_id'].options[i].value] == 'bill me')
                        {
                                billMeFound.push(i);
                        }
                    }
                    else
                    {
                        if(frm.elements['pt_id'].options[i].value == 6)
                        {
                                billMeFound.push(i);
                        }
                    }
                }
                if(!checkedBillMe)
                {
                        checkedBillMe = true;
                        if(billMeFound.length > 0)
                        {
                                hasBillMe = true;
                        }
                }
                if(intlFlag)
                {
                        if(billMeFound.length > 0)
                        {
                            for(var i=0;i<billMeFound.length;++i)
                            {
                                frm.elements['pt_id'].options[billMeFound[i]]=null;
                            }
                        }
                }
                else if(hasBillMe)
                {
                        if(billMeFound.length == 0)
                        {
                                var newIndex = frm.elements['pt_id'].length;
                                if(paymentNames && paymentTypes)
                                {
                                    for(var i = 0; i < paymentTypes.length; ++i)
                                    {
                                        if(paymentTypes[i] == 'bill me')
                                        {
                                            frm.elements['pt_id'].options[newIndex] = new Option(paymentNames[i], i);
                                            newIndex++;
                                        }
                                    }
                                }
                                else
                                {
                                    frm.elements['pt_id'].options[newIndex] = new Option("Bill Me", 6);
                                }
                        }
                }
        }
}

function validateFrm(frm,checkAllShip)
{
        var notRequired = new Array();
        notRequired['address2']=1;
        notRequired['ship_address2']=1;
        notRequired['ship_email']=1;
        notRequired['credit_card_number']=1;
        notRequired['credit_card_exp_month']=1;
        notRequired['credit_card_exp_year']=1;
        notRequired['pt_id']=1;
	notRequired['account_holder']=1;
	notRequired['branch_sort_code']=1;
	notRequired['account_number']=1;
	notRequired['reference_number']=1;
        if(frm.elements['pt_id'] && frm.elements['pt_id'].options)
        {
                if(!isSelected(frm.elements['pt_id']) && inputVal)
                {
                        alert("Please select a payment option");
                        frm.elements['pt_id'].focus();
                        return false;
                }
		else if(isSelected(frm.elements['pt_id']) == 30 && inputVal ) {
			notRequired['account_holder']=0;
			notRequired['branch_sort_code']=0;
			notRequired['account_number']=0;
		}
                else if(isSelected(frm.elements['pt_id']) < 6 && inputVal)
                {
                        if(!isLuhn(frm.elements['credit_card_number'].value))
                        {
                                alert("Please enter a valid credit card number.");
                                frm.elements['credit_card_number'].focus();
                                return false;
                        }

						/* validating card type matched with card number */

                        if(!isValidCCType(frm.elements['credit_card_number'].value, frm.elements['pt_id'].value))
                        {
                                return false;
                        }

                        var now = new Date();
                        var nowYr = now.getYear();
                        var nowMn = now.getMonth();
                        if(nowYr < 2000)
                        {
                                nowYr += 1900;
                        }
                        now = new Date(nowYr,nowMn);
                        var ccExpMon;
                        var ccExpYear;
                        if(frm.elements['credit_card_exp_month'].type.indexOf('select') < 0)
                        {
                                ccExpMon = frm.elements['credit_card_exp_month'].value;
                                ccExpYear = frm.elements['credit_card_exp_year'].value;
                        }
                        else
                        {
                                ccExpMon = isSelected(frm.elements['credit_card_exp_month']);
                                ccExpYear = isSelected(frm.elements['credit_card_exp_year']);
                        }
                        if(ccExpYear.length < 4)
                        {
                                if(!ccExpYear)
                                {
                                        ccExpYear = 0;
                                }
                                ccExpYear = 2000 + parseInt(ccExpYear, 10);
                        }
                        var exp = new Date(ccExpYear,ccExpMon-1);
                        var diff = exp - now;
                        if(diff < 0)
                        {
                                alert("Credit card already expired.");
                                frm.elements['credit_card_exp_month'].focus();
                                return false;
                        }
                        notRequired['credit_card_number']=0;
                        notRequired['credit_card_exp_month']=0;
                        notRequired['credit_card_exp_year']=0;
                }
        }
        if((isIntl(frm,'country_code') || isIntl(frm,'ship_country_code')) && inputVal)
        {
                notRequired['state']=1;
                notRequired['postal_code']=1;
                notRequired['ship_state']=1;
                notRequired['ship_postal_code']=1;
                notRequired['credit_card_number']=0;
                notRequired['credit_card_exp_month']=0;
                notRequired['credit_card_exp_year']=0;

		if(isSelected(frm.elements['pt_id']) == 30 && inputVal) {
                        notRequired['account_holder']=0;
                        notRequired['branch_sort_code']=0;
                        notRequired['account_number']=0;
	                notRequired['credit_card_number']=1;
        	        notRequired['credit_card_exp_month']=1;
                	notRequired['credit_card_exp_year']=1;
		}
                else if(frm.elements['pt_id'] && frm.elements['pt_id'].options)
                {
                        if(isSelected(frm.elements['pt_id']) == 6)
                        {
                                alert("International orders require credit card information.");
                                frm.elements['pt_id'].focus();
                                return false;
                        }
                }
        }

        if(frm.elements['ship_address'] && frm.elements['ship_address'].length > 1 && !checkAllShip)
        {
            var allEmpty = 1;
            var anyError = 0;
            for(var i = 0; i < frm.elements['ship_address'].length; ++i)
            {
                if(!verifyShip(frm,i))
                {
	                return false;
                }
//                if(result == 2)
//                {
//                    allEmpty = 0;
//                }
//                else if (result == 0)
//                {
//                    anyError = 1;
//                }
            }
//            if(!allEmpty && !anyError)
//            {
                notRequired['ship_first_name']=1;
                notRequired['ship_last_name']=1;
                notRequired['ship_address']=1;
                notRequired['ship_city']=1;
                notRequired['ship_state']=1;
                notRequired['ship_postal_code']=1;
                notRequired['ship_country_code']=1;
                notRequired['ship_email']=1;
//            }
        }

        for(var i=0; i<frm.elements.length;++i)
        {
                var elName = frm.elements[i].name;
                var dsName;
                if(elName)
                {
                        dsName = replaceAll(elName,"_"," ");
			dsName = replaceAll(dsName, "gt code", "code");
                        if (dsName == 'state') {
                            dsName = 'state or province';
                        }
                        if(elName.indexOf('email') > -1 && frm.elements[i].type == "text" && isFilled(frm.elements[i].value))
                        {
                                if(!isEmail(frm.elements[i].value))
                                {
                                        alert("Please fill in a valid "+dsName+".");
                                        frm.elements[i].focus();
                                        return false;
                                }
                        }
                        if(isRequired(elName,notRequired))
                        {
                                if(frm.elements[i].type == "text")
                                {
                                        if(!isFilled(frm.elements[i].value))
                                        {
                                                alert("Please fill out your "+dsName+".");
                                                frm.elements[i].focus();
                                                return false;
                                        }
                                        if(frm.elements[i].value.indexOf('>') > -1 || frm.elements[i].value.indexOf('<') > -1)
                                        {
                                                alert("Please do not use characters like '<' or '>' when filling out this field.");
                                                frm.elements[i].focus();
                                                return false;
                                        }
                                }
                                else if (!(frm.elements[i].type.indexOf("select") < 0))
                                {
                                        if(!isSelected(frm.elements[i]))
                                        {
                                                alert("Please select your "+dsName+".");
                                                frm.elements[i].focus();
                                                return false;
                                        }
                                }
                        }
                }
        }
        return true;
}

function verifyShip(frm, elCount)
{
    var shipFields = new Array();
    shipFields['ship_first_name'] = frm.elements['ship_first_name'][elCount].value;
    shipFields['ship_last_name'] = frm.elements['ship_last_name'][elCount].value;
    shipFields['ship_address'] = frm.elements['ship_address'][elCount].value;
    shipFields['ship_city'] = frm.elements['ship_city'][elCount].value;
    if(frm.elements['ship_state'][elCount].type.indexOf("select") < 0)
    {
        shipFields['ship_state'] = frm.elements['ship_state'][elCount].value;
    }
    else
    {
        shipFields['ship_state'] = isSelected(frm.elements['ship_state'][elCount]);
    }
    shipFields['ship_postal_code'] = frm.elements['ship_postal_code'][elCount].value;
    if(frm.elements['ship_country_code'][elCount].type.indexOf("select") < 0)
    {
        shipFields['ship_country_code'] = frm.elements['ship_country_code'][elCount].value;
    }
    else
    {
        shipFields['ship_country_code'] = isSelected(frm.elements['ship_country_code'][elCount]);
    }
    var thisIntl = false;
    if(shipFields['ship_country_code'] != 'US' && shipFields['ship_country_code'] != 'CA')
    {
	    thisIntl = true;
    }

//  shipFields['ship_email'] = 1;
    var allEmpty = 1;
    var allFilled = 1;
    var emptyField;
    for (var ship_field in shipFields)
    {
        if(shipFields[ship_field] != '')
        {
            allEmpty = 0;
        }
        else if(thisIntl && (ship_field == 'ship_state' || ship_field == 'ship_postal_code'))
        {
        }
        else if (allFilled)
        {
            allFilled = 0;
            emptyField = ship_field;
        }
    }
    if(allEmpty)
    {
        return 1;
    }
    else if(allFilled)
    {
        return 2;
    }
    else
    {
        for (var ship_field in shipFields)
        {
	        if(shipFields[ship_field] == '')
	        {
                var dsName = replaceAll(ship_field,"_"," ");
                alert("Please fill out your "+dsName);
		        frm.elements[ship_field][elCount].focus();
		        return false;
	        }
        }
        return 0;
    }
}
