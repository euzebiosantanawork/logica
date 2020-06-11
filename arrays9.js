/*
Faça um programa que receba um nome e imprima a terceira letra do nome.
Utilize o método charAt() para esta atividade.
*/

var rs = require("readline-sync")
var name =rs.question("Type a name: ");
var result = name.charAt(2)
console.log(result)

