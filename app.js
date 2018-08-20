
console.log('Starting app.js');

const yargs  = require('yargs');

const fs = require('fs');
const os = require('os');
// const _  = require('lodash');
const notes = require('./notes.js');

// const res = notes.addNote();
//
// console.log(_.isString(true));
// console.log(_.isString('amiqo'));
// console.log(_.isString(12));
// console.log(_.uniq([1, 2, 3, 4, 5, 4]));

// const user = os.userInfo();
//
// fs.appendFile('greetings.txt', `Hello, ${user.username}! You are ${notes.age}.`, function(err) {
//     if (err) throw err;
//     console.log('Written!');
// });

const argv = yargs.argv;

const command = process.argv[2];

console.log('Command: ', command);

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
