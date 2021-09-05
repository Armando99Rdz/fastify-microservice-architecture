// ----------------------------------------------------------
// Database Connection Helper
// ----------------------------------------------------------

const Sequelize = require('sequelize')
const config = require('../config/database')

/**
 * Receives the fastify instance
 * 
 * @param {fastify} app 
 * @returns sequelize instance
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