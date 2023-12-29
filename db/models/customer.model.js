const { Model, DataTypes, Sequelize } = require('sequelize');
const CUSTOMER_TABLE = 'customers';

const CustomerSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING(50),
    allowNull: false,
    field: 'last_name',
  },
  Phone: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false,
    field: 'created_at',
  },
};

class Customer extends Model {
  static associate() {
    //models
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE, //name of the table
      modelName: 'Customer', //name of the model
      timestamps: false, //avoid create columns for createdAt and updatedAt
    };
  }
}

module.exports = { CustomerSchema, Customer, CUSTOMER_TABLE };
