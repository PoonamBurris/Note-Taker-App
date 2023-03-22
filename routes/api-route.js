const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const uniqid = require('uniqid');

//Get request
router.get('/notes', (req, res) => {
    //Reading the db.json file
    const notes = fs.readFileSync('./db/db.json', 'utf8');
    //Sending response of json notes
    res.json(JSON.parse(notes));
});

//Posting the API request
router.post('/notes', (req, res) => {
    const newNote = {
        'title': req.body.title,
        'text': req.body.text,
        'id': uniqid()
    };
    const notes = fs.readFileSync('./db/db.json', 'utf8');
    const notesJSON = JSON.parse(notes);
    notesJSON.push(newNote);

    //Writing notes to db.json file
    fs.writeFile('./db/db.json', JSON.stringify(notesJSON), err => {
        if (err) throw err;
        console.log('New note was successfully added');
        //Sending json notes response
        res.json(notesJSON);
    });
});

// API deleting
router.delete('/notes/:id', (req, res) => {
    // Reading file
    const notes = fs.readFileSync('./db/db.json', 'utf8');
    const notesJSON = JSON.parse(notes);
    const newNote = notesJSON.filter((note) =>  note.id !== req.params.id);

    fs.writeFile("./db/db.json", JSON.stringify(newNote), err => {
        if(err) throw err;
        res.json(newNote);
    });
});

module.exports = router