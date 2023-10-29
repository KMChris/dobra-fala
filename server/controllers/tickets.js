const seq = require('../database');

module.exports.create = async (req, res) => {
    const { taskId, comment } = req.body;

    if (typeof taskId !== 'string' || taskId.length > 18)
        return res.status(400).send({ message: 'Invalid taskId' });

    if (typeof comment !== 'string' || comment.length > 2048)
        return res.status(400).send({ message: 'Invalid comment' });

    try {
        const userId = req.user.userId;
        const task = await seq.models.Task.findOne({ where: { taskId } });

        if (task.creatorId === userId)
            return res.status(400).send({ message: 'You cannot take your own task' });

        if (task.completedBy !== null)
            return res.status(400).send({ message: 'This task is already taken' });

        await seq.models.Ticket.create({ taskId, userId, comment });
        return res.status(200).send({ message: 'Ticket created' });
    } catch (e) {
        console.log(e);
        return res.status(500).send({ message: 'Internal error' });
    }
};

module.exports.delete = async (req, res) => {
    const { taskId } = req.body;

    if (typeof taskId !== 'string' || taskId.length > 18)
        return res.status(400).send({ message: 'Invalid taskId' });

    try {
        const userId = req.user.userId;
        const task = await seq.models.Task.findOne({ where: { taskId } });

        if (task.creatorId !== userId)
            return res.status(400).send({ message: 'You cannot delete this ticket' });

        if (task.completedBy !== null)
            return res.status(400).send({ message: 'This task is already taken' });

        await seq.models.Ticket.destroy({ where: { taskId } });
        return res.status(200).send({ message: 'Ticket deleted' });
    } catch (e) {
        console.log(e);
        return res.status(500).send({ message: 'Internal error' });
    }
};

module.exports.read = async (req, res) => {
    const { taskId } = req.body;

    if (taksId != null && (typeof taskId !== 'string' || taskId.length > 18))
        return res.status(400).send({ message: 'Invalid taskId' });

    try {
        if (taskId != null) {
            const userId = req.user.userId;
            const task = await seq.models.Task.findOne({ where: { taskId }, include: [{ model: seq.models.Ticket }] });

            if (task.creatorId !== userId)
                return res.status(400).send({ message: 'You cannot read this ticket' });

            const tickets = await seq.models.Ticket.findAll({ where: { taskId }, include: [{ model: seq.models.User }, { model: seq.models.Task }] });
            return res.status(200).send({ tickets });
        } else {
            const userId = req.user.userId;
            const tickets = await seq.models.Ticket.findAll({ where: { userId }, include: [{ model: seq.models.User }] });
            return res.status(200).send({ tickets });
        }
    } catch (e) {
        console.log(e);
        return res.status(500).send({ message: 'Internal error' });
    }
};

module.exports.done = async (req, res) => {
    const { taskId, userId } = req.body;

    if (typeof taskId !== 'string' || taskId.length > 18)
        return res.status(400).send({ message: 'Invalid taskId' });

    if (typeof userId !== 'string' || userId.length > 18)
        return res.status(400).send({ message: 'Invalid userId' });

    try {
        const myId = req.user.userId;

        const task = await seq.models.Task.findOne({ where: { taskId }, include: [{ model: seq.models.Ticket }] });

        if (task.creatorId !== myId)
            return res.status(400).send({ message: 'You cannot complete this task' });

        if (task.completedBy !== null)
            return res.status(400).send({ message: 'This task is already taken' });

        const ticket = await seq.models.Ticket.findOne({ where: { taskId, userId } });

        if (ticket == null)
            return res.status(400).send({ message: 'This user did not take this task' });

        const completedAt = new Date();
        await seq.models.Task.update({ completedBy: userId, completedAt }, { where: { taskId } });

        return res.status(200).send({ message: 'Task completed' });
    } catch (e) {
        console.log(e);
        return res.status(500).send({ message: 'Internal error' });
    }
};
