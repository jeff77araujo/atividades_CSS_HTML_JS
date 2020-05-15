/*
(RIGHT JOIN) Faça um algoritmo que receba o nome de dois jogadores e após isso
peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
jogador B.
Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
que apenas o jogador B colocou diferente do A.
EX: Jogador A : 1, 2, 3, 4, 5
Jogador B : 1,2,3,8,7
Algoritmo imprime :
8,7
*/

var rs = require('readline-sync');
var jogador1 = rs.question('Qual e o seu nome? '); // pergunta o nome
var quantidade = 5
var numeroJogador1 = []
for (var cont = 0; cont < quantidade; cont++) {
    var numeros1 = rs.questionInt('Digite de 1 a 10: '); // pede 5 números de 1 a 10
    numeroJogador1.push(numeros1)
}
console.log(jogador1, numeroJogador1)

var jogador2 = rs.question('Qual e o seu nome? '); // pergunta o nome
var quantidade = 5
var numeroJogador2 = []
for (var cont = 0; cont < quantidade; cont++) {
    var numeros2 = rs.questionInt('Digite de 1 a 10: '); // pede 5 números de 1 a 10
    numeroJogador2.push(numeros2)
}
console.log(jogador2, numeroJogador2)

var numerosDiferentes = []
for (var indice2 = 0; indice2 < 5; indice2++) {     // loop para verificar os numeros diferentes
    var numeroExiste = false
    for (var indice1 = 0; indice1 < 5; indice1++) {
        if (numeroJogador2[indice2] === numeroJogador1[indice1]) {
            numeroExiste = true
            break;
        }
    }
    if (numeroExiste === false) {
        numerosDiferentes.push(numeroJogador2[indice2])
    }
}

console.log("Os numeros diferentes do jogador 2 sao:", numerosDiferentes)      //  Finalizado
