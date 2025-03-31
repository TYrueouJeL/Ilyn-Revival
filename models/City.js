const { DataTypes } = require('sequelize');
const sequelize = require('../events/database/sequelizeConnection');

const City = sequelize.define('City', {
    IdCity: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    RequiredLevel: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    tableName: 'City',
    timestamps: false
});

module.exports = City;