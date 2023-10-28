const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
        name: {
            type: DataTypes.STRING(32),
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
    });
};
