/*
Faça um programa que receba uma palavra e verifica se ela termina com “al” se termina
com “al” então imprime a palavra se não imprime “palavra não identificada”.
Utilize o método endsWith()
*/

var rs =require('readline-sync')
var word = rs.question("Type a word:")

if(word.endsWith("al")){
    console.log(word)
}else{
    console.log("unidentified word")
}