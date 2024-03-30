const express = require("express");
const port = 8080;
const app = express();
// const notes = require("./routes/notes");
// var tools = require("./database");

app.use(express.json()); //This is responsible for getting access from the JSON file you send through the BODY of your website.
app.use(express.static("public")); // Connection to my public assets. This includes HTMLs.
app.use(express.urlencoded({ extended: true })); // This is for accessing the  URL? not so sure.
app.set("view engine", "ejs");

//Checking Connection

app.listen(port, () => {
   console.log(`Server is running on port ${port}.`);
});

//Routes
// app.use("/notes", notes);
 
//Main page :  0201
app.get("/", (req, res) => {
   console.log("Main Page Loaded");
   res.render("index", { name: "Noriel" });
});


// //playing with forms
// app.get("/new", (req, res) => {
//    res.render("new/users", { firstName: "placeholder" });
// });

// Staple functions for checking connections and making sure there is no error with the Server
app.use((err, req, res, next) => {
   console.error(err.stack);
   res.status(500).send("Something broke!");
});

app.use((req, res, next) => {
   res.status(404).render("404"); //calls the 404.ejs on the views folder
});
