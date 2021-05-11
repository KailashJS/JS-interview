// Tagname:- functional_programming
// Question
/* While value range is 0-1023, reference range is 0-5.00volts. Value and
reference is directly proportional.
*/

// Solution
var test = require('../test/test.js');

function adc(value) {
  let res = (value / 1023) * 5;
  let result = Math.round(res * 100) / 100;
  console.log(result);
  return result;
}

// Unit Testing
let Test = new  test();

Test.assertEquals(adc(1023), 5)
Test.assertEquals(adc(0), 0)
Test.assertEquals(adc(500), 2.44)
Test.assertEquals(adc(400), 1.96)
Test.assertEquals(adc(850), 4.15)
