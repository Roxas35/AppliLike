const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const jwt = require('jsonwebtoken')


router.post('/:id', async (req, res) => {

    try {
        const { Connexion } = require('../Models/Login')

        const result = await Connexion(req.body.email, crypto.createHash('sha256').update(req.body.password).digest('hex'));
        if(result.length === 0) {
            res.status(404).send('Pas de compte !')
        } else {
            const users = { 
                id: result[0].id,
                email: result[0].email,
                password: result[0].password
            };

            const token = jwt.sign(users, "secretkey");
            res.status(200).send({users, token});
        }

    } catch (err) {
        res.send(err.message)
    }
})

module.exports = router;
