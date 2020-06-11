/*Faça um algoritmo que receba um texto e remova todos os espaços em brancos no
começo e no final do texto
Utilize o método trim()*/

var rs = require("readline-sync");
var text = rs.question("Type a text: ");

console.log(text.trim(' '))