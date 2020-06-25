/*Faça uma função que recebe por parâmetro o raio de uma esfera e calcula o seu
volume (v = 4/3.pi.R
3
).

Então solicite ao usuário o raio e a esfera e utilize a função para exibir o resultado.*/

var rs = require('readline-sync')

function askRadius(rs){
    var radius = rs.question("Type a radius: ")
    return radius
}

function calculatesVolume(radius){
    var volume =  4/3*Math.PI*(radius**3)
    return volume
};

var radius = askRadius(rs)
var volume = calculatesVolume(radius)
console.log("sphere volume: "+volume)