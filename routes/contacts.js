const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

//Week 3

router.post('/', contactsController.createContact);

// router.put('/:id', contactsController.updateContact);

// router.delete('/:id', contactsController.deleteContact);

//This exports all the routes from contacts.js (controller)
module.exports = router;
