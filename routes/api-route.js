const fs = require('fs');
const path = require('path');
const  app = require('express').Router();
const uniqid = require('uniqid');

//Get request
app.get('./public/notes.html',(req,res)=>{
//Reading the db.json file
const notes = fs.readFileSync('./db/db.json','utf8');
//Sending response of json notes
res.json(JSON.parse(notes));
});

//Posting the API request
app.get('./public/notes.html',(req,res)=>{
const newNote = {
    'title': req.body.title,
    'text': req.body.text,
    'id': uniqid()
};
const notes = fs.readFileSync('./db/db.json','utf8');
const notesJSON = JSON.parse(notes);
notesJSON.push(newNote);

//Writing notes to db.json file
fs.writeFile('./db/db.json',JSON.stringify(notesJSON),);
console.log('New note was successfully added');
//Sending json notes response
res.json(notes);
});

// API deleting
app.delete('./public/notes.html:id', (req, res) => {
// Reading file
const notes = fs.readFileSync('./db/db.json','utf8');
const notesJSON = JSON.parse(notes);   
const newNote = notesJSON.filter((note) => {
return note.id !== req.params.id;
});
    
fs.writeFile( "./app/data/db.json",JSON.stringify(newNote),);
res.json(newNote);
});

module.exports = app