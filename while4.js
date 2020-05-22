/* 
Faca um programa que recebe um numero, e imprime todos os numeros pares
de 0 ate o numero inserido

EXEMPLO:
usuario inserio 8
0
2
4
6
8
*/
var rs= require("readline-sync")
var num = rs.question ("Type a number: ")
var result = 0


while (true){

if(result <= num ){
    console.log(result)
    result = result + 2 

}else{
    break;
}

  
}
