/*
 Faca um algoritimo que recebe uma palavra e imprime 
 cada caractere da palavra em uma linha

 EXEMPLO: usuario informou maca
 o algoritimo imprime
 M
 A
 C
 A
*/
 var rs = require('readline-sync');

 var input =rs.question("Type a word: ")

 var i = input.length
 var index =0
 
 while(index <i){
     console.log(input.charAt(index))
     index ++
 }