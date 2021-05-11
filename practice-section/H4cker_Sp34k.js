// Tagname:- arrays conditions control_flow functional_programming
// Question:-
/* Replace:
a --> 4
e --> 3
i --> 1
o --> 0
s --> 5
*/

// Solution
var test = require('../test/test.js');

function hackerSpeak(str) {
  let arr = str.split(""); // ams ams ams ams
  let arrCopy = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "a") {
      arrCopy.push("4");
    } else if (arr[i] == "e") {
      arrCopy.push("3");
    } else if (arr[i] == "i") {
      arrCopy.push("1");
    } else if (arr[i] == "o") {
      arrCopy.push("0");
    } else if (arr[i] == "s") {
      arrCopy.push("5");
    } else {
      arrCopy.push(arr[i]);
    }
  }
  return arrCopy.join("");
}


// Unit Test
let Test = new test();

Test.assertEquals(hackerSpeak("javascript is cool"), "j4v45cr1pt 15 c00l")
Test.assertEquals(hackerSpeak("become a coder"), "b3c0m3 4 c0d3r")
Test.assertEquals(hackerSpeak("hi there"), "h1 th3r3")
Test.assertEquals(hackerSpeak("programming is fun"), "pr0gr4mm1ng 15 fun")
Test.assertEquals(hackerSpeak("keep on practicing"), "k33p 0n pr4ct1c1ng")
