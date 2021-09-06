// ----------------------------------------------------------
// Database Boot Plugin
// ----------------------------------------------------------
'use strict'

const { default: fp } = require("fastify-plugin");
const connect = require("../app/lib/dbConnection");

module.exports = fp(function (fastify, opts, next) {

    const db = connect(fastify);
    fastify.decorate('db', db);
    
    next();
})