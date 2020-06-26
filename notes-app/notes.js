const fs = require('fs');
const getNotes = function(){
    return "Your Notes..."
}
const addNote = function(title,body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })

    debugger

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log('new note added')
    }else{
        console.log('duplicate note')
    }
}

//remove a note
const removeNote = (title) => {
    const notes = loadNotes();
    const removeNote = notes.filter(note => {
        return note.title !== title;
    })
    saveNotes(removeNote);
}

//saving the note
const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

// loading the existing notes
const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}