// Crie um programa que peça o usuário n números e, quando o usuário digitar -1, imprima
// o maior e o menor, sem levar em consideração o -1

// ________________________________________________________Finalizado___________________________________________________

var rs = require('readline-sync')
var menor = 2000
var maior = 0
while (true) {
    var numero = rs.questionInt('Manda numero: ')
    if (numero == -1) {
        break
    }
    if (numero < 0) {
        var ig = numero
    }
     if (numero > maior) {
        maior = numero
    }
    if (numero < menor ){
        menor = numero
    }
}
console.log(`O numero maior é ${maior} e o menor é ${menor}`)