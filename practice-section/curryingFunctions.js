// Tagname:- arrays closures functional_programming interview nnumbers

// Question
/* Mubashir was reading about Currting Functions. He needs your help to multiply
an array of numbers using currying functions.

Create a function which takes a array arr of integers as an argument. This function
must return another function, which takes a single integer as an argument and returns
new array.

The returned array should consist of each of the elements from the first array multiplied
by the integer */

var test = require('../test/test.js');

// Solution
function multiply(arr) {
  return function(n) {
    let result = arr.map(arr => arr * n);
    console.log(result);
    return result;
  };
}


// Resource and Practice
// Currying is an advanced technique of working with functions. It's used not
// only in javascript, but in other language as well.

// Currying is a transformation of functions that translates a function from
// callable as f(a, b, c) into callable as f(a)(b)(c).

// Currying doesn't call a function. It just transform it


// Unit Test
let Test = new test();

Test.assertSimilar(multiply([1, 2, 3])(1), [1, 2, 3])
Test.assertSimilar(multiply([1, 2, 3])(2), [2, 4, 6])
Test.assertSimilar(multiply([1, 2, 3])(0), [0, 0, 0])
Test.assertSimilar(multiply([4, 6, 5])(10), [40, 60, 50])
Test.assertSimilar(multiply([])(10), [], "should return an empty array")
