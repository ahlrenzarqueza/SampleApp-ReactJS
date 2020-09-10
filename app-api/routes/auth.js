const router = require('express').Router();
const user = require('../models/user');

const joi = require('@hapi/joi');
const schema = joi.object({
    name: joi.string().min(6),
    email: joi.string().min(6).max(255).email(),
    password: joi.string().min(6).max(255)
});

router.post('/register', async (req, res) => {
    var {error} = schema.validate(req.body);
    if(error) {
        res.status(400).send(error);
    }
    else {
        const newUser = new user({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        try {
            const savedUser = await newUser.save();
            res.send(savedUser);
        }
        catch (err) {
            res.status(400).send(err);
        }
    }
});

// router.post('/login');

module.exports = router; 

