// Tagname:- arrays language_fundamentals
// Question:- 
/* Given two arguments, return an array which contains these two ar gukments.*/

// Solution:- 
var test = require('../test/test.js');

function makePair(num1, num2) {
	let arr = [];
	arr.push(num1);
	arr.push(num2);
	console.log(arr);
	return arr;
}

// Unit Test 
let Test = new test();

Test.assertSimilar(makePair(1, 2), [1, 2])
Test.assertSimilar(makePair(21, 82), [21, 82])
Test.assertSimilar(makePair(4213, 526), [4213, 526])
