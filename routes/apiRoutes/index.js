const fs = require('fs');
const db = require('../../db/db.json');
const router = require('express').Router();
const uniqid = require('uniqid');
const path = require('path');

router.get('/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '../../db/db.json'), (err, data) => {
        if (err) throw err;
        console.log(JSON.parse(data));
        const notes = JSON.parse(data)
        return res.json(notes)
    })
});

router.post('/notes', (req, res) => {
    let newNote = {
        id: uniqid(),
        title: req.body.title,
        text: req.body.text
    }

    fs.readFile(path.join(__dirname, '../../db/db.json') , (err, data) => {
        if (err) throw err;

        let noteData = JSON.parse(data);

        noteData.push(newNote);
        console.log(newNote);

        fs.writeFile(path.join(__dirname, '../../db/db.json'), JSON.stringify(noteData), (err) => {
            if (err) throw err;

            return res.json(noteData);
        })
    });
});

module.exports = router;