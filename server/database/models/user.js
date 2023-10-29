const { DataTypes, STRING } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
        userId: {
            primaryKey: true,
            type: DataTypes.STRING(18),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(64),
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING(256),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING(16),
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING(128),
            allowNull: true,
        },
        geoX: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        geoY: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
    });
};
