const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { query } = require('express');

class ProductServices {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    // podemos generar datos falsos con faker y decidir que cantidad de productos queremos obtener usando los query params
    // en este caso estamos estableciendo que el limite sea 10 si no recibimos algun query param, pero si lo recibimos en la url se vera como size y el total de productos
    //http://localhost:3005/products?size=20
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async find(query) {
    const options = {
      include: ['category'],
    };
    const { limit, offset } = query;

    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }
    const products = await models.Product.findAll(options);
    return products;
  }

  async getById(id) {
    // const name = this.getTotal(); // esto es para probar el error
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('Product is blocked');
    }
    return product;
  }

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async update(id, changes) {
    const index = this.products.findIndex((product) => product.id === id);
    //si findIndex no encuentra algun producto que tenga el mismo id que estmos buscando regresara -1
    if (index === -1) {
      throw boom.notFound('Product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
    // si findIndex encuentra el producto que tiene el mismo id que estamos buscando, lo reemplazara con el nuevo producto que estamos enviando
    // con la posicion de index en el array de productos
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw boom.Boom.notFound('Product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductServices;
