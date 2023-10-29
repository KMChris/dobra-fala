const seq = require('../database');
const validator = require('validator');

module.exports.search = async (req, res) => {
    try {
        const users = await seq.models.User.findAll({ raw: true });
        const tasks = await seq.models.Task.findAll({ raw: true });

        for (let i = 0; i < users.length; i++)
            users[i].score = 0;

        tasks.forEach(task => {
            if (task.completedBy == null) return;
            const user = users.find(user => user.userId === task.completedBy);
            if (user === undefined) return;
            user.score += task.level;
        });


        const sortedUsers = users.sort((a, b) => b.score - a.score);
        return res.json(sortedUsers);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Something went wrong.' });
    }
};

module.exports.read = async (req, res) => {
    let { userId } = req.body;

    if (userId !== null && (typeof userId !== 'string' || userId.length > 18))
        return res.status(400).json({ message: 'Invalid userId.' });

    if (userId === null)
        userId = req.user.userId;

    try {
        const user = await seq.models.User.findOne({ where: { userId } });
        const opinions = await seq.models.Opinion.findAll({ where: { toUserId: userId }, raw: true });
        const tasks = await seq.models.Task.findAll({ where: { completedBy: userId }, raw: true });

        return res.json({user, opinions, tasks});
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Something went wrong.' });
    }
};

module.exports.update = async (req, res) => {
    const { name, email, password, phone, address, geoX, geoY } = req.body;

    if (typeof name !== 'string' || name.length < 3 || name.length > 64)
        return res.status(400).json({ message: 'Invalid name.' });

    if (typeof email !== 'string' || !validator.isEmail(email))
        return res.status(400).json({ message: 'Invalid email.' });

    if (typeof password !== 'string' || password.length < 8 || password.length > 64)
        return res.status(400).json({ message: 'Invalid password.' });

    if (phone !== null & (typeof phone !== 'string' || !validator.isMobilePhone(phone, 'any')))
        return res.status(400).json({ message: 'Invalid phone.' });

    if (phone !== null & (typeof address !== 'string' || address.length < 3 || address.length > 128))
        return res.status(400).json({ message: 'Invalid address.' });

    if (geoX !== null & (typeof geoX !== 'number' || geoX < -180 || geoX > 180))
        return res.status(400).json({ message: 'Invalid geoX.' });

    if (geoY !== null & (typeof geoY !== 'number' || geoY < -90 || geoY > 90))
        return res.status(400).json({ message: 'Invalid geoY.' });

    try {
        const userId = req.user.userId;
        const user = await seq.models.User.update({ name, email, password, phone, address, geoX, geoY }, { where: { userId } });
        return res.json(user);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Something went wrong.' });
    }
};

module.exports.delete = async (req, res) => {
    try {
        const userId = req.user.userId;
        const user = await seq.models.User.destroy({ where: { userId } });
        return res.json(user);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Something went wrong.' });
    }
};
