// faca um programa em que o usuario decide a conversao:
// Fahrenheint para graus Celsius e virse e versa

var rs = require("readline-sync")

var valor = rs.questionFloat ("Type the temperature: ")
var graus = rs.question ("CHOICE 1 to convert Celsius to Fahrenehit 2 to convert Fahrenehit to Celsius: ")
 while (graus !=1 && graus !=2 ){

    var graus = rs.question ("CHOICE 1 to convert Celsius to Fahrenehit 2 to convert Fahrenehit to Celsius: ")
   

 }
if(graus ==1) {
    var conv = (valor * 9/ 5) + 32
    console.log ("Converted value is "+ conv +"Fahrenheit")

}else{
var conv = (valor-32) * (5/9)
console.log ("Converted value is "+conv+"Celsius")
}

