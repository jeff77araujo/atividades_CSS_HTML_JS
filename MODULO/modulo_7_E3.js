// Faça um algoritmo que receba um número e diga se ele é par ou ímpar
// Utilize o pacote : https://www.npmjs.com/package/is-odd

//______________________________________________FINALIZADO_______________________________________________
var isOdd = require('is-odd');
var rs = require ('readline-sync');

var numero = rs.questionInt('Digite um numero: ');

// var calculo = isOdd(numero);

if (isOdd (numero)) {
    console.log(`${numero} impar`);
} else {
    console.log(`${numero} par`);
} 
