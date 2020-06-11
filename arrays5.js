/*
5. (FULL JOIN) Faça um algoritmo que receba o nome de dois jogadores e após isso peça
5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
jogador B.
Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
que apenas o jogador A e B colocou sem repetir nenhum número
EX: Jogador A : 1, 2, 3, 4, 5
Jogador B : 1,2,3,8,7
Algoritmo imprime :
1,2,3,4,5,7,8
*/

var rs = require('readline-sync')

var name1 = rs.question("Hey player 1, what is your name?")
console.log(`Nice to meet you j${name1}`)
var name2 = rs.question("Hey player 2, what is your name?")
console.log(`Nice to meet you ${name2}`)
var arr1 = []
var arr2 = []
var different = []

cont = 5
for ( i = 0; i < 5; i++){
    var number1 = rs.questionInt(`Please ${name1}, change more
    ${cont} numbers from 1 to 10: `)
    arr1.push(number1)
    cont = cont --
}
console.log(`Thanks ${name1}`)

cont = 5
for (i = 0; i < 5; i++){
    var number2 = rs.questionInt(`Please ${name2}, change more
    ${cont} numbers from 1 to 10: `)
    arr2.push(number2)
}
console.log(`Thanks ${name2}`)

for(i = 0; i < 5; i++){
    var note = arr1[i]
    if(!arr2.includes(note)){
        different.push(note)
    }

}
console.log(`The numbers that are different  are: ${different.join(',')}`)
