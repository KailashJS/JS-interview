// Tag:- closures functional_rogramming
var test = require("../test/test.js");

// Question
/* Closure are functions that remember their lexical environments. Lexcal envronments
mean the environment in which the function was declard
*/

// Solution
function greetingMaker(salutation) {
  // let salutation = "Hello";
  function closure(name) {
    return salutation + ", " + name;
  }
  return closure;
}

// Unit Testing
let Test = new test();

const greeting = greetingMaker("Hello");
const wellWish = greetingMaker("God Bless You")

console.log(greeting("James"));
console.log(wellWish("James Potter"));
Test.assertEquals(greeting("James"), "Hello, James")
Test.assertEquals(greeting("John"), "Hello, John")
Test.assertEquals(greeting("Jacob"), "Hello, Jacob")
Test.assertEquals(greeting("Joseph"), "Hello, Joseph")
Test.assertEquals(wellWish("James Potter"), "God Bless You, James Potter")
