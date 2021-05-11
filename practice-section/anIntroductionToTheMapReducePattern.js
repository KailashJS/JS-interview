// Tagname:- arrays functional_programming higher_order_functions math

// Question

// Solution
var test = require('../test/test.js');

var magnitude = vector => {
  let squaredV = vector.map(function(ele) {
    return ele * ele;
  })
  console.log(squaredV);
  let magV = squaredV.reduce(function(tot, elem) {
     return tot + elem;
  }, 0);

  return Math.sqrt(magV);
}

// Resource
// Using Map and Reduce in Functional Javascript


// Unit Test
let Test = new test()

// Basic tests
Test.assertEquals(magnitude([3,4]),5,'basic test not met');
Test.assertEquals(magnitude([0,0,-10]),10,'basic test not met');
Test.assertEquals(magnitude([]),0,'basic test not met');
Test.assertEquals(magnitude([2,3,6,1,8]),10.677078252031311,'basic test not met');

// Extra tests
Test.assertEquals(magnitude([9,-9,3]),13.076696830622021);
Test.assertEquals(magnitude([-24,94,4,0,10]),97.61147473529944);
