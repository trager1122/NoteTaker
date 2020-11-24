// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
const store= require('../db/store')
let num=0;

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  app.get("/api/notes", function(req, res) {
    store
    .getNotes();
  });

  // API POST Requests
  app.post("/api/notes", function(req, res) {
    store
    .addNote(req.body,num);
    num++;
  });

  //API DELETE Requests
  app.delete("/api/notes/:id",function(req, res){
    store
      .removeNote(id);
  });
}

  

  
