// DATABASE CONNECTION
const Sequelize = require('sequelize')
const config = require('../config/database')

/**
 * receive the fastify app instance
 * 
 * @param {fastify} app 
 * @returns 
 */
const connect = (app) => {
    return new Sequelize(
        config.database, // db name
        config.user,
        config.password,
        {
            host: config.host,
            port: config.port,
            dialect: config.dialect,
            logging: (msg) => app.log.info(msg),
        }
    )
}

module.exports = connect