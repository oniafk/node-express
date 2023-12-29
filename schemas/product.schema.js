const Joi = require('joi');

//Joi - tipo de campo que vamos a usar  - tipo de dato que va a recibir
const id = Joi.number().integer();
// Joi - tipo de campo que vamos a usar - tipo de dato que va a recibir - minimo de caracteres - maximo de caracteres (este es el formato de campo que vamos a usar)
const name = Joi.string().min(3).max(30);
const price = Joi.number().integer().min(5);
const image = Joi.string().uri();
const description = Joi.string().min(10).max(100);
const categoryId = Joi.number().integer();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
  description: description.required(),
  categoryId: categoryId.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
  description: description,
  categoryId: categoryId,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
};
