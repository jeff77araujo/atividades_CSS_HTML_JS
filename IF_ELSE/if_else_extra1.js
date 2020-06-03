// (OBRIGATÓRIO) Escreva um programa que pedirá para o usuário dois números entre 1
// e 100. O programa deve, então, iterar de um em um do menor pro maior, sempre
// imprimindo o número na tela do usuário. Entretanto, caso o número seja divisível por 7,
// o programa deve ao invés disso imprimir a palavra “Ping”. Caso o número seja divisível
// por 5, o programa deve imprimir “Pong”. Caso o número seja divisível por 7 e 5, o
// programa deveria imprimir a mensagem “Ping Pong”. Dica: Neste exercício vocês talvez
// precisem fazer uso do recurso “user.questionInt()” que transforma o conteúdo de um
// input do usuário de string para inteiro.

// __________________________________________Finalizado___________________________________________________________

var rs = require('readline-sync')
var menor, maior
var n1 = rs.questionInt('Digite um numero: ')
var n2 = rs.questionInt('Digite outro numero: ')

if (n1 > n2) {
    maior = n1
    menor = n2
} else {
    menor = n1
    maior = n2
}

for (; menor <= maior; menor++) {
    if ((menor % 7 === 0) && (menor % 5 === 0)) {
        console.log('PING PONG')
    } else if (menor % 7 === 0) {
        console.log('PING')
    } else if (menor % 5 === 0) {
        console.log('PONG')
    } else {
        console.log(menor)
    }
}  // Finalizado