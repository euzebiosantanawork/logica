/* 
Faca um algoritimo que receba ema entrada 
do usuario e caso encontre a letra transforme
ela em maiuscula

EX: O algoritimo imprime
AbelhA

*/

var rs = require('readline-sync');
var word = rs.question("Type a word: ")

var newword = ''
for (var i = 0; i < word.length; i++){
    if(word.charAt(i) == "a"){
        newword = newword + "A"
    }else{
        newword =newword*word.charAt(i)
    }
}
console.log(newword);