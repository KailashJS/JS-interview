// Tagname:- Arrays language_fundamentals numbers
// Question:- 
/* Write a Function to reverse an Array */

// Solution
var test = require('../test/test.js');

function reverse(arr) {
	return arr.reverse();
}

// Unit Test
let Test = new test();

Test.assertSimilar(reverse([1, 2, 3, 4]), [4, 3, 2, 1])
Test.assertSimilar(reverse([5, 6, 7]), [7, 6, 5])
Test.assertSimilar(reverse([9, 9, 2, 3, 4]), [4, 3, 2, 9, 9])
Test.assertSimilar(reverse([3, 3]), [3, 3])
Test.assertSimilar(reverse([-1, -1, -1]), [-1, -1, -1])
Test.assertSimilar(reverse([]), [])