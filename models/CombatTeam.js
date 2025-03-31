const { DataTypes } = require('sequelize');
const sequelize = require('../events/database/sequelizeConnection');

const CombatTeam = sequelize.define('CombatTeam', {
    IdCombatTeam: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    IdCombat: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Combat',
            key: 'IdCombat'
        }
    }
}, {
    tableName: 'CombatTeam',
    timestamps: false
})

module.exports = CombatTeam;