/*
Faça um algoritmo que receba uma palavra, após isso ele remove todas as vogais
dessa palavra e imprime a palavra novamente porém sem as vogais.
EX: Entrada banana
O algoritmo imprime :
Bnn
Utilize o método split() para quebrar a string e depois montar ela sem vogais.
*/

var rs = require("readline-sync")
var word = rs.question("Type a word: ")
var end = []

for (var cont=0; cont < word.length; cont++){

    if(word[cont] == 'a'|| 
       word[cont] == 'e'||
       word[cont] == 'i'||
       word[cont] == 'o'||
       word[cont] == 'u'
    ){}else{end.push(word[cont]) }

}
result =end.join('')
console.log(result)
