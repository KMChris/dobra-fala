const express = require('express');
const router = express.Router();

router.all('*', (req, res, next) => {
    res.sendStatus(418);
});

module.exports = router;
