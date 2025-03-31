const { DataTypes } = require('sequelize');
const sequelize = require('../events/database/sequelizeConnection');

const Adventurer = sequelize.define('Adventurer', {
    IdAdventurer: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    IdDiscord: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Gold: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Experience: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    IdPlace: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Place',
            key: 'IdPlace'
        }
    },
    IdPersonage: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
            model: 'Personage',
            key: 'IdPersonage'
        }
    },
}, {
    tableName: 'Adventurer',
    timestamps: false
})

module.exports = Adventurer;