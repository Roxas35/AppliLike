const db = require('../Config/Clientdb')

const Supprimer = async (id) =>{
    await db('user').delete().where({id});
}

module.exports = {
    Supprimer
}