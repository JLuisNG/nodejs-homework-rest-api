const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

// GET /api/contacts
router.get('/', contactsController.listContacts);

// GET /api/contacts/:id
router.get('/:id', contactsController.getById);

// POST /api/contacts
router.post('/', contactsController.addContact);

// DELETE /api/contacts/:id
router.delete('/:id', contactsController.removeContact);

// PUT /api/contacts/:id
router.put('/:id', contactsController.updateContact);

module.exports = router;