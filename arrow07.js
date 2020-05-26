// Faça um algoritmo que solicite ao usuário A ou B
// Caso o usuário escolha A
// O algoritmo deve imprimir toda informação do carro com maior aceleração
// Caso o usuário escolha B
// O algoritmo deve imprimir toda informação do carro com maior potência
// Se houver mais de um carro imprimir todos 1 por 1.

var fs = require("fs")
var rs = require ('readline-sync')
var json = fs.readFileSync("./cars.json")
var cars = JSON.parse(json)

var option =rs.question ("Type A or B: ").toUpperCase()

if (option == "A"){
    var car = cars.sort ((a,b) => a.Acceleration - b.Acceleration)
    var bigger = car[car.length -1]
    var allTheBiggest = car.filter ((carro) => carro.Acceleration == bigger.Acceleration)
    console.log (allTheBiggest)
}else if (option == "B" ){
    var car = cars. sort ((a,b) => a.Horsepower - b.Horsepower)
    var bigger = car [car.length -1]
    var allTheBiggest =car.filter((carro) => carro.Horsepower == bigger.Horsepower)
    console.log (allTheBiggest)
} else {
    console.log ("ERROR,restart the program")
}