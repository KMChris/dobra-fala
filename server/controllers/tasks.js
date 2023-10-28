const seq = require('../database');
const uniqid = require('uniqid');

module.exports.search = async (req, res) => {
    try {
        const tasks = await seq.models.Task.findAll({ raw: true });
        return res.json(tasks);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Something went wrong.' });
    }
};

module.exports.create = async (req, res) => {
    const { title, description, category, level, min/*, geoX, geoY*/ } = req.body;

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

    // TODO: add geoX and geoY validation

    try {
        const id = uniqid();
        const creatorId = req.user.id;
        const task = await seq.models.Task.create({ id, creatorId, title, description, category, level, min/*, geoX, geoY*/ });
        return res.json(task);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Something went wrong.' });
    }
};

module.exports.read = async (req, res) => {
    const { id } = req.body;

    try {
        const task = await seq.models.Task.findOne({ where: { id } });
        return res.json(task);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Something went wrong.' });
    }
};

module.exports.update = async (req, res) => {
    const { title, description, category, level, min/*, geoX, geoY*/ } = req.body;

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

    // TODO: add geoX and geoY validation

    try {
        const task = await seq.models.Task.findOne({ where: { id } });
        task.title = title;
        task.description = description;
        task.category = category;
        task.level = level;
        task.min = min;
        /*task.geoX = geoX;
        task.geoY = geoY;*/
        await task.save();
        return res.json(task);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Something went wrong.' });
    }

};


module.exports.delete = async (req, res) => {
    const { id } = req.body;

    try {
        const task = await seq.models.Task.findOne({ where: { id } });
        await task.destroy();
        return res.json({ message: 'Task deleted.' });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Something went wrong.' });
    }
};
