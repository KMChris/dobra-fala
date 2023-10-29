module.exports = (sequelize) => {

    const { Achievement, Opinion, User, Task } = sequelize.models;

    User.hasMany(Achievement, { foreignKey: 'userId' });
    Achievement.belongsTo(User, { foreignKey: 'userId' });

    User.hasMany(Opinion, { foreignKey: 'fromUserId' });
    Opinion.belongsTo(User, { foreignKey: 'fromUserId' });

    User.hasMany(Opinion, { foreignKey: 'toUserId' });
    Opinion.belongsTo(User, { foreignKey: 'toUserId' });

    User.hasMany(Task, { foreignKey: 'creatorId' });
    Task.belongsTo(User, { foreignKey: 'creatorId' });

    User.hasMany(Task, { foreignKey: 'completedBy' });
    Task.belongsTo(User, { foreignKey: 'completedBy' });
};
