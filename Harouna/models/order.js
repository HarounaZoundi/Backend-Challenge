const sequelize = require("../config/config");
const Sequelize = require("sequelize");
const User = require("../models/user");
const Model = Sequelize.Model;

class Order extends Model {}

Order.init(
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    user_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
  },
  {
    sequelize,
    modelName: "Order",
  }
);

Order.belongsTo(User, {
    allowNull: false
})
module.exports = Order;
