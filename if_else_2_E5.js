/*
Faça um programa que calcule e imprima o valor em reais de cada kw, o valor em reais a ser pago 
o novo valor a ser pago por essa residência com um desconto de 10%. Dado: 100 kilowatts custa 1/7 
do salario minimo. quantidade de kw gasto por residência.
*/

var readlineSync = require('readline-sync')
var ddi = readlineSync.questionFloat("Digite o DDI do Pais: ")

// Não fazer, pergunta sem sentido