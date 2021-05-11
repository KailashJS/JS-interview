// Tagname:- functional_programming interview
// Question
/* Create a simple promise and pass the resolve function a string value of your choice.
Use the setTimeout function as your asynnchronous operation. Your setTimeout() function
should not exceed 1000ms. Store the promise inside a variable named promise.
*/

// Solution
var test = require('../test/test.js');

let promise = new Promise((resolve, reject) => {
  setTimeout(( ) => {
    resolve("Promise Resolved!")
  }, 1000)
})



// Unit test
let Test = new test();

let prom = promise.then((err, res) => {
	if(err) { return err }
	return res
})

prom.then((res) => {
	Test.assertEquals(typeof res, "string", "The promise needs resolve a string." )
})

Test.assertEquals(promise, promise)
