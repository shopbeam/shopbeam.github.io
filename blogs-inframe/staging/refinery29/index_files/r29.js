// --------------------------------------------------------------------------------------------
// // R29 AB Testing
// // --------------------------------------------------------------------------------------------
// R29.tester is an object to perform
// a/b and multivariant testing, results
// are recorded to google analytics.
// /**
//  * Author: Ben Wilson ben.wilson@refinery29.com
//  * Version: 1.0 Copied from legacy code by Patty Delgado
//  */

define(['r29/r29.cookie'], function (Cookie) {
  
  var all_tests = [];
  
  function render (obj) {

    // obj:
    //   id = 123, the id of the test
    //   step_name = "step_1", if the test has multiple parts
    //   weighted = boolean, if true & weights provided foreach variant then weighted selection
    //   variants = [] of javascript variant object with name and code

    var obj = obj || {},
        id, step_name,
        variant_length,
        testing_code,
        i = 0, _index;
        
    // push obj to all_tests
    all_tests.push(obj);

    if (typeof obj.id === 'undefined' || 
        typeof obj.step_name === 'undefined' || 
        typeof obj.variants === 'undefined') {
            return; // maybe add an error?
    }
    
    id = obj.id;
    step_name = obj.step_name;
    variant_length = obj.variants.length;
    if (typeof obj.cookie_name !== 'undefined' 
        && obj.cookie_name !== '') {
      testing_code = parseFloat(Cookie.get(obj.cookie_name));
    }
    else {
      // testing_code: a Math.random() float b/t 0 and 1 assigned to each user in a cookie
      testing_code = parseFloat(Cookie.get('testing_code'));
    }
    //if (typeof obj.cookieOptions !== 'undefined') {}
    // choose weighted or randomized variant
    if (typeof obj.weighted !== "undefined" && obj.weighted === true) {
      _index = choose_by_weight(testing_code, variant_length, obj.variants);
    } else {
      _index = choose(testing_code, variant_length);
    }
    obj.variants[_index].code();
    //measureImpression(id, step_name, obj.variants[_index].name);
  }
  // end render

  function choose (testing_code, variant_length) {
    var index;
    // Math.floor( .45 / ( 1 / 5)) = 2 of (0-4) with 5 variants
    index = Math.floor( testing_code / ( 1 / variant_length) );
    return index;
  }
  // end choose

  function choose_by_weight (testing_code, variant_length, variants) { // return variants index
    var index, total_weight, total_so_far, user;
    index = 0;
    total_weight = 0;
    total_so_far = 0;

    while (variant_length --) {
      total_weight += variants[variant_length].weight;
    }

    user = testing_code * total_weight;

    // Find the one to stop on
    while (user > total_so_far) {
      total_so_far += variants[index].weight;
      if (user > total_so_far) {
        index ++;
      }
    }

    // Return
    return index;
  }
  // end choose_by_weight

  function measureImpression (id, step_name, variant_name) {
    //console.log("Impression: " + id + ", " + step_name + ", " + variant_name);
    //R29.cookie.set('testing_'+id, id+'||'+step_name+'||'+ variant_name);
  }
  
  function measureClick_thru (id, step_name, variant_name) {
    // console.log("Click Thru: " + id + ", " + step_name + ", " + variant_name);
    // R29.cookie.set('testing_' + id, id + '||' + step_name + '||' + variant_name + '||ctr');
  }
  
  function measureConversion (id, step_name, variant_name) {
    // console.log("Conversion: " + id + ", " + step_name + ", " + variant_name);
    // R29.cookie.remove('testing_'+id);
  }
  
  function preview (index, variant) {
    var selector,
        i;

    all_tests[index].variants[variant].code();
    
  }
  // end preview
  
  return {
    render: render,
    preview: preview
  };
  
  /* // EXAMPLE
  var weight_5 = 0;
  var weight_95 = 0;
  
  for (var b = 0; b < 1000; b++) {
  
  render({
    id : '123',
    step_name : 'collection_widget',
    weighted : true,
    variants : [
      { name : 'show',
        code : function() {
          $('#container').css('background', 'red');
        },
        weight : 5
      },
      { name : 'hide',
        code : function() {
          $('#container').css('background', 'black');
        },
        weight : 95
      }
    ]
  });
  
  }
  */

});
