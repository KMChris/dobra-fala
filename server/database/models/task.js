const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Task', {
        id: {
            primaryKey: true,
            type: DataTypes.STRING(16),
            allowNull: false,
        },
        creatorId: {
            type: DataTypes.STRING(16),
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING(256),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        completedBy: {
            type: DataTypes.STRING(16),
            allowNull: true,
        },
        completedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    });
};
