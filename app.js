console.log('Starting App.');

const fs = require('fs'); // fs Asynchronously append data to a file, creating the file if does not yet exist
// const os = require('os'); // os.userInfo method return information about the currently effective User
const _ = require('lodash');

const notes = require('./notes.js'); // require my own file or function

var command = process.argv[2];
console.log('Command', command);
console.log(process.argv);

if (command === 'add') {
  console.log('Adding new note');
} else if (command === 'list') {
  console.log('Listing all notes');
} else if (command === 'read') {
  console.log('Reading note');
} else if (command === 'remove') {
  console.log('Removing note');
} else {
  console.log('Command not recognized');
}
