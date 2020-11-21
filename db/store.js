//write and read file using fs module
//create a class (writeNote, readNote, getNote and a few more) and export it
const fs = require('fs');

class Store{
    constructor(id){
        this.id=id;
    }

    getNotes(){
      fs.readFileSync(db,(data)=>{
        return data;
      })
    }
    
    saveNote(note){
       id=id++;
       db.push(note);
       fs.writeFileSync("./db.json", note);
    }

    deleteNote(id){
        let jsonNew=db.filter((data)=>{
            return data.id !==this.id;
        })
        fs.writeFileSync("db.json", jsonNew);
    }
}

module.exports= new Store();