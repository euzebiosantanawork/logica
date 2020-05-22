/*
Ler o nome de um aluno e suas duas notas A e B, apos calcular 
a media ponderada entre estas notas (A tem 30% do peso do grau final
    e B tem 70% do peso). Repetir este procedimento para uma turma
    composta por cinco alunos, usanddo o comando For.
    EXEMPLO DE TELA DE SAIDA
    Entre com o nome do aluno:  Joao sa Silva
    Entre com o grau A: 5.0
    Entre com ograu B: 6.0
    O aluno Joao da silvta tem uma media de: 5.7

*/
var rs = require ("readline-sync")

for (i=0; i < 5; i++){
var name = rs.question ("Whats your name?")
var note1 = rs.questionInt ("Type your note: ")
var note2 = rs.questionInt ("Type your note: ")

var result = (note1 + note2) /2 
console.log (name +",this is your media:"+result ) 
}
