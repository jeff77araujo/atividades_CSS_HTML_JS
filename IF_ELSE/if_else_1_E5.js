// Escreva um programa para ler 3 valores inteiros 
// (considere que  não serão lidos valores iguais) e escrevê-los em ordem crescente. 
//______________________________________________FINALIZADO_______________________________________________
var pergunta = require('readline-sync')
var n1 = pergunta.questionInt("Digite primeiro numero: ")
var n2 = pergunta.questionInt("Digite segundo numero: ")
var n3 = pergunta.questionInt("Digite terceiro numero: ")
var maior, menor, meio

// n1 = 5, n = 3, n = 7

menor = n1;
if (n2 < menor) { menor = n2; }
if (n3 < menor) { menor = n3; }

maior = n1;
if (n2 > maior) { maior = n2; }
if (n3 > maior) { maior = n3; }

if (maior == n1 && menor == n2) {
    meio = n3;
} else if (maior == n1 && menor == n3) {
    meio = n2;
} else if (maior == n2 && menor == n1) {
    meio = n3;
} else if (maior == n2 && menor == n3) {
    meio = n1;
} else if (maior == n3 && menor == n1) {
    meio = n2;
} else if (maior == n3 && menor == n2) {
    meio = n1
}

console.log(menor, meio, maior);

// Finalizado