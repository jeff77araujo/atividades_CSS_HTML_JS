// Fazer um algoritmo que recebe 15 números de entrada e calcule a média dos
// números fornecidos.
//______________________________________________FINALIZADO_______________________________________________
var rs = require('readline-sync')
var numero = rs.questionInt("Digite um numero: ")
var cont = 1

while (cont < 15) {
    numero = numero + rs.questionInt("Digite um numero: ")
    cont++
}
var media = numero / 15
console.log(media)
