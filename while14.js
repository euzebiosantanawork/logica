/* faca um algoritimo que  receba 8 idades do usuario e no final ele imprime
qual e a menor idade */

 var rs = require('readline-sync')

 var cont = 8;
 var age = 0;
 var small =999;


 while  (cont > 0){ 
  age = rs.questionInt("Type an age: ");
 if (small > age){
 small = age;
 }
 cont --
}
console.log (small)