// Faça um algoritmo que calcule a média de potência dos carros da Europe (Europa)
// Similar a atividade 2 porém usaremos o campo Origin para selecionar os carros da
// europa e depois disso aplicar a média em cima do campo Horsepower.

var fs = require ('fs')

var json = fs.readFileSync("./cars.json")
var cars = JSON.parse(json)
var result = 0 

var source = cars.filter ((car) => car.Origin == "Europe")
source.forEach ((vehicle) => {
    result = result + vehicle.Horsepower
})

var mean = result / source.length
console.log (mean.toFixed(2))
