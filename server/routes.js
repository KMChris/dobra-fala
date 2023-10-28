const express = require('express');
const router = express.Router();

const auth = require('./controllers/auth');
router.post('/auth/token', auth.token);
router.post('/auth/register', auth.register);

module.exports = router;
