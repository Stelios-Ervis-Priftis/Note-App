console.log('Starting App.');

const fs = require('fs'); // fs Asynchronously append data to a file, creating the file if does not yet exist
// const os = require('os'); // os.userInfo method return information about the currently effective User
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js'); // require my own file or function

const argv = yargs.argv;
const command = argv._[0];
console.log(`Command: ${command}`);
console.log('Yargs:', argv);

if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  notes.getAll();

} else if (command === 'read') {
  notes.getNote(argv.title);

} else if (command === 'remove') {
  notes.removeNote(argv.title);

} else {
  console.log('Command not recognized');
}
