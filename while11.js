var readlineSync = require("readline-sync")
var numero = readlineSync.question ("Digite um numero: ")

var cont =1

while(cont <= 10) {
    var resultado = numero*cont
    cont ++
    console.log (resultado)
} 