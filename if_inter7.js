/* Elabore um programa para testar se uma senha digitada e igaul a "batatafrita" Se a senha 
estiver correta escreva
"acesso permitido"
do contrario emita a mensagem
"Voce nao tem acesso ao sistema" */

var rs = require("readline-sync")

var pass = rs.question("Type the passoword: ")
if (pass == "batatafrita"){
    console.log ("Access allowed")
} else {
   console.log("You don't have access to the system") 
}