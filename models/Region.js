const { DataTypes } = require('sequelize');
const sequelize = require('../events/database/sequelizeConnection');

const Region = sequelize.define('Region', {
    IdRegion: {
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
    tableName: 'Region',
    timestamps: false
});

module.exports = Region;