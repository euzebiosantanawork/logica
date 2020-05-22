var rs = require("readline-sync")
var numero = rs.question("Digite um numero: ")

for (var i = numero; i >= 0; i--) {
    if (numero % i == 0) {
        console.log(i)
    }
}