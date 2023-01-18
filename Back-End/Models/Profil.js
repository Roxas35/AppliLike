const db = require('../Config/Clientdb')

const Profil = async (id) =>{
    return await db('profil').select().where({id})
    .join('user', 'user.id', '=' , 'profil.user_id').select()
}

const updateProfil = async (id , object) =>{
    await db('profil').update(object).where({id})
    .join('user', 'user.id', '=', 'profil.user_id')
}

module.exports = {
    Profil,
    updateProfil
}