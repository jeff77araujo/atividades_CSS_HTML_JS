//Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. 
//Caso sexo seja “F” e estado civil seja “CASADA”, solicitar o tempo de casada (anos).

var readlineSync = require('readline-sync')
var nome = readlineSync.question("Qual e o seu nome? ")
var sexo = readlineSync.question("Digite seu sexo = F ou M: ")
var civil = readlineSync.question("Qual e o seu estado civil? ")

if (sexo == "F") {
var casada = readlineSync.question("Qual seu tempo de casada? ")
}

console.log(nome,sexo,civil,casada)

// Finalizado

