

function ehPrimo(numero) {
   for (var i = 2; i < numero; i++) {
       if (numero% i == 0){
           return false;
       }
   }
}
var rs =require('readline-sync');
var num = rs.questionInt ("Digite um numero maior que zero: ")

if(ehPrimo(num)){
    console.log("e primo");
}else{
    console.log("Nao e primo");
}
console.log (5,ehPrimo(5));
console.log (12, ehPrimo (12));