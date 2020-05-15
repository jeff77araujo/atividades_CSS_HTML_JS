/*
Faça um programa que receba três notas, calcule e mostre a média aritmética entre elas, caso a média aritmética seja:
	Media maior ou igual a 7 imprimir : 
		 ALUNO APROVADO 
Media menor que 7 imprimir : 
         ALUNO REPROVADO
*/
var readlineSync = require('readline-sync')
var nota1 = readlineSync.questionInt("Digita nota 1: ")
var nota2 = readlineSync.questionInt("Digita nota 2: ")
var nota3 = readlineSync.questionInt("Digita nota 3: ")

var resultado = (nota1 + nota2 + nota3) / 3

if (resultado >= 7) {
    console.log("ALUNO APROVADO")
} else {
    console.log("ALUNO REPROVADO")
}

// Finalizado