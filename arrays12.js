/*
Faça um programa que receba uma palavra e diga se existe vogais ou não.
Utilize o método indexOf()
*/
var rs = require("readline-sync")

var typeAWord = rs.question("Type a word: ")
var  word = typeAWord 

var wordA = word.indexOf("a")
var wordE = word.indexOf("e")
var wordI = word.indexOf("i")
var wordO = word.indexOf("o")
var wordU = word.indexOf("u")

if(
          wordA == -1 &&
          wordE == -1 &&
          wordI == -1 &&
          wordO == -1 &&
          wordU == -1 
){
    console.log("This word does not cotain vowels")

} else {

    console.log("This word cotains vowels ")
}
/*
O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
Estou usando o -1 para dizer se na minha palavra a letra A não existir e a letra E não existir e a letre I  não existir e a letra O  não existir e a letra U  não existir
imprimir não existe vogais
*/