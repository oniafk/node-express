'use strict';

const { CATEGORY_TABLE, CategorySchema } = require('../models/category.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(
      CATEGORY_TABLE,
      'created_at',
      CategorySchema.createAt,
    );
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(CATEGORY_TABLE, 'role');
  },
};
