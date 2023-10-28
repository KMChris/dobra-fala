const express = require('express');
const router = express.Router();

const seq = require('./database');

router.all('*', async (req, res) => {
    const user = await seq.models.User.findOne({name: 'XD'})
    res.send("XD" + user);
});

module.exports = router;
