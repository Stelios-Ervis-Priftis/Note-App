console.log('Starting App.');

// fs Asynchronously append data to a file, creating the file if does not yet exist
const fs = require('fs');

// os.userInfo method return information about the currently effective User
const os = require('os');

// require my own file or function
const notes = require('./notes.js');

console.log('Result:', notes.add(9, 20));

// var user = os.userInfo();
//
// fs.appendFile('greeting.txt', `Hello ${user.username}! You are ${notes.age}.`);
