const { Model, DataTypes, Sequelize } = require('sequelize');
const CUSTOMER_TABLE = 'customers';
const { USER_TABLE } = require('./user.model');

const CustomerSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
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
  phone: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false,
    field: 'created_at',
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      // User belongsTo Company 1:1 (foreignKey) table that will be associated to
      model: USER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE', //Cascade update if Company primary key is changed
    onDelete: 'SET NULL', // if the user is deleted, the customer will be null
  },
};

class Customer extends Model {
  static associate(models) {
    // define association here with other models (foreign keys) that will be used in the application and the database
    this.belongsTo(models.User, { as: 'user' });
    this.hasMany(models.Order, {
      as: 'orders',
      foreignKey: 'customerId',
    });
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
