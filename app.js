const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', (req, res) => {
    console.log("gett");
    
    res.render("home.ejs");
});

app.get('/about', (req, res) => {
    res.render("about_us.ejs");
});

app.get('/', (req, res) => {
    res.render("login.ejs");
});

app.get('/signup', (req, res) => {
    res.render("signup.ejs");
});

const BodyParser = require('body-parser');
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.listen(8002, () => {
    console.log(`Server started at 8002`);
});
