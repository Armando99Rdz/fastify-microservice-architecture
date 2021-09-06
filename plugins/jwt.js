// ----------------------------------------------------------
// Authentication Plugin
// ----------------------------------------------------------
'use strict'

const fp = require('fastify-plugin')
const config = require('../app/config/app')

// This plugin contains the authentication logic using
// JWT to protect the routes & using the app secret key. 

module.exports = fp(async function(fastify, opts) {
    fastify.register(require("fastify-jwt"), {
        secret: config.secretKey
    })
  
    fastify.decorate("auth", async function(request, reply) {
        try {
            // Verify access token from the authorization headers
            await request.jwtVerify()
        } catch (err) {
            reply.send(err)
        }
    })
})