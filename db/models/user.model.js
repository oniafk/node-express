const { Model, DataTypes, Sequelize } = require('sequelize');

//deciede name of the table that will show the DB
const USER_TABLE = 'users';

//define schema for the table, parameters, types, properties for each column
const UserSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: 'customer',
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false,
    field: 'created_at',
  },
};

class User extends Model {
  static associate(models) {
    this.hasOne(models.Customer, { as: 'customer', foreignKey: 'userId' });
  }
  static config(sequelize) {
    //receive a conection to the DB
    return {
      sequelize,
      tableName: USER_TABLE, //name of the table
      modelName: 'User', //name of the model
      timestamps: false, //avoid create columns for createdAt and updatedAt
    };
  }
}

module.exports = { UserSchema, User, USER_TABLE };
