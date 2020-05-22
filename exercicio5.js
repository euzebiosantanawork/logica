// Escrevendo os valores em ordem crescente


var rs= require('readline-sync');
var n1 = rs.questionInt ("Digite o numero 1: ");
var n2 = rs.questionInt ("Digite o numero 2: ");
var n3 = rs.questionInt ("Digite o numero 3: ");

//  05   06    06   07
if (n1 < n2 && n2 < n3) {
    var maior = n3
    var medio = n2
    var menor = n1
}
else if(n1 <n3 && n3 < n2) {
    var maior = n2
    var medio = n3
    var menor = n1
}
else if(n2 < n1 && n1 < n3) {
    var maior = n3
    var medio = n1
    var menor = n2
}
else if (n2 < n3 && n3 < n1) {
    var maior = n1
    var medio = n3
    var menor = n2
}
else if (n3 < n2 && n2 < n1) {
    var maior = n1
    var medio = n2
    var menor = n3
}
else if (n3 < n1 && n1 < n2) {
    var maior = n2
    var medio = n1
    var menor = n3
}
 console.log (menor, medio, maior);
 
