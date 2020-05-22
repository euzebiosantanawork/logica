var rs = require('readline-sync')

var angulo1 = rs.questionFloat('Qual o valor de 1 angulo: ')
var angulo2 = rs.questionFloat('Qual o valor de 2 angulo: ')
var angulo3 = rs.questionFloat('Qual o valor de 3 angulo: ')

 if(angulo1 == 90|| angulo2 == 90|| angulo3==90);
 {console.log("Este e um triangulo retangulo")}
else if(angulo1 > 90 || angulo2 > 90 || angulo3 >90)
{console.log("Este e um triangulo obtuso")}
else if (angulo1 < 90 && angulo2 < 90 && angulo3 <90)
{console.log("Este e um triangulo acutangulo")}