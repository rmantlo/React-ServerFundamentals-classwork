const jwt = require('jsonwebtoken');
const User = require('../db').import('../models/user');

const validateSession = (req, res, next) => {
    const token = req.headers.authorization;

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (!err && decodedToken) {
            User.findOne({ where: { id: decodedToken.id } })
                .then(user => {
                    if (!user) throw 'err'; //throw is used to create err, so server will crash here

                    req.user = user;
                    return next();
                })
                .catch(err => res.status(501).json({ error: err }))
        } else {
            return res.status(500).json({ error: "UnAuthorized" })
        }
    });
}

module.exports = validateSession;