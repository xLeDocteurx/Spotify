const express = require('express');
// const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyparser.urlencoded({ extended: false }));

let server = app.listen(process.env.PORT || 8080);

app.get('/', (req, res) => {

    res.render('./');
});