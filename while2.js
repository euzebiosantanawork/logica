/* Crie um algaritimo que realize a multiplicacao de dois numeros maiores que 
zero sem usar o operador de multiplicacao */
var rs = require('readline-sync');

var n1 = rs.questionInt("Enter the number to be multiplied: ")
var n2 = rs.questionInt("How much do you want to multiply: ")

var i = 0
var result = 0

while (i < n2) {
    result = result + n1 
    i++
}
console.log(result)



