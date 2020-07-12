/*

Make a program that receives 4 grades and calculates the avarage and 
presents the user with avarage at the end.
Use the package:
https://www.npmjs.com/package/median

*/

var median = require ("median");
var rs = require("readline-sync");

var numbers = new Array;

for (var i = 0; i < 4; i++){
    var number = rs.questionInt("Enter a number: ")
    numbers.push(number)

};

var mean = median(numbers);

console.log(`The avarage of the numbers entered is: ${mean}`);

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