/*
Faça um programa que receba uma string, o programa vai estar esperando uma data no
formato dd/MM/yyyy onde :
a. dd -> dia
b. mm -> mês
c. yyyy -> ano
Utilize o método match() para fazer essa validação, você deverá utilizar um expressão
regular para resolver este problema.
Caso a data esteja valida o algoritmo deve imprimir :
Entrada -> 22/05/2020
O algoritmo imprime :
Dia : 22
Mes : 05
Ano : 2020
*/

var rs = require("readline-sync")
var date = rs.question ("Type a date with dd/MM/yyyy: ")
var day = [1-10]

console.log(data.match(day));