// Tagname:- arrays bugs language_fundamentals 
// Question:-
/* Fix the code in the code tab to pass this challange */

// Solution:- 
var test = require('../test/test.js');

function sumArray(arr) {
	let sum = 0;
	for (let i=0; i<arr.length; i++) {
		sum+=arr[i];
	}
	return sum;
}

// Unit Test 
let Test = new test();

Test.assertSimilar(sumArray([1, 2, 3, 4, 5]), 15)
Test.assertSimilar(sumArray([-1, 0, 1]), 0)
Test.assertSimilar(sumArray([0, 4, 8, 12]), 24)