
const fs = require('fs');

const FILE_PATH = 'notes-data.json';

const fetchNotes = () => {
    const notes = fs.readFileSync(FILE_PATH);
    return JSON.parse(notes);
};

const saveNotes = (notes) => {
    fs.writeFileSync(FILE_PATH, JSON.stringify(notes));
};

const addNote = (title, body) => {
    let notes = [];
    const note = {
        title,
        body
    };
    const notesString = fs.readFileSync(FILE_PATH);
    notes = JSON.parse(notesString);
    notes.push(note);
    saveNotes(notes);
    console.log('Note added!');
};

const getAll = () => {
  let notes = fetchNotes();
  console.log(notes);
};

const getNote = (title) => {
    let notes = fetchNotes();
    let note = notes.find(item => item.title = title);
    console.log(note);
};

const removeNode = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter(item => item.title !== title);
    saveNotes(filteredNotes);
    console.log('Note removed!');
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNode
};