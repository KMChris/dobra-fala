const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

const models = [
    require('./models/user'),
];

for (const model of models)
    model(sequelize);

const associations = require('./associations');
associations(sequelize);

module.exports = sequelize;
