const express = require('express');
const router = express.Router();
const Infos = require('../Models/Home')

router.get('/:id', async (req, res) => {
    try{
        
        const id = req.params.id;
        const infos = await Infos.Infos(id);
        res.send(infos).status(200);
        
    }catch(err){
      res.status(400).send(err.message)
    }
  });

module.exports = router