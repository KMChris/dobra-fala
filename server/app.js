const express = require('express');
const app = express();

async function init() {
    const sequelize = require('./database');
    await sequelize.authenticate();
    console.log('Connected to database.');
    await sequelize.sync();
    console.log('Synced database.');

    const routes = require('./routes');
    app.use(routes);

    app.listen(3000, () => {
        console.log('listening on 3000');
    });
}

init();
