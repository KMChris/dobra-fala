const seq = require('../database');
const uniqid = require('uniqid');
const validator = require('validator');

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
    const { title, description, level } = req.body;

    if (typeof title !== 'string' || !validator.isLength(title, { min: 6, max: 256 }))
        return res.status(400).json({ message: 'Invalid title.' });

    if (typeof description !== 'string' || !validator.isLength(description, { min: 6 }))
        return res.status(400).json({ message: 'Invalid description.' });

    if (typeof level !== 'number' || level < 1 || level > 5 || level !== Math.floor(level))
        return res.status(400).json({ message: 'Invalid level.' });

    try {
        const id = uniqid();
        const creatorId = req.user.id;
        const task = await seq.models.Task.create({ id, creatorId, title, description, level });
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
    const { id, title, description, level } = req.body;

    if (typeof title !== 'string' || !validator.isLength(title, { min: 6, max: 256 }))
        return res.status(400).json({ message: 'Invalid title.' });

    if (typeof description !== 'string' || !validator.isLength(description, { min: 6 }))
        return res.status(400).json({ message: 'Invalid description.' });

    if (typeof level !== 'number' || level < 1 || level > 5 || level !== Math.floor(level))
        return res.status(400).json({ message: 'Invalid level.' });

    try {
        const task = await seq.models.Task.findOne({ where: { id } });
        task.title = title;
        task.description = description;
        task.level = level;
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
