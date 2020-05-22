var rs = require('readline-sync')

var n = rs.questionInt('Diga uma nota: ')

if(n > 7 && n==7 && n < 10){
    console.log("Esta nota aprova o aluno(a)");
}

else if (n < 6 && n < 10 ){
console.log("Esta nota nao aprova o aluno(a)")
}