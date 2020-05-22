// encontre o dobro de um numero caso ele seja positivo
// encontre o triplo deste mesmo numero, caso seja negativo

var rs = require('readline-sync')

var n = rs.questionInt('Diga um numero: ')

if(n > 0){
    console.log( n * 2);
}

else{
    console.log(n * 3);
}