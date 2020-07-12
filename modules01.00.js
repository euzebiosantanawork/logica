
// Faça uma programa que receba 4 notas e calcule a média e apresente ao usuário a
// média no final.
// Utilize o pacote : https://www.npmjs.com/package/median

var median = require('median')
var rs = require('readline-sync')

var numeros = new Array;

for (var i = 0; i < 4; i++){
    var numero = rs.questionInt('Insira um numero: ')
    numeros.push(numero)
}

var media = median(numeros)

console.log(`A média dos numeros inseridos é ${media}`)

console.log( "Thank you for using our program (:\
    \
            This program is being developed by\
          Euzebio Santana,\
          \
          Contacts:\
          WHATSSAP +5511951732589\
          LINKEDIN: https: //www.linkedin.com/in/robertfredericksmith/\
          GITHUB: https: //github.com/euzebiosantanawork\
          SITE: https: //sites.google.com/view/euzebiosantana/home\
          \
            -Check back often!" );