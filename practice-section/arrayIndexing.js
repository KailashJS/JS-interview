// Tags:- language_fundamentals arrays
// Question:- 
/* Given an index and array, return the value of the array with the given index. */

//Solution 
var test = require('../test/test.js');

function valueAt(arr, i) {
	let j = Math.floor(i);
	return arr[j];
}


// Unit Test 
let Test = new test();

Test.assertEquals(valueAt([1, 2, 3, 4, 5, 6], 10 / 2), 6)
Test.assertEquals(valueAt([1, 2, 3, 4], 6.535355314 / 2), 4)
Test.assertEquals(valueAt([1, 2], 1.0 / 2), 1)
Test.assertEquals(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2), 5)