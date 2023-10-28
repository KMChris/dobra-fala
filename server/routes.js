const express = require('express');
const router = express.Router();

const reject = (req, res, next) => {
    if (req.user === null)
        return res.status(401).json({ message: 'Unauthorized.' });
    next();
};



/*** AUTH ***/
const auth = require('./controllers/auth');

/* {email, password} */
router.post('/auth/token', auth.token);

/* {name, email, password} */
router.post('/auth/register', auth.register);



module.exports = router;
