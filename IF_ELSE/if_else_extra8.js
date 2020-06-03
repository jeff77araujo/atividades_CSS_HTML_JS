// Escreva um programa que simule uma partida de pedra papel e tesoura.
// Deve ser solicitado o nome do jogador A e do jogador B.
// Após isso o programa deve pedir a jogada do jogador A e a jogada do jogador B.
// No final o programa deve imprimir quem ganhou.
// Dicas:
// Papel ganha de pedra
// Tesoura ganha de papel
// Pedra ganha de tesoura
// Para não exibir a jogada do jogador utilize o comando de “password” no readline-sync
// _______________________________________________________________________________________________________________
var rs = require('readline-sync')

console.log('JO-KEN-PO')
var jogador1 = rs.question('Digite o nome do jogador 1: ')
var jogador2 = rs.question('Digite o nome do jogador 2: ')
// var pedra = 'pedra'
// var tesoura = 'tesoura'
// var papel = 'papel'

while (true) {
    var mao1 = rs.question(`${jogador1} faca a jogada: `)
    var mao2 = rs.question(`${jogador2} faca a jogada: `)
    while (true) {
        if (mao1 === 'pedra' && mao2 === 'tesoura') { // pedra vence tesoura
            console.log(`Pedra quebra tesoura, ${jogador1} venceu`)
        } else {
            console.log(`Pedra quebra tesoura, ${jogador2} venceu`)
            break
        }
        if (mao1 === 'tesoura' && mao2 === 'papel') { // tesoura vence papel
            console.log(`Tesoura corta papel, ${jogador1} venceu`)
        } else {
            console.log(`Tesoura corta papel, ${jogador2} venceu`)
            break
        }
        if (mao1 === 'papel' && mao2 === 'pedra') { // papel vence pedra
            console.log(`Papel cobre pedra, ${jogador1} venceu`)
        } else {
            console.log(`Papel cobre pedra, ${jogador2} venceu`)
            break
        }
    }
}