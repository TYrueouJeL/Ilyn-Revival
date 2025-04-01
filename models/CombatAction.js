const { DataTypes } = require('sequelize');
const sequelize = require('../events/database/sequelizeConnection');

const CombatAction = sequelize.define('CombatAction', {
    IdCombatAction: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
    IdSourceCombatParticipant: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'CombatParticipant',
            key: 'IdCombatParticipant'
        }
    },
    IdTargetCombatParticipant: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'CombatParticipant',
            key: 'IdCombatParticipant'
        }
    },
    IdCombatTurn: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'CombatTurn',
            key: 'IdCombatTurn'
        }
    },
}, {
    tableName: 'CombatAction',
    timestamps: false
})

module.exports = CombatAction;