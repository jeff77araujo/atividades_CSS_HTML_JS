/*
Fazer um algoritmo que receba 5 números e mostra o produto dos ímpares e
a soma dos pares
EX: valores fornecidos 1,2,3,4,5
Impares -> 1 * 3 * 5 = 15
Pares -> 2 = 4 = 6
O programa imprime :
Produtos dos impares : 15
Soma dos pares : 6
*/

var readlineSync = require('readline-sync')
var n1 = readlineSync.questionInt("Digite um numero: ")
var n2 = readlineSync.questionInt("Digite um numero: ")
var n3 = readlineSync.questionInt("Digite um numero: ")
var n4 = readlineSync.questionInt("Digite um numero: ")
var n5 = readlineSync.questionInt("Digite um numero: ")

var numeros = [n1, n2, n3, n4, n5]

var cont = 0
var soma = 0
var produto = 1

while (cont < numeros.length) {
    if (numeros[cont] % 2 == 0) {
        soma = soma + numeros[cont]
    } else {
        produto = produto * numeros[cont]
    }
    cont++
}
console.log(numeros)
console.log(soma)
console.log(produto)  // finalizado