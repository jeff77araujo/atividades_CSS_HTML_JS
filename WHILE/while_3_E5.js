/*
Faça um programa que calcule a potência (potenciação) de um número.
Para isso ele deve receber dois números de entrada: o primeiro número é a base da
potência, o segundo número será a potência.
EX: usuário inseriu 2 para base e 4 para potência.
O programa imprime :
16
Lembrando: 2

4 = 2*2*2*2
*/
//______________________________________________FINALIZADO_______________________________________________
const readlineSync = require('readline-sync')
var numero = readlineSync.questionInt("Digite um numero: ")
var potencia = readlineSync.questionInt("Digite a potencia: ")

resultado = 1

while (potencia > 0) {
    resultado = resultado * numero
    potencia --
}

console.log("O resultado e: " + resultado)

