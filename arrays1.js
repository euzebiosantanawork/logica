/*
1. Faça um algoritmo em que o usuário possa cadastrar preços de produtos e no final
exiba o preço de cada produto junto com o valor total. após inserir todos os produtos o
programa deve pedir o valor a ser pago, caso o valor passe do da compra exibir o troco,
se o valor for menor informar que a compra vai ser cancelada.
EX entradas :
0.75
0.25
2.50
Valor total pago: 5.00
O programa imprime :
Produto 1 - 0.75
Produto 2 - 0.25
Produtos 3 - 2.50
Total da compra : 3.50 $
Troco : 1.50 $
*/

var rs = require ("readline-sync")
var numberofProducts = rs.questionInt ("How many products\
 do you want to buy?")
var prices = [] ;
for (var counter= 0 ; counter < numberofProducts ; counter ++){
    var price = rs.questionFloat("Type the price of the product: ");
    prices . push (price);
}



var payment = rs.questionFloat (" Pay ( We do not accept coins): ")
var totalPurchase = 0;

for (var counter = 0; counter < prices.length; counter ++) {
    var currentProductPrice = prices [counter];
    console.log (`Product ${counter}: R$ ${currentProductPrice}`);
    var totalPrice = totalPurchase + currentProductPrice ;
    totalPurchase = totalPrice 
}

console.log(`Total purchase: R${totalPurchase}`);
 if (totalPurchase > payment){
      console.log ('Don`t have enugh money')
 } else if (payment > totalPurchase){
     console.log (`I'll get the chage...`);
     var change = payment - totalPurchase;
    console.log(`Your change ${change}, thank you! `)
 } else {
     console.log ('You gave the exact money, thanks!')
 }

