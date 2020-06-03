// Faça um algoritmo que receba um texto e imprima ele em letra minuscula novamente.
// Utilize o método toLowerCase()
// ________________________________________________FINALIZADO______________________________________________________

var rs = require('readline-sync');

var palavra = rs.question('Digite uma palavra: ');

var res = palavra.toLowerCase()

console.log(res)