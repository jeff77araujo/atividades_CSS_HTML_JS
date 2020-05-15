/*
Tendo como entrada a altura e o sexo codificado da seguinte forma: 
	Valor 1 para feminino
	 Valor 2 para masculino
de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes 
Fórmulas: 
- para homens: (72.7 * Altura) – 58 
- para mulheres: (62.1 * Altura) – 44.7
*/

var readlineSync = require('readline-sync')
var sexo = readlineSync.questionInt("Qual o seu sexo? 1-Feminino ou 2-Masculino: ")
var altura = readlineSync.question("Digite a sua altura: ")

/*while (sexo != 2 || sexo != 1) {
    console.log("Digite 1 - Feminino ou 2 - Masculino: ")
}*/

if (sexo == 1) {
    var resultado = (62.1 * altura) - 44.7
    console.log("Seu peso ideal é: " + resultado)
} else {
    var resultado = (72.7 * altura) - 58
    console.log("Seu peso ideal é: " + resultado)
}

// Finalizado


