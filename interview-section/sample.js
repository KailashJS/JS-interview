// Tagname:- closures functional_programming language_fundamentals
// Question
/* Write a function redundant that takes in a string str and returns a function
that returns str.
*/
/*
// Solution
var test = require('../test/test.js');

function redundant(str) {
  return function closure() {
    return str;
  }
}

// Unit Testing
var Test = new test();

const f1 = redundant("apple")
const f2 = redundant("pear")
const f3 = redundant("")

Test.assertEquals(f1(), "apple")
Test.assertEquals(f2(), "pear")
Test.assertEquals(f3(), "")
*/

/*
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
 
readline.question('Who are you?', name => {
  console.log(`Hey there ${name}!`);
  readline.close();
});
*/

let arr1 = [0,0,0,1,1,0,0];

function maxSubArr(arr) {
	let counter = [];
	let count = 0;
	let postCount = 0;
	for (let i =0; i<arr.length; i++){
		if (arr[i] == arr[i+1]){
			postCount = count + 1;
			count++;
		} else {
			counter.push(postCount);
			postCount = 0;
			count =0;
		}
	}
	// Return the max number of counter Array
	for (let j =0; j < counter.length; j++){
		var max = 0;
		if(counter[j] > max){
			max = counter[j];
		}	
	}
	console.log(max);
}

maxSubArr(arr1);





//  Practose  Session 
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoute from './routes/posts';

const app = express();

app 
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bbodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = mongoose+srv://jcwebdkcasdckndcnyouroen credential";
const port = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
	.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

// New Folder in side server.
../router/posts.js 
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	res.end('This Works!');
});

export default router;