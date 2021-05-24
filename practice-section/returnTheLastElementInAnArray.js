// Tagname:- arrays language_dundamentals validation
// Question:- 
/* Create a function that excepts an array and returns the last item in the array */

// Solution:- 
var  test = require('../test/test.js');

function getLastItem(arr) {
	return arr.pop();
}

var Test = new test();

Test.assertEquals(getLastItem(['Cat', 'Dog', 'Duck']), 'Duck')
Test.assertEquals(getLastItem([1, 2, 3]), 3)
Test.assertEquals(getLastItem([undefined]))
Test.assertEquals(getLastItem([true, false, false, true]), true)
Test.assertEquals(getLastItem([7, 'String', false, undefined, null]), null)
Test.assertEquals(getLastItem([false]), false)
Test.assertEquals(getLastItem([undefined, undefined, undefined]), undefined)
Test.assertEquals(getLastItem([1, 2, 3, 56, 87, 23, 65, 45]), 45)
Test.assertEquals(getLastItem(['Apple', 'Orange', undefined]), undefined)
Test.assertEquals(getLastItem([true, false, 'Apple']), 'Apple')
Test.assertEquals(getLastItem([null, null, null]), null)
Test.assertEquals(getLastItem([1]), 1)