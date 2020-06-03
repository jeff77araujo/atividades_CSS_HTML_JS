// Faça um algoritmo que receba um texto e imprima ele em letra maiuscula novamente.
// Utilize o método toUpperCase()
// ________________________________________________FINALIZADO______________________________________________________

var rs = require('readline-sync');

var palavra = rs.question('Digite uma palavra: ');

var res = palavra.toUpperCase()

console.log(res)