// Faça um algoritmo que receba um número e diga se ele é primo ou não
// Utilize o pacote : https://www.npmjs.com/package/prime-number

var ehprimo = require ('prime-number')
var rs = require ('readline-sync');

var numero = rs.questionInt('Digite um numero: ');

var calculo = new ehprimo(numero);

console.log(calculo) // quase terminado