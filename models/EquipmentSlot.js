const { DataTypes } = require('sequelize');
const sequelize = require('../events/database/sequelizeConnection');

const EquipmentSlot = sequelize.define('EquipmentSlot', {
    IdEquipmentSlot: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'EquipmentSlot',
    timestamps: false
})

module.exports = EquipmentSlot;