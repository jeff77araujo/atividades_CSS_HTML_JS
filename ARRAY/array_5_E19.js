// Faça um algoritmo que receba um texto e remova todos os espaços em brancos no
// começo e no final do texto.
// Utilize o método trim()
// ________________________________________________FINALIZADO______________________________________________________

var rs = require('readline-sync');

var texto = rs.question('Digite um texto: ');

var res = texto.trim()

console.log(res)