const { DataTypes } = require('sequelize');
const sequelize = require('../events/database/sequelizeConnection');

const Combat = sequelize.define('Combat', {
    IdCombat: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    startTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    IdPlace: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Place',
            key: 'IdPlace'
        }
    }
}, {
    tableName: 'Combat',
    timestamps: false
})

module.exports = Combat;