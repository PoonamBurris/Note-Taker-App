const path = require('path')
const router = require('express').Router();

//Get route for notes file
router.get('/notes',(req, res)=>{
    res.sendFile(path.join (__dirname, '../public/notes.html'));
});

//Get route for index.html file
router.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router