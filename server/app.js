const express = require('express');
const app = express();

async function init() {
    const sequelize = require('./database');

    await sequelize.authenticate();
    console.log('Connected to database.');

    await sequelize.sync({ force: true });
    console.log('Synced database.');

    const cors = require('cors');
    app.use(cors())

    app.use(express.json());

    const auth = require('./middlewares/auth');
    app.use(auth);

    const routes = require('./routes');
    app.use(routes);

    app.listen(4000, () => {
        console.log('listening on 4000');
    });
}

init();
