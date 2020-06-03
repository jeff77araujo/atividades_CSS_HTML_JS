/*
Faça um algoritmo que receba um número e imprima todos seus divisores.
EX : usuário informou 21
O algoritmo imprime :
1
3
7
21
DICA: Você pode precisar usar a operação de módulo (a%b)
*/
//______________________________________________FINALIZADO_______________________________________________
var rs = require('readline-sync')
var numero = rs.question("Digite um numero: ")


for (var i = numero; i >= 0; i--) {
    if (numero % i == 0) {
    console.log(i)
    }
}

