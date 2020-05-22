//fazer um programa pra ler o valor de DDI
// e informe o nome do pais

var rs = require("readline-sync")

var ddi = rs.questionInt("what is your IDD: ")
if (ddi == 1){
    console.log("United States")
}
if (ddi == 49){
    console.log("Germany")
}
if (ddi == 54){
    console.log("Argentina")
}
if (ddi == 55){
    console.log("Brasil")
}
if (ddi == 35){
    console.log("Portugual")
}