// Tagname:- conditions control_flow functional_programming regex

// Question
/* Write a function that takes a string, breaks it up and returns it with vowels first,
consonants second. For any character that's not a vowel (like special characters or spaces),
treat them like consonants.
*/

// Solution
var test = require('../test/test.js');

function split(str) {
  let arr = str.split("");
  let resV = [];
  let resC = [];
  for (let i = 0; i < arr.length; i++) {
    let co = arr[i];
    if (co == "a" || co == "e" || co == "i" || co == "o" || co == "u") {
      resV.push(co);
    } else {
      resC.push(co);
    }
  }
  let resA = resV.concat(resC);
  console.log(resA);
  return resA.join("");
  // console.log(resA.join(''));
}


// Unit Test
let Test = new test();

Test.assertEquals(split("abcde"), "aebcd")
Test.assertEquals(split("Hello!"), "eoHll!")
Test.assertEquals(split("What's the time?"), "aeieWht's th tm?")
