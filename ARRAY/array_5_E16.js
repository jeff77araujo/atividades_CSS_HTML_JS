// Faça um algoritmo que verifica se uma string comece com a palavra google
// Caso comece imprima que a palavra é valida se não diga que não conhece o serviço.
// EX: entrada Google drive
// O algoritmo imprime
// Palavra valida
// Utilize o método startsWith()
// ________________________________________________FINALIZADO______________________________________________________

var rs = require('readline-sync')

var frase = rs.question('Digite uma frase: ').toLowerCase()

var res = frase.startsWith('google')
if (res == true) {
    console.log('Frase valida.')
} else {
    console.log('Servico nao reconhecido.')
}