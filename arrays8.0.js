var rs = require("readline-sync");
var campos = []
var cont = 0
var dados = []



while (true) {
    if (cont == 0) {
        var campo = rs.question("Informe o nome do carebalho: ");
        campos.push(campo)
        var cont = rs.questionInt("Para continuar a inserir campos digite zerou ou qualquer outro numero para sair: ")
    }
    else {
        break
    }
}

var cont = 0 
while (true) {
    if (cont == 0) {
        var dado = rs.question("Informe o nome dado do campo: ");
        dados.push(dado)
        var cont = rs.questionInt("Para continuar a inserir campos digite zerou ou qualquer outro numero para sair: ")
    }
    else {
        break
    }
}

if( campos.length != dados.length){
    console.log("Numeros de dados inseridos diferente de numero de campos")
}
else if(campos.length == dados.length){
    for(var i = 0; i < campos.length; i++){
        console.log(`${campos[i]}: ${dados[i]}`)
    }
}