const express = require('express');
const api = require('./routes/index ')
const PORT = process.env.port || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
);

//index for all the pieces created to come together on
//