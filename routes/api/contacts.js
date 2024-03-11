const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

router.get('/', contactsController.listContacts);

router.get('/:id', contactsController.getById);

router.post('/', contactsController.addContact);

router.delete('/:id', contactsController.removeContact);

router.put('/:id', contactsController.updateContact);

module.exports = router;