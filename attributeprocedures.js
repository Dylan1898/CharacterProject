var fs = require('fs');
var path = require('path');
var jsonPath = path.join(__dirname, 'data.json');

function getAtt(Attribute) {
    return new Promise(function(resolve, reject) {
        fs.readFile(jsonPath, 'utf-8', function(err, file) {
            if (err) {
                reject('Error reading data.json');
            }

            var parsed = JSON.parse(file),
                found;
                // console.log(parsed)
                newArr= []

            parsed.forEach(function(element) {
                if (element.Attribute === Attribute ) {
                    found = element;
                    newArr.push(found)
                }
//                 else if(element.SecondRole===role){
// found = element;
//                     newArr.push(found)
//                 }
//                 else if(element.ThirdRole===role){
//                     found = element;
//                     newArr.push(found)
//                 }
                
            });
            
// console.log(newArr)
            if (!!found) {
                resolve(newArr);
            } else {
                reject('Not Found');
            }
        });
    });
}

module.exports={
    att: getAtt
}
