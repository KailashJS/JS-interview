// Tagname:- algebra interview math numbers

// QUESTION:
/* find the next perfect square number if parameter passed is a perfect square
number.
*/

// Solution
var test = require('../test/test.js');

function nextSquare(n) {
  let root = Math.sqrt(n);
  console.log(root);
  let nxtSqr = 0;
  console.log(Number.isInteger(root));
  if (Number.isInteger(root)) {
    root++;
    console.log(root);
    nxtSqr = Math.pow(root, 2);
    console.log(nxtSqr);
    return nxtSqr;
  } else {
    return null;
  }
}

// Unit Test
let Test = new test();

Test.assertEquals(nextSquare(121), 144, "Wrong output for 121")
Test.assertEquals(nextSquare(625), 676, "Wrong output for 625")
Test.assertEquals(nextSquare(319225), 320356, "Wrong output for 319225")
Test.assertEquals(nextSquare(15241383936), 15241630849, "Wrong output for 15241383936")
Test.assertEquals(nextSquare(155), null, "Wrong output for 155")
Test.assertEquals(nextSquare(342786627), null, "Wrong output for 342786627")
