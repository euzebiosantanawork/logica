/*(INNER JOIN) Faça um algoritmo que receba o nome de dois jogadores e após isso
peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
jogador B.
Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
iguais que o jogador A e B colocaram.
EX: Jogador A : 1, 2, 3, 4, 5
Jogador B : 1,2,3,8,7
Algoritmo imprime :
1,2,3 */

var rs = require ('readline-sync')

var name1 = rs.question ("Hey player1, what`s your name?")
console.log ("Nice to meet you "+name1"!")
var name2 = rs.question ("Hey playe2r, what`s your name?")
console.log ("Nice to meet you "+name2"!")
var numbers1 =[]
var numbers2 = []
var equal = []


count = 5
for(i=0; i < 5; i++){
    var num1 = rs.questionInt (`Please ${name1},\
     choice more ${count} numbers from 1 to 10: `)
   numbers1.push(num1)
   count--
}

count = 5 
for(i=0; i<5 ; i++){
    var num2 = rs.questionInt(`Please ${name2},
    choice more ${count} numbers from 1 to 10: `)
    numbers2.push(num2)
    count--
}

for(i = 0; i <5; i ++){
    var nota = numbers1[i]
    if (numbers2.includes(nota)){
        equal.push(nota)
    }
}

console.log (`The numbers that the two\
 chose are: ${equal.join(',')}`)
