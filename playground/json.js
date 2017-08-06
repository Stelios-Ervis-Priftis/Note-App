// // Object to a String
// var obj = {
//   name: 'Ervis'
// }
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
// //=======================//
//
// // String to a Object
// var personString = '{"name": "Ervis", "age": 28}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person.name, person.age);
// //=======================//

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};
// originalNoteString
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
// note
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
