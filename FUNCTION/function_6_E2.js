/*
Faça uma função que recebe por parâmetro um valor inteiro e positivo e retorna o valor
lógico Verdadeiro caso o valor seja primo e Falso em caso contrário.
Solicite ao usuário o número e no final imprima se é primo ou não utilizando a função na
condição IF.
*/
//______________________________________________FINALIZADO_______________________________________________
function ehPrimo(numero) {
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

var rs = require('readline-sync');
var numero = rs.questionInt('Digite um numero maior que 0: ');

if (ehPrimo(numero)) {
    console.log("Eh primo");
} else {
    console.log("Nao eh primo");    // Finalizado
}