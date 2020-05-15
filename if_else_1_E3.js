/*
Escreva um programa que verifique a validade de uma senha fornecida pelo usuário. 
A senha válida é o número 1234. 
	Devem ser impressas as seguintes mensagens: 
	- ACESSO PERMITIDO caso a senha seja válida. 
    - ACESSO NEGADO caso a senha seja inválida
*/

var pergunta = require ('readline-sync')
var senha = pergunta.question("Digite a senha: ")

if (senha == 1234) {
    console.log("ACESSO PERMITIDO")
} else {
    console.log("ACESSO NEGADO")
}

// Finalizado