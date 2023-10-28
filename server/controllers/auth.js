const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const seq = require('../database');
const uniqid = require('uniqid');
const validator = require('validator');

module.exports.token = async (req, res) => {
    const { email, password } = req.body;

    if (typeof email !== 'string' || !validator.isEmail(email))
        return res.status(400).json({ message: 'Invalid email.' });

    if (typeof password !== 'string' && !validator.isLength(password, { min: 8 }))
        return res.status(400).json({ message: 'Invalid password.' });

    try {
        const user = await seq.models.User.findOne({ where: { email } });

        if (!user)
            return res.status(400).json({ message: 'Invalid email or password.' });

        const match = await bcrypt.compare(password, user.password);
        if (!match)
            return res.status(400).json({ message: 'Invalid email or password.' });

        const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, 'NALEŚNIKI', { expiresIn: '1d' });

        return res.json({ token });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Something went wrong.' });
    }
};

module.exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    if (typeof name !== 'string' || !validator.isLength(name, { min: 6, max: 32 }))
        return res.status(400).json({ message: 'Invalid name.' });

    if (typeof email !== 'string' || !validator.isEmail(email))
        return res.status(400).json({ message: 'Invalid email.' });

    if (typeof password !== 'string' && !validator.isLength(password, { min: 8 }))
        return res.status(400).json({ message: 'Invalid password.' });

    try {
        const hash = await bcrypt.hash(password, 10);
        const id = uniqid();
        const user = await seq.models.User.create({ id, name, email, password: hash });
        return res.json({ id: user.id, name: user.name, email: user.email });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Something went wrong.' });
    }
};
