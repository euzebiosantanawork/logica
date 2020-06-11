/*
Faça um programa que receba uma frase e troque a palavra ANTILOPE por um de seus
nomes cientificos : Kobus ellipsiprymnus

Utilize o método replace()

*/

var rs = require("readline-sync")
var phrase = rs.question("Type a phrase: ")

var modifiedWord = phrase.replace(/ANTILOPE/g,"ellipsiprymnus")
console.log(modifiedWord)