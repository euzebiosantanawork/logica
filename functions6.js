/*6. Escreva uma função que receba dois números o primeiro será a base e o segundo a
potência e no final a função retorna a base elevada pela potência.
Faça um programa que peça ao usuário a base e a potência e forneça para a função,
no final imprima o resultado.
OBS: O algoritmo só precisa saber lidar com números inteiros.*/

var rs = require ("readline-sync");
function power(b,p){
    var a = Math.pow(b,p);
    return a
};

console.log(power((rs.questionInt("Type a base: ")), (rs.questionInt("Type a power: "))));