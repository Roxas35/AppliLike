const express = require('express');
const router = express.Router();


router.get('/:id', async (req, res) => {
    try{
        
        const { Profil } = require('../Models/Profil')
        const id = req.params.id;
        const infos = await Profil.Profil(id);
        res.send(infos).status(200);
        
    }catch(err){
      res.status(400).send(err.message)
    }
  });

router.put('/:id', async(req, res) => {
    try {

        const { updateProfil } = require('../Models/Profil')
        const id =  req.params.id;
        const body = req.body;
        await updateProfil(id , body);
        res.send('Profil Modifier').status(200);
      } catch(err){
        res.status(400).send(err.message)
      }  
});

module.exports = router