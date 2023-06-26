const Sequelize = require('sequelize');


const sequelize = require('../util/database');


const User = sequelize.define('user',{

id:{

    type:Sequelize.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
},
username:
{
    type:Sequelize.STRING,
    allowNull:false
    
},
emailid:
{
    type:Sequelize.STRING,
    allowNull:false,
    unique:true
},

phonenumber:
{
    type:Sequelize.STRING,
    unique:true
}


});
module.exports=User;