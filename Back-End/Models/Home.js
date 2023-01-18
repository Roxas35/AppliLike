const db = require('../Config/Clientdb')

const Infos = async (id) =>{
    return await db('user').select().where({id});
}

module.exports = {
    Infos
}