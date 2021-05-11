// Tags:- arrays functional_programming language_fundamentals loops

var test = require('../test/test.js');

function arrIndex(arr, idx) {
  let arr1 = arr.flat();
  let res = [];
  for (let i = 0; i < idx.length; i++ ) {
    let pos = idx[i] - 1;
    let el = arr1[pos];
    res.push(el);
  }
  return res.join('');
}

// Unit Test
let Test = new test();

results1 = arrIndex([['m', 'u', 'b'], ['a', 's', 'h'], ['i', 'r', '1']],  [1, 3, 5, 8])
Test.assertEquals(results1, 'mbsr')
results1 = arrIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 2, 3, 4, 5, 6, 7, 8, 9])
Test.assertEquals(results1, 'myexample')
results2 = arrIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 5, 6])
Test.assertEquals(results2, 'mam')
results3 = arrIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 3, 7, 8])
Test.assertEquals(results3, 'mepl')
