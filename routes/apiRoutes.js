// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const fs= require('fs');
const store= require('./db/store')
let num=0;

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  app.get("/api/notes", function(req, res) {
    fs.readFileSync('./db/db.json','utf8', (err, data) => {
      if (err) throw err;
        let parsedNotes;
        try {
          parsedNotes = [].concat(JSON.parse(data));
        } catch (err) {
          parsedNotes = [];
        }
    })  
  });

  // API POST Requests
  app.post("/api/notes", function(req, res) {
    
    }    
  });

  //API DELETE Requests
  app.delete(req, res){
    fs.readFileSync('./db/db.json','utf8', (err,data)=>{
      if (err) throw err;
      let parsedNotes;
      try{
        parsedNotes = [].concat(JSON.parse(data));
      } catch (err) {
        parsedNotes=[];
      }
      const notes=parsedNotes.filter(id);
      }
    })
  }

}

  

  
