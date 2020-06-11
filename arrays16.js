// 16. Faça um algoritmo que verifica se uma string comece com a palavra google
// Caso comece imprima que a palavra é valida se não diga que não conhece o serviço.
// EX: entrada Google drive
// O algoritmo imprime
// Palavra valida
// Utilize o método startsWith()

var rs = require("readline-sync");
var text = rs.question ("Type the name of the service:  ");

if(text.startsWith("Google")){ console.log("Valid Word")}
else {console.log("I don`t know the service")}