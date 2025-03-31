const { DataTypes } = require('sequelize');
const sequelize = require('../events/database/sequelizeConnection');

const Ability = sequelize.define('Ability', {
    IdAbility: {
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
    Damage: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Regen: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Shield: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Experience: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    LevelRequired: {
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
    tableName: 'Ability',
    timestamps: false
})

module.exports = Ability;