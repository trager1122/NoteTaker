// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const notesData = require('./db/db.json');
const store= require('../db/store')

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  app.get("/api/notes", function(req, res) {
    //store.(function's name from store's file)
  });

  // API POST Requests
  app.post("/api/notes", function(req, res) {
      notesData.push(req.body);
      res.json(notesData);
  });

}

  

  
