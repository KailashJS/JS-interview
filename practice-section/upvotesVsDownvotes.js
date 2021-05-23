// Tagname:- arrays language_fundamentals numbers objects 
// Return the net votes...

// Solution 
var test = require('../test/test.js');

function getVoteCount(votes) {
	return votes.upvotes - votes.downvotes;
}

// Unit Test 
let Test = new test();

Test.assertEquals(getVoteCount({ upvotes: 13, downvotes: 0 }), 13)
Test.assertEquals(getVoteCount({ upvotes: 2, downvotes: 33 }), -31)
Test.assertEquals(getVoteCount({ upvotes: 132, downvotes: 132 }), 0)
Test.assertEquals(getVoteCount({ upvotes: 0, downvotes: 0 }), 0)
Test.assertEquals(getVoteCount({ downvotes: 4, upvotes: 1 }), -3)
