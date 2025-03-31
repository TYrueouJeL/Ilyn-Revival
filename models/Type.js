const { DataTypes } = require('sequelize');
const sequelize = require('../events/database/sequelizeConnection');

const Type = sequelize.define('Type', {
    IdType: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Type: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'Type',
    timestamps: false
})

module.exports = Type;