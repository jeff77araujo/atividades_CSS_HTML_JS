// Escolha um programa que você já fez em atividades passadas e faça o output do
// terminal ficar colorido com o pacote CHALK: https://www.npmjs.com/package/chalk

var chalk = require('chalk')
var median = require ('median');
var rs = require ('readline-sync');

var notas = [];

console.log('Digite as notas: ');
for (var i = 0; i < 4; i++) {
    var nota = rs.questionInt('> ');
    notas[i] = nota;
}

var mediaCalculada = median(notas);
console.log(`A media é ${mediaCalculada}`)  // não terminei