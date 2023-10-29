const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const payload = await jwt.verify(token, 'NALEŚNIKI');
        req.user = payload;
    } catch (e) {
        req.user = null;
    } finally {
        next();
    }
};
