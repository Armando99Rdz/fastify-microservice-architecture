'use strict'

const {
  allController, showByUuidController,
} = require('./controller')

module.exports = async function (fastify, opts) {

  // GET ALL
  fastify.get('/', allController)
  // GET BY UUID
  fastify.get('/show/:uuid', showByUuidController)

}
