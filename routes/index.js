//Week1 Routes
const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Ken Payne');
});
// added this line in week 2
routes.use('/contacts', require('./contacts.js'));
module.exports = routes;

const testVariable = 'awesome!';

// //Week2
// const express = require('express');
// const router = express.Router();

// router.use('/contacts', require('./contacts.js'))

module.exports = routes;
