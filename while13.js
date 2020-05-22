/* 
 Fazer um algaritimo que receba 5 numeros e mostra o produto 
 dos impares a soma dos pares

 Exemplo: valores fornecidos
 1,2,3,4,5
 imapres >>> 1*3*5 =15
 pares >>> 2 + 4 = 6

*/

var rs = require( "readline-sync")

var i = 0;
var product = 1;
var sum = 0;


while(i< 5){
 var input = rs.questionInt('Type a number: ');
 
 if(input % 2 == 0){
     sum =sum +input;

 }else if(input %2 == 1){
 product = product *input;
 }
 i++
}

console.log("the sum of the pairs is equal:", sum,"and the product of the odd and equal:", product )
