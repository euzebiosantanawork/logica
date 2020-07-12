/*

Make an algorithm that receives a person's birth gate and calculates
their age. 
Use the package:

https://www.npmjs.com/package/age-calculator

*/

var rs = require("readline-sync");

var year = rs.questionInt("Type your year of birth: ");
var month = rs.questionInt("Yype your month of birth: ");
var day = rs.questionInt("Type your day of birth: ");

month = month -1

let {AgeFromDate} = require('age-calculator');
let ageFromDate = newAgeFromDate(new Date (year, month, day)).age;
console.log(`Your age is: ${ageFromDate}`);

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