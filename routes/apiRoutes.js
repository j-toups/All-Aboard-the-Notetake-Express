const { response } = require('express');
const fs = require('fs');
const {v4:uuidv4} = require('uuid');
const router = require('express').Router();

router.get('./public/notes', (req, res) => {
    console.log('getting notes...');
    
    let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
    
    console.log ('returning notes' + JSON.stringify(data));
    
    res.json(data);
});
    
router.post('./public/notes', (req, res) => {
    const newNote = req.body;
    
    console.log('Post request' + JSON.stringify(newNote));
    
    newNote.id = uuidv4();
        
    let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));

    data.push(newNote);

    fs.writeFileSync('./db/db.json', JSON.stringify(data));
    
    console.log('NEW NOTE ADDED');
    
    res.json(data);
});

router.delete('./public/notes', (req, res) => {
    let noteId = req.params.id.toString();

    console.log(`You\'re DELETING ${noteId}`);

    let data = JSON.parse(fs.readFileSync('./db/bd.json', 'utf-8'));

    const freshData = data.filter(note => note.id.toString() !==noteId);

    fs.writeFileSync('./db/db.json', JSON.stringify(freshData));

    console.log(`${noteId} has been deleted`);

    res.json(freshData);
});

module.exports = router