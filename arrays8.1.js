/*Faça um programa que vai receber duas entradas
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
Dado : Fulano;Ciclano;22;80*/
var rs=require('readline-sync')
var data,header
header=rs.question('Digite os campos separados por ;')
data=rs.question('Digite os dados separados por ;')
h=header.split(';')
d=data.split(';')
if(h.length==d.length){
for(var i=0;i<h.length;i++){
    if(h[i]==';'||d[i]==';'){}else{
        console.log(h[i]+' : '+d[i]) 
    }   
}}else{
    console.log('Dado inválido')
}