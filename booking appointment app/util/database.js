const Sequelize=require('sequelize');

const sequelize = new Sequelize('node-complete','root','Dhina@454',{
    host:'localhost',
    dialect:'mysql'
});
module.exports=sequelize;