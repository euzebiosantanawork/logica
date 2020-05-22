var rs = require('readline-sync')

var n = rs.questionInt('Diga um numero: ')

if(n >100 && n<200){
    console.log("Este e um numero dentro da faixa 100 e 200");
}

else {
console.log("Este e um numero fora da faiza 100 e 200")
}
