// Elabore um programa para testar se uma senha digitada é igual a “batatafrita”.
// Se a senha estiver correta escreva
// “Acesso permitido”,
// do contrário emita a mensagem
// “Você não tem acesso ao sistema”.

var rs = require('readline-sync')
var senha = rs.question("Digite a senha: ")

if (senha == 'batatafrita') {
    console.log('Acesso permitido')
} else {
    console.log('Voce nao tem acesso ao sistema')
}



// Finalizado