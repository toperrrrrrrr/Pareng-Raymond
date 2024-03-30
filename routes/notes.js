// const express = require("express");
// const router = express.Router();
// var tools = require("../database");


// // logger();
// // console.log(tools);


// // //this is for getting the url
// // function logger(req, res, next) {
// //    console.log(req.originalUrl);
// //    next();
// // }

// // This will make a request on your DATABASE.JS to get the note with the ID 1.
// router.get("/", (req, res) => {
//    const notes = tools.getIdNotes(2);
//    res.send(notes);
// });

// router
//    .get("/delete", (req, res) => {
//       res.render("delete");
//    })
//    .post("/delete", (req, res) => {
//       tools.deleteAllNotes();
//       res.render("delete", { message: "Table is now cleared" });
//    });

// //The function below is more suitable on accessing specific ID.
// //getting one data using ID parameter
// router.get("/:id", (req, res) => {
//    //this will get the ID from the database through the "RES" argument.
//    const noteId = req.params.id;
//    const notes = tools.getIdNotes(noteId);
//    res.send(notes + " as");
//    console.log("proof that this is running");
// });

// module.exports = router;
