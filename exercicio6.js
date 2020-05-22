var rs= require('readline-sync');
var sexo = rs.question ("Digite seu sexo [1] feminino. [2] masculino: ");
var altura = rs.questionFloat ("qual sua altura?:")

if (sexo == 2){
var pesoIdadelM = (72.7*altura) - 58
console.log ("Seu peso ideal:"+ pesoIdadelM.toFixed(2) + "!")
}else{
    var pesoIdadelF = (62.1*altura) - 44.7
console.log ("Seu peso ideal:"+ pesoIdadelF.toFixed(2) + "!")
}
console.log ("Se exercite! Isso faz bem para a saude!")