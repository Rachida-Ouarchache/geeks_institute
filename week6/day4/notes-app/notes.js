const fs = require('fs');

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log('✅ Note added successfully!');
  } else {
    console.log('⚠️ Note already exists!');
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);

  if (notes.length > filteredNotes.length) {
    saveNotes(filteredNotes);
    console.log('🗑️ Note removed!');
  } else {
    console.log('⚠️ Note not found!');
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log('📜 Your Notes:');
  notes.forEach((note) => console.log(`- ${note.title}`));
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(`📝 ${note.title}: ${note.body}`);
  } else {
    console.log('⚠️ Note not found!');
  }
};

module.exports = { addNote, removeNote, listNotes, readNote };
