/*
Faça um programa que receba uma palavra e verifica se a palavra está cometendo o
seguinte erro de português
Antes de “p” ou “b” devemos usar M
Caso a palavra esteja errada informar o erro
Se não dizer que a palavra está certa.
Utilize o método includes()
*/

var rs = require("readline-sync");
var word = rs.question("Type a word: ");
var includesNP = word.includes("np");
var includesNB = word.includes("nb");

if(includesNB || includesNP){
    console.log("In portuguese, before 'p' or 'b' we must use `M`!");
}else{
    console.log("Good, tha`s right! ")
}
/*if(word.includes("p")||word.includes("b")){
   for(var c = 0; c < word.length; c++){
       if(word[c]=="p"||word[c]=="b"){
           if(word[c-1]=="n"){
               console.log("The word is wrong! ")
           }
       } 
      
   } 
}else{console.log("Good, that`s right!")}
*/