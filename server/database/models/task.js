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
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING(32),
            allowNull: false,
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        min: {
            type: DataTypes.INTEGER,
             allowNull: false,
        },
        /*geoX: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        geoY: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },*/
        completedBy: {
            type: DataTypes.STRING(16),
            allowNull: true,
        },
        completedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        mark: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });
};
