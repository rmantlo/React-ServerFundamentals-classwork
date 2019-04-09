const router = require('express').Router();
const User = require('../db').import('../models/user');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//create new account
router.post('/signup', (req, res) => {
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    })
        .then(
            createSuccess = (user) => {
                let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });
                res.status(200).json({
                    user: user,
                    sessionToken: token,
                    message: 'User created'
                })
            },
            createError = (err) => {
                res.status(500).json({ error: err })
            }
        )
})

//logging in
router.post('/signin', (req, res) => {
    User.findOne({ where: { email: req.body.email } })
        .then(user => {
            if (user) {
                bcrypt.compare(req.body.password, user.password, (err, matches) => {
                    if (matches) {
                        let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })
                        res.status(200).json({
                            user: user,
                            sessionToken: token,
                            message: 'User Signed In'
                        });
                    } else {
                        res.status(502).json({ error: 'username or password does not match' })
                    }
                })
            } else {
                res.status(502).json({ error: 'User does not exist' })
            }
        },
            err => res.status(501).json({ error: 'User does not exist' })
            )
})

module.exports = router;