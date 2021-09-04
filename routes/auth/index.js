'use strict'

const { meController, loginController } = require('./controller')

module.exports = async function (fastify, opts) {

  // SIGN IN
  fastify.post(
    '/signin',
    loginController
  )
  // SIGN UP

  // GET CURRENT USER LOGGED
  fastify.get(
    '/me',
    { preValidation: [fastify.authenticate] },
    meController
  )
  // SHOW

  // CREATE

  // UPDATE

  // DELETE

}
