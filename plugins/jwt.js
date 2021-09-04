'use strict'

const fp = require('fastify-plugin')
const config = require('../app/config/app')

// The authentication logic into this plugin
// to protect only some of the roytes.

module.exports = fp(async function(fastify, opts) {
    fastify.register(require("fastify-jwt"), {
        secret: config.secretKey
    })
  
    fastify.decorate("authenticate", async function(request, reply) {
        try {
            await request.jwtVerify()
        } catch (err) {
            reply.send(err)
        }
    })
})