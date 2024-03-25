import express from "express";
import { getIdNotes, createNotes, deleteAllNotes } from "./database.js";

const app = express();
app.use(express.json()); //This is responsible for getting access from the JSON file you send through the BODY of your website.


// This will make a request on your DATABASE.JS to get the note with the ID 1. 
app.get("/auth/notes", async (req, res) => {
   const notes = await getIdNotes(1);
   res.send(notes);
});
//The function below is more suitable on accessing specific ID.

//getting one data using ID parameter
app.get("/auth/notes/:id", async (req, res) => {
   //this will get the ID from the database through the "RES" argument.
   const noteId = req.params.id;
   const notes = await getIdNotes(noteId);
   res.send(notes);
});

app.post("/auth/notes", async (req, res) => {
   const { title, contents } = req.body;
   const noterist = await createNotes(title, contents);
   res.status(201).send(noterist);
});



//Trying to delete all files
app.post("/auth/notes/delete", (req, res) => {
    const deletee = deleteAllNotes();
    res.send(deletee);
 });



// Staple functions for checking connections and making sure there is no error with the Server
app.use((err, req, res, next) => {
   console.error(err.stack);
   res.status(500).send("Something broke!");
});

app.listen(8008, () => {
   console.log("Server is running on port 8080");
});
