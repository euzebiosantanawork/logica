const fs = require ('fs');
var jsonSerializado = fs.readFileSync ('exercicios_arbyte/cars.json')
var carro = JSON.parse(jsonSerializado)
console.log(cars[0].Car)
