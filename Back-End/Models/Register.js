const db = require('../Config/Clientdb')

const Inscription = async infos => {
    return await db('user').insert(infos)
}

module.exports = {
    Inscription
}