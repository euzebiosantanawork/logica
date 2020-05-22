/*
 Fazer um programa que calcule e imprima o fatorial de
 um numero fornecido pelo usuario, usando o comando For,
 perguntar ao usuario se ele deseja calcular o fatorial 
 de outro numero e repetir a execucao do programa tantas vezes
 quantas o usuario indicar.


*/

var rs = require("readline-sync")

for(var option = "s"; option == "s";){
    var result = 1
    var num = rs.questionInt("Type a number: ");
    for(; num > 0; num--){
        result = result * num
    }
    console.log(result)
    option = rs.question("Do you want to continue? (y / n) : ")   
}