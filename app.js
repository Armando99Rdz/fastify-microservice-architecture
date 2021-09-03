'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')
const config = require('./app/config/app')

module.exports = async function (fastify, opts) {
  
  // Place here your custom code!

  // API DOCS
  fastify.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: { title: 'fastify-api' }
    }
  })
  
  // STATIC FILES
  fastify.register(require('fastify-static'), {
    root: config.publicPath,
    prefix: '/public/', // optional: default '/'
  })

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
