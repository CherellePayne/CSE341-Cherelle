const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'))

// code is referencing this code in index.js
// const routes = require('express').Router();
// routes.get('/', (reg, res, next) =>{
//     reg.json('Awesome person');
// });

app.listen(port, () => {
    console.log(`Running on port ${port}`)
});

//Idea given in fullstack for query 
// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
//   res.send('id: ' + req.query.id);
// });

// app.listen(3000);