const { DataTypes } = require('sequelize');
const sequelize = require('../events/database/sequelizeConnection');

const Inventory = sequelize.define('Inventory', {
    IdInventory: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    IdAdventurer: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
            model: 'Adventurer',
            key: 'IdAdventurer'
        }
    },
    IdItem: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Item',
            key: 'IdItem'
        }
    },
}, {
    tableName: 'Inventory',
    timestamps: false
})

module.exports = Inventory;