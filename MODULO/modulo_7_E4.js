// Faça um algoritmo que receba um número e diga se ele é primo ou não
// Utilize o pacote : https://www.npmjs.com/package/prime-number
//______________________________________________FINALIZADO_______________________________________________
var ehprimo = require ('prime-number')
var rs = require ('readline-sync');

var numero = rs.questionInt('Digite um numero: ');


if (ehprimo (numero)) {
    console.log(`${numero} eh primo`);
} else {
    console.log(`${numero} nao eh primo`);
} 

