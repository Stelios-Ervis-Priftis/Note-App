console.log('Starting notes.js');
// fs for witreFileSync and readFileSync
const fs = require('fs');

let addNote = (title, body) => {
  // Empty Array that will store are note
  let notes = [];
  // Object of note that we create
  let note = {
    title,
    body
  };

  try {
    let notesString = fs.readFileSync('notes-data/notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {

  }
  // Checking if we have duplicate title
  let duplicateNotes = notes.filter((note) => note.title === title);
  // console.log('This is the duplicate note:', Boolean(duplicateNotes));

  if (duplicateNotes.length === 0) {
    // Push the note on the notes empty array
    notes.push(note);
    console.log(JSON.stringify(notes));
    // Create json file and stringify the notes
    fs.writeFileSync('notes-data/notes-data.json', JSON.stringify(notes));
  } else {
    console.log(JSON.stringify(note.title + ': Title Already exist'));
  }
};

let getAll = () => {
  console.log(`Getting all notes`);
}

let getNote = (title) => {
  console.log(`Getting note ${title}`);
}

let removeNote = (title) => {
  console.log(`Removing note ${title}`);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
