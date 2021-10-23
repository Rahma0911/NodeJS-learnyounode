var fs = require('fs');
var filename = process.argv[2];
buf = fs.readFile(filename, function(err, data) {
  console.log(data.toString().split('\n').length - 1);
});