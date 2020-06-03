/*
Faça um programa que leia o valor de um produto X e leia a quantidade de reais de um cofrinho que contenha:  
N moedas de 1 real; 
N moedas de 50 centavos; 
N moedas de 25 centavos; 
N moedas de 10 centavos; 
N moedas de 5 centavos; 
N moedas de 1 centavos. 

O programa deverá verificar se o total de reais que contém no cofrinho é o bastante para compra o 
produto X e imprimir se possui ou não valor suficiente
*/
//______________________________________________FINALIZADO_______________________________________________
var readlineSync = require('readline-sync')
var preço = readlineSync.questionFloat("Digite o valor do produto: ")
var moeda1R = readlineSync.questionInt("Digite quantidade de moedas de 1 real: ")
var moeda50 = readlineSync.questionInt("Digite quantidade de moedas de 50 cents: ")
var moeda25 = readlineSync.questionInt("Digite quantidade de moedas de 25 cents: ")
var moeda10 = readlineSync.questionInt("Digite quantidade de moedas de 10 cents: ")
var moeda5 = readlineSync.questionInt("Digite quantidade de moedas de 5 cents: ")
var moeda1c = readlineSync.questionInt("Digite quantidade de moedas de 1 cent: ")

var valorTotal1R = moeda1R * 1
var valorTotl50 = moeda50 * 0.50
var valorTotal25 = moeda25 * 0.25
var valorTotal10 = moeda10 * 0.10
var valorTotal5 = moeda5 * 0.05
var valorTotal1C = moeda1c * 0.01

var somaTotal = valorTotal1R + valorTotl50 + valorTotal25 + valorTotal10 + valorTotal5 + valorTotal1C

if (preço < somaTotal) {
    console.log(`Voce possui o valor de R$ ${somaTotal}, pode comprar o produto de R$ ${preço.toFixed(2)}`)
} else {
    console.log(`Voce possui o valor de R$ ${somaTotal}, valor insuficiente para comprar o produto`)
}

