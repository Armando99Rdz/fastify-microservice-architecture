// DROP ALL TABLES FROM DATABASE
const app = require('fastify')({ logger: true })
const env = require('config')
const dbConnection = require('../lib/dbConnection')

// command logic
const dropTables = async () => {
    
    try {
        if (env.get('app.env') === 'production')
            throw 'Cannot drop tables on production environment.'

        // DATABASE CONNECTION
        const db = dbConnection(app)

        await db.sync()
        app.log.info('DB connection established.')
        
        await db.drop();
        app.log.info('All tables has been deleted.')

        process.exit(0)

    } catch (error) {
        app.log.warn(error)

        process.exit(1)
    }
}

dropTables(); // execute command