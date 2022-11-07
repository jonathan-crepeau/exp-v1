// SECTION - Requirements
const express = require('express');
const app = express();
const path = require('path');

// SECTION - Middleware

app.use('/home', (req, res, next) => {
    console.log("A new request received at " + Date.now());
    next();  
 });

 app.use(express.static('public'))

// SECTION - Routes
app.get('/', (req, res) => {
    res.send('The root, bb!')
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.')
})

app.get('/api/burgers', (req, res) => {
    res.json(burgers);
});

app.get('/api/tacos', (req, res) => {
    res.json(tacos);
});

// SECTION - Server Start
app.listen(4000);

// SECTION - Data

const burgers = [
    'Hamburger',
    'Cheese Burger',
    'Vegetable Burger'
  ];
  
  var tacos = [
    'Soft Taco',
    'Crunchy Taco',
    'Super Taco'
  ];