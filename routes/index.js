//Week1 Routes
// const routes = require('express').Router();

// routes.get('/', (req, res) => {
//   res.send('Ken Payne');
// });

// module.exports = routes;


//From video week 1
// const { awesomeFunction, returnAnotherPerson } = require('../controllers');

// const routes = require('express').Router();

// comment below out if it doesn't work
// const myController = require('/Users/kenpayne/Documents/CSE341/CSE341-Cherelle/routes/index.js')
// routes.get('/', myController, awesomeFunction);
// routes.get('/awesome',myController, returnAnotherPerson);

//Week2
const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts.js'))

module.exports = router;



