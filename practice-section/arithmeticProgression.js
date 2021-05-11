// Tags:- arrays functional_programming language_fundamentals strings
// AMS AMS AMS AMS
var test = require('../test/test.js');

function arithmeticProgression(start, diff, n) {
  let res = [start];
  // console.log(res);
  let sum = start;
  for (i = 1; i < n; i++) {
    sum = sum + diff;

    res.push(sum)
  }
  let result = res.join(', ');
  return result ;
}

// Unit test
let Test = new test();

let res1 = arithmeticProgression(1, 2, 5);
// console.log(res1);
Test.assertEquals(res1, "1, 3, 5, 7, 9")
Test.assertEquals(arithmeticProgression(1, 0, 5), "1, 1, 1, 1, 1")
Test.assertEquals(arithmeticProgression(1, -3, 10), "1, -2, -5, -8, -11, -14, -17, -20, -23, -26")
Test.assertEquals(arithmeticProgression(100, -10, 10), "100, 90, 80, 70, 60, 50, 40, 30, 20, 10")
