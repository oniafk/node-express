const Joi = require('joi');

const id = Joi.number().integer();
const customerId = Joi.number().integer();

const getOrdersSchema = Joi.object({
  id: id.required(),
});

const createOrderSchema = Joi.object({
  customerId: customerId.required(),
});

module.exports = {
  getOrdersSchema,
  createOrderSchema,
};
