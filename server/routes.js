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



/*** OPINIONS ***/
const opinions = require('./controllers/opinions');

/* {title, description, level, toUserId} */
router.post('/opinions/create', reject, opinions.create);

/* {toUserId} */
router.post('/opinions/read', reject, opinions.read);

/* {title, description, level, toUserId} */
router.post('/opinions/update', reject, opinions.update);

/* {toUserId} */
router.post('/opinions/delete', reject, opinions.delete);



/*** TASKS  ***/
const tasks = require('./controllers/tasks');

/* {} */
router.post('/tasks/search', reject, tasks.search);

/* {title, description, level} */
router.post('/tasks/create', reject, tasks.create);

/* {taskId} */
router.post('/tasks/read', reject, tasks.read);

/* {taskId, title, description, level} */
router.post('/tasks/update', reject, tasks.update);

/* {taskId} */
router.post('/tasks/delete', reject, tasks.delete);



/*** USERS  ***/
const users = require('./controllers/users');

/* {} */
router.post('/users/search', reject, users.search);

/* {userId} */
router.post('/users/read', reject, users.read);

/* {name, email, password, phone, address, geoX, geoY} */
router.post('/users/update', reject, users.update);

/* {} */
router.post('/users/delete', reject, users.delete);



module.exports = router;
