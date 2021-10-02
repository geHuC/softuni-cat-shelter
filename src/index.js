const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

app.engine('hbs', handlebars({
    extname:'hbs'
}));

app.set('view engine', 'hbs');


app.all('/', (req, res) => {
    res.send('Hello World!2');
})


app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
})