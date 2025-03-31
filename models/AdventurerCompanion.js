const { DataTypes } = require('sequelize');
const sequelize = require('../events/database/sequelizeConnection');

const AdventurerCompanion = sequelize.define('AdventurerCompanion', {
    IdAdventurerCompanion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    IdAdventurer: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Adventurer',
            key: 'IdAdventurer'
        }
    },
    IdCompanion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Companion',
            key: 'IdCompanion'
        }
    },
}, {
    tableName: 'AdventurerCompanion',
    timestamps: false
})

module.exports = AdventurerCompanion;