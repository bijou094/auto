const { Sequelize } = require('sequelize');
const dotenv = require('dotenv').config(); 


const db = new Sequelize(process.env.DB_NAME , process.env.DB_USER , process.env.DB_PASS , {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    //logging: false,passer a true pour voir les différentes requêtes effectuées par l'ORM
})
module.exports = db;


