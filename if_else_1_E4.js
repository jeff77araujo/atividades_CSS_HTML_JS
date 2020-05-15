// As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 
// se forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs compradas, 
// calcule e escreva o valor total da compra

var pergunta = require ('readline-sync')
var quantidade = pergunta.question("Quantas macas voce deseja? ")
var soma = ""

if (quantidade < 12) {
    soma = quantidade * 0.30
    console.log("Sua compra deu " + soma.toFixed(2))
} else {
    soma = quantidade * 0.25
    console.log("Sua compra deu " + soma.toFixed(2))
}

// Finalizado