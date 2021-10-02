const express = require('express');
const initHandlebars = require('./config/hadlebars.js');
const path = require('path');

//Setup
const app = express();
initHandlebars(app);
//require('./config/hadlebars.js')(app); alt way of doing it in one row 

app.use(express.static(path.resolve(__dirname,'./public')));
console.log(path.resolve(__dirname));

app.all('/', (req, res) => {
    res.render('index');
})


app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
})