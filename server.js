const bodyparser = require("body-parser");
const express = require('express');
// const ejs = require('ejs');
// let { commit } = require("./utils/utils.js");

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyparser.urlencoded({ extended: false }));

let server = app.listen(process.env.PORT || 8080);

let users = require('./users.json').Users;

console.log("server is running");

app.get('/', (req, res) => {

    res.render('index');
});

app.get('/connect', (req, res) => {

    res.render('connect');
});

app.post('/connect', (req, res) => {
    let username = req.body.co_username;
    let password = req.body.co_password;

    console.log(username);
    console.log(password);

    let this_user = users.find( user => {
        return user.username == username && user.password == password;
    });
    console.log("une demande de connection a étée effectuée, elle retourne ceci :");
    console.log(this_user);

    this_user ? res.render('index', {user: this_user}) : res.render('/connect');
});