/*
Escreva um programa que leia as medidas dos lados de um triângulo e escreva se ele é Equilátero, Isósceles ou Escaleno. 
	Sendo que: 
− Triângulo Equilátero: possui os 3 lados iguais. 
− Triângulo Isóscele: possui 2 lados iguais. 
− Triângulo Escaleno: possui 3 lados diferentes. 
*/
//______________________________________________FINALIZADO_______________________________________________
var readlineSync = require('readline-sync')
var lado1 = readlineSync.questionInt("Medida 1: ")
var lado2 = readlineSync.questionInt("Medida 2: ")
var lado3 = readlineSync.questionInt("Medida 3: ")

if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3) {
    console.log("Equilatero")
} else if (lado1 != lado2 && lado1 != lado3 && lado2 == lado3) {
    console.log("Escaleno")
} else if (lado1 == lado2 && lado1 == lado3) {
    console.log("Isóscele")
} else if (lado2 == lado1 && lado2 == lado3) {
    console.log("Isóscele")
} else if (lado3 == lado1 && lado3 == lado2) {
    console.log("Isóscele")
}

// Finalizado