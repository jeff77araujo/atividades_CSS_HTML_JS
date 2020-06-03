/*
Faça um programa que recebe um número de entrada e repita a mensagem “BIP BIP”
de acordo com o número inserido.
EX: usuário inseriu 3
O programa imprime:
BIP BIP
BIP BIP
BIP BIP
*/
//______________________________________________FINALIZADO_______________________________________________
const readlineSync = require ('readline-sync')
var numero = readlineSync.question('Insira a quantidade de BIPEs que deseja: ')
var repeticao = 0


while(repeticao < numero) {
    console.log('BIP BIP')
    repeticao++
}
