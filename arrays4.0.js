var rs = require('readline-sync')

var nom1 = rs.question('Ola jogador 1, qual seu nome? ')
console.log(`Prazer em te-lo aqui, ${nom1}.`)
var nom2 = rs.question('Ola jogador 2, qual seu nome? ')
console.log(`Prazer em te-lo aqui, ${nom2}.`)
var arr1 = []
var arr2 = []
var dif = []

cont = 5
for (i = 0; i < 5; i++) {
    var num1 = rs.questionInt(`Por favor ${nom1}, escolha mais ${cont--} numeros de 1 a 10: `)
    arr1.push(num1)
}
cont = 5
for (i = 0; i < 5; i++) {
    var num2 = rs.questionInt(`Por favor ${nom2}, escolha mais ${cont--} numeros de 1 a 10: `)
    arr2.push(num2)
}
for (i = 0; i < 5; i++) {
    var nota = arr2[i]
    if (!arr1.includes(nota)) {
        dif.push(nota)
    }
}
console.log(`Os numeros que os diferentes sao: ${dif.join(',')}`)