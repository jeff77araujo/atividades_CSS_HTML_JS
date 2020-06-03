var n1, n2
var numero = require ('readline-sync')

n1 = numero.question('Qual e o primeiro numero?')
n2 = numero.question('Qual e o segundo numero?')

if (n1 > n2) {
    console.log("O numero: " + n1 + " e maior")
} else if (n1 < n2) {
    console.log("O numero: " + n2 + " e maior")
} else {
    console.log("Os numeros sao iguais!");
}
//______________________________________________FINALIZADO-TESTE_______________________________________________