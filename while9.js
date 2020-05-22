var readlineSync = require ('readline-sync')
var palavra = readlineSync.question('Isira aqui uma palavra: ')

var novapalavra = ''

for (var i = palavra.length; i >=0; i--) {
novapalavra = novapalavra + palavra.charAt(i)
}
console.log (novapalavra)