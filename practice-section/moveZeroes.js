// Tagname:- arrays interview sorting
// Question
/* Create a function that takes an array of numbers and moves all zeros to the,
preserving the order of the elements.
*/

// Solution
var test = require('../test/test.js');

function moveZeros(arr) {
  let arrNum = [];
  let arrZero = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arrNum.push(arr[i]);
    } else {
      arrZero.push(arr[i]);
    }
  }
  console.log(arrZero);
  let arrRes = arrNum.concat(arrZero);
  console.log(arrRes);
  return arrRes;
}


// Unit Test
let Test = new test();

Test.assertSimilar(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1,2,1,1,3,1,0,0,0,0])
Test.assertSimilar(moveZeros([9,0.0,0,9,1,2,0,1,0,1,0.0,3,0,1,9,0,0,0,0,9]), [9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0])
Test.assertSimilar(moveZeros(["a",0,0,"b","c","d",0,1,0,1,0,3,0,1,9,0,0,0,0,9]), ["a","b","c","d",1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0])
Test.assertSimilar(moveZeros(["a",0,0,"b",null,"c","d",0,1,false,0,1,0,3,[],0,1,9,0,0,0,0,9]), ["a","b",null,"c","d",1,false,1,3,[],1,9,9,0,0,0,0,0,0,0,0,0,0])
Test.assertSimilar(moveZeros([0,1,null,2,false,1,0]), [1,null,2,false,1,0,0])
Test.assertSimilar(moveZeros(["a","b"]), ["a","b"])
Test.assertSimilar(moveZeros(["a"]), ["a"])
Test.assertSimilar(moveZeros([0,0]), [0,0])
Test.assertSimilar(moveZeros([0]), [0])
Test.assertSimilar(moveZeros([false]), [false])
Test.assertSimilar(moveZeros([]), [])
// Kailash Chandra Bhakta
