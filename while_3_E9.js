/*
Faça um algoritmo que receba uma palavra e imprima ela ao contrário.
EX: usuário informou BANANA
Algoritmo imprime:
ANANAB
*/

var readlineSync = require('readline-sync')
var palavra = readlineSync.question("Digite uma palavra: ")
var novaPalavra = ''

for (var i = palavra.length; i >= 0; i--) {
       novaPalavra = novaPalavra + palavra.charAt(i)
}
console.log(novaPalavra)

// Finalizado