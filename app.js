console.log('Starting App.');

const fs = require('fs'); // fs Asynchronously append data to a file, creating the file if does not yet exist
const os = require('os'); // os.userInfo method return information about the currently effective User
const _ = require('lodash');
const notes = require('./notes.js'); // require my own file or function



var filteredArray = _.uniq(['Ervis', 1, 'Ervis', 1, 2, 3, 4]);
console.log(filteredArray);



// console.log(_.isString(true));
// console.log(_.isString('Ervis'));

// console.log('Result:', notes.add(9, 20));

// var user = os.userInfo();
//
// fs.appendFile('greeting.txt', `Hello ${user.username}! You are ${notes.age}.`);
