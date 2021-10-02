const express = require('express');
const initHandlebars = require('./config/hadlebars.js');
const path = require('path');
const routes = require('./routes');
//Setup
const app = express();

require('./config/mongoose')();
initHandlebars(app);

//require('./config/hadlebars.js')(app); alt way of doing it in one row 

app.use(express.static(path.resolve(__dirname,'./public')));
app.use(routes);


app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
})