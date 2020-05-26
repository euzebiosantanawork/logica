/*
Crie um algoritimo que solicite um numero para o usuario e diga
quantos carros mais potente que o valor informado.
Para isso utiliza a propriedade "Horserpower" do cars.json

DICA: funcao filter ou procure como contar quantos objetos tem x
valor em uma lista no google.
*/

var rs = require ("readline-sync")
var fs = require ('fs')

var json = fs.readFileSync ("./cars.json")
var cars = JSON.parse(json)


var power = rs.questionInt("insert a minimum power: ")
var carsWithPower = cars.filter ((car) => car.Horsepower > power)
console.log (carsWithPower.length)