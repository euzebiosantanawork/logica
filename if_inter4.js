/* Uma empresa aabriu uma linha de credito para os funcionarios>
O valor da prestacao nao pode ultrapassar 30% do salario

Faca um programa que receba o salario, o valor do emprestimo o numero
de prestacoes e informe se o emprestimo pode ser concedido. Nenhum dos 
valores informados pode ser zero ou negativo */

var rs = require("readline-sync")

var salary = rs.questionInt("what is your salary? ")
var istallment = rs.questionInt ("what is the desired benefit?")
var pay =rs.questionInt ("How many installments do you want to pay?")

var percentageAllowed = salary / 100
var thirtyP = percentageAllowed * 30

if (salary <= 0 || istallment <= 0 || pay<= 0 ){
console.log ("Invalid information, no assigned number can be (0)")
} else if(istallment <= thirtyP ){
 console.log (`Your loan has been accepted: The installments for your loan have cost: ${istallment/pay} in ${pay} times  `)
 
}else if (istallment > thirtyP) {
      console.log ("Requested value greater than the limit; Try again")
}
