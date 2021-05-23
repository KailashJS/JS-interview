// Tagname:- arrays language_fundamentals 
// Question:- Create a function that takes an array containing only numbers and returns the first element.

// Solution
var test = require('../test/test.js');

function getFirstValue(arr) {
	return arr[0];
}

// getFirstValue(arr);
// Unit Test
let Test = new test();

Test.assertEquals(getFirstValue([1, 2, 3]), 1)
Test.assertEquals(getFirstValue([80, 5, 100]), 80)
Test.assertEquals(getFirstValue([-500, 0, 50]), -500)
Test.assertEquals(getFirstValue([5, 2, 3]), 5)
Test.assertEquals(getFirstValue([75675, 5, 100]), 75675)
Test.assertEquals(getFirstValue([-52320, 0, 50]), -52320)