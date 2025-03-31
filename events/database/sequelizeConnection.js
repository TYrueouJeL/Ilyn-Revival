const { Sequelize } = require('sequelize');
const config = require('../../config');

const sequelize = new Sequelize('ilynrevival', 'root', 'root', {
    host: config.host,
    dialect: 'mysql'
});

module.exports = sequelize;