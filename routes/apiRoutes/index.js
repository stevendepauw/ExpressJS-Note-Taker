const fs = require('fs');
const db = require('../../db/db.json');
const router1 = require('express').Router();
const uniqid = require('uniqid');

router1.get('/api/notes', (req, res) => {
    fs.readFile('../db/db.json', (err, data) => {
        if (err) throw err;
        console.log(JSON.parse(data));

        res.send(data)
    })
});

router1.post('/api/notes', (req, res) => {
    let newNote = {
        id: uniqid(),
        title: req.body.title,
        text: req.body.text
    }

    fs.readFile('../db/db.json', (err, data) => {
        if (err) throw err;

        let noteData = JSON.parse(data);

        noteData.push(newNote);
        console.log(newData);

        fs.writeFile('../db/db.json', JSON.stringify(noteData), (err) => {
            if (err) throw err;

            res.send('successfully added');
        })
    });
});

module.exports = router1;