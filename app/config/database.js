// ----------------------------------------------------------
// Database Config Values
// ----------------------------------------------------------

const env = require('config')

module.exports = {

    // the name of fastify plugin instance
    instance: 'sequelize',
    
    // auto authentication and test connection on first run
    autoConnect: true,
    
    // mysql2 package is necessary
    dialect: 'mysql',

    operatorsAliases: false,

    // allow console messages of queries
    debug: false,

    // CONNECTION INFO
    host: env.get('db.host'),
    port: env.get('db.port'),
    database: env.get('db.name'),
    user: env.get('db.user'),
    password: env.get('db.password')
}