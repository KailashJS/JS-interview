// Tagname:- interview numbers strings validation

// Solution
var test = require('../test/test.js');

function doubleton(n) {
  n++;
  let arrStr = n.toString().split('');
  let mySet = new Set(arrStr);
  if (mySet.size === 2 ) {
    console.log(parseInt(n));
    console.log(arrStr);
    return parseInt(n);
  } else {
    doubleton(n);
  }
}



// Unit Test
let Test = new test();

Test.assertEquals(doubleton(130), 131);
Test.assertEquals(doubleton(1434), 1441);
Test.assertEquals(doubleton(20), 21);
Test.assertEquals(doubleton(5), 10);
Test.assertEquals(doubleton(131), 133);
Test.assertEquals(doubleton(1000000), 1000001);
