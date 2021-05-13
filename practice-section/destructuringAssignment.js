// Tagname:- interview language_fundamentals logic objects

// Solution
var test = require('../test/test.js');

writeyourcodehere = [1, 2, 3, 4, 5, 6, 7, 8];

var [first, second, third, ...other] = writeyourcodehere;

// Unit Test
let Test = new test();

Test.assertSimilar(first, 1)
Test.assertSimilar(second, 2)
Test.assertSimilar(third, 3)
Test.assertSimilar(other, [4,5,6,7,8])
// Kailash Chandra Bhakta 
