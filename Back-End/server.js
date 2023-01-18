require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

const Connexion = require('./Routes/Connexion');
const Inscription = require('./Routes/Inscription');
const Infos = require('./Routes/Home');
const Supprimer = require('./Routes/Options');


app.use('/Login', Connexion)
app.use('/Register', Inscription)
app.use('/', Infos)
app.use('/Options', Supprimer)


app.listen(port , () => {console.log(`Server app listening on port ` + port)})