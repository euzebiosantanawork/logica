var readlineSync = require("readline-sync")
var numero = readlineSync.questionInt("Digite um numero: ")
var cont = 1

while (cont < 15) {
    numero = numero + readlineSync.questionInt("Digite um numero: ")
cont++
}
var media = numero/15
console.log (media)