// Fazer um algoritmo que recebe 15 números de entrada e calcule a média dos
// números fornecidos.

var readlineSync = require('readline-sync')
var numero = readlineSync.questionInt("Digite um numero: ")
var cont = 1

while (cont < 15) {
    numero = numero + readlineSync.questionInt("Digite um numero: ")
    cont++
}
var media = numero / 15
console.log(media)

// Finalizado