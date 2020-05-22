/* Elabore um algaritimo que calulo o que deve ser pado por um prodto, 
solicitanod o preco da etiqueta do produto e escolha a condicao de pagamento.
Utilize ps codigos da tabela a seguir para ler qual a condicao de pagamento 
escolhida e efetuar o calculo adequado. Codigo Condicao de pagamento:
1. A vista em dinheiro ou cheque, recebe 10% de desconto
2. a vista no cartao de credito, recebe 15% de desconto
3. Em duas vezes , preco normal de etiqueta sem juros
4. Em duas vezes, preco normal de etiqueta mais juros de 10% */

var rs = require("readline-sync")

var price = rs.questionInt("What is the price on the label? ")
var payment = rs.questionInt(
    "Enter the number to choose your payment method: \
    1. Cash or check, receive 10% discount\
    2. cash on the credit card receives 15% discount\
    3. Twice, normal interest-free label price\
    4. Twice, normal tag price plus 10% interest . Type it:"
)
if (payment == 1) {
    var mode1 = price *0.9
    console.log (" You received a 10% discount, so you will pay: "+mode1 )
}else if ( payment == 2){
    var mode2 = price * 0.85
    console .log  (" You received a 15% discount, so you will pay: "+mode2 )
}else if (payment == 3){
    console.log ("You will pay: "+price)
}else if (payment == 4){
    var mode3 = price *1.10
    console.log ("You will pay with 10% interest: "+mode3)
} else {
    console.log ("You typed the wrong option, try again.")
}
