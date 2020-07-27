const sequelize = require("../config/config");
const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class User extends Model {}

User.init(
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
  },
  {
    sequelize,
    modelName: "user",
  }
);

module.exports = User;
