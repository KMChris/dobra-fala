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



/*** TASKS  ***/
const tasks = require('./controllers/tasks');

/* {} */
router.post('/tasks/search', reject, tasks.search);

/* {title, description, level} */
router.post('/tasks/create', reject, tasks.create);

/* {id} */
router.post('/tasks/read', reject, tasks.read);

/* {id, title, description, level} */
router.post('/tasks/update', reject, tasks.update);

/* {id} */
router.post('/tasks/delete', reject, tasks.delete);



module.exports = router;
