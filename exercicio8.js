var rs = require("readline-sync")

var lado1 = rs.question('Digite o valor do primeiro lado do triangulo: ');
var lado2 = rs.question('Digite o valor do segundo lado do triangulo: ');
var lado3 = rs.question('Digite o valor do terceiro lado do triangulo: ');

if(lado1 == lado2 && lado2 == lado3){
    console.log("Este triangulo e um EQUILATERO");
} else if (lado1!= lado2 && lado2 != lado3 && lado3 != lado1) {
 console.log ("Este triangulo e um ISOCELES");
} else {
    console.log ("Este trangulo e um ESCALENO")
}