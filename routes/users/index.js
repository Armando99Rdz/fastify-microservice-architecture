'use strict'

const { allController } = require('./controller')

module.exports = async function (fastify, opts) {

  // GET CURRENT USER LOGGED
  fastify.get(
    '/me',
    allController
  )
  // SHOW

  // CREATE

  // UPDATE

  // DELETE

}
