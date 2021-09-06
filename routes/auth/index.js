'use strict'

const { meController, loginController } = require('./controller')

module.exports = async function (fastify, opts) {

  // SIGN IN
  fastify.post(
    '/signin',
    loginController(fastify)
  )
  // SIGN UP

  // GET CURRENT USER LOGGED
  fastify.get(
    '/me',
    { preValidation: [fastify.auth] }, // protected route
    meController(fastify)
  )
  // SHOW

  // CREATE

  // UPDATE

  // DELETE

}
