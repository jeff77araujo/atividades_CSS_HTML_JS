// (OBRIGATÓRIO) Escreva um programa javascript para escrever o seguinte padrão na
// tela, com N linhas:
// *
// * *
// * * *
// * * * *
// * * * * *
// Onde N é um número maior que zero determinado pelo usuário (no exemplo, N=5).
// ______________________________________________FINALIZADO_____________________________________________________________

var rs = require('readline-sync');
var numero = rs.questionInt('Digite o numero de linhas: ')

var cont = 0
var sinal = ''

while (cont < numero) {
    sinal = sinal + '*'
    console.log(sinal)
    cont++
}

