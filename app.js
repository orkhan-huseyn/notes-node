
const yargs  = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;

const command = process.argv[2];

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
}
else if (command === 'list') {
    notes.getAll();
}
else if (command === 'read') {
    notes.getNote(argv.title);
}
else if (command === 'remove') {
    notes.removeNode(argv.title);
}
else {
    console.log('Command not recognized');
}
