const yargs = require('yargs')
const notes = require('./notes.js')

// create add command
yargs.command({
    command : 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body Content',
            demandOption: true,
            type: 'String'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title);
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'Create a list',
    handler: function(){
        console.log('Creating a list')
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'Read a list',
    handler: function(){
        console.log('Read a list')
    }
})

yargs.parse();