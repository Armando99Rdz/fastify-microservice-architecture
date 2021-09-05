// ----------------------------------------------------------
// Authentication Helpers 
// ----------------------------------------------------------
const Sequelize = require('sequelize')
const dbConnection = require('./dbConnection')
const db = dbConnection(require('fastify')({ logger: true }))
const User = require('../models/user')
const model = User(db, Sequelize.DataTypes);

/**
 * Authentication attempts handler, if auth is
 * successful, returns the user.
 * 
 * @param {email, password} credentials 
 * @returns {user}
 */
const attempt = async (credentials) => {
    const { email, password } = credentials
    
    const user = await model.findOne({ where: { email, password } })
    
    // TODO: WIP

    if (user) {
        return user
    } 

    return null
}

module.exports = {
    attempt,
}
