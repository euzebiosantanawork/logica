/*
Faça um programa que vai receber duas entradas
A primeira entrada é o cabeçalho (HEADER) ela vai possuir o seguinte formato
campo1;campo2;campo3;campo4
Onde se quebrarmos a string por ‘;’ teremos o seguinte array
[0] campo1
[1] campo2
[2] campo3
[3] campo4
A quantidade de campos depende da quantidade de ‘;’ na entrada do cabeçalho então
se o usuário inserir mais ; terá mais campos no array
Utilize o método split(‘;’) para converter a string para array

A segunda entrada é o dado (DATA) ele vai possuir o mesmo formato acima porém com
valores entre ‘;’
valor1;valor2;valor3;valor4
[0] valor1
[1] valor2
[2] valor3
[3] valor4
A quantidade de campos depende da quantidade de ‘;’ na entrada do dado então se o
usuário inserir mais ; terá mais campos no array
Utilize o método split(‘;’) para converter a string para array
As duas entradas devem possuir a mesma quantidade de “;” isso vai permitir que elas
tenham tamanhos iguais no array e então teremos uma associação parecida com essa
abaixo :
Suponha que o usuario inseriu :
Cabeçalho : Nome;Sobrenome;Idade;Peso
Dado : Fulano;Ciclano;22;80

Caso a entrada possua mais campos (‘;’) que os valores ou vice versa o algoritmo deve
lançar e um erro e dizer que o formato não está compatível.
Sendo assim o algoritmo imprime :
Nome : Fulano
Sobrenome : Ciclano
Idade : 22
Peso : 80


 var rs = require("readline-sync")
 var fields = []
 var dates = []
var keep1 
 while (true){

    var keep1 = rs.question("To continue type Y, and N to exit: ").toUpperCase
     if(keep1 == 'Y'){
var field = rs.question ("Enter the name of the header: ")
fields.push(field)

  }
     else if (keep1 =='N'){
         break;
     }
 }
var keep2
while(true){
    
    if(keep2 == "Y"){
        var date = rs.question("Enter the name given in the field: ")
        dates.push(date)
        var keep2 =rs.question ("To continue type Y, and N to exit: ").toLocaleUpperCase
        
    }
    else if (keep2=="N"){
        break;
    }
}

if(fields.length != dates.length){
   console.log("Number of data entered different from the number of fields")
} else if(fields.length == dates.length) {
    for(var i = 0; i < fields.length; i++){
        console.log(`${fields[i]}: ${dates[i]}`)
    }

}

*/

var rs= require('readline-sync')
var data,header

header = rs.question("Enter names separated by `;`:")
data = rs.question ("Type dates separeted by `:`: ")

h=header.split(";")
d=data.split(";")

if(h.length==d.length){
    for(var i=0;i<h.length;i++){
        if(h[i]==`;`||d[i]==`;`){}
        else{console.log(h[i]+`:`+d[i])}
    }}else{console.log("Ivalid data!") }






