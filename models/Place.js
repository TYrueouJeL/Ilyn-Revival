const { DataTypes } = require('sequelize');
const sequelize = require('../events/database/sequelizeConnection');

const Place = sequelize.define('Place', {
    IdPlace: {
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
    Location: {
        type: DataTypes.DECIMAL(6, 3),
        allowNull: false
    },
    IdRegion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Region',
            key: 'IdRegion'
        }
    },
    IdCity: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'City',
            key: 'IdCity'
        }
    },
}, {
    tableName: 'Place',
    timestamps: false
})

module.exports = Place;