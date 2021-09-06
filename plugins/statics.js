// ----------------------------------------------------------
// Swagger Docs Plugin
// ----------------------------------------------------------
'use strict'

const { default: fp } = require("fastify-plugin")
const config = require('../app/config/app')

module.exports = fp(function (fastify, opts, next) {
    fastify.register(require('fastify-static'), {
        root: config.publicPath,
        prefix: config.publicRoutePrefix, // optional: default '/'
    })
    next();
})