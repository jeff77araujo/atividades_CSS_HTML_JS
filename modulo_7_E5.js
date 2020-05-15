// Faça um algoritmo que receba a data nascimento de uma pessoa e calcule sua idade.
// Utilize o pacote : https://www.npmjs.com/package/age-calculator

var ageCalculator = require('age-calculator')
var rs = require ('readline-sync');

var dataNascimento = rs.questionInt('Digite sua data de nascimento: ');

var idade = ageCalculator(dataNascimento);

console.log(idade) // quase terminado