// Tagname:- functional_programming
// Question
/* Reject the promise  with the simple string "It's not a dog!".
*/

// Solution
var test = require('../test/test.js');

let promise = new Promise( (resolve, reject) => {
  let animal = "cat"
  setTimeout(() => {
    if(animal === 'dog') {
      resolve("It's a dog!")
    }
    if(animal !== "dog") {
      reject("It's not a dog!")
    }
  }, 1000)
})


// Unit Testing
let Test = new test();

Test.assertEquals(promise, promise)

promise.then(res => Test.assertEquals(res, "Ignore this test","Do not change the animal variable." ))
			.catch(e => Test.assertEquals(e, "It's not a dog!"))
