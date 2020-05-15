/*
Faça um programa que pergunte ao usuário escolher duas opções A e B.
A encerra o programa, B é pra fazer uma soma.
a. Se o usuário inserir A o programa fecha
b. Se o usuário inserir B o programa vai realizar uma operação de soma,
solicitando dois números inteiros (n1 e n2) onde após o usuário inserir o
segundo número o algoritmo deve apresentar a soma e também pergunta se
quer realizar outro cálculo.
c. Se o usuário inserir qualquer coisa diferente de A ou B o programa deve dizer
que não entendeu o comando e solicitar novamente para inserir A ou B
*/

var readlineSync = require('readline-sync')

while (true) {
    var opcao = readlineSync.question("Digite A (para sair) ou B (para efetuar uma soma): ")
    if (opcao == "A") {
    break
    } else if (opcao == "B") {
        var n1 = readlineSync.questionInt("Digite um numero: ")
        var n2 = readlineSync.questionInt("Digite outro numero: ")
        console.log("A soma entre os numeros e:", n1 + n2)
    } else {
        console.log("Não entendi!")
    }
}

console.log("Programa encerrado.")

// Finalizado