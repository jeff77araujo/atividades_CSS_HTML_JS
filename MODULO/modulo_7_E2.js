// Faça um algoritmo que receba peso e altura do usuário e calcule o IMC.
// Para fazer o calculo do IMC utilize : https://www.npmjs.com/package/fasam-imc-calc
//______________________________________________FINALIZADO_______________________________________________
var imc = require('fasam-imc-calc');
var rs = require ('readline-sync');

var peso = rs.questionFloat('Digite seu peso: ');
var altura = rs.questionFloat('Digite sua altura: ');

// var info = [peso, altura]

var calculoImc = new imc(peso,altura)

console.log(calculoImc.calc()) 
