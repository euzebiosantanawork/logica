var rs= require('readline-sync');
var A = rs.questionInt ("Digite um numero representado por A: ");
var B = rs.questionInt ("Digite um numero representado por B: ");

//var = nA nB

if  (A%B==0) {
    console.log ('O numero A e divisivel por B')

}else{
    console.log ('O numero A nao e divisivel por B')
}