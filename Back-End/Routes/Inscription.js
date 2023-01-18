const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const jsonwebtoken = require('jsonwebtoken')

router.post('/', async(req, res) => {
    try {
        const { Inscription } = require('../Models/Register')

        await Inscription({
            "firstname" : req.body.firstname,
            "lastname" : req.body.lastname,
            "password": crypto.createHash('sha256').update(req.body.password).digest('hex'),
            "email": req.body.email
        })
        res.send('Compte Crée !') 
            } catch(err) {
                console.log(err.message); 
        }
    })

module.exports = router