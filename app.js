
const yargs  = require('yargs');
const notes = require('./notes.js');

const argv = yargs
    .command('add', 'Add a new note', {
        title: {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        },
        body: {
            describe: 'Body of note',
            demand: true,
            alias: 'b'
        }
    })
    .command('list', 'List all notes')
    .command('read', 'Read  a note', {
        title: {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        }
    })
    .command('remove', 'Remove a note', {
        title: {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        }
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
