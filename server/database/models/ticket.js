const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Ticket', {
        taskId: {
            type: DataTypes.STRING(18),
            allowNull: false,
        },
        userId: {
            type: DataTypes.STRING(18),
            allowNull: false,
        },
        comment: {
            type: DataTypes.STRING(2048),
            allowNull: false,
        },
    }, {
        primaryKey: ['taskId', 'userId'],
    });
};
