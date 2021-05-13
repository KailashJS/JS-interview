// Tagname:- Interview logic math numbers

// Solution
var test = require('../test/test.js');

function mubashirFunction(a, b) {
  let num1 = a;
  let num2 = b;

  var num1Array = String(num1).split("").map((num1) => {
    return Number(num1);
  });
  var num2Array = String(num2).split("").map((num2) => {
    return Number(num2);
  });

  var num1Sum = num1Array.reduce((sum, current) => { return sum + current});
  var num2Sum = num2Array.reduce((sum, current) => { return sum + current});

  return num1Sum * num2Sum;
}

// Unit Test
let Test = new test();

//0 * 1 = 0
Test.assertEquals(mubashirFunction(0,1), 0)

//Obviously, 1 * 2 = 2
Test.assertEquals(mubashirFunction(1,2), 2)

//That was easy, 5 * 6 = 30
Test.assertEquals(mubashirFunction(5,6), 30)

//Wait.. What? 10 * 10 = 1 ?
Test.assertEquals(mubashirFunction(10,10), 1)

//What's happening ? 200 * 200 = 4, 0 was omitted ?
Test.assertEquals(mubashirFunction(200,200), 4)

//One more...
Test.assertEquals(mubashirFunction(12,34), 21)

//You can guess from this..
Test.assertEquals(mubashirFunction(123,45),54)
