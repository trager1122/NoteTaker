//write and read file using fs module
//create a class (writeNote, readNote, getNote and a few more) and export it
const fs = require('fs');
let num=0;

class Store{
    getNotes(){
      fs.readFileSync('db.json',(data)=>{
        return data;
      })
    }

    addNote(note){
      const {title,text}=note;
    if (!title || !text){
      throw new Error("Neither text or title can be blank");
    const newNote={title,text,id:num};
    num++;
    this.getNotes()
      .then((notes)=>[...notes,newNote])
      .then((currentNotes)=>this.write(currentNotes))
      .then(()=>newNote);
    }
    
    write(note){
       id++;
       fs.writeFileSync("./db.json", note);
    }

    removeNote(id){
        return this.getNotes()
        .then((notes)=>notes.filter(note)=>note.id !== id)
        .then((filteredNotes)=>this.write(filteredNotes));
    }
    
}

module.exports= new Store();