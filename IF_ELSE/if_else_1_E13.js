// Encontrar o dobro de um número caso ele seja positivo e 
// o seu triplo caso seja negativo, imprimindo o resultado.
//______________________________________________FINALIZADO_______________________________________________
var rs = require('readline-sync')
var numero = rs.questionInt("Digite um numero: ")
var resultado

if (numero > 0) {
    resultado = numero * 2
    console.log(resultado)
}
if (numero < 0) {
    resultado = numero * 3
    console.log(resultado)
} 

