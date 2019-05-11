var fs = require('fs');
var obj =
{
    "first_name": "Shaliko",
    "last_name": "Yeghiazaryan",
    "age": 16,
    "tumo_student": true,
}
var myJSON = JSON.stringify(obj);
fs.writeFileSync("obj.json", myJSON);
