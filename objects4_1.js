var rs = require('readline-sync')
var carro = {}

function devolveCarro(){
    var carro = {}
carro.marca= rs.question ("Escolha a marca do automovel:")
 carro.cor = rs.question ("Escolha a cor do automovel:")
 carro.modelo= rs.question ("Escolha o modelo do automovel:")
 return carro
}

var automovel = devolveCarro()

 console.log(automovel)