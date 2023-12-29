'use strict';

const { CUSTOMER_TABLE } = require('../models/customer.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.renameColumn(CUSTOMER_TABLE, 'Phone', 'phone');
  },

  async down(queryInterface) {
    // await queryInterface.dropTable(CUSTOMER_TABLE);
  },
};
