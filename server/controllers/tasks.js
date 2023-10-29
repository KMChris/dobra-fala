const seq = require('../database');
const uniqid = require('uniqid');

module.exports.search = async (req, res) => {
    try {
        const tasks = await seq.models.Task.findAll({
            raw: true, include: [{ model: seq.models.User, as: 'creator' }]
        });
        return res.json(tasks);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Something went wrong.' });
    }
};

module.exports.create = async (req, res) => {
    const { title, description, category, level, min, geoX, geoY } = req.body;

    if (typeof title !== 'string' || title.length < 6 || title.length > 128)
        return res.status(400).json({ message: 'Invalid title.' });

    if (typeof description !== 'string' || description.length > 8192)
        return res.status(400).json({ message: 'Invalid description.' });

    if (typeof category !== 'string' || category.length < 3 || category.length > 32)
        return res.status(400).json({ message: 'Invalid category.' });

    if (typeof level !== 'number' || level < 1 || level > 5 || level !== Math.floor(level))
        return res.status(400).json({ message: 'Invalid level.' });

    if (typeof min !== 'number' || min < 0 || min > 3 || min !== Math.floor(min))
        return res.status(400).json({ message: 'Invalid min.' });

    if (typeof geoX !== 'number' || geoX < -180 || geoX > 180)
        return res.status(400).json({ message: 'Invalid geoX.' });

    if (typeof geoY !== 'number' || geoY < -90 || geoY > 90)
        return res.status(400).json({ message: 'Invalid geoY.' });

    try {
        const taskId = uniqid();
        const creatorId = req.user.userId;
        console.log(creatorId)
        const task = await seq.models.Task.create({ taskId, creatorId, title, description, category, level, min, geoX, geoY });
        return res.json(task);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Something went wrong.' });
    }
};

module.exports.read = async (req, res) => {
    const { taskId } = req.body;

    if (typeof taskId !== 'string' || taskId.length > 18)
        return res.status(400).json({ message: 'Invalid taskId.' });

    try {
        const task = await seq.models.Task.findOne({
            where: { taskId }, include: [
                { model: seq.models.User, as: 'creator' },
                { model: seq.models.User, as: 'completedBy' },
            ]
        });
        return res.json(task);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Something went wrong.' });
    }
};

module.exports.update = async (req, res) => {
    const { taskId, title, description, category, level, min, geoX, geoY } = req.body;

    if (typeof taskId !== 'string' || taskId.length > 18)
        return res.status(400).json({ message: 'Invalid taskId.' });

    if (typeof title !== 'string' || title.length < 6 || title.length > 128)
        return res.status(400).json({ message: 'Invalid title.' });

    if (typeof description !== 'string' || description.length > 8192)
        return res.status(400).json({ message: 'Invalid description.' });

    if (typeof category !== 'string' || category.length < 3 || category.length > 32)
        return res.status(400).json({ message: 'Invalid category.' });

    if (typeof level !== 'number' || level < 1 || level > 5 || level !== Math.floor(level))
        return res.status(400).json({ message: 'Invalid level.' });

    if (typeof min !== 'number' || min < 0 || min > 3 || min !== Math.floor(min))
        return res.status(400).json({ message: 'Invalid min.' });

    if (typeof geoX !== 'number' || geoX < -180 || geoX > 180)
        return res.status(400).json({ message: 'Invalid geoX.' });

    if (typeof geoY !== 'number' || geoY < -90 || geoY > 90)
        return res.status(400).json({ message: 'Invalid geoY.' });

    try {
        const task = await seq.models.Task.findOne({ where: { taskId } });

        if (task.completedBy !== null)
            return res.status(400).json({ message: 'This task is already taken.' });

        task.title = title;
        task.description = description;
        task.category = category;
        task.level = level;
        task.min = min;
        task.geoX = geoX;
        task.geoY = geoY;
        await task.save();
        return res.json(task);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Something went wrong.' });
    }
};


module.exports.delete = async (req, res) => {
    const { taskId } = req.body;

    if (typeof taskId !== 'string' || taskId.length > 18)
        return res.status(400).json({ message: 'Invalid taskId.' });

    try {
        const task = await seq.models.Task.findOne({ where: { taskId } });

        if (task.completedBy !== null)
            return res.status(400).json({ message: 'This task is already taken.' });


        await seq.models.Task.destroy({ where: { taskId } });
        return res.json(task);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Something went wrong.' });
    }
};
