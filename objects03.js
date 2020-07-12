/*

Make a program that reads the file car, json using the library and "fs"
to read the file and after that use the JSON.parse method to deserialize
the objetc in string. After that print the values read from the
json file.

NOTE: change the save file and run the program again and see the data
being changed with each run

*/

var fs = require('fs');

var jsonDeserialized = fs.readFileSync("data/car.json");
var car = JSON.parse(jsonDeserialized);
console.log (car);

console.log(car.brand);
console.log(car.model);
console.log(car.color);

console.log( "Thank you for using our program (:\
    \
            This program is being developed by\
          Euzebio Santana,\
          \
          Contacts:\
          WHATSSAP +5511951732589\
          LINKEDIN: https: //www.linkedin.com/in/robertfredericksmith/\
          GITHUB: https: //github.com/euzebiosantanawork\
          SITE: https: //sites.google.com/view/euzebiosantana/home\
          \
            -Check back often!" );