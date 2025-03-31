const { DataTypes } = require('sequelize');
const sequelize = require('../events/database/sequelizeConnection');

const BuildingPlace = sequelize.define('BuildingPlace', {
    IdPlace: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'Place',
            key: 'IdPlace'
        }
    },
    IdBuilding: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'Building',
            key: 'IdBuilding'
        }
    },
}, {
    tableName: 'BuildingPlace',
    timestamps: false
})

module.exports = BuildingPlace;