// SECTION - Requirements
const express = require('express');
const app = express();

// SECTION - Middleware

// SECTION - Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

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