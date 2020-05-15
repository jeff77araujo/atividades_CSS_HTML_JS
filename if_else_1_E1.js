/* Escreva um programa para ler o ano de nascimento de uma pessoa e 
escrever uma mensagem que diga se ela poderá ou não votar este ano 
(não é necessário considerar o mês em que ela nasceu).
*/

var pergunta = require ('readline-sync')
var idade = pergunta.question("Qual a sua idade?")
if (idade < 16) {
    console.log("Nao pode votar")
} else if (idade < 18 || idade >= 65) {
    console.log("Voto opcional")
} else {
    console.log("Voto obrigatorio")
}

// Finalizado