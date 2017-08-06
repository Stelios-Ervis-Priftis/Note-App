console.log('Starting App.');

const fs = require('fs'); // fs Asynchronously append data to a file, creating the file if does not yet exist
const os = require('os'); // os.userInfo method return information about the currently effective User
const notes = require('./notes.js'); // require my own file or function

console.log('Result:', notes.add(9, 20));

// var user = os.userInfo();
//
// fs.appendFile('greeting.txt', `Hello ${user.username}! You are ${notes.age}.`);
