/*

Make an algorithm that receives a number and tell if it is even 
or odd Use the package,

https://www.npmjs.com/package/is-odd

*/

var isOdd = require('is-odd');
var rs = require('readline-sync');

var number = rs.questionInt("Type a number: ");

var result = isOdd(number);
if(result == true){
    console.log("odd number");

}else{

    console.log("even number");
    
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