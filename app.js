const yargs = require('yargs');
const notes = require('./notes.js');

const title = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const body = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note', {
        title,
        body
    })
    .command('list', 'List all notes')
    .command('read', 'Read  a note', {
        title
    })
    .command('remove', 'Remove a note', {
        title
    })
    .help()
    .argv;

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
