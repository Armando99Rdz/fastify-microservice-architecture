// ----------------------------------------------------------
// Swagger Docs Plugin
// ----------------------------------------------------------
'use strict'

const { default: fp } = require("fastify-plugin")
const config = require('../app/config/app')

module.exports = fp(function (fastify, opts, next) {
    fastify.register(require('fastify-swagger'), {
        routePrefix: '/docs',
        swagger: {
          info: {
            title: config.appName,
            description: config.docsDescription,
            version: '0.1.0'
          },
          externalDocs: {
            url: 'https://swagger.io',
            description: 'Find more info here'
          },
          host: 'localhost',
          schemes: ['http'],
          consumes: ['application/json'],
          produces: ['application/json'],
        },
        uiConfig: {
          docExpansion: 'full',
          deepLinking: false
        },
        staticCSP: true,
        transformStaticCSP: (header) => header,
        exposeRoute: config.exposeDocs
    })
    
    next();
})