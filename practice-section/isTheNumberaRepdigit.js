// Tagname:- algebra functional_programming math nnumbers validation

// Question
/* A repdigit is a positive number composed out of the same digit. Create a
function that takes an integer and returns whether it's a repdigit or not.
*/

// Solution
var test = require('../test/test.js');

function isRepdigit(num) {
  let numStr = num.toString();
  let numArr = numStr.split("");
  let numSet = new Set();

  for (let i = 0; i < numArr.length; i++) {
    numSet.add(numArr[i]);
  }

  if(numSet.size == 1) {
    return true;
  } else {
    return false;
  }

}

// Writing the Unit Test
let Test = new test();

Test.assertEquals(isRepdigit(6), true)
Test.assertEquals(isRepdigit(66), true)
Test.assertEquals(isRepdigit(666), true)
Test.assertEquals(isRepdigit(6666), true)
Test.assertEquals(isRepdigit(1001), false)
Test.assertEquals(isRepdigit(-11), false, "The number must be >= 0")
