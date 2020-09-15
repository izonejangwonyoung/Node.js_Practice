var testFolder = 'D:\NodeJsFolder\Node.js_Practice\생활코딩\data';
var fs = require('fs');
 
fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
})