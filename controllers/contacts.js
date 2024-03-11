const contactsService = require('../services/contacts');
const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

const listContacts = async (req, res) => {
  const contacts = await contactsService.listContacts();
  res.json(contacts);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const contact = await contactsService.getById(id);
  if (contact) {
    res.json(contact);
  } else {
    res.status(404).json({ message: 'Not found' });
  }
};

const addContact = async (req, res) => {
  const { error } = contactSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const newContact = await contactsService.addContact(req.body);
  res.status(201).json(newContact);
};

const removeContact = async (req, res) => {
  const { id } = req.params;
  const isRemoved = await contactsService.removeContact(id);
  if (isRemoved) {
    res.json({ message: 'Contact removed' });
  } else {
    res.status(404).json({ message: 'Not found' });
  }
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const { error } = contactSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const updatedContact = await contactsService.updateContact(id, req.body);
  if (updatedContact) {
    res.json(updatedContact);
  } else {
    res.status(404).json({ message: 'Not found' });
  }
};

module.exports = {
  listContacts,
  getById,
  addContact,
  removeContact,
  updateContact,
};