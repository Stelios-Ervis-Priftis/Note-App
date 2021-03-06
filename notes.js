// fs for witreFileSync and readFileSync
const fs = require('fs');

let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data/notes-data.json');
    return notes = JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

let saveNotes = (notes) => {
  // Create json file and stringify the notes
  fs.writeFileSync('notes-data/notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
  // fetchNotes is Empty Array that will store are note
  let notes = fetchNotes();
  // Object of note that we create
  let note = {
    title,
    body
  };
  // Checking if we have duplicate title
  let duplicateNotes = notes.filter((note) => note.title === title);
  // console.log('This is the duplicate note:', Boolean(duplicateNotes));

  if (duplicateNotes.length === 0) {
    // Push the note on the notes empty array
    notes.push(note);
    saveNotes(notes);
    return note;
    console.log(JSON.stringify(notes));
  }
};

let getAll = () => {
  return fetchNotes();
};

let getNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

let removeNote = (title) => {
  // fetch notes
  let notes = fetchNotes();
  // filter notes, removing the one with title of argument
  let filteredNotes = notes.filter((note) => note.title !== title);
  // save new notes array
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length
};
let logNote = (note) => {
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}
