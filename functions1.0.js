var rs= require("readline-sync")
function pedeRaio(rs){
    var raio = rs.questionFloat("Raido da esfera: ")
    return raio
} 

function calculaVolume(raio){
    var volume=4/3*Math.PI*(raio**3)
    return volume
}

var raio = pedeRaio(rs)
var volume = calculaVolume(raio)
console.log("Volume da esfera:"+ volume)