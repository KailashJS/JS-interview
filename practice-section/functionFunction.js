// tagname:- arrays closures functional_programming

// Solution
var test = require('../test/test.js');

function factory(num) {
  return function(arr) {
    // arr.forEach(devideFunction);
    //
    // function devideFunction(item, index, arr) {
    //   arr[index] = item / num;
    // }
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      res.push(arr[i] / num);
    }
    console.log(res);
    // console.log(num);
    return res;
  }
}


// Unit Test
let Test = new test();

Test.assertSimilar(factory(15)([30, 45, 60]), [2, 3, 4])
Test.assertSimilar(factory(2)([2, 4, 6]), [1, 2, 3])
Test.assertSimilar(factory(6)([60, 30]), [10, 5])
Test.assertSimilar(factory(7)([14, 21, 49]), [2, 3, 7])
Test.assertSimilar(factory(5)([10, 5, 20]), [2, 1, 4])
Test.assertSimilar(factory(10)([100, 10, 60]), [10, 1, 6])
