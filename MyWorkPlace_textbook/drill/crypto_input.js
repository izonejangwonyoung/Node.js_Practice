var input = prompt('Message');
           
alert(input);


const crypto=require('crypto');

const algorithm='aes-256-cbc';
const key='izonejangwonyounghondahitomichae';
const iv='1234567891234567'
const cipher=crypto.cipher.createCipher(algorithm,key,iv);
let result=cipher.update('input','utf8','base64');
result+=cipher.final('base64');
console.log('암호화 결과:',result);