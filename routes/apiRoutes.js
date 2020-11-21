// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const store= require('../db/store')
const db= require('../db/db.json')

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  app.get("/api/notes", function(req, res) {
    readFileAsync('./db/db.json','utf8', (err, data) => {
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
      
  });

  //you may need to return app because this is a function

}

  

  
