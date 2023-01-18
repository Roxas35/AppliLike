const express = require('express');
const router = express.Router();


router.delete('/:id' , async (req , res) =>{
    try {

        const { Supprimer } = require('../Models/Options')
        const id = req.params.id;
            await Supprimer(id);
            res.send('Compte Supprimer !').status(204)
    }catch(err){
      res.status(400).send(err.message)
    };
  });

module.exports = router