const { DataTypes } = require('sequelize');
const sequelize = require('../events/database/sequelizeConnection');

const CombatParticipant = sequelize.define('CombatParticipant', {
    IdCombatParticipant: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    IdPersonage: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Personage',
            key: 'IdPersonage'
        }
    },
    IdCombatTeam: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'CombatTeam',
            key: 'IdCombatTeam'
        }
    }
}, {
    tableName: 'CombatParticipant',
    timestamps: false
})

module.exports = CombatParticipant;