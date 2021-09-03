// GENERAL CONFIG VALUES
const env = require('config')
const path = require('path')

module.exports = {

    // App Name
    appName: env.get('app.name') || '',

    // App URL
    appUrl: env.get('app.name') || '',

    // Project Folder Absolute Path
    projectPath: path.join(__dirname, '/../../'),

    // App Absolute Path
    appPath: path.join(__dirname, '/../'),

    // Static Files Folder Absolute Path
    publicPath: path.join(__dirname, '/../../public'),

    // Tests Folder Absolute Path
    testPath: path.join(__dirname, '/../../tests'),

}