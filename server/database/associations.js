module.exports = (sequelize) => {

    const { User, Task } = sequelize.models;

    User.hasMany(Task, { foreignKey: 'creatorId' });
    Task.belongsTo(User, { foreignKey: 'creatorId' });
};
