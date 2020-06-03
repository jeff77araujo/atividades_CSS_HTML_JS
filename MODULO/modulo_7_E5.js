// Faça um algoritmo que receba a data nascimento de uma pessoa e calcule sua idade.
// Utilize o pacote : https://www.npmjs.com/package/age-calculator

//______________________________________________FINALIZADO_______________________________________________
var {AgeFromDateString, AgeFromDate} = require('age-calculator')
var rs = require ('readline-sync');

var dataNascimento = rs.question('Digite sua data de nascimento (yyyy-mm-dd): ');

var idade = new AgeFromDateString(dataNascimento).age;

console.log(idade)