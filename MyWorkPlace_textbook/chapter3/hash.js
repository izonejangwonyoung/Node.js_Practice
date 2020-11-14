
const crypto = require('crypto');

console.log('latin1:', crypto.createHash('sha512').update('히토미').digest('latin1'));
console.log('hex:', crypto.createHash('sha512').update('히토미').digest('hex'));
console.log('base64:', crypto.createHash('sha512').update('혼다 히토미').digest('base64'));