'use strict';

const { PRODUCT_TABLE, ProductSchema } = require('../models/product.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(
      PRODUCT_TABLE,
      'created_at',
      ProductSchema.createAt,
    );
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(PRODUCT_TABLE, 'createAt');
  },
};
