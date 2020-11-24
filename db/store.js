//write and read file using fs module
const util=require ('util');
const fs = require('fs');

let num=0;

const readFileAsync=util.promisify(fs.readFile);
const writeFileAsync=util.promisify(fs.writeFile);

class Store{

    read(){
      return readFileAsync('db/db.json', 'utf8');
    }  

    write(note){
      return writeFileAsync('db/db.json', JSON.stringify(note));
   }

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

  addNote(note) {
    const {title,text}=note;
    if (!title || !text){
      throw new Error("Neither text or title can be blank for the note entered");
    }
    const newNote={title,text,id:num};
    num++;
    this.getNotes()
      .then((notes)=>[...notes,newNote])
      .then((currentNotes)=>this.write(currentNotes))
      .then(()=>newNote);
  }

  removeNote(id) {
        return this.getNotes()
          .then((notes)=>notes.filter((note)=>note.id !== id))
          .then((filteredNotes)=>this.write(filteredNotes));
  } 
}

module.exports= new Store();