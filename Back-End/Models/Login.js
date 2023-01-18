const db = require('../Config/Clientdb')

const Connexion = async (email, password) => {
    return await db('user').where({
        email: email,
        password: password
    }).select()
}

module.exports = {
     Connexion
}