  
  function validateShippingAddress(){
    // VALIDATE SHIPPING FIELDS

      if(document.getElementById('shippingFirstName').value == '')
      {
        document.getElementById('shippingFirstName').className = 'fieldError';
      }
      if(document.getElementById('shippingLastName').value == '')
      {
        document.getElementById('shippingLastName').className = 'fieldError';
      }
      if(document.getElementById('shippingAddress1').value == '')
      {
        document.getElementById('shippingAddress1').className = 'fieldError';
      }
      if(document.getElementById('shippingCity').value == '')
      {
        document.getElementById('shippingCity').className = 'fieldError';
      }
      if(document.getElementById('shippingST').value == '')
      {
        document.getElementById('shippingST').className = 'fieldError';
      }
      if(document.getElementById('shippingZip1').value == '')
      {
        document.getElementById('shippingZip1').className = 'zipCode1 fieldError';
      }
      if(document.getElementById('shippingCountry').value == '')
      {
        document.getElementById('shippingCountry').className = 'fieldError';
      }
      if(document.getElementById('shippingPhone1').value == '')
      {
        document.getElementById('shippingPhone1').className = 'phone1 fieldError';
      }
      if(document.getElementById('shippingPhone2').value == '')
      {
        document.getElementById('shippingPhone2').className = 'phone2 fieldError';
      }
      if(document.getElementById('shippingPhone3').value == '')
      {
        document.getElementById('shippingPhone3').className = 'phone3 fieldError';
      }
  }

  function validateBillingAddress(){
    // VALIDATE BILLING FIELDS
    if(document.getElementById('billingFirstName').value == '')
    {
      document.getElementById('billingFirstName').className = 'fieldError';
    }
    if(document.getElementById('billingLastName').value == '')
    {
      document.getElementById('billingLastName').className = 'fieldError';
    }
    if(document.getElementById('billingAddress1').value == '')
    {
      document.getElementById('billingAddress1').className = 'fieldError';
    }
    if(document.getElementById('billingCity').value == '')
    {
      document.getElementById('billingCity').className = 'fieldError';
    }
    if(document.getElementById('billingST').value == '')
    {
      document.getElementById('billingST').className = 'fieldError';
    }
    if(document.getElementById('billingZip1').value == '')
    {
      document.getElementById('billingZip1').className = 'zipCode1 fieldError';
    }
    if(document.getElementById('billingCountry').value == '')
    {
      document.getElementById('billingCountry').className = 'fieldError';
    }
    if(document.getElementById('billingPhone1').value == '' || document.getElementById('billingPhone1').value.length < 3)
    {
      document.getElementById('billingPhone1').className = 'phone1 fieldError';
    }
    if(document.getElementById('billingPhone2').value == '' || document.getElementById('billingPhone2').value.length < 3)
    {
      document.getElementById('billingPhone2').className = 'phone2 fieldError';
    }
    if(document.getElementById('billingPhone3').value == '' || document.getElementById('billingPhone3').value.length < 4)
    {
      document.getElementById('billingPhone3').className = 'phone3 fieldError';
    }

  }

  function validateRedemption()
  {

    validateShippingAddress()


    hasBillingInfo=false
    $('input[name^="billing"], input[name^="credit"]').each( function() {
      if($(this).val())
        hasBillingInfo = true
    })

    if(hasBillingInfo){
      validateBillingAddress()
      validateCreditCard()
    }
    else{
      //reset all errors
      $('input[name^="billing"],  input[name^="credit"], select[name^="billing"], select[name^="credit"]').each( function() {
        var currentClass = $(this).attr("class")
        if(currentClass){
          if(currentClass.indexOf("fieldError")>0)
            $(this).attr("class",currentClass.substr(0,currentClass.indexOf(" ")))
          else if( currentClass=="fieldError")
            $(this).attr("class","")
        }
      })
    }

    // CHECK FOR ERRORS & SUBMIT PAGE FORWARD

    var tally = $("[class$='fieldError']").size()
    if(tally == 0)
    {
      return true;
    }
    return false;
  }


  function validateCreditCard(){
 // VALIDATE PAYMENT FIELDS
    if(document.getElementById('creditCardName').value == '')
    {
      document.getElementById('creditCardName').className = 'fieldError';
    }
    if(document.getElementById('creditCardNumber').value == '')
    {
      document.getElementById('creditCardNumber').className = 'ccField fieldError';
    }
    if(document.getElementById('creditCardExpMM').value == '')
    {
      document.getElementById('creditCardExpMM').className = 'fieldError';
    }
    if(document.getElementById('creditCardExpYYYY').value == '')
    {
      document.getElementById('creditCardExpYYYY').className = 'fieldError';
    }
    if(document.getElementById('ccvField').value == '')
    {
      document.getElementById('ccvField').className = 'ccvAmex fieldError';
    }


  }

  function validatePage(isGift)
  {
    if (typeof isGift == 'undefined')
      isGift=false

    validateBillingAddress()

    if(!isGift)
    {
      if(document.getElementById('sameAsBilling').checked == false)
      {
        validateShippingAddress()
      }
    }

    validateCreditCard()
    // SHORTENED VERSION OF CREDIT CARD NUMBER
    document.getElementById('lastFourCC').value = document.getElementById('creditCardNumber').value.substr(document.getElementById('creditCardNumber').value.length - 4);

    // CHECK FOR ERRORS & SUBMIT PAGE FORWARD
    var tally = $("[class$='fieldError']").size()
    if(tally == 0)
    {
      return true;
    }
    return false;
  }


  // MATCH BILLING ADDRESS
  function matchBilling()
  {
    if (document.getElementById('sameAsBilling').checked == true)
    {
      $('#shippingContainer').hide();
      $('#shippingContainer input,#shippingContainer select').removeClass('fieldError').val('');
    }
    else
    {
      if($("#shippingCountryQAS").val()==''){
        $("#shippingCountryQAS").val('USA')
      }
      $('#shippingContainer').show();
    }
  }

  $(document).ready(function () {

    // PHONE AUTO-TAB
    $('.phone1,.phone2').keyup(function(){
      if($(this).val().length == 3)
      { $(this).next('input').focus(); }
    });

    // CLEAR FIELD ERRORS
    $('input,select').blur(function(){
      if($(this).val() != '')
      { $(this).removeClass('fieldError'); }
    });

    /* 10/08/12 */
    // CREDIT CARD IDENTIFIER
    $('#creditCardNumber').blur(function(){

      var identifier = $(this).val().substring(0,2);

      switch($(this).val().length)
      {
        case 15:
          // AMEX
          if(identifier == '34' || identifier == '37')
          {
            $('#ccIcon').attr('src','http:www.ipsy.com/images/cc_amex.png');
            $('#creditCardType').val('Amex');
          }
          else{
            $('#ccIcon').attr('src','http:www.ipsy.com/images/cc_blank.png');
            $('#creditCardType').val('');
            $('#creditCardNumber').addClass('fieldError');
          }

          break;

        case 16:
          // VISA
          if(parseInt(identifier) >= 40 && parseInt(identifier) <= 49)
          {
            $('#ccIcon').attr('src','http:www.ipsy.com/images/cc_visa.png');
            $('#creditCardType').val('Visa');
          }

          // MASTERCARD
          else if(parseInt(identifier) >= 51 && parseInt(identifier) <= 55)
          {
            $('#ccIcon').attr('src','http:www.ipsy.com/images/cc_mastercard.png');
            $('#creditCardType').val('MasterCard');
          }

          // DISCOVER
          else if(identifier == '60' || identifier == '65')
          {
            $('#ccIcon').attr('src','http:www.ipsy.com/images/cc_discover.png');
            $('#creditCardType').val('Discover');
          }

          else
          {
            $('#ccIcon').attr('src','http:www.ipsy.com/images/cc_blank.png');
            $('#creditCardType').val('');
            $('#creditCardNumber').addClass('fieldError');
          }

          break;

        default:
          $('#ccIcon').attr('src','http:www.ipsy.com/images/cc_blank.png');
          $('#creditCardType').val('');
          $('#creditCardNumber').addClass('fieldError');
          break;
      }

    });

  });