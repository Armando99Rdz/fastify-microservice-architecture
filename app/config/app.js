// ----------------------------------------------------------
// General Application's Config Values
// ----------------------------------------------------------

const env = require('config')
const path = require('path')

module.exports = {

    // App Name
    appName: env.get('app.name') || 'App Name',

    // Full App URL (url:port)
    appUrl: `${env.get('app.url')}:${env.get('app.port')}/`,

    appDebug: env.get('app.debug') || false,

    // Secret Key
    secretKey: env.get('app.secretKey'),

    // Project Folder Absolute Path
    projectPath: path.join(__dirname, '/../../'),

    // App Absolute Path
    appPath: path.join(__dirname, '/../'),

    // Static Files Folder Absolute Path
    publicPath: path.join(__dirname, '/../../public'),

    // Tests Folder Absolute Path
    testPath: path.join(__dirname, '/../../tests'),

    publicRoutePrefix: '/public', // empty is equals to '/'

    // Expose Docs Route
    exposeDocs: env.get('app.exposeDocs') || false,

    // Docs route prefix
    docsRoutePrefix: '/docs', 

    // Docs Description
    docsDescription: 'Documentation description',

}