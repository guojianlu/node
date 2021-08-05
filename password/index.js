const crypto = require('crypto');
const hash = (type, password) => crypto.createHash(type).update(password).digest('hex');
const md5 = password => hash('md5', password);
const sha1 = password => hash('sha1', password);
const encrypt = (salt, password) => md5(salt + '~@!$&~' + password);

module.exports = encrypt;