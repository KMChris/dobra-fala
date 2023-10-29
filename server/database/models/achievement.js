const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Achievement', {
        achievementId: {
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        achievementLevel: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        achievementName: {
            type: DataTypes.STRING(32),
            allowNull: false,
        },
        userId: {
            type: DataTypes.STRING(18),
            allowNull: false,
        },
        earnedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }), {
        primaryKey: ['achievementId', 'achievementLevel', 'userId'],
        timestamps: false,
    };
};
