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


module.exports = router