const express = require("express");
const ctrl = require("../../controllers/contacts");
const schema = require("../../schemas/contacts");
const { celebrate, Segments } = require('celebrate');

const router = express.Router();

router.get("/", ctrl.getContacts);
router.get("/:contactId", ctrl.getById);
router.post("/", celebrate({
  [Segments.BODY]: schema
}), ctrl.addContact);
router.delete("/:contactId", ctrl.removeContact);
router.put("/:contactId", celebrate({
  [Segments.BODY]: schema
}), ctrl.updateContact);

module.exports = router;