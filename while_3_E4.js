/*
Faça um programa que recebe um número e imprima todos os números pares de 0 até
o número inserido.
Ex: usuário inseriu 8
O programa imprime
0
2
4
6
8
*/

const readlineSync = require ('readline-sync')
var numero = readlineSync.questionInt("Digite um numero: ")

contagem = 0
while(contagem <= numero) {
    if (numero % 2 === 0) {
        console.log(contagem)
    }
    contagem++
}

// Finalizado

/*
numero  contagem contagem%2
4       0           0
4       1           1
4       2           0
4       3           1
4       4           0
*/