/*
Faça um algoritmo que receba uma palavra e imprima cada caractere da palavra em
uma linha.
EX: usuário informou MAÇÃ
O algoritmo imprime:
M
A
Ç
Ã
*/

var readlineSync = require('readline-sync')
var palavra = readlineSync.question("Digite uma palavra: ")

for (var i = 0; i < palavra.length; i++) {
       console.log(palavra.charAt(i))
}

// Finalizado