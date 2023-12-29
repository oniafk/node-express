'use strict';

const { USER_TABLE } = require('./../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.removeColumn(USER_TABLE, 'lastname');
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(USER_TABLE, 'role');
  },
};
