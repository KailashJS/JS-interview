// Tagname:- bugs interview language_fundamentals numbers
// uestion
/* Help fixing swapping of two numbers */

// Solution
var test = require('../test/test.js');

function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
}


// Unit Test
let Test = new test();

Test.assertSimilar(swap(100, 200), [200, 100])
Test.assertSimilar(swap(44, 33), [33, 44])
Test.assertSimilar(swap(21, 12), [12, 21])
Test.assertSimilar(swap(10, 20), [20, 10])
