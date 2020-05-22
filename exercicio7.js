var rs= require('readline-sync')
var lado = rs.questionInt ("Digite a quantidade de lados do poligonos: ") 
if (lado < 3 || lado > 5){
    console.log ("ERRO, aperte F5 e renicie")
}else{
    var medida = rs.questionInt ("Digite a medida os lados: ")
}

if(lado == 3 ) {
    var resultado = medida * lado
    console.log("isso e um triangulo: " + resultado);
}if(lado == 4) {
   var resultado = medida * lado
   console.log("Isso e um quadrado: " + resultado);
}if(lado == 5) {
    var resultado = medida * lado
    console.log("Isso e um retangulo: " + resultado);

}
console.log("Exercicio finalizado!")