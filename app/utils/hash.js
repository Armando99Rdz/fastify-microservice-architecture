// ----------------------------------------------------------
// Hash Generator:
//    Encrypt passwords, compare hash & raw string, etc.
// ----------------------------------------------------------

const bcrypt = require('bcrypt')

const SALT_ROUNDS = 10; 

const encrypt = (raw) => bcrypt.hashSync(raw, SALT_ROUNDS);

const compareHash = (raw, hash) => bcrypt.compareSync(raw, hash)

module.exports = {
    encrypt,
    compareHash,
}