// ----------------------------------------------------------
// Authentication Helpers 
// ----------------------------------------------------------
const Sequelize = require('sequelize')
const dbConnection = require('./dbConnection')
const db = dbConnection(require('fastify')({ logger: true }))
const User = require('../models/user')
const model = User(db, Sequelize.DataTypes);
const { compareHash } = require('../utils/hash');

/**
 * Authentication attempts handler, if auth is
 * successful, returns the user.
 * 
 * @param {email, password} credentials 
 * @returns {user}
 */
const attempt = async ({ email, password }) => {
    
    const user = await model.findOne({ // find by email
        raw: true,
        where: { email },
        attributes: ['id', 'email', 'password']
    })
    
    if (user) { // email exists
        if (compareHash(password, user.password)) { // password correct, login success!
            return user
        }
        return null // wrong password
    }

    return null // email doesnt exists
}

module.exports = {
    attempt,
}
