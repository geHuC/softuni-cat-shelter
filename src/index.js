const express = require('express');
const initHandlebars = require('./config/hadlebars.js');




//Setup
const app = express();
initHandlebars(app);

app.all('/', (req, res) => {
    res.render('index');
})


app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
})