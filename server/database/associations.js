module.exports = (sequelize) => {

    const { Achievement, Opinion, Task, Ticket, User } = sequelize.models;

    User.hasMany(Achievement, { foreignKey: 'userId' });
    Achievement.belongsTo(User, { foreignKey: 'userId' });

    User.hasMany(Opinion, { foreignKey: 'fromUserId' });
    Opinion.belongsTo(User, { foreignKey: 'fromUserId' });

    User.hasMany(Opinion, { foreignKey: 'toUserId' });
    Opinion.belongsTo(User, { foreignKey: 'toUserId' });

    User.hasMany(Task, { foreignKey: 'creatorId', as: 'task' });
    Task.belongsTo(User, { foreignKey: 'creatorId', as: 'creator' });

    User.hasMany(Task, { foreignKey: 'completedBy' });
    Task.belongsTo(User, { foreignKey: 'completedBy' });

    User.hasMany(Ticket, { foreignKey: 'userId' });
    Ticket.belongsTo(User, { foreignKey: 'userId' });

    Task.hasMany(Ticket, { foreignKey: 'taskId' });
    Ticket.belongsTo(Task, { foreignKey: 'taskId' });
};
