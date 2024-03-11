const Joi = require('@hapi/joi');

const schemaContacto = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

module.exports = schemaContacto;