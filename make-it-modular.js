var mymodule = require('./mymodule');
var dirname = process.argv[2]  
var ext = process.argv[3];

mymodule(dirname, ext, function(err, files) {
    if (err) {
        return console.error(err);
    }
    
    files.forEach(function(file) {
        console.log(file);
    });
});