/*

  Crate a module that avaranges a collection of numbers. 
To do this, create a file called calcula-media.js
  In the module export a media fucntion(arr) that takes as
an argument an array of numbers.
  THe function must interate thorugh these numbers, use the 
module created to calculate the avarage and at the end 
printh the result for the user.


*/

var rs = require('readline-sync');
var calculation = require(`./calcula-media/index`);
var number =  []

  for ( var i = 0; i < 3; i++ ){
    
    number[i] = rs.questionInt("Type a number: ");

  }

console.log(calculation(number))

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