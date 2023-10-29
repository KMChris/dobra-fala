const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

const models = [
    require('./models/achievement'),
    require('./models/opinion'),
    require('./models/user'),
    require('./models/task'),
];

for (const model of models)
    model(sequelize);

const associations = require('./associations');
associations(sequelize);

module.exports = sequelize;
