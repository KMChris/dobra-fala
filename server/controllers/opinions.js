const seq = require('../database');

module.exports.create = async (req, res) => {
    const { title, description, level, toUserId } = req.body;

    if (typeof title !== 'string' || title.length < 1 || title.length > 64)
        return res.status(400).json({ message: 'Invalid title' });

    if (typeof description !== 'string' || description.length < 1 || description.length > 1024)
        return res.status(400).json({ message: 'Invalid description' });

    if (typeof level !== 'number' || level < 1 || level > 3 || level !== Math.floor(level))
        return res.status(400).json({ message: 'Invalid level' });

    if (typeof toUserId !== 'string' || toUserId.length > 18)
        return res.status(400).json({ message: 'Invalid toUserId' });

    try {
        const fromUserId = req.user.userId;
        const opinion = await seq.models.Opinion.create({ title, description, level, fromUserId, toUserId });
        return res.status(200).json({ message: 'Opinion created' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports.read = async (req, res) => {
    const { toUserId } = req.body;

    if (typeof toUserId !== 'string' || toUserId.length > 18)
        return res.status(400).json({ message: 'Invalid toUserId' });

    try {
        const opinions = await seq.models.Opinion.findAll({ where: { toUserId } });
        return res.status(200).json({ message: 'Opinions read', opinions });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports.update = async (req, res) => {
    const { title, description, level, toUserId } = req.body;

    if (typeof title !== 'string' || title.length < 1 || title.length > 64)
        return res.status(400).json({ message: 'Invalid title' });

    if (typeof description !== 'string' || description.length < 1 || description.length > 1024)
        return res.status(400).json({ message: 'Invalid description' });

    if (typeof level !== 'number' || level < 1 || level > 3 || level !== Math.floor(level))
        return res.status(400).json({ message: 'Invalid level' });

    if (typeof toUserId !== 'string' || toUserId.length > 18)
        return res.status(400).json({ message: 'Invalid toUserId' });

    try {
        const fromUserId = req.user.userId;
        const opinion = await seq.models.Opinion.update({ title, description, level }, { where: { fromUserId, toUserId } });
        return res.json(opinion);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports.delete = async (req, res) => {
    const { toUserId } = req.body;

    if (typeof toUserId !== 'string' || toUserId.length > 18)
        return res.status(400).json({ message: 'Invalid toUserId' });

    try {
        const fromUserId = req.user.userId;
        const opinion = await seq.models.Opinion.destroy({ where: { fromUserId, toUserId } });
        return res.json(opinion);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
