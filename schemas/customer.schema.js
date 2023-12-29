const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().max(50);
const lastName = Joi.string();
const phone = Joi.string();

const getCustomerSchema = Joi.object({
  id: id.required(),
});

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
});

const updateCustomerSchema = Joi.object({ name, lastName, phone });

module.exports = {
  getCustomerSchema,
  createCustomerSchema,
  updateCustomerSchema,
};
