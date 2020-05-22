// este programa le o valor de um produto X

var rs = require("readline-sync")

var product = rs.question ("Product value: ")
var safe = rs.question ("Value inside the safe : ")

// N moedas de 1 real;
// N moedas de 50 cenvos;
// N moedas de 25 centavos;
// N modedas de 10 centavos;
// N moedas de  5 centavos;
// N moedas de 1 centavo;

if (product < safe){ 
console.log ("You can buy the product!")
}else {
    console.log("You cannot buy the product.")
}
