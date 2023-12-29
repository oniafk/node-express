const boom = require('boom');
const { models } = require('../libs/sequelize');

class CustomersService {
  constructor() {}

  async find() {
    const customers = await models.Customer.findAll();
    return customers;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id);
    if (!customer) {
      throw boom.notFound('Customer not found');
    }
    return customer;
  }

  async create(data) {
    return data;
  }

  async update(id, changes) {
    const customer = await this.findOne(id);
    const updated = await customer.update(changes);
    return updated;
  }

  async delete(id) {
    const customer = await this.findOne(id);
    await customer.destroy();
    return { id };
  }
}

module.exports = CustomersService;
