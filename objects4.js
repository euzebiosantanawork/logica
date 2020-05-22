/*

*/
var rs = require('readline-sync')
var carro = {}

carro.marca= rs.question ("Escolha a marca do automovel:")
 carro.cor = rs.question ("Escolha a cor do automovel:")
 carro.modelo= rs.question ("Escolha o modelo do automovel:")

 console.log(`Seu automovel e um ${carro.marca},\
 modelo ${carro.modelo}. de cor ${carro.cor}`)