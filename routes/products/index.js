'use strict'

const {
  allController, showByUuidController, updateController,
  storeController, deleteController,
} = require('./controller')

module.exports = async function (fastify, opts) {

  // GET ALL
  fastify.get(
    '/',
    { preValidation: [fastify.authenticate] },
    allController
  )
  // GET BY UUID
  fastify.get('/:uuid', showByUuidController)
  // CREATE
  fastify.post('/', storeController)
  // UPDATE
  fastify.put('/:uuid', updateController)
  // DELETE
  fastify.delete('/:uuid', deleteController)
}
