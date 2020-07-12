/*

Make an algorithm that receives a number and tell if is prime or not
Use the package:

https://www.npmjs.com/package/prime-numberv

*/

var cousin = require('prime-number');
var rs = require ('readline-sync');

var number = rs.questionInt("Insira um numero: ");

var result = cousin(number);

if (result){
    console.log("prime number");

}else{
    console.log("Not is a prime number! ");
}

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