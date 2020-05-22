
var rs = require ('readline-sync')

var anoatual = rs.question ("Qual ano atual");
var anonascimento = rs.question ("Qual seu ano de nascimento?");
var idade = anoatual - anonascimento

if(idade < 16){
  console.log("Voce nao pode votar")
}else if(idade < 18){
  console.log("Voce pode votar, mas ano e obrigado!")
}else if (idade < 65 ){
 console.log("voce deve votar!")
} else {
 console.log("Voce nao e obrigado a votar mais tambem pode")
}