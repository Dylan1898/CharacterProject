var fs = require('fs');
var path = require('path');
var jsonPath = path.join(__dirname, 'data.json');

function getChars() {
    return new Promise(function(resolve, reject) {
        fs.readFile(jsonPath, 'utf-8', function(err, file) {
            if (err) {
                reject('Error reading data.json');
            }

            resolve(JSON.parse(file));
        });
    });
}
module.exports={
    all: getChars
}
