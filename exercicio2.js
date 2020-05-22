var rs= require('readline-sync')
var numero = rs.question ("Digite um numero") 

if (numero % 2 == 0){
    console.log ("Este e um numero par")
}else{
    console.log ("Este e um numero impar")
}
console.log("Acabou o codigo!")