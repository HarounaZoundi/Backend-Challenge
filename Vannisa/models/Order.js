const Sequelize = require('sequelize');
const sequelize = require('../config/config');
const User= require("../models/User");
const Model =Sequelize.Model;

class Order extends Model {}

Order.init({
  // Model attributes are defined here
  id:{
      type:Sequelize.UUID,
      defaultValue:Sequelize.UUIDV1,
      primaryKey:true,
  },
  userId:{
    type:Sequelize.UUID,
    allowNull: false
    },
  orderName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantity:{
      type: Sequelize.INTEGER,
      allowNull: false,
      
  },
  price:{
    type: Sequelize.DOUBLE,
    allowNull: false,
    
}

}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'order' // We need to choose the model name
});

Order.belongsTo(User,{
  allowNull:false
})
module.exports=Order;