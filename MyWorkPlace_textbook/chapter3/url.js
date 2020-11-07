const url =require('url');

const{URL}=url;

const myURL=new URL('https://github.com/izonejangwonyoung?tab=repositories');
console.log('new URL():',myURL);
console.log('url.format():', url.format(myURL));
console.log("=============================================")
const parsedUrl=url.parse('https://github.com/izonejangwonyoung?tab=repositories');
console.log('url.parse():',parsedUrl);
console.log('url.format():',url.format(parsedUrl));