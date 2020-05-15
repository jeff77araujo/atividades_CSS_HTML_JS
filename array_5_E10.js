// Faça um programa que receba uma palavra e verifica se ela termina com “al” 
// se termina com “al” então imprime a palavra se não imprime “palavra não identificada”.
// Utilize o método endsWith()

var rs = require('readline-sync')

var palavra = rs.question('Digite uma palavra: ')

console.log(palavra.endsWith('al'))
if (palavra.endsWith('al')) {
    console.log(`A palavra e ${palavra}`)
} else {
    console.log('Palavra nao identificada')
} // Finalizado