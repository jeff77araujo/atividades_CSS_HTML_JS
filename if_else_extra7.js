// Escreva um programa que apresente quatro opções:
// (a) consulta saldo, (b) saque e (c) depósito e (d) sair.
// O saldo deve iniciar em R$ 0,00.
// A cada saque ou depósito o valor do saldo deve ser atualizado. Exemplo:

// Caso o usuário tente sacar mais do que possui em conta, trazer uma mensagem de erro
// e retornar à tela de opções

// ____________________________________________FINALIZADO___________________________________________________________________

var rs = require('readline-sync')

var valorNaConta = 0

while (true) {
    var saldoEmConta = `SALDO: R$${valorNaConta.toFixed(2)}`
    var opcaoCaixa = rs.question('(a) consulta saldo, (b) saque e (c) deposito e (d) sair: ')
    if (opcaoCaixa === 'a') {
        console.log(saldoEmConta)
    } else if (opcaoCaixa === 'b') {
        var valorSaque = rs.questionFloat('Digite o valor do SAQUE: R$:')
        if (valorSaque > valorNaConta) {
            console.log('SALDO em conta insuficiente')
        } else {
            valorNaConta = valorNaConta - valorSaque
            console.log(`SAQUE de R$${valorSaque.toFixed(2)} efetuado com sucesso`)
        }
    } else if (opcaoCaixa === 'c') {
        var valorDeposito = rs.questionFloat('Digite o valor de DEPOSITO: R$:')
        valorNaConta = valorNaConta + valorDeposito
    } else if (opcaoCaixa === 'd') {
        console.log('Sessao encerrada.')
        break
    }
}