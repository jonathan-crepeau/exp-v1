// SECTION - Requirements
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

// SECTION - Middleware

const myLogger = function (req, res, next) {
    console.log('LOGGED');
    next()
}

const requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next()
}

app.use(myLogger);
app.use(requestTime);
app.use(cookieParser());

// ERROR HANLDER
app.use((err, req, res, next) => {
    res.status(400).send(err.message)
})

// SECTION - Routes

// app.get('/', (req, res) => {
//     let responseText = 'Hello World!<br>';
//     responseText += `<small>Requested at: ${req.requestTime}</small>`
//     res.send(responseText)
// })

app.get('/', function (req, res) {
    console.log('Cookies: ', req.cookies);
    console.log('Signed Cookies: ', req.signedCookies);
})

// SECTION - Server Start

app.listen(3000);