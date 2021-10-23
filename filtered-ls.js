var fs = require('fs');
var dirname = process.argv[2];
var ext = process.argv[3];
var pathfile = RegExp('\\.' + ext + '$');

file = fs.readdir(dirname, function(err, files) {
  for (i = 0; i < files.length; i++) {
    if (pathfile.test(files[i])) {
      console.log(files[i]);
    }
  }
});