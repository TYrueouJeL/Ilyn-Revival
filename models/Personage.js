const { DataTypes } = require('sequelize');
const sequelize = require('../events/database/sequelizeConnection');

const Personage = sequelize.define('Personage', {
    IdPersonage: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    MaxHealthPoints: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    HealthPoints: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Attack: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Defense: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    IdLevel: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Level',
            key: 'IdLevel'
        }
    },
    IdClass: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Class',
            key: 'IdClass'
        }
    },
}, {
    modelName: 'Personage',
    tableName: 'Personage',
    timestamps: false
})

module.exports = Personage;