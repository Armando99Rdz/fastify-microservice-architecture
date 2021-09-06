// ----------------------------------------------------------
// USE THIS COMMAND AS EXAMPLE
// ----------------------------------------------------------
const env = require('config')
const app = require('fastify')({ logger: {
    prettyPrint: true
}})

// command logic
const dropTables = async () => {
    try {

        if (env.get('app.env') === 'production')
            throw 'Cannot execute this command on production.'

        app.log.info('Example command execute successfully.')

        process.exit(0)

    } catch (error) {
        app.log.warn(error)

        process.exit(1)
    }
}

dropTables(); // execute command