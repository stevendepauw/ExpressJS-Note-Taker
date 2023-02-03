const express = require('express');
const path = require('path');
const PORT = process.env.port || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
);


//index for all the pieces created to come together on
//