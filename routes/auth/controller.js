const config = require('../../app/config/app')
const auth = require('../../app/config/auth')
const authUser = require('../../app/lib/authUser')
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
    const { email, password } = req.body

    const user = authUser.attempt({ email, password })
    // const user = await model.findOne({ where: { email, password } })
    
    // const token = await reply.jwtSign(
    //     user,
    //     { expiresIn: auth.expiresIn }
    // )
    reply.send({
        user,
        // msgKey: 'loggedin'
    })
}

/**
 * Returns the logged user
 * 
 * @param {object} req 
 * @param {object} reply 
 */
exports.meController = async (req, reply) => {
    reply.send(req.user)
}
