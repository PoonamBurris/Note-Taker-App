const path = require('path')
const app = require('express').Router();

//Get route for notes file
app.get('../notes.html',(req, res)=>{
    res.sendFile(path.join (__dirname + '../public/notes.html'));
});

//Get route for index.html file
app.get('/',(req, res)=>{
    res.sendFile(path.join (__dirname + '../public/index.html'));
});

module.exports = app