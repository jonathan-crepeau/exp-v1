// SECTION - Requirements
const express = require('express');
const app = express();
const path = require('path');

// SECTION - Middleware

// SECTION - Routes
app.get('/', (req, res) => {
    res.send('The root, bb!')
})

app.get('/search', (req, res) => {
    console.log(req.query);
    res.send(`<h1>SearchTest</h1>`)
})

app.get('/echo/:word', (req, res) => {
    console.log(req.params);
    res.send(`<h1>ECHO: ${req.params.word}</h1>`)
})

app.get('/api/burgers', (req, res) => {
    res.json(burgers);
});

app.get('/api/tacos', (req, res) => {
    res.json(tacos);
});

app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.')
})

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