const { Sequelize } = require('sequelize');

const {
    DB_HOST,
    DB_PORT,
    DB_USERNAME,
    DB_PASSWORD, 
    DB_DATABASE
} = process.env





const sequelize = new Sequelize({
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,

    dialect: "mysql"
})

module.exports = sequelize;