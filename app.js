const fs = require('fs'); // fs Asynchronously append data to a file, creating the file if does not yet exist
// const os = require('os'); // os.userInfo method return information about the currently effective User
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js'); // require my own file or function

const argv = yargs.argv;
const command = argv._[0];
// console.log(`Command: ${command}`);
// console.log('Yargs:', argv);

if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  var allnotes = notes.getAll();
  console.log(`Printing ${allnotes.length} note(s).`);
  allnotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  let note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }

} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}
