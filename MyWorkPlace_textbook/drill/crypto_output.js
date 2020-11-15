const result=require('crypto_input');

const crypto=require('crypto');


const algorithm='aes-256-cbc';
const key='izonejangwonyounghondakitomichae';
const iv='1234567890123456';

const decipher =crypto.createDecipheriv(algorithm,key,iv);
let result2= decipher.update(result,'base64','utf8');
result2+=decipher.final('utf8');
console.log('복호화 결과:',result2);