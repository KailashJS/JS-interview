// Tag:- functional_programming math numbers
var test = require('../test/test.js');

// Question:
/* Create a functin that will work as the modulus operator % withut using the modulus
operator. The modulus operator is a way to determine the reaminder of a division operation.
Insted of returning the result of the dividion, the modulus operation returns the whole number
remainder.
*/
// Solution

function mod(a, b){
  let res = 0;
  if (b !== 0){
    let quo = a / b;
    console.log(quo)
    let wquo = Math.floor(quo);
    console.log(wquo);
    let diff = 0;
    diff = quo - wquo;
    console.log(diff);
    res = b * diff;
  }else {
    res = null;
  }
  let res_d = parseInt(res);
  return res_d;
  // console.log(Math.floor(res));
  // return Math.floor(res);

}



// Unit Test
let Test = new test();

Test.assertEquals(mod(0, 3), 0)
Test.assertEquals(mod(1, 3), 1)
Test.assertEquals(mod(5, 3), 2)
Test.assertEquals(mod(4, 5), 4)
Test.assertEquals(mod(218, 5), 3)
