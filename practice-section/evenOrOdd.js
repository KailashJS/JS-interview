// Tagname:- algorithms arrays language_fundamentals 
// Question:- 
/* Determine whether sum is odd or even */

// Solution:- 
var test = require('../test/test.js');

function evenOrOdd(arr) {
	let sum = 0;
	for(let i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	if(sum % 2 === 0) {
		return 'even'
	} else {
		return 'odd'
	}
}

var Test = new test();

Test.assertEquals(evenOrOdd([0]), 'even')
Test.assertEquals(evenOrOdd([1]), 'odd')
Test.assertEquals(evenOrOdd([]), 'even')
Test.assertEquals(evenOrOdd([0, 1, 5]), 'even')
Test.assertEquals(evenOrOdd([0, 1, 3]), 'even')
Test.assertEquals(evenOrOdd([1023, 1, 2]), 'even')
Test.assertEquals(evenOrOdd([0, -1, -5]), 'even')
Test.assertEquals(evenOrOdd([0, -1, -3]), 'even')
Test.assertEquals(evenOrOdd([-1023, 1, -2]), 'even')
Test.assertEquals(evenOrOdd([0, 1, 2]), 'odd')
Test.assertEquals(evenOrOdd([0, 1, 4]), 'odd')
Test.assertEquals(evenOrOdd([1023, 1, 3]), 'odd')
Test.assertEquals(evenOrOdd([0, -1, 2]), 'odd')
Test.assertEquals(evenOrOdd([0, 1, -4]), 'odd')
Test.assertEquals(evenOrOdd([-1023, -1, 3]), 'odd')