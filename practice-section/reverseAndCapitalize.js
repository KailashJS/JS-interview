// Tag:- functional_programming strings

// Question:-
/* Create a function that takes a string of lowercase and returns that strings
   reversed and in uppercase
*/
var test = require('../test/test.js');

// Solution
function reverseCapitalize(str) {
  let strSplit = str.split("");
  let reverseArray = strSplit.reverse();
  let reverseString = reverseArray.join("");
  let result = reverseString.toUpperCase(reverseString);
  return result;
}

// Unit Test
let Test = new test();

Test.assertEquals(reverseCapitalize("edabit"), "TIBADE")
Test.assertEquals(reverseCapitalize("abc"), "CBA")
Test.assertEquals(reverseCapitalize("hellothere") ,"EREHTOLLEH")
Test.assertEquals(reverseCapitalize("input") , "TUPNI")
Test.assertEquals(reverseCapitalize("indubitably") , "YLBATIBUDNI")
