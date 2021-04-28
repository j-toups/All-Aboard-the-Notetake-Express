const fs = require('fs');
const {v4:uuidv4} = require('uuid');


app.get('./notes.html', (req, res,) => {
    console.log('getting notes...');

    let data = JSON.parse(fs.readFileSync('./db/dbjsaon', 'utf-8'));

    console.log ('returning notes' + JSON.stringify(data));

    response.json(data);
});

app.post('./public/notes.html', (req, res) => {
    const newNote = request.body;

    console.log('Post request' + JSON.stringify(newNote));
    newNote.id = uuidv4();
    
    let data = JSON.parse(fs.readFileSync('/db.json', 'utf-8'));

    fs.writeFileSync('/db.jason', JSON.stringify(data));

    console.log('New note added');

    response.json(data);

});


module.exports = app;
