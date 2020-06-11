// 12. Faça um programa que receba uma palavra e diga se existe vogais ou não.
// Utilize o método indexOf()

var rs =  require("readline-sync");
var solicitapalavra = rs.question("Informe uma palavra: ");
var palavra = solicitapalavra
var letraA = palavra.indexOf("a");
var letraE = palavra.indexOf("e");
var letraI = palavra.indexOf("i");
var letraO = palavra.indexOf("o");
var letraU = palavra.indexOf("u");

if( letraA == -1 && letraE == -1 && letraI == -1 && letraO == -1 && letraU == -1){
    console.log("não existe vogais");
}
else{
    console.log("existe vogais");
    
}
