const path = require('path');
const express = require('express');

module.exports = function (app) {
    app.get('/notes.html', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));
    app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
    
}
