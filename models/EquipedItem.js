const { DataTypes } = require('sequelize');
const sequelize = require('../events/database/sequelizeConnection');

const EquipedItem = sequelize.define('EquipedItem', {
    IdEquipedItem: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    IdItem: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Item',
            key: 'IdItem'
        }
    },
    IdEquipmentSlot: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'EquipmentSlot',
            key: 'IdEquipmentSlot'
        }
    },
    IdPersonnage: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Personage',
            key: 'IdPersonage'
        }
    }
}, {
    tableName: 'EquipedItem',
    timestamps: false
})

module.exports = EquipedItem;