//Week1 Routes
const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Ken Payne');
});

routes.use('/', require('./swagger'));
routes.use('/contacts', require('./contacts.js'));


const testVariable = 'awesome!';

module.exports = routes;

