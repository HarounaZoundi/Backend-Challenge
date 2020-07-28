const Sequelize = require('sequelize');
const sequelize = require('../config/config');
const Model =Sequelize.Model;

class User extends Model {}

User.init({
  // Model attributes are defined here
  id:{
      type:Sequelize.UUID,
      defaultValue:Sequelize.UUIDV1,
      primaryKey:true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email:{
      type: Sequelize.STRING,
      allowNull: false,
      unique:true
  },
  password:{
    type: Sequelize.STRING,
    allowNull: false,
  }

}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'user' // We need to choose the model name
});
module.exports=User;