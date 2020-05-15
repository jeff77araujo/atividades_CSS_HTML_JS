// Faça um programa para ler dois números inteiros A e B e informar se A é divisível por B.
var readlineSync = require('readline-sync')
var n1 = readlineSync.questionInt("Digite um numero (A): ")
var n2 = readlineSync.questionInt("Digite um numero (B): ")

if (n1 % 2 === 0 && n2 % 2 === 0) {
    console.log(n1 + " e divisivel por " + n2)
} else {
    console.log("A nao é divisivel por B")
}

// Finalizado