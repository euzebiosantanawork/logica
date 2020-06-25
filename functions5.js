/*
Escreva uma função que recebe dois parâmetros numéricos e retorne o menor número.
Solicite dois números para o usuário e forneça como argumento para esta função.
Escreva o resultado da função na tela dizendo qual menor número.
*/

var rs = require("readline-sync");
var smaller;

function getSmaller(m,n){
    if(m > n){
        smaller = n;
    }else if (n > m){
        smaller = m;
    } else {
        smaller = console.log("Equal values");
    }
    return smaller
}

console.log(getSmaller(rs.questionInt("Type a number: ")),(rs.questionInt("Type outher number: ")));
