const fs = require('fs');
const {v4:uuidv4} = require('uuid');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    console.log('getting notes...');
    
    let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
    
    console.log ('returning notes...' + JSON.stringify(data));
    
    res.json(data);
});
    
router.post('/notes', (req, res) => {
    const newNote = req.body;
    
    console.log('Post request' + JSON.stringify(newNote));
    
    newNote.id = uuidv4();
        
    let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));

    data.push(newNote);

    fs.writeFileSync('./db/db.json', JSON.stringify(data));
    
    console.log('NEW NOTE ADDED');
    
    res.json(data);
});

// router.delete('notes/:id', (req, res) => {

//     console.log('TESTING');
    
//     let noteId = req.params.id.toString();

//     console.log(`You\'re DELETING ${noteId}`);

//     let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));

//     const newData = data.filter(note => note.id.toString() !==noteId );

//     fs.writeFileSync('./db/db.json', JSON.stringify(newData));

//     console.log(`${noteId} has been deleted`);

//     res.json(newData);
// });

module.exports = router;