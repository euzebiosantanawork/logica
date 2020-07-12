/*

Make an algorith, tat reveives weight and height from the user and
calculete the BMI.
 To calculate the BMI use:
 https://www.npmjs.com/package/fasam-imc-calc

 

*/

var FasamImc = require("fasam-imc-calc");
var rs = require('readline-sync');


var weight = rs.questionFloat ("Type a weight: ");
var height = rs.questionFloat ("Type a height: ");
var bmi = new FasamImc(weight, height);

console.log(bmi.calc())

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