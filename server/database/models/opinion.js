const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Opinion', {
        title: {
            type: DataTypes.STRING(64),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(1024),
            allowNull: false,
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fromUserId: {
            type: DataTypes.STRING(18),
            allowNull: false,
        },
        toUserId: {
            type: DataTypes.STRING(18),
            allowNull: false,
        },
    }, {
        primaryKey: ['fromUserId', 'toUserId'],
    });
};
