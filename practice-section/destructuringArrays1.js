// Tagname:- arrays language_fundamentals 

// Solution:-
var test = require('../test/test.js');
const arr = [1, 2, 3, 4, 5, 6];
let a, b, rest;
[a, b, ...rest] = arr; 



// Unit Test 
var Test = new test()

function testa(x) {
 return x === arr[0] || x === arr[1] ? true : false 
}

Test.assertEquals(testa(a), true, "Variable a does not equal 1")
Test.assertEquals(testa(b), true, "Variable b does not equal 2")
