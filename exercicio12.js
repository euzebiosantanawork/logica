// faca um programa que receba 3 varivais
// leia o nome, o sexo e o estado civil da pessoa

var rs = require('readline-sync')

var nome = rs.question('Diga um nome: ')
var sexo = rs.question('Diga seu sexo, (F) para feminino e (M) para masculino ): ')
var civil = rs.question('Diga um seu estado civil SOLTEIRA, SOLTEIRO, CASADA, CASADO, DIVORCIADA, DIVORCIAD0: ')

// Caso seu sexo seja F e os estado civil seja CASADA, solicitar o tempo de casada (anos):
if( sexo.toUpperCase() =="f" && civil.toUpperCase() == "casada" ); {   
    var casamento = rs.question("Ha quanto tempo esta casada? ")
}

console.log("Obrigado por fornecer os seus dados!")
