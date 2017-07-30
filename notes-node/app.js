console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

console.log(_.isString(true));
console.log(_.isString('Mike'));
var filteredArray = _.uniq(["Jude",1,"Mike",1,2,3,4]);
console.log(filteredArray);


// var res = notes.addNote();
// console.log(res);

// var total = notes.add(12,100);
// console.log("Results: " + total);

// var user = os.userInfo();

// fs.appendFile('greetings.txt',`Hello ${user.username}!\nYou are ${notes.age}`, (err) => {
// 	if (err) throw err;
// 	console.log('The data was appended...');
// });
