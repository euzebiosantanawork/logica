
// Faça um algoritmo que diga qual é o carro menos potente da lista cars.json.
// Utilize o campo Horsepower para descobrir qual é o menos potente

var fs = require ("fs")

var json = fs.readFileSync ("./cars.json")
var cars = JSON.parse (json)
var car = cars.sort((a,b) => a.Horsepower - b.Horsepower)

console.log (car[0])