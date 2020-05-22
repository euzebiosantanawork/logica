/* faca um algoritimo que receba um texto de entrada e diga
se a primeira letra e maiuscula ou nao */
var rs = require(" readline-sync")
var txt = rs.question('Type text here:',{ defaultImput: "Euzebio"})
console.log(txt[0])
if (txt[0] === txt[0].toUpperCase(0) ){
    console.log ("First letter and uppercase")
} else {
    console.log ("The first letter is not capitalized")
}