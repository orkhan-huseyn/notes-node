
const addNote = (title, body) => {
    console.log('Adding note... %s %s', title, body);
};

const getAll = () => {
  console.log('Getting all notes...');
};

const getNote = (title) => {
    console.log('Getting node... %s', title);
};

const removeNode = (title) => {
    console.log('Removing node... %s', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNode
};