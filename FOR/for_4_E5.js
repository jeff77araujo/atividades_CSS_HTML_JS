/*
Fazer um programa que calcule e imprima o fatorial de um número fornecido pelo usuário,
usando o comando For.. Perguntar ao usuário se ele deseja calcular o fatorial de
outro número e repetir a execução do programa tantas vezes quantas o usuário indicar.
Exemplo de tela de saída:
*/

// const fatorial = (n) => n === 0 || n === 1 ? 1 : n * fatorial(n-1)
//______________________________________________FINALIZADO_______________________________________________

var readlineSync = require('readline-sync')

var resultado = 1
var repetir = "repetir"

while (repetir == "repetir") {
    var numero = readlineSync.questionInt("Digite um numero: ")

    var resultado = 1
    for (; numero > 1; numero--) {
        resultado *= numero
    }
    console.log(`O fatorial e ${resultado}`)
    repetir = readlineSync.question("Digite REPETIR se deseja outro calculo ou qualquer outra tecla para SAIR: ").toLowerCase()
}
console.log("Programa encerrado.")
// finalizado