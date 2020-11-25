//write and read file using fs module
const util=require ('util');
const fs = require('fs');

//Utility for creating an unique idea for each note
const uniqid=require('uniqid');

const readFileAsync=util.promisify(fs.readFile);
const writeFileAsync=util.promisify(fs.writeFile);

class Store{

    //Asynchronous read method
    read(){
      return readFileAsync('db/db.json', 'utf8');
    }  

    //Asynchronous write method
    write(note){
      return writeFileAsync('db/db.json', JSON.stringify(note));
   }

   //Method for getting notes from JSON file to display to interface
   getNotes() {
    return this.read().then((notes) => {
        let parsedNotes;
        try {
          parsedNotes = [].concat(JSON.parse(notes));
        } catch (err) {
          parsedNotes = [];
        }
      return parsedNotes;
    });
  }

  //Method to add a note
  addNote(note) {
    const {title,text}=note;
    if (!title || !text){
      throw new Error("Neither text or title can be blank for the note entered");
    }
    const newNote={title,text,id:uniqid()};
    return this.getNotes()
      .then((notes)=>[...notes,newNote])
      .then((currentNotes)=>this.write(currentNotes))
      .then(()=>newNote);
  }

  //Method to delete a note based upon its unique id
  deleteNote(id) {
        return this.getNotes()
          .then((notes)=>notes.filter((note)=>note.id !== id))
          .then((filteredNotes)=>this.write(filteredNotes));
  } 
}

module.exports= new Store();