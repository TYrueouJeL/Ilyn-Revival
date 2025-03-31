const { DataTypes } = require('sequelize');
const sequelize = require('../events/database/sequelizeConnection');

const TradeableItem = sequelize.define('TradeableItem', {
    IdTradeableItem: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    IdType: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Type',
            key: 'IdType'
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
    tableName: 'TradeableItem',
    timestamps: false
})

module.exports = TradeableItem;