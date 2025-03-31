const { DataTypes } = require('sequelize');
const sequelize = require('../events/database/sequelizeConnection');

const Enemy = sequelize.define('Enemy', {
    IdEnemy: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    ExperienceValue: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    GoldValue: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    IdPersonage: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
            model: 'Personage',
            key: 'IdPersonage'
        }
    }
}, {
    tableName: 'Enemy',
    timestamps: false
})

module.exports = Enemy;