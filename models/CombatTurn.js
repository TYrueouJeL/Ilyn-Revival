const { DataTypes } = require('sequelize');
const sequelize = require('../events/database/sequelizeConnection');

const CombatTurn = sequelize.define('CombatTurn', {
    IdCombatTurn: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    TurnNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    IdCombat: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Combat',
            key: 'IdCombat'
        }
    },
}, {
    tableName: 'CombatTurn',
    timestamps: false
})

module.exports = CombatTurn;