/*
Make a function that receives a number and retur is absulte
value. At the end sk the user for a number and display the absolute 
value.
*/

 var rs = require("readline-sync");

 function absolute(rs){
     var number = rs.questionInt("Type a number: ");
     if (number >= 0){
        
     }else{
         number = number*-1;
     }
     return number;
 }
 console.log(absolute(rs));
