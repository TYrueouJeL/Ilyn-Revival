const { DataTypes } = require('sequelize');
const sequelize = require('../events/database/sequelizeConnection');

const Item = sequelize.define('Item', {
    IdItem: {
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
    BuyPrice: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    SellPrice: {
        type: DataTypes.INTEGER,
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
    Rarity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    RequiredLevel: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    SlotType: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'Item',
    timestamps: false
})

module.exports = Item;