// Faça uma programa que receba 4 notas e calcule a média e apresente ao usuário a
// média no final.
// Utilize o pacote : https://www.npmjs.com/package/median

var median = require ('median'); // tira a mediana
var average = require ('average') // tira a média
var rs = require ('readline-sync');

var notas = [];

console.log('Digite as notas: ');
for (var i = 0; i < 4; i++) {
    var nota = rs.questionInt('> ');
    notas[i] = nota;
}

var mediaCalculada = average(notas);
var medianaCalculada = median(notas)
console.log(`A media é ${mediaCalculada} e a mediana é ${medianaCalculada}`)  // Finalizado