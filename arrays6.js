/*
6. Peça ao usuário para digitar dez valores numéricos e ordene por ordem crescente
esses valores, guardando-os num vetor e depois exibindo para o usuário.Para esta
atividade tente usar o algoritmo Bubble Sort (Método da bolha), pesquise sobre ele na
internet.
Vídeo bem detalhado do assunto: https://www.youtube.com/watch?v=ZYO43bi0IXY
Video ilustrativo : https://www.youtube.com/watch?v=lyZQPjUT5B4
*/

var rs = require("readline-sync")

function toCompareBigger (a,b){
    return a - b
}

var array = []

for (i = 0; i < 10; i++) {
    var number =rs.questionInt ('Type \
    10 numbers and organized in adcending order: ')
     array.push( number)
     array.sort(toCompareBigger)
}

console.log(array)