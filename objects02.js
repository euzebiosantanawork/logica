/*

Add to the previous program after priting the data that it
 saves the car object in JSON format. Use JSON.strigfy to transform
 the object into a string and after that use the methods of
 the "fs" library to save the file. Save the json as 'car.json"


*/

var rs = require("readline-sync");
var fs = require ("fs");

var car = new Object();

car.color = rs.question("Type a color: ");
car.model = rs.question ("Type a model: ");
car.brand = rs.question ("Type a brand: ");

var carSerialized = JSON.stringify(car)
var filePath = "car.json";
fs.writeFileSync(filePath, carSerialized);

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
            