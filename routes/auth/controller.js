const authConfig = require('../../app/config/auth')
const Auth = require('../../app/lib/authUser')
const User = require('../../app/models/user')
const instanceModel = require('../../app/lib/instanceModel')
/**
 * Sign In / Log In
 * 
 * @param {object} fastify
 */
exports.loginController = function ({ jwt }) {
    return async (req, reply) => {
        const { email, password } = req.body
    
        const user = await Auth.attempt({ email, password })
        
        if (user) { // success login
            const token = await jwt.sign(
                user,
                { expiresIn: authConfig.expiresIn }
            )
            reply.send({
                accessToken: token,
                msgKey: 'auth.success'
            })
        } else { // wrong credentials
            reply 
                .code(401)
                .send({
                    msgKey: 'auth.incorrect'
                })
        }
    }
}

/**
 * Returns the logged user
 * 
 * @param {object} fastify
 */
exports.meController = function ({ db }) {
    return async (req, reply) => {
        const { id } = req.user

        const model = instanceModel(User, db);
        const user = await model.findOne({ where: { id } });

        reply.send(user)
    }
}
