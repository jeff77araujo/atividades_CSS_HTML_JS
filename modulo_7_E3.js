// Faça um algoritmo que receba um número e diga se ele é par ou ímpar
// Utilize o pacote : https://www.npmjs.com/package/is-odd


var isOdd = require('is-odd');
var rs = require ('readline-sync');

var numero = rs.questionInt('Digite um numero: ');

var calculo = isOdd(numero);

if (isOdd (true)) {
    console.log(`${numero} impar`);
} else {
    console.log(`${numero} par`);
} 
// quase terminado