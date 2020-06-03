// Escreva uma função que recebe dois parâmetros numéricos e retorne o menor número.
// Solicite dois números para o usuário e forneça como argumento para esta função.
// Escreva o resultado da função na tela dizendo qual menor número.

// _________________________________________________FINALIZADO______________________________________________________________

var rs = require('readline-sync')

function NumMenor(n1, n2) {
    if (n1 < n2) {
        console.log(`o menor numero e ${n1}`)
    } else {
        console.log(`o menor numero e ${n2}`)
    }
}
var numero1 = rs.questionInt('Digite um numero: ')
var numero2 = rs.questionInt('Digite outro numero: ')

var menor = NumMenor(numero1, numero2)

console.log(menor)