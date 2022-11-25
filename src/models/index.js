const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: process.env.dialect,
    host: process.env.host,
    port: process.env.port,
    username: process.env.username,
    password: process.env.password,
    database: process.env.database
});

module.exports = sequelize