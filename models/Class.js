const { DataTypes } = require('sequelize');
const sequelize = require('../events/database/sequelizeConnection');

const Class = sequelize.define('Class', {
    IdClass: {
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
    HealthPointsRatio: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false
    },
    AttackRatio: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false
    },
    DefenseRatio: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false
    },
}, {
    tableName: 'Class',
    timestamps: false
});

module.exports = Class;