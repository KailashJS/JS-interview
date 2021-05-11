// Tagname:- functional_programming logic strings
// Question
/* Character recognition software often makes mistakes when documents (especially
old ones written with a typewritter) are digitized.
Our task is to correct the errors in the digitized text. We only have to handle
the folowing mistakes:

-- A is misinterpreted as 4
-- S is misinterpreted as 5
-- O is misinterpreted as 0
-- I is mistakes as 1

The test cases conrain numbers only by mistakes.
*/
var test = require('../test/test.js');

// Solution
function keyboardMistakes(str) {
  let res = [];
  for (i = 0; i < str.length; i++) {
    if (str[i] == "4") {
      res.push("A");
    }else if (str[i] == "5") {
      res.push("S");
    }else if (str[i] == "0") {
      res.push("O");
    }else if (str[i] == "1") {
      res.push("I")
    }else {
      res.push(str[i]);
    }
  }
  let result = res.join("");
  console.log(result);
  return result;
}

// UNIT TEST
let Test = new test();

Test.assertEquals(keyboardMistakes("MUB45H1R"), "MUBASHIR")
Test.assertEquals(keyboardMistakes("DUBL1N"), "DUBLIN")
Test.assertEquals(keyboardMistakes("51NG4P0RE"), "SINGAPORE")
Test.assertEquals(keyboardMistakes("P4K15T4N"), "PAKISTAN")
Test.assertEquals(keyboardMistakes("P4R15"), "PARIS")
