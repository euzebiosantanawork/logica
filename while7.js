/*
Faca um programa que pergunte ao usuarioo escolher duas opcoes
A e B. 
A encerra o programa, e B e para fazer a soma
*/
var rs= require("readline-sync")

while (true){
     var answer =rs.question("Enter A to exit or B to add:")
 
     if (answer== "A"){
      break;
    }else if (answer == "B"){
     var n1 = rs.questionInt('Type a number 1: ')
     var n2 = rs.questionInt('Type a number 2: ')
    
     console.log("This is the result of your number 1 with number 2: ", n1 + n2);

    }else {
     console.log("You didn't type A or B, try again")
}
}
console.log (" Program closed ")