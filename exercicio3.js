var rs= require('readline-sync')
var senha = rs.question ("Digite uma senha: ") 

if (senha == 1234){
    console.log ("ACESSO PERMITIDO")
}else{
    console.log ("ACESSO NEGADO")
}
console.log("Acabou o codigo!")