const { DataTypes } = require('sequelize');
const sequelize = require('../events/database/sequelizeConnection');

const Companion = sequelize.define('Companion', {
    IdCompanion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Experience: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    IdPersonage: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
            model: 'Personage',
            key: 'IdPersonage'
        }
    },
}, {
    tableName: 'Companion',
    timestamps: false
})

module.exports = Companion;