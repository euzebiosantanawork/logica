/*
Make a function that receives a number and return
whethever it is perfect or not. After that
ask the user to enter a number and print whether 
it is perfect or not sing the function and printing
the result  at the end.
NOTE: A perfect number is one that the sum
of its divisors (self excluding) is just like himsef
Example 6 has following dividers 1+2+3=6
*/

var rs = require("readline-sync");

function perfect(n){
    var o = [];
    var q  = 0;

    for (var i = 0; i < n ; i++ ){
        if(n%i == 0){
            o.push(i)
        }
    }

    for (var p = 0 ; p < o.length; p++){
         q = o [p] + q
    } 

    if (q==n){
        return "Perfect";
    } else{
        return "Imperfect";
    }


}

console.log(perfect(rs.question("Type a number: ")))