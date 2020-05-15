// Faça um programa que receba um número via teclado e verifique se este número é par ou ímpar.

var pergunta = require ('readline-sync')
var numero = pergunta.question("Digite um numero: ")

if (numero % 2 == 1) {
    console.log("Numero impar")
} else {
    console.log("Numero par")
}

// Finalizado