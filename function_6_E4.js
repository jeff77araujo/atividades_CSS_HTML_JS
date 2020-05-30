// Faça um procedimento que recebe, por parâmetro, um valor N e calcula e escreve a
// tabuada de 1 até N. Mostre a tabuada na forma:
// 1 x N = N
// 2 x N = 2N
// ...
// N x N = N2
// Após isso solicite o usuário um número e forneça o argumento do usuário para a
// função.

// _________________________________________________FINALIZADO______________________________________________________________

var rs = require('readline-sync')

function Tabuada(n) {
    var imprime = []
    for (let i = 1; i <= n; i++) {
        var calculo = i * n
        imprime.push(`${i} x ${n} = ${calculo}`)
    }
    return imprime
}
var numero = rs.questionInt('Digite um numero: ')

var tabela = Tabuada(numero)

console.log(tabela.join('\n'))