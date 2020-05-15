/*
Faça um programa que pergunta ao usuário :
“Insira 0 para sair ou qualquer outra tecla para o continuar.”
Se o usuário inserir 0 o programa encerra.
Se o usuário inserir qualquer outra coisa o programa pergunta novamente :
“Insira 0 para sair ou qualquer outro número para o continuar.”
Até o usuário sair
*/

const readlineSync = require ('readline-sync')
var numero = readlineSync.questionInt("Insira 0 para sair ou qualquer outra tecla para o continuar.")
var contador = 0

while (numero !=0) {
    numero = readlineSync.questionInt("Insira 0 para sair ou qualquer outra tecla para o continuar.")
}

console.log("Encerrado")

// Finalizado