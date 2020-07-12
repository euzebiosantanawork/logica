/*
MAke an algorithm that receives a person's birth date and calculates their age

Use the package:
https://www.npmjs.com/package/age-calculator
*/

var{AgeFromDate} = require('age-calculator');
var rs = require('readline-sync');

var year = rs.questionInt("Type your year of Birth: ");
var month = rs.questionInt("Type your month of Birth: ");
var day = rs.questionInt("Type your day of Birth: ");

var AgeFromDate = new AgeFromDate(new Date(year, month, day)).age;
console.log(agrFromDate);

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

            