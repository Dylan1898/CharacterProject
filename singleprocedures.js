var fs = require('fs');
var path = require('path');
var jsonPath = path.join(__dirname, 'data.json');


function getOne(id) {
    return new Promise(function(resolve, reject) {
        fs.readFile(jsonPath, 'utf-8', function(err, file) {
            if (err) {
                reject('Error reading data.json');
            }

            var parsed = JSON.parse(file),
                found;
                // console.log(parsed)

            parsed.forEach(function(element) {
                if (element.Id == id) {
                    found = element;
                    // console.log(id)
                    // console.log(element.Id)
                }
            });

            if (!!found) {
                resolve(found);
            } else {
                reject('Not Found');
            }
        });
    });
}

module.exports={
    single: getOne
}
