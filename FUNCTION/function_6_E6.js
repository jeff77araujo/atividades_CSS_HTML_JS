// Escreva uma função que receba dois números o primeiro será a base e o segundo a
// potência e no final a função retorna a base elevada pela potência.
// Faça um programa que peça ao usuário a base e a potência e forneça para a função,
// no final imprima o resultado.
// OBS: O algoritmo só precisa saber lidar com números inteiros.

// _________________________________________________FINALIZADO______________________________________________________________

var rs = require('readline-sync')

function potenciacao(n1, n2) {
    var calculo = Math.pow(n1, n2)
    console.log(`${n1} elevado a potencia ${n2} = ${calculo}`)
}
var base = rs.questionInt('Digite a base: ')
var potencia = rs.questionInt('Digite a potencia: ')

var res = potenciacao(base, potencia)

console.log(res)