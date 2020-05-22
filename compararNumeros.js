var caixa = new caixaEletronico() //busca o caixa eletronico
var agencia = console.read ()//le agencia do usuario
var conta_corrente = console.read() //le conta corrent
var senha = console.read () // le senha
var valor = console.read ()// le valor
conta = caixa.abrirConta(agencia, conta_corrente, senha) // abre a conta do usuario
var saque = conta.realizarSaque(valor) //realizar o saque passando o valor
if(saque.suficiente()){
    saque.efetuarSaque() //enviar as notas para o usuario
} else {
    console.log ("Saldo insuficiente") //diz que nao ha saque
}