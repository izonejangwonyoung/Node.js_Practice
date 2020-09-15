var testFolder = 'D:\NodeJsFolder\Node.js_Practice\LIFECODE\data';
var fs = require('fs');
 
fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
})