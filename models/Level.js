const { DataTypes } = require('sequelize');
const sequelize = require('../events/database/sequelizeConnection');

const Level = sequelize.define('Level', {
    IdLevel: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Level: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ExperienceRequired: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    HealthPointsBonus: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    AttackBonus: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    DefenseBonus: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Type: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Level',
    timestamps: false
})

module.exports = Level;