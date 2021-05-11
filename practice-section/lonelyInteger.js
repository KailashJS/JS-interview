// Tags:- arrays functional_programming numbers
/* Question:-
You are given an array of integers having both negative and positive values,
except for one integer which can be negative or positive. Create a function
to find out that integer.
*/
var test = require('../test/test.js');
// Solution
// function lonelyInteger(arr) {
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }

function lonelyInteger(arr) {

  for(let i = 0; i < arr.length; i++) {
    let counter = arr[i];
    if(!arr.includes(-counter)) {
      return counter;
      break;
    }
  }
}

console.log(lonelyInteger([1, -1, 2, -2, 3]));

// UNIT TEST
let Test = new test();

Test.assertEquals(lonelyInteger([1, -1, 2, -2, 3]), 3)
Test.assertEquals(lonelyInteger([-3, 1, 2, 3, -1, -4, -2] ), -4)
Test.assertEquals(lonelyInteger([1, -1, 2, -2, 3, 3]), 3)
Test.assertEquals(lonelyInteger([-110, 110, -38, -38, -62, 62, -38, -38, -38]), -38)
Test.assertEquals(lonelyInteger([-9, -105, -9, -9, -9, -9, 105]), -9)
