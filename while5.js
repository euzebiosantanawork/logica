/* 
Faca um programa que calcule a potencia de um numero,
para isso ele deve receber dois numeros, o primeiro 
e a base da pontencia e o segundo numero sera a potencia

exemplo:
usuario inseriu 2 para base e 4 para a potencis
O programa imprime 16

lembrando+ 2 elevedo a 4 = 2*2*2*2
*/
var rs= require("readline-sync")
var base = rs.question ("Type power base:") //base: 4
var power = rs.question ("Power: ") //power: 3

cont = 0
result = 1


while (cont < power ){     // enquanto(  3 < 3 ) (false) ("nuvem do programa", novo cont == 0 >>> 1 >>> 2)
result = result * base     // 16 = 16 * [base] 4 ("nuvem do programa", novo  result == 0 >>> 4 >>> 16 >>> 64)
cont ++                    // 1 ++ == 1 + 1 = 2 ("nuvem do programa", novo cont == 0 >>> 1 >>> 2 >>> 3)
}

console.log (result)

