const config = require('../../app/config/app')
const auth = require('../../app/config/auth')
const Sequelize = require('sequelize')
const dbConnection = require('../../app/lib/dbConnection')
const db = dbConnection(require('fastify')({ logger: true }))
const User = require('../../app/models/user')

const model = User(db, Sequelize.DataTypes); // Get model instance

/**
 * Sign In / Log In
 * 
 * @param {object} req 
 * @param {object} reply 
 */
exports.loginController = async (req, reply) => {
    const token = await reply.jwtSign(
        { hello: "world" },
        { expiresIn: auth.expiresIn }
    )
    reply.send({
        token,
        msgKey: 'loggedin'
    })
}

exports.meController = async (req, reply) => {
    return req.user
}
