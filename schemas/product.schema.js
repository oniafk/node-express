const Joi = require('joi');

//Joi - tipo de campo que vamos a usar  - tipo de dato que va a recibir
const id = Joi.string().uuid();
// Joi - tipo de campo que vamos a usar - tipo de dato que va a recibir - minimo de caracteres - maximo de caracteres (este es el formato de campo que vamos a usar)
const name = Joi.string().min(3).max(30);
const price = Joi.number().integer().min(5);
const image = Joi.string().uri();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
};
