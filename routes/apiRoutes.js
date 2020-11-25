// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================
const store= require('../db/store')

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  app.get("/api/notes", function(req, res) {
    store.getNotes().then(notes => res.json(notes));
  });

  // API POST Requests
  app.post("/api/notes", function(req, res) {
    store.addNote(req.body).then(notes=>res.json(notes));
  });

  //API DELETE Requests
  app.delete("/api/notes/:id",function(req, res){
    store.deleteNote(req.params.id).then(notes=>res.json(notes)).then(()=> res.json({ ok: true }));
  });
}

  

  
