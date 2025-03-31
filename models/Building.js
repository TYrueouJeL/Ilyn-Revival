const { DataTypes } = require('sequelize');
const sequelize = require('../events/database/sequelizeConnection');

const Building = sequelize.define('Building', {
    IdBuilding: {
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
    IdType: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Type',
            key: 'IdType'
        }
    }
}, {
    tableName: 'Building',
    timestamps: false
})

module.exports = Building;