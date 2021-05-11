// Tagname:- closures functional_programming language_fundamentals
// Question
/* Write a function redundant that takes in a string str and returns a function
that returns str.
*/

// Solution
var test = require('../test/test.js');

function redundant(str) {
  return function closure() {
    return str;
  }
}

// Unit Testing
var Test = new test();

const f1 = redundant("apple")
const f2 = redundant("pear")
const f3 = redundant("")

Test.assertEquals(f1(), "apple")
Test.assertEquals(f2(), "pear")
Test.assertEquals(f3(), "")
