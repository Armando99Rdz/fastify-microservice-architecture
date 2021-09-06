// ----------------------------------------------------------
// Generate The Secret Key To Sign Auth JWTs.
// This command writes the config/default.json file.
// ----------------------------------------------------------
const app = require('fastify')({ logger: {
    prettyPrint: true   
}})
const env = require('config')
const config = require('../config/app')
const fs = require('fs')
const path = require('path')
const UIDGenerator = require('uid-generator');
const uidgen = new UIDGenerator(256); // Default is a 128-bit UID encoded in base58

const generateAppSecretKey = async () => {
    try {

        if (env.get('app.secretKey')) { // validate if exists
            app.log.info('Secret key has already been generated.')
            process.exit(0) // exit
        }

        // Read & update JSON file
        const jsonPath = path.join(config.projectPath, 'config/default.json')
        let jsonData = JSON.parse(fs.readFileSync(jsonPath).toString())

        const key = await uidgen.generate(); // -> 'B1q2hUEKmeVp9zWepx9cnp'
        jsonData.app.secretKey = key
        fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 4))

        app.log.info('KEY GENERATED (base256): ' + key)
        app.log.info('Secret key has been generated successfully.')
        process.exit(0)

    } catch (error) {
        app.log.warn(error)
        process.exit(1) // exit
    }
}

generateAppSecretKey(); // execute command