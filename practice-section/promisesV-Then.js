// Tagname:- functional_programming
// Question:-
/* Add the necessary pieces to fix the promise and the then function.
It should resolve to message success!.
Re-assign the result to the settled value inside the then function>
*/

// Solution
let test = require('../test/test.js');
//
var result = ""
//
// let promise = new Promise(() => {
//   a
// })
//
// promise.then()

// Resource
/* We have the then function which returns a promise that appends either a
fullfilled or rejection handler(callback) or just returns the settled value.
*/

let promise = new Promise( (resolve, reject) => {
  setTimeout(( ) => {
    resolve("success!")
  }, 1000)
});

// promise.then() //returns the settled value
promise.then((value) => {
  result = value;
});
// promise.then((result) => result) // logs the result of the **onFullfilled** callback

// Unit Test
let Test = new test();

function promiseState(p) {
  const t = {};
  return Promise.race([p, t]).then(v => (v === t)? "pending" : "fulfilled", () => "rejected");
}

Test.assertEquals(result, "", "You are only allowed to reassign 'result' inside of the 'onFulfilled' callback.")
promiseState(promise).then(state => Test.assertEquals(state, "fulfilled", "Did pass in the resolve callback to your promise?"))
promise.then(x => Test.assertEquals(result, "success!"))
