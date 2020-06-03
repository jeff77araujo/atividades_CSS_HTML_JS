/*
(FULL JOIN) Faça um algoritmo que receba o nome de dois jogadores e após isso peça
5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
jogador B.
Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
que apenas o jogador A e B colocou sem repetir nenhum número
EX: Jogador A : 1, 2, 3, 4, 5
Jogador B : 1,2,3,8,7
Algoritmo imprime :
1,2,3,4,5,7,8
*/
//______________________________________________FINALIZADO_______________________________________________
var rs = require('readline-sync');
var jogador1 = rs.question('Qual e o seu nome? '); // pergunta o nome
var numeroJogador1 = []

for (var cont = 0; cont < 5; cont++) {
    var numeros1 = rs.questionInt('Digite de 1 a 10: '); // pede 5 números de 1 a 10
    numeroJogador1.push(numeros1)
}
console.log(jogador1, numeroJogador1)

var jogador2 = rs.question('Qual e o seu nome? '); // pergunta o nome
var numeroJogador2 = []

for (var cont = 0; cont < 5; cont++) {
    var numeros2 = rs.questionInt('Digite de 1 a 10: '); // pede 5 números de 1 a 10
    numeroJogador2.push(numeros2)
}
console.log(jogador2, numeroJogador2)

var numerosConcatenados = [].concat(numeroJogador1)

for (var indice = 0; indice < 5; indice++) {
    if (numerosConcatenados.indexOf(numeroJogador2[indice]) === -1) {
        numerosConcatenados.push(numeroJogador2[indice])
    }

}

console.log("A juncao dos numeros fica:", numerosConcatenados)  // Finalizado
