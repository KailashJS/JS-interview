// Tagname:- functional_rogramming language_fundamentals

// Question
/* Fix anotherFunc() so that calls to it will change the doc variable to bye.
Keep the setTimeout to 100ms and do not change the callback function or the doc
variable.
*/

// Solution
var test = require('../test/test.js');

function anotherFunc(cb) {
  let str = "bye"
  setTimeout(() => {
  }, 100)
  cb(str);

}

var doc = "hello"

function callback(str) {
  doc = str
}

// Resource
/* A callback function is a function passed into another functin as an argument,
which is then invoked inside the outer function to complete some kind of routine
or action.
*/

// Unit Testing
let Test = new test();

Test.assertEquals(doc, "hello", "Do not change the doc variable")

anotherFunc(callback)

setTimeout(()=> {
	Test.assertEquals(doc, "bye")
}, 1000)
