console.log('Starting App.');

// fs Asynchronously append data to a file, creating the file if does not yet exist
const fs = require('fs');

// os.userInfo method return information about the currently effective User
const os = require('os');

var user = os.userInfo();
console.log(user);

fs.appendFile('greeting.txt', `Hello ${user.username}!`);
