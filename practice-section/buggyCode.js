// Tagname:- bugs formatting interview strings
// Solution
var test = require('../test/test.js');

function removeNumbers(str) {
  let result = str.split('').filter(c => isNaN(c)).join('');
  console.log(result);
  // AMS AMS AMS AMS
  return result;
}

removeNumbers("mubashir1");
// Unit Test
let Test = new test();

Test.assertEquals(removeNumbers("mubashir1"), "mubashir")
Test.assertEquals(removeNumbers("12ma23tt"), "matt")
Test.assertEquals(removeNumbers("e1d2a3b4i5t6"), "edabit")
Test.assertEquals(removeNumbers("pakistan007"), "pakistan")
Test.assertEquals(removeNumbers("ai4653rf53or4235ce"), "airforce")
